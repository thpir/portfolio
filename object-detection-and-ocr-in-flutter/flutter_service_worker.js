'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2f5d60560b2878feac88b42e58420689",
"index.html": "2bcd4a78c2f889e4b484e31dfbbc64ed",
"/": "2bcd4a78c2f889e4b484e31dfbbc64ed",
"main.dart.js": "8d6d4af7d37a78d15530ae6c01ef6182",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "652055bce21952e5ece54a1fc04308cd",
"assets/AssetManifest.json": "e89b1da62aab93e0eb0877f48bedb2a3",
"assets/NOTICES": "ce213d7c502a9c1ee94efc5aa87f35b9",
"assets/FontManifest.json": "30ac675442ae31c44f49974239e417cd",
"assets/AssetManifest.bin.json": "0cbdfe12b994271975b0b52a85a10701",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_deck/assets/header.png": "eff8c3d9c6b3d5639e71f3ead711bf51",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "72f80e17d2efadf12bc048b25d418837",
"assets/fonts/MaterialIcons-Regular.otf": "22a91fbfcb0ed09e1334c631f6ebf14b",
"assets/assets/images/cyber3lab_long.jpg": "cafb881364c8ef5ec90dedad8c26d128",
"assets/assets/images/init_camera.png": "49233ada19aa35bce6ad1452291a0d5b",
"assets/assets/images/silo_connect_homepage.png": "12398704bfd6c1fd3edf9cf1624ea700",
"assets/assets/images/qr_supervisely.png": "87c3cb5928e7164fc8adc86b6867a624",
"assets/assets/images/app_number_confirmation.png": "9a986879b7e380fb8a5290e7aa1031a8",
"assets/assets/images/python_code.png": "5e1dec0621ac40f6273e835cd79d37cb",
"assets/assets/images/qr_flutter_vision.png": "4c8414cc1b920c648c6d65df00a57723",
"assets/assets/images/thijs_square.jpg": "29ebc1ef8cfafed5aae08bd6a6ce1781",
"assets/assets/images/qr_ocr.png": "9db379588a192f10e00c1d7efd4871b8",
"assets/assets/images/howest_logo.webp": "f8da391b0489480ec6bcd67cc3f324b7",
"assets/assets/images/tag_reader_detail.png": "715fa7c079341feffd656789b3608183",
"assets/assets/images/app_clamp_detection.png": "070148863af8e0148adf224e8e52b8b5",
"assets/assets/images/yolo_on_frame.png": "57c3d6d3d32e412f445c567a4d2b68c7",
"assets/assets/images/howest_neutraal.webp": "243e8af0951446cbd413423b07c0232a",
"assets/assets/images/ocr_orc.png": "453e304a081140a7b76d1c9117cbde6a",
"assets/assets/images/label_file_explanation.png": "5b2f1123c8370fa238e90bd5247ca89a",
"assets/assets/images/duck_identifier.png": "65ebe96b088d755439e4be959cdfeefb",
"assets/assets/images/start_stream.png": "5755aed346fb7bbcdf7ae86572097420",
"assets/assets/images/gaicia_screenshot.png": "08d4be9b6b822d375c2b46fde2f48f76",
"assets/assets/images/flutter_dash.png": "ccfe491327a5eee614e03c9e810afbb5",
"assets/assets/images/tflite_export.png": "648fdd42e4e5a4c544fd5fcd60fca103",
"assets/assets/images/yaml_file.png": "5ddaf8835dda51c44d86ef35bfe85acf",
"assets/assets/images/silos_in_the_wild_2.jpg": "ded57f33329784ff23e5a5db033e5357",
"assets/assets/images/draw_boxes.png": "678e854f52afac2e7334714822fe91a8",
"assets/assets/images/supervisely_screenshot.png": "7fd00837ced830fcadb743582006d03f",
"assets/assets/images/clamp_detection_process.png": "d74ed411ef7f345af3884b2475ac2a9f",
"assets/assets/images/silos_in_the_wild_1.jpg": "a6d8c53a358023079efa80a5679765c1",
"assets/assets/images/qr_yolo.png": "1a06c79000af397c5462e6ebbba12db7",
"assets/assets/images/qr_linkedin.png": "73a2fc72e30dce117ace2f65e92f2253",
"assets/assets/images/Pixel%25207%2520Pro%2520Mockup%2520labelhome.png": "fb157f5f4301a2e90ff508c192a4771b",
"assets/assets/images/ai_pipeline.png": "0b51d2ca9cf4c7189108337018a46a31",
"assets/assets/images/qr_cyber3lab.png": "234d4983caaefff65b9431cfd0abccf6",
"assets/assets/images/ocr_in_flutter.png": "bf7b85565ae724d8b7f54bdb95a3d4e9",
"assets/assets/images/load_yolo.png": "ad2d751e1d8416afc46f5c7375898fc2",
"assets/assets/images/bounding_box_explained.jpg": "95c8b7ffa4e4293bb1f9541f14615d1e",
"assets/assets/videos/lambrecht_demo.mp4": "b32d74662f35a12a3a4209d26c910680",
"assets/assets/videos/object_detection.mp4": "98d65e49a8152d299d9374100aa92781",
"assets/assets/videos/lambrecht_promovideo.mp4": "f0d44f495659333b736e5fac7307b0fd",
"assets/assets/fonts/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"assets/assets/fonts/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"assets/assets/fonts/Nunito-Italic.ttf": "fac5c8ffb51e06094affdbb7fff9000e",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
