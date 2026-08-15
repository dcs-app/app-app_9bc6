/* DCS-PWA-ADDALL-SAFE — one missing precache URL must not fail SW install */
try{if(self.Cache&&self.Cache.prototype&&self.Cache.prototype.addAll){var _dcsAddAll=self.Cache.prototype.addAll;self.Cache.prototype.addAll=function(u){var self2=this;return Promise.allSettled((u||[]).map(function(x){return self2.add(x).catch(function(){})})).then(function(){})}}}catch(_e){}
const CACHE_NAME = 'haveli-restaurant-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/menu.html',
  '/reservation.html',
  '/about.html',
  '/gallery.html',
  '/contact.html',
  '/manifest.json',
  '/icon.svg',
  '/icon.svg',
  // add any additional static assets (CSS, JS, images) here
];

// Install – cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Activate – clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

// Fetch – serve from cache, fall back to network
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request).then(networkResponse => {
        // Optionally cache new requests
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }).catch(() => caches.match('/offline.html')) // optional offline fallback page
  );
});