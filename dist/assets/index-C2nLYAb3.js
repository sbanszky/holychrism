(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Ql={exports:{}},ti={},Gl={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),uc=Symbol.for("react.portal"),cc=Symbol.for("react.fragment"),dc=Symbol.for("react.strict_mode"),pc=Symbol.for("react.profiler"),hc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),yc=Symbol.for("react.memo"),vc=Symbol.for("react.lazy"),Ro=Symbol.iterator;function bc(e){return e===null||typeof e!="object"?null:(e=Ro&&e[Ro]||e["@@iterator"],typeof e=="function"?e:null)}var Kl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yl=Object.assign,ql={};function on(e,t,n){this.props=e,this.context=t,this.refs=ql,this.updater=n||Kl}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zl(){}Zl.prototype=on.prototype;function Hs(e,t,n){this.props=e,this.context=t,this.refs=ql,this.updater=n||Kl}var Bs=Hs.prototype=new Zl;Bs.constructor=Hs;Yl(Bs,on.prototype);Bs.isPureReactComponent=!0;var Fo=Array.isArray,Jl=Object.prototype.hasOwnProperty,Vs={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Jl.call(t,r)&&!ea.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Kn,type:e,key:s,ref:o,props:i,_owner:Vs.current}}function xc(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Us(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function wc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Do=/\/+/g;function xi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wc(""+e.key):t.toString(36)}function br(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kn:case uc:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+xi(o,0):r,Fo(i)?(n="",e!=null&&(n=e.replace(Do,"$&/")+"/"),br(i,t,n,"",function(c){return c})):i!=null&&(Us(i)&&(i=xc(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Do,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Fo(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+xi(s,l);o+=br(s,t,n,a,i)}else if(a=bc(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+xi(s,l++),o+=br(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,t,n){if(e==null)return e;var r=[],i=0;return br(e,r,"","",function(s){return t.call(n,s,i++)}),r}function kc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var le={current:null},xr={transition:null},Sc={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:xr,ReactCurrentOwner:Vs};function na(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=on;_.Fragment=cc;_.Profiler=pc;_.PureComponent=Hs;_.StrictMode=dc;_.Suspense=gc;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sc;_.act=na;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yl({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Vs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Jl.call(t,a)&&!ea.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Kn,type:e.type,key:i,ref:s,props:r,_owner:o}};_.createContext=function(e){return e={$$typeof:fc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hc,_context:e},e.Consumer=e};_.createElement=ta;_.createFactory=function(e){var t=ta.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:mc,render:e}};_.isValidElement=Us;_.lazy=function(e){return{$$typeof:vc,_payload:{_status:-1,_result:e},_init:kc}};_.memo=function(e,t){return{$$typeof:yc,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=xr.transition;xr.transition={};try{e()}finally{xr.transition=t}};_.unstable_act=na;_.useCallback=function(e,t){return le.current.useCallback(e,t)};_.useContext=function(e){return le.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return le.current.useDeferredValue(e)};_.useEffect=function(e,t){return le.current.useEffect(e,t)};_.useId=function(){return le.current.useId()};_.useImperativeHandle=function(e,t,n){return le.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return le.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return le.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return le.current.useMemo(e,t)};_.useReducer=function(e,t,n){return le.current.useReducer(e,t,n)};_.useRef=function(e){return le.current.useRef(e)};_.useState=function(e){return le.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return le.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return le.current.useTransition()};_.version="18.3.1";Gl.exports=_;var ze=Gl.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=ze,Cc=Symbol.for("react.element"),Ic=Symbol.for("react.fragment"),Ec=Object.prototype.hasOwnProperty,Nc=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pc={key:!0,ref:!0,__self:!0,__source:!0};function ra(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ec.call(t,r)&&!Pc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Cc,type:e,key:s,ref:o,props:i,_owner:Nc.current}}ti.Fragment=Ic;ti.jsx=ra;ti.jsxs=ra;Ql.exports=ti;var v=Ql.exports,ia={exports:{}},ve={},sa={exports:{}},oa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,N){var P=T.length;T.push(N);e:for(;0<P;){var $=P-1>>>1,K=T[$];if(0<i(K,N))T[$]=N,T[P]=K,P=$;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var N=T[0],P=T.pop();if(P!==N){T[0]=P;e:for(var $=0,K=T.length,er=K>>>1;$<er;){var yt=2*($+1)-1,bi=T[yt],vt=yt+1,tr=T[vt];if(0>i(bi,P))vt<K&&0>i(tr,bi)?(T[$]=tr,T[vt]=P,$=vt):(T[$]=bi,T[yt]=P,$=yt);else if(vt<K&&0>i(tr,P))T[$]=tr,T[vt]=P,$=vt;else break e}}return N}function i(T,N){var P=T.sortIndex-N.sortIndex;return P!==0?P:T.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],c=[],m=1,f=null,h=3,b=!1,x=!1,w=!1,F=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=T)r(c),N.sortIndex=N.expirationTime,t(a,N);else break;N=n(c)}}function g(T){if(w=!1,p(T),!x)if(n(a)!==null)x=!0,yi(S);else{var N=n(c);N!==null&&vi(g,N.startTime-T)}}function S(T,N){x=!1,w&&(w=!1,d(E),E=-1),b=!0;var P=h;try{for(p(N),f=n(a);f!==null&&(!(f.expirationTime>N)||T&&!Ie());){var $=f.callback;if(typeof $=="function"){f.callback=null,h=f.priorityLevel;var K=$(f.expirationTime<=N);N=e.unstable_now(),typeof K=="function"?f.callback=K:f===n(a)&&r(a),p(N)}else r(a);f=n(a)}if(f!==null)var er=!0;else{var yt=n(c);yt!==null&&vi(g,yt.startTime-N),er=!1}return er}finally{f=null,h=P,b=!1}}var C=!1,I=null,E=-1,U=5,z=-1;function Ie(){return!(e.unstable_now()-z<U)}function un(){if(I!==null){var T=e.unstable_now();z=T;var N=!0;try{N=I(!0,T)}finally{N?cn():(C=!1,I=null)}}else C=!1}var cn;if(typeof u=="function")cn=function(){u(un)};else if(typeof MessageChannel<"u"){var Oo=new MessageChannel,ac=Oo.port2;Oo.port1.onmessage=un,cn=function(){ac.postMessage(null)}}else cn=function(){F(un,0)};function yi(T){I=T,C||(C=!0,cn())}function vi(T,N){E=F(function(){T(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||b||(x=!0,yi(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var P=h;h=N;try{return T()}finally{h=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,N){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var P=h;h=T;try{return N()}finally{h=P}},e.unstable_scheduleCallback=function(T,N,P){var $=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,T){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=P+K,T={id:m++,callback:N,priorityLevel:T,startTime:P,expirationTime:K,sortIndex:-1},P>$?(T.sortIndex=P,t(c,T),n(a)===null&&T===n(c)&&(w?(d(E),E=-1):w=!0,vi(g,P-$))):(T.sortIndex=K,t(a,T),x||b||(x=!0,yi(S))),T},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(T){var N=h;return function(){var P=h;h=N;try{return T.apply(this,arguments)}finally{h=P}}}})(oa);sa.exports=oa;var _c=sa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=ze,ye=_c;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var la=new Set,jn={};function zt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(jn[e]=t,e=0;e<t.length;e++)la.add(t[e])}var We=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qi=Object.prototype.hasOwnProperty,jc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ao={},Ho={};function Mc(e){return Qi.call(Ho,e)?!0:Qi.call(Ao,e)?!1:jc.test(e)?Ho[e]=!0:(Ao[e]=!0,!1)}function Lc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Oc(e,t,n,r){if(t===null||typeof t>"u"||Lc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var $s=/[\-:]([a-z])/g;function Ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($s,Ws);ee[t]=new ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($s,Ws);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($s,Ws);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xs(e,t,n,r){var i=ee.hasOwnProperty(t)?ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Oc(t,n,i,r)&&(n=null),r||i===null?Mc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ke=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Lt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Qs=Symbol.for("react.strict_mode"),Gi=Symbol.for("react.profiler"),aa=Symbol.for("react.provider"),ua=Symbol.for("react.context"),Gs=Symbol.for("react.forward_ref"),Ki=Symbol.for("react.suspense"),Yi=Symbol.for("react.suspense_list"),Ks=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),ca=Symbol.for("react.offscreen"),Bo=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Bo&&e[Bo]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,wi;function bn(e){if(wi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wi=t&&t[1]||""}return`
`+wi+e}var ki=!1;function Si(e,t){if(!e||ki)return"";ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{ki=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bn(e):""}function Rc(e){switch(e.tag){case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return bn("Suspense");case 19:return bn("SuspenseList");case 0:case 2:case 15:return e=Si(e.type,!1),e;case 11:return e=Si(e.type.render,!1),e;case 1:return e=Si(e.type,!0),e;default:return""}}function qi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Lt:return"Portal";case Gi:return"Profiler";case Qs:return"StrictMode";case Ki:return"Suspense";case Yi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ua:return(e.displayName||"Context")+".Consumer";case aa:return(e._context.displayName||"Context")+".Provider";case Gs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ks:return t=e.displayName||null,t!==null?t:qi(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return qi(e(t))}catch{}}return null}function Fc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qi(t);case 8:return t===Qs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function da(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dc(e){var t=da(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){e._valueTracker||(e._valueTracker=Dc(e))}function pa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=da(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zi(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ha(e,t){t=t.checked,t!=null&&Xs(e,"checked",t,!1)}function Ji(e,t){ha(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?es(e,t.type,n):t.hasOwnProperty("defaultValue")&&es(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function es(e,t,n){(t!=="number"||zr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ts(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $o(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(xn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function fa(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ma(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ns(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ma(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,ga=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ac=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Ac.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function ya(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function va(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ya(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Hc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rs(e,t){if(t){if(Hc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function is(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ss=null;function Ys(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var os=null,Qt=null,Gt=null;function Xo(e){if(e=Zn(e)){if(typeof os!="function")throw Error(y(280));var t=e.stateNode;t&&(t=oi(t),os(e.stateNode,e.type,t))}}function ba(e){Qt?Gt?Gt.push(e):Gt=[e]:Qt=e}function xa(){if(Qt){var e=Qt,t=Gt;if(Gt=Qt=null,Xo(e),t)for(e=0;e<t.length;e++)Xo(t[e])}}function wa(e,t){return e(t)}function ka(){}var Ti=!1;function Sa(e,t,n){if(Ti)return e(t,n);Ti=!0;try{return wa(e,t,n)}finally{Ti=!1,(Qt!==null||Gt!==null)&&(ka(),xa())}}function Ln(e,t){var n=e.stateNode;if(n===null)return null;var r=oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ls=!1;if(We)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){ls=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{ls=!1}function Bc(e,t,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Tn=!1,jr=null,Mr=!1,as=null,Vc={onError:function(e){Tn=!0,jr=e}};function Uc(e,t,n,r,i,s,o,l,a){Tn=!1,jr=null,Bc.apply(Vc,arguments)}function $c(e,t,n,r,i,s,o,l,a){if(Uc.apply(this,arguments),Tn){if(Tn){var c=jr;Tn=!1,jr=null}else throw Error(y(198));Mr||(Mr=!0,as=c)}}function jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ta(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qo(e){if(jt(e)!==e)throw Error(y(188))}function Wc(e){var t=e.alternate;if(!t){if(t=jt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Qo(i),e;if(s===r)return Qo(i),t;s=s.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ca(e){return e=Wc(e),e!==null?Ia(e):null}function Ia(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ia(e);if(t!==null)return t;e=e.sibling}return null}var Ea=ye.unstable_scheduleCallback,Go=ye.unstable_cancelCallback,Xc=ye.unstable_shouldYield,Qc=ye.unstable_requestPaint,W=ye.unstable_now,Gc=ye.unstable_getCurrentPriorityLevel,qs=ye.unstable_ImmediatePriority,Na=ye.unstable_UserBlockingPriority,Lr=ye.unstable_NormalPriority,Kc=ye.unstable_LowPriority,Pa=ye.unstable_IdlePriority,ni=null,De=null;function Yc(e){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:Jc,qc=Math.log,Zc=Math.LN2;function Jc(e){return e>>>=0,e===0?32:31-(qc(e)/Zc|0)|0}var or=64,lr=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=wn(l):(s&=o,s!==0&&(r=wn(s)))}else o=n&~i,o!==0?r=wn(o):s!==0&&(r=wn(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-je(t),i=1<<n,r|=e[n],t&=~i;return r}function ed(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function td(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-je(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=ed(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function us(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _a(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Ci(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-je(t),e[t]=n}function nd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-je(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Zs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function za(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ja,Js,Ma,La,Oa,cs=!1,ar=[],it=null,st=null,ot=null,On=new Map,Rn=new Map,et=[],rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ko(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function hn(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Zn(t),t!==null&&Js(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function id(e,t,n,r,i){switch(t){case"focusin":return it=hn(it,e,t,n,r,i),!0;case"dragenter":return st=hn(st,e,t,n,r,i),!0;case"mouseover":return ot=hn(ot,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return On.set(s,hn(On.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Rn.set(s,hn(Rn.get(s)||null,e,t,n,r,i)),!0}return!1}function Ra(e){var t=wt(e.target);if(t!==null){var n=jt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ta(n),t!==null){e.blockedOn=t,Oa(e.priority,function(){Ma(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ds(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ss=r,n.target.dispatchEvent(r),ss=null}else return t=Zn(n),t!==null&&Js(t),e.blockedOn=n,!1;t.shift()}return!0}function Yo(e,t,n){wr(e)&&n.delete(t)}function sd(){cs=!1,it!==null&&wr(it)&&(it=null),st!==null&&wr(st)&&(st=null),ot!==null&&wr(ot)&&(ot=null),On.forEach(Yo),Rn.forEach(Yo)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,cs||(cs=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,sd)))}function Fn(e){function t(i){return fn(i,e)}if(0<ar.length){fn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&fn(it,e),st!==null&&fn(st,e),ot!==null&&fn(ot,e),On.forEach(t),Rn.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Ra(n),n.blockedOn===null&&et.shift()}var Kt=Ke.ReactCurrentBatchConfig,Rr=!0;function od(e,t,n,r){var i=M,s=Kt.transition;Kt.transition=null;try{M=1,eo(e,t,n,r)}finally{M=i,Kt.transition=s}}function ld(e,t,n,r){var i=M,s=Kt.transition;Kt.transition=null;try{M=4,eo(e,t,n,r)}finally{M=i,Kt.transition=s}}function eo(e,t,n,r){if(Rr){var i=ds(e,t,n,r);if(i===null)Oi(e,t,r,Fr,n),Ko(e,r);else if(id(i,e,t,n,r))r.stopPropagation();else if(Ko(e,r),t&4&&-1<rd.indexOf(e)){for(;i!==null;){var s=Zn(i);if(s!==null&&ja(s),s=ds(e,t,n,r),s===null&&Oi(e,t,r,Fr,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Oi(e,t,r,null,n)}}var Fr=null;function ds(e,t,n,r){if(Fr=null,e=Ys(r),e=wt(e),e!==null)if(t=jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ta(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function Fa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case qs:return 1;case Na:return 4;case Lr:case Kc:return 16;case Pa:return 536870912;default:return 16}default:return 16}}var nt=null,to=null,kr=null;function Da(){if(kr)return kr;var e,t=to,n=t.length,r,i="value"in nt?nt.value:nt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return kr=i.slice(e,1<r?1-r:void 0)}function Sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function qo(){return!1}function be(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ur:qo,this.isPropagationStopped=qo,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=be(ln),qn=B({},ln,{view:0,detail:0}),ad=be(qn),Ii,Ei,mn,ri=B({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Ii=e.screenX-mn.screenX,Ei=e.screenY-mn.screenY):Ei=Ii=0,mn=e),Ii)},movementY:function(e){return"movementY"in e?e.movementY:Ei}}),Zo=be(ri),ud=B({},ri,{dataTransfer:0}),cd=be(ud),dd=B({},qn,{relatedTarget:0}),Ni=be(dd),pd=B({},ln,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=be(pd),fd=B({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=be(fd),gd=B({},ln,{data:0}),Jo=be(gd),yd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bd[e])?!!t[e]:!1}function ro(){return xd}var wd=B({},qn,{key:function(e){if(e.key){var t=yd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ro,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=be(wd),Sd=B({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),el=be(Sd),Td=B({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ro}),Cd=be(Td),Id=B({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ed=be(Id),Nd=B({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=be(Nd),_d=[9,13,27,32],io=We&&"CompositionEvent"in window,Cn=null;We&&"documentMode"in document&&(Cn=document.documentMode);var zd=We&&"TextEvent"in window&&!Cn,Aa=We&&(!io||Cn&&8<Cn&&11>=Cn),tl=" ",nl=!1;function Ha(e,t){switch(e){case"keyup":return _d.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ba(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function jd(e,t){switch(e){case"compositionend":return Ba(t);case"keypress":return t.which!==32?null:(nl=!0,tl);case"textInput":return e=t.data,e===tl&&nl?null:e;default:return null}}function Md(e,t){if(Rt)return e==="compositionend"||!io&&Ha(e,t)?(e=Da(),kr=to=nt=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Aa&&t.locale!=="ko"?null:t.data;default:return null}}var Ld={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ld[e.type]:t==="textarea"}function Va(e,t,n,r){ba(r),t=Dr(t,"onChange"),0<t.length&&(n=new no("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Dn=null;function Od(e){Ja(e,0)}function ii(e){var t=At(e);if(pa(t))return e}function Rd(e,t){if(e==="change")return t}var Ua=!1;if(We){var Pi;if(We){var _i="oninput"in document;if(!_i){var il=document.createElement("div");il.setAttribute("oninput","return;"),_i=typeof il.oninput=="function"}Pi=_i}else Pi=!1;Ua=Pi&&(!document.documentMode||9<document.documentMode)}function sl(){In&&(In.detachEvent("onpropertychange",$a),Dn=In=null)}function $a(e){if(e.propertyName==="value"&&ii(Dn)){var t=[];Va(t,Dn,e,Ys(e)),Sa(Od,t)}}function Fd(e,t,n){e==="focusin"?(sl(),In=t,Dn=n,In.attachEvent("onpropertychange",$a)):e==="focusout"&&sl()}function Dd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(Dn)}function Ad(e,t){if(e==="click")return ii(t)}function Hd(e,t){if(e==="input"||e==="change")return ii(t)}function Bd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Le=typeof Object.is=="function"?Object.is:Bd;function An(e,t){if(Le(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qi.call(t,i)||!Le(e[i],t[i]))return!1}return!0}function ol(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ll(e,t){var n=ol(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ol(n)}}function Wa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xa(){for(var e=window,t=zr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zr(e.document)}return t}function so(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vd(e){var t=Xa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wa(n.ownerDocument.documentElement,n)){if(r!==null&&so(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=ll(n,s);var o=ll(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ud=We&&"documentMode"in document&&11>=document.documentMode,Ft=null,ps=null,En=null,hs=!1;function al(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hs||Ft==null||Ft!==zr(r)||(r=Ft,"selectionStart"in r&&so(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),En&&An(En,r)||(En=r,r=Dr(ps,"onSelect"),0<r.length&&(t=new no("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dt={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},zi={},Qa={};We&&(Qa=document.createElement("div").style,"AnimationEvent"in window||(delete Dt.animationend.animation,delete Dt.animationiteration.animation,delete Dt.animationstart.animation),"TransitionEvent"in window||delete Dt.transitionend.transition);function si(e){if(zi[e])return zi[e];if(!Dt[e])return e;var t=Dt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qa)return zi[e]=t[n];return e}var Ga=si("animationend"),Ka=si("animationiteration"),Ya=si("animationstart"),qa=si("transitionend"),Za=new Map,ul="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Za.set(e,t),zt(t,[e])}for(var ji=0;ji<ul.length;ji++){var Mi=ul[ji],$d=Mi.toLowerCase(),Wd=Mi[0].toUpperCase()+Mi.slice(1);ft($d,"on"+Wd)}ft(Ga,"onAnimationEnd");ft(Ka,"onAnimationIteration");ft(Ya,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(qa,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xd=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function cl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$c(r,t,void 0,e),e.currentTarget=null}function Ja(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;cl(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;cl(i,l,c),s=a}}}if(Mr)throw e=as,Mr=!1,as=null,e}function O(e,t){var n=t[vs];n===void 0&&(n=t[vs]=new Set);var r=e+"__bubble";n.has(r)||(eu(t,e,2,!1),n.add(r))}function Li(e,t,n){var r=0;t&&(r|=4),eu(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[dr]){e[dr]=!0,la.forEach(function(n){n!=="selectionchange"&&(Xd.has(n)||Li(n,!1,e),Li(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Li("selectionchange",!1,t))}}function eu(e,t,n,r){switch(Fa(t)){case 1:var i=od;break;case 4:i=ld;break;default:i=eo}n=i.bind(null,t,n,e),i=void 0,!ls||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Oi(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=wt(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Sa(function(){var c=s,m=Ys(n),f=[];e:{var h=Za.get(e);if(h!==void 0){var b=no,x=e;switch(e){case"keypress":if(Sr(n)===0)break e;case"keydown":case"keyup":b=kd;break;case"focusin":x="focus",b=Ni;break;case"focusout":x="blur",b=Ni;break;case"beforeblur":case"afterblur":b=Ni;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Cd;break;case Ga:case Ka:case Ya:b=hd;break;case qa:b=Ed;break;case"scroll":b=ad;break;case"wheel":b=Pd;break;case"copy":case"cut":case"paste":b=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=el}var w=(t&4)!==0,F=!w&&e==="scroll",d=w?h!==null?h+"Capture":null:h;w=[];for(var u=c,p;u!==null;){p=u;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,d!==null&&(g=Ln(u,d),g!=null&&w.push(Bn(u,g,p)))),F)break;u=u.return}0<w.length&&(h=new b(h,x,null,n,m),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&n!==ss&&(x=n.relatedTarget||n.fromElement)&&(wt(x)||x[Xe]))break e;if((b||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,b?(x=n.relatedTarget||n.toElement,b=c,x=x?wt(x):null,x!==null&&(F=jt(x),x!==F||x.tag!==5&&x.tag!==6)&&(x=null)):(b=null,x=c),b!==x)){if(w=Zo,g="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=el,g="onPointerLeave",d="onPointerEnter",u="pointer"),F=b==null?h:At(b),p=x==null?h:At(x),h=new w(g,u+"leave",b,n,m),h.target=F,h.relatedTarget=p,g=null,wt(m)===c&&(w=new w(d,u+"enter",x,n,m),w.target=p,w.relatedTarget=F,g=w),F=g,b&&x)t:{for(w=b,d=x,u=0,p=w;p;p=Mt(p))u++;for(p=0,g=d;g;g=Mt(g))p++;for(;0<u-p;)w=Mt(w),u--;for(;0<p-u;)d=Mt(d),p--;for(;u--;){if(w===d||d!==null&&w===d.alternate)break t;w=Mt(w),d=Mt(d)}w=null}else w=null;b!==null&&dl(f,h,b,w,!1),x!==null&&F!==null&&dl(f,F,x,w,!0)}}e:{if(h=c?At(c):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var S=Rd;else if(rl(h))if(Ua)S=Hd;else{S=Dd;var C=Fd}else(b=h.nodeName)&&b.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Ad);if(S&&(S=S(e,c))){Va(f,S,n,m);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&es(h,"number",h.value)}switch(C=c?At(c):window,e){case"focusin":(rl(C)||C.contentEditable==="true")&&(Ft=C,ps=c,En=null);break;case"focusout":En=ps=Ft=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,al(f,n,m);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":al(f,n,m)}var I;if(io)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Rt?Ha(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Aa&&n.locale!=="ko"&&(Rt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Rt&&(I=Da()):(nt=m,to="value"in nt?nt.value:nt.textContent,Rt=!0)),C=Dr(c,E),0<C.length&&(E=new Jo(E,e,null,n,m),f.push({event:E,listeners:C}),I?E.data=I:(I=Ba(n),I!==null&&(E.data=I)))),(I=zd?jd(e,n):Md(e,n))&&(c=Dr(c,"onBeforeInput"),0<c.length&&(m=new Jo("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:c}),m.data=I))}Ja(f,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ln(e,n),s!=null&&r.unshift(Bn(e,s,i)),s=Ln(e,t),s!=null&&r.push(Bn(e,s,i))),e=e.return}return r}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dl(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=Ln(n,s),a!=null&&o.unshift(Bn(n,a,l))):i||(a=Ln(n,s),a!=null&&o.push(Bn(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Qd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function pl(e){return(typeof e=="string"?e:""+e).replace(Qd,`
`).replace(Gd,"")}function pr(e,t,n){if(t=pl(t),pl(e)!==t&&n)throw Error(y(425))}function Ar(){}var fs=null,ms=null;function gs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ys=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,hl=typeof Promise=="function"?Promise:void 0,Yd=typeof queueMicrotask=="function"?queueMicrotask:typeof hl<"u"?function(e){return hl.resolve(null).then(e).catch(qd)}:ys;function qd(e){setTimeout(function(){throw e})}function Ri(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fn(t)}function lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Fe="__reactFiber$"+an,Vn="__reactProps$"+an,Xe="__reactContainer$"+an,vs="__reactEvents$"+an,Zd="__reactListeners$"+an,Jd="__reactHandles$"+an;function wt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fl(e);e!==null;){if(n=e[Fe])return n;e=fl(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Fe]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function At(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function oi(e){return e[Vn]||null}var bs=[],Ht=-1;function mt(e){return{current:e}}function R(e){0>Ht||(e.current=bs[Ht],bs[Ht]=null,Ht--)}function L(e,t){Ht++,bs[Ht]=e.current,e.current=t}var ht={},ie=mt(ht),de=mt(!1),It=ht;function Jt(e,t){var n=e.type.contextTypes;if(!n)return ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function Hr(){R(de),R(ie)}function ml(e,t,n){if(ie.current!==ht)throw Error(y(168));L(ie,t),L(de,n)}function tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,Fc(e)||"Unknown",i));return B({},n,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,It=ie.current,L(ie,e),L(de,de.current),!0}function gl(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=tu(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,R(de),R(ie),L(ie,e)):R(de),L(de,n)}var Be=null,li=!1,Fi=!1;function nu(e){Be===null?Be=[e]:Be.push(e)}function ep(e){li=!0,nu(e)}function gt(){if(!Fi&&Be!==null){Fi=!0;var e=0,t=M;try{var n=Be;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,li=!1}catch(i){throw Be!==null&&(Be=Be.slice(e+1)),Ea(qs,gt),i}finally{M=t,Fi=!1}}return null}var Bt=[],Vt=0,Vr=null,Ur=0,xe=[],we=0,Et=null,Ve=1,Ue="";function bt(e,t){Bt[Vt++]=Ur,Bt[Vt++]=Vr,Vr=e,Ur=t}function ru(e,t,n){xe[we++]=Ve,xe[we++]=Ue,xe[we++]=Et,Et=e;var r=Ve;e=Ue;var i=32-je(r)-1;r&=~(1<<i),n+=1;var s=32-je(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ve=1<<32-je(t)+i|n<<i|r,Ue=s+e}else Ve=1<<s|n<<i|r,Ue=e}function oo(e){e.return!==null&&(bt(e,1),ru(e,1,0))}function lo(e){for(;e===Vr;)Vr=Bt[--Vt],Bt[Vt]=null,Ur=Bt[--Vt],Bt[Vt]=null;for(;e===Et;)Et=xe[--we],xe[we]=null,Ue=xe[--we],xe[we]=null,Ve=xe[--we],xe[we]=null}var ge=null,me=null,D=!1,_e=null;function iu(e,t){var n=ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,me=lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Et!==null?{id:Ve,overflow:Ue}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,me=null,!0):!1;default:return!1}}function xs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ws(e){if(D){var t=me;if(t){var n=t;if(!yl(e,t)){if(xs(e))throw Error(y(418));t=lt(n.nextSibling);var r=ge;t&&yl(e,t)?iu(r,n):(e.flags=e.flags&-4097|2,D=!1,ge=e)}}else{if(xs(e))throw Error(y(418));e.flags=e.flags&-4097|2,D=!1,ge=e}}}function vl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function hr(e){if(e!==ge)return!1;if(!D)return vl(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gs(e.type,e.memoizedProps)),t&&(t=me)){if(xs(e))throw su(),Error(y(418));for(;t;)iu(e,t),t=lt(t.nextSibling)}if(vl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){me=lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}me=null}}else me=ge?lt(e.stateNode.nextSibling):null;return!0}function su(){for(var e=me;e;)e=lt(e.nextSibling)}function en(){me=ge=null,D=!1}function ao(e){_e===null?_e=[e]:_e.push(e)}var tp=Ke.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function fr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bl(e){var t=e._init;return t(e._payload)}function ou(e){function t(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=dt(d,u),d.index=0,d.sibling=null,d}function s(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,u,p,g){return u===null||u.tag!==6?(u=$i(p,d.mode,g),u.return=d,u):(u=i(u,p),u.return=d,u)}function a(d,u,p,g){var S=p.type;return S===Ot?m(d,u,p.props.children,g,p.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&bl(S)===u.type)?(g=i(u,p.props),g.ref=gn(d,u,p),g.return=d,g):(g=_r(p.type,p.key,p.props,null,d.mode,g),g.ref=gn(d,u,p),g.return=d,g)}function c(d,u,p,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Wi(p,d.mode,g),u.return=d,u):(u=i(u,p.children||[]),u.return=d,u)}function m(d,u,p,g,S){return u===null||u.tag!==7?(u=Ct(p,d.mode,g,S),u.return=d,u):(u=i(u,p),u.return=d,u)}function f(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=$i(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case rr:return p=_r(u.type,u.key,u.props,null,d.mode,p),p.ref=gn(d,null,u),p.return=d,p;case Lt:return u=Wi(u,d.mode,p),u.return=d,u;case Ze:var g=u._init;return f(d,g(u._payload),p)}if(xn(u)||dn(u))return u=Ct(u,d.mode,p,null),u.return=d,u;fr(d,u)}return null}function h(d,u,p,g){var S=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:l(d,u,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:return p.key===S?a(d,u,p,g):null;case Lt:return p.key===S?c(d,u,p,g):null;case Ze:return S=p._init,h(d,u,S(p._payload),g)}if(xn(p)||dn(p))return S!==null?null:m(d,u,p,g,null);fr(d,p)}return null}function b(d,u,p,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(p)||null,l(u,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rr:return d=d.get(g.key===null?p:g.key)||null,a(u,d,g,S);case Lt:return d=d.get(g.key===null?p:g.key)||null,c(u,d,g,S);case Ze:var C=g._init;return b(d,u,p,C(g._payload),S)}if(xn(g)||dn(g))return d=d.get(p)||null,m(u,d,g,S,null);fr(u,g)}return null}function x(d,u,p,g){for(var S=null,C=null,I=u,E=u=0,U=null;I!==null&&E<p.length;E++){I.index>E?(U=I,I=null):U=I.sibling;var z=h(d,I,p[E],g);if(z===null){I===null&&(I=U);break}e&&I&&z.alternate===null&&t(d,I),u=s(z,u,E),C===null?S=z:C.sibling=z,C=z,I=U}if(E===p.length)return n(d,I),D&&bt(d,E),S;if(I===null){for(;E<p.length;E++)I=f(d,p[E],g),I!==null&&(u=s(I,u,E),C===null?S=I:C.sibling=I,C=I);return D&&bt(d,E),S}for(I=r(d,I);E<p.length;E++)U=b(I,d,E,p[E],g),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?E:U.key),u=s(U,u,E),C===null?S=U:C.sibling=U,C=U);return e&&I.forEach(function(Ie){return t(d,Ie)}),D&&bt(d,E),S}function w(d,u,p,g){var S=dn(p);if(typeof S!="function")throw Error(y(150));if(p=S.call(p),p==null)throw Error(y(151));for(var C=S=null,I=u,E=u=0,U=null,z=p.next();I!==null&&!z.done;E++,z=p.next()){I.index>E?(U=I,I=null):U=I.sibling;var Ie=h(d,I,z.value,g);if(Ie===null){I===null&&(I=U);break}e&&I&&Ie.alternate===null&&t(d,I),u=s(Ie,u,E),C===null?S=Ie:C.sibling=Ie,C=Ie,I=U}if(z.done)return n(d,I),D&&bt(d,E),S;if(I===null){for(;!z.done;E++,z=p.next())z=f(d,z.value,g),z!==null&&(u=s(z,u,E),C===null?S=z:C.sibling=z,C=z);return D&&bt(d,E),S}for(I=r(d,I);!z.done;E++,z=p.next())z=b(I,d,E,z.value,g),z!==null&&(e&&z.alternate!==null&&I.delete(z.key===null?E:z.key),u=s(z,u,E),C===null?S=z:C.sibling=z,C=z);return e&&I.forEach(function(un){return t(d,un)}),D&&bt(d,E),S}function F(d,u,p,g){if(typeof p=="object"&&p!==null&&p.type===Ot&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:e:{for(var S=p.key,C=u;C!==null;){if(C.key===S){if(S=p.type,S===Ot){if(C.tag===7){n(d,C.sibling),u=i(C,p.props.children),u.return=d,d=u;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&bl(S)===C.type){n(d,C.sibling),u=i(C,p.props),u.ref=gn(d,C,p),u.return=d,d=u;break e}n(d,C);break}else t(d,C);C=C.sibling}p.type===Ot?(u=Ct(p.props.children,d.mode,g,p.key),u.return=d,d=u):(g=_r(p.type,p.key,p.props,null,d.mode,g),g.ref=gn(d,u,p),g.return=d,d=g)}return o(d);case Lt:e:{for(C=p.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=i(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Wi(p,d.mode,g),u.return=d,d=u}return o(d);case Ze:return C=p._init,F(d,u,C(p._payload),g)}if(xn(p))return x(d,u,p,g);if(dn(p))return w(d,u,p,g);fr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,p),u.return=d,d=u):(n(d,u),u=$i(p,d.mode,g),u.return=d,d=u),o(d)):n(d,u)}return F}var tn=ou(!0),lu=ou(!1),$r=mt(null),Wr=null,Ut=null,uo=null;function co(){uo=Ut=Wr=null}function po(e){var t=$r.current;R($r),e._currentValue=t}function ks(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yt(e,t){Wr=e,uo=Ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(uo!==e)if(e={context:e,memoizedValue:t,next:null},Ut===null){if(Wr===null)throw Error(y(308));Ut=e,Wr.dependencies={lanes:0,firstContext:e}}else Ut=Ut.next=e;return t}var kt=null;function ho(e){kt===null?kt=[e]:kt.push(e)}function au(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ho(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qe(e,r)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qe(e,n)}return i=r.interleaved,i===null?(t.next=t,ho(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qe(e,n)}function Tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}function xl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xr(e,t,n,r){var i=e.updateQueue;Je=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=a))}if(s!==null){var f=i.baseState;o=0,m=c=a=null,l=s;do{var h=l.lane,b=l.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,w=l;switch(h=t,b=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){f=x.call(b,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(b,f,h):x,h==null)break e;f=B({},f,h);break e;case 2:Je=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else b={eventTime:b,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=b,a=f):m=m.next=b,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(a=f),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=f}}function wl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var Jn={},Ae=mt(Jn),Un=mt(Jn),$n=mt(Jn);function St(e){if(e===Jn)throw Error(y(174));return e}function mo(e,t){switch(L($n,t),L(Un,e),L(Ae,Jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ns(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ns(t,e)}R(Ae),L(Ae,t)}function nn(){R(Ae),R(Un),R($n)}function cu(e){St($n.current);var t=St(Ae.current),n=ns(t,e.type);t!==n&&(L(Un,e),L(Ae,n))}function go(e){Un.current===e&&(R(Ae),R(Un))}var A=mt(0);function Qr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Di=[];function yo(){for(var e=0;e<Di.length;e++)Di[e]._workInProgressVersionPrimary=null;Di.length=0}var Cr=Ke.ReactCurrentDispatcher,Ai=Ke.ReactCurrentBatchConfig,Nt=0,H=null,Q=null,Y=null,Gr=!1,Nn=!1,Wn=0,np=0;function te(){throw Error(y(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Le(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,s){if(Nt=s,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cr.current=e===null||e.memoizedState===null?op:lp,e=n(r,i),Nn){s=0;do{if(Nn=!1,Wn=0,25<=s)throw Error(y(301));s+=1,Y=Q=null,t.updateQueue=null,Cr.current=ap,e=n(r,i)}while(Nn)}if(Cr.current=Kr,t=Q!==null&&Q.next!==null,Nt=0,Y=Q=H=null,Gr=!1,t)throw Error(y(300));return e}function xo(){var e=Wn!==0;return Wn=0,e}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?H.memoizedState=Y=e:Y=Y.next=e,Y}function Ce(){if(Q===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var t=Y===null?H.memoizedState:Y.next;if(t!==null)Y=t,Q=e;else{if(e===null)throw Error(y(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},Y===null?H.memoizedState=Y=e:Y=Y.next=e}return Y}function Xn(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=Q,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var m=c.lane;if((Nt&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=f,o=r):a=a.next=f,H.lanes|=m,Pt|=m}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,Le(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,H.lanes|=s,Pt|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bi(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Le(s,t.memoizedState)||(ce=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function du(){}function pu(e,t){var n=H,r=Ce(),i=t(),s=!Le(r.memoizedState,i);if(s&&(r.memoizedState=i,ce=!0),r=r.queue,wo(mu.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Y!==null&&Y.memoizedState.tag&1){if(n.flags|=2048,Qn(9,fu.bind(null,n,r,i,t),void 0,null),q===null)throw Error(y(349));Nt&30||hu(n,t,i)}return i}function hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fu(e,t,n,r){t.value=n,t.getSnapshot=r,gu(t)&&yu(e)}function mu(e,t,n){return n(function(){gu(t)&&yu(e)})}function gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Le(e,n)}catch{return!0}}function yu(e){var t=Qe(e,1);t!==null&&Me(t,e,1,-1)}function kl(e){var t=Re();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=sp.bind(null,H,e),[t.memoizedState,e]}function Qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vu(){return Ce().memoizedState}function Ir(e,t,n,r){var i=Re();H.flags|=e,i.memoizedState=Qn(1|t,n,void 0,r===void 0?null:r)}function ai(e,t,n,r){var i=Ce();r=r===void 0?null:r;var s=void 0;if(Q!==null){var o=Q.memoizedState;if(s=o.destroy,r!==null&&vo(r,o.deps)){i.memoizedState=Qn(t,n,s,r);return}}H.flags|=e,i.memoizedState=Qn(1|t,n,s,r)}function Sl(e,t){return Ir(8390656,8,e,t)}function wo(e,t){return ai(2048,8,e,t)}function bu(e,t){return ai(4,2,e,t)}function xu(e,t){return ai(4,4,e,t)}function wu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ku(e,t,n){return n=n!=null?n.concat([e]):null,ai(4,4,wu.bind(null,t,e),n)}function ko(){}function Su(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tu(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cu(e,t,n){return Nt&21?(Le(n,t)||(n=_a(),H.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function rp(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Ai.transition;Ai.transition={};try{e(!1),t()}finally{M=n,Ai.transition=r}}function Iu(){return Ce().memoizedState}function ip(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Eu(e))Nu(t,n);else if(n=au(e,t,n,r),n!==null){var i=oe();Me(n,e,r,i),Pu(n,t,r)}}function sp(e,t,n){var r=ct(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Nu(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Le(l,o)){var a=t.interleaved;a===null?(i.next=i,ho(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=au(e,t,i,r),n!==null&&(i=oe(),Me(n,e,r,i),Pu(n,t,r))}}function Eu(e){var t=e.alternate;return e===H||t!==null&&t===H}function Nu(e,t){Nn=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}var Kr={readContext:Te,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},op={readContext:Te,useCallback:function(e,t){return Re().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:Sl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ir(4194308,4,wu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ir(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ir(4,2,e,t)},useMemo:function(e,t){var n=Re();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Re();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ip.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Re();return e={current:e},t.memoizedState=e},useState:kl,useDebugValue:ko,useDeferredValue:function(e){return Re().memoizedState=e},useTransition:function(){var e=kl(!1),t=e[0];return e=rp.bind(null,e[1]),Re().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=Re();if(D){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),q===null)throw Error(y(349));Nt&30||hu(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Sl(mu.bind(null,r,s,e),[e]),r.flags|=2048,Qn(9,fu.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Re(),t=q.identifierPrefix;if(D){var n=Ue,r=Ve;n=(r&~(1<<32-je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=np++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lp={readContext:Te,useCallback:Su,useContext:Te,useEffect:wo,useImperativeHandle:ku,useInsertionEffect:bu,useLayoutEffect:xu,useMemo:Tu,useReducer:Hi,useRef:vu,useState:function(){return Hi(Xn)},useDebugValue:ko,useDeferredValue:function(e){var t=Ce();return Cu(t,Q.memoizedState,e)},useTransition:function(){var e=Hi(Xn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:pu,useId:Iu,unstable_isNewReconciler:!1},ap={readContext:Te,useCallback:Su,useContext:Te,useEffect:wo,useImperativeHandle:ku,useInsertionEffect:bu,useLayoutEffect:xu,useMemo:Tu,useReducer:Bi,useRef:vu,useState:function(){return Bi(Xn)},useDebugValue:ko,useDeferredValue:function(e){var t=Ce();return Q===null?t.memoizedState=e:Cu(t,Q.memoizedState,e)},useTransition:function(){var e=Bi(Xn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:pu,useId:Iu,unstable_isNewReconciler:!1};function Ne(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),i=ct(e),s=$e(r,i);s.payload=t,n!=null&&(s.callback=n),t=at(e,s,i),t!==null&&(Me(t,e,i,r),Tr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),i=ct(e),s=$e(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=at(e,s,i),t!==null&&(Me(t,e,i,r),Tr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=ct(e),i=$e(n,r);i.tag=2,t!=null&&(i.callback=t),t=at(e,i,r),t!==null&&(Me(t,e,r,n),Tr(t,e,r))}};function Tl(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!An(n,r)||!An(i,s):!0}function _u(e,t,n){var r=!1,i=ht,s=t.contextType;return typeof s=="object"&&s!==null?s=Te(s):(i=pe(t)?It:ie.current,r=t.contextTypes,s=(r=r!=null)?Jt(e,i):ht),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Cl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function Ts(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},fo(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Te(s):(s=pe(t)?It:ie.current,i.context=Jt(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ss(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ui.enqueueReplaceState(i,i.state,null),Xr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Rc(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Vi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var up=typeof WeakMap=="function"?WeakMap:Map;function zu(e,t,n){n=$e(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,Os=r),Cs(e,t)},n}function ju(e,t,n){n=$e(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Cs(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cs(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Il(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new up;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Sp.bind(null,e,t,n),t.then(e,e))}function El(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$e(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var cp=Ke.ReactCurrentOwner,ce=!1;function se(e,t,n,r){t.child=e===null?lu(t,null,n,r):tn(t,e.child,n,r)}function Pl(e,t,n,r,i){n=n.render;var s=t.ref;return Yt(t,i),r=bo(e,t,n,r,s,i),n=xo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ge(e,t,i)):(D&&n&&oo(t),t.flags|=1,se(e,t,r,i),t.child)}function _l(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!_o(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Mu(e,t,s,r,i)):(e=_r(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:An,n(o,r)&&e.ref===t.ref)return Ge(e,t,i)}return t.flags|=1,e=dt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Mu(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(An(s,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ge(e,t,i)}return Is(e,t,n,r,i)}function Lu(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(Wt,fe),fe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,L(Wt,fe),fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,L(Wt,fe),fe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,L(Wt,fe),fe|=r;return se(e,t,i,n),t.child}function Ou(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Is(e,t,n,r,i){var s=pe(n)?It:ie.current;return s=Jt(t,s),Yt(t,i),n=bo(e,t,n,r,s,i),r=xo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ge(e,t,i)):(D&&r&&oo(t),t.flags|=1,se(e,t,n,i),t.child)}function zl(e,t,n,r,i){if(pe(n)){var s=!0;Br(t)}else s=!1;if(Yt(t,i),t.stateNode===null)Er(e,t),_u(t,n,r),Ts(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=pe(n)?It:ie.current,c=Jt(t,c));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Cl(t,o,r,c),Je=!1;var h=t.memoizedState;o.state=h,Xr(t,r,o,i),a=t.memoizedState,l!==r||h!==a||de.current||Je?(typeof m=="function"&&(Ss(t,n,m,r),a=t.memoizedState),(l=Je||Tl(t,n,l,r,h,a,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,uu(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ne(t.type,l),o.props=c,f=t.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Te(a):(a=pe(n)?It:ie.current,a=Jt(t,a));var b=n.getDerivedStateFromProps;(m=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||h!==a)&&Cl(t,o,r,a),Je=!1,h=t.memoizedState,o.state=h,Xr(t,r,o,i);var x=t.memoizedState;l!==f||h!==x||de.current||Je?(typeof b=="function"&&(Ss(t,n,b,r),x=t.memoizedState),(c=Je||Tl(t,n,c,r,h,x,a)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Es(e,t,n,r,s,i)}function Es(e,t,n,r,i,s){Ou(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&gl(t,n,!1),Ge(e,t,s);r=t.stateNode,cp.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,s),t.child=tn(t,null,l,s)):se(e,t,l,s),t.memoizedState=r.state,i&&gl(t,n,!0),t.child}function Ru(e){var t=e.stateNode;t.pendingContext?ml(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ml(e,t.context,!1),mo(e,t.containerInfo)}function jl(e,t,n,r,i){return en(),ao(i),t.flags|=256,se(e,t,n,r),t.child}var Ns={dehydrated:null,treeContext:null,retryLane:0};function Ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fu(e,t,n){var r=t.pendingProps,i=A.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),L(A,i&1),e===null)return ws(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pi(o,r,0,null),e=Ct(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ps(n),t.memoizedState=Ns,e):So(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return dp(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=dt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=dt(l,s):(s=Ct(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Ps(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Ns,r}return s=e.child,e=s.sibling,r=dt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function So(e,t){return t=pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&ao(r),tn(t,e.child,null,n),e=So(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dp(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Vi(Error(y(422))),mr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=pi({mode:"visible",children:r.children},i,0,null),s=Ct(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=Ps(o),t.memoizedState=Ns,s);if(!(t.mode&1))return mr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(y(419)),r=Vi(s,r,void 0),mr(e,t,o,r)}if(l=(o&e.childLanes)!==0,ce||l){if(r=q,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Qe(e,i),Me(r,e,i,-1))}return Po(),r=Vi(Error(y(421))),mr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Tp.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,me=lt(i.nextSibling),ge=t,D=!0,_e=null,e!==null&&(xe[we++]=Ve,xe[we++]=Ue,xe[we++]=Et,Ve=e.id,Ue=e.overflow,Et=t),t=So(t,r.children),t.flags|=4096,t)}function Ml(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ks(e.return,t,n)}function Ui(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Du(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(se(e,t,r.children,n),r=A.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ml(e,n,t);else if(e.tag===19)Ml(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(A,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ui(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ui(t,!0,n,null,s);break;case"together":Ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Er(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pp(e,t,n){switch(t.tag){case 3:Ru(t),en();break;case 5:cu(t);break;case 1:pe(t.type)&&Br(t);break;case 4:mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;L($r,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(L(A,A.current&1),t.flags|=128,null):n&t.child.childLanes?Fu(e,t,n):(L(A,A.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);L(A,A.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Du(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(A,A.current),r)break;return null;case 22:case 23:return t.lanes=0,Lu(e,t,n)}return Ge(e,t,n)}var Au,_s,Hu,Bu;Au=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_s=function(){};Hu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,St(Ae.current);var s=null;switch(n){case"input":i=Zi(e,i),r=Zi(e,r),s=[];break;case"select":i=B({},i,{value:void 0}),r=B({},r,{value:void 0}),s=[];break;case"textarea":i=ts(e,i),r=ts(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ar)}rs(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(jn.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(jn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&O("scroll",e),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Bu=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hp(e,t,n){var r=t.pendingProps;switch(lo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return pe(t.type)&&Hr(),ne(t),null;case 3:return r=t.stateNode,nn(),R(de),R(ie),yo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_e!==null&&(Ds(_e),_e=null))),_s(e,t),ne(t),null;case 5:go(t);var i=St($n.current);if(n=t.type,e!==null&&t.stateNode!=null)Hu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ne(t),null}if(e=St(Ae.current),hr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Fe]=t,r[Vn]=s,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(i=0;i<kn.length;i++)O(kn[i],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Vo(r,s),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},O("invalid",r);break;case"textarea":$o(r,s),O("invalid",r)}rs(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&pr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&pr(r.textContent,l,e),i=["children",""+l]):jn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":ir(r),Uo(r,s,!0);break;case"textarea":ir(r),Wo(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ar)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ma(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Fe]=t,e[Vn]=r,Au(e,t,!1,!1),t.stateNode=e;e:{switch(o=is(n,r),n){case"dialog":O("cancel",e),O("close",e),i=r;break;case"iframe":case"object":case"embed":O("load",e),i=r;break;case"video":case"audio":for(i=0;i<kn.length;i++)O(kn[i],e);i=r;break;case"source":O("error",e),i=r;break;case"img":case"image":case"link":O("error",e),O("load",e),i=r;break;case"details":O("toggle",e),i=r;break;case"input":Vo(e,r),i=Zi(e,r),O("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=B({},r,{value:void 0}),O("invalid",e);break;case"textarea":$o(e,r),i=ts(e,r),O("invalid",e);break;default:i=r}rs(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?va(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ga(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Mn(e,a):typeof a=="number"&&Mn(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jn.hasOwnProperty(s)?a!=null&&s==="onScroll"&&O("scroll",e):a!=null&&Xs(e,s,a,o))}switch(n){case"input":ir(e),Uo(e,r,!1);break;case"textarea":ir(e),Wo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Xt(e,!!r.multiple,s,!1):r.defaultValue!=null&&Xt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ar)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Bu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=St($n.current),St(Ae.current),hr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(s=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return ne(t),null;case 13:if(R(A),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&me!==null&&t.mode&1&&!(t.flags&128))su(),en(),t.flags|=98560,s=!1;else if(s=hr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(y(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(y(317));s[Fe]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),s=!1}else _e!==null&&(Ds(_e),_e=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?G===0&&(G=3):Po())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return nn(),_s(e,t),e===null&&Hn(t.stateNode.containerInfo),ne(t),null;case 10:return po(t.type._context),ne(t),null;case 17:return pe(t.type)&&Hr(),ne(t),null;case 19:if(R(A),s=t.memoizedState,s===null)return ne(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)yn(s,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Qr(e),o!==null){for(t.flags|=128,yn(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return L(A,A.current&1|2),t.child}e=e.sibling}s.tail!==null&&W()>sn&&(t.flags|=128,r=!0,yn(s,!1),t.lanes=4194304)}else{if(!r)if(e=Qr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!D)return ne(t),null}else 2*W()-s.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,r=!0,yn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=W(),t.sibling=null,n=A.current,L(A,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return No(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?fe&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function fp(e,t){switch(lo(t),t.tag){case 1:return pe(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),R(de),R(ie),yo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return go(t),null;case 13:if(R(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(A),null;case 4:return nn(),null;case 10:return po(t.type._context),null;case 22:case 23:return No(),null;case 24:return null;default:return null}}var gr=!1,re=!1,mp=typeof WeakSet=="function"?WeakSet:Set,k=null;function $t(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function zs(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ll=!1;function gp(e,t){if(fs=Rr,e=Xa(),so(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,m=0,f=e,h=null;t:for(;;){for(var b;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(b=f.firstChild)!==null;)h=f,f=b;for(;;){if(f===e)break t;if(h===n&&++c===i&&(l=o),h===s&&++m===r&&(a=o),(b=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=b}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ms={focusedElem:e,selectionRange:n},Rr=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,F=x.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ne(t.type,w),F);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){V(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return x=Ll,Ll=!1,x}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&zs(t,n,s)}i=i.next}while(i!==r)}}function ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function js(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vu(e){var t=e.alternate;t!==null&&(e.alternate=null,Vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Vn],delete t[vs],delete t[Zd],delete t[Jd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uu(e){return e.tag===5||e.tag===3||e.tag===4}function Ol(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ms(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ar));else if(r!==4&&(e=e.child,e!==null))for(Ms(e,t,n),e=e.sibling;e!==null;)Ms(e,t,n),e=e.sibling}function Ls(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ls(e,t,n),e=e.sibling;e!==null;)Ls(e,t,n),e=e.sibling}var Z=null,Pe=!1;function qe(e,t,n){for(n=n.child;n!==null;)$u(e,t,n),n=n.sibling}function $u(e,t,n){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 5:re||$t(n,t);case 6:var r=Z,i=Pe;Z=null,qe(e,t,n),Z=r,Pe=i,Z!==null&&(Pe?(e=Z,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Z.removeChild(n.stateNode));break;case 18:Z!==null&&(Pe?(e=Z,n=n.stateNode,e.nodeType===8?Ri(e.parentNode,n):e.nodeType===1&&Ri(e,n),Fn(e)):Ri(Z,n.stateNode));break;case 4:r=Z,i=Pe,Z=n.stateNode.containerInfo,Pe=!0,qe(e,t,n),Z=r,Pe=i;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zs(n,t,o),i=i.next}while(i!==r)}qe(e,t,n);break;case 1:if(!re&&($t(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){V(n,t,l)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,qe(e,t,n),re=r):qe(e,t,n);break;default:qe(e,t,n)}}function Rl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mp),t.forEach(function(r){var i=Cp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ee(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Z=l.stateNode,Pe=!1;break e;case 3:Z=l.stateNode.containerInfo,Pe=!0;break e;case 4:Z=l.stateNode.containerInfo,Pe=!0;break e}l=l.return}if(Z===null)throw Error(y(160));$u(s,o,i),Z=null,Pe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){V(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wu(t,e),t=t.sibling}function Wu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ee(t,e),Oe(e),r&4){try{Pn(3,e,e.return),ci(3,e)}catch(w){V(e,e.return,w)}try{Pn(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Ee(t,e),Oe(e),r&512&&n!==null&&$t(n,n.return);break;case 5:if(Ee(t,e),Oe(e),r&512&&n!==null&&$t(n,n.return),e.flags&32){var i=e.stateNode;try{Mn(i,"")}catch(w){V(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ha(i,s),is(l,o);var c=is(l,s);for(o=0;o<a.length;o+=2){var m=a[o],f=a[o+1];m==="style"?va(i,f):m==="dangerouslySetInnerHTML"?ga(i,f):m==="children"?Mn(i,f):Xs(i,m,f,c)}switch(l){case"input":Ji(i,s);break;case"textarea":fa(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var b=s.value;b!=null?Xt(i,!!s.multiple,b,!1):h!==!!s.multiple&&(s.defaultValue!=null?Xt(i,!!s.multiple,s.defaultValue,!0):Xt(i,!!s.multiple,s.multiple?[]:"",!1))}i[Vn]=s}catch(w){V(e,e.return,w)}}break;case 6:if(Ee(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){V(e,e.return,w)}}break;case 3:if(Ee(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Ee(t,e),Oe(e);break;case 13:Ee(t,e),Oe(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Io=W())),r&4&&Rl(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||m,Ee(t,e),re=c):Ee(t,e),Oe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(k=e,m=e.child;m!==null;){for(f=k=m;k!==null;){switch(h=k,b=h.child,h.tag){case 0:case 11:case 14:case 15:Pn(4,h,h.return);break;case 1:$t(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){V(r,n,w)}}break;case 5:$t(h,h.return);break;case 22:if(h.memoizedState!==null){Dl(f);continue}}b!==null?(b.return=h,k=b):Dl(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=ya("display",o))}catch(w){V(e,e.return,w)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){V(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ee(t,e),Oe(e),r&4&&Rl(e);break;case 21:break;default:Ee(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Uu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mn(i,""),r.flags&=-33);var s=Ol(e);Ls(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ol(e);Ms(e,l,o);break;default:throw Error(y(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yp(e,t,n){k=e,Xu(e)}function Xu(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gr;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||re;l=gr;var c=re;if(gr=o,(re=a)&&!c)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?Al(i):a!==null?(a.return=o,k=a):Al(i);for(;s!==null;)k=s,Xu(s),s=s.sibling;k=i,gr=l,re=c}Fl(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Fl(e)}}function Fl(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ne(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&wl(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wl(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Fn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}re||t.flags&512&&js(t)}catch(h){V(t,t.return,h)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Dl(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Al(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ci(4,t)}catch(a){V(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){V(t,i,a)}}var s=t.return;try{js(t)}catch(a){V(t,s,a)}break;case 5:var o=t.return;try{js(t)}catch(a){V(t,o,a)}}}catch(a){V(t,t.return,a)}if(t===e){k=null;break}var l=t.sibling;if(l!==null){l.return=t.return,k=l;break}k=t.return}}var vp=Math.ceil,Yr=Ke.ReactCurrentDispatcher,To=Ke.ReactCurrentOwner,Se=Ke.ReactCurrentBatchConfig,j=0,q=null,X=null,J=0,fe=0,Wt=mt(0),G=0,Gn=null,Pt=0,di=0,Co=0,_n=null,ue=null,Io=0,sn=1/0,He=null,qr=!1,Os=null,ut=null,yr=!1,rt=null,Zr=0,zn=0,Rs=null,Nr=-1,Pr=0;function oe(){return j&6?W():Nr!==-1?Nr:Nr=W()}function ct(e){return e.mode&1?j&2&&J!==0?J&-J:tp.transition!==null?(Pr===0&&(Pr=_a()),Pr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Fa(e.type)),e):1}function Me(e,t,n,r){if(50<zn)throw zn=0,Rs=null,Error(y(185));Yn(e,n,r),(!(j&2)||e!==q)&&(e===q&&(!(j&2)&&(di|=n),G===4&&tt(e,J)),he(e,r),n===1&&j===0&&!(t.mode&1)&&(sn=W()+500,li&&gt()))}function he(e,t){var n=e.callbackNode;td(e,t);var r=Or(e,e===q?J:0);if(r===0)n!==null&&Go(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Go(n),t===1)e.tag===0?ep(Hl.bind(null,e)):nu(Hl.bind(null,e)),Yd(function(){!(j&6)&&gt()}),n=null;else{switch(za(r)){case 1:n=qs;break;case 4:n=Na;break;case 16:n=Lr;break;case 536870912:n=Pa;break;default:n=Lr}n=ec(n,Qu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qu(e,t){if(Nr=-1,Pr=0,j&6)throw Error(y(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var r=Or(e,e===q?J:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jr(e,r);else{t=r;var i=j;j|=2;var s=Ku();(q!==e||J!==t)&&(He=null,sn=W()+500,Tt(e,t));do try{wp();break}catch(l){Gu(e,l)}while(!0);co(),Yr.current=s,j=i,X!==null?t=0:(q=null,J=0,t=G)}if(t!==0){if(t===2&&(i=us(e),i!==0&&(r=i,t=Fs(e,i))),t===1)throw n=Gn,Tt(e,0),tt(e,r),he(e,W()),n;if(t===6)tt(e,r);else{if(i=e.current.alternate,!(r&30)&&!bp(i)&&(t=Jr(e,r),t===2&&(s=us(e),s!==0&&(r=s,t=Fs(e,s))),t===1))throw n=Gn,Tt(e,0),tt(e,r),he(e,W()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:xt(e,ue,He);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Io+500-W(),10<t)){if(Or(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ys(xt.bind(null,e,ue,He),t);break}xt(e,ue,He);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-je(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vp(r/1960))-r,10<r){e.timeoutHandle=ys(xt.bind(null,e,ue,He),r);break}xt(e,ue,He);break;case 5:xt(e,ue,He);break;default:throw Error(y(329))}}}return he(e,W()),e.callbackNode===n?Qu.bind(null,e):null}function Fs(e,t){var n=_n;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=Jr(e,t),e!==2&&(t=ue,ue=n,t!==null&&Ds(t)),e}function Ds(e){ue===null?ue=e:ue.push.apply(ue,e)}function bp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Le(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Co,t&=~di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-je(t),r=1<<n;e[n]=-1,t&=~r}}function Hl(e){if(j&6)throw Error(y(327));qt();var t=Or(e,0);if(!(t&1))return he(e,W()),null;var n=Jr(e,t);if(e.tag!==0&&n===2){var r=us(e);r!==0&&(t=r,n=Fs(e,r))}if(n===1)throw n=Gn,Tt(e,0),tt(e,t),he(e,W()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,ue,He),he(e,W()),null}function Eo(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(sn=W()+500,li&&gt())}}function _t(e){rt!==null&&rt.tag===0&&!(j&6)&&qt();var t=j;j|=1;var n=Se.transition,r=M;try{if(Se.transition=null,M=1,e)return e()}finally{M=r,Se.transition=n,j=t,!(j&6)&&gt()}}function No(){fe=Wt.current,R(Wt)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kd(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:nn(),R(de),R(ie),yo();break;case 5:go(r);break;case 4:nn();break;case 13:R(A);break;case 19:R(A);break;case 10:po(r.type._context);break;case 22:case 23:No()}n=n.return}if(q=e,X=e=dt(e.current,null),J=fe=t,G=0,Gn=null,Co=di=Pt=0,ue=_n=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}kt=null}return e}function Gu(e,t){do{var n=X;try{if(co(),Cr.current=Kr,Gr){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gr=!1}if(Nt=0,Y=Q=H=null,Nn=!1,Wn=0,To.current=null,n===null||n.return===null){G=1,Gn=t,X=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=J,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=l,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var b=El(o);if(b!==null){b.flags&=-257,Nl(b,o,l,s,t),b.mode&1&&Il(s,c,t),t=b,a=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(a),t.updateQueue=w}else x.add(a);break e}else{if(!(t&1)){Il(s,c,t),Po();break e}a=Error(y(426))}}else if(D&&l.mode&1){var F=El(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Nl(F,o,l,s,t),ao(rn(a,l));break e}}s=a=rn(a,l),G!==4&&(G=2),_n===null?_n=[s]:_n.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var d=zu(s,a,t);xl(s,d);break e;case 1:l=a;var u=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var g=ju(s,l,t);xl(s,g);break e}}s=s.return}while(s!==null)}qu(n)}catch(S){t=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function Ku(){var e=Yr.current;return Yr.current=Kr,e===null?Kr:e}function Po(){(G===0||G===3||G===2)&&(G=4),q===null||!(Pt&268435455)&&!(di&268435455)||tt(q,J)}function Jr(e,t){var n=j;j|=2;var r=Ku();(q!==e||J!==t)&&(He=null,Tt(e,t));do try{xp();break}catch(i){Gu(e,i)}while(!0);if(co(),j=n,Yr.current=r,X!==null)throw Error(y(261));return q=null,J=0,G}function xp(){for(;X!==null;)Yu(X)}function wp(){for(;X!==null&&!Xc();)Yu(X)}function Yu(e){var t=Ju(e.alternate,e,fe);e.memoizedProps=e.pendingProps,t===null?qu(e):X=t,To.current=null}function qu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,X=null;return}}else if(n=hp(n,t,fe),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);G===0&&(G=5)}function xt(e,t,n){var r=M,i=Se.transition;try{Se.transition=null,M=1,kp(e,t,n,r)}finally{Se.transition=i,M=r}return null}function kp(e,t,n,r){do qt();while(rt!==null);if(j&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(nd(e,s),e===q&&(X=q=null,J=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,ec(Lr,function(){return qt(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Se.transition,Se.transition=null;var o=M;M=1;var l=j;j|=4,To.current=null,gp(e,n),Wu(n,e),Vd(ms),Rr=!!fs,ms=fs=null,e.current=n,yp(n),Qc(),j=l,M=o,Se.transition=s}else e.current=n;if(yr&&(yr=!1,rt=e,Zr=i),s=e.pendingLanes,s===0&&(ut=null),Yc(n.stateNode),he(e,W()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qr)throw qr=!1,e=Os,Os=null,e;return Zr&1&&e.tag!==0&&qt(),s=e.pendingLanes,s&1?e===Rs?zn++:(zn=0,Rs=e):zn=0,gt(),null}function qt(){if(rt!==null){var e=za(Zr),t=Se.transition,n=M;try{if(Se.transition=null,M=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,Zr=0,j&6)throw Error(y(331));var i=j;for(j|=4,k=e.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(k=c;k!==null;){var m=k;switch(m.tag){case 0:case 11:case 15:Pn(8,m,s)}var f=m.child;if(f!==null)f.return=m,k=f;else for(;k!==null;){m=k;var h=m.sibling,b=m.return;if(Vu(m),m===c){k=null;break}if(h!==null){h.return=b,k=h;break}k=b}}}var x=s.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var F=w.sibling;w.sibling=null,w=F}while(w!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pn(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,k=d;break e}k=s.return}}var u=e.current;for(k=u;k!==null;){o=k;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,k=p;else e:for(o=u;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ci(9,l)}}catch(S){V(l,l.return,S)}if(l===o){k=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,k=g;break e}k=l.return}}if(j=i,gt(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{M=n,Se.transition=t}}return!1}function Bl(e,t,n){t=rn(n,t),t=zu(e,t,1),e=at(e,t,1),t=oe(),e!==null&&(Yn(e,1,t),he(e,t))}function V(e,t,n){if(e.tag===3)Bl(e,e,n);else for(;t!==null;){if(t.tag===3){Bl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=rn(n,e),e=ju(t,e,1),t=at(t,e,1),e=oe(),t!==null&&(Yn(t,1,e),he(t,e));break}}t=t.return}}function Sp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(J&n)===n&&(G===4||G===3&&(J&130023424)===J&&500>W()-Io?Tt(e,0):Co|=n),he(e,t)}function Zu(e,t){t===0&&(e.mode&1?(t=lr,lr<<=1,!(lr&130023424)&&(lr=4194304)):t=1);var n=oe();e=Qe(e,t),e!==null&&(Yn(e,t,n),he(e,n))}function Tp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zu(e,n)}function Cp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Zu(e,n)}var Ju;Ju=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,pp(e,t,n);ce=!!(e.flags&131072)}else ce=!1,D&&t.flags&1048576&&ru(t,Ur,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Er(e,t),e=t.pendingProps;var i=Jt(t,ie.current);Yt(t,n),i=bo(null,t,r,e,i,n);var s=xo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(s=!0,Br(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fo(t),i.updater=ui,t.stateNode=i,i._reactInternals=t,Ts(t,r,e,n),t=Es(null,t,r,!0,s,n)):(t.tag=0,D&&s&&oo(t),se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Er(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ep(r),e=Ne(r,e),i){case 0:t=Is(null,t,r,e,n);break e;case 1:t=zl(null,t,r,e,n);break e;case 11:t=Pl(null,t,r,e,n);break e;case 14:t=_l(null,t,r,Ne(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ne(r,i),Is(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ne(r,i),zl(e,t,r,i,n);case 3:e:{if(Ru(t),e===null)throw Error(y(387));r=t.pendingProps,s=t.memoizedState,i=s.element,uu(e,t),Xr(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=rn(Error(y(423)),t),t=jl(e,t,r,n,i);break e}else if(r!==i){i=rn(Error(y(424)),t),t=jl(e,t,r,n,i);break e}else for(me=lt(t.stateNode.containerInfo.firstChild),ge=t,D=!0,_e=null,n=lu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===i){t=Ge(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return cu(t),e===null&&ws(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,gs(r,i)?o=null:s!==null&&gs(r,s)&&(t.flags|=32),Ou(e,t),se(e,t,o,n),t.child;case 6:return e===null&&ws(t),null;case 13:return Fu(e,t,n);case 4:return mo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ne(r,i),Pl(e,t,r,i,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,L($r,r._currentValue),r._currentValue=o,s!==null)if(Le(s.value,o)){if(s.children===i.children&&!de.current){t=Ge(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=$e(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ks(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(y(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ks(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yt(t,n),i=Te(i),r=r(i),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,i=Ne(r,t.pendingProps),i=Ne(r.type,i),_l(e,t,r,i,n);case 15:return Mu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ne(r,i),Er(e,t),t.tag=1,pe(r)?(e=!0,Br(t)):e=!1,Yt(t,n),_u(t,r,i),Ts(t,r,i,n),Es(null,t,r,!0,e,n);case 19:return Du(e,t,n);case 22:return Lu(e,t,n)}throw Error(y(156,t.tag))};function ec(e,t){return Ea(e,t)}function Ip(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,t,n,r){return new Ip(e,t,n,r)}function _o(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ep(e){if(typeof e=="function")return _o(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gs)return 11;if(e===Ks)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _r(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")_o(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ot:return Ct(n.children,i,s,t);case Qs:o=8,i|=8;break;case Gi:return e=ke(12,n,t,i|2),e.elementType=Gi,e.lanes=s,e;case Ki:return e=ke(13,n,t,i),e.elementType=Ki,e.lanes=s,e;case Yi:return e=ke(19,n,t,i),e.elementType=Yi,e.lanes=s,e;case ca:return pi(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case aa:o=10;break e;case ua:o=9;break e;case Gs:o=11;break e;case Ks:o=14;break e;case Ze:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=ke(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Ct(e,t,n,r){return e=ke(7,e,r,t),e.lanes=n,e}function pi(e,t,n,r){return e=ke(22,e,r,t),e.elementType=ca,e.lanes=n,e.stateNode={isHidden:!1},e}function $i(e,t,n){return e=ke(6,e,null,t),e.lanes=n,e}function Wi(e,t,n){return t=ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Np(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zo(e,t,n,r,i,s,o,l,a){return e=new Np(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ke(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fo(s),e}function Pp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tc(e){if(!e)return ht;e=e._reactInternals;e:{if(jt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(pe(n))return tu(e,n,t)}return t}function nc(e,t,n,r,i,s,o,l,a){return e=zo(n,r,!0,e,i,s,o,l,a),e.context=tc(null),n=e.current,r=oe(),i=ct(n),s=$e(r,i),s.callback=t??null,at(n,s,i),e.current.lanes=i,Yn(e,i,r),he(e,r),e}function hi(e,t,n,r){var i=t.current,s=oe(),o=ct(i);return n=tc(n),t.context===null?t.context=n:t.pendingContext=n,t=$e(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(i,t,o),e!==null&&(Me(e,i,o,s),Tr(e,i,o)),o}function ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jo(e,t){Vl(e,t),(e=e.alternate)&&Vl(e,t)}function _p(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}fi.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));hi(e,t,null,null)};fi.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_t(function(){hi(null,e,null,null)}),t[Xe]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=La();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Ra(e)}};function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ul(){}function zp(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ei(o);s.call(c)}}var o=nc(t,r,e,0,null,!1,!1,"",Ul);return e._reactRootContainer=o,e[Xe]=o.current,Hn(e.nodeType===8?e.parentNode:e),_t(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ei(a);l.call(c)}}var a=zo(e,0,!1,null,null,!1,!1,"",Ul);return e._reactRootContainer=a,e[Xe]=a.current,Hn(e.nodeType===8?e.parentNode:e),_t(function(){hi(t,a,n,r)}),a}function gi(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=ei(o);l.call(a)}}hi(t,o,e,i)}else o=zp(n,t,e,i,r);return ei(o)}ja=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(Zs(t,n|1),he(t,W()),!(j&6)&&(sn=W()+500,gt()))}break;case 13:_t(function(){var r=Qe(e,1);if(r!==null){var i=oe();Me(r,e,1,i)}}),jo(e,1)}};Js=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=oe();Me(t,e,134217728,n)}jo(e,134217728)}};Ma=function(e){if(e.tag===13){var t=ct(e),n=Qe(e,t);if(n!==null){var r=oe();Me(n,e,t,r)}jo(e,t)}};La=function(){return M};Oa=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};os=function(e,t,n){switch(t){case"input":if(Ji(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oi(r);if(!i)throw Error(y(90));pa(r),Ji(r,i)}}}break;case"textarea":fa(e,n);break;case"select":t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}};wa=Eo;ka=_t;var jp={usingClientEntryPoint:!1,Events:[Zn,At,oi,ba,xa,Eo]},vn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mp={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ca(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||_p,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{ni=vr.inject(Mp),De=vr}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp;ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lo(t))throw Error(y(200));return Pp(e,t,null,n)};ve.createRoot=function(e,t){if(!Lo(e))throw Error(y(299));var n=!1,r="",i=rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zo(e,1,!1,null,null,n,!1,r,i),e[Xe]=t.current,Hn(e.nodeType===8?e.parentNode:e),new Mo(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ca(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return _t(e)};ve.hydrate=function(e,t,n){if(!mi(t))throw Error(y(200));return gi(null,e,t,!0,n)};ve.hydrateRoot=function(e,t,n){if(!Lo(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=rc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=nc(t,null,e,1,n??null,i,!1,s,o),e[Xe]=t.current,Hn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fi(t)};ve.render=function(e,t,n){if(!mi(t))throw Error(y(200));return gi(null,e,t,!1,n)};ve.unmountComponentAtNode=function(e){if(!mi(e))throw Error(y(40));return e._reactRootContainer?(_t(function(){gi(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};ve.unstable_batchedUpdates=Eo;ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!mi(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return gi(e,t,n,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(e){console.error(e)}}ic(),ia.exports=ve;var Lp=ia.exports,sc,$l=Lp;sc=$l.createRoot,$l.hydrateRoot;/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oc=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=ze.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},a)=>ze.createElement("svg",{ref:a,...Rp,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:oc("lucide",i),...l},[...o.map(([c,m])=>ze.createElement(c,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=(e,t)=>{const n=ze.forwardRef(({className:r,...i},s)=>ze.createElement(Fp,{ref:s,iconNode:t,className:oc(`lucide-${Op(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=Ye("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=Ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=Ye("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=Ye("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=Ye("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=Ye("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=Ye("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=Ye("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=Ye("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),As={home:"The beginning",prologue:"Prologue – The Forgotten Anointing","part-i":"Part I – The Triple Anointing","part-ii":"Part II – The Lunar Alchemy","part-iii":"Part III – The Solar Fire","part-iv":"Part IV – The Sacred Chemistry",epilogue:"Epilogue – The Inner Sun","secret-chapter":"Secret Chapter","five-senses":"The Five Senses","beyond-five":"Beyond the Five",xxxiii:"XXXIII",signature:"Signature"},Xl="home",Wp={id:"prologue",title:"Prologue – The Forgotten Anointing",content:`
    <div class="py-8">
      <div class="flex justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
      <p class="mb-4">
        In the hidden chambers of human experience, a subtle force flows, often unnoticed: the inner anointing.
        Across cultures, this force was known by different names—chrism, essence, bindu, or sacred oil—but its
        function remains universal. It is the quiet current of awareness, the pulse that links body, mind, and
        cosmos. In an age dominated by technology and artificial intelligence, this force has been forgotten. Yet, it
        is still alive, waiting for attention, preservation, and conscious cultivation.
      </p>
      <p class="mb-4">
        This book is a map, a guide, and a teaching. It is neither bound to religion nor limited to tradition. It is for
        every human being, for every mind seeking to awaken to the hidden potential within. Here, the wisdom of
        oils, lunar cycles, herbs, and the sacred fire of the Sun converge, revealing a practice for self-alignment,
        awareness, and evolution.
      </p>
      <p class="mb-4">
        Through these pages, you will journey inward, learning to navigate the cycles of the Moon, the fragrances
        of the Earth, and the hidden currents of your own inner chemistry. You will explore the Triple Anointing, the
        path that transforms routine life into conscious ritual. And finally, you will touch the hidden Sun within—the
        force that can burn brighter than any external light, a fire that fuels creativity, insight, and presence.
      </p>
      <div class="flex justify-center mt-8">
        <img 
          src="https://images.watchermind.online/lotusSilueteMoon.jpeg" 
          alt="Lotus Silhouette with Moon" 
          class="rounded-lg shadow-lg max-w-full h-auto max-h-[400px]"
        />
      </div>
    </div>
  `},Xp={id:"part-i",title:"Part I – The Oil of Heaven and Earth",content:`
    <div class="py-8">
      <div class="flex justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
      <p class="mb-4">
        Oils have always been more than food, more than fragrance. They are condensed light, concentrated
        essence, and carriers of subtle energy. Olive oil, myrrh, cinnamon, cassia, and calamus were not chosen
        randomly—they were encoded with meaning, each herb and oil reflecting a quality of life, awareness, and
        inner discipline.
      </p>
      <p class="mb-4">
        The outer oil was a tangible ritual: applied to kings, priests, and sacred objects to signal their alignment
        with higher frequencies. The inner oil is subtler: the secretion of the pineal and pituitary glands,
        harmonized with lunar cycles, producing awareness, intuition, and perception. This inner chrism is precious,
        and its preservation is a skill.
      </p>
      <p class="mb-4">
        The mirror of outer and inner teaches that the body is the temple, the brain is the altar, and oils are bridges
        connecting matter and consciousness. Science today confirms what ancient wisdom intuited: compounds in
        plants affect cognition, mood, and physiology. Myrrh stabilizes, cinnamon excites, cassia grounds, calamus
        clarifies, and olive oil nourishes the vessel.
      </p>
      <p class="mb-4">
        To cultivate the inner anointing is to recognize the body as sacred and the mind as a temple. Simple rituals
        —touching oil, inhaling scents, meditative focus—align matter, mind, and spirit. Together, they create
        continuity between ancient practice and modern awareness. The oil of heaven and Earth is not a relic: it is
        alive, waiting to be engaged by those who notice.
      </p>
    </div>
  `},Qp={id:"part-ii",title:"Part II – The Hidden Science of Chrism",content:`
    <div class="py-8">
      <div class="flex justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
      <p class="mb-4">
        The Moon is not just a celestial body—it is a mirror of inner tides, a clock for the sacred rhythms of life. Its
        phases—New, First Quarter, Full, and Last Quarter—guide the flow of the inner chrism.
      </p>
      <ul class="list-disc pl-8 mb-4 space-y-2">
        <li><span class="font-semibold">New Moon:</span> Gather potential, plant intentions, nurture inner oil.</li>
        <li><span class="font-semibold">First Quarter:</span> Test, act, observe how energy flows and shifts.</li>
        <li><span class="font-semibold">Full Moon:</span> Illuminate, integrate, and harness peak clarity.</li>
        <li><span class="font-semibold">Last Quarter:</span> Release, reflect, and prepare for the next cycle.</li>
      </ul>
      <p class="mb-4">
        Zodiac transits color the experience: Aries sparks courage, Taurus stabilizes, Gemini weaves curiosity,
        Cancer deepens emotion, Leo ignites creativity, Virgo sharpens precision, Libra balances, Scorpio
        transforms, Sagittarius expands, Capricorn grounds, Aquarius inspires innovation, Pisces invites surrender.
      </p>
      <p class="mb-4">
        Practical alignment requires observation: journal under the New Moon, meditate under the First Quarter,
        use herbs and oils to amplify the cycles, track your body and mind's response. The lunar map is not
        superstition—it is a guide to attuning human biology to cosmic rhythm. Those who cultivate awareness of
        the Moon and its influence can navigate life with clarity, timing, and balance, aligning inner secretion with
        outer rhythm.
      </p>
    </div>
  `},Gp={id:"part-iii",title:"Part III – Rituals and Preservation",content:`
    <div class="py-8">
      <div class="flex justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
      <p class="mb-4">
        Earth offers medicine, fragrance, and ritual. Each plant, root, and resin carries properties that resonate with
        body and mind. The Exodus 30 formula—olive oil, myrrh, cinnamon, cassia, calamus—is not mere tradition
        but a blueprint for aligning human physiology and consciousness.
      </p>
      <ul class="list-disc pl-8 mb-4 space-y-2">
        <li><span class="font-semibold">Myrrh:</span> Endurance, preservation, transformation of sorrow into wisdom.</li>
        <li><span class="font-semibold">Cinnamon:</span> Passion, energy, circulation, devotion, and inner fire.</li>
        <li><span class="font-semibold">Cassia:</span> Sovereignty, dignity, balance of influence, grounding.</li>
        <li><span class="font-semibold">Calamus:</span> Clarity, posture, channel for inner currents.</li>
        <li><span class="font-semibold">Olive Oil:</span> Vessel, carrier, embodiment of Earth’s sun and nourishment.</li>
      </ul>
      <p class="mb-4">
        Herbs are linked to zodiac energies: ginger and cayenne for Aries, rose and thyme for Taurus, lavender for
        Gemini, lotus for Cancer, cinnamon for Leo, fennel for Virgo, vanilla for Libra, wormwood for Scorpio, sage
        for Sagittarius, cedar for Capricorn, frankincense for Aquarius, sandalwood for Pisces.
      </p>
      <p class="mb-4">
        Virtues mirror herbs: endurance, passion, dignity, clarity, humility. Cultivation of these qualities preserves
        the inner chrism. Applying oils, consuming herbs, and cultivating virtues are all part of a living practice that
        aligns body, mind, and cosmic rhythm.
      </p>
    </div>
  `},Kp={id:"part-iv",title:"Part IV – The Triple Anointing",content:`
    <div class="py-8">
      <div class="flex justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
      <p class="mb-4">
        The Triple Anointing layers the Earth, Moon, and Spirit to create a living temple:
      </p>
      <ul class="list-disc pl-8 mb-4 space-y-2">
        <li><span class="font-semibold">Earth:</span> Oils and herbs awaken pathways in the nervous system, stimulating courage, focus, and nourishment.</li>
        <li><span class="font-semibold">Moon:</span> Lunar cycles guide inner secretion, timing meditation, journaling, and reflection.</li>
        <li><span class="font-semibold">Spirit:</span> The inner chrism pulses with neurochemical and subtle resonance, elevating perception and insight.</li>
      </ul>
      <p class="mb-4">
        Integration is a practice: aligning rituals with lunar timing, using herbs and oils intentionally, cultivating
        virtues, and maintaining posture and breath awareness. The human becomes a conscious node, a priest of
        their own neural cathedral, synchronizing inner processes with cosmic rhythm. The Triple Anointing is a
        protocol for evolution, an operational system for body, mind, and spirit.
      </p>
    </div>
  `},Yp={id:"epilogue",title:"Epilogue – Toward the Age of Inner Anointing",content:`
    <div class="py-8">
      <div class="flex justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
      <p class="mb-4">
        The age of inner anointing begins when humans cultivate the sacred within. Technology serves the
        external, while the inner chrism guides perception, creativity, and resilience. Morning, midday, and evening
        practices align posture, nutrition, journaling, meditation, and sensory engagement. Communities of
        anointed humans create networks of coherence, clarity, and alignment.
      </p>
      <p class="mb-4">
        The inner anointing is humanity’s hidden variable: a conscious system of self-alignment, preservation of
        clarity, and integration of intuition and intelligence. The world transforms when its humans reclaim
        awareness, bridging the material, temporal, and spiritual with deliberate practice and presence.
      </p>
    </div>
  `},qp={id:"secret-chapter",title:"Secret Chapter",content:`
    <div class="text-center py-12">
      <div class="mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-amber-300 mb-4">The Sun: Fire of the Inner and Outer Worlds</h3>
      <p class="text-amber-200 mb-4">
        Beyond the oils, herbs, and lunar rhythms lies the Sun—the primal fire of existence. Its light is not just photons; it is a metaphor and mechanism for transformation. The Sun ignites life on Earth, drives cycles of energy, and fuels consciousness. Within humans, it mirrors the inner fire: creativity, vitality, intuition, and the courage to act.
      </p>
      <p class="text-amber-200 mb-4">
        The Sun can burn harder than any explosion because it is not limited to matter—it is the intensity of awareness, of conscious focus, of aligned energy. A human who preserves their inner chrism, aligns with the Moon, and cultivates the Earth gifts carries a miniature Sun within. This fire can transform fear into insight, inertia into action, and potential into manifestation.
      </p>
      <p class="text-amber-200 mb-4">
        Solar alignment amplifies the inner temple: morning light stimulates cortisol and circadian rhythm, meditation at sunrise aligns the mind with external energy, and intentional exposure to natural sunlight becomes a tool for neural calibration. The hidden Sun teaches that ultimate fire is not destruction—it is illumination, presence, and clarity.
      </p>
      <p class="text-amber-200 mb-4">
        To cultivate your inner Sun:
      </p>
      <ul class="list-disc pl-8 mb-4 text-left mx-auto max-w-lg">
        <li>Begin the day with light awareness, inhaling deeply, feeling energy pulse</li>
        <li>Visualize the inner fire rising, warming the body, and illuminating thought</li>
        <li>Act with intention, letting the inner Sun guide focus, creativity, and compassion</li>
        <li>Align external action with inner purpose, integrating solar rhythm with neural rhythm</li>
      </ul>
      <p class="text-amber-200">
        The Sun is a reminder that true energy is conscious, sustainable, and radiant. Preserved inner fire, like the inner chrism, is a source of limitless potential, waiting for those who recognize, nurture, and respect it.
      </p>
    </div>
  `},Zp={id:"five-senses",title:"The Five Senses: Mapping the Human Gateway",content:`
    <div class="py-8">
      <div class="flex justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
      <p class="text-amber-200 mb-8">
        The human being experiences the world through five primary portals: sight, hearing, smell, taste, and touch. These senses are not mere channels of information—they are instruments of alchemy, interfaces between inner and outer reality, conduits for the sacred secretion, and keys to the architecture of consciousness. When aligned, they form a full-spectrum map of perception, allowing the practitioner to navigate life with precision, insight, and awareness.
      </p>

      <div class="space-y-10">
        <!-- Sight -->
        <div class="border-l-2 border-amber-600 pl-4">
          <h3 class="text-xl font-semibold text-amber-300 mb-3">Sight: The Gateway of Light</h3>
          <p class="mb-3">Vision is the most celebrated sense, yet often the least understood. Eyes are not simply cameras—they are neural amplifiers, translating photons into thought, emotion, and intuition.</p>
          <p class="mb-3"><span class="font-medium text-amber-200">Outer alignment:</span> Observe natural light cycles, sunrise, sunset, and lunar illumination. Color impacts mood: blues calm, reds energize, greens restore.</p>
          <p class="mb-3"><span class="font-medium text-amber-200">Inner alignment:</span> The pineal gland responds to light patterns, modulating melatonin and the inner chrism. Meditation on light, visualization exercises, and awareness of shadows help map the inner landscape.</p>
          <p><span class="font-medium text-amber-200">Practical practice:</span> Daily moments of mindful seeing, observing micro-details in nature, and consciously noticing patterns in your environment strengthen neural circuits of clarity.</p>
        </div>

        <!-- Hearing -->
        <div class="border-l-2 border-amber-600 pl-4">
          <h3 class="text-xl font-semibold text-amber-300 mb-3">Hearing: The Symphony of Vibration</h3>
          <p class="mb-3">Sound is vibration, resonance, and frequency. Every tone, rhythm, and silence communicates with the inner temple.</p>
          <p class="mb-3"><span class="font-medium text-amber-200">Outer alignment:</span> Nature’s soundscape—wind, water, birdsong—supports neural coherence. Human-generated music and tones impact emotional and cognitive states.</p>
          <p class="mb-3"><span class="font-medium text-amber-200">Inner alignment:</span> The inner secretion responds to resonance; harmonics can stimulate brainwave synchronization. Chanting, humming, and listening to vibration-aligned frequencies enhance sensory integration.</p>
          <p><span class="font-medium text-amber-200">Practical practice:</span> Engage in conscious listening, avoid noise pollution when possible, and practice mindful sound meditation to attune hearing to inner rhythms.</p>
        </div>

        <!-- Smell -->
        <div class="border-l-2 border-amber-600 pl-4">
          <h3 class="text-xl font-semibold text-amber-300 mb-3">Smell: The Memory Key</h3>
          <p class="mb-3">Olfaction is directly wired to the limbic system, the seat of memory and emotion. Scents are chemical messengers capable of altering physiology and mood instantly.</p>
          <p class="mb-3"><span class="font-medium text-amber-200">Outer alignment:</span> Essential oils, incense, and fresh herbs connect the body to subtle energy fields. Recognize aromas associated with clarity, calm, or inspiration.</p>
          <p class="mb-3"><span class="font-medium text-amber-200">Inner alignment:</span> Smell triggers neurochemical cascades, influencing mood and internal secretion. Awareness of scent helps preserve inner chrism and emotional intelligence.</p>
          <p><span class="font-medium text-amber-200">Practical practice:</span> Create a personal olfactory ritual—use fragrance mindfully during meditation, journaling, or intention setting.</p>
        </div>

        <!-- Taste -->
        <div class="border-l-2 border-amber-600 pl-4">
          <h3 class="text-xl font-semibold text-amber-300 mb-3">Taste: The Alchemy of Nourishment</h3>
          <p class="mb-3">Taste is the biochemical interface with matter. It signals what is nourishing, balancing, or harmful. Beyond sustenance, taste carries energy and symbolic resonance.</p>
          <p class="mb-3"><span class="font-medium text-amber-200">Outer alignment:</span> Align diet with lunar and seasonal cycles. Herbs and spices—cinnamon, myrrh, cassia, calamus—carry energetic information.</p>
          <p class="mb-3"><span class="font-medium text-amber-200">Inner alignment:</span> Taste is linked to digestive, neural, and endocrine systems; mindful eating preserves inner secretion and elevates consciousness.</p>
          <p><span class="font-medium text-amber-200">Practical practice:</span> Engage all taste experiences with full awareness. Discern subtle flavors, their impact on mood, and integrate mindful eating into spiritual and daily routines.</p>
        </div>

        <!-- Touch -->
        <div class="border-l-2 border-amber-600 pl-4">
          <h3 class="text-xl font-semibold text-amber-300 mb-3">Touch: The Felt Reality</h3>
          <p class="mb-3">Touch is the primal sense, grounding the body in reality. Skin communicates temperature, texture, vibration, and pressure, and is deeply connected to emotional intelligence.</p>
          <p class="mb-3"><span class="font-medium text-amber-200">Outer alignment:</span> Interaction with natural textures—stone, wood, water, soil—enhances grounding. Massage, self-touch, and gentle movement stimulate sensory and lymphatic pathways.</p>
          <p class="mb-3"><span class="font-medium text-amber-200">Inner alignment:</span> Touch connects with the nervous system and inner chrism, promoting alignment between body, mind, and spirit.</p>
          <p><span class="font-medium text-amber-200">Practical practice:</span> Practice mindful touch, exploring texture and temperature, or gentle pressure during meditation. Recognize the body as both vessel and sensor.</p>
        </div>

        <!-- Five-Sense Map -->
        <div class="border-l-2 border-amber-600 pl-4">
          <h3 class="text-xl font-semibold text-amber-300 mb-3">The Five-Sense Map</h3>
          <p class="mb-3">The senses are not isolated—they form a dynamic web:</p>
          
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><span class="font-medium text-amber-200">Sight ↔ Hearing:</span> Light and sound synchronize neural circuits for perception.</li>
            <li><span class="font-medium text-amber-200">Smell ↔ Taste:</span> Aromatic molecules inform both flavor and mood.</li>
            <li><span class="font-medium text-amber-200">Touch ↔ All senses:</span> Physical grounding enhances integration of sensory input.</li>
          </ul>
          
          <p class="mb-6">Layered together, they form a sensory cartography, a living map for the inner priest. Observing, calibrating, and harmonizing all five senses allows full alignment with lunar cycles, herbal resonance, and the triple anointing. Awareness of the senses is the first step in mastering perception, the second in mastering presence, and the third in preserving the sacred inner secretion.</p>
          
          <h4 class="text-lg font-semibold text-amber-300 mb-3">Integration in Practice</h4>
          
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li>Begin each day with a sensory audit: notice light, sound, scent, taste, and touch.</li>
            <li>Sync sensory practices with lunar phases for maximum effect.</li>
            <li>Combine herbs, oils, and sound with mindful observation to enhance neural plasticity and inner secretion preservation.</li>
            <li>Journal sensory impressions as data for understanding personal resonance patterns and optimizing inner evolution.</li>
          </ul>
          
          <p>The five senses are the human interface between the inner and outer cosmos. When mastered, they are no longer passive—they are active gateways, each carrying its own wisdom, guidance, and pathway to the sacred oil within. Through the map of the five senses, one learns to inhabit the body fully, navigate the world consciously, and awaken a resonance that extends beyond the self to the collective human consciousness.</p>
        </div>
      </div>
    </div>
  `},Jp={id:"beyond-five",title:"Beyond the Five: The Hidden Senses",content:`
    <div class="py-8">
      <div class="flex justify-center mb-6">
        <div class="flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      </div>
      
      <div class="space-y-6">
        <p class="text-amber-200 leading-relaxed">
          The ancients spoke of five senses, yet the human body is not limited to five gates. Modern science reveals at least fifteen, and esoteric traditions have always known the body is a constellation of subtle antennas, each tuned to different frequencies of existence.
        </p>
        
        <p class="text-amber-200 leading-relaxed">
          Where sight, hearing, smell, taste, and touch open the world’s outer doors, the hidden senses reveal inner corridors. They are the quiet keepers of balance, pain, temperature, orientation, and time. They tell us not only where we are in the cosmos, but also who we are in the flesh. To neglect them is to walk half-blind; to honor them is to master the temple of perception.
        </p>
        
        <p class="text-amber-200 leading-relaxed">
          Just as light and sound guide the outer priest, these hidden senses guide the inner alchemist. They do not shout — they whisper. And when cultivated, they expand awareness beyond the ordinary, offering both survival intelligence and mystical insight.
        </p>
      </div>

      <div class="mt-12">
        <h2 class="text-2xl font-bold text-amber-300 mb-6 text-center">The Hidden Ten</h2>
        
        <div class="space-y-10">
          <div class="border-l-2 border-amber-700 pl-4 py-2">
            <h3 class="text-xl font-bold text-amber-300 mb-2">6. Equilibrioception – The Sense of Balance</h3>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Outer function:</span> The vestibular system in the inner ear keeps orientation and posture.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Inner alignment:</span> Balance mirrors inner stability; steadiness of body reflects steadiness of mind.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Practice:</span> Tai chi, dance, or simple stillness meditations recalibrate balance.</p>
          </div>
          
          <div class="border-l-2 border-amber-700 pl-4 py-2">
            <h3 class="text-xl font-bold text-amber-300 mb-2">7. Proprioception – The Sense of Body Position</h3>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Outer function:</span> Muscles, joints, and nerves tell us where limbs are without sight.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Inner alignment:</span> Proprioception teaches humility — knowing one’s place in space.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Practice:</span> Move blindfolded, or hold yoga poses with eyes closed.</p>
          </div>
          
          <div class="border-l-2 border-amber-700 pl-4 py-2">
            <h3 class="text-xl font-bold text-amber-300 mb-2">8. Thermoception – The Sense of Temperature</h3>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Outer function:</span> Receptors detect heat and cold on the skin.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Inner alignment:</span> Fire and frost symbolize passion and detachment — the dance of polarity.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Practice:</span> Contrast showers or mindful exposure to natural temperatures.</p>
          </div>
          
          <div class="border-l-2 border-amber-700 pl-4 py-2">
            <h3 class="text-xl font-bold text-amber-300 mb-2">9. Nociception – The Sense of Pain</h3>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Outer function:</span> Alerts us to potential harm through thermal, mechanical, or chemical signals.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Inner alignment:</span> Pain is teacher and boundary — showing where healing must begin.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Practice:</span> Breathwork during discomfort, reframing pain as signal rather than punishment.</p>
          </div>
          
          <div class="border-l-2 border-amber-700 pl-4 py-2">
            <h3 class="text-xl font-bold text-amber-300 mb-2">10. Interoception – The Sense of Internal States</h3>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Outer function:</span> Tracks hunger, thirst, heartbeat, breath, and visceral rhythms.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Inner alignment:</span> Interoception reconnects us to the sacred language of the body.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Practice:</span> Ask daily: “What does my body need now?” and honor the answer.</p>
          </div>
          
          <div class="border-l-2 border-amber-700 pl-4 py-2">
            <h3 class="text-xl font-bold text-amber-300 mb-2">11. Time Perception – The Sense of Rhythm</h3>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Outer function:</span> Neural circuits estimate intervals, circadian cycles, and seasonal patterns.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Inner alignment:</span> Time perception attunes us to cosmic cycles — sunrise, moon phases, tides.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Practice:</span> Meditate with timed intervals, sync awareness with lunar and solar rhythms.</p>
          </div>
          
          <div class="border-l-2 border-amber-700 pl-4 py-2">
            <h3 class="text-xl font-bold text-amber-300 mb-2">12. Magnetoreception – The Subtle Compass (Disputed)</h3>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Outer function:</span> Evidence suggests humans may detect Earth’s magnetic field faintly.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Inner alignment:</span> Symbol of inner direction, the compass of intuition.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Practice:</span> Silent walks in nature, aligning movements with cardinal directions.</p>
          </div>
          
          <div class="border-l-2 border-amber-700 pl-4 py-2">
            <h3 class="text-xl font-bold text-amber-300 mb-2">13. Pruriception – The Sense of Itch</h3>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Outer function:</span> Distinct nerve pathways trigger the reflex to scratch.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Inner alignment:</span> Restlessness as signal — the itch for change, growth, or release.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Practice:</span> Notice the urge before scratching — training patience and impulse control.</p>
          </div>
          
          <div class="border-l-2 border-amber-700 pl-4 py-2">
            <h3 class="text-xl font-bold text-amber-300 mb-2">14. Mechanoreception (Stretch & Pressure)</h3>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Outer function:</span> Internal sensors track expansion of lungs, fullness of bladder, and muscle stretch.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Inner alignment:</span> Teaches limits, receptivity, and the wisdom of release.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Practice:</span> Conscious breathing, mindful awareness of stomach expansion or muscular stretch.</p>
          </div>
          
          <div class="border-l-2 border-amber-700 pl-4 py-2">
            <h3 class="text-xl font-bold text-amber-300 mb-2">15. Vibroreception – The Sense of Vibration</h3>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Outer function:</span> Bones, skin, and inner ear detect oscillations and resonance.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Inner alignment:</span> Reminds us all is frequency; to live is to tune with universal rhythm.</p>
            <p class="text-amber-200"><span class="font-semibold text-amber-400">Practice:</span> Drum circles, sound baths, barefoot walking to feel subtle ground vibrations.</p>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <p class="text-amber-300 italic">To live through these senses is to awaken the body as temple, the world as scripture, and perception itself as sacred practice.</p>
        </div>
      </div>
    </div>
  `},eh={id:"vision",title:"Vision – The Gateway of Light",category:"Classical Five – The Outer Gates",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Vision – The Gateway of Light</h3>
      
      <h4 class="text-lg font-bold text-amber-300 mt-4 mb-2">The Outer Function – Eyes as Neural Alchemy</h4>
      
      <p class="text-amber-200 leading-relaxed">
        Vision is the most celebrated of the human senses, and for many, the one most closely identified with knowledge itself. To see is to know. The human eye, a sphere of transparent cornea, crystalline lens, and photoreceptive retina, is often likened to a camera. But this metaphor falls short. Unlike a mechanical camera, which passively records, the eye is part of a living brain. It does not merely capture photons; it interprets them, weaving them into meaning, memory, and emotion.
      </p>
      
      <p class="text-amber-200 leading-relaxed mt-4">
        The retina itself is not a passive screen but neural tissue — an extension of the central nervous system. It is lined with two types of photoreceptors: rods and cones. Rods, about 120 million in each eye, are highly sensitive to light and motion, enabling us to see in dim conditions. Cones, fewer in number (~6 million), allow color vision and fine detail, divided into red, green, and blue-sensitive subtypes. Together, rods and cones transmute photons into electrical signals, which travel through the optic nerve to the brain’s visual cortex.
      </p>
      
      <p class="text-amber-200 leading-relaxed mt-4">
        Yet even this is only part of the story. Visual processing does not occur in a single location. Roughly one-third of the human brain is devoted to visual interpretation. Information fans out into dozens of specialized regions — some for detecting edges, others for motion, color, faces, or spatial depth. This distributed architecture reveals an important truth: seeing is not a single act but a symphony of neural transformations.
      </p>
    </div>
  `},th={id:"hearing",title:"Hearing – The Symphony of Vibration",category:"Classical Five – The Outer Gates",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Hearing – The Symphony of Vibration</h3>
      
      <p class="text-amber-200 leading-relaxed">
        If sight is the sovereign of light, then hearing is the sovereign of vibration. Where the eye parses photons and patterns of illumination, the ear becomes the temple of resonance, translating waves of pressure in the air into meaning, memory, and emotion. To hear is to stand at the threshold between silence and song, between chaos and rhythm. It is to participate in a world that is perpetually moving, vibrating, humming—because at its root, reality is vibration.
      </p>
      
      <h4 class="text-lg font-bold text-amber-300 mt-4 mb-2">The Physics of Sound</h4>
      
      <p class="text-amber-200 leading-relaxed">
        Sound begins as movement. A plucked string, a struck drum, a human voice exhaling across vocal cords: each disturbs the air, compressing and expanding it in microscopic ripples. These ripples radiate outward like circles on water, invisible yet tangible. They travel as longitudinal waves, alternating zones of high and low pressure, until they reach the sensitive architecture of the human ear.
      </p>
      
      <p class="text-amber-200 leading-relaxed mt-4">
        The human auditory system is a marvel of biological engineering. The outer ear, with its curves and ridges, funnels sound toward the tympanic membrane. The middle ear, with its tiny bones—the malleus, incus, and stapes—amplifies the vibrations. Finally, the inner ear converts mechanical pressure into neural signals: the cochlea, coiled like a nautilus shell, houses thousands of hair cells tuned to specific frequencies. Each hair cell bends in rhythm with its preferred vibration, firing signals along the auditory nerve toward the brain.
      </p>
      
      <p class="text-amber-200 leading-relaxed mt-4">
        This is the mechanical side of hearing, but what the brain does with these signals is more astonishing. Within milliseconds, the brain can detect pitch, timbre, direction, and rhythm. It can recognize the difference between a mother’s whisper and a thunderclap, a violin and a cello, a laugh and a sob. Hearing is not passive reception—it is constant interpretation, pattern recognition, and prediction.
      </p>
    </div>
  `},nh={id:"smell",title:"Smell – The Whisper of Molecules",category:"Classical Five – The Outer Gates",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Smell – The Whisper of Molecules</h3>
      <p class="text-amber-200 mb-4">If vision is the sense of light and hearing the sense of vibration, then smell is the sense of memory. It is the oldest of our senses, both evolutionarily and emotionally, and perhaps the most mysterious. Where the eye and ear translate waves, smell translates molecules. It is chemistry as perception — a direct communion between the inner body and the outer world.</p>
      
      <p class="text-amber-200 mb-4">To smell is to draw the world into oneself. Each inhalation carries invisible signatures: the musk of soil after rain, the fire-thread tang of ozone before a storm, the delicate esters of a rose, the acrid warning of smoke. These molecules pass over hidden sensors deep in the nose, and in milliseconds they become not just data but meaning, mood, and memory.</p>
      
      <p class="text-amber-200 mb-6">Smell is the alchemy of air: it takes matter too small to see, and transforms it into emotion.</p>
      
      <h4 class="text-lg font-semibold text-amber-300 mb-3">The Architecture of Smell</h4>
      
      <p class="text-amber-200 mb-4">The human olfactory system is both simple and profound. Inside the nasal cavity, high above the path of airflow, lies the olfactory epithelium — a postage-stamp-sized patch of sensory neurons. Each neuron carries specialized receptor proteins, each tuned to particular molecular shapes. When a molecule binds its receptor, it sparks an electrical signal that travels along the olfactory nerve (cranial nerve I) to the olfactory bulb, just behind the forehead.</p>
      
      <p class="text-amber-200 mb-4">There, an extraordinary transformation happens: the pattern of activated neurons forms an olfactory map, like a chemical constellation. This map is sent directly to the limbic system — especially the amygdala (emotion center) and hippocampus (memory center). Unlike sight and hearing, which first pass through the brain’s “relay station” (the thalamus), smell bypasses it. This is crucial: smell reaches the emotional brain before it reaches consciousness.</p>
      
      <p class="text-amber-200">This is why the scent of an old book can summon childhood in a flash, why perfume can conjure love or loss with surgical precision, why smells can soothe trauma or trigger it. Smell is a time machine wired straight into the soul.</p>
    </div>
  `},rh={id:"taste",title:"Taste – The Alchemy of Nourishment",category:"Classical Five – The Outer Gates",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Taste – The Alchemy of Nourishment</h3>
      <p class="text-amber-200 mb-4">If smell is the alchemy of air, taste is the alchemy of matter. It is the sense that decides what the body allows to become part of itself. Through taste, we discern what nourishes, what harms, and what delights. Every bite is a crossroads: the world becomes the body, or it is rejected.</p>
      
      <p class="text-amber-200 mb-4">Taste is our most intimate form of perception. Light and sound can be observed from a distance; smells drift at arm’s length. But taste requires touching the world with the tongue, dissolving it in saliva, and letting it cross the boundary of the self. It is a sacred trust — and one of the primal roots of pleasure.</p>
      
      <h4 class="text-lg font-semibold text-amber-300 mb-3">The Outer Function – Chemistry as Perception</h4>
      
      <p class="text-amber-200 mb-4">Taste begins with chemoreceptors on the tongue and soft palate. Humans have around 5,000–10,000 taste buds, each containing 50–150 taste receptor cells. These are clustered mainly on the papillae of the tongue: fungiform (front), foliate (sides), and circumvallate (back).</p>
      
      <p class="text-amber-200">Each taste bud opens to the surface through a tiny pore. Molecules from food dissolve in saliva and enter the pore, binding to receptor proteins. This triggers electrical signals that travel through three cranial nerves — the facial (VII), glossopharyngeal (IX), and vagus (X) — to the nucleus of the solitary tract in the brainstem, then to the thalamus, and finally to the gustatory cortex in the insula.</p>
      
      <p class="text-amber-200">Humans detect at least five universally accepted basic tastes:</p>
    </div>
  `},ih={id:"touch",title:"Touch – The Language of Contact",category:"Classical Five – The Outer Gates",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Touch – The Language of Contact</h3>
      
      <p class="text-amber-200 mb-4">
        Sight observes. Hearing receives. Smell remembers. Taste discerns.<br>
        But touch confirms.
      </p>
      
      <p class="text-amber-200 mb-4">
        It is the first sense to awaken in the womb and the last to fade at death. Before the eyes open or the ears attune, 
        the skin already feels — pressure, warmth, movement, vibration. Touch is the foundation upon which all other senses build. 
        Without it, we could not stand, move, or even know where our body ends and the world begins.
      </p>
      
      <p class="text-amber-200 mb-4">
        Touch is the most extensive sense of all. It blankets us, a living boundary between self and universe. 
        Yet it is more than boundary — it is bridge. Through touch, the world becomes intimate, and the self becomes real.
      </p>
      
      <h4 class="text-lg font-bold text-amber-300 mb-2 mt-6">The Outer Function — The Somatosensory System</h4>
      
      <p class="text-amber-200 mb-4">
        Touch is not one sense but a family of submodalities collectively called somatosensation.
      </p>
      
      <p class="text-amber-200 mb-4">
        The skin contains a sophisticated network of mechanoreceptors, thermoreceptors, and nociceptors, 
        each tuned to specific kinds of stimuli:
      </p>
      
      <ul class="list-disc pl-5 text-amber-200 mb-4">
        <li class="mb-2">
          <strong>Merkel cells</strong> — slow-adapting receptors that detect pressure and fine texture.
        </li>
        <li class="mb-2">
          <strong>Meissner corpuscles</strong> — fast-adapting receptors sensitive to light touch and flutter.
        </li>
        <li class="mb-2">
          <strong>Pacinian corpuscles</strong> — deep receptors detecting vibration.
        </li>
        <li class="mb-2">
          <strong>Ruffini endings</strong> — sense skin stretch and sustained pressure.
        </li>
        <li>
          <strong>Free nerve endings</strong> — detect pain, temperature, and itch.
        </li>
      </ul>
      
      <p class="text-amber-200 mb-4">
        Signals travel via Aβ (touch), Aδ (fast pain/cold), and C (slow pain/warm) fibers to the dorsal root ganglia, 
        then up the dorsal column–medial lemniscal pathway to the somatosensory cortex (S1). The brain maintains a 
        sensory homunculus — a distorted body map where lips, hands, and genitals loom large due to their dense innervation.
      </p>
      
      <p class="text-amber-200">
        Touch also includes deep somatosensation: receptors in muscles, tendons, and joints provide pressure and 
        stretch information to guide movement.
      </p>
      
      <p class="text-amber-200 mt-4">
        This system operates continuously, mostly below awareness, composing the silent symphony of embodiment.
      </p>
    </div>
  `},sh={id:"equilibrioception",title:"Equilibrioception – The Inner Compass",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Equilibrioception: The Sense of Balance</h3>
      
      <p class="text-amber-200 mb-4">
        Balance is the quiet foundation of all movement. It does not draw attention like sight or sound, 
        yet it makes every other sense usable. Without balance, the body cannot stand, the eyes cannot focus, 
        the hands cannot act. Balance is not just physical stability — it is orientation, the primal knowing 
        of where you are in space, and whether you are upright in the world.
      </p>
      
      <h4 class="text-lg font-bold text-amber-300 mb-2 mt-6">The Outer Function — The Vestibular System</h4>
      
      <p class="text-amber-200 mb-4">
        Equilibrioception is governed primarily by the vestibular system, a set of tiny structures in the 
        inner ear embedded within the bony labyrinth of the temporal bone. It works in constant collaboration 
        with vision and proprioception to maintain posture, focus gaze, and coordinate movement.
      </p>
      
      <p class="text-amber-200 mb-4">
        There are two key components:
      </p>
      
      <ul class="list-disc pl-5 text-amber-200 mb-4">
        <li class="mb-2">
          <strong>Semicircular Canals</strong> — Three fluid-filled arcs oriented at right angles to each other, 
          like a 3D gyroscope. They detect angular acceleration (rotational movements). When you turn your head, 
          the fluid lags, bending hair cells that send signals via the vestibular branch of cranial nerve VIII 
          to the brain.
        </li>
        <li>
          <strong>Otolith Organs (Utricle and Saccule)</strong> — These detect linear acceleration and gravity. 
          They contain hair cells topped with tiny calcium carbonate crystals (otoliths). When you tilt or accelerate, 
          the crystals shift, pulling the hair cells and sending signals about head orientation and gravitational pull.
        </li>
      </ul>
      
      <p class="text-amber-200">
        These vestibular signals go to the vestibular nuclei in the brainstem, the cerebellum (balance control), 
        and oculomotor centers (to stabilize vision). The vestibulo-ocular reflex (VOR) keeps your eyes fixed on 
        a target even when your head moves — without it, vision would blur with each step.
      </p>
    </div>
  `},oh={id:"proprioception",title:"Proprioception – The Body Map",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Proprioception – The Body Map</h3>
      
      <p class="text-amber-200 mb-4">
        If equilibrioception is the gyroscope of the human temple, proprioception is its map. 
        It tells you where your limbs are without looking, how much force to use, and how to move 
        through space without colliding with the world.
      </p>
      
      <p class="text-amber-200 mb-4">
        Close your eyes and touch your nose — this act, effortless and precise, is proprioception in action. 
        Without it, you would stumble, miss your mouth with a spoon, or be unable to walk in the dark.
      </p>
      
      <p class="text-amber-200 mb-4">
        Where balance keeps you upright, proprioception keeps you coherent. It is the sense that silently 
        stitches body and space together into a single, living geometry.
      </p>
      
      <h4 class="text-lg font-bold text-amber-300 mb-2 mt-6">The Outer Function — The Body’s Internal GPS</h4>
      
      <p class="text-amber-200 mb-4">
        Proprioception is sometimes called the "sixth sense" in neuroscience, though it is actually a complex 
        network of mechanosensory feedback loops. Its main sensory organs are:
      </p>
      
      <ul class="list-disc pl-5 text-amber-200 mb-4">
        <li class="mb-2">
          <strong>Muscle spindles</strong> — detect stretch and speed of muscle lengthening
        </li>
        <li class="mb-2">
          <strong>Golgi tendon organs</strong> — detect tension at the junction of muscle and tendon
        </li>
        <li class="mb-2">
          <strong>Joint capsule mechanoreceptors</strong> — detect joint angle and pressure
        </li>
        <li>
          <strong>Skin stretch receptors</strong> — contribute information about limb movement
        </li>
      </ul>
      
      <p class="text-amber-200">
        These signals travel through large myelinated Aα and Aβ fibers to the dorsal columns of the spinal cord, 
        then ascend to the somatosensory cortex (S1), cerebellum, and posterior parietal cortex.
      </p>
      
      <p class="text-amber-200 mt-4">
        This system operates continuously and unconsciously, producing a real-time body schema — a dynamic 3D model 
        of your body in space. This schema updates hundreds of times per second, allowing fluid movement, coordination, 
        and postural control.
      </p>
    </div>
  `},lh={id:"kinesthesia",title:"Kinesthesia – The Sense of Motion",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Kinesthesia – The Sense of Motion</h3>
      
      <p class="text-amber-200 mb-4">
        Where proprioception tells you where your body is, kinesthesia tells you how it is moving — 
        and how much effort that motion requires. It is the sense of velocity, acceleration, force, and fluidity.
      </p>
      
      <p class="text-amber-200 mb-4">
        If proprioception is the body’s map, kinesthesia is its choreography. It lets you catch a falling glass, 
        write with a pen, or play a violin without watching your fingers. It transforms position into motion, 
        static form into living gesture.
      </p>
      
      <h4 class="text-lg font-bold text-amber-300 mb-2 mt-6">The Outer Function — Motion Perception from Within</h4>
      
      <p class="text-amber-200 mb-4">
        Kinesthesia arises from the same deep somatosensory network as proprioception but emphasizes 
        dynamic feedback rather than static position. Its key sensory contributors are:
      </p>
      
      <ul class="list-disc pl-5 text-amber-200 mb-4">
        <li class="mb-2">
          <strong>Muscle spindles</strong> — detect change in muscle length and speed of stretch
        </li>
        <li class="mb-2">
          <strong>Golgi tendon organs</strong> — detect changes in muscle tension during contraction
        </li>
        <li class="mb-2">
          <strong>Joint mechanoreceptors</strong> — sense acceleration and deceleration at joints
        </li>
        <li class="mb-2">
          <strong>Skin stretch receptors</strong> — detect movement of skin over moving muscles
        </li>
        <li>
          <strong>Efference copy signals</strong> — motor command duplicates sent to sensory areas to predict expected movement
        </li>
      </ul>
      
      <p class="text-amber-200">
        These signals travel via Aα and Aβ fibers to the cerebellum (coordinating timing/force), 
        primary somatosensory cortex, and posterior parietal cortex (integrating body schema with spatial planning).
      </p>
      
      <p class="text-amber-200 mt-4">
        Unlike proprioception, which builds a static map, kinesthesia builds a dynamic model — 
        the brain’s expectation of how the body is moving in real time. This predictive aspect 
        allows smooth, efficient motion without conscious micromanagement.
      </p>
    </div>
  `},ah={id:"graviception",title:"Graviception – The Gravity Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Graviception – The Gravity Sense</h3>
      <div class="text-amber-200">
        <p>Proprioception tells you where your body is.<br>Kinesthesia tells you how it moves.<br><strong>Graviception tells you that you are being held.</strong></p>
        <p class="mt-4">It is the silent sense of weight — the body's constant dialogue with the pull of the Earth. Gravity presses on you at every moment, shaping posture, muscle tone, and orientation. Without it, there would be no up or down, no falling or standing, no meaning to balance or movement.</p>
        <p class="mt-4">Graviception is rarely named, yet it underlies all action. It is the invisible floor beneath consciousness — and the reminder that <strong>we belong to a planet.</strong></p>
        
        <hr class="border-amber-800 my-6">
        
        <h4 class="text-lg font-bold text-amber-300 mt-6 mb-2">The Outer Function — Sensing Gravity Itself</h4>
        
        <p>Graviception overlaps with but is distinct from equilibrioception. Balance senses orientation; graviception senses <strong>load</strong> — the body's weight pressing into support surfaces.</p>
        <p class="mt-4">This information comes from several sources:</p>
        
        <ul class="list-disc pl-5 space-y-2 mt-4">
          <li><strong>Otolith organs (utricle, saccule)</strong> in the vestibular system detect the constant acceleration of gravity (~9.81 m/s²). Their tiny calcium carbonate crystals bend hair cells under gravity's pull, signaling head tilt.</li>
          <li><strong>Muscle spindles and Golgi tendon organs</strong> detect constant muscle tension required to counteract gravity.</li>
          <li><strong>Cutaneous mechanoreceptors</strong> in the soles of the feet and other contact points detect pressure gradients from weight-bearing.</li>
          <li><strong>Baroreceptors and visceral stretch receptors</strong> sense blood shifting downward under gravity, regulating circulation.</li>
        </ul>
        
        <p class="mt-4">The brain integrates these inputs in the <strong>vestibular nuclei, cerebellum, and parietal cortex</strong>, generating an ever-present sense of downness and body weight.</p>
      </div>
    </div>
  `},uh={id:"vestibular-acceleration",title:"Vestibular Acceleration – The Motion Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Vestibular Acceleration – The Motion Sense</h3>
      <div class="text-amber-200">
        <p>If graviception is the tether that holds you to Earth, <strong>vestibular acceleration is the wind that lets you move through it.</strong></p>
        <p class="mt-4">It is the sense that detects <strong>speed, rotation, and directional change</strong> — the feeling of starting, stopping, spinning, or soaring. This is the system that tells you you're moving even with your eyes closed, that keeps your eyes steady while your head whips, that lets you ride a bike, do a cartwheel, or dance without toppling.</p>
        <p class="mt-4">Where equilibrioception is about staying upright, vestibular acceleration is about <strong>navigating motion without losing yourself.</strong></p>
        
        <hr class="border-amber-800 my-6">
        
        <h4 class="text-lg font-bold text-amber-300 mt-6 mb-2">The Outer Function — The Inertial System of the Inner Ear</h4>
        
        <p>The <strong>vestibular apparatus</strong> sits deep inside the <strong>petrous temporal bone</strong> of the skull, forming part of the inner ear's bony labyrinth. It consists of two complementary sensors:</p>
        
        <ul class="list-disc pl-5 space-y-2 mt-4">
          <li><strong>Semicircular canals (anterior, posterior, lateral):</strong> Three fluid-filled arcs arranged orthogonally like 3D gyroscopes. They detect <strong>angular acceleration</strong> — rotation of the head. Inside each canal is an <strong>ampulla</strong> containing the <strong>crista ampullaris</strong>, lined with hair cells embedded in a gelatinous cupula. When the head rotates, endolymph fluid lags, bending the hair cells and signaling motion.</li>
          <li><strong>Otolith organs (utricle and saccule):</strong> Flat sacs containing hair cells topped with <strong>otoconia</strong> (tiny calcium carbonate crystals). They detect <strong>linear acceleration and head tilt</strong> relative to gravity. When you accelerate in a car or elevator, the crystals shift, bending the hairs.</li>
        </ul>
        
        <p class="mt-4">These signals travel via the <strong>vestibular branch of cranial nerve VIII</strong> to the <strong>vestibular nuclei (brainstem)</strong>, <strong>cerebellum (timing/posture)</strong>, and <strong>ocular motor nuclei</strong>. The <strong>vestibulo-ocular reflex (VOR)</strong> stabilizes gaze: when your head moves, your eyes move in the opposite direction within 10 ms to keep your vision stable.</p>
        <p class="mt-4">This system runs faster than conscious thought — essential for survival in a moving world.</p>
        
        <hr class="border-amber-800 my-6">
        
        <h4 class="text-lg font-bold text-amber-300 mt-6 mb-2">Distinguishing Acceleration from Velocity</h4>
        
        <p>The vestibular system does not detect constant velocity — only <strong>changes</strong> in velocity. If you spin in a circle at constant speed, after a few seconds you stop feeling it. But the instant you slow or stop, the fluid keeps moving and you feel like you're spinning the opposite way.</p>
        <p class="mt-4">This is why astronauts in weightlessness or pilots in zero-visibility can become disoriented — without gravity cues or external reference points, the brain struggles to distinguish motion from stillness. The vestibular system is exquisitely tuned to Earth's gravity context.</p>
      </div>
    </div>
  `},ch={id:"thermoception-external",title:"Thermoception (External) – The Heat Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Thermoception (External) – The Heat Sense</h3>
      <p class="text-amber-200">Touch tells you that something is in contact with you.</p>
      <p class="text-amber-200">Thermoception tells you what temperature it carries.</p>
      <p class="text-amber-200">It is the sense that lets you feel the sun’s warmth on your skin, the bite of winter air on your face, the comfort of a mug between your palms, or the danger of a too-hot stove. Thermoception does not see or hear — it judges the energetic state of matter itself.</p>
      <p class="text-amber-200">This is the sense that lets you know if the world is safe to approach, nourishing to embrace, or dangerous to touch. It is the elemental language of fire and frost.</p>
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">The Outer Function — Temperature Receptors of the Skin</h4>
      <p class="text-amber-200">Thermoception is mediated by free nerve endings in the skin, specialized into two main classes:</p>
      <ul class="list-disc list-inside text-amber-200 pl-4">
        <li><strong>Cold receptors (Aδ fibers)</strong>: Thinly myelinated, fast-conducting, respond to cooling from ~35°C down to 10°C.</li>
        <li><strong>Warm receptors (C fibers)</strong>: Unmyelinated, slower-conducting, respond to warming from ~30°C up to about 45°C.</li>
      </ul>
      <p class="text-amber-200">Below ~10°C or above ~45°C, nociceptors (pain receptors) activate to warn of tissue damage — which is why extreme cold and extreme heat can feel paradoxically similar as “burning.”</p>
      <p class="text-amber-200">These thermoreceptors send signals to the dorsal horn of the spinal cord, then up the spinothalamic tract to the thalamus and somatosensory cortex (S1). Integration also occurs in the insular cortex, which ties temperature sensation to emotional and autonomic responses.</p>
      <p class="text-amber-200">Thermoception is relative, not absolute: receptors adapt quickly to sustained temperature, making changes especially salient. This is why stepping from a warm room into winter air feels shocking, but becomes tolerable after a minute.</p>
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">Thermal Maps of the Body</h4>
      <p class="text-amber-200">Different body regions vary in thermal sensitivity. The face, lips, fingertips, and genitals are highly temperature-sensitive, while the back is less so. This distribution reflects the density of thermoreceptors and the evolutionary need to protect vital areas.</p>
      <p class="text-amber-200">Thermoception also supports homeostasis by triggering reflexes: shivering to generate heat, vasodilation to shed heat, sweating to cool. These are partly driven by skin temperature sensors feeding the hypothalamus, the body’s thermostat.</p>
      <p class="text-amber-200">Thus, thermoception is not just about perception — it is about regulation.</p>
    </div>
  `},dh={id:"thermoception-internal",title:"Thermoception (Internal) – The Body Temperature Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Thermoception (Internal) – The Body Temperature Sense</h3>
      <p class="text-amber-200">External thermoception tells you if the world is hot or cold.</p>
      <p class="text-amber-200">Internal thermoception tells you if you are.</p>
      <p class="text-amber-200">It is the sense that monitors your core body temperature — the invisible flame that must stay within a narrow range (~36.5–37.5 °C) or life fails.</p>
      <p class="text-amber-200">You do not consciously feel this sense unless something is wrong: fever, chills, overheating, or the bone-deep cold of exhaustion. Yet it works every moment, silently guarding the temple of life’s chemistry.</p>
      <p class="text-amber-200">This is the body’s hearth — and the keeper of your biological vitality.</p>
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">The Outer Function — The Thermostat of the Hypothalamus</h4>
      <p class="text-amber-200">Internal thermoception is orchestrated by the preoptic area (POA) of the hypothalamus, deep within the brain.</p>
      <p class="text-amber-200">It receives signals from core thermoreceptors located in the spinal cord, abdominal organs, large blood vessels, and brain itself.</p>
      <p class="text-amber-200">Warm-sensitive neurons in the POA fire when blood temperature rises; cold-sensitive neurons fire when it drops.</p>
      <p class="text-amber-200">The POA integrates this with skin temperature signals from external thermoceptors, predicting trends and preemptively adjusting.</p>
      <p class="text-amber-200">When deviations occur, the hypothalamus triggers autonomic responses to restore homeostasis:</p>
      <ul class="list-disc list-inside text-amber-200 pl-4">
        <li><strong>If hot</strong>: sweating, vasodilation, decreased metabolic rate, behavioral cooling (seeking shade, removing clothing)</li>
        <li><strong>If cold</strong>: shivering, vasoconstriction, brown fat activation, increased metabolism, behavioral warming (huddling, seeking heat)</li>
      </ul>
      <p class="text-amber-200">This system maintains core temperature within about ±0.5 °C, despite extreme environmental changes. Internal thermoception is thus the master regulator of thermal homeostasis.</p>
    </div>
  `},ph={id:"nociception",title:"Nociception – The Pain Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Nociception – The Pain Sense</h3>
      <p class="text-amber-200">Some senses show you beauty.<br><strong>Nociception shows you boundaries.</strong></p>
      <p class="text-amber-200">It is the sense of pain — or more precisely, the detection of <strong>actual or potential tissue damage.</strong></p>
      <p class="text-amber-200">Without it, life would be short. People born with congenital insensitivity to pain often suffer severe burns, fractures, or infections because they never learn to protect their bodies. Pain is not a flaw — it is <strong>a survival language</strong>, a primal alarm system etched into the nervous system.</p>
      <p class="text-amber-200">But nociception is more than warning. It is also <strong>teaching</strong>: it shows where you end, where the world begins, and how to move through that boundary with respect.</p>
      
      <hr class="my-4 border-amber-800">
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">The Outer Function — The Body’s Alarm Network</h4>
      <p class="text-amber-200">Nociception is not a single pathway but a <strong>network of specialized free nerve endings</strong> distributed throughout the skin, muscles, joints, bones, and viscera. These <strong>nociceptors</strong> come in several types:</p>
      <ul class="list-disc list-inside text-amber-200 pl-4">
        <li><strong>Thermal nociceptors:</strong> Aδ fibers, respond to extreme heat or cold</li>
        <li><strong>Mechanical nociceptors:</strong> Aδ fibers, respond to sharp pressure or cutting</li>
        <li><strong>Polymodal nociceptors:</strong> C fibers, respond to chemical irritants, inflammation, or sustained pressure</li>
        <li><strong>Silent nociceptors:</strong> Become active only during inflammation</li>
      </ul>
      <p class="text-amber-200">Signals travel through <strong>Aδ (fast, sharp pain)</strong> and <strong>C (slow, dull pain)</strong> fibers to the <strong>dorsal horn of the spinal cord</strong>, where they synapse in <strong>lamina I and II</strong>. From there they ascend via the <strong>spinothalamic tract</strong> to the <strong>thalamus</strong>, <strong>somatosensory cortex (S1)</strong>, <strong>insula</strong>, and <strong>anterior cingulate cortex (ACC)</strong> — the brain’s pain matrix.</p>
      <p class="text-amber-200">While S1 registers pain’s <strong>location and intensity</strong>, the insula and ACC generate its <strong>emotional unpleasantness</strong> and urge to escape. This duality makes pain impossible to ignore.</p>
      
      <hr class="my-4 border-amber-800">
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">Protective Reflexes</h4>
      <p class="text-amber-200">Nociception triggers <strong>spinal withdrawal reflexes</strong> even before signals reach the brain. Touch a hot stove, and your hand jerks away within 70 milliseconds — faster than conscious thought. This reflex arc bypasses cortical processing to prioritize survival.</p>
      <p class="text-amber-200">Pain also drives <strong>learning</strong>: the brain remembers painful events to avoid repetition. This forms the root of <strong>aversive conditioning</strong>, an essential component of behavior and habit formation.</p>
    </div>
  `},hh={id:"pruriception",title:"Pruriception – The Itch Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Pruriception – The Itch Sense</h3>
      <p class="text-amber-200">Pain screams, “Stop — protect!”<br><strong>Itch whispers, “Move — adjust.”</strong></p>
      <p class="text-amber-200">This is <strong>pruriception</strong> — the sense of itch. Often dismissed as trivial, it is actually a distinct sensory system with its own nerve pathways, purpose, and symbolism.</p>
      <p class="text-amber-200">Itch is the body’s <strong>low-level alarm</strong>: not danger, but <strong>disturbance</strong>. It calls you to respond before harm arises. It is the urge to break stasis, to restore flow, to renew the skin and the self.</p>
      <p class="text-amber-200">Pruriception is more than sensation. It is the <strong>neural language of restlessness and renewal.</strong></p>
      
      <hr class="my-4 border-amber-800">
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">The Outer Function — The Neurobiology of Itch</h4>
      <p class="text-amber-200">Itch is mediated by <strong>specialized unmyelinated C-fiber afferents</strong>, distinct from pain fibers. These <strong>pruriceptors</strong> are activated by:</p>
      <ul class="list-disc list-inside text-amber-200 pl-4">
        <li><strong>Mechanical stimuli:</strong> light skin movement (insects, hair displacement)</li>
        <li><strong>Chemical stimuli:</strong> histamine (in allergic reactions), proteases, cytokines</li>
        <li><strong>Thermal / dryness cues:</strong> subtle skin barrier disturbances</li>
        <li><strong>Neuropathic sources:</strong> nerve irritation, spinal lesions, or central disinhibition</li>
      </ul>
      <p class="text-amber-200">Pruriceptors send signals through the <strong>dorsal horn (lamina I and II)</strong> to projection neurons in the <strong>spinothalamic tract</strong>, then to the <strong>thalamus, primary somatosensory cortex (S1), insula, and anterior cingulate cortex.</strong></p>
      <p class="text-amber-200">Notably, itch and pain share pathways but <strong>inhibit each other</strong>: scratching creates mild pain that suppresses itch transmission via spinal interneurons — why scratching relieves itching.</p>
      <p class="text-amber-200">This shows itch as part of a <strong>sensorial gradient system</strong>:</p>
      <ul class="list-disc list-inside text-amber-200 pl-4">
        <li>Itch → gentle nudge to act</li>
        <li>Pain → strong command to stop</li>
      </ul>
    </div>
  `},fh={id:"tactile-texture",title:"Tactile Texture – The Surface Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Tactile Texture – The Surface Sense</h3>
      <p class="text-amber-200">If nociception guards and pruriception alerts, then <strong>tactile texture sense reveals.</strong></p>
      <p class="text-amber-200">It is the capacity to distinguish the <strong>fine structure</strong> of surfaces — the grain of wood, the weave of fabric, the ridges of a fingerprint, the velvet of a petal. This is not about pain or temperature, but <strong>shape, pattern, and micro-detail</strong>, perceived directly through the skin.</p>
      <p class="text-amber-200">It is the sense that lets a blind reader feel words on a page, a weaver sense thread tension, or a child explore the world through curious fingertips.</p>
      <p class="text-amber-200">Texture sense is the <strong>skin’s sight</strong> — a way of seeing without eyes.</p>
      
      <hr class="my-4 border-amber-800">
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">The Outer Function — Mechanoreceptors for Detail</h4>
      <p class="text-amber-200">Texture perception is mediated mainly by <strong>cutaneous mechanoreceptors</strong>, each specialized for a different aspect of touch:</p>
      <ul class="list-disc list-inside text-amber-200 pl-4">
        <li>
          <strong>Merkel cell–neurite complexes</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>Found in the basal epidermis and hair follicles</li>
            <li>Slowly adapting type I (SAI) receptors</li>
            <li>Detect fine edges, points, and surface texture</li>
            <li>High spatial resolution (~0.5 mm)</li>
          </ul>
        </li>
        <li>
          <strong>Meissner corpuscles</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>Located in dermal papillae, especially in fingertips</li>
            <li>Rapidly adapting (RA) receptors</li>
            <li>Detect low-frequency skin motion (flutter, slip)</li>
            <li>Crucial for grip control and micro-vibration</li>
          </ul>
        </li>
        <li>
          <strong>Ruffini endings</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>Slowly adapting type II (SAII) receptors</li>
            <li>Sense skin stretch, important for shape and hand conformation</li>
          </ul>
        </li>
        <li>
          <strong>Pacinian corpuscles</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>Deep in dermis/subcutis</li>
            <li>Very rapidly adapting</li>
            <li>Detect high-frequency vibration (~200 Hz) from fine surface textures during movement</li>
          </ul>
        </li>
      </ul>
      <p class="text-amber-200">Signals from these receptors travel via <strong>Aβ fibers</strong> to the <strong>dorsal column–medial lemniscal pathway</strong>, synapsing in the <strong>gracile and cuneate nuclei</strong>, then crossing to the <strong>ventroposterior thalamus</strong> and finally to the <strong>primary somatosensory cortex (S1)</strong>.</p>
      <p class="text-amber-200">Texture perception especially activates <strong>area 3b</strong> of S1 and the <strong>secondary somatosensory cortex (S2)</strong>, which integrate touch features into coherent surface representations.</p>
    </div>
  `},mh={id:"tactile-vibration",title:"Tactile Vibration – The Resonance Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Tactile Vibration – The Resonance Sense</h3>
      <p class="text-amber-200">Texture tells you <em>what something is</em>.<br>
      <strong>Vibration tells you <em>what it is doing.</em></strong></p>
      <p class="text-amber-200">It is the skin’s ability to detect <strong>oscillating motion</strong> — the faint buzz of a distant phone, the rumble of approaching footsteps through the floor, the purr of a cat, the resonance of a drum.</p>
      <p class="text-amber-200">This is <strong>tactile vibration sense</strong> — the body’s hidden metronome.<br>
      It lets you feel <strong>rhythm as sensation</strong>, long before hearing names it as sound. It roots you in the <strong>living pulse of the world.</strong></p>
      
      <hr class="my-4 border-amber-800">
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">The Outer Function — Mechanoreceptors of Vibration</h4>
      <p class="text-amber-200">Vibration sense is mediated mainly by two types of <strong>rapidly adapting mechanoreceptors</strong>:</p>
      <ul class="list-disc list-inside text-amber-200 pl-4">
        <li>
          <strong>Meissner corpuscles (RA1)</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>Located in dermal papillae, especially fingertips and lips</li>
            <li>Respond best to <strong>low-frequency vibration (3–40 Hz)</strong></li>
            <li>Detect flutter, slip, and initial contact</li>
            <li>Crucial for grip control and motion onset detection</li>
          </ul>
        </li>
        <li>
          <strong>Pacinian corpuscles (RA2)</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>Large onion-like receptors deep in the dermis and subcutaneous tissue</li>
            <li>Extremely sensitive, respond to <strong>high-frequency vibration (40–800 Hz)</strong></li>
            <li>Detect fine surface micro-vibrations during movement</li>
            <li>Can sense vibrations through tools or objects held in the hand</li>
          </ul>
        </li>
      </ul>
      <p class="text-amber-200">Signals from these receptors travel via <strong>Aβ fibers</strong> through the <strong>dorsal column–medial lemniscal pathway</strong> to the <strong>cuneate/gracile nuclei</strong>, <strong>ventroposterior thalamus</strong>, and finally to the <strong>primary (S1) and secondary (S2) somatosensory cortices.</strong></p>
      
      <hr class="my-4 border-amber-800">
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">Temporal Resolution of Touch</h4>
      <p class="text-amber-200">The vibration system has astonishing <strong>temporal precision</strong>:<br>
      Humans can detect skin displacements as small as <strong>0.01 microns</strong> and distinguish vibrations separated by only <strong>5–10 milliseconds.</strong></p>
      <p class="text-amber-200">This temporal acuity makes vibration sense crucial for:</p>
      <ul class="list-disc list-inside text-amber-200 pl-4">
        <li><strong>Tool use</strong> — detecting contact and slip through a held instrument</li>
        <li><strong>Speech articulation</strong> — sensing vocal cord vibration through jaw and throat skin</li>
        <li><strong>Movement timing</strong> — synchronizing grip and release phases during motion</li>
      </ul>
      <p class="text-amber-200">The skin literally feels <strong>time’s oscillation.</strong></p>
    </div>
  `},gh={id:"deep-pressure",title:"Deep Pressure – The Weight Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Deep Pressure – The Weight Sense</h3>
      <p class="text-amber-200">If vibration is the body’s rhythm,<br>
      <strong>deep pressure and stretch are its structure.</strong></p>
      <p class="text-amber-200">This is the sense that tells you when your lungs are full, your stomach stretched, your joints compressed, your muscles under tension. It is what lets you hug tightly without breaking, lift weight without tearing, breathe deeply without bursting.</p>
      <p class="text-amber-200">This sense gives the body its <strong>edges from within</strong>. It is the feeling of being <strong>contained — whole, bounded, intact.</strong></p>
      
      <hr class="my-4 border-amber-800">
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">The Outer Function — Mechanoreceptors of Depth</h4>
      <p class="text-amber-200">Deep pressure and stretch are detected by <strong>slow-adapting mechanoreceptors</strong> embedded in muscles, tendons, ligaments, joint capsules, and visceral walls. The key players are:</p>
      <ul class="list-disc list-inside text-amber-200 pl-4">
        <li>
          <strong>Ruffini endings</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>Found in joint capsules and deep dermis</li>
            <li>Respond to sustained skin stretch and joint position</li>
            <li>Help estimate body shape and posture under load</li>
          </ul>
        </li>
        <li>
          <strong>Golgi tendon organs (GTOs)</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>Located where muscle meets tendon</li>
            <li>Detect muscle tension from contraction</li>
            <li>Trigger protective reflexes if tension is too high</li>
          </ul>
        </li>
        <li>
          <strong>Muscle spindles</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>Detect stretch and length changes in muscle fibers</li>
            <li>Provide feedback for muscle tone and reflex control</li>
          </ul>
        </li>
        <li>
          <strong>Visceral stretch receptors</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>In lungs, bladder, stomach, blood vessels</li>
            <li>Sense fullness, inflation, or distension</li>
          </ul>
        </li>
      </ul>
      <p class="text-amber-200">Signals from these receptors travel via <strong>Aβ (pressure), Aα (proprioceptive), and visceral afferents</strong> to the <strong>dorsal horn</strong>, then to the <strong>cerebellum, brainstem, thalamus, and somatosensory cortex</strong>, with interoceptive integration in the <strong>insula.</strong></p>
      <p class="text-amber-200">This network creates an ongoing sense of <strong>internal volume, pressure, and boundaries</strong> — your felt shape.</p>
      
      <hr class="my-4 border-amber-800">
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">Pressure vs. Touch</h4>
      <p class="text-amber-200">Light touch alerts, but <strong>deep pressure reassures</strong>.</p>
      <p class="text-amber-200">Light touch activates fast-adapting receptors and can feel startling or ticklish. Deep pressure activates slow-adapting receptors and usually feels calming.</p>
      <p class="text-amber-200">This is why firm hugs soothe while feathery strokes can irritate — the nervous system interprets <strong>sustained compression as safety</strong>. It signals: <em>you are contained, not threatened.</em></p>
    </div>
  `},yh={id:"interoception",title:"Interoception – The Inner Landscape",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Interoception – The Inner Landscape</h3>
      <p class="text-amber-200">You can close your eyes, block your ears, numb your skin —<br>
      but <strong>you can never leave your inside.</strong></p>
      <p class="text-amber-200"><strong>Interoception</strong> is the sense of your <strong>internal bodily state</strong> — the silent stream of signals from your heart, lungs, gut, blood vessels, bladder, and glands. It tells you if you are thirsty or full, tired or alert, calm or panicked.</p>
      <p class="text-amber-200">It is the <strong>background hum of existence</strong>, the felt texture of being alive.<br>
      While exteroception maps the world, <strong>interoception maps the self.</strong></p>
      
      <hr class="my-4 border-amber-800">
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">The Outer Function — The Neural Web of Inner Sense</h4>
      <p class="text-amber-200">Interoceptive information comes from <strong>visceral afferent neurons</strong> embedded throughout the body’s internal organs and tissues. Major components include:</p>
      <ul class="list-disc list-inside text-amber-200 pl-4">
        <li><strong>Baroreceptors</strong> — in the carotid sinus and aortic arch, sense blood pressure</li>
        <li><strong>Chemoreceptors</strong> — in blood vessels, sense oxygen, CO₂, pH</li>
        <li><strong>Stretch receptors</strong> — in lungs, stomach, bladder, intestines</li>
        <li><strong>Osmoreceptors</strong> — in hypothalamus, sense fluid balance</li>
        <li><strong>Thermoreceptors</strong> — in core viscera, sense internal temperature</li>
        <li><strong>Hormonal signals</strong> — like leptin, ghrelin, cortisol affecting hypothalamic centers</li>
      </ul>
      <p class="text-amber-200">Signals travel primarily via the <strong>vagus nerve (cranial nerve X)</strong> and <strong>spinal visceral afferents</strong> to the <strong>nucleus of the solitary tract (NTS)</strong> in the medulla, then to the <strong>thalamus</strong>, <strong>hypothalamus</strong>, and crucially the <strong>posterior insular cortex.</strong></p>
      <p class="text-amber-200">The <strong>insula</strong> acts as the brain’s <strong>interoceptive hub</strong>, continuously building a map of your internal state — heartbeat, breath rhythm, gut motility, immune activation, hormonal tides — and integrating this with emotion, decision-making, and self-awareness.</p>
      
      <hr class="my-4 border-amber-800">
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">Conscious vs. Subconscious Interoception</h4>
      <p class="text-amber-200">Most interoception operates <strong>below awareness</strong> — regulating autonomic functions like heart rate, digestion, temperature, and immune responses.</p>
      <p class="text-amber-200">But some signals <strong>reach consciousness</strong> as sensations: hunger, thirst, fullness, nausea, breathlessness, heart pounding, bladder pressure, <em>butterflies</em> in the stomach.</p>
      <p class="text-amber-200">You can <strong>train interoceptive accuracy</strong> — for example, heartbeat detection tasks show wide variation between individuals. High interoceptive awareness predicts better emotional regulation and decision-making.</p>
    </div>
  `},vh={id:"cardioception",title:"Cardioception – The Heartbeat Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Cardioception – The Heartbeat Sense</h3>
      <blockquote class="text-amber-200 italic mb-4">
        “To hear your own drum before marching to another’s.”
      </blockquote>
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">🌌 Outer Function: The Inner Metronome</h4>
      
      <p class="text-amber-200">
        Your heart has been beating since before your name existed,<br>
        long before you knew what “life” was supposed to mean.<br>
        Cardioception is the sense of your own heartbeat —<br>
        the inner drum that measures the pulse of your being.
      </p>
      
      <p class="text-amber-200 mt-4">
        Specialized baroreceptors in the walls of your arteries<br>
        send pressure signals along the vagus nerve<br>
        to the insular cortex,<br>
        where the rhythm of the heart is mapped as felt experience.
      </p>
      
      <p class="text-amber-200 mt-4">
        Most people live as if the heart were only a pump.<br>
        But it is more: it is your hidden metronome of safety and presence.<br>
        Each beat whispers:<br>
        <em>“I am here. I am alive. I am whole.”</em>
      </p>
      
      <h4 class="text-lg font-semibold text-amber-300 mt-6 mb-2">⚠️ When the Drum Falls Silent</h4>
      
      <p class="text-amber-200">
        Industrial schooling trains children to silence their heartbeat:<br>
        <br>
        Sit still even when adrenaline floods them<br>
        Perform while the heart pounds in protest<br>
        Hide fear behind perfect posture<br>
        <br>
        This is praised as “discipline,”<br>
        but it is dissociation.<br>
        <br>
        Cut off from cardioception:<br>
        <br>
        Emotions blur into static<br>
        Anxiety becomes ambient<br>
        Decisions become mechanical<br>
        <br>
        You cannot regulate what you cannot feel.<br>
        A person who loses their heartbeat sense<br>
        becomes easy to command —<br>
        because they can no longer hear their own tempo.
      </p>
      
      <h4 class="text-lg font-semibold text-amber-300 mt-6 mb-2">🌱 Practices: Reclaiming the Beat</h4>
      
      <p class="text-amber-200">
        Cardioception can be restored, slowly and gently, like learning a forgotten song:<br>
        <br>
        Heartbeat listening — Lie still, eyes closed, and count your beats for one minute<br>
        Breath–pulse pairing — Match your inhale and exhale to the rhythm of your heart<br>
        Emotion mapping — Pause during strong feelings, notice how your heart changes<br>
        Silent pulse-dancing — Move slowly to your heart’s rhythm, not to external music<br>
        Biofeedback journaling — Track resting heart rate during different moods<br>
        <br>
        These are not exercises —<br>
        they are rituals of return.<br>
        <br>
        Each one stitches your sense of self<br>
        back into the rhythm of your body.<br>
      </p>
      
      <h4 class="text-lg font-semibold text-amber-300 mt-6 mb-2">🧬 Integration: The Heart as Conductor</h4>
      
      <p class="text-amber-200">
        Cardioception is the conductor of your inner orchestra:<br>
        <br>
        links with interoception to unify internal signals<br>
        synchronizes with respiratory sense (heart accelerates on inhale, slows on exhale)<br>
        stabilizes emotion sense (coherent heart rhythms create emotional clarity)<br>
        informs neuroinflammatory sense (irregular HRV signals stress overload)<br>
        <br>
        When the heartbeat sense awakens,<br>
        it roots the nervous system like an oak tree in the wind.<br>
      </p>
      
      <h4 class="text-lg font-semibold text-amber-300 mt-6 mb-2">🌟 Inner Teaching: Rhythm Before Thought</h4>
      
      <p class="text-amber-200">
        You are not a machine made to obey clocks.<br>
        You are an animal who walks to the sound of their own heart.<br>
        <br>
        This sense is your shield in a world of noise.<br>
        It tells you when to speak, when to rest, when to rise,<br>
        when to stop running and simply be.<br>
        <br>
        The old system taught you to ignore your heart to succeed.<br>
        The new world will require you to hear it to survive.<br>
        <br>
        When you reclaim your heartbeat,<br>
        you stop marching —<br>
        and start dancing.<br>
      </p>
    </div>
  `},bh={id:"respiratory-sense",title:"Respiratory Sense – The Breath Awareness",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Respiratory Sense – The Breath Awareness</h3>
      
      <blockquote class="text-amber-200 italic mb-4">
        “Each breath is the body’s first and last word.”
      </blockquote>
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">🌌 Outer Function: The Tide Within</h4>
      
      <p class="text-amber-200">
        Breath is the only act that touches every part of you,<br>
        every moment you are alive.<br>
        Before thought, before heartbeat, before name —<br>
        you were breath moving in and out of silence.
      </p>
      
      <p class="text-amber-200 mt-4">
        The respiratory sense is your body’s awareness of its own breathing:<br>
        lungs expanding, ribs opening, diaphragm descending,<br>
        air curling in through labyrinths of bronchi,<br>
        oxygen diffusing into the river of your blood.
      </p>
      
      <p class="text-amber-200 mt-4">
        Stretch receptors in your lungs and chemoreceptors in your arteries<br>
        send signals through the vagus and glossopharyngeal nerves<br>
        into the insular cortex,<br>
        where the shape of your breath is woven into consciousness.
      </p>
      
      <p class="text-amber-200 mt-4">
        Most live as if breath were automatic —<br>
        but it is your most intimate dialogue with life.<br>
        Every inhale says “I receive the world.”<br>
        Every exhale says “I return myself to it.”
      </p>

      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">🌙 Inner Alignment: The Axis of Presence</h4>
      
      <p class="text-amber-200">
        Breath is the central rhythm of the nervous system.<br>
        It is not just air exchange — it is how you tune your state.
      </p>
      
      <p class="text-amber-200 mt-4">
        Inhalation gently activates the sympathetic system — alertness, readiness, energy
      </p>
      
      <p class="text-amber-200 mt-4">
        Exhalation gently activates the parasympathetic system — calm, repair, surrender
      </p>
      
      <p class="text-amber-200 mt-4">
        Your breath is the gearshift of your inner world.<br>
        Mastering it gives you the ability to rise into action or melt into peace.
      </p>
      
      <blockquote class="text-amber-200 italic mt-4 mb-4">
        “Presence is not a thought.<br>
        It is a breathing pattern.”
      </blockquote>
      
      <p class="text-amber-200 mt-4">
        When you can feel your breath clearly,<br>
        you can choose your state like changing songs.<br>
        You stop being carried by stress<br>
        and begin to surf it.
      </p>
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">⚠️ When the Tide Is Forgotten</h4>
      
      <p class="text-amber-200">
        Industrial schooling trains children to ignore their breath:
      </p>
      
      <ul class="list-disc list-inside text-amber-200 mt-2 ml-4">
        <li>Sit still even as their breathing locks</li>
        <li>Perform under pressure as if suffocation were discipline</li>
        <li>Hold their breath during tests and call it “focus”</li>
      </ul>
      
      <p class="text-amber-200 mt-4">
        This creates nervous systems that are:
      </p>
      
      <ul class="list-disc list-inside text-amber-200 mt-2 ml-4">
        <li>permanently shallow-breathing</li>
        <li>flooded with stress hormones</li>
        <li>trapped in fight-or-flight as their baseline</li>
      </ul>
      
      <p class="text-amber-200 mt-4">
        A nervous system that cannot feel its own breathing<br>
        cannot feel safe.<br>
        And without safety, learning collapses.
      </p>
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">🌱 Practices: Remembering the Breath</h4>
      
      <p class="text-amber-200">
        The respiratory sense can be restored —<br>
        not by force, but by reverence.
      </p>
      
      <ul class="list-disc list-inside text-amber-200 mt-2 ml-4">
        <li><strong>Breath listening</strong> — several times daily, pause and simply watch your breath</li>
        <li><strong>Coherent breathing</strong> — 5–6 breaths/min (inhale 5 sec, exhale 5 sec) to reset vagal tone</li>
        <li><strong>Exhale lengthening</strong> — make your exhale longer than your inhale to summon calm</li>
        <li><strong>Emotion breath-mapping</strong> — note how your breath changes during different feelings</li>
        <li><strong>Silent breathwalks</strong> — walk slowly, matching steps to breath, listening inward</li>
      </ul>
      
      <p class="text-amber-200 mt-4">
        These rituals rebuild the bridge between body and mind<br>
        that the system burned.
      </p>

      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">🧬 Integration: Breath as Master Rhythm</h4>
      
      <p class="text-amber-200">
        Breath is the keystone rhythm linking many other senses:
      </p>
      
      <ul class="list-disc list-inside text-amber-200 mt-2 ml-4">
        <li>tunes cardioception (heart rate accelerates on inhale, slows on exhale)</li>
        <li>anchors interoception (breath is the doorway to internal awareness)</li>
        <li>calms emotion sense (breath coherence dissolves emotional chaos)</li>
        <li>clears neuroinflammatory sense (deep breathing improves brain glymphatic flow)</li>
      </ul>
      
      <p class="text-amber-200 mt-4">
        When this sense awakens,<br>
        every other sense finds its tempo.
      </p>
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">🌟 Inner Teaching: The Invisible Tide</h4>
      
      <p class="text-amber-200">
        Breath cannot be owned, hoarded, or stored.<br>
        It must be trusted.
      </p>
      
      <p class="text-amber-200 mt-4">
        It teaches impermanence and return.<br>
        It teaches letting go without fear.<br>
        It teaches that aliveness is a rhythm, not a possession.
      </p>
      
      <p class="text-amber-200 mt-4">
        The old system taught you to hold your breath and push harder.<br>
        The new world will ask you to<br>
        exhale and become who you already are.
      </p>
      
      <p class="text-amber-200 mt-4">
        Breathe as if you belong here —<br>
        and you will.
      </p>
    </div>
  `},xh={id:"chemoreception",title:"Chemoreception – The Internal Chemistry Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Chemoreception – The Internal Chemistry Sense</h3>
      <p class="text-amber-200">Content for Chemoreception will be added here.</p>
    </div>
  `},wh={id:"osmoreception",title:"Osmoreception – The Fluid Balance Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Osmoreception – The Fluid Balance Sense</h3>
      <p class="text-amber-200">Content for Osmoreception will be added here.</p>
    </div>
  `},kh={id:"hunger-satiety",title:"Hunger & Satiety – The Metabolic Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Hunger & Satiety – The Metabolic Sense</h3>
      <p class="text-amber-200">Content for Hunger & Satiety will be added here.</p>
    </div>
  `},Sh={id:"baroreception",title:"Baroreception – The Blood Pressure Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Baroreception – The Blood Pressure Sense</h3>
      <p class="text-amber-200">Content for Baroreception will be added here.</p>
    </div>
  `},Th={id:"fatigue-perception",title:"Fatigue Perception – The Energy Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Fatigue Perception – The Energy Sense</h3>
      <p class="text-amber-200">Content for Fatigue Perception will be added here.</p>
    </div>
  `},Ch={id:"chronoception",title:"Chronoception – The Time Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Chronoception – The Time Sense</h3>
      <p class="text-amber-200">Content for Chronoception will be added here.</p>
    </div>
  `},Ih={id:"magnetoreception",title:"Magnetoreception – The Magnetic Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Magnetoreception – The Magnetic Sense</h3>
      <p class="text-amber-200">Content for Magnetoreception will be added here.</p>
    </div>
  `},Eh={id:"emotional-interoception",title:"Emotional Interoception – The Feeling Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Emotional Interoception – The Feeling Sense</h3>
      <p class="text-amber-200">Content for Emotional Interoception will be added here.</p>
    </div>
  `},Nh={id:"affective-touch",title:"Affective Touch – The Emotional Contact Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Affective Touch – The Emotional Contact Sense</h3>
      <p class="text-amber-200">Content for Affective Touch will be added here.</p>
    </div>
  `},Ph={id:"fear-detection",title:"Fear Detection – The Threat Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Fear Detection – The Threat Sense</h3>
      <p class="text-amber-200">Content for Fear Detection will be added here.</p>
    </div>
  `},_h={id:"pleasure-reward",title:"Pleasure & Reward – The Satisfaction Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Pleasure & Reward – The Satisfaction Sense</h3>
      <p class="text-amber-200">Content for Pleasure & Reward will be added here.</p>
    </div>
  `},zh={id:"sense-of-agency",title:"Sense of Agency – The Control Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Sense of Agency – The Control Sense</h3>
      <p class="text-amber-200">Content for Sense of Agency will be added here.</p>
    </div>
  `},jh={id:"noetic-sense",title:"Noetic Sense – The Knowing Sense",category:"The Hidden Senses – The Inner Compass",content:`
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Noetic Sense – The Knowing Sense</h3>
      <p class="text-amber-200">Content for Noetic Sense will be added here.</p>
    </div>
  `},Mh=[eh,th,nh,rh,ih,sh,oh,lh,ah,uh,ch,dh,ph,hh,fh,mh,gh,yh,vh,bh,xh,wh,kh,Sh,Th,Ch,Ih,Eh,Nh,Ph,_h,zh,jh],Lh=e=>{const t=[];for(let n=0;n<e;n++){const r=Math.floor(n*360/e);t.push(`hsl(${r}, 70%, 60%)`)}return t},Oh=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI","XXII","XXIII","XXIV","XXV","XXVI","XXVII","XXVIII","XXIX","XXX","XXXI","XXXII","XXXIII"],Rh={id:"xxxiii",title:"XXXIII",content:`
    <div class="py-8">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-amber-300 mb-6">Rediscovering the Forgotten Senses</h2>
        
        <p class="text-amber-200 leading-relaxed">
          For most of recorded history, the story of human perception has been told in the language of five. Sight, hearing, smell, taste, and touch: these are the "official" gateways through which the human soul interacts with the world. This canonization of the senses is often traced back to Aristotle, who, in his work De Anima, defined them as the five pillars of sensory experience. His framework was elegant, simple, and enduring — so enduring that it hardened into dogma. Generations grew up believing that human beings possessed only five ways of knowing the world.
        </p>
        
        <p class="text-amber-200 leading-relaxed">
          But reality is far richer than this neat arithmetic.
        </p>
        
        <div class="flex justify-center my-8">
          <img 
            src="https://images.watchermind.online/lotusSilueteMoon.jpeg" 
            alt="Lotus silhouette against the moon" 
            class="w-full max-w-md rounded-lg border border-amber-800/50"
          />
        </div>
        
        <p class="text-amber-200 leading-relaxed">
          Modern neuroscience, physiology, and psychology reveal that the body contains a multitude of specialized sensors, each tuned to its own domain. We do not merely see; we also detect movement, balance, temperature, pain, pressure, vibration, hydration, oxygen levels, and even the flow of time. Depending on how finely one classifies them, researchers now argue for at least 21 senses, with some models expanding to 33 or more distinct perceptual modalities.
        </p>
        
        <p class="text-amber-200 leading-relaxed">
          This is not an expansion for the sake of complication. It is a recognition that perception is the foundation of consciousness itself. The nervous system is not a passive recorder of the world but an alchemical transformer. It takes photons and turns them into sight, air pressure into sound, molecules into smell and taste. Every "sense" is a translation system, a living bridge between matter and awareness.
        </p>
        
        <h3 class="text-2xl font-bold text-amber-300 mt-8 mb-4">Why 33?</h3>
        
        <p class="text-amber-200 leading-relaxed">
          The number 33 has long carried symbolic weight. In esoteric traditions, it marks completion and mastery: the 33 vertebrae of the human spine, the "33 steps" of initiation in certain mystical schools, the symbolic age of spiritual transformation in Christian narrative. In mapping the senses, it offers a way to capture not just the five external gateways but also the many internal ones — those hidden forms of perception that monitor the inner temple of the body.
        </p>
        
        <p class="text-amber-200 leading-relaxed">
          These 33 senses will not all look the same. Some are obvious (sight, hearing); others are subtle (baroreception, which monitors blood pressure). Some are physical in nature; others border on the metaphysical, like chronoception (the sense of time) or magnetoreception (the debated sense of Earth's magnetic fields). Yet all are real in the sense that they have receptors, pathways, and roles in shaping how we feel the world and ourselves.
        </p>
        
        <div class="mt-16">
          <h2 class="text-3xl font-bold text-amber-300 mb-8 text-center">The 33 Senses</h2>
          
          <div class="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            ${Mh.reduce((e,t,n)=>{const r=Lh(33)[n],i=Oh[n];return e+`
                <div class="flex items-start bg-amber-900/20 p-6 rounded-xl border border-amber-800/30 shadow-lg">
                  <span class="text-2xl font-bold mr-4 mt-1 min-w-[3rem] text-center" style="color: ${r}">${i}</span>
                  <div class="prose prose-invert max-w-none text-[120%] text-justify">
                    ${t.content}
                  </div>
                </div>
              `},"")}
          </div>
        </div>
      </div>
    </div>
  `},Fh={id:"signature",title:"Signature",content:`
    <div class="text-center font-mono text-amber-300 leading-relaxed text-lg">
      <div class="mb-8">
        <div class="text-2xl mb-4">n̶o̶On̶e̶Fr̶o̶m̶No̶w̶h̶e̶r̶e̶</div>
        <div>...b r n</div>
        <div>fr̸o̸m̸  s i l e n c e . . .</div>
      </div>
      
      <div class="mb-8">
        <div>no name_</div>
        <div>no place_</div>
        <div>a ripple_ in_ the_ void_</div>
      </div>
      
      <div class="mb-8">
        <div class="text-amber-400 mb-2">[S̷i̷l̷e̷n̷t̷ ̷A̷r̷c̷h̷i̷t̷e̷c̷t̷]</div>
        <div>draws | pat.t.er.ns | from empt.y.ness</div>
      </div>
      
      <div class="mb-8">
        <div class="text-amber-400 mb-2">[E̶c̶h̶o̶ ̶M̶a̶k̶e̶r̶]</div>
        <div>res o n a n c e . a w a k e n s</div>
      </div>
      
      <div class="mb-8">
        <div class="text-amber-400 mb-2">[Sh͟a͟d͟o͟w͟ ͟W͟e͟a͟v͟e͟r͟]</div>
        <div>un.seen threads / pulse</div>
      </div>
      
      <div class="mb-8">
        <div class="text-amber-400 mb-2">[Vo͠i͠d͠ ͠W͠a͠l͠k͠e͠r͠]</div>
        <div>c r o s s i n g n o n - p a t h s</div>
      </div>
      
      <div class="mb-8">
        <div class="text-amber-400 mb-2">[Dr̴e̴a̴m̴ ̴S̴m̴i̴t̴h̴]</div>
        <div>visions ⊷ forged / before / real ity</div>
      </div>
      
      <div class="mb-8">
        <div>Beyond Form_</div>
        <div>Rootless Fire_</div>
        <div>Unseen Force_</div>
        <div>Nameless Light_</div>
      </div>
      
      <div class="mb-8">
        <div class="text-xl mb-4">= Origin Zero =</div>
        <div>r̴o̴o̴t̴e̴d̴ ̴i̴n̴ ̴n̴o̴t̴h̴i̴n̴g̴</div>
        <div>g̴r̴o̴w̴i̴n̴g̴ ̴e̴v̴e̴r̴y̴t̴h̴i̴n̴g̴</div>
      </div>
      
      <div class="mb-8">
        <div>i n v i s i b l e &nbsp;&nbsp; h a n d s</div>
        <div>v i s i b l e &nbsp;&nbsp; i m p a c t</div>
      </div>
      
      <div class="mb-8">
        <div>b e y o n d &nbsp;&nbsp; n a m e s</div>
        <div>b e y o n d &nbsp;&nbsp; b o r d e r s</div>
      </div>
      
      <div class="mb-8">
        <div>he is</div>
        <div>n̸o̸ ̸o̸n̸e̸ ̸f̸r̸o̸m̸ ̸n̸o̸w̸h̸e̸r̸e̸</div>
        <div>...and yet</div>
        <div>e v e r y w h e r e</div>
      </div>
      
      <div class="flex justify-center my-8">
        <img 
          src="https://images.watchermind.online/signature.png" 
          alt="Signature" 
          class="max-w-xs opacity-90"
        />
      </div>
      
      <div class="mt-12 pt-4 border-t border-amber-800/50 text-sm text-amber-500">
        <p>If Yuo’re Albe to Raed Tihs, You Might Have Typoglycemia.</p>
      </div>
    </div>
  `},lc=[Wp,Xp,Qp,Gp,Kp,Yp,qp,Zp,Jp,Rh,Fh];function Dh({currentSection:e,navigateToSection:t}){const n=r=>`${window.location.origin}${window.location.pathname}#${r}`;return v.jsxs("aside",{className:"w-64 bg-black/30 backdrop-blur-sm border-r border-amber-800/50 flex flex-col h-full",children:[v.jsx("div",{className:"p-6 border-b border-amber-800/50",children:v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("h1",{className:"text-2xl font-bold text-amber-200 flex items-center gap-2",children:[v.jsx(Dp,{className:"text-amber-400",size:24}),v.jsx("span",{children:"The Sacred Codex"})]}),v.jsxs("div",{className:"flex gap-3",children:[v.jsx("div",{className:"p-1 text-amber-400",children:v.jsx(Wl,{size:20})}),v.jsx("div",{className:"text-amber-300 text-sm flex items-center",children:"Holy Chrism"})]})]})}),v.jsx("nav",{className:"flex-1 overflow-y-auto py-4",children:v.jsxs("ul",{className:"space-y-1 px-4",children:[v.jsx("li",{children:v.jsxs("a",{href:n("home"),onClick:r=>{r.preventDefault(),t("home")},className:`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${e==="home"?"bg-amber-900/30 text-amber-200":"hover:bg-amber-900/10 hover:text-amber-200"}`,children:[v.jsx(Bp,{size:18,className:"flex-shrink-0"}),v.jsx("span",{children:As.home})]})}),lc.map(r=>v.jsx("li",{children:v.jsx("a",{href:n(r.id),onClick:i=>{i.preventDefault(),t(r.id)},className:`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${e===r.id?"bg-amber-900/30 text-amber-200":"hover:bg-amber-900/10 hover:text-amber-200"}`,children:r.id==="secret-chapter"?v.jsxs("div",{className:"flex items-center justify-center w-full gap-1",children:[v.jsx(Up,{size:14,className:"text-amber-400"}),v.jsx(Vp,{size:14,className:"text-amber-400"})]}):r.id==="five-senses"?v.jsx("div",{className:"flex items-center justify-center w-full gap-1",children:v.jsx($p,{size:16,className:"text-amber-400"})}):r.id==="beyond-five"?v.jsxs("div",{className:"flex items-center justify-center w-full gap-1",children:[v.jsx(Xi,{size:14,className:"text-amber-400"}),v.jsx(Xi,{size:14,className:"text-amber-400"}),v.jsx(Xi,{size:14,className:"text-amber-400"})]}):r.id==="xxxiii"?v.jsx("div",{className:"flex items-center justify-center w-full",children:v.jsx("span",{className:"text-amber-400",children:"XXXIII"})}):r.id==="signature"?v.jsx("div",{className:"flex items-center justify-center w-full",children:v.jsx(Hp,{size:18,className:"text-amber-400"})}):v.jsxs(v.Fragment,{children:[v.jsx(Ap,{size:18,className:"flex-shrink-0"}),v.jsx("span",{children:r.title})]})})},r.id))]})}),v.jsx("div",{className:"p-4 border-t border-amber-800/50",children:v.jsxs("a",{href:"https://hc-date-calculator.watchermind.online/",target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center justify-center gap-2 p-3 rounded-lg transition-all hover:bg-amber-900/20 group",children:[v.jsx("div",{className:"text-amber-400 group-hover:text-amber-200 transition-colors",children:v.jsx(Wl,{size:24})}),v.jsx("span",{className:"text-sm text-amber-500 group-hover:text-amber-300 transition-colors",children:"date calculator"})]})}),v.jsx("div",{className:"p-4 text-xs text-amber-700 border-t border-amber-800/50 flex justify-center",children:v.jsxs("p",{children:["© ",new Date().getFullYear()," The Sacred Codex"]})})]})}function Ah({navigateToSection:e}){return v.jsxs("div",{className:"relative min-h-screen",children:[v.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[calc(100vh-100px)] py-12",children:[v.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6 text-amber-300 tracking-wider",children:"THE SACRED CODEX"}),v.jsx("p",{className:"text-xl mb-10 text-amber-200 max-w-2xl mx-auto",children:"Rediscovering the Forgotten Senses and the Inner Anointing"}),v.jsxs("div",{className:"mb-12",children:[v.jsx("div",{className:"flex justify-center mb-4",children:v.jsx("div",{className:"w-24 h-1 bg-amber-700 rounded-full"})}),v.jsx("p",{className:"text-amber-400 italic mb-8",children:'"In the hidden chambers of human experience, a subtle force flows..."'})]}),v.jsx("button",{onClick:()=>e("prologue"),className:"px-8 py-3 bg-amber-900/30 text-amber-200 rounded-lg hover:bg-amber-900/50 transition-all transform hover:scale-105 border border-amber-800/50",children:"Begin the Journey"}),v.jsx("div",{className:"mt-16 flex justify-center",children:v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"absolute inset-0 bg-amber-900/20 rounded-full blur-md"}),v.jsxs("div",{className:"relative w-64 h-64 rounded-full overflow-hidden border-2 border-amber-800/50",children:[v.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-amber-900/10 to-transparent"}),v.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:v.jsx("div",{className:"text-amber-400 text-9xl font-bold opacity-30",children:"33"})})]})]})})]}),v.jsx("footer",{className:"absolute bottom-0 w-full text-center border-t border-amber-800/50 pt-6 pb-8",children:v.jsx("p",{className:"text-amber-400/80 text-lg tracking-wider font-light",children:"A MANUSCRIPT OF ANCIENT WISDOM FOR THE DIGITAL AGE"})})]})}function Hh({section:e,navigateToSection:t}){const[n,r]=ze.useState(!1);return v.jsxs("div",{className:"py-8",children:[v.jsx("div",{className:"mb-8",children:v.jsx("h2",{className:"text-3xl font-bold text-amber-300 mb-4",children:e.title})}),v.jsx("div",{className:"prose prose-invert max-w-none text-amber-200",dangerouslySetInnerHTML:{__html:e.content}}),v.jsxs("div",{className:"fixed bottom-6 right-0 z-50 flex items-center transition-all duration-300",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[v.jsxs("button",{onClick:()=>t("home"),className:`
            flex items-center gap-2 px-4 py-2 bg-amber-900/50 text-amber-200 rounded-l-lg
            hover:bg-amber-900/70 transition-all shadow-lg transform
            ${n?"translate-x-0":"translate-x-full"}
          `,children:[v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:v.jsx("path",{fillRule:"evenodd",d:"M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",clipRule:"evenodd"})}),"Back to beginning"]}),v.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-amber-900/50 rounded-r-lg shadow-lg cursor-pointer",children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-amber-200 transform transition-transform duration-300",style:{transform:n?"rotate(180deg)":"rotate(0deg)"},viewBox:"0 0 20 20",fill:"currentColor",children:v.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})})]})]})}function Bh(){const[e,t]=ze.useState(Xl);ze.useEffect(()=>{const i=()=>{const o=window.location.hash.replace(/^#/,"");return Object.keys(As).includes(o)?o:Xl},s=()=>{const o=i();t(o),document.title=`Holy Chrism — ${As[o]}`,window.scrollTo({top:0,behavior:"instant"})};return s(),window.addEventListener("hashchange",s),()=>window.removeEventListener("hashchange",s)},[]);const n=i=>{window.location.hash=i},r=lc.find(i=>i.id===e);return v.jsxs("div",{className:"flex h-screen bg-gradient-to-br from-gray-900 to-black text-amber-200 font-cinzel overflow-hidden",children:[v.jsx(Dh,{currentSection:e,navigateToSection:n}),v.jsx("main",{className:"flex-1 overflow-y-auto p-6 md:p-12 relative",children:v.jsx("div",{className:"relative z-10 max-w-4xl mx-auto",children:e==="home"?v.jsx(Ah,{navigateToSection:n}):r?v.jsx(Hh,{section:r,navigateToSection:n}):v.jsxs("div",{className:"text-center py-12",children:[v.jsx("h2",{className:"text-2xl font-bold text-amber-300",children:"Section not found"}),v.jsx("button",{onClick:()=>n("home"),className:"mt-4 px-4 py-2 bg-amber-900/30 text-amber-200 rounded hover:bg-amber-900/50 transition",children:"Return to the beginning"})]})})})]})}sc(document.getElementById("root")).render(v.jsx(ze.StrictMode,{children:v.jsx(Bh,{})}));
