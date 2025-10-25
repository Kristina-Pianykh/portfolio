self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  // Clean up old caches if you add any in future
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', () => {
  // no interception
});
