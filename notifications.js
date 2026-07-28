// ============================================================
// NOTIFICATIONS PUSH — Mot du jour
// Gère la demande de permission, l'abonnement, et l'affichage
// du mot du jour dans l'app elle-même.
// ============================================================

const NOTIF_API_BASE = (typeof CONFIG !== 'undefined' && CONFIG.API_URL) ? CONFIG.API_URL : '/api';

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; i++) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

function getAuthToken() {
    const tokenKey = (typeof CONFIG !== 'undefined' && CONFIG.STORAGE_KEYS && CONFIG.STORAGE_KEYS.TOKEN)
        ? CONFIG.STORAGE_KEYS.TOKEN : 'token';
    return localStorage.getItem(tokenKey);
}

// ── Activer les notifications (à appeler depuis un bouton) ──
async function enableDailyNotifications() {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
        alert('Les notifications ne sont pas prises en charge par ce navigateur.');
        return;
    }

    const token = getAuthToken();
    if (!token) {
        alert('Connecte-toi d\'abord pour activer les notifications.');
        return;
    }

    try {
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
            alert('Notifications refusées. Tu peux les réactiver dans les paramètres du navigateur.');
            return;
        }

        const registration = await navigator.serviceWorker.ready;

        const keyRes = await fetch(`${NOTIF_API_BASE}/notifications/vapid-public-key`);
        const keyData = await keyRes.json();
        if (!keyData.success) throw new Error('Clé de notification indisponible.');

        const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(keyData.publicKey)
        });

        const subRes = await fetch(`${NOTIF_API_BASE}/notifications/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ subscription })
        });
        const subData = await subRes.json();

        if (subData.success) {
            localStorage.setItem('kivira_notifications_enabled', 'true');
            alert('🔔 Notifications activées ! Tu recevras le mot du jour chaque jour.');
        } else {
            throw new Error(subData.error || 'Erreur lors de l\'abonnement.');
        }
    } catch (err) {
        console.error('Erreur activation notifications:', err);
        alert('❌ Impossible d\'activer les notifications : ' + err.message);
    }
}

// ── Désactiver les notifications ──
async function disableDailyNotifications() {
    try {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();
        if (subscription) {
            const token = getAuthToken();
            await fetch(`${NOTIF_API_BASE}/notifications/unsubscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
                },
                body: JSON.stringify({ endpoint: subscription.endpoint })
            });
            await subscription.unsubscribe();
        }
        localStorage.setItem('kivira_notifications_enabled', 'false');
        alert('🔕 Notifications désactivées.');
    } catch (err) {
        console.error('Erreur désactivation notifications:', err);
    }
}

// ── Afficher le mot du jour directement dans l'app (indépendant des notifs) ──
async function loadWordOfTheDay(targetElementId) {
    const el = document.getElementById(targetElementId);
    if (!el) return;
    try {
        const res = await fetch(`${NOTIF_API_BASE}/notifications/word-of-the-day`);
        const data = await res.json();
        if (data.success && data.word) {
            el.innerHTML = `
                <div style="font-size:13px;opacity:0.8;margin-bottom:4px">📖 Mot du jour</div>
                <div style="font-size:20px;font-weight:800">${data.word.kivira}</div>
                <div style="font-size:14px;opacity:0.9">${data.word.french}</div>
            `;
        }
    } catch (err) {
        console.warn('Mot du jour non disponible:', err.message);
    }
}

window.enableDailyNotifications = enableDailyNotifications;
window.disableDailyNotifications = disableDailyNotifications;
window.loadWordOfTheDay = loadWordOfTheDay;
