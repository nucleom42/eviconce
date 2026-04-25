var Im=Object.create;var Ru=Object.defineProperty;var Am=Object.getOwnPropertyDescriptor;var jm=Object.getOwnPropertyNames;var $m=Object.getPrototypeOf,Um=Object.prototype.hasOwnProperty;var zn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Hm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of jm(t))!Um.call(e,o)&&o!==n&&Ru(e,o,{get:()=>t[o],enumerable:!(r=Am(t,o))||r.enumerable});return e};var J=(e,t,n)=>(n=e!=null?Im($m(e)):{},Hm(t||!e||!e.__esModule?Ru(n,"default",{value:e,enumerable:!0}):n,e));var Qu=zn(q=>{"use strict";var Ur=Symbol.for("react.element"),Bm=Symbol.for("react.portal"),Wm=Symbol.for("react.fragment"),Vm=Symbol.for("react.strict_mode"),Ym=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),Jm=Symbol.for("react.context"),Km=Symbol.for("react.forward_ref"),Gm=Symbol.for("react.suspense"),Xm=Symbol.for("react.memo"),Zm=Symbol.for("react.lazy"),Mu=Symbol.iterator;function qm(e){return e===null||typeof e!="object"?null:(e=Mu&&e[Mu]||e["@@iterator"],typeof e=="function"?e:null)}var ju={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$u=Object.assign,Uu={};function rr(e,t,n){this.props=e,this.context=t,this.refs=Uu,this.updater=n||ju}rr.prototype.isReactComponent={};rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hu(){}Hu.prototype=rr.prototype;function Di(e,t,n){this.props=e,this.context=t,this.refs=Uu,this.updater=n||ju}var Ti=Di.prototype=new Hu;Ti.constructor=Di;$u(Ti,rr.prototype);Ti.isPureReactComponent=!0;var Iu=Array.isArray,Bu=Object.prototype.hasOwnProperty,zi={current:null},Wu={key:!0,ref:!0,__self:!0,__source:!0};function Vu(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Bu.call(t,r)&&!Wu.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ur,type:e,key:a,ref:i,props:o,_owner:zi.current}}function eh(e,t){return{$$typeof:Ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur}function th(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Au=/\/+/g;function Li(e,t){return typeof e=="object"&&e!==null&&e.key!=null?th(""+e.key):t.toString(36)}function Jo(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ur:case Bm:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Li(i,0):r,Iu(o)?(n="",e!=null&&(n=e.replace(Au,"$&/")+"/"),Jo(o,t,n,"",function(u){return u})):o!=null&&(Oi(o)&&(o=eh(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Au,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Iu(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Li(a,l);i+=Jo(a,t,n,s,o)}else if(s=qm(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Li(a,l++),i+=Jo(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Qo(e,t,n){if(e==null)return e;var r=[],o=0;return Jo(e,r,"","",function(a){return t.call(n,a,o++)}),r}function nh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},Ko={transition:null},rh={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:zi};function Yu(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Qo,forEach:function(e,t,n){Qo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qo(e,function(){t++}),t},toArray:function(e){return Qo(e,function(t){return t})||[]},only:function(e){if(!Oi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=rr;q.Fragment=Wm;q.Profiler=Ym;q.PureComponent=Di;q.StrictMode=Vm;q.Suspense=Gm;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rh;q.act=Yu;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$u({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=zi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Bu.call(t,s)&&!Wu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ur,type:e.type,key:o,ref:a,props:r,_owner:i}};q.createContext=function(e){return e={$$typeof:Jm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qm,_context:e},e.Consumer=e};q.createElement=Vu;q.createFactory=function(e){var t=Vu.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:Km,render:e}};q.isValidElement=Oi;q.lazy=function(e){return{$$typeof:Zm,_payload:{_status:-1,_result:e},_init:nh}};q.memo=function(e,t){return{$$typeof:Xm,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Ko.transition;Ko.transition={};try{e()}finally{Ko.transition=t}};q.unstable_act=Yu;q.useCallback=function(e,t){return Be.current.useCallback(e,t)};q.useContext=function(e){return Be.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};q.useEffect=function(e,t){return Be.current.useEffect(e,t)};q.useId=function(){return Be.current.useId()};q.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Be.current.useMemo(e,t)};q.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};q.useRef=function(e){return Be.current.useRef(e)};q.useState=function(e){return Be.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return Be.current.useTransition()};q.version="18.3.1"});var Q=zn((Iy,Ju)=>{"use strict";Ju.exports=Qu()});var oc=zn(le=>{"use strict";function Ii(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Go(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Et(e){return e.length===0?null:e[0]}function Zo(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var i=2*(r+1)-1,l=e[i],s=i+1,u=e[s];if(0>Go(l,n))s<o&&0>Go(u,l)?(e[r]=u,e[s]=n,r=s):(e[r]=l,e[i]=n,r=i);else if(s<o&&0>Go(u,n))e[r]=u,e[s]=n,r=s;else break e}}return t}function Go(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Ku=performance,le.unstable_now=function(){return Ku.now()}):(Fi=Date,Gu=Fi.now(),le.unstable_now=function(){return Fi.now()-Gu});var Ku,Fi,Gu,Rt=[],on=[],oh=1,mt=null,Me=3,qo=!1,On=!1,Br=!1,qu=typeof setTimeout=="function"?setTimeout:null,ec=typeof clearTimeout=="function"?clearTimeout:null,Xu=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ai(e){for(var t=Et(on);t!==null;){if(t.callback===null)Zo(on);else if(t.startTime<=e)Zo(on),t.sortIndex=t.expirationTime,Ii(Rt,t);else break;t=Et(on)}}function ji(e){if(Br=!1,Ai(e),!On)if(Et(Rt)!==null)On=!0,Ui($i);else{var t=Et(on);t!==null&&Hi(ji,t.startTime-e)}}function $i(e,t){On=!1,Br&&(Br=!1,ec(Wr),Wr=-1),qo=!0;var n=Me;try{for(Ai(t),mt=Et(Rt);mt!==null&&(!(mt.expirationTime>t)||e&&!rc());){var r=mt.callback;if(typeof r=="function"){mt.callback=null,Me=mt.priorityLevel;var o=r(mt.expirationTime<=t);t=le.unstable_now(),typeof o=="function"?mt.callback=o:mt===Et(Rt)&&Zo(Rt),Ai(t)}else Zo(Rt);mt=Et(Rt)}if(mt!==null)var a=!0;else{var i=Et(on);i!==null&&Hi(ji,i.startTime-t),a=!1}return a}finally{mt=null,Me=n,qo=!1}}var ea=!1,Xo=null,Wr=-1,tc=5,nc=-1;function rc(){return!(le.unstable_now()-nc<tc)}function Ri(){if(Xo!==null){var e=le.unstable_now();nc=e;var t=!0;try{t=Xo(!0,e)}finally{t?Hr():(ea=!1,Xo=null)}}else ea=!1}var Hr;typeof Xu=="function"?Hr=function(){Xu(Ri)}:typeof MessageChannel<"u"?(Mi=new MessageChannel,Zu=Mi.port2,Mi.port1.onmessage=Ri,Hr=function(){Zu.postMessage(null)}):Hr=function(){qu(Ri,0)};var Mi,Zu;function Ui(e){Xo=e,ea||(ea=!0,Hr())}function Hi(e,t){Wr=qu(function(){e(le.unstable_now())},t)}le.unstable_IdlePriority=5;le.unstable_ImmediatePriority=1;le.unstable_LowPriority=4;le.unstable_NormalPriority=3;le.unstable_Profiling=null;le.unstable_UserBlockingPriority=2;le.unstable_cancelCallback=function(e){e.callback=null};le.unstable_continueExecution=function(){On||qo||(On=!0,Ui($i))};le.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tc=0<e?Math.floor(1e3/e):5};le.unstable_getCurrentPriorityLevel=function(){return Me};le.unstable_getFirstCallbackNode=function(){return Et(Rt)};le.unstable_next=function(e){switch(Me){case 1:case 2:case 3:var t=3;break;default:t=Me}var n=Me;Me=t;try{return e()}finally{Me=n}};le.unstable_pauseExecution=function(){};le.unstable_requestPaint=function(){};le.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Me;Me=e;try{return t()}finally{Me=n}};le.unstable_scheduleCallback=function(e,t,n){var r=le.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:oh++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Ii(on,e),Et(Rt)===null&&e===Et(on)&&(Br?(ec(Wr),Wr=-1):Br=!0,Hi(ji,n-r))):(e.sortIndex=o,Ii(Rt,e),On||qo||(On=!0,Ui($i))),e};le.unstable_shouldYield=rc;le.unstable_wrapCallback=function(e){var t=Me;return function(){var n=Me;Me=t;try{return e.apply(this,arguments)}finally{Me=n}}}});var ic=zn((jy,ac)=>{"use strict";ac.exports=oc()});var dp=zn(ct=>{"use strict";var ah=Q(),st=ic();function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pd=new Set,po={};function Yn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(po[e]=t,e=0;e<t.length;e++)pd.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dl=Object.prototype.hasOwnProperty,ih=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc={},sc={};function lh(e){return dl.call(sc,e)?!0:dl.call(lc,e)?!1:ih.test(e)?sc[e]=!0:(lc[e]=!0,!1)}function sh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uh(e,t,n,r){if(t===null||typeof t>"u"||sh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var rs=/[\-:]([a-z])/g;function os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rs,os);Fe[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rs,os);Fe[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rs,os);Fe[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function as(e,t,n,r){var o=Fe.hasOwnProperty(t)?Fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uh(t,n,o,r)&&(n=null),r||o===null?lh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qt=ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),ir=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),is=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),md=Symbol.for("react.provider"),hd=Symbol.for("react.context"),ls=Symbol.for("react.forward_ref"),pl=Symbol.for("react.suspense"),ml=Symbol.for("react.suspense_list"),ss=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),gd=Symbol.for("react.offscreen"),uc=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=uc&&e[uc]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Bi;function qr(e){if(Bi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bi=t&&t[1]||""}return`
`+Bi+e}var Wi=!1;function Vi(e,t){if(!e||Wi)return"";Wi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==a[l]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{Wi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qr(e):""}function ch(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=Vi(e.type,!1),e;case 11:return e=Vi(e.type.render,!1),e;case 1:return e=Vi(e.type,!0),e;default:return""}}function hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case ir:return"Portal";case fl:return"Profiler";case is:return"StrictMode";case pl:return"Suspense";case ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hd:return(e.displayName||"Context")+".Consumer";case md:return(e._context.displayName||"Context")+".Provider";case ls:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ss:return t=e.displayName||null,t!==null?t:hl(e.type)||"Memo";case ln:t=e._payload,e=e._init;try{return hl(e(t))}catch{}}return null}function dh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hl(t);case 8:return t===is?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fh(e){var t=vd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function na(e){e._valueTracker||(e._valueTracker=fh(e))}function yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Da(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gl(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wd(e,t){t=t.checked,t!=null&&as(e,"checked",t,!1)}function vl(e,t){wd(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&yl(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yl(e,t,n){(t!=="number"||Da(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var eo=Array.isArray;function yr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(eo(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function xd(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ra,kd=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ra=ra||document.createElement("div"),ra.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ra.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ph=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){ph.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ro[t]=ro[e]})});function Sd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ro.hasOwnProperty(e)&&ro[e]?(""+t).trim():t+"px"}function Ed(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Sd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var mh=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bl(e,t){if(t){if(mh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sl=null;function us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var El=null,wr=null,xr=null;function mc(e){if(e=zo(e)){if(typeof El!="function")throw Error(T(280));var t=e.stateNode;t&&(t=oi(t),El(e.stateNode,e.type,t))}}function Cd(e){wr?xr?xr.push(e):xr=[e]:wr=e}function Nd(){if(wr){var e=wr,t=xr;if(xr=wr=null,mc(e),t)for(e=0;e<t.length;e++)mc(t[e])}}function _d(e,t){return e(t)}function Pd(){}var Yi=!1;function Ld(e,t,n){if(Yi)return e(t,n);Yi=!0;try{return _d(e,t,n)}finally{Yi=!1,(wr!==null||xr!==null)&&(Pd(),Nd())}}function ho(e,t){var n=e.stateNode;if(n===null)return null;var r=oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Cl=!1;if(Kt)try{or={},Object.defineProperty(or,"passive",{get:function(){Cl=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{Cl=!1}var or;function hh(e,t,n,r,o,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var oo=!1,Ta=null,za=!1,Nl=null,gh={onError:function(e){oo=!0,Ta=e}};function vh(e,t,n,r,o,a,i,l,s){oo=!1,Ta=null,hh.apply(gh,arguments)}function yh(e,t,n,r,o,a,i,l,s){if(vh.apply(this,arguments),oo){if(oo){var u=Ta;oo=!1,Ta=null}else throw Error(T(198));za||(za=!0,Nl=u)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hc(e){if(Qn(e)!==e)throw Error(T(188))}function wh(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return hc(o),e;if(a===r)return hc(o),t;a=a.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Td(e){return e=wh(e),e!==null?zd(e):null}function zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zd(e);if(t!==null)return t;e=e.sibling}return null}var Od=st.unstable_scheduleCallback,gc=st.unstable_cancelCallback,xh=st.unstable_shouldYield,bh=st.unstable_requestPaint,be=st.unstable_now,kh=st.unstable_getCurrentPriorityLevel,cs=st.unstable_ImmediatePriority,Fd=st.unstable_UserBlockingPriority,Oa=st.unstable_NormalPriority,Sh=st.unstable_LowPriority,Rd=st.unstable_IdlePriority,ei=null,jt=null;function Eh(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:_h,Ch=Math.log,Nh=Math.LN2;function _h(e){return e>>>=0,e===0?32:31-(Ch(e)/Nh|0)|0}var oa=64,aa=4194304;function to(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=to(l):(a&=i,a!==0&&(r=to(a)))}else i=n&~o,i!==0?r=to(i):a!==0&&(r=to(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lt(t),o=1<<n,r|=e[n],t&=~o;return r}function Ph(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Lt(a),l=1<<i,s=o[i];s===-1?((l&n)===0||(l&r)!==0)&&(o[i]=Ph(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Md(){var e=oa;return oa<<=1,(oa&4194240)===0&&(oa=64),e}function Qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Do(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function Dh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Lt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function ds(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ie=0;function Id(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ad,fs,jd,$d,Ud,Pl=!1,ia=[],pn=null,mn=null,hn=null,go=new Map,vo=new Map,un=[],Th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vc(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(t.pointerId)}}function Yr(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=zo(t),t!==null&&fs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function zh(e,t,n,r,o){switch(t){case"focusin":return pn=Yr(pn,e,t,n,r,o),!0;case"dragenter":return mn=Yr(mn,e,t,n,r,o),!0;case"mouseover":return hn=Yr(hn,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return go.set(a,Yr(go.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,vo.set(a,Yr(vo.get(a)||null,e,t,n,r,o)),!0}return!1}function Hd(e){var t=Mn(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=Dd(n),t!==null){e.blockedOn=t,Ud(e.priority,function(){jd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sl=r,n.target.dispatchEvent(r),Sl=null}else return t=zo(n),t!==null&&fs(t),e.blockedOn=n,!1;t.shift()}return!0}function yc(e,t,n){xa(e)&&n.delete(t)}function Oh(){Pl=!1,pn!==null&&xa(pn)&&(pn=null),mn!==null&&xa(mn)&&(mn=null),hn!==null&&xa(hn)&&(hn=null),go.forEach(yc),vo.forEach(yc)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,Pl||(Pl=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,Oh)))}function yo(e){function t(o){return Qr(o,e)}if(0<ia.length){Qr(ia[0],e);for(var n=1;n<ia.length;n++){var r=ia[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&Qr(pn,e),mn!==null&&Qr(mn,e),hn!==null&&Qr(hn,e),go.forEach(t),vo.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Hd(n),n.blockedOn===null&&un.shift()}var br=qt.ReactCurrentBatchConfig,Ra=!0;function Fh(e,t,n,r){var o=ie,a=br.transition;br.transition=null;try{ie=1,ps(e,t,n,r)}finally{ie=o,br.transition=a}}function Rh(e,t,n,r){var o=ie,a=br.transition;br.transition=null;try{ie=4,ps(e,t,n,r)}finally{ie=o,br.transition=a}}function ps(e,t,n,r){if(Ra){var o=Ll(e,t,n,r);if(o===null)el(e,t,r,Ma,n),vc(e,r);else if(zh(o,e,t,n,r))r.stopPropagation();else if(vc(e,r),t&4&&-1<Th.indexOf(e)){for(;o!==null;){var a=zo(o);if(a!==null&&Ad(a),a=Ll(e,t,n,r),a===null&&el(e,t,r,Ma,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else el(e,t,r,null,n)}}var Ma=null;function Ll(e,t,n,r){if(Ma=null,e=us(r),e=Mn(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ma=e,null}function Bd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kh()){case cs:return 1;case Fd:return 4;case Oa:case Sh:return 16;case Rd:return 536870912;default:return 16}default:return 16}}var dn=null,ms=null,ba=null;function Wd(){if(ba)return ba;var e,t=ms,n=t.length,r,o="value"in dn?dn.value:dn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return ba=o.slice(e,1<r?1-r:void 0)}function ka(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function la(){return!0}function wc(){return!1}function ut(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?la:wc,this.isPropagationStopped=wc,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hs=ut(Tr),To=ve({},Tr,{view:0,detail:0}),Mh=ut(To),Ji,Ki,Jr,ti=ve({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Ji=e.screenX-Jr.screenX,Ki=e.screenY-Jr.screenY):Ki=Ji=0,Jr=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:Ki}}),xc=ut(ti),Ih=ve({},ti,{dataTransfer:0}),Ah=ut(Ih),jh=ve({},To,{relatedTarget:0}),Gi=ut(jh),$h=ve({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Uh=ut($h),Hh=ve({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bh=ut(Hh),Wh=ve({},Tr,{data:0}),bc=ut(Wh),Vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qh[e])?!!t[e]:!1}function gs(){return Jh}var Kh=ve({},To,{key:function(e){if(e.key){var t=Vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ka(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gs,charCode:function(e){return e.type==="keypress"?ka(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ka(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gh=ut(Kh),Xh=ve({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kc=ut(Xh),Zh=ve({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gs}),qh=ut(Zh),eg=ve({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tg=ut(eg),ng=ve({},ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=ut(ng),og=[9,13,27,32],vs=Kt&&"CompositionEvent"in window,ao=null;Kt&&"documentMode"in document&&(ao=document.documentMode);var ag=Kt&&"TextEvent"in window&&!ao,Vd=Kt&&(!vs||ao&&8<ao&&11>=ao),Sc=" ",Ec=!1;function Yd(e,t){switch(e){case"keyup":return og.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function ig(e,t){switch(e){case"compositionend":return Qd(t);case"keypress":return t.which!==32?null:(Ec=!0,Sc);case"textInput":return e=t.data,e===Sc&&Ec?null:e;default:return null}}function lg(e,t){if(sr)return e==="compositionend"||!vs&&Yd(e,t)?(e=Wd(),ba=ms=dn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vd&&t.locale!=="ko"?null:t.data;default:return null}}var sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sg[e.type]:t==="textarea"}function Jd(e,t,n,r){Cd(r),t=Ia(t,"onChange"),0<t.length&&(n=new hs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var io=null,wo=null;function ug(e){af(e,0)}function ni(e){var t=dr(e);if(yd(t))return e}function cg(e,t){if(e==="change")return t}var Kd=!1;Kt&&(Kt?(ua="oninput"in document,ua||(Xi=document.createElement("div"),Xi.setAttribute("oninput","return;"),ua=typeof Xi.oninput=="function"),sa=ua):sa=!1,Kd=sa&&(!document.documentMode||9<document.documentMode));var sa,ua,Xi;function Nc(){io&&(io.detachEvent("onpropertychange",Gd),wo=io=null)}function Gd(e){if(e.propertyName==="value"&&ni(wo)){var t=[];Jd(t,wo,e,us(e)),Ld(ug,t)}}function dg(e,t,n){e==="focusin"?(Nc(),io=t,wo=n,io.attachEvent("onpropertychange",Gd)):e==="focusout"&&Nc()}function fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ni(wo)}function pg(e,t){if(e==="click")return ni(t)}function mg(e,t){if(e==="input"||e==="change")return ni(t)}function hg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:hg;function xo(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!dl.call(t,o)||!Tt(e[o],t[o]))return!1}return!0}function _c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,t){var n=_c(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_c(n)}}function Xd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zd(){for(var e=window,t=Da();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Da(e.document)}return t}function ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gg(e){var t=Zd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xd(n.ownerDocument.documentElement,n)){if(r!==null&&ys(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Pc(n,a);var i=Pc(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vg=Kt&&"documentMode"in document&&11>=document.documentMode,ur=null,Dl=null,lo=null,Tl=!1;function Lc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tl||ur==null||ur!==Da(r)||(r=ur,"selectionStart"in r&&ys(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&xo(lo,r)||(lo=r,r=Ia(Dl,"onSelect"),0<r.length&&(t=new hs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},Zi={},qd={};Kt&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function ri(e){if(Zi[e])return Zi[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qd)return Zi[e]=t[n];return e}var ef=ri("animationend"),tf=ri("animationiteration"),nf=ri("animationstart"),rf=ri("transitionend"),of=new Map,Dc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){of.set(e,t),Yn(t,[e])}for(da=0;da<Dc.length;da++)fa=Dc[da],Tc=fa.toLowerCase(),zc=fa[0].toUpperCase()+fa.slice(1),Sn(Tc,"on"+zc);var fa,Tc,zc,da;Sn(ef,"onAnimationEnd");Sn(tf,"onAnimationIteration");Sn(nf,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(rf,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function Oc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yh(r,t,void 0,e),e.currentTarget=null}function af(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Oc(o,l,u),a=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Oc(o,l,u),a=s}}}if(za)throw e=Nl,za=!1,Nl=null,e}function ce(e,t){var n=t[Ml];n===void 0&&(n=t[Ml]=new Set);var r=e+"__bubble";n.has(r)||(lf(t,e,2,!1),n.add(r))}function qi(e,t,n){var r=0;t&&(r|=4),lf(n,e,r,t)}var pa="_reactListening"+Math.random().toString(36).slice(2);function bo(e){if(!e[pa]){e[pa]=!0,pd.forEach(function(n){n!=="selectionchange"&&(yg.has(n)||qi(n,!1,e),qi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pa]||(t[pa]=!0,qi("selectionchange",!1,t))}}function lf(e,t,n,r){switch(Bd(t)){case 1:var o=Fh;break;case 4:o=Rh;break;default:o=ps}n=o.bind(null,t,n,e),o=void 0,!Cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function el(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;l!==null;){if(i=Mn(l),i===null)return;if(s=i.tag,s===5||s===6){r=a=i;continue e}l=l.parentNode}}r=r.return}Ld(function(){var u=a,p=us(n),d=[];e:{var m=of.get(e);if(m!==void 0){var y=hs,g=e;switch(e){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":y=Gh;break;case"focusin":g="focus",y=Gi;break;case"focusout":g="blur",y=Gi;break;case"beforeblur":case"afterblur":y=Gi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=qh;break;case ef:case tf:case nf:y=Uh;break;case rf:y=tg;break;case"scroll":y=Mh;break;case"wheel":y=rg;break;case"copy":case"cut":case"paste":y=Bh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=kc}var v=(t&4)!==0,w=!v&&e==="scroll",f=v?m!==null?m+"Capture":null:m;v=[];for(var c=u,h;c!==null;){h=c;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,f!==null&&(k=ho(c,f),k!=null&&v.push(ko(c,k,h)))),w)break;c=c.return}0<v.length&&(m=new y(m,g,null,n,p),d.push({event:m,listeners:v}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Sl&&(g=n.relatedTarget||n.fromElement)&&(Mn(g)||g[Gt]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?Mn(g):null,g!==null&&(w=Qn(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(v=xc,k="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=kc,k="onPointerLeave",f="onPointerEnter",c="pointer"),w=y==null?m:dr(y),h=g==null?m:dr(g),m=new v(k,c+"leave",y,n,p),m.target=w,m.relatedTarget=h,k=null,Mn(p)===u&&(v=new v(f,c+"enter",g,n,p),v.target=h,v.relatedTarget=w,k=v),w=k,y&&g)t:{for(v=y,f=g,c=0,h=v;h;h=ar(h))c++;for(h=0,k=f;k;k=ar(k))h++;for(;0<c-h;)v=ar(v),c--;for(;0<h-c;)f=ar(f),h--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=ar(v),f=ar(f)}v=null}else v=null;y!==null&&Fc(d,m,y,v,!1),g!==null&&w!==null&&Fc(d,w,g,v,!0)}}e:{if(m=u?dr(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var b=cg;else if(Cc(m))if(Kd)b=mg;else{b=fg;var E=dg}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=pg);if(b&&(b=b(e,u))){Jd(d,b,n,p);break e}E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&yl(m,"number",m.value)}switch(E=u?dr(u):window,e){case"focusin":(Cc(E)||E.contentEditable==="true")&&(ur=E,Dl=u,lo=null);break;case"focusout":lo=Dl=ur=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,Lc(d,n,p);break;case"selectionchange":if(vg)break;case"keydown":case"keyup":Lc(d,n,p)}var S;if(vs)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else sr?Yd(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Vd&&n.locale!=="ko"&&(sr||z!=="onCompositionStart"?z==="onCompositionEnd"&&sr&&(S=Wd()):(dn=p,ms="value"in dn?dn.value:dn.textContent,sr=!0)),E=Ia(u,z),0<E.length&&(z=new bc(z,e,null,n,p),d.push({event:z,listeners:E}),S?z.data=S:(S=Qd(n),S!==null&&(z.data=S)))),(S=ag?ig(e,n):lg(e,n))&&(u=Ia(u,"onBeforeInput"),0<u.length&&(p=new bc("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:u}),p.data=S))}af(d,t)})}function ko(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ia(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=ho(e,n),a!=null&&r.unshift(ko(e,a,o)),a=ho(e,t),a!=null&&r.push(ko(e,a,o))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fc(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=ho(n,a),s!=null&&i.unshift(ko(n,s,l))):o||(s=ho(n,a),s!=null&&i.push(ko(n,s,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var wg=/\r\n?/g,xg=/\u0000|\uFFFD/g;function Rc(e){return(typeof e=="string"?e:""+e).replace(wg,`
`).replace(xg,"")}function ma(e,t,n){if(t=Rc(t),Rc(e)!==t&&n)throw Error(T(425))}function Aa(){}var zl=null,Ol=null;function Fl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,Mc=typeof Promise=="function"?Promise:void 0,kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Mc<"u"?function(e){return Mc.resolve(null).then(e).catch(Sg)}:Rl;function Sg(e){setTimeout(function(){throw e})}function tl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),yo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);yo(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),At="__reactFiber$"+zr,So="__reactProps$"+zr,Gt="__reactContainer$"+zr,Ml="__reactEvents$"+zr,Eg="__reactListeners$"+zr,Cg="__reactHandles$"+zr;function Mn(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ic(e);e!==null;){if(n=e[At])return n;e=Ic(e)}return t}e=n,n=e.parentNode}return null}function zo(e){return e=e[At]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function oi(e){return e[So]||null}var Il=[],fr=-1;function En(e){return{current:e}}function de(e){0>fr||(e.current=Il[fr],Il[fr]=null,fr--)}function se(e,t){fr++,Il[fr]=e.current,e.current=t}var kn={},$e=En(kn),qe=En(!1),Un=kn;function Cr(e,t){var n=e.type.contextTypes;if(!n)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function et(e){return e=e.childContextTypes,e!=null}function ja(){de(qe),de($e)}function Ac(e,t,n){if($e.current!==kn)throw Error(T(168));se($e,t),se(qe,n)}function sf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,dh(e)||"Unknown",o));return ve({},n,r)}function $a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Un=$e.current,se($e,e),se(qe,qe.current),!0}function jc(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=sf(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,de(qe),de($e),se($e,e)):de(qe),se(qe,n)}var Vt=null,ai=!1,nl=!1;function uf(e){Vt===null?Vt=[e]:Vt.push(e)}function Ng(e){ai=!0,uf(e)}function Cn(){if(!nl&&Vt!==null){nl=!0;var e=0,t=ie;try{var n=Vt;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,ai=!1}catch(o){throw Vt!==null&&(Vt=Vt.slice(e+1)),Od(cs,Cn),o}finally{ie=t,nl=!1}}return null}var pr=[],mr=0,Ua=null,Ha=0,ht=[],gt=0,Hn=null,Yt=1,Qt="";function Fn(e,t){pr[mr++]=Ha,pr[mr++]=Ua,Ua=e,Ha=t}function cf(e,t,n){ht[gt++]=Yt,ht[gt++]=Qt,ht[gt++]=Hn,Hn=e;var r=Yt;e=Qt;var o=32-Lt(r)-1;r&=~(1<<o),n+=1;var a=32-Lt(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Yt=1<<32-Lt(t)+o|n<<o|r,Qt=a+e}else Yt=1<<a|n<<o|r,Qt=e}function ws(e){e.return!==null&&(Fn(e,1),cf(e,1,0))}function xs(e){for(;e===Ua;)Ua=pr[--mr],pr[mr]=null,Ha=pr[--mr],pr[mr]=null;for(;e===Hn;)Hn=ht[--gt],ht[gt]=null,Qt=ht[--gt],ht[gt]=null,Yt=ht[--gt],ht[gt]=null}var lt=null,it=null,pe=!1,Pt=null;function df(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $c(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lt=e,it=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lt=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hn!==null?{id:Yt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lt=e,it=null,!0):!1;default:return!1}}function Al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(pe){var t=it;if(t){var n=t;if(!$c(e,t)){if(Al(e))throw Error(T(418));t=gn(n.nextSibling);var r=lt;t&&$c(e,t)?df(r,n):(e.flags=e.flags&-4097|2,pe=!1,lt=e)}}else{if(Al(e))throw Error(T(418));e.flags=e.flags&-4097|2,pe=!1,lt=e}}}function Uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function ha(e){if(e!==lt)return!1;if(!pe)return Uc(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fl(e.type,e.memoizedProps)),t&&(t=it)){if(Al(e))throw ff(),Error(T(418));for(;t;)df(e,t),t=gn(t.nextSibling)}if(Uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=lt?gn(e.stateNode.nextSibling):null;return!0}function ff(){for(var e=it;e;)e=gn(e.nextSibling)}function Nr(){it=lt=null,pe=!1}function bs(e){Pt===null?Pt=[e]:Pt.push(e)}var _g=qt.ReactCurrentBatchConfig;function Kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var l=o.refs;i===null?delete l[a]:l[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function ga(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hc(e){var t=e._init;return t(e._payload)}function pf(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=xn(f,c),f.index=0,f.sibling=null,f}function a(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,c,h,k){return c===null||c.tag!==6?(c=ul(h,f.mode,k),c.return=f,c):(c=o(c,h),c.return=f,c)}function s(f,c,h,k){var b=h.type;return b===lr?p(f,c,h.props.children,k,h.key):c!==null&&(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ln&&Hc(b)===c.type)?(k=o(c,h.props),k.ref=Kr(f,c,h),k.return=f,k):(k=La(h.type,h.key,h.props,null,f.mode,k),k.ref=Kr(f,c,h),k.return=f,k)}function u(f,c,h,k){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=cl(h,f.mode,k),c.return=f,c):(c=o(c,h.children||[]),c.return=f,c)}function p(f,c,h,k,b){return c===null||c.tag!==7?(c=$n(h,f.mode,k,b),c.return=f,c):(c=o(c,h),c.return=f,c)}function d(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ul(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ta:return h=La(c.type,c.key,c.props,null,f.mode,h),h.ref=Kr(f,null,c),h.return=f,h;case ir:return c=cl(c,f.mode,h),c.return=f,c;case ln:var k=c._init;return d(f,k(c._payload),h)}if(eo(c)||Vr(c))return c=$n(c,f.mode,h,null),c.return=f,c;ga(f,c)}return null}function m(f,c,h,k){var b=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:l(f,c,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ta:return h.key===b?s(f,c,h,k):null;case ir:return h.key===b?u(f,c,h,k):null;case ln:return b=h._init,m(f,c,b(h._payload),k)}if(eo(h)||Vr(h))return b!==null?null:p(f,c,h,k,null);ga(f,h)}return null}function y(f,c,h,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(h)||null,l(c,f,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ta:return f=f.get(k.key===null?h:k.key)||null,s(c,f,k,b);case ir:return f=f.get(k.key===null?h:k.key)||null,u(c,f,k,b);case ln:var E=k._init;return y(f,c,h,E(k._payload),b)}if(eo(k)||Vr(k))return f=f.get(h)||null,p(c,f,k,b,null);ga(c,k)}return null}function g(f,c,h,k){for(var b=null,E=null,S=c,z=c=0,H=null;S!==null&&z<h.length;z++){S.index>z?(H=S,S=null):H=S.sibling;var P=m(f,S,h[z],k);if(P===null){S===null&&(S=H);break}e&&S&&P.alternate===null&&t(f,S),c=a(P,c,z),E===null?b=P:E.sibling=P,E=P,S=H}if(z===h.length)return n(f,S),pe&&Fn(f,z),b;if(S===null){for(;z<h.length;z++)S=d(f,h[z],k),S!==null&&(c=a(S,c,z),E===null?b=S:E.sibling=S,E=S);return pe&&Fn(f,z),b}for(S=r(f,S);z<h.length;z++)H=y(S,f,z,h[z],k),H!==null&&(e&&H.alternate!==null&&S.delete(H.key===null?z:H.key),c=a(H,c,z),E===null?b=H:E.sibling=H,E=H);return e&&S.forEach(function(V){return t(f,V)}),pe&&Fn(f,z),b}function v(f,c,h,k){var b=Vr(h);if(typeof b!="function")throw Error(T(150));if(h=b.call(h),h==null)throw Error(T(151));for(var E=b=null,S=c,z=c=0,H=null,P=h.next();S!==null&&!P.done;z++,P=h.next()){S.index>z?(H=S,S=null):H=S.sibling;var V=m(f,S,P.value,k);if(V===null){S===null&&(S=H);break}e&&S&&V.alternate===null&&t(f,S),c=a(V,c,z),E===null?b=V:E.sibling=V,E=V,S=H}if(P.done)return n(f,S),pe&&Fn(f,z),b;if(S===null){for(;!P.done;z++,P=h.next())P=d(f,P.value,k),P!==null&&(c=a(P,c,z),E===null?b=P:E.sibling=P,E=P);return pe&&Fn(f,z),b}for(S=r(f,S);!P.done;z++,P=h.next())P=y(S,f,z,P.value,k),P!==null&&(e&&P.alternate!==null&&S.delete(P.key===null?z:P.key),c=a(P,c,z),E===null?b=P:E.sibling=P,E=P);return e&&S.forEach(function(I){return t(f,I)}),pe&&Fn(f,z),b}function w(f,c,h,k){if(typeof h=="object"&&h!==null&&h.type===lr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ta:e:{for(var b=h.key,E=c;E!==null;){if(E.key===b){if(b=h.type,b===lr){if(E.tag===7){n(f,E.sibling),c=o(E,h.props.children),c.return=f,f=c;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ln&&Hc(b)===E.type){n(f,E.sibling),c=o(E,h.props),c.ref=Kr(f,E,h),c.return=f,f=c;break e}n(f,E);break}else t(f,E);E=E.sibling}h.type===lr?(c=$n(h.props.children,f.mode,k,h.key),c.return=f,f=c):(k=La(h.type,h.key,h.props,null,f.mode,k),k.ref=Kr(f,c,h),k.return=f,f=k)}return i(f);case ir:e:{for(E=h.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=o(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=cl(h,f.mode,k),c.return=f,f=c}return i(f);case ln:return E=h._init,w(f,c,E(h._payload),k)}if(eo(h))return g(f,c,h,k);if(Vr(h))return v(f,c,h,k);ga(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,h),c.return=f,f=c):(n(f,c),c=ul(h,f.mode,k),c.return=f,f=c),i(f)):n(f,c)}return w}var _r=pf(!0),mf=pf(!1),Ba=En(null),Wa=null,hr=null,ks=null;function Ss(){ks=hr=Wa=null}function Es(e){var t=Ba.current;de(Ba),e._currentValue=t}function $l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kr(e,t){Wa=e,ks=hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ze=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(ks!==e)if(e={context:e,memoizedValue:t,next:null},hr===null){if(Wa===null)throw Error(T(308));hr=e,Wa.dependencies={lanes:0,firstContext:e}}else hr=hr.next=e;return t}var In=null;function Cs(e){In===null?In=[e]:In.push(e)}function hf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Cs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ae&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Xt(e,n)}return o=r.interleaved,o===null?(t.next=t,Cs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Xt(e,n)}function Sa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}function Bc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Va(e,t,n,r){var o=e.updateQueue;sn=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?a=u:i.next=u,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==i&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=s))}if(a!==null){var d=o.baseState;i=0,p=u=s=null,l=a;do{var m=l.lane,y=l.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(m=t,y=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(y,d,m);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,m=typeof g=="function"?g.call(y,d,m):g,m==null)break e;d=ve({},d,m);break e;case 2:sn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=y,s=d):p=p.next=y,i|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Wn|=i,e.lanes=i,e.memoizedState=d}}function Wc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var Oo={},$t=En(Oo),Eo=En(Oo),Co=En(Oo);function An(e){if(e===Oo)throw Error(T(174));return e}function _s(e,t){switch(se(Co,t),se(Eo,e),se($t,Oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}de($t),se($t,t)}function Pr(){de($t),de(Eo),de(Co)}function vf(e){An(Co.current);var t=An($t.current),n=xl(t,e.type);t!==n&&(se(Eo,e),se($t,n))}function Ps(e){Eo.current===e&&(de($t),de(Eo))}var he=En(0);function Ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rl=[];function Ls(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var Ea=qt.ReactCurrentDispatcher,ol=qt.ReactCurrentBatchConfig,Bn=0,ge=null,Ce=null,Le=null,Qa=!1,so=!1,No=0,Pg=0;function Ie(){throw Error(T(321))}function Ds(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function Ts(e,t,n,r,o,a){if(Bn=a,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ea.current=e===null||e.memoizedState===null?zg:Og,e=n(r,o),so){a=0;do{if(so=!1,No=0,25<=a)throw Error(T(301));a+=1,Le=Ce=null,t.updateQueue=null,Ea.current=Fg,e=n(r,o)}while(so)}if(Ea.current=Ja,t=Ce!==null&&Ce.next!==null,Bn=0,Le=Ce=ge=null,Qa=!1,t)throw Error(T(300));return e}function zs(){var e=No!==0;return No=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ge.memoizedState=Le=e:Le=Le.next=e,Le}function xt(){if(Ce===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Le===null?ge.memoizedState:Le.next;if(t!==null)Le=t,Ce=e;else{if(e===null)throw Error(T(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Le===null?ge.memoizedState=Le=e:Le=Le.next=e}return Le}function _o(e,t){return typeof t=="function"?t(e):t}function al(e){var t=xt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Ce,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=i=null,s=null,u=a;do{var p=u.lane;if((Bn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,i=r):s=s.next=d,ge.lanes|=p,Wn|=p}u=u.next}while(u!==null&&u!==a);s===null?i=r:s.next=l,Tt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,ge.lanes|=a,Wn|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function il(e){var t=xt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Tt(a,t.memoizedState)||(Ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function yf(){}function wf(e,t){var n=ge,r=xt(),o=t(),a=!Tt(r.memoizedState,o);if(a&&(r.memoizedState=o,Ze=!0),r=r.queue,Os(kf.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Po(9,bf.bind(null,n,r,o,t),void 0,null),De===null)throw Error(T(349));(Bn&30)!==0||xf(n,t,o)}return o}function xf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bf(e,t,n,r){t.value=n,t.getSnapshot=r,Sf(t)&&Ef(e)}function kf(e,t,n){return n(function(){Sf(t)&&Ef(e)})}function Sf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Ef(e){var t=Xt(e,1);t!==null&&Dt(t,e,1,-1)}function Vc(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:e},t.queue=e,e=e.dispatch=Tg.bind(null,ge,e),[t.memoizedState,e]}function Po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cf(){return xt().memoizedState}function Ca(e,t,n,r){var o=It();ge.flags|=e,o.memoizedState=Po(1|t,n,void 0,r===void 0?null:r)}function ii(e,t,n,r){var o=xt();r=r===void 0?null:r;var a=void 0;if(Ce!==null){var i=Ce.memoizedState;if(a=i.destroy,r!==null&&Ds(r,i.deps)){o.memoizedState=Po(t,n,a,r);return}}ge.flags|=e,o.memoizedState=Po(1|t,n,a,r)}function Yc(e,t){return Ca(8390656,8,e,t)}function Os(e,t){return ii(2048,8,e,t)}function Nf(e,t){return ii(4,2,e,t)}function _f(e,t){return ii(4,4,e,t)}function Pf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lf(e,t,n){return n=n!=null?n.concat([e]):null,ii(4,4,Pf.bind(null,t,e),n)}function Fs(){}function Df(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tf(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zf(e,t,n){return(Bn&21)===0?(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n):(Tt(n,t)||(n=Md(),ge.lanes|=n,Wn|=n,e.baseState=!0),t)}function Lg(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=ol.transition;ol.transition={};try{e(!1),t()}finally{ie=n,ol.transition=r}}function Of(){return xt().memoizedState}function Dg(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ff(e))Rf(t,n);else if(n=hf(e,t,n,r),n!==null){var o=Ve();Dt(n,e,r,o),Mf(n,t,r)}}function Tg(e,t,n){var r=wn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ff(e))Rf(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,Tt(l,i)){var s=t.interleaved;s===null?(o.next=o,Cs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}n=hf(e,t,o,r),n!==null&&(o=Ve(),Dt(n,e,r,o),Mf(n,t,r))}}function Ff(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Rf(e,t){so=Qa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mf(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}var Ja={readContext:wt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},zg={readContext:wt,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Yc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ca(4194308,4,Pf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ca(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ca(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=It();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dg.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:Vc,useDebugValue:Fs,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=Vc(!1),t=e[0];return e=Lg.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,o=It();if(pe){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),De===null)throw Error(T(349));(Bn&30)!==0||xf(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Yc(kf.bind(null,r,a,e),[e]),r.flags|=2048,Po(9,bf.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=It(),t=De.identifierPrefix;if(pe){var n=Qt,r=Yt;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=No++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Og={readContext:wt,useCallback:Df,useContext:wt,useEffect:Os,useImperativeHandle:Lf,useInsertionEffect:Nf,useLayoutEffect:_f,useMemo:Tf,useReducer:al,useRef:Cf,useState:function(){return al(_o)},useDebugValue:Fs,useDeferredValue:function(e){var t=xt();return zf(t,Ce.memoizedState,e)},useTransition:function(){var e=al(_o)[0],t=xt().memoizedState;return[e,t]},useMutableSource:yf,useSyncExternalStore:wf,useId:Of,unstable_isNewReconciler:!1},Fg={readContext:wt,useCallback:Df,useContext:wt,useEffect:Os,useImperativeHandle:Lf,useInsertionEffect:Nf,useLayoutEffect:_f,useMemo:Tf,useReducer:il,useRef:Cf,useState:function(){return il(_o)},useDebugValue:Fs,useDeferredValue:function(e){var t=xt();return Ce===null?t.memoizedState=e:zf(t,Ce.memoizedState,e)},useTransition:function(){var e=il(_o)[0],t=xt().memoizedState;return[e,t]},useMutableSource:yf,useSyncExternalStore:wf,useId:Of,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ul(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var li={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),o=wn(e),a=Jt(r,o);a.payload=t,n!=null&&(a.callback=n),t=vn(e,a,o),t!==null&&(Dt(t,e,o,r),Sa(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),o=wn(e),a=Jt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=vn(e,a,o),t!==null&&(Dt(t,e,o,r),Sa(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=wn(e),o=Jt(n,r);o.tag=2,t!=null&&(o.callback=t),t=vn(e,o,r),t!==null&&(Dt(t,e,r,n),Sa(t,e,r))}};function Qc(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!xo(n,r)||!xo(o,a):!0}function If(e,t,n){var r=!1,o=kn,a=t.contextType;return typeof a=="object"&&a!==null?a=wt(a):(o=et(t)?Un:$e.current,r=t.contextTypes,a=(r=r!=null)?Cr(e,o):kn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Jc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&li.enqueueReplaceState(t,t.state,null)}function Hl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ns(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=wt(a):(a=et(t)?Un:$e.current,o.context=Cr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ul(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&li.enqueueReplaceState(o,o.state,null),Va(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t){try{var n="",r=t;do n+=ch(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function ll(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rg=typeof WeakMap=="function"?WeakMap:Map;function Af(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ga||(Ga=!0,ql=r),Bl(e,t)},n}function jf(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Bl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Kc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Kg.bind(null,e,t,n),t.then(e,e))}function Gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,vn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Mg=qt.ReactCurrentOwner,Ze=!1;function We(e,t,n,r){t.child=e===null?mf(t,null,n,r):_r(t,e.child,n,r)}function Zc(e,t,n,r,o){n=n.render;var a=t.ref;return kr(t,o),r=Ts(e,t,n,r,a,o),n=zs(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Zt(e,t,o)):(pe&&n&&ws(t),t.flags|=1,We(e,t,r,o),t.child)}function qc(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Hs(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,$f(e,t,a,r,o)):(e=La(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(i,r)&&e.ref===t.ref)return Zt(e,t,o)}return t.flags|=1,e=xn(a,r),e.ref=t.ref,e.return=t,t.child=e}function $f(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(xo(a,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,Zt(e,t,o)}return Wl(e,t,n,r,o)}function Uf(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(vr,at),at|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(vr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,se(vr,at),at|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,se(vr,at),at|=r;return We(e,t,o,n),t.child}function Hf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,n,r,o){var a=et(n)?Un:$e.current;return a=Cr(t,a),kr(t,o),n=Ts(e,t,n,r,a,o),r=zs(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Zt(e,t,o)):(pe&&r&&ws(t),t.flags|=1,We(e,t,n,o),t.child)}function ed(e,t,n,r,o){if(et(n)){var a=!0;$a(t)}else a=!1;if(kr(t,o),t.stateNode===null)Na(e,t),If(t,n,r),Hl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=et(n)?Un:$e.current,u=Cr(t,u));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Jc(t,i,r,u),sn=!1;var m=t.memoizedState;i.state=m,Va(t,r,i,o),s=t.memoizedState,l!==r||m!==s||qe.current||sn?(typeof p=="function"&&(Ul(t,n,p,r),s=t.memoizedState),(l=sn||Qc(t,n,l,r,m,s,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,gf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Nt(t.type,l),i.props=u,d=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=wt(s):(s=et(n)?Un:$e.current,s=Cr(t,s));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==d||m!==s)&&Jc(t,i,r,s),sn=!1,m=t.memoizedState,i.state=m,Va(t,r,i,o);var g=t.memoizedState;l!==d||m!==g||qe.current||sn?(typeof y=="function"&&(Ul(t,n,y,r),g=t.memoizedState),(u=sn||Qc(t,n,u,r,m,g,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,g,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),i.props=r,i.state=g,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Vl(e,t,n,r,a,o)}function Vl(e,t,n,r,o,a){Hf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&jc(t,n,!1),Zt(e,t,a);r=t.stateNode,Mg.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=_r(t,e.child,null,a),t.child=_r(t,null,l,a)):We(e,t,l,a),t.memoizedState=r.state,o&&jc(t,n,!0),t.child}function Bf(e){var t=e.stateNode;t.pendingContext?Ac(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ac(e,t.context,!1),_s(e,t.containerInfo)}function td(e,t,n,r,o){return Nr(),bs(o),t.flags|=256,We(e,t,n,r),t.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wf(e,t,n){var r=t.pendingProps,o=he.current,a=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),se(he,o&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=ci(i,r,0,null),e=$n(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ql(n),t.memoizedState=Yl,e):Rs(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Ig(e,t,i,r,l,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=xn(l,a):(a=$n(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Ql(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Yl,r}return a=e.child,e=a.sibling,r=xn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rs(e,t){return t=ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function va(e,t,n,r){return r!==null&&bs(r),_r(t,e.child,null,n),e=Rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ig(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=ll(Error(T(422))),va(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=ci({mode:"visible",children:r.children},o,0,null),a=$n(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&_r(t,e.child,null,i),t.child.memoizedState=Ql(i),t.memoizedState=Yl,a);if((t.mode&1)===0)return va(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(T(419)),r=ll(a,r,void 0),va(e,t,i,r)}if(l=(i&e.childLanes)!==0,Ze||l){if(r=De,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Xt(e,o),Dt(r,e,o,-1))}return Us(),r=ll(Error(T(421))),va(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Gg.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,it=gn(o.nextSibling),lt=t,pe=!0,Pt=null,e!==null&&(ht[gt++]=Yt,ht[gt++]=Qt,ht[gt++]=Hn,Yt=e.id,Qt=e.overflow,Hn=t),t=Rs(t,r.children),t.flags|=4096,t)}function nd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$l(e.return,t,n)}function sl(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Vf(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(We(e,t,r.children,n),r=he.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nd(e,n,t);else if(e.tag===19)nd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(he,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ya(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),sl(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ya(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}sl(t,!0,n,null,a);break;case"together":sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Na(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ag(e,t,n){switch(t.tag){case 3:Bf(t),Nr();break;case 5:vf(t);break;case 1:et(t.type)&&$a(t);break;case 4:_s(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;se(Ba,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(he,he.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Wf(e,t,n):(se(he,he.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);se(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Vf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),se(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,Uf(e,t,n)}return Zt(e,t,n)}var Yf,Jl,Qf,Jf;Yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jl=function(){};Qf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,An($t.current);var a=null;switch(n){case"input":o=gl(e,o),r=gl(e,r),a=[];break;case"select":o=ve({},o,{value:void 0}),r=ve({},r,{value:void 0}),a=[];break;case"textarea":o=wl(e,o),r=wl(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Aa)}bl(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(po.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=o?.[u],r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(po.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ce("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Jf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jg(e,t,n){var r=t.pendingProps;switch(xs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return et(t.type)&&ja(),Ae(t),null;case 3:return r=t.stateNode,Pr(),de(qe),de($e),Ls(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ha(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pt!==null&&(ns(Pt),Pt=null))),Jl(e,t),Ae(t),null;case 5:Ps(t);var o=An(Co.current);if(n=t.type,e!==null&&t.stateNode!=null)Qf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Ae(t),null}if(e=An($t.current),ha(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[At]=t,r[So]=a,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(o=0;o<no.length;o++)ce(no[o],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":cc(r,a),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ce("invalid",r);break;case"textarea":fc(r,a),ce("invalid",r)}bl(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ma(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ma(r.textContent,l,e),o=["children",""+l]):po.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&ce("scroll",r)}switch(n){case"input":na(r),dc(r,a,!0);break;case"textarea":na(r),pc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Aa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[At]=t,e[So]=r,Yf(e,t,!1,!1),t.stateNode=e;e:{switch(i=kl(n,r),n){case"dialog":ce("cancel",e),ce("close",e),o=r;break;case"iframe":case"object":case"embed":ce("load",e),o=r;break;case"video":case"audio":for(o=0;o<no.length;o++)ce(no[o],e);o=r;break;case"source":ce("error",e),o=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),o=r;break;case"details":ce("toggle",e),o=r;break;case"input":cc(e,r),o=gl(e,r),ce("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ve({},r,{value:void 0}),ce("invalid",e);break;case"textarea":fc(e,r),o=wl(e,r),ce("invalid",e);break;default:o=r}bl(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Ed(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&kd(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&mo(e,s):typeof s=="number"&&mo(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(po.hasOwnProperty(a)?s!=null&&a==="onScroll"&&ce("scroll",e):s!=null&&as(e,a,s,i))}switch(n){case"input":na(e),dc(e,r,!1);break;case"textarea":na(e),pc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?yr(e,!!r.multiple,a,!1):r.defaultValue!=null&&yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Aa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Jf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=An(Co.current),An($t.current),ha(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(a=r.nodeValue!==n)&&(e=lt,e!==null))switch(e.tag){case 3:ma(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ma(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return Ae(t),null;case 13:if(de(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&it!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ff(),Nr(),t.flags|=98560,a=!1;else if(a=ha(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(T(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(T(317));a[At]=t}else Nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),a=!1}else Pt!==null&&(ns(Pt),Pt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(he.current&1)!==0?Ne===0&&(Ne=3):Us())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return Pr(),Jl(e,t),e===null&&bo(t.stateNode.containerInfo),Ae(t),null;case 10:return Es(t.type._context),Ae(t),null;case 17:return et(t.type)&&ja(),Ae(t),null;case 19:if(de(he),a=t.memoizedState,a===null)return Ae(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Gr(a,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ya(e),i!==null){for(t.flags|=128,Gr(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(he,he.current&1|2),t.child}e=e.sibling}a.tail!==null&&be()>Dr&&(t.flags|=128,r=!0,Gr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ya(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!pe)return Ae(t),null}else 2*be()-a.renderingStartTime>Dr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=be(),t.sibling=null,n=he.current,se(he,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return $s(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(at&1073741824)!==0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function $g(e,t){switch(xs(t),t.tag){case 1:return et(t.type)&&ja(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pr(),de(qe),de($e),Ls(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ps(t),null;case 13:if(de(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(he),null;case 4:return Pr(),null;case 10:return Es(t.type._context),null;case 22:case 23:return $s(),null;case 24:return null;default:return null}}var ya=!1,je=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,R=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function Kl(e,t,n){try{n()}catch(r){ye(e,t,r)}}var rd=!1;function Hg(e,t){if(zl=Ra,e=Zd(),ys(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,l=-1,s=-1,u=0,p=0,d=e,m=null;t:for(;;){for(var y;d!==n||o!==0&&d.nodeType!==3||(l=i+o),d!==a||r!==0&&d.nodeType!==3||(s=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(y=d.firstChild)!==null;)m=d,d=y;for(;;){if(d===e)break t;if(m===n&&++u===o&&(l=i),m===a&&++p===r&&(s=i),(y=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ol={focusedElem:e,selectionRange:n},Ra=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Nt(t.type,v),w);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(k){ye(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return g=rd,rd=!1,g}function uo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Kl(t,n,a)}o=o.next}while(o!==r)}}function si(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Kf(e){var t=e.alternate;t!==null&&(e.alternate=null,Kf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[So],delete t[Ml],delete t[Eg],delete t[Cg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gf(e){return e.tag===5||e.tag===3||e.tag===4}function od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Aa));else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}var ze=null,_t=!1;function an(e,t,n){for(n=n.child;n!==null;)Xf(e,t,n),n=n.sibling}function Xf(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(ei,n)}catch{}switch(n.tag){case 5:je||gr(n,t);case 6:var r=ze,o=_t;ze=null,an(e,t,n),ze=r,_t=o,ze!==null&&(_t?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(_t?(e=ze,n=n.stateNode,e.nodeType===8?tl(e.parentNode,n):e.nodeType===1&&tl(e,n),yo(e)):tl(ze,n.stateNode));break;case 4:r=ze,o=_t,ze=n.stateNode.containerInfo,_t=!0,an(e,t,n),ze=r,_t=o;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Kl(n,t,i),o=o.next}while(o!==r)}an(e,t,n);break;case 1:if(!je&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,t,l)}an(e,t,n);break;case 21:an(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,an(e,t,n),je=r):an(e,t,n);break;default:an(e,t,n)}}function ad(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ug),t.forEach(function(r){var o=Xg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,_t=!1;break e;case 3:ze=l.stateNode.containerInfo,_t=!0;break e;case 4:ze=l.stateNode.containerInfo,_t=!0;break e}l=l.return}if(ze===null)throw Error(T(160));Xf(a,i,o),ze=null,_t=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ye(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zf(t,e),t=t.sibling}function Zf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Mt(e),r&4){try{uo(3,e,e.return),si(3,e)}catch(v){ye(e,e.return,v)}try{uo(5,e,e.return)}catch(v){ye(e,e.return,v)}}break;case 1:Ct(t,e),Mt(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(Ct(t,e),Mt(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var o=e.stateNode;try{mo(o,"")}catch(v){ye(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&wd(o,a),kl(l,i);var u=kl(l,a);for(i=0;i<s.length;i+=2){var p=s[i],d=s[i+1];p==="style"?Ed(o,d):p==="dangerouslySetInnerHTML"?kd(o,d):p==="children"?mo(o,d):as(o,p,d,u)}switch(l){case"input":vl(o,a);break;case"textarea":xd(o,a);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?yr(o,!!a.multiple,y,!1):m!==!!a.multiple&&(a.defaultValue!=null?yr(o,!!a.multiple,a.defaultValue,!0):yr(o,!!a.multiple,a.multiple?[]:"",!1))}o[So]=a}catch(v){ye(e,e.return,v)}}break;case 6:if(Ct(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(v){ye(e,e.return,v)}}break;case 3:if(Ct(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(t.containerInfo)}catch(v){ye(e,e.return,v)}break;case 4:Ct(t,e),Mt(e);break;case 13:Ct(t,e),Mt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(As=be())),r&4&&ad(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||p,Ct(t,e),je=u):Ct(t,e),Mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&(e.mode&1)!==0)for(R=e,p=e.child;p!==null;){for(d=R=p;R!==null;){switch(m=R,y=m.child,m.tag){case 0:case 11:case 14:case 15:uo(4,m,m.return);break;case 1:gr(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){ye(r,n,v)}}break;case 5:gr(m,m.return);break;case 22:if(m.memoizedState!==null){ld(d);continue}}y!==null?(y.return=m,R=y):ld(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Sd("display",i))}catch(v){ye(e,e.return,v)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ye(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ct(t,e),Mt(e),r&4&&ad(e);break;case 21:break;default:Ct(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gf(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(mo(o,""),r.flags&=-33);var a=od(e);Zl(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=od(e);Xl(e,l,i);break;default:throw Error(T(161))}}catch(s){ye(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bg(e,t,n){R=e,qf(e,t,n)}function qf(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||ya;if(!i){var l=o.alternate,s=l!==null&&l.memoizedState!==null||je;l=ya;var u=je;if(ya=i,(je=s)&&!u)for(R=o;R!==null;)i=R,s=i.child,i.tag===22&&i.memoizedState!==null?sd(o):s!==null?(s.return=i,R=s):sd(o);for(;a!==null;)R=a,qf(a,t,n),a=a.sibling;R=o,ya=l,je=u}id(e,t,n)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,R=a):id(e,t,n)}}function id(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:je||si(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Wc(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wc(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&yo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}je||t.flags&512&&Gl(t)}catch(m){ye(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function ld(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function sd(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{si(4,t)}catch(s){ye(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ye(t,o,s)}}var a=t.return;try{Gl(t)}catch(s){ye(t,a,s)}break;case 5:var i=t.return;try{Gl(t)}catch(s){ye(t,i,s)}}}catch(s){ye(t,t.return,s)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var Wg=Math.ceil,Ka=qt.ReactCurrentDispatcher,Ms=qt.ReactCurrentOwner,yt=qt.ReactCurrentBatchConfig,ae=0,De=null,Ee=null,Oe=0,at=0,vr=En(0),Ne=0,Lo=null,Wn=0,ui=0,Is=0,co=null,Xe=null,As=0,Dr=1/0,Wt=null,Ga=!1,ql=null,yn=null,wa=!1,fn=null,Xa=0,fo=0,es=null,_a=-1,Pa=0;function Ve(){return(ae&6)!==0?be():_a!==-1?_a:_a=be()}function wn(e){return(e.mode&1)===0?1:(ae&2)!==0&&Oe!==0?Oe&-Oe:_g.transition!==null?(Pa===0&&(Pa=Md()),Pa):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Bd(e.type)),e)}function Dt(e,t,n,r){if(50<fo)throw fo=0,es=null,Error(T(185));Do(e,n,r),((ae&2)===0||e!==De)&&(e===De&&((ae&2)===0&&(ui|=n),Ne===4&&cn(e,Oe)),tt(e,r),n===1&&ae===0&&(t.mode&1)===0&&(Dr=be()+500,ai&&Cn()))}function tt(e,t){var n=e.callbackNode;Lh(e,t);var r=Fa(e,e===De?Oe:0);if(r===0)n!==null&&gc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&gc(n),t===1)e.tag===0?Ng(ud.bind(null,e)):uf(ud.bind(null,e)),kg(function(){(ae&6)===0&&Cn()}),n=null;else{switch(Id(r)){case 1:n=cs;break;case 4:n=Fd;break;case 16:n=Oa;break;case 536870912:n=Rd;break;default:n=Oa}n=lp(n,ep.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ep(e,t){if(_a=-1,Pa=0,(ae&6)!==0)throw Error(T(327));var n=e.callbackNode;if(Sr()&&e.callbackNode!==n)return null;var r=Fa(e,e===De?Oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Za(e,r);else{t=r;var o=ae;ae|=2;var a=np();(De!==e||Oe!==t)&&(Wt=null,Dr=be()+500,jn(e,t));do try{Qg();break}catch(l){tp(e,l)}while(!0);Ss(),Ka.current=a,ae=o,Ee!==null?t=0:(De=null,Oe=0,t=Ne)}if(t!==0){if(t===2&&(o=_l(e),o!==0&&(r=o,t=ts(e,o))),t===1)throw n=Lo,jn(e,0),cn(e,r),tt(e,be()),n;if(t===6)cn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Vg(o)&&(t=Za(e,r),t===2&&(a=_l(e),a!==0&&(r=a,t=ts(e,a))),t===1))throw n=Lo,jn(e,0),cn(e,r),tt(e,be()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:Rn(e,Xe,Wt);break;case 3:if(cn(e,r),(r&130023424)===r&&(t=As+500-be(),10<t)){if(Fa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Rl(Rn.bind(null,e,Xe,Wt),t);break}Rn(e,Xe,Wt);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Lt(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wg(r/1960))-r,10<r){e.timeoutHandle=Rl(Rn.bind(null,e,Xe,Wt),r);break}Rn(e,Xe,Wt);break;case 5:Rn(e,Xe,Wt);break;default:throw Error(T(329))}}}return tt(e,be()),e.callbackNode===n?ep.bind(null,e):null}function ts(e,t){var n=co;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=Za(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&ns(t)),e}function ns(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function Vg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Tt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t){for(t&=~Is,t&=~ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),r=1<<n;e[n]=-1,t&=~r}}function ud(e){if((ae&6)!==0)throw Error(T(327));Sr();var t=Fa(e,0);if((t&1)===0)return tt(e,be()),null;var n=Za(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=ts(e,r))}if(n===1)throw n=Lo,jn(e,0),cn(e,t),tt(e,be()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rn(e,Xe,Wt),tt(e,be()),null}function js(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(Dr=be()+500,ai&&Cn())}}function Vn(e){fn!==null&&fn.tag===0&&(ae&6)===0&&Sr();var t=ae;ae|=1;var n=yt.transition,r=ie;try{if(yt.transition=null,ie=1,e)return e()}finally{ie=r,yt.transition=n,ae=t,(ae&6)===0&&Cn()}}function $s(){at=vr.current,de(vr)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bg(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(xs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ja();break;case 3:Pr(),de(qe),de($e),Ls();break;case 5:Ps(r);break;case 4:Pr();break;case 13:de(he);break;case 19:de(he);break;case 10:Es(r.type._context);break;case 22:case 23:$s()}n=n.return}if(De=e,Ee=e=xn(e.current,null),Oe=at=t,Ne=0,Lo=null,Is=ui=Wn=0,Xe=co=null,In!==null){for(t=0;t<In.length;t++)if(n=In[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}In=null}return e}function tp(e,t){do{var n=Ee;try{if(Ss(),Ea.current=Ja,Qa){for(var r=ge.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Qa=!1}if(Bn=0,Le=Ce=ge=null,so=!1,No=0,Ms.current=null,n===null||n.return===null){Ne=1,Lo=t,Ee=null;break}e:{var a=e,i=n.return,l=n,s=t;if(t=Oe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=l,d=p.tag;if((p.mode&1)===0&&(d===0||d===11||d===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Gc(i);if(y!==null){y.flags&=-257,Xc(y,i,l,a,t),y.mode&1&&Kc(a,u,t),t=y,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if((t&1)===0){Kc(a,u,t),Us();break e}s=Error(T(426))}}else if(pe&&l.mode&1){var w=Gc(i);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),Xc(w,i,l,a,t),bs(Lr(s,l));break e}}a=s=Lr(s,l),Ne!==4&&(Ne=2),co===null?co=[a]:co.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Af(a,s,t);Bc(a,f);break e;case 1:l=s;var c=a.type,h=a.stateNode;if((a.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(yn===null||!yn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=jf(a,l,t);Bc(a,k);break e}}a=a.return}while(a!==null)}op(n)}catch(b){t=b,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function np(){var e=Ka.current;return Ka.current=Ja,e===null?Ja:e}function Us(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),De===null||(Wn&268435455)===0&&(ui&268435455)===0||cn(De,Oe)}function Za(e,t){var n=ae;ae|=2;var r=np();(De!==e||Oe!==t)&&(Wt=null,jn(e,t));do try{Yg();break}catch(o){tp(e,o)}while(!0);if(Ss(),ae=n,Ka.current=r,Ee!==null)throw Error(T(261));return De=null,Oe=0,Ne}function Yg(){for(;Ee!==null;)rp(Ee)}function Qg(){for(;Ee!==null&&!xh();)rp(Ee)}function rp(e){var t=ip(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?op(e):Ee=t,Ms.current=null}function op(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=jg(n,t,at),n!==null){Ee=n;return}}else{if(n=$g(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Ee=null;return}}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Ne===0&&(Ne=5)}function Rn(e,t,n){var r=ie,o=yt.transition;try{yt.transition=null,ie=1,Jg(e,t,n,r)}finally{yt.transition=o,ie=r}return null}function Jg(e,t,n,r){do Sr();while(fn!==null);if((ae&6)!==0)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Dh(e,a),e===De&&(Ee=De=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||wa||(wa=!0,lp(Oa,function(){return Sr(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=yt.transition,yt.transition=null;var i=ie;ie=1;var l=ae;ae|=4,Ms.current=null,Hg(e,n),Zf(n,e),gg(Ol),Ra=!!zl,Ol=zl=null,e.current=n,Bg(n,e,o),bh(),ae=l,ie=i,yt.transition=a}else e.current=n;if(wa&&(wa=!1,fn=e,Xa=o),a=e.pendingLanes,a===0&&(yn=null),Eh(n.stateNode,r),tt(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ga)throw Ga=!1,e=ql,ql=null,e;return(Xa&1)!==0&&e.tag!==0&&Sr(),a=e.pendingLanes,(a&1)!==0?e===es?fo++:(fo=0,es=e):fo=0,Cn(),null}function Sr(){if(fn!==null){var e=Id(Xa),t=yt.transition,n=ie;try{if(yt.transition=null,ie=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,Xa=0,(ae&6)!==0)throw Error(T(331));var o=ae;for(ae|=4,R=e.current;R!==null;){var a=R,i=a.child;if((R.flags&16)!==0){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(R=u;R!==null;){var p=R;switch(p.tag){case 0:case 11:case 15:uo(8,p,a)}var d=p.child;if(d!==null)d.return=p,R=d;else for(;R!==null;){p=R;var m=p.sibling,y=p.return;if(Kf(p),p===u){R=null;break}if(m!==null){m.return=y,R=m;break}R=y}}}var g=a.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}R=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,R=i;else e:for(;R!==null;){if(a=R,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:uo(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,R=f;break e}R=a.return}}var c=e.current;for(R=c;R!==null;){i=R;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,R=h;else e:for(i=c;R!==null;){if(l=R,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:si(9,l)}}catch(b){ye(l,l.return,b)}if(l===i){R=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,R=k;break e}R=l.return}}if(ae=o,Cn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(ei,e)}catch{}r=!0}return r}finally{ie=n,yt.transition=t}}return!1}function cd(e,t,n){t=Lr(n,t),t=Af(e,t,1),e=vn(e,t,1),t=Ve(),e!==null&&(Do(e,1,t),tt(e,t))}function ye(e,t,n){if(e.tag===3)cd(e,e,n);else for(;t!==null;){if(t.tag===3){cd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=Lr(n,e),e=jf(t,e,1),t=vn(t,e,1),e=Ve(),t!==null&&(Do(t,1,e),tt(t,e));break}}t=t.return}}function Kg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Oe&n)===n&&(Ne===4||Ne===3&&(Oe&130023424)===Oe&&500>be()-As?jn(e,0):Is|=n),tt(e,t)}function ap(e,t){t===0&&((e.mode&1)===0?t=1:(t=aa,aa<<=1,(aa&130023424)===0&&(aa=4194304)));var n=Ve();e=Xt(e,t),e!==null&&(Do(e,t,n),tt(e,n))}function Gg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ap(e,n)}function Xg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),ap(e,n)}var ip;ip=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)Ze=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ze=!1,Ag(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,pe&&(t.flags&1048576)!==0&&cf(t,Ha,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Na(e,t),e=t.pendingProps;var o=Cr(t,$e.current);kr(t,n),o=Ts(null,t,r,e,o,n);var a=zs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(a=!0,$a(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ns(t),o.updater=li,t.stateNode=o,o._reactInternals=t,Hl(t,r,e,n),t=Vl(null,t,r,!0,a,n)):(t.tag=0,pe&&a&&ws(t),We(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Na(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=qg(r),e=Nt(r,e),o){case 0:t=Wl(null,t,r,e,n);break e;case 1:t=ed(null,t,r,e,n);break e;case 11:t=Zc(null,t,r,e,n);break e;case 14:t=qc(null,t,r,Nt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),Wl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),ed(e,t,r,o,n);case 3:e:{if(Bf(t),e===null)throw Error(T(387));r=t.pendingProps,a=t.memoizedState,o=a.element,gf(e,t),Va(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Lr(Error(T(423)),t),t=td(e,t,r,n,o);break e}else if(r!==o){o=Lr(Error(T(424)),t),t=td(e,t,r,n,o);break e}else for(it=gn(t.stateNode.containerInfo.firstChild),lt=t,pe=!0,Pt=null,n=mf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nr(),r===o){t=Zt(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return vf(t),e===null&&jl(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Fl(r,o)?i=null:a!==null&&Fl(r,a)&&(t.flags|=32),Hf(e,t),We(e,t,i,n),t.child;case 6:return e===null&&jl(t),null;case 13:return Wf(e,t,n);case 4:return _s(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_r(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),Zc(e,t,r,o,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,se(Ba,r._currentValue),r._currentValue=i,a!==null)if(Tt(a.value,i)){if(a.children===o.children&&!qe.current){t=Zt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Jt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),$l(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(T(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),$l(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}We(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,kr(t,n),o=wt(o),r=r(o),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,o=Nt(r,t.pendingProps),o=Nt(r.type,o),qc(e,t,r,o,n);case 15:return $f(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),Na(e,t),t.tag=1,et(r)?(e=!0,$a(t)):e=!1,kr(t,n),If(t,r,o),Hl(t,r,o,n),Vl(null,t,r,!0,e,n);case 19:return Vf(e,t,n);case 22:return Uf(e,t,n)}throw Error(T(156,t.tag))};function lp(e,t){return Od(e,t)}function Zg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new Zg(e,t,n,r)}function Hs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qg(e){if(typeof e=="function")return Hs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ls)return 11;if(e===ss)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function La(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Hs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case lr:return $n(n.children,o,a,t);case is:i=8,o|=8;break;case fl:return e=vt(12,n,t,o|2),e.elementType=fl,e.lanes=a,e;case pl:return e=vt(13,n,t,o),e.elementType=pl,e.lanes=a,e;case ml:return e=vt(19,n,t,o),e.elementType=ml,e.lanes=a,e;case gd:return ci(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case md:i=10;break e;case hd:i=9;break e;case ls:i=11;break e;case ss:i=14;break e;case ln:i=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=vt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function $n(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function ci(e,t,n,r){return e=vt(22,e,r,t),e.elementType=gd,e.lanes=n,e.stateNode={isHidden:!1},e}function ul(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function cl(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ev(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bs(e,t,n,r,o,a,i,l,s){return e=new ev(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=vt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ns(a),e}function tv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ir,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sp(e){if(!e)return kn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(et(n))return sf(e,n,t)}return t}function up(e,t,n,r,o,a,i,l,s){return e=Bs(n,r,!0,e,o,a,i,l,s),e.context=sp(null),n=e.current,r=Ve(),o=wn(n),a=Jt(r,o),a.callback=t??null,vn(n,a,o),e.current.lanes=o,Do(e,o,r),tt(e,r),e}function di(e,t,n,r){var o=t.current,a=Ve(),i=wn(o);return n=sp(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vn(o,t,i),e!==null&&(Dt(e,o,i,a),Sa(e,o,i)),i}function qa(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function dd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ws(e,t){dd(e,t),(e=e.alternate)&&dd(e,t)}function nv(){return null}var cp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vs(e){this._internalRoot=e}fi.prototype.render=Vs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));di(e,t,null,null)};fi.prototype.unmount=Vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){di(null,e,null,null)}),t[Gt]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=$d();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&Hd(e)}};function Ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fd(){}function rv(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=qa(i);a.call(u)}}var i=up(t,r,e,0,null,!1,!1,"",fd);return e._reactRootContainer=i,e[Gt]=i.current,bo(e.nodeType===8?e.parentNode:e),Vn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=qa(s);l.call(u)}}var s=Bs(e,0,!1,null,null,!1,!1,"",fd);return e._reactRootContainer=s,e[Gt]=s.current,bo(e.nodeType===8?e.parentNode:e),Vn(function(){di(t,s,n,r)}),s}function mi(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var l=o;o=function(){var s=qa(i);l.call(s)}}di(t,i,e,o)}else i=rv(n,t,e,o,r);return qa(i)}Ad=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=to(t.pendingLanes);n!==0&&(ds(t,n|1),tt(t,be()),(ae&6)===0&&(Dr=be()+500,Cn()))}break;case 13:Vn(function(){var r=Xt(e,1);if(r!==null){var o=Ve();Dt(r,e,1,o)}}),Ws(e,1)}};fs=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=Ve();Dt(t,e,134217728,n)}Ws(e,134217728)}};jd=function(e){if(e.tag===13){var t=wn(e),n=Xt(e,t);if(n!==null){var r=Ve();Dt(n,e,t,r)}Ws(e,t)}};$d=function(){return ie};Ud=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};El=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=oi(r);if(!o)throw Error(T(90));yd(r),vl(r,o)}}}break;case"textarea":xd(e,n);break;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}};_d=js;Pd=Vn;var ov={usingClientEntryPoint:!1,Events:[zo,dr,oi,Cd,Nd,js]},Xr={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},av={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Td(e),e===null?null:e.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Zr.isDisabled&&Zr.supportsFiber))try{ei=Zr.inject(av),jt=Zr}catch{}var Zr;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ys(t))throw Error(T(200));return tv(e,t,null,n)};ct.createRoot=function(e,t){if(!Ys(e))throw Error(T(299));var n=!1,r="",o=cp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Bs(e,1,!1,null,null,n,!1,r,o),e[Gt]=t.current,bo(e.nodeType===8?e.parentNode:e),new Vs(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Td(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Vn(e)};ct.hydrate=function(e,t,n){if(!pi(t))throw Error(T(200));return mi(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!Ys(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=cp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=up(t,null,e,1,n??null,o,!1,a,i),e[Gt]=t.current,bo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new fi(t)};ct.render=function(e,t,n){if(!pi(t))throw Error(T(200));return mi(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!pi(e))throw Error(T(40));return e._reactRootContainer?(Vn(function(){mi(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};ct.unstable_batchedUpdates=js;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pi(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return mi(e,t,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426"});var mp=zn((Uy,pp)=>{"use strict";function fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fp)}catch(e){console.error(e)}}fp(),pp.exports=dp()});var gp=zn(Qs=>{"use strict";var hp=mp();Qs.createRoot=hp.createRoot,Qs.hydrateRoot=hp.hydrateRoot;var Hy});var Om=J(Q()),Fm=J(gp());var ot=J(Q());var nt=J(Q(),1),j=J(Q(),1),me=J(Q(),1),cu=J(Q(),1),Kp=J(Q(),1),ee=J(Q(),1),py=J(Q(),1),my=J(Q(),1),hy=J(Q(),1),$=J(Q(),1),lm=J(Q(),1);var vp="popstate";function yp(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Cp(e={}){function t(r,o){let a=o.state?.masked,{pathname:i,search:l,hash:s}=a||r.location;return Xs("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default",a?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,o){return typeof o=="string"?o:Or(o)}return lv(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function iv(){return Math.random().toString(36).substring(2,10)}function wp(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Xs(e,t,n=null,r,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Jn(t):t,state:n,key:t&&t.key||r||iv(),unstable_mask:o}}function Or({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function lv(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,l="POP",s=null,u=p();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function p(){return(i.state||{idx:null}).idx}function d(){l="POP";let w=p(),f=w==null?null:w-u;u=w,s&&s({action:l,location:v.location,delta:f})}function m(w,f){l="PUSH";let c=yp(w)?w:Xs(v.location,w,f);n&&n(c,w),u=p()+1;let h=wp(c,u),k=v.createHref(c.unstable_mask||c);try{i.pushState(h,"",k)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(k)}a&&s&&s({action:l,location:v.location,delta:1})}function y(w,f){l="REPLACE";let c=yp(w)?w:Xs(v.location,w,f);n&&n(c,w),u=p();let h=wp(c,u),k=v.createHref(c.unstable_mask||c);i.replaceState(h,"",k),a&&s&&s({action:l,location:v.location,delta:0})}function g(w){return sv(w)}let v={get action(){return l},get location(){return e(o,i)},listen(w){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(vp,d),s=w,()=>{o.removeEventListener(vp,d),s=null}},createHref(w){return t(o,w)},createURL:g,encodeLocation(w){let f=g(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:y,go(w){return i.go(w)}};return v}function sv(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),fe(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Or(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}var uv;uv=new WeakMap;function tu(e,t,n="/"){return cv(e,t,n,!1)}function cv(e,t,n,r){let o=typeof t=="string"?Jn(t):t,a=Ut(o.pathname||"/",n);if(a==null)return null;let i=Np(e);fv(i);let l=null;for(let s=0;l==null&&s<i.length;++s){let u=Sv(a);l=bv(i[s],u,r)}return l}function dv(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function Np(e,t=[],n=[],r="",o=!1){let a=(i,l,s=o,u)=>{let p={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(r)&&s)return;fe(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length)}let d=zt([r,p.relativePath]),m=n.concat(p);i.children&&i.children.length>0&&(fe(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Np(i.children,t,m,d,s)),!(i.path==null&&!i.index)&&t.push({path:d,score:wv(d,i.index),routesMeta:m})};return e.forEach((i,l)=>{if(i.path===""||!i.path?.includes("?"))a(i,l);else for(let s of _p(i.path))a(i,l,!0,s)}),t}function _p(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let i=_p(r.join("/")),l=[];return l.push(...i.map(s=>s===""?a:[a,s].join("/"))),o&&l.push(...i),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function fv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var pv=/^:[\w-]+$/,mv=3,hv=2,gv=1,vv=10,yv=-2,xp=e=>e==="*";function wv(e,t){let n=e.split("/"),r=n.length;return n.some(xp)&&(r+=yv),t&&(r+=hv),n.filter(o=>!xp(o)).reduce((o,a)=>o+(pv.test(a)?mv:a===""?gv:vv),r)}function xv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function bv(e,t,n=!1){let{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,p=a==="/"?t:t.slice(a.length)||"/",d=Ro({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},p),m=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Ro({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},p)),!d)return null;Object.assign(o,d.params),i.push({params:o,pathname:zt([a,d.pathname]),pathnameBase:Nv(zt([a,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(a=zt([a,d.pathnameBase]))}return i}function Ro(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=kv(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,{paramName:p,isOptional:d},m)=>{if(p==="*"){let g=l[m]||"";i=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}let y=l[m];return d&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:i,pattern:e}}function kv(e,t=!1,n=!0){bt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,s,u,p)=>{if(r.push({paramName:l,isOptional:s!=null}),s){let d=p.charAt(u+i.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Sv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ut(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var Ev=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Pp(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Jn(e):e,a;return n?(n=Dp(n),n.startsWith("/")?a=bp(n.substring(1),"/"):a=bp(n,t)):a=t,{pathname:a,search:_v(r),hash:Pv(o)}}function bp(e,t){let n=wi(t).split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Js(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Cv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lp(e){let t=Cv(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function nu(e,t,n,r=!1){let o;typeof e=="string"?o=Jn(e):(o={...e},fe(!o.pathname||!o.pathname.includes("?"),Js("?","pathname","search",o)),fe(!o.pathname||!o.pathname.includes("#"),Js("#","pathname","hash",o)),fe(!o.search||!o.search.includes("#"),Js("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,l;if(i==null)l=n;else{let d=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),d-=1;o.pathname=m.join("/")}l=d>=0?t[d]:"/"}let s=Pp(o,l),u=i&&i!=="/"&&i.endsWith("/"),p=(a||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}var Dp=e=>e.replace(/\/\/+/g,"/"),zt=e=>Dp(e.join("/")),wi=e=>e.replace(/\/+$/,""),Nv=e=>wi(e).replace(/^\/*/,"/"),_v=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;var Tp=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function zp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Lv(e){let t=e.map(n=>n.route.path).filter(Boolean);return zt(t)||"/"}var Op=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Fp(e,t){let n=e;if(typeof n!="string"||!Ev.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(Op)try{let a=new URL(window.location.href),i=n.startsWith("//")?new URL(a.protocol+n):new URL(n),l=Ut(i.pathname,t);i.origin===a.origin&&l!=null?n=l+i.search+i.hash:o=!0}catch{bt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}var Wy=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Rp=["POST","PUT","PATCH","DELETE"],Vy=new Set(Rp),Dv=["GET",...Rp],Yy=new Set(Dv);var Kn=nt.createContext(null);Kn.displayName="DataRouter";var Fr=nt.createContext(null);Fr.displayName="DataRouterState";var Mp=nt.createContext(!1);function Tv(){return nt.useContext(Mp)}var ru=nt.createContext({isTransitioning:!1});ru.displayName="ViewTransition";var Ip=nt.createContext(new Map);Ip.displayName="Fetchers";var zv=nt.createContext(null);zv.displayName="Await";var Qe=nt.createContext(null);Qe.displayName="Navigation";var Rr=nt.createContext(null);Rr.displayName="Location";var Ot=nt.createContext({outlet:null,matches:[],isDataRoute:!1});Ot.displayName="Route";var ou=nt.createContext(null);ou.displayName="RouteError";var Zs=!0,Ap="REACT_ROUTER_ERROR",Ov="REDIRECT",Fv="ROUTE_ERROR_RESPONSE";function Rv(e){if(e.startsWith(`${Ap}:${Ov}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Mv(e){if(e.startsWith(`${Ap}:${Fv}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Tp(t.status,t.statusText,t.data)}catch{}}function jp(e,{relative:t}={}){fe(Mr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=j.useContext(Qe),{hash:o,pathname:a,search:i}=Ir(e,{relative:t}),l=a;return n!=="/"&&(l=a==="/"?n:zt([n,a])),r.createHref({pathname:l,search:i,hash:o})}function Mr(){return j.useContext(Rr)!=null}function Ue(){return fe(Mr(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Rr).location}var $p="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Up(e){j.useContext(Qe).static||j.useLayoutEffect(e)}function He(){let{isDataRoute:e}=j.useContext(Ot);return e?Yv():Iv()}function Iv(){fe(Mr(),"useNavigate() may be used only in the context of a <Router> component.");let e=j.useContext(Kn),{basename:t,navigator:n}=j.useContext(Qe),{matches:r}=j.useContext(Ot),{pathname:o}=Ue(),a=JSON.stringify(Lp(r)),i=j.useRef(!1);return Up(()=>{i.current=!0}),j.useCallback((s,u={})=>{if(bt(i.current,$p),!i.current)return;if(typeof s=="number"){n.go(s);return}let p=nu(s,JSON.parse(a),o,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:zt([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,a,o,e])}var Qy=j.createContext(null);function en(){let{matches:e}=j.useContext(Ot);return e[e.length-1]?.params??{}}function Ir(e,{relative:t}={}){let{matches:n}=j.useContext(Ot),{pathname:r}=Ue(),o=JSON.stringify(Lp(n));return j.useMemo(()=>nu(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function Hp(e,t){return Bp(e,t)}function Bp(e,t,n){fe(Mr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=j.useContext(Qe),{matches:o}=j.useContext(Ot),a=o[o.length-1],i=a?a.params:{},l=a?a.pathname:"/",s=a?a.pathnameBase:"/",u=a&&a.route;if(Zs){let w=u&&u.path||"";Qp(l,!u||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let p=Ue(),d;if(t){let w=typeof t=="string"?Jn(t):t;fe(s==="/"||w.pathname?.startsWith(s),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${w.pathname}" was given in the \`location\` prop.`),d=w}else d=p;let m=d.pathname||"/",y=m;if(s!=="/"){let w=s.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(w.length).join("/")}let g=tu(e,{pathname:y});Zs&&(bt(u||g!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),bt(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));let v=Hv(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},i,w.params),pathname:zt([s,r.encodeLocation?r.encodeLocation(w.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:zt([s,r.encodeLocation?r.encodeLocation(w.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),o,n);return t&&v?j.createElement(Rr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...d},navigationType:"POP"}},v):v}function Av(){let e=Yp(),t=zp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},i=null;return Zs&&(console.error("Error handled by React Router default ErrorBoundary:",e),i=j.createElement(j.Fragment,null,j.createElement("p",null,"\u{1F4BF} Hey developer \u{1F44B}"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:a},"ErrorBoundary")," or"," ",j.createElement("code",{style:a},"errorElement")," prop on your route."))),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:o},n):null,i)}var jv=j.createElement(Av,null),Wp=class extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let n=Mv(e.digest);n&&(e=n)}let t=e!==void 0?j.createElement(Ot.Provider,{value:this.props.routeContext},j.createElement(ou.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?j.createElement($v,{error:e},t):t}};Wp.contextType=Mp;var Ks=new WeakMap;function $v({children:e,error:t}){let{basename:n}=j.useContext(Qe);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=Rv(t.digest);if(r){let o=Ks.get(t);if(o)throw o;let a=Fp(r.location,n);if(Op&&!Ks.get(t))if(a.isExternal||r.reloadDocument)window.location.href=a.absoluteURL||a.to;else{let i=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:r.replace}));throw Ks.set(t,i),i}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return e}function Uv({routeContext:e,match:t,children:n}){let r=j.useContext(Kn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),j.createElement(Ot.Provider,{value:e},n)}function Hv(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,a=r?.errors;if(a!=null){let p=o.findIndex(d=>d.route.id&&a?.[d.route.id]!==void 0);fe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let i=!1,l=-1;if(n&&r){i=r.renderFallback;for(let p=0;p<o.length;p++){let d=o[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=p),d.route.id){let{loaderData:m,errors:y}=r,g=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!y||y[d.route.id]===void 0);if(d.route.lazy||g){n.isStatic&&(i=!0),l>=0?o=o.slice(0,l+1):o=[o[0]];break}}}}let s=n?.onError,u=r&&s?(p,d)=>{s(p,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Lv(r.matches),errorInfo:d})}:void 0;return o.reduceRight((p,d,m)=>{let y,g=!1,v=null,w=null;r&&(y=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||jv,i&&(l<0&&m===0?(Qp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,w=null):l===m&&(g=!0,w=d.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,m+1)),c=()=>{let h;return y?h=v:g?h=w:d.route.Component?h=j.createElement(d.route.Component,null):d.route.element?h=d.route.element:h=p,j.createElement(Uv,{match:d,routeContext:{outlet:p,matches:f,isDataRoute:r!=null},children:h})};return r&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?j.createElement(Wp,{location:r.location,revalidation:r.revalidation,component:v,error:y,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:u}):c()},null)}function au(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bv(e){let t=j.useContext(Kn);return fe(t,au(e)),t}function iu(e){let t=j.useContext(Fr);return fe(t,au(e)),t}function Wv(e){let t=j.useContext(Ot);return fe(t,au(e)),t}function lu(e){let t=Wv(e),n=t.matches[t.matches.length-1];return fe(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Vv(){return lu("useRouteId")}function Vp(){return iu("useNavigation").navigation}function su(){let{matches:e,loaderData:t}=iu("useMatches");return j.useMemo(()=>e.map(n=>dv(n,t)),[e,t])}function Yp(){let e=j.useContext(ou),t=iu("useRouteError"),n=lu("useRouteError");return e!==void 0?e:t.errors?.[n]}function Yv(){let{router:e}=Bv("useNavigate"),t=lu("useNavigate"),n=j.useRef(!1);return Up(()=>{n.current=!0}),j.useCallback(async(o,a={})=>{bt(n.current,$p),n.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var kp={};function Qp(e,t,n){!t&&!kp[e]&&(kp[e]=!0,bt(!1,n))}var Qv="useOptimistic",Jy=me[Qv];var Ky=me.memo(Jv);function Jv({routes:e,future:t,state:n,isStatic:r,onError:o}){return Bp(e,void 0,{state:n,isStatic:r,onError:o,future:t})}function ke(e){fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function uu({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:a=!1,unstable_useTransitions:i}){fe(!Mr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),s=me.useMemo(()=>({basename:l,navigator:o,static:a,unstable_useTransitions:i,future:{}}),[l,o,a,i]);typeof n=="string"&&(n=Jn(n));let{pathname:u="/",search:p="",hash:d="",state:m=null,key:y="default",unstable_mask:g}=n,v=me.useMemo(()=>{let w=Ut(u,l);return w==null?null:{location:{pathname:w,search:p,hash:d,state:m,key:y,unstable_mask:g},navigationType:r}},[l,u,p,d,m,y,r,g]);return bt(v!=null,`<Router basename="${l}"> is not able to match the URL "${u}${p}${d}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:me.createElement(Qe.Provider,{value:s},me.createElement(Rr.Provider,{children:t,value:v}))}function Mo({children:e,location:t}){return Hp(xi(e),t)}function xi(e,t=[]){let n=[];return me.Children.forEach(e,(r,o)=>{if(!me.isValidElement(r))return;let a=[...t,o];if(r.type===me.Fragment){n.push.apply(n,xi(r.props.children,a));return}fe(r.type===ke,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),fe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let i={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=xi(r.props.children,a)),n.push(i)}),n}var vi="get",yi="application/x-www-form-urlencoded";function bi(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Kv(e){return bi(e)&&e.tagName.toLowerCase()==="button"}function Gv(e){return bi(e)&&e.tagName.toLowerCase()==="form"}function Xv(e){return bi(e)&&e.tagName.toLowerCase()==="input"}function Zv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qv(e,t){return e.button===0&&(!t||t==="_self")&&!Zv(e)}var hi=null;function ey(){if(hi===null)try{new FormData(document.createElement("form"),0),hi=!1}catch{hi=!0}return hi}var ty=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gs(e){return e!=null&&!ty.has(e)?(bt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yi}"`),null):e}function ny(e,t){let n,r,o,a,i;if(Gv(e)){let l=e.getAttribute("action");r=l?Ut(l,t):null,n=e.getAttribute("method")||vi,o=Gs(e.getAttribute("enctype"))||yi,a=new FormData(e)}else if(Kv(e)||Xv(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||l.getAttribute("action");if(r=s?Ut(s,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||vi,o=Gs(e.getAttribute("formenctype"))||Gs(l.getAttribute("enctype"))||yi,a=new FormData(l,e),!ey()){let{name:u,type:p,value:d}=e;if(p==="image"){let m=u?`${u}.`:"";a.append(`${m}x`,"0"),a.append(`${m}y`,"0")}else u&&a.append(u,d)}}else{if(bi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=vi,r=null,o=yi,i=e}return a&&o==="text/plain"&&(i=a,a=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:a,body:i}}var Gy=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ry={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},oy=/[&><\u2028\u2029]/g;function Sp(e){return e.replace(oy,t=>ry[t])}function du(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jp(e,t,n,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:t&&Ut(o.pathname,t)==="/"?o.pathname=`${wi(t)}/_root.${r}`:o.pathname=`${wi(o.pathname)}.${r}`,o}async function ay(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){if(console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode&&import.meta.hot)throw n;return window.location.reload(),new Promise(()=>{})}}function iy(e){return e!=null&&typeof e.page=="string"}function ly(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function sy(e,t,n){let r=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let i=await ay(a,n);return i.links?i.links():[]}return[]}));return fy(r.flat(1).filter(ly).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ep(e,t,n,r,o,a){let i=(s,u)=>n[u]?s.route.id!==n[u].route.id:!0,l=(s,u)=>n[u].pathname!==s.pathname||n[u].route.path?.endsWith("*")&&n[u].params["*"]!==s.params["*"];return a==="assets"?t.filter((s,u)=>i(s,u)||l(s,u)):a==="data"?t.filter((s,u)=>{let p=r.routes[s.route.id];if(!p||!p.hasLoader)return!1;if(i(s,u)||l(s,u))return!0;if(s.route.shouldRevalidate){let d=s.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function uy(e,t,{includeHydrateFallback:n}={}){return cy(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function cy(e){return[...new Set(e)]}function dy(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function fy(e,t){let n=new Set,r=new Set(t);return e.reduce((o,a)=>{if(t&&!iy(a)&&a.as==="script"&&a.href&&r.has(a.href))return o;let l=JSON.stringify(dy(a));return n.has(l)||(n.add(l),o.push({key:l,link:a})),o},[])}function fu(){let e=ee.useContext(Kn);return du(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function gy(){let e=ee.useContext(Fr);return du(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Io=ee.createContext(void 0);Io.displayName="FrameworkContext";function pu(){let e=ee.useContext(Io);return du(e,"You must render this element inside a <HydratedRouter> element"),e}function vy(e,t){let n=ee.useContext(Io),[r,o]=ee.useState(!1),[a,i]=ee.useState(!1),{onFocus:l,onBlur:s,onMouseEnter:u,onMouseLeave:p,onTouchStart:d}=t,m=ee.useRef(null);ee.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let v=f=>{f.forEach(c=>{i(c.isIntersecting)})},w=new IntersectionObserver(v,{threshold:.5});return m.current&&w.observe(m.current),()=>{w.disconnect()}}},[e]),ee.useEffect(()=>{if(r){let v=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(v)}}},[r]);let y=()=>{o(!0)},g=()=>{o(!1),i(!1)};return n?e!=="intent"?[a,m,{}]:[a,m,{onFocus:Fo(l,y),onBlur:Fo(s,g),onMouseEnter:Fo(u,y),onMouseLeave:Fo(p,g),onTouchStart:Fo(d,y)}]:[!1,m,{}]}function Fo(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Gp({page:e,...t}){let n=Tv(),{router:r}=fu(),o=ee.useMemo(()=>tu(r.routes,e,r.basename),[r.routes,e,r.basename]);return o?n?ee.createElement(wy,{page:e,matches:o,...t}):ee.createElement(xy,{page:e,matches:o,...t}):null}function yy(e){let{manifest:t,routeModules:n}=pu(),[r,o]=ee.useState([]);return ee.useEffect(()=>{let a=!1;return sy(e,t,n).then(i=>{a||o(i)}),()=>{a=!0}},[e,t,n]),r}function wy({page:e,matches:t,...n}){let r=Ue(),{future:o}=pu(),{basename:a}=fu(),i=ee.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let l=Jp(e,a,o.unstable_trailingSlashAwareDataRequests,"rsc"),s=!1,u=[];for(let p of t)typeof p.route.shouldRevalidate=="function"?s=!0:u.push(p.route.id);return s&&u.length>0&&l.searchParams.set("_routes",u.join(",")),[l.pathname+l.search]},[a,o.unstable_trailingSlashAwareDataRequests,e,r,t]);return ee.createElement(ee.Fragment,null,i.map(l=>ee.createElement("link",{key:l,rel:"prefetch",as:"fetch",href:l,...n})))}function xy({page:e,matches:t,...n}){let r=Ue(),{future:o,manifest:a,routeModules:i}=pu(),{basename:l}=fu(),{loaderData:s,matches:u}=gy(),p=ee.useMemo(()=>Ep(e,t,u,a,r,"data"),[e,t,u,a,r]),d=ee.useMemo(()=>Ep(e,t,u,a,r,"assets"),[e,t,u,a,r]),m=ee.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,w=!1;if(t.forEach(c=>{let h=a.routes[c.route.id];!h||!h.hasLoader||(!p.some(k=>k.route.id===c.route.id)&&c.route.id in s&&i[c.route.id]?.shouldRevalidate||h.hasClientLoader?w=!0:v.add(c.route.id))}),v.size===0)return[];let f=Jp(e,l,o.unstable_trailingSlashAwareDataRequests,"data");return w&&v.size>0&&f.searchParams.set("_routes",t.filter(c=>v.has(c.route.id)).map(c=>c.route.id).join(",")),[f.pathname+f.search]},[l,o.unstable_trailingSlashAwareDataRequests,s,r,a,p,t,e,i]),y=ee.useMemo(()=>uy(d,a),[d,a]),g=yy(d);return ee.createElement(ee.Fragment,null,m.map(v=>ee.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),y.map(v=>ee.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),g.map(({key:v,link:w})=>ee.createElement("link",{key:v,nonce:n.nonce,...w,crossOrigin:w.crossOrigin??n.crossOrigin})))}function by(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var ky=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ky&&(window.__reactRouterVersion="7.14.2")}catch{}function mu({basename:e,children:t,unstable_useTransitions:n,window:r}){let o=$.useRef();o.current==null&&(o.current=Cp({window:r,v5Compat:!0}));let a=o.current,[i,l]=$.useState({action:a.action,location:a.location}),s=$.useCallback(u=>{n===!1?l(u):$.startTransition(()=>l(u))},[n]);return $.useLayoutEffect(()=>a.listen(s),[a,s]),$.createElement(uu,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a,unstable_useTransitions:n})}function Xp({basename:e,children:t,history:n,unstable_useTransitions:r}){let[o,a]=$.useState({action:n.action,location:n.location}),i=$.useCallback(l=>{r===!1?a(l):$.startTransition(()=>a(l))},[r]);return $.useLayoutEffect(()=>n.listen(i),[n,i]),$.createElement(uu,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:n,unstable_useTransitions:r})}Xp.displayName="unstable_HistoryRouter";var Zp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gn=$.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:a,replace:i,unstable_mask:l,state:s,target:u,to:p,preventScrollReset:d,viewTransition:m,unstable_defaultShouldRevalidate:y,...g},v){let{basename:w,navigator:f,unstable_useTransitions:c}=$.useContext(Qe),h=typeof p=="string"&&Zp.test(p),k=Fp(p,w);p=k.to;let b=jp(p,{relative:o}),E=Ue(),S=null;if(l){let X=nu(l,[],E.unstable_mask?E.unstable_mask.pathname:"/",!0);w!=="/"&&(X.pathname=X.pathname==="/"?w:zt([w,X.pathname])),S=f.createHref(X)}let[z,H,P]=vy(r,g),V=nm(p,{replace:i,unstable_mask:l,state:s,target:u,preventScrollReset:d,relative:o,viewTransition:m,unstable_defaultShouldRevalidate:y,unstable_useTransitions:c});function I(X){t&&t(X),X.defaultPrevented||V(X)}let G=!(k.isExternal||a),re=$.createElement("a",{...g,...P,href:(G?S:void 0)||k.absoluteURL||b,onClick:G?I:t,ref:by(v,H),target:u,"data-discover":!h&&n==="render"?"true":void 0});return z&&!h?$.createElement($.Fragment,null,re,$.createElement(Gp,{page:b})):re});Gn.displayName="Link";var tn=$.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:a,to:i,viewTransition:l,children:s,...u},p){let d=Ir(i,{relative:u.relative}),m=Ue(),y=$.useContext(Fr),{navigator:g,basename:v}=$.useContext(Qe),w=y!=null&&im(d)&&l===!0,f=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,c=m.pathname,h=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(c=c.toLowerCase(),h=h?h.toLowerCase():null,f=f.toLowerCase()),h&&v&&(h=Ut(h,v)||h);let k=f!=="/"&&f.endsWith("/")?f.length-1:f.length,b=c===f||!o&&c.startsWith(f)&&c.charAt(k)==="/",E=h!=null&&(h===f||!o&&h.startsWith(f)&&h.charAt(f.length)==="/"),S={isActive:b,isPending:E,isTransitioning:w},z=b?t:void 0,H;typeof r=="function"?H=r(S):H=[r,b?"active":null,E?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let P=typeof a=="function"?a(S):a;return $.createElement(Gn,{...u,"aria-current":z,className:H,ref:p,style:P,to:i,viewTransition:l},typeof s=="function"?s(S):s)});tn.displayName="NavLink";var qp=$.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:a,method:i=vi,action:l,onSubmit:s,relative:u,preventScrollReset:p,viewTransition:d,unstable_defaultShouldRevalidate:m,...y},g)=>{let{unstable_useTransitions:v}=$.useContext(Qe),w=rm(),f=om(l,{relative:u}),c=i.toLowerCase()==="get"?"get":"post",h=typeof l=="string"&&Zp.test(l);return $.createElement("form",{ref:g,method:c,action:f,onSubmit:r?s:b=>{if(s&&s(b),b.defaultPrevented)return;b.preventDefault();let E=b.nativeEvent.submitter,S=E?.getAttribute("formmethod")||i,z=()=>w(E||b.currentTarget,{fetcherKey:t,method:S,navigate:n,replace:o,state:a,relative:u,preventScrollReset:p,viewTransition:d,unstable_defaultShouldRevalidate:m});v&&n!==!1?$.startTransition(()=>z()):z()},...y,"data-discover":!h&&e==="render"?"true":void 0})});qp.displayName="Form";function em({getKey:e,storageKey:t,...n}){let r=$.useContext(Io),{basename:o}=$.useContext(Qe),a=Ue(),i=su();am({getKey:e,storageKey:t});let l=$.useMemo(()=>{if(!r||!e)return null;let u=eu(a,i,o,e);return u!==a.key?u:null},[]);if(!r||r.isSpaMode)return null;let s=((u,p)=>{if(!window.history.state||!window.history.state.key){let d=Math.random().toString(32).slice(2);window.history.replaceState({key:d},"")}try{let m=JSON.parse(sessionStorage.getItem(u)||"{}")[p||window.history.state.key];typeof m=="number"&&window.scrollTo(0,m)}catch(d){console.error(d),sessionStorage.removeItem(u)}}).toString();return $.createElement("script",{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${s})(${Sp(JSON.stringify(t||qs))}, ${Sp(JSON.stringify(l))})`}})}em.displayName="ScrollRestoration";function tm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hu(e){let t=$.useContext(Kn);return fe(t,tm(e)),t}function Sy(e){let t=$.useContext(Fr);return fe(t,tm(e)),t}function nm(e,{target:t,replace:n,unstable_mask:r,state:o,preventScrollReset:a,relative:i,viewTransition:l,unstable_defaultShouldRevalidate:s,unstable_useTransitions:u}={}){let p=He(),d=Ue(),m=Ir(e,{relative:i});return $.useCallback(y=>{if(qv(y,t)){y.preventDefault();let g=n!==void 0?n:Or(d)===Or(m),v=()=>p(e,{replace:g,unstable_mask:r,state:o,preventScrollReset:a,relative:i,viewTransition:l,unstable_defaultShouldRevalidate:s});u?$.startTransition(()=>v()):v()}},[d,p,m,n,r,o,t,e,a,i,l,s,u])}var Ey=0,Cy=()=>`__${String(++Ey)}__`;function rm(){let{router:e}=hu("useSubmit"),{basename:t}=$.useContext(Qe),n=Vv(),r=e.fetch,o=e.navigate;return $.useCallback(async(a,i={})=>{let{action:l,method:s,encType:u,formData:p,body:d}=ny(a,t);if(i.navigate===!1){let m=i.fetcherKey||Cy();await r(m,n,i.action||l,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:p,body:d,formMethod:i.method||s,formEncType:i.encType||u,flushSync:i.flushSync})}else await o(i.action||l,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:p,body:d,formMethod:i.method||s,formEncType:i.encType||u,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[r,o,t,n])}function om(e,{relative:t}={}){let{basename:n}=$.useContext(Qe),r=$.useContext(Ot);fe(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),a={...Ir(e||".",{relative:t})},i=Ue();if(e==null){a.search=i.search;let l=new URLSearchParams(a.search),s=l.getAll("index");if(s.some(p=>p==="")){l.delete("index"),s.filter(d=>d).forEach(d=>l.append("index",d));let p=l.toString();a.search=p?`?${p}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:zt([n,a.pathname])),Or(a)}var qs="react-router-scroll-positions",gi={};function eu(e,t,n,r){let o=null;return r&&(n!=="/"?o=r({...e,pathname:Ut(e.pathname,n)||e.pathname},t):o=r(e,t)),o==null&&(o=e.key),o}function am({getKey:e,storageKey:t}={}){let{router:n}=hu("useScrollRestoration"),{restoreScrollPosition:r,preventScrollReset:o}=Sy("useScrollRestoration"),{basename:a}=$.useContext(Qe),i=Ue(),l=su(),s=Vp();$.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),Ny($.useCallback(()=>{if(s.state==="idle"){let u=eu(i,l,a,e);gi[u]=window.scrollY}try{sessionStorage.setItem(t||qs,JSON.stringify(gi))}catch(u){bt(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`)}window.history.scrollRestoration="auto"},[s.state,e,a,i,l,t])),typeof document<"u"&&($.useLayoutEffect(()=>{try{let u=sessionStorage.getItem(t||qs);u&&(gi=JSON.parse(u))}catch{}},[t]),$.useLayoutEffect(()=>{let u=n?.enableScrollRestoration(gi,()=>window.scrollY,e?(p,d)=>eu(p,d,a,e):void 0);return()=>u&&u()},[n,a,e]),$.useLayoutEffect(()=>{if(r!==!1){if(typeof r=="number"){window.scrollTo(0,r);return}try{if(i.hash){let u=document.getElementById(decodeURIComponent(i.hash.slice(1)));if(u){u.scrollIntoView();return}}}catch{bt(!1,`"${i.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}o!==!0&&window.scrollTo(0,0)}},[i,r,o]))}function Ny(e,t){let{capture:n}=t||{};$.useEffect(()=>{let r=n!=null?{capture:n}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,n])}function im(e,{relative:t}={}){let n=$.useContext(ru);fe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=hu("useViewTransitionState"),o=Ir(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ut(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=Ut(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ro(o.pathname,i)!=null||Ro(o.pathname,a)!=null}var sm=document.createElement("style");sm.textContent=`/* GLOBAL RESET */
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
`;document.head.appendChild(sm);var D=J(Q());var M=J(Q());var um=document.createElement("style");um.textContent=`/* Booking Scheduler Styles */
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
`;document.head.appendChild(um);var dm=Array.from({length:24},(e,t)=>t),Ft=e=>e?new Date(e.replace(" ","T").replace(" -","-")):null,Je=e=>{if(!e)return null;let t=n=>String(n).padStart(2,"0");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":00"},Ao=(e,t)=>{let n=Xn(e);return t.filter(r=>{let o=Ar(r?.effective_date),a=Ar(r?.end_date);return!(o&&o>n||a&&a<n)}).sort((r,o)=>Ar(o?.effective_date)-Ar(r?.effective_date))[0]||null},jo=(e,t,n,r)=>e<r&&n<t;var Xn=e=>{let t=new Date(e);return t.setHours(0,0,0,0),t},Zn=(e,t,n)=>{let r=new Date(e);return r.setHours(t,n,0,0),r},Nn=(e,t)=>{let n=new Date(e);return n.setDate(n.getDate()+t),n},ki=e=>e?Ft(e).getHours():null,_y=(e,t=[])=>{if(!t.length)return!1;let r=(e.getDay()+6)%7;return t.includes(r)},cm=(e,t,n)=>e>=t&&e<n;var _n=(e,t)=>new Date(e.getTime()+t*60*1e3);var Ar=e=>{if(!e)return null;let[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},Py=({day:e,hour:t,window:n})=>{if(!n||e<Xn(new Date))return!1;let r=Ar(n.effective_date),o=Ar(n.end_date);if(r&&r>e||o&&o<e||_y(e,n.weekends))return!1;let a=ki(n.start_time),i=ki(n.end_time);if(!cm(t,a,i))return!1;let l=ki(n.break_from),s=ki(n.break_to);return!cm(t,l,s)},fm=({day:e,hour:t,windows:n})=>{let r=Ao(e,n);return r?Py({day:e,hour:t,window:r}):!1};var Pn=e=>{if(!e)return"";let t=new Date(e);return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`},Ln=(e,t)=>{let[n,r]=t.split(":").map(Number),o=new Date(e);return o.setHours(n,r,0,0),Je(o)};function gu({service:e,onClose:t,onComplete:n,company_id:r}){let[o,a]=(0,M.useState)(null),[i,l]=(0,M.useState)([]),[s,u]=(0,M.useState)(null),[p,d]=(0,M.useState)(!1),[m,y]=(0,M.useState)(!1),[g,v]=(0,M.useState)({first_name:"",last_name:"",email:"",phone:""}),[w,f]=(0,M.useState)(1),h=!e.days_available||e.days_available.length===0?[]:e.days_available.map(I=>new Date(I+"T00:00:00"));(0,M.useEffect)(()=>{o&&k()},[o]);let k=async()=>{d(!0);try{let I=o.toISOString().split("T")[0],G=await fetch(`/api/employees/${e.employee.id}/frames?date=${I}&service_id=${e.id}`);if(!G.ok)throw new Error("Failed to fetch slots");let re=await G.json();l(re)}catch(I){console.error("Error fetching slots:",I),l([])}finally{d(!1)}},b=I=>{a(I),u(null),f(2)},E=I=>{u(I),f(3)},S=I=>{v({...g,[I.target.name]:I.target.value})},z=async I=>{I.preventDefault(),y(!0);try{let G=await fetch("/api/clients",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:g.first_name,last_name:g.last_name,email:g.email,phone:g.phone,company_id:r})});if(!G.ok){let Ge=await G.json(),ft=typeof Ge.errors=="string"?Ge.errors:Object.values(Ge.errors||{}).join(", ");throw new Error(ft)}let re=await G.json(),X=new Date(s.from),Se=new Date(s.to),Y={employee_id:e.employee.id,service_id:e.id,client_id:re.id,day:Je(o).split("T")[0],start_time:Je(X),end_time:Je(Se),price:parseFloat(e.price),state:"scheduled"},ne=await fetch("/api/time_slots",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Y)});if(!ne.ok){let Ge=await ne.json();throw new Error(Ge.errors||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u0456")}let Pe=await ne.json();console.log("Booking created:",Pe),n()}catch(G){console.error("Booking error:",G),alert(`\u041F\u043E\u043C\u0438\u043B\u043A\u0430: ${G.message}`)}finally{y(!1)}},H=I=>{let G=["\u041D\u0434","\u041F\u043D","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041F\u0442","\u0421\u0431"],re=["\u0441\u0456\u0447","\u043B\u044E\u0442","\u0431\u0435\u0440","\u043A\u0432\u0456","\u0442\u0440\u0430","\u0447\u0435\u0440","\u043B\u0438\u043F","\u0441\u0435\u0440","\u0432\u0435\u0440","\u0436\u043E\u0432","\u043B\u0438\u0441","\u0433\u0440\u0443"];return{day:G[I.getDay()],date:I.getDate(),month:re[I.getMonth()]}};function P(I,{decimals:G=0}={}){return new Intl.NumberFormat("uk-UA",{minimumFractionDigits:G,maximumFractionDigits:G}).format(I)+" \u0433\u0440\u043D"}let V=I=>new Date(I).toLocaleTimeString("uk-UA",{hour:"2-digit",minute:"2-digit"});return M.default.createElement("div",{className:"booking-overlay",onClick:t},M.default.createElement("div",{className:"booking-modal",onClick:I=>I.stopPropagation()},M.default.createElement("button",{className:"booking-close",onClick:t},"\xD7"),M.default.createElement("div",{className:"booking-header"},M.default.createElement("h2",null,"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 ",e.name),M.default.createElement("p",{className:"booking-subtitle"},"\u0437 ",e.employee.first_name," ",e.employee.last_name),M.default.createElement("div",{className:"booking-info"},M.default.createElement("span",null,e.duration," \u0445\u0432"),M.default.createElement("span",null,"\u2022"),M.default.createElement("span",null,P(e.price)))),M.default.createElement("div",{className:"booking-steps"},M.default.createElement("div",{className:`step ${w>=1?"active":""}`},M.default.createElement("span",{className:"step-number"},"1"),M.default.createElement("span",{className:"step-label"},"\u0414\u0430\u0442\u0430")),M.default.createElement("div",{className:`step ${w>=2?"active":""}`},M.default.createElement("span",{className:"step-number"},"2"),M.default.createElement("span",{className:"step-label"},"\u0427\u0430\u0441")),M.default.createElement("div",{className:`step ${w>=3?"active":""}`},M.default.createElement("span",{className:"step-number"},"3"),M.default.createElement("span",{className:"step-label"},"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"))),M.default.createElement("div",{className:"booking-content"},w===1&&M.default.createElement("div",{className:"date-selector"},M.default.createElement("h3",null,"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0432\u0456\u043B\u044C\u043D\u0443 \u0434\u0430\u0442\u0443"),M.default.createElement("div",{className:"date-grid"},h.map((I,G)=>{let re=H(I),X=o&&I.toDateString()===o.toDateString();return M.default.createElement("button",{key:G,className:`date-btn ${X?"selected":""}`,onClick:()=>b(I)},M.default.createElement("span",{className:"date-day"},re.day),M.default.createElement("span",{className:"date-number"},re.date),M.default.createElement("span",{className:"date-month"},re.month))}))),w===2&&M.default.createElement("div",{className:"time-selector"},M.default.createElement("button",{className:"back-btn",onClick:()=>f(1)},"\u2190 \u041D\u0430\u0437\u0430\u0434"),M.default.createElement("h3",null,"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0447\u0430\u0441 \u043D\u0430 ",o&&H(o).date," ",o&&H(o).month),p?M.default.createElement("div",{className:"loading-slots"},M.default.createElement("div",{className:"spinner"}),M.default.createElement("p",null,"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u0441\u043B\u043E\u0442\u0456\u0432...")):i.length>0?M.default.createElement("div",{className:"time-grid"},i.map((I,G)=>M.default.createElement("button",{key:G,className:`time-btn ${s===I?"selected":""}`,onClick:()=>E(I)},V(I.from)))):M.default.createElement("p",{className:"no-slots"},"\u041D\u0430 \u0446\u0435\u0439 \u0434\u0435\u043D\u044C \u043D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u0441\u043B\u043E\u0442\u0456\u0432")),w===3&&M.default.createElement("div",{className:"client-info"},M.default.createElement("button",{className:"back-btn",onClick:()=>f(2)},"\u2190 \u041D\u0430\u0437\u0430\u0434"),M.default.createElement("h3",null,"\u0412\u0430\u0448\u0456 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456"),M.default.createElement("div",{className:"selected-summary"},M.default.createElement("p",null,M.default.createElement("strong",null,"\u0414\u0430\u0442\u0430:")," ",o&&H(o).date," ",o&&H(o).month),M.default.createElement("p",null,M.default.createElement("strong",null,"\u0427\u0430\u0441:")," ",V(s.from))),M.default.createElement("form",{onSubmit:z},M.default.createElement("input",{type:"text",name:"first_name",placeholder:"\u0406\u043C'\u044F *",value:g.first_name,onChange:S,required:!0}),M.default.createElement("input",{type:"text",name:"last_name",placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 *",value:g.last_name,onChange:S,required:!0}),M.default.createElement("input",{type:"email",name:"email",placeholder:"Email *",value:g.email,onChange:S,required:!0}),M.default.createElement("input",{type:"tel",name:"phone",placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D *",value:g.phone,onChange:S,required:!0}),M.default.createElement("button",{type:"submit",className:"submit-booking-btn",disabled:m},m?"\u041E\u0431\u0440\u043E\u0431\u043A\u0430...":"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441"))))))}var pm=document.createElement("style");pm.textContent=`/* Scoped styles for CompanyWebsite - No conflicts with global app.css */

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
`;document.head.appendChild(pm);function vu(){let{companyName:e}=en(),[t,n]=(0,D.useState)(null),[r,o]=(0,D.useState)([]),[a,i]=(0,D.useState)(!0),[l,s]=(0,D.useState)(null),[u,p]=(0,D.useState)(null),[d,m]=(0,D.useState)("services"),[y,g]=(0,D.useState)(!1);(0,D.useEffect)(()=>{t&&(document.title=`\u0404 \u0432\u0456\u043A\u043E\u043D\u0446\u0435 \u2014 ${t?.name}`)},[t]),(0,D.useEffect)(()=>{e&&(async()=>{try{i(!0);let E=await fetch(`/api/companies/${e}`);if(!E.ok)throw new Error("Company not found");let S=await E.json();n(S.company),o(S.employees)}catch(E){s(E.message)}finally{i(!1)}})()},[e]);let v=b=>{p(b),g(!0)},w=()=>{g(!1),p(null)},f=()=>{g(!1),p(null),alert("\u0417\u0430\u043F\u0438\u0441 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E!")};if(a)return D.default.createElement("div",{className:"website-loading"},D.default.createElement("div",{className:"spinner"}),D.default.createElement("p",null,"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."));if(l)return D.default.createElement("div",{className:"website-error"},D.default.createElement("h2",null,"\u{1F614} \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"),D.default.createElement("p",null,l));if(!t)return null;let c=r?.flatMap(b=>b.services?.map(E=>({...E,employee:b}))||[])||[],h=b=>b?parseFloat(b).toFixed(0):"0",k=t.images?t.images.slice(0,3):[];return D.default.createElement("div",{className:"company-website"},D.default.createElement("header",{className:"site-header"},D.default.createElement("div",{className:"header-container"},D.default.createElement("div",{className:"logo-section"},t.logo&&D.default.createElement("img",{src:"/images"+t.logo,alt:t.name,className:"header-logo"}),D.default.createElement("h1",null,t.name)),D.default.createElement("button",{className:"book-now-btn",onClick:()=>{m("services"),document.querySelector(".tab-container")?.scrollIntoView({behavior:"smooth"})}},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F"))),k.length>0&&D.default.createElement("section",{className:"image-banner"},D.default.createElement("div",{className:"image-banner-container"},k.map((b,E)=>D.default.createElement("div",{key:E,className:"banner-image-wrapper"},D.default.createElement("img",{src:"/images"+b,alt:`${t.name} - \u0444\u043E\u0442\u043E ${E+1}`,className:"banner-image"}))))),D.default.createElement("nav",{className:"tab-navigation"},D.default.createElement("div",{className:"tab-container"},D.default.createElement("button",{className:`tab-btn ${d==="services"?"active":""}`,onClick:()=>m("services")},"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),D.default.createElement("button",{className:`tab-btn ${d==="team"?"active":""}`,onClick:()=>m("team")},"\u041A\u043E\u043C\u0430\u043D\u0434\u0430"),D.default.createElement("button",{className:`tab-btn ${d==="about"?"active":""}`,onClick:()=>m("about")},"\u041F\u0440\u043E \u043D\u0430\u0441"))),D.default.createElement("main",{className:"main-content"},D.default.createElement("div",{className:"content-container"},d==="services"&&D.default.createElement("section",{className:"services-content"},D.default.createElement("h2",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),c.length>0?D.default.createElement("div",{className:"service-list"},c.map((b,E)=>D.default.createElement("div",{key:E,className:"service-item"},D.default.createElement("div",{className:"service-info"},D.default.createElement("h3",{className:"service-name"},b.name),D.default.createElement("p",{className:"service-description"},b.description),D.default.createElement("div",{className:"service-meta"},D.default.createElement("span",{className:"service-duration"},b.duration," \u0445\u0432"),D.default.createElement("span",{className:"service-provider"},"\u0437 ",b.employee.first_name," ",b.employee.last_name))),D.default.createElement("div",{className:"service-booking"},D.default.createElement("div",{className:"service-price"},h(b.price)," \u0433\u0440\u043D"),D.default.createElement("button",{className:"book-service-btn",onClick:()=>v(b)},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F"))))):D.default.createElement("p",{className:"empty-message"},"\u041D\u0430\u0440\u0430\u0437\u0456 \u043D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u043F\u043E\u0441\u043B\u0443\u0433")),d==="team"&&D.default.createElement("section",{className:"team-content"},D.default.createElement("h2",null,"\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430"),r.length>0?D.default.createElement("div",{className:"team-list"},r.map(b=>D.default.createElement("div",{key:b.id,className:"team-item"},D.default.createElement("div",{className:"team-member-info"},D.default.createElement("div",{className:"member-photo"},b.image?D.default.createElement("img",{src:b.image,alt:`${b.first_name} ${b.last_name}`}):D.default.createElement("div",{className:"photo-placeholder"},b.first_name[0],b.last_name[0])),D.default.createElement("div",{className:"member-details"},D.default.createElement("h3",null,b.first_name," ",b.last_name),b.description&&D.default.createElement("p",{className:"member-bio"},b.description),b.services&&b.services.length>0&&D.default.createElement("div",{className:"member-services-list"},D.default.createElement("p",{className:"services-label"},"\u0421\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F:"),D.default.createElement("ul",null,b.services.map((E,S)=>D.default.createElement("li",{key:S},E.name))))))))):D.default.createElement("p",{className:"empty-message"},"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u044F")),d==="about"&&D.default.createElement("section",{className:"about-content"},D.default.createElement("h2",null,"\u041F\u0440\u043E \u043D\u0430\u0441"),D.default.createElement("div",{className:"about-details"},D.default.createElement("div",{className:"about-description"},D.default.createElement("h3",null,"\u041E\u043F\u0438\u0441"),D.default.createElement("p",null,t.description||"\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457!")),D.default.createElement("div",{className:"contact-details"},D.default.createElement("h3",null,"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"),t.address&&D.default.createElement("div",{className:"contact-row"},D.default.createElement("span",{className:"contact-label"},"\u0410\u0434\u0440\u0435\u0441\u0430"),D.default.createElement("span",{className:"contact-value"},t.address.street_line1,t.address.street_line2&&`, ${t.address.street_line2}`,D.default.createElement("br",null),t.address.city,", ",t.address.region," ",t.address.postal)),t.phone&&D.default.createElement("div",{className:"contact-row"},D.default.createElement("span",{className:"contact-label"},"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),D.default.createElement("span",{className:"contact-value"},D.default.createElement("a",{href:`tel:${t.phone}`},t.phone))),t.email&&D.default.createElement("div",{className:"contact-row"},D.default.createElement("span",{className:"contact-label"},"Email"),D.default.createElement("span",{className:"contact-value"},D.default.createElement("a",{href:`mailto:${t.email}`},t.email))),t.website&&D.default.createElement("div",{className:"contact-row"},D.default.createElement("span",{className:"contact-label"},"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"),D.default.createElement("span",{className:"contact-value"},D.default.createElement("a",{href:t.website,target:"_blank",rel:"noopener noreferrer"},t.website," ")))))))),D.default.createElement("footer",{className:"site-footer"},D.default.createElement("div",{className:"footer-container"},D.default.createElement("p",null,"\xA9 ",new Date().getFullYear()," ",t.name,". \u0412\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u043E."))),y&&u&&D.default.createElement(gu,{service:u,onClose:w,onComplete:f,company_id:t.id}))}var ue=J(Q());var N=J(Q());var mm=document.createElement("style");mm.textContent=`.form__error {
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
`;document.head.appendChild(mm);var Si=["\u041F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0411\u0430\u0440\u0431\u0435\u0440\u0448\u043E\u043F","\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0430 \u043F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0416\u0456\u043D\u043E\u0447\u0430 \u043F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0414\u0438\u0442\u044F\u0447\u0430 \u043F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0421\u0442\u0440\u0438\u0436\u043A\u0430","\u0423\u043A\u043B\u0430\u0434\u043A\u0430 \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041C\u0435\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0411\u0430\u043B\u0430\u044F\u0436","\u041E\u043C\u0431\u0440\u0435","\u0428\u0430\u0442\u0443\u0448","\u041A\u043E\u043B\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041E\u0441\u0432\u0456\u0442\u043B\u0435\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041A\u0435\u0440\u0430\u0442\u0438\u043D\u043E\u0432\u0435 \u0432\u0438\u043F\u0440\u044F\u043C\u043B\u0435\u043D\u043D\u044F","\u0411\u043E\u0442\u043E\u043A\u0441 \u0434\u043B\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041B\u0430\u043C\u0456\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0425\u0456\u043C\u0456\u0447\u043D\u0430 \u0437\u0430\u0432\u0438\u0432\u043A\u0430","\u0411\u0456\u043E\u0437\u0430\u0432\u0438\u0432\u043A\u0430","\u041A\u0430\u0440\u0432\u0456\u043D\u0433","\u0410\u0444\u0440\u043E\u043F\u043B\u0435\u0442\u0456\u043D\u043D\u044F","\u041F\u043B\u0435\u0442\u0456\u043D\u043D\u044F \u043A\u0456\u0441","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0456 \u0437\u0430\u0447\u0456\u0441\u043A\u0438","\u0412\u0435\u0447\u0456\u0440\u043D\u0456 \u0437\u0430\u0447\u0456\u0441\u043A\u0438","\u0414\u0440\u0435\u0434\u0438","\u0411\u0440\u0435\u0439\u0434\u0438","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041A\u0430\u043F\u0441\u0443\u043B\u044C\u043D\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u0421\u0442\u0440\u0456\u0447\u043A\u043E\u0432\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u0440\u0438\u0445\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u043A\u0456\u0440\u0438 \u0433\u043E\u043B\u043E\u0432\u0438","\u041C\u0435\u0437\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041F\u043B\u0430\u0437\u043C\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041C\u0430\u043D\u0456\u043A\u044E\u0440","\u041F\u0435\u0434\u0438\u043A\u044E\u0440","\u0410\u043F\u0430\u0440\u0430\u0442\u043D\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0404\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u041A\u043E\u043C\u0431\u0456\u043D\u043E\u0432\u0430\u043D\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0410\u043F\u0430\u0440\u0430\u0442\u043D\u0438\u0439 \u043F\u0435\u0434\u0438\u043A\u044E\u0440","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u043F\u0435\u0434\u0438\u043A\u044E\u0440","\u041C\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u043F\u0435\u0434\u0438\u043A\u044E\u0440","\u0421\u041F\u0410-\u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0421\u041F\u0410-\u043F\u0435\u0434\u0438\u043A\u044E\u0440","\u041F\u043E\u043A\u0440\u0438\u0442\u0442\u044F \u0433\u0435\u043B\u044C-\u043B\u0430\u043A\u043E\u043C","\u0417\u043C\u0456\u0446\u043D\u0435\u043D\u043D\u044F \u043D\u0456\u0433\u0442\u0456\u0432","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0456\u0433\u0442\u0456\u0432","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0435\u043B\u0435\u043C","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043A\u0440\u0438\u043B\u043E\u043C","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043D\u0456\u0433\u0442\u0456\u0432","\u0414\u0438\u0437\u0430\u0439\u043D \u043D\u0456\u0433\u0442\u0456\u0432","\u041D\u0435\u0439\u043B-\u0430\u0440\u0442","\u0424\u0440\u0435\u043D\u0447","\u041E\u043C\u0431\u0440\u0435 \u043D\u0430 \u043D\u0456\u0433\u0442\u044F\u0445","\u0421\u0442\u0435\u043C\u043F\u0456\u043D\u0433","\u041F\u0430\u0440\u0430\u0444\u0456\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0440\u0443\u043A","\u041F\u0430\u0440\u0430\u0444\u0456\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u043D\u0456\u0433","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0440\u043E\u0441\u0448\u043E\u0433\u043E \u043D\u0456\u0433\u0442\u044F","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043C\u043E\u0437\u043E\u043B\u0456\u0432","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043D\u0430\u0442\u043E\u043F\u0442\u0438\u0448\u0456\u0432","\u0421\u041F\u0410","\u0421\u041F\u0410-\u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438","\u0425\u0430\u043C\u0430\u043C","\u0422\u0443\u0440\u0435\u0446\u044C\u043A\u0430 \u043B\u0430\u0437\u043D\u044F","\u0424\u0456\u043D\u0441\u044C\u043A\u0430 \u0441\u0430\u0443\u043D\u0430","\u0406\u043D\u0444\u0440\u0430\u0447\u0435\u0440\u0432\u043E\u043D\u0430 \u0441\u0430\u0443\u043D\u0430","\u041A\u0435\u0434\u0440\u043E\u0432\u0430 \u0431\u043E\u0447\u043A\u0430","\u0413\u0456\u0434\u0440\u043E\u043C\u0430\u0441\u0430\u0436","\u0424\u043B\u043E\u0430\u0442\u0438\u043D\u0433","\u0422\u0430\u043B\u0430\u0441\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0410\u0440\u043E\u043C\u0430\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0421\u0442\u043E\u0443\u043D\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041C\u0430\u0441\u0430\u0436","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0420\u043E\u0437\u0441\u043B\u0430\u0431\u043B\u044E\u044E\u0447\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041B\u0456\u043A\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041C\u0430\u0441\u0430\u0436 \u0441\u043F\u0438\u043D\u0438","\u041C\u0430\u0441\u0430\u0436 \u0448\u0438\u0457","\u041C\u0430\u0441\u0430\u0436 \u0433\u043E\u043B\u043E\u0432\u0438","\u041C\u0430\u0441\u0430\u0436 \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u0421\u043A\u0443\u043B\u044C\u043F\u0442\u0443\u0440\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436 \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u0411\u0443\u043A\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041C\u0430\u0441\u0430\u0436 \u0432\u0441\u044C\u043E\u0433\u043E \u0442\u0456\u043B\u0430","\u0410\u043D\u0442\u0438\u0446\u0435\u043B\u044E\u043B\u0456\u0442\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041B\u0456\u043C\u0444\u043E\u0434\u0440\u0435\u043D\u0430\u0436\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0412\u0430\u043A\u0443\u0443\u043C\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041C\u0430\u0441\u0430\u0436 \u0431\u0430\u043D\u043A\u0430\u043C\u0438","\u041C\u0435\u0434\u043E\u0432\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0422\u0430\u0439\u0441\u044C\u043A\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0411\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0410\u044E\u0440\u0432\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0428\u0432\u0435\u0434\u0441\u044C\u043A\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0428\u0456\u0430\u0446\u0443","\u041C\u0430\u0441\u0430\u0436 \u0433\u0430\u0440\u044F\u0447\u0438\u043C \u043A\u0430\u043C\u0456\u043D\u043D\u044F\u043C","\u041C\u0430\u0441\u0430\u0436 \u0431\u0430\u043C\u0431\u0443\u043A\u043E\u0432\u0438\u043C\u0438 \u043F\u0430\u043B\u0438\u0447\u043A\u0430\u043C\u0438","\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041C\u0430\u0441\u0430\u0436 \u0434\u043B\u044F \u0432\u0430\u0433\u0456\u0442\u043D\u0438\u0445","\u041F\u043E\u0441\u0442\u0456\u0437\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u043D\u0430 \u0440\u0435\u043B\u0430\u043A\u0441\u0430\u0446\u0456\u044F","\u041C\u0456\u043E\u0444\u0430\u0441\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u043B\u0456\u0437","\u041E\u0441\u0442\u0435\u043E\u043F\u0430\u0442\u0456\u044F","\u041C\u0430\u043D\u0443\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0425\u0456\u0440\u043E\u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430","\u0420\u0435\u0444\u043B\u0435\u043A\u0441\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0406\u0433\u043B\u043E\u0440\u0435\u0444\u043B\u0435\u043A\u0441\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0410\u043A\u0443\u043F\u0443\u043D\u043A\u0442\u0443\u0440\u0430","\u0412\u0456\u0441\u0446\u0435\u0440\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u0427\u0438\u0441\u0442\u043A\u0430 \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u041C\u0435\u0445\u0430\u043D\u0456\u0447\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u0412\u0430\u043A\u0443\u0443\u043C\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u0410\u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u041A\u043E\u043C\u0431\u0456\u043D\u043E\u0432\u0430\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u041F\u0456\u043B\u0456\u043D\u0433","\u0425\u0456\u043C\u0456\u0447\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041C\u0435\u0445\u0430\u043D\u0456\u0447\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041B\u0430\u0437\u0435\u0440\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u0420\u0435\u0442\u0438\u043D\u043E\u0454\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u0413\u043B\u0456\u043A\u043E\u043B\u0435\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041C\u0438\u0433\u0434\u0430\u043B\u0435\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041C\u043E\u043B\u043E\u0447\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u0421\u0430\u043B\u0456\u0446\u0438\u043B\u043E\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041F\u0420\u0425-\u043F\u0456\u043B\u0456\u043D\u0433","\u0414\u0436\u0435\u0441\u0441\u043D\u0435\u0440\u0430 \u043F\u0456\u043B\u0456\u043D\u0433","\u0410\u043B\u043C\u0430\u0437\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041A\u043E\u0440\u0430\u043B\u043E\u0432\u0430 \u0448\u043B\u0456\u0444\u043E\u0432\u043A\u0430","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u043E\u0431\u043B\u0438\u0447\u0447\u044F\u043C","\u0417\u0432\u043E\u043B\u043E\u0436\u0443\u044E\u0447\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u0416\u0438\u0432\u0438\u043B\u044C\u043D\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u041E\u0447\u0438\u0449\u0443\u044E\u0447\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u041F\u0440\u043E\u0442\u0438\u0437\u0430\u043F\u0430\u043B\u044C\u043D\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u041F\u0440\u043E\u0442\u0438\u0441\u0442\u0430\u0440\u0456\u043D\u0433\u043E\u0432\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u041B\u0456\u0444\u0442\u0438\u043D\u0433-\u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u0410\u043B\u044C\u0433\u0456\u043D\u0430\u0442\u043D\u0430 \u043C\u0430\u0441\u043A\u0430","\u041A\u043E\u043B\u0430\u0433\u0435\u043D\u043E\u0432\u0430 \u043C\u0430\u0441\u043A\u0430","\u0412\u0443\u0433\u0456\u043B\u044C\u043D\u0430 \u043C\u0430\u0441\u043A\u0430","\u0417\u043E\u043B\u043E\u0442\u0430 \u043C\u0430\u0441\u043A\u0430","\u0421\u0440\u0456\u0431\u043D\u0430 \u043C\u0430\u0441\u043A\u0430","\u0411\u0456\u043E\u0446\u0435\u043B\u044E\u043B\u043E\u0437\u043D\u0430 \u043C\u0430\u0441\u043A\u0430","\u041F\u0430\u0440\u0430\u0444\u0456\u043D\u043E\u0432\u0430 \u043C\u0430\u0441\u043A\u0430","\u0406\u043D'\u0454\u043A\u0446\u0456\u0457 \u043A\u0440\u0430\u0441\u0438","\u0411\u043E\u0442\u043E\u043A\u0441","\u0414\u0438\u0441\u043F\u043E\u0440\u0442","\u041A\u0441\u0435\u043E\u043C\u0456\u043D","\u0424\u0456\u043B\u0435\u0440\u0438","\u0413\u0456\u0430\u043B\u0443\u0440\u043E\u043D\u043E\u0432\u0430 \u043A\u0438\u0441\u043B\u043E\u0442\u0430","\u041A\u043E\u043D\u0442\u0443\u0440\u043D\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0417\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u043D\u044F \u0433\u0443\u0431","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043D\u043E\u0441\u043E\u0433\u0443\u0431\u043D\u0438\u0445 \u0441\u043A\u043B\u0430\u0434\u043E\u043A","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043D\u043E\u0441\u0430","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043F\u0456\u0434\u0431\u043E\u0440\u0456\u0434\u0434\u044F","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0441\u043A\u0443\u043B","\u0411\u0456\u043E\u0440\u0435\u0432\u0456\u0442\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u041C\u0435\u0437\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u041F\u043B\u0430\u0437\u043C\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u041F\u043B\u0430\u0437\u043C\u043E\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0411\u0456\u043E\u0430\u0440\u043C\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u0435\u0434\u0435\u0440\u043C\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0411\u0456\u043E\u0440\u0435\u043F\u0430\u0440\u0430\u0446\u0456\u044F","\u041F\u043E\u043B\u0456\u0444\u043E\u0441\u0444\u0430\u0442\u043D\u0456 \u043D\u0438\u0442\u043A\u0438","\u041C\u0435\u0437\u043E\u043D\u0438\u0442\u043A\u0438","\u041D\u0438\u0442\u043A\u043E\u0432\u0438\u0439 \u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0410\u043F\u0430\u0440\u0430\u0442\u043D\u0430 \u043A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F","RF-\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0420\u0430\u0434\u0456\u043E\u0447\u0430\u0441\u0442\u043E\u0442\u043D\u0438\u0439 \u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0438\u0439 SMAS-\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0438\u0439 \u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0424\u043E\u043D\u043E\u0444\u043E\u0440\u0435\u0437","\u041C\u0456\u043A\u0440\u043E\u0441\u0442\u0440\u0443\u043C\u043E\u0432\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0414\u0430\u0440\u0441\u043E\u043D\u0432\u0430\u043B\u044C","\u041C\u0456\u043E\u0441\u0442\u0438\u043C\u0443\u043B\u044F\u0446\u0456\u044F","\u0413\u0430\u043B\u044C\u0432\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F","\u0406\u043E\u043D\u043E\u0444\u043E\u0440\u0435\u0437","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u043E\u0440\u0430\u0446\u0456\u044F","\u041A\u0440\u0456\u043E\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u041A\u0440\u0456\u043E\u043C\u0430\u0441\u0430\u0436","\u0412\u0430\u043A\u0443\u0443\u043C\u043D\u043E-\u0440\u043E\u043B\u0438\u043A\u043E\u0432\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","LPG-\u043C\u0430\u0441\u0430\u0436","\u041A\u0430\u0432\u0456\u0442\u0430\u0446\u0456\u044F","\u041B\u0456\u043F\u043E\u043B\u0456\u0437","\u041F\u0440\u0435\u0441\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041B\u0456\u043C\u0444\u043E\u0434\u0440\u0435\u043D\u0430\u0436 \u0430\u043F\u0430\u0440\u0430\u0442\u043D\u0438\u0439","\u041B\u0430\u0437\u0435\u0440\u043D\u0456 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438","\u041B\u0430\u0437\u0435\u0440\u043D\u0435 \u043E\u043C\u043E\u043B\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u041B\u0430\u0437\u0435\u0440\u043D\u0430 \u0431\u0456\u043E\u0440\u0435\u0432\u0456\u0442\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0424\u0440\u0430\u043A\u0446\u0456\u0439\u043D\u0438\u0439 \u043B\u0430\u0437\u0435\u0440","\u041B\u0430\u0437\u0435\u0440\u043D\u0438\u0439 \u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0424\u043E\u0442\u043E\u043E\u043C\u043E\u043B\u043E\u0434\u0436\u0435\u043D\u043D\u044F","IPL-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0421\u0432\u0456\u0442\u043B\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","LED-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041A\u0438\u0441\u043D\u0435\u0432\u0456 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438","\u041A\u0438\u0441\u043D\u0435\u0432\u0438\u0439 \u043A\u0443\u043F\u043E\u043B","\u041E\u043A\u0441\u0438\u0433\u0435\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041A\u0430\u0440\u0431\u043E\u043A\u0441\u0438\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041E\u0437\u043E\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0456\u0440\u0443\u0434\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F'\u044F\u0432\u043A\u0430\u043C\u0438","\u0410\u043F\u0456\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0422\u0430\u0442\u0443\u0430\u0436","\u041F\u0435\u0440\u043C\u0430\u043D\u0435\u043D\u0442\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0422\u0430\u0442\u0443\u0430\u0436 \u0431\u0440\u0456\u0432","\u041F\u0443\u0434\u0440\u043E\u0432\u0456 \u0431\u0440\u043E\u0432\u0438","\u0412\u043E\u043B\u043E\u0441\u043A\u043E\u0432\u0430 \u0442\u0435\u0445\u043D\u0456\u043A\u0430","\u041E\u043C\u0431\u0440\u0435 \u0431\u0440\u043E\u0432\u0438","\u0422\u0430\u0442\u0443\u0430\u0436 \u0433\u0443\u0431","\u0410\u043A\u0432\u0430\u0440\u0435\u043B\u044C\u043D\u0456 \u0433\u0443\u0431\u0438","\u041A\u043E\u043D\u0442\u0443\u0440 \u0433\u0443\u0431","\u0422\u0430\u0442\u0443\u0430\u0436 \u043E\u0447\u0435\u0439","\u041C\u0456\u0436\u0432\u0456\u0439\u043D\u0438\u0439 \u043F\u0440\u043E\u0441\u0442\u0456\u0440","\u0421\u0442\u0440\u0456\u043B\u043A\u0438","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0442\u0430\u0442\u0443\u0430\u0436\u0443","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0442\u0430\u0442\u0443\u0430\u0436\u0443","\u0411\u0440\u043E\u0432\u0438 \u0442\u0430 \u0432\u0456\u0457","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0431\u0440\u0456\u0432","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0440\u0456\u0432","\u041B\u0430\u043C\u0456\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0440\u0456\u0432","\u0410\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \u0431\u0440\u0456\u0432","\u0411\u0456\u043E\u0442\u0430\u0442\u0443\u0430\u0436 \u0431\u0440\u0456\u0432","\u0425\u043D\u0430 \u0434\u043B\u044F \u0431\u0440\u0456\u0432","\u0414\u043E\u0432\u0433\u043E\u0442\u0440\u0438\u0432\u0430\u043B\u0430 \u0443\u043A\u043B\u0430\u0434\u043A\u0430 \u0431\u0440\u0456\u0432","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0439","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","2D \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","3D \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u041E\u0431'\u0454\u043C\u043D\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u041C\u0435\u0433\u0430-\u043E\u0431'\u0454\u043C","\u0413\u043E\u043B\u043B\u0456\u0432\u0443\u0434\u0441\u044C\u043A\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0432\u0456\u0439","\u0417\u043D\u044F\u0442\u0442\u044F \u0432\u0456\u0439","\u041B\u0430\u043C\u0456\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0439","\u0411\u043E\u0442\u043E\u043A\u0441 \u0432\u0456\u0439","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0439","\u0425\u0456\u043C\u0456\u0447\u043D\u0430 \u0437\u0430\u0432\u0438\u0432\u043A\u0430 \u0432\u0456\u0439","\u0411\u0456\u043E\u0437\u0430\u0432\u0438\u0432\u043A\u0430 \u0432\u0456\u0439","\u041B\u0456\u0444\u0442\u0438\u043D\u0433 \u0432\u0456\u0439","\u0415\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0412\u043E\u0441\u043A\u043E\u0432\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0412\u0430\u043A\u0441\u0438\u043D\u0433","\u0428\u0443\u0433\u0430\u0440\u0456\u043D\u0433","\u0426\u0443\u043A\u0440\u043E\u0432\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u041B\u0430\u0437\u0435\u0440\u043D\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0414\u0456\u043E\u0434\u043D\u0430 \u043B\u0430\u0437\u0435\u0440\u043D\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0438\u0442\u043E\u0432\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0424\u043E\u0442\u043E\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0415\u043F\u0456\u043B\u044F\u0446\u0456\u044F \u043D\u0438\u0442\u043A\u043E\u044E","\u0422\u0440\u0438\u0434\u0456\u043D\u0433","ELOS-\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","AFT-\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0415\u043D\u0437\u0438\u043C\u043D\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0414\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043D\u0435\u0431\u0430\u0436\u0430\u043D\u043E\u0433\u043E \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0421\u043E\u043B\u044F\u0440\u0456\u0439","\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u043E\u043B\u044F\u0440\u0456\u0439","\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u043E\u043B\u044F\u0440\u0456\u0439","\u0422\u0443\u0440\u0431\u043E\u0441\u043E\u043B\u044F\u0440\u0456\u0439","\u0417\u0430\u0441\u043C\u0430\u0433\u0430","\u0410\u0432\u0442\u043E\u0437\u0430\u0441\u043C\u0430\u0433\u0430","\u0421\u043F\u0440\u0435\u0439-\u0437\u0430\u0441\u043C\u0430\u0433\u0430","\u041C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430 \u0437\u0430\u0441\u043C\u0430\u0433\u0430","\u0411\u0440\u043E\u043D\u0437\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0456\u043B\u0430","\u0424\u0456\u0442\u043D\u0435\u0441","\u0422\u0440\u0435\u043D\u0430\u0436\u0435\u0440\u043D\u0430 \u0437\u0430\u043B\u0430","\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0413\u0440\u0443\u043F\u043E\u0432\u0456 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0424\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0442\u0440\u0435\u043D\u0456\u043D\u0433","\u041A\u0440\u043E\u0441\u0444\u0456\u0442","CrossFit","\u0411\u043E\u0434\u0456\u0431\u0456\u043B\u0434\u0438\u043D\u0433","\u041F\u0430\u0443\u0435\u0440\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0412\u0430\u0436\u043A\u0430 \u0430\u0442\u043B\u0435\u0442\u0438\u043A\u0430","\u041A\u0430\u0440\u0434\u0456\u043E\u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0421\u0438\u043B\u043E\u0432\u0456 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u041A\u0440\u0443\u0433\u043E\u0432\u0438\u0439 \u0442\u0440\u0435\u043D\u0456\u043D\u0433","\u0406\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u0456 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","HIIT","\u0422\u0430\u0431\u0430\u0442\u0430","\u0417\u0443\u043C\u0431\u0430","\u0410\u0435\u0440\u043E\u0431\u0456\u043A\u0430","\u0421\u0442\u0435\u043F-\u0430\u0435\u0440\u043E\u0431\u0456\u043A\u0430","\u0410\u043A\u0432\u0430-\u0430\u0435\u0440\u043E\u0431\u0456\u043A\u0430","\u0410\u043A\u0432\u0430\u0444\u0456\u0442\u043D\u0435\u0441","\u0410\u043A\u0432\u0430\u0433\u0456\u043C\u043D\u0430\u0441\u0442\u0438\u043A\u0430","\u0419\u043E\u0433\u0430","\u0425\u0430\u0442\u0445\u0430-\u0439\u043E\u0433\u0430","\u0412\u0456\u043D\u044C\u044F\u0441\u0430-\u0439\u043E\u0433\u0430","\u0410\u0448\u0442\u0430\u043D\u0433\u0430-\u0439\u043E\u0433\u0430","\u041A\u0443\u043D\u0434\u0430\u043B\u0456\u043D\u0456-\u0439\u043E\u0433\u0430","\u0411\u0456\u043A\u0440\u0430\u043C-\u0439\u043E\u0433\u0430","\u0413\u0430\u0440\u044F\u0447\u0430 \u0439\u043E\u0433\u0430","\u0406\u043D\u044C-\u0439\u043E\u0433\u0430","\u0419\u043E\u0433\u0430-\u043D\u0456\u0434\u0440\u0430","\u0424\u043B\u0430\u0439-\u0439\u043E\u0433\u0430","\u041F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0430 \u0439\u043E\u0433\u0430","\u0410\u043D\u0442\u0456\u0433\u0440\u0430\u0432\u0456\u0442\u0430\u0446\u0456\u0439\u043D\u0430 \u0439\u043E\u0433\u0430","\u041F\u0456\u043B\u0430\u0442\u0435\u0441","\u041A\u0430\u043B\u043B\u0430\u043D\u0435\u0442\u0438\u043A\u0430","\u0421\u0442\u0440\u0435\u0442\u0447\u0438\u043D\u0433","\u0420\u043E\u0437\u0442\u044F\u0436\u043A\u0430","\u0428\u043F\u0430\u0433\u0430\u0442","\u0411\u043E\u0434\u0456\u0444\u043B\u0435\u043A\u0441","\u041E\u043A\u0441\u0456\u0441\u0430\u0439\u0437","\u0422\u0420\u0425","\u0424\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0442\u0440\u0435\u043D\u0456\u043D\u0433 \u0437 \u043F\u0435\u0442\u043B\u044F\u043C\u0438","\u041A\u0456\u043A\u0431\u043E\u043A\u0441\u0438\u043D\u0433","\u0411\u043E\u043A\u0441","\u0422\u0430\u0439\u0441\u044C\u043A\u0438\u0439 \u0431\u043E\u043A\u0441","\u041C\u0443\u0430\u0439 \u0422\u0430\u0439","\u041C\u041C\u0410","\u0417\u043C\u0456\u0448\u0430\u043D\u0456 \u0431\u043E\u0439\u043E\u0432\u0456 \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432\u0430","\u041A\u0430\u0440\u0430\u0442\u0435","\u0422\u0445\u0435\u043A\u0432\u043E\u043D\u0434\u043E","\u0414\u0437\u044E\u0434\u043E","\u0421\u0430\u043C\u0431\u043E","\u0410\u0439\u043A\u0456\u0434\u043E","\u041A\u0430\u043F\u043E\u0435\u0439\u0440\u0430","\u0422\u0430\u043D\u0446\u0456","\u0411\u0430\u043B\u044C\u043D\u0456 \u0442\u0430\u043D\u0446\u0456","\u0421\u0430\u043B\u044C\u0441\u0430","\u0411\u0430\u0447\u0430\u0442\u0430","\u041A\u0456\u0437\u043E\u043C\u0431\u0430","\u0422\u0432\u0435\u0440\u043A","\u0411\u043E\u0434\u0456-\u0431\u0430\u043B\u0435\u0442","\u0417\u0443\u043C\u0431\u0430","\u0421\u0442\u0440\u0438\u043F-\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","Pole dance","\u0422\u0430\u043D\u0435\u0446\u044C \u043D\u0430 \u043F\u0456\u043B\u043E\u043D\u0456","\u0421\u0445\u0456\u0434\u043D\u0456 \u0442\u0430\u043D\u0446\u0456","\u0422\u0430\u043D\u0435\u0446\u044C \u0436\u0438\u0432\u043E\u0442\u0430","\u0421\u0443\u0447\u0430\u0441\u043D\u0456 \u0442\u0430\u043D\u0446\u0456","\u0425\u0456\u043F-\u0445\u043E\u043F","\u0411\u0440\u0435\u0439\u043A-\u0434\u0430\u043D\u0441","\u041A\u043E\u043D\u0442\u0435\u043C\u043F\u043E\u0440\u0430\u0440\u0456","\u0414\u0436\u0430\u0437-\u0444\u0430\u043D\u043A","\u0411\u0430\u0441\u0435\u0439\u043D","\u041F\u043B\u0430\u0432\u0430\u043D\u043D\u044F","\u0410\u043A\u0432\u0430-\u0430\u0435\u0440\u043E\u0431\u0456\u043A\u0430","\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u043F\u043B\u0430\u0432\u0430\u043D\u043D\u044E","\u0414\u0438\u0442\u044F\u0447\u0435 \u043F\u043B\u0430\u0432\u0430\u043D\u043D\u044F","\u0413\u0440\u0443\u0434\u043D\u0438\u0447\u043A\u043E\u0432\u0435 \u043F\u043B\u0430\u0432\u0430\u043D\u043D\u044F","\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u0435 \u043F\u043B\u0430\u0432\u0430\u043D\u043D\u044F","\u0421\u0430\u0443\u043D\u0430","\u0424\u0456\u043D\u0441\u044C\u043A\u0430 \u0441\u0430\u0443\u043D\u0430","\u0420\u043E\u0441\u0456\u0439\u0441\u044C\u043A\u0430 \u043B\u0430\u0437\u043D\u044F","\u0422\u0443\u0440\u0435\u0446\u044C\u043A\u0430 \u043B\u0430\u0437\u043D\u044F","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0430 \u043B\u0430\u0437\u043D\u044F","\u041E\u0444\u0443\u0440\u043E","\u041F\u0430\u0440\u0438\u043B\u044C\u043D\u044F","\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u0422\u0435\u0440\u0430\u043F\u0435\u0432\u0442\u0438\u0447\u043D\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0430\u0440\u0456\u0454\u0441\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0443\u043B\u044C\u043F\u0456\u0442\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0435\u0440\u0456\u043E\u0434\u043E\u043D\u0442\u0438\u0442\u0443","\u0415\u043D\u0434\u043E\u0434\u043E\u043D\u0442\u0438\u0447\u043D\u0435 \u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u043B\u043E\u043C\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u0437\u0443\u0431\u0456\u0432","\u0425\u0443\u0434\u043E\u0436\u043D\u044F \u0440\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F","\u0415\u0441\u0442\u0435\u0442\u0438\u0447\u043D\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u0425\u0456\u0440\u0443\u0440\u0433\u0456\u0447\u043D\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0443\u0431\u0430 \u043C\u0443\u0434\u0440\u043E\u0441\u0442\u0456","\u0421\u043A\u043B\u0430\u0434\u043D\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F","\u0420\u0435\u0437\u0435\u043A\u0446\u0456\u044F \u0432\u0435\u0440\u0445\u0456\u0432\u043A\u0438 \u043A\u043E\u0440\u0435\u043D\u044F","\u0426\u0438\u0441\u0442\u0435\u043A\u0442\u043E\u043C\u0456\u044F","\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u044F\u0441\u0435\u043D","\u0406\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F \u0437\u0443\u0431\u0456\u0432","\u041E\u0434\u043D\u043E\u043C\u043E\u043C\u0435\u043D\u0442\u043D\u0430 \u0456\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0430 \u0456\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F","\u0411\u0430\u0437\u0430\u043B\u044C\u043D\u0430 \u0456\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F","All-on-4","All-on-6","\u0421\u0438\u043D\u0443\u0441-\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u041A\u0456\u0441\u0442\u043A\u043E\u0432\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041E\u0440\u0442\u043E\u043F\u0435\u0434\u0438\u0447\u043D\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041F\u0440\u043E\u0442\u0435\u0437\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u041A\u043E\u0440\u043E\u043D\u043A\u0438","\u041C\u0435\u0442\u0430\u043B\u043E\u043A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0456 \u043A\u043E\u0440\u043E\u043D\u043A\u0438","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0456 \u043A\u043E\u0440\u043E\u043D\u043A\u0438","\u0426\u0438\u0440\u043A\u0443\u043B\u044F\u0440\u043D\u0456 \u043A\u043E\u0440\u043E\u043D\u043A\u0438","\u0412\u0456\u043D\u0456\u0440\u0438","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0456 \u0432\u0456\u043D\u0456\u0440\u0438","\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043D\u0456 \u0432\u0456\u043D\u0456\u0440\u0438","\u041B\u044E\u043C\u0456\u043D\u0456\u0440\u0438","\u041C\u043E\u0441\u0442\u0438","\u0417\u043D\u0456\u043C\u043D\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u0427\u0430\u0441\u0442\u043A\u043E\u0432\u043E \u0437\u043D\u0456\u043C\u043D\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u041F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0437\u043D\u0456\u043C\u043D\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u0411\u044E\u0433\u0435\u043B\u044C\u043D\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u041D\u0435\u0439\u043B\u043E\u043D\u043E\u0432\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u041F\u0440\u043E\u0442\u0435\u0437\u0438 \u043D\u0430 \u0456\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0445","\u041E\u0440\u0442\u043E\u0434\u043E\u043D\u0442\u0456\u044F","\u0412\u0438\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u043A\u0443\u0441\u0443","\u0411\u0440\u0435\u043A\u0435\u0442\u0438","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u0421\u0430\u043F\u0444\u0456\u0440\u043E\u0432\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u041B\u0456\u043D\u0433\u0432\u0430\u043B\u044C\u043D\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u0421\u0430\u043C\u043E\u043B\u0456\u0433\u0443\u044E\u0447\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u0415\u043B\u0430\u0439\u043D\u0435\u0440\u0438","Invisalign","\u041A\u0430\u043F\u0438 \u0434\u043B\u044F \u0432\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F","\u041F\u043B\u0430\u0441\u0442\u0438\u043D\u043A\u0438","\u0422\u0440\u0435\u0439\u043D\u0435\u0440\u0438","\u041F\u0430\u0440\u043E\u0434\u043E\u043D\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u044F\u0441\u0435\u043D","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u0434\u043E\u043D\u0442\u0438\u0442\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u0434\u043E\u043D\u0442\u043E\u0437\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0456\u043D\u0433\u0456\u0432\u0456\u0442\u0443","\u041A\u044E\u0440\u0435\u0442\u0430\u0436","\u0428\u0438\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0412\u0435\u043A\u0442\u043E\u0440-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0456\u0433\u0456\u0454\u043D\u0430 \u043F\u043E\u0440\u043E\u0436\u043D\u0438\u043D\u0438 \u0440\u043E\u0442\u0430","\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430 \u0437\u0443\u0431\u0456\u0432","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","Air Flow","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0424\u0442\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0412\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u041A\u0430\u0431\u0456\u043D\u0435\u0442\u043D\u0435 \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","Zoom \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u041B\u0430\u0437\u0435\u0440\u043D\u0435 \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u0425\u0456\u043C\u0456\u0447\u043D\u0435 \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u0414\u043E\u043C\u0430\u0448\u043D\u0454 \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u0414\u0438\u0442\u044F\u0447\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u043B\u043E\u0447\u043D\u0438\u0445 \u0437\u0443\u0431\u0456\u0432","\u0413\u0435\u0440\u043C\u0435\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u0444\u0456\u0441\u0443\u0440","\u0424\u0442\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0438\u0442\u044F\u0447\u0438\u0445 \u0437\u0443\u0431\u0456\u0432","\u0421\u0440\u0456\u0431\u043B\u0456\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u041F\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u0430 \u0445\u0456\u0440\u0443\u0440\u0433\u0456\u044F","\u0420\u0438\u043D\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0411\u043B\u0435\u0444\u0430\u0440\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041E\u0442\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041C\u0435\u043D\u0442\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041B\u0456\u043F\u043E\u0441\u0430\u043A\u0446\u0456\u044F","\u0410\u0431\u0434\u043E\u043C\u0456\u043D\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u0424\u0435\u0439\u0441\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u0448\u0438\u0457","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u043B\u043E\u0431\u0430","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u0441\u0442\u0435\u0433\u043E\u043D","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u0440\u0443\u043A","\u0417\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u043D\u044F \u0433\u0440\u0443\u0434\u0435\u0439","\u0417\u043C\u0435\u043D\u0448\u0435\u043D\u043D\u044F \u0433\u0440\u0443\u0434\u0435\u0439","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u0433\u0440\u0443\u0434\u0435\u0439","\u041C\u0430\u0441\u0442\u043E\u043F\u0435\u043A\u0441\u0456\u044F","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0441\u043E\u0441\u043A\u0456\u0432","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0430\u0440\u0435\u043E\u043B","\u0417\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u043D\u044F \u0441\u0456\u0434\u043D\u0438\u0446\u044C","\u0413\u043B\u044E\u0442\u0435\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0406\u043D\u0442\u0438\u043C\u043D\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041B\u0430\u0431\u0456\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0412\u0430\u0433\u0456\u043D\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0414\u0435\u0440\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043A\u043D\u0435","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0443\u0433\u0440\u0456\u0432","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u0442\u0430\u043A\u043D\u0435","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0440\u043E\u0437\u0430\u0446\u0435\u0430","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u043F\u0435\u0440\u043E\u0437\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0435\u0440\u043C\u0430\u0442\u0438\u0442\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0435\u043A\u0437\u0435\u043C\u0438","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0441\u043E\u0440\u0456\u0430\u0437\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0442\u0438\u043B\u0456\u0433\u043E","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043D\u043E\u0432\u043E\u0443\u0442\u0432\u043E\u0440\u0435\u043D\u044C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0431\u043E\u0440\u043E\u0434\u0430\u0432\u043E\u043A","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u043F\u0456\u043B\u043E\u043C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0440\u043E\u0434\u0438\u043C\u043E\u043A","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0430\u0442\u0435\u0440\u043E\u043C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043B\u0456\u043F\u043E\u043C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043C\u0456\u043B\u0456\u0439","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0440\u0438\u0431\u043A\u0430","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u043D\u0456\u0445\u043E\u043C\u0456\u043A\u043E\u0437\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0456\u043A\u043E\u0437\u0443 \u0441\u0442\u043E\u043F","\u0414\u0435\u0440\u043C\u0430\u0442\u043E\u0441\u043A\u043E\u043F\u0456\u044F","\u0422\u0440\u0438\u0445\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043B\u043E\u043F\u0435\u0446\u0456\u0457","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0431\u043B\u0438\u0441\u0456\u043D\u043D\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0435\u0431\u043E\u0440\u0435\u0457","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043B\u0443\u043F\u0438","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0438\u043F\u0430\u0434\u0456\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0422\u0440\u0438\u0445\u043E\u0441\u043A\u043E\u043F\u0456\u044F","PRP-\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041C\u0435\u0437\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0448\u043A\u0456\u0440\u0438 \u0433\u043E\u043B\u043E\u0432\u0438","\u041F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0430 \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0422\u0440\u0430\u043D\u0441\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","FUE \u043C\u0435\u0442\u043E\u0434","FUT \u043C\u0435\u0442\u043E\u0434","\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0456\u044F","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0430","\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0430 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0440\u0443\u043F\u043E\u0432\u0430 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0421\u0456\u043C\u0435\u0439\u043D\u0430 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041F\u043E\u0434\u0440\u0443\u0436\u043D\u044F \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433","\u041F\u0456\u0434\u043B\u0456\u0442\u043A\u043E\u0432\u0438\u0439 \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433","\u041A\u043E\u0433\u043D\u0456\u0442\u0438\u0432\u043D\u043E-\u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u043E\u0432\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0435\u0448\u0442\u0430\u043B\u044C\u0442-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041F\u0441\u0438\u0445\u043E\u0430\u043D\u0430\u043B\u0456\u0437","\u0410\u0440\u0442-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041F\u0456\u0441\u043E\u0447\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041A\u0430\u0437\u043A\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0406\u0433\u0440\u043E\u0432\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0456\u043F\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041D\u041B\u041F","\u041A\u043E\u0443\u0447\u0438\u043D\u0433","\u0411\u0456\u0437\u043D\u0435\u0441-\u043A\u043E\u0443\u0447\u0438\u043D\u0433","\u041B\u0430\u0439\u0444-\u043A\u043E\u0443\u0447\u0438\u043D\u0433","\u041A\u0430\u0440'\u0454\u0440\u043D\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0440\u043E\u0444\u043E\u0440\u0456\u0454\u043D\u0442\u0430\u0446\u0456\u044F","\u0421\u0435\u043A\u0441\u043E\u043B\u043E\u0433\u0456\u044F","\u041D\u0430\u0440\u043A\u043E\u043B\u043E\u0433","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u0456\u0437\u043C\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430\u0440\u043A\u043E\u043C\u0430\u043D\u0456\u0457","\u041A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0456\u0454\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u0434\u0456\u0454\u0442\u043E\u043B\u043E\u0433\u0430","\u0421\u0445\u0443\u0434\u043D\u0435\u043D\u043D\u044F","\u041D\u0430\u0431\u0456\u0440 \u0432\u0430\u0433\u0438","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0440\u0430\u0446\u0456\u043E\u043D\u0443","\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A \u043A\u0430\u043B\u043E\u0440\u0456\u0439","\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0438\u0442\u044F\u0447\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0425\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0430\u0433\u0456\u0442\u043D\u0438\u0445","\u041B\u0456\u043A\u0443\u0432\u0430\u043B\u044C\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0456\u0430\u043D\u0441\u044C\u043A\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u0435\u0433\u0430\u043D\u0441\u044C\u043A\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u041A\u0435\u0442\u043E-\u0434\u0456\u0454\u0442\u0430","\u041F\u0430\u043B\u0435\u043E-\u0434\u0456\u0454\u0442\u0430","\u0406\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u0435 \u0433\u043E\u043B\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0435\u0442\u043E\u043A\u0441","\u041D\u0443\u0442\u0440\u0438\u0446\u0456\u043E\u043B\u043E\u0433\u0456\u044F","\u0415\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0456\u0430\u0431\u0435\u0442\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0449\u0438\u0442\u043E\u043F\u043E\u0434\u0456\u0431\u043D\u043E\u0457 \u0437\u0430\u043B\u043E\u0437\u0438","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0436\u0438\u0440\u0456\u043D\u043D\u044F","\u0413\u043E\u0440\u043C\u043E\u043D\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0424\u0456\u0437\u0456\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u0444\u043E\u0440\u0435\u0437","\u041C\u0430\u0433\u043D\u0456\u0442\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041B\u0430\u0437\u0435\u0440\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041F\u0430\u0440\u0430\u0444\u0456\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0440\u044F\u0437\u0435\u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u043E\u0434\u043E\u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u041A\u0456\u043D\u0435\u0437\u0456\u043E\u0442\u0435\u0439\u043F\u0443\u0432\u0430\u043D\u043D\u044F","\u041B\u0424\u041A","\u041B\u0456\u043A\u0443\u0432\u0430\u043B\u044C\u043D\u0430 \u0444\u0456\u0437\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0430","\u0420\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044F","\u041F\u043E\u0441\u0442\u0456\u043D\u0441\u0443\u043B\u044C\u0442\u043D\u0430 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044F","\u041F\u0456\u0441\u043B\u044F\u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044F","\u041F\u0456\u0441\u043B\u044F\u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0439\u043D\u0430 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044F","\u041C\u0430\u043D\u0443\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041E\u0441\u0442\u0435\u043E\u043F\u0430\u0442\u0456\u044F","\u0425\u0456\u0440\u043E\u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430","\u041A\u0456\u043D\u0435\u0437\u0456\u043E\u043B\u043E\u0433\u0456\u044F","\u0422\u0435\u0439\u043F\u0443\u0432\u0430\u043D\u043D\u044F","\u0421\u0443\u0445\u0435 \u0433\u043E\u043B\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0422\u0430\u0442\u0443\u0430\u0436","\u0425\u0443\u0434\u043E\u0436\u043D\u0454 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0420\u0435\u0430\u043B\u0456\u0441\u0442\u0438\u0447\u043D\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0427\u043E\u0440\u043D\u043E-\u0431\u0456\u043B\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u041A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0410\u043A\u0432\u0430\u0440\u0435\u043B\u044C\u043D\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u0456\u0437\u043C","\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0456\u044F","\u041E\u0440\u043D\u0430\u043C\u0435\u043D\u0442\u0430\u043B","\u0422\u0440\u0430\u0439\u0431\u043B","\u041E\u043B\u0434\u0441\u043A\u0443\u043B","\u041D\u044C\u044E\u0441\u043A\u0443\u043B","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u041F\u043E\u043B\u0456\u043D\u0435\u0437\u0456\u0439\u0441\u044C\u043A\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0411\u0456\u043E\u043C\u0435\u0445\u0430\u043D\u0456\u043A\u0430","\u0414\u043E\u0442\u0432\u043E\u0440\u043A","\u0411\u043B\u0435\u043A\u0432\u043E\u0440\u043A","\u041B\u0430\u0439\u043D\u0432\u043E\u0440\u043A","\u041F\u0435\u0440\u0435\u043A\u0440\u0438\u0442\u0442\u044F \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u044C","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u044C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u044C","\u041B\u0430\u0437\u0435\u0440\u043D\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0442\u0430\u0442\u0443","\u0420\u0435\u043C\u0443\u0432\u0435\u0440","\u041F\u0456\u0440\u0441\u0438\u043D\u0433","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u0432\u0443\u0445","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u043D\u043E\u0441\u0430","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u0431\u0440\u043E\u0432\u0438","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u0433\u0443\u0431\u0438","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u044F\u0437\u0438\u043A\u0430","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u043F\u0443\u043F\u043A\u0430","\u0406\u043D\u0442\u0438\u043C\u043D\u0438\u0439 \u043F\u0456\u0440\u0441\u0438\u043D\u0433","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u0441\u043E\u0441\u043A\u0456\u0432","\u0421\u0435\u043F\u0442\u0443\u043C","\u0422\u0443\u043D\u0435\u043B\u0456","\u0420\u043E\u0437\u0442\u044F\u0436\u043A\u0430 \u043C\u043E\u0447\u043E\u043A","\u041F\u0440\u043E\u043A\u043E\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0432\u0443\u0445","\u041C\u0430\u043A\u0456\u044F\u0436","\u0414\u0435\u043D\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0412\u0435\u0447\u0456\u0440\u043D\u0456\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u041C\u0430\u043A\u0456\u044F\u0436 \u043D\u0430\u0440\u0435\u0447\u0435\u043D\u043E\u0457","\u0421\u0432\u044F\u0442\u043A\u043E\u0432\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0412\u0438\u043F\u0443\u0441\u043A\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0424\u043E\u0442\u043E\u043C\u0430\u043A\u0456\u044F\u0436","\u0422\u0435\u0430\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0421\u0446\u0435\u043D\u0456\u0447\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0410\u043A\u0432\u0430\u0433\u0440\u0438\u043C","\u0424\u0435\u0439\u0441-\u0430\u0440\u0442","\u0411\u043E\u0434\u0456-\u0430\u0440\u0442","\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u043C\u0430\u043A\u0456\u044F\u0436\u0443","\u041C\u0430\u0439\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441 \u0437 \u043C\u0430\u043A\u0456\u044F\u0436\u0443","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043C\u0430\u043A\u0456\u044F\u0436\u0443","\u041C\u0430\u043A\u0456\u044F\u0436 \u0434\u043B\u044F \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u0457","\u0421\u0430\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E","\u041B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D","\u041F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0430\u0434\u0443","\u041F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0430\u0434\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u0441\u0430\u0434\u0443","\u041E\u0437\u0435\u043B\u0435\u043D\u0435\u043D\u043D\u044F","\u041E\u0437\u0435\u043B\u0435\u043D\u0435\u043D\u043D\u044F \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0457","\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0435 \u043E\u0437\u0435\u043B\u0435\u043D\u0435\u043D\u043D\u044F","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0441\u0430\u0434\u043E\u043C","\u0421\u0430\u0434\u043E\u0432\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041E\u0431\u0440\u0456\u0437\u043A\u0430 \u0434\u0435\u0440\u0435\u0432","\u041E\u0431\u0440\u0456\u0437\u043A\u0430 \u043A\u0443\u0449\u0456\u0432","\u0424\u043E\u0440\u043C\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0440\u043E\u043D\u0438","\u0421\u0430\u043D\u0456\u0442\u0430\u0440\u043D\u0430 \u043E\u0431\u0440\u0456\u0437\u043A\u0430","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043E\u0431\u0440\u0456\u0437\u043A\u0430","\u0422\u043E\u043F\u0456\u0430\u0440\u043D\u0435 \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432\u043E","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u0434\u0435\u0440\u0435\u0432","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u0436\u0438\u0432\u043E\u043F\u043B\u043E\u0442\u0443","\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u0434\u0435\u0440\u0435\u0432","\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u043A\u0443\u0449\u0456\u0432","\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u043A\u0432\u0456\u0442\u0456\u0432","\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u0440\u043E\u0441\u043B\u0438\u043D","\u041F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0430 \u0440\u043E\u0441\u043B\u0438\u043D","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0434\u0435\u0440\u0435\u0432","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043F\u043D\u0456\u0432","\u041A\u043E\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0413\u0430\u0437\u043E\u043D","\u041F\u043E\u0441\u0456\u0432 \u0433\u0430\u0437\u043E\u043D\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0440\u0443\u043B\u043E\u043D\u043D\u043E\u0433\u043E \u0433\u0430\u0437\u043E\u043D\u0443","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0433\u0430\u0437\u043E\u043D\u043E\u043C","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u0433\u0430\u0437\u043E\u043D\u0443","\u0410\u0435\u0440\u0430\u0446\u0456\u044F \u0433\u0430\u0437\u043E\u043D\u0443","\u0421\u043A\u0430\u0440\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u044F \u0433\u0430\u0437\u043E\u043D\u0443","\u041F\u0456\u0434\u0436\u0438\u0432\u043B\u0435\u043D\u043D\u044F \u0433\u0430\u0437\u043E\u043D\u0443","\u041F\u043E\u043B\u0438\u0432 \u0433\u0430\u0437\u043E\u043D\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u0433\u0430\u0437\u043E\u043D\u0443","\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0438\u0439 \u043F\u043E\u043B\u0438\u0432","\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0437\u0440\u043E\u0448\u0435\u043D\u043D\u044F","\u041A\u0440\u0430\u043F\u043B\u0438\u043D\u043D\u0438\u0439 \u043F\u043E\u043B\u0438\u0432","\u041C\u043E\u043D\u0442\u0430\u0436 \u043F\u043E\u043B\u0438\u0432\u0443","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u043B\u0438\u0432\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u043F\u043E\u043B\u0438\u0432\u0443","\u041A\u043B\u0443\u043C\u0431\u0438","\u041E\u0431\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043B\u0443\u043C\u0431","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u043A\u043B\u0443\u043C\u0431\u0430\u043C\u0438","\u041C\u0456\u043A\u0441\u0431\u043E\u0440\u0434\u0435\u0440\u0438","\u0420\u0430\u0431\u0430\u0442\u043A\u0438","\u0410\u043B\u044C\u043F\u0456\u0439\u0441\u044C\u043A\u0430 \u0433\u0456\u0440\u043A\u0430","\u0420\u043E\u043A\u0430\u0440\u0456\u0439","\u0410\u043B\u044C\u043F\u0456\u043D\u0430\u0440\u0456\u0439","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0438\u0439 \u0441\u0430\u0434","\u0421\u0430\u0434 \u043A\u0430\u043C\u0435\u043D\u0456\u0432","\u0412\u043E\u0434\u043E\u0439\u043C\u0438","\u0421\u0442\u0430\u0432\u043E\u043A","\u0424\u043E\u043D\u0442\u0430\u043D","\u0412\u043E\u0434\u043E\u0441\u043F\u0430\u0434","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0431\u0430\u0441\u0435\u0439\u043D","\u041E\u0447\u0438\u0449\u0435\u043D\u043D\u044F \u0441\u0442\u0430\u0432\u043A\u0430","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0432\u043E\u0434\u043E\u0439\u043C\u043E\u044E","\u0414\u043E\u0440\u0456\u0436\u043A\u0438","\u0421\u0430\u0434\u043E\u0432\u0456 \u0434\u043E\u0440\u0456\u0436\u043A\u0438","\u0422\u0440\u043E\u0442\u0443\u0430\u0440\u043D\u0430 \u043F\u043B\u0438\u0442\u043A\u0430","\u0411\u0440\u0443\u043A\u0456\u0432\u043A\u0430","\u041C\u043E\u0449\u0435\u043D\u043D\u044F","\u041F\u0430\u0442\u0456\u043E","\u0422\u0435\u0440\u0430\u0441\u0430","\u0410\u043B\u044C\u0442\u0430\u043D\u043A\u0430","\u041F\u0435\u0440\u0433\u043E\u043B\u0438","\u0421\u0430\u0434\u043E\u0432\u0456 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457","\u041E\u043F\u043E\u0440\u0438 \u0434\u043B\u044F \u0440\u043E\u0441\u043B\u0438\u043D","\u0428\u043F\u0430\u043B\u0435\u0440\u0438","\u0410\u0440\u043A\u0438","\u041E\u0433\u043E\u0440\u043E\u0436\u0456","\u041F\u0430\u0440\u043A\u0430\u043D\u0438","\u0416\u0438\u0432\u043E\u043F\u043B\u0456\u0442","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043E\u0433\u043E\u0440\u043E\u0436\u0430","\u0421\u0430\u0434\u043E\u0432\u0435 \u043E\u0441\u0432\u0456\u0442\u043B\u0435\u043D\u043D\u044F","\u041B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u043D\u0430 \u043F\u0456\u0434\u0441\u0432\u0456\u0442\u043A\u0430","\u0417\u0438\u043C\u043E\u0432\u0438\u0439 \u0441\u0430\u0434","\u041E\u0440\u0430\u043D\u0436\u0435\u0440\u0435\u044F","\u0422\u0435\u043F\u043B\u0438\u0446\u044F","\u041F\u0430\u0440\u043D\u0438\u043A","\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0456 \u0433\u0440\u044F\u0434\u043A\u0438","\u0412\u0438\u0441\u043E\u043A\u0456 \u0433\u0440\u044F\u0434\u043A\u0438","\u0413\u043E\u0440\u043E\u0434","\u0413\u043E\u0440\u043E\u0434\u043D\u0438\u0446\u0442\u0432\u043E","\u0412\u0438\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0432\u043E\u0447\u0456\u0432","\u041E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0435 \u0437\u0435\u043C\u043B\u0435\u0440\u043E\u0431\u0441\u0442\u0432\u043E","\u041F\u0435\u0440\u043C\u0430\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0430","\u041A\u043E\u043C\u043F\u043E\u0441\u0442","\u041C\u0443\u043B\u044C\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0411\u043E\u0440\u043E\u0442\u044C\u0431\u0430 \u0437\u0456 \u0448\u043A\u0456\u0434\u043D\u0438\u043A\u0430\u043C\u0438","\u0417\u0430\u0445\u0438\u0441\u0442 \u0440\u043E\u0441\u043B\u0438\u043D","\u0414\u043E\u0431\u0440\u0438\u0432\u0430","\u041F\u0456\u0434\u0436\u0438\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u043E\u0441\u043B\u0438\u043D","\u0414\u0440\u0435\u043D\u0430\u0436","\u0414\u0440\u0435\u043D\u0430\u0436\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430","\u041F\u0456\u0434\u043F\u0456\u0440\u043D\u0456 \u0441\u0442\u0456\u043D\u043A\u0438","\u0422\u0435\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F","\u0413\u0440\u0430\u0432\u0456\u0439","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043A\u043E\u0440\u0430","\u041C\u0443\u043B\u044C\u0447\u0430","\u0421\u0430\u0434\u043E\u0432\u0438\u0439 \u0434\u0435\u043A\u043E\u0440","\u0421\u043A\u0443\u043B\u044C\u043F\u0442\u0443\u0440\u0438","\u0412\u0430\u0437\u043E\u043D\u0438","\u041A\u0430\u0448\u043F\u043E","\u0421\u0430\u0434\u043E\u0432\u0456 \u0444\u0456\u0433\u0443\u0440\u0438","\u0413\u043E\u0434\u0456\u0432\u043D\u0438\u0446\u0456 \u0434\u043B\u044F \u043F\u0442\u0430\u0445\u0456\u0432","\u0411\u0443\u0434\u0438\u043D\u043E\u0447\u043A\u0438 \u0434\u043B\u044F \u043F\u0442\u0430\u0445\u0456\u0432","\u0413\u043E\u0442\u0435\u043B\u0456 \u0434\u043B\u044F \u043A\u043E\u043C\u0430\u0445","\u0411\u0434\u0436\u0456\u043B\u044C\u043D\u0438\u0446\u0442\u0432\u043E","\u041F\u0430\u0441\u0456\u043A\u0430","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0431\u0434\u0436\u043E\u043B\u0430\u043C\u0438","\u0412\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u0430\u0440\u0441\u0442\u0432\u043E","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u043E\u043C","\u041E\u0431\u0440\u0456\u0437\u043A\u0430 \u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u0443","\u041F\u043B\u043E\u0434\u043E\u0432\u0438\u0439 \u0441\u0430\u0434","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u043F\u043B\u043E\u0434\u043E\u0432\u0438\u043C\u0438 \u0434\u0435\u0440\u0435\u0432\u0430\u043C\u0438","\u0429\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0434\u0435\u0440\u0435\u0432","\u041E\u043A\u0443\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u0448\u043A\u0456\u0434\u043D\u0438\u043A\u0456\u0432","\u041F\u043E\u0431\u0456\u043B\u043A\u0430 \u0434\u0435\u0440\u0435\u0432","\u0417\u0438\u043C\u043E\u0432\u0435 \u0443\u043A\u0440\u0438\u0442\u0442\u044F \u0440\u043E\u0441\u043B\u0438\u043D","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0441\u0430\u0434\u0443 \u0434\u043E \u0437\u0438\u043C\u0438","\u0412\u0435\u0441\u043D\u044F\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438 \u0432 \u0441\u0430\u0434\u0443","\u041E\u0441\u0456\u043D\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438 \u0432 \u0441\u0430\u0434\u0443","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043A\u0432\u0430\u0440\u0442\u0438\u0440","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043E\u0444\u0456\u0441\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u0429\u043E\u0434\u0435\u043D\u043D\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u044E\u0447\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0440\u0435\u043C\u043E\u043D\u0442\u0443","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0431\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u0430","\u041C\u0438\u0442\u0442\u044F \u0432\u0456\u043A\u043E\u043D","\u041C\u0438\u0442\u0442\u044F \u0444\u0430\u0441\u0430\u0434\u0456\u0432","\u041C\u0438\u0442\u0442\u044F \u0432\u0456\u0442\u0440\u0438\u043D","\u041C\u0438\u0442\u0442\u044F \u043F\u0456\u0441\u043B\u044F \u0440\u0435\u043C\u043E\u043D\u0442\u0443","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0438\u043B\u0443","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043C\u0435\u0431\u043B\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0434\u0438\u0432\u0430\u043D\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0440\u0456\u0441\u0435\u043B","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043C\u0430\u0442\u0440\u0430\u0446\u0456\u0432","\u041F\u0440\u0430\u043D\u043D\u044F \u043A\u0438\u043B\u0438\u043C\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0438\u043B\u0438\u043C\u0456\u0432","\u0427\u0438\u0441\u0442\u043A\u0430 \u043A\u0438\u043B\u0438\u043C\u043E\u0432\u0438\u0445 \u043F\u043E\u043A\u0440\u0438\u0442\u0442\u0456\u0432","\u041F\u0440\u0430\u043D\u043D\u044F \u0448\u0442\u043E\u0440","\u041F\u0440\u0430\u043D\u043D\u044F \u0442\u044E\u043B\u044E","\u041F\u0440\u0430\u043D\u043D\u044F \u0433\u0430\u0440\u0434\u0438\u043D","\u041A\u043B\u0456\u043D\u0456\u043D\u0433","\u041A\u043B\u0456\u043D\u0456\u043D\u0433\u043E\u0432\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0438\u0439 \u043A\u043B\u0456\u043D\u0456\u043D\u0433","\u041F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430\u0434\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u0447\u0438\u0445 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u0438\u0445 \u0446\u0435\u043D\u0442\u0440\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043A\u0430\u0444\u0435","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0433\u043E\u0442\u0435\u043B\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043B\u0456\u043A\u0430\u0440\u0435\u043D\u044C","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043A\u043B\u0456\u043D\u0456\u043A","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0448\u043A\u0456\u043B","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0434\u0438\u0442\u044F\u0447\u0438\u0445 \u0441\u0430\u0434\u043A\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u043F\u043E\u0440\u0442\u0437\u0430\u043B\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0431\u0430\u0441\u0435\u0439\u043D\u0456\u0432","\u0414\u0435\u0437\u0456\u043D\u0444\u0435\u043A\u0446\u0456\u044F","\u0414\u0435\u0437\u0438\u043D\u0441\u0435\u043A\u0446\u0456\u044F","\u0414\u0435\u0440\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u043A\u043E\u043C\u0430\u0445","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u0433\u0440\u0438\u0437\u0443\u043D\u0456\u0432","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u0442\u0430\u0440\u0433\u0430\u043D\u0456\u0432","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u043A\u043B\u043E\u043F\u0456\u0432","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u043C\u0443\u0440\u0430\u0448\u043E\u043A","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u043E\u0441","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u0431\u043B\u0456\u0445","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u043A\u043B\u0456\u0449\u0456\u0432","\u0424\u0443\u043C\u0456\u0433\u0430\u0446\u0456\u044F","\u0421\u0430\u043D\u0456\u0442\u0430\u0440\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430","\u041E\u0437\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u041E\u0447\u0438\u0449\u0435\u043D\u043D\u044F \u043F\u043E\u0432\u0456\u0442\u0440\u044F","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0439","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0456\u0434'\u0457\u0437\u0434\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u0445\u043E\u0434\u043E\u0432\u0438\u0445 \u043A\u043B\u0456\u0442\u043E\u043A","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0456\u043D\u0433\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0433\u0430\u0440\u0430\u0436\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0456\u0434\u0432\u0430\u043B\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0433\u043E\u0440\u0438\u0449","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0441\u043C\u0456\u0442\u0442\u044F","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043C\u0456\u0442\u0442\u044F","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u0423\u0442\u0438\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0427\u0438\u0441\u0442\u043A\u0430 \u0442\u0430 \u0434\u043E\u0433\u043B\u044F\u0434 \u0432\u0437\u0443\u0442\u0442\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0432\u0437\u0443\u0442\u0442\u044F","\u041F\u0435\u0440\u0435\u0448\u0438\u0432\u043A\u0430 \u0432\u0437\u0443\u0442\u0442\u044F","\u0420\u043E\u0437\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0437\u0443\u0442\u0442\u044F","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0437\u0443\u0442\u0442\u044F","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u0432\u0437\u0443\u0442\u0442\u044F","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u0456\u0434\u0431\u043E\u0440\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u0456\u0434\u043E\u0448\u0432\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0431\u043B\u0438\u0441\u043A\u0430\u0432\u043E\u043A \u043D\u0430 \u0432\u0437\u0443\u0442\u0442\u0456","\u041B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u043E\u0434\u044F\u0433\u0443","\u041F\u0435\u0440\u0435\u0448\u0438\u0432\u043A\u0430 \u043E\u0434\u044F\u0433\u0443","\u041F\u0456\u0434\u0433\u043E\u043D\u043A\u0430 \u043E\u0434\u044F\u0433\u0443","\u0417\u0430\u043C\u0456\u043D\u0430 \u0431\u043B\u0438\u0441\u043A\u0430\u0432\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0443\u0434\u0437\u0438\u043A\u0456\u0432","\u041F\u0456\u0434\u0448\u0438\u0432\u043A\u0430 \u0431\u0440\u044E\u043A","\u041F\u0456\u0434\u0448\u0438\u0432\u043A\u0430 \u0448\u0442\u043E\u0440","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043E\u0434\u044F\u0433\u0443","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0432\u0435\u0440\u0445\u043D\u044C\u043E\u0433\u043E \u043E\u0434\u044F\u0433\u0443","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043F\u0430\u043B\u044C\u0442","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0443\u0440\u0442\u043E\u043A","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0448\u0443\u0431","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0434\u0443\u0431\u043B\u044F\u043D\u043E\u043A","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u043E\u0441\u0442\u044E\u043C\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0441\u0443\u043A\u043E\u043D\u044C","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0432\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0445 \u0441\u0443\u043A\u043E\u043D\u044C","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043F\u043E\u0434\u0443\u0448\u043E\u043A","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u043E\u0432\u0434\u0440","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043F\u043B\u0435\u0434\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0456\u0433\u0440\u0430\u0448\u043E\u043A","\u0427\u0438\u0441\u0442\u043A\u0430 \u0448\u043A\u0456\u0440\u044F\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u0427\u0438\u0441\u0442\u043A\u0430 \u0437\u0430\u043C\u0448\u0456","\u0427\u0438\u0441\u0442\u043A\u0430 \u043D\u0443\u0431\u0443\u043A\u0443","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u0448\u043A\u0456\u0440\u0438","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u043A\u0456\u0440\u0438","\u041F\u0440\u0430\u043D\u043D\u044F","\u041F\u0440\u0430\u043B\u044C\u043D\u044F","\u041F\u0440\u0430\u043D\u043D\u044F \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u041F\u0440\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u0442\u0456\u043B\u044C\u043D\u043E\u0457 \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u041F\u0440\u0430\u043D\u043D\u044F \u0441\u043F\u0435\u0446\u043E\u0434\u044F\u0433\u0443","\u041F\u0440\u0430\u043D\u043D\u044F \u0440\u043E\u0431\u043E\u0447\u043E\u0433\u043E \u043E\u0434\u044F\u0433\u0443","\u041F\u0440\u0430\u043D\u043D\u044F \u0442\u0435\u043A\u0441\u0442\u0438\u043B\u044E","\u041F\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u041F\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043E\u0440\u043E\u0447\u043E\u043A","\u041F\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u0442\u043E\u0440","\u0410\u0442\u0435\u043B\u044C\u0454","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043E\u0434\u044F\u0433\u0443","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0441\u0443\u043A\u043E\u043D\u044C","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0432\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0445 \u0441\u0443\u043A\u043E\u043D\u044C","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043A\u043E\u0441\u0442\u044E\u043C\u0456\u0432","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0441\u043E\u0440\u043E\u0447\u043E\u043A","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0431\u043B\u0443\u0437","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0441\u043F\u0456\u0434\u043D\u0438\u0446\u044C","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0431\u0440\u044E\u043A","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0432\u0435\u0440\u0445\u043D\u044C\u043E\u0433\u043E \u043E\u0434\u044F\u0433\u0443","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043F\u0430\u043B\u044C\u0442","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043A\u0443\u0440\u0442\u043E\u043A","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043F\u043E\u0441\u0442\u0456\u043B\u044C\u043D\u043E\u0457 \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0448\u0442\u043E\u0440","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0442\u044E\u043B\u044E","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043E\u0434\u044F\u0433\u0443","\u041E\u0437\u0434\u043E\u0431\u043B\u0435\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443","\u0414\u0435\u043A\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443","\u0412\u0438\u0448\u0438\u0432\u043A\u0430","\u041C\u0430\u0448\u0438\u043D\u043D\u0430 \u0432\u0438\u0448\u0438\u0432\u043A\u0430","\u0420\u0443\u0447\u043D\u0430 \u0432\u0438\u0448\u0438\u0432\u043A\u0430","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u0433\u043B\u0430\u0434\u0434\u044E","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u0445\u0440\u0435\u0441\u0442\u0438\u043A\u043E\u043C","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u0431\u0456\u0441\u0435\u0440\u043E\u043C","\u0417\u043E\u043B\u043E\u0442\u0430 \u0432\u0438\u0448\u0438\u0432\u043A\u0430","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u0441\u0442\u0440\u0456\u0447\u043A\u0430\u043C\u0438","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0456\u0432","\u0413\u0440\u0443\u043C\u0456\u043D\u0433","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u0441\u043E\u0431\u0430\u043A","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u043A\u043E\u0442\u0456\u0432","\u041C\u043E\u0434\u0435\u043B\u044C\u043D\u0430 \u0441\u0442\u0440\u0438\u0436\u043A\u0430 \u0441\u043E\u0431\u0430\u043A","\u0413\u0456\u0433\u0456\u0454\u043D\u0456\u0447\u043D\u0430 \u0441\u0442\u0440\u0438\u0436\u043A\u0430","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u043F\u0456\u0434 \u043C\u0430\u0448\u0438\u043D\u043A\u0443","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u043D\u043E\u0436\u0438\u0446\u044F\u043C\u0438","\u0422\u0440\u0438\u043C\u0456\u043D\u0433","\u0420\u043E\u043B\u043B\u0456\u043D\u0433","\u0421\u0442\u0440\u0438\u043F\u043F\u0456\u043D\u0433","\u041A\u0443\u043F\u0430\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u041A\u0443\u043F\u0430\u043D\u043D\u044F \u043A\u043E\u0442\u0456\u0432","\u0421\u041F\u0410 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0427\u0438\u0441\u0442\u043A\u0430 \u0437\u0443\u0431\u0456\u0432 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C","\u0427\u0438\u0441\u0442\u043A\u0430 \u0432\u0443\u0445","\u041F\u0456\u0434\u0440\u0456\u0437\u0430\u043D\u043D\u044F \u043A\u0456\u0433\u0442\u0456\u0432","\u0415\u043A\u0441\u043F\u0440\u0435\u0441-\u043B\u0456\u043D\u044C\u043A\u0430","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043A\u043E\u043B\u0442\u0443\u043D\u0456\u0432","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u0435\u0440\u0441\u0442\u0456","\u041A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0433\u0440\u0443\u043C\u0456\u043D\u0433","Show grooming","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0432\u0438\u0441\u0442\u0430\u0432\u043E\u043A","\u0413\u0456\u0433\u0456\u0454\u043D\u0430 \u043F\u0430\u0440\u0430\u0430\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u0430\u043B\u043E\u0437","\u0427\u0438\u0441\u0442\u043A\u0430 \u043E\u0447\u0435\u0439","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u043A\u043E\u0433\u0442\u0456\u0432","Production","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043C\u0435\u0431\u043B\u0456\u0432","\u041C\u0435\u0431\u043B\u0456 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041A\u043E\u0440\u043F\u0443\u0441\u043D\u0456 \u043C\u0435\u0431\u043B\u0456","\u041C'\u044F\u043A\u0456 \u043C\u0435\u0431\u043B\u0456","\u041A\u0443\u0445\u043D\u0456 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0428\u0430\u0444\u0438-\u043A\u0443\u043F\u0435","\u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u0456","\u041B\u0456\u0436\u043A\u0430","\u0414\u0438\u0432\u0430\u043D\u0438","\u041A\u0440\u0456\u0441\u043B\u0430","\u0421\u0442\u043E\u043B\u0438","\u0421\u0442\u0456\u043B\u044C\u0446\u0456","\u0414\u0438\u0442\u044F\u0447\u0456 \u043C\u0435\u0431\u043B\u0456","\u041E\u0444\u0456\u0441\u043D\u0456 \u043C\u0435\u0431\u043B\u0456","\u0412\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0456 \u043C\u0435\u0431\u043B\u0456","\u041C\u0435\u0431\u043B\u0456 \u0437 \u043C\u0430\u0441\u0438\u0432\u0443","\u041C\u0435\u0431\u043B\u0456 \u0437 \u0414\u0421\u041F","\u041C\u0435\u0431\u043B\u0456 \u0437 \u041C\u0414\u0424","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u041F\u0435\u0440\u0435\u0442\u044F\u0436\u043A\u0430 \u043C\u0435\u0431\u043B\u0456\u0432","\u041E\u0431\u0431\u0438\u0432\u043A\u0430 \u043C\u0435\u0431\u043B\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0444\u0443\u0440\u043D\u0456\u0442\u0443\u0440\u0438","\u041B\u0430\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0441\u0442\u043E\u043B\u044F\u0440\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u0421\u0442\u043E\u043B\u044F\u0440\u043D\u0430 \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043D\u044F","\u0421\u0442\u043E\u043B\u044F\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0414\u0432\u0435\u0440\u0456 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0414\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u0434\u0432\u0435\u0440\u0456","\u041C\u0456\u0436\u043A\u0456\u043C\u043D\u0430\u0442\u043D\u0456 \u0434\u0432\u0435\u0440\u0456","\u0412\u0445\u0456\u0434\u043D\u0456 \u0434\u0432\u0435\u0440\u0456","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u0434\u0432\u0435\u0440\u0456","\u0411\u0440\u043E\u043D\u044C\u043E\u0432\u0430\u043D\u0456 \u0434\u0432\u0435\u0440\u0456","\u0412\u0456\u043A\u043D\u0430","\u041C\u0435\u0442\u0430\u043B\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u0456 \u0432\u0456\u043A\u043D\u0430","\u0414\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u0432\u0456\u043A\u043D\u0430","\u0410\u043B\u044E\u043C\u0456\u043D\u0456\u0454\u0432\u0456 \u0432\u0456\u043A\u043D\u0430","\u0421\u043A\u043B\u043E\u043F\u0430\u043A\u0435\u0442\u0438","\u0411\u0430\u043B\u043A\u043E\u043D\u0438","\u041B\u043E\u0434\u0436\u0456\u0457","\u0417\u0430\u0441\u043A\u043B\u0435\u043D\u043D\u044F \u0431\u0430\u043B\u043A\u043E\u043D\u0456\u0432","\u041E\u0431\u0448\u0438\u0432\u043A\u0430 \u0431\u0430\u043B\u043A\u043E\u043D\u0456\u0432","\u0423\u0442\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0431\u0430\u043B\u043A\u043E\u043D\u0456\u0432","\u0421\u0445\u043E\u0434\u0438","\u0414\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u0441\u0445\u043E\u0434\u0438","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u0441\u0445\u043E\u0434\u0438","\u0411\u0435\u0442\u043E\u043D\u043D\u0456 \u0441\u0445\u043E\u0434\u0438","\u0413\u0432\u0438\u043D\u0442\u043E\u0432\u0456 \u0441\u0445\u043E\u0434\u0438","\u041C\u0430\u0440\u0448\u043E\u0432\u0456 \u0441\u0445\u043E\u0434\u0438","\u041F\u0435\u0440\u0438\u043B\u0430","\u041F\u043E\u0440\u0443\u0447\u043D\u0456","\u0411\u0430\u043B\u044F\u0441\u0438\u043D\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043C\u0435\u0442\u0430\u043B\u043E\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0439","\u0417\u0432\u0430\u0440\u044E\u0432\u0430\u043B\u044C\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041A\u043E\u0432\u043A\u0430","\u0425\u0443\u0434\u043E\u0436\u043D\u044F \u043A\u043E\u0432\u043A\u0430","\u041A\u043E\u0432\u0430\u043D\u0456 \u0432\u0438\u0440\u043E\u0431\u0438","\u041A\u043E\u0432\u0430\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u041A\u043E\u0432\u0430\u043D\u0456 \u043E\u0433\u043E\u0440\u043E\u0436\u0456","\u041A\u043E\u0432\u0430\u043D\u0456 \u043F\u0435\u0440\u0438\u043B\u0430","\u041A\u043E\u0432\u0430\u043D\u0456 \u043D\u0430\u0432\u0456\u0441\u0438","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u043E\u0433\u043E\u0440\u043E\u0436\u0456","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u043D\u0430\u0432\u0456\u0441\u0438","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457","\u041D\u0435\u0440\u0436\u0430\u0432\u0456\u044E\u0447\u0430 \u0441\u0442\u0430\u043B\u044C","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0432\u043E\u0440\u0456\u0442","\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0420\u043E\u0437\u0441\u0443\u0432\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0412\u0456\u0434\u043A\u0430\u0442\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0420\u043E\u0437\u043F\u0430\u0448\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0421\u0435\u043A\u0446\u0456\u0439\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0420\u0443\u043B\u043E\u043D\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0428\u043B\u0430\u0433\u0431\u0430\u0443\u043C\u0438","\u0420\u043E\u043B\u043B\u0435\u0442\u0438","\u0420\u043E\u043B\u044C\u0441\u0442\u0430\u0432\u043D\u0456","\u0416\u0430\u043B\u044E\u0437\u0456","\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0456 \u0436\u0430\u043B\u044E\u0437\u0456","\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0456 \u0436\u0430\u043B\u044E\u0437\u0456","\u0420\u0443\u043B\u043E\u043D\u043D\u0456 \u0448\u0442\u043E\u0440\u0438","\u0420\u0438\u043C\u0441\u044C\u043A\u0456 \u0448\u0442\u043E\u0440\u0438","\u041C\u0430\u0440\u043A\u0456\u0437\u0438","\u0422\u0435\u043D\u0442\u0438","\u041D\u0430\u0432\u0456\u0441\u0438","\u041A\u043E\u0437\u0438\u0440\u043A\u0438","\u0414\u0430\u0448\u043A\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043F\u043E\u043B\u0456\u0433\u0440\u0430\u0444\u0456\u0447\u043D\u043E\u0457 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457","\u0414\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0414\u0440\u0443\u043A","\u0426\u0438\u0444\u0440\u043E\u0432\u0438\u0439 \u0434\u0440\u0443\u043A","\u041E\u0444\u0441\u0435\u0442\u043D\u0438\u0439 \u0434\u0440\u0443\u043A","\u0428\u0438\u0440\u043E\u043A\u043E\u0444\u043E\u0440\u043C\u0430\u0442\u043D\u0438\u0439 \u0434\u0440\u0443\u043A","\u0406\u043D\u0442\u0435\u0440'\u0454\u0440\u043D\u0438\u0439 \u0434\u0440\u0443\u043A","\u0414\u0440\u0443\u043A \u0432\u0456\u0437\u0438\u0442\u043E\u043A","\u0414\u0440\u0443\u043A \u043B\u0438\u0441\u0442\u0456\u0432\u043E\u043A","\u0414\u0440\u0443\u043A \u0444\u043B\u0430\u0454\u0440\u0456\u0432","\u0414\u0440\u0443\u043A \u0431\u0443\u043A\u043B\u0435\u0442\u0456\u0432","\u0414\u0440\u0443\u043A \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0456\u0432","\u0414\u0440\u0443\u043A \u0431\u0440\u043E\u0448\u0443\u0440","\u0414\u0440\u0443\u043A \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u0456\u0432","\u0414\u0440\u0443\u043A \u043F\u043B\u0430\u043A\u0430\u0442\u0456\u0432","\u0414\u0440\u0443\u043A \u0431\u0430\u043D\u0435\u0440\u0456\u0432","\u0414\u0440\u0443\u043A \u043D\u0430\u043A\u043B\u0435\u0439\u043E\u043A","\u0414\u0440\u0443\u043A \u0435\u0442\u0438\u043A\u0435\u0442\u043E\u043A","\u0414\u0440\u0443\u043A \u043D\u0430 \u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0430\u0445","\u0414\u0440\u0443\u043A \u043D\u0430 \u043A\u0440\u0443\u0436\u043A\u0430\u0445","\u0421\u0443\u0432\u0435\u043D\u0456\u0440\u043D\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u044F","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0435\u0447\u0430\u0442\u043E\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0448\u0442\u0430\u043C\u043F\u0456\u0432","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F","\u041B\u0430\u0437\u0435\u0440\u043D\u0435 \u0433\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F","\u041C\u0435\u0445\u0430\u043D\u0456\u0447\u043D\u0435 \u0433\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043C\u0435\u0442\u0430\u043B\u0456","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u0441\u043A\u043B\u0456","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u0434\u0435\u0440\u0435\u0432\u0456","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0443","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438","\u041A\u0430\u0440\u0442\u043E\u043D\u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430","\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043A\u043E\u0440\u043E\u0431\u043E\u043A","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043F\u0430\u043A\u0435\u0442\u0456\u0432","\u041F\u0430\u043F\u0435\u0440\u043E\u0432\u0456 \u043F\u0430\u043A\u0435\u0442\u0438","\u041F\u043E\u043B\u0456\u0435\u0442\u0438\u043B\u0435\u043D\u043E\u0432\u0456 \u043F\u0430\u043A\u0435\u0442\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0442\u0435\u043A\u0441\u0442\u0438\u043B\u044E","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0442\u0435\u043A\u0441\u0442\u0438\u043B\u044C\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u041F\u043E\u0441\u0442\u0456\u043B\u044C\u043D\u0430 \u0431\u0456\u043B\u0438\u0437\u043D\u0430","\u0420\u0443\u0448\u043D\u0438\u043A\u0438","\u0421\u043A\u0430\u0442\u0435\u0440\u0442\u0438\u043D\u0438","\u0421\u0435\u0440\u0432\u0435\u0442\u043A\u0438","\u0424\u0430\u0440\u0442\u0443\u0445\u0438","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0441\u043F\u0435\u0446\u043E\u0434\u044F\u0433\u0443","\u0420\u043E\u0431\u043E\u0447\u0438\u0439 \u043E\u0434\u044F\u0433","\u0423\u043D\u0456\u0444\u043E\u0440\u043C\u0430","\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u043E\u0434\u044F\u0433","\u041C\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u043E\u0434\u044F\u0433","\u041A\u0443\u0445\u0430\u0440\u0441\u044C\u043A\u0438\u0439 \u043E\u0434\u044F\u0433","\u0417\u0430\u0445\u0438\u0441\u043D\u0438\u0439 \u043E\u0434\u044F\u0433","\u041F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u0435 \u0448\u0438\u0442\u0442\u044F","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u043D\u0430 \u043E\u0434\u044F\u0437\u0456","\u041D\u0430\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0456\u0432","\u0411\u0440\u0435\u043D\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0432\u0437\u0443\u0442\u0442\u044F","\u0412\u0437\u0443\u0442\u0442\u044F \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041E\u0440\u0442\u043E\u043F\u0435\u0434\u0438\u0447\u043D\u0435 \u0432\u0437\u0443\u0442\u0442\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0430 \u043F\u043E\u0448\u0438\u0442\u0442\u044F \u0432\u0437\u0443\u0442\u0442\u044F","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0448\u043A\u0456\u0440\u0433\u0430\u043B\u0430\u043D\u0442\u0435\u0440\u0435\u0457","\u0421\u0443\u043C\u043A\u0438","\u0413\u0430\u043C\u0430\u043D\u0446\u0456","\u0420\u0435\u043C\u0435\u043D\u0456","\u041F\u043E\u0440\u0442\u0444\u0435\u043B\u0456","\u0420\u044E\u043A\u0437\u0430\u043A\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0430\u043A\u0441\u0435\u0441\u0443\u0430\u0440\u0456\u0432","\u0411\u0456\u0436\u0443\u0442\u0435\u0440\u0456\u044F","\u041F\u0440\u0438\u043A\u0440\u0430\u0441\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u044E\u0432\u0435\u043B\u0456\u0440\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u042E\u0432\u0435\u043B\u0456\u0440\u043D\u0430 \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043D\u044F","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0430\u0431\u043B\u0443\u0447\u043E\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u0435\u0440\u0435\u0436\u043E\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0443\u043B\u043E\u043D\u0456\u0432","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0440\u0430\u0441\u043B\u0435\u0442\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u044E\u0432\u0435\u043B\u0456\u0440\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u0417\u043C\u0456\u043D\u0430 \u0440\u043E\u0437\u043C\u0456\u0440\u0443 \u043A\u0430\u0431\u043B\u0443\u0447\u043A\u0438","\u0427\u0438\u0441\u0442\u043A\u0430 \u043F\u0440\u0438\u043A\u0440\u0430\u0441","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u043E\u043B\u043E\u0442\u0430","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043F\u0440\u0438\u043A\u0440\u0430\u0441\u0430\u0445","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0441\u0432\u0456\u0447\u043E\u043A","\u0410\u0440\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0456 \u0441\u0432\u0456\u0447\u043A\u0438","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0456 \u0441\u0432\u0456\u0447\u043A\u0438","\u0421\u043E\u0454\u0432\u0456 \u0441\u0432\u0456\u0447\u043A\u0438","\u0412\u043E\u0441\u043A\u043E\u0432\u0456 \u0441\u0432\u0456\u0447\u043A\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043C\u0438\u043B\u0430","\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u0435 \u043C\u0438\u043B\u043E","\u041C\u0438\u043B\u043E \u0440\u0443\u0447\u043D\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0438","\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u0430 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0430","\u041E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0430 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0430","\u041A\u0440\u0435\u043C \u0440\u0443\u0447\u043D\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043A\u043E\u043D\u0434\u0438\u0442\u0435\u0440\u0441\u044C\u043A\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u041A\u043E\u043D\u0434\u0438\u0442\u0435\u0440\u0441\u044C\u043A\u0430","\u0412\u0438\u043F\u0456\u0447\u043A\u0430","\u0422\u043E\u0440\u0442\u0438 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0456 \u0442\u043E\u0440\u0442\u0438","\u0414\u0438\u0442\u044F\u0447\u0456 \u0442\u043E\u0440\u0442\u0438","\u041A\u0430\u043F\u043A\u0435\u0439\u043A\u0438","\u041C\u0430\u043A\u0430\u0440\u0443\u043D\u0438","\u0415\u043A\u043B\u0435\u0440\u0438","\u0422\u0456\u0441\u0442\u0435\u0447\u043A\u0430","\u041F\u0435\u0447ivo","\u041F\u0440\u044F\u043D\u0438\u043A\u0438","\u0406\u043C\u0431\u0438\u0440\u043D\u0456 \u043F\u0440\u044F\u043D\u0438\u043A\u0438","\u041F\u0440\u044F\u043D\u0438\u043A\u0438 \u0437 \u0440\u043E\u0437\u043F\u0438\u0441\u043E\u043C","\u041F\u043E\u043D\u0447\u0438\u043A\u0438","\u041C\u0430\u0444\u0456\u043D\u0438","\u041A\u0440\u0443\u0430\u0441\u0430\u043D\u0438","\u0425\u043B\u0456\u0431","\u0412\u0438\u043F\u0456\u0447\u043A\u0430 \u0445\u043B\u0456\u0431\u0430","\u0411\u0435\u0437\u0434\u0440\u0456\u0436\u0434\u0436\u043E\u0432\u0438\u0439 \u0445\u043B\u0456\u0431","\u0417\u0430\u043A\u0432\u0430\u0441\u043A\u043E\u0432\u0438\u0439 \u0445\u043B\u0456\u0431","\u0420\u0435\u043C\u0435\u0441\u043B\u0435\u043D\u043D\u0456 \u0432\u0438\u0440\u043E\u0431\u0438","\u0420\u0443\u0447\u043D\u0430 \u0440\u043E\u0431\u043E\u0442\u0430","Handmade","\u0412'\u044F\u0437\u0430\u043D\u043D\u044F","\u0412'\u044F\u0437\u0430\u043D\u043D\u044F \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0412'\u044F\u0437\u0430\u043D\u0456 \u0440\u0435\u0447\u0456","\u0413\u0430\u0447\u043E\u043A","\u0421\u043F\u0438\u0446\u0456","\u041F\u043B\u0435\u0442\u0456\u043D\u043D\u044F","\u041C\u0430\u043A\u0440\u0430\u043C\u0435","\u041F\u043B\u0435\u0442\u0456\u043D\u043D\u044F \u0437 \u043B\u043E\u0437\u0438","\u041F\u043B\u0435\u0442\u0456\u043D\u043D\u044F \u043A\u043E\u0448\u0438\u043A\u0456\u0432","\u0413\u043E\u043D\u0447\u0430\u0440\u0441\u0442\u0432\u043E","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0435\u0440\u0430\u043C\u0456\u043A\u0438","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0438\u0439 \u043F\u043E\u0441\u0443\u0434","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043A\u0435\u0440\u0430\u043C\u0456\u043A\u0430","\u041B\u0456\u043F\u043B\u0435\u043D\u043D\u044F","\u0421\u043A\u0443\u043B\u044C\u043F\u0442\u0443\u0440\u0430","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0441\u043A\u043B\u0430","\u0421\u043A\u043B\u044F\u043D\u0456 \u0432\u0438\u0440\u043E\u0431\u0438","\u0414\u043C\u0443\u0445\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u0412\u0456\u0442\u0440\u0430\u0436\u0456","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0442\u0440\u0430\u0436\u0456\u0432","\u041C\u043E\u0437\u0430\u0457\u043A\u0430","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043C\u043E\u0437\u0430\u0457\u043A\u0438","\u0414\u0435\u043A\u0443\u043F\u0430\u0436","\u0420\u043E\u0437\u043F\u0438\u0441","\u0420\u043E\u0437\u043F\u0438\u0441 \u043F\u043E \u0441\u043A\u043B\u0443","\u0420\u043E\u0437\u043F\u0438\u0441 \u043F\u043E \u0434\u0435\u0440\u0435\u0432\u0443","\u0420\u043E\u0437\u043F\u0438\u0441 \u043F\u043E \u0442\u043A\u0430\u043D\u0438\u043D\u0456","\u0411\u0430\u0442\u0456\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0456\u0433\u0440\u0430\u0448\u043E\u043A","\u041C'\u044F\u043A\u0456 \u0456\u0433\u0440\u0430\u0448\u043A\u0438","\u0414\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u0456\u0433\u0440\u0430\u0448\u043A\u0438","\u0420\u043E\u0437\u0432\u0438\u0432\u0430\u044E\u0447\u0456 \u0456\u0433\u0440\u0430\u0448\u043A\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043F\u0430\u043F\u0435\u0440\u0443","\u0420\u0443\u0447\u043D\u0438\u0439 \u043F\u0430\u043F\u0456\u0440","\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u044C\u043A\u0438\u0439 \u043F\u0430\u043F\u0456\u0440","\u0421\u043A\u0440\u0430\u043F\u0431\u0443\u043A\u0456\u043D\u0433","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043B\u0438\u0441\u0442\u0456\u0432\u043E\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0456\u0432","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u043B\u043E\u043A\u043D\u043E\u0442\u0456\u0432","\u041F\u0435\u0440\u0435\u043F\u043B\u0435\u0442\u0435\u043D\u043D\u044F","\u041F\u0430\u043B\u0456\u0442\u0443\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u043A\u043D\u0438\u0433","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0440\u0430\u043C","\u0411\u0430\u0433\u0435\u0442\u043D\u0430 \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043D\u044F","\u0420\u0430\u043C\u0438 \u0434\u043B\u044F \u043A\u0430\u0440\u0442\u0438\u043D","\u0420\u0430\u043C\u0438 \u0434\u043B\u044F \u0434\u0437\u0435\u0440\u043A\u0430\u043B","\u0420\u0430\u043C\u0438 \u0434\u043B\u044F \u0444\u043E\u0442\u043E","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0440\u043E\u0431\u0456\u0442","\u041F\u0430\u0441\u043F\u0430\u0440\u0442\u0443","\u041D\u0430\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0445\u043E\u043B\u0441\u0442\u0456\u0432","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0434\u0437\u0435\u0440\u043A\u0430\u043B","\u0424\u0430\u0446\u0435\u0442","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0441\u043A\u043B\u0430","\u0420\u0456\u0437\u043A\u0430 \u0441\u043A\u043B\u0430","\u0421\u0432\u0435\u0440\u0434\u043B\u0456\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u0417\u0430\u0433\u0430\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u041C\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u041F\u0456\u0441\u0442\u043A\u043E\u0441\u0442\u0440\u0443\u043C\u0438\u043D\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0448\u0442\u0443\u0447\u043D\u043E\u0433\u043E \u043A\u0430\u043C\u0435\u043D\u044E","\u0410\u043A\u0440\u0438\u043B\u043E\u0432\u0438\u0439 \u043A\u0430\u043C\u0456\u043D\u044C","\u041A\u0432\u0430\u0440\u0446\u043E\u0432\u0438\u0439 \u043A\u0430\u043C\u0456\u043D\u044C","\u0421\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0456","\u0421\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0456 \u0437 \u043A\u0430\u043C\u0435\u043D\u044E","\u041F\u0456\u0434\u0432\u0456\u043A\u043E\u043D\u043D\u044F","\u0421\u0445\u043E\u0434\u0438\u043D\u043A\u0438 \u0437 \u043A\u0430\u043C\u0435\u043D\u044E","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u0430\u043C\u0435\u043D\u044E","\u0413\u0440\u0430\u043D\u0456\u0442","\u041C\u0430\u0440\u043C\u0443\u0440","\u041E\u043D\u0456\u043E\u043A\u0441","\u0422\u0440\u0430\u0432\u0435\u0440\u0442\u0438\u043D","\u0420\u0456\u0437\u043A\u0430 \u043A\u0430\u043C\u0435\u043D\u044E","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0430\u043C\u0435\u043D\u044E","\u041F\u0430\u043C'\u044F\u0442\u043D\u0438\u043A\u0438","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u043C'\u044F\u0442\u043D\u0438\u043A\u0456\u0432","\u041D\u0430\u0434\u0433\u0440\u043E\u0431\u043A\u0438","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043F\u0430\u043C'\u044F\u0442\u043D\u0438\u043A\u0430\u0445","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u043C'\u044F\u0442\u043D\u0438\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442","\u0411\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u0432\u0430\u0440\u0442\u0438\u0440","\u0420\u0435\u043C\u043E\u043D\u0442 \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432","\u041A\u043E\u0441\u043C\u0435\u0442\u0438\u0447\u043D\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442","\u041A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442","\u0404\u0432\u0440\u043E\u0440\u0435\u043C\u043E\u043D\u0442","\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u044C\u043A\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0456\u0434 \u043A\u043B\u044E\u0447","\u0420\u0435\u043C\u043E\u043D\u0442 \u043E\u0444\u0456\u0441\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0438\u0445 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u041E\u0437\u0434\u043E\u0431\u043B\u044E\u0432\u0430\u043B\u044C\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0441\u0442\u0456\u043D","\u0412\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0456\u043D","\u0428\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0428\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430 \u0441\u0442\u0456\u043D","\u0428\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430 \u0441\u0442\u0435\u043B\u0456","\u041C\u0430\u0448\u0438\u043D\u043D\u0430 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430","\u0428\u043F\u0430\u043A\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u0428\u043F\u0430\u043A\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0456\u043D","\u0428\u043F\u0430\u043A\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0435\u043B\u0456","\u041C\u0430\u043B\u044F\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0456\u043D","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0435\u043B\u0456","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0435 \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u0435\u043D\u0435\u0446\u0456\u0430\u043D\u0441\u044C\u043A\u0430 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430","\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043D\u0430 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430","\u041F\u043E\u043A\u043B\u0435\u0439\u043A\u0430 \u0448\u043F\u0430\u043B\u0435\u0440","\u0420\u0456\u0434\u043A\u0456 \u0448\u043F\u0430\u043B\u0435\u0440\u0438","\u0424\u043E\u0442\u043E\u0448\u043F\u0430\u043B\u0435\u0440\u0438","\u041F\u0456\u0434\u043B\u043E\u0433\u043E\u0432\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0421\u0442\u044F\u0436\u043A\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0438","\u041D\u0430\u043B\u0438\u0432\u043D\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043B\u0430\u043C\u0456\u043D\u0430\u0442\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u043D\u043E\u0457 \u0434\u043E\u0448\u043A\u0438","\u0426\u0438\u043A\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u0443","\u0428\u043B\u0456\u0444\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u0443","\u041B\u0430\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043B\u0456\u043D\u043E\u043B\u0435\u0443\u043C\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043A\u043E\u0432\u0440\u043E\u043B\u0456\u043D\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043B\u0438\u0442\u043A\u0438","\u041E\u0431\u043B\u0438\u0446\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u043B\u0438\u0442\u043A\u043E\u044E","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043A\u0435\u0440\u0430\u043C\u043E\u0433\u0440\u0430\u043D\u0456\u0442\u0443","\u041C\u043E\u0437\u0430\u0457\u043A\u0430 \u043F\u043B\u0438\u0442\u043A\u043E\u0432\u0430","\u0417\u0430\u0442\u0438\u0440\u043A\u0430 \u0448\u0432\u0456\u0432","\u0421\u0442\u0435\u043B\u044C\u043E\u0432\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041D\u0430\u0442\u044F\u0436\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u041C\u0430\u0442\u043E\u0432\u0456 \u043D\u0430\u0442\u044F\u0436\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u0413\u043B\u044F\u043D\u0446\u0435\u0432\u0456 \u043D\u0430\u0442\u044F\u0436\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u0421\u0430\u0442\u0438\u043D\u043E\u0432\u0456 \u043D\u0430\u0442\u044F\u0436\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u0411\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0432\u043D\u0435\u0432\u0456 \u0441\u0442\u0435\u043B\u0456","\u041F\u0456\u0434\u0432\u0456\u0441\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u0421\u0442\u0435\u043B\u0456 \u0437 \u0433\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D\u0443","\u041C\u043E\u043D\u0442\u0430\u0436 \u0433\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D\u0443","\u0410\u0440\u043A\u0438","\u041F\u0435\u0440\u0435\u0433\u043E\u0440\u043E\u0434\u043A\u0438","\u041D\u0456\u0448\u0456","\u041F\u043E\u043B\u0438\u0446\u0456 \u0437 \u0433\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D\u0443","\u041A\u043E\u0440\u043E\u0431\u0438","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0415\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430","\u0420\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u0440\u043E\u0432\u043E\u0434\u043A\u0438","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u043E\u0437\u0435\u0442\u043E\u043A","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0438\u043C\u0438\u043A\u0430\u0447\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043B\u044E\u0441\u0442\u0440","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u0432\u0456\u0442\u0438\u043B\u044C\u043D\u0438\u043A\u0456\u0432","\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0440\u0438\u043B\u0430\u0434\u0456\u0432","\u041C\u043E\u043D\u0442\u0430\u0436 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u0449\u0438\u0442\u0456\u0432","\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u0431\u0443\u0434\u0438\u043D\u043A\u0443","\u0420\u043E\u0437\u0443\u043C\u043D\u0438\u0439 \u0434\u0456\u043C","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u043E\u043C\u043E\u0444\u043E\u043D\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u0435\u043E\u0434\u043E\u043C\u043E\u0444\u043E\u043D\u0456\u0432","\u0412\u0456\u0434\u0435\u043E\u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0430\u043C\u0435\u0440","\u041E\u0445\u043E\u0440\u043E\u043D\u043D\u0456 \u0441\u0438\u0441\u0442\u0435\u043C\u0438","\u0421\u0438\u0433\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u041F\u043E\u0436\u0435\u0436\u043D\u0430 \u0441\u0438\u0433\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0456\u043A\u0430","\u0420\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0432\u043E\u0434\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0442\u0440\u0443\u0431","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u0430\u043A\u043E\u0432\u0438\u043D","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0443\u043D\u0456\u0442\u0430\u0437\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0456\u0434\u0435","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0430\u043D\u043D","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u0443\u0448\u043E\u0432\u0438\u0445 \u043A\u0430\u0431\u0456\u043D","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0437\u043C\u0456\u0448\u0443\u0432\u0430\u0447\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u043E\u0439\u043B\u0435\u0440\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0444\u0456\u043B\u044C\u0442\u0440\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043B\u0456\u0447\u0438\u043B\u044C\u043D\u0438\u043A\u0456\u0432 \u0432\u043E\u0434\u0438","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0430\u043B\u044C\u043D\u0438\u0445 \u043C\u0430\u0448\u0438\u043D","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u0438\u0439\u043D\u0438\u0445 \u043C\u0430\u0448\u0438\u043D","\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0433\u0430\u0437\u043E\u0432\u0438\u0445 \u043F\u043B\u0438\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0430\u043D\u0442\u0435\u0445\u043D\u0456\u043A\u0438","\u0423\u0441\u0443\u043D\u0435\u043D\u043D\u044F \u0437\u0430\u0441\u043E\u0440\u0456\u0432","\u0423\u0441\u0443\u043D\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0442\u0456\u043A\u0430\u043D\u044C","\u041F\u0440\u043E\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0430\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457","\u041E\u043F\u0430\u043B\u0435\u043D\u043D\u044F","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u0430\u0434\u0456\u0430\u0442\u043E\u0440\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u0430\u0434\u0456\u0430\u0442\u043E\u0440\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u043E\u0442\u043B\u0456\u0432","\u0413\u0430\u0437\u043E\u0432\u0456 \u043A\u043E\u0442\u043B\u0438","\u0415\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u043D\u0456 \u043A\u043E\u0442\u043B\u0438","\u0422\u0432\u0435\u0440\u044C\u043E\u043F\u0430\u043B\u0438\u0432\u043D\u0456 \u043A\u043E\u0442\u043B\u0438","\u0422\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0412\u043E\u0434\u044F\u043D\u0430 \u0442\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0415\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u043D\u0430 \u0442\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0406\u043D\u0444\u0440\u0430\u0447\u0435\u0440\u0432\u043E\u043D\u0430 \u0442\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0456\u044F","\u041C\u043E\u043D\u0442\u0430\u0436 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0456\u0457","\u0412\u0438\u0442\u044F\u0436\u043A\u0430","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0438\u0442\u044F\u0436\u043E\u043A","\u041F\u0440\u0438\u043F\u043B\u0438\u0432\u043D\u0430 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0456\u044F","\u0412\u0438\u0442\u044F\u0436\u043D\u0430 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0456\u044F","\u0420\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0446\u0456\u044F","\u041A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u041C\u043E\u043D\u0442\u0430\u0436 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u041E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0427\u0438\u0441\u0442\u043A\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0417\u0430\u043F\u0440\u0430\u0432\u043A\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u041F\u043E\u043A\u0440\u0456\u0432\u0435\u043B\u044C\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041F\u043E\u043A\u0440\u0456\u0432\u043B\u044F","\u041C\u043E\u043D\u0442\u0430\u0436 \u0434\u0430\u0445\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u0434\u0430\u0445\u0443","\u0423\u0442\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0434\u0430\u0445\u0443","\u0413\u0456\u0434\u0440\u043E\u0456\u0437\u043E\u043B\u044F\u0446\u0456\u044F \u0434\u0430\u0445\u0443","\u041C\u0435\u0442\u0430\u043B\u043E\u0447\u0435\u0440\u0435\u043F\u0438\u0446\u044F","\u041F\u0440\u043E\u0444\u043D\u0430\u0441\u0442\u0438\u043B","\u0411\u0456\u0442\u0443\u043C\u043D\u0430 \u0447\u0435\u0440\u0435\u043F\u0438\u0446\u044F","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0430 \u0447\u0435\u0440\u0435\u043F\u0438\u0446\u044F","\u0424\u0430\u043B\u044C\u0446\u0435\u0432\u0430 \u043F\u043E\u043A\u0440\u0456\u0432\u043B\u044F","\u041F\u043B\u043E\u0441\u043A\u0430 \u043F\u043E\u043A\u0440\u0456\u0432\u043B\u044F","\u041C'\u044F\u043A\u0430 \u043F\u043E\u043A\u0440\u0456\u0432\u043B\u044F","\u0420\u0438\u043D\u0432\u0438","\u0412\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u0438","\u0424\u0430\u0441\u0430\u0434\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041E\u0437\u0434\u043E\u0431\u043B\u0435\u043D\u043D\u044F \u0444\u0430\u0441\u0430\u0434\u0456\u0432","\u0423\u0442\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0444\u0430\u0441\u0430\u0434\u0456\u0432","\u041C\u043E\u043A\u0440\u0438\u0439 \u0444\u0430\u0441\u0430\u0434","\u0412\u0435\u043D\u0442\u0438\u043B\u044C\u043E\u0432\u0430\u043D\u0438\u0439 \u0444\u0430\u0441\u0430\u0434","\u0421\u0430\u0439\u0434\u0438\u043D\u0433","\u0411\u043B\u043E\u043A-\u0445\u0430\u0443\u0441","\u0428\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430 \u0444\u0430\u0441\u0430\u0434\u0443","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0444\u0430\u0441\u0430\u0434\u0443","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430 \u0444\u0430\u0441\u0430\u0434\u0443","\u041E\u0431\u043B\u0438\u0446\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u043B\u0438\u0442\u043A\u043E\u044E \u0444\u0430\u0441\u0430\u0434\u0443","\u041C\u0438\u0442\u0442\u044F \u0444\u0430\u0441\u0430\u0434\u0456\u0432","\u041F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u0456 \u0430\u043B\u044C\u043F\u0456\u043D\u0456\u0441\u0442\u0438","\u0412\u0438\u0441\u043E\u0442\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0411\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432","\u041A\u0430\u0440\u043A\u0430\u0441\u043D\u0456 \u0431\u0443\u0434\u0438\u043D\u043A\u0438","\u0411\u0443\u0434\u0438\u043D\u043A\u0438 \u0437 \u0431\u0440\u0443\u0441\u0430","\u0411\u0443\u0434\u0438\u043D\u043A\u0438 \u0437 \u0446\u0435\u0433\u043B\u0438","\u0411\u0443\u0434\u0438\u043D\u043A\u0438 \u0437 \u043F\u0438\u043D\u043E\u0431\u043B\u043E\u043A\u0443","\u0411\u0443\u0434\u0438\u043D\u043A\u0438 \u0437 \u0433\u0430\u0437\u043E\u0431\u043B\u043E\u043A\u0443","\u041C\u043E\u043D\u043E\u043B\u0456\u0442\u043D\u0435 \u0431\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E","\u0424\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442","\u0421\u0442\u0440\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442","\u041F\u043B\u0438\u0442\u043D\u0438\u0439 \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442","\u041F\u0430\u043B\u044C\u043E\u0432\u0438\u0439 \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442","\u041A\u043B\u0430\u0434\u043A\u0430","\u041A\u043B\u0430\u0434\u043A\u0430 \u0446\u0435\u0433\u043B\u0438","\u041A\u043B\u0430\u0434\u043A\u0430 \u0431\u043B\u043E\u043A\u0456\u0432","\u041E\u0431\u043B\u0438\u0446\u044E\u0432\u0430\u043B\u044C\u043D\u0430 \u043A\u043B\u0430\u0434\u043A\u0430","\u0411\u0435\u0442\u043E\u043D\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0417\u0430\u043B\u0438\u0432\u043A\u0430 \u0431\u0435\u0442\u043E\u043D\u0443","\u0410\u0440\u043C\u0443\u0432\u0430\u043D\u043D\u044F","\u041E\u043F\u0430\u043B\u0443\u0431\u043A\u0430","\u0417\u0435\u043C\u043B\u044F\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0412\u0438\u043A\u043E\u043F\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0456\u043B\u044F\u043D\u043A\u0438","\u0412\u0438\u0442\u043E\u0440\u0444\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0441\u0442\u0456\u043D","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u043F\u0435\u0440\u0435\u0433\u043E\u0440\u043E\u0434\u043E\u043A","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u043F\u0456\u0434\u043B\u043E\u0433\u0438","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0441\u0442\u0435\u043B\u0456","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0432\u0456\u043A\u043E\u043D","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0434\u0432\u0435\u0440\u0435\u0439","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043C\u0456\u0442\u0442\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0435\u0445\u043D\u0456\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043E\u0431\u0443\u0442\u043E\u0432\u043E\u0457 \u0442\u0435\u0445\u043D\u0456\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u0430\u043B\u044C\u043D\u0438\u0445 \u043C\u0430\u0448\u0438\u043D","\u0420\u0435\u043C\u043E\u043D\u0442 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u043E\u0440\u043E\u0437\u0438\u043B\u044C\u043D\u0438\u0445 \u043A\u0430\u043C\u0435\u0440","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u0438\u0439\u043D\u0438\u0445 \u043C\u0430\u0448\u0438\u043D","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043B\u0438\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u0433\u0430\u0437\u043E\u0432\u0438\u0445 \u043F\u043B\u0438\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u0435\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u043D\u0438\u0445 \u043F\u043B\u0438\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u0434\u0443\u0445\u043E\u0432\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u0456\u043A\u0440\u043E\u0445\u0432\u0438\u043B\u044C\u043E\u0432\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u0430\u0432\u043E\u0432\u0430\u0440\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u0430\u0432\u043E\u043C\u0430\u0448\u0438\u043D","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u0440\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u0431\u043B\u0435\u043D\u0434\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u0456\u043A\u0441\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C'\u044F\u0441\u043E\u0440\u0443\u0431\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u043E\u043A\u043E\u0432\u0438\u0436\u0438\u043C\u0430\u043B\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u043E\u0441\u0442\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0447\u0430\u0439\u043D\u0438\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u0430\u0441\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0430\u0440\u043E\u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0438\u043B\u043E\u0441\u043E\u0441\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0440\u043E\u0431\u043E\u0442\u0456\u0432-\u043F\u0438\u043B\u043E\u0441\u043E\u0441\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043B\u0430\u0437\u043C\u043E\u0432\u0438\u0445 \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 LED \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 Smart TV","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u043E\u043D\u0456\u0442\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0440\u0456\u0432","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0440\u043E\u043D\u0448\u0442\u0435\u0439\u043D\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0430\u0443\u0434\u0456\u043E\u0442\u0435\u0445\u043D\u0456\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0445 \u0446\u0435\u043D\u0442\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0456\u0434\u0441\u0438\u043B\u044E\u0432\u0430\u0447\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043D\u0430\u0432\u0443\u0448\u043D\u0438\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 iPhone","\u0420\u0435\u043C\u043E\u043D\u0442 Samsung","\u0420\u0435\u043C\u043E\u043D\u0442 Xiaomi","\u0417\u0430\u043C\u0456\u043D\u0430 \u0435\u043A\u0440\u0430\u043D\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u044F","\u0417\u0430\u043C\u0456\u043D\u0430 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u043E\u0437'\u0454\u043C\u0443 \u0437\u0430\u0440\u044F\u0434\u043A\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043D\u043E\u043F\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0434\u0438\u043D\u0430\u043C\u0456\u043A\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043C\u0456\u043A\u0440\u043E\u0444\u043E\u043D\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0437\u0430\u0434\u043D\u044C\u043E\u0457 \u043A\u0440\u0438\u0448\u043A\u0438","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0432\u043E\u0434\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 iPad","\u0420\u0435\u043C\u043E\u043D\u0442 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 MacBook","\u0427\u0438\u0441\u0442\u043A\u0430 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043C\u0430\u0442\u0440\u0438\u0446\u0456","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043B\u0430\u0432\u0456\u0430\u0442\u0443\u0440\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0436\u043E\u0440\u0441\u0442\u043A\u043E\u0433\u043E \u0434\u0438\u0441\u043A\u0430","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F SSD","\u0417\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u043D\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456","\u0417\u0430\u043C\u0456\u043D\u0430 \u0442\u0435\u0440\u043C\u043E\u043F\u0430\u0441\u0442\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u041F\u041A","\u0417\u0431\u0456\u0440\u043A\u0430 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u0410\u043F\u0433\u0440\u0435\u0439\u0434 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u041A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u041F\u041A","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F Windows","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F Linux","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F macOS","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0456\u0432","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F Wi-Fi","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0440\u043E\u0443\u0442\u0435\u0440\u0430","\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u043D\u0442\u0435\u0440\u0430","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u0438\u043D\u0442\u0435\u0440\u0430","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u0430\u043D\u0435\u0440\u0430","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0440\u0443\u0441\u0456\u0432","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0440\u0443\u0441\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u043D\u0442\u0438\u0432\u0456\u0440\u0443\u0441\u0430","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043D\u0442\u0438\u0432\u0456\u0440\u0443\u0441\u0430","\u0427\u0438\u0441\u0442\u043A\u0430 \u0432\u0456\u0434 \u0432\u0456\u0440\u0443\u0441\u0456\u0432","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0456\u0432","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0444\u043E\u0442\u043E","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0444\u043E\u0440\u043C\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0435 \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445","\u041F\u0440\u0438\u0441\u043A\u043E\u0440\u0435\u043D\u043D\u044F \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0430","\u041E\u043F\u0442\u0438\u043C\u0456\u0437\u0430\u0446\u0456\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0438","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F BIOS","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0447\u0438\u0445","\u0427\u0438\u0441\u0442\u043A\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0433\u043E \u0431\u043B\u043E\u043A\u0443","\u0410\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0456\u0441","\u0421\u0422\u041E","\u0420\u0435\u043C\u043E\u043D\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u0456\u0432","\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0435 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u041E","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0430\u0432\u0442\u043E","\u041A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u0430 \u0434\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0445\u043E\u0434\u043E\u0432\u043E\u0457","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043F\u0456\u0434\u0432\u0456\u0441\u043A\u0438","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0433\u0430\u043B\u044C\u043C","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u041A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043C\u0430\u0441\u043B\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0444\u0456\u043B\u044C\u0442\u0440\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043C\u0430\u0441\u043B\u044F\u043D\u043E\u0433\u043E \u0444\u0456\u043B\u044C\u0442\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u043E\u0433\u043E \u0444\u0456\u043B\u044C\u0442\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u0430\u043B\u0438\u0432\u043D\u043E\u0433\u043E \u0444\u0456\u043B\u044C\u0442\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0441\u0430\u043B\u043E\u043D\u043D\u043E\u0433\u043E \u0444\u0456\u043B\u044C\u0442\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0441\u0432\u0456\u0447\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0413\u0420\u041C","\u0420\u0435\u043C\u043E\u043D\u0442 \u0445\u043E\u0434\u043E\u0432\u043E\u0457","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0456\u0434\u0432\u0456\u0441\u043A\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0430\u043C\u043E\u0440\u0442\u0438\u0437\u0430\u0442\u043E\u0440\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0441\u0442\u0456\u0439\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0441\u0430\u0439\u043B\u0435\u043D\u0442\u0431\u043B\u043E\u043A\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0432\u0430\u0436\u0435\u043B\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u0443\u043B\u044C\u043E\u0432\u0438\u0445","\u0417\u0430\u043C\u0456\u043D\u0430 \u043D\u0430\u043A\u043E\u043D\u0435\u0447\u043D\u0438\u043A\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u0443\u043B\u044C\u043E\u0432\u0438\u0445 \u0442\u044F\u0433","\u0420\u0435\u043C\u043E\u043D\u0442 \u0433\u0430\u043B\u044C\u043C","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0430\u043B\u044C\u043C\u0456\u0432\u043D\u0438\u0445 \u043A\u043E\u043B\u043E\u0434\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0430\u043B\u044C\u043C\u0456\u0432\u043D\u0438\u0445 \u0434\u0438\u0441\u043A\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0430\u043B\u044C\u043C\u0456\u0432\u043D\u0438\u0445 \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0430\u043B\u044C\u043C\u0456\u0432\u043D\u043E\u0457 \u0440\u0456\u0434\u0438\u043D\u0438","\u041F\u0440\u043E\u043A\u0430\u0447\u043A\u0430 \u0433\u0430\u043B\u044C\u043C","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0440\u0430\u043D\u0441\u043C\u0456\u0441\u0456\u0457","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447","\u0420\u0435\u043C\u043E\u043D\u0442 \u041C\u041A\u041F\u041F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0410\u041A\u041F\u041F","\u0417\u0430\u043C\u0456\u043D\u0430 \u0437\u0447\u0435\u043F\u043B\u0435\u043D\u043D\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0440\u043E\u0437\u0434\u0430\u0442\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0428\u0420\u0423\u0421","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u043E\u0445\u043E\u043B\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u0430\u0434\u0456\u0430\u0442\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u043E\u043C\u043F\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0442\u0435\u0440\u043C\u043E\u0441\u0442\u0430\u0442\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0430\u043D\u0442\u0438\u0444\u0440\u0438\u0437\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u0430\u043F\u0440\u0430\u0432\u043A\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0430 \u0430\u0432\u0442\u043E","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u0430\u0434\u0456\u0430\u0442\u043E\u0440\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u0435\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438 \u0430\u0432\u0442\u043E","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0442\u0430\u0440\u0442\u0435\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430","\u0417\u0430\u0440\u044F\u0434\u043A\u0430 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u043E\u0432\u043E\u0434\u043A\u0438","\u0420\u043E\u0437\u0432\u0430\u043B-\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u043D\u044F","3D \u0440\u043E\u0437\u0432\u0430\u043B-\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u043D\u044F","\u0420\u0435\u0433\u0443\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0440\u043E\u0437\u0432\u0430\u043B\u0443","\u0420\u0435\u0433\u0443\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0445\u043E\u0436\u0434\u0435\u043D\u043D\u044F","\u0428\u0438\u043D\u043E\u043C\u043E\u043D\u0442\u0430\u0436","\u041C\u043E\u043D\u0442\u0430\u0436 \u0448\u0438\u043D","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0448\u0438\u043D","\u0411\u0430\u043B\u0430\u043D\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043B\u0456\u0441","\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u043E\u043A\u043E\u043B\u0456\u0432","\u0412\u0443\u043B\u043A\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F","\u0417\u0430\u043C\u0456\u043D\u0430 \u0432\u0435\u043D\u0442\u0438\u043B\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043E\u043B\u0456\u0441","\u0421\u0435\u0437\u043E\u043D\u043D\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F \u0448\u0438\u043D","\u0410\u0432\u0442\u043E\u043C\u0438\u0439\u043A\u0430","\u041C\u0438\u0439\u043A\u0430 \u0430\u0432\u0442\u043E","\u0420\u0443\u0447\u043D\u0430 \u043C\u0438\u0439\u043A\u0430","\u0411\u0435\u0437\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u043C\u0438\u0439\u043A\u0430","\u041C\u0438\u0439\u043A\u0430 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u041C\u0438\u0439\u043A\u0430 \u0434\u043D\u0438\u0449\u0430","\u041C\u0438\u0439\u043A\u0430 \u043A\u043E\u043B\u0456\u0441\u043D\u0438\u0445 \u0430\u0440\u043E\u043A","\u0421\u0443\u0445\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u0430\u043B\u043E\u043D\u0443","\u0412\u043E\u043B\u043E\u0433\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u0430\u043B\u043E\u043D\u0443","\u0414\u0435\u0442\u0435\u0439\u043B\u0456\u043D\u0433","\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0430 \u043C\u0438\u0439\u043A\u0430","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0441\u0430\u043B\u043E\u043D\u0443","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0441\u0438\u0434\u0456\u043D\u044C","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0441\u0442\u0435\u043B\u0456","\u0427\u0438\u0441\u0442\u043A\u0430 \u0441\u0430\u043B\u043E\u043D\u0443","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u0437\u043E\u0432\u0430","\u0410\u0431\u0440\u0430\u0437\u0438\u0432\u043D\u0435 \u043F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u0430\u0445\u0438\u0441\u043D\u0435 \u043F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u041D\u0430\u043D\u043E\u043A\u0435\u0440\u0430\u043C\u0456\u043A\u0430","\u0420\u0456\u0434\u043A\u0435 \u0441\u043A\u043B\u043E","\u0412\u043E\u0441\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u043A\u043E\u043D \u0430\u0432\u0442\u043E","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0444\u0430\u0440","\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F","\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0444\u0430\u0440","\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u0437\u043E\u0432\u0430","\u0410\u043D\u0442\u0438\u0433\u0440\u0430\u0432\u0456\u0439\u043D\u0430 \u043F\u043B\u0456\u0432\u043A\u0430","\u041E\u043A\u043B\u0435\u0439\u043A\u0430 \u0430\u0432\u0442\u043E","\u041E\u043A\u043B\u0435\u0439\u043A\u0430 \u043F\u043B\u0456\u0432\u043A\u043E\u044E","\u0412\u0456\u043D\u0456\u043B\u043E\u0432\u0430 \u043F\u043B\u0456\u0432\u043A\u0430","\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430 \u043F\u043B\u0456\u0432\u043A\u0430","\u0410\u0435\u0440\u043E\u0433\u0440\u0430\u0444\u0456\u044F","\u0420\u043E\u0437\u043F\u0438\u0441 \u0430\u0432\u0442\u043E","\u041A\u0443\u0437\u043E\u0432\u043D\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442","\u0420\u0438\u0445\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u0438\u0445\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u0437\u043E\u0432\u0430","\u0417\u0432\u0430\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u0437\u043E\u0432\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u043E\u0440\u043E\u0433\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u0440\u0438\u043B\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0434\u0432\u0435\u0440\u0435\u0439","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u0430\u043F\u043E\u0442\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0431\u0430\u043C\u043F\u0435\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u0431\u0430\u043C\u043F\u0435\u0440\u0430","\u041C\u0430\u043B\u044F\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438 \u0430\u0432\u0442\u043E","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u0432\u0442\u043E","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0435\u0442\u0430\u043B\u0435\u0439","\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u0435 \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u043E\u0432\u043D\u0435 \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0456\u0434\u0431\u0456\u0440 \u0444\u0430\u0440\u0431\u0438","\u041A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u0438\u0439 \u043F\u0456\u0434\u0431\u0456\u0440 \u0444\u0430\u0440\u0431\u0438","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443","\u0417\u0430\u0445\u0438\u0441\u0442 \u043A\u0430\u0440\u0442\u0435\u0440\u0430","\u0417\u0430\u0445\u0438\u0441\u0442 \u0434\u043D\u0438\u0449\u0430","\u0410\u043D\u0442\u0438\u043A\u043E\u0440\u043E\u0437\u0456\u0439\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430","\u0428\u0443\u043C\u043E\u0456\u0437\u043E\u043B\u044F\u0446\u0456\u044F","\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044F","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u0432\u0442\u043E\u0437\u0432\u0443\u043A\u0443","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F GPS","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u0435\u043E\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0442\u0440\u043E\u043D\u0456\u043Aa","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0430\u043C\u0435\u0440\u0438 \u0437\u0430\u0434\u043D\u044C\u043E\u0433\u043E \u0432\u0438\u0434\u0443","\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0444\u0430\u0440\u043A\u043E\u043F\u0430","\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A\u0430","\u0422\u044E\u043D\u0456\u043D\u0433","\u0422\u044E\u043D\u0456\u043D\u0433 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u0427\u0456\u043F-\u0442\u044E\u043D\u0456\u043D\u0433","\u0422\u044E\u043D\u0456\u043D\u0433 \u043F\u0456\u0434\u0432\u0456\u0441\u043A\u0438","\u0422\u044E\u043D\u0456\u043D\u0433 \u0441\u0430\u043B\u043E\u043D\u0443","\u041F\u0435\u0440\u0435\u0442\u044F\u0436\u043A\u0430 \u0441\u0430\u043B\u043E\u043D\u0443","\u041F\u0435\u0440\u0435\u0442\u044F\u0436\u043A\u0430 \u0441\u0438\u0434\u0456\u043D\u044C","\u041F\u0435\u0440\u0435\u0442\u044F\u0436\u043A\u0430 \u043A\u0435\u0440\u043C\u0430","\u0422\u044E\u043D\u0456\u043D\u0433 \u0441\u0432\u0456\u0442\u043B\u0430","\u041A\u0441\u0435\u043D\u043E\u043D","\u0411\u0456\u043A\u0441\u0435\u043D\u043E\u043D","LED \u043B\u0430\u043C\u043F\u0438","\u0415\u0432\u0430\u043A\u0443\u0430\u0442\u043E\u0440","\u0415\u0432\u0430\u043A\u0443\u0430\u0446\u0456\u044F \u0430\u0432\u0442\u043E","\u0422\u0435\u0445\u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043D\u0430 \u0434\u043E\u0440\u043E\u0437\u0456","\u0412\u0430\u043D\u0442\u0430\u0436\u043D\u0456 \u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F","\u0412\u0430\u043D\u0442\u0430\u0436\u043E\u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F","\u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0432\u0430\u043D\u0442\u0430\u0436\u0456\u0432","\u0412\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043A\u0438","\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u0432\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043A\u0456\u0432","\u041D\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F","\u0420\u043E\u0437\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0441\u043C\u0456\u0442\u0442\u044F \u0432\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043C \u0430\u0432\u0442\u043E","\u041F\u0435\u0440\u0435\u0457\u0437\u0434","\u041F\u0435\u0440\u0435\u0457\u0437\u0434 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0438","\u041F\u0435\u0440\u0435\u0457\u0437\u0434 \u043E\u0444\u0456\u0441\u0443","\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0440\u0435\u0447\u0435\u0439","\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u042E\u0440\u0438\u0441\u0442","\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u0457","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u044E\u0440\u0438\u0441\u0442\u0430","\u041F\u0440\u0430\u0432\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430","\u0410\u0434\u0432\u043E\u043A\u0430\u0442","\u0410\u0434\u0432\u043E\u043A\u0430\u0442\u0441\u044C\u043A\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043D\u0438\u0446\u0442\u0432\u043E \u0432 \u0441\u0443\u0434\u0456","\u0421\u0443\u0434\u043E\u0432\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u0426\u0438\u0432\u0456\u043B\u044C\u043D\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u041A\u0440\u0438\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u0413\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u044C\u043A\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0437\u043E\u0432\u0456\u0432","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0441\u043A\u0430\u0440\u0433","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0456\u0432","\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0456\u0432","\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0430 \u0435\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430","\u041F\u0440\u0430\u0432\u043E\u0432\u0430 \u0435\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432","\u041D\u043E\u0442\u0430\u0440\u0456\u0443\u0441","\u041D\u043E\u0442\u0430\u0440\u0456\u0430\u043B\u044C\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041D\u043E\u0442\u0430\u0440\u0456\u0430\u043B\u044C\u043D\u0435 \u043F\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u043D\u044F","\u0414\u043E\u0432\u0456\u0440\u0435\u043D\u043E\u0441\u0442\u0456","\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430 \u0434\u043E\u0432\u0456\u0440\u0435\u043D\u0456\u0441\u0442\u044C","\u0414\u043E\u0432\u0456\u0440\u0435\u043D\u0456\u0441\u0442\u044C \u043D\u0430 \u0430\u0432\u0442\u043E","\u0414\u043E\u0432\u0456\u0440\u0435\u043D\u0456\u0441\u0442\u044C \u043D\u0430 \u0434\u0438\u0442\u0438\u043D\u0443","\u0417\u0430\u043F\u043E\u0432\u0456\u0442\u0438","\u0421\u043F\u0430\u0434\u0449\u0438\u043D\u0430","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0438","\u0412\u0441\u0442\u0443\u043F \u0443 \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0443","\u0421\u0432\u0456\u0434\u043E\u0446\u0442\u0432\u043E \u043F\u0440\u043E \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0443","\u041D\u043E\u0442\u0430\u0440\u0456\u0430\u043B\u044C\u043D\u0435 \u0437\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F","\u0417\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F \u043A\u043E\u043F\u0456\u0439","\u0417\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F \u043F\u0456\u0434\u043F\u0438\u0441\u0456\u0432","\u0417\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u0410\u043F\u043E\u0441\u0442\u0438\u043B\u044C","\u041B\u0435\u0433\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0441\u044C\u043A\u0430 \u043B\u0435\u0433\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0431\u0456\u0437\u043D\u0435\u0441\u0443","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0424\u041E\u041F","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0422\u041E\u0412","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u041F\u041F","\u041B\u0456\u043A\u0432\u0456\u0434\u0430\u0446\u0456\u044F \u0424\u041E\u041F","\u041B\u0456\u043A\u0432\u0456\u0434\u0430\u0446\u0456\u044F \u0422\u041E\u0412","\u0417\u043C\u0456\u043D\u0430 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430","\u0417\u043C\u0456\u043D\u0430 \u0443\u0447\u0430\u0441\u043D\u0438\u043A\u0456\u0432","\u0412\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0437\u043C\u0456\u043D \u0434\u043E \u0441\u0442\u0430\u0442\u0443\u0442\u0443","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0457 \u043C\u0430\u0440\u043A\u0438","\u041F\u0430\u0442\u0435\u043D\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u0410\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0435 \u043F\u0440\u0430\u0432\u043E","\u041B\u0456\u0446\u0435\u043D\u0437\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u0435\u043C\u0435\u043B\u044C\u043D\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0437\u0435\u043C\u043B\u0456","\u041F\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u0437\u0435\u043C\u043B\u0456","\u041A\u0443\u043F\u0456\u0432\u043B\u044F-\u043F\u0440\u043E\u0434\u0430\u0436 \u0437\u0435\u043C\u043B\u0456","\u041E\u0440\u0435\u043D\u0434\u0430 \u0437\u0435\u043C\u043B\u0456","\u041D\u0435\u0440\u0443\u0445\u043E\u043C\u0456\u0441\u0442\u044C","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u041A\u0443\u043F\u0456\u0432\u043B\u044F-\u043F\u0440\u043E\u0434\u0430\u0436 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u041E\u0440\u0435\u043D\u0434\u0430 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u0414\u043E\u0433\u043E\u0432\u0456\u0440 \u043A\u0443\u043F\u0456\u0432\u043B\u0456-\u043F\u0440\u043E\u0434\u0430\u0436\u0443","\u0414\u043E\u0433\u043E\u0432\u0456\u0440 \u043E\u0440\u0435\u043D\u0434\u0438","\u041F\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0438","\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0432 \u0435\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0456\u044E","\u041F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0439 \u043F\u0430\u0441\u043F\u043E\u0440\u0442","\u0421\u0456\u043C\u0435\u0439\u043D\u0435 \u043F\u0440\u0430\u0432\u043E","\u0420\u043E\u0437\u043B\u0443\u0447\u0435\u043D\u043D\u044F","\u041F\u043E\u0434\u0456\u043B \u043C\u0430\u0439\u043D\u0430","\u0410\u043B\u0456\u043C\u0435\u043D\u0442\u0438","\u0421\u0442\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0430\u043B\u0456\u043C\u0435\u043D\u0442\u0456\u0432","\u041F\u043E\u0437\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0430\u0442\u044C\u043A\u0456\u0432\u0441\u044C\u043A\u0438\u0445 \u043F\u0440\u0430\u0432","\u0423\u0441\u0438\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041E\u043F\u0456\u043A\u0430","\u0422\u0440\u0443\u0434\u043E\u0432\u0435 \u043F\u0440\u0430\u0432\u043E","\u0422\u0440\u0443\u0434\u043E\u0432\u0456 \u0441\u043F\u043E\u0440\u0438","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043D\u0430 \u0440\u043E\u0431\u043E\u0442\u0456","\u0421\u0442\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0438","\u041A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0456\u0457 \u043F\u0440\u0438 \u0437\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043D\u0456","\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u044C\u043A\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440","\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u044C\u043A\u0438\u0439 \u043E\u0431\u043B\u0456\u043A","\u0412\u0435\u0434\u0435\u043D\u043D\u044F \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0456\u0457","\u041F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0438\u0439 \u043E\u0431\u043B\u0456\u043A","\u041F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0437\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C","\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0430 \u0437\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0437\u0432\u0456\u0442\u043D\u043E\u0441\u0442\u0456","\u0417\u0434\u0430\u0447\u0430 \u0437\u0432\u0456\u0442\u043D\u043E\u0441\u0442\u0456","\u0414\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0456\u0457","\u0404\u0434\u0438\u043D\u0438\u0439 \u043F\u043E\u0434\u0430\u0442\u043E\u043A","\u041F\u0414\u0412","\u041E\u0431\u043B\u0456\u043A \u041F\u0414\u0412","\u041F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u0457","\u041E\u043F\u0442\u0438\u043C\u0456\u0437\u0430\u0446\u0456\u044F \u043E\u043F\u043E\u0434\u0430\u0442\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u043D\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442","\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0438","\u041A\u0430\u0434\u0440\u043E\u0432\u0438\u0439 \u043E\u0431\u043B\u0456\u043A","\u041A\u0430\u0434\u0440\u043E\u0432\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0456\u0432","\u0422\u0440\u0443\u0434\u043E\u0432\u0456 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0438","\u0410\u0443\u0434\u0438\u0442","\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0438\u0439 \u0430\u0443\u0434\u0438\u0442","\u041F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0438\u0439 \u0430\u0443\u0434\u0438\u0442","\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u0430\u0443\u0434\u0438\u0442","\u041E\u0446\u0456\u043D\u043A\u0430 \u0431\u0456\u0437\u043D\u0435\u0441\u0443","\u041E\u0446\u0456\u043D\u043A\u0430 \u043C\u0430\u0439\u043D\u0430","\u041E\u0446\u0456\u043D\u043A\u0430 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u0415\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u0430 \u043E\u0446\u0456\u043D\u043A\u0430","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0446\u044C\u043A\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041F\u0438\u0441\u044C\u043C\u043E\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0423\u0441\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041C\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0425\u0443\u0434\u043E\u0436\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041D\u0430\u0443\u043A\u043E\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u043D\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0443","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u043D\u0456\u043C\u0435\u0446\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u0456\u0441\u043F\u0430\u043D\u0441\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u0456\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u043F\u043E\u043B\u044C\u0441\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0456\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u0456\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0434\u0438\u043F\u043B\u043E\u043C\u0456\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0441\u0432\u0456\u0434\u043E\u0446\u0442\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0456\u0432","\u041D\u043E\u0442\u0430\u0440\u0456\u0430\u043B\u044C\u043D\u0435 \u0437\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u041B\u0435\u0433\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u0410\u043F\u043E\u0441\u0442\u0438\u043B\u044C \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0441\u0430\u0439\u0442\u0456\u0432","\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C","\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0456\u0433\u043E\u0440","\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u041A\u043E\u0440\u0435\u043A\u0442\u0443\u0440\u0430","\u0412\u0438\u0447\u0438\u0442\u043A\u0430 \u0442\u0435\u043A\u0441\u0442\u0456\u0432","\u041B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u0430 \u043A\u043B\u0456\u043D\u0456\u043A\u0430","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430","\u0412\u0438\u0457\u0437\u0434 \u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u0430","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440 \u043D\u0430 \u0434\u043E\u043C\u0443","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u0430","\u041E\u0433\u043B\u044F\u0434 \u0442\u0432\u0430\u0440\u0438\u043D\u0438","\u0412\u0430\u043A\u0446\u0438\u043D\u0430\u0446\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0429\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u0429\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u043A\u043E\u0442\u0456\u0432","\u0412\u0430\u043A\u0446\u0438\u043D\u0430 \u0432\u0456\u0434 \u0441\u043A\u0430\u0437\u0443","\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430 \u0432\u0430\u043A\u0446\u0438\u043D\u0430\u0446\u0456\u044F","\u0414\u0435\u0433\u0435\u043B\u044C\u043C\u0456\u043D\u0442\u0438\u0437\u0430\u0446\u0456\u044F","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u043F\u0430\u0440\u0430\u0437\u0438\u0442\u0456\u0432","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u0431\u043B\u0456\u0445","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u043A\u043B\u0456\u0449\u0456\u0432","\u0421\u0442\u0435\u0440\u0438\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0421\u0442\u0435\u0440\u0438\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043A\u0456\u0448\u043E\u043A","\u0421\u0442\u0435\u0440\u0438\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0441\u043E\u0431\u0430\u043A","\u041A\u0430\u0441\u0442\u0440\u0430\u0446\u0456\u044F","\u041A\u0430\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043A\u043E\u0442\u0456\u0432","\u041A\u0430\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u043E\u0431\u0430\u043A","\u0427\u0456\u043F\u0443\u0432\u0430\u043D\u043D\u044F","\u0427\u0456\u043F\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u0438\u0439 \u043F\u0430\u0441\u043F\u043E\u0440\u0442","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u0432\u0438\u0457\u0437\u0434\u0443","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0442\u0432\u0430\u0440\u0438\u043D","\u0423\u0417\u0414 \u0442\u0432\u0430\u0440\u0438\u043D","\u0420\u0435\u043D\u0442\u0433\u0435\u043D \u0442\u0432\u0430\u0440\u0438\u043D","\u0415\u041A\u0413 \u0442\u0432\u0430\u0440\u0438\u043D","\u0410\u043D\u0430\u043B\u0456\u0437\u0438 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 \u0434\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0422\u0435\u0440\u0430\u043F\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u0442\u0456\u0432","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0440\u0438\u0437\u0443\u043D\u0456\u0432","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0442\u0430\u0445\u0456\u0432","\u0415\u043A\u0437\u043E\u0442\u0438\u0447\u043D\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438","\u0425\u0456\u0440\u0443\u0440\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041E\u043F\u0435\u0440\u0430\u0446\u0456\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C","\u041E\u0440\u0442\u043E\u043F\u0435\u0434\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041E\u0444\u0442\u0430\u043B\u044C\u043C\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0447\u0435\u0439","\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0427\u0438\u0441\u0442\u043A\u0430 \u0437\u0443\u0431\u0456\u0432 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0443\u0431\u043D\u043E\u0433\u043E \u043A\u0430\u043C\u0435\u043D\u044E","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432 \u0442\u0432\u0430\u0440\u0438\u043D","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0414\u0435\u0440\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u043A\u0456\u0440\u0438","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0443\u0445","\u041A\u0430\u0440\u0434\u0456\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041D\u0435\u0432\u0440\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041E\u043D\u043A\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0415\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0420\u0435\u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0420\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044F","\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u043E\u0433\u0430\u0445","\u0412\u0435\u0434\u0435\u043D\u043D\u044F \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456","\u0423\u0417\u0414 \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456","\u0415\u0432\u0442\u0430\u043D\u0430\u0437\u0456\u044F","\u041A\u0440\u0435\u043C\u0430\u0446\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C\u0438","\u0417\u043E\u043E\u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044F","\u0413\u043E\u0442\u0435\u043B\u044C \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0413\u043E\u0442\u0435\u043B\u044C \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A","\u0413\u043E\u0442\u0435\u043B\u044C \u0434\u043B\u044F \u043A\u043E\u0442\u0456\u0432","\u041F\u0435\u0440\u0435\u0434\u0435\u0440\u0436\u043A\u0430 \u0442\u0432\u0430\u0440\u0438\u043D","\u041F\u0435\u0440\u0435\u0434\u0435\u0440\u0436\u043A\u0430 \u0441\u043E\u0431\u0430\u043A","\u041F\u0435\u0440\u0435\u0434\u0435\u0440\u0436\u043A\u0430 \u043A\u043E\u0442\u0456\u0432","\u0414\u0435\u043D\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434","\u0412\u0438\u0433\u0443\u043B \u0441\u043E\u0431\u0430\u043A","\u0412\u0438\u0433\u0443\u043B","\u0412\u0438\u0433\u0443\u043B\u044C\u043D\u0438\u043A","\u0414\u0440\u0435\u0441\u0438\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0440\u0435\u0441\u0438\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u041A\u0456\u043D\u043E\u043B\u043E\u0433","\u041A\u0456\u043D\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u0422\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u0412\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F \u0446\u0443\u0446\u0435\u043D\u044F\u0442","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0438","\u0417\u041A\u0421","\u041E\u041A\u0414","\u0417\u0430\u0445\u0438\u0441\u043D\u043E-\u043A\u0430\u0440\u0430\u0443\u043B\u044C\u043D\u0430 \u0441\u043B\u0443\u0436\u0431\u0430","\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u043A\u0443\u0440\u0441 \u0434\u0440\u0435\u0441\u0438\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0410\u0434\u0436\u0438\u043B\u0456\u0442\u0456","\u0424\u0440\u0456\u0441\u0431\u0456","\u0417\u043E\u043E\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433","\u0425\u0435\u043D\u0434\u043B\u0456\u043D\u0433","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0432\u0438\u0441\u0442\u0430\u0432\u043E\u043A","\u0417\u043E\u043E\u0442\u0430\u043A\u0441\u0438","\u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0437\u0430 \u043A\u043E\u0440\u0434\u043E\u043D","\u0422\u0430\u043A\u0441\u0456 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0417\u043E\u043E\u043C\u0430\u0433\u0430\u0437\u0438\u043D","\u041A\u043E\u0440\u043C \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0410\u043A\u0441\u0435\u0441\u0443\u0430\u0440\u0438 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041E\u0434\u044F\u0433 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0410\u0432\u0442\u043E\u0448\u043A\u043E\u043B\u0430","\u041A\u0443\u0440\u0441\u0438 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0432\u043E\u0434\u0456\u043D\u043D\u044E","\u0410\u0432\u0442\u043E\u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440","\u0406\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0437 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F B","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F A","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F C","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F D","\u0422\u0435\u043E\u0440\u0456\u044F \u041F\u0414\u0420","\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u0437 \u043D\u0443\u043B\u044F","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043D\u0430\u0432\u0438\u0447\u043E\u043A \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043C\u0435\u0445\u0430\u043D\u0456\u043A\u0430","\u0415\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u0435 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u041A\u043E\u043D\u0442\u0440\u0430\u0432\u0430\u0440\u0456\u0439\u043D\u0435 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u041A\u0443\u0440\u0441\u0438 \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u043E\u0433\u043E \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0456\u0441\u043F\u0438\u0442\u0443","\u0421\u0443\u043F\u0440\u043E\u0432\u0456\u0434 \u043D\u0430 \u0456\u0441\u043F\u0438\u0442","\u041E\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E \u0434\u043B\u044F \u0456\u0441\u043F\u0438\u0442\u0443","\u041E\u0441\u0432\u0456\u0442\u0430","\u0420\u0435\u043F\u0435\u0442\u0438\u0442\u043E\u0440","\u0420\u0435\u043F\u0435\u0442\u0438\u0442\u043E\u0440\u0441\u0442\u0432\u043E","\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0456 \u0437\u0430\u043D\u044F\u0442\u0442\u044F","\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0456 \u0443\u0440\u043E\u043A\u0438","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0448\u043A\u043E\u043B\u0438","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u041D\u041C\u0422","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0417\u041D\u041E","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0414\u041F\u0410","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0456\u0441\u043F\u0438\u0442\u0456\u0432","\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u0437 \u0434\u043E\u043C\u0430\u0448\u043D\u0456\u043C \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\u043C","\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u043B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430","\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0420\u043E\u0437\u043C\u043E\u0432\u043D\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430","\u0414\u0456\u043B\u043E\u0432\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430","\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u0434\u043B\u044F \u0434\u0456\u0442\u0435\u0439","\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u0434\u043B\u044F \u0434\u043E\u0440\u043E\u0441\u043B\u0438\u0445","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E IELTS","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E TOEFL","\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0406\u0441\u043F\u0430\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0406\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u041F\u043E\u043B\u044C\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u041A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u041A\u043E\u0440\u0435\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0422\u0443\u0440\u0435\u0446\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0427\u0435\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0412\u0438\u0432\u0447\u0435\u043D\u043D\u044F \u043C\u043E\u0432","\u041A\u0443\u0440\u0441\u0438 \u0456\u043D\u043E\u0437\u0435\u043C\u043D\u0438\u0445 \u043C\u043E\u0432","\u041E\u043D\u043B\u0430\u0439\u043D-\u0443\u0440\u043E\u043A\u0438","\u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0456\u0439\u043D\u0435 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F","\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430","\u0410\u043B\u0433\u0435\u0431\u0440\u0430","\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0456\u044F","\u0412\u0438\u0449\u0430 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430","\u0424\u0456\u0437\u0438\u043A\u0430","\u0425\u0456\u043C\u0456\u044F","\u0411\u0456\u043E\u043B\u043E\u0433\u0456\u044F","\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0456\u044F","\u0406\u0441\u0442\u043E\u0440\u0456\u044F","\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u0423\u043A\u0440\u0430\u0457\u043D\u0438","\u0412\u0441\u0435\u0441\u0432\u0456\u0442\u043D\u044F \u0456\u0441\u0442\u043E\u0440\u0456\u044F","\u041F\u0440\u0430\u0432\u043E\u0437\u043D\u0430\u0432\u0441\u0442\u0432\u043E","\u0415\u043A\u043E\u043D\u043E\u043C\u0456\u043A\u0430","\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430","\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0443\u0432\u0430\u043D\u043D\u044F","Python","Java","C++","JavaScript","Web-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u043E\u0437\u0440\u043E\u0431\u043A\u0430 \u0441\u0430\u0439\u0442\u0456\u0432","\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0441\u0430\u0439\u0442\u0456\u0432","\u0412\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043D","\u0413\u0440\u0430\u0444\u0456\u0447\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D","Photoshop","Illustrator","CorelDRAW","3D \u043C\u043E\u0434\u0435\u043B\u044E\u0432\u0430\u043D\u043D\u044F","3ds Max","Blender","AutoCAD","\u0414\u0438\u0437\u0430\u0439\u043D \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F","\u0412\u0456\u0434\u0435\u043E\u043C\u043E\u043D\u0442\u0430\u0436 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F","Premiere Pro","After Effects","\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u044F \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F","\u041A\u0443\u0440\u0441\u0438 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457","\u041C\u0443\u0437\u0438\u043A\u0430","\u0423\u0440\u043E\u043A\u0438 \u043C\u0443\u0437\u0438\u043A\u0438","\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u043C\u0443\u0437\u0438\u043A\u0438","\u041C\u0443\u0437\u0438\u0447\u043D\u0430 \u0448\u043A\u043E\u043B\u0430","\u0423\u0440\u043E\u043A\u0438 \u0432\u043E\u043A\u0430\u043B\u0443","\u0423\u0440\u043E\u043A\u0438 \u0441\u043F\u0456\u0432\u0443","\u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0433\u043E\u043B\u043E\u0441\u0443","\u0423\u0440\u043E\u043A\u0438 \u0433\u0456\u0442\u0430\u0440\u0438","\u0413\u0456\u0442\u0430\u0440\u0430 \u0434\u043B\u044F \u043F\u043E\u0447\u0430\u0442\u043A\u0456\u0432\u0446\u0456\u0432","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0456\u0442\u0430\u0440\u0430","\u0411\u0430\u0441-\u0433\u0456\u0442\u0430\u0440\u0430","\u0423\u043A\u0443\u043B\u0435\u043B\u0435","\u0423\u0440\u043E\u043A\u0438 \u0444\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043E","\u0424\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043E \u0434\u043B\u044F \u0434\u0456\u0442\u0435\u0439","\u0424\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043E \u0434\u043B\u044F \u0434\u043E\u0440\u043E\u0441\u043B\u0438\u0445","\u0421\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440","\u0423\u0440\u043E\u043A\u0438 \u0441\u043A\u0440\u0438\u043F\u043A\u0438","\u0423\u0440\u043E\u043A\u0438 \u0432\u0456\u043E\u043B\u043E\u043D\u0447\u0435\u043B\u0456","\u0423\u0440\u043E\u043A\u0438 \u0441\u0430\u043A\u0441\u043E\u0444\u043E\u043D\u0430","\u0423\u0440\u043E\u043A\u0438 \u0444\u043B\u0435\u0439\u0442\u0438","\u0423\u0440\u043E\u043A\u0438 \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u0456\u0432","\u0423\u0434\u0430\u0440\u043D\u0456 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438","\u0421\u043E\u043B\u044C\u0444\u0435\u0434\u0436\u0456\u043E","\u041C\u0443\u0437\u0438\u0447\u043D\u0430 \u0433\u0440\u0430\u043C\u043E\u0442\u0430","\u0422\u0435\u043E\u0440\u0456\u044F \u043C\u0443\u0437\u0438\u043A\u0438","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u0434\u0438\u0442\u0438\u043D\u0438","\u0420\u0430\u043D\u043D\u0456\u0439 \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A","\u0420\u043E\u0437\u0432\u0438\u0432\u0430\u044E\u0447\u0456 \u0437\u0430\u043D\u044F\u0442\u0442\u044F","\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A","\u0417\u0430\u043D\u044F\u0442\u0442\u044F \u0434\u043B\u044F \u043C\u0430\u043B\u044E\u043A\u0456\u0432","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0448\u043A\u043E\u043B\u0438 5 \u0440\u043E\u043A\u0456\u0432","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0448\u043A\u043E\u043B\u0438 6 \u0440\u043E\u043A\u0456\u0432","\u0427\u0438\u0442\u0430\u043D\u043D\u044F","\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0447\u0438\u0442\u0430\u043D\u043D\u044E","\u0428\u0432\u0438\u0434\u043A\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044F","\u041F\u0438\u0441\u044C\u043C\u043E","\u041A\u0430\u043B\u0456\u0433\u0440\u0430\u0444\u0456\u044F","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u043F\u0430\u043C'\u044F\u0442\u0456","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u0443\u0432\u0430\u0433\u0438","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u043B\u043E\u0433\u0456\u043A\u0438","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u043C\u0438\u0441\u043B\u0435\u043D\u043D\u044F","\u041C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430 \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u043A\u0430","\u041B\u043E\u0433\u043E\u043F\u0435\u0434","\u041B\u043E\u0433\u043E\u043F\u0435\u0434\u0438\u0447\u043D\u0456 \u0437\u0430\u043D\u044F\u0442\u0442\u044F","\u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0437\u0432\u0443\u043A\u0456\u0432","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041B\u043E\u0433\u043E\u043C\u0430\u0441\u0430\u0436","\u0414\u0435\u0444\u0435\u043A\u0442\u043E\u043B\u043E\u0433","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u0439\u043D\u0456 \u0437\u0430\u043D\u044F\u0442\u0442\u044F","\u041D\u0435\u0439\u0440\u043E\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433","\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433 \u0434\u0438\u0442\u044F\u0447\u0438\u0439","\u041D\u044F\u043D\u044F","\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u043D\u044F\u043D\u0456","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0434\u0456\u0442\u044C\u043C\u0438","\u041D\u044F\u043D\u044F \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443","\u041D\u044F\u043D\u044F \u0437 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F\u043C","\u041D\u044F\u043D\u044F \u0431\u0435\u0437 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F","\u041D\u044F\u043D\u044F \u0432\u0438\u0445\u0456\u0434\u043D\u043E\u0433\u043E \u0434\u043D\u044F","\u041D\u044F\u043D\u044F \u0434\u043B\u044F \u043D\u0435\u043C\u043E\u0432\u043B\u044F\u0442\u0438","\u041D\u044F\u043D\u044F \u0434\u043B\u044F \u0434\u043E\u0448\u043A\u0456\u043B\u044C\u043D\u044F\u0442","\u041D\u044F\u043D\u044F \u0434\u043B\u044F \u0448\u043A\u043E\u043B\u044F\u0440\u0430","\u0410\u043D\u0456\u043C\u0430\u0442\u043E\u0440","\u0410\u043D\u0456\u043C\u0430\u0442\u043E\u0440\u0438 \u043D\u0430 \u0434\u0435\u043D\u044C \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u0414\u0438\u0442\u044F\u0447\u0456 \u0441\u0432\u044F\u0442\u0430","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0441\u0432\u044F\u0442","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0434\u043D\u044F \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0432\u0435\u0441\u0456\u043B\u043B\u044F","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u0456\u0432","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0437\u0430\u0445\u043E\u0434\u0456\u0432","Event-\u0430\u0433\u0435\u043D\u0446\u0456\u044F","\u0406\u0432\u0435\u043D\u0442-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440","\u0412\u0435\u0434\u0443\u0447\u0438\u0439","\u0412\u0435\u0434\u0443\u0447\u0430","\u0422\u0430\u043C\u0430\u0434\u0430","\u0412\u0435\u0434\u0443\u0447\u0438\u0439 \u0432\u0435\u0441\u0456\u043B\u043B\u044F","\u0412\u0435\u0434\u0443\u0447\u0438\u0439 \u0434\u043D\u044F \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u0412\u0435\u0434\u0443\u0447\u0438\u0439 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u0443","\u0414\u0456\u0434\u0436\u0435\u0439","DJ","\u041C\u0443\u0437\u0438\u0447\u043D\u0438\u0439 \u0441\u0443\u043F\u0440\u043E\u0432\u0456\u0434","\u0416\u0438\u0432\u0430 \u043C\u0443\u0437\u0438\u043A\u0430","\u041C\u0443\u0437\u0438\u043A\u0430\u043D\u0442\u0438","\u0413\u0443\u0440\u0442 \u043D\u0430 \u0432\u0435\u0441\u0456\u043B\u043B\u044F","\u0421\u0430\u043A\u0441\u043E\u0444\u043E\u043D\u0456\u0441\u0442","\u0421\u043A\u0440\u0438\u043F\u0430\u043B\u044C","\u041F\u0456\u0430\u043D\u0456\u0441\u0442","\u0412\u043E\u043A\u0430\u043B\u0456\u0441\u0442","\u0421\u043F\u0456\u0432\u0430\u043A","\u0421\u043F\u0456\u0432\u0430\u0447\u043A\u0430","\u0428\u043E\u0443-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430","\u0410\u0440\u0442\u0438\u0441\u0442\u0438","\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A","\u041A\u043B\u043E\u0443\u043D","\u041F\u0456\u0440\u043E\u0442\u0435\u0445\u043D\u0456\u043A\u0430","\u0424\u0435\u0454\u0440\u0432\u0435\u0440\u043A","\u0421\u0430\u043B\u044E\u0442","\u041A\u0443\u043B\u044F-\u0441\u044E\u0440\u043F\u0440\u0438\u0437","\u041F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0456 \u043A\u0443\u043B\u0456","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043A\u0443\u043B\u044F\u043C\u0438","\u0414\u0435\u043A\u043E\u0440 \u043F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0438\u043C\u0438 \u043A\u0443\u043B\u044F\u043C\u0438","\u0410\u0440\u043A\u0430 \u0437 \u043A\u0443\u043B\u044C","\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444","\u0424\u043E\u0442\u043E\u0437\u0439\u043E\u043C\u043A\u0430","\u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0430 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0439 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444","\u0421\u0456\u043C\u0435\u0439\u043D\u0430 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0414\u0438\u0442\u044F\u0447\u0430 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F \u043D\u0435\u043C\u043E\u0432\u043B\u044F\u0442","Newborn \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0412\u0430\u0433\u0456\u0442\u043D\u0456\u0441\u0442\u044C \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","Love story","\u041F\u043E\u0440\u0442\u0440\u0435\u0442\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0421\u0442\u0443\u0434\u0456\u0439\u043D\u0430 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F \u043D\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u0456","\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u0430 \u0444\u043E\u0442\u043E\u0437\u0439\u043E\u043C\u043A\u0430","\u041A\u0430\u0442\u0430\u043B\u043E\u0436\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0424\u043E\u0442\u043E\u0437\u0439\u043E\u043C\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u0456\u0432","\u0424\u0443\u0434-\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u044F","\u0417\u0439\u043E\u043C\u043A\u0430 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u0406\u043D\u0442\u0435\u0440'\u0454\u0440\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0410\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0420\u0435\u043F\u043E\u0440\u0442\u0430\u0436\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0417\u0439\u043E\u043C\u043A\u0430 \u0437\u0430\u0445\u043E\u0434\u0456\u0432","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0439","\u0420\u0435\u0442\u0443\u0448 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0439","\u041A\u043E\u043B\u044C\u043E\u0440\u043E\u043A\u043E\u0440\u0435\u043A\u0446\u0456\u044F","\u0412\u0456\u0434\u0435\u043E\u0433\u0440\u0430\u0444","\u0412\u0456\u0434\u0435\u043E\u0437\u0439\u043E\u043C\u043A\u0430","\u0412\u0456\u0434\u0435\u043E\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0439 \u0432\u0456\u0434\u0435\u043E\u0433\u0440\u0430\u0444","Love story \u0432\u0456\u0434\u0435\u043E","\u0412\u0456\u0434\u0435\u043E\u0437\u0439\u043E\u043C\u043A\u0430 \u0437\u0430\u0445\u043E\u0434\u0456\u0432","\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","\u0420\u0435\u043A\u043B\u0430\u043C\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","\u0412\u0456\u0434\u0435\u043E\u0432\u0456\u0437\u0438\u0442\u043A\u0430","\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0456\u0439\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","\u0412\u0456\u0434\u0435\u043E\u043E\u0433\u043B\u044F\u0434","\u0412\u0456\u0434\u0435\u043E\u0456\u043D\u0442\u0435\u0440\u0432'\u044E","\u0412\u0456\u0434\u0435\u043E\u0431\u043B\u043E\u0433","YouTube \u0432\u0456\u0434\u0435\u043E","\u0417\u0439\u043E\u043C\u043A\u0430 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436","Reels","TikTok","Shorts","\u0410\u0435\u0440\u043E\u0437\u0439\u043E\u043C\u043A\u0430","\u0417\u0439\u043E\u043C\u043A\u0430 \u0434\u0440\u043E\u043D\u043E\u043C","\u041A\u0432\u0430\u0434\u0440\u043E\u043A\u043E\u043F\u0442\u0435\u0440","\u041C\u043E\u043D\u0442\u0430\u0436 \u0432\u0456\u0434\u0435\u043E","\u0412\u0456\u0434\u0435\u043E\u043C\u043E\u043D\u0442\u0430\u0436 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434\u0435\u043E","\u041A\u043E\u043B\u044C\u043E\u0440\u043A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0432\u0456\u0434\u0435\u043E","\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u0435\u043E\u0440\u043E\u043B\u0456\u043A\u0456\u0412","\u0410\u043D\u0456\u043C\u0430\u0446\u0456\u044F","2D \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u044F","3D \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u044F","Motion design","\u0406\u043D\u0444\u043E\u0433\u0440\u0430\u0444\u0456\u043A\u0430","\u0410\u043D\u0456\u043C\u0430\u0446\u0456\u0439\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","Explainer video","Whiteboard animation","\u0424\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u043A\u0430","\u0424\u043B\u043E\u0440\u0438\u0441\u0442","\u0411\u0443\u043A\u0435\u0442\u0438","\u0411\u0443\u043A\u0435\u0442 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0410\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0456 \u0431\u0443\u043A\u0435\u0442\u0438","\u0411\u0443\u043A\u0435\u0442 \u043D\u0430\u0440\u0435\u0447\u0435\u043D\u043E\u0457","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0430 \u0444\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u043A\u0430","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u043B\u0443","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0441\u0442\u043E\u043B\u0456\u0432","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0435\u0437\u0438\u0434\u0456\u0443\u043C\u0443","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0430\u0440\u043A\u0438","\u0424\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u0447\u043D\u0456 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u0457","\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437\u0456 \u0441\u0432\u0456\u0436\u0438\u0445 \u043A\u0432\u0456\u0442\u0456\u0432","\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437\u0456 \u0448\u0442\u0443\u0447\u043D\u0438\u0445 \u043A\u0432\u0456\u0442\u0456\u0432","\u0412\u0456\u043D\u043E\u043A","\u0422\u0440\u0430\u0443\u0440\u043D\u0430 \u0444\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u043A\u0430","\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043A\u0432\u0456\u0442\u0456\u0432","\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043A\u0432\u0456\u0442\u0456\u0432","\u041A\u0432\u0456\u0442\u0438 \u0432 \u0448\u043B\u044F\u043F\u043D\u0456\u0439 \u043A\u043E\u0440\u043E\u0431\u0446\u0456","\u041C\u043E\u043D\u043E\u0431\u0443\u043A\u0435\u0442","\u0411\u0443\u043A\u0435\u0442 \u0442\u0440\u043E\u044F\u043D\u0434","101 \u0442\u0440\u043E\u044F\u043D\u0434\u0430","\u0415\u043A\u0437\u043E\u0442\u0438\u0447\u043D\u0456 \u043A\u0432\u0456\u0442\u0438","\u0421\u0443\u0445\u043E\u0446\u0432\u0456\u0442\u0438","\u0421\u0442\u0430\u0431\u0456\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u0456 \u043A\u0432\u0456\u0442\u0438","\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043A\u0432\u0456\u0442\u0456\u0432","\u041A\u0432\u0456\u0442\u0438 \u0437 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u044E","\u0414\u0435\u043A\u043E\u0440 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u0414\u0435\u043A\u043E\u0440 \u043D\u0430 \u0441\u0432\u044F\u0442\u043E","\u0414\u0438\u0437\u0430\u0439\u043D \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443","\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443","\u041F\u0440\u043E\u0435\u043A\u0442 \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0438","\u0414\u0438\u0437\u0430\u0439\u043D \u0431\u0443\u0434\u0438\u043D\u043A\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u043E\u0444\u0456\u0441\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u043A\u0430\u0444\u0435","\u0414\u0438\u0437\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443","3D \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0412\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443","\u041F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u041F\u0456\u0434\u0431\u0456\u0440 \u043C\u0435\u0431\u043B\u0456\u0432","\u041F\u0456\u0434\u0431\u0456\u0440 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432","\u041F\u0456\u0434\u0431\u0456\u0440 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432","\u0414\u0435\u043A\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u043E\u0440","\u0410\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0438\u0439 \u043D\u0430\u0433\u043B\u044F\u0434","\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0456\u044F \u043E\u0431'\u0454\u043A\u0442\u0430","\u0410\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u043E\u0440","\u0410\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0440\u043E\u0435\u043A\u0442 \u0431\u0443\u0434\u0438\u043D\u043A\u0443","\u041F\u0440\u043E\u0435\u043A\u0442 \u043A\u043E\u0442\u0435\u0434\u0436\u0443","\u041F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C","\u0414\u0438\u0437\u0430\u0439\u043D \u0444\u0430\u0441\u0430\u0434\u0443","\u0406\u043D\u0448\u0435"];var Ei=["\u0410\u0432\u0434\u0456\u0457\u0432\u043A\u0430","\u0410\u043B\u043C\u0430\u0437\u043D\u0430","\u0410\u043B\u0443\u043F\u043A\u0430","\u0410\u043B\u0443\u0448\u0442\u0430","\u0410\u043B\u0447\u0435\u0432\u0441\u044C\u043A","\u0410\u043C\u0432\u0440\u043E\u0441\u0456\u0457\u0432\u043A\u0430","\u0410\u043D\u0430\u043D\u044C\u0457\u0432","\u0410\u043D\u0434\u0440\u0443\u0448\u0456\u0432\u043A\u0430","\u0410\u043D\u0442\u0440\u0430\u0446\u0438\u0442","\u0410\u043F\u043E\u0441\u0442\u043E\u043B\u043E\u0432\u0435","\u0410\u0440\u0431\u0443\u0437\u0438\u043D\u043A\u0430","\u0410\u0440\u043C\u044F\u043D\u0441\u044C\u043A","\u0410\u0440\u0442\u0435\u043C\u0456\u0432\u0441\u044C\u043A","\u0410\u0440\u0446\u0438\u0437","\u0411\u0430\u0431\u0430\u043D\u043A\u0430","\u0411\u0430\u0445\u043C\u0430\u0447","\u0411\u0430\u0445\u043C\u0443\u0442","\u0411\u0430\u0445\u0447\u0438\u0441\u0430\u0440\u0430\u0439","\u0411\u0430\u043B\u0430\u043A\u043B\u0456\u044F","\u0411\u0430\u043B\u0442\u0430","\u0411\u0430\u0440","\u0411\u0430\u0440\u0432\u0456\u043D\u043A\u043E\u0432\u0435","\u0411\u0430\u0440\u0430\u043D\u0456\u0432\u043A\u0430","\u0411\u0430\u0442\u0443\u0440\u0438\u043D","\u0411\u0430\u0448\u0442\u0430\u043D\u043A\u0430","\u0411\u0435\u043B\u0437","\u0411\u0435\u0440\u0434\u0438\u0447\u0456\u0432","\u0411\u0435\u0440\u0434\u044F\u043D\u0441\u044C\u043A","\u0411\u0435\u0440\u0435\u0433\u043E\u0432\u0435","\u0411\u0435\u0440\u0435\u0436\u0430\u043D\u0438","\u0411\u0435\u0440\u0435\u0437\u0430\u043D\u044C","\u0411\u0435\u0440\u0435\u0437\u043D\u0435","\u0411\u0435\u0440\u0435\u0437\u043D\u0456\u0432\u043A\u0430","\u0411\u0435\u0440\u0435\u0437\u0456\u0432\u043A\u0430","\u0411\u0435\u0440\u0448\u0430\u0434\u044C","\u0411\u0456\u043B\u0430 \u0426\u0435\u0440\u043A\u0432\u0430","\u0411\u0456\u043B\u0433\u043E\u0440\u043E\u0434-\u0414\u043D\u0456\u0441\u0442\u0440\u043E\u0432\u0441\u044C\u043A\u0438\u0439","\u0411\u0456\u043B\u0433\u043E\u0440\u043E\u0434","\u0411\u0456\u043B\u0438\u0446\u044C\u043A\u0435","\u0411\u0456\u043B\u043E\u0433\u0456\u0440'\u044F","\u0411\u0456\u043B\u043E\u0433\u0456\u0440\u0441\u044C\u043A","\u0411\u0456\u043B\u043E\u0437\u0435\u0440\u043A\u0430","\u0411\u0456\u043B\u043E\u043A\u0443\u0440\u0430\u043A\u0438\u043D\u0435","\u0411\u0456\u043B\u043E\u043F\u0456\u043B\u043B\u044F","\u0411\u0456\u043B\u043E\u0432\u043E\u0434\u0441\u044C\u043A","\u0411\u0456\u043B\u044C\u043C\u0430\u043A","\u0411\u043E\u0431\u0440\u0438\u043D\u0435\u0446\u044C","\u0411\u043E\u0431\u0440\u043E\u0432\u0438\u0446\u044F","\u0411\u043E\u0433\u043E\u0434\u0443\u0445\u0456\u0432","\u0411\u043E\u0433\u043E\u0440\u043E\u0434\u0447\u0430\u043D\u0438","\u0411\u043E\u0433\u0443\u0441\u043B\u0430\u0432","\u0411\u043E\u043B\u0433\u0440\u0430\u0434","\u0411\u043E\u043B\u0435\u0445\u0456\u0432","\u0411\u043E\u0440\u0437\u043D\u0430","\u0411\u043E\u0440\u0438\u0441\u043B\u0430\u0432","\u0411\u043E\u0440\u0438\u0441\u043F\u0456\u043B\u044C","\u0411\u043E\u0440\u0449\u0456\u0432","\u0411\u043E\u044F\u0440\u043A\u0430","\u0411\u0440\u043E\u0432\u0430\u0440\u0438","\u0411\u0440\u043E\u0434\u0438","\u0411\u0440\u044F\u043D\u043A\u0430","\u0411\u0443\u0447\u0430","\u0411\u0443\u0447\u0430\u0447","\u0412\u0430\u043B\u043A\u0438","\u0412\u0430\u0441\u0438\u043B\u0456\u0432\u043A\u0430","\u0412\u0430\u0441\u0438\u043B\u044C\u043A\u0456\u0432","\u0412\u0430\u0442\u0443\u0442\u0456\u043D\u0435","\u0412\u0430\u0448\u043A\u0456\u0432\u0446\u0456","\u0412\u0435\u043B\u0438\u043A\u0430 \u0411\u0430\u0433\u0430\u0447\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u0411\u0456\u043B\u043E\u0437\u0435\u0440\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u0414\u043E\u0431\u0440\u043E\u043D\u044C","\u0412\u0435\u043B\u0438\u043A\u0430 \u041B\u0435\u043F\u0435\u0442\u0438\u0445\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u0456\u0432\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u041D\u043E\u0432\u043E\u0441\u0456\u043B\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u041F\u0438\u0441\u0430\u0440\u0456\u0432\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0456 \u041C\u043E\u0441\u0442\u0438","\u0412\u0435\u0440\u0431\u043A\u0430","\u0412\u0435\u0440\u0445\u0456\u0432\u0446\u0435\u0432\u0435","\u0412\u0435\u0440\u0445\u043D\u0454 \u0421\u0438\u043D\u044C\u043E\u0432\u0438\u0434\u043D\u0435","\u0412\u0435\u0440\u0445\u043D\u044C\u043E\u0434\u043D\u0456\u043F\u0440\u043E\u0432\u0441\u044C\u043A","\u0412\u0435\u0441\u0435\u043B\u0435","\u0412\u0435\u0441\u0435\u043B\u0438\u043D\u043E\u0432\u0435","\u0412\u0438\u0436\u043D\u0438\u0446\u044F","\u0412\u0438\u043B\u043A\u043E\u0432\u0435","\u0412\u0456\u043D\u043D\u0438\u0446\u044F","\u0412\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u0456\u0432","\u0412\u0438\u0448\u0433\u043E\u0440\u043E\u0434","\u0412\u0438\u0448\u043D\u0435\u0432\u0435","\u0412\u043E\u0432\u0447\u0430\u043D\u0441\u044C\u043A","\u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0441\u044C\u043A","\u0412\u043E\u043B\u043D\u043E\u0432\u0430\u0445\u0430","\u0412\u043E\u043B\u043E\u0434\u0438\u043C\u0438\u0440","\u0412\u043E\u043B\u043E\u0434\u0438\u043C\u0438\u0440\u0435\u0446\u044C","\u0412\u043E\u043B\u043E\u0447\u0438\u0441\u044C\u043A","\u0412\u043E\u043B\u044C\u043D\u043E\u0433\u0456\u0440\u0441\u044C\u043A","\u0412\u043E\u0440\u043E\u0436\u0431\u0430","\u0412\u043E\u0440\u043E\u043D\u0456\u0432","\u0412\u0443\u0433\u043B\u0435\u0434\u0430\u0440","\u0412\u0443\u0433\u043B\u0435\u0433\u0456\u0440\u0441\u044C\u043A","\u0413\u0430\u0434\u044F\u0447","\u0413\u0430\u0439\u0432\u043E\u0440\u043E\u043D","\u0413\u0430\u0439\u0441\u0438\u043D","\u0413\u0430\u043B\u0438\u0447","\u0413\u0430\u0441\u043F\u0440\u0430","\u0413\u0435\u043D\u0456\u0447\u0435\u0441\u044C\u043A","\u0413\u0435\u0440\u0446\u0430","\u0413\u043B\u0438\u043D\u0438\u0446\u044F","\u0413\u043B\u043E\u0431\u0438\u043D\u0435","\u0413\u043B\u0443\u0445\u0456\u0432","\u0413\u043B\u0443\u0445\u043E\u0432\u0435","\u0413\u043D\u0456\u0432\u0430\u043D\u043A\u0430","\u0413\u043E\u043B\u0430 \u041F\u0440\u0438\u0441\u0442\u0430\u043D\u044C","\u0413\u043E\u043B\u043E\u0432\u0430\u043D\u0456\u0432\u0441\u044C\u043A","\u0413\u043E\u0440\u0456\u0448\u043D\u0456 \u041F\u043B\u0430\u0432\u043D\u0456","\u0413\u043E\u0440\u043B\u0456\u0432\u043A\u0430","\u0413\u043E\u0440\u043E\u0434\u0435\u043D\u043A\u0430","\u0413\u043E\u0440\u043E\u0434\u0438\u0449\u0435","\u0413\u043E\u0440\u043E\u0434\u043D\u044F","\u0413\u043E\u0440\u043E\u0434\u043E\u043A","\u0413\u043E\u0441\u0442\u043E\u043C\u0435\u043B\u044C","\u0413\u0440\u0435\u0431\u0456\u043D\u043A\u0430","\u0413\u0443\u043B\u044F\u0439\u043F\u043E\u043B\u0435","\u0413\u0443\u0440\u0437\u0443\u0444","\u0414\u0435\u0431\u0430\u043B\u044C\u0446\u0435\u0432\u0435","\u0414\u0435\u0440\u0430\u0436\u043D\u044F","\u0414\u0435\u0440\u0433\u0430\u0447\u0456","\u0414\u0436\u0430\u043D\u043A\u043E\u0439","\u0414\u043D\u0456\u043F\u0440\u043E","\u0414\u043D\u0456\u043F\u0440\u043E\u0440\u0443\u0434\u043D\u0435","\u0414\u043E\u0431\u0440\u043E\u043C\u0438\u043B\u044C","\u0414\u043E\u0431\u0440\u043E\u043F\u0456\u043B\u043B\u044F","\u0414\u043E\u0431\u0440\u043E\u0441\u043B\u0430\u0432","\u0414\u043E\u043A\u0443\u0447\u0430\u0454\u0432\u0441\u044C\u043A","\u0414\u043E\u043B\u0438\u043D\u0430","\u0414\u043E\u043B\u0438\u043D\u0441\u044C\u043A\u0430","\u0414\u043E\u043D\u0435\u0446\u044C\u043A","\u0414\u0440\u043E\u0433\u043E\u0431\u0438\u0447","\u0414\u0440\u0443\u0436\u0431\u0430","\u0414\u0440\u0443\u0436\u043A\u0456\u0432\u043A\u0430","\u0414\u0443\u0431\u043B\u044F\u043D\u0438","\u0414\u0443\u0431\u043D\u043E","\u0414\u0443\u0431\u0440\u043E\u0432\u0438\u0446\u044F","\u0414\u0443\u043D\u0430\u0457\u0432\u0446\u0456","\u0415\u043D\u0435\u0440\u0433\u043E\u0434\u0430\u0440","\u0416\u0430\u0448\u043A\u0456\u0432","\u0416\u0434\u0430\u043D\u0456\u0432\u043A\u0430","\u0416\u0438\u0434\u0430\u0447\u0456\u0432","\u0416\u0438\u0442\u043E\u043C\u0438\u0440","\u0416\u043C\u0435\u0440\u0438\u043D\u043A\u0430","\u0416\u043E\u0432\u043A\u0432\u0430","\u0416\u043E\u0432\u0442\u0456 \u0412\u043E\u0434\u0438","\u0417\u0430\u0432\u043E\u0434\u0441\u044C\u043A\u0435","\u0417\u0430\u043B\u0456\u0449\u0438\u043A\u0438","\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F","\u0417\u0430\u0440\u0456\u0447\u043D\u0435","\u0417\u0431\u0430\u0440\u0430\u0436","\u0417\u0431\u043E\u0440\u0456\u0432","\u0417\u0432\u0435\u043D\u0438\u0433\u043E\u0440\u043E\u0434\u043A\u0430","\u0417\u0434\u043E\u043B\u0431\u0443\u043D\u0456\u0432","\u0417\u0435\u043B\u0435\u043D\u043E\u0434\u043E\u043B\u044C\u0441\u044C\u043A","\u0417\u0456\u043D\u044C\u043A\u0456\u0432","\u0417\u043C\u0456\u0457\u0432","\u0417\u043D\u0430\u043C'\u044F\u043D\u043A\u0430","\u0417\u043E\u043B\u043E\u0442\u0435","\u0417\u043E\u043B\u043E\u0442\u043E\u043D\u043E\u0448\u0430","\u0417\u043E\u043B\u043E\u0447\u0456\u0432","\u0417\u0443\u0433\u0440\u0435\u0441","\u0406\u0432\u0430\u043D\u043A\u0456\u0432","\u0406\u0432\u0430\u043D\u043E-\u0424\u0440\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A","\u0406\u043B\u043B\u0456\u043D\u0446\u0456","\u0406\u043B\u043E\u0432\u0430\u0439\u0441\u044C\u043A","\u0406\u0437\u043C\u0430\u0457\u043B","\u0406\u0437\u044E\u043C","\u0406\u0437\u044F\u0441\u043B\u0430\u0432","\u0406\u043B\u043B\u0456\u0447\u0456\u0432\u0441\u044C\u043A","\u0406\u043D\u043A\u0435\u0440\u043C\u0430\u043D","\u0406\u0440\u043F\u0456\u043D\u044C","\u0406\u0440\u0448\u0430\u0432\u0430","\u0406\u0447\u043D\u044F","\u041A\u0430\u0433\u0430\u0440\u043B\u0438\u043A","\u041A\u0430\u0434\u0456\u0457\u0432\u043A\u0430","\u041A\u0430\u043B\u0438\u043D\u0456\u0432\u043A\u0430","\u041A\u0430\u043B\u0443\u0448","\u041A\u0430\u043C'\u044F\u043D\u0435\u0446\u044C-\u041F\u043E\u0434\u0456\u043B\u044C\u0441\u044C\u043A\u0438\u0439","\u041A\u0430\u043C'\u044F\u043D\u043A\u0430","\u041A\u0430\u043C'\u044F\u043D\u043A\u0430-\u0411\u0443\u0437\u044C\u043A\u0430","\u041A\u0430\u043C'\u044F\u043D\u043A\u0430-\u0414\u043D\u0456\u043F\u0440\u043E\u0432\u0441\u044C\u043A\u0430","\u041A\u0430\u043C'\u044F\u043D\u0441\u044C\u043A\u0435","\u041A\u0430\u043D\u0456\u0432","\u041A\u0430\u0440\u043B\u0456\u0432\u043A\u0430","\u041A\u0430\u0445\u043E\u0432\u043A\u0430","\u041A\u0435\u0433\u0438\u0447\u0456\u0432\u043A\u0430","\u041A\u0435\u0440\u0447","\u041A\u0438\u0454\u0432\u043E-\u0421\u0432\u044F\u0442\u043E\u0448\u0438\u043D\u0441\u044C\u043A","\u041A\u0438\u0457\u0432","\u041A\u0456\u043B\u0456\u044F","\u041A\u0456\u0446\u043C\u0430\u043D\u044C","\u041A\u0456\u0432\u0435\u0440\u0446\u0456","\u30AD\u0440\u0456\u0432\u0441\u044C\u043A","\u041A\u043E\u0431\u0435\u043B\u044F\u043A\u0438","\u041A\u043E\u0432\u0435\u043B\u044C","\u041A\u043E\u0434\u0438\u043C\u0430","\u041A\u043E\u043A\u0442\u0435\u0431\u0435\u043B\u044C","\u041A\u043E\u043B\u043E\u043C\u0438\u044F","\u041A\u043E\u043C\u0430\u0440\u043D\u043E","\u041A\u043E\u043D\u043E\u0442\u043E\u043F","\u041A\u043E\u0440\u0435\u0446\u044C","\u041A\u043E\u0440\u043E\u0441\u0442\u0435\u043D\u044C","\u041A\u043E\u0440\u043E\u0441\u0442\u0438\u0448\u0456\u0432","\u041A\u043E\u0440\u0441\u0443\u043D\u044C-\u0428\u0435\u0432\u0447\u0435\u043D\u043A\u0456\u0432\u0441\u044C\u043A\u0438\u0439","\u041A\u043E\u0440\u044E\u043A\u0456\u0432\u043A\u0430","\u041A\u043E\u0441\u0456\u0432","\u041A\u043E\u0441\u0442\u043E\u043F\u0456\u043B\u044C","\u041A\u043E\u0441\u0442\u044F\u043D\u0442\u0438\u043D\u0456\u0432\u043A\u0430","\u041A\u0440\u0430\u043C\u0430\u0442\u043E\u0440\u0441\u044C\u043A","\u041A\u0440\u0430\u0441\u0438\u043B\u0456\u0432","\u041A\u0440\u0430\u0441\u043D\u043E\u0430\u0440\u043C\u0456\u0439\u0441\u044C\u043A","\u041A\u0440\u0430\u0441\u043D\u043E\u0433\u0440\u0430\u0434","\u041A\u0440\u0430\u0441\u043D\u043E\u0434\u043E\u043D","\u041A\u0440\u0430\u0441\u043D\u043E\u043F\u0456\u043B\u043B\u044F","\u041A\u0440\u0430\u0441\u043D\u043E\u043F\u0435\u0440\u0435\u043A\u043E\u043F\u0441\u044C\u043A","\u041A\u0440\u0435\u043C\u0435\u043D\u0435\u0446\u044C","\u041A\u0440\u0435\u043C\u0435\u043D\u0447\u0443\u043A","\u041A\u0440\u0435\u043C\u0456\u043D\u043D\u0430","\u041A\u0440\u0438\u0432\u0438\u0439 \u0420\u0456\u0433","\u041A\u0440\u043E\u043B\u0435\u0432\u0435\u0446\u044C","\u041A\u0440\u043E\u043F\u0438\u0432\u043D\u0438\u0446\u044C\u043A\u0438\u0439","\u041A\u0443\u043B\u0438\u043A\u0456\u0432\u043A\u0430","\u041A\u0443\u043F\u044F\u043D\u0441\u044C\u043A","\u041A\u0443\u0440\u0430\u0445\u043E\u0432\u0435","\u041B\u0430\u0434\u0438\u0436\u0438\u043D","\u041B\u0430\u043D\u0456\u0432\u0446\u0456","\u041B\u0435\u0431\u0435\u0434\u0438\u043D","\u041B\u0438\u043C\u0430\u043D","\u041B\u0438\u043F\u043E\u0432\u0430 \u0414\u043E\u043B\u0438\u043D\u0430","\u041B\u0438\u043F\u043E\u0432\u0435\u0446\u044C","\u041B\u0438\u0441\u0438\u0447\u0430\u043D\u0441\u044C\u043A","\u041B\u0438\u0442\u0438\u043D","\u041B\u043E\u0437\u043E\u0432\u0430","\u041B\u043E\u0445\u0432\u0438\u0446\u044F","\u041B\u0443\u0431\u043D\u0438","\u041B\u0443\u0433\u0430\u043D\u0441\u044C\u043A","\u041B\u0443\u0446\u044C\u043A","\u041B\u044C\u0432\u0456\u0432","\u041B\u044E\u0431\u0430\u0440","\u041B\u044E\u0431\u0435\u0448\u0456\u0432","\u041B\u044E\u0431\u043E\u0442\u0438\u043D","\u041B\u0430\u0434\u0438\u0436\u0438\u043D","\u041B\u0438\u0432\u0430\u0434\u0456\u044F","\u041B\u0456\u0441\u043A\u0438","\u041C\u0430\u043A\u0430\u0440\u0456\u0432","\u041C\u0430\u043A\u0456\u0457\u0432\u043A\u0430","\u041C\u0430\u043B\u0430 \u0412\u0438\u0441\u043A\u0430","\u041C\u0430\u043B\u0438\u043D","\u041C\u0430\u0440'\u0457\u043D\u043A\u0430","\u041C\u0430\u0440\u0456\u0443\u043F\u043E\u043B\u044C","\u041C\u0430\u0440\u043A\u0456\u0432\u043A\u0430","\u041C\u0430\u0440\u0433\u0430\u043D\u0435\u0446\u044C","\u041C\u0435\u043B\u0456\u0442\u043E\u043F\u043E\u043B\u044C","\u041C\u0435\u043D\u0430","\u041C\u0435\u0440\u0435\u0444\u0430","\u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432","\u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432\u043A\u0430","\u041C\u0438\u0440\u0433\u043E\u0440\u043E\u0434","\u041C\u0438\u0440\u043D\u043E\u0433\u0440\u0430\u0434","\u041C\u0438\u0440\u043D\u0438\u0439","\u041C\u0456\u0436\u0433\u0456\u0440'\u044F","\u041C\u043E\u0433\u0438\u043B\u0456\u0432-\u041F\u043E\u0434\u0456\u043B\u044C\u0441\u044C\u043A\u0438\u0439","\u041C\u043E\u043B\u043E\u0434\u043E\u0433\u0432\u0430\u0440\u0434\u0456\u0439\u0441\u044C\u043A","\u041C\u043E\u043B\u043E\u0447\u0430\u043D\u0441\u044C\u043A","\u041C\u043E\u043D\u0430\u0441\u0442\u0438\u0440\u0438\u0441\u044C\u043A\u0430","\u041C\u043E\u0440\u0448\u0438\u043D","\u041C\u043E\u0441\u0442\u0438\u0441\u044C\u043A\u0430","\u041C\u0443\u043A\u0430\u0447\u0435\u0432\u043E","\u041D\u0430\u0434\u0432\u0456\u0440\u043D\u0430","\u041D\u0435\u043C\u0438\u0440\u0456\u0432","\u041D\u0435\u0442\u0456\u0448\u0438\u043D","\u041D\u0438\u0436\u043D\u0456 \u0421\u0456\u0440\u043E\u0433\u043E\u0437\u0438","\u041D\u0456\u043A\u043E\u043F\u043E\u043B\u044C","\u041D\u0456\u0436\u0438\u043D","\u041D\u043E\u0432\u0430 \u0412\u043E\u0434\u043E\u043B\u0430\u0433\u0430","\u041D\u043E\u0432\u0430 \u041A\u0430\u0445\u043E\u0432\u043A\u0430","\u041D\u043E\u0432\u0430 \u041E\u0434\u0435\u0441\u0430","\u041D\u043E\u0432\u0430 \u0423\u0448\u0438\u0446\u044F","\u041D\u043E\u0432\u0438\u0439 \u0411\u0443\u0433","\u041D\u043E\u0432\u0438\u0439 \u041A\u0430\u043B\u0438\u043D\u0456\u0432","\u041D\u043E\u0432\u0438\u0439 \u0420\u043E\u0437\u0434\u0456\u043B","\u041D\u043E\u0432\u043E\u0430\u0439\u0434\u0430\u0440","\u041D\u043E\u0432\u043E\u0430\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0430\u0437\u043E\u0432\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0432\u043E\u043B\u0438\u043D\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0433\u0435\u043E\u0440\u0433\u0456\u0457\u0432\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0433\u0440\u043E\u0434\u0456\u0432\u043A\u0430","\u041D\u043E\u0432\u043E\u0433\u0440\u0430\u0434-\u0412\u043E\u043B\u0438\u043D\u0441\u044C\u043A\u0438\u0439","\u041D\u043E\u0432\u043E\u0434\u043D\u0456\u0441\u0442\u0440\u043E\u0432\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0434\u0440\u0443\u0436\u0435\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u043C\u0438\u0440\u0433\u043E\u0440\u043E\u0434","\u041D\u043E\u0432\u043E\u043C\u043E\u0441\u043A\u043E\u0432\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u043E\u043B\u0435\u043A\u0441\u0456\u0457\u0432\u043A\u0430","\u041D\u043E\u0432\u043E\u043F\u0441\u043A\u043E\u0432","\u041D\u043E\u0432\u043E\u0441\u0435\u043B\u0438\u0446\u044F","\u041D\u043E\u0432\u043E\u0442\u0440\u043E\u0457\u0446\u044C\u043A\u0435","\u041D\u043E\u0432\u043E\u0443\u043A\u0440\u0430\u0457\u043D\u043A\u0430","\u041D\u043E\u0432\u043E\u044F\u0432\u043E\u0440\u0456\u0432\u0441\u044C\u043A","\u041D\u043E\u0441\u0456\u0432\u043A\u0430","\u041E\u0431\u0443\u0445\u0456\u0432","\u041E\u0432\u0456\u0434\u0456\u043E\u043F\u043E\u043B\u044C","\u041E\u0432\u0440\u0443\u0447","\u041E\u0434\u0435\u0441\u0430","\u041E\u043A\u043D\u0438","\u041E\u043A\u043E\u043D\u0441\u044C\u043A\u0438","\u041E\u043B\u0435\u0432\u0441\u044C\u043A","\u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0456\u0432\u043A\u0430","\u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0456\u044F","\u041E\u043B\u0435\u043D\u0456\u0432\u043A\u0430","\u041E\u043B\u0435\u0448\u043A\u0438","\u041E\u043D\u0443\u0444\u0440\u0456\u0457\u0432\u043A\u0430","\u041E\u0440\u0430\u0442\u0456\u0432","\u041E\u0440\u0436\u0456\u0432","\u041E\u0441\u0442\u0440\u043E\u0433","\u041E\u0445\u0442\u0438\u0440\u043A\u0430","\u041E\u0447\u0430\u043A\u0456\u0432","\u041F\u0430\u0432\u043B\u043E\u0433\u0440\u0430\u0434","\u041F\u0435\u0440\u0432\u043E\u043C\u0430\u0439\u0441\u044C\u043A","\u041F\u0435\u0440\u0432\u043E\u043C\u0430\u0439\u0441\u044C\u043A\u0438\u0439","\u041F\u0435\u0440\u0435\u0432\u0430\u043B\u044C\u0441\u044C\u043A","\u041F\u0435\u0440\u0435\u043C\u0438\u0448\u043B\u044F\u043D\u0438","\u041F\u0435\u0440\u0435\u0447\u0438\u043D","\u041F\u0435\u0440\u0435\u044F\u0441\u043B\u0430\u0432","\u041F\u0435\u0440\u0448\u043E\u0442\u0440\u0430\u0432\u0435\u043D\u0441\u044C\u043A","\u041F\u0438\u0440\u044F\u0442\u0438\u043D","\u041F\u0456\u0434\u0433\u0430\u0439\u0446\u0456","\u041F\u0456\u0434\u0433\u043E\u0440\u043E\u0434\u043D\u0435","\u041F\u0456\u0434\u0432\u043E\u043B\u043E\u0447\u0438\u0441\u044C\u043A","\u041F\u043E\u0433\u0440\u0435\u0431\u0438\u0449\u0435","\u041F\u043E\u043A\u0440\u043E\u0432","\u041F\u043E\u043A\u0440\u043E\u0432\u0441\u044C\u043A","\u041F\u043E\u043B\u043E\u043D\u043D\u0435","\u041F\u043E\u043B\u0442\u0430\u0432\u0430","\u041F\u043E\u043C\u0456\u0447\u043D\u0430","\u041F\u043E\u043F\u0430\u0441\u043D\u0430","\u041F\u043E\u0447\u0430\u0457\u0432","\u041F\u0443\u0441\u0442\u043E\u043C\u0438\u0442\u0438","\u041F\u0443\u0442\u0438\u0432\u043B\u044C","\u041F\u0443\u0442\u0438\u043B\u0430","\u041F\u044F\u0442\u0438\u0445\u0430\u0442\u043A\u0438","\u0420\u0430\u0434\u0435\u0445\u0456\u0432","\u0420\u0430\u0434\u0438\u0432\u0438\u043B\u0456\u0432","\u0420\u0430\u0434\u043E\u043C\u0438\u0448\u043B\u044C","\u0420\u0430\u0445\u0456\u0432","\u0420\u0435\u043D\u0456","\u0420\u0435\u0448\u0435\u0442\u0438\u043B\u0456\u0432\u043A\u0430","\u0420\u0436\u0438\u0449\u0456\u0432","\u0420\u0456\u0432\u043D\u0435","\u0420\u0456\u0445\u0442\u0438\u0447\u0456\u0432","\u0420\u043E\u0433\u0430\u0442\u0438\u043D","\u0420\u043E\u0434\u0438\u043D\u0441\u044C\u043A\u0435","\u0420\u043E\u0436\u0438\u0449\u0435","\u0420\u043E\u043A\u0438\u0442\u043D\u0435","\u0420\u043E\u043C\u043D\u0438","\u0420\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u0430","\u0420\u0443\u0431\u0456\u0436\u043D\u0435","\u0420\u0443\u0436\u0438\u043D","\u0421\u0430\u043A\u0438","\u0421\u0430\u043C\u0431\u0456\u0440","\u0421\u0430\u0440\u0430\u0442\u0438","\u0421\u0430\u0440\u043D\u0438","\u0421\u0430\u0441\u0456\u0432","\u0421\u0432\u0430\u0442\u043E\u0432\u0435","\u0421\u0432\u0430\u043B\u044F\u0432\u0430","\u0421\u0432\u0435\u0441\u0430","\u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u044C\u043A","\u0421\u0432\u0456\u0442\u043B\u043E\u0432\u043E\u0434\u0441\u044C\u043A","\u0421\u0432\u0456\u0442\u043B\u043E\u0434\u0430\u0440\u0441\u044C\u043A","\u0421\u0435\u0432\u0430\u0441\u0442\u043E\u043F\u043E\u043B\u044C","\u0421\u0435\u0432\u0435\u0440\u043E\u0434\u043E\u043D\u0435\u0446\u044C\u043A","\u0421\u0435\u043B\u0438\u0434\u043E\u0432\u0435","\u0421\u0435\u043C\u0435\u043D\u0456\u0432\u043A\u0430","\u0421\u0435\u0440\u0435\u0434\u0438\u043D\u0430-\u0411\u0443\u0434\u0430","\u0421\u0454\u0432\u0454\u0440\u043E\u0434\u043E\u043D\u0435\u0446\u044C\u043A","\u0421\u0456\u043C\u0435\u0457\u0437","\u0421\u0456\u043C\u0444\u0435\u0440\u043E\u043F\u043E\u043B\u044C","\u0421\u0438\u043D\u0435\u043B\u044C\u043D\u0438\u043A\u043E\u0432\u0435","\u0421\u0456\u0432\u0435\u0440\u0441\u044C\u043A","\u0421\u043A\u0430\u0434\u043E\u0432\u0441\u044C\u043A","\u0421\u043A\u0430\u043B\u0430\u0442","\u0421\u043A\u0432\u0438\u0440\u0430","\u0421\u043B\u0430\u0432\u0443\u0442\u0430","\u0421\u043B\u0430\u0432\u0443\u0442\u0438\u0447","\u0421\u043B\u043E\u0432'\u044F\u043D\u0441\u044C\u043A","\u0421\u043C\u0435\u043B\u0430","\u0421\u043C\u0456\u043B\u0430","\u0421\u043D\u0456\u0433\u0443\u0440\u0456\u0432\u043A\u0430","\u0421\u043D\u0456\u0436\u043D\u0435","\u0421\u043D\u044F\u0442\u0438\u043D","\u0421\u043E\u043A\u0430\u043B\u044C","\u0421\u043E\u043A\u0438\u0440\u044F\u043D\u0438","\u0421\u043E\u043B\u0435\u0434\u0430\u0440","\u0421\u043E\u0440\u043E\u043A\u0438\u043D\u0435","\u30BD\u0441\u043D\u0456\u0432\u043A\u0430","\u0421\u0442\u0430\u0440\u0438\u0439 \u041A\u0440\u0438\u043C","\u0421\u0442\u0430\u0440\u0438\u0439 \u0421\u0430\u043C\u0431\u0456\u0440","\u0421\u0442\u0430\u0440\u043E\u0431\u0456\u043B\u044C\u0441\u044C\u043A","\u0421\u0442\u0430\u0440\u043E\u043A\u043E\u043D\u0441\u0442\u044F\u043D\u0442\u0438\u043D\u0456\u0432","\u0421\u0442\u0430\u0445\u0430\u043D\u043E\u0432","\u0421\u0442\u0435\u0431\u043D\u0438\u043A","\u0421\u0442\u043E\u0440\u043E\u0436\u0438\u043D\u0435\u0446\u044C","\u0421\u0442\u0440\u0438\u0439","\u0421\u0443\u0434\u0430\u043A","\u0421\u0443\u0434\u043E\u0432\u0430 \u0412\u0438\u0448\u043D\u044F","\u0421\u0443\u043C\u0438","\u0421\u0443\u0445\u043E\u0434\u0456\u043B\u044C\u0441\u044C\u043A","\u0422\u0430\u043B\u044C\u043D\u0435","\u0422\u0430\u0440\u0430\u0449\u0430","\u0422\u0430\u0442\u0430\u0440\u0431\u0443\u043D\u0430\u0440\u0438","\u0422\u0435\u043F\u043B\u0438\u043A","\u0422\u0435\u043F\u043B\u043E\u0434\u0430\u0440","\u0422\u0435\u0440\u0435\u0431\u043E\u0432\u043B\u044F","\u0422\u0435\u0440\u043D\u0456\u0432\u043A\u0430","\u0422\u0435\u0440\u043D\u043E\u043F\u0456\u043B\u044C","\u0422\u0435\u0440\u043D\u043E\u0432\u043A\u0430","\u0422\u0435\u0442\u0456\u0457\u0432","\u0422\u0438\u0441\u043C\u0435\u043D\u0438\u0446\u044F","\u0422\u043B\u0443\u043C\u0430\u0447","\u0422\u043E\u043A\u043C\u0430\u043A","\u0422\u043E\u0440\u0435\u0446\u044C\u043A","\u0422\u043E\u0440\u0447\u0438\u043D","\u0422\u0440\u043E\u0441\u0442\u044F\u043D\u0435\u0446\u044C","\u0422\u0440\u0443\u0441\u043A\u0430\u0432\u0435\u0446\u044C","\u0422\u0443\u043B\u044C\u0447\u0438\u043D","\u0422\u0443\u0440\u043A\u0430","\u0422\u044F\u0447\u0456\u0432","\u0423\u0433\u043D\u0456\u0432","\u0423\u0433\u043B\u0435\u0434\u0430\u0440","\u0423\u0436\u0433\u043E\u0440\u043E\u0434","\u0423\u043A\u0440\u0430\u0457\u043D\u043A\u0430","\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A","\u0423\u043C\u0430\u043D\u044C","\u0423\u0441\u0442\u0438\u043B\u0443\u0433","\u0424\u0430\u0441\u0442\u0456\u0432","\u0424\u0435\u043E\u0434\u043E\u0441\u0456\u044F","\u0425\u0438\u0440\u0456\u0432","\u0425\u043C\u0435\u043B\u044C\u043D\u0438\u043A","\u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u0438\u0439","\u0425\u043C\u0456\u043B\u044C\u043D\u0438\u043A","\u0425\u043E\u0434\u043E\u0440\u0456\u0432","\u0425\u043E\u0440\u043E\u043B","\u0425\u043E\u0440\u043E\u0448\u0456\u0432","\u0425\u043E\u0442\u0438\u043D","\u0425\u0440\u0435\u0441\u0442\u0456\u0432\u043A\u0430","\u0425\u0440\u0438\u0441\u0442\u0438\u043D\u0456\u0432\u043A\u0430","\u0425\u0443\u0441\u0442","\u0426\u0430\u0440\u0438\u0447\u0430\u043D\u043A\u0430","\u0426\u044E\u0440\u0443\u043F\u0438\u043D\u0441\u044C\u043A","\u0427\u0430\u0441\u0456\u0432 \u042F\u0440","\u0427\u0435\u0440\u0432\u043E\u043D\u043E\u0433\u0440\u0430\u0434","\u0427\u0435\u0440\u0432\u043E\u043D\u043E\u043F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u044C\u043A","\u0427\u0435\u0440\u043A\u0430\u0441\u0438","\u0427\u0435\u0440\u043D\u0456\u0432\u0446\u0456","\u0427\u0435\u0440\u043D\u0456\u0433\u0456\u0432","\u0427\u0435\u0440\u043D\u044F\u0445\u0456\u0432","\u0427\u0438\u0433\u0438\u0440\u0438\u043D","\u0427\u043E\u043F","\u0427\u043E\u0440\u043D\u043E\u0431\u0438\u043B\u044C","\u0427\u043E\u0440\u043D\u043E\u043C\u043E\u0440\u0441\u044C\u043A","\u0427\u043E\u0440\u0442\u043A\u0456\u0432","\u0427\u0443\u0433\u0443\u0457\u0432","\u0428\u0430\u0440\u0433\u043E\u0440\u043E\u0434","\u0428\u0430\u0445\u0442\u0430\u0440\u0441\u044C\u043A","\u0428\u0435\u043F\u0435\u0442\u0456\u0432\u043A\u0430","\u0428\u0438\u0440\u043E\u043A\u0435","\u0428\u043E\u0441\u0442\u043A\u0430","\u0428\u043F\u043E\u043B\u0430","\u0428\u0443\u043C\u0441\u044C\u043A","\u0429\u0430\u0441\u0442\u044F","\u0429\u043E\u043B\u043A\u0456\u043D\u0435","\u042E\u0436\u043D\u0435","\u042E\u0436\u043D\u043E\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A","\u042F\u043B\u0442\u0430","\u042F\u043C\u043F\u0456\u043B\u044C","\u042F\u0432\u043E\u0440\u0456\u0432","\u042F\u0433\u043E\u0442\u0438\u043D","\u042F\u043B\u0442\u0430","\u042F\u0440\u0435\u043C\u0447\u0435","\u042F\u0441\u0438\u043D\u0443\u0432\u0430\u0442\u0430"];function $o({company:e,onSave:t,onCancel:n,isModal:r=!1}){let o=He(),[a,i]=(0,N.useState)({name:"",email:"",website:"",phone:"",description:"",city:"",country:"\u0423\u043A\u0440\u0430\u0457\u043D\u0430",postal:"",region:"",street_line1:"",street_line2:""}),[l,s]=(0,N.useState)(null),[u,p]=(0,N.useState)(null),[d,m]=(0,N.useState)(null),[y,g]=(0,N.useState)(""),[v,w]=(0,N.useState)(!1),[f,c]=(0,N.useState)([]),[h,k]=(0,N.useState)([]),[b,E]=(0,N.useState)([]),[S,z]=(0,N.useState)([]),[H,P]=(0,N.useState)(""),[V,I]=(0,N.useState)(!1),[G,re]=(0,N.useState)({}),X=Si.filter(C=>C.toLowerCase().includes(H.toLowerCase()));(0,N.useEffect)(()=>{if(e){if(i({name:e.name||"",email:e.email||"",website:e.website||"",phone:e.phone||"",description:e.description||"",city:e.address?.city||"",country:e.address?.country||"\u0423\u043A\u0440\u0430\u0457\u043D\u0430",postal:e.address?.postal||"",region:e.address?.region||"",street_line1:e.address?.street_line1||"",street_line2:e.address?.street_line2||""}),e.categories&&e.categories.length>0&&z(e.categories.map(C=>C.name||C)),e.images&&e.images.length>0){let C=e.images.find(x=>x.type==="logo");C&&(p(C.image_url),m(C.id))}e.images&&e.images.length>0&&c(e.images.filter(C=>C.type!=="logo"))}},[e]);let Se=C=>{i({...a,[C.target.name]:C.target.value}),re(x=>({...x,[C.target.name]:null}))},Y=C=>{S.includes(C)||(z([...S,C]),P(""),I(!1),re(x=>({...x,categories:null})))},ne=async()=>{if(window.confirm(`\u26A0\uFE0F \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E "${e.name}"?

\u0426\u044F \u0434\u0456\u044F \u0454 \u043D\u0435\u0437\u0432\u043E\u0440\u043E\u0442\u043D\u043E\u044E. \u0411\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E:
\u2022 \u0412\u0441\u0456 \u0437\u0430\u043F\u0438\u0441\u0438 \u0442\u0430 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F
\u2022 \u0412\u0441\u0456\u0445 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0456\u0432
\u2022 \u0412\u0441\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438
\u2022 \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u0442\u0430 \u043B\u043E\u0433\u043E\u0442\u0438\u043F

\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445 \u0431\u0443\u0434\u0435 \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u0438\u043C.`))try{let x=await fetch(`/api/companies/${e.id}`,{method:"DELETE",credentials:"include"});if(x.ok)o("/companies");else{let F=await x.json();alert(F.errors||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457")}}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457")}},Pe=C=>{z(S.filter(x=>x!==C))},Ge=C=>{let x=C.target.files[0];if(x){s(x);let F=new FileReader;F.onloadend=()=>{p(F.result)},F.readAsDataURL(x)}},ft=async()=>{if(!d){s(null),p(null),g("");return}if(window.confirm("\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F?"))try{(await fetch(`/api/images/${d}`,{method:"DELETE",credentials:"include"})).ok?(s(null),p(null),m(null),g("")):alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443")}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443")}},kt=C=>{let x=Array.from(C.target.files);x.length>0&&(k([...h,...x]),x.forEach(F=>{let Z=new FileReader;Z.onloadend=()=>{E(xe=>[...xe,{file:F,preview:Z.result}])},Z.readAsDataURL(F)}))},$r=async C=>{if(window.confirm("\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F?"))try{(await fetch(`/api/images/${C}`,{method:"DELETE",credentials:"include"})).ok?c(f.filter(F=>F.id!==C)):alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F")}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F")}},Vo=C=>{E(b.filter((x,F)=>F!==C)),k(h.filter((x,F)=>F!==C))},nr=async C=>{C.preventDefault();let x=new FormData;x.append("company[name]",a.name),x.append("company[email]",a.email),x.append("company[website]",a.website),x.append("company[phone]",a.phone),x.append("company[description]",a.description),S.forEach(pt=>{x.append("categories[]",pt)}),x.append("address[city]",a.city),x.append("address[country]",a.country),x.append("address[postal]",a.postal),x.append("address[region]",a.region),x.append("address[street_line1]",a.street_line1),x.append("address[street_line2]",a.street_line2),l?x.append("logo",l):y&&x.append("logo_cached",y),h.forEach(pt=>{x.append("images[]",pt)});let F=e?`/api/companies/${e.id}`:"/api/companies",xe=await fetch(F,{method:e?"PUT":"POST",credentials:"include",body:x}),St=await xe.json();xe.ok?r&&t?t(St):o(`/companies/${St.id}/dashboard`):(typeof St.errors=="string"?re({_base:St.errors}):re(St.errors||{}),k([]),E([]),s(null),d||p(null))},L=C=>G[C]?.message;return N.default.createElement("div",{className:r?"company-form-modal":"company-form container"},N.default.createElement("h1",null,e?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E"),N.default.createElement("form",{onSubmit:nr,encType:"multipart/form-data"},N.default.createElement("section",{className:"form-section"},N.default.createElement("h3",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),L("name")&&N.default.createElement("div",{className:"field-error"},L("name")),N.default.createElement("input",{name:"name",value:a.name,onChange:Se,placeholder:"\u041D\u0430\u0437\u0432\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"}),L("email")&&N.default.createElement("div",{className:"field-error"},L("email")),N.default.createElement("input",{name:"email",type:"email",value:a.email,onChange:Se,placeholder:"Email"}),L("website")&&N.default.createElement("div",{className:"field-error"},L("website")),N.default.createElement("input",{name:"website",type:"url",value:a.website,onChange:Se,placeholder:"https://example.com"}),L("phone")&&N.default.createElement("div",{className:"field-error"},L("phone")),N.default.createElement("input",{name:"phone",type:"tel",value:a.phone,onChange:Se,placeholder:"+380 XX XXX XX XX"}),L("description")&&N.default.createElement("div",{className:"field-error"},L("description")),N.default.createElement("textarea",{name:"description",value:a.description,onChange:Se,placeholder:"\u041E\u043F\u0438\u0441 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456",rows:"4"})),N.default.createElement("section",{className:"form-section"},N.default.createElement("h3",null,"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u043F\u043E\u0441\u043B\u0443\u0433"),L("categories")&&N.default.createElement("div",{className:"field-error"},L("categories")),S.length>0&&N.default.createElement("div",{className:"selected-categories-tags"},S.map(C=>N.default.createElement("span",{key:C,className:"category-tag"},C,N.default.createElement("button",{type:"button",className:"category-tag-remove",onClick:()=>Pe(C),"aria-label":"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E"},"\u2715")))),N.default.createElement("div",{className:"category-search-wrapper"},N.default.createElement("input",{type:"text",className:"category-search-input",placeholder:"\u0428\u0443\u043A\u0430\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457...",value:H,onChange:C=>{P(C.target.value),I(!0)},onFocus:()=>I(!0)}),V&&H&&N.default.createElement("div",{className:"category-dropdown"},X.length>0?X.slice(0,50).map(C=>N.default.createElement("div",{key:C,className:`category-dropdown-item ${S.includes(C)?"selected":""}`,onClick:()=>Y(C)},C,S.includes(C)&&N.default.createElement("span",{className:"checkmark"},"\u2713"))):N.default.createElement("div",{className:"category-dropdown-empty"},"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"))),S.length===0&&N.default.createElement("p",{className:"helper-text"},"\u041F\u043E\u0447\u043D\u0456\u0442\u044C \u0432\u0432\u043E\u0434\u0438\u0442\u0438 \u043D\u0430\u0437\u0432\u0443 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0434\u043B\u044F \u043F\u043E\u0448\u0443\u043A\u0443")),N.default.createElement("section",{className:"form-section"},N.default.createElement("h3",null,"\u0410\u0434\u0440\u0435\u0441\u0430"),L("city")&&N.default.createElement("div",{className:"field-error"},L("city")),N.default.createElement("select",{name:"city",value:a.city,onChange:Se,className:"form-select"},N.default.createElement("option",{value:""},"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"),Ei.map(C=>N.default.createElement("option",{key:C,value:C},C))),L("region")&&N.default.createElement("div",{className:"field-error"},L("region")),N.default.createElement("input",{name:"region",value:a.region,onChange:Se,placeholder:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C"}),L("street_line1")&&N.default.createElement("div",{className:"field-error"},L("street_line1")),N.default.createElement("input",{name:"street_line1",value:a.street_line1,onChange:Se,placeholder:"\u0412\u0443\u043B\u0438\u0446\u044F, \u0431\u0443\u0434\u0438\u043D\u043E\u043A"}),L("street_line2")&&N.default.createElement("div",{className:"field-error"},L("street_line2")),N.default.createElement("input",{name:"street_line2",value:a.street_line2,onChange:Se,placeholder:"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430, \u043E\u0444\u0456\u0441 (\u043D\u0435\u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E)"}),L("postal")&&N.default.createElement("div",{className:"field-error"},L("postal")),N.default.createElement("input",{name:"postal",value:a.postal,onChange:Se,placeholder:"\u041F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441"}),L("country")&&N.default.createElement("div",{className:"field-error"},L("country")),N.default.createElement("input",{name:"country",value:a.country,onChange:Se,placeholder:"\u041A\u0440\u0430\u0457\u043D\u0430",readOnly:!0})),e&&N.default.createElement("section",{className:"form-section"},N.default.createElement("h3",null,"\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"),u&&N.default.createElement("div",{className:"logo-preview"},N.default.createElement("img",{src:l?u:`/images${u}`,alt:"Company logo preview"}),N.default.createElement("button",{type:"button",className:"btn-remove-logo",onClick:ft},"\u2715 \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F")),N.default.createElement("div",{className:"file-input-wrapper"},N.default.createElement("input",{type:"file",id:"logo-input",name:"logo",accept:"image/*",onChange:Ge,className:"file-input"}),N.default.createElement("label",{htmlFor:"logo-input",className:"file-input-label"},u?"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F":"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F"),N.default.createElement("span",{className:"file-input-hint"},"PNG, JPG, GIF \u0434\u043E 5MB")),y&&N.default.createElement("input",{type:"hidden",name:"logo_cached",value:y}),L("logo")&&N.default.createElement("div",{className:"field-error"},L("logo"))),e&&N.default.createElement("section",{className:"form-section"},N.default.createElement("div",{className:"images-header"},N.default.createElement("h3",null,"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"),G._base&&N.default.createElement("div",{className:"field-error",style:{marginBottom:"1rem"}},G._base),N.default.createElement("label",{htmlFor:"images-input",className:"btn-add-image"},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u0444\u043E\u0442\u043E")),N.default.createElement("input",{type:"file",id:"images-input",accept:"image/*",multiple:!0,onChange:kt,className:"file-input",style:{display:"none"}}),f.length>0&&N.default.createElement("div",{className:"images-grid"},N.default.createElement("h4",{className:"images-subtitle"},"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u0456 \u0444\u043E\u0442\u043E"),N.default.createElement("div",{className:"images-list"},f.map(C=>N.default.createElement("div",{key:C.id,className:"image-item"},N.default.createElement("img",{src:`/images${C.image_url}`,alt:C.image_name||"Company image"}),N.default.createElement("button",{type:"button",className:"btn-remove-image",onClick:()=>$r(C.id),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u2715"),N.default.createElement("span",{className:"image-name"},C.image_name))))),b.length>0&&N.default.createElement("div",{className:"images-grid"},N.default.createElement("h4",{className:"images-subtitle"},"\u041D\u043E\u0432\u0456 \u0444\u043E\u0442\u043E (\u0431\u0443\u0434\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E)"),N.default.createElement("div",{className:"images-list"},b.map((C,x)=>N.default.createElement("div",{key:x,className:"image-item new-image"},N.default.createElement("img",{src:C.preview,alt:`Preview ${x+1}`}),N.default.createElement("button",{type:"button",className:"btn-remove-image",onClick:()=>Vo(x),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u2715"),N.default.createElement("span",{className:"image-name"},C.file.name))))),f.length===0&&b.length===0&&N.default.createElement("div",{className:"empty-images"},N.default.createElement("p",null,"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u0449\u0435 \u043D\u0435 \u0434\u043E\u0434\u0430\u043D\u0456"),N.default.createElement("label",{htmlFor:"images-input",className:"btn-add-first-image"},"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0435\u0440\u0448\u0435 \u0444\u043E\u0442\u043E")),L("images")&&N.default.createElement("div",{className:"field-error"},L("images"))),N.default.createElement("div",{className:"form-actions border-top pt-3 content-between pb-3"},N.default.createElement("h3",null,"\u0414\u0456\u0456\u0308"),N.default.createElement("div",{className:"content-center"},r&&n&&N.default.createElement("button",{type:"button",onClick:n,className:"btn-secondary"},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),N.default.createElement("button",{type:"submit",className:"btn-primary"},e?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E"))),N.default.createElement("div",{className:"form-actions border-top pt-3"},e&&N.default.createElement(N.default.Fragment,null,N.default.createElement("h3",{className:"delete-toggle",onClick:()=>w(!v)},v?"\u25B2":"\u25BC"," \u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F"),v&&N.default.createElement("button",{type:"button",className:"btn-danger",onClick:ne},"\u{1F5D1} \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E")))))}var O=J(Q());var _e=J(Q());function Uo({open:e,employee:t,service:n,onClose:r,onSaved:o}){let[a,i]=(0,_e.useState)({name:"",description:"",price:"",duration:30}),[l,s]=(0,_e.useState)(!1),[u,p]=(0,_e.useState)(null);if((0,_e.useEffect)(()=>{i(n?{name:n.name||"",description:n.description||"",price:n.price||"",duration:n.duration||30}:{name:"",description:"",price:"",duration:30})},[n,e]),!e)return null;let d=async()=>{s(!0),p(null);let g={...a,employee_id:t.id},v=n?`/api/services/${n.id}`:"/api/services",w=n?"PUT":"POST";try{let f=await fetch(v,{method:w,credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!f.ok)throw new Error(await f.text());let c=await f.json();r(),o(c)}catch(f){p(f.message||"Failed to save service")}finally{s(!1)}},m=async()=>{if(n&&window.confirm(`Are you sure you want to delete ${n.name}?`)){s(!0),p(null);try{let g=await fetch(`/api/services/${n.id}`,{method:"DELETE",credentials:"include"});if(!g.ok)throw new Error(await g.text());r(),o(null)}catch(g){p(g.message||"Failed to delete service")}finally{s(!1)}}},y=g=>g?parseFloat(g).toFixed(0):"0";return _e.default.createElement("div",{className:"confirm-overlay",onClick:r},_e.default.createElement("div",{className:"glass-modal",onClick:g=>g.stopPropagation()},_e.default.createElement("h3",null,n?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433\u0438":"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443"),u&&_e.default.createElement("div",{className:"form__error"},u),_e.default.createElement("input",{placeholder:"\u0406\u043C'\u044F",value:a.name,onChange:g=>i({...a,name:g.target.value}),disabled:l}),_e.default.createElement("textarea",{placeholder:"\u041E\u043F\u0438\u0441",value:a.description,onChange:g=>i({...a,description:g.target.value}),disabled:l}),_e.default.createElement("input",{type:"number",placeholder:"Price",value:y(a.price),onChange:g=>i({...a,price:g.target.value}),disabled:l}),_e.default.createElement("input",{type:"number",step:15,min:15,placeholder:"Duration (min)",value:a.duration,onChange:g=>i({...a,duration:parseInt(g.target.value)}),disabled:l}),_e.default.createElement("div",{className:"modal-actions"},_e.default.createElement("button",{onClick:r,disabled:l},"Cancel"),n&&_e.default.createElement("button",{className:"danger",onClick:m,disabled:l},"Delete"),_e.default.createElement("button",{className:"apply",onClick:d,disabled:l},l?"Saving...":n?"Update":"Create"))))}function jr({role:e,employee:t,onSave:n,onCancel:r,isModal:o=!1}){let a=He(),[i,l]=(0,O.useState)({first_name:"",last_name:"",description:"",email:"",phone:"",password:"",role:e==="admin"?1:0}),[s,u]=(0,O.useState)({}),[p,d]=(0,O.useState)([]),[m,y]=(0,O.useState)(!1),[g,v]=(0,O.useState)(null),[w,f]=(0,O.useState)(null),[c,h]=(0,O.useState)(null),[k,b]=(0,O.useState)(null);(0,O.useEffect)(()=>{t&&(l({first_name:t.first_name||"",last_name:t.last_name||"",description:t.description||"",email:t.email||"",phone:t.phone||"",password:"",role:t.role??(e==="admin"?1:0)}),d(t.services||[]),t.image&&(h("/images"+t.image.image_url),b(t.image.id)))},[t,e]);let E=async()=>{await fetch("/api/employees/logout",{method:"POST",credentials:"include"})};(0,O.useRef)(()=>{t||E()});let S=Y=>{let ne=Y.target.name==="role"?parseInt(Y.target.value):Y.target.value;l({...i,[Y.target.name]:ne}),u(Pe=>({...Pe,[Y.target.name]:null}))},z=Y=>{let ne=Y.target.files[0];if(ne){f(ne);let Pe=new FileReader;Pe.onloadend=()=>h(Pe.result),Pe.readAsDataURL(ne)}},H=async()=>{if(!k){f(null),h(null);return}if(window.confirm("\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0444\u043E\u0442\u043E?"))try{(await fetch(`/api/images/${k}`,{method:"DELETE",credentials:"include"})).ok?(f(null),h(null),b(null)):alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0444\u043E\u0442\u043E")}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0444\u043E\u0442\u043E")}},P=async Y=>{Y.preventDefault();let ne=new FormData;ne.append("employee[first_name]",i.first_name),ne.append("employee[last_name]",i.last_name),ne.append("employee[description]",i.description),ne.append("employee[email]",i.email),ne.append("employee[phone]",i.phone),ne.append("employee[role]",i.role),i.password&&ne.append("employee[password]",i.password),w&&ne.append("image",w);let Pe=t?`/api/employees/${t.id}`:"/api/employees",ft=await fetch(Pe,{method:t?"PUT":"POST",credentials:"include",body:ne});if(ft.ok){let kt=await ft.json();o&&n?n({...kt,services:p}):a("/companies/welcome")}else{let kt=await ft.json();typeof kt.errors=="string"?u({_base:kt.errors}):u(kt.errors||{}),f(null),k||h(null)}},V=()=>{v(null),y(!0)},I=Y=>{v(Y),y(!0)},G=async Y=>{if(window.confirm(`\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443 "${Y.name}"?`))try{let ne=await fetch(`/api/services/${Y.id}`,{method:"DELETE",credentials:"include"});if(!ne.ok)throw new Error(await ne.text());d(p.filter(Pe=>Pe.id!==Y.id))}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438")}},re=Y=>{d(Y===null?p.filter(ne=>ne.id!==g.id):g?p.map(ne=>ne.id===Y.id?Y:ne):[...p,Y]),v(null)},X=Y=>s[Y]?.message||s[Y],Se=Y=>Y?parseFloat(Y).toFixed(0):"0";return O.default.createElement("div",{className:o?"employee-form-modal":"employee-form container"},O.default.createElement("h1",null,t?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"," ",i.role===1?"\u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430":"\u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),O.default.createElement("form",{onSubmit:P},s._base&&O.default.createElement("div",{className:"field-error",style:{marginBottom:"1rem"}},s._base),O.default.createElement("section",{className:"form-section"},O.default.createElement("h3",null,"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),X("first_name")&&O.default.createElement("div",{className:"field-error"},X("first_name")),O.default.createElement("input",{name:"first_name",value:i.first_name,onChange:S,placeholder:"\u0406\u043C\u02BC\u044F"}),X("last_name")&&O.default.createElement("div",{className:"field-error"},X("last_name")),O.default.createElement("input",{name:"last_name",value:i.last_name,onChange:S,placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),X("email")&&O.default.createElement("div",{className:"field-error"},X("email")),O.default.createElement("input",{name:"email",type:"email",value:i.email,onChange:S,placeholder:"Email"}),X("phone")&&O.default.createElement("div",{className:"field-error"},X("phone")),O.default.createElement("input",{name:"phone",value:i.phone,onChange:S,placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),X("password")&&O.default.createElement("div",{className:"field-error"},X("password")),O.default.createElement("input",{name:"password",type:"password",value:i.password,onChange:S,placeholder:t?"\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u0437\u0430\u043B\u0438\u0448\u0442\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u043C, \u0449\u043E\u0431 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438)":"\u041F\u0430\u0440\u043E\u043B\u044C",required:!t}),X("description")&&O.default.createElement("div",{className:"field-error"},X("description")),O.default.createElement("textarea",{name:"description",value:i.description,onChange:S,placeholder:"\u041E\u043F\u0438\u0441"}),X("role")&&O.default.createElement("div",{className:"field-error"},X("role")),O.default.createElement("label",{htmlFor:"role"},"\u0420\u043E\u043B\u044C"),O.default.createElement("select",{id:"role",name:"role",value:i.role,onChange:S,required:!0},O.default.createElement("option",{value:0},"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A"),O.default.createElement("option",{value:1},"\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440"))),t&&O.default.createElement("section",{className:"form-section"},O.default.createElement("h3",null,"\u0424\u043E\u0442\u043E \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),c&&O.default.createElement("div",{className:"logo-preview"},O.default.createElement("img",{src:c,alt:"Employee photo preview",style:{width:120,height:120,objectFit:"cover",borderRadius:"50%"}}),O.default.createElement("button",{type:"button",className:"btn-remove-logo",onClick:H},"\u2715 \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0444\u043E\u0442\u043E")),O.default.createElement("div",{className:"file-input-wrapper"},O.default.createElement("input",{type:"file",id:"photo-input",accept:"image/*",onChange:z,className:"file-input"}),O.default.createElement("label",{htmlFor:"photo-input",className:"file-input-label"},c?"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0444\u043E\u0442\u043E":"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u043E\u0442\u043E"),O.default.createElement("span",{className:"file-input-hint"},"PNG, JPG, GIF \u0434\u043E 5MB")),X("photo")&&O.default.createElement("div",{className:"field-error"},X("photo"))),t&&O.default.createElement("section",{className:"form-section services-section"},O.default.createElement("div",{className:"services-header"},O.default.createElement("h3",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),O.default.createElement("button",{type:"button",className:"btn-add-service",onClick:V},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443")),p.length>0?O.default.createElement("div",{className:"services-grid"},p.map(Y=>O.default.createElement("div",{key:Y.id,className:"service-card"},O.default.createElement("div",{className:"service-card-header"},O.default.createElement("h4",null,Y.name),O.default.createElement("div",{className:"service-card-actions"},O.default.createElement("button",{type:"button",className:"btn-icon-edit",onClick:()=>I(Y),title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"},"\u270E"),O.default.createElement("button",{type:"button",className:"btn-icon-delete",onClick:()=>G(Y),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u{1F5D1}"))),O.default.createElement("p",{className:"service-description"},Y.description),O.default.createElement("div",{className:"service-footer"},O.default.createElement("span",{className:"service-price"},Se(Y.price)," \u0433\u0440\u043D"),O.default.createElement("span",{className:"service-duration"},Y.duration," \u0445\u0432"))))):O.default.createElement("div",{className:"empty-services"},O.default.createElement("p",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u0449\u0435 \u043D\u0435 \u0434\u043E\u0434\u0430\u043D\u0456"),O.default.createElement("button",{type:"button",className:"btn-add-first-service",onClick:V},"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0435\u0440\u0448\u0443 \u043F\u043E\u0441\u043B\u0443\u0433\u0443"))),O.default.createElement("div",{className:"form-actions"},o&&r&&O.default.createElement("button",{type:"button",onClick:r},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),O.default.createElement("button",{type:"submit"},t?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"))),t&&O.default.createElement(Uo,{open:m,employee:t,service:g,onClose:()=>{y(!1),v(null)},onSaved:re}))}var Ht=J(Q());var hm=document.createElement("style");hm.textContent=`.login {
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
`;document.head.appendChild(hm);function Ho(){let[e,t]=(0,Ht.useState)(""),n=He();async function r(o){o.preventDefault(),t("");let a=o.target.email.value,i=o.target.password.value;try{let l=await fetch("/api/employees/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:i})});if(!l.ok){t("\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 email \u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C");return}let s=await l.json();console.log(s.company_id),s.company_id?n(`/companies/${s.company_id}/dashboard`):n("/companies/new")}catch(l){console.error(l),t("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u2019\u0454\u0434\u043D\u0430\u043D\u043D\u044F \u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C")}}return Ht.default.createElement("div",{className:"login container"},Ht.default.createElement("h1",{className:"login__title"},"\u0412\u0445\u0456\u0434"),e&&Ht.default.createElement("div",{className:"login__error"},e),Ht.default.createElement("form",{className:"login__form",onSubmit:r},Ht.default.createElement("input",{type:"email",placeholder:"Email",name:"email",required:!0}),Ht.default.createElement("input",{type:"password",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",name:"password",required:!0}),Ht.default.createElement("button",{type:"submit",className:"btn"},"\u0423\u0432\u0456\u0439\u0442\u0438")))}var yu=J(Q());function wu(){return yu.default.createElement("div",null,yu.default.createElement("h1",null,"404 CompanyNotFound"))}var Re=J(Q());var rt=J(Q());var gm=document.createElement("style");gm.textContent=`.sidebar {
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
`;document.head.appendChild(gm);function xu({companyName:e,id:t,evikonceUrl:n}){return rt.default.createElement("aside",{className:"sidebar"},rt.default.createElement("div",{class:"hero-logo-small content-center"},rt.default.createElement("img",{src:"/images/evikonce-logo.png",alt:"\u0404 \u0412\u0456\u043A\u043E\u043D\u0446\u0435"}),rt.default.createElement("div",{className:"hero-logo-name-small"},rt.default.createElement("span",null,"\u0404")," \u0412\u0456\u043A\u043E\u043D\u0446\u0435")),rt.default.createElement("h2",{className:"sidebar__logo"},rt.default.createElement(tn,{to:`/w/${n}`},e)),rt.default.createElement("nav",{className:"sidebar__nav"},rt.default.createElement(tn,{to:`/companies/${t}/dashboard`},"\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440"),rt.default.createElement(tn,{to:`/companies/${t}/employees`},"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438"),rt.default.createElement(tn,{to:`/companies/${t}/clients`},"\u041A\u043B\u0456\u0454\u043D\u0442\u0438"),rt.default.createElement(tn,{to:`/companies/${t}/edit`},"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),rt.default.createElement(tn,{to:`/companies/${t}/settings`},"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F")))}var qn=J(Q());var vm=document.createElement("style");vm.textContent=`/* TopBar container */
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
`;document.head.appendChild(vm);function bu({userName:e}){return qn.default.createElement("header",{className:"topbar"},qn.default.createElement("div",{className:"topbar__left"},qn.default.createElement("h1",null,e)),qn.default.createElement("div",{className:"topbar__right"},qn.default.createElement("span",{className:"topbar__user"}),qn.default.createElement("button",{onClick:async()=>{await fetch("/api/employees/logout",{method:"POST",credentials:"include"}),window.location.href="/companies/welcome"},className:"logout-btn"},"\u0412\u0438\u0445\u0456\u0434")))}var K=J(Q());var nn=J(Q());function Ci({timeSlot:e}){let t=s=>s instanceof Date?s:new Date(s),n=t(e.start_time),r=t(e.end_time),o=(r-n)/(1e3*60*60),a=(r-n)/(1e3*60),i=n.getMinutes(),l=e.client?.first_name;return nn.default.createElement("div",{className:`time-slot-block ${e.state}`,style:{position:"absolute",top:`${i/60*100}%`,height:`${o*100}%`,left:0,right:0}},l?nn.default.createElement(nn.default.Fragment,null,nn.default.createElement("div",{className:"client-name"},l),nn.default.createElement("div",{className:"time-label"},e.service_name," (",a," min)")):nn.default.createElement(nn.default.Fragment,null,nn.default.createElement("div",null,e.state)))}var dt=J(Q()),xm=J(Q());var W=J(Q());var Dn=J(Q());var ym=document.createElement("style");ym.textContent=`.confirm-overlay {
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
`;document.head.appendChild(ym);function Bo({open:e,title:t="Are you sure?",message:n="This action cannot be undone.",confirmText:r="Yes",cancelText:o="Cancel",onConfirm:a,onCancel:i}){return e?Dn.default.createElement("div",{className:"confirm-overlay",onClick:i},Dn.default.createElement("div",{className:"confirm-modal",onClick:l=>l.stopPropagation()},Dn.default.createElement("h3",null,t),Dn.default.createElement("p",null,n),Dn.default.createElement("div",{className:"confirm-actions"},Dn.default.createElement("button",{className:"btn cancel",onClick:i},o),Dn.default.createElement("button",{className:"btn danger",onClick:a},r)))):null}var wm=document.createElement("style");wm.textContent=`.weekday-grid {
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
`;document.head.appendChild(wm);function Wo({open:e,employee:t,window:n,selectedDate:r,onClose:o,onSaved:a}){let[i,l]=(0,W.useState)({start_time:"",end_time:"",break_from:"",break_to:"",weekends:[],effective_date:new Date().toISOString().slice(0,10),end_date:""}),[s,u]=(0,W.useState)(!1),[p,d]=(0,W.useState)(null),[m,y]=(0,W.useState)(null),g=[{id:0,label:"\u041F\u043D"},{id:1,label:"\u0412\u0442"},{id:2,label:"\u0421\u0440"},{id:3,label:"\u0427\u0442"},{id:4,label:"\u041F\u0442"},{id:5,label:"\u0421\u0431"},{id:6,label:"\u041D\u0434"}],[v,w]=(0,W.useState)(!1),[f,c]=(0,W.useState)({effective_date:"",end_date:""});(0,W.useEffect)(()=>{e&&(n?(l({start_time:n.start_time||"",end_time:n.end_time||"",break_from:n.break_from||"",break_to:n.break_to||"",weekends:Array.isArray(n.weekends)?n.weekends:[],effective_date:n.effective_date||"",end_date:n.end_date||""}),c({effective_date:n.effective_date?.slice(0,10)||"",end_date:n.end_date?.slice(0,10)||""})):l({start_time:"2000-01-01T09:00:00",end_time:"2000-01-01T18:00:00",break_from:"2000-01-01T13:00:00",break_to:"2000-01-01T14:00:00",weekends:[5,6],effective_date:r||new Date().toISOString().slice(0,10),end_date:""}))},[n,e,r]);let h={start_time:"2000-01-01T09:00:00",end_time:"2000-01-01T18:00:00",break_from:"2000-01-01T13:00:00",break_to:"2000-01-01T14:00:00",weekends:[5,6],effective_date:r||new Date().toISOString().slice(0,10),end_date:""};if((0,W.useEffect)(()=>{d(null),y(null)},[e,n]),!e)return null;let k=async()=>{u(!0),d(null);let E={...i,employee_id:t.id,id:n?.id};try{let S=await fetch("/api/windows/upsert",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)});if(!S.ok)throw new Error(await S.text());let z=await S.json();y(n?"\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E":"\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E"),setTimeout(()=>{y(null),a(z),o()},800)}catch(S){d(S.message||"Failed to save window")}finally{u(!1)}},b=async()=>{if(n)try{let E=await fetch(`/api/windows/${n.id}`,{method:"DELETE",credentials:"include"});if(!E.ok)throw new Error(await E.text());y("\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E"),setTimeout(()=>{y(null),a(null),o()},800)}catch(E){d(E.message||"Failed to delete window")}};return i&&W.default.createElement(W.default.Fragment,null,W.default.createElement("div",{className:"confirm-overlay",onClick:o},W.default.createElement("div",{className:"glass-modal",onClick:E=>E.stopPropagation()},W.default.createElement("h3",null,n?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435":"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),W.default.createElement("div",null,"( ",f.effective_date," .. ",f.end_date," )"),W.default.createElement("br",null),W.default.createElement("label",null,"\u0414\u0430\u0442\u0430 \u043F\u043E\u0447\u0430\u0442\u043A\u0443"),W.default.createElement("input",{type:"date",value:i.effective_date,onChange:E=>l({...i,effective_date:E.target.value})}),W.default.createElement("label",null,"\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F"),W.default.createElement("input",{type:"date",value:i.end_date,onChange:E=>l({...i,end_date:E.target.value})}),p&&W.default.createElement("div",{className:"form__error"},p),m&&W.default.createElement("div",{className:"form__success"},m),W.default.createElement("label",null,"\u0420\u043E\u0431\u043E\u0447\u0438\u0438\u0439 \u0447\u0430\u0441 \u043F\u043E\u0447\u0430\u0442\u043E\u043A"),W.default.createElement("input",{type:"time",value:Pn(i.start_time),onChange:E=>{let S=Ln(i.start_time||new Date().toISOString(),E.target.value);l(z=>({...z,start_time:S}))}}),W.default.createElement("label",null,"\u0420\u043E\u0431\u043E\u0447\u0438\u0438\u0306 \u0447\u0430\u0441 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F"),W.default.createElement("input",{type:"time",value:Pn(i.end_time),onChange:E=>{let S=Ln(i.end_time||new Date().toISOString(),E.target.value);l(z=>({...z,end_time:S}))}}),W.default.createElement("label",null,"\u041F\u0435\u0440\u0435\u0440\u0432\u0430 \u043F\u043E\u0447\u0430\u0442\u043E\u043A"),W.default.createElement("input",{type:"time",value:Pn(i.break_from),onChange:E=>{let S=Ln(i.break_from||new Date().toISOString(),E.target.value);l(z=>({...z,break_from:S}))}}),W.default.createElement("label",null,"\u041F\u0435\u0440\u0435\u0440\u0432\u0430 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F"),W.default.createElement("input",{type:"time",value:Pn(i.break_to),onChange:E=>{let S=Ln(i.break_to||new Date().toISOString(),E.target.value);l(z=>({...z,break_to:S}))}}),W.default.createElement("div",{className:"weekday-picker"},W.default.createElement("label",{className:"form-label"},"\u0412\u0438\u0445\u0456\u0434\u043D\u0456"),W.default.createElement("div",{className:"weekday-grid"},g.map(E=>{let S=i.weekends?.includes(E.id);return W.default.createElement("label",{key:E.id,className:"weekday-checkbox mb-2"},W.default.createElement("input",{type:"checkbox",checked:S,onChange:()=>{l(z=>({...z,weekends:S?z.weekends.filter(H=>H!==E.id):[...z.weekends,E.id]}))}}),W.default.createElement("span",null,E.label))}))),W.default.createElement("div",{className:"modal-actions"},W.default.createElement("button",{onClick:o,disabled:s},"Cancel"),n&&W.default.createElement(W.default.Fragment,null,W.default.createElement("button",{className:"danger",onClick:()=>w(!0)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"),W.default.createElement(Bo,{open:v,title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435?",message:"\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435 \u0432\u0456\u043A\u043E\u043D\u0446\u0435?",confirmText:"\u0422\u0430\u043A",cancelText:"\u041D\u0456",onConfirm:()=>{w(!1),b()},onCancel:()=>w(!1)})),W.default.createElement("button",{className:"apply",onClick:k,disabled:s},n?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438")))))}function ku({days:e,weekStart:t,setWeekStart:n,employees:r,currentEmployee:o,setCurrentEmployee:a}){let i=()=>n(Nn(t,7)),l=()=>n(Nn(t,-7)),s=()=>n(Xn(new Date)),[u,p]=(0,xm.useState)(!1),d=o?.window;return dt.default.createElement("header",{className:"calendar__header sticky"},dt.default.createElement("h4",null,e[0].toLocaleDateString("uk-UA",{day:"numeric",month:"long"})," \u2013 ",e[6].toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})),dt.default.createElement("select",{className:"employee-select",value:o?.id||"",onChange:m=>{let y=m.target.value;a(y===""?null:r.find(g=>g.id===Number(y)))}},dt.default.createElement("option",{value:""},"\u041E\u0431\u0440\u0430\u0442\u0438 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),r.map(m=>dt.default.createElement("option",{key:m.id,value:m.id},m.first_name," ",m.last_name))),o&&!d&&dt.default.createElement("button",{className:"secondary",onClick:()=>p(!0)},"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),o&&dt.default.createElement(Wo,{open:u,employee:o,window:o.window,onClose:()=>p(!1),onSaved:m=>{a(y=>y&&{...y,window:m})}}),dt.default.createElement("div",{className:"calendar__actions"},dt.default.createElement("button",{onClick:l},"\u2190"),dt.default.createElement("button",{onClick:s},"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456"),dt.default.createElement("button",{onClick:i},"\u2192"),dt.default.createElement("input",{className:"date__picker",type:"date",value:t.toISOString().slice(0,10),onChange:m=>n(new Date(m.target.value+"T00:00:00"))})))}var U=J(Q()),Te=J(Q());var Ke=J(Q());var bm=document.createElement("style");bm.textContent=`.client-input-row {
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
`;document.head.appendChild(bm);function Su({open:e,onClose:t,onCreated:n}){let[r,o]=(0,Ke.useState)({first_name:"",last_name:"",email:"",phone:""}),[a,i]=(0,Ke.useState)(!1),[l,s]=(0,Ke.useState)(null),[u,p]=(0,Ke.useState)(null);if(!e)return null;let d=async()=>{i(!0),s(null);try{let m=await fetch("/api/clients",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!m.ok)throw new Error(await m.text());let y=await m.json();p(`Client ${y.first_name} successfully created`),setTimeout(()=>{p(null),n(y),t()},1e3)}catch(m){s(m.message||"Failed to create client")}finally{i(!1)}};return Ke.default.createElement("div",{className:"confirm-overlay",onClick:t},Ke.default.createElement("div",{className:"glass-modal small",onClick:m=>m.stopPropagation()},Ke.default.createElement("h3",null,"\u041D\u043E\u0432\u0438\u0439 \u043A\u043B\u0456\u0454\u043D\u0442"),l&&Ke.default.createElement("div",{className:"form__error"},l),u&&Ke.default.createElement("div",{className:"form__success"},u),["first_name","last_name","email","phone"].map(m=>Ke.default.createElement("input",{key:m,placeholder:m.replace("_"," "),value:r[m],onChange:y=>o(g=>({...g,[m]:y.target.value}))})),Ke.default.createElement("div",{className:"modal-actions"},Ke.default.createElement("button",{onClick:t},"Close"),Ke.default.createElement("button",{className:"apply",disabled:a,onClick:d},"Create"))))}var km=document.createElement("style");km.textContent=`.form__title {
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
`;document.head.appendChild(km);function Eu({slot:e,weekStart:t,previewSlot:n,setPreviewSlot:r,setTimeSlots:o,setEditingSlot:a,editingSlot:i,currentEmployee:l}){let[s,u]=(0,Te.useState)(()=>e?.duration??15),[p,d]=(0,Te.useState)(""),[m,y]=(0,Te.useState)([]),[g,v]=(0,Te.useState)(!1),[w,f]=(0,Te.useState)(null),[c,h]=(0,Te.useState)(null),[k,b]=(0,Te.useState)(null),[E,S]=(0,Te.useState)(null),[z,H]=(0,Te.useState)(!1),P={preview:"\u041F\u0440\u0435\u0434\u043F\u043B\u0430\u043D\u043E\u0432\u0430\u043D\u0438\u0439",scheduled:"\u0417\u0430\u043F\u043B\u0430\u043D\u043E\u0432\u0430\u043D\u0438\u0439"},[V,I]=(0,Te.useState)(null),[G,re]=(0,Te.useState)(null),[X,Se]=(0,Te.useState)(!1),[Y,ne]=(0,Te.useState)(!1);if((0,Te.useEffect)(()=>{if(!e)return;a(e),u(e.duration??15);let L=l.services.find(C=>C.id===e.service_id);if(L){I(L);let C=e.price?Number(e.price):null;re(C)}},[e,l]),!i)return null;let Pe=(L,C)=>Je(_n(new Date(L),C)),Ge=(0,Te.useRef)(null),ft=L=>{!L||L.length<3||(Ge.current&&clearTimeout(Ge.current),Ge.current=window.setTimeout(async()=>{v(!0);let x=await(await fetch(`/api/clients?search=${L}`)).json();y(x),v(!1)},250))},kt=async()=>{if(h(null),!!i)try{let L=await fetch(`/api/time_slots/${i.id}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!L.ok){let x=await L.text();throw new Error(x||"Failed to update time slot")}let C=await L.json();o(x=>x.map(F=>F.id===C.id?C:F)),b("Time slot updated successfully!"),setTimeout(()=>{b(null),a(null),d(""),f(null),r(null)},1e3),nr()}catch(L){h(L.message)}},$r=async()=>{if(h(null),!!i)try{let L=await fetch(`/api/time_slots/${i.id}`,{method:"DELETE",credentials:"include"});if(!L.ok){let x=await L.text();throw new Error(x||"Failed to delete time slot")}let C=await L.json();o(x=>x.filter(F=>F.id!==C.id)),b("Time slot deleted successfully!"),setTimeout(()=>{b(null),a(null),d(""),f(null),r(null)},1e3),nr()}catch(L){h(L.message)}},Vo=async()=>{if(h(null),!i)return;let L={...i,client_id:i.client_id??n?.client_id??null};console.log("POST payload:",L);try{let C=await fetch("/api/time_slots",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(L)});if(!C.ok){let F=await C.text();throw new Error(F||"Failed to schedule time slot")}let x=await C.json();o(F=>[...F,x]),b("\u0421\u043B\u043E\u0442 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0438\u0306 \u0443\u0441\u043F\u0456\u0448\u043D\u043E!"),setTimeout(()=>{b(null),a(null),d(""),f(null),r(null)},1e3),nr()}catch(C){h(C.message)}},nr=()=>{let L=t.toISOString().slice(0,10),C=Nn(t,6).toISOString().slice(0,10);fetch(`/api/employees/${l.id}/availability?from=${L}&to=${C}`).then(x=>x.json()).then(x=>{S(x.employee.window),o(x.employee.time_slots)})};return U.default.createElement("div",{className:"glass-overlay",onClick:()=>a(null)},U.default.createElement("div",{className:"glass-modal",onClick:L=>L.stopPropagation()},U.default.createElement("div",{className:"form__title"},U.default.createElement("div",{className:"form__title-left"},"\u0420\u0435\u0434\u0430\u0433\u0443\u043D\u043D\u044F \u0441\u043B\u043E\u0442\u0443:"),U.default.createElement("div",{className:`form__title-right form__title_${i.state}`},i.state)),c&&U.default.createElement("div",{className:"form__error"},c),k&&U.default.createElement("div",{className:"form__success"},k),U.default.createElement("div",{className:"form-group mt-3"},U.default.createElement("div",{className:"time-range-row width-50"},U.default.createElement("label",null,"\u0414\u0430\u0442\u0430"),U.default.createElement("input",{type:"date",className:"date__picker",value:i.day,onChange:L=>{let C=L.target.value;a(x=>({...x,day:C,start_time:`${C}${x.start_time.slice(10)}`,end_time:`${C}${x.end_time.slice(10)}`}))}}))),U.default.createElement("div",{className:"form-group mt-2"},U.default.createElement("label",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0430"),U.default.createElement("div",{className:"time-range-row"},U.default.createElement("div",{className:"input-with-button"},U.default.createElement("select",{className:"width-100",value:i.service_id??"",onChange:L=>{let C=Number(L.target.value),x=l.services.find(xe=>xe.id===C);if(!x){I(null),re(null);return}let F=new Date(i.start_time);u(x.duration);let Z={service_id:x.id,duration:x.duration,price:x.price,end_time:Je(_n(F,x.duration))};a(xe=>({...xe,...Z})),r(xe=>xe?{...xe,...Z}:null),I(x),re(null)}},U.default.createElement("option",{value:""},"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043F\u043E\u0441\u043B\u0443\u0433\u0443"),l.services.map(L=>U.default.createElement("option",{key:L.id,value:L.id},L.name))),U.default.createElement("div",{className:"input-button content-center",title:"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443",onClick:()=>ne(!0)},"+")),U.default.createElement(Uo,{open:Y,employee:l,onClose:()=>ne(!1),onSaved:L=>{if(!L)return;l.services.push(L);let C=new Date(i.start_time);u(L.duration);let x={service_id:L.id,duration:L.duration,price:L.price,end_time:Je(_n(C,L.duration))};a(F=>({...F,...x})),r(F=>F?{...F,...x}:null),I(L),re(null)}}))),U.default.createElement("div",{className:"form-group"},V&&U.default.createElement(U.default.Fragment,null,U.default.createElement("div",{className:"time-range-row mt-1 t-sm"},U.default.createElement("label",null,"\u0425\u0432"),U.default.createElement("input",{type:"number",step:15,min:15,value:i.duration,onChange:L=>{let C=Number(L.target.value),x=new Date(i.start_time);u(C),a(F=>({...F,duration:C,end_time:Je(_n(x,C))})),r(F=>F?{...F,duration:C,end_time:Je(_n(x,C))}:null)}}),U.default.createElement("label",{className:"content-center"},"\u0426\u0456\u043D\u0430"),U.default.createElement("input",{type:"number",step:.01,min:0,value:G??Number(i.price??V?.price??0),onChange:L=>{let C=Number(L.target.value);re(C),a(x=>({...x,price:C}))}})))),U.default.createElement("div",{className:"form-group time-range"},U.default.createElement("label",null,"\u0427\u0430\u0441"),U.default.createElement("div",{className:"time-range-row"},U.default.createElement("input",{type:"time",step:900,value:Pn(i.start_time),onChange:L=>{let C=Ln(i.start_time,L.target.value);a(x=>({...x,start_time:C,end_time:Pe(C,s)}))}}),U.default.createElement("input",{type:"time",step:900,value:Pn(i.end_time),onChange:L=>{let C=Ln(i.end_time,L.target.value);a(x=>({...x,end_time:C,start_time:Pe(C,-s)}))}}))),U.default.createElement("div",{className:"form-group"},U.default.createElement("label",null,"\u041A\u043B\u0456\u0454\u043D\u0442"),U.default.createElement("div",{className:"input-with-button"},U.default.createElement("input",{type:"text",placeholder:"Search client...",value:i?.client?`${i.client.first_name} ${i.client.last_name}`:p,onChange:L=>{a(C=>({...C,client:null,client_id:null})),d(L.target.value),ft(L.target.value)}}),U.default.createElement("div",{className:"input-button content-center",onClick:()=>Se(!0),title:"Add client"},"+")),U.default.createElement(Su,{open:X,onClose:()=>Se(!1),onCreated:L=>{a(C=>({...C,client_id:L.id,client:L}))}}),g&&U.default.createElement("div",{className:"hint"},"Searching\u2026"),m.length>0&&U.default.createElement("ul",{className:"autocomplete-list"},m.map(L=>U.default.createElement("li",{key:L.id,onClick:()=>{y([]),a(C=>({...C,client_id:L.id,client:L}))}},U.default.createElement("strong",null,L.first_name," ",L.last_name),U.default.createElement("div",{className:"muted"},L.email))))),U.default.createElement("div",{className:"modal-actions"},U.default.createElement("button",{onClick:()=>{h(null),a(null),d(""),f(null)}},"\u0417\u0430\u043A\u0440\u0438\u0442\u0438"),i.state==="preview"&&U.default.createElement("button",{className:"apply",onClick:Vo},"\u0417\u0430\u043F\u043B\u0430\u043D\u0443\u0432\u0430\u0442\u0438"),i.state==="scheduled"&&U.default.createElement(U.default.Fragment,null,U.default.createElement("button",{className:"danger",onClick:()=>H(!0)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"),U.default.createElement(Bo,{open:z,title:"Delete time slot",message:"Are you sure you want to delete this time slot?",confirmText:"Yes",cancelText:"No",onConfirm:()=>{H(!1),$r()},onCancel:()=>H(!1)})),i.state==="scheduled"&&U.default.createElement("button",{className:"apply",onClick:kt},"\u041E\u043D\u043E\u0432\u0438\u0442\u0438"))))}var Sm=document.createElement("style");Sm.textContent=`.calendar-card {
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
`;document.head.appendChild(Sm);function Cu({employees:e,companyId:t}){let[n,r]=(0,K.useState)(Xn(new Date)),[o,a]=(0,K.useState)(null),[i,l]=(0,K.useState)(null),[s,u]=(0,K.useState)(null),[p,d]=(0,K.useState)([]),[m,y]=(0,K.useState)([]),g=(0,K.useRef)(null),[v,w]=(0,K.useState)(null),[f,c]=(0,K.useState)(null),[h,k]=(0,K.useState)(null),[b,E]=(0,K.useState)(!1),[S,z]=(0,K.useState)(null),H=Array.from({length:7},(x,F)=>Nn(n,F)),P=new Date,V=()=>{let x=n.toISOString().slice(0,10),F=Nn(n,6).toISOString().slice(0,10);fetch(`/api/employees/${i.id}/availability?from=${x}&to=${F}`).then(Z=>Z.json()).then(Z=>{u(Z.employee.window),d(Z.employee.upcoming_windows),y(Z.employee.time_slots)})};(0,K.useEffect)(()=>{i&&V()},[i,n]);let[I,G]=(0,K.useState)(new Date);(0,K.useEffect)(()=>{let x=()=>G(new Date);x();let F=setInterval(x,300*1e3);return()=>clearInterval(F)},[]);let re=(0,K.useRef)(null),[X,Se]=(0,K.useState)(0);(0,K.useEffect)(()=>{re.current&&Se(re.current.getBoundingClientRect().height)},[n,i]);let Y=I.toISOString().slice(0,10),ne=I.getHours(),Pe=I.getMinutes(),Ge=X*ne+X*Pe/60,ft=["window-a","window-b","window-c","window-d","window-e"],kt=x=>{let F=Ao(x,[s,...p||[]]);if(!F)return"";let Z=F.id%ft.length;return ft[Z]},$r=H.some(x=>x.toISOString().slice(0,10)===Y);(0,K.useEffect)(()=>{let x=g.current;x&&requestAnimationFrame(()=>{let F=x.scrollHeight-x.clientHeight;x.scrollTop=F/2})},[n,i]);let Vo=(x,F)=>Je(_n(new Date(x),F)),nr=(x,F)=>{if(!v||v.day!==x.toISOString().slice(0,10))return!1;let Z=Zn(x,F,0),xe=Zn(x,F+1,0),St=Ft(v.start_time),pt=Ft(v.end_time);return jo(St,pt,Z,xe)},L=(x,F,Z)=>{let xe=Ft(x.start_time);return xe?xe.getHours()===Z&&x.day===F.toISOString().slice(0,10):!1},C=(x,F)=>{let Z=x.toISOString().slice(0,10),xe=Zn(x,F,0),St=Zn(x,F+1,0);return m.filter(pt=>{if(pt.day!==Z)return!1;let Bt=Ft(pt.start_time),Yo=Ft(pt.end_time);return jo(Bt,Yo,xe,St)})};return K.default.createElement("section",{className:"calendar-card"},K.default.createElement(ku,{days:H,weekStart:n,setWeekStart:r,employees:e,currentEmployee:i,setCurrentEmployee:x=>{x?l(x):(l(null),y([]),u(null),w(null),d([]))}}),K.default.createElement("div",{className:"week-calendar"},K.default.createElement("div",{className:"week-header"},K.default.createElement("div",{className:"time-col"}),H.map(x=>{let F=x<P,Z=Ao(x,[s,...p||[]]);return K.default.createElement("div",{key:x.toISOString(),className:`day-col-header
                          ${x.toDateString()===P.toDateString()?"today":""}
                          ${kt(x)}
                        `,"data-tooltip":!i||!Z?.effective_date?"":`\u0412\u0456\u043A\u043E\u043D\u0446\u0435
\u041F\u043E\u0447\u0430\u0442\u043E\u043A ${Z?.effective_date}
\u041A\u0456\u043D\u0435\u0446\u044C ${Z?.end_date||"\u221E"}`,onClick:()=>{F||(z(x),E(!0))}},i&&!F&&K.default.createElement("span",{className:"edit-icon"},Z?"\u2699\uFE0F":"\u2795"),K.default.createElement("div",null,x.toLocaleDateString("uk-UA",{weekday:"short"})),K.default.createElement("div",null,x.getDate()))}),i&&S&&K.default.createElement(Wo,{open:b,employee:i,window:Ao(S,[s,...p||[]]),selectedDate:S.toISOString().slice(0,10),onClose:()=>{z(null),E(!1)},onSaved:x=>{l(F=>F&&{...F,window:x})}})),K.default.createElement("div",{className:"week-body",ref:g},$r&&X>0&&K.default.createElement("div",{className:"now-line",style:{top:`${Ge}px`}},K.default.createElement("div",{className:"now-dot"})),dm.map((x,F)=>K.default.createElement("div",{key:x,className:"week-row",ref:F===0?re:null},K.default.createElement("div",{className:"time-col"},x,":00"),H.map(Z=>{let xe=C(Z,x),St=Z<Xn(new Date),pt=fm({day:Z,hour:x,windows:[s,...p]});return K.default.createElement("div",{key:`${Z.toISOString()}-${x}`,className:`week-cell ${pt?"":St?"past":"unavailable"}`,onMouseDown:Bt=>{if(k(null),!pt||!i)return;let Yo=Bt.currentTarget.getBoundingClientRect(),Fu=(Bt.clientY-Yo.top)/Yo.height>=.5?30:0,Rm=Fu+30,Ni=Zn(Z,x,Fu),_i=Zn(Z,x,Rm);for(let rn of xe){let Pi=Ft(rn.start_time),Mm=Ft(rn.end_time);if(jo(Ni,_i,Pi,Mm)){c(rn),a(rn);return}}if(v){let rn=Ft(v.start_time),Pi=Ft(v.end_time);if(v.day===Z.toISOString().slice(0,10)&&jo(Ni,_i,rn,Pi)){a(v);return}}w({day:Z.toISOString().slice(0,10),dayIndex:H.findIndex(rn=>rn.toDateString()===Z.toDateString()),start_time:Je(Ni),end_time:Je(_i),state:"preview",employee_id:i.id,company_id:t})}},xe.filter(Bt=>L(Bt,Z,x)).map(Bt=>K.default.createElement(Ci,{key:Bt.id,timeSlot:Bt})),v&&L(v,Z,x)&&K.default.createElement(Ci,{timeSlot:v}))}))))),o&&K.default.createElement(Eu,{slot:o,weekStart:n,previewSlot:v,setPreviewSlot:w,setTimeSlots:y,setEditingSlot:a,editingSlot:o,currentEmployee:i}))}var oe=J(Q());var Em=document.createElement("style");Em.textContent=`.employees-container {
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
`;document.head.appendChild(Em);function Nu({dashboardData:e}){let[t,n]=(0,oe.useState)(e?.employees||[]),[r,o]=(0,oe.useState)(!1),[a,i]=(0,oe.useState)(null),[l,s]=(0,oe.useState)(null),u=()=>{i(null),o(!0)},p=g=>{i(g),o(!0)},d=async g=>{if(window.confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044C\u043E\u0433\u043E \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430?"))try{let v=await fetch(`/api/employees/${g}`,{method:"DELETE",credentials:"include"});if(v.ok)n(t.filter(w=>w.id!==g));else{let w=await v.json();s(w.message||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}}catch{s("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}},m=g=>{n(a?t.map(v=>v.id===g.id?g:v):[...t,g]),o(!1),i(null)},y=()=>{o(!1),i(null)};return oe.default.createElement("div",{className:"employees-container"},oe.default.createElement("div",{className:"employees-header"},oe.default.createElement("h2",null,"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438"),oe.default.createElement("button",{className:"btn",onClick:u},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430")),l&&oe.default.createElement("div",{className:"error-message"},l),t.length===0?oe.default.createElement("div",{className:"empty-state"},oe.default.createElement("p",null,"\u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0456\u0432. \u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0448\u043E\u0433\u043E!")):oe.default.createElement("div",{className:"employees-table"},oe.default.createElement("table",null,oe.default.createElement("thead",null,oe.default.createElement("tr",null,oe.default.createElement("th",null,"\u0406\u043C'\u044F"),oe.default.createElement("th",null,"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),oe.default.createElement("th",null,"Email"),oe.default.createElement("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),oe.default.createElement("th",{className:"content-right"},"\u0414\u0456\u0457"))),oe.default.createElement("tbody",null,t.map(g=>oe.default.createElement("tr",{key:g.id},oe.default.createElement("td",null,g.first_name),oe.default.createElement("td",null,g.last_name),oe.default.createElement("td",null,g.email),oe.default.createElement("td",null,g.phone||"N/A"),oe.default.createElement("td",{className:"actions content-right"},oe.default.createElement("button",{className:"btn-edit",onClick:()=>p(g)},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),oe.default.createElement("button",{className:"btn-delete",onClick:()=>d(g.id)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"))))))),r&&oe.default.createElement("div",{className:"modal-overlay",onClick:y},oe.default.createElement("div",{className:"modal-content",onClick:g=>g.stopPropagation()},oe.default.createElement(jr,{role:"employee",employee:a,onSave:m,onCancel:y,isModal:!0}))))}var te=J(Q());var we=J(Q());function _u({client:e,onSave:t,onCancel:n,isModal:r=!1}){let o=He(),[a,i]=(0,we.useState)({first_name:"",last_name:"",email:"",phone:"",password:""}),[l,s]=(0,we.useState)({});(0,we.useEffect)(()=>{e&&i({first_name:e.first_name||"",last_name:e.last_name||"",email:e.email||"",phone:e.phone||"",password:""})},[e]);let u=m=>{i({...a,[m.target.name]:m.target.value}),s(y=>({...y,[m.target.name]:null}))},p=async m=>{m.preventDefault();let y={client:{first_name:a.first_name,last_name:a.last_name,email:a.email,phone:a.phone}};a.password&&(y.client.password=a.password);let g=e?`/api/clients/${e.id}`:"/api/clients",w=await fetch(g,{method:e?"PUT":"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)});if(w.ok){let f=await w.json();r&&t?t(f):o("/companies/welcome")}else{let f=await w.json();s(f.errors||{})}},d=m=>l[m]?.message;return we.default.createElement("div",{className:r?"client-form-modal":"client-form container"},we.default.createElement("h1",null,e?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430"),we.default.createElement("form",{onSubmit:p},d("first_name")&&we.default.createElement("div",{className:"field-error"},d("first_name")),we.default.createElement("input",{name:"first_name",value:a.first_name,onChange:u,placeholder:"\u0406\u043C\u02BC\u044F"}),d("last_name")&&we.default.createElement("div",{className:"field-error"},d("last_name")),we.default.createElement("input",{name:"last_name",value:a.last_name,onChange:u,placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),d("email")&&we.default.createElement("div",{className:"field-error"},d("email")),we.default.createElement("input",{name:"email",type:"email",value:a.email,onChange:u,placeholder:"Email"}),d("phone")&&we.default.createElement("div",{className:"field-error"},d("phone")),we.default.createElement("input",{name:"phone",value:a.phone,onChange:u,placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),d("password")&&we.default.createElement("div",{className:"field-error"},d("password")),we.default.createElement("input",{name:"password",type:"password",value:a.password,onChange:u,placeholder:e?"\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u0437\u0430\u043B\u0438\u0448\u0442\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u043C, \u0449\u043E\u0431 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438)":"\u041F\u0430\u0440\u043E\u043B\u044C",required:!e}),we.default.createElement("div",{className:"form-actions"},r&&n&&we.default.createElement("button",{type:"button",onClick:n},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),we.default.createElement("button",{type:"submit"},e?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"))))}var Cm=document.createElement("style");Cm.textContent=`.clients-container {
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
`;document.head.appendChild(Cm);function Pu({dashboardData:e}){let[t,n]=(0,te.useState)([]),[r,o]=(0,te.useState)(!1),[a,i]=(0,te.useState)(null),[l,s]=(0,te.useState)(null),u=async()=>{try{let v=await fetch("/api/clients",{credentials:"include"});if(v.ok){let w=await v.json();n(w.clients)}else s("Failed to fetch clients")}catch{s("Failed to fetch clients")}};(0,te.useEffect)(()=>{(async()=>{try{let w=await fetch("/api/clients",{credentials:"include"});if(w.ok){let f=await w.json();n(f.clients||f)}else s("Failed to fetch clients")}catch{s("Failed to fetch clients")}})()},[]);let p=()=>{i(null),o(!0)},d=v=>{i(v),o(!0)},m=async v=>{if(window.confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044C\u043E\u0433\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430?"))try{let w=await fetch(`/api/clients/${v}`,{method:"DELETE",credentials:"include"});if(w.ok)n(t.filter(f=>f.id!==v));else{let f=await w.json();s(f.message||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}}catch{s("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}},y=v=>{n(a?t.map(w=>w.id===v.id?v:w):[...t,v]),o(!1),i(null)},g=()=>{o(!1),i(null)};return te.default.createElement("div",{className:"clients-container"},te.default.createElement("div",{className:"clients-header"},te.default.createElement("h2",null,"\u041A\u043B\u0456\u0454\u043D\u0442\u0438"),te.default.createElement("button",{className:"btn",onClick:p},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430")),l&&te.default.createElement("div",{className:"error-message"},l),t.length===0?te.default.createElement("div",{className:"empty-state"},te.default.createElement("p",null,"\u041D\u0435\u043C\u0430\u0454 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432. \u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0448\u043E\u0433\u043E!")):te.default.createElement("div",{className:"clients-table"},te.default.createElement("table",null,te.default.createElement("thead",null,te.default.createElement("tr",null,te.default.createElement("th",null,"\u0406\u043C'\u044F"),te.default.createElement("th",null,"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),te.default.createElement("th",null,"Email"),te.default.createElement("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),te.default.createElement("th",{className:"content-right"},"\u0414\u0456\u0457"))),te.default.createElement("tbody",null,t.map(v=>te.default.createElement("tr",{key:v.id},te.default.createElement("td",null,v.first_name),te.default.createElement("td",null,v.last_name),te.default.createElement("td",null,v.email),te.default.createElement("td",null,v.phone||"N/A"),te.default.createElement("td",{className:"actions content-right"},te.default.createElement("button",{className:"btn-edit",onClick:()=>d(v)},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),te.default.createElement("button",{className:"btn-delete",onClick:()=>m(v.id)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"))))))),r&&te.default.createElement("div",{className:"modal-overlay",onClick:g},te.default.createElement("div",{className:"modal-content",onClick:v=>v.stopPropagation()},te.default.createElement(_u,{client:a,onSave:y,onCancel:g,isModal:!0}))))}var A=J(Q());var Nm=document.createElement("style");Nm.textContent=`.company-container {
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
`;document.head.appendChild(Nm);function Lu({dashboardData:e,fetchData:t}){let[n,r]=(0,A.useState)(e?.company||null),[o,a]=(0,A.useState)(!1),[i,l]=(0,A.useState)(null),[s,u]=(0,A.useState)(null),[p,d]=(0,A.useState)(null),{id:m}=en(),y=He(),g=Ue(),v=()=>{a(!0),fetch(`/api/companies/${m}/dashboard`).then(c=>c.status===401?(y("/companies/welcome"),null):c.json()).then(c=>{c&&(d(c),r(c.company))}).catch(()=>{l("Failed to fetch dashboard data")})},w=c=>{r(c),a(!1),u("\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E"),setTimeout(()=>u(null),3e3)},f=()=>{a(!1)};return n?A.default.createElement("div",{className:"company-container"},A.default.createElement("div",{className:"company-header"},A.default.createElement("h2",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),A.default.createElement("button",{className:"btn",onClick:v},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438")),i&&A.default.createElement("div",{className:"error-message"},i),s&&A.default.createElement("div",{className:"success-message"},s),A.default.createElement("div",{className:"company-details"},A.default.createElement("section",{className:"company-section"},A.default.createElement("h3",null,"\u041E\u0441\u043D\u043E\u0432\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"),A.default.createElement("div",{className:"detail-grid"},A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u041D\u0430\u0437\u0432\u0430:"),A.default.createElement("span",null,n.name)),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"Email:"),A.default.createElement("span",null,n.email||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"),A.default.createElement("span",null,n.phone||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442:"),A.default.createElement("span",null,n.website?A.default.createElement("a",{href:n.website,target:"_blank",rel:"noopener noreferrer"},n.website):"N/A")),A.default.createElement("div",{className:"detail-item full-width"},A.default.createElement("label",null,"\u041E\u043F\u0438\u0441:"),A.default.createElement("span",null,n.description||"N/A")))),n.address&&A.default.createElement("section",{className:"company-section"},A.default.createElement("h3",null,"\u0410\u0434\u0440\u0435\u0441\u0430"),A.default.createElement("div",{className:"detail-grid"},A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u0412\u0443\u043B\u0438\u0446\u044F 1:"),A.default.createElement("span",null,n.address.street_line1||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u0412\u0443\u043B\u0438\u0446\u044F 2:"),A.default.createElement("span",null,n.address.street_line2||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u041C\u0456\u0441\u0442\u043E:"),A.default.createElement("span",null,n.address.city||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u041E\u0431\u043B\u0430\u0441\u0442\u044C:"),A.default.createElement("span",null,n.address.region||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u041F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441:"),A.default.createElement("span",null,n.address.postal||"N/A")),A.default.createElement("div",{className:"detail-item"},A.default.createElement("label",null,"\u041A\u0440\u0430\u0457\u043D\u0430:"),A.default.createElement("span",null,n.address.country||"N/A"))))),o&&A.default.createElement("div",{className:"modal-overlay",onClick:f},A.default.createElement("div",{className:"modal-content",onClick:c=>c.stopPropagation()},A.default.createElement($o,{company:n,onSave:w,onCancel:f,isModal:!0})))):A.default.createElement("div",{className:"company-container"},A.default.createElement("div",{className:"empty-state"},A.default.createElement("p",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430")))}var B=J(Q());var _m=document.createElement("style");_m.textContent=`.company-container {
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
`;document.head.appendChild(_m);function Du({dashboardData:e}){return B.default.createElement("div",{className:"company-container"},B.default.createElement("div",{className:"company-header"},B.default.createElement("h2",null,"\u0422\u0430\u0440\u0438\u0444\u043D\u0438\u0439 \u043F\u043B\u0430\u043D")),B.default.createElement("div",{className:"company-details"},B.default.createElement("div",{className:"company-section highlight-free"},B.default.createElement("h3",null,"\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u0442\u0430\u0440\u0438\u0444"),B.default.createElement("div",{className:"detail-grid"},B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C"),B.default.createElement("span",null,"0 \u0433\u0440\u043D \u2014 \u041D\u0430\u0437\u0430\u0432\u0436\u0434\u0438")),B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0421\u0430\u0439\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"),B.default.createElement("span",null,"\u0417 \u0432\u0430\u0448\u0438\u043C \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u043E\u043C \u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0456\u044E \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F")),B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0421\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F"),B.default.createElement("span",null,"\u0411\u0430\u0437\u043E\u0432\u0456 \u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F \u0447\u0435\u0440\u0435\u0437 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443")),B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u041E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F"),B.default.createElement("span",null,"\u0414\u043E 2 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0456\u0432")),B.default.createElement("div",{className:"detail-item full-width"},B.default.createElement("label",null,"\u041E\u0431\u0441\u044F\u0433 \u0437\u0430\u043F\u0438\u0441\u0456\u0432"),B.default.createElement("span",null,"50 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u044C \u043D\u0430 \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u043C\u0430\u0439\u0441\u0442\u0440\u0430 \u0449\u043E\u043C\u0456\u0441\u044F\u0446\u044F")))),B.default.createElement("div",{className:"company-section"},B.default.createElement("h3",null,"\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0443\u0432\u0430\u043D\u043D\u044F"),B.default.createElement("div",{className:"detail-grid"},B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0426\u0456\u043D\u0430"),B.default.createElement("span",null,"$2.50 / \u043C\u0456\u0441\u044F\u0446\u044C (\u2248 99 \u0433\u0440\u043D)")),B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u041C\u043E\u0436\u043B\u0438\u0432\u043E\u0441\u0442\u0456"),B.default.createElement("span",null,"\u0411\u0435\u0437\u043B\u0456\u043C\u0456\u0442\u043D\u0456 \u0437\u0430\u043F\u0438\u0441\u0438 \u0442\u0430 \u0434\u043E 50 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0456\u0432")),B.default.createElement("div",{className:"detail-item full-width"},B.default.createElement("label",null,"\u0423\u043C\u043E\u0432\u0430"),B.default.createElement("span",null,"\u0412\u0438 \u043F\u043B\u0430\u0442\u0438\u0442\u0435 \u043B\u0438\u0448\u0435 \u0442\u043E\u0434\u0456, \u043A\u043E\u043B\u0438 \u0432\u0430\u0448 \u0431\u0456\u0437\u043D\u0435\u0441 \u0440\u0435\u0430\u043B\u044C\u043D\u043E \u0437\u0440\u043E\u0441\u0442\u0430\u0454")))),B.default.createElement("div",{className:"company-section"},B.default.createElement("h3",null,"\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u043C\u043E\u0434\u0443\u043B\u0456 \u0432 \u0440\u043E\u0437\u0440\u043E\u0431\u0446\u0456"),B.default.createElement("p",{style:{fontSize:"14px",color:"#666",marginBottom:"16px"}},"\u0410\u043A\u0442\u0438\u0432\u0443\u0439\u0442\u0435 \u043B\u0438\u0448\u0435 \u0442\u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0457, \u044F\u043A\u0456 \u0432\u0430\u043C \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456:"),B.default.createElement("div",{className:"detail-grid"},B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0421\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F"),B.default.createElement("span",null,"SMS \u0442\u0430 Telegram \u0434\u043B\u044F \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432")),B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0410\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0430"),B.default.createElement("span",null,"\u0415\u043A\u0441\u043F\u043E\u0440\u0442 \u0431\u0430\u0437\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432 \u0443 CSV")),B.default.createElement("div",{className:"detail-item"},B.default.createElement("label",null,"\u0406\u043D\u0442\u0435\u043B\u0435\u043A\u0442"),B.default.createElement("span",null,"AI-\u0430\u0441\u0438\u0441\u0442\u0435\u043D\u0442 \u0434\u043B\u044F \u0437\u0430\u043F\u0438\u0441\u0456\u0432"))))))}var Pm=document.createElement("style");Pm.textContent=`.dashboard {
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
`;document.head.appendChild(Pm);function er(){let[e,t]=(0,Re.useState)(),{id:n}=en(),r=He(),o=Ue();if((0,Re.useEffect)(()=>{e!==void 0&&(document.title=`\u0404 \u0432\u0456\u043A\u043E\u043D\u0446\u0435 \u2014 ${e?.company.name}`)},[e]),(0,Re.useEffect)(()=>{fetch(`/api/companies/${n}/dashboard`).then(i=>i.status===401?(r("/companies/welcome"),null):i.json()).then(i=>{i&&t(i)}).catch(()=>{r("/companies/welcome")})},[n,r]),e===void 0)return Re.default.createElement("p",null,"Loading...");let a=()=>{let i=o.pathname;return i.includes("/employees")?Re.default.createElement(Nu,{dashboardData:e}):i.includes("/clients")?Re.default.createElement(Pu,{dashboardData:e}):i.includes("/edit")?Re.default.createElement(Lu,{dashboardData:e}):i.includes("/settings")?Re.default.createElement(Du,{dashboardData:e}):Re.default.createElement(Cu,{employees:e.employees,companyId:n})};return Re.default.createElement("div",{className:"dashboard"},Re.default.createElement(xu,{companyName:e.company.name,id:n,evikonceUrl:e.company.evikonce_url}),Re.default.createElement("div",{className:"dashboard__content"},Re.default.createElement(bu,{userName:e.user.first_name}),Re.default.createElement("main",{className:"dashboard__main content-center"},a())))}var tr=J(Q());function Tu(){return tr.default.createElement("div",{class:"container"},tr.default.createElement("p",{class:"t-a-center"},"\u0412\u0436\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442?"),tr.default.createElement(Ho,null),tr.default.createElement("div",{className:"t-a-center"},tr.default.createElement("p",null,"\u0429\u0435 \u043D\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443?"),tr.default.createElement(Gn,{to:"/companies/admins/new"},"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F")))}var Lm=document.createElement("style");Lm.textContent="";document.head.appendChild(Lm);function zu(){return ue.default.createElement("div",null,ue.default.createElement(Mo,null,ue.default.createElement(ke,{path:"/",redirectTo:"welcome"}),ue.default.createElement(ke,{path:"welcome",element:ue.default.createElement(Tu,null)}),ue.default.createElement(ke,{path:"new",element:ue.default.createElement($o,null)}),ue.default.createElement(ke,{path:"employees/new",element:ue.default.createElement(jr,{role:"employee"})}),ue.default.createElement(ke,{path:"admins/new",element:ue.default.createElement(jr,{role:"admin"})}),ue.default.createElement(ke,{path:"login",element:ue.default.createElement(Ho,null)}),ue.default.createElement(ke,{path:":id/dashboard",element:ue.default.createElement(er,null)}),ue.default.createElement(ke,{path:":id/employees",element:ue.default.createElement(er,null)}),ue.default.createElement(ke,{path:":id/clients",element:ue.default.createElement(er,null)}),ue.default.createElement(ke,{path:":id/edit",element:ue.default.createElement(er,null)}),ue.default.createElement(ke,{path:":id/settings",element:ue.default.createElement(er,null)}),ue.default.createElement(ke,{path:"*",element:ue.default.createElement(wu,null)})))}var _=J(Q());var Dm=document.createElement("style");Dm.textContent=`/* ============================================
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
`;document.head.appendChild(Dm);function Ou(){let e=He(),[t,n]=(0,_.useState)(""),[r,o]=(0,_.useState)(""),[a,i]=(0,_.useState)([]),[l,s]=(0,_.useState)([]),[u,p]=(0,_.useState)(!1),[d,m]=(0,_.useState)(!1),[y,g]=(0,_.useState)(""),[v,w]=(0,_.useState)(!1),f=(0,_.useRef)(null),c=Si.filter(P=>P.toLowerCase().includes(y.toLowerCase()));(0,_.useEffect)(()=>{document.title="\u0404 \u0432\u0456\u043A\u043E\u043D\u0446\u0435 \u2014 \u041B\u043E\u0433\u0456\u043D / \u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F"},[]),(0,_.useEffect)(()=>{let P=V=>{f.current&&!f.current.contains(V.target)&&m(!1),V.target.closest(".category-search-container")||w(!1)};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[]);let h=P=>{a.includes(P)||(i([...a,P]),g(""),w(!1))},k=P=>{i(a.filter(V=>V!==P))},b=async P=>{if(P&&P.preventDefault(),!(!t&&a.length===0&&!r)){p(!0),m(!0);try{let V=new URLSearchParams;t&&V.append("params[name]",t),r&&V.append("params[city]",r),a.forEach(G=>{V.append("params[categories][]",G)});let I=await fetch(`/api/companies?${V.toString()}`,{credentials:"include"});if(I.ok){let G=await I.json();s(Array.isArray(G)?G:[])}else s([])}catch(V){console.error("Search error:",V),s([])}finally{p(!1)}}},E=P=>{let V=P.evikonce_url;e(`/w/${V}`)},S=P=>{o(P),n(""),i([]),setTimeout(()=>{H({city:P})},0)},z=P=>{a.includes(P)||(i([P]),n(""),o(""),setTimeout(()=>{H({categories:[P]})},0))},H=async({city:P,categories:V})=>{p(!0),m(!0);try{let I=new URLSearchParams;P&&I.append("params[city]",P),V&&V.length>0&&V.forEach(re=>{I.append("params[categories][]",re)});let G=await fetch(`/api/companies?${I.toString()}`,{credentials:"include"});if(G.ok){let re=await G.json();s(Array.isArray(re)?re:[])}else s([])}catch(I){console.error("Search error:",I),s([])}finally{p(!1)}};return _.default.createElement("div",{className:"welcome-page"},_.default.createElement("section",{className:"hero-section"},_.default.createElement("div",{className:"hero-logo"},_.default.createElement("img",{src:"/images/evikonce-logo.png",alt:"\u0404 \u0412\u0456\u043A\u043E\u043D\u0446\u0435"}),_.default.createElement("div",{className:"hero-logo-name"},_.default.createElement("span",null,"\u0404")," \u0412\u0456\u043A\u043E\u043D\u0446\u0435")),_.default.createElement("div",{className:"hero-content"},_.default.createElement("h1",null,"\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438 \u0443 \u0432\u0430\u0448\u043E\u043C\u0443 \u043C\u0456\u0441\u0442\u0456"),_.default.createElement("p",null,"\u0421\u0430\u043B\u043E\u043D\u0438 \u043A\u0440\u0430\u0441\u0438, \u0421\u041F\u0410, \u0444\u0456\u0442\u043D\u0435\u0441, \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0430 \u0431\u0430\u0433\u0430\u0442\u043E \u0456\u043D\u0448\u043E\u0433\u043E"),_.default.createElement("form",{className:"search-form",onSubmit:b},_.default.createElement("div",{className:"search-inputs"},_.default.createElement("div",{className:"search-field"},_.default.createElement("input",{type:"text",placeholder:"\u041D\u0430\u0437\u0432\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0430\u0431\u043E \u043F\u043E\u0441\u043B\u0443\u0433\u0438",value:t,onChange:P=>n(P.target.value),className:"search-input"})),_.default.createElement("div",{className:"search-field category-search-container"},_.default.createElement("div",{className:"category-search-wrapper"},a.length>0&&_.default.createElement("div",{className:"selected-categories-tags-mini"},a.map(P=>_.default.createElement("span",{key:P,className:"category-tag-mini"},P,_.default.createElement("button",{type:"button",className:"category-tag-remove",onClick:V=>{V.stopPropagation(),k(P)},"aria-label":"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E"},"\u2715")))),_.default.createElement("input",{type:"text",className:"category-search-input",placeholder:a.length>0?"\u0414\u043E\u0434\u0430\u0442\u0438 \u0449\u0435...":"\u0428\u0443\u043A\u0430\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457...",value:y,onChange:P=>{g(P.target.value),w(!0)},onFocus:()=>w(!0)}),v&&y&&_.default.createElement("div",{className:"category-dropdown"},c.length>0?c.slice(0,50).map(P=>_.default.createElement("div",{key:P,className:`category-dropdown-item ${a.includes(P)?"selected":""}`,onClick:()=>h(P)},P,a.includes(P)&&_.default.createElement("span",{className:"checkmark"},"\u2713"))):_.default.createElement("div",{className:"category-dropdown-empty"},"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E")))),_.default.createElement("div",{className:"search-field"},_.default.createElement("select",{value:r,onChange:P=>o(P.target.value),className:"search-select"},_.default.createElement("option",{value:""},"\u0412\u0441\u0456 \u043C\u0456\u0441\u0442\u0430"),Ei.map(P=>_.default.createElement("option",{key:P,value:P},P)))),_.default.createElement("button",{type:"submit",className:"search-button"},"\u0428\u0443\u043A\u0430\u0442\u0438")),d&&_.default.createElement("div",{className:"search-results-dropdown",ref:f},u?_.default.createElement("div",{className:"results-loading"},_.default.createElement("div",{className:"spinner"}),_.default.createElement("p",null,"\u041F\u043E\u0448\u0443\u043A...")):l.length>0?_.default.createElement("div",{className:"results-list"},l.map(P=>_.default.createElement("div",{key:P.id,className:"result-item",onClick:()=>E(P)},_.default.createElement("div",{className:"result-info"},_.default.createElement("h4",null,P.name),_.default.createElement("p",{className:"result-category"},P.categories?.[0]?.name||P.description?.substring(0,60)),_.default.createElement("p",{className:"result-location"},"\u{1F4CD} ",P.address?.city,P.address?.street_line1&&`, ${P.address.street_line1}`)),P.rating&&_.default.createElement("div",{className:"result-rating"},"\u2B50 ",P.rating)))):_.default.createElement("div",{className:"results-empty"},_.default.createElement("p",null,"\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"),_.default.createElement("span",null,"\u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u043A\u0440\u0438\u0442\u0435\u0440\u0456\u0457 \u043F\u043E\u0448\u0443\u043A\u0443")))),_.default.createElement("div",{className:"register-company-cta"},_.default.createElement("p",{className:"register-company-text"},"\u0412\u0438 \u0432\u043B\u0430\u0441\u043D\u0438\u043A \u0431\u0456\u0437\u043D\u0435\u0441\u0443?"),_.default.createElement(Gn,{to:"/companies/welcome",className:"register-company-button"},_.default.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_.default.createElement("path",{d:"M10 4v12M4 10h12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})),"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E")))),_.default.createElement("section",{className:"quick-links-section"},_.default.createElement("h2",null,"\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456 \u043C\u0456\u0441\u0442\u0430"),_.default.createElement("div",{className:"quick-links"},_.default.createElement("button",{className:"quick-links-button",onClick:()=>S("\u041A\u0438\u0457\u0432")},"\u041A\u0438\u0457\u0432"),_.default.createElement("button",{className:"quick-links-button",onClick:()=>S("\u041B\u044C\u0432\u0456\u0432")},"\u041B\u044C\u0432\u0456\u0432"),_.default.createElement("button",{className:"quick-links-button",onClick:()=>S("\u041E\u0434\u0435\u0441\u0430")},"\u041E\u0434\u0435\u0441\u0430"),_.default.createElement("button",{className:"quick-links-button",onClick:()=>S("\u0425\u0430\u0440\u043A\u0456\u0432")},"\u0425\u0430\u0440\u043A\u0456\u0432"),_.default.createElement("button",{className:"quick-links-button",onClick:()=>S("\u0414\u043D\u0456\u043F\u0440\u043E")},"\u0414\u043D\u0456\u043F\u0440\u043E"),_.default.createElement("button",{className:"quick-links-button",onClick:()=>S("\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F")},"\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F"))),_.default.createElement("section",{className:"categories-section"},_.default.createElement("h2",null,"\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"),_.default.createElement("div",{className:"category-cards"},_.default.createElement("div",{className:"category-card",onClick:()=>z("\u041F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u041F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F"),_.default.createElement("p",null,"\u0421\u0442\u0440\u0438\u0436\u043A\u0438, \u0443\u043A\u043B\u0430\u0434\u043A\u0438, \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u041C\u0430\u043D\u0456\u043A\u044E\u0440")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u041C\u0430\u043D\u0456\u043A\u044E\u0440"),_.default.createElement("p",null,"\u041C\u0430\u043D\u0456\u043A\u044E\u0440, \u043F\u0435\u0434\u0438\u043A\u044E\u0440, \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u0421\u041F\u0410")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u0421\u041F\u0410"),_.default.createElement("p",null,"\u041C\u0430\u0441\u0430\u0436, \u0440\u0435\u043B\u0430\u043A\u0441, \u0434\u043E\u0433\u043B\u044F\u0434")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u0424\u0456\u0442\u043D\u0435\u0441")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u0424\u0456\u0442\u043D\u0435\u0441"),_.default.createElement("p",null,"\u0422\u0440\u0435\u043D\u0430\u0436\u0435\u0440\u043D\u0430 \u0437\u0430\u043B\u0430, \u0439\u043E\u0433\u0430, \u043F\u0456\u043B\u0430\u0442\u0435\u0441")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F"),_.default.createElement("p",null,"\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F, \u043F\u0440\u043E\u0442\u0435\u0437\u0443\u0432\u0430\u043D\u043D\u044F, \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u041A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u041A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F"),_.default.createElement("p",null,"\u0427\u0438\u0441\u0442\u043A\u0430, \u043F\u0456\u043B\u0456\u043D\u0433, \u0456\u043D'\u0454\u043A\u0446\u0456\u0457 \u043A\u0440\u0430\u0441\u0438")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u041C\u0430\u0441\u0430\u0436")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u041C\u0430\u0441\u0430\u0436"),_.default.createElement("p",null,"\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439, \u0442\u0430\u0439\u0441\u044C\u043A\u0438\u0439, \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0438\u0439")),_.default.createElement("div",{className:"category-card",onClick:()=>z("\u0422\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F")},_.default.createElement("div",{className:"category-icon"}),_.default.createElement("h3",null,"\u0422\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F"),_.default.createElement("p",null,"\u0422\u0430\u0442\u0443, \u043F\u0456\u0440\u0441\u0438\u043D\u0433, \u0445\u0443\u0434\u043E\u0436\u043D\u0454 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F")))))}var Tn=J(Q());var Ty=()=>{let{deleteToken:e}=en(),[t,n]=(0,Tn.useState)("loading");return(0,Tn.useEffect)(()=>{fetch(`/api/time_slots/del/${e}`).then(r=>{r.ok?n("success"):n("error")}).catch(()=>n("error"))},[e]),t==="loading"?Tn.default.createElement("p",null,"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."):t==="success"?Tn.default.createElement("p",null,"\u0417\u0430\u043F\u0438\u0441 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u2713"):Tn.default.createElement("p",null,"\u041F\u043E\u043C\u0438\u043B\u043A\u0430. \u0417\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u043D\u0430\u043F\u0440\u044F\u043C\u0443 \u0434\u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0456\u0308 \u0449\u043E\u0431 \u0432\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441.")},Tm=Ty;var zy=()=>ot.default.createElement("h2",null,"404 Not Found");function zm(){return ot.default.createElement(mu,null,ot.default.createElement(Mo,null,ot.default.createElement(ke,{path:"/",element:ot.default.createElement(Ou,null)}),ot.default.createElement(ke,{path:"/companies/*",element:ot.default.createElement(zu,null)}),ot.default.createElement(ke,{path:"/w/:companyName",element:ot.default.createElement(vu,null)}),ot.default.createElement(ke,{path:"*",element:ot.default.createElement(zy,null)}),ot.default.createElement(ke,{path:"/ww/:deleteToken",element:ot.default.createElement(Tm,null)})))}document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("App");e?(0,Fm.createRoot)(e).render(Om.default.createElement(zm,null)):console.error('React root element "#App" not found in DOM.')});
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

react-router/dist/development/chunk-EVOBXE3Y.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.14.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
