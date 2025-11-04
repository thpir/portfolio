'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "705eb939dcb488391cca31afcc853d42",
"version.json": "7766d78dd8ff24771f98aeed1b3cc3c9",
"index.html": "f8e45bb4afe67906239c01e2c7c2e6c7",
"/": "f8e45bb4afe67906239c01e2c7c2e6c7",
"main.dart.js": "2b6e0d1f949c6e0bcc28fa42f71cbcf5",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "05add823f9bb98c935a09e212631512a",
"assets/AssetManifest.json": "96fcff1738eeac9d00d42422a7230943",
"assets/NOTICES": "6b95818abad1270393717133d39104ad",
"assets/FontManifest.json": "8f7c50b57b22747793aa5fea99ee429d",
"assets/AssetManifest.bin.json": "07c465b9b49f03be38cad136c9ecee14",
"assets/packages/nes_ui/assets/checkered_pattern.png": "7f3e9d7ae73d37c7329ee95d1d54f531",
"assets/packages/nes_ui/google_fonts/OFL.txt": "5096248a0ad125929b038a264f57b570",
"assets/packages/nes_ui/google_fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_deck/assets/header.png": "7b35f3749eb44d6d99f8621da7ba71a5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0fe7cd06d7b3c31648fbe9434a812ca3",
"assets/fonts/MaterialIcons-Regular.otf": "079b8d585ec94c5d7fecfb315ce1ef7e",
"assets/assets/music/free_run.mp3": "c700cf7861e33436a916cdf7e5da4e5b",
"assets/assets/music/CREDITS.TXT": "664b159f17146e56808c4e23d7603f6e",
"assets/assets/music/bit_forrest.mp3": "f330991a5bd6973c5d1167619319abd0",
"assets/assets/music/tropical_fantasy.mp3": "44bdafbd3982d2ba451f225294f56dff",
"assets/assets/images/logo_dart.webp": "668b6538bb2b2010ab65b6cab6d9ca96",
"assets/assets/images/qr_serverpod.webp": "cd7840de417a9ae0f3191762e170212a",
"assets/assets/images/qr_linkedin.webp": "95ad0d85d09c20c3d7ee2352ce15e348",
"assets/assets/images/yet_challenges.webp": "41dc50d236b64cdbf011612276fed8f3",
"assets/assets/images/flutter_create.webp": "a64037d80ad887eee2d99adaa9040499",
"assets/assets/images/flutter_by_the_numbers.webp": "82f0ad9d89a13c04568470d052bcd797",
"assets/assets/images/gen_ai_result.webp": "1424a5c637a2e4de90f432559399f20f",
"assets/assets/images/flutter_deck_showcase.webp": "80d91844a9685da3654a70c0bf706671",
"assets/assets/images/flutter_is_amazing_meme.webp": "8bc531252033d717b25962a8d01c3f03",
"assets/assets/images/dart_compiler.webp": "b800f6bc1861c39f75e4c00c7793f67e",
"assets/assets/images/icon_gov_app.webp": "96c391ccdfa9e4daa8a7413c166db738",
"assets/assets/images/gen_ai_processing.webp": "fa7d528a88e12424748539909538c77e",
"assets/assets/images/icon_google_wallet.webp": "3a71b0657c826151a85b0903d14f7898",
"assets/assets/images/dart_website_screenshot.webp": "0076b0f066ff77ea460e7083f991b476",
"assets/assets/images/yet_ai_sprinkle.webp": "f57b940d7be65f928393ad3ddef19f98",
"assets/assets/images/icon_telegraaf.webp": "0584c6a360c1899a4d8f4c6a8bee73d9",
"assets/assets/images/scenery/cliffs.png": "d139844482c5e70dfe9ce93ac652c132",
"assets/assets/images/scenery/clouds.png": "e0dfcc6f83c9e30c3e3594b2595d545e",
"assets/assets/images/scenery/background.png": "c61d91d268b88b395610c09de1595feb",
"assets/assets/images/scenery/ground.png": "ef0f0c2752ccc83faac10852233e3407",
"assets/assets/images/scenery/trees.png": "7a11e6940b6588d3835dfffb8945aa57",
"assets/assets/images/flutter_for_xamarin_devs.webp": "24a88fe1e567a21551e96ccdad983861",
"assets/assets/images/icon_covid_safe.webp": "ae1cbaf3b19246e318bbe92fa67b3edd",
"assets/assets/images/icon_google_adds.webp": "0628fe09d232c722a6b054c6910b85fe",
"assets/assets/images/icon_code_grey.webp": "53beb1cb76d39ffe575fb17cff789433",
"assets/assets/images/background-kleurencodes.webp": "620d2ec63a5a52195c8942b1f6db1af7",
"assets/assets/images/logo_linkedin.webp": "2d525f0ee635687e37d56f7bd62918a8",
"assets/assets/images/profile_pic.webp": "e94c30318c243e7f5f3832592b357663",
"assets/assets/images/meet_flutter_01.webp": "4f73403a8aa6949cca00c42eb0be86ac",
"assets/assets/images/flame_game_bg.webp": "5d73e73d233a3df8175707e1d20b9081",
"assets/assets/images/flutter_frames_chart.webp": "ea8e5487afbf8bc4d4cd1bff8da4588e",
"assets/assets/images/howest_logo.webp": "ff010fdb675c500067dc4c804764b8cc",
"assets/assets/images/icon_engie_app.webp": "36a5e8e370423ee4729bafe8885b1839",
"assets/assets/images/logo_github.webp": "88cfe04ce9bfface621445d8c2b30678",
"assets/assets/images/jaspr_framework.webp": "22034ee190e646e5559ceecb9c0dfdcc",
"assets/assets/images/icon_covid_scan.webp": "d6380418b04a7377e162afafa21d1458",
"assets/assets/images/icon_yet.webp": "07cd3575d7ed7bb274dc21e5ee848f44",
"assets/assets/images/lambrecht_problem.webp": "12b402f6c01b553a23e79ccb507c1b5b",
"assets/assets/images/bg_flame_engine.webp": "bcd44866bef2d2c9d9de154e60e94f71",
"assets/assets/images/flutter_pi_project.webp": "1b794c852409cc1008b060575244cbd2",
"assets/assets/images/qr_flutter_deck_howest.webp": "8352c1ad61e9b80f36e0bae4bbfa0f96",
"assets/assets/images/timeline.webp": "aad84ce01186835e38c78ce91d6f55f3",
"assets/assets/images/stateless_vs_stateful_code.webp": "fb3a367069916c982767d812ee7ec093",
"assets/assets/images/howest_neutraal.webp": "243e8af0951446cbd413423b07c0232a",
"assets/assets/images/personalized_dash.webp": "bb4916b05588ab1ba7348468bc51e9f6",
"assets/assets/images/icon_siloconnect2.webp": "cc8dffbd3ea1f81675ea457c39956bfa",
"assets/assets/images/logo_serverpod.webp": "f15c75eff75cb1460366ddf2185711dd",
"assets/assets/images/cross_platform.webp": "5278efdfdc631a8d3501e3ad9bacf425",
"assets/assets/images/stateful_vs_stateless.webp": "6b4f66b43a0e9d120fe09266e7bab4c5",
"assets/assets/images/yet_collage.webp": "b7d634e8b285fe2e758010b9e95e8fed",
"assets/assets/images/qr_start_to_flutter.webp": "4bb2f138d4aa6815cbe61ad8d60c66d9",
"assets/assets/images/gen_ai_in_flutter_paint.webp": "08764da24b1ccaa17027ab3b489402a0",
"assets/assets/images/icon_bmw_app.webp": "a60d925db52d0a656817cbc6d063f3a1",
"assets/assets/images/strength_of_flutter.webp": "c1b38a26ab8d5fbf21e5237007b1c007",
"assets/assets/images/qr_presentation.webp": "807be32e09649ab6fcbbd701abd3f74e",
"assets/assets/images/counter_app_widget_tree.webp": "ed6a942efb15a3706e2b4cde820862dc",
"assets/assets/images/qr_flutter_deck.webp": "4c7d28254b499e7317151ccaf467402c",
"assets/assets/images/ember.png": "3027f5f0b80b46ee1ae2463f2ab3d1ce",
"assets/assets/images/global_state.webp": "ef30a3d0f223b3b754d0b51357bfe59b",
"assets/assets/images/qr_flutter_belgium.webp": "549a438b4196867e83343e776e5fa881",
"assets/assets/images/logo_youtube.webp": "eaa0c8816422a0cfc01c1ed7a9873ef7",
"assets/assets/images/logo_meetup.webp": "368695198c641364aa4e55b4e76f6f98",
"assets/assets/images/widgets_breakdown.webp": "83c4692afa46cbb0bc24c2345b96fe06",
"assets/assets/images/icon_hue_app.webp": "dcb89937d6fcb18ad1a4555ff87376ce",
"assets/assets/images/icon_flutter_grey.webp": "eca95cf31b4a99c0ed829007b832c79b",
"assets/assets/images/siloconnect2_mockup.webp": "ddf90e6ced6b9f923ba96a9c11204c31",
"assets/assets/images/icon_wonderous.webp": "961d8f0fef07eb7e73ef3dd8ee6af89c",
"assets/assets/images/meet_flutter_02.webp": "c9f5878729068ec671324372086efadc",
"assets/assets/images/banner.webp": "5a5ce1596c696d236af6c1fc390c8ae3",
"assets/assets/images/dash/dash_running.png": "1502bd7518a9f338081c485982882a57",
"assets/assets/images/dash/dash_jumping.png": "79cc6c974eb4340c8b0c4a942918077f",
"assets/assets/images/dash/dash_falling.png": "afea749d618fe0ee38f191775eede965",
"assets/assets/images/dash/dash_still.png": "37401c44652077551aa263afe26b8ace",
"assets/assets/images/dash/dash_spritesheet.png": "b19986a23e098d656d58b78a6f04c7bb",
"assets/assets/images/icon_mijn_mooie_straat.webp": "e923c41ff663b4d0df786151e79371f3",
"assets/assets/images/counter_app_code.webp": "77ef214f3178bbd4779d0cd34efee5f7",
"assets/assets/images/serverpod_bg.webp": "21b22da78728a6710c364168e7b2a978",
"assets/assets/images/logo_flame.webp": "5b69c2d8993dab65c745cae8b330a3d8",
"assets/assets/images/mobile_dev_landscape_2025_bg.webp": "046cb24be47419d907acd6dc47f1c8ff",
"assets/assets/images/gen_ai_mask.webp": "f1e6a18fe027f6913c863e93ff14c93c",
"assets/assets/images/popular_frameworks.webp": "507331df519e3fc034007ee3c368bcab",
"assets/assets/images/lambrecht_tag_reader.webp": "49c47b693d52299ef736821d17a5afaf",
"assets/assets/images/wonderous_link.webp": "639f8d53c55806eb0088453756f7bea0",
"assets/assets/images/icon_event_shuttle.webp": "48e6e3bbf5ea7be1c68c6561688b89fb",
"assets/assets/images/icon_ebay.webp": "94a9fa2420b00fa7aec29036397c59f8",
"assets/assets/images/qr_get_started_flame.webp": "a32ea8329ec7ebdeca7c39994a920d39",
"assets/assets/images/yet_mockup_collage.webp": "29ac2de24705c67ead45140bb56cff3b",
"assets/assets/images/logo_jaspr.webp": "5e05cefb41a3257bb9e4eea17d067b8c",
"assets/assets/images/widget_tree.webp": "e041a744e74175bfab6e39d7a825c60e",
"assets/assets/images/meet_dart.webp": "987ebddb6b677e46e8cd13c778336422",
"assets/assets/images/flutter_add_to_app.webp": "226f49056ead4b179020195198772684",
"assets/assets/images/logo_slack.webp": "d030c7e055947607ebe3b997bbc0aa8d",
"assets/assets/images/yet_result.webp": "db98108df18bbd50fabc69290e7c497c",
"assets/assets/images/icon_open_source.webp": "defaf14b7a9767b096dd5f5466dedfe8",
"assets/assets/images/gen_fill_ai_illustration.webp": "7e5779aad0eff6230aeac43350554706",
"assets/assets/images/yet_collages_background.webp": "113aecd900548680a1e6c3aa3e56c9cd",
"assets/assets/images/gen_ai_image.webp": "c1f8bebf9b1175e122fe14ae892dc0bf",
"assets/assets/images/logo_flutter_belgium.webp": "9ef963d38f6eb499413746bcac7acb0c",
"assets/assets/images/logo_flutter.webp": "5af6f648771e8ef8903e1f5c521ddca5",
"assets/assets/images/mask_in_flutter_code.webp": "263a97ccc052c8174b13356f8ba58959",
"assets/assets/images/method_channels.webp": "ebbd1c9b4c440880458720638ffa54c7",
"assets/assets/images/flutter_community.webp": "727e58e5410f7bf5b63c10dc49c8566c",
"assets/assets/images/qr_flutter_industrial.webp": "ab41609d7e25cec6ed1ecab6d0946583",
"assets/assets/images/mask_capture_in_flutter.webp": "98d9f14c9ab8e6788d86efeb15524e3d",
"assets/assets/images/enemies/flying_enemy.png": "d8e5aec679c548a3288c5142908f14a8",
"assets/assets/images/enemies/obstacles.png": "c762c55339770aa3508b28aae1469902",
"assets/assets/images/camera_package.webp": "d67c1a739890065a2f23dd306508c93f",
"assets/assets/images/trees_in_flutter.webp": "61b786f29229678c6d3d1741755ac177",
"assets/assets/sfx/double_jump1.mp3": "58633df43115de841cf9235fccd64133",
"assets/assets/sfx/jump1.mp3": "247686373bffc27c3962702465614ea8",
"assets/assets/sfx/click3.mp3": "23f7ef1589277fc59d0b297db8d0297f",
"assets/assets/sfx/hit2.mp3": "19e99975f122b67cb5e17bb5e04818da",
"assets/assets/sfx/README.md": "c2318c37838f1811dd8a00d1bd6220a8",
"assets/assets/sfx/score1.mp3": "f51ae86826ee34f92514fb8e4b027edc",
"assets/assets/sfx/click2.mp3": "e7c23ca3c1bd7c9c3285c9e60f27504c",
"assets/assets/sfx/damage1.mp3": "e73bde6e93a3754205a6960f994acf91",
"assets/assets/sfx/hit1.mp3": "52f15e8def2750b4220796d7dd749e18",
"assets/assets/sfx/score2.mp3": "f9494ae1fe1a9b78563b386acca66c2c",
"assets/assets/sfx/click1.mp3": "10dfe538c54ddca1d967034637a37cbb",
"assets/assets/sfx/damage2.mp3": "3ae6d56c2fdff524875df5c956f62012",
"assets/assets/sfx/click4.mp3": "fc48c687051776935ee27782a6ee5648",
"assets/assets/videos/yet_ai_demo.mp4": "22b4da81f48751742b4124f959a3b995",
"assets/assets/videos/007_01.mp4": "53fd3d6c01f4fca1cf8b6cdbfa6e1690",
"assets/assets/videos/lambrecht_infovideo.mp4": "f0d44f495659333b736e5fac7307b0fd",
"assets/assets/videos/008_01.mp4": "49894296881c4ae30e96bed4aee6967c",
"assets/assets/videos/006_01.mp4": "909b8964f0e5e11075ab4fa3b5d20a7d",
"assets/assets/fonts/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"assets/assets/fonts/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"assets/assets/fonts/Nunito-Italic.ttf": "fac5c8ffb51e06094affdbb7fff9000e",
"assets/assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/assets/animations/waiting_animation.json": "e5aae535737528d17c698afe105f6423",
"assets/assets/animations/skills.riv": "ef57c58346dcd084eebbc777ccbd0c53",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
