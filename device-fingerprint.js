// ===== DEVICE FINGERPRINTING v2 =====
// Basé UNIQUEMENT sur des composants stables dans le temps.
// Objectif : même appareil = même fingerprint, même après 6 mois.
// Composants exclus : userAgent, canvas, WebGL, plugins, doNotTrack
// (tous ces éléments changent avec les mises à jour navigateur)

let deviceFingerprint = null;

async function generateDeviceFingerprint() {
    if (deviceFingerprint) return deviceFingerprint;

    const components = [];

    // 1. Platform (Windows, MacIntel, Linux x86_64...) — stable à vie
    components.push(navigator.platform || 'unknown');

    // 2. Timezone — stable sauf déménagement
    components.push(Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown');

    // 3. Hardware concurrency (nombre de cœurs CPU) — stable pour un PC
    components.push(String(navigator.hardwareConcurrency || 'unknown'));

    // 4. Device memory (RAM en GB) — stable pour un PC
    components.push(String(navigator.deviceMemory || 'unknown'));

    // 5. Résolution écran physique — stable (on exclut le zoom)
    components.push(`${screen.width}x${screen.height}`);

    // 6. Color depth — stable pour un écran donné
    components.push(String(screen.colorDepth || 'unknown'));

    // 7. Touch points — distingue PC (0) de mobile/tactile (>0)
    components.push(String(navigator.maxTouchPoints || 0));

    // 8. Langue principale du navigateur/OS — stable
    components.push(navigator.language || 'unknown');

    // 9. Type de connexion (si disponible) — stable pour un réseau fixe
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
        components.push(connection.effectiveType || 'unknown');
    } else {
        components.push('no-connection-api');
    }

    // Combiner et hasher
    const fingerprint = components.join('|||');
    deviceFingerprint = await hashString(fingerprint);

    console.log('🔐 Device fingerprint v2 généré:', deviceFingerprint.substring(0, 16) + '...');
    console.log('   Basé sur:', components.slice(0, 4).join(' | '));

    return deviceFingerprint;
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

async function getDeviceFingerprint() {
    if (!deviceFingerprint) {
        deviceFingerprint = await generateDeviceFingerprint();
    }
    return deviceFingerprint;
}

window.generateDeviceFingerprint = generateDeviceFingerprint;
window.getDeviceFingerprint = getDeviceFingerprint;
