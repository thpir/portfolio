'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8820cac57542de15049ce808d9154b7e",
"version.json": "19ea22e941db26e31aa791b6ac7ca3d7",
"favicon.ico": "f59c0fc5e90d38d8b7e3d71c70d2fbcc",
"index.html": "51508cf144662c5722ddfa8c142ad44d",
"/": "51508cf144662c5722ddfa8c142ad44d",
"main.dart.js": "4bba84104ce54e1ba39728e6ee187d7f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.mjs": "6539d76a6e81ef323d2ffd0b4bdba678",
"icons/favicon-16x16.png": "a40d1e10983f8e8d6fd129937dca39e2",
"icons/android-chrome-192x192.png": "a8734e9c5e31f7f2c16546a7b4a4e398",
"icons/apple-touch-icon.png": "fe6c7db6189accc5b9bd3a51fd2b7835",
"icons/Icon-192.png": "f6a87fa3f7b3fa8f32ab8eaf0bc8c170",
"icons/Icon-maskable-192.png": "f6a87fa3f7b3fa8f32ab8eaf0bc8c170",
"icons/android-chrome-512x512.png": "ba9c91a7f1f2ca86b0ea3be65e6d8fba",
"icons/Icon-maskable-512.png": "5cd0b7fa2905c7e8a03a007624492de8",
"icons/Icon-512.png": "5cd0b7fa2905c7e8a03a007624492de8",
"icons/favicon-32x32.png": "06881280e6379e75558ff9762c05d993",
"manifest.json": "4bd25cb6c81d60d4282a1e5d9431c87c",
"main.dart.wasm": "8ebdab0be987c800b2e100ecfea42189",
"assets/AssetManifest.json": "40361306dd8d18dae8939ceb56d7ee05",
"assets/NOTICES": "2c392d682be2855d0c56b7ff53ef4d76",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/AssetManifest.bin.json": "f6981b7c8ac961ad59e2fd1afd0858d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1657d5020ce97f9e6b9e6f2c7d9301aa",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "10eeb735593aa564cde56695b376ecfe",
"assets/fonts/MaterialIcons-Regular.otf": "d289c0ed1f4191933c6e75c2d68d9e1d",
"assets/assets/images/project_silo_connect_2/screenshot_5.webp": "ee11e75dbfb1606e28764ecf64939b6a",
"assets/assets/images/project_silo_connect_2/screenshot_4.webp": "24b3049c42ba2cf3c6c898ed6bf61724",
"assets/assets/images/project_silo_connect_2/screenshot_3.webp": "bffe2a675ce46064a76fee0add10cc31",
"assets/assets/images/project_silo_connect_2/screenshot_2.webp": "57fbdad7dd73c12940a53e07a9fdb655",
"assets/assets/images/project_silo_connect_2/screenshot_1.webp": "138e78194d4ed13cb85dce3fdd1de4e3",
"assets/assets/images/project_silo_connect_2/app_icon.webp": "cc8dffbd3ea1f81675ea457c39956bfa",
"assets/assets/images/project_silo_connect_2/screenshot_6.webp": "6898a1671eea6d683b700d000d6c7b80",
"assets/assets/images/software_apple.svg": "2a55347be35065dca46c27e0647c3f80",
"assets/assets/images/certificate_badges/certificate_html.webp": "1121035a9dacc0924531700a2aaa3f0b",
"assets/assets/images/certificate_badges/certificate_js.webp": "70bd4eb5f20ff846dc6c019336f2914e",
"assets/assets/images/certificate_badges/certificate_ios.webp": "29063310e83151644949621e52f70cec",
"assets/assets/images/certificate_badges/certificate_mopt.webp": "67e53c5c018e439300465ac0928968f9",
"assets/assets/images/certificate_badges/certificate_ai.webp": "b42910744aa66cbea546f12203112db1",
"assets/assets/images/certificate_badges/certificate_cs50.webp": "044a0cbab3d0e82470ddfdad2cc7c8da",
"assets/assets/images/certificate_badges/certificate_flutter.webp": "cba64fedfbc08e770ddf00c5c8eb86c0",
"assets/assets/images/certificate_badges/certificate_et.webp": "7570a2018e73665e50f54aac6ea3f54f",
"assets/assets/images/project_energy_desk/screenshot_5.webp": "8f122f7054d058071a3fb73910c49f3e",
"assets/assets/images/project_energy_desk/screenshot_4.webp": "047d5ef9596150a4dc22783c28ea3f9e",
"assets/assets/images/project_energy_desk/screenshot_3.webp": "30f28e53cede0bc16889d2cbf55fb4cb",
"assets/assets/images/project_energy_desk/screenshot_2.webp": "c5cfbca91bb5f9fc9e017bbf9184a22c",
"assets/assets/images/project_energy_desk/screenshot_1.webp": "cd5353c499192cc20d9d322cdb5476c9",
"assets/assets/images/project_energy_desk/app_icon.webp": "446f322588876d60e56d6319c58ecf64",
"assets/assets/images/project_energy_desk/screenshot_7.webp": "ff24bd3ecb56be79fbea7c0957faf5d2",
"assets/assets/images/project_energy_desk/screenshot_6.webp": "cddc2576fc377bc36e5353be441e6936",
"assets/assets/images/logo.png": "f74919235d87e347f054f6721d0cffa1",
"assets/assets/images/software_flutter.svg": "801f48c8aeb83ada8aeb8e69f8b76e6d",
"assets/assets/images/google_play_icon.webp": "0954ba9202162fab9ed3eb7da9f474b7",
"assets/assets/images/launcher_icon.png": "6a9305d67918f435e05d2ebf6f20e46f",
"assets/assets/images/software_computer_science.svg": "02e6c7508bbd2bb12c96d17a0a770818",
"assets/assets/images/profile_picture.webp": "e94c30318c243e7f5f3832592b357663",
"assets/assets/images/software_vue.svg": "19619c4b8096609b4d2cfbe72321cfb3",
"assets/assets/images/software_android.svg": "07e4a94c0197b98af7471531c2a1eef0",
"assets/assets/images/profile_picture_old.png": "9b140203cc5b304fd5751407f750e0c5",
"assets/assets/badges/google_play_badge.png": "e6d552c5deec92675d47f9b89d816ab8",
"assets/assets/badges/app_store_badge.png": "5873e390bf7c81aa8c29a893b62463a5",
"assets/assets/badges/github_badge.png": "1f46de53d4316a63932c0b982b99a99e",
"assets/assets/badges/visit_website_badge.png": "09bc365018dcc75279de9499e9c13f7a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
