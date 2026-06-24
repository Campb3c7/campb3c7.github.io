// Service worker that:
// 1. Adds COOP/COEP headers to enable SharedArrayBuffer (needed for FFmpeg)
// 2. Proxies FFmpeg files from CDN as same-origin (needed for Worker creation + COEP)
// 3. Caches FFmpeg files locally so the 25MB WASM only downloads once

var CACHE = 'ffmpeg-v1';

var CDN = {
  'ffmpeg-lib/ffmpeg.min.js':            'https://unpkg.com/@ffmpeg/ffmpeg@0.11.6/dist/ffmpeg.min.js',
  'ffmpeg-core/ffmpeg-core.js':          'https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js',
  'ffmpeg-core/ffmpeg-core.wasm':        'https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.wasm',
  'ffmpeg-core/ffmpeg-core.worker.js':   'https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.worker.js',
};

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

self.addEventListener('fetch', function (e) {
  if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') return;

  var url = new URL(e.request.url);

  // Proxy FFmpeg files from CDN (cache-first)
  for (var path in CDN) {
    if (url.pathname.endsWith(path)) {
      e.respondWith(
        caches.open(CACHE).then(function (cache) {
          return cache.match(e.request).then(function (hit) {
            if (hit) return hit;
            return fetch(CDN[path]).then(function (r) {
              if (r.ok) cache.put(e.request, r.clone());
              return r;
            });
          });
        })
      );
      return;
    }
  }

  // Add COOP/COEP to navigation (HTML page) responses
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then(function (r) {
        var h = new Headers(r.headers);
        h.set('Cross-Origin-Embedder-Policy', 'require-corp');
        h.set('Cross-Origin-Opener-Policy', 'same-origin');
        return new Response(r.body, { status: r.status, statusText: r.statusText, headers: h });
      })
    );
    return;
  }
});
