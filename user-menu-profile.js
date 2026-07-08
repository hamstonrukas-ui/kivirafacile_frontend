// ===== ACTIVATION MENU UTILISATEUR ET PROFIL (VERSION CORRIGÉE) =====

console.log('👤 Activation menu utilisateur et profil...');

// ==================== MENU UTILISATEUR (en haut à droite) ====================

// Fonction pour ouvrir/fermer le menu utilisateur
if (typeof toggleUserMenu === 'undefined') {
    window.toggleUserMenu = function() {
        const userMenu = document.getElementById('userMenu');
        
        if (!userMenu) {
            console.log('⚠️ userMenu non trouvé');
            return;
        }
        
        // Toggle la classe "open"
        if (userMenu.classList.contains('open')) {
            userMenu.classList.remove('open');
            console.log('📤 Menu utilisateur fermé');
        } else {
            userMenu.classList.add('open');
            console.log('📥 Menu utilisateur ouvert');
            
            // Mettre à jour les infos quand on ouvre
            updateUserMenuDisplay();
        }
    };
}

// Fermer le menu si on clique ailleurs
document.addEventListener('click', function(e) {
    const userMenu = document.getElementById('userMenu');
    const loginBtn = document.getElementById('loginBtn');
    
    if (!userMenu || !loginBtn) return;
    
    // Si le clic n'est ni sur le menu ni sur le bouton
    if (!userMenu.contains(e.target) && !loginBtn.contains(e.target)) {
        userMenu.classList.remove('open');
    }
});

// ==================== MISE À JOUR DES AFFICHAGES ====================

// Mettre à jour le menu utilisateur (en haut)
function updateUserMenuDisplay() {
    if (!currentUser) {
        console.log('⚠️ currentUser non défini');
        return;
    }
    
    console.log('📝 Mise à jour menu utilisateur avec:', currentUser.email);
    
    // Nom
    const menuUserName = document.getElementById('menuUserName');
    if (menuUserName) {
        menuUserName.textContent = currentUser.name || currentUser.email || '—';
    }
    
    // Email
    const menuUserEmail = document.getElementById('menuUserEmail');
    if (menuUserEmail) {
        menuUserEmail.textContent = currentUser.email || '—';
    }
    
    // Badge Premium/Gratuit
    const menuUserBadge = document.getElementById('menuUserBadge');
    if (menuUserBadge) {
        if (currentUser.isPremium) {
            menuUserBadge.textContent = '👑 Premium';
            menuUserBadge.className = 'user-menu-badge badge-premium';
        } else {
            menuUserBadge.textContent = 'Gratuit';
            menuUserBadge.className = 'user-menu-badge badge-free';
        }
    }
    
    // Afficher le lien admin si admin
    const menuAdminLink = document.getElementById('menuAdminLink');
    if (menuAdminLink && currentUser.isAdmin) {
        menuAdminLink.style.display = 'block';
    }
    
    console.log('✅ Menu utilisateur mis à jour');
}

// Mettre à jour le modal profil (sidebar)
function updateProfileDisplay() {
    if (!currentUser) {
        console.log('⚠️ currentUser non défini pour le profil');
        return;
    }
    
    console.log('📝 Mise à jour profil avec:', currentUser.email);
    
    // Nom
    const profileName = document.getElementById('profileName');
    if (profileName) {
        profileName.textContent = currentUser.name || currentUser.email || '—';
    }
    
    // Email
    const profileEmail = document.getElementById('profileEmail');
    if (profileEmail) {
        profileEmail.textContent = currentUser.email || '—';
    }
    
    // Initiale (première lettre du nom ou de l'email)
    const profileInitial = document.getElementById('profileInitial');
    if (profileInitial) {
        const initial = (currentUser.name || currentUser.email || '?').charAt(0).toUpperCase();
        profileInitial.textContent = initial;
    }
    
    // Badge Premium/Gratuit
    const profileBadge = document.getElementById('profileBadge');
    if (profileBadge) {
        if (currentUser.isPremium) {
            profileBadge.textContent = '👑 Premium';
            profileBadge.className = 'dd-badge badge-premium';
        } else {
            profileBadge.textContent = 'Gratuit';
            profileBadge.className = 'dd-badge badge-free';
        }
    }
    
    console.log('✅ Profil mis à jour');
}

// ==================== INTERCEPTION OPENPROFILE (SANS CONFLIT) ====================

// Créer/remplacer la fonction openProfile SEULEMENT si elle n'existe pas encore
if (typeof window.openProfile === 'undefined') {
    window.openProfile = function() {
        console.log('📂 Ouverture du profil');
        
        const sidebar = document.getElementById('sidebar');
        const profileModal = document.getElementById('profileModal');
        
        if (sidebar) {
            sidebar.classList.remove('open');
        }
        
        if (profileModal) {
            profileModal.classList.add('open');
        }
        
        // Mettre à jour le profil
        updateProfileDisplay();
    };
} else {
    // Si openProfile existe déjà, on l'améliore
    const existingOpenProfile = window.openProfile;
    window.openProfile = function() {
        // Appeler la version existante
        existingOpenProfile();
        // Ajouter notre mise à jour
        updateProfileDisplay();
    };
}

// ==================== INTERCEPTION CLOSEPROFILE ====================

// Créer/remplacer la fonction closeProfile
if (typeof window.closeProfile === 'undefined') {
    window.closeProfile = function() {
        console.log('📂 Fermeture du profil');
        
        const profileModal = document.getElementById('profileModal');
        
        if (profileModal) {
            profileModal.classList.remove('open');
        }
    };
}

// ==================== INITIALISATION ====================

// Initialiser quand currentUser est disponible
function initUserDisplay() {
    if (typeof currentUser !== 'undefined' && currentUser) {
        console.log('👤 currentUser trouvé:', currentUser.email);
        
        // Mettre à jour les deux affichages
        updateUserMenuDisplay();
        updateProfileDisplay();
        
        // Changer le texte du bouton de connexion
        const loginBtn = document.getElementById('loginBtn');
        const authBtnLabel = document.getElementById('authBtnLabel');
        
        if (authBtnLabel) {
            authBtnLabel.textContent = currentUser.name || currentUser.email || 'Mon compte';
        }
        
        console.log('✅ Affichages utilisateur initialisés');
    } else {
        console.log('⚠️ currentUser non encore disponible');
    }
}

// Attendre que currentUser soit défini
let checkAttempts = 0;
const checkUserInterval = setInterval(function() {
    checkAttempts++;
    
    if (typeof currentUser !== 'undefined' && currentUser) {
        clearInterval(checkUserInterval);
        console.log('✅ currentUser détecté, initialisation...');
        initUserDisplay();
    } else if (checkAttempts >= 20) {
        clearInterval(checkUserInterval);
        console.log('⚠️ currentUser non trouvé après 10 secondes');
    }
}, 500);

// Réinitialiser quand l'utilisateur se connecte
window.addEventListener('userLoggedIn', function() {
    console.log('🔄 Événement userLoggedIn détecté');
    setTimeout(initUserDisplay, 500);
});

// Fonction pour forcer la mise à jour (utile pour le débogage)
window.refreshUserDisplay = function() {
    console.log('🔄 Rafraîchissement forcé de l\'affichage utilisateur');
    initUserDisplay();
};

console.log('✅ Menu utilisateur et profil activés (sans conflit)');
console.log('💡 Tapez refreshUserDisplay() pour forcer la mise à jour');
