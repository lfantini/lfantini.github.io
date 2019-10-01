var CACHE_NAME = 'cache-v1';
var urlsToCache = [
  'index.html',
  'logo-rer-B.png',
  'logo-rer-B-144.png',
  'rerB.png',
  'plan-metro-paris.jpg',
  'js/main.js',
  'js/jquery-1.9.1.min.js',
  'js/bootstrap.min.js',
  'js/underscore.min.js',
  'css/fix.css',
  'css/bootstrap-cosmo.css',
  'css/bootstrap-responsive.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );  
});



self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});



self.addEventListener('activate', function(event) {
  console.log('Finally active. Ready to start serving content!');  
});
