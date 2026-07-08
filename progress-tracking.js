// ===== SYSTÈME DE PROGRÈS ET TRACKING =====

// Structure des données de progrès dans localStorage
const PROGRESS_STORAGE_KEY = 'kivirafacile_progress';

// Initialiser les progrès
function initProgress() {
    if (!localStorage.getItem(PROGRESS_STORAGE_KEY)) {
        const defaultProgress = {
            dictionarySearches: [],        // Liste des mots recherchés
            translations: [],               // Liste des traductions effectuées
            completedLessons: [],          // Liste des leçons terminées
            totalSearches: 0,
            totalTranslations: 0,
            totalLessons: 0
        };
        localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(defaultProgress));
    }
}

// Récupérer les progrès
function getProgress() {
    initProgress();
    return JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY));
}

// Sauvegarder les progrès
function saveProgress(progress) {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
}

// ==================== TRACKING DICTIONNAIRE ====================

// Ajouter une recherche de dictionnaire
function trackDictionarySearch(word) {
    const progress = getProgress();
    
    // Ajouter le mot avec timestamp
    const searchEntry = {
        word: word,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('fr-FR')
    };
    
    // Vérifier si le mot n'est pas déjà dans les recherches récentes (dernières 24h)
    const isDuplicate = progress.dictionarySearches.some(entry => 
        entry.word === word && 
        (new Date() - new Date(entry.timestamp)) < 24 * 60 * 60 * 1000
    );
    
    if (!isDuplicate) {
        progress.dictionarySearches.push(searchEntry);
        progress.totalSearches++;
        saveProgress(progress);
        
        // Mettre à jour l'affichage des progrès si le modal est ouvert
        if (document.getElementById('progressModal').classList.contains('open')) {
            updateProgressDisplay();
        }
    }
}

// ==================== TRACKING TRADUCTIONS ====================

// Ajouter une traduction
function trackTranslation(sourceText, translatedText, direction = 'fr-to-kivira') {
    const progress = getProgress();
    
    const translationEntry = {
        id: generateTranslationId(),
        sourceText: sourceText,
        translatedText: translatedText,
        direction: direction,  // 'fr-to-kivira' ou 'kivira-to-fr'
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('fr-FR')
    };
    
    progress.translations.push(translationEntry);
    progress.totalTranslations++;
    saveProgress(progress);
    
    // 🆕 Envoyer au backend pour entraînement IA futur
    sendTranslationToBackend(translationEntry);
    
    // Mettre à jour l'affichage des progrès si le modal est ouvert
    if (document.getElementById('progressModal').classList.contains('open')) {
        updateProgressDisplay();
    }
}

// Générer un ID unique pour les traductions
function generateTranslationId() {
    return 'trans_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Envoyer la traduction au backend pour stockage et entraînement IA
async function sendTranslationToBackend(translation) {
    // Vérifier si l'utilisateur est connecté
    if (!currentUser || !currentUser.uuid) {
        console.log('⚠️ Utilisateur non connecté, traduction non envoyée au backend');
        return;
    }
    
    // Vérifier si API_URL est défini
    if (typeof API_URL === 'undefined') {
        console.log('⚠️ API_URL non défini, traduction non envoyée au backend');
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/track/translation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                userUuid: currentUser.uuid,
                translation: translation
            })
        });
        
        if (response.ok) {
            console.log('✅ Traduction envoyée au backend pour entraînement IA');
        }
    } catch (error) {
        console.error('❌ Erreur lors de l\'envoi de la traduction:', error);
    }
}

// ==================== TRACKING LEÇONS ====================

