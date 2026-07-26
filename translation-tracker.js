// ===== SYSTÈME DE TRACKING DES TRADUCTIONS =====
// Capture chaque traduction et l'envoie IMMÉDIATEMENT au backend (pas de lots).
// Le serveur ne conserve que les traductions révélant un mot absent du
// dictionnaire (marqueur [mot]) et fusionne les doublons via un compteur —
// voir /api/track/translation dans server.js.

console.log('🌐 Système de tracking des traductions chargé (temps réel)');

// Configuration
const TRANSLATION_TRACKING_CONFIG = {
    apiUrl: typeof API_URL !== 'undefined' ? API_URL : 'http://localhost:5000/api',
    retryAttempts: 3,
    retryDelay: 2000
};

// Statistiques (juste pour information/debug, plus de file d'attente)
let stats = {
    totalTracked: 0,
    totalSent: 0,
    totalStored: 0,   // traductions réellement gardées côté serveur (mot manquant)
    totalFailed: 0,
    lastSent: null
};

// ==================== CAPTURER + ENVOYER UNE TRADUCTION (temps réel) ====================

async function captureTranslation(sourceText, translatedText, direction = 'fr-to-kivira', metadata = {}) {
    sourceText = (sourceText || '').trim();
    translatedText = (translatedText || '').trim();

    if (!sourceText || !translatedText) return null;

    console.log('📝 Capture traduction:', {
        source: sourceText.substring(0, 30) + '...',
        target: translatedText.substring(0, 30) + '...',
        direction
    });

    const translation = {
        id: generateTranslationId(),
        sourceText,
        translatedText,
        direction,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('fr-FR')
    };

    stats.totalTracked++;

    // Backup local léger (juste en cas de coupure réseau, pas une file d'attente)
    saveToLocalStorage(translation);

    // Envoi immédiat — sans attendre d'autres traductions
    await sendTranslationNow(translation);

    return translation;
}

// ==================== GÉNÉRER UN ID UNIQUE ====================

function generateTranslationId() {
    return 'trans_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// ==================== SAUVEGARDER LOCALEMENT (BACKUP, pas une file d'attente) ====================

function saveToLocalStorage(translation) {
    try {
        const key = 'kivirafacile_translations_backup';
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.push(translation);

        // Garder seulement les 20 dernières — c'est un simple filet de sécurité
        // de debug, pas un stockage durable (le serveur est la source de vérité).
        if (existing.length > 20) {
            existing.shift();
        }

        localStorage.setItem(key, JSON.stringify(existing));
    } catch (error) {
        console.error('⚠️ Erreur sauvegarde locale:', error);
    }
}

// ==================== ENVOYER UNE TRADUCTION IMMÉDIATEMENT ====================

async function sendTranslationNow(translation, retryCount = 0) {
    if (typeof currentUser === 'undefined' || !currentUser || !currentUser.uuid) {
        console.log('⚠️ Utilisateur non connecté, traduction non envoyée (gardée en backup local uniquement)');
        return;
    }

    try {
        const response = await fetch(`${TRANSLATION_TRACKING_CONFIG.apiUrl}/track/translation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                userUuid: currentUser.uuid,
                translation
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();

        stats.totalSent++;
        stats.lastSent = new Date().toISOString();
        if (result.stored) {
            stats.totalStored++;
            console.log(`✅ Traduction envoyée et stockée (mot manquant détecté, x${result.requestCount})`);
        } else {
            console.log('✅ Traduction envoyée — déjà couverte par le dictionnaire, non stockée');
        }

    } catch (error) {
        console.error('❌ Erreur envoi traduction:', error.message);
        stats.totalFailed++;

        if (retryCount < TRANSLATION_TRACKING_CONFIG.retryAttempts) {
            console.log(`🔄 Nouvelle tentative dans ${TRANSLATION_TRACKING_CONFIG.retryDelay / 1000}s (${retryCount + 1}/${TRANSLATION_TRACKING_CONFIG.retryAttempts})`);
            setTimeout(() => sendTranslationNow(translation, retryCount + 1), TRANSLATION_TRACKING_CONFIG.retryDelay);
        } else {
            console.log('⚠️ Échec après plusieurs tentatives — traduction gardée uniquement dans le backup local');
        }
    }
}

// ==================== RÉCUPÉRER LES STATS ====================

function getTrackingStats() {
    return {
        ...stats,
        localBackupSize: JSON.parse(localStorage.getItem('kivirafacile_translations_backup') || '[]').length
    };
}

// ==================== NETTOYER LE BACKUP LOCAL ====================

function clearLocalBackup() {
    if (confirm('⚠️ Voulez-vous vraiment supprimer le backup local des traductions ?')) {
        localStorage.removeItem('kivirafacile_translations_backup');
        console.log('🗑️ Backup local supprimé');
    }
}

// ==================== INTÉGRATION AUTOMATIQUE ====================

// Intercepter la fonction de traduction de l'app
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔌 Intégration du tracking des traductions...');

    let checkInterval = setInterval(function() {
        if (typeof performTranslation !== 'undefined') {
            clearInterval(checkInterval);

            console.log('✅ Fonction performTranslation trouvée, interception...');

            const originalPerformTranslation = performTranslation;

            window.performTranslation = function() {
                const result = originalPerformTranslation.apply(this, arguments);

                const translatorInput = document.getElementById('translatorInput');
                const translationResult = document.getElementById('translationResult');

                if (translatorInput && translationResult) {
                    const sourceText = translatorInput.value.trim();
                    const translatedText = translationResult.textContent.trim();

                    if (sourceText && translatedText) {
                        captureTranslation(sourceText, translatedText, 'fr-to-kivira', {
                            method: 'app_translator'
                        });
                    }
                }

                return result;
            };

            console.log('✅ Tracking des traductions activé (temps réel)');
        }
    }, 500);

    setTimeout(() => clearInterval(checkInterval), 30000);
});

// ==================== FONCTIONS GLOBALES ====================

window.captureTranslation = captureTranslation;
window.getTranslationTrackingStats = getTrackingStats;
window.clearTranslationBackup = clearLocalBackup;

// Fonction pour voir le backup local (debug)
window.viewLocalBackup = function() {
    const backup = JSON.parse(localStorage.getItem('kivirafacile_translations_backup') || '[]');
    console.log('💾 Backup local:', backup);
    return backup;
};

console.log('✅ Système de tracking des traductions prêt (envoi en temps réel, sans lot)');
console.log('💡 Fonctions disponibles:');
console.log('   - captureTranslation(source, target, direction)');
console.log('   - getTranslationTrackingStats()');
console.log('   - viewLocalBackup()');
console.log('   - clearTranslationBackup()');
