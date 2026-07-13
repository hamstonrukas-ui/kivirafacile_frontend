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
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    if (typeof showLessonList === 'function') {
        originalShowLessonList = showLessonList;

        window.showLessonList = function(category) {
            console.log('🔍 Tentative accès leçon:', category);

            // Catégorie gratuite → accès direct
            if (FREE_CATEGORIES.includes(category)) {
                console.log('✅ Catégorie gratuite');
                return originalShowLessonList(category);
            }

            // ← Vérifie isPremium ICI, au moment du clic
            const isPremium = typeof currentUser !== 'undefined'
                && currentUser
                && currentUser.isPremium;

            if (isPremium) {
                console.log('✅ User premium → accès leçon autorisé');
                return originalShowLessonList(category);
            }

            console.log('🔒 Leçon bloquée → modal 1000 FC');
            if (typeof showPaymentModal === 'function') {
                showPaymentModal();
            } else {
                alert('🔒 Cette catégorie nécessite un abonnement Premium (1000 FC).');
            }
        };

        console.log('✅ showLessonList interceptée (vérification dynamique)');
    } else {
        console.warn('⚠️ showLessonList non trouvée au moment de l\'init');
    }

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
    // TRADUCTION — vérification au clic (2000 FC)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const translateBtns = [
        document.getElementById('translateBtn'),
        document.getElementById('translate-btn'),
        document.getElementById('translationBtn')
    ].filter(Boolean);

    translateBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const isTranslationPremium = typeof currentUser !== 'undefined'
                && currentUser
                && currentUser.isTranslationPremium;

            if (isTranslationPremium) return; // Autorisé

            e.preventDefault();
            e.stopPropagation();
            if (typeof showTranslationPaymentModal === 'function') {
                showTranslationPaymentModal();
            }
        }, true);
    });
    console.log('✅ Traduction configurée (modal 2000 FC)');

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
