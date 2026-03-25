const CACHE_NAME = "nsf-site-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/about.html",
  "/fukushima.html",
  "/faq.html",
  "/contact.html",

  "/css/style.css",
  "/css/about.css",
  "/css/fukushima.css",
  "/css/faq.css",
  "/css/contact.css",

  "/js/script.js",
  "/js/contact.js",
  "/js/faq.js",
  "/js/fukushima.js"
];

// インストール
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// アクティベート（古いキャッシュ削除）
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// リクエスト処理
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});