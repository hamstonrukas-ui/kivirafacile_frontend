// ===== CONFIGURATION KIVIRAFACILE =====
const CONFIG = {

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // URLS DES BACKENDS (PRODUCTION)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    // Backend principal : Auth, Paiements, Sponsors
    API_URL: 'https://kivirafacile-api.onrender.com/api',

    // Backend traduction : KiviraAI (Claude Haiku)
    TRANSLATE_URL: 'https://kivira-translate-api.onrender.com',

    // Backend PHP : Bibliothèque + Dictionnaire
   // PHP_URL: 'https://kivirafacile.hstn.me',
    // Dictionnaire — maintenant via Render aussi
PHP_URL: 'https://kivirafacile-api.onrender.com',

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // CLÉS DE STOCKAGE
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    STORAGE_KEYS: {
        TOKEN: 'auth_token',
        USER: 'user_data'
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // CONFIGURATION PAIEMENT
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    PAYMENT_CHECK_INTERVAL: 5000,
    PAYMENT_MAX_DURATION: 300000,

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // FONCTIONNALITÉS PREMIUM
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    PREMIUM_FEATURES: ['lesson', 'dictionary', 'translation']
};
