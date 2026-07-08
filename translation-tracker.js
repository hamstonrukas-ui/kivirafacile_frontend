// ===== SYSTÈME DE TRACKING DES TRADUCTIONS POUR L'IA =====
// Ce fichier capture TOUTES les traductions et les envoie au backend

console.log('🌐 Système de tracking des traductions chargé');

// Configuration
const TRANSLATION_TRACKING_CONFIG = {
    apiUrl: typeof API_URL !== 'undefined' ? API_URL : 'http://localhost:5000/api',
    batchSize: 10, // Envoyer par lots de 10
    retryAttempts: 3,
    retryDelay: 2000
};

// File d'attente locale
let translationQueue = [];
let isSending = false;

// Statistiques
let stats = {
    totalTracked: 0,
    totalSent: 0,
    totalFailed: 0,
    lastSent: null
};

// ==================== CAPTURER UNE TRADUCTION ====================

function captureTranslation(sourceText, translatedText, direction = 'fr-to-kivira', metadata = {}) {
    console.log('📝 Capture traduction:', {
        source: sourceText.substring(0, 30) + '...',
        target: translatedText.substring(0, 30) + '...',
        direction
    });
    
    // Créer l'entrée de traduction
    const translation = {
        id: generateTranslationId(),
        sourceText: sourceText.trim(),
        translatedText: translatedText.trim(),
        direction: direction,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('fr-FR'),
        metadata: {
            userAgent: navigator.userAgent,
            language: navigator.language,
            ...metadata
        }
    };
    
    // Ajouter à la file d'attente
    translationQueue.push(translation);
    stats.totalTracked++;
    
    console.log(`✅ Traduction capturée (${translationQueue.length} en attente)`);
    
    // Sauvegarder localement aussi (backup)
    saveToLocalStorage(translation);
    
    // Envoyer au backend si possible
    if (!isSending && translationQueue.length >= TRANSLATION_TRACKING_CONFIG.batchSize) {
        sendTranslationsToBackend();
    }
    
    return translation;
}

// ==================== GÉNÉRER UN ID UNIQUE ====================

