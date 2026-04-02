self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));

self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('google') || event.request.url.includes('facebook')) {
        console.log("YOU RECON: ", event.request.url);
    }
    event.respondWith(fetch(event.request));
});
