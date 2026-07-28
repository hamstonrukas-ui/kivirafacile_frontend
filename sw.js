// sw.js - Service Worker minimal
self.addEventListener('install', (event) => {
  console.log('Service Worker installé !');
});

self.addEventListener('fetch', (event) => {
  // Obligatoire pour que le navigateur autorise l'installation
  // On laisse passer les requêtes normalement pour l'instant
  event.respondWith(fetch(event.request));
});

// ============================================================
// NOTIFICATIONS PUSH — Mot du jour
// ============================================================

self.addEventListener('push', (event) => {
  let data = { title: '📖 Kivirafacile', body: 'Nouveau mot du jour disponible !', url: '/' };
  try {
    if (event.data) data = event.data.json();
  } catch (e) {
    // payload non-JSON, on garde les valeurs par défaut
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      data: { url: data.url || '/' }
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
