// ===== PREMIUM BLOCKER v3 =====
// Correction : vérification isPremium au moment du clic (pas au démarrage)
// Cela évite le problème de timing où currentUser n'est pas encore chargé.

console.log('🔒 Premium blocker v3 chargé');

const FREE_CATEGORIES = ['salutations'];
let originalShowLessonList = null;
let blockerInitialized = false;

function initPremiumBlockerFinal() {
    if (blockerInitialized) return;
    blockerInitialized = true;

    console.log('🚀 Initialisation blocage FINAL v3');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // LEÇONS — vérification isPremium AU MOMENT DU CLIC
    // (même isPremium et même modal que le dictionnaire :
    //  les deux s'ouvrent ensemble avec le même paiement)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.category-card');
        if (!card) return;

        const category = card.dataset.category;
        if (!category || FREE_CATEGORIES.includes(category)) return; // catégorie gratuite, autorisé

        const isPremium = typeof currentUser !== 'undefined'
            && currentUser
            && currentUser.isPremium;

        if (isPremium) return; // Autorisé

        e.preventDefault();
        e.stopPropagation();
        if (typeof showPaymentModal === 'function') {
            showPaymentModal();
        } else {
            alert('🔒 Cette leçon nécessite un abonnement Premium (1000 FC)');
        }
    }, true); // capture : s'exécute avant le clic normal sur la carte (ligne showLessonList)
    console.log('✅ Leçons configurées (vérification dynamique, même accès que le dictionnaire)');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // BADGES VISUELS sur les catégories
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    setTimeout(function() {
        const isPremium = typeof currentUser !== 'undefined'
            && currentUser
            && currentUser.isPremium;

        if (isPremium) {
            // Supprimer tous les badges si premium
            document.querySelectorAll('.premium-badge-lesson').forEach(b => b.remove());
            console.log('✅ Badges supprimés (user premium)');
            return;
        }

        document.querySelectorAll('.category-card').forEach(card => {
            const category = card.dataset.category;
            if (!category || FREE_CATEGORIES.includes(category)) return;

            if (!card.querySelector('.premium-badge-lesson')) {
                const badge = document.createElement('div');
                badge.className = 'premium-badge-lesson';
                badge.innerHTML = '🔒';
                badge.style.cssText = `
                    position: absolute; top: 8px; right: 8px;
                    background: #7c3aed; color: white;
                    font-size: 10px; font-weight: 700;
                    padding: 3px 8px; border-radius: 10px;
                `;
                card.style.position = 'relative';
                card.appendChild(badge);
            }
        });
        console.log('✅ Badges premium leçons ajoutés');
    }, 1000);

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
