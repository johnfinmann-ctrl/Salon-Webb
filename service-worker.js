/* ============================================
   SALON WEBB – service-worker.js v1.0.0
   ============================================ */

const CACHE_VERSION = 'salonwebb-v1.0.0';
const OFFLINE_URL   = 'offline.html';

const PRECACHE_URLS = [
  './',
  './index.html',
  './styles.css?v=1.0.0',
  './app.js?v=1.0.0',
  './manifest.json',
  './offline.html',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// ===== INSTALL =====
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      return cache.addAll(PRECACHE_URLS.map(url => {
        return new Request(url, { cache: 'reload' });
      })).catch(err => {
        // Gracefully handle if some resources aren't available yet
        console.warn('Precache error (non-fatal):', err);
      });
    })
  );
  self.skipWaiting();
});

// ===== ACTIVATE =====
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name.startsWith('salonwebb-') && name !== CACHE_VERSION)
          .map(name => {
            console.log('Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    })
  );
  self.clients.claim();
});

// ===== FETCH =====
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin requests (except Google Fonts)
  if (request.method !== 'GET') return;
  if (!url.origin.includes(self.location.origin) &&
      !url.hostname.includes('fonts.googleapis.com') &&
      !url.hostname.includes('fonts.gstatic.com') &&
      !url.hostname.includes('images.unsplash.com')) {
    return;
  }

  // Navigation requests: try network, fallback to cache, then offline page
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then(cache => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => {
          return caches.match('./index.html')
            .then(cached => cached || caches.match('./offline.html'));
        })
    );
    return;
  }

  // Assets: stale-while-revalidate for fonts/images, cache-first for app files
  if (url.hostname.includes('fonts.gstatic.com') ||
      url.hostname.includes('images.unsplash.com')) {
    event.respondWith(
      caches.open(CACHE_VERSION).then(cache => {
        return cache.match(request).then(cached => {
          const fetchPromise = fetch(request).then(response => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          });
          return cached || fetchPromise;
        });
      })
    );
    return;
  }

  // Default: cache-first with network fallback
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_VERSION).then(cache => cache.put(request, clone));
        return response;
      }).catch(() => {
        // Return offline placeholder for images
        if (request.destination === 'image') {
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#E8E2D9"/><text x="50%" y="50%" text-anchor="middle" fill="#999" font-size="14" dy=".3em">Offline</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        }
        return caches.match('./offline.html');
      });
    })
  );
});

// ===== PUSH (parat til fremtidig brug) =====
self.addEventListener('push', (event) => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || 'Salon Webb', {
      body: data.body || '',
      icon: './icons/icon-192.png',
      badge: './icons/icon-192.png',
      tag: 'salon-webb-notification'
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('./')
  );
});
