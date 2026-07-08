// ==================== HELPER BIBLIOTHÈQUE ====================
// Fichier: js/library_helper.js
// À ajouter APRÈS library_frontend.js dans index.html

(function() {
    console.log('🔧 Library Helper chargé');
    
    // Attendre que le DOM soit prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupLibraryHelper);
    } else {
        setupLibraryHelper();
    }
    
    function setupLibraryHelper() {
        console.log('⚙️ Configuration Library Helper');
        
        // ========== MÉTHODE 1 : Observer les changements de page ==========
        const libraryPage = document.getElementById('library');
        
        if (!libraryPage) {
            console.warn('⚠️ Page #library introuvable');
            return;
        }
        
        // Créer un observer pour détecter quand la page devient visible
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const isActive = libraryPage.classList.contains('active');
                    
                    if (isActive && typeof initLibrary === 'function') {
                        console.log('📚 Page bibliothèque activée → Initialisation');
                        initLibrary();
                    }
                }
            });
        });
        
        // Observer les changements de classe sur la page library
        observer.observe(libraryPage, { 
            attributes: true,
            attributeFilter: ['class']
        });
        
        console.log('✅ Observer configuré sur #library');
        
        // ========== MÉTHODE 2 : Intercepter les clics sur nav ==========
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            // Chercher si c'est le lien bibliothèque
            const label = item.querySelector('.nav-label');
            const isLibrary = label && (
                label.textContent.toLowerCase().includes('bibliothèque') ||
                label.textContent.toLowerCase().includes('library') ||
                label.getAttribute('data-i18n') === 'library'
            );
            
            if (isLibrary) {
                console.log('✅ Lien bibliothèque trouvé dans nav');
                
                item.addEventListener('click', () => {
                    // Petit délai pour laisser la page se charger
                    setTimeout(() => {
                        if (typeof initLibrary === 'function') {
                            console.log('📚 Clic nav → Initialisation bibliothèque');
                            initLibrary();
                        }
                    }, 100);
                });
            }
        });
        
        // ========== MÉTHODE 3 : API globale ==========
        // Créer une fonction globale pour réinitialiser
        window.resetLibrary = function() {
            console.log('🔄 Reset bibliothèque');
            if (typeof showCategories === 'function') {
                showCategories();
            }
        };
        
        console.log('✅ Library Helper prêt');
    }
})();