function generateTranslationId() {
    return 'trans_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// ==================== SAUVEGARDER LOCALEMENT (BACKUP) ====================

function saveToLocalStorage(translation) {
    try {
        const key = 'kivirafacile_translations_backup';
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.push(translation);
        
        // Garder seulement les 100 dernières
        if (existing.length > 100) {
            existing.shift();
        }
        
        localStorage.setItem(key, JSON.stringify(existing));
    } catch (error) {
        console.error('⚠️ Erreur sauvegarde locale:', error);
    }
}

// ==================== ENVOYER AU BACKEND ====================

async function sendTranslationsToBackend(retryCount = 0) {
    // Vérifier si l'utilisateur est connecté
    if (typeof currentUser === 'undefined' || !currentUser || !currentUser.uuid) {
        console.log('⚠️ Utilisateur non connecté, traductions non envoyées');
        console.log(`   ${translationQueue.length} traduction(s) en attente de connexion`);
        return;
    }
    
    // Vérifier s'il y a des traductions à envoyer
    if (translationQueue.length === 0) {
        console.log('✅ Aucune traduction à envoyer');
        return;
    }
    
    // Éviter les envois simultanés
    if (isSending) {
        console.log('⏳ Envoi déjà en cours...');
        return;
    }
    
    isSending = true;
    
    // Prendre un lot de traductions
    const batch = translationQueue.splice(0, TRANSLATION_TRACKING_CONFIG.batchSize);
    
    console.log(`📤 Envoi de ${batch.length} traduction(s) au backend...`);
    
    try {
        const response = await fetch(`${TRANSLATION_TRACKING_CONFIG.apiUrl}/track/translations/batch`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                userUuid: currentUser.uuid,
                translations: batch
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        
        stats.totalSent += batch.length;
        stats.lastSent = new Date().toISOString();
        
        console.log(`✅ ${batch.length} traduction(s) envoyée(s) avec succès`);
        console.log(`📊 Stats: ${stats.totalSent}/${stats.totalTracked} envoyées, ${stats.totalFailed} échecs`);
        
        // S'il reste des traductions, continuer
        if (translationQueue.length > 0) {
            setTimeout(() => {
                isSending = false;
                sendTranslationsToBackend();
            }, 1000);
        } else {
            isSending = false;
        }
        
    } catch (error) {
        console.error('❌ Erreur envoi traductions:', error.message);
        
        // Remettre les traductions dans la file
        translationQueue.unshift(...batch);
        
        stats.totalFailed += batch.length;
        
        // Réessayer si possible
        if (retryCount < TRANSLATION_TRACKING_CONFIG.retryAttempts) {
            console.log(`🔄 Nouvelle tentative dans ${TRANSLATION_TRACKING_CONFIG.retryDelay / 1000}s (${retryCount + 1}/${TRANSLATION_TRACKING_CONFIG.retryAttempts})`);
            
            setTimeout(() => {
                isSending = false;
                sendTranslationsToBackend(retryCount + 1);
            }, TRANSLATION_TRACKING_CONFIG.retryDelay);
        } else {
            console.log('⚠️ Échec après plusieurs tentatives, traductions gardées localement');
            isSending = false;
        }
    }
}

// ==================== FORCER L'ENVOI ====================

function forceSendTranslations() {
    console.log('🚀 Envoi forcé des traductions en attente...');
    sendTranslationsToBackend();
}

// ==================== RÉCUPÉRER LES STATS ====================

function getTrackingStats() {
    return {
        ...stats,
        queueSize: translationQueue.length,
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
    
    // Attendre que performTranslation soit définie
    let checkInterval = setInterval(function() {
        if (typeof performTranslation !== 'undefined') {
            clearInterval(checkInterval);
            
            console.log('✅ Fonction performTranslation trouvée, interception...');
            
            // Sauvegarder l'originale
            const originalPerformTranslation = performTranslation;
            
            // Remplacer par notre version
            window.performTranslation = function() {
                // Appeler l'originale
                const result = originalPerformTranslation.apply(this, arguments);
                
                // Capturer la traduction
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
            
            console.log('✅ Tracking des traductions activé');
        }
    }, 500);
    
    // Arrêter après 30 secondes
    setTimeout(() => clearInterval(checkInterval), 30000);
});

// ==================== ENVOYER PÉRIODIQUEMENT ====================

// Envoyer les traductions en attente toutes les 30 secondes
setInterval(function() {
    if (translationQueue.length > 0) {
        console.log(`⏰ Envoi périodique: ${translationQueue.length} traduction(s) en attente`);
        sendTranslationsToBackend();
    }
}, 30000);

// ==================== ENVOYER AVANT DE QUITTER ====================

// Envoyer les traductions restantes avant de quitter la page
window.addEventListener('beforeunload', function() {
    if (translationQueue.length > 0) {
        console.log('👋 Envoi des traductions avant fermeture...');
        // Utiliser sendBeacon pour l'envoi asynchrone
        if (navigator.sendBeacon && currentUser) {
            const data = JSON.stringify({
                userUuid: currentUser.uuid,
                translations: translationQueue
            });
            
            const sent = navigator.sendBeacon(
                `${TRANSLATION_TRACKING_CONFIG.apiUrl}/track/translations/batch`,
                data
            );
            
            if (sent) {
                console.log('✅ Traductions envoyées via sendBeacon');
            }
        }
    }
});

// ==================== FONCTIONS GLOBALES ====================

// Exposer les fonctions utiles globalement
window.captureTranslation = captureTranslation;
window.forceSendTranslations = forceSendTranslations;
window.getTranslationTrackingStats = getTrackingStats;
window.clearTranslationBackup = clearLocalBackup;

// Fonction pour voir les traductions en attente
window.viewPendingTranslations = function() {
    console.log('📋 Traductions en attente:', translationQueue);
    return translationQueue;
};

// Fonction pour voir le backup local
window.viewLocalBackup = function() {
    const backup = JSON.parse(localStorage.getItem('kivirafacile_translations_backup') || '[]');
    console.log('💾 Backup local:', backup);
    return backup;
};

console.log('✅ Système de tracking des traductions prêt');
console.log('💡 Fonctions disponibles:');
console.log('   - captureTranslation(source, target, direction)');
console.log('   - forceSendTranslations()');
console.log('   - getTranslationTrackingStats()');
console.log('   - viewPendingTranslations()');
console.log('   - viewLocalBackup()');
