var CACHE_NAME = "water-monitoring-system";
var urlsToCache = ["/"];

// Install a service worker
self.addEventListener("install", event => {
  // Perform install steps
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function(cache) {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error(err))
  );
});

// Cache and return requests
self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(err => console.error(err))
  );
});

// Update a service worker
self.addEventListener("activate", event => {
  var cacheWhitelist = ["uddesh-portfolio-pwa"];
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .catch(err => console.error(err))
  );
});
