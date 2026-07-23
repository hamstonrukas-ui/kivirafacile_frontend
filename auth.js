// ===== AUTHENTIFICATION AVEC DEVICE FINGERPRINTING =====

let currentUser = null;

// Fonction pour faire des requêtes API avec device fingerprint
async function apiRequest(endpoint, options = {}) {
    const token = localStorage.getItem(CONFIG.STORAGE_KEYS.TOKEN);
    
    // 🆕 Obtenir le device fingerprint
    const deviceFingerprint = await getDeviceFingerprint();
    
    // 🔍 DEBUG : Vérifier que le fingerprint est bien généré
    console.log('🔍 Device fingerprint à envoyer:', deviceFingerprint ? deviceFingerprint.substring(0, 16) + '...' : 'NULL');
    
    if (!deviceFingerprint) {
        console.error('❌ ERREUR: Device fingerprint non généré');
        throw new Error('Impossible de générer l\'empreinte de votre appareil');
    }
    
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
            'X-Device-Fingerprint': deviceFingerprint  // 🆕 Ajouter l'empreinte
        }
    };

    if (token) {
        defaultOptions.headers['Authorization'] = `Bearer ${token}`;
    }

    const finalOptions = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions.headers,
            ...options.headers
        }
    };

    try {
        const response = await fetch(`${CONFIG.API_URL}${endpoint}`, finalOptions);
        const data = await response.json();

        if (!response.ok) {
            // 🆕 Gérer le cas device mismatch
            if (data.code === 'DEVICE_MISMATCH') {
                localStorage.clear();
                alert('⚠️ SÉCURITÉ\n\nCe compte est lié à un autre appareil.\n\nPour des raisons de sécurité, un seul appareil peut être utilisé par compte.\n\nSi vous changez d\'appareil, contactez le support.');
                window.location.reload();
                return;
            }
            
            throw new Error(data.error || 'Une erreur est survenue');
        }

        return data;
    } catch (error) {
        console.error('Erreur API:', error);
        throw error;
    }
}

// Vérifier si authentifié
function isAuthenticated() {
    return !!localStorage.getItem(CONFIG.STORAGE_KEYS.TOKEN);
}

// Récupérer l'utilisateur stocké
function getStoredUser() {
    const userData = localStorage.getItem(CONFIG.STORAGE_KEYS.USER);
    return userData ? JSON.parse(userData) : null;
}

// Sauvegarder les données utilisateur
function saveUserData(token, user) {
    localStorage.setItem(CONFIG.STORAGE_KEYS.TOKEN, token);
    localStorage.setItem(CONFIG.STORAGE_KEYS.USER, JSON.stringify(user));
    currentUser = user;
}

