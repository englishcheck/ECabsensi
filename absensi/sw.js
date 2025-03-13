self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('absensi-app').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        // Tambahkan aset lain jika ada (CSS, JS eksternal, dll.)
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});