// Marquer une leçon comme terminée
function trackCompletedLesson(lessonId, lessonTitle, category) {
    const progress = getProgress();
    
    // Vérifier si la leçon n'est pas déjà marquée comme terminée
    const isAlreadyCompleted = progress.completedLessons.some(
        lesson => lesson.lessonId === lessonId
    );
    
    if (!isAlreadyCompleted) {
        const lessonEntry = {
            lessonId: lessonId,
            lessonTitle: lessonTitle,
            category: category,
            completedAt: new Date().toISOString(),
            date: new Date().toLocaleDateString('fr-FR')
        };
        
        progress.completedLessons.push(lessonEntry);
        progress.totalLessons++;
        saveProgress(progress);
        
        // Cocher visuellement la leçon dans la liste
        checkLessonInUI(lessonId);
        
        console.log('✅ Leçon terminée:', lessonTitle);
    }
}

// Cocher visuellement la leçon
function checkLessonInUI(lessonId) {
    // Chercher l'élément de la leçon dans la liste
    const lessonElements = document.querySelectorAll('.lesson-item');
    
    lessonElements.forEach(element => {
        if (element.dataset.id === lessonId) {
            // Ajouter une classe "completed"
            element.classList.add('lesson-completed');
            
            // Ajouter une coche verte
            if (!element.querySelector('.completion-check')) {
                const checkmark = document.createElement('span');
                checkmark.className = 'completion-check';
                checkmark.innerHTML = '✅';
                element.appendChild(checkmark);
            }
        }
    });
}

// Vérifier si une leçon est terminée
function isLessonCompleted(lessonId) {
    const progress = getProgress();
    return progress.completedLessons.some(lesson => lesson.lessonId === lessonId);
}

// Initialiser les coches au chargement des leçons
function initLessonCompletionMarks() {
    const progress = getProgress();
    
    progress.completedLessons.forEach(lesson => {
        checkLessonInUI(lesson.lessonId);
    });
}

// ==================== AFFICHAGE DES PROGRÈS ====================

