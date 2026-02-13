// Service Worker for offline functionality with version control
const CACHE_NAME = 'futa-guide-v3.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/calculator.html',
    '/courses.html',
    '/styles.css',
    '/calculator.js',
    '/courses.js',
    '/main.js',
    '/version.js',
    '/version.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install event
self.addEventListener('install', event => {
    console.log('[Service Worker] Installing version:', CACHE_NAME);
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] Caching assets');
                return cache.addAll(urlsToCache).catch(error => {
                    console.error('[Service Worker] Cache failed:', error);
                });
            })
    );
});

// Fetch event - network first for HTML, cache first for assets
self.addEventListener('fetch', event => {
    // For HTML files - network first
    if (event.request.mode === 'navigate' || event.request.url.includes('.html')) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseClone);
                    });
                    return response;
                })
                .catch(() => {
                    return caches.match(event.request);
                })
        );
        return;
    }

    // For other assets - cache first
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    // Update cache in background
                    fetch(event.request)
                        .then(networkResponse => {
                            if (networkResponse && networkResponse.status === 200) {
                                caches.open(CACHE_NAME).then(cache => {
                                    cache.put(event.request, networkResponse);
                                });
                            }
                        })
                        .catch(() => {});
                    return response;
                }
                
                return fetch(event.request)
                    .then(response => {
                        if (response && response.status === 200) {
                            const responseClone = response.clone();
                            caches.open(CACHE_NAME).then(cache => {
                                cache.put(event.request, responseClone);
                            });
                        }
                        return response;
                    });
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating new version');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});