(self.webpackChunkluxwidget=self.webpackChunkluxwidget||[]).push([[90,841],{2703:(e,t,n)=>{"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:(e,t,n)=>{e.exports=n(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7090:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Vega:()=>m,VegaLite:()=>g,createClassFromSpec:()=>E});var r=n(5697),o=n.n(r),i=n(6271),a=n.n(i),c=n(8719),s=n.n(c),u={};function p(e,t){void 0===e&&(e=u),void 0===t&&(t=u);var n=Object.keys(e),r=Object.keys(t);return e===t||n.length===r.length&&n.every((function(n){return e[n]===t[n]}))}var f=function(){};function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){function t(){for(var t,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return h(l(t=e.call.apply(e,[this].concat(r))||this),"containerRef",a().createRef()),h(l(t),"viewPromise",void 0),h(l(t),"handleError",(function(e){var n=t.props.onError;return(void 0===n?f:n)(e),void console.warn(e)})),h(l(t),"modifyView",(function(e){t.viewPromise&&t.viewPromise.then((function(t){return t&&e(t),!0})).catch(t.handleError)})),t}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.componentDidMount=function(){this.createView()},n.componentDidUpdate=function(e){var t=this,n=function(e){var t=new Set;return e.forEach((function(e){Object.keys(e).forEach((function(e){t.add(e)}))})),t}([this.props,e]);n.delete("className"),n.delete("style"),n.delete("signalListeners"),(Array.from(n).some((function(n){return t.props[n]!==e[n]}))||!p(this.props.signalListeners,e.signalListeners))&&(this.clearView(),this.createView())},n.componentWillUnmount=function(){this.clearView()},n.createView=function(){var e=this.props,t=e.spec,n=e.onNewView,r=(e.onError,e.signalListeners),o=void 0===r?{}:r,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||(o[n]=e[n]);return o}(e,["spec","onNewView","onError","signalListeners"]);this.containerRef.current&&(this.viewPromise=s()(this.containerRef.current,t,i).then((function(e){var t=e.view,n=Object.keys(o);return n.forEach((function(e){try{t.addSignalListener(e,o[e])}catch(e){console.warn("Cannot add invalid signal handler >>",e)}})),0<n.length&&t.run(),t})).catch(this.handleError),n&&this.modifyView(n))},n.clearView=function(){return this.modifyView((function(e){e.finalize()})),this.viewPromise=void 0,this},n.render=function(){var e=this.props,t=e.className,n=e.style;return a().createElement("div",{ref:this.containerRef,className:t,style:n})},t}(a().PureComponent);function y(){return(y=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}h(d,"propTypes",{className:o().string,spec:o().any.isRequired,signalListeners:o().any,style:o().any,onNewView:o().any,onError:o().func});var m=function(e){function t(){for(var t,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return w(v(t=e.call.apply(e,[this].concat(r))||this),"vegaEmbed",a().createRef()),w(v(t),"handleNewView",(function(e){t.update();var n=t.props.onNewView;(void 0===n?f:n)(e)})),t}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.componentDidMount=function(){this.update()},n.componentDidUpdate=function(e){p(this.props.data,e.data)||this.update()},n.update=function(){var e=this.props.data;if(e){var t=Object.keys(e);this.vegaEmbed.current&&0<t.length&&this.vegaEmbed.current.modifyView((function(n){t.forEach((function(t){!function(e,t,n){n&&(function(e){return!!e&&"[object Function]"==={}.toString.call(e)}(n)?n(e.data(t)):e.change(t,c.vega.changeset().remove((function(){return!0})).insert(n)))}(n,t,e[t])})),n.run()}))}},n.render=function(){var e=this.props,t=(e.data,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||(o[n]=e[n]);return o}(e,["data"]));return a().createElement(d,y({ref:this.vegaEmbed},t,{onNewView:this.handleNewView}))},t}(a().PureComponent);function b(){return(b=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}function g(e){return a().createElement(m,b({},e,{mode:"vega-lite"}))}function O(){return(O=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}function E(e){var t=e.mode,n=e.spec,r=function(e){function r(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(r,e),r.prototype.render=function(){return a().createElement(m,O({mode:t,spec:n},this.props))},r}(a().PureComponent);return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(r,"getSpec",(function(){return n})),r}w(m,"propTypes",{data:o().any}),w(m,"defaultProps",{data:{}})}}]);