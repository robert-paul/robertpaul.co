"use strict";var precacheConfig=[["/index.html","e76318a5eacbcbe106abdffe605d801f"],["/static/css/main.1d76eaef.css","a37f1403e75a5c115b3aa4f82e4f322c"],["/static/js/main.4579a500.js","3df8b51179d49acf4a54a22de64d7015"],["/static/media/banner-vid.64d356d2.mp4","64d356d25cd2b30a102aa322ae6cb3ce"],["/static/media/flow.2ccc6726.png","2ccc672649f7282db52166b126ca1d86"],["/static/media/fortune-cookie.e800ec43.jpg","e800ec43bef810a682b866e8ad31ac38"],["/static/media/home.8a2a5402.png","8a2a5402c196c1af946ffa3a5149617d"],["/static/media/intuit-team.4aa69c93.jpg","4aa69c9357224f9624104e221aec370b"],["/static/media/kirsten.c9a01eec.jpg","c9a01eecf8d9aa1c7cb5f36cdf2808a4"],["/static/media/minimize-sm.3945a4b8.mp4","3945a4b8c7585db5c75ac1a367f10785"],["/static/media/pnc-screenshot.c5c2461d.png","c5c2461de2a62c276da9427692260694"],["/static/media/popout-md.82ec358a.mp4","82ec358ae435e67115de2351c6d68160"],["/static/media/problem-sm.501a9ac5.mp4","501a9ac5d08b2a4c235ff0b51545b7b5"],["/static/media/qbo-sm.51db0d37.mp4","51db0d37fde73fc1dc507f443437e45b"],["/static/media/rob-1.8ddcbef5.jpg","8ddcbef52160c6bd706aa74e15fba0c7"],["/static/media/slack-1.f0edce2a.jpg","f0edce2a85041ef24bafba920c1c91d4"],["/static/media/slack-2.a190a859.jpg","a190a8593e5e5623003d05d30bf3e9fd"],["/static/media/slack-3.638793f5.jpg","638793f54ad3c6d94ccc247f8da4b2c8"],["/static/media/solution-lg.872e5169.mp4","872e516918c195a67349683c4fcf9aa4"],["/static/media/trowser.9d1cbc0a.mp4","9d1cbc0a5d9ac30a56bfed18a2151502"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});