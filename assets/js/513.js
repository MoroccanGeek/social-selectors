/*! For license information please see 513.js.LICENSE.txt */
(self.webpackChunksocial_selectors=self.webpackChunksocial_selectors||[]).push([[513],{513:function(e,t,n){"use strict";n.r(t);var r,i=n(973),o=n(767),s=n(940),a=n(293),u=n(270),c="0.4.19",l=1e4,f="w:0.4.19",p="FIS_v2",d=36e5,h=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),v=new a.LL("installations","Installations",h);function g(e){return e instanceof a.ZR&&e.code.includes("request-failed")}function b(e){return"https://firebaseinstallations.googleapis.com/v1/projects/"+e.projectId+"/installations"}function y(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function w(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return[4,t.json()];case 1:return n=i.sent(),r=n.error,[2,v.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function m(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function k(e,t){var n=t.refreshToken,r=m(e);return r.append("Authorization",function(e){return"FIS_v2 "+e}(n)),r}function S(e){return(0,s.mG)(this,void 0,void 0,(function(){var t;return(0,s.Jh)(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return(t=n.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function I(e,t){var n=t.fid;return(0,s.mG)(this,void 0,void 0,(function(){var t,r,i,o,a,u;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return t=b(e),r=m(e),i={fid:n,authVersion:p,appId:e.appId,sdkVersion:f},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,S((function(){return fetch(t,o)}))];case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3];case 2:return u=s.sent(),[2,{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:y(u.authToken)}];case 3:return[4,w("Create Installation",a)];case 4:throw s.sent()}}))}))}function C(e){return new Promise((function(t){setTimeout(t,e)}))}var T=/^[cdef][\w-]{21}$/;function _(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return(t=e,btoa(String.fromCharCode.apply(String,(0,s.fl)(t))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}(e);return T.test(t)?t:""}catch(e){return""}}function D(e){return e.appName+"!"+e.appId}var P=new Map;function K(e,t){var n=D(e);M(n,t),function(e,t){var n=E();n&&n.postMessage({key:e,fid:t});O()}(n,t)}function M(e,t){var n,r,i=P.get(e);if(i)try{for(var o=(0,s.XA)(i),a=o.next();!a.done;a=o.next()){(0,a.value)(t)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var j=null;function E(){return!j&&"BroadcastChannel"in self&&((j=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){M(e.data.key,e.data.fid)}),j}function O(){0===P.size&&j&&(j.close(),j=null)}var x,G,J="firebase-installations-store",N=null;function A(){return N||(N=(0,u.openDb)("firebase-installations-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(J)}}))),N}function R(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i,o,a;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return n=D(e),[4,A()];case 1:return r=s.sent(),i=r.transaction(J,"readwrite"),[4,(o=i.objectStore(J)).get(n)];case 2:return a=s.sent(),[4,o.put(t,n)];case 3:return s.sent(),[4,i.complete];case 4:return s.sent(),a&&a.fid===t.fid||K(e,t.fid),[2,t]}}))}))}function q(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return t=D(e),[4,A()];case 1:return n=i.sent(),[4,(r=n.transaction(J,"readwrite")).objectStore(J).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function B(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i,o,a,u;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return n=D(e),[4,A()];case 1:return r=s.sent(),i=r.transaction(J,"readwrite"),[4,(o=i.objectStore(J)).get(n)];case 2:return a=s.sent(),void 0!==(u=t(a))?[3,4]:[4,o.delete(n)];case 3:return s.sent(),[3,6];case 4:return[4,o.put(u,n)];case 5:s.sent(),s.label=6;case 6:return[4,i.complete];case 7:return s.sent(),!u||a&&a.fid===u.fid||K(e,u.fid),[2,u]}}))}))}function L(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return[4,B(e,(function(n){var r=function(e){return U(e||{fid:_(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(v.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:function(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,I(e,t)];case 1:return n=i.sent(),[2,R(e,n)];case 2:return g(r=i.sent())&&409===r.customData.serverCode?[4,q(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,R(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}(e,n)}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:V(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}))];case 1:return""!==(n=i.sent()).fid?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function V(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r,i;return(0,s.Jh)(this,(function(o){switch(o.label){case 0:return[4,F(e)];case 1:t=o.sent(),o.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,C(100)];case 3:return o.sent(),[4,F(e)];case 4:return t=o.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,L(e)];case 6:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}}))}))}function F(e){return B(e,(function(e){if(!e)throw v.create("installation-not-found");return U(e)}))}function U(e){return 1===(t=e).registrationStatus&&t.registrationTime+l<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function W(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return(0,s.mG)(this,void 0,void 0,(function(){var e,i,o,a,u,c,l;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return e=function(e,t){var n=t.fid;return b(e)+"/"+n+"/authTokens:generate"}(n,t),i=k(n,t),(o=r.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),a={installation:{sdkVersion:f}},u={method:"POST",headers:i,body:JSON.stringify(a)},[4,S((function(){return fetch(e,u)}))];case 1:return(c=s.sent()).ok?[4,c.json()]:[3,3];case 2:return l=s.sent(),[2,y(l)];case 3:return[4,w("Generate Auth Token",c)];case 4:throw s.sent()}}))}))}function H(e,t){return void 0===t&&(t=!1),(0,s.mG)(this,void 0,void 0,(function(){var n,r,i;return(0,s.Jh)(this,(function(o){switch(o.label){case 0:return[4,B(e.appConfig,(function(r){if(!X(r))throw v.create("not-registered");var i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+d}(e)}(i))return r;if(1===i.requestStatus)return n=function(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return[4,$(e.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,C(100)];case 3:return i.sent(),[4,$(e.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,H(e,t)]:[2,r]}}))}))}(e,t),r;if(!navigator.onLine)throw v.create("app-offline");var o=function(e){var t={requestStatus:1,requestTime:Date.now()};return(0,s.pi)((0,s.pi)({},e),{authToken:t})}(r);return n=function(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i;return(0,s.Jh)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,W(e,t)];case 1:return n=o.sent(),i=(0,s.pi)((0,s.pi)({},t),{authToken:n}),[4,R(e.appConfig,i)];case 2:return o.sent(),[2,n];case 3:return!g(r=o.sent())||401!==r.customData.serverCode&&404!==r.customData.serverCode?[3,5]:[4,q(e.appConfig)];case 4:return o.sent(),[3,7];case 5:return i=(0,s.pi)((0,s.pi)({},t),{authToken:{requestStatus:0}}),[4,R(e.appConfig,i)];case 6:o.sent(),o.label=7;case 7:throw r;case 8:return[2]}}))}))}(e,o),o}))];case 1:return r=o.sent(),n?[4,n]:[3,3];case 2:return i=o.sent(),[3,4];case 3:i=r.authToken,o.label=4;case 4:return[2,i]}}))}))}function $(e){return B(e,(function(e){if(!X(e))throw v.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+l<Date.now()?(0,s.pi)((0,s.pi)({},e),{authToken:{requestStatus:0}}):e}))}function X(e){return void 0!==e&&2===e.registrationStatus}function z(e){return(0,s.mG)(this,void 0,void 0,(function(){var t;return(0,s.Jh)(this,(function(n){switch(n.label){case 0:return[4,L(e)];case 1:return(t=n.sent().registrationPromise)?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}function Z(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i,o;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return n=function(e,t){var n=t.fid;return b(e)+"/"+n}(e,t),r=k(e,t),i={method:"DELETE",headers:r},[4,S((function(){return fetch(n,i)}))];case 1:return(o=s.sent()).ok?[3,3]:[4,w("Delete Installation",o)];case 2:throw s.sent();case 3:return[2]}}))}))}function Q(e,t){var n=e.appConfig;return function(e,t){E();var n=D(e),r=P.get(n);r||(r=new Set,P.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=D(e),r=P.get(n);r&&(r.delete(t),0===r.size&&P.delete(n),O())}(n,t)}}function Y(e){return v.create("missing-app-config-values",{valueName:e})}(x=i.Z).INTERNAL.registerComponent(new o.wA("installations",(function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw Y("App Configuration");if(!e.name)throw Y("App Name");try{for(var r=(0,s.XA)(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw Y(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){return function(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return[4,L(e.appConfig)];case 1:return t=i.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):H(e).catch(console.error),[2,n.fid]}}))}))}(n)},getToken:function(e){return function(e,t){return void 0===t&&(t=!1),(0,s.mG)(this,void 0,void 0,(function(){return(0,s.Jh)(this,(function(n){switch(n.label){case 0:return[4,z(e.appConfig)];case 1:return n.sent(),[4,H(e,t)];case 2:return[2,n.sent().token]}}))}))}(n,e)},delete:function(){return function(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n;return(0,s.Jh)(this,(function(r){switch(r.label){case 0:return[4,B(t=e.appConfig,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw v.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw v.create("app-offline");case 3:return[4,Z(t,n)];case 4:return r.sent(),[4,q(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(n)},onIdChange:function(e){return Q(n,e)}}}),"PUBLIC")),x.registerVersion("@firebase/installations",c);var ee,te=((G={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',G["only-available-in-window"]="This method is available in a Window context.",G["only-available-in-sw"]="This method is available in a service worker context.",G["permission-default"]="The notification permission was not granted and dismissed instead.",G["permission-blocked"]="The notification permission was not granted and blocked instead.",G["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",G["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",G["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",G["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",G["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",G["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",G["token-update-no-token"]="FCM returned no token when updating the user to push.",G["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",G["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",G["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",G["invalid-vapid-key"]="The public VAPID key must be a string.",G["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",G),ne=new a.LL("messaging","Messaging",te),re="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ie="google.c.a.c_id";function oe(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,(0,s.fl)(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function se(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}!function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(ee||(ee={}));var ae="fcm_token_details_db",ue="fcm_token_object_Store";function ce(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r=this;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=i.sent(),!t.map((function(e){return e.name})).includes(ae))return[2,null];i.label=2;case 2:return n=null,[4,(0,u.openDb)(ae,5,(function(t){return(0,s.mG)(r,void 0,void 0,(function(){var r,i,o,a;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains(ue)?[4,(r=t.transaction.objectStore(ue)).index("fcmSenderId").get(e)]:[2];case 1:return i=s.sent(),[4,r.clear()];case 2:if(s.sent(),!i)return[2];if(2===t.oldVersion){if(!(o=i).auth||!o.p256dh||!o.endpoint)return[2];n={token:o.fcmToken,createTime:null!==(a=o.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"==typeof o.vapidKey?o.vapidKey:oe(o.vapidKey)}}}else(3===t.oldVersion||4===t.oldVersion)&&(n={token:(o=i).fcmToken,createTime:o.createTime,subscriptionOptions:{auth:oe(o.auth),p256dh:oe(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:oe(o.vapidKey)}});return[2]}}))}))}))];case 3:return i.sent().close(),[4,(0,u.deleteDb)(ae)];case 4:return i.sent(),[4,(0,u.deleteDb)("fcm_vapid_details_db")];case 5:return i.sent(),[4,(0,u.deleteDb)("undefined")];case 6:return i.sent(),[2,le(n)?n:null]}}))}))}function le(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}var fe="firebase-messaging-store",pe=null;function de(){return pe||(pe=(0,u.openDb)("firebase-messaging-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(fe)}}))),pe}function he(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return t=be(e),[4,de()];case 1:return[4,i.sent().transaction(fe).objectStore(fe).get(t)];case 2:return(n=i.sent())?[2,n]:[3,3];case 3:return[4,ce(e.appConfig.senderId)];case 4:return(r=i.sent())?[4,ve(e,r)]:[3,6];case 5:return i.sent(),[2,r];case 6:return[2]}}))}))}function ve(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i;return(0,s.Jh)(this,(function(o){switch(o.label){case 0:return n=be(e),[4,de()];case 1:return r=o.sent(),[4,(i=r.transaction(fe,"readwrite")).objectStore(fe).put(t,n)];case 2:return o.sent(),[4,i.complete];case 3:return o.sent(),[2,t]}}))}))}function ge(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return t=be(e),[4,de()];case 1:return n=i.sent(),[4,(r=n.transaction(fe,"readwrite")).objectStore(fe).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function be(e){return e.appConfig.appId}function ye(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i,o,a,u;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return[4,Se(e)];case 1:n=s.sent(),r=Ie(t),i={method:"POST",headers:n,body:JSON.stringify(r)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(ke(e.appConfig),i)];case 3:return[4,s.sent().json()];case 4:return o=s.sent(),[3,6];case 5:throw a=s.sent(),ne.create("token-subscribe-failed",{errorInfo:a});case 6:if(o.error)throw u=o.error.message,ne.create("token-subscribe-failed",{errorInfo:u});if(!o.token)throw ne.create("token-subscribe-no-token");return[2,o.token]}}))}))}function we(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i,o,a,u;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return[4,Se(e)];case 1:n=s.sent(),r=Ie(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(ke(e.appConfig)+"/"+t.token,i)];case 3:return[4,s.sent().json()];case 4:return o=s.sent(),[3,6];case 5:throw a=s.sent(),ne.create("token-update-failed",{errorInfo:a});case 6:if(o.error)throw u=o.error.message,ne.create("token-update-failed",{errorInfo:u});if(!o.token)throw ne.create("token-update-no-token");return[2,o.token]}}))}))}function me(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i,o,a;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return[4,Se(e)];case 1:n=s.sent(),r={method:"DELETE",headers:n},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(ke(e.appConfig)+"/"+t,r)];case 3:return[4,s.sent().json()];case 4:if((i=s.sent()).error)throw o=i.error.message,ne.create("token-unsubscribe-failed",{errorInfo:o});return[3,6];case 5:throw a=s.sent(),ne.create("token-unsubscribe-failed",{errorInfo:a});case 6:return[2]}}))}))}function ke(e){return"https://fcmregistrations.googleapis.com/v1/projects/"+e.projectId+"/registrations"}function Se(e){var t=e.appConfig,n=e.installations;return(0,s.mG)(this,void 0,void 0,(function(){var e;return(0,s.Jh)(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function Ie(e){var t=e.p256dh,n=e.auth,r=e.endpoint,i=e.vapidKey,o={web:{endpoint:r,auth:n,p256dh:t}};return i!==re&&(o.web.applicationPubKey=i),o}function Ce(e,t,n){return(0,s.mG)(this,void 0,void 0,(function(){var r,i,o,a;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:if("granted"!==Notification.permission)throw ne.create("permission-blocked");return[4,Pe(t,n)];case 1:return r=s.sent(),[4,he(e)];case 2:return i=s.sent(),o={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:oe(r.getKey("auth")),p256dh:oe(r.getKey("p256dh"))},i?[3,3]:[2,De(e,o)];case 3:if(u=i.subscriptionOptions,l=(c=o).vapidKey===u.vapidKey,f=c.endpoint===u.endpoint,p=c.auth===u.auth,d=c.p256dh===u.p256dh,l&&f&&p&&d)return[3,8];s.label=4;case 4:return s.trys.push([4,6,,7]),[4,me(e,i.token)];case 5:return s.sent(),[3,7];case 6:return a=s.sent(),console.warn(a),[3,7];case 7:return[2,De(e,o)];case 8:return Date.now()>=i.createTime+6048e5?[2,_e({token:i.token,createTime:Date.now(),subscriptionOptions:o},e,t)]:[2,i.token];case 9:return[2]}var u,c,l,f,p,d}))}))}function Te(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return[4,he(e)];case 1:return(n=i.sent())?[4,me(e,n.token)]:[3,4];case 2:return i.sent(),[4,ge(e)];case 3:i.sent(),i.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return(r=i.sent())?[2,r.unsubscribe()]:[2,!0]}}))}))}function _e(e,t,n){return(0,s.mG)(this,void 0,void 0,(function(){var r,i,o;return(0,s.Jh)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,we(t,e)];case 1:return r=a.sent(),i=(0,s.pi)((0,s.pi)({},e),{token:r,createTime:Date.now()}),[4,ve(t,i)];case 2:return a.sent(),[2,r];case 3:return o=a.sent(),[4,Te(t,n)];case 4:throw a.sent(),o;case 5:return[2]}}))}))}function De(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return[4,ye(e,t)];case 1:return n=i.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,ve(e,r)];case 2:return i.sent(),[2,r.token]}}))}))}function Pe(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n;return(0,s.Jh)(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:se(t)})]}}))}))}function Ke(e){return"object"==typeof e&&!!e&&ie in e}function Me(e){return new Promise((function(t){setTimeout(t,e)}))}var je=function(){function e(e){var t=this;this.firebaseDependencies=e,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(this.isOnBackgroundMessageUsed=!1,!e||"function"!=typeof e)throw ne.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.onBackgroundMessage=function(e){var t=this;return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=e,function(){t.bgMessageHandler=null}},e.prototype.getToken=function(){var e,t;return(0,s.mG)(this,void 0,void 0,(function(){var n;return(0,s.Jh)(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,he(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null==n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:re,r.label=2;case 2:return[2,Ce(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return Te(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw ne.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw ne.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw ne.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw ne.create("only-available-in-window")},e.prototype.onMessage=function(){throw ne.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw ne.create("only-available-in-window")},e.prototype.onPush=function(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r,i;return(0,s.Jh)(this,(function(o){switch(o.label){case 0:return(t=function(e){var t=e.data;if(!t)return null;try{return t.json()}catch(e){return null}}(e))?[4,Ge()]:(console.debug("FirebaseMessaging: failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=o.sent())?[2,xe(n,t)]:(r=!1,t.notification?[4,Je(Ee(t))]:[3,3]);case 2:o.sent(),r=!0,o.label=3;case 3:return!0===r&&!1===this.isOnBackgroundMessageUsed?[2]:(this.bgMessageHandler&&(i=function(e){var t={from:e.from,collapseKey:e.collapse_key};return function(e,t){if(t.notification){e.notification={};var n=t.notification.title;n&&(e.notification.title=n);var r=t.notification.body;r&&(e.notification.body=r);var i=t.notification.image;i&&(e.notification.image=i)}}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){if(t.fcmOptions){e.fcmOptions={};var n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);var r=t.fcmOptions.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}}(t,e),t}(t),"function"==typeof this.bgMessageHandler?this.bgMessageHandler(i):this.bgMessageHandler.next(i)),[4,Me(1e3)]);case 4:return o.sent(),[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return(0,s.mG)(this,void 0,void 0,(function(){var r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return e.newSubscription?[3,2]:[4,Te(this.firebaseDependencies,self.registration)];case 1:return i.sent(),[2];case 2:return[4,he(this.firebaseDependencies)];case 3:return r=i.sent(),[4,Te(this.firebaseDependencies,self.registration)];case 4:return i.sent(),[4,Ce(this.firebaseDependencies,self.registration,null!==(n=null===(t=null==r?void 0:r.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:re)];case 5:return i.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return(0,s.mG)(this,void 0,void 0,(function(){var r,i,o,a,u;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return(r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(i=function(e){var t,n,r,i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;if(i)return i;return Ke(e.data)?self.location.origin:null}(r))?(o=new URL(i,self.location.href),a=new URL(self.location.origin),o.host!==a.host?[2]:[4,Oe(o)]):[2]):[2];case 1:return(u=s.sent())?[3,4]:[4,self.clients.openWindow(i)];case 2:return u=s.sent(),[4,Me(3e3)];case 3:return s.sent(),[3,6];case 4:return[4,u.focus()];case 5:u=s.sent(),s.label=6;case 6:return u?(r.messageType=ee.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,[2,u.postMessage(r)]):[2]}}))}))},e}();function Ee(e){var t,n=(0,s.pi)({},e.notification);return n.data=((t={}).FCM_MSG=e,t),n}function Oe(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r,i,o,a,u;return(0,s.Jh)(this,(function(c){switch(c.label){case 0:return[4,Ge()];case 1:t=c.sent();try{for(n=(0,s.XA)(t),r=n.next();!r.done;r=n.next())if(i=r.value,o=new URL(i.url,self.location.href),e.host===o.host)return[2,i]}catch(e){a={error:e}}finally{try{r&&!r.done&&(u=n.return)&&u.call(n)}finally{if(a)throw a.error}}return[2,null]}}))}))}function xe(e,t){var n,r;t.isFirebaseMessaging=!0,t.messageType=ee.PUSH_RECEIVED;try{for(var i=(0,s.XA)(e),o=i.next();!o.done;o=i.next()){o.value.postMessage(t)}}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}function Ge(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Je(e){var t,n=e.actions,r=Notification.maxActions;return n&&r&&n.length>r&&console.warn("This browser only supports "+r+" actions. The remaining actions will not be displayed."),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}var Ne=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n;return(0,s.Jh)(this,(function(r){switch(r.label){case 0:return(t=e.data).isFirebaseMessaging?(this.onMessageCallback&&t.messageType===ee.PUSH_RECEIVED&&("function"==typeof this.onMessageCallback?this.onMessageCallback(function(e){return delete e.messageType,delete e.isFirebaseMessaging,e}(Object.assign({},t))):this.onMessageCallback.next(Object.assign({},t))),Ke(n=t.data)&&"1"===n["google.c.a.e"]?[4,this.logEvent(t.messageType,n)]:[3,2]):[2];case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(e){return(0,s.mG)(this,void 0,void 0,(function(){return(0,s.Jh)(this,(function(t){switch(t.label){case 0:return"default"!==Notification.permission?[3,2]:[4,Notification.requestPermission()];case 1:t.sent(),t.label=2;case 2:if("granted"!==Notification.permission)throw ne.create("permission-blocked");return[4,this.updateVapidKey(null==e?void 0:e.vapidKey)];case 3:return t.sent(),[4,this.updateSwReg(null==e?void 0:e.serviceWorkerRegistration)];case 4:return t.sent(),[2,Ce(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}}))}))},e.prototype.updateVapidKey=function(e){return(0,s.mG)(this,void 0,void 0,(function(){return(0,s.Jh)(this,(function(t){return e?this.vapidKey=e:this.vapidKey||(this.vapidKey=re),[2]}))}))},e.prototype.updateSwReg=function(e){return(0,s.mG)(this,void 0,void 0,(function(){return(0,s.Jh)(this,(function(t){switch(t.label){case 0:return e||this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:t.sent(),t.label=2;case 2:if(!e&&this.swRegistration)return[2];if(!(e instanceof ServiceWorkerRegistration))throw ne.create("invalid-sw-registration");return this.swRegistration=e,[2]}}))}))},e.prototype.registerDefaultSw=function(){return(0,s.mG)(this,void 0,void 0,(function(){var e,t;return(0,s.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 1:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,3];case 2:throw t=n.sent(),ne.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 3:return[2]}}))}))},e.prototype.deleteToken=function(){return(0,s.mG)(this,void 0,void 0,(function(){return(0,s.Jh)(this,(function(e){switch(e.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:e.sent(),e.label=2;case 2:return[2,Te(this.firebaseDependencies,this.swRegistration)]}}))}))},e.prototype.requestPermission=function(){return(0,s.mG)(this,void 0,void 0,(function(){var e;return(0,s.Jh)(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?ne.create("permission-blocked"):ne.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw ne.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw ne.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw ne.create("invalid-sw-registration");if(this.swRegistration)throw ne.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback=e,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw ne.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw ne.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n;return(0,s.Jh)(this,(function(r){switch(r.label){case 0:return n=function(e){switch(e){case ee.NOTIFICATION_CLICKED:return"notification_open";case ee.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return r.sent().logEvent(n,{message_id:t["google.c.a.c_id"],message_name:t["google.c.a.c_l"],message_time:t["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();function Ae(e){return ne.create("missing-app-config-values",{valueName:e})}var Re={isSupported:qe};function qe(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}i.Z.INTERNAL.registerComponent(new o.wA("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n;if(!e||!e.options)throw Ae("App Configuration Object");if(!e.name)throw Ae("App Name");var r=e.options;try{for(var i=(0,s.XA)(["projectId","apiKey","appId","messagingSenderId"]),o=i.next();!o.done;o=i.next()){var a=o.value;if(!r[a])throw Ae(a)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!qe())throw ne.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new je(n):new Ne(n)}),"PUBLIC").setServiceProps(Re))},270:function(e,t){!function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,o=new Promise((function(o,s){n(i=e[t].apply(e,r)).then(o,s)}));return o.request=i,o}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new l(e,i.request)}))}function o(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function s(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function a(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function u(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function c(e){this._index=e}function l(e,t){this._cursor=e,this._request=t}function f(e){this._store=e}function p(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function d(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new p(n)}function h(e){this._db=e}function v(e,t,n){var i=r(indexedDB,"open",[e,t]),o=i.request;return o&&(o.onupgradeneeded=function(e){n&&n(new d(o.result,e.oldVersion,o.transaction))}),i.then((function(e){return new h(e)}))}function g(e){return r(indexedDB,"deleteDatabase",[e])}o(c,"_index",["name","keyPath","multiEntry","unique"]),s(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),u(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(l,"_cursor",["direction","key","primaryKey","value"]),s(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(l.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new l(e,t._request)}))}))})})),f.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},f.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},o(f,"_store",["name","keyPath","indexNames","autoIncrement"]),s(f,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),u(f,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(f,"_store",IDBObjectStore,["deleteIndex"]),p.prototype.objectStore=function(){return new f(this._tx.objectStore.apply(this._tx,arguments))},o(p,"_tx",["objectStoreNames","mode"]),a(p,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new f(this._db.createObjectStore.apply(this._db,arguments))},o(d,"_db",["name","version","objectStoreNames"]),a(d,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){return new p(this._db.transaction.apply(this._db,arguments))},o(h,"_db",["name","version","objectStoreNames"]),a(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[f,c].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,o=i[e].apply(i,n.slice(0,-1));o.onsuccess=function(){r(o.result)}})}))})),[c,f].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=v,e.deleteDb=g,Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);