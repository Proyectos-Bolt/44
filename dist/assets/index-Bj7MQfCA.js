(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ry={exports:{}},su={},iy={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),i1=Symbol.for("react.portal"),s1=Symbol.for("react.fragment"),o1=Symbol.for("react.strict_mode"),a1=Symbol.for("react.profiler"),l1=Symbol.for("react.provider"),u1=Symbol.for("react.context"),c1=Symbol.for("react.forward_ref"),h1=Symbol.for("react.suspense"),d1=Symbol.for("react.memo"),f1=Symbol.for("react.lazy"),_p=Symbol.iterator;function p1(t){return t===null||typeof t!="object"?null:(t=_p&&t[_p]||t["@@iterator"],typeof t=="function"?t:null)}var sy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oy=Object.assign,ay={};function vs(t,e,n){this.props=t,this.context=e,this.refs=ay,this.updater=n||sy}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ly(){}ly.prototype=vs.prototype;function Xh(t,e,n){this.props=t,this.context=e,this.refs=ay,this.updater=n||sy}var Yh=Xh.prototype=new ly;Yh.constructor=Xh;oy(Yh,vs.prototype);Yh.isPureReactComponent=!0;var wp=Array.isArray,uy=Object.prototype.hasOwnProperty,Jh={current:null},cy={key:!0,ref:!0,__self:!0,__source:!0};function hy(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)uy.call(e,r)&&!cy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Wo,type:t,key:s,ref:a,props:i,_owner:Jh.current}}function m1(t,e){return{$$typeof:Wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wo}function g1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ep=/\/+/g;function Ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?g1(""+t.key):e.toString(36)}function Ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Wo:case i1:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Ku(a,0):r,wp(i)?(n="",t!=null&&(n=t.replace(Ep,"$&/")+"/"),Ga(i,e,n,"",function(h){return h})):i!=null&&(Zh(i)&&(i=m1(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ep,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",wp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ku(s,l);a+=Ga(s,e,n,u,i)}else if(u=p1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ku(s,l++),a+=Ga(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ia(t,e,n){if(t==null)return t;var r=[],i=0;return Ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function y1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},Ka={transition:null},v1={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:Jh};function dy(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!Zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=vs;ee.Fragment=s1;ee.Profiler=a1;ee.PureComponent=Xh;ee.StrictMode=o1;ee.Suspense=h1;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v1;ee.act=dy;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=oy({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Jh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)uy.call(e,u)&&!cy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Wo,type:t.type,key:i,ref:s,props:r,_owner:a}};ee.createContext=function(t){return t={$$typeof:u1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:l1,_context:t},t.Consumer=t};ee.createElement=hy;ee.createFactory=function(t){var e=hy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:c1,render:t}};ee.isValidElement=Zh;ee.lazy=function(t){return{$$typeof:f1,_payload:{_status:-1,_result:t},_init:y1}};ee.memo=function(t,e){return{$$typeof:d1,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};ee.unstable_act=dy;ee.useCallback=function(t,e){return yt.current.useCallback(t,e)};ee.useContext=function(t){return yt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return yt.current.useEffect(t,e)};ee.useId=function(){return yt.current.useId()};ee.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return yt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};ee.useRef=function(t){return yt.current.useRef(t)};ee.useState=function(t){return yt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return yt.current.useTransition()};ee.version="18.3.1";iy.exports=ee;var q=iy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _1=q,w1=Symbol.for("react.element"),E1=Symbol.for("react.fragment"),T1=Object.prototype.hasOwnProperty,I1=_1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S1={key:!0,ref:!0,__self:!0,__source:!0};function fy(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)T1.call(e,r)&&!S1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:w1,type:t,key:s,ref:a,props:i,_owner:I1.current}}su.Fragment=E1;su.jsx=fy;su.jsxs=fy;ry.exports=su;var y=ry.exports,py={exports:{}},Mt={},my={exports:{}},gy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var Q=B.length;B.push(K);e:for(;0<Q;){var le=Q-1>>>1,ge=B[le];if(0<i(ge,K))B[le]=K,B[Q]=ge,Q=le;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],Q=B.pop();if(Q!==K){B[0]=Q;e:for(var le=0,ge=B.length,dn=ge>>>1;le<dn;){var wt=2*(le+1)-1,fn=B[wt],ue=wt+1,Gt=B[ue];if(0>i(fn,Q))ue<ge&&0>i(Gt,fn)?(B[le]=Gt,B[ue]=Q,le=ue):(B[le]=fn,B[wt]=Q,le=wt);else if(ue<ge&&0>i(Gt,Q))B[le]=Gt,B[ue]=Q,le=ue;else break e}}return K}function i(B,K){var Q=B.sortIndex-K.sortIndex;return Q!==0?Q:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],h=[],f=1,m=null,_=3,R=!1,N=!1,D=!1,F=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(B){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=B)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function b(B){if(D=!1,A(B),!N)if(n(u)!==null)N=!0,_t(j);else{var K=n(h);K!==null&&qt(b,K.startTime-B)}}function j(B,K){N=!1,D&&(D=!1,x(g),g=-1),R=!0;var Q=_;try{for(A(K),m=n(u);m!==null&&(!(m.expirationTime>K)||B&&!S());){var le=m.callback;if(typeof le=="function"){m.callback=null,_=m.priorityLevel;var ge=le(m.expirationTime<=K);K=t.unstable_now(),typeof ge=="function"?m.callback=ge:m===n(u)&&r(u),A(K)}else r(u);m=n(u)}if(m!==null)var dn=!0;else{var wt=n(h);wt!==null&&qt(b,wt.startTime-K),dn=!1}return dn}finally{m=null,_=Q,R=!1}}var z=!1,w=null,g=-1,E=5,I=-1;function S(){return!(t.unstable_now()-I<E)}function C(){if(w!==null){var B=t.unstable_now();I=B;var K=!0;try{K=w(!0,B)}finally{K?T():(z=!1,w=null)}}else z=!1}var T;if(typeof v=="function")T=function(){v(C)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,Pe=te.port2;te.port1.onmessage=C,T=function(){Pe.postMessage(null)}}else T=function(){F(C,0)};function _t(B){w=B,z||(z=!0,T())}function qt(B,K){g=F(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){N||R||(N=!0,_t(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(_){case 1:case 2:case 3:var K=3;break;default:K=_}var Q=_;_=K;try{return B()}finally{_=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=_;_=B;try{return K()}finally{_=Q}},t.unstable_scheduleCallback=function(B,K,Q){var le=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,B){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=Q+ge,B={id:f++,callback:K,priorityLevel:B,startTime:Q,expirationTime:ge,sortIndex:-1},Q>le?(B.sortIndex=Q,e(h,B),n(u)===null&&B===n(h)&&(D?(x(g),g=-1):D=!0,qt(b,Q-le))):(B.sortIndex=ge,e(u,B),N||R||(N=!0,_t(j))),B},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(B){var K=_;return function(){var Q=_;_=K;try{return B.apply(this,arguments)}finally{_=Q}}}})(gy);my.exports=gy;var x1=my.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A1=q,Ot=x1;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yy=new Set,wo={};function pi(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(wo[t]=e,t=0;t<e.length;t++)yy.add(e[t])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,C1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tp={},Ip={};function P1(t){return Vc.call(Ip,t)?!0:Vc.call(Tp,t)?!1:C1.test(t)?Ip[t]=!0:(Tp[t]=!0,!1)}function R1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k1(t,e,n,r){if(e===null||typeof e>"u"||R1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ed=/[\-:]([a-z])/g;function td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ed,td);et[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ed,td);et[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ed,td);et[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function nd(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(k1(e,n,i,r)&&(n=null),r||i===null?P1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qn=A1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),Oi=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),Lc=Symbol.for("react.profiler"),vy=Symbol.for("react.provider"),_y=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Fc=Symbol.for("react.suspense_list"),sd=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),wy=Symbol.for("react.offscreen"),Sp=Symbol.iterator;function $s(t){return t===null||typeof t!="object"?null:(t=Sp&&t[Sp]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,Qu;function Ys(t){if(Qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qu=e&&e[1]||""}return`
`+Qu+t}var Xu=!1;function Yu(t,e){if(!t||Xu)return"";Xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{Xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ys(t):""}function N1(t){switch(t.tag){case 5:return Ys(t.type);case 16:return Ys("Lazy");case 13:return Ys("Suspense");case 19:return Ys("SuspenseList");case 0:case 2:case 15:return t=Yu(t.type,!1),t;case 11:return t=Yu(t.type.render,!1),t;case 1:return t=Yu(t.type,!0),t;default:return""}}function Uc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mi:return"Fragment";case Oi:return"Portal";case Lc:return"Profiler";case rd:return"StrictMode";case jc:return"Suspense";case Fc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _y:return(t.displayName||"Context")+".Consumer";case vy:return(t._context.displayName||"Context")+".Provider";case id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sd:return e=t.displayName||null,e!==null?e:Uc(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return Uc(t(e))}catch{}}return null}function b1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uc(e);case 8:return e===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ey(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D1(t){var e=Ey(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=D1(t))}function Ty(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ey(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $c(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Iy(t,e){e=e.checked,e!=null&&nd(t,"checked",e,!1)}function zc(t,e){Iy(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bc(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ap(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bc(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function Gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Js(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function Sy(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Aa,Ay=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O1=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(t){O1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ro[e]=ro[t]})});function Cy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ro.hasOwnProperty(t)&&ro[t]?(""+e).trim():e+"px"}function Py(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var M1=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qc(t,e){if(e){if(M1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Gc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=null;function od(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qc=null,Ki=null,Qi=null;function Rp(t){if(t=Ko(t)){if(typeof Qc!="function")throw Error(L(280));var e=t.stateNode;e&&(e=cu(e),Qc(t.stateNode,t.type,e))}}function Ry(t){Ki?Qi?Qi.push(t):Qi=[t]:Ki=t}function ky(){if(Ki){var t=Ki,e=Qi;if(Qi=Ki=null,Rp(t),e)for(t=0;t<e.length;t++)Rp(e[t])}}function Ny(t,e){return t(e)}function by(){}var Ju=!1;function Dy(t,e,n){if(Ju)return t(e,n);Ju=!0;try{return Ny(t,e,n)}finally{Ju=!1,(Ki!==null||Qi!==null)&&(by(),ky())}}function To(t,e){var n=t.stateNode;if(n===null)return null;var r=cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Xc=!1;if(Bn)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Xc=!1}function V1(t,e,n,r,i,s,a,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var io=!1,ml=null,gl=!1,Yc=null,L1={onError:function(t){io=!0,ml=t}};function j1(t,e,n,r,i,s,a,l,u){io=!1,ml=null,V1.apply(L1,arguments)}function F1(t,e,n,r,i,s,a,l,u){if(j1.apply(this,arguments),io){if(io){var h=ml;io=!1,ml=null}else throw Error(L(198));gl||(gl=!0,Yc=h)}}function mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Oy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kp(t){if(mi(t)!==t)throw Error(L(188))}function U1(t){var e=t.alternate;if(!e){if(e=mi(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return kp(i),t;if(s===r)return kp(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function My(t){return t=U1(t),t!==null?Vy(t):null}function Vy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vy(t);if(e!==null)return e;t=t.sibling}return null}var Ly=Ot.unstable_scheduleCallback,Np=Ot.unstable_cancelCallback,$1=Ot.unstable_shouldYield,z1=Ot.unstable_requestPaint,Re=Ot.unstable_now,B1=Ot.unstable_getCurrentPriorityLevel,ad=Ot.unstable_ImmediatePriority,jy=Ot.unstable_UserBlockingPriority,yl=Ot.unstable_NormalPriority,H1=Ot.unstable_LowPriority,Fy=Ot.unstable_IdlePriority,ou=null,En=null;function W1(t){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ou,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:K1,q1=Math.log,G1=Math.LN2;function K1(t){return t>>>=0,t===0?32:31-(q1(t)/G1|0)|0}var Ca=64,Pa=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Zs(l):(s&=a,s!==0&&(r=Zs(s)))}else a=n&~i,a!==0?r=Zs(a):s!==0&&(r=Zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function Q1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-an(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=Q1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Jc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Uy(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function Zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function Y1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function $y(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zy,ud,By,Hy,Wy,Zc=!1,Ra=[],mr=null,gr=null,yr=null,Io=new Map,So=new Map,lr=[],J1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bp(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(e.pointerId)}}function Bs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ko(e),e!==null&&ud(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Z1(t,e,n,r,i){switch(e){case"focusin":return mr=Bs(mr,t,e,n,r,i),!0;case"dragenter":return gr=Bs(gr,t,e,n,r,i),!0;case"mouseover":return yr=Bs(yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Io.set(s,Bs(Io.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,So.set(s,Bs(So.get(s)||null,t,e,n,r,i)),!0}return!1}function qy(t){var e=Gr(t.target);if(e!==null){var n=mi(e);if(n!==null){if(e=n.tag,e===13){if(e=Oy(n),e!==null){t.blockedOn=e,Wy(t.priority,function(){By(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kc=r,n.target.dispatchEvent(r),Kc=null}else return e=Ko(n),e!==null&&ud(e),t.blockedOn=n,!1;e.shift()}return!0}function Dp(t,e,n){Qa(t)&&n.delete(e)}function eE(){Zc=!1,mr!==null&&Qa(mr)&&(mr=null),gr!==null&&Qa(gr)&&(gr=null),yr!==null&&Qa(yr)&&(yr=null),Io.forEach(Dp),So.forEach(Dp)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,Zc||(Zc=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,eE)))}function xo(t){function e(i){return Hs(i,t)}if(0<Ra.length){Hs(Ra[0],t);for(var n=1;n<Ra.length;n++){var r=Ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mr!==null&&Hs(mr,t),gr!==null&&Hs(gr,t),yr!==null&&Hs(yr,t),Io.forEach(e),So.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)qy(n),n.blockedOn===null&&lr.shift()}var Xi=Qn.ReactCurrentBatchConfig,_l=!0;function tE(t,e,n,r){var i=oe,s=Xi.transition;Xi.transition=null;try{oe=1,cd(t,e,n,r)}finally{oe=i,Xi.transition=s}}function nE(t,e,n,r){var i=oe,s=Xi.transition;Xi.transition=null;try{oe=4,cd(t,e,n,r)}finally{oe=i,Xi.transition=s}}function cd(t,e,n,r){if(_l){var i=eh(t,e,n,r);if(i===null)uc(t,e,r,wl,n),bp(t,r);else if(Z1(i,t,e,n,r))r.stopPropagation();else if(bp(t,r),e&4&&-1<J1.indexOf(t)){for(;i!==null;){var s=Ko(i);if(s!==null&&zy(s),s=eh(t,e,n,r),s===null&&uc(t,e,r,wl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uc(t,e,r,null,n)}}var wl=null;function eh(t,e,n,r){if(wl=null,t=od(r),t=Gr(t),t!==null)if(e=mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Oy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wl=t,null}function Gy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B1()){case ad:return 1;case jy:return 4;case yl:case H1:return 16;case Fy:return 536870912;default:return 16}default:return 16}}var fr=null,hd=null,Xa=null;function Ky(){if(Xa)return Xa;var t,e=hd,n=e.length,r,i="value"in fr?fr.value:fr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Xa=i.slice(t,1<r?1-r:void 0)}function Ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ka(){return!0}function Op(){return!1}function Vt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ka:Op,this.isPropagationStopped=Op,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dd=Vt(_s),Go=Se({},_s,{view:0,detail:0}),rE=Vt(Go),ec,tc,Ws,au=Se({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(ec=t.screenX-Ws.screenX,tc=t.screenY-Ws.screenY):tc=ec=0,Ws=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),Mp=Vt(au),iE=Se({},au,{dataTransfer:0}),sE=Vt(iE),oE=Se({},Go,{relatedTarget:0}),nc=Vt(oE),aE=Se({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),lE=Vt(aE),uE=Se({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cE=Vt(uE),hE=Se({},_s,{data:0}),Vp=Vt(hE),dE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pE[t])?!!e[t]:!1}function fd(){return mE}var gE=Se({},Go,{key:function(t){if(t.key){var e=dE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(t){return t.type==="keypress"?Ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yE=Vt(gE),vE=Se({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=Vt(vE),_E=Se({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),wE=Vt(_E),EE=Se({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),TE=Vt(EE),IE=Se({},au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SE=Vt(IE),xE=[9,13,27,32],pd=Bn&&"CompositionEvent"in window,so=null;Bn&&"documentMode"in document&&(so=document.documentMode);var AE=Bn&&"TextEvent"in window&&!so,Qy=Bn&&(!pd||so&&8<so&&11>=so),jp=" ",Fp=!1;function Xy(t,e){switch(t){case"keyup":return xE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vi=!1;function CE(t,e){switch(t){case"compositionend":return Yy(e);case"keypress":return e.which!==32?null:(Fp=!0,jp);case"textInput":return t=e.data,t===jp&&Fp?null:t;default:return null}}function PE(t,e){if(Vi)return t==="compositionend"||!pd&&Xy(t,e)?(t=Ky(),Xa=hd=fr=null,Vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qy&&e.locale!=="ko"?null:e.data;default:return null}}var RE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RE[t.type]:e==="textarea"}function Jy(t,e,n,r){Ry(r),e=El(e,"onChange"),0<e.length&&(n=new dd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oo=null,Ao=null;function kE(t){u0(t,0)}function lu(t){var e=Fi(t);if(Ty(e))return t}function NE(t,e){if(t==="change")return e}var Zy=!1;if(Bn){var rc;if(Bn){var ic="oninput"in document;if(!ic){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),ic=typeof $p.oninput=="function"}rc=ic}else rc=!1;Zy=rc&&(!document.documentMode||9<document.documentMode)}function zp(){oo&&(oo.detachEvent("onpropertychange",e0),Ao=oo=null)}function e0(t){if(t.propertyName==="value"&&lu(Ao)){var e=[];Jy(e,Ao,t,od(t)),Dy(kE,e)}}function bE(t,e,n){t==="focusin"?(zp(),oo=e,Ao=n,oo.attachEvent("onpropertychange",e0)):t==="focusout"&&zp()}function DE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu(Ao)}function OE(t,e){if(t==="click")return lu(e)}function ME(t,e){if(t==="input"||t==="change")return lu(e)}function VE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:VE;function Co(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vc.call(e,i)||!un(t[i],e[i]))return!1}return!0}function Bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,e){var n=Bp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bp(n)}}function t0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?t0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function n0(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LE(t){var e=n0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&t0(n.ownerDocument.documentElement,n)){if(r!==null&&md(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hp(n,s);var a=Hp(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jE=Bn&&"documentMode"in document&&11>=document.documentMode,Li=null,th=null,ao=null,nh=!1;function Wp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nh||Li==null||Li!==pl(r)||(r=Li,"selectionStart"in r&&md(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&Co(ao,r)||(ao=r,r=El(th,"onSelect"),0<r.length&&(e=new dd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Li)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ji={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},sc={},r0={};Bn&&(r0=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function uu(t){if(sc[t])return sc[t];if(!ji[t])return t;var e=ji[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r0)return sc[t]=e[n];return t}var i0=uu("animationend"),s0=uu("animationiteration"),o0=uu("animationstart"),a0=uu("transitionend"),l0=new Map,qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){l0.set(t,e),pi(e,[t])}for(var oc=0;oc<qp.length;oc++){var ac=qp[oc],FE=ac.toLowerCase(),UE=ac[0].toUpperCase()+ac.slice(1);Dr(FE,"on"+UE)}Dr(i0,"onAnimationEnd");Dr(s0,"onAnimationIteration");Dr(o0,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(a0,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$E=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Gp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,F1(r,e,void 0,t),t.currentTarget=null}function u0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Gp(i,l,h),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Gp(i,l,h),s=u}}}if(gl)throw t=Yc,gl=!1,Yc=null,t}function pe(t,e){var n=e[ah];n===void 0&&(n=e[ah]=new Set);var r=t+"__bubble";n.has(r)||(c0(e,t,2,!1),n.add(r))}function lc(t,e,n){var r=0;e&&(r|=4),c0(n,t,r,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Po(t){if(!t[ba]){t[ba]=!0,yy.forEach(function(n){n!=="selectionchange"&&($E.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,lc("selectionchange",!1,e))}}function c0(t,e,n,r){switch(Gy(e)){case 1:var i=tE;break;case 4:i=nE;break;default:i=cd}n=i.bind(null,e,n,t),i=void 0,!Xc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Gr(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Dy(function(){var h=s,f=od(n),m=[];e:{var _=l0.get(t);if(_!==void 0){var R=dd,N=t;switch(t){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":R=yE;break;case"focusin":N="focus",R=nc;break;case"focusout":N="blur",R=nc;break;case"beforeblur":case"afterblur":R=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=sE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=wE;break;case i0:case s0:case o0:R=lE;break;case a0:R=TE;break;case"scroll":R=rE;break;case"wheel":R=SE;break;case"copy":case"cut":case"paste":R=cE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Lp}var D=(e&4)!==0,F=!D&&t==="scroll",x=D?_!==null?_+"Capture":null:_;D=[];for(var v=h,A;v!==null;){A=v;var b=A.stateNode;if(A.tag===5&&b!==null&&(A=b,x!==null&&(b=To(v,x),b!=null&&D.push(Ro(v,b,A)))),F)break;v=v.return}0<D.length&&(_=new R(_,N,null,n,f),m.push({event:_,listeners:D}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",_&&n!==Kc&&(N=n.relatedTarget||n.fromElement)&&(Gr(N)||N[Hn]))break e;if((R||_)&&(_=f.window===f?f:(_=f.ownerDocument)?_.defaultView||_.parentWindow:window,R?(N=n.relatedTarget||n.toElement,R=h,N=N?Gr(N):null,N!==null&&(F=mi(N),N!==F||N.tag!==5&&N.tag!==6)&&(N=null)):(R=null,N=h),R!==N)){if(D=Mp,b="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(D=Lp,b="onPointerLeave",x="onPointerEnter",v="pointer"),F=R==null?_:Fi(R),A=N==null?_:Fi(N),_=new D(b,v+"leave",R,n,f),_.target=F,_.relatedTarget=A,b=null,Gr(f)===h&&(D=new D(x,v+"enter",N,n,f),D.target=A,D.relatedTarget=F,b=D),F=b,R&&N)t:{for(D=R,x=N,v=0,A=D;A;A=Ni(A))v++;for(A=0,b=x;b;b=Ni(b))A++;for(;0<v-A;)D=Ni(D),v--;for(;0<A-v;)x=Ni(x),A--;for(;v--;){if(D===x||x!==null&&D===x.alternate)break t;D=Ni(D),x=Ni(x)}D=null}else D=null;R!==null&&Kp(m,_,R,D,!1),N!==null&&F!==null&&Kp(m,F,N,D,!0)}}e:{if(_=h?Fi(h):window,R=_.nodeName&&_.nodeName.toLowerCase(),R==="select"||R==="input"&&_.type==="file")var j=NE;else if(Up(_))if(Zy)j=ME;else{j=DE;var z=bE}else(R=_.nodeName)&&R.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(j=OE);if(j&&(j=j(t,h))){Jy(m,j,n,f);break e}z&&z(t,_,h),t==="focusout"&&(z=_._wrapperState)&&z.controlled&&_.type==="number"&&Bc(_,"number",_.value)}switch(z=h?Fi(h):window,t){case"focusin":(Up(z)||z.contentEditable==="true")&&(Li=z,th=h,ao=null);break;case"focusout":ao=th=Li=null;break;case"mousedown":nh=!0;break;case"contextmenu":case"mouseup":case"dragend":nh=!1,Wp(m,n,f);break;case"selectionchange":if(jE)break;case"keydown":case"keyup":Wp(m,n,f)}var w;if(pd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Vi?Xy(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Qy&&n.locale!=="ko"&&(Vi||g!=="onCompositionStart"?g==="onCompositionEnd"&&Vi&&(w=Ky()):(fr=f,hd="value"in fr?fr.value:fr.textContent,Vi=!0)),z=El(h,g),0<z.length&&(g=new Vp(g,t,null,n,f),m.push({event:g,listeners:z}),w?g.data=w:(w=Yy(n),w!==null&&(g.data=w)))),(w=AE?CE(t,n):PE(t,n))&&(h=El(h,"onBeforeInput"),0<h.length&&(f=new Vp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=w))}u0(m,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function El(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=To(t,n),s!=null&&r.unshift(Ro(t,s,i)),s=To(t,e),s!=null&&r.push(Ro(t,s,i))),t=t.return}return r}function Ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kp(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=To(n,s),u!=null&&a.unshift(Ro(n,u,l))):i||(u=To(n,s),u!=null&&a.push(Ro(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var zE=/\r\n?/g,BE=/\u0000|\uFFFD/g;function Qp(t){return(typeof t=="string"?t:""+t).replace(zE,`
`).replace(BE,"")}function Da(t,e,n){if(e=Qp(e),Qp(t)!==e&&n)throw Error(L(425))}function Tl(){}var rh=null,ih=null;function sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,HE=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,WE=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(t){return Xp.resolve(null).then(t).catch(qE)}:oh;function qE(t){setTimeout(function(){throw t})}function cc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xo(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ws=Math.random().toString(36).slice(2),wn="__reactFiber$"+ws,ko="__reactProps$"+ws,Hn="__reactContainer$"+ws,ah="__reactEvents$"+ws,GE="__reactListeners$"+ws,KE="__reactHandles$"+ws;function Gr(t){var e=t[wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yp(t);t!==null;){if(n=t[wn])return n;t=Yp(t)}return e}t=n,n=t.parentNode}return null}function Ko(t){return t=t[wn]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function cu(t){return t[ko]||null}var lh=[],Ui=-1;function Or(t){return{current:t}}function me(t){0>Ui||(t.current=lh[Ui],lh[Ui]=null,Ui--)}function he(t,e){Ui++,lh[Ui]=t.current,t.current=e}var Cr={},ut=Or(Cr),St=Or(!1),ni=Cr;function os(t,e){var n=t.type.contextTypes;if(!n)return Cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function Il(){me(St),me(ut)}function Jp(t,e,n){if(ut.current!==Cr)throw Error(L(168));he(ut,e),he(St,n)}function h0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,b1(t)||"Unknown",i));return Se({},n,r)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,ni=ut.current,he(ut,t),he(St,St.current),!0}function Zp(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=h0(t,e,ni),r.__reactInternalMemoizedMergedChildContext=t,me(St),me(ut),he(ut,t)):me(St),he(St,n)}var Dn=null,hu=!1,hc=!1;function d0(t){Dn===null?Dn=[t]:Dn.push(t)}function QE(t){hu=!0,d0(t)}function Mr(){if(!hc&&Dn!==null){hc=!0;var t=0,e=oe;try{var n=Dn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dn=null,hu=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(t+1)),Ly(ad,Mr),i}finally{oe=e,hc=!1}}return null}var $i=[],zi=0,xl=null,Al=0,Ft=[],Ut=0,ri=null,Mn=1,Vn="";function Hr(t,e){$i[zi++]=Al,$i[zi++]=xl,xl=t,Al=e}function f0(t,e,n){Ft[Ut++]=Mn,Ft[Ut++]=Vn,Ft[Ut++]=ri,ri=t;var r=Mn;t=Vn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Mn=1<<32-an(e)+i|n<<i|r,Vn=s+t}else Mn=1<<s|n<<i|r,Vn=t}function gd(t){t.return!==null&&(Hr(t,1),f0(t,1,0))}function yd(t){for(;t===xl;)xl=$i[--zi],$i[zi]=null,Al=$i[--zi],$i[zi]=null;for(;t===ri;)ri=Ft[--Ut],Ft[Ut]=null,Vn=Ft[--Ut],Ft[Ut]=null,Mn=Ft[--Ut],Ft[Ut]=null}var bt=null,Nt=null,_e=!1,Zt=null;function p0(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function em(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bt=t,Nt=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ri!==null?{id:Mn,overflow:Vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bt=t,Nt=null,!0):!1;default:return!1}}function uh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ch(t){if(_e){var e=Nt;if(e){var n=e;if(!em(t,e)){if(uh(t))throw Error(L(418));e=vr(n.nextSibling);var r=bt;e&&em(t,e)?p0(r,n):(t.flags=t.flags&-4097|2,_e=!1,bt=t)}}else{if(uh(t))throw Error(L(418));t.flags=t.flags&-4097|2,_e=!1,bt=t}}}function tm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bt=t}function Oa(t){if(t!==bt)return!1;if(!_e)return tm(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sh(t.type,t.memoizedProps)),e&&(e=Nt)){if(uh(t))throw m0(),Error(L(418));for(;e;)p0(t,e),e=vr(e.nextSibling)}if(tm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=bt?vr(t.stateNode.nextSibling):null;return!0}function m0(){for(var t=Nt;t;)t=vr(t.nextSibling)}function as(){Nt=bt=null,_e=!1}function vd(t){Zt===null?Zt=[t]:Zt.push(t)}var XE=Qn.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Ma(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nm(t){var e=t._init;return e(t._payload)}function g0(t){function e(x,v){if(t){var A=x.deletions;A===null?(x.deletions=[v],x.flags|=16):A.push(v)}}function n(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function r(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(x,v){return x=Tr(x,v),x.index=0,x.sibling=null,x}function s(x,v,A){return x.index=A,t?(A=x.alternate,A!==null?(A=A.index,A<v?(x.flags|=2,v):A):(x.flags|=2,v)):(x.flags|=1048576,v)}function a(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,v,A,b){return v===null||v.tag!==6?(v=vc(A,x.mode,b),v.return=x,v):(v=i(v,A),v.return=x,v)}function u(x,v,A,b){var j=A.type;return j===Mi?f(x,v,A.props.children,b,A.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===or&&nm(j)===v.type)?(b=i(v,A.props),b.ref=qs(x,v,A),b.return=x,b):(b=il(A.type,A.key,A.props,null,x.mode,b),b.ref=qs(x,v,A),b.return=x,b)}function h(x,v,A,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=_c(A,x.mode,b),v.return=x,v):(v=i(v,A.children||[]),v.return=x,v)}function f(x,v,A,b,j){return v===null||v.tag!==7?(v=Zr(A,x.mode,b,j),v.return=x,v):(v=i(v,A),v.return=x,v)}function m(x,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return v=vc(""+v,x.mode,A),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:return A=il(v.type,v.key,v.props,null,x.mode,A),A.ref=qs(x,null,v),A.return=x,A;case Oi:return v=_c(v,x.mode,A),v.return=x,v;case or:var b=v._init;return m(x,b(v._payload),A)}if(Js(v)||$s(v))return v=Zr(v,x.mode,A,null),v.return=x,v;Ma(x,v)}return null}function _(x,v,A,b){var j=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(x,v,""+A,b);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Sa:return A.key===j?u(x,v,A,b):null;case Oi:return A.key===j?h(x,v,A,b):null;case or:return j=A._init,_(x,v,j(A._payload),b)}if(Js(A)||$s(A))return j!==null?null:f(x,v,A,b,null);Ma(x,A)}return null}function R(x,v,A,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return x=x.get(A)||null,l(v,x,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Sa:return x=x.get(b.key===null?A:b.key)||null,u(v,x,b,j);case Oi:return x=x.get(b.key===null?A:b.key)||null,h(v,x,b,j);case or:var z=b._init;return R(x,v,A,z(b._payload),j)}if(Js(b)||$s(b))return x=x.get(A)||null,f(v,x,b,j,null);Ma(v,b)}return null}function N(x,v,A,b){for(var j=null,z=null,w=v,g=v=0,E=null;w!==null&&g<A.length;g++){w.index>g?(E=w,w=null):E=w.sibling;var I=_(x,w,A[g],b);if(I===null){w===null&&(w=E);break}t&&w&&I.alternate===null&&e(x,w),v=s(I,v,g),z===null?j=I:z.sibling=I,z=I,w=E}if(g===A.length)return n(x,w),_e&&Hr(x,g),j;if(w===null){for(;g<A.length;g++)w=m(x,A[g],b),w!==null&&(v=s(w,v,g),z===null?j=w:z.sibling=w,z=w);return _e&&Hr(x,g),j}for(w=r(x,w);g<A.length;g++)E=R(w,x,g,A[g],b),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?g:E.key),v=s(E,v,g),z===null?j=E:z.sibling=E,z=E);return t&&w.forEach(function(S){return e(x,S)}),_e&&Hr(x,g),j}function D(x,v,A,b){var j=$s(A);if(typeof j!="function")throw Error(L(150));if(A=j.call(A),A==null)throw Error(L(151));for(var z=j=null,w=v,g=v=0,E=null,I=A.next();w!==null&&!I.done;g++,I=A.next()){w.index>g?(E=w,w=null):E=w.sibling;var S=_(x,w,I.value,b);if(S===null){w===null&&(w=E);break}t&&w&&S.alternate===null&&e(x,w),v=s(S,v,g),z===null?j=S:z.sibling=S,z=S,w=E}if(I.done)return n(x,w),_e&&Hr(x,g),j;if(w===null){for(;!I.done;g++,I=A.next())I=m(x,I.value,b),I!==null&&(v=s(I,v,g),z===null?j=I:z.sibling=I,z=I);return _e&&Hr(x,g),j}for(w=r(x,w);!I.done;g++,I=A.next())I=R(w,x,g,I.value,b),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?g:I.key),v=s(I,v,g),z===null?j=I:z.sibling=I,z=I);return t&&w.forEach(function(C){return e(x,C)}),_e&&Hr(x,g),j}function F(x,v,A,b){if(typeof A=="object"&&A!==null&&A.type===Mi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Sa:e:{for(var j=A.key,z=v;z!==null;){if(z.key===j){if(j=A.type,j===Mi){if(z.tag===7){n(x,z.sibling),v=i(z,A.props.children),v.return=x,x=v;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===or&&nm(j)===z.type){n(x,z.sibling),v=i(z,A.props),v.ref=qs(x,z,A),v.return=x,x=v;break e}n(x,z);break}else e(x,z);z=z.sibling}A.type===Mi?(v=Zr(A.props.children,x.mode,b,A.key),v.return=x,x=v):(b=il(A.type,A.key,A.props,null,x.mode,b),b.ref=qs(x,v,A),b.return=x,x=b)}return a(x);case Oi:e:{for(z=A.key;v!==null;){if(v.key===z)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){n(x,v.sibling),v=i(v,A.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else e(x,v);v=v.sibling}v=_c(A,x.mode,b),v.return=x,x=v}return a(x);case or:return z=A._init,F(x,v,z(A._payload),b)}if(Js(A))return N(x,v,A,b);if($s(A))return D(x,v,A,b);Ma(x,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,v!==null&&v.tag===6?(n(x,v.sibling),v=i(v,A),v.return=x,x=v):(n(x,v),v=vc(A,x.mode,b),v.return=x,x=v),a(x)):n(x,v)}return F}var ls=g0(!0),y0=g0(!1),Cl=Or(null),Pl=null,Bi=null,_d=null;function wd(){_d=Bi=Pl=null}function Ed(t){var e=Cl.current;me(Cl),t._currentValue=e}function hh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Yi(t,e){Pl=t,_d=Bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(_d!==t)if(t={context:t,memoizedValue:e,next:null},Bi===null){if(Pl===null)throw Error(L(308));Bi=t,Pl.dependencies={lanes:0,firstContext:t}}else Bi=Bi.next=t;return e}var Kr=null;function Td(t){Kr===null?Kr=[t]:Kr.push(t)}function v0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Td(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,Td(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function Ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ld(t,n)}}function rm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,r){var i=t.updateQueue;ar=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?s=h:a.next=h,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;a=0,f=h=u=null,l=s;do{var _=l.lane,R=l.eventTime;if((r&_)===_){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,D=l;switch(_=e,R=n,D.tag){case 1:if(N=D.payload,typeof N=="function"){m=N.call(R,m,_);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=D.payload,_=typeof N=="function"?N.call(R,m,_):N,_==null)break e;m=Se({},m,_);break e;case 2:ar=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[l]:_.push(l))}else R={eventTime:R,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=R,u=m):f=f.next=R,a|=_;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;_=l,l=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);si|=a,t.lanes=a,t.memoizedState=m}}function im(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Qo={},Tn=Or(Qo),No=Or(Qo),bo=Or(Qo);function Qr(t){if(t===Qo)throw Error(L(174));return t}function Sd(t,e){switch(he(bo,e),he(No,t),he(Tn,Qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wc(e,t)}me(Tn),he(Tn,e)}function us(){me(Tn),me(No),me(bo)}function w0(t){Qr(bo.current);var e=Qr(Tn.current),n=Wc(e,t.type);e!==n&&(he(No,t),he(Tn,n))}function xd(t){No.current===t&&(me(Tn),me(No))}var Te=Or(0);function kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dc=[];function Ad(){for(var t=0;t<dc.length;t++)dc[t]._workInProgressVersionPrimary=null;dc.length=0}var Za=Qn.ReactCurrentDispatcher,fc=Qn.ReactCurrentBatchConfig,ii=0,Ie=null,Ve=null,He=null,Nl=!1,lo=!1,Do=0,YE=0;function nt(){throw Error(L(321))}function Cd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function Pd(t,e,n,r,i,s){if(ii=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Za.current=t===null||t.memoizedState===null?tT:nT,t=n(r,i),lo){s=0;do{if(lo=!1,Do=0,25<=s)throw Error(L(301));s+=1,He=Ve=null,e.updateQueue=null,Za.current=rT,t=n(r,i)}while(lo)}if(Za.current=bl,e=Ve!==null&&Ve.next!==null,ii=0,He=Ve=Ie=null,Nl=!1,e)throw Error(L(300));return t}function Rd(){var t=Do!==0;return Do=0,t}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ie.memoizedState=He=t:He=He.next=t,He}function Wt(){if(Ve===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=He===null?Ie.memoizedState:He.next;if(e!==null)He=e,Ve=t;else{if(t===null)throw Error(L(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},He===null?Ie.memoizedState=He=t:He=He.next=t}return He}function Oo(t,e){return typeof e=="function"?e(t):e}function pc(t){var e=Wt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,h=s;do{var f=h.lane;if((ii&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,a=r):u=u.next=m,Ie.lanes|=f,si|=f}h=h.next}while(h!==null&&h!==s);u===null?a=r:u.next=l,un(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,si|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mc(t){var e=Wt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);un(s,e.memoizedState)||(It=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function E0(){}function T0(t,e){var n=Ie,r=Wt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,It=!0),r=r.queue,kd(x0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Mo(9,S0.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(L(349));ii&30||I0(n,e,i)}return i}function I0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function S0(t,e,n,r){e.value=n,e.getSnapshot=r,A0(e)&&C0(t)}function x0(t,e,n){return n(function(){A0(e)&&C0(t)})}function A0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function C0(t){var e=Wn(t,1);e!==null&&ln(e,t,1,-1)}function sm(t){var e=vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},e.queue=t,t=t.dispatch=eT.bind(null,Ie,t),[e.memoizedState,t]}function Mo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function P0(){return Wt().memoizedState}function el(t,e,n,r){var i=vn();Ie.flags|=t,i.memoizedState=Mo(1|e,n,void 0,r===void 0?null:r)}function du(t,e,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var a=Ve.memoizedState;if(s=a.destroy,r!==null&&Cd(r,a.deps)){i.memoizedState=Mo(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Mo(1|e,n,s,r)}function om(t,e){return el(8390656,8,t,e)}function kd(t,e){return du(2048,8,t,e)}function R0(t,e){return du(4,2,t,e)}function k0(t,e){return du(4,4,t,e)}function N0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function b0(t,e,n){return n=n!=null?n.concat([t]):null,du(4,4,N0.bind(null,e,t),n)}function Nd(){}function D0(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function O0(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function M0(t,e,n){return ii&21?(un(n,e)||(n=Uy(),Ie.lanes|=n,si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function JE(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=fc.transition;fc.transition={};try{t(!1),e()}finally{oe=n,fc.transition=r}}function V0(){return Wt().memoizedState}function ZE(t,e,n){var r=Er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},L0(t))j0(e,n);else if(n=v0(t,e,n,r),n!==null){var i=pt();ln(n,t,r,i),F0(n,e,r)}}function eT(t,e,n){var r=Er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(L0(t))j0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,un(l,a)){var u=e.interleaved;u===null?(i.next=i,Td(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=v0(t,e,i,r),n!==null&&(i=pt(),ln(n,t,r,i),F0(n,e,r))}}function L0(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function j0(t,e){lo=Nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function F0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ld(t,n)}}var bl={readContext:Ht,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},tT={readContext:Ht,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,el(4194308,4,N0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return el(4194308,4,t,e)},useInsertionEffect:function(t,e){return el(4,2,t,e)},useMemo:function(t,e){var n=vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZE.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:sm,useDebugValue:Nd,useDeferredValue:function(t){return vn().memoizedState=t},useTransition:function(){var t=sm(!1),e=t[0];return t=JE.bind(null,t[1]),vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=vn();if(_e){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),qe===null)throw Error(L(349));ii&30||I0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,om(x0.bind(null,r,s,t),[t]),r.flags|=2048,Mo(9,S0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vn(),e=qe.identifierPrefix;if(_e){var n=Vn,r=Mn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Do++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nT={readContext:Ht,useCallback:D0,useContext:Ht,useEffect:kd,useImperativeHandle:b0,useInsertionEffect:R0,useLayoutEffect:k0,useMemo:O0,useReducer:pc,useRef:P0,useState:function(){return pc(Oo)},useDebugValue:Nd,useDeferredValue:function(t){var e=Wt();return M0(e,Ve.memoizedState,t)},useTransition:function(){var t=pc(Oo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:E0,useSyncExternalStore:T0,useId:V0,unstable_isNewReconciler:!1},rT={readContext:Ht,useCallback:D0,useContext:Ht,useEffect:kd,useImperativeHandle:b0,useInsertionEffect:R0,useLayoutEffect:k0,useMemo:O0,useReducer:mc,useRef:P0,useState:function(){return mc(Oo)},useDebugValue:Nd,useDeferredValue:function(t){var e=Wt();return Ve===null?e.memoizedState=t:M0(e,Ve.memoizedState,t)},useTransition:function(){var t=mc(Oo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:E0,useSyncExternalStore:T0,useId:V0,unstable_isNewReconciler:!1};function Yt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fu={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pt(),i=Er(t),s=Fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(ln(e,t,i,r),Ja(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pt(),i=Er(t),s=Fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(ln(e,t,i,r),Ja(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pt(),r=Er(t),i=Fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=_r(t,i,r),e!==null&&(ln(e,t,r,n),Ja(e,t,r))}};function am(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Co(n,r)||!Co(i,s):!0}function U0(t,e,n){var r=!1,i=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=xt(e)?ni:ut.current,r=e.contextTypes,s=(r=r!=null)?os(t,i):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function lm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fu.enqueueReplaceState(e,e.state,null)}function fh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Id(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=xt(e)?ni:ut.current,i.context=os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fu.enqueueReplaceState(i,i.state,null),Rl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function cs(t,e){try{var n="",r=e;do n+=N1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iT=typeof WeakMap=="function"?WeakMap:Map;function $0(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ol||(Ol=!0,Sh=r),ph(t,e)},n}function z0(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ph(t,e),typeof r!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function um(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vT.bind(null,t,e,n),e.then(t,t))}function cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var sT=Qn.ReactCurrentOwner,It=!1;function ft(t,e,n,r){e.child=t===null?y0(e,null,n,r):ls(e,t.child,n,r)}function dm(t,e,n,r,i){n=n.render;var s=e.ref;return Yi(e,i),r=Pd(t,e,n,r,s,i),n=Rd(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(_e&&n&&gd(e),e.flags|=1,ft(t,e,r,i),e.child)}function fm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,B0(t,e,s,r,i)):(t=il(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Co,n(a,r)&&t.ref===e.ref)return qn(t,e,i)}return e.flags|=1,t=Tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function B0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Co(s,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,qn(t,e,i)}return mh(t,e,n,r,i)}function H0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Wi,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Wi,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Wi,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(Wi,kt),kt|=r;return ft(t,e,i,n),e.child}function W0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mh(t,e,n,r,i){var s=xt(n)?ni:ut.current;return s=os(e,s),Yi(e,i),n=Pd(t,e,n,r,s,i),r=Rd(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(_e&&r&&gd(e),e.flags|=1,ft(t,e,n,i),e.child)}function pm(t,e,n,r,i){if(xt(n)){var s=!0;Sl(e)}else s=!1;if(Yi(e,i),e.stateNode===null)tl(t,e),U0(e,n,r),fh(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ht(h):(h=xt(n)?ni:ut.current,h=os(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==h)&&lm(e,a,r,h),ar=!1;var _=e.memoizedState;a.state=_,Rl(e,r,a,i),u=e.memoizedState,l!==r||_!==u||St.current||ar?(typeof f=="function"&&(dh(e,n,f,r),u=e.memoizedState),(l=ar||am(e,n,l,r,_,u,h))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=h,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,_0(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Yt(e.type,l),a.props=h,m=e.pendingProps,_=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ht(u):(u=xt(n)?ni:ut.current,u=os(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||_!==u)&&lm(e,a,r,u),ar=!1,_=e.memoizedState,a.state=_,Rl(e,r,a,i);var N=e.memoizedState;l!==m||_!==N||St.current||ar?(typeof R=="function"&&(dh(e,n,R,r),N=e.memoizedState),(h=ar||am(e,n,h,r,_,N,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,N,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,N,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),a.props=r,a.state=N,a.context=u,r=h):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return gh(t,e,n,r,s,i)}function gh(t,e,n,r,i,s){W0(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&Zp(e,n,!1),qn(t,e,s);r=e.stateNode,sT.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=ls(e,t.child,null,s),e.child=ls(e,null,l,s)):ft(t,e,l,s),e.memoizedState=r.state,i&&Zp(e,n,!0),e.child}function q0(t){var e=t.stateNode;e.pendingContext?Jp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jp(t,e.context,!1),Sd(t,e.containerInfo)}function mm(t,e,n,r,i){return as(),vd(i),e.flags|=256,ft(t,e,n,r),e.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function vh(t){return{baseLanes:t,cachePool:null,transitions:null}}function G0(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(Te,i&1),t===null)return ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=gu(a,r,0,null),t=Zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vh(n),e.memoizedState=yh,t):bd(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return oT(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Tr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Tr(l,s):(s=Zr(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?vh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=yh,r}return s=t.child,t=s.sibling,r=Tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bd(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Va(t,e,n,r){return r!==null&&vd(r),ls(e,t.child,null,n),t=bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oT(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=gc(Error(L(422))),Va(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gu({mode:"visible",children:r.children},i,0,null),s=Zr(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ls(e,t.child,null,a),e.child.memoizedState=vh(a),e.memoizedState=yh,s);if(!(e.mode&1))return Va(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=gc(s,r,void 0),Va(t,e,a,r)}if(l=(a&t.childLanes)!==0,It||l){if(r=qe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(t,i),ln(r,t,i,-1))}return jd(),r=gc(Error(L(421))),Va(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_T.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Nt=vr(i.nextSibling),bt=e,_e=!0,Zt=null,t!==null&&(Ft[Ut++]=Mn,Ft[Ut++]=Vn,Ft[Ut++]=ri,Mn=t.id,Vn=t.overflow,ri=e),e=bd(e,r.children),e.flags|=4096,e)}function gm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hh(t.return,e,n)}function yc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function K0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gm(t,n,e);else if(t.tag===19)gm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yc(e,!0,n,null,s);break;case"together":yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aT(t,e,n){switch(e.tag){case 3:q0(e),as();break;case 5:w0(e);break;case 1:xt(e.type)&&Sl(e);break;case 4:Sd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(Cl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?G0(t,e,n):(he(Te,Te.current&1),t=qn(t,e,n),t!==null?t.sibling:null);he(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return K0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,H0(t,e,n)}return qn(t,e,n)}var Q0,_h,X0,Y0;Q0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_h=function(){};X0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qr(Tn.current);var s=null;switch(n){case"input":i=$c(t,i),r=$c(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=Hc(t,i),r=Hc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Tl)}qc(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(wo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(wo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Y0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Gs(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lT(t,e,n){var r=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return xt(e.type)&&Il(),rt(e),null;case 3:return r=e.stateNode,us(),me(St),me(ut),Ad(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zt!==null&&(Ch(Zt),Zt=null))),_h(t,e),rt(e),null;case 5:xd(e);var i=Qr(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)X0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return rt(e),null}if(t=Qr(Tn.current),Oa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wn]=e,r[ko]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<eo.length;i++)pe(eo[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":xp(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":Cp(r,s),pe("invalid",r)}qc(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),i=["children",""+l]):wo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&pe("scroll",r)}switch(n){case"input":xa(r),Ap(r,s,!0);break;case"textarea":xa(r),Pp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Tl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[wn]=e,t[ko]=r,Q0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Gc(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<eo.length;i++)pe(eo[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":xp(t,r),i=$c(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Cp(t,r),i=Hc(t,r),pe("invalid",t);break;default:i=r}qc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Py(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ay(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Eo(t,u):typeof u=="number"&&Eo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&nd(t,s,u,a))}switch(n){case"input":xa(t),Ap(t,r,!1);break;case"textarea":xa(t),Pp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)Y0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Qr(bo.current),Qr(Tn.current),Oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[wn]=e,(s=r.nodeValue!==n)&&(t=bt,t!==null))switch(t.tag){case 3:Da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Da(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=e,e.stateNode=r}return rt(e),null;case 13:if(me(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&Nt!==null&&e.mode&1&&!(e.flags&128))m0(),as(),e.flags|=98560,s=!1;else if(s=Oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[wn]=e}else as(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),s=!1}else Zt!==null&&(Ch(Zt),Zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Le===0&&(Le=3):jd())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return us(),_h(t,e),t===null&&Po(e.stateNode.containerInfo),rt(e),null;case 10:return Ed(e.type._context),rt(e),null;case 17:return xt(e.type)&&Il(),rt(e),null;case 19:if(me(Te),s=e.memoizedState,s===null)return rt(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Gs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=kl(t),a!==null){for(e.flags|=128,Gs(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>hs&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=kl(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!_e)return rt(e),null}else 2*Re()-s.renderingStartTime>hs&&n!==1073741824&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=Te.current,he(Te,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return Ld(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function uT(t,e){switch(yd(e),e.tag){case 1:return xt(e.type)&&Il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return us(),me(St),me(ut),Ad(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xd(e),null;case 13:if(me(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));as()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(Te),null;case 4:return us(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var La=!1,ot=!1,cT=typeof WeakSet=="function"?WeakSet:Set,H=null;function Hi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function wh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var ym=!1;function hT(t,e){if(rh=_l,t=n0(),md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,h=0,f=0,m=t,_=null;t:for(;;){for(var R;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==s||r!==0&&m.nodeType!==3||(u=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(R=m.firstChild)!==null;)_=m,m=R;for(;;){if(m===t)break t;if(_===n&&++h===i&&(l=a),_===s&&++f===r&&(u=a),(R=m.nextSibling)!==null)break;m=_,_=m.parentNode}m=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ih={focusedElem:t,selectionRange:n},_l=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var D=N.memoizedProps,F=N.memoizedState,x=e.stateNode,v=x.getSnapshotBeforeUpdate(e.elementType===e.type?D:Yt(e.type,D),F);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(b){Ae(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return N=ym,ym=!1,N}function uo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&wh(e,n,s)}i=i.next}while(i!==r)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J0(t){var e=t.alternate;e!==null&&(t.alternate=null,J0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wn],delete e[ko],delete e[ah],delete e[GE],delete e[KE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z0(t){return t.tag===5||t.tag===3||t.tag===4}function vm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tl));else if(r!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}function Ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}var Ke=null,Jt=!1;function ir(t,e,n){for(n=n.child;n!==null;)ev(t,e,n),n=n.sibling}function ev(t,e,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ou,n)}catch{}switch(n.tag){case 5:ot||Hi(n,e);case 6:var r=Ke,i=Jt;Ke=null,ir(t,e,n),Ke=r,Jt=i,Ke!==null&&(Jt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Jt?(t=Ke,n=n.stateNode,t.nodeType===8?cc(t.parentNode,n):t.nodeType===1&&cc(t,n),xo(t)):cc(Ke,n.stateNode));break;case 4:r=Ke,i=Jt,Ke=n.stateNode.containerInfo,Jt=!0,ir(t,e,n),Ke=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&wh(n,e,a),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!ot&&(Hi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,ir(t,e,n),ot=r):ir(t,e,n);break;default:ir(t,e,n)}}function _m(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cT),e.forEach(function(r){var i=wT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Jt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Jt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Jt=!0;break e}l=l.return}if(Ke===null)throw Error(L(160));ev(s,a,i),Ke=null,Jt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ae(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tv(e,t),e=e.sibling}function tv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),yn(t),r&4){try{uo(3,t,t.return),pu(3,t)}catch(D){Ae(t,t.return,D)}try{uo(5,t,t.return)}catch(D){Ae(t,t.return,D)}}break;case 1:Xt(e,t),yn(t),r&512&&n!==null&&Hi(n,n.return);break;case 5:if(Xt(e,t),yn(t),r&512&&n!==null&&Hi(n,n.return),t.flags&32){var i=t.stateNode;try{Eo(i,"")}catch(D){Ae(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Iy(i,s),Gc(l,a);var h=Gc(l,s);for(a=0;a<u.length;a+=2){var f=u[a],m=u[a+1];f==="style"?Py(i,m):f==="dangerouslySetInnerHTML"?Ay(i,m):f==="children"?Eo(i,m):nd(i,f,m,h)}switch(l){case"input":zc(i,s);break;case"textarea":Sy(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?Gi(i,!!s.multiple,R,!1):_!==!!s.multiple&&(s.defaultValue!=null?Gi(i,!!s.multiple,s.defaultValue,!0):Gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[ko]=s}catch(D){Ae(t,t.return,D)}}break;case 6:if(Xt(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Ae(t,t.return,D)}}break;case 3:if(Xt(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xo(e.containerInfo)}catch(D){Ae(t,t.return,D)}break;case 4:Xt(e,t),yn(t);break;case 13:Xt(e,t),yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Md=Re())),r&4&&_m(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(h=ot)||f,Xt(e,t),ot=h):Xt(e,t),yn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(_=H,R=_.child,_.tag){case 0:case 11:case 14:case 15:uo(4,_,_.return);break;case 1:Hi(_,_.return);var N=_.stateNode;if(typeof N.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(D){Ae(r,n,D)}}break;case 5:Hi(_,_.return);break;case 22:if(_.memoizedState!==null){Em(m);continue}}R!==null?(R.return=_,H=R):Em(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Cy("display",a))}catch(D){Ae(t,t.return,D)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(D){Ae(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Xt(e,t),yn(t),r&4&&_m(t);break;case 21:break;default:Xt(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z0(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Eo(i,""),r.flags&=-33);var s=vm(t);Ih(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=vm(t);Th(t,l,a);break;default:throw Error(L(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dT(t,e,n){H=t,nv(t)}function nv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||La;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ot;l=La;var h=ot;if(La=a,(ot=u)&&!h)for(H=i;H!==null;)a=H,u=a.child,a.tag===22&&a.memoizedState!==null?Tm(i):u!==null?(u.return=a,H=u):Tm(i);for(;s!==null;)H=s,nv(s),s=s.sibling;H=i,La=l,ot=h}wm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):wm(t)}}function wm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&im(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}im(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&xo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}ot||e.flags&512&&Eh(e)}catch(_){Ae(e,e.return,_)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Em(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Tm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pu(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{Eh(e)}catch(u){Ae(e,s,u)}break;case 5:var a=e.return;try{Eh(e)}catch(u){Ae(e,a,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var fT=Math.ceil,Dl=Qn.ReactCurrentDispatcher,Dd=Qn.ReactCurrentOwner,zt=Qn.ReactCurrentBatchConfig,ie=0,qe=null,De=null,Je=0,kt=0,Wi=Or(0),Le=0,Vo=null,si=0,mu=0,Od=0,co=null,Tt=null,Md=0,hs=1/0,bn=null,Ol=!1,Sh=null,wr=null,ja=!1,pr=null,Ml=0,ho=0,xh=null,nl=-1,rl=0;function pt(){return ie&6?Re():nl!==-1?nl:nl=Re()}function Er(t){return t.mode&1?ie&2&&Je!==0?Je&-Je:XE.transition!==null?(rl===0&&(rl=Uy()),rl):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Gy(t.type)),t):1}function ln(t,e,n,r){if(50<ho)throw ho=0,xh=null,Error(L(185));qo(t,n,r),(!(ie&2)||t!==qe)&&(t===qe&&(!(ie&2)&&(mu|=n),Le===4&&ur(t,Je)),At(t,r),n===1&&ie===0&&!(e.mode&1)&&(hs=Re()+500,hu&&Mr()))}function At(t,e){var n=t.callbackNode;X1(t,e);var r=vl(t,t===qe?Je:0);if(r===0)n!==null&&Np(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Np(n),e===1)t.tag===0?QE(Im.bind(null,t)):d0(Im.bind(null,t)),WE(function(){!(ie&6)&&Mr()}),n=null;else{switch($y(r)){case 1:n=ad;break;case 4:n=jy;break;case 16:n=yl;break;case 536870912:n=Fy;break;default:n=yl}n=cv(n,rv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rv(t,e){if(nl=-1,rl=0,ie&6)throw Error(L(327));var n=t.callbackNode;if(Ji()&&t.callbackNode!==n)return null;var r=vl(t,t===qe?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vl(t,r);else{e=r;var i=ie;ie|=2;var s=sv();(qe!==t||Je!==e)&&(bn=null,hs=Re()+500,Jr(t,e));do try{gT();break}catch(l){iv(t,l)}while(!0);wd(),Dl.current=s,ie=i,De!==null?e=0:(qe=null,Je=0,e=Le)}if(e!==0){if(e===2&&(i=Jc(t),i!==0&&(r=i,e=Ah(t,i))),e===1)throw n=Vo,Jr(t,0),ur(t,r),At(t,Re()),n;if(e===6)ur(t,r);else{if(i=t.current.alternate,!(r&30)&&!pT(i)&&(e=Vl(t,r),e===2&&(s=Jc(t),s!==0&&(r=s,e=Ah(t,s))),e===1))throw n=Vo,Jr(t,0),ur(t,r),At(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Wr(t,Tt,bn);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=Md+500-Re(),10<e)){if(vl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=oh(Wr.bind(null,t,Tt,bn),e);break}Wr(t,Tt,bn);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-an(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fT(r/1960))-r,10<r){t.timeoutHandle=oh(Wr.bind(null,t,Tt,bn),r);break}Wr(t,Tt,bn);break;case 5:Wr(t,Tt,bn);break;default:throw Error(L(329))}}}return At(t,Re()),t.callbackNode===n?rv.bind(null,t):null}function Ah(t,e){var n=co;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&Ch(e)),t}function Ch(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function pT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~Od,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function Im(t){if(ie&6)throw Error(L(327));Ji();var e=vl(t,0);if(!(e&1))return At(t,Re()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var r=Jc(t);r!==0&&(e=r,n=Ah(t,r))}if(n===1)throw n=Vo,Jr(t,0),ur(t,e),At(t,Re()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,Tt,bn),At(t,Re()),null}function Vd(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(hs=Re()+500,hu&&Mr())}}function oi(t){pr!==null&&pr.tag===0&&!(ie&6)&&Ji();var e=ie;ie|=1;var n=zt.transition,r=oe;try{if(zt.transition=null,oe=1,t)return t()}finally{oe=r,zt.transition=n,ie=e,!(ie&6)&&Mr()}}function Ld(){kt=Wi.current,me(Wi)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HE(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Il();break;case 3:us(),me(St),me(ut),Ad();break;case 5:xd(r);break;case 4:us();break;case 13:me(Te);break;case 19:me(Te);break;case 10:Ed(r.type._context);break;case 22:case 23:Ld()}n=n.return}if(qe=t,De=t=Tr(t.current,null),Je=kt=e,Le=0,Vo=null,Od=mu=si=0,Tt=co=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Kr=null}return t}function iv(t,e){do{var n=De;try{if(wd(),Za.current=bl,Nl){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nl=!1}if(ii=0,He=Ve=Ie=null,lo=!1,Do=0,Dd.current=null,n===null||n.return===null){Le=1,Vo=e,De=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var _=f.alternate;_?(f.updateQueue=_.updateQueue,f.memoizedState=_.memoizedState,f.lanes=_.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=cm(a);if(R!==null){R.flags&=-257,hm(R,a,l,s,e),R.mode&1&&um(s,h,e),e=R,u=h;var N=e.updateQueue;if(N===null){var D=new Set;D.add(u),e.updateQueue=D}else N.add(u);break e}else{if(!(e&1)){um(s,h,e),jd();break e}u=Error(L(426))}}else if(_e&&l.mode&1){var F=cm(a);if(F!==null){!(F.flags&65536)&&(F.flags|=256),hm(F,a,l,s,e),vd(cs(u,l));break e}}s=u=cs(u,l),Le!==4&&(Le=2),co===null?co=[s]:co.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=$0(s,u,e);rm(s,x);break e;case 1:l=u;var v=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(wr===null||!wr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=z0(s,l,e);rm(s,b);break e}}s=s.return}while(s!==null)}av(n)}catch(j){e=j,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function sv(){var t=Dl.current;return Dl.current=bl,t===null?bl:t}function jd(){(Le===0||Le===3||Le===2)&&(Le=4),qe===null||!(si&268435455)&&!(mu&268435455)||ur(qe,Je)}function Vl(t,e){var n=ie;ie|=2;var r=sv();(qe!==t||Je!==e)&&(bn=null,Jr(t,e));do try{mT();break}catch(i){iv(t,i)}while(!0);if(wd(),ie=n,Dl.current=r,De!==null)throw Error(L(261));return qe=null,Je=0,Le}function mT(){for(;De!==null;)ov(De)}function gT(){for(;De!==null&&!$1();)ov(De)}function ov(t){var e=uv(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?av(t):De=e,Dd.current=null}function av(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uT(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,De=null;return}}else if(n=lT(n,e,kt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Le===0&&(Le=5)}function Wr(t,e,n){var r=oe,i=zt.transition;try{zt.transition=null,oe=1,yT(t,e,n,r)}finally{zt.transition=i,oe=r}return null}function yT(t,e,n,r){do Ji();while(pr!==null);if(ie&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Y1(t,s),t===qe&&(De=qe=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,cv(yl,function(){return Ji(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var a=oe;oe=1;var l=ie;ie|=4,Dd.current=null,hT(t,n),tv(n,t),LE(ih),_l=!!rh,ih=rh=null,t.current=n,dT(n),z1(),ie=l,oe=a,zt.transition=s}else t.current=n;if(ja&&(ja=!1,pr=t,Ml=i),s=t.pendingLanes,s===0&&(wr=null),W1(n.stateNode),At(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ol)throw Ol=!1,t=Sh,Sh=null,t;return Ml&1&&t.tag!==0&&Ji(),s=t.pendingLanes,s&1?t===xh?ho++:(ho=0,xh=t):ho=0,Mr(),null}function Ji(){if(pr!==null){var t=$y(Ml),e=zt.transition,n=oe;try{if(zt.transition=null,oe=16>t?16:t,pr===null)var r=!1;else{if(t=pr,pr=null,Ml=0,ie&6)throw Error(L(331));var i=ie;for(ie|=4,H=t.current;H!==null;){var s=H,a=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:uo(8,f,s)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var _=f.sibling,R=f.return;if(J0(f),f===h){H=null;break}if(_!==null){_.return=R,H=_;break}H=R}}}var N=s.alternate;if(N!==null){var D=N.child;if(D!==null){N.child=null;do{var F=D.sibling;D.sibling=null,D=F}while(D!==null)}}H=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,H=a;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:uo(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,H=x;break e}H=s.return}}var v=t.current;for(H=v;H!==null;){a=H;var A=a.child;if(a.subtreeFlags&2064&&A!==null)A.return=a,H=A;else e:for(a=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pu(9,l)}}catch(j){Ae(l,l.return,j)}if(l===a){H=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,H=b;break e}H=l.return}}if(ie=i,Mr(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ou,t)}catch{}r=!0}return r}finally{oe=n,zt.transition=e}}return!1}function Sm(t,e,n){e=cs(n,e),e=$0(t,e,1),t=_r(t,e,1),e=pt(),t!==null&&(qo(t,1,e),At(t,e))}function Ae(t,e,n){if(t.tag===3)Sm(t,t,n);else for(;e!==null;){if(e.tag===3){Sm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wr===null||!wr.has(r))){t=cs(n,t),t=z0(e,t,1),e=_r(e,t,1),t=pt(),e!==null&&(qo(e,1,t),At(e,t));break}}e=e.return}}function vT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pt(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Je&n)===n&&(Le===4||Le===3&&(Je&130023424)===Je&&500>Re()-Md?Jr(t,0):Od|=n),At(t,e)}function lv(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=pt();t=Wn(t,e),t!==null&&(qo(t,e,n),At(t,n))}function _T(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lv(t,n)}function wT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),lv(t,n)}var uv;uv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,aT(t,e,n);It=!!(t.flags&131072)}else It=!1,_e&&e.flags&1048576&&f0(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tl(t,e),t=e.pendingProps;var i=os(e,ut.current);Yi(e,n),i=Pd(null,e,r,t,i,n);var s=Rd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,Sl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Id(e),i.updater=fu,e.stateNode=i,i._reactInternals=e,fh(e,r,t,n),e=gh(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&gd(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TT(r),t=Yt(r,t),i){case 0:e=mh(null,e,r,t,n);break e;case 1:e=pm(null,e,r,t,n);break e;case 11:e=dm(null,e,r,t,n);break e;case 14:e=fm(null,e,r,Yt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),mh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),pm(t,e,r,i,n);case 3:e:{if(q0(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,_0(t,e),Rl(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=cs(Error(L(423)),e),e=mm(t,e,r,n,i);break e}else if(r!==i){i=cs(Error(L(424)),e),e=mm(t,e,r,n,i);break e}else for(Nt=vr(e.stateNode.containerInfo.firstChild),bt=e,_e=!0,Zt=null,n=y0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),r===i){e=qn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return w0(e),t===null&&ch(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,sh(r,i)?a=null:s!==null&&sh(r,s)&&(e.flags|=32),W0(t,e),ft(t,e,a,n),e.child;case 6:return t===null&&ch(e),null;case 13:return G0(t,e,n);case 4:return Sd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ls(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),dm(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,he(Cl,r._currentValue),r._currentValue=a,s!==null)if(un(s.value,a)){if(s.children===i.children&&!St.current){e=qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Fn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),hh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(L(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),hh(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Yi(e,n),i=Ht(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),fm(t,e,r,i,n);case 15:return B0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),tl(t,e),e.tag=1,xt(r)?(t=!0,Sl(e)):t=!1,Yi(e,n),U0(e,r,i),fh(e,r,i,n),gh(null,e,r,!0,t,n);case 19:return K0(t,e,n);case 22:return H0(t,e,n)}throw Error(L(156,e.tag))};function cv(t,e){return Ly(t,e)}function ET(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new ET(t,e,n,r)}function Fd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TT(t){if(typeof t=="function")return Fd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===id)return 11;if(t===sd)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Fd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Mi:return Zr(n.children,i,s,e);case rd:a=8,i|=8;break;case Lc:return t=$t(12,n,e,i|2),t.elementType=Lc,t.lanes=s,t;case jc:return t=$t(13,n,e,i),t.elementType=jc,t.lanes=s,t;case Fc:return t=$t(19,n,e,i),t.elementType=Fc,t.lanes=s,t;case wy:return gu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vy:a=10;break e;case _y:a=9;break e;case id:a=11;break e;case sd:a=14;break e;case or:a=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=$t(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zr(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function gu(t,e,n,r){return t=$t(22,t,r,e),t.elementType=wy,t.lanes=n,t.stateNode={isHidden:!1},t}function vc(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function _c(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zu(0),this.expirationTimes=Zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ud(t,e,n,r,i,s,a,l,u){return t=new IT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(s),t}function ST(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Oi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hv(t){if(!t)return Cr;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(xt(n))return h0(t,n,e)}return e}function dv(t,e,n,r,i,s,a,l,u){return t=Ud(n,r,!0,t,i,s,a,l,u),t.context=hv(null),n=t.current,r=pt(),i=Er(n),s=Fn(r,i),s.callback=e??null,_r(n,s,i),t.current.lanes=i,qo(t,i,r),At(t,r),t}function yu(t,e,n,r){var i=e.current,s=pt(),a=Er(i);return n=hv(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_r(i,e,a),t!==null&&(ln(t,i,a,s),Ja(t,i,a)),a}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $d(t,e){xm(t,e),(t=t.alternate)&&xm(t,e)}function xT(){return null}var fv=typeof reportError=="function"?reportError:function(t){console.error(t)};function zd(t){this._internalRoot=t}vu.prototype.render=zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));yu(t,e,null,null)};vu.prototype.unmount=zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;oi(function(){yu(null,t,null,null)}),e[Hn]=null}};function vu(t){this._internalRoot=t}vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&qy(t)}};function Bd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Am(){}function AT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Ll(a);s.call(h)}}var a=dv(e,r,t,0,null,!1,!1,"",Am);return t._reactRootContainer=a,t[Hn]=a.current,Po(t.nodeType===8?t.parentNode:t),oi(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Ll(u);l.call(h)}}var u=Ud(t,0,!1,null,null,!1,!1,"",Am);return t._reactRootContainer=u,t[Hn]=u.current,Po(t.nodeType===8?t.parentNode:t),oi(function(){yu(e,u,n,r)}),u}function wu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=Ll(a);l.call(u)}}yu(e,a,t,i)}else a=AT(n,e,t,i,r);return Ll(a)}zy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(ld(e,n|1),At(e,Re()),!(ie&6)&&(hs=Re()+500,Mr()))}break;case 13:oi(function(){var r=Wn(t,1);if(r!==null){var i=pt();ln(r,t,1,i)}}),$d(t,1)}};ud=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=pt();ln(e,t,134217728,n)}$d(t,134217728)}};By=function(t){if(t.tag===13){var e=Er(t),n=Wn(t,e);if(n!==null){var r=pt();ln(n,t,e,r)}$d(t,e)}};Hy=function(){return oe};Wy=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Qc=function(t,e,n){switch(e){case"input":if(zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cu(r);if(!i)throw Error(L(90));Ty(r),zc(r,i)}}}break;case"textarea":Sy(t,n);break;case"select":e=n.value,e!=null&&Gi(t,!!n.multiple,e,!1)}};Ny=Vd;by=oi;var CT={usingClientEntryPoint:!1,Events:[Ko,Fi,cu,Ry,ky,Vd]},Ks={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PT={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=My(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||xT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{ou=Fa.inject(PT),En=Fa}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CT;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bd(e))throw Error(L(200));return ST(t,e,null,n)};Mt.createRoot=function(t,e){if(!Bd(t))throw Error(L(299));var n=!1,r="",i=fv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ud(t,1,!1,null,null,n,!1,r,i),t[Hn]=e.current,Po(t.nodeType===8?t.parentNode:t),new zd(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=My(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return oi(t)};Mt.hydrate=function(t,e,n){if(!_u(e))throw Error(L(200));return wu(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!Bd(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=fv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=dv(e,null,t,1,n??null,i,!1,s,a),t[Hn]=e.current,Po(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vu(e)};Mt.render=function(t,e,n){if(!_u(e))throw Error(L(200));return wu(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!_u(t))throw Error(L(40));return t._reactRootContainer?(oi(function(){wu(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};Mt.unstable_batchedUpdates=Vd;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_u(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return wu(t,e,n,!1,r)};Mt.version="18.3.1-next-f1338f8080-20240426";function pv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pv)}catch(t){console.error(t)}}pv(),py.exports=Mt;var RT=py.exports,mv,Cm=RT;mv=Cm.createRoot,Cm.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),tt=(t,e)=>{const n=q.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:u,...h},f)=>q.createElement("svg",{ref:f,...kT,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${NT(t)}`,l].join(" "),...h},[...e.map(([m,_])=>q.createElement(m,_)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=tt("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=tt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=tt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=tt("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=tt("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=tt("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=tt("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=tt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=tt("MapPinned",[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0",key:"yrbn30"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",key:"112zkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=tt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=tt("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=tt("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=tt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=tt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=tt("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=tt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=tt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=()=>{};var Dm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},BT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},yv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let _=(l&15)<<2|h>>6,R=h&63;u||(R=64,a||(_=64)),r.push(n[f],n[m],n[_],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new HT;const _=s<<2|l>>4;if(r.push(_),h!==64){const R=l<<4&240|h>>2;if(r.push(R),m!==64){const N=h<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WT=function(t){const e=gv(t);return yv.encodeByteArray(e,!0)},jl=function(t){return WT(t).replace(/\./g,"")},vv=function(t){try{return yv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=()=>qT().__FIREBASE_DEFAULTS__,KT=()=>{if(typeof process>"u"||typeof Dm>"u")return;const t=Dm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vv(t[1]);return e&&JSON.parse(e)},Eu=()=>{try{return zT()||GT()||KT()||QT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_v=t=>{var e,n;return(n=(e=Eu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},XT=t=>{const e=_v(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wv=()=>{var t;return(t=Eu())==null?void 0:t.config},Ev=t=>{var e;return(e=Eu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Tv(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[jl(JSON.stringify(n)),jl(JSON.stringify(a)),""].join(".")}const fo={};function ZT(){const t={prod:[],emulator:[]};for(const e of Object.keys(fo))fo[e]?t.emulator.push(e):t.prod.push(e);return t}function eI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Om=!1;function Iv(t,e){if(typeof window>"u"||typeof document>"u"||!Es(window.location.host)||fo[t]===e||fo[t]||Om)return;fo[t]=e;function n(_){return`__firebase__banner__${_}`}const r="__firebase__banner",s=ZT().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,R){_.setAttribute("width","24"),_.setAttribute("id",R),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Om=!0,a()},_}function f(_,R){_.setAttribute("id",R),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function m(){const _=eI(r),R=n("text"),N=document.getElementById(R)||document.createElement("span"),D=n("learnmore"),F=document.getElementById(D)||document.createElement("a"),x=n("preprendIcon"),v=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const A=_.element;l(A),f(F,D);const b=h();u(v,x),A.append(v,N,F,b),document.body.appendChild(A)}s?(N.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function nI(){var e;const t=(e=Eu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sI(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oI(){return!nI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xv(){try{return typeof indexedDB=="object"}catch{return!1}}function Av(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function aI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lI,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?uI(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new hn(i,l,r)}}function uI(t,e){return t.replace(cI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cI=/\{\$([^}]+)}/g;function hI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Mm(s)&&Mm(a)){if(!Pr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dI(t,e){const n=new fI(t,e);return n.subscribe.bind(n)}class fI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Tc),i.error===void 0&&(i.error=Tc),i.complete===void 0&&(i.complete=Tc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=1e3,gI=2,yI=4*60*60*1e3,vI=.5;function Vm(t,e=mI,n=gI){const r=e*Math.pow(n,t),i=Math.round(vI*r*(Math.random()-.5)*2);return Math.min(yI,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EI(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wI(t){return t===qr?void 0:t}function EI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _I(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const II={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},SI=ne.INFO,xI={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},AI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tu{constructor(e){this.name=e,this._logLevel=SI,this._logHandler=AI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?II[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const CI=(t,e)=>e.some(n=>t instanceof n);let Lm,jm;function PI(){return Lm||(Lm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RI(){return jm||(jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cv=new WeakMap,Ph=new WeakMap,Pv=new WeakMap,Ic=new WeakMap,Hd=new WeakMap;function kI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Ir(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Cv.set(n,t)}).catch(()=>{}),Hd.set(e,t),e}function NI(t){if(Ph.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Ph.set(t,e)}let Rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ph.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bI(t){Rh=t(Rh)}function DI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sc(this),e,...n);return Pv.set(r,e.sort?e.sort():[e]),Ir(r)}:RI().includes(t)?function(...e){return t.apply(Sc(this),e),Ir(Cv.get(this))}:function(...e){return Ir(t.apply(Sc(this),e))}}function OI(t){return typeof t=="function"?DI(t):(t instanceof IDBTransaction&&NI(t),CI(t,PI())?new Proxy(t,Rh):t)}function Ir(t){if(t instanceof IDBRequest)return kI(t);if(Ic.has(t))return Ic.get(t);const e=OI(t);return e!==t&&(Ic.set(t,e),Hd.set(e,t)),e}const Sc=t=>Hd.get(t);function Rv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Ir(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Ir(a.result),u.oldVersion,u.newVersion,Ir(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const MI=["get","getKey","getAll","getAllKeys","count"],VI=["put","add","delete","clear"],xc=new Map;function Fm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xc.get(e))return xc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||MI.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return xc.set(e,s),s}bI(t=>({...t,get:(e,n,r)=>Fm(e,n)||t.get(e,n,r),has:(e,n)=>!!Fm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kh="@firebase/app",Um="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Tu("@firebase/app"),FI="@firebase/app-compat",UI="@firebase/analytics-compat",$I="@firebase/analytics",zI="@firebase/app-check-compat",BI="@firebase/app-check",HI="@firebase/auth",WI="@firebase/auth-compat",qI="@firebase/database",GI="@firebase/data-connect",KI="@firebase/database-compat",QI="@firebase/functions",XI="@firebase/functions-compat",YI="@firebase/installations",JI="@firebase/installations-compat",ZI="@firebase/messaging",eS="@firebase/messaging-compat",tS="@firebase/performance",nS="@firebase/performance-compat",rS="@firebase/remote-config",iS="@firebase/remote-config-compat",sS="@firebase/storage",oS="@firebase/storage-compat",aS="@firebase/firestore",lS="@firebase/ai",uS="@firebase/firestore-compat",cS="firebase",hS="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="[DEFAULT]",dS={[kh]:"fire-core",[FI]:"fire-core-compat",[$I]:"fire-analytics",[UI]:"fire-analytics-compat",[BI]:"fire-app-check",[zI]:"fire-app-check-compat",[HI]:"fire-auth",[WI]:"fire-auth-compat",[qI]:"fire-rtdb",[GI]:"fire-data-connect",[KI]:"fire-rtdb-compat",[QI]:"fire-fn",[XI]:"fire-fn-compat",[YI]:"fire-iid",[JI]:"fire-iid-compat",[ZI]:"fire-fcm",[eS]:"fire-fcm-compat",[tS]:"fire-perf",[nS]:"fire-perf-compat",[rS]:"fire-rc",[iS]:"fire-rc-compat",[sS]:"fire-gcs",[oS]:"fire-gcs-compat",[aS]:"fire-fst",[uS]:"fire-fst-compat",[lS]:"fire-vertex","fire-js":"fire-js",[cS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new Map,fS=new Map,bh=new Map;function $m(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(bh.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;bh.set(e,t);for(const n of Fl.values())$m(n,t);for(const n of fS.values())$m(n,t);return!0}function yi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new gi("app","Firebase",pS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=hS;function kv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Nh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=wv()),!n)throw Sr.create("no-options");const s=Fl.get(i);if(s){if(Pr(n,s.options)&&Pr(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const a=new TI(i);for(const u of bh.values())a.addComponent(u);const l=new mS(n,r,a);return Fl.set(i,l),l}function Wd(t=Nh){const e=Fl.get(t);if(!e&&t===Nh&&wv())return kv();if(!e)throw Sr.create("no-app",{appName:t});return e}function Bt(t,e,n){let r=dS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(a.join(" "));return}xn(new cn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="firebase-heartbeat-database",yS=1,Lo="firebase-heartbeat-store";let Ac=null;function Nv(){return Ac||(Ac=Rv(gS,yS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Lo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),Ac}async function vS(t){try{const n=(await Nv()).transaction(Lo),r=await n.objectStore(Lo).get(bv(t));return await n.done,r}catch(e){if(e instanceof hn)Gn.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function zm(t,e){try{const r=(await Nv()).transaction(Lo,"readwrite");await r.objectStore(Lo).put(e,bv(t)),await r.done}catch(n){if(n instanceof hn)Gn.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function bv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=1024,wS=30;class ES{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>wS){const a=SS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bm(),{heartbeatsToSend:r,unsentEntries:i}=TS(this._heartbeatsCache.heartbeats),s=jl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gn.warn(n),""}}}function Bm(){return new Date().toISOString().substring(0,10)}function TS(t,e=_S){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Hm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class IS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xv()?Av().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Hm(t){return jl(JSON.stringify({version:2,heartbeats:t})).length}function SS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(t){xn(new cn("platform-logger",e=>new LI(e),"PRIVATE")),xn(new cn("heartbeat",e=>new ES(e),"PRIVATE")),Bt(kh,Um,t),Bt(kh,Um,"esm2020"),Bt("fire-js","")}xS("");var AS="firebase",CS="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(AS,CS,"app");const Dv="@firebase/installations",qd="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=1e4,Mv=`w:${qd}`,Vv="FIS_v2",PS="https://firebaseinstallations.googleapis.com/v1",RS=60*60*1e3,kS="installations",NS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ai=new gi(kS,NS,bS);function Lv(t){return t instanceof hn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv({projectId:t}){return`${PS}/projects/${t}/installations`}function Fv(t){return{token:t.token,requestStatus:2,expiresIn:OS(t.expiresIn),creationTime:Date.now()}}async function Uv(t,e){const r=(await e.json()).error;return ai.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $v({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function DS(t,{refreshToken:e}){const n=$v(t);return n.append("Authorization",MS(e)),n}async function zv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function OS(t){return Number(t.replace("s","000"))}function MS(t){return`${Vv} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=jv(t),i=$v(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:Vv,appId:t.appId,sdkVersion:Mv},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await zv(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Fv(h.authToken)}}else throw await Uv("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=/^[cdef][\w-]{21}$/,Dh="";function FS(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=US(t);return jS.test(n)?n:Dh}catch{return Dh}}function US(t){return LS(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=new Map;function Wv(t,e){const n=Iu(t);qv(n,e),$S(n,e)}function qv(t,e){const n=Hv.get(t);if(n)for(const r of n)r(e)}function $S(t,e){const n=zS();n&&n.postMessage({key:t,fid:e}),BS()}let Xr=null;function zS(){return!Xr&&"BroadcastChannel"in self&&(Xr=new BroadcastChannel("[Firebase] FID Change"),Xr.onmessage=t=>{qv(t.data.key,t.data.fid)}),Xr}function BS(){Hv.size===0&&Xr&&(Xr.close(),Xr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="firebase-installations-database",WS=1,li="firebase-installations-store";let Cc=null;function Gd(){return Cc||(Cc=Rv(HS,WS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(li)}}})),Cc}async function Ul(t,e){const n=Iu(t),i=(await Gd()).transaction(li,"readwrite"),s=i.objectStore(li),a=await s.get(n);return await s.put(e,n),await i.done,(!a||a.fid!==e.fid)&&Wv(t,e.fid),e}async function Gv(t){const e=Iu(t),r=(await Gd()).transaction(li,"readwrite");await r.objectStore(li).delete(e),await r.done}async function Su(t,e){const n=Iu(t),i=(await Gd()).transaction(li,"readwrite"),s=i.objectStore(li),a=await s.get(n),l=e(a);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!a||a.fid!==l.fid)&&Wv(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(t){let e;const n=await Su(t.appConfig,r=>{const i=qS(r),s=GS(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Dh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function qS(t){const e=t||{fid:FS(),registrationStatus:0};return Kv(e)}function GS(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ai.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=KS(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QS(t)}:{installationEntry:e}}async function KS(t,e){try{const n=await VS(t,e);return Ul(t.appConfig,n)}catch(n){throw Lv(n)&&n.customData.serverCode===409?await Gv(t.appConfig):await Ul(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QS(t){let e=await Wm(t.appConfig);for(;e.registrationStatus===1;)await Bv(100),e=await Wm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Kd(t);return r||n}return e}function Wm(t){return Su(t,e=>{if(!e)throw ai.create("installation-not-found");return Kv(e)})}function Kv(t){return XS(t)?{fid:t.fid,registrationStatus:0}:t}function XS(t){return t.registrationStatus===1&&t.registrationTime+Ov<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS({appConfig:t,heartbeatServiceProvider:e},n){const r=JS(t,n),i=DS(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:Mv,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await zv(()=>fetch(r,l));if(u.ok){const h=await u.json();return Fv(h)}else throw await Uv("Generate Auth Token",u)}function JS(t,{fid:e}){return`${jv(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qd(t,e=!1){let n;const r=await Su(t.appConfig,s=>{if(!Qv(s))throw ai.create("not-registered");const a=s.authToken;if(!e&&tx(a))return s;if(a.requestStatus===1)return n=ZS(t,e),s;{if(!navigator.onLine)throw ai.create("app-offline");const l=rx(s);return n=ex(t,l),l}});return n?await n:r.authToken}async function ZS(t,e){let n=await qm(t.appConfig);for(;n.authToken.requestStatus===1;)await Bv(100),n=await qm(t.appConfig);const r=n.authToken;return r.requestStatus===0?Qd(t,e):r}function qm(t){return Su(t,e=>{if(!Qv(e))throw ai.create("not-registered");const n=e.authToken;return ix(n)?{...e,authToken:{requestStatus:0}}:e})}async function ex(t,e){try{const n=await YS(t,e),r={...e,authToken:n};return await Ul(t.appConfig,r),n}catch(n){if(Lv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Gv(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ul(t.appConfig,r)}throw n}}function Qv(t){return t!==void 0&&t.registrationStatus===2}function tx(t){return t.requestStatus===2&&!nx(t)}function nx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+RS}function rx(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function ix(t){return t.requestStatus===1&&t.requestTime+Ov<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t){const e=t,{installationEntry:n,registrationPromise:r}=await Kd(e);return r?r.catch(console.error):Qd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(t,e=!1){const n=t;return await ax(n),(await Qd(n,e)).token}async function ax(t){const{registrationPromise:e}=await Kd(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(t){if(!t||!t.options)throw Pc("App Configuration");if(!t.name)throw Pc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Pc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Pc(t){return ai.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="installations",ux="installations-internal",cx=t=>{const e=t.getProvider("app").getImmediate(),n=lx(e),r=yi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},hx=t=>{const e=t.getProvider("app").getImmediate(),n=yi(e,Xv).getImmediate();return{getId:()=>sx(n),getToken:i=>ox(n,i)}};function dx(){xn(new cn(Xv,cx,"PUBLIC")),xn(new cn(ux,hx,"PRIVATE"))}dx();Bt(Dv,qd);Bt(Dv,qd,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="analytics",fx="firebase_id",px="origin",mx=60*1e3,gx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new Tu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Dt=new gi("analytics","Analytics",yx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t){if(!t.startsWith(Xd)){const e=Dt.create("invalid-gtag-resource",{gtagURL:t});return mt.warn(e.message),""}return t}function Yv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function _x(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function wx(t,e){const n=_x("firebase-js-sdk-policy",{createScriptURL:vx}),r=document.createElement("script"),i=`${Xd}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ex(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Tx(t,e,n,r,i,s){const a=r[i];try{if(a)await e[a];else{const u=(await Yv(n)).find(h=>h.measurementId===i);u&&await e[u.appId]}}catch(l){mt.error(l)}t("config",i,s)}async function Ix(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await Yv(n);for(const u of a){const h=l.find(m=>m.measurementId===u),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){mt.error(s)}}function Sx(t,e,n,r){async function i(s,...a){try{if(s==="event"){const[l,u]=a;await Ix(t,e,n,l,u)}else if(s==="config"){const[l,u]=a;await Tx(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=a;t("consent",l,u)}else if(s==="get"){const[l,u,h]=a;t("get",l,u,h)}else if(s==="set"){const[l]=a;t("set",l)}else t(s,...a)}catch(l){mt.error(l)}}return i}function xx(t,e,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Sx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Ax(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Xd)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=30,Px=1e3;class Rx{constructor(e={},n=Px){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jv=new Rx;function kx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Nx(t){var a;const{appId:e,apiKey:n}=t,r={method:"GET",headers:kx(n)},i=gx.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(a=u.error)!=null&&a.message&&(l=u.error.message)}catch{}throw Dt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function bx(t,e=Jv,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Dt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Dt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Mx;return setTimeout(async()=>{l.abort()},mx),Zv({appId:r,apiKey:i,measurementId:s},a,l,e)}async function Zv(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Jv){var l;const{appId:s,measurementId:a}=t;try{await Dx(r,e)}catch(u){if(a)return mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw u}try{const u=await Nx(t);return i.deleteThrottleMetadata(s),u}catch(u){const h=u;if(!Ox(h)){if(i.deleteThrottleMetadata(s),a)return mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:s,measurementId:a};throw u}const f=Number((l=h==null?void 0:h.customData)==null?void 0:l.httpStatus)===503?Vm(n,i.intervalMillis,Cx):Vm(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),mt.debug(`Calling attemptFetch again in ${f} millis`),Zv(t,m,r,i)}}function Dx(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ox(t){if(!(t instanceof hn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Mx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Vx(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,a={...r,send_to:s};t("event",n,a)}}async function Lx(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jx(){if(xv())try{await Av()}catch(t){return mt.warn(Dt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return mt.warn(Dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Fx(t,e,n,r,i,s,a){const l=bx(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>mt.error(_)),e.push(l);const u=jx().then(_=>{if(_)return r.getId()}),[h,f]=await Promise.all([l,u]);Ax(s)||wx(s,h.measurementId),i("js",new Date);const m=(a==null?void 0:a.config)??{};return m[px]="firebase",m.update=!0,f!=null&&(m[fx]=f),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e){this.app=e}_delete(){return delete Zi[this.app.options.appId],Promise.resolve()}}let Zi={},Gm=[];const Km={};let Rc="dataLayer",$x="gtag",Qm,Yd,Xm=!1;function zx(){const t=[];if(Sv()&&t.push("This is a browser extension environment."),aI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Dt.create("invalid-analytics-context",{errorInfo:e});mt.warn(n.message)}}function Bx(t,e,n){zx();const r=t.options.appId;if(!r)throw Dt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Dt.create("no-api-key");if(Zi[r]!=null)throw Dt.create("already-exists",{id:r});if(!Xm){Ex(Rc);const{wrappedGtag:s,gtagCore:a}=xx(Zi,Gm,Km,Rc,$x);Yd=s,Qm=a,Xm=!0}return Zi[r]=Fx(t,Gm,Km,e,Qm,Rc,n),new Ux(t)}function Hx(t=Wd()){t=gt(t);const e=yi(t,$l);return e.isInitialized()?e.getImmediate():Wx(t)}function Wx(t,e={}){const n=yi(t,$l);if(n.isInitialized()){const i=n.getImmediate();if(Pr(e,n.getOptions()))return i;throw Dt.create("already-initialized")}return n.initialize({options:e})}function qx(t,e,n){t=gt(t),Lx(Yd,Zi[t.app.options.appId],e,n).catch(r=>mt.error(r))}function Gx(t,e,n,r){t=gt(t),Vx(Yd,Zi[t.app.options.appId],e,n,r).catch(i=>mt.error(i))}const Ym="@firebase/analytics",Jm="0.10.19";function Kx(){xn(new cn($l,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Bx(r,i,n)},"PUBLIC")),xn(new cn("analytics-internal",t,"PRIVATE")),Bt(Ym,Jm),Bt(Ym,Jm,"esm2020");function t(e){try{const n=e.getProvider($l).getImmediate();return{logEvent:(r,i,s)=>Gx(n,r,i,s),setUserProperties:(r,i)=>qx(n,r,i)}}catch(n){throw Dt.create("interop-component-reg-failed",{reason:n})}}}Kx();function e_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qx=e_,t_=new gi("auth","Firebase",e_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Tu("@firebase/auth");function Xx(t,...e){zl.logLevel<=ne.WARN&&zl.warn(`Auth (${Ts}): ${t}`,...e)}function sl(t,...e){zl.logLevel<=ne.ERROR&&zl.error(`Auth (${Ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,...e){throw Zd(t,...e)}function In(t,...e){return Zd(t,...e)}function Jd(t,e,n){const r={...Qx(),[e]:n};return new gi("auth","Firebase",r).create(e,{appName:t.name})}function xr(t){return Jd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&An(t,"argument-error"),Jd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return t_.create(t,...e)}function X(t,e,...n){if(!t)throw Zd(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sl(e),new Error(e)}function Kn(t,e){t||Ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Jx(){return Zm()==="http:"||Zm()==="https:"}function Zm(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jx()||Sv()||"connection"in navigator)?navigator.onLine:!0}function eA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=tI()||iI()}get(){return Zx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rA=new Yo(3e4,6e4);function tf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Is(t,e,n,r,i={}){return r_(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Xo({key:t.config.apiKey,...a}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return rI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Es(t.emulatorConfig.host)&&(h.credentials="include"),n_.fetch()(await i_(t,t.config.apiHost,n,l),h)})}async function r_(t,e,n){t._canInitEmulator=!1;const r={...tA,...e};try{const i=new sA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ua(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ua(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ua(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ua(t,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Jd(t,f,h);An(t,f)}}catch(i){if(i instanceof hn)throw i;An(t,"network-request-failed",{message:String(i)})}}async function iA(t,e,n,r,i={}){const s=await Is(t,e,n,r,i);return"mfaPendingCredential"in s&&An(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function i_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,a=s.config.emulator?ef(t.config,i):`${t.config.apiScheme}://${i}`;return nA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class sA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),rA.get())})}}function Ua(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=In(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e){return Is(t,"POST","/v1/accounts:delete",e)}async function Bl(t,e){return Is(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aA(t,e=!1){const n=gt(t),r=await n.getIdToken(e),i=nf(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:po(kc(i.auth_time)),issuedAtTime:po(kc(i.iat)),expirationTime:po(kc(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kc(t){return Number(t)*1e3}function nf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sl("JWT malformed, contained fewer than 3 sections"),null;try{const i=vv(n);return i?JSON.parse(i):(sl("Failed to decode base64 JWT payload"),null)}catch(i){return sl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function eg(t){const e=nf(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&lA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=po(this.lastLoginAt),this.creationTime=po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await jo(t,Bl(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?s_(i.providerUserInfo):[],a=hA(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Mh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function cA(t){const e=gt(t);await Hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function s_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(t,e){const n=await r_(t,{},async()=>{const r=Xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=await i_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Es(t.emulatorConfig.host)&&(u.credentials="include"),n_.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fA(t,e){return Is(t,"POST","/v2/accounts:revokeToken",tf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=eg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await dA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new es;return r&&(X(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new uA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await jo(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aA(this,e)}reload(){return cA(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await jo(this,oA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:_,isAnonymous:R,providerData:N,stsTokenManager:D}=n;X(m&&D,e,"internal-error");const F=es.fromJSON(this.name,D);X(typeof m=="string",e,"internal-error"),sr(r,e.name),sr(i,e.name),X(typeof _=="boolean",e,"internal-error"),X(typeof R=="boolean",e,"internal-error"),sr(s,e.name),sr(a,e.name),sr(l,e.name),sr(u,e.name),sr(h,e.name),sr(f,e.name);const x=new sn({uid:m,auth:e,email:i,emailVerified:_,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:s,tenantId:l,stsTokenManager:F,createdAt:h,lastLoginAt:f});return N&&Array.isArray(N)&&(x.providerData=N.map(v=>({...v}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new es;i.updateFromServerResponse(n);const s=new sn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?s_(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new es;l.updateFromIdToken(r);const u=new sn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Mh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=new Map;function jn(t){Kn(t instanceof Function,"Expected a class definition");let e=tg.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o_.type="NONE";const ng=o_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Bl(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(jn(ng),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||jn(ng);const a=ol(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const _=await Bl(e,{idToken:f}).catch(()=>{});if(!_)break;m=await sn._fromGetAccountInfoResponse(e,_,f)}else m=sn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ts(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new ts(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d_(e))return"Blackberry";if(f_(e))return"Webos";if(l_(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(h_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function a_(t=ct()){return/firefox\//i.test(t)}function l_(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(t=ct()){return/crios\//i.test(t)}function c_(t=ct()){return/iemobile/i.test(t)}function h_(t=ct()){return/android/i.test(t)}function d_(t=ct()){return/blackberry/i.test(t)}function f_(t=ct()){return/webos/i.test(t)}function rf(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pA(t=ct()){var e;return rf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function mA(){return sI()&&document.documentMode===10}function p_(t=ct()){return rf(t)||h_(t)||f_(t)||d_(t)||/windows phone/i.test(t)||c_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t,e=[]){let n;switch(t){case"Browser":n=rg(ct());break;case"Worker":n=`${rg(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e={}){return Is(t,"GET","/v2/passwordPolicy",tf(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=6;class _A{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??vA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ig(this),this.idTokenSubscription=new ig(this),this.beforeStateQueue=new gA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Bl(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(tn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(xr(this));const n=e?gt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yA(this),n=new _A(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Xx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Jo(t){return gt(t)}class ig{constructor(e){this.auth=e,this.observer=null,this.addObserver=dI(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function EA(t){sf=t}function TA(t){return sf.loadJS(t)}function IA(){return sf.gapiScript}function SA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t,e){const n=yi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Pr(s,e??{}))return i;An(i,"already-initialized")}return n.initialize({options:e})}function AA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CA(t,e,n){const r=Jo(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=g_(e),{host:a,port:l}=PA(e),u=l===null?"":`:${l}`,h={url:`${s}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Pr(h,r.config.emulator)&&Pr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Es(a)?(Tv(`${s}//${a}${u}`),Iv("Auth",!0)):RA()}function g_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PA(t){const e=g_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:sg(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:sg(a)}}}function sg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return iA(t,"POST","/v1/accounts:signInWithIdp",tf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA="http://localhost";class ui extends y_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ui(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new ui(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:kA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends of{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Zo{constructor(){super("facebook.com")}static credential(e){return ui._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ui._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Zo{constructor(){super("github.com")}static credential(e){return ui._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Zo{constructor(){super("twitter.com")}static credential(e,n){return ui._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sn._fromIdTokenResponse(e,r,i),a=og(r);return new ds({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=og(r);return new ds({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function og(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends hn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wl(e,n,r,i)}}function v_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wl._fromErrorAndOperation(t,s,e,r):s})}async function NA(t,e,n=!1){const r=await jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(xr(r));const i="reauthenticate";try{const s=await jo(t,v_(r,i,e,t),n);X(s.idToken,r,"internal-error");const a=nf(s.idToken);X(a,r,"internal-error");const{sub:l}=a;return X(t.uid===l,r,"user-mismatch"),ds._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&An(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t,e,n=!1){if(tn(t.app))return Promise.reject(xr(t));const r="signIn",i=await v_(t,r,e),s=await ds._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function OA(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function MA(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}function VA(t,e,n,r){return gt(t).onAuthStateChanged(e,n,r)}function LA(t){return gt(t).signOut()}const ql="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ql,"1"),this.storage.removeItem(ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=1e3,FA=10;class w_ extends __{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);mA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}w_.type="LOCAL";const UA=w_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_ extends __{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}E_.type="SESSION";const T_=E_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(n.origin,s)),u=await $A(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=af("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function BA(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function HA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function qA(){return I_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="firebaseLocalStorageDb",GA=1,Gl="firebaseLocalStorage",x_="fbase_key";class ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Au(t,e){return t.transaction([Gl],e?"readwrite":"readonly").objectStore(Gl)}function KA(){const t=indexedDB.deleteDatabase(S_);return new ea(t).toPromise()}function Vh(){const t=indexedDB.open(S_,GA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gl,{keyPath:x_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gl)?e(r):(r.close(),await KA(),e(await Vh()))})})}async function ag(t,e,n){const r=Au(t,!0).put({[x_]:e,value:n});return new ea(r).toPromise()}async function QA(t,e){const n=Au(t,!1).get(e),r=await new ea(n).toPromise();return r===void 0?null:r.value}function lg(t,e){const n=Au(t,!0).delete(e);return new ea(n).toPromise()}const XA=800,YA=3;class A_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xu._getInstance(qA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await HA(),!this.activeServiceWorker)return;this.sender=new zA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vh();return await ag(e,ql,"1"),await lg(e,ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ag(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Au(i,!1).getAll();return new ea(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}A_.type="LOCAL";const JA=A_;new Yo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t,e){return e?jn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends y_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZA(t){return DA(t.auth,new lf(t),t.bypassAuthState)}function eC(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),bA(n,new lf(t),t.bypassAuthState)}async function tC(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),NA(n,new lf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZA;case"linkViaPopup":case"linkViaRedirect":return tC;case"reauthViaPopup":case"reauthViaRedirect":return eC;default:An(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new Yo(2e3,1e4);class qi extends P_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,qi.currentPopupAction&&qi.currentPopupAction.cancel(),qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nC.get())};e()}}qi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="pendingRedirect",al=new Map;class iC extends P_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const r=await sC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sC(t,e){const n=k_(e),r=R_(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function oC(t,e){return R_(t)._set(k_(e),"true")}function aC(t,e){al.set(t._key(),e)}function R_(t){return jn(t._redirectPersistence)}function k_(t){return ol(rC,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t,e,n){return uC(t,e,n)}async function uC(t,e,n){if(tn(t.app))return Promise.reject(xr(t));const r=Jo(t);Yx(t,e,of),await r._initializationPromise;const i=C_(r,n);return await oC(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function cC(t,e){return await Jo(t)._initializationPromise,N_(t,e,!1)}async function N_(t,e,n=!1){if(tn(t.app))return Promise.reject(xr(t));const r=Jo(t),i=C_(r,e),a=await new iC(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=10*60*1e3;class dC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!b_(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(In(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hC&&this.cachedEventUids.clear(),this.cachedEventUids.has(ug(e))}saveEventToCache(e){this.cachedEventUids.add(ug(e)),this.lastProcessedEventTime=Date.now()}}function ug(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function b_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t,e={}){return Is(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gC=/^https?/;async function yC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pC(t);for(const n of e)try{if(vC(n))return}catch{}An(t,"unauthorized-domain")}function vC(t){const e=Oh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!gC.test(n))return!1;if(mC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=new Yo(3e4,6e4);function cg(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wC(t){return new Promise((e,n)=>{var i,s,a;function r(){cg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cg(),n(In(t,"network-request-failed"))},timeout:_C.get()})}if((s=(i=Sn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((a=Sn().gapi)!=null&&a.load)r();else{const l=SA("iframefcb");return Sn()[l]=()=>{gapi.load?r():n(In(t,"network-request-failed"))},TA(`${IA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ll=null,e})}let ll=null;function EC(t){return ll=ll||wC(t),ll}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=new Yo(5e3,15e3),IC="__/auth/iframe",SC="emulator/auth/iframe",xC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CC(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ef(e,SC):`https://${t.config.authDomain}/${IC}`,r={apiKey:e.apiKey,appName:t.name,v:Ts},i=AC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xo(r).slice(1)}`}async function PC(t){const e=await EC(t),n=Sn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:CC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=In(t,"network-request-failed"),l=Sn().setTimeout(()=>{s(a)},TC.get());function u(){Sn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kC=500,NC=600,bC="_blank",DC="http://localhost";class hg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OC(t,e,n,r=kC,i=NC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...RC,width:r.toString(),height:i.toString(),top:s,left:a},h=ct().toLowerCase();n&&(l=u_(h)?bC:n),a_(h)&&(e=e||DC,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[R,N])=>`${_}${R}=${N},`,"");if(pA(h)&&l!=="_self")return MC(e||"",l),new hg(null);const m=window.open(e||"",l,f);X(m,t,"popup-blocked");try{m.focus()}catch{}return new hg(m)}function MC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC="__/auth/handler",LC="emulator/auth/handler",jC=encodeURIComponent("fac");async function dg(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ts,eventId:i};if(e instanceof of){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",hI(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Zo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${jC}=${encodeURIComponent(u)}`:"";return`${FC(t)}?${Xo(l).slice(1)}${h}`}function FC({config:t}){return t.emulator?ef(t,LC):`https://${t.authDomain}/${VC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="webStorageSupport";class UC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T_,this._completeRedirectFn=N_,this._overrideRedirectResult=aC}async _openPopup(e,n,r,i){var a;Kn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await dg(e,n,r,Oh(),i);return OC(e,s,af())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await dg(e,n,r,Oh(),i);return BA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PC(e),r=new dC(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nc,{type:Nc},i=>{var a;const s=(a=i==null?void 0:i[0])==null?void 0:a[Nc];s!==void 0&&n(!!s),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return p_()||l_()||rf()}}const $C=UC;var fg="@firebase/auth",pg="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HC(t){xn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;X(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m_(t)},h=new wA(r,i,s,u);return AA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new cn("auth-internal",e=>{const n=Jo(e.getProvider("auth").getImmediate());return(r=>new zC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(fg,pg,BC(t)),Bt(fg,pg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=5*60,qC=Ev("authIdTokenMaxAge")||WC;let mg=null;const GC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qC)return;const i=n==null?void 0:n.token;mg!==i&&(mg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function KC(t=Wd()){const e=yi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xA(t,{popupRedirectResolver:$C,persistence:[JA,UA,T_]}),r=Ev("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=GC(s.toString());MA(n,a,()=>a(n.currentUser)),OA(n,l=>a(l))}}const i=_v("auth");return i&&CA(n,`http://${i}`),n}function QC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}EA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=In("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",QC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HC("Browser");var gg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uf;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function E(){}E.prototype=g.prototype,w.F=g.prototype,w.prototype=new E,w.prototype.constructor=w,w.D=function(I,S,C){for(var T=Array(arguments.length-2),te=2;te<arguments.length;te++)T[te-2]=arguments[te];return g.prototype[S].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,E){E||(E=0);const I=Array(16);if(typeof g=="string")for(var S=0;S<16;++S)I[S]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(S=0;S<16;++S)I[S]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=w.g[0],E=w.g[1],S=w.g[2];let C=w.g[3],T;T=g+(C^E&(S^C))+I[0]+3614090360&4294967295,g=E+(T<<7&4294967295|T>>>25),T=C+(S^g&(E^S))+I[1]+3905402710&4294967295,C=g+(T<<12&4294967295|T>>>20),T=S+(E^C&(g^E))+I[2]+606105819&4294967295,S=C+(T<<17&4294967295|T>>>15),T=E+(g^S&(C^g))+I[3]+3250441966&4294967295,E=S+(T<<22&4294967295|T>>>10),T=g+(C^E&(S^C))+I[4]+4118548399&4294967295,g=E+(T<<7&4294967295|T>>>25),T=C+(S^g&(E^S))+I[5]+1200080426&4294967295,C=g+(T<<12&4294967295|T>>>20),T=S+(E^C&(g^E))+I[6]+2821735955&4294967295,S=C+(T<<17&4294967295|T>>>15),T=E+(g^S&(C^g))+I[7]+4249261313&4294967295,E=S+(T<<22&4294967295|T>>>10),T=g+(C^E&(S^C))+I[8]+1770035416&4294967295,g=E+(T<<7&4294967295|T>>>25),T=C+(S^g&(E^S))+I[9]+2336552879&4294967295,C=g+(T<<12&4294967295|T>>>20),T=S+(E^C&(g^E))+I[10]+4294925233&4294967295,S=C+(T<<17&4294967295|T>>>15),T=E+(g^S&(C^g))+I[11]+2304563134&4294967295,E=S+(T<<22&4294967295|T>>>10),T=g+(C^E&(S^C))+I[12]+1804603682&4294967295,g=E+(T<<7&4294967295|T>>>25),T=C+(S^g&(E^S))+I[13]+4254626195&4294967295,C=g+(T<<12&4294967295|T>>>20),T=S+(E^C&(g^E))+I[14]+2792965006&4294967295,S=C+(T<<17&4294967295|T>>>15),T=E+(g^S&(C^g))+I[15]+1236535329&4294967295,E=S+(T<<22&4294967295|T>>>10),T=g+(S^C&(E^S))+I[1]+4129170786&4294967295,g=E+(T<<5&4294967295|T>>>27),T=C+(E^S&(g^E))+I[6]+3225465664&4294967295,C=g+(T<<9&4294967295|T>>>23),T=S+(g^E&(C^g))+I[11]+643717713&4294967295,S=C+(T<<14&4294967295|T>>>18),T=E+(C^g&(S^C))+I[0]+3921069994&4294967295,E=S+(T<<20&4294967295|T>>>12),T=g+(S^C&(E^S))+I[5]+3593408605&4294967295,g=E+(T<<5&4294967295|T>>>27),T=C+(E^S&(g^E))+I[10]+38016083&4294967295,C=g+(T<<9&4294967295|T>>>23),T=S+(g^E&(C^g))+I[15]+3634488961&4294967295,S=C+(T<<14&4294967295|T>>>18),T=E+(C^g&(S^C))+I[4]+3889429448&4294967295,E=S+(T<<20&4294967295|T>>>12),T=g+(S^C&(E^S))+I[9]+568446438&4294967295,g=E+(T<<5&4294967295|T>>>27),T=C+(E^S&(g^E))+I[14]+3275163606&4294967295,C=g+(T<<9&4294967295|T>>>23),T=S+(g^E&(C^g))+I[3]+4107603335&4294967295,S=C+(T<<14&4294967295|T>>>18),T=E+(C^g&(S^C))+I[8]+1163531501&4294967295,E=S+(T<<20&4294967295|T>>>12),T=g+(S^C&(E^S))+I[13]+2850285829&4294967295,g=E+(T<<5&4294967295|T>>>27),T=C+(E^S&(g^E))+I[2]+4243563512&4294967295,C=g+(T<<9&4294967295|T>>>23),T=S+(g^E&(C^g))+I[7]+1735328473&4294967295,S=C+(T<<14&4294967295|T>>>18),T=E+(C^g&(S^C))+I[12]+2368359562&4294967295,E=S+(T<<20&4294967295|T>>>12),T=g+(E^S^C)+I[5]+4294588738&4294967295,g=E+(T<<4&4294967295|T>>>28),T=C+(g^E^S)+I[8]+2272392833&4294967295,C=g+(T<<11&4294967295|T>>>21),T=S+(C^g^E)+I[11]+1839030562&4294967295,S=C+(T<<16&4294967295|T>>>16),T=E+(S^C^g)+I[14]+4259657740&4294967295,E=S+(T<<23&4294967295|T>>>9),T=g+(E^S^C)+I[1]+2763975236&4294967295,g=E+(T<<4&4294967295|T>>>28),T=C+(g^E^S)+I[4]+1272893353&4294967295,C=g+(T<<11&4294967295|T>>>21),T=S+(C^g^E)+I[7]+4139469664&4294967295,S=C+(T<<16&4294967295|T>>>16),T=E+(S^C^g)+I[10]+3200236656&4294967295,E=S+(T<<23&4294967295|T>>>9),T=g+(E^S^C)+I[13]+681279174&4294967295,g=E+(T<<4&4294967295|T>>>28),T=C+(g^E^S)+I[0]+3936430074&4294967295,C=g+(T<<11&4294967295|T>>>21),T=S+(C^g^E)+I[3]+3572445317&4294967295,S=C+(T<<16&4294967295|T>>>16),T=E+(S^C^g)+I[6]+76029189&4294967295,E=S+(T<<23&4294967295|T>>>9),T=g+(E^S^C)+I[9]+3654602809&4294967295,g=E+(T<<4&4294967295|T>>>28),T=C+(g^E^S)+I[12]+3873151461&4294967295,C=g+(T<<11&4294967295|T>>>21),T=S+(C^g^E)+I[15]+530742520&4294967295,S=C+(T<<16&4294967295|T>>>16),T=E+(S^C^g)+I[2]+3299628645&4294967295,E=S+(T<<23&4294967295|T>>>9),T=g+(S^(E|~C))+I[0]+4096336452&4294967295,g=E+(T<<6&4294967295|T>>>26),T=C+(E^(g|~S))+I[7]+1126891415&4294967295,C=g+(T<<10&4294967295|T>>>22),T=S+(g^(C|~E))+I[14]+2878612391&4294967295,S=C+(T<<15&4294967295|T>>>17),T=E+(C^(S|~g))+I[5]+4237533241&4294967295,E=S+(T<<21&4294967295|T>>>11),T=g+(S^(E|~C))+I[12]+1700485571&4294967295,g=E+(T<<6&4294967295|T>>>26),T=C+(E^(g|~S))+I[3]+2399980690&4294967295,C=g+(T<<10&4294967295|T>>>22),T=S+(g^(C|~E))+I[10]+4293915773&4294967295,S=C+(T<<15&4294967295|T>>>17),T=E+(C^(S|~g))+I[1]+2240044497&4294967295,E=S+(T<<21&4294967295|T>>>11),T=g+(S^(E|~C))+I[8]+1873313359&4294967295,g=E+(T<<6&4294967295|T>>>26),T=C+(E^(g|~S))+I[15]+4264355552&4294967295,C=g+(T<<10&4294967295|T>>>22),T=S+(g^(C|~E))+I[6]+2734768916&4294967295,S=C+(T<<15&4294967295|T>>>17),T=E+(C^(S|~g))+I[13]+1309151649&4294967295,E=S+(T<<21&4294967295|T>>>11),T=g+(S^(E|~C))+I[4]+4149444226&4294967295,g=E+(T<<6&4294967295|T>>>26),T=C+(E^(g|~S))+I[11]+3174756917&4294967295,C=g+(T<<10&4294967295|T>>>22),T=S+(g^(C|~E))+I[2]+718787259&4294967295,S=C+(T<<15&4294967295|T>>>17),T=E+(C^(S|~g))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.v=function(w,g){g===void 0&&(g=w.length);const E=g-this.blockSize,I=this.C;let S=this.h,C=0;for(;C<g;){if(S==0)for(;C<=E;)i(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<g;)if(I[S++]=w.charCodeAt(C++),S==this.blockSize){i(this,I),S=0;break}}else for(;C<g;)if(I[S++]=w[C++],S==this.blockSize){i(this,I),S=0;break}}this.h=S,this.o+=g},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;g=this.o*8;for(var E=w.length-8;E<w.length;++E)w[E]=g&255,g/=256;for(this.v(w),w=Array(16),g=0,E=0;E<4;++E)for(let I=0;I<32;I+=8)w[g++]=this.g[E]>>>I&255;return w};function s(w,g){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=g(w)}function a(w,g){this.h=g;const E=[];let I=!0;for(let S=w.length-1;S>=0;S--){const C=w[S]|0;I&&C==g||(E[S]=C,I=!1)}this.g=E}var l={};function u(w){return-128<=w&&w<128?s(w,function(g){return new a([g|0],g<0?-1:0)}):new a([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return F(h(-w));const g=[];let E=1;for(let I=0;w>=E;I++)g[I]=w/E|0,E*=4294967296;return new a(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return F(f(w.substring(1),g));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(g,8));let I=m;for(let C=0;C<w.length;C+=8){var S=Math.min(8,w.length-C);const T=parseInt(w.substring(C,C+S),g);S<8?(S=h(Math.pow(g,S)),I=I.j(S).add(h(T))):(I=I.j(E),I=I.add(h(T)))}return I}var m=u(0),_=u(1),R=u(16777216);t=a.prototype,t.m=function(){if(D(this))return-F(this).m();let w=0,g=1;for(let E=0;E<this.g.length;E++){const I=this.i(E);w+=(I>=0?I:4294967296+I)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(D(this))return"-"+F(this).toString(w);const g=h(Math.pow(w,6));var E=this;let I="";for(;;){const S=b(E,g).g;E=x(E,S.j(g));let C=((E.g.length>0?E.g[0]:E.h)>>>0).toString(w);if(E=S,N(E))return C+I;for(;C.length<6;)C="0"+C;I=C+I}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(let g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=x(this,w),D(w)?-1:N(w)?0:1};function F(w){const g=w.g.length,E=[];for(let I=0;I<g;I++)E[I]=~w.g[I];return new a(E,~w.h).add(_)}t.abs=function(){return D(this)?F(this):this},t.add=function(w){const g=Math.max(this.g.length,w.g.length),E=[];let I=0;for(let S=0;S<=g;S++){let C=I+(this.i(S)&65535)+(w.i(S)&65535),T=(C>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);I=T>>>16,C&=65535,T&=65535,E[S]=T<<16|C}return new a(E,E[E.length-1]&-2147483648?-1:0)};function x(w,g){return w.add(F(g))}t.j=function(w){if(N(this)||N(w))return m;if(D(this))return D(w)?F(this).j(F(w)):F(F(this).j(w));if(D(w))return F(this.j(F(w)));if(this.l(R)<0&&w.l(R)<0)return h(this.m()*w.m());const g=this.g.length+w.g.length,E=[];for(var I=0;I<2*g;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(let S=0;S<w.g.length;S++){const C=this.i(I)>>>16,T=this.i(I)&65535,te=w.i(S)>>>16,Pe=w.i(S)&65535;E[2*I+2*S]+=T*Pe,v(E,2*I+2*S),E[2*I+2*S+1]+=C*Pe,v(E,2*I+2*S+1),E[2*I+2*S+1]+=T*te,v(E,2*I+2*S+1),E[2*I+2*S+2]+=C*te,v(E,2*I+2*S+2)}for(w=0;w<g;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=g;w<2*g;w++)E[w]=0;return new a(E,0)};function v(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function A(w,g){this.g=w,this.h=g}function b(w,g){if(N(g))throw Error("division by zero");if(N(w))return new A(m,m);if(D(w))return g=b(F(w),g),new A(F(g.g),F(g.h));if(D(g))return g=b(w,F(g)),new A(F(g.g),g.h);if(w.g.length>30){if(D(w)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var E=_,I=g;I.l(w)<=0;)E=j(E),I=j(I);var S=z(E,1),C=z(I,1);for(I=z(I,2),E=z(E,2);!N(I);){var T=C.add(I);T.l(w)<=0&&(S=S.add(E),C=T),I=z(I,1),E=z(E,1)}return g=x(w,S.j(g)),new A(S,g)}for(S=m;w.l(g)>=0;){for(E=Math.max(1,Math.floor(w.m()/g.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),C=h(E),T=C.j(g);D(T)||T.l(w)>0;)E-=I,C=h(E),T=C.j(g);N(C)&&(C=_),S=S.add(C),w=x(w,T)}return new A(S,w)}t.B=function(w){return b(this,w).h},t.and=function(w){const g=Math.max(this.g.length,w.g.length),E=[];for(let I=0;I<g;I++)E[I]=this.i(I)&w.i(I);return new a(E,this.h&w.h)},t.or=function(w){const g=Math.max(this.g.length,w.g.length),E=[];for(let I=0;I<g;I++)E[I]=this.i(I)|w.i(I);return new a(E,this.h|w.h)},t.xor=function(w){const g=Math.max(this.g.length,w.g.length),E=[];for(let I=0;I<g;I++)E[I]=this.i(I)^w.i(I);return new a(E,this.h^w.h)};function j(w){const g=w.g.length+1,E=[];for(let I=0;I<g;I++)E[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(E,w.h)}function z(w,g){const E=g>>5;g%=32;const I=w.g.length-E,S=[];for(let C=0;C<I;C++)S[C]=g>0?w.i(C+E)>>>g|w.i(C+E+1)<<32-g:w.i(C+E);return new a(S,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,uf=a}).apply(typeof gg<"u"?gg:typeof self<"u"?self:typeof window<"u"?window:{});var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D_,to,O_,ul,Lh,M_,V_,L_;(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var P=o[p];if(!(P in d))break e;d=d[P]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(c){var d=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&d.push([p,c[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,d){return o.call.apply(o.bind,arguments)}function h(o,c,d){return h=u,h.apply(null,arguments)}function f(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,c){function d(){}d.prototype=c.prototype,o.Z=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,P,k){for(var $=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)$[Y-2]=arguments[Y];return c.prototype[P].apply(p,$)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const c=o.length;if(c>0){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function N(o,c){for(let p=1;p<arguments.length;p++){const P=arguments[p];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=o.length||0;const k=P.length||0;o.length=d+k;for(let $=0;$<k;$++)o[d+$]=P[$]}else o.push(P)}}class D{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function F(o){a.setTimeout(()=>{throw o},0)}function x(){var o=w;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class v{constructor(){this.h=this.g=null}add(c,d){const p=A.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var A=new D(()=>new b,o=>o.reset());class b{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let j,z=!1,w=new v,g=()=>{const o=Promise.resolve(void 0);j=()=>{o.then(E)}};function E(){for(var o;o=x();){try{o.h.call(o.g)}catch(d){F(d)}var c=A;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}z=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return o}();function T(o){return/^[\s\xa0]*$/.test(o)}function te(o,c){S.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}m(te,S),te.prototype.init=function(o,c){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&te.Z.h.call(this)},te.prototype.h=function(){te.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Pe="closure_listenable_"+(Math.random()*1e6|0),_t=0;function qt(o,c,d,p,P){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=P,this.key=++_t,this.da=this.fa=!1}function B(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function K(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function Q(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function le(o){const c={};for(const d in o)c[d]=o[d];return c}const ge="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dn(o,c){let d,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(d in p)o[d]=p[d];for(let k=0;k<ge.length;k++)d=ge[k],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function wt(o){this.src=o,this.g={},this.h=0}wt.prototype.add=function(o,c,d,p,P){const k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);const $=ue(o,c,p,P);return $>-1?(c=o[$],d||(c.fa=!1)):(c=new qt(c,this.src,k,!!p,P),c.fa=d,o.push(c)),c};function fn(o,c){const d=c.type;if(d in o.g){var p=o.g[d],P=Array.prototype.indexOf.call(p,c,void 0),k;(k=P>=0)&&Array.prototype.splice.call(p,P,1),k&&(B(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function ue(o,c,d,p){for(let P=0;P<o.length;++P){const k=o[P];if(!k.da&&k.listener==c&&k.capture==!!d&&k.ha==p)return P}return-1}var Gt="closure_lm_"+(Math.random()*1e6|0),wi={};function Ei(o,c,d,p,P){if(Array.isArray(c)){for(let k=0;k<c.length;k++)Ei(o,c[k],d,p,P);return null}return d=Ti(d),o&&o[Pe]?o.J(c,d,l(p)?!!p.capture:!!p,P):ht(o,c,d,!1,p,P)}function ht(o,c,d,p,P,k){if(!c)throw Error("Invalid event type");const $=l(P)?!!P.capture:!!P;let Y=pn(o);if(Y||(o[Gt]=Y=new wt(o)),d=Y.add(c,d,p,$,k),d.proxy)return d;if(p=aa(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)C||(P=$),P===void 0&&(P=!1),o.addEventListener(c.toString(),p,P);else if(o.attachEvent)o.attachEvent(Xn(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function aa(){function o(d){return c.call(o.src,o.listener,d)}const c=la;return o}function Vr(o,c,d,p,P){if(Array.isArray(c))for(var k=0;k<c.length;k++)Vr(o,c[k],d,p,P);else p=l(p)?!!p.capture:!!p,d=Ti(d),o&&o[Pe]?(o=o.i,k=String(c).toString(),k in o.g&&(c=o.g[k],d=ue(c,d,p,P),d>-1&&(B(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete o.g[k],o.h--)))):o&&(o=pn(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ue(c,d,p,P)),(d=o>-1?c[o]:null)&&Lr(d))}function Lr(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Pe])fn(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(Xn(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=pn(c))?(fn(d,o),d.h==0&&(d.src=null,c[Gt]=null)):B(o)}}}function Xn(o){return o in wi?wi[o]:wi[o]="on"+o}function la(o,c){if(o.da)o=!0;else{c=new te(c,this);const d=o.listener,p=o.ha||o.src;o.fa&&Lr(o),o=d.call(p,c)}return o}function pn(o){return o=o[Gt],o instanceof wt?o:null}var As="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ti(o){return typeof o=="function"?o:(o[As]||(o[As]=function(c){return o.handleEvent(c)}),o[As])}function Ne(){I.call(this),this.i=new wt(this),this.M=this,this.G=null}m(Ne,I),Ne.prototype[Pe]=!0,Ne.prototype.removeEventListener=function(o,c,d,p){Vr(this,o,c,d,p)};function je(o,c){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new S(c,o);else if(c instanceof S)c.target=c.target||o;else{var P=c;c=new S(p,o),dn(c,P)}P=!0;let k,$;if(d)for($=d.length-1;$>=0;$--)k=c.g=d[$],P=Ii(k,p,!0,c)&&P;if(k=c.g=o,P=Ii(k,p,!0,c)&&P,P=Ii(k,p,!1,c)&&P,d)for($=0;$<d.length;$++)k=c.g=d[$],P=Ii(k,p,!1,c)&&P}Ne.prototype.N=function(){if(Ne.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const d=o.g[c];for(let p=0;p<d.length;p++)B(d[p]);delete o.g[c],o.h--}}this.G=null},Ne.prototype.J=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},Ne.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function Ii(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let k=0;k<c.length;++k){const $=c[k];if($&&!$.da&&$.capture==d){const Y=$.listener,Me=$.ha||$.src;$.fa&&fn(o.i,$),P=Y.call(Me,p)!==!1&&P}}return P&&!p.defaultPrevented}function Si(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function xi(o){o.g=Si(()=>{o.g=null,o.i&&(o.i=!1,xi(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Rn extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:xi(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lt(o){I.call(this),this.h=o,this.g={}}m(Lt,I);var jr=[];function ua(o){K(o.g,function(c,d){this.g.hasOwnProperty(d)&&Lr(c)},o),o.g={}}Lt.prototype.N=function(){Lt.Z.N.call(this),ua(this)},Lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ai=a.JSON.stringify,Kt=a.JSON.parse,ca=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ha(){}function da(){}var Yn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Cs(){S.call(this,"d")}m(Cs,S);function Ps(){S.call(this,"c")}m(Ps,S);var kn={},Rs=null;function Nn(){return Rs=Rs||new Ne}kn.Ia="serverreachability";function fa(o){S.call(this,kn.Ia,o)}m(fa,S);function Fr(o){const c=Nn();je(c,new fa(c))}kn.STAT_EVENT="statevent";function M(o,c){S.call(this,kn.STAT_EVENT,o),this.stat=c}m(M,S);function U(o){const c=Nn();je(c,new M(c,o))}kn.Ja="timingevent";function ae(o,c){S.call(this,kn.Ja,o),this.size=c}m(ae,S);function Ee(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Fe(){this.g=!0}Fe.prototype.ua=function(){this.g=!1};function Ue(o,c,d,p,P,k){o.info(function(){if(o.g)if(k){var $="",Y=k.split("&");for(let ce=0;ce<Y.length;ce++){var Me=Y[ce].split("=");if(Me.length>1){const ze=Me[0];Me=Me[1];const gn=ze.split("_");$=gn.length>=2&&gn[1]=="type"?$+(ze+"="+Me+"&"):$+(ze+"=redacted&")}}}else $=null;else $=k;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+c+`
`+d+`
`+$})}function Qt(o,c,d,p,P,k,$){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+c+`
`+d+`
`+k+" "+$})}function Ge(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+$e(o,d)+(p?" "+p:"")})}function jt(o,c){o.info(function(){return"TIMEOUT: "+c})}Fe.prototype.info=function(){};function $e(o,c){if(!o.g)return c;if(!c)return null;try{const k=JSON.parse(c);if(k){for(o=0;o<k.length;o++)if(Array.isArray(k[o])){var d=k[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var P=p[0];if(P!="noop"&&P!="stop"&&P!="close")for(let $=1;$<p.length;$++)p[$]=""}}}}return Ai(k)}catch{return c}}var Pt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ci={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},dt;function ks(){}m(ks,ha),ks.prototype.g=function(){return new XMLHttpRequest},dt=new ks;function Pi(o){return encodeURIComponent(String(o))}function Uw(o){var c=1;o=o.split(":");const d=[];for(;c>0&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function Jn(o,c,d,p){this.j=o,this.i=c,this.l=d,this.S=p||1,this.V=new Lt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vf}function Vf(){this.i=null,this.g="",this.h=!1}var Lf={},Mu={};function Vu(o,c,d){o.M=1,o.A=ma(mn(c)),o.u=d,o.R=!0,jf(o,null)}function jf(o,c){o.F=Date.now(),pa(o),o.B=mn(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Yf(d.i,"t",p),o.C=0,d=o.j.L,o.h=new Vf,o.g=mp(o.j,d?c:null,!o.u),o.P>0&&(o.O=new Rn(h(o.Y,o,o.g),o.P)),c=o.V,d=o.g,p=o.ba;var P="readystatechange";Array.isArray(P)||(P&&(jr[0]=P.toString()),P=jr);for(let k=0;k<P.length;k++){const $=Ei(d,P[k],p||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=o.J?le(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Fr(),Ue(o.i,o.v,o.B,o.l,o.S,o.u)}Jn.prototype.ba=function(o){o=o.target;const c=this.O;c&&tr(o)==3?c.j():this.Y(o)},Jn.prototype.Y=function(o){try{if(o==this.g)e:{const Y=tr(this.g),Me=this.g.ya(),ce=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||ip(this.g)))){this.K||Y!=4||Me==7||(Me==8||ce<=0?Fr(3):Fr(2)),Lu(this);var c=this.g.ca();this.X=c;var d=$w(this);if(this.o=c==200,Qt(this.i,this.v,this.B,this.l,this.S,Y,c),this.o){if(this.U&&!this.L){t:{if(this.g){var p,P=this.g;if((p=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(p)){var k=p;break t}}k=null}if(o=k)Ge(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ju(this,o);else{this.o=!1,this.m=3,U(12),Ur(this),Ns(this);break e}}if(this.R){o=!0;let ze;for(;!this.K&&this.C<d.length;)if(ze=zw(this,d),ze==Mu){Y==4&&(this.m=4,U(14),o=!1),Ge(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==Lf){this.m=4,U(15),Ge(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Ge(this.i,this.l,ze,null),ju(this,ze);if(Ff(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||d.length!=0||this.h.h||(this.m=1,U(16),o=!1),this.o=this.o&&o,!o)Ge(this.i,this.l,d,"[Invalid Chunked Response]"),Ur(this),Ns(this);else if(d.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),qu($),$.P=!0,U(11))}}else Ge(this.i,this.l,d,null),ju(this,d);Y==4&&Ur(this),this.o&&!this.K&&(Y==4?hp(this.j,this):(this.o=!1,pa(this)))}else n1(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,U(12)):(this.m=0,U(13)),Ur(this),Ns(this)}}}catch{}finally{}};function $w(o){if(!Ff(o))return o.g.la();const c=ip(o.g);if(c==="")return"";let d="";const p=c.length,P=tr(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Ur(o),Ns(o),"";o.h.i=new a.TextDecoder}for(let k=0;k<p;k++)o.h.h=!0,d+=o.h.i.decode(c[k],{stream:!(P&&k==p-1)});return c.length=0,o.h.g+=d,o.C=0,o.h.g}function Ff(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function zw(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?Mu:(d=Number(c.substring(d,p)),isNaN(d)?Lf:(p+=1,p+d>c.length?Mu:(c=c.slice(p,p+d),o.C=p+d,c)))}Jn.prototype.cancel=function(){this.K=!0,Ur(this)};function pa(o){o.T=Date.now()+o.H,Uf(o,o.H)}function Uf(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Ee(h(o.aa,o),c)}function Lu(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Jn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(jt(this.i,this.B),this.M!=2&&(Fr(),U(17)),Ur(this),this.m=2,Ns(this)):Uf(this,this.T-o)};function Ns(o){o.j.I==0||o.K||hp(o.j,o)}function Ur(o){Lu(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,ua(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function ju(o,c){try{var d=o.j;if(d.I!=0&&(d.g==o||Fu(d.h,o))){if(!o.L&&Fu(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)wa(d),va(d);else break e;Wu(d),U(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ee(h(d.Va,d),6e3));Bf(d.h)<=1&&d.ta&&(d.ta=void 0)}else zr(d,11)}else if((o.L||d.g==o)&&wa(d),!T(c))for(P=d.Ba.g.parse(c),c=0;c<P.length;c++){let ce=P[c];const ze=ce[0];if(!(ze<=d.K))if(d.K=ze,ce=ce[1],d.I==2)if(ce[0]=="c"){d.M=ce[1],d.ba=ce[2];const gn=ce[3];gn!=null&&(d.ka=gn,d.j.info("VER="+d.ka));const Br=ce[4];Br!=null&&(d.za=Br,d.j.info("SVER="+d.za));const nr=ce[5];nr!=null&&typeof nr=="number"&&nr>0&&(p=1.5*nr,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const rr=o.g;if(rr){const Ta=rr.g?rr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ta){var k=p.h;k.g||Ta.indexOf("spdy")==-1&&Ta.indexOf("quic")==-1&&Ta.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Uu(k,k.h),k.h=null))}if(p.G){const Gu=rr.g?rr.g.getResponseHeader("X-HTTP-Session-Id"):null;Gu&&(p.wa=Gu,fe(p.J,p.G,Gu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var $=o;if(p.na=pp(p,p.L?p.ba:null,p.W),$.L){Hf(p.h,$);var Y=$,Me=p.O;Me&&(Y.H=Me),Y.D&&(Lu(Y),pa(Y)),p.g=$}else up(p);d.i.length>0&&_a(d)}else ce[0]!="stop"&&ce[0]!="close"||zr(d,7);else d.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?zr(d,7):Hu(d):ce[0]!="noop"&&d.l&&d.l.qa(ce),d.A=0)}}Fr(4)}catch{}}var Bw=class{constructor(o,c){this.g=o,this.map=c}};function $f(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zf(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Bf(o){return o.h?1:o.g?o.g.size:0}function Fu(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Uu(o,c){o.g?o.g.add(c):o.h=c}function Hf(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}$f.prototype.cancel=function(){if(this.i=Wf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Wf(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.G);return c}return R(o.i)}var qf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hw(o,c){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let P,k=null;p>=0?(P=o[d].substring(0,p),k=o[d].substring(p+1)):P=o[d],c(P,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Zn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof Zn?(this.l=o.l,bs(this,o.j),this.o=o.o,this.g=o.g,Ds(this,o.u),this.h=o.h,$u(this,Jf(o.i)),this.m=o.m):o&&(c=String(o).match(qf))?(this.l=!1,bs(this,c[1]||"",!0),this.o=Os(c[2]||""),this.g=Os(c[3]||"",!0),Ds(this,c[4]),this.h=Os(c[5]||"",!0),$u(this,c[6]||"",!0),this.m=Os(c[7]||"")):(this.l=!1,this.i=new Vs(null,this.l))}Zn.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Ms(c,Gf,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Ms(c,Gf,!0),"@"),o.push(Pi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ms(d,d.charAt(0)=="/"?Gw:qw,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ms(d,Qw)),o.join("")},Zn.prototype.resolve=function(o){const c=mn(this);let d=!!o.j;d?bs(c,o.j):d=!!o.o,d?c.o=o.o:d=!!o.g,d?c.g=o.g:d=o.u!=null;var p=o.h;if(d)Ds(c,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var P=c.h.lastIndexOf("/");P!=-1&&(p=c.h.slice(0,P+1)+p)}if(P=p,P==".."||P==".")p="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){p=P.lastIndexOf("/",0)==0,P=P.split("/");const k=[];for(let $=0;$<P.length;){const Y=P[$++];Y=="."?p&&$==P.length&&k.push(""):Y==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),p&&$==P.length&&k.push("")):(k.push(Y),p=!0)}p=k.join("/")}else p=P}return d?c.h=p:d=o.i.toString()!=="",d?$u(c,Jf(o.i)):d=!!o.m,d&&(c.m=o.m),c};function mn(o){return new Zn(o)}function bs(o,c,d){o.j=d?Os(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Ds(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function $u(o,c,d){c instanceof Vs?(o.i=c,Xw(o.i,o.l)):(d||(c=Ms(c,Kw)),o.i=new Vs(c,o.l))}function fe(o,c,d){o.i.set(c,d)}function ma(o){return fe(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Os(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ms(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,Ww),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ww(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Gf=/[#\/\?@]/g,qw=/[#\?:]/g,Gw=/[#\?]/g,Kw=/[#\?@]/g,Qw=/#/g;function Vs(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function $r(o){o.g||(o.g=new Map,o.h=0,o.i&&Hw(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Vs.prototype,t.add=function(o,c){$r(this),this.i=null,o=Ri(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Kf(o,c){$r(o),c=Ri(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Qf(o,c){return $r(o),c=Ri(o,c),o.g.has(c)}t.forEach=function(o,c){$r(this),this.g.forEach(function(d,p){d.forEach(function(P){o.call(c,P,p,this)},this)},this)};function Xf(o,c){$r(o);let d=[];if(typeof c=="string")Qf(o,c)&&(d=d.concat(o.g.get(Ri(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)d=d.concat(o[c]);return d}t.set=function(o,c){return $r(this),this.i=null,o=Ri(this,o),Qf(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=Xf(this,o),o.length>0?String(o[0]):c):c};function Yf(o,c,d){Kf(o,c),d.length>0&&(o.i=null,o.g.set(Ri(o,c),R(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var d=c[p];const P=Pi(d);d=Xf(this,d);for(let k=0;k<d.length;k++){let $=P;d[k]!==""&&($+="="+Pi(d[k])),o.push($)}}return this.i=o.join("&")};function Jf(o){const c=new Vs;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Ri(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Xw(o,c){c&&!o.j&&($r(o),o.i=null,o.g.forEach(function(d,p){const P=p.toLowerCase();p!=P&&(Kf(this,p),Yf(this,P,d))},o)),o.j=c}function Yw(o,c){const d=new Fe;if(a.Image){const p=new Image;p.onload=f(er,d,"TestLoadImage: loaded",!0,c,p),p.onerror=f(er,d,"TestLoadImage: error",!1,c,p),p.onabort=f(er,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=f(er,d,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Jw(o,c){const d=new Fe,p=new AbortController,P=setTimeout(()=>{p.abort(),er(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(k=>{clearTimeout(P),k.ok?er(d,"TestPingServer: ok",!0,c):er(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),er(d,"TestPingServer: error",!1,c)})}function er(o,c,d,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(d)}catch{}}function Zw(){this.g=new ca}function zu(o){this.i=o.Sb||null,this.h=o.ab||!1}m(zu,ha),zu.prototype.g=function(){return new ga(this.i,this.h)};function ga(o,c){Ne.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ga,Ne),t=ga.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,js(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zf(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Zf(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Ls(this):js(this),this.readyState==3&&Zf(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,Ls(this))},t.Na=function(o){this.g&&(this.response=o,Ls(this))},t.ga=function(){this.g&&Ls(this)};function Ls(o){o.readyState=4,o.l=null,o.j=null,o.B=null,js(o)}t.setRequestHeader=function(o,c){this.A.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function js(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ep(o){let c="";return K(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Bu(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=ep(d),typeof o=="string"?d!=null&&Pi(d):fe(o,c,d))}function xe(o){Ne.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(xe,Ne);var e1=/^https?$/i,t1=["POST","PUT"];t=xe.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():dt.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(k){tp(this,k);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)d.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const k of p.keys())d.set(k,p.get(k));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),P=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(t1,c,void 0)>=0)||p||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,$]of d)this.g.setRequestHeader(k,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(k){tp(this,k)}};function tp(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,np(o),ya(o)}function np(o){o.A||(o.A=!0,je(o,"complete"),je(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,je(this,"complete"),je(this,"abort"),ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ya(this,!0)),xe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?rp(this):this.Xa())},t.Xa=function(){rp(this)};function rp(o){if(o.h&&typeof s<"u"){if(o.v&&tr(o)==4)setTimeout(o.Ca.bind(o),0);else if(je(o,"readystatechange"),tr(o)==4){o.h=!1;try{const k=o.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=k===0){let $=String(o.D).match(qf)[1]||null;!$&&a.self&&a.self.location&&($=a.self.location.protocol.slice(0,-1)),p=!e1.test($?$.toLowerCase():"")}d=p}if(d)je(o,"complete"),je(o,"success");else{o.o=6;try{var P=tr(o)>2?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.ca()+"]",np(o)}}finally{ya(o)}}}}function ya(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,c||je(o,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function tr(o){return o.g?o.g.readyState:0}t.ca=function(){try{return tr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Kt(c)}};function ip(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function n1(o){const c={};o=(o.g&&tr(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(T(o[p]))continue;var d=Uw(o[p]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=c[P]||[];c[P]=k,k.push(d)}Q(c,function(p){return p.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function sp(o){this.za=0,this.i=[],this.j=new Fe,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Fs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Fs("baseRetryDelayMs",5e3,o),this.Za=Fs("retryDelaySeedMs",1e4,o),this.Ta=Fs("forwardChannelMaxRetries",2,o),this.va=Fs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new $f(o&&o.concurrentRequestLimit),this.Ba=new Zw,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=sp.prototype,t.ka=8,t.I=1,t.connect=function(o,c,d,p){U(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=pp(this,null,this.W),_a(this)};function Hu(o){if(op(o),o.I==3){var c=o.V++,d=mn(o.J);if(fe(d,"SID",o.M),fe(d,"RID",c),fe(d,"TYPE","terminate"),Us(o,d),c=new Jn(o,o.j,c),c.M=2,c.A=ma(mn(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.A,d=!0),d||(c.g=mp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),pa(c)}fp(o)}function va(o){o.g&&(qu(o),o.g.cancel(),o.g=null)}function op(o){va(o),o.v&&(a.clearTimeout(o.v),o.v=null),wa(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function _a(o){if(!zf(o.h)&&!o.m){o.m=!0;var c=o.Ea;j||g(),z||(j(),z=!0),w.add(c,o),o.D=0}}function r1(o,c){return Bf(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Ee(h(o.Ea,o,c),dp(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const P=new Jn(this,this.j,o);let k=this.o;if(this.U&&(k?(k=le(k),dn(k,this.U)):k=this.U),this.u!==null||this.R||(P.J=k,k=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=lp(this,P,c),d=mn(this.J),fe(d,"RID",o),fe(d,"CVER",22),this.G&&fe(d,"X-HTTP-Session-Id",this.G),Us(this,d),k&&(this.R?c="headers="+Pi(ep(k))+"&"+c:this.u&&Bu(d,this.u,k)),Uu(this.h,P),this.Ra&&fe(d,"TYPE","init"),this.S?(fe(d,"$req",c),fe(d,"SID","null"),P.U=!0,Vu(P,d,null)):Vu(P,d,c),this.I=2}}else this.I==3&&(o?ap(this,o):this.i.length==0||zf(this.h)||ap(this))};function ap(o,c){var d;c?d=c.l:d=o.V++;const p=mn(o.J);fe(p,"SID",o.M),fe(p,"RID",d),fe(p,"AID",o.K),Us(o,p),o.u&&o.o&&Bu(p,o.u,o.o),d=new Jn(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),c&&(o.i=c.G.concat(o.i)),c=lp(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Uu(o.h,d),Vu(d,p,c)}function Us(o,c){o.H&&K(o.H,function(d,p){fe(c,p,d)}),o.l&&K({},function(d,p){fe(c,p,d)})}function lp(o,c,d){d=Math.min(o.i.length,d);const p=o.l?h(o.l.Ka,o.l,o):null;e:{var P=o.i;let Y=-1;for(;;){const Me=["count="+d];Y==-1?d>0?(Y=P[0].g,Me.push("ofs="+Y)):Y=0:Me.push("ofs="+Y);let ce=!0;for(let ze=0;ze<d;ze++){var k=P[ze].g;const gn=P[ze].map;if(k-=Y,k<0)Y=Math.max(0,P[ze].g-100),ce=!1;else try{k="req"+k+"_"||"";try{var $=gn instanceof Map?gn:Object.entries(gn);for(const[Br,nr]of $){let rr=nr;l(nr)&&(rr=Ai(nr)),Me.push(k+Br+"="+encodeURIComponent(rr))}}catch(Br){throw Me.push(k+"type="+encodeURIComponent("_badmap")),Br}}catch{p&&p(gn)}}if(ce){$=Me.join("&");break e}}$=void 0}return o=o.i.splice(0,d),c.G=o,$}function up(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;j||g(),z||(j(),z=!0),w.add(c,o),o.A=0}}function Wu(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Ee(h(o.Da,o),dp(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,cp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Ee(h(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,U(10),va(this),cp(this))};function qu(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function cp(o){o.g=new Jn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=mn(o.na);fe(c,"RID","rpc"),fe(c,"SID",o.M),fe(c,"AID",o.K),fe(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&fe(c,"TO",o.ia),fe(c,"TYPE","xmlhttp"),Us(o,c),o.u&&o.o&&Bu(c,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=ma(mn(c)),d.u=null,d.R=!0,jf(d,o)}t.Va=function(){this.C!=null&&(this.C=null,va(this),Wu(this),U(19))};function wa(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function hp(o,c){var d=null;if(o.g==c){wa(o),qu(o),o.g=null;var p=2}else if(Fu(o.h,c))d=c.G,Hf(o.h,c),p=1;else return;if(o.I!=0){if(c.o)if(p==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var P=o.D;p=Nn(),je(p,new ae(p,d)),_a(o)}else up(o);else if(P=c.m,P==3||P==0&&c.X>0||!(p==1&&r1(o,c)||p==2&&Wu(o)))switch(d&&d.length>0&&(c=o.h,c.i=c.i.concat(d)),P){case 1:zr(o,5);break;case 4:zr(o,10);break;case 3:zr(o,6);break;default:zr(o,2)}}}function dp(o,c){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*c}function zr(o,c){if(o.j.info("Error code "+c),c==2){var d=h(o.bb,o),p=o.Ua;const P=!p;p=new Zn(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||bs(p,"https"),ma(p),P?Yw(p.toString(),d):Jw(p.toString(),d)}else U(2);o.I=0,o.l&&o.l.pa(c),fp(o),op(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),U(2)):(this.j.info("Failed to ping google.com"),U(1))};function fp(o){if(o.I=0,o.ja=[],o.l){const c=Wf(o.h);(c.length!=0||o.i.length!=0)&&(N(o.ja,c),N(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function pp(o,c,d){var p=d instanceof Zn?mn(d):new Zn(d);if(p.g!="")c&&(p.g=c+"."+p.g),Ds(p,p.u);else{var P=a.location;p=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const k=new Zn(null);p&&bs(k,p),c&&(k.g=c),P&&Ds(k,P),d&&(k.h=d),p=k}return d=o.G,c=o.wa,d&&c&&fe(p,d,c),fe(p,"VER",o.ka),Us(o,p),p}function mp(o,c,d){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new xe(new zu({ab:d})):new xe(o.ma),c.Fa(o.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function gp(){}t=gp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ea(){}Ea.prototype.g=function(o,c){return new Rt(o,c)};function Rt(o,c){Ne.call(this),this.g=new sp(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!T(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new ki(this)}m(Rt,Ne),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Hu(this.g)},Rt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Ai(o),o=d);c.i.push(new Bw(c.Ya++,o)),c.I==3&&_a(c)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Hu(this.g),delete this.g,Rt.Z.N.call(this)};function yp(o){Cs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}m(yp,Cs);function vp(){Ps.call(this),this.status=1}m(vp,Ps);function ki(o){this.g=o}m(ki,gp),ki.prototype.ra=function(){je(this.g,"a")},ki.prototype.qa=function(o){je(this.g,new yp(o))},ki.prototype.pa=function(o){je(this.g,new vp)},ki.prototype.oa=function(){je(this.g,"b")},Ea.prototype.createWebChannel=Ea.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,L_=function(){return new Ea},V_=function(){return Nn()},M_=kn,Lh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Pt.NO_ERROR=0,Pt.TIMEOUT=8,Pt.HTTP_ERROR=6,ul=Pt,Ci.COMPLETE="complete",O_=Ci,da.EventType=Yn,Yn.OPEN="a",Yn.CLOSE="b",Yn.ERROR="c",Yn.MESSAGE="d",Ne.prototype.listen=Ne.prototype.J,to=da,xe.prototype.listenOnce=xe.prototype.K,xe.prototype.getLastError=xe.prototype.Ha,xe.prototype.getLastErrorCode=xe.prototype.ya,xe.prototype.getStatus=xe.prototype.ca,xe.prototype.getResponseJson=xe.prototype.La,xe.prototype.getResponseText=xe.prototype.la,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Fa,D_=xe}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});const yg="@firebase/firestore",vg="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Tu("@firebase/firestore");function bi(){return ci.logLevel}function W(t,...e){if(ci.logLevel<=ne.DEBUG){const n=e.map(cf);ci.debug(`Firestore (${Ss}): ${t}`,...n)}}function hi(t,...e){if(ci.logLevel<=ne.ERROR){const n=e.map(cf);ci.error(`Firestore (${Ss}): ${t}`,...n)}}function Cu(t,...e){if(ci.logLevel<=ne.WARN){const n=e.map(cf);ci.warn(`Firestore (${Ss}): ${t}`,...n)}}function cf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,j_(t,r,n)}function j_(t,e,n){let r=`FIRESTORE (${Ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw hi(r),new Error(r)}function Ce(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||j_(e,i,r)}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class YC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JC{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ei;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ei,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ei)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string",31837,{l:r}),new F_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class ZC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new ZC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _g{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ce(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _g(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new _g(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=nP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function jh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return bc(i)===bc(s)?se(i,s):bc(i)?1:-1}return se(t.length,e.length)}const rP=55296,iP=57343;function bc(t){const e=t.charCodeAt(0);return e>=rP&&e<=iP}function fs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="__name__";class _n{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _n?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=_n.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return se(e.length,n.length)}static compareSegments(e,n){const r=_n.isNumericId(e),i=_n.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?_n.extractNumericId(e).compare(_n.extractNumericId(n)):jh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return uf.fromString(e.substring(4,e.length-2))}}class ke extends _n{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const sP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends _n{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return sP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wg}static keyField(){return new Ye([wg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new G(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(ke.fromString(e))}static fromName(e){return new J(ke.fromString(e).popFirst(5))}static empty(){return new J(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new ke(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t,e,n){if(!n)throw new G(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aP(t,e,n,r){if(e===!0&&r===!0)throw new G(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Eg(t){if(!J.isDocumentKey(t))throw new G(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function U_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function df(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function Fh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=df(t);throw new G(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ta(t,e){if(!U_(t))throw new G(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new G(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=-62135596800,Ig=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ig);return new we(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Tg)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ig}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ta(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Tg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:Oe("string",we._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new we(0,0))}static max(){return new ve(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=-1;function lP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ve.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new Rr(i,J.empty(),e)}function uP(t){return new Rr(t.readTime,t.key,Fo)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(ve.min(),J.empty(),Fo)}static max(){return new Rr(ve.max(),J.empty(),Fo)}}function cP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==hP)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function fP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function na(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}pf.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=-1;function gf(t){return t==null}function Kl(t){return t===0&&1/t==-1/0}function pP(t){return typeof t=="number"&&Number.isInteger(t)&&!Kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="";function mP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sg(e)),e=gP(t.get(n),e);return Sg(e)}function gP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case $_:n+="";break;default:n+=s}}return n}function Sg(t){return t+$_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function z_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new za(this.root,e,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new za(this.root,e,this.comparator,!0)}}class za{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ag(this.data.getIterator())}getIteratorFrom(e){return new Ag(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Ag{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new on([])}unionWith(e){let n=new Ze(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yP("Invalid base64 string: "+s):s}}(e);return new Cn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Cn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Cn.EMPTY_BYTE_STRING=new Cn("");const vP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function di(t){if(Ce(!!t,39018),typeof t=="string"){let e=0;const n=vP.exec(t);if(Ce(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ps(t){return typeof t=="string"?Cn.fromBase64String(t):Cn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="server_timestamp",H_="__type__",W_="__previous_value__",q_="__local_write_time__";function yf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[H_])==null?void 0:r.stringValue)===B_}function vf(t){const e=t.mapValue.fields[W_];return yf(e)?vf(e):e}function Ql(t){const e=di(t.mapValue.fields[q_].timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n,r,i,s,a,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Xl="(default)";class Yl{constructor(e,n){this.projectId=e,this.database=n||Xl}static empty(){return new Yl("","")}get isDefaultDatabase(){return this.database===Xl}isEqual(e){return e instanceof Yl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="__type__",K_="__max__",Ba={mapValue:{fields:{__type__:{stringValue:K_}}}},Q_="__vector__",Uh="value";function fi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yf(t)?4:EP(t)?9007199254740991:wP(t)?10:11:Z(28295,{value:t})}function Pn(t,e){if(t===e)return!0;const n=fi(t);if(n!==fi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ql(t).isEqual(Ql(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=di(i.timestampValue),l=di(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ps(i.bytesValue).isEqual(ps(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Xe(i.geoPointValue.latitude)===Xe(s.geoPointValue.latitude)&&Xe(i.geoPointValue.longitude)===Xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Xe(i.integerValue)===Xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Xe(i.doubleValue),l=Xe(s.doubleValue);return a===l?Kl(a)===Kl(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return fs(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(xg(a)!==xg(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Pn(a[u],l[u])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function Uo(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function ms(t,e){if(t===e)return 0;const n=fi(t),r=fi(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Xe(s.integerValue||s.doubleValue),u=Xe(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Cg(t.timestampValue,e.timestampValue);case 4:return Cg(Ql(t),Ql(e));case 5:return jh(t.stringValue,e.stringValue);case 6:return function(s,a){const l=ps(s),u=ps(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=se(l[h],u[h]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=se(Xe(s.latitude),Xe(a.latitude));return l!==0?l:se(Xe(s.longitude),Xe(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Pg(t.arrayValue,e.arrayValue);case 10:return function(s,a){var _,R,N,D;const l=s.fields||{},u=a.fields||{},h=(_=l[Uh])==null?void 0:_.arrayValue,f=(R=u[Uh])==null?void 0:R.arrayValue,m=se(((N=h==null?void 0:h.values)==null?void 0:N.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return m!==0?m:Pg(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ba.mapValue&&a===Ba.mapValue)return 0;if(s===Ba.mapValue)return 1;if(a===Ba.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const _=jh(u[m],f[m]);if(_!==0)return _;const R=ms(l[u[m]],h[f[m]]);if(R!==0)return R}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function Cg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=di(t),r=di(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Pg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ms(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function gs(t){return $h(t)}function $h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=di(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ps(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$h(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${$h(n.fields[a])}`;return i+"}"}(t.mapValue):Z(61005,{value:t})}function cl(t){switch(fi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vf(t);return e?16+cl(e):16;case 5:return 2*t.stringValue.length;case 6:return ps(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+cl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return xs(r.fields,(s,a)=>{i+=s.length+cl(a)}),i}(t.mapValue);default:throw Z(13486,{value:t})}}function zh(t){return!!t&&"integerValue"in t}function _f(t){return!!t&&"arrayValue"in t}function hl(t){return!!t&&"mapValue"in t}function wP(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[G_])==null?void 0:r.stringValue)===Q_}function mo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mo(t.arrayValue.values[n]);return e}return{...t}}function EP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mo(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=mo(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];hl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new nn(mo(this.value))}}function X_(t){const e=[];return xs(t.fields,(n,r)=>{const i=new Ye([n]);if(hl(r)){const s=X_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new on(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new en(e,0,ve.min(),ve.min(),ve.min(),nn.empty(),0)}static newFoundDocument(e,n,r,i){return new en(e,1,n,ve.min(),r,i,0)}static newNoDocument(e,n){return new en(e,2,n,ve.min(),ve.min(),nn.empty(),0)}static newUnknownDocument(e,n){return new en(e,3,n,ve.min(),ve.min(),nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n){this.position=e,this.inclusive=n}}function Rg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),n.key):r=ms(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function kg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n="asc"){this.field=e,this.dir=n}}function TP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{}class We extends Y_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new SP(e,n,r):n==="array-contains"?new CP(e,r):n==="in"?new PP(e,r):n==="not-in"?new RP(e,r):n==="array-contains-any"?new kP(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xP(e,r):new AP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ms(n,this.value)):n!==null&&fi(this.value)===fi(n)&&this.matchesComparison(ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kr extends Y_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new kr(e,n)}matches(e){return J_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function J_(t){return t.op==="and"}function Z_(t){return IP(t)&&J_(t)}function IP(t){for(const e of t.filters)if(e instanceof kr)return!1;return!0}function Bh(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(Z_(t))return t.filters.map(e=>Bh(e)).join(",");{const e=t.filters.map(n=>Bh(n)).join(",");return`${t.op}(${e})`}}function ew(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&Pn(r.value,i.value)}(t,e):t instanceof kr?function(r,i){return i instanceof kr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&ew(a,i.filters[l]),!0):!1}(t,e):void Z(19439)}function tw(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${gs(n.value)}`}(t):t instanceof kr?function(n){return n.op.toString()+" {"+n.getFilters().map(tw).join(" ,")+"}"}(t):"Filter"}class SP extends We{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class xP extends We{constructor(e,n){super(e,"in",n),this.keys=nw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AP extends We{constructor(e,n){super(e,"not-in",n),this.keys=nw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class CP extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _f(n)&&Uo(n.arrayValue,this.value)}}class PP extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Uo(this.value.arrayValue,n)}}class RP extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Uo(this.value.arrayValue,n)}}class kP extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_f(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Uo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Te=null}}function Ng(t,e=null,n=[],r=[],i=null,s=null,a=null){return new NP(t,e,n,r,i,s,a)}function wf(t){const e=de(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),e.Te=n}return e.Te}function Ef(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!TP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ew(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kg(t.startAt,e.startAt)&&kg(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function bP(t,e,n,r,i,s,a,l){return new Pu(t,e,n,r,i,s,a,l)}function DP(t){return new Pu(t)}function bg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function OP(t){return t.collectionGroup!==null}function go(t){const e=de(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ze(Ye.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Zl(s,r))}),n.has(Ye.keyField().canonicalString())||e.Ie.push(new Zl(Ye.keyField(),r))}return e.Ie}function ti(t){const e=de(t);return e.Ee||(e.Ee=MP(e,go(t))),e.Ee}function MP(t,e){if(t.limitType==="F")return Ng(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Zl(i.field,s)});const n=t.endAt?new Jl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jl(t.startAt.position,t.startAt.inclusive):null;return Ng(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hh(t,e,n){return new Pu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rw(t,e){return Ef(ti(t),ti(e))&&t.limitType===e.limitType}function iw(t){return`${wf(ti(t))}|lt:${t.limitType}`}function Qs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>tw(i)).join(", ")}]`),gf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>gs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>gs(i)).join(",")),`Target(${r})`}(ti(t))}; limitType=${t.limitType})`}function Tf(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of go(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=Rg(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,go(r),i)||r.endAt&&!function(a,l,u){const h=Rg(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,go(r),i))}(t,e)}function VP(t){return(e,n)=>{let r=!1;for(const i of go(t)){const s=LP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function LP(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?ms(u,h):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return z_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=new Ct(J.comparator);function eu(){return jP}const sw=new Ct(J.comparator);function Ha(...t){let e=sw;for(const n of t)e=e.insert(n.key,n);return e}function ow(t){let e=sw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return yo()}function aw(){return yo()}function yo(){return new vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const FP=new Ct(J.comparator),UP=new Ze(J.comparator);function at(...t){let e=UP;for(const n of t)e=e.add(n);return e}const $P=new Ze(se);function zP(){return $P}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(e)?"-0":e}}function lw(t){return{integerValue:""+t}}function BP(t,e){return pP(e)?lw(e):If(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this._=void 0}}function HP(t,e,n){return t instanceof $o?function(i,s){const a={fields:{[H_]:{stringValue:B_},[q_]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&yf(s)&&(s=vf(s)),s&&(a.fields[W_]=s),{mapValue:a}}(n,e):t instanceof zo?cw(t,e):t instanceof Bo?hw(t,e):function(i,s){const a=uw(i,s),l=Dg(a)+Dg(i.Ae);return zh(a)&&zh(i.Ae)?lw(l):If(i.serializer,l)}(t,e)}function WP(t,e,n){return t instanceof zo?cw(t,e):t instanceof Bo?hw(t,e):n}function uw(t,e){return t instanceof tu?function(r){return zh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class $o extends Ru{}class zo extends Ru{constructor(e){super(),this.elements=e}}function cw(t,e){const n=dw(e);for(const r of t.elements)n.some(i=>Pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Bo extends Ru{constructor(e){super(),this.elements=e}}function hw(t,e){let n=dw(e);for(const r of t.elements)n=n.filter(i=>!Pn(i,r));return{arrayValue:{values:n}}}class tu extends Ru{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Dg(t){return Xe(t.integerValue||t.doubleValue)}function dw(t){return _f(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,n){this.field=e,this.transform=n}}function GP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof zo&&i instanceof zo||r instanceof Bo&&i instanceof Bo?fs(r.elements,i.elements,Pn):r instanceof tu&&i instanceof tu?Pn(r.Ae,i.Ae):r instanceof $o&&i instanceof $o}(t.transform,e.transform)}class KP{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ku{}function fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mw(t.key,Un.none()):new ra(t.key,t.data,Un.none());{const n=t.data,r=nn.empty();let i=new Ze(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new _i(t.key,r,new on(i.toArray()),Un.none())}}function QP(t,e,n){t instanceof ra?function(i,s,a){const l=i.value.clone(),u=Mg(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof _i?function(i,s,a){if(!dl(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Mg(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(pw(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function vo(t,e,n,r){return t instanceof ra?function(s,a,l,u){if(!dl(s.precondition,a))return l;const h=s.value.clone(),f=Vg(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof _i?function(s,a,l,u){if(!dl(s.precondition,a))return l;const h=Vg(s.fieldTransforms,u,a),f=a.data;return f.setAll(pw(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,a,l){return dl(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function XP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=uw(r.transform,i||null);s!=null&&(n===null&&(n=nn.empty()),n.set(r.field,s))}return n||null}function Og(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&fs(r,i,(s,a)=>GP(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends ku{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _i extends ku{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function pw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mg(t,e,n){const r=new Map;Ce(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,WP(a,l,n[i]))}return r}function Vg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,HP(s,a,e))}return r}class mw extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YP extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&QP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aw();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=fw(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),at())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,(n,r)=>Og(n,r))&&fs(this.baseMutations,e.baseMutations,(n,r)=>Og(n,r))}}class Sf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return FP}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Sf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,re;function eR(t){switch(t){case V.OK:return Z(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Z(15467,{code:t})}}function tR(t){if(t===void 0)return hi("GRPC error has no .code"),V.UNKNOWN;switch(t){case be.OK:return V.OK;case be.CANCELLED:return V.CANCELLED;case be.UNKNOWN:return V.UNKNOWN;case be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case be.INTERNAL:return V.INTERNAL;case be.UNAVAILABLE:return V.UNAVAILABLE;case be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case be.NOT_FOUND:return V.NOT_FOUND;case be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case be.ABORTED:return V.ABORTED;case be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case be.DATA_LOSS:return V.DATA_LOSS;default:return Z(39323,{code:t})}}(re=be||(be={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new uf([4294967295,4294967295],0);class nR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iR(t,e){return Wh(t,e.toTimestamp())}function rs(t){return Ce(!!t,49232),ve.fromTimestamp(function(n){const r=di(n);return new we(r.seconds,r.nanos)}(t))}function gw(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(i){return new ke(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sR(t){const e=ke.fromString(t);return Ce(fR(e),10190,{key:e.toString()}),e}function Gh(t,e){return gw(t.databaseId,e.path)}function oR(t){const e=sR(t);return e.length===4?ke.emptyPath():lR(e)}function aR(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lR(t){return Ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Lg(t,e,n){return{name:Gh(t,e),fields:n.value.mapValue.fields}}function uR(t,e){let n;if(e instanceof ra)n={update:Lg(t,e.key,e.value)};else if(e instanceof mw)n={delete:Gh(t,e.key)};else if(e instanceof _i)n={update:Lg(t,e.key,e.data),updateMask:dR(e.fieldMask)};else{if(!(e instanceof YP))return Z(16599,{Vt:e.type});n={verify:Gh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof $o)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof zo)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Bo)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof tu)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw Z(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:iR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z(27497)}(t,e.precondition)),n}function cR(t,e){return t&&t.length>0?(Ce(e!==void 0,14353),t.map(n=>function(i,s){let a=i.updateTime?rs(i.updateTime):rs(s);return a.isEqual(ve.min())&&(a=rs(s)),new KP(a,i.transformResults||[])}(n,e))):[]}function hR(t){let e=oR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ce(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const _=yw(m);return _ instanceof kr&&Z_(_)?_.getFilters():[_]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(_=>function(N){return new Zl(Di(N.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(m){let _;return _=typeof m=="object"?m.value:m,gf(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(m){const _=!!m.before,R=m.values||[];return new Jl(R,_)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const _=!m.before,R=m.values||[];return new Jl(R,_)}(n.endAt)),bP(e,i,a,s,l,"F",u,h)}function yw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Di(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Di(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Di(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Di(n.unaryFilter.field);return We.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return We.create(Di(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return kr.create(n.compositeFilter.filters.map(r=>yw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function Di(t){return Ye.fromServerFormat(t.fieldPath)}function dR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.yt=e}}function mR(t){const e=hR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this.Cn=new yR}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Rr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class yR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(ke.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vw=41943040;class Et{static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(vw,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ys(0)}static cr(){return new ys(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="LruGarbageCollector",vR=1048576;function Ug([t,e],[n,r]){const i=se(t,n);return i===0?se(e,r):i}class _R{constructor(e){this.Ir=e,this.buffer=new Ze(Ug),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ug(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class wR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){W(Fg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){na(n)?W(Fg,"Ignoring IndexedDB error during garbage collection: ",n):await ff(n)}await this.Vr(3e5)})}}class ER{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(pf.ce);const r=new _R(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(jg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jg):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),bi()<=ne.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function TR(t,e){return new ER(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.changes=new vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&vo(r.mutation,i,on.empty(),we.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,at()).next(()=>r))}getLocalViewOfDocuments(e,n,r=at()){const i=Yr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=Ha();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,at()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=eu();const a=yo(),l=function(){return yo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof _i)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),vo(f.mutation,h,f.mutation.getFieldMask(),we.now())):a.set(h.key,on.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>l.set(h,new SR(f,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=yo();let i=new Ct((a,l)=>a-l),s=at();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||on.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||at()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=aw();f.forEach(_=>{if(!s.has(_)){const R=fw(n.get(_),r.get(_));R!==null&&m.set(_,R),s=s.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return J.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):OP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Yr());let l=Fo,u=s;return a.next(h=>O.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,at())).next(f=>({batchId:l,changes:ow(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Ha();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=Ha();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(m,_){return new Pu(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,_)=>{a=a.insert(m,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,en.newInvalidDocument(f)))});let l=Ha();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&vo(f.mutation,h,on.empty(),we.now()),Tf(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:rs(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:mR(i.bundledQuery),readTime:rs(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.overlays=new Ct(J.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Yr(),s=n.length+1,a=new J(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ct((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Yr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Yr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ZP(n,r));let s=this.qr.get(n);s===void 0&&(s=at(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.sessionToken=Cn.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.Qr=new Ze(Be.$r),this.Ur=new Ze(Be.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Be(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new J(new ke([])),r=new Be(n,e),i=new Be(n,e+1),s=[];return this.Ur.forEachInRange([r,i],a=>{this.Gr(a),s.push(a.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new J(new ke([])),r=new Be(n,e),i=new Be(n,e+1);let s=at();return this.Ur.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Be(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return J.comparator(e.key,n.key)||se(e.Yr,n.Yr)}static Kr(e,n){return se(e.Yr,n.Yr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ze(Be.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new JP(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.Zr=this.Zr.add(new Be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?mf:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],a=>{const l=this.Xr(a.Yr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(se);return n.forEach(i=>{const s=new Be(i,0),a=new Be(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,a],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const a=new Be(new J(s),0);let l=new Ze(se);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Yr)),!0)},a),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ce(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,i=>{const s=new Be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Be(n,0),i=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.ri=e,this.docs=function(){return new Ct(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():en.newInvalidDocument(n))}getEntries(e,n){let r=eu();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():en.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=eu();const a=n.path,l=new J(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||cP(uP(f),r)<=0||(i.has(f.key)||Tf(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new NR(this)}getSize(e){return O.resolve(this.size)}}class NR extends IR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.persistence=e,this.si=new vi(n=>wf(n),Ef),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.oi=0,this._i=new xf,this.targetCount=0,this.ai=ys.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ys(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n){this.ui={},this.overlays={},this.ci=new pf(0),this.li=!1,this.li=!0,this.hi=new PR,this.referenceDelegate=e(this),this.Pi=new bR(this),this.indexManager=new gR,this.remoteDocumentCache=function(i){return new kR(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new pR(n),this.Ii=new AR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new RR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new DR(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class DR extends dP{constructor(e){super(),this.currentSequenceNumber=e}}class Af{constructor(e){this.persistence=e,this.Ri=new xf,this.Vi=null}static mi(e){return new Af(e)}get fi(){if(this.Vi)return this.Vi;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const i=J.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,ve.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class nu{constructor(e,n){this.persistence=e,this.pi=new vi(r=>mP(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=TR(this,n)}static mi(e,n){return new nu(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,a=>this.br(e,a,n).next(l=>{l||(r++,s.removeEntry(a,ve.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=cl(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=at(),i=at();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Cf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return oI()?8:fP(ct())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new OR;return this.Ss(e,n,a).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,a,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(bi()<=ne.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(bi()<=ne.DEBUG&&W("QueryEngine","Query:",Qs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(bi()<=ne.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ti(n))):O.resolve())}ys(e,n){if(bg(n))return O.resolve(null);let r=ti(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hh(n,null,"F"),r=ti(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=at(...s);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,a,u.readTime)?this.ys(e,Hh(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,i){return bg(n)||i.isEqual(ve.min())?O.resolve(null):this.ps.getDocuments(e,r).next(s=>{const a=this.Ds(n,s);return this.Cs(n,a,r,i)?O.resolve(null):(bi()<=ne.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qs(n)),this.vs(e,a,n,lP(i,Fo)).next(l=>l))})}Ds(e,n){let r=new Ze(VP(e));return n.forEach((i,s)=>{Tf(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return bi()<=ne.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Qs(n)),this.ps.getDocumentsMatchingQuery(e,n,Rr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="LocalStore";class LR{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ct(se),this.xs=new vi(s=>wf(s),Ef),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function jR(t,e,n,r){return new LR(t,e,n,r)}async function ww(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=at();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:l}))})})}function FR(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,_=m.keys();let R=O.resolve();return _.forEach(N=>{R=R.next(()=>f.getEntry(u,N)).next(D=>{const F=h.docVersions.get(N);Ce(F!==null,48541),D.version.compareTo(F)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=at();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function UR(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function $R(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=mf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class $g{constructor(){this.activeTargetIds=zP()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zR{constructor(){this.Mo=new $g,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new $g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="ConnectivityMonitor";class Bg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){W(zg,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){W(zg,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa=null;function Kh(){return Wa===null?Wa=function(){return 268435456+Math.round(2147483648*Math.random())}():Wa++,"0x"+Wa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="RestConnection",HR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class WR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Xl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const a=Kh(),l=this.zo(e,n.toUriEncodedString());W(Dc,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:h}=new URL(l),f=Es(h);return this.Jo(e,l,u,r,f).then(m=>(W(Dc,`Received RPC '${e}' ${a}: `,m),m),m=>{throw Cu(Dc,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,a){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ss}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=HR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class GR extends WR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const a=Kh();return new Promise((l,u)=>{const h=new D_;h.setWithCredentials(!0),h.listenOnce(O_.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ul.NO_ERROR:const m=h.getResponseJson();W(it,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case ul.TIMEOUT:W(it,`RPC '${e}' ${a} timed out`),u(new G(V.DEADLINE_EXCEEDED,"Request time out"));break;case ul.HTTP_ERROR:const _=h.getStatus();if(W(it,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const N=R==null?void 0:R.error;if(N&&N.status&&N.message){const D=function(x){const v=x.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(N.status);u(new G(D,N.message))}else u(new G(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new G(V.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{W(it,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(i);W(it,`RPC '${e}' ${a} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Kh(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=L_(),l=V_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(it,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=a.createWebChannel(f,u);this.I_(m);let _=!1,R=!1;const N=new qR({Yo:F=>{R?W(it,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(_||(W(it,`Opening RPC '${e}' stream ${i} transport.`),m.open(),_=!0),W(it,`RPC '${e}' stream ${i} sending:`,F),m.send(F))},Zo:()=>m.close()}),D=(F,x,v)=>{F.listen(x,A=>{try{v(A)}catch(b){setTimeout(()=>{throw b},0)}})};return D(m,to.EventType.OPEN,()=>{R||(W(it,`RPC '${e}' stream ${i} transport opened.`),N.o_())}),D(m,to.EventType.CLOSE,()=>{R||(R=!0,W(it,`RPC '${e}' stream ${i} transport closed`),N.a_(),this.E_(m))}),D(m,to.EventType.ERROR,F=>{R||(R=!0,Cu(it,`RPC '${e}' stream ${i} transport errored. Name:`,F.name,"Message:",F.message),N.a_(new G(V.UNAVAILABLE,"The operation could not be completed")))}),D(m,to.EventType.MESSAGE,F=>{var x;if(!R){const v=F.data[0];Ce(!!v,16349);const A=v,b=(A==null?void 0:A.error)||((x=A[0])==null?void 0:x.error);if(b){W(it,`RPC '${e}' stream ${i} received error:`,b);const j=b.status;let z=function(E){const I=be[E];if(I!==void 0)return tR(I)}(j),w=b.message;z===void 0&&(z=V.INTERNAL,w="Unknown error status: "+j+" with message "+b.message),R=!0,N.a_(new G(z,w)),m.close()}else W(it,`RPC '${e}' stream ${i} received:`,v),N.u_(v)}}),D(l,M_.STAT_EVENT,F=>{F.stat===Lh.PROXY?W(it,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===Lh.NOPROXY&&W(it,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return new nR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="PersistentStream";class KR{constructor(e,n,r,i,s,a,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ew(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(hi(n.toString()),hi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new G(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(Hg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(W(Hg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QR extends KR{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=cR(e.writeResults,e.commitTime),r=rs(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=aR(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uR(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{}class YR extends XR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Go(e,qh(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(V.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,qh(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(V.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class JR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(hi(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="RemoteStore";class ZR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{oa(this)&&(W(ia,"Restarting streams for network reachability change."),await async function(u){const h=de(u);h.Ea.add(4),await sa(h),h.Ra.set("Unknown"),h.Ea.delete(4),await bu(h)}(this))})}),this.Ra=new JR(r,i)}}async function bu(t){if(oa(t))for(const e of t.da)await e(!0)}async function sa(t){for(const e of t.da)await e(!1)}function oa(t){return de(t).Ea.size===0}async function Tw(t,e,n){if(!na(e))throw e;t.Ea.add(1),await sa(t),t.Ra.set("Offline"),n||(n=()=>UR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(ia,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await bu(t)})}function Iw(t,e){return e().catch(n=>Tw(t,n,e))}async function Du(t){const e=de(t),n=Nr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:mf;for(;ek(e);)try{const i=await $R(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,tk(e,i)}catch(i){await Tw(e,i)}Sw(e)&&xw(e)}function ek(t){return oa(t)&&t.Ta.length<10}function tk(t,e){t.Ta.push(e);const n=Nr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Sw(t){return oa(t)&&!Nr(t).x_()&&t.Ta.length>0}function xw(t){Nr(t).start()}async function nk(t){Nr(t).ra()}async function rk(t){const e=Nr(t);for(const n of t.Ta)e.ea(n.mutations)}async function ik(t,e,n){const r=t.Ta.shift(),i=Sf.from(r,e,n);await Iw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Du(t)}async function sk(t,e){e&&Nr(t).X_&&await async function(r,i){if(function(a){return eR(a)&&a!==V.ABORTED}(i.code)){const s=r.Ta.shift();Nr(r).B_(),await Iw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Du(r)}}(t,e),Sw(t)&&xw(t)}async function Wg(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),W(ia,"RemoteStore received new credentials");const r=oa(n);n.Ea.add(3),await sa(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await bu(n)}async function ok(t,e){const n=de(t);e?(n.Ea.delete(2),await bu(n)):e||(n.Ea.add(2),await sa(n),n.Ra.set("Unknown"))}function Nr(t){return t.fa||(t.fa=function(n,r,i){const s=de(n);return s.sa(),new QR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:nk.bind(null,t),r_:sk.bind(null,t),ta:rk.bind(null,t),na:ik.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Du(t)):(await t.fa.stop(),t.Ta.length>0&&(W(ia,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Pf(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Aw(t,e){if(hi("AsyncQueue",`${e}: ${t}`),na(t))return new G(V.UNAVAILABLE,`${e}: ${t}`);throw t}class ak{constructor(){this.queries=qg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=de(n),s=i.queries;i.queries=qg(),s.forEach((a,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new G(V.ABORTED,"Firestore shutting down"))}}function qg(){return new vi(t=>iw(t),rw)}function lk(t){t.Ca.forEach(e=>{e.next()})}var Gg,Kg;(Kg=Gg||(Gg={})).Ma="default",Kg.Cache="cache";const uk="SyncEngine";class ck{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new vi(l=>iw(l),rw),this.Iu=new Map,this.Eu=new Set,this.du=new Ct(J.comparator),this.Au=new Map,this.Ru=new xf,this.Vu={},this.mu=new Map,this.fu=ys.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function hk(t,e,n){const r=mk(t);try{const i=await function(a,l){const u=de(a),h=we.now(),f=l.reduce((R,N)=>R.add(N.key),at());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let N=eu(),D=at();return u.Ns.getEntries(R,f).next(F=>{N=F,N.forEach((x,v)=>{v.isValidDocument()||(D=D.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,N)).next(F=>{m=F;const x=[];for(const v of l){const A=XP(v,m.get(v.key).overlayedDocument);A!=null&&x.push(new _i(v.key,A,X_(A.value.mapValue),Un.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,x,l)}).next(F=>{_=F;const x=F.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(R,F.batchId,x)})}).then(()=>({batchId:_.batchId,changes:ow(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new Ct(se)),h=h.insert(l,u),a.Vu[a.currentUser.toKey()]=h}(r,i.batchId,n),await Ou(r,i.changes),await Du(r.remoteStore)}catch(i){const s=Aw(i,"Failed to persist write");n.reject(s)}}function Qg(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=de(a);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const _ of m.Sa)_.va(l)&&(h=!0)}),h&&lk(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dk(t,e){const n=de(t),r=e.batch.batchId;try{const i=await FR(n.localStore,e);Pw(n,r,null),Cw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ou(n,i)}catch(i){await ff(i)}}async function fk(t,e,n){const r=de(t);try{const i=await function(a,l){const u=de(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(Ce(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Pw(r,e,n),Cw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ou(r,i)}catch(i){await ff(i)}}function Cw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Pw(t,e,n){const r=de(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}async function Ou(t,e,n){const r=de(t),i=[],s=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{a.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Cf.As(u.targetId,h);s.push(m)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(u,h){const f=de(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,_=>O.forEach(_.Es,R=>f.persistence.referenceDelegate.addReference(m,_.targetId,R)).next(()=>O.forEach(_.ds,R=>f.persistence.referenceDelegate.removeReference(m,_.targetId,R)))))}catch(m){if(!na(m))throw m;W(VR,"Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const R=f.Ms.get(_),N=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(N);f.Ms=f.Ms.insert(_,D)}}}(r.localStore,s))}async function pk(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){W(uk,"User change. New user:",e.toKey());const r=await ww(n.localStore,e);n.currentUser=e,function(s,a){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new G(V.CANCELLED,a))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ou(n,r.Ls)}}function mk(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fk.bind(null,e),e}class ru{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return jR(this.persistence,new MR,e.initialUser,this.serializer)}Cu(e){return new _w(Af.mi,this.serializer)}Du(e){return new zR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ru.provider={build:()=>new ru};class gk extends ru{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ce(this.persistence.referenceDelegate instanceof nu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new wR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new _w(r=>nu.mi(r,n),this.serializer)}}class Qh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pk.bind(null,this.syncEngine),await ok(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ak}()}createDatastore(e){const n=Nu(e.databaseInfo.databaseId),r=function(s){return new GR(s)}(e.databaseInfo);return function(s,a,l,u){return new YR(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new ZR(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Qg(this.syncEngine,n,0),function(){return Bg.v()?new Bg:new BR}())}createSyncEngine(e,n){return function(i,s,a,l,u,h,f){const m=new ck(i,s,a,l,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=de(i);W(ia,"RemoteStore shutting down."),s.Ea.add(5),await sa(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Qh.provider={build:()=>new Qh};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="FirestoreClient";class yk{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=hf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{W(br,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(W(br,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Aw(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mc(t,e){t.asyncQueue.verifyOperationInProgress(),W(br,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ww(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Xg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vk(t);W(br,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Wg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Wg(e.remoteStore,i)),t._onlineComponents=e}async function vk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(br,"Using user provided OfflineComponentProvider");try{await Mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Cu("Error using user provided cache. Falling back to memory cache: "+n),await Mc(t,new ru)}}else W(br,"Using default OfflineComponentProvider"),await Mc(t,new gk(void 0));return t._offlineComponents}async function _k(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(br,"Using user provided OnlineComponentProvider"),await Xg(t,t._uninitializedComponentsProvider._online)):(W(br,"Using default OnlineComponentProvider"),await Xg(t,new Qh))),t._onlineComponents}function wk(t){return _k(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="firestore.googleapis.com",Jg=!0;class Zg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kw,this.ssl=Jg}else this.host=e.host,this.ssl=e.ssl??Jg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vR)throw new G(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XC;switch(r.type){case"firstParty":return new eP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Yg.get(n);r&&(W("ComponentProvider","Removing Datastore"),Yg.delete(n),r.terminate())}(this),Promise.resolve()}}function Ek(t,e,n,r={}){var h;t=Fh(t,Rf);const i=Es(e),s=t._getSettings(),a={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Tv(`https://${l}`),Iv("Firestore",!0)),s.host!==kw&&s.host!==l&&Cu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Pr(u,a)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=st.MOCK_USER;else{f=JT(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new G(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new st(_)}t._authCredentials=new YC(new F_(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kf(this.firestore,e,this._query)}}class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ho(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ta(n,lt._jsonSchema))return new lt(e,r||null,new J(ke.fromString(n.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:Oe("string",lt._jsonSchemaVersion),referencePath:Oe("string")};class Ho extends kf{constructor(e,n,r){super(e,n,DP(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new J(e))}withConverter(e){return new Ho(this.firestore,e,this._path)}}function Tk(t,e,...n){if(t=gt(t),arguments.length===1&&(e=hf.newId()),oP("doc","path",e),t instanceof Rf){const r=ke.fromString(e,...n);return Eg(r),new lt(t,null,new J(r))}{if(!(t instanceof lt||t instanceof Ho))throw new G(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Eg(r),new lt(t.firestore,t instanceof Ho?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="AsyncQueue";class ty{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ew(this,"async_queue_retry"),this._c=()=>{const r=Oc();r&&W(ey,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ei;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!na(e))throw e;W(ey,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,hi("INTERNAL UNHANDLED ERROR: ",ny(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Pf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Z(47125,{Pc:ny(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function ny(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Nw extends Rf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ty,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ty(e),this._firestoreClient=void 0,await e}}}function Ik(t,e){const n=typeof t=="object"?t:Wd(),r=typeof t=="string"?t:Xl,i=yi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=XT("firestore");s&&Ek(i,...s)}return i}function Sk(t){if(t._terminated)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||xk(t),t._firestoreClient}function xk(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,h,f){return new _P(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Rw(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new yk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rn(Cn.fromBase64String(e))}catch(n){throw new G(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rn(Cn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ta(e,rn._jsonSchema))return rn.fromBase64String(e.bytes)}}rn._jsonSchemaVersion="firestore/bytes/1.0",rn._jsonSchema={type:Oe("string",rn._jsonSchemaVersion),bytes:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$n._jsonSchemaVersion}}static fromJSON(e){if(ta(e,$n._jsonSchema))return new $n(e.latitude,e.longitude)}}$n._jsonSchemaVersion="firestore/geoPoint/1.0",$n._jsonSchema={type:Oe("string",$n._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ta(e,zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new zn(e.vectorValues);throw new G(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}zn._jsonSchemaVersion="firestore/vectorValue/1.0",zn._jsonSchema={type:Oe("string",zn._jsonSchemaVersion),vectorValues:Oe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=/^__.*__$/;class Ck{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _i(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}function bw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{Ac:t})}}class Df{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Df({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return iu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(bw(this.Ac)&&Ak.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Pk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nu(e)}Cc(e,n,r,i=!1){return new Df({Ac:e,methodName:n,Dc:r,path:Ye.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rk(t){const e=t._freezeSettings(),n=Nu(t._databaseId);return new Pk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kk(t,e,n,r,i,s={}){const a=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Vw("Data must be an object, but it was:",a,r);const l=Ow(r,a);let u,h;if(s.merge)u=new on(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const _=Nk(e,m,n);if(!a.contains(_))throw new G(V.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Dk(f,_)||f.push(_)}u=new on(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new Ck(new nn(l),u,h)}class Of extends bf{_toFieldTransform(e){return new qP(e.path,new $o)}isEqual(e){return e instanceof Of}}function Dw(t,e){if(Mw(t=gt(t)))return Vw("Unsupported field value:",e,t),Ow(t,e);if(t instanceof bf)return function(r,i){if(!bw(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Dw(l,i.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=gt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=we.fromDate(r);return{timestampValue:Wh(i.serializer,s)}}if(r instanceof we){const s=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wh(i.serializer,s)}}if(r instanceof $n)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rn)return{bytesValue:rR(i.serializer,r._byteString)};if(r instanceof lt){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gw(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof zn)return function(a,l){return{mapValue:{fields:{[G_]:{stringValue:Q_},[Uh]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return If(l.serializer,h)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${df(r)}`)}(t,e)}function Ow(t,e){const n={};return z_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(r,i)=>{const s=Dw(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Mw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof $n||t instanceof rn||t instanceof lt||t instanceof bf||t instanceof zn)}function Vw(t,e,n){if(!Mw(n)||!U_(n)){const r=df(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Nk(t,e,n){if((e=gt(e))instanceof Nf)return e._internalPath;if(typeof e=="string")return Lw(t,e);throw iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const bk=new RegExp("[~\\*/\\[\\]]");function Lw(t,e,n){if(e.search(bk)>=0)throw iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nf(...e.split("."))._internalPath}catch{throw iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function iu(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new G(V.INVALID_ARGUMENT,l+t+u)}function Dk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ok(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ok extends jw{data(){return super.data()}}function Fw(t,e){return typeof e=="string"?Lw(t,e):e instanceof Nf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class qa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class is extends jw{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=is._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}is._jsonSchemaVersion="firestore/documentSnapshot/1.0",is._jsonSchema={type:Oe("string",is._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class fl extends is{data(e={}){return super.data(e)}}class _o{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fl(this._firestore,this._userDataWriter,r.key,r,new qa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new fl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new fl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:Vk(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_o._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=hf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Vk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}_o._jsonSchemaVersion="firestore/querySnapshot/1.0",_o._jsonSchema={type:Oe("string",_o._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};function Lk(t,e,n){t=Fh(t,lt);const r=Fh(t.firestore,Nw),i=Mk(t.converter,e,n);return jk(r,[kk(Rk(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Un.none())])}function jk(t,e){return function(r,i){const s=new ei;return r.asyncQueue.enqueueAndForget(async()=>hk(await wk(r),i,s)),s.promise}(Sk(t),e)}function Fk(){return new Of("serverTimestamp")}(function(e,n=!0){(function(i){Ss=i})(Ts),xn(new cn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Nw(new JC(r.getProvider("auth-internal")),new tP(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yl(h.options.projectId,f)}(a,i),a);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Bt(yg,vg,e),Bt(yg,vg,"esm2020")})();const Uk={apiKey:"AIzaSyAKmov65RyCUPvvQU86_tIjRQeGQTchF3A",authDomain:"taximetro-a1014.firebaseapp.com",projectId:"taximetro-a1014",storageBucket:"taximetro-a1014.firebasestorage.app",messagingSenderId:"496806402421",appId:"1:496806402421:web:3795360104d3f040f55b3c",measurementId:"G-WF0JHFK64L"},Mf=kv(Uk);Hx(Mf);const no=KC(Mf),$k=Ik(Mf),zk=new On,ye={baseFare:50,waitingRate:3,distanceRates:[{min:0,max:3.99,price:50},{min:4,max:4.99,price:55},{min:5,max:5.99,price:60},{min:6,max:6.99,price:65},{min:7,max:7.99,price:70},{min:8,max:1/0,basePrice:80,extraRate:16}],paradaRapida:20,paradaServicio:50},Xs=[{id:"normal",name:"Viaje Normal",description:"Tarifa por distancia recorrida"},{id:"walmart",name:"Ruta Walmart",description:"Centro → Walmart Guzmán",distanceKm:5.2,fixedPrice:60},{id:"tecnologico",name:"Ruta Tecnológico",description:"Centro → Tec. Guzmán",distanceKm:5.9,fixedPrice:70},{id:"cristoRey",name:"Ruta Cristo Rey",description:"Centro → Cerro Cristo Rey",subTrips:[{id:"cristoRey-cano",name:"Caño",fixedPrice:60},{id:"cristoRey-mitad",name:"Mitad",fixedPrice:70},{id:"cristoRey-arriba",name:"Arriba",fixedPrice:80}]},{id:"colmena",name:"La Colmena",description:"Precio base $120",fixedPrice:120}],Bk=["Américas","Col. San José","Emiliano Zapata","Las Garzas","Las Lomas","Pueblos de Jalisco","Valle de Zapotlan"].sort(),Hk=(t,e)=>{const r=6356752314245e-6,i=1/298.257223563,s=t.latitude*Math.PI/180,a=e.latitude*Math.PI/180,u=(e.longitude-t.longitude)*Math.PI/180,h=Math.atan((1-i)*Math.tan(s)),f=Math.atan((1-i)*Math.tan(a)),m=Math.sin(h),_=Math.cos(h),R=Math.sin(f),N=Math.cos(f);let D=u,F,x=100,v,A,b,j,z;do{const T=Math.sin(D),te=Math.cos(D);if(A=Math.sqrt(N*T*(N*T)+(_*R-m*N*te)*(_*R-m*N*te)),A===0)return 0;j=m*R+_*N*te,z=Math.atan2(A,j);const Pe=_*N*T/A;v=1-Pe*Pe,b=j-2*m*R/v,isNaN(b)&&(b=0);const _t=i/16*v*(4+i*(4-3*v));F=D,D=u+(1-_t)*i*Pe*(z+_t*A*(b+_t*j*(-1+2*b*b)))}while(Math.abs(D-F)>1e-12&&--x>0);if(x===0){const te=(e.latitude-t.latitude)*Math.PI/180,Pe=(e.longitude-t.longitude)*Math.PI/180,_t=Math.sin(te/2)*Math.sin(te/2)+Math.cos(t.latitude*Math.PI/180)*Math.cos(e.latitude*Math.PI/180)*Math.sin(Pe/2)*Math.sin(Pe/2);return 6371e3*(2*Math.atan2(Math.sqrt(_t),Math.sqrt(1-_t)))}const w=v*(6378137*6378137-r*r)/(r*r),g=1+w/16384*(4096+w*(-768+w*(320-175*w))),E=w/1024*(256+w*(-128+w*(74-47*w))),I=E*A*(b+E/4*(j*(-1+2*b*b)-E/6*b*(-3+4*A*A)*(-3+4*b*b)));return r*g*(z-I)*1.15};function Wk(){const[t,e]=q.useState({distance:0,cost:ye.baseFare,waitingTime:0,isRunning:!1,isPaused:!1,rawDistance:0}),[n,r]=q.useState(null),[i,s]=q.useState(null),[a,l]=q.useState("requesting"),[u,h]=q.useState(Xs[0]),[f,m]=q.useState(null),[_,R]=q.useState(!1),[N,D]=q.useState(!1),[F,x]=q.useState(!1),[v,A]=q.useState(null),[b,j]=q.useState(!1);q.useState(""),q.useState(!1);const[z,w]=q.useState(0),[g,E]=q.useState(!1),[I,S]=q.useState(!1),[C,T]=q.useState(!1),[te,Pe]=q.useState({active:!1,withCage:null,cost:0}),[_t,qt]=q.useState(!1),[B,K]=q.useState({active:!1,type:"recoger",cost:0});q.useState(!1);const[Q,le]=q.useState(0),[ge,dn]=q.useState(0),[wt,fn]=q.useState(!1),[ue,Gt]=q.useState({active:!1,ninos:0,adultos:0,cost:0}),[wi,Ei]=q.useState(!1),[ht,aa]=q.useState(!1),[Vr,Lr]=q.useState(null),[Xn,la]=q.useState(!1),pn=q.useRef(null),[As,Ti]=q.useState(!1),[Ne,je]=q.useState(0),[Ii,Si]=q.useState(!1),xi=q.useRef(!1),Rn=q.useRef(null),Lt=q.useRef(null),jr=q.useRef(null),ua=M=>f&&M.id==="cristoRey"?f.fixedPrice:M.fixedPrice||ye.baseFare,Ai=M=>{dn(U=>U+1),le(U=>U+M),Ei(!1)},Kt=q.useCallback((M,U,ae=!1,Ee=Q)=>{const Fe=te.active?te.cost:0,Ue=ue.active?ue.cost:0;if(ae&&Vr)return Ee+70+U*ye.waitingRate+Fe+Ue;if(u.id==="colmena"){let $e=120;if(M>4.9){const Pt=M-4.9;$e=120+Math.ceil(Pt)*10}return Ee+$e+U*ye.waitingRate+Fe+Ue}const Qt=(u.id!=="normal"||ae&&!Vr)&&M>=3.7?5:0;let Ge;B.active?Ge=B.cost:u.id==="cristoRey"&&f?Ge=f.fixedPrice:Ge=u.fixedPrice||ye.baseFare;let jt=Ge;if(u.id!=="normal"){if(M>5){const $e=M-5;jt+=$e*10}}else for(const $e of ye.distanceRates)if(M>=$e.min&&M<=$e.max){if($e.extraRate&&M>8){const Pt=M-8;jt=$e.basePrice-ye.baseFare+Ge+Pt*$e.extraRate}else{const Pt=$e.price-ye.baseFare;jt=Ge+Pt}break}return Ee+jt+U*ye.waitingRate+Fe+Ue+Qt},[u,f,te,B,ue,Q,Vr]),ca=M=>{const U=Math.floor(M/60),ae=M%60;return`${U}:${ae.toString().padStart(2,"0")}`},ha=q.useCallback(M=>{if(r(M),l("available"),xi.current&&!t.isPaused)if(Rn.current){const U=Hk(Rn.current,M);if(U>15){const Ee=U/1e3;e(Fe=>{const Ue=Fe.rawDistance+Ee,Ge=Math.floor(Ue)*.125,jt=Math.max(0,Ue-Ge),$e=Math.floor(Fe.waitingTime/60);return{...Fe,rawDistance:Ue,distance:jt,cost:Kt(jt,$e,ht)}}),Rn.current=M}}else Rn.current=M},[Kt,t.isPaused,ht]);q.useEffect(()=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(M=>{const U={latitude:M.coords.latitude,longitude:M.coords.longitude,timestamp:Date.now()};r(U),Rn.current=U,l("available")},M=>{M.code===M.PERMISSION_DENIED?l("denied"):l("unavailable")},{enableHighAccuracy:!0}):l("unavailable")},[]);const da=()=>{Lt.current=Date.now(),jr.current=setInterval(()=>{if(Lt.current){const M=Math.floor((Date.now()-Lt.current)/1e3),U=z+M;e(ae=>({...ae,waitingTime:U}))}},1e3)},Yn=()=>{if(jr.current&&(clearInterval(jr.current),jr.current=null),Lt.current){const M=Math.floor((Date.now()-Lt.current)/1e3);w(U=>U+M)}Lt.current=null},Cs=()=>{if(n){xi.current=!0,Rn.current=null,w(0),e(U=>({...U,distance:0,rawDistance:0,waitingTime:0,isRunning:!0,isPaused:!1}));const M=navigator.geolocation.watchPosition(U=>{const ae={latitude:U.coords.latitude,longitude:U.coords.longitude,timestamp:Date.now()};ha(ae)},U=>console.error("GPS Error:",U),{enableHighAccuracy:!0,maximumAge:500,timeout:1e4});s(M)}},Ps=()=>{e(M=>{const U=!M.isPaused;return U?da():Yn(),{...M,isPaused:U}})},kn=()=>{i&&(navigator.geolocation.clearWatch(i),s(null)),Yn();const M={tripType:u.name,distance:t.distance,waitingTime:t.waitingTime,cost:t.cost,timestamp:new Date().toLocaleString(),isSorianaActive:ht,petConfig:{...te},servicioEspecialConfig:{...B},personasExtrasConfig:{...ue},numeroParadas:ge,costoParadas:Q};A(M),x(!0),xi.current=!1,w(0);const U=Xs[0];h(U),m(null),e({distance:0,rawDistance:0,cost:ye.baseFare,waitingTime:0,isRunning:!1,isPaused:!1}),S(!1),Pe({active:!1,withCage:null,cost:0}),K({active:!1,type:null,cost:0}),Gt({active:!1,ninos:0,adultos:0,cost:0}),aa(!1),Lr(null),le(0),dn(0),Rn.current=n},Rs=()=>{Xn?(pn.current&&(clearInterval(pn.current),pn.current=null),la(!1)):(la(!0),pn.current=setInterval(()=>{e(M=>{const U=M.distance+.1,ae=Math.floor(M.waitingTime/60);return{...M,distance:U,rawDistance:U,cost:Kt(U,ae,ht)}})},1e3))};q.useEffect(()=>()=>{pn.current&&clearInterval(pn.current)},[]),q.useEffect(()=>{if(!t.isRunning){const M=Math.floor(t.waitingTime/60);e(U=>({...U,cost:Kt(U.distance,M,ht)}))}},[u,f,t.isRunning,Kt,ht,t.distance,t.waitingTime]),q.useEffect(()=>{if(t.isRunning){const M=Math.floor(t.waitingTime/60);e(U=>({...U,cost:Kt(U.distance,M,ht)}))}},[Kt,t.waitingTime,t.isRunning,ht]),q.useEffect(()=>{if(ue.active||t.isRunning||te.active||B.active||ht||Q>0){const M=Math.floor(t.waitingTime/60);e(U=>({...U,cost:Kt(U.distance,M,ht)}))}},[Kt,ue,te,B,ht,Q,t.isRunning,t.distance,t.waitingTime]);const Nn=(M,U)=>{Gt(ae=>{const Ee=Math.max(0,ae[M]+U),Fe=M==="adultos"?Ee:ae.adultos,Ue=M==="ninos"?Ee:ae.ninos,Qt=Fe*20+Ue*10;return{active:Fe>0||Ue>0,adultos:Fe,ninos:Ue,cost:Qt}})},fa=()=>t.isRunning?t.isPaused?"bg-yellow-400":"bg-green-500":a==="available"?"bg-blue-400":"bg-red-500",Fr=()=>{if(t.isRunning)return t.isPaused?"EN PAUSA - ESPERANDO":"VIAJE EN CURSO";switch(a){case"available":return"GPS DISPONIBLE";case"requesting":return"BUSCANDO SEÑAL GPS...";case"denied":return"ACCESO GPS DENEGADO";case"unavailable":return"GPS NO DISPONIBLE";default:return"ESTADO DESCONOCIDO"}};return y.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 font-sans text-white",children:[y.jsxs("button",{onClick:()=>Si(!0),className:"fixed bottom-6 right-6 w-16 h-16 bg-green-600 hover:bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center font-bold text-lg transition duration-200 z-40 border-2 border-green-400",children:["$",Ne.toFixed(0)]}),y.jsxs("div",{className:"max-w-md mx-auto",children:[Ii&&y.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4",children:y.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500 rounded-xl p-6 max-w-sm w-full shadow-2xl",children:[y.jsxs("div",{className:"flex items-center justify-between mb-4",children:[y.jsx("h2",{className:"text-2xl font-bold text-white",children:"Ganancias del Día"}),y.jsx("button",{onClick:()=>Si(!1),className:"text-gray-400 hover:text-white text-2xl",children:"×"})]}),y.jsxs("div",{className:"bg-gray-700 border border-green-500/50 p-6 rounded-lg mb-6 text-center",children:[y.jsx("p",{className:"text-gray-300 text-sm mb-2",children:"Total Acumulado"}),y.jsxs("p",{className:"text-5xl font-extrabold text-green-400",children:["$",Ne.toFixed(0),y.jsx("span",{className:"text-lg text-gray-400 ml-2",children:"MXN"})]})]}),y.jsx("button",{onClick:()=>{je(0),Si(!1)},className:"w-full bg-red-600 hover:bg-red-500 text-white font-bold py-2 rounded-xl transition duration-200 mb-2",children:"Reiniciar"}),y.jsx("button",{onClick:()=>Si(!1),className:"w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 rounded-xl transition duration-200",children:"Cerrar"})]})}),As&&y.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4",children:y.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500 rounded-xl p-6 max-w-sm w-full shadow-2xl",children:[y.jsxs("div",{className:"flex items-center justify-between mb-4",children:[y.jsx("h2",{className:"text-2xl font-bold text-white",children:"Precios Foráneos"}),y.jsx("button",{onClick:()=>Ti(!1),className:"text-gray-400 hover:text-white text-2xl",children:"×"})]}),y.jsx("p",{className:"text-gray-300 mb-6 text-center",children:"Consulta los precios para viajes foráneos"}),y.jsx("a",{href:"https://precios.speedcabszapotlan.com",target:"_blank",rel:"noopener noreferrer",className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition duration-200 shadow-lg block text-center mb-3",children:"Abrir Precios Foráneos"}),y.jsx("button",{onClick:()=>Ti(!1),className:"w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 rounded-xl transition duration-200",children:"Cerrar"})]})}),F&&v&&y.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4",children:y.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500 rounded-xl p-6 max-w-sm w-full shadow-2xl",children:[y.jsxs("div",{className:"flex items-center justify-center mb-4",children:[y.jsx(Pm,{className:"w-8 h-8 text-blue-400 mr-2"}),y.jsx("h2",{className:"text-2xl font-bold text-center text-white",children:"Resumen del Viaje"})]}),y.jsxs("div",{className:"space-y-4",children:[y.jsx("div",{className:"bg-gray-700 border border-gray-600 p-3 rounded-lg",children:y.jsx("div",{className:"text-center",children:y.jsx("span",{className:"text-blue-400 font-bold text-lg",children:v.tripType})})}),y.jsxs("div",{className:"bg-gray-700 border border-gray-600 p-4 rounded-lg",children:[y.jsxs("div",{className:"flex justify-between items-center mb-2",children:[y.jsx("span",{className:"text-gray-300",children:"Distancia recorrida:"}),y.jsxs("span",{className:"font-bold text-lg text-blue-400",children:[v.distance.toFixed(3)," km"]})]}),y.jsxs("div",{className:"flex justify-between items-center mb-2",children:[y.jsx("span",{className:"text-gray-300",children:"Tiempo de espera:"}),y.jsx("span",{className:"font-bold text-lg text-blue-400",children:ca(v.waitingTime)})]}),y.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:y.jsxs("div",{className:"space-y-2 mb-2",children:[(()=>{var jt,$e,Pt,Ci;const U=Math.floor(v.waitingTime/60)*ye.waitingRate,ae=v.petConfig.active?v.petConfig.cost:0,Ee=v.personasExtrasConfig.active?v.personasExtrasConfig.cost:0;if(v.isSorianaActive&&Math.abs(v.cost-(70+v.costoParadas+U+ae+Ee))<1)return y.jsxs(y.Fragment,{children:[v.numeroParadas>0&&y.jsxs("div",{className:"flex justify-between items-center text-sm bg-blue-900/30 p-2 rounded",children:[y.jsxs("span",{className:"text-blue-300",children:["Paradas (",v.numeroParadas,"):"]}),y.jsxs("span",{className:"text-white font-semibold",children:["$",v.costoParadas," MXN"]})]}),y.jsxs("div",{className:"flex justify-between items-center text-sm",children:[y.jsx("span",{className:"text-gray-300",children:"Zona especial (tarifa fija):"}),y.jsx("span",{className:"text-white font-semibold",children:"$70 MXN"})]}),U>0&&y.jsxs("div",{className:"flex justify-between items-center text-sm",children:[y.jsx("span",{className:"text-gray-300",children:"Tiempo de espera:"}),y.jsxs("span",{className:"text-white font-semibold",children:["$",U.toFixed(0)," MXN"]})]}),ae>0&&y.jsxs("div",{className:"flex justify-between items-center text-sm",children:[y.jsx("span",{className:"text-gray-300",children:"Mascota:"}),y.jsxs("span",{className:"text-white font-semibold",children:["$",ae," MXN"]})]}),Ee>0&&y.jsxs("div",{className:"flex justify-between items-center text-sm",children:[y.jsx("span",{className:"text-gray-300",children:"Pasajeros adicionales:"}),y.jsxs("span",{className:"text-white font-semibold",children:["$",Ee," MXN"]})]})]});let Ue;v.servicioEspecialConfig.active?Ue=v.servicioEspecialConfig.cost:v.tripType.includes("Cristo Rey")?Ue=((Pt=($e=(jt=Xs.find(dt=>dt.name===v.tripType))==null?void 0:jt.subTrips)==null?void 0:$e.find(dt=>dt.name===v.tripType))==null?void 0:Pt.fixedPrice)||ye.baseFare:Ue=((Ci=Xs.find(dt=>dt.name===v.tripType))==null?void 0:Ci.fixedPrice)||ye.baseFare;let Qt=0;if(v.tripType.includes("Colmena"))v.distance>4.9&&v.distance-4.9;else if(v.tripType!=="Viaje Normal")v.distance>5&&v.distance-5;else for(const dt of ye.distanceRates)if(v.distance>=dt.min&&v.distance<=dt.max){if(dt.extraRate&&v.distance>8){const ks=v.distance-8;dt.basePrice-ye.baseFare+Ue+ks*dt.extraRate}else dt.price-ye.baseFare;break}(v.tripType!=="Viaje Normal"||v.isSorianaActive&&!v.costoParadas)&&v.distance>=3.7&&(Qt=5);const Ge=v.cost-v.costoParadas-U-ae-Ee-Qt;return y.jsxs(y.Fragment,{children:[v.numeroParadas>0&&y.jsxs("div",{className:"flex justify-between items-center text-sm bg-blue-900/30 p-2 rounded",children:[y.jsxs("span",{className:"text-blue-300",children:["Paradas (",v.numeroParadas,"):"]}),y.jsxs("span",{className:"text-white font-semibold",children:["$",v.costoParadas," MXN"]})]}),y.jsxs("div",{className:"flex justify-between items-center text-sm",children:[y.jsx("span",{className:"text-gray-300",children:"Tarifa de ruta:"}),y.jsxs("span",{className:"text-white font-semibold",children:["$",Ge.toFixed(2)," MXN"]})]}),U>0&&y.jsxs("div",{className:"flex justify-between items-center text-sm",children:[y.jsx("span",{className:"text-gray-300",children:"Tiempo de espera:"}),y.jsxs("span",{className:"text-white font-semibold",children:["$",U.toFixed(0)," MXN"]})]}),ae>0&&y.jsxs("div",{className:"flex justify-between items-center text-sm",children:[y.jsx("span",{className:"text-gray-300",children:"Mascota:"}),y.jsxs("span",{className:"text-white font-semibold",children:["$",ae," MXN"]})]}),Ee>0&&y.jsxs("div",{className:"flex justify-between items-center text-sm",children:[y.jsx("span",{className:"text-gray-300",children:"Pasajeros adicionales:"}),y.jsxs("span",{className:"text-white font-semibold",children:["$",Ee," MXN"]})]}),Qt>0&&y.jsxs("div",{className:"flex justify-between items-center text-sm",children:[y.jsx("span",{className:"text-gray-300",children:"Cargo adicional (>3.7 km):"}),y.jsxs("span",{className:"text-white font-semibold",children:["$",Qt," MXN"]})]})]})})(),y.jsxs("div",{className:"flex justify-between items-center mt-3 border-t border-blue-500/50 pt-3",children:[y.jsx("span",{className:"text-xl text-white",children:"TOTAL:"}),y.jsxs("span",{className:"text-3xl font-extrabold text-blue-400",children:["$",v.cost.toFixed(0)]})]})]})})]}),y.jsx("button",{onClick:async()=>{const M=Ne+v.cost;je(M);try{const U=no.currentUser;if(U){const ae=new Date().toISOString().split("T")[0],Ee=Tk($k,"gananciasDiarias",`${U.uid}_${ae}`);await Lk(Ee,{userId:U.uid,fecha:ae,totalGanancias:M,ultimaActualizacion:Fk()},{merge:!0})}}catch(U){console.error("Error al guardar ganancias:",U)}x(!1)},className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition duration-200 shadow-lg",children:"Cerrar"})]})]})}),y.jsxs("header",{className:"mb-6",children:[y.jsxs("h1",{className:"text-4xl font-extrabold text-white text-center mb-1 flex items-center justify-center",children:[y.jsx(MT,{className:"w-8 h-8 text-blue-400 mr-2"}),"Taxímetro GPS"]}),y.jsxs("div",{className:`text-center py-1.5 px-3 rounded-full text-sm font-semibold text-gray-900 ${fa()}`,children:[y.jsx(LT,{className:"w-4 h-4 inline-block mr-1"}),Fr()]}),y.jsx("div",{className:"mt-3 text-center",children:y.jsx("button",{onClick:()=>Ti(!0),className:"inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-200",children:"Foraneos"})})]}),y.jsxs("div",{className:"bg-gray-800 p-6 rounded-2xl shadow-2xl mb-6 border border-gray-700",children:[y.jsxs("div",{className:"flex justify-between items-end mb-4",children:[y.jsxs("div",{className:"text-left",children:[y.jsx("span",{className:"text-xs font-medium text-blue-400 uppercase",children:"Distancia Recorrida"}),y.jsxs("p",{className:"text-4xl font-bold text-white leading-none",children:[t.distance.toFixed(3),y.jsx("span",{className:"text-lg font-normal text-gray-400 ml-1",children:"km"})]})]}),y.jsxs("div",{className:"text-right",children:[y.jsx("span",{className:"text-xs font-medium text-blue-400 uppercase",children:"Tiempo de Espera"}),y.jsx("p",{className:"text-2xl font-bold text-white leading-none",children:ca(t.waitingTime)})]})]}),y.jsxs("div",{className:"text-center bg-black/50 p-3 rounded-xl border border-blue-500/50",children:[y.jsx("span",{className:"text-xs font-medium text-blue-400 uppercase block",children:"Tarifa Total"}),y.jsxs("p",{className:"text-6xl font-extrabold text-blue-400 mt-1",children:["$",Math.ceil(t.cost).toFixed(0),y.jsx("span",{className:"text-xl font-normal text-gray-400 ml-1",children:"MXN"})]}),y.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["(Tarifa Base: $",ua(u).toFixed(2),")"]})]})]}),y.jsx("div",{className:"grid grid-cols-3 gap-4 mb-6",children:t.isRunning?y.jsxs(y.Fragment,{children:[y.jsxs("button",{onClick:Ps,className:`flex flex-col items-center justify-center p-3 rounded-xl shadow-lg transition duration-200 ${t.isPaused?"bg-yellow-600 hover:bg-yellow-500":"bg-blue-600 hover:bg-blue-500"}`,children:[t.isPaused?y.jsx(km,{className:"w-6 h-6 text-white"}):y.jsx(FT,{className:"w-6 h-6 text-white"}),y.jsx("span",{className:"text-xs mt-1 font-bold text-white",children:t.isPaused?"Reanudar":"Pausar"})]}),y.jsxs("button",{onClick:kn,className:"flex flex-col items-center justify-center p-3 rounded-xl bg-red-600 hover:bg-red-500 text-white shadow-lg transition duration-200",children:[y.jsx($T,{className:"w-6 h-6"}),y.jsx("span",{className:"text-xs mt-1 font-bold",children:"Finalizar"})]}),y.jsxs("button",{onClick:Rs,className:`flex flex-col items-center justify-center p-3 rounded-xl shadow-lg transition duration-200 ${Xn?"bg-green-600 hover:bg-green-500":"bg-gray-600 hover:bg-gray-500"} text-white`,children:[y.jsx(bm,{className:"w-6 h-6"}),y.jsx("span",{className:"text-xs mt-1 font-bold",children:Xn?"SIMULANDO":"Simular"})]})]}):y.jsxs(y.Fragment,{children:[y.jsxs("button",{onClick:Cs,className:`col-span-2 flex flex-col items-center justify-center p-3 rounded-xl shadow-lg transition duration-200 ${a==="available"?"bg-green-600 hover:bg-green-500 text-white":"bg-gray-600 text-gray-300 cursor-not-allowed"}`,disabled:a!=="available",children:[y.jsx(km,{className:"w-8 h-8"}),y.jsx("span",{className:"text-md mt-1 font-bold",children:"INICIAR VIAJE"})]}),y.jsxs("button",{onClick:Rs,className:`flex flex-col items-center justify-center p-3 rounded-xl shadow-lg transition duration-200 ${Xn?"bg-green-600 hover:bg-green-500":"bg-gray-600 hover:bg-gray-500"} text-white`,children:[y.jsx(bm,{className:"w-6 h-6"}),y.jsx("span",{className:"text-xs mt-1 font-bold",children:Xn?"SIMULANDO":"Simular"})]})]})}),t.isRunning&&y.jsxs("div",{className:"bg-gray-800 p-4 rounded-xl shadow-lg mb-6 border border-gray-700 relative",children:[y.jsxs("h3",{className:"text-lg font-bold text-white mb-2 flex items-center",children:[y.jsx(Pm,{className:"w-5 h-5 text-blue-400 mr-2"}),"Paradas"]}),y.jsxs("div",{className:"flex justify-between items-center text-sm mb-2",children:[y.jsx("span",{className:"text-gray-300",children:"Número de paradas:"}),y.jsx("span",{className:"font-bold text-white",children:ge})]}),y.jsxs("div",{className:"flex justify-between items-center text-sm mb-4",children:[y.jsx("span",{className:"text-gray-300",children:"Costo acumulado:"}),y.jsxs("span",{className:"font-bold text-blue-400",children:["$",Q.toFixed(0)," MXN"]})]}),y.jsx("button",{onClick:()=>Ei(!0),className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl transition duration-200",disabled:wi,children:"Añadir Parada"}),wi&&y.jsx("div",{className:"absolute inset-0 bg-black/70 flex items-center justify-center p-4 rounded-xl z-10",children:y.jsxs("div",{className:"bg-gray-700 p-4 rounded-lg w-full max-w-xs shadow-2xl border border-blue-500/50",children:[y.jsx("h4",{className:"text-lg font-bold text-white mb-3 text-center",children:"Tipo de Parada:"}),y.jsxs("div",{className:"space-y-3",children:[y.jsxs("button",{onClick:()=>Ai(ye.paradaRapida),className:"w-full flex items-center justify-between p-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-bold transition duration-150",children:[y.jsx(OT,{className:"w-5 h-5"}),y.jsx("span",{className:"text-sm",children:"Parada Rápida"}),y.jsxs("span",{className:"text-lg font-extrabold",children:["+$",ye.paradaRapida]})]}),y.jsxs("button",{onClick:()=>Ai(ye.paradaServicio),className:"w-full flex items-center justify-between p-3 rounded-lg bg-yellow-600 hover:bg-yellow-500 text-white font-bold transition duration-150",children:[y.jsx(UT,{className:"w-5 h-5"}),y.jsx("span",{className:"text-sm",children:"Parada con Servicio"}),y.jsxs("span",{className:"text-lg font-extrabold",children:["+$",ye.paradaServicio]})]})]}),y.jsx("button",{onClick:()=>Ei(!1),className:"w-full mt-4 bg-gray-500 hover:bg-gray-600 text-white text-sm py-2 rounded-lg",children:"Cancelar"})]})})]}),y.jsxs("div",{className:"bg-gray-800 p-4 rounded-xl shadow-lg mb-6 border border-gray-700",children:[y.jsxs("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>R(M=>!M),children:[y.jsxs("div",{className:"flex items-center",children:[y.jsx(bT,{className:"w-5 h-5 text-blue-400 mr-2"}),y.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Tipo de Ruta:"})]}),y.jsxs("div",{className:"flex items-center",children:[y.jsx("span",{className:"text-md font-bold text-white mr-2",children:u.name}),_?y.jsx(Ec,{className:"w-5 h-5 text-white"}):y.jsx(wc,{className:"w-5 h-5 text-white"})]})]}),_&&y.jsx("div",{className:"mt-3 border-t border-gray-700 pt-3 max-h-48 overflow-y-auto",children:y.jsx("div",{className:"space-y-2",children:Xs.map(M=>y.jsxs("button",{onClick:()=>{h(M),R(!1),m(null),M.subTrips&&D(!0)},className:`w-full text-left p-2 rounded-lg transition duration-150 ${u.id===M.id?"bg-blue-600 text-white font-semibold":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,disabled:t.isRunning,children:[y.jsx("span",{className:"block text-sm",children:M.name}),y.jsx("span",{className:"block text-xs opacity-70",children:M.description})]},M.id))})}),u.subTrips&&N&&y.jsxs("div",{className:"mt-3 border-t border-gray-700 pt-3",children:[y.jsx("p",{className:"text-sm font-medium text-white mb-2",children:"Selecciona Ruta Específica:"}),y.jsx("div",{className:"grid grid-cols-3 gap-2",children:u.subTrips.map(M=>y.jsxs("button",{onClick:()=>{m(M),D(!1),e(U=>({...U,cost:M.fixedPrice||ye.baseFare}))},className:`p-2 rounded-lg text-center transition duration-150 ${(f==null?void 0:f.id)===M.id?"bg-blue-600 text-white font-semibold":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,disabled:t.isRunning,children:[y.jsx("span",{className:"block text-xs",children:M.name}),y.jsxs("span",{className:"block text-sm font-bold",children:["$",M.fixedPrice]})]},M.id))})]})]}),y.jsxs("div",{className:"bg-gray-800 p-4 rounded-xl shadow-lg mb-6 border border-gray-700",children:[y.jsxs("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>{t.isRunning||(aa(M=>!M),Lr(null))},children:[y.jsxs("div",{className:"flex items-center",children:[y.jsx(jT,{className:"w-5 h-5 text-blue-400 mr-2"}),y.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Zona Especial (Tarifa fija $70)"})]}),y.jsx("input",{type:"checkbox",checked:ht,onChange:()=>{},className:"form-checkbox h-5 w-5 text-red-600 bg-gray-700 border-gray-600 rounded",disabled:t.isRunning})]}),ht&&y.jsxs("div",{className:"mt-3 border-t border-gray-700 pt-3",children:[y.jsx("p",{className:"text-sm font-medium text-white mb-2",children:"Selecciona la zona:"}),y.jsxs("select",{value:Vr||"",onChange:M=>{Lr(M.target.value===""?null:M.target.value),t.isRunning||e(U=>({...U,cost:70}))},className:"w-full bg-gray-700 text-white p-2 rounded-lg text-sm",disabled:t.isRunning,children:[y.jsx("option",{value:"",children:"(Selecciona una zona)"}),Bk.map(M=>y.jsx("option",{value:M,children:M},M))]})]})]}),y.jsxs("div",{className:"bg-gray-800 p-4 rounded-xl shadow-lg mb-6 border border-gray-700",children:[y.jsxs("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>E(M=>!M),children:[y.jsxs("div",{className:"flex items-center",children:[y.jsx(DT,{className:"w-5 h-5 text-blue-400 mr-2"}),y.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Servicios Adicionales"})]}),g?y.jsx(Ec,{className:"w-5 h-5 text-white"}):y.jsx(wc,{className:"w-5 h-5 text-white"})]}),g&&y.jsxs("div",{className:"mt-3 border-t border-gray-700 pt-3 space-y-3",children:[y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("div",{className:"flex items-center",children:y.jsxs("span",{className:"text-sm text-white",children:["Mascota (+$",te.withCage?20:30," MXN)"]})}),y.jsx("button",{onClick:()=>T(M=>!M),className:`px-3 py-1 rounded-full text-xs font-semibold transition ${te.active?"bg-green-600 text-white":"bg-gray-600 text-gray-300 hover:bg-gray-500"}`,disabled:t.isRunning,children:te.active?"Activo":"Añadir"})]}),C&&y.jsxs("div",{className:"bg-gray-700 p-3 rounded-lg space-y-2",children:[y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("span",{className:"text-xs text-gray-300",children:"¿Con jaula/transportadora?"}),y.jsxs("div",{className:"flex space-x-2",children:[y.jsx("button",{onClick:()=>{Pe({active:!0,withCage:!0,cost:20}),T(!1)},className:`px-3 py-1 text-xs rounded-full ${te.withCage===!0?"bg-blue-500 text-white":"bg-gray-600 text-gray-300 hover:bg-gray-500"}`,disabled:t.isRunning,children:"Sí ($20)"}),y.jsx("button",{onClick:()=>{Pe({active:!0,withCage:!1,cost:30}),T(!1)},className:`px-3 py-1 text-xs rounded-full ${te.withCage===!1?"bg-red-500 text-white":"bg-gray-600 text-gray-300 hover:bg-gray-500"}`,disabled:t.isRunning,children:"No ($30)"})]})]}),y.jsx("button",{onClick:()=>{Pe({active:!1,withCage:null,cost:0}),T(!1)},className:"w-full bg-red-700 text-white text-xs py-1 rounded",disabled:t.isRunning,children:"Eliminar"})]}),y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("div",{className:"flex items-center",children:y.jsx("span",{className:"text-sm text-white",children:"Servicio Especial (Recoger +$60 / Comprar +$70)"})}),y.jsx("button",{onClick:()=>qt(M=>!M),className:`px-3 py-1 rounded-full text-xs font-semibold transition ${B.active?"bg-green-600 text-white":"bg-gray-600 text-gray-300 hover:bg-gray-500"}`,disabled:t.isRunning,children:B.active?"Activo":"Añadir"})]}),_t&&y.jsxs("div",{className:"bg-gray-700 p-3 rounded-lg space-y-2",children:[y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("span",{className:"text-xs text-gray-300",children:"Selecciona tipo de servicio:"}),y.jsxs("div",{className:"flex space-x-2",children:[y.jsx("button",{onClick:()=>{K({active:!0,type:"recoger",cost:60}),qt(!1)},className:`px-3 py-1 text-xs rounded-full ${B.type==="recoger"?"bg-blue-500 text-white":"bg-gray-600 text-gray-300 hover:bg-gray-500"}`,disabled:t.isRunning,children:"Recoger ($60)"}),y.jsx("button",{onClick:()=>{K({active:!0,type:"comprar",cost:70}),qt(!1)},className:`px-3 py-1 text-xs rounded-full ${B.type==="comprar"?"bg-blue-500 text-white":"bg-gray-600 text-gray-300 hover:bg-gray-500"}`,disabled:t.isRunning,children:"Comprar ($70)"})]})]}),y.jsx("button",{onClick:()=>{K({active:!1,type:null,cost:0}),qt(!1)},className:"w-full bg-red-700 text-white text-xs py-1 rounded",disabled:t.isRunning,children:"Eliminar"})]}),y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("div",{className:"flex items-center",children:y.jsx("span",{className:"text-sm text-white",children:"Pasajeros Adicionales (+ $20/Adulto, $10/Niño)"})}),y.jsx("button",{onClick:()=>fn(M=>!M),className:`px-3 py-1 rounded-full text-xs font-semibold transition ${ue.active?"bg-green-600 text-white":"bg-gray-600 text-gray-300 hover:bg-gray-500"}`,disabled:t.isRunning,children:ue.active?"Activo":"Añadir"})]}),wt&&y.jsxs("div",{className:"bg-gray-700 p-3 rounded-lg space-y-2",children:[y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("span",{className:"text-xs text-gray-300",children:"Adultos ($20 c/u):"}),y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx("button",{onClick:()=>Nn("adultos",-1),className:`p-1 rounded-full transition ${ue.adultos>0&&!t.isRunning?"bg-red-500 hover:bg-red-400":"bg-gray-600 cursor-not-allowed"}`,disabled:ue.adultos===0||t.isRunning,children:y.jsx(Rm,{className:"w-4 h-4 text-white"})}),y.jsx("span",{className:"w-6 text-center text-white font-bold text-sm",children:ue.adultos}),y.jsx("button",{onClick:()=>Nn("adultos",1),className:`p-1 rounded-full transition ${t.isRunning?"bg-gray-600 cursor-not-allowed":"bg-green-500 hover:bg-green-400"}`,disabled:t.isRunning,children:y.jsx(Nm,{className:"w-4 h-4 text-white"})})]})]}),y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("span",{className:"text-xs text-gray-300",children:"Niños ($10 c/u):"}),y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx("button",{onClick:()=>Nn("ninos",-1),className:`p-1 rounded-full transition ${ue.ninos>0&&!t.isRunning?"bg-red-500 hover:bg-red-400":"bg-gray-600 cursor-not-allowed"}`,disabled:ue.ninos===0||t.isRunning,children:y.jsx(Rm,{className:"w-4 h-4 text-white"})}),y.jsx("span",{className:"w-6 text-center text-white font-bold text-sm",children:ue.ninos}),y.jsx("button",{onClick:()=>Nn("ninos",1),className:`p-1 rounded-full transition ${t.isRunning?"bg-gray-600 cursor-not-allowed":"bg-green-500 hover:bg-green-400"}`,disabled:t.isRunning,children:y.jsx(Nm,{className:"w-4 h-4 text-white"})})]})]}),y.jsxs("p",{className:"text-right text-sm font-bold text-blue-400",children:["Costo adicional: $",ue.cost," MXN"]}),y.jsx("button",{onClick:()=>fn(!1),className:"w-full bg-blue-700 text-white text-xs py-1 rounded",children:"Guardar"})]})]})]}),y.jsxs("div",{className:"bg-gray-800 p-4 rounded-xl shadow-lg mb-6 border border-gray-700",children:[y.jsxs("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>j(M=>!M),children:[y.jsxs("div",{className:"flex items-center",children:[y.jsx(VT,{className:"w-5 h-5 text-gray-400 mr-2"}),y.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Información de Tarifas"})]}),b?y.jsx(Ec,{className:"w-5 h-5 text-white"}):y.jsx(wc,{className:"w-5 h-5 text-white"})]}),b&&y.jsxs("div",{className:"mt-3 border-t border-gray-700 pt-3 space-y-3 text-sm text-gray-300",children:[y.jsxs("p",{className:"font-bold text-white",children:["Tarifa Base: $",ye.baseFare," MXN"]}),y.jsxs("p",{className:"font-bold text-white",children:["Costo por Tiempo de Espera: $",ye.waitingRate," MXN/min"]}),y.jsx("h4",{className:"font-bold text-blue-400 mt-3",children:"Tarifas por Distancia (Viaje Normal):"}),y.jsx("ul",{className:"list-disc list-inside space-y-1 ml-2",children:ye.distanceRates.map((M,U)=>y.jsx("li",{children:M.max===1/0?`> ${M.min.toFixed(2)} km: Base $${M.basePrice} + $${M.extraRate}/km extra`:`${M.min.toFixed(2)} - ${M.max.toFixed(2)} km: $${M.price} MXN`},U))}),y.jsx("h4",{className:"font-bold text-blue-400 mt-3",children:"Tarifas Adicionales:"}),y.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-2",children:[y.jsx("li",{children:"**Ajuste GPS:** Se aplica un ajuste del **12.5%** a la distancia total (0.125 km por cada km) para compensar desvíos."}),y.jsx("li",{children:"**Rutas Fijas:** Rutas específicas (Walmart, Tecnológico, etc.) tienen tarifa fija que se usa como base para cálculos."}),y.jsx("li",{children:"**Rutas Especiales/Zonas:** +$5 MXN si la distancia es ≥ 3.7 km."}),y.jsx("li",{children:"**Mascota:** Con jaula: **+$20**; Sin jaula: **+$30**."}),y.jsx("li",{children:"**Servicio Especial:** Recoger: **+$60**; Comprar: **+$70**."}),y.jsx("li",{children:"**Pasajeros Adicionales:** Adultos **+$20**, Niños **+$10**."}),y.jsx("li",{children:"**Parada Rápida:** **+$20** MXN."}),y.jsx("li",{children:"**Parada con Servicio:** **+$50** MXN."})]})]})]}),y.jsxs("footer",{className:"mt-6 text-center text-xs text-gray-500",children:[n&&y.jsxs("p",{children:["GPS: Lat ",n.latitude.toFixed(6),", Lon ",n.longitude.toFixed(6)]}),t.isRunning&&y.jsxs("p",{children:["Distancia Cruda: ",t.rawDistance.toFixed(3)," km"]})]})]})]})}const qk=({children:t})=>{const[e,n]=q.useState(null),[r,i]=q.useState(!0);q.useEffect(()=>{(async()=>{try{await cC(no)}catch(u){console.error("Error al procesar redirección:",u)}const l=VA(no,u=>{n(u),i(!1)});return()=>l()})()},[]);const s=async()=>{try{await lC(no,zk)}catch(l){console.error("Error al iniciar sesión:",l)}},a=async()=>{try{await LA(no)}catch(l){console.error("Error al cerrar sesión:",l)}};return r?y.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center",children:y.jsx("div",{className:"text-white text-xl",children:"Cargando..."})}):e?y.jsxs("div",{className:"relative",children:[y.jsxs("div",{className:"fixed top-4 right-4 z-50 flex items-center gap-3 bg-gray-800 p-2 rounded-lg border border-gray-700",children:[y.jsx("img",{src:e.photoURL||"",alt:e.displayName||"Usuario",className:"w-8 h-8 rounded-full"}),y.jsx("span",{className:"text-white text-sm hidden sm:inline",children:e.displayName}),y.jsx("button",{onClick:a,className:"bg-red-600 hover:bg-red-500 text-white text-xs px-3 py-1 rounded transition",children:"Salir"})]}),t]}):y.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4",children:y.jsxs("div",{className:"bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 max-w-md w-full",children:[y.jsx("h1",{className:"text-3xl font-bold text-white text-center mb-6",children:"Taxímetro GPS"}),y.jsx("p",{className:"text-gray-300 text-center mb-8",children:"Inicia sesión para continuar"}),y.jsxs("button",{onClick:s,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition duration-200 flex items-center justify-center gap-3",children:[y.jsxs("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",children:[y.jsx("path",{fill:"currentColor",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),y.jsx("path",{fill:"currentColor",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),y.jsx("path",{fill:"currentColor",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),y.jsx("path",{fill:"currentColor",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Iniciar sesión con Google"]})]})})};mv(document.getElementById("root")).render(y.jsx(q.StrictMode,{children:y.jsx(qk,{children:y.jsx(Wk,{})})}));
