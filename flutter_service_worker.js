'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "ea8f0c4a80bd1204010f91504c479014",
"manifest.json": "24b4e02ffda6594721dc873e82f47c11",
"index.html": "f4fe8eee5aaef3853b39fe24eb6feb68",
"/": "f4fe8eee5aaef3853b39fe24eb6feb68",
"assets/AssetManifest.json": "97f0661d090d4f8a280c33c4a712c616",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "bb5ea26ab9addf699b309e14d1ef3f00",
"assets/FontManifest.json": "0621fb7723859a382fc19210904f6578",
"assets/assets/wethebasce.jpeg": "125a8b237458903a101dc50a9b26751e",
"assets/assets/fabio.jpg": "9e4c3a5408a3fcf861f561e75e110966",
"assets/assets/launcher.png": "ceb788fff771cba2ae0d440bcfa045f3",
"assets/assets/luca.jpg": "2d312b016bbc2456bcb3d88b7fdabbd7",
"assets/assets/gianluca.jpg": "6cbaa42f4d69d2bf65c75e5720bb6206",
"assets/assets/naismith.jpg": "124ee95b3d57b49f4b903a67f1c7ffb3",
"assets/assets/podium.png": "ac672ae5039761f3f935150752d73ecd",
"assets/assets/enrico.jpg": "90545eceac53dc23bb931e417e5dff66",
"assets/assets/melo.jpg": "8f87b0a52fb213352fb84d3e15a20d2d",
"assets/assets/albo.png": "91d0c6c1a7953fa187c334517b409f38",
"assets/assets/nic.jpg": "68e33ff3d33101c74aeff0a23dd817bd",
"assets/assets/Logo.jpg": "827ee1e01ccd6c82e6a59dee96d2e1e4",
"assets/assets/thatsnottrue.jpeg": "f9e5600da03330cab3bc355e8c4c34ab",
"assets/assets/ale.jpg": "5793ed164a3e6dcf3520d7f7ebedb34f",
"assets/assets/teo.jpg": "ff735c0954956e2a104f2eaaa6f03f6d",
"assets/assets/yiwei.jpg": "aeabca8bfdd199cfe006e6eef45957b5",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3e81ae3d5da947449b00c686bfe100af",
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
