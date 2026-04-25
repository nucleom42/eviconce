var gm=Object.create;var Fu=Object.defineProperty;var vm=Object.getOwnPropertyDescriptor;var ym=Object.getOwnPropertyNames;var wm=Object.getPrototypeOf,xm=Object.prototype.hasOwnProperty;var zn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var bm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of ym(t))!xm.call(e,o)&&o!==n&&Fu(e,o,{get:()=>t[o],enumerable:!(r=vm(t,o))||r.enumerable});return e};var J=(e,t,n)=>(n=e!=null?gm(wm(e)):{},bm(t||!e||!e.__esModule?Fu(n,"default",{value:e,enumerable:!0}):n,e));var Yu=zn(q=>{"use strict";var Ur=Symbol.for("react.element"),km=Symbol.for("react.portal"),Sm=Symbol.for("react.fragment"),Em=Symbol.for("react.strict_mode"),Cm=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),_m=Symbol.for("react.context"),Pm=Symbol.for("react.forward_ref"),Lm=Symbol.for("react.suspense"),Dm=Symbol.for("react.memo"),Tm=Symbol.for("react.lazy"),Ru=Symbol.iterator;function zm(e){return e===null||typeof e!="object"?null:(e=Ru&&e[Ru]||e["@@iterator"],typeof e=="function"?e:null)}var Au={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ju=Object.assign,$u={};function rr(e,t,n){this.props=e,this.context=t,this.refs=$u,this.updater=n||Au}rr.prototype.isReactComponent={};rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Uu(){}Uu.prototype=rr.prototype;function Li(e,t,n){this.props=e,this.context=t,this.refs=$u,this.updater=n||Au}var Di=Li.prototype=new Uu;Di.constructor=Li;ju(Di,rr.prototype);Di.isPureReactComponent=!0;var Mu=Array.isArray,Hu=Object.prototype.hasOwnProperty,Ti={current:null},Bu={key:!0,ref:!0,__self:!0,__source:!0};function Wu(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Hu.call(t,r)&&!Bu.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ur,type:e,key:a,ref:i,props:o,_owner:Ti.current}}function Om(e,t){return{$$typeof:Ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur}function Fm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Iu=/\/+/g;function Pi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fm(""+e.key):t.toString(36)}function Jo(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ur:case km:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Pi(i,0):r,Mu(o)?(n="",e!=null&&(n=e.replace(Iu,"$&/")+"/"),Jo(o,t,n,"",function(u){return u})):o!=null&&(zi(o)&&(o=Om(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Iu,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Mu(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Pi(a,l);i+=Jo(a,t,n,s,o)}else if(s=zm(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Pi(a,l++),i+=Jo(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Qo(e,t,n){if(e==null)return e;var r=[],o=0;return Jo(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Rm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},Ko={transition:null},Mm={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:Ti};function Vu(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Qo,forEach:function(e,t,n){Qo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qo(e,function(){t++}),t},toArray:function(e){return Qo(e,function(t){return t})||[]},only:function(e){if(!zi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=rr;q.Fragment=Sm;q.Profiler=Cm;q.PureComponent=Li;q.StrictMode=Em;q.Suspense=Lm;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mm;q.act=Vu;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ju({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Ti.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Hu.call(t,s)&&!Bu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ur,type:e.type,key:o,ref:a,props:r,_owner:i}};q.createContext=function(e){return e={$$typeof:_m,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nm,_context:e},e.Consumer=e};q.createElement=Wu;q.createFactory=function(e){var t=Wu.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:Pm,render:e}};q.isValidElement=zi;q.lazy=function(e){return{$$typeof:Tm,_payload:{_status:-1,_result:e},_init:Rm}};q.memo=function(e,t){return{$$typeof:Dm,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Ko.transition;Ko.transition={};try{e()}finally{Ko.transition=t}};q.unstable_act=Vu;q.useCallback=function(e,t){return Be.current.useCallback(e,t)};q.useContext=function(e){return Be.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};q.useEffect=function(e,t){return Be.current.useEffect(e,t)};q.useId=function(){return Be.current.useId()};q.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Be.current.useMemo(e,t)};q.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};q.useRef=function(e){return Be.current.useRef(e)};q.useState=function(e){return Be.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return Be.current.useTransition()};q.version="18.3.1"});var Q=zn((g0,Qu)=>{"use strict";Qu.exports=Yu()});var rd=zn(le=>{"use strict";function Mi(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Go(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Et(e){return e.length===0?null:e[0]}function Zo(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var i=2*(r+1)-1,l=e[i],s=i+1,u=e[s];if(0>Go(l,n))s<o&&0>Go(u,l)?(e[r]=u,e[s]=n,r=s):(e[r]=l,e[i]=n,r=i);else if(s<o&&0>Go(u,n))e[r]=u,e[s]=n,r=s;else break e}}return t}function Go(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Ju=performance,le.unstable_now=function(){return Ju.now()}):(Oi=Date,Ku=Oi.now(),le.unstable_now=function(){return Oi.now()-Ku});var Ju,Oi,Ku,Ft=[],on=[],Im=1,mt=null,Me=3,qo=!1,On=!1,Br=!1,Zu=typeof setTimeout=="function"?setTimeout:null,qu=typeof clearTimeout=="function"?clearTimeout:null,Gu=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ii(e){for(var t=Et(on);t!==null;){if(t.callback===null)Zo(on);else if(t.startTime<=e)Zo(on),t.sortIndex=t.expirationTime,Mi(Ft,t);else break;t=Et(on)}}function Ai(e){if(Br=!1,Ii(e),!On)if(Et(Ft)!==null)On=!0,$i(ji);else{var t=Et(on);t!==null&&Ui(Ai,t.startTime-e)}}function ji(e,t){On=!1,Br&&(Br=!1,qu(Wr),Wr=-1),qo=!0;var n=Me;try{for(Ii(t),mt=Et(Ft);mt!==null&&(!(mt.expirationTime>t)||e&&!nd());){var r=mt.callback;if(typeof r=="function"){mt.callback=null,Me=mt.priorityLevel;var o=r(mt.expirationTime<=t);t=le.unstable_now(),typeof o=="function"?mt.callback=o:mt===Et(Ft)&&Zo(Ft),Ii(t)}else Zo(Ft);mt=Et(Ft)}if(mt!==null)var a=!0;else{var i=Et(on);i!==null&&Ui(Ai,i.startTime-t),a=!1}return a}finally{mt=null,Me=n,qo=!1}}var ea=!1,Xo=null,Wr=-1,ed=5,td=-1;function nd(){return!(le.unstable_now()-td<ed)}function Fi(){if(Xo!==null){var e=le.unstable_now();td=e;var t=!0;try{t=Xo(!0,e)}finally{t?Hr():(ea=!1,Xo=null)}}else ea=!1}var Hr;typeof Gu=="function"?Hr=function(){Gu(Fi)}:typeof MessageChannel<"u"?(Ri=new MessageChannel,Xu=Ri.port2,Ri.port1.onmessage=Fi,Hr=function(){Xu.postMessage(null)}):Hr=function(){Zu(Fi,0)};var Ri,Xu;function $i(e){Xo=e,ea||(ea=!0,Hr())}function Ui(e,t){Wr=Zu(function(){e(le.unstable_now())},t)}le.unstable_IdlePriority=5;le.unstable_ImmediatePriority=1;le.unstable_LowPriority=4;le.unstable_NormalPriority=3;le.unstable_Profiling=null;le.unstable_UserBlockingPriority=2;le.unstable_cancelCallback=function(e){e.callback=null};le.unstable_continueExecution=function(){On||qo||(On=!0,$i(ji))};le.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ed=0<e?Math.floor(1e3/e):5};le.unstable_getCurrentPriorityLevel=function(){return Me};le.unstable_getFirstCallbackNode=function(){return Et(Ft)};le.unstable_next=function(e){switch(Me){case 1:case 2:case 3:var t=3;break;default:t=Me}var n=Me;Me=t;try{return e()}finally{Me=n}};le.unstable_pauseExecution=function(){};le.unstable_requestPaint=function(){};le.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Me;Me=e;try{return t()}finally{Me=n}};le.unstable_scheduleCallback=function(e,t,n){var r=le.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:Im++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Mi(on,e),Et(Ft)===null&&e===Et(on)&&(Br?(qu(Wr),Wr=-1):Br=!0,Ui(Ai,n-r))):(e.sortIndex=o,Mi(Ft,e),On||qo||(On=!0,$i(ji))),e};le.unstable_shouldYield=nd;le.unstable_wrapCallback=function(e){var t=Me;return function(){var n=Me;Me=t;try{return e.apply(this,arguments)}finally{Me=n}}}});var ad=zn((y0,od)=>{"use strict";od.exports=rd()});var dp=zn(dt=>{"use strict";var Am=Q(),st=ad();function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fc=new Set,po={};function Yn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(po[e]=t,e=0;e<t.length;e++)fc.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dl=Object.prototype.hasOwnProperty,jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,id={},ld={};function $m(e){return dl.call(ld,e)?!0:dl.call(id,e)?!1:jm.test(e)?ld[e]=!0:(id[e]=!0,!1)}function Um(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hm(e,t,n,r){if(t===null||typeof t>"u"||Um(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var ns=/[\-:]([a-z])/g;function rs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ns,rs);Fe[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ns,rs);Fe[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ns,rs);Fe[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function os(e,t,n,r){var o=Fe.hasOwnProperty(t)?Fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hm(t,n,o,r)&&(n=null),r||o===null?$m(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qt=Am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),ir=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),as=Symbol.for("react.strict_mode"),cl=Symbol.for("react.profiler"),pc=Symbol.for("react.provider"),mc=Symbol.for("react.context"),is=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),ls=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),hc=Symbol.for("react.offscreen"),sd=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=sd&&e[sd]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Hi;function qr(e){if(Hi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hi=t&&t[1]||""}return`
`+Hi+e}var Bi=!1;function Wi(e,t){if(!e||Bi)return"";Bi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==a[l]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{Bi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qr(e):""}function Bm(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=Wi(e.type,!1),e;case 11:return e=Wi(e.type.render,!1),e;case 1:return e=Wi(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case ir:return"Portal";case cl:return"Profiler";case as:return"StrictMode";case fl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mc:return(e.displayName||"Context")+".Consumer";case pc:return(e._context.displayName||"Context")+".Provider";case is:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ls:return t=e.displayName||null,t!==null?t:ml(e.type)||"Memo";case ln:t=e._payload,e=e._init;try{return ml(e(t))}catch{}}return null}function Wm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(t);case 8:return t===as?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vm(e){var t=gc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function na(e){e._valueTracker||(e._valueTracker=Vm(e))}function vc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Da(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hl(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ud(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yc(e,t){t=t.checked,t!=null&&os(e,"checked",t,!1)}function gl(e,t){yc(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&vl(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vl(e,t,n){(t!=="number"||Da(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var eo=Array.isArray;function yr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(eo(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function wc(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ra,bc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ra=ra||document.createElement("div"),ra.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ra.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ym=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){Ym.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ro[t]=ro[e]})});function kc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ro.hasOwnProperty(e)&&ro[e]?(""+t).trim():t+"px"}function Sc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=kc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Qm=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xl(e,t){if(t){if(Qm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kl=null;function ss(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,wr=null,xr=null;function pd(e){if(e=zo(e)){if(typeof Sl!="function")throw Error(T(280));var t=e.stateNode;t&&(t=oi(t),Sl(e.stateNode,e.type,t))}}function Ec(e){wr?xr?xr.push(e):xr=[e]:wr=e}function Cc(){if(wr){var e=wr,t=xr;if(xr=wr=null,pd(e),t)for(e=0;e<t.length;e++)pd(t[e])}}function Nc(e,t){return e(t)}function _c(){}var Vi=!1;function Pc(e,t,n){if(Vi)return e(t,n);Vi=!0;try{return Nc(e,t,n)}finally{Vi=!1,(wr!==null||xr!==null)&&(_c(),Cc())}}function ho(e,t){var n=e.stateNode;if(n===null)return null;var r=oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var El=!1;if(Kt)try{or={},Object.defineProperty(or,"passive",{get:function(){El=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{El=!1}var or;function Jm(e,t,n,r,o,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var oo=!1,Ta=null,za=!1,Cl=null,Km={onError:function(e){oo=!0,Ta=e}};function Gm(e,t,n,r,o,a,i,l,s){oo=!1,Ta=null,Jm.apply(Km,arguments)}function Xm(e,t,n,r,o,a,i,l,s){if(Gm.apply(this,arguments),oo){if(oo){var u=Ta;oo=!1,Ta=null}else throw Error(T(198));za||(za=!0,Cl=u)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function md(e){if(Qn(e)!==e)throw Error(T(188))}function Zm(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return md(o),e;if(a===r)return md(o),t;a=a.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Dc(e){return e=Zm(e),e!==null?Tc(e):null}function Tc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tc(e);if(t!==null)return t;e=e.sibling}return null}var zc=st.unstable_scheduleCallback,hd=st.unstable_cancelCallback,qm=st.unstable_shouldYield,eh=st.unstable_requestPaint,be=st.unstable_now,th=st.unstable_getCurrentPriorityLevel,us=st.unstable_ImmediatePriority,Oc=st.unstable_UserBlockingPriority,Oa=st.unstable_NormalPriority,nh=st.unstable_LowPriority,Fc=st.unstable_IdlePriority,ei=null,At=null;function rh(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:ih,oh=Math.log,ah=Math.LN2;function ih(e){return e>>>=0,e===0?32:31-(oh(e)/ah|0)|0}var oa=64,aa=4194304;function to(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=to(l):(a&=i,a!==0&&(r=to(a)))}else i=n&~o,i!==0?r=to(i):a!==0&&(r=to(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lt(t),o=1<<n,r|=e[n],t&=~o;return r}function lh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Lt(a),l=1<<i,s=o[i];s===-1?((l&n)===0||(l&r)!==0)&&(o[i]=lh(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rc(){var e=oa;return oa<<=1,(oa&4194240)===0&&(oa=64),e}function Yi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Do(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function uh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Lt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function ds(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ie=0;function Mc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ic,cs,Ac,jc,$c,_l=!1,ia=[],pn=null,mn=null,hn=null,go=new Map,vo=new Map,un=[],dh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gd(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(t.pointerId)}}function Yr(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=zo(t),t!==null&&cs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ch(e,t,n,r,o){switch(t){case"focusin":return pn=Yr(pn,e,t,n,r,o),!0;case"dragenter":return mn=Yr(mn,e,t,n,r,o),!0;case"mouseover":return hn=Yr(hn,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return go.set(a,Yr(go.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,vo.set(a,Yr(vo.get(a)||null,e,t,n,r,o)),!0}return!1}function Uc(e){var t=Mn(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=Lc(n),t!==null){e.blockedOn=t,$c(e.priority,function(){Ac(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kl=r,n.target.dispatchEvent(r),kl=null}else return t=zo(n),t!==null&&cs(t),e.blockedOn=n,!1;t.shift()}return!0}function vd(e,t,n){xa(e)&&n.delete(t)}function fh(){_l=!1,pn!==null&&xa(pn)&&(pn=null),mn!==null&&xa(mn)&&(mn=null),hn!==null&&xa(hn)&&(hn=null),go.forEach(vd),vo.forEach(vd)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,_l||(_l=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,fh)))}function yo(e){function t(o){return Qr(o,e)}if(0<ia.length){Qr(ia[0],e);for(var n=1;n<ia.length;n++){var r=ia[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&Qr(pn,e),mn!==null&&Qr(mn,e),hn!==null&&Qr(hn,e),go.forEach(t),vo.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Uc(n),n.blockedOn===null&&un.shift()}var br=qt.ReactCurrentBatchConfig,Ra=!0;function ph(e,t,n,r){var o=ie,a=br.transition;br.transition=null;try{ie=1,fs(e,t,n,r)}finally{ie=o,br.transition=a}}function mh(e,t,n,r){var o=ie,a=br.transition;br.transition=null;try{ie=4,fs(e,t,n,r)}finally{ie=o,br.transition=a}}function fs(e,t,n,r){if(Ra){var o=Pl(e,t,n,r);if(o===null)qi(e,t,r,Ma,n),gd(e,r);else if(ch(o,e,t,n,r))r.stopPropagation();else if(gd(e,r),t&4&&-1<dh.indexOf(e)){for(;o!==null;){var a=zo(o);if(a!==null&&Ic(a),a=Pl(e,t,n,r),a===null&&qi(e,t,r,Ma,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else qi(e,t,r,null,n)}}var Ma=null;function Pl(e,t,n,r){if(Ma=null,e=ss(r),e=Mn(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ma=e,null}function Hc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(th()){case us:return 1;case Oc:return 4;case Oa:case nh:return 16;case Fc:return 536870912;default:return 16}default:return 16}}var cn=null,ps=null,ba=null;function Bc(){if(ba)return ba;var e,t=ps,n=t.length,r,o="value"in cn?cn.value:cn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return ba=o.slice(e,1<r?1-r:void 0)}function ka(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function la(){return!0}function yd(){return!1}function ut(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?la:yd,this.isPropagationStopped=yd,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ms=ut(Tr),To=ve({},Tr,{view:0,detail:0}),hh=ut(To),Qi,Ji,Jr,ti=ve({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Qi=e.screenX-Jr.screenX,Ji=e.screenY-Jr.screenY):Ji=Qi=0,Jr=e),Qi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),wd=ut(ti),gh=ve({},ti,{dataTransfer:0}),vh=ut(gh),yh=ve({},To,{relatedTarget:0}),Ki=ut(yh),wh=ve({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),xh=ut(wh),bh=ve({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kh=ut(bh),Sh=ve({},Tr,{data:0}),xd=ut(Sh),Eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _h(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nh[e])?!!t[e]:!1}function hs(){return _h}var Ph=ve({},To,{key:function(e){if(e.key){var t=Eh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ka(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ch[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hs,charCode:function(e){return e.type==="keypress"?ka(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ka(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lh=ut(Ph),Dh=ve({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=ut(Dh),Th=ve({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hs}),zh=ut(Th),Oh=ve({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=ut(Oh),Rh=ve({},ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mh=ut(Rh),Ih=[9,13,27,32],gs=Kt&&"CompositionEvent"in window,ao=null;Kt&&"documentMode"in document&&(ao=document.documentMode);var Ah=Kt&&"TextEvent"in window&&!ao,Wc=Kt&&(!gs||ao&&8<ao&&11>=ao),kd=" ",Sd=!1;function Vc(e,t){switch(e){case"keyup":return Ih.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function jh(e,t){switch(e){case"compositionend":return Yc(t);case"keypress":return t.which!==32?null:(Sd=!0,kd);case"textInput":return e=t.data,e===kd&&Sd?null:e;default:return null}}function $h(e,t){if(sr)return e==="compositionend"||!gs&&Vc(e,t)?(e=Bc(),ba=ps=cn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wc&&t.locale!=="ko"?null:t.data;default:return null}}var Uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uh[e.type]:t==="textarea"}function Qc(e,t,n,r){Ec(r),t=Ia(t,"onChange"),0<t.length&&(n=new ms("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var io=null,wo=null;function Hh(e){of(e,0)}function ni(e){var t=cr(e);if(vc(t))return e}function Bh(e,t){if(e==="change")return t}var Jc=!1;Kt&&(Kt?(ua="oninput"in document,ua||(Gi=document.createElement("div"),Gi.setAttribute("oninput","return;"),ua=typeof Gi.oninput=="function"),sa=ua):sa=!1,Jc=sa&&(!document.documentMode||9<document.documentMode));var sa,ua,Gi;function Cd(){io&&(io.detachEvent("onpropertychange",Kc),wo=io=null)}function Kc(e){if(e.propertyName==="value"&&ni(wo)){var t=[];Qc(t,wo,e,ss(e)),Pc(Hh,t)}}function Wh(e,t,n){e==="focusin"?(Cd(),io=t,wo=n,io.attachEvent("onpropertychange",Kc)):e==="focusout"&&Cd()}function Vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ni(wo)}function Yh(e,t){if(e==="click")return ni(t)}function Qh(e,t){if(e==="input"||e==="change")return ni(t)}function Jh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Jh;function xo(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!dl.call(t,o)||!Tt(e[o],t[o]))return!1}return!0}function Nd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _d(e,t){var n=Nd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nd(n)}}function Gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xc(){for(var e=window,t=Da();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Da(e.document)}return t}function vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kh(e){var t=Xc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gc(n.ownerDocument.documentElement,n)){if(r!==null&&vs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=_d(n,a);var i=_d(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gh=Kt&&"documentMode"in document&&11>=document.documentMode,ur=null,Ll=null,lo=null,Dl=!1;function Pd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||ur==null||ur!==Da(r)||(r=ur,"selectionStart"in r&&vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&xo(lo,r)||(lo=r,r=Ia(Ll,"onSelect"),0<r.length&&(t=new ms("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dr={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},Xi={},Zc={};Kt&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function ri(e){if(Xi[e])return Xi[e];if(!dr[e])return e;var t=dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zc)return Xi[e]=t[n];return e}var qc=ri("animationend"),ef=ri("animationiteration"),tf=ri("animationstart"),nf=ri("transitionend"),rf=new Map,Ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){rf.set(e,t),Yn(t,[e])}for(ca=0;ca<Ld.length;ca++)fa=Ld[ca],Dd=fa.toLowerCase(),Td=fa[0].toUpperCase()+fa.slice(1),Sn(Dd,"on"+Td);var fa,Dd,Td,ca;Sn(qc,"onAnimationEnd");Sn(ef,"onAnimationIteration");Sn(tf,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(nf,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xh=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function zd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xm(r,t,void 0,e),e.currentTarget=null}function of(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;zd(o,l,u),a=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;zd(o,l,u),a=s}}}if(za)throw e=Cl,za=!1,Cl=null,e}function de(e,t){var n=t[Rl];n===void 0&&(n=t[Rl]=new Set);var r=e+"__bubble";n.has(r)||(af(t,e,2,!1),n.add(r))}function Zi(e,t,n){var r=0;t&&(r|=4),af(n,e,r,t)}var pa="_reactListening"+Math.random().toString(36).slice(2);function bo(e){if(!e[pa]){e[pa]=!0,fc.forEach(function(n){n!=="selectionchange"&&(Xh.has(n)||Zi(n,!1,e),Zi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pa]||(t[pa]=!0,Zi("selectionchange",!1,t))}}function af(e,t,n,r){switch(Hc(t)){case 1:var o=ph;break;case 4:o=mh;break;default:o=fs}n=o.bind(null,t,n,e),o=void 0,!El||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function qi(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;l!==null;){if(i=Mn(l),i===null)return;if(s=i.tag,s===5||s===6){r=a=i;continue e}l=l.parentNode}}r=r.return}Pc(function(){var u=a,p=ss(n),c=[];e:{var m=rf.get(e);if(m!==void 0){var y=ms,g=e;switch(e){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":y=Lh;break;case"focusin":g="focus",y=Ki;break;case"focusout":g="blur",y=Ki;break;case"beforeblur":case"afterblur":y=Ki;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=vh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=zh;break;case qc:case ef:case tf:y=xh;break;case nf:y=Fh;break;case"scroll":y=hh;break;case"wheel":y=Mh;break;case"copy":case"cut":case"paste":y=kh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=bd}var v=(t&4)!==0,w=!v&&e==="scroll",f=v?m!==null?m+"Capture":null:m;v=[];for(var d=u,h;d!==null;){h=d;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,f!==null&&(k=ho(d,f),k!=null&&v.push(ko(d,k,h)))),w)break;d=d.return}0<v.length&&(m=new y(m,g,null,n,p),c.push({event:m,listeners:v}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==kl&&(g=n.relatedTarget||n.fromElement)&&(Mn(g)||g[Gt]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?Mn(g):null,g!==null&&(w=Qn(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(v=wd,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=bd,k="onPointerLeave",f="onPointerEnter",d="pointer"),w=y==null?m:cr(y),h=g==null?m:cr(g),m=new v(k,d+"leave",y,n,p),m.target=w,m.relatedTarget=h,k=null,Mn(p)===u&&(v=new v(f,d+"enter",g,n,p),v.target=h,v.relatedTarget=w,k=v),w=k,y&&g)t:{for(v=y,f=g,d=0,h=v;h;h=ar(h))d++;for(h=0,k=f;k;k=ar(k))h++;for(;0<d-h;)v=ar(v),d--;for(;0<h-d;)f=ar(f),h--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=ar(v),f=ar(f)}v=null}else v=null;y!==null&&Od(c,m,y,v,!1),g!==null&&w!==null&&Od(c,w,g,v,!0)}}e:{if(m=u?cr(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var b=Bh;else if(Ed(m))if(Jc)b=Qh;else{b=Vh;var E=Wh}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=Yh);if(b&&(b=b(e,u))){Qc(c,b,n,p);break e}E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&vl(m,"number",m.value)}switch(E=u?cr(u):window,e){case"focusin":(Ed(E)||E.contentEditable==="true")&&(ur=E,Ll=u,lo=null);break;case"focusout":lo=Ll=ur=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,Pd(c,n,p);break;case"selectionchange":if(Gh)break;case"keydown":case"keyup":Pd(c,n,p)}var S;if(gs)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else sr?Vc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Wc&&n.locale!=="ko"&&(sr||z!=="onCompositionStart"?z==="onCompositionEnd"&&sr&&(S=Bc()):(cn=p,ps="value"in cn?cn.value:cn.textContent,sr=!0)),E=Ia(u,z),0<E.length&&(z=new xd(z,e,null,n,p),c.push({event:z,listeners:E}),S?z.data=S:(S=Yc(n),S!==null&&(z.data=S)))),(S=Ah?jh(e,n):$h(e,n))&&(u=Ia(u,"onBeforeInput"),0<u.length&&(p=new xd("onBeforeInput","beforeinput",null,n,p),c.push({event:p,listeners:u}),p.data=S))}of(c,t)})}function ko(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ia(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=ho(e,n),a!=null&&r.unshift(ko(e,a,o)),a=ho(e,t),a!=null&&r.push(ko(e,a,o))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Od(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=ho(n,a),s!=null&&i.unshift(ko(n,s,l))):o||(s=ho(n,a),s!=null&&i.push(ko(n,s,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Zh=/\r\n?/g,qh=/\u0000|\uFFFD/g;function Fd(e){return(typeof e=="string"?e:""+e).replace(Zh,`
`).replace(qh,"")}function ma(e,t,n){if(t=Fd(t),Fd(e)!==t&&n)throw Error(T(425))}function Aa(){}var Tl=null,zl=null;function Ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fl=typeof setTimeout=="function"?setTimeout:void 0,eg=typeof clearTimeout=="function"?clearTimeout:void 0,Rd=typeof Promise=="function"?Promise:void 0,tg=typeof queueMicrotask=="function"?queueMicrotask:typeof Rd<"u"?function(e){return Rd.resolve(null).then(e).catch(ng)}:Fl;function ng(e){setTimeout(function(){throw e})}function el(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),yo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);yo(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Md(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),It="__reactFiber$"+zr,So="__reactProps$"+zr,Gt="__reactContainer$"+zr,Rl="__reactEvents$"+zr,rg="__reactListeners$"+zr,og="__reactHandles$"+zr;function Mn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Md(e);e!==null;){if(n=e[It])return n;e=Md(e)}return t}e=n,n=e.parentNode}return null}function zo(e){return e=e[It]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function oi(e){return e[So]||null}var Ml=[],fr=-1;function En(e){return{current:e}}function ce(e){0>fr||(e.current=Ml[fr],Ml[fr]=null,fr--)}function se(e,t){fr++,Ml[fr]=e.current,e.current=t}var kn={},$e=En(kn),qe=En(!1),Un=kn;function Cr(e,t){var n=e.type.contextTypes;if(!n)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function et(e){return e=e.childContextTypes,e!=null}function ja(){ce(qe),ce($e)}function Id(e,t,n){if($e.current!==kn)throw Error(T(168));se($e,t),se(qe,n)}function lf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,Wm(e)||"Unknown",o));return ve({},n,r)}function $a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Un=$e.current,se($e,e),se(qe,qe.current),!0}function Ad(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=lf(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,ce(qe),ce($e),se($e,e)):ce(qe),se(qe,n)}var Vt=null,ai=!1,tl=!1;function sf(e){Vt===null?Vt=[e]:Vt.push(e)}function ag(e){ai=!0,sf(e)}function Cn(){if(!tl&&Vt!==null){tl=!0;var e=0,t=ie;try{var n=Vt;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,ai=!1}catch(o){throw Vt!==null&&(Vt=Vt.slice(e+1)),zc(us,Cn),o}finally{ie=t,tl=!1}}return null}var pr=[],mr=0,Ua=null,Ha=0,ht=[],gt=0,Hn=null,Yt=1,Qt="";function Fn(e,t){pr[mr++]=Ha,pr[mr++]=Ua,Ua=e,Ha=t}function uf(e,t,n){ht[gt++]=Yt,ht[gt++]=Qt,ht[gt++]=Hn,Hn=e;var r=Yt;e=Qt;var o=32-Lt(r)-1;r&=~(1<<o),n+=1;var a=32-Lt(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Yt=1<<32-Lt(t)+o|n<<o|r,Qt=a+e}else Yt=1<<a|n<<o|r,Qt=e}function ys(e){e.return!==null&&(Fn(e,1),uf(e,1,0))}function ws(e){for(;e===Ua;)Ua=pr[--mr],pr[mr]=null,Ha=pr[--mr],pr[mr]=null;for(;e===Hn;)Hn=ht[--gt],ht[gt]=null,Qt=ht[--gt],ht[gt]=null,Yt=ht[--gt],ht[gt]=null}var lt=null,it=null,pe=!1,Pt=null;function df(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function jd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lt=e,it=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lt=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hn!==null?{id:Yt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lt=e,it=null,!0):!1;default:return!1}}function Il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Al(e){if(pe){var t=it;if(t){var n=t;if(!jd(e,t)){if(Il(e))throw Error(T(418));t=gn(n.nextSibling);var r=lt;t&&jd(e,t)?df(r,n):(e.flags=e.flags&-4097|2,pe=!1,lt=e)}}else{if(Il(e))throw Error(T(418));e.flags=e.flags&-4097|2,pe=!1,lt=e}}}function $d(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function ha(e){if(e!==lt)return!1;if(!pe)return $d(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ol(e.type,e.memoizedProps)),t&&(t=it)){if(Il(e))throw cf(),Error(T(418));for(;t;)df(e,t),t=gn(t.nextSibling)}if($d(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=lt?gn(e.stateNode.nextSibling):null;return!0}function cf(){for(var e=it;e;)e=gn(e.nextSibling)}function Nr(){it=lt=null,pe=!1}function xs(e){Pt===null?Pt=[e]:Pt.push(e)}var ig=qt.ReactCurrentBatchConfig;function Kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var l=o.refs;i===null?delete l[a]:l[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function ga(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ud(e){var t=e._init;return t(e._payload)}function ff(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=xn(f,d),f.index=0,f.sibling=null,f}function a(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,h,k){return d===null||d.tag!==6?(d=sl(h,f.mode,k),d.return=f,d):(d=o(d,h),d.return=f,d)}function s(f,d,h,k){var b=h.type;return b===lr?p(f,d,h.props.children,k,h.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ln&&Ud(b)===d.type)?(k=o(d,h.props),k.ref=Kr(f,d,h),k.return=f,k):(k=La(h.type,h.key,h.props,null,f.mode,k),k.ref=Kr(f,d,h),k.return=f,k)}function u(f,d,h,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=ul(h,f.mode,k),d.return=f,d):(d=o(d,h.children||[]),d.return=f,d)}function p(f,d,h,k,b){return d===null||d.tag!==7?(d=$n(h,f.mode,k,b),d.return=f,d):(d=o(d,h),d.return=f,d)}function c(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=sl(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ta:return h=La(d.type,d.key,d.props,null,f.mode,h),h.ref=Kr(f,null,d),h.return=f,h;case ir:return d=ul(d,f.mode,h),d.return=f,d;case ln:var k=d._init;return c(f,k(d._payload),h)}if(eo(d)||Vr(d))return d=$n(d,f.mode,h,null),d.return=f,d;ga(f,d)}return null}function m(f,d,h,k){var b=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:l(f,d,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ta:return h.key===b?s(f,d,h,k):null;case ir:return h.key===b?u(f,d,h,k):null;case ln:return b=h._init,m(f,d,b(h._payload),k)}if(eo(h)||Vr(h))return b!==null?null:p(f,d,h,k,null);ga(f,h)}return null}function y(f,d,h,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(h)||null,l(d,f,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ta:return f=f.get(k.key===null?h:k.key)||null,s(d,f,k,b);case ir:return f=f.get(k.key===null?h:k.key)||null,u(d,f,k,b);case ln:var E=k._init;return y(f,d,h,E(k._payload),b)}if(eo(k)||Vr(k))return f=f.get(h)||null,p(d,f,k,b,null);ga(d,k)}return null}function g(f,d,h,k){for(var b=null,E=null,S=d,z=d=0,H=null;S!==null&&z<h.length;z++){S.index>z?(H=S,S=null):H=S.sibling;var P=m(f,S,h[z],k);if(P===null){S===null&&(S=H);break}e&&S&&P.alternate===null&&t(f,S),d=a(P,d,z),E===null?b=P:E.sibling=P,E=P,S=H}if(z===h.length)return n(f,S),pe&&Fn(f,z),b;if(S===null){for(;z<h.length;z++)S=c(f,h[z],k),S!==null&&(d=a(S,d,z),E===null?b=S:E.sibling=S,E=S);return pe&&Fn(f,z),b}for(S=r(f,S);z<h.length;z++)H=y(S,f,z,h[z],k),H!==null&&(e&&H.alternate!==null&&S.delete(H.key===null?z:H.key),d=a(H,d,z),E===null?b=H:E.sibling=H,E=H);return e&&S.forEach(function(V){return t(f,V)}),pe&&Fn(f,z),b}function v(f,d,h,k){var b=Vr(h);if(typeof b!="function")throw Error(T(150));if(h=b.call(h),h==null)throw Error(T(151));for(var E=b=null,S=d,z=d=0,H=null,P=h.next();S!==null&&!P.done;z++,P=h.next()){S.index>z?(H=S,S=null):H=S.sibling;var V=m(f,S,P.value,k);if(V===null){S===null&&(S=H);break}e&&S&&V.alternate===null&&t(f,S),d=a(V,d,z),E===null?b=V:E.sibling=V,E=V,S=H}if(P.done)return n(f,S),pe&&Fn(f,z),b;if(S===null){for(;!P.done;z++,P=h.next())P=c(f,P.value,k),P!==null&&(d=a(P,d,z),E===null?b=P:E.sibling=P,E=P);return pe&&Fn(f,z),b}for(S=r(f,S);!P.done;z++,P=h.next())P=y(S,f,z,P.value,k),P!==null&&(e&&P.alternate!==null&&S.delete(P.key===null?z:P.key),d=a(P,d,z),E===null?b=P:E.sibling=P,E=P);return e&&S.forEach(function(I){return t(f,I)}),pe&&Fn(f,z),b}function w(f,d,h,k){if(typeof h=="object"&&h!==null&&h.type===lr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ta:e:{for(var b=h.key,E=d;E!==null;){if(E.key===b){if(b=h.type,b===lr){if(E.tag===7){n(f,E.sibling),d=o(E,h.props.children),d.return=f,f=d;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ln&&Ud(b)===E.type){n(f,E.sibling),d=o(E,h.props),d.ref=Kr(f,E,h),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}h.type===lr?(d=$n(h.props.children,f.mode,k,h.key),d.return=f,f=d):(k=La(h.type,h.key,h.props,null,f.mode,k),k.ref=Kr(f,d,h),k.return=f,f=k)}return i(f);case ir:e:{for(E=h.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=o(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ul(h,f.mode,k),d.return=f,f=d}return i(f);case ln:return E=h._init,w(f,d,E(h._payload),k)}if(eo(h))return g(f,d,h,k);if(Vr(h))return v(f,d,h,k);ga(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,h),d.return=f,f=d):(n(f,d),d=sl(h,f.mode,k),d.return=f,f=d),i(f)):n(f,d)}return w}var _r=ff(!0),pf=ff(!1),Ba=En(null),Wa=null,hr=null,bs=null;function ks(){bs=hr=Wa=null}function Ss(e){var t=Ba.current;ce(Ba),e._currentValue=t}function jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kr(e,t){Wa=e,bs=hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ze=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(bs!==e)if(e={context:e,memoizedValue:t,next:null},hr===null){if(Wa===null)throw Error(T(308));hr=e,Wa.dependencies={lanes:0,firstContext:e}}else hr=hr.next=e;return t}var In=null;function Es(e){In===null?In=[e]:In.push(e)}function mf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Es(t)):(n.next=o.next,o.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function Cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ae&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Xt(e,n)}return o=r.interleaved,o===null?(t.next=t,Es(r)):(t.next=o.next,o.next=t),r.interleaved=t,Xt(e,n)}function Sa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}function Hd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Va(e,t,n,r){var o=e.updateQueue;sn=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?a=u:i.next=u,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==i&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=s))}if(a!==null){var c=o.baseState;i=0,p=u=s=null,l=a;do{var m=l.lane,y=l.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(m=t,y=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){c=g.call(y,c,m);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,m=typeof g=="function"?g.call(y,c,m):g,m==null)break e;c=ve({},c,m);break e;case 2:sn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=y,s=c):p=p.next=y,i|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(s=c),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Wn|=i,e.lanes=i,e.memoizedState=c}}function Bd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var Oo={},jt=En(Oo),Eo=En(Oo),Co=En(Oo);function An(e){if(e===Oo)throw Error(T(174));return e}function Ns(e,t){switch(se(Co,t),se(Eo,e),se(jt,Oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wl(t,e)}ce(jt),se(jt,t)}function Pr(){ce(jt),ce(Eo),ce(Co)}function gf(e){An(Co.current);var t=An(jt.current),n=wl(t,e.type);t!==n&&(se(Eo,e),se(jt,n))}function _s(e){Eo.current===e&&(ce(jt),ce(Eo))}var he=En(0);function Ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=[];function Ps(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var Ea=qt.ReactCurrentDispatcher,rl=qt.ReactCurrentBatchConfig,Bn=0,ge=null,Ce=null,Le=null,Qa=!1,so=!1,No=0,lg=0;function Ie(){throw Error(T(321))}function Ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function Ds(e,t,n,r,o,a){if(Bn=a,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ea.current=e===null||e.memoizedState===null?cg:fg,e=n(r,o),so){a=0;do{if(so=!1,No=0,25<=a)throw Error(T(301));a+=1,Le=Ce=null,t.updateQueue=null,Ea.current=pg,e=n(r,o)}while(so)}if(Ea.current=Ja,t=Ce!==null&&Ce.next!==null,Bn=0,Le=Ce=ge=null,Qa=!1,t)throw Error(T(300));return e}function Ts(){var e=No!==0;return No=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ge.memoizedState=Le=e:Le=Le.next=e,Le}function xt(){if(Ce===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Le===null?ge.memoizedState:Le.next;if(t!==null)Le=t,Ce=e;else{if(e===null)throw Error(T(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Le===null?ge.memoizedState=Le=e:Le=Le.next=e}return Le}function _o(e,t){return typeof t=="function"?t(e):t}function ol(e){var t=xt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Ce,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=i=null,s=null,u=a;do{var p=u.lane;if((Bn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,i=r):s=s.next=c,ge.lanes|=p,Wn|=p}u=u.next}while(u!==null&&u!==a);s===null?i=r:s.next=l,Tt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,ge.lanes|=a,Wn|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function al(e){var t=xt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Tt(a,t.memoizedState)||(Ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function vf(){}function yf(e,t){var n=ge,r=xt(),o=t(),a=!Tt(r.memoizedState,o);if(a&&(r.memoizedState=o,Ze=!0),r=r.queue,zs(bf.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Po(9,xf.bind(null,n,r,o,t),void 0,null),De===null)throw Error(T(349));(Bn&30)!==0||wf(n,t,o)}return o}function wf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xf(e,t,n,r){t.value=n,t.getSnapshot=r,kf(t)&&Sf(e)}function bf(e,t,n){return n(function(){kf(t)&&Sf(e)})}function kf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Sf(e){var t=Xt(e,1);t!==null&&Dt(t,e,1,-1)}function Wd(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:e},t.queue=e,e=e.dispatch=dg.bind(null,ge,e),[t.memoizedState,e]}function Po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ef(){return xt().memoizedState}function Ca(e,t,n,r){var o=Mt();ge.flags|=e,o.memoizedState=Po(1|t,n,void 0,r===void 0?null:r)}function ii(e,t,n,r){var o=xt();r=r===void 0?null:r;var a=void 0;if(Ce!==null){var i=Ce.memoizedState;if(a=i.destroy,r!==null&&Ls(r,i.deps)){o.memoizedState=Po(t,n,a,r);return}}ge.flags|=e,o.memoizedState=Po(1|t,n,a,r)}function Vd(e,t){return Ca(8390656,8,e,t)}function zs(e,t){return ii(2048,8,e,t)}function Cf(e,t){return ii(4,2,e,t)}function Nf(e,t){return ii(4,4,e,t)}function _f(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pf(e,t,n){return n=n!=null?n.concat([e]):null,ii(4,4,_f.bind(null,t,e),n)}function Os(){}function Lf(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Df(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tf(e,t,n){return(Bn&21)===0?(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n):(Tt(n,t)||(n=Rc(),ge.lanes|=n,Wn|=n,e.baseState=!0),t)}function sg(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=rl.transition;rl.transition={};try{e(!1),t()}finally{ie=n,rl.transition=r}}function zf(){return xt().memoizedState}function ug(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Of(e))Ff(t,n);else if(n=mf(e,t,n,r),n!==null){var o=Ve();Dt(n,e,r,o),Rf(n,t,r)}}function dg(e,t,n){var r=wn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Of(e))Ff(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,Tt(l,i)){var s=t.interleaved;s===null?(o.next=o,Es(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}n=mf(e,t,o,r),n!==null&&(o=Ve(),Dt(n,e,r,o),Rf(n,t,r))}}function Of(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Ff(e,t){so=Qa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rf(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}var Ja={readContext:wt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},cg={readContext:wt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Vd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ca(4194308,4,_f.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ca(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ca(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ug.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:Wd,useDebugValue:Os,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Wd(!1),t=e[0];return e=sg.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,o=Mt();if(pe){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),De===null)throw Error(T(349));(Bn&30)!==0||wf(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Vd(bf.bind(null,r,a,e),[e]),r.flags|=2048,Po(9,xf.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Mt(),t=De.identifierPrefix;if(pe){var n=Qt,r=Yt;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=No++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fg={readContext:wt,useCallback:Lf,useContext:wt,useEffect:zs,useImperativeHandle:Pf,useInsertionEffect:Cf,useLayoutEffect:Nf,useMemo:Df,useReducer:ol,useRef:Ef,useState:function(){return ol(_o)},useDebugValue:Os,useDeferredValue:function(e){var t=xt();return Tf(t,Ce.memoizedState,e)},useTransition:function(){var e=ol(_o)[0],t=xt().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:yf,useId:zf,unstable_isNewReconciler:!1},pg={readContext:wt,useCallback:Lf,useContext:wt,useEffect:zs,useImperativeHandle:Pf,useInsertionEffect:Cf,useLayoutEffect:Nf,useMemo:Df,useReducer:al,useRef:Ef,useState:function(){return al(_o)},useDebugValue:Os,useDeferredValue:function(e){var t=xt();return Ce===null?t.memoizedState=e:Tf(t,Ce.memoizedState,e)},useTransition:function(){var e=al(_o)[0],t=xt().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:yf,useId:zf,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var li={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),o=wn(e),a=Jt(r,o);a.payload=t,n!=null&&(a.callback=n),t=vn(e,a,o),t!==null&&(Dt(t,e,o,r),Sa(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),o=wn(e),a=Jt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=vn(e,a,o),t!==null&&(Dt(t,e,o,r),Sa(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=wn(e),o=Jt(n,r);o.tag=2,t!=null&&(o.callback=t),t=vn(e,o,r),t!==null&&(Dt(t,e,r,n),Sa(t,e,r))}};function Yd(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!xo(n,r)||!xo(o,a):!0}function Mf(e,t,n){var r=!1,o=kn,a=t.contextType;return typeof a=="object"&&a!==null?a=wt(a):(o=et(t)?Un:$e.current,r=t.contextTypes,a=(r=r!=null)?Cr(e,o):kn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Qd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&li.enqueueReplaceState(t,t.state,null)}function Ul(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Cs(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=wt(a):(a=et(t)?Un:$e.current,o.context=Cr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&($l(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&li.enqueueReplaceState(o,o.state,null),Va(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t){try{var n="",r=t;do n+=Bm(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mg=typeof WeakMap=="function"?WeakMap:Map;function If(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ga||(Ga=!0,Zl=r),Hl(e,t)},n}function Af(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Hl(e,t),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Jd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Pg.bind(null,e,t,n),t.then(e,e))}function Kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gd(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,vn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var hg=qt.ReactCurrentOwner,Ze=!1;function We(e,t,n,r){t.child=e===null?pf(t,null,n,r):_r(t,e.child,n,r)}function Xd(e,t,n,r,o){n=n.render;var a=t.ref;return kr(t,o),r=Ds(e,t,n,r,a,o),n=Ts(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Zt(e,t,o)):(pe&&n&&ys(t),t.flags|=1,We(e,t,r,o),t.child)}function Zd(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Us(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,jf(e,t,a,r,o)):(e=La(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(i,r)&&e.ref===t.ref)return Zt(e,t,o)}return t.flags|=1,e=xn(a,r),e.ref=t.ref,e.return=t,t.child=e}function jf(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(xo(a,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,Zt(e,t,o)}return Bl(e,t,n,r,o)}function $f(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(vr,at),at|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(vr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,se(vr,at),at|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,se(vr,at),at|=r;return We(e,t,o,n),t.child}function Uf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bl(e,t,n,r,o){var a=et(n)?Un:$e.current;return a=Cr(t,a),kr(t,o),n=Ds(e,t,n,r,a,o),r=Ts(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Zt(e,t,o)):(pe&&r&&ys(t),t.flags|=1,We(e,t,n,o),t.child)}function qd(e,t,n,r,o){if(et(n)){var a=!0;$a(t)}else a=!1;if(kr(t,o),t.stateNode===null)Na(e,t),Mf(t,n,r),Ul(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=et(n)?Un:$e.current,u=Cr(t,u));var p=n.getDerivedStateFromProps,c=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";c||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Qd(t,i,r,u),sn=!1;var m=t.memoizedState;i.state=m,Va(t,r,i,o),s=t.memoizedState,l!==r||m!==s||qe.current||sn?(typeof p=="function"&&($l(t,n,p,r),s=t.memoizedState),(l=sn||Yd(t,n,l,r,m,s,u))?(c||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,hf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Nt(t.type,l),i.props=u,c=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=wt(s):(s=et(n)?Un:$e.current,s=Cr(t,s));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==c||m!==s)&&Qd(t,i,r,s),sn=!1,m=t.memoizedState,i.state=m,Va(t,r,i,o);var g=t.memoizedState;l!==c||m!==g||qe.current||sn?(typeof y=="function"&&($l(t,n,y,r),g=t.memoizedState),(u=sn||Yd(t,n,u,r,m,g,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,g,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),i.props=r,i.state=g,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Wl(e,t,n,r,a,o)}function Wl(e,t,n,r,o,a){Uf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ad(t,n,!1),Zt(e,t,a);r=t.stateNode,hg.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=_r(t,e.child,null,a),t.child=_r(t,null,l,a)):We(e,t,l,a),t.memoizedState=r.state,o&&Ad(t,n,!0),t.child}function Hf(e){var t=e.stateNode;t.pendingContext?Id(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Id(e,t.context,!1),Ns(e,t.containerInfo)}function ec(e,t,n,r,o){return Nr(),xs(o),t.flags|=256,We(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bf(e,t,n){var r=t.pendingProps,o=he.current,a=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),se(he,o&1),e===null)return Al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=di(i,r,0,null),e=$n(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Yl(n),t.memoizedState=Vl,e):Fs(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return gg(e,t,i,r,l,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=xn(l,a):(a=$n(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Yl(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Vl,r}return a=e.child,e=a.sibling,r=xn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fs(e,t){return t=di({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function va(e,t,n,r){return r!==null&&xs(r),_r(t,e.child,null,n),e=Fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gg(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=il(Error(T(422))),va(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=di({mode:"visible",children:r.children},o,0,null),a=$n(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&_r(t,e.child,null,i),t.child.memoizedState=Yl(i),t.memoizedState=Vl,a);if((t.mode&1)===0)return va(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(T(419)),r=il(a,r,void 0),va(e,t,i,r)}if(l=(i&e.childLanes)!==0,Ze||l){if(r=De,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Xt(e,o),Dt(r,e,o,-1))}return $s(),r=il(Error(T(421))),va(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Lg.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,it=gn(o.nextSibling),lt=t,pe=!0,Pt=null,e!==null&&(ht[gt++]=Yt,ht[gt++]=Qt,ht[gt++]=Hn,Yt=e.id,Qt=e.overflow,Hn=t),t=Fs(t,r.children),t.flags|=4096,t)}function tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jl(e.return,t,n)}function ll(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Wf(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(We(e,t,r.children,n),r=he.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tc(e,n,t);else if(e.tag===19)tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(he,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ya(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ll(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ya(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ll(t,!0,n,null,a);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Na(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vg(e,t,n){switch(t.tag){case 3:Hf(t),Nr();break;case 5:gf(t);break;case 1:et(t.type)&&$a(t);break;case 4:Ns(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;se(Ba,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(he,he.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Bf(e,t,n):(se(he,he.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);se(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Wf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),se(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,$f(e,t,n)}return Zt(e,t,n)}var Vf,Ql,Yf,Qf;Vf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ql=function(){};Yf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,An(jt.current);var a=null;switch(n){case"input":o=hl(e,o),r=hl(e,r),a=[];break;case"select":o=ve({},o,{value:void 0}),r=ve({},r,{value:void 0}),a=[];break;case"textarea":o=yl(e,o),r=yl(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Aa)}xl(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(po.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=o?.[u],r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(po.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&de("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Qf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yg(e,t,n){var r=t.pendingProps;switch(ws(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return et(t.type)&&ja(),Ae(t),null;case 3:return r=t.stateNode,Pr(),ce(qe),ce($e),Ps(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ha(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pt!==null&&(ts(Pt),Pt=null))),Ql(e,t),Ae(t),null;case 5:_s(t);var o=An(Co.current);if(n=t.type,e!==null&&t.stateNode!=null)Yf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Ae(t),null}if(e=An(jt.current),ha(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[It]=t,r[So]=a,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(o=0;o<no.length;o++)de(no[o],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":ud(r,a),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},de("invalid",r);break;case"textarea":cd(r,a),de("invalid",r)}xl(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ma(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ma(r.textContent,l,e),o=["children",""+l]):po.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&de("scroll",r)}switch(n){case"input":na(r),dd(r,a,!0);break;case"textarea":na(r),fd(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Aa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[It]=t,e[So]=r,Vf(e,t,!1,!1),t.stateNode=e;e:{switch(i=bl(n,r),n){case"dialog":de("cancel",e),de("close",e),o=r;break;case"iframe":case"object":case"embed":de("load",e),o=r;break;case"video":case"audio":for(o=0;o<no.length;o++)de(no[o],e);o=r;break;case"source":de("error",e),o=r;break;case"img":case"image":case"link":de("error",e),de("load",e),o=r;break;case"details":de("toggle",e),o=r;break;case"input":ud(e,r),o=hl(e,r),de("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ve({},r,{value:void 0}),de("invalid",e);break;case"textarea":cd(e,r),o=yl(e,r),de("invalid",e);break;default:o=r}xl(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Sc(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&bc(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&mo(e,s):typeof s=="number"&&mo(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(po.hasOwnProperty(a)?s!=null&&a==="onScroll"&&de("scroll",e):s!=null&&os(e,a,s,i))}switch(n){case"input":na(e),dd(e,r,!1);break;case"textarea":na(e),fd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?yr(e,!!r.multiple,a,!1):r.defaultValue!=null&&yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Aa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Qf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=An(Co.current),An(jt.current),ha(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(a=r.nodeValue!==n)&&(e=lt,e!==null))switch(e.tag){case 3:ma(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ma(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Ae(t),null;case 13:if(ce(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&it!==null&&(t.mode&1)!==0&&(t.flags&128)===0)cf(),Nr(),t.flags|=98560,a=!1;else if(a=ha(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(T(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(T(317));a[It]=t}else Nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),a=!1}else Pt!==null&&(ts(Pt),Pt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(he.current&1)!==0?Ne===0&&(Ne=3):$s())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return Pr(),Ql(e,t),e===null&&bo(t.stateNode.containerInfo),Ae(t),null;case 10:return Ss(t.type._context),Ae(t),null;case 17:return et(t.type)&&ja(),Ae(t),null;case 19:if(ce(he),a=t.memoizedState,a===null)return Ae(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Gr(a,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ya(e),i!==null){for(t.flags|=128,Gr(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(he,he.current&1|2),t.child}e=e.sibling}a.tail!==null&&be()>Dr&&(t.flags|=128,r=!0,Gr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ya(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!pe)return Ae(t),null}else 2*be()-a.renderingStartTime>Dr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=be(),t.sibling=null,n=he.current,se(he,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return js(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(at&1073741824)!==0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function wg(e,t){switch(ws(t),t.tag){case 1:return et(t.type)&&ja(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pr(),ce(qe),ce($e),Ps(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return _s(t),null;case 13:if(ce(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(he),null;case 4:return Pr(),null;case 10:return Ss(t.type._context),null;case 22:case 23:return js(),null;case 24:return null;default:return null}}var ya=!1,je=!1,xg=typeof WeakSet=="function"?WeakSet:Set,R=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function Jl(e,t,n){try{n()}catch(r){ye(e,t,r)}}var nc=!1;function bg(e,t){if(Tl=Ra,e=Xc(),vs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,l=-1,s=-1,u=0,p=0,c=e,m=null;t:for(;;){for(var y;c!==n||o!==0&&c.nodeType!==3||(l=i+o),c!==a||r!==0&&c.nodeType!==3||(s=i+r),c.nodeType===3&&(i+=c.nodeValue.length),(y=c.firstChild)!==null;)m=c,c=y;for(;;){if(c===e)break t;if(m===n&&++u===o&&(l=i),m===a&&++p===r&&(s=i),(y=c.nextSibling)!==null)break;c=m,m=c.parentNode}c=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(zl={focusedElem:e,selectionRange:n},Ra=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Nt(t.type,v),w);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(k){ye(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return g=nc,nc=!1,g}function uo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Jl(t,n,a)}o=o.next}while(o!==r)}}function si(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Jf(e){var t=e.alternate;t!==null&&(e.alternate=null,Jf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[So],delete t[Rl],delete t[rg],delete t[og])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kf(e){return e.tag===5||e.tag===3||e.tag===4}function rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Aa));else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}var ze=null,_t=!1;function an(e,t,n){for(n=n.child;n!==null;)Gf(e,t,n),n=n.sibling}function Gf(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(ei,n)}catch{}switch(n.tag){case 5:je||gr(n,t);case 6:var r=ze,o=_t;ze=null,an(e,t,n),ze=r,_t=o,ze!==null&&(_t?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(_t?(e=ze,n=n.stateNode,e.nodeType===8?el(e.parentNode,n):e.nodeType===1&&el(e,n),yo(e)):el(ze,n.stateNode));break;case 4:r=ze,o=_t,ze=n.stateNode.containerInfo,_t=!0,an(e,t,n),ze=r,_t=o;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Jl(n,t,i),o=o.next}while(o!==r)}an(e,t,n);break;case 1:if(!je&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,t,l)}an(e,t,n);break;case 21:an(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,an(e,t,n),je=r):an(e,t,n);break;default:an(e,t,n)}}function oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xg),t.forEach(function(r){var o=Dg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,_t=!1;break e;case 3:ze=l.stateNode.containerInfo,_t=!0;break e;case 4:ze=l.stateNode.containerInfo,_t=!0;break e}l=l.return}if(ze===null)throw Error(T(160));Gf(a,i,o),ze=null,_t=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ye(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xf(t,e),t=t.sibling}function Xf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Rt(e),r&4){try{uo(3,e,e.return),si(3,e)}catch(v){ye(e,e.return,v)}try{uo(5,e,e.return)}catch(v){ye(e,e.return,v)}}break;case 1:Ct(t,e),Rt(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(Ct(t,e),Rt(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var o=e.stateNode;try{mo(o,"")}catch(v){ye(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&yc(o,a),bl(l,i);var u=bl(l,a);for(i=0;i<s.length;i+=2){var p=s[i],c=s[i+1];p==="style"?Sc(o,c):p==="dangerouslySetInnerHTML"?bc(o,c):p==="children"?mo(o,c):os(o,p,c,u)}switch(l){case"input":gl(o,a);break;case"textarea":wc(o,a);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?yr(o,!!a.multiple,y,!1):m!==!!a.multiple&&(a.defaultValue!=null?yr(o,!!a.multiple,a.defaultValue,!0):yr(o,!!a.multiple,a.multiple?[]:"",!1))}o[So]=a}catch(v){ye(e,e.return,v)}}break;case 6:if(Ct(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(v){ye(e,e.return,v)}}break;case 3:if(Ct(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(t.containerInfo)}catch(v){ye(e,e.return,v)}break;case 4:Ct(t,e),Rt(e);break;case 13:Ct(t,e),Rt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Is=be())),r&4&&oc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||p,Ct(t,e),je=u):Ct(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&(e.mode&1)!==0)for(R=e,p=e.child;p!==null;){for(c=R=p;R!==null;){switch(m=R,y=m.child,m.tag){case 0:case 11:case 14:case 15:uo(4,m,m.return);break;case 1:gr(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){ye(r,n,v)}}break;case 5:gr(m,m.return);break;case 22:if(m.memoizedState!==null){ic(c);continue}}y!==null?(y.return=m,R=y):ic(c)}p=p.sibling}e:for(p=null,c=e;;){if(c.tag===5){if(p===null){p=c;try{o=c.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=c.stateNode,s=c.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=kc("display",i))}catch(v){ye(e,e.return,v)}}}else if(c.tag===6){if(p===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){ye(e,e.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;p===c&&(p=null),c=c.return}p===c&&(p=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ct(t,e),Rt(e),r&4&&oc(e);break;case 21:break;default:Ct(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kf(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(mo(o,""),r.flags&=-33);var a=rc(e);Xl(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=rc(e);Gl(e,l,i);break;default:throw Error(T(161))}}catch(s){ye(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kg(e,t,n){R=e,Zf(e,t,n)}function Zf(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||ya;if(!i){var l=o.alternate,s=l!==null&&l.memoizedState!==null||je;l=ya;var u=je;if(ya=i,(je=s)&&!u)for(R=o;R!==null;)i=R,s=i.child,i.tag===22&&i.memoizedState!==null?lc(o):s!==null?(s.return=i,R=s):lc(o);for(;a!==null;)R=a,Zf(a,t,n),a=a.sibling;R=o,ya=l,je=u}ac(e,t,n)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,R=a):ac(e,t,n)}}function ac(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:je||si(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Bd(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bd(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var c=p.dehydrated;c!==null&&yo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}je||t.flags&512&&Kl(t)}catch(m){ye(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function ic(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function lc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{si(4,t)}catch(s){ye(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ye(t,o,s)}}var a=t.return;try{Kl(t)}catch(s){ye(t,a,s)}break;case 5:var i=t.return;try{Kl(t)}catch(s){ye(t,i,s)}}}catch(s){ye(t,t.return,s)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var Sg=Math.ceil,Ka=qt.ReactCurrentDispatcher,Rs=qt.ReactCurrentOwner,yt=qt.ReactCurrentBatchConfig,ae=0,De=null,Ee=null,Oe=0,at=0,vr=En(0),Ne=0,Lo=null,Wn=0,ui=0,Ms=0,co=null,Xe=null,Is=0,Dr=1/0,Wt=null,Ga=!1,Zl=null,yn=null,wa=!1,fn=null,Xa=0,fo=0,ql=null,_a=-1,Pa=0;function Ve(){return(ae&6)!==0?be():_a!==-1?_a:_a=be()}function wn(e){return(e.mode&1)===0?1:(ae&2)!==0&&Oe!==0?Oe&-Oe:ig.transition!==null?(Pa===0&&(Pa=Rc()),Pa):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Hc(e.type)),e)}function Dt(e,t,n,r){if(50<fo)throw fo=0,ql=null,Error(T(185));Do(e,n,r),((ae&2)===0||e!==De)&&(e===De&&((ae&2)===0&&(ui|=n),Ne===4&&dn(e,Oe)),tt(e,r),n===1&&ae===0&&(t.mode&1)===0&&(Dr=be()+500,ai&&Cn()))}function tt(e,t){var n=e.callbackNode;sh(e,t);var r=Fa(e,e===De?Oe:0);if(r===0)n!==null&&hd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hd(n),t===1)e.tag===0?ag(sc.bind(null,e)):sf(sc.bind(null,e)),tg(function(){(ae&6)===0&&Cn()}),n=null;else{switch(Mc(r)){case 1:n=us;break;case 4:n=Oc;break;case 16:n=Oa;break;case 536870912:n=Fc;break;default:n=Oa}n=ip(n,qf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qf(e,t){if(_a=-1,Pa=0,(ae&6)!==0)throw Error(T(327));var n=e.callbackNode;if(Sr()&&e.callbackNode!==n)return null;var r=Fa(e,e===De?Oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Za(e,r);else{t=r;var o=ae;ae|=2;var a=tp();(De!==e||Oe!==t)&&(Wt=null,Dr=be()+500,jn(e,t));do try{Ng();break}catch(l){ep(e,l)}while(!0);ks(),Ka.current=a,ae=o,Ee!==null?t=0:(De=null,Oe=0,t=Ne)}if(t!==0){if(t===2&&(o=Nl(e),o!==0&&(r=o,t=es(e,o))),t===1)throw n=Lo,jn(e,0),dn(e,r),tt(e,be()),n;if(t===6)dn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Eg(o)&&(t=Za(e,r),t===2&&(a=Nl(e),a!==0&&(r=a,t=es(e,a))),t===1))throw n=Lo,jn(e,0),dn(e,r),tt(e,be()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:Rn(e,Xe,Wt);break;case 3:if(dn(e,r),(r&130023424)===r&&(t=Is+500-be(),10<t)){if(Fa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Fl(Rn.bind(null,e,Xe,Wt),t);break}Rn(e,Xe,Wt);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Lt(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sg(r/1960))-r,10<r){e.timeoutHandle=Fl(Rn.bind(null,e,Xe,Wt),r);break}Rn(e,Xe,Wt);break;case 5:Rn(e,Xe,Wt);break;default:throw Error(T(329))}}}return tt(e,be()),e.callbackNode===n?qf.bind(null,e):null}function es(e,t){var n=co;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=Za(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&ts(t)),e}function ts(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function Eg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Tt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dn(e,t){for(t&=~Ms,t&=~ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if((ae&6)!==0)throw Error(T(327));Sr();var t=Fa(e,0);if((t&1)===0)return tt(e,be()),null;var n=Za(e,t);if(e.tag!==0&&n===2){var r=Nl(e);r!==0&&(t=r,n=es(e,r))}if(n===1)throw n=Lo,jn(e,0),dn(e,t),tt(e,be()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rn(e,Xe,Wt),tt(e,be()),null}function As(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(Dr=be()+500,ai&&Cn())}}function Vn(e){fn!==null&&fn.tag===0&&(ae&6)===0&&Sr();var t=ae;ae|=1;var n=yt.transition,r=ie;try{if(yt.transition=null,ie=1,e)return e()}finally{ie=r,yt.transition=n,ae=t,(ae&6)===0&&Cn()}}function js(){at=vr.current,ce(vr)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,eg(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(ws(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ja();break;case 3:Pr(),ce(qe),ce($e),Ps();break;case 5:_s(r);break;case 4:Pr();break;case 13:ce(he);break;case 19:ce(he);break;case 10:Ss(r.type._context);break;case 22:case 23:js()}n=n.return}if(De=e,Ee=e=xn(e.current,null),Oe=at=t,Ne=0,Lo=null,Ms=ui=Wn=0,Xe=co=null,In!==null){for(t=0;t<In.length;t++)if(n=In[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}In=null}return e}function ep(e,t){do{var n=Ee;try{if(ks(),Ea.current=Ja,Qa){for(var r=ge.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Qa=!1}if(Bn=0,Le=Ce=ge=null,so=!1,No=0,Rs.current=null,n===null||n.return===null){Ne=1,Lo=t,Ee=null;break}e:{var a=e,i=n.return,l=n,s=t;if(t=Oe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=l,c=p.tag;if((p.mode&1)===0&&(c===0||c===11||c===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Kd(i);if(y!==null){y.flags&=-257,Gd(y,i,l,a,t),y.mode&1&&Jd(a,u,t),t=y,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if((t&1)===0){Jd(a,u,t),$s();break e}s=Error(T(426))}}else if(pe&&l.mode&1){var w=Kd(i);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),Gd(w,i,l,a,t),xs(Lr(s,l));break e}}a=s=Lr(s,l),Ne!==4&&(Ne=2),co===null?co=[a]:co.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=If(a,s,t);Hd(a,f);break e;case 1:l=s;var d=a.type,h=a.stateNode;if((a.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(yn===null||!yn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=Af(a,l,t);Hd(a,k);break e}}a=a.return}while(a!==null)}rp(n)}catch(b){t=b,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function tp(){var e=Ka.current;return Ka.current=Ja,e===null?Ja:e}function $s(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),De===null||(Wn&268435455)===0&&(ui&268435455)===0||dn(De,Oe)}function Za(e,t){var n=ae;ae|=2;var r=tp();(De!==e||Oe!==t)&&(Wt=null,jn(e,t));do try{Cg();break}catch(o){ep(e,o)}while(!0);if(ks(),ae=n,Ka.current=r,Ee!==null)throw Error(T(261));return De=null,Oe=0,Ne}function Cg(){for(;Ee!==null;)np(Ee)}function Ng(){for(;Ee!==null&&!qm();)np(Ee)}function np(e){var t=ap(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?rp(e):Ee=t,Rs.current=null}function rp(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=yg(n,t,at),n!==null){Ee=n;return}}else{if(n=wg(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Ee=null;return}}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Ne===0&&(Ne=5)}function Rn(e,t,n){var r=ie,o=yt.transition;try{yt.transition=null,ie=1,_g(e,t,n,r)}finally{yt.transition=o,ie=r}return null}function _g(e,t,n,r){do Sr();while(fn!==null);if((ae&6)!==0)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(uh(e,a),e===De&&(Ee=De=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||wa||(wa=!0,ip(Oa,function(){return Sr(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=yt.transition,yt.transition=null;var i=ie;ie=1;var l=ae;ae|=4,Rs.current=null,bg(e,n),Xf(n,e),Kh(zl),Ra=!!Tl,zl=Tl=null,e.current=n,kg(n,e,o),eh(),ae=l,ie=i,yt.transition=a}else e.current=n;if(wa&&(wa=!1,fn=e,Xa=o),a=e.pendingLanes,a===0&&(yn=null),rh(n.stateNode,r),tt(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ga)throw Ga=!1,e=Zl,Zl=null,e;return(Xa&1)!==0&&e.tag!==0&&Sr(),a=e.pendingLanes,(a&1)!==0?e===ql?fo++:(fo=0,ql=e):fo=0,Cn(),null}function Sr(){if(fn!==null){var e=Mc(Xa),t=yt.transition,n=ie;try{if(yt.transition=null,ie=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,Xa=0,(ae&6)!==0)throw Error(T(331));var o=ae;for(ae|=4,R=e.current;R!==null;){var a=R,i=a.child;if((R.flags&16)!==0){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(R=u;R!==null;){var p=R;switch(p.tag){case 0:case 11:case 15:uo(8,p,a)}var c=p.child;if(c!==null)c.return=p,R=c;else for(;R!==null;){p=R;var m=p.sibling,y=p.return;if(Jf(p),p===u){R=null;break}if(m!==null){m.return=y,R=m;break}R=y}}}var g=a.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}R=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,R=i;else e:for(;R!==null;){if(a=R,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:uo(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,R=f;break e}R=a.return}}var d=e.current;for(R=d;R!==null;){i=R;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,R=h;else e:for(i=d;R!==null;){if(l=R,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:si(9,l)}}catch(b){ye(l,l.return,b)}if(l===i){R=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,R=k;break e}R=l.return}}if(ae=o,Cn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(ei,e)}catch{}r=!0}return r}finally{ie=n,yt.transition=t}}return!1}function uc(e,t,n){t=Lr(n,t),t=If(e,t,1),e=vn(e,t,1),t=Ve(),e!==null&&(Do(e,1,t),tt(e,t))}function ye(e,t,n){if(e.tag===3)uc(e,e,n);else for(;t!==null;){if(t.tag===3){uc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=Lr(n,e),e=Af(t,e,1),t=vn(t,e,1),e=Ve(),t!==null&&(Do(t,1,e),tt(t,e));break}}t=t.return}}function Pg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Oe&n)===n&&(Ne===4||Ne===3&&(Oe&130023424)===Oe&&500>be()-Is?jn(e,0):Ms|=n),tt(e,t)}function op(e,t){t===0&&((e.mode&1)===0?t=1:(t=aa,aa<<=1,(aa&130023424)===0&&(aa=4194304)));var n=Ve();e=Xt(e,t),e!==null&&(Do(e,t,n),tt(e,n))}function Lg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),op(e,n)}function Dg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),op(e,n)}var ap;ap=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)Ze=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ze=!1,vg(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,pe&&(t.flags&1048576)!==0&&uf(t,Ha,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Na(e,t),e=t.pendingProps;var o=Cr(t,$e.current);kr(t,n),o=Ds(null,t,r,e,o,n);var a=Ts();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(a=!0,$a(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Cs(t),o.updater=li,t.stateNode=o,o._reactInternals=t,Ul(t,r,e,n),t=Wl(null,t,r,!0,a,n)):(t.tag=0,pe&&a&&ys(t),We(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Na(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=zg(r),e=Nt(r,e),o){case 0:t=Bl(null,t,r,e,n);break e;case 1:t=qd(null,t,r,e,n);break e;case 11:t=Xd(null,t,r,e,n);break e;case 14:t=Zd(null,t,r,Nt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),Bl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),qd(e,t,r,o,n);case 3:e:{if(Hf(t),e===null)throw Error(T(387));r=t.pendingProps,a=t.memoizedState,o=a.element,hf(e,t),Va(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Lr(Error(T(423)),t),t=ec(e,t,r,n,o);break e}else if(r!==o){o=Lr(Error(T(424)),t),t=ec(e,t,r,n,o);break e}else for(it=gn(t.stateNode.containerInfo.firstChild),lt=t,pe=!0,Pt=null,n=pf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nr(),r===o){t=Zt(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return gf(t),e===null&&Al(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Ol(r,o)?i=null:a!==null&&Ol(r,a)&&(t.flags|=32),Uf(e,t),We(e,t,i,n),t.child;case 6:return e===null&&Al(t),null;case 13:return Bf(e,t,n);case 4:return Ns(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_r(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),Xd(e,t,r,o,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,se(Ba,r._currentValue),r._currentValue=i,a!==null)if(Tt(a.value,i)){if(a.children===o.children&&!qe.current){t=Zt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Jt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),jl(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(T(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),jl(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}We(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,kr(t,n),o=wt(o),r=r(o),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,o=Nt(r,t.pendingProps),o=Nt(r.type,o),Zd(e,t,r,o,n);case 15:return jf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),Na(e,t),t.tag=1,et(r)?(e=!0,$a(t)):e=!1,kr(t,n),Mf(t,r,o),Ul(t,r,o,n),Wl(null,t,r,!0,e,n);case 19:return Wf(e,t,n);case 22:return $f(e,t,n)}throw Error(T(156,t.tag))};function ip(e,t){return zc(e,t)}function Tg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new Tg(e,t,n,r)}function Us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zg(e){if(typeof e=="function")return Us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===is)return 11;if(e===ls)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function La(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Us(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case lr:return $n(n.children,o,a,t);case as:i=8,o|=8;break;case cl:return e=vt(12,n,t,o|2),e.elementType=cl,e.lanes=a,e;case fl:return e=vt(13,n,t,o),e.elementType=fl,e.lanes=a,e;case pl:return e=vt(19,n,t,o),e.elementType=pl,e.lanes=a,e;case hc:return di(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pc:i=10;break e;case mc:i=9;break e;case is:i=11;break e;case ls:i=14;break e;case ln:i=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=vt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function $n(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function di(e,t,n,r){return e=vt(22,e,r,t),e.elementType=hc,e.lanes=n,e.stateNode={isHidden:!1},e}function sl(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function ul(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Og(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yi(0),this.expirationTimes=Yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Hs(e,t,n,r,o,a,i,l,s){return e=new Og(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=vt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cs(a),e}function Fg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ir,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lp(e){if(!e)return kn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(et(n))return lf(e,n,t)}return t}function sp(e,t,n,r,o,a,i,l,s){return e=Hs(n,r,!0,e,o,a,i,l,s),e.context=lp(null),n=e.current,r=Ve(),o=wn(n),a=Jt(r,o),a.callback=t??null,vn(n,a,o),e.current.lanes=o,Do(e,o,r),tt(e,r),e}function ci(e,t,n,r){var o=t.current,a=Ve(),i=wn(o);return n=lp(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vn(o,t,i),e!==null&&(Dt(e,o,i,a),Sa(e,o,i)),i}function qa(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function dc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bs(e,t){dc(e,t),(e=e.alternate)&&dc(e,t)}function Rg(){return null}var up=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ws(e){this._internalRoot=e}fi.prototype.render=Ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));ci(e,t,null,null)};fi.prototype.unmount=Ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){ci(null,e,null,null)}),t[Gt]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=jc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&Uc(e)}};function Vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cc(){}function Mg(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=qa(i);a.call(u)}}var i=sp(t,r,e,0,null,!1,!1,"",cc);return e._reactRootContainer=i,e[Gt]=i.current,bo(e.nodeType===8?e.parentNode:e),Vn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=qa(s);l.call(u)}}var s=Hs(e,0,!1,null,null,!1,!1,"",cc);return e._reactRootContainer=s,e[Gt]=s.current,bo(e.nodeType===8?e.parentNode:e),Vn(function(){ci(t,s,n,r)}),s}function mi(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var l=o;o=function(){var s=qa(i);l.call(s)}}ci(t,i,e,o)}else i=Mg(n,t,e,o,r);return qa(i)}Ic=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=to(t.pendingLanes);n!==0&&(ds(t,n|1),tt(t,be()),(ae&6)===0&&(Dr=be()+500,Cn()))}break;case 13:Vn(function(){var r=Xt(e,1);if(r!==null){var o=Ve();Dt(r,e,1,o)}}),Bs(e,1)}};cs=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=Ve();Dt(t,e,134217728,n)}Bs(e,134217728)}};Ac=function(e){if(e.tag===13){var t=wn(e),n=Xt(e,t);if(n!==null){var r=Ve();Dt(n,e,t,r)}Bs(e,t)}};jc=function(){return ie};$c=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Sl=function(e,t,n){switch(t){case"input":if(gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=oi(r);if(!o)throw Error(T(90));vc(r),gl(r,o)}}}break;case"textarea":wc(e,n);break;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}};Nc=As;_c=Vn;var Ig={usingClientEntryPoint:!1,Events:[zo,cr,oi,Ec,Cc,As]},Xr={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ag={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dc(e),e===null?null:e.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||Rg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Zr.isDisabled&&Zr.supportsFiber))try{ei=Zr.inject(Ag),At=Zr}catch{}var Zr;dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ig;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vs(t))throw Error(T(200));return Fg(e,t,null,n)};dt.createRoot=function(e,t){if(!Vs(e))throw Error(T(299));var n=!1,r="",o=up;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Hs(e,1,!1,null,null,n,!1,r,o),e[Gt]=t.current,bo(e.nodeType===8?e.parentNode:e),new Ws(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Dc(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return Vn(e)};dt.hydrate=function(e,t,n){if(!pi(t))throw Error(T(200));return mi(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!Vs(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=up;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=sp(t,null,e,1,n??null,o,!1,a,i),e[Gt]=t.current,bo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new fi(t)};dt.render=function(e,t,n){if(!pi(t))throw Error(T(200));return mi(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!pi(e))throw Error(T(40));return e._reactRootContainer?(Vn(function(){mi(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};dt.unstable_batchedUpdates=As;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pi(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return mi(e,t,n,!1,r)};dt.version="18.3.1-next-f1338f8080-20240426"});var pp=zn((x0,fp)=>{"use strict";function cp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cp)}catch(e){console.error(e)}}cp(),fp.exports=dp()});var hp=zn(Ys=>{"use strict";var mp=pp();Ys.createRoot=mp.createRoot,Ys.hydrateRoot=mp.hydrateRoot;var b0});var fm=J(Q()),pm=J(hp());var ot=J(Q());var nt=J(Q(),1),j=J(Q(),1),me=J(Q(),1),uu=J(Q(),1),Qp=J(Q(),1),ee=J(Q(),1),Yv=J(Q(),1),Qv=J(Q(),1),Jv=J(Q(),1),$=J(Q(),1),am=J(Q(),1);var gp="popstate";function vp(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Ep(e={}){function t(r,o){let a=o.state?.masked,{pathname:i,search:l,hash:s}=a||r.location;return Gs("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default",a?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,o){return typeof o=="string"?o:Or(o)}return $g(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jg(){return Math.random().toString(36).substring(2,10)}function yp(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Gs(e,t,n=null,r,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Jn(t):t,state:n,key:t&&t.key||r||jg(),unstable_mask:o}}function Or({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function $g(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,l="POP",s=null,u=p();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function p(){return(i.state||{idx:null}).idx}function c(){l="POP";let w=p(),f=w==null?null:w-u;u=w,s&&s({action:l,location:v.location,delta:f})}function m(w,f){l="PUSH";let d=vp(w)?w:Gs(v.location,w,f);n&&n(d,w),u=p()+1;let h=yp(d,u),k=v.createHref(d.unstable_mask||d);try{i.pushState(h,"",k)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(k)}a&&s&&s({action:l,location:v.location,delta:1})}function y(w,f){l="REPLACE";let d=vp(w)?w:Gs(v.location,w,f);n&&n(d,w),u=p();let h=yp(d,u),k=v.createHref(d.unstable_mask||d);i.replaceState(h,"",k),a&&s&&s({action:l,location:v.location,delta:0})}function g(w){return Ug(w)}let v={get action(){return l},get location(){return e(o,i)},listen(w){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(gp,c),s=w,()=>{o.removeEventListener(gp,c),s=null}},createHref(w){return t(o,w)},createURL:g,encodeLocation(w){let f=g(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:y,go(w){return i.go(w)}};return v}function Ug(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),fe(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Or(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}var Hg;Hg=new WeakMap;function eu(e,t,n="/"){return Bg(e,t,n,!1)}function Bg(e,t,n,r){let o=typeof t=="string"?Jn(t):t,a=Ut(o.pathname||"/",n);if(a==null)return null;let i=Cp(e);Vg(i);let l=null;for(let s=0;l==null&&s<i.length;++s){let u=nv(a);l=ev(i[s],u,r)}return l}function Wg(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function Cp(e,t=[],n=[],r="",o=!1){let a=(i,l,s=o,u)=>{let p={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(r)&&s)return;fe(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length)}let c=$t([r,p.relativePath]),m=n.concat(p);i.children&&i.children.length>0&&(fe(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),Cp(i.children,t,m,c,s)),!(i.path==null&&!i.index)&&t.push({path:c,score:Zg(c,i.index),routesMeta:m})};return e.forEach((i,l)=>{if(i.path===""||!i.path?.includes("?"))a(i,l);else for(let s of Np(i.path))a(i,l,!0,s)}),t}function Np(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let i=Np(r.join("/")),l=[];return l.push(...i.map(s=>s===""?a:[a,s].join("/"))),o&&l.push(...i),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Vg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Yg=/^:[\w-]+$/,Qg=3,Jg=2,Kg=1,Gg=10,Xg=-2,wp=e=>e==="*";function Zg(e,t){let n=e.split("/"),r=n.length;return n.some(wp)&&(r+=Xg),t&&(r+=Jg),n.filter(o=>!wp(o)).reduce((o,a)=>o+(Yg.test(a)?Qg:a===""?Kg:Gg),r)}function qg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ev(e,t,n=!1){let{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,p=a==="/"?t:t.slice(a.length)||"/",c=Ro({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},p),m=s.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Ro({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},p)),!c)return null;Object.assign(o,c.params),i.push({params:o,pathname:$t([a,c.pathname]),pathnameBase:av($t([a,c.pathnameBase])),route:m}),c.pathnameBase!=="/"&&(a=$t([a,c.pathnameBase]))}return i}function Ro(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=tv(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,{paramName:p,isOptional:c},m)=>{if(p==="*"){let g=l[m]||"";i=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}let y=l[m];return c&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:i,pattern:e}}function tv(e,t=!1,n=!0){bt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,s,u,p)=>{if(r.push({paramName:l,isOptional:s!=null}),s){let c=p.charAt(u+i.length);return c&&c!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function nv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ut(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var rv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function _p(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Jn(e):e,a;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?a=xp(n.substring(1),"/"):a=xp(n,t)):a=t,{pathname:a,search:iv(r),hash:lv(o)}}function xp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Qs(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ov(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pp(e){let t=ov(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function tu(e,t,n,r=!1){let o;typeof e=="string"?o=Jn(e):(o={...e},fe(!o.pathname||!o.pathname.includes("?"),Qs("?","pathname","search",o)),fe(!o.pathname||!o.pathname.includes("#"),Qs("#","pathname","hash",o)),fe(!o.search||!o.search.includes("#"),Qs("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,l;if(i==null)l=n;else{let c=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),c-=1;o.pathname=m.join("/")}l=c>=0?t[c]:"/"}let s=_p(o,l),u=i&&i!=="/"&&i.endsWith("/"),p=(a||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}var $t=e=>e.join("/").replace(/\/\/+/g,"/"),av=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;var Lp=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Dp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function sv(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Tp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function zp(e,t){let n=e;if(typeof n!="string"||!rv.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(Tp)try{let a=new URL(window.location.href),i=n.startsWith("//")?new URL(a.protocol+n):new URL(n),l=Ut(i.pathname,t);i.origin===a.origin&&l!=null?n=l+i.search+i.hash:o=!0}catch{bt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}var S0=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Op=["POST","PUT","PATCH","DELETE"],E0=new Set(Op),uv=["GET",...Op],C0=new Set(uv);var Kn=nt.createContext(null);Kn.displayName="DataRouter";var Fr=nt.createContext(null);Fr.displayName="DataRouterState";var Fp=nt.createContext(!1);function dv(){return nt.useContext(Fp)}var nu=nt.createContext({isTransitioning:!1});nu.displayName="ViewTransition";var Rp=nt.createContext(new Map);Rp.displayName="Fetchers";var cv=nt.createContext(null);cv.displayName="Await";var Qe=nt.createContext(null);Qe.displayName="Navigation";var Rr=nt.createContext(null);Rr.displayName="Location";var zt=nt.createContext({outlet:null,matches:[],isDataRoute:!1});zt.displayName="Route";var ru=nt.createContext(null);ru.displayName="RouteError";var Xs=!0,Mp="REACT_ROUTER_ERROR",fv="REDIRECT",pv="ROUTE_ERROR_RESPONSE";function mv(e){if(e.startsWith(`${Mp}:${fv}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function hv(e){if(e.startsWith(`${Mp}:${pv}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Lp(t.status,t.statusText,t.data)}catch{}}function Ip(e,{relative:t}={}){fe(Mr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=j.useContext(Qe),{hash:o,pathname:a,search:i}=Ir(e,{relative:t}),l=a;return n!=="/"&&(l=a==="/"?n:$t([n,a])),r.createHref({pathname:l,search:i,hash:o})}function Mr(){return j.useContext(Rr)!=null}function Ue(){return fe(Mr(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Rr).location}var Ap="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jp(e){j.useContext(Qe).static||j.useLayoutEffect(e)}function He(){let{isDataRoute:e}=j.useContext(zt);return e?Cv():gv()}function gv(){fe(Mr(),"useNavigate() may be used only in the context of a <Router> component.");let e=j.useContext(Kn),{basename:t,navigator:n}=j.useContext(Qe),{matches:r}=j.useContext(zt),{pathname:o}=Ue(),a=JSON.stringify(Pp(r)),i=j.useRef(!1);return jp(()=>{i.current=!0}),j.useCallback((s,u={})=>{if(bt(i.current,Ap),!i.current)return;if(typeof s=="number"){n.go(s);return}let p=tu(s,JSON.parse(a),o,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:$t([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,a,o,e])}var N0=j.createContext(null);function en(){let{matches:e}=j.useContext(zt),t=e[e.length-1];return t?t.params:{}}function Ir(e,{relative:t}={}){let{matches:n}=j.useContext(zt),{pathname:r}=Ue(),o=JSON.stringify(Pp(n));return j.useMemo(()=>tu(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function $p(e,t){return Up(e,t)}function Up(e,t,n){fe(Mr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=j.useContext(Qe),{matches:o}=j.useContext(zt),a=o[o.length-1],i=a?a.params:{},l=a?a.pathname:"/",s=a?a.pathnameBase:"/",u=a&&a.route;if(Xs){let w=u&&u.path||"";Vp(l,!u||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let p=Ue(),c;if(t){let w=typeof t=="string"?Jn(t):t;fe(s==="/"||w.pathname?.startsWith(s),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${w.pathname}" was given in the \`location\` prop.`),c=w}else c=p;let m=c.pathname||"/",y=m;if(s!=="/"){let w=s.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(w.length).join("/")}let g=eu(e,{pathname:y});Xs&&(bt(u||g!=null,`No routes matched location "${c.pathname}${c.search}${c.hash}" `),bt(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${c.pathname}${c.search}${c.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));let v=bv(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},i,w.params),pathname:$t([s,r.encodeLocation?r.encodeLocation(w.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:$t([s,r.encodeLocation?r.encodeLocation(w.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),o,n);return t&&v?j.createElement(Rr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...c},navigationType:"POP"}},v):v}function vv(){let e=Wp(),t=Dp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},i=null;return Xs&&(console.error("Error handled by React Router default ErrorBoundary:",e),i=j.createElement(j.Fragment,null,j.createElement("p",null,"\u{1F4BF} Hey developer \u{1F44B}"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:a},"ErrorBoundary")," or"," ",j.createElement("code",{style:a},"errorElement")," prop on your route."))),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:o},n):null,i)}var yv=j.createElement(vv,null),Hp=class extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let n=hv(e.digest);n&&(e=n)}let t=e!==void 0?j.createElement(zt.Provider,{value:this.props.routeContext},j.createElement(ru.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?j.createElement(wv,{error:e},t):t}};Hp.contextType=Fp;var Js=new WeakMap;function wv({children:e,error:t}){let{basename:n}=j.useContext(Qe);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=mv(t.digest);if(r){let o=Js.get(t);if(o)throw o;let a=zp(r.location,n);if(Tp&&!Js.get(t))if(a.isExternal||r.reloadDocument)window.location.href=a.absoluteURL||a.to;else{let i=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:r.replace}));throw Js.set(t,i),i}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return e}function xv({routeContext:e,match:t,children:n}){let r=j.useContext(Kn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),j.createElement(zt.Provider,{value:e},n)}function bv(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,a=r?.errors;if(a!=null){let p=o.findIndex(c=>c.route.id&&a?.[c.route.id]!==void 0);fe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let i=!1,l=-1;if(n&&r){i=r.renderFallback;for(let p=0;p<o.length;p++){let c=o[p];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(l=p),c.route.id){let{loaderData:m,errors:y}=r,g=c.route.loader&&!m.hasOwnProperty(c.route.id)&&(!y||y[c.route.id]===void 0);if(c.route.lazy||g){n.isStatic&&(i=!0),l>=0?o=o.slice(0,l+1):o=[o[0]];break}}}}let s=n?.onError,u=r&&s?(p,c)=>{s(p,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:sv(r.matches),errorInfo:c})}:void 0;return o.reduceRight((p,c,m)=>{let y,g=!1,v=null,w=null;r&&(y=a&&c.route.id?a[c.route.id]:void 0,v=c.route.errorElement||yv,i&&(l<0&&m===0?(Vp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,w=null):l===m&&(g=!0,w=c.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,m+1)),d=()=>{let h;return y?h=v:g?h=w:c.route.Component?h=j.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=p,j.createElement(xv,{match:c,routeContext:{outlet:p,matches:f,isDataRoute:r!=null},children:h})};return r&&(c.route.ErrorBoundary||c.route.errorElement||m===0)?j.createElement(Hp,{location:r.location,revalidation:r.revalidation,component:v,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:u}):d()},null)}function ou(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kv(e){let t=j.useContext(Kn);return fe(t,ou(e)),t}function au(e){let t=j.useContext(Fr);return fe(t,ou(e)),t}function Sv(e){let t=j.useContext(zt);return fe(t,ou(e)),t}function iu(e){let t=Sv(e),n=t.matches[t.matches.length-1];return fe(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ev(){return iu("useRouteId")}function Bp(){return au("useNavigation").navigation}function lu(){let{matches:e,loaderData:t}=au("useMatches");return j.useMemo(()=>e.map(n=>Wg(n,t)),[e,t])}function Wp(){let e=j.useContext(ru),t=au("useRouteError"),n=iu("useRouteError");return e!==void 0?e:t.errors?.[n]}function Cv(){let{router:e}=kv("useNavigate"),t=iu("useNavigate"),n=j.useRef(!1);return jp(()=>{n.current=!0}),j.useCallback(async(o,a={})=>{bt(n.current,Ap),n.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var bp={};function Vp(e,t,n){!t&&!bp[e]&&(bp[e]=!0,bt(!1,n))}var Nv="useOptimistic",_0=me[Nv];var P0=me.memo(_v);function _v({routes:e,future:t,state:n,isStatic:r,onError:o}){return Up(e,void 0,{state:n,isStatic:r,onError:o,future:t})}function ke(e){fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function su({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:a=!1,unstable_useTransitions:i}){fe(!Mr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),s=me.useMemo(()=>({basename:l,navigator:o,static:a,unstable_useTransitions:i,future:{}}),[l,o,a,i]);typeof n=="string"&&(n=Jn(n));let{pathname:u="/",search:p="",hash:c="",state:m=null,key:y="default",unstable_mask:g}=n,v=me.useMemo(()=>{let w=Ut(u,l);return w==null?null:{location:{pathname:w,search:p,hash:c,state:m,key:y,unstable_mask:g},navigationType:r}},[l,u,p,c,m,y,r,g]);return bt(v!=null,`<Router basename="${l}"> is not able to match the URL "${u}${p}${c}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:me.createElement(Qe.Provider,{value:s},me.createElement(Rr.Provider,{children:t,value:v}))}function Mo({children:e,location:t}){return $p(wi(e),t)}function wi(e,t=[]){let n=[];return me.Children.forEach(e,(r,o)=>{if(!me.isValidElement(r))return;let a=[...t,o];if(r.type===me.Fragment){n.push.apply(n,wi(r.props.children,a));return}fe(r.type===ke,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),fe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let i={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=wi(r.props.children,a)),n.push(i)}),n}var vi="get",yi="application/x-www-form-urlencoded";function xi(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Pv(e){return xi(e)&&e.tagName.toLowerCase()==="button"}function Lv(e){return xi(e)&&e.tagName.toLowerCase()==="form"}function Dv(e){return xi(e)&&e.tagName.toLowerCase()==="input"}function Tv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zv(e,t){return e.button===0&&(!t||t==="_self")&&!Tv(e)}var hi=null;function Ov(){if(hi===null)try{new FormData(document.createElement("form"),0),hi=!1}catch{hi=!0}return hi}var Fv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ks(e){return e!=null&&!Fv.has(e)?(bt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yi}"`),null):e}function Rv(e,t){let n,r,o,a,i;if(Lv(e)){let l=e.getAttribute("action");r=l?Ut(l,t):null,n=e.getAttribute("method")||vi,o=Ks(e.getAttribute("enctype"))||yi,a=new FormData(e)}else if(Pv(e)||Dv(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||l.getAttribute("action");if(r=s?Ut(s,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||vi,o=Ks(e.getAttribute("formenctype"))||Ks(l.getAttribute("enctype"))||yi,a=new FormData(l,e),!Ov()){let{name:u,type:p,value:c}=e;if(p==="image"){let m=u?`${u}.`:"";a.append(`${m}x`,"0"),a.append(`${m}y`,"0")}else u&&a.append(u,c)}}else{if(xi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=vi,r=null,o=yi,i=e}return a&&o==="text/plain"&&(i=a,a=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:a,body:i}}var L0=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mv={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Iv=/[&><\u2028\u2029]/g;function kp(e){return e.replace(Iv,t=>Mv[t])}function du(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yp(e,t,n,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:t&&Ut(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function Av(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){if(console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode&&import.meta.hot)throw n;return window.location.reload(),new Promise(()=>{})}}function jv(e){return e!=null&&typeof e.page=="string"}function $v(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Uv(e,t,n){let r=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let i=await Av(a,n);return i.links?i.links():[]}return[]}));return Vv(r.flat(1).filter($v).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Sp(e,t,n,r,o,a){let i=(s,u)=>n[u]?s.route.id!==n[u].route.id:!0,l=(s,u)=>n[u].pathname!==s.pathname||n[u].route.path?.endsWith("*")&&n[u].params["*"]!==s.params["*"];return a==="assets"?t.filter((s,u)=>i(s,u)||l(s,u)):a==="data"?t.filter((s,u)=>{let p=r.routes[s.route.id];if(!p||!p.hasLoader)return!1;if(i(s,u)||l(s,u))return!0;if(s.route.shouldRevalidate){let c=s.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof c=="boolean")return c}return!0}):[]}function Hv(e,t,{includeHydrateFallback:n}={}){return Bv(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function Bv(e){return[...new Set(e)]}function Wv(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Vv(e,t){let n=new Set,r=new Set(t);return e.reduce((o,a)=>{if(t&&!jv(a)&&a.as==="script"&&a.href&&r.has(a.href))return o;let l=JSON.stringify(Wv(a));return n.has(l)||(n.add(l),o.push({key:l,link:a})),o},[])}function cu(){let e=ee.useContext(Kn);return du(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Kv(){let e=ee.useContext(Fr);return du(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Io=ee.createContext(void 0);Io.displayName="FrameworkContext";function fu(){let e=ee.useContext(Io);return du(e,"You must render this element inside a <HydratedRouter> element"),e}function Gv(e,t){let n=ee.useContext(Io),[r,o]=ee.useState(!1),[a,i]=ee.useState(!1),{onFocus:l,onBlur:s,onMouseEnter:u,onMouseLeave:p,onTouchStart:c}=t,m=ee.useRef(null);ee.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let v=f=>{f.forEach(d=>{i(d.isIntersecting)})},w=new IntersectionObserver(v,{threshold:.5});return m.current&&w.observe(m.current),()=>{w.disconnect()}}},[e]),ee.useEffect(()=>{if(r){let v=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(v)}}},[r]);let y=()=>{o(!0)},g=()=>{o(!1),i(!1)};return n?e!=="intent"?[a,m,{}]:[a,m,{onFocus:Fo(l,y),onBlur:Fo(s,g),onMouseEnter:Fo(u,y),onMouseLeave:Fo(p,g),onTouchStart:Fo(c,y)}]:[!1,m,{}]}function Fo(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Jp({page:e,...t}){let n=dv(),{router:r}=cu(),o=ee.useMemo(()=>eu(r.routes,e,r.basename),[r.routes,e,r.basename]);return o?n?ee.createElement(Zv,{page:e,matches:o,...t}):ee.createElement(qv,{page:e,matches:o,...t}):null}function Xv(e){let{manifest:t,routeModules:n}=fu(),[r,o]=ee.useState([]);return ee.useEffect(()=>{let a=!1;return Uv(e,t,n).then(i=>{a||o(i)}),()=>{a=!0}},[e,t,n]),r}function Zv({page:e,matches:t,...n}){let r=Ue(),{future:o}=fu(),{basename:a}=cu(),i=ee.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let l=Yp(e,a,o.unstable_trailingSlashAwareDataRequests,"rsc"),s=!1,u=[];for(let p of t)typeof p.route.shouldRevalidate=="function"?s=!0:u.push(p.route.id);return s&&u.length>0&&l.searchParams.set("_routes",u.join(",")),[l.pathname+l.search]},[a,o.unstable_trailingSlashAwareDataRequests,e,r,t]);return ee.createElement(ee.Fragment,null,i.map(l=>ee.createElement("link",{key:l,rel:"prefetch",as:"fetch",href:l,...n})))}function qv({page:e,matches:t,...n}){let r=Ue(),{future:o,manifest:a,routeModules:i}=fu(),{basename:l}=cu(),{loaderData:s,matches:u}=Kv(),p=ee.useMemo(()=>Sp(e,t,u,a,r,"data"),[e,t,u,a,r]),c=ee.useMemo(()=>Sp(e,t,u,a,r,"assets"),[e,t,u,a,r]),m=ee.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,w=!1;if(t.forEach(d=>{let h=a.routes[d.route.id];!h||!h.hasLoader||(!p.some(k=>k.route.id===d.route.id)&&d.route.id in s&&i[d.route.id]?.shouldRevalidate||h.hasClientLoader?w=!0:v.add(d.route.id))}),v.size===0)return[];let f=Yp(e,l,o.unstable_trailingSlashAwareDataRequests,"data");return w&&v.size>0&&f.searchParams.set("_routes",t.filter(d=>v.has(d.route.id)).map(d=>d.route.id).join(",")),[f.pathname+f.search]},[l,o.unstable_trailingSlashAwareDataRequests,s,r,a,p,t,e,i]),y=ee.useMemo(()=>Hv(c,a),[c,a]),g=Xv(c);return ee.createElement(ee.Fragment,null,m.map(v=>ee.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),y.map(v=>ee.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),g.map(({key:v,link:w})=>ee.createElement("link",{key:v,nonce:n.nonce,...w,crossOrigin:w.crossOrigin??n.crossOrigin})))}function e0(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var t0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{t0&&(window.__reactRouterVersion="7.14.0")}catch{}function pu({basename:e,children:t,unstable_useTransitions:n,window:r}){let o=$.useRef();o.current==null&&(o.current=Ep({window:r,v5Compat:!0}));let a=o.current,[i,l]=$.useState({action:a.action,location:a.location}),s=$.useCallback(u=>{n===!1?l(u):$.startTransition(()=>l(u))},[n]);return $.useLayoutEffect(()=>a.listen(s),[a,s]),$.createElement(su,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a,unstable_useTransitions:n})}function Kp({basename:e,children:t,history:n,unstable_useTransitions:r}){let[o,a]=$.useState({action:n.action,location:n.location}),i=$.useCallback(l=>{r===!1?a(l):$.startTransition(()=>a(l))},[r]);return $.useLayoutEffect(()=>n.listen(i),[n,i]),$.createElement(su,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:n,unstable_useTransitions:r})}Kp.displayName="unstable_HistoryRouter";var Gp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gn=$.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:a,replace:i,unstable_mask:l,state:s,target:u,to:p,preventScrollReset:c,viewTransition:m,unstable_defaultShouldRevalidate:y,...g},v){let{basename:w,navigator:f,unstable_useTransitions:d}=$.useContext(Qe),h=typeof p=="string"&&Gp.test(p),k=zp(p,w);p=k.to;let b=Ip(p,{relative:o}),E=Ue(),S=null;if(l){let X=tu(l,[],E.unstable_mask?E.unstable_mask.pathname:"/",!0);w!=="/"&&(X.pathname=X.pathname==="/"?w:$t([w,X.pathname])),S=f.createHref(X)}let[z,H,P]=Gv(r,g),V=em(p,{replace:i,unstable_mask:l,state:s,target:u,preventScrollReset:c,relative:o,viewTransition:m,unstable_defaultShouldRevalidate:y,unstable_useTransitions:d});function I(X){t&&t(X),X.defaultPrevented||V(X)}let G=!(k.isExternal||a),re=$.createElement("a",{...g,...P,href:(G?S:void 0)||k.absoluteURL||b,onClick:G?I:t,ref:e0(v,H),target:u,"data-discover":!h&&n==="render"?"true":void 0});return z&&!h?$.createElement($.Fragment,null,re,$.createElement(Jp,{page:b})):re});Gn.displayName="Link";var tn=$.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:a,to:i,viewTransition:l,children:s,...u},p){let c=Ir(i,{relative:u.relative}),m=Ue(),y=$.useContext(Fr),{navigator:g,basename:v}=$.useContext(Qe),w=y!=null&&om(c)&&l===!0,f=g.encodeLocation?g.encodeLocation(c).pathname:c.pathname,d=m.pathname,h=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(d=d.toLowerCase(),h=h?h.toLowerCase():null,f=f.toLowerCase()),h&&v&&(h=Ut(h,v)||h);let k=f!=="/"&&f.endsWith("/")?f.length-1:f.length,b=d===f||!o&&d.startsWith(f)&&d.charAt(k)==="/",E=h!=null&&(h===f||!o&&h.startsWith(f)&&h.charAt(f.length)==="/"),S={isActive:b,isPending:E,isTransitioning:w},z=b?t:void 0,H;typeof r=="function"?H=r(S):H=[r,b?"active":null,E?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let P=typeof a=="function"?a(S):a;return $.createElement(Gn,{...u,"aria-current":z,className:H,ref:p,style:P,to:i,viewTransition:l},typeof s=="function"?s(S):s)});tn.displayName="NavLink";var Xp=$.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:a,method:i=vi,action:l,onSubmit:s,relative:u,preventScrollReset:p,viewTransition:c,unstable_defaultShouldRevalidate:m,...y},g)=>{let{unstable_useTransitions:v}=$.useContext(Qe),w=tm(),f=nm(l,{relative:u}),d=i.toLowerCase()==="get"?"get":"post",h=typeof l=="string"&&Gp.test(l);return $.createElement("form",{ref:g,method:d,action:f,onSubmit:r?s:b=>{if(s&&s(b),b.defaultPrevented)return;b.preventDefault();let E=b.nativeEvent.submitter,S=E?.getAttribute("formmethod")||i,z=()=>w(E||b.currentTarget,{fetcherKey:t,method:S,navigate:n,replace:o,state:a,relative:u,preventScrollReset:p,viewTransition:c,unstable_defaultShouldRevalidate:m});v&&n!==!1?$.startTransition(()=>z()):z()},...y,"data-discover":!h&&e==="render"?"true":void 0})});Xp.displayName="Form";function Zp({getKey:e,storageKey:t,...n}){let r=$.useContext(Io),{basename:o}=$.useContext(Qe),a=Ue(),i=lu();rm({getKey:e,storageKey:t});let l=$.useMemo(()=>{if(!r||!e)return null;let u=qs(a,i,o,e);return u!==a.key?u:null},[]);if(!r||r.isSpaMode)return null;let s=((u,p)=>{if(!window.history.state||!window.history.state.key){let c=Math.random().toString(32).slice(2);window.history.replaceState({key:c},"")}try{let m=JSON.parse(sessionStorage.getItem(u)||"{}")[p||window.history.state.key];typeof m=="number"&&window.scrollTo(0,m)}catch(c){console.error(c),sessionStorage.removeItem(u)}}).toString();return $.createElement("script",{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${s})(${kp(JSON.stringify(t||Zs))}, ${kp(JSON.stringify(l))})`}})}Zp.displayName="ScrollRestoration";function qp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mu(e){let t=$.useContext(Kn);return fe(t,qp(e)),t}function n0(e){let t=$.useContext(Fr);return fe(t,qp(e)),t}function em(e,{target:t,replace:n,unstable_mask:r,state:o,preventScrollReset:a,relative:i,viewTransition:l,unstable_defaultShouldRevalidate:s,unstable_useTransitions:u}={}){let p=He(),c=Ue(),m=Ir(e,{relative:i});return $.useCallback(y=>{if(zv(y,t)){y.preventDefault();let g=n!==void 0?n:Or(c)===Or(m),v=()=>p(e,{replace:g,unstable_mask:r,state:o,preventScrollReset:a,relative:i,viewTransition:l,unstable_defaultShouldRevalidate:s});u?$.startTransition(()=>v()):v()}},[c,p,m,n,r,o,t,e,a,i,l,s,u])}var r0=0,o0=()=>`__${String(++r0)}__`;function tm(){let{router:e}=mu("useSubmit"),{basename:t}=$.useContext(Qe),n=Ev(),r=e.fetch,o=e.navigate;return $.useCallback(async(a,i={})=>{let{action:l,method:s,encType:u,formData:p,body:c}=Rv(a,t);if(i.navigate===!1){let m=i.fetcherKey||o0();await r(m,n,i.action||l,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:p,body:c,formMethod:i.method||s,formEncType:i.encType||u,flushSync:i.flushSync})}else await o(i.action||l,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:p,body:c,formMethod:i.method||s,formEncType:i.encType||u,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[r,o,t,n])}function nm(e,{relative:t}={}){let{basename:n}=$.useContext(Qe),r=$.useContext(zt);fe(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),a={...Ir(e||".",{relative:t})},i=Ue();if(e==null){a.search=i.search;let l=new URLSearchParams(a.search),s=l.getAll("index");if(s.some(p=>p==="")){l.delete("index"),s.filter(c=>c).forEach(c=>l.append("index",c));let p=l.toString();a.search=p?`?${p}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:$t([n,a.pathname])),Or(a)}var Zs="react-router-scroll-positions",gi={};function qs(e,t,n,r){let o=null;return r&&(n!=="/"?o=r({...e,pathname:Ut(e.pathname,n)||e.pathname},t):o=r(e,t)),o==null&&(o=e.key),o}function rm({getKey:e,storageKey:t}={}){let{router:n}=mu("useScrollRestoration"),{restoreScrollPosition:r,preventScrollReset:o}=n0("useScrollRestoration"),{basename:a}=$.useContext(Qe),i=Ue(),l=lu(),s=Bp();$.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),a0($.useCallback(()=>{if(s.state==="idle"){let u=qs(i,l,a,e);gi[u]=window.scrollY}try{sessionStorage.setItem(t||Zs,JSON.stringify(gi))}catch(u){bt(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`)}window.history.scrollRestoration="auto"},[s.state,e,a,i,l,t])),typeof document<"u"&&($.useLayoutEffect(()=>{try{let u=sessionStorage.getItem(t||Zs);u&&(gi=JSON.parse(u))}catch{}},[t]),$.useLayoutEffect(()=>{let u=n?.enableScrollRestoration(gi,()=>window.scrollY,e?(p,c)=>qs(p,c,a,e):void 0);return()=>u&&u()},[n,a,e]),$.useLayoutEffect(()=>{if(r!==!1){if(typeof r=="number"){window.scrollTo(0,r);return}try{if(i.hash){let u=document.getElementById(decodeURIComponent(i.hash.slice(1)));if(u){u.scrollIntoView();return}}}catch{bt(!1,`"${i.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}o!==!0&&window.scrollTo(0,0)}},[i,r,o]))}function a0(e,t){let{capture:n}=t||{};$.useEffect(()=>{let r=n!=null?{capture:n}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,n])}function om(e,{relative:t}={}){let n=$.useContext(nu);fe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=mu("useViewTransitionState"),o=Ir(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ut(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=Ut(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ro(o.pathname,i)!=null||Ro(o.pathname,a)!=null}(function(){if(!document.getElementById("c62a888d9d62ae4e611fb1f1c11ec20b6be422d570d7e237577771d161e51220")){var e=document.createElement("style");e.id="c62a888d9d62ae4e611fb1f1c11ec20b6be422d570d7e237577771d161e51220",e.textContent=`/* GLOBAL RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* COLOR SYSTEM */
:root {
  --bg: #fafafa;
  --bg-soft: #eff6ff;
  --text: #2f2a26;
  --accent: #5a5a5a;
  --accent-muted: #214247;
  --soft-blue: #2f3b81;
  --deep-blue: #1d2869;
  --border: rgba(80, 70, 60, 0.15);
  --radius: 12px;
  --shadow: 0 4px 14px rgba(80, 70, 60, 0.08);
  --font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --black: #1c1c1a;
  --black-soft: #232321;
  --black-muted: #2b2b28;
}

/* BASE */
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  font-size: 17px;
  line-height: 1.6;
  padding: 24px;
  -webkit-font-smoothing: antialiased;
}

/* HEADINGS */
h1,
h2,
h3 {
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text);
  letter-spacing: -0.3px;
}

/* LAYOUT HELPERS */
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

/* CARDS (optional UI element) */
.card {
  background: var(--bg-soft);
  padding: 24px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  margin-bottom: 20px;
}

/* NAV LINKS */
a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: 0.2s ease;
}

a:hover {
  color: var(--accent-muted);
}

/* BUTTONS */
button,
.btn {
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: none;
}

button:hover,
.btn:hover {
  background: var(--accent-muted);
}

/* INPUTS */
input,
select,
textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: white;
  font-size: 16px;
  color: var(--text);
  margin-bottom: 14px;
  transition: border-color 0.2s ease;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--accent);
  outline: none;
}

/* SPACING HELPERS */
.mt-05 {
  margin-top: 4px;
}

.mt-1 {
  margin-top: 8px;
}
.mt-2 {
  margin-top: 16px;
}
.mt-3 {
  margin-top: 24px;
}
.mb-1 {
  margin-bottom: 8px;
}
.mb-2 {
  margin-bottom: 16px;
}
.mb-3 {
  margin-bottom: 24px;
}

.pt-1 {
  padding-top: 8px;
}
.pt-2 {
  padding-top: 16px;
}
.pt-3 {
  padding-top: 24px;
}
.pb-1 {
  padding-bottom: 8px;
}
.pb-2 {
  padding-bottom: 16px;
}
.pb-3 {
  padding-bottom: 24px;
}

.t-a-center {
  text-align: center;
}

.width-25 {
  width: 25% !important;
}
.width-33 {
  width: 33% !important;
}

.width-50 {
  width: 50% !important;
}
.width-75 {
  width: 75% !important;
}
.width-100 {
  width: 100% !important;
}

.height-25 {
  height: 25% !important;
}
.height-50 {
  height: 50% !important;
}
.height-75 {
  height: 75% !important;
}
.height-100 {
  height: 100% !important;
}

.content-center {
  display: flex;
  justify-content: center !important;
  align-items: center !important;
}
.content-left {
  display: flex;
  justify-content: flex-start !important;
  align-items: left !important;
}

.content-right {
  display: flex;
  justify-content: flex-end !important;
  align-items: right !important;
}

.content-between {
  display: flex;
  justify-content: space-between !important;
  align-items: center !important;
}

.t-sm {
  font-size: 12px !important;
}
.t-md {
  font-size: 14px !important;
}
.t-lr {
  font-size: 18px !important;
}
.t-xl {
  font-size: 24px !important;
}

.border-top {
  border-top: 1px var(--border) solid !important;
}

.border-bottom {
  border-bottom: 1px var(--border) solid !important;
}

.border-right {
  border-right: 1px var(--border) solid !important;
}

.border-left {
  border-left: 1px var(--border) solid !important;
}
`,document.head.appendChild(e)}})();var D=J(Q());var M=J(Q());(function(){if(!document.getElementById("e0effbf012d52a248d477153a26577f119e83cb3bd3a3bea5ba5a3bb920b7280")){var e=document.createElement("style");e.id="e0effbf012d52a248d477153a26577f119e83cb3bd3a3bea5ba5a3bb920b7280",e.textContent=`/* Booking Scheduler Styles */
.booking-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  overflow-y: auto;
}

.booking-modal {
  background: white;
  border-radius: 16px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.booking-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 32px;
  color: #999;
  cursor: pointer;
  z-index: 10;
  font-size: inherit;
}

.booking-close:hover {
  color: #1a1a1a;
  background: none;
  border: #e5e5e5;
}

.booking-header {
  padding: 32px 32px 24px;
  border-bottom: 1px solid #e5e5e5;
}

.booking-header h2 {
  margin: 0 0 8px 0;
  font-size: 24px;
  color: #1a1a1a;
}

.booking-subtitle {
  margin: 0 0 12px 0;
  color: #666;
  font-size: 16px;
}

.booking-info {
  display: flex;
  gap: 8px;
  font-size: 14px;
  color: #999;
}

/* Progress Steps */
.booking-steps {
  display: flex;
  justify-content: space-around;
  padding: 24px 32px;
  background: #f8f9fa;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0.4;
  transition: opacity 0.3s;
}

.step.active {
  opacity: 1;
}

.step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e5e5e5;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.step.active .step-number {
  background: #10b981;
  color: white;
}

.step-label {
  font-size: 12px;
  color: #666;
}

/* Content */
.booking-content {
  padding: 32px;
}

.booking-content h3 {
  margin: 0 0 24px 0;
  font-size: 18px;
  color: #1a1a1a;
}

.back-btn {
  background: none;
  border: none;
  color: #10b981;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 16px;
  padding: 8px;
}

.back-btn:hover {
  background: #f0fdf4;
  border-radius: 8px;
}

/* Date Selector */
.date-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 12px;
}

.date-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 8px;
  background: white;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  color: black;
}

.date-btn:hover {
  border-color: #10b981;
  background: #f0fdf4;
}

.date-btn.selected {
  border-color: #10b981;
  background: #10b981;
  color: white;
}

.date-day {
  font-size: 12px;
  opacity: 0.7;
}

.date-number {
  font-size: 20px;
  font-weight: 700;
  margin: 4px 0;
}

.date-month {
  font-size: 12px;
  opacity: 0.7;
}

/* Time Selector */
.loading-slots {
  text-align: center;
  padding: 40px 20px;
}

.loading-slots .spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #10b981;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.time-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
}

.time-btn {
  padding: 12px;
  background: white;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s;
  color: black;
}

.time-btn:hover {
  border-color: #10b981;
  background: #f0fdf4;
}

.time-btn.selected {
  border-color: #10b981;
  background: #10b981;
  color: white;
}

.no-slots {
  text-align: center;
  padding: 40px 20px;
  color: #999;
}

/* Client Info Form */
.selected-summary {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
}

.selected-summary p {
  margin: 4px 0;
  font-size: 14px;
}

.client-info form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.client-info input {
  padding: 12px 16px;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
}

.client-info input:focus {
  border-color: #10b981;
  outline: none;
}

.submit-booking-btn {
  background: #10b981;
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-booking-btn:hover {
  background: #059669;
}

.submit-booking-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 600px) {
  .booking-modal {
    max-width: 100%;
    border-radius: 16px 16px 0 0;
    max-height: 95vh;
  }

  .date-grid {
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  }

  .time-grid {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  }
}
`,document.head.appendChild(e)}})();var lm=Array.from({length:24},(e,t)=>t),Ot=e=>e?new Date(e.replace(" ","T").replace(" -","-")):null,Je=e=>{if(!e)return null;let t=n=>String(n).padStart(2,"0");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":00"},Ao=(e,t)=>{let n=Xn(e);return t.filter(r=>{let o=Ar(r?.effective_date),a=Ar(r?.end_date);return!(o&&o>n||a&&a<n)}).sort((r,o)=>Ar(o?.effective_date)-Ar(r?.effective_date))[0]||null},jo=(e,t,n,r)=>e<r&&n<t;var Xn=e=>{let t=new Date(e);return t.setHours(0,0,0,0),t},Zn=(e,t,n)=>{let r=new Date(e);return r.setHours(t,n,0,0),r},Nn=(e,t)=>{let n=new Date(e);return n.setDate(n.getDate()+t),n},bi=e=>e?Ot(e).getHours():null,i0=(e,t=[])=>{if(!t.length)return!1;let r=(e.getDay()+6)%7;return t.includes(r)},im=(e,t,n)=>e>=t&&e<n;var _n=(e,t)=>new Date(e.getTime()+t*60*1e3);var Ar=e=>{if(!e)return null;let[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},l0=({day:e,hour:t,window:n})=>{if(!n||e<Xn(new Date))return!1;let r=Ar(n.effective_date),o=Ar(n.end_date);if(r&&r>e||o&&o<e||i0(e,n.weekends))return!1;let a=bi(n.start_time),i=bi(n.end_time);if(!im(t,a,i))return!1;let l=bi(n.break_from),s=bi(n.break_to);return!im(t,l,s)},sm=({day:e,hour:t,windows:n})=>{let r=Ao(e,n);return r?l0({day:e,hour:t,window:r}):!1};var Pn=e=>{if(!e)return"";let t=new Date(e);return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`},Ln=(e,t)=>{let[n,r]=t.split(":").map(Number),o=new Date(e);return o.setHours(n,r,0,0),Je(o)};function hu({service:e,onClose:t,onComplete:n,company_id:r}){let[o,a]=(0,M.useState)(null),[i,l]=(0,M.useState)([]),[s,u]=(0,M.useState)(null),[p,c]=(0,M.useState)(!1),[m,y]=(0,M.useState)(!1),[g,v]=(0,M.useState)({first_name:"",last_name:"",email:"",phone:""}),[w,f]=(0,M.useState)(1),h=!e.days_available||e.days_available.length===0?[]:e.days_available.map(I=>new Date(I+"T00:00:00"));(0,M.useEffect)(()=>{o&&k()},[o]);let k=async()=>{c(!0);try{let I=o.toISOString().split("T")[0],G=await fetch(`/api/employees/${e.employee.id}/frames?date=${I}&service_id=${e.id}`);if(!G.ok)throw new Error("Failed to fetch slots");let re=await G.json();l(re)}catch(I){console.error("Error fetching slots:",I),l([])}finally{c(!1)}},b=I=>{a(I),u(null),f(2)},E=I=>{u(I),f(3)},S=I=>{v({...g,[I.target.name]:I.target.value})},z=async I=>{I.preventDefault(),y(!0);try{let G=await fetch("/api/clients",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:g.first_name,last_name:g.last_name,email:g.email,phone:g.phone,company_id:r})});if(!G.ok){let Ge=await G.json(),ft=typeof Ge.errors=="string"?Ge.errors:Object.values(Ge.errors||{}).join(", ");throw new Error(ft)}let re=await G.json(),X=new Date(s.from),Se=new Date(s.to),Y={employee_id:e.employee.id,service_id:e.id,client_id:re.id,day:Je(o).split("T")[0],start_time:Je(X),end_time:Je(Se),price:parseFloat(e.price),state:"scheduled"},ne=await fetch("/api/time_slots",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Y)});if(!ne.ok){let Ge=await ne.json();throw new Error(Ge.errors||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u0456")}let Pe=await ne.json();console.log("Booking created:",Pe),n()}catch(G){console.error("Booking error:",G),alert(`\u041F\u043E\u043C\u0438\u043B\u043A\u0430: ${G.message}`)}finally{y(!1)}},H=I=>{let G=["\u041D\u0434","\u041F\u043D","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041F\u0442","\u0421\u0431"],re=["\u0441\u0456\u0447","\u043B\u044E\u0442","\u0431\u0435\u0440","\u043A\u0432\u0456","\u0442\u0440\u0430","\u0447\u0435\u0440","\u043B\u0438\u043F","\u0441\u0435\u0440","\u0432\u0435\u0440","\u0436\u043E\u0432","\u043B\u0438\u0441","\u0433\u0440\u0443"];return{day:G[I.getDay()],date:I.getDate(),month:re[I.getMonth()]}};function P(I,{decimals:G=0}={}){return new Intl.NumberFormat("uk-UA",{minimumFractionDigits:G,maximumFractionDigits:G}).format(I)+" \u0433\u0440\u043D"}let V=I=>new Date(I).toLocaleTimeString("uk-UA",{hour:"2-digit",minute:"2-digit"});return M.default.createElement("div",{className:"booking-overlay",onClick:t},M.default.createElement("div",{className:"booking-modal",onClick:I=>I.stopPropagation()},M.default.createElement("button",{className:"booking-close",onClick:t},"\xD7"),M.default.createElement("div",{className:"booking-header"},M.default.createElement("h2",null,"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 ",e.name),M.default.createElement("p",{className:"booking-subtitle"},"\u0437 ",e.employee.first_name," ",e.employee.last_name),M.default.createElement("div",{className:"booking-info"},M.default.createElement("span",null,e.duration," \u0445\u0432"),M.default.createElement("span",null,"\u2022"),M.default.createElement("span",null,P(e.price)))),M.default.createElement("div",{className:"booking-steps"},M.default.createElement("div",{className:`step ${w>=1?"active":""}`},M.default.createElement("span",{className:"step-number"},"1"),M.default.createElement("span",{className:"step-label"},"\u0414\u0430\u0442\u0430")),M.default.createElement("div",{className:`step ${w>=2?"active":""}`},M.default.createElement("span",{className:"step-number"},"2"),M.default.createElement("span",{className:"step-label"},"\u0427\u0430\u0441")),M.default.createElement("div",{className:`step ${w>=3?"active":""}`},M.default.createElement("span",{className:"step-number"},"3"),M.default.createElement("span",{className:"step-label"},"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"))),M.default.createElement("div",{className:"booking-content"},w===1&&M.default.createElement("div",{className:"date-selector"},M.default.createElement("h3",null,"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0432\u0456\u043B\u044C\u043D\u0443 \u0434\u0430\u0442\u0443"),M.default.createElement("div",{className:"date-grid"},h.map((I,G)=>{let re=H(I),X=o&&I.toDateString()===o.toDateString();return M.default.createElement("button",{key:G,className:`date-btn ${X?"selected":""}`,onClick:()=>b(I)},M.default.createElement("span",{className:"date-day"},re.day),M.default.createElement("span",{className:"date-number"},re.date),M.default.createElement("span",{className:"date-month"},re.month))}))),w===2&&M.default.createElement("div",{className:"time-selector"},M.default.createElement("button",{className:"back-btn",onClick:()=>f(1)},"\u2190 \u041D\u0430\u0437\u0430\u0434"),M.default.createElement("h3",null,"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0447\u0430\u0441 \u043D\u0430 ",o&&H(o).date," ",o&&H(o).month),p?M.default.createElement("div",{className:"loading-slots"},M.default.createElement("div",{className:"spinner"}),M.default.createElement("p",null,"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u0441\u043B\u043E\u0442\u0456\u0432...")):i.length>0?M.default.createElement("div",{className:"time-grid"},i.map((I,G)=>M.default.createElement("button",{key:G,className:`time-btn ${s===I?"selected":""}`,onClick:()=>E(I)},V(I.from)))):M.default.createElement("p",{className:"no-slots"},"\u041D\u0430 \u0446\u0435\u0439 \u0434\u0435\u043D\u044C \u043D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u0441\u043B\u043E\u0442\u0456\u0432")),w===3&&M.default.createElement("div",{className:"client-info"},M.default.createElement("button",{className:"back-btn",onClick:()=>f(2)},"\u2190 \u041D\u0430\u0437\u0430\u0434"),M.default.createElement("h3",null,"\u0412\u0430\u0448\u0456 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456"),M.default.createElement("div",{className:"selected-summary"},M.default.createElement("p",null,M.default.createElement("strong",null,"\u0414\u0430\u0442\u0430:")," ",o&&H(o).date," ",o&&H(o).month),M.default.createElement("p",null,M.default.createElement("strong",null,"\u0427\u0430\u0441:")," ",V(s.from))),M.default.createElement("form",{onSubmit:z},M.default.createElement("input",{type:"text",name:"first_name",placeholder:"\u0406\u043C'\u044F *",value:g.first_name,onChange:S,required:!0}),M.default.createElement("input",{type:"text",name:"last_name",placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 *",value:g.last_name,onChange:S,required:!0}),M.default.createElement("input",{type:"email",name:"email",placeholder:"Email *",value:g.email,onChange:S,required:!0}),M.default.createElement("input",{type:"tel",name:"phone",placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D *",value:g.phone,onChange:S,required:!0}),M.default.createElement("button",{type:"submit",className:"submit-booking-btn",disabled:m},m?"\u041E\u0431\u0440\u043E\u0431\u043A\u0430...":"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441"))))))}(function(){if(!document.getElementById("4df30cd10977c3dd4650bf5d8f8871fd499bde96b99924c59d53e648c4d93705")){var e=document.createElement("style");e.id="4df30cd10977c3dd4650bf5d8f8871fd499bde96b99924c59d53e648c4d93705",e.textContent=`/* Scoped styles for CompanyWebsite - No conflicts with global app.css */

/* Reset only for company website */
.company-website * {
  box-sizing: border-box;
}

.company-website {
  min-height: 100vh;
  background: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", sans-serif;
  margin: -24px; /* Counteract body padding from app.css */
  padding: 0;
}

/* Loading & Error States */
.company-website .website-loading,
.company-website .website-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
}

.company-website .spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1a1a1a;
  border-radius: 50%;
  animation: cw-spin 1s linear infinite;
}

@keyframes cw-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Header */
.company-website .site-header {
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.company-website .header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.company-website .logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.company-website .header-logo {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
}

.company-website .logo-section h1 {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
  letter-spacing: normal;
}

.company-website .book-now-btn {
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: none;
}

.company-website .book-now-btn:hover {
  background: #333;
}

/* Hero Banner */
.company-website .hero-banner {
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 60px 24px;
}

.company-website .hero-content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.company-website .hero-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: #1a1a1a;
  letter-spacing: -1px;
}

.company-website .hero-location {
  font-size: 16px;
  color: #666;
  margin: 0 0 24px 0;
}

.company-website .hero-actions {
  display: flex;
  gap: 12px;
}

.company-website .primary-btn {
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: none;
}

.company-website .primary-btn:hover {
  background: #333;
}

/* Tab Navigation */
.company-website .tab-navigation {
  background: white;
  border-bottom: 1px solid #e5e5e5;
  position: sticky;
  top: 72px;
  z-index: 90;
}

.company-website .tab-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  gap: 32px;
  overflow-x: auto;
}

.company-website .tab-btn {
  background: none;
  border: none;
  padding: 16px 0;
  font-size: 15px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition:
    color 0.2s,
    border-color 0.2s;
  white-space: nowrap;
  box-shadow: none;
  position: relative;
  border-radius: 0;
}

.company-website .tab-btn:hover {
  color: #1a1a1a;
  background: none;
}

.company-website .tab-btn.active {
  color: #1a1a1a;
  border-bottom-color: #10b981;
}

/* Main Content */
.company-website .main-content {
  min-height: 600px;
  padding: 40px 0;
}

.company-website .content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.company-website .content-container h2 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 32px 0;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

/* Services Content */
.company-website .service-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
}

.company-website .service-item {
  background: white;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  transition: background 0.2s;
}

.company-website .service-item:hover {
  background: #fafafa;
}

.company-website .service-info {
  flex: 1;
}

.company-website .service-name {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #1a1a1a;
  letter-spacing: normal;
}

.company-website .service-description {
  font-size: 14px;
  color: #666;
  margin: 0 0 12px 0;
  line-height: 1.5;
}

.company-website .service-meta {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: #999;
}

.company-website .service-duration::before {
  content: "\u23F1\uFE0F ";
}

.company-website .service-provider::before {
  content: "\u{1F464} ";
}

.company-website .service-booking {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  min-width: 140px;
}

.company-website .service-price {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
}

.company-website .book-service-btn {
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
  box-shadow: none;
}

.company-website .book-service-btn:hover {
  background: #333;
}

/* Team Content */
.company-website .team-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.company-website .team-item {
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 24px;
  box-shadow: none;
}

.company-website .team-member-info {
  display: flex;
  gap: 20px;
  align-items: start;
}

.company-website .member-photo {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}

.company-website .member-photo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.company-website .photo-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
}

.company-website .member-details h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #1a1a1a;
  letter-spacing: normal;
}

.company-website .member-bio {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 12px 0;
}

.company-website .member-services-list {
  margin-top: 12px;
}

.company-website .services-label {
  font-size: 13px;
  font-weight: 600;
  color: #999;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.company-website .member-services-list ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.company-website .member-services-list li {
  background: #f5f5f5;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  color: #666;
}

/* About Content */
.company-website .about-details {
  display: grid;
  gap: 40px;
}

.company-website .about-description h3,
.company-website .contact-details h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #1a1a1a;
  letter-spacing: normal;
}

.company-website .about-description p {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin: 0;
}

.company-website .contact-details {
  background: #fafafa;
  padding: 24px;
  border-radius: 12px;
}

.company-website .contact-row {
  display: flex;
  padding: 16px 0;
  border-bottom: 1px solid #e5e5e5;
}

.company-website .contact-row:last-child {
  border-bottom: none;
}

.company-website .contact-label {
  font-size: 14px;
  font-weight: 600;
  color: #999;
  min-width: 120px;
}

.company-website .contact-value {
  font-size: 14px;
  color: #1a1a1a;
}

.company-website .contact-value a {
  color: #1a1a1a;
  text-decoration: none;
  font-weight: normal;
}

.company-website .contact-value a:hover {
  text-decoration: underline;
  color: #1a1a1a;
}

/* Gallery Content */
.company-website .gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.company-website .gallery-item {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e5e5;
}

.company-website .gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.company-website .gallery-caption {
  padding: 12px;
  background: white;
  margin: 0;
  font-size: 13px;
  color: #666;
}

/* Empty Message */
.company-website .empty-message {
  text-align: center;
  padding: 60px 20px;
  color: #999;
  font-size: 16px;
}

/* Footer */
.company-website .site-footer {
  background: #1a1a1a;
  color: white;
  padding: 40px 0;
  margin-top: 80px;
}

.company-website .footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.company-website .footer-container p {
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
}

/* Booking Modal */
.company-website .modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.company-website .modal-content {
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.company-website .modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 32px;
  color: #999;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 32px;
  height: 32px;
  box-shadow: none;
}

.company-website .modal-close:hover {
  color: #1a1a1a;
  background: none;
}

.company-website .modal-content h3 {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: #1a1a1a;
  letter-spacing: normal;
}

.company-website .modal-description {
  font-size: 14px;
  color: #666;
  margin: 0 0 24px 0;
  line-height: 1.6;
}

.company-website .modal-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  padding: 20px;
  background: #fafafa;
  border-radius: 12px;
}

.company-website .detail-item {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.company-website .detail-item span {
  color: #666;
}

.company-website .detail-item strong {
  color: #1a1a1a;
}

.company-website .coming-soon {
  text-align: center;
  padding: 20px;
  background: #fff8e1;
  border-radius: 8px;
  margin: 0 0 24px 0;
  font-size: 14px;
  color: #f57c00;
}

.company-website .modal-btn {
  width: 100%;
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: none;
}

.company-website .modal-btn:hover {
  background: #333;
}

/* Responsive */
@media (max-width: 768px) {
  .company-website .hero-title {
    font-size: 32px;
  }

  .company-website .service-item {
    flex-direction: column;
  }

  .company-website .service-booking {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .company-website .team-member-info {
    flex-direction: column;
    text-align: center;
  }

  .company-website .member-photo {
    margin: 0 auto;
  }

  .company-website .member-services-list ul {
    justify-content: center;
  }

  .company-website .contact-row {
    flex-direction: column;
    gap: 4px;
  }

  .company-website .tab-container {
    gap: 20px;
  }

  .company-website .gallery-grid {
    grid-template-columns: 1fr;
  }
}

/* Image Banner - Fresha style */
.image-banner {
  background: white;
  padding: 0;
  margin: 0;
}

.image-banner-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3px;
  max-width: 100%;
  height: 500px;
}

.banner-image-wrapper {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.banner-image-wrapper:nth-child(1) {
  grid-column: 1;
  grid-row: 1 / 3;
  overflow: hidden;
  position: relative;
  height: 100%;
}

.banner-image-wrapper:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
  overflow: hidden;
  position: relative;
  height: 100%;
}

.banner-image-wrapper:nth-child(3) {
  grid-column: 2;
  grid-row: 2;
  overflow: hidden;
  position: relative;
  height: 100%;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.banner-image-wrapper:hover .banner-image {
  transform: scale(1.05);
}

.image-banner-container:has(.banner-image-wrapper:first-child:last-child) {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 500px;
}

.image-banner-container:has(.banner-image-wrapper:first-child:last-child)
  .banner-image-wrapper:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}

.image-banner-container:has(.banner-image-wrapper:nth-child(2):last-child) {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  height: 400px;
}

.image-banner-container:has(.banner-image-wrapper:nth-child(2):last-child)
  .banner-image-wrapper:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}

.image-banner-container:has(.banner-image-wrapper:nth-child(2):last-child)
  .banner-image-wrapper:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
}

/* Responsive - stack vertically on mobile */
@media (max-width: 768px) {
  .company-website .image-banner-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    height: auto;
    gap: 1px;
  }

  .company-website .banner-image-wrapper:nth-child(1),
  .company-website .banner-image-wrapper:nth-child(2),
  .company-website .banner-image-wrapper:nth-child(3) {
    grid-column: 1;
    grid-row: auto;
    height: 250px;
  }

  .company-website
    .image-banner-container:has(.banner-image-wrapper:first-child:last-child),
  .company-website
    .image-banner-container:has(.banner-image-wrapper:nth-child(2):last-child) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
  }

  .company-website
    .image-banner-container:has(.banner-image-wrapper:nth-child(2):last-child)
    .banner-image-wrapper {
    height: 250px;
  }
}

/* Tablet - adjust proportions */
@media (min-width: 769px) and (max-width: 1024px) {
  .company-website .image-banner-container {
    height: 400px;
  }
}
`,document.head.appendChild(e)}})();function gu(){let{companyName:e}=en(),[t,n]=(0,D.useState)(null),[r,o]=(0,D.useState)([]),[a,i]=(0,D.useState)(!0),[l,s]=(0,D.useState)(null),[u,p]=(0,D.useState)(null),[c,m]=(0,D.useState)("services"),[y,g]=(0,D.useState)(!1);(0,D.useEffect)(()=>{t&&(document.title=`\u0404 \u0432\u0456\u043A\u043E\u043D\u0446\u0435 \u2014 ${t?.name}`)},[t]),(0,D.useEffect)(()=>{e&&(async()=>{try{i(!0);let E=await fetch(`/api/companies/${e}`);if(!E.ok)throw new Error("Company not found");let S=await E.json();n(S.company),o(S.employees)}catch(E){s(E.message)}finally{i(!1)}})()},[e]);let v=b=>{p(b),g(!0)},w=()=>{g(!1),p(null)},f=()=>{g(!1),p(null),alert("\u0417\u0430\u043F\u0438\u0441 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E!")};if(a)return D.default.createElement("div",{className:"website-loading"},D.default.createElement("div",{className:"spinner"}),D.default.createElement("p",null,"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."));if(l)return D.default.createElement("div",{className:"website-error"},D.default.createElement("h2",null,"\u{1F614} \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"),D.default.createElement("p",null,l));if(!t)return null;let d=r?.flatMap(b=>b.services?.map(E=>({...E,employee:b}))||[])||[],h=b=>b?parseFloat(b).toFixed(0):"0",k=t.images?t.images.slice(0,3):[];return D.default.createElement("div",{className:"company-website"},D.default.createElement("header",{className:"site-header"},D.default.createElement("div",{className:"header-container"},D.default.createElement("div",{className:"logo-section"},t.logo&&D.default.createElement("img",{src:"/images"+t.logo,alt:t.name,className:"header-logo"}),D.default.createElement("h1",null,t.name)),D.default.createElement("button",{className:"book-now-btn",onClick:()=>{m("services"),document.querySelector(".tab-container")?.scrollIntoView({behavior:"smooth"})}},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F"))),k.length>0&&D.default.createElement("section",{className:"image-banner"},D.default.createElement("div",{className:"image-banner-container"},k.map((b,E)=>D.default.createElement("div",{key:E,className:"banner-image-wrapper"},D.default.createElement("img",{src:"/images"+b,alt:`${t.name} - \u0444\u043E\u0442\u043E ${E+1}`,className:"banner-image"}))))),D.default.createElement("nav",{className:"tab-navigation"},D.default.createElement("div",{className:"tab-container"},D.default.createElement("button",{className:`tab-btn ${c==="services"?"active":""}`,onClick:()=>m("services")},"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),D.default.createElement("button",{className:`tab-btn ${c==="team"?"active":""}`,onClick:()=>m("team")},"\u041A\u043E\u043C\u0430\u043D\u0434\u0430"),D.default.createElement("button",{className:`tab-btn ${c==="about"?"active":""}`,onClick:()=>m("about")},"\u041F\u0440\u043E \u043D\u0430\u0441"))),D.default.createElement("main",{className:"main-content"},D.default.createElement("div",{className:"content-container"},c==="services"&&D.default.createElement("section",{className:"services-content"},D.default.createElement("h2",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),d.length>0?D.default.createElement("div",{className:"service-list"},d.map((b,E)=>D.default.createElement("div",{key:E,className:"service-item"},D.default.createElement("div",{className:"service-info"},D.default.createElement("h3",{className:"service-name"},b.name),D.default.createElement("p",{className:"service-description"},b.description),D.default.createElement("div",{className:"service-meta"},D.default.createElement("span",{className:"service-duration"},b.duration," \u0445\u0432"),D.default.createElement("span",{className:"service-provider"},"\u0437 ",b.employee.first_name," ",b.employee.last_name))),D.default.createElement("div",{className:"service-booking"},D.default.createElement("div",{className:"service-price"},h(b.price)," \u0433\u0440\u043D"),D.default.createElement("button",{className:"book-service-btn",onClick:()=>v(b)},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F"))))):D.default.createElement("p",{className:"empty-message"},"\u041D\u0430\u0440\u0430\u0437\u0456 \u043D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u043F\u043E\u0441\u043B\u0443\u0433")),c==="team"&&D.default.createElement("section",{className:"team-content"},D.default.createElement("h2",null,"\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430"),r.length>0?D.default.createElement("div",{className:"team-list"},r.map(b=>D.default.createElement("div",{key:b.id,className:"team-item"},D.default.createElement("div",{className:"team-member-info"},D.default.createElement("div",{className:"member-photo"},b.image?D.default.createElement("img",{src:b.image,alt:`${b.first_name} ${b.last_name}`}):D.default.createElement("div",{className:"photo-placeholder"},b.first_name[0],b.last_name[0])),D.default.createElement("div",{className:"member-details"},D.default.createElement("h3",null,b.first_name," ",b.last_name),b.description&&D.default.createElement("p",{className:"member-bio"},b.description),b.services&&b.services.length>0&&D.default.createElement("div",{className:"member-services-list"},D.default.createElement("p",{className:"services-label"},"\u0421\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F:"),D.default.createElement("ul",null,b.services.map((E,S)=>D.default.createElement("li",{key:S},E.name))))))))):D.default.createElement("p",{className:"empty-message"},"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u044F")),c==="about"&&D.default.createElement("section",{className:"about-content"},D.default.createElement("h2",null,"\u041F\u0440\u043E \u043D\u0430\u0441"),D.default.createElement("div",{className:"about-details"},D.default.createElement("div",{className:"about-description"},D.default.createElement("h3",null,"\u041E\u043F\u0438\u0441"),D.default.createElement("p",null,t.description||"\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457!")),D.default.createElement("div",{className:"contact-details"},D.default.createElement("h3",null,"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"),t.address&&D.default.createElement("div",{className:"contact-row"},D.default.createElement("span",{className:"contact-label"},"\u0410\u0434\u0440\u0435\u0441\u0430"),D.default.createElement("span",{className:"contact-value"},t.address.street_line1,t.address.street_line2&&`, ${t.address.street_line2}`,D.default.createElement("br",null),t.address.city,", ",t.address.region," ",t.address.postal)),t.phone&&D.default.createElement("div",{className:"contact-row"},D.default.createElement("span",{className:"contact-label"},"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),D.default.createElement("span",{className:"contact-value"},D.default.createElement("a",{href:`tel:${t.phone}`},t.phone))),t.email&&D.default.createElement("div",{className:"contact-row"},D.default.createElement("span",{className:"contact-label"},"Email"),D.default.createElement("span",{className:"contact-value"},D.default.createElement("a",{href:`mailto:${t.email}`},t.email))),t.website&&D.default.createElement("div",{className:"contact-row"},D.default.createElement("span",{className:"contact-label"},"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"),D.default.createElement("span",{className:"contact-value"},D.default.createElement("a",{href:t.website,target:"_blank",rel:"noopener noreferrer"},t.website," ")))))))),D.default.createElement("footer",{className:"site-footer"},D.default.createElement("div",{className:"footer-container"},D.default.createElement("p",null,"\xA9 ",new Date().getFullYear()," ",t.name,". \u0412\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u043E."))),y&&u&&D.default.createElement(hu,{service:u,onClose:w,onComplete:f,company_id:t.id}))}var ue=J(Q());var N=J(Q());(function(){if(!document.getElementById("359a90f8c729210dbbfb096928392417ed7d6dd27b14727501cfa65f4edc30ad")){var e=document.createElement("style");e.id="359a90f8c729210dbbfb096928392417ed7d6dd27b14727501cfa65f4edc30ad",e.textContent=`.form__error {
  background: #ffd7d2;
  border-left: 4px solid #d57a66;
  padding: 10px 14px;
  border-radius: var(--radius);
  margin-bottom: 20px;
  color: #5a2a23;
  font-size: 15px;
}

.form__success {
  background: #d4edda;
  border-left: 4px solid #3c763d;
  padding: 10px 14px;
  border-radius: var(--radius);
  margin-bottom: 20px;
  color: #3c763d;
  font-size: 15px;
}

.field-error {
  color: #b24a3b;
  font-size: 14px;
}

input.error {
  border-color: #d57a66;
}

.form-section {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.form-section:last-of-type {
  border-bottom: none;
}

.form-section h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text);
}

/* Services Section */
.services-section {
  margin-top: 32px;
}

.services-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.services-header h3 {
  margin: 0;
}

.btn-add-service {
  background: var(--accent);
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: var(--shadow);
}

.btn-add-service:hover {
  background: var(--accent-muted);
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

/* Service Card */
.service-card {
  background: var(--bg-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  box-shadow: var(--shadow);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(80, 70, 60, 0.12);
}

.service-card-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 8px;
}

.service-card-header h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  flex: 1;
}

.service-card-actions {
  display: flex;
  gap: 6px;
}

.btn-icon-edit,
.btn-icon-delete {
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 6px;
  transition: background 0.2s;
  line-height: 1;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon-edit {
  color: #1976d2;
}

.btn-icon-edit:hover {
  background: #e3f2fd;
}

.btn-icon-delete {
  color: #d32f2f;
}

.btn-icon-delete:hover {
  background: #ffebee;
}

.service-description {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  min-height: 40px;
}

.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

.service-price {
  font-size: 18px;
  font-weight: 700;
  color: var(--accent);
}

.service-duration {
  font-size: 14px;
  color: #999;
}

.service-duration::before {
  content: "\u23F1\uFE0F ";
}

/* Empty State */
.empty-services {
  text-align: center;
  padding: 40px 20px;
  background: var(--bg-soft);
  border: 2px dashed var(--border);
  border-radius: var(--radius);
}

.empty-services p {
  margin: 0 0 16px 0;
  color: #999;
  font-size: 15px;
}

.btn-add-first-service {
  background: var(--accent);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-add-first-service:hover {
  background: var(--accent-muted);
}

/* Responsive */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .services-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .btn-add-service {
    width: 100%;
  }
}

/* Logo Upload Section */
.logo-preview {
  margin-bottom: 16px;
  text-align: center;
}

.logo-preview img {
  max-width: 200px;
  max-height: 200px;
  border-radius: 12px;
  border: 2px solid var(--border);
  padding: 8px;
  background: white;
  display: block;
  margin: 0 auto 12px;
  object-fit: contain;
}

.btn-remove-logo {
  background: #ffebee;
  color: #d32f2f;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-remove-logo:hover {
  background: #ffcdd2;
}

/* File Input Styling */
.file-input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px;
  background: var(--bg-soft);
  border: 2px dashed var(--border);
  border-radius: var(--radius);
  margin-bottom: 16px;
}

.file-input {
  display: none;
}

.file-input-label {
  display: inline-block;
  padding: 12px 24px;
  background: var(--accent);
  color: white;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: var(--shadow);
}

.file-input-label:hover {
  background: var(--accent-muted);
}

.file-input-hint {
  font-size: 13px;
  color: #999;
}

/* Form Sections */
.form-section {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.form-section:last-of-type {
  border-bottom: none;
}

.form-section h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text);
}

/* Images Section */
.images-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.images-header h3 {
  margin: 0;
}

.btn-add-image {
  display: inline-block;
  padding: 8px 16px;
  background: var(--accent);
  color: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: var(--shadow);
}

.btn-add-image:hover {
  background: var(--accent-muted);
}

.images-grid {
  margin-bottom: 24px;
}

.images-subtitle {
  font-size: 14px;
  font-weight: 600;
  color: #666;
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.images-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}

.image-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid var(--border);
  background: white;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.image-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.image-item.new-image {
  border-color: var(--accent);
  border-style: dashed;
}

.image-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
}

.btn-remove-image {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(211, 47, 47, 0.9);
  color: white;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 25%;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.btn-remove-image:hover {
  background: rgba(211, 47, 47, 1);
}

.image-name {
  display: block;
  padding: 8px;
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #f5f5f5;
}

.empty-images {
  text-align: center;
  padding: 40px 20px;
  background: var(--bg-soft);
  border: 2px dashed var(--border);
  border-radius: var(--radius);
}

.empty-images p {
  margin: 0 0 16px 0;
  color: #999;
  font-size: 15px;
}

.btn-add-first-image {
  display: inline-block;
  padding: 12px 24px;
  background: var(--accent);
  color: white;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-add-first-image:hover {
  background: var(--accent-muted);
}

/* Responsive */
@media (max-width: 768px) {
  .images-list {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 12px;
  }

  .image-item img {
    height: 120px;
  }

  .images-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
/* Categories Section */
.selected-categories-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.category-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #667eea;
  color: white;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

.category-tag-remove {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition: background 0.2s ease;
}

.category-tag-remove:hover {
  background: rgba(255, 255, 255, 0.2);
}

.category-search-wrapper {
  position: relative;
}

.category-search-input {
  width: 100%;
  padding: 18px 16px;
  font-size: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  transition: border-color 0.2s ease;
}

.category-search-input:focus {
  outline: none;
  border-color: #667eea;
}

.category-dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  max-height: 300px;
  overflow-y: auto;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.category-dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.2s ease;
  border-bottom: 1px solid #f3f4f6;
}

.category-dropdown-item:last-child {
  border-bottom: none;
}

.category-dropdown-item:hover {
  background: #f9fafb;
}

.category-dropdown-item.selected {
  background: #eff6ff;
  color: #667eea;
  font-weight: 500;
}

.category-dropdown-item .checkmark {
  color: #667eea;
  font-weight: bold;
}

.category-dropdown-empty {
  padding: 20px 16px;
  text-align: center;
  color: #9ca3af;
}

.helper-text {
  margin-top: 8px;
  font-size: 14px;
  color: #6b7280;
}

/* Form Select (for cities) */
.form-select {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.form-select:focus {
  outline: none;
  border-color: #667eea;
}

.form-select:hover {
  border-color: #d1d5db;
}

/* Responsive */
@media (max-width: 768px) {
  .selected-categories-tags {
    gap: 6px;
  }

  .category-tag {
    font-size: 13px;
    padding: 5px 10px;
  }
}

.form-actions .btn-danger {
  margin-left: auto;
  background: transparent !important;
  color: #aaa !important;
  border: 1.5px solid #ddd !important;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 400 !important;
  transition: all 0.25s ease;
  opacity: 0.55;
  box-shadow: none !important;
}

.form-actions .btn-danger:hover {
  opacity: 1;
  color: #c0392b !important;
  border-color: #c0392b !important;
  background: rgba(192, 57, 43, 0.06) !important;
}
.delete-toggle {
  cursor: pointer;
  color: #bbb;
  font-size: 0.85rem;
  font-weight: 400;
  user-select: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s ease;
  margin-bottom: 8px;
}

.delete-toggle:hover {
  color: #c0392b;
}
.delete-section {
  display: flex;
  align-items: center;
  gap: 16px;
}
`,document.head.appendChild(e)}})();var ki=["\u041F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0411\u0430\u0440\u0431\u0435\u0440\u0448\u043E\u043F","\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0430 \u043F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0416\u0456\u043D\u043E\u0447\u0430 \u043F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0414\u0438\u0442\u044F\u0447\u0430 \u043F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0421\u0442\u0440\u0438\u0436\u043A\u0430","\u0423\u043A\u043B\u0430\u0434\u043A\u0430 \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041C\u0435\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0411\u0430\u043B\u0430\u044F\u0436","\u041E\u043C\u0431\u0440\u0435","\u0428\u0430\u0442\u0443\u0448","\u041A\u043E\u043B\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041E\u0441\u0432\u0456\u0442\u043B\u0435\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041A\u0435\u0440\u0430\u0442\u0438\u043D\u043E\u0432\u0435 \u0432\u0438\u043F\u0440\u044F\u043C\u043B\u0435\u043D\u043D\u044F","\u0411\u043E\u0442\u043E\u043A\u0441 \u0434\u043B\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041B\u0430\u043C\u0456\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0425\u0456\u043C\u0456\u0447\u043D\u0430 \u0437\u0430\u0432\u0438\u0432\u043A\u0430","\u0411\u0456\u043E\u0437\u0430\u0432\u0438\u0432\u043A\u0430","\u041A\u0430\u0440\u0432\u0456\u043D\u0433","\u0410\u0444\u0440\u043E\u043F\u043B\u0435\u0442\u0456\u043D\u043D\u044F","\u041F\u043B\u0435\u0442\u0456\u043D\u043D\u044F \u043A\u0456\u0441","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0456 \u0437\u0430\u0447\u0456\u0441\u043A\u0438","\u0412\u0435\u0447\u0456\u0440\u043D\u0456 \u0437\u0430\u0447\u0456\u0441\u043A\u0438","\u0414\u0440\u0435\u0434\u0438","\u0411\u0440\u0435\u0439\u0434\u0438","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041A\u0430\u043F\u0441\u0443\u043B\u044C\u043D\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u0421\u0442\u0440\u0456\u0447\u043A\u043E\u0432\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u0440\u0438\u0445\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u043A\u0456\u0440\u0438 \u0433\u043E\u043B\u043E\u0432\u0438","\u041C\u0435\u0437\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041F\u043B\u0430\u0437\u043C\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041C\u0430\u043D\u0456\u043A\u044E\u0440","\u041F\u0435\u0434\u0438\u043A\u044E\u0440","\u0410\u043F\u0430\u0440\u0430\u0442\u043D\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0404\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u041A\u043E\u043C\u0431\u0456\u043D\u043E\u0432\u0430\u043D\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0410\u043F\u0430\u0440\u0430\u0442\u043D\u0438\u0439 \u043F\u0435\u0434\u0438\u043A\u044E\u0440","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u043F\u0435\u0434\u0438\u043A\u044E\u0440","\u041C\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u043F\u0435\u0434\u0438\u043A\u044E\u0440","\u0421\u041F\u0410-\u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0421\u041F\u0410-\u043F\u0435\u0434\u0438\u043A\u044E\u0440","\u041F\u043E\u043A\u0440\u0438\u0442\u0442\u044F \u0433\u0435\u043B\u044C-\u043B\u0430\u043A\u043E\u043C","\u0417\u043C\u0456\u0446\u043D\u0435\u043D\u043D\u044F \u043D\u0456\u0433\u0442\u0456\u0432","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0456\u0433\u0442\u0456\u0432","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0435\u043B\u0435\u043C","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043A\u0440\u0438\u043B\u043E\u043C","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043D\u0456\u0433\u0442\u0456\u0432","\u0414\u0438\u0437\u0430\u0439\u043D \u043D\u0456\u0433\u0442\u0456\u0432","\u041D\u0435\u0439\u043B-\u0430\u0440\u0442","\u0424\u0440\u0435\u043D\u0447","\u041E\u043C\u0431\u0440\u0435 \u043D\u0430 \u043D\u0456\u0433\u0442\u044F\u0445","\u0421\u0442\u0435\u043C\u043F\u0456\u043D\u0433","\u041F\u0430\u0440\u0430\u0444\u0456\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0440\u0443\u043A","\u041F\u0430\u0440\u0430\u0444\u0456\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u043D\u0456\u0433","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0440\u043E\u0441\u0448\u043E\u0433\u043E \u043D\u0456\u0433\u0442\u044F","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043C\u043E\u0437\u043E\u043B\u0456\u0432","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043D\u0430\u0442\u043E\u043F\u0442\u0438\u0448\u0456\u0432","\u0421\u041F\u0410","\u0421\u041F\u0410-\u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438","\u0425\u0430\u043C\u0430\u043C","\u0422\u0443\u0440\u0435\u0446\u044C\u043A\u0430 \u043B\u0430\u0437\u043D\u044F","\u0424\u0456\u043D\u0441\u044C\u043A\u0430 \u0441\u0430\u0443\u043D\u0430","\u0406\u043D\u0444\u0440\u0430\u0447\u0435\u0440\u0432\u043E\u043D\u0430 \u0441\u0430\u0443\u043D\u0430","\u041A\u0435\u0434\u0440\u043E\u0432\u0430 \u0431\u043E\u0447\u043A\u0430","\u0413\u0456\u0434\u0440\u043E\u043C\u0430\u0441\u0430\u0436","\u0424\u043B\u043E\u0430\u0442\u0438\u043D\u0433","\u0422\u0430\u043B\u0430\u0441\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0410\u0440\u043E\u043C\u0430\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0421\u0442\u043E\u0443\u043D\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041C\u0430\u0441\u0430\u0436","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0420\u043E\u0437\u0441\u043B\u0430\u0431\u043B\u044E\u044E\u0447\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041B\u0456\u043A\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041C\u0430\u0441\u0430\u0436 \u0441\u043F\u0438\u043D\u0438","\u041C\u0430\u0441\u0430\u0436 \u0448\u0438\u0457","\u041C\u0430\u0441\u0430\u0436 \u0433\u043E\u043B\u043E\u0432\u0438","\u041C\u0430\u0441\u0430\u0436 \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u0421\u043A\u0443\u043B\u044C\u043F\u0442\u0443\u0440\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436 \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u0411\u0443\u043A\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041C\u0430\u0441\u0430\u0436 \u0432\u0441\u044C\u043E\u0433\u043E \u0442\u0456\u043B\u0430","\u0410\u043D\u0442\u0438\u0446\u0435\u043B\u044E\u043B\u0456\u0442\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041B\u0456\u043C\u0444\u043E\u0434\u0440\u0435\u043D\u0430\u0436\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0412\u0430\u043A\u0443\u0443\u043C\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041C\u0430\u0441\u0430\u0436 \u0431\u0430\u043D\u043A\u0430\u043C\u0438","\u041C\u0435\u0434\u043E\u0432\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0422\u0430\u0439\u0441\u044C\u043A\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0411\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0410\u044E\u0440\u0432\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0428\u0432\u0435\u0434\u0441\u044C\u043A\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0428\u0456\u0430\u0446\u0443","\u041C\u0430\u0441\u0430\u0436 \u0433\u0430\u0440\u044F\u0447\u0438\u043C \u043A\u0430\u043C\u0456\u043D\u043D\u044F\u043C","\u041C\u0430\u0441\u0430\u0436 \u0431\u0430\u043C\u0431\u0443\u043A\u043E\u0432\u0438\u043C\u0438 \u043F\u0430\u043B\u0438\u0447\u043A\u0430\u043C\u0438","\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041C\u0430\u0441\u0430\u0436 \u0434\u043B\u044F \u0432\u0430\u0433\u0456\u0442\u043D\u0438\u0445","\u041F\u043E\u0441\u0442\u0456\u0437\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u043D\u0430 \u0440\u0435\u043B\u0430\u043A\u0441\u0430\u0446\u0456\u044F","\u041C\u0456\u043E\u0444\u0430\u0441\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u043B\u0456\u0437","\u041E\u0441\u0442\u0435\u043E\u043F\u0430\u0442\u0456\u044F","\u041C\u0430\u043D\u0443\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0425\u0456\u0440\u043E\u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430","\u0420\u0435\u0444\u043B\u0435\u043A\u0441\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0406\u0433\u043B\u043E\u0440\u0435\u0444\u043B\u0435\u043A\u0441\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0410\u043A\u0443\u043F\u0443\u043D\u043A\u0442\u0443\u0440\u0430","\u0412\u0456\u0441\u0446\u0435\u0440\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u0427\u0438\u0441\u0442\u043A\u0430 \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u041C\u0435\u0445\u0430\u043D\u0456\u0447\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u0412\u0430\u043A\u0443\u0443\u043C\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u0410\u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u041A\u043E\u043C\u0431\u0456\u043D\u043E\u0432\u0430\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u041F\u0456\u043B\u0456\u043D\u0433","\u0425\u0456\u043C\u0456\u0447\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041C\u0435\u0445\u0430\u043D\u0456\u0447\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041B\u0430\u0437\u0435\u0440\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u0420\u0435\u0442\u0438\u043D\u043E\u0454\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u0413\u043B\u0456\u043A\u043E\u043B\u0435\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041C\u0438\u0433\u0434\u0430\u043B\u0435\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041C\u043E\u043B\u043E\u0447\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u0421\u0430\u043B\u0456\u0446\u0438\u043B\u043E\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041F\u0420\u0425-\u043F\u0456\u043B\u0456\u043D\u0433","\u0414\u0436\u0435\u0441\u0441\u043D\u0435\u0440\u0430 \u043F\u0456\u043B\u0456\u043D\u0433","\u0410\u043B\u043C\u0430\u0437\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041A\u043E\u0440\u0430\u043B\u043E\u0432\u0430 \u0448\u043B\u0456\u0444\u043E\u0432\u043A\u0430","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u043E\u0431\u043B\u0438\u0447\u0447\u044F\u043C","\u0417\u0432\u043E\u043B\u043E\u0436\u0443\u044E\u0447\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u0416\u0438\u0432\u0438\u043B\u044C\u043D\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u041E\u0447\u0438\u0449\u0443\u044E\u0447\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u041F\u0440\u043E\u0442\u0438\u0437\u0430\u043F\u0430\u043B\u044C\u043D\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u041F\u0440\u043E\u0442\u0438\u0441\u0442\u0430\u0440\u0456\u043D\u0433\u043E\u0432\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u041B\u0456\u0444\u0442\u0438\u043D\u0433-\u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u0410\u043B\u044C\u0433\u0456\u043D\u0430\u0442\u043D\u0430 \u043C\u0430\u0441\u043A\u0430","\u041A\u043E\u043B\u0430\u0433\u0435\u043D\u043E\u0432\u0430 \u043C\u0430\u0441\u043A\u0430","\u0412\u0443\u0433\u0456\u043B\u044C\u043D\u0430 \u043C\u0430\u0441\u043A\u0430","\u0417\u043E\u043B\u043E\u0442\u0430 \u043C\u0430\u0441\u043A\u0430","\u0421\u0440\u0456\u0431\u043D\u0430 \u043C\u0430\u0441\u043A\u0430","\u0411\u0456\u043E\u0446\u0435\u043B\u044E\u043B\u043E\u0437\u043D\u0430 \u043C\u0430\u0441\u043A\u0430","\u041F\u0430\u0440\u0430\u0444\u0456\u043D\u043E\u0432\u0430 \u043C\u0430\u0441\u043A\u0430","\u0406\u043D'\u0454\u043A\u0446\u0456\u0457 \u043A\u0440\u0430\u0441\u0438","\u0411\u043E\u0442\u043E\u043A\u0441","\u0414\u0438\u0441\u043F\u043E\u0440\u0442","\u041A\u0441\u0435\u043E\u043C\u0456\u043D","\u0424\u0456\u043B\u0435\u0440\u0438","\u0413\u0456\u0430\u043B\u0443\u0440\u043E\u043D\u043E\u0432\u0430 \u043A\u0438\u0441\u043B\u043E\u0442\u0430","\u041A\u043E\u043D\u0442\u0443\u0440\u043D\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0417\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u043D\u044F \u0433\u0443\u0431","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043D\u043E\u0441\u043E\u0433\u0443\u0431\u043D\u0438\u0445 \u0441\u043A\u043B\u0430\u0434\u043E\u043A","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043D\u043E\u0441\u0430","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043F\u0456\u0434\u0431\u043E\u0440\u0456\u0434\u0434\u044F","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0441\u043A\u0443\u043B","\u0411\u0456\u043E\u0440\u0435\u0432\u0456\u0442\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u041C\u0435\u0437\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u041F\u043B\u0430\u0437\u043C\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u041F\u043B\u0430\u0437\u043C\u043E\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0411\u0456\u043E\u0430\u0440\u043C\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u0435\u0434\u0435\u0440\u043C\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0411\u0456\u043E\u0440\u0435\u043F\u0430\u0440\u0430\u0446\u0456\u044F","\u041F\u043E\u043B\u0456\u0444\u043E\u0441\u0444\u0430\u0442\u043D\u0456 \u043D\u0438\u0442\u043A\u0438","\u041C\u0435\u0437\u043E\u043D\u0438\u0442\u043A\u0438","\u041D\u0438\u0442\u043A\u043E\u0432\u0438\u0439 \u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0410\u043F\u0430\u0440\u0430\u0442\u043D\u0430 \u043A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F","RF-\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0420\u0430\u0434\u0456\u043E\u0447\u0430\u0441\u0442\u043E\u0442\u043D\u0438\u0439 \u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0438\u0439 SMAS-\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0438\u0439 \u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0424\u043E\u043D\u043E\u0444\u043E\u0440\u0435\u0437","\u041C\u0456\u043A\u0440\u043E\u0441\u0442\u0440\u0443\u043C\u043E\u0432\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0414\u0430\u0440\u0441\u043E\u043D\u0432\u0430\u043B\u044C","\u041C\u0456\u043E\u0441\u0442\u0438\u043C\u0443\u043B\u044F\u0446\u0456\u044F","\u0413\u0430\u043B\u044C\u0432\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F","\u0406\u043E\u043D\u043E\u0444\u043E\u0440\u0435\u0437","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u043E\u0440\u0430\u0446\u0456\u044F","\u041A\u0440\u0456\u043E\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u041A\u0440\u0456\u043E\u043C\u0430\u0441\u0430\u0436","\u0412\u0430\u043A\u0443\u0443\u043C\u043D\u043E-\u0440\u043E\u043B\u0438\u043A\u043E\u0432\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","LPG-\u043C\u0430\u0441\u0430\u0436","\u041A\u0430\u0432\u0456\u0442\u0430\u0446\u0456\u044F","\u041B\u0456\u043F\u043E\u043B\u0456\u0437","\u041F\u0440\u0435\u0441\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041B\u0456\u043C\u0444\u043E\u0434\u0440\u0435\u043D\u0430\u0436 \u0430\u043F\u0430\u0440\u0430\u0442\u043D\u0438\u0439","\u041B\u0430\u0437\u0435\u0440\u043D\u0456 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438","\u041B\u0430\u0437\u0435\u0440\u043D\u0435 \u043E\u043C\u043E\u043B\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u041B\u0430\u0437\u0435\u0440\u043D\u0430 \u0431\u0456\u043E\u0440\u0435\u0432\u0456\u0442\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0424\u0440\u0430\u043A\u0446\u0456\u0439\u043D\u0438\u0439 \u043B\u0430\u0437\u0435\u0440","\u041B\u0430\u0437\u0435\u0440\u043D\u0438\u0439 \u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0424\u043E\u0442\u043E\u043E\u043C\u043E\u043B\u043E\u0434\u0436\u0435\u043D\u043D\u044F","IPL-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0421\u0432\u0456\u0442\u043B\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","LED-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041A\u0438\u0441\u043D\u0435\u0432\u0456 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438","\u041A\u0438\u0441\u043D\u0435\u0432\u0438\u0439 \u043A\u0443\u043F\u043E\u043B","\u041E\u043A\u0441\u0438\u0433\u0435\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041A\u0430\u0440\u0431\u043E\u043A\u0441\u0438\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041E\u0437\u043E\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0456\u0440\u0443\u0434\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F'\u044F\u0432\u043A\u0430\u043C\u0438","\u0410\u043F\u0456\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0422\u0430\u0442\u0443\u0430\u0436","\u041F\u0435\u0440\u043C\u0430\u043D\u0435\u043D\u0442\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0422\u0430\u0442\u0443\u0430\u0436 \u0431\u0440\u0456\u0432","\u041F\u0443\u0434\u0440\u043E\u0432\u0456 \u0431\u0440\u043E\u0432\u0438","\u0412\u043E\u043B\u043E\u0441\u043A\u043E\u0432\u0430 \u0442\u0435\u0445\u043D\u0456\u043A\u0430","\u041E\u043C\u0431\u0440\u0435 \u0431\u0440\u043E\u0432\u0438","\u0422\u0430\u0442\u0443\u0430\u0436 \u0433\u0443\u0431","\u0410\u043A\u0432\u0430\u0440\u0435\u043B\u044C\u043D\u0456 \u0433\u0443\u0431\u0438","\u041A\u043E\u043D\u0442\u0443\u0440 \u0433\u0443\u0431","\u0422\u0430\u0442\u0443\u0430\u0436 \u043E\u0447\u0435\u0439","\u041C\u0456\u0436\u0432\u0456\u0439\u043D\u0438\u0439 \u043F\u0440\u043E\u0441\u0442\u0456\u0440","\u0421\u0442\u0440\u0456\u043B\u043A\u0438","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0442\u0430\u0442\u0443\u0430\u0436\u0443","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0442\u0430\u0442\u0443\u0430\u0436\u0443","\u0411\u0440\u043E\u0432\u0438 \u0442\u0430 \u0432\u0456\u0457","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0431\u0440\u0456\u0432","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0440\u0456\u0432","\u041B\u0430\u043C\u0456\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0440\u0456\u0432","\u0410\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \u0431\u0440\u0456\u0432","\u0411\u0456\u043E\u0442\u0430\u0442\u0443\u0430\u0436 \u0431\u0440\u0456\u0432","\u0425\u043D\u0430 \u0434\u043B\u044F \u0431\u0440\u0456\u0432","\u0414\u043E\u0432\u0433\u043E\u0442\u0440\u0438\u0432\u0430\u043B\u0430 \u0443\u043A\u043B\u0430\u0434\u043A\u0430 \u0431\u0440\u0456\u0432","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0439","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","2D \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","3D \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u041E\u0431'\u0454\u043C\u043D\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u041C\u0435\u0433\u0430-\u043E\u0431'\u0454\u043C","\u0413\u043E\u043B\u043B\u0456\u0432\u0443\u0434\u0441\u044C\u043A\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0432\u0456\u0439","\u0417\u043D\u044F\u0442\u0442\u044F \u0432\u0456\u0439","\u041B\u0430\u043C\u0456\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0439","\u0411\u043E\u0442\u043E\u043A\u0441 \u0432\u0456\u0439","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0439","\u0425\u0456\u043C\u0456\u0447\u043D\u0430 \u0437\u0430\u0432\u0438\u0432\u043A\u0430 \u0432\u0456\u0439","\u0411\u0456\u043E\u0437\u0430\u0432\u0438\u0432\u043A\u0430 \u0432\u0456\u0439","\u041B\u0456\u0444\u0442\u0438\u043D\u0433 \u0432\u0456\u0439","\u0415\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0412\u043E\u0441\u043A\u043E\u0432\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0412\u0430\u043A\u0441\u0438\u043D\u0433","\u0428\u0443\u0433\u0430\u0440\u0456\u043D\u0433","\u0426\u0443\u043A\u0440\u043E\u0432\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u041B\u0430\u0437\u0435\u0440\u043D\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0414\u0456\u043E\u0434\u043D\u0430 \u043B\u0430\u0437\u0435\u0440\u043D\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0438\u0442\u043E\u0432\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0424\u043E\u0442\u043E\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0415\u043F\u0456\u043B\u044F\u0446\u0456\u044F \u043D\u0438\u0442\u043A\u043E\u044E","\u0422\u0440\u0438\u0434\u0456\u043D\u0433","ELOS-\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","AFT-\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0415\u043D\u0437\u0438\u043C\u043D\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0414\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043D\u0435\u0431\u0430\u0436\u0430\u043D\u043E\u0433\u043E \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0421\u043E\u043B\u044F\u0440\u0456\u0439","\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u043E\u043B\u044F\u0440\u0456\u0439","\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u043E\u043B\u044F\u0440\u0456\u0439","\u0422\u0443\u0440\u0431\u043E\u0441\u043E\u043B\u044F\u0440\u0456\u0439","\u0417\u0430\u0441\u043C\u0430\u0433\u0430","\u0410\u0432\u0442\u043E\u0437\u0430\u0441\u043C\u0430\u0433\u0430","\u0421\u043F\u0440\u0435\u0439-\u0437\u0430\u0441\u043C\u0430\u0433\u0430","\u041C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430 \u0437\u0430\u0441\u043C\u0430\u0433\u0430","\u0411\u0440\u043E\u043D\u0437\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0456\u043B\u0430","\u0424\u0456\u0442\u043D\u0435\u0441","\u0422\u0440\u0435\u043D\u0430\u0436\u0435\u0440\u043D\u0430 \u0437\u0430\u043B\u0430","\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0413\u0440\u0443\u043F\u043E\u0432\u0456 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0424\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0442\u0440\u0435\u043D\u0456\u043D\u0433","\u041A\u0440\u043E\u0441\u0444\u0456\u0442","CrossFit","\u0411\u043E\u0434\u0456\u0431\u0456\u043B\u0434\u0438\u043D\u0433","\u041F\u0430\u0443\u0435\u0440\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0412\u0430\u0436\u043A\u0430 \u0430\u0442\u043B\u0435\u0442\u0438\u043A\u0430","\u041A\u0430\u0440\u0434\u0456\u043E\u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0421\u0438\u043B\u043E\u0432\u0456 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u041A\u0440\u0443\u0433\u043E\u0432\u0438\u0439 \u0442\u0440\u0435\u043D\u0456\u043D\u0433","\u0406\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u0456 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","HIIT","\u0422\u0430\u0431\u0430\u0442\u0430","\u0417\u0443\u043C\u0431\u0430","\u0410\u0435\u0440\u043E\u0431\u0456\u043A\u0430","\u0421\u0442\u0435\u043F-\u0430\u0435\u0440\u043E\u0431\u0456\u043A\u0430","\u0410\u043A\u0432\u0430-\u0430\u0435\u0440\u043E\u0431\u0456\u043A\u0430","\u0410\u043A\u0432\u0430\u0444\u0456\u0442\u043D\u0435\u0441","\u0410\u043A\u0432\u0430\u0433\u0456\u043C\u043D\u0430\u0441\u0442\u0438\u043A\u0430","\u0419\u043E\u0433\u0430","\u0425\u0430\u0442\u0445\u0430-\u0439\u043E\u0433\u0430","\u0412\u0456\u043D\u044C\u044F\u0441\u0430-\u0439\u043E\u0433\u0430","\u0410\u0448\u0442\u0430\u043D\u0433\u0430-\u0439\u043E\u0433\u0430","\u041A\u0443\u043D\u0434\u0430\u043B\u0456\u043D\u0456-\u0439\u043E\u0433\u0430","\u0411\u0456\u043A\u0440\u0430\u043C-\u0439\u043E\u0433\u0430","\u0413\u0430\u0440\u044F\u0447\u0430 \u0439\u043E\u0433\u0430","\u0406\u043D\u044C-\u0439\u043E\u0433\u0430","\u0419\u043E\u0433\u0430-\u043D\u0456\u0434\u0440\u0430","\u0424\u043B\u0430\u0439-\u0439\u043E\u0433\u0430","\u041F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0430 \u0439\u043E\u0433\u0430","\u0410\u043D\u0442\u0456\u0433\u0440\u0430\u0432\u0456\u0442\u0430\u0446\u0456\u0439\u043D\u0430 \u0439\u043E\u0433\u0430","\u041F\u0456\u043B\u0430\u0442\u0435\u0441","\u041A\u0430\u043B\u043B\u0430\u043D\u0435\u0442\u0438\u043A\u0430","\u0421\u0442\u0440\u0435\u0442\u0447\u0438\u043D\u0433","\u0420\u043E\u0437\u0442\u044F\u0436\u043A\u0430","\u0428\u043F\u0430\u0433\u0430\u0442","\u0411\u043E\u0434\u0456\u0444\u043B\u0435\u043A\u0441","\u041E\u043A\u0441\u0456\u0441\u0430\u0439\u0437","\u0422\u0420\u0425","\u0424\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0442\u0440\u0435\u043D\u0456\u043D\u0433 \u0437 \u043F\u0435\u0442\u043B\u044F\u043C\u0438","\u041A\u0456\u043A\u0431\u043E\u043A\u0441\u0438\u043D\u0433","\u0411\u043E\u043A\u0441","\u0422\u0430\u0439\u0441\u044C\u043A\u0438\u0439 \u0431\u043E\u043A\u0441","\u041C\u0443\u0430\u0439 \u0422\u0430\u0439","\u041C\u041C\u0410","\u0417\u043C\u0456\u0448\u0430\u043D\u0456 \u0431\u043E\u0439\u043E\u0432\u0456 \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432\u0430","\u041A\u0430\u0440\u0430\u0442\u0435","\u0422\u0445\u0435\u043A\u0432\u043E\u043D\u0434\u043E","\u0414\u0437\u044E\u0434\u043E","\u0421\u0430\u043C\u0431\u043E","\u0410\u0439\u043A\u0456\u0434\u043E","\u041A\u0430\u043F\u043E\u0435\u0439\u0440\u0430","\u0422\u0430\u043D\u0446\u0456","\u0411\u0430\u043B\u044C\u043D\u0456 \u0442\u0430\u043D\u0446\u0456","\u0421\u0430\u043B\u044C\u0441\u0430","\u0411\u0430\u0447\u0430\u0442\u0430","\u041A\u0456\u0437\u043E\u043C\u0431\u0430","\u0422\u0432\u0435\u0440\u043A","\u0411\u043E\u0434\u0456-\u0431\u0430\u043B\u0435\u0442","\u0417\u0443\u043C\u0431\u0430","\u0421\u0442\u0440\u0438\u043F-\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","Pole dance","\u0422\u0430\u043D\u0435\u0446\u044C \u043D\u0430 \u043F\u0456\u043B\u043E\u043D\u0456","\u0421\u0445\u0456\u0434\u043D\u0456 \u0442\u0430\u043D\u0446\u0456","\u0422\u0430\u043D\u0435\u0446\u044C \u0436\u0438\u0432\u043E\u0442\u0430","\u0421\u0443\u0447\u0430\u0441\u043D\u0456 \u0442\u0430\u043D\u0446\u0456","\u0425\u0456\u043F-\u0445\u043E\u043F","\u0411\u0440\u0435\u0439\u043A-\u0434\u0430\u043D\u0441","\u041A\u043E\u043D\u0442\u0435\u043C\u043F\u043E\u0440\u0430\u0440\u0456","\u0414\u0436\u0430\u0437-\u0444\u0430\u043D\u043A","\u0411\u0430\u0441\u0435\u0439\u043D","\u041F\u043B\u0430\u0432\u0430\u043D\u043D\u044F","\u0410\u043A\u0432\u0430-\u0430\u0435\u0440\u043E\u0431\u0456\u043A\u0430","\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u043F\u043B\u0430\u0432\u0430\u043D\u043D\u044E","\u0414\u0438\u0442\u044F\u0447\u0435 \u043F\u043B\u0430\u0432\u0430\u043D\u043D\u044F","\u0413\u0440\u0443\u0434\u043D\u0438\u0447\u043A\u043E\u0432\u0435 \u043F\u043B\u0430\u0432\u0430\u043D\u043D\u044F","\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u0435 \u043F\u043B\u0430\u0432\u0430\u043D\u043D\u044F","\u0421\u0430\u0443\u043D\u0430","\u0424\u0456\u043D\u0441\u044C\u043A\u0430 \u0441\u0430\u0443\u043D\u0430","\u0420\u043E\u0441\u0456\u0439\u0441\u044C\u043A\u0430 \u043B\u0430\u0437\u043D\u044F","\u0422\u0443\u0440\u0435\u0446\u044C\u043A\u0430 \u043B\u0430\u0437\u043D\u044F","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0430 \u043B\u0430\u0437\u043D\u044F","\u041E\u0444\u0443\u0440\u043E","\u041F\u0430\u0440\u0438\u043B\u044C\u043D\u044F","\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u0422\u0435\u0440\u0430\u043F\u0435\u0432\u0442\u0438\u0447\u043D\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0430\u0440\u0456\u0454\u0441\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0443\u043B\u044C\u043F\u0456\u0442\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0435\u0440\u0456\u043E\u0434\u043E\u043D\u0442\u0438\u0442\u0443","\u0415\u043D\u0434\u043E\u0434\u043E\u043D\u0442\u0438\u0447\u043D\u0435 \u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u043B\u043E\u043C\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u0437\u0443\u0431\u0456\u0432","\u0425\u0443\u0434\u043E\u0436\u043D\u044F \u0440\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F","\u0415\u0441\u0442\u0435\u0442\u0438\u0447\u043D\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u0425\u0456\u0440\u0443\u0440\u0433\u0456\u0447\u043D\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0443\u0431\u0430 \u043C\u0443\u0434\u0440\u043E\u0441\u0442\u0456","\u0421\u043A\u043B\u0430\u0434\u043D\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F","\u0420\u0435\u0437\u0435\u043A\u0446\u0456\u044F \u0432\u0435\u0440\u0445\u0456\u0432\u043A\u0438 \u043A\u043E\u0440\u0435\u043D\u044F","\u0426\u0438\u0441\u0442\u0435\u043A\u0442\u043E\u043C\u0456\u044F","\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u044F\u0441\u0435\u043D","\u0406\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F \u0437\u0443\u0431\u0456\u0432","\u041E\u0434\u043D\u043E\u043C\u043E\u043C\u0435\u043D\u0442\u043D\u0430 \u0456\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0430 \u0456\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F","\u0411\u0430\u0437\u0430\u043B\u044C\u043D\u0430 \u0456\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F","All-on-4","All-on-6","\u0421\u0438\u043D\u0443\u0441-\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u041A\u0456\u0441\u0442\u043A\u043E\u0432\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041E\u0440\u0442\u043E\u043F\u0435\u0434\u0438\u0447\u043D\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041F\u0440\u043E\u0442\u0435\u0437\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u041A\u043E\u0440\u043E\u043D\u043A\u0438","\u041C\u0435\u0442\u0430\u043B\u043E\u043A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0456 \u043A\u043E\u0440\u043E\u043D\u043A\u0438","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0456 \u043A\u043E\u0440\u043E\u043D\u043A\u0438","\u0426\u0438\u0440\u043A\u0443\u043B\u044F\u0440\u043D\u0456 \u043A\u043E\u0440\u043E\u043D\u043A\u0438","\u0412\u0456\u043D\u0456\u0440\u0438","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0456 \u0432\u0456\u043D\u0456\u0440\u0438","\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043D\u0456 \u0432\u0456\u043D\u0456\u0440\u0438","\u041B\u044E\u043C\u0456\u043D\u0456\u0440\u0438","\u041C\u043E\u0441\u0442\u0438","\u0417\u043D\u0456\u043C\u043D\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u0427\u0430\u0441\u0442\u043A\u043E\u0432\u043E \u0437\u043D\u0456\u043C\u043D\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u041F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0437\u043D\u0456\u043C\u043D\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u0411\u044E\u0433\u0435\u043B\u044C\u043D\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u041D\u0435\u0439\u043B\u043E\u043D\u043E\u0432\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u041F\u0440\u043E\u0442\u0435\u0437\u0438 \u043D\u0430 \u0456\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0445","\u041E\u0440\u0442\u043E\u0434\u043E\u043D\u0442\u0456\u044F","\u0412\u0438\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u043A\u0443\u0441\u0443","\u0411\u0440\u0435\u043A\u0435\u0442\u0438","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u0421\u0430\u043F\u0444\u0456\u0440\u043E\u0432\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u041B\u0456\u043D\u0433\u0432\u0430\u043B\u044C\u043D\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u0421\u0430\u043C\u043E\u043B\u0456\u0433\u0443\u044E\u0447\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u0415\u043B\u0430\u0439\u043D\u0435\u0440\u0438","Invisalign","\u041A\u0430\u043F\u0438 \u0434\u043B\u044F \u0432\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F","\u041F\u043B\u0430\u0441\u0442\u0438\u043D\u043A\u0438","\u0422\u0440\u0435\u0439\u043D\u0435\u0440\u0438","\u041F\u0430\u0440\u043E\u0434\u043E\u043D\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u044F\u0441\u0435\u043D","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u0434\u043E\u043D\u0442\u0438\u0442\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u0434\u043E\u043D\u0442\u043E\u0437\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0456\u043D\u0433\u0456\u0432\u0456\u0442\u0443","\u041A\u044E\u0440\u0435\u0442\u0430\u0436","\u0428\u0438\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0412\u0435\u043A\u0442\u043E\u0440-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0456\u0433\u0456\u0454\u043D\u0430 \u043F\u043E\u0440\u043E\u0436\u043D\u0438\u043D\u0438 \u0440\u043E\u0442\u0430","\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430 \u0437\u0443\u0431\u0456\u0432","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","Air Flow","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0424\u0442\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0412\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u041A\u0430\u0431\u0456\u043D\u0435\u0442\u043D\u0435 \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","Zoom \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u041B\u0430\u0437\u0435\u0440\u043D\u0435 \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u0425\u0456\u043C\u0456\u0447\u043D\u0435 \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u0414\u043E\u043C\u0430\u0448\u043D\u0454 \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u0414\u0438\u0442\u044F\u0447\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u043B\u043E\u0447\u043D\u0438\u0445 \u0437\u0443\u0431\u0456\u0432","\u0413\u0435\u0440\u043C\u0435\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u0444\u0456\u0441\u0443\u0440","\u0424\u0442\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0438\u0442\u044F\u0447\u0438\u0445 \u0437\u0443\u0431\u0456\u0432","\u0421\u0440\u0456\u0431\u043B\u0456\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u041F\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u0430 \u0445\u0456\u0440\u0443\u0440\u0433\u0456\u044F","\u0420\u0438\u043D\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0411\u043B\u0435\u0444\u0430\u0440\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041E\u0442\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041C\u0435\u043D\u0442\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041B\u0456\u043F\u043E\u0441\u0430\u043A\u0446\u0456\u044F","\u0410\u0431\u0434\u043E\u043C\u0456\u043D\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u0424\u0435\u0439\u0441\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u0448\u0438\u0457","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u043B\u043E\u0431\u0430","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u0441\u0442\u0435\u0433\u043E\u043D","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u0440\u0443\u043A","\u0417\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u043D\u044F \u0433\u0440\u0443\u0434\u0435\u0439","\u0417\u043C\u0435\u043D\u0448\u0435\u043D\u043D\u044F \u0433\u0440\u0443\u0434\u0435\u0439","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u0433\u0440\u0443\u0434\u0435\u0439","\u041C\u0430\u0441\u0442\u043E\u043F\u0435\u043A\u0441\u0456\u044F","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0441\u043E\u0441\u043A\u0456\u0432","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0430\u0440\u0435\u043E\u043B","\u0417\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u043D\u044F \u0441\u0456\u0434\u043D\u0438\u0446\u044C","\u0413\u043B\u044E\u0442\u0435\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0406\u043D\u0442\u0438\u043C\u043D\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041B\u0430\u0431\u0456\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0412\u0430\u0433\u0456\u043D\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0414\u0435\u0440\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043A\u043D\u0435","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0443\u0433\u0440\u0456\u0432","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u0442\u0430\u043A\u043D\u0435","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0440\u043E\u0437\u0430\u0446\u0435\u0430","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u043F\u0435\u0440\u043E\u0437\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0435\u0440\u043C\u0430\u0442\u0438\u0442\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0435\u043A\u0437\u0435\u043C\u0438","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0441\u043E\u0440\u0456\u0430\u0437\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0442\u0438\u043B\u0456\u0433\u043E","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043D\u043E\u0432\u043E\u0443\u0442\u0432\u043E\u0440\u0435\u043D\u044C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0431\u043E\u0440\u043E\u0434\u0430\u0432\u043E\u043A","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u043F\u0456\u043B\u043E\u043C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0440\u043E\u0434\u0438\u043C\u043E\u043A","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0430\u0442\u0435\u0440\u043E\u043C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043B\u0456\u043F\u043E\u043C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043C\u0456\u043B\u0456\u0439","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0440\u0438\u0431\u043A\u0430","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u043D\u0456\u0445\u043E\u043C\u0456\u043A\u043E\u0437\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0456\u043A\u043E\u0437\u0443 \u0441\u0442\u043E\u043F","\u0414\u0435\u0440\u043C\u0430\u0442\u043E\u0441\u043A\u043E\u043F\u0456\u044F","\u0422\u0440\u0438\u0445\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043B\u043E\u043F\u0435\u0446\u0456\u0457","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0431\u043B\u0438\u0441\u0456\u043D\u043D\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0435\u0431\u043E\u0440\u0435\u0457","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043B\u0443\u043F\u0438","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0438\u043F\u0430\u0434\u0456\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0422\u0440\u0438\u0445\u043E\u0441\u043A\u043E\u043F\u0456\u044F","PRP-\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041C\u0435\u0437\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0448\u043A\u0456\u0440\u0438 \u0433\u043E\u043B\u043E\u0432\u0438","\u041F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0430 \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0422\u0440\u0430\u043D\u0441\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","FUE \u043C\u0435\u0442\u043E\u0434","FUT \u043C\u0435\u0442\u043E\u0434","\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0456\u044F","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0430","\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0430 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0440\u0443\u043F\u043E\u0432\u0430 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0421\u0456\u043C\u0435\u0439\u043D\u0430 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041F\u043E\u0434\u0440\u0443\u0436\u043D\u044F \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433","\u041F\u0456\u0434\u043B\u0456\u0442\u043A\u043E\u0432\u0438\u0439 \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433","\u041A\u043E\u0433\u043D\u0456\u0442\u0438\u0432\u043D\u043E-\u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u043E\u0432\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0435\u0448\u0442\u0430\u043B\u044C\u0442-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041F\u0441\u0438\u0445\u043E\u0430\u043D\u0430\u043B\u0456\u0437","\u0410\u0440\u0442-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041F\u0456\u0441\u043E\u0447\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041A\u0430\u0437\u043A\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0406\u0433\u0440\u043E\u0432\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0456\u043F\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041D\u041B\u041F","\u041A\u043E\u0443\u0447\u0438\u043D\u0433","\u0411\u0456\u0437\u043D\u0435\u0441-\u043A\u043E\u0443\u0447\u0438\u043D\u0433","\u041B\u0430\u0439\u0444-\u043A\u043E\u0443\u0447\u0438\u043D\u0433","\u041A\u0430\u0440'\u0454\u0440\u043D\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0440\u043E\u0444\u043E\u0440\u0456\u0454\u043D\u0442\u0430\u0446\u0456\u044F","\u0421\u0435\u043A\u0441\u043E\u043B\u043E\u0433\u0456\u044F","\u041D\u0430\u0440\u043A\u043E\u043B\u043E\u0433","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u0456\u0437\u043C\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430\u0440\u043A\u043E\u043C\u0430\u043D\u0456\u0457","\u041A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0456\u0454\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u0434\u0456\u0454\u0442\u043E\u043B\u043E\u0433\u0430","\u0421\u0445\u0443\u0434\u043D\u0435\u043D\u043D\u044F","\u041D\u0430\u0431\u0456\u0440 \u0432\u0430\u0433\u0438","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0440\u0430\u0446\u0456\u043E\u043D\u0443","\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A \u043A\u0430\u043B\u043E\u0440\u0456\u0439","\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0438\u0442\u044F\u0447\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0425\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0430\u0433\u0456\u0442\u043D\u0438\u0445","\u041B\u0456\u043A\u0443\u0432\u0430\u043B\u044C\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0456\u0430\u043D\u0441\u044C\u043A\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u0435\u0433\u0430\u043D\u0441\u044C\u043A\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u041A\u0435\u0442\u043E-\u0434\u0456\u0454\u0442\u0430","\u041F\u0430\u043B\u0435\u043E-\u0434\u0456\u0454\u0442\u0430","\u0406\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u0435 \u0433\u043E\u043B\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0435\u0442\u043E\u043A\u0441","\u041D\u0443\u0442\u0440\u0438\u0446\u0456\u043E\u043B\u043E\u0433\u0456\u044F","\u0415\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0456\u0430\u0431\u0435\u0442\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0449\u0438\u0442\u043E\u043F\u043E\u0434\u0456\u0431\u043D\u043E\u0457 \u0437\u0430\u043B\u043E\u0437\u0438","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0436\u0438\u0440\u0456\u043D\u043D\u044F","\u0413\u043E\u0440\u043C\u043E\u043D\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0424\u0456\u0437\u0456\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u0444\u043E\u0440\u0435\u0437","\u041C\u0430\u0433\u043D\u0456\u0442\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041B\u0430\u0437\u0435\u0440\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041F\u0430\u0440\u0430\u0444\u0456\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0440\u044F\u0437\u0435\u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u043E\u0434\u043E\u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u041A\u0456\u043D\u0435\u0437\u0456\u043E\u0442\u0435\u0439\u043F\u0443\u0432\u0430\u043D\u043D\u044F","\u041B\u0424\u041A","\u041B\u0456\u043A\u0443\u0432\u0430\u043B\u044C\u043D\u0430 \u0444\u0456\u0437\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0430","\u0420\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044F","\u041F\u043E\u0441\u0442\u0456\u043D\u0441\u0443\u043B\u044C\u0442\u043D\u0430 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044F","\u041F\u0456\u0441\u043B\u044F\u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044F","\u041F\u0456\u0441\u043B\u044F\u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0439\u043D\u0430 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044F","\u041C\u0430\u043D\u0443\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041E\u0441\u0442\u0435\u043E\u043F\u0430\u0442\u0456\u044F","\u0425\u0456\u0440\u043E\u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430","\u041A\u0456\u043D\u0435\u0437\u0456\u043E\u043B\u043E\u0433\u0456\u044F","\u0422\u0435\u0439\u043F\u0443\u0432\u0430\u043D\u043D\u044F","\u0421\u0443\u0445\u0435 \u0433\u043E\u043B\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0422\u0430\u0442\u0443\u0430\u0436","\u0425\u0443\u0434\u043E\u0436\u043D\u0454 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0420\u0435\u0430\u043B\u0456\u0441\u0442\u0438\u0447\u043D\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0427\u043E\u0440\u043D\u043E-\u0431\u0456\u043B\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u041A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0410\u043A\u0432\u0430\u0440\u0435\u043B\u044C\u043D\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u0456\u0437\u043C","\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0456\u044F","\u041E\u0440\u043D\u0430\u043C\u0435\u043D\u0442\u0430\u043B","\u0422\u0440\u0430\u0439\u0431\u043B","\u041E\u043B\u0434\u0441\u043A\u0443\u043B","\u041D\u044C\u044E\u0441\u043A\u0443\u043B","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u041F\u043E\u043B\u0456\u043D\u0435\u0437\u0456\u0439\u0441\u044C\u043A\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0411\u0456\u043E\u043C\u0435\u0445\u0430\u043D\u0456\u043A\u0430","\u0414\u043E\u0442\u0432\u043E\u0440\u043A","\u0411\u043B\u0435\u043A\u0432\u043E\u0440\u043A","\u041B\u0430\u0439\u043D\u0432\u043E\u0440\u043A","\u041F\u0435\u0440\u0435\u043A\u0440\u0438\u0442\u0442\u044F \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u044C","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u044C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u044C","\u041B\u0430\u0437\u0435\u0440\u043D\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0442\u0430\u0442\u0443","\u0420\u0435\u043C\u0443\u0432\u0435\u0440","\u041F\u0456\u0440\u0441\u0438\u043D\u0433","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u0432\u0443\u0445","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u043D\u043E\u0441\u0430","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u0431\u0440\u043E\u0432\u0438","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u0433\u0443\u0431\u0438","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u044F\u0437\u0438\u043A\u0430","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u043F\u0443\u043F\u043A\u0430","\u0406\u043D\u0442\u0438\u043C\u043D\u0438\u0439 \u043F\u0456\u0440\u0441\u0438\u043D\u0433","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u0441\u043E\u0441\u043A\u0456\u0432","\u0421\u0435\u043F\u0442\u0443\u043C","\u0422\u0443\u043D\u0435\u043B\u0456","\u0420\u043E\u0437\u0442\u044F\u0436\u043A\u0430 \u043C\u043E\u0447\u043E\u043A","\u041F\u0440\u043E\u043A\u043E\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0432\u0443\u0445","\u041C\u0430\u043A\u0456\u044F\u0436","\u0414\u0435\u043D\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0412\u0435\u0447\u0456\u0440\u043D\u0456\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u041C\u0430\u043A\u0456\u044F\u0436 \u043D\u0430\u0440\u0435\u0447\u0435\u043D\u043E\u0457","\u0421\u0432\u044F\u0442\u043A\u043E\u0432\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0412\u0438\u043F\u0443\u0441\u043A\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0424\u043E\u0442\u043E\u043C\u0430\u043A\u0456\u044F\u0436","\u0422\u0435\u0430\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0421\u0446\u0435\u043D\u0456\u0447\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0410\u043A\u0432\u0430\u0433\u0440\u0438\u043C","\u0424\u0435\u0439\u0441-\u0430\u0440\u0442","\u0411\u043E\u0434\u0456-\u0430\u0440\u0442","\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u043C\u0430\u043A\u0456\u044F\u0436\u0443","\u041C\u0430\u0439\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441 \u0437 \u043C\u0430\u043A\u0456\u044F\u0436\u0443","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043C\u0430\u043A\u0456\u044F\u0436\u0443","\u041C\u0430\u043A\u0456\u044F\u0436 \u0434\u043B\u044F \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u0457","\u0421\u0430\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E","\u041B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D","\u041F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0430\u0434\u0443","\u041F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0430\u0434\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u0441\u0430\u0434\u0443","\u041E\u0437\u0435\u043B\u0435\u043D\u0435\u043D\u043D\u044F","\u041E\u0437\u0435\u043B\u0435\u043D\u0435\u043D\u043D\u044F \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0457","\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0435 \u043E\u0437\u0435\u043B\u0435\u043D\u0435\u043D\u043D\u044F","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0441\u0430\u0434\u043E\u043C","\u0421\u0430\u0434\u043E\u0432\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041E\u0431\u0440\u0456\u0437\u043A\u0430 \u0434\u0435\u0440\u0435\u0432","\u041E\u0431\u0440\u0456\u0437\u043A\u0430 \u043A\u0443\u0449\u0456\u0432","\u0424\u043E\u0440\u043C\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0440\u043E\u043D\u0438","\u0421\u0430\u043D\u0456\u0442\u0430\u0440\u043D\u0430 \u043E\u0431\u0440\u0456\u0437\u043A\u0430","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043E\u0431\u0440\u0456\u0437\u043A\u0430","\u0422\u043E\u043F\u0456\u0430\u0440\u043D\u0435 \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432\u043E","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u0434\u0435\u0440\u0435\u0432","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u0436\u0438\u0432\u043E\u043F\u043B\u043E\u0442\u0443","\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u0434\u0435\u0440\u0435\u0432","\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u043A\u0443\u0449\u0456\u0432","\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u043A\u0432\u0456\u0442\u0456\u0432","\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u0440\u043E\u0441\u043B\u0438\u043D","\u041F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0430 \u0440\u043E\u0441\u043B\u0438\u043D","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0434\u0435\u0440\u0435\u0432","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043F\u043D\u0456\u0432","\u041A\u043E\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0413\u0430\u0437\u043E\u043D","\u041F\u043E\u0441\u0456\u0432 \u0433\u0430\u0437\u043E\u043D\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0440\u0443\u043B\u043E\u043D\u043D\u043E\u0433\u043E \u0433\u0430\u0437\u043E\u043D\u0443","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0433\u0430\u0437\u043E\u043D\u043E\u043C","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u0433\u0430\u0437\u043E\u043D\u0443","\u0410\u0435\u0440\u0430\u0446\u0456\u044F \u0433\u0430\u0437\u043E\u043D\u0443","\u0421\u043A\u0430\u0440\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u044F \u0433\u0430\u0437\u043E\u043D\u0443","\u041F\u0456\u0434\u0436\u0438\u0432\u043B\u0435\u043D\u043D\u044F \u0433\u0430\u0437\u043E\u043D\u0443","\u041F\u043E\u043B\u0438\u0432 \u0433\u0430\u0437\u043E\u043D\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u0433\u0430\u0437\u043E\u043D\u0443","\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0438\u0439 \u043F\u043E\u043B\u0438\u0432","\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0437\u0440\u043E\u0448\u0435\u043D\u043D\u044F","\u041A\u0440\u0430\u043F\u043B\u0438\u043D\u043D\u0438\u0439 \u043F\u043E\u043B\u0438\u0432","\u041C\u043E\u043D\u0442\u0430\u0436 \u043F\u043E\u043B\u0438\u0432\u0443","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u043B\u0438\u0432\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u043F\u043E\u043B\u0438\u0432\u0443","\u041A\u043B\u0443\u043C\u0431\u0438","\u041E\u0431\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043B\u0443\u043C\u0431","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u043A\u043B\u0443\u043C\u0431\u0430\u043C\u0438","\u041C\u0456\u043A\u0441\u0431\u043E\u0440\u0434\u0435\u0440\u0438","\u0420\u0430\u0431\u0430\u0442\u043A\u0438","\u0410\u043B\u044C\u043F\u0456\u0439\u0441\u044C\u043A\u0430 \u0433\u0456\u0440\u043A\u0430","\u0420\u043E\u043A\u0430\u0440\u0456\u0439","\u0410\u043B\u044C\u043F\u0456\u043D\u0430\u0440\u0456\u0439","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0438\u0439 \u0441\u0430\u0434","\u0421\u0430\u0434 \u043A\u0430\u043C\u0435\u043D\u0456\u0432","\u0412\u043E\u0434\u043E\u0439\u043C\u0438","\u0421\u0442\u0430\u0432\u043E\u043A","\u0424\u043E\u043D\u0442\u0430\u043D","\u0412\u043E\u0434\u043E\u0441\u043F\u0430\u0434","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0431\u0430\u0441\u0435\u0439\u043D","\u041E\u0447\u0438\u0449\u0435\u043D\u043D\u044F \u0441\u0442\u0430\u0432\u043A\u0430","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0432\u043E\u0434\u043E\u0439\u043C\u043E\u044E","\u0414\u043E\u0440\u0456\u0436\u043A\u0438","\u0421\u0430\u0434\u043E\u0432\u0456 \u0434\u043E\u0440\u0456\u0436\u043A\u0438","\u0422\u0440\u043E\u0442\u0443\u0430\u0440\u043D\u0430 \u043F\u043B\u0438\u0442\u043A\u0430","\u0411\u0440\u0443\u043A\u0456\u0432\u043A\u0430","\u041C\u043E\u0449\u0435\u043D\u043D\u044F","\u041F\u0430\u0442\u0456\u043E","\u0422\u0435\u0440\u0430\u0441\u0430","\u0410\u043B\u044C\u0442\u0430\u043D\u043A\u0430","\u041F\u0435\u0440\u0433\u043E\u043B\u0438","\u0421\u0430\u0434\u043E\u0432\u0456 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457","\u041E\u043F\u043E\u0440\u0438 \u0434\u043B\u044F \u0440\u043E\u0441\u043B\u0438\u043D","\u0428\u043F\u0430\u043B\u0435\u0440\u0438","\u0410\u0440\u043A\u0438","\u041E\u0433\u043E\u0440\u043E\u0436\u0456","\u041F\u0430\u0440\u043A\u0430\u043D\u0438","\u0416\u0438\u0432\u043E\u043F\u043B\u0456\u0442","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043E\u0433\u043E\u0440\u043E\u0436\u0430","\u0421\u0430\u0434\u043E\u0432\u0435 \u043E\u0441\u0432\u0456\u0442\u043B\u0435\u043D\u043D\u044F","\u041B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u043D\u0430 \u043F\u0456\u0434\u0441\u0432\u0456\u0442\u043A\u0430","\u0417\u0438\u043C\u043E\u0432\u0438\u0439 \u0441\u0430\u0434","\u041E\u0440\u0430\u043D\u0436\u0435\u0440\u0435\u044F","\u0422\u0435\u043F\u043B\u0438\u0446\u044F","\u041F\u0430\u0440\u043D\u0438\u043A","\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0456 \u0433\u0440\u044F\u0434\u043A\u0438","\u0412\u0438\u0441\u043E\u043A\u0456 \u0433\u0440\u044F\u0434\u043A\u0438","\u0413\u043E\u0440\u043E\u0434","\u0413\u043E\u0440\u043E\u0434\u043D\u0438\u0446\u0442\u0432\u043E","\u0412\u0438\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0432\u043E\u0447\u0456\u0432","\u041E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0435 \u0437\u0435\u043C\u043B\u0435\u0440\u043E\u0431\u0441\u0442\u0432\u043E","\u041F\u0435\u0440\u043C\u0430\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0430","\u041A\u043E\u043C\u043F\u043E\u0441\u0442","\u041C\u0443\u043B\u044C\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0411\u043E\u0440\u043E\u0442\u044C\u0431\u0430 \u0437\u0456 \u0448\u043A\u0456\u0434\u043D\u0438\u043A\u0430\u043C\u0438","\u0417\u0430\u0445\u0438\u0441\u0442 \u0440\u043E\u0441\u043B\u0438\u043D","\u0414\u043E\u0431\u0440\u0438\u0432\u0430","\u041F\u0456\u0434\u0436\u0438\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u043E\u0441\u043B\u0438\u043D","\u0414\u0440\u0435\u043D\u0430\u0436","\u0414\u0440\u0435\u043D\u0430\u0436\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430","\u041F\u0456\u0434\u043F\u0456\u0440\u043D\u0456 \u0441\u0442\u0456\u043D\u043A\u0438","\u0422\u0435\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F","\u0413\u0440\u0430\u0432\u0456\u0439","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043A\u043E\u0440\u0430","\u041C\u0443\u043B\u044C\u0447\u0430","\u0421\u0430\u0434\u043E\u0432\u0438\u0439 \u0434\u0435\u043A\u043E\u0440","\u0421\u043A\u0443\u043B\u044C\u043F\u0442\u0443\u0440\u0438","\u0412\u0430\u0437\u043E\u043D\u0438","\u041A\u0430\u0448\u043F\u043E","\u0421\u0430\u0434\u043E\u0432\u0456 \u0444\u0456\u0433\u0443\u0440\u0438","\u0413\u043E\u0434\u0456\u0432\u043D\u0438\u0446\u0456 \u0434\u043B\u044F \u043F\u0442\u0430\u0445\u0456\u0432","\u0411\u0443\u0434\u0438\u043D\u043E\u0447\u043A\u0438 \u0434\u043B\u044F \u043F\u0442\u0430\u0445\u0456\u0432","\u0413\u043E\u0442\u0435\u043B\u0456 \u0434\u043B\u044F \u043A\u043E\u043C\u0430\u0445","\u0411\u0434\u0436\u0456\u043B\u044C\u043D\u0438\u0446\u0442\u0432\u043E","\u041F\u0430\u0441\u0456\u043A\u0430","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0431\u0434\u0436\u043E\u043B\u0430\u043C\u0438","\u0412\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u0430\u0440\u0441\u0442\u0432\u043E","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u043E\u043C","\u041E\u0431\u0440\u0456\u0437\u043A\u0430 \u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u0443","\u041F\u043B\u043E\u0434\u043E\u0432\u0438\u0439 \u0441\u0430\u0434","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u043F\u043B\u043E\u0434\u043E\u0432\u0438\u043C\u0438 \u0434\u0435\u0440\u0435\u0432\u0430\u043C\u0438","\u0429\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0434\u0435\u0440\u0435\u0432","\u041E\u043A\u0443\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u0448\u043A\u0456\u0434\u043D\u0438\u043A\u0456\u0432","\u041F\u043E\u0431\u0456\u043B\u043A\u0430 \u0434\u0435\u0440\u0435\u0432","\u0417\u0438\u043C\u043E\u0432\u0435 \u0443\u043A\u0440\u0438\u0442\u0442\u044F \u0440\u043E\u0441\u043B\u0438\u043D","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0441\u0430\u0434\u0443 \u0434\u043E \u0437\u0438\u043C\u0438","\u0412\u0435\u0441\u043D\u044F\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438 \u0432 \u0441\u0430\u0434\u0443","\u041E\u0441\u0456\u043D\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438 \u0432 \u0441\u0430\u0434\u0443","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043A\u0432\u0430\u0440\u0442\u0438\u0440","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043E\u0444\u0456\u0441\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u0429\u043E\u0434\u0435\u043D\u043D\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u044E\u0447\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0440\u0435\u043C\u043E\u043D\u0442\u0443","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0431\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u0430","\u041C\u0438\u0442\u0442\u044F \u0432\u0456\u043A\u043E\u043D","\u041C\u0438\u0442\u0442\u044F \u0444\u0430\u0441\u0430\u0434\u0456\u0432","\u041C\u0438\u0442\u0442\u044F \u0432\u0456\u0442\u0440\u0438\u043D","\u041C\u0438\u0442\u0442\u044F \u043F\u0456\u0441\u043B\u044F \u0440\u0435\u043C\u043E\u043D\u0442\u0443","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0438\u043B\u0443","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043C\u0435\u0431\u043B\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0434\u0438\u0432\u0430\u043D\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0440\u0456\u0441\u0435\u043B","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043C\u0430\u0442\u0440\u0430\u0446\u0456\u0432","\u041F\u0440\u0430\u043D\u043D\u044F \u043A\u0438\u043B\u0438\u043C\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0438\u043B\u0438\u043C\u0456\u0432","\u0427\u0438\u0441\u0442\u043A\u0430 \u043A\u0438\u043B\u0438\u043C\u043E\u0432\u0438\u0445 \u043F\u043E\u043A\u0440\u0438\u0442\u0442\u0456\u0432","\u041F\u0440\u0430\u043D\u043D\u044F \u0448\u0442\u043E\u0440","\u041F\u0440\u0430\u043D\u043D\u044F \u0442\u044E\u043B\u044E","\u041F\u0440\u0430\u043D\u043D\u044F \u0433\u0430\u0440\u0434\u0438\u043D","\u041A\u043B\u0456\u043D\u0456\u043D\u0433","\u041A\u043B\u0456\u043D\u0456\u043D\u0433\u043E\u0432\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0438\u0439 \u043A\u043B\u0456\u043D\u0456\u043D\u0433","\u041F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430\u0434\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u0447\u0438\u0445 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u0438\u0445 \u0446\u0435\u043D\u0442\u0440\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043A\u0430\u0444\u0435","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0433\u043E\u0442\u0435\u043B\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043B\u0456\u043A\u0430\u0440\u0435\u043D\u044C","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043A\u043B\u0456\u043D\u0456\u043A","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0448\u043A\u0456\u043B","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0434\u0438\u0442\u044F\u0447\u0438\u0445 \u0441\u0430\u0434\u043A\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u043F\u043E\u0440\u0442\u0437\u0430\u043B\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0431\u0430\u0441\u0435\u0439\u043D\u0456\u0432","\u0414\u0435\u0437\u0456\u043D\u0444\u0435\u043A\u0446\u0456\u044F","\u0414\u0435\u0437\u0438\u043D\u0441\u0435\u043A\u0446\u0456\u044F","\u0414\u0435\u0440\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u043A\u043E\u043C\u0430\u0445","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u0433\u0440\u0438\u0437\u0443\u043D\u0456\u0432","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u0442\u0430\u0440\u0433\u0430\u043D\u0456\u0432","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u043A\u043B\u043E\u043F\u0456\u0432","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u043C\u0443\u0440\u0430\u0448\u043E\u043A","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u043E\u0441","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u0431\u043B\u0456\u0445","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u043A\u043B\u0456\u0449\u0456\u0432","\u0424\u0443\u043C\u0456\u0433\u0430\u0446\u0456\u044F","\u0421\u0430\u043D\u0456\u0442\u0430\u0440\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430","\u041E\u0437\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u041E\u0447\u0438\u0449\u0435\u043D\u043D\u044F \u043F\u043E\u0432\u0456\u0442\u0440\u044F","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0439","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0456\u0434'\u0457\u0437\u0434\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u0445\u043E\u0434\u043E\u0432\u0438\u0445 \u043A\u043B\u0456\u0442\u043E\u043A","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0456\u043D\u0433\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0433\u0430\u0440\u0430\u0436\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0456\u0434\u0432\u0430\u043B\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0433\u043E\u0440\u0438\u0449","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0441\u043C\u0456\u0442\u0442\u044F","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043C\u0456\u0442\u0442\u044F","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u0423\u0442\u0438\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0427\u0438\u0441\u0442\u043A\u0430 \u0442\u0430 \u0434\u043E\u0433\u043B\u044F\u0434 \u0432\u0437\u0443\u0442\u0442\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0432\u0437\u0443\u0442\u0442\u044F","\u041F\u0435\u0440\u0435\u0448\u0438\u0432\u043A\u0430 \u0432\u0437\u0443\u0442\u0442\u044F","\u0420\u043E\u0437\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0437\u0443\u0442\u0442\u044F","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0437\u0443\u0442\u0442\u044F","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u0432\u0437\u0443\u0442\u0442\u044F","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u0456\u0434\u0431\u043E\u0440\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u0456\u0434\u043E\u0448\u0432\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0431\u043B\u0438\u0441\u043A\u0430\u0432\u043E\u043A \u043D\u0430 \u0432\u0437\u0443\u0442\u0442\u0456","\u041B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u043E\u0434\u044F\u0433\u0443","\u041F\u0435\u0440\u0435\u0448\u0438\u0432\u043A\u0430 \u043E\u0434\u044F\u0433\u0443","\u041F\u0456\u0434\u0433\u043E\u043D\u043A\u0430 \u043E\u0434\u044F\u0433\u0443","\u0417\u0430\u043C\u0456\u043D\u0430 \u0431\u043B\u0438\u0441\u043A\u0430\u0432\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0443\u0434\u0437\u0438\u043A\u0456\u0432","\u041F\u0456\u0434\u0448\u0438\u0432\u043A\u0430 \u0431\u0440\u044E\u043A","\u041F\u0456\u0434\u0448\u0438\u0432\u043A\u0430 \u0448\u0442\u043E\u0440","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043E\u0434\u044F\u0433\u0443","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0432\u0435\u0440\u0445\u043D\u044C\u043E\u0433\u043E \u043E\u0434\u044F\u0433\u0443","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043F\u0430\u043B\u044C\u0442","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0443\u0440\u0442\u043E\u043A","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0448\u0443\u0431","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0434\u0443\u0431\u043B\u044F\u043D\u043E\u043A","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u043E\u0441\u0442\u044E\u043C\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0441\u0443\u043A\u043E\u043D\u044C","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0432\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0445 \u0441\u0443\u043A\u043E\u043D\u044C","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043F\u043E\u0434\u0443\u0448\u043E\u043A","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u043E\u0432\u0434\u0440","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043F\u043B\u0435\u0434\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0456\u0433\u0440\u0430\u0448\u043E\u043A","\u0427\u0438\u0441\u0442\u043A\u0430 \u0448\u043A\u0456\u0440\u044F\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u0427\u0438\u0441\u0442\u043A\u0430 \u0437\u0430\u043C\u0448\u0456","\u0427\u0438\u0441\u0442\u043A\u0430 \u043D\u0443\u0431\u0443\u043A\u0443","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u0448\u043A\u0456\u0440\u0438","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u043A\u0456\u0440\u0438","\u041F\u0440\u0430\u043D\u043D\u044F","\u041F\u0440\u0430\u043B\u044C\u043D\u044F","\u041F\u0440\u0430\u043D\u043D\u044F \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u041F\u0440\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u0442\u0456\u043B\u044C\u043D\u043E\u0457 \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u041F\u0440\u0430\u043D\u043D\u044F \u0441\u043F\u0435\u0446\u043E\u0434\u044F\u0433\u0443","\u041F\u0440\u0430\u043D\u043D\u044F \u0440\u043E\u0431\u043E\u0447\u043E\u0433\u043E \u043E\u0434\u044F\u0433\u0443","\u041F\u0440\u0430\u043D\u043D\u044F \u0442\u0435\u043A\u0441\u0442\u0438\u043B\u044E","\u041F\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u041F\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043E\u0440\u043E\u0447\u043E\u043A","\u041F\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u0442\u043E\u0440","\u0410\u0442\u0435\u043B\u044C\u0454","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043E\u0434\u044F\u0433\u0443","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0441\u0443\u043A\u043E\u043D\u044C","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0432\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0445 \u0441\u0443\u043A\u043E\u043D\u044C","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043A\u043E\u0441\u0442\u044E\u043C\u0456\u0432","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0441\u043E\u0440\u043E\u0447\u043E\u043A","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0431\u043B\u0443\u0437","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0441\u043F\u0456\u0434\u043D\u0438\u0446\u044C","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0431\u0440\u044E\u043A","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0432\u0435\u0440\u0445\u043D\u044C\u043E\u0433\u043E \u043E\u0434\u044F\u0433\u0443","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043F\u0430\u043B\u044C\u0442","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043A\u0443\u0440\u0442\u043E\u043A","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043F\u043E\u0441\u0442\u0456\u043B\u044C\u043D\u043E\u0457 \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0448\u0442\u043E\u0440","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0442\u044E\u043B\u044E","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043E\u0434\u044F\u0433\u0443","\u041E\u0437\u0434\u043E\u0431\u043B\u0435\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443","\u0414\u0435\u043A\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443","\u0412\u0438\u0448\u0438\u0432\u043A\u0430","\u041C\u0430\u0448\u0438\u043D\u043D\u0430 \u0432\u0438\u0448\u0438\u0432\u043A\u0430","\u0420\u0443\u0447\u043D\u0430 \u0432\u0438\u0448\u0438\u0432\u043A\u0430","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u0433\u043B\u0430\u0434\u0434\u044E","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u0445\u0440\u0435\u0441\u0442\u0438\u043A\u043E\u043C","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u0431\u0456\u0441\u0435\u0440\u043E\u043C","\u0417\u043E\u043B\u043E\u0442\u0430 \u0432\u0438\u0448\u0438\u0432\u043A\u0430","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u0441\u0442\u0440\u0456\u0447\u043A\u0430\u043C\u0438","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0456\u0432","\u0413\u0440\u0443\u043C\u0456\u043D\u0433","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u0441\u043E\u0431\u0430\u043A","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u043A\u043E\u0442\u0456\u0432","\u041C\u043E\u0434\u0435\u043B\u044C\u043D\u0430 \u0441\u0442\u0440\u0438\u0436\u043A\u0430 \u0441\u043E\u0431\u0430\u043A","\u0413\u0456\u0433\u0456\u0454\u043D\u0456\u0447\u043D\u0430 \u0441\u0442\u0440\u0438\u0436\u043A\u0430","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u043F\u0456\u0434 \u043C\u0430\u0448\u0438\u043D\u043A\u0443","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u043D\u043E\u0436\u0438\u0446\u044F\u043C\u0438","\u0422\u0440\u0438\u043C\u0456\u043D\u0433","\u0420\u043E\u043B\u043B\u0456\u043D\u0433","\u0421\u0442\u0440\u0438\u043F\u043F\u0456\u043D\u0433","\u041A\u0443\u043F\u0430\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u041A\u0443\u043F\u0430\u043D\u043D\u044F \u043A\u043E\u0442\u0456\u0432","\u0421\u041F\u0410 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0427\u0438\u0441\u0442\u043A\u0430 \u0437\u0443\u0431\u0456\u0432 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C","\u0427\u0438\u0441\u0442\u043A\u0430 \u0432\u0443\u0445","\u041F\u0456\u0434\u0440\u0456\u0437\u0430\u043D\u043D\u044F \u043A\u0456\u0433\u0442\u0456\u0432","\u0415\u043A\u0441\u043F\u0440\u0435\u0441-\u043B\u0456\u043D\u044C\u043A\u0430","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043A\u043E\u043B\u0442\u0443\u043D\u0456\u0432","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u0435\u0440\u0441\u0442\u0456","\u041A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0433\u0440\u0443\u043C\u0456\u043D\u0433","Show grooming","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0432\u0438\u0441\u0442\u0430\u0432\u043E\u043A","\u0413\u0456\u0433\u0456\u0454\u043D\u0430 \u043F\u0430\u0440\u0430\u0430\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u0430\u043B\u043E\u0437","\u0427\u0438\u0441\u0442\u043A\u0430 \u043E\u0447\u0435\u0439","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u043A\u043E\u0433\u0442\u0456\u0432","Production","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043C\u0435\u0431\u043B\u0456\u0432","\u041C\u0435\u0431\u043B\u0456 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041A\u043E\u0440\u043F\u0443\u0441\u043D\u0456 \u043C\u0435\u0431\u043B\u0456","\u041C'\u044F\u043A\u0456 \u043C\u0435\u0431\u043B\u0456","\u041A\u0443\u0445\u043D\u0456 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0428\u0430\u0444\u0438-\u043A\u0443\u043F\u0435","\u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u0456","\u041B\u0456\u0436\u043A\u0430","\u0414\u0438\u0432\u0430\u043D\u0438","\u041A\u0440\u0456\u0441\u043B\u0430","\u0421\u0442\u043E\u043B\u0438","\u0421\u0442\u0456\u043B\u044C\u0446\u0456","\u0414\u0438\u0442\u044F\u0447\u0456 \u043C\u0435\u0431\u043B\u0456","\u041E\u0444\u0456\u0441\u043D\u0456 \u043C\u0435\u0431\u043B\u0456","\u0412\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0456 \u043C\u0435\u0431\u043B\u0456","\u041C\u0435\u0431\u043B\u0456 \u0437 \u043C\u0430\u0441\u0438\u0432\u0443","\u041C\u0435\u0431\u043B\u0456 \u0437 \u0414\u0421\u041F","\u041C\u0435\u0431\u043B\u0456 \u0437 \u041C\u0414\u0424","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u041F\u0435\u0440\u0435\u0442\u044F\u0436\u043A\u0430 \u043C\u0435\u0431\u043B\u0456\u0432","\u041E\u0431\u0431\u0438\u0432\u043A\u0430 \u043C\u0435\u0431\u043B\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0444\u0443\u0440\u043D\u0456\u0442\u0443\u0440\u0438","\u041B\u0430\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0441\u0442\u043E\u043B\u044F\u0440\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u0421\u0442\u043E\u043B\u044F\u0440\u043D\u0430 \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043D\u044F","\u0421\u0442\u043E\u043B\u044F\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0414\u0432\u0435\u0440\u0456 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0414\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u0434\u0432\u0435\u0440\u0456","\u041C\u0456\u0436\u043A\u0456\u043C\u043D\u0430\u0442\u043D\u0456 \u0434\u0432\u0435\u0440\u0456","\u0412\u0445\u0456\u0434\u043D\u0456 \u0434\u0432\u0435\u0440\u0456","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u0434\u0432\u0435\u0440\u0456","\u0411\u0440\u043E\u043D\u044C\u043E\u0432\u0430\u043D\u0456 \u0434\u0432\u0435\u0440\u0456","\u0412\u0456\u043A\u043D\u0430","\u041C\u0435\u0442\u0430\u043B\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u0456 \u0432\u0456\u043A\u043D\u0430","\u0414\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u0432\u0456\u043A\u043D\u0430","\u0410\u043B\u044E\u043C\u0456\u043D\u0456\u0454\u0432\u0456 \u0432\u0456\u043A\u043D\u0430","\u0421\u043A\u043B\u043E\u043F\u0430\u043A\u0435\u0442\u0438","\u0411\u0430\u043B\u043A\u043E\u043D\u0438","\u041B\u043E\u0434\u0436\u0456\u0457","\u0417\u0430\u0441\u043A\u043B\u0435\u043D\u043D\u044F \u0431\u0430\u043B\u043A\u043E\u043D\u0456\u0432","\u041E\u0431\u0448\u0438\u0432\u043A\u0430 \u0431\u0430\u043B\u043A\u043E\u043D\u0456\u0432","\u0423\u0442\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0431\u0430\u043B\u043A\u043E\u043D\u0456\u0432","\u0421\u0445\u043E\u0434\u0438","\u0414\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u0441\u0445\u043E\u0434\u0438","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u0441\u0445\u043E\u0434\u0438","\u0411\u0435\u0442\u043E\u043D\u043D\u0456 \u0441\u0445\u043E\u0434\u0438","\u0413\u0432\u0438\u043D\u0442\u043E\u0432\u0456 \u0441\u0445\u043E\u0434\u0438","\u041C\u0430\u0440\u0448\u043E\u0432\u0456 \u0441\u0445\u043E\u0434\u0438","\u041F\u0435\u0440\u0438\u043B\u0430","\u041F\u043E\u0440\u0443\u0447\u043D\u0456","\u0411\u0430\u043B\u044F\u0441\u0438\u043D\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043C\u0435\u0442\u0430\u043B\u043E\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0439","\u0417\u0432\u0430\u0440\u044E\u0432\u0430\u043B\u044C\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041A\u043E\u0432\u043A\u0430","\u0425\u0443\u0434\u043E\u0436\u043D\u044F \u043A\u043E\u0432\u043A\u0430","\u041A\u043E\u0432\u0430\u043D\u0456 \u0432\u0438\u0440\u043E\u0431\u0438","\u041A\u043E\u0432\u0430\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u041A\u043E\u0432\u0430\u043D\u0456 \u043E\u0433\u043E\u0440\u043E\u0436\u0456","\u041A\u043E\u0432\u0430\u043D\u0456 \u043F\u0435\u0440\u0438\u043B\u0430","\u041A\u043E\u0432\u0430\u043D\u0456 \u043D\u0430\u0432\u0456\u0441\u0438","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u043E\u0433\u043E\u0440\u043E\u0436\u0456","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u043D\u0430\u0432\u0456\u0441\u0438","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457","\u041D\u0435\u0440\u0436\u0430\u0432\u0456\u044E\u0447\u0430 \u0441\u0442\u0430\u043B\u044C","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0432\u043E\u0440\u0456\u0442","\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0420\u043E\u0437\u0441\u0443\u0432\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0412\u0456\u0434\u043A\u0430\u0442\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0420\u043E\u0437\u043F\u0430\u0448\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0421\u0435\u043A\u0446\u0456\u0439\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0420\u0443\u043B\u043E\u043D\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0428\u043B\u0430\u0433\u0431\u0430\u0443\u043C\u0438","\u0420\u043E\u043B\u043B\u0435\u0442\u0438","\u0420\u043E\u043B\u044C\u0441\u0442\u0430\u0432\u043D\u0456","\u0416\u0430\u043B\u044E\u0437\u0456","\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0456 \u0436\u0430\u043B\u044E\u0437\u0456","\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0456 \u0436\u0430\u043B\u044E\u0437\u0456","\u0420\u0443\u043B\u043E\u043D\u043D\u0456 \u0448\u0442\u043E\u0440\u0438","\u0420\u0438\u043C\u0441\u044C\u043A\u0456 \u0448\u0442\u043E\u0440\u0438","\u041C\u0430\u0440\u043A\u0456\u0437\u0438","\u0422\u0435\u043D\u0442\u0438","\u041D\u0430\u0432\u0456\u0441\u0438","\u041A\u043E\u0437\u0438\u0440\u043A\u0438","\u0414\u0430\u0448\u043A\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043F\u043E\u043B\u0456\u0433\u0440\u0430\u0444\u0456\u0447\u043D\u043E\u0457 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457","\u0414\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0414\u0440\u0443\u043A","\u0426\u0438\u0444\u0440\u043E\u0432\u0438\u0439 \u0434\u0440\u0443\u043A","\u041E\u0444\u0441\u0435\u0442\u043D\u0438\u0439 \u0434\u0440\u0443\u043A","\u0428\u0438\u0440\u043E\u043A\u043E\u0444\u043E\u0440\u043C\u0430\u0442\u043D\u0438\u0439 \u0434\u0440\u0443\u043A","\u0406\u043D\u0442\u0435\u0440'\u0454\u0440\u043D\u0438\u0439 \u0434\u0440\u0443\u043A","\u0414\u0440\u0443\u043A \u0432\u0456\u0437\u0438\u0442\u043E\u043A","\u0414\u0440\u0443\u043A \u043B\u0438\u0441\u0442\u0456\u0432\u043E\u043A","\u0414\u0440\u0443\u043A \u0444\u043B\u0430\u0454\u0440\u0456\u0432","\u0414\u0440\u0443\u043A \u0431\u0443\u043A\u043B\u0435\u0442\u0456\u0432","\u0414\u0440\u0443\u043A \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0456\u0432","\u0414\u0440\u0443\u043A \u0431\u0440\u043E\u0448\u0443\u0440","\u0414\u0440\u0443\u043A \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u0456\u0432","\u0414\u0440\u0443\u043A \u043F\u043B\u0430\u043A\u0430\u0442\u0456\u0432","\u0414\u0440\u0443\u043A \u0431\u0430\u043D\u0435\u0440\u0456\u0432","\u0414\u0440\u0443\u043A \u043D\u0430\u043A\u043B\u0435\u0439\u043E\u043A","\u0414\u0440\u0443\u043A \u0435\u0442\u0438\u043A\u0435\u0442\u043E\u043A","\u0414\u0440\u0443\u043A \u043D\u0430 \u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0430\u0445","\u0414\u0440\u0443\u043A \u043D\u0430 \u043A\u0440\u0443\u0436\u043A\u0430\u0445","\u0421\u0443\u0432\u0435\u043D\u0456\u0440\u043D\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u044F","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0435\u0447\u0430\u0442\u043E\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0448\u0442\u0430\u043C\u043F\u0456\u0432","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F","\u041B\u0430\u0437\u0435\u0440\u043D\u0435 \u0433\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F","\u041C\u0435\u0445\u0430\u043D\u0456\u0447\u043D\u0435 \u0433\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043C\u0435\u0442\u0430\u043B\u0456","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u0441\u043A\u043B\u0456","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u0434\u0435\u0440\u0435\u0432\u0456","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0443","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438","\u041A\u0430\u0440\u0442\u043E\u043D\u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430","\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043A\u043E\u0440\u043E\u0431\u043E\u043A","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043F\u0430\u043A\u0435\u0442\u0456\u0432","\u041F\u0430\u043F\u0435\u0440\u043E\u0432\u0456 \u043F\u0430\u043A\u0435\u0442\u0438","\u041F\u043E\u043B\u0456\u0435\u0442\u0438\u043B\u0435\u043D\u043E\u0432\u0456 \u043F\u0430\u043A\u0435\u0442\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0442\u0435\u043A\u0441\u0442\u0438\u043B\u044E","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0442\u0435\u043A\u0441\u0442\u0438\u043B\u044C\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u041F\u043E\u0441\u0442\u0456\u043B\u044C\u043D\u0430 \u0431\u0456\u043B\u0438\u0437\u043D\u0430","\u0420\u0443\u0448\u043D\u0438\u043A\u0438","\u0421\u043A\u0430\u0442\u0435\u0440\u0442\u0438\u043D\u0438","\u0421\u0435\u0440\u0432\u0435\u0442\u043A\u0438","\u0424\u0430\u0440\u0442\u0443\u0445\u0438","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0441\u043F\u0435\u0446\u043E\u0434\u044F\u0433\u0443","\u0420\u043E\u0431\u043E\u0447\u0438\u0439 \u043E\u0434\u044F\u0433","\u0423\u043D\u0456\u0444\u043E\u0440\u043C\u0430","\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u043E\u0434\u044F\u0433","\u041C\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u043E\u0434\u044F\u0433","\u041A\u0443\u0445\u0430\u0440\u0441\u044C\u043A\u0438\u0439 \u043E\u0434\u044F\u0433","\u0417\u0430\u0445\u0438\u0441\u043D\u0438\u0439 \u043E\u0434\u044F\u0433","\u041F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u0435 \u0448\u0438\u0442\u0442\u044F","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u043D\u0430 \u043E\u0434\u044F\u0437\u0456","\u041D\u0430\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0456\u0432","\u0411\u0440\u0435\u043D\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0432\u0437\u0443\u0442\u0442\u044F","\u0412\u0437\u0443\u0442\u0442\u044F \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041E\u0440\u0442\u043E\u043F\u0435\u0434\u0438\u0447\u043D\u0435 \u0432\u0437\u0443\u0442\u0442\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0430 \u043F\u043E\u0448\u0438\u0442\u0442\u044F \u0432\u0437\u0443\u0442\u0442\u044F","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0448\u043A\u0456\u0440\u0433\u0430\u043B\u0430\u043D\u0442\u0435\u0440\u0435\u0457","\u0421\u0443\u043C\u043A\u0438","\u0413\u0430\u043C\u0430\u043D\u0446\u0456","\u0420\u0435\u043C\u0435\u043D\u0456","\u041F\u043E\u0440\u0442\u0444\u0435\u043B\u0456","\u0420\u044E\u043A\u0437\u0430\u043A\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0430\u043A\u0441\u0435\u0441\u0443\u0430\u0440\u0456\u0432","\u0411\u0456\u0436\u0443\u0442\u0435\u0440\u0456\u044F","\u041F\u0440\u0438\u043A\u0440\u0430\u0441\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u044E\u0432\u0435\u043B\u0456\u0440\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u042E\u0432\u0435\u043B\u0456\u0440\u043D\u0430 \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043D\u044F","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0430\u0431\u043B\u0443\u0447\u043E\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u0435\u0440\u0435\u0436\u043E\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0443\u043B\u043E\u043D\u0456\u0432","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0440\u0430\u0441\u043B\u0435\u0442\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u044E\u0432\u0435\u043B\u0456\u0440\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u0417\u043C\u0456\u043D\u0430 \u0440\u043E\u0437\u043C\u0456\u0440\u0443 \u043A\u0430\u0431\u043B\u0443\u0447\u043A\u0438","\u0427\u0438\u0441\u0442\u043A\u0430 \u043F\u0440\u0438\u043A\u0440\u0430\u0441","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u043E\u043B\u043E\u0442\u0430","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043F\u0440\u0438\u043A\u0440\u0430\u0441\u0430\u0445","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0441\u0432\u0456\u0447\u043E\u043A","\u0410\u0440\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0456 \u0441\u0432\u0456\u0447\u043A\u0438","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0456 \u0441\u0432\u0456\u0447\u043A\u0438","\u0421\u043E\u0454\u0432\u0456 \u0441\u0432\u0456\u0447\u043A\u0438","\u0412\u043E\u0441\u043A\u043E\u0432\u0456 \u0441\u0432\u0456\u0447\u043A\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043C\u0438\u043B\u0430","\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u0435 \u043C\u0438\u043B\u043E","\u041C\u0438\u043B\u043E \u0440\u0443\u0447\u043D\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0438","\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u0430 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0430","\u041E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0430 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0430","\u041A\u0440\u0435\u043C \u0440\u0443\u0447\u043D\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043A\u043E\u043D\u0434\u0438\u0442\u0435\u0440\u0441\u044C\u043A\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u041A\u043E\u043D\u0434\u0438\u0442\u0435\u0440\u0441\u044C\u043A\u0430","\u0412\u0438\u043F\u0456\u0447\u043A\u0430","\u0422\u043E\u0440\u0442\u0438 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0456 \u0442\u043E\u0440\u0442\u0438","\u0414\u0438\u0442\u044F\u0447\u0456 \u0442\u043E\u0440\u0442\u0438","\u041A\u0430\u043F\u043A\u0435\u0439\u043A\u0438","\u041C\u0430\u043A\u0430\u0440\u0443\u043D\u0438","\u0415\u043A\u043B\u0435\u0440\u0438","\u0422\u0456\u0441\u0442\u0435\u0447\u043A\u0430","\u041F\u0435\u0447ivo","\u041F\u0440\u044F\u043D\u0438\u043A\u0438","\u0406\u043C\u0431\u0438\u0440\u043D\u0456 \u043F\u0440\u044F\u043D\u0438\u043A\u0438","\u041F\u0440\u044F\u043D\u0438\u043A\u0438 \u0437 \u0440\u043E\u0437\u043F\u0438\u0441\u043E\u043C","\u041F\u043E\u043D\u0447\u0438\u043A\u0438","\u041C\u0430\u0444\u0456\u043D\u0438","\u041A\u0440\u0443\u0430\u0441\u0430\u043D\u0438","\u0425\u043B\u0456\u0431","\u0412\u0438\u043F\u0456\u0447\u043A\u0430 \u0445\u043B\u0456\u0431\u0430","\u0411\u0435\u0437\u0434\u0440\u0456\u0436\u0434\u0436\u043E\u0432\u0438\u0439 \u0445\u043B\u0456\u0431","\u0417\u0430\u043A\u0432\u0430\u0441\u043A\u043E\u0432\u0438\u0439 \u0445\u043B\u0456\u0431","\u0420\u0435\u043C\u0435\u0441\u043B\u0435\u043D\u043D\u0456 \u0432\u0438\u0440\u043E\u0431\u0438","\u0420\u0443\u0447\u043D\u0430 \u0440\u043E\u0431\u043E\u0442\u0430","Handmade","\u0412'\u044F\u0437\u0430\u043D\u043D\u044F","\u0412'\u044F\u0437\u0430\u043D\u043D\u044F \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0412'\u044F\u0437\u0430\u043D\u0456 \u0440\u0435\u0447\u0456","\u0413\u0430\u0447\u043E\u043A","\u0421\u043F\u0438\u0446\u0456","\u041F\u043B\u0435\u0442\u0456\u043D\u043D\u044F","\u041C\u0430\u043A\u0440\u0430\u043C\u0435","\u041F\u043B\u0435\u0442\u0456\u043D\u043D\u044F \u0437 \u043B\u043E\u0437\u0438","\u041F\u043B\u0435\u0442\u0456\u043D\u043D\u044F \u043A\u043E\u0448\u0438\u043A\u0456\u0432","\u0413\u043E\u043D\u0447\u0430\u0440\u0441\u0442\u0432\u043E","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0435\u0440\u0430\u043C\u0456\u043A\u0438","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0438\u0439 \u043F\u043E\u0441\u0443\u0434","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043A\u0435\u0440\u0430\u043C\u0456\u043A\u0430","\u041B\u0456\u043F\u043B\u0435\u043D\u043D\u044F","\u0421\u043A\u0443\u043B\u044C\u043F\u0442\u0443\u0440\u0430","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0441\u043A\u043B\u0430","\u0421\u043A\u043B\u044F\u043D\u0456 \u0432\u0438\u0440\u043E\u0431\u0438","\u0414\u043C\u0443\u0445\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u0412\u0456\u0442\u0440\u0430\u0436\u0456","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0442\u0440\u0430\u0436\u0456\u0432","\u041C\u043E\u0437\u0430\u0457\u043A\u0430","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043C\u043E\u0437\u0430\u0457\u043A\u0438","\u0414\u0435\u043A\u0443\u043F\u0430\u0436","\u0420\u043E\u0437\u043F\u0438\u0441","\u0420\u043E\u0437\u043F\u0438\u0441 \u043F\u043E \u0441\u043A\u043B\u0443","\u0420\u043E\u0437\u043F\u0438\u0441 \u043F\u043E \u0434\u0435\u0440\u0435\u0432\u0443","\u0420\u043E\u0437\u043F\u0438\u0441 \u043F\u043E \u0442\u043A\u0430\u043D\u0438\u043D\u0456","\u0411\u0430\u0442\u0456\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0456\u0433\u0440\u0430\u0448\u043E\u043A","\u041C'\u044F\u043A\u0456 \u0456\u0433\u0440\u0430\u0448\u043A\u0438","\u0414\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u0456\u0433\u0440\u0430\u0448\u043A\u0438","\u0420\u043E\u0437\u0432\u0438\u0432\u0430\u044E\u0447\u0456 \u0456\u0433\u0440\u0430\u0448\u043A\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043F\u0430\u043F\u0435\u0440\u0443","\u0420\u0443\u0447\u043D\u0438\u0439 \u043F\u0430\u043F\u0456\u0440","\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u044C\u043A\u0438\u0439 \u043F\u0430\u043F\u0456\u0440","\u0421\u043A\u0440\u0430\u043F\u0431\u0443\u043A\u0456\u043D\u0433","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043B\u0438\u0441\u0442\u0456\u0432\u043E\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0456\u0432","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u043B\u043E\u043A\u043D\u043E\u0442\u0456\u0432","\u041F\u0435\u0440\u0435\u043F\u043B\u0435\u0442\u0435\u043D\u043D\u044F","\u041F\u0430\u043B\u0456\u0442\u0443\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u043A\u043D\u0438\u0433","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0440\u0430\u043C","\u0411\u0430\u0433\u0435\u0442\u043D\u0430 \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043D\u044F","\u0420\u0430\u043C\u0438 \u0434\u043B\u044F \u043A\u0430\u0440\u0442\u0438\u043D","\u0420\u0430\u043C\u0438 \u0434\u043B\u044F \u0434\u0437\u0435\u0440\u043A\u0430\u043B","\u0420\u0430\u043C\u0438 \u0434\u043B\u044F \u0444\u043E\u0442\u043E","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0440\u043E\u0431\u0456\u0442","\u041F\u0430\u0441\u043F\u0430\u0440\u0442\u0443","\u041D\u0430\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0445\u043E\u043B\u0441\u0442\u0456\u0432","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0434\u0437\u0435\u0440\u043A\u0430\u043B","\u0424\u0430\u0446\u0435\u0442","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0441\u043A\u043B\u0430","\u0420\u0456\u0437\u043A\u0430 \u0441\u043A\u043B\u0430","\u0421\u0432\u0435\u0440\u0434\u043B\u0456\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u0417\u0430\u0433\u0430\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u041C\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u041F\u0456\u0441\u0442\u043A\u043E\u0441\u0442\u0440\u0443\u043C\u0438\u043D\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0448\u0442\u0443\u0447\u043D\u043E\u0433\u043E \u043A\u0430\u043C\u0435\u043D\u044E","\u0410\u043A\u0440\u0438\u043B\u043E\u0432\u0438\u0439 \u043A\u0430\u043C\u0456\u043D\u044C","\u041A\u0432\u0430\u0440\u0446\u043E\u0432\u0438\u0439 \u043A\u0430\u043C\u0456\u043D\u044C","\u0421\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0456","\u0421\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0456 \u0437 \u043A\u0430\u043C\u0435\u043D\u044E","\u041F\u0456\u0434\u0432\u0456\u043A\u043E\u043D\u043D\u044F","\u0421\u0445\u043E\u0434\u0438\u043D\u043A\u0438 \u0437 \u043A\u0430\u043C\u0435\u043D\u044E","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u0430\u043C\u0435\u043D\u044E","\u0413\u0440\u0430\u043D\u0456\u0442","\u041C\u0430\u0440\u043C\u0443\u0440","\u041E\u043D\u0456\u043E\u043A\u0441","\u0422\u0440\u0430\u0432\u0435\u0440\u0442\u0438\u043D","\u0420\u0456\u0437\u043A\u0430 \u043A\u0430\u043C\u0435\u043D\u044E","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0430\u043C\u0435\u043D\u044E","\u041F\u0430\u043C'\u044F\u0442\u043D\u0438\u043A\u0438","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u043C'\u044F\u0442\u043D\u0438\u043A\u0456\u0432","\u041D\u0430\u0434\u0433\u0440\u043E\u0431\u043A\u0438","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043F\u0430\u043C'\u044F\u0442\u043D\u0438\u043A\u0430\u0445","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u043C'\u044F\u0442\u043D\u0438\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442","\u0411\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u0432\u0430\u0440\u0442\u0438\u0440","\u0420\u0435\u043C\u043E\u043D\u0442 \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432","\u041A\u043E\u0441\u043C\u0435\u0442\u0438\u0447\u043D\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442","\u041A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442","\u0404\u0432\u0440\u043E\u0440\u0435\u043C\u043E\u043D\u0442","\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u044C\u043A\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0456\u0434 \u043A\u043B\u044E\u0447","\u0420\u0435\u043C\u043E\u043D\u0442 \u043E\u0444\u0456\u0441\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0438\u0445 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u041E\u0437\u0434\u043E\u0431\u043B\u044E\u0432\u0430\u043B\u044C\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0441\u0442\u0456\u043D","\u0412\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0456\u043D","\u0428\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0428\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430 \u0441\u0442\u0456\u043D","\u0428\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430 \u0441\u0442\u0435\u043B\u0456","\u041C\u0430\u0448\u0438\u043D\u043D\u0430 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430","\u0428\u043F\u0430\u043A\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u0428\u043F\u0430\u043A\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0456\u043D","\u0428\u043F\u0430\u043A\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0435\u043B\u0456","\u041C\u0430\u043B\u044F\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0456\u043D","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0435\u043B\u0456","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0435 \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u0435\u043D\u0435\u0446\u0456\u0430\u043D\u0441\u044C\u043A\u0430 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430","\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043D\u0430 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430","\u041F\u043E\u043A\u043B\u0435\u0439\u043A\u0430 \u0448\u043F\u0430\u043B\u0435\u0440","\u0420\u0456\u0434\u043A\u0456 \u0448\u043F\u0430\u043B\u0435\u0440\u0438","\u0424\u043E\u0442\u043E\u0448\u043F\u0430\u043B\u0435\u0440\u0438","\u041F\u0456\u0434\u043B\u043E\u0433\u043E\u0432\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0421\u0442\u044F\u0436\u043A\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0438","\u041D\u0430\u043B\u0438\u0432\u043D\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043B\u0430\u043C\u0456\u043D\u0430\u0442\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u043D\u043E\u0457 \u0434\u043E\u0448\u043A\u0438","\u0426\u0438\u043A\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u0443","\u0428\u043B\u0456\u0444\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u0443","\u041B\u0430\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043B\u0456\u043D\u043E\u043B\u0435\u0443\u043C\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043A\u043E\u0432\u0440\u043E\u043B\u0456\u043D\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043B\u0438\u0442\u043A\u0438","\u041E\u0431\u043B\u0438\u0446\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u043B\u0438\u0442\u043A\u043E\u044E","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043A\u0435\u0440\u0430\u043C\u043E\u0433\u0440\u0430\u043D\u0456\u0442\u0443","\u041C\u043E\u0437\u0430\u0457\u043A\u0430 \u043F\u043B\u0438\u0442\u043A\u043E\u0432\u0430","\u0417\u0430\u0442\u0438\u0440\u043A\u0430 \u0448\u0432\u0456\u0432","\u0421\u0442\u0435\u043B\u044C\u043E\u0432\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041D\u0430\u0442\u044F\u0436\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u041C\u0430\u0442\u043E\u0432\u0456 \u043D\u0430\u0442\u044F\u0436\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u0413\u043B\u044F\u043D\u0446\u0435\u0432\u0456 \u043D\u0430\u0442\u044F\u0436\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u0421\u0430\u0442\u0438\u043D\u043E\u0432\u0456 \u043D\u0430\u0442\u044F\u0436\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u0411\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0432\u043D\u0435\u0432\u0456 \u0441\u0442\u0435\u043B\u0456","\u041F\u0456\u0434\u0432\u0456\u0441\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u0421\u0442\u0435\u043B\u0456 \u0437 \u0433\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D\u0443","\u041C\u043E\u043D\u0442\u0430\u0436 \u0433\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D\u0443","\u0410\u0440\u043A\u0438","\u041F\u0435\u0440\u0435\u0433\u043E\u0440\u043E\u0434\u043A\u0438","\u041D\u0456\u0448\u0456","\u041F\u043E\u043B\u0438\u0446\u0456 \u0437 \u0433\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D\u0443","\u041A\u043E\u0440\u043E\u0431\u0438","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0415\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430","\u0420\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u0440\u043E\u0432\u043E\u0434\u043A\u0438","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u043E\u0437\u0435\u0442\u043E\u043A","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0438\u043C\u0438\u043A\u0430\u0447\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043B\u044E\u0441\u0442\u0440","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u0432\u0456\u0442\u0438\u043B\u044C\u043D\u0438\u043A\u0456\u0432","\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0440\u0438\u043B\u0430\u0434\u0456\u0432","\u041C\u043E\u043D\u0442\u0430\u0436 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u0449\u0438\u0442\u0456\u0432","\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u0431\u0443\u0434\u0438\u043D\u043A\u0443","\u0420\u043E\u0437\u0443\u043C\u043D\u0438\u0439 \u0434\u0456\u043C","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u043E\u043C\u043E\u0444\u043E\u043D\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u0435\u043E\u0434\u043E\u043C\u043E\u0444\u043E\u043D\u0456\u0432","\u0412\u0456\u0434\u0435\u043E\u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0430\u043C\u0435\u0440","\u041E\u0445\u043E\u0440\u043E\u043D\u043D\u0456 \u0441\u0438\u0441\u0442\u0435\u043C\u0438","\u0421\u0438\u0433\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u041F\u043E\u0436\u0435\u0436\u043D\u0430 \u0441\u0438\u0433\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0456\u043A\u0430","\u0420\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0432\u043E\u0434\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0442\u0440\u0443\u0431","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u0430\u043A\u043E\u0432\u0438\u043D","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0443\u043D\u0456\u0442\u0430\u0437\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0456\u0434\u0435","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0430\u043D\u043D","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u0443\u0448\u043E\u0432\u0438\u0445 \u043A\u0430\u0431\u0456\u043D","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0437\u043C\u0456\u0448\u0443\u0432\u0430\u0447\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u043E\u0439\u043B\u0435\u0440\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0444\u0456\u043B\u044C\u0442\u0440\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043B\u0456\u0447\u0438\u043B\u044C\u043D\u0438\u043A\u0456\u0432 \u0432\u043E\u0434\u0438","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0430\u043B\u044C\u043D\u0438\u0445 \u043C\u0430\u0448\u0438\u043D","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u0438\u0439\u043D\u0438\u0445 \u043C\u0430\u0448\u0438\u043D","\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0433\u0430\u0437\u043E\u0432\u0438\u0445 \u043F\u043B\u0438\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0430\u043D\u0442\u0435\u0445\u043D\u0456\u043A\u0438","\u0423\u0441\u0443\u043D\u0435\u043D\u043D\u044F \u0437\u0430\u0441\u043E\u0440\u0456\u0432","\u0423\u0441\u0443\u043D\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0442\u0456\u043A\u0430\u043D\u044C","\u041F\u0440\u043E\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0430\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457","\u041E\u043F\u0430\u043B\u0435\u043D\u043D\u044F","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u0430\u0434\u0456\u0430\u0442\u043E\u0440\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u0430\u0434\u0456\u0430\u0442\u043E\u0440\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u043E\u0442\u043B\u0456\u0432","\u0413\u0430\u0437\u043E\u0432\u0456 \u043A\u043E\u0442\u043B\u0438","\u0415\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u043D\u0456 \u043A\u043E\u0442\u043B\u0438","\u0422\u0432\u0435\u0440\u044C\u043E\u043F\u0430\u043B\u0438\u0432\u043D\u0456 \u043A\u043E\u0442\u043B\u0438","\u0422\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0412\u043E\u0434\u044F\u043D\u0430 \u0442\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0415\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u043D\u0430 \u0442\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0406\u043D\u0444\u0440\u0430\u0447\u0435\u0440\u0432\u043E\u043D\u0430 \u0442\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0456\u044F","\u041C\u043E\u043D\u0442\u0430\u0436 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0456\u0457","\u0412\u0438\u0442\u044F\u0436\u043A\u0430","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0438\u0442\u044F\u0436\u043E\u043A","\u041F\u0440\u0438\u043F\u043B\u0438\u0432\u043D\u0430 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0456\u044F","\u0412\u0438\u0442\u044F\u0436\u043D\u0430 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0456\u044F","\u0420\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0446\u0456\u044F","\u041A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u041C\u043E\u043D\u0442\u0430\u0436 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u041E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0427\u0438\u0441\u0442\u043A\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0417\u0430\u043F\u0440\u0430\u0432\u043A\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u041F\u043E\u043A\u0440\u0456\u0432\u0435\u043B\u044C\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041F\u043E\u043A\u0440\u0456\u0432\u043B\u044F","\u041C\u043E\u043D\u0442\u0430\u0436 \u0434\u0430\u0445\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u0434\u0430\u0445\u0443","\u0423\u0442\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0434\u0430\u0445\u0443","\u0413\u0456\u0434\u0440\u043E\u0456\u0437\u043E\u043B\u044F\u0446\u0456\u044F \u0434\u0430\u0445\u0443","\u041C\u0435\u0442\u0430\u043B\u043E\u0447\u0435\u0440\u0435\u043F\u0438\u0446\u044F","\u041F\u0440\u043E\u0444\u043D\u0430\u0441\u0442\u0438\u043B","\u0411\u0456\u0442\u0443\u043C\u043D\u0430 \u0447\u0435\u0440\u0435\u043F\u0438\u0446\u044F","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0430 \u0447\u0435\u0440\u0435\u043F\u0438\u0446\u044F","\u0424\u0430\u043B\u044C\u0446\u0435\u0432\u0430 \u043F\u043E\u043A\u0440\u0456\u0432\u043B\u044F","\u041F\u043B\u043E\u0441\u043A\u0430 \u043F\u043E\u043A\u0440\u0456\u0432\u043B\u044F","\u041C'\u044F\u043A\u0430 \u043F\u043E\u043A\u0440\u0456\u0432\u043B\u044F","\u0420\u0438\u043D\u0432\u0438","\u0412\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u0438","\u0424\u0430\u0441\u0430\u0434\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041E\u0437\u0434\u043E\u0431\u043B\u0435\u043D\u043D\u044F \u0444\u0430\u0441\u0430\u0434\u0456\u0432","\u0423\u0442\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0444\u0430\u0441\u0430\u0434\u0456\u0432","\u041C\u043E\u043A\u0440\u0438\u0439 \u0444\u0430\u0441\u0430\u0434","\u0412\u0435\u043D\u0442\u0438\u043B\u044C\u043E\u0432\u0430\u043D\u0438\u0439 \u0444\u0430\u0441\u0430\u0434","\u0421\u0430\u0439\u0434\u0438\u043D\u0433","\u0411\u043B\u043E\u043A-\u0445\u0430\u0443\u0441","\u0428\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430 \u0444\u0430\u0441\u0430\u0434\u0443","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0444\u0430\u0441\u0430\u0434\u0443","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430 \u0444\u0430\u0441\u0430\u0434\u0443","\u041E\u0431\u043B\u0438\u0446\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u043B\u0438\u0442\u043A\u043E\u044E \u0444\u0430\u0441\u0430\u0434\u0443","\u041C\u0438\u0442\u0442\u044F \u0444\u0430\u0441\u0430\u0434\u0456\u0432","\u041F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u0456 \u0430\u043B\u044C\u043F\u0456\u043D\u0456\u0441\u0442\u0438","\u0412\u0438\u0441\u043E\u0442\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0411\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432","\u041A\u0430\u0440\u043A\u0430\u0441\u043D\u0456 \u0431\u0443\u0434\u0438\u043D\u043A\u0438","\u0411\u0443\u0434\u0438\u043D\u043A\u0438 \u0437 \u0431\u0440\u0443\u0441\u0430","\u0411\u0443\u0434\u0438\u043D\u043A\u0438 \u0437 \u0446\u0435\u0433\u043B\u0438","\u0411\u0443\u0434\u0438\u043D\u043A\u0438 \u0437 \u043F\u0438\u043D\u043E\u0431\u043B\u043E\u043A\u0443","\u0411\u0443\u0434\u0438\u043D\u043A\u0438 \u0437 \u0433\u0430\u0437\u043E\u0431\u043B\u043E\u043A\u0443","\u041C\u043E\u043D\u043E\u043B\u0456\u0442\u043D\u0435 \u0431\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E","\u0424\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442","\u0421\u0442\u0440\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442","\u041F\u043B\u0438\u0442\u043D\u0438\u0439 \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442","\u041F\u0430\u043B\u044C\u043E\u0432\u0438\u0439 \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442","\u041A\u043B\u0430\u0434\u043A\u0430","\u041A\u043B\u0430\u0434\u043A\u0430 \u0446\u0435\u0433\u043B\u0438","\u041A\u043B\u0430\u0434\u043A\u0430 \u0431\u043B\u043E\u043A\u0456\u0432","\u041E\u0431\u043B\u0438\u0446\u044E\u0432\u0430\u043B\u044C\u043D\u0430 \u043A\u043B\u0430\u0434\u043A\u0430","\u0411\u0435\u0442\u043E\u043D\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0417\u0430\u043B\u0438\u0432\u043A\u0430 \u0431\u0435\u0442\u043E\u043D\u0443","\u0410\u0440\u043C\u0443\u0432\u0430\u043D\u043D\u044F","\u041E\u043F\u0430\u043B\u0443\u0431\u043A\u0430","\u0417\u0435\u043C\u043B\u044F\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0412\u0438\u043A\u043E\u043F\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0456\u043B\u044F\u043D\u043A\u0438","\u0412\u0438\u0442\u043E\u0440\u0444\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0441\u0442\u0456\u043D","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u043F\u0435\u0440\u0435\u0433\u043E\u0440\u043E\u0434\u043E\u043A","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u043F\u0456\u0434\u043B\u043E\u0433\u0438","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0441\u0442\u0435\u043B\u0456","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0432\u0456\u043A\u043E\u043D","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0434\u0432\u0435\u0440\u0435\u0439","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043C\u0456\u0442\u0442\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0435\u0445\u043D\u0456\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043E\u0431\u0443\u0442\u043E\u0432\u043E\u0457 \u0442\u0435\u0445\u043D\u0456\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u0430\u043B\u044C\u043D\u0438\u0445 \u043C\u0430\u0448\u0438\u043D","\u0420\u0435\u043C\u043E\u043D\u0442 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u043E\u0440\u043E\u0437\u0438\u043B\u044C\u043D\u0438\u0445 \u043A\u0430\u043C\u0435\u0440","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u0438\u0439\u043D\u0438\u0445 \u043C\u0430\u0448\u0438\u043D","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043B\u0438\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u0433\u0430\u0437\u043E\u0432\u0438\u0445 \u043F\u043B\u0438\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u0435\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u043D\u0438\u0445 \u043F\u043B\u0438\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u0434\u0443\u0445\u043E\u0432\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u0456\u043A\u0440\u043E\u0445\u0432\u0438\u043B\u044C\u043E\u0432\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u0430\u0432\u043E\u0432\u0430\u0440\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u0430\u0432\u043E\u043C\u0430\u0448\u0438\u043D","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u0440\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u0431\u043B\u0435\u043D\u0434\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u0456\u043A\u0441\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C'\u044F\u0441\u043E\u0440\u0443\u0431\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u043E\u043A\u043E\u0432\u0438\u0436\u0438\u043C\u0430\u043B\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u043E\u0441\u0442\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0447\u0430\u0439\u043D\u0438\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u0430\u0441\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0430\u0440\u043E\u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0438\u043B\u043E\u0441\u043E\u0441\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0440\u043E\u0431\u043E\u0442\u0456\u0432-\u043F\u0438\u043B\u043E\u0441\u043E\u0441\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043B\u0430\u0437\u043C\u043E\u0432\u0438\u0445 \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 LED \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 Smart TV","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u043E\u043D\u0456\u0442\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0440\u0456\u0432","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0440\u043E\u043D\u0448\u0442\u0435\u0439\u043D\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0430\u0443\u0434\u0456\u043E\u0442\u0435\u0445\u043D\u0456\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0445 \u0446\u0435\u043D\u0442\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0456\u0434\u0441\u0438\u043B\u044E\u0432\u0430\u0447\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043D\u0430\u0432\u0443\u0448\u043D\u0438\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 iPhone","\u0420\u0435\u043C\u043E\u043D\u0442 Samsung","\u0420\u0435\u043C\u043E\u043D\u0442 Xiaomi","\u0417\u0430\u043C\u0456\u043D\u0430 \u0435\u043A\u0440\u0430\u043D\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u044F","\u0417\u0430\u043C\u0456\u043D\u0430 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u043E\u0437'\u0454\u043C\u0443 \u0437\u0430\u0440\u044F\u0434\u043A\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043D\u043E\u043F\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0434\u0438\u043D\u0430\u043C\u0456\u043A\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043C\u0456\u043A\u0440\u043E\u0444\u043E\u043D\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0437\u0430\u0434\u043D\u044C\u043E\u0457 \u043A\u0440\u0438\u0448\u043A\u0438","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0432\u043E\u0434\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 iPad","\u0420\u0435\u043C\u043E\u043D\u0442 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 MacBook","\u0427\u0438\u0441\u0442\u043A\u0430 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043C\u0430\u0442\u0440\u0438\u0446\u0456","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043B\u0430\u0432\u0456\u0430\u0442\u0443\u0440\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0436\u043E\u0440\u0441\u0442\u043A\u043E\u0433\u043E \u0434\u0438\u0441\u043A\u0430","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F SSD","\u0417\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u043D\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456","\u0417\u0430\u043C\u0456\u043D\u0430 \u0442\u0435\u0440\u043C\u043E\u043F\u0430\u0441\u0442\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u041F\u041A","\u0417\u0431\u0456\u0440\u043A\u0430 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u0410\u043F\u0433\u0440\u0435\u0439\u0434 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u041A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u041F\u041A","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F Windows","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F Linux","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F macOS","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0456\u0432","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F Wi-Fi","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0440\u043E\u0443\u0442\u0435\u0440\u0430","\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u043D\u0442\u0435\u0440\u0430","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u0438\u043D\u0442\u0435\u0440\u0430","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u0430\u043D\u0435\u0440\u0430","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0440\u0443\u0441\u0456\u0432","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0440\u0443\u0441\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u043D\u0442\u0438\u0432\u0456\u0440\u0443\u0441\u0430","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043D\u0442\u0438\u0432\u0456\u0440\u0443\u0441\u0430","\u0427\u0438\u0441\u0442\u043A\u0430 \u0432\u0456\u0434 \u0432\u0456\u0440\u0443\u0441\u0456\u0432","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0456\u0432","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0444\u043E\u0442\u043E","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0444\u043E\u0440\u043C\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0435 \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445","\u041F\u0440\u0438\u0441\u043A\u043E\u0440\u0435\u043D\u043D\u044F \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0430","\u041E\u043F\u0442\u0438\u043C\u0456\u0437\u0430\u0446\u0456\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0438","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F BIOS","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0447\u0438\u0445","\u0427\u0438\u0441\u0442\u043A\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0433\u043E \u0431\u043B\u043E\u043A\u0443","\u0410\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0456\u0441","\u0421\u0422\u041E","\u0420\u0435\u043C\u043E\u043D\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u0456\u0432","\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0435 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u041E","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0430\u0432\u0442\u043E","\u041A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u0430 \u0434\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0445\u043E\u0434\u043E\u0432\u043E\u0457","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043F\u0456\u0434\u0432\u0456\u0441\u043A\u0438","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0433\u0430\u043B\u044C\u043C","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u041A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043C\u0430\u0441\u043B\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0444\u0456\u043B\u044C\u0442\u0440\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043C\u0430\u0441\u043B\u044F\u043D\u043E\u0433\u043E \u0444\u0456\u043B\u044C\u0442\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u043E\u0433\u043E \u0444\u0456\u043B\u044C\u0442\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u0430\u043B\u0438\u0432\u043D\u043E\u0433\u043E \u0444\u0456\u043B\u044C\u0442\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0441\u0430\u043B\u043E\u043D\u043D\u043E\u0433\u043E \u0444\u0456\u043B\u044C\u0442\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0441\u0432\u0456\u0447\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0413\u0420\u041C","\u0420\u0435\u043C\u043E\u043D\u0442 \u0445\u043E\u0434\u043E\u0432\u043E\u0457","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0456\u0434\u0432\u0456\u0441\u043A\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0430\u043C\u043E\u0440\u0442\u0438\u0437\u0430\u0442\u043E\u0440\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0441\u0442\u0456\u0439\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0441\u0430\u0439\u043B\u0435\u043D\u0442\u0431\u043B\u043E\u043A\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0432\u0430\u0436\u0435\u043B\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u0443\u043B\u044C\u043E\u0432\u0438\u0445","\u0417\u0430\u043C\u0456\u043D\u0430 \u043D\u0430\u043A\u043E\u043D\u0435\u0447\u043D\u0438\u043A\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u0443\u043B\u044C\u043E\u0432\u0438\u0445 \u0442\u044F\u0433","\u0420\u0435\u043C\u043E\u043D\u0442 \u0433\u0430\u043B\u044C\u043C","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0430\u043B\u044C\u043C\u0456\u0432\u043D\u0438\u0445 \u043A\u043E\u043B\u043E\u0434\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0430\u043B\u044C\u043C\u0456\u0432\u043D\u0438\u0445 \u0434\u0438\u0441\u043A\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0430\u043B\u044C\u043C\u0456\u0432\u043D\u0438\u0445 \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0430\u043B\u044C\u043C\u0456\u0432\u043D\u043E\u0457 \u0440\u0456\u0434\u0438\u043D\u0438","\u041F\u0440\u043E\u043A\u0430\u0447\u043A\u0430 \u0433\u0430\u043B\u044C\u043C","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0440\u0430\u043D\u0441\u043C\u0456\u0441\u0456\u0457","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447","\u0420\u0435\u043C\u043E\u043D\u0442 \u041C\u041A\u041F\u041F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0410\u041A\u041F\u041F","\u0417\u0430\u043C\u0456\u043D\u0430 \u0437\u0447\u0435\u043F\u043B\u0435\u043D\u043D\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0440\u043E\u0437\u0434\u0430\u0442\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0428\u0420\u0423\u0421","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u043E\u0445\u043E\u043B\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u0430\u0434\u0456\u0430\u0442\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u043E\u043C\u043F\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0442\u0435\u0440\u043C\u043E\u0441\u0442\u0430\u0442\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0430\u043D\u0442\u0438\u0444\u0440\u0438\u0437\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u0430\u043F\u0440\u0430\u0432\u043A\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0430 \u0430\u0432\u0442\u043E","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u0430\u0434\u0456\u0430\u0442\u043E\u0440\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u0435\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438 \u0430\u0432\u0442\u043E","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0442\u0430\u0440\u0442\u0435\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430","\u0417\u0430\u0440\u044F\u0434\u043A\u0430 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u043E\u0432\u043E\u0434\u043A\u0438","\u0420\u043E\u0437\u0432\u0430\u043B-\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u043D\u044F","3D \u0440\u043E\u0437\u0432\u0430\u043B-\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u043D\u044F","\u0420\u0435\u0433\u0443\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0440\u043E\u0437\u0432\u0430\u043B\u0443","\u0420\u0435\u0433\u0443\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0445\u043E\u0436\u0434\u0435\u043D\u043D\u044F","\u0428\u0438\u043D\u043E\u043C\u043E\u043D\u0442\u0430\u0436","\u041C\u043E\u043D\u0442\u0430\u0436 \u0448\u0438\u043D","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0448\u0438\u043D","\u0411\u0430\u043B\u0430\u043D\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043B\u0456\u0441","\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u043E\u043A\u043E\u043B\u0456\u0432","\u0412\u0443\u043B\u043A\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F","\u0417\u0430\u043C\u0456\u043D\u0430 \u0432\u0435\u043D\u0442\u0438\u043B\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043E\u043B\u0456\u0441","\u0421\u0435\u0437\u043E\u043D\u043D\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F \u0448\u0438\u043D","\u0410\u0432\u0442\u043E\u043C\u0438\u0439\u043A\u0430","\u041C\u0438\u0439\u043A\u0430 \u0430\u0432\u0442\u043E","\u0420\u0443\u0447\u043D\u0430 \u043C\u0438\u0439\u043A\u0430","\u0411\u0435\u0437\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u043C\u0438\u0439\u043A\u0430","\u041C\u0438\u0439\u043A\u0430 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u041C\u0438\u0439\u043A\u0430 \u0434\u043D\u0438\u0449\u0430","\u041C\u0438\u0439\u043A\u0430 \u043A\u043E\u043B\u0456\u0441\u043D\u0438\u0445 \u0430\u0440\u043E\u043A","\u0421\u0443\u0445\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u0430\u043B\u043E\u043D\u0443","\u0412\u043E\u043B\u043E\u0433\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u0430\u043B\u043E\u043D\u0443","\u0414\u0435\u0442\u0435\u0439\u043B\u0456\u043D\u0433","\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0430 \u043C\u0438\u0439\u043A\u0430","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0441\u0430\u043B\u043E\u043D\u0443","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0441\u0438\u0434\u0456\u043D\u044C","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0441\u0442\u0435\u043B\u0456","\u0427\u0438\u0441\u0442\u043A\u0430 \u0441\u0430\u043B\u043E\u043D\u0443","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u0437\u043E\u0432\u0430","\u0410\u0431\u0440\u0430\u0437\u0438\u0432\u043D\u0435 \u043F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u0430\u0445\u0438\u0441\u043D\u0435 \u043F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u041D\u0430\u043D\u043E\u043A\u0435\u0440\u0430\u043C\u0456\u043A\u0430","\u0420\u0456\u0434\u043A\u0435 \u0441\u043A\u043B\u043E","\u0412\u043E\u0441\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u043A\u043E\u043D \u0430\u0432\u0442\u043E","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0444\u0430\u0440","\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F","\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0444\u0430\u0440","\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u0437\u043E\u0432\u0430","\u0410\u043D\u0442\u0438\u0433\u0440\u0430\u0432\u0456\u0439\u043D\u0430 \u043F\u043B\u0456\u0432\u043A\u0430","\u041E\u043A\u043B\u0435\u0439\u043A\u0430 \u0430\u0432\u0442\u043E","\u041E\u043A\u043B\u0435\u0439\u043A\u0430 \u043F\u043B\u0456\u0432\u043A\u043E\u044E","\u0412\u0456\u043D\u0456\u043B\u043E\u0432\u0430 \u043F\u043B\u0456\u0432\u043A\u0430","\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430 \u043F\u043B\u0456\u0432\u043A\u0430","\u0410\u0435\u0440\u043E\u0433\u0440\u0430\u0444\u0456\u044F","\u0420\u043E\u0437\u043F\u0438\u0441 \u0430\u0432\u0442\u043E","\u041A\u0443\u0437\u043E\u0432\u043D\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442","\u0420\u0438\u0445\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u0438\u0445\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u0437\u043E\u0432\u0430","\u0417\u0432\u0430\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u0437\u043E\u0432\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u043E\u0440\u043E\u0433\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u0440\u0438\u043B\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0434\u0432\u0435\u0440\u0435\u0439","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u0430\u043F\u043E\u0442\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0431\u0430\u043C\u043F\u0435\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u0431\u0430\u043C\u043F\u0435\u0440\u0430","\u041C\u0430\u043B\u044F\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438 \u0430\u0432\u0442\u043E","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u0432\u0442\u043E","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0435\u0442\u0430\u043B\u0435\u0439","\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u0435 \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u043E\u0432\u043D\u0435 \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0456\u0434\u0431\u0456\u0440 \u0444\u0430\u0440\u0431\u0438","\u041A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u0438\u0439 \u043F\u0456\u0434\u0431\u0456\u0440 \u0444\u0430\u0440\u0431\u0438","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443","\u0417\u0430\u0445\u0438\u0441\u0442 \u043A\u0430\u0440\u0442\u0435\u0440\u0430","\u0417\u0430\u0445\u0438\u0441\u0442 \u0434\u043D\u0438\u0449\u0430","\u0410\u043D\u0442\u0438\u043A\u043E\u0440\u043E\u0437\u0456\u0439\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430","\u0428\u0443\u043C\u043E\u0456\u0437\u043E\u043B\u044F\u0446\u0456\u044F","\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044F","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u0432\u0442\u043E\u0437\u0432\u0443\u043A\u0443","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F GPS","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u0435\u043E\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0442\u0440\u043E\u043D\u0456\u043Aa","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0430\u043C\u0435\u0440\u0438 \u0437\u0430\u0434\u043D\u044C\u043E\u0433\u043E \u0432\u0438\u0434\u0443","\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0444\u0430\u0440\u043A\u043E\u043F\u0430","\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A\u0430","\u0422\u044E\u043D\u0456\u043D\u0433","\u0422\u044E\u043D\u0456\u043D\u0433 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u0427\u0456\u043F-\u0442\u044E\u043D\u0456\u043D\u0433","\u0422\u044E\u043D\u0456\u043D\u0433 \u043F\u0456\u0434\u0432\u0456\u0441\u043A\u0438","\u0422\u044E\u043D\u0456\u043D\u0433 \u0441\u0430\u043B\u043E\u043D\u0443","\u041F\u0435\u0440\u0435\u0442\u044F\u0436\u043A\u0430 \u0441\u0430\u043B\u043E\u043D\u0443","\u041F\u0435\u0440\u0435\u0442\u044F\u0436\u043A\u0430 \u0441\u0438\u0434\u0456\u043D\u044C","\u041F\u0435\u0440\u0435\u0442\u044F\u0436\u043A\u0430 \u043A\u0435\u0440\u043C\u0430","\u0422\u044E\u043D\u0456\u043D\u0433 \u0441\u0432\u0456\u0442\u043B\u0430","\u041A\u0441\u0435\u043D\u043E\u043D","\u0411\u0456\u043A\u0441\u0435\u043D\u043E\u043D","LED \u043B\u0430\u043C\u043F\u0438","\u0415\u0432\u0430\u043A\u0443\u0430\u0442\u043E\u0440","\u0415\u0432\u0430\u043A\u0443\u0430\u0446\u0456\u044F \u0430\u0432\u0442\u043E","\u0422\u0435\u0445\u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043D\u0430 \u0434\u043E\u0440\u043E\u0437\u0456","\u0412\u0430\u043D\u0442\u0430\u0436\u043D\u0456 \u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F","\u0412\u0430\u043D\u0442\u0430\u0436\u043E\u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F","\u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0432\u0430\u043D\u0442\u0430\u0436\u0456\u0432","\u0412\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043A\u0438","\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u0432\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043A\u0456\u0432","\u041D\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F","\u0420\u043E\u0437\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0441\u043C\u0456\u0442\u0442\u044F \u0432\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043C \u0430\u0432\u0442\u043E","\u041F\u0435\u0440\u0435\u0457\u0437\u0434","\u041F\u0435\u0440\u0435\u0457\u0437\u0434 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0438","\u041F\u0435\u0440\u0435\u0457\u0437\u0434 \u043E\u0444\u0456\u0441\u0443","\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0440\u0435\u0447\u0435\u0439","\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u042E\u0440\u0438\u0441\u0442","\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u0457","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u044E\u0440\u0438\u0441\u0442\u0430","\u041F\u0440\u0430\u0432\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430","\u0410\u0434\u0432\u043E\u043A\u0430\u0442","\u0410\u0434\u0432\u043E\u043A\u0430\u0442\u0441\u044C\u043A\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043D\u0438\u0446\u0442\u0432\u043E \u0432 \u0441\u0443\u0434\u0456","\u0421\u0443\u0434\u043E\u0432\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u0426\u0438\u0432\u0456\u043B\u044C\u043D\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u041A\u0440\u0438\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u0413\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u044C\u043A\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0437\u043E\u0432\u0456\u0432","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0441\u043A\u0430\u0440\u0433","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0456\u0432","\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0456\u0432","\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0430 \u0435\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430","\u041F\u0440\u0430\u0432\u043E\u0432\u0430 \u0435\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432","\u041D\u043E\u0442\u0430\u0440\u0456\u0443\u0441","\u041D\u043E\u0442\u0430\u0440\u0456\u0430\u043B\u044C\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041D\u043E\u0442\u0430\u0440\u0456\u0430\u043B\u044C\u043D\u0435 \u043F\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u043D\u044F","\u0414\u043E\u0432\u0456\u0440\u0435\u043D\u043E\u0441\u0442\u0456","\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430 \u0434\u043E\u0432\u0456\u0440\u0435\u043D\u0456\u0441\u0442\u044C","\u0414\u043E\u0432\u0456\u0440\u0435\u043D\u0456\u0441\u0442\u044C \u043D\u0430 \u0430\u0432\u0442\u043E","\u0414\u043E\u0432\u0456\u0440\u0435\u043D\u0456\u0441\u0442\u044C \u043D\u0430 \u0434\u0438\u0442\u0438\u043D\u0443","\u0417\u0430\u043F\u043E\u0432\u0456\u0442\u0438","\u0421\u043F\u0430\u0434\u0449\u0438\u043D\u0430","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0438","\u0412\u0441\u0442\u0443\u043F \u0443 \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0443","\u0421\u0432\u0456\u0434\u043E\u0446\u0442\u0432\u043E \u043F\u0440\u043E \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0443","\u041D\u043E\u0442\u0430\u0440\u0456\u0430\u043B\u044C\u043D\u0435 \u0437\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F","\u0417\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F \u043A\u043E\u043F\u0456\u0439","\u0417\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F \u043F\u0456\u0434\u043F\u0438\u0441\u0456\u0432","\u0417\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u0410\u043F\u043E\u0441\u0442\u0438\u043B\u044C","\u041B\u0435\u0433\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0441\u044C\u043A\u0430 \u043B\u0435\u0433\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0431\u0456\u0437\u043D\u0435\u0441\u0443","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0424\u041E\u041F","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0422\u041E\u0412","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u041F\u041F","\u041B\u0456\u043A\u0432\u0456\u0434\u0430\u0446\u0456\u044F \u0424\u041E\u041F","\u041B\u0456\u043A\u0432\u0456\u0434\u0430\u0446\u0456\u044F \u0422\u041E\u0412","\u0417\u043C\u0456\u043D\u0430 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430","\u0417\u043C\u0456\u043D\u0430 \u0443\u0447\u0430\u0441\u043D\u0438\u043A\u0456\u0432","\u0412\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0437\u043C\u0456\u043D \u0434\u043E \u0441\u0442\u0430\u0442\u0443\u0442\u0443","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0457 \u043C\u0430\u0440\u043A\u0438","\u041F\u0430\u0442\u0435\u043D\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u0410\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0435 \u043F\u0440\u0430\u0432\u043E","\u041B\u0456\u0446\u0435\u043D\u0437\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u0435\u043C\u0435\u043B\u044C\u043D\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0437\u0435\u043C\u043B\u0456","\u041F\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u0437\u0435\u043C\u043B\u0456","\u041A\u0443\u043F\u0456\u0432\u043B\u044F-\u043F\u0440\u043E\u0434\u0430\u0436 \u0437\u0435\u043C\u043B\u0456","\u041E\u0440\u0435\u043D\u0434\u0430 \u0437\u0435\u043C\u043B\u0456","\u041D\u0435\u0440\u0443\u0445\u043E\u043C\u0456\u0441\u0442\u044C","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u041A\u0443\u043F\u0456\u0432\u043B\u044F-\u043F\u0440\u043E\u0434\u0430\u0436 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u041E\u0440\u0435\u043D\u0434\u0430 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u0414\u043E\u0433\u043E\u0432\u0456\u0440 \u043A\u0443\u043F\u0456\u0432\u043B\u0456-\u043F\u0440\u043E\u0434\u0430\u0436\u0443","\u0414\u043E\u0433\u043E\u0432\u0456\u0440 \u043E\u0440\u0435\u043D\u0434\u0438","\u041F\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0438","\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0432 \u0435\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0456\u044E","\u041F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0439 \u043F\u0430\u0441\u043F\u043E\u0440\u0442","\u0421\u0456\u043C\u0435\u0439\u043D\u0435 \u043F\u0440\u0430\u0432\u043E","\u0420\u043E\u0437\u043B\u0443\u0447\u0435\u043D\u043D\u044F","\u041F\u043E\u0434\u0456\u043B \u043C\u0430\u0439\u043D\u0430","\u0410\u043B\u0456\u043C\u0435\u043D\u0442\u0438","\u0421\u0442\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0430\u043B\u0456\u043C\u0435\u043D\u0442\u0456\u0432","\u041F\u043E\u0437\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0430\u0442\u044C\u043A\u0456\u0432\u0441\u044C\u043A\u0438\u0445 \u043F\u0440\u0430\u0432","\u0423\u0441\u0438\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041E\u043F\u0456\u043A\u0430","\u0422\u0440\u0443\u0434\u043E\u0432\u0435 \u043F\u0440\u0430\u0432\u043E","\u0422\u0440\u0443\u0434\u043E\u0432\u0456 \u0441\u043F\u043E\u0440\u0438","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043D\u0430 \u0440\u043E\u0431\u043E\u0442\u0456","\u0421\u0442\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0438","\u041A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0456\u0457 \u043F\u0440\u0438 \u0437\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043D\u0456","\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u044C\u043A\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440","\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u044C\u043A\u0438\u0439 \u043E\u0431\u043B\u0456\u043A","\u0412\u0435\u0434\u0435\u043D\u043D\u044F \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0456\u0457","\u041F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0438\u0439 \u043E\u0431\u043B\u0456\u043A","\u041F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0437\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C","\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0430 \u0437\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0437\u0432\u0456\u0442\u043D\u043E\u0441\u0442\u0456","\u0417\u0434\u0430\u0447\u0430 \u0437\u0432\u0456\u0442\u043D\u043E\u0441\u0442\u0456","\u0414\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0456\u0457","\u0404\u0434\u0438\u043D\u0438\u0439 \u043F\u043E\u0434\u0430\u0442\u043E\u043A","\u041F\u0414\u0412","\u041E\u0431\u043B\u0456\u043A \u041F\u0414\u0412","\u041F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u0457","\u041E\u043F\u0442\u0438\u043C\u0456\u0437\u0430\u0446\u0456\u044F \u043E\u043F\u043E\u0434\u0430\u0442\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u043D\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442","\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0438","\u041A\u0430\u0434\u0440\u043E\u0432\u0438\u0439 \u043E\u0431\u043B\u0456\u043A","\u041A\u0430\u0434\u0440\u043E\u0432\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0456\u0432","\u0422\u0440\u0443\u0434\u043E\u0432\u0456 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0438","\u0410\u0443\u0434\u0438\u0442","\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0438\u0439 \u0430\u0443\u0434\u0438\u0442","\u041F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0438\u0439 \u0430\u0443\u0434\u0438\u0442","\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u0430\u0443\u0434\u0438\u0442","\u041E\u0446\u0456\u043D\u043A\u0430 \u0431\u0456\u0437\u043D\u0435\u0441\u0443","\u041E\u0446\u0456\u043D\u043A\u0430 \u043C\u0430\u0439\u043D\u0430","\u041E\u0446\u0456\u043D\u043A\u0430 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u0415\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u0430 \u043E\u0446\u0456\u043D\u043A\u0430","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0446\u044C\u043A\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041F\u0438\u0441\u044C\u043C\u043E\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0423\u0441\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041C\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0425\u0443\u0434\u043E\u0436\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041D\u0430\u0443\u043A\u043E\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u043D\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0443","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u043D\u0456\u043C\u0435\u0446\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u0456\u0441\u043F\u0430\u043D\u0441\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u0456\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u043F\u043E\u043B\u044C\u0441\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0456\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u0456\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0434\u0438\u043F\u043B\u043E\u043C\u0456\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0441\u0432\u0456\u0434\u043E\u0446\u0442\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0456\u0432","\u041D\u043E\u0442\u0430\u0440\u0456\u0430\u043B\u044C\u043D\u0435 \u0437\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u041B\u0435\u0433\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u0410\u043F\u043E\u0441\u0442\u0438\u043B\u044C \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0441\u0430\u0439\u0442\u0456\u0432","\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C","\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0456\u0433\u043E\u0440","\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u041A\u043E\u0440\u0435\u043A\u0442\u0443\u0440\u0430","\u0412\u0438\u0447\u0438\u0442\u043A\u0430 \u0442\u0435\u043A\u0441\u0442\u0456\u0432","\u041B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u0430 \u043A\u043B\u0456\u043D\u0456\u043A\u0430","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430","\u0412\u0438\u0457\u0437\u0434 \u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u0430","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440 \u043D\u0430 \u0434\u043E\u043C\u0443","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u0430","\u041E\u0433\u043B\u044F\u0434 \u0442\u0432\u0430\u0440\u0438\u043D\u0438","\u0412\u0430\u043A\u0446\u0438\u043D\u0430\u0446\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0429\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u0429\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u043A\u043E\u0442\u0456\u0432","\u0412\u0430\u043A\u0446\u0438\u043D\u0430 \u0432\u0456\u0434 \u0441\u043A\u0430\u0437\u0443","\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430 \u0432\u0430\u043A\u0446\u0438\u043D\u0430\u0446\u0456\u044F","\u0414\u0435\u0433\u0435\u043B\u044C\u043C\u0456\u043D\u0442\u0438\u0437\u0430\u0446\u0456\u044F","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u043F\u0430\u0440\u0430\u0437\u0438\u0442\u0456\u0432","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u0431\u043B\u0456\u0445","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u043A\u043B\u0456\u0449\u0456\u0432","\u0421\u0442\u0435\u0440\u0438\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0421\u0442\u0435\u0440\u0438\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043A\u0456\u0448\u043E\u043A","\u0421\u0442\u0435\u0440\u0438\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0441\u043E\u0431\u0430\u043A","\u041A\u0430\u0441\u0442\u0440\u0430\u0446\u0456\u044F","\u041A\u0430\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043A\u043E\u0442\u0456\u0432","\u041A\u0430\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u043E\u0431\u0430\u043A","\u0427\u0456\u043F\u0443\u0432\u0430\u043D\u043D\u044F","\u0427\u0456\u043F\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u0438\u0439 \u043F\u0430\u0441\u043F\u043E\u0440\u0442","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u0432\u0438\u0457\u0437\u0434\u0443","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0442\u0432\u0430\u0440\u0438\u043D","\u0423\u0417\u0414 \u0442\u0432\u0430\u0440\u0438\u043D","\u0420\u0435\u043D\u0442\u0433\u0435\u043D \u0442\u0432\u0430\u0440\u0438\u043D","\u0415\u041A\u0413 \u0442\u0432\u0430\u0440\u0438\u043D","\u0410\u043D\u0430\u043B\u0456\u0437\u0438 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 \u0434\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0422\u0435\u0440\u0430\u043F\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u0442\u0456\u0432","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0440\u0438\u0437\u0443\u043D\u0456\u0432","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0442\u0430\u0445\u0456\u0432","\u0415\u043A\u0437\u043E\u0442\u0438\u0447\u043D\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438","\u0425\u0456\u0440\u0443\u0440\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041E\u043F\u0435\u0440\u0430\u0446\u0456\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C","\u041E\u0440\u0442\u043E\u043F\u0435\u0434\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041E\u0444\u0442\u0430\u043B\u044C\u043C\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0447\u0435\u0439","\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0427\u0438\u0441\u0442\u043A\u0430 \u0437\u0443\u0431\u0456\u0432 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0443\u0431\u043D\u043E\u0433\u043E \u043A\u0430\u043C\u0435\u043D\u044E","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432 \u0442\u0432\u0430\u0440\u0438\u043D","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0414\u0435\u0440\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u043A\u0456\u0440\u0438","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0443\u0445","\u041A\u0430\u0440\u0434\u0456\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041D\u0435\u0432\u0440\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041E\u043D\u043A\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0415\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0420\u0435\u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0420\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044F","\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u043E\u0433\u0430\u0445","\u0412\u0435\u0434\u0435\u043D\u043D\u044F \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456","\u0423\u0417\u0414 \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456","\u0415\u0432\u0442\u0430\u043D\u0430\u0437\u0456\u044F","\u041A\u0440\u0435\u043C\u0430\u0446\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C\u0438","\u0417\u043E\u043E\u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044F","\u0413\u043E\u0442\u0435\u043B\u044C \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0413\u043E\u0442\u0435\u043B\u044C \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A","\u0413\u043E\u0442\u0435\u043B\u044C \u0434\u043B\u044F \u043A\u043E\u0442\u0456\u0432","\u041F\u0435\u0440\u0435\u0434\u0435\u0440\u0436\u043A\u0430 \u0442\u0432\u0430\u0440\u0438\u043D","\u041F\u0435\u0440\u0435\u0434\u0435\u0440\u0436\u043A\u0430 \u0441\u043E\u0431\u0430\u043A","\u041F\u0435\u0440\u0435\u0434\u0435\u0440\u0436\u043A\u0430 \u043A\u043E\u0442\u0456\u0432","\u0414\u0435\u043D\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434","\u0412\u0438\u0433\u0443\u043B \u0441\u043E\u0431\u0430\u043A","\u0412\u0438\u0433\u0443\u043B","\u0412\u0438\u0433\u0443\u043B\u044C\u043D\u0438\u043A","\u0414\u0440\u0435\u0441\u0438\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0440\u0435\u0441\u0438\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u041A\u0456\u043D\u043E\u043B\u043E\u0433","\u041A\u0456\u043D\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u0422\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u0412\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F \u0446\u0443\u0446\u0435\u043D\u044F\u0442","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0438","\u0417\u041A\u0421","\u041E\u041A\u0414","\u0417\u0430\u0445\u0438\u0441\u043D\u043E-\u043A\u0430\u0440\u0430\u0443\u043B\u044C\u043D\u0430 \u0441\u043B\u0443\u0436\u0431\u0430","\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u043A\u0443\u0440\u0441 \u0434\u0440\u0435\u0441\u0438\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0410\u0434\u0436\u0438\u043B\u0456\u0442\u0456","\u0424\u0440\u0456\u0441\u0431\u0456","\u0417\u043E\u043E\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433","\u0425\u0435\u043D\u0434\u043B\u0456\u043D\u0433","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0432\u0438\u0441\u0442\u0430\u0432\u043E\u043A","\u0417\u043E\u043E\u0442\u0430\u043A\u0441\u0438","\u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0437\u0430 \u043A\u043E\u0440\u0434\u043E\u043D","\u0422\u0430\u043A\u0441\u0456 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0417\u043E\u043E\u043C\u0430\u0433\u0430\u0437\u0438\u043D","\u041A\u043E\u0440\u043C \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0410\u043A\u0441\u0435\u0441\u0443\u0430\u0440\u0438 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041E\u0434\u044F\u0433 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0410\u0432\u0442\u043E\u0448\u043A\u043E\u043B\u0430","\u041A\u0443\u0440\u0441\u0438 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0432\u043E\u0434\u0456\u043D\u043D\u044E","\u0410\u0432\u0442\u043E\u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440","\u0406\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0437 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F B","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F A","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F C","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F D","\u0422\u0435\u043E\u0440\u0456\u044F \u041F\u0414\u0420","\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u0437 \u043D\u0443\u043B\u044F","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043D\u0430\u0432\u0438\u0447\u043E\u043A \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043C\u0435\u0445\u0430\u043D\u0456\u043A\u0430","\u0415\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u0435 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u041A\u043E\u043D\u0442\u0440\u0430\u0432\u0430\u0440\u0456\u0439\u043D\u0435 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u041A\u0443\u0440\u0441\u0438 \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u043E\u0433\u043E \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0456\u0441\u043F\u0438\u0442\u0443","\u0421\u0443\u043F\u0440\u043E\u0432\u0456\u0434 \u043D\u0430 \u0456\u0441\u043F\u0438\u0442","\u041E\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E \u0434\u043B\u044F \u0456\u0441\u043F\u0438\u0442\u0443","\u041E\u0441\u0432\u0456\u0442\u0430","\u0420\u0435\u043F\u0435\u0442\u0438\u0442\u043E\u0440","\u0420\u0435\u043F\u0435\u0442\u0438\u0442\u043E\u0440\u0441\u0442\u0432\u043E","\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0456 \u0437\u0430\u043D\u044F\u0442\u0442\u044F","\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0456 \u0443\u0440\u043E\u043A\u0438","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0448\u043A\u043E\u043B\u0438","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u041D\u041C\u0422","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0417\u041D\u041E","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0414\u041F\u0410","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0456\u0441\u043F\u0438\u0442\u0456\u0432","\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u0437 \u0434\u043E\u043C\u0430\u0448\u043D\u0456\u043C \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\u043C","\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u043B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430","\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0420\u043E\u0437\u043C\u043E\u0432\u043D\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430","\u0414\u0456\u043B\u043E\u0432\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430","\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u0434\u043B\u044F \u0434\u0456\u0442\u0435\u0439","\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u0434\u043B\u044F \u0434\u043E\u0440\u043E\u0441\u043B\u0438\u0445","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E IELTS","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E TOEFL","\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0406\u0441\u043F\u0430\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0406\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u041F\u043E\u043B\u044C\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u041A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u041A\u043E\u0440\u0435\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0422\u0443\u0440\u0435\u0446\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0427\u0435\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0412\u0438\u0432\u0447\u0435\u043D\u043D\u044F \u043C\u043E\u0432","\u041A\u0443\u0440\u0441\u0438 \u0456\u043D\u043E\u0437\u0435\u043C\u043D\u0438\u0445 \u043C\u043E\u0432","\u041E\u043D\u043B\u0430\u0439\u043D-\u0443\u0440\u043E\u043A\u0438","\u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0456\u0439\u043D\u0435 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F","\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430","\u0410\u043B\u0433\u0435\u0431\u0440\u0430","\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0456\u044F","\u0412\u0438\u0449\u0430 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430","\u0424\u0456\u0437\u0438\u043A\u0430","\u0425\u0456\u043C\u0456\u044F","\u0411\u0456\u043E\u043B\u043E\u0433\u0456\u044F","\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0456\u044F","\u0406\u0441\u0442\u043E\u0440\u0456\u044F","\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u0423\u043A\u0440\u0430\u0457\u043D\u0438","\u0412\u0441\u0435\u0441\u0432\u0456\u0442\u043D\u044F \u0456\u0441\u0442\u043E\u0440\u0456\u044F","\u041F\u0440\u0430\u0432\u043E\u0437\u043D\u0430\u0432\u0441\u0442\u0432\u043E","\u0415\u043A\u043E\u043D\u043E\u043C\u0456\u043A\u0430","\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430","\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0443\u0432\u0430\u043D\u043D\u044F","Python","Java","C++","JavaScript","Web-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u043E\u0437\u0440\u043E\u0431\u043A\u0430 \u0441\u0430\u0439\u0442\u0456\u0432","\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0441\u0430\u0439\u0442\u0456\u0432","\u0412\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043D","\u0413\u0440\u0430\u0444\u0456\u0447\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D","Photoshop","Illustrator","CorelDRAW","3D \u043C\u043E\u0434\u0435\u043B\u044E\u0432\u0430\u043D\u043D\u044F","3ds Max","Blender","AutoCAD","\u0414\u0438\u0437\u0430\u0439\u043D \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F","\u0412\u0456\u0434\u0435\u043E\u043C\u043E\u043D\u0442\u0430\u0436 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F","Premiere Pro","After Effects","\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u044F \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F","\u041A\u0443\u0440\u0441\u0438 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457","\u041C\u0443\u0437\u0438\u043A\u0430","\u0423\u0440\u043E\u043A\u0438 \u043C\u0443\u0437\u0438\u043A\u0438","\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u043C\u0443\u0437\u0438\u043A\u0438","\u041C\u0443\u0437\u0438\u0447\u043D\u0430 \u0448\u043A\u043E\u043B\u0430","\u0423\u0440\u043E\u043A\u0438 \u0432\u043E\u043A\u0430\u043B\u0443","\u0423\u0440\u043E\u043A\u0438 \u0441\u043F\u0456\u0432\u0443","\u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0433\u043E\u043B\u043E\u0441\u0443","\u0423\u0440\u043E\u043A\u0438 \u0433\u0456\u0442\u0430\u0440\u0438","\u0413\u0456\u0442\u0430\u0440\u0430 \u0434\u043B\u044F \u043F\u043E\u0447\u0430\u0442\u043A\u0456\u0432\u0446\u0456\u0432","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0456\u0442\u0430\u0440\u0430","\u0411\u0430\u0441-\u0433\u0456\u0442\u0430\u0440\u0430","\u0423\u043A\u0443\u043B\u0435\u043B\u0435","\u0423\u0440\u043E\u043A\u0438 \u0444\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043E","\u0424\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043E \u0434\u043B\u044F \u0434\u0456\u0442\u0435\u0439","\u0424\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043E \u0434\u043B\u044F \u0434\u043E\u0440\u043E\u0441\u043B\u0438\u0445","\u0421\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440","\u0423\u0440\u043E\u043A\u0438 \u0441\u043A\u0440\u0438\u043F\u043A\u0438","\u0423\u0440\u043E\u043A\u0438 \u0432\u0456\u043E\u043B\u043E\u043D\u0447\u0435\u043B\u0456","\u0423\u0440\u043E\u043A\u0438 \u0441\u0430\u043A\u0441\u043E\u0444\u043E\u043D\u0430","\u0423\u0440\u043E\u043A\u0438 \u0444\u043B\u0435\u0439\u0442\u0438","\u0423\u0440\u043E\u043A\u0438 \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u0456\u0432","\u0423\u0434\u0430\u0440\u043D\u0456 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438","\u0421\u043E\u043B\u044C\u0444\u0435\u0434\u0436\u0456\u043E","\u041C\u0443\u0437\u0438\u0447\u043D\u0430 \u0433\u0440\u0430\u043C\u043E\u0442\u0430","\u0422\u0435\u043E\u0440\u0456\u044F \u043C\u0443\u0437\u0438\u043A\u0438","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u0434\u0438\u0442\u0438\u043D\u0438","\u0420\u0430\u043D\u043D\u0456\u0439 \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A","\u0420\u043E\u0437\u0432\u0438\u0432\u0430\u044E\u0447\u0456 \u0437\u0430\u043D\u044F\u0442\u0442\u044F","\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A","\u0417\u0430\u043D\u044F\u0442\u0442\u044F \u0434\u043B\u044F \u043C\u0430\u043B\u044E\u043A\u0456\u0432","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0448\u043A\u043E\u043B\u0438 5 \u0440\u043E\u043A\u0456\u0432","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0448\u043A\u043E\u043B\u0438 6 \u0440\u043E\u043A\u0456\u0432","\u0427\u0438\u0442\u0430\u043D\u043D\u044F","\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0447\u0438\u0442\u0430\u043D\u043D\u044E","\u0428\u0432\u0438\u0434\u043A\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044F","\u041F\u0438\u0441\u044C\u043C\u043E","\u041A\u0430\u043B\u0456\u0433\u0440\u0430\u0444\u0456\u044F","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u043F\u0430\u043C'\u044F\u0442\u0456","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u0443\u0432\u0430\u0433\u0438","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u043B\u043E\u0433\u0456\u043A\u0438","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u043C\u0438\u0441\u043B\u0435\u043D\u043D\u044F","\u041C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430 \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u043A\u0430","\u041B\u043E\u0433\u043E\u043F\u0435\u0434","\u041B\u043E\u0433\u043E\u043F\u0435\u0434\u0438\u0447\u043D\u0456 \u0437\u0430\u043D\u044F\u0442\u0442\u044F","\u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0437\u0432\u0443\u043A\u0456\u0432","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041B\u043E\u0433\u043E\u043C\u0430\u0441\u0430\u0436","\u0414\u0435\u0444\u0435\u043A\u0442\u043E\u043B\u043E\u0433","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u0439\u043D\u0456 \u0437\u0430\u043D\u044F\u0442\u0442\u044F","\u041D\u0435\u0439\u0440\u043E\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433","\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433 \u0434\u0438\u0442\u044F\u0447\u0438\u0439","\u041D\u044F\u043D\u044F","\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u043D\u044F\u043D\u0456","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0434\u0456\u0442\u044C\u043C\u0438","\u041D\u044F\u043D\u044F \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443","\u041D\u044F\u043D\u044F \u0437 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F\u043C","\u041D\u044F\u043D\u044F \u0431\u0435\u0437 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F","\u041D\u044F\u043D\u044F \u0432\u0438\u0445\u0456\u0434\u043D\u043E\u0433\u043E \u0434\u043D\u044F","\u041D\u044F\u043D\u044F \u0434\u043B\u044F \u043D\u0435\u043C\u043E\u0432\u043B\u044F\u0442\u0438","\u041D\u044F\u043D\u044F \u0434\u043B\u044F \u0434\u043E\u0448\u043A\u0456\u043B\u044C\u043D\u044F\u0442","\u041D\u044F\u043D\u044F \u0434\u043B\u044F \u0448\u043A\u043E\u043B\u044F\u0440\u0430","\u0410\u043D\u0456\u043C\u0430\u0442\u043E\u0440","\u0410\u043D\u0456\u043C\u0430\u0442\u043E\u0440\u0438 \u043D\u0430 \u0434\u0435\u043D\u044C \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u0414\u0438\u0442\u044F\u0447\u0456 \u0441\u0432\u044F\u0442\u0430","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0441\u0432\u044F\u0442","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0434\u043D\u044F \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0432\u0435\u0441\u0456\u043B\u043B\u044F","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u0456\u0432","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0437\u0430\u0445\u043E\u0434\u0456\u0432","Event-\u0430\u0433\u0435\u043D\u0446\u0456\u044F","\u0406\u0432\u0435\u043D\u0442-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440","\u0412\u0435\u0434\u0443\u0447\u0438\u0439","\u0412\u0435\u0434\u0443\u0447\u0430","\u0422\u0430\u043C\u0430\u0434\u0430","\u0412\u0435\u0434\u0443\u0447\u0438\u0439 \u0432\u0435\u0441\u0456\u043B\u043B\u044F","\u0412\u0435\u0434\u0443\u0447\u0438\u0439 \u0434\u043D\u044F \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u0412\u0435\u0434\u0443\u0447\u0438\u0439 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u0443","\u0414\u0456\u0434\u0436\u0435\u0439","DJ","\u041C\u0443\u0437\u0438\u0447\u043D\u0438\u0439 \u0441\u0443\u043F\u0440\u043E\u0432\u0456\u0434","\u0416\u0438\u0432\u0430 \u043C\u0443\u0437\u0438\u043A\u0430","\u041C\u0443\u0437\u0438\u043A\u0430\u043D\u0442\u0438","\u0413\u0443\u0440\u0442 \u043D\u0430 \u0432\u0435\u0441\u0456\u043B\u043B\u044F","\u0421\u0430\u043A\u0441\u043E\u0444\u043E\u043D\u0456\u0441\u0442","\u0421\u043A\u0440\u0438\u043F\u0430\u043B\u044C","\u041F\u0456\u0430\u043D\u0456\u0441\u0442","\u0412\u043E\u043A\u0430\u043B\u0456\u0441\u0442","\u0421\u043F\u0456\u0432\u0430\u043A","\u0421\u043F\u0456\u0432\u0430\u0447\u043A\u0430","\u0428\u043E\u0443-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430","\u0410\u0440\u0442\u0438\u0441\u0442\u0438","\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A","\u041A\u043B\u043E\u0443\u043D","\u041F\u0456\u0440\u043E\u0442\u0435\u0445\u043D\u0456\u043A\u0430","\u0424\u0435\u0454\u0440\u0432\u0435\u0440\u043A","\u0421\u0430\u043B\u044E\u0442","\u041A\u0443\u043B\u044F-\u0441\u044E\u0440\u043F\u0440\u0438\u0437","\u041F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0456 \u043A\u0443\u043B\u0456","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043A\u0443\u043B\u044F\u043C\u0438","\u0414\u0435\u043A\u043E\u0440 \u043F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0438\u043C\u0438 \u043A\u0443\u043B\u044F\u043C\u0438","\u0410\u0440\u043A\u0430 \u0437 \u043A\u0443\u043B\u044C","\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444","\u0424\u043E\u0442\u043E\u0437\u0439\u043E\u043C\u043A\u0430","\u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0430 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0439 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444","\u0421\u0456\u043C\u0435\u0439\u043D\u0430 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0414\u0438\u0442\u044F\u0447\u0430 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F \u043D\u0435\u043C\u043E\u0432\u043B\u044F\u0442","Newborn \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0412\u0430\u0433\u0456\u0442\u043D\u0456\u0441\u0442\u044C \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","Love story","\u041F\u043E\u0440\u0442\u0440\u0435\u0442\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0421\u0442\u0443\u0434\u0456\u0439\u043D\u0430 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F \u043D\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u0456","\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u0430 \u0444\u043E\u0442\u043E\u0437\u0439\u043E\u043C\u043A\u0430","\u041A\u0430\u0442\u0430\u043B\u043E\u0436\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0424\u043E\u0442\u043E\u0437\u0439\u043E\u043C\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u0456\u0432","\u0424\u0443\u0434-\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u044F","\u0417\u0439\u043E\u043C\u043A\u0430 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u0406\u043D\u0442\u0435\u0440'\u0454\u0440\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0410\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0420\u0435\u043F\u043E\u0440\u0442\u0430\u0436\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0417\u0439\u043E\u043C\u043A\u0430 \u0437\u0430\u0445\u043E\u0434\u0456\u0432","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0439","\u0420\u0435\u0442\u0443\u0448 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0439","\u041A\u043E\u043B\u044C\u043E\u0440\u043E\u043A\u043E\u0440\u0435\u043A\u0446\u0456\u044F","\u0412\u0456\u0434\u0435\u043E\u0433\u0440\u0430\u0444","\u0412\u0456\u0434\u0435\u043E\u0437\u0439\u043E\u043C\u043A\u0430","\u0412\u0456\u0434\u0435\u043E\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0439 \u0432\u0456\u0434\u0435\u043E\u0433\u0440\u0430\u0444","Love story \u0432\u0456\u0434\u0435\u043E","\u0412\u0456\u0434\u0435\u043E\u0437\u0439\u043E\u043C\u043A\u0430 \u0437\u0430\u0445\u043E\u0434\u0456\u0432","\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","\u0420\u0435\u043A\u043B\u0430\u043C\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","\u0412\u0456\u0434\u0435\u043E\u0432\u0456\u0437\u0438\u0442\u043A\u0430","\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0456\u0439\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","\u0412\u0456\u0434\u0435\u043E\u043E\u0433\u043B\u044F\u0434","\u0412\u0456\u0434\u0435\u043E\u0456\u043D\u0442\u0435\u0440\u0432'\u044E","\u0412\u0456\u0434\u0435\u043E\u0431\u043B\u043E\u0433","YouTube \u0432\u0456\u0434\u0435\u043E","\u0417\u0439\u043E\u043C\u043A\u0430 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436","Reels","TikTok","Shorts","\u0410\u0435\u0440\u043E\u0437\u0439\u043E\u043C\u043A\u0430","\u0417\u0439\u043E\u043C\u043A\u0430 \u0434\u0440\u043E\u043D\u043E\u043C","\u041A\u0432\u0430\u0434\u0440\u043E\u043A\u043E\u043F\u0442\u0435\u0440","\u041C\u043E\u043D\u0442\u0430\u0436 \u0432\u0456\u0434\u0435\u043E","\u0412\u0456\u0434\u0435\u043E\u043C\u043E\u043D\u0442\u0430\u0436 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434\u0435\u043E","\u041A\u043E\u043B\u044C\u043E\u0440\u043A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0432\u0456\u0434\u0435\u043E","\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u0435\u043E\u0440\u043E\u043B\u0456\u043A\u0456\u0412","\u0410\u043D\u0456\u043C\u0430\u0446\u0456\u044F","2D \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u044F","3D \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u044F","Motion design","\u0406\u043D\u0444\u043E\u0433\u0440\u0430\u0444\u0456\u043A\u0430","\u0410\u043D\u0456\u043C\u0430\u0446\u0456\u0439\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","Explainer video","Whiteboard animation","\u0424\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u043A\u0430","\u0424\u043B\u043E\u0440\u0438\u0441\u0442","\u0411\u0443\u043A\u0435\u0442\u0438","\u0411\u0443\u043A\u0435\u0442 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0410\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0456 \u0431\u0443\u043A\u0435\u0442\u0438","\u0411\u0443\u043A\u0435\u0442 \u043D\u0430\u0440\u0435\u0447\u0435\u043D\u043E\u0457","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0430 \u0444\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u043A\u0430","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u043B\u0443","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0441\u0442\u043E\u043B\u0456\u0432","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0435\u0437\u0438\u0434\u0456\u0443\u043C\u0443","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0430\u0440\u043A\u0438","\u0424\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u0447\u043D\u0456 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u0457","\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437\u0456 \u0441\u0432\u0456\u0436\u0438\u0445 \u043A\u0432\u0456\u0442\u0456\u0432","\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437\u0456 \u0448\u0442\u0443\u0447\u043D\u0438\u0445 \u043A\u0432\u0456\u0442\u0456\u0432","\u0412\u0456\u043D\u043E\u043A","\u0422\u0440\u0430\u0443\u0440\u043D\u0430 \u0444\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u043A\u0430","\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043A\u0432\u0456\u0442\u0456\u0432","\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043A\u0432\u0456\u0442\u0456\u0432","\u041A\u0432\u0456\u0442\u0438 \u0432 \u0448\u043B\u044F\u043F\u043D\u0456\u0439 \u043A\u043E\u0440\u043E\u0431\u0446\u0456","\u041C\u043E\u043D\u043E\u0431\u0443\u043A\u0435\u0442","\u0411\u0443\u043A\u0435\u0442 \u0442\u0440\u043E\u044F\u043D\u0434","101 \u0442\u0440\u043E\u044F\u043D\u0434\u0430","\u0415\u043A\u0437\u043E\u0442\u0438\u0447\u043D\u0456 \u043A\u0432\u0456\u0442\u0438","\u0421\u0443\u0445\u043E\u0446\u0432\u0456\u0442\u0438","\u0421\u0442\u0430\u0431\u0456\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u0456 \u043A\u0432\u0456\u0442\u0438","\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043A\u0432\u0456\u0442\u0456\u0432","\u041A\u0432\u0456\u0442\u0438 \u0437 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u044E","\u0414\u0435\u043A\u043E\u0440 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u0414\u0435\u043A\u043E\u0440 \u043D\u0430 \u0441\u0432\u044F\u0442\u043E","\u0414\u0438\u0437\u0430\u0439\u043D \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443","\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443","\u041F\u0440\u043E\u0435\u043A\u0442 \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0438","\u0414\u0438\u0437\u0430\u0439\u043D \u0431\u0443\u0434\u0438\u043D\u043A\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u043E\u0444\u0456\u0441\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u043A\u0430\u0444\u0435","\u0414\u0438\u0437\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443","3D \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0412\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443","\u041F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u041F\u0456\u0434\u0431\u0456\u0440 \u043C\u0435\u0431\u043B\u0456\u0432","\u041F\u0456\u0434\u0431\u0456\u0440 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432","\u041F\u0456\u0434\u0431\u0456\u0440 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432","\u0414\u0435\u043A\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u043E\u0440","\u0410\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0438\u0439 \u043D\u0430\u0433\u043B\u044F\u0434","\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0456\u044F \u043E\u0431'\u0454\u043A\u0442\u0430","\u0410\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u043E\u0440","\u0410\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0440\u043E\u0435\u043A\u0442 \u0431\u0443\u0434\u0438\u043D\u043A\u0443","\u041F\u0440\u043E\u0435\u043A\u0442 \u043A\u043E\u0442\u0435\u0434\u0436\u0443","\u041F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C","\u0414\u0438\u0437\u0430\u0439\u043D \u0444\u0430\u0441\u0430\u0434\u0443","\u0406\u043D\u0448\u0435"];var Si=["\u0410\u0432\u0434\u0456\u0457\u0432\u043A\u0430","\u0410\u043B\u043C\u0430\u0437\u043D\u0430","\u0410\u043B\u0443\u043F\u043A\u0430","\u0410\u043B\u0443\u0448\u0442\u0430","\u0410\u043B\u0447\u0435\u0432\u0441\u044C\u043A","\u0410\u043C\u0432\u0440\u043E\u0441\u0456\u0457\u0432\u043A\u0430","\u0410\u043D\u0430\u043D\u044C\u0457\u0432","\u0410\u043D\u0434\u0440\u0443\u0448\u0456\u0432\u043A\u0430","\u0410\u043D\u0442\u0440\u0430\u0446\u0438\u0442","\u0410\u043F\u043E\u0441\u0442\u043E\u043B\u043E\u0432\u0435","\u0410\u0440\u0431\u0443\u0437\u0438\u043D\u043A\u0430","\u0410\u0440\u043C\u044F\u043D\u0441\u044C\u043A","\u0410\u0440\u0442\u0435\u043C\u0456\u0432\u0441\u044C\u043A","\u0410\u0440\u0446\u0438\u0437","\u0411\u0430\u0431\u0430\u043D\u043A\u0430","\u0411\u0430\u0445\u043C\u0430\u0447","\u0411\u0430\u0445\u043C\u0443\u0442","\u0411\u0430\u0445\u0447\u0438\u0441\u0430\u0440\u0430\u0439","\u0411\u0430\u043B\u0430\u043A\u043B\u0456\u044F","\u0411\u0430\u043B\u0442\u0430","\u0411\u0430\u0440","\u0411\u0430\u0440\u0432\u0456\u043D\u043A\u043E\u0432\u0435","\u0411\u0430\u0440\u0430\u043D\u0456\u0432\u043A\u0430","\u0411\u0430\u0442\u0443\u0440\u0438\u043D","\u0411\u0430\u0448\u0442\u0430\u043D\u043A\u0430","\u0411\u0435\u043B\u0437","\u0411\u0435\u0440\u0434\u0438\u0447\u0456\u0432","\u0411\u0435\u0440\u0434\u044F\u043D\u0441\u044C\u043A","\u0411\u0435\u0440\u0435\u0433\u043E\u0432\u0435","\u0411\u0435\u0440\u0435\u0436\u0430\u043D\u0438","\u0411\u0435\u0440\u0435\u0437\u0430\u043D\u044C","\u0411\u0435\u0440\u0435\u0437\u043D\u0435","\u0411\u0435\u0440\u0435\u0437\u043D\u0456\u0432\u043A\u0430","\u0411\u0435\u0440\u0435\u0437\u0456\u0432\u043A\u0430","\u0411\u0435\u0440\u0448\u0430\u0434\u044C","\u0411\u0456\u043B\u0430 \u0426\u0435\u0440\u043A\u0432\u0430","\u0411\u0456\u043B\u0433\u043E\u0440\u043E\u0434-\u0414\u043D\u0456\u0441\u0442\u0440\u043E\u0432\u0441\u044C\u043A\u0438\u0439","\u0411\u0456\u043B\u0433\u043E\u0440\u043E\u0434","\u0411\u0456\u043B\u0438\u0446\u044C\u043A\u0435","\u0411\u0456\u043B\u043E\u0433\u0456\u0440'\u044F","\u0411\u0456\u043B\u043E\u0433\u0456\u0440\u0441\u044C\u043A","\u0411\u0456\u043B\u043E\u0437\u0435\u0440\u043A\u0430","\u0411\u0456\u043B\u043E\u043A\u0443\u0440\u0430\u043A\u0438\u043D\u0435","\u0411\u0456\u043B\u043E\u043F\u0456\u043B\u043B\u044F","\u0411\u0456\u043B\u043E\u0432\u043E\u0434\u0441\u044C\u043A","\u0411\u0456\u043B\u044C\u043C\u0430\u043A","\u0411\u043E\u0431\u0440\u0438\u043D\u0435\u0446\u044C","\u0411\u043E\u0431\u0440\u043E\u0432\u0438\u0446\u044F","\u0411\u043E\u0433\u043E\u0434\u0443\u0445\u0456\u0432","\u0411\u043E\u0433\u043E\u0440\u043E\u0434\u0447\u0430\u043D\u0438","\u0411\u043E\u0433\u0443\u0441\u043B\u0430\u0432","\u0411\u043E\u043B\u0433\u0440\u0430\u0434","\u0411\u043E\u043B\u0435\u0445\u0456\u0432","\u0411\u043E\u0440\u0437\u043D\u0430","\u0411\u043E\u0440\u0438\u0441\u043B\u0430\u0432","\u0411\u043E\u0440\u0438\u0441\u043F\u0456\u043B\u044C","\u0411\u043E\u0440\u0449\u0456\u0432","\u0411\u043E\u044F\u0440\u043A\u0430","\u0411\u0440\u043E\u0432\u0430\u0440\u0438","\u0411\u0440\u043E\u0434\u0438","\u0411\u0440\u044F\u043D\u043A\u0430","\u0411\u0443\u0447\u0430","\u0411\u0443\u0447\u0430\u0447","\u0412\u0430\u043B\u043A\u0438","\u0412\u0430\u0441\u0438\u043B\u0456\u0432\u043A\u0430","\u0412\u0430\u0441\u0438\u043B\u044C\u043A\u0456\u0432","\u0412\u0430\u0442\u0443\u0442\u0456\u043D\u0435","\u0412\u0430\u0448\u043A\u0456\u0432\u0446\u0456","\u0412\u0435\u043B\u0438\u043A\u0430 \u0411\u0430\u0433\u0430\u0447\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u0411\u0456\u043B\u043E\u0437\u0435\u0440\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u0414\u043E\u0431\u0440\u043E\u043D\u044C","\u0412\u0435\u043B\u0438\u043A\u0430 \u041B\u0435\u043F\u0435\u0442\u0438\u0445\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u0456\u0432\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u041D\u043E\u0432\u043E\u0441\u0456\u043B\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u041F\u0438\u0441\u0430\u0440\u0456\u0432\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0456 \u041C\u043E\u0441\u0442\u0438","\u0412\u0435\u0440\u0431\u043A\u0430","\u0412\u0435\u0440\u0445\u0456\u0432\u0446\u0435\u0432\u0435","\u0412\u0435\u0440\u0445\u043D\u0454 \u0421\u0438\u043D\u044C\u043E\u0432\u0438\u0434\u043D\u0435","\u0412\u0435\u0440\u0445\u043D\u044C\u043E\u0434\u043D\u0456\u043F\u0440\u043E\u0432\u0441\u044C\u043A","\u0412\u0435\u0441\u0435\u043B\u0435","\u0412\u0435\u0441\u0435\u043B\u0438\u043D\u043E\u0432\u0435","\u0412\u0438\u0436\u043D\u0438\u0446\u044F","\u0412\u0438\u043B\u043A\u043E\u0432\u0435","\u0412\u0456\u043D\u043D\u0438\u0446\u044F","\u0412\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u0456\u0432","\u0412\u0438\u0448\u0433\u043E\u0440\u043E\u0434","\u0412\u0438\u0448\u043D\u0435\u0432\u0435","\u0412\u043E\u0432\u0447\u0430\u043D\u0441\u044C\u043A","\u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0441\u044C\u043A","\u0412\u043E\u043B\u043D\u043E\u0432\u0430\u0445\u0430","\u0412\u043E\u043B\u043E\u0434\u0438\u043C\u0438\u0440","\u0412\u043E\u043B\u043E\u0434\u0438\u043C\u0438\u0440\u0435\u0446\u044C","\u0412\u043E\u043B\u043E\u0447\u0438\u0441\u044C\u043A","\u0412\u043E\u043B\u044C\u043D\u043E\u0433\u0456\u0440\u0441\u044C\u043A","\u0412\u043E\u0440\u043E\u0436\u0431\u0430","\u0412\u043E\u0440\u043E\u043D\u0456\u0432","\u0412\u0443\u0433\u043B\u0435\u0434\u0430\u0440","\u0412\u0443\u0433\u043B\u0435\u0433\u0456\u0440\u0441\u044C\u043A","\u0413\u0430\u0434\u044F\u0447","\u0413\u0430\u0439\u0432\u043E\u0440\u043E\u043D","\u0413\u0430\u0439\u0441\u0438\u043D","\u0413\u0430\u043B\u0438\u0447","\u0413\u0430\u0441\u043F\u0440\u0430","\u0413\u0435\u043D\u0456\u0447\u0435\u0441\u044C\u043A","\u0413\u0435\u0440\u0446\u0430","\u0413\u043B\u0438\u043D\u0438\u0446\u044F","\u0413\u043B\u043E\u0431\u0438\u043D\u0435","\u0413\u043B\u0443\u0445\u0456\u0432","\u0413\u043B\u0443\u0445\u043E\u0432\u0435","\u0413\u043D\u0456\u0432\u0430\u043D\u043A\u0430","\u0413\u043E\u043B\u0430 \u041F\u0440\u0438\u0441\u0442\u0430\u043D\u044C","\u0413\u043E\u043B\u043E\u0432\u0430\u043D\u0456\u0432\u0441\u044C\u043A","\u0413\u043E\u0440\u0456\u0448\u043D\u0456 \u041F\u043B\u0430\u0432\u043D\u0456","\u0413\u043E\u0440\u043B\u0456\u0432\u043A\u0430","\u0413\u043E\u0440\u043E\u0434\u0435\u043D\u043A\u0430","\u0413\u043E\u0440\u043E\u0434\u0438\u0449\u0435","\u0413\u043E\u0440\u043E\u0434\u043D\u044F","\u0413\u043E\u0440\u043E\u0434\u043E\u043A","\u0413\u043E\u0441\u0442\u043E\u043C\u0435\u043B\u044C","\u0413\u0440\u0435\u0431\u0456\u043D\u043A\u0430","\u0413\u0443\u043B\u044F\u0439\u043F\u043E\u043B\u0435","\u0413\u0443\u0440\u0437\u0443\u0444","\u0414\u0435\u0431\u0430\u043B\u044C\u0446\u0435\u0432\u0435","\u0414\u0435\u0440\u0430\u0436\u043D\u044F","\u0414\u0435\u0440\u0433\u0430\u0447\u0456","\u0414\u0436\u0430\u043D\u043A\u043E\u0439","\u0414\u043D\u0456\u043F\u0440\u043E","\u0414\u043D\u0456\u043F\u0440\u043E\u0440\u0443\u0434\u043D\u0435","\u0414\u043E\u0431\u0440\u043E\u043C\u0438\u043B\u044C","\u0414\u043E\u0431\u0440\u043E\u043F\u0456\u043B\u043B\u044F","\u0414\u043E\u0431\u0440\u043E\u0441\u043B\u0430\u0432","\u0414\u043E\u043A\u0443\u0447\u0430\u0454\u0432\u0441\u044C\u043A","\u0414\u043E\u043B\u0438\u043D\u0430","\u0414\u043E\u043B\u0438\u043D\u0441\u044C\u043A\u0430","\u0414\u043E\u043D\u0435\u0446\u044C\u043A","\u0414\u0440\u043E\u0433\u043E\u0431\u0438\u0447","\u0414\u0440\u0443\u0436\u0431\u0430","\u0414\u0440\u0443\u0436\u043A\u0456\u0432\u043A\u0430","\u0414\u0443\u0431\u043B\u044F\u043D\u0438","\u0414\u0443\u0431\u043D\u043E","\u0414\u0443\u0431\u0440\u043E\u0432\u0438\u0446\u044F","\u0414\u0443\u043D\u0430\u0457\u0432\u0446\u0456","\u0415\u043D\u0435\u0440\u0433\u043E\u0434\u0430\u0440","\u0416\u0430\u0448\u043A\u0456\u0432","\u0416\u0434\u0430\u043D\u0456\u0432\u043A\u0430","\u0416\u0438\u0434\u0430\u0447\u0456\u0432","\u0416\u0438\u0442\u043E\u043C\u0438\u0440","\u0416\u043C\u0435\u0440\u0438\u043D\u043A\u0430","\u0416\u043E\u0432\u043A\u0432\u0430","\u0416\u043E\u0432\u0442\u0456 \u0412\u043E\u0434\u0438","\u0417\u0430\u0432\u043E\u0434\u0441\u044C\u043A\u0435","\u0417\u0430\u043B\u0456\u0449\u0438\u043A\u0438","\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F","\u0417\u0430\u0440\u0456\u0447\u043D\u0435","\u0417\u0431\u0430\u0440\u0430\u0436","\u0417\u0431\u043E\u0440\u0456\u0432","\u0417\u0432\u0435\u043D\u0438\u0433\u043E\u0440\u043E\u0434\u043A\u0430","\u0417\u0434\u043E\u043B\u0431\u0443\u043D\u0456\u0432","\u0417\u0435\u043B\u0435\u043D\u043E\u0434\u043E\u043B\u044C\u0441\u044C\u043A","\u0417\u0456\u043D\u044C\u043A\u0456\u0432","\u0417\u043C\u0456\u0457\u0432","\u0417\u043D\u0430\u043C'\u044F\u043D\u043A\u0430","\u0417\u043E\u043B\u043E\u0442\u0435","\u0417\u043E\u043B\u043E\u0442\u043E\u043D\u043E\u0448\u0430","\u0417\u043E\u043B\u043E\u0447\u0456\u0432","\u0417\u0443\u0433\u0440\u0435\u0441","\u0406\u0432\u0430\u043D\u043A\u0456\u0432","\u0406\u0432\u0430\u043D\u043E-\u0424\u0440\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A","\u0406\u043B\u043B\u0456\u043D\u0446\u0456","\u0406\u043B\u043E\u0432\u0430\u0439\u0441\u044C\u043A","\u0406\u0437\u043C\u0430\u0457\u043B","\u0406\u0437\u044E\u043C","\u0406\u0437\u044F\u0441\u043B\u0430\u0432","\u0406\u043B\u043B\u0456\u0447\u0456\u0432\u0441\u044C\u043A","\u0406\u043D\u043A\u0435\u0440\u043C\u0430\u043D","\u0406\u0440\u043F\u0456\u043D\u044C","\u0406\u0440\u0448\u0430\u0432\u0430","\u0406\u0447\u043D\u044F","\u041A\u0430\u0433\u0430\u0440\u043B\u0438\u043A","\u041A\u0430\u0434\u0456\u0457\u0432\u043A\u0430","\u041A\u0430\u043B\u0438\u043D\u0456\u0432\u043A\u0430","\u041A\u0430\u043B\u0443\u0448","\u041A\u0430\u043C'\u044F\u043D\u0435\u0446\u044C-\u041F\u043E\u0434\u0456\u043B\u044C\u0441\u044C\u043A\u0438\u0439","\u041A\u0430\u043C'\u044F\u043D\u043A\u0430","\u041A\u0430\u043C'\u044F\u043D\u043A\u0430-\u0411\u0443\u0437\u044C\u043A\u0430","\u041A\u0430\u043C'\u044F\u043D\u043A\u0430-\u0414\u043D\u0456\u043F\u0440\u043E\u0432\u0441\u044C\u043A\u0430","\u041A\u0430\u043C'\u044F\u043D\u0441\u044C\u043A\u0435","\u041A\u0430\u043D\u0456\u0432","\u041A\u0430\u0440\u043B\u0456\u0432\u043A\u0430","\u041A\u0430\u0445\u043E\u0432\u043A\u0430","\u041A\u0435\u0433\u0438\u0447\u0456\u0432\u043A\u0430","\u041A\u0435\u0440\u0447","\u041A\u0438\u0454\u0432\u043E-\u0421\u0432\u044F\u0442\u043E\u0448\u0438\u043D\u0441\u044C\u043A","\u041A\u0438\u0457\u0432","\u041A\u0456\u043B\u0456\u044F","\u041A\u0456\u0446\u043C\u0430\u043D\u044C","\u041A\u0456\u0432\u0435\u0440\u0446\u0456","\u30AD\u0440\u0456\u0432\u0441\u044C\u043A","\u041A\u043E\u0431\u0435\u043B\u044F\u043A\u0438","\u041A\u043E\u0432\u0435\u043B\u044C","\u041A\u043E\u0434\u0438\u043C\u0430","\u041A\u043E\u043A\u0442\u0435\u0431\u0435\u043B\u044C","\u041A\u043E\u043B\u043E\u043C\u0438\u044F","\u041A\u043E\u043C\u0430\u0440\u043D\u043E","\u041A\u043E\u043D\u043E\u0442\u043E\u043F","\u041A\u043E\u0440\u0435\u0446\u044C","\u041A\u043E\u0440\u043E\u0441\u0442\u0435\u043D\u044C","\u041A\u043E\u0440\u043E\u0441\u0442\u0438\u0448\u0456\u0432","\u041A\u043E\u0440\u0441\u0443\u043D\u044C-\u0428\u0435\u0432\u0447\u0435\u043D\u043A\u0456\u0432\u0441\u044C\u043A\u0438\u0439","\u041A\u043E\u0440\u044E\u043A\u0456\u0432\u043A\u0430","\u041A\u043E\u0441\u0456\u0432","\u041A\u043E\u0441\u0442\u043E\u043F\u0456\u043B\u044C","\u041A\u043E\u0441\u0442\u044F\u043D\u0442\u0438\u043D\u0456\u0432\u043A\u0430","\u041A\u0440\u0430\u043C\u0430\u0442\u043E\u0440\u0441\u044C\u043A","\u041A\u0440\u0430\u0441\u0438\u043B\u0456\u0432","\u041A\u0440\u0430\u0441\u043D\u043E\u0430\u0440\u043C\u0456\u0439\u0441\u044C\u043A","\u041A\u0440\u0430\u0441\u043D\u043E\u0433\u0440\u0430\u0434","\u041A\u0440\u0430\u0441\u043D\u043E\u0434\u043E\u043D","\u041A\u0440\u0430\u0441\u043D\u043E\u043F\u0456\u043B\u043B\u044F","\u041A\u0440\u0430\u0441\u043D\u043E\u043F\u0435\u0440\u0435\u043A\u043E\u043F\u0441\u044C\u043A","\u041A\u0440\u0435\u043C\u0435\u043D\u0435\u0446\u044C","\u041A\u0440\u0435\u043C\u0435\u043D\u0447\u0443\u043A","\u041A\u0440\u0435\u043C\u0456\u043D\u043D\u0430","\u041A\u0440\u0438\u0432\u0438\u0439 \u0420\u0456\u0433","\u041A\u0440\u043E\u043B\u0435\u0432\u0435\u0446\u044C","\u041A\u0440\u043E\u043F\u0438\u0432\u043D\u0438\u0446\u044C\u043A\u0438\u0439","\u041A\u0443\u043B\u0438\u043A\u0456\u0432\u043A\u0430","\u041A\u0443\u043F\u044F\u043D\u0441\u044C\u043A","\u041A\u0443\u0440\u0430\u0445\u043E\u0432\u0435","\u041B\u0430\u0434\u0438\u0436\u0438\u043D","\u041B\u0430\u043D\u0456\u0432\u0446\u0456","\u041B\u0435\u0431\u0435\u0434\u0438\u043D","\u041B\u0438\u043C\u0430\u043D","\u041B\u0438\u043F\u043E\u0432\u0430 \u0414\u043E\u043B\u0438\u043D\u0430","\u041B\u0438\u043F\u043E\u0432\u0435\u0446\u044C","\u041B\u0438\u0441\u0438\u0447\u0430\u043D\u0441\u044C\u043A","\u041B\u0438\u0442\u0438\u043D","\u041B\u043E\u0437\u043E\u0432\u0430","\u041B\u043E\u0445\u0432\u0438\u0446\u044F","\u041B\u0443\u0431\u043D\u0438","\u041B\u0443\u0433\u0430\u043D\u0441\u044C\u043A","\u041B\u0443\u0446\u044C\u043A","\u041B\u044C\u0432\u0456\u0432","\u041B\u044E\u0431\u0430\u0440","\u041B\u044E\u0431\u0435\u0448\u0456\u0432","\u041B\u044E\u0431\u043E\u0442\u0438\u043D","\u041B\u0430\u0434\u0438\u0436\u0438\u043D","\u041B\u0438\u0432\u0430\u0434\u0456\u044F","\u041B\u0456\u0441\u043A\u0438","\u041C\u0430\u043A\u0430\u0440\u0456\u0432","\u041C\u0430\u043A\u0456\u0457\u0432\u043A\u0430","\u041C\u0430\u043B\u0430 \u0412\u0438\u0441\u043A\u0430","\u041C\u0430\u043B\u0438\u043D","\u041C\u0430\u0440'\u0457\u043D\u043A\u0430","\u041C\u0430\u0440\u0456\u0443\u043F\u043E\u043B\u044C","\u041C\u0430\u0440\u043A\u0456\u0432\u043A\u0430","\u041C\u0430\u0440\u0433\u0430\u043D\u0435\u0446\u044C","\u041C\u0435\u043B\u0456\u0442\u043E\u043F\u043E\u043B\u044C","\u041C\u0435\u043D\u0430","\u041C\u0435\u0440\u0435\u0444\u0430","\u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432","\u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432\u043A\u0430","\u041C\u0438\u0440\u0433\u043E\u0440\u043E\u0434","\u041C\u0438\u0440\u043D\u043E\u0433\u0440\u0430\u0434","\u041C\u0438\u0440\u043D\u0438\u0439","\u041C\u0456\u0436\u0433\u0456\u0440'\u044F","\u041C\u043E\u0433\u0438\u043B\u0456\u0432-\u041F\u043E\u0434\u0456\u043B\u044C\u0441\u044C\u043A\u0438\u0439","\u041C\u043E\u043B\u043E\u0434\u043E\u0433\u0432\u0430\u0440\u0434\u0456\u0439\u0441\u044C\u043A","\u041C\u043E\u043B\u043E\u0447\u0430\u043D\u0441\u044C\u043A","\u041C\u043E\u043D\u0430\u0441\u0442\u0438\u0440\u0438\u0441\u044C\u043A\u0430","\u041C\u043E\u0440\u0448\u0438\u043D","\u041C\u043E\u0441\u0442\u0438\u0441\u044C\u043A\u0430","\u041C\u0443\u043A\u0430\u0447\u0435\u0432\u043E","\u041D\u0430\u0434\u0432\u0456\u0440\u043D\u0430","\u041D\u0435\u043C\u0438\u0440\u0456\u0432","\u041D\u0435\u0442\u0456\u0448\u0438\u043D","\u041D\u0438\u0436\u043D\u0456 \u0421\u0456\u0440\u043E\u0433\u043E\u0437\u0438","\u041D\u0456\u043A\u043E\u043F\u043E\u043B\u044C","\u041D\u0456\u0436\u0438\u043D","\u041D\u043E\u0432\u0430 \u0412\u043E\u0434\u043E\u043B\u0430\u0433\u0430","\u041D\u043E\u0432\u0430 \u041A\u0430\u0445\u043E\u0432\u043A\u0430","\u041D\u043E\u0432\u0430 \u041E\u0434\u0435\u0441\u0430","\u041D\u043E\u0432\u0430 \u0423\u0448\u0438\u0446\u044F","\u041D\u043E\u0432\u0438\u0439 \u0411\u0443\u0433","\u041D\u043E\u0432\u0438\u0439 \u041A\u0430\u043B\u0438\u043D\u0456\u0432","\u041D\u043E\u0432\u0438\u0439 \u0420\u043E\u0437\u0434\u0456\u043B","\u041D\u043E\u0432\u043E\u0430\u0439\u0434\u0430\u0440","\u041D\u043E\u0432\u043E\u0430\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0430\u0437\u043E\u0432\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0432\u043E\u043B\u0438\u043D\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0433\u0435\u043E\u0440\u0433\u0456\u0457\u0432\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0433\u0440\u043E\u0434\u0456\u0432\u043A\u0430","\u041D\u043E\u0432\u043E\u0433\u0440\u0430\u0434-\u0412\u043E\u043B\u0438\u043D\u0441\u044C\u043A\u0438\u0439","\u041D\u043E\u0432\u043E\u0434\u043D\u0456\u0441\u0442\u0440\u043E\u0432\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0434\u0440\u0443\u0436\u0435\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u043C\u0438\u0440\u0433\u043E\u0440\u043E\u0434","\u041D\u043E\u0432\u043E\u043C\u043E\u0441\u043A\u043E\u0432\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u043E\u043B\u0435\u043A\u0441\u0456\u0457\u0432\u043A\u0430","\u041D\u043E\u0432\u043E\u043F\u0441\u043A\u043E\u0432","\u041D\u043E\u0432\u043E\u0441\u0435\u043B\u0438\u0446\u044F","\u041D\u043E\u0432\u043E\u0442\u0440\u043E\u0457\u0446\u044C\u043A\u0435","\u041D\u043E\u0432\u043E\u0443\u043A\u0440\u0430\u0457\u043D\u043A\u0430","\u041D\u043E\u0432\u043E\u044F\u0432\u043E\u0440\u0456\u0432\u0441\u044C\u043A","\u041D\u043E\u0441\u0456\u0432\u043A\u0430","\u041E\u0431\u0443\u0445\u0456\u0432","\u041E\u0432\u0456\u0434\u0456\u043E\u043F\u043E\u043B\u044C","\u041E\u0432\u0440\u0443\u0447","\u041E\u0434\u0435\u0441\u0430","\u041E\u043A\u043D\u0438","\u041E\u043A\u043E\u043D\u0441\u044C\u043A\u0438","\u041E\u043B\u0435\u0432\u0441\u044C\u043A","\u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0456\u0432\u043A\u0430","\u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0456\u044F","\u041E\u043B\u0435\u043D\u0456\u0432\u043A\u0430","\u041E\u043B\u0435\u0448\u043A\u0438","\u041E\u043D\u0443\u0444\u0440\u0456\u0457\u0432\u043A\u0430","\u041E\u0440\u0430\u0442\u0456\u0432","\u041E\u0440\u0436\u0456\u0432","\u041E\u0441\u0442\u0440\u043E\u0433","\u041E\u0445\u0442\u0438\u0440\u043A\u0430","\u041E\u0447\u0430\u043A\u0456\u0432","\u041F\u0430\u0432\u043B\u043E\u0433\u0440\u0430\u0434","\u041F\u0435\u0440\u0432\u043E\u043C\u0430\u0439\u0441\u044C\u043A","\u041F\u0435\u0440\u0432\u043E\u043C\u0430\u0439\u0441\u044C\u043A\u0438\u0439","\u041F\u0435\u0440\u0435\u0432\u0430\u043B\u044C\u0441\u044C\u043A","\u041F\u0435\u0440\u0435\u043C\u0438\u0448\u043B\u044F\u043D\u0438","\u041F\u0435\u0440\u0435\u0447\u0438\u043D","\u041F\u0435\u0440\u0435\u044F\u0441\u043B\u0430\u0432","\u041F\u0435\u0440\u0448\u043E\u0442\u0440\u0430\u0432\u0435\u043D\u0441\u044C\u043A","\u041F\u0438\u0440\u044F\u0442\u0438\u043D","\u041F\u0456\u0434\u0433\u0430\u0439\u0446\u0456","\u041F\u0456\u0434\u0433\u043E\u0440\u043E\u0434\u043D\u0435","\u041F\u0456\u0434\u0432\u043E\u043B\u043E\u0447\u0438\u0441\u044C\u043A","\u041F\u043E\u0433\u0440\u0435\u0431\u0438\u0449\u0435","\u041F\u043E\u043A\u0440\u043E\u0432","\u041F\u043E\u043A\u0440\u043E\u0432\u0441\u044C\u043A","\u041F\u043E\u043B\u043E\u043D\u043D\u0435","\u041F\u043E\u043B\u0442\u0430\u0432\u0430","\u041F\u043E\u043C\u0456\u0447\u043D\u0430","\u041F\u043E\u043F\u0430\u0441\u043D\u0430","\u041F\u043E\u0447\u0430\u0457\u0432","\u041F\u0443\u0441\u0442\u043E\u043C\u0438\u0442\u0438","\u041F\u0443\u0442\u0438\u0432\u043B\u044C","\u041F\u0443\u0442\u0438\u043B\u0430","\u041F\u044F\u0442\u0438\u0445\u0430\u0442\u043A\u0438","\u0420\u0430\u0434\u0435\u0445\u0456\u0432","\u0420\u0430\u0434\u0438\u0432\u0438\u043B\u0456\u0432","\u0420\u0430\u0434\u043E\u043C\u0438\u0448\u043B\u044C","\u0420\u0430\u0445\u0456\u0432","\u0420\u0435\u043D\u0456","\u0420\u0435\u0448\u0435\u0442\u0438\u043B\u0456\u0432\u043A\u0430","\u0420\u0436\u0438\u0449\u0456\u0432","\u0420\u0456\u0432\u043D\u0435","\u0420\u0456\u0445\u0442\u0438\u0447\u0456\u0432","\u0420\u043E\u0433\u0430\u0442\u0438\u043D","\u0420\u043E\u0434\u0438\u043D\u0441\u044C\u043A\u0435","\u0420\u043E\u0436\u0438\u0449\u0435","\u0420\u043E\u043A\u0438\u0442\u043D\u0435","\u0420\u043E\u043C\u043D\u0438","\u0420\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u0430","\u0420\u0443\u0431\u0456\u0436\u043D\u0435","\u0420\u0443\u0436\u0438\u043D","\u0421\u0430\u043A\u0438","\u0421\u0430\u043C\u0431\u0456\u0440","\u0421\u0430\u0440\u0430\u0442\u0438","\u0421\u0430\u0440\u043D\u0438","\u0421\u0430\u0441\u0456\u0432","\u0421\u0432\u0430\u0442\u043E\u0432\u0435","\u0421\u0432\u0430\u043B\u044F\u0432\u0430","\u0421\u0432\u0435\u0441\u0430","\u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u044C\u043A","\u0421\u0432\u0456\u0442\u043B\u043E\u0432\u043E\u0434\u0441\u044C\u043A","\u0421\u0432\u0456\u0442\u043B\u043E\u0434\u0430\u0440\u0441\u044C\u043A","\u0421\u0435\u0432\u0430\u0441\u0442\u043E\u043F\u043E\u043B\u044C","\u0421\u0435\u0432\u0435\u0440\u043E\u0434\u043E\u043D\u0435\u0446\u044C\u043A","\u0421\u0435\u043B\u0438\u0434\u043E\u0432\u0435","\u0421\u0435\u043C\u0435\u043D\u0456\u0432\u043A\u0430","\u0421\u0435\u0440\u0435\u0434\u0438\u043D\u0430-\u0411\u0443\u0434\u0430","\u0421\u0454\u0432\u0454\u0440\u043E\u0434\u043E\u043D\u0435\u0446\u044C\u043A","\u0421\u0456\u043C\u0435\u0457\u0437","\u0421\u0456\u043C\u0444\u0435\u0440\u043E\u043F\u043E\u043B\u044C","\u0421\u0438\u043D\u0435\u043B\u044C\u043D\u0438\u043A\u043E\u0432\u0435","\u0421\u0456\u0432\u0435\u0440\u0441\u044C\u043A","\u0421\u043A\u0430\u0434\u043E\u0432\u0441\u044C\u043A","\u0421\u043A\u0430\u043B\u0430\u0442","\u0421\u043A\u0432\u0438\u0440\u0430","\u0421\u043B\u0430\u0432\u0443\u0442\u0430","\u0421\u043B\u0430\u0432\u0443\u0442\u0438\u0447","\u0421\u043B\u043E\u0432'\u044F\u043D\u0441\u044C\u043A","\u0421\u043C\u0435\u043B\u0430","\u0421\u043C\u0456\u043B\u0430","\u0421\u043D\u0456\u0433\u0443\u0440\u0456\u0432\u043A\u0430","\u0421\u043D\u0456\u0436\u043D\u0435","\u0421\u043D\u044F\u0442\u0438\u043D","\u0421\u043E\u043A\u0430\u043B\u044C","\u0421\u043E\u043A\u0438\u0440\u044F\u043D\u0438","\u0421\u043E\u043B\u0435\u0434\u0430\u0440","\u0421\u043E\u0440\u043E\u043A\u0438\u043D\u0435","\u30BD\u0441\u043D\u0456\u0432\u043A\u0430","\u0421\u0442\u0430\u0440\u0438\u0439 \u041A\u0440\u0438\u043C","\u0421\u0442\u0430\u0440\u0438\u0439 \u0421\u0430\u043C\u0431\u0456\u0440","\u0421\u0442\u0430\u0440\u043E\u0431\u0456\u043B\u044C\u0441\u044C\u043A","\u0421\u0442\u0430\u0440\u043E\u043A\u043E\u043D\u0441\u0442\u044F\u043D\u0442\u0438\u043D\u0456\u0432","\u0421\u0442\u0430\u0445\u0430\u043D\u043E\u0432","\u0421\u0442\u0435\u0431\u043D\u0438\u043A","\u0421\u0442\u043E\u0440\u043E\u0436\u0438\u043D\u0435\u0446\u044C","\u0421\u0442\u0440\u0438\u0439","\u0421\u0443\u0434\u0430\u043A","\u0421\u0443\u0434\u043E\u0432\u0430 \u0412\u0438\u0448\u043D\u044F","\u0421\u0443\u043C\u0438","\u0421\u0443\u0445\u043E\u0434\u0456\u043B\u044C\u0441\u044C\u043A","\u0422\u0430\u043B\u044C\u043D\u0435","\u0422\u0430\u0440\u0430\u0449\u0430","\u0422\u0430\u0442\u0430\u0440\u0431\u0443\u043D\u0430\u0440\u0438","\u0422\u0435\u043F\u043B\u0438\u043A","\u0422\u0435\u043F\u043B\u043E\u0434\u0430\u0440","\u0422\u0435\u0440\u0435\u0431\u043E\u0432\u043B\u044F","\u0422\u0435\u0440\u043D\u0456\u0432\u043A\u0430","\u0422\u0435\u0440\u043D\u043E\u043F\u0456\u043B\u044C","\u0422\u0435\u0440\u043D\u043E\u0432\u043A\u0430","\u0422\u0435\u0442\u0456\u0457\u0432","\u0422\u0438\u0441\u043C\u0435\u043D\u0438\u0446\u044F","\u0422\u043B\u0443\u043C\u0430\u0447","\u0422\u043E\u043A\u043C\u0430\u043A","\u0422\u043E\u0440\u0435\u0446\u044C\u043A","\u0422\u043E\u0440\u0447\u0438\u043D","\u0422\u0440\u043E\u0441\u0442\u044F\u043D\u0435\u0446\u044C","\u0422\u0440\u0443\u0441\u043A\u0430\u0432\u0435\u0446\u044C","\u0422\u0443\u043B\u044C\u0447\u0438\u043D","\u0422\u0443\u0440\u043A\u0430","\u0422\u044F\u0447\u0456\u0432","\u0423\u0433\u043D\u0456\u0432","\u0423\u0433\u043B\u0435\u0434\u0430\u0440","\u0423\u0436\u0433\u043E\u0440\u043E\u0434","\u0423\u043A\u0440\u0430\u0457\u043D\u043A\u0430","\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A","\u0423\u043C\u0430\u043D\u044C","\u0423\u0441\u0442\u0438\u043B\u0443\u0433","\u0424\u0430\u0441\u0442\u0456\u0432","\u0424\u0435\u043E\u0434\u043E\u0441\u0456\u044F","\u0425\u0438\u0440\u0456\u0432","\u0425\u043C\u0435\u043B\u044C\u043D\u0438\u043A","\u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u0438\u0439","\u0425\u043C\u0456\u043B\u044C\u043D\u0438\u043A","\u0425\u043E\u0434\u043E\u0440\u0456\u0432","\u0425\u043E\u0440\u043E\u043B","\u0425\u043E\u0440\u043E\u0448\u0456\u0432","\u0425\u043E\u0442\u0438\u043D","\u0425\u0440\u0435\u0441\u0442\u0456\u0432\u043A\u0430","\u0425\u0440\u0438\u0441\u0442\u0438\u043D\u0456\u0432\u043A\u0430","\u0425\u0443\u0441\u0442","\u0426\u0430\u0440\u0438\u0447\u0430\u043D\u043A\u0430","\u0426\u044E\u0440\u0443\u043F\u0438\u043D\u0441\u044C\u043A","\u0427\u0430\u0441\u0456\u0432 \u042F\u0440","\u0427\u0435\u0440\u0432\u043E\u043D\u043E\u0433\u0440\u0430\u0434","\u0427\u0435\u0440\u0432\u043E\u043D\u043E\u043F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u044C\u043A","\u0427\u0435\u0440\u043A\u0430\u0441\u0438","\u0427\u0435\u0440\u043D\u0456\u0432\u0446\u0456","\u0427\u0435\u0440\u043D\u0456\u0433\u0456\u0432","\u0427\u0435\u0440\u043D\u044F\u0445\u0456\u0432","\u0427\u0438\u0433\u0438\u0440\u0438\u043D","\u0427\u043E\u043F","\u0427\u043E\u0440\u043D\u043E\u0431\u0438\u043B\u044C","\u0427\u043E\u0440\u043D\u043E\u043C\u043E\u0440\u0441\u044C\u043A","\u0427\u043E\u0440\u0442\u043A\u0456\u0432","\u0427\u0443\u0433\u0443\u0457\u0432","\u0428\u0430\u0440\u0433\u043E\u0440\u043E\u0434","\u0428\u0430\u0445\u0442\u0430\u0440\u0441\u044C\u043A","\u0428\u0435\u043F\u0435\u0442\u0456\u0432\u043A\u0430","\u0428\u0438\u0440\u043E\u043A\u0435","\u0428\u043E\u0441\u0442\u043A\u0430","\u0428\u043F\u043E\u043B\u0430","\u0428\u0443\u043C\u0441\u044C\u043A","\u0429\u0430\u0441\u0442\u044F","\u0429\u043E\u043B\u043A\u0456\u043D\u0435","\u042E\u0436\u043D\u0435","\u042E\u0436\u043D\u043E\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A","\u042F\u043B\u0442\u0430","\u042F\u043C\u043F\u0456\u043B\u044C","\u042F\u0432\u043E\u0440\u0456\u0432","\u042F\u0433\u043E\u0442\u0438\u043D","\u042F\u043B\u0442\u0430","\u042F\u0440\u0435\u043C\u0447\u0435","\u042F\u0441\u0438\u043D\u0443\u0432\u0430\u0442\u0430"];function $o({company:e,onSave:t,onCancel:n,isModal:r=!1}){let o=He(),[a,i]=(0,N.useState)({name:"",email:"",website:"",phone:"",description:"",city:"",country:"\u0423\u043A\u0440\u0430\u0457\u043D\u0430",postal:"",region:"",street_line1:"",street_line2:""}),[l,s]=(0,N.useState)(null),[u,p]=(0,N.useState)(null),[c,m]=(0,N.useState)(null),[y,g]=(0,N.useState)(""),[v,w]=(0,N.useState)(!1),[f,d]=(0,N.useState)([]),[h,k]=(0,N.useState)([]),[b,E]=(0,N.useState)([]),[S,z]=(0,N.useState)([]),[H,P]=(0,N.useState)(""),[V,I]=(0,N.useState)(!1),[G,re]=(0,N.useState)({}),X=ki.filter(C=>C.toLowerCase().includes(H.toLowerCase()));(0,N.useEffect)(()=>{if(e){if(i({name:e.name||"",email:e.email||"",website:e.website||"",phone:e.phone||"",description:e.description||"",city:e.address?.city||"",country:e.address?.country||"\u0423\u043A\u0440\u0430\u0457\u043D\u0430",postal:e.address?.postal||"",region:e.address?.region||"",street_line1:e.address?.street_line1||"",street_line2:e.address?.street_line2||""}),e.categories&&e.categories.length>0&&z(e.categories.map(C=>C.name||C)),e.images&&e.images.length>0){let C=e.images.find(x=>x.type==="logo");C&&(p(C.image_url),m(C.id))}e.images&&e.images.length>0&&d(e.images.filter(C=>C.type!=="logo"))}},[e]);let Se=C=>{i({...a,[C.target.name]:C.target.value}),re(x=>({...x,[C.target.name]:null}))},Y=C=>{S.includes(C)||(z([...S,C]),P(""),I(!1),re(x=>({...x,categories:null})))},ne=async()=>{if(window.confirm(`\u26A0\uFE0F \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E "${e.name}"?

\u0426\u044F \u0434\u0456\u044F \u0454 \u043D\u0435\u0437\u0432\u043E\u0440\u043E\u0442\u043D\u043E\u044E. \u0411\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E:
\u2022 \u0412\u0441\u0456 \u0437\u0430\u043F\u0438\u0441\u0438 \u0442\u0430 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F
\u2022 \u0412\u0441\u0456\u0445 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0456\u0432
\u2022 \u0412\u0441\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438
\u2022 \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u0442\u0430 \u043B\u043E\u0433\u043E\u0442\u0438\u043F

\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445 \u0431\u0443\u0434\u0435 \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u0438\u043C.`))try{let x=await fetch(`/api/companies/${e.id}`,{method:"DELETE",credentials:"include"});if(x.ok)o("/companies");else{let F=await x.json();alert(F.errors||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457")}}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457")}},Pe=C=>{z(S.filter(x=>x!==C))},Ge=C=>{let x=C.target.files[0];if(x){s(x);let F=new FileReader;F.onloadend=()=>{p(F.result)},F.readAsDataURL(x)}},ft=async()=>{if(!c){s(null),p(null),g("");return}if(window.confirm("\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F?"))try{(await fetch(`/api/images/${c}`,{method:"DELETE",credentials:"include"})).ok?(s(null),p(null),m(null),g("")):alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443")}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443")}},kt=C=>{let x=Array.from(C.target.files);x.length>0&&(k([...h,...x]),x.forEach(F=>{let Z=new FileReader;Z.onloadend=()=>{E(xe=>[...xe,{file:F,preview:Z.result}])},Z.readAsDataURL(F)}))},$r=async C=>{if(window.confirm("\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F?"))try{(await fetch(`/api/images/${C}`,{method:"DELETE",credentials:"include"})).ok?d(f.filter(F=>F.id!==C)):alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F")}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F")}},Vo=C=>{E(b.filter((x,F)=>F!==C)),k(h.filter((x,F)=>F!==C))},nr=async C=>{C.preventDefault();let x=new FormData;x.append("company[name]",a.name),x.append("company[email]",a.email),x.append("company[website]",a.website),x.append("company[phone]",a.phone),x.append("company[description]",a.description),S.forEach(pt=>{x.append("categories[]",pt)}),x.append("address[city]",a.city),x.append("address[country]",a.country),x.append("address[postal]",a.postal),x.append("address[region]",a.region),x.append("address[street_line1]",a.street_line1),x.append("address[street_line2]",a.street_line2),l?x.append("logo",l):y&&x.append("logo_cached",y),h.forEach(pt=>{x.append("images[]",pt)});let F=e?`/api/companies/${e.id}`:"/api/companies",xe=await fetch(F,{method:e?"PUT":"POST",credentials:"include",body:x}),St=await xe.json();xe.ok?r&&t?t(St):o(`/companies/${St.id}/dashboard`):(typeof St.errors=="string"?re({_base:St.errors}):re(St.errors||{}),k([]),E([]),s(null),c||p(null))},L=C=>G[C]?.message;return N.default.createElement("div",{className:r?"company-form-modal":"company-form container"},N.default.createElement("h1",null,e?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E"),N.default.createElement("form",{onSubmit:nr,encType:"multipart/form-data"},N.default.createElement("section",{className:"form-section"},N.default.createElement("h3",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),L("name")&&N.default.createElement("div",{className:"field-error"},L("name")),N.default.createElement("input",{name:"name",value:a.name,onChange:Se,placeholder:"\u041D\u0430\u0437\u0432\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"}),L("email")&&N.default.createElement("div",{className:"field-error"},L("email")),N.default.createElement("input",{name:"email",type:"email",value:a.email,onChange:Se,placeholder:"Email"}),L("website")&&N.default.createElement("div",{className:"field-error"},L("website")),N.default.createElement("input",{name:"website",type:"url",value:a.website,onChange:Se,placeholder:"https://example.com"}),L("phone")&&N.default.createElement("div",{className:"field-error"},L("phone")),N.default.createElement("input",{name:"phone",type:"tel",value:a.phone,onChange:Se,placeholder:"+380 XX XXX XX XX"}),L("description")&&N.default.createElement("div",{className:"field-error"},L("description")),N.default.createElement("textarea",{name:"description",value:a.description,onChange:Se,placeholder:"\u041E\u043F\u0438\u0441 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456",rows:"4"})),N.default.createElement("section",{className:"form-section"},N.default.createElement("h3",null,"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u043F\u043E\u0441\u043B\u0443\u0433"),L("categories")&&N.default.createElement("div",{className:"field-error"},L("categories")),S.length>0&&N.default.createElement("div",{className:"selected-categories-tags"},S.map(C=>N.default.createElement("span",{key:C,className:"category-tag"},C,N.default.createElement("button",{type:"button",className:"category-tag-remove",onClick:()=>Pe(C),"aria-label":"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E"},"\u2715")))),N.default.createElement("div",{className:"category-search-wrapper"},N.default.createElement("input",{type:"text",className:"category-search-input",placeholder:"\u0428\u0443\u043A\u0430\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457...",value:H,onChange:C=>{P(C.target.value),I(!0)},onFocus:()=>I(!0)}),V&&H&&N.default.createElement("div",{className:"category-dropdown"},X.length>0?X.slice(0,50).map(C=>N.default.createElement("div",{key:C,className:`category-dropdown-item ${S.includes(C)?"selected":""}`,onClick:()=>Y(C)},C,S.includes(C)&&N.default.createElement("span",{className:"checkmark"},"\u2713"))):N.default.createElement("div",{className:"category-dropdown-empty"},"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"))),S.length===0&&N.default.createElement("p",{className:"helper-text"},"\u041F\u043E\u0447\u043D\u0456\u0442\u044C \u0432\u0432\u043E\u0434\u0438\u0442\u0438 \u043D\u0430\u0437\u0432\u0443 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0434\u043B\u044F \u043F\u043E\u0448\u0443\u043A\u0443")),N.default.createElement("section",{className:"form-section"},N.default.createElement("h3",null,"\u0410\u0434\u0440\u0435\u0441\u0430"),L("city")&&N.default.createElement("div",{className:"field-error"},L("city")),N.default.createElement("select",{name:"city",value:a.city,onChange:Se,className:"form-select"},N.default.createElement("option",{value:""},"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"),Si.map(C=>N.default.createElement("option",{key:C,value:C},C))),L("region")&&N.default.createElement("div",{className:"field-error"},L("region")),N.default.createElement("input",{name:"region",value:a.region,onChange:Se,placeholder:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C"}),L("street_line1")&&N.default.createElement("div",{className:"field-error"},L("street_line1")),N.default.createElement("input",{name:"street_line1",value:a.street_line1,onChange:Se,placeholder:"\u0412\u0443\u043B\u0438\u0446\u044F, \u0431\u0443\u0434\u0438\u043D\u043E\u043A"}),L("street_line2")&&N.default.createElement("div",{className:"field-error"},L("street_line2")),N.default.createElement("input",{name:"street_line2",value:a.street_line2,onChange:Se,placeholder:"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430, \u043E\u0444\u0456\u0441 (\u043D\u0435\u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E)"}),L("postal")&&N.default.createElement("div",{className:"field-error"},L("postal")),N.default.createElement("input",{name:"postal",value:a.postal,onChange:Se,placeholder:"\u041F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441"}),L("country")&&N.default.createElement("div",{className:"field-error"},L("country")),N.default.createElement("input",{name:"country",value:a.country,onChange:Se,placeholder:"\u041A\u0440\u0430\u0457\u043D\u0430",readOnly:!0})),e&&N.default.createElement("section",{className:"form-section"},N.default.createElement("h3",null,"\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"),u&&N.default.createElement("div",{className:"logo-preview"},N.default.createElement("img",{src:l?u:`/images${u}`,alt:"Company logo preview"}),N.default.createElement("button",{type:"button",className:"btn-remove-logo",onClick:ft},"\u2715 \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F")),N.default.createElement("div",{className:"file-input-wrapper"},N.default.createElement("input",{type:"file",id:"logo-input",name:"logo",accept:"image/*",onChange:Ge,className:"file-input"}),N.default.createElement("label",{htmlFor:"logo-input",className:"file-input-label"},u?"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F":"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F"),N.default.createElement("span",{className:"file-input-hint"},"PNG, JPG, GIF \u0434\u043E 5MB")),y&&N.default.createElement("input",{type:"hidden",name:"logo_cached",value:y}),L("logo")&&N.default.createElement("div",{className:"field-error"},L("logo"))),e&&N.default.createElement("section",{className:"form-section"},N.default.createElement("div",{className:"images-header"},N.default.createElement("h3",null,"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"),G._base&&N.default.createElement("div",{className:"field-error",style:{marginBottom:"1rem"}},G._base),N.default.createElement("label",{htmlFor:"images-input",className:"btn-add-image"},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u0444\u043E\u0442\u043E")),N.default.createElement("input",{type:"file",id:"images-input",accept:"image/*",multiple:!0,onChange:kt,className:"file-input",style:{display:"none"}}),f.length>0&&N.default.createElement("div",{className:"images-grid"},N.default.createElement("h4",{className:"images-subtitle"},"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u0456 \u0444\u043E\u0442\u043E"),N.default.createElement("div",{className:"images-list"},f.map(C=>N.default.createElement("div",{key:C.id,className:"image-item"},N.default.createElement("img",{src:`/images${C.image_url}`,alt:C.image_name||"Company image"}),N.default.createElement("button",{type:"button",className:"btn-remove-image",onClick:()=>$r(C.id),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u2715"),N.default.createElement("span",{className:"image-name"},C.image_name))))),b.length>0&&N.default.createElement("div",{className:"images-grid"},N.default.createElement("h4",{className:"images-subtitle"},"\u041D\u043E\u0432\u0456 \u0444\u043E\u0442\u043E (\u0431\u0443\u0434\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E)"),N.default.createElement("div",{className:"images-list"},b.map((C,x)=>N.default.createElement("div",{key:x,className:"image-item new-image"},N.default.createElement("img",{src:C.preview,alt:`Preview ${x+1}`}),N.default.createElement("button",{type:"button",className:"btn-remove-image",onClick:()=>Vo(x),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u2715"),N.default.createElement("span",{className:"image-name"},C.file.name))))),f.length===0&&b.length===0&&N.default.createElement("div",{className:"empty-images"},N.default.createElement("p",null,"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u0449\u0435 \u043D\u0435 \u0434\u043E\u0434\u0430\u043D\u0456"),N.default.createElement("label",{htmlFor:"images-input",className:"btn-add-first-image"},"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0435\u0440\u0448\u0435 \u0444\u043E\u0442\u043E")),L("images")&&N.default.createElement("div",{className:"field-error"},L("images"))),N.default.createElement("div",{className:"form-actions border-top pt-3 content-between pb-3"},N.default.createElement("h3",null,"\u0414\u0456\u0456\u0308"),N.default.createElement("div",{className:"content-center"},r&&n&&N.default.createElement("button",{type:"button",onClick:n,className:"btn-secondary"},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),N.default.createElement("button",{type:"submit",className:"btn-primary"},e?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E"))),N.default.createElement("div",{className:"form-actions border-top pt-3"},e&&N.default.createElement(N.default.Fragment,null,N.default.createElement("h3",{className:"delete-toggle",onClick:()=>w(!v)},v?"\u25B2":"\u25BC"," \u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F"),v&&N.default.createElement("button",{type:"button",className:"btn-danger",onClick:ne},"\u{1F5D1} \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E")))))}var O=J(Q());var _e=J(Q());function Uo({open:e,employee:t,service:n,onClose:r,onSaved:o}){let[a,i]=(0,_e.useState)({name:"",description:"",price:"",duration:30}),[l,s]=(0,_e.useState)(!1),[u,p]=(0,_e.useState)(null);if((0,_e.useEffect)(()=>{i(n?{name:n.name||"",description:n.description||"",price:n.price||"",duration:n.duration||30}:{name:"",description:"",price:"",duration:30})},[n,e]),!e)return null;let c=async()=>{s(!0),p(null);let g={...a,employee_id:t.id},v=n?`/api/services/${n.id}`:"/api/services",w=n?"PUT":"POST";try{let f=await fetch(v,{method:w,credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!f.ok)throw new Error(await f.text());let d=await f.json();r(),o(d)}catch(f){p(f.message||"Failed to save service")}finally{s(!1)}},m=async()=>{if(n&&window.confirm(`Are you sure you want to delete ${n.name}?`)){s(!0),p(null);try{let g=await fetch(`/api/services/${n.id}`,{method:"DELETE",credentials:"include"});if(!g.ok)throw new Error(await g.text());r(),o(null)}catch(g){p(g.message||"Failed to delete service")}finally{s(!1)}}},y=g=>g?parseFloat(g).toFixed(0):"0";return _e.default.createElement("div",{className:"confirm-overlay",onClick:r},_e.default.createElement("div",{className:"glass-modal",onClick:g=>g.stopPropagation()},_e.default.createElement("h3",null,n?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433\u0438":"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443"),u&&_e.default.createElement("div",{className:"form__error"},u),_e.default.createElement("input",{placeholder:"\u0406\u043C'\u044F",value:a.name,onChange:g=>i({...a,name:g.target.value}),disabled:l}),_e.default.createElement("textarea",{placeholder:"\u041E\u043F\u0438\u0441",value:a.description,onChange:g=>i({...a,description:g.target.value}),disabled:l}),_e.default.createElement("input",{type:"number",placeholder:"Price",value:y(a.price),onChange:g=>i({...a,price:g.target.value}),disabled:l}),_e.default.createElement("input",{type:"number",step:15,min:15,placeholder:"Duration (min)",value:a.duration,onChange:g=>i({...a,duration:parseInt(g.target.value)}),disabled:l}),_e.default.createElement("div",{className:"modal-actions"},_e.default.createElement("button",{onClick:r,disabled:l},"Cancel"),n&&_e.default.createElement("button",{className:"danger",onClick:m,disabled:l},"Delete"),_e.default.createElement("button",{className:"apply",onClick:c,disabled:l},l?"Saving...":n?"Update":"Create"))))}function jr({role:e,employee:t,onSave:n,onCancel:r,isModal:o=!1}){let a=He(),[i,l]=(0,O.useState)({first_name:"",last_name:"",description:"",email:"",phone:"",password:"",role:e==="admin"?1:0}),[s,u]=(0,O.useState)({}),[p,c]=(0,O.useState)([]),[m,y]=(0,O.useState)(!1),[g,v]=(0,O.useState)(null),[w,f]=(0,O.useState)(null),[d,h]=(0,O.useState)(null),[k,b]=(0,O.useState)(null);(0,O.useEffect)(()=>{t&&(l({first_name:t.first_name||"",last_name:t.last_name||"",description:t.description||"",email:t.email||"",phone:t.phone||"",password:"",role:t.role??(e==="admin"?1:0)}),c(t.services||[]),t.image&&(h("/images"+t.image.image_url),b(t.image.id)))},[t,e]);let E=async()=>{await fetch("/api/employees/logout",{method:"POST",credentials:"include"})};(0,O.useRef)(()=>{t||E()});let S=Y=>{let ne=Y.target.name==="role"?parseInt(Y.target.value):Y.target.value;l({...i,[Y.target.name]:ne}),u(Pe=>({...Pe,[Y.target.name]:null}))},z=Y=>{let ne=Y.target.files[0];if(ne){f(ne);let Pe=new FileReader;Pe.onloadend=()=>h(Pe.result),Pe.readAsDataURL(ne)}},H=async()=>{if(!k){f(null),h(null);return}if(window.confirm("\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0444\u043E\u0442\u043E?"))try{(await fetch(`/api/images/${k}`,{method:"DELETE",credentials:"include"})).ok?(f(null),h(null),b(null)):alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0444\u043E\u0442\u043E")}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0444\u043E\u0442\u043E")}},P=async Y=>{Y.preventDefault();let ne=new FormData;ne.append("employee[first_name]",i.first_name),ne.append("employee[last_name]",i.last_name),ne.append("employee[description]",i.description),ne.append("employee[email]",i.email),ne.append("employee[phone]",i.phone),ne.append("employee[role]",i.role),i.password&&ne.append("employee[password]",i.password),w&&ne.append("image",w);let Pe=t?`/api/employees/${t.id}`:"/api/employees",ft=await fetch(Pe,{method:t?"PUT":"POST",credentials:"include",body:ne});if(ft.ok){let kt=await ft.json();o&&n?n({...kt,services:p}):a("/companies/welcome")}else{let kt=await ft.json();typeof kt.errors=="string"?u({_base:kt.errors}):u(kt.errors||{}),f(null),k||h(null)}},V=()=>{v(null),y(!0)},I=Y=>{v(Y),y(!0)},G=async Y=>{if(window.confirm(`\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443 "${Y.name}"?`))try{let ne=await fetch(`/api/services/${Y.id}`,{method:"DELETE",credentials:"include"});if(!ne.ok)throw new Error(await ne.text());c(p.filter(Pe=>Pe.id!==Y.id))}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438")}},re=Y=>{c(Y===null?p.filter(ne=>ne.id!==g.id):g?p.map(ne=>ne.id===Y.id?Y:ne):[...p,Y]),v(null)},X=Y=>s[Y]?.message||s[Y],Se=Y=>Y?parseFloat(Y).toFixed(0):"0";return O.default.createElement("div",{className:o?"employee-form-modal":"employee-form container"},O.default.createElement("h1",null,t?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"," ",i.role===1?"\u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430":"\u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),O.default.createElement("form",{onSubmit:P},s._base&&O.default.createElement("div",{className:"field-error",style:{marginBottom:"1rem"}},s._base),O.default.createElement("section",{className:"form-section"},O.default.createElement("h3",null,"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),X("first_name")&&O.default.createElement("div",{className:"field-error"},X("first_name")),O.default.createElement("input",{name:"first_name",value:i.first_name,onChange:S,placeholder:"\u0406\u043C\u02BC\u044F"}),X("last_name")&&O.default.createElement("div",{className:"field-error"},X("last_name")),O.default.createElement("input",{name:"last_name",value:i.last_name,onChange:S,placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),X("email")&&O.default.createElement("div",{className:"field-error"},X("email")),O.default.createElement("input",{name:"email",type:"email",value:i.email,onChange:S,placeholder:"Email"}),X("phone")&&O.default.createElement("div",{className:"field-error"},X("phone")),O.default.createElement("input",{name:"phone",value:i.phone,onChange:S,placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),X("password")&&O.default.createElement("div",{className:"field-error"},X("password")),O.default.createElement("input",{name:"password",type:"password",value:i.password,onChange:S,placeholder:t?"\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u0437\u0430\u043B\u0438\u0448\u0442\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u043C, \u0449\u043E\u0431 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438)":"\u041F\u0430\u0440\u043E\u043B\u044C",required:!t}),X("description")&&O.default.createElement("div",{className:"field-error"},X("description")),O.default.createElement("textarea",{name:"description",value:i.description,onChange:S,placeholder:"\u041E\u043F\u0438\u0441"}),X("role")&&O.default.createElement("div",{className:"field-error"},X("role")),O.default.createElement("label",{htmlFor:"role"},"\u0420\u043E\u043B\u044C"),O.default.createElement("select",{id:"role",name:"role",value:i.role,onChange:S,required:!0},O.default.createElement("option",{value:0},"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A"),O.default.createElement("option",{value:1},"\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440"))),t&&O.default.createElement("section",{className:"form-section"},O.default.createElement("h3",null,"\u0424\u043E\u0442\u043E \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),d&&O.default.createElement("div",{className:"logo-preview"},O.default.createElement("img",{src:d,alt:"Employee photo preview",style:{width:120,height:120,objectFit:"cover",borderRadius:"50%"}}),O.default.createElement("button",{type:"button",className:"btn-remove-logo",onClick:H},"\u2715 \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0444\u043E\u0442\u043E")),O.default.createElement("div",{className:"file-input-wrapper"},O.default.createElement("input",{type:"file",id:"photo-input",accept:"image/*",onChange:z,className:"file-input"}),O.default.createElement("label",{htmlFor:"photo-input",className:"file-input-label"},d?"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0444\u043E\u0442\u043E":"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u043E\u0442\u043E"),O.default.createElement("span",{className:"file-input-hint"},"PNG, JPG, GIF \u0434\u043E 5MB")),X("photo")&&O.default.createElement("div",{className:"field-error"},X("photo"))),t&&O.default.createElement("section",{className:"form-section services-section"},O.default.createElement("div",{className:"services-header"},O.default.createElement("h3",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),O.default.createElement("button",{type:"button",className:"btn-add-service",onClick:V},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443")),p.length>0?O.default.createElement("div",{className:"services-grid"},p.map(Y=>O.default.createElement("div",{key:Y.id,className:"service-card"},O.default.createElement("div",{className:"service-card-header"},O.default.createElement("h4",null,Y.name),O.default.createElement("div",{className:"service-card-actions"},O.default.createElement("button",{type:"button",className:"btn-icon-edit",onClick:()=>I(Y),title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"},"\u270E"),O.default.createElement("button",{type:"button",className:"btn-icon-delete",onClick:()=>G(Y),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u{1F5D1}"))),O.default.createElement("p",{className:"service-description"},Y.description),O.default.createElement("div",{className:"service-footer"},O.default.createElement("span",{className:"service-price"},Se(Y.price)," \u0433\u0440\u043D"),O.default.createElement("span",{className:"service-duration"},Y.duration," \u0445\u0432"))))):O.default.createElement("div",{className:"empty-services"},O.default.createElement("p",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u0449\u0435 \u043D\u0435 \u0434\u043E\u0434\u0430\u043D\u0456"),O.default.createElement("button",{type:"button",className:"btn-add-first-service",onClick:V},"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0435\u0440\u0448\u0443 \u043F\u043E\u0441\u043B\u0443\u0433\u0443"))),O.default.createElement("div",{className:"form-actions"},o&&r&&O.default.createElement("button",{type:"button",onClick:r},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),O.default.createElement("button",{type:"submit"},t?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"))),t&&O.default.createElement(Uo,{open:m,employee:t,service:g,onClose:()=>{y(!1),v(null)},onSaved:re}))}var Ht=J(Q());(function(){if(!document.getElementById("b9644920dd4b82f30f246dfd1f69aee7bf9f5599fdae5c8b8a399e9acdd67c6f")){var e=document.createElement("style");e.id="b9644920dd4b82f30f246dfd1f69aee7bf9f5599fdae5c8b8a399e9acdd67c6f",e.textContent=`.login {
  max-width: 380px !important;
  margin: 0 auto !important;
  padding-top: 40px;
}

.login__title {
  text-align: center;
  font-size: 28px;
  margin-bottom: 24px;
  color: var(--text);
}

.login__error {
  background: #ffd7d2;
  border-left: 4px solid #d57a66;
  padding: 10px 14px;
  border-radius: var(--radius);
  margin-bottom: 20px;
  color: #5a2a23;
  font-size: 15px;
}

.login__form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.login__container {
  text-align: center;
  padding-top: 60px;
}
`,document.head.appendChild(e)}})();function Ho(){let[e,t]=(0,Ht.useState)(""),n=He();async function r(o){o.preventDefault(),t("");let a=o.target.email.value,i=o.target.password.value;try{let l=await fetch("/api/employees/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:i})});if(!l.ok){t("\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 email \u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C");return}let s=await l.json();console.log(s.company_id),s.company_id?n(`/companies/${s.company_id}/dashboard`):n("/companies/new")}catch(l){console.error(l),t("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u2019\u0454\u0434\u043D\u0430\u043D\u043D\u044F \u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C")}}return Ht.default.createElement("div",{className:"login container"},Ht.default.createElement("h1",{className:"login__title"},"\u0412\u0445\u0456\u0434"),e&&Ht.default.createElement("div",{className:"login__error"},e),Ht.default.createElement("form",{className:"login__form",onSubmit:r},Ht.default.createElement("input",{type:"email",placeholder:"Email",name:"email",required:!0}),Ht.default.createElement("input",{type:"password",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",name:"password",required:!0}),Ht.default.createElement("button",{type:"submit",className:"btn"},"\u0423\u0432\u0456\u0439\u0442\u0438")))}var vu=J(Q());function yu(){return vu.default.createElement("div",null,vu.default.createElement("h1",null,"404 CompanyNotFound"))}var Re=J(Q());var rt=J(Q());(function(){if(!document.getElementById("a127da0de2169adcba038b037c01109c27901a050a4a9ac5b50bf49ff645976e")){var e=document.createElement("style");e.id="a127da0de2169adcba038b037c01109c27901a050a4a9ac5b50bf49ff645976e",e.textContent=`.sidebar {
  width: 240px;
  background: var(--bg-sidebar);
  padding: 10px;
  border-right: 1px solid var(--border-soft);
}

.sidebar__logo {
}

.sidebar__nav a {
  display: block;
  padding: 10px 12px;
  margin-bottom: 8px;
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-main);
}

.sidebar__nav a.active {
  background: var(--accent-soft);
}
`,document.head.appendChild(e)}})();function wu({companyName:e,id:t,evikonceUrl:n}){return rt.default.createElement("aside",{className:"sidebar"},rt.default.createElement("div",{class:"hero-logo-small content-center"},rt.default.createElement("img",{src:"/images/evikonce-logo.png",alt:"\u0404 \u0412\u0456\u043A\u043E\u043D\u0446\u0435"}),rt.default.createElement("div",{className:"hero-logo-name-small"},rt.default.createElement("span",null,"\u0404")," \u0412\u0456\u043A\u043E\u043D\u0446\u0435")),rt.default.createElement("h2",{className:"sidebar__logo"},rt.default.createElement(tn,{to:`/w/${n}`},e)),rt.default.createElement("nav",{className:"sidebar__nav"},rt.default.createElement(tn,{to:`/companies/${t}/dashboard`},"\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440"),rt.default.createElement(tn,{to:`/companies/${t}/employees`},"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438"),rt.default.createElement(tn,{to:`/companies/${t}/clients`},"\u041A\u043B\u0456\u0454\u043D\u0442\u0438"),rt.default.createElement(tn,{to:`/companies/${t}/edit`},"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),rt.default.createElement(tn,{to:`/companies/${t}/settings`},"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F")))}var qn=J(Q());(function(){if(!document.getElementById("a675d0013b35ba43c4e7f713f899b0aef50b34428c621f79aafe309f9d5b2c29")){var e=document.createElement("style");e.id="a675d0013b35ba43c4e7f713f899b0aef50b34428c621f79aafe309f9d5b2c29",e.textContent=`/* TopBar container */
.topbar {
  position: sticky;
  top: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 64px;
  padding: 0 24px;

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

/* Left side */
.topbar__left h1 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #111;
  letter-spacing: -0.02em;
}

/* Right side */
.topbar__right {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* User emoji / avatar placeholder */
.topbar__user {
  font-size: 20px;
  cursor: default;
}

/* Logout button */
.logout-btn {
  appearance: none;
  border: none;
  background: #eaeaee;
  color: #111;

  padding: 8px 14px;
  border-radius: 10px;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
  transition:
    background 0.15s ease,
    transform 0.05s ease;
}

.logout-btn:hover {
  background: #f199b8;
}

.logout-btn:active {
  transform: translateY(1px);
}

/* Mobile tweaks */
@media (max-width: 600px) {
  .topbar {
    padding: 0 16px;
  }

  .topbar__left h1 {
    font-size: 18px;
  }
}
`,document.head.appendChild(e)}})();function xu({userName:e}){return qn.default.createElement("header",{className:"topbar"},qn.default.createElement("div",{className:"topbar__left"},qn.default.createElement("h1",null,e)),qn.default.createElement("div",{className:"topbar__right"},qn.default.createElement("span",{className:"topbar__user"}),qn.default.createElement("button",{onClick:async()=>{await fetch("/api/employees/logout",{method:"POST",credentials:"include"}),window.location.href="/companies/welcome"},className:"logout-btn"},"\u0412\u0438\u0445\u0456\u0434")))}var K=J(Q());var nn=J(Q());function Ei({timeSlot:e}){let t=s=>s instanceof Date?s:new Date(s),n=t(e.start_time),r=t(e.end_time),o=(r-n)/(1e3*60*60),a=(r-n)/(1e3*60),i=n.getMinutes(),l=e.client?.first_name;return nn.default.createElement("div",{className:`time-slot-block ${e.state}`,style:{position:"absolute",top:`${i/60*100}%`,height:`${o*100}%`,left:0,right:0}},l?nn.default.createElement(nn.default.Fragment,null,nn.default.createElement("div",{className:"client-name"},l),nn.default.createElement("div",{className:"time-label"},e.service_name," (",a," min)")):nn.default.createElement(nn.default.Fragment,null,nn.default.createElement("div",null,e.state)))}var ct=J(Q()),um=J(Q());var W=J(Q());var Dn=J(Q());(function(){if(!document.getElementById("016eff5b894d8467c8ab482e5e63306ffab800f5cd19b0509fbb6548608fa56e")){var e=document.createElement("style");e.id="016eff5b894d8467c8ab482e5e63306ffab800f5cd19b0509fbb6548608fa56e",e.textContent=`.confirm-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  /* backdrop-filter: blur(4px); */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  border-radius: 16px;
}

.confirm-modal {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 20px;
  width: 320px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.confirm-modal h3 {
  margin: 0 0 8px;
}

.confirm-modal p {
  margin: 0 0 16px;
  color: #555;
}

.confirm-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.btn {
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.btn.cancel {
  background: #e5e7eb;
}

.btn.danger {
  background: #ef4444;
  color: white;
}
`,document.head.appendChild(e)}})();function Bo({open:e,title:t="Are you sure?",message:n="This action cannot be undone.",confirmText:r="Yes",cancelText:o="Cancel",onConfirm:a,onCancel:i}){return e?Dn.default.createElement("div",{className:"confirm-overlay",onClick:i},Dn.default.createElement("div",{className:"confirm-modal",onClick:l=>l.stopPropagation()},Dn.default.createElement("h3",null,t),Dn.default.createElement("p",null,n),Dn.default.createElement("div",{className:"confirm-actions"},Dn.default.createElement("button",{className:"btn cancel",onClick:i},o),Dn.default.createElement("button",{className:"btn danger",onClick:a},r)))):null}(function(){if(!document.getElementById("98b4fbe3096ef325ff4a3b26beed9b76a8283f32b9e9e50a08673263ce04bde0")){var e=document.createElement("style");e.id="98b4fbe3096ef325ff4a3b26beed9b76a8283f32b9e9e50a08673263ce04bde0",e.textContent=`.weekday-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
}

.weekday-checkbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
}

.weekday-checkbox input {
  z-index: 2;
}

.weekday-checkbox span {
  margin-left: -6px; /* pull text behind checkbox */
  padding-left: 10px; /* space so text is readable */
  font-size: 14px;
  z-index: 1;
}
`,document.head.appendChild(e)}})();function Wo({open:e,employee:t,window:n,selectedDate:r,onClose:o,onSaved:a}){let[i,l]=(0,W.useState)({start_time:"",end_time:"",break_from:"",break_to:"",weekends:[],effective_date:new Date().toISOString().slice(0,10),end_date:""}),[s,u]=(0,W.useState)(!1),[p,c]=(0,W.useState)(null),[m,y]=(0,W.useState)(null),g=[{id:0,label:"\u041F\u043D"},{id:1,label:"\u0412\u0442"},{id:2,label:"\u0421\u0440"},{id:3,label:"\u0427\u0442"},{id:4,label:"\u041F\u0442"},{id:5,label:"\u0421\u0431"},{id:6,label:"\u041D\u0434"}],[v,w]=(0,W.useState)(!1),[f,d]=(0,W.useState)({effective_date:"",end_date:""});(0,W.useEffect)(()=>{e&&(n?(l({start_time:n.start_time||"",end_time:n.end_time||"",break_from:n.break_from||"",break_to:n.break_to||"",weekends:Array.isArray(n.weekends)?n.weekends:[],effective_date:n.effective_date||"",end_date:n.end_date||""}),d({effective_date:n.effective_date?.slice(0,10)||"",end_date:n.end_date?.slice(0,10)||""})):l({start_time:"2000-01-01T09:00:00",end_time:"2000-01-01T18:00:00",break_from:"2000-01-01T13:00:00",break_to:"2000-01-01T14:00:00",weekends:[5,6],effective_date:r||new Date().toISOString().slice(0,10),end_date:""}))},[n,e,r]);let h={start_time:"2000-01-01T09:00:00",end_time:"2000-01-01T18:00:00",break_from:"2000-01-01T13:00:00",break_to:"2000-01-01T14:00:00",weekends:[5,6],effective_date:r||new Date().toISOString().slice(0,10),end_date:""};if((0,W.useEffect)(()=>{c(null),y(null)},[e,n]),!e)return null;let k=async()=>{u(!0),c(null);let E={...i,employee_id:t.id,id:n?.id};try{let S=await fetch("/api/windows/upsert",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)});if(!S.ok)throw new Error(await S.text());let z=await S.json();y(n?"\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E":"\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E"),setTimeout(()=>{y(null),a(z),o()},800)}catch(S){c(S.message||"Failed to save window")}finally{u(!1)}},b=async()=>{if(n)try{let E=await fetch(`/api/windows/${n.id}`,{method:"DELETE",credentials:"include"});if(!E.ok)throw new Error(await E.text());y("\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E"),setTimeout(()=>{y(null),a(null),o()},800)}catch(E){c(E.message||"Failed to delete window")}};return i&&W.default.createElement(W.default.Fragment,null,W.default.createElement("div",{className:"confirm-overlay",onClick:o},W.default.createElement("div",{className:"glass-modal",onClick:E=>E.stopPropagation()},W.default.createElement("h3",null,n?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435":"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),W.default.createElement("div",null,"( ",f.effective_date," .. ",f.end_date," )"),W.default.createElement("br",null),W.default.createElement("label",null,"\u0414\u0430\u0442\u0430 \u043F\u043E\u0447\u0430\u0442\u043A\u0443"),W.default.createElement("input",{type:"date",value:i.effective_date,onChange:E=>l({...i,effective_date:E.target.value})}),W.default.createElement("label",null,"\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F"),W.default.createElement("input",{type:"date",value:i.end_date,onChange:E=>l({...i,end_date:E.target.value})}),p&&W.default.createElement("div",{className:"form__error"},p),m&&W.default.createElement("div",{className:"form__success"},m),W.default.createElement("label",null,"\u0420\u043E\u0431\u043E\u0447\u0438\u0438\u0439 \u0447\u0430\u0441 \u043F\u043E\u0447\u0430\u0442\u043E\u043A"),W.default.createElement("input",{type:"time",value:Pn(i.start_time),onChange:E=>{let S=Ln(i.start_time||new Date().toISOString(),E.target.value);l(z=>({...z,start_time:S}))}}),W.default.createElement("label",null,"\u0420\u043E\u0431\u043E\u0447\u0438\u0438\u0306 \u0447\u0430\u0441 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F"),W.default.createElement("input",{type:"time",value:Pn(i.end_time),onChange:E=>{let S=Ln(i.end_time||new Date().toISOString(),E.target.value);l(z=>({...z,end_time:S}))}}),W.default.createElement("label",null,"\u041F\u0435\u0440\u0435\u0440\u0432\u0430 \u043F\u043E\u0447\u0430\u0442\u043E\u043A"),W.default.createElement("input",{type:"time",value:Pn(i.break_from),onChange:E=>{let S=Ln(i.break_from||new Date().toISOString(),E.target.value);l(z=>({...z,break_from:S}))}}),W.default.createElement("label",null,"\u041F\u0435\u0440\u0435\u0440\u0432\u0430 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F"),W.default.createElement("input",{type:"time",value:Pn(i.break_to),onChange:E=>{let S=Ln(i.break_to||new Date().toISOString(),E.target.value);l(z=>({...z,break_to:S}))}}),W.default.createElement("div",{className:"weekday-picker"},W.default.createElement("label",{className:"form-label"},"\u0412\u0438\u0445\u0456\u0434\u043D\u0456"),W.default.createElement("div",{className:"weekday-grid"},g.map(E=>{let S=i.weekends?.includes(E.id);return W.default.createElement("label",{key:E.id,className:"weekday-checkbox mb-2"},W.default.createElement("input",{type:"checkbox",checked:S,onChange:()=>{l(z=>({...z,weekends:S?z.weekends.filter(H=>H!==E.id):[...z.weekends,E.id]}))}}),W.default.createElement("span",null,E.label))}))),W.default.createElement("div",{className:"modal-actions"},W.default.createElement("button",{onClick:o,disabled:s},"Cancel"),n&&W.default.createElement(W.default.Fragment,null,W.default.createElement("button",{className:"danger",onClick:()=>w(!0)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"),W.default.createElement(Bo,{open:v,title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435?",message:"\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435 \u0432\u0456\u043A\u043E\u043D\u0446\u0435?",confirmText:"\u0422\u0430\u043A",cancelText:"\u041D\u0456",onConfirm:()=>{w(!1),b()},onCancel:()=>w(!1)})),W.default.createElement("button",{className:"apply",onClick:k,disabled:s},n?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438")))))}function bu({days:e,weekStart:t,setWeekStart:n,employees:r,currentEmployee:o,setCurrentEmployee:a}){let i=()=>n(Nn(t,7)),l=()=>n(Nn(t,-7)),s=()=>n(Xn(new Date)),[u,p]=(0,um.useState)(!1),c=o?.window;return ct.default.createElement("header",{className:"calendar__header sticky"},ct.default.createElement("h4",null,e[0].toLocaleDateString("uk-UA",{day:"numeric",month:"long"})," \u2013 ",e[6].toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})),ct.default.createElement("select",{className:"employee-select",value:o?.id||"",onChange:m=>{let y=m.target.value;a(y===""?null:r.find(g=>g.id===Number(y)))}},ct.default.createElement("option",{value:""},"\u041E\u0431\u0440\u0430\u0442\u0438 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),r.map(m=>ct.default.createElement("option",{key:m.id,value:m.id},m.first_name," ",m.last_name))),o&&!c&&ct.default.createElement("button",{className:"secondary",onClick:()=>p(!0)},"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),o&&ct.default.createElement(Wo,{open:u,employee:o,window:o.window,onClose:()=>p(!1),onSaved:m=>{a(y=>y&&{...y,window:m})}}),ct.default.createElement("div",{className:"calendar__actions"},ct.default.createElement("button",{onClick:l},"\u2190"),ct.default.createElement("button",{onClick:s},"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456"),ct.default.createElement("button",{onClick:i},"\u2192"),ct.default.createElement("input",{className:"date__picker",type:"date",value:t.toISOString().slice(0,10),onChange:m=>n(new Date(m.target.value+"T00:00:00"))})))}var U=J(Q()),Te=J(Q());var Ke=J(Q());(function(){if(!document.getElementById("d5860081ef1c8a6df2ca309b7af21e03f785b56257746a737b7a744dcab475cd")){var e=document.createElement("style");e.id="d5860081ef1c8a6df2ca309b7af21e03f785b56257746a737b7a744dcab475cd",e.textContent=`.client-input-row {
  display: flex;
  gap: 6px;
}

.icon-button {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: none;
  background: #3b82f6;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.icon-button:hover {
  background: #2563eb;
}

.glass-modal.small {
  max-width: 360px;
}
`,document.head.appendChild(e)}})();function ku({open:e,onClose:t,onCreated:n}){let[r,o]=(0,Ke.useState)({first_name:"",last_name:"",email:"",phone:""}),[a,i]=(0,Ke.useState)(!1),[l,s]=(0,Ke.useState)(null),[u,p]=(0,Ke.useState)(null);if(!e)return null;let c=async()=>{i(!0),s(null);try{let m=await fetch("/api/clients",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!m.ok)throw new Error(await m.text());let y=await m.json();p(`Client ${y.first_name} successfully created`),setTimeout(()=>{p(null),n(y),t()},1e3)}catch(m){s(m.message||"Failed to create client")}finally{i(!1)}};return Ke.default.createElement("div",{className:"confirm-overlay",onClick:t},Ke.default.createElement("div",{className:"glass-modal small",onClick:m=>m.stopPropagation()},Ke.default.createElement("h3",null,"\u041D\u043E\u0432\u0438\u0439 \u043A\u043B\u0456\u0454\u043D\u0442"),l&&Ke.default.createElement("div",{className:"form__error"},l),u&&Ke.default.createElement("div",{className:"form__success"},u),["first_name","last_name","email","phone"].map(m=>Ke.default.createElement("input",{key:m,placeholder:m.replace("_"," "),value:r[m],onChange:y=>o(g=>({...g,[m]:y.target.value}))})),Ke.default.createElement("div",{className:"modal-actions"},Ke.default.createElement("button",{onClick:t},"Close"),Ke.default.createElement("button",{className:"apply",disabled:a,onClick:c},"Create"))))}(function(){if(!document.getElementById("9403ccd3928ae6193b77064c875b789d6683bd4ba322769601253770b0128aab")){var e=document.createElement("style");e.id="9403ccd3928ae6193b77064c875b789d6683bd4ba322769601253770b0128aab",e.textContent=`.form__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form__title-left {
  font-weight: 500;
}

.form__title-right {
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  text-transform: uppercase;
}
.form__title_preview {
  border: 1px dashed var(--accent);
}

.form__title_scheduled {
  background: #047857;
  color: white;
}

.form__title_cancelled {
  color: #d57a66;
  border: solid;
}

.input-with-button {
  position: relative;
  width: 80%;
}

.input-with-button input {
  padding-right: 42px; /* space for button */
}

.input-button {
  position: absolute;
  top: 40%;
  right: -46px;
  transform: translateY(-50%);
  height: 36px;
  width: 36px;
  border-radius: 10px;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
}

.input-button:hover {
  background: rgba(0, 0, 0, 0.1);
}
`,document.head.appendChild(e)}})();function Su({slot:e,weekStart:t,previewSlot:n,setPreviewSlot:r,setTimeSlots:o,setEditingSlot:a,editingSlot:i,currentEmployee:l}){let[s,u]=(0,Te.useState)(()=>e?.duration??15),[p,c]=(0,Te.useState)(""),[m,y]=(0,Te.useState)([]),[g,v]=(0,Te.useState)(!1),[w,f]=(0,Te.useState)(null),[d,h]=(0,Te.useState)(null),[k,b]=(0,Te.useState)(null),[E,S]=(0,Te.useState)(null),[z,H]=(0,Te.useState)(!1),P={preview:"\u041F\u0440\u0435\u0434\u043F\u043B\u0430\u043D\u043E\u0432\u0430\u043D\u0438\u0439",scheduled:"\u0417\u0430\u043F\u043B\u0430\u043D\u043E\u0432\u0430\u043D\u0438\u0439"},[V,I]=(0,Te.useState)(null),[G,re]=(0,Te.useState)(null),[X,Se]=(0,Te.useState)(!1),[Y,ne]=(0,Te.useState)(!1);if((0,Te.useEffect)(()=>{if(!e)return;a(e),u(e.duration??15);let L=l.services.find(C=>C.id===e.service_id);if(L){I(L);let C=e.price?Number(e.price):null;re(C)}},[e,l]),!i)return null;let Pe=(L,C)=>Je(_n(new Date(L),C)),Ge=(0,Te.useRef)(null),ft=L=>{!L||L.length<3||(Ge.current&&clearTimeout(Ge.current),Ge.current=window.setTimeout(async()=>{v(!0);let x=await(await fetch(`/api/clients?search=${L}`)).json();y(x),v(!1)},250))},kt=async()=>{if(h(null),!!i)try{let L=await fetch(`/api/time_slots/${i.id}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!L.ok){let x=await L.text();throw new Error(x||"Failed to update time slot")}let C=await L.json();o(x=>x.map(F=>F.id===C.id?C:F)),b("Time slot updated successfully!"),setTimeout(()=>{b(null),a(null),c(""),f(null),r(null)},1e3),nr()}catch(L){h(L.message)}},$r=async()=>{if(h(null),!!i)try{let L=await fetch(`/api/time_slots/${i.id}`,{method:"DELETE",credentials:"include"});if(!L.ok){let x=await L.text();throw new Error(x||"Failed to delete time slot")}let C=await L.json();o(x=>x.filter(F=>F.id!==C.id)),b("Time slot deleted successfully!"),setTimeout(()=>{b(null),a(null),c(""),f(null),r(null)},1e3),nr()}catch(L){h(L.message)}},Vo=async()=>{if(h(null),!i)return;let L={...i,client_id:i.client_id??n?.client_id??null};console.log("POST payload:",L);try{let C=await fetch("/api/time_slots",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(L)});if(!C.ok){let F=await C.text();throw new Error(F||"Failed to schedule time slot")}let x=await C.json();o(F=>[...F,x]),b("\u0421\u043B\u043E\u0442 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0438\u0306 \u0443\u0441\u043F\u0456\u0448\u043D\u043E!"),setTimeout(()=>{b(null),a(null),c(""),f(null),r(null)},1e3),nr()}catch(C){h(C.message)}},nr=()=>{let L=t.toISOString().slice(0,10),C=Nn(t,6).toISOString().slice(0,10);fetch(`/api/employees/${l.id}/availability?from=${L}&to=${C}`).then(x=>x.json()).then(x=>{S(x.employee.window),o(x.employee.time_slots)})};return U.default.createElement("div",{className:"glass-overlay",onClick:()=>a(null)},U.default.createElement("div",{className:"glass-modal",onClick:L=>L.stopPropagation()},U.default.createElement("div",{className:"form__title"},U.default.createElement("div",{className:"form__title-left"},"\u0420\u0435\u0434\u0430\u0433\u0443\u043D\u043D\u044F \u0441\u043B\u043E\u0442\u0443:"),U.default.createElement("div",{className:`form__title-right form__title_${i.state}`},i.state)),d&&U.default.createElement("div",{className:"form__error"},d),k&&U.default.createElement("div",{className:"form__success"},k),U.default.createElement("div",{className:"form-group mt-3"},U.default.createElement("div",{className:"time-range-row width-50"},U.default.createElement("label",null,"\u0414\u0430\u0442\u0430"),U.default.createElement("input",{type:"date",className:"date__picker",value:i.day,onChange:L=>{let C=L.target.value;a(x=>({...x,day:C,start_time:`${C}${x.start_time.slice(10)}`,end_time:`${C}${x.end_time.slice(10)}`}))}}))),U.default.createElement("div",{className:"form-group mt-2"},U.default.createElement("label",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0430"),U.default.createElement("div",{className:"time-range-row"},U.default.createElement("div",{className:"input-with-button"},U.default.createElement("select",{className:"width-100",value:i.service_id??"",onChange:L=>{let C=Number(L.target.value),x=l.services.find(xe=>xe.id===C);if(!x){I(null),re(null);return}let F=new Date(i.start_time);u(x.duration);let Z={service_id:x.id,duration:x.duration,price:x.price,end_time:Je(_n(F,x.duration))};a(xe=>({...xe,...Z})),r(xe=>xe?{...xe,...Z}:null),I(x),re(null)}},U.default.createElement("option",{value:""},"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043F\u043E\u0441\u043B\u0443\u0433\u0443"),l.services.map(L=>U.default.createElement("option",{key:L.id,value:L.id},L.name))),U.default.createElement("div",{className:"input-button content-center",title:"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443",onClick:()=>ne(!0)},"+")),U.default.createElement(Uo,{open:Y,employee:l,onClose:()=>ne(!1),onSaved:L=>{if(!L)return;l.services.push(L);let C=new Date(i.start_time);u(L.duration);let x={service_id:L.id,duration:L.duration,price:L.price,end_time:Je(_n(C,L.duration))};a(F=>({...F,...x})),r(F=>F?{...F,...x}:null),I(L),re(null)}}))),U.default.createElement("div",{className:"form-group"},V&&U.default.createElement(U.default.Fragment,null,U.default.createElement("div",{className:"time-range-row mt-1 t-sm"},U.default.createElement("label",null,"\u0425\u0432"),U.default.createElement("input",{type:"number",step:15,min:15,value:i.duration,onChange:L=>{let C=Number(L.target.value),x=new Date(i.start_time);u(C),a(F=>({...F,duration:C,end_time:Je(_n(x,C))})),r(F=>F?{...F,duration:C,end_time:Je(_n(x,C))}:null)}}),U.default.createElement("label",{className:"content-center"},"\u0426\u0456\u043D\u0430"),U.default.createElement("input",{type:"number",step:.01,min:0,value:G??Number(i.price??V?.price??0),onChange:L=>{let C=Number(L.target.value);re(C),a(x=>({...x,price:C}))}})))),U.default.createElement("div",{className:"form-group time-range"},U.default.createElement("label",null,"\u0427\u0430\u0441"),U.default.createElement("div",{className:"time-range-row"},U.default.createElement("input",{type:"time",step:900,value:Pn(i.start_time),onChange:L=>{let C=Ln(i.start_time,L.target.value);a(x=>({...x,start_time:C,end_time:Pe(C,s)}))}}),U.default.createElement("input",{type:"time",step:900,value:Pn(i.end_time),onChange:L=>{let C=Ln(i.end_time,L.target.value);a(x=>({...x,end_time:C,start_time:Pe(C,-s)}))}}))),U.default.createElement("div",{className:"form-group"},U.default.createElement("label",null,"\u041A\u043B\u0456\u0454\u043D\u0442"),U.default.createElement("div",{className:"input-with-button"},U.default.createElement("input",{type:"text",placeholder:"Search client...",value:i?.client?`${i.client.first_name} ${i.client.last_name}`:p,onChange:L=>{a(C=>({...C,client:null,client_id:null})),c(L.target.value),ft(L.target.value)}}),U.default.createElement("div",{className:"input-button content-center",onClick:()=>Se(!0),title:"Add client"},"+")),U.default.createElement(ku,{open:X,onClose:()=>Se(!1),onCreated:L=>{a(C=>({...C,client_id:L.id,client:L}))}}),g&&U.default.createElement("div",{className:"hint"},"Searching\u2026"),m.length>0&&U.default.createElement("ul",{className:"autocomplete-list"},m.map(L=>U.default.createElement("li",{key:L.id,onClick:()=>{y([]),a(C=>({...C,client_id:L.id,client:L}))}},U.default.createElement("strong",null,L.first_name," ",L.last_name),U.default.createElement("div",{className:"muted"},L.email))))),U.default.createElement("div",{className:"modal-actions"},U.default.createElement("button",{onClick:()=>{h(null),a(null),c(""),f(null)}},"\u0417\u0430\u043A\u0440\u0438\u0442\u0438"),i.state==="preview"&&U.default.createElement("button",{className:"apply",onClick:Vo},"\u0417\u0430\u043F\u043B\u0430\u043D\u0443\u0432\u0430\u0442\u0438"),i.state==="scheduled"&&U.default.createElement(U.default.Fragment,null,U.default.createElement("button",{className:"danger",onClick:()=>H(!0)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"),U.default.createElement(Bo,{open:z,title:"Delete time slot",message:"Are you sure you want to delete this time slot?",confirmText:"Yes",cancelText:"No",onConfirm:()=>{H(!1),$r()},onCancel:()=>H(!1)})),i.state==="scheduled"&&U.default.createElement("button",{className:"apply",onClick:kt},"\u041E\u043D\u043E\u0432\u0438\u0442\u0438"))))}(function(){if(!document.getElementById("d2a1e44d6fcbce1ab72efc649c94a73f5a8a1e5bed0b9b132dbb11207b7851e0")){var e=document.createElement("style");e.id="d2a1e44d6fcbce1ab72efc649c94a73f5a8a1e5bed0b9b132dbb11207b7851e0",e.textContent=`.calendar-card {
  padding: 20px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
}

/* HEADER */
.calendar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.calendar__actions {
  display: flex;
  justify-content: center; /* \u2190 center as a group */
  align-items: center;
  gap: 1px;
}

.date__picker {
  margin-bottom: 0;
}

/* WEEK GRID */
.week-calendar {
  border-radius: 14px;
  overflow: hidden;
  background: white;
  border: 1px solid var(--border);
}

.week-header {
  display: grid;
  grid-template-columns: 64px repeat(7, 1fr);
  background: #fafafa;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
}

.day-col-header {
  text-align: center;
  padding: 10px 0;
  position: relative;
}

.day-col-header.today {
  background: rgba(59, 130, 246, 0.12); /* soft blue */
  border-bottom: 2px solid #3b82f6;
  font-weight: 600;
}

.day-col-header.today div:first-child {
  color: #2563eb; /* weekday text */
}

.day-col-header.today div:last-child {
  color: #1e40af; /* date number */
}

/* bubble */
.day-col-header::after {
  content: attr(data-tooltip);
  position: absolute;

  /* POSITIONING */
  top: calc(100% + 10px);
  left: 6px; /* left-aligned instead of center */

  background: #111827; /* dark chat bubble */
  color: #fff;

  padding: 8px 12px;
  border-radius: 10px;

  font-size: 12px;
  line-height: 1.4;
  text-align: left;
  white-space: pre-line;

  min-width: 180px; /* about 2x typical tooltip */
  max-width: 220px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);

  opacity: 0;
  pointer-events: none;
  transform: translateY(-4px);
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;

  z-index: 50;
}

.day-col-header::before {
  content: "";
  position: absolute;

  top: 100%;
  left: 18px; /* aligns tail near date number */

  border-width: 6px;
  border-style: solid;
  border-color: transparent transparent #111827 transparent;

  opacity: 0;
  transition: opacity 0.15s ease;

  z-index: 51;
}

/* show tooltip */
.day-col-header:hover::after,
.day-col-header:hover::before {
  opacity: 1;
  transform: translateY(0);
}

/* optional: no tooltip if empty */
.day-col-header[data-tooltip=""]::after,
.day-col-header[data-tooltip=""]::before {
  display: none;
}

.day-name {
  font-size: 12px;
  color: #777;
}

.day-number {
  font-size: 15px;
  font-weight: 600;
}

.date-picker {
  margin-bottom: 0;
}

/* BODY */
.week-body {
  max-height: 520px;
  overflow-y: auto;
}

.week-row {
  display: grid;
  grid-template-columns: 64px repeat(7, 1fr);
  min-height: 48px;
  border-bottom: 1px solid #f2f2f2;
}

.time-col {
  font-size: 12px;
  color: #888;
  padding: 8px;
  text-align: right;
}

/* CELLS */
.week-cell {
  border-left: 1px solid #f2f2f2;
  padding: 4px;
  position: relative;
}

/* EVENTS */
.event {
  background: var(--accent);
  color: white;
  font-size: 13px;
  padding: 6px 8px;
  border-radius: 8px;
  box-shadow: var(--shadow);
  margin-bottom: 4px;
}

.sticky {
  position: sticky;
  top: 0;
  z-index: 5;
}

.ghost-btn {
  border: none;
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  max-height: fit-content;
}

.week-body {
  position: relative;
}

.time-slot-block.preview {
  border: 1px dashed var(--accent);
}

.time-slot-block.scheduled {
  background: #517264;
  color: #fff;
}

.time-slot-block {
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  pointer-events: none;
  border-radius: 4px;
  padding: 6px;
  font-size: 13px;
  box-shadow: var(--shadow);

  /* Remove centering since we're positioning absolutely */
  overflow: hidden;
  line-height: 1.2;
}

.client-name {
  position: absolute;
  top: 4px;
  left: 4px;
  font-weight: 600;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 8px);
  background: rgba(0, 0, 0, 0.1);
  padding: 2px 6px;
  border-radius: 3px;
}

.time-slot-block.scheduled .client-name {
  background: rgba(0, 0, 0, 0.2);
}

.time-label {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 8px);
  opacity: 0.85;
  background: rgba(0, 0, 0, 0.1);
  padding: 2px 6px;
  border-radius: 3px;
}

.time-slot-block.scheduled .time-label {
  background: rgba(0, 0, 0, 0.2);
}

/* Adjust for very short slots */
.time-slot-block[style*="height: 25%"] .client-name,
.time-slot-block[style*="height: 25%"] .time-label {
  font-size: 9px;
  padding: 1px 4px;
}

/* Hide time label on very short slots if needed */
.time-slot-block[style*="height: 25%"] .time-label {
  display: none;
} /* Employee select */
.employee-select {
  height: 36px;
  padding: 0 12px;
  background: #111;
  color: #f5f5f5;
  font-size: 14px;
  cursor: pointer;
  width: 200px;
  /* justify-content: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}

/* Remove default ugly outline */
.employee-select:focus {
  outline: none;
  border-color: var(--accent);
}

.week-cell.unavailable {
  background: #f0f0f0;
  cursor: not-allowed;
}

.event-block.busy {
  background: #bfc3c9;
  cursor: not-allowed;
}

.glass-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.glass-modal {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 20px;
  width: 374px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  animation: pop 0.18s ease-out;
}

@keyframes pop {
  from {
    transform: scale(0.96);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 2px;
}

button.danger {
  background: #ff3b30;
  color: white;
}
button.apply {
  background: var(--soft-blue);
  color: white;
}
button.apply:hover {
  background: var(--deep-blue);
}

.now-line {
  position: absolute;
  left: 60px; /* width of time-col */
  right: 0;
  height: 2px;
  background: #ff3b30;
  z-index: 10;
  pointer-events: none;
}

.now-dot {
  position: absolute;
  left: -6px;
  top: -4px;
  width: 10px;
  height: 10px;
  background: #ff3b30;
  border-radius: 50%;
}

.time-range-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.time-range-row input[type="time"] {
  font-size: 14px;
}

.time-range-row .dash {
  opacity: 0.6;
  padding-bottom: 15px;
}
.autocomplete {
  position: relative;
}

.autocomplete-list {
  position: absolute;
  z-index: 1000;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  margin-top: 4px;
  max-height: 220px;
  overflow-y: auto;
}

.autocomplete-list li {
  padding: 10px;
  cursor: pointer;
}

.autocomplete-list li:hover {
  background: #f2f2f2;
}

.hint {
  font-size: 12px;
  opacity: 0.6;
  margin-top: 4px;
}
.calendar__header .secondary {
  margin-left: 8px;
  padding: 6px 10px;
  font-size: 13px;
  border-radius: 8px;
}
.window-a {
  border-top: 3px solid #4caf50;
}
.window-b {
  border-top: 3px solid #2196f3;
}
.window-c {
  border-top: 3px solid #ff9800;
}
.window-d {
  border-top: 3px solid #9c27b0;
}
.window-e {
  border-top: 3px solid #009688;
}
.past {
  background-color: #f5f5f5;
  color: #999;
  opacity: 0.6;
}
.day-col-header .edit-icon {
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 13px;
  color: #999;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  z-index: 5;
}

.day-col-header:hover .edit-icon {
  opacity: 0.8;
}

.day-col-header.today .edit-icon {
  color: #2563eb;
}
`,document.head.appendChild(e)}})();function Eu({employees:e,companyId:t}){let[n,r]=(0,K.useState)(Xn(new Date)),[o,a]=(0,K.useState)(null),[i,l]=(0,K.useState)(null),[s,u]=(0,K.useState)(null),[p,c]=(0,K.useState)([]),[m,y]=(0,K.useState)([]),g=(0,K.useRef)(null),[v,w]=(0,K.useState)(null),[f,d]=(0,K.useState)(null),[h,k]=(0,K.useState)(null),[b,E]=(0,K.useState)(!1),[S,z]=(0,K.useState)(null),H=Array.from({length:7},(x,F)=>Nn(n,F)),P=new Date,V=()=>{let x=n.toISOString().slice(0,10),F=Nn(n,6).toISOString().slice(0,10);fetch(`/api/employees/${i.id}/availability?from=${x}&to=${F}`).then(Z=>Z.json()).then(Z=>{u(Z.employee.window),c(Z.employee.upcoming_windows),y(Z.employee.time_slots)})};(0,K.useEffect)(()=>{i&&V()},[i,n]);let[I,G]=(0,K.useState)(new Date);(0,K.useEffect)(()=>{let x=()=>G(new Date);x();let F=setInterval(x,300*1e3);return()=>clearInterval(F)},[]);let re=(0,K.useRef)(null),[X,Se]=(0,K.useState)(0);(0,K.useEffect)(()=>{re.current&&Se(re.current.getBoundingClientRect().height)},[n,i]);let Y=I.toISOString().slice(0,10),ne=I.getHours(),Pe=I.getMinutes(),Ge=X*ne+X*Pe/60,ft=["window-a","window-b","window-c","window-d","window-e"],kt=x=>{let F=Ao(x,[s,...p||[]]);if(!F)return"";let Z=F.id%ft.length;return ft[Z]},$r=H.some(x=>x.toISOString().slice(0,10)===Y);(0,K.useEffect)(()=>{let x=g.current;x&&requestAnimationFrame(()=>{let F=x.scrollHeight-x.clientHeight;x.scrollTop=F/2})},[n,i]);let Vo=(x,F)=>Je(_n(new Date(x),F)),nr=(x,F)=>{if(!v||v.day!==x.toISOString().slice(0,10))return!1;let Z=Zn(x,F,0),xe=Zn(x,F+1,0),St=Ot(v.start_time),pt=Ot(v.end_time);return jo(St,pt,Z,xe)},L=(x,F,Z)=>{let xe=Ot(x.start_time);return xe?xe.getHours()===Z&&x.day===F.toISOString().slice(0,10):!1},C=(x,F)=>{let Z=x.toISOString().slice(0,10),xe=Zn(x,F,0),St=Zn(x,F+1,0);return m.filter(pt=>{if(pt.day!==Z)return!1;let Bt=Ot(pt.start_time),Yo=Ot(pt.end_time);return jo(Bt,Yo,xe,St)})};return K.default.createElement("section",{className:"calendar-card"},K.default.createElement(bu,{days:H,weekStart:n,setWeekStart:r,employees:e,currentEmployee:i,setCurrentEmployee:x=>{x?l(x):(l(null),y([]),u(null),w(null),c([]))}}),K.default.createElement("div",{className:"week-calendar"},K.default.createElement("div",{className:"week-header"},K.default.createElement("div",{className:"time-col"}),H.map(x=>{let F=x<P,Z=Ao(x,[s,...p||[]]);return K.default.createElement("div",{key:x.toISOString(),className:`day-col-header
                          ${x.toDateString()===P.toDateString()?"today":""}
                          ${kt(x)}
                        `,"data-tooltip":!i||!Z?.effective_date?"":`\u0412\u0456\u043A\u043E\u043D\u0446\u0435
\u041F\u043E\u0447\u0430\u0442\u043E\u043A ${Z?.effective_date}
\u041A\u0456\u043D\u0435\u0446\u044C ${Z?.end_date||"\u221E"}`,onClick:()=>{F||(z(x),E(!0))}},i&&!F&&K.default.createElement("span",{className:"edit-icon"},Z?"\u2699\uFE0F":"\u2795"),K.default.createElement("div",null,x.toLocaleDateString("uk-UA",{weekday:"short"})),K.default.createElement("div",null,x.getDate()))}),i&&S&&K.default.createElement(Wo,{open:b,employee:i,window:Ao(S,[s,...p||[]]),selectedDate:S.toISOString().slice(0,10),onClose:()=>{z(null),E(!1)},onSaved:x=>{l(F=>F&&{...F,window:x})}})),K.default.createElement("div",{className:"week-body",ref:g},$r&&X>0&&K.default.createElement("div",{className:"now-line",style:{top:`${Ge}px`}},K.default.createElement("div",{className:"now-dot"})),lm.map((x,F)=>K.default.createElement("div",{key:x,className:"week-row",ref:F===0?re:null},K.default.createElement("div",{className:"time-col"},x,":00"),H.map(Z=>{let xe=C(Z,x),St=Z<Xn(new Date),pt=sm({day:Z,hour:x,windows:[s,...p]});return K.default.createElement("div",{key:`${Z.toISOString()}-${x}`,className:`week-cell ${pt?"":St?"past":"unavailable"}`,onMouseDown:Bt=>{if(k(null),!pt||!i)return;let Yo=Bt.currentTarget.getBoundingClientRect(),Ou=(Bt.clientY-Yo.top)/Yo.height>=.5?30:0,mm=Ou+30,Ci=Zn(Z,x,Ou),Ni=Zn(Z,x,mm);for(let rn of xe){let _i=Ot(rn.start_time),hm=Ot(rn.end_time);if(jo(Ci,Ni,_i,hm)){d(rn),a(rn);return}}if(v){let rn=Ot(v.start_time),_i=Ot(v.end_time);if(v.day===Z.toISOString().slice(0,10)&&jo(Ci,Ni,rn,_i)){a(v);return}}w({day:Z.toISOString().slice(0,10),dayIndex:H.findIndex(rn=>rn.toDateString()===Z.toDateString()),start_time:Je(Ci),end_time:Je(Ni),state:"preview",employee_id:i.id,company_id:t})}},xe.filter(Bt=>L(Bt,Z,x)).map(Bt=>K.default.createElement(Ei,{key:Bt.id,timeSlot:Bt})),v&&L(v,Z,x)&&K.default.createElement(Ei,{timeSlot:v}))}))))),o&&K.default.createElement(Su,{slot:o,weekStart:n,previewSlot:v,setPreviewSlot:w,setTimeSlots:y,setEditingSlot:a,editingSlot:o,currentEmployee:i}))}var oe=J(Q());(function(){if(!document.getElementById("85680663e3af3af3040ba0baa2d9af434f71b3c84e52d8c7f14a6909fce9151c")){var e=document.createElement("style");e.id="85680663e3af3af3040ba0baa2d9af434f71b3c84e52d8c7f14a6909fce9151c",e.textContent=`.employees-container {
  padding: 24px;
  width: 100%;
}

.employees-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.employees-header h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
}

.btn-primary {
  background: var(--accent, #4a90e2);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.btn-primary:hover {
  background: var(--accent-dark, #357abd);
}

.error-message {
  background: #ffebee;
  color: #d32f2f;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.employees-table {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.employees-table table {
  width: 100%;
  border-collapse: collapse;
}

.employees-table thead {
  background: #f8f9fa;
}

.employees-table th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: #666;
  border-bottom: 2px solid #e9ecef;
  text-align: center;
}

.employees-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  text-align: center;
}

.employees-table tbody tr:hover {
  background: #f8f9fa;
}

.actions {
  display: flex;
  gap: 8px;
}

.btn-edit,
.btn-delete {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
}

.btn-edit {
  background: #e3f2fd;
  color: #1976d2;
}

.btn-edit:hover {
  background: #bbdefb;
}

.btn-delete {
  background: #ffebee;
  color: #d32f2f;
}

.btn-delete:hover {
  background: #ffcdd2;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.employee-form-modal h1 {
  margin-top: 0;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 16px;
}

.form-actions button {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.form-actions button[type="button"] {
  background: #f0f0f0;
  color: #333;
}

.form-actions button[type="button"]:hover {
  background: #e0e0e0;
}

.form-actions button[type="submit"] {
  background: var(--accent, #4a90e2);
  color: white;
}

.form-actions button[type="submit"]:hover {
  background: var(--accent-dark, #357abd);
}
`,document.head.appendChild(e)}})();function Cu({dashboardData:e}){let[t,n]=(0,oe.useState)(e?.employees||[]),[r,o]=(0,oe.useState)(!1),[a,i]=(0,oe.useState)(null),[l,s]=(0,oe.useState)(null),u=()=>{i(null),o(!0)},p=g=>{i(g),o(!0)},c=async g=>{if(window.confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044C\u043E\u0433\u043E \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430?"))try{let v=await fetch(`/api/employees/${g}`,{method:"DELETE",credentials:"include"});if(v.ok)n(t.filter(w=>w.id!==g));else{let w=await v.json();s(w.message||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}}catch{s("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}},m=g=>{n(a?t.map(v=>v.id===g.id?g:v):[...t,g]),o(!1),i(null)},y=()=>{o(!1),i(null)};return oe.default.createElement("div",{className:"employees-container"},oe.default.createElement("div",{className:"employees-header"},oe.default.createElement("h2",null,"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438"),oe.default.createElement("button",{className:"btn",onClick:u},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430")),l&&oe.default.createElement("div",{className:"error-message"},l),t.length===0?oe.default.createElement("div",{className:"empty-state"},oe.default.createElement("p",null,"\u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0456\u0432. \u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0448\u043E\u0433\u043E!")):oe.default.createElement("div",{className:"employees-table"},oe.default.createElement("table",null,oe.default.createElement("thead",null,oe.default.createElement("tr",null,oe.default.createElement("th",null,"\u0406\u043C'\u044F"),oe.default.createElement("th",null,"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),oe.default.createElement("th",null,"Email"),oe.default.createElement("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),oe.default.createElement("th",{className:"content-right"},"\u0414\u0456\u0457"))),oe.default.createElement("tbody",null,t.map(g=>oe.default.createElement("tr",{key:g.id},oe.default.createElement("td",null,g.first_name),oe.default.createElement("td",null,g.last_name),oe.default.createElement("td",null,g.email),oe.default.createElement("td",null,g.phone||"N/A"),oe.default.createElement("td",{className:"actions content-right"},oe.default.createElement("button",{className:"btn-edit",onClick:()=>p(g)},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),oe.default.createElement("button",{className:"btn-delete",onClick:()=>c(g.id)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"))))))),r&&oe.default.createElement("div",{className:"modal-overlay",onClick:y},oe.default.createElement("div",{className:"modal-content",onClick:g=>g.stopPropagation()},oe.default.createElement(jr,{role:"employee",employee:a,onSave:m,onCancel:y,isModal:!0}))))}var te=J(Q());var we=J(Q());function Nu({client:e,onSave:t,onCancel:n,isModal:r=!1}){let o=He(),[a,i]=(0,we.useState)({first_name:"",last_name:"",email:"",phone:"",password:""}),[l,s]=(0,we.useState)({});(0,we.useEffect)(()=>{e&&i({first_name:e.first_name||"",last_name:e.last_name||"",email:e.email||"",phone:e.phone||"",password:""})},[e]);let u=m=>{i({...a,[m.target.name]:m.target.value}),s(y=>({...y,[m.target.name]:null}))},p=async m=>{m.preventDefault();let y={client:{first_name:a.first_name,last_name:a.last_name,email:a.email,phone:a.phone}};a.password&&(y.client.password=a.password);let g=e?`/api/clients/${e.id}`:"/api/clients",w=await fetch(g,{method:e?"PUT":"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)});if(w.ok){let f=await w.json();r&&t?t(f):o("/companies/welcome")}else{let f=await w.json();s(f.errors||{})}},c=m=>l[m]?.message;return we.default.createElement("div",{className:r?"client-form-modal":"client-form container"},we.default.createElement("h1",null,e?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430"),we.default.createElement("form",{onSubmit:p},c("first_name")&&we.default.createElement("div",{className:"field-error"},c("first_name")),we.default.createElement("input",{name:"first_name",value:a.first_name,onChange:u,placeholder:"\u0406\u043C\u02BC\u044F"}),c("last_name")&&we.default.createElement("div",{className:"field-error"},c("last_name")),we.default.createElement("input",{name:"last_name",value:a.last_name,onChange:u,placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),c("email")&&we.default.createElement("div",{className:"field-error"},c("email")),we.default.createElement("input",{name:"email",type:"email",value:a.email,onChange:u,placeholder:"Email"}),c("phone")&&we.default.createElement("div",{className:"field-error"},c("phone")),we.default.createElement("input",{name:"phone",value:a.phone,onChange:u,placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),c("password")&&we.default.createElement("div",{className:"field-error"},c("password")),we.default.createElement("input",{name:"password",type:"password",value:a.password,onChange:u,placeholder:e?"\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u0437\u0430\u043B\u0438\u0448\u0442\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u043C, \u0449\u043E\u0431 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438)":"\u041F\u0430\u0440\u043E\u043B\u044C",required:!e}),we.default.createElement("div",{className:"form-actions"},r&&n&&we.default.createElement("button",{type:"button",onClick:n},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),we.default.createElement("button",{type:"submit"},e?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"))))}(function(){if(!document.getElementById("74b753de80d78e38957b9d8c852f845b8349949efb4a62e8a40b3415643a93b6")){var e=document.createElement("style");e.id="74b753de80d78e38957b9d8c852f845b8349949efb4a62e8a40b3415643a93b6",e.textContent=`.clients-container {
  padding: 24px;
  width: 100%;
}

.clients-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.clients-header h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
}

.btn-primary {
  background: var(--accent, #4a90e2);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.btn-primary:hover {
  background: var(--accent-dark, #357abd);
}

.error-message {
  background: #ffebee;
  color: #d32f2f;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.clients-table {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.clients-table table {
  width: 100%;
  border-collapse: collapse;
}

.clients-table thead {
  background: #f8f9fa;
}

.clients-table th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: #666;
  border-bottom: 2px solid #e9ecef;
  text-align: center;
}

.clients-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  text-align: center;
}

.clients-table tbody tr:hover {
  background: #f8f9fa;
}

.actions {
  display: flex;
  gap: 8px;
}

.btn-edit,
.btn-delete {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
}

.btn-edit {
  background: #e3f2fd;
  color: #1976d2;
}

.btn-edit:hover {
  background: #bbdefb;
}

.btn-delete {
  background: #ffebee;
  color: #d32f2f;
}

.btn-delete:hover {
  background: #ffcdd2;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.employee-form-modal h1 {
  margin-top: 0;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 16px;
}

.form-actions button {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.form-actions button[type="button"] {
  background: #f0f0f0;
  color: #333;
}

.form-actions button[type="button"]:hover {
  background: #e0e0e0;
}

.form-actions button[type="submit"] {
  background: var(--accent, #4a90e2);
  color: white;
}

.form-actions button[type="submit"]:hover {
  background: var(--accent-dark, #357abd);
}
`,document.head.appendChild(e)}})();function _u({dashboardData:e}){let[t,n]=(0,te.useState)([]),[r,o]=(0,te.useState)(!1),[a,i]=(0,te.useState)(null),[l,s]=(0,te.useState)(null),u=async()=>{try{let v=await fetch("/api/clients",{credentials:"include"});if(v.ok){let w=await v.json();n(w.clients)}else s("Failed to fetch clients")}catch{s("Failed to fetch clients")}};(0,te.useEffect)(()=>{(async()=>{try{let w=await fetch("/api/clients",{credentials:"include"});if(w.ok){let f=await w.json();n(f.clients||f)}else s("Failed to fetch clients")}catch{s("Failed to fetch clients")}})()},[]);let p=()=>{i(null),o(!0)},c=v=>{i(v),o(!0)},m=async v=>{if(window.confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044C\u043E\u0433\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430?"))try{let w=await fetch(`/api/clients/${v}`,{method:"DELETE",credentials:"include"});if(w.ok)n(t.filter(f=>f.id!==v));else{let f=await w.json();s(f.message||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}}catch{s("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}},y=v=>{n(a?t.map(w=>w.id===v.id?v:w):[...t,v]),o(!1),i(null)},g=()=>{o(!1),i(null)};return te.default.createElement("div",{className:"clients-container"},te.default.createElement("div",{className:"clients-header"},te.default.createElement("h2",null,"\u041A\u043B\u0456\u0454\u043D\u0442\u0438"),te.default.createElement("button",{className:"btn",onClick:p},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430")),l&&te.default.createElement("div",{className:"error-message"},l),t.length===0?te.default.createElement("div",{className:"empty-state"},te.default.createElement("p",null,"\u041D\u0435\u043C\u0430\u0454 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432. \u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0448\u043E\u0433\u043E!")):te.default.createElement("div",{className:"clients-table"},te.default.createElement("table",null,te.default.createElement("thead",null,te.default.createElement("tr",null,te.default.createElement("th",null,"\u0406\u043C'\u044F"),te.default.createElement("th",null,"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),te.default.createElement("th",null,"Email"),te.default.createElement("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),te.default.createElement("th",{className:"content-right"},"\u0414\u0456\u0457"))),te.default.createElement("tbody",null,t.map(v=>te.default.createElement("tr",{key:v.id},te.default.createElement("td",null,v.first_name),te.default.createElement("td",null,v.last_name),te.default.createElement("td",null,v.email),te.default.createElement("td",null,v.phone||"N/A"),te.default.createElement("td",{className:"actions content-right"},te.default.createElement("button",{className:"btn-edit",onClick:()=>c(v)},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),te.default.createElement("button",{className:"btn-delete",onClick:()=>m(v.id)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"))))))),r&&te.default.createElement("div",{className:"modal-overlay",onClick:g},te.default.createElement("div",{className:"modal-content",onClick:v=>v.stopPropagation()},te.default.createElement(Nu,{client:a,onSave:y,onCancel:g,isModal:!0}))))}var A=J(Q());(function(){if(!document.getElementById("b2621e4b4297e219f58b94b6e9677304c32a37f7c15d475d684fbd158706d5d7")){var e=document.createElement("style");e.id="b2621e4b4297e219f58b94b6e9677304c32a37f7c15d475d684fbd158706d5d7",e.textContent=`.company-container {
  padding: 24px;
  width: 800px;
}

.company-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.company-header h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
}

.btn-primary {
  background: var(--accent, #4a90e2);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-primary:hover {
  background: var(--accent-dark, #357abd);
}

.error-message {
  background: #ffebee;
  color: #d32f2f;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.success-message {
  background: #e8f5e9;
  color: #2e7d32;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.company-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.company-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.company-section h3 {
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 12px;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-item.full-width {
  grid-column: 1 / -1;
}

.detail-item label {
  font-size: 13px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-item span {
  font-size: 15px;
  color: #333;
}

.detail-item a {
  color: var(--accent, #4a90e2);
  text-decoration: none;
}

.detail-item a:hover {
  text-decoration: underline;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 700px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.company-form-modal h1 {
  margin-top: 0;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 16px;
}

.form-actions button {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.form-actions button[type="button"] {
  background: #f0f0f0;
  color: #333;
}

.form-actions button[type="button"]:hover {
  background: #e0e0e0;
}

.form-actions button[type="submit"] {
  background: var(--accent, #4a90e2);
  color: white;
}

.form-actions button[type="submit"]:hover {
  background: var(--accent-dark, #357abd);
}

/* /1* Responsive *1/ */
/* @media (max-width: 768px) { */
/*   .detail-grid { */
/*     grid-template-columns: 1fr; */
/*   } */

/*   .detail-item.full-width { */
/*     grid-column: 1; */
/*   } */
/* } */
`,document.head.appendChild(e)}})();function Pu({dashboardData:e,fetchData:t}){let[n,r]=(0,A.useState)(e?.company||null),[o,a]=(0,A.useState)(!1),[i,l]=(0,A.useState)(null),[s,u]=(0,A.useState)(null),[p,c]=(0,A.useState)(null),{id:m}=en(),y=He(),g=Ue(),v=()=>{a(!0),fetch(`/api/companies/${m}/dashboard`).then(d=>d.status===401?(y("/companies/welcome"),null):d.json()).then(d=>{d&&(c(d),r(d.company))}).catch(()=>{l("Failed to fetch dashboard data")})},w=d=>{r(d),a(!1),u("\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E"),setTimeout(()=>u(null),3e3)},f=()=>{a(!1)};return n?A.default.createElement("div",{className:"company-container"},A.default.createElement("div",{className:"company-header"},A.default.createElement("h2",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),A.default.createElement("button",{className:"btn",onClick:v},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438")),i&&A.default.createElement("div",{className:"error-message"},i),s&&A.default.createElement("div",{className:"success-message"},s),A.default.createElement("div",{className:"company-details"},A.default.createElement("section",{className:"company-section"},A.default.createElement("h3",null,"\u041E\u0441\u043D\u043E\u0432\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"),A.default.createElement("div",{className:"detail-grid"},A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u041D\u0430\u0437\u0432\u0430:"),A.default.createElement("span",null,n.name)),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"Email:"),A.default.createElement("span",null,n.email||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"),A.default.createElement("span",null,n.phone||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442:"),A.default.createElement("span",null,n.website?A.default.createElement("a",{href:n.website,target:"_blank",rel:"noopener noreferrer"},n.website):"N/A")),A.default.createElement("div",{className:"detail-item full-width"},A.default.createElement("label",null,"\u041E\u043F\u0438\u0441:"),A.default.createElement("span",null,n.description||"N/A")))),n.address&&A.default.createElement("section",{className:"company-section"},A.default.createElement("h3",null,"\u0410\u0434\u0440\u0435\u0441\u0430"),A.default.createElement("div",{className:"detail-grid"},A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u0412\u0443\u043B\u0438\u0446\u044F 1:"),A.default.createElement("span",null,n.address.street_line1||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u0412\u0443\u043B\u0438\u0446\u044F 2:"),A.default.createElement("span",null,n.address.street_line2||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u041C\u0456\u0441\u0442\u043E:"),A.default.createElement("span",null,n.address.city||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u041E\u0431\u043B\u0430\u0441\u0442\u044C:"),A.default.createElement("span",null,n.address.region||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u041F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441:"),A.default.createElement("span",null,n.address.postal||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u041A\u0440\u0430\u0457\u043D\u0430:"),A.default.createElement("span",null,n.address.country||"N/A"))))),o&&A.default.createElement("div",{className:"modal-overlay",onClick:f},A.default.createElement("div",{className:"modal-content",onClick:d=>d.stopPropagation()},A.default.createElement($o,{company:n,onSave:w,onCancel:f,isModal:!0})))):A.default.createElement("div",{className:"company-container"},A.default.createElement("div",{className:"empty-state"},A.default.createElement("p",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430")))}var B=J(Q());(function(){if(!document.getElementById("4d93968a12b2d84a3f7585eb54889004ed4d9d3560aca054de3fd8b237cd5f85")){var e=document.createElement("style");e.id="4d93968a12b2d84a3f7585eb54889004ed4d9d3560aca054de3fd8b237cd5f85",e.textContent=`.company-container {
  padding: 24px;
  width: 800px;
}

.company-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.company-header h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
}

.company-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.company-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.company-section.highlight-free {
  border-left: 4px solid #4caf50;
}

.company-section h3 {
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 12px;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-item.full-width {
  grid-column: 1 / -1;
}

.detail-item label {
  font-size: 11px; /* Slightly smaller to feel more technical/clean */
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-item span {
  font-size: 15px;
  color: #333;
  font-weight: 500;
}

.detail-item strong {
  color: var(--accent, #4a90e2);
}
`,document.head.appendChild(e)}})();function Lu({dashboardData:e}){return B.default.createElement("div",{className:"company-container"},B.default.createElement("div",{className:"company-header"},B.default.createElement("h2",null,"\u0422\u0430\u0440\u0438\u0444\u043D\u0438\u0439 \u043F\u043B\u0430\u043D")),B.default.createElement("div",{className:"company-details"},B.default.createElement("div",{className:"company-section highlight-free"},B.default.createElement("h3",null,"\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u0442\u0430\u0440\u0438\u0444"),B.default.createElement("div",{className:"detail-grid"},B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C"),B.default.createElement("span",null,"0 \u0433\u0440\u043D \u2014 \u041D\u0430\u0437\u0430\u0432\u0436\u0434\u0438")),B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0421\u0430\u0439\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"),B.default.createElement("span",null,"\u0417 \u0432\u0430\u0448\u0438\u043C \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u043E\u043C \u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0456\u044E \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F")),B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0421\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F"),B.default.createElement("span",null,"\u0411\u0430\u0437\u043E\u0432\u0456 \u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F \u0447\u0435\u0440\u0435\u0437 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443")),B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u041E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F"),B.default.createElement("span",null,"\u0414\u043E 2 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0456\u0432")),B.default.createElement("div",{className:"detail-item full-width"},B.default.createElement("label",null,"\u041E\u0431\u0441\u044F\u0433 \u0437\u0430\u043F\u0438\u0441\u0456\u0432"),B.default.createElement("span",null,"50 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u044C \u043D\u0430 \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u043C\u0430\u0439\u0441\u0442\u0440\u0430 \u0449\u043E\u043C\u0456\u0441\u044F\u0446\u044F")))),B.default.createElement("div",{className:"company-section"},B.default.createElement("h3",null,"\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0443\u0432\u0430\u043D\u043D\u044F"),B.default.createElement("div",{className:"detail-grid"},B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0426\u0456\u043D\u0430"),B.default.createElement("span",null,"$2.50 / \u043C\u0456\u0441\u044F\u0446\u044C (\u2248 99 \u0433\u0440\u043D)")),B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u041C\u043E\u0436\u043B\u0438\u0432\u043E\u0441\u0442\u0456"),B.default.createElement("span",null,"\u0411\u0435\u0437\u043B\u0456\u043C\u0456\u0442\u043D\u0456 \u0437\u0430\u043F\u0438\u0441\u0438 \u0442\u0430 \u0434\u043E 50 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0456\u0432")),B.default.createElement("div",{className:"detail-item full-width"},B.default.createElement("label",null,"\u0423\u043C\u043E\u0432\u0430"),B.default.createElement("span",null,"\u0412\u0438 \u043F\u043B\u0430\u0442\u0438\u0442\u0435 \u043B\u0438\u0448\u0435 \u0442\u043E\u0434\u0456, \u043A\u043E\u043B\u0438 \u0432\u0430\u0448 \u0431\u0456\u0437\u043D\u0435\u0441 \u0440\u0435\u0430\u043B\u044C\u043D\u043E \u0437\u0440\u043E\u0441\u0442\u0430\u0454")))),B.default.createElement("div",{className:"company-section"},B.default.createElement("h3",null,"\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u043C\u043E\u0434\u0443\u043B\u0456 \u0432 \u0440\u043E\u0437\u0440\u043E\u0431\u0446\u0456"),B.default.createElement("p",{style:{fontSize:"14px",color:"#666",marginBottom:"16px"}},"\u0410\u043A\u0442\u0438\u0432\u0443\u0439\u0442\u0435 \u043B\u0438\u0448\u0435 \u0442\u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0457, \u044F\u043A\u0456 \u0432\u0430\u043C \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456:"),B.default.createElement("div",{className:"detail-grid"},B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0421\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F"),B.default.createElement("span",null,"SMS \u0442\u0430 Telegram \u0434\u043B\u044F \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432")),B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0410\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0430"),B.default.createElement("span",null,"\u0415\u043A\u0441\u043F\u043E\u0440\u0442 \u0431\u0430\u0437\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432 \u0443 CSV")),B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0406\u043D\u0442\u0435\u043B\u0435\u043A\u0442"),B.default.createElement("span",null,"AI-\u0430\u0441\u0438\u0441\u0442\u0435\u043D\u0442 \u0434\u043B\u044F \u0437\u0430\u043F\u0438\u0441\u0456\u0432"))))))}(function(){if(!document.getElementById("6a6155881ee733b2fee22719c3362487d8f0b92f87b75b4e1bdd6886dcc8063c")){var e=document.createElement("style");e.id="6a6155881ee733b2fee22719c3362487d8f0b92f87b75b4e1bdd6886dcc8063c",e.textContent=`.dashboard {
  display: flex;
  min-height: 100vh;
  background: var(--bg-main);
}

.dashboard__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.dashboard__main {
  margin-top: 10px;
}
`,document.head.appendChild(e)}})();function er(){let[e,t]=(0,Re.useState)(),{id:n}=en(),r=He(),o=Ue();if((0,Re.useEffect)(()=>{e!==void 0&&(document.title=`\u0404 \u0432\u0456\u043A\u043E\u043D\u0446\u0435 \u2014 ${e?.company.name}`)},[e]),(0,Re.useEffect)(()=>{fetch(`/api/companies/${n}/dashboard`).then(i=>i.status===401?(r("/companies/welcome"),null):i.json()).then(i=>{i&&t(i)}).catch(()=>{r("/companies/welcome")})},[n,r]),e===void 0)return Re.default.createElement("p",null,"Loading...");let a=()=>{let i=o.pathname;return i.includes("/employees")?Re.default.createElement(Cu,{dashboardData:e}):i.includes("/clients")?Re.default.createElement(_u,{dashboardData:e}):i.includes("/edit")?Re.default.createElement(Pu,{dashboardData:e}):i.includes("/settings")?Re.default.createElement(Lu,{dashboardData:e}):Re.default.createElement(Eu,{employees:e.employees,companyId:n})};return Re.default.createElement("div",{className:"dashboard"},Re.default.createElement(wu,{companyName:e.company.name,id:n,evikonceUrl:e.company.evikonce_url}),Re.default.createElement("div",{className:"dashboard__content"},Re.default.createElement(xu,{userName:e.user.first_name}),Re.default.createElement("main",{className:"dashboard__main content-center"},a())))}var tr=J(Q());function Du(){return tr.default.createElement("div",{class:"container"},tr.default.createElement("p",{class:"t-a-center"},"\u0412\u0436\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442?"),tr.default.createElement(Ho,null),tr.default.createElement("div",{className:"t-a-center"},tr.default.createElement("p",null,"\u0429\u0435 \u043D\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443?"),tr.default.createElement(Gn,{to:"/companies/admins/new"},"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F")))}(function(){if(!document.getElementById("4be33d924d68f9738d162f2f6f9320fedbb0eccc00bfe3258cc9e5da3fda847b")){var e=document.createElement("style");e.id="4be33d924d68f9738d162f2f6f9320fedbb0eccc00bfe3258cc9e5da3fda847b",e.textContent="",document.head.appendChild(e)}})();function Tu(){return ue.default.createElement("div",null,ue.default.createElement(Mo,null,ue.default.createElement(ke,{path:"/",redirectTo:"welcome"}),ue.default.createElement(ke,{path:"welcome",element:ue.default.createElement(Du,null)}),ue.default.createElement(ke,{path:"new",element:ue.default.createElement($o,null)}),ue.default.createElement(ke,{path:"employees/new",element:ue.default.createElement(jr,{role:"employee"})}),ue.default.createElement(ke,{path:"admins/new",element:ue.default.createElement(jr,{role:"admin"})}),ue.default.createElement(ke,{path:"login",element:ue.default.createElement(Ho,null)}),ue.default.createElement(ke,{path:":id/dashboard",element:ue.default.createElement(er,null)}),ue.default.createElement(ke,{path:":id/employees",element:ue.default.createElement(er,null)}),ue.default.createElement(ke,{path:":id/clients",element:ue.default.createElement(er,null)}),ue.default.createElement(ke,{path:":id/edit",element:ue.default.createElement(er,null)}),ue.default.createElement(ke,{path:":id/settings",element:ue.default.createElement(er,null)}),ue.default.createElement(ke,{path:"*",element:ue.default.createElement(yu,null)})))}var _=J(Q());(function(){if(!document.getElementById("29801b744b15f53d7da10ff61f3e1caa467838a727ad6d331d9be5faacdc078b")){var e=document.createElement("style");e.id="29801b744b15f53d7da10ff61f3e1caa467838a727ad6d331d9be5faacdc078b",e.textContent=`/* ============================================
   WELCOME PAGE STYLES
   ============================================ */

.welcome-page {
  min-height: 100vh;
  background: #ffffff;
}

/* ============================================
   HERO SECTION
   ============================================ */

.hero-section {
  background: #fff;
  padding: 100px 20px 140px;
  color: grey;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: solid 1px #e4e4e4;
  border-radius: 10px;
}

/* .hero-section::before { */
/*   content: ""; */
/*   position: absolute; */
/*   top: 0; */
/*   left: 0; */
/*   right: 0; */
/*   bottom: 0; */
/*   background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
/*   opacity: 0.5; */
/*   pointer-events: none; */
/* } */

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.hero-content > p {
  font-size: 1.25rem;
  opacity: 0.95;
  margin-bottom: 3rem;
  font-weight: 400;
  line-height: 1.5;
}

/* ============================================
   SEARCH FORM
   ============================================ */

.search-form {
  position: relative;
  max-width: 900px;
  margin: 0 auto 2rem;
  /* CRITICAL: Don't use overflow: hidden here */
}

.search-inputs {
  display: flex;
  gap: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  /* CRITICAL: Remove overflow: hidden from here */
  transition: box-shadow 0.3s ease;
}

.search-inputs:focus-within {
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
}

.search-field {
  position: relative;
  flex: 1;
  border-right: 1px solid #e5e7eb;
  /* CRITICAL: Don't clip children */
  overflow: visible;
}

.search-field:last-of-type {
  border-right: none;
}

.search-field:first-child {
  flex: 1.5;
}

.search-input {
  width: 100%;
  padding: 18px 20px;
  border: none;
  font-size: 16px;
  color: #1f2937;
  background: transparent;
  outline: none;
  font-family: inherit;
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-select {
  width: 100%;
  padding: 18px 16px;
  border: none;
  font-size: 16px;
  color: #1f2937;
  background: transparent;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239ca3af' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
  font-family: inherit;
}

.search-button {
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: none;
}

.search-button:hover {
  background: #333;
}

.search-button svg {
  flex-shrink: 0;
}

/* ============================================
   CATEGORY MULTI-SELECT IN SEARCH
   ============================================ */

.category-search-container {
  position: relative;
  /* CRITICAL: Allow dropdown to overflow */
  overflow: visible;
}

.category-search-wrapper {
  position: relative;
  width: 100%;
  /* CRITICAL: Allow dropdown to overflow */
  overflow: visible;
}

.selected-categories-tags-mini {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 12px 4px;
}

.category-tag-mini {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: #667eea;
  color: white;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
}

.category-tag-remove {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: background 0.2s ease;
}

.category-tag-remove:hover {
  background: rgba(255, 255, 255, 0.2);
}

.category-search-input {
  width: 100%;
  padding: 18px 16px;
  font-size: 16px;
  border: none;
  background: transparent;
  outline: none;
  font-family: inherit;
  color: #1f2937;
}

.category-search-input::placeholder {
  color: #9ca3af;
}

.category-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  max-height: 300px;
  overflow-y: auto;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  z-index: 2000; /* CRITICAL: Very high z-index */
}

.category-dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.2s ease;
  border-bottom: 1px solid #f3f4f6;
  font-size: 14px;
  color: black;
}

.category-dropdown-item:last-child {
  border-bottom: none;
}

.category-dropdown-item:hover {
  background: #f9fafb;
}

.category-dropdown-item.selected {
  background: #eff6ff;
  color: #667eea;
  font-weight: 500;
}

.category-dropdown-item .checkmark {
  color: #667eea;
  font-weight: bold;
  font-size: 16px;
}

.category-dropdown-empty {
  padding: 20px 16px;
  text-align: center;
  color: #9ca3af;
  font-size: 14px;
}

/* ============================================
   SEARCH RESULTS DROPDOWN
   ============================================ */

.search-results-dropdown {
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 1000;
  max-height: 500px;
  overflow-y: auto;
}

.results-loading {
  padding: 40px 20px;
  text-align: center;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #e5e7eb;
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.results-empty {
  padding: 60px 20px;
  text-align: center;
  color: #6b7280;
}

.results-empty p {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
}

.results-empty span {
  font-size: 14px;
  color: #9ca3af;
}

.results-list {
  /* No extra padding needed */
}

.result-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 20px;
  cursor: pointer;
  transition: background 0.2s ease;
  border-bottom: 1px solid #f3f4f6;
}

.result-item:last-child {
  border-bottom: none;
}

.result-item:hover {
  background: #f9fafb;
}

.result-info {
  flex: 1;
  min-width: 0;
}

.result-info h4 {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 4px;
}

.result-category {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.result-location {
  font-size: 13px;
  color: #9ca3af;
}

.result-rating {
  font-size: 14px;
  font-weight: 600;
  color: #f59e0b;
  flex-shrink: 0;
}

/* ============================================
   QUICK LINKS
   ============================================ */

.quick-links-section {
  padding: 60px 20px;
  background: #f9fafb;
  text-align: center;
}

.quick-links-section h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
}

.quick-links {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 800px;
  margin: 0 auto;
}

.quick-link {
  padding: 10px 24px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 24px;
  color: #374151;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.quick-links-button:hover {
  background: #f6f6f6;
  transform: translateY(-2px);
}

.quick-links-button {
  background: #f5f5f5;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  color: #666;
  border: 1px solid #10b981;
}

/* ============================================
   CATEGORIES SECTION
   ============================================ */

.categories-section {
  padding: 80px 20px;
  background: white;
}

.categories-section h2 {
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 3rem;
}

.category-cards {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.category-card {
  background: white;
  padding: 40px 28px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #f3f4f6;
}

.category-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  border-color: #10b981;
}

.category-icon {
  font-size: 3.5rem;
  margin-bottom: 16px;
  line-height: 1;
}

.category-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
}

.category-card p {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
}

/* ============================================
   HOW IT WORKS SECTION
   ============================================ */

.how-it-works {
  padding: 80px 20px;
  background: #f9fafb;
  text-align: center;
}

.how-it-works h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 3rem;
}

.steps {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.step {
  text-align: center;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.step h3 {
  font-size: 1.375rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
}

.step p {
  font-size: 15px;
  color: #6b7280;
  line-height: 1.6;
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 20px 100px;
  }

  .hero-content h1 {
    font-size: 2.25rem;
  }

  .hero-content > p {
    font-size: 1.125rem;
  }

  .search-inputs {
    flex-direction: column;
  }

  .search-field {
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }

  .search-field:last-child {
    border-bottom: none;
  }

  .search-button {
    justify-content: center;
    padding: 18px 24px;
  }

  .selected-categories-tags-mini {
    gap: 4px;
    padding: 6px 10px 2px;
  }

  .category-tag-mini {
    font-size: 12px;
    padding: 3px 8px;
  }

  .category-dropdown {
    max-height: 250px;
  }

  .category-dropdown-item {
    padding: 8px 12px;
    font-size: 13px;
  }

  .category-cards {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 16px;
  }

  .category-card {
    padding: 28px 20px;
  }

  .category-icon {
    font-size: 2.75rem;
  }

  .category-card h3 {
    font-size: 1.125rem;
  }

  .quick-links-section h2,
  .categories-section h2,
  .how-it-works h2 {
    font-size: 1.875rem;
  }

  .steps {
    gap: 32px;
  }

  .result-item {
    padding: 12px 16px;
  }

  .result-info h4 {
    font-size: 15px;
  }

  .result-category {
    font-size: 13px;
  }

  .result-location {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 1.875rem;
  }

  .hero-content > p {
    font-size: 1rem;
  }

  .search-input,
  .search-select,
  .search-button {
    padding: 16px 18px;
    font-size: 15px;
  }

  .category-cards {
    grid-template-columns: 1fr 1fr;
  }

  .category-card {
    padding: 24px 16px;
  }

  .quick-links {
    gap: 8px;
  }

  .quick-link {
    padding: 8px 16px;
    font-size: 14px;
  }
}

/* ============================================
   UTILITIES & CONTAINER
   ============================================ */

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Scrollbar styling for dropdowns */
.category-dropdown::-webkit-scrollbar,
.search-results-dropdown::-webkit-scrollbar {
  width: 8px;
}

.category-dropdown::-webkit-scrollbar-track,
.search-results-dropdown::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 10px;
}

.category-dropdown::-webkit-scrollbar-thumb,
.search-results-dropdown::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 10px;
}

.category-dropdown::-webkit-scrollbar-thumb:hover,
.search-results-dropdown::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
/* ============================================
   REGISTER COMPANY CTA (below search)
   ============================================ */

.register-company-cta {
  margin-top: 2rem;
  text-align: center;
}

.register-company-text {
  font-size: 0.95rem;
  color: grey;
  margin-bottom: 1rem;
  font-weight: 400;
}

.register-company-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: grey;
  text-decoration: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.register-company-button:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.register-company-button svg {
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .register-company-cta {
    margin-top: 1.5rem;
  }

  .register-company-text {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }

  .register-company-button {
    padding: 12px 24px;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .register-company-button {
    padding: 10px 20px;
    font-size: 14px;
    gap: 6px;
  }

  .register-company-button svg {
    width: 16px;
    height: 16px;
  }
}
.hero-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
  margin-top: 10px;
}

.hero-logo img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  filter: drop-shadow(0 6px 20px rgba(90, 122, 42, 0.3));
}
.hero-logo-small img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  filter: drop-shadow(0 6px 20px rgba(90, 122, 42, 0.3));
}

.hero-logo-name {
  font-family: Georgia, 'Palatino Linotype', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #2d5016;
  letter-spacing: 1px;
}

.hero-logo-name-small {
  font-family: Georgia, 'Palatino Linotype', serif;
  font-size: 1rem;
  font-weight: 700;
  color: #2d5016;
  letter-spacing: 1px;
  margin-left: 10px;
}

.hero-logo-name span {
  font-size: 2.4rem;
  color: #5a7a2a;
}
.sidebar__logo {
  margin-top: 30px;
}

.sidebar__logo a {
  color: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s ease, opacity 0.2s ease;
}

.sidebar__logo a:hover {
  color: #5a7a2a;
  opacity: 0.85;
}

.sidebar__logo a::after {
  content: "\u2197";
  font-size: 0.55em;
  opacity: 0.5;
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform: translateY(-2px);
}

.sidebar__logo a:hover::after {
  opacity: 1;
  transform: translateY(-4px) translateX(2px);
}
`,document.head.appendChild(e)}})();function zu(){let e=He(),[t,n]=(0,_.useState)(""),[r,o]=(0,_.useState)(""),[a,i]=(0,_.useState)([]),[l,s]=(0,_.useState)([]),[u,p]=(0,_.useState)(!1),[c,m]=(0,_.useState)(!1),[y,g]=(0,_.useState)(""),[v,w]=(0,_.useState)(!1),f=(0,_.useRef)(null),d=ki.filter(P=>P.toLowerCase().includes(y.toLowerCase()));(0,_.useEffect)(()=>{document.title="\u0404 \u0432\u0456\u043A\u043E\u043D\u0446\u0435 \u2014 \u041B\u043E\u0433\u0456\u043D / \u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F"},[]),(0,_.useEffect)(()=>{let P=V=>{f.current&&!f.current.contains(V.target)&&m(!1),V.target.closest(".category-search-container")||w(!1)};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[]);let h=P=>{a.includes(P)||(i([...a,P]),g(""),w(!1))},k=P=>{i(a.filter(V=>V!==P))},b=async P=>{if(P&&P.preventDefault(),!(!t&&a.length===0&&!r)){p(!0),m(!0);try{let V=new URLSearchParams;t&&V.append("params[name]",t),r&&V.append("params[city]",r),a.forEach(G=>{V.append("params[categories][]",G)});let I=await fetch(`/api/companies?${V.toString()}`,{credentials:"include"});if(I.ok){let G=await I.json();s(Array.isArray(G)?G:[])}else s([])}catch(V){console.error("Search error:",V),s([])}finally{p(!1)}}},E=P=>{let V=P.evikonce_url;e(`/w/${V}`)},S=P=>{o(P),n(""),i([]),setTimeout(()=>{H({city:P})},0)},z=P=>{a.includes(P)||(i([P]),n(""),o(""),setTimeout(()=>{H({categories:[P]})},0))},H=async({city:P,categories:V})=>{p(!0),m(!0);try{let I=new URLSearchParams;P&&I.append("params[city]",P),V&&V.length>0&&V.forEach(re=>{I.append("params[categories][]",re)});let G=await fetch(`/api/companies?${I.toString()}`,{credentials:"include"});if(G.ok){let re=await G.json();s(Array.isArray(re)?re:[])}else s([])}catch(I){console.error("Search error:",I),s([])}finally{p(!1)}};return _.default.createElement("div",{className:"welcome-page"},_.default.createElement("section",{className:"hero-section"},_.default.createElement("div",{className:"hero-logo"},_.default.createElement("img",{src:"/images/evikonce-logo.png",alt:"\u0404 \u0412\u0456\u043A\u043E\u043D\u0446\u0435"}),_.default.createElement("div",{className:"hero-logo-name"},_.default.createElement("span",null,"\u0404")," \u0412\u0456\u043A\u043E\u043D\u0446\u0435")),_.default.createElement("div",{className:"hero-content"},_.default.createElement("h1",null,"\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438 \u0443 \u0432\u0430\u0448\u043E\u043C\u0443 \u043C\u0456\u0441\u0442\u0456"),_.default.createElement("p",null,"\u0421\u0430\u043B\u043E\u043D\u0438 \u043A\u0440\u0430\u0441\u0438, \u0421\u041F\u0410, \u0444\u0456\u0442\u043D\u0435\u0441, \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0430 \u0431\u0430\u0433\u0430\u0442\u043E \u0456\u043D\u0448\u043E\u0433\u043E"),_.default.createElement("form",{className:"search-form",onSubmit:b},_.default.createElement("div",{className:"search-inputs"},_.default.createElement("div",{className:"search-field"},_.default.createElement("input",{type:"text",placeholder:"\u041D\u0430\u0437\u0432\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0430\u0431\u043E \u043F\u043E\u0441\u043B\u0443\u0433\u0438",value:t,onChange:P=>n(P.target.value),className:"search-input"})),_.default.createElement("div",{className:"search-field category-search-container"},_.default.createElement("div",{className:"category-search-wrapper"},a.length>0&&_.default.createElement("div",{className:"selected-categories-tags-mini"},a.map(P=>_.default.createElement("span",{key:P,className:"category-tag-mini"},P,_.default.createElement("button",{type:"button",className:"category-tag-remove",onClick:V=>{V.stopPropagation(),k(P)},"aria-label":"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E"},"\u2715")))),_.default.createElement("input",{type:"text",className:"category-search-input",placeholder:a.length>0?"\u0414\u043E\u0434\u0430\u0442\u0438 \u0449\u0435...":"\u0428\u0443\u043A\u0430\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457...",value:y,onChange:P=>{g(P.target.value),w(!0)},onFocus:()=>w(!0)}),v&&y&&_.default.createElement("div",{className:"category-dropdown"},d.length>0?d.slice(0,50).map(P=>_.default.createElement("div",{key:P,className:`category-dropdown-item ${a.includes(P)?"selected":""}`,onClick:()=>h(P)},P,a.includes(P)&&_.default.createElement("span",{className:"checkmark"},"\u2713"))):_.default.createElement("div",{className:"category-dropdown-empty"},"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E")))),_.default.createElement("div",{className:"search-field"},_.default.createElement("select",{value:r,onChange:P=>o(P.target.value),className:"search-select"},_.default.createElement("option",{value:""},"\u0412\u0441\u0456 \u043C\u0456\u0441\u0442\u0430"),Si.map(P=>_.default.createElement("option",{key:P,value:P},P)))),_.default.createElement("button",{type:"submit",className:"search-button"},"\u0428\u0443\u043A\u0430\u0442\u0438")),c&&_.default.createElement("div",{className:"search-results-dropdown",ref:f},u?_.default.createElement("div",{className:"results-loading"},_.default.createElement("div",{className:"spinner"}),_.default.createElement("p",null,"\u041F\u043E\u0448\u0443\u043A...")):l.length>0?_.default.createElement("div",{className:"results-list"},l.map(P=>_.default.createElement("div",{key:P.id,className:"result-item",onClick:()=>E(P)},_.default.createElement("div",{className:"result-info"},_.default.createElement("h4",null,P.name),_.default.createElement("p",{className:"result-category"},P.categories?.[0]?.name||P.description?.substring(0,60)),_.default.createElement("p",{className:"result-location"},"\u{1F4CD} ",P.address?.city,P.address?.street_line1&&`, ${P.address.street_line1}`)),P.rating&&_.default.createElement("div",{className:"result-rating"},"\u2B50 ",P.rating)))):_.default.createElement("div",{className:"results-empty"},_.default.createElement("p",null,"\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"),_.default.createElement("span",null,"\u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u043A\u0440\u0438\u0442\u0435\u0440\u0456\u0457 \u043F\u043E\u0448\u0443\u043A\u0443")))),_.default.createElement("div",{className:"register-company-cta"},_.default.createElement("p",{className:"register-company-text"},"\u0412\u0438 \u0432\u043B\u0430\u0441\u043D\u0438\u043A \u0431\u0456\u0437\u043D\u0435\u0441\u0443?"),_.default.createElement(Gn,{to:"/companies/welcome",className:"register-company-button"},_.default.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_.default.createElement("path",{d:"M10 4v12M4 10h12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})),"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E")))),_.default.createElement("section",{className:"quick-links-section"},_.default.createElement("h2",null,"\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456 \u043C\u0456\u0441\u0442\u0430"),_.default.createElement("div",{className:"quick-links"},_.default.createElement("button",{className:"quick-links-button",onClick:()=>S("\u041A\u0438\u0457\u0432")},"\u041A\u0438\u0457\u0432"),_.default.createElement("button",{className:"quick-links-button",onClick:()=>S("\u041B\u044C\u0432\u0456\u0432")},"\u041B\u044C\u0432\u0456\u0432"),_.default.createElement("button",{className:"quick-links-button",onClick:()=>S("\u041E\u0434\u0435\u0441\u0430")},"\u041E\u0434\u0435\u0441\u0430"),_.default.createElement("button",{className:"quick-links-button",onClick:()=>S("\u0425\u0430\u0440\u043A\u0456\u0432")},"\u0425\u0430\u0440\u043A\u0456\u0432"),_.default.createElement("button",{className:"quick-links-button",onClick:()=>S("\u0414\u043D\u0456\u043F\u0440\u043E")},"\u0414\u043D\u0456\u043F\u0440\u043E"),_.default.createElement("button",{className:"quick-links-button",onClick:()=>S("\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F")},"\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F"))),_.default.createElement("section",{className:"categories-section"},_.default.createElement("h2",null,"\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"),_.default.createElement("div",{className:"category-cards"},_.default.createElement("div",{className:"category-card",onClick:()=>z("\u041F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u041F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F"),_.default.createElement("p",null,"\u0421\u0442\u0440\u0438\u0436\u043A\u0438, \u0443\u043A\u043B\u0430\u0434\u043A\u0438, \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u041C\u0430\u043D\u0456\u043A\u044E\u0440")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u041C\u0430\u043D\u0456\u043A\u044E\u0440"),_.default.createElement("p",null,"\u041C\u0430\u043D\u0456\u043A\u044E\u0440, \u043F\u0435\u0434\u0438\u043A\u044E\u0440, \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u0421\u041F\u0410")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u0421\u041F\u0410"),_.default.createElement("p",null,"\u041C\u0430\u0441\u0430\u0436, \u0440\u0435\u043B\u0430\u043A\u0441, \u0434\u043E\u0433\u043B\u044F\u0434")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u0424\u0456\u0442\u043D\u0435\u0441")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u0424\u0456\u0442\u043D\u0435\u0441"),_.default.createElement("p",null,"\u0422\u0440\u0435\u043D\u0430\u0436\u0435\u0440\u043D\u0430 \u0437\u0430\u043B\u0430, \u0439\u043E\u0433\u0430, \u043F\u0456\u043B\u0430\u0442\u0435\u0441")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F"),_.default.createElement("p",null,"\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F, \u043F\u0440\u043E\u0442\u0435\u0437\u0443\u0432\u0430\u043D\u043D\u044F, \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u041A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u041A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F"),_.default.createElement("p",null,"\u0427\u0438\u0441\u0442\u043A\u0430, \u043F\u0456\u043B\u0456\u043D\u0433, \u0456\u043D'\u0454\u043A\u0446\u0456\u0457 \u043A\u0440\u0430\u0441\u0438")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u041C\u0430\u0441\u0430\u0436")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u041C\u0430\u0441\u0430\u0436"),_.default.createElement("p",null,"\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439, \u0442\u0430\u0439\u0441\u044C\u043A\u0438\u0439, \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0438\u0439")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u0422\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u0422\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F"),_.default.createElement("p",null,"\u0422\u0430\u0442\u0443, \u043F\u0456\u0440\u0441\u0438\u043D\u0433, \u0445\u0443\u0434\u043E\u0436\u043D\u0454 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F")))))}var Tn=J(Q());var d0=()=>{let{deleteToken:e}=en(),[t,n]=(0,Tn.useState)("loading");return(0,Tn.useEffect)(()=>{fetch(`/api/time_slots/del/${e}`).then(r=>{r.ok?n("success"):n("error")}).catch(()=>n("error"))},[e]),t==="loading"?Tn.default.createElement("p",null,"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."):t==="success"?Tn.default.createElement("p",null,"\u0417\u0430\u043F\u0438\u0441 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u2713"):Tn.default.createElement("p",null,"\u041F\u043E\u043C\u0438\u043B\u043A\u0430. \u0417\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u043D\u0430\u043F\u0440\u044F\u043C\u0443 \u0434\u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0456\u0308 \u0449\u043E\u0431 \u0432\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441.")},dm=d0;var c0=()=>ot.default.createElement("h2",null,"404 Not Found");function cm(){return ot.default.createElement(pu,null,ot.default.createElement(Mo,null,ot.default.createElement(ke,{path:"/",element:ot.default.createElement(zu,null)}),ot.default.createElement(ke,{path:"/companies/*",element:ot.default.createElement(Tu,null)}),ot.default.createElement(ke,{path:"/w/:companyName",element:ot.default.createElement(gu,null)}),ot.default.createElement(ke,{path:"*",element:ot.default.createElement(c0,null)}),ot.default.createElement(ke,{path:"/ww/:deleteToken",element:ot.default.createElement(dm,null)})))}document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("App");e?(0,pm.createRoot)(e).render(fm.default.createElement(cm,null)):console.error('React root element "#App" not found in DOM.')});
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-QFMPRPBF.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.14.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
