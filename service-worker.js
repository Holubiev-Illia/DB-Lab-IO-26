/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "e3c7d53a9773e7ae0e3a08633c6fb5df"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.874f5e71.css",
    "revision": "65297f51f5cab3bf1a2f70191982a0c8"
  },
  {
    "url": "assets/img/Delete2.9251e9f5.png",
    "revision": "9251e9f56afd5ace1ef6af0fbc11c055"
  },
  {
    "url": "assets/img/Get2.3e0dc619.png",
    "revision": "3e0dc619839ab30726580f6fb7ec76f2"
  },
  {
    "url": "assets/img/MySQL.8db3eeeb.png",
    "revision": "8db3eeebdfb320985ce9aec2fee77203"
  },
  {
    "url": "assets/img/Patch1.faee0de9.png",
    "revision": "faee0de94cd765d133f8dda735465c47"
  },
  {
    "url": "assets/img/Patch2.46d0b997.png",
    "revision": "46d0b997b7d82af2e42e7669c4b43095"
  },
  {
    "url": "assets/img/Post1.d148825e.png",
    "revision": "d148825e019de3715af55a8cb0296e19"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.38c60067.js",
    "revision": "395a0a8f07c47a22b6a690dfbea250a8"
  },
  {
    "url": "assets/js/11.489fbe1b.js",
    "revision": "3ae989c7921de4033050590ae52eaccf"
  },
  {
    "url": "assets/js/12.78c39665.js",
    "revision": "79e25df2e842f05a09834ba7eb4c6a9c"
  },
  {
    "url": "assets/js/13.90aceb5a.js",
    "revision": "464f5de2cae98afd96942079adec8fbe"
  },
  {
    "url": "assets/js/14.c77a2fa0.js",
    "revision": "88449c133cb4257cbf7c5d6d1da89fe9"
  },
  {
    "url": "assets/js/15.cb8ff6d3.js",
    "revision": "1b8869ed39373fa183c8762c28350b19"
  },
  {
    "url": "assets/js/16.4e6ff3b7.js",
    "revision": "29314a5ddc9764af5ce69985b66703f1"
  },
  {
    "url": "assets/js/17.a49ed31c.js",
    "revision": "a59b8af5c453e65470829fb913997300"
  },
  {
    "url": "assets/js/18.ff2f1e37.js",
    "revision": "bb40adb68d4faf3babd1a1b5d0f252d1"
  },
  {
    "url": "assets/js/19.8c52b6ff.js",
    "revision": "cc3be76d2d50f9ed31a1fc4b8da62bf8"
  },
  {
    "url": "assets/js/2.9b6bd436.js",
    "revision": "542c860814a3007ca4beb71a8896bc42"
  },
  {
    "url": "assets/js/20.7637bd63.js",
    "revision": "d156b14af6273a5793c1cdd2469a0e04"
  },
  {
    "url": "assets/js/21.035200fc.js",
    "revision": "4e5a3151ba4750571a4f4ff31b4414be"
  },
  {
    "url": "assets/js/22.eeb8df97.js",
    "revision": "e1f74ca4c9fc2e2577f02c4b3556f4b8"
  },
  {
    "url": "assets/js/23.89389cae.js",
    "revision": "95e99699dd91ab702c867bc6aeed111c"
  },
  {
    "url": "assets/js/24.a080aacb.js",
    "revision": "ac9f3c67c04a6299f924d6146398d824"
  },
  {
    "url": "assets/js/26.ddb41728.js",
    "revision": "8c81b1cd43d727680472e430d9f82d0a"
  },
  {
    "url": "assets/js/3.039e4288.js",
    "revision": "7e1cd13d08d0e410a8de5a64a74d214a"
  },
  {
    "url": "assets/js/4.219bd502.js",
    "revision": "1cbb3299f117797002853ea9848e5db6"
  },
  {
    "url": "assets/js/5.d0c49000.js",
    "revision": "d7e8746984f00660b0e17a1d4dcfa499"
  },
  {
    "url": "assets/js/6.40aabc4e.js",
    "revision": "7bb241ac125317b33fb32367f8d8c065"
  },
  {
    "url": "assets/js/7.a7f18f7d.js",
    "revision": "93750c5294ab475e8a4c7ae614b1f93f"
  },
  {
    "url": "assets/js/8.79576de1.js",
    "revision": "b112806412e8ce7e52ac7d60d5f66571"
  },
  {
    "url": "assets/js/9.23f667ad.js",
    "revision": "f86e2e023afff7fc0d19d80acb82b269"
  },
  {
    "url": "assets/js/app.53b7354b.js",
    "revision": "fb5cea52c1dfd2bf24123c352e2a2d40"
  },
  {
    "url": "conclusion/index.html",
    "revision": "209e31735be8694e5cb4f6f9c7c6672a"
  },
  {
    "url": "design/index.html",
    "revision": "a6eb0085f0ca65d90b2e3e5d0f5c60fc"
  },
  {
    "url": "index.html",
    "revision": "0f8a2207fd0c8a14dcf6797dd170fb12"
  },
  {
    "url": "intro/index.html",
    "revision": "8d7f680aa7560eeb8815c9ad6637c435"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "a70a50b88e739a15b4774bb4c37c846f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "aa90af97bee9e132ab021213f51b890d"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "61d0bdd7bf1c96b2a32f0203ea120f76"
  },
  {
    "url": "software/index.html",
    "revision": "9bfb2490cc8a9bbf8d8a8c50dd088979"
  },
  {
    "url": "test/index.html",
    "revision": "98a48fc2beed0423d4daf8b4b111bd71"
  },
  {
    "url": "use cases/index.html",
    "revision": "b28a7585795327578cdeb03d0c57f16c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