// Injecter le HTML de l'écran d'authentification
function injectAuthScreen() {
    const authScreen = document.getElementById('auth-screen');
    if (!authScreen) return;
    
    authScreen.innerHTML = `
        <div class="auth-container">
            <div class="auth-card">
                <h1 class="app-title">✨ Kivirafacile</h1>
                <p class="app-subtitle">Connectez-vous pour accéder aux fonctionnalités</p>

                <!-- Connexion -->
                <div id="login-form" class="auth-form">
                    <h2>Connexion</h2>
                    <div id="login-error" class="error-message" style="display: none;"></div>
                    
                    <form onsubmit="handleLogin(event)">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" id="login-email" required placeholder="votre@email.com">
                        </div>
                        <div class="form-group">
                            <label>Mot de passe</label>
                            <input type="password" id="login-password" required placeholder="••••••••" minlength="6">
                        </div>
                        <button type="submit" class="btn-primary" id="login-btn">
                            Se connecter
                        </button>
                    </form>
                    
                    <p class="auth-toggle">
                        Pas encore de compte ? 
                        <a href="#" onclick="showRegisterForm(); return false;">S'inscrire</a>
                    </p>
                </div>

                <!-- Inscription -->
                <div id="register-form" class="auth-form" style="display: none;">
                    <h2>Inscription</h2>
                    <div id="register-error" class="error-message" style="display: none;"></div>
                    
                    <form onsubmit="handleRegister(event)">
                        <div class="form-group">
                            <label>Nom complet</label>
                            <input type="text" id="register-name" required placeholder="Votre nom">
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" id="register-email" required placeholder="votre@email.com">
                        </div>
                        <div class="form-group">
                            <label>Mot de passe</label>
                            <input type="password" id="register-password" required placeholder="••••••••" minlength="6">
                        </div>
                        <button type="submit" class="btn-primary" id="register-btn">
                            S'inscrire
                        </button>
                    </form>
                    
                    <p class="auth-toggle">
                        Déjà inscrit ? 
                        <a href="#" onclick="showLoginForm(); return false;">Se connecter</a>
                    </p>
                    
                    <div class="device-info" style="margin-top: 20px; padding: 12px; background: #f0f9ff; border-radius: 8px; font-size: 12px; color: #0369a1;">
                        🔒 <strong>Sécurité :</strong> Votre compte sera lié à cet appareil. Vous ne pourrez pas vous connecter depuis un autre appareil.
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Vérifier l'authentification au chargement
async function checkAuth() {
    const loadingScreen = document.getElementById('loading-screen');
    const authScreen = document.getElementById('auth-screen');
    const appContent = document.getElementById('app-content');

    if (!loadingScreen || !authScreen || !appContent) {
        console.error('Elements requis manquants dans le HTML');
        return;
    }

    if (isAuthenticated()) {
        try {
            // Vérifier que le token est toujours valide
            const userData = await apiRequest('/auth/me');
            
            // 🆕 VÉRIFIER SI LE COMPTE EST BLOQUÉ
            if (userData.isBlocked) {
                console.log('🚨 Compte bloqué détecté');
                // Afficher le message de blocage
                showBlockedAccountMessage();
                // Déconnecter après 3 secondes
                setTimeout(() => {
                    logout();
                }, 3000);
                return;
            }
            
            // Sauvegarder les données à jour
            localStorage.setItem(CONFIG.STORAGE_KEYS.USER, JSON.stringify(userData));
            currentUser = userData;
            
            // Afficher l'application
            loadingScreen.style.display = 'none';
            authScreen.style.display = 'none';
            appContent.style.display = 'block';
            
            // Mettre à jour l'interface utilisateur
            updateUserInterface(userData);

            // 🆕 Prévenir tout ce qui dépend du statut premium (ex: kivira-lessons.js)
            // que les données fraîches de l'utilisateur sont maintenant disponibles.
            // Corrige la course entre le rendu des leçons (immédiat) et cet appel
            // réseau (potentiellement lent sur connexion instable) : sans ça, les
            // leçons pouvaient rester verrouillées même après validation premium.
            window.dispatchEvent(new CustomEvent('premiumStatusChanged', { detail: userData }));
            
        } catch (error) {
            console.error('Token invalide:', error);
            // Token invalide, déconnecter
            logout();
        }
    } else {
        // Pas de token, afficher l'authentification
        injectAuthScreen();
        loadingScreen.style.display = 'none';
        authScreen.style.display = 'flex';
        appContent.style.display = 'none';
    }
}

// Mettre à jour l'interface avec les infos utilisateur
function updateUserInterface(userData) {
    currentUser = userData;
    
    // Afficher le nom de l'utilisateur si un élément existe
    const userNameElement = document.getElementById('user-name');
    if (userNameElement) {
        userNameElement.textContent = userData.name;
    }
    
    // Afficher/masquer le badge premium
    const premiumBadge = document.getElementById('premium-badge');
    if (premiumBadge) {
        premiumBadge.style.display = userData.isPremium ? 'inline-block' : 'none';
    }
    
    // Afficher/masquer la section upgrade
    const upgradeSection = document.getElementById('upgrade-section');
    if (upgradeSection) {
        upgradeSection.style.display = userData.isPremium ? 'none' : 'block';
    }
}

// Gérer la connexion
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorDiv = document.getElementById('login-error');
    const loginBtn = document.getElementById('login-btn');

    loginBtn.disabled = true;
    loginBtn.textContent = 'Connexion...';
    errorDiv.style.display = 'none';

    try {
        console.log('🔄 Tentative de connexion...');
        const data = await apiRequest('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });

        console.log('✅ Connexion réussie');
        saveUserData(data.token, data.user);
        window.location.reload();

    } catch (error) {
        console.error('❌ Erreur connexion:', error);
        errorDiv.textContent = error.message;
        errorDiv.style.display = 'block';
        loginBtn.disabled = false;
        loginBtn.textContent = 'Se connecter';
    }
}

// Gérer l'inscription
async function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const errorDiv = document.getElementById('register-error');
    const registerBtn = document.getElementById('register-btn');

    registerBtn.disabled = true;
    registerBtn.textContent = 'Inscription...';
    errorDiv.style.display = 'none';

    try {
        console.log('🔄 Tentative d\'inscription...');
        
        // 🔍 Vérifier que le device fingerprint est prêt
        const fingerprint = await getDeviceFingerprint();
        console.log('🔍 Fingerprint prêt:', fingerprint ? 'OUI' : 'NON');
        
        const data = await apiRequest('/auth/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password })
        });

        console.log('✅ Inscription réussie');
        saveUserData(data.token, data.user);
        window.location.reload();

    } catch (error) {
        console.error('❌ Erreur inscription:', error);
        errorDiv.textContent = error.message;
        errorDiv.style.display = 'block';
        registerBtn.disabled = false;
        registerBtn.textContent = 'S\'inscrire';
    }
}

// Afficher le formulaire d'inscription
function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-error').style.display = 'none';
    document.getElementById('register-error').style.display = 'none';
}

// Afficher le formulaire de connexion
function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('login-error').style.display = 'none';
    document.getElementById('register-error').style.display = 'none';
}

// 🆕 Afficher le message de compte bloqué
function showBlockedAccountMessage() {
    const loadingScreen = document.getElementById('loading-screen');
    const authScreen = document.getElementById('auth-screen');
    const appContent = document.getElementById('app-content');
    
    // Masquer tout
    if (loadingScreen) loadingScreen.style.display = 'none';
    if (appContent) appContent.style.display = 'none';
    
    // Afficher l'écran d'auth avec le message de blocage
    if (authScreen) {
        authScreen.style.display = 'flex';
        authScreen.innerHTML = `
            <div class="auth-container">
                <div class="auth-card" style="max-width: 500px; text-align: center;">
                    <div style="font-size: 80px; margin-bottom: 20px;">🔒</div>
                    <h1 style="color: #dc2626; margin-bottom: 16px;">Compte Bloqué</h1>
                    
                    <div style="background: #fef2f2; border: 2px solid #dc2626; border-radius: 12px; padding: 20px; margin: 20px 0; text-align: left;">
                        <p style="color: #991b1b; margin-bottom: 12px; font-weight: 600;">
                            Votre compte a été désactivé pour activité suspecte.
                        </p>
                        <p style="color: #7f1d1d; font-size: 14px; line-height: 1.6;">
                            Raison : Transaction frauduleuse détectée
                        </p>
                    </div>
                    
                    <div style="background: #f9fafb; border-radius: 12px; padding: 20px; margin: 20px 0; text-align: left;">
                        <p style="color: #374151; margin-bottom: 12px; font-weight: 600;">
                            Si vous pensez qu'il s'agit d'une erreur :
                        </p>
                        <p style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">
                            📧 Email : support@kivirafacile.com
                        </p>
                        <p style="color: #6b7280; font-size: 14px;">
                            📱 WhatsApp : +243 85 584 1999
                        </p>
                    </div>
                    
                    <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
                        Vous allez être déconnecté automatiquement...
                    </p>
                </div>
            </div>
        `;
    }
}

// Déconnexion
function logout() {
    localStorage.removeItem(CONFIG.STORAGE_KEYS.TOKEN);
    localStorage.removeItem(CONFIG.STORAGE_KEYS.USER);
    currentUser = null;
    window.location.reload();
}

// Vérifier l'accès premium à une fonctionnalité
function checkPremiumAccess(feature) {
    if (!currentUser) {
        alert('Veuillez vous connecter');
        return false;
    }
    
    if (CONFIG.PREMIUM_FEATURES.includes(feature) && !currentUser.isPremium) {
        // Afficher le modal de paiement
        showPaymentModal();
        return false;
    }
    
    return true;
}

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', checkAuth);
