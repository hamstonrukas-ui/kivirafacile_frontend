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

// ── Message personnalisé avant la popup native du navigateur ──
// (une popup refusée est difficile à redéclencher, autant expliquer
// d'abord pourquoi, avec nos propres mots, avant de la déclencher)
function showNotificationOptInPrompt() {
    if (document.getElementById('notif-optin-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'notif-optin-modal';
    modal.style.cssText = `
        position: fixed; inset: 0; z-index: 99998;
        background: rgba(20,12,41,0.7);
        display: flex; align-items: center; justify-content: center;
        padding: 20px;
    `;
    modal.innerHTML = `
        <div style="background:#fff;border-radius:20px;max-width:380px;width:100%;
                    padding:28px 24px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.35);">
            <div style="font-size:44px;margin-bottom:12px">🔔</div>
            <h3 style="font-size:19px;font-weight:800;color:#1f1147;margin-bottom:10px">
                Autoriser Kivirafacile à vous envoyer des notifications ?
            </h3>
            <p style="font-size:14px;color:#6b7280;margin-bottom:22px;line-height:1.5">
                Reçois le <strong>mot du jour</strong> directement sur ton téléphone, chaque jour — un bon moyen de ne pas perdre le fil de ton apprentissage.
            </p>
            <div style="display:flex;flex-direction:column;gap:10px">
                <button id="notif-optin-accept" style="padding:14px;border-radius:12px;border:none;
                    background:linear-gradient(135deg,#7C3AED,#5B21B6);color:#fff;font-weight:700;
                    font-size:15px;cursor:pointer;">
                    🔔 Autoriser les notifications
                </button>
                <button id="notif-optin-later" style="padding:12px;border-radius:12px;border:none;
                    background:transparent;color:#6b7280;font-weight:600;cursor:pointer;">
                    Plus tard
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('notif-optin-accept').addEventListener('click', () => {
        modal.remove();
        enableDailyNotifications();
    });
    document.getElementById('notif-optin-later').addEventListener('click', () => {
        modal.remove();
    });
}

// ── Déclenchement automatique juste après une inscription ──
document.addEventListener('DOMContentLoaded', () => {
    const justRegistered = localStorage.getItem('kivira_just_registered') === 'true';
    if (!justRegistered) return;

    localStorage.removeItem('kivira_just_registered'); // ne se montre qu'une seule fois

    if (!('Notification' in window) || Notification.permission !== 'default') return;

    // Petit délai pour laisser l'interface de l'app se mettre en place d'abord
    setTimeout(showNotificationOptInPrompt, 1500);
});

window.showNotificationOptInPrompt = showNotificationOptInPrompt;
// ── Popup douce d'invitation, affichée avant la demande native du
//    navigateur (meilleure pratique : explique le bénéfice d'abord,
//    sinon les gens cliquent "Bloquer" par réflexe) ──
function showNotificationPermissionPrompt() {
    if (!('Notification' in window) || !('serviceWorker' in navigator)) return;
    // Déjà répondu (accepté ou refusé) → inutile de redemander
    if (Notification.permission !== 'default') return;
    if (document.getElementById('notif-prompt-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'notif-prompt-modal';
    modal.style.cssText = `
        position: fixed; inset: 0; z-index: 99998;
        background: rgba(20,12,41,0.7);
        display: flex; align-items: center; justify-content: center;
        padding: 20px;
    `;
    modal.innerHTML = `
        <div style="background:#fff;border-radius:20px;max-width:380px;width:100%;
                    padding:28px 24px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.35);">
            <div style="font-size:44px;margin-bottom:12px">🔔</div>
            <h2 style="font-size:19px;color:#1f1147;margin-bottom:8px">
                Autoriser Kivirafacile à vous envoyer des notifications ?
            </h2>
            <p style="font-size:14px;color:#6b7280;margin-bottom:24px;line-height:1.5">
                Reçois le <strong>mot du jour</strong> en Kivira chaque jour, directement sur ton téléphone.
            </p>
            <div style="display:flex;flex-direction:column;gap:10px">
                <button id="notif-prompt-accept" style="padding:14px;border-radius:12px;border:none;
                    background:#7C3AED;color:#fff;font-weight:700;font-size:15px;cursor:pointer;">
                    🔔 Autoriser
                </button>
                <button id="notif-prompt-later" style="padding:12px;border-radius:12px;border:none;
                    background:transparent;color:#6b7280;font-weight:600;cursor:pointer;">
                    Plus tard
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('notif-prompt-accept').addEventListener('click', async () => {
        modal.remove();
        await enableDailyNotifications();
    });
    document.getElementById('notif-prompt-later').addEventListener('click', () => {
        modal.remove();
    });
}

window.enableDailyNotifications = enableDailyNotifications;
window.disableDailyNotifications = disableDailyNotifications;
window.loadWordOfTheDay = loadWordOfTheDay;
window.showNotificationPermissionPrompt = showNotificationPermissionPrompt;
