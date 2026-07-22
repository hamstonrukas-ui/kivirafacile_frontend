// ===== DEVICE FINGERPRINTING v3 =====
// Objectif : même appareil = même fingerprint, à vie.
//
// Changements vs v2 :
// 1. RETRAIT de connection.effectiveType — ce composant reflète la
//    QUALITÉ RÉSEAU DU MOMENT (4g/3g/slow-2g), pas l'appareil. Sur
//    des réseaux instables (coupures, changement de tour, passage
//    4g -> 3g), il change constamment pour la MÊME personne sur le
//    MÊME appareil, cassant tout le fingerprint (un seul composant
//    différent = hash totalement différent).
// 2. PERSISTANCE localStorage — le fingerprint est calculé UNE SEULE
//    fois puis réutilisé pour toujours sur cet appareil/navigateur,
//    au lieu d'être recalculé (et donc potentiellement différent) à
//    chaque chargement de page.

let deviceFingerprint = null;
const FINGERPRINT_STORAGE_KEY = 'kivira_device_fingerprint_v3';

async function computeRawDeviceFingerprint() {
    const components = [];

    // 1. Platform (Windows, MacIntel, iPhone, Linux armv8l...) — stable à vie
    components.push(navigator.platform || 'unknown');

    // 2. Timezone — stable sauf déménagement
    components.push(Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown');

    // 3. Hardware concurrency (nombre de cœurs CPU) — stable (absent sur iOS Safari, ok)
    components.push(String(navigator.hardwareConcurrency || 'unknown'));

    // 4. Device memory (RAM en GB) — stable (absent sur iOS Safari, ok)
    components.push(String(navigator.deviceMemory || 'unknown'));

    // 5. Résolution écran physique — stable (on exclut le zoom)
    components.push(`${screen.width}x${screen.height}`);

    // 6. Color depth — stable pour un écran donné
    components.push(String(screen.colorDepth || 'unknown'));

    // 7. Touch points — distingue PC (0) de mobile/tactile (>0)
    components.push(String(navigator.maxTouchPoints || 0));

    // 8. Langue principale du navigateur/OS — stable
    components.push(navigator.language || 'unknown');

    // (connection.effectiveType retiré — trop instable, voir note ci-dessus)

    const fingerprint = components.join('|||');
    const hash = await hashString(fingerprint);

    console.log('🔐 Device fingerprint v3 calculé:', hash.substring(0, 16) + '...');
    console.log('   Basé sur:', components.slice(0, 4).join(' | '));

    return hash;
}

async function hashString(str) {
    if (window.crypto && window.crypto.subtle) {
        const encoder = new TextEncoder();
        const data = encoder.encode(str);
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 32);
    }

    // Fallback si pas de crypto.subtle (HTTP non sécurisé)
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(16).padStart(8, '0');
}

// ── Point d'entrée principal : à utiliser partout dans le code ──
// Retourne toujours la MÊME valeur pour cet appareil/navigateur,
// tant que localStorage n'est pas effacé.
async function getDeviceFingerprint() {
    if (deviceFingerprint) return deviceFingerprint;

    // 1. Chercher une valeur déjà sauvegardée sur cet appareil
    try {
        const stored = localStorage.getItem(FINGERPRINT_STORAGE_KEY);
        if (stored) {
            deviceFingerprint = stored;
            console.log('🔐 Device fingerprint récupéré depuis localStorage:', stored.substring(0, 16) + '...');
            return deviceFingerprint;
        }
    } catch (e) {
        console.warn('⚠️ localStorage indisponible pour le fingerprint:', e.message);
    }

    // 2. Sinon, le calculer une fois et le sauvegarder définitivement
    deviceFingerprint = await computeRawDeviceFingerprint();
    try {
        localStorage.setItem(FINGERPRINT_STORAGE_KEY, deviceFingerprint);
    } catch (e) {
        console.warn('⚠️ Impossible de sauvegarder le fingerprint:', e.message);
    }

    return deviceFingerprint;
}

// Conservé pour compatibilité avec le code existant qui appelle encore
// generateDeviceFingerprint() directement (nom historique) — redirige
// simplement vers la version persistante. Aucun risque de boucle : le
// nom "generateDeviceFingerprint" n'existe plus nulle part ailleurs
// dans ce fichier, donc pas de conflit possible.
window.generateDeviceFingerprint = getDeviceFingerprint;
window.getDeviceFingerprint = getDeviceFingerprint;
