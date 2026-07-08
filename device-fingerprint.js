// ===== DEVICE FINGERPRINTING =====
// Génère une empreinte unique de l'appareil de l'utilisateur

let deviceFingerprint = null;

// Générer l'empreinte de l'appareil
async function generateDeviceFingerprint() {
    // Si déjà généré, retourner celui en cache
    if (deviceFingerprint) {
        return deviceFingerprint;
    }

    const components = [];

    // 1. User Agent (navigateur)
    components.push(navigator.userAgent);

    // 2. Langue
    components.push(navigator.language || navigator.userLanguage);

    // 3. Résolution d'écran
    components.push(`${screen.width}x${screen.height}x${screen.colorDepth}`);

    // 4. Timezone
    components.push(Intl.DateTimeFormat().resolvedOptions().timeZone);

    // 5. Platform
    components.push(navigator.platform);

    // 6. Hardware concurrency (nombre de CPU)
    components.push(navigator.hardwareConcurrency || 'unknown');

    // 7. Device memory (si disponible)
    components.push(navigator.deviceMemory || 'unknown');

    // 8. Touch support
    components.push(navigator.maxTouchPoints || 0);

    // 9. Canvas fingerprint
    try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('Kivirafacile', 2, 2);
        components.push(canvas.toDataURL());
    } catch (e) {
        components.push('canvas-error');
    }

    // 10. WebGL fingerprint
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            if (debugInfo) {
                components.push(gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL));
                components.push(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
            }
        }
    } catch (e) {
        components.push('webgl-error');
    }

    // 11. Plugins (si disponible)
    if (navigator.plugins) {
        const plugins = Array.from(navigator.plugins).map(p => p.name).join(',');
        components.push(plugins);
    }

    // 12. Do Not Track
    components.push(navigator.doNotTrack || 'unknown');

    // Combiner tous les composants
    const fingerprint = components.join('|||');
    
    // Hasher pour avoir une empreinte courte
    deviceFingerprint = await hashString(fingerprint);
    
    console.log('🔐 Device fingerprint généré:', deviceFingerprint);
    
    return deviceFingerprint;
}

// Fonction de hash simple
async function hashString(str) {
    // Si crypto.subtle est disponible (HTTPS ou localhost)
    if (window.crypto && window.crypto.subtle) {
        const encoder = new TextEncoder();
        const data = encoder.encode(str);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    } else {
        // Fallback : hash simple (non cryptographique)
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return 'fp_' + Math.abs(hash).toString(16);
    }
}

// Récupérer l'empreinte (génère si nécessaire)
async function getDeviceFingerprint() {
    if (!deviceFingerprint) {
        deviceFingerprint = await generateDeviceFingerprint();
    }
    return deviceFingerprint;
}

// Vérifier si l'appareil a changé
async function checkDeviceChange(storedFingerprint) {
    const currentFingerprint = await getDeviceFingerprint();
    return currentFingerprint !== storedFingerprint;
}

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    generateDeviceFingerprint();
});


