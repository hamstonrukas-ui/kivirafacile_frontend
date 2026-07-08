// ===== SYSTÈME DE TRACKING DES LEÇONS TERMINÉES =====
// Ce fichier gère UNIQUEMENT les coches des leçons terminées

console.log('📚 Système de leçons terminées chargé');

// Clé de stockage dans localStorage
const COMPLETED_LESSONS_KEY = 'kivirafacile_completed_lessons';

// ==================== INITIALISATION ====================

// Récupérer les leçons terminées depuis localStorage
function getCompletedLessons() {
    const data = localStorage.getItem(COMPLETED_LESSONS_KEY);
    if (!data) {
        return [];
    }
    try {
        return JSON.parse(data);
    } catch (error) {
        console.error('Erreur lecture leçons terminées:', error);
        return [];
    }
}

// Sauvegarder les leçons terminées
function saveCompletedLessons(lessons) {
    try {
        localStorage.setItem(COMPLETED_LESSONS_KEY, JSON.stringify(lessons));
        console.log('💾 Leçons terminées sauvegardées:', lessons.length);
    } catch (error) {
        console.error('Erreur sauvegarde leçons:', error);
    }
}

// ==================== MARQUER UNE LEÇON COMME TERMINÉE ====================

function markLessonAsCompleted(lessonId, lessonTitle, category) {
    console.log('✅ Marquage leçon comme terminée:', {lessonId, lessonTitle, category});
    
    // Récupérer la liste existante
    const completed = getCompletedLessons();
    
    // Vérifier si déjà terminée
    const alreadyCompleted = completed.some(lesson => 
        lesson.lessonId === lessonId && lesson.category === category
    );
    
    if (alreadyCompleted) {
        console.log('⚠️ Leçon déjà marquée comme terminée');
        return;
    }
    
    // Ajouter la nouvelle leçon terminée
    const lessonEntry = {
        lessonId: lessonId,
        lessonTitle: lessonTitle,
        category: category,
        completedAt: new Date().toISOString(),
        date: new Date().toLocaleDateString('fr-FR')
    };
    
    completed.push(lessonEntry);
    saveCompletedLessons(completed);
    
    // Ajouter visuellement la coche
    addCheckmarkToLesson(lessonId);
    
    console.log('✅ Leçon terminée enregistrée:', lessonTitle);
}

// ==================== AJOUTER LA COCHE VISUELLEMENT ====================

function addCheckmarkToLesson(lessonId) {
    console.log('🎨 Ajout de la coche visuelle pour leçon:', lessonId);
    
    // Chercher l'élément de la leçon dans la liste
    const lessonItems = document.querySelectorAll('.lesson-item');
    
    lessonItems.forEach(item => {
        const itemId = item.dataset.id || item.getAttribute('data-id');
        
        if (itemId == lessonId) {
            console.log('  → Élément trouvé, ajout de la coche');
            
            // Ajouter la classe "completed"
            item.classList.add('lesson-completed');
            
            // Ajouter la coche si pas déjà là
            if (!item.querySelector('.lesson-checkmark')) {
                const checkmark = document.createElement('div');
                checkmark.className = 'lesson-checkmark';
                checkmark.innerHTML = '✅';
                item.appendChild(checkmark);
                
                // Animation d'apparition
                checkmark.style.animation = 'checkmarkPop 0.5s ease';
            }
            
            // Changer le statut
            const statusElement = item.querySelector('.lesson-status');
            if (statusElement) {
                statusElement.textContent = '✅ Terminée';
                statusElement.style.color = '#10b981';
            }
        }
    });
}

// ==================== RESTAURER LES COCHES AU CHARGEMENT ====================

function restoreCompletedLessons() {
    console.log('🔄 Restauration des coches des leçons terminées...');
    
    const completed = getCompletedLessons();
    
    if (completed.length === 0) {
        console.log('  → Aucune leçon terminée à restaurer');
        return;
    }
    
    console.log(`  → ${completed.length} leçon(s) terminée(s) à restaurer`);
    
    // Attendre que les leçons soient affichées dans le DOM
    setTimeout(() => {
        completed.forEach(lesson => {
            addCheckmarkToLesson(lesson.lessonId);
        });
        
        console.log('✅ Coches restaurées');
    }, 500);
}

// ==================== VÉRIFIER SI UNE LEÇON EST TERMINÉE ====================

function isLessonCompleted(lessonId, category) {
    const completed = getCompletedLessons();
    return completed.some(lesson => 
        lesson.lessonId == lessonId && lesson.category === category
    );
}

// ==================== RÉINITIALISER TOUT ====================

function resetAllCompletedLessons() {
    if (confirm('⚠️ Voulez-vous vraiment effacer toutes les leçons terminées ?')) {
        localStorage.removeItem(COMPLETED_LESSONS_KEY);
        
        // Retirer toutes les coches visuellement
        document.querySelectorAll('.lesson-completed').forEach(item => {
            item.classList.remove('lesson-completed');
            const checkmark = item.querySelector('.lesson-checkmark');
            if (checkmark) {
                checkmark.remove();
            }
        });
        
        console.log('🗑️ Toutes les leçons terminées ont été effacées');
        alert('✅ Leçons terminées réinitialisées');
    }
}

// ==================== STATISTIQUES ====================

function getCompletedLessonsStats() {
    const completed = getCompletedLessons();
    
    const stats = {
        total: completed.length,
        byCategory: {}
    };
    
    completed.forEach(lesson => {
        if (!stats.byCategory[lesson.category]) {
            stats.byCategory[lesson.category] = 0;
        }
        stats.byCategory[lesson.category]++;
    });
    
    return stats;
}

// ==================== INTÉGRATION AVEC L'APP ====================

// Intercepter la fonction completeLesson de l'app
// Elle sera appelée automatiquement quand une leçon est terminée

// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM chargé, initialisation du système de leçons...');
    
    // Restaurer les coches des leçons terminées
    restoreCompletedLessons();
    
    // Observer les changements dans la liste des leçons
    // pour restaurer les coches quand on change de catégorie
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                // Des éléments ont été ajoutés, restaurer les coches
                restoreCompletedLessons();
            }
        });
    });
    
    // Observer le conteneur des leçons
    const lessonItems = document.getElementById('lessonItems');
    if (lessonItems) {
        observer.observe(lessonItems, {
            childList: true,
            subtree: true
        });
    }
});

// ==================== FONCTION GLOBALE POUR L'APP ====================

// Fonction appelée par completeLesson() dans index.html
window.markLessonCompleted = function(lessonId, lessonTitle, category) {
    markLessonAsCompleted(lessonId, lessonTitle, category);
};

// Fonction pour restaurer les coches (utile après chargement des leçons)
window.restoreLessonCheckmarks = function() {
    restoreCompletedLessons();
};

// Fonction pour voir les stats
window.showCompletedLessonsStats = function() {
    const stats = getCompletedLessonsStats();
    console.log('📊 Statistiques des leçons terminées:');
    console.log('   Total:', stats.total);
    console.log('   Par catégorie:', stats.byCategory);
    return stats;
};

// Fonction pour réinitialiser
window.resetCompletedLessons = function() {
    resetAllCompletedLessons();
};

console.log('✅ Système de leçons terminées prêt');
console.log('💡 Fonctions disponibles:');
console.log('   - markLessonCompleted(id, title, category)');
console.log('   - restoreLessonCheckmarks()');
console.log('   - showCompletedLessonsStats()');
console.log('   - resetCompletedLessons()');
