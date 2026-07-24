// ===== PREMIUM BLOCKER v3 =====
// Correction : vérification isPremium au moment du clic (pas au démarrage)
// Cela évite le problème de timing où currentUser n'est pas encore chargé.

console.log('🔒 Premium blocker v3 chargé');

let originalShowLessonList = null;
let blockerInitialized = false;

function initPremiumBlockerFinal() {
    if (blockerInitialized) return;
    blockerInitialized = true;

    console.log('🚀 Initialisation blocage FINAL v3');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // LEÇONS — vérification isPremium AU MOMENT DU CLIC
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // BADGES VISUELS sur les catégories de LEÇONS
    // Désactivé ici : kivira-lessons.js gère désormais lui-même
    // ses propres badges "👑 Premium" (voir createCategoryCard),
    // et se rafraîchit automatiquement après paiement via
    // l'événement premiumStatusChanged. Garder les deux systèmes
    // actifs en même temps créait des badges en double / conflits.
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // DICTIONNAIRE — vérification au clic (déjà dynamique)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const dictionaryInputs = [
        document.getElementById('dictionarySearch'),
        document.getElementById('dictionary-search'),
        document.getElementById('searchInput')
    ].filter(Boolean);

    dictionaryInputs.forEach(input => {
        ['focus', 'click'].forEach(eventType => {
            input.addEventListener(eventType, function(e) {
                // Vérification dynamique au moment du clic
                const isPremium = typeof currentUser !== 'undefined'
                    && currentUser
                    && currentUser.isPremium;

                if (isPremium) return; // Autorisé

                e.preventDefault();
                e.stopPropagation();
                if (typeof showPaymentModal === 'function') {
                    showPaymentModal();
                } else {
                    alert('🔒 Le dictionnaire nécessite un abonnement Premium (1000 FC)');
                }
                this.blur();
            }, true);
        });
    });
    console.log('✅ Dictionnaire configuré (vérification dynamique)');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TRADUCTION — géré directement par performTranslation()
    // dans index.html. Rien à faire ici (évite la course
    // entre deux écouteurs sur le même bouton).
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    console.log('✅ ===== BLOCAGE FINAL v3 ACTIF =====');
}

// Attendre que showLessonList soit définie
let attempts = 0;
const checkInterval = setInterval(function() {
    attempts++;
    if (typeof showLessonList === 'function' || attempts >= 40) {
        clearInterval(checkInterval);
        setTimeout(initPremiumBlockerFinal, 300);
    }
}, 500);

// Réinitialisation manuelle
window.resetPremiumBlocker = function() {
    blockerInitialized = false;
    initPremiumBlockerFinal();
};

console.log('💡 resetPremiumBlocker() pour réinitialiser');
