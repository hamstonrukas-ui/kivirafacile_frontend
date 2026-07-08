// ===== VERSION FINALE : Interception de showLessonList =====

console.log('🔒 Premium blocker FINAL chargé');

// Catégories gratuites
const FREE_CATEGORIES = ['salutations'];

// Sauvegarder la fonction originale showLessonList
let originalShowLessonList = null;

function initPremiumBlockerFinal() {
    console.log('🚀 Initialisation blocage FINAL');
    
    // Vérifier si l'utilisateur est premium
    const isPremium = (typeof currentUser !== 'undefined' && currentUser && currentUser.isPremium);
    
    console.log('User premium ?', isPremium);
    
    if (isPremium) {
        console.log('✅ User premium, aucun blocage');
        return;
    }
    
    // MÉTHODE 1 : Intercepter showLessonList
    if (typeof showLessonList === 'function') {
        console.log('✅ showLessonList trouvée, interception...');
        
        // Sauvegarder l'originale
        originalShowLessonList = showLessonList;
        
        // Remplacer par notre version
        window.showLessonList = function(category) {
            console.log('🔍 Tentative d\'accès à:', category);
            
            // Si c'est une catégorie gratuite, autoriser
            if (FREE_CATEGORIES.includes(category)) {
                console.log('✅ Catégorie gratuite, accès autorisé');
                return originalShowLessonList(category);
            }
            
            // Sinon, bloquer
            console.log('🔒 Catégorie premium, accès bloqué');
            
            if (typeof showPaymentModal === 'function') {
                showPaymentModal();
            } else {
                alert('🔒 Premium requis\n\nCette catégorie nécessite un compte Premium.\n\nPassez en Premium pour accéder à toutes les leçons !');
            }
        };
        
        console.log('✅ showLessonList interceptée');
    } else {
        console.log('⚠️ showLessonList non trouvée');
    }
    
    // MÉTHODE 2 : Ajouter des badges visuels
    setTimeout(function() {
        console.log('🎨 Ajout des badges Premium...');
        
        document.querySelectorAll('.category-card').forEach(card => {
            const category = card.dataset.category;
            
            if (!category) return;
            
            if (FREE_CATEGORIES.includes(category)) {
                console.log(`  ✅ ${category}: GRATUIT (pas de badge)`);
                
                // Retirer le badge s'il existe
                const existingBadge = card.querySelector('.premium-badge-final');
                if (existingBadge) {
                    existingBadge.remove();
                }
            } else {
                console.log(`  🔒 ${category}: PREMIUM (ajout badge)`);
                
                // Ajouter un badge si pas déjà là
                if (!card.querySelector('.premium-badge-final')) {
                    const badge = document.createElement('div');
                    badge.className = 'premium-badge-final';
                    badge.style.cssText = `
                        position: absolute;
                        top: 12px;
                        right: 12px;
                        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                        color: white;
                        padding: 6px 12px;
                        border-radius: 12px;
                        font-size: 12px;
                        font-weight: 700;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                        z-index: 999;
                        pointer-events: none;
                    `;
                    badge.textContent = '👑 Premium';
                    
                    // S'assurer que la carte a position relative
                    if (getComputedStyle(card).position === 'static') {
                        card.style.position = 'relative';
                    }
                    
                    card.appendChild(badge);
                }
            }
        });
        
        console.log('✅ Badges ajoutés');
    }, 500);
    
    // MÉTHODE 3 : Bloquer le dictionnaire
    const dictionaryInput = document.getElementById('dictionarySearch');
    if (dictionaryInput) {
        ['keydown', 'keyup', 'input', 'change', 'click', 'focus'].forEach(eventType => {
            dictionaryInput.addEventListener(eventType, function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                if (typeof showPaymentModal === 'function') {
                    showPaymentModal();
                } else {
                    alert('🔒 Le dictionnaire nécessite un compte Premium');
                }
                
                this.value = '';
                this.blur();
                return false;
            }, true);
        });
        
        console.log('✅ Dictionnaire bloqué');
    }
    
    // MÉTHODE 4 : Bloquer la traduction
    const translateBtn = document.getElementById('translateBtn');
    if (translateBtn) {
        const blockTranslation = function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (typeof showPaymentModal === 'function') {
                showPaymentModal();
            } else {
                alert('🔒 La traduction nécessite un compte Premium');
            }
            
            return false;
        };
        
        translateBtn.onclick = blockTranslation;
        translateBtn.addEventListener('click', blockTranslation, true);
        
        console.log('✅ Traduction bloquée');
    }
    
    console.log('✅ ===== BLOCAGE FINAL ACTIVÉ =====');
    console.log('   ✅ Salutations: GRATUIT');
    console.log('   🔒 Autres leçons: PREMIUM');
    console.log('   🔒 Dictionnaire: PREMIUM');
    console.log('   🔒 Traduction: PREMIUM');
}

// Attendre que tout soit chargé ET que showLessonList soit définie
console.log('⏱️ Attente que tout se charge...');

let attempts = 0;
const checkInterval = setInterval(function() {
    attempts++;
    
    // Vérifier si showLessonList existe
    if (typeof showLessonList === 'function') {
        clearInterval(checkInterval);
        console.log('✅ showLessonList trouvée, initialisation...');
        setTimeout(initPremiumBlockerFinal, 500);
    } else if (attempts >= 40) {
        // Après 20 secondes, initialiser quand même
        clearInterval(checkInterval);
        console.log('⚠️ showLessonList non trouvée, initialisation quand même...');
        setTimeout(initPremiumBlockerFinal, 500);
    }
}, 500);

// Fonction pour réinitialiser
window.resetPremiumBlocker = function() {
    console.clear();
    initPremiumBlockerFinal();
};

console.log('💡 Tapez resetPremiumBlocker() pour réinitialiser');
