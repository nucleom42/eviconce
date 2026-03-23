var fm=Object.create;var Du=Object.defineProperty;var pm=Object.getOwnPropertyDescriptor;var mm=Object.getOwnPropertyNames;var hm=Object.getPrototypeOf,gm=Object.prototype.hasOwnProperty;var Pn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var vm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of mm(t))!gm.call(e,o)&&o!==n&&Du(e,o,{get:()=>t[o],enumerable:!(r=pm(t,o))||r.enumerable});return e};var G=(e,t,n)=>(n=e!=null?fm(hm(e)):{},vm(t||!e||!e.__esModule?Du(n,"default",{value:e,enumerable:!0}):n,e));var Hu=Pn(Z=>{"use strict";var jr=Symbol.for("react.element"),ym=Symbol.for("react.portal"),wm=Symbol.for("react.fragment"),xm=Symbol.for("react.strict_mode"),bm=Symbol.for("react.profiler"),km=Symbol.for("react.provider"),Sm=Symbol.for("react.context"),Em=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),Nm=Symbol.for("react.memo"),_m=Symbol.for("react.lazy"),Tu=Symbol.iterator;function Pm(e){return e===null||typeof e!="object"?null:(e=Tu&&e[Tu]||e["@@iterator"],typeof e=="function"?e:null)}var Ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fu=Object.assign,Mu={};function er(e,t,n){this.props=e,this.context=t,this.refs=Mu,this.updater=n||Ou}er.prototype.isReactComponent={};er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Iu(){}Iu.prototype=er.prototype;function _i(e,t,n){this.props=e,this.context=t,this.refs=Mu,this.updater=n||Ou}var Pi=_i.prototype=new Iu;Pi.constructor=_i;Fu(Pi,er.prototype);Pi.isPureReactComponent=!0;var Ru=Array.isArray,Au=Object.prototype.hasOwnProperty,Li={current:null},ju={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Au.call(t,r)&&!ju.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:jr,type:e,key:a,ref:i,props:o,_owner:Li.current}}function Lm(e,t){return{$$typeof:jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Di(e){return typeof e=="object"&&e!==null&&e.$$typeof===jr}function Dm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zu=/\/+/g;function Ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dm(""+e.key):t.toString(36)}function Yo(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case jr:case ym:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Ni(i,0):r,Ru(o)?(n="",e!=null&&(n=e.replace(zu,"$&/")+"/"),Yo(o,t,n,"",function(u){return u})):o!=null&&(Di(o)&&(o=Lm(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(zu,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Ru(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Ni(a,l);i+=Yo(a,t,n,s,o)}else if(s=Pm(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Ni(a,l++),i+=Yo(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Vo(e,t,n){if(e==null)return e;var r=[],o=0;return Yo(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Tm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Qo={transition:null},Rm={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Qo,ReactCurrentOwner:Li};function Uu(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Vo,forEach:function(e,t,n){Vo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vo(e,function(){t++}),t},toArray:function(e){return Vo(e,function(t){return t})||[]},only:function(e){if(!Di(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=er;Z.Fragment=wm;Z.Profiler=bm;Z.PureComponent=_i;Z.StrictMode=xm;Z.Suspense=Cm;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rm;Z.act=Uu;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fu({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Li.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Au.call(t,s)&&!ju.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:jr,type:e.type,key:o,ref:a,props:r,_owner:i}};Z.createContext=function(e){return e={$$typeof:Sm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:km,_context:e},e.Consumer=e};Z.createElement=$u;Z.createFactory=function(e){var t=$u.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:Em,render:e}};Z.isValidElement=Di;Z.lazy=function(e){return{$$typeof:_m,_payload:{_status:-1,_result:e},_init:Tm}};Z.memo=function(e,t){return{$$typeof:Nm,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=Qo.transition;Qo.transition={};try{e()}finally{Qo.transition=t}};Z.unstable_act=Uu;Z.useCallback=function(e,t){return je.current.useCallback(e,t)};Z.useContext=function(e){return je.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return je.current.useDeferredValue(e)};Z.useEffect=function(e,t){return je.current.useEffect(e,t)};Z.useId=function(){return je.current.useId()};Z.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return je.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};Z.useRef=function(e){return je.current.useRef(e)};Z.useState=function(e){return je.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return je.current.useTransition()};Z.version="18.3.1"});var Q=Pn((dy,Bu)=>{"use strict";Bu.exports=Hu()});var qu=Pn(ie=>{"use strict";function Oi(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Jo(o,t))e[r]=t,e[n]=o,n=r;else break e}}function ht(e){return e.length===0?null:e[0]}function Go(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var i=2*(r+1)-1,l=e[i],s=i+1,u=e[s];if(0>Jo(l,n))s<o&&0>Jo(u,l)?(e[r]=u,e[s]=n,r=s):(e[r]=l,e[i]=n,r=i);else if(s<o&&0>Jo(u,n))e[r]=u,e[s]=n,r=s;else break e}}return t}function Jo(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Wu=performance,ie.unstable_now=function(){return Wu.now()}):(Ti=Date,Vu=Ti.now(),ie.unstable_now=function(){return Ti.now()-Vu});var Wu,Ti,Vu,Nt=[],qt=[],zm=1,it=null,Re=3,Xo=!1,Ln=!1,Ur=!1,Ju=typeof setTimeout=="function"?setTimeout:null,Ku=typeof clearTimeout=="function"?clearTimeout:null,Yu=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Fi(e){for(var t=ht(qt);t!==null;){if(t.callback===null)Go(qt);else if(t.startTime<=e)Go(qt),t.sortIndex=t.expirationTime,Oi(Nt,t);else break;t=ht(qt)}}function Mi(e){if(Ur=!1,Fi(e),!Ln)if(ht(Nt)!==null)Ln=!0,Ai(Ii);else{var t=ht(qt);t!==null&&ji(Mi,t.startTime-e)}}function Ii(e,t){Ln=!1,Ur&&(Ur=!1,Ku(Hr),Hr=-1),Xo=!0;var n=Re;try{for(Fi(t),it=ht(Nt);it!==null&&(!(it.expirationTime>t)||e&&!Zu());){var r=it.callback;if(typeof r=="function"){it.callback=null,Re=it.priorityLevel;var o=r(it.expirationTime<=t);t=ie.unstable_now(),typeof o=="function"?it.callback=o:it===ht(Nt)&&Go(Nt),Fi(t)}else Go(Nt);it=ht(Nt)}if(it!==null)var a=!0;else{var i=ht(qt);i!==null&&ji(Mi,i.startTime-t),a=!1}return a}finally{it=null,Re=n,Xo=!1}}var Zo=!1,Ko=null,Hr=-1,Gu=5,Xu=-1;function Zu(){return!(ie.unstable_now()-Xu<Gu)}function Ri(){if(Ko!==null){var e=ie.unstable_now();Xu=e;var t=!0;try{t=Ko(!0,e)}finally{t?$r():(Zo=!1,Ko=null)}}else Zo=!1}var $r;typeof Yu=="function"?$r=function(){Yu(Ri)}:typeof MessageChannel<"u"?(zi=new MessageChannel,Qu=zi.port2,zi.port1.onmessage=Ri,$r=function(){Qu.postMessage(null)}):$r=function(){Ju(Ri,0)};var zi,Qu;function Ai(e){Ko=e,Zo||(Zo=!0,$r())}function ji(e,t){Hr=Ju(function(){e(ie.unstable_now())},t)}ie.unstable_IdlePriority=5;ie.unstable_ImmediatePriority=1;ie.unstable_LowPriority=4;ie.unstable_NormalPriority=3;ie.unstable_Profiling=null;ie.unstable_UserBlockingPriority=2;ie.unstable_cancelCallback=function(e){e.callback=null};ie.unstable_continueExecution=function(){Ln||Xo||(Ln=!0,Ai(Ii))};ie.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Gu=0<e?Math.floor(1e3/e):5};ie.unstable_getCurrentPriorityLevel=function(){return Re};ie.unstable_getFirstCallbackNode=function(){return ht(Nt)};ie.unstable_next=function(e){switch(Re){case 1:case 2:case 3:var t=3;break;default:t=Re}var n=Re;Re=t;try{return e()}finally{Re=n}};ie.unstable_pauseExecution=function(){};ie.unstable_requestPaint=function(){};ie.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Re;Re=e;try{return t()}finally{Re=n}};ie.unstable_scheduleCallback=function(e,t,n){var r=ie.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:zm++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Oi(qt,e),ht(Nt)===null&&e===ht(qt)&&(Ur?(Ku(Hr),Hr=-1):Ur=!0,ji(Mi,n-r))):(e.sortIndex=o,Oi(Nt,e),Ln||Xo||(Ln=!0,Ai(Ii))),e};ie.unstable_shouldYield=Zu;ie.unstable_wrapCallback=function(e){var t=Re;return function(){var n=Re;Re=t;try{return e.apply(this,arguments)}finally{Re=n}}}});var tc=Pn((py,ec)=>{"use strict";ec.exports=qu()});var ip=Pn(rt=>{"use strict";var Om=Q(),tt=tc();function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sd=new Set,co={};function Hn(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(co[e]=t,e=0;e<t.length;e++)sd.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=Object.prototype.hasOwnProperty,Fm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nc={},rc={};function Mm(e){return sl.call(rc,e)?!0:sl.call(nc,e)?!1:Fm.test(e)?rc[e]=!0:(nc[e]=!0,!1)}function Im(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Am(e,t,n,r){if(t===null||typeof t>"u"||Im(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var es=/[\-:]([a-z])/g;function ts(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(es,ts);Te[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(es,ts);Te[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(es,ts);Te[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function ns(e,t,n,r){var o=Te.hasOwnProperty(t)?Te[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Am(t,n,o,r)&&(n=null),r||o===null?Mm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jt=Om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),rr=Symbol.for("react.portal"),or=Symbol.for("react.fragment"),rs=Symbol.for("react.strict_mode"),ul=Symbol.for("react.profiler"),ud=Symbol.for("react.provider"),cd=Symbol.for("react.context"),os=Symbol.for("react.forward_ref"),cl=Symbol.for("react.suspense"),dl=Symbol.for("react.suspense_list"),as=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),dd=Symbol.for("react.offscreen"),oc=Symbol.iterator;function Br(e){return e===null||typeof e!="object"?null:(e=oc&&e[oc]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,$i;function Xr(e){if($i===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$i=t&&t[1]||""}return`
`+$i+e}var Ui=!1;function Hi(e,t){if(!e||Ui)return"";Ui=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==a[l]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{Ui=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xr(e):""}function jm(e){switch(e.tag){case 5:return Xr(e.type);case 16:return Xr("Lazy");case 13:return Xr("Suspense");case 19:return Xr("SuspenseList");case 0:case 2:case 15:return e=Hi(e.type,!1),e;case 11:return e=Hi(e.type.render,!1),e;case 1:return e=Hi(e.type,!0),e;default:return""}}function fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case or:return"Fragment";case rr:return"Portal";case ul:return"Profiler";case rs:return"StrictMode";case cl:return"Suspense";case dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cd:return(e.displayName||"Context")+".Consumer";case ud:return(e._context.displayName||"Context")+".Provider";case os:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case as:return t=e.displayName||null,t!==null?t:fl(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return fl(e(t))}catch{}}return null}function $m(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fl(t);case 8:return t===rs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Um(e){var t=fd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ea(e){e._valueTracker||(e._valueTracker=Um(e))}function pd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pl(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ac(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function md(e,t){t=t.checked,t!=null&&ns(e,"checked",t,!1)}function ml(e,t){md(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&hl(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hl(e,t,n){(t!=="number"||Pa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function gl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(Zr(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function hd(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ta,vd=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ta.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hm=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(e){Hm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),to[t]=to[e]})});function yd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||to.hasOwnProperty(e)&&to[e]?(""+t).trim():t+"px"}function wd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=yd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Bm=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yl(e,t){if(t){if(Bm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,gr=null,vr=null;function uc(e){if(e=Do(e)){if(typeof bl!="function")throw Error(L(280));var t=e.stateNode;t&&(t=ni(t),bl(e.stateNode,e.type,t))}}function xd(e){gr?vr?vr.push(e):vr=[e]:gr=e}function bd(){if(gr){var e=gr,t=vr;if(vr=gr=null,uc(e),t)for(e=0;e<t.length;e++)uc(t[e])}}function kd(e,t){return e(t)}function Sd(){}var Bi=!1;function Ed(e,t,n){if(Bi)return e(t,n);Bi=!0;try{return kd(e,t,n)}finally{Bi=!1,(gr!==null||vr!==null)&&(Sd(),bd())}}function po(e,t){var n=e.stateNode;if(n===null)return null;var r=ni(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var kl=!1;if(Wt)try{tr={},Object.defineProperty(tr,"passive",{get:function(){kl=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{kl=!1}var tr;function Wm(e,t,n,r,o,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var no=!1,La=null,Da=!1,Sl=null,Vm={onError:function(e){no=!0,La=e}};function Ym(e,t,n,r,o,a,i,l,s){no=!1,La=null,Wm.apply(Vm,arguments)}function Qm(e,t,n,r,o,a,i,l,s){if(Ym.apply(this,arguments),no){if(no){var u=La;no=!1,La=null}else throw Error(L(198));Da||(Da=!0,Sl=u)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cc(e){if(Bn(e)!==e)throw Error(L(188))}function Jm(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return cc(o),e;if(a===r)return cc(o),t;a=a.sibling}throw Error(L(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Nd(e){return e=Jm(e),e!==null?_d(e):null}function _d(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_d(e);if(t!==null)return t;e=e.sibling}return null}var Pd=tt.unstable_scheduleCallback,dc=tt.unstable_cancelCallback,Km=tt.unstable_shouldYield,Gm=tt.unstable_requestPaint,xe=tt.unstable_now,Xm=tt.unstable_getCurrentPriorityLevel,ls=tt.unstable_ImmediatePriority,Ld=tt.unstable_UserBlockingPriority,Ta=tt.unstable_NormalPriority,Zm=tt.unstable_LowPriority,Dd=tt.unstable_IdlePriority,Za=null,Dt=null;function qm(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Za,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:nh,eh=Math.log,th=Math.LN2;function nh(e){return e>>>=0,e===0?32:31-(eh(e)/th|0)|0}var na=64,ra=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ra(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=qr(l):(a&=i,a!==0&&(r=qr(a)))}else i=n&~o,i!==0?r=qr(i):a!==0&&(r=qr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function rh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-xt(a),l=1<<i,s=o[i];s===-1?((l&n)===0||(l&r)!==0)&&(o[i]=rh(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Td(){var e=na;return na<<=1,(na&4194240)===0&&(na=64),e}function Wi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function ah(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function ss(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ae=0;function Rd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var zd,us,Od,Fd,Md,Cl=!1,oa=[],sn=null,un=null,cn=null,mo=new Map,ho=new Map,rn=[],ih="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fc(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(t.pointerId)}}function Wr(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Do(t),t!==null&&us(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function lh(e,t,n,r,o){switch(t){case"focusin":return sn=Wr(sn,e,t,n,r,o),!0;case"dragenter":return un=Wr(un,e,t,n,r,o),!0;case"mouseover":return cn=Wr(cn,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return mo.set(a,Wr(mo.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,ho.set(a,Wr(ho.get(a)||null,e,t,n,r,o)),!0}return!1}function Id(e){var t=Rn(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=Cd(n),t!==null){e.blockedOn=t,Md(e.priority,function(){Od(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ya(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xl=r,n.target.dispatchEvent(r),xl=null}else return t=Do(n),t!==null&&us(t),e.blockedOn=n,!1;t.shift()}return!0}function pc(e,t,n){ya(e)&&n.delete(t)}function sh(){Cl=!1,sn!==null&&ya(sn)&&(sn=null),un!==null&&ya(un)&&(un=null),cn!==null&&ya(cn)&&(cn=null),mo.forEach(pc),ho.forEach(pc)}function Vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Cl||(Cl=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,sh)))}function go(e){function t(o){return Vr(o,e)}if(0<oa.length){Vr(oa[0],e);for(var n=1;n<oa.length;n++){var r=oa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Vr(sn,e),un!==null&&Vr(un,e),cn!==null&&Vr(cn,e),mo.forEach(t),ho.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Id(n),n.blockedOn===null&&rn.shift()}var yr=Jt.ReactCurrentBatchConfig,za=!0;function uh(e,t,n,r){var o=ae,a=yr.transition;yr.transition=null;try{ae=1,cs(e,t,n,r)}finally{ae=o,yr.transition=a}}function ch(e,t,n,r){var o=ae,a=yr.transition;yr.transition=null;try{ae=4,cs(e,t,n,r)}finally{ae=o,yr.transition=a}}function cs(e,t,n,r){if(za){var o=Nl(e,t,n,r);if(o===null)Xi(e,t,r,Oa,n),fc(e,r);else if(lh(o,e,t,n,r))r.stopPropagation();else if(fc(e,r),t&4&&-1<ih.indexOf(e)){for(;o!==null;){var a=Do(o);if(a!==null&&zd(a),a=Nl(e,t,n,r),a===null&&Xi(e,t,r,Oa,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Xi(e,t,r,null,n)}}var Oa=null;function Nl(e,t,n,r){if(Oa=null,e=is(r),e=Rn(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oa=e,null}function Ad(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xm()){case ls:return 1;case Ld:return 4;case Ta:case Zm:return 16;case Dd:return 536870912;default:return 16}default:return 16}}var an=null,ds=null,wa=null;function jd(){if(wa)return wa;var e,t=ds,n=t.length,r,o="value"in an?an.value:an.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return wa=o.slice(e,1<r?1-r:void 0)}function xa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function aa(){return!0}function mc(){return!1}function nt(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?aa:mc,this.isPropagationStopped=mc,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),t}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fs=nt(Pr),Lo=ve({},Pr,{view:0,detail:0}),dh=nt(Lo),Vi,Yi,Yr,qa=ve({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(Vi=e.screenX-Yr.screenX,Yi=e.screenY-Yr.screenY):Yi=Vi=0,Yr=e),Vi)},movementY:function(e){return"movementY"in e?e.movementY:Yi}}),hc=nt(qa),fh=ve({},qa,{dataTransfer:0}),ph=nt(fh),mh=ve({},Lo,{relatedTarget:0}),Qi=nt(mh),hh=ve({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),gh=nt(hh),vh=ve({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yh=nt(vh),wh=ve({},Pr,{data:0}),gc=nt(wh),xh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kh[e])?!!t[e]:!1}function ps(){return Sh}var Eh=ve({},Lo,{key:function(e){if(e.key){var t=xh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(e){return e.type==="keypress"?xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ch=nt(Eh),Nh=ve({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vc=nt(Nh),_h=ve({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),Ph=nt(_h),Lh=ve({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dh=nt(Lh),Th=ve({},qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rh=nt(Th),zh=[9,13,27,32],ms=Wt&&"CompositionEvent"in window,ro=null;Wt&&"documentMode"in document&&(ro=document.documentMode);var Oh=Wt&&"TextEvent"in window&&!ro,$d=Wt&&(!ms||ro&&8<ro&&11>=ro),yc=" ",wc=!1;function Ud(e,t){switch(e){case"keyup":return zh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function Fh(e,t){switch(e){case"compositionend":return Hd(t);case"keypress":return t.which!==32?null:(wc=!0,yc);case"textInput":return e=t.data,e===yc&&wc?null:e;default:return null}}function Mh(e,t){if(ar)return e==="compositionend"||!ms&&Ud(e,t)?(e=jd(),wa=ds=an=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $d&&t.locale!=="ko"?null:t.data;default:return null}}var Ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ih[e.type]:t==="textarea"}function Bd(e,t,n,r){xd(r),t=Fa(t,"onChange"),0<t.length&&(n=new fs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var oo=null,vo=null;function Ah(e){ef(e,0)}function ei(e){var t=sr(e);if(pd(t))return e}function jh(e,t){if(e==="change")return t}var Wd=!1;Wt&&(Wt?(la="oninput"in document,la||(Ji=document.createElement("div"),Ji.setAttribute("oninput","return;"),la=typeof Ji.oninput=="function"),ia=la):ia=!1,Wd=ia&&(!document.documentMode||9<document.documentMode));var ia,la,Ji;function bc(){oo&&(oo.detachEvent("onpropertychange",Vd),vo=oo=null)}function Vd(e){if(e.propertyName==="value"&&ei(vo)){var t=[];Bd(t,vo,e,is(e)),Ed(Ah,t)}}function $h(e,t,n){e==="focusin"?(bc(),oo=t,vo=n,oo.attachEvent("onpropertychange",Vd)):e==="focusout"&&bc()}function Uh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ei(vo)}function Hh(e,t){if(e==="click")return ei(t)}function Bh(e,t){if(e==="input"||e==="change")return ei(t)}function Wh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Wh;function yo(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!sl.call(t,o)||!kt(e[o],t[o]))return!1}return!0}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sc(e,t){var n=kc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kc(n)}}function Yd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qd(){for(var e=window,t=Pa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pa(e.document)}return t}function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vh(e){var t=Qd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yd(n.ownerDocument.documentElement,n)){if(r!==null&&hs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Sc(n,a);var i=Sc(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yh=Wt&&"documentMode"in document&&11>=document.documentMode,ir=null,_l=null,ao=null,Pl=!1;function Ec(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pl||ir==null||ir!==Pa(r)||(r=ir,"selectionStart"in r&&hs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&yo(ao,r)||(ao=r,r=Fa(_l,"onSelect"),0<r.length&&(t=new fs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ir)))}function sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lr={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},Ki={},Jd={};Wt&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function ti(e){if(Ki[e])return Ki[e];if(!lr[e])return e;var t=lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jd)return Ki[e]=t[n];return e}var Kd=ti("animationend"),Gd=ti("animationiteration"),Xd=ti("animationstart"),Zd=ti("transitionend"),qd=new Map,Cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){qd.set(e,t),Hn(t,[e])}for(ua=0;ua<Cc.length;ua++)ca=Cc[ua],Nc=ca.toLowerCase(),_c=ca[0].toUpperCase()+ca.slice(1),yn(Nc,"on"+_c);var ca,Nc,_c,ua;yn(Kd,"onAnimationEnd");yn(Gd,"onAnimationIteration");yn(Xd,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Zd,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qh=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Pc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qm(r,t,void 0,e),e.currentTarget=null}function ef(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Pc(o,l,u),a=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Pc(o,l,u),a=s}}}if(Da)throw e=Sl,Da=!1,Sl=null,e}function ue(e,t){var n=t[zl];n===void 0&&(n=t[zl]=new Set);var r=e+"__bubble";n.has(r)||(tf(t,e,2,!1),n.add(r))}function Gi(e,t,n){var r=0;t&&(r|=4),tf(n,e,r,t)}var da="_reactListening"+Math.random().toString(36).slice(2);function wo(e){if(!e[da]){e[da]=!0,sd.forEach(function(n){n!=="selectionchange"&&(Qh.has(n)||Gi(n,!1,e),Gi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[da]||(t[da]=!0,Gi("selectionchange",!1,t))}}function tf(e,t,n,r){switch(Ad(t)){case 1:var o=uh;break;case 4:o=ch;break;default:o=cs}n=o.bind(null,t,n,e),o=void 0,!kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Xi(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;l!==null;){if(i=Rn(l),i===null)return;if(s=i.tag,s===5||s===6){r=a=i;continue e}l=l.parentNode}}r=r.return}Ed(function(){var u=a,p=is(n),d=[];e:{var m=qd.get(e);if(m!==void 0){var w=fs,v=e;switch(e){case"keypress":if(xa(n)===0)break e;case"keydown":case"keyup":w=Ch;break;case"focusin":v="focus",w=Qi;break;case"focusout":v="blur",w=Qi;break;case"beforeblur":case"afterblur":w=Qi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ph;break;case Kd:case Gd:case Xd:w=gh;break;case Zd:w=Dh;break;case"scroll":w=dh;break;case"wheel":w=Rh;break;case"copy":case"cut":case"paste":w=yh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=vc}var g=(t&4)!==0,x=!g&&e==="scroll",f=g?m!==null?m+"Capture":null:m;g=[];for(var c=u,h;c!==null;){h=c;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,f!==null&&(b=po(c,f),b!=null&&g.push(xo(c,b,h)))),x)break;c=c.return}0<g.length&&(m=new w(m,v,null,n,p),d.push({event:m,listeners:g}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==xl&&(v=n.relatedTarget||n.fromElement)&&(Rn(v)||v[Vt]))break e;if((w||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=u,v=v?Rn(v):null,v!==null&&(x=Bn(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=u),w!==v)){if(g=hc,b="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=vc,b="onPointerLeave",f="onPointerEnter",c="pointer"),x=w==null?m:sr(w),h=v==null?m:sr(v),m=new g(b,c+"leave",w,n,p),m.target=x,m.relatedTarget=h,b=null,Rn(p)===u&&(g=new g(f,c+"enter",v,n,p),g.target=h,g.relatedTarget=x,b=g),x=b,w&&v)t:{for(g=w,f=v,c=0,h=g;h;h=nr(h))c++;for(h=0,b=f;b;b=nr(b))h++;for(;0<c-h;)g=nr(g),c--;for(;0<h-c;)f=nr(f),h--;for(;c--;){if(g===f||f!==null&&g===f.alternate)break t;g=nr(g),f=nr(f)}g=null}else g=null;w!==null&&Lc(d,m,w,g,!1),v!==null&&x!==null&&Lc(d,x,v,g,!0)}}e:{if(m=u?sr(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var y=jh;else if(xc(m))if(Wd)y=Bh;else{y=Uh;var C=$h}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(y=Hh);if(y&&(y=y(e,u))){Bd(d,y,n,p);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&hl(m,"number",m.value)}switch(C=u?sr(u):window,e){case"focusin":(xc(C)||C.contentEditable==="true")&&(ir=C,_l=u,ao=null);break;case"focusout":ao=_l=ir=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,Ec(d,n,p);break;case"selectionchange":if(Yh)break;case"keydown":case"keyup":Ec(d,n,p)}var k;if(ms)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ar?Ud(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&($d&&n.locale!=="ko"&&(ar||N!=="onCompositionStart"?N==="onCompositionEnd"&&ar&&(k=jd()):(an=p,ds="value"in an?an.value:an.textContent,ar=!0)),C=Fa(u,N),0<C.length&&(N=new gc(N,e,null,n,p),d.push({event:N,listeners:C}),k?N.data=k:(k=Hd(n),k!==null&&(N.data=k)))),(k=Oh?Fh(e,n):Mh(e,n))&&(u=Fa(u,"onBeforeInput"),0<u.length&&(p=new gc("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:u}),p.data=k))}ef(d,t)})}function xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=po(e,n),a!=null&&r.unshift(xo(e,a,o)),a=po(e,t),a!=null&&r.push(xo(e,a,o))),e=e.return}return r}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lc(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=po(n,a),s!=null&&i.unshift(xo(n,s,l))):o||(s=po(n,a),s!=null&&i.push(xo(n,s,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Jh=/\r\n?/g,Kh=/\u0000|\uFFFD/g;function Dc(e){return(typeof e=="string"?e:""+e).replace(Jh,`
`).replace(Kh,"")}function fa(e,t,n){if(t=Dc(t),Dc(e)!==t&&n)throw Error(L(425))}function Ma(){}var Ll=null,Dl=null;function Tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,Gh=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,Xh=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(e){return Tc.resolve(null).then(e).catch(Zh)}:Rl;function Zh(e){setTimeout(function(){throw e})}function Zi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),go(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);go(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Lr,bo="__reactProps$"+Lr,Vt="__reactContainer$"+Lr,zl="__reactEvents$"+Lr,qh="__reactListeners$"+Lr,eg="__reactHandles$"+Lr;function Rn(e){var t=e[Lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vt]||n[Lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rc(e);e!==null;){if(n=e[Lt])return n;e=Rc(e)}return t}e=n,n=e.parentNode}return null}function Do(e){return e=e[Lt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function ni(e){return e[bo]||null}var Ol=[],ur=-1;function wn(e){return{current:e}}function ce(e){0>ur||(e.current=Ol[ur],Ol[ur]=null,ur--)}function le(e,t){ur++,Ol[ur]=e.current,e.current=t}var vn={},Me=wn(vn),Je=wn(!1),In=vn;function kr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ke(e){return e=e.childContextTypes,e!=null}function Ia(){ce(Je),ce(Me)}function zc(e,t,n){if(Me.current!==vn)throw Error(L(168));le(Me,t),le(Je,n)}function nf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(L(108,$m(e)||"Unknown",o));return ve({},n,r)}function Aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,In=Me.current,le(Me,e),le(Je,Je.current),!0}function Oc(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=nf(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,ce(Je),ce(Me),le(Me,e)):ce(Je),le(Je,n)}var $t=null,ri=!1,qi=!1;function rf(e){$t===null?$t=[e]:$t.push(e)}function tg(e){ri=!0,rf(e)}function xn(){if(!qi&&$t!==null){qi=!0;var e=0,t=ae;try{var n=$t;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$t=null,ri=!1}catch(o){throw $t!==null&&($t=$t.slice(e+1)),Pd(ls,xn),o}finally{ae=t,qi=!1}}return null}var cr=[],dr=0,ja=null,$a=0,lt=[],st=0,An=null,Ut=1,Ht="";function Dn(e,t){cr[dr++]=$a,cr[dr++]=ja,ja=e,$a=t}function of(e,t,n){lt[st++]=Ut,lt[st++]=Ht,lt[st++]=An,An=e;var r=Ut;e=Ht;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var a=32-xt(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Ut=1<<32-xt(t)+o|n<<o|r,Ht=a+e}else Ut=1<<a|n<<o|r,Ht=e}function gs(e){e.return!==null&&(Dn(e,1),of(e,1,0))}function vs(e){for(;e===ja;)ja=cr[--dr],cr[dr]=null,$a=cr[--dr],cr[dr]=null;for(;e===An;)An=lt[--st],lt[st]=null,Ht=lt[--st],lt[st]=null,Ut=lt[--st],lt[st]=null}var et=null,qe=null,pe=!1,wt=null;function af(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,qe=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:Ut,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,qe=null,!0):!1;default:return!1}}function Fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(pe){var t=qe;if(t){var n=t;if(!Fc(e,t)){if(Fl(e))throw Error(L(418));t=dn(n.nextSibling);var r=et;t&&Fc(e,t)?af(r,n):(e.flags=e.flags&-4097|2,pe=!1,et=e)}}else{if(Fl(e))throw Error(L(418));e.flags=e.flags&-4097|2,pe=!1,et=e}}}function Mc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function pa(e){if(e!==et)return!1;if(!pe)return Mc(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tl(e.type,e.memoizedProps)),t&&(t=qe)){if(Fl(e))throw lf(),Error(L(418));for(;t;)af(e,t),t=dn(t.nextSibling)}if(Mc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=et?dn(e.stateNode.nextSibling):null;return!0}function lf(){for(var e=qe;e;)e=dn(e.nextSibling)}function Sr(){qe=et=null,pe=!1}function ys(e){wt===null?wt=[e]:wt.push(e)}var ng=Jt.ReactCurrentBatchConfig;function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var l=o.refs;i===null?delete l[a]:l[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function ma(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ic(e){var t=e._init;return t(e._payload)}function sf(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=hn(f,c),f.index=0,f.sibling=null,f}function a(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,c,h,b){return c===null||c.tag!==6?(c=il(h,f.mode,b),c.return=f,c):(c=o(c,h),c.return=f,c)}function s(f,c,h,b){var y=h.type;return y===or?p(f,c,h.props.children,b,h.key):c!==null&&(c.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===tn&&Ic(y)===c.type)?(b=o(c,h.props),b.ref=Qr(f,c,h),b.return=f,b):(b=_a(h.type,h.key,h.props,null,f.mode,b),b.ref=Qr(f,c,h),b.return=f,b)}function u(f,c,h,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=ll(h,f.mode,b),c.return=f,c):(c=o(c,h.children||[]),c.return=f,c)}function p(f,c,h,b,y){return c===null||c.tag!==7?(c=Mn(h,f.mode,b,y),c.return=f,c):(c=o(c,h),c.return=f,c)}function d(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=il(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case qo:return h=_a(c.type,c.key,c.props,null,f.mode,h),h.ref=Qr(f,null,c),h.return=f,h;case rr:return c=ll(c,f.mode,h),c.return=f,c;case tn:var b=c._init;return d(f,b(c._payload),h)}if(Zr(c)||Br(c))return c=Mn(c,f.mode,h,null),c.return=f,c;ma(f,c)}return null}function m(f,c,h,b){var y=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return y!==null?null:l(f,c,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case qo:return h.key===y?s(f,c,h,b):null;case rr:return h.key===y?u(f,c,h,b):null;case tn:return y=h._init,m(f,c,y(h._payload),b)}if(Zr(h)||Br(h))return y!==null?null:p(f,c,h,b,null);ma(f,h)}return null}function w(f,c,h,b,y){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(h)||null,l(c,f,""+b,y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case qo:return f=f.get(b.key===null?h:b.key)||null,s(c,f,b,y);case rr:return f=f.get(b.key===null?h:b.key)||null,u(c,f,b,y);case tn:var C=b._init;return w(f,c,h,C(b._payload),y)}if(Zr(b)||Br(b))return f=f.get(h)||null,p(c,f,b,y,null);ma(c,b)}return null}function v(f,c,h,b){for(var y=null,C=null,k=c,N=c=0,A=null;k!==null&&N<h.length;N++){k.index>N?(A=k,k=null):A=k.sibling;var E=m(f,k,h[N],b);if(E===null){k===null&&(k=A);break}e&&k&&E.alternate===null&&t(f,k),c=a(E,c,N),C===null?y=E:C.sibling=E,C=E,k=A}if(N===h.length)return n(f,k),pe&&Dn(f,N),y;if(k===null){for(;N<h.length;N++)k=d(f,h[N],b),k!==null&&(c=a(k,c,N),C===null?y=k:C.sibling=k,C=k);return pe&&Dn(f,N),y}for(k=r(f,k);N<h.length;N++)A=w(k,f,N,h[N],b),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?N:A.key),c=a(A,c,N),C===null?y=A:C.sibling=A,C=A);return e&&k.forEach(function(Y){return t(f,Y)}),pe&&Dn(f,N),y}function g(f,c,h,b){var y=Br(h);if(typeof y!="function")throw Error(L(150));if(h=y.call(h),h==null)throw Error(L(151));for(var C=y=null,k=c,N=c=0,A=null,E=h.next();k!==null&&!E.done;N++,E=h.next()){k.index>N?(A=k,k=null):A=k.sibling;var Y=m(f,k,E.value,b);if(Y===null){k===null&&(k=A);break}e&&k&&Y.alternate===null&&t(f,k),c=a(Y,c,N),C===null?y=Y:C.sibling=Y,C=Y,k=A}if(E.done)return n(f,k),pe&&Dn(f,N),y;if(k===null){for(;!E.done;N++,E=h.next())E=d(f,E.value,b),E!==null&&(c=a(E,c,N),C===null?y=E:C.sibling=E,C=E);return pe&&Dn(f,N),y}for(k=r(f,k);!E.done;N++,E=h.next())E=w(k,f,N,E.value,b),E!==null&&(e&&E.alternate!==null&&k.delete(E.key===null?N:E.key),c=a(E,c,N),C===null?y=E:C.sibling=E,C=E);return e&&k.forEach(function(M){return t(f,M)}),pe&&Dn(f,N),y}function x(f,c,h,b){if(typeof h=="object"&&h!==null&&h.type===or&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case qo:e:{for(var y=h.key,C=c;C!==null;){if(C.key===y){if(y=h.type,y===or){if(C.tag===7){n(f,C.sibling),c=o(C,h.props.children),c.return=f,f=c;break e}}else if(C.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===tn&&Ic(y)===C.type){n(f,C.sibling),c=o(C,h.props),c.ref=Qr(f,C,h),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}h.type===or?(c=Mn(h.props.children,f.mode,b,h.key),c.return=f,f=c):(b=_a(h.type,h.key,h.props,null,f.mode,b),b.ref=Qr(f,c,h),b.return=f,f=b)}return i(f);case rr:e:{for(C=h.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=o(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ll(h,f.mode,b),c.return=f,f=c}return i(f);case tn:return C=h._init,x(f,c,C(h._payload),b)}if(Zr(h))return v(f,c,h,b);if(Br(h))return g(f,c,h,b);ma(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,h),c.return=f,f=c):(n(f,c),c=il(h,f.mode,b),c.return=f,f=c),i(f)):n(f,c)}return x}var Er=sf(!0),uf=sf(!1),Ua=wn(null),Ha=null,fr=null,ws=null;function xs(){ws=fr=Ha=null}function bs(e){var t=Ua.current;ce(Ua),e._currentValue=t}function Il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wr(e,t){Ha=e,ws=fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Qe=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(ws!==e)if(e={context:e,memoizedValue:t,next:null},fr===null){if(Ha===null)throw Error(L(308));fr=e,Ha.dependencies={lanes:0,firstContext:e}}else fr=fr.next=e;return t}var zn=null;function ks(e){zn===null?zn=[e]:zn.push(e)}function cf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ks(t)):(n.next=o.next,o.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function Ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function df(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ne&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Yt(e,n)}return o=r.interleaved,o===null?(t.next=t,ks(r)):(t.next=o.next,o.next=t),r.interleaved=t,Yt(e,n)}function ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}function Ac(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ba(e,t,n,r){var o=e.updateQueue;nn=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?a=u:i.next=u,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==i&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=s))}if(a!==null){var d=o.baseState;i=0,p=u=s=null,l=a;do{var m=l.lane,w=l.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,g=l;switch(m=t,w=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){d=v.call(w,d,m);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,m=typeof v=="function"?v.call(w,d,m):v,m==null)break e;d=ve({},d,m);break e;case 2:nn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=w,s=d):p=p.next=w,i|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);$n|=i,e.lanes=i,e.memoizedState=d}}function jc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(L(191,o));o.call(r)}}}var To={},Tt=wn(To),ko=wn(To),So=wn(To);function On(e){if(e===To)throw Error(L(174));return e}function Es(e,t){switch(le(So,t),le(ko,e),le(Tt,To),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vl(t,e)}ce(Tt),le(Tt,t)}function Cr(){ce(Tt),ce(ko),ce(So)}function ff(e){On(So.current);var t=On(Tt.current),n=vl(t,e.type);t!==n&&(le(ko,e),le(Tt,n))}function Cs(e){ko.current===e&&(ce(Tt),ce(ko))}var he=wn(0);function Wa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function Ns(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var ka=Jt.ReactCurrentDispatcher,tl=Jt.ReactCurrentBatchConfig,jn=0,ge=null,Ee=null,Ne=null,Va=!1,io=!1,Eo=0,rg=0;function ze(){throw Error(L(321))}function _s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function Ps(e,t,n,r,o,a){if(jn=a,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ka.current=e===null||e.memoizedState===null?lg:sg,e=n(r,o),io){a=0;do{if(io=!1,Eo=0,25<=a)throw Error(L(301));a+=1,Ne=Ee=null,t.updateQueue=null,ka.current=ug,e=n(r,o)}while(io)}if(ka.current=Ya,t=Ee!==null&&Ee.next!==null,jn=0,Ne=Ee=ge=null,Va=!1,t)throw Error(L(300));return e}function Ls(){var e=Eo!==0;return Eo=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ge.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function ft(){if(Ee===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Ne===null?ge.memoizedState:Ne.next;if(t!==null)Ne=t,Ee=e;else{if(e===null)throw Error(L(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ne===null?ge.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Co(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=ft(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=Ee,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=i=null,s=null,u=a;do{var p=u.lane;if((jn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,i=r):s=s.next=d,ge.lanes|=p,$n|=p}u=u.next}while(u!==null&&u!==a);s===null?i=r:s.next=l,kt(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,ge.lanes|=a,$n|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=ft(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);kt(a,t.memoizedState)||(Qe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function pf(){}function mf(e,t){var n=ge,r=ft(),o=t(),a=!kt(r.memoizedState,o);if(a&&(r.memoizedState=o,Qe=!0),r=r.queue,Ds(vf.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,No(9,gf.bind(null,n,r,o,t),void 0,null),_e===null)throw Error(L(349));(jn&30)!==0||hf(n,t,o)}return o}function hf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gf(e,t,n,r){t.value=n,t.getSnapshot=r,yf(t)&&wf(e)}function vf(e,t,n){return n(function(){yf(t)&&wf(e)})}function yf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function wf(e){var t=Yt(e,1);t!==null&&bt(t,e,1,-1)}function $c(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:e},t.queue=e,e=e.dispatch=ig.bind(null,ge,e),[t.memoizedState,e]}function No(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xf(){return ft().memoizedState}function Sa(e,t,n,r){var o=Pt();ge.flags|=e,o.memoizedState=No(1|t,n,void 0,r===void 0?null:r)}function oi(e,t,n,r){var o=ft();r=r===void 0?null:r;var a=void 0;if(Ee!==null){var i=Ee.memoizedState;if(a=i.destroy,r!==null&&_s(r,i.deps)){o.memoizedState=No(t,n,a,r);return}}ge.flags|=e,o.memoizedState=No(1|t,n,a,r)}function Uc(e,t){return Sa(8390656,8,e,t)}function Ds(e,t){return oi(2048,8,e,t)}function bf(e,t){return oi(4,2,e,t)}function kf(e,t){return oi(4,4,e,t)}function Sf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ef(e,t,n){return n=n!=null?n.concat([e]):null,oi(4,4,Sf.bind(null,t,e),n)}function Ts(){}function Cf(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_s(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Nf(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_s(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _f(e,t,n){return(jn&21)===0?(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n):(kt(n,t)||(n=Td(),ge.lanes|=n,$n|=n,e.baseState=!0),t)}function og(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{ae=n,tl.transition=r}}function Pf(){return ft().memoizedState}function ag(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lf(e))Df(t,n);else if(n=cf(e,t,n,r),n!==null){var o=Ue();bt(n,e,r,o),Tf(n,t,r)}}function ig(e,t,n){var r=mn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lf(e))Df(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,kt(l,i)){var s=t.interleaved;s===null?(o.next=o,ks(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}n=cf(e,t,o,r),n!==null&&(o=Ue(),bt(n,e,r,o),Tf(n,t,r))}}function Lf(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Df(e,t){io=Va=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tf(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}var Ya={readContext:dt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},lg={readContext:dt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Uc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Sa(4194308,4,Sf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Sa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Sa(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ag.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:$c,useDebugValue:Ts,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=$c(!1),t=e[0];return e=og.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,o=Pt();if(pe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),_e===null)throw Error(L(349));(jn&30)!==0||hf(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Uc(vf.bind(null,r,a,e),[e]),r.flags|=2048,No(9,gf.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Pt(),t=_e.identifierPrefix;if(pe){var n=Ht,r=Ut;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Eo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sg={readContext:dt,useCallback:Cf,useContext:dt,useEffect:Ds,useImperativeHandle:Ef,useInsertionEffect:bf,useLayoutEffect:kf,useMemo:Nf,useReducer:nl,useRef:xf,useState:function(){return nl(Co)},useDebugValue:Ts,useDeferredValue:function(e){var t=ft();return _f(t,Ee.memoizedState,e)},useTransition:function(){var e=nl(Co)[0],t=ft().memoizedState;return[e,t]},useMutableSource:pf,useSyncExternalStore:mf,useId:Pf,unstable_isNewReconciler:!1},ug={readContext:dt,useCallback:Cf,useContext:dt,useEffect:Ds,useImperativeHandle:Ef,useInsertionEffect:bf,useLayoutEffect:kf,useMemo:Nf,useReducer:rl,useRef:xf,useState:function(){return rl(Co)},useDebugValue:Ts,useDeferredValue:function(e){var t=ft();return Ee===null?t.memoizedState=e:_f(t,Ee.memoizedState,e)},useTransition:function(){var e=rl(Co)[0],t=ft().memoizedState;return[e,t]},useMutableSource:pf,useSyncExternalStore:mf,useId:Pf,unstable_isNewReconciler:!1};function vt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ai={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),o=mn(e),a=Bt(r,o);a.payload=t,n!=null&&(a.callback=n),t=fn(e,a,o),t!==null&&(bt(t,e,o,r),ba(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),o=mn(e),a=Bt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=fn(e,a,o),t!==null&&(bt(t,e,o,r),ba(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=mn(e),o=Bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=fn(e,o,r),t!==null&&(bt(t,e,r,n),ba(t,e,r))}};function Hc(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!yo(n,r)||!yo(o,a):!0}function Rf(e,t,n){var r=!1,o=vn,a=t.contextType;return typeof a=="object"&&a!==null?a=dt(a):(o=Ke(t)?In:Me.current,r=t.contextTypes,a=(r=r!=null)?kr(e,o):vn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ai,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ai.enqueueReplaceState(t,t.state,null)}function jl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ss(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=dt(a):(a=Ke(t)?In:Me.current,o.context=kr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Al(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ai.enqueueReplaceState(o,o.state,null),Ba(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var n="",r=t;do n+=jm(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $l(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cg=typeof WeakMap=="function"?WeakMap:Map;function zf(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ja||(Ja=!0,Gl=r),$l(e,t)},n}function Of(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){$l(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){$l(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Wc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Eg.bind(null,e,t,n),t.then(e,e))}function Vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var dg=Jt.ReactCurrentOwner,Qe=!1;function $e(e,t,n,r){t.child=e===null?uf(t,null,n,r):Er(t,e.child,n,r)}function Qc(e,t,n,r,o){n=n.render;var a=t.ref;return wr(t,o),r=Ps(e,t,n,r,a,o),n=Ls(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(pe&&n&&gs(t),t.flags|=1,$e(e,t,r,o),t.child)}function Jc(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!js(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ff(e,t,a,r,o)):(e=_a(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(i,r)&&e.ref===t.ref)return Qt(e,t,o)}return t.flags|=1,e=hn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ff(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(yo(a,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,Qt(e,t,o)}return Ul(e,t,n,r,o)}function Mf(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(mr,Ze),Ze|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(mr,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,le(mr,Ze),Ze|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,le(mr,Ze),Ze|=r;return $e(e,t,o,n),t.child}function If(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ul(e,t,n,r,o){var a=Ke(n)?In:Me.current;return a=kr(t,a),wr(t,o),n=Ps(e,t,n,r,a,o),r=Ls(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(pe&&r&&gs(t),t.flags|=1,$e(e,t,n,o),t.child)}function Kc(e,t,n,r,o){if(Ke(n)){var a=!0;Aa(t)}else a=!1;if(wr(t,o),t.stateNode===null)Ea(e,t),Rf(t,n,r),jl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Ke(n)?In:Me.current,u=kr(t,u));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Bc(t,i,r,u),nn=!1;var m=t.memoizedState;i.state=m,Ba(t,r,i,o),s=t.memoizedState,l!==r||m!==s||Je.current||nn?(typeof p=="function"&&(Al(t,n,p,r),s=t.memoizedState),(l=nn||Hc(t,n,l,r,m,s,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,df(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:vt(t.type,l),i.props=u,d=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=dt(s):(s=Ke(n)?In:Me.current,s=kr(t,s));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==d||m!==s)&&Bc(t,i,r,s),nn=!1,m=t.memoizedState,i.state=m,Ba(t,r,i,o);var v=t.memoizedState;l!==d||m!==v||Je.current||nn?(typeof w=="function"&&(Al(t,n,w,r),v=t.memoizedState),(u=nn||Hc(t,n,u,r,m,v,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),i.props=r,i.state=v,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Hl(e,t,n,r,a,o)}function Hl(e,t,n,r,o,a){If(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Oc(t,n,!1),Qt(e,t,a);r=t.stateNode,dg.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Er(t,e.child,null,a),t.child=Er(t,null,l,a)):$e(e,t,l,a),t.memoizedState=r.state,o&&Oc(t,n,!0),t.child}function Af(e){var t=e.stateNode;t.pendingContext?zc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zc(e,t.context,!1),Es(e,t.containerInfo)}function Gc(e,t,n,r,o){return Sr(),ys(o),t.flags|=256,$e(e,t,n,r),t.child}var Bl={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function jf(e,t,n){var r=t.pendingProps,o=he.current,a=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),le(he,o&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=si(i,r,0,null),e=Mn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Wl(n),t.memoizedState=Bl,e):Rs(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return fg(e,t,i,r,l,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=hn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=hn(l,a):(a=Mn(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Wl(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Bl,r}return a=e.child,e=a.sibling,r=hn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rs(e,t){return t=si({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ha(e,t,n,r){return r!==null&&ys(r),Er(t,e.child,null,n),e=Rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fg(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(L(422))),ha(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=si({mode:"visible",children:r.children},o,0,null),a=Mn(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Er(t,e.child,null,i),t.child.memoizedState=Wl(i),t.memoizedState=Bl,a);if((t.mode&1)===0)return ha(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(L(419)),r=ol(a,r,void 0),ha(e,t,i,r)}if(l=(i&e.childLanes)!==0,Qe||l){if(r=_e,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Yt(e,o),bt(r,e,o,-1))}return As(),r=ol(Error(L(421))),ha(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Cg.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,qe=dn(o.nextSibling),et=t,pe=!0,wt=null,e!==null&&(lt[st++]=Ut,lt[st++]=Ht,lt[st++]=An,Ut=e.id,Ht=e.overflow,An=t),t=Rs(t,r.children),t.flags|=4096,t)}function Xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,n)}function al(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function $f(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if($e(e,t,r.children,n),r=he.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,n,t);else if(e.tag===19)Xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(he,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Wa(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),al(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Wa(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}al(t,!0,n,null,a);break;case"together":al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ea(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pg(e,t,n){switch(t.tag){case 3:Af(t),Sr();break;case 5:ff(t);break;case 1:Ke(t.type)&&Aa(t);break;case 4:Es(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;le(Ua,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(he,he.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?jf(e,t,n):(le(he,he.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);le(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return $f(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),le(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,Mf(e,t,n)}return Qt(e,t,n)}var Uf,Vl,Hf,Bf;Uf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vl=function(){};Hf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,On(Tt.current);var a=null;switch(n){case"input":o=pl(e,o),r=pl(e,r),a=[];break;case"select":o=ve({},o,{value:void 0}),r=ve({},r,{value:void 0}),a=[];break;case"textarea":o=gl(e,o),r=gl(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ma)}yl(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(co.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=o?.[u],r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(co.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ue("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Bf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Jr(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mg(e,t,n){var r=t.pendingProps;switch(vs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ke(t.type)&&Ia(),Oe(t),null;case 3:return r=t.stateNode,Cr(),ce(Je),ce(Me),Ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wt!==null&&(ql(wt),wt=null))),Vl(e,t),Oe(t),null;case 5:Cs(t);var o=On(So.current);if(n=t.type,e!==null&&t.stateNode!=null)Hf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return Oe(t),null}if(e=On(Tt.current),pa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Lt]=t,r[bo]=a,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(o=0;o<eo.length;o++)ue(eo[o],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":ac(r,a),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ue("invalid",r);break;case"textarea":lc(r,a),ue("invalid",r)}yl(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&fa(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&fa(r.textContent,l,e),o=["children",""+l]):co.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&ue("scroll",r)}switch(n){case"input":ea(r),ic(r,a,!0);break;case"textarea":ea(r),sc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ma)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Lt]=t,e[bo]=r,Uf(e,t,!1,!1),t.stateNode=e;e:{switch(i=wl(n,r),n){case"dialog":ue("cancel",e),ue("close",e),o=r;break;case"iframe":case"object":case"embed":ue("load",e),o=r;break;case"video":case"audio":for(o=0;o<eo.length;o++)ue(eo[o],e);o=r;break;case"source":ue("error",e),o=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),o=r;break;case"details":ue("toggle",e),o=r;break;case"input":ac(e,r),o=pl(e,r),ue("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ve({},r,{value:void 0}),ue("invalid",e);break;case"textarea":lc(e,r),o=gl(e,r),ue("invalid",e);break;default:o=r}yl(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?wd(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&vd(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&fo(e,s):typeof s=="number"&&fo(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(co.hasOwnProperty(a)?s!=null&&a==="onScroll"&&ue("scroll",e):s!=null&&ns(e,a,s,i))}switch(n){case"input":ea(e),ic(e,r,!1);break;case"textarea":ea(e),sc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?hr(e,!!r.multiple,a,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ma)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)Bf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=On(So.current),On(Tt.current),pa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Lt]=t,(a=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:fa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fa(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=t,t.stateNode=r}return Oe(t),null;case 13:if(ce(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)lf(),Sr(),t.flags|=98560,a=!1;else if(a=pa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(L(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(L(317));a[Lt]=t}else Sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),a=!1}else wt!==null&&(ql(wt),wt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(he.current&1)!==0?Ce===0&&(Ce=3):As())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Cr(),Vl(e,t),e===null&&wo(t.stateNode.containerInfo),Oe(t),null;case 10:return bs(t.type._context),Oe(t),null;case 17:return Ke(t.type)&&Ia(),Oe(t),null;case 19:if(ce(he),a=t.memoizedState,a===null)return Oe(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Jr(a,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Wa(e),i!==null){for(t.flags|=128,Jr(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(he,he.current&1|2),t.child}e=e.sibling}a.tail!==null&&xe()>_r&&(t.flags|=128,r=!0,Jr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Wa(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!pe)return Oe(t),null}else 2*xe()-a.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Jr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=xe(),t.sibling=null,n=he.current,le(he,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return Is(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ze&1073741824)!==0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function hg(e,t){switch(vs(t),t.tag){case 1:return Ke(t.type)&&Ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cr(),ce(Je),ce(Me),Ns(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Cs(t),null;case 13:if(ce(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(he),null;case 4:return Cr(),null;case 10:return bs(t.type._context),null;case 22:case 23:return Is(),null;case 24:return null;default:return null}}var ga=!1,Fe=!1,gg=typeof WeakSet=="function"?WeakSet:Set,z=null;function pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function Yl(e,t,n){try{n()}catch(r){ye(e,t,r)}}var Zc=!1;function vg(e,t){if(Ll=za,e=Qd(),hs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,l=-1,s=-1,u=0,p=0,d=e,m=null;t:for(;;){for(var w;d!==n||o!==0&&d.nodeType!==3||(l=i+o),d!==a||r!==0&&d.nodeType!==3||(s=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(w=d.firstChild)!==null;)m=d,d=w;for(;;){if(d===e)break t;if(m===n&&++u===o&&(l=i),m===a&&++p===r&&(s=i),(w=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dl={focusedElem:e,selectionRange:n},za=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,x=v.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:vt(t.type,g),x);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(b){ye(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return v=Zc,Zc=!1,v}function lo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Yl(t,n,a)}o=o.next}while(o!==r)}}function ii(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Wf(e){var t=e.alternate;t!==null&&(e.alternate=null,Wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[bo],delete t[zl],delete t[qh],delete t[eg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vf(e){return e.tag===5||e.tag===3||e.tag===4}function qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ma));else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}function Kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Kl(e,t,n),e=e.sibling;e!==null;)Kl(e,t,n),e=e.sibling}var Le=null,yt=!1;function en(e,t,n){for(n=n.child;n!==null;)Yf(e,t,n),n=n.sibling}function Yf(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Za,n)}catch{}switch(n.tag){case 5:Fe||pr(n,t);case 6:var r=Le,o=yt;Le=null,en(e,t,n),Le=r,yt=o,Le!==null&&(yt?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(yt?(e=Le,n=n.stateNode,e.nodeType===8?Zi(e.parentNode,n):e.nodeType===1&&Zi(e,n),go(e)):Zi(Le,n.stateNode));break;case 4:r=Le,o=yt,Le=n.stateNode.containerInfo,yt=!0,en(e,t,n),Le=r,yt=o;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Yl(n,t,i),o=o.next}while(o!==r)}en(e,t,n);break;case 1:if(!Fe&&(pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,t,l)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,en(e,t,n),Fe=r):en(e,t,n);break;default:en(e,t,n)}}function ed(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gg),t.forEach(function(r){var o=Ng.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,yt=!1;break e;case 3:Le=l.stateNode.containerInfo,yt=!0;break e;case 4:Le=l.stateNode.containerInfo,yt=!0;break e}l=l.return}if(Le===null)throw Error(L(160));Yf(a,i,o),Le=null,yt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ye(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qf(t,e),t=t.sibling}function Qf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),_t(e),r&4){try{lo(3,e,e.return),ii(3,e)}catch(g){ye(e,e.return,g)}try{lo(5,e,e.return)}catch(g){ye(e,e.return,g)}}break;case 1:gt(t,e),_t(e),r&512&&n!==null&&pr(n,n.return);break;case 5:if(gt(t,e),_t(e),r&512&&n!==null&&pr(n,n.return),e.flags&32){var o=e.stateNode;try{fo(o,"")}catch(g){ye(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&md(o,a),wl(l,i);var u=wl(l,a);for(i=0;i<s.length;i+=2){var p=s[i],d=s[i+1];p==="style"?wd(o,d):p==="dangerouslySetInnerHTML"?vd(o,d):p==="children"?fo(o,d):ns(o,p,d,u)}switch(l){case"input":ml(o,a);break;case"textarea":hd(o,a);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?hr(o,!!a.multiple,w,!1):m!==!!a.multiple&&(a.defaultValue!=null?hr(o,!!a.multiple,a.defaultValue,!0):hr(o,!!a.multiple,a.multiple?[]:"",!1))}o[bo]=a}catch(g){ye(e,e.return,g)}}break;case 6:if(gt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(L(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(g){ye(e,e.return,g)}}break;case 3:if(gt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(t.containerInfo)}catch(g){ye(e,e.return,g)}break;case 4:gt(t,e),_t(e);break;case 13:gt(t,e),_t(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Fs=xe())),r&4&&ed(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(u=Fe)||p,gt(t,e),Fe=u):gt(t,e),_t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&(e.mode&1)!==0)for(z=e,p=e.child;p!==null;){for(d=z=p;z!==null;){switch(m=z,w=m.child,m.tag){case 0:case 11:case 14:case 15:lo(4,m,m.return);break;case 1:pr(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(g){ye(r,n,g)}}break;case 5:pr(m,m.return);break;case 22:if(m.memoizedState!==null){nd(d);continue}}w!==null?(w.return=m,z=w):nd(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=yd("display",i))}catch(g){ye(e,e.return,g)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){ye(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gt(t,e),_t(e),r&4&&ed(e);break;case 21:break;default:gt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vf(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(fo(o,""),r.flags&=-33);var a=qc(e);Kl(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=qc(e);Jl(e,l,i);break;default:throw Error(L(161))}}catch(s){ye(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yg(e,t,n){z=e,Jf(e,t,n)}function Jf(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||ga;if(!i){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Fe;l=ga;var u=Fe;if(ga=i,(Fe=s)&&!u)for(z=o;z!==null;)i=z,s=i.child,i.tag===22&&i.memoizedState!==null?rd(o):s!==null?(s.return=i,z=s):rd(o);for(;a!==null;)z=a,Jf(a,t,n),a=a.sibling;z=o,ga=l,Fe=u}td(e,t,n)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,z=a):td(e,t,n)}}function td(e){for(;z!==null;){var t=z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Fe||ii(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&jc(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jc(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&go(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Fe||t.flags&512&&Ql(t)}catch(m){ye(t,t.return,m)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function nd(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function rd(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ii(4,t)}catch(s){ye(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ye(t,o,s)}}var a=t.return;try{Ql(t)}catch(s){ye(t,a,s)}break;case 5:var i=t.return;try{Ql(t)}catch(s){ye(t,i,s)}}}catch(s){ye(t,t.return,s)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var wg=Math.ceil,Qa=Jt.ReactCurrentDispatcher,zs=Jt.ReactCurrentOwner,ct=Jt.ReactCurrentBatchConfig,ne=0,_e=null,ke=null,De=0,Ze=0,mr=wn(0),Ce=0,_o=null,$n=0,li=0,Os=0,so=null,Ye=null,Fs=0,_r=1/0,jt=null,Ja=!1,Gl=null,pn=null,va=!1,ln=null,Ka=0,uo=0,Xl=null,Ca=-1,Na=0;function Ue(){return(ne&6)!==0?xe():Ca!==-1?Ca:Ca=xe()}function mn(e){return(e.mode&1)===0?1:(ne&2)!==0&&De!==0?De&-De:ng.transition!==null?(Na===0&&(Na=Td()),Na):(e=ae,e!==0||(e=window.event,e=e===void 0?16:Ad(e.type)),e)}function bt(e,t,n,r){if(50<uo)throw uo=0,Xl=null,Error(L(185));Po(e,n,r),((ne&2)===0||e!==_e)&&(e===_e&&((ne&2)===0&&(li|=n),Ce===4&&on(e,De)),Ge(e,r),n===1&&ne===0&&(t.mode&1)===0&&(_r=xe()+500,ri&&xn()))}function Ge(e,t){var n=e.callbackNode;oh(e,t);var r=Ra(e,e===_e?De:0);if(r===0)n!==null&&dc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dc(n),t===1)e.tag===0?tg(od.bind(null,e)):rf(od.bind(null,e)),Xh(function(){(ne&6)===0&&xn()}),n=null;else{switch(Rd(r)){case 1:n=ls;break;case 4:n=Ld;break;case 16:n=Ta;break;case 536870912:n=Dd;break;default:n=Ta}n=np(n,Kf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kf(e,t){if(Ca=-1,Na=0,(ne&6)!==0)throw Error(L(327));var n=e.callbackNode;if(xr()&&e.callbackNode!==n)return null;var r=Ra(e,e===_e?De:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ga(e,r);else{t=r;var o=ne;ne|=2;var a=Xf();(_e!==e||De!==t)&&(jt=null,_r=xe()+500,Fn(e,t));do try{kg();break}catch(l){Gf(e,l)}while(!0);xs(),Qa.current=a,ne=o,ke!==null?t=0:(_e=null,De=0,t=Ce)}if(t!==0){if(t===2&&(o=El(e),o!==0&&(r=o,t=Zl(e,o))),t===1)throw n=_o,Fn(e,0),on(e,r),Ge(e,xe()),n;if(t===6)on(e,r);else{if(o=e.current.alternate,(r&30)===0&&!xg(o)&&(t=Ga(e,r),t===2&&(a=El(e),a!==0&&(r=a,t=Zl(e,a))),t===1))throw n=_o,Fn(e,0),on(e,r),Ge(e,xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:Tn(e,Ye,jt);break;case 3:if(on(e,r),(r&130023424)===r&&(t=Fs+500-xe(),10<t)){if(Ra(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Rl(Tn.bind(null,e,Ye,jt),t);break}Tn(e,Ye,jt);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-xt(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wg(r/1960))-r,10<r){e.timeoutHandle=Rl(Tn.bind(null,e,Ye,jt),r);break}Tn(e,Ye,jt);break;case 5:Tn(e,Ye,jt);break;default:throw Error(L(329))}}}return Ge(e,xe()),e.callbackNode===n?Kf.bind(null,e):null}function Zl(e,t){var n=so;return e.current.memoizedState.isDehydrated&&(Fn(e,t).flags|=256),e=Ga(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&ql(t)),e}function ql(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function xg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!kt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~Os,t&=~li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function od(e){if((ne&6)!==0)throw Error(L(327));xr();var t=Ra(e,0);if((t&1)===0)return Ge(e,xe()),null;var n=Ga(e,t);if(e.tag!==0&&n===2){var r=El(e);r!==0&&(t=r,n=Zl(e,r))}if(n===1)throw n=_o,Fn(e,0),on(e,t),Ge(e,xe()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,Ye,jt),Ge(e,xe()),null}function Ms(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(_r=xe()+500,ri&&xn())}}function Un(e){ln!==null&&ln.tag===0&&(ne&6)===0&&xr();var t=ne;ne|=1;var n=ct.transition,r=ae;try{if(ct.transition=null,ae=1,e)return e()}finally{ae=r,ct.transition=n,ne=t,(ne&6)===0&&xn()}}function Is(){Ze=mr.current,ce(mr)}function Fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gh(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(vs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ia();break;case 3:Cr(),ce(Je),ce(Me),Ns();break;case 5:Cs(r);break;case 4:Cr();break;case 13:ce(he);break;case 19:ce(he);break;case 10:bs(r.type._context);break;case 22:case 23:Is()}n=n.return}if(_e=e,ke=e=hn(e.current,null),De=Ze=t,Ce=0,_o=null,Os=li=$n=0,Ye=so=null,zn!==null){for(t=0;t<zn.length;t++)if(n=zn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}zn=null}return e}function Gf(e,t){do{var n=ke;try{if(xs(),ka.current=Ya,Va){for(var r=ge.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Va=!1}if(jn=0,Ne=Ee=ge=null,io=!1,Eo=0,zs.current=null,n===null||n.return===null){Ce=1,_o=t,ke=null;break}e:{var a=e,i=n.return,l=n,s=t;if(t=De,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=l,d=p.tag;if((p.mode&1)===0&&(d===0||d===11||d===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=Vc(i);if(w!==null){w.flags&=-257,Yc(w,i,l,a,t),w.mode&1&&Wc(a,u,t),t=w,s=u;var v=t.updateQueue;if(v===null){var g=new Set;g.add(s),t.updateQueue=g}else v.add(s);break e}else{if((t&1)===0){Wc(a,u,t),As();break e}s=Error(L(426))}}else if(pe&&l.mode&1){var x=Vc(i);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),Yc(x,i,l,a,t),ys(Nr(s,l));break e}}a=s=Nr(s,l),Ce!==4&&(Ce=2),so===null?so=[a]:so.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=zf(a,s,t);Ac(a,f);break e;case 1:l=s;var c=a.type,h=a.stateNode;if((a.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(pn===null||!pn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=Of(a,l,t);Ac(a,b);break e}}a=a.return}while(a!==null)}qf(n)}catch(y){t=y,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Xf(){var e=Qa.current;return Qa.current=Ya,e===null?Ya:e}function As(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),_e===null||($n&268435455)===0&&(li&268435455)===0||on(_e,De)}function Ga(e,t){var n=ne;ne|=2;var r=Xf();(_e!==e||De!==t)&&(jt=null,Fn(e,t));do try{bg();break}catch(o){Gf(e,o)}while(!0);if(xs(),ne=n,Qa.current=r,ke!==null)throw Error(L(261));return _e=null,De=0,Ce}function bg(){for(;ke!==null;)Zf(ke)}function kg(){for(;ke!==null&&!Km();)Zf(ke)}function Zf(e){var t=tp(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?qf(e):ke=t,zs.current=null}function qf(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=mg(n,t,Ze),n!==null){ke=n;return}}else{if(n=hg(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,ke=null;return}}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ce===0&&(Ce=5)}function Tn(e,t,n){var r=ae,o=ct.transition;try{ct.transition=null,ae=1,Sg(e,t,n,r)}finally{ct.transition=o,ae=r}return null}function Sg(e,t,n,r){do xr();while(ln!==null);if((ne&6)!==0)throw Error(L(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(ah(e,a),e===_e&&(ke=_e=null,De=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||va||(va=!0,np(Ta,function(){return xr(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=ct.transition,ct.transition=null;var i=ae;ae=1;var l=ne;ne|=4,zs.current=null,vg(e,n),Qf(n,e),Vh(Dl),za=!!Ll,Dl=Ll=null,e.current=n,yg(n,e,o),Gm(),ne=l,ae=i,ct.transition=a}else e.current=n;if(va&&(va=!1,ln=e,Ka=o),a=e.pendingLanes,a===0&&(pn=null),qm(n.stateNode,r),Ge(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ja)throw Ja=!1,e=Gl,Gl=null,e;return(Ka&1)!==0&&e.tag!==0&&xr(),a=e.pendingLanes,(a&1)!==0?e===Xl?uo++:(uo=0,Xl=e):uo=0,xn(),null}function xr(){if(ln!==null){var e=Rd(Ka),t=ct.transition,n=ae;try{if(ct.transition=null,ae=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Ka=0,(ne&6)!==0)throw Error(L(331));var o=ne;for(ne|=4,z=e.current;z!==null;){var a=z,i=a.child;if((z.flags&16)!==0){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(z=u;z!==null;){var p=z;switch(p.tag){case 0:case 11:case 15:lo(8,p,a)}var d=p.child;if(d!==null)d.return=p,z=d;else for(;z!==null;){p=z;var m=p.sibling,w=p.return;if(Wf(p),p===u){z=null;break}if(m!==null){m.return=w,z=m;break}z=w}}}var v=a.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(g!==null)}}z=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,z=i;else e:for(;z!==null;){if(a=z,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:lo(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,z=f;break e}z=a.return}}var c=e.current;for(z=c;z!==null;){i=z;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,z=h;else e:for(i=c;z!==null;){if(l=z,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:ii(9,l)}}catch(y){ye(l,l.return,y)}if(l===i){z=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,z=b;break e}z=l.return}}if(ne=o,xn(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Za,e)}catch{}r=!0}return r}finally{ae=n,ct.transition=t}}return!1}function ad(e,t,n){t=Nr(n,t),t=zf(e,t,1),e=fn(e,t,1),t=Ue(),e!==null&&(Po(e,1,t),Ge(e,t))}function ye(e,t,n){if(e.tag===3)ad(e,e,n);else for(;t!==null;){if(t.tag===3){ad(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=Nr(n,e),e=Of(t,e,1),t=fn(t,e,1),e=Ue(),t!==null&&(Po(t,1,e),Ge(t,e));break}}t=t.return}}function Eg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(De&n)===n&&(Ce===4||Ce===3&&(De&130023424)===De&&500>xe()-Fs?Fn(e,0):Os|=n),Ge(e,t)}function ep(e,t){t===0&&((e.mode&1)===0?t=1:(t=ra,ra<<=1,(ra&130023424)===0&&(ra=4194304)));var n=Ue();e=Yt(e,t),e!==null&&(Po(e,t,n),Ge(e,n))}function Cg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ep(e,n)}function Ng(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),ep(e,n)}var tp;tp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Qe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Qe=!1,pg(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,pe&&(t.flags&1048576)!==0&&of(t,$a,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ea(e,t),e=t.pendingProps;var o=kr(t,Me.current);wr(t,n),o=Ps(null,t,r,e,o,n);var a=Ls();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(a=!0,Aa(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ss(t),o.updater=ai,t.stateNode=o,o._reactInternals=t,jl(t,r,e,n),t=Hl(null,t,r,!0,a,n)):(t.tag=0,pe&&a&&gs(t),$e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ea(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Pg(r),e=vt(r,e),o){case 0:t=Ul(null,t,r,e,n);break e;case 1:t=Kc(null,t,r,e,n);break e;case 11:t=Qc(null,t,r,e,n);break e;case 14:t=Jc(null,t,r,vt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Ul(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Kc(e,t,r,o,n);case 3:e:{if(Af(t),e===null)throw Error(L(387));r=t.pendingProps,a=t.memoizedState,o=a.element,df(e,t),Ba(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Nr(Error(L(423)),t),t=Gc(e,t,r,n,o);break e}else if(r!==o){o=Nr(Error(L(424)),t),t=Gc(e,t,r,n,o);break e}else for(qe=dn(t.stateNode.containerInfo.firstChild),et=t,pe=!0,wt=null,n=uf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===o){t=Qt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return ff(t),e===null&&Ml(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Tl(r,o)?i=null:a!==null&&Tl(r,a)&&(t.flags|=32),If(e,t),$e(e,t,i,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return jf(e,t,n);case 4:return Es(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Er(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Qc(e,t,r,o,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,le(Ua,r._currentValue),r._currentValue=i,a!==null)if(kt(a.value,i)){if(a.children===o.children&&!Je.current){t=Qt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Bt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Il(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(L(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Il(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}$e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,wr(t,n),o=dt(o),r=r(o),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,o=vt(r,t.pendingProps),o=vt(r.type,o),Jc(e,t,r,o,n);case 15:return Ff(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Ea(e,t),t.tag=1,Ke(r)?(e=!0,Aa(t)):e=!1,wr(t,n),Rf(t,r,o),jl(t,r,o,n),Hl(null,t,r,!0,e,n);case 19:return $f(e,t,n);case 22:return Mf(e,t,n)}throw Error(L(156,t.tag))};function np(e,t){return Pd(e,t)}function _g(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new _g(e,t,n,r)}function js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pg(e){if(typeof e=="function")return js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===os)return 11;if(e===as)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _a(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")js(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case or:return Mn(n.children,o,a,t);case rs:i=8,o|=8;break;case ul:return e=ut(12,n,t,o|2),e.elementType=ul,e.lanes=a,e;case cl:return e=ut(13,n,t,o),e.elementType=cl,e.lanes=a,e;case dl:return e=ut(19,n,t,o),e.elementType=dl,e.lanes=a,e;case dd:return si(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ud:i=10;break e;case cd:i=9;break e;case os:i=11;break e;case as:i=14;break e;case tn:i=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=ut(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Mn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function si(e,t,n,r){return e=ut(22,e,r,t),e.elementType=dd,e.lanes=n,e.stateNode={isHidden:!1},e}function il(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function ll(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wi(0),this.expirationTimes=Wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function $s(e,t,n,r,o,a,i,l,s){return e=new Lg(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ut(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ss(a),e}function Dg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rp(e){if(!e)return vn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(Ke(n))return nf(e,n,t)}return t}function op(e,t,n,r,o,a,i,l,s){return e=$s(n,r,!0,e,o,a,i,l,s),e.context=rp(null),n=e.current,r=Ue(),o=mn(n),a=Bt(r,o),a.callback=t??null,fn(n,a,o),e.current.lanes=o,Po(e,o,r),Ge(e,r),e}function ui(e,t,n,r){var o=t.current,a=Ue(),i=mn(o);return n=rp(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(o,t,i),e!==null&&(bt(e,o,i,a),ba(e,o,i)),i}function Xa(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Us(e,t){id(e,t),(e=e.alternate)&&id(e,t)}function Tg(){return null}var ap=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hs(e){this._internalRoot=e}ci.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));ui(e,t,null,null)};ci.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){ui(null,e,null,null)}),t[Vt]=null}};function ci(e){this._internalRoot=e}ci.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&Id(e)}};function Bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ld(){}function Rg(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=Xa(i);a.call(u)}}var i=op(t,r,e,0,null,!1,!1,"",ld);return e._reactRootContainer=i,e[Vt]=i.current,wo(e.nodeType===8?e.parentNode:e),Un(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Xa(s);l.call(u)}}var s=$s(e,0,!1,null,null,!1,!1,"",ld);return e._reactRootContainer=s,e[Vt]=s.current,wo(e.nodeType===8?e.parentNode:e),Un(function(){ui(t,s,n,r)}),s}function fi(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var l=o;o=function(){var s=Xa(i);l.call(s)}}ui(t,i,e,o)}else i=Rg(n,t,e,o,r);return Xa(i)}zd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(ss(t,n|1),Ge(t,xe()),(ne&6)===0&&(_r=xe()+500,xn()))}break;case 13:Un(function(){var r=Yt(e,1);if(r!==null){var o=Ue();bt(r,e,1,o)}}),Us(e,1)}};us=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Ue();bt(t,e,134217728,n)}Us(e,134217728)}};Od=function(e){if(e.tag===13){var t=mn(e),n=Yt(e,t);if(n!==null){var r=Ue();bt(n,e,t,r)}Us(e,t)}};Fd=function(){return ae};Md=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}};bl=function(e,t,n){switch(t){case"input":if(ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ni(r);if(!o)throw Error(L(90));pd(r),ml(r,o)}}}break;case"textarea":hd(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};kd=Ms;Sd=Un;var zg={usingClientEntryPoint:!1,Events:[Do,sr,ni,xd,bd,Ms]},Kr={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Og={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nd(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||Tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Gr.isDisabled&&Gr.supportsFiber))try{Za=Gr.inject(Og),Dt=Gr}catch{}var Gr;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zg;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bs(t))throw Error(L(200));return Dg(e,t,null,n)};rt.createRoot=function(e,t){if(!Bs(e))throw Error(L(299));var n=!1,r="",o=ap;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=$s(e,1,!1,null,null,n,!1,r,o),e[Vt]=t.current,wo(e.nodeType===8?e.parentNode:e),new Hs(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Nd(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return Un(e)};rt.hydrate=function(e,t,n){if(!di(t))throw Error(L(200));return fi(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!Bs(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=ap;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=op(t,null,e,1,n??null,o,!1,a,i),e[Vt]=t.current,wo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ci(t)};rt.render=function(e,t,n){if(!di(t))throw Error(L(200));return fi(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!di(e))throw Error(L(40));return e._reactRootContainer?(Un(function(){fi(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1};rt.unstable_batchedUpdates=Ms;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!di(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return fi(e,t,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426"});var up=Pn((hy,sp)=>{"use strict";function lp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lp)}catch(e){console.error(e)}}lp(),sp.exports=ip()});var dp=Pn(Ws=>{"use strict";var cp=up();Ws.createRoot=cp.createRoot,Ws.hydrateRoot=cp.hydrateRoot;var gy});var sm=G(Q()),um=G(dp());var mt=G(Q());var ot=G(Q(),1),j=G(Q(),1),me=G(Q(),1),lu=G(Q(),1),Up=G(Q(),1),oe=G(Q(),1),Bv=G(Q(),1),Wv=G(Q(),1),Vv=G(Q(),1),$=G(Q(),1),tm=G(Q(),1);var fp="popstate";function pp(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function xp(e={}){function t(r,o){let a=o.state?.masked,{pathname:i,search:l,hash:s}=a||r.location;return Js("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default",a?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,o){return typeof o=="string"?o:Dr(o)}return Mg(t,n,null,e)}function de(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function pt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Fg(){return Math.random().toString(36).substring(2,10)}function mp(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Js(e,t,n=null,r,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Wn(t):t,state:n,key:t&&t.key||r||Fg(),unstable_mask:o}}function Dr({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Wn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Mg(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,l="POP",s=null,u=p();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function p(){return(i.state||{idx:null}).idx}function d(){l="POP";let x=p(),f=x==null?null:x-u;u=x,s&&s({action:l,location:g.location,delta:f})}function m(x,f){l="PUSH";let c=pp(x)?x:Js(g.location,x,f);n&&n(c,x),u=p()+1;let h=mp(c,u),b=g.createHref(c.unstable_mask||c);try{i.pushState(h,"",b)}catch(y){if(y instanceof DOMException&&y.name==="DataCloneError")throw y;o.location.assign(b)}a&&s&&s({action:l,location:g.location,delta:1})}function w(x,f){l="REPLACE";let c=pp(x)?x:Js(g.location,x,f);n&&n(c,x),u=p();let h=mp(c,u),b=g.createHref(c.unstable_mask||c);i.replaceState(h,"",b),a&&s&&s({action:l,location:g.location,delta:0})}function v(x){return Ig(x)}let g={get action(){return l},get location(){return e(o,i)},listen(x){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(fp,d),s=x,()=>{o.removeEventListener(fp,d),s=null}},createHref(x){return t(o,x)},createURL:v,encodeLocation(x){let f=v(x);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:w,go(x){return i.go(x)}};return g}function Ig(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),de(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Dr(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}var Ag;Ag=new WeakMap;function Zs(e,t,n="/"){return jg(e,t,n,!1)}function jg(e,t,n,r){let o=typeof t=="string"?Wn(t):t,a=zt(o.pathname||"/",n);if(a==null)return null;let i=bp(e);Ug(i);let l=null;for(let s=0;l==null&&s<i.length;++s){let u=Zg(a);l=Gg(i[s],u,r)}return l}function $g(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function bp(e,t=[],n=[],r="",o=!1){let a=(i,l,s=o,u)=>{let p={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(r)&&s)return;de(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length)}let d=Rt([r,p.relativePath]),m=n.concat(p);i.children&&i.children.length>0&&(de(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),bp(i.children,t,m,d,s)),!(i.path==null&&!i.index)&&t.push({path:d,score:Jg(d,i.index),routesMeta:m})};return e.forEach((i,l)=>{if(i.path===""||!i.path?.includes("?"))a(i,l);else for(let s of kp(i.path))a(i,l,!0,s)}),t}function kp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let i=kp(r.join("/")),l=[];return l.push(...i.map(s=>s===""?a:[a,s].join("/"))),o&&l.push(...i),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Ug(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Kg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Hg=/^:[\w-]+$/,Bg=3,Wg=2,Vg=1,Yg=10,Qg=-2,hp=e=>e==="*";function Jg(e,t){let n=e.split("/"),r=n.length;return n.some(hp)&&(r+=Qg),t&&(r+=Wg),n.filter(o=>!hp(o)).reduce((o,a)=>o+(Hg.test(a)?Bg:a===""?Vg:Yg),r)}function Kg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Gg(e,t,n=!1){let{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,p=a==="/"?t:t.slice(a.length)||"/",d=zo({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},p),m=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=zo({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},p)),!d)return null;Object.assign(o,d.params),i.push({params:o,pathname:Rt([a,d.pathname]),pathnameBase:tv(Rt([a,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(a=Rt([a,d.pathnameBase]))}return i}function zo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Xg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,{paramName:p,isOptional:d},m)=>{if(p==="*"){let v=l[m]||"";i=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}let w=l[m];return d&&!w?u[p]=void 0:u[p]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:i,pattern:e}}function Xg(e,t=!1,n=!0){pt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,s,u,p)=>{if(r.push({paramName:l,isOptional:s!=null}),s){let d=p.charAt(u+i.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Zg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return pt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function zt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var qg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Sp(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Wn(e):e,a;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?a=gp(n.substring(1),"/"):a=gp(n,t)):a=t,{pathname:a,search:nv(r),hash:rv(o)}}function gp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Vs(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ev(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ep(e){let t=ev(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function qs(e,t,n,r=!1){let o;typeof e=="string"?o=Wn(e):(o={...e},de(!o.pathname||!o.pathname.includes("?"),Vs("?","pathname","search",o)),de(!o.pathname||!o.pathname.includes("#"),Vs("#","pathname","hash",o)),de(!o.search||!o.search.includes("#"),Vs("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,l;if(i==null)l=n;else{let d=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),d-=1;o.pathname=m.join("/")}l=d>=0?t[d]:"/"}let s=Sp(o,l),u=i&&i!=="/"&&i.endsWith("/"),p=(a||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}var Rt=e=>e.join("/").replace(/\/\/+/g,"/"),tv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,rv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;var Cp=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Np(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function ov(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var _p=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Pp(e,t){let n=e;if(typeof n!="string"||!qg.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(_p)try{let a=new URL(window.location.href),i=n.startsWith("//")?new URL(a.protocol+n):new URL(n),l=zt(i.pathname,t);i.origin===a.origin&&l!=null?n=l+i.search+i.hash:o=!0}catch{pt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}var yy=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Lp=["POST","PUT","PATCH","DELETE"],wy=new Set(Lp),av=["GET",...Lp],xy=new Set(av);var Vn=ot.createContext(null);Vn.displayName="DataRouter";var Tr=ot.createContext(null);Tr.displayName="DataRouterState";var iv=ot.createContext(!1);var eu=ot.createContext({isTransitioning:!1});eu.displayName="ViewTransition";var Dp=ot.createContext(new Map);Dp.displayName="Fetchers";var lv=ot.createContext(null);lv.displayName="Await";var Be=ot.createContext(null);Be.displayName="Navigation";var Rr=ot.createContext(null);Rr.displayName="Location";var St=ot.createContext({outlet:null,matches:[],isDataRoute:!1});St.displayName="Route";var tu=ot.createContext(null);tu.displayName="RouteError";var Ks=!0,Tp="REACT_ROUTER_ERROR",sv="REDIRECT",uv="ROUTE_ERROR_RESPONSE";function cv(e){if(e.startsWith(`${Tp}:${sv}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function dv(e){if(e.startsWith(`${Tp}:${uv}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Cp(t.status,t.statusText,t.data)}catch{}}function Rp(e,{relative:t}={}){de(zr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=j.useContext(Be),{hash:o,pathname:a,search:i}=Or(e,{relative:t}),l=a;return n!=="/"&&(l=a==="/"?n:Rt([n,a])),r.createHref({pathname:l,search:i,hash:o})}function zr(){return j.useContext(Rr)!=null}function We(){return de(zr(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Rr).location}var zp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Op(e){j.useContext(Be).static||j.useLayoutEffect(e)}function Ie(){let{isDataRoute:e}=j.useContext(St);return e?bv():fv()}function fv(){de(zr(),"useNavigate() may be used only in the context of a <Router> component.");let e=j.useContext(Vn),{basename:t,navigator:n}=j.useContext(Be),{matches:r}=j.useContext(St),{pathname:o}=We(),a=JSON.stringify(Ep(r)),i=j.useRef(!1);return Op(()=>{i.current=!0}),j.useCallback((s,u={})=>{if(pt(i.current,zp),!i.current)return;if(typeof s=="number"){n.go(s);return}let p=qs(s,JSON.parse(a),o,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Rt([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,a,o,e])}var by=j.createContext(null);function Yn(){let{matches:e}=j.useContext(St),t=e[e.length-1];return t?t.params:{}}function Or(e,{relative:t}={}){let{matches:n}=j.useContext(St),{pathname:r}=We(),o=JSON.stringify(Ep(n));return j.useMemo(()=>qs(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function Fp(e,t){return Mp(e,t)}function Mp(e,t,n){de(zr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=j.useContext(Be),{matches:o}=j.useContext(St),a=o[o.length-1],i=a?a.params:{},l=a?a.pathname:"/",s=a?a.pathnameBase:"/",u=a&&a.route;if(Ks){let x=u&&u.path||"";$p(l,!u||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let p=We(),d;if(t){let x=typeof t=="string"?Wn(t):t;de(s==="/"||x.pathname?.startsWith(s),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${x.pathname}" was given in the \`location\` prop.`),d=x}else d=p;let m=d.pathname||"/",w=m;if(s!=="/"){let x=s.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let v=Zs(e,{pathname:w});Ks&&(pt(u||v!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),pt(v==null||v[v.length-1].route.element!==void 0||v[v.length-1].route.Component!==void 0||v[v.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));let g=vv(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},i,x.params),pathname:Rt([s,r.encodeLocation?r.encodeLocation(x.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:Rt([s,r.encodeLocation?r.encodeLocation(x.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),o,n);return t&&g?j.createElement(Rr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...d},navigationType:"POP"}},g):g}function pv(){let e=jp(),t=Np(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},i=null;return Ks&&(console.error("Error handled by React Router default ErrorBoundary:",e),i=j.createElement(j.Fragment,null,j.createElement("p",null,"\u{1F4BF} Hey developer \u{1F44B}"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:a},"ErrorBoundary")," or"," ",j.createElement("code",{style:a},"errorElement")," prop on your route."))),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:o},n):null,i)}var mv=j.createElement(pv,null),Ip=class extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let n=dv(e.digest);n&&(e=n)}let t=e!==void 0?j.createElement(St.Provider,{value:this.props.routeContext},j.createElement(tu.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?j.createElement(hv,{error:e},t):t}};Ip.contextType=iv;var Ys=new WeakMap;function hv({children:e,error:t}){let{basename:n}=j.useContext(Be);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=cv(t.digest);if(r){let o=Ys.get(t);if(o)throw o;let a=Pp(r.location,n);if(_p&&!Ys.get(t))if(a.isExternal||r.reloadDocument)window.location.href=a.absoluteURL||a.to;else{let i=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:r.replace}));throw Ys.set(t,i),i}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return e}function gv({routeContext:e,match:t,children:n}){let r=j.useContext(Vn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),j.createElement(St.Provider,{value:e},n)}function vv(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,a=r?.errors;if(a!=null){let p=o.findIndex(d=>d.route.id&&a?.[d.route.id]!==void 0);de(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let i=!1,l=-1;if(n&&r){i=r.renderFallback;for(let p=0;p<o.length;p++){let d=o[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=p),d.route.id){let{loaderData:m,errors:w}=r,v=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!w||w[d.route.id]===void 0);if(d.route.lazy||v){n.isStatic&&(i=!0),l>=0?o=o.slice(0,l+1):o=[o[0]];break}}}}let s=n?.onError,u=r&&s?(p,d)=>{s(p,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:ov(r.matches),errorInfo:d})}:void 0;return o.reduceRight((p,d,m)=>{let w,v=!1,g=null,x=null;r&&(w=a&&d.route.id?a[d.route.id]:void 0,g=d.route.errorElement||mv,i&&(l<0&&m===0?($p("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,x=null):l===m&&(v=!0,x=d.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,m+1)),c=()=>{let h;return w?h=g:v?h=x:d.route.Component?h=j.createElement(d.route.Component,null):d.route.element?h=d.route.element:h=p,j.createElement(gv,{match:d,routeContext:{outlet:p,matches:f,isDataRoute:r!=null},children:h})};return r&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?j.createElement(Ip,{location:r.location,revalidation:r.revalidation,component:g,error:w,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:u}):c()},null)}function nu(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yv(e){let t=j.useContext(Vn);return de(t,nu(e)),t}function ru(e){let t=j.useContext(Tr);return de(t,nu(e)),t}function wv(e){let t=j.useContext(St);return de(t,nu(e)),t}function ou(e){let t=wv(e),n=t.matches[t.matches.length-1];return de(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function xv(){return ou("useRouteId")}function Ap(){return ru("useNavigation").navigation}function au(){let{matches:e,loaderData:t}=ru("useMatches");return j.useMemo(()=>e.map(n=>$g(n,t)),[e,t])}function jp(){let e=j.useContext(tu),t=ru("useRouteError"),n=ou("useRouteError");return e!==void 0?e:t.errors?.[n]}function bv(){let{router:e}=yv("useNavigate"),t=ou("useNavigate"),n=j.useRef(!1);return Op(()=>{n.current=!0}),j.useCallback(async(o,a={})=>{pt(n.current,zp),n.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var vp={};function $p(e,t,n){!t&&!vp[e]&&(vp[e]=!0,pt(!1,n))}var kv="useOptimistic",ky=me[kv];var Sy=me.memo(Sv);function Sv({routes:e,future:t,state:n,isStatic:r,onError:o}){return Mp(e,void 0,{state:n,isStatic:r,onError:o,future:t})}function Se(e){de(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function iu({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:a=!1,unstable_useTransitions:i}){de(!zr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),s=me.useMemo(()=>({basename:l,navigator:o,static:a,unstable_useTransitions:i,future:{}}),[l,o,a,i]);typeof n=="string"&&(n=Wn(n));let{pathname:u="/",search:p="",hash:d="",state:m=null,key:w="default",unstable_mask:v}=n,g=me.useMemo(()=>{let x=zt(u,l);return x==null?null:{location:{pathname:x,search:p,hash:d,state:m,key:w,unstable_mask:v},navigationType:r}},[l,u,p,d,m,w,r,v]);return pt(g!=null,`<Router basename="${l}"> is not able to match the URL "${u}${p}${d}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:me.createElement(Be.Provider,{value:s},me.createElement(Rr.Provider,{children:t,value:g}))}function Oo({children:e,location:t}){return Fp(vi(e),t)}function vi(e,t=[]){let n=[];return me.Children.forEach(e,(r,o)=>{if(!me.isValidElement(r))return;let a=[...t,o];if(r.type===me.Fragment){n.push.apply(n,vi(r.props.children,a));return}de(r.type===Se,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),de(!r.props.index||!r.props.children,"An index route cannot have child routes.");let i={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=vi(r.props.children,a)),n.push(i)}),n}var hi="get",gi="application/x-www-form-urlencoded";function yi(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Ev(e){return yi(e)&&e.tagName.toLowerCase()==="button"}function Cv(e){return yi(e)&&e.tagName.toLowerCase()==="form"}function Nv(e){return yi(e)&&e.tagName.toLowerCase()==="input"}function _v(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Pv(e,t){return e.button===0&&(!t||t==="_self")&&!_v(e)}var pi=null;function Lv(){if(pi===null)try{new FormData(document.createElement("form"),0),pi=!1}catch{pi=!0}return pi}var Dv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qs(e){return e!=null&&!Dv.has(e)?(pt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gi}"`),null):e}function Tv(e,t){let n,r,o,a,i;if(Cv(e)){let l=e.getAttribute("action");r=l?zt(l,t):null,n=e.getAttribute("method")||hi,o=Qs(e.getAttribute("enctype"))||gi,a=new FormData(e)}else if(Ev(e)||Nv(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||l.getAttribute("action");if(r=s?zt(s,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||hi,o=Qs(e.getAttribute("formenctype"))||Qs(l.getAttribute("enctype"))||gi,a=new FormData(l,e),!Lv()){let{name:u,type:p,value:d}=e;if(p==="image"){let m=u?`${u}.`:"";a.append(`${m}x`,"0"),a.append(`${m}y`,"0")}else u&&a.append(u,d)}}else{if(yi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=hi,r=null,o=gi,i=e}return a&&o==="text/plain"&&(i=a,a=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:a,body:i}}var Ey=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Rv={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},zv=/[&><\u2028\u2029]/g;function yp(e){return e.replace(zv,t=>Rv[t])}function su(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ov(e,t,n,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:t&&zt(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function Fv(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){if(console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode&&import.meta.hot)throw n;return window.location.reload(),new Promise(()=>{})}}function Mv(e){return e!=null&&typeof e.page=="string"}function Iv(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Av(e,t,n){let r=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let i=await Fv(a,n);return i.links?i.links():[]}return[]}));return Hv(r.flat(1).filter(Iv).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function wp(e,t,n,r,o,a){let i=(s,u)=>n[u]?s.route.id!==n[u].route.id:!0,l=(s,u)=>n[u].pathname!==s.pathname||n[u].route.path?.endsWith("*")&&n[u].params["*"]!==s.params["*"];return a==="assets"?t.filter((s,u)=>i(s,u)||l(s,u)):a==="data"?t.filter((s,u)=>{let p=r.routes[s.route.id];if(!p||!p.hasLoader)return!1;if(i(s,u)||l(s,u))return!0;if(s.route.shouldRevalidate){let d=s.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function jv(e,t,{includeHydrateFallback:n}={}){return $v(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function $v(e){return[...new Set(e)]}function Uv(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Hv(e,t){let n=new Set,r=new Set(t);return e.reduce((o,a)=>{if(t&&!Mv(a)&&a.as==="script"&&a.href&&r.has(a.href))return o;let l=JSON.stringify(Uv(a));return n.has(l)||(n.add(l),o.push({key:l,link:a})),o},[])}function Hp(){let e=oe.useContext(Vn);return su(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Yv(){let e=oe.useContext(Tr);return su(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Fo=oe.createContext(void 0);Fo.displayName="FrameworkContext";function Bp(){let e=oe.useContext(Fo);return su(e,"You must render this element inside a <HydratedRouter> element"),e}function Qv(e,t){let n=oe.useContext(Fo),[r,o]=oe.useState(!1),[a,i]=oe.useState(!1),{onFocus:l,onBlur:s,onMouseEnter:u,onMouseLeave:p,onTouchStart:d}=t,m=oe.useRef(null);oe.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let g=f=>{f.forEach(c=>{i(c.isIntersecting)})},x=new IntersectionObserver(g,{threshold:.5});return m.current&&x.observe(m.current),()=>{x.disconnect()}}},[e]),oe.useEffect(()=>{if(r){let g=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(g)}}},[r]);let w=()=>{o(!0)},v=()=>{o(!1),i(!1)};return n?e!=="intent"?[a,m,{}]:[a,m,{onFocus:Ro(l,w),onBlur:Ro(s,v),onMouseEnter:Ro(u,w),onMouseLeave:Ro(p,v),onTouchStart:Ro(d,w)}]:[!1,m,{}]}function Ro(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Wp({page:e,...t}){let{router:n}=Hp(),r=oe.useMemo(()=>Zs(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?oe.createElement(Kv,{page:e,matches:r,...t}):null}function Jv(e){let{manifest:t,routeModules:n}=Bp(),[r,o]=oe.useState([]);return oe.useEffect(()=>{let a=!1;return Av(e,t,n).then(i=>{a||o(i)}),()=>{a=!0}},[e,t,n]),r}function Kv({page:e,matches:t,...n}){let r=We(),{future:o,manifest:a,routeModules:i}=Bp(),{basename:l}=Hp(),{loaderData:s,matches:u}=Yv(),p=oe.useMemo(()=>wp(e,t,u,a,r,"data"),[e,t,u,a,r]),d=oe.useMemo(()=>wp(e,t,u,a,r,"assets"),[e,t,u,a,r]),m=oe.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let g=new Set,x=!1;if(t.forEach(c=>{let h=a.routes[c.route.id];!h||!h.hasLoader||(!p.some(b=>b.route.id===c.route.id)&&c.route.id in s&&i[c.route.id]?.shouldRevalidate||h.hasClientLoader?x=!0:g.add(c.route.id))}),g.size===0)return[];let f=Ov(e,l,o.unstable_trailingSlashAwareDataRequests,"data");return x&&g.size>0&&f.searchParams.set("_routes",t.filter(c=>g.has(c.route.id)).map(c=>c.route.id).join(",")),[f.pathname+f.search]},[l,o.unstable_trailingSlashAwareDataRequests,s,r,a,p,t,e,i]),w=oe.useMemo(()=>jv(d,a),[d,a]),v=Jv(d);return oe.createElement(oe.Fragment,null,m.map(g=>oe.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...n})),w.map(g=>oe.createElement("link",{key:g,rel:"modulepreload",href:g,...n})),v.map(({key:g,link:x})=>oe.createElement("link",{key:g,nonce:n.nonce,...x,crossOrigin:x.crossOrigin??n.crossOrigin})))}function Gv(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Xv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xv&&(window.__reactRouterVersion="7.13.1")}catch{}function uu({basename:e,children:t,unstable_useTransitions:n,window:r}){let o=$.useRef();o.current==null&&(o.current=xp({window:r,v5Compat:!0}));let a=o.current,[i,l]=$.useState({action:a.action,location:a.location}),s=$.useCallback(u=>{n===!1?l(u):$.startTransition(()=>l(u))},[n]);return $.useLayoutEffect(()=>a.listen(s),[a,s]),$.createElement(iu,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a,unstable_useTransitions:n})}function Vp({basename:e,children:t,history:n,unstable_useTransitions:r}){let[o,a]=$.useState({action:n.action,location:n.location}),i=$.useCallback(l=>{r===!1?a(l):$.startTransition(()=>a(l))},[r]);return $.useLayoutEffect(()=>n.listen(i),[n,i]),$.createElement(iu,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:n,unstable_useTransitions:r})}Vp.displayName="unstable_HistoryRouter";var Yp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mo=$.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:a,replace:i,unstable_mask:l,state:s,target:u,to:p,preventScrollReset:d,viewTransition:m,unstable_defaultShouldRevalidate:w,...v},g){let{basename:x,navigator:f,unstable_useTransitions:c}=$.useContext(Be),h=typeof p=="string"&&Yp.test(p),b=Pp(p,x);p=b.to;let y=Rp(p,{relative:o}),C=We(),k=null;if(l){let fe=qs(l,[],C.unstable_mask?C.unstable_mask.pathname:"/",!0);x!=="/"&&(fe.pathname=fe.pathname==="/"?x:Rt([x,fe.pathname])),k=f.createHref(fe)}let[N,A,E]=Qv(r,v),Y=Gp(p,{replace:i,unstable_mask:l,state:s,target:u,preventScrollReset:d,relative:o,viewTransition:m,unstable_defaultShouldRevalidate:w,unstable_useTransitions:c});function M(fe){t&&t(fe),fe.defaultPrevented||Y(fe)}let B=!(b.isExternal||a),X=$.createElement("a",{...v,...E,href:(B?k:void 0)||b.absoluteURL||y,onClick:B?M:t,ref:Gv(g,A),target:u,"data-discover":!h&&n==="render"?"true":void 0});return N&&!h?$.createElement($.Fragment,null,X,$.createElement(Wp,{page:y})):X});Mo.displayName="Link";var bn=$.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:a,to:i,viewTransition:l,children:s,...u},p){let d=Or(i,{relative:u.relative}),m=We(),w=$.useContext(Tr),{navigator:v,basename:g}=$.useContext(Be),x=w!=null&&em(d)&&l===!0,f=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,c=m.pathname,h=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(c=c.toLowerCase(),h=h?h.toLowerCase():null,f=f.toLowerCase()),h&&g&&(h=zt(h,g)||h);let b=f!=="/"&&f.endsWith("/")?f.length-1:f.length,y=c===f||!o&&c.startsWith(f)&&c.charAt(b)==="/",C=h!=null&&(h===f||!o&&h.startsWith(f)&&h.charAt(f.length)==="/"),k={isActive:y,isPending:C,isTransitioning:x},N=y?t:void 0,A;typeof r=="function"?A=r(k):A=[r,y?"active":null,C?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let E=typeof a=="function"?a(k):a;return $.createElement(Mo,{...u,"aria-current":N,className:A,ref:p,style:E,to:i,viewTransition:l},typeof s=="function"?s(k):s)});bn.displayName="NavLink";var Qp=$.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:a,method:i=hi,action:l,onSubmit:s,relative:u,preventScrollReset:p,viewTransition:d,unstable_defaultShouldRevalidate:m,...w},v)=>{let{unstable_useTransitions:g}=$.useContext(Be),x=Xp(),f=Zp(l,{relative:u}),c=i.toLowerCase()==="get"?"get":"post",h=typeof l=="string"&&Yp.test(l);return $.createElement("form",{ref:v,method:c,action:f,onSubmit:r?s:y=>{if(s&&s(y),y.defaultPrevented)return;y.preventDefault();let C=y.nativeEvent.submitter,k=C?.getAttribute("formmethod")||i,N=()=>x(C||y.currentTarget,{fetcherKey:t,method:k,navigate:n,replace:o,state:a,relative:u,preventScrollReset:p,viewTransition:d,unstable_defaultShouldRevalidate:m});g&&n!==!1?$.startTransition(()=>N()):N()},...w,"data-discover":!h&&e==="render"?"true":void 0})});Qp.displayName="Form";function Jp({getKey:e,storageKey:t,...n}){let r=$.useContext(Fo),{basename:o}=$.useContext(Be),a=We(),i=au();qp({getKey:e,storageKey:t});let l=$.useMemo(()=>{if(!r||!e)return null;let u=Xs(a,i,o,e);return u!==a.key?u:null},[]);if(!r||r.isSpaMode)return null;let s=((u,p)=>{if(!window.history.state||!window.history.state.key){let d=Math.random().toString(32).slice(2);window.history.replaceState({key:d},"")}try{let m=JSON.parse(sessionStorage.getItem(u)||"{}")[p||window.history.state.key];typeof m=="number"&&window.scrollTo(0,m)}catch(d){console.error(d),sessionStorage.removeItem(u)}}).toString();return $.createElement("script",{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${s})(${yp(JSON.stringify(t||Gs))}, ${yp(JSON.stringify(l))})`}})}Jp.displayName="ScrollRestoration";function Kp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cu(e){let t=$.useContext(Vn);return de(t,Kp(e)),t}function Zv(e){let t=$.useContext(Tr);return de(t,Kp(e)),t}function Gp(e,{target:t,replace:n,unstable_mask:r,state:o,preventScrollReset:a,relative:i,viewTransition:l,unstable_defaultShouldRevalidate:s,unstable_useTransitions:u}={}){let p=Ie(),d=We(),m=Or(e,{relative:i});return $.useCallback(w=>{if(Pv(w,t)){w.preventDefault();let v=n!==void 0?n:Dr(d)===Dr(m),g=()=>p(e,{replace:v,unstable_mask:r,state:o,preventScrollReset:a,relative:i,viewTransition:l,unstable_defaultShouldRevalidate:s});u?$.startTransition(()=>g()):g()}},[d,p,m,n,r,o,t,e,a,i,l,s,u])}var qv=0,ey=()=>`__${String(++qv)}__`;function Xp(){let{router:e}=cu("useSubmit"),{basename:t}=$.useContext(Be),n=xv(),r=e.fetch,o=e.navigate;return $.useCallback(async(a,i={})=>{let{action:l,method:s,encType:u,formData:p,body:d}=Tv(a,t);if(i.navigate===!1){let m=i.fetcherKey||ey();await r(m,n,i.action||l,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:p,body:d,formMethod:i.method||s,formEncType:i.encType||u,flushSync:i.flushSync})}else await o(i.action||l,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:p,body:d,formMethod:i.method||s,formEncType:i.encType||u,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[r,o,t,n])}function Zp(e,{relative:t}={}){let{basename:n}=$.useContext(Be),r=$.useContext(St);de(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),a={...Or(e||".",{relative:t})},i=We();if(e==null){a.search=i.search;let l=new URLSearchParams(a.search),s=l.getAll("index");if(s.some(p=>p==="")){l.delete("index"),s.filter(d=>d).forEach(d=>l.append("index",d));let p=l.toString();a.search=p?`?${p}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:Rt([n,a.pathname])),Dr(a)}var Gs="react-router-scroll-positions",mi={};function Xs(e,t,n,r){let o=null;return r&&(n!=="/"?o=r({...e,pathname:zt(e.pathname,n)||e.pathname},t):o=r(e,t)),o==null&&(o=e.key),o}function qp({getKey:e,storageKey:t}={}){let{router:n}=cu("useScrollRestoration"),{restoreScrollPosition:r,preventScrollReset:o}=Zv("useScrollRestoration"),{basename:a}=$.useContext(Be),i=We(),l=au(),s=Ap();$.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),ty($.useCallback(()=>{if(s.state==="idle"){let u=Xs(i,l,a,e);mi[u]=window.scrollY}try{sessionStorage.setItem(t||Gs,JSON.stringify(mi))}catch(u){pt(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`)}window.history.scrollRestoration="auto"},[s.state,e,a,i,l,t])),typeof document<"u"&&($.useLayoutEffect(()=>{try{let u=sessionStorage.getItem(t||Gs);u&&(mi=JSON.parse(u))}catch{}},[t]),$.useLayoutEffect(()=>{let u=n?.enableScrollRestoration(mi,()=>window.scrollY,e?(p,d)=>Xs(p,d,a,e):void 0);return()=>u&&u()},[n,a,e]),$.useLayoutEffect(()=>{if(r!==!1){if(typeof r=="number"){window.scrollTo(0,r);return}try{if(i.hash){let u=document.getElementById(decodeURIComponent(i.hash.slice(1)));if(u){u.scrollIntoView();return}}}catch{pt(!1,`"${i.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}o!==!0&&window.scrollTo(0,0)}},[i,r,o]))}function ty(e,t){let{capture:n}=t||{};$.useEffect(()=>{let r=n!=null?{capture:n}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,n])}function em(e,{relative:t}={}){let n=$.useContext(eu);de(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=cu("useViewTransitionState"),o=Or(e,{relative:t});if(!n.isTransitioning)return!1;let a=zt(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=zt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return zo(o.pathname,i)!=null||zo(o.pathname,a)!=null}(function(){if(!document.getElementById("c62a888d9d62ae4e611fb1f1c11ec20b6be422d570d7e237577771d161e51220")){var e=document.createElement("style");e.id="c62a888d9d62ae4e611fb1f1c11ec20b6be422d570d7e237577771d161e51220",e.textContent=`/* GLOBAL RESET */
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
  display: inline-block;
  padding: 12px 18px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: 0.2s ease;
  box-shadow: var(--shadow);
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
  justify-content: center;
  align-items: center;
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
`,document.head.appendChild(e)}})();var D=G(Q());var F=G(Q());(function(){if(!document.getElementById("e0effbf012d52a248d477153a26577f119e83cb3bd3a3bea5ba5a3bb920b7280")){var e=document.createElement("style");e.id="e0effbf012d52a248d477153a26577f119e83cb3bd3a3bea5ba5a3bb920b7280",e.textContent=`/* Booking Scheduler Styles */
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
`,document.head.appendChild(e)}})();var rm=Array.from({length:24},(e,t)=>t),Et=e=>e?new Date(e.replace(" ","T").replace(" -","-")):null,Xe=e=>{if(!e)return null;let t=n=>String(n).padStart(2,"0");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":00"},Io=(e,t)=>{let n=Qn(e);return t.filter(r=>{let o=Fr(r?.effective_date),a=Fr(r?.end_date);return!(o&&o>n||a&&a<n)}).sort((r,o)=>Fr(o?.effective_date)-Fr(r?.effective_date))[0]||null},Ao=(e,t,n,r)=>e<r&&n<t;var Qn=e=>{let t=new Date(e);return t.setHours(0,0,0,0),t},Jn=(e,t,n)=>{let r=new Date(e);return r.setHours(t,n,0,0),r},kn=(e,t)=>{let n=new Date(e);return n.setDate(n.getDate()+t),n},wi=e=>e?Et(e).getHours():null,ny=(e,t=[])=>{if(!t.length)return!1;let r=(e.getDay()+6)%7;return t.includes(r)},nm=(e,t,n)=>e>=t&&e<n;var Kn=(e,t)=>new Date(e.getTime()+t*60*1e3);var Fr=e=>{if(!e)return null;let[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},ry=({day:e,hour:t,window:n})=>{if(!n||e<Qn(new Date))return!1;let r=Fr(n.effective_date),o=Fr(n.end_date);if(r&&r>e||o&&o<e||ny(e,n.weekends))return!1;let a=wi(n.start_time),i=wi(n.end_time);if(!nm(t,a,i))return!1;let l=wi(n.break_from),s=wi(n.break_to);return!nm(t,l,s)},om=({day:e,hour:t,windows:n})=>{let r=Io(e,n);return r?ry({day:e,hour:t,window:r}):!1};var Sn=e=>{if(!e)return"";let t=new Date(e);return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`},En=(e,t)=>{let[n,r]=t.split(":").map(Number),o=new Date(e);return o.setHours(n,r,0,0),Xe(o)};function du({service:e,onClose:t,onComplete:n,company_id:r}){let[o,a]=(0,F.useState)(null),[i,l]=(0,F.useState)([]),[s,u]=(0,F.useState)(null),[p,d]=(0,F.useState)(!1),[m,w]=(0,F.useState)(!1),[v,g]=(0,F.useState)({first_name:"",last_name:"",email:"",phone:""}),[x,f]=(0,F.useState)(1),h=(()=>{let M=[],B=new Date;for(let X=0;X<14;X++){let fe=new Date(B);fe.setDate(B.getDate()+X),M.push(fe)}return M})();(0,F.useEffect)(()=>{o&&b()},[o]);let b=async()=>{d(!0);try{let M=o.toISOString().split("T")[0],B=await fetch(`/api/employees/${e.employee.id}/frames?date=${M}&service_id=${e.id}`);if(!B.ok)throw new Error("Failed to fetch slots");let X=await B.json();l(X)}catch(M){console.error("Error fetching slots:",M),l([])}finally{d(!1)}},y=M=>{a(M),u(null),f(2)},C=M=>{u(M),f(3)},k=M=>{g({...v,[M.target.name]:M.target.value})},N=async M=>{M.preventDefault(),w(!0);try{let B=await fetch("/api/clients",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:v.first_name,last_name:v.last_name,email:v.email,phone:v.phone,company_id:r})});if(!B.ok)throw new Error("Failed to create client");let X=await B.json(),fe=new Date(s.from),Nn=new Date(s.to),Ft={employee_id:e.employee.id,service_id:e.id,client_id:X.id,day:Xe(o).split("T")[0],start_time:Xe(fe),end_time:Xe(Nn),price:parseFloat(e.price),state:"scheduled"},Ct=await fetch("/api/time_slots",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ft)});if(!Ct.ok){let _n=await Ct.json();throw new Error(_n.errors||"Failed to create booking")}let Mt=await Ct.json();console.log("Booking created:",Mt),n()}catch(B){console.error("Booking error:",B),alert(`\u041F\u043E\u043C\u0438\u043B\u043A\u0430: ${B.message}`)}finally{w(!1)}},A=M=>{let B=["\u041D\u0434","\u041F\u043D","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041F\u0442","\u0421\u0431"],X=["\u0441\u0456\u0447","\u043B\u044E\u0442","\u0431\u0435\u0440","\u043A\u0432\u0456","\u0442\u0440\u0430","\u0447\u0435\u0440","\u043B\u0438\u043F","\u0441\u0435\u0440","\u0432\u0435\u0440","\u0436\u043E\u0432","\u043B\u0438\u0441","\u0433\u0440\u0443"];return{day:B[M.getDay()],date:M.getDate(),month:X[M.getMonth()]}};function E(M,{decimals:B=0}={}){return new Intl.NumberFormat("uk-UA",{minimumFractionDigits:B,maximumFractionDigits:B}).format(M)+" \u0433\u0440\u043D"}let Y=M=>new Date(M).toLocaleTimeString("uk-UA",{hour:"2-digit",minute:"2-digit"});return F.default.createElement("div",{className:"booking-overlay",onClick:t},F.default.createElement("div",{className:"booking-modal",onClick:M=>M.stopPropagation()},F.default.createElement("button",{className:"booking-close",onClick:t},"\xD7"),F.default.createElement("div",{className:"booking-header"},F.default.createElement("h2",null,"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 ",e.name),F.default.createElement("p",{className:"booking-subtitle"},"\u0437 ",e.employee.first_name," ",e.employee.last_name),F.default.createElement("div",{className:"booking-info"},F.default.createElement("span",null,e.duration," \u0445\u0432"),F.default.createElement("span",null,"\u2022"),F.default.createElement("span",null,E(e.price)))),F.default.createElement("div",{className:"booking-steps"},F.default.createElement("div",{className:`step ${x>=1?"active":""}`},F.default.createElement("span",{className:"step-number"},"1"),F.default.createElement("span",{className:"step-label"},"\u0414\u0430\u0442\u0430")),F.default.createElement("div",{className:`step ${x>=2?"active":""}`},F.default.createElement("span",{className:"step-number"},"2"),F.default.createElement("span",{className:"step-label"},"\u0427\u0430\u0441")),F.default.createElement("div",{className:`step ${x>=3?"active":""}`},F.default.createElement("span",{className:"step-number"},"3"),F.default.createElement("span",{className:"step-label"},"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"))),F.default.createElement("div",{className:"booking-content"},x===1&&F.default.createElement("div",{className:"date-selector"},F.default.createElement("h3",null,"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0430\u0442\u0443"),F.default.createElement("div",{className:"date-grid"},h.map((M,B)=>{let X=A(M),fe=o&&M.toDateString()===o.toDateString();return F.default.createElement("button",{key:B,className:`date-btn ${fe?"selected":""}`,onClick:()=>y(M)},F.default.createElement("span",{className:"date-day"},X.day),F.default.createElement("span",{className:"date-number"},X.date),F.default.createElement("span",{className:"date-month"},X.month))}))),x===2&&F.default.createElement("div",{className:"time-selector"},F.default.createElement("button",{className:"back-btn",onClick:()=>f(1)},"\u2190 \u041D\u0430\u0437\u0430\u0434"),F.default.createElement("h3",null,"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0447\u0430\u0441 \u043D\u0430 ",o&&A(o).date," ",o&&A(o).month),p?F.default.createElement("div",{className:"loading-slots"},F.default.createElement("div",{className:"spinner"}),F.default.createElement("p",null,"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u0441\u043B\u043E\u0442\u0456\u0432...")):i.length>0?F.default.createElement("div",{className:"time-grid"},i.map((M,B)=>F.default.createElement("button",{key:B,className:`time-btn ${s===M?"selected":""}`,onClick:()=>C(M)},Y(M.from)))):F.default.createElement("p",{className:"no-slots"},"\u041D\u0430 \u0446\u0435\u0439 \u0434\u0435\u043D\u044C \u043D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u0441\u043B\u043E\u0442\u0456\u0432")),x===3&&F.default.createElement("div",{className:"client-info"},F.default.createElement("button",{className:"back-btn",onClick:()=>f(2)},"\u2190 \u041D\u0430\u0437\u0430\u0434"),F.default.createElement("h3",null,"\u0412\u0430\u0448\u0456 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456"),F.default.createElement("div",{className:"selected-summary"},F.default.createElement("p",null,F.default.createElement("strong",null,"\u0414\u0430\u0442\u0430:")," ",o&&A(o).date," ",o&&A(o).month),F.default.createElement("p",null,F.default.createElement("strong",null,"\u0427\u0430\u0441:")," ",Y(s.from))),F.default.createElement("form",{onSubmit:N},F.default.createElement("input",{type:"text",name:"first_name",placeholder:"\u0406\u043C'\u044F *",value:v.first_name,onChange:k,required:!0}),F.default.createElement("input",{type:"text",name:"last_name",placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 *",value:v.last_name,onChange:k,required:!0}),F.default.createElement("input",{type:"email",name:"email",placeholder:"Email *",value:v.email,onChange:k,required:!0}),F.default.createElement("input",{type:"tel",name:"phone",placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D *",value:v.phone,onChange:k,required:!0}),F.default.createElement("button",{type:"submit",className:"submit-booking-btn",disabled:m},m?"\u041E\u0431\u0440\u043E\u0431\u043A\u0430...":"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441"))))))}(function(){if(!document.getElementById("4df30cd10977c3dd4650bf5d8f8871fd499bde96b99924c59d53e648c4d93705")){var e=document.createElement("style");e.id="4df30cd10977c3dd4650bf5d8f8871fd499bde96b99924c59d53e648c4d93705",e.textContent=`/* Scoped styles for CompanyWebsite - No conflicts with global app.css */

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
  gap: 2px;
  max-width: 100%;
  height: 500px;
  background: #e5e5e5; /* Gap color */
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
`,document.head.appendChild(e)}})();function fu(){let{companyName:e}=Yn(),[t,n]=(0,D.useState)(null),[r,o]=(0,D.useState)([]),[a,i]=(0,D.useState)(!0),[l,s]=(0,D.useState)(null),[u,p]=(0,D.useState)(null),[d,m]=(0,D.useState)("services"),[w,v]=(0,D.useState)(!1);(0,D.useEffect)(()=>{e&&(async()=>{try{i(!0);let C=await fetch(`/api/companies/${e}`);if(!C.ok)throw new Error("Company not found");let k=await C.json();n(k.company),o(k.employees)}catch(C){s(C.message)}finally{i(!1)}})()},[e]);let g=y=>{p(y),v(!0)},x=()=>{v(!1),p(null)},f=()=>{v(!1),p(null),alert("\u0417\u0430\u043F\u0438\u0441 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E!")};if(a)return D.default.createElement("div",{className:"website-loading"},D.default.createElement("div",{className:"spinner"}),D.default.createElement("p",null,"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."));if(l)return D.default.createElement("div",{className:"website-error"},D.default.createElement("h2",null,"\u{1F614} \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"),D.default.createElement("p",null,l));if(!t)return null;let c=r?.flatMap(y=>y.services?.map(C=>({...C,employee:y}))||[])||[],h=y=>y?parseFloat(y).toFixed(0):"0",b=t.images?t.images.slice(0,3):[];return D.default.createElement("div",{className:"company-website"},D.default.createElement("header",{className:"site-header"},D.default.createElement("div",{className:"header-container"},D.default.createElement("div",{className:"logo-section"},t.logo&&D.default.createElement("img",{src:"/images"+t.logo,alt:t.name,className:"header-logo"}),D.default.createElement("h1",null,t.name)),D.default.createElement("button",{className:"book-now-btn"},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F"))),b.length>0&&D.default.createElement("section",{className:"image-banner"},D.default.createElement("div",{className:"image-banner-container"},b.map((y,C)=>D.default.createElement("div",{key:C,className:"banner-image-wrapper"},D.default.createElement("img",{src:"/images"+y,alt:`${t.name} - \u0444\u043E\u0442\u043E ${C+1}`,className:"banner-image"}))))),D.default.createElement("nav",{className:"tab-navigation"},D.default.createElement("div",{className:"tab-container"},D.default.createElement("button",{className:`tab-btn ${d==="services"?"active":""}`,onClick:()=>m("services")},"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),D.default.createElement("button",{className:`tab-btn ${d==="team"?"active":""}`,onClick:()=>m("team")},"\u041A\u043E\u043C\u0430\u043D\u0434\u0430"),D.default.createElement("button",{className:`tab-btn ${d==="about"?"active":""}`,onClick:()=>m("about")},"\u041F\u0440\u043E \u043D\u0430\u0441"))),D.default.createElement("main",{className:"main-content"},D.default.createElement("div",{className:"content-container"},d==="services"&&D.default.createElement("section",{className:"services-content"},D.default.createElement("h2",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),c.length>0?D.default.createElement("div",{className:"service-list"},c.map((y,C)=>D.default.createElement("div",{key:C,className:"service-item"},D.default.createElement("div",{className:"service-info"},D.default.createElement("h3",{className:"service-name"},y.name),D.default.createElement("p",{className:"service-description"},y.description),D.default.createElement("div",{className:"service-meta"},D.default.createElement("span",{className:"service-duration"},y.duration," \u0445\u0432"),D.default.createElement("span",{className:"service-provider"},"\u0437 ",y.employee.first_name," ",y.employee.last_name))),D.default.createElement("div",{className:"service-booking"},D.default.createElement("div",{className:"service-price"},h(y.price)," \u0433\u0440\u043D"),D.default.createElement("button",{className:"book-service-btn",onClick:()=>g(y)},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F"))))):D.default.createElement("p",{className:"empty-message"},"\u041D\u0430\u0440\u0430\u0437\u0456 \u043D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u043F\u043E\u0441\u043B\u0443\u0433")),d==="team"&&D.default.createElement("section",{className:"team-content"},D.default.createElement("h2",null,"\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430"),r.length>0?D.default.createElement("div",{className:"team-list"},r.map(y=>D.default.createElement("div",{key:y.id,className:"team-item"},D.default.createElement("div",{className:"team-member-info"},D.default.createElement("div",{className:"member-photo"},y.photo?D.default.createElement("img",{src:y.photo,alt:`${y.first_name} ${y.last_name}`}):D.default.createElement("div",{className:"photo-placeholder"},y.first_name[0],y.last_name[0])),D.default.createElement("div",{className:"member-details"},D.default.createElement("h3",null,y.first_name," ",y.last_name),y.description&&D.default.createElement("p",{className:"member-bio"},y.description),y.services&&y.services.length>0&&D.default.createElement("div",{className:"member-services-list"},D.default.createElement("p",{className:"services-label"},"\u0421\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F:"),D.default.createElement("ul",null,y.services.map((C,k)=>D.default.createElement("li",{key:k},C.name))))))))):D.default.createElement("p",{className:"empty-message"},"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u044F")),d==="about"&&D.default.createElement("section",{className:"about-content"},D.default.createElement("h2",null,"\u041F\u0440\u043E \u043D\u0430\u0441"),D.default.createElement("div",{className:"about-details"},D.default.createElement("div",{className:"about-description"},D.default.createElement("h3",null,"\u041E\u043F\u0438\u0441"),D.default.createElement("p",null,t.description||"\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457!")),D.default.createElement("div",{className:"contact-details"},D.default.createElement("h3",null,"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"),t.address&&D.default.createElement("div",{className:"contact-row"},D.default.createElement("span",{className:"contact-label"},"\u0410\u0434\u0440\u0435\u0441\u0430"),D.default.createElement("span",{className:"contact-value"},t.address.street_line1,t.address.street_line2&&`, ${t.address.street_line2}`,D.default.createElement("br",null),t.address.city,", ",t.address.region," ",t.address.postal)),t.phone&&D.default.createElement("div",{className:"contact-row"},D.default.createElement("span",{className:"contact-label"},"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),D.default.createElement("span",{className:"contact-value"},D.default.createElement("a",{href:`tel:${t.phone}`},t.phone))),t.email&&D.default.createElement("div",{className:"contact-row"},D.default.createElement("span",{className:"contact-label"},"Email"),D.default.createElement("span",{className:"contact-value"},D.default.createElement("a",{href:`mailto:${t.email}`},t.email))),t.website&&D.default.createElement("div",{className:"contact-row"},D.default.createElement("span",{className:"contact-label"},"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"),D.default.createElement("span",{className:"contact-value"},D.default.createElement("a",{href:t.website,target:"_blank",rel:"noopener noreferrer"},t.website," ")))))))),D.default.createElement("footer",{className:"site-footer"},D.default.createElement("div",{className:"footer-container"},D.default.createElement("p",null,"\xA9 ",new Date().getFullYear()," ",t.name,". \u0412\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u043E."))),w&&u&&D.default.createElement(du,{service:u,onClose:x,onComplete:f,company_id:t.id}))}var se=G(Q());var P=G(Q());(function(){if(!document.getElementById("359a90f8c729210dbbfb096928392417ed7d6dd27b14727501cfa65f4edc30ad")){var e=document.createElement("style");e.id="359a90f8c729210dbbfb096928392417ed7d6dd27b14727501cfa65f4edc30ad",e.textContent=`.form__error {
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
  padding: 12px 16px;
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
`,document.head.appendChild(e)}})();var xi=["\u041F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0411\u0430\u0440\u0431\u0435\u0440\u0448\u043E\u043F","\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0430 \u043F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0416\u0456\u043D\u043E\u0447\u0430 \u043F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0414\u0438\u0442\u044F\u0447\u0430 \u043F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0421\u0442\u0440\u0438\u0436\u043A\u0430","\u0423\u043A\u043B\u0430\u0434\u043A\u0430 \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041C\u0435\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0411\u0430\u043B\u0430\u044F\u0436","\u041E\u043C\u0431\u0440\u0435","\u0428\u0430\u0442\u0443\u0448","\u041A\u043E\u043B\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041E\u0441\u0432\u0456\u0442\u043B\u0435\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041A\u0435\u0440\u0430\u0442\u0438\u043D\u043E\u0432\u0435 \u0432\u0438\u043F\u0440\u044F\u043C\u043B\u0435\u043D\u043D\u044F","\u0411\u043E\u0442\u043E\u043A\u0441 \u0434\u043B\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041B\u0430\u043C\u0456\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0425\u0456\u043C\u0456\u0447\u043D\u0430 \u0437\u0430\u0432\u0438\u0432\u043A\u0430","\u0411\u0456\u043E\u0437\u0430\u0432\u0438\u0432\u043A\u0430","\u041A\u0430\u0440\u0432\u0456\u043D\u0433","\u0410\u0444\u0440\u043E\u043F\u043B\u0435\u0442\u0456\u043D\u043D\u044F","\u041F\u043B\u0435\u0442\u0456\u043D\u043D\u044F \u043A\u0456\u0441","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0456 \u0437\u0430\u0447\u0456\u0441\u043A\u0438","\u0412\u0435\u0447\u0456\u0440\u043D\u0456 \u0437\u0430\u0447\u0456\u0441\u043A\u0438","\u0414\u0440\u0435\u0434\u0438","\u0411\u0440\u0435\u0439\u0434\u0438","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041A\u0430\u043F\u0441\u0443\u043B\u044C\u043D\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u0421\u0442\u0440\u0456\u0447\u043A\u043E\u0432\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u0440\u0438\u0445\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u043A\u0456\u0440\u0438 \u0433\u043E\u043B\u043E\u0432\u0438","\u041C\u0435\u0437\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041F\u043B\u0430\u0437\u043C\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041C\u0430\u043D\u0456\u043A\u044E\u0440","\u041F\u0435\u0434\u0438\u043A\u044E\u0440","\u0410\u043F\u0430\u0440\u0430\u0442\u043D\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0404\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u041A\u043E\u043C\u0431\u0456\u043D\u043E\u0432\u0430\u043D\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0410\u043F\u0430\u0440\u0430\u0442\u043D\u0438\u0439 \u043F\u0435\u0434\u0438\u043A\u044E\u0440","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u043F\u0435\u0434\u0438\u043A\u044E\u0440","\u041C\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u043F\u0435\u0434\u0438\u043A\u044E\u0440","\u0421\u041F\u0410-\u043C\u0430\u043D\u0456\u043A\u044E\u0440","\u0421\u041F\u0410-\u043F\u0435\u0434\u0438\u043A\u044E\u0440","\u041F\u043E\u043A\u0440\u0438\u0442\u0442\u044F \u0433\u0435\u043B\u044C-\u043B\u0430\u043A\u043E\u043C","\u0417\u043C\u0456\u0446\u043D\u0435\u043D\u043D\u044F \u043D\u0456\u0433\u0442\u0456\u0432","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0456\u0433\u0442\u0456\u0432","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0435\u043B\u0435\u043C","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043A\u0440\u0438\u043B\u043E\u043C","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043D\u0456\u0433\u0442\u0456\u0432","\u0414\u0438\u0437\u0430\u0439\u043D \u043D\u0456\u0433\u0442\u0456\u0432","\u041D\u0435\u0439\u043B-\u0430\u0440\u0442","\u0424\u0440\u0435\u043D\u0447","\u041E\u043C\u0431\u0440\u0435 \u043D\u0430 \u043D\u0456\u0433\u0442\u044F\u0445","\u0421\u0442\u0435\u043C\u043F\u0456\u043D\u0433","\u041F\u0430\u0440\u0430\u0444\u0456\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0440\u0443\u043A","\u041F\u0430\u0440\u0430\u0444\u0456\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u043D\u0456\u0433","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0440\u043E\u0441\u0448\u043E\u0433\u043E \u043D\u0456\u0433\u0442\u044F","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043C\u043E\u0437\u043E\u043B\u0456\u0432","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043D\u0430\u0442\u043E\u043F\u0442\u0438\u0448\u0456\u0432","\u0421\u041F\u0410","\u0421\u041F\u0410-\u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438","\u0425\u0430\u043C\u0430\u043C","\u0422\u0443\u0440\u0435\u0446\u044C\u043A\u0430 \u043B\u0430\u0437\u043D\u044F","\u0424\u0456\u043D\u0441\u044C\u043A\u0430 \u0441\u0430\u0443\u043D\u0430","\u0406\u043D\u0444\u0440\u0430\u0447\u0435\u0440\u0432\u043E\u043D\u0430 \u0441\u0430\u0443\u043D\u0430","\u041A\u0435\u0434\u0440\u043E\u0432\u0430 \u0431\u043E\u0447\u043A\u0430","\u0413\u0456\u0434\u0440\u043E\u043C\u0430\u0441\u0430\u0436","\u0424\u043B\u043E\u0430\u0442\u0438\u043D\u0433","\u0422\u0430\u043B\u0430\u0441\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0410\u0440\u043E\u043C\u0430\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0421\u0442\u043E\u0443\u043D\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041C\u0430\u0441\u0430\u0436","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0420\u043E\u0437\u0441\u043B\u0430\u0431\u043B\u044E\u044E\u0447\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041B\u0456\u043A\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041C\u0430\u0441\u0430\u0436 \u0441\u043F\u0438\u043D\u0438","\u041C\u0430\u0441\u0430\u0436 \u0448\u0438\u0457","\u041C\u0430\u0441\u0430\u0436 \u0433\u043E\u043B\u043E\u0432\u0438","\u041C\u0430\u0441\u0430\u0436 \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u0421\u043A\u0443\u043B\u044C\u043F\u0442\u0443\u0440\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436 \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u0411\u0443\u043A\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041C\u0430\u0441\u0430\u0436 \u0432\u0441\u044C\u043E\u0433\u043E \u0442\u0456\u043B\u0430","\u0410\u043D\u0442\u0438\u0446\u0435\u043B\u044E\u043B\u0456\u0442\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041B\u0456\u043C\u0444\u043E\u0434\u0440\u0435\u043D\u0430\u0436\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0412\u0430\u043A\u0443\u0443\u043C\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041C\u0430\u0441\u0430\u0436 \u0431\u0430\u043D\u043A\u0430\u043C\u0438","\u041C\u0435\u0434\u043E\u0432\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0422\u0430\u0439\u0441\u044C\u043A\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0411\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0410\u044E\u0440\u0432\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0428\u0432\u0435\u0434\u0441\u044C\u043A\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u0428\u0456\u0430\u0446\u0443","\u041C\u0430\u0441\u0430\u0436 \u0433\u0430\u0440\u044F\u0447\u0438\u043C \u043A\u0430\u043C\u0456\u043D\u043D\u044F\u043C","\u041C\u0430\u0441\u0430\u0436 \u0431\u0430\u043C\u0431\u0443\u043A\u043E\u0432\u0438\u043C\u0438 \u043F\u0430\u043B\u0438\u0447\u043A\u0430\u043C\u0438","\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","\u041C\u0430\u0441\u0430\u0436 \u0434\u043B\u044F \u0432\u0430\u0433\u0456\u0442\u043D\u0438\u0445","\u041F\u043E\u0441\u0442\u0456\u0437\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u043D\u0430 \u0440\u0435\u043B\u0430\u043A\u0441\u0430\u0446\u0456\u044F","\u041C\u0456\u043E\u0444\u0430\u0441\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u043B\u0456\u0437","\u041E\u0441\u0442\u0435\u043E\u043F\u0430\u0442\u0456\u044F","\u041C\u0430\u043D\u0443\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0425\u0456\u0440\u043E\u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430","\u0420\u0435\u0444\u043B\u0435\u043A\u0441\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0406\u0433\u043B\u043E\u0440\u0435\u0444\u043B\u0435\u043A\u0441\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0410\u043A\u0443\u043F\u0443\u043D\u043A\u0442\u0443\u0440\u0430","\u0412\u0456\u0441\u0446\u0435\u0440\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u0427\u0438\u0441\u0442\u043A\u0430 \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u041C\u0435\u0445\u0430\u043D\u0456\u0447\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u0412\u0430\u043A\u0443\u0443\u043C\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u0410\u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u041A\u043E\u043C\u0431\u0456\u043D\u043E\u0432\u0430\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","\u041F\u0456\u043B\u0456\u043D\u0433","\u0425\u0456\u043C\u0456\u0447\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041C\u0435\u0445\u0430\u043D\u0456\u0447\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041B\u0430\u0437\u0435\u0440\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u0420\u0435\u0442\u0438\u043D\u043E\u0454\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u0413\u043B\u0456\u043A\u043E\u043B\u0435\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041C\u0438\u0433\u0434\u0430\u043B\u0435\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041C\u043E\u043B\u043E\u0447\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u0421\u0430\u043B\u0456\u0446\u0438\u043B\u043E\u0432\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041F\u0420\u0425-\u043F\u0456\u043B\u0456\u043D\u0433","\u0414\u0436\u0435\u0441\u0441\u043D\u0435\u0440\u0430 \u043F\u0456\u043B\u0456\u043D\u0433","\u0410\u043B\u043C\u0430\u0437\u043D\u0438\u0439 \u043F\u0456\u043B\u0456\u043D\u0433","\u041A\u043E\u0440\u0430\u043B\u043E\u0432\u0430 \u0448\u043B\u0456\u0444\u043E\u0432\u043A\u0430","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u043E\u0431\u043B\u0438\u0447\u0447\u044F\u043C","\u0417\u0432\u043E\u043B\u043E\u0436\u0443\u044E\u0447\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u0416\u0438\u0432\u0438\u043B\u044C\u043D\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u041E\u0447\u0438\u0449\u0443\u044E\u0447\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u041F\u0440\u043E\u0442\u0438\u0437\u0430\u043F\u0430\u043B\u044C\u043D\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u041F\u0440\u043E\u0442\u0438\u0441\u0442\u0430\u0440\u0456\u043D\u0433\u043E\u0432\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u041B\u0456\u0444\u0442\u0438\u043D\u0433-\u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430","\u0410\u043B\u044C\u0433\u0456\u043D\u0430\u0442\u043D\u0430 \u043C\u0430\u0441\u043A\u0430","\u041A\u043E\u043B\u0430\u0433\u0435\u043D\u043E\u0432\u0430 \u043C\u0430\u0441\u043A\u0430","\u0412\u0443\u0433\u0456\u043B\u044C\u043D\u0430 \u043C\u0430\u0441\u043A\u0430","\u0417\u043E\u043B\u043E\u0442\u0430 \u043C\u0430\u0441\u043A\u0430","\u0421\u0440\u0456\u0431\u043D\u0430 \u043C\u0430\u0441\u043A\u0430","\u0411\u0456\u043E\u0446\u0435\u043B\u044E\u043B\u043E\u0437\u043D\u0430 \u043C\u0430\u0441\u043A\u0430","\u041F\u0430\u0440\u0430\u0444\u0456\u043D\u043E\u0432\u0430 \u043C\u0430\u0441\u043A\u0430","\u0406\u043D'\u0454\u043A\u0446\u0456\u0457 \u043A\u0440\u0430\u0441\u0438","\u0411\u043E\u0442\u043E\u043A\u0441","\u0414\u0438\u0441\u043F\u043E\u0440\u0442","\u041A\u0441\u0435\u043E\u043C\u0456\u043D","\u0424\u0456\u043B\u0435\u0440\u0438","\u0413\u0456\u0430\u043B\u0443\u0440\u043E\u043D\u043E\u0432\u0430 \u043A\u0438\u0441\u043B\u043E\u0442\u0430","\u041A\u043E\u043D\u0442\u0443\u0440\u043D\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0417\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u043D\u044F \u0433\u0443\u0431","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043D\u043E\u0441\u043E\u0433\u0443\u0431\u043D\u0438\u0445 \u0441\u043A\u043B\u0430\u0434\u043E\u043A","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043D\u043E\u0441\u0430","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043F\u0456\u0434\u0431\u043E\u0440\u0456\u0434\u0434\u044F","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0441\u043A\u0443\u043B","\u0411\u0456\u043E\u0440\u0435\u0432\u0456\u0442\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u041C\u0435\u0437\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u041F\u043B\u0430\u0437\u043C\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u041F\u043B\u0430\u0437\u043C\u043E\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0411\u0456\u043E\u0430\u0440\u043C\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u0435\u0434\u0435\u0440\u043C\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0411\u0456\u043E\u0440\u0435\u043F\u0430\u0440\u0430\u0446\u0456\u044F","\u041F\u043E\u043B\u0456\u0444\u043E\u0441\u0444\u0430\u0442\u043D\u0456 \u043D\u0438\u0442\u043A\u0438","\u041C\u0435\u0437\u043E\u043D\u0438\u0442\u043A\u0438","\u041D\u0438\u0442\u043A\u043E\u0432\u0438\u0439 \u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0410\u043F\u0430\u0440\u0430\u0442\u043D\u0430 \u043A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F","RF-\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0420\u0430\u0434\u0456\u043E\u0447\u0430\u0441\u0442\u043E\u0442\u043D\u0438\u0439 \u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0438\u0439 SMAS-\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0438\u0439 \u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0424\u043E\u043D\u043E\u0444\u043E\u0440\u0435\u0437","\u041C\u0456\u043A\u0440\u043E\u0441\u0442\u0440\u0443\u043C\u043E\u0432\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0414\u0430\u0440\u0441\u043E\u043D\u0432\u0430\u043B\u044C","\u041C\u0456\u043E\u0441\u0442\u0438\u043C\u0443\u043B\u044F\u0446\u0456\u044F","\u0413\u0430\u043B\u044C\u0432\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F","\u0406\u043E\u043D\u043E\u0444\u043E\u0440\u0435\u0437","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u043E\u0440\u0430\u0446\u0456\u044F","\u041A\u0440\u0456\u043E\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u041A\u0440\u0456\u043E\u043C\u0430\u0441\u0430\u0436","\u0412\u0430\u043A\u0443\u0443\u043C\u043D\u043E-\u0440\u043E\u043B\u0438\u043A\u043E\u0432\u0438\u0439 \u043C\u0430\u0441\u0430\u0436","LPG-\u043C\u0430\u0441\u0430\u0436","\u041A\u0430\u0432\u0456\u0442\u0430\u0446\u0456\u044F","\u041B\u0456\u043F\u043E\u043B\u0456\u0437","\u041F\u0440\u0435\u0441\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041B\u0456\u043C\u0444\u043E\u0434\u0440\u0435\u043D\u0430\u0436 \u0430\u043F\u0430\u0440\u0430\u0442\u043D\u0438\u0439","\u041B\u0430\u0437\u0435\u0440\u043D\u0456 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438","\u041B\u0430\u0437\u0435\u0440\u043D\u0435 \u043E\u043C\u043E\u043B\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u041B\u0430\u0437\u0435\u0440\u043D\u0430 \u0431\u0456\u043E\u0440\u0435\u0432\u0456\u0442\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0424\u0440\u0430\u043A\u0446\u0456\u0439\u043D\u0438\u0439 \u043B\u0430\u0437\u0435\u0440","\u041B\u0430\u0437\u0435\u0440\u043D\u0438\u0439 \u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0424\u043E\u0442\u043E\u043E\u043C\u043E\u043B\u043E\u0434\u0436\u0435\u043D\u043D\u044F","IPL-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0421\u0432\u0456\u0442\u043B\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","LED-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041A\u0438\u0441\u043D\u0435\u0432\u0456 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438","\u041A\u0438\u0441\u043D\u0435\u0432\u0438\u0439 \u043A\u0443\u043F\u043E\u043B","\u041E\u043A\u0441\u0438\u0433\u0435\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041A\u0430\u0440\u0431\u043E\u043A\u0441\u0438\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041E\u0437\u043E\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0456\u0440\u0443\u0434\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F'\u044F\u0432\u043A\u0430\u043C\u0438","\u0410\u043F\u0456\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0422\u0430\u0442\u0443\u0430\u0436","\u041F\u0435\u0440\u043C\u0430\u043D\u0435\u043D\u0442\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0422\u0430\u0442\u0443\u0430\u0436 \u0431\u0440\u0456\u0432","\u041F\u0443\u0434\u0440\u043E\u0432\u0456 \u0431\u0440\u043E\u0432\u0438","\u0412\u043E\u043B\u043E\u0441\u043A\u043E\u0432\u0430 \u0442\u0435\u0445\u043D\u0456\u043A\u0430","\u041E\u043C\u0431\u0440\u0435 \u0431\u0440\u043E\u0432\u0438","\u0422\u0430\u0442\u0443\u0430\u0436 \u0433\u0443\u0431","\u0410\u043A\u0432\u0430\u0440\u0435\u043B\u044C\u043D\u0456 \u0433\u0443\u0431\u0438","\u041A\u043E\u043D\u0442\u0443\u0440 \u0433\u0443\u0431","\u0422\u0430\u0442\u0443\u0430\u0436 \u043E\u0447\u0435\u0439","\u041C\u0456\u0436\u0432\u0456\u0439\u043D\u0438\u0439 \u043F\u0440\u043E\u0441\u0442\u0456\u0440","\u0421\u0442\u0440\u0456\u043B\u043A\u0438","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0442\u0430\u0442\u0443\u0430\u0436\u0443","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0442\u0430\u0442\u0443\u0430\u0436\u0443","\u0411\u0440\u043E\u0432\u0438 \u0442\u0430 \u0432\u0456\u0457","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0431\u0440\u0456\u0432","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0440\u0456\u0432","\u041B\u0430\u043C\u0456\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0440\u0456\u0432","\u0410\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \u0431\u0440\u0456\u0432","\u0411\u0456\u043E\u0442\u0430\u0442\u0443\u0430\u0436 \u0431\u0440\u0456\u0432","\u0425\u043D\u0430 \u0434\u043B\u044F \u0431\u0440\u0456\u0432","\u0414\u043E\u0432\u0433\u043E\u0442\u0440\u0438\u0432\u0430\u043B\u0430 \u0443\u043A\u043B\u0430\u0434\u043A\u0430 \u0431\u0440\u0456\u0432","\u041D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0439","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","2D \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","3D \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u041E\u0431'\u0454\u043C\u043D\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u041C\u0435\u0433\u0430-\u043E\u0431'\u0454\u043C","\u0413\u043E\u043B\u043B\u0456\u0432\u0443\u0434\u0441\u044C\u043A\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0435 \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0432\u0456\u0439","\u0417\u043D\u044F\u0442\u0442\u044F \u0432\u0456\u0439","\u041B\u0430\u043C\u0456\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0439","\u0411\u043E\u0442\u043E\u043A\u0441 \u0432\u0456\u0439","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0439","\u0425\u0456\u043C\u0456\u0447\u043D\u0430 \u0437\u0430\u0432\u0438\u0432\u043A\u0430 \u0432\u0456\u0439","\u0411\u0456\u043E\u0437\u0430\u0432\u0438\u0432\u043A\u0430 \u0432\u0456\u0439","\u041B\u0456\u0444\u0442\u0438\u043D\u0433 \u0432\u0456\u0439","\u0415\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0412\u043E\u0441\u043A\u043E\u0432\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0412\u0430\u043A\u0441\u0438\u043D\u0433","\u0428\u0443\u0433\u0430\u0440\u0456\u043D\u0433","\u0426\u0443\u043A\u0440\u043E\u0432\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u041B\u0430\u0437\u0435\u0440\u043D\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0414\u0456\u043E\u0434\u043D\u0430 \u043B\u0430\u0437\u0435\u0440\u043D\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0438\u0442\u043E\u0432\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0424\u043E\u0442\u043E\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0415\u043F\u0456\u043B\u044F\u0446\u0456\u044F \u043D\u0438\u0442\u043A\u043E\u044E","\u0422\u0440\u0438\u0434\u0456\u043D\u0433","ELOS-\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","AFT-\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0415\u043D\u0437\u0438\u043C\u043D\u0430 \u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0414\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043D\u0435\u0431\u0430\u0436\u0430\u043D\u043E\u0433\u043E \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0421\u043E\u043B\u044F\u0440\u0456\u0439","\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u043E\u043B\u044F\u0440\u0456\u0439","\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u043E\u043B\u044F\u0440\u0456\u0439","\u0422\u0443\u0440\u0431\u043E\u0441\u043E\u043B\u044F\u0440\u0456\u0439","\u0417\u0430\u0441\u043C\u0430\u0433\u0430","\u0410\u0432\u0442\u043E\u0437\u0430\u0441\u043C\u0430\u0433\u0430","\u0421\u043F\u0440\u0435\u0439-\u0437\u0430\u0441\u043C\u0430\u0433\u0430","\u041C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430 \u0437\u0430\u0441\u043C\u0430\u0433\u0430","\u0411\u0440\u043E\u043D\u0437\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0456\u043B\u0430","\u0424\u0456\u0442\u043D\u0435\u0441","\u0422\u0440\u0435\u043D\u0430\u0436\u0435\u0440\u043D\u0430 \u0437\u0430\u043B\u0430","\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0413\u0440\u0443\u043F\u043E\u0432\u0456 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0424\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0442\u0440\u0435\u043D\u0456\u043D\u0433","\u041A\u0440\u043E\u0441\u0444\u0456\u0442","CrossFit","\u0411\u043E\u0434\u0456\u0431\u0456\u043B\u0434\u0438\u043D\u0433","\u041F\u0430\u0443\u0435\u0440\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u0412\u0430\u0436\u043A\u0430 \u0430\u0442\u043B\u0435\u0442\u0438\u043A\u0430","\u041A\u0430\u0440\u0434\u0456\u043E\u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0421\u0438\u043B\u043E\u0432\u0456 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u041A\u0440\u0443\u0433\u043E\u0432\u0438\u0439 \u0442\u0440\u0435\u043D\u0456\u043D\u0433","\u0406\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u0456 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F","HIIT","\u0422\u0430\u0431\u0430\u0442\u0430","\u0417\u0443\u043C\u0431\u0430","\u0410\u0435\u0440\u043E\u0431\u0456\u043A\u0430","\u0421\u0442\u0435\u043F-\u0430\u0435\u0440\u043E\u0431\u0456\u043A\u0430","\u0410\u043A\u0432\u0430-\u0430\u0435\u0440\u043E\u0431\u0456\u043A\u0430","\u0410\u043A\u0432\u0430\u0444\u0456\u0442\u043D\u0435\u0441","\u0410\u043A\u0432\u0430\u0433\u0456\u043C\u043D\u0430\u0441\u0442\u0438\u043A\u0430","\u0419\u043E\u0433\u0430","\u0425\u0430\u0442\u0445\u0430-\u0439\u043E\u0433\u0430","\u0412\u0456\u043D\u044C\u044F\u0441\u0430-\u0439\u043E\u0433\u0430","\u0410\u0448\u0442\u0430\u043D\u0433\u0430-\u0439\u043E\u0433\u0430","\u041A\u0443\u043D\u0434\u0430\u043B\u0456\u043D\u0456-\u0439\u043E\u0433\u0430","\u0411\u0456\u043A\u0440\u0430\u043C-\u0439\u043E\u0433\u0430","\u0413\u0430\u0440\u044F\u0447\u0430 \u0439\u043E\u0433\u0430","\u0406\u043D\u044C-\u0439\u043E\u0433\u0430","\u0419\u043E\u0433\u0430-\u043D\u0456\u0434\u0440\u0430","\u0424\u043B\u0430\u0439-\u0439\u043E\u0433\u0430","\u041F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0430 \u0439\u043E\u0433\u0430","\u0410\u043D\u0442\u0456\u0433\u0440\u0430\u0432\u0456\u0442\u0430\u0446\u0456\u0439\u043D\u0430 \u0439\u043E\u0433\u0430","\u041F\u0456\u043B\u0430\u0442\u0435\u0441","\u041A\u0430\u043B\u043B\u0430\u043D\u0435\u0442\u0438\u043A\u0430","\u0421\u0442\u0440\u0435\u0442\u0447\u0438\u043D\u0433","\u0420\u043E\u0437\u0442\u044F\u0436\u043A\u0430","\u0428\u043F\u0430\u0433\u0430\u0442","\u0411\u043E\u0434\u0456\u0444\u043B\u0435\u043A\u0441","\u041E\u043A\u0441\u0456\u0441\u0430\u0439\u0437","\u0422\u0420\u0425","\u0424\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0442\u0440\u0435\u043D\u0456\u043D\u0433 \u0437 \u043F\u0435\u0442\u043B\u044F\u043C\u0438","\u041A\u0456\u043A\u0431\u043E\u043A\u0441\u0438\u043D\u0433","\u0411\u043E\u043A\u0441","\u0422\u0430\u0439\u0441\u044C\u043A\u0438\u0439 \u0431\u043E\u043A\u0441","\u041C\u0443\u0430\u0439 \u0422\u0430\u0439","\u041C\u041C\u0410","\u0417\u043C\u0456\u0448\u0430\u043D\u0456 \u0431\u043E\u0439\u043E\u0432\u0456 \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432\u0430","\u041A\u0430\u0440\u0430\u0442\u0435","\u0422\u0445\u0435\u043A\u0432\u043E\u043D\u0434\u043E","\u0414\u0437\u044E\u0434\u043E","\u0421\u0430\u043C\u0431\u043E","\u0410\u0439\u043A\u0456\u0434\u043E","\u041A\u0430\u043F\u043E\u0435\u0439\u0440\u0430","\u0422\u0430\u043D\u0446\u0456","\u0411\u0430\u043B\u044C\u043D\u0456 \u0442\u0430\u043D\u0446\u0456","\u0421\u0430\u043B\u044C\u0441\u0430","\u0411\u0430\u0447\u0430\u0442\u0430","\u041A\u0456\u0437\u043E\u043C\u0431\u0430","\u0422\u0432\u0435\u0440\u043A","\u0411\u043E\u0434\u0456-\u0431\u0430\u043B\u0435\u0442","\u0417\u0443\u043C\u0431\u0430","\u0421\u0442\u0440\u0438\u043F-\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","Pole dance","\u0422\u0430\u043D\u0435\u0446\u044C \u043D\u0430 \u043F\u0456\u043B\u043E\u043D\u0456","\u0421\u0445\u0456\u0434\u043D\u0456 \u0442\u0430\u043D\u0446\u0456","\u0422\u0430\u043D\u0435\u0446\u044C \u0436\u0438\u0432\u043E\u0442\u0430","\u0421\u0443\u0447\u0430\u0441\u043D\u0456 \u0442\u0430\u043D\u0446\u0456","\u0425\u0456\u043F-\u0445\u043E\u043F","\u0411\u0440\u0435\u0439\u043A-\u0434\u0430\u043D\u0441","\u041A\u043E\u043D\u0442\u0435\u043C\u043F\u043E\u0440\u0430\u0440\u0456","\u0414\u0436\u0430\u0437-\u0444\u0430\u043D\u043A","\u0411\u0430\u0441\u0435\u0439\u043D","\u041F\u043B\u0430\u0432\u0430\u043D\u043D\u044F","\u0410\u043A\u0432\u0430-\u0430\u0435\u0440\u043E\u0431\u0456\u043A\u0430","\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u043F\u043B\u0430\u0432\u0430\u043D\u043D\u044E","\u0414\u0438\u0442\u044F\u0447\u0435 \u043F\u043B\u0430\u0432\u0430\u043D\u043D\u044F","\u0413\u0440\u0443\u0434\u043D\u0438\u0447\u043A\u043E\u0432\u0435 \u043F\u043B\u0430\u0432\u0430\u043D\u043D\u044F","\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u0435 \u043F\u043B\u0430\u0432\u0430\u043D\u043D\u044F","\u0421\u0430\u0443\u043D\u0430","\u0424\u0456\u043D\u0441\u044C\u043A\u0430 \u0441\u0430\u0443\u043D\u0430","\u0420\u043E\u0441\u0456\u0439\u0441\u044C\u043A\u0430 \u043B\u0430\u0437\u043D\u044F","\u0422\u0443\u0440\u0435\u0446\u044C\u043A\u0430 \u043B\u0430\u0437\u043D\u044F","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0430 \u043B\u0430\u0437\u043D\u044F","\u041E\u0444\u0443\u0440\u043E","\u041F\u0430\u0440\u0438\u043B\u044C\u043D\u044F","\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u0422\u0435\u0440\u0430\u043F\u0435\u0432\u0442\u0438\u0447\u043D\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0430\u0440\u0456\u0454\u0441\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0443\u043B\u044C\u043F\u0456\u0442\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0435\u0440\u0456\u043E\u0434\u043E\u043D\u0442\u0438\u0442\u0443","\u0415\u043D\u0434\u043E\u0434\u043E\u043D\u0442\u0438\u0447\u043D\u0435 \u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u043B\u043E\u043C\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u0437\u0443\u0431\u0456\u0432","\u0425\u0443\u0434\u043E\u0436\u043D\u044F \u0440\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F","\u0415\u0441\u0442\u0435\u0442\u0438\u0447\u043D\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u0425\u0456\u0440\u0443\u0440\u0433\u0456\u0447\u043D\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0443\u0431\u0430 \u043C\u0443\u0434\u0440\u043E\u0441\u0442\u0456","\u0421\u043A\u043B\u0430\u0434\u043D\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F","\u0420\u0435\u0437\u0435\u043A\u0446\u0456\u044F \u0432\u0435\u0440\u0445\u0456\u0432\u043A\u0438 \u043A\u043E\u0440\u0435\u043D\u044F","\u0426\u0438\u0441\u0442\u0435\u043A\u0442\u043E\u043C\u0456\u044F","\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u044F\u0441\u0435\u043D","\u0406\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F \u0437\u0443\u0431\u0456\u0432","\u041E\u0434\u043D\u043E\u043C\u043E\u043C\u0435\u043D\u0442\u043D\u0430 \u0456\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F","\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0430 \u0456\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F","\u0411\u0430\u0437\u0430\u043B\u044C\u043D\u0430 \u0456\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F","All-on-4","All-on-6","\u0421\u0438\u043D\u0443\u0441-\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u041A\u0456\u0441\u0442\u043A\u043E\u0432\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041E\u0440\u0442\u043E\u043F\u0435\u0434\u0438\u0447\u043D\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041F\u0440\u043E\u0442\u0435\u0437\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u041A\u043E\u0440\u043E\u043D\u043A\u0438","\u041C\u0435\u0442\u0430\u043B\u043E\u043A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0456 \u043A\u043E\u0440\u043E\u043D\u043A\u0438","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0456 \u043A\u043E\u0440\u043E\u043D\u043A\u0438","\u0426\u0438\u0440\u043A\u0443\u043B\u044F\u0440\u043D\u0456 \u043A\u043E\u0440\u043E\u043D\u043A\u0438","\u0412\u0456\u043D\u0456\u0440\u0438","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0456 \u0432\u0456\u043D\u0456\u0440\u0438","\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043D\u0456 \u0432\u0456\u043D\u0456\u0440\u0438","\u041B\u044E\u043C\u0456\u043D\u0456\u0440\u0438","\u041C\u043E\u0441\u0442\u0438","\u0417\u043D\u0456\u043C\u043D\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u0427\u0430\u0441\u0442\u043A\u043E\u0432\u043E \u0437\u043D\u0456\u043C\u043D\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u041F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0437\u043D\u0456\u043C\u043D\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u0411\u044E\u0433\u0435\u043B\u044C\u043D\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u041D\u0435\u0439\u043B\u043E\u043D\u043E\u0432\u0456 \u043F\u0440\u043E\u0442\u0435\u0437\u0438","\u041F\u0440\u043E\u0442\u0435\u0437\u0438 \u043D\u0430 \u0456\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u0445","\u041E\u0440\u0442\u043E\u0434\u043E\u043D\u0442\u0456\u044F","\u0412\u0438\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u043A\u0443\u0441\u0443","\u0411\u0440\u0435\u043A\u0435\u0442\u0438","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u0421\u0430\u043F\u0444\u0456\u0440\u043E\u0432\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u041B\u0456\u043D\u0433\u0432\u0430\u043B\u044C\u043D\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u0421\u0430\u043C\u043E\u043B\u0456\u0433\u0443\u044E\u0447\u0456 \u0431\u0440\u0435\u043A\u0435\u0442\u0438","\u0415\u043B\u0430\u0439\u043D\u0435\u0440\u0438","Invisalign","\u041A\u0430\u043F\u0438 \u0434\u043B\u044F \u0432\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F","\u041F\u043B\u0430\u0441\u0442\u0438\u043D\u043A\u0438","\u0422\u0440\u0435\u0439\u043D\u0435\u0440\u0438","\u041F\u0430\u0440\u043E\u0434\u043E\u043D\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u044F\u0441\u0435\u043D","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u0434\u043E\u043D\u0442\u0438\u0442\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u0434\u043E\u043D\u0442\u043E\u0437\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0456\u043D\u0433\u0456\u0432\u0456\u0442\u0443","\u041A\u044E\u0440\u0435\u0442\u0430\u0436","\u0428\u0438\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0412\u0435\u043A\u0442\u043E\u0440-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0456\u0433\u0456\u0454\u043D\u0430 \u043F\u043E\u0440\u043E\u0436\u043D\u0438\u043D\u0438 \u0440\u043E\u0442\u0430","\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0430 \u0447\u0438\u0441\u0442\u043A\u0430 \u0437\u0443\u0431\u0456\u0432","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430 \u0447\u0438\u0441\u0442\u043A\u0430","Air Flow","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0424\u0442\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0412\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u041A\u0430\u0431\u0456\u043D\u0435\u0442\u043D\u0435 \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","Zoom \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u041B\u0430\u0437\u0435\u0440\u043D\u0435 \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u0425\u0456\u043C\u0456\u0447\u043D\u0435 \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u0414\u043E\u043C\u0430\u0448\u043D\u0454 \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u0414\u0438\u0442\u044F\u0447\u0430 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u043B\u043E\u0447\u043D\u0438\u0445 \u0437\u0443\u0431\u0456\u0432","\u0413\u0435\u0440\u043C\u0435\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u0444\u0456\u0441\u0443\u0440","\u0424\u0442\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0438\u0442\u044F\u0447\u0438\u0445 \u0437\u0443\u0431\u0456\u0432","\u0421\u0440\u0456\u0431\u043B\u0456\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u041F\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u0430 \u0445\u0456\u0440\u0443\u0440\u0433\u0456\u044F","\u0420\u0438\u043D\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0411\u043B\u0435\u0444\u0430\u0440\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041E\u0442\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041C\u0435\u043D\u0442\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041B\u0456\u043F\u043E\u0441\u0430\u043A\u0446\u0456\u044F","\u0410\u0431\u0434\u043E\u043C\u0456\u043D\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u043E\u0431\u043B\u0438\u0447\u0447\u044F","\u0424\u0435\u0439\u0441\u043B\u0456\u0444\u0442\u0438\u043D\u0433","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u0448\u0438\u0457","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u043B\u043E\u0431\u0430","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u0441\u0442\u0435\u0433\u043E\u043D","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u0440\u0443\u043A","\u0417\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u043D\u044F \u0433\u0440\u0443\u0434\u0435\u0439","\u0417\u043C\u0435\u043D\u0448\u0435\u043D\u043D\u044F \u0433\u0440\u0443\u0434\u0435\u0439","\u041F\u0456\u0434\u0442\u044F\u0436\u043A\u0430 \u0433\u0440\u0443\u0434\u0435\u0439","\u041C\u0430\u0441\u0442\u043E\u043F\u0435\u043A\u0441\u0456\u044F","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0441\u043E\u0441\u043A\u0456\u0432","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0430\u0440\u0435\u043E\u043B","\u0417\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u043D\u044F \u0441\u0456\u0434\u043D\u0438\u0446\u044C","\u0413\u043B\u044E\u0442\u0435\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0406\u043D\u0442\u0438\u043C\u043D\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u041B\u0430\u0431\u0456\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0412\u0430\u0433\u0456\u043D\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430","\u0414\u0435\u0440\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043A\u043D\u0435","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0443\u0433\u0440\u0456\u0432","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u0442\u0430\u043A\u043D\u0435","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0440\u043E\u0437\u0430\u0446\u0435\u0430","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u043F\u0435\u0440\u043E\u0437\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0435\u0440\u043C\u0430\u0442\u0438\u0442\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0435\u043A\u0437\u0435\u043C\u0438","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0441\u043E\u0440\u0456\u0430\u0437\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0442\u0438\u043B\u0456\u0433\u043E","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043D\u043E\u0432\u043E\u0443\u0442\u0432\u043E\u0440\u0435\u043D\u044C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0431\u043E\u0440\u043E\u0434\u0430\u0432\u043E\u043A","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u043F\u0456\u043B\u043E\u043C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0440\u043E\u0434\u0438\u043C\u043E\u043A","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0430\u0442\u0435\u0440\u043E\u043C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043B\u0456\u043F\u043E\u043C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043C\u0456\u043B\u0456\u0439","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0440\u0438\u0431\u043A\u0430","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u043D\u0456\u0445\u043E\u043C\u0456\u043A\u043E\u0437\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0456\u043A\u043E\u0437\u0443 \u0441\u0442\u043E\u043F","\u0414\u0435\u0440\u043C\u0430\u0442\u043E\u0441\u043A\u043E\u043F\u0456\u044F","\u0422\u0440\u0438\u0445\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043B\u043E\u043F\u0435\u0446\u0456\u0457","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0431\u043B\u0438\u0441\u0456\u043D\u043D\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0435\u0431\u043E\u0440\u0435\u0457","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043B\u0443\u043F\u0438","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0438\u043F\u0430\u0434\u0456\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0422\u0440\u0438\u0445\u043E\u0441\u043A\u043E\u043F\u0456\u044F","PRP-\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u041C\u0435\u0437\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F \u0448\u043A\u0456\u0440\u0438 \u0433\u043E\u043B\u043E\u0432\u0438","\u041F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0430 \u0432\u043E\u043B\u043E\u0441\u0441\u044F","\u0422\u0440\u0430\u043D\u0441\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0456\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F","FUE \u043C\u0435\u0442\u043E\u0434","FUT \u043C\u0435\u0442\u043E\u0434","\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0456\u044F","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0430","\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0430 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0440\u0443\u043F\u043E\u0432\u0430 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0421\u0456\u043C\u0435\u0439\u043D\u0430 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041F\u043E\u0434\u0440\u0443\u0436\u043D\u044F \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433","\u041F\u0456\u0434\u043B\u0456\u0442\u043A\u043E\u0432\u0438\u0439 \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433","\u041A\u043E\u0433\u043D\u0456\u0442\u0438\u0432\u043D\u043E-\u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u043E\u0432\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0435\u0448\u0442\u0430\u043B\u044C\u0442-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041F\u0441\u0438\u0445\u043E\u0430\u043D\u0430\u043B\u0456\u0437","\u0410\u0440\u0442-\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041F\u0456\u0441\u043E\u0447\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041A\u0430\u0437\u043A\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0406\u0433\u0440\u043E\u0432\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0456\u043F\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041D\u041B\u041F","\u041A\u043E\u0443\u0447\u0438\u043D\u0433","\u0411\u0456\u0437\u043D\u0435\u0441-\u043A\u043E\u0443\u0447\u0438\u043D\u0433","\u041B\u0430\u0439\u0444-\u043A\u043E\u0443\u0447\u0438\u043D\u0433","\u041A\u0430\u0440'\u0454\u0440\u043D\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0440\u043E\u0444\u043E\u0440\u0456\u0454\u043D\u0442\u0430\u0446\u0456\u044F","\u0421\u0435\u043A\u0441\u043E\u043B\u043E\u0433\u0456\u044F","\u041D\u0430\u0440\u043A\u043E\u043B\u043E\u0433","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u0456\u0437\u043C\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430\u0440\u043A\u043E\u043C\u0430\u043D\u0456\u0457","\u041A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0456\u0454\u0442\u043E\u043B\u043E\u0433\u0456\u044F","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u0434\u0456\u0454\u0442\u043E\u043B\u043E\u0433\u0430","\u0421\u0445\u0443\u0434\u043D\u0435\u043D\u043D\u044F","\u041D\u0430\u0431\u0456\u0440 \u0432\u0430\u0433\u0438","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0440\u0430\u0446\u0456\u043E\u043D\u0443","\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A \u043A\u0430\u043B\u043E\u0440\u0456\u0439","\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0438\u0442\u044F\u0447\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0425\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0430\u0433\u0456\u0442\u043D\u0438\u0445","\u041B\u0456\u043A\u0443\u0432\u0430\u043B\u044C\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0456\u0430\u043D\u0441\u044C\u043A\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u0435\u0433\u0430\u043D\u0441\u044C\u043A\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u041A\u0435\u0442\u043E-\u0434\u0456\u0454\u0442\u0430","\u041F\u0430\u043B\u0435\u043E-\u0434\u0456\u0454\u0442\u0430","\u0406\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u0435 \u0433\u043E\u043B\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0435\u0442\u043E\u043A\u0441","\u041D\u0443\u0442\u0440\u0438\u0446\u0456\u043E\u043B\u043E\u0433\u0456\u044F","\u0415\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043E\u043B\u043E\u0433\u0456\u044F","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0456\u0430\u0431\u0435\u0442\u0443","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0449\u0438\u0442\u043E\u043F\u043E\u0434\u0456\u0431\u043D\u043E\u0457 \u0437\u0430\u043B\u043E\u0437\u0438","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0436\u0438\u0440\u0456\u043D\u043D\u044F","\u0413\u043E\u0440\u043C\u043E\u043D\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0424\u0456\u0437\u0456\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u0444\u043E\u0440\u0435\u0437","\u041C\u0430\u0433\u043D\u0456\u0442\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041B\u0430\u0437\u0435\u0440\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041F\u0430\u0440\u0430\u0444\u0456\u043D\u043E\u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u0413\u0440\u044F\u0437\u0435\u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u043E\u0434\u043E\u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u041A\u0456\u043D\u0435\u0437\u0456\u043E\u0442\u0435\u0439\u043F\u0443\u0432\u0430\u043D\u043D\u044F","\u041B\u0424\u041A","\u041B\u0456\u043A\u0443\u0432\u0430\u043B\u044C\u043D\u0430 \u0444\u0456\u0437\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0430","\u0420\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044F","\u041F\u043E\u0441\u0442\u0456\u043D\u0441\u0443\u043B\u044C\u0442\u043D\u0430 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044F","\u041F\u0456\u0441\u043B\u044F\u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044F","\u041F\u0456\u0441\u043B\u044F\u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0439\u043D\u0430 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044F","\u041C\u0430\u043D\u0443\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F","\u041E\u0441\u0442\u0435\u043E\u043F\u0430\u0442\u0456\u044F","\u0425\u0456\u0440\u043E\u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430","\u041A\u0456\u043D\u0435\u0437\u0456\u043E\u043B\u043E\u0433\u0456\u044F","\u0422\u0435\u0439\u043F\u0443\u0432\u0430\u043D\u043D\u044F","\u0421\u0443\u0445\u0435 \u0433\u043E\u043B\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0422\u0430\u0442\u0443\u0430\u0436","\u0425\u0443\u0434\u043E\u0436\u043D\u0454 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0420\u0435\u0430\u043B\u0456\u0441\u0442\u0438\u0447\u043D\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0427\u043E\u0440\u043D\u043E-\u0431\u0456\u043B\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u041A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0410\u043A\u0432\u0430\u0440\u0435\u043B\u044C\u043D\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u0456\u0437\u043C","\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0456\u044F","\u041E\u0440\u043D\u0430\u043C\u0435\u043D\u0442\u0430\u043B","\u0422\u0440\u0430\u0439\u0431\u043B","\u041E\u043B\u0434\u0441\u043A\u0443\u043B","\u041D\u044C\u044E\u0441\u043A\u0443\u043B","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u041F\u043E\u043B\u0456\u043D\u0435\u0437\u0456\u0439\u0441\u044C\u043A\u0435 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F","\u0411\u0456\u043E\u043C\u0435\u0445\u0430\u043D\u0456\u043A\u0430","\u0414\u043E\u0442\u0432\u043E\u0440\u043A","\u0411\u043B\u0435\u043A\u0432\u043E\u0440\u043A","\u041B\u0430\u0439\u043D\u0432\u043E\u0440\u043A","\u041F\u0435\u0440\u0435\u043A\u0440\u0438\u0442\u0442\u044F \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u044C","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u044C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u044C","\u041B\u0430\u0437\u0435\u0440\u043D\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0442\u0430\u0442\u0443","\u0420\u0435\u043C\u0443\u0432\u0435\u0440","\u041F\u0456\u0440\u0441\u0438\u043D\u0433","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u0432\u0443\u0445","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u043D\u043E\u0441\u0430","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u0431\u0440\u043E\u0432\u0438","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u0433\u0443\u0431\u0438","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u044F\u0437\u0438\u043A\u0430","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u043F\u0443\u043F\u043A\u0430","\u0406\u043D\u0442\u0438\u043C\u043D\u0438\u0439 \u043F\u0456\u0440\u0441\u0438\u043D\u0433","\u041F\u0456\u0440\u0441\u0438\u043D\u0433 \u0441\u043E\u0441\u043A\u0456\u0432","\u0421\u0435\u043F\u0442\u0443\u043C","\u0422\u0443\u043D\u0435\u043B\u0456","\u0420\u043E\u0437\u0442\u044F\u0436\u043A\u0430 \u043C\u043E\u0447\u043E\u043A","\u041F\u0440\u043E\u043A\u043E\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0432\u0443\u0445","\u041C\u0430\u043A\u0456\u044F\u0436","\u0414\u0435\u043D\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0412\u0435\u0447\u0456\u0440\u043D\u0456\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u041C\u0430\u043A\u0456\u044F\u0436 \u043D\u0430\u0440\u0435\u0447\u0435\u043D\u043E\u0457","\u0421\u0432\u044F\u0442\u043A\u043E\u0432\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0412\u0438\u043F\u0443\u0441\u043A\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0424\u043E\u0442\u043E\u043C\u0430\u043A\u0456\u044F\u0436","\u0422\u0435\u0430\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0421\u0446\u0435\u043D\u0456\u0447\u043D\u0438\u0439 \u043C\u0430\u043A\u0456\u044F\u0436","\u0410\u043A\u0432\u0430\u0433\u0440\u0438\u043C","\u0424\u0435\u0439\u0441-\u0430\u0440\u0442","\u0411\u043E\u0434\u0456-\u0430\u0440\u0442","\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u043C\u0430\u043A\u0456\u044F\u0436\u0443","\u041C\u0430\u0439\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441 \u0437 \u043C\u0430\u043A\u0456\u044F\u0436\u0443","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043C\u0430\u043A\u0456\u044F\u0436\u0443","\u041C\u0430\u043A\u0456\u044F\u0436 \u0434\u043B\u044F \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u0457","\u0421\u0430\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E","\u041B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D","\u041F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0430\u0434\u0443","\u041F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0430\u0434\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u0441\u0430\u0434\u0443","\u041E\u0437\u0435\u043B\u0435\u043D\u0435\u043D\u043D\u044F","\u041E\u0437\u0435\u043B\u0435\u043D\u0435\u043D\u043D\u044F \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0457","\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0435 \u043E\u0437\u0435\u043B\u0435\u043D\u0435\u043D\u043D\u044F","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0441\u0430\u0434\u043E\u043C","\u0421\u0430\u0434\u043E\u0432\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041E\u0431\u0440\u0456\u0437\u043A\u0430 \u0434\u0435\u0440\u0435\u0432","\u041E\u0431\u0440\u0456\u0437\u043A\u0430 \u043A\u0443\u0449\u0456\u0432","\u0424\u043E\u0440\u043C\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0440\u043E\u043D\u0438","\u0421\u0430\u043D\u0456\u0442\u0430\u0440\u043D\u0430 \u043E\u0431\u0440\u0456\u0437\u043A\u0430","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043E\u0431\u0440\u0456\u0437\u043A\u0430","\u0422\u043E\u043F\u0456\u0430\u0440\u043D\u0435 \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432\u043E","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u0434\u0435\u0440\u0435\u0432","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u0436\u0438\u0432\u043E\u043F\u043B\u043E\u0442\u0443","\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u0434\u0435\u0440\u0435\u0432","\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u043A\u0443\u0449\u0456\u0432","\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u043A\u0432\u0456\u0442\u0456\u0432","\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u0440\u043E\u0441\u043B\u0438\u043D","\u041F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0430 \u0440\u043E\u0441\u043B\u0438\u043D","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0434\u0435\u0440\u0435\u0432","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043F\u043D\u0456\u0432","\u041A\u043E\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0413\u0430\u0437\u043E\u043D","\u041F\u043E\u0441\u0456\u0432 \u0433\u0430\u0437\u043E\u043D\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0440\u0443\u043B\u043E\u043D\u043D\u043E\u0433\u043E \u0433\u0430\u0437\u043E\u043D\u0443","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0433\u0430\u0437\u043E\u043D\u043E\u043C","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u0433\u0430\u0437\u043E\u043D\u0443","\u0410\u0435\u0440\u0430\u0446\u0456\u044F \u0433\u0430\u0437\u043E\u043D\u0443","\u0421\u043A\u0430\u0440\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u044F \u0433\u0430\u0437\u043E\u043D\u0443","\u041F\u0456\u0434\u0436\u0438\u0432\u043B\u0435\u043D\u043D\u044F \u0433\u0430\u0437\u043E\u043D\u0443","\u041F\u043E\u043B\u0438\u0432 \u0433\u0430\u0437\u043E\u043D\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u0433\u0430\u0437\u043E\u043D\u0443","\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0438\u0439 \u043F\u043E\u043B\u0438\u0432","\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0437\u0440\u043E\u0448\u0435\u043D\u043D\u044F","\u041A\u0440\u0430\u043F\u043B\u0438\u043D\u043D\u0438\u0439 \u043F\u043E\u043B\u0438\u0432","\u041C\u043E\u043D\u0442\u0430\u0436 \u043F\u043E\u043B\u0438\u0432\u0443","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u043B\u0438\u0432\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u043F\u043E\u043B\u0438\u0432\u0443","\u041A\u043B\u0443\u043C\u0431\u0438","\u041E\u0431\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043B\u0443\u043C\u0431","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u043A\u043B\u0443\u043C\u0431\u0430\u043C\u0438","\u041C\u0456\u043A\u0441\u0431\u043E\u0440\u0434\u0435\u0440\u0438","\u0420\u0430\u0431\u0430\u0442\u043A\u0438","\u0410\u043B\u044C\u043F\u0456\u0439\u0441\u044C\u043A\u0430 \u0433\u0456\u0440\u043A\u0430","\u0420\u043E\u043A\u0430\u0440\u0456\u0439","\u0410\u043B\u044C\u043F\u0456\u043D\u0430\u0440\u0456\u0439","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0438\u0439 \u0441\u0430\u0434","\u0421\u0430\u0434 \u043A\u0430\u043C\u0435\u043D\u0456\u0432","\u0412\u043E\u0434\u043E\u0439\u043C\u0438","\u0421\u0442\u0430\u0432\u043E\u043A","\u0424\u043E\u043D\u0442\u0430\u043D","\u0412\u043E\u0434\u043E\u0441\u043F\u0430\u0434","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0431\u0430\u0441\u0435\u0439\u043D","\u041E\u0447\u0438\u0449\u0435\u043D\u043D\u044F \u0441\u0442\u0430\u0432\u043A\u0430","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0432\u043E\u0434\u043E\u0439\u043C\u043E\u044E","\u0414\u043E\u0440\u0456\u0436\u043A\u0438","\u0421\u0430\u0434\u043E\u0432\u0456 \u0434\u043E\u0440\u0456\u0436\u043A\u0438","\u0422\u0440\u043E\u0442\u0443\u0430\u0440\u043D\u0430 \u043F\u043B\u0438\u0442\u043A\u0430","\u0411\u0440\u0443\u043A\u0456\u0432\u043A\u0430","\u041C\u043E\u0449\u0435\u043D\u043D\u044F","\u041F\u0430\u0442\u0456\u043E","\u0422\u0435\u0440\u0430\u0441\u0430","\u0410\u043B\u044C\u0442\u0430\u043D\u043A\u0430","\u041F\u0435\u0440\u0433\u043E\u043B\u0438","\u0421\u0430\u0434\u043E\u0432\u0456 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457","\u041E\u043F\u043E\u0440\u0438 \u0434\u043B\u044F \u0440\u043E\u0441\u043B\u0438\u043D","\u0428\u043F\u0430\u043B\u0435\u0440\u0438","\u0410\u0440\u043A\u0438","\u041E\u0433\u043E\u0440\u043E\u0436\u0456","\u041F\u0430\u0440\u043A\u0430\u043D\u0438","\u0416\u0438\u0432\u043E\u043F\u043B\u0456\u0442","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043E\u0433\u043E\u0440\u043E\u0436\u0430","\u0421\u0430\u0434\u043E\u0432\u0435 \u043E\u0441\u0432\u0456\u0442\u043B\u0435\u043D\u043D\u044F","\u041B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u043D\u0430 \u043F\u0456\u0434\u0441\u0432\u0456\u0442\u043A\u0430","\u0417\u0438\u043C\u043E\u0432\u0438\u0439 \u0441\u0430\u0434","\u041E\u0440\u0430\u043D\u0436\u0435\u0440\u0435\u044F","\u0422\u0435\u043F\u043B\u0438\u0446\u044F","\u041F\u0430\u0440\u043D\u0438\u043A","\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0456 \u0433\u0440\u044F\u0434\u043A\u0438","\u0412\u0438\u0441\u043E\u043A\u0456 \u0433\u0440\u044F\u0434\u043A\u0438","\u0413\u043E\u0440\u043E\u0434","\u0413\u043E\u0440\u043E\u0434\u043D\u0438\u0446\u0442\u0432\u043E","\u0412\u0438\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0432\u043E\u0447\u0456\u0432","\u041E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0435 \u0437\u0435\u043C\u043B\u0435\u0440\u043E\u0431\u0441\u0442\u0432\u043E","\u041F\u0435\u0440\u043C\u0430\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0430","\u041A\u043E\u043C\u043F\u043E\u0441\u0442","\u041C\u0443\u043B\u044C\u0447\u0443\u0432\u0430\u043D\u043D\u044F","\u0411\u043E\u0440\u043E\u0442\u044C\u0431\u0430 \u0437\u0456 \u0448\u043A\u0456\u0434\u043D\u0438\u043A\u0430\u043C\u0438","\u0417\u0430\u0445\u0438\u0441\u0442 \u0440\u043E\u0441\u043B\u0438\u043D","\u0414\u043E\u0431\u0440\u0438\u0432\u0430","\u041F\u0456\u0434\u0436\u0438\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u043E\u0441\u043B\u0438\u043D","\u0414\u0440\u0435\u043D\u0430\u0436","\u0414\u0440\u0435\u043D\u0430\u0436\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430","\u041F\u0456\u0434\u043F\u0456\u0440\u043D\u0456 \u0441\u0442\u0456\u043D\u043A\u0438","\u0422\u0435\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F","\u0413\u0440\u0430\u0432\u0456\u0439","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043A\u043E\u0440\u0430","\u041C\u0443\u043B\u044C\u0447\u0430","\u0421\u0430\u0434\u043E\u0432\u0438\u0439 \u0434\u0435\u043A\u043E\u0440","\u0421\u043A\u0443\u043B\u044C\u043F\u0442\u0443\u0440\u0438","\u0412\u0430\u0437\u043E\u043D\u0438","\u041A\u0430\u0448\u043F\u043E","\u0421\u0430\u0434\u043E\u0432\u0456 \u0444\u0456\u0433\u0443\u0440\u0438","\u0413\u043E\u0434\u0456\u0432\u043D\u0438\u0446\u0456 \u0434\u043B\u044F \u043F\u0442\u0430\u0445\u0456\u0432","\u0411\u0443\u0434\u0438\u043D\u043E\u0447\u043A\u0438 \u0434\u043B\u044F \u043F\u0442\u0430\u0445\u0456\u0432","\u0413\u043E\u0442\u0435\u043B\u0456 \u0434\u043B\u044F \u043A\u043E\u043C\u0430\u0445","\u0411\u0434\u0436\u0456\u043B\u044C\u043D\u0438\u0446\u0442\u0432\u043E","\u041F\u0430\u0441\u0456\u043A\u0430","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0431\u0434\u0436\u043E\u043B\u0430\u043C\u0438","\u0412\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u0430\u0440\u0441\u0442\u0432\u043E","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u043E\u043C","\u041E\u0431\u0440\u0456\u0437\u043A\u0430 \u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u0443","\u041F\u043B\u043E\u0434\u043E\u0432\u0438\u0439 \u0441\u0430\u0434","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u043F\u043B\u043E\u0434\u043E\u0432\u0438\u043C\u0438 \u0434\u0435\u0440\u0435\u0432\u0430\u043C\u0438","\u0429\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0434\u0435\u0440\u0435\u0432","\u041E\u043A\u0443\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u0448\u043A\u0456\u0434\u043D\u0438\u043A\u0456\u0432","\u041F\u043E\u0431\u0456\u043B\u043A\u0430 \u0434\u0435\u0440\u0435\u0432","\u0417\u0438\u043C\u043E\u0432\u0435 \u0443\u043A\u0440\u0438\u0442\u0442\u044F \u0440\u043E\u0441\u043B\u0438\u043D","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0441\u0430\u0434\u0443 \u0434\u043E \u0437\u0438\u043C\u0438","\u0412\u0435\u0441\u043D\u044F\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438 \u0432 \u0441\u0430\u0434\u0443","\u041E\u0441\u0456\u043D\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438 \u0432 \u0441\u0430\u0434\u0443","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043A\u0432\u0430\u0440\u0442\u0438\u0440","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043E\u0444\u0456\u0441\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u0429\u043E\u0434\u0435\u043D\u043D\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u044E\u0447\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0440\u0435\u043C\u043E\u043D\u0442\u0443","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0431\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u0430","\u041C\u0438\u0442\u0442\u044F \u0432\u0456\u043A\u043E\u043D","\u041C\u0438\u0442\u0442\u044F \u0444\u0430\u0441\u0430\u0434\u0456\u0432","\u041C\u0438\u0442\u0442\u044F \u0432\u0456\u0442\u0440\u0438\u043D","\u041C\u0438\u0442\u0442\u044F \u043F\u0456\u0441\u043B\u044F \u0440\u0435\u043C\u043E\u043D\u0442\u0443","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0438\u043B\u0443","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043C\u0435\u0431\u043B\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0434\u0438\u0432\u0430\u043D\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0440\u0456\u0441\u0435\u043B","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043C\u0430\u0442\u0440\u0430\u0446\u0456\u0432","\u041F\u0440\u0430\u043D\u043D\u044F \u043A\u0438\u043B\u0438\u043C\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0438\u043B\u0438\u043C\u0456\u0432","\u0427\u0438\u0441\u0442\u043A\u0430 \u043A\u0438\u043B\u0438\u043C\u043E\u0432\u0438\u0445 \u043F\u043E\u043A\u0440\u0438\u0442\u0442\u0456\u0432","\u041F\u0440\u0430\u043D\u043D\u044F \u0448\u0442\u043E\u0440","\u041F\u0440\u0430\u043D\u043D\u044F \u0442\u044E\u043B\u044E","\u041F\u0440\u0430\u043D\u043D\u044F \u0433\u0430\u0440\u0434\u0438\u043D","\u041A\u043B\u0456\u043D\u0456\u043D\u0433","\u041A\u043B\u0456\u043D\u0456\u043D\u0433\u043E\u0432\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0438\u0439 \u043A\u043B\u0456\u043D\u0456\u043D\u0433","\u041F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430\u0434\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u0447\u0438\u0445 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u0438\u0445 \u0446\u0435\u043D\u0442\u0440\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043A\u0430\u0444\u0435","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0433\u043E\u0442\u0435\u043B\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043B\u0456\u043A\u0430\u0440\u0435\u043D\u044C","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043A\u043B\u0456\u043D\u0456\u043A","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0448\u043A\u0456\u043B","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0434\u0438\u0442\u044F\u0447\u0438\u0445 \u0441\u0430\u0434\u043A\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u043F\u043E\u0440\u0442\u0437\u0430\u043B\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0431\u0430\u0441\u0435\u0439\u043D\u0456\u0432","\u0414\u0435\u0437\u0456\u043D\u0444\u0435\u043A\u0446\u0456\u044F","\u0414\u0435\u0437\u0438\u043D\u0441\u0435\u043A\u0446\u0456\u044F","\u0414\u0435\u0440\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u043A\u043E\u043C\u0430\u0445","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u0433\u0440\u0438\u0437\u0443\u043D\u0456\u0432","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u0442\u0430\u0440\u0433\u0430\u043D\u0456\u0432","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u043A\u043B\u043E\u043F\u0456\u0432","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u043C\u0443\u0440\u0430\u0448\u043E\u043A","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u043E\u0441","\u0417\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u0431\u043B\u0456\u0445","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u043A\u043B\u0456\u0449\u0456\u0432","\u0424\u0443\u043C\u0456\u0433\u0430\u0446\u0456\u044F","\u0421\u0430\u043D\u0456\u0442\u0430\u0440\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430","\u041E\u0437\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u041E\u0447\u0438\u0449\u0435\u043D\u043D\u044F \u043F\u043E\u0432\u0456\u0442\u0440\u044F","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0439","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0456\u0434'\u0457\u0437\u0434\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u0445\u043E\u0434\u043E\u0432\u0438\u0445 \u043A\u043B\u0456\u0442\u043E\u043A","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0456\u043D\u0433\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0433\u0430\u0440\u0430\u0436\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u043F\u0456\u0434\u0432\u0430\u043B\u0456\u0432","\u041F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0433\u043E\u0440\u0438\u0449","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0441\u043C\u0456\u0442\u0442\u044F","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043C\u0456\u0442\u0442\u044F","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u0423\u0442\u0438\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0427\u0438\u0441\u0442\u043A\u0430 \u0442\u0430 \u0434\u043E\u0433\u043B\u044F\u0434 \u0432\u0437\u0443\u0442\u0442\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0432\u0437\u0443\u0442\u0442\u044F","\u041F\u0435\u0440\u0435\u0448\u0438\u0432\u043A\u0430 \u0432\u0437\u0443\u0442\u0442\u044F","\u0420\u043E\u0437\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0437\u0443\u0442\u0442\u044F","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0437\u0443\u0442\u0442\u044F","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u0432\u0437\u0443\u0442\u0442\u044F","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u0456\u0434\u0431\u043E\u0440\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u0456\u0434\u043E\u0448\u0432\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0431\u043B\u0438\u0441\u043A\u0430\u0432\u043E\u043A \u043D\u0430 \u0432\u0437\u0443\u0442\u0442\u0456","\u041B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u043E\u0434\u044F\u0433\u0443","\u041F\u0435\u0440\u0435\u0448\u0438\u0432\u043A\u0430 \u043E\u0434\u044F\u0433\u0443","\u041F\u0456\u0434\u0433\u043E\u043D\u043A\u0430 \u043E\u0434\u044F\u0433\u0443","\u0417\u0430\u043C\u0456\u043D\u0430 \u0431\u043B\u0438\u0441\u043A\u0430\u0432\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0443\u0434\u0437\u0438\u043A\u0456\u0432","\u041F\u0456\u0434\u0448\u0438\u0432\u043A\u0430 \u0431\u0440\u044E\u043A","\u041F\u0456\u0434\u0448\u0438\u0432\u043A\u0430 \u0448\u0442\u043E\u0440","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043E\u0434\u044F\u0433\u0443","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0432\u0435\u0440\u0445\u043D\u044C\u043E\u0433\u043E \u043E\u0434\u044F\u0433\u0443","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043F\u0430\u043B\u044C\u0442","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0443\u0440\u0442\u043E\u043A","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0448\u0443\u0431","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0434\u0443\u0431\u043B\u044F\u043D\u043E\u043A","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u043E\u0441\u0442\u044E\u043C\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0441\u0443\u043A\u043E\u043D\u044C","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0432\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0445 \u0441\u0443\u043A\u043E\u043D\u044C","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043F\u043E\u0434\u0443\u0448\u043E\u043A","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u043E\u0432\u0434\u0440","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u043F\u043B\u0435\u0434\u0456\u0432","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0456\u0433\u0440\u0430\u0448\u043E\u043A","\u0427\u0438\u0441\u0442\u043A\u0430 \u0448\u043A\u0456\u0440\u044F\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u0427\u0438\u0441\u0442\u043A\u0430 \u0437\u0430\u043C\u0448\u0456","\u0427\u0438\u0441\u0442\u043A\u0430 \u043D\u0443\u0431\u0443\u043A\u0443","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u0448\u043A\u0456\u0440\u0438","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u043A\u0456\u0440\u0438","\u041F\u0440\u0430\u043D\u043D\u044F","\u041F\u0440\u0430\u043B\u044C\u043D\u044F","\u041F\u0440\u0430\u043D\u043D\u044F \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u041F\u0440\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u0442\u0456\u043B\u044C\u043D\u043E\u0457 \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u041F\u0440\u0430\u043D\u043D\u044F \u0441\u043F\u0435\u0446\u043E\u0434\u044F\u0433\u0443","\u041F\u0440\u0430\u043D\u043D\u044F \u0440\u043E\u0431\u043E\u0447\u043E\u0433\u043E \u043E\u0434\u044F\u0433\u0443","\u041F\u0440\u0430\u043D\u043D\u044F \u0442\u0435\u043A\u0441\u0442\u0438\u043B\u044E","\u041F\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u041F\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043E\u0440\u043E\u0447\u043E\u043A","\u041F\u0440\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u0442\u043E\u0440","\u0410\u0442\u0435\u043B\u044C\u0454","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043E\u0434\u044F\u0433\u0443","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0441\u0443\u043A\u043E\u043D\u044C","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0432\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0445 \u0441\u0443\u043A\u043E\u043D\u044C","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043A\u043E\u0441\u0442\u044E\u043C\u0456\u0432","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0441\u043E\u0440\u043E\u0447\u043E\u043A","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0431\u043B\u0443\u0437","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0441\u043F\u0456\u0434\u043D\u0438\u0446\u044C","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0431\u0440\u044E\u043A","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0432\u0435\u0440\u0445\u043D\u044C\u043E\u0433\u043E \u043E\u0434\u044F\u0433\u0443","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043F\u0430\u043B\u044C\u0442","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043A\u0443\u0440\u0442\u043E\u043A","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u043F\u043E\u0441\u0442\u0456\u043B\u044C\u043D\u043E\u0457 \u0431\u0456\u043B\u0438\u0437\u043D\u0438","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0448\u0442\u043E\u0440","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0442\u044E\u043B\u044E","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043E\u0434\u044F\u0433\u0443","\u041E\u0437\u0434\u043E\u0431\u043B\u0435\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443","\u0414\u0435\u043A\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443","\u0412\u0438\u0448\u0438\u0432\u043A\u0430","\u041C\u0430\u0448\u0438\u043D\u043D\u0430 \u0432\u0438\u0448\u0438\u0432\u043A\u0430","\u0420\u0443\u0447\u043D\u0430 \u0432\u0438\u0448\u0438\u0432\u043A\u0430","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u0433\u043B\u0430\u0434\u0434\u044E","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u0445\u0440\u0435\u0441\u0442\u0438\u043A\u043E\u043C","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u0431\u0456\u0441\u0435\u0440\u043E\u043C","\u0417\u043E\u043B\u043E\u0442\u0430 \u0432\u0438\u0448\u0438\u0432\u043A\u0430","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u0441\u0442\u0440\u0456\u0447\u043A\u0430\u043C\u0438","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0456\u0432","\u0413\u0440\u0443\u043C\u0456\u043D\u0433","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u0441\u043E\u0431\u0430\u043A","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u043A\u043E\u0442\u0456\u0432","\u041C\u043E\u0434\u0435\u043B\u044C\u043D\u0430 \u0441\u0442\u0440\u0438\u0436\u043A\u0430 \u0441\u043E\u0431\u0430\u043A","\u0413\u0456\u0433\u0456\u0454\u043D\u0456\u0447\u043D\u0430 \u0441\u0442\u0440\u0438\u0436\u043A\u0430","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u043F\u0456\u0434 \u043C\u0430\u0448\u0438\u043D\u043A\u0443","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u043D\u043E\u0436\u0438\u0446\u044F\u043C\u0438","\u0422\u0440\u0438\u043C\u0456\u043D\u0433","\u0420\u043E\u043B\u043B\u0456\u043D\u0433","\u0421\u0442\u0440\u0438\u043F\u043F\u0456\u043D\u0433","\u041A\u0443\u043F\u0430\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u041A\u0443\u043F\u0430\u043D\u043D\u044F \u043A\u043E\u0442\u0456\u0432","\u0421\u041F\u0410 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0427\u0438\u0441\u0442\u043A\u0430 \u0437\u0443\u0431\u0456\u0432 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C","\u0427\u0438\u0441\u0442\u043A\u0430 \u0432\u0443\u0445","\u041F\u0456\u0434\u0440\u0456\u0437\u0430\u043D\u043D\u044F \u043A\u0456\u0433\u0442\u0456\u0432","\u0415\u043A\u0441\u043F\u0440\u0435\u0441-\u043B\u0456\u043D\u044C\u043A\u0430","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043A\u043E\u043B\u0442\u0443\u043D\u0456\u0432","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u0435\u0440\u0441\u0442\u0456","\u041A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0433\u0440\u0443\u043C\u0456\u043D\u0433","Show grooming","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0432\u0438\u0441\u0442\u0430\u0432\u043E\u043A","\u0413\u0456\u0433\u0456\u0454\u043D\u0430 \u043F\u0430\u0440\u0430\u0430\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u0430\u043B\u043E\u0437","\u0427\u0438\u0441\u0442\u043A\u0430 \u043E\u0447\u0435\u0439","\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u043A\u043E\u0433\u0442\u0456\u0432","Production","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043C\u0435\u0431\u043B\u0456\u0432","\u041C\u0435\u0431\u043B\u0456 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041A\u043E\u0440\u043F\u0443\u0441\u043D\u0456 \u043C\u0435\u0431\u043B\u0456","\u041C'\u044F\u043A\u0456 \u043C\u0435\u0431\u043B\u0456","\u041A\u0443\u0445\u043D\u0456 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0428\u0430\u0444\u0438-\u043A\u0443\u043F\u0435","\u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u0456","\u041B\u0456\u0436\u043A\u0430","\u0414\u0438\u0432\u0430\u043D\u0438","\u041A\u0440\u0456\u0441\u043B\u0430","\u0421\u0442\u043E\u043B\u0438","\u0421\u0442\u0456\u043B\u044C\u0446\u0456","\u0414\u0438\u0442\u044F\u0447\u0456 \u043C\u0435\u0431\u043B\u0456","\u041E\u0444\u0456\u0441\u043D\u0456 \u043C\u0435\u0431\u043B\u0456","\u0412\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0456 \u043C\u0435\u0431\u043B\u0456","\u041C\u0435\u0431\u043B\u0456 \u0437 \u043C\u0430\u0441\u0438\u0432\u0443","\u041C\u0435\u0431\u043B\u0456 \u0437 \u0414\u0421\u041F","\u041C\u0435\u0431\u043B\u0456 \u0437 \u041C\u0414\u0424","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u041F\u0435\u0440\u0435\u0442\u044F\u0436\u043A\u0430 \u043C\u0435\u0431\u043B\u0456\u0432","\u041E\u0431\u0431\u0438\u0432\u043A\u0430 \u043C\u0435\u0431\u043B\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0444\u0443\u0440\u043D\u0456\u0442\u0443\u0440\u0438","\u041B\u0430\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0441\u0442\u043E\u043B\u044F\u0440\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u0421\u0442\u043E\u043B\u044F\u0440\u043D\u0430 \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043D\u044F","\u0421\u0442\u043E\u043B\u044F\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0414\u0432\u0435\u0440\u0456 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0414\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u0434\u0432\u0435\u0440\u0456","\u041C\u0456\u0436\u043A\u0456\u043C\u043D\u0430\u0442\u043D\u0456 \u0434\u0432\u0435\u0440\u0456","\u0412\u0445\u0456\u0434\u043D\u0456 \u0434\u0432\u0435\u0440\u0456","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u0434\u0432\u0435\u0440\u0456","\u0411\u0440\u043E\u043D\u044C\u043E\u0432\u0430\u043D\u0456 \u0434\u0432\u0435\u0440\u0456","\u0412\u0456\u043A\u043D\u0430","\u041C\u0435\u0442\u0430\u043B\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u0456 \u0432\u0456\u043A\u043D\u0430","\u0414\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u0432\u0456\u043A\u043D\u0430","\u0410\u043B\u044E\u043C\u0456\u043D\u0456\u0454\u0432\u0456 \u0432\u0456\u043A\u043D\u0430","\u0421\u043A\u043B\u043E\u043F\u0430\u043A\u0435\u0442\u0438","\u0411\u0430\u043B\u043A\u043E\u043D\u0438","\u041B\u043E\u0434\u0436\u0456\u0457","\u0417\u0430\u0441\u043A\u043B\u0435\u043D\u043D\u044F \u0431\u0430\u043B\u043A\u043E\u043D\u0456\u0432","\u041E\u0431\u0448\u0438\u0432\u043A\u0430 \u0431\u0430\u043B\u043A\u043E\u043D\u0456\u0432","\u0423\u0442\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0431\u0430\u043B\u043A\u043E\u043D\u0456\u0432","\u0421\u0445\u043E\u0434\u0438","\u0414\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u0441\u0445\u043E\u0434\u0438","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u0441\u0445\u043E\u0434\u0438","\u0411\u0435\u0442\u043E\u043D\u043D\u0456 \u0441\u0445\u043E\u0434\u0438","\u0413\u0432\u0438\u043D\u0442\u043E\u0432\u0456 \u0441\u0445\u043E\u0434\u0438","\u041C\u0430\u0440\u0448\u043E\u0432\u0456 \u0441\u0445\u043E\u0434\u0438","\u041F\u0435\u0440\u0438\u043B\u0430","\u041F\u043E\u0440\u0443\u0447\u043D\u0456","\u0411\u0430\u043B\u044F\u0441\u0438\u043D\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043C\u0435\u0442\u0430\u043B\u043E\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0439","\u0417\u0432\u0430\u0440\u044E\u0432\u0430\u043B\u044C\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041A\u043E\u0432\u043A\u0430","\u0425\u0443\u0434\u043E\u0436\u043D\u044F \u043A\u043E\u0432\u043A\u0430","\u041A\u043E\u0432\u0430\u043D\u0456 \u0432\u0438\u0440\u043E\u0431\u0438","\u041A\u043E\u0432\u0430\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u041A\u043E\u0432\u0430\u043D\u0456 \u043E\u0433\u043E\u0440\u043E\u0436\u0456","\u041A\u043E\u0432\u0430\u043D\u0456 \u043F\u0435\u0440\u0438\u043B\u0430","\u041A\u043E\u0432\u0430\u043D\u0456 \u043D\u0430\u0432\u0456\u0441\u0438","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u043E\u0433\u043E\u0440\u043E\u0436\u0456","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u043D\u0430\u0432\u0456\u0441\u0438","\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0456 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457","\u041D\u0435\u0440\u0436\u0430\u0432\u0456\u044E\u0447\u0430 \u0441\u0442\u0430\u043B\u044C","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0432\u043E\u0440\u0456\u0442","\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0420\u043E\u0437\u0441\u0443\u0432\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0412\u0456\u0434\u043A\u0430\u0442\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0420\u043E\u0437\u043F\u0430\u0448\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0421\u0435\u043A\u0446\u0456\u0439\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0420\u0443\u043B\u043E\u043D\u043D\u0456 \u0432\u043E\u0440\u043E\u0442\u0430","\u0428\u043B\u0430\u0433\u0431\u0430\u0443\u043C\u0438","\u0420\u043E\u043B\u043B\u0435\u0442\u0438","\u0420\u043E\u043B\u044C\u0441\u0442\u0430\u0432\u043D\u0456","\u0416\u0430\u043B\u044E\u0437\u0456","\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0456 \u0436\u0430\u043B\u044E\u0437\u0456","\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0456 \u0436\u0430\u043B\u044E\u0437\u0456","\u0420\u0443\u043B\u043E\u043D\u043D\u0456 \u0448\u0442\u043E\u0440\u0438","\u0420\u0438\u043C\u0441\u044C\u043A\u0456 \u0448\u0442\u043E\u0440\u0438","\u041C\u0430\u0440\u043A\u0456\u0437\u0438","\u0422\u0435\u043D\u0442\u0438","\u041D\u0430\u0432\u0456\u0441\u0438","\u041A\u043E\u0437\u0438\u0440\u043A\u0438","\u0414\u0430\u0448\u043A\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043F\u043E\u043B\u0456\u0433\u0440\u0430\u0444\u0456\u0447\u043D\u043E\u0457 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457","\u0414\u0440\u0443\u043A\u0430\u0440\u043D\u044F","\u0414\u0440\u0443\u043A","\u0426\u0438\u0444\u0440\u043E\u0432\u0438\u0439 \u0434\u0440\u0443\u043A","\u041E\u0444\u0441\u0435\u0442\u043D\u0438\u0439 \u0434\u0440\u0443\u043A","\u0428\u0438\u0440\u043E\u043A\u043E\u0444\u043E\u0440\u043C\u0430\u0442\u043D\u0438\u0439 \u0434\u0440\u0443\u043A","\u0406\u043D\u0442\u0435\u0440'\u0454\u0440\u043D\u0438\u0439 \u0434\u0440\u0443\u043A","\u0414\u0440\u0443\u043A \u0432\u0456\u0437\u0438\u0442\u043E\u043A","\u0414\u0440\u0443\u043A \u043B\u0438\u0441\u0442\u0456\u0432\u043E\u043A","\u0414\u0440\u0443\u043A \u0444\u043B\u0430\u0454\u0440\u0456\u0432","\u0414\u0440\u0443\u043A \u0431\u0443\u043A\u043B\u0435\u0442\u0456\u0432","\u0414\u0440\u0443\u043A \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0456\u0432","\u0414\u0440\u0443\u043A \u0431\u0440\u043E\u0448\u0443\u0440","\u0414\u0440\u0443\u043A \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u0456\u0432","\u0414\u0440\u0443\u043A \u043F\u043B\u0430\u043A\u0430\u0442\u0456\u0432","\u0414\u0440\u0443\u043A \u0431\u0430\u043D\u0435\u0440\u0456\u0432","\u0414\u0440\u0443\u043A \u043D\u0430\u043A\u043B\u0435\u0439\u043E\u043A","\u0414\u0440\u0443\u043A \u0435\u0442\u0438\u043A\u0435\u0442\u043E\u043A","\u0414\u0440\u0443\u043A \u043D\u0430 \u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0430\u0445","\u0414\u0440\u0443\u043A \u043D\u0430 \u043A\u0440\u0443\u0436\u043A\u0430\u0445","\u0421\u0443\u0432\u0435\u043D\u0456\u0440\u043D\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u044F","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0435\u0447\u0430\u0442\u043E\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0448\u0442\u0430\u043C\u043F\u0456\u0432","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F","\u041B\u0430\u0437\u0435\u0440\u043D\u0435 \u0433\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F","\u041C\u0435\u0445\u0430\u043D\u0456\u0447\u043D\u0435 \u0433\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043C\u0435\u0442\u0430\u043B\u0456","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u0441\u043A\u043B\u0456","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u0434\u0435\u0440\u0435\u0432\u0456","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0443","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438","\u041A\u0430\u0440\u0442\u043E\u043D\u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430","\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043A\u043E\u0440\u043E\u0431\u043E\u043A","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043F\u0430\u043A\u0435\u0442\u0456\u0432","\u041F\u0430\u043F\u0435\u0440\u043E\u0432\u0456 \u043F\u0430\u043A\u0435\u0442\u0438","\u041F\u043E\u043B\u0456\u0435\u0442\u0438\u043B\u0435\u043D\u043E\u0432\u0456 \u043F\u0430\u043A\u0435\u0442\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0442\u0435\u043A\u0441\u0442\u0438\u043B\u044E","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0442\u0435\u043A\u0441\u0442\u0438\u043B\u044C\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u041F\u043E\u0441\u0442\u0456\u043B\u044C\u043D\u0430 \u0431\u0456\u043B\u0438\u0437\u043D\u0430","\u0420\u0443\u0448\u043D\u0438\u043A\u0438","\u0421\u043A\u0430\u0442\u0435\u0440\u0442\u0438\u043D\u0438","\u0421\u0435\u0440\u0432\u0435\u0442\u043A\u0438","\u0424\u0430\u0440\u0442\u0443\u0445\u0438","\u041F\u043E\u0448\u0438\u0442\u0442\u044F \u0441\u043F\u0435\u0446\u043E\u0434\u044F\u0433\u0443","\u0420\u043E\u0431\u043E\u0447\u0438\u0439 \u043E\u0434\u044F\u0433","\u0423\u043D\u0456\u0444\u043E\u0440\u043C\u0430","\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u043E\u0434\u044F\u0433","\u041C\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u043E\u0434\u044F\u0433","\u041A\u0443\u0445\u0430\u0440\u0441\u044C\u043A\u0438\u0439 \u043E\u0434\u044F\u0433","\u0417\u0430\u0445\u0438\u0441\u043D\u0438\u0439 \u043E\u0434\u044F\u0433","\u041F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u0435 \u0448\u0438\u0442\u0442\u044F","\u0412\u0438\u0448\u0438\u0432\u043A\u0430 \u043D\u0430 \u043E\u0434\u044F\u0437\u0456","\u041D\u0430\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0456\u0432","\u0411\u0440\u0435\u043D\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0432\u0437\u0443\u0442\u0442\u044F","\u0412\u0437\u0443\u0442\u0442\u044F \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041E\u0440\u0442\u043E\u043F\u0435\u0434\u0438\u0447\u043D\u0435 \u0432\u0437\u0443\u0442\u0442\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0430 \u043F\u043E\u0448\u0438\u0442\u0442\u044F \u0432\u0437\u0443\u0442\u0442\u044F","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0448\u043A\u0456\u0440\u0433\u0430\u043B\u0430\u043D\u0442\u0435\u0440\u0435\u0457","\u0421\u0443\u043C\u043A\u0438","\u0413\u0430\u043C\u0430\u043D\u0446\u0456","\u0420\u0435\u043C\u0435\u043D\u0456","\u041F\u043E\u0440\u0442\u0444\u0435\u043B\u0456","\u0420\u044E\u043A\u0437\u0430\u043A\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0430\u043A\u0441\u0435\u0441\u0443\u0430\u0440\u0456\u0432","\u0411\u0456\u0436\u0443\u0442\u0435\u0440\u0456\u044F","\u041F\u0440\u0438\u043A\u0440\u0430\u0441\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u044E\u0432\u0435\u043B\u0456\u0440\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u042E\u0432\u0435\u043B\u0456\u0440\u043D\u0430 \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043D\u044F","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0430\u0431\u043B\u0443\u0447\u043E\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u0435\u0440\u0435\u0436\u043E\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0443\u043B\u043E\u043D\u0456\u0432","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0440\u0430\u0441\u043B\u0435\u0442\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u044E\u0432\u0435\u043B\u0456\u0440\u043D\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u0417\u043C\u0456\u043D\u0430 \u0440\u043E\u0437\u043C\u0456\u0440\u0443 \u043A\u0430\u0431\u043B\u0443\u0447\u043A\u0438","\u0427\u0438\u0441\u0442\u043A\u0430 \u043F\u0440\u0438\u043A\u0440\u0430\u0441","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u043E\u043B\u043E\u0442\u0430","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043F\u0440\u0438\u043A\u0440\u0430\u0441\u0430\u0445","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0441\u0432\u0456\u0447\u043E\u043A","\u0410\u0440\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0456 \u0441\u0432\u0456\u0447\u043A\u0438","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0456 \u0441\u0432\u0456\u0447\u043A\u0438","\u0421\u043E\u0454\u0432\u0456 \u0441\u0432\u0456\u0447\u043A\u0438","\u0412\u043E\u0441\u043A\u043E\u0432\u0456 \u0441\u0432\u0456\u0447\u043A\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043C\u0438\u043B\u0430","\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u0435 \u043C\u0438\u043B\u043E","\u041C\u0438\u043B\u043E \u0440\u0443\u0447\u043D\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0438","\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u0430 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0430","\u041E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0430 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0430","\u041A\u0440\u0435\u043C \u0440\u0443\u0447\u043D\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043A\u043E\u043D\u0434\u0438\u0442\u0435\u0440\u0441\u044C\u043A\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u0456\u0432","\u041A\u043E\u043D\u0434\u0438\u0442\u0435\u0440\u0441\u044C\u043A\u0430","\u0412\u0438\u043F\u0456\u0447\u043A\u0430","\u0422\u043E\u0440\u0442\u0438 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0456 \u0442\u043E\u0440\u0442\u0438","\u0414\u0438\u0442\u044F\u0447\u0456 \u0442\u043E\u0440\u0442\u0438","\u041A\u0430\u043F\u043A\u0435\u0439\u043A\u0438","\u041C\u0430\u043A\u0430\u0440\u0443\u043D\u0438","\u0415\u043A\u043B\u0435\u0440\u0438","\u0422\u0456\u0441\u0442\u0435\u0447\u043A\u0430","\u041F\u0435\u0447ivo","\u041F\u0440\u044F\u043D\u0438\u043A\u0438","\u0406\u043C\u0431\u0438\u0440\u043D\u0456 \u043F\u0440\u044F\u043D\u0438\u043A\u0438","\u041F\u0440\u044F\u043D\u0438\u043A\u0438 \u0437 \u0440\u043E\u0437\u043F\u0438\u0441\u043E\u043C","\u041F\u043E\u043D\u0447\u0438\u043A\u0438","\u041C\u0430\u0444\u0456\u043D\u0438","\u041A\u0440\u0443\u0430\u0441\u0430\u043D\u0438","\u0425\u043B\u0456\u0431","\u0412\u0438\u043F\u0456\u0447\u043A\u0430 \u0445\u043B\u0456\u0431\u0430","\u0411\u0435\u0437\u0434\u0440\u0456\u0436\u0434\u0436\u043E\u0432\u0438\u0439 \u0445\u043B\u0456\u0431","\u0417\u0430\u043A\u0432\u0430\u0441\u043A\u043E\u0432\u0438\u0439 \u0445\u043B\u0456\u0431","\u0420\u0435\u043C\u0435\u0441\u043B\u0435\u043D\u043D\u0456 \u0432\u0438\u0440\u043E\u0431\u0438","\u0420\u0443\u0447\u043D\u0430 \u0440\u043E\u0431\u043E\u0442\u0430","Handmade","\u0412'\u044F\u0437\u0430\u043D\u043D\u044F","\u0412'\u044F\u0437\u0430\u043D\u043D\u044F \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0412'\u044F\u0437\u0430\u043D\u0456 \u0440\u0435\u0447\u0456","\u0413\u0430\u0447\u043E\u043A","\u0421\u043F\u0438\u0446\u0456","\u041F\u043B\u0435\u0442\u0456\u043D\u043D\u044F","\u041C\u0430\u043A\u0440\u0430\u043C\u0435","\u041F\u043B\u0435\u0442\u0456\u043D\u043D\u044F \u0437 \u043B\u043E\u0437\u0438","\u041F\u043B\u0435\u0442\u0456\u043D\u043D\u044F \u043A\u043E\u0448\u0438\u043A\u0456\u0432","\u0413\u043E\u043D\u0447\u0430\u0440\u0441\u0442\u0432\u043E","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0435\u0440\u0430\u043C\u0456\u043A\u0438","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0438\u0439 \u043F\u043E\u0441\u0443\u0434","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043A\u0435\u0440\u0430\u043C\u0456\u043A\u0430","\u041B\u0456\u043F\u043B\u0435\u043D\u043D\u044F","\u0421\u043A\u0443\u043B\u044C\u043F\u0442\u0443\u0440\u0430","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0441\u043A\u043B\u0430","\u0421\u043A\u043B\u044F\u043D\u0456 \u0432\u0438\u0440\u043E\u0431\u0438","\u0414\u043C\u0443\u0445\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u0412\u0456\u0442\u0440\u0430\u0436\u0456","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0442\u0440\u0430\u0436\u0456\u0432","\u041C\u043E\u0437\u0430\u0457\u043A\u0430","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043C\u043E\u0437\u0430\u0457\u043A\u0438","\u0414\u0435\u043A\u0443\u043F\u0430\u0436","\u0420\u043E\u0437\u043F\u0438\u0441","\u0420\u043E\u0437\u043F\u0438\u0441 \u043F\u043E \u0441\u043A\u043B\u0443","\u0420\u043E\u0437\u043F\u0438\u0441 \u043F\u043E \u0434\u0435\u0440\u0435\u0432\u0443","\u0420\u043E\u0437\u043F\u0438\u0441 \u043F\u043E \u0442\u043A\u0430\u043D\u0438\u043D\u0456","\u0411\u0430\u0442\u0456\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0456\u0433\u0440\u0430\u0448\u043E\u043A","\u041C'\u044F\u043A\u0456 \u0456\u0433\u0440\u0430\u0448\u043A\u0438","\u0414\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u0456\u0433\u0440\u0430\u0448\u043A\u0438","\u0420\u043E\u0437\u0432\u0438\u0432\u0430\u044E\u0447\u0456 \u0456\u0433\u0440\u0430\u0448\u043A\u0438","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043F\u0430\u043F\u0435\u0440\u0443","\u0420\u0443\u0447\u043D\u0438\u0439 \u043F\u0430\u043F\u0456\u0440","\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u044C\u043A\u0438\u0439 \u043F\u0430\u043F\u0456\u0440","\u0421\u043A\u0440\u0430\u043F\u0431\u0443\u043A\u0456\u043D\u0433","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043B\u0438\u0441\u0442\u0456\u0432\u043E\u043A","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0456\u0432","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u043B\u043E\u043A\u043D\u043E\u0442\u0456\u0432","\u041F\u0435\u0440\u0435\u043F\u043B\u0435\u0442\u0435\u043D\u043D\u044F","\u041F\u0430\u043B\u0456\u0442\u0443\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0456\u044F \u043A\u043D\u0438\u0433","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0440\u0430\u043C","\u0411\u0430\u0433\u0435\u0442\u043D\u0430 \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043D\u044F","\u0420\u0430\u043C\u0438 \u0434\u043B\u044F \u043A\u0430\u0440\u0442\u0438\u043D","\u0420\u0430\u043C\u0438 \u0434\u043B\u044F \u0434\u0437\u0435\u0440\u043A\u0430\u043B","\u0420\u0430\u043C\u0438 \u0434\u043B\u044F \u0444\u043E\u0442\u043E","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0440\u043E\u0431\u0456\u0442","\u041F\u0430\u0441\u043F\u0430\u0440\u0442\u0443","\u041D\u0430\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0445\u043E\u043B\u0441\u0442\u0456\u0432","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0434\u0437\u0435\u0440\u043A\u0430\u043B","\u0424\u0430\u0446\u0435\u0442","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0441\u043A\u043B\u0430","\u0420\u0456\u0437\u043A\u0430 \u0441\u043A\u043B\u0430","\u0421\u0432\u0435\u0440\u0434\u043B\u0456\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u0417\u0430\u0433\u0430\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u041C\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u043B\u0430","\u041F\u0456\u0441\u0442\u043A\u043E\u0441\u0442\u0440\u0443\u043C\u0438\u043D\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430","\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0448\u0442\u0443\u0447\u043D\u043E\u0433\u043E \u043A\u0430\u043C\u0435\u043D\u044E","\u0410\u043A\u0440\u0438\u043B\u043E\u0432\u0438\u0439 \u043A\u0430\u043C\u0456\u043D\u044C","\u041A\u0432\u0430\u0440\u0446\u043E\u0432\u0438\u0439 \u043A\u0430\u043C\u0456\u043D\u044C","\u0421\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0456","\u0421\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u0456 \u0437 \u043A\u0430\u043C\u0435\u043D\u044E","\u041F\u0456\u0434\u0432\u0456\u043A\u043E\u043D\u043D\u044F","\u0421\u0445\u043E\u0434\u0438\u043D\u043A\u0438 \u0437 \u043A\u0430\u043C\u0435\u043D\u044E","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u0430\u043C\u0435\u043D\u044E","\u0413\u0440\u0430\u043D\u0456\u0442","\u041C\u0430\u0440\u043C\u0443\u0440","\u041E\u043D\u0456\u043E\u043A\u0441","\u0422\u0440\u0430\u0432\u0435\u0440\u0442\u0438\u043D","\u0420\u0456\u0437\u043A\u0430 \u043A\u0430\u043C\u0435\u043D\u044E","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0430\u043C\u0435\u043D\u044E","\u041F\u0430\u043C'\u044F\u0442\u043D\u0438\u043A\u0438","\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u043C'\u044F\u0442\u043D\u0438\u043A\u0456\u0432","\u041D\u0430\u0434\u0433\u0440\u043E\u0431\u043A\u0438","\u0413\u0440\u0430\u0432\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043F\u0430\u043C'\u044F\u0442\u043D\u0438\u043A\u0430\u0445","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u043C'\u044F\u0442\u043D\u0438\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442","\u0411\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u0432\u0430\u0440\u0442\u0438\u0440","\u0420\u0435\u043C\u043E\u043D\u0442 \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432","\u041A\u043E\u0441\u043C\u0435\u0442\u0438\u0447\u043D\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442","\u041A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442","\u0404\u0432\u0440\u043E\u0440\u0435\u043C\u043E\u043D\u0442","\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u044C\u043A\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0456\u0434 \u043A\u043B\u044E\u0447","\u0420\u0435\u043C\u043E\u043D\u0442 \u043E\u0444\u0456\u0441\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0438\u0445 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u041E\u0437\u0434\u043E\u0431\u043B\u044E\u0432\u0430\u043B\u044C\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0441\u0442\u0456\u043D","\u0412\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0456\u043D","\u0428\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0428\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430 \u0441\u0442\u0456\u043D","\u0428\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430 \u0441\u0442\u0435\u043B\u0456","\u041C\u0430\u0448\u0438\u043D\u043D\u0430 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430","\u0428\u043F\u0430\u043A\u043B\u044E\u0432\u0430\u043D\u043D\u044F","\u0428\u043F\u0430\u043A\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0456\u043D","\u0428\u043F\u0430\u043A\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0435\u043B\u0456","\u041C\u0430\u043B\u044F\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0456\u043D","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0435\u043B\u0456","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0435 \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u0435\u043D\u0435\u0446\u0456\u0430\u043D\u0441\u044C\u043A\u0430 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430","\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043D\u0430 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430","\u041F\u043E\u043A\u043B\u0435\u0439\u043A\u0430 \u0448\u043F\u0430\u043B\u0435\u0440","\u0420\u0456\u0434\u043A\u0456 \u0448\u043F\u0430\u043B\u0435\u0440\u0438","\u0424\u043E\u0442\u043E\u0448\u043F\u0430\u043B\u0435\u0440\u0438","\u041F\u0456\u0434\u043B\u043E\u0433\u043E\u0432\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0421\u0442\u044F\u0436\u043A\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0438","\u041D\u0430\u043B\u0438\u0432\u043D\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043B\u0430\u043C\u0456\u043D\u0430\u0442\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u043D\u043E\u0457 \u0434\u043E\u0448\u043A\u0438","\u0426\u0438\u043A\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u0443","\u0428\u043B\u0456\u0444\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u0443","\u041B\u0430\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0435\u0442\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043B\u0456\u043D\u043E\u043B\u0435\u0443\u043C\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043A\u043E\u0432\u0440\u043E\u043B\u0456\u043D\u0443","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043B\u0438\u0442\u043A\u0438","\u041E\u0431\u043B\u0438\u0446\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u043B\u0438\u0442\u043A\u043E\u044E","\u0423\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043A\u0435\u0440\u0430\u043C\u043E\u0433\u0440\u0430\u043D\u0456\u0442\u0443","\u041C\u043E\u0437\u0430\u0457\u043A\u0430 \u043F\u043B\u0438\u0442\u043A\u043E\u0432\u0430","\u0417\u0430\u0442\u0438\u0440\u043A\u0430 \u0448\u0432\u0456\u0432","\u0421\u0442\u0435\u043B\u044C\u043E\u0432\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041D\u0430\u0442\u044F\u0436\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u041C\u0430\u0442\u043E\u0432\u0456 \u043D\u0430\u0442\u044F\u0436\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u0413\u043B\u044F\u043D\u0446\u0435\u0432\u0456 \u043D\u0430\u0442\u044F\u0436\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u0421\u0430\u0442\u0438\u043D\u043E\u0432\u0456 \u043D\u0430\u0442\u044F\u0436\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u0411\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0432\u043D\u0435\u0432\u0456 \u0441\u0442\u0435\u043B\u0456","\u041F\u0456\u0434\u0432\u0456\u0441\u043D\u0456 \u0441\u0442\u0435\u043B\u0456","\u0421\u0442\u0435\u043B\u0456 \u0437 \u0433\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D\u0443","\u041C\u043E\u043D\u0442\u0430\u0436 \u0433\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D\u0443","\u0410\u0440\u043A\u0438","\u041F\u0435\u0440\u0435\u0433\u043E\u0440\u043E\u0434\u043A\u0438","\u041D\u0456\u0448\u0456","\u041F\u043E\u043B\u0438\u0446\u0456 \u0437 \u0433\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D\u0443","\u041A\u043E\u0440\u043E\u0431\u0438","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0415\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430","\u0420\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u0440\u043E\u0432\u043E\u0434\u043A\u0438","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u043E\u0437\u0435\u0442\u043E\u043A","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0438\u043C\u0438\u043A\u0430\u0447\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043B\u044E\u0441\u0442\u0440","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u0432\u0456\u0442\u0438\u043B\u044C\u043D\u0438\u043A\u0456\u0432","\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0440\u0438\u043B\u0430\u0434\u0456\u0432","\u041C\u043E\u043D\u0442\u0430\u0436 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u0449\u0438\u0442\u0456\u0432","\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u0431\u0443\u0434\u0438\u043D\u043A\u0443","\u0420\u043E\u0437\u0443\u043C\u043D\u0438\u0439 \u0434\u0456\u043C","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u043E\u043C\u043E\u0444\u043E\u043D\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u0435\u043E\u0434\u043E\u043C\u043E\u0444\u043E\u043D\u0456\u0432","\u0412\u0456\u0434\u0435\u043E\u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0430\u043C\u0435\u0440","\u041E\u0445\u043E\u0440\u043E\u043D\u043D\u0456 \u0441\u0438\u0441\u0442\u0435\u043C\u0438","\u0421\u0438\u0433\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u041F\u043E\u0436\u0435\u0436\u043D\u0430 \u0441\u0438\u0433\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0456\u043A\u0430","\u0420\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0432\u043E\u0434\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0442\u0440\u0443\u0431","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u0430\u043A\u043E\u0432\u0438\u043D","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0443\u043D\u0456\u0442\u0430\u0437\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0456\u0434\u0435","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0430\u043D\u043D","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u0443\u0448\u043E\u0432\u0438\u0445 \u043A\u0430\u0431\u0456\u043D","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0437\u043C\u0456\u0448\u0443\u0432\u0430\u0447\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u043E\u0439\u043B\u0435\u0440\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0444\u0456\u043B\u044C\u0442\u0440\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043B\u0456\u0447\u0438\u043B\u044C\u043D\u0438\u043A\u0456\u0432 \u0432\u043E\u0434\u0438","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0430\u043B\u044C\u043D\u0438\u0445 \u043C\u0430\u0448\u0438\u043D","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u0438\u0439\u043D\u0438\u0445 \u043C\u0430\u0448\u0438\u043D","\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0433\u0430\u0437\u043E\u0432\u0438\u0445 \u043F\u043B\u0438\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0430\u043D\u0442\u0435\u0445\u043D\u0456\u043A\u0438","\u0423\u0441\u0443\u043D\u0435\u043D\u043D\u044F \u0437\u0430\u0441\u043E\u0440\u0456\u0432","\u0423\u0441\u0443\u043D\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0442\u0456\u043A\u0430\u043D\u044C","\u041F\u0440\u043E\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0430\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457","\u041E\u043F\u0430\u043B\u0435\u043D\u043D\u044F","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u0430\u0434\u0456\u0430\u0442\u043E\u0440\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u0430\u0434\u0456\u0430\u0442\u043E\u0440\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u043E\u0442\u043B\u0456\u0432","\u0413\u0430\u0437\u043E\u0432\u0456 \u043A\u043E\u0442\u043B\u0438","\u0415\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u043D\u0456 \u043A\u043E\u0442\u043B\u0438","\u0422\u0432\u0435\u0440\u044C\u043E\u043F\u0430\u043B\u0438\u0432\u043D\u0456 \u043A\u043E\u0442\u043B\u0438","\u0422\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0412\u043E\u0434\u044F\u043D\u0430 \u0442\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0415\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u043D\u0430 \u0442\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0406\u043D\u0444\u0440\u0430\u0447\u0435\u0440\u0432\u043E\u043D\u0430 \u0442\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430","\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0456\u044F","\u041C\u043E\u043D\u0442\u0430\u0436 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0456\u0457","\u0412\u0438\u0442\u044F\u0436\u043A\u0430","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0438\u0442\u044F\u0436\u043E\u043A","\u041F\u0440\u0438\u043F\u043B\u0438\u0432\u043D\u0430 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0456\u044F","\u0412\u0438\u0442\u044F\u0436\u043D\u0430 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0456\u044F","\u0420\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0446\u0456\u044F","\u041A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u041C\u043E\u043D\u0442\u0430\u0436 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u041E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0427\u0438\u0441\u0442\u043A\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0417\u0430\u043F\u0440\u0430\u0432\u043A\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0456\u0432","\u041F\u043E\u043A\u0440\u0456\u0432\u0435\u043B\u044C\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041F\u043E\u043A\u0440\u0456\u0432\u043B\u044F","\u041C\u043E\u043D\u0442\u0430\u0436 \u0434\u0430\u0445\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u0434\u0430\u0445\u0443","\u0423\u0442\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0434\u0430\u0445\u0443","\u0413\u0456\u0434\u0440\u043E\u0456\u0437\u043E\u043B\u044F\u0446\u0456\u044F \u0434\u0430\u0445\u0443","\u041C\u0435\u0442\u0430\u043B\u043E\u0447\u0435\u0440\u0435\u043F\u0438\u0446\u044F","\u041F\u0440\u043E\u0444\u043D\u0430\u0441\u0442\u0438\u043B","\u0411\u0456\u0442\u0443\u043C\u043D\u0430 \u0447\u0435\u0440\u0435\u043F\u0438\u0446\u044F","\u041A\u0435\u0440\u0430\u043C\u0456\u0447\u043D\u0430 \u0447\u0435\u0440\u0435\u043F\u0438\u0446\u044F","\u0424\u0430\u043B\u044C\u0446\u0435\u0432\u0430 \u043F\u043E\u043A\u0440\u0456\u0432\u043B\u044F","\u041F\u043B\u043E\u0441\u043A\u0430 \u043F\u043E\u043A\u0440\u0456\u0432\u043B\u044F","\u041C'\u044F\u043A\u0430 \u043F\u043E\u043A\u0440\u0456\u0432\u043B\u044F","\u0420\u0438\u043D\u0432\u0438","\u0412\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u0438","\u0424\u0430\u0441\u0430\u0434\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u041E\u0437\u0434\u043E\u0431\u043B\u0435\u043D\u043D\u044F \u0444\u0430\u0441\u0430\u0434\u0456\u0432","\u0423\u0442\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0444\u0430\u0441\u0430\u0434\u0456\u0432","\u041C\u043E\u043A\u0440\u0438\u0439 \u0444\u0430\u0441\u0430\u0434","\u0412\u0435\u043D\u0442\u0438\u043B\u044C\u043E\u0432\u0430\u043D\u0438\u0439 \u0444\u0430\u0441\u0430\u0434","\u0421\u0430\u0439\u0434\u0438\u043D\u0433","\u0411\u043B\u043E\u043A-\u0445\u0430\u0443\u0441","\u0428\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430 \u0444\u0430\u0441\u0430\u0434\u0443","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0444\u0430\u0441\u0430\u0434\u0443","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430 \u0444\u0430\u0441\u0430\u0434\u0443","\u041E\u0431\u043B\u0438\u0446\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u043B\u0438\u0442\u043A\u043E\u044E \u0444\u0430\u0441\u0430\u0434\u0443","\u041C\u0438\u0442\u0442\u044F \u0444\u0430\u0441\u0430\u0434\u0456\u0432","\u041F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u0456 \u0430\u043B\u044C\u043F\u0456\u043D\u0456\u0441\u0442\u0438","\u0412\u0438\u0441\u043E\u0442\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0411\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432","\u041A\u0430\u0440\u043A\u0430\u0441\u043D\u0456 \u0431\u0443\u0434\u0438\u043D\u043A\u0438","\u0411\u0443\u0434\u0438\u043D\u043A\u0438 \u0437 \u0431\u0440\u0443\u0441\u0430","\u0411\u0443\u0434\u0438\u043D\u043A\u0438 \u0437 \u0446\u0435\u0433\u043B\u0438","\u0411\u0443\u0434\u0438\u043D\u043A\u0438 \u0437 \u043F\u0438\u043D\u043E\u0431\u043B\u043E\u043A\u0443","\u0411\u0443\u0434\u0438\u043D\u043A\u0438 \u0437 \u0433\u0430\u0437\u043E\u0431\u043B\u043E\u043A\u0443","\u041C\u043E\u043D\u043E\u043B\u0456\u0442\u043D\u0435 \u0431\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E","\u0424\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442","\u0421\u0442\u0440\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442","\u041F\u043B\u0438\u0442\u043D\u0438\u0439 \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442","\u041F\u0430\u043B\u044C\u043E\u0432\u0438\u0439 \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442","\u041A\u043B\u0430\u0434\u043A\u0430","\u041A\u043B\u0430\u0434\u043A\u0430 \u0446\u0435\u0433\u043B\u0438","\u041A\u043B\u0430\u0434\u043A\u0430 \u0431\u043B\u043E\u043A\u0456\u0432","\u041E\u0431\u043B\u0438\u0446\u044E\u0432\u0430\u043B\u044C\u043D\u0430 \u043A\u043B\u0430\u0434\u043A\u0430","\u0411\u0435\u0442\u043E\u043D\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0417\u0430\u043B\u0438\u0432\u043A\u0430 \u0431\u0435\u0442\u043E\u043D\u0443","\u0410\u0440\u043C\u0443\u0432\u0430\u043D\u043D\u044F","\u041E\u043F\u0430\u043B\u0443\u0431\u043A\u0430","\u0417\u0435\u043C\u043B\u044F\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0412\u0438\u043A\u043E\u043F\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0456\u043B\u044F\u043D\u043A\u0438","\u0412\u0438\u0442\u043E\u0440\u0444\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0441\u0442\u0456\u043D","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u043F\u0435\u0440\u0435\u0433\u043E\u0440\u043E\u0434\u043E\u043A","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u043F\u0456\u0434\u043B\u043E\u0433\u0438","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0441\u0442\u0435\u043B\u0456","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0432\u0456\u043A\u043E\u043D","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0434\u0432\u0435\u0440\u0435\u0439","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043C\u0456\u0442\u0442\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0435\u0445\u043D\u0456\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043E\u0431\u0443\u0442\u043E\u0432\u043E\u0457 \u0442\u0435\u0445\u043D\u0456\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u0430\u043B\u044C\u043D\u0438\u0445 \u043C\u0430\u0448\u0438\u043D","\u0420\u0435\u043C\u043E\u043D\u0442 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u043E\u0440\u043E\u0437\u0438\u043B\u044C\u043D\u0438\u0445 \u043A\u0430\u043C\u0435\u0440","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u0438\u0439\u043D\u0438\u0445 \u043C\u0430\u0448\u0438\u043D","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043B\u0438\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u0433\u0430\u0437\u043E\u0432\u0438\u0445 \u043F\u043B\u0438\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u0435\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u043D\u0438\u0445 \u043F\u043B\u0438\u0442","\u0420\u0435\u043C\u043E\u043D\u0442 \u0434\u0443\u0445\u043E\u0432\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u0456\u043A\u0440\u043E\u0445\u0432\u0438\u043B\u044C\u043E\u0432\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u0430\u0432\u043E\u0432\u0430\u0440\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u0430\u0432\u043E\u043C\u0430\u0448\u0438\u043D","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u0440\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u0431\u043B\u0435\u043D\u0434\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u0456\u043A\u0441\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C'\u044F\u0441\u043E\u0440\u0443\u0431\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u043E\u043A\u043E\u0432\u0438\u0436\u0438\u043C\u0430\u043B\u043E\u043A","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u043E\u0441\u0442\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0447\u0430\u0439\u043D\u0438\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u0430\u0441\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0430\u0440\u043E\u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0438\u043B\u043E\u0441\u043E\u0441\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0440\u043E\u0431\u043E\u0442\u0456\u0432-\u043F\u0438\u043B\u043E\u0441\u043E\u0441\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043B\u0430\u0437\u043C\u043E\u0432\u0438\u0445 \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 LED \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 Smart TV","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u043E\u043D\u0456\u0442\u043E\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0440\u0456\u0432","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0440\u043E\u043D\u0448\u0442\u0435\u0439\u043D\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0430\u0443\u0434\u0456\u043E\u0442\u0435\u0445\u043D\u0456\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0445 \u0446\u0435\u043D\u0442\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0456\u0434\u0441\u0438\u043B\u044E\u0432\u0430\u0447\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u043D\u0430\u0432\u0443\u0448\u043D\u0438\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 iPhone","\u0420\u0435\u043C\u043E\u043D\u0442 Samsung","\u0420\u0435\u043C\u043E\u043D\u0442 Xiaomi","\u0417\u0430\u043C\u0456\u043D\u0430 \u0435\u043A\u0440\u0430\u043D\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u044F","\u0417\u0430\u043C\u0456\u043D\u0430 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u043E\u0437'\u0454\u043C\u0443 \u0437\u0430\u0440\u044F\u0434\u043A\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043D\u043E\u043F\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0434\u0438\u043D\u0430\u043C\u0456\u043A\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043C\u0456\u043A\u0440\u043E\u0444\u043E\u043D\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0437\u0430\u0434\u043D\u044C\u043E\u0457 \u043A\u0440\u0438\u0448\u043A\u0438","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0432\u043E\u0434\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 iPad","\u0420\u0435\u043C\u043E\u043D\u0442 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 MacBook","\u0427\u0438\u0441\u0442\u043A\u0430 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043C\u0430\u0442\u0440\u0438\u0446\u0456","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043B\u0430\u0432\u0456\u0430\u0442\u0443\u0440\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0436\u043E\u0440\u0441\u0442\u043A\u043E\u0433\u043E \u0434\u0438\u0441\u043A\u0430","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F SSD","\u0417\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u043D\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456","\u0417\u0430\u043C\u0456\u043D\u0430 \u0442\u0435\u0440\u043C\u043E\u043F\u0430\u0441\u0442\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u0420\u0435\u043C\u043E\u043D\u0442 \u041F\u041A","\u0417\u0431\u0456\u0440\u043A\u0430 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u0410\u043F\u0433\u0440\u0435\u0439\u0434 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u041A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456\u0432","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u041F\u041A","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F Windows","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F Linux","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F macOS","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0456\u0432","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F Wi-Fi","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0440\u043E\u0443\u0442\u0435\u0440\u0430","\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u043D\u0442\u0435\u0440\u0430","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u0438\u043D\u0442\u0435\u0440\u0430","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u0430\u043D\u0435\u0440\u0430","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0440\u0443\u0441\u0456\u0432","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0440\u0443\u0441\u0456\u0432","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u043D\u0442\u0438\u0432\u0456\u0440\u0443\u0441\u0430","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043D\u0442\u0438\u0432\u0456\u0440\u0443\u0441\u0430","\u0427\u0438\u0441\u0442\u043A\u0430 \u0432\u0456\u0434 \u0432\u0456\u0440\u0443\u0441\u0456\u0432","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0456\u0432","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0444\u043E\u0442\u043E","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0444\u043E\u0440\u043C\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0435 \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445","\u041F\u0440\u0438\u0441\u043A\u043E\u0440\u0435\u043D\u043D\u044F \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0430","\u041E\u043F\u0442\u0438\u043C\u0456\u0437\u0430\u0446\u0456\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0438","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F BIOS","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0447\u0438\u0445","\u0427\u0438\u0441\u0442\u043A\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0433\u043E \u0431\u043B\u043E\u043A\u0443","\u0410\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0456\u0441","\u0421\u0422\u041E","\u0420\u0435\u043C\u043E\u043D\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u0456\u0432","\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0435 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u041E","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0430\u0432\u0442\u043E","\u041A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u0430 \u0434\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0445\u043E\u0434\u043E\u0432\u043E\u0457","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043F\u0456\u0434\u0432\u0456\u0441\u043A\u0438","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0433\u0430\u043B\u044C\u043C","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u041A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043C\u0430\u0441\u043B\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0444\u0456\u043B\u044C\u0442\u0440\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043C\u0430\u0441\u043B\u044F\u043D\u043E\u0433\u043E \u0444\u0456\u043B\u044C\u0442\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u043E\u0433\u043E \u0444\u0456\u043B\u044C\u0442\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u0430\u043B\u0438\u0432\u043D\u043E\u0433\u043E \u0444\u0456\u043B\u044C\u0442\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0441\u0430\u043B\u043E\u043D\u043D\u043E\u0433\u043E \u0444\u0456\u043B\u044C\u0442\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0441\u0432\u0456\u0447\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0413\u0420\u041C","\u0420\u0435\u043C\u043E\u043D\u0442 \u0445\u043E\u0434\u043E\u0432\u043E\u0457","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0456\u0434\u0432\u0456\u0441\u043A\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0430\u043C\u043E\u0440\u0442\u0438\u0437\u0430\u0442\u043E\u0440\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0441\u0442\u0456\u0439\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0441\u0430\u0439\u043B\u0435\u043D\u0442\u0431\u043B\u043E\u043A\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0432\u0430\u0436\u0435\u043B\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u0443\u043B\u044C\u043E\u0432\u0438\u0445","\u0417\u0430\u043C\u0456\u043D\u0430 \u043D\u0430\u043A\u043E\u043D\u0435\u0447\u043D\u0438\u043A\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u0443\u043B\u044C\u043E\u0432\u0438\u0445 \u0442\u044F\u0433","\u0420\u0435\u043C\u043E\u043D\u0442 \u0433\u0430\u043B\u044C\u043C","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0430\u043B\u044C\u043C\u0456\u0432\u043D\u0438\u0445 \u043A\u043E\u043B\u043E\u0434\u043E\u043A","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0430\u043B\u044C\u043C\u0456\u0432\u043D\u0438\u0445 \u0434\u0438\u0441\u043A\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0430\u043B\u044C\u043C\u0456\u0432\u043D\u0438\u0445 \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u0433\u0430\u043B\u044C\u043C\u0456\u0432\u043D\u043E\u0457 \u0440\u0456\u0434\u0438\u043D\u0438","\u041F\u0440\u043E\u043A\u0430\u0447\u043A\u0430 \u0433\u0430\u043B\u044C\u043C","\u0420\u0435\u043C\u043E\u043D\u0442 \u0442\u0440\u0430\u043D\u0441\u043C\u0456\u0441\u0456\u0457","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447","\u0420\u0435\u043C\u043E\u043D\u0442 \u041C\u041A\u041F\u041F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0410\u041A\u041F\u041F","\u0417\u0430\u043C\u0456\u043D\u0430 \u0437\u0447\u0435\u043F\u043B\u0435\u043D\u043D\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u0440\u043E\u0437\u0434\u0430\u0442\u043A\u0438","\u0420\u0435\u043C\u043E\u043D\u0442 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0428\u0420\u0423\u0421","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u043E\u0445\u043E\u043B\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u0430\u0434\u0456\u0430\u0442\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u043E\u043C\u043F\u0438","\u0417\u0430\u043C\u0456\u043D\u0430 \u0442\u0435\u0440\u043C\u043E\u0441\u0442\u0430\u0442\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0430\u043D\u0442\u0438\u0444\u0440\u0438\u0437\u0443","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u0430\u043F\u0440\u0430\u0432\u043A\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0430 \u0430\u0432\u0442\u043E","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0440\u0430\u0434\u0456\u0430\u0442\u043E\u0440\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u0435\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438 \u0430\u0432\u0442\u043E","\u0420\u0435\u043C\u043E\u043D\u0442 \u0441\u0442\u0430\u0440\u0442\u0435\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430","\u0417\u0430\u0440\u044F\u0434\u043A\u0430 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u043E\u0432\u043E\u0434\u043A\u0438","\u0420\u043E\u0437\u0432\u0430\u043B-\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u043D\u044F","3D \u0440\u043E\u0437\u0432\u0430\u043B-\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u043D\u044F","\u0420\u0435\u0433\u0443\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0440\u043E\u0437\u0432\u0430\u043B\u0443","\u0420\u0435\u0433\u0443\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0445\u043E\u0436\u0434\u0435\u043D\u043D\u044F","\u0428\u0438\u043D\u043E\u043C\u043E\u043D\u0442\u0430\u0436","\u041C\u043E\u043D\u0442\u0430\u0436 \u0448\u0438\u043D","\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0448\u0438\u043D","\u0411\u0430\u043B\u0430\u043D\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043B\u0456\u0441","\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u0440\u043E\u043A\u043E\u043B\u0456\u0432","\u0412\u0443\u043B\u043A\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F","\u0417\u0430\u043C\u0456\u043D\u0430 \u0432\u0435\u043D\u0442\u0438\u043B\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u043E\u043B\u0456\u0441","\u0421\u0435\u0437\u043E\u043D\u043D\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F \u0448\u0438\u043D","\u0410\u0432\u0442\u043E\u043C\u0438\u0439\u043A\u0430","\u041C\u0438\u0439\u043A\u0430 \u0430\u0432\u0442\u043E","\u0420\u0443\u0447\u043D\u0430 \u043C\u0438\u0439\u043A\u0430","\u0411\u0435\u0437\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u043C\u0438\u0439\u043A\u0430","\u041C\u0438\u0439\u043A\u0430 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u041C\u0438\u0439\u043A\u0430 \u0434\u043D\u0438\u0449\u0430","\u041C\u0438\u0439\u043A\u0430 \u043A\u043E\u043B\u0456\u0441\u043D\u0438\u0445 \u0430\u0440\u043E\u043A","\u0421\u0443\u0445\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u0430\u043B\u043E\u043D\u0443","\u0412\u043E\u043B\u043E\u0433\u0435 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u043D\u043D\u044F \u0441\u0430\u043B\u043E\u043D\u0443","\u0414\u0435\u0442\u0435\u0439\u043B\u0456\u043D\u0433","\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0430 \u043C\u0438\u0439\u043A\u0430","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0441\u0430\u043B\u043E\u043D\u0443","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0441\u0438\u0434\u0456\u043D\u044C","\u0425\u0456\u043C\u0447\u0438\u0441\u0442\u043A\u0430 \u0441\u0442\u0435\u043B\u0456","\u0427\u0438\u0441\u0442\u043A\u0430 \u0441\u0430\u043B\u043E\u043D\u0443","\u041F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u0437\u043E\u0432\u0430","\u0410\u0431\u0440\u0430\u0437\u0438\u0432\u043D\u0435 \u043F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u0430\u0445\u0438\u0441\u043D\u0435 \u043F\u043E\u043B\u0456\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u041D\u0430\u043D\u043E\u043A\u0435\u0440\u0430\u043C\u0456\u043A\u0430","\u0420\u0456\u0434\u043A\u0435 \u0441\u043A\u043B\u043E","\u0412\u043E\u0441\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u043A\u043E\u043D \u0430\u0432\u0442\u043E","\u0422\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0444\u0430\u0440","\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F","\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0444\u0430\u0440","\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u0437\u043E\u0432\u0430","\u0410\u043D\u0442\u0438\u0433\u0440\u0430\u0432\u0456\u0439\u043D\u0430 \u043F\u043B\u0456\u0432\u043A\u0430","\u041E\u043A\u043B\u0435\u0439\u043A\u0430 \u0430\u0432\u0442\u043E","\u041E\u043A\u043B\u0435\u0439\u043A\u0430 \u043F\u043B\u0456\u0432\u043A\u043E\u044E","\u0412\u0456\u043D\u0456\u043B\u043E\u0432\u0430 \u043F\u043B\u0456\u0432\u043A\u0430","\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430 \u043F\u043B\u0456\u0432\u043A\u0430","\u0410\u0435\u0440\u043E\u0433\u0440\u0430\u0444\u0456\u044F","\u0420\u043E\u0437\u043F\u0438\u0441 \u0430\u0432\u0442\u043E","\u041A\u0443\u0437\u043E\u0432\u043D\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442","\u0420\u0438\u0445\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u0438\u0445\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u0437\u043E\u0432\u0430","\u0417\u0432\u0430\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u043A\u0443\u0437\u043E\u0432\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u043F\u043E\u0440\u043E\u0433\u0456\u0432","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u0440\u0438\u043B\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0434\u0432\u0435\u0440\u0435\u0439","\u0417\u0430\u043C\u0456\u043D\u0430 \u043A\u0430\u043F\u043E\u0442\u0430","\u0417\u0430\u043C\u0456\u043D\u0430 \u0431\u0430\u043C\u043F\u0435\u0440\u0430","\u0420\u0435\u043C\u043E\u043D\u0442 \u0431\u0430\u043C\u043F\u0435\u0440\u0430","\u041C\u0430\u043B\u044F\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438 \u0430\u0432\u0442\u043E","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u0432\u0442\u043E","\u0424\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0435\u0442\u0430\u043B\u0435\u0439","\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u0435 \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u043E\u0432\u043D\u0435 \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0456\u0434\u0431\u0456\u0440 \u0444\u0430\u0440\u0431\u0438","\u041A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u0438\u0439 \u043F\u0456\u0434\u0431\u0456\u0440 \u0444\u0430\u0440\u0431\u0438","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443","\u0417\u0430\u0445\u0438\u0441\u0442 \u043A\u0430\u0440\u0442\u0435\u0440\u0430","\u0417\u0430\u0445\u0438\u0441\u0442 \u0434\u043D\u0438\u0449\u0430","\u0410\u043D\u0442\u0438\u043A\u043E\u0440\u043E\u0437\u0456\u0439\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430","\u0428\u0443\u043C\u043E\u0456\u0437\u043E\u043B\u044F\u0446\u0456\u044F","\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044F","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u0432\u0442\u043E\u0437\u0432\u0443\u043A\u0443","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F GPS","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u0435\u043E\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u0440\u043A\u0442\u0440\u043E\u043D\u0456\u043Aa","\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0430\u043C\u0435\u0440\u0438 \u0437\u0430\u0434\u043D\u044C\u043E\u0433\u043E \u0432\u0438\u0434\u0443","\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0444\u0430\u0440\u043A\u043E\u043F\u0430","\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A\u0430","\u0422\u044E\u043D\u0456\u043D\u0433","\u0422\u044E\u043D\u0456\u043D\u0433 \u0434\u0432\u0438\u0433\u0443\u043D\u0430","\u0427\u0456\u043F-\u0442\u044E\u043D\u0456\u043D\u0433","\u0422\u044E\u043D\u0456\u043D\u0433 \u043F\u0456\u0434\u0432\u0456\u0441\u043A\u0438","\u0422\u044E\u043D\u0456\u043D\u0433 \u0441\u0430\u043B\u043E\u043D\u0443","\u041F\u0435\u0440\u0435\u0442\u044F\u0436\u043A\u0430 \u0441\u0430\u043B\u043E\u043D\u0443","\u041F\u0435\u0440\u0435\u0442\u044F\u0436\u043A\u0430 \u0441\u0438\u0434\u0456\u043D\u044C","\u041F\u0435\u0440\u0435\u0442\u044F\u0436\u043A\u0430 \u043A\u0435\u0440\u043C\u0430","\u0422\u044E\u043D\u0456\u043D\u0433 \u0441\u0432\u0456\u0442\u043B\u0430","\u041A\u0441\u0435\u043D\u043E\u043D","\u0411\u0456\u043A\u0441\u0435\u043D\u043E\u043D","LED \u043B\u0430\u043C\u043F\u0438","\u0415\u0432\u0430\u043A\u0443\u0430\u0442\u043E\u0440","\u0415\u0432\u0430\u043A\u0443\u0430\u0446\u0456\u044F \u0430\u0432\u0442\u043E","\u0422\u0435\u0445\u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043D\u0430 \u0434\u043E\u0440\u043E\u0437\u0456","\u0412\u0430\u043D\u0442\u0430\u0436\u043D\u0456 \u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F","\u0412\u0430\u043D\u0442\u0430\u0436\u043E\u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F","\u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u043C\u0435\u0431\u043B\u0456\u0432","\u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0432\u0430\u043D\u0442\u0430\u0436\u0456\u0432","\u0412\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043A\u0438","\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u0432\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043A\u0456\u0432","\u041D\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F","\u0420\u043E\u0437\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F","\u0412\u0438\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0441\u043C\u0456\u0442\u0442\u044F \u0432\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043C \u0430\u0432\u0442\u043E","\u041F\u0435\u0440\u0435\u0457\u0437\u0434","\u041F\u0435\u0440\u0435\u0457\u0437\u0434 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0438","\u041F\u0435\u0440\u0435\u0457\u0437\u0434 \u043E\u0444\u0456\u0441\u0443","\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0440\u0435\u0447\u0435\u0439","\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u042E\u0440\u0438\u0441\u0442","\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u0457","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u044E\u0440\u0438\u0441\u0442\u0430","\u041F\u0440\u0430\u0432\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430","\u0410\u0434\u0432\u043E\u043A\u0430\u0442","\u0410\u0434\u0432\u043E\u043A\u0430\u0442\u0441\u044C\u043A\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043D\u0438\u0446\u0442\u0432\u043E \u0432 \u0441\u0443\u0434\u0456","\u0421\u0443\u0434\u043E\u0432\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u0426\u0438\u0432\u0456\u043B\u044C\u043D\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u041A\u0440\u0438\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u0413\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u044C\u043A\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0456 \u0441\u043F\u0440\u0430\u0432\u0438","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0437\u043E\u0432\u0456\u0432","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0441\u043A\u0430\u0440\u0433","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0456\u0432","\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0456\u0432","\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0430 \u0435\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430","\u041F\u0440\u0430\u0432\u043E\u0432\u0430 \u0435\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432","\u041D\u043E\u0442\u0430\u0440\u0456\u0443\u0441","\u041D\u043E\u0442\u0430\u0440\u0456\u0430\u043B\u044C\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041D\u043E\u0442\u0430\u0440\u0456\u0430\u043B\u044C\u043D\u0435 \u043F\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u043D\u044F","\u0414\u043E\u0432\u0456\u0440\u0435\u043D\u043E\u0441\u0442\u0456","\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430 \u0434\u043E\u0432\u0456\u0440\u0435\u043D\u0456\u0441\u0442\u044C","\u0414\u043E\u0432\u0456\u0440\u0435\u043D\u0456\u0441\u0442\u044C \u043D\u0430 \u0430\u0432\u0442\u043E","\u0414\u043E\u0432\u0456\u0440\u0435\u043D\u0456\u0441\u0442\u044C \u043D\u0430 \u0434\u0438\u0442\u0438\u043D\u0443","\u0417\u0430\u043F\u043E\u0432\u0456\u0442\u0438","\u0421\u043F\u0430\u0434\u0449\u0438\u043D\u0430","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0438","\u0412\u0441\u0442\u0443\u043F \u0443 \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0443","\u0421\u0432\u0456\u0434\u043E\u0446\u0442\u0432\u043E \u043F\u0440\u043E \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0443","\u041D\u043E\u0442\u0430\u0440\u0456\u0430\u043B\u044C\u043D\u0435 \u0437\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F","\u0417\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F \u043A\u043E\u043F\u0456\u0439","\u0417\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F \u043F\u0456\u0434\u043F\u0438\u0441\u0456\u0432","\u0417\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u0410\u043F\u043E\u0441\u0442\u0438\u043B\u044C","\u041B\u0435\u0433\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0441\u044C\u043A\u0430 \u043B\u0435\u0433\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0431\u0456\u0437\u043D\u0435\u0441\u0443","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0424\u041E\u041F","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0422\u041E\u0412","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u041F\u041F","\u041B\u0456\u043A\u0432\u0456\u0434\u0430\u0446\u0456\u044F \u0424\u041E\u041F","\u041B\u0456\u043A\u0432\u0456\u0434\u0430\u0446\u0456\u044F \u0422\u041E\u0412","\u0417\u043C\u0456\u043D\u0430 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430","\u0417\u043C\u0456\u043D\u0430 \u0443\u0447\u0430\u0441\u043D\u0438\u043A\u0456\u0432","\u0412\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0437\u043C\u0456\u043D \u0434\u043E \u0441\u0442\u0430\u0442\u0443\u0442\u0443","\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0457 \u043C\u0430\u0440\u043A\u0438","\u041F\u0430\u0442\u0435\u043D\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u0410\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0435 \u043F\u0440\u0430\u0432\u043E","\u041B\u0456\u0446\u0435\u043D\u0437\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u0435\u043C\u0435\u043B\u044C\u043D\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0437\u0435\u043C\u043B\u0456","\u041F\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u0437\u0435\u043C\u043B\u0456","\u041A\u0443\u043F\u0456\u0432\u043B\u044F-\u043F\u0440\u043E\u0434\u0430\u0436 \u0437\u0435\u043C\u043B\u0456","\u041E\u0440\u0435\u043D\u0434\u0430 \u0437\u0435\u043C\u043B\u0456","\u041D\u0435\u0440\u0443\u0445\u043E\u043C\u0456\u0441\u0442\u044C","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u041A\u0443\u043F\u0456\u0432\u043B\u044F-\u043F\u0440\u043E\u0434\u0430\u0436 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u041E\u0440\u0435\u043D\u0434\u0430 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u0414\u043E\u0433\u043E\u0432\u0456\u0440 \u043A\u0443\u043F\u0456\u0432\u043B\u0456-\u043F\u0440\u043E\u0434\u0430\u0436\u0443","\u0414\u043E\u0433\u043E\u0432\u0456\u0440 \u043E\u0440\u0435\u043D\u0434\u0438","\u041F\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0438","\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0432 \u0435\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0456\u044E","\u041F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0439 \u043F\u0430\u0441\u043F\u043E\u0440\u0442","\u0421\u0456\u043C\u0435\u0439\u043D\u0435 \u043F\u0440\u0430\u0432\u043E","\u0420\u043E\u0437\u043B\u0443\u0447\u0435\u043D\u043D\u044F","\u041F\u043E\u0434\u0456\u043B \u043C\u0430\u0439\u043D\u0430","\u0410\u043B\u0456\u043C\u0435\u043D\u0442\u0438","\u0421\u0442\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0430\u043B\u0456\u043C\u0435\u043D\u0442\u0456\u0432","\u041F\u043E\u0437\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0430\u0442\u044C\u043A\u0456\u0432\u0441\u044C\u043A\u0438\u0445 \u043F\u0440\u0430\u0432","\u0423\u0441\u0438\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041E\u043F\u0456\u043A\u0430","\u0422\u0440\u0443\u0434\u043E\u0432\u0435 \u043F\u0440\u0430\u0432\u043E","\u0422\u0440\u0443\u0434\u043E\u0432\u0456 \u0441\u043F\u043E\u0440\u0438","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043D\u0430 \u0440\u043E\u0431\u043E\u0442\u0456","\u0421\u0442\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0438","\u041A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0456\u0457 \u043F\u0440\u0438 \u0437\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043D\u0456","\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u044C\u043A\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440","\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u044C\u043A\u0438\u0439 \u043E\u0431\u043B\u0456\u043A","\u0412\u0435\u0434\u0435\u043D\u043D\u044F \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0456\u0457","\u041F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0438\u0439 \u043E\u0431\u043B\u0456\u043A","\u041F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0437\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C","\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0430 \u0437\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C","\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0437\u0432\u0456\u0442\u043D\u043E\u0441\u0442\u0456","\u0417\u0434\u0430\u0447\u0430 \u0437\u0432\u0456\u0442\u043D\u043E\u0441\u0442\u0456","\u0414\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0456\u0457","\u0404\u0434\u0438\u043D\u0438\u0439 \u043F\u043E\u0434\u0430\u0442\u043E\u043A","\u041F\u0414\u0412","\u041E\u0431\u043B\u0456\u043A \u041F\u0414\u0412","\u041F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u0457","\u041E\u043F\u0442\u0438\u043C\u0456\u0437\u0430\u0446\u0456\u044F \u043E\u043F\u043E\u0434\u0430\u0442\u043A\u0443\u0432\u0430\u043D\u043D\u044F","\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u043D\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442","\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0438","\u041A\u0430\u0434\u0440\u043E\u0432\u0438\u0439 \u043E\u0431\u043B\u0456\u043A","\u041A\u0430\u0434\u0440\u043E\u0432\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0456\u0432","\u0422\u0440\u0443\u0434\u043E\u0432\u0456 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0438","\u0410\u0443\u0434\u0438\u0442","\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0438\u0439 \u0430\u0443\u0434\u0438\u0442","\u041F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0438\u0439 \u0430\u0443\u0434\u0438\u0442","\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u0430\u0443\u0434\u0438\u0442","\u041E\u0446\u0456\u043D\u043A\u0430 \u0431\u0456\u0437\u043D\u0435\u0441\u0443","\u041E\u0446\u0456\u043D\u043A\u0430 \u043C\u0430\u0439\u043D\u0430","\u041E\u0446\u0456\u043D\u043A\u0430 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u0415\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u0430 \u043E\u0446\u0456\u043D\u043A\u0430","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0446\u044C\u043A\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041F\u0438\u0441\u044C\u043C\u043E\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0423\u0441\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041C\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u0425\u0443\u0434\u043E\u0436\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041D\u0430\u0443\u043A\u043E\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u043D\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0443","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u043D\u0456\u043C\u0435\u0446\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u0456\u0441\u043F\u0430\u043D\u0441\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u0456\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0437 \u043F\u043E\u043B\u044C\u0441\u044C\u043A\u043E\u0457","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0456\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u0456\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0434\u0438\u043F\u043B\u043E\u043C\u0456\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0441\u0432\u0456\u0434\u043E\u0446\u0442\u0432","\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0456\u0432","\u041D\u043E\u0442\u0430\u0440\u0456\u0430\u043B\u044C\u043D\u0435 \u0437\u0430\u0432\u0456\u0440\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u041B\u0435\u0433\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u0410\u043F\u043E\u0441\u0442\u0438\u043B\u044C \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0441\u0430\u0439\u0442\u0456\u0432","\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C","\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0456\u0433\u043E\u0440","\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432","\u041A\u043E\u0440\u0435\u043A\u0442\u0443\u0440\u0430","\u0412\u0438\u0447\u0438\u0442\u043A\u0430 \u0442\u0435\u043A\u0441\u0442\u0456\u0432","\u041B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0430","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u0430 \u043A\u043B\u0456\u043D\u0456\u043A\u0430","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430","\u0412\u0438\u0457\u0437\u0434 \u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u0430","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440 \u043D\u0430 \u0434\u043E\u043C\u0443","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u0430","\u041E\u0433\u043B\u044F\u0434 \u0442\u0432\u0430\u0440\u0438\u043D\u0438","\u0412\u0430\u043A\u0446\u0438\u043D\u0430\u0446\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0429\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u0429\u0435\u043F\u043B\u0435\u043D\u043D\u044F \u043A\u043E\u0442\u0456\u0432","\u0412\u0430\u043A\u0446\u0438\u043D\u0430 \u0432\u0456\u0434 \u0441\u043A\u0430\u0437\u0443","\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430 \u0432\u0430\u043A\u0446\u0438\u043D\u0430\u0446\u0456\u044F","\u0414\u0435\u0433\u0435\u043B\u044C\u043C\u0456\u043D\u0442\u0438\u0437\u0430\u0446\u0456\u044F","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u043F\u0430\u0440\u0430\u0437\u0438\u0442\u0456\u0432","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u0431\u043B\u0456\u0445","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434 \u043A\u043B\u0456\u0449\u0456\u0432","\u0421\u0442\u0435\u0440\u0438\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0421\u0442\u0435\u0440\u0438\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043A\u0456\u0448\u043E\u043A","\u0421\u0442\u0435\u0440\u0438\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0441\u043E\u0431\u0430\u043A","\u041A\u0430\u0441\u0442\u0440\u0430\u0446\u0456\u044F","\u041A\u0430\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043A\u043E\u0442\u0456\u0432","\u041A\u0430\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u043E\u0431\u0430\u043A","\u0427\u0456\u043F\u0443\u0432\u0430\u043D\u043D\u044F","\u0427\u0456\u043F\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0412\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u0438\u0439 \u043F\u0430\u0441\u043F\u043E\u0440\u0442","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u0432\u0438\u0457\u0437\u0434\u0443","\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0442\u0432\u0430\u0440\u0438\u043D","\u0423\u0417\u0414 \u0442\u0432\u0430\u0440\u0438\u043D","\u0420\u0435\u043D\u0442\u0433\u0435\u043D \u0442\u0432\u0430\u0440\u0438\u043D","\u0415\u041A\u0413 \u0442\u0432\u0430\u0440\u0438\u043D","\u0410\u043D\u0430\u043B\u0456\u0437\u0438 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 \u0434\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0422\u0435\u0440\u0430\u043F\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u0442\u0456\u0432","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0440\u0438\u0437\u0443\u043D\u0456\u0432","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0442\u0430\u0445\u0456\u0432","\u0415\u043A\u0437\u043E\u0442\u0438\u0447\u043D\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438","\u0425\u0456\u0440\u0443\u0440\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041E\u043F\u0435\u0440\u0430\u0446\u0456\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C","\u041E\u0440\u0442\u043E\u043F\u0435\u0434\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041E\u0444\u0442\u0430\u043B\u044C\u043C\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0447\u0435\u0439","\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0427\u0438\u0441\u0442\u043A\u0430 \u0437\u0443\u0431\u0456\u0432 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0443\u0431\u043D\u043E\u0433\u043E \u043A\u0430\u043C\u0435\u043D\u044E","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432 \u0442\u0432\u0430\u0440\u0438\u043D","\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0443\u0431\u0456\u0432","\u0414\u0435\u0440\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u043A\u0456\u0440\u0438","\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0443\u0445","\u041A\u0430\u0440\u0434\u0456\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041D\u0435\u0432\u0440\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041E\u043D\u043A\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0415\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0420\u0435\u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0420\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044F","\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u043E\u0433\u0430\u0445","\u0412\u0435\u0434\u0435\u043D\u043D\u044F \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456","\u0423\u0417\u0414 \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456","\u0415\u0432\u0442\u0430\u043D\u0430\u0437\u0456\u044F","\u041A\u0440\u0435\u043C\u0430\u0446\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C\u0438","\u0417\u043E\u043E\u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044F","\u0413\u043E\u0442\u0435\u043B\u044C \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0413\u043E\u0442\u0435\u043B\u044C \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A","\u0413\u043E\u0442\u0435\u043B\u044C \u0434\u043B\u044F \u043A\u043E\u0442\u0456\u0432","\u041F\u0435\u0440\u0435\u0434\u0435\u0440\u0436\u043A\u0430 \u0442\u0432\u0430\u0440\u0438\u043D","\u041F\u0435\u0440\u0435\u0434\u0435\u0440\u0436\u043A\u0430 \u0441\u043E\u0431\u0430\u043A","\u041F\u0435\u0440\u0435\u0434\u0435\u0440\u0436\u043A\u0430 \u043A\u043E\u0442\u0456\u0432","\u0414\u0435\u043D\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434","\u0412\u0438\u0433\u0443\u043B \u0441\u043E\u0431\u0430\u043A","\u0412\u0438\u0433\u0443\u043B","\u0412\u0438\u0433\u0443\u043B\u044C\u043D\u0438\u043A","\u0414\u0440\u0435\u0441\u0438\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0440\u0435\u0441\u0438\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u041A\u0456\u043D\u043E\u043B\u043E\u0433","\u041A\u0456\u043D\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u0422\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043E\u0431\u0430\u043A","\u0412\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F \u0446\u0443\u0446\u0435\u043D\u044F\u0442","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0438","\u0417\u041A\u0421","\u041E\u041A\u0414","\u0417\u0430\u0445\u0438\u0441\u043D\u043E-\u043A\u0430\u0440\u0430\u0443\u043B\u044C\u043D\u0430 \u0441\u043B\u0443\u0436\u0431\u0430","\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u043A\u0443\u0440\u0441 \u0434\u0440\u0435\u0441\u0438\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0410\u0434\u0436\u0438\u043B\u0456\u0442\u0456","\u0424\u0440\u0456\u0441\u0431\u0456","\u0417\u043E\u043E\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433","\u0425\u0435\u043D\u0434\u043B\u0456\u043D\u0433","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0432\u0438\u0441\u0442\u0430\u0432\u043E\u043A","\u0417\u043E\u043E\u0442\u0430\u043A\u0441\u0438","\u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u0437\u0430 \u043A\u043E\u0440\u0434\u043E\u043D","\u0422\u0430\u043A\u0441\u0456 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0417\u043E\u043E\u043C\u0430\u0433\u0430\u0437\u0438\u043D","\u041A\u043E\u0440\u043C \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0410\u043A\u0441\u0435\u0441\u0443\u0430\u0440\u0438 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u041E\u0434\u044F\u0433 \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D","\u0410\u0432\u0442\u043E\u0448\u043A\u043E\u043B\u0430","\u041A\u0443\u0440\u0441\u0438 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0432\u043E\u0434\u0456\u043D\u043D\u044E","\u0410\u0432\u0442\u043E\u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440","\u0406\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0437 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F B","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F A","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F C","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F D","\u0422\u0435\u043E\u0440\u0456\u044F \u041F\u0414\u0420","\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u0437 \u043D\u0443\u043B\u044F","\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043D\u0430\u0432\u0438\u0447\u043E\u043A \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442","\u0412\u043E\u0434\u0456\u043D\u043D\u044F \u043C\u0435\u0445\u0430\u043D\u0456\u043A\u0430","\u0415\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u0435 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u041A\u043E\u043D\u0442\u0440\u0430\u0432\u0430\u0440\u0456\u0439\u043D\u0435 \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u041A\u0443\u0440\u0441\u0438 \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u043E\u0433\u043E \u0432\u043E\u0434\u0456\u043D\u043D\u044F","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0456\u0441\u043F\u0438\u0442\u0443","\u0421\u0443\u043F\u0440\u043E\u0432\u0456\u0434 \u043D\u0430 \u0456\u0441\u043F\u0438\u0442","\u041E\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E \u0434\u043B\u044F \u0456\u0441\u043F\u0438\u0442\u0443","\u041E\u0441\u0432\u0456\u0442\u0430","\u0420\u0435\u043F\u0435\u0442\u0438\u0442\u043E\u0440","\u0420\u0435\u043F\u0435\u0442\u0438\u0442\u043E\u0440\u0441\u0442\u0432\u043E","\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0456 \u0437\u0430\u043D\u044F\u0442\u0442\u044F","\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0456 \u0443\u0440\u043E\u043A\u0438","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0448\u043A\u043E\u043B\u0438","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u041D\u041C\u0422","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0417\u041D\u041E","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0414\u041F\u0410","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0456\u0441\u043F\u0438\u0442\u0456\u0432","\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u0437 \u0434\u043E\u043C\u0430\u0448\u043D\u0456\u043C \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\u043C","\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u043B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430","\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0420\u043E\u0437\u043C\u043E\u0432\u043D\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430","\u0414\u0456\u043B\u043E\u0432\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430","\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u0434\u043B\u044F \u0434\u0456\u0442\u0435\u0439","\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u0434\u043B\u044F \u0434\u043E\u0440\u043E\u0441\u043B\u0438\u0445","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E IELTS","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E TOEFL","\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0406\u0441\u043F\u0430\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0406\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u041F\u043E\u043B\u044C\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u041A\u0438\u0442\u0430\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u042F\u043F\u043E\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u041A\u043E\u0440\u0435\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0422\u0443\u0440\u0435\u0446\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0427\u0435\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430","\u0412\u0438\u0432\u0447\u0435\u043D\u043D\u044F \u043C\u043E\u0432","\u041A\u0443\u0440\u0441\u0438 \u0456\u043D\u043E\u0437\u0435\u043C\u043D\u0438\u0445 \u043C\u043E\u0432","\u041E\u043D\u043B\u0430\u0439\u043D-\u0443\u0440\u043E\u043A\u0438","\u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0456\u0439\u043D\u0435 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F","\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430","\u0410\u043B\u0433\u0435\u0431\u0440\u0430","\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0456\u044F","\u0412\u0438\u0449\u0430 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430","\u0424\u0456\u0437\u0438\u043A\u0430","\u0425\u0456\u043C\u0456\u044F","\u0411\u0456\u043E\u043B\u043E\u0433\u0456\u044F","\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0456\u044F","\u0406\u0441\u0442\u043E\u0440\u0456\u044F","\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u0423\u043A\u0440\u0430\u0457\u043D\u0438","\u0412\u0441\u0435\u0441\u0432\u0456\u0442\u043D\u044F \u0456\u0441\u0442\u043E\u0440\u0456\u044F","\u041F\u0440\u0430\u0432\u043E\u0437\u043D\u0430\u0432\u0441\u0442\u0432\u043E","\u0415\u043A\u043E\u043D\u043E\u043C\u0456\u043A\u0430","\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430","\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0443\u0432\u0430\u043D\u043D\u044F","Python","Java","C++","JavaScript","Web-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443\u0432\u0430\u043D\u043D\u044F","\u0420\u043E\u0437\u0440\u043E\u0431\u043A\u0430 \u0441\u0430\u0439\u0442\u0456\u0432","\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0441\u0430\u0439\u0442\u0456\u0432","\u0412\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043D","\u0413\u0440\u0430\u0444\u0456\u0447\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D","Photoshop","Illustrator","CorelDRAW","3D \u043C\u043E\u0434\u0435\u043B\u044E\u0432\u0430\u043D\u043D\u044F","3ds Max","Blender","AutoCAD","\u0414\u0438\u0437\u0430\u0439\u043D \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F","\u0412\u0456\u0434\u0435\u043E\u043C\u043E\u043D\u0442\u0430\u0436 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F","Premiere Pro","After Effects","\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u044F \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F","\u041A\u0443\u0440\u0441\u0438 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457","\u041C\u0443\u0437\u0438\u043A\u0430","\u0423\u0440\u043E\u043A\u0438 \u043C\u0443\u0437\u0438\u043A\u0438","\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u043C\u0443\u0437\u0438\u043A\u0438","\u041C\u0443\u0437\u0438\u0447\u043D\u0430 \u0448\u043A\u043E\u043B\u0430","\u0423\u0440\u043E\u043A\u0438 \u0432\u043E\u043A\u0430\u043B\u0443","\u0423\u0440\u043E\u043A\u0438 \u0441\u043F\u0456\u0432\u0443","\u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0433\u043E\u043B\u043E\u0441\u0443","\u0423\u0440\u043E\u043A\u0438 \u0433\u0456\u0442\u0430\u0440\u0438","\u0413\u0456\u0442\u0430\u0440\u0430 \u0434\u043B\u044F \u043F\u043E\u0447\u0430\u0442\u043A\u0456\u0432\u0446\u0456\u0432","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0456\u0442\u0430\u0440\u0430","\u0411\u0430\u0441-\u0433\u0456\u0442\u0430\u0440\u0430","\u0423\u043A\u0443\u043B\u0435\u043B\u0435","\u0423\u0440\u043E\u043A\u0438 \u0444\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043E","\u0424\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043E \u0434\u043B\u044F \u0434\u0456\u0442\u0435\u0439","\u0424\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043E \u0434\u043B\u044F \u0434\u043E\u0440\u043E\u0441\u043B\u0438\u0445","\u0421\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440","\u0423\u0440\u043E\u043A\u0438 \u0441\u043A\u0440\u0438\u043F\u043A\u0438","\u0423\u0440\u043E\u043A\u0438 \u0432\u0456\u043E\u043B\u043E\u043D\u0447\u0435\u043B\u0456","\u0423\u0440\u043E\u043A\u0438 \u0441\u0430\u043A\u0441\u043E\u0444\u043E\u043D\u0430","\u0423\u0440\u043E\u043A\u0438 \u0444\u043B\u0435\u0439\u0442\u0438","\u0423\u0440\u043E\u043A\u0438 \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u0456\u0432","\u0423\u0434\u0430\u0440\u043D\u0456 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438","\u0421\u043E\u043B\u044C\u0444\u0435\u0434\u0436\u0456\u043E","\u041C\u0443\u0437\u0438\u0447\u043D\u0430 \u0433\u0440\u0430\u043C\u043E\u0442\u0430","\u0422\u0435\u043E\u0440\u0456\u044F \u043C\u0443\u0437\u0438\u043A\u0438","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u0434\u0438\u0442\u0438\u043D\u0438","\u0420\u0430\u043D\u043D\u0456\u0439 \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A","\u0420\u043E\u0437\u0432\u0438\u0432\u0430\u044E\u0447\u0456 \u0437\u0430\u043D\u044F\u0442\u0442\u044F","\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A","\u0417\u0430\u043D\u044F\u0442\u0442\u044F \u0434\u043B\u044F \u043C\u0430\u043B\u044E\u043A\u0456\u0432","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0448\u043A\u043E\u043B\u0438 5 \u0440\u043E\u043A\u0456\u0432","\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E \u0448\u043A\u043E\u043B\u0438 6 \u0440\u043E\u043A\u0456\u0432","\u0427\u0438\u0442\u0430\u043D\u043D\u044F","\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0447\u0438\u0442\u0430\u043D\u043D\u044E","\u0428\u0432\u0438\u0434\u043A\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044F","\u041F\u0438\u0441\u044C\u043C\u043E","\u041A\u0430\u043B\u0456\u0433\u0440\u0430\u0444\u0456\u044F","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u043F\u0430\u043C'\u044F\u0442\u0456","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u0443\u0432\u0430\u0433\u0438","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u043B\u043E\u0433\u0456\u043A\u0438","\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u043C\u0438\u0441\u043B\u0435\u043D\u043D\u044F","\u041C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430 \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u043A\u0430","\u041B\u043E\u0433\u043E\u043F\u0435\u0434","\u041B\u043E\u0433\u043E\u043F\u0435\u0434\u0438\u0447\u043D\u0456 \u0437\u0430\u043D\u044F\u0442\u0442\u044F","\u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0437\u0432\u0443\u043A\u0456\u0432","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u041B\u043E\u0433\u043E\u043C\u0430\u0441\u0430\u0436","\u0414\u0435\u0444\u0435\u043A\u0442\u043E\u043B\u043E\u0433","\u041A\u043E\u0440\u0435\u043A\u0446\u0456\u0439\u043D\u0456 \u0437\u0430\u043D\u044F\u0442\u0442\u044F","\u041D\u0435\u0439\u0440\u043E\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433","\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433 \u0434\u0438\u0442\u044F\u0447\u0438\u0439","\u041D\u044F\u043D\u044F","\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u043D\u044F\u043D\u0456","\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0434\u0456\u0442\u044C\u043C\u0438","\u041D\u044F\u043D\u044F \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443","\u041D\u044F\u043D\u044F \u0437 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F\u043C","\u041D\u044F\u043D\u044F \u0431\u0435\u0437 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F","\u041D\u044F\u043D\u044F \u0432\u0438\u0445\u0456\u0434\u043D\u043E\u0433\u043E \u0434\u043D\u044F","\u041D\u044F\u043D\u044F \u0434\u043B\u044F \u043D\u0435\u043C\u043E\u0432\u043B\u044F\u0442\u0438","\u041D\u044F\u043D\u044F \u0434\u043B\u044F \u0434\u043E\u0448\u043A\u0456\u043B\u044C\u043D\u044F\u0442","\u041D\u044F\u043D\u044F \u0434\u043B\u044F \u0448\u043A\u043E\u043B\u044F\u0440\u0430","\u0410\u043D\u0456\u043C\u0430\u0442\u043E\u0440","\u0410\u043D\u0456\u043C\u0430\u0442\u043E\u0440\u0438 \u043D\u0430 \u0434\u0435\u043D\u044C \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u0414\u0438\u0442\u044F\u0447\u0456 \u0441\u0432\u044F\u0442\u0430","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0441\u0432\u044F\u0442","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0434\u043D\u044F \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0432\u0435\u0441\u0456\u043B\u043B\u044F","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u0456\u0432","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0437\u0430\u0445\u043E\u0434\u0456\u0432","Event-\u0430\u0433\u0435\u043D\u0446\u0456\u044F","\u0406\u0432\u0435\u043D\u0442-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440","\u0412\u0435\u0434\u0443\u0447\u0438\u0439","\u0412\u0435\u0434\u0443\u0447\u0430","\u0422\u0430\u043C\u0430\u0434\u0430","\u0412\u0435\u0434\u0443\u0447\u0438\u0439 \u0432\u0435\u0441\u0456\u043B\u043B\u044F","\u0412\u0435\u0434\u0443\u0447\u0438\u0439 \u0434\u043D\u044F \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F","\u0412\u0435\u0434\u0443\u0447\u0438\u0439 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u0443","\u0414\u0456\u0434\u0436\u0435\u0439","DJ","\u041C\u0443\u0437\u0438\u0447\u043D\u0438\u0439 \u0441\u0443\u043F\u0440\u043E\u0432\u0456\u0434","\u0416\u0438\u0432\u0430 \u043C\u0443\u0437\u0438\u043A\u0430","\u041C\u0443\u0437\u0438\u043A\u0430\u043D\u0442\u0438","\u0413\u0443\u0440\u0442 \u043D\u0430 \u0432\u0435\u0441\u0456\u043B\u043B\u044F","\u0421\u0430\u043A\u0441\u043E\u0444\u043E\u043D\u0456\u0441\u0442","\u0421\u043A\u0440\u0438\u043F\u0430\u043B\u044C","\u041F\u0456\u0430\u043D\u0456\u0441\u0442","\u0412\u043E\u043A\u0430\u043B\u0456\u0441\u0442","\u0421\u043F\u0456\u0432\u0430\u043A","\u0421\u043F\u0456\u0432\u0430\u0447\u043A\u0430","\u0428\u043E\u0443-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430","\u0410\u0440\u0442\u0438\u0441\u0442\u0438","\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A","\u041A\u043B\u043E\u0443\u043D","\u041F\u0456\u0440\u043E\u0442\u0435\u0445\u043D\u0456\u043A\u0430","\u0424\u0435\u0454\u0440\u0432\u0435\u0440\u043A","\u0421\u0430\u043B\u044E\u0442","\u041A\u0443\u043B\u044F-\u0441\u044E\u0440\u043F\u0440\u0438\u0437","\u041F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0456 \u043A\u0443\u043B\u0456","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043A\u0443\u043B\u044F\u043C\u0438","\u0414\u0435\u043A\u043E\u0440 \u043F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0438\u043C\u0438 \u043A\u0443\u043B\u044F\u043C\u0438","\u0410\u0440\u043A\u0430 \u0437 \u043A\u0443\u043B\u044C","\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444","\u0424\u043E\u0442\u043E\u0437\u0439\u043E\u043C\u043A\u0430","\u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0430 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0439 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444","\u0421\u0456\u043C\u0435\u0439\u043D\u0430 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0414\u0438\u0442\u044F\u0447\u0430 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F \u043D\u0435\u043C\u043E\u0432\u043B\u044F\u0442","Newborn \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0412\u0430\u0433\u0456\u0442\u043D\u0456\u0441\u0442\u044C \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","Love story","\u041F\u043E\u0440\u0442\u0440\u0435\u0442\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0421\u0442\u0443\u0434\u0456\u0439\u043D\u0430 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F","\u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F \u043D\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u0456","\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u0430 \u0444\u043E\u0442\u043E\u0437\u0439\u043E\u043C\u043A\u0430","\u041A\u0430\u0442\u0430\u043B\u043E\u0436\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0424\u043E\u0442\u043E\u0437\u0439\u043E\u043C\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u0456\u0432","\u0424\u0443\u0434-\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u044F","\u0417\u0439\u043E\u043C\u043A\u0430 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456","\u0406\u043D\u0442\u0435\u0440'\u0454\u0440\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0410\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0420\u0435\u043F\u043E\u0440\u0442\u0430\u0436\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430","\u0417\u0439\u043E\u043C\u043A\u0430 \u0437\u0430\u0445\u043E\u0434\u0456\u0432","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0439","\u0420\u0435\u0442\u0443\u0448 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0439","\u041A\u043E\u043B\u044C\u043E\u0440\u043E\u043A\u043E\u0440\u0435\u043A\u0446\u0456\u044F","\u0412\u0456\u0434\u0435\u043E\u0433\u0440\u0430\u0444","\u0412\u0456\u0434\u0435\u043E\u0437\u0439\u043E\u043C\u043A\u0430","\u0412\u0456\u0434\u0435\u043E\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0438\u0439 \u0432\u0456\u0434\u0435\u043E\u0433\u0440\u0430\u0444","Love story \u0432\u0456\u0434\u0435\u043E","\u0412\u0456\u0434\u0435\u043E\u0437\u0439\u043E\u043C\u043A\u0430 \u0437\u0430\u0445\u043E\u0434\u0456\u0432","\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","\u0420\u0435\u043A\u043B\u0430\u043C\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","\u0412\u0456\u0434\u0435\u043E\u0432\u0456\u0437\u0438\u0442\u043A\u0430","\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0456\u0439\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","\u0412\u0456\u0434\u0435\u043E\u043E\u0433\u043B\u044F\u0434","\u0412\u0456\u0434\u0435\u043E\u0456\u043D\u0442\u0435\u0440\u0432'\u044E","\u0412\u0456\u0434\u0435\u043E\u0431\u043B\u043E\u0433","YouTube \u0432\u0456\u0434\u0435\u043E","\u0417\u0439\u043E\u043C\u043A\u0430 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436","Reels","TikTok","Shorts","\u0410\u0435\u0440\u043E\u0437\u0439\u043E\u043C\u043A\u0430","\u0417\u0439\u043E\u043C\u043A\u0430 \u0434\u0440\u043E\u043D\u043E\u043C","\u041A\u0432\u0430\u0434\u0440\u043E\u043A\u043E\u043F\u0442\u0435\u0440","\u041C\u043E\u043D\u0442\u0430\u0436 \u0432\u0456\u0434\u0435\u043E","\u0412\u0456\u0434\u0435\u043E\u043C\u043E\u043D\u0442\u0430\u0436 \u043F\u043E\u0441\u043B\u0443\u0433\u0438","\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0432\u0456\u0434\u0435\u043E","\u041A\u043E\u043B\u044C\u043E\u0440\u043A\u043E\u0440\u0435\u043A\u0446\u0456\u044F \u0432\u0456\u0434\u0435\u043E","\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u0435\u043E\u0440\u043E\u043B\u0456\u043A\u0456\u0412","\u0410\u043D\u0456\u043C\u0430\u0446\u0456\u044F","2D \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u044F","3D \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u044F","Motion design","\u0406\u043D\u0444\u043E\u0433\u0440\u0430\u0444\u0456\u043A\u0430","\u0410\u043D\u0456\u043C\u0430\u0446\u0456\u0439\u043D\u0435 \u0432\u0456\u0434\u0435\u043E","Explainer video","Whiteboard animation","\u0424\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u043A\u0430","\u0424\u043B\u043E\u0440\u0438\u0441\u0442","\u0411\u0443\u043A\u0435\u0442\u0438","\u0411\u0443\u043A\u0435\u0442 \u043D\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F","\u0410\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0456 \u0431\u0443\u043A\u0435\u0442\u0438","\u0411\u0443\u043A\u0435\u0442 \u043D\u0430\u0440\u0435\u0447\u0435\u043D\u043E\u0457","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0430 \u0444\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u043A\u0430","\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u043B\u0443","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0441\u0442\u043E\u043B\u0456\u0432","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0435\u0437\u0438\u0434\u0456\u0443\u043C\u0443","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0430\u0440\u043A\u0438","\u0424\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u0447\u043D\u0456 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u0457","\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437\u0456 \u0441\u0432\u0456\u0436\u0438\u0445 \u043A\u0432\u0456\u0442\u0456\u0432","\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437\u0456 \u0448\u0442\u0443\u0447\u043D\u0438\u0445 \u043A\u0432\u0456\u0442\u0456\u0432","\u0412\u0456\u043D\u043E\u043A","\u0422\u0440\u0430\u0443\u0440\u043D\u0430 \u0444\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u043A\u0430","\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043A\u0432\u0456\u0442\u0456\u0432","\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043A\u0432\u0456\u0442\u0456\u0432","\u041A\u0432\u0456\u0442\u0438 \u0432 \u0448\u043B\u044F\u043F\u043D\u0456\u0439 \u043A\u043E\u0440\u043E\u0431\u0446\u0456","\u041C\u043E\u043D\u043E\u0431\u0443\u043A\u0435\u0442","\u0411\u0443\u043A\u0435\u0442 \u0442\u0440\u043E\u044F\u043D\u0434","101 \u0442\u0440\u043E\u044F\u043D\u0434\u0430","\u0415\u043A\u0437\u043E\u0442\u0438\u0447\u043D\u0456 \u043A\u0432\u0456\u0442\u0438","\u0421\u0443\u0445\u043E\u0446\u0432\u0456\u0442\u0438","\u0421\u0442\u0430\u0431\u0456\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u0456 \u043A\u0432\u0456\u0442\u0438","\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043A\u0432\u0456\u0442\u0456\u0432","\u041A\u0432\u0456\u0442\u0438 \u0437 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u044E","\u0414\u0435\u043A\u043E\u0440 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u0414\u0435\u043A\u043E\u0440 \u043D\u0430 \u0441\u0432\u044F\u0442\u043E","\u0414\u0438\u0437\u0430\u0439\u043D \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443","\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443","\u041F\u0440\u043E\u0435\u043A\u0442 \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0438","\u0414\u0438\u0437\u0430\u0439\u043D \u0431\u0443\u0434\u0438\u043D\u043A\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u043E\u0444\u0456\u0441\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0443","\u0414\u0438\u0437\u0430\u0439\u043D \u043A\u0430\u0444\u0435","\u0414\u0438\u0437\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443","3D \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F","\u0412\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443","\u041F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C","\u041F\u0456\u0434\u0431\u0456\u0440 \u043C\u0435\u0431\u043B\u0456\u0432","\u041F\u0456\u0434\u0431\u0456\u0440 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432","\u041F\u0456\u0434\u0431\u0456\u0440 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432","\u0414\u0435\u043A\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F","\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u043E\u0440","\u0410\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0438\u0439 \u043D\u0430\u0433\u043B\u044F\u0434","\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0456\u044F \u043E\u0431'\u0454\u043A\u0442\u0430","\u0410\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u043E\u0440","\u0410\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F","\u041F\u0440\u043E\u0435\u043A\u0442 \u0431\u0443\u0434\u0438\u043D\u043A\u0443","\u041F\u0440\u043E\u0435\u043A\u0442 \u043A\u043E\u0442\u0435\u0434\u0436\u0443","\u041F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C","\u0414\u0438\u0437\u0430\u0439\u043D \u0444\u0430\u0441\u0430\u0434\u0443","\u0406\u043D\u0448\u0435"];var bi=["\u0410\u0432\u0434\u0456\u0457\u0432\u043A\u0430","\u0410\u043B\u043C\u0430\u0437\u043D\u0430","\u0410\u043B\u0443\u043F\u043A\u0430","\u0410\u043B\u0443\u0448\u0442\u0430","\u0410\u043B\u0447\u0435\u0432\u0441\u044C\u043A","\u0410\u043C\u0432\u0440\u043E\u0441\u0456\u0457\u0432\u043A\u0430","\u0410\u043D\u0430\u043D\u044C\u0457\u0432","\u0410\u043D\u0434\u0440\u0443\u0448\u0456\u0432\u043A\u0430","\u0410\u043D\u0442\u0440\u0430\u0446\u0438\u0442","\u0410\u043F\u043E\u0441\u0442\u043E\u043B\u043E\u0432\u0435","\u0410\u0440\u0431\u0443\u0437\u0438\u043D\u043A\u0430","\u0410\u0440\u043C\u044F\u043D\u0441\u044C\u043A","\u0410\u0440\u0442\u0435\u043C\u0456\u0432\u0441\u044C\u043A","\u0410\u0440\u0446\u0438\u0437","\u0411\u0430\u0431\u0430\u043D\u043A\u0430","\u0411\u0430\u0445\u043C\u0430\u0447","\u0411\u0430\u0445\u043C\u0443\u0442","\u0411\u0430\u0445\u0447\u0438\u0441\u0430\u0440\u0430\u0439","\u0411\u0430\u043B\u0430\u043A\u043B\u0456\u044F","\u0411\u0430\u043B\u0442\u0430","\u0411\u0430\u0440","\u0411\u0430\u0440\u0432\u0456\u043D\u043A\u043E\u0432\u0435","\u0411\u0430\u0440\u0430\u043D\u0456\u0432\u043A\u0430","\u0411\u0430\u0442\u0443\u0440\u0438\u043D","\u0411\u0430\u0448\u0442\u0430\u043D\u043A\u0430","\u0411\u0435\u043B\u0437","\u0411\u0435\u0440\u0434\u0438\u0447\u0456\u0432","\u0411\u0435\u0440\u0434\u044F\u043D\u0441\u044C\u043A","\u0411\u0435\u0440\u0435\u0433\u043E\u0432\u0435","\u0411\u0435\u0440\u0435\u0436\u0430\u043D\u0438","\u0411\u0435\u0440\u0435\u0437\u0430\u043D\u044C","\u0411\u0435\u0440\u0435\u0437\u043D\u0435","\u0411\u0435\u0440\u0435\u0437\u043D\u0456\u0432\u043A\u0430","\u0411\u0435\u0440\u0435\u0437\u0456\u0432\u043A\u0430","\u0411\u0435\u0440\u0448\u0430\u0434\u044C","\u0411\u0456\u043B\u0430 \u0426\u0435\u0440\u043A\u0432\u0430","\u0411\u0456\u043B\u0433\u043E\u0440\u043E\u0434-\u0414\u043D\u0456\u0441\u0442\u0440\u043E\u0432\u0441\u044C\u043A\u0438\u0439","\u0411\u0456\u043B\u0433\u043E\u0440\u043E\u0434","\u0411\u0456\u043B\u0438\u0446\u044C\u043A\u0435","\u0411\u0456\u043B\u043E\u0433\u0456\u0440'\u044F","\u0411\u0456\u043B\u043E\u0433\u0456\u0440\u0441\u044C\u043A","\u0411\u0456\u043B\u043E\u0437\u0435\u0440\u043A\u0430","\u0411\u0456\u043B\u043E\u043A\u0443\u0440\u0430\u043A\u0438\u043D\u0435","\u0411\u0456\u043B\u043E\u043F\u0456\u043B\u043B\u044F","\u0411\u0456\u043B\u043E\u0432\u043E\u0434\u0441\u044C\u043A","\u0411\u0456\u043B\u044C\u043C\u0430\u043A","\u0411\u043E\u0431\u0440\u0438\u043D\u0435\u0446\u044C","\u0411\u043E\u0431\u0440\u043E\u0432\u0438\u0446\u044F","\u0411\u043E\u0433\u043E\u0434\u0443\u0445\u0456\u0432","\u0411\u043E\u0433\u043E\u0440\u043E\u0434\u0447\u0430\u043D\u0438","\u0411\u043E\u0433\u0443\u0441\u043B\u0430\u0432","\u0411\u043E\u043B\u0433\u0440\u0430\u0434","\u0411\u043E\u043B\u0435\u0445\u0456\u0432","\u0411\u043E\u0440\u0437\u043D\u0430","\u0411\u043E\u0440\u0438\u0441\u043B\u0430\u0432","\u0411\u043E\u0440\u0438\u0441\u043F\u0456\u043B\u044C","\u0411\u043E\u0440\u0449\u0456\u0432","\u0411\u043E\u044F\u0440\u043A\u0430","\u0411\u0440\u043E\u0432\u0430\u0440\u0438","\u0411\u0440\u043E\u0434\u0438","\u0411\u0440\u044F\u043D\u043A\u0430","\u0411\u0443\u0447\u0430","\u0411\u0443\u0447\u0430\u0447","\u0412\u0430\u043B\u043A\u0438","\u0412\u0430\u0441\u0438\u043B\u0456\u0432\u043A\u0430","\u0412\u0430\u0441\u0438\u043B\u044C\u043A\u0456\u0432","\u0412\u0430\u0442\u0443\u0442\u0456\u043D\u0435","\u0412\u0430\u0448\u043A\u0456\u0432\u0446\u0456","\u0412\u0435\u043B\u0438\u043A\u0430 \u0411\u0430\u0433\u0430\u0447\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u0411\u0456\u043B\u043E\u0437\u0435\u0440\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u0414\u043E\u0431\u0440\u043E\u043D\u044C","\u0412\u0435\u043B\u0438\u043A\u0430 \u041B\u0435\u043F\u0435\u0442\u0438\u0445\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u0456\u0432\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u041D\u043E\u0432\u043E\u0441\u0456\u043B\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0430 \u041F\u0438\u0441\u0430\u0440\u0456\u0432\u043A\u0430","\u0412\u0435\u043B\u0438\u043A\u0456 \u041C\u043E\u0441\u0442\u0438","\u0412\u0435\u0440\u0431\u043A\u0430","\u0412\u0435\u0440\u0445\u0456\u0432\u0446\u0435\u0432\u0435","\u0412\u0435\u0440\u0445\u043D\u0454 \u0421\u0438\u043D\u044C\u043E\u0432\u0438\u0434\u043D\u0435","\u0412\u0435\u0440\u0445\u043D\u044C\u043E\u0434\u043D\u0456\u043F\u0440\u043E\u0432\u0441\u044C\u043A","\u0412\u0435\u0441\u0435\u043B\u0435","\u0412\u0435\u0441\u0435\u043B\u0438\u043D\u043E\u0432\u0435","\u0412\u0438\u0436\u043D\u0438\u0446\u044F","\u0412\u0438\u043B\u043A\u043E\u0432\u0435","\u0412\u0456\u043D\u043D\u0438\u0446\u044F","\u0412\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u0456\u0432","\u0412\u0438\u0448\u0433\u043E\u0440\u043E\u0434","\u0412\u0438\u0448\u043D\u0435\u0432\u0435","\u0412\u043E\u0432\u0447\u0430\u043D\u0441\u044C\u043A","\u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0441\u044C\u043A","\u0412\u043E\u043B\u043D\u043E\u0432\u0430\u0445\u0430","\u0412\u043E\u043B\u043E\u0434\u0438\u043C\u0438\u0440","\u0412\u043E\u043B\u043E\u0434\u0438\u043C\u0438\u0440\u0435\u0446\u044C","\u0412\u043E\u043B\u043E\u0447\u0438\u0441\u044C\u043A","\u0412\u043E\u043B\u044C\u043D\u043E\u0433\u0456\u0440\u0441\u044C\u043A","\u0412\u043E\u0440\u043E\u0436\u0431\u0430","\u0412\u043E\u0440\u043E\u043D\u0456\u0432","\u0412\u0443\u0433\u043B\u0435\u0434\u0430\u0440","\u0412\u0443\u0433\u043B\u0435\u0433\u0456\u0440\u0441\u044C\u043A","\u0413\u0430\u0434\u044F\u0447","\u0413\u0430\u0439\u0432\u043E\u0440\u043E\u043D","\u0413\u0430\u0439\u0441\u0438\u043D","\u0413\u0430\u043B\u0438\u0447","\u0413\u0430\u0441\u043F\u0440\u0430","\u0413\u0435\u043D\u0456\u0447\u0435\u0441\u044C\u043A","\u0413\u0435\u0440\u0446\u0430","\u0413\u043B\u0438\u043D\u0438\u0446\u044F","\u0413\u043B\u043E\u0431\u0438\u043D\u0435","\u0413\u043B\u0443\u0445\u0456\u0432","\u0413\u043B\u0443\u0445\u043E\u0432\u0435","\u0413\u043D\u0456\u0432\u0430\u043D\u043A\u0430","\u0413\u043E\u043B\u0430 \u041F\u0440\u0438\u0441\u0442\u0430\u043D\u044C","\u0413\u043E\u043B\u043E\u0432\u0430\u043D\u0456\u0432\u0441\u044C\u043A","\u0413\u043E\u0440\u0456\u0448\u043D\u0456 \u041F\u043B\u0430\u0432\u043D\u0456","\u0413\u043E\u0440\u043B\u0456\u0432\u043A\u0430","\u0413\u043E\u0440\u043E\u0434\u0435\u043D\u043A\u0430","\u0413\u043E\u0440\u043E\u0434\u0438\u0449\u0435","\u0413\u043E\u0440\u043E\u0434\u043D\u044F","\u0413\u043E\u0440\u043E\u0434\u043E\u043A","\u0413\u043E\u0441\u0442\u043E\u043C\u0435\u043B\u044C","\u0413\u0440\u0435\u0431\u0456\u043D\u043A\u0430","\u0413\u0443\u043B\u044F\u0439\u043F\u043E\u043B\u0435","\u0413\u0443\u0440\u0437\u0443\u0444","\u0414\u0435\u0431\u0430\u043B\u044C\u0446\u0435\u0432\u0435","\u0414\u0435\u0440\u0430\u0436\u043D\u044F","\u0414\u0435\u0440\u0433\u0430\u0447\u0456","\u0414\u0436\u0430\u043D\u043A\u043E\u0439","\u0414\u043D\u0456\u043F\u0440\u043E","\u0414\u043D\u0456\u043F\u0440\u043E\u0440\u0443\u0434\u043D\u0435","\u0414\u043E\u0431\u0440\u043E\u043C\u0438\u043B\u044C","\u0414\u043E\u0431\u0440\u043E\u043F\u0456\u043B\u043B\u044F","\u0414\u043E\u0431\u0440\u043E\u0441\u043B\u0430\u0432","\u0414\u043E\u043A\u0443\u0447\u0430\u0454\u0432\u0441\u044C\u043A","\u0414\u043E\u043B\u0438\u043D\u0430","\u0414\u043E\u043B\u0438\u043D\u0441\u044C\u043A\u0430","\u0414\u043E\u043D\u0435\u0446\u044C\u043A","\u0414\u0440\u043E\u0433\u043E\u0431\u0438\u0447","\u0414\u0440\u0443\u0436\u0431\u0430","\u0414\u0440\u0443\u0436\u043A\u0456\u0432\u043A\u0430","\u0414\u0443\u0431\u043B\u044F\u043D\u0438","\u0414\u0443\u0431\u043D\u043E","\u0414\u0443\u0431\u0440\u043E\u0432\u0438\u0446\u044F","\u0414\u0443\u043D\u0430\u0457\u0432\u0446\u0456","\u0415\u043D\u0435\u0440\u0433\u043E\u0434\u0430\u0440","\u0416\u0430\u0448\u043A\u0456\u0432","\u0416\u0434\u0430\u043D\u0456\u0432\u043A\u0430","\u0416\u0438\u0434\u0430\u0447\u0456\u0432","\u0416\u0438\u0442\u043E\u043C\u0438\u0440","\u0416\u043C\u0435\u0440\u0438\u043D\u043A\u0430","\u0416\u043E\u0432\u043A\u0432\u0430","\u0416\u043E\u0432\u0442\u0456 \u0412\u043E\u0434\u0438","\u0417\u0430\u0432\u043E\u0434\u0441\u044C\u043A\u0435","\u0417\u0430\u043B\u0456\u0449\u0438\u043A\u0438","\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F","\u0417\u0430\u0440\u0456\u0447\u043D\u0435","\u0417\u0431\u0430\u0440\u0430\u0436","\u0417\u0431\u043E\u0440\u0456\u0432","\u0417\u0432\u0435\u043D\u0438\u0433\u043E\u0440\u043E\u0434\u043A\u0430","\u0417\u0434\u043E\u043B\u0431\u0443\u043D\u0456\u0432","\u0417\u0435\u043B\u0435\u043D\u043E\u0434\u043E\u043B\u044C\u0441\u044C\u043A","\u0417\u0456\u043D\u044C\u043A\u0456\u0432","\u0417\u043C\u0456\u0457\u0432","\u0417\u043D\u0430\u043C'\u044F\u043D\u043A\u0430","\u0417\u043E\u043B\u043E\u0442\u0435","\u0417\u043E\u043B\u043E\u0442\u043E\u043D\u043E\u0448\u0430","\u0417\u043E\u043B\u043E\u0447\u0456\u0432","\u0417\u0443\u0433\u0440\u0435\u0441","\u0406\u0432\u0430\u043D\u043A\u0456\u0432","\u0406\u0432\u0430\u043D\u043E-\u0424\u0440\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A","\u0406\u043B\u043B\u0456\u043D\u0446\u0456","\u0406\u043B\u043E\u0432\u0430\u0439\u0441\u044C\u043A","\u0406\u0437\u043C\u0430\u0457\u043B","\u0406\u0437\u044E\u043C","\u0406\u0437\u044F\u0441\u043B\u0430\u0432","\u0406\u043B\u043B\u0456\u0447\u0456\u0432\u0441\u044C\u043A","\u0406\u043D\u043A\u0435\u0440\u043C\u0430\u043D","\u0406\u0440\u043F\u0456\u043D\u044C","\u0406\u0440\u0448\u0430\u0432\u0430","\u0406\u0447\u043D\u044F","\u041A\u0430\u0433\u0430\u0440\u043B\u0438\u043A","\u041A\u0430\u0434\u0456\u0457\u0432\u043A\u0430","\u041A\u0430\u043B\u0438\u043D\u0456\u0432\u043A\u0430","\u041A\u0430\u043B\u0443\u0448","\u041A\u0430\u043C'\u044F\u043D\u0435\u0446\u044C-\u041F\u043E\u0434\u0456\u043B\u044C\u0441\u044C\u043A\u0438\u0439","\u041A\u0430\u043C'\u044F\u043D\u043A\u0430","\u041A\u0430\u043C'\u044F\u043D\u043A\u0430-\u0411\u0443\u0437\u044C\u043A\u0430","\u041A\u0430\u043C'\u044F\u043D\u043A\u0430-\u0414\u043D\u0456\u043F\u0440\u043E\u0432\u0441\u044C\u043A\u0430","\u041A\u0430\u043C'\u044F\u043D\u0441\u044C\u043A\u0435","\u041A\u0430\u043D\u0456\u0432","\u041A\u0430\u0440\u043B\u0456\u0432\u043A\u0430","\u041A\u0430\u0445\u043E\u0432\u043A\u0430","\u041A\u0435\u0433\u0438\u0447\u0456\u0432\u043A\u0430","\u041A\u0435\u0440\u0447","\u041A\u0438\u0454\u0432\u043E-\u0421\u0432\u044F\u0442\u043E\u0448\u0438\u043D\u0441\u044C\u043A","\u041A\u0438\u0457\u0432","\u041A\u0456\u043B\u0456\u044F","\u041A\u0456\u0446\u043C\u0430\u043D\u044C","\u041A\u0456\u0432\u0435\u0440\u0446\u0456","\u30AD\u0440\u0456\u0432\u0441\u044C\u043A","\u041A\u043E\u0431\u0435\u043B\u044F\u043A\u0438","\u041A\u043E\u0432\u0435\u043B\u044C","\u041A\u043E\u0434\u0438\u043C\u0430","\u041A\u043E\u043A\u0442\u0435\u0431\u0435\u043B\u044C","\u041A\u043E\u043B\u043E\u043C\u0438\u044F","\u041A\u043E\u043C\u0430\u0440\u043D\u043E","\u041A\u043E\u043D\u043E\u0442\u043E\u043F","\u041A\u043E\u0440\u0435\u0446\u044C","\u041A\u043E\u0440\u043E\u0441\u0442\u0435\u043D\u044C","\u041A\u043E\u0440\u043E\u0441\u0442\u0438\u0448\u0456\u0432","\u041A\u043E\u0440\u0441\u0443\u043D\u044C-\u0428\u0435\u0432\u0447\u0435\u043D\u043A\u0456\u0432\u0441\u044C\u043A\u0438\u0439","\u041A\u043E\u0440\u044E\u043A\u0456\u0432\u043A\u0430","\u041A\u043E\u0441\u0456\u0432","\u041A\u043E\u0441\u0442\u043E\u043F\u0456\u043B\u044C","\u041A\u043E\u0441\u0442\u044F\u043D\u0442\u0438\u043D\u0456\u0432\u043A\u0430","\u041A\u0440\u0430\u043C\u0430\u0442\u043E\u0440\u0441\u044C\u043A","\u041A\u0440\u0430\u0441\u0438\u043B\u0456\u0432","\u041A\u0440\u0430\u0441\u043D\u043E\u0430\u0440\u043C\u0456\u0439\u0441\u044C\u043A","\u041A\u0440\u0430\u0441\u043D\u043E\u0433\u0440\u0430\u0434","\u041A\u0440\u0430\u0441\u043D\u043E\u0434\u043E\u043D","\u041A\u0440\u0430\u0441\u043D\u043E\u043F\u0456\u043B\u043B\u044F","\u041A\u0440\u0430\u0441\u043D\u043E\u043F\u0435\u0440\u0435\u043A\u043E\u043F\u0441\u044C\u043A","\u041A\u0440\u0435\u043C\u0435\u043D\u0435\u0446\u044C","\u041A\u0440\u0435\u043C\u0435\u043D\u0447\u0443\u043A","\u041A\u0440\u0435\u043C\u0456\u043D\u043D\u0430","\u041A\u0440\u0438\u0432\u0438\u0439 \u0420\u0456\u0433","\u041A\u0440\u043E\u043B\u0435\u0432\u0435\u0446\u044C","\u041A\u0440\u043E\u043F\u0438\u0432\u043D\u0438\u0446\u044C\u043A\u0438\u0439","\u041A\u0443\u043B\u0438\u043A\u0456\u0432\u043A\u0430","\u041A\u0443\u043F\u044F\u043D\u0441\u044C\u043A","\u041A\u0443\u0440\u0430\u0445\u043E\u0432\u0435","\u041B\u0430\u0434\u0438\u0436\u0438\u043D","\u041B\u0430\u043D\u0456\u0432\u0446\u0456","\u041B\u0435\u0431\u0435\u0434\u0438\u043D","\u041B\u0438\u043C\u0430\u043D","\u041B\u0438\u043F\u043E\u0432\u0430 \u0414\u043E\u043B\u0438\u043D\u0430","\u041B\u0438\u043F\u043E\u0432\u0435\u0446\u044C","\u041B\u0438\u0441\u0438\u0447\u0430\u043D\u0441\u044C\u043A","\u041B\u0438\u0442\u0438\u043D","\u041B\u043E\u0437\u043E\u0432\u0430","\u041B\u043E\u0445\u0432\u0438\u0446\u044F","\u041B\u0443\u0431\u043D\u0438","\u041B\u0443\u0433\u0430\u043D\u0441\u044C\u043A","\u041B\u0443\u0446\u044C\u043A","\u041B\u044C\u0432\u0456\u0432","\u041B\u044E\u0431\u0430\u0440","\u041B\u044E\u0431\u0435\u0448\u0456\u0432","\u041B\u044E\u0431\u043E\u0442\u0438\u043D","\u041B\u0430\u0434\u0438\u0436\u0438\u043D","\u041B\u0438\u0432\u0430\u0434\u0456\u044F","\u041B\u0456\u0441\u043A\u0438","\u041C\u0430\u043A\u0430\u0440\u0456\u0432","\u041C\u0430\u043A\u0456\u0457\u0432\u043A\u0430","\u041C\u0430\u043B\u0430 \u0412\u0438\u0441\u043A\u0430","\u041C\u0430\u043B\u0438\u043D","\u041C\u0430\u0440'\u0457\u043D\u043A\u0430","\u041C\u0430\u0440\u0456\u0443\u043F\u043E\u043B\u044C","\u041C\u0430\u0440\u043A\u0456\u0432\u043A\u0430","\u041C\u0430\u0440\u0433\u0430\u043D\u0435\u0446\u044C","\u041C\u0435\u043B\u0456\u0442\u043E\u043F\u043E\u043B\u044C","\u041C\u0435\u043D\u0430","\u041C\u0435\u0440\u0435\u0444\u0430","\u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432","\u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432\u043A\u0430","\u041C\u0438\u0440\u0433\u043E\u0440\u043E\u0434","\u041C\u0438\u0440\u043D\u043E\u0433\u0440\u0430\u0434","\u041C\u0438\u0440\u043D\u0438\u0439","\u041C\u0456\u0436\u0433\u0456\u0440'\u044F","\u041C\u043E\u0433\u0438\u043B\u0456\u0432-\u041F\u043E\u0434\u0456\u043B\u044C\u0441\u044C\u043A\u0438\u0439","\u041C\u043E\u043B\u043E\u0434\u043E\u0433\u0432\u0430\u0440\u0434\u0456\u0439\u0441\u044C\u043A","\u041C\u043E\u043B\u043E\u0447\u0430\u043D\u0441\u044C\u043A","\u041C\u043E\u043D\u0430\u0441\u0442\u0438\u0440\u0438\u0441\u044C\u043A\u0430","\u041C\u043E\u0440\u0448\u0438\u043D","\u041C\u043E\u0441\u0442\u0438\u0441\u044C\u043A\u0430","\u041C\u0443\u043A\u0430\u0447\u0435\u0432\u043E","\u041D\u0430\u0434\u0432\u0456\u0440\u043D\u0430","\u041D\u0435\u043C\u0438\u0440\u0456\u0432","\u041D\u0435\u0442\u0456\u0448\u0438\u043D","\u041D\u0438\u0436\u043D\u0456 \u0421\u0456\u0440\u043E\u0433\u043E\u0437\u0438","\u041D\u0456\u043A\u043E\u043F\u043E\u043B\u044C","\u041D\u0456\u0436\u0438\u043D","\u041D\u043E\u0432\u0430 \u0412\u043E\u0434\u043E\u043B\u0430\u0433\u0430","\u041D\u043E\u0432\u0430 \u041A\u0430\u0445\u043E\u0432\u043A\u0430","\u041D\u043E\u0432\u0430 \u041E\u0434\u0435\u0441\u0430","\u041D\u043E\u0432\u0430 \u0423\u0448\u0438\u0446\u044F","\u041D\u043E\u0432\u0438\u0439 \u0411\u0443\u0433","\u041D\u043E\u0432\u0438\u0439 \u041A\u0430\u043B\u0438\u043D\u0456\u0432","\u041D\u043E\u0432\u0438\u0439 \u0420\u043E\u0437\u0434\u0456\u043B","\u041D\u043E\u0432\u043E\u0430\u0439\u0434\u0430\u0440","\u041D\u043E\u0432\u043E\u0430\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0430\u0437\u043E\u0432\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0432\u043E\u043B\u0438\u043D\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0433\u0435\u043E\u0440\u0433\u0456\u0457\u0432\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0433\u0440\u043E\u0434\u0456\u0432\u043A\u0430","\u041D\u043E\u0432\u043E\u0433\u0440\u0430\u0434-\u0412\u043E\u043B\u0438\u043D\u0441\u044C\u043A\u0438\u0439","\u041D\u043E\u0432\u043E\u0434\u043D\u0456\u0441\u0442\u0440\u043E\u0432\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u0434\u0440\u0443\u0436\u0435\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u043C\u0438\u0440\u0433\u043E\u0440\u043E\u0434","\u041D\u043E\u0432\u043E\u043C\u043E\u0441\u043A\u043E\u0432\u0441\u044C\u043A","\u041D\u043E\u0432\u043E\u043E\u043B\u0435\u043A\u0441\u0456\u0457\u0432\u043A\u0430","\u041D\u043E\u0432\u043E\u043F\u0441\u043A\u043E\u0432","\u041D\u043E\u0432\u043E\u0441\u0435\u043B\u0438\u0446\u044F","\u041D\u043E\u0432\u043E\u0442\u0440\u043E\u0457\u0446\u044C\u043A\u0435","\u041D\u043E\u0432\u043E\u0443\u043A\u0440\u0430\u0457\u043D\u043A\u0430","\u041D\u043E\u0432\u043E\u044F\u0432\u043E\u0440\u0456\u0432\u0441\u044C\u043A","\u041D\u043E\u0441\u0456\u0432\u043A\u0430","\u041E\u0431\u0443\u0445\u0456\u0432","\u041E\u0432\u0456\u0434\u0456\u043E\u043F\u043E\u043B\u044C","\u041E\u0432\u0440\u0443\u0447","\u041E\u0434\u0435\u0441\u0430","\u041E\u043A\u043D\u0438","\u041E\u043A\u043E\u043D\u0441\u044C\u043A\u0438","\u041E\u043B\u0435\u0432\u0441\u044C\u043A","\u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0456\u0432\u043A\u0430","\u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0456\u044F","\u041E\u043B\u0435\u043D\u0456\u0432\u043A\u0430","\u041E\u043B\u0435\u0448\u043A\u0438","\u041E\u043D\u0443\u0444\u0440\u0456\u0457\u0432\u043A\u0430","\u041E\u0440\u0430\u0442\u0456\u0432","\u041E\u0440\u0436\u0456\u0432","\u041E\u0441\u0442\u0440\u043E\u0433","\u041E\u0445\u0442\u0438\u0440\u043A\u0430","\u041E\u0447\u0430\u043A\u0456\u0432","\u041F\u0430\u0432\u043B\u043E\u0433\u0440\u0430\u0434","\u041F\u0435\u0440\u0432\u043E\u043C\u0430\u0439\u0441\u044C\u043A","\u041F\u0435\u0440\u0432\u043E\u043C\u0430\u0439\u0441\u044C\u043A\u0438\u0439","\u041F\u0435\u0440\u0435\u0432\u0430\u043B\u044C\u0441\u044C\u043A","\u041F\u0435\u0440\u0435\u043C\u0438\u0448\u043B\u044F\u043D\u0438","\u041F\u0435\u0440\u0435\u0447\u0438\u043D","\u041F\u0435\u0440\u0435\u044F\u0441\u043B\u0430\u0432","\u041F\u0435\u0440\u0448\u043E\u0442\u0440\u0430\u0432\u0435\u043D\u0441\u044C\u043A","\u041F\u0438\u0440\u044F\u0442\u0438\u043D","\u041F\u0456\u0434\u0433\u0430\u0439\u0446\u0456","\u041F\u0456\u0434\u0433\u043E\u0440\u043E\u0434\u043D\u0435","\u041F\u0456\u0434\u0432\u043E\u043B\u043E\u0447\u0438\u0441\u044C\u043A","\u041F\u043E\u0433\u0440\u0435\u0431\u0438\u0449\u0435","\u041F\u043E\u043A\u0440\u043E\u0432","\u041F\u043E\u043A\u0440\u043E\u0432\u0441\u044C\u043A","\u041F\u043E\u043B\u043E\u043D\u043D\u0435","\u041F\u043E\u043B\u0442\u0430\u0432\u0430","\u041F\u043E\u043C\u0456\u0447\u043D\u0430","\u041F\u043E\u043F\u0430\u0441\u043D\u0430","\u041F\u043E\u0447\u0430\u0457\u0432","\u041F\u0443\u0441\u0442\u043E\u043C\u0438\u0442\u0438","\u041F\u0443\u0442\u0438\u0432\u043B\u044C","\u041F\u0443\u0442\u0438\u043B\u0430","\u041F\u044F\u0442\u0438\u0445\u0430\u0442\u043A\u0438","\u0420\u0430\u0434\u0435\u0445\u0456\u0432","\u0420\u0430\u0434\u0438\u0432\u0438\u043B\u0456\u0432","\u0420\u0430\u0434\u043E\u043C\u0438\u0448\u043B\u044C","\u0420\u0430\u0445\u0456\u0432","\u0420\u0435\u043D\u0456","\u0420\u0435\u0448\u0435\u0442\u0438\u043B\u0456\u0432\u043A\u0430","\u0420\u0436\u0438\u0449\u0456\u0432","\u0420\u0456\u0432\u043D\u0435","\u0420\u0456\u0445\u0442\u0438\u0447\u0456\u0432","\u0420\u043E\u0433\u0430\u0442\u0438\u043D","\u0420\u043E\u0434\u0438\u043D\u0441\u044C\u043A\u0435","\u0420\u043E\u0436\u0438\u0449\u0435","\u0420\u043E\u043A\u0438\u0442\u043D\u0435","\u0420\u043E\u043C\u043D\u0438","\u0420\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u0430","\u0420\u0443\u0431\u0456\u0436\u043D\u0435","\u0420\u0443\u0436\u0438\u043D","\u0421\u0430\u043A\u0438","\u0421\u0430\u043C\u0431\u0456\u0440","\u0421\u0430\u0440\u0430\u0442\u0438","\u0421\u0430\u0440\u043D\u0438","\u0421\u0430\u0441\u0456\u0432","\u0421\u0432\u0430\u0442\u043E\u0432\u0435","\u0421\u0432\u0430\u043B\u044F\u0432\u0430","\u0421\u0432\u0435\u0441\u0430","\u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u044C\u043A","\u0421\u0432\u0456\u0442\u043B\u043E\u0432\u043E\u0434\u0441\u044C\u043A","\u0421\u0432\u0456\u0442\u043B\u043E\u0434\u0430\u0440\u0441\u044C\u043A","\u0421\u0435\u0432\u0430\u0441\u0442\u043E\u043F\u043E\u043B\u044C","\u0421\u0435\u0432\u0435\u0440\u043E\u0434\u043E\u043D\u0435\u0446\u044C\u043A","\u0421\u0435\u043B\u0438\u0434\u043E\u0432\u0435","\u0421\u0435\u043C\u0435\u043D\u0456\u0432\u043A\u0430","\u0421\u0435\u0440\u0435\u0434\u0438\u043D\u0430-\u0411\u0443\u0434\u0430","\u0421\u0454\u0432\u0454\u0440\u043E\u0434\u043E\u043D\u0435\u0446\u044C\u043A","\u0421\u0456\u043C\u0435\u0457\u0437","\u0421\u0456\u043C\u0444\u0435\u0440\u043E\u043F\u043E\u043B\u044C","\u0421\u0438\u043D\u0435\u043B\u044C\u043D\u0438\u043A\u043E\u0432\u0435","\u0421\u0456\u0432\u0435\u0440\u0441\u044C\u043A","\u0421\u043A\u0430\u0434\u043E\u0432\u0441\u044C\u043A","\u0421\u043A\u0430\u043B\u0430\u0442","\u0421\u043A\u0432\u0438\u0440\u0430","\u0421\u043B\u0430\u0432\u0443\u0442\u0430","\u0421\u043B\u0430\u0432\u0443\u0442\u0438\u0447","\u0421\u043B\u043E\u0432'\u044F\u043D\u0441\u044C\u043A","\u0421\u043C\u0435\u043B\u0430","\u0421\u043C\u0456\u043B\u0430","\u0421\u043D\u0456\u0433\u0443\u0440\u0456\u0432\u043A\u0430","\u0421\u043D\u0456\u0436\u043D\u0435","\u0421\u043D\u044F\u0442\u0438\u043D","\u0421\u043E\u043A\u0430\u043B\u044C","\u0421\u043E\u043A\u0438\u0440\u044F\u043D\u0438","\u0421\u043E\u043B\u0435\u0434\u0430\u0440","\u0421\u043E\u0440\u043E\u043A\u0438\u043D\u0435","\u30BD\u0441\u043D\u0456\u0432\u043A\u0430","\u0421\u0442\u0430\u0440\u0438\u0439 \u041A\u0440\u0438\u043C","\u0421\u0442\u0430\u0440\u0438\u0439 \u0421\u0430\u043C\u0431\u0456\u0440","\u0421\u0442\u0430\u0440\u043E\u0431\u0456\u043B\u044C\u0441\u044C\u043A","\u0421\u0442\u0430\u0440\u043E\u043A\u043E\u043D\u0441\u0442\u044F\u043D\u0442\u0438\u043D\u0456\u0432","\u0421\u0442\u0430\u0445\u0430\u043D\u043E\u0432","\u0421\u0442\u0435\u0431\u043D\u0438\u043A","\u0421\u0442\u043E\u0440\u043E\u0436\u0438\u043D\u0435\u0446\u044C","\u0421\u0442\u0440\u0438\u0439","\u0421\u0443\u0434\u0430\u043A","\u0421\u0443\u0434\u043E\u0432\u0430 \u0412\u0438\u0448\u043D\u044F","\u0421\u0443\u043C\u0438","\u0421\u0443\u0445\u043E\u0434\u0456\u043B\u044C\u0441\u044C\u043A","\u0422\u0430\u043B\u044C\u043D\u0435","\u0422\u0430\u0440\u0430\u0449\u0430","\u0422\u0430\u0442\u0430\u0440\u0431\u0443\u043D\u0430\u0440\u0438","\u0422\u0435\u043F\u043B\u0438\u043A","\u0422\u0435\u043F\u043B\u043E\u0434\u0430\u0440","\u0422\u0435\u0440\u0435\u0431\u043E\u0432\u043B\u044F","\u0422\u0435\u0440\u043D\u0456\u0432\u043A\u0430","\u0422\u0435\u0440\u043D\u043E\u043F\u0456\u043B\u044C","\u0422\u0435\u0440\u043D\u043E\u0432\u043A\u0430","\u0422\u0435\u0442\u0456\u0457\u0432","\u0422\u0438\u0441\u043C\u0435\u043D\u0438\u0446\u044F","\u0422\u043B\u0443\u043C\u0430\u0447","\u0422\u043E\u043A\u043C\u0430\u043A","\u0422\u043E\u0440\u0435\u0446\u044C\u043A","\u0422\u043E\u0440\u0447\u0438\u043D","\u0422\u0440\u043E\u0441\u0442\u044F\u043D\u0435\u0446\u044C","\u0422\u0440\u0443\u0441\u043A\u0430\u0432\u0435\u0446\u044C","\u0422\u0443\u043B\u044C\u0447\u0438\u043D","\u0422\u0443\u0440\u043A\u0430","\u0422\u044F\u0447\u0456\u0432","\u0423\u0433\u043D\u0456\u0432","\u0423\u0433\u043B\u0435\u0434\u0430\u0440","\u0423\u0436\u0433\u043E\u0440\u043E\u0434","\u0423\u043A\u0440\u0430\u0457\u043D\u043A\u0430","\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A","\u0423\u043C\u0430\u043D\u044C","\u0423\u0441\u0442\u0438\u043B\u0443\u0433","\u0424\u0430\u0441\u0442\u0456\u0432","\u0424\u0435\u043E\u0434\u043E\u0441\u0456\u044F","\u0425\u0438\u0440\u0456\u0432","\u0425\u043C\u0435\u043B\u044C\u043D\u0438\u043A","\u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u0438\u0439","\u0425\u043C\u0456\u043B\u044C\u043D\u0438\u043A","\u0425\u043E\u0434\u043E\u0440\u0456\u0432","\u0425\u043E\u0440\u043E\u043B","\u0425\u043E\u0440\u043E\u0448\u0456\u0432","\u0425\u043E\u0442\u0438\u043D","\u0425\u0440\u0435\u0441\u0442\u0456\u0432\u043A\u0430","\u0425\u0440\u0438\u0441\u0442\u0438\u043D\u0456\u0432\u043A\u0430","\u0425\u0443\u0441\u0442","\u0426\u0430\u0440\u0438\u0447\u0430\u043D\u043A\u0430","\u0426\u044E\u0440\u0443\u043F\u0438\u043D\u0441\u044C\u043A","\u0427\u0430\u0441\u0456\u0432 \u042F\u0440","\u0427\u0435\u0440\u0432\u043E\u043D\u043E\u0433\u0440\u0430\u0434","\u0427\u0435\u0440\u0432\u043E\u043D\u043E\u043F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u044C\u043A","\u0427\u0435\u0440\u043A\u0430\u0441\u0438","\u0427\u0435\u0440\u043D\u0456\u0432\u0446\u0456","\u0427\u0435\u0440\u043D\u0456\u0433\u0456\u0432","\u0427\u0435\u0440\u043D\u044F\u0445\u0456\u0432","\u0427\u0438\u0433\u0438\u0440\u0438\u043D","\u0427\u043E\u043F","\u0427\u043E\u0440\u043D\u043E\u0431\u0438\u043B\u044C","\u0427\u043E\u0440\u043D\u043E\u043C\u043E\u0440\u0441\u044C\u043A","\u0427\u043E\u0440\u0442\u043A\u0456\u0432","\u0427\u0443\u0433\u0443\u0457\u0432","\u0428\u0430\u0440\u0433\u043E\u0440\u043E\u0434","\u0428\u0430\u0445\u0442\u0430\u0440\u0441\u044C\u043A","\u0428\u0435\u043F\u0435\u0442\u0456\u0432\u043A\u0430","\u0428\u0438\u0440\u043E\u043A\u0435","\u0428\u043E\u0441\u0442\u043A\u0430","\u0428\u043F\u043E\u043B\u0430","\u0428\u0443\u043C\u0441\u044C\u043A","\u0429\u0430\u0441\u0442\u044F","\u0429\u043E\u043B\u043A\u0456\u043D\u0435","\u042E\u0436\u043D\u0435","\u042E\u0436\u043D\u043E\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A","\u042F\u043B\u0442\u0430","\u042F\u043C\u043F\u0456\u043B\u044C","\u042F\u0432\u043E\u0440\u0456\u0432","\u042F\u0433\u043E\u0442\u0438\u043D","\u042F\u043B\u0442\u0430","\u042F\u0440\u0435\u043C\u0447\u0435","\u042F\u0441\u0438\u043D\u0443\u0432\u0430\u0442\u0430"];function jo({company:e,onSave:t,onCancel:n,isModal:r=!1}){let o=Ie(),[a,i]=(0,P.useState)({name:"",email:"",website:"",phone:"",description:"",city:"",country:"\u0423\u043A\u0440\u0430\u0457\u043D\u0430",postal:"",region:"",street_line1:"",street_line2:""}),[l,s]=(0,P.useState)(null),[u,p]=(0,P.useState)(null),[d,m]=(0,P.useState)(null),[w,v]=(0,P.useState)(""),[g,x]=(0,P.useState)([]),[f,c]=(0,P.useState)([]),[h,b]=(0,P.useState)([]),[y,C]=(0,P.useState)([]),[k,N]=(0,P.useState)(""),[A,E]=(0,P.useState)(!1),[Y,M]=(0,P.useState)({}),B=xi.filter(O=>O.toLowerCase().includes(k.toLowerCase()));(0,P.useEffect)(()=>{if(e){if(i({name:e.name||"",email:e.email||"",website:e.website||"",phone:e.phone||"",description:e.description||"",city:e.address?.city||"",country:e.address?.country||"\u0423\u043A\u0440\u0430\u0457\u043D\u0430",postal:e.address?.postal||"",region:e.address?.region||"",street_line1:e.address?.street_line1||"",street_line2:e.address?.street_line2||""}),e.categories&&e.categories.length>0&&C(e.categories.map(O=>O.name||O)),e.images&&e.images.length>0){let O=e.images.find(_=>_.type==="logo");O&&(p(O.image_url),m(O.id))}e.images&&e.images.length>0&&x(e.images.filter(O=>O.type!=="logo"))}},[e]);let X=O=>{i({...a,[O.target.name]:O.target.value}),M(_=>({..._,[O.target.name]:null}))},fe=O=>{y.includes(O)||(C([...y,O]),N(""),E(!1),M(_=>({..._,categories:null})))},Nn=O=>{C(y.filter(_=>_!==O))},Ft=O=>{let _=O.target.files[0];if(_){s(_);let R=new FileReader;R.onloadend=()=>{p(R.result)},R.readAsDataURL(_)}},Ct=async()=>{if(!d){s(null),p(null),v("");return}if(window.confirm("\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F?"))try{(await fetch(`/api/images/${d}`,{method:"DELETE",credentials:"include"})).ok?(s(null),p(null),m(null),v("")):alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443")}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443")}},Mt=O=>{let _=Array.from(O.target.files);_.length>0&&(c([...f,..._]),_.forEach(R=>{let V=new FileReader;V.onloadend=()=>{b(T=>[...T,{file:R,preview:V.result}])},V.readAsDataURL(R)}))},_n=async O=>{if(window.confirm("\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F?"))try{(await fetch(`/api/images/${O}`,{method:"DELETE",credentials:"include"})).ok?x(g.filter(R=>R.id!==O)):alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F")}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F")}},qn=O=>{b(h.filter((_,R)=>R!==O)),c(f.filter((_,R)=>R!==O))},Ir=async O=>{O.preventDefault();let _=new FormData;_.append("company[name]",a.name),_.append("company[email]",a.email),_.append("company[website]",a.website),_.append("company[phone]",a.phone),_.append("company[description]",a.description),y.forEach(K=>{_.append("categories[]",K)}),_.append("address[city]",a.city),_.append("address[country]",a.country),_.append("address[postal]",a.postal),_.append("address[region]",a.region),_.append("address[street_line1]",a.street_line1),_.append("address[street_line2]",a.street_line2),l?_.append("logo",l):w&&_.append("logo_cached",w),f.forEach(K=>{_.append("images[]",K)});let R=e?`/api/companies/${e.id}`:"/api/companies",T=await fetch(R,{method:e?"PUT":"POST",credentials:"include",body:_}),q=await T.json();T.ok?r&&t?t(q):o(`/companies/${q.id}/dashboard`):M(q.errors||{})},re=O=>Y[O]?.message;return P.default.createElement("div",{className:r?"company-form-modal":"company-form container"},P.default.createElement("h1",null,e?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E"),P.default.createElement("form",{onSubmit:Ir,encType:"multipart/form-data"},P.default.createElement("section",{className:"form-section"},P.default.createElement("h3",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),re("name")&&P.default.createElement("div",{className:"field-error"},re("name")),P.default.createElement("input",{name:"name",value:a.name,onChange:X,placeholder:"\u041D\u0430\u0437\u0432\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"}),re("email")&&P.default.createElement("div",{className:"field-error"},re("email")),P.default.createElement("input",{name:"email",type:"email",value:a.email,onChange:X,placeholder:"Email"}),re("website")&&P.default.createElement("div",{className:"field-error"},re("website")),P.default.createElement("input",{name:"website",type:"url",value:a.website,onChange:X,placeholder:"https://example.com"}),re("phone")&&P.default.createElement("div",{className:"field-error"},re("phone")),P.default.createElement("input",{name:"phone",type:"tel",value:a.phone,onChange:X,placeholder:"+380 XX XXX XX XX"}),re("description")&&P.default.createElement("div",{className:"field-error"},re("description")),P.default.createElement("textarea",{name:"description",value:a.description,onChange:X,placeholder:"\u041E\u043F\u0438\u0441 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456",rows:"4"})),P.default.createElement("section",{className:"form-section"},P.default.createElement("h3",null,"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u043F\u043E\u0441\u043B\u0443\u0433"),re("categories")&&P.default.createElement("div",{className:"field-error"},re("categories")),y.length>0&&P.default.createElement("div",{className:"selected-categories-tags"},y.map(O=>P.default.createElement("span",{key:O,className:"category-tag"},O,P.default.createElement("button",{type:"button",className:"category-tag-remove",onClick:()=>Nn(O),"aria-label":"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E"},"\u2715")))),P.default.createElement("div",{className:"category-search-wrapper"},P.default.createElement("input",{type:"text",className:"category-search-input",placeholder:"\u0428\u0443\u043A\u0430\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457...",value:k,onChange:O=>{N(O.target.value),E(!0)},onFocus:()=>E(!0)}),A&&k&&P.default.createElement("div",{className:"category-dropdown"},B.length>0?B.slice(0,50).map(O=>P.default.createElement("div",{key:O,className:`category-dropdown-item ${y.includes(O)?"selected":""}`,onClick:()=>fe(O)},O,y.includes(O)&&P.default.createElement("span",{className:"checkmark"},"\u2713"))):P.default.createElement("div",{className:"category-dropdown-empty"},"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"))),y.length===0&&P.default.createElement("p",{className:"helper-text"},"\u041F\u043E\u0447\u043D\u0456\u0442\u044C \u0432\u0432\u043E\u0434\u0438\u0442\u0438 \u043D\u0430\u0437\u0432\u0443 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0434\u043B\u044F \u043F\u043E\u0448\u0443\u043A\u0443")),P.default.createElement("section",{className:"form-section"},P.default.createElement("h3",null,"\u0410\u0434\u0440\u0435\u0441\u0430"),re("city")&&P.default.createElement("div",{className:"field-error"},re("city")),P.default.createElement("select",{name:"city",value:a.city,onChange:X,className:"form-select"},P.default.createElement("option",{value:""},"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"),bi.map(O=>P.default.createElement("option",{key:O,value:O},O))),re("region")&&P.default.createElement("div",{className:"field-error"},re("region")),P.default.createElement("input",{name:"region",value:a.region,onChange:X,placeholder:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C"}),re("street_line1")&&P.default.createElement("div",{className:"field-error"},re("street_line1")),P.default.createElement("input",{name:"street_line1",value:a.street_line1,onChange:X,placeholder:"\u0412\u0443\u043B\u0438\u0446\u044F, \u0431\u0443\u0434\u0438\u043D\u043E\u043A"}),re("street_line2")&&P.default.createElement("div",{className:"field-error"},re("street_line2")),P.default.createElement("input",{name:"street_line2",value:a.street_line2,onChange:X,placeholder:"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430, \u043E\u0444\u0456\u0441 (\u043D\u0435\u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E)"}),re("postal")&&P.default.createElement("div",{className:"field-error"},re("postal")),P.default.createElement("input",{name:"postal",value:a.postal,onChange:X,placeholder:"\u041F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441"}),re("country")&&P.default.createElement("div",{className:"field-error"},re("country")),P.default.createElement("input",{name:"country",value:a.country,onChange:X,placeholder:"\u041A\u0440\u0430\u0457\u043D\u0430",readOnly:!0})),e&&P.default.createElement("section",{className:"form-section"},P.default.createElement("h3",null,"\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"),u&&P.default.createElement("div",{className:"logo-preview"},P.default.createElement("img",{src:l?u:`/images${u}`,alt:"Company logo preview"}),P.default.createElement("button",{type:"button",className:"btn-remove-logo",onClick:Ct},"\u2715 \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F")),P.default.createElement("div",{className:"file-input-wrapper"},P.default.createElement("input",{type:"file",id:"logo-input",name:"logo",accept:"image/*",onChange:Ft,className:"file-input"}),P.default.createElement("label",{htmlFor:"logo-input",className:"file-input-label"},u?"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F":"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F"),P.default.createElement("span",{className:"file-input-hint"},"PNG, JPG, GIF \u0434\u043E 5MB")),w&&P.default.createElement("input",{type:"hidden",name:"logo_cached",value:w}),re("logo")&&P.default.createElement("div",{className:"field-error"},re("logo"))),e&&P.default.createElement("section",{className:"form-section"},P.default.createElement("div",{className:"images-header"},P.default.createElement("h3",null,"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"),P.default.createElement("label",{htmlFor:"images-input",className:"btn-add-image"},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u0444\u043E\u0442\u043E")),P.default.createElement("input",{type:"file",id:"images-input",accept:"image/*",multiple:!0,onChange:Mt,className:"file-input",style:{display:"none"}}),g.length>0&&P.default.createElement("div",{className:"images-grid"},P.default.createElement("h4",{className:"images-subtitle"},"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u0456 \u0444\u043E\u0442\u043E"),P.default.createElement("div",{className:"images-list"},g.map(O=>P.default.createElement("div",{key:O.id,className:"image-item"},P.default.createElement("img",{src:`/images${O.image_url}`,alt:O.image_name||"Company image"}),P.default.createElement("button",{type:"button",className:"btn-remove-image",onClick:()=>_n(O.id),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u2715"),P.default.createElement("span",{className:"image-name"},O.image_name))))),h.length>0&&P.default.createElement("div",{className:"images-grid"},P.default.createElement("h4",{className:"images-subtitle"},"\u041D\u043E\u0432\u0456 \u0444\u043E\u0442\u043E (\u0431\u0443\u0434\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E)"),P.default.createElement("div",{className:"images-list"},h.map((O,_)=>P.default.createElement("div",{key:_,className:"image-item new-image"},P.default.createElement("img",{src:O.preview,alt:`Preview ${_+1}`}),P.default.createElement("button",{type:"button",className:"btn-remove-image",onClick:()=>qn(_),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u2715"),P.default.createElement("span",{className:"image-name"},O.file.name))))),g.length===0&&h.length===0&&P.default.createElement("div",{className:"empty-images"},P.default.createElement("p",null,"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u0449\u0435 \u043D\u0435 \u0434\u043E\u0434\u0430\u043D\u0456"),P.default.createElement("label",{htmlFor:"images-input",className:"btn-add-first-image"},"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0435\u0440\u0448\u0435 \u0444\u043E\u0442\u043E")),re("images")&&P.default.createElement("div",{className:"field-error"},re("images"))),P.default.createElement("div",{className:"form-actions"},r&&n&&P.default.createElement("button",{type:"button",onClick:n,className:"btn-secondary"},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),P.default.createElement("button",{type:"submit",className:"btn-primary"},e?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E"))))}var U=G(Q());var be=G(Q());function $o({open:e,employee:t,service:n,onClose:r,onSaved:o}){let[a,i]=(0,be.useState)({name:"",description:"",price:"",duration:30}),[l,s]=(0,be.useState)(!1),[u,p]=(0,be.useState)(null),[d,m]=(0,be.useState)(null);if((0,be.useEffect)(()=>{i(n?{name:n.name||"",description:n.description||"",price:n.price||"",duration:n.duration||30}:{name:"",description:"",price:"",duration:30})},[n,e]),!e)return null;let w=async()=>{s(!0),p(null);let g={...a,employee_id:t.id},x=n?`/api/services/${n.id}`:"/api/services",f=n?"PUT":"POST";try{let c=await fetch(x,{method:f,credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!c.ok)throw new Error(await c.text());let h=await c.json(),b=n?`Service ${h.name} successfully updated`:`Service ${h.name} successfully created`;m(b),setTimeout(()=>{m(null),o(h),r()},1e3)}catch(c){p(c.message||"Failed to save service")}finally{s(!1)}},v=async()=>{if(n&&window.confirm(`Are you sure you want to delete ${n.name}?`)){s(!0),p(null);try{let g=await fetch(`/api/services/${n.id}`,{method:"DELETE",credentials:"include"});if(!g.ok)throw new Error(await g.text());m("Service deleted successfully"),setTimeout(()=>{m(null),o(null),r()},1e3)}catch(g){p(g.message||"Failed to delete service")}finally{s(!1)}}};return be.default.createElement("div",{className:"confirm-overlay",onClick:r},be.default.createElement("div",{className:"glass-modal",onClick:g=>g.stopPropagation()},be.default.createElement("h3",null,n?"Edit Service":"Add Service"),u&&be.default.createElement("div",{className:"form__error"},u),d&&be.default.createElement("div",{className:"form__success"},d),be.default.createElement("input",{placeholder:"Name",value:a.name,onChange:g=>i({...a,name:g.target.value}),disabled:l}),be.default.createElement("textarea",{placeholder:"Description",value:a.description,onChange:g=>i({...a,description:g.target.value}),disabled:l}),be.default.createElement("input",{type:"number",placeholder:"Price",value:a.price,onChange:g=>i({...a,price:g.target.value}),disabled:l}),be.default.createElement("input",{type:"number",step:15,min:15,placeholder:"Duration (min)",value:a.duration,onChange:g=>i({...a,duration:parseInt(g.target.value)}),disabled:l}),be.default.createElement("div",{className:"modal-actions"},be.default.createElement("button",{onClick:r,disabled:l},"Cancel"),n&&be.default.createElement("button",{className:"danger",onClick:v,disabled:l},"Delete"),be.default.createElement("button",{className:"apply",onClick:w,disabled:l},n?"Update":"Create"))))}function Mr({role:e,employee:t,onSave:n,onCancel:r,isModal:o=!1}){let a=Ie(),[i,l]=(0,U.useState)({first_name:"",last_name:"",description:"",email:"",phone:"",password:"",role:e==="admin"?1:0}),[s,u]=(0,U.useState)({}),[p,d]=(0,U.useState)([]),[m,w]=(0,U.useState)(!1),[v,g]=(0,U.useState)(null);(0,U.useEffect)(()=>{t&&(l({first_name:t.first_name||"",last_name:t.last_name||"",description:t.description||"",email:t.email||"",phone:t.phone||"",password:"",role:t.role??(e==="admin"?1:0)}),d(t.services||[]))},[t,e]);let x=async()=>{await fetch("/api/employees/logout",{method:"POST",credentials:"include"})};(0,U.useRef)(()=>{t||x()});let f=N=>{let A=N.target.name==="role"?parseInt(N.target.value):N.target.value;l({...i,[N.target.name]:A}),u(E=>({...E,[N.target.name]:null}))},c=async N=>{N.preventDefault();let A={employee:{first_name:i.first_name,last_name:i.last_name,description:i.description,email:i.email,phone:i.phone,role:i.role}};i.password&&(A.employee.password=i.password);let E=t?`/api/employees/${t.id}`:"/api/employees",M=await fetch(E,{method:t?"PUT":"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)});if(M.ok){let B=await M.json();o&&n?n({...B,services:p}):a("/companies/welcome")}else{let B=await M.json();u(B.errors||{})}},h=()=>{g(null),w(!0)},b=N=>{g(N),w(!0)},y=async N=>{if(window.confirm(`\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443 "${N.name}"?`))try{let A=await fetch(`/api/services/${N.id}`,{method:"DELETE",credentials:"include"});if(!A.ok)throw new Error(await A.text());d(p.filter(E=>E.id!==N.id))}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438")}},C=N=>{d(N===null?p.filter(A=>A.id!==v.id):v?p.map(A=>A.id===N.id?N:A):[...p,N]),g(null)},k=N=>s[N]?.message;return U.default.createElement("div",{className:o?"employee-form-modal":"employee-form container"},U.default.createElement("h1",null,t?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"," ",i.role===1?"\u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430":"\u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),U.default.createElement("form",{onSubmit:c},U.default.createElement("section",{className:"form-section"},U.default.createElement("h3",null,"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),k("first_name")&&U.default.createElement("div",{className:"field-error"},k("first_name")),U.default.createElement("input",{name:"first_name",value:i.first_name,onChange:f,placeholder:"\u0406\u043C\u02BC\u044F"}),k("last_name")&&U.default.createElement("div",{className:"field-error"},k("last_name")),U.default.createElement("input",{name:"last_name",value:i.last_name,onChange:f,placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),k("email")&&U.default.createElement("div",{className:"field-error"},k("email")),U.default.createElement("input",{name:"email",type:"email",value:i.email,onChange:f,placeholder:"Email"}),k("phone")&&U.default.createElement("div",{className:"field-error"},k("phone")),U.default.createElement("input",{name:"phone",value:i.phone,onChange:f,placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),k("password")&&U.default.createElement("div",{className:"field-error"},k("password")),U.default.createElement("input",{name:"password",type:"password",value:i.password,onChange:f,placeholder:t?"\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u0437\u0430\u043B\u0438\u0448\u0442\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u043C, \u0449\u043E\u0431 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438)":"\u041F\u0430\u0440\u043E\u043B\u044C",required:!t}),k("description")&&U.default.createElement("div",{className:"field-error"},k("description")),U.default.createElement("textarea",{name:"description",value:i.description,onChange:f,placeholder:"\u041E\u043F\u0438\u0441"}),k("role")&&U.default.createElement("div",{className:"field-error"},k("role")),U.default.createElement("label",{htmlFor:"role"},"\u0420\u043E\u043B\u044C"),U.default.createElement("select",{id:"role",name:"role",value:i.role,onChange:f,required:!0},U.default.createElement("option",{value:0},"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A"),U.default.createElement("option",{value:1},"\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440"))),t&&U.default.createElement("section",{className:"form-section services-section"},U.default.createElement("div",{className:"services-header"},U.default.createElement("h3",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),U.default.createElement("button",{type:"button",className:"btn-add-service",onClick:h},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443")),p.length>0?U.default.createElement("div",{className:"services-grid"},p.map(N=>U.default.createElement("div",{key:N.id,className:"service-card"},U.default.createElement("div",{className:"service-card-header"},U.default.createElement("h4",null,N.name),U.default.createElement("div",{className:"service-card-actions"},U.default.createElement("button",{type:"button",className:"btn-icon-edit",onClick:()=>b(N),title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"},"\u270E"),U.default.createElement("button",{type:"button",className:"btn-icon-delete",onClick:()=>y(N),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u{1F5D1}"))),U.default.createElement("p",{className:"service-description"},N.description),U.default.createElement("div",{className:"service-footer"},U.default.createElement("span",{className:"service-price"},N.price," \u0433\u0440\u043D"),U.default.createElement("span",{className:"service-duration"},N.duration," \u0445\u0432"))))):U.default.createElement("div",{className:"empty-services"},U.default.createElement("p",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u0449\u0435 \u043D\u0435 \u0434\u043E\u0434\u0430\u043D\u0456"),U.default.createElement("button",{type:"button",className:"btn-add-first-service",onClick:h},"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0435\u0440\u0448\u0443 \u043F\u043E\u0441\u043B\u0443\u0433\u0443"))),U.default.createElement("div",{className:"form-actions"},o&&r&&U.default.createElement("button",{type:"button",onClick:r},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),U.default.createElement("button",{type:"submit"},t?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"))),t&&U.default.createElement($o,{open:m,employee:t,service:v,onClose:()=>{w(!1),g(null)},onSaved:C}))}var Ot=G(Q());(function(){if(!document.getElementById("b9644920dd4b82f30f246dfd1f69aee7bf9f5599fdae5c8b8a399e9acdd67c6f")){var e=document.createElement("style");e.id="b9644920dd4b82f30f246dfd1f69aee7bf9f5599fdae5c8b8a399e9acdd67c6f",e.textContent=`.login {
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
`,document.head.appendChild(e)}})();function Uo(){let[e,t]=(0,Ot.useState)(""),n=Ie();async function r(o){o.preventDefault(),t("");let a=o.target.email.value,i=o.target.password.value;try{let l=await fetch("/api/employees/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:i})});if(!l.ok){t("\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 email \u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C");return}let s=await l.json();console.log(s.company_id),s.company_id?n(`/companies/${s.company_id}/dashboard`):n("/companies/new")}catch(l){console.error(l),t("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u2019\u0454\u0434\u043D\u0430\u043D\u043D\u044F \u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C")}}return Ot.default.createElement("div",{className:"login container"},Ot.default.createElement("h1",{className:"login__title"},"\u0412\u0445\u0456\u0434"),e&&Ot.default.createElement("div",{className:"login__error"},e),Ot.default.createElement("form",{className:"login__form",onSubmit:r},Ot.default.createElement("input",{type:"email",placeholder:"Email",name:"email",required:!0}),Ot.default.createElement("input",{type:"password",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",name:"password",required:!0}),Ot.default.createElement("button",{type:"submit",className:"btn"},"\u0423\u0432\u0456\u0439\u0442\u0438")))}var pu=G(Q());function mu(){return pu.default.createElement("div",null,pu.default.createElement("h1",null,"404 CompanyNotFound"))}var Ae=G(Q());var Kt=G(Q());(function(){if(!document.getElementById("a127da0de2169adcba038b037c01109c27901a050a4a9ac5b50bf49ff645976e")){var e=document.createElement("style");e.id="a127da0de2169adcba038b037c01109c27901a050a4a9ac5b50bf49ff645976e",e.textContent=`.sidebar {
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
`,document.head.appendChild(e)}})();function hu({companyName:e,id:t}){return Kt.default.createElement("aside",{className:"sidebar"},Kt.default.createElement("h2",{className:"sidebar__logo"},e),Kt.default.createElement("nav",{className:"sidebar__nav"},Kt.default.createElement(bn,{to:`/companies/${t}/dashboard`},"Dashboard"),Kt.default.createElement(bn,{to:`/companies/${t}/employees`},"Employees"),Kt.default.createElement(bn,{to:`/companies/${t}/clients`},"Clients"),Kt.default.createElement(bn,{to:`/companies/${t}/edit`},"Company"),Kt.default.createElement(bn,{to:`/companies/${t}/settings`},"Settings")))}var Gn=G(Q());(function(){if(!document.getElementById("a675d0013b35ba43c4e7f713f899b0aef50b34428c621f79aafe309f9d5b2c29")){var e=document.createElement("style");e.id="a675d0013b35ba43c4e7f713f899b0aef50b34428c621f79aafe309f9d5b2c29",e.textContent=`/* TopBar container */
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
`,document.head.appendChild(e)}})();function gu({userName:e}){return Gn.default.createElement("header",{className:"topbar"},Gn.default.createElement("div",{className:"topbar__left"},Gn.default.createElement("h1",null,e)),Gn.default.createElement("div",{className:"topbar__right"},Gn.default.createElement("span",{className:"topbar__user"}),Gn.default.createElement("button",{onClick:async()=>{await fetch("/api/employees/logout",{method:"POST",credentials:"include"}),window.location.href="/companies/welcome"},className:"logout-btn"},"Logout")))}var J=G(Q());var Gt=G(Q());function ki({timeSlot:e}){let t=s=>s instanceof Date?s:new Date(s),n=t(e.start_time),r=t(e.end_time),o=(r-n)/(1e3*60*60),a=(r-n)/(1e3*60),i=n.getMinutes(),l=e.client?.first_name;return Gt.default.createElement("div",{className:`time-slot-block ${e.state}`,style:{position:"absolute",top:`${i/60*100}%`,height:`${o*100}%`,left:0,right:0}},l?Gt.default.createElement(Gt.default.Fragment,null,Gt.default.createElement("div",{className:"client-name"},l),Gt.default.createElement("div",{className:"time-label"},e.service_name," (",a," min)")):Gt.default.createElement(Gt.default.Fragment,null,Gt.default.createElement("div",null,e.state)))}var at=G(Q()),am=G(Q());var W=G(Q());var Cn=G(Q());(function(){if(!document.getElementById("016eff5b894d8467c8ab482e5e63306ffab800f5cd19b0509fbb6548608fa56e")){var e=document.createElement("style");e.id="016eff5b894d8467c8ab482e5e63306ffab800f5cd19b0509fbb6548608fa56e",e.textContent=`.confirm-overlay {
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
`,document.head.appendChild(e)}})();function Ho({open:e,title:t="Are you sure?",message:n="This action cannot be undone.",confirmText:r="Yes",cancelText:o="Cancel",onConfirm:a,onCancel:i}){return e?Cn.default.createElement("div",{className:"confirm-overlay",onClick:i},Cn.default.createElement("div",{className:"confirm-modal",onClick:l=>l.stopPropagation()},Cn.default.createElement("h3",null,t),Cn.default.createElement("p",null,n),Cn.default.createElement("div",{className:"confirm-actions"},Cn.default.createElement("button",{className:"btn cancel",onClick:i},o),Cn.default.createElement("button",{className:"btn danger",onClick:a},r)))):null}(function(){if(!document.getElementById("98b4fbe3096ef325ff4a3b26beed9b76a8283f32b9e9e50a08673263ce04bde0")){var e=document.createElement("style");e.id="98b4fbe3096ef325ff4a3b26beed9b76a8283f32b9e9e50a08673263ce04bde0",e.textContent=`.weekday-grid {
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
`,document.head.appendChild(e)}})();function Bo({open:e,employee:t,window:n,onClose:r,onSaved:o}){let[a,i]=(0,W.useState)({start_time:"",end_time:"",break_from:"",break_to:"",weekends:[],effective_date:new Date().toISOString().slice(0,10),end_date:""}),[l,s]=(0,W.useState)(!1),[u,p]=(0,W.useState)(null),[d,m]=(0,W.useState)(null),w=[{id:0,label:"\u041F\u043D"},{id:1,label:"\u0412\u0442"},{id:2,label:"\u0421\u0440"},{id:3,label:"\u0427\u0442"},{id:4,label:"\u041F\u0442"},{id:5,label:"\u0421\u0431"},{id:6,label:"\u041D\u0434"}],[v,g]=(0,W.useState)(!1),[x,f]=(0,W.useState)({effective_date:"",end_date:""});(0,W.useEffect)(()=>{e&&(n?(i({start_time:n.start_time||"",end_time:n.end_time||"",break_from:n.break_from||"",break_to:n.break_to||"",weekends:Array.isArray(n.weekends)?n.weekends:[],effective_date:n.effective_date||"",end_date:n.end_date||""}),f({effective_date:n.effective_date?.slice(0,10)||"",end_date:n.end_date?.slice(0,10)||""})):i(c))},[n,e]);let c={start_time:"",end_time:"",break_from:"",break_to:"",weekends:[],effective_date:new Date().toISOString().slice(0,10),end_date:""};if((0,W.useEffect)(()=>{p(null),m(null)},[e,n]),!e)return null;let h=async()=>{s(!0),p(null);let y={...a,employee_id:t.id,id:n?.id};try{let C=await fetch("/api/windows/upsert",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)});if(!C.ok)throw new Error(await C.text());let k=await C.json();m(n?"\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E":"\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E"),setTimeout(()=>{m(null),o(k),r()},800)}catch(C){p(C.message||"Failed to save window")}finally{s(!1)}},b=async()=>{if(n)try{let y=await fetch(`/api/windows/${n.id}`,{method:"DELETE",credentials:"include"});if(!y.ok)throw new Error(await y.text());m("\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E"),setTimeout(()=>{m(null),o(null),r()},800)}catch(y){p(y.message||"Failed to delete window")}};return a&&W.default.createElement(W.default.Fragment,null,W.default.createElement("div",{className:"confirm-overlay",onClick:r},W.default.createElement("div",{className:"glass-modal",onClick:y=>y.stopPropagation()},W.default.createElement("h3",null,n?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435":"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),W.default.createElement("div",null,"( ",x.effective_date," .. ",x.end_date," )"),W.default.createElement("br",null),W.default.createElement("label",null,"Effective date"),W.default.createElement("input",{type:"date",value:a.effective_date,onChange:y=>i({...a,effective_date:y.target.value})}),W.default.createElement("label",null,"End date"),W.default.createElement("input",{type:"date",value:a.end_date,onChange:y=>i({...a,end_date:y.target.value})}),u&&W.default.createElement("div",{className:"form__error"},u),d&&W.default.createElement("div",{className:"form__success"},d),W.default.createElement("label",null,"Start time"),W.default.createElement("input",{type:"time",value:Sn(a.start_time),onChange:y=>{let C=En(a.start_time||new Date().toISOString(),y.target.value);i(k=>({...k,start_time:C}))}}),W.default.createElement("label",null,"End time"),W.default.createElement("input",{type:"time",value:Sn(a.end_time),onChange:y=>{let C=En(a.end_time||new Date().toISOString(),y.target.value);i(k=>({...k,end_time:C}))}}),W.default.createElement("label",null,"Break from"),W.default.createElement("input",{type:"time",value:Sn(a.break_from),onChange:y=>{let C=En(a.break_from||new Date().toISOString(),y.target.value);i(k=>({...k,break_from:C}))}}),W.default.createElement("label",null,"Break to"),W.default.createElement("input",{type:"time",value:Sn(a.break_to),onChange:y=>{let C=En(a.break_to||new Date().toISOString(),y.target.value);i(k=>({...k,break_to:C}))}}),W.default.createElement("div",{className:"weekday-picker"},W.default.createElement("label",{className:"form-label"},"\u0412\u0438\u0445\u0456\u0434\u043D\u0456"),W.default.createElement("div",{className:"weekday-grid"},w.map(y=>{let C=a.weekends?.includes(y.id);return W.default.createElement("label",{key:y.id,className:"weekday-checkbox mb-2"},W.default.createElement("input",{type:"checkbox",checked:C,onChange:()=>{i(k=>({...k,weekends:C?k.weekends.filter(N=>N!==y.id):[...k.weekends,y.id]}))}}),W.default.createElement("span",null,y.label))}))),W.default.createElement("div",{className:"modal-actions"},W.default.createElement("button",{onClick:r,disabled:l},"Cancel"),n&&W.default.createElement(W.default.Fragment,null,W.default.createElement("button",{className:"danger",onClick:()=>g(!0)},"Delete"),W.default.createElement(Ho,{open:v,title:"Delete window",message:"Are you sure you want to delete this window?",confirmText:"Yes",cancelText:"No",onConfirm:()=>{g(!1),b()},onCancel:()=>g(!1)})),W.default.createElement("button",{className:"apply",onClick:h,disabled:l},n?"Update":"Create")))))}function vu({days:e,weekStart:t,setWeekStart:n,employees:r,currentEmployee:o,setCurrentEmployee:a}){let i=()=>n(kn(t,7)),l=()=>n(kn(t,-7)),s=()=>n(Qn(new Date)),[u,p]=(0,am.useState)(!1),d=o?.window;return at.default.createElement("header",{className:"calendar__header sticky"},at.default.createElement("h4",null,e[0].toLocaleDateString("uk-UA",{day:"numeric",month:"long"})," \u2013 ",e[6].toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})),at.default.createElement("select",{className:"employee-select",value:o?.id||"",onChange:m=>{let w=m.target.value;a(w===""?null:r.find(v=>v.id===Number(w)))}},at.default.createElement("option",{value:""},"\u041E\u0431\u0440\u0430\u0442\u0438 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),r.map(m=>at.default.createElement("option",{key:m.id,value:m.id},m.first_name," ",m.last_name))),o&&!d&&at.default.createElement("button",{className:"secondary",onClick:()=>p(!0)},"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),o&&at.default.createElement(Bo,{open:u,employee:o,window:o.window,onClose:()=>p(!1),onSaved:m=>{a(w=>w&&{...w,window:m})}}),at.default.createElement("div",{className:"calendar__actions"},at.default.createElement("button",{onClick:l},"\u2190"),at.default.createElement("button",{onClick:s},"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456"),at.default.createElement("button",{onClick:i},"\u2192"),at.default.createElement("input",{className:"date__picker",type:"date",value:t.toISOString().slice(0,10),onChange:m=>n(new Date(m.target.value+"T00:00:00"))})))}var H=G(Q()),Pe=G(Q());var Ve=G(Q());(function(){if(!document.getElementById("d5860081ef1c8a6df2ca309b7af21e03f785b56257746a737b7a744dcab475cd")){var e=document.createElement("style");e.id="d5860081ef1c8a6df2ca309b7af21e03f785b56257746a737b7a744dcab475cd",e.textContent=`.client-input-row {
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
`,document.head.appendChild(e)}})();function yu({open:e,onClose:t,onCreated:n}){let[r,o]=(0,Ve.useState)({first_name:"",last_name:"",email:"",phone:""}),[a,i]=(0,Ve.useState)(!1),[l,s]=(0,Ve.useState)(null),[u,p]=(0,Ve.useState)(null);if(!e)return null;let d=async()=>{i(!0),s(null);try{let m=await fetch("/api/clients",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!m.ok)throw new Error(await m.text());let w=await m.json();p(`Client ${w.first_name} successfully created`),setTimeout(()=>{p(null),n(w),t()},1e3)}catch(m){s(m.message||"Failed to create client")}finally{i(!1)}};return Ve.default.createElement("div",{className:"confirm-overlay",onClick:t},Ve.default.createElement("div",{className:"glass-modal small",onClick:m=>m.stopPropagation()},Ve.default.createElement("h3",null,"New client"),l&&Ve.default.createElement("div",{className:"form__error"},l),u&&Ve.default.createElement("div",{className:"form__success"},u),["first_name","last_name","email","phone"].map(m=>Ve.default.createElement("input",{key:m,placeholder:m.replace("_"," "),value:r[m],onChange:w=>o(v=>({...v,[m]:w.target.value}))})),Ve.default.createElement("div",{className:"modal-actions"},Ve.default.createElement("button",{onClick:t},"Close"),Ve.default.createElement("button",{className:"apply",disabled:a,onClick:d},"Create"))))}(function(){if(!document.getElementById("9403ccd3928ae6193b77064c875b789d6683bd4ba322769601253770b0128aab")){var e=document.createElement("style");e.id="9403ccd3928ae6193b77064c875b789d6683bd4ba322769601253770b0128aab",e.textContent=`.form__title {
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
`,document.head.appendChild(e)}})();function wu({slot:e,weekStart:t,previewSlot:n,setPreviewSlot:r,setTimeSlots:o,setEditingSlot:a,editingSlot:i,currentEmployee:l}){let[s,u]=(0,Pe.useState)(()=>e?.duration??15),[p,d]=(0,Pe.useState)(""),[m,w]=(0,Pe.useState)([]),[v,g]=(0,Pe.useState)(!1),[x,f]=(0,Pe.useState)(null),[c,h]=(0,Pe.useState)(null),[b,y]=(0,Pe.useState)(null),[C,k]=(0,Pe.useState)(null),[N,A]=(0,Pe.useState)(!1),[E,Y]=(0,Pe.useState)(null),[M,B]=(0,Pe.useState)(null),[X,fe]=(0,Pe.useState)(!1),[Nn,Ft]=(0,Pe.useState)(!1);if((0,Pe.useEffect)(()=>{if(!e)return;a(e),u(e.duration??15);let _=l.services.find(R=>R.id===e.service_id);if(_){Y(_);let R=e.price?Number(e.price):null;B(R)}},[e,l]),!i)return null;let Ct=(_,R)=>Xe(Kn(new Date(_),R)),Mt=(0,Pe.useRef)(null),_n=_=>{!_||_.length<3||(Mt.current&&clearTimeout(Mt.current),Mt.current=window.setTimeout(async()=>{g(!0);let V=await(await fetch(`/api/clients?search=${_}`)).json();w(V),g(!1)},250))},qn=async()=>{if(h(null),!!i)try{let _=await fetch(`/api/time_slots/${i.id}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!_.ok){let V=await _.text();throw new Error(V||"Failed to update time slot")}let R=await _.json();o(V=>V.map(T=>T.id===R.id?R:T)),y("Time slot updated successfully!"),setTimeout(()=>{y(null),a(null),d(""),f(null),r(null)},1e3),O()}catch(_){h(_.message)}},Ir=async()=>{if(h(null),!!i)try{let _=await fetch(`/api/time_slots/${i.id}`,{method:"DELETE",credentials:"include"});if(!_.ok){let V=await _.text();throw new Error(V||"Failed to delete time slot")}let R=await _.json();o(V=>V.filter(T=>T.id!==R.id)),y("Time slot deleted successfully!"),setTimeout(()=>{y(null),a(null),d(""),f(null),r(null)},1e3),O()}catch(_){h(_.message)}},re=async()=>{if(h(null),!i)return;let _={...i,client_id:i.client_id??n?.client_id??null};console.log("POST payload:",_);try{let R=await fetch("/api/time_slots",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!R.ok){let T=await R.text();throw new Error(T||"Failed to schedule time slot")}let V=await R.json();o(T=>[...T,V]),y("Time slot scheduled successfully!"),setTimeout(()=>{y(null),a(null),d(""),f(null),r(null)},1e3),O()}catch(R){h(R.message)}},O=()=>{let _=t.toISOString().slice(0,10),R=kn(t,6).toISOString().slice(0,10);fetch(`/api/employees/${l.id}/availability?from=${_}&to=${R}`).then(V=>V.json()).then(V=>{k(V.employee.window),o(V.employee.time_slots)})};return H.default.createElement("div",{className:"glass-overlay",onClick:()=>a(null)},H.default.createElement("div",{className:"glass-modal",onClick:_=>_.stopPropagation()},H.default.createElement("div",{className:"form__title"},H.default.createElement("div",{className:"form__title-left"},"Edit time slot:"),H.default.createElement("div",{className:`form__title-right form__title_${i.state}`},i.state)),c&&H.default.createElement("div",{className:"form__error"},c),b&&H.default.createElement("div",{className:"form__success"},b),H.default.createElement("div",{className:"form-group mt-3"},H.default.createElement("div",{className:"time-range-row"},H.default.createElement("label",null,"Date"),H.default.createElement("input",{type:"date",className:"date__picker",value:i.day,onChange:_=>{let R=_.target.value;a(V=>({...V,day:R,start_time:`${R}${V.start_time.slice(10)}`,end_time:`${R}${V.end_time.slice(10)}`}))}}))),H.default.createElement("div",{className:"form-group mt-2"},H.default.createElement("label",null,"Service"),H.default.createElement("div",{className:"time-range-row"},H.default.createElement("div",{className:"input-with-button"},H.default.createElement("select",{className:"width-100",value:i.service_id??"",onChange:_=>{let R=Number(_.target.value),V=l.services.find(K=>K.id===R);if(!V){Y(null),B(null);return}let T=new Date(i.start_time);u(V.duration);let q={service_id:V.id,duration:V.duration,price:V.price,end_time:Xe(Kn(T,V.duration))};a(K=>({...K,...q})),r(K=>K?{...K,...q}:null),Y(V),B(null)}},H.default.createElement("option",{value:""},"Select a service"),l.services.map(_=>H.default.createElement("option",{key:_.id,value:_.id},_.name))),H.default.createElement("div",{className:"input-button content-center",title:"Add service",onClick:()=>Ft(!0)},"+")),H.default.createElement($o,{open:Nn,employee:l,onClose:()=>Ft(!1),onCreated:_=>{l.services.push(_),a(R=>({...R,service_id:_.id,duration:_.duration,price:_.price})),Y(_),Ft(!1)}}))),H.default.createElement("div",{className:"form-group"},E&&H.default.createElement(H.default.Fragment,null,H.default.createElement("div",{className:"time-range-row mt-1 t-sm"},H.default.createElement("label",null,"Duration"),H.default.createElement("input",{type:"number",step:15,min:15,value:i.duration,onChange:_=>{let R=Number(_.target.value),V=new Date(i.start_time);u(R),a(T=>({...T,duration:R,end_time:Xe(Kn(V,R))})),r(T=>T?{...T,duration:R,end_time:Xe(Kn(V,R))}:null)}}),H.default.createElement("label",{className:"content-center"},"Price"),H.default.createElement("input",{type:"number",step:.01,min:0,value:M??Number(i.price??E?.price??0),onChange:_=>{let R=Number(_.target.value);B(R),a(V=>({...V,price:R}))}})))),H.default.createElement("div",{className:"form-group time-range"},H.default.createElement("label",null,"Time"),H.default.createElement("div",{className:"time-range-row"},H.default.createElement("input",{type:"time",step:900,value:Sn(i.start_time),onChange:_=>{let R=En(i.start_time,_.target.value);a(V=>({...V,start_time:R,end_time:Ct(R,s)}))}}),H.default.createElement("input",{type:"time",step:900,value:Sn(i.end_time),onChange:_=>{let R=En(i.end_time,_.target.value);a(V=>({...V,end_time:R,start_time:Ct(R,-s)}))}}))),H.default.createElement("div",{className:"form-group"},H.default.createElement("label",null,"Client"),H.default.createElement("div",{className:"input-with-button"},H.default.createElement("input",{type:"text",placeholder:"Search client...",value:i?.client?`${i.client.first_name} ${i.client.last_name}`:p,onChange:_=>{a(R=>({...R,client:null,client_id:null})),d(_.target.value),_n(_.target.value)}}),H.default.createElement("div",{className:"input-button content-center",onClick:()=>fe(!0),title:"Add client"},"+")),H.default.createElement(yu,{open:X,onClose:()=>fe(!1),onCreated:_=>{a(R=>({...R,client_id:_.id,client:_}))}}),v&&H.default.createElement("div",{className:"hint"},"Searching\u2026"),m.length>0&&H.default.createElement("ul",{className:"autocomplete-list"},m.map(_=>H.default.createElement("li",{key:_.id,onClick:()=>{w([]),a(R=>({...R,client_id:_.id,client:_}))}},H.default.createElement("strong",null,_.first_name," ",_.last_name),H.default.createElement("div",{className:"muted"},_.email))))),H.default.createElement("div",{className:"modal-actions"},H.default.createElement("button",{onClick:()=>{h(null),a(null),d(""),f(null)}},"Close"),i.state==="preview"&&H.default.createElement("button",{className:"apply",onClick:re},"Schedule"),i.state==="scheduled"&&H.default.createElement(H.default.Fragment,null,H.default.createElement("button",{className:"danger",onClick:()=>A(!0)},"Delete"),H.default.createElement(Ho,{open:N,title:"Delete time slot",message:"Are you sure you want to delete this time slot?",confirmText:"Yes",cancelText:"No",onConfirm:()=>{A(!1),Ir()},onCancel:()=>A(!1)})),i.state==="scheduled"&&H.default.createElement("button",{className:"apply",onClick:qn},"Update"))))}(function(){if(!document.getElementById("d2a1e44d6fcbce1ab72efc649c94a73f5a8a1e5bed0b9b132dbb11207b7851e0")){var e=document.createElement("style");e.id="d2a1e44d6fcbce1ab72efc649c94a73f5a8a1e5bed0b9b132dbb11207b7851e0",e.textContent=`.calendar-card {
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
  width: 320px;
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
`,document.head.appendChild(e)}})();function xu({employees:e,companyId:t}){let[n,r]=(0,J.useState)(Qn(new Date)),[o,a]=(0,J.useState)(null),[i,l]=(0,J.useState)(null),[s,u]=(0,J.useState)(null),[p,d]=(0,J.useState)([]),[m,w]=(0,J.useState)([]),v=(0,J.useRef)(null),[g,x]=(0,J.useState)(null),[f,c]=(0,J.useState)(null),[h,b]=(0,J.useState)(null),[y,C]=(0,J.useState)(!1),[k,N]=(0,J.useState)(null),A=Array.from({length:7},(T,q)=>kn(n,q)),E=new Date,Y=()=>{let T=n.toISOString().slice(0,10),q=kn(n,6).toISOString().slice(0,10);fetch(`/api/employees/${i.id}/availability?from=${T}&to=${q}`).then(K=>K.json()).then(K=>{u(K.employee.window),d(K.employee.upcoming_windows),w(K.employee.time_slots)})};(0,J.useEffect)(()=>{i&&Y()},[i,n]);let[M,B]=(0,J.useState)(new Date);(0,J.useEffect)(()=>{let T=()=>B(new Date);T();let q=setInterval(T,300*1e3);return()=>clearInterval(q)},[]);let X=(0,J.useRef)(null),[fe,Nn]=(0,J.useState)(0);(0,J.useEffect)(()=>{X.current&&Nn(X.current.getBoundingClientRect().height)},[n,i]);let Ft=M.toISOString().slice(0,10),Ct=M.getHours(),Mt=M.getMinutes(),_n=fe*Ct+fe*Mt/60,qn=["window-a","window-b","window-c","window-d","window-e"],Ir=T=>{let q=Io(T,[s,...p||[]]);if(!q)return"";let K=q.id%qn.length;return qn[K]},re=A.some(T=>T.toISOString().slice(0,10)===Ft);(0,J.useEffect)(()=>{let T=v.current;T&&requestAnimationFrame(()=>{let q=T.scrollHeight-T.clientHeight;T.scrollTop=q/2})},[n,i]);let O=(T,q)=>Xe(Kn(new Date(T),q)),_=(T,q)=>{if(!g||g.day!==T.toISOString().slice(0,10))return!1;let K=Jn(T,q,0),It=Jn(T,q+1,0),Ar=Et(g.start_time),Xt=Et(g.end_time);return Ao(Ar,Xt,K,It)},R=(T,q,K)=>{let It=Et(T.start_time);return It?It.getHours()===K&&T.day===q.toISOString().slice(0,10):!1},V=(T,q)=>{let K=T.toISOString().slice(0,10),It=Jn(T,q,0),Ar=Jn(T,q+1,0);return m.filter(Xt=>{if(Xt.day!==K)return!1;let At=Et(Xt.start_time),Wo=Et(Xt.end_time);return Ao(At,Wo,It,Ar)})};return J.default.createElement("section",{className:"calendar-card"},J.default.createElement(vu,{days:A,weekStart:n,setWeekStart:r,employees:e,currentEmployee:i,setCurrentEmployee:T=>{T?l(T):(l(null),w([]),u(null),x(null),d([]))}}),J.default.createElement("div",{className:"week-calendar"},J.default.createElement("div",{className:"week-header"},J.default.createElement("div",{className:"time-col"}),A.map(T=>{let q=T<E,K=Io(T,[s,...p||[]]);return J.default.createElement("div",{key:T.toISOString(),className:`day-col-header
                          ${T.toDateString()===E.toDateString()?"today":""}
                          ${Ir(T)}
                        `,"data-tooltip":!i||!K?.effective_date?"":`Window
Starting ${K?.effective_date}
Ending ${K?.end_date||"\u221E"}`,onClick:()=>{q||(N(T),C(!0))}},i&&!q&&J.default.createElement("span",{className:"edit-icon"},K?"\u2699\uFE0F":"\u2795"),J.default.createElement("div",null,T.toLocaleDateString("uk-UA",{weekday:"short"})),J.default.createElement("div",null,T.getDate()))}),i&&k&&J.default.createElement(Bo,{open:y,employee:i,window:Io(k,[s,...p||[]]),onClose:()=>{N(null),C(!1)},onSaved:T=>{l(q=>q&&{...q,window:T})}})),J.default.createElement("div",{className:"week-body",ref:v},re&&fe>0&&J.default.createElement("div",{className:"now-line",style:{top:`${_n}px`}},J.default.createElement("div",{className:"now-dot"})),rm.map((T,q)=>J.default.createElement("div",{key:T,className:"week-row",ref:q===0?X:null},J.default.createElement("div",{className:"time-col"},T,":00"),A.map(K=>{let It=V(K,T),Ar=K<Qn(new Date),Xt=om({day:K,hour:T,windows:[s,...p]});return J.default.createElement("div",{key:`${K.toISOString()}-${T}`,className:`week-cell ${Xt?"":Ar?"past":"unavailable"}`,onMouseDown:At=>{if(b(null),!Xt||!i)return;let Wo=At.currentTarget.getBoundingClientRect(),Lu=(At.clientY-Wo.top)/Wo.height>=.5?30:0,cm=Lu+30,Si=Jn(K,T,Lu),Ei=Jn(K,T,cm);for(let Zt of It){let Ci=Et(Zt.start_time),dm=Et(Zt.end_time);if(Ao(Si,Ei,Ci,dm)){c(Zt),a(Zt);return}}if(g){let Zt=Et(g.start_time),Ci=Et(g.end_time);if(g.day===K.toISOString().slice(0,10)&&Ao(Si,Ei,Zt,Ci)){a(g);return}}x({day:K.toISOString().slice(0,10),dayIndex:A.findIndex(Zt=>Zt.toDateString()===K.toDateString()),start_time:Xe(Si),end_time:Xe(Ei),state:"preview",employee_id:i.id,company_id:t})}},It.filter(At=>R(At,K,T)).map(At=>J.default.createElement(ki,{key:At.id,timeSlot:At})),g&&R(g,K,T)&&J.default.createElement(ki,{timeSlot:g}))}))))),o&&J.default.createElement(wu,{slot:o,weekStart:n,previewSlot:g,setPreviewSlot:x,setTimeSlots:w,setEditingSlot:a,editingSlot:o,currentEmployee:i}))}var te=G(Q());(function(){if(!document.getElementById("85680663e3af3af3040ba0baa2d9af434f71b3c84e52d8c7f14a6909fce9151c")){var e=document.createElement("style");e.id="85680663e3af3af3040ba0baa2d9af434f71b3c84e52d8c7f14a6909fce9151c",e.textContent=`.employees-container {
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
`,document.head.appendChild(e)}})();function bu({dashboardData:e}){let[t,n]=(0,te.useState)(e?.employees||[]),[r,o]=(0,te.useState)(!1),[a,i]=(0,te.useState)(null),[l,s]=(0,te.useState)(null),u=()=>{i(null),o(!0)},p=v=>{i(v),o(!0)},d=async v=>{if(window.confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044C\u043E\u0433\u043E \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430?"))try{let g=await fetch(`/api/employees/${v}`,{method:"DELETE",credentials:"include"});if(g.ok)n(t.filter(x=>x.id!==v));else{let x=await g.json();s(x.message||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}}catch{s("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}},m=v=>{n(a?t.map(g=>g.id===v.id?v:g):[...t,v]),o(!1),i(null)},w=()=>{o(!1),i(null)};return te.default.createElement("div",{className:"employees-container"},te.default.createElement("div",{className:"employees-header"},te.default.createElement("h2",null,"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438"),te.default.createElement("button",{className:"btn-primary",onClick:u},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430")),l&&te.default.createElement("div",{className:"error-message"},l),t.length===0?te.default.createElement("div",{className:"empty-state"},te.default.createElement("p",null,"\u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0456\u0432. \u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0448\u043E\u0433\u043E!")):te.default.createElement("div",{className:"employees-table"},te.default.createElement("table",null,te.default.createElement("thead",null,te.default.createElement("tr",null,te.default.createElement("th",null,"\u0406\u043C'\u044F"),te.default.createElement("th",null,"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),te.default.createElement("th",null,"Email"),te.default.createElement("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),te.default.createElement("th",null,"\u0414\u0456\u0457"))),te.default.createElement("tbody",null,t.map(v=>te.default.createElement("tr",{key:v.id},te.default.createElement("td",null,v.first_name),te.default.createElement("td",null,v.last_name),te.default.createElement("td",null,v.email),te.default.createElement("td",null,v.phone||"N/A"),te.default.createElement("td",{className:"actions content-center"},te.default.createElement("button",{className:"btn-edit",onClick:()=>p(v)},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),te.default.createElement("button",{className:"btn-delete",onClick:()=>d(v.id)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"))))))),r&&te.default.createElement("div",{className:"modal-overlay",onClick:w},te.default.createElement("div",{className:"modal-content",onClick:v=>v.stopPropagation()},te.default.createElement(Mr,{role:"employee",employee:a,onSave:m,onCancel:w,isModal:!0}))))}var ee=G(Q());var we=G(Q());function ku({client:e,onSave:t,onCancel:n,isModal:r=!1}){let o=Ie(),[a,i]=(0,we.useState)({first_name:"",last_name:"",email:"",phone:"",password:""}),[l,s]=(0,we.useState)({});(0,we.useEffect)(()=>{e&&i({first_name:e.first_name||"",last_name:e.last_name||"",email:e.email||"",phone:e.phone||"",password:""})},[e]);let u=m=>{i({...a,[m.target.name]:m.target.value}),s(w=>({...w,[m.target.name]:null}))},p=async m=>{m.preventDefault();let w={client:{first_name:a.first_name,last_name:a.last_name,email:a.email,phone:a.phone}};a.password&&(w.client.password=a.password);let v=e?`/api/clients/${e.id}`:"/api/clients",x=await fetch(v,{method:e?"PUT":"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)});if(x.ok){let f=await x.json();r&&t?t(f):o("/companies/welcome")}else{let f=await x.json();s(f.errors||{})}},d=m=>l[m]?.message;return we.default.createElement("div",{className:r?"client-form-modal":"client-form container"},we.default.createElement("h1",null,e?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430"),we.default.createElement("form",{onSubmit:p},d("first_name")&&we.default.createElement("div",{className:"field-error"},d("first_name")),we.default.createElement("input",{name:"first_name",value:a.first_name,onChange:u,placeholder:"\u0406\u043C\u02BC\u044F"}),d("last_name")&&we.default.createElement("div",{className:"field-error"},d("last_name")),we.default.createElement("input",{name:"last_name",value:a.last_name,onChange:u,placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),d("email")&&we.default.createElement("div",{className:"field-error"},d("email")),we.default.createElement("input",{name:"email",type:"email",value:a.email,onChange:u,placeholder:"Email"}),d("phone")&&we.default.createElement("div",{className:"field-error"},d("phone")),we.default.createElement("input",{name:"phone",value:a.phone,onChange:u,placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),d("password")&&we.default.createElement("div",{className:"field-error"},d("password")),we.default.createElement("input",{name:"password",type:"password",value:a.password,onChange:u,placeholder:e?"\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u0437\u0430\u043B\u0438\u0448\u0442\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u043C, \u0449\u043E\u0431 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438)":"\u041F\u0430\u0440\u043E\u043B\u044C",required:!e}),we.default.createElement("div",{className:"form-actions"},r&&n&&we.default.createElement("button",{type:"button",onClick:n},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),we.default.createElement("button",{type:"submit"},e?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"))))}(function(){if(!document.getElementById("74b753de80d78e38957b9d8c852f845b8349949efb4a62e8a40b3415643a93b6")){var e=document.createElement("style");e.id="74b753de80d78e38957b9d8c852f845b8349949efb4a62e8a40b3415643a93b6",e.textContent=`.clients-container {
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
`,document.head.appendChild(e)}})();function Su({dashboardData:e}){let[t,n]=(0,ee.useState)([]),[r,o]=(0,ee.useState)(!1),[a,i]=(0,ee.useState)(null),[l,s]=(0,ee.useState)(null),u=async()=>{try{let g=await fetch("/api/clients",{credentials:"include"});if(g.ok){let x=await g.json();n(x.clients)}else s("Failed to fetch clients")}catch{s("Failed to fetch clients")}};(0,ee.useEffect)(()=>{(async()=>{try{let x=await fetch("/api/clients",{credentials:"include"});if(x.ok){let f=await x.json();n(f.clients||f)}else s("Failed to fetch clients")}catch{s("Failed to fetch clients")}})()},[]);let p=()=>{i(null),o(!0)},d=g=>{i(g),o(!0)},m=async g=>{if(window.confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044C\u043E\u0433\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430?"))try{let x=await fetch(`/api/clients/${g}`,{method:"DELETE",credentials:"include"});if(x.ok)n(t.filter(f=>f.id!==g));else{let f=await x.json();s(f.message||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}}catch{s("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}},w=g=>{n(a?t.map(x=>x.id===g.id?g:x):[...t,g]),o(!1),i(null)},v=()=>{o(!1),i(null)};return ee.default.createElement("div",{className:"clients-container"},ee.default.createElement("div",{className:"clients-header"},ee.default.createElement("h2",null,"\u041A\u043B\u0456\u0454\u043D\u0442\u0438"),ee.default.createElement("button",{className:"btn-primary",onClick:p},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430")),l&&ee.default.createElement("div",{className:"error-message"},l),t.length===0?ee.default.createElement("div",{className:"empty-state"},ee.default.createElement("p",null,"\u041D\u0435\u043C\u0430\u0454 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432. \u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0448\u043E\u0433\u043E!")):ee.default.createElement("div",{className:"clients-table"},ee.default.createElement("table",null,ee.default.createElement("thead",null,ee.default.createElement("tr",null,ee.default.createElement("th",null,"\u0406\u043C'\u044F"),ee.default.createElement("th",null,"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),ee.default.createElement("th",null,"Email"),ee.default.createElement("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),ee.default.createElement("th",null,"\u0414\u0456\u0457"))),ee.default.createElement("tbody",null,t.map(g=>ee.default.createElement("tr",{key:g.id},ee.default.createElement("td",null,g.first_name),ee.default.createElement("td",null,g.last_name),ee.default.createElement("td",null,g.email),ee.default.createElement("td",null,g.phone||"N/A"),ee.default.createElement("td",{className:"actions content-center"},ee.default.createElement("button",{className:"btn-edit",onClick:()=>d(g)},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),ee.default.createElement("button",{className:"btn-delete",onClick:()=>m(g.id)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"))))))),r&&ee.default.createElement("div",{className:"modal-overlay",onClick:v},ee.default.createElement("div",{className:"modal-content",onClick:g=>g.stopPropagation()},ee.default.createElement(ku,{client:a,onSave:w,onCancel:v,isModal:!0}))))}var I=G(Q());(function(){if(!document.getElementById("b2621e4b4297e219f58b94b6e9677304c32a37f7c15d475d684fbd158706d5d7")){var e=document.createElement("style");e.id="b2621e4b4297e219f58b94b6e9677304c32a37f7c15d475d684fbd158706d5d7",e.textContent=`.company-container {
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
`,document.head.appendChild(e)}})();function Eu({dashboardData:e,fetchData:t}){let[n,r]=(0,I.useState)(e?.company||null),[o,a]=(0,I.useState)(!1),[i,l]=(0,I.useState)(null),[s,u]=(0,I.useState)(null),[p,d]=(0,I.useState)(null),{id:m}=Yn(),w=Ie(),v=We(),g=()=>{a(!0),fetch(`/api/companies/${m}/dashboard`).then(c=>c.status===401?(w("/companies/welcome"),null):c.json()).then(c=>{c&&(d(c),r(c.company))}).catch(()=>{l("Failed to fetch dashboard data")})},x=c=>{r(c),a(!1),u("\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E"),setTimeout(()=>u(null),3e3)},f=()=>{a(!1)};return n?I.default.createElement("div",{className:"company-container"},I.default.createElement("div",{className:"company-header"},I.default.createElement("h2",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),I.default.createElement("button",{className:"btn-primary",onClick:g},"\u270F\uFE0F \u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438")),i&&I.default.createElement("div",{className:"error-message"},i),s&&I.default.createElement("div",{className:"success-message"},s),I.default.createElement("div",{className:"company-details"},I.default.createElement("section",{className:"company-section"},I.default.createElement("h3",null,"\u041E\u0441\u043D\u043E\u0432\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"),I.default.createElement("div",{className:"detail-grid"},I.default.createElement("div",{className:"detail-item"},I.default.createElement("label",null,"\u041D\u0430\u0437\u0432\u0430:"),I.default.createElement("span",null,n.name)),I.default.createElement("div",{className:"detail-item"},I.default.createElement("label",null,"Email:"),I.default.createElement("span",null,n.email||"N/A")),I.default.createElement("div",{className:"detail-item"},I.default.createElement("label",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"),I.default.createElement("span",null,n.phone||"N/A")),I.default.createElement("div",{className:"detail-item"},I.default.createElement("label",null,"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442:"),I.default.createElement("span",null,n.website?I.default.createElement("a",{href:n.website,target:"_blank",rel:"noopener noreferrer"},n.website):"N/A")),I.default.createElement("div",{className:"detail-item full-width"},I.default.createElement("label",null,"\u041E\u043F\u0438\u0441:"),I.default.createElement("span",null,n.description||"N/A")))),n.address&&I.default.createElement("section",{className:"company-section"},I.default.createElement("h3",null,"\u0410\u0434\u0440\u0435\u0441\u0430"),I.default.createElement("div",{className:"detail-grid"},I.default.createElement("div",{className:"detail-item"},I.default.createElement("label",null,"\u0412\u0443\u043B\u0438\u0446\u044F 1:"),I.default.createElement("span",null,n.address.street_line1||"N/A")),I.default.createElement("div",{className:"detail-item"},I.default.createElement("label",null,"\u0412\u0443\u043B\u0438\u0446\u044F 2:"),I.default.createElement("span",null,n.address.street_line2||"N/A")),I.default.createElement("div",{className:"detail-item"},I.default.createElement("label",null,"\u041C\u0456\u0441\u0442\u043E:"),I.default.createElement("span",null,n.address.city||"N/A")),I.default.createElement("div",{className:"detail-item"},I.default.createElement("label",null,"\u041E\u0431\u043B\u0430\u0441\u0442\u044C:"),I.default.createElement("span",null,n.address.region||"N/A")),I.default.createElement("div",{className:"detail-item"},I.default.createElement("label",null,"\u041F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441:"),I.default.createElement("span",null,n.address.postal||"N/A")),I.default.createElement("div",{className:"detail-item"},I.default.createElement("label",null,"\u041A\u0440\u0430\u0457\u043D\u0430:"),I.default.createElement("span",null,n.address.country||"N/A"))))),o&&I.default.createElement("div",{className:"modal-overlay",onClick:f},I.default.createElement("div",{className:"modal-content",onClick:c=>c.stopPropagation()},I.default.createElement(jo,{company:n,onSave:x,onCancel:f,isModal:!0})))):I.default.createElement("div",{className:"company-container"},I.default.createElement("div",{className:"empty-state"},I.default.createElement("p",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430")))}var im=G(Q());function Cu({dashboardData:e}){return im.default.createElement("div",null,"Settings")}(function(){if(!document.getElementById("6a6155881ee733b2fee22719c3362487d8f0b92f87b75b4e1bdd6886dcc8063c")){var e=document.createElement("style");e.id="6a6155881ee733b2fee22719c3362487d8f0b92f87b75b4e1bdd6886dcc8063c",e.textContent=`.dashboard {
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
`,document.head.appendChild(e)}})();function Xn(){let[e,t]=(0,Ae.useState)(),{id:n}=Yn(),r=Ie(),o=We();if((0,Ae.useEffect)(()=>{fetch(`/api/companies/${n}/dashboard`).then(i=>i.status===401?(r("/companies/welcome"),null):i.json()).then(i=>{i&&t(i)}).catch(()=>{r("/companies/welcome")})},[n,r]),e===void 0)return Ae.default.createElement("p",null,"Loading...");let a=()=>{let i=o.pathname;return i.includes("/employees")?Ae.default.createElement(bu,{dashboardData:e}):i.includes("/clients")?Ae.default.createElement(Su,{dashboardData:e}):i.includes("/edit")?Ae.default.createElement(Eu,{dashboardData:e}):i.includes("/settings")?Ae.default.createElement(Cu,{dashboardData:e}):Ae.default.createElement(xu,{employees:e.employees,companyId:n})};return Ae.default.createElement("div",{className:"dashboard"},Ae.default.createElement(hu,{companyName:e.company.name,id:n}),Ae.default.createElement("div",{className:"dashboard__content"},Ae.default.createElement(gu,{userName:e.user.first_name}),Ae.default.createElement("main",{className:"dashboard__main content-center"},a())))}var Zn=G(Q());function Nu(){return Zn.default.createElement("div",{class:"container"},Zn.default.createElement("p",{class:"t-a-center"},"\u0412\u0436\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442?"),Zn.default.createElement(Uo,null),Zn.default.createElement("div",{className:"t-a-center"},Zn.default.createElement("p",null,"\u0429\u0435 \u043D\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443?"),Zn.default.createElement(Mo,{to:"/companies/admins/new"},"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F")))}(function(){if(!document.getElementById("4be33d924d68f9738d162f2f6f9320fedbb0eccc00bfe3258cc9e5da3fda847b")){var e=document.createElement("style");e.id="4be33d924d68f9738d162f2f6f9320fedbb0eccc00bfe3258cc9e5da3fda847b",e.textContent="",document.head.appendChild(e)}})();function _u(){return se.default.createElement("div",null,se.default.createElement(Oo,null,se.default.createElement(Se,{path:"/",redirectTo:"welcome"}),se.default.createElement(Se,{path:"welcome",element:se.default.createElement(Nu,null)}),se.default.createElement(Se,{path:"new",element:se.default.createElement(jo,null)}),se.default.createElement(Se,{path:"employees/new",element:se.default.createElement(Mr,{role:"employee"})}),se.default.createElement(Se,{path:"admins/new",element:se.default.createElement(Mr,{role:"admin"})}),se.default.createElement(Se,{path:"login",element:se.default.createElement(Uo,null)}),se.default.createElement(Se,{path:":id/dashboard",element:se.default.createElement(Xn,null)}),se.default.createElement(Se,{path:":id/employees",element:se.default.createElement(Xn,null)}),se.default.createElement(Se,{path:":id/clients",element:se.default.createElement(Xn,null)}),se.default.createElement(Se,{path:":id/edit",element:se.default.createElement(Xn,null)}),se.default.createElement(Se,{path:":id/settings",element:se.default.createElement(Xn,null)}),se.default.createElement(Se,{path:"*",element:se.default.createElement(mu,null)})))}var S=G(Q());(function(){if(!document.getElementById("29801b744b15f53d7da10ff61f3e1caa467838a727ad6d331d9be5faacdc078b")){var e=document.createElement("style");e.id="29801b744b15f53d7da10ff61f3e1caa467838a727ad6d331d9be5faacdc078b",e.textContent=`/* ============================================
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 100px 20px 140px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden; /* Keep this for background pattern */
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
  pointer-events: none;
}

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
  padding: 18px 36px;
  background: #667eea;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  max-height: 70px;
}

.search-button:hover {
  background: #5568d3;
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
  padding: 12px 16px;
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

.quick-link:hover {
  background: #667eea;
  color: white;
  border-color: #667eea;
  transform: translateY(-2px);
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
  border-color: #667eea;
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
`,document.head.appendChild(e)}})();function Pu(){let e=Ie(),[t,n]=(0,S.useState)(""),[r,o]=(0,S.useState)(""),[a,i]=(0,S.useState)([]),[l,s]=(0,S.useState)([]),[u,p]=(0,S.useState)(!1),[d,m]=(0,S.useState)(!1),[w,v]=(0,S.useState)(""),[g,x]=(0,S.useState)(!1),f=(0,S.useRef)(null),c=xi.filter(E=>E.toLowerCase().includes(w.toLowerCase()));(0,S.useEffect)(()=>{let E=Y=>{f.current&&!f.current.contains(Y.target)&&m(!1),Y.target.closest(".category-search-container")||x(!1)};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[]);let h=E=>{a.includes(E)||(i([...a,E]),v(""),x(!1))},b=E=>{i(a.filter(Y=>Y!==E))},y=async E=>{if(E&&E.preventDefault(),!(!t&&a.length===0&&!r)){p(!0),m(!0);try{let Y=new URLSearchParams;t&&Y.append("params[name]",t),r&&Y.append("params[city]",r),a.forEach(B=>{Y.append("params[categories][]",B)});let M=await fetch(`/api/companies?${Y.toString()}`,{credentials:"include"});if(M.ok){let B=await M.json();s(Array.isArray(B)?B:[])}else s([])}catch(Y){console.error("Search error:",Y),s([])}finally{p(!1)}}},C=E=>{let Y=E.name.toLowerCase().replace(/\s+/g,"-");e(`/w/${Y}`)},k=E=>{o(E),n(""),i([]),setTimeout(()=>{A({city:E})},0)},N=E=>{a.includes(E)||(i([E]),n(""),o(""),setTimeout(()=>{A({categories:[E]})},0))},A=async({city:E,categories:Y})=>{p(!0),m(!0);try{let M=new URLSearchParams;E&&M.append("params[city]",E),Y&&Y.length>0&&Y.forEach(X=>{M.append("params[categories][]",X)});let B=await fetch(`/api/companies?${M.toString()}`,{credentials:"include"});if(B.ok){let X=await B.json();s(Array.isArray(X)?X:[])}else s([])}catch(M){console.error("Search error:",M),s([])}finally{p(!1)}};return S.default.createElement("div",{className:"welcome-page"},S.default.createElement("section",{className:"hero-section"},S.default.createElement("div",{className:"hero-content"},S.default.createElement("h1",null,"\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438 \u0443 \u0432\u0430\u0448\u043E\u043C\u0443 \u043C\u0456\u0441\u0442\u0456"),S.default.createElement("p",null,"\u0421\u0430\u043B\u043E\u043D\u0438 \u043A\u0440\u0430\u0441\u0438, \u0421\u041F\u0410, \u0444\u0456\u0442\u043D\u0435\u0441, \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F \u0442\u0430 \u0431\u0430\u0433\u0430\u0442\u043E \u0456\u043D\u0448\u043E\u0433\u043E"),S.default.createElement("form",{className:"search-form",onSubmit:y},S.default.createElement("div",{className:"search-inputs"},S.default.createElement("div",{className:"search-field"},S.default.createElement("input",{type:"text",placeholder:"\u041D\u0430\u0437\u0432\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0430\u0431\u043E \u043F\u043E\u0441\u043B\u0443\u0433\u0438",value:t,onChange:E=>n(E.target.value),className:"search-input"})),S.default.createElement("div",{className:"search-field category-search-container"},S.default.createElement("div",{className:"category-search-wrapper"},a.length>0&&S.default.createElement("div",{className:"selected-categories-tags-mini"},a.map(E=>S.default.createElement("span",{key:E,className:"category-tag-mini"},E,S.default.createElement("button",{type:"button",className:"category-tag-remove",onClick:Y=>{Y.stopPropagation(),b(E)},"aria-label":"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E"},"\u2715")))),S.default.createElement("input",{type:"text",className:"category-search-input",placeholder:a.length>0?"\u0414\u043E\u0434\u0430\u0442\u0438 \u0449\u0435...":"\u0428\u0443\u043A\u0430\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457...",value:w,onChange:E=>{v(E.target.value),x(!0)},onFocus:()=>x(!0)}),g&&w&&S.default.createElement("div",{className:"category-dropdown"},c.length>0?c.slice(0,50).map(E=>S.default.createElement("div",{key:E,className:`category-dropdown-item ${a.includes(E)?"selected":""}`,onClick:()=>h(E)},E,a.includes(E)&&S.default.createElement("span",{className:"checkmark"},"\u2713"))):S.default.createElement("div",{className:"category-dropdown-empty"},"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E")))),S.default.createElement("div",{className:"search-field"},S.default.createElement("select",{value:r,onChange:E=>o(E.target.value),className:"search-select"},S.default.createElement("option",{value:""},"\u0412\u0441\u0456 \u043C\u0456\u0441\u0442\u0430"),bi.map(E=>S.default.createElement("option",{key:E,value:E},E)))),S.default.createElement("button",{type:"submit",className:"search-button"},S.default.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},S.default.createElement("path",{d:"M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),"\u0428\u0443\u043A\u0430\u0442\u0438"))),d&&S.default.createElement("div",{className:"search-results-dropdown",ref:f},u?S.default.createElement("div",{className:"results-loading"},S.default.createElement("div",{className:"spinner"}),S.default.createElement("p",null,"\u041F\u043E\u0448\u0443\u043A...")):l.length>0?S.default.createElement("div",{className:"results-list"},l.map(E=>S.default.createElement("div",{key:E.id,className:"result-item",onClick:()=>C(E)},S.default.createElement("div",{className:"result-info"},S.default.createElement("h4",null,E.name),S.default.createElement("p",{className:"result-category"},E.categories?.[0]?.name||E.description?.substring(0,60)),S.default.createElement("p",{className:"result-location"},"\u{1F4CD} ",E.address?.city,E.address?.street_line1&&`, ${E.address.street_line1}`)),E.rating&&S.default.createElement("div",{className:"result-rating"},"\u2B50 ",E.rating)))):S.default.createElement("div",{className:"results-empty"},S.default.createElement("p",null,"\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"),S.default.createElement("span",null,"\u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u043A\u0440\u0438\u0442\u0435\u0440\u0456\u0457 \u043F\u043E\u0448\u0443\u043A\u0443"))))),S.default.createElement("section",{className:"quick-links-section"},S.default.createElement("h2",null,"\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456 \u043C\u0456\u0441\u0442\u0430"),S.default.createElement("div",{className:"quick-links"},S.default.createElement("button",{className:"quick-link",onClick:()=>k("\u041A\u0438\u0457\u0432")},"\u041A\u0438\u0457\u0432"),S.default.createElement("button",{className:"quick-link",onClick:()=>k("\u041B\u044C\u0432\u0456\u0432")},"\u041B\u044C\u0432\u0456\u0432"),S.default.createElement("button",{className:"quick-link",onClick:()=>k("\u041E\u0434\u0435\u0441\u0430")},"\u041E\u0434\u0435\u0441\u0430"),S.default.createElement("button",{className:"quick-link",onClick:()=>k("\u0425\u0430\u0440\u043A\u0456\u0432")},"\u0425\u0430\u0440\u043A\u0456\u0432"),S.default.createElement("button",{className:"quick-link",onClick:()=>k("\u0414\u043D\u0456\u043F\u0440\u043E")},"\u0414\u043D\u0456\u043F\u0440\u043E"),S.default.createElement("button",{className:"quick-link",onClick:()=>k("\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F")},"\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F"))),S.default.createElement("section",{className:"categories-section"},S.default.createElement("h2",null,"\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"),S.default.createElement("div",{className:"category-cards"},S.default.createElement("div",{className:"category-card",onClick:()=>N("\u041F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F")},S.default.createElement("div",{className:"category-icon"},"\u{1F487}"),S.default.createElement("h3",null,"\u041F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F"),S.default.createElement("p",null,"\u0421\u0442\u0440\u0438\u0436\u043A\u0438, \u0443\u043A\u043B\u0430\u0434\u043A\u0438, \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F")),S.default.createElement("div",{className:"category-card",onClick:()=>N("\u041C\u0430\u043D\u0456\u043A\u044E\u0440")},S.default.createElement("div",{className:"category-icon"},"\u{1F485}"),S.default.createElement("h3",null,"\u041C\u0430\u043D\u0456\u043A\u044E\u0440"),S.default.createElement("p",null,"\u041C\u0430\u043D\u0456\u043A\u044E\u0440, \u043F\u0435\u0434\u0438\u043A\u044E\u0440, \u043D\u0430\u0440\u043E\u0449\u0443\u0432\u0430\u043D\u043D\u044F")),S.default.createElement("div",{className:"category-card",onClick:()=>N("\u0421\u041F\u0410")},S.default.createElement("div",{className:"category-icon"},"\u{1F9D6}"),S.default.createElement("h3",null,"\u0421\u041F\u0410"),S.default.createElement("p",null,"\u041C\u0430\u0441\u0430\u0436, \u0440\u0435\u043B\u0430\u043A\u0441, \u0434\u043E\u0433\u043B\u044F\u0434")),S.default.createElement("div",{className:"category-card",onClick:()=>N("\u0424\u0456\u0442\u043D\u0435\u0441")},S.default.createElement("div",{className:"category-icon"},"\u{1F4AA}"),S.default.createElement("h3",null,"\u0424\u0456\u0442\u043D\u0435\u0441"),S.default.createElement("p",null,"\u0422\u0440\u0435\u043D\u0430\u0436\u0435\u0440\u043D\u0430 \u0437\u0430\u043B\u0430, \u0439\u043E\u0433\u0430, \u043F\u0456\u043B\u0430\u0442\u0435\u0441")),S.default.createElement("div",{className:"category-card",onClick:()=>N("\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F")},S.default.createElement("div",{className:"category-icon"},"\u{1F9B7}"),S.default.createElement("h3",null,"\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F"),S.default.createElement("p",null,"\u041B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F, \u043F\u0440\u043E\u0442\u0435\u0437\u0443\u0432\u0430\u043D\u043D\u044F, \u0432\u0456\u0434\u0431\u0456\u043B\u044E\u0432\u0430\u043D\u043D\u044F")),S.default.createElement("div",{className:"category-card",onClick:()=>N("\u041A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F")},S.default.createElement("div",{className:"category-icon"},"\u2728"),S.default.createElement("h3",null,"\u041A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F"),S.default.createElement("p",null,"\u0427\u0438\u0441\u0442\u043A\u0430, \u043F\u0456\u043B\u0456\u043D\u0433, \u0456\u043D'\u0454\u043A\u0446\u0456\u0457 \u043A\u0440\u0430\u0441\u0438")),S.default.createElement("div",{className:"category-card",onClick:()=>N("\u041C\u0430\u0441\u0430\u0436")},S.default.createElement("div",{className:"category-icon"},"\u{1F486}"),S.default.createElement("h3",null,"\u041C\u0430\u0441\u0430\u0436"),S.default.createElement("p",null,"\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439, \u0442\u0430\u0439\u0441\u044C\u043A\u0438\u0439, \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0438\u0439")),S.default.createElement("div",{className:"category-card",onClick:()=>N("\u0422\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F")},S.default.createElement("div",{className:"category-icon"},"\u{1F3A8}"),S.default.createElement("h3",null,"\u0422\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F"),S.default.createElement("p",null,"\u0422\u0430\u0442\u0443, \u043F\u0456\u0440\u0441\u0438\u043D\u0433, \u0445\u0443\u0434\u043E\u0436\u043D\u0454 \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u043D\u043D\u044F")))),S.default.createElement("section",{className:"how-it-works"},S.default.createElement("h2",null,"\u042F\u043A \u0446\u0435 \u043F\u0440\u0430\u0446\u044E\u0454"),S.default.createElement("div",{className:"steps"},S.default.createElement("div",{className:"step"},S.default.createElement("div",{className:"step-number"},"1"),S.default.createElement("h3",null,"\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u043F\u043E\u0441\u043B\u0443\u0433\u0443"),S.default.createElement("p",null,"\u0421\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0439\u0442\u0435\u0441\u044F \u043F\u043E\u0448\u0443\u043A\u043E\u043C \u0430\u0431\u043E \u043E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E")),S.default.createElement("div",{className:"step"},S.default.createElement("div",{className:"step-number"},"2"),S.default.createElement("h3",null,"\u041F\u043E\u0440\u0456\u0432\u043D\u044F\u0439\u0442\u0435 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457"),S.default.createElement("p",null,"\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u0439\u0442\u0435 \u0432\u0456\u0434\u0433\u0443\u043A\u0438 \u0442\u0430 \u0446\u0456\u043D\u0438")),S.default.createElement("div",{className:"step"},S.default.createElement("div",{className:"step-number"},"3"),S.default.createElement("h3",null,"\u0417\u0430\u0431\u0440\u043E\u043D\u044E\u0439\u0442\u0435 \u0447\u0430\u0441"),S.default.createElement("p",null,"\u041E\u043D\u043B\u0430\u0439\u043D \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0437\u0430 \u043A\u0456\u043B\u044C\u043A\u0430 \u043A\u043B\u0456\u043A\u0456\u0432")))))}var iy=()=>mt.default.createElement("h2",null,"404 Not Found");function lm(){return mt.default.createElement(uu,null,mt.default.createElement(Oo,null,mt.default.createElement(Se,{path:"/",element:mt.default.createElement(Pu,null)}),mt.default.createElement(Se,{path:"/companies/*",element:mt.default.createElement(_u,null)}),mt.default.createElement(Se,{path:"/w/:companyName",element:mt.default.createElement(fu,null)}),mt.default.createElement(Se,{path:"*",element:mt.default.createElement(iy,null)})))}document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("App");e?(0,um.createRoot)(e).render(sm.default.createElement(lm,null)):console.error('React root element "#App" not found in DOM.')});
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

react-router/dist/development/chunk-LFPYN7LY.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.13.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
