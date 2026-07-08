// sw.js - Service Worker minimal
self.addEventListener('install', (event) => {
  console.log('Service Worker installé !');
});

self.addEventListener('fetch', (event) => {
  // Obligatoire pour que le navigateur autorise l'installation
  // On laisse passer les requêtes normalement pour l'instant
  event.respondWith(fetch(event.request));
});
