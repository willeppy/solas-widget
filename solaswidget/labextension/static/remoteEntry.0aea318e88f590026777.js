var _JUPYTERLAB;(()=>{"use strict";var e,r,t,a,n,o,d,i,l,f,c,u,s,h,p,b,v,g,m,y,w={6837:(e,r,t)=>{var a={"./index":()=>Promise.all([t.e(839),t.e(430),t.e(271),t.e(456),t.e(367),t.e(568)]).then((()=>()=>t(1568))),"./extension":()=>Promise.all([t.e(839),t.e(430),t.e(271),t.e(456),t.e(367),t.e(480)]).then((()=>()=>t(4480))),"./style":()=>t.e(776).then((()=>()=>t(3776)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a=t.S.default,n="default";if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>n,init:()=>o})}},P={};function S(e){var r=P[e];if(void 0!==r)return r.exports;var t=P[e]={id:e,loaded:!1,exports:{}};return w[e].call(t.exports,t,t.exports,S),t.loaded=!0,t.exports}S.m=w,S.c=P,S.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return S.d(r,{a:r}),r},S.d=(e,r)=>{for(var t in r)S.o(r,t)&&!S.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},S.f={},S.e=e=>Promise.all(Object.keys(S.f).reduce(((r,t)=>(S.f[t](e,r),r)),[])),S.u=e=>e+"."+{8:"2226a4715d8349780581",138:"875c988b141b463347a2",271:"2f48075994f49954a2c6",367:"83e4d8e5c8012d1b1f0e",430:"1ac99c3ff59bee29f6fc",456:"6314d89cfed359d4bbef",460:"7c3c83f94c112daddf24",480:"7d24a76a8fd9d463031b",500:"915cc014569667c58489",501:"8a4fd550b24dea212cbb",568:"02c7a14732f6435512be",571:"533355682050f3106c32",713:"87b01bbf923a354c9364",755:"0e5b33cc0b3e51a40e88",776:"31191654d2db7eba4e7e",823:"8cb45879b82c4eeb4f91",839:"be71e4e30c90ccdeacb7",866:"2493722bc2e924beccef",921:"80cdee21b8dcebfafad4",989:"79bec672eac148b96bb0"}[e]+".js?v="+{8:"2226a4715d8349780581",138:"875c988b141b463347a2",271:"2f48075994f49954a2c6",367:"83e4d8e5c8012d1b1f0e",430:"1ac99c3ff59bee29f6fc",456:"6314d89cfed359d4bbef",460:"7c3c83f94c112daddf24",480:"7d24a76a8fd9d463031b",500:"915cc014569667c58489",501:"8a4fd550b24dea212cbb",568:"02c7a14732f6435512be",571:"533355682050f3106c32",713:"87b01bbf923a354c9364",755:"0e5b33cc0b3e51a40e88",776:"31191654d2db7eba4e7e",823:"8cb45879b82c4eeb4f91",839:"be71e4e30c90ccdeacb7",866:"2493722bc2e924beccef",921:"80cdee21b8dcebfafad4",989:"79bec672eac148b96bb0"}[e],S.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),S.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="solaswidget:",S.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var d,i;if(void 0!==n)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var c=l[f];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+n){d=c;break}}d||(i=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,S.nc&&d.setAttribute("nonce",S.nc),d.setAttribute("data-webpack",r+n),d.src=t),e[t]=[a];var u=(r,a)=>{d.onerror=d.onload=null,clearTimeout(s);var n=e[t];if(delete e[t],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((e=>e(a))),r)return r(a)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),i&&document.head.appendChild(d)}},S.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{S.S={};var e={},r={};S.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];S.o(S.S,t)||(S.S[t]={});var o=S.S[t],d="solaswidget",i=(e,r,t,a)=>{var n=o[e]=o[e]||{},i=n[r];(!i||!i.loaded&&(!a!=!i.eager?a:d>i.from))&&(n[r]={get:t,from:d,eager:!!a})},l=[];return"default"===t&&(i("@jupyter-widgets/base","4.0.0",(()=>Promise.all([S.e(713),S.e(460)]).then((()=>()=>S(2713))))),i("jquery","3.6.0",(()=>S.e(755).then((()=>()=>S(9755))))),i("react-bootstrap","1.6.4",(()=>Promise.all([S.e(839),S.e(921),S.e(271),S.e(456)]).then((()=>()=>S(6729))))),i("react-vega","7.1.1",(()=>Promise.all([S.e(271),S.e(571),S.e(866)]).then((()=>()=>S(3866))))),i("solaswidget","0.1.5",(()=>Promise.all([S.e(839),S.e(430),S.e(271),S.e(456),S.e(367),S.e(568)]).then((()=>()=>S(1568))))),i("vega-embed","6.19.1",(()=>Promise.all([S.e(8),S.e(138)]).then((()=>()=>S(4008))))),i("vega-lite","4.17.0",(()=>S.e(500).then((()=>()=>S(5500))))),i("vega","5.21.0",(()=>Promise.all([S.e(501),S.e(823)]).then((()=>()=>S(501)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;S.g.importScripts&&(e=S.g.location+"");var r=S.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),S.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var d=r[a],i=(typeof d)[0];if(o!=i)return"o"==o&&"n"==i||"s"==i||"u"==o;if("o"!=o&&"u"!=o&&n!=d)return n<d;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(i=e[o]))[0]?"-":(a>0?".":"")+(a=2,i);return t}var d=[];for(o=1;o<e.length;o++){var i=e[o];d.push(0===i?"not("+l()+")":1===i?"("+l()+" || "+l()+")":2===i?d.pop()+" "+d.pop():n(i))}return l();function l(){return d.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var d=0,i=1,l=!0;;i++,d++){var f,c,u=i<e.length?(typeof e[i])[0]:"";if(d>=r.length||"o"==(c=(typeof(f=r[d]))[0]))return!l||("u"==u?i>a&&!n:""==u!=n);if("u"==c){if(!l||"u"!=u)return!1}else if(l)if(u==c)if(i<=a){if(f!=e[i])return!1}else{if(n?f>e[i]:f<e[i])return!1;f!=e[i]&&(l=!1)}else if("s"!=u&&"n"!=u){if(n||i<=a)return!1;l=!1,i--}else{if(i<=a||c<u!=n)return!1;l=!1}else"s"!=u&&"n"!=u&&(l=!1,i--)}}var s=[],h=s.pop.bind(s);for(d=1;d<e.length;d++){var p=e[d];s.push(1==p?h()|h():2==p?h()&h():p?o(p,r):!h())}return!!h()},d=(e,r)=>{var t=S.S[e];if(!t||!S.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},i=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||a(e,r)?r:e),0))&&t[r]},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},f=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+n(t)+")",c=(e,r,t,a)=>{var n=l(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(f(t,n,a)),s(e[t][n])},u=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!o(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},s=e=>(e.loaded=1,e.get()),p=(h=e=>function(r,t,a,n){var o=S.I(r);return o&&o.then?o.then(e.bind(e,r,S.S[r],t,a,n)):e(r,S.S[r],t,a,n)})(((e,r,t,a)=>r&&S.o(r,t)?s(i(r,t)):a())),b=h(((e,r,t,a)=>(d(e,t),c(r,0,t,a)))),v=h(((e,r,t,a,n)=>{var o=r&&S.o(r,t)&&u(r,t,a);return o?s(o):n()})),g={},m={6271:()=>b("default","react",[1,17,0,1]),4456:()=>b("default","react-dom",[1,17,0,1]),134:()=>v("default","@jupyter-widgets/base",[,[1,4,0,0],[1,3],1],(()=>Promise.all([S.e(713),S.e(460)]).then((()=>()=>S(2713))))),5276:()=>v("default","react-vega",[4,7,1,1],(()=>Promise.all([S.e(571),S.e(989)]).then((()=>()=>S(3866))))),8650:()=>v("default","react-bootstrap",[1,1,0,0,,"beta",16],(()=>S.e(921).then((()=>()=>S(6729))))),445:()=>p("default","jquery",(()=>S.e(755).then((()=>()=>S(9755))))),1797:()=>b("default","@lumino/coreutils",[1,1,5,3]),3211:()=>b("default","@lumino/messaging",[1,1,4,3]),6510:()=>b("default","@lumino/widgets",[1,1,16,1]),7190:()=>v("default","jquery",[1,3,1,1],(()=>S.e(755).then((()=>()=>S(9755))))),571:()=>v("default","vega-embed",[1,6,0,0],(()=>Promise.all([S.e(8),S.e(138)]).then((()=>()=>S(4008))))),1839:()=>v("default","vega-lite",[0],(()=>S.e(500).then((()=>()=>S(5500))))),8605:()=>v("default","vega",[1,5,20,2],(()=>S.e(501).then((()=>()=>S(501)))))},y={138:[1839,8605],271:[6271],367:[134,5276,8650],456:[4456],460:[445,1797,3211,6510,7190],571:[571]},S.f.consumes=(e,r)=>{S.o(y,e)&&y[e].forEach((e=>{if(S.o(g,e))return r.push(g[e]);var t=r=>{g[e]=0,S.m[e]=t=>{delete S.c[e],t.exports=r()}},a=r=>{delete g[e],S.m[e]=t=>{throw delete S.c[e],r}};try{var n=m[e]();n.then?r.push(g[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={908:0};S.f.j=(r,t)=>{var a=S.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^([25]71|138|456|460)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=S.p+S.u(r),d=new Error;S.l(o,(t=>{if(S.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,d,i]=t,l=0;if(o.some((r=>0!==e[r]))){for(a in d)S.o(d,a)&&(S.m[a]=d[a]);i&&i(S)}for(r&&r(t);l<o.length;l++)n=o[l],S.o(e,n)&&e[n]&&e[n][0](),e[o[l]]=0},t=self.webpackChunksolaswidget=self.webpackChunksolaswidget||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var j=S(6837);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).solaswidget=j})();