// Mettre à jour l'affichage du modal "Mes Progrès"
function updateProgressDisplay() {
    const progress = getProgress();
    const container = document.getElementById('domainProgressList');
    
    if (!container) return;
    
    // Créer le contenu
    let html = '';
    
    // 1. Mots recherchés dans le dictionnaire
    html += `
        <div class="progress-stat-card">
            <div class="progress-stat-icon">🔍</div>
            <div class="progress-stat-content">
                <div class="progress-stat-title">Recherches Dictionnaire</div>
                <div class="progress-stat-value">${progress.totalSearches} mots recherchés</div>
                <div class="progress-stat-detail">
                    ${progress.dictionarySearches.length > 0 
                        ? `Dernier: ${progress.dictionarySearches[progress.dictionarySearches.length - 1].word}`
                        : 'Aucune recherche encore'}
                </div>
            </div>
        </div>
    `;
    
    // 2. Traductions effectuées
    html += `
        <div class="progress-stat-card">
            <div class="progress-stat-icon">🌐</div>
            <div class="progress-stat-content">
                <div class="progress-stat-title">Traductions</div>
                <div class="progress-stat-value">${progress.totalTranslations} traductions effectuées</div>
                <div class="progress-stat-detail">
                    ${progress.translations.length > 0 
                        ? `Dernière: ${progress.translations[progress.translations.length - 1].sourceText.substring(0, 30)}...`
                        : 'Aucune traduction encore'}
                </div>
            </div>
        </div>
    `;
    
    // 3. Leçons terminées
    html += `
        <div class="progress-stat-card">
            <div class="progress-stat-icon">📚</div>
            <div class="progress-stat-content">
                <div class="progress-stat-title">Leçons Complétées</div>
                <div class="progress-stat-value">${progress.totalLessons} leçons terminées</div>
                <div class="progress-stat-detail">
                    ${progress.completedLessons.length > 0 
                        ? `Dernière: ${progress.completedLessons[progress.completedLessons.length - 1].lessonTitle}`
                        : 'Aucune leçon terminée encore'}
                </div>
            </div>
        </div>
    `;
    
    // 4. Statistiques globales
    const totalActivities = progress.totalSearches + progress.totalTranslations + progress.totalLessons;
    html += `
        <div class="progress-stat-card highlight">
            <div class="progress-stat-icon">🎯</div>
            <div class="progress-stat-content">
                <div class="progress-stat-title">Total Activités</div>
                <div class="progress-stat-value">${totalActivities} actions effectuées</div>
                <div class="progress-stat-detail">
                    Continuez comme ça ! 💪
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// ==================== AFFICHAGE DU PROFIL ====================

// Mettre à jour le nom dans le profil
function updateProfileDisplay() {
    if (!currentUser) return;
    
    // Nom dans le modal profil
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profileInitial = document.getElementById('profileInitial');
    const profileBadge = document.getElementById('profileBadge');
    
    if (profileName) {
        profileName.textContent = currentUser.name || '—';
    }
    
    if (profileEmail) {
        profileEmail.textContent = currentUser.email || '—';
    }
    
    if (profileInitial && currentUser.name) {
        profileInitial.textContent = currentUser.name.charAt(0).toUpperCase();
    }
    
    if (profileBadge) {
        if (currentUser.isPremium) {
            profileBadge.textContent = '👑 Premium';
            profileBadge.className = 'dd-badge badge-premium';
        } else {
            profileBadge.textContent = 'Gratuit';
            profileBadge.className = 'dd-badge badge-free';
        }
    }
}

// ==================== INTÉGRATIONS AVEC LE CODE EXISTANT ====================

// Modifier la fonction completeLesson existante
// IMPORTANT : Ajouter cet appel dans votre fonction completeLesson existante (ligne ~3811)
/*
function completeLesson() {
    // Code existant...
    
    // 🆕 AJOUTER CETTE LIGNE POUR TRACKER LA LEÇON
    if (currentLesson) {
        trackCompletedLesson(
            currentLesson.id,           // ID de la leçon
            currentLesson.title,         // Titre de la leçon
            currentCategory              // Catégorie (salutations, famille, etc.)
        );
    }
    
    // Afficher un overlay de succès
    const overlay = document.createElement('div');
    overlay.className = 'success-overlay';
    overlay.innerHTML = `
        <div class="success-content">
            <h2>🎉 Félicitations!</h2>
            <p>Vous avez terminé la leçon avec succès!</p>
            <p class="lesson-checked">✅ Leçon cochée dans votre progression</p>
        </div>
    `;
    // ... reste du code
}
*/

// Modifier la fonction performTranslation existante
// IMPORTANT : Ajouter cet appel dans votre fonction performTranslation (ligne ~4316)
/*
function performTranslation() {
    const text = translatorInput.value.trim();
    if (!text) return;

    // Code existant de traduction...
    const result = translateToKivira(text);
    
    // 🆕 AJOUTER CETTE LIGNE POUR TRACKER LA TRADUCTION
    trackTranslation(text, result.translation, 'fr-to-kivira');
    
    // Afficher le résultat
    translationResult.textContent = result.translation;
    // ... reste du code
}
*/

// ==================== INITIALISATION ====================

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initProgress();
    
    // Initialiser les coches des leçons terminées
    setTimeout(() => {
        initLessonCompletionMarks();
    }, 1000);
    
    console.log('✅ Système de progrès et tracking initialisé');
});

// Mettre à jour l'affichage quand le modal de progrès s'ouvre
const originalOpenProgress = window.openProgress;
window.openProgress = function() {
    if (originalOpenProgress) {
        originalOpenProgress();
    }
    updateProgressDisplay();
};

// Mettre à jour l'affichage quand le modal de profil s'ouvre
const originalOpenProfile = window.openProfile;
window.openProfile = function() {
    if (originalOpenProfile) {
        originalOpenProfile();
    }
    updateProfileDisplay();
};

// Mettre à jour quand l'utilisateur se connecte
function onUserLogin() {
    updateProfileDisplay();
    initLessonCompletionMarks();
}
