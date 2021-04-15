var _JUPYTERLAB;(()=>{"use strict";var e,r,t,a,n,o,d,i,l,f,u,c,s,b,h,p,v,g,m,y,w={7960:(e,r,t)=>{var a={"./index":()=>Promise.all([t.e(949),t.e(271),t.e(918),t.e(456),t.e(367),t.e(568)]).then((()=>()=>t(1568))),"./extension":()=>Promise.all([t.e(949),t.e(271),t.e(918),t.e(456),t.e(367),t.e(480)]).then((()=>()=>t(4480))),"./style":()=>t.e(776).then((()=>()=>t(3776)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a=t.S.default,n="default";if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>n,init:()=>o})}},P={};function S(e){var r=P[e];if(void 0!==r)return r.exports;var t=P[e]={id:e,loaded:!1,exports:{}};return w[e].call(t.exports,t,t.exports,S),t.loaded=!0,t.exports}S.m=w,S.c=P,S.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return S.d(r,{a:r}),r},S.d=(e,r)=>{for(var t in r)S.o(r,t)&&!S.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},S.f={},S.e=e=>Promise.all(Object.keys(S.f).reduce(((r,t)=>(S.f[t](e,r),r)),[])),S.u=e=>e+"."+{25:"f5884a7ee04ea320d2c0",90:"70ae2370d3558f3e4a07",271:"095f063beef3970b4fbf",284:"bc4d6e8fca3f4fa3429e",367:"e431687a4db3a454e028",456:"56c9096bb45d5a1064a9",460:"874945d5b690d484bc95",480:"e142971daf6d6dfe784e",527:"6c5a4b635b45b0240c71",534:"1924b2ac3f8a8c599486",540:"c887b5c70bc407051f77",568:"7b322bdf8834be9e8237",571:"049887114ec9413e1378",741:"a084b42c89d2ff4f6d41",755:"1487a7ae16bf4e9a1542",776:"255387226f9ebbed39aa",823:"34e4c4aaf77ba59a09f4",841:"4142305c43f1e9f54678",918:"65e8c7d58dfde23248b7",949:"6f9ccb250aab372788a0",990:"46f904e5afa5105692d0"}[e]+".js?v="+{25:"f5884a7ee04ea320d2c0",90:"70ae2370d3558f3e4a07",271:"095f063beef3970b4fbf",284:"bc4d6e8fca3f4fa3429e",367:"e431687a4db3a454e028",456:"56c9096bb45d5a1064a9",460:"874945d5b690d484bc95",480:"e142971daf6d6dfe784e",527:"6c5a4b635b45b0240c71",534:"1924b2ac3f8a8c599486",540:"c887b5c70bc407051f77",568:"7b322bdf8834be9e8237",571:"049887114ec9413e1378",741:"a084b42c89d2ff4f6d41",755:"1487a7ae16bf4e9a1542",776:"255387226f9ebbed39aa",823:"34e4c4aaf77ba59a09f4",841:"4142305c43f1e9f54678",918:"65e8c7d58dfde23248b7",949:"6f9ccb250aab372788a0",990:"46f904e5afa5105692d0"}[e],S.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),S.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="luxwidget:",S.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var d,i;if(void 0!==n)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var u=l[f];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==r+n){d=u;break}}d||(i=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,S.nc&&d.setAttribute("nonce",S.nc),d.setAttribute("data-webpack",r+n),d.src=t),e[t]=[a];var c=(r,a)=>{d.onerror=d.onload=null,clearTimeout(s);var n=e[t];if(delete e[t],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((e=>e(a))),r)return r(a)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=c.bind(null,d.onerror),d.onload=c.bind(null,d.onload),i&&document.head.appendChild(d)}},S.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{S.S={};var e={},r={};S.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];S.o(S.S,t)||(S.S[t]={});var o=S.S[t],d="luxwidget",i=(e,r,t,a)=>{var n=o[e]=o[e]||{},i=n[r];(!i||!i.loaded&&(!a!=!i.eager?a:d>i.from))&&(n[r]={get:t,from:d,eager:!!a})},l=[];switch(t){case"default":i("@jupyter-widgets/base","4.0.0",(()=>Promise.all([S.e(534),S.e(460)]).then((()=>()=>S(3534))))),i("jquery","3.6.0",(()=>S.e(755).then((()=>()=>S(9755))))),i("luxwidget","0.1.5",(()=>Promise.all([S.e(949),S.e(271),S.e(918),S.e(456),S.e(367),S.e(568)]).then((()=>()=>S(1568))))),i("react-bootstrap","1.5.2",(()=>Promise.all([S.e(949),S.e(540),S.e(918),S.e(456)]).then((()=>()=>S(4540))))),i("react-vega","7.1.1",(()=>Promise.all([S.e(918),S.e(571),S.e(90)]).then((()=>()=>S(7090))))),i("vega-embed","6.17.0",(()=>Promise.all([S.e(284),S.e(527)]).then((()=>()=>S(6284))))),i("vega-lite","4.17.0",(()=>Promise.all([S.e(25),S.e(823)]).then((()=>()=>S(25))))),i("vega","5.20.2",(()=>Promise.all([S.e(741),S.e(990)]).then((()=>()=>S(9741)))))}return e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;S.g.importScripts&&(e=S.g.location+"");var r=S.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),S.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var d=r[a],i=(typeof d)[0];if(o!=i)return"o"==o&&"n"==i||"s"==i||"u"==o;if("o"!=o&&"u"!=o&&n!=d)return n<d;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(i=e[o]))[0]?"-":(a>0?".":"")+(a=2,i);return t}var d=[];for(o=1;o<e.length;o++){var i=e[o];d.push(0===i?"not("+l()+")":1===i?"("+l()+" || "+l()+")":2===i?d.pop()+" "+d.pop():n(i))}return l();function l(){return d.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var d=0,i=1,l=!0;;i++,d++){var f,u,c=i<e.length?(typeof e[i])[0]:"";if(d>=r.length||"o"==(u=(typeof(f=r[d]))[0]))return!l||("u"==c?i>a&&!n:""==c!=n);if("u"==u){if(!l||"u"!=c)return!1}else if(l)if(c==u)if(i<=a){if(f!=e[i])return!1}else{if(n?f>e[i]:f<e[i])return!1;f!=e[i]&&(l=!1)}else if("s"!=c&&"n"!=c){if(n||i<=a)return!1;l=!1,i--}else{if(i<=a||u<c!=n)return!1;l=!1}else"s"!=c&&"n"!=c&&(l=!1,i--)}}var s=[],b=s.pop.bind(s);for(d=1;d<e.length;d++){var h=e[d];s.push(1==h?b()|b():2==h?b()&b():h?o(h,r):!b())}return!!b()},d=(e,r)=>{var t=S.S[e];if(!t||!S.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},i=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||a(e,r)?r:e),0))&&t[r]},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},f=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+n(t)+")",u=(e,r,t,a)=>{var n=l(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(f(t,n,a)),s(e[t][n])},c=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!o(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},s=e=>(e.loaded=1,e.get()),h=(b=e=>function(r,t,a,n){var o=S.I(r);return o&&o.then?o.then(e.bind(e,r,S.S[r],t,a,n)):e(r,S.S[r],t,a,n)})(((e,r,t,a)=>r&&S.o(r,t)?s(i(r,t)):a())),p=b(((e,r,t,a)=>(d(e,t),u(r,0,t,a)))),v=b(((e,r,t,a,n)=>{var o=r&&S.o(r,t)&&c(r,t,a);return o?s(o):n()})),g={},m={6271:()=>p("default","react",[1,17,0,1]),4456:()=>p("default","react-dom",[1,17,0,1]),134:()=>v("default","@jupyter-widgets/base",[,[1,4,0,0],[1,3],1],(()=>Promise.all([S.e(534),S.e(460)]).then((()=>()=>S(3534))))),5276:()=>v("default","react-vega",[4,7,1,1],(()=>Promise.all([S.e(571),S.e(841)]).then((()=>()=>S(7090))))),8650:()=>v("default","react-bootstrap",[1,1,0,0,,"beta",16],(()=>S.e(540).then((()=>()=>S(4540))))),445:()=>h("default","jquery",(()=>S.e(755).then((()=>()=>S(9755))))),1797:()=>p("default","@lumino/coreutils",[1,1,5,3]),3211:()=>p("default","@lumino/messaging",[1,1,4,3]),6510:()=>p("default","@lumino/widgets",[1,1,16,1]),7190:()=>v("default","jquery",[1,3,1,1],(()=>S.e(755).then((()=>()=>S(9755))))),571:()=>v("default","vega-embed",[1,6,0,0],(()=>Promise.all([S.e(284),S.e(527)]).then((()=>()=>S(6284))))),1839:()=>v("default","vega-lite",[0],(()=>S.e(25).then((()=>()=>S(25))))),5114:()=>v("default","vega",[1,5,13,0],(()=>S.e(741).then((()=>()=>S(9741)))))},y={367:[134,5276,8650],456:[4456],460:[445,1797,3211,6510,7190],527:[1839,5114],571:[571],918:[6271]},S.f.consumes=(e,r)=>{S.o(y,e)&&y[e].forEach((e=>{if(S.o(g,e))return r.push(g[e]);var t=r=>{g[e]=0,S.m[e]=t=>{delete S.c[e],t.exports=r()}},a=r=>{delete g[e],S.m[e]=t=>{throw delete S.c[e],r}};try{var n=m[e]();n.then?r.push(g[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={237:0};S.f.j=(r,t)=>{var a=S.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(456|460|527|571|918)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=S.p+S.u(r),d=new Error;S.l(o,(t=>{if(S.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,d,i]=t,l=0;for(a in d)S.o(d,a)&&(S.m[a]=d[a]);for(i&&i(S),r&&r(t);l<o.length;l++)n=o[l],S.o(e,n)&&e[n]&&e[n][0](),e[o[l]]=0},t=self.webpackChunkluxwidget=self.webpackChunkluxwidget||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var x=S(7960);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).luxwidget=x})();