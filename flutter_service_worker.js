'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "901a525c260bda3d63498aab1d538fcd",
"manifest.json": "cefe2459cee7ca7993ad794747fe79e6",
"index.html": "41450ab180ba25f1a74a43acdb338092",
"/": "41450ab180ba25f1a74a43acdb338092",
"assets/AssetManifest.json": "ef717d6d4933ec38dd6a56dd13b668e4",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "8c2a3525c64618bf1e7f1e06c635c581",
"assets/FontManifest.json": "0621fb7723859a382fc19210904f6578",
"assets/assets/wethebasce.jpeg": "125a8b237458903a101dc50a9b26751e",
"assets/assets/fabio.jpg": "9e4c3a5408a3fcf861f561e75e110966",
"assets/assets/launcher.png": "ceb788fff771cba2ae0d440bcfa045f3",
"assets/assets/luca.jpg": "2d312b016bbc2456bcb3d88b7fdabbd7",
"assets/assets/gianluca.jpg": "6cbaa42f4d69d2bf65c75e5720bb6206",
"assets/assets/naismith.jpg": "124ee95b3d57b49f4b903a67f1c7ffb3",
"assets/assets/podium.png": "ac672ae5039761f3f935150752d73ecd",
"assets/assets/profile2020.jpg": "23978bea474543c98d2ffdeb5abf1389",
"assets/assets/enrico.jpg": "90545eceac53dc23bb931e417e5dff66",
"assets/assets/melo.jpg": "8f87b0a52fb213352fb84d3e15a20d2d",
"assets/assets/albo.png": "91d0c6c1a7953fa187c334517b409f38",
"assets/assets/nic.jpg": "68e33ff3d33101c74aeff0a23dd817bd",
"assets/assets/Logo.jpg": "827ee1e01ccd6c82e6a59dee96d2e1e4",
"assets/assets/thatsnottrue.jpeg": "f9e5600da03330cab3bc355e8c4c34ab",
"assets/assets/ale.jpg": "5793ed164a3e6dcf3520d7f7ebedb34f",
"assets/assets/teo.jpg": "ff735c0954956e2a104f2eaaa6f03f6d",
"assets/assets/yiwei.jpg": "aeabca8bfdd199cfe006e6eef45957b5",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e7dec9c5e1bd830c084f2d2fb94fa1e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
