importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/build/app.global.js",
    "revision": "874fca11d857bb2de14f9b0d097c39c6"
  },
  {
    "url": "assets/build/app.js",
    "revision": "f2727e764448cc0170fd9529f43dedb3"
  },
  {
    "url": "assets/build/app.registry.json",
    "revision": "2b0439a173bbd8b2bde411d7cfc9450f"
  },
  {
    "url": "assets/build/app/9eobjqjs.js",
    "revision": "53eb8665704d5724198dd98fa34b4884"
  },
  {
    "url": "assets/build/app/app.gzi246wy.js",
    "revision": "7fd622316297ba4206b5daf40b4cb1a5"
  },
  {
    "url": "assets/build/app/app.khkjmyiv.pf.js",
    "revision": "1c4350c33f164f7527324c193244913b"
  },
  {
    "url": "assets/build/app/if0opbrp.js",
    "revision": "921a0f2053ba0a1728845286a22d9e61"
  },
  {
    "url": "assets/build/app/imd9xidt.js",
    "revision": "2286d47e08db8815a3d1046e6f67975d"
  },
  {
    "url": "assets/build/app/wzflf8ma.css",
    "revision": "5c7aa5b95da3e8f5aaf0afe29e300895"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "index.html",
    "revision": "e71f09c9e86a362f3a33b25dfcbe965d"
  },
  {
    "url": "manifest.json",
    "revision": "2a184e97fcded4850709730575c65e19"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
