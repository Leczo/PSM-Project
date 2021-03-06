const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "../babel.config",
  "../cvtemplate2.1.html",
  "../cvtemplate2.2.html",
  "../package.json",
  "../package-lock.json",
  "../styles2.1.css",
  "../styles2.2.css",
  "../src/main.js",
  "../src/router.js",
  "../src/img/favicon.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});