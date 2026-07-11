// ===== PREMIUM BLOCKER v2 — Blocage séparé Général / Traduction =====
// - Leçons + Dictionnaire → isPremium (1000 FC)
// - Traduction           → isTranslationPremium (2000 FC)

console.log('🔒 Premium blocker v2 chargé');

const FREE_CATEGORIES = ['salutations'];
let originalShowLessonList = null;

function initPremiumBlockerFinal() {
    console.log('🚀 Initialisation blocage FINAL v2');

    const isPremium = (typeof currentUser !== 'undefined' && currentUser && currentUser.isPremium);
    const isTranslationPremium = (typeof currentUser !== 'undefined' && currentUser && currentUser.isTranslationPremium);

    console.log('User premium général ?', isPremium);
    console.log('User premium traduction ?', isTranslationPremium);

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MÉTHODE 1 : Bloquer les leçons (inchangé)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    if (!isPremium) {
        if (typeof showLessonList === 'function') {
            originalShowLessonList = showLessonList;

            window.showLessonList = function(category) {
                console.log('🔍 Tentative accès leçon:', category);

                if (FREE_CATEGORIES.includes(category)) {
                    console.log('✅ Catégorie gratuite, accès autorisé');
                    return originalShowLessonList(category);
                }

                console.log('🔒 Catégorie premium, accès bloqué → modal 1000 FC');
                if (typeof showPaymentModal === 'function') {
                    showPaymentModal(); // Modal général 1000 FC
                } else {
                    alert('🔒 Cette catégorie nécessite un abonnement Premium (1000 FC).');
                }
            };

            console.log('✅ Leçons interceptées');
        }

        // Badges visuels sur les catégories
        setTimeout(function() {
            document.querySelectorAll('.category-card').forEach(card => {
                const category = card.dataset.category;
                if (!FREE_CATEGORIES.includes(category)) {
                    let badge = card.querySelector('.premium-badge');
                    if (!badge) {
                        badge = document.createElement('div');
                        badge.className = 'premium-badge';
                        badge.innerHTML = '🔒 PREMIUM';
                        badge.style.cssText = 'position:absolute;top:8px;right:8px;background:#7c3aed;color:white;font-size:10px;font-weight:700;padding:3px 8px;border-radius:10px;';
                        card.style.position = 'relative';
                        card.appendChild(badge);
                    }
                }
            });
            console.log('✅ Badges premium leçons ajoutés');
        }, 500);
    } else {
        console.log('✅ User premium général → leçons et dictionnaire libres');
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MÉTHODE 2 : Bloquer le dictionnaire (inchangé)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    if (!isPremium) {
        const dictionaryInputs = [
            document.getElementById('dictionarySearch'),
            document.getElementById('dictionary-search'),
            document.getElementById('searchInput')
        ].filter(Boolean);

        dictionaryInputs.forEach(input => {
            ['input', 'focus', 'click'].forEach(eventType => {
                input.addEventListener(eventType, function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (typeof showPaymentModal === 'function') {
                        showPaymentModal(); // Modal général 1000 FC
                    } else {
                        alert('🔒 Le dictionnaire nécessite un abonnement Premium (1000 FC)');
                    }
                    this.value = '';
                    this.blur();
                    return false;
                }, true);
            });
        });
        console.log('✅ Dictionnaire bloqué');
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MÉTHODE 3 : Bloquer la traduction — NOUVEAU MODAL 2000 FC
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    if (!isTranslationPremium) {
        const translateBtns = [
            document.getElementById('translateBtn'),
            document.getElementById('translate-btn'),
            document.getElementById('translationBtn')
        ].filter(Boolean);

        translateBtns.forEach(btn => {
            const blockTranslation = function(e) {
                e.preventDefault();
                e.stopPropagation();

                console.log('🔒 Traduction bloquée → modal 2000 FC');

                // Afficher le modal TRADUCTION (2000 FC) — pas le général
                if (typeof showTranslationPaymentModal === 'function') {
                    showTranslationPaymentModal();
                } else if (typeof showPaymentModal === 'function') {
                    showPaymentModal(); // Fallback si modal traduction pas encore chargé
                } else {
                    alert('🔒 La traduction nécessite un abonnement Premium Traduction (2000 FC).');
                }

                return false;
            };

            btn.onclick = blockTranslation;
            btn.addEventListener('click', blockTranslation, true);
        });

        // Badge visuel sur la zone de traduction
        setTimeout(function() {
            const translateSection = document.getElementById('translate-section') ||
                                    document.getElementById('translationSection') ||
                                    document.getElementById('translate');
            if (translateSection) {
                let banner = translateSection.querySelector('.translation-premium-banner');
                if (!banner) {
                    banner = document.createElement('div');
                    banner.className = 'translation-premium-banner';
                    banner.style.cssText = `
                        background: linear-gradient(135deg, #0891b2, #0e7490);
                        color: white;
                        padding: 12px 16px;
                        border-radius: 10px;
                        margin-bottom: 16px;
                        text-align: center;
                        font-size: 14px;
                        font-weight: 600;
                    `;
                    banner.innerHTML = `
                        🔒 Fonctionnalité Premium Traduction
                        <br><small style="font-weight:400;opacity:0.9">2000 FC · Traductions illimitées</small>
                        <br><button onclick="showTranslationPaymentModal()" style="margin-top:8px;background:white;color:#0891b2;border:none;padding:6px 16px;border-radius:20px;font-weight:700;cursor:pointer">
                            S'abonner
                        </button>
                    `;
                    translateSection.insertBefore(banner, translateSection.firstChild);
                }
            }
        }, 800);

        console.log('✅ Traduction bloquée → modal 2000 FC');
    } else {
        console.log('✅ User premium traduction → traduction libre');
    }

    // Résumé console
    console.log('✅ ===== BLOCAGE FINAL v2 ACTIVÉ =====');
    console.log('   ✅ Salutations: GRATUIT');
    console.log('   ' + (isPremium ? '✅' : '🔒') + ' Autres leçons: ' + (isPremium ? 'LIBRE' : 'PREMIUM 1000 FC'));
    console.log('   ' + (isPremium ? '✅' : '🔒') + ' Dictionnaire: ' + (isPremium ? 'LIBRE' : 'PREMIUM 1000 FC'));
    console.log('   ' + (isTranslationPremium ? '✅' : '🔒') + ' Traduction: ' + (isTranslationPremium ? 'LIBRE' : 'PREMIUM 2000 FC'));
}

// Attendre que tout soit chargé
let attempts = 0;
const checkInterval = setInterval(function() {
    attempts++;
    if (typeof showLessonList === 'function' || attempts >= 40) {
        clearInterval(checkInterval);
        setTimeout(initPremiumBlockerFinal, 500);
    }
}, 500);

window.resetPremiumBlocker = function() {
    console.clear();
    initPremiumBlockerFinal();
};
