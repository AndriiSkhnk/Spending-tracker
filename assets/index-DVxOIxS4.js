(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Ed={exports:{}},Va={},Td={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function TE(){if(Cg)return Ce;Cg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function R(L){return L===null||typeof L!="object"?null:(L=T&&L[T]||L["@@iterator"],typeof L=="function"?L:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,$={};function j(L,G,fe){this.props=L,this.context=G,this.refs=$,this.updater=fe||x}j.prototype.isReactComponent={},j.prototype.setState=function(L,G){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,G,"setState")},j.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function W(){}W.prototype=j.prototype;function X(L,G,fe){this.props=L,this.context=G,this.refs=$,this.updater=fe||x}var re=X.prototype=new W;re.constructor=X,b(re,j.prototype),re.isPureReactComponent=!0;var de=Array.isArray,Se=Object.prototype.hasOwnProperty,Te={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(L,G,fe){var Re,Ae={},De=null,be=null;if(G!=null)for(Re in G.ref!==void 0&&(be=G.ref),G.key!==void 0&&(De=""+G.key),G)Se.call(G,Re)&&!N.hasOwnProperty(Re)&&(Ae[Re]=G[Re]);var Fe=arguments.length-2;if(Fe===1)Ae.children=fe;else if(1<Fe){for(var $e=Array(Fe),yt=0;yt<Fe;yt++)$e[yt]=arguments[yt+2];Ae.children=$e}if(L&&L.defaultProps)for(Re in Fe=L.defaultProps,Fe)Ae[Re]===void 0&&(Ae[Re]=Fe[Re]);return{$$typeof:n,type:L,key:De,ref:be,props:Ae,_owner:Te.current}}function A(L,G){return{$$typeof:n,type:L.type,key:G,ref:L.ref,props:L.props,_owner:L._owner}}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function O(L){var G={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(fe){return G[fe]})}var V=/\/+/g;function C(L,G){return typeof L=="object"&&L!==null&&L.key!=null?O(""+L.key):G.toString(36)}function nt(L,G,fe,Re,Ae){var De=typeof L;(De==="undefined"||De==="boolean")&&(L=null);var be=!1;if(L===null)be=!0;else switch(De){case"string":case"number":be=!0;break;case"object":switch(L.$$typeof){case n:case e:be=!0}}if(be)return be=L,Ae=Ae(be),L=Re===""?"."+C(be,0):Re,de(Ae)?(fe="",L!=null&&(fe=L.replace(V,"$&/")+"/"),nt(Ae,G,fe,"",function(yt){return yt})):Ae!=null&&(k(Ae)&&(Ae=A(Ae,fe+(!Ae.key||be&&be.key===Ae.key?"":(""+Ae.key).replace(V,"$&/")+"/")+L)),G.push(Ae)),1;if(be=0,Re=Re===""?".":Re+":",de(L))for(var Fe=0;Fe<L.length;Fe++){De=L[Fe];var $e=Re+C(De,Fe);be+=nt(De,G,fe,$e,Ae)}else if($e=R(L),typeof $e=="function")for(L=$e.call(L),Fe=0;!(De=L.next()).done;)De=De.value,$e=Re+C(De,Fe++),be+=nt(De,G,fe,$e,Ae);else if(De==="object")throw G=String(L),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return be}function Nt(L,G,fe){if(L==null)return L;var Re=[],Ae=0;return nt(L,Re,"","",function(De){return G.call(fe,De,Ae++)}),Re}function xt(L){if(L._status===-1){var G=L._result;G=G(),G.then(function(fe){(L._status===0||L._status===-1)&&(L._status=1,L._result=fe)},function(fe){(L._status===0||L._status===-1)&&(L._status=2,L._result=fe)}),L._status===-1&&(L._status=0,L._result=G)}if(L._status===1)return L._result.default;throw L._result}var ze={current:null},ne={transition:null},me={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:ne,ReactCurrentOwner:Te};function se(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Nt,forEach:function(L,G,fe){Nt(L,function(){G.apply(this,arguments)},fe)},count:function(L){var G=0;return Nt(L,function(){G++}),G},toArray:function(L){return Nt(L,function(G){return G})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Ce.Component=j,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=X,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=se,Ce.cloneElement=function(L,G,fe){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Re=b({},L.props),Ae=L.key,De=L.ref,be=L._owner;if(G!=null){if(G.ref!==void 0&&(De=G.ref,be=Te.current),G.key!==void 0&&(Ae=""+G.key),L.type&&L.type.defaultProps)var Fe=L.type.defaultProps;for($e in G)Se.call(G,$e)&&!N.hasOwnProperty($e)&&(Re[$e]=G[$e]===void 0&&Fe!==void 0?Fe[$e]:G[$e])}var $e=arguments.length-2;if($e===1)Re.children=fe;else if(1<$e){Fe=Array($e);for(var yt=0;yt<$e;yt++)Fe[yt]=arguments[yt+2];Re.children=Fe}return{$$typeof:n,type:L.type,key:Ae,ref:De,props:Re,_owner:be}},Ce.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},Ce.createElement=I,Ce.createFactory=function(L){var G=I.bind(null,L);return G.type=L,G},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(L){return{$$typeof:d,render:L}},Ce.isValidElement=k,Ce.lazy=function(L){return{$$typeof:w,_payload:{_status:-1,_result:L},_init:xt}},Ce.memo=function(L,G){return{$$typeof:y,type:L,compare:G===void 0?null:G}},Ce.startTransition=function(L){var G=ne.transition;ne.transition={};try{L()}finally{ne.transition=G}},Ce.unstable_act=se,Ce.useCallback=function(L,G){return ze.current.useCallback(L,G)},Ce.useContext=function(L){return ze.current.useContext(L)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(L){return ze.current.useDeferredValue(L)},Ce.useEffect=function(L,G){return ze.current.useEffect(L,G)},Ce.useId=function(){return ze.current.useId()},Ce.useImperativeHandle=function(L,G,fe){return ze.current.useImperativeHandle(L,G,fe)},Ce.useInsertionEffect=function(L,G){return ze.current.useInsertionEffect(L,G)},Ce.useLayoutEffect=function(L,G){return ze.current.useLayoutEffect(L,G)},Ce.useMemo=function(L,G){return ze.current.useMemo(L,G)},Ce.useReducer=function(L,G,fe){return ze.current.useReducer(L,G,fe)},Ce.useRef=function(L){return ze.current.useRef(L)},Ce.useState=function(L){return ze.current.useState(L)},Ce.useSyncExternalStore=function(L,G,fe){return ze.current.useSyncExternalStore(L,G,fe)},Ce.useTransition=function(){return ze.current.useTransition()},Ce.version="18.3.1",Ce}var Pg;function gf(){return Pg||(Pg=1,Td.exports=TE()),Td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function IE(){if(kg)return Va;kg=1;var n=gf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(d,p,y){var w,T={},R=null,x=null;y!==void 0&&(R=""+y),p.key!==void 0&&(R=""+p.key),p.ref!==void 0&&(x=p.ref);for(w in p)i.call(p,w)&&!l.hasOwnProperty(w)&&(T[w]=p[w]);if(d&&d.defaultProps)for(w in p=d.defaultProps,p)T[w]===void 0&&(T[w]=p[w]);return{$$typeof:e,type:d,key:R,ref:x,props:T,_owner:o.current}}return Va.Fragment=t,Va.jsx=h,Va.jsxs=h,Va}var Ng;function SE(){return Ng||(Ng=1,Ed.exports=IE()),Ed.exports}var te=SE(),q=gf(),Mu={},Id={exports:{}},Jt={},Sd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function RE(){return xg||(xg=1,function(n){function e(ne,me){var se=ne.length;ne.push(me);e:for(;0<se;){var L=se-1>>>1,G=ne[L];if(0<o(G,me))ne[L]=me,ne[se]=G,se=L;else break e}}function t(ne){return ne.length===0?null:ne[0]}function i(ne){if(ne.length===0)return null;var me=ne[0],se=ne.pop();if(se!==me){ne[0]=se;e:for(var L=0,G=ne.length,fe=G>>>1;L<fe;){var Re=2*(L+1)-1,Ae=ne[Re],De=Re+1,be=ne[De];if(0>o(Ae,se))De<G&&0>o(be,Ae)?(ne[L]=be,ne[De]=se,L=De):(ne[L]=Ae,ne[Re]=se,L=Re);else if(De<G&&0>o(be,se))ne[L]=be,ne[De]=se,L=De;else break e}}return me}function o(ne,me){var se=ne.sortIndex-me.sortIndex;return se!==0?se:ne.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();n.unstable_now=function(){return h.now()-d}}var p=[],y=[],w=1,T=null,R=3,x=!1,b=!1,$=!1,j=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(ne){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=ne)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function de(ne){if($=!1,re(ne),!b)if(t(p)!==null)b=!0,xt(Se);else{var me=t(y);me!==null&&ze(de,me.startTime-ne)}}function Se(ne,me){b=!1,$&&($=!1,W(I),I=-1),x=!0;var se=R;try{for(re(me),T=t(p);T!==null&&(!(T.expirationTime>me)||ne&&!O());){var L=T.callback;if(typeof L=="function"){T.callback=null,R=T.priorityLevel;var G=L(T.expirationTime<=me);me=n.unstable_now(),typeof G=="function"?T.callback=G:T===t(p)&&i(p),re(me)}else i(p);T=t(p)}if(T!==null)var fe=!0;else{var Re=t(y);Re!==null&&ze(de,Re.startTime-me),fe=!1}return fe}finally{T=null,R=se,x=!1}}var Te=!1,N=null,I=-1,A=5,k=-1;function O(){return!(n.unstable_now()-k<A)}function V(){if(N!==null){var ne=n.unstable_now();k=ne;var me=!0;try{me=N(!0,ne)}finally{me?C():(Te=!1,N=null)}}else Te=!1}var C;if(typeof X=="function")C=function(){X(V)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Nt=nt.port2;nt.port1.onmessage=V,C=function(){Nt.postMessage(null)}}else C=function(){j(V,0)};function xt(ne){N=ne,Te||(Te=!0,C())}function ze(ne,me){I=j(function(){ne(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ne){ne.callback=null},n.unstable_continueExecution=function(){b||x||(b=!0,xt(Se))},n.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ne?Math.floor(1e3/ne):5},n.unstable_getCurrentPriorityLevel=function(){return R},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ne){switch(R){case 1:case 2:case 3:var me=3;break;default:me=R}var se=R;R=me;try{return ne()}finally{R=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ne,me){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var se=R;R=ne;try{return me()}finally{R=se}},n.unstable_scheduleCallback=function(ne,me,se){var L=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?L+se:L):se=L,ne){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=se+G,ne={id:w++,callback:me,priorityLevel:ne,startTime:se,expirationTime:G,sortIndex:-1},se>L?(ne.sortIndex=se,e(y,ne),t(p)===null&&ne===t(y)&&($?(W(I),I=-1):$=!0,ze(de,se-L))):(ne.sortIndex=G,e(p,ne),b||x||(b=!0,xt(Se))),ne},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ne){var me=R;return function(){var se=R;R=me;try{return ne.apply(this,arguments)}finally{R=se}}}}(Rd)),Rd}var Dg;function AE(){return Dg||(Dg=1,Sd.exports=RE()),Sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function CE(){if(Og)return Jt;Og=1;var n=gf(),e=AE();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function R(r){return p.call(T,r)?!0:p.call(w,r)?!1:y.test(r)?T[r]=!0:(w[r]=!0,!1)}function x(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function b(r,s,a,c){if(s===null||typeof s>"u"||x(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(r,s,a,c,f,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){j[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];j[s]=new $(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){j[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){j[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){j[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){j[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){j[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){j[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){j[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function X(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(W,X);j[s]=new $(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(W,X);j[s]=new $(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(W,X);j[s]=new $(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){j[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),j.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){j[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function re(r,s,a,c){var f=j.hasOwnProperty(s)?j[s]:null;(f!==null?f.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(b(s,a,f,c)&&(a=null),c||f===null?R(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,c=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var de=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),Te=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),O=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Nt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),ne=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ne&&r[ne]||r["@@iterator"],typeof r=="function"?r:null)}var se=Object.assign,L;function G(r){if(L===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);L=s&&s[1]||""}return`
`+L+r}var fe=!1;function Re(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var c=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){c=z}r.call(s.prototype)}else{try{throw Error()}catch(z){c=z}r()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),g=c.stack.split(`
`),v=f.length-1,S=g.length-1;1<=v&&0<=S&&f[v]!==g[S];)S--;for(;1<=v&&0<=S;v--,S--)if(f[v]!==g[S]){if(v!==1||S!==1)do if(v--,S--,0>S||f[v]!==g[S]){var P=`
`+f[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=S);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?G(r):""}function Ae(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case Te:return"Portal";case A:return"Profiler";case I:return"StrictMode";case C:return"Suspense";case nt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case V:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Nt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case xt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function be(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function yt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function dr(r){r._valueTracker||(r._valueTracker=yt(r))}function Es(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Br(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ni(r,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ts(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Fe(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function zo(r,s){s=s.checked,s!=null&&re(r,"checked",s,!1)}function Bo(r,s){zo(r,s);var a=Fe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Is(r,s.type,a):s.hasOwnProperty("defaultValue")&&Is(r,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function El(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Is(r,s,a){(s!=="number"||Br(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var fr=Array.isArray;function pr(r,s,a,c){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Fe(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function $o(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ss(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(fr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Fe(a)}}function Rs(r,s){var a=Fe(s.value),c=Fe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function qo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ct(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ct(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var mr,Ho=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=mr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function $r(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Di=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(r){Di.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),xi[s]=xi[r]})});function Wo(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||xi.hasOwnProperty(r)&&xi[r]?(""+s).trim():s+"px"}function Go(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Wo(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,f):r[a]=f}}var Ko=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qo(r,s){if(s){if(Ko[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Yo(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function As(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Cs=null,hn=null,Kn=null;function Ps(r){if(r=wa(r)){if(typeof Cs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Xl(s),Cs(r.stateNode,r.type,s))}}function Qn(r){hn?Kn?Kn.push(r):Kn=[r]:hn=r}function Xo(){if(hn){var r=hn,s=Kn;if(Kn=hn=null,Ps(r),s)for(r=0;r<s.length;r++)Ps(s[r])}}function Li(r,s){return r(s)}function Jo(){}var gr=!1;function Zo(r,s,a){if(gr)return r(s,a);gr=!0;try{return Li(r,s,a)}finally{gr=!1,(hn!==null||Kn!==null)&&(Jo(),Xo())}}function rt(r,s){var a=r.stateNode;if(a===null)return null;var c=Xl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var ks=!1;if(d)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){ks=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{ks=!1}function Vi(r,s,a,c,f,g,v,S,P){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(Y){this.onError(Y)}}var Mi=!1,Ns=null,Rn=!1,ea=null,Qc={onError:function(r){Mi=!0,Ns=r}};function xs(r,s,a,c,f,g,v,S,P){Mi=!1,Ns=null,Vi.apply(Qc,arguments)}function Tl(r,s,a,c,f,g,v,S,P){if(xs.apply(this,arguments),Mi){if(Mi){var z=Ns;Mi=!1,Ns=null}else throw Error(t(198));Rn||(Rn=!0,ea=z)}}function An(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function bi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Cn(r){if(An(r)!==r)throw Error(t(188))}function Il(r){var s=r.alternate;if(!s){if(s=An(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Cn(f),r;if(g===c)return Cn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var v=!1,S=f.child;S;){if(S===a){v=!0,a=f,c=g;break}if(S===c){v=!0,c=f,a=g;break}S=S.sibling}if(!v){for(S=g.child;S;){if(S===a){v=!0,a=g,c=f;break}if(S===c){v=!0,c=g,a=f;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ta(r){return r=Il(r),r!==null?Ds(r):null}function Ds(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ds(r);if(s!==null)return s;r=r.sibling}return null}var Os=e.unstable_scheduleCallback,na=e.unstable_cancelCallback,Sl=e.unstable_shouldYield,Yc=e.unstable_requestPaint,qe=e.unstable_now,Rl=e.unstable_getCurrentPriorityLevel,Fi=e.unstable_ImmediatePriority,qr=e.unstable_UserBlockingPriority,dn=e.unstable_NormalPriority,ra=e.unstable_LowPriority,Al=e.unstable_IdlePriority,Ui=null,nn=null;function Cl(r){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Ui,r,void 0,(r.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:kl,ia=Math.log,Pl=Math.LN2;function kl(r){return r>>>=0,r===0?32:31-(ia(r)/Pl|0)|0}var Ls=64,Vs=4194304;function Hr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function ji(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,f=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var S=v&~f;S!==0?c=Hr(S):(g&=v,g!==0&&(c=Hr(g)))}else v=a&~f,v!==0?c=Hr(v):g!==0&&(c=Hr(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&f)&&(f=c&-c,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(c&4&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-zt(s),f=1<<a,c|=r[a],s&=~f;return c}function Xc(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-zt(g),S=1<<v,P=f[v];P===-1?(!(S&a)||S&c)&&(f[v]=Xc(S,s)):P<=s&&(r.expiredLanes|=S),g&=~S}}function rn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function zi(){var r=Ls;return Ls<<=1,!(Ls&4194240)&&(Ls=64),r}function Wr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Gr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-zt(s),r[s]=a}function Be(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-zt(a),g=1<<f;s[f]=0,c[f]=-1,r[f]=-1,a&=~g}}function Kr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-zt(a),f=1<<c;f&s|r[c]&s&&(r[c]|=s),a&=~f}}var Ne=0;function Qr(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Nl,Ms,xl,Dl,Ol,sa=!1,Yn=[],It=null,Pn=null,kn=null,Yr=new Map,fn=new Map,Xn=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ll(r,s){switch(r){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Yr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(s.pointerId)}}function Ht(r,s,a,c,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=wa(s),s!==null&&Ms(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function Zc(r,s,a,c,f){switch(s){case"focusin":return It=Ht(It,r,s,a,c,f),!0;case"dragenter":return Pn=Ht(Pn,r,s,a,c,f),!0;case"mouseover":return kn=Ht(kn,r,s,a,c,f),!0;case"pointerover":var g=f.pointerId;return Yr.set(g,Ht(Yr.get(g)||null,r,s,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,fn.set(g,Ht(fn.get(g)||null,r,s,a,c,f)),!0}return!1}function Vl(r){var s=Wi(r.target);if(s!==null){var a=An(s);if(a!==null){if(s=a.tag,s===13){if(s=bi(a),s!==null){r.blockedOn=s,Ol(r.priority,function(){xl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function _r(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=bs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Oi=c,a.target.dispatchEvent(c),Oi=null}else return s=wa(a),s!==null&&Ms(s),r.blockedOn=a,!1;s.shift()}return!0}function Bi(r,s,a){_r(r)&&a.delete(s)}function Ml(){sa=!1,It!==null&&_r(It)&&(It=null),Pn!==null&&_r(Pn)&&(Pn=null),kn!==null&&_r(kn)&&(kn=null),Yr.forEach(Bi),fn.forEach(Bi)}function Nn(r,s){r.blockedOn===s&&(r.blockedOn=null,sa||(sa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ml)))}function xn(r){function s(f){return Nn(f,r)}if(0<Yn.length){Nn(Yn[0],r);for(var a=1;a<Yn.length;a++){var c=Yn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(It!==null&&Nn(It,r),Pn!==null&&Nn(Pn,r),kn!==null&&Nn(kn,r),Yr.forEach(s),fn.forEach(s),a=0;a<Xn.length;a++)c=Xn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Xn.length&&(a=Xn[0],a.blockedOn===null);)Vl(a),a.blockedOn===null&&Xn.shift()}var vr=de.ReactCurrentBatchConfig,Xr=!0;function Qe(r,s,a,c){var f=Ne,g=vr.transition;vr.transition=null;try{Ne=1,oa(r,s,a,c)}finally{Ne=f,vr.transition=g}}function eh(r,s,a,c){var f=Ne,g=vr.transition;vr.transition=null;try{Ne=4,oa(r,s,a,c)}finally{Ne=f,vr.transition=g}}function oa(r,s,a,c){if(Xr){var f=bs(r,s,a,c);if(f===null)hh(r,s,c,$i,a),Ll(r,c);else if(Zc(f,r,s,a,c))c.stopPropagation();else if(Ll(r,c),s&4&&-1<Jc.indexOf(r)){for(;f!==null;){var g=wa(f);if(g!==null&&Nl(g),g=bs(r,s,a,c),g===null&&hh(r,s,c,$i,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else hh(r,s,c,null,a)}}var $i=null;function bs(r,s,a,c){if($i=null,r=As(c),r=Wi(r),r!==null)if(s=An(r),s===null)r=null;else if(a=s.tag,a===13){if(r=bi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return $i=r,null}function aa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rl()){case Fi:return 1;case qr:return 4;case dn:case ra:return 16;case Al:return 536870912;default:return 16}default:return 16}}var sn=null,Fs=null,Wt=null;function la(){if(Wt)return Wt;var r,s=Fs,a=s.length,c,f="value"in sn?sn.value:sn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===f[g-c];c++);return Wt=f.slice(r,1<c?1-c:void 0)}function Us(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Jn(){return!0}function ua(){return!1}function St(r){function s(a,c,f,g,v){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Jn:ua,this.isPropagationStopped=ua,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),s}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},js=St(Dn),Zn=se({},Dn,{view:0,detail:0}),th=St(Zn),zs,wr,Jr,qi=se({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Jr&&(Jr&&r.type==="mousemove"?(zs=r.screenX-Jr.screenX,wr=r.screenY-Jr.screenY):wr=zs=0,Jr=r),zs)},movementY:function(r){return"movementY"in r?r.movementY:wr}}),Bs=St(qi),ca=se({},qi,{dataTransfer:0}),bl=St(ca),$s=se({},Zn,{relatedTarget:0}),qs=St($s),Fl=se({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Er=St(Fl),Ul=se({},Dn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),jl=St(Ul),zl=se({},Dn,{data:0}),ha=St(zl),Hs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $l(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Bl[r])?!!s[r]:!1}function er(){return $l}var u=se({},Zn,{key:function(r){if(r.key){var s=Hs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Us(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Bt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(r){return r.type==="keypress"?Us(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Us(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=St(u),_=se({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=St(_),M=se({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),B=St(M),ee=se({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=St(ee),dt=se({},qi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=St(dt),_t=[9,13,27,32],ot=d&&"CompositionEvent"in window,pn=null;d&&"documentMode"in document&&(pn=document.documentMode);var on=d&&"TextEvent"in window&&!pn,Hi=d&&(!ot||pn&&8<pn&&11>=pn),Ws=" ",Ep=!1;function Tp(r,s){switch(r){case"keyup":return _t.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Gs=!1;function vw(r,s){switch(r){case"compositionend":return Ip(s);case"keypress":return s.which!==32?null:(Ep=!0,Ws);case"textInput":return r=s.data,r===Ws&&Ep?null:r;default:return null}}function ww(r,s){if(Gs)return r==="compositionend"||!ot&&Tp(r,s)?(r=la(),Wt=Fs=sn=null,Gs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Hi&&s.locale!=="ko"?null:s.data;default:return null}}var Ew={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Ew[r.type]:s==="textarea"}function Rp(r,s,a,c){Qn(c),s=Kl(s,"onChange"),0<s.length&&(a=new js("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var da=null,fa=null;function Tw(r){$p(r,0)}function ql(r){var s=Js(r);if(Es(s))return r}function Iw(r,s){if(r==="change")return s}var Ap=!1;if(d){var nh;if(d){var rh="oninput"in document;if(!rh){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),rh=typeof Cp.oninput=="function"}nh=rh}else nh=!1;Ap=nh&&(!document.documentMode||9<document.documentMode)}function Pp(){da&&(da.detachEvent("onpropertychange",kp),fa=da=null)}function kp(r){if(r.propertyName==="value"&&ql(fa)){var s=[];Rp(s,fa,r,As(r)),Zo(Tw,s)}}function Sw(r,s,a){r==="focusin"?(Pp(),da=s,fa=a,da.attachEvent("onpropertychange",kp)):r==="focusout"&&Pp()}function Rw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ql(fa)}function Aw(r,s){if(r==="click")return ql(s)}function Cw(r,s){if(r==="input"||r==="change")return ql(s)}function Pw(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var On=typeof Object.is=="function"?Object.is:Pw;function pa(r,s){if(On(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(s,f)||!On(r[f],s[f]))return!1}return!0}function Np(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function xp(r,s){var a=Np(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Np(a)}}function Dp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Dp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Op(){for(var r=window,s=Br();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Br(r.document)}return s}function ih(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function kw(r){var s=Op(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Dp(a.ownerDocument.documentElement,a)){if(c!==null&&ih(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!r.extend&&g>c&&(f=c,c=g,g=f),f=xp(a,g);var v=xp(a,c);f&&v&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Nw=d&&"documentMode"in document&&11>=document.documentMode,Ks=null,sh=null,ma=null,oh=!1;function Lp(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;oh||Ks==null||Ks!==Br(c)||(c=Ks,"selectionStart"in c&&ih(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ma&&pa(ma,c)||(ma=c,c=Kl(sh,"onSelect"),0<c.length&&(s=new js("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Ks)))}function Hl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Qs={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionend:Hl("Transition","TransitionEnd")},ah={},Vp={};d&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function Wl(r){if(ah[r])return ah[r];if(!Qs[r])return r;var s=Qs[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Vp)return ah[r]=s[a];return r}var Mp=Wl("animationend"),bp=Wl("animationiteration"),Fp=Wl("animationstart"),Up=Wl("transitionend"),jp=new Map,zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(r,s){jp.set(r,s),l(s,[r])}for(var lh=0;lh<zp.length;lh++){var uh=zp[lh],xw=uh.toLowerCase(),Dw=uh[0].toUpperCase()+uh.slice(1);Zr(xw,"on"+Dw)}Zr(Mp,"onAnimationEnd"),Zr(bp,"onAnimationIteration"),Zr(Fp,"onAnimationStart"),Zr("dblclick","onDoubleClick"),Zr("focusin","onFocus"),Zr("focusout","onBlur"),Zr(Up,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ow=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function Bp(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Tl(c,s,void 0,r),r.currentTarget=null}function $p(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,z=S.currentTarget;if(S=S.listener,P!==g&&f.isPropagationStopped())break e;Bp(f,S,z),g=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,z=S.currentTarget,S=S.listener,P!==g&&f.isPropagationStopped())break e;Bp(f,S,z),g=P}}}if(Rn)throw r=ea,Rn=!1,ea=null,r}function We(r,s){var a=s[yh];a===void 0&&(a=s[yh]=new Set);var c=r+"__bubble";a.has(c)||(qp(s,r,2,!1),a.add(c))}function ch(r,s,a){var c=0;s&&(c|=4),qp(a,r,c,s)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function ya(r){if(!r[Gl]){r[Gl]=!0,i.forEach(function(a){a!=="selectionchange"&&(Ow.has(a)||ch(a,!1,r),ch(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Gl]||(s[Gl]=!0,ch("selectionchange",!1,s))}}function qp(r,s,a,c){switch(aa(s)){case 1:var f=Qe;break;case 4:f=eh;break;default:f=oa}a=f.bind(null,s,a,r),f=void 0,!ks||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function hh(r,s,a,c,f){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===f||S.nodeType===8&&S.parentNode===f)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===f||P.nodeType===8&&P.parentNode===f))return;v=v.return}for(;S!==null;){if(v=Wi(S),v===null)return;if(P=v.tag,P===5||P===6){c=g=v;continue e}S=S.parentNode}}c=c.return}Zo(function(){var z=g,Y=As(a),J=[];e:{var Q=jp.get(r);if(Q!==void 0){var ie=js,ue=r;switch(r){case"keypress":if(Us(a)===0)break e;case"keydown":case"keyup":ie=m;break;case"focusin":ue="focus",ie=qs;break;case"focusout":ue="blur",ie=qs;break;case"beforeblur":case"afterblur":ie=qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=bl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=B;break;case Mp:case bp:case Fp:ie=Er;break;case Up:ie=je;break;case"scroll":ie=th;break;case"wheel":ie=Oe;break;case"copy":case"cut":case"paste":ie=jl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=E}var ce=(s&4)!==0,it=!ce&&r==="scroll",F=ce?Q!==null?Q+"Capture":null:Q;ce=[];for(var D=z,U;D!==null;){U=D;var Z=U.stateNode;if(U.tag===5&&Z!==null&&(U=Z,F!==null&&(Z=rt(D,F),Z!=null&&ce.push(_a(D,Z,U)))),it)break;D=D.return}0<ce.length&&(Q=new ie(Q,ue,null,a,Y),J.push({event:Q,listeners:ce}))}}if(!(s&7)){e:{if(Q=r==="mouseover"||r==="pointerover",ie=r==="mouseout"||r==="pointerout",Q&&a!==Oi&&(ue=a.relatedTarget||a.fromElement)&&(Wi(ue)||ue[Tr]))break e;if((ie||Q)&&(Q=Y.window===Y?Y:(Q=Y.ownerDocument)?Q.defaultView||Q.parentWindow:window,ie?(ue=a.relatedTarget||a.toElement,ie=z,ue=ue?Wi(ue):null,ue!==null&&(it=An(ue),ue!==it||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=z),ie!==ue)){if(ce=Bs,Z="onMouseLeave",F="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(ce=E,Z="onPointerLeave",F="onPointerEnter",D="pointer"),it=ie==null?Q:Js(ie),U=ue==null?Q:Js(ue),Q=new ce(Z,D+"leave",ie,a,Y),Q.target=it,Q.relatedTarget=U,Z=null,Wi(Y)===z&&(ce=new ce(F,D+"enter",ue,a,Y),ce.target=U,ce.relatedTarget=it,Z=ce),it=Z,ie&&ue)t:{for(ce=ie,F=ue,D=0,U=ce;U;U=Ys(U))D++;for(U=0,Z=F;Z;Z=Ys(Z))U++;for(;0<D-U;)ce=Ys(ce),D--;for(;0<U-D;)F=Ys(F),U--;for(;D--;){if(ce===F||F!==null&&ce===F.alternate)break t;ce=Ys(ce),F=Ys(F)}ce=null}else ce=null;ie!==null&&Hp(J,Q,ie,ce,!1),ue!==null&&it!==null&&Hp(J,it,ue,ce,!0)}}e:{if(Q=z?Js(z):window,ie=Q.nodeName&&Q.nodeName.toLowerCase(),ie==="select"||ie==="input"&&Q.type==="file")var he=Iw;else if(Sp(Q))if(Ap)he=Cw;else{he=Rw;var ge=Sw}else(ie=Q.nodeName)&&ie.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(he=Aw);if(he&&(he=he(r,z))){Rp(J,he,a,Y);break e}ge&&ge(r,Q,z),r==="focusout"&&(ge=Q._wrapperState)&&ge.controlled&&Q.type==="number"&&Is(Q,"number",Q.value)}switch(ge=z?Js(z):window,r){case"focusin":(Sp(ge)||ge.contentEditable==="true")&&(Ks=ge,sh=z,ma=null);break;case"focusout":ma=sh=Ks=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,Lp(J,a,Y);break;case"selectionchange":if(Nw)break;case"keydown":case"keyup":Lp(J,a,Y)}var ye;if(ot)e:{switch(r){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Gs?Tp(r,a)&&(ve="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Hi&&a.locale!=="ko"&&(Gs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Gs&&(ye=la()):(sn=Y,Fs="value"in sn?sn.value:sn.textContent,Gs=!0)),ge=Kl(z,ve),0<ge.length&&(ve=new ha(ve,r,null,a,Y),J.push({event:ve,listeners:ge}),ye?ve.data=ye:(ye=Ip(a),ye!==null&&(ve.data=ye)))),(ye=on?vw(r,a):ww(r,a))&&(z=Kl(z,"onBeforeInput"),0<z.length&&(Y=new ha("onBeforeInput","beforeinput",null,a,Y),J.push({event:Y,listeners:z}),Y.data=ye))}$p(J,s)})}function _a(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Kl(r,s){for(var a=s+"Capture",c=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=rt(r,a),g!=null&&c.unshift(_a(r,g,f)),g=rt(r,s),g!=null&&c.push(_a(r,g,f))),r=r.return}return c}function Ys(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Hp(r,s,a,c,f){for(var g=s._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,z=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&z!==null&&(S=z,f?(P=rt(a,g),P!=null&&v.unshift(_a(a,P,S))):f||(P=rt(a,g),P!=null&&v.push(_a(a,P,S)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var Lw=/\r\n?/g,Vw=/\u0000|\uFFFD/g;function Wp(r){return(typeof r=="string"?r:""+r).replace(Lw,`
`).replace(Vw,"")}function Ql(r,s,a){if(s=Wp(s),Wp(r)!==s&&a)throw Error(t(425))}function Yl(){}var dh=null,fh=null;function ph(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var mh=typeof setTimeout=="function"?setTimeout:void 0,Mw=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,bw=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(r){return Gp.resolve(null).then(r).catch(Fw)}:mh;function Fw(r){setTimeout(function(){throw r})}function gh(r,s){var a=s,c=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){r.removeChild(f),xn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);xn(s)}function ei(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Kp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),tr="__reactFiber$"+Xs,va="__reactProps$"+Xs,Tr="__reactContainer$"+Xs,yh="__reactEvents$"+Xs,Uw="__reactListeners$"+Xs,jw="__reactHandles$"+Xs;function Wi(r){var s=r[tr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Tr]||a[tr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Kp(r);r!==null;){if(a=r[tr])return a;r=Kp(r)}return s}r=a,a=r.parentNode}return null}function wa(r){return r=r[tr]||r[Tr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Js(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Xl(r){return r[va]||null}var _h=[],Zs=-1;function ti(r){return{current:r}}function Ge(r){0>Zs||(r.current=_h[Zs],_h[Zs]=null,Zs--)}function He(r,s){Zs++,_h[Zs]=r.current,r.current=s}var ni={},Dt=ti(ni),Gt=ti(!1),Gi=ni;function eo(r,s){var a=r.type.contextTypes;if(!a)return ni;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Kt(r){return r=r.childContextTypes,r!=null}function Jl(){Ge(Gt),Ge(Dt)}function Qp(r,s,a){if(Dt.current!==ni)throw Error(t(168));He(Dt,s),He(Gt,a)}function Yp(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in s))throw Error(t(108,be(r)||"Unknown",f));return se({},a,c)}function Zl(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ni,Gi=Dt.current,He(Dt,r),He(Gt,Gt.current),!0}function Xp(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Yp(r,s,Gi),c.__reactInternalMemoizedMergedChildContext=r,Ge(Gt),Ge(Dt),He(Dt,r)):Ge(Gt),He(Gt,a)}var Ir=null,eu=!1,vh=!1;function Jp(r){Ir===null?Ir=[r]:Ir.push(r)}function zw(r){eu=!0,Jp(r)}function ri(){if(!vh&&Ir!==null){vh=!0;var r=0,s=Ne;try{var a=Ir;for(Ne=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Ir=null,eu=!1}catch(f){throw Ir!==null&&(Ir=Ir.slice(r+1)),Os(Fi,ri),f}finally{Ne=s,vh=!1}}return null}var to=[],no=0,tu=null,nu=0,mn=[],gn=0,Ki=null,Sr=1,Rr="";function Qi(r,s){to[no++]=nu,to[no++]=tu,tu=r,nu=s}function Zp(r,s,a){mn[gn++]=Sr,mn[gn++]=Rr,mn[gn++]=Ki,Ki=r;var c=Sr;r=Rr;var f=32-zt(c)-1;c&=~(1<<f),a+=1;var g=32-zt(s)+f;if(30<g){var v=f-f%5;g=(c&(1<<v)-1).toString(32),c>>=v,f-=v,Sr=1<<32-zt(s)+f|a<<f|c,Rr=g+r}else Sr=1<<g|a<<f|c,Rr=r}function wh(r){r.return!==null&&(Qi(r,1),Zp(r,1,0))}function Eh(r){for(;r===tu;)tu=to[--no],to[no]=null,nu=to[--no],to[no]=null;for(;r===Ki;)Ki=mn[--gn],mn[gn]=null,Rr=mn[--gn],mn[gn]=null,Sr=mn[--gn],mn[gn]=null}var an=null,ln=null,Ye=!1,Ln=null;function em(r,s){var a=wn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function tm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,an=r,ln=ei(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,an=r,ln=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Ki!==null?{id:Sr,overflow:Rr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=wn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,an=r,ln=null,!0):!1;default:return!1}}function Th(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ih(r){if(Ye){var s=ln;if(s){var a=s;if(!tm(r,s)){if(Th(r))throw Error(t(418));s=ei(a.nextSibling);var c=an;s&&tm(r,s)?em(c,a):(r.flags=r.flags&-4097|2,Ye=!1,an=r)}}else{if(Th(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ye=!1,an=r}}}function nm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;an=r}function ru(r){if(r!==an)return!1;if(!Ye)return nm(r),Ye=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!ph(r.type,r.memoizedProps)),s&&(s=ln)){if(Th(r))throw rm(),Error(t(418));for(;s;)em(r,s),s=ei(s.nextSibling)}if(nm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){ln=ei(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}ln=null}}else ln=an?ei(r.stateNode.nextSibling):null;return!0}function rm(){for(var r=ln;r;)r=ei(r.nextSibling)}function ro(){ln=an=null,Ye=!1}function Sh(r){Ln===null?Ln=[r]:Ln.push(r)}var Bw=de.ReactCurrentBatchConfig;function Ea(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var f=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var S=f.refs;v===null?delete S[g]:S[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function iu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function im(r){var s=r._init;return s(r._payload)}function sm(r){function s(F,D){if(r){var U=F.deletions;U===null?(F.deletions=[D],F.flags|=16):U.push(D)}}function a(F,D){if(!r)return null;for(;D!==null;)s(F,D),D=D.sibling;return null}function c(F,D){for(F=new Map;D!==null;)D.key!==null?F.set(D.key,D):F.set(D.index,D),D=D.sibling;return F}function f(F,D){return F=hi(F,D),F.index=0,F.sibling=null,F}function g(F,D,U){return F.index=U,r?(U=F.alternate,U!==null?(U=U.index,U<D?(F.flags|=2,D):U):(F.flags|=2,D)):(F.flags|=1048576,D)}function v(F){return r&&F.alternate===null&&(F.flags|=2),F}function S(F,D,U,Z){return D===null||D.tag!==6?(D=md(U,F.mode,Z),D.return=F,D):(D=f(D,U),D.return=F,D)}function P(F,D,U,Z){var he=U.type;return he===N?Y(F,D,U.props.children,Z,U.key):D!==null&&(D.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===xt&&im(he)===D.type)?(Z=f(D,U.props),Z.ref=Ea(F,D,U),Z.return=F,Z):(Z=Pu(U.type,U.key,U.props,null,F.mode,Z),Z.ref=Ea(F,D,U),Z.return=F,Z)}function z(F,D,U,Z){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=gd(U,F.mode,Z),D.return=F,D):(D=f(D,U.children||[]),D.return=F,D)}function Y(F,D,U,Z,he){return D===null||D.tag!==7?(D=rs(U,F.mode,Z,he),D.return=F,D):(D=f(D,U),D.return=F,D)}function J(F,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=md(""+D,F.mode,U),D.return=F,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Se:return U=Pu(D.type,D.key,D.props,null,F.mode,U),U.ref=Ea(F,null,D),U.return=F,U;case Te:return D=gd(D,F.mode,U),D.return=F,D;case xt:var Z=D._init;return J(F,Z(D._payload),U)}if(fr(D)||me(D))return D=rs(D,F.mode,U,null),D.return=F,D;iu(F,D)}return null}function Q(F,D,U,Z){var he=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return he!==null?null:S(F,D,""+U,Z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Se:return U.key===he?P(F,D,U,Z):null;case Te:return U.key===he?z(F,D,U,Z):null;case xt:return he=U._init,Q(F,D,he(U._payload),Z)}if(fr(U)||me(U))return he!==null?null:Y(F,D,U,Z,null);iu(F,U)}return null}function ie(F,D,U,Z,he){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return F=F.get(U)||null,S(D,F,""+Z,he);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Se:return F=F.get(Z.key===null?U:Z.key)||null,P(D,F,Z,he);case Te:return F=F.get(Z.key===null?U:Z.key)||null,z(D,F,Z,he);case xt:var ge=Z._init;return ie(F,D,U,ge(Z._payload),he)}if(fr(Z)||me(Z))return F=F.get(U)||null,Y(D,F,Z,he,null);iu(D,Z)}return null}function ue(F,D,U,Z){for(var he=null,ge=null,ye=D,ve=D=0,Et=null;ye!==null&&ve<U.length;ve++){ye.index>ve?(Et=ye,ye=null):Et=ye.sibling;var Me=Q(F,ye,U[ve],Z);if(Me===null){ye===null&&(ye=Et);break}r&&ye&&Me.alternate===null&&s(F,ye),D=g(Me,D,ve),ge===null?he=Me:ge.sibling=Me,ge=Me,ye=Et}if(ve===U.length)return a(F,ye),Ye&&Qi(F,ve),he;if(ye===null){for(;ve<U.length;ve++)ye=J(F,U[ve],Z),ye!==null&&(D=g(ye,D,ve),ge===null?he=ye:ge.sibling=ye,ge=ye);return Ye&&Qi(F,ve),he}for(ye=c(F,ye);ve<U.length;ve++)Et=ie(ye,F,ve,U[ve],Z),Et!==null&&(r&&Et.alternate!==null&&ye.delete(Et.key===null?ve:Et.key),D=g(Et,D,ve),ge===null?he=Et:ge.sibling=Et,ge=Et);return r&&ye.forEach(function(di){return s(F,di)}),Ye&&Qi(F,ve),he}function ce(F,D,U,Z){var he=me(U);if(typeof he!="function")throw Error(t(150));if(U=he.call(U),U==null)throw Error(t(151));for(var ge=he=null,ye=D,ve=D=0,Et=null,Me=U.next();ye!==null&&!Me.done;ve++,Me=U.next()){ye.index>ve?(Et=ye,ye=null):Et=ye.sibling;var di=Q(F,ye,Me.value,Z);if(di===null){ye===null&&(ye=Et);break}r&&ye&&di.alternate===null&&s(F,ye),D=g(di,D,ve),ge===null?he=di:ge.sibling=di,ge=di,ye=Et}if(Me.done)return a(F,ye),Ye&&Qi(F,ve),he;if(ye===null){for(;!Me.done;ve++,Me=U.next())Me=J(F,Me.value,Z),Me!==null&&(D=g(Me,D,ve),ge===null?he=Me:ge.sibling=Me,ge=Me);return Ye&&Qi(F,ve),he}for(ye=c(F,ye);!Me.done;ve++,Me=U.next())Me=ie(ye,F,ve,Me.value,Z),Me!==null&&(r&&Me.alternate!==null&&ye.delete(Me.key===null?ve:Me.key),D=g(Me,D,ve),ge===null?he=Me:ge.sibling=Me,ge=Me);return r&&ye.forEach(function(EE){return s(F,EE)}),Ye&&Qi(F,ve),he}function it(F,D,U,Z){if(typeof U=="object"&&U!==null&&U.type===N&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Se:e:{for(var he=U.key,ge=D;ge!==null;){if(ge.key===he){if(he=U.type,he===N){if(ge.tag===7){a(F,ge.sibling),D=f(ge,U.props.children),D.return=F,F=D;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===xt&&im(he)===ge.type){a(F,ge.sibling),D=f(ge,U.props),D.ref=Ea(F,ge,U),D.return=F,F=D;break e}a(F,ge);break}else s(F,ge);ge=ge.sibling}U.type===N?(D=rs(U.props.children,F.mode,Z,U.key),D.return=F,F=D):(Z=Pu(U.type,U.key,U.props,null,F.mode,Z),Z.ref=Ea(F,D,U),Z.return=F,F=Z)}return v(F);case Te:e:{for(ge=U.key;D!==null;){if(D.key===ge)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(F,D.sibling),D=f(D,U.children||[]),D.return=F,F=D;break e}else{a(F,D);break}else s(F,D);D=D.sibling}D=gd(U,F.mode,Z),D.return=F,F=D}return v(F);case xt:return ge=U._init,it(F,D,ge(U._payload),Z)}if(fr(U))return ue(F,D,U,Z);if(me(U))return ce(F,D,U,Z);iu(F,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(a(F,D.sibling),D=f(D,U),D.return=F,F=D):(a(F,D),D=md(U,F.mode,Z),D.return=F,F=D),v(F)):a(F,D)}return it}var io=sm(!0),om=sm(!1),su=ti(null),ou=null,so=null,Rh=null;function Ah(){Rh=so=ou=null}function Ch(r){var s=su.current;Ge(su),r._currentValue=s}function Ph(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function oo(r,s){ou=r,Rh=so=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Qt=!0),r.firstContext=null)}function yn(r){var s=r._currentValue;if(Rh!==r)if(r={context:r,memoizedValue:s,next:null},so===null){if(ou===null)throw Error(t(308));so=r,ou.dependencies={lanes:0,firstContext:r}}else so=so.next=r;return s}var Yi=null;function kh(r){Yi===null?Yi=[r]:Yi.push(r)}function am(r,s,a,c){var f=s.interleaved;return f===null?(a.next=a,kh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Ar(r,c)}function Ar(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ii=!1;function Nh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Cr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function si(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,Ar(r,a)}return f=c.interleaved,f===null?(s.next=s,kh(c)):(s.next=f.next,f.next=s),c.interleaved=s,Ar(r,a)}function au(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Kr(r,a)}}function um(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function lu(r,s,a,c){var f=r.updateQueue;ii=!1;var g=f.firstBaseUpdate,v=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var P=S,z=P.next;P.next=null,v===null?g=z:v.next=z,v=P;var Y=r.alternate;Y!==null&&(Y=Y.updateQueue,S=Y.lastBaseUpdate,S!==v&&(S===null?Y.firstBaseUpdate=z:S.next=z,Y.lastBaseUpdate=P))}if(g!==null){var J=f.baseState;v=0,Y=z=P=null,S=g;do{var Q=S.lane,ie=S.eventTime;if((c&Q)===Q){Y!==null&&(Y=Y.next={eventTime:ie,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ue=r,ce=S;switch(Q=s,ie=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){J=ue.call(ie,J,Q);break e}J=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,Q=typeof ue=="function"?ue.call(ie,J,Q):ue,Q==null)break e;J=se({},J,Q);break e;case 2:ii=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,Q=f.effects,Q===null?f.effects=[S]:Q.push(S))}else ie={eventTime:ie,lane:Q,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Y===null?(z=Y=ie,P=J):Y=Y.next=ie,v|=Q;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;Q=S,S=Q.next,Q.next=null,f.lastBaseUpdate=Q,f.shared.pending=null}}while(!0);if(Y===null&&(P=J),f.baseState=P,f.firstBaseUpdate=z,f.lastBaseUpdate=Y,s=f.shared.interleaved,s!==null){f=s;do v|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);Zi|=v,r.lanes=v,r.memoizedState=J}}function cm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ta={},nr=ti(Ta),Ia=ti(Ta),Sa=ti(Ta);function Xi(r){if(r===Ta)throw Error(t(174));return r}function xh(r,s){switch(He(Sa,s),He(Ia,r),He(nr,Ta),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ht(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ht(s,r)}Ge(nr),He(nr,s)}function ao(){Ge(nr),Ge(Ia),Ge(Sa)}function hm(r){Xi(Sa.current);var s=Xi(nr.current),a=ht(s,r.type);s!==a&&(He(Ia,r),He(nr,a))}function Dh(r){Ia.current===r&&(Ge(nr),Ge(Ia))}var Je=ti(0);function uu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Oh=[];function Lh(){for(var r=0;r<Oh.length;r++)Oh[r]._workInProgressVersionPrimary=null;Oh.length=0}var cu=de.ReactCurrentDispatcher,Vh=de.ReactCurrentBatchConfig,Ji=0,Ze=null,ft=null,vt=null,hu=!1,Ra=!1,Aa=0,$w=0;function Ot(){throw Error(t(321))}function Mh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!On(r[a],s[a]))return!1;return!0}function bh(r,s,a,c,f,g){if(Ji=g,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,cu.current=r===null||r.memoizedState===null?Gw:Kw,r=a(c,f),Ra){g=0;do{if(Ra=!1,Aa=0,25<=g)throw Error(t(301));g+=1,vt=ft=null,s.updateQueue=null,cu.current=Qw,r=a(c,f)}while(Ra)}if(cu.current=pu,s=ft!==null&&ft.next!==null,Ji=0,vt=ft=Ze=null,hu=!1,s)throw Error(t(300));return r}function Fh(){var r=Aa!==0;return Aa=0,r}function rr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Ze.memoizedState=vt=r:vt=vt.next=r,vt}function _n(){if(ft===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=ft.next;var s=vt===null?Ze.memoizedState:vt.next;if(s!==null)vt=s,ft=r;else{if(r===null)throw Error(t(310));ft=r,r={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},vt===null?Ze.memoizedState=vt=r:vt=vt.next=r}return vt}function Ca(r,s){return typeof s=="function"?s(r):s}function Uh(r){var s=_n(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=ft,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var v=f.next;f.next=g.next,g.next=v}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var S=v=null,P=null,z=g;do{var Y=z.lane;if((Ji&Y)===Y)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:r(c,z.action);else{var J={lane:Y,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(S=P=J,v=c):P=P.next=J,Ze.lanes|=Y,Zi|=Y}z=z.next}while(z!==null&&z!==g);P===null?v=c:P.next=S,On(c,s.memoizedState)||(Qt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){f=r;do g=f.lane,Ze.lanes|=g,Zi|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function jh(r){var s=_n(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do g=r(g,v.action),v=v.next;while(v!==f);On(g,s.memoizedState)||(Qt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function dm(){}function fm(r,s){var a=Ze,c=_n(),f=s(),g=!On(c.memoizedState,f);if(g&&(c.memoizedState=f,Qt=!0),c=c.queue,zh(gm.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,Pa(9,mm.bind(null,a,c,f,s),void 0,null),wt===null)throw Error(t(349));Ji&30||pm(a,s,f)}return f}function pm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function mm(r,s,a,c){s.value=a,s.getSnapshot=c,ym(s)&&_m(r)}function gm(r,s,a){return a(function(){ym(s)&&_m(r)})}function ym(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!On(r,a)}catch{return!0}}function _m(r){var s=Ar(r,1);s!==null&&Fn(s,r,1,-1)}function vm(r){var s=rr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:r},s.queue=r,r=r.dispatch=Ww.bind(null,Ze,r),[s.memoizedState,r]}function Pa(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function wm(){return _n().memoizedState}function du(r,s,a,c){var f=rr();Ze.flags|=r,f.memoizedState=Pa(1|s,a,void 0,c===void 0?null:c)}function fu(r,s,a,c){var f=_n();c=c===void 0?null:c;var g=void 0;if(ft!==null){var v=ft.memoizedState;if(g=v.destroy,c!==null&&Mh(c,v.deps)){f.memoizedState=Pa(s,a,g,c);return}}Ze.flags|=r,f.memoizedState=Pa(1|s,a,g,c)}function Em(r,s){return du(8390656,8,r,s)}function zh(r,s){return fu(2048,8,r,s)}function Tm(r,s){return fu(4,2,r,s)}function Im(r,s){return fu(4,4,r,s)}function Sm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Rm(r,s,a){return a=a!=null?a.concat([r]):null,fu(4,4,Sm.bind(null,s,r),a)}function Bh(){}function Am(r,s){var a=_n();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Mh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Cm(r,s){var a=_n();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Mh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Pm(r,s,a){return Ji&21?(On(a,s)||(a=zi(),Ze.lanes|=a,Zi|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Qt=!0),r.memoizedState=a)}function qw(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var c=Vh.transition;Vh.transition={};try{r(!1),s()}finally{Ne=a,Vh.transition=c}}function km(){return _n().memoizedState}function Hw(r,s,a){var c=ui(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Nm(r))xm(s,a);else if(a=am(r,s,a,c),a!==null){var f=qt();Fn(a,r,c,f),Dm(a,s,c)}}function Ww(r,s,a){var c=ui(r),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nm(r))xm(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,S=g(v,a);if(f.hasEagerState=!0,f.eagerState=S,On(S,v)){var P=s.interleaved;P===null?(f.next=f,kh(s)):(f.next=P.next,P.next=f),s.interleaved=f;return}}catch{}finally{}a=am(r,s,f,c),a!==null&&(f=qt(),Fn(a,r,c,f),Dm(a,s,c))}}function Nm(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function xm(r,s){Ra=hu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Dm(r,s,a){if(a&4194240){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Kr(r,a)}}var pu={readContext:yn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},Gw={readContext:yn,useCallback:function(r,s){return rr().memoizedState=[r,s===void 0?null:s],r},useContext:yn,useEffect:Em,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,du(4194308,4,Sm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return du(4194308,4,r,s)},useInsertionEffect:function(r,s){return du(4,2,r,s)},useMemo:function(r,s){var a=rr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=rr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=Hw.bind(null,Ze,r),[c.memoizedState,r]},useRef:function(r){var s=rr();return r={current:r},s.memoizedState=r},useState:vm,useDebugValue:Bh,useDeferredValue:function(r){return rr().memoizedState=r},useTransition:function(){var r=vm(!1),s=r[0];return r=qw.bind(null,r[1]),rr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Ze,f=rr();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),wt===null)throw Error(t(349));Ji&30||pm(c,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Em(gm.bind(null,c,g,r),[r]),c.flags|=2048,Pa(9,mm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=rr(),s=wt.identifierPrefix;if(Ye){var a=Rr,c=Sr;a=(c&~(1<<32-zt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Aa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=$w++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},Kw={readContext:yn,useCallback:Am,useContext:yn,useEffect:zh,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:Im,useMemo:Cm,useReducer:Uh,useRef:wm,useState:function(){return Uh(Ca)},useDebugValue:Bh,useDeferredValue:function(r){var s=_n();return Pm(s,ft.memoizedState,r)},useTransition:function(){var r=Uh(Ca)[0],s=_n().memoizedState;return[r,s]},useMutableSource:dm,useSyncExternalStore:fm,useId:km,unstable_isNewReconciler:!1},Qw={readContext:yn,useCallback:Am,useContext:yn,useEffect:zh,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:Im,useMemo:Cm,useReducer:jh,useRef:wm,useState:function(){return jh(Ca)},useDebugValue:Bh,useDeferredValue:function(r){var s=_n();return ft===null?s.memoizedState=r:Pm(s,ft.memoizedState,r)},useTransition:function(){var r=jh(Ca)[0],s=_n().memoizedState;return[r,s]},useMutableSource:dm,useSyncExternalStore:fm,useId:km,unstable_isNewReconciler:!1};function Vn(r,s){if(r&&r.defaultProps){s=se({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function $h(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:se({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var mu={isMounted:function(r){return(r=r._reactInternals)?An(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=qt(),f=ui(r),g=Cr(c,f);g.payload=s,a!=null&&(g.callback=a),s=si(r,g,f),s!==null&&(Fn(s,r,f,c),au(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=qt(),f=ui(r),g=Cr(c,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=si(r,g,f),s!==null&&(Fn(s,r,f,c),au(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=qt(),c=ui(r),f=Cr(a,c);f.tag=2,s!=null&&(f.callback=s),s=si(r,f,c),s!==null&&(Fn(s,r,c,a),au(s,r,c))}};function Om(r,s,a,c,f,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!pa(a,c)||!pa(f,g):!0}function Lm(r,s,a){var c=!1,f=ni,g=s.contextType;return typeof g=="object"&&g!==null?g=yn(g):(f=Kt(s)?Gi:Dt.current,c=s.contextTypes,g=(c=c!=null)?eo(r,f):ni),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=mu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Vm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&mu.enqueueReplaceState(s,s.state,null)}function qh(r,s,a,c){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Nh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=yn(g):(g=Kt(s)?Gi:Dt.current,f.context=eo(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&($h(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&mu.enqueueReplaceState(f,f.state,null),lu(r,a,f,c),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function lo(r,s){try{var a="",c=s;do a+=Ae(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function Hh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Wh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Yw=typeof WeakMap=="function"?WeakMap:Map;function Mm(r,s,a){a=Cr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Tu||(Tu=!0,ad=c),Wh(r,s)},a}function bm(r,s,a){a=Cr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;a.payload=function(){return c(f)},a.callback=function(){Wh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Wh(r,s),typeof c!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Fm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new Yw;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(a)||(f.add(a),r=cE.bind(null,r,s,a),s.then(r,r))}function Um(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function jm(r,s,a,c,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Cr(-1,1),s.tag=2,si(a,s,1))),a.lanes|=1),r)}var Xw=de.ReactCurrentOwner,Qt=!1;function $t(r,s,a,c){s.child=r===null?om(s,null,a,c):io(s,r.child,a,c)}function zm(r,s,a,c,f){a=a.render;var g=s.ref;return oo(s,f),c=bh(r,s,a,c,g,f),a=Fh(),r!==null&&!Qt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Pr(r,s,f)):(Ye&&a&&wh(s),s.flags|=1,$t(r,s,c,f),s.child)}function Bm(r,s,a,c,f){if(r===null){var g=a.type;return typeof g=="function"&&!pd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,$m(r,s,g,c,f)):(r=Pu(a.type,null,c,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:pa,a(v,c)&&r.ref===s.ref)return Pr(r,s,f)}return s.flags|=1,r=hi(g,c),r.ref=s.ref,r.return=s,s.child=r}function $m(r,s,a,c,f){if(r!==null){var g=r.memoizedProps;if(pa(g,c)&&r.ref===s.ref)if(Qt=!1,s.pendingProps=c=g,(r.lanes&f)!==0)r.flags&131072&&(Qt=!0);else return s.lanes=r.lanes,Pr(r,s,f)}return Gh(r,s,a,c,f)}function qm(r,s,a){var c=s.pendingProps,f=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(co,un),un|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,He(co,un),un|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,He(co,un),un|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,He(co,un),un|=c;return $t(r,s,f,a),s.child}function Hm(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Gh(r,s,a,c,f){var g=Kt(a)?Gi:Dt.current;return g=eo(s,g),oo(s,f),a=bh(r,s,a,c,g,f),c=Fh(),r!==null&&!Qt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Pr(r,s,f)):(Ye&&c&&wh(s),s.flags|=1,$t(r,s,a,f),s.child)}function Wm(r,s,a,c,f){if(Kt(a)){var g=!0;Zl(s)}else g=!1;if(oo(s,f),s.stateNode===null)yu(r,s),Lm(s,a,c),qh(s,a,c,f),c=!0;else if(r===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var P=v.context,z=a.contextType;typeof z=="object"&&z!==null?z=yn(z):(z=Kt(a)?Gi:Dt.current,z=eo(s,z));var Y=a.getDerivedStateFromProps,J=typeof Y=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==z)&&Vm(s,v,c,z),ii=!1;var Q=s.memoizedState;v.state=Q,lu(s,c,v,f),P=s.memoizedState,S!==c||Q!==P||Gt.current||ii?(typeof Y=="function"&&($h(s,a,Y,c),P=s.memoizedState),(S=ii||Om(s,a,S,c,Q,P,z))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=z,c=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,lm(r,s),S=s.memoizedProps,z=s.type===s.elementType?S:Vn(s.type,S),v.props=z,J=s.pendingProps,Q=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=yn(P):(P=Kt(a)?Gi:Dt.current,P=eo(s,P));var ie=a.getDerivedStateFromProps;(Y=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==J||Q!==P)&&Vm(s,v,c,P),ii=!1,Q=s.memoizedState,v.state=Q,lu(s,c,v,f);var ue=s.memoizedState;S!==J||Q!==ue||Gt.current||ii?(typeof ie=="function"&&($h(s,a,ie,c),ue=s.memoizedState),(z=ii||Om(s,a,z,c,Q,ue,P)||!1)?(Y||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=P,c=z):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),c=!1)}return Kh(r,s,a,c,g,f)}function Kh(r,s,a,c,f,g){Hm(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return f&&Xp(s,a,!1),Pr(r,s,g);c=s.stateNode,Xw.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=io(s,r.child,null,g),s.child=io(s,null,S,g)):$t(r,s,S,g),s.memoizedState=c.state,f&&Xp(s,a,!0),s.child}function Gm(r){var s=r.stateNode;s.pendingContext?Qp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Qp(r,s.context,!1),xh(r,s.containerInfo)}function Km(r,s,a,c,f){return ro(),Sh(f),s.flags|=256,$t(r,s,a,c),s.child}var Qh={dehydrated:null,treeContext:null,retryLane:0};function Yh(r){return{baseLanes:r,cachePool:null,transitions:null}}function Qm(r,s,a){var c=s.pendingProps,f=Je.current,g=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=r!==null&&r.memoizedState===null?!1:(f&2)!==0),S?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),He(Je,f&1),r===null)return Ih(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=ku(v,c,0,null),r=rs(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Yh(a),s.memoizedState=Qh,r):Xh(s,v));if(f=r.memoizedState,f!==null&&(S=f.dehydrated,S!==null))return Jw(r,s,v,c,S,f,a);if(g){g=c.fallback,v=s.mode,f=r.child,S=f.sibling;var P={mode:"hidden",children:c.children};return!(v&1)&&s.child!==f?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=hi(f,P),c.subtreeFlags=f.subtreeFlags&14680064),S!==null?g=hi(S,g):(g=rs(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?Yh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=Qh,c}return g=r.child,r=g.sibling,c=hi(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Xh(r,s){return s=ku({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function gu(r,s,a,c){return c!==null&&Sh(c),io(s,r.child,null,a),r=Xh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function Jw(r,s,a,c,f,g,v){if(a)return s.flags&256?(s.flags&=-257,c=Hh(Error(t(422))),gu(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,f=s.mode,c=ku({mode:"visible",children:c.children},f,0,null),g=rs(g,f,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&io(s,r.child,null,v),s.child.memoizedState=Yh(v),s.memoizedState=Qh,g);if(!(s.mode&1))return gu(r,s,v,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var S=c.dgst;return c=S,g=Error(t(419)),c=Hh(g,c,void 0),gu(r,s,v,c)}if(S=(v&r.childLanes)!==0,Qt||S){if(c=wt,c!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|v)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ar(r,f),Fn(c,r,f,-1))}return fd(),c=Hh(Error(t(421))),gu(r,s,v,c)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=hE.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,ln=ei(f.nextSibling),an=s,Ye=!0,Ln=null,r!==null&&(mn[gn++]=Sr,mn[gn++]=Rr,mn[gn++]=Ki,Sr=r.id,Rr=r.overflow,Ki=s),s=Xh(s,c.children),s.flags|=4096,s)}function Ym(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Ph(r.return,s,a)}function Jh(r,s,a,c,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function Xm(r,s,a){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if($t(r,s,c.children,a),c=Je.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Ym(r,a,s);else if(r.tag===19)Ym(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(He(Je,c),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&uu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Jh(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&uu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}Jh(s,!0,a,null,g);break;case"together":Jh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function yu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Pr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Zi|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=hi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=hi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function Zw(r,s,a){switch(s.tag){case 3:Gm(s),ro();break;case 5:hm(s);break;case 1:Kt(s.type)&&Zl(s);break;case 4:xh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,f=s.memoizedProps.value;He(su,c._currentValue),c._currentValue=f;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(He(Je,Je.current&1),s.flags|=128,null):a&s.child.childLanes?Qm(r,s,a):(He(Je,Je.current&1),r=Pr(r,s,a),r!==null?r.sibling:null);He(Je,Je.current&1);break;case 19:if(c=(a&s.childLanes)!==0,r.flags&128){if(c)return Xm(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),He(Je,Je.current),c)break;return null;case 22:case 23:return s.lanes=0,qm(r,s,a)}return Pr(r,s,a)}var Jm,Zh,Zm,eg;Jm=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Zh=function(){},Zm=function(r,s,a,c){var f=r.memoizedProps;if(f!==c){r=s.stateNode,Xi(nr.current);var g=null;switch(a){case"input":f=Ni(r,f),c=Ni(r,c),g=[];break;case"select":f=se({},f,{value:void 0}),c=se({},c,{value:void 0}),g=[];break;case"textarea":f=$o(r,f),c=$o(r,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=Yl)}Qo(a,c);var v;a=null;for(z in f)if(!c.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var S=f[z];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in c){var P=c[z];if(S=f!=null?f[z]:void 0,c.hasOwnProperty(z)&&P!==S&&(P!=null||S!=null))if(z==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(g||(g=[]),g.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(g=g||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&We("scroll",r),g||S===P||(g=[])):(g=g||[]).push(z,P))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},eg=function(r,s,a,c){a!==c&&(s.flags|=4)};function ka(r,s){if(!Ye)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Lt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function eE(r,s,a){var c=s.pendingProps;switch(Eh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(s),null;case 1:return Kt(s.type)&&Jl(),Lt(s),null;case 3:return c=s.stateNode,ao(),Ge(Gt),Ge(Dt),Lh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(ru(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Ln!==null&&(cd(Ln),Ln=null))),Zh(r,s),Lt(s),null;case 5:Dh(s);var f=Xi(Sa.current);if(a=s.type,r!==null&&s.stateNode!=null)Zm(r,s,a,c,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Lt(s),null}if(r=Xi(nr.current),ru(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[tr]=s,c[va]=g,r=(s.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(f=0;f<ga.length;f++)We(ga[f],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":Ts(c,g),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},We("invalid",c);break;case"textarea":Ss(c,g),We("invalid",c)}Qo(a,g),f=null;for(var v in g)if(g.hasOwnProperty(v)){var S=g[v];v==="children"?typeof S=="string"?c.textContent!==S&&(g.suppressHydrationWarning!==!0&&Ql(c.textContent,S,r),f=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(g.suppressHydrationWarning!==!0&&Ql(c.textContent,S,r),f=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":dr(c),El(c,g,!0);break;case"textarea":dr(c),qo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Yl)}c=f,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ct(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[tr]=s,r[va]=c,Jm(r,s,!1,!1),s.stateNode=r;e:{switch(v=Yo(a,c),a){case"dialog":We("cancel",r),We("close",r),f=c;break;case"iframe":case"object":case"embed":We("load",r),f=c;break;case"video":case"audio":for(f=0;f<ga.length;f++)We(ga[f],r);f=c;break;case"source":We("error",r),f=c;break;case"img":case"image":case"link":We("error",r),We("load",r),f=c;break;case"details":We("toggle",r),f=c;break;case"input":Ts(r,c),f=Ni(r,c),We("invalid",r);break;case"option":f=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},f=se({},c,{value:void 0}),We("invalid",r);break;case"textarea":Ss(r,c),f=$o(r,c),We("invalid",r);break;default:f=c}Qo(a,f),S=f;for(g in S)if(S.hasOwnProperty(g)){var P=S[g];g==="style"?Go(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Ho(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&$r(r,P):typeof P=="number"&&$r(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&We("scroll",r):P!=null&&re(r,g,P,v))}switch(a){case"input":dr(r),El(r,c,!1);break;case"textarea":dr(r),qo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Fe(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?pr(r,!!c.multiple,g,!1):c.defaultValue!=null&&pr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Yl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Lt(s),null;case 6:if(r&&s.stateNode!=null)eg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=Xi(Sa.current),Xi(nr.current),ru(s)){if(c=s.stateNode,a=s.memoizedProps,c[tr]=s,(g=c.nodeValue!==a)&&(r=an,r!==null))switch(r.tag){case 3:Ql(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Ql(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[tr]=s,s.stateNode=c}return Lt(s),null;case 13:if(Ge(Je),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ye&&ln!==null&&s.mode&1&&!(s.flags&128))rm(),ro(),s.flags|=98560,g=!1;else if(g=ru(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[tr]=s}else ro(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Lt(s),g=!1}else Ln!==null&&(cd(Ln),Ln=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(r===null||Je.current&1?pt===0&&(pt=3):fd())),s.updateQueue!==null&&(s.flags|=4),Lt(s),null);case 4:return ao(),Zh(r,s),r===null&&ya(s.stateNode.containerInfo),Lt(s),null;case 10:return Ch(s.type._context),Lt(s),null;case 17:return Kt(s.type)&&Jl(),Lt(s),null;case 19:if(Ge(Je),g=s.memoizedState,g===null)return Lt(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)ka(g,!1);else{if(pt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(v=uu(r),v!==null){for(s.flags|=128,ka(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>ho&&(s.flags|=128,c=!0,ka(g,!1),s.lanes=4194304)}else{if(!c)if(r=uu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),ka(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Ye)return Lt(s),null}else 2*qe()-g.renderingStartTime>ho&&a!==1073741824&&(s.flags|=128,c=!0,ka(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,a=Je.current,He(Je,c?a&1|2:a&1),s):(Lt(s),null);case 22:case 23:return dd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?un&1073741824&&(Lt(s),s.subtreeFlags&6&&(s.flags|=8192)):Lt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function tE(r,s){switch(Eh(s),s.tag){case 1:return Kt(s.type)&&Jl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return ao(),Ge(Gt),Ge(Dt),Lh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Dh(s),null;case 13:if(Ge(Je),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ro()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Je),null;case 4:return ao(),null;case 10:return Ch(s.type._context),null;case 22:case 23:return dd(),null;case 24:return null;default:return null}}var _u=!1,Vt=!1,nE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function uo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(r,s,c)}else a.current=null}function ed(r,s,a){try{a()}catch(c){tt(r,s,c)}}var tg=!1;function rE(r,s){if(dh=Xr,r=Op(),ih(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,z=0,Y=0,J=r,Q=null;t:for(;;){for(var ie;J!==a||f!==0&&J.nodeType!==3||(S=v+f),J!==g||c!==0&&J.nodeType!==3||(P=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(ie=J.firstChild)!==null;)Q=J,J=ie;for(;;){if(J===r)break t;if(Q===a&&++z===f&&(S=v),Q===g&&++Y===c&&(P=v),(ie=J.nextSibling)!==null)break;J=Q,Q=J.parentNode}J=ie}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(fh={focusedElem:r,selectionRange:a},Xr=!1,ae=s;ae!==null;)if(s=ae,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ae=r;else for(;ae!==null;){s=ae;try{var ue=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,it=ue.memoizedState,F=s.stateNode,D=F.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Vn(s.type,ce),it);F.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=s.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){tt(s,s.return,Z)}if(r=s.sibling,r!==null){r.return=s.return,ae=r;break}ae=s.return}return ue=tg,tg=!1,ue}function Na(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&ed(s,a,g)}f=f.next}while(f!==c)}}function vu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function td(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function ng(r){var s=r.alternate;s!==null&&(r.alternate=null,ng(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[tr],delete s[va],delete s[yh],delete s[Uw],delete s[jw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function rg(r){return r.tag===5||r.tag===3||r.tag===4}function ig(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||rg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function nd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Yl));else if(c!==4&&(r=r.child,r!==null))for(nd(r,s,a),r=r.sibling;r!==null;)nd(r,s,a),r=r.sibling}function rd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(rd(r,s,a),r=r.sibling;r!==null;)rd(r,s,a),r=r.sibling}var Rt=null,Mn=!1;function oi(r,s,a){for(a=a.child;a!==null;)sg(r,s,a),a=a.sibling}function sg(r,s,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Ui,a)}catch{}switch(a.tag){case 5:Vt||uo(a,s);case 6:var c=Rt,f=Mn;Rt=null,oi(r,s,a),Rt=c,Mn=f,Rt!==null&&(Mn?(r=Rt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Mn?(r=Rt,a=a.stateNode,r.nodeType===8?gh(r.parentNode,a):r.nodeType===1&&gh(r,a),xn(r)):gh(Rt,a.stateNode));break;case 4:c=Rt,f=Mn,Rt=a.stateNode.containerInfo,Mn=!0,oi(r,s,a),Rt=c,Mn=f;break;case 0:case 11:case 14:case 15:if(!Vt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&ed(a,s,v),f=f.next}while(f!==c)}oi(r,s,a);break;case 1:if(!Vt&&(uo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){tt(a,s,S)}oi(r,s,a);break;case 21:oi(r,s,a);break;case 22:a.mode&1?(Vt=(c=Vt)||a.memoizedState!==null,oi(r,s,a),Vt=c):oi(r,s,a);break;default:oi(r,s,a)}}function og(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new nE),s.forEach(function(c){var f=dE.bind(null,r,c);a.has(c)||(a.add(c),c.then(f,f))})}}function bn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=r,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Rt=S.stateNode,Mn=!1;break e;case 3:Rt=S.stateNode.containerInfo,Mn=!0;break e;case 4:Rt=S.stateNode.containerInfo,Mn=!0;break e}S=S.return}if(Rt===null)throw Error(t(160));sg(g,v,f),Rt=null,Mn=!1;var P=f.alternate;P!==null&&(P.return=null),f.return=null}catch(z){tt(f,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ag(s,r),s=s.sibling}function ag(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(bn(s,r),ir(r),c&4){try{Na(3,r,r.return),vu(3,r)}catch(ce){tt(r,r.return,ce)}try{Na(5,r,r.return)}catch(ce){tt(r,r.return,ce)}}break;case 1:bn(s,r),ir(r),c&512&&a!==null&&uo(a,a.return);break;case 5:if(bn(s,r),ir(r),c&512&&a!==null&&uo(a,a.return),r.flags&32){var f=r.stateNode;try{$r(f,"")}catch(ce){tt(r,r.return,ce)}}if(c&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,S=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{S==="input"&&g.type==="radio"&&g.name!=null&&zo(f,g),Yo(S,v);var z=Yo(S,g);for(v=0;v<P.length;v+=2){var Y=P[v],J=P[v+1];Y==="style"?Go(f,J):Y==="dangerouslySetInnerHTML"?Ho(f,J):Y==="children"?$r(f,J):re(f,Y,J,z)}switch(S){case"input":Bo(f,g);break;case"textarea":Rs(f,g);break;case"select":var Q=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ie=g.value;ie!=null?pr(f,!!g.multiple,ie,!1):Q!==!!g.multiple&&(g.defaultValue!=null?pr(f,!!g.multiple,g.defaultValue,!0):pr(f,!!g.multiple,g.multiple?[]:"",!1))}f[va]=g}catch(ce){tt(r,r.return,ce)}}break;case 6:if(bn(s,r),ir(r),c&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(ce){tt(r,r.return,ce)}}break;case 3:if(bn(s,r),ir(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{xn(s.containerInfo)}catch(ce){tt(r,r.return,ce)}break;case 4:bn(s,r),ir(r);break;case 13:bn(s,r),ir(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(od=qe())),c&4&&og(r);break;case 22:if(Y=a!==null&&a.memoizedState!==null,r.mode&1?(Vt=(z=Vt)||Y,bn(s,r),Vt=z):bn(s,r),ir(r),c&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!Y&&r.mode&1)for(ae=r,Y=r.child;Y!==null;){for(J=ae=Y;ae!==null;){switch(Q=ae,ie=Q.child,Q.tag){case 0:case 11:case 14:case 15:Na(4,Q,Q.return);break;case 1:uo(Q,Q.return);var ue=Q.stateNode;if(typeof ue.componentWillUnmount=="function"){c=Q,a=Q.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){tt(c,a,ce)}}break;case 5:uo(Q,Q.return);break;case 22:if(Q.memoizedState!==null){cg(J);continue}}ie!==null?(ie.return=Q,ae=ie):cg(J)}Y=Y.sibling}e:for(Y=null,J=r;;){if(J.tag===5){if(Y===null){Y=J;try{f=J.stateNode,z?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(S=J.stateNode,P=J.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=Wo("display",v))}catch(ce){tt(r,r.return,ce)}}}else if(J.tag===6){if(Y===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(ce){tt(r,r.return,ce)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;Y===J&&(Y=null),J=J.return}Y===J&&(Y=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:bn(s,r),ir(r),c&4&&og(r);break;case 21:break;default:bn(s,r),ir(r)}}function ir(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(rg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&($r(f,""),c.flags&=-33);var g=ig(r);rd(r,g,f);break;case 3:case 4:var v=c.stateNode.containerInfo,S=ig(r);nd(r,S,v);break;default:throw Error(t(161))}}catch(P){tt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function iE(r,s,a){ae=r,lg(r)}function lg(r,s,a){for(var c=(r.mode&1)!==0;ae!==null;){var f=ae,g=f.child;if(f.tag===22&&c){var v=f.memoizedState!==null||_u;if(!v){var S=f.alternate,P=S!==null&&S.memoizedState!==null||Vt;S=_u;var z=Vt;if(_u=v,(Vt=P)&&!z)for(ae=f;ae!==null;)v=ae,P=v.child,v.tag===22&&v.memoizedState!==null?hg(f):P!==null?(P.return=v,ae=P):hg(f);for(;g!==null;)ae=g,lg(g),g=g.sibling;ae=f,_u=S,Vt=z}ug(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,ae=g):ug(r)}}function ug(r){for(;ae!==null;){var s=ae;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Vt||vu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Vt)if(a===null)c.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Vn(s.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&cm(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}cm(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var Y=z.memoizedState;if(Y!==null){var J=Y.dehydrated;J!==null&&xn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vt||s.flags&512&&td(s)}catch(Q){tt(s,s.return,Q)}}if(s===r){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function cg(r){for(;ae!==null;){var s=ae;if(s===r){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function hg(r){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{vu(4,s)}catch(P){tt(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var f=s.return;try{c.componentDidMount()}catch(P){tt(s,f,P)}}var g=s.return;try{td(s)}catch(P){tt(s,g,P)}break;case 5:var v=s.return;try{td(s)}catch(P){tt(s,v,P)}}}catch(P){tt(s,s.return,P)}if(s===r){ae=null;break}var S=s.sibling;if(S!==null){S.return=s.return,ae=S;break}ae=s.return}}var sE=Math.ceil,wu=de.ReactCurrentDispatcher,id=de.ReactCurrentOwner,vn=de.ReactCurrentBatchConfig,Ve=0,wt=null,at=null,At=0,un=0,co=ti(0),pt=0,xa=null,Zi=0,Eu=0,sd=0,Da=null,Yt=null,od=0,ho=1/0,kr=null,Tu=!1,ad=null,ai=null,Iu=!1,li=null,Su=0,Oa=0,ld=null,Ru=-1,Au=0;function qt(){return Ve&6?qe():Ru!==-1?Ru:Ru=qe()}function ui(r){return r.mode&1?Ve&2&&At!==0?At&-At:Bw.transition!==null?(Au===0&&(Au=zi()),Au):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:aa(r.type)),r):1}function Fn(r,s,a,c){if(50<Oa)throw Oa=0,ld=null,Error(t(185));Gr(r,a,c),(!(Ve&2)||r!==wt)&&(r===wt&&(!(Ve&2)&&(Eu|=a),pt===4&&ci(r,At)),Xt(r,c),a===1&&Ve===0&&!(s.mode&1)&&(ho=qe()+500,eu&&ri()))}function Xt(r,s){var a=r.callbackNode;yr(r,s);var c=ji(r,r===wt?At:0);if(c===0)a!==null&&na(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&na(a),s===1)r.tag===0?zw(fg.bind(null,r)):Jp(fg.bind(null,r)),bw(function(){!(Ve&6)&&ri()}),a=null;else{switch(Qr(c)){case 1:a=Fi;break;case 4:a=qr;break;case 16:a=dn;break;case 536870912:a=Al;break;default:a=dn}a=Eg(a,dg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function dg(r,s){if(Ru=-1,Au=0,Ve&6)throw Error(t(327));var a=r.callbackNode;if(fo()&&r.callbackNode!==a)return null;var c=ji(r,r===wt?At:0);if(c===0)return null;if(c&30||c&r.expiredLanes||s)s=Cu(r,c);else{s=c;var f=Ve;Ve|=2;var g=mg();(wt!==r||At!==s)&&(kr=null,ho=qe()+500,ts(r,s));do try{lE();break}catch(S){pg(r,S)}while(!0);Ah(),wu.current=g,Ve=f,at!==null?s=0:(wt=null,At=0,s=pt)}if(s!==0){if(s===2&&(f=rn(r),f!==0&&(c=f,s=ud(r,f))),s===1)throw a=xa,ts(r,0),ci(r,c),Xt(r,qe()),a;if(s===6)ci(r,c);else{if(f=r.current.alternate,!(c&30)&&!oE(f)&&(s=Cu(r,c),s===2&&(g=rn(r),g!==0&&(c=g,s=ud(r,g))),s===1))throw a=xa,ts(r,0),ci(r,c),Xt(r,qe()),a;switch(r.finishedWork=f,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ns(r,Yt,kr);break;case 3:if(ci(r,c),(c&130023424)===c&&(s=od+500-qe(),10<s)){if(ji(r,0)!==0)break;if(f=r.suspendedLanes,(f&c)!==c){qt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=mh(ns.bind(null,r,Yt,kr),s);break}ns(r,Yt,kr);break;case 4:if(ci(r,c),(c&4194240)===c)break;for(s=r.eventTimes,f=-1;0<c;){var v=31-zt(c);g=1<<v,v=s[v],v>f&&(f=v),c&=~g}if(c=f,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*sE(c/1960))-c,10<c){r.timeoutHandle=mh(ns.bind(null,r,Yt,kr),c);break}ns(r,Yt,kr);break;case 5:ns(r,Yt,kr);break;default:throw Error(t(329))}}}return Xt(r,qe()),r.callbackNode===a?dg.bind(null,r):null}function ud(r,s){var a=Da;return r.current.memoizedState.isDehydrated&&(ts(r,s).flags|=256),r=Cu(r,s),r!==2&&(s=Yt,Yt=a,s!==null&&cd(s)),r}function cd(r){Yt===null?Yt=r:Yt.push.apply(Yt,r)}function oE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!On(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ci(r,s){for(s&=~sd,s&=~Eu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-zt(s),c=1<<a;r[a]=-1,s&=~c}}function fg(r){if(Ve&6)throw Error(t(327));fo();var s=ji(r,0);if(!(s&1))return Xt(r,qe()),null;var a=Cu(r,s);if(r.tag!==0&&a===2){var c=rn(r);c!==0&&(s=c,a=ud(r,c))}if(a===1)throw a=xa,ts(r,0),ci(r,s),Xt(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ns(r,Yt,kr),Xt(r,qe()),null}function hd(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(ho=qe()+500,eu&&ri())}}function es(r){li!==null&&li.tag===0&&!(Ve&6)&&fo();var s=Ve;Ve|=1;var a=vn.transition,c=Ne;try{if(vn.transition=null,Ne=1,r)return r()}finally{Ne=c,vn.transition=a,Ve=s,!(Ve&6)&&ri()}}function dd(){un=co.current,Ge(co)}function ts(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,Mw(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(Eh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Jl();break;case 3:ao(),Ge(Gt),Ge(Dt),Lh();break;case 5:Dh(c);break;case 4:ao();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:Ch(c.type._context);break;case 22:case 23:dd()}a=a.return}if(wt=r,at=r=hi(r.current,null),At=un=s,pt=0,xa=null,sd=Eu=Zi=0,Yt=Da=null,Yi!==null){for(s=0;s<Yi.length;s++)if(a=Yi[s],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=f,c.next=v}a.pending=c}Yi=null}return r}function pg(r,s){do{var a=at;try{if(Ah(),cu.current=pu,hu){for(var c=Ze.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}hu=!1}if(Ji=0,vt=ft=Ze=null,Ra=!1,Aa=0,id.current=null,a===null||a.return===null){pt=1,xa=s,at=null;break}e:{var g=r,v=a.return,S=a,P=s;if(s=At,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,Y=S,J=Y.tag;if(!(Y.mode&1)&&(J===0||J===11||J===15)){var Q=Y.alternate;Q?(Y.updateQueue=Q.updateQueue,Y.memoizedState=Q.memoizedState,Y.lanes=Q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var ie=Um(v);if(ie!==null){ie.flags&=-257,jm(ie,v,S,g,s),ie.mode&1&&Fm(g,z,s),s=ie,P=z;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(P),s.updateQueue=ce}else ue.add(P);break e}else{if(!(s&1)){Fm(g,z,s),fd();break e}P=Error(t(426))}}else if(Ye&&S.mode&1){var it=Um(v);if(it!==null){!(it.flags&65536)&&(it.flags|=256),jm(it,v,S,g,s),Sh(lo(P,S));break e}}g=P=lo(P,S),pt!==4&&(pt=2),Da===null?Da=[g]:Da.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=Mm(g,P,s);um(g,F);break e;case 1:S=P;var D=g.type,U=g.stateNode;if(!(g.flags&128)&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(ai===null||!ai.has(U)))){g.flags|=65536,s&=-s,g.lanes|=s;var Z=bm(g,S,s);um(g,Z);break e}}g=g.return}while(g!==null)}yg(a)}catch(he){s=he,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function mg(){var r=wu.current;return wu.current=pu,r===null?pu:r}function fd(){(pt===0||pt===3||pt===2)&&(pt=4),wt===null||!(Zi&268435455)&&!(Eu&268435455)||ci(wt,At)}function Cu(r,s){var a=Ve;Ve|=2;var c=mg();(wt!==r||At!==s)&&(kr=null,ts(r,s));do try{aE();break}catch(f){pg(r,f)}while(!0);if(Ah(),Ve=a,wu.current=c,at!==null)throw Error(t(261));return wt=null,At=0,pt}function aE(){for(;at!==null;)gg(at)}function lE(){for(;at!==null&&!Sl();)gg(at)}function gg(r){var s=wg(r.alternate,r,un);r.memoizedProps=r.pendingProps,s===null?yg(r):at=s,id.current=null}function yg(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=tE(a,s),a!==null){a.flags&=32767,at=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{pt=6,at=null;return}}else if(a=eE(a,s,un),a!==null){at=a;return}if(s=s.sibling,s!==null){at=s;return}at=s=r}while(s!==null);pt===0&&(pt=5)}function ns(r,s,a){var c=Ne,f=vn.transition;try{vn.transition=null,Ne=1,uE(r,s,a,c)}finally{vn.transition=f,Ne=c}return null}function uE(r,s,a,c){do fo();while(li!==null);if(Ve&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(Be(r,g),r===wt&&(at=wt=null,At=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Iu||(Iu=!0,Eg(dn,function(){return fo(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=vn.transition,vn.transition=null;var v=Ne;Ne=1;var S=Ve;Ve|=4,id.current=null,rE(r,a),ag(a,r),kw(fh),Xr=!!dh,fh=dh=null,r.current=a,iE(a),Yc(),Ve=S,Ne=v,vn.transition=g}else r.current=a;if(Iu&&(Iu=!1,li=r,Su=f),g=r.pendingLanes,g===0&&(ai=null),Cl(a.stateNode),Xt(r,qe()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Tu)throw Tu=!1,r=ad,ad=null,r;return Su&1&&r.tag!==0&&fo(),g=r.pendingLanes,g&1?r===ld?Oa++:(Oa=0,ld=r):Oa=0,ri(),null}function fo(){if(li!==null){var r=Qr(Su),s=vn.transition,a=Ne;try{if(vn.transition=null,Ne=16>r?16:r,li===null)var c=!1;else{if(r=li,li=null,Su=0,Ve&6)throw Error(t(331));var f=Ve;for(Ve|=4,ae=r.current;ae!==null;){var g=ae,v=g.child;if(ae.flags&16){var S=g.deletions;if(S!==null){for(var P=0;P<S.length;P++){var z=S[P];for(ae=z;ae!==null;){var Y=ae;switch(Y.tag){case 0:case 11:case 15:Na(8,Y,g)}var J=Y.child;if(J!==null)J.return=Y,ae=J;else for(;ae!==null;){Y=ae;var Q=Y.sibling,ie=Y.return;if(ng(Y),Y===z){ae=null;break}if(Q!==null){Q.return=ie,ae=Q;break}ae=ie}}}var ue=g.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var it=ce.sibling;ce.sibling=null,ce=it}while(ce!==null)}}ae=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,ae=v;else e:for(;ae!==null;){if(g=ae,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Na(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,ae=F;break e}ae=g.return}}var D=r.current;for(ae=D;ae!==null;){v=ae;var U=v.child;if(v.subtreeFlags&2064&&U!==null)U.return=v,ae=U;else e:for(v=D;ae!==null;){if(S=ae,S.flags&2048)try{switch(S.tag){case 0:case 11:case 15:vu(9,S)}}catch(he){tt(S,S.return,he)}if(S===v){ae=null;break e}var Z=S.sibling;if(Z!==null){Z.return=S.return,ae=Z;break e}ae=S.return}}if(Ve=f,ri(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Ui,r)}catch{}c=!0}return c}finally{Ne=a,vn.transition=s}}return!1}function _g(r,s,a){s=lo(a,s),s=Mm(r,s,1),r=si(r,s,1),s=qt(),r!==null&&(Gr(r,1,s),Xt(r,s))}function tt(r,s,a){if(r.tag===3)_g(r,r,a);else for(;s!==null;){if(s.tag===3){_g(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ai===null||!ai.has(c))){r=lo(a,r),r=bm(s,r,1),s=si(s,r,1),r=qt(),s!==null&&(Gr(s,1,r),Xt(s,r));break}}s=s.return}}function cE(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=qt(),r.pingedLanes|=r.suspendedLanes&a,wt===r&&(At&a)===a&&(pt===4||pt===3&&(At&130023424)===At&&500>qe()-od?ts(r,0):sd|=a),Xt(r,s)}function vg(r,s){s===0&&(r.mode&1?(s=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):s=1);var a=qt();r=Ar(r,s),r!==null&&(Gr(r,s,a),Xt(r,a))}function hE(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),vg(r,a)}function dE(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),vg(r,a)}var wg;wg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Gt.current)Qt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Qt=!1,Zw(r,s,a);Qt=!!(r.flags&131072)}else Qt=!1,Ye&&s.flags&1048576&&Zp(s,nu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;yu(r,s),r=s.pendingProps;var f=eo(s,Dt.current);oo(s,a),f=bh(null,s,c,r,f,a);var g=Fh();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Kt(c)?(g=!0,Zl(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Nh(s),f.updater=mu,s.stateNode=f,f._reactInternals=s,qh(s,c,r,a),s=Kh(null,s,c,!0,g,a)):(s.tag=0,Ye&&g&&wh(s),$t(null,s,f,a),s=s.child),s;case 16:c=s.elementType;e:{switch(yu(r,s),r=s.pendingProps,f=c._init,c=f(c._payload),s.type=c,f=s.tag=pE(c),r=Vn(c,r),f){case 0:s=Gh(null,s,c,r,a);break e;case 1:s=Wm(null,s,c,r,a);break e;case 11:s=zm(null,s,c,r,a);break e;case 14:s=Bm(null,s,c,Vn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Vn(c,f),Gh(r,s,c,f,a);case 1:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Vn(c,f),Wm(r,s,c,f,a);case 3:e:{if(Gm(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,f=g.element,lm(r,s),lu(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=lo(Error(t(423)),s),s=Km(r,s,c,a,f);break e}else if(c!==f){f=lo(Error(t(424)),s),s=Km(r,s,c,a,f);break e}else for(ln=ei(s.stateNode.containerInfo.firstChild),an=s,Ye=!0,Ln=null,a=om(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ro(),c===f){s=Pr(r,s,a);break e}$t(r,s,c,a)}s=s.child}return s;case 5:return hm(s),r===null&&Ih(s),c=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,v=f.children,ph(c,f)?v=null:g!==null&&ph(c,g)&&(s.flags|=32),Hm(r,s),$t(r,s,v,a),s.child;case 6:return r===null&&Ih(s),null;case 13:return Qm(r,s,a);case 4:return xh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=io(s,null,c,a):$t(r,s,c,a),s.child;case 11:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Vn(c,f),zm(r,s,c,f,a);case 7:return $t(r,s,s.pendingProps,a),s.child;case 8:return $t(r,s,s.pendingProps.children,a),s.child;case 12:return $t(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,f=s.pendingProps,g=s.memoizedProps,v=f.value,He(su,c._currentValue),c._currentValue=v,g!==null)if(On(g.value,v)){if(g.children===f.children&&!Gt.current){s=Pr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var S=g.dependencies;if(S!==null){v=g.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=Cr(-1,a&-a),P.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var Y=z.pending;Y===null?P.next=P:(P.next=Y.next,Y.next=P),z.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Ph(g.return,a,s),S.lanes|=a;break}P=P.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),Ph(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}$t(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,c=s.pendingProps.children,oo(s,a),f=yn(f),c=c(f),s.flags|=1,$t(r,s,c,a),s.child;case 14:return c=s.type,f=Vn(c,s.pendingProps),f=Vn(c.type,f),Bm(r,s,c,f,a);case 15:return $m(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Vn(c,f),yu(r,s),s.tag=1,Kt(c)?(r=!0,Zl(s)):r=!1,oo(s,a),Lm(s,c,f),qh(s,c,f,a),Kh(null,s,c,!0,r,a);case 19:return Xm(r,s,a);case 22:return qm(r,s,a)}throw Error(t(156,s.tag))};function Eg(r,s){return Os(r,s)}function fE(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(r,s,a,c){return new fE(r,s,a,c)}function pd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function pE(r){if(typeof r=="function")return pd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===V)return 11;if(r===Nt)return 14}return 2}function hi(r,s){var a=r.alternate;return a===null?(a=wn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Pu(r,s,a,c,f,g){var v=2;if(c=r,typeof r=="function")pd(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case N:return rs(a.children,f,g,s);case I:v=8,f|=8;break;case A:return r=wn(12,a,s,f|2),r.elementType=A,r.lanes=g,r;case C:return r=wn(13,a,s,f),r.elementType=C,r.lanes=g,r;case nt:return r=wn(19,a,s,f),r.elementType=nt,r.lanes=g,r;case ze:return ku(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:v=10;break e;case O:v=9;break e;case V:v=11;break e;case Nt:v=14;break e;case xt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=wn(v,a,s,f),s.elementType=r,s.type=c,s.lanes=g,s}function rs(r,s,a,c){return r=wn(7,r,c,s),r.lanes=a,r}function ku(r,s,a,c){return r=wn(22,r,c,s),r.elementType=ze,r.lanes=a,r.stateNode={isHidden:!1},r}function md(r,s,a){return r=wn(6,r,null,s),r.lanes=a,r}function gd(r,s,a){return s=wn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function mE(r,s,a,c,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wr(0),this.expirationTimes=Wr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wr(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function yd(r,s,a,c,f,g,v,S,P){return r=new mE(r,s,a,S,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=wn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nh(g),r}function gE(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Tg(r){if(!r)return ni;r=r._reactInternals;e:{if(An(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Kt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Kt(a))return Yp(r,a,s)}return s}function Ig(r,s,a,c,f,g,v,S,P){return r=yd(a,c,!0,r,f,g,v,S,P),r.context=Tg(null),a=r.current,c=qt(),f=ui(a),g=Cr(c,f),g.callback=s??null,si(a,g,f),r.current.lanes=f,Gr(r,f,c),Xt(r,c),r}function Nu(r,s,a,c){var f=s.current,g=qt(),v=ui(f);return a=Tg(a),s.context===null?s.context=a:s.pendingContext=a,s=Cr(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=si(f,s,v),r!==null&&(Fn(r,f,v,g),au(r,f,v)),v}function xu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Sg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function _d(r,s){Sg(r,s),(r=r.alternate)&&Sg(r,s)}function yE(){return null}var Rg=typeof reportError=="function"?reportError:function(r){console.error(r)};function vd(r){this._internalRoot=r}Du.prototype.render=vd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Nu(r,s,null,null)},Du.prototype.unmount=vd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;es(function(){Nu(null,r,null,null)}),s[Tr]=null}};function Du(r){this._internalRoot=r}Du.prototype.unstable_scheduleHydration=function(r){if(r){var s=Dl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Xn.length&&s!==0&&s<Xn[a].priority;a++);Xn.splice(a,0,r),a===0&&Vl(r)}};function wd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Ou(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Ag(){}function _E(r,s,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var z=xu(v);g.call(z)}}var v=Ig(s,c,r,0,null,!1,!1,"",Ag);return r._reactRootContainer=v,r[Tr]=v.current,ya(r.nodeType===8?r.parentNode:r),es(),v}for(;f=r.lastChild;)r.removeChild(f);if(typeof c=="function"){var S=c;c=function(){var z=xu(P);S.call(z)}}var P=yd(r,0,!1,null,null,!1,!1,"",Ag);return r._reactRootContainer=P,r[Tr]=P.current,ya(r.nodeType===8?r.parentNode:r),es(function(){Nu(s,P,a,c)}),P}function Lu(r,s,a,c,f){var g=a._reactRootContainer;if(g){var v=g;if(typeof f=="function"){var S=f;f=function(){var P=xu(v);S.call(P)}}Nu(s,v,r,f)}else v=_E(a,s,r,f,c);return xu(v)}Nl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Hr(s.pendingLanes);a!==0&&(Kr(s,a|1),Xt(s,qe()),!(Ve&6)&&(ho=qe()+500,ri()))}break;case 13:es(function(){var c=Ar(r,1);if(c!==null){var f=qt();Fn(c,r,1,f)}}),_d(r,1)}},Ms=function(r){if(r.tag===13){var s=Ar(r,134217728);if(s!==null){var a=qt();Fn(s,r,134217728,a)}_d(r,134217728)}},xl=function(r){if(r.tag===13){var s=ui(r),a=Ar(r,s);if(a!==null){var c=qt();Fn(a,r,s,c)}_d(r,s)}},Dl=function(){return Ne},Ol=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},Cs=function(r,s,a){switch(s){case"input":if(Bo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var f=Xl(c);if(!f)throw Error(t(90));Es(c),Bo(c,f)}}}break;case"textarea":Rs(r,a);break;case"select":s=a.value,s!=null&&pr(r,!!a.multiple,s,!1)}},Li=hd,Jo=es;var vE={usingClientEntryPoint:!1,Events:[wa,Js,Xl,Qn,Xo,hd]},La={findFiberByHostInstance:Wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wE={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ta(r),r===null?null:r.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||yE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{Ui=Vu.inject(wE),nn=Vu}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vE,Jt.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(s))throw Error(t(200));return gE(r,s,null,a)},Jt.createRoot=function(r,s){if(!wd(r))throw Error(t(299));var a=!1,c="",f=Rg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=yd(r,1,!1,null,null,a,!1,c,f),r[Tr]=s.current,ya(r.nodeType===8?r.parentNode:r),new vd(s)},Jt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ta(s),r=r===null?null:r.stateNode,r},Jt.flushSync=function(r){return es(r)},Jt.hydrate=function(r,s,a){if(!Ou(s))throw Error(t(200));return Lu(null,r,s,!0,a)},Jt.hydrateRoot=function(r,s,a){if(!wd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",v=Rg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Ig(s,null,r,1,a??null,f,!1,g,v),r[Tr]=s.current,ya(r),c)for(r=0;r<c.length;r++)a=c[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Du(s)},Jt.render=function(r,s,a){if(!Ou(s))throw Error(t(200));return Lu(null,r,s,!1,a)},Jt.unmountComponentAtNode=function(r){if(!Ou(r))throw Error(t(40));return r._reactRootContainer?(es(function(){Lu(null,null,r,!1,function(){r._reactRootContainer=null,r[Tr]=null})}),!0):!1},Jt.unstable_batchedUpdates=hd,Jt.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Ou(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Lu(r,s,a,!1,c)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var Lg;function PE(){if(Lg)return Id.exports;Lg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Id.exports=CE(),Id.exports}var Vg;function kE(){if(Vg)return Mu;Vg=1;var n=PE();return Mu.createRoot=n.createRoot,Mu.hydrateRoot=n.hydrateRoot,Mu}var NE=kE(),Ma={},Mg;function xE(){if(Mg)return Ma;Mg=1,Object.defineProperty(Ma,"__esModule",{value:!0}),Ma.parse=h,Ma.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const R=function(){};return R.prototype=Object.create(null),R})();function h(R,x){const b=new l,$=R.length;if($<2)return b;const j=(x==null?void 0:x.decode)||w;let W=0;do{const X=R.indexOf("=",W);if(X===-1)break;const re=R.indexOf(";",W),de=re===-1?$:re;if(X>de){W=R.lastIndexOf(";",X-1)+1;continue}const Se=d(R,W,X),Te=p(R,X,Se),N=R.slice(Se,Te);if(b[N]===void 0){let I=d(R,X+1,de),A=p(R,de,I);const k=j(R.slice(I,A));b[N]=k}W=de+1}while(W<$);return b}function d(R,x,b){do{const $=R.charCodeAt(x);if($!==32&&$!==9)return x}while(++x<b);return b}function p(R,x,b){for(;x>b;){const $=R.charCodeAt(--x);if($!==32&&$!==9)return x+1}return b}function y(R,x,b){const $=(b==null?void 0:b.encode)||encodeURIComponent;if(!n.test(R))throw new TypeError(`argument name is invalid: ${R}`);const j=$(x);if(!e.test(j))throw new TypeError(`argument val is invalid: ${x}`);let W=R+"="+j;if(!b)return W;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);W+="; Max-Age="+b.maxAge}if(b.domain){if(!t.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);W+="; Domain="+b.domain}if(b.path){if(!i.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);W+="; Path="+b.path}if(b.expires){if(!T(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);W+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(W+="; HttpOnly"),b.secure&&(W+="; Secure"),b.partitioned&&(W+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":W+="; Priority=Low";break;case"medium":W+="; Priority=Medium";break;case"high":W+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":W+="; SameSite=Strict";break;case"lax":W+="; SameSite=Lax";break;case"none":W+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return W}function w(R){if(R.indexOf("%")===-1)return R;try{return decodeURIComponent(R)}catch{return R}}function T(R){return o.call(R)==="[object Date]"}return Ma}xE();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var bg="popstate";function DE(n={}){function e(i,o){let{pathname:l,search:h,hash:d}=i.location;return Bd("",{pathname:l,search:h,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Xa(o)}return LE(e,t,null,n)}function Xe(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function $n(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OE(){return Math.random().toString(36).substring(2,10)}function Fg(n,e){return{usr:n.state,key:n.key,idx:e}}function Bd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?No(e):e,state:t,key:e&&e.key||i||OE()}}function Xa({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function No(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function LE(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,d="POP",p=null,y=w();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function w(){return(h.state||{idx:null}).idx}function T(){d="POP";let j=w(),W=j==null?null:j-y;y=j,p&&p({action:d,location:$.location,delta:W})}function R(j,W){d="PUSH";let X=Bd($.location,j,W);y=w()+1;let re=Fg(X,y),de=$.createHref(X);try{h.pushState(re,"",de)}catch(Se){if(Se instanceof DOMException&&Se.name==="DataCloneError")throw Se;o.location.assign(de)}l&&p&&p({action:d,location:$.location,delta:1})}function x(j,W){d="REPLACE";let X=Bd($.location,j,W);y=w();let re=Fg(X,y),de=$.createHref(X);h.replaceState(re,"",de),l&&p&&p({action:d,location:$.location,delta:0})}function b(j){let W=o.location.origin!=="null"?o.location.origin:o.location.href,X=typeof j=="string"?j:Xa(j);return X=X.replace(/ $/,"%20"),Xe(W,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,W)}let $={get action(){return d},get location(){return n(o,h)},listen(j){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(bg,T),p=j,()=>{o.removeEventListener(bg,T),p=null}},createHref(j){return e(o,j)},createURL:b,encodeLocation(j){let W=b(j);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:R,replace:x,go(j){return h.go(j)}};return $}function p_(n,e,t="/"){return VE(n,e,t,!1)}function VE(n,e,t,i){let o=typeof e=="string"?No(e):e,l=Ei(o.pathname||"/",t);if(l==null)return null;let h=m_(n);ME(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let y=GE(l);d=HE(h[p],y,i)}return d}function m_(n,e=[],t=[],i=""){let o=(l,h,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(Xe(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Or([i,p.relativePath]),w=t.concat(p);l.children&&l.children.length>0&&(Xe(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),m_(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:$E(y,l.index),routesMeta:w})};return n.forEach((l,h)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,h);else for(let p of g_(l.path))o(l,h,p)}),e}function g_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=g_(i.join("/")),d=[];return d.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...h),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function ME(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:qE(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var bE=/^:[\w-]+$/,FE=3,UE=2,jE=1,zE=10,BE=-2,Ug=n=>n==="*";function $E(n,e){let t=n.split("/"),i=t.length;return t.some(Ug)&&(i+=BE),e&&(i+=UE),t.filter(o=>!Ug(o)).reduce((o,l)=>o+(bE.test(l)?FE:l===""?jE:zE),i)}function qE(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function HE(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",h=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=rc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},w),R=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=rc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},w)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Or([l,T.pathname]),pathnameBase:XE(Or([l,T.pathnameBase])),route:R}),T.pathnameBase!=="/"&&(l=Or([l,T.pathnameBase]))}return h}function rc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=WE(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:w,isOptional:T},R)=>{if(w==="*"){let b=d[R]||"";h=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const x=d[R];return T&&!x?y[w]=void 0:y[w]=(x||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function WE(n,e=!1,t=!0){$n(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function GE(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $n(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ei(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function KE(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?No(n):n;return{pathname:t?t.startsWith("/")?t:QE(t,e):e,search:JE(i),hash:ZE(o)}}function QE(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ad(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function YE(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function yf(n){let e=YE(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function _f(n,e,t,i=!1){let o;typeof n=="string"?o=No(n):(o={...n},Xe(!o.pathname||!o.pathname.includes("?"),Ad("?","pathname","search",o)),Xe(!o.pathname||!o.pathname.includes("#"),Ad("#","pathname","hash",o)),Xe(!o.search||!o.search.includes("#"),Ad("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,d;if(h==null)d=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),T-=1;o.pathname=R.join("/")}d=T>=0?e[T]:"/"}let p=KE(o,d),y=h&&h!=="/"&&h.endsWith("/"),w=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||w)&&(p.pathname+="/"),p}var Or=n=>n.join("/").replace(/\/\/+/g,"/"),XE=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),JE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,ZE=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function eT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var y_=["POST","PUT","PATCH","DELETE"];new Set(y_);var tT=["GET",...y_];new Set(tT);var xo=q.createContext(null);xo.displayName="DataRouter";var Sc=q.createContext(null);Sc.displayName="DataRouterState";var __=q.createContext({isTransitioning:!1});__.displayName="ViewTransition";var nT=q.createContext(new Map);nT.displayName="Fetchers";var rT=q.createContext(null);rT.displayName="Await";var Wn=q.createContext(null);Wn.displayName="Navigation";var ll=q.createContext(null);ll.displayName="Location";var hr=q.createContext({outlet:null,matches:[],isDataRoute:!1});hr.displayName="Route";var vf=q.createContext(null);vf.displayName="RouteError";function iT(n,{relative:e}={}){Xe(Do(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=q.useContext(Wn),{hash:o,pathname:l,search:h}=cl(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Or([t,l])),i.createHref({pathname:d,search:h,hash:o})}function Do(){return q.useContext(ll)!=null}function Ci(){return Xe(Do(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(ll).location}var v_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function w_(n){q.useContext(Wn).static||q.useLayoutEffect(n)}function ul(){let{isDataRoute:n}=q.useContext(hr);return n?yT():sT()}function sT(){Xe(Do(),"useNavigate() may be used only in the context of a <Router> component.");let n=q.useContext(xo),{basename:e,navigator:t}=q.useContext(Wn),{matches:i}=q.useContext(hr),{pathname:o}=Ci(),l=JSON.stringify(yf(i)),h=q.useRef(!1);return w_(()=>{h.current=!0}),q.useCallback((p,y={})=>{if($n(h.current,v_),!h.current)return;if(typeof p=="number"){t.go(p);return}let w=_f(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Or([e,w.pathname])),(y.replace?t.replace:t.push)(w,y.state,y)},[e,t,l,o,n])}q.createContext(null);function cl(n,{relative:e}={}){let{matches:t}=q.useContext(hr),{pathname:i}=Ci(),o=JSON.stringify(yf(t));return q.useMemo(()=>_f(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function oT(n,e){return E_(n,e)}function E_(n,e,t,i){var W;Xe(Do(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=q.useContext(Wn),{matches:l}=q.useContext(hr),h=l[l.length-1],d=h?h.params:{},p=h?h.pathname:"/",y=h?h.pathnameBase:"/",w=h&&h.route;{let X=w&&w.path||"";T_(p,!w||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let T=Ci(),R;if(e){let X=typeof e=="string"?No(e):e;Xe(y==="/"||((W=X.pathname)==null?void 0:W.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${X.pathname}" was given in the \`location\` prop.`),R=X}else R=T;let x=R.pathname||"/",b=x;if(y!=="/"){let X=y.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(X.length).join("/")}let $=p_(n,{pathname:b});$n(w||$!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),$n($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=hT($&&$.map(X=>Object.assign({},X,{params:Object.assign({},d,X.params),pathname:Or([y,o.encodeLocation?o.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?y:Or([y,o.encodeLocation?o.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),l,t,i);return e&&j?q.createElement(ll.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},j):j}function aT(){let n=gT(),e=eT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:l},"ErrorBoundary")," or"," ",q.createElement("code",{style:l},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),t?q.createElement("pre",{style:o},t):null,h)}var lT=q.createElement(aT,null),uT=class extends q.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?q.createElement(hr.Provider,{value:this.props.routeContext},q.createElement(vf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function cT({routeContext:n,match:e,children:t}){let i=q.useContext(xo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(hr.Provider,{value:n},t)}function hT(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Xe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:w,errors:T}=t,R=y.route.loader&&!w.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||R){h=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,w)=>{let T,R=!1,x=null,b=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,x=y.route.errorElement||lT,h&&(d<0&&w===0?(T_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,b=null):d===w&&(R=!0,b=y.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,w+1)),j=()=>{let W;return T?W=x:R?W=b:y.route.Component?W=q.createElement(y.route.Component,null):y.route.element?W=y.route.element:W=p,q.createElement(cT,{match:y,routeContext:{outlet:p,matches:$,isDataRoute:t!=null},children:W})};return t&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?q.createElement(uT,{location:t.location,revalidation:t.revalidation,component:x,error:T,children:j(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):j()},null)}function wf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dT(n){let e=q.useContext(xo);return Xe(e,wf(n)),e}function fT(n){let e=q.useContext(Sc);return Xe(e,wf(n)),e}function pT(n){let e=q.useContext(hr);return Xe(e,wf(n)),e}function Ef(n){let e=pT(n),t=e.matches[e.matches.length-1];return Xe(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function mT(){return Ef("useRouteId")}function gT(){var i;let n=q.useContext(vf),e=fT("useRouteError"),t=Ef("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function yT(){let{router:n}=dT("useNavigate"),e=Ef("useNavigate"),t=q.useRef(!1);return w_(()=>{t.current=!0}),q.useCallback(async(o,l={})=>{$n(t.current,v_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var jg={};function T_(n,e,t){!e&&!jg[n]&&(jg[n]=!0,$n(!1,t))}q.memo(_T);function _T({routes:n,future:e,state:t}){return E_(n,void 0,t,e)}function qu({to:n,replace:e,state:t,relative:i}){Xe(Do(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=q.useContext(Wn);$n(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=q.useContext(hr),{pathname:h}=Ci(),d=ul(),p=_f(n,yf(l),h,i==="path"),y=JSON.stringify(p);return q.useEffect(()=>{d(JSON.parse(y),{replace:e,state:t,relative:i})},[d,y,i,e,t]),null}function Fa(n){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vT({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Xe(!Do(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),d=q.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=No(t));let{pathname:p="/",search:y="",hash:w="",state:T=null,key:R="default"}=t,x=q.useMemo(()=>{let b=Ei(p,h);return b==null?null:{location:{pathname:b,search:y,hash:w,state:T,key:R},navigationType:i}},[h,p,y,w,T,R,i]);return $n(x!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${w}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:q.createElement(Wn.Provider,{value:d},q.createElement(ll.Provider,{children:e,value:x}))}function wT({children:n,location:e}){return oT($d(n),e)}function $d(n,e=[]){let t=[];return q.Children.forEach(n,(i,o)=>{if(!q.isValidElement(i))return;let l=[...e,o];if(i.type===q.Fragment){t.push.apply(t,$d(i.props.children,l));return}Xe(i.type===Fa,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=$d(i.props.children,l)),t.push(h)}),t}var Hu="get",Wu="application/x-www-form-urlencoded";function Rc(n){return n!=null&&typeof n.tagName=="string"}function ET(n){return Rc(n)&&n.tagName.toLowerCase()==="button"}function TT(n){return Rc(n)&&n.tagName.toLowerCase()==="form"}function IT(n){return Rc(n)&&n.tagName.toLowerCase()==="input"}function ST(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function RT(n,e){return n.button===0&&(!e||e==="_self")&&!ST(n)}var bu=null;function AT(){if(bu===null)try{new FormData(document.createElement("form"),0),bu=!1}catch{bu=!0}return bu}var CT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cd(n){return n!=null&&!CT.has(n)?($n(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wu}"`),null):n}function PT(n,e){let t,i,o,l,h;if(TT(n)){let d=n.getAttribute("action");i=d?Ei(d,e):null,t=n.getAttribute("method")||Hu,o=Cd(n.getAttribute("enctype"))||Wu,l=new FormData(n)}else if(ET(n)||IT(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Ei(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Hu,o=Cd(n.getAttribute("formenctype"))||Cd(d.getAttribute("enctype"))||Wu,l=new FormData(d,n),!AT()){let{name:y,type:w,value:T}=n;if(w==="image"){let R=y?`${y}.`:"";l.append(`${R}x`,"0"),l.append(`${R}y`,"0")}else y&&l.append(y,T)}}else{if(Rc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Hu,i=null,o=Wu,h=n}return l&&o==="text/plain"&&(h=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:h}}function Tf(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function kT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function NT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function xT(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await kT(l,t);return h.links?h.links():[]}return[]}));return VT(i.flat(1).filter(NT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function zg(n,e,t,i,o,l){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var w;return t[y].pathname!==p.pathname||((w=t[y].route.path)==null?void 0:w.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>h(p,y)||d(p,y)):l==="data"?e.filter((p,y)=>{var T;let w=i.routes[p.route.id];if(!w||!w.hasLoader)return!1;if(h(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let R=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function DT(n,e){return OT(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function OT(n){return[...new Set(n)]}function LT(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function VT(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(LT(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function MT(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function bT(){let n=q.useContext(xo);return Tf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function FT(){let n=q.useContext(Sc);return Tf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var If=q.createContext(void 0);If.displayName="FrameworkContext";function I_(){let n=q.useContext(If);return Tf(n,"You must render this element inside a <HydratedRouter> element"),n}function UT(n,e){let t=q.useContext(If),[i,o]=q.useState(!1),[l,h]=q.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:w,onTouchStart:T}=e,R=q.useRef(null);q.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let $=W=>{W.forEach(X=>{h(X.isIntersecting)})},j=new IntersectionObserver($,{threshold:.5});return R.current&&j.observe(R.current),()=>{j.disconnect()}}},[n]),q.useEffect(()=>{if(i){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[i]);let x=()=>{o(!0)},b=()=>{o(!1),h(!1)};return t?n!=="intent"?[l,R,{}]:[l,R,{onFocus:ba(d,x),onBlur:ba(p,b),onMouseEnter:ba(y,x),onMouseLeave:ba(w,b),onTouchStart:ba(T,x)}]:[!1,R,{}]}function ba(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function jT({page:n,...e}){let{router:t}=bT(),i=q.useMemo(()=>p_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?q.createElement(BT,{page:n,matches:i,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function zT(n){let{manifest:e,routeModules:t}=I_(),[i,o]=q.useState([]);return q.useEffect(()=>{let l=!1;return xT(n,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[n,e,t]),i}function BT({page:n,matches:e,...t}){let i=Ci(),{manifest:o,routeModules:l}=I_(),{loaderData:h,matches:d}=FT(),p=q.useMemo(()=>zg(n,e,d,o,i,"data"),[n,e,d,o,i]),y=q.useMemo(()=>zg(n,e,d,o,i,"assets"),[n,e,d,o,i]),w=q.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let x=new Set,b=!1;if(e.forEach(j=>{var X;let W=o.routes[j.route.id];!W||!W.hasLoader||(!p.some(re=>re.route.id===j.route.id)&&j.route.id in h&&((X=l[j.route.id])!=null&&X.shouldRevalidate)||W.hasClientLoader?b=!0:x.add(j.route.id))}),x.size===0)return[];let $=MT(n);return b&&x.size>0&&$.searchParams.set("_routes",e.filter(j=>x.has(j.route.id)).map(j=>j.route.id).join(",")),[$.pathname+$.search]},[h,i,o,p,e,n,l]),T=q.useMemo(()=>DT(y,o),[y,o]),R=zT(y);return q.createElement(q.Fragment,null,w.map(x=>q.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),T.map(x=>q.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),R.map(({key:x,link:b})=>q.createElement("link",{key:x,...b})))}function $T(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var S_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{S_&&(window.__reactRouterVersion="7.0.2")}catch{}function qT({basename:n,children:e,window:t}){let i=q.useRef();i.current==null&&(i.current=DE({window:t,v5Compat:!0}));let o=i.current,[l,h]=q.useState({action:o.action,location:o.location}),d=q.useCallback(p=>{q.startTransition(()=>h(p))},[h]);return q.useLayoutEffect(()=>o.listen(d),[o,d]),q.createElement(vT,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var R_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ac=q.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:h,state:d,target:p,to:y,preventScrollReset:w,viewTransition:T,...R},x){let{basename:b}=q.useContext(Wn),$=typeof y=="string"&&R_.test(y),j,W=!1;if(typeof y=="string"&&$&&(j=y,S_))try{let A=new URL(window.location.href),k=y.startsWith("//")?new URL(A.protocol+y):new URL(y),O=Ei(k.pathname,b);k.origin===A.origin&&O!=null?y=O+k.search+k.hash:W=!0}catch{$n(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=iT(y,{relative:o}),[re,de,Se]=UT(i,R),Te=KT(y,{replace:h,state:d,target:p,preventScrollReset:w,relative:o,viewTransition:T});function N(A){e&&e(A),A.defaultPrevented||Te(A)}let I=q.createElement("a",{...R,...Se,href:j||X,onClick:W||l?e:N,ref:$T(x,de),target:p,"data-discover":!$&&t==="render"?"true":void 0});return re&&!$?q.createElement(q.Fragment,null,I,q.createElement(jT,{page:X})):I});Ac.displayName="Link";var HT=q.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:h,viewTransition:d,children:p,...y},w){let T=cl(h,{relative:y.relative}),R=Ci(),x=q.useContext(Sc),{navigator:b,basename:$}=q.useContext(Wn),j=x!=null&&ZT(T)&&d===!0,W=b.encodeLocation?b.encodeLocation(T).pathname:T.pathname,X=R.pathname,re=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(X=X.toLowerCase(),re=re?re.toLowerCase():null,W=W.toLowerCase()),re&&$&&(re=Ei(re,$)||re);const de=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let Se=X===W||!o&&X.startsWith(W)&&X.charAt(de)==="/",Te=re!=null&&(re===W||!o&&re.startsWith(W)&&re.charAt(W.length)==="/"),N={isActive:Se,isPending:Te,isTransitioning:j},I=Se?e:void 0,A;typeof i=="function"?A=i(N):A=[i,Se?"active":null,Te?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(N):l;return q.createElement(Ac,{...y,"aria-current":I,className:A,ref:w,style:k,to:h,viewTransition:d},typeof p=="function"?p(N):p)});HT.displayName="NavLink";var WT=q.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:h=Hu,action:d,onSubmit:p,relative:y,preventScrollReset:w,viewTransition:T,...R},x)=>{let b=XT(),$=JT(d,{relative:y}),j=h.toLowerCase()==="get"?"get":"post",W=typeof d=="string"&&R_.test(d),X=re=>{if(p&&p(re),re.defaultPrevented)return;re.preventDefault();let de=re.nativeEvent.submitter,Se=(de==null?void 0:de.getAttribute("formmethod"))||h;b(de||re.currentTarget,{fetcherKey:e,method:Se,navigate:t,replace:o,state:l,relative:y,preventScrollReset:w,viewTransition:T})};return q.createElement("form",{ref:x,method:j,action:$,onSubmit:i?p:X,...R,"data-discover":!W&&n==="render"?"true":void 0})});WT.displayName="Form";function GT(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function A_(n){let e=q.useContext(xo);return Xe(e,GT(n)),e}function KT(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:h}={}){let d=ul(),p=Ci(),y=cl(n,{relative:l});return q.useCallback(w=>{if(RT(w,e)){w.preventDefault();let T=t!==void 0?t:Xa(p)===Xa(y);d(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:h})}},[p,d,y,t,i,e,n,o,l,h])}var QT=0,YT=()=>`__${String(++QT)}__`;function XT(){let{router:n}=A_("useSubmit"),{basename:e}=q.useContext(Wn),t=mT();return q.useCallback(async(i,o={})=>{let{action:l,method:h,encType:d,formData:p,body:y}=PT(i,e);if(o.navigate===!1){let w=o.fetcherKey||YT();await n.fetch(w,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function JT(n,{relative:e}={}){let{basename:t}=q.useContext(Wn),i=q.useContext(hr);Xe(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...cl(n||".",{relative:e})},h=Ci();if(n==null){l.search=h.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(w=>w==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let w=d.toString();l.search=w?`?${w}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Or([t,l.pathname])),Xa(l)}function ZT(n,e={}){let t=q.useContext(__);Xe(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=A_("useViewTransitionState"),o=cl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ei(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=Ei(t.nextLocation.pathname,i)||t.nextLocation.pathname;return rc(o.pathname,h)!=null||rc(o.pathname,l)!=null}new TextEncoder;var Bg={};/**
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
 */const C_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},eI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},P_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,d=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,w=l>>2,T=(l&3)<<4|d>>4;let R=(d&15)<<2|y>>6,x=y&63;p||(x=64,h||(R=64)),i.push(t[w],t[T],t[R],t[x])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(C_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):eI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new tI;const R=l<<2|d>>4;if(i.push(R),y!==64){const x=d<<4&240|y>>2;if(i.push(x),T!==64){const b=y<<6&192|T;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nI=function(n){const e=C_(n);return P_.encodeByteArray(e,!0)},ic=function(n){return nI(n).replace(/\./g,"")},k_=function(n){try{return P_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iI=()=>rI().__FIREBASE_DEFAULTS__,sI=()=>{if(typeof process>"u"||typeof Bg>"u")return;const n=Bg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},oI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&k_(n[1]);return e&&JSON.parse(e)},Cc=()=>{try{return iI()||sI()||oI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},N_=n=>{var e,t;return(t=(e=Cc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},aI=n=>{const e=N_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},x_=()=>{var n;return(n=Cc())===null||n===void 0?void 0:n.config},D_=n=>{var e;return(e=Cc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class lI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function uI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ic(JSON.stringify(t)),ic(JSON.stringify(h)),""].join(".")}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function hI(){var n;const e=(n=Cc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function O_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pI(){const n=Ut();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function mI(){return!hI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function L_(){try{return typeof indexedDB=="object"}catch{return!1}}function V_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function gI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const yI="FirebaseError";class Gn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=yI,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?_I(l,i):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new Gn(o,d,i)}}function _I(n,e){return n.replace(vI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const vI=/\{\$([^}]+)}/g;function wI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ja(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if($g(l)&&$g(h)){if(!Ja(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function $g(n){return n!==null&&typeof n=="object"}/**
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
 */function hl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ua(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function ja(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function EI(n,e){const t=new TI(n,e);return t.subscribe.bind(t)}class TI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");II(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Pd),o.error===void 0&&(o.error=Pd),o.complete===void 0&&(o.complete=Pd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function II(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Pd(){}/**
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
 */const SI=1e3,RI=2,AI=4*60*60*1e3,CI=.5;function qg(n,e=SI,t=RI){const i=e*Math.pow(t,n),o=Math.round(CI*i*(Math.random()-.5)*2);return Math.min(AI,i+o)}/**
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
 */function jt(n){return n&&n._delegate?n._delegate:n}class qn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ss="[DEFAULT]";/**
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
 */class PI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new lI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NI(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:kI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kI(n){return n===ss?void 0:n}function NI(n){return n.instantiationMode==="EAGER"}/**
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
 */class xI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new PI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const DI={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},OI=Pe.INFO,LI={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},VI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=LI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=OI,this._logHandler=VI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const MI=(n,e)=>e.some(t=>n instanceof t);let Hg,Wg;function bI(){return Hg||(Hg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FI(){return Wg||(Wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const M_=new WeakMap,qd=new WeakMap,b_=new WeakMap,kd=new WeakMap,Sf=new WeakMap;function UI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(_i(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&M_.set(t,n)}).catch(()=>{}),Sf.set(e,n),e}function jI(n){if(qd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});qd.set(n,e)}let Hd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||b_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _i(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zI(n){Hd=n(Hd)}function BI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Nd(this),e,...t);return b_.set(i,e.sort?e.sort():[e]),_i(i)}:FI().includes(n)?function(...e){return n.apply(Nd(this),e),_i(M_.get(this))}:function(...e){return _i(n.apply(Nd(this),e))}}function $I(n){return typeof n=="function"?BI(n):(n instanceof IDBTransaction&&jI(n),MI(n,bI())?new Proxy(n,Hd):n)}function _i(n){if(n instanceof IDBRequest)return UI(n);if(kd.has(n))return kd.get(n);const e=$I(n);return e!==n&&(kd.set(n,e),Sf.set(e,n)),e}const Nd=n=>Sf.get(n);function F_(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),d=_i(h);return i&&h.addEventListener("upgradeneeded",p=>{i(_i(h.result),p.oldVersion,p.newVersion,_i(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const qI=["get","getKey","getAll","getAllKeys","count"],HI=["put","add","delete","clear"],xd=new Map;function Gg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xd.get(e))return xd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=HI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||qI.includes(t)))return;const l=async function(h,...d){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return xd.set(e,l),l}zI(n=>({...n,get:(e,t,i)=>Gg(e,t)||n.get(e,t,i),has:(e,t)=>!!Gg(e,t)||n.has(e,t)}));/**
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
 */class WI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(GI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function GI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wd="@firebase/app",Kg="0.10.17";/**
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
 */const Mr=new Pc("@firebase/app"),KI="@firebase/app-compat",QI="@firebase/analytics-compat",YI="@firebase/analytics",XI="@firebase/app-check-compat",JI="@firebase/app-check",ZI="@firebase/auth",eS="@firebase/auth-compat",tS="@firebase/database",nS="@firebase/data-connect",rS="@firebase/database-compat",iS="@firebase/functions",sS="@firebase/functions-compat",oS="@firebase/installations",aS="@firebase/installations-compat",lS="@firebase/messaging",uS="@firebase/messaging-compat",cS="@firebase/performance",hS="@firebase/performance-compat",dS="@firebase/remote-config",fS="@firebase/remote-config-compat",pS="@firebase/storage",mS="@firebase/storage-compat",gS="@firebase/firestore",yS="@firebase/vertexai",_S="@firebase/firestore-compat",vS="firebase",wS="11.1.0";/**
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
 */const Gd="[DEFAULT]",ES={[Wd]:"fire-core",[KI]:"fire-core-compat",[YI]:"fire-analytics",[QI]:"fire-analytics-compat",[JI]:"fire-app-check",[XI]:"fire-app-check-compat",[ZI]:"fire-auth",[eS]:"fire-auth-compat",[tS]:"fire-rtdb",[nS]:"fire-data-connect",[rS]:"fire-rtdb-compat",[iS]:"fire-fn",[sS]:"fire-fn-compat",[oS]:"fire-iid",[aS]:"fire-iid-compat",[lS]:"fire-fcm",[uS]:"fire-fcm-compat",[cS]:"fire-perf",[hS]:"fire-perf-compat",[dS]:"fire-rc",[fS]:"fire-rc-compat",[pS]:"fire-gcs",[mS]:"fire-gcs-compat",[gS]:"fire-fst",[_S]:"fire-fst-compat",[yS]:"fire-vertex","fire-js":"fire-js",[vS]:"fire-js-all"};/**
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
 */const sc=new Map,TS=new Map,Kd=new Map;function Qg(n,e){try{n.container.addComponent(e)}catch(t){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ur(n){const e=n.name;if(Kd.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;Kd.set(e,n);for(const t of sc.values())Qg(t,n);for(const t of TS.values())Qg(t,n);return!0}function gs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Un(n){return n.settings!==void 0}/**
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
 */const IS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vi=new ms("app","Firebase",IS);/**
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
 */class SS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vi.create("app-deleted",{appName:this._name})}}/**
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
 */const Oo=wS;function U_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Gd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw vi.create("bad-app-name",{appName:String(o)});if(t||(t=x_()),!t)throw vi.create("no-options");const l=sc.get(o);if(l){if(Ja(t,l.options)&&Ja(i,l.config))return l;throw vi.create("duplicate-app",{appName:o})}const h=new xI(o);for(const p of Kd.values())h.addComponent(p);const d=new SS(t,i,h);return sc.set(o,d),d}function Rf(n=Gd){const e=sc.get(n);if(!e&&n===Gd&&x_())return U_();if(!e)throw vi.create("no-app",{appName:n});return e}function Tn(n,e,t){var i;let o=(i=ES[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(d.join(" "));return}ur(new qn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const RS="firebase-heartbeat-database",AS=1,Za="firebase-heartbeat-store";let Dd=null;function j_(){return Dd||(Dd=F_(RS,AS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Za)}catch(t){console.warn(t)}}}}).catch(n=>{throw vi.create("idb-open",{originalErrorMessage:n.message})})),Dd}async function CS(n){try{const t=(await j_()).transaction(Za),i=await t.objectStore(Za).get(z_(n));return await t.done,i}catch(e){if(e instanceof Gn)Mr.warn(e.message);else{const t=vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(t.message)}}}async function Yg(n,e){try{const i=(await j_()).transaction(Za,"readwrite");await i.objectStore(Za).put(e,z_(n)),await i.done}catch(t){if(t instanceof Gn)Mr.warn(t.message);else{const i=vi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mr.warn(i.message)}}}function z_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const PS=1024,kS=30*24*60*60*1e3;class NS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new DS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Xg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const d=new Date(h.date).valueOf();return Date.now()-d<=kS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Mr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xg(),{heartbeatsToSend:i,unsentEntries:o}=xS(this._heartbeatsCache.heartbeats),l=ic(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Mr.warn(t),""}}}function Xg(){return new Date().toISOString().substring(0,10)}function xS(n,e=PS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Jg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Jg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class DS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return L_()?V_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await CS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Yg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Yg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Jg(n){return ic(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function OS(n){ur(new qn("platform-logger",e=>new WI(e),"PRIVATE")),ur(new qn("heartbeat",e=>new NS(e),"PRIVATE")),Tn(Wd,Kg,n),Tn(Wd,Kg,"esm2017"),Tn("fire-js","")}OS("");var LS="firebase",VS="11.1.0";/**
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
 */Tn(LS,VS,"app");const B_="@firebase/installations",Af="0.6.11";/**
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
 */const $_=1e4,q_=`w:${Af}`,H_="FIS_v2",MS="https://firebaseinstallations.googleapis.com/v1",bS=60*60*1e3,FS="installations",US="Installations";/**
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
 */const jS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},cs=new ms(FS,US,jS);function W_(n){return n instanceof Gn&&n.code.includes("request-failed")}/**
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
 */function G_({projectId:n}){return`${MS}/projects/${n}/installations`}function K_(n){return{token:n.token,requestStatus:2,expiresIn:BS(n.expiresIn),creationTime:Date.now()}}async function Q_(n,e){const i=(await e.json()).error;return cs.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Y_({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function zS(n,{refreshToken:e}){const t=Y_(n);return t.append("Authorization",$S(e)),t}async function X_(n){const e=await n();return e.status>=500&&e.status<600?n():e}function BS(n){return Number(n.replace("s","000"))}function $S(n){return`${H_} ${n}`}/**
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
 */async function qS({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=G_(n),o=Y_(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:H_,appId:n.appId,sdkVersion:q_},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await X_(()=>fetch(i,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:K_(y.authToken)}}else throw await Q_("Create Installation",p)}/**
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
 */function J_(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function HS(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const WS=/^[cdef][\w-]{21}$/,Qd="";function GS(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=KS(n);return WS.test(t)?t:Qd}catch{return Qd}}function KS(n){return HS(n).substr(0,22)}/**
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
 */function kc(n){return`${n.appName}!${n.appId}`}/**
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
 */const Z_=new Map;function ev(n,e){const t=kc(n);tv(t,e),QS(t,e)}function tv(n,e){const t=Z_.get(n);if(t)for(const i of t)i(e)}function QS(n,e){const t=YS();t&&t.postMessage({key:n,fid:e}),XS()}let os=null;function YS(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=n=>{tv(n.data.key,n.data.fid)}),os}function XS(){Z_.size===0&&os&&(os.close(),os=null)}/**
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
 */const JS="firebase-installations-database",ZS=1,hs="firebase-installations-store";let Od=null;function Cf(){return Od||(Od=F_(JS,ZS,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(hs)}}})),Od}async function oc(n,e){const t=kc(n),o=(await Cf()).transaction(hs,"readwrite"),l=o.objectStore(hs),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&ev(n,e.fid),e}async function nv(n){const e=kc(n),i=(await Cf()).transaction(hs,"readwrite");await i.objectStore(hs).delete(e),await i.done}async function Nc(n,e){const t=kc(n),o=(await Cf()).transaction(hs,"readwrite"),l=o.objectStore(hs),h=await l.get(t),d=e(h);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!h||h.fid!==d.fid)&&ev(n,d.fid),d}/**
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
 */async function Pf(n){let e;const t=await Nc(n.appConfig,i=>{const o=e1(i),l=t1(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Qd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function e1(n){const e=n||{fid:GS(),registrationStatus:0};return rv(e)}function t1(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(cs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=n1(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:r1(n)}:{installationEntry:e}}async function n1(n,e){try{const t=await qS(n,e);return oc(n.appConfig,t)}catch(t){throw W_(t)&&t.customData.serverCode===409?await nv(n.appConfig):await oc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function r1(n){let e=await Zg(n.appConfig);for(;e.registrationStatus===1;)await J_(100),e=await Zg(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Pf(n);return i||t}return e}function Zg(n){return Nc(n,e=>{if(!e)throw cs.create("installation-not-found");return rv(e)})}function rv(n){return i1(n)?{fid:n.fid,registrationStatus:0}:n}function i1(n){return n.registrationStatus===1&&n.registrationTime+$_<Date.now()}/**
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
 */async function s1({appConfig:n,heartbeatServiceProvider:e},t){const i=o1(n,t),o=zS(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:q_,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await X_(()=>fetch(i,d));if(p.ok){const y=await p.json();return K_(y)}else throw await Q_("Generate Auth Token",p)}function o1(n,{fid:e}){return`${G_(n)}/${e}/authTokens:generate`}/**
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
 */async function kf(n,e=!1){let t;const i=await Nc(n.appConfig,l=>{if(!iv(l))throw cs.create("not-registered");const h=l.authToken;if(!e&&u1(h))return l;if(h.requestStatus===1)return t=a1(n,e),l;{if(!navigator.onLine)throw cs.create("app-offline");const d=h1(l);return t=l1(n,d),d}});return t?await t:i.authToken}async function a1(n,e){let t=await ey(n.appConfig);for(;t.authToken.requestStatus===1;)await J_(100),t=await ey(n.appConfig);const i=t.authToken;return i.requestStatus===0?kf(n,e):i}function ey(n){return Nc(n,e=>{if(!iv(e))throw cs.create("not-registered");const t=e.authToken;return d1(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function l1(n,e){try{const t=await s1(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await oc(n.appConfig,i),t}catch(t){if(W_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await nv(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await oc(n.appConfig,i)}throw t}}function iv(n){return n!==void 0&&n.registrationStatus===2}function u1(n){return n.requestStatus===2&&!c1(n)}function c1(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+bS}function h1(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function d1(n){return n.requestStatus===1&&n.requestTime+$_<Date.now()}/**
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
 */async function f1(n){const e=n,{installationEntry:t,registrationPromise:i}=await Pf(e);return i?i.catch(console.error):kf(e).catch(console.error),t.fid}/**
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
 */async function p1(n,e=!1){const t=n;return await m1(t),(await kf(t,e)).token}async function m1(n){const{registrationPromise:e}=await Pf(n);e&&await e}/**
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
 */function g1(n){if(!n||!n.options)throw Ld("App Configuration");if(!n.name)throw Ld("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ld(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ld(n){return cs.create("missing-app-config-values",{valueName:n})}/**
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
 */const sv="installations",y1="installations-internal",_1=n=>{const e=n.getProvider("app").getImmediate(),t=g1(e),i=gs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},v1=n=>{const e=n.getProvider("app").getImmediate(),t=gs(e,sv).getImmediate();return{getId:()=>f1(t),getToken:o=>p1(t,o)}};function w1(){ur(new qn(sv,_1,"PUBLIC")),ur(new qn(y1,v1,"PRIVATE"))}w1();Tn(B_,Af);Tn(B_,Af,"esm2017");/**
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
 */const ac="analytics",E1="firebase_id",T1="origin",I1=60*1e3,S1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nf="https://www.googletagmanager.com/gtag/js";/**
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
 */const en=new Pc("@firebase/analytics");/**
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
 */const R1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},cn=new ms("analytics","Analytics",R1);/**
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
 */function A1(n){if(!n.startsWith(Nf)){const e=cn.create("invalid-gtag-resource",{gtagURL:n});return en.warn(e.message),""}return n}function ov(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function C1(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function P1(n,e){const t=C1("firebase-js-sdk-policy",{createScriptURL:A1}),i=document.createElement("script"),o=`${Nf}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function k1(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function N1(n,e,t,i,o,l){const h=i[o];try{if(h)await e[h];else{const p=(await ov(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(d){en.error(d)}n("config",o,l)}async function x1(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const d=await ov(t);for(const p of h){const y=d.find(T=>T.measurementId===p),w=y&&e[y.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){en.error(l)}}function D1(n,e,t,i){async function o(l,...h){try{if(l==="event"){const[d,p]=h;await x1(n,e,t,d,p)}else if(l==="config"){const[d,p]=h;await N1(n,e,t,i,d,p)}else if(l==="consent"){const[d,p]=h;n("consent",d,p)}else if(l==="get"){const[d,p,y]=h;n("get",d,p,y)}else if(l==="set"){const[d]=h;n("set",d)}else n(l,...h)}catch(d){en.error(d)}}return o}function O1(n,e,t,i,o){let l=function(...h){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=D1(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function L1(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Nf)&&t.src.includes(n))return t;return null}/**
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
 */const V1=30,M1=1e3;class b1{constructor(e={},t=M1){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const av=new b1;function F1(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function U1(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:F1(i)},l=S1.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let d="";try{const p=await h.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw cn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:d})}return h.json()}async function j1(n,e=av,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw cn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw cn.create("no-api-key")}const h=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new $1;return setTimeout(async()=>{d.abort()},I1),lv({appId:i,apiKey:o,measurementId:l},h,d,e)}async function lv(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=av){var l;const{appId:h,measurementId:d}=n;try{await z1(i,e)}catch(p){if(d)return en.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:d};throw p}try{const p=await U1(n);return o.deleteThrottleMetadata(h),p}catch(p){const y=p;if(!B1(y)){if(o.deleteThrottleMetadata(h),d)return en.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:h,measurementId:d};throw p}const w=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?qg(t,o.intervalMillis,V1):qg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(h,T),en.debug(`Calling attemptFetch again in ${w} millis`),lv(n,T,i,o)}}function z1(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(cn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function B1(n){if(!(n instanceof Gn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class $1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function q1(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,h=Object.assign(Object.assign({},i),{send_to:l});n("event",t,h)}}/**
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
 */async function H1(){if(L_())try{await V_()}catch(n){return en.warn(cn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return en.warn(cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function W1(n,e,t,i,o,l,h){var d;const p=j1(n);p.then(x=>{t[x.measurementId]=x.appId,n.options.measurementId&&x.measurementId!==n.options.measurementId&&en.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>en.error(x)),e.push(p);const y=H1().then(x=>{if(x)return i.getId()}),[w,T]=await Promise.all([p,y]);L1(l)||P1(l,w.measurementId),o("js",new Date);const R=(d=h==null?void 0:h.config)!==null&&d!==void 0?d:{};return R[T1]="firebase",R.update=!0,T!=null&&(R[E1]=T),o("config",w.measurementId,R),w.measurementId}/**
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
 */class G1{constructor(e){this.app=e}_delete(){return delete Ha[this.app.options.appId],Promise.resolve()}}let Ha={},ty=[];const ny={};let Vd="dataLayer",K1="gtag",ry,uv,iy=!1;function Q1(){const n=[];if(O_()&&n.push("This is a browser extension environment."),gI()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=cn.create("invalid-analytics-context",{errorInfo:e});en.warn(t.message)}}function Y1(n,e,t){Q1();const i=n.options.appId;if(!i)throw cn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)en.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw cn.create("no-api-key");if(Ha[i]!=null)throw cn.create("already-exists",{id:i});if(!iy){k1(Vd);const{wrappedGtag:l,gtagCore:h}=O1(Ha,ty,ny,Vd,K1);uv=l,ry=h,iy=!0}return Ha[i]=W1(n,ty,ny,e,ry,Vd,t),new G1(n)}function X1(n=Rf()){n=jt(n);const e=gs(n,ac);return e.isInitialized()?e.getImmediate():J1(n)}function J1(n,e={}){const t=gs(n,ac);if(t.isInitialized()){const o=t.getImmediate();if(Ja(e,t.getOptions()))return o;throw cn.create("already-initialized")}return t.initialize({options:e})}function Z1(n,e,t,i){n=jt(n),q1(uv,Ha[n.app.options.appId],e,t,i).catch(o=>en.error(o))}const sy="@firebase/analytics",oy="0.10.10";function eR(){ur(new qn(ac,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return Y1(i,o,t)},"PUBLIC")),ur(new qn("analytics-internal",n,"PRIVATE")),Tn(sy,oy),Tn(sy,oy,"esm2017");function n(e){try{const t=e.getProvider(ac).getImmediate();return{logEvent:(i,o,l)=>Z1(t,i,o,l)}}catch(t){throw cn.create("interop-component-reg-failed",{reason:t})}}}eR();function xf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function cv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tR=cv,hv=new ms("auth","Firebase",cv());/**
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
 */const lc=new Pc("@firebase/auth");function nR(n,...e){lc.logLevel<=Pe.WARN&&lc.warn(`Auth (${Oo}): ${n}`,...e)}function Gu(n,...e){lc.logLevel<=Pe.ERROR&&lc.error(`Auth (${Oo}): ${n}`,...e)}/**
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
 */function In(n,...e){throw Of(n,...e)}function zn(n,...e){return Of(n,...e)}function Df(n,e,t){const i=Object.assign(Object.assign({},tR()),{[e]:t});return new ms("auth","Firebase",i).create(e,{appName:n.name})}function Lr(n){return Df(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rR(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&In(n,"argument-error"),Df(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Of(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return hv.create(n,...e)}function _e(n,e,...t){if(!n)throw Of(e,...t)}function Nr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gu(e),new Error(e)}function br(n,e){n||Nr(e)}/**
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
 */function Yd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function iR(){return ay()==="http:"||ay()==="https:"}function ay(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function sR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iR()||O_()||"connection"in navigator)?navigator.onLine:!0}function oR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class dl{constructor(e,t){this.shortDelay=e,this.longDelay=t,br(t>e,"Short delay should be less than long delay!"),this.isMobile=cI()||fI()}get(){return sR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lf(n,e){br(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class dv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lR=new dl(3e4,6e4);function Pi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function zr(n,e,t,i,o={}){return fv(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const d=hl(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return dI()||(y.referrerPolicy="no-referrer"),dv.fetch()(pv(n,n.config.apiHost,t,d),y)})}async function fv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},aR),e);try{const o=new cR(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Fu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const d=l.ok?h.errorMessage:h.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fu(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Fu(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw Fu(n,"user-disabled",h);const w=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Df(n,w,y);In(n,w)}}catch(o){if(o instanceof Gn)throw o;In(n,"network-request-failed",{message:String(o)})}}async function fl(n,e,t,i,o={}){const l=await zr(n,e,t,i,o);return"mfaPendingCredential"in l&&In(n,"multi-factor-auth-required",{_serverResponse:l}),l}function pv(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Lf(n.config,o):`${n.config.apiScheme}://${o}`}function uR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(zn(this.auth,"network-request-failed")),lR.get())})}}function Fu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=zn(n,e,i);return o.customData._tokenResponse=t,o}function ly(n){return n!==void 0&&n.enterprise!==void 0}class hR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return uR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function dR(n,e){return zr(n,"GET","/v2/recaptchaConfig",Pi(n,e))}/**
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
 */async function fR(n,e){return zr(n,"POST","/v1/accounts:delete",e)}async function mv(n,e){return zr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pR(n,e=!1){const t=jt(n),i=await t.getIdToken(e),o=Vf(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Wa(Md(o.auth_time)),issuedAtTime:Wa(Md(o.iat)),expirationTime:Wa(Md(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Md(n){return Number(n)*1e3}function Vf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Gu("JWT malformed, contained fewer than 3 sections"),null;try{const o=k_(t);return o?JSON.parse(o):(Gu("Failed to decode base64 JWT payload"),null)}catch(o){return Gu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function uy(n){const e=Vf(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function To(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Gn&&mR(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function mR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class gR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wa(this.lastLoginAt),this.creationTime=Wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await To(n,mv(t,{idToken:i}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?gv(l.providerUserInfo):[],d=_R(n.providerData,h),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),w=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Xd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(n,T)}async function yR(n){const e=jt(n);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _R(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function gv(n){return n.map(e=>{var{providerId:t}=e,i=xf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function vR(n,e){const t=await fv(n,{},async()=>{const i=hl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=pv(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",dv.fetch()(h,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wR(n,e){return zr(n,"POST","/v2/accounts:revokeToken",Pi(n,e))}/**
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
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=uy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await vR(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new _o;return i&&(_e(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
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
 */function fi(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=xf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Xd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await To(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pR(this,e)}reload(){return yR(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await uc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await To(this,fR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,d,p,y,w;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,x=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,b=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(d=t.tenantId)!==null&&d!==void 0?d:void 0,j=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,W=(y=t.createdAt)!==null&&y!==void 0?y:void 0,X=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:re,emailVerified:de,isAnonymous:Se,providerData:Te,stsTokenManager:N}=t;_e(re&&N,e,"internal-error");const I=_o.fromJSON(this.name,N);_e(typeof re=="string",e,"internal-error"),fi(T,e.name),fi(R,e.name),_e(typeof de=="boolean",e,"internal-error"),_e(typeof Se=="boolean",e,"internal-error"),fi(x,e.name),fi(b,e.name),fi($,e.name),fi(j,e.name),fi(W,e.name),fi(X,e.name);const A=new xr({uid:re,auth:e,email:R,emailVerified:de,displayName:T,isAnonymous:Se,photoURL:b,phoneNumber:x,tenantId:$,stsTokenManager:I,createdAt:W,lastLoginAt:X});return Te&&Array.isArray(Te)&&(A.providerData=Te.map(k=>Object.assign({},k))),j&&(A._redirectEventId=j),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new _o;o.updateFromServerResponse(t);const l=new xr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await uc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?gv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new _o;d.updateFromIdToken(i);const p=new xr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Xd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const cy=new Map;function Dr(n){br(n instanceof Function,"Expected a class definition");let e=cy.get(n);return e?(br(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,cy.set(n,e),e)}/**
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
 */class yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yv.type="NONE";const hy=yv;/**
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
 */function Ku(n,e,t){return`firebase:${n}:${e}:${t}`}class vo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Ku(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ku("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new vo(Dr(hy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Dr(hy);const h=Ku(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const w=await y._get(h);if(w){const T=xr._fromJSON(e,w);y!==l&&(d=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new vo(l,e,i):(l=p[0],d&&await l._set(h,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new vo(l,e,i))}}/**
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
 */function dy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ev(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_v(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Iv(e))return"Blackberry";if(Sv(e))return"Webos";if(vv(e))return"Safari";if((e.includes("chrome/")||wv(e))&&!e.includes("edge/"))return"Chrome";if(Tv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _v(n=Ut()){return/firefox\//i.test(n)}function vv(n=Ut()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wv(n=Ut()){return/crios\//i.test(n)}function Ev(n=Ut()){return/iemobile/i.test(n)}function Tv(n=Ut()){return/android/i.test(n)}function Iv(n=Ut()){return/blackberry/i.test(n)}function Sv(n=Ut()){return/webos/i.test(n)}function Mf(n=Ut()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ER(n=Ut()){var e;return Mf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TR(){return pI()&&document.documentMode===10}function Rv(n=Ut()){return Mf(n)||Tv(n)||Sv(n)||Iv(n)||/windows phone/i.test(n)||Ev(n)}/**
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
 */function Av(n,e=[]){let t;switch(n){case"Browser":t=dy(Ut());break;case"Worker":t=`${dy(Ut())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Oo}/${i}`}/**
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
 */class IR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,d)=>{try{const p=e(l);h(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function SR(n,e={}){return zr(n,"GET","/v2/passwordPolicy",Pi(n,e))}/**
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
 */const RR=6;class AR{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:RR,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class CR{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fy(this),this.idTokenSubscription=new fy(this),this.beforeStateQueue=new IR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await vo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await mv(this,{idToken:e}),i=await xr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Un(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Un(this.app))return Promise.reject(Lr(this));const t=e?jt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Un(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SR(this),t=new AR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await wR(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await vo.create(this,[Dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(d,this,"internal-error"),d.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Av(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&nR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ki(n){return jt(n)}class fy{constructor(e){this.auth=e,this.observer=null,this.addObserver=EI(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PR(n){xc=n}function Cv(n){return xc.loadJS(n)}function kR(){return xc.recaptchaEnterpriseScript}function NR(){return xc.gapiScript}function xR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class DR{constructor(){this.enterprise=new OR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class OR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const LR="recaptcha-enterprise",Pv="NO_RECAPTCHA";class VR{constructor(e){this.type=LR,this.auth=ki(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,d)=>{dR(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new hR(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,h,d){const p=window.grecaptcha;ly(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(Pv)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new DR().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(d=>{if(!t&&ly(window.grecaptcha))o(d,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=kR();p.length!==0&&(p+=d),Cv(p).then(()=>{o(d,l,h)}).catch(y=>{h(y)})}}).catch(d=>{h(d)})})}}async function py(n,e,t,i=!1,o=!1){const l=new VR(n);let h;if(o)h=Pv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Jd(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await py(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await py(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(h)})}/**
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
 */function MR(n,e){const t=gs(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ja(l,e??{}))return o;In(o,"already-initialized")}return t.initialize({options:e})}function bR(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Dr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function FR(n,e,t){const i=ki(n);_e(i._canInitEmulator,i,"emulator-config-failed"),_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=kv(e),{host:h,port:d}=UR(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${h}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),jR()}function kv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function UR(n){const e=kv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:my(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:my(h)}}}function my(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function jR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class bf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nr("not implemented")}_getIdTokenResponse(e){return Nr("not implemented")}_linkToIdToken(e,t){return Nr("not implemented")}_getReauthenticationResolver(e){return Nr("not implemented")}}async function zR(n,e){return zr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function BR(n,e){return fl(n,"POST","/v1/accounts:signInWithPassword",Pi(n,e))}/**
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
 */async function $R(n,e){return fl(n,"POST","/v1/accounts:signInWithEmailLink",Pi(n,e))}async function qR(n,e){return fl(n,"POST","/v1/accounts:signInWithEmailLink",Pi(n,e))}/**
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
 */class el extends bf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new el(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new el(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jd(e,t,"signInWithPassword",BR);case"emailLink":return $R(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jd(e,i,"signUpPassword",zR);case"emailLink":return qR(e,{idToken:t,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function wo(n,e){return fl(n,"POST","/v1/accounts:signInWithIdp",Pi(n,e))}/**
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
 */const HR="http://localhost";class ds extends bf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):In("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=xf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new ds(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return wo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,wo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wo(e,t)}buildRequest(){const e={requestUri:HR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hl(t)}return e}}/**
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
 */function WR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GR(n){const e=Ua(ja(n)).link,t=e?Ua(ja(e)).deep_link_id:null,i=Ua(ja(n)).deep_link_id;return(i?Ua(ja(i)).link:null)||i||t||e||n}class Ff{constructor(e){var t,i,o,l,h,d;const p=Ua(ja(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,w=(i=p.oobCode)!==null&&i!==void 0?i:null,T=WR((o=p.mode)!==null&&o!==void 0?o:null);_e(y&&w&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=w,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=GR(e);try{return new Ff(t)}catch{return null}}}/**
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
 */class Lo{constructor(){this.providerId=Lo.PROVIDER_ID}static credential(e,t){return el._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Ff.parseLink(t);return _e(i,"argument-error"),el._fromEmailAndCode(e,i.code,i.tenantId)}}Lo.PROVIDER_ID="password";Lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Uf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pl extends Uf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pi extends pl{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";pi.PROVIDER_ID="facebook.com";/**
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
 */class sr extends pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ds._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return sr.credential(t,i)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
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
 */class mi extends pl{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.GITHUB_SIGN_IN_METHOD="github.com";mi.PROVIDER_ID="github.com";/**
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
 */class gi extends pl{constructor(){super("twitter.com")}static credential(e,t){return ds._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return gi.credential(t,i)}catch{return null}}}gi.TWITTER_SIGN_IN_METHOD="twitter.com";gi.PROVIDER_ID="twitter.com";/**
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
 */async function KR(n,e){return fl(n,"POST","/v1/accounts:signUp",Pi(n,e))}/**
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
 */class fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await xr._fromIdTokenResponse(e,i,o),h=gy(i);return new fs({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=gy(i);return new fs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function gy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class cc extends Gn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new cc(e,t,i,o)}}function Nv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(n,l,e,i):l})}async function QR(n,e,t=!1){const i=await To(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return fs._forOperation(n,"link",i)}/**
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
 */async function YR(n,e,t=!1){const{auth:i}=n;if(Un(i.app))return Promise.reject(Lr(i));const o="reauthenticate";try{const l=await To(n,Nv(i,o,e,n),t);_e(l.idToken,i,"internal-error");const h=Vf(l.idToken);_e(h,i,"internal-error");const{sub:d}=h;return _e(n.uid===d,i,"user-mismatch"),fs._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&In(i,"user-mismatch"),l}}/**
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
 */async function xv(n,e,t=!1){if(Un(n.app))return Promise.reject(Lr(n));const i="signIn",o=await Nv(n,i,e),l=await fs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function XR(n,e){return xv(ki(n),e)}/**
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
 */async function Dv(n){const e=ki(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JR(n,e,t){if(Un(n.app))return Promise.reject(Lr(n));const i=ki(n),h=await Jd(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KR).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Dv(n),p}),d=await fs._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(d.user),d}function ZR(n,e,t){return Un(n.app)?Promise.reject(Lr(n)):XR(jt(n),Lo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Dv(n),i})}/**
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
 */async function eA(n,e){return zr(n,"POST","/v1/accounts:update",e)}/**
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
 */async function tA(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=jt(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await To(i,eA(i.auth,l));i.displayName=h.displayName||null,i.photoURL=h.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(h)}function nA(n,e,t,i){return jt(n).onIdTokenChanged(e,t,i)}function rA(n,e,t){return jt(n).beforeAuthStateChanged(e,t)}const hc="__sak";/**
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
 */class Ov{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iA=1e3,sA=10;class Lv extends Ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,d,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);TR()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,sA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},iA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lv.type="LOCAL";const oA=Lv;/**
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
 */class Vv extends Ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vv.type="SESSION";const Mv=Vv;/**
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
 */function aA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Dc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(h).map(async y=>y(t.origin,l)),p=await aA(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
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
 */function jf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class lA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((d,p)=>{const y=jf("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(R.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function or(){return window}function uA(n){or().location.href=n}/**
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
 */function bv(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function cA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function dA(){return bv()?self:null}/**
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
 */const Fv="firebaseLocalStorageDb",fA=1,dc="firebaseLocalStorage",Uv="fbase_key";class ml{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oc(n,e){return n.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function pA(){const n=indexedDB.deleteDatabase(Fv);return new ml(n).toPromise()}function Zd(){const n=indexedDB.open(Fv,fA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(dc,{keyPath:Uv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(dc)?e(i):(i.close(),await pA(),e(await Zd()))})})}async function yy(n,e,t){const i=Oc(n,!0).put({[Uv]:e,value:t});return new ml(i).toPromise()}async function mA(n,e){const t=Oc(n,!1).get(e),i=await new ml(t).toPromise();return i===void 0?null:i.value}function _y(n,e){const t=Oc(n,!0).delete(e);return new ml(t).toPromise()}const gA=800,yA=3;class jv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>yA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(dA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await cA(),!this.activeServiceWorker)return;this.sender=new lA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zd();return await yy(e,hc,"1"),await _y(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>yy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>mA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_y(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Oc(o,!1).getAll();return new ml(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jv.type="LOCAL";const _A=jv;new dl(3e4,6e4);/**
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
 */function zv(n,e){return e?Dr(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class zf extends bf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vA(n){return xv(n.auth,new zf(n),n.bypassAuthState)}function wA(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),YR(t,new zf(n),n.bypassAuthState)}async function EA(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),QR(t,new zf(n),n.bypassAuthState)}/**
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
 */class Bv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:d}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vA;case"linkViaPopup":case"linkViaRedirect":return EA;case"reauthViaPopup":case"reauthViaRedirect":return wA;default:In(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TA=new dl(2e3,1e4);async function IA(n,e,t){if(Un(n.app))return Promise.reject(zn(n,"operation-not-supported-in-this-environment"));const i=ki(n);rR(n,e,Uf);const o=zv(i,t);return new as(i,"signInViaPopup",e,o).executeNotNull()}class as extends Bv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TA.get())};e()}}as.currentPopupAction=null;/**
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
 */const SA="pendingRedirect",Qu=new Map;class RA extends Bv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Qu.get(this.auth._key());if(!e){try{const i=await AA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Qu.set(this.auth._key(),e)}return this.bypassAuthState||Qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AA(n,e){const t=kA(e),i=PA(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function CA(n,e){Qu.set(n._key(),e)}function PA(n){return Dr(n._redirectPersistence)}function kA(n){return Ku(SA,n.config.apiKey,n.name)}async function NA(n,e,t=!1){if(Un(n.app))return Promise.reject(Lr(n));const i=ki(n),o=zv(i,e),h=await new RA(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const xA=10*60*1e3;class DA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!$v(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(zn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xA&&this.cachedEventUids.clear(),this.cachedEventUids.has(vy(e))}saveEventToCache(e){this.cachedEventUids.add(vy(e)),this.lastProcessedEventTime=Date.now()}}function vy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $v({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $v(n);default:return!1}}/**
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
 */async function LA(n,e={}){return zr(n,"GET","/v1/projects",e)}/**
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
 */const VA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MA=/^https?/;async function bA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await LA(n);for(const t of e)try{if(FA(t))return}catch{}In(n,"unauthorized-domain")}function FA(n){const e=Yd(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!MA.test(t))return!1;if(VA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const UA=new dl(3e4,6e4);function wy(){const n=or().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function jA(n){return new Promise((e,t)=>{var i,o,l;function h(){wy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wy(),t(zn(n,"network-request-failed"))},timeout:UA.get()})}if(!((o=(i=or().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=or().gapi)===null||l===void 0)&&l.load)h();else{const d=xR("iframefcb");return or()[d]=()=>{gapi.load?h():t(zn(n,"network-request-failed"))},Cv(`${NR()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Yu=null,e})}let Yu=null;function zA(n){return Yu=Yu||jA(n),Yu}/**
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
 */const BA=new dl(5e3,15e3),$A="__/auth/iframe",qA="emulator/auth/iframe",HA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GA(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Lf(e,qA):`https://${n.config.authDomain}/${$A}`,i={apiKey:e.apiKey,appName:n.name,v:Oo},o=WA.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${hl(i).slice(1)}`}async function KA(n){const e=await zA(n),t=or().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:GA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=zn(n,"network-request-failed"),d=or().setTimeout(()=>{l(h)},BA.get());function p(){or().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
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
 */const QA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YA=500,XA=600,JA="_blank",ZA="http://localhost";class Ey{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eC(n,e,t,i=YA,o=XA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},QA),{width:i.toString(),height:o.toString(),top:l,left:h}),y=Ut().toLowerCase();t&&(d=wv(y)?JA:t),_v(y)&&(e=e||ZA,p.scrollbars="yes");const w=Object.entries(p).reduce((R,[x,b])=>`${R}${x}=${b},`,"");if(ER(y)&&d!=="_self")return tC(e||"",d),new Ey(null);const T=window.open(e||"",d,w);_e(T,n,"popup-blocked");try{T.focus()}catch{}return new Ey(T)}function tC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const nC="__/auth/handler",rC="emulator/auth/handler",iC=encodeURIComponent("fac");async function Ty(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Oo,eventId:o};if(e instanceof Uf){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",wI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof pl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}n.tenantId&&(h.tid=n.tenantId);const d=h;for(const w of Object.keys(d))d[w]===void 0&&delete d[w];const p=await n._getAppCheckToken(),y=p?`#${iC}=${encodeURIComponent(p)}`:"";return`${sC(n)}?${hl(d).slice(1)}${y}`}function sC({config:n}){return n.emulator?Lf(n,rC):`https://${n.authDomain}/${nC}`}/**
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
 */const bd="webStorageSupport";class oC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mv,this._completeRedirectFn=NA,this._overrideRedirectResult=CA}async _openPopup(e,t,i,o){var l;br((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Ty(e,t,i,Yd(),o);return eC(e,h,jf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Ty(e,t,i,Yd(),o);return uA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(br(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await KA(e),i=new DA(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bd,{type:bd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[bd];h!==void 0&&t(!!h),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Rv()||vv()||Mf()}}const aC=oC;var Iy="@firebase/auth",Sy="1.8.1";/**
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
 */class lC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cC(n){ur(new qn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=i.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Av(n)},y=new CR(i,o,l,p);return bR(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ur(new qn("auth-internal",e=>{const t=ki(e.getProvider("auth").getImmediate());return(i=>new lC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(Iy,Sy,uC(n)),Tn(Iy,Sy,"esm2017")}/**
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
 */const hC=5*60,dC=D_("authIdTokenMaxAge")||hC;let Ry=null;const fC=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>dC)return;const o=t==null?void 0:t.token;Ry!==o&&(Ry=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function pC(n=Rf()){const e=gs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=MR(n,{popupRedirectResolver:aC,persistence:[_A,oA,Mv]}),i=D_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=fC(l.toString());rA(t,h,()=>h(t.currentUser)),nA(t,d=>h(d))}}const o=N_("auth");return o&&FR(t,`http://${o}`),t}function mC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}PR({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=zn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",mC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cC("Browser");var Ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var us,qv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(k,O,V){for(var C=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)C[nt-2]=arguments[nt];return I.prototype[O].apply(k,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var k=Array(16);if(typeof I=="string")for(var O=0;16>O;++O)k[O]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(O=0;16>O;++O)k[O]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],O=N.g[2];var V=N.g[3],C=I+(V^A&(O^V))+k[0]+3614090360&4294967295;I=A+(C<<7&4294967295|C>>>25),C=V+(O^I&(A^O))+k[1]+3905402710&4294967295,V=I+(C<<12&4294967295|C>>>20),C=O+(A^V&(I^A))+k[2]+606105819&4294967295,O=V+(C<<17&4294967295|C>>>15),C=A+(I^O&(V^I))+k[3]+3250441966&4294967295,A=O+(C<<22&4294967295|C>>>10),C=I+(V^A&(O^V))+k[4]+4118548399&4294967295,I=A+(C<<7&4294967295|C>>>25),C=V+(O^I&(A^O))+k[5]+1200080426&4294967295,V=I+(C<<12&4294967295|C>>>20),C=O+(A^V&(I^A))+k[6]+2821735955&4294967295,O=V+(C<<17&4294967295|C>>>15),C=A+(I^O&(V^I))+k[7]+4249261313&4294967295,A=O+(C<<22&4294967295|C>>>10),C=I+(V^A&(O^V))+k[8]+1770035416&4294967295,I=A+(C<<7&4294967295|C>>>25),C=V+(O^I&(A^O))+k[9]+2336552879&4294967295,V=I+(C<<12&4294967295|C>>>20),C=O+(A^V&(I^A))+k[10]+4294925233&4294967295,O=V+(C<<17&4294967295|C>>>15),C=A+(I^O&(V^I))+k[11]+2304563134&4294967295,A=O+(C<<22&4294967295|C>>>10),C=I+(V^A&(O^V))+k[12]+1804603682&4294967295,I=A+(C<<7&4294967295|C>>>25),C=V+(O^I&(A^O))+k[13]+4254626195&4294967295,V=I+(C<<12&4294967295|C>>>20),C=O+(A^V&(I^A))+k[14]+2792965006&4294967295,O=V+(C<<17&4294967295|C>>>15),C=A+(I^O&(V^I))+k[15]+1236535329&4294967295,A=O+(C<<22&4294967295|C>>>10),C=I+(O^V&(A^O))+k[1]+4129170786&4294967295,I=A+(C<<5&4294967295|C>>>27),C=V+(A^O&(I^A))+k[6]+3225465664&4294967295,V=I+(C<<9&4294967295|C>>>23),C=O+(I^A&(V^I))+k[11]+643717713&4294967295,O=V+(C<<14&4294967295|C>>>18),C=A+(V^I&(O^V))+k[0]+3921069994&4294967295,A=O+(C<<20&4294967295|C>>>12),C=I+(O^V&(A^O))+k[5]+3593408605&4294967295,I=A+(C<<5&4294967295|C>>>27),C=V+(A^O&(I^A))+k[10]+38016083&4294967295,V=I+(C<<9&4294967295|C>>>23),C=O+(I^A&(V^I))+k[15]+3634488961&4294967295,O=V+(C<<14&4294967295|C>>>18),C=A+(V^I&(O^V))+k[4]+3889429448&4294967295,A=O+(C<<20&4294967295|C>>>12),C=I+(O^V&(A^O))+k[9]+568446438&4294967295,I=A+(C<<5&4294967295|C>>>27),C=V+(A^O&(I^A))+k[14]+3275163606&4294967295,V=I+(C<<9&4294967295|C>>>23),C=O+(I^A&(V^I))+k[3]+4107603335&4294967295,O=V+(C<<14&4294967295|C>>>18),C=A+(V^I&(O^V))+k[8]+1163531501&4294967295,A=O+(C<<20&4294967295|C>>>12),C=I+(O^V&(A^O))+k[13]+2850285829&4294967295,I=A+(C<<5&4294967295|C>>>27),C=V+(A^O&(I^A))+k[2]+4243563512&4294967295,V=I+(C<<9&4294967295|C>>>23),C=O+(I^A&(V^I))+k[7]+1735328473&4294967295,O=V+(C<<14&4294967295|C>>>18),C=A+(V^I&(O^V))+k[12]+2368359562&4294967295,A=O+(C<<20&4294967295|C>>>12),C=I+(A^O^V)+k[5]+4294588738&4294967295,I=A+(C<<4&4294967295|C>>>28),C=V+(I^A^O)+k[8]+2272392833&4294967295,V=I+(C<<11&4294967295|C>>>21),C=O+(V^I^A)+k[11]+1839030562&4294967295,O=V+(C<<16&4294967295|C>>>16),C=A+(O^V^I)+k[14]+4259657740&4294967295,A=O+(C<<23&4294967295|C>>>9),C=I+(A^O^V)+k[1]+2763975236&4294967295,I=A+(C<<4&4294967295|C>>>28),C=V+(I^A^O)+k[4]+1272893353&4294967295,V=I+(C<<11&4294967295|C>>>21),C=O+(V^I^A)+k[7]+4139469664&4294967295,O=V+(C<<16&4294967295|C>>>16),C=A+(O^V^I)+k[10]+3200236656&4294967295,A=O+(C<<23&4294967295|C>>>9),C=I+(A^O^V)+k[13]+681279174&4294967295,I=A+(C<<4&4294967295|C>>>28),C=V+(I^A^O)+k[0]+3936430074&4294967295,V=I+(C<<11&4294967295|C>>>21),C=O+(V^I^A)+k[3]+3572445317&4294967295,O=V+(C<<16&4294967295|C>>>16),C=A+(O^V^I)+k[6]+76029189&4294967295,A=O+(C<<23&4294967295|C>>>9),C=I+(A^O^V)+k[9]+3654602809&4294967295,I=A+(C<<4&4294967295|C>>>28),C=V+(I^A^O)+k[12]+3873151461&4294967295,V=I+(C<<11&4294967295|C>>>21),C=O+(V^I^A)+k[15]+530742520&4294967295,O=V+(C<<16&4294967295|C>>>16),C=A+(O^V^I)+k[2]+3299628645&4294967295,A=O+(C<<23&4294967295|C>>>9),C=I+(O^(A|~V))+k[0]+4096336452&4294967295,I=A+(C<<6&4294967295|C>>>26),C=V+(A^(I|~O))+k[7]+1126891415&4294967295,V=I+(C<<10&4294967295|C>>>22),C=O+(I^(V|~A))+k[14]+2878612391&4294967295,O=V+(C<<15&4294967295|C>>>17),C=A+(V^(O|~I))+k[5]+4237533241&4294967295,A=O+(C<<21&4294967295|C>>>11),C=I+(O^(A|~V))+k[12]+1700485571&4294967295,I=A+(C<<6&4294967295|C>>>26),C=V+(A^(I|~O))+k[3]+2399980690&4294967295,V=I+(C<<10&4294967295|C>>>22),C=O+(I^(V|~A))+k[10]+4293915773&4294967295,O=V+(C<<15&4294967295|C>>>17),C=A+(V^(O|~I))+k[1]+2240044497&4294967295,A=O+(C<<21&4294967295|C>>>11),C=I+(O^(A|~V))+k[8]+1873313359&4294967295,I=A+(C<<6&4294967295|C>>>26),C=V+(A^(I|~O))+k[15]+4264355552&4294967295,V=I+(C<<10&4294967295|C>>>22),C=O+(I^(V|~A))+k[6]+2734768916&4294967295,O=V+(C<<15&4294967295|C>>>17),C=A+(V^(O|~I))+k[13]+1309151649&4294967295,A=O+(C<<21&4294967295|C>>>11),C=I+(O^(A|~V))+k[4]+4149444226&4294967295,I=A+(C<<6&4294967295|C>>>26),C=V+(A^(I|~O))+k[11]+3174756917&4294967295,V=I+(C<<10&4294967295|C>>>22),C=O+(I^(V|~A))+k[2]+718787259&4294967295,O=V+(C<<15&4294967295|C>>>17),C=A+(V^(O|~I))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+O&4294967295,N.g[3]=N.g[3]+V&4294967295}i.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,k=this.B,O=this.h,V=0;V<I;){if(O==0)for(;V<=A;)o(this,N,V),V+=this.blockSize;if(typeof N=="string"){for(;V<I;)if(k[O++]=N.charCodeAt(V++),O==this.blockSize){o(this,k),O=0;break}}else for(;V<I;)if(k[O++]=N[V++],O==this.blockSize){o(this,k),O=0;break}}this.h=O,this.o+=I},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var k=0;32>k;k+=8)N[A++]=this.g[I]>>>k&255;return N};function l(N,I){var A=d;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],k=!0,O=N.length-1;0<=O;O--){var V=N[O]|0;k&&V==I||(A[O]=V,k=!1)}this.g=A}var d={};function p(N){return-128<=N&&128>N?l(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return j(y(-N));for(var I=[],A=1,k=0;N>=A;k++)I[k]=N/A|0,A*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return j(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(I,8)),k=T,O=0;O<N.length;O+=8){var V=Math.min(8,N.length-O),C=parseInt(N.substring(O,O+V),I);8>V?(V=y(Math.pow(I,V)),k=k.j(V).add(y(C))):(k=k.j(A),k=k.add(y(C)))}return k}var T=p(0),R=p(1),x=p(16777216);n=h.prototype,n.m=function(){if($(this))return-j(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var k=this.i(A);N+=(0<=k?k:4294967296+k)*I,I*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(b(this))return"0";if($(this))return"-"+j(this).toString(N);for(var I=y(Math.pow(N,6)),A=this,k="";;){var O=de(A,I).g;A=W(A,O.j(I));var V=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=O,b(A))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function b(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function $(N){return N.h==-1}n.l=function(N){return N=W(this,N),$(N)?-1:b(N)?0:1};function j(N){for(var I=N.g.length,A=[],k=0;k<I;k++)A[k]=~N.g[k];return new h(A,~N.h).add(R)}n.abs=function(){return $(this)?j(this):this},n.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0,O=0;O<=I;O++){var V=k+(this.i(O)&65535)+(N.i(O)&65535),C=(V>>>16)+(this.i(O)>>>16)+(N.i(O)>>>16);k=C>>>16,V&=65535,C&=65535,A[O]=C<<16|V}return new h(A,A[A.length-1]&-2147483648?-1:0)};function W(N,I){return N.add(j(I))}n.j=function(N){if(b(this)||b(N))return T;if($(this))return $(N)?j(this).j(j(N)):j(j(this).j(N));if($(N))return j(this.j(j(N)));if(0>this.l(x)&&0>N.l(x))return y(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],k=0;k<2*I;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var O=0;O<N.g.length;O++){var V=this.i(k)>>>16,C=this.i(k)&65535,nt=N.i(O)>>>16,Nt=N.i(O)&65535;A[2*k+2*O]+=C*Nt,X(A,2*k+2*O),A[2*k+2*O+1]+=V*Nt,X(A,2*k+2*O+1),A[2*k+2*O+1]+=C*nt,X(A,2*k+2*O+1),A[2*k+2*O+2]+=V*nt,X(A,2*k+2*O+2)}for(k=0;k<I;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=I;k<2*I;k++)A[k]=0;return new h(A,0)};function X(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function re(N,I){this.g=N,this.h=I}function de(N,I){if(b(I))throw Error("division by zero");if(b(N))return new re(T,T);if($(N))return I=de(j(N),I),new re(j(I.g),j(I.h));if($(I))return I=de(N,j(I)),new re(j(I.g),I.h);if(30<N.g.length){if($(N)||$(I))throw Error("slowDivide_ only works with positive integers.");for(var A=R,k=I;0>=k.l(N);)A=Se(A),k=Se(k);var O=Te(A,1),V=Te(k,1);for(k=Te(k,2),A=Te(A,2);!b(k);){var C=V.add(k);0>=C.l(N)&&(O=O.add(A),V=C),k=Te(k,1),A=Te(A,1)}return I=W(N,O.j(I)),new re(O,I)}for(O=T;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=y(A),C=V.j(I);$(C)||0<C.l(N);)A-=k,V=y(A),C=V.j(I);b(V)&&(V=R),O=O.add(V),N=W(N,C)}return new re(O,N)}n.A=function(N){return de(this,N).h},n.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)&N.i(k);return new h(A,this.h&N.h)},n.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)|N.i(k);return new h(A,this.h|N.h)},n.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)^N.i(k);return new h(A,this.h^N.h)};function Se(N){for(var I=N.g.length+1,A=[],k=0;k<I;k++)A[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(A,N.h)}function Te(N,I){var A=I>>5;I%=32;for(var k=N.g.length-A,O=[],V=0;V<k;V++)O[V]=0<I?N.i(V+A)>>>I|N.i(V+A+1)<<32-I:N.i(V+A);return new h(O,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,qv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=w,us=h}).apply(typeof Ay<"u"?Ay:typeof self<"u"?self:typeof window<"u"?window:{});var Uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hv,za,Wv,Xu,ef,Gv,Kv,Qv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uu=="object"&&Uu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in _))break e;_=_[M]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,E=!1,M={next:function(){if(!E&&_<u.length){var B=_++;return{value:m(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),u.apply(m,M)}}return function(){return u.apply(m,arguments)}}function R(u,m,_){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,R.apply(null,arguments)}function x(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function b(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,M,B){for(var ee=Array(arguments.length-2),je=2;je<arguments.length;je++)ee[je-2]=arguments[je];return m.prototype[M].apply(E,ee)}}function $(u){const m=u.length;if(0<m){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function j(u,m){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(p(E)){const M=u.length||0,B=E.length||0;u.length=M+B;for(let ee=0;ee<B;ee++)u[M+ee]=E[ee]}else u.push(E)}}class W{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function X(u){return/^[\s\xa0]*$/.test(u)}function re(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function de(u){return de[" "](u),u}de[" "]=function(){};var Se=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function Te(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function I(u){const m={};for(const _ in u)m[_]=u[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let _,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(_ in E)u[_]=E[_];for(let B=0;B<A.length;B++)_=A[B],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function V(u){d.setTimeout(()=>{throw u},0)}function C(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class nt{constructor(){this.h=this.g=null}add(m,_){const E=Nt.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var Nt=new W(()=>new xt,u=>u.reset());class xt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,ne=!1,me=new nt,se=()=>{const u=d.Promise.resolve(void 0);ze=()=>{u.then(L)}};var L=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){V(_)}var m=Nt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ne=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Se){e:{try{de(m.nodeName);var M=!0;break e}catch{}M=!1}M||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}b(Ae,fe);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,m,_,E,M){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=M,this.key=++Fe,this.da=this.fa=!1}function yt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function dr(u){this.src=u,this.g={},this.h=0}dr.prototype.add=function(u,m,_,E,M){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var ee=Br(u,m,E,M);return-1<ee?(m=u[ee],_||(m.fa=!1)):(m=new $e(m,this.src,B,!!E,M),m.fa=_,u.push(m)),m};function Es(u,m){var _=m.type;if(_ in u.g){var E=u.g[_],M=Array.prototype.indexOf.call(E,m,void 0),B;(B=0<=M)&&Array.prototype.splice.call(E,M,1),B&&(yt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Br(u,m,_,E){for(var M=0;M<u.length;++M){var B=u[M];if(!B.da&&B.listener==m&&B.capture==!!_&&B.ha==E)return M}return-1}var Ni="closure_lm_"+(1e6*Math.random()|0),Ts={};function zo(u,m,_,E,M){if(Array.isArray(m)){for(var B=0;B<m.length;B++)zo(u,m[B],_,E,M);return null}return _=qo(_),u&&u[be]?u.K(m,_,y(E)?!!E.capture:!!E,M):Bo(u,m,_,!1,E,M)}function Bo(u,m,_,E,M,B){if(!m)throw Error("Invalid event type");var ee=y(M)?!!M.capture:!!M,je=Ss(u);if(je||(u[Ni]=je=new dr(u)),_=je.add(m,_,E,ee,B),_.proxy)return _;if(E=El(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)Re||(M=ee),M===void 0&&(M=!1),u.addEventListener(m.toString(),E,M);else if(u.attachEvent)u.attachEvent(pr(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function El(){function u(_){return m.call(u.src,u.listener,_)}const m=$o;return u}function Is(u,m,_,E,M){if(Array.isArray(m))for(var B=0;B<m.length;B++)Is(u,m[B],_,E,M);else E=y(E)?!!E.capture:!!E,_=qo(_),u&&u[be]?(u=u.i,m=String(m).toString(),m in u.g&&(B=u.g[m],_=Br(B,_,E,M),-1<_&&(yt(B[_]),Array.prototype.splice.call(B,_,1),B.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ss(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Br(m,_,E,M)),(_=-1<u?m[u]:null)&&fr(_))}function fr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[be])Es(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent(pr(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=Ss(m))?(Es(_,u),_.h==0&&(_.src=null,m[Ni]=null)):yt(u)}}}function pr(u){return u in Ts?Ts[u]:Ts[u]="on"+u}function $o(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,E=u.ha||u.src;u.fa&&fr(u),u=_.call(E,m)}return u}function Ss(u){return u=u[Ni],u instanceof dr?u:null}var Rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function qo(u){return typeof u=="function"?u:(u[Rs]||(u[Rs]=function(m){return u.handleEvent(m)}),u[Rs])}function ct(){G.call(this),this.i=new dr(this),this.M=this,this.F=null}b(ct,G),ct.prototype[be]=!0,ct.prototype.removeEventListener=function(u,m,_,E){Is(this,u,m,_,E)};function ht(u,m){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new fe(m,u);else if(m instanceof fe)m.target=m.target||u;else{var M=m;m=new fe(E,u),k(m,M)}if(M=!0,_)for(var B=_.length-1;0<=B;B--){var ee=m.g=_[B];M=mr(ee,E,!0,m)&&M}if(ee=m.g=u,M=mr(ee,E,!0,m)&&M,M=mr(ee,E,!1,m)&&M,_)for(B=0;B<_.length;B++)ee=m.g=_[B],M=mr(ee,E,!1,m)&&M}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],E=0;E<_.length;E++)yt(_[E]);delete u.g[m],u.h--}}this.F=null},ct.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},ct.prototype.L=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function mr(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var M=!0,B=0;B<m.length;++B){var ee=m[B];if(ee&&!ee.da&&ee.capture==_){var je=ee.listener,dt=ee.ha||ee.src;ee.fa&&Es(u.i,ee),M=je.call(dt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Ho(u,m,_){if(typeof u=="function")_&&(u=R(u,_));else if(u&&typeof u.handleEvent=="function")u=R(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function $r(u){u.g=Ho(()=>{u.g=null,u.i&&(u.i=!1,$r(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class xi extends G{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:$r(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Di(u){G.call(this),this.h=u,this.g={}}b(Di,G);var Wo=[];function Go(u){Te(u.g,function(m,_){this.g.hasOwnProperty(_)&&fr(m)},u),u.g={}}Di.prototype.N=function(){Di.aa.N.call(this),Go(this)},Di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ko=d.JSON.stringify,Qo=d.JSON.parse,Yo=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Oi(){}Oi.prototype.h=null;function As(u){return u.h||(u.h=u.i())}function Cs(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){fe.call(this,"d")}b(Kn,fe);function Ps(){fe.call(this,"c")}b(Ps,fe);var Qn={},Xo=null;function Li(){return Xo=Xo||new ct}Qn.La="serverreachability";function Jo(u){fe.call(this,Qn.La,u)}b(Jo,fe);function gr(u){const m=Li();ht(m,new Jo(m))}Qn.STAT_EVENT="statevent";function Zo(u,m){fe.call(this,Qn.STAT_EVENT,u),this.stat=m}b(Zo,fe);function rt(u){const m=Li();ht(m,new Zo(m,u))}Qn.Ma="timingevent";function ks(u,m){fe.call(this,Qn.Ma,u),this.size=m}b(ks,fe);function Sn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Vi(){this.g=!0}Vi.prototype.xa=function(){this.g=!1};function Mi(u,m,_,E,M,B){u.info(function(){if(u.g)if(B)for(var ee="",je=B.split("&"),dt=0;dt<je.length;dt++){var Oe=je[dt].split("=");if(1<Oe.length){var _t=Oe[0];Oe=Oe[1];var ot=_t.split("_");ee=2<=ot.length&&ot[1]=="type"?ee+(_t+"="+Oe+"&"):ee+(_t+"=redacted&")}}else ee=null;else ee=B;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+m+`
`+_+`
`+ee})}function Ns(u,m,_,E,M,B,ee){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+m+`
`+_+`
`+B+" "+ee})}function Rn(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Qc(u,_)+(E?" "+E:"")})}function ea(u,m){u.info(function(){return"TIMEOUT: "+m})}Vi.prototype.info=function(){};function Qc(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var B=M[0];if(B!="noop"&&B!="stop"&&B!="close")for(var ee=1;ee<M.length;ee++)M[ee]=""}}}}return Ko(_)}catch{return m}}var xs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},An;function bi(){}b(bi,Oi),bi.prototype.g=function(){return new XMLHttpRequest},bi.prototype.i=function(){return{}},An=new bi;function Cn(u,m,_,E){this.j=u,this.i=m,this.l=_,this.R=E||1,this.U=new Di(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Il}function Il(){this.i=null,this.g="",this.h=!1}var ta={},Ds={};function Os(u,m,_){u.L=1,u.v=Kr(rn(m)),u.m=_,u.P=!0,na(u,null)}function na(u,m){u.F=Date.now(),qe(u),u.A=rn(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Yr(_.i,"t",E),u.C=0,_=u.j.J,u.h=new Il,u.g=zl(u.j,_?m:null,!u.m),0<u.O&&(u.M=new xi(R(u.Y,u,u.g),u.O)),m=u.U,_=u.g,E=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(Wo[0]=M.toString()),M=Wo);for(var B=0;B<M.length;B++){var ee=zo(_,M[B],E||m.handleEvent,!1,m.h||m);if(!ee)break;m.g[ee.key]=ee}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),gr(),Mi(u.i,u.u,u.A,u.l,u.R,u.m)}Cn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Wt(u)==3?m.j():this.Y(u)},Cn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Wt(this.g);var m=this.g.Ba();const pn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||la(this.g)))){this.J||ot!=4||m==7||(m==8||0>=pn?gr(3):gr(2)),Fi(this);var _=this.g.Z();this.X=_;t:if(Sl(this)){var E=la(this.g);u="";var M=E.length,B=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dn(this),qr(this);var ee="";break t}this.h.i=new d.TextDecoder}for(m=0;m<M;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(B&&m==M-1)});E.length=0,this.h.g+=u,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=_==200,Ns(this.i,this.u,this.A,this.l,this.R,ot,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,dt=this.g;if((je=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(je)){var Oe=je;break t}}Oe=null}if(_=Oe)Rn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ra(this,_);else{this.o=!1,this.s=3,rt(12),dn(this),qr(this);break e}}if(this.P){_=!0;let on;for(;!this.J&&this.C<ee.length;)if(on=Yc(this,ee),on==Ds){ot==4&&(this.s=4,rt(14),_=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(on==ta){this.s=4,rt(15),Rn(this.i,this.l,ee,"[Invalid Chunk]"),_=!1;break}else Rn(this.i,this.l,on,null),ra(this,on);if(Sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||ee.length!=0||this.h.h||(this.s=1,rt(16),_=!1),this.o=this.o&&_,!_)Rn(this.i,this.l,ee,"[Invalid Chunked Response]"),dn(this),qr(this);else if(0<ee.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),ca(_t),_t.M=!0,rt(11))}}else Rn(this.i,this.l,ee,null),ra(this,ee);ot==4&&dn(this),this.o&&!this.J&&(ot==4?qs(this.j,this):(this.o=!1,qe(this)))}else Us(this.g),_==400&&0<ee.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),dn(this),qr(this)}}}catch{}finally{}};function Sl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Yc(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?Ds:(_=Number(m.substring(_,E)),isNaN(_)?ta:(E+=1,E+_>m.length?Ds:(m=m.slice(E,E+_),u.C=E+_,m)))}Cn.prototype.cancel=function(){this.J=!0,dn(this)};function qe(u){u.S=Date.now()+u.I,Rl(u,u.I)}function Rl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Sn(R(u.ba,u),m)}function Fi(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Cn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ea(this.i,this.A),this.L!=2&&(gr(),rt(17)),dn(this),this.s=2,qr(this)):Rl(this,this.S-u)};function qr(u){u.j.G==0||u.J||qs(u.j,u)}function dn(u){Fi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Go(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ra(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||zt(_.h,u))){if(!u.K&&zt(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)$s(_),Dn(_);else break e;Bs(_),rt(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Sn(R(_.Za,_),6e3));if(1>=Cl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Er(_,11)}else if((u.K||_.g==u)&&$s(_),!X(m))for(M=_.Da.g.parse(m),m=0;m<M.length;m++){let Oe=M[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const _t=Oe[3];_t!=null&&(_.la=_t,_.j.info("VER="+_.la));const ot=Oe[4];ot!=null&&(_.Aa=ot,_.j.info("SVER="+_.Aa));const pn=Oe[5];pn!=null&&typeof pn=="number"&&0<pn&&(E=1.5*pn,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const on=u.g;if(on){const Hi=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var B=E.h;B.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(ia(B,B.h),B.h=null))}if(E.D){const Ws=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;Ws&&(E.ya=Ws,Be(E.I,E.D,Ws))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var ee=u;if(E.qa=jl(E,E.J?E.ia:null,E.W),ee.K){Pl(E.h,ee);var je=ee,dt=E.L;dt&&(je.I=dt),je.B&&(Fi(je),qe(je)),E.g=ee}else qi(E);0<_.i.length&&Zn(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Er(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Er(_,7):St(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}gr(4)}catch{}}var Al=class{constructor(u,m){this.g=u,this.map=m}};function Ui(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Cl(u){return u.h?1:u.g?u.g.size:0}function zt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ia(u,m){u.g?u.g.add(m):u.h=m}function Pl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Ui.prototype.cancel=function(){if(this.i=kl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function kl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return $(u.i)}function Ls(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,E=0;E<_;E++)m.push(u[E]);return m}m=[],_=0;for(E in u)m[_++]=u[E];return m}function Vs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const E in u)m[_++]=E;return m}}}function Hr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Vs(u),E=Ls(u),M=E.length,B=0;B<M;B++)m.call(void 0,E[B],_&&_[B],u)}var ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xc(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),M=null;if(0<=E){var B=u[_].substring(0,E);M=u[_].substring(E+1)}else B=u[_];m(B,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function yr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof yr){this.h=u.h,zi(this,u.j),this.o=u.o,this.g=u.g,Wr(this,u.s),this.l=u.l;var m=u.i,_=new Yn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Gr(this,_),this.m=u.m}else u&&(m=String(u).match(ji))?(this.h=!1,zi(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Wr(this,m[4]),this.l=Ne(m[5]||"",!0),Gr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}yr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Qr(m,Ms,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Qr(m,Ms,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Qr(_,_.charAt(0)=="/"?Dl:xl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Qr(_,sa)),u.join("")};function rn(u){return new yr(u)}function zi(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Wr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Gr(u,m,_){m instanceof Yn?(u.i=m,Xn(u.i,u.h)):(_||(m=Qr(m,Ol)),u.i=new Yn(m,u.h))}function Be(u,m,_){u.i.set(m,_)}function Kr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Nl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Nl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ms=/[#\/\?@]/g,xl=/[#\?:]/g,Dl=/[#\?]/g,Ol=/[#\?@]/g,sa=/#/g;function Yn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function It(u){u.g||(u.g=new Map,u.h=0,u.i&&Xc(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Yn.prototype,n.add=function(u,m){It(this),this.i=null,u=fn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Pn(u,m){It(u),m=fn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function kn(u,m){return It(u),m=fn(u,m),u.g.has(m)}n.forEach=function(u,m){It(this),this.g.forEach(function(_,E){_.forEach(function(M){u.call(m,M,E,this)},this)},this)},n.na=function(){It(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let E=0;E<m.length;E++){const M=u[E];for(let B=0;B<M.length;B++)_.push(m[E])}return _},n.V=function(u){It(this);let m=[];if(typeof u=="string")kn(this,u)&&(m=m.concat(this.g.get(fn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return It(this),this.i=null,u=fn(this,u),kn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Yr(u,m,_){Pn(u,m),0<_.length&&(u.i=null,u.g.set(fn(u,m),$(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var E=m[_];const B=encodeURIComponent(String(E)),ee=this.V(E);for(E=0;E<ee.length;E++){var M=B;ee[E]!==""&&(M+="="+encodeURIComponent(String(ee[E]))),u.push(M)}}return this.i=u.join("&")};function fn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Xn(u,m){m&&!u.j&&(It(u),u.i=null,u.g.forEach(function(_,E){var M=E.toLowerCase();E!=M&&(Pn(this,E),Yr(this,M,_))},u)),u.j=m}function Jc(u,m){const _=new Vi;if(d.Image){const E=new Image;E.onload=x(Ht,_,"TestLoadImage: loaded",!0,m,E),E.onerror=x(Ht,_,"TestLoadImage: error",!1,m,E),E.onabort=x(Ht,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=x(Ht,_,"TestLoadImage: timeout",!1,m,E),d.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function Ll(u,m){const _=new Vi,E=new AbortController,M=setTimeout(()=>{E.abort(),Ht(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(M),B.ok?Ht(_,"TestPingServer: ok",!0,m):Ht(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),Ht(_,"TestPingServer: error",!1,m)})}function Ht(u,m,_,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(_)}catch{}}function Zc(){this.g=new Yo}function Vl(u,m,_){const E=_||"";try{Hr(u,function(M,B){let ee=M;y(M)&&(ee=Ko(M)),m.push(E+B+"="+encodeURIComponent(ee))})}catch(M){throw m.push(E+"type="+encodeURIComponent("_badmap")),M}}function _r(u){this.l=u.Ub||null,this.j=u.eb||!1}b(_r,Oi),_r.prototype.g=function(){return new Bi(this.l,this.j)},_r.prototype.i=function(u){return function(){return u}}({});function Bi(u,m){ct.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Bi,ct),n=Bi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,xn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ml(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ml(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Nn(this):xn(this),this.readyState==3&&Ml(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Nn(this))},n.Qa=function(u){this.g&&(this.response=u,Nn(this))},n.ga=function(){this.g&&Nn(this)};function Nn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,xn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function xn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function vr(u){let m="";return Te(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function Xr(u,m,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=vr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Be(u,m,_))}function Qe(u){ct.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Qe,ct);var eh=/^https?$/i,oa=["POST","PUT"];n=Qe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():An.g(),this.v=this.o?As(this.o):As(An),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){$i(this,B);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)_.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())_.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),M=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(oa,m,void 0))||E||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,ee]of _)this.g.setRequestHeader(B,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fs(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){$i(this,B)}};function $i(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,bs(u),sn(u)}function bs(u){u.A||(u.A=!0,ht(u,"complete"),ht(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ht(this,"complete"),ht(this,"abort"),sn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?aa(this):this.bb())},n.bb=function(){aa(this)};function aa(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Wt(u)!=4||u.Z()!=2)){if(u.u&&Wt(u)==4)Ho(u.Ea,0,u);else if(ht(u,"readystatechange"),Wt(u)==4){u.h=!1;try{const ee=u.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var E;if(E=ee===0){var M=String(u.D).match(ji)[1]||null;!M&&d.self&&d.self.location&&(M=d.self.location.protocol.slice(0,-1)),E=!eh.test(M?M.toLowerCase():"")}_=E}if(_)ht(u,"complete"),ht(u,"success");else{u.m=6;try{var B=2<Wt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",bs(u)}}finally{sn(u)}}}}function sn(u,m){if(u.g){Fs(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ht(u,"ready");try{_.onreadystatechange=E}catch{}}}function Fs(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Wt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Qo(m)}};function la(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Us(u){const m={};u=(u.g&&2<=Wt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(X(u[E]))continue;var _=O(u[E]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=m[M]||[];m[M]=B,B.push(_)}N(m,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function ua(u){this.Aa=0,this.i=[],this.j=new Vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jn("baseRetryDelayMs",5e3,u),this.cb=Jn("retryDelaySeedMs",1e4,u),this.Wa=Jn("forwardChannelMaxRetries",2,u),this.wa=Jn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ui(u&&u.concurrentRequestLimit),this.Da=new Zc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ua.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,E){rt(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=jl(this,null,this.W),Zn(this)};function St(u){if(js(u),u.G==3){var m=u.U++,_=rn(u.I);if(Be(_,"SID",u.K),Be(_,"RID",m),Be(_,"TYPE","terminate"),wr(u,_),m=new Cn(u,u.j,m),m.L=2,m.v=Kr(rn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=zl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}Ul(u)}function Dn(u){u.g&&(ca(u),u.g.cancel(),u.g=null)}function js(u){Dn(u),u.u&&(d.clearTimeout(u.u),u.u=null),$s(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function Zn(u){if(!nn(u.h)&&!u.s){u.s=!0;var m=u.Ga;ze||se(),ne||(ze(),ne=!0),me.add(m,u),u.B=0}}function th(u,m){return Cl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Sn(R(u.Ga,u,m),Fl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Cn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=I(B),k(B,this.S)):B=this.S),this.m!==null||this.O||(M.H=B,B=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Jr(this,M,m),_=rn(this.I),Be(_,"RID",u),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),wr(this,_),B&&(this.O?m="headers="+encodeURIComponent(String(vr(B)))+"&"+m:this.m&&Xr(_,this.m,B)),ia(this.h,M),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",m),Be(_,"SID","null"),M.T=!0,Os(M,_,null)):Os(M,_,m),this.G=2}}else this.G==3&&(u?zs(this,u):this.i.length==0||nn(this.h)||zs(this))};function zs(u,m){var _;m?_=m.l:_=u.U++;const E=rn(u.I);Be(E,"SID",u.K),Be(E,"RID",_),Be(E,"AID",u.T),wr(u,E),u.m&&u.o&&Xr(E,u.m,u.o),_=new Cn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Jr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ia(u.h,_),Os(_,E,m)}function wr(u,m){u.H&&Te(u.H,function(_,E){Be(m,E,_)}),u.l&&Hr({},function(_,E){Be(m,E,_)})}function Jr(u,m,_){_=Math.min(u.i.length,_);var E=u.l?R(u.l.Na,u.l,u):null;e:{var M=u.i;let B=-1;for(;;){const ee=["count="+_];B==-1?0<_?(B=M[0].g,ee.push("ofs="+B)):B=0:ee.push("ofs="+B);let je=!0;for(let dt=0;dt<_;dt++){let Oe=M[dt].g;const _t=M[dt].map;if(Oe-=B,0>Oe)B=Math.max(0,M[dt].g-100),je=!1;else try{Vl(_t,ee,"req"+Oe+"_")}catch{E&&E(_t)}}if(je){E=ee.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,E}function qi(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ze||se(),ne||(ze(),ne=!0),me.add(m,u),u.v=0}}function Bs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Sn(R(u.Fa,u),Fl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,bl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Sn(R(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Dn(this),bl(this))};function ca(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function bl(u){u.g=new Cn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=rn(u.qa);Be(m,"RID","rpc"),Be(m,"SID",u.K),Be(m,"AID",u.T),Be(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(m,"TO",u.ja),Be(m,"TYPE","xmlhttp"),wr(u,m),u.m&&u.o&&Xr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Kr(rn(m)),_.m=null,_.P=!0,na(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Dn(this),Bs(this),rt(19))};function $s(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function qs(u,m){var _=null;if(u.g==m){$s(u),ca(u),u.g=null;var E=2}else if(zt(u.h,m))_=m.D,Pl(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var M=u.B;E=Li(),ht(E,new ks(E,_)),Zn(u)}else qi(u);else if(M=m.s,M==3||M==0&&0<m.X||!(E==1&&th(u,m)||E==2&&Bs(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),M){case 1:Er(u,5);break;case 4:Er(u,10);break;case 3:Er(u,6);break;default:Er(u,2)}}}function Fl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Er(u,m){if(u.j.info("Error code "+m),m==2){var _=R(u.fb,u),E=u.Xa;const M=!E;E=new yr(E||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||zi(E,"https"),Kr(E),M?Jc(E.toString(),_):Ll(E.toString(),_)}else rt(2);u.G=0,u.l&&u.l.sa(m),Ul(u),js(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Ul(u){if(u.G=0,u.ka=[],u.l){const m=kl(u.h);(m.length!=0||u.i.length!=0)&&(j(u.ka,m),j(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function jl(u,m,_){var E=_ instanceof yr?rn(_):new yr(_);if(E.g!="")m&&(E.g=m+"."+E.g),Wr(E,E.s);else{var M=d.location;E=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;var B=new yr(null);E&&zi(B,E),m&&(B.g=m),M&&Wr(B,M),_&&(B.l=_),E=B}return _=u.D,m=u.ya,_&&m&&Be(E,_,m),Be(E,"VER",u.la),wr(u,E),E}function zl(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Qe(new _r({eb:_})):new Qe(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ha(){}n=ha.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hs(){}Hs.prototype.g=function(u,m){return new Bt(u,m)};function Bt(u,m){ct.call(this),this.g=new ua(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!X(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!X(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new er(this)}b(Bt,ct),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){St(this.g)},Bt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Ko(u),u=_);m.i.push(new Al(m.Ya++,u)),m.G==3&&Zn(m)},Bt.prototype.N=function(){this.g.l=null,delete this.j,St(this.g),delete this.g,Bt.aa.N.call(this)};function Bl(u){Kn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}b(Bl,Kn);function $l(){Ps.call(this),this.status=1}b($l,Ps);function er(u){this.g=u}b(er,ha),er.prototype.ua=function(){ht(this.g,"a")},er.prototype.ta=function(u){ht(this.g,new Bl(u))},er.prototype.sa=function(u){ht(this.g,new $l)},er.prototype.ra=function(){ht(this.g,"b")},Hs.prototype.createWebChannel=Hs.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,Qv=function(){return new Hs},Kv=function(){return Li()},Gv=Qn,ef={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xs.NO_ERROR=0,xs.TIMEOUT=8,xs.HTTP_ERROR=6,Xu=xs,Tl.COMPLETE="complete",Wv=Tl,Cs.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",ct.prototype.listen=ct.prototype.K,za=Cs,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Hv=Qe}).apply(typeof Uu<"u"?Uu:typeof self<"u"?self:typeof window<"u"?window:{});const Cy="@firebase/firestore";/**
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
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
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
 */let Vo="11.0.2";/**
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
 */const ps=new Pc("@firebase/firestore");function po(){return ps.logLevel}function oe(n,...e){if(ps.logLevel<=Pe.DEBUG){const t=e.map(Bf);ps.debug(`Firestore (${Vo}): ${n}`,...t)}}function Fr(n,...e){if(ps.logLevel<=Pe.ERROR){const t=e.map(Bf);ps.error(`Firestore (${Vo}): ${n}`,...t)}}function Io(n,...e){if(ps.logLevel<=Pe.WARN){const t=e.map(Bf);ps.warn(`Firestore (${Vo}): ${n}`,...t)}}function Bf(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function we(n="Unexpected state"){const e=`FIRESTORE (${Vo}) INTERNAL ASSERTION FAILED: `+n;throw Fr(e),new Error(e)}function Ue(n,e){n||we()}function Ie(n,e){return n}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Gn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Yv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(bt.UNAUTHENTICATED))}shutdown(){}}class yC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class _C{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Vr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Vr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string"),new Yv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new bt(e)}}class vC{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class wC{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new vC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ue(this.o===void 0);const i=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new EC(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function IC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Xv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=IC(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function xe(n,e){return n<e?-1:n>e?1:0}function So(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
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
 */class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new mt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new le(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new le(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new le(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new mt(0,0))}static max(){return new Ee(new mt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class tl{constructor(e,t,i){t===void 0?t=0:t>e.length&&we(),i===void 0?i=e.length-t:i>e.length-t&&we(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return tl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tl?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ke extends tl{construct(e,t,i){return new Ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new le(K.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ke(t)}static emptyPath(){return new Ke([])}}const SC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends tl{construct(e,t,i){return new Pt(e,t,i)}static isValidIdentifier(e){return SC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new le(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new le(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new le(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(h=!h,o++):d!=="."||h?(i+=d,o++):(l(),o++)}if(l(),h)throw new le(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Ke.fromString(e))}static fromName(e){return new pe(Ke.fromString(e).popFirst(5))}static empty(){return new pe(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Ke(e.slice()))}}function RC(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new mt(t+1,0):new mt(t,i));return new Ti(o,pe.empty(),e)}function AC(n){return new Ti(n.readTime,n.key,-1)}class Ti{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ti(Ee.min(),pe.empty(),-1)}static max(){return new Ti(Ee.max(),pe.empty(),-1)}}function CC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:xe(n.largestBatchId,e.largestBatchId))}/**
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
 */const PC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Mo(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==PC)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):H.reject(t)}static resolve(e){return new H((t,i)=>{t(e)})}static reject(e){return new H((t,i)=>{i(e)})}static waitFor(e){return new H((t,i)=>{let o=0,l=0,h=!1;e.forEach(d=>{++o,d.next(()=>{++l,h&&l===o&&t()},p=>i(p))}),h=!0,l===o&&t()})}static or(e){let t=H.resolve(!1);for(const i of e)t=t.next(o=>o?H.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new H((i,o)=>{const l=e.length,h=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(w=>{h[y]=w,++d,d===l&&i(h)},w=>o(w))}})}static doWhile(e,t){return new H((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function NC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Lc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Lc.oe=-1;function Vc(n){return n==null}function fc(n){return n===0&&1/n==-1/0}function xC(n){return typeof n=="number"&&Number.isInteger(n)&&!fc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function DC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Py(e)),e=OC(n.get(t),e);return Py(e)}function OC(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Py(n){return n+""}/**
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
 */function ky(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ys(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Jv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ju(this.root,e,this.comparator,!0)}}class ju{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Ct.RED,this.left=o??Ct.EMPTY,this.right=l??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Ct(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ny(this.data.getIterator())}getIteratorFrom(e){return new Ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new gt(this.comparator);return t.data=e,t}}class Ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new jn([])}unionWith(e){let t=new gt(Pt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new jn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return So(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class Zv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Zv("Invalid base64 string: "+l):l}}(e);return new kt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const LC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(n){if(Ue(!!n),typeof n=="string"){let e=0;const t=LC.exec(n);if(Ue(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Si(n){return typeof n=="string"?kt.fromBase64String(n):kt.fromUint8Array(n)}/**
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
 */function $f(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Mc(n){const e=n.mapValue.fields.__previous_value__;return $f(e)?Mc(e):e}function nl(n){const e=Ii(n.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
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
 */class VC{constructor(e,t,i,o,l,h,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class rl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ri(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$f(n)?4:bC(n)?9007199254740991:MC(n)?10:11:we()}function cr(n,e){if(n===e)return!0;const t=Ri(n);if(t!==Ri(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return nl(n).isEqual(nl(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ii(o.timestampValue),d=Ii(l.timestampValue);return h.seconds===d.seconds&&h.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Si(o.bytesValue).isEqual(Si(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),d=st(l.doubleValue);return h===d?fc(h)===fc(d):isNaN(h)&&isNaN(d)}return!1}(n,e);case 9:return So(n.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},d=l.mapValue.fields||{};if(ky(h)!==ky(d))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(d[p]===void 0||!cr(h[p],d[p])))return!1;return!0}(n,e);default:return we()}}function il(n,e){return(n.values||[]).find(t=>cr(t,e))!==void 0}function Ro(n,e){if(n===e)return 0;const t=Ri(n),i=Ri(e);if(t!==i)return xe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(n.booleanValue,e.booleanValue);case 2:return function(l,h){const d=st(l.integerValue||l.doubleValue),p=st(h.integerValue||h.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return xy(n.timestampValue,e.timestampValue);case 4:return xy(nl(n),nl(e));case 5:return xe(n.stringValue,e.stringValue);case 6:return function(l,h){const d=Si(l),p=Si(h);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const d=l.split("/"),p=h.split("/");for(let y=0;y<d.length&&y<p.length;y++){const w=xe(d[y],p[y]);if(w!==0)return w}return xe(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const d=xe(st(l.latitude),st(h.latitude));return d!==0?d:xe(st(l.longitude),st(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Dy(n.arrayValue,e.arrayValue);case 10:return function(l,h){var d,p,y,w;const T=l.fields||{},R=h.fields||{},x=(d=T.value)===null||d===void 0?void 0:d.arrayValue,b=(p=R.value)===null||p===void 0?void 0:p.arrayValue,$=xe(((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0,((w=b==null?void 0:b.values)===null||w===void 0?void 0:w.length)||0);return $!==0?$:Dy(x,b)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===zu.mapValue&&h===zu.mapValue)return 0;if(l===zu.mapValue)return 1;if(h===zu.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=h.fields||{},w=Object.keys(y);p.sort(),w.sort();for(let T=0;T<p.length&&T<w.length;++T){const R=xe(p[T],w[T]);if(R!==0)return R;const x=Ro(d[p[T]],y[w[T]]);if(x!==0)return x}return xe(p.length,w.length)}(n.mapValue,e.mapValue);default:throw we()}}function xy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return xe(n,e);const t=Ii(n),i=Ii(e),o=xe(t.seconds,i.seconds);return o!==0?o:xe(t.nanos,i.nanos)}function Dy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Ro(t[o],i[o]);if(l)return l}return xe(t.length,i.length)}function Ao(n){return tf(n)}function tf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ii(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Si(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return pe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=tf(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${tf(t.fields[h])}`;return o+"}"}(n.mapValue):we()}function Ju(n){switch(Ri(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mc(n);return e?16+Ju(e):16;case 5:return 2*n.stringValue.length;case 6:return Si(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+Ju(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return ys(i.fields,(l,h)=>{o+=l.length+Ju(h)}),o}(n.mapValue);default:throw we()}}function Oy(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function nf(n){return!!n&&"integerValue"in n}function qf(n){return!!n&&"arrayValue"in n}function Ly(n){return!!n&&"nullValue"in n}function Vy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zu(n){return!!n&&"mapValue"in n}function MC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ga(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ys(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ga(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ga(n.arrayValue.values[t]);return e}return Object.assign({},n)}function bC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Zu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ga(t)}setAll(e){let t=Pt.emptyPath(),i={},o=[];e.forEach((h,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}h?i[d.lastSegment()]=Ga(h):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Zu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Zu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ys(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new En(Ga(this.value))}}function e0(n){const e=[];return ys(n.fields,(t,i)=>{const o=new Pt([t]);if(Zu(i)){const l=e0(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new jn(e)}/**
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
 */class Ft{constructor(e,t,i,o,l,h,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=d}static newInvalidDocument(e){return new Ft(e,0,Ee.min(),Ee.min(),Ee.min(),En.empty(),0)}static newFoundDocument(e,t,i,o){return new Ft(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,Ee.min(),Ee.min(),En.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,Ee.min(),Ee.min(),En.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pc{constructor(e,t){this.position=e,this.inclusive=t}}function My(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(h.referenceValue),t.key):i=Ro(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function by(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!cr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class mc{constructor(e,t="asc"){this.field=e,this.dir=t}}function FC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class t0{}class ut extends t0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new jC(e,t,i):t==="array-contains"?new $C(e,i):t==="in"?new qC(e,i):t==="not-in"?new HC(e,i):t==="array-contains-any"?new WC(e,i):new ut(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new zC(e,i):new BC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ro(t,this.value)):t!==null&&Ri(this.value)===Ri(t)&&this.matchesComparison(Ro(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends t0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Hn(e,t)}matches(e){return n0(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function n0(n){return n.op==="and"}function r0(n){return UC(n)&&n0(n)}function UC(n){for(const e of n.filters)if(e instanceof Hn)return!1;return!0}function rf(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+Ao(n.value);if(r0(n))return n.filters.map(e=>rf(e)).join(",");{const e=n.filters.map(t=>rf(t)).join(",");return`${n.op}(${e})`}}function i0(n,e){return n instanceof ut?function(i,o){return o instanceof ut&&i.op===o.op&&i.field.isEqual(o.field)&&cr(i.value,o.value)}(n,e):n instanceof Hn?function(i,o){return o instanceof Hn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,d)=>l&&i0(h,o.filters[d]),!0):!1}(n,e):void we()}function s0(n){return n instanceof ut?function(t){return`${t.field.canonicalString()} ${t.op} ${Ao(t.value)}`}(n):n instanceof Hn?function(t){return t.op.toString()+" {"+t.getFilters().map(s0).join(" ,")+"}"}(n):"Filter"}class jC extends ut{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class zC extends ut{constructor(e,t){super(e,"in",t),this.keys=o0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class BC extends ut{constructor(e,t){super(e,"not-in",t),this.keys=o0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function o0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>pe.fromName(i.referenceValue))}class $C extends ut{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qf(t)&&il(t.arrayValue,this.value)}}class qC extends ut{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&il(this.value.arrayValue,t)}}class HC extends ut{constructor(e,t){super(e,"not-in",t)}matches(e){if(il(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!il(this.value.arrayValue,t)}}class WC extends ut{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>il(this.value.arrayValue,i))}}/**
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
 */class GC{constructor(e,t=null,i=[],o=[],l=null,h=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=d,this.ue=null}}function Fy(n,e=null,t=[],i=[],o=null,l=null,h=null){return new GC(n,e,t,i,o,l,h)}function Hf(n){const e=Ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>rf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Vc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Ao(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Ao(i)).join(",")),e.ue=t}return e.ue}function Wf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!FC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!i0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!by(n.startAt,e.startAt)&&by(n.endAt,e.endAt)}function sf(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class gl{constructor(e,t=null,i=[],o=[],l=null,h="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function KC(n,e,t,i,o,l,h,d){return new gl(n,e,t,i,o,l,h,d)}function Gf(n){return new gl(n)}function Uy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function a0(n){return n.collectionGroup!==null}function Ka(n){const e=Ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let d=new gt(Pt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new mc(l,i))}),t.has(Pt.keyField().canonicalString())||e.ce.push(new mc(Pt.keyField(),i))}return e.ce}function ar(n){const e=Ie(n);return e.le||(e.le=QC(e,Ka(n))),e.le}function QC(n,e){if(n.limitType==="F")return Fy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new mc(o.field,l)});const t=n.endAt?new pc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new pc(n.startAt.position,n.startAt.inclusive):null;return Fy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function of(n,e){const t=n.filters.concat([e]);return new gl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function af(n,e,t){return new gl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bc(n,e){return Wf(ar(n),ar(e))&&n.limitType===e.limitType}function l0(n){return`${Hf(ar(n))}|lt:${n.limitType}`}function mo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>s0(o)).join(", ")}]`),Vc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Ao(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Ao(o)).join(",")),`Target(${i})`}(ar(n))}; limitType=${n.limitType})`}function Fc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Ka(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,d,p){const y=My(h,d,p);return h.inclusive?y<=0:y<0}(i.startAt,Ka(i),o)||i.endAt&&!function(h,d,p){const y=My(h,d,p);return h.inclusive?y>=0:y>0}(i.endAt,Ka(i),o))}(n,e)}function YC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function u0(n){return(e,t)=>{let i=!1;for(const o of Ka(n)){const l=XC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function XC(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):function(l,h,d){const p=h.data.field(l),y=d.data.field(l);return p!==null&&y!==null?Ro(p,y):we()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return we()}}/**
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
 */class _s{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return Jv(this.inner)}size(){return this.innerSize}}/**
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
 */const JC=new et(pe.comparator);function Ur(){return JC}const c0=new et(pe.comparator);function Ba(...n){let e=c0;for(const t of n)e=e.insert(t.key,t);return e}function h0(n){let e=c0;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ls(){return Qa()}function d0(){return Qa()}function Qa(){return new _s(n=>n.toString(),(n,e)=>n.isEqual(e))}const ZC=new et(pe.comparator),eP=new gt(pe.comparator);function ke(...n){let e=eP;for(const t of n)e=e.add(t);return e}const tP=new gt(xe);function nP(){return tP}/**
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
 */function Kf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fc(e)?"-0":e}}function f0(n){return{integerValue:""+n}}function rP(n,e){return xC(e)?f0(e):Kf(n,e)}/**
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
 */class Uc{constructor(){this._=void 0}}function iP(n,e,t){return n instanceof gc?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&$f(l)&&(l=Mc(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):n instanceof sl?m0(n,e):n instanceof ol?g0(n,e):function(o,l){const h=p0(o,l),d=jy(h)+jy(o.Pe);return nf(h)&&nf(o.Pe)?f0(d):Kf(o.serializer,d)}(n,e)}function sP(n,e,t){return n instanceof sl?m0(n,e):n instanceof ol?g0(n,e):t}function p0(n,e){return n instanceof yc?function(i){return nf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class gc extends Uc{}class sl extends Uc{constructor(e){super(),this.elements=e}}function m0(n,e){const t=y0(e);for(const i of n.elements)t.some(o=>cr(o,i))||t.push(i);return{arrayValue:{values:t}}}class ol extends Uc{constructor(e){super(),this.elements=e}}function g0(n,e){let t=y0(e);for(const i of n.elements)t=t.filter(o=>!cr(o,i));return{arrayValue:{values:t}}}class yc extends Uc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function jy(n){return st(n.integerValue||n.doubleValue)}function y0(n){return qf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function oP(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof sl&&o instanceof sl||i instanceof ol&&o instanceof ol?So(i.elements,o.elements,cr):i instanceof yc&&o instanceof yc?cr(i.Pe,o.Pe):i instanceof gc&&o instanceof gc}(n.transform,e.transform)}class aP{constructor(e,t){this.version=e,this.transformResults=t}}class Bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ec(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class jc{}function _0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Qf(n.key,Bn.none()):new yl(n.key,n.data,Bn.none());{const t=n.data,i=En.empty();let o=new gt(Pt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new vs(n.key,i,new jn(o.toArray()),Bn.none())}}function lP(n,e,t){n instanceof yl?function(o,l,h){const d=o.value.clone(),p=By(o.fieldTransforms,l,h.transformResults);d.setAll(p),l.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(n,e,t):n instanceof vs?function(o,l,h){if(!ec(o.precondition,l))return void l.convertToUnknownDocument(h.version);const d=By(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(v0(o)),p.setAll(d),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ya(n,e,t,i){return n instanceof yl?function(l,h,d,p){if(!ec(l.precondition,h))return d;const y=l.value.clone(),w=$y(l.fieldTransforms,p,h);return y.setAll(w),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof vs?function(l,h,d,p){if(!ec(l.precondition,h))return d;const y=$y(l.fieldTransforms,p,h),w=h.data;return w.setAll(v0(l)),w.setAll(y),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,h,d){return ec(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):d}(n,e,t)}function uP(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=p0(i.transform,o||null);l!=null&&(t===null&&(t=En.empty()),t.set(i.field,l))}return t||null}function zy(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&So(i,o,(l,h)=>oP(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yl extends jc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class vs extends jc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function v0(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function By(n,e,t){const i=new Map;Ue(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,d=e.data.field(l.field);i.set(l.field,sP(h,d,t[o]))}return i}function $y(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,iP(l,h,e))}return i}class Qf extends jc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cP extends jc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hP{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&lP(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ya(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ya(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=d0();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let d=this.applyToLocalView(h,l.mutatedFields);d=t.has(o.key)?null:d;const p=_0(h,d);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Ee.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&So(this.mutations,e.mutations,(t,i)=>zy(t,i))&&So(this.baseMutations,e.baseMutations,(t,i)=>zy(t,i))}}class Yf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length);let o=function(){return ZC}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Yf(e,t,i,o)}}/**
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
 */class dP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var lt,Le;function pP(n){switch(n){default:return we();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0}}function w0(n){if(n===void 0)return Fr("GRPC error has no .code"),K.UNKNOWN;switch(n){case lt.OK:return K.OK;case lt.CANCELLED:return K.CANCELLED;case lt.UNKNOWN:return K.UNKNOWN;case lt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case lt.INTERNAL:return K.INTERNAL;case lt.UNAVAILABLE:return K.UNAVAILABLE;case lt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case lt.NOT_FOUND:return K.NOT_FOUND;case lt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case lt.ABORTED:return K.ABORTED;case lt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case lt.DATA_LOSS:return K.DATA_LOSS;default:return we()}}(Le=lt||(lt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mP(){return new TextEncoder}/**
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
 */const gP=new us([4294967295,4294967295],0);function qy(n){const e=mP().encode(n),t=new qv;return t.update(e),new Uint8Array(t.digest())}function Hy(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new us([t,i],0),new us([o,l],0)]}class Xf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new $a(`Invalid padding: ${t}`);if(i<0)throw new $a(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new $a(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new $a(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=us.fromNumber(this.Te)}Ee(e,t,i){let o=e.add(t.multiply(us.fromNumber(i)));return o.compare(gP)===1&&(o=new us([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=qy(e),[i,o]=Hy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);if(!this.de(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Xf(l,o,t);return i.forEach(d=>h.insert(d)),h}insert(e){if(this.Te===0)return;const t=qy(e),[i,o]=Hy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class $a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class zc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,_l.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new zc(Ee.min(),o,new et(xe),Ur(),ke())}}class _l{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new _l(i,t,ke(),ke(),ke())}}/**
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
 */class tc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class E0{constructor(e,t){this.targetId=e,this.me=t}}class T0{constructor(e,t,i=kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Wy{constructor(){this.fe=0,this.ge=Gy(),this.pe=kt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ke(),t=ke(),i=ke();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:we()}}),new _l(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Gy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yP{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ur(),this.qe=Bu(),this.Qe=Bu(),this.Ke=new et(xe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(sf(l))if(i===0){const h=new pe(l.path);this.We(t,h,Ft.newNoDocument(h,Ee.min()))}else Ue(i===1);else{const h=this.Ze(t);if(h!==i){const d=this.Xe(e),p=d?this.et(d,e,h):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,d;try{h=Si(i).toUint8Array()}catch(p){if(p instanceof Zv)return Io("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Xf(h,o,l)}catch(p){return Io(p instanceof $a?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.Le.nt(),d=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,h)=>{const d=this.Ye(h);if(d){if(l.current&&sf(d.target)){const p=new pe(d.target.path);this.st(p).has(h)||this.ot(h,p)||this.We(h,p,Ft.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let i=ke();this.Qe.forEach((l,h)=>{let d=!0;h.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new zc(e,t,this.Ke,this.ke,i);return this.ke=Ur(),this.qe=Bu(),this.Qe=Bu(),this.Ke=new et(xe),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Wy,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new gt(xe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new gt(xe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Wy),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Bu(){return new et(pe.comparator)}function Gy(){return new et(pe.comparator)}const _P={asc:"ASCENDING",desc:"DESCENDING"},vP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wP={and:"AND",or:"OR"};class EP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lf(n,e){return n.useProto3Json||Vc(e)?e:{value:e}}function _c(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function I0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function TP(n,e){return _c(n,e.toTimestamp())}function lr(n){return Ue(!!n),Ee.fromTimestamp(function(t){const i=Ii(t);return new mt(i.seconds,i.nanos)}(n))}function Jf(n,e){return uf(n,e).canonicalString()}function uf(n,e){const t=function(o){return new Ke(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function S0(n){const e=Ke.fromString(n);return Ue(k0(e)),e}function cf(n,e){return Jf(n.databaseId,e.path)}function Fd(n,e){const t=S0(e);if(t.get(1)!==n.databaseId.projectId)throw new le(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new le(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(A0(t))}function R0(n,e){return Jf(n.databaseId,e)}function IP(n){const e=S0(n);return e.length===4?Ke.emptyPath():A0(e)}function hf(n){return new Ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function A0(n){return Ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ky(n,e,t){return{name:cf(n,e),fields:t.value.mapValue.fields}}function SP(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,w){return y.useProto3Json?(Ue(w===void 0||typeof w=="string"),kt.fromBase64String(w||"")):(Ue(w===void 0||w instanceof Buffer||w instanceof Uint8Array),kt.fromUint8Array(w||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,d=h&&function(y){const w=y.code===void 0?K.UNKNOWN:w0(y.code);return new le(w,y.message||"")}(h);t=new T0(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Fd(n,i.document.name),l=lr(i.document.updateTime),h=i.document.createTime?lr(i.document.createTime):Ee.min(),d=new En({mapValue:{fields:i.document.fields}}),p=Ft.newFoundDocument(o,l,h,d),y=i.targetIds||[],w=i.removedTargetIds||[];t=new tc(y,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Fd(n,i.document),l=i.readTime?lr(i.readTime):Ee.min(),h=Ft.newNoDocument(o,l),d=i.removedTargetIds||[];t=new tc([],d,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Fd(n,i.document),l=i.removedTargetIds||[];t=new tc([],l,o,null)}else{if(!("filter"in e))return we();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new fP(o,l),d=i.targetId;t=new E0(d,h)}}return t}function RP(n,e){let t;if(e instanceof yl)t={update:Ky(n,e.key,e.value)};else if(e instanceof Qf)t={delete:cf(n,e.key)};else if(e instanceof vs)t={update:Ky(n,e.key,e.data),updateMask:LP(e.fieldMask)};else{if(!(e instanceof cP))return we();t={verify:cf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const d=h.transform;if(d instanceof gc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof sl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof ol)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof yc)return{fieldPath:h.field.canonicalString(),increment:d.Pe};throw we()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:TP(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we()}(n,e.precondition)),t}function AP(n,e){return n&&n.length>0?(Ue(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?lr(o.updateTime):lr(l);return h.isEqual(Ee.min())&&(h=lr(l)),new aP(h,o.transformResults||[])}(t,e))):[]}function CP(n,e){return{documents:[R0(n,e.path)]}}function PP(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=R0(n,o);const l=function(y){if(y.length!==0)return P0(Hn.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(w=>function(R){return{field:go(R.field),direction:xP(R.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const d=lf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function kP(n){let e=IP(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(T){const R=C0(T);return R instanceof Hn&&r0(R)?R.getFilters():[R]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(R=>function(b){return new mc(yo(b.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(R))}(t.orderBy));let d=null;t.limit&&(d=function(T){let R;return R=typeof T=="object"?T.value:T,Vc(R)?null:R}(t.limit));let p=null;t.startAt&&(p=function(T){const R=!!T.before,x=T.values||[];return new pc(x,R)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const R=!T.before,x=T.values||[];return new pc(x,R)}(t.endAt)),KC(e,o,h,l,d,"F",p,y)}function NP(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function C0(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=yo(t.unaryFilter.field);return ut.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=yo(t.unaryFilter.field);return ut.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=yo(t.unaryFilter.field);return ut.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=yo(t.unaryFilter.field);return ut.create(h,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(n):n.fieldFilter!==void 0?function(t){return ut.create(yo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Hn.create(t.compositeFilter.filters.map(i=>C0(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(n):we()}function xP(n){return _P[n]}function DP(n){return vP[n]}function OP(n){return wP[n]}function go(n){return{fieldPath:n.canonicalString()}}function yo(n){return Pt.fromServerFormat(n.fieldPath)}function P0(n){return n instanceof ut?function(t){if(t.op==="=="){if(Vy(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NAN"}};if(Ly(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vy(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NOT_NAN"}};if(Ly(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:go(t.field),op:DP(t.op),value:t.value}}}(n):n instanceof Hn?function(t){const i=t.getFilters().map(o=>P0(o));return i.length===1?i[0]:{compositeFilter:{op:OP(t.op),filters:i}}}(n):we()}function LP(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function k0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class yi{constructor(e,t,i,o,l=Ee.min(),h=Ee.min(),d=kt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class VP{constructor(e){this.ht=e}}function MP(n){const e=kP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?af(e,e.limit,"L"):e}/**
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
 */class bP{constructor(){this.ln=new FP}addToCollectionParentIndex(e,t){return this.ln.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ti.min())}updateCollectionGroup(e,t,i){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class FP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new gt(Ke.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new gt(Ke.comparator)).toArray()}}/**
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
 */const Qy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(41943040,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
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
 */class Co{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Co(0)}static Qn(){return new Co(-1)}}/**
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
 */function Yy([n,e],[t,i]){const o=xe(n,t);return o===0?xe(e,i):o}class UP{constructor(e){this.Gn=e,this.buffer=new gt(Yy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Yy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class jP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){oe("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bo(t)?oe("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Mo(t)}await this.Yn(3e5)})}}class zP{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return H.resolve(Lc.oe);const i=new UP(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(Qy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,h,d,p,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),po()<=Pe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(d-h)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-w}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function BP(n,e){return new zP(n,e)}/**
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
 */class $P{constructor(){this.changes=new _s(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?H.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class qP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class HP{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Ya(i.mutation,o,jn.empty(),mt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,ke()).next(()=>i))}getLocalViewOfDocuments(e,t,i=ke()){const o=ls();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=Ba();return l.forEach((d,p)=>{h=h.insert(d,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=ls();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,ke()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,d)=>{t.set(h,d)})})}computeViews(e,t,i,o){let l=Ur();const h=Qa(),d=function(){return Qa()}();return t.forEach((p,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof vs)?l=l.insert(y.key,y):w!==void 0?(h.set(y.key,w.mutation.getFieldMask()),Ya(w.mutation,y,w.mutation.getFieldMask(),mt.now())):h.set(y.key,jn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,w)=>h.set(y,w)),t.forEach((y,w)=>{var T;return d.set(y,new qP(w,(T=h.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=Qa();let o=new et((h,d)=>h-d),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const d of h)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let w=i.get(p)||jn.empty();w=d.applyToLocalView(y,w),i.set(p,w);const T=(o.get(d.batchId)||ke()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const h=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,w=p.value,T=d0();w.forEach(R=>{if(!l.has(R)){const x=_0(t.get(R),i.get(R));x!==null&&T.set(R,x),l=l.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return H.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):a0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):H.resolve(ls());let d=-1,p=l;return h.next(y=>H.forEach(y,(w,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next(R=>{p=p.insert(w,R)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,ke())).next(w=>({batchId:d,changes:h0(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(i=>{let o=Ba();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Ba();return this.indexManager.getCollectionParents(e,l).next(d=>H.forEach(d,p=>{const y=function(T,R){return new gl(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(w=>{w.forEach((T,R)=>{h=h.insert(T,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((p,y)=>{const w=y.getKey();h.get(w)===null&&(h=h.insert(w,Ft.newInvalidDocument(w)))});let d=Ba();return h.forEach((p,y)=>{const w=l.get(p);w!==void 0&&Ya(w.mutation,y,jn.empty(),mt.now()),Fc(t,y)&&(d=d.insert(p,y))}),d})}}/**
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
 */class WP{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return H.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}}(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:MP(o.bundledQuery),readTime:lr(o.readTime)}}(t)),H.resolve()}}/**
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
 */class GP{constructor(){this.overlays=new et(pe.comparator),this.Er=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ls();return H.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),H.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Er.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(i)),H.resolve()}getOverlaysForCollection(e,t,i){const o=ls(),l=t.length+1,h=new pe(t.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new et((y,w)=>y-w);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=ls(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const d=ls(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,w)=>d.set(y,w)),!(d.size()>=o)););return H.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(i.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new dP(t,i));let l=this.Er.get(t);l===void 0&&(l=ke(),this.Er.set(t,l)),this.Er.set(t,l.add(i.key))}}/**
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
 */class KP{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class Zf{constructor(){this.dr=new gt(Tt.Ar),this.Rr=new gt(Tt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new Tt(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new Tt(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new pe(new Ke([])),i=new Tt(t,e),o=new Tt(t,e+1),l=[];return this.Rr.forEachInRange([i,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new pe(new Ke([])),i=new Tt(t,e),o=new Tt(t,e+1);let l=ke();return this.Rr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new Tt(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Tt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return pe.comparator(e.key,t.key)||xe(e.br,t.br)}static Vr(e,t){return xe(e.br,t.br)||pe.comparator(e.key,t.key)}}/**
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
 */class QP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new gt(Tt.Ar)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new hP(l,t,i,o);this.mutationQueue.push(h);for(const d of o)this.vr=this.vr.add(new Tt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return H.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],h=>{const d=this.Cr(h.br);l.push(d)}),H.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new gt(xe);return t.forEach(o=>{const l=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],d=>{i=i.add(d.br)})}),H.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const h=new Tt(new pe(l),0);let d=new gt(xe);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.br)),!0)},h),H.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ue(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return H.forEach(t.mutations,o=>{const l=new Tt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new Tt(t,0),o=this.vr.firstAfterOrEqual(i);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class YP{constructor(e){this.Nr=e,this.docs=function(){return new et(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return H.resolve(i?i.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let i=Ur();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Ft.newInvalidDocument(o))}),H.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Ur();const h=t.path,d=new pe(h.child("")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:w}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||CC(AC(w),i)<=0||(o.has(w.key)||Fc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return H.resolve(l)}getAllFromCollectionGroup(e,t,i,o){we()}Lr(e,t){return H.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new XP(this)}getSize(e){return H.resolve(this.size)}}class XP extends $P{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),H.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class JP{constructor(e){this.persistence=e,this.Br=new _s(t=>Hf(t),Wf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.kr=0,this.qr=new Zf,this.targetCount=0,this.Qr=Co.qn()}forEachTarget(e,t){return this.Br.forEach((i,o)=>t(o)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),H.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Co(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Un(t),H.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Br.forEach((h,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Br.delete(h),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),H.waitFor(l).next(()=>o)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return H.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),H.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),H.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return H.resolve(i)}containsKey(e,t){return H.resolve(this.qr.containsKey(t))}}/**
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
 */class N0{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Lc(0),this.Ur=!1,this.Ur=!0,this.Wr=new KP,this.referenceDelegate=e(this),this.Gr=new JP(this),this.indexManager=new bP,this.remoteDocumentCache=function(o){return new YP(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new VP(t),this.jr=new WP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new GP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new QP(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){oe("MemoryPersistence","Starting transaction:",e);const o=new ZP(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return H.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class ZP extends kC{constructor(e){super(),this.currentSequenceNumber=e}}class ep{constructor(e){this.persistence=e,this.Zr=new Zf,this.Xr=null}static ei(e){return new ep(e)}get ti(){if(this.Xr)return this.Xr;throw we()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),H.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),H.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.ti,i=>{const o=pe.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Ee.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return H.or([()=>H.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class vc{constructor(e,t){this.persistence=e,this.ri=new _s(i=>DC(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=BP(this,t)}static ei(e,t){return new vc(e,t)}Hr(){}Jr(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return H.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?H.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(d=>{d||(i++,l.removeEntry(h,Ee.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),H.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ju(e.data.value)),t}ir(e,t,i){return H.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return H.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class tp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new tp(e,t.fromCache,i,o)}}/**
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
 */class ek{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tk{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return mI()?8:NC(Ut())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new ek;return this.ts(e,t,h).next(d=>{if(l.result=d,this.Hi)return this.ns(e,t,h,d.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(po()<=Pe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",mo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),H.resolve()):(po()<=Pe.DEBUG&&oe("QueryEngine","Query:",mo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(po()<=Pe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",mo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):H.resolve())}Xi(e,t){if(Uy(t))return H.resolve(null);let i=ar(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=af(t,null,"F"),i=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=ke(...l);return this.Zi.getDocuments(e,h).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,d);return this.ss(t,y,h,p.readTime)?this.Xi(e,af(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return Uy(t)||o.isEqual(Ee.min())?H.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const h=this.rs(t,l);return this.ss(t,h,i,o)?H.resolve(null):(po()<=Pe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),mo(t)),this.os(e,h,t,RC(o,-1)).next(d=>d))})}rs(e,t){let i=new gt(u0(e));return t.forEach((o,l)=>{Fc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return po()<=Pe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",mo(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ti.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
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
 */class nk{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new et(xe),this.cs=new _s(l=>Hf(l),Wf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HP(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function rk(n,e,t,i){return new nk(n,e,t,i)}async function x0(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],d=[];let p=ke();for(const y of o){h.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}for(const y of l){d.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:h,addedBatchIds:d}))})})}function ik(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,w){const T=y.batch,R=T.keys();let x=H.resolve();return R.forEach(b=>{x=x.next(()=>w.getEntry(p,b)).next($=>{const j=y.docVersions.get(b);Ue(j!==null),$.version.compareTo(j)<0&&(T.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),w.addEntry($)))})}),x.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=ke();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function D0(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function sk(n,e){const t=Ie(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((w,T)=>{const R=o.get(T);if(!R)return;d.push(t.Gr.removeMatchingKeys(l,w.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,w.addedDocuments,T)));let x=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(kt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(w.resumeToken,i)),o=o.insert(T,x),function($,j,W){return $.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(R,x,w)&&d.push(t.Gr.updateTargetData(l,x))});let p=Ur(),y=ke();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))}),d.push(ok(l,h,e.documentUpdates).next(w=>{p=w.Is,y=w.Es})),!i.isEqual(Ee.min())){const w=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(w)}return H.waitFor(d).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function ok(n,e,t){let i=ke(),o=ke();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=Ur();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ee.min())?(e.removeEntry(d,p.readTime),h=h.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(d,p)):oe("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Is:h,Es:o}})}function ak(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function lk(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,H.resolve(o)):t.Gr.allocateTargetId(i).next(h=>(o=new yi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function df(n,e,t){const i=Ie(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!bo(h))throw h;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function Xy(n,e,t){const i=Ie(n);let o=Ee.min(),l=ke();return i.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,w){const T=Ie(p),R=T.cs.get(w);return R!==void 0?H.resolve(T.us.get(R)):T.Gr.getTargetData(y,w)}(i,h,ar(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(h,d.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:ke())).next(d=>(uk(i,YC(e),d),{documents:d,ds:l})))}function uk(n,e,t){let i=n.ls.get(e)||Ee.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class Jy{constructor(){this.activeTargetIds=nP()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ck{constructor(){this._o=new Jy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Jy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hk{uo(e){}shutdown(){}}/**
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
 */class Zy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $u=null;function Ud(){return $u===null?$u=function(){return 268435456+Math.round(2147483648*Math.random())}():$u++,"0x"+$u.toString(16)}/**
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
 */const dk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fk{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Mt="WebChannelConnection";class pk extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,h){const d=Ud(),p=this.No(t,i.toUriEncodedString());oe("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(y,l,h),this.Bo(t,p,y,o).then(w=>(oe("RestConnection",`Received RPC '${t}' ${d}: `,w),w),w=>{throw Io("RestConnection",`RPC '${t}' ${d} failed with error: `,w,"url: ",p,"request:",o),w})}ko(t,i,o,l,h,d){return this.Oo(t,i,o,l,h)}Lo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,i){const o=dk[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,o){const l=Ud();return new Promise((h,d)=>{const p=new Hv;p.setWithCredentials(!0),p.listenOnce(Wv.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Xu.NO_ERROR:const w=p.getResponseJson();oe(Mt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),h(w);break;case Xu.TIMEOUT:oe(Mt,`RPC '${e}' ${l} timed out`),d(new le(K.DEADLINE_EXCEEDED,"Request time out"));break;case Xu.HTTP_ERROR:const T=p.getStatus();if(oe(Mt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let R=p.getResponseJson();Array.isArray(R)&&(R=R[0]);const x=R==null?void 0:R.error;if(x&&x.status&&x.message){const b=function(j){const W=j.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(W)>=0?W:K.UNKNOWN}(x.status);d(new le(b,x.message))}else d(new le(K.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new le(K.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{oe(Mt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);oe(Mt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=Ud(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Qv(),d=Kv(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Lo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const w=l.join("");oe(Mt,`Creating RPC '${e}' stream ${o}: ${w}`,p);const T=h.createWebChannel(w,p);let R=!1,x=!1;const b=new fk({Eo:j=>{x?oe(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,j):(R||(oe(Mt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),R=!0),oe(Mt,`RPC '${e}' stream ${o} sending:`,j),T.send(j))},Ao:()=>T.close()}),$=(j,W,X)=>{j.listen(W,re=>{try{X(re)}catch(de){setTimeout(()=>{throw de},0)}})};return $(T,za.EventType.OPEN,()=>{x||(oe(Mt,`RPC '${e}' stream ${o} transport opened.`),b.So())}),$(T,za.EventType.CLOSE,()=>{x||(x=!0,oe(Mt,`RPC '${e}' stream ${o} transport closed`),b.Do())}),$(T,za.EventType.ERROR,j=>{x||(x=!0,Io(Mt,`RPC '${e}' stream ${o} transport errored:`,j),b.Do(new le(K.UNAVAILABLE,"The operation could not be completed")))}),$(T,za.EventType.MESSAGE,j=>{var W;if(!x){const X=j.data[0];Ue(!!X);const re=X,de=(re==null?void 0:re.error)||((W=re[0])===null||W===void 0?void 0:W.error);if(de){oe(Mt,`RPC '${e}' stream ${o} received error:`,de);const Se=de.status;let Te=function(A){const k=lt[A];if(k!==void 0)return w0(k)}(Se),N=de.message;Te===void 0&&(Te=K.INTERNAL,N="Unknown error status: "+Se+" with message "+de.message),x=!0,b.Do(new le(Te,N)),T.close()}else oe(Mt,`RPC '${e}' stream ${o} received:`,X),b.vo(X)}}),$(d,Gv.STAT_EVENT,j=>{j.stat===ef.PROXY?oe(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):j.stat===ef.NOPROXY&&oe(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{b.bo()},0),b}}function jd(){return typeof document<"u"?document:null}/**
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
 */function Bc(n){return new EP(n,!0)}/**
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
 */class O0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class L0{constructor(e,t,i,o,l,h,d,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new O0(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new le(K.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.E_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mk extends L0{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=SP(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?lr(h.readTime):Ee.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=hf(this.serializer),t.addTarget=function(l,h){let d;const p=h.target;if(d=sf(p)?{documents:CP(l,p)}:{query:PP(l,p).ct},d.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){d.resumeToken=I0(l,h.resumeToken);const y=lf(l,h.expectedCount);y!==null&&(d.expectedCount=y)}else if(h.snapshotVersion.compareTo(Ee.min())>0){d.readTime=_c(l,h.snapshotVersion.toTimestamp());const y=lf(l,h.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=NP(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=hf(this.serializer),t.removeTarget=e,this.c_(t)}}class gk extends L0{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=AP(e.writeResults,e.commitTime),i=lr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=hf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>RP(this.serializer,i))};this.c_(t)}}/**
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
 */class yk extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new le(K.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,uf(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new le(K.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.ko(e,uf(t,i),o,h,d,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new le(K.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class _k{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Fr(t),this.C_=!1):oe("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class vk{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{i.enqueueAndForget(async()=>{ws(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Ie(p);y.k_.add(4),await vl(y),y.K_.set("Unknown"),y.k_.delete(4),await $c(y)}(this))})}),this.K_=new _k(i,o)}}async function $c(n){if(ws(n))for(const e of n.q_)await e(!0)}async function vl(n){for(const e of n.q_)await e(!1)}function V0(n,e){const t=Ie(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),sp(t)?ip(t):Fo(t).s_()&&rp(t,e))}function np(n,e){const t=Ie(n),i=Fo(t);t.B_.delete(e),i.s_()&&M0(t,e),t.B_.size===0&&(i.s_()?i.a_():ws(t)&&t.K_.set("Unknown"))}function rp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fo(n).V_(e)}function M0(n,e){n.U_.xe(e),Fo(n).m_(e)}function ip(n){n.U_=new yP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Fo(n).start(),n.K_.F_()}function sp(n){return ws(n)&&!Fo(n).i_()&&n.B_.size>0}function ws(n){return Ie(n).k_.size===0}function b0(n){n.U_=void 0}async function wk(n){n.K_.set("Online")}async function Ek(n){n.B_.forEach((e,t)=>{rp(n,e)})}async function Tk(n,e){b0(n),sp(n)?(n.K_.O_(e),ip(n)):n.K_.set("Unknown")}async function Ik(n,e,t){if(n.K_.set("Online"),e instanceof T0&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const d of l.targetIds)o.B_.has(d)&&(await o.remoteSyncer.rejectListen(d,h),o.B_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await wc(n,i)}else if(e instanceof tc?n.U_.$e(e):e instanceof E0?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ee.min()))try{const i=await D0(n.localStore);t.compareTo(i)>=0&&await function(l,h){const d=l.U_.it(h);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const w=l.B_.get(y);w&&l.B_.set(y,w.withResumeToken(p.resumeToken,h))}}),d.targetMismatches.forEach((p,y)=>{const w=l.B_.get(p);if(!w)return;l.B_.set(p,w.withResumeToken(kt.EMPTY_BYTE_STRING,w.snapshotVersion)),M0(l,p);const T=new yi(w.target,p,y,w.sequenceNumber);rp(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){oe("RemoteStore","Failed to raise snapshot:",i),await wc(n,i)}}async function wc(n,e,t){if(!bo(e))throw e;n.k_.add(1),await vl(n),n.K_.set("Offline"),t||(t=()=>D0(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{oe("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await $c(n)})}function F0(n,e){return e().catch(t=>wc(n,t,e))}async function qc(n){const e=Ie(n),t=Ai(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Sk(e);)try{const o=await ak(e.localStore,i);if(o===null){e.L_.length===0&&t.a_();break}i=o.batchId,Rk(e,o)}catch(o){await wc(e,o)}U0(e)&&j0(e)}function Sk(n){return ws(n)&&n.L_.length<10}function Rk(n,e){n.L_.push(e);const t=Ai(n);t.s_()&&t.f_&&t.g_(e.mutations)}function U0(n){return ws(n)&&!Ai(n).i_()&&n.L_.length>0}function j0(n){Ai(n).start()}async function Ak(n){Ai(n).w_()}async function Ck(n){const e=Ai(n);for(const t of n.L_)e.g_(t.mutations)}async function Pk(n,e,t){const i=n.L_.shift(),o=Yf.from(i,e,t);await F0(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await qc(n)}async function kk(n,e){e&&Ai(n).f_&&await async function(i,o){if(function(h){return pP(h)&&h!==K.ABORTED}(o.code)){const l=i.L_.shift();Ai(i).__(),await F0(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await qc(i)}}(n,e),U0(n)&&j0(n)}async function e_(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const i=ws(t);t.k_.add(3),await vl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await $c(t)}async function Nk(n,e){const t=Ie(n);e?(t.k_.delete(2),await $c(t)):e||(t.k_.add(2),await vl(t),t.K_.set("Unknown"))}function Fo(n){return n.W_||(n.W_=function(t,i,o){const l=Ie(t);return l.b_(),new mk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:wk.bind(null,n),mo:Ek.bind(null,n),po:Tk.bind(null,n),R_:Ik.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),sp(n)?ip(n):n.K_.set("Unknown")):(await n.W_.stop(),b0(n))})),n.W_}function Ai(n){return n.G_||(n.G_=function(t,i,o){const l=Ie(t);return l.b_(),new gk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Ak.bind(null,n),po:kk.bind(null,n),p_:Ck.bind(null,n),y_:Pk.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await qc(n)):(await n.G_.stop(),n.L_.length>0&&(oe("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class op{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,d=new op(e,t,h,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ap(n,e){if(Fr("AsyncQueue",`${e}: ${n}`),bo(n))return new le(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Eo{static emptySet(e){return new Eo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=Ba(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Eo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Eo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class t_{constructor(){this.z_=new et(pe.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):we():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Po{constructor(e,t,i,o,l,h,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(d=>{h.push({type:0,doc:d})}),new Po(e,t,Eo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class xk{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Dk{constructor(){this.queries=n_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Ie(t),l=o.queries;o.queries=n_(),l.forEach((h,d)=>{for(const p of d.J_)p.onError(i)})})(this,new le(K.ABORTED,"Firestore shutting down"))}}function n_(){return new _s(n=>l0(n),bc)}async function z0(n,e){const t=Ie(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new xk,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const d=ap(h,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&lp(t)}async function B0(n,e){const t=Ie(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Ok(n,e){const t=Ie(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const d of h.J_)d.ta(o)&&(i=!0);h.H_=o}}i&&lp(t)}function Lk(n,e,t){const i=Ie(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function lp(n){n.X_.forEach(e=>{e.next()})}var ff,r_;(r_=ff||(ff={})).na="default",r_.Cache="cache";class $0{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Po(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ff.Cache}}/**
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
 */class q0{constructor(e){this.key=e}}class H0{constructor(e){this.key=e}}class Vk{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ke(),this.mutatedKeys=ke(),this.Va=u0(e),this.ma=new Eo(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new t_,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,T)=>{const R=o.get(w),x=Fc(this.query,T)?T:null,b=!!R&&this.mutatedKeys.has(R.key),$=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let j=!1;R&&x?R.data.isEqual(x.data)?b!==$&&(i.track({type:3,doc:x}),j=!0):this.ya(R,x)||(i.track({type:2,doc:x}),j=!0,(p&&this.Va(x,p)>0||y&&this.Va(x,y)<0)&&(d=!0)):!R&&x?(i.track({type:0,doc:x}),j=!0):R&&!x&&(i.track({type:1,doc:R}),j=!0,(p||y)&&(d=!0)),j&&(x?(h=h.add(x),l=$?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{ma:h,pa:i,ss:d,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,T)=>function(x,b){const $=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return $(x)-$(b)}(w.type,T.type)||this.Va(w.doc,T.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,h.length!==0||y?{snapshot:new Po(this.query,e.ma,l,h,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new t_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ke(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new H0(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new q0(i))}),t}va(e){this.da=e.ds,this.Ra=ke();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Po.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Mk{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class bk{constructor(e){this.key=e,this.Fa=!1}}class Fk{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new _s(d=>l0(d),bc),this.Oa=new Map,this.Na=new Set,this.La=new et(pe.comparator),this.Ba=new Map,this.ka=new Zf,this.qa={},this.Qa=new Map,this.Ka=Co.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Uk(n,e,t=!0){const i=X0(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await W0(i,e,t,!0),o}async function jk(n,e){const t=X0(n);await W0(t,e,!0,!1)}async function W0(n,e,t,i){const o=await lk(n.localStore,ar(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await zk(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&V0(n.remoteStore,o),d}async function zk(n,e,t,i,o){n.Ua=(T,R,x)=>async function($,j,W,X){let re=j.view.ga(W);re.ss&&(re=await Xy($.localStore,j.query,!1).then(({documents:N})=>j.view.ga(N,re)));const de=X&&X.targetChanges.get(j.targetId),Se=X&&X.targetMismatches.get(j.targetId)!=null,Te=j.view.applyChanges(re,$.isPrimaryClient,de,Se);return s_($,j.targetId,Te.ba),Te.snapshot}(n,T,R,x);const l=await Xy(n.localStore,e,!0),h=new Vk(e,l.ds),d=h.ga(l.documents),p=_l.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(d,n.isPrimaryClient,p);s_(n,t,y.ba);const w=new Mk(e,t,h);return n.xa.set(e,w),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function Bk(n,e,t){const i=Ie(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(h=>!bc(h,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await df(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&np(i.remoteStore,o.targetId),pf(i,o.targetId)}).catch(Mo)):(pf(i,o.targetId),await df(i.localStore,o.targetId,!0))}async function $k(n,e){const t=Ie(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),np(t.remoteStore,i.targetId))}async function qk(n,e,t){const i=Xk(n);try{const o=await function(h,d){const p=Ie(h),y=mt.now(),w=d.reduce((x,b)=>x.add(b.key),ke());let T,R;return p.persistence.runTransaction("Locally write mutations","readwrite",x=>{let b=Ur(),$=ke();return p.hs.getEntries(x,w).next(j=>{b=j,b.forEach((W,X)=>{X.isValidDocument()||($=$.add(W))})}).next(()=>p.localDocuments.getOverlayedDocuments(x,b)).next(j=>{T=j;const W=[];for(const X of d){const re=uP(X,T.get(X.key).overlayedDocument);re!=null&&W.push(new vs(X.key,re,e0(re.value.mapValue),Bn.exists(!0)))}return p.mutationQueue.addMutationBatch(x,y,W,d)}).next(j=>{R=j;const W=j.applyToLocalDocumentSet(T,$);return p.documentOverlayCache.saveOverlays(x,j.batchId,W)})}).then(()=>({batchId:R.batchId,changes:h0(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,d,p){let y=h.qa[h.currentUser.toKey()];y||(y=new et(xe)),y=y.insert(d,p),h.qa[h.currentUser.toKey()]=y}(i,o.batchId,t),await wl(i,o.changes),await qc(i.remoteStore)}catch(o){const l=ap(o,"Failed to persist write");t.reject(l)}}async function G0(n,e){const t=Ie(n);try{const i=await sk(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ba.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Ue(h.Fa):o.removedDocuments.size>0&&(Ue(h.Fa),h.Fa=!1))}),await wl(t,i,e)}catch(i){await Mo(i)}}function i_(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,h)=>{const d=h.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(h,d){const p=Ie(h);p.onlineState=d;let y=!1;p.queries.forEach((w,T)=>{for(const R of T.J_)R.ea(d)&&(y=!0)}),y&&lp(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Hk(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ba.get(e),l=o&&o.key;if(l){let h=new et(pe.comparator);h=h.insert(l,Ft.newNoDocument(l,Ee.min()));const d=ke().add(l),p=new zc(Ee.min(),new Map,new et(xe),h,d);await G0(i,p),i.La=i.La.remove(l),i.Ba.delete(e),up(i)}else await df(i.localStore,e,!1).then(()=>pf(i,e,t)).catch(Mo)}async function Wk(n,e){const t=Ie(n),i=e.batch.batchId;try{const o=await ik(t.localStore,e);Q0(t,i,null),K0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await wl(t,o)}catch(o){await Mo(o)}}async function Gk(n,e,t){const i=Ie(n);try{const o=await function(h,d){const p=Ie(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let w;return p.mutationQueue.lookupMutationBatch(y,d).next(T=>(Ue(T!==null),w=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,w,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w)).next(()=>p.localDocuments.getDocuments(y,w))})}(i.localStore,e);Q0(i,e,t),K0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await wl(i,o)}catch(o){await Mo(o)}}function K0(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Q0(n,e,t){const i=Ie(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function pf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||Y0(n,i)})}function Y0(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(np(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),up(n))}function s_(n,e,t){for(const i of t)i instanceof q0?(n.ka.addReference(i.key,e),Kk(n,i)):i instanceof H0?(oe("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||Y0(n,i.key)):we()}function Kk(n,e){const t=e.key,i=t.path.canonicalString();n.La.get(t)||n.Na.has(i)||(oe("SyncEngine","New document in limbo: "+t),n.Na.add(i),up(n))}function up(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new pe(Ke.fromString(e)),i=n.Ka.next();n.Ba.set(i,new bk(t)),n.La=n.La.insert(t,i),V0(n.remoteStore,new yi(ar(Gf(t.path)),i,"TargetPurposeLimboResolution",Lc.oe))}}async function wl(n,e,t){const i=Ie(n),o=[],l=[],h=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{h.push(i.Ua(p,e,t).then(y=>{var w;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(p.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=tp.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(h),i.Ma.R_(o),await async function(p,y){const w=Ie(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>H.forEach(y,R=>H.forEach(R.Wi,x=>w.persistence.referenceDelegate.addReference(T,R.targetId,x)).next(()=>H.forEach(R.Gi,x=>w.persistence.referenceDelegate.removeReference(T,R.targetId,x)))))}catch(T){if(!bo(T))throw T;oe("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const R=T.targetId;if(!T.fromCache){const x=w.us.get(R),b=x.snapshotVersion,$=x.withLastLimboFreeSnapshotVersion(b);w.us=w.us.insert(R,$)}}}(i.localStore,l))}async function Qk(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const i=await x0(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(d=>{d.forEach(p=>{p.reject(new le(K.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await wl(t,i.Ts)}}function Yk(n,e){const t=Ie(n),i=t.Ba.get(e);if(i&&i.Fa)return ke().add(i.key);{let o=ke();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const d=t.xa.get(h);o=o.unionWith(d.view.fa)}return o}}function X0(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=G0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hk.bind(null,e),e.Ma.R_=Ok.bind(null,e.eventManager),e.Ma.Wa=Lk.bind(null,e.eventManager),e}function Xk(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gk.bind(null,e),e}class Ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return rk(this.persistence,new tk,e.initialUser,this.serializer)}ja(e){return new N0(ep.ei,this.serializer)}za(e){return new ck}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ec.provider={build:()=>new Ec};class Jk extends Ec{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ue(this.persistence.referenceDelegate instanceof vc);const i=this.persistence.referenceDelegate.garbageCollector;return new jP(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new N0(i=>vc.ei(i,t),this.serializer)}}class mf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>i_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qk.bind(null,this.syncEngine),await Nk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Dk}()}createDatastore(e){const t=Bc(e.databaseInfo.databaseId),i=function(l){return new pk(l)}(e.databaseInfo);return function(l,h,d,p){return new yk(l,h,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,d){return new vk(i,o,l,h,d)}(this.localStore,this.datastore,e.asyncQueue,t=>i_(this.syncEngine,t,0),function(){return Zy.p()?new Zy:new hk}())}createSyncEngine(e,t){return function(o,l,h,d,p,y,w){const T=new Fk(o,l,h,d,p,y);return w&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Ie(o);oe("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await vl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}mf.provider={build:()=>new mf};/**
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
 *//**
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
 */class J0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Zk{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=bt.UNAUTHENTICATED,this.clientId=Xv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{oe("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(oe("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=ap(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function zd(n,e){n.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await x0(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function o_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await eN(n);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>e_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>e_(e.remoteStore,o)),n._onlineComponents=e}async function eN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await zd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Io("Error using user provided cache. Falling back to memory cache: "+t),await zd(n,new Ec)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await zd(n,new Jk(void 0));return n._offlineComponents}async function Z0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await o_(n,n._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await o_(n,new mf))),n._onlineComponents}function tN(n){return Z0(n).then(e=>e.syncEngine)}async function ew(n){const e=await Z0(n),t=e.eventManager;return t.onListen=Uk.bind(null,e.syncEngine),t.onUnlisten=Bk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$k.bind(null,e.syncEngine),t}function nN(n,e,t={}){const i=new Vr;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,d,p,y){const w=new J0({next:R=>{w.eu(),h.enqueueAndForget(()=>B0(l,T));const x=R.docs.has(d);!x&&R.fromCache?y.reject(new le(K.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&R.fromCache&&p&&p.source==="server"?y.reject(new le(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(R)},error:R=>y.reject(R)}),T=new $0(Gf(d.path),w,{includeMetadataChanges:!0,ua:!0});return z0(l,T)}(await ew(n),n.asyncQueue,e,t,i)),i.promise}function rN(n,e,t={}){const i=new Vr;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,d,p,y){const w=new J0({next:R=>{w.eu(),h.enqueueAndForget(()=>B0(l,T)),R.fromCache&&p.source==="server"?y.reject(new le(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(R)},error:R=>y.reject(R)}),T=new $0(d,w,{includeMetadataChanges:!0,ua:!0});return z0(l,T)}(await ew(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function tw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const a_=new Map;/**
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
 */function nw(n,e,t){if(!t)throw new le(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function iN(n,e,t,i){if(e===!0&&i===!0)throw new le(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function l_(n){if(!pe.isDocumentKey(n))throw new le(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function u_(n){if(pe.isDocumentKey(n))throw new le(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we()}function jr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new le(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hc(n);throw new le(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class c_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new le(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new le(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new le(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new le(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new le(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new c_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new c_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new gC;switch(i.type){case"firstParty":return new wC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new le(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=a_.get(t);i&&(oe("ComponentProvider","Removing Datastore"),a_.delete(t),i.terminate())}(this),Promise.resolve()}}function sN(n,e,t,i={}){var o;const l=(n=jr(n,Wc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=bt.MOCK_USER;else{d=uI(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new le(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new bt(y)}n._authCredentials=new yC(new Yv(d,p))}}/**
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
 */class Uo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Uo(this.firestore,e,this._query)}}class tn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tn(this.firestore,e,this._key)}}class wi extends Uo{constructor(e,t,i){super(e,t,Gf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tn(this.firestore,null,new pe(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}function rw(n,e,...t){if(n=jt(n),nw("collection","path",e),n instanceof Wc){const i=Ke.fromString(e,...t);return u_(i),new wi(n,null,i)}{if(!(n instanceof tn||n instanceof wi))throw new le(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return u_(i),new wi(n.firestore,null,i)}}function Gc(n,e,...t){if(n=jt(n),arguments.length===1&&(e=Xv.newId()),nw("doc","path",e),n instanceof Wc){const i=Ke.fromString(e,...t);return l_(i),new tn(n,null,new pe(i))}{if(!(n instanceof tn||n instanceof wi))throw new le(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return l_(i),new tn(n.firestore,n instanceof wi?n.converter:null,new pe(i))}}/**
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
 */class h_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new O0(this,"async_queue_retry"),this.fu=()=>{const i=jd();i&&oe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=jd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=jd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Vr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!bo(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(h){let d=h.message||"";return h.stack&&(d=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),d}(i);throw Fr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=op.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&we()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class jo extends Wc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new h_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new h_(e),this._firestoreClient=void 0,await e}}}function iw(n,e){const t=typeof n=="object"?n:Rf(),i=typeof n=="string"?n:"(default)",o=gs(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=aI("firestore");l&&sN(o,...l)}return o}function cp(n){if(n._terminated)throw new le(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||oN(n),n._firestoreClient}function oN(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,w){return new VC(d,p,y,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,tw(w.experimentalLongPollingOptions),w.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new Zk(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class ko{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ko(kt.fromBase64String(e))}catch(t){throw new le(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ko(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new le(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sw{constructor(e){this._methodName=e}}/**
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
 */class dp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new le(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new le(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */class fp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const aN=/^__.*__$/;class lN{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,t,this.fieldTransforms):new yl(e,this.data,t,this.fieldTransforms)}}function ow(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class pp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new pp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Lu(e),o}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Tc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(ow(this.Mu)&&aN.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class uN{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Bc(e)}$u(e,t,i,o=!1){return new pp({Mu:e,methodName:t,Ku:i,path:Pt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mp(n){const e=n._freezeSettings(),t=Bc(n._databaseId);return new uN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function aw(n,e,t,i,o,l={}){const h=n.$u(l.merge||l.mergeFields?2:0,e,t,o);cw("Data must be an object, but it was:",h,i);const d=lw(i,h);let p,y;if(l.merge)p=new jn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const R=hN(e,T,t);if(!h.contains(R))throw new le(K.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);fN(w,R)||w.push(R)}p=new jn(w),y=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=h.fieldTransforms;return new lN(new En(d),p,y)}function cN(n,e,t,i=!1){return gp(t,n.$u(i?4:3,e))}function gp(n,e){if(uw(n=jt(n)))return cw("Unsupported field value:",e,n),lw(n,e);if(n instanceof sw)return function(i,o){if(!ow(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const d of i){let p=gp(d,o.ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=jt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return rP(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=mt.fromDate(i);return{timestampValue:_c(o.serializer,l)}}if(i instanceof mt){const l=new mt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:_c(o.serializer,l)}}if(i instanceof dp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ko)return{bytesValue:I0(o.serializer,i._byteString)};if(i instanceof tn){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Jf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof fp)return function(h,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return Kf(d.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${Hc(i)}`)}(n,e)}function lw(n,e){const t={};return Jv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(n,(i,o)=>{const l=gp(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function uw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof mt||n instanceof dp||n instanceof ko||n instanceof tn||n instanceof sw||n instanceof fp)}function cw(n,e,t){if(!uw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Hc(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function hN(n,e,t){if((e=jt(e))instanceof hp)return e._internalPath;if(typeof e=="string")return hw(n,e);throw Tc("Field path arguments must be of type string or ",n,!1,void 0,t)}const dN=new RegExp("[~\\*/\\[\\]]");function hw(n,e,t){if(e.search(dN)>=0)throw Tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new hp(...e.split("."))._internalPath}catch{throw Tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Tc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new le(K.INVALID_ARGUMENT,d+n+p)}function fN(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class dw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(yp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class pN extends dw{data(){return super.data()}}function yp(n,e){return typeof e=="string"?hw(n,e):e instanceof hp?e._internalPath:e._delegate._internalPath}/**
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
 */function mN(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new le(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _p{}class gN extends _p{}function yN(n,e,...t){let i=[];e instanceof _p&&i.push(e),i=i.concat(t),function(l){const h=l.filter(p=>p instanceof vp).length,d=l.filter(p=>p instanceof Kc).length;if(h>1||h>0&&d>0)throw new le(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class Kc extends gN{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Kc(e,t,i)}_apply(e){const t=this._parse(e);return fw(e._query,t),new Uo(e.firestore,e.converter,of(e._query,t))}_parse(e){const t=mp(e.firestore);return function(l,h,d,p,y,w,T){let R;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new le(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){f_(T,w);const x=[];for(const b of T)x.push(d_(p,l,b));R={arrayValue:{values:x}}}else R=d_(p,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||f_(T,w),R=cN(d,h,T,w==="in"||w==="not-in");return ut.create(y,w,R)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function _N(n,e,t){const i=e,o=yp("where",n);return Kc._create(o,i,t)}class vp extends _p{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new vp(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Hn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let h=o;const d=l.getFlattenedFilters();for(const p of d)fw(h,p),h=of(h,p)}(e._query,t),new Uo(e.firestore,e.converter,of(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function d_(n,e,t){if(typeof(t=jt(t))=="string"){if(t==="")throw new le(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!a0(e)&&t.indexOf("/")!==-1)throw new le(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ke.fromString(t));if(!pe.isDocumentKey(i))throw new le(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Oy(n,new pe(i))}if(t instanceof tn)return Oy(n,t._key);throw new le(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hc(t)}.`)}function f_(n,e){if(!Array.isArray(n)||n.length===0)throw new le(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fw(n,e){const t=function(o,l){for(const h of o)for(const d of h.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new le(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new le(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class vN{convertValue(e,t="none"){switch(Ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ys(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>st(h.doubleValue));return new fp(l)}convertGeoPoint(e){return new dp(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Mc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(nl(e));default:return null}}convertTimestamp(e){const t=Ii(e);return new mt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ke.fromString(e);Ue(k0(i));const o=new rl(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||Fr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function pw(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
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
 */class qa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mw extends dw{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new nc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(yp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class nc extends mw{data(e={}){return super.data(e)}}class wN{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new qa(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new nc(this._firestore,this._userDataWriter,i.key,i,new qa(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new le(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(d=>{const p=new nc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new qa(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new nc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new qa(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return d.type!==0&&(y=h.indexOf(d.doc.key),h=h.delete(d.doc.key)),d.type!==1&&(h=h.add(d.doc),w=h.indexOf(d.doc.key)),{type:EN(d.type),doc:p,oldIndex:y,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function EN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}/**
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
 */function TN(n){n=jr(n,tn);const e=jr(n.firestore,jo);return nN(cp(e),n._key).then(t=>AN(e,n,t))}class gw extends vN{constructor(e){super(),this.firestore=e}convertBytes(e){return new ko(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tn(this.firestore,null,t)}}function IN(n){n=jr(n,Uo);const e=jr(n.firestore,jo),t=cp(e),i=new gw(e);return mN(n._query),rN(t,n._query).then(o=>new wN(e,i,n,o))}function yw(n,e,t){n=jr(n,tn);const i=jr(n.firestore,jo),o=pw(n.converter,e);return wp(i,[aw(mp(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Bn.none())])}function SN(n){return wp(jr(n.firestore,jo),[new Qf(n._key,Bn.none())])}function RN(n,e){const t=jr(n.firestore,jo),i=Gc(n),o=pw(n.converter,e);return wp(t,[aw(mp(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Bn.exists(!1))]).then(()=>i)}function wp(n,e){return function(i,o){const l=new Vr;return i.asyncQueue.enqueueAndForget(async()=>qk(await tN(i),o,l)),l.promise}(cp(n),e)}function AN(n,e,t){const i=t.docs.get(e._key),o=new gw(n);return new mw(n,o,e._key,i,new qa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Vo=o})(Oo),ur(new qn("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),d=new jo(new _C(i.getProvider("auth-internal")),new TC(i.getProvider("app-check-internal")),function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new le(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rl(y.options.projectId,w)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Tn(Cy,"4.7.5",e),Tn(Cy,"4.7.5","esm2017")})();var is={};const CN={apiKey:is.REACT_APP_API_KEY,authDomain:is.REACT_APP_AUTH_DOMAIN,projectId:is.REACT_APP_PROJECT_ID,storageBucket:is.REACT_APP_STORAGE_BUCKET,messagingSenderId:is.REACT_APP_MESSAGING_SENDER_ID,appId:is.REACT_APP_APP_ID,measurementId:is.REACT_APP_MEASUREMENT_ID},_w=U_(CN);X1(_w);const al=pC();new sr;const Ic=iw(_w),PN=()=>{const[n,e]=q.useState(""),[t,i]=q.useState(""),[o,l]=q.useState(""),h=async p=>{p.preventDefault();try{const w=(await ZR(al,n,t)).user}catch(y){l(y.message),alert("User not found or password incorrect!")}},d=async()=>{const p=new sr;try{const w=(await IA(al,p)).user,T=Gc(Ic,"users",w.uid);(await TN(T)).exists()||await yw(T,{name:w.displayName||"",email:w.email,createdAt:new Date,expenses:[]})}catch(y){console.error("Error during Google login:",y.message)}};return te.jsxs("div",{className:"loginPage-wrap",children:[te.jsx("div",{className:"title",children:te.jsx("h2",{children:"Login"})}),te.jsxs("div",{className:"login__forms",children:[te.jsxs("form",{onSubmit:h,children:[te.jsx("input",{id:"email",type:"email",placeholder:"Email",value:n,onChange:p=>e(p.target.value),required:!0}),te.jsx("input",{id:"password",type:"password",placeholder:"Password",value:t,onChange:p=>i(p.target.value),required:!0}),te.jsx("button",{className:"submit-button",children:"Log In"})]}),te.jsx("button",{className:"google-login",onClick:d,children:"Log in with Google"})]}),te.jsx("div",{className:"goToRegister",children:te.jsxs("p",{children:["Don’t have an account? ",te.jsx(Ac,{to:{pathname:"/register"},children:te.jsx("strong",{children:"Register"})})]})})]})},kN=()=>{const[n,e]=q.useState(""),[t,i]=q.useState(""),[o,l]=q.useState(""),[h,d]=q.useState(""),[p,y]=q.useState(""),w=ul(),T=iw(),R=async x=>{if(x.preventDefault(),y(""),t!==o){y("Passwords do not match!");return}if(!h.trim()){y("Name is required!");return}try{const $=(await JR(al,n,t)).user;await tA($,{displayName:h}),await yw(Gc(T,"users",$.uid),{name:h,email:n,createdAt:new Date}),w("/main")}catch(b){y(b.message),alert("Registration error")}};return te.jsx("div",{className:"register-container",children:te.jsxs("form",{onSubmit:R,className:"register-form",children:[te.jsx("h2",{className:"title",children:"Create an Account"}),te.jsxs("div",{className:"register-forms",children:[te.jsx("input",{placeholder:"Name",type:"text",value:h,onChange:x=>d(x.target.value),required:!0}),te.jsx("input",{placeholder:"Email",type:"email",value:n,onChange:x=>e(x.target.value),required:!0}),te.jsx("input",{placeholder:"Password",type:"password",value:t,onChange:x=>i(x.target.value),required:!0}),te.jsx("input",{placeholder:"Confirm Password",type:"password",value:o,onChange:x=>l(x.target.value),required:!0}),te.jsx("button",{className:"register-btn",type:"submit",children:"Register"}),te.jsx(Ac,{className:"backToLogin-btn",to:"/",children:te.jsx("strong",{children:"Back to Login"})})]})]})})},NN="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='24px'%20height='24px'%20fill-rule='nonzero'%3e%3cg%20fill='%23ffffff'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(10.66667,10.66667)'%3e%3cpath%20d='M10,2l-1,1h-6v2h18v-2h-6l-1,-1zM4.36523,7l1.52734,13.26367c0.132,0.99%200.98442,1.73633%201.98242,1.73633h8.24805c0.998,0%201.85138,-0.74514%201.98438,-1.74414l1.52734,-13.25586z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",xN=({user:n})=>{const[e,t]=q.useState([]),[i,o]=q.useState(!0),l=ul();q.useEffect(()=>{(async()=>{try{const w=rw(Ic,"expenses"),T=yN(w,_N("userId","==",n.uid)),x=(await IN(T)).docs.map(b=>({id:b.id,...b.data()}));t(x)}catch(w){console.error("Error fetching expenses: ",w)}finally{o(!1)}})()},[n.uid]);const h=()=>{l("/add-expense")},d=async y=>{try{await SN(Gc(Ic,"expenses",y)),t(w=>w.filter(T=>T.id!==y))}catch{alert("Error deleting expense")}},p=e.reduce((y,w)=>y+parseFloat(w.amount),0);return i?te.jsx("div",{className:"loadingWrap",children:te.jsx("div",{className:"loadingDiv",children:"Loading your expenses..."})}):te.jsxs("div",{className:"main-page",children:[te.jsxs("p",{className:"welcome-message",children:["Hello, ",n.displayName||"User","!"]}),te.jsxs("div",{className:"expense-summary",children:[te.jsx("h2",{children:"Your total expenses:"}),te.jsxs("p",{children:["$ ",p.toFixed(2)]})]}),te.jsx("button",{className:"add-expense-btn",onClick:h,children:"Add Expense"}),te.jsxs("div",{className:"expense-list",children:[te.jsx("p",{children:"Resent expenses:"}),te.jsx("div",{className:"horisontal-line"}),e.length>0?e.map(y=>te.jsxs("div",{className:"expense-item",children:[te.jsxs("div",{className:"expense-amount",children:["$ ",y.amount]}),te.jsx("div",{className:"expense-category",children:y.category}),te.jsx("div",{className:"expense-date",children:y.date}),te.jsx("button",{className:"delete-expense-btn",onClick:()=>d(y.id),children:te.jsx("img",{src:NN,alt:"Delete expense"})})]},y.id)):te.jsx("p",{className:"noExpenses-text",children:"No expenses found. Add your first expense!"})]})]})},DN="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20height='800px'%20width='800px'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20384.971%20384.971'%20xml:space='preserve'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cg%20id='Sign_Out'%3e%3cpath%20d='M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03%20C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03%20C192.485,366.299,187.095,360.91,180.455,360.91z'/%3e%3cpath%20d='M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279%20c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179%20c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z'/%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ON=()=>{const n=async()=>{try{await al.signOut(),alert("You logged out successfully")}catch(e){alert(e)}};return te.jsx("div",{className:"header-container",children:te.jsxs("div",{className:"header-content",children:[te.jsx("div",{className:"header__logo",children:te.jsx("p",{children:"LOGO"})}),te.jsx("div",{className:"header__logout",children:te.jsx("button",{onClick:n,children:te.jsx("img",{src:DN,alt:"logout button"})})})]})})},LN=({user:n,children:e})=>n?e:te.jsx(qu,{to:"/"}),VN=({user:n})=>{const[e,t]=q.useState(""),[i,o]=q.useState(""),[l,h]=q.useState(""),d=ul(),p=async y=>{y.preventDefault();try{await RN(rw(Ic,"expenses"),{amount:e,category:i,date:l,userId:n.uid}),d("/main")}catch{alert("Error adding expense")}};return te.jsxs("div",{className:"add-expense-page",children:[te.jsx("h2",{className:"title",children:"Add New Expense"}),te.jsxs("form",{onSubmit:p,children:[te.jsxs("div",{className:"forms",children:[te.jsx("input",{type:"number",value:e,onChange:y=>t(y.target.value),required:!0,placeholder:"Enter amount"}),te.jsx("input",{type:"text",value:i,onChange:y=>o(y.target.value),required:!0,placeholder:"Enter category"}),te.jsx("input",{type:"date",value:l,onChange:y=>h(y.target.value),required:!0})]}),te.jsx("div",{className:"submit-btn",children:te.jsx("button",{type:"submit",children:"Add Expense"})})]})]})};function MN(){const[n,e]=q.useState(null),[t,i]=q.useState(!0);return q.useEffect(()=>{const o=al.onAuthStateChanged(l=>{e(l),i(!1)});return()=>o()},[]),t?te.jsx("div",{className:"loadingWrap",children:te.jsx("div",{className:"loadingDiv",children:"Loading..."})}):te.jsx(te.Fragment,{children:te.jsx(qT,{children:te.jsxs("div",{className:"wrap",children:[te.jsx(ON,{}),te.jsxs(wT,{children:[te.jsx(Fa,{path:"/",element:n?te.jsx(qu,{to:"/main"}):te.jsx(PN,{})}),te.jsx(Fa,{path:"/register",element:n?te.jsx(qu,{to:"/main"}):te.jsx(kN,{})}),te.jsx(Fa,{path:"/main",element:te.jsx(LN,{user:n,children:te.jsx(xN,{user:n})})}),te.jsx(Fa,{path:"/add-expense",element:n?te.jsx(VN,{user:n}):te.jsx(qu,{to:"/"})})]})]})})})}NE.createRoot(document.getElementById("root")).render(te.jsx(q.StrictMode,{children:te.jsx(MN,{})}));
