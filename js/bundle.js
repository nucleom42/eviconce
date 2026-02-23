var sm=Object.create;var Cu=Object.defineProperty;var um=Object.getOwnPropertyDescriptor;var cm=Object.getOwnPropertyNames;var dm=Object.getPrototypeOf,fm=Object.prototype.hasOwnProperty;var Cn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var pm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of cm(t))!fm.call(e,o)&&o!==n&&Cu(e,o,{get:()=>t[o],enumerable:!(r=um(t,o))||r.enumerable});return e};var B=(e,t,n)=>(n=e!=null?sm(dm(e)):{},pm(t||!e||!e.__esModule?Cu(n,"default",{value:e,enumerable:!0}):n,e));var Iu=Cn(Q=>{"use strict";var zr=Symbol.for("react.element"),mm=Symbol.for("react.portal"),hm=Symbol.for("react.fragment"),gm=Symbol.for("react.strict_mode"),vm=Symbol.for("react.profiler"),ym=Symbol.for("react.provider"),wm=Symbol.for("react.context"),xm=Symbol.for("react.forward_ref"),bm=Symbol.for("react.suspense"),Sm=Symbol.for("react.memo"),Em=Symbol.for("react.lazy"),_u=Symbol.iterator;function km(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var Ru={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lu=Object.assign,Du={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=Du,this.updater=n||Ru}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tu(){}Tu.prototype=Xn.prototype;function ki(e,t,n){this.props=e,this.context=t,this.refs=Du,this.updater=n||Ru}var Ci=ki.prototype=new Tu;Ci.constructor=ki;Lu(Ci,Xn.prototype);Ci.isPureReactComponent=!0;var Nu=Array.isArray,Ou=Object.prototype.hasOwnProperty,_i={current:null},Fu={key:!0,ref:!0,__self:!0,__source:!0};function zu(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Ou.call(t,r)&&!Fu.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:zr,type:e,key:a,ref:i,props:o,_owner:_i.current}}function Cm(e,t){return{$$typeof:zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ni(e){return typeof e=="object"&&e!==null&&e.$$typeof===zr}function _m(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pu=/\/+/g;function Ei(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_m(""+e.key):t.toString(36)}function Bo(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case zr:case mm:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Ei(i,0):r,Nu(o)?(n="",e!=null&&(n=e.replace(Pu,"$&/")+"/"),Bo(o,t,n,"",function(u){return u})):o!=null&&(Ni(o)&&(o=Cm(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Pu,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Nu(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Ei(a,l);i+=Bo(a,t,n,s,o)}else if(s=km(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Ei(a,l++),i+=Bo(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ho(e,t,n){if(e==null)return e;var r=[],o=0;return Bo(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Nm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Wo={transition:null},Pm={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:_i};function Mu(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Ho,forEach:function(e,t,n){Ho(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ho(e,function(){t++}),t},toArray:function(e){return Ho(e,function(t){return t})||[]},only:function(e){if(!Ni(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Xn;Q.Fragment=hm;Q.Profiler=vm;Q.PureComponent=ki;Q.StrictMode=gm;Q.Suspense=bm;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pm;Q.act=Mu;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lu({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=_i.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Ou.call(t,s)&&!Fu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:zr,type:e.type,key:o,ref:a,props:r,_owner:i}};Q.createContext=function(e){return e={$$typeof:wm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ym,_context:e},e.Consumer=e};Q.createElement=zu;Q.createFactory=function(e){var t=zu.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:xm,render:e}};Q.isValidElement=Ni;Q.lazy=function(e){return{$$typeof:Em,_payload:{_status:-1,_result:e},_init:Nm}};Q.memo=function(e,t){return{$$typeof:Sm,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Wo.transition;Wo.transition={};try{e()}finally{Wo.transition=t}};Q.unstable_act=Mu;Q.useCallback=function(e,t){return Fe.current.useCallback(e,t)};Q.useContext=function(e){return Fe.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Fe.current.useEffect(e,t)};Q.useId=function(){return Fe.current.useId()};Q.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Fe.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};Q.useRef=function(e){return Fe.current.useRef(e)};Q.useState=function(e){return Fe.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Fe.current.useTransition()};Q.version="18.3.1"});var H=Cn((ay,ju)=>{"use strict";ju.exports=Iu()});var Ku=Cn(te=>{"use strict";function Di(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Vo(o,t))e[r]=t,e[n]=o,n=r;else break e}}function dt(e){return e.length===0?null:e[0]}function Qo(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var i=2*(r+1)-1,l=e[i],s=i+1,u=e[s];if(0>Vo(l,n))s<o&&0>Vo(u,l)?(e[r]=u,e[s]=n,r=s):(e[r]=l,e[i]=n,r=i);else if(s<o&&0>Vo(u,n))e[r]=u,e[s]=n,r=s;else break e}}return t}function Vo(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Au=performance,te.unstable_now=function(){return Au.now()}):(Pi=Date,$u=Pi.now(),te.unstable_now=function(){return Pi.now()-$u});var Au,Pi,$u,St=[],Gt=[],Rm=1,tt=null,Pe=3,Ko=!1,_n=!1,Ir=!1,Bu=typeof setTimeout=="function"?setTimeout:null,Wu=typeof clearTimeout=="function"?clearTimeout:null,Uu=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ti(e){for(var t=dt(Gt);t!==null;){if(t.callback===null)Qo(Gt);else if(t.startTime<=e)Qo(Gt),t.sortIndex=t.expirationTime,Di(St,t);else break;t=dt(Gt)}}function Oi(e){if(Ir=!1,Ti(e),!_n)if(dt(St)!==null)_n=!0,zi(Fi);else{var t=dt(Gt);t!==null&&Mi(Oi,t.startTime-e)}}function Fi(e,t){_n=!1,Ir&&(Ir=!1,Wu(jr),jr=-1),Ko=!0;var n=Pe;try{for(Ti(t),tt=dt(St);tt!==null&&(!(tt.expirationTime>t)||e&&!Qu());){var r=tt.callback;if(typeof r=="function"){tt.callback=null,Pe=tt.priorityLevel;var o=r(tt.expirationTime<=t);t=te.unstable_now(),typeof o=="function"?tt.callback=o:tt===dt(St)&&Qo(St),Ti(t)}else Qo(St);tt=dt(St)}if(tt!==null)var a=!0;else{var i=dt(Gt);i!==null&&Mi(Oi,i.startTime-t),a=!1}return a}finally{tt=null,Pe=n,Ko=!1}}var Jo=!1,Yo=null,jr=-1,Vu=5,Yu=-1;function Qu(){return!(te.unstable_now()-Yu<Vu)}function Ri(){if(Yo!==null){var e=te.unstable_now();Yu=e;var t=!0;try{t=Yo(!0,e)}finally{t?Mr():(Jo=!1,Yo=null)}}else Jo=!1}var Mr;typeof Uu=="function"?Mr=function(){Uu(Ri)}:typeof MessageChannel<"u"?(Li=new MessageChannel,Hu=Li.port2,Li.port1.onmessage=Ri,Mr=function(){Hu.postMessage(null)}):Mr=function(){Bu(Ri,0)};var Li,Hu;function zi(e){Yo=e,Jo||(Jo=!0,Mr())}function Mi(e,t){jr=Bu(function(){e(te.unstable_now())},t)}te.unstable_IdlePriority=5;te.unstable_ImmediatePriority=1;te.unstable_LowPriority=4;te.unstable_NormalPriority=3;te.unstable_Profiling=null;te.unstable_UserBlockingPriority=2;te.unstable_cancelCallback=function(e){e.callback=null};te.unstable_continueExecution=function(){_n||Ko||(_n=!0,zi(Fi))};te.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Vu=0<e?Math.floor(1e3/e):5};te.unstable_getCurrentPriorityLevel=function(){return Pe};te.unstable_getFirstCallbackNode=function(){return dt(St)};te.unstable_next=function(e){switch(Pe){case 1:case 2:case 3:var t=3;break;default:t=Pe}var n=Pe;Pe=t;try{return e()}finally{Pe=n}};te.unstable_pauseExecution=function(){};te.unstable_requestPaint=function(){};te.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Pe;Pe=e;try{return t()}finally{Pe=n}};te.unstable_scheduleCallback=function(e,t,n){var r=te.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:Rm++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Di(Gt,e),dt(St)===null&&e===dt(Gt)&&(Ir?(Wu(jr),jr=-1):Ir=!0,Mi(Oi,n-r))):(e.sortIndex=o,Di(St,e),_n||Ko||(_n=!0,zi(Fi))),e};te.unstable_shouldYield=Qu;te.unstable_wrapCallback=function(e){var t=Pe;return function(){var n=Pe;Pe=t;try{return e.apply(this,arguments)}finally{Pe=n}}}});var Gu=Cn((ly,Ju)=>{"use strict";Ju.exports=Ku()});var tp=Cn(Xe=>{"use strict";var Lm=H(),Je=Gu();function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rd=new Set,io={};function An(e,t){yr(e,t),yr(e+"Capture",t)}function yr(e,t){for(io[e]=t,e=0;e<t.length;e++)rd.add(t[e])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),al=Object.prototype.hasOwnProperty,Dm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xu={},Zu={};function Tm(e){return al.call(Zu,e)?!0:al.call(Xu,e)?!1:Dm.test(e)?Zu[e]=!0:(Xu[e]=!0,!1)}function Om(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fm(e,t,n,r){if(t===null||typeof t>"u"||Om(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xl=/[\-:]([a-z])/g;function Zl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xl,Zl);Ne[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xl,Zl);Ne[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xl,Zl);Ne[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function ql(e,t,n,r){var o=Ne.hasOwnProperty(t)?Ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fm(t,n,o,r)&&(n=null),r||o===null?Tm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=Lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Go=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),es=Symbol.for("react.strict_mode"),il=Symbol.for("react.profiler"),od=Symbol.for("react.provider"),ad=Symbol.for("react.context"),ts=Symbol.for("react.forward_ref"),ll=Symbol.for("react.suspense"),sl=Symbol.for("react.suspense_list"),ns=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),id=Symbol.for("react.offscreen"),qu=Symbol.iterator;function Ar(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,Ii;function Qr(e){if(Ii===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ii=t&&t[1]||""}return`
`+Ii+e}var ji=!1;function Ai(e,t){if(!e||ji)return"";ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==a[l]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qr(e):""}function zm(e){switch(e.tag){case 5:return Qr(e.type);case 16:return Qr("Lazy");case 13:return Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 2:case 15:return e=Ai(e.type,!1),e;case 11:return e=Ai(e.type.render,!1),e;case 1:return e=Ai(e.type,!0),e;default:return""}}function ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case il:return"Profiler";case es:return"StrictMode";case ll:return"Suspense";case sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ad:return(e.displayName||"Context")+".Consumer";case od:return(e._context.displayName||"Context")+".Provider";case ts:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ns:return t=e.displayName||null,t!==null?t:ul(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return ul(e(t))}catch{}}return null}function Mm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(t);case 8:return t===es?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ld(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Im(e){var t=ld(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xo(e){e._valueTracker||(e._valueTracker=Im(e))}function sd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ld(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ec(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ud(e,t){t=t.checked,t!=null&&ql(e,"checked",t,!1)}function dl(e,t){ud(e,t);var n=pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&fl(e,t.type,pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fl(e,t,n){(t!=="number"||Ca(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kr=Array.isArray;function fr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Kr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pn(n)}}function cd(e,t){var n=pn(t.value),r=pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zo,fd=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jm=["Webkit","ms","Moz","O"];Object.keys(Xr).forEach(function(e){jm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xr[t]=Xr[e]})});function pd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xr.hasOwnProperty(e)&&Xr[e]?(""+t).trim():t+"px"}function md(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=pd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Am=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hl(e,t){if(t){if(Am[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,pr=null,mr=null;function oc(e){if(e=_o(e)){if(typeof yl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=qa(t),yl(e.stateNode,e.type,t))}}function hd(e){pr?mr?mr.push(e):mr=[e]:pr=e}function gd(){if(pr){var e=pr,t=mr;if(mr=pr=null,oc(e),t)for(e=0;e<t.length;e++)oc(t[e])}}function vd(e,t){return e(t)}function yd(){}var $i=!1;function wd(e,t,n){if($i)return e(t,n);$i=!0;try{return vd(e,t,n)}finally{$i=!1,(pr!==null||mr!==null)&&(yd(),gd())}}function so(e,t){var n=e.stateNode;if(n===null)return null;var r=qa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var wl=!1;if(At)try{Zn={},Object.defineProperty(Zn,"passive",{get:function(){wl=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{wl=!1}var Zn;function $m(e,t,n,r,o,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Zr=!1,_a=null,Na=!1,xl=null,Um={onError:function(e){Zr=!0,_a=e}};function Hm(e,t,n,r,o,a,i,l,s){Zr=!1,_a=null,$m.apply(Um,arguments)}function Bm(e,t,n,r,o,a,i,l,s){if(Hm.apply(this,arguments),Zr){if(Zr){var u=_a;Zr=!1,_a=null}else throw Error(C(198));Na||(Na=!0,xl=u)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ac(e){if($n(e)!==e)throw Error(C(188))}function Wm(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return ac(o),e;if(a===r)return ac(o),t;a=a.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function bd(e){return e=Wm(e),e!==null?Sd(e):null}function Sd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sd(e);if(t!==null)return t;e=e.sibling}return null}var Ed=Je.unstable_scheduleCallback,ic=Je.unstable_cancelCallback,Vm=Je.unstable_shouldYield,Ym=Je.unstable_requestPaint,he=Je.unstable_now,Qm=Je.unstable_getCurrentPriorityLevel,os=Je.unstable_ImmediatePriority,kd=Je.unstable_UserBlockingPriority,Pa=Je.unstable_NormalPriority,Km=Je.unstable_LowPriority,Cd=Je.unstable_IdlePriority,Ja=null,_t=null;function Jm(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Ja,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Zm,Gm=Math.log,Xm=Math.LN2;function Zm(e){return e>>>=0,e===0?32:31-(Gm(e)/Xm|0)|0}var qo=64,ea=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ra(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=Jr(l):(a&=i,a!==0&&(r=Jr(a)))}else i=n&~o,i!==0?r=Jr(i):a!==0&&(r=Jr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),o=1<<n,r|=e[n],t&=~o;return r}function qm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-gt(a),l=1<<i,s=o[i];s===-1?((l&n)===0||(l&r)!==0)&&(o[i]=qm(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _d(){var e=qo;return qo<<=1,(qo&4194240)===0&&(qo=64),e}function Ui(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ko(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function th(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function as(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function Nd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Pd,is,Rd,Ld,Dd,Sl=!1,ta=[],on=null,an=null,ln=null,uo=new Map,co=new Map,en=[],nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lc(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":uo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(t.pointerId)}}function $r(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=_o(t),t!==null&&is(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rh(e,t,n,r,o){switch(t){case"focusin":return on=$r(on,e,t,n,r,o),!0;case"dragenter":return an=$r(an,e,t,n,r,o),!0;case"mouseover":return ln=$r(ln,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return uo.set(a,$r(uo.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,co.set(a,$r(co.get(a)||null,e,t,n,r,o)),!0}return!1}function Td(e){var t=Rn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=xd(n),t!==null){e.blockedOn=t,Dd(e.priority,function(){Rd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ha(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return t=_o(n),t!==null&&is(t),e.blockedOn=n,!1;t.shift()}return!0}function sc(e,t,n){ha(e)&&n.delete(t)}function oh(){Sl=!1,on!==null&&ha(on)&&(on=null),an!==null&&ha(an)&&(an=null),ln!==null&&ha(ln)&&(ln=null),uo.forEach(sc),co.forEach(sc)}function Ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,oh)))}function fo(e){function t(o){return Ur(o,e)}if(0<ta.length){Ur(ta[0],e);for(var n=1;n<ta.length;n++){var r=ta[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Ur(on,e),an!==null&&Ur(an,e),ln!==null&&Ur(ln,e),uo.forEach(t),co.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Td(n),n.blockedOn===null&&en.shift()}var hr=Bt.ReactCurrentBatchConfig,La=!0;function ah(e,t,n,r){var o=ee,a=hr.transition;hr.transition=null;try{ee=1,ls(e,t,n,r)}finally{ee=o,hr.transition=a}}function ih(e,t,n,r){var o=ee,a=hr.transition;hr.transition=null;try{ee=4,ls(e,t,n,r)}finally{ee=o,hr.transition=a}}function ls(e,t,n,r){if(La){var o=El(e,t,n,r);if(o===null)Ki(e,t,r,Da,n),lc(e,r);else if(rh(o,e,t,n,r))r.stopPropagation();else if(lc(e,r),t&4&&-1<nh.indexOf(e)){for(;o!==null;){var a=_o(o);if(a!==null&&Pd(a),a=El(e,t,n,r),a===null&&Ki(e,t,r,Da,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Ki(e,t,r,null,n)}}var Da=null;function El(e,t,n,r){if(Da=null,e=rs(r),e=Rn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Da=e,null}function Od(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qm()){case os:return 1;case kd:return 4;case Pa:case Km:return 16;case Cd:return 536870912;default:return 16}default:return 16}}var nn=null,ss=null,ga=null;function Fd(){if(ga)return ga;var e,t=ss,n=t.length,r,o="value"in nn?nn.value:nn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return ga=o.slice(e,1<r?1-r:void 0)}function va(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function na(){return!0}function uc(){return!1}function Ge(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?na:uc,this.isPropagationStopped=uc,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),t}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},us=Ge(Cr),Co=de({},Cr,{view:0,detail:0}),lh=Ge(Co),Hi,Bi,Hr,Ga=de({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(Hi=e.screenX-Hr.screenX,Bi=e.screenY-Hr.screenY):Bi=Hi=0,Hr=e),Hi)},movementY:function(e){return"movementY"in e?e.movementY:Bi}}),cc=Ge(Ga),sh=de({},Ga,{dataTransfer:0}),uh=Ge(sh),ch=de({},Co,{relatedTarget:0}),Wi=Ge(ch),dh=de({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),fh=Ge(dh),ph=de({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mh=Ge(ph),hh=de({},Cr,{data:0}),dc=Ge(hh),gh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yh[e])?!!t[e]:!1}function cs(){return wh}var xh=de({},Co,{key:function(e){if(e.key){var t=gh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bh=Ge(xh),Sh=de({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fc=Ge(Sh),Eh=de({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),kh=Ge(Eh),Ch=de({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_h=Ge(Ch),Nh=de({},Ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ph=Ge(Nh),Rh=[9,13,27,32],ds=At&&"CompositionEvent"in window,qr=null;At&&"documentMode"in document&&(qr=document.documentMode);var Lh=At&&"TextEvent"in window&&!qr,zd=At&&(!ds||qr&&8<qr&&11>=qr),pc=" ",mc=!1;function Md(e,t){switch(e){case"keyup":return Rh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function Dh(e,t){switch(e){case"compositionend":return Id(t);case"keypress":return t.which!==32?null:(mc=!0,pc);case"textInput":return e=t.data,e===pc&&mc?null:e;default:return null}}function Th(e,t){if(nr)return e==="compositionend"||!ds&&Md(e,t)?(e=Fd(),ga=ss=nn=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zd&&t.locale!=="ko"?null:t.data;default:return null}}var Oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Oh[e.type]:t==="textarea"}function jd(e,t,n,r){hd(r),t=Ta(t,"onChange"),0<t.length&&(n=new us("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var eo=null,po=null;function Fh(e){Jd(e,0)}function Xa(e){var t=ar(e);if(sd(t))return e}function zh(e,t){if(e==="change")return t}var Ad=!1;At&&(At?(oa="oninput"in document,oa||(Vi=document.createElement("div"),Vi.setAttribute("oninput","return;"),oa=typeof Vi.oninput=="function"),ra=oa):ra=!1,Ad=ra&&(!document.documentMode||9<document.documentMode));var ra,oa,Vi;function gc(){eo&&(eo.detachEvent("onpropertychange",$d),po=eo=null)}function $d(e){if(e.propertyName==="value"&&Xa(po)){var t=[];jd(t,po,e,rs(e)),wd(Fh,t)}}function Mh(e,t,n){e==="focusin"?(gc(),eo=t,po=n,eo.attachEvent("onpropertychange",$d)):e==="focusout"&&gc()}function Ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xa(po)}function jh(e,t){if(e==="click")return Xa(t)}function Ah(e,t){if(e==="input"||e==="change")return Xa(t)}function $h(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:$h;function mo(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!al.call(t,o)||!yt(e[o],t[o]))return!1}return!0}function vc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yc(e,t){var n=vc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vc(n)}}function Ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hd(){for(var e=window,t=Ca();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ca(e.document)}return t}function fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uh(e){var t=Hd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ud(n.ownerDocument.documentElement,n)){if(r!==null&&fs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=yc(n,a);var i=yc(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hh=At&&"documentMode"in document&&11>=document.documentMode,rr=null,kl=null,to=null,Cl=!1;function wc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cl||rr==null||rr!==Ca(r)||(r=rr,"selectionStart"in r&&fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&mo(to,r)||(to=r,r=Ta(kl,"onSelect"),0<r.length&&(t=new us("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function aa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var or={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},Yi={},Bd={};At&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function Za(e){if(Yi[e])return Yi[e];if(!or[e])return e;var t=or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bd)return Yi[e]=t[n];return e}var Wd=Za("animationend"),Vd=Za("animationiteration"),Yd=Za("animationstart"),Qd=Za("transitionend"),Kd=new Map,xc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){Kd.set(e,t),An(t,[e])}for(ia=0;ia<xc.length;ia++)la=xc[ia],bc=la.toLowerCase(),Sc=la[0].toUpperCase()+la.slice(1),hn(bc,"on"+Sc);var la,bc,Sc,ia;hn(Wd,"onAnimationEnd");hn(Vd,"onAnimationIteration");hn(Yd,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Qd,"onTransitionEnd");yr("onMouseEnter",["mouseout","mouseover"]);yr("onMouseLeave",["mouseout","mouseover"]);yr("onPointerEnter",["pointerout","pointerover"]);yr("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function Ec(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bm(r,t,void 0,e),e.currentTarget=null}function Jd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Ec(o,l,u),a=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Ec(o,l,u),a=s}}}if(Na)throw e=xl,Na=!1,xl=null,e}function oe(e,t){var n=t[Ll];n===void 0&&(n=t[Ll]=new Set);var r=e+"__bubble";n.has(r)||(Gd(t,e,2,!1),n.add(r))}function Qi(e,t,n){var r=0;t&&(r|=4),Gd(n,e,r,t)}var sa="_reactListening"+Math.random().toString(36).slice(2);function ho(e){if(!e[sa]){e[sa]=!0,rd.forEach(function(n){n!=="selectionchange"&&(Bh.has(n)||Qi(n,!1,e),Qi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sa]||(t[sa]=!0,Qi("selectionchange",!1,t))}}function Gd(e,t,n,r){switch(Od(t)){case 1:var o=ah;break;case 4:o=ih;break;default:o=ls}n=o.bind(null,t,n,e),o=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ki(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;l!==null;){if(i=Rn(l),i===null)return;if(s=i.tag,s===5||s===6){r=a=i;continue e}l=l.parentNode}}r=r.return}wd(function(){var u=a,p=rs(n),d=[];e:{var m=Kd.get(e);if(m!==void 0){var v=us,y=e;switch(e){case"keypress":if(va(n)===0)break e;case"keydown":case"keyup":v=bh;break;case"focusin":y="focus",v=Wi;break;case"focusout":y="blur",v=Wi;break;case"beforeblur":case"afterblur":v=Wi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=kh;break;case Wd:case Vd:case Yd:v=fh;break;case Qd:v=_h;break;case"scroll":v=lh;break;case"wheel":v=Ph;break;case"copy":case"cut":case"paste":v=mh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=fc}var h=(t&4)!==0,w=!h&&e==="scroll",f=h?m!==null?m+"Capture":null:m;h=[];for(var c=u,g;c!==null;){g=c;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,f!==null&&(E=so(c,f),E!=null&&h.push(go(c,E,g)))),w)break;c=c.return}0<h.length&&(m=new v(m,y,null,n,p),d.push({event:m,listeners:h}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==vl&&(y=n.relatedTarget||n.fromElement)&&(Rn(y)||y[$t]))break e;if((v||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Rn(y):null,y!==null&&(w=$n(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(h=cc,E="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(h=fc,E="onPointerLeave",f="onPointerEnter",c="pointer"),w=v==null?m:ar(v),g=y==null?m:ar(y),m=new h(E,c+"leave",v,n,p),m.target=w,m.relatedTarget=g,E=null,Rn(p)===u&&(h=new h(f,c+"enter",y,n,p),h.target=g,h.relatedTarget=w,E=h),w=E,v&&y)t:{for(h=v,f=y,c=0,g=h;g;g=qn(g))c++;for(g=0,E=f;E;E=qn(E))g++;for(;0<c-g;)h=qn(h),c--;for(;0<g-c;)f=qn(f),g--;for(;c--;){if(h===f||f!==null&&h===f.alternate)break t;h=qn(h),f=qn(f)}h=null}else h=null;v!==null&&kc(d,m,v,h,!1),y!==null&&w!==null&&kc(d,w,y,h,!0)}}e:{if(m=u?ar(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var S=zh;else if(hc(m))if(Ad)S=Ah;else{S=Ih;var k=Mh}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=jh);if(S&&(S=S(e,u))){jd(d,S,n,p);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&fl(m,"number",m.value)}switch(k=u?ar(u):window,e){case"focusin":(hc(k)||k.contentEditable==="true")&&(rr=k,kl=u,to=null);break;case"focusout":to=kl=rr=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,wc(d,n,p);break;case"selectionchange":if(Hh)break;case"keydown":case"keyup":wc(d,n,p)}var x;if(ds)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else nr?Md(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(zd&&n.locale!=="ko"&&(nr||N!=="onCompositionStart"?N==="onCompositionEnd"&&nr&&(x=Fd()):(nn=p,ss="value"in nn?nn.value:nn.textContent,nr=!0)),k=Ta(u,N),0<k.length&&(N=new dc(N,e,null,n,p),d.push({event:N,listeners:k}),x?N.data=x:(x=Id(n),x!==null&&(N.data=x)))),(x=Lh?Dh(e,n):Th(e,n))&&(u=Ta(u,"onBeforeInput"),0<u.length&&(p=new dc("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:u}),p.data=x))}Jd(d,t)})}function go(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ta(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=so(e,n),a!=null&&r.unshift(go(e,a,o)),a=so(e,t),a!=null&&r.push(go(e,a,o))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kc(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=so(n,a),s!=null&&i.unshift(go(n,s,l))):o||(s=so(n,a),s!=null&&i.push(go(n,s,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Wh=/\r\n?/g,Vh=/\u0000|\uFFFD/g;function Cc(e){return(typeof e=="string"?e:""+e).replace(Wh,`
`).replace(Vh,"")}function ua(e,t,n){if(t=Cc(t),Cc(e)!==t&&n)throw Error(C(425))}function Oa(){}var _l=null,Nl=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,Yh=typeof clearTimeout=="function"?clearTimeout:void 0,_c=typeof Promise=="function"?Promise:void 0,Qh=typeof queueMicrotask=="function"?queueMicrotask:typeof _c<"u"?function(e){return _c.resolve(null).then(e).catch(Kh)}:Rl;function Kh(e){setTimeout(function(){throw e})}function Ji(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),fo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);fo(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Ct="__reactFiber$"+_r,vo="__reactProps$"+_r,$t="__reactContainer$"+_r,Ll="__reactEvents$"+_r,Jh="__reactListeners$"+_r,Gh="__reactHandles$"+_r;function Rn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nc(e);e!==null;){if(n=e[Ct])return n;e=Nc(e)}return t}e=n,n=e.parentNode}return null}function _o(e){return e=e[Ct]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function qa(e){return e[vo]||null}var Dl=[],ir=-1;function gn(e){return{current:e}}function ae(e){0>ir||(e.current=Dl[ir],Dl[ir]=null,ir--)}function ne(e,t){ir++,Dl[ir]=e.current,e.current=t}var mn={},Te=gn(mn),He=gn(!1),Fn=mn;function wr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Be(e){return e=e.childContextTypes,e!=null}function Fa(){ae(He),ae(Te)}function Pc(e,t,n){if(Te.current!==mn)throw Error(C(168));ne(Te,t),ne(He,n)}function Xd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,Mm(e)||"Unknown",o));return de({},n,r)}function za(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Fn=Te.current,ne(Te,e),ne(He,He.current),!0}function Rc(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Xd(e,t,Fn),r.__reactInternalMemoizedMergedChildContext=e,ae(He),ae(Te),ne(Te,e)):ae(He),ne(He,n)}var zt=null,ei=!1,Gi=!1;function Zd(e){zt===null?zt=[e]:zt.push(e)}function Xh(e){ei=!0,Zd(e)}function vn(){if(!Gi&&zt!==null){Gi=!0;var e=0,t=ee;try{var n=zt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,ei=!1}catch(o){throw zt!==null&&(zt=zt.slice(e+1)),Ed(os,vn),o}finally{ee=t,Gi=!1}}return null}var lr=[],sr=0,Ma=null,Ia=0,nt=[],rt=0,zn=null,Mt=1,It="";function Nn(e,t){lr[sr++]=Ia,lr[sr++]=Ma,Ma=e,Ia=t}function qd(e,t,n){nt[rt++]=Mt,nt[rt++]=It,nt[rt++]=zn,zn=e;var r=Mt;e=It;var o=32-gt(r)-1;r&=~(1<<o),n+=1;var a=32-gt(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Mt=1<<32-gt(t)+o|n<<o|r,It=a+e}else Mt=1<<a|n<<o|r,It=e}function ps(e){e.return!==null&&(Nn(e,1),qd(e,1,0))}function ms(e){for(;e===Ma;)Ma=lr[--sr],lr[sr]=null,Ia=lr[--sr],lr[sr]=null;for(;e===zn;)zn=nt[--rt],nt[rt]=null,It=nt[--rt],nt[rt]=null,Mt=nt[--rt],nt[rt]=null}var Ke=null,Qe=null,le=!1,ht=null;function ef(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:Mt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Qe=null,!0):!1;default:return!1}}function Tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(le){var t=Qe;if(t){var n=t;if(!Lc(e,t)){if(Tl(e))throw Error(C(418));t=sn(n.nextSibling);var r=Ke;t&&Lc(e,t)?ef(r,n):(e.flags=e.flags&-4097|2,le=!1,Ke=e)}}else{if(Tl(e))throw Error(C(418));e.flags=e.flags&-4097|2,le=!1,Ke=e}}}function Dc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function ca(e){if(e!==Ke)return!1;if(!le)return Dc(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=Qe)){if(Tl(e))throw tf(),Error(C(418));for(;t;)ef(e,t),t=sn(t.nextSibling)}if(Dc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ke?sn(e.stateNode.nextSibling):null;return!0}function tf(){for(var e=Qe;e;)e=sn(e.nextSibling)}function xr(){Qe=Ke=null,le=!1}function hs(e){ht===null?ht=[e]:ht.push(e)}var Zh=Bt.ReactCurrentBatchConfig;function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var l=o.refs;i===null?delete l[a]:l[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function da(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tc(e){var t=e._init;return t(e._payload)}function nf(e){function t(f,c){if(e){var g=f.deletions;g===null?(f.deletions=[c],f.flags|=16):g.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=fn(f,c),f.index=0,f.sibling=null,f}function a(f,c,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<c?(f.flags|=2,c):g):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,c,g,E){return c===null||c.tag!==6?(c=rl(g,f.mode,E),c.return=f,c):(c=o(c,g),c.return=f,c)}function s(f,c,g,E){var S=g.type;return S===tr?p(f,c,g.props.children,E,g.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Zt&&Tc(S)===c.type)?(E=o(c,g.props),E.ref=Br(f,c,g),E.return=f,E):(E=ka(g.type,g.key,g.props,null,f.mode,E),E.ref=Br(f,c,g),E.return=f,E)}function u(f,c,g,E){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=ol(g,f.mode,E),c.return=f,c):(c=o(c,g.children||[]),c.return=f,c)}function p(f,c,g,E,S){return c===null||c.tag!==7?(c=On(g,f.mode,E,S),c.return=f,c):(c=o(c,g),c.return=f,c)}function d(f,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=rl(""+c,f.mode,g),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Go:return g=ka(c.type,c.key,c.props,null,f.mode,g),g.ref=Br(f,null,c),g.return=f,g;case er:return c=ol(c,f.mode,g),c.return=f,c;case Zt:var E=c._init;return d(f,E(c._payload),g)}if(Kr(c)||Ar(c))return c=On(c,f.mode,g,null),c.return=f,c;da(f,c)}return null}function m(f,c,g,E){var S=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:l(f,c,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Go:return g.key===S?s(f,c,g,E):null;case er:return g.key===S?u(f,c,g,E):null;case Zt:return S=g._init,m(f,c,S(g._payload),E)}if(Kr(g)||Ar(g))return S!==null?null:p(f,c,g,E,null);da(f,g)}return null}function v(f,c,g,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(g)||null,l(c,f,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Go:return f=f.get(E.key===null?g:E.key)||null,s(c,f,E,S);case er:return f=f.get(E.key===null?g:E.key)||null,u(c,f,E,S);case Zt:var k=E._init;return v(f,c,g,k(E._payload),S)}if(Kr(E)||Ar(E))return f=f.get(g)||null,p(c,f,E,S,null);da(c,E)}return null}function y(f,c,g,E){for(var S=null,k=null,x=c,N=c=0,A=null;x!==null&&N<g.length;N++){x.index>N?(A=x,x=null):A=x.sibling;var I=m(f,x,g[N],E);if(I===null){x===null&&(x=A);break}e&&x&&I.alternate===null&&t(f,x),c=a(I,c,N),k===null?S=I:k.sibling=I,k=I,x=A}if(N===g.length)return n(f,x),le&&Nn(f,N),S;if(x===null){for(;N<g.length;N++)x=d(f,g[N],E),x!==null&&(c=a(x,c,N),k===null?S=x:k.sibling=x,k=x);return le&&Nn(f,N),S}for(x=r(f,x);N<g.length;N++)A=v(x,f,N,g[N],E),A!==null&&(e&&A.alternate!==null&&x.delete(A.key===null?N:A.key),c=a(A,c,N),k===null?S=A:k.sibling=A,k=A);return e&&x.forEach(function(me){return t(f,me)}),le&&Nn(f,N),S}function h(f,c,g,E){var S=Ar(g);if(typeof S!="function")throw Error(C(150));if(g=S.call(g),g==null)throw Error(C(151));for(var k=S=null,x=c,N=c=0,A=null,I=g.next();x!==null&&!I.done;N++,I=g.next()){x.index>N?(A=x,x=null):A=x.sibling;var me=m(f,x,I.value,E);if(me===null){x===null&&(x=A);break}e&&x&&me.alternate===null&&t(f,x),c=a(me,c,N),k===null?S=me:k.sibling=me,k=me,x=A}if(I.done)return n(f,x),le&&Nn(f,N),S;if(x===null){for(;!I.done;N++,I=g.next())I=d(f,I.value,E),I!==null&&(c=a(I,c,N),k===null?S=I:k.sibling=I,k=I);return le&&Nn(f,N),S}for(x=r(f,x);!I.done;N++,I=g.next())I=v(x,f,N,I.value,E),I!==null&&(e&&I.alternate!==null&&x.delete(I.key===null?N:I.key),c=a(I,c,N),k===null?S=I:k.sibling=I,k=I);return e&&x.forEach(function(Ve){return t(f,Ve)}),le&&Nn(f,N),S}function w(f,c,g,E){if(typeof g=="object"&&g!==null&&g.type===tr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Go:e:{for(var S=g.key,k=c;k!==null;){if(k.key===S){if(S=g.type,S===tr){if(k.tag===7){n(f,k.sibling),c=o(k,g.props.children),c.return=f,f=c;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Zt&&Tc(S)===k.type){n(f,k.sibling),c=o(k,g.props),c.ref=Br(f,k,g),c.return=f,f=c;break e}n(f,k);break}else t(f,k);k=k.sibling}g.type===tr?(c=On(g.props.children,f.mode,E,g.key),c.return=f,f=c):(E=ka(g.type,g.key,g.props,null,f.mode,E),E.ref=Br(f,c,g),E.return=f,f=E)}return i(f);case er:e:{for(k=g.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(f,c.sibling),c=o(c,g.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ol(g,f.mode,E),c.return=f,f=c}return i(f);case Zt:return k=g._init,w(f,c,k(g._payload),E)}if(Kr(g))return y(f,c,g,E);if(Ar(g))return h(f,c,g,E);da(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,g),c.return=f,f=c):(n(f,c),c=rl(g,f.mode,E),c.return=f,f=c),i(f)):n(f,c)}return w}var br=nf(!0),rf=nf(!1),ja=gn(null),Aa=null,ur=null,gs=null;function vs(){gs=ur=Aa=null}function ys(e){var t=ja.current;ae(ja),e._currentValue=t}function Fl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){Aa=e,gs=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ue=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Aa===null)throw Error(C(308));ur=e,Aa.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Ln=null;function ws(e){Ln===null?Ln=[e]:Ln.push(e)}function of(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ws(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function xs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function af(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(G&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ut(e,n)}return o=r.interleaved,o===null?(t.next=t,ws(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ut(e,n)}function ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,as(e,n)}}function Oc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $a(e,t,n,r){var o=e.updateQueue;qt=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?a=u:i.next=u,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==i&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=s))}if(a!==null){var d=o.baseState;i=0,p=u=s=null,l=a;do{var m=l.lane,v=l.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,h=l;switch(m=t,v=n,h.tag){case 1:if(y=h.payload,typeof y=="function"){d=y.call(v,d,m);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=h.payload,m=typeof y=="function"?y.call(v,d,m):y,m==null)break e;d=de({},d,m);break e;case 2:qt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=v,s=d):p=p.next=v,i|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);In|=i,e.lanes=i,e.memoizedState=d}}function Fc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var No={},Nt=gn(No),yo=gn(No),wo=gn(No);function Dn(e){if(e===No)throw Error(C(174));return e}function bs(e,t){switch(ne(wo,t),ne(yo,e),ne(Nt,No),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ml(t,e)}ae(Nt),ne(Nt,t)}function Sr(){ae(Nt),ae(yo),ae(wo)}function lf(e){Dn(wo.current);var t=Dn(Nt.current),n=ml(t,e.type);t!==n&&(ne(yo,e),ne(Nt,n))}function Ss(e){yo.current===e&&(ae(Nt),ae(yo))}var ue=gn(0);function Ua(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xi=[];function Es(){for(var e=0;e<Xi.length;e++)Xi[e]._workInProgressVersionPrimary=null;Xi.length=0}var wa=Bt.ReactCurrentDispatcher,Zi=Bt.ReactCurrentBatchConfig,Mn=0,ce=null,xe=null,Se=null,Ha=!1,no=!1,xo=0,qh=0;function Re(){throw Error(C(321))}function ks(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Cs(e,t,n,r,o,a){if(Mn=a,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wa.current=e===null||e.memoizedState===null?rg:og,e=n(r,o),no){a=0;do{if(no=!1,xo=0,25<=a)throw Error(C(301));a+=1,Se=xe=null,t.updateQueue=null,wa.current=ag,e=n(r,o)}while(no)}if(wa.current=Ba,t=xe!==null&&xe.next!==null,Mn=0,Se=xe=ce=null,Ha=!1,t)throw Error(C(300));return e}function _s(){var e=xo!==0;return xo=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ce.memoizedState=Se=e:Se=Se.next=e,Se}function lt(){if(xe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Se===null?ce.memoizedState:Se.next;if(t!==null)Se=t,xe=e;else{if(e===null)throw Error(C(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Se===null?ce.memoizedState=Se=e:Se=Se.next=e}return Se}function bo(e,t){return typeof t=="function"?t(e):t}function qi(e){var t=lt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=xe,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=i=null,s=null,u=a;do{var p=u.lane;if((Mn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,i=r):s=s.next=d,ce.lanes|=p,In|=p}u=u.next}while(u!==null&&u!==a);s===null?i=r:s.next=l,yt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,ce.lanes|=a,In|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function el(e){var t=lt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);yt(a,t.memoizedState)||(Ue=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function sf(){}function uf(e,t){var n=ce,r=lt(),o=t(),a=!yt(r.memoizedState,o);if(a&&(r.memoizedState=o,Ue=!0),r=r.queue,Ns(ff.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,So(9,df.bind(null,n,r,o,t),void 0,null),Ee===null)throw Error(C(349));(Mn&30)!==0||cf(n,t,o)}return o}function cf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function df(e,t,n,r){t.value=n,t.getSnapshot=r,pf(t)&&mf(e)}function ff(e,t,n){return n(function(){pf(t)&&mf(e)})}function pf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function mf(e){var t=Ut(e,1);t!==null&&vt(t,e,1,-1)}function zc(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:e},t.queue=e,e=e.dispatch=ng.bind(null,ce,e),[t.memoizedState,e]}function So(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hf(){return lt().memoizedState}function xa(e,t,n,r){var o=kt();ce.flags|=e,o.memoizedState=So(1|t,n,void 0,r===void 0?null:r)}function ti(e,t,n,r){var o=lt();r=r===void 0?null:r;var a=void 0;if(xe!==null){var i=xe.memoizedState;if(a=i.destroy,r!==null&&ks(r,i.deps)){o.memoizedState=So(t,n,a,r);return}}ce.flags|=e,o.memoizedState=So(1|t,n,a,r)}function Mc(e,t){return xa(8390656,8,e,t)}function Ns(e,t){return ti(2048,8,e,t)}function gf(e,t){return ti(4,2,e,t)}function vf(e,t){return ti(4,4,e,t)}function yf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wf(e,t,n){return n=n!=null?n.concat([e]):null,ti(4,4,yf.bind(null,t,e),n)}function Ps(){}function xf(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ks(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bf(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ks(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sf(e,t,n){return(Mn&21)===0?(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n):(yt(n,t)||(n=_d(),ce.lanes|=n,In|=n,e.baseState=!0),t)}function eg(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Zi.transition;Zi.transition={};try{e(!1),t()}finally{ee=n,Zi.transition=r}}function Ef(){return lt().memoizedState}function tg(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kf(e))Cf(t,n);else if(n=of(e,t,n,r),n!==null){var o=Me();vt(n,e,r,o),_f(n,t,r)}}function ng(e,t,n){var r=dn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kf(e))Cf(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,yt(l,i)){var s=t.interleaved;s===null?(o.next=o,ws(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}n=of(e,t,o,r),n!==null&&(o=Me(),vt(n,e,r,o),_f(n,t,r))}}function kf(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Cf(e,t){no=Ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _f(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,as(e,n)}}var Ba={readContext:it,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},rg={readContext:it,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Mc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xa(4194308,4,yf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xa(4194308,4,e,t)},useInsertionEffect:function(e,t){return xa(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tg.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:zc,useDebugValue:Ps,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=zc(!1),t=e[0];return e=eg.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,o=kt();if(le){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),Ee===null)throw Error(C(349));(Mn&30)!==0||cf(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Mc(ff.bind(null,r,a,e),[e]),r.flags|=2048,So(9,df.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=kt(),t=Ee.identifierPrefix;if(le){var n=It,r=Mt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},og={readContext:it,useCallback:xf,useContext:it,useEffect:Ns,useImperativeHandle:wf,useInsertionEffect:gf,useLayoutEffect:vf,useMemo:bf,useReducer:qi,useRef:hf,useState:function(){return qi(bo)},useDebugValue:Ps,useDeferredValue:function(e){var t=lt();return Sf(t,xe.memoizedState,e)},useTransition:function(){var e=qi(bo)[0],t=lt().memoizedState;return[e,t]},useMutableSource:sf,useSyncExternalStore:uf,useId:Ef,unstable_isNewReconciler:!1},ag={readContext:it,useCallback:xf,useContext:it,useEffect:Ns,useImperativeHandle:wf,useInsertionEffect:gf,useLayoutEffect:vf,useMemo:bf,useReducer:el,useRef:hf,useState:function(){return el(bo)},useDebugValue:Ps,useDeferredValue:function(e){var t=lt();return xe===null?t.memoizedState=e:Sf(t,xe.memoizedState,e)},useTransition:function(){var e=el(bo)[0],t=lt().memoizedState;return[e,t]},useMutableSource:sf,useSyncExternalStore:uf,useId:Ef,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ni={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),o=dn(e),a=jt(r,o);a.payload=t,n!=null&&(a.callback=n),t=un(e,a,o),t!==null&&(vt(t,e,o,r),ya(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),o=dn(e),a=jt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=un(e,a,o),t!==null&&(vt(t,e,o,r),ya(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=dn(e),o=jt(n,r);o.tag=2,t!=null&&(o.callback=t),t=un(e,o,r),t!==null&&(vt(t,e,r,n),ya(t,e,r))}};function Ic(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!mo(n,r)||!mo(o,a):!0}function Nf(e,t,n){var r=!1,o=mn,a=t.contextType;return typeof a=="object"&&a!==null?a=it(a):(o=Be(t)?Fn:Te.current,r=t.contextTypes,a=(r=r!=null)?wr(e,o):mn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ni,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function jc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ni.enqueueReplaceState(t,t.state,null)}function Ml(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},xs(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=it(a):(a=Be(t)?Fn:Te.current,o.context=wr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(zl(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ni.enqueueReplaceState(o,o.state,null),$a(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Er(e,t){try{var n="",r=t;do n+=zm(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Il(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ig=typeof WeakMap=="function"?WeakMap:Map;function Pf(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Va||(Va=!0,Ql=r),Il(e,t)},n}function Rf(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Il(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Il(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ac(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ig;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=xg.bind(null,e,t,n),t.then(e,e))}function $c(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var lg=Bt.ReactCurrentOwner,Ue=!1;function ze(e,t,n,r){t.child=e===null?rf(t,null,n,r):br(t,e.child,n,r)}function Hc(e,t,n,r,o){n=n.render;var a=t.ref;return gr(t,o),r=Cs(e,t,n,r,a,o),n=_s(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(le&&n&&ps(t),t.flags|=1,ze(e,t,r,o),t.child)}function Bc(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Ms(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Lf(e,t,a,r,o)):(e=ka(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(i,r)&&e.ref===t.ref)return Ht(e,t,o)}return t.flags|=1,e=fn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Lf(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(mo(a,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,Ht(e,t,o)}return jl(e,t,n,r,o)}function Df(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(dr,Ye),Ye|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(dr,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ne(dr,Ye),Ye|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ne(dr,Ye),Ye|=r;return ze(e,t,o,n),t.child}function Tf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jl(e,t,n,r,o){var a=Be(n)?Fn:Te.current;return a=wr(t,a),gr(t,o),n=Cs(e,t,n,r,a,o),r=_s(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(le&&r&&ps(t),t.flags|=1,ze(e,t,n,o),t.child)}function Wc(e,t,n,r,o){if(Be(n)){var a=!0;za(t)}else a=!1;if(gr(t,o),t.stateNode===null)ba(e,t),Nf(t,n,r),Ml(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=Be(n)?Fn:Te.current,u=wr(t,u));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==u)&&jc(t,i,r,u),qt=!1;var m=t.memoizedState;i.state=m,$a(t,r,i,o),s=t.memoizedState,l!==r||m!==s||He.current||qt?(typeof p=="function"&&(zl(t,n,p,r),s=t.memoizedState),(l=qt||Ic(t,n,l,r,m,s,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,af(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:pt(t.type,l),i.props=u,d=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=it(s):(s=Be(n)?Fn:Te.current,s=wr(t,s));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==d||m!==s)&&jc(t,i,r,s),qt=!1,m=t.memoizedState,i.state=m,$a(t,r,i,o);var y=t.memoizedState;l!==d||m!==y||He.current||qt?(typeof v=="function"&&(zl(t,n,v,r),y=t.memoizedState),(u=qt||Ic(t,n,u,r,m,y,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Al(e,t,n,r,a,o)}function Al(e,t,n,r,o,a){Tf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Rc(t,n,!1),Ht(e,t,a);r=t.stateNode,lg.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=br(t,e.child,null,a),t.child=br(t,null,l,a)):ze(e,t,l,a),t.memoizedState=r.state,o&&Rc(t,n,!0),t.child}function Of(e){var t=e.stateNode;t.pendingContext?Pc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pc(e,t.context,!1),bs(e,t.containerInfo)}function Vc(e,t,n,r,o){return xr(),hs(o),t.flags|=256,ze(e,t,n,r),t.child}var $l={dehydrated:null,treeContext:null,retryLane:0};function Ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ff(e,t,n){var r=t.pendingProps,o=ue.current,a=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(ue,o&1),e===null)return Ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=ai(i,r,0,null),e=On(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ul(n),t.memoizedState=$l,e):Rs(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return sg(e,t,i,r,l,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=fn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=fn(l,a):(a=On(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Ul(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=$l,r}return a=e.child,e=a.sibling,r=fn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rs(e,t){return t=ai({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fa(e,t,n,r){return r!==null&&hs(r),br(t,e.child,null,n),e=Rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sg(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=tl(Error(C(422))),fa(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=ai({mode:"visible",children:r.children},o,0,null),a=On(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&br(t,e.child,null,i),t.child.memoizedState=Ul(i),t.memoizedState=$l,a);if((t.mode&1)===0)return fa(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(C(419)),r=tl(a,r,void 0),fa(e,t,i,r)}if(l=(i&e.childLanes)!==0,Ue||l){if(r=Ee,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Ut(e,o),vt(r,e,o,-1))}return zs(),r=tl(Error(C(421))),fa(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=bg.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,Qe=sn(o.nextSibling),Ke=t,le=!0,ht=null,e!==null&&(nt[rt++]=Mt,nt[rt++]=It,nt[rt++]=zn,Mt=e.id,It=e.overflow,zn=t),t=Rs(t,r.children),t.flags|=4096,t)}function Yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fl(e.return,t,n)}function nl(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function zf(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(ze(e,t,r.children,n),r=ue.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,n,t);else if(e.tag===19)Yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ue,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ua(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),nl(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ua(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}nl(t,!0,n,null,a);break;case"together":nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ba(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ug(e,t,n){switch(t.tag){case 3:Of(t),xr();break;case 5:lf(t);break;case 1:Be(t.type)&&za(t);break;case 4:bs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne(ja,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ue,ue.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ff(e,t,n):(ne(ue,ue.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);ne(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return zf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,Df(e,t,n)}return Ht(e,t,n)}var Mf,Hl,If,jf;Mf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hl=function(){};If=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dn(Nt.current);var a=null;switch(n){case"input":o=cl(e,o),r=cl(e,r),a=[];break;case"select":o=de({},o,{value:void 0}),r=de({},r,{value:void 0}),a=[];break;case"textarea":o=pl(e,o),r=pl(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oa)}hl(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(io.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=o?.[u],r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(io.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&oe("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};jf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cg(e,t,n){var r=t.pendingProps;switch(ms(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Be(t.type)&&Fa(),Le(t),null;case 3:return r=t.stateNode,Sr(),ae(He),ae(Te),Es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ca(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ht!==null&&(Gl(ht),ht=null))),Hl(e,t),Le(t),null;case 5:Ss(t);var o=Dn(wo.current);if(n=t.type,e!==null&&t.stateNode!=null)If(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Le(t),null}if(e=Dn(Nt.current),ca(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ct]=t,r[vo]=a,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(o=0;o<Gr.length;o++)oe(Gr[o],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":ec(r,a),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},oe("invalid",r);break;case"textarea":nc(r,a),oe("invalid",r)}hl(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ua(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ua(r.textContent,l,e),o=["children",""+l]):io.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&oe("scroll",r)}switch(n){case"input":Xo(r),tc(r,a,!0);break;case"textarea":Xo(r),rc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Oa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ct]=t,e[vo]=r,Mf(e,t,!1,!1),t.stateNode=e;e:{switch(i=gl(n,r),n){case"dialog":oe("cancel",e),oe("close",e),o=r;break;case"iframe":case"object":case"embed":oe("load",e),o=r;break;case"video":case"audio":for(o=0;o<Gr.length;o++)oe(Gr[o],e);o=r;break;case"source":oe("error",e),o=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),o=r;break;case"details":oe("toggle",e),o=r;break;case"input":ec(e,r),o=cl(e,r),oe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=de({},r,{value:void 0}),oe("invalid",e);break;case"textarea":nc(e,r),o=pl(e,r),oe("invalid",e);break;default:o=r}hl(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?md(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fd(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&lo(e,s):typeof s=="number"&&lo(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(io.hasOwnProperty(a)?s!=null&&a==="onScroll"&&oe("scroll",e):s!=null&&ql(e,a,s,i))}switch(n){case"input":Xo(e),tc(e,r,!1);break;case"textarea":Xo(e),rc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?fr(e,!!r.multiple,a,!1):r.defaultValue!=null&&fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)jf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Dn(wo.current),Dn(Nt.current),ca(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(a=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:ua(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ua(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Le(t),null;case 13:if(ae(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)tf(),xr(),t.flags|=98560,a=!1;else if(a=ca(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(C(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(C(317));a[Ct]=t}else xr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),a=!1}else ht!==null&&(Gl(ht),ht=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ue.current&1)!==0?be===0&&(be=3):zs())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return Sr(),Hl(e,t),e===null&&ho(t.stateNode.containerInfo),Le(t),null;case 10:return ys(t.type._context),Le(t),null;case 17:return Be(t.type)&&Fa(),Le(t),null;case 19:if(ae(ue),a=t.memoizedState,a===null)return Le(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Wr(a,!1);else{if(be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ua(e),i!==null){for(t.flags|=128,Wr(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ue,ue.current&1|2),t.child}e=e.sibling}a.tail!==null&&he()>kr&&(t.flags|=128,r=!0,Wr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ua(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!le)return Le(t),null}else 2*he()-a.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,Wr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=he(),t.sibling=null,n=ue.current,ne(ue,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return Fs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ye&1073741824)!==0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function dg(e,t){switch(ms(t),t.tag){case 1:return Be(t.type)&&Fa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),ae(He),ae(Te),Es(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(ae(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(ue),null;case 4:return Sr(),null;case 10:return ys(t.type._context),null;case 22:case 23:return Fs(),null;case 24:return null;default:return null}}var pa=!1,De=!1,fg=typeof WeakSet=="function"?WeakSet:Set,R=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Bl(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Qc=!1;function pg(e,t){if(_l=La,e=Hd(),fs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,l=-1,s=-1,u=0,p=0,d=e,m=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(l=i+o),d!==a||r!==0&&d.nodeType!==3||(s=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(v=d.firstChild)!==null;)m=d,d=v;for(;;){if(d===e)break t;if(m===n&&++u===o&&(l=i),m===a&&++p===r&&(s=i),(v=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nl={focusedElem:e,selectionRange:n},La=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var h=y.memoizedProps,w=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?h:pt(t.type,h),w);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){fe(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=Qc,Qc=!1,y}function ro(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Bl(t,n,a)}o=o.next}while(o!==r)}}function ri(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Af(e){var t=e.alternate;t!==null&&(e.alternate=null,Af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[vo],delete t[Ll],delete t[Jh],delete t[Gh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $f(e){return e.tag===5||e.tag===3||e.tag===4}function Kc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oa));else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}var Ce=null,mt=!1;function Xt(e,t,n){for(n=n.child;n!==null;)Uf(e,t,n),n=n.sibling}function Uf(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Ja,n)}catch{}switch(n.tag){case 5:De||cr(n,t);case 6:var r=Ce,o=mt;Ce=null,Xt(e,t,n),Ce=r,mt=o,Ce!==null&&(mt?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(mt?(e=Ce,n=n.stateNode,e.nodeType===8?Ji(e.parentNode,n):e.nodeType===1&&Ji(e,n),fo(e)):Ji(Ce,n.stateNode));break;case 4:r=Ce,o=mt,Ce=n.stateNode.containerInfo,mt=!0,Xt(e,t,n),Ce=r,mt=o;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Bl(n,t,i),o=o.next}while(o!==r)}Xt(e,t,n);break;case 1:if(!De&&(cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){fe(n,t,l)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Xt(e,t,n),De=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function Jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fg),t.forEach(function(r){var o=Sg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,mt=!1;break e;case 3:Ce=l.stateNode.containerInfo,mt=!0;break e;case 4:Ce=l.stateNode.containerInfo,mt=!0;break e}l=l.return}if(Ce===null)throw Error(C(160));Uf(a,i,o),Ce=null,mt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){fe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hf(t,e),t=t.sibling}function Hf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),Et(e),r&4){try{ro(3,e,e.return),ri(3,e)}catch(h){fe(e,e.return,h)}try{ro(5,e,e.return)}catch(h){fe(e,e.return,h)}}break;case 1:ft(t,e),Et(e),r&512&&n!==null&&cr(n,n.return);break;case 5:if(ft(t,e),Et(e),r&512&&n!==null&&cr(n,n.return),e.flags&32){var o=e.stateNode;try{lo(o,"")}catch(h){fe(e,e.return,h)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&ud(o,a),gl(l,i);var u=gl(l,a);for(i=0;i<s.length;i+=2){var p=s[i],d=s[i+1];p==="style"?md(o,d):p==="dangerouslySetInnerHTML"?fd(o,d):p==="children"?lo(o,d):ql(o,p,d,u)}switch(l){case"input":dl(o,a);break;case"textarea":cd(o,a);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?fr(o,!!a.multiple,v,!1):m!==!!a.multiple&&(a.defaultValue!=null?fr(o,!!a.multiple,a.defaultValue,!0):fr(o,!!a.multiple,a.multiple?[]:"",!1))}o[vo]=a}catch(h){fe(e,e.return,h)}}break;case 6:if(ft(t,e),Et(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(h){fe(e,e.return,h)}}break;case 3:if(ft(t,e),Et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(t.containerInfo)}catch(h){fe(e,e.return,h)}break;case 4:ft(t,e),Et(e);break;case 13:ft(t,e),Et(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Ts=he())),r&4&&Jc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||p,ft(t,e),De=u):ft(t,e),Et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&(e.mode&1)!==0)for(R=e,p=e.child;p!==null;){for(d=R=p;R!==null;){switch(m=R,v=m.child,m.tag){case 0:case 11:case 14:case 15:ro(4,m,m.return);break;case 1:cr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(h){fe(r,n,h)}}break;case 5:cr(m,m.return);break;case 22:if(m.memoizedState!==null){Xc(d);continue}}v!==null?(v.return=m,R=v):Xc(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=pd("display",i))}catch(h){fe(e,e.return,h)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){fe(e,e.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ft(t,e),Et(e),r&4&&Jc(e);break;case 21:break;default:ft(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($f(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(lo(o,""),r.flags&=-33);var a=Kc(e);Yl(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=Kc(e);Vl(e,l,i);break;default:throw Error(C(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mg(e,t,n){R=e,Bf(e,t,n)}function Bf(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||pa;if(!i){var l=o.alternate,s=l!==null&&l.memoizedState!==null||De;l=pa;var u=De;if(pa=i,(De=s)&&!u)for(R=o;R!==null;)i=R,s=i.child,i.tag===22&&i.memoizedState!==null?Zc(o):s!==null?(s.return=i,R=s):Zc(o);for(;a!==null;)R=a,Bf(a,t,n),a=a.sibling;R=o,pa=l,De=u}Gc(e,t,n)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,R=a):Gc(e,t,n)}}function Gc(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:De||ri(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Fc(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fc(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&fo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}De||t.flags&512&&Wl(t)}catch(m){fe(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Xc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Zc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ri(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){fe(t,o,s)}}var a=t.return;try{Wl(t)}catch(s){fe(t,a,s)}break;case 5:var i=t.return;try{Wl(t)}catch(s){fe(t,i,s)}}}catch(s){fe(t,t.return,s)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var hg=Math.ceil,Wa=Bt.ReactCurrentDispatcher,Ls=Bt.ReactCurrentOwner,at=Bt.ReactCurrentBatchConfig,G=0,Ee=null,ye=null,_e=0,Ye=0,dr=gn(0),be=0,Eo=null,In=0,oi=0,Ds=0,oo=null,$e=null,Ts=0,kr=1/0,Ft=null,Va=!1,Ql=null,cn=null,ma=!1,rn=null,Ya=0,ao=0,Kl=null,Sa=-1,Ea=0;function Me(){return(G&6)!==0?he():Sa!==-1?Sa:Sa=he()}function dn(e){return(e.mode&1)===0?1:(G&2)!==0&&_e!==0?_e&-_e:Zh.transition!==null?(Ea===0&&(Ea=_d()),Ea):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Od(e.type)),e)}function vt(e,t,n,r){if(50<ao)throw ao=0,Kl=null,Error(C(185));ko(e,n,r),((G&2)===0||e!==Ee)&&(e===Ee&&((G&2)===0&&(oi|=n),be===4&&tn(e,_e)),We(e,r),n===1&&G===0&&(t.mode&1)===0&&(kr=he()+500,ei&&vn()))}function We(e,t){var n=e.callbackNode;eh(e,t);var r=Ra(e,e===Ee?_e:0);if(r===0)n!==null&&ic(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ic(n),t===1)e.tag===0?Xh(qc.bind(null,e)):Zd(qc.bind(null,e)),Qh(function(){(G&6)===0&&vn()}),n=null;else{switch(Nd(r)){case 1:n=os;break;case 4:n=kd;break;case 16:n=Pa;break;case 536870912:n=Cd;break;default:n=Pa}n=Xf(n,Wf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wf(e,t){if(Sa=-1,Ea=0,(G&6)!==0)throw Error(C(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=Ra(e,e===Ee?_e:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Qa(e,r);else{t=r;var o=G;G|=2;var a=Yf();(Ee!==e||_e!==t)&&(Ft=null,kr=he()+500,Tn(e,t));do try{yg();break}catch(l){Vf(e,l)}while(!0);vs(),Wa.current=a,G=o,ye!==null?t=0:(Ee=null,_e=0,t=be)}if(t!==0){if(t===2&&(o=bl(e),o!==0&&(r=o,t=Jl(e,o))),t===1)throw n=Eo,Tn(e,0),tn(e,r),We(e,he()),n;if(t===6)tn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!gg(o)&&(t=Qa(e,r),t===2&&(a=bl(e),a!==0&&(r=a,t=Jl(e,a))),t===1))throw n=Eo,Tn(e,0),tn(e,r),We(e,he()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Pn(e,$e,Ft);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=Ts+500-he(),10<t)){if(Ra(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Rl(Pn.bind(null,e,$e,Ft),t);break}Pn(e,$e,Ft);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-gt(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hg(r/1960))-r,10<r){e.timeoutHandle=Rl(Pn.bind(null,e,$e,Ft),r);break}Pn(e,$e,Ft);break;case 5:Pn(e,$e,Ft);break;default:throw Error(C(329))}}}return We(e,he()),e.callbackNode===n?Wf.bind(null,e):null}function Jl(e,t){var n=oo;return e.current.memoizedState.isDehydrated&&(Tn(e,t).flags|=256),e=Qa(e,t),e!==2&&(t=$e,$e=n,t!==null&&Gl(t)),e}function Gl(e){$e===null?$e=e:$e.push.apply($e,e)}function gg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!yt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~Ds,t&=~oi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function qc(e){if((G&6)!==0)throw Error(C(327));vr();var t=Ra(e,0);if((t&1)===0)return We(e,he()),null;var n=Qa(e,t);if(e.tag!==0&&n===2){var r=bl(e);r!==0&&(t=r,n=Jl(e,r))}if(n===1)throw n=Eo,Tn(e,0),tn(e,t),We(e,he()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,$e,Ft),We(e,he()),null}function Os(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(kr=he()+500,ei&&vn())}}function jn(e){rn!==null&&rn.tag===0&&(G&6)===0&&vr();var t=G;G|=1;var n=at.transition,r=ee;try{if(at.transition=null,ee=1,e)return e()}finally{ee=r,at.transition=n,G=t,(G&6)===0&&vn()}}function Fs(){Ye=dr.current,ae(dr)}function Tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yh(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fa();break;case 3:Sr(),ae(He),ae(Te),Es();break;case 5:Ss(r);break;case 4:Sr();break;case 13:ae(ue);break;case 19:ae(ue);break;case 10:ys(r.type._context);break;case 22:case 23:Fs()}n=n.return}if(Ee=e,ye=e=fn(e.current,null),_e=Ye=t,be=0,Eo=null,Ds=oi=In=0,$e=oo=null,Ln!==null){for(t=0;t<Ln.length;t++)if(n=Ln[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}Ln=null}return e}function Vf(e,t){do{var n=ye;try{if(vs(),wa.current=Ba,Ha){for(var r=ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ha=!1}if(Mn=0,Se=xe=ce=null,no=!1,xo=0,Ls.current=null,n===null||n.return===null){be=1,Eo=t,ye=null;break}e:{var a=e,i=n.return,l=n,s=t;if(t=_e,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=l,d=p.tag;if((p.mode&1)===0&&(d===0||d===11||d===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=$c(i);if(v!==null){v.flags&=-257,Uc(v,i,l,a,t),v.mode&1&&Ac(a,u,t),t=v,s=u;var y=t.updateQueue;if(y===null){var h=new Set;h.add(s),t.updateQueue=h}else y.add(s);break e}else{if((t&1)===0){Ac(a,u,t),zs();break e}s=Error(C(426))}}else if(le&&l.mode&1){var w=$c(i);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),Uc(w,i,l,a,t),hs(Er(s,l));break e}}a=s=Er(s,l),be!==4&&(be=2),oo===null?oo=[a]:oo.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Pf(a,s,t);Oc(a,f);break e;case 1:l=s;var c=a.type,g=a.stateNode;if((a.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(cn===null||!cn.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var E=Rf(a,l,t);Oc(a,E);break e}}a=a.return}while(a!==null)}Kf(n)}catch(S){t=S,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function Yf(){var e=Wa.current;return Wa.current=Ba,e===null?Ba:e}function zs(){(be===0||be===3||be===2)&&(be=4),Ee===null||(In&268435455)===0&&(oi&268435455)===0||tn(Ee,_e)}function Qa(e,t){var n=G;G|=2;var r=Yf();(Ee!==e||_e!==t)&&(Ft=null,Tn(e,t));do try{vg();break}catch(o){Vf(e,o)}while(!0);if(vs(),G=n,Wa.current=r,ye!==null)throw Error(C(261));return Ee=null,_e=0,be}function vg(){for(;ye!==null;)Qf(ye)}function yg(){for(;ye!==null&&!Vm();)Qf(ye)}function Qf(e){var t=Gf(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?Kf(e):ye=t,Ls.current=null}function Kf(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=cg(n,t,Ye),n!==null){ye=n;return}}else{if(n=dg(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,ye=null;return}}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);be===0&&(be=5)}function Pn(e,t,n){var r=ee,o=at.transition;try{at.transition=null,ee=1,wg(e,t,n,r)}finally{at.transition=o,ee=r}return null}function wg(e,t,n,r){do vr();while(rn!==null);if((G&6)!==0)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(th(e,a),e===Ee&&(ye=Ee=null,_e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ma||(ma=!0,Xf(Pa,function(){return vr(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=at.transition,at.transition=null;var i=ee;ee=1;var l=G;G|=4,Ls.current=null,pg(e,n),Hf(n,e),Uh(Nl),La=!!_l,Nl=_l=null,e.current=n,mg(n,e,o),Ym(),G=l,ee=i,at.transition=a}else e.current=n;if(ma&&(ma=!1,rn=e,Ya=o),a=e.pendingLanes,a===0&&(cn=null),Jm(n.stateNode,r),We(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Va)throw Va=!1,e=Ql,Ql=null,e;return(Ya&1)!==0&&e.tag!==0&&vr(),a=e.pendingLanes,(a&1)!==0?e===Kl?ao++:(ao=0,Kl=e):ao=0,vn(),null}function vr(){if(rn!==null){var e=Nd(Ya),t=at.transition,n=ee;try{if(at.transition=null,ee=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,Ya=0,(G&6)!==0)throw Error(C(331));var o=G;for(G|=4,R=e.current;R!==null;){var a=R,i=a.child;if((R.flags&16)!==0){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(R=u;R!==null;){var p=R;switch(p.tag){case 0:case 11:case 15:ro(8,p,a)}var d=p.child;if(d!==null)d.return=p,R=d;else for(;R!==null;){p=R;var m=p.sibling,v=p.return;if(Af(p),p===u){R=null;break}if(m!==null){m.return=v,R=m;break}R=v}}}var y=a.alternate;if(y!==null){var h=y.child;if(h!==null){y.child=null;do{var w=h.sibling;h.sibling=null,h=w}while(h!==null)}}R=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,R=i;else e:for(;R!==null;){if(a=R,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:ro(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,R=f;break e}R=a.return}}var c=e.current;for(R=c;R!==null;){i=R;var g=i.child;if((i.subtreeFlags&2064)!==0&&g!==null)g.return=i,R=g;else e:for(i=c;R!==null;){if(l=R,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:ri(9,l)}}catch(S){fe(l,l.return,S)}if(l===i){R=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,R=E;break e}R=l.return}}if(G=o,vn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Ja,e)}catch{}r=!0}return r}finally{ee=n,at.transition=t}}return!1}function ed(e,t,n){t=Er(n,t),t=Pf(e,t,1),e=un(e,t,1),t=Me(),e!==null&&(ko(e,1,t),We(e,t))}function fe(e,t,n){if(e.tag===3)ed(e,e,n);else for(;t!==null;){if(t.tag===3){ed(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=Er(n,e),e=Rf(t,e,1),t=un(t,e,1),e=Me(),t!==null&&(ko(t,1,e),We(t,e));break}}t=t.return}}function xg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(_e&n)===n&&(be===4||be===3&&(_e&130023424)===_e&&500>he()-Ts?Tn(e,0):Ds|=n),We(e,t)}function Jf(e,t){t===0&&((e.mode&1)===0?t=1:(t=ea,ea<<=1,(ea&130023424)===0&&(ea=4194304)));var n=Me();e=Ut(e,t),e!==null&&(ko(e,t,n),We(e,n))}function bg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jf(e,n)}function Sg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Jf(e,n)}var Gf;Gf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Ue=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ue=!1,ug(e,t,n);Ue=(e.flags&131072)!==0}else Ue=!1,le&&(t.flags&1048576)!==0&&qd(t,Ia,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ba(e,t),e=t.pendingProps;var o=wr(t,Te.current);gr(t,n),o=Cs(null,t,r,e,o,n);var a=_s();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(a=!0,za(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xs(t),o.updater=ni,t.stateNode=o,o._reactInternals=t,Ml(t,r,e,n),t=Al(null,t,r,!0,a,n)):(t.tag=0,le&&a&&ps(t),ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ba(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=kg(r),e=pt(r,e),o){case 0:t=jl(null,t,r,e,n);break e;case 1:t=Wc(null,t,r,e,n);break e;case 11:t=Hc(null,t,r,e,n);break e;case 14:t=Bc(null,t,r,pt(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),jl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Wc(e,t,r,o,n);case 3:e:{if(Of(t),e===null)throw Error(C(387));r=t.pendingProps,a=t.memoizedState,o=a.element,af(e,t),$a(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Er(Error(C(423)),t),t=Vc(e,t,r,n,o);break e}else if(r!==o){o=Er(Error(C(424)),t),t=Vc(e,t,r,n,o);break e}else for(Qe=sn(t.stateNode.containerInfo.firstChild),Ke=t,le=!0,ht=null,n=rf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===o){t=Ht(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return lf(t),e===null&&Ol(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Pl(r,o)?i=null:a!==null&&Pl(r,a)&&(t.flags|=32),Tf(e,t),ze(e,t,i,n),t.child;case 6:return e===null&&Ol(t),null;case 13:return Ff(e,t,n);case 4:return bs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=br(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Hc(e,t,r,o,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,ne(ja,r._currentValue),r._currentValue=i,a!==null)if(yt(a.value,i)){if(a.children===o.children&&!He.current){t=Ht(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=jt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Fl(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(C(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Fl(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,gr(t,n),o=it(o),r=r(o),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,o=pt(r,t.pendingProps),o=pt(r.type,o),Bc(e,t,r,o,n);case 15:return Lf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),ba(e,t),t.tag=1,Be(r)?(e=!0,za(t)):e=!1,gr(t,n),Nf(t,r,o),Ml(t,r,o,n),Al(null,t,r,!0,e,n);case 19:return zf(e,t,n);case 22:return Df(e,t,n)}throw Error(C(156,t.tag))};function Xf(e,t){return Ed(e,t)}function Eg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new Eg(e,t,n,r)}function Ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kg(e){if(typeof e=="function")return Ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ts)return 11;if(e===ns)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ka(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Ms(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case tr:return On(n.children,o,a,t);case es:i=8,o|=8;break;case il:return e=ot(12,n,t,o|2),e.elementType=il,e.lanes=a,e;case ll:return e=ot(13,n,t,o),e.elementType=ll,e.lanes=a,e;case sl:return e=ot(19,n,t,o),e.elementType=sl,e.lanes=a,e;case id:return ai(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case od:i=10;break e;case ad:i=9;break e;case ts:i=11;break e;case ns:i=14;break e;case Zt:i=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=ot(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function On(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function ai(e,t,n,r){return e=ot(22,e,r,t),e.elementType=id,e.lanes=n,e.stateNode={isHidden:!1},e}function rl(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function ol(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ui(0),this.expirationTimes=Ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ui(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Is(e,t,n,r,o,a,i,l,s){return e=new Cg(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ot(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xs(a),e}function _g(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zf(e){if(!e)return mn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Be(n))return Xd(e,n,t)}return t}function qf(e,t,n,r,o,a,i,l,s){return e=Is(n,r,!0,e,o,a,i,l,s),e.context=Zf(null),n=e.current,r=Me(),o=dn(n),a=jt(r,o),a.callback=t??null,un(n,a,o),e.current.lanes=o,ko(e,o,r),We(e,r),e}function ii(e,t,n,r){var o=t.current,a=Me(),i=dn(o);return n=Zf(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(o,t,i),e!==null&&(vt(e,o,i,a),ya(e,o,i)),i}function Ka(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function js(e,t){td(e,t),(e=e.alternate)&&td(e,t)}function Ng(){return null}var ep=typeof reportError=="function"?reportError:function(e){console.error(e)};function As(e){this._internalRoot=e}li.prototype.render=As.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));ii(e,t,null,null)};li.prototype.unmount=As.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){ii(null,e,null,null)}),t[$t]=null}};function li(e){this._internalRoot=e}li.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ld();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Td(e)}};function $s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function Pg(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=Ka(i);a.call(u)}}var i=qf(t,r,e,0,null,!1,!1,"",nd);return e._reactRootContainer=i,e[$t]=i.current,ho(e.nodeType===8?e.parentNode:e),jn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Ka(s);l.call(u)}}var s=Is(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=s,e[$t]=s.current,ho(e.nodeType===8?e.parentNode:e),jn(function(){ii(t,s,n,r)}),s}function ui(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var l=o;o=function(){var s=Ka(i);l.call(s)}}ii(t,i,e,o)}else i=Pg(n,t,e,o,r);return Ka(i)}Pd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(as(t,n|1),We(t,he()),(G&6)===0&&(kr=he()+500,vn()))}break;case 13:jn(function(){var r=Ut(e,1);if(r!==null){var o=Me();vt(r,e,1,o)}}),js(e,1)}};is=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Me();vt(t,e,134217728,n)}js(e,134217728)}};Rd=function(e){if(e.tag===13){var t=dn(e),n=Ut(e,t);if(n!==null){var r=Me();vt(n,e,t,r)}js(e,t)}};Ld=function(){return ee};Dd=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};yl=function(e,t,n){switch(t){case"input":if(dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=qa(r);if(!o)throw Error(C(90));sd(r),dl(r,o)}}}break;case"textarea":cd(e,n);break;case"select":t=n.value,t!=null&&fr(e,!!n.multiple,t,!1)}};vd=Os;yd=jn;var Rg={usingClientEntryPoint:!1,Events:[_o,ar,qa,hd,gd,Os]},Vr={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lg={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bd(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||Ng,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Yr.isDisabled&&Yr.supportsFiber))try{Ja=Yr.inject(Lg),_t=Yr}catch{}var Yr;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rg;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$s(t))throw Error(C(200));return _g(e,t,null,n)};Xe.createRoot=function(e,t){if(!$s(e))throw Error(C(299));var n=!1,r="",o=ep;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Is(e,1,!1,null,null,n,!1,r,o),e[$t]=t.current,ho(e.nodeType===8?e.parentNode:e),new As(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=bd(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return jn(e)};Xe.hydrate=function(e,t,n){if(!si(t))throw Error(C(200));return ui(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!$s(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=ep;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=qf(t,null,e,1,n??null,o,!1,a,i),e[$t]=t.current,ho(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new li(t)};Xe.render=function(e,t,n){if(!si(t))throw Error(C(200));return ui(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!si(e))throw Error(C(40));return e._reactRootContainer?(jn(function(){ui(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};Xe.unstable_batchedUpdates=Os;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!si(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return ui(e,t,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426"});var op=Cn((uy,rp)=>{"use strict";function np(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(np)}catch(e){console.error(e)}}np(),rp.exports=tp()});var ip=Cn(Us=>{"use strict";var ap=op();Us.createRoot=ap.createRoot,Us.hydrateRoot=ap.hydrateRoot;var cy});var om=B(H()),am=B(ip());var ct=B(H());var qe=B(H(),1),D=B(H(),1),se=B(H(),1),ru=B(H(),1),Ip=B(H(),1),q=B(H(),1),Av=B(H(),1),$v=B(H(),1),Uv=B(H(),1),O=B(H(),1),Xp=B(H(),1);var lp="popstate";function mp(e={}){function t(r,o){let{pathname:a,search:i,hash:l}=r.location;return Vs("",{pathname:a,search:i,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Nr(o)}return Tg(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ze(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Dg(){return Math.random().toString(36).substring(2,10)}function sp(e,t){return{usr:e.state,key:e.key,idx:t}}function Vs(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Un(t):t,state:n,key:t&&t.key||r||Dg()}}function Nr({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Un(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Tg(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,l="POP",s=null,u=p();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function p(){return(i.state||{idx:null}).idx}function d(){l="POP";let w=p(),f=w==null?null:w-u;u=w,s&&s({action:l,location:h.location,delta:f})}function m(w,f){l="PUSH";let c=Vs(h.location,w,f);n&&n(c,w),u=p()+1;let g=sp(c,u),E=h.createHref(c);try{i.pushState(g,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(E)}a&&s&&s({action:l,location:h.location,delta:1})}function v(w,f){l="REPLACE";let c=Vs(h.location,w,f);n&&n(c,w),u=p();let g=sp(c,u),E=h.createHref(c);i.replaceState(g,"",E),a&&s&&s({action:l,location:h.location,delta:0})}function y(w){return Og(w)}let h={get action(){return l},get location(){return e(o,i)},listen(w){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(lp,d),s=w,()=>{o.removeEventListener(lp,d),s=null}},createHref(w){return t(o,w)},createURL:y,encodeLocation(w){let f=y(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:v,go(w){return i.go(w)}};return h}function Og(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ie(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Nr(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}var Fg;Fg=new WeakMap;function Js(e,t,n="/"){return zg(e,t,n,!1)}function zg(e,t,n,r){let o=typeof t=="string"?Un(t):t,a=Pt(o.pathname||"/",n);if(a==null)return null;let i=hp(e);Ig(i);let l=null;for(let s=0;l==null&&s<i.length;++s){let u=Kg(a);l=Yg(i[s],u,r)}return l}function Mg(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function hp(e,t=[],n=[],r="",o=!1){let a=(i,l,s=o,u)=>{let p={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(r)&&s)return;ie(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length)}let d=Wt([r,p.relativePath]),m=n.concat(p);i.children&&i.children.length>0&&(ie(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),hp(i.children,t,m,d,s)),!(i.path==null&&!i.index)&&t.push({path:d,score:Wg(d,i.index),routesMeta:m})};return e.forEach((i,l)=>{if(i.path===""||!i.path?.includes("?"))a(i,l);else for(let s of gp(i.path))a(i,l,!0,s)}),t}function gp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let i=gp(r.join("/")),l=[];return l.push(...i.map(s=>s===""?a:[a,s].join("/"))),o&&l.push(...i),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Ig(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Vg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var jg=/^:[\w-]+$/,Ag=3,$g=2,Ug=1,Hg=10,Bg=-2,up=e=>e==="*";function Wg(e,t){let n=e.split("/"),r=n.length;return n.some(up)&&(r+=Bg),t&&(r+=$g),n.filter(o=>!up(o)).reduce((o,a)=>o+(jg.test(a)?Ag:a===""?Ug:Hg),r)}function Vg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Yg(e,t,n=!1){let{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,p=a==="/"?t:t.slice(a.length)||"/",d=Ro({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},p),m=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Ro({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},p)),!d)return null;Object.assign(o,d.params),i.push({params:o,pathname:Wt([a,d.pathname]),pathnameBase:Xg(Wt([a,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(a=Wt([a,d.pathnameBase]))}return i}function Ro(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Qg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,{paramName:p,isOptional:d},m)=>{if(p==="*"){let y=l[m]||"";i=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}let v=l[m];return d&&!v?u[p]=void 0:u[p]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:i,pattern:e}}function Qg(e,t=!1,n=!0){Ze(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Kg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ze(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Pt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var vp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jg=e=>vp.test(e);function yp(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Un(e):e,a;if(n)if(Jg(n))a=n;else{if(n.includes("//")){let i=n;n=n.replace(/\/\/+/g,"/"),Ze(!1,`Pathnames cannot have embedded double slashes - normalizing ${i} -> ${n}`)}n.startsWith("/")?a=cp(n.substring(1),"/"):a=cp(n,t)}else a=t;return{pathname:a,search:Zg(r),hash:qg(o)}}function cp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Hs(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wp(e){let t=Gg(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function xp(e,t,n,r=!1){let o;typeof e=="string"?o=Un(e):(o={...e},ie(!o.pathname||!o.pathname.includes("?"),Hs("?","pathname","search",o)),ie(!o.pathname||!o.pathname.includes("#"),Hs("#","pathname","hash",o)),ie(!o.search||!o.search.includes("#"),Hs("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,l;if(i==null)l=n;else{let d=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),d-=1;o.pathname=m.join("/")}l=d>=0?t[d]:"/"}let s=yp(o,l),u=i&&i!=="/"&&i.endsWith("/"),p=(a||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}var Wt=e=>e.join("/").replace(/\/\/+/g,"/"),Xg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,qg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;var bp=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Sp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function ev(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ep=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function kp(e,t){let n=e;if(typeof n!="string"||!vp.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(Ep)try{let a=new URL(window.location.href),i=n.startsWith("//")?new URL(a.protocol+n):new URL(n),l=Pt(i.pathname,t);i.origin===a.origin&&l!=null?n=l+i.search+i.hash:o=!0}catch{Ze(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}var fy=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Cp=["POST","PUT","PATCH","DELETE"],py=new Set(Cp),tv=["GET",...Cp],my=new Set(tv);var Hn=qe.createContext(null);Hn.displayName="DataRouter";var Pr=qe.createContext(null);Pr.displayName="DataRouterState";var nv=qe.createContext(!1);var Gs=qe.createContext({isTransitioning:!1});Gs.displayName="ViewTransition";var _p=qe.createContext(new Map);_p.displayName="Fetchers";var rv=qe.createContext(null);rv.displayName="Await";var je=qe.createContext(null);je.displayName="Navigation";var Rr=qe.createContext(null);Rr.displayName="Location";var wt=qe.createContext({outlet:null,matches:[],isDataRoute:!1});wt.displayName="Route";var Xs=qe.createContext(null);Xs.displayName="RouteError";var Ys=!0,Np="REACT_ROUTER_ERROR",ov="REDIRECT",av="ROUTE_ERROR_RESPONSE";function iv(e){if(e.startsWith(`${Np}:${ov}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function lv(e){if(e.startsWith(`${Np}:${av}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new bp(t.status,t.statusText,t.data)}catch{}}function Pp(e,{relative:t}={}){ie(Lr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=D.useContext(je),{hash:o,pathname:a,search:i}=Dr(e,{relative:t}),l=a;return n!=="/"&&(l=a==="/"?n:Wt([n,a])),r.createHref({pathname:l,search:i,hash:o})}function Lr(){return D.useContext(Rr)!=null}function st(){return ie(Lr(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(Rr).location}var Rp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lp(e){D.useContext(je).static||D.useLayoutEffect(e)}function ut(){let{isDataRoute:e}=D.useContext(wt);return e?vv():sv()}function sv(){ie(Lr(),"useNavigate() may be used only in the context of a <Router> component.");let e=D.useContext(Hn),{basename:t,navigator:n}=D.useContext(je),{matches:r}=D.useContext(wt),{pathname:o}=st(),a=JSON.stringify(wp(r)),i=D.useRef(!1);return Lp(()=>{i.current=!0}),D.useCallback((s,u={})=>{if(Ze(i.current,Rp),!i.current)return;if(typeof s=="number"){n.go(s);return}let p=xp(s,JSON.parse(a),o,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Wt([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,a,o,e])}var hy=D.createContext(null);function Lo(){let{matches:e}=D.useContext(wt),t=e[e.length-1];return t?t.params:{}}function Dr(e,{relative:t}={}){let{matches:n}=D.useContext(wt),{pathname:r}=st(),o=JSON.stringify(wp(n));return D.useMemo(()=>xp(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function Dp(e,t){return Tp(e,t)}function Tp(e,t,n,r,o){ie(Lr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=D.useContext(je),{matches:i}=D.useContext(wt),l=i[i.length-1],s=l?l.params:{},u=l?l.pathname:"/",p=l?l.pathnameBase:"/",d=l&&l.route;if(Ys){let c=d&&d.path||"";Mp(u,!d||c.endsWith("*")||c.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${c}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${c}"> to <Route path="${c==="/"?"*":`${c}/*`}">.`)}let m=st(),v;if(t){let c=typeof t=="string"?Un(t):t;ie(p==="/"||c.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${c.pathname}" was given in the \`location\` prop.`),v=c}else v=m;let y=v.pathname||"/",h=y;if(p!=="/"){let c=p.replace(/^\//,"").split("/");h="/"+y.replace(/^\//,"").split("/").slice(c.length).join("/")}let w=Js(e,{pathname:h});Ys&&(Ze(d||w!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Ze(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));let f=pv(w&&w.map(c=>Object.assign({},c,{params:Object.assign({},s,c.params),pathname:Wt([p,a.encodeLocation?a.encodeLocation(c.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:c.pathname]),pathnameBase:c.pathnameBase==="/"?p:Wt([p,a.encodeLocation?a.encodeLocation(c.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:c.pathnameBase])})),i,n,r,o);return t&&f?D.createElement(Rr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},f):f}function uv(){let e=zp(),t=Sp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},i=null;return Ys&&(console.error("Error handled by React Router default ErrorBoundary:",e),i=D.createElement(D.Fragment,null,D.createElement("p",null,"\u{1F4BF} Hey developer \u{1F44B}"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:a},"ErrorBoundary")," or"," ",D.createElement("code",{style:a},"errorElement")," prop on your route."))),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},t),n?D.createElement("pre",{style:o},n):null,i)}var cv=D.createElement(uv,null),Op=class extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let n=lv(e.digest);n&&(e=n)}let t=e!==void 0?D.createElement(wt.Provider,{value:this.props.routeContext},D.createElement(Xs.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?D.createElement(dv,{error:e},t):t}};Op.contextType=nv;var Bs=new WeakMap;function dv({children:e,error:t}){let{basename:n}=D.useContext(je);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=iv(t.digest);if(r){let o=Bs.get(t);if(o)throw o;let a=kp(r.location,n);if(Ep&&!Bs.get(t))if(a.isExternal||r.reloadDocument)window.location.href=a.absoluteURL||a.to;else{let i=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:r.replace}));throw Bs.set(t,i),i}return D.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return e}function fv({routeContext:e,match:t,children:n}){let r=D.useContext(Hn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),D.createElement(wt.Provider,{value:e},n)}function pv(e,t=[],n=null,r=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,i=n?.errors;if(i!=null){let p=a.findIndex(d=>d.route.id&&i?.[d.route.id]!==void 0);ie(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let l=!1,s=-1;if(n)for(let p=0;p<a.length;p++){let d=a[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(s=p),d.route.id){let{loaderData:m,errors:v}=n,y=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){l=!0,s>=0?a=a.slice(0,s+1):a=[a[0]];break}}}let u=n&&r?(p,d)=>{r(p,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:ev(n.matches),errorInfo:d})}:void 0;return a.reduceRight((p,d,m)=>{let v,y=!1,h=null,w=null;n&&(v=i&&d.route.id?i[d.route.id]:void 0,h=d.route.errorElement||cv,l&&(s<0&&m===0?(Mp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,w=null):s===m&&(y=!0,w=d.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,m+1)),c=()=>{let g;return v?g=h:y?g=w:d.route.Component?g=D.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=p,D.createElement(fv,{match:d,routeContext:{outlet:p,matches:f,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?D.createElement(Op,{location:n.location,revalidation:n.revalidation,component:h,error:v,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:u}):c()},null)}function Zs(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mv(e){let t=D.useContext(Hn);return ie(t,Zs(e)),t}function qs(e){let t=D.useContext(Pr);return ie(t,Zs(e)),t}function hv(e){let t=D.useContext(wt);return ie(t,Zs(e)),t}function eu(e){let t=hv(e),n=t.matches[t.matches.length-1];return ie(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function gv(){return eu("useRouteId")}function Fp(){return qs("useNavigation").navigation}function tu(){let{matches:e,loaderData:t}=qs("useMatches");return D.useMemo(()=>e.map(n=>Mg(n,t)),[e,t])}function zp(){let e=D.useContext(Xs),t=qs("useRouteError"),n=eu("useRouteError");return e!==void 0?e:t.errors?.[n]}function vv(){let{router:e}=mv("useNavigate"),t=eu("useNavigate"),n=D.useRef(!1);return Lp(()=>{n.current=!0}),D.useCallback(async(o,a={})=>{Ze(n.current,Rp),n.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var dp={};function Mp(e,t,n){!t&&!dp[e]&&(dp[e]=!0,Ze(!1,n))}var yv="useOptimistic",gy=se[yv];var vy=se.memo(wv);function wv({routes:e,future:t,state:n,onError:r}){return Tp(e,void 0,n,r,t)}function we(e){ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nu({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:a=!1,unstable_useTransitions:i}){ie(!Lr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),s=se.useMemo(()=>({basename:l,navigator:o,static:a,unstable_useTransitions:i,future:{}}),[l,o,a,i]);typeof n=="string"&&(n=Un(n));let{pathname:u="/",search:p="",hash:d="",state:m=null,key:v="default"}=n,y=se.useMemo(()=>{let h=Pt(u,l);return h==null?null:{location:{pathname:h,search:p,hash:d,state:m,key:v},navigationType:r}},[l,u,p,d,m,v,r]);return Ze(y!=null,`<Router basename="${l}"> is not able to match the URL "${u}${p}${d}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:se.createElement(je.Provider,{value:s},se.createElement(Rr.Provider,{children:t,value:y}))}function Do({children:e,location:t}){return Dp(mi(e),t)}function mi(e,t=[]){let n=[];return se.Children.forEach(e,(r,o)=>{if(!se.isValidElement(r))return;let a=[...t,o];if(r.type===se.Fragment){n.push.apply(n,mi(r.props.children,a));return}ie(r.type===we,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ie(!r.props.index||!r.props.children,"An index route cannot have child routes.");let i={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=mi(r.props.children,a)),n.push(i)}),n}var fi="get",pi="application/x-www-form-urlencoded";function hi(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function xv(e){return hi(e)&&e.tagName.toLowerCase()==="button"}function bv(e){return hi(e)&&e.tagName.toLowerCase()==="form"}function Sv(e){return hi(e)&&e.tagName.toLowerCase()==="input"}function Ev(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function kv(e,t){return e.button===0&&(!t||t==="_self")&&!Ev(e)}var ci=null;function Cv(){if(ci===null)try{new FormData(document.createElement("form"),0),ci=!1}catch{ci=!0}return ci}var _v=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ws(e){return e!=null&&!_v.has(e)?(Ze(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pi}"`),null):e}function Nv(e,t){let n,r,o,a,i;if(bv(e)){let l=e.getAttribute("action");r=l?Pt(l,t):null,n=e.getAttribute("method")||fi,o=Ws(e.getAttribute("enctype"))||pi,a=new FormData(e)}else if(xv(e)||Sv(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||l.getAttribute("action");if(r=s?Pt(s,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||fi,o=Ws(e.getAttribute("formenctype"))||Ws(l.getAttribute("enctype"))||pi,a=new FormData(l,e),!Cv()){let{name:u,type:p,value:d}=e;if(p==="image"){let m=u?`${u}.`:"";a.append(`${m}x`,"0"),a.append(`${m}y`,"0")}else u&&a.append(u,d)}}else{if(hi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=fi,r=null,o=pi,i=e}return a&&o==="text/plain"&&(i=a,a=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:a,body:i}}var yy=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Pv={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Rv=/[&><\u2028\u2029]/g;function fp(e){return e.replace(Rv,t=>Pv[t])}function ou(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lv(e,t,n,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:t&&Pt(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function Dv(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){if(console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode&&import.meta.hot)throw n;return window.location.reload(),new Promise(()=>{})}}function Tv(e){return e!=null&&typeof e.page=="string"}function Ov(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Fv(e,t,n){let r=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let i=await Dv(a,n);return i.links?i.links():[]}return[]}));return jv(r.flat(1).filter(Ov).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function pp(e,t,n,r,o,a){let i=(s,u)=>n[u]?s.route.id!==n[u].route.id:!0,l=(s,u)=>n[u].pathname!==s.pathname||n[u].route.path?.endsWith("*")&&n[u].params["*"]!==s.params["*"];return a==="assets"?t.filter((s,u)=>i(s,u)||l(s,u)):a==="data"?t.filter((s,u)=>{let p=r.routes[s.route.id];if(!p||!p.hasLoader)return!1;if(i(s,u)||l(s,u))return!0;if(s.route.shouldRevalidate){let d=s.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function zv(e,t,{includeHydrateFallback:n}={}){return Mv(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function Mv(e){return[...new Set(e)]}function Iv(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function jv(e,t){let n=new Set,r=new Set(t);return e.reduce((o,a)=>{if(t&&!Tv(a)&&a.as==="script"&&a.href&&r.has(a.href))return o;let l=JSON.stringify(Iv(a));return n.has(l)||(n.add(l),o.push({key:l,link:a})),o},[])}function jp(){let e=q.useContext(Hn);return ou(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Hv(){let e=q.useContext(Pr);return ou(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var To=q.createContext(void 0);To.displayName="FrameworkContext";function Ap(){let e=q.useContext(To);return ou(e,"You must render this element inside a <HydratedRouter> element"),e}function Bv(e,t){let n=q.useContext(To),[r,o]=q.useState(!1),[a,i]=q.useState(!1),{onFocus:l,onBlur:s,onMouseEnter:u,onMouseLeave:p,onTouchStart:d}=t,m=q.useRef(null);q.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let h=f=>{f.forEach(c=>{i(c.isIntersecting)})},w=new IntersectionObserver(h,{threshold:.5});return m.current&&w.observe(m.current),()=>{w.disconnect()}}},[e]),q.useEffect(()=>{if(r){let h=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(h)}}},[r]);let v=()=>{o(!0)},y=()=>{o(!1),i(!1)};return n?e!=="intent"?[a,m,{}]:[a,m,{onFocus:Po(l,v),onBlur:Po(s,y),onMouseEnter:Po(u,v),onMouseLeave:Po(p,y),onTouchStart:Po(d,v)}]:[!1,m,{}]}function Po(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function $p({page:e,...t}){let{router:n}=jp(),r=q.useMemo(()=>Js(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?q.createElement(Vv,{page:e,matches:r,...t}):null}function Wv(e){let{manifest:t,routeModules:n}=Ap(),[r,o]=q.useState([]);return q.useEffect(()=>{let a=!1;return Fv(e,t,n).then(i=>{a||o(i)}),()=>{a=!0}},[e,t,n]),r}function Vv({page:e,matches:t,...n}){let r=st(),{future:o,manifest:a,routeModules:i}=Ap(),{basename:l}=jp(),{loaderData:s,matches:u}=Hv(),p=q.useMemo(()=>pp(e,t,u,a,r,"data"),[e,t,u,a,r]),d=q.useMemo(()=>pp(e,t,u,a,r,"assets"),[e,t,u,a,r]),m=q.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let h=new Set,w=!1;if(t.forEach(c=>{let g=a.routes[c.route.id];!g||!g.hasLoader||(!p.some(E=>E.route.id===c.route.id)&&c.route.id in s&&i[c.route.id]?.shouldRevalidate||g.hasClientLoader?w=!0:h.add(c.route.id))}),h.size===0)return[];let f=Lv(e,l,o.unstable_trailingSlashAwareDataRequests,"data");return w&&h.size>0&&f.searchParams.set("_routes",t.filter(c=>h.has(c.route.id)).map(c=>c.route.id).join(",")),[f.pathname+f.search]},[l,o.unstable_trailingSlashAwareDataRequests,s,r,a,p,t,e,i]),v=q.useMemo(()=>zv(d,a),[d,a]),y=Wv(d);return q.createElement(q.Fragment,null,m.map(h=>q.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...n})),v.map(h=>q.createElement("link",{key:h,rel:"modulepreload",href:h,...n})),y.map(({key:h,link:w})=>q.createElement("link",{key:h,nonce:n.nonce,...w})))}function Yv(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Qv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Qv&&(window.__reactRouterVersion="7.12.0")}catch{}function au({basename:e,children:t,unstable_useTransitions:n,window:r}){let o=O.useRef();o.current==null&&(o.current=mp({window:r,v5Compat:!0}));let a=o.current,[i,l]=O.useState({action:a.action,location:a.location}),s=O.useCallback(u=>{n===!1?l(u):O.startTransition(()=>l(u))},[n]);return O.useLayoutEffect(()=>a.listen(s),[a,s]),O.createElement(nu,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a,unstable_useTransitions:n})}function Up({basename:e,children:t,history:n,unstable_useTransitions:r}){let[o,a]=O.useState({action:n.action,location:n.location}),i=O.useCallback(l=>{r===!1?a(l):O.startTransition(()=>a(l))},[r]);return O.useLayoutEffect(()=>n.listen(i),[n,i]),O.createElement(nu,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:n,unstable_useTransitions:r})}Up.displayName="unstable_HistoryRouter";var Hp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yn=O.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:a,replace:i,state:l,target:s,to:u,preventScrollReset:p,viewTransition:d,unstable_defaultShouldRevalidate:m,...v},y){let{basename:h,unstable_useTransitions:w}=O.useContext(je),f=typeof u=="string"&&Hp.test(u),c=kp(u,h);u=c.to;let g=Pp(u,{relative:o}),[E,S,k]=Bv(r,v),x=Yp(u,{replace:i,state:l,target:s,preventScrollReset:p,relative:o,viewTransition:d,unstable_defaultShouldRevalidate:m,unstable_useTransitions:w});function N(I){t&&t(I),I.defaultPrevented||x(I)}let A=O.createElement("a",{...v,...k,href:c.absoluteURL||g,onClick:c.isExternal||a?t:N,ref:Yv(y,S),target:s,"data-discover":!f&&n==="render"?"true":void 0});return E&&!f?O.createElement(O.Fragment,null,A,O.createElement($p,{page:g})):A});yn.displayName="Link";var wn=O.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:a,to:i,viewTransition:l,children:s,...u},p){let d=Dr(i,{relative:u.relative}),m=st(),v=O.useContext(Pr),{navigator:y,basename:h}=O.useContext(je),w=v!=null&&Gp(d)&&l===!0,f=y.encodeLocation?y.encodeLocation(d).pathname:d.pathname,c=m.pathname,g=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;n||(c=c.toLowerCase(),g=g?g.toLowerCase():null,f=f.toLowerCase()),g&&h&&(g=Pt(g,h)||g);let E=f!=="/"&&f.endsWith("/")?f.length-1:f.length,S=c===f||!o&&c.startsWith(f)&&c.charAt(E)==="/",k=g!=null&&(g===f||!o&&g.startsWith(f)&&g.charAt(f.length)==="/"),x={isActive:S,isPending:k,isTransitioning:w},N=S?t:void 0,A;typeof r=="function"?A=r(x):A=[r,S?"active":null,k?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let I=typeof a=="function"?a(x):a;return O.createElement(yn,{...u,"aria-current":N,className:A,ref:p,style:I,to:i,viewTransition:l},typeof s=="function"?s(x):s)});wn.displayName="NavLink";var Bp=O.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:a,method:i=fi,action:l,onSubmit:s,relative:u,preventScrollReset:p,viewTransition:d,unstable_defaultShouldRevalidate:m,...v},y)=>{let{unstable_useTransitions:h}=O.useContext(je),w=Qp(),f=Kp(l,{relative:u}),c=i.toLowerCase()==="get"?"get":"post",g=typeof l=="string"&&Hp.test(l);return O.createElement("form",{ref:y,method:c,action:f,onSubmit:r?s:S=>{if(s&&s(S),S.defaultPrevented)return;S.preventDefault();let k=S.nativeEvent.submitter,x=k?.getAttribute("formmethod")||i,N=()=>w(k||S.currentTarget,{fetcherKey:t,method:x,navigate:n,replace:o,state:a,relative:u,preventScrollReset:p,viewTransition:d,unstable_defaultShouldRevalidate:m});h&&n!==!1?O.startTransition(()=>N()):N()},...v,"data-discover":!g&&e==="render"?"true":void 0})});Bp.displayName="Form";function Wp({getKey:e,storageKey:t,...n}){let r=O.useContext(To),{basename:o}=O.useContext(je),a=st(),i=tu();Jp({getKey:e,storageKey:t});let l=O.useMemo(()=>{if(!r||!e)return null;let u=Ks(a,i,o,e);return u!==a.key?u:null},[]);if(!r||r.isSpaMode)return null;let s=((u,p)=>{if(!window.history.state||!window.history.state.key){let d=Math.random().toString(32).slice(2);window.history.replaceState({key:d},"")}try{let m=JSON.parse(sessionStorage.getItem(u)||"{}")[p||window.history.state.key];typeof m=="number"&&window.scrollTo(0,m)}catch(d){console.error(d),sessionStorage.removeItem(u)}}).toString();return O.createElement("script",{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${s})(${fp(JSON.stringify(t||Qs))}, ${fp(JSON.stringify(l))})`}})}Wp.displayName="ScrollRestoration";function Vp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iu(e){let t=O.useContext(Hn);return ie(t,Vp(e)),t}function Kv(e){let t=O.useContext(Pr);return ie(t,Vp(e)),t}function Yp(e,{target:t,replace:n,state:r,preventScrollReset:o,relative:a,viewTransition:i,unstable_defaultShouldRevalidate:l,unstable_useTransitions:s}={}){let u=ut(),p=st(),d=Dr(e,{relative:a});return O.useCallback(m=>{if(kv(m,t)){m.preventDefault();let v=n!==void 0?n:Nr(p)===Nr(d),y=()=>u(e,{replace:v,state:r,preventScrollReset:o,relative:a,viewTransition:i,unstable_defaultShouldRevalidate:l});s?O.startTransition(()=>y()):y()}},[p,u,d,n,r,t,e,o,a,i,l,s])}var Jv=0,Gv=()=>`__${String(++Jv)}__`;function Qp(){let{router:e}=iu("useSubmit"),{basename:t}=O.useContext(je),n=gv(),r=e.fetch,o=e.navigate;return O.useCallback(async(a,i={})=>{let{action:l,method:s,encType:u,formData:p,body:d}=Nv(a,t);if(i.navigate===!1){let m=i.fetcherKey||Gv();await r(m,n,i.action||l,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:p,body:d,formMethod:i.method||s,formEncType:i.encType||u,flushSync:i.flushSync})}else await o(i.action||l,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:p,body:d,formMethod:i.method||s,formEncType:i.encType||u,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[r,o,t,n])}function Kp(e,{relative:t}={}){let{basename:n}=O.useContext(je),r=O.useContext(wt);ie(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),a={...Dr(e||".",{relative:t})},i=st();if(e==null){a.search=i.search;let l=new URLSearchParams(a.search),s=l.getAll("index");if(s.some(p=>p==="")){l.delete("index"),s.filter(d=>d).forEach(d=>l.append("index",d));let p=l.toString();a.search=p?`?${p}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:Wt([n,a.pathname])),Nr(a)}var Qs="react-router-scroll-positions",di={};function Ks(e,t,n,r){let o=null;return r&&(n!=="/"?o=r({...e,pathname:Pt(e.pathname,n)||e.pathname},t):o=r(e,t)),o==null&&(o=e.key),o}function Jp({getKey:e,storageKey:t}={}){let{router:n}=iu("useScrollRestoration"),{restoreScrollPosition:r,preventScrollReset:o}=Kv("useScrollRestoration"),{basename:a}=O.useContext(je),i=st(),l=tu(),s=Fp();O.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),Xv(O.useCallback(()=>{if(s.state==="idle"){let u=Ks(i,l,a,e);di[u]=window.scrollY}try{sessionStorage.setItem(t||Qs,JSON.stringify(di))}catch(u){Ze(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`)}window.history.scrollRestoration="auto"},[s.state,e,a,i,l,t])),typeof document<"u"&&(O.useLayoutEffect(()=>{try{let u=sessionStorage.getItem(t||Qs);u&&(di=JSON.parse(u))}catch{}},[t]),O.useLayoutEffect(()=>{let u=n?.enableScrollRestoration(di,()=>window.scrollY,e?(p,d)=>Ks(p,d,a,e):void 0);return()=>u&&u()},[n,a,e]),O.useLayoutEffect(()=>{if(r!==!1){if(typeof r=="number"){window.scrollTo(0,r);return}try{if(i.hash){let u=document.getElementById(decodeURIComponent(i.hash.slice(1)));if(u){u.scrollIntoView();return}}}catch{Ze(!1,`"${i.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}o!==!0&&window.scrollTo(0,0)}},[i,r,o]))}function Xv(e,t){let{capture:n}=t||{};O.useEffect(()=>{let r=n!=null?{capture:n}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,n])}function Gp(e,{relative:t}={}){let n=O.useContext(Gs);ie(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=iu("useViewTransitionState"),o=Dr(e,{relative:t});if(!n.isTransitioning)return!1;let a=Pt(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=Pt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ro(o.pathname,i)!=null||Ro(o.pathname,a)!=null}(function(){if(!document.getElementById("c62a888d9d62ae4e611fb1f1c11ec20b6be422d570d7e237577771d161e51220")){var e=document.createElement("style");e.id="c62a888d9d62ae4e611fb1f1c11ec20b6be422d570d7e237577771d161e51220",e.textContent=`/* GLOBAL RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* COLOR SYSTEM */
:root {
  --bg: #faf8f5; /* warm off-white */
  --bg-soft: #fff7ef; /* very soft beige */
  --text: #2f2a26; /* warm charcoal */
  --accent: #d57a66; /* soft terracotta */
  --accent-muted: #807b58; /* warm olive */
  --soft-blue: #2f3b81;
  --deep-blue: #1d2869;
  --border: rgba(80, 70, 60, 0.15);
  --radius: 12px;
  --shadow: 0 4px 14px rgba(80, 70, 60, 0.08);
  --font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  /* Warm black base */
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
`,document.head.appendChild(e)}})();var b=B(H());(function(){if(!document.getElementById("4df30cd10977c3dd4650bf5d8f8871fd499bde96b99924c59d53e648c4d93705")){var e=document.createElement("style");e.id="4df30cd10977c3dd4650bf5d8f8871fd499bde96b99924c59d53e648c4d93705",e.textContent=`/* Scoped styles for CompanyWebsite - No conflicts with global app.css */

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
`,document.head.appendChild(e)}})();function lu(){let{companyName:e}=Lo(),[t,n]=(0,b.useState)(null),[r,o]=(0,b.useState)([]),[a,i]=(0,b.useState)(!0),[l,s]=(0,b.useState)(null),[u,p]=(0,b.useState)(null),[d,m]=(0,b.useState)("services");if((0,b.useEffect)(()=>{e&&(async()=>{try{i(!0);let w=await fetch(`/api/companies/${e}`);if(!w.ok)throw new Error("Company not found");let f=await w.json();n(f.company),o(f.employees)}catch(w){s(w.message)}finally{i(!1)}})()},[e]),a)return b.default.createElement("div",{className:"website-loading"},b.default.createElement("div",{className:"spinner"}),b.default.createElement("p",null,"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."));if(l)return b.default.createElement("div",{className:"website-error"},b.default.createElement("h2",null,"\u{1F614} \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"),b.default.createElement("p",null,l));if(!t)return null;let v=r?.flatMap(h=>h.services?.map(w=>({...w,employee:h}))||[])||[],y=h=>h?parseFloat(h).toFixed(0):"0";return b.default.createElement("div",{className:"company-website"},b.default.createElement("header",{className:"site-header"},b.default.createElement("div",{className:"header-container"},b.default.createElement("div",{className:"logo-section"},t.logo&&b.default.createElement("img",{src:"/images"+t.logo,alt:t.name,className:"header-logo"}),b.default.createElement("h1",null,t.name)),b.default.createElement("button",{className:"book-now-btn"},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F"))),b.default.createElement("section",{className:"hero-banner"},b.default.createElement("div",{className:"hero-content-wrapper"},b.default.createElement("div",{className:"hero-text"},b.default.createElement("h1",{className:"hero-title"},t.name),t.address&&b.default.createElement("p",{className:"hero-location"},"\u{1F4CD} ",t.address.street_line1,", ",t.address.city),b.default.createElement("div",{className:"hero-actions"},b.default.createElement("button",{className:"primary-btn",onClick:()=>m("services")},"\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0438"))))),b.default.createElement("nav",{className:"tab-navigation"},b.default.createElement("div",{className:"tab-container"},b.default.createElement("button",{className:`tab-btn ${d==="services"?"active":""}`,onClick:()=>m("services")},"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),b.default.createElement("button",{className:`tab-btn ${d==="team"?"active":""}`,onClick:()=>m("team")},"\u041A\u043E\u043C\u0430\u043D\u0434\u0430"),b.default.createElement("button",{className:`tab-btn ${d==="about"?"active":""}`,onClick:()=>m("about")},"\u041F\u0440\u043E \u043D\u0430\u0441"),b.default.createElement("button",{className:`tab-btn ${d==="gallery"?"active":""}`,onClick:()=>m("gallery")},"\u0413\u0430\u043B\u0435\u0440\u0435\u044F"))),b.default.createElement("main",{className:"main-content"},b.default.createElement("div",{className:"content-container"},d==="services"&&b.default.createElement("section",{className:"services-content"},b.default.createElement("h2",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),v.length>0?b.default.createElement("div",{className:"service-list"},v.map((h,w)=>b.default.createElement("div",{key:w,className:"service-item"},b.default.createElement("div",{className:"service-info"},b.default.createElement("h3",{className:"service-name"},h.name),b.default.createElement("p",{className:"service-description"},h.description),b.default.createElement("div",{className:"service-meta"},b.default.createElement("span",{className:"service-duration"},h.duration," \u0445\u0432"),b.default.createElement("span",{className:"service-provider"},"\u0437 ",h.employee.first_name," ",h.employee.last_name))),b.default.createElement("div",{className:"service-booking"},b.default.createElement("div",{className:"service-price"},y(h.price)," \u0433\u0440\u043D"),b.default.createElement("button",{className:"book-service-btn",onClick:()=>p(h)},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F"))))):b.default.createElement("p",{className:"empty-message"},"\u041D\u0430\u0440\u0430\u0437\u0456 \u043D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u043F\u043E\u0441\u043B\u0443\u0433")),d==="team"&&b.default.createElement("section",{className:"team-content"},b.default.createElement("h2",null,"\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430"),r.length>0?b.default.createElement("div",{className:"team-list"},r.map(h=>b.default.createElement("div",{key:h.id,className:"team-item"},b.default.createElement("div",{className:"team-member-info"},b.default.createElement("div",{className:"member-photo"},h.photo?b.default.createElement("img",{src:h.photo,alt:`${h.first_name} ${h.last_name}`}):b.default.createElement("div",{className:"photo-placeholder"},h.first_name[0],h.last_name[0])),b.default.createElement("div",{className:"member-details"},b.default.createElement("h3",null,h.first_name," ",h.last_name),h.description&&b.default.createElement("p",{className:"member-bio"},h.description),h.services&&h.services.length>0&&b.default.createElement("div",{className:"member-services-list"},b.default.createElement("p",{className:"services-label"},"\u0421\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F:"),b.default.createElement("ul",null,h.services.map((w,f)=>b.default.createElement("li",{key:f},w.name))))))))):b.default.createElement("p",{className:"empty-message"},"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u044F")),d==="about"&&b.default.createElement("section",{className:"about-content"},b.default.createElement("h2",null,"\u041F\u0440\u043E \u043D\u0430\u0441"),b.default.createElement("div",{className:"about-details"},b.default.createElement("div",{className:"about-description"},b.default.createElement("h3",null,"\u041E\u043F\u0438\u0441"),b.default.createElement("p",null,t.description||"\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457!")),b.default.createElement("div",{className:"contact-details"},b.default.createElement("h3",null,"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"),t.address&&b.default.createElement("div",{className:"contact-row"},b.default.createElement("span",{className:"contact-label"},"\u0410\u0434\u0440\u0435\u0441\u0430"),b.default.createElement("span",{className:"contact-value"},t.address.street_line1,t.address.street_line2&&`, ${t.address.street_line2}`,b.default.createElement("br",null),t.address.city,", ",t.address.region," ",t.address.postal)),t.phone&&b.default.createElement("div",{className:"contact-row"},b.default.createElement("span",{className:"contact-label"},"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),b.default.createElement("span",{className:"contact-value"},b.default.createElement("a",{href:`tel:${t.phone}`},t.phone))),t.email&&b.default.createElement("div",{className:"contact-row"},b.default.createElement("span",{className:"contact-label"},"Email"),b.default.createElement("span",{className:"contact-value"},b.default.createElement("a",{href:`mailto:${t.email}`},t.email))),t.website&&b.default.createElement("div",{className:"contact-row"},b.default.createElement("span",{className:"contact-label"},"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"),b.default.createElement("span",{className:"contact-value"},b.default.createElement("a",{href:t.website,target:"_blank",rel:"noopener noreferrer"},t.website)))))),d==="gallery"&&b.default.createElement("section",{className:"gallery-content"},b.default.createElement("h2",null,"\u0413\u0430\u043B\u0435\u0440\u0435\u044F"),t.images&&t.images.length>0?b.default.createElement("div",{className:"gallery-grid"},t.images.map((h,w)=>b.default.createElement("div",{key:w,className:"gallery-item"},b.default.createElement("img",{src:"/images"+h,alt:`\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u044F ${w+1}`}),h&&b.default.createElement("p",{className:"gallery-caption"},w+1)))):b.default.createElement("p",{className:"empty-message"},"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456")))),b.default.createElement("footer",{className:"site-footer"},b.default.createElement("div",{className:"footer-container"},b.default.createElement("p",null,"\xA9 ",new Date().getFullYear()," ",t.name,". \u0412\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u043E."))),u&&b.default.createElement("div",{className:"modal-overlay",onClick:()=>p(null)},b.default.createElement("div",{className:"modal-content",onClick:h=>h.stopPropagation()},b.default.createElement("button",{className:"modal-close",onClick:()=>p(null)},"\xD7"),b.default.createElement("h3",null,"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 ",u.name),b.default.createElement("p",{className:"modal-description"},u.description),b.default.createElement("div",{className:"modal-details"},b.default.createElement("div",{className:"detail-item"},b.default.createElement("span",null,"\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C:"),b.default.createElement("strong",null,u.duration," \u0445\u0432")),b.default.createElement("div",{className:"detail-item"},b.default.createElement("span",null,"\u0426\u0456\u043D\u0430:"),b.default.createElement("strong",null,u.price," \u0433\u0440\u043D")),b.default.createElement("div",{className:"detail-item"},b.default.createElement("span",null,"\u041C\u0430\u0439\u0441\u0442\u0435\u0440:"),b.default.createElement("strong",null,u.employee.first_name," ",u.employee.last_name))),b.default.createElement("p",{className:"coming-soon"},"\u0424\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u0435 \u0434\u043E\u0434\u0430\u043D\u0438\u0439 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C"),b.default.createElement("button",{className:"modal-btn",onClick:()=>p(null)},"\u0417\u0430\u043A\u0440\u0438\u0442\u0438"))))}var re=B(H());var _=B(H());(function(){if(!document.getElementById("359a90f8c729210dbbfb096928392417ed7d6dd27b14727501cfa65f4edc30ad")){var e=document.createElement("style");e.id="359a90f8c729210dbbfb096928392417ed7d6dd27b14727501cfa65f4edc30ad",e.textContent=`.form__error {
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
  border-radius: 50%;
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
`,document.head.appendChild(e)}})();function Oo({company:e,onSave:t,onCancel:n,isModal:r=!1}){let o=ut(),[a,i]=(0,_.useState)({name:"",email:"",website:"",phone:"",description:"",city:"",country:"",postal:"",region:"",street_line1:"",street_line2:""}),[l,s]=(0,_.useState)(null),[u,p]=(0,_.useState)(null),[d,m]=(0,_.useState)(null),[v,y]=(0,_.useState)(""),[h,w]=(0,_.useState)([]),[f,c]=(0,_.useState)([]),[g,E]=(0,_.useState)([]),[S,k]=(0,_.useState)({});(0,_.useEffect)(()=>{if(e){if(i({name:e.name||"",email:e.email||"",website:e.website||"",phone:e.phone||"",description:e.description||"",city:e.address?.city||"",country:e.address?.country||"",postal:e.address?.postal||"",region:e.address?.region||"",street_line1:e.address?.street_line1||"",street_line2:e.address?.street_line2||""}),e.images&&e.images.length>0){let U=e.images.find(W=>W.type==="logo");U&&(p(U.image_url),m(U.id))}e.images&&e.images.length>0&&w(e.images.filter(U=>U.type!=="logo"))}},[e]);let x=U=>{i({...a,[U.target.name]:U.target.value}),k(W=>({...W,[U.target.name]:null}))},N=U=>{let W=U.target.files[0];if(W){s(W);let ve=new FileReader;ve.onloadend=()=>{p(ve.result)},ve.readAsDataURL(W)}},A=async()=>{if(!d){s(null),p(null),y("");return}if(window.confirm("\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F?"))try{(await fetch(`/api/images/${d}`,{method:"DELETE",credentials:"include"})).ok?(s(null),p(null),m(null),y("")):alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443")}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443")}},I=U=>{let W=Array.from(U.target.files);W.length>0&&(c([...f,...W]),W.forEach(ve=>{let Dt=new FileReader;Dt.onloadend=()=>{E(bt=>[...bt,{file:ve,preview:Dt.result}])},Dt.readAsDataURL(ve)}))},me=async U=>{if(window.confirm("\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F?"))try{(await fetch(`/api/images/${U}`,{method:"DELETE",credentials:"include"})).ok?w(h.filter(ve=>ve.id!==U)):alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F")}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F")}},Ve=U=>{E(g.filter((W,ve)=>ve!==U)),c(f.filter((W,ve)=>ve!==U))},Qt=async U=>{U.preventDefault();let W=new FormData;W.append("company[name]",a.name),W.append("company[email]",a.email),W.append("company[website]",a.website),W.append("company[phone]",a.phone),W.append("company[description]",a.description),W.append("address[city]",a.city),W.append("address[country]",a.country),W.append("address[postal]",a.postal),W.append("address[region]",a.region),W.append("address[street_line1]",a.street_line1),W.append("address[street_line2]",a.street_line2),l?W.append("logo",l):v&&W.append("logo_cached",v),f.forEach(Gn=>{W.append("images[]",Gn)});let ve=e?`/api/companies/${e.id}`:"/api/companies",bt=await fetch(ve,{method:e?"PUT":"POST",credentials:"include",body:W}),kn=await bt.json();bt.ok?r&&t?t(kn):o(`/companies/${kn.id}/dashboard`):k(kn.errors||{})},X=U=>S[U]?.message;return _.default.createElement("div",{className:r?"company-form-modal":"company-form container"},_.default.createElement("h1",null,e?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E"),_.default.createElement("form",{onSubmit:Qt,encType:"multipart/form-data"},_.default.createElement("section",{className:"form-section"},_.default.createElement("h3",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),X("name")&&_.default.createElement("div",{className:"field-error"},X("name")),_.default.createElement("input",{name:"name",value:a.name,onChange:x,placeholder:"\u041D\u0430\u0437\u0432\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"}),X("email")&&_.default.createElement("div",{className:"field-error"},X("email")),_.default.createElement("input",{name:"email",value:a.email,onChange:x,placeholder:"Email"}),X("website")&&_.default.createElement("div",{className:"field-error"},X("website")),_.default.createElement("input",{name:"website",value:a.website,onChange:x,placeholder:"\u0412\u0435\u0431 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430"}),X("phone")&&_.default.createElement("div",{className:"field-error"},X("phone")),_.default.createElement("input",{name:"phone",value:a.phone,onChange:x,placeholder:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"}),X("description")&&_.default.createElement("div",{className:"field-error"},X("description")),_.default.createElement("textarea",{name:"description",value:a.description,onChange:x,placeholder:"\u041E\u043F\u0438\u0441 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456"})),_.default.createElement("section",{className:"form-section"},_.default.createElement("h3",null,"\u0410\u0434\u0440\u0435\u0441\u0430"),X("city")&&_.default.createElement("div",{className:"field-error"},X("city")),_.default.createElement("input",{name:"city",value:a.city,onChange:x,placeholder:"\u041C\u0456\u0441\u0442\u043E"}),X("country")&&_.default.createElement("div",{className:"field-error"},X("country")),_.default.createElement("input",{name:"country",value:a.country,onChange:x,placeholder:"\u041A\u0440\u0430\u0457\u043D\u0430"}),X("postal")&&_.default.createElement("div",{className:"field-error"},X("postal")),_.default.createElement("input",{name:"postal",value:a.postal,onChange:x,placeholder:"\u041F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441"}),X("region")&&_.default.createElement("div",{className:"field-error"},X("region")),_.default.createElement("input",{name:"region",value:a.region,onChange:x,placeholder:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C"}),X("street_line1")&&_.default.createElement("div",{className:"field-error"},X("street_line1")),_.default.createElement("input",{name:"street_line1",value:a.street_line1,onChange:x,placeholder:"\u0410\u0434\u0440\u0435\u0441\u0430 1"}),X("street_line2")&&_.default.createElement("div",{className:"field-error"},X("street_line2")),_.default.createElement("input",{name:"street_line2",value:a.street_line2,onChange:x,placeholder:"\u0410\u0434\u0440\u0435\u0441\u0430 2"})),_.default.createElement("section",{className:"form-section"},_.default.createElement("h3",null,"\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"),u&&_.default.createElement("div",{className:"logo-preview"},_.default.createElement("img",{src:l?u:`/images${u}`,alt:"Company logo preview"}),_.default.createElement("button",{type:"button",className:"btn-remove-logo",onClick:A},"\u2715 \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F")),_.default.createElement("div",{className:"file-input-wrapper"},_.default.createElement("input",{type:"file",id:"logo-input",name:"logo",accept:"image/*",onChange:N,className:"file-input"}),_.default.createElement("label",{htmlFor:"logo-input",className:"file-input-label"},u?"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F":"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F"),_.default.createElement("span",{className:"file-input-hint"},"PNG, JPG, GIF \u0434\u043E 5MB")),v&&_.default.createElement("input",{type:"hidden",name:"logo_cached",value:v}),X("logo")&&_.default.createElement("div",{className:"field-error"},X("logo"))),_.default.createElement("section",{className:"form-section"},_.default.createElement("div",{className:"images-header"},_.default.createElement("h3",null,"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"),_.default.createElement("label",{htmlFor:"images-input",className:"btn-add-image"},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u0444\u043E\u0442\u043E")),_.default.createElement("input",{type:"file",id:"images-input",accept:"image/*",multiple:!0,onChange:I,className:"file-input",style:{display:"none"}}),h.length>0&&_.default.createElement("div",{className:"images-grid"},_.default.createElement("h4",{className:"images-subtitle"},"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u0456 \u0444\u043E\u0442\u043E"),_.default.createElement("div",{className:"images-list"},h.map(U=>_.default.createElement("div",{key:U.id,className:"image-item"},_.default.createElement("img",{src:`/images${U.image_url}`,alt:U.image_name||"Company image"}),_.default.createElement("button",{type:"button",className:"btn-remove-image",onClick:()=>me(U.id),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u2715"),_.default.createElement("span",{className:"image-name"},U.image_name))))),g.length>0&&_.default.createElement("div",{className:"images-grid"},_.default.createElement("h4",{className:"images-subtitle"},"\u041D\u043E\u0432\u0456 \u0444\u043E\u0442\u043E (\u0431\u0443\u0434\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E)"),_.default.createElement("div",{className:"images-list"},g.map((U,W)=>_.default.createElement("div",{key:W,className:"image-item new-image"},_.default.createElement("img",{src:U.preview,alt:`Preview ${W+1}`}),_.default.createElement("button",{type:"button",className:"btn-remove-image",onClick:()=>Ve(W),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u2715"),_.default.createElement("span",{className:"image-name"},U.file.name))))),h.length===0&&g.length===0&&_.default.createElement("div",{className:"empty-images"},_.default.createElement("p",null,"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u0449\u0435 \u043D\u0435 \u0434\u043E\u0434\u0430\u043D\u0456"),_.default.createElement("label",{htmlFor:"images-input",className:"btn-add-first-image"},"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0435\u0440\u0448\u0435 \u0444\u043E\u0442\u043E")),X("images")&&_.default.createElement("div",{className:"field-error"},X("images"))),_.default.createElement("div",{className:"form-actions"},r&&n&&_.default.createElement("button",{type:"button",onClick:n},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),_.default.createElement("button",{type:"submit"},e?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E"))))}var F=B(H());var ge=B(H());function Fo({open:e,employee:t,service:n,onClose:r,onSaved:o}){let[a,i]=(0,ge.useState)({name:"",description:"",price:"",duration:30}),[l,s]=(0,ge.useState)(!1),[u,p]=(0,ge.useState)(null),[d,m]=(0,ge.useState)(null);if((0,ge.useEffect)(()=>{i(n?{name:n.name||"",description:n.description||"",price:n.price||"",duration:n.duration||30}:{name:"",description:"",price:"",duration:30})},[n,e]),!e)return null;let v=async()=>{s(!0),p(null);let h={...a,employee_id:t.id},w=n?`/api/services/${n.id}`:"/api/services",f=n?"PUT":"POST";try{let c=await fetch(w,{method:f,credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)});if(!c.ok)throw new Error(await c.text());let g=await c.json(),E=n?`Service ${g.name} successfully updated`:`Service ${g.name} successfully created`;m(E),setTimeout(()=>{m(null),o(g),r()},1e3)}catch(c){p(c.message||"Failed to save service")}finally{s(!1)}},y=async()=>{if(n&&window.confirm(`Are you sure you want to delete ${n.name}?`)){s(!0),p(null);try{let h=await fetch(`/api/services/${n.id}`,{method:"DELETE",credentials:"include"});if(!h.ok)throw new Error(await h.text());m("Service deleted successfully"),setTimeout(()=>{m(null),o(null),r()},1e3)}catch(h){p(h.message||"Failed to delete service")}finally{s(!1)}}};return ge.default.createElement("div",{className:"confirm-overlay",onClick:r},ge.default.createElement("div",{className:"glass-modal",onClick:h=>h.stopPropagation()},ge.default.createElement("h3",null,n?"Edit Service":"Add Service"),u&&ge.default.createElement("div",{className:"form__error"},u),d&&ge.default.createElement("div",{className:"form__success"},d),ge.default.createElement("input",{placeholder:"Name",value:a.name,onChange:h=>i({...a,name:h.target.value}),disabled:l}),ge.default.createElement("textarea",{placeholder:"Description",value:a.description,onChange:h=>i({...a,description:h.target.value}),disabled:l}),ge.default.createElement("input",{type:"number",placeholder:"Price",value:a.price,onChange:h=>i({...a,price:h.target.value}),disabled:l}),ge.default.createElement("input",{type:"number",step:15,min:15,placeholder:"Duration (min)",value:a.duration,onChange:h=>i({...a,duration:parseInt(h.target.value)}),disabled:l}),ge.default.createElement("div",{className:"modal-actions"},ge.default.createElement("button",{onClick:r,disabled:l},"Cancel"),n&&ge.default.createElement("button",{className:"danger",onClick:y,disabled:l},"Delete"),ge.default.createElement("button",{className:"apply",onClick:v,disabled:l},n?"Update":"Create"))))}function Tr({role:e,employee:t,onSave:n,onCancel:r,isModal:o=!1}){let a=ut(),[i,l]=(0,F.useState)({first_name:"",last_name:"",description:"",email:"",phone:"",password:"",role:e==="admin"?1:0}),[s,u]=(0,F.useState)({}),[p,d]=(0,F.useState)([]),[m,v]=(0,F.useState)(!1),[y,h]=(0,F.useState)(null);(0,F.useEffect)(()=>{t&&(l({first_name:t.first_name||"",last_name:t.last_name||"",description:t.description||"",email:t.email||"",phone:t.phone||"",password:"",role:t.role??(e==="admin"?1:0)}),d(t.services||[]))},[t,e]);let w=x=>{let N=x.target.name==="role"?parseInt(x.target.value):x.target.value;l({...i,[x.target.name]:N}),u(A=>({...A,[x.target.name]:null}))},f=async x=>{x.preventDefault();let N={employee:{first_name:i.first_name,last_name:i.last_name,description:i.description,email:i.email,phone:i.phone,role:i.role}};i.password&&(N.employee.password=i.password);let A=t?`/api/employees/${t.id}`:"/api/employees",me=await fetch(A,{method:t?"PUT":"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)});if(me.ok){let Ve=await me.json();o&&n?n({...Ve,services:p}):a("/companies/welcome")}else{let Ve=await me.json();u(Ve.errors||{})}},c=()=>{h(null),v(!0)},g=x=>{h(x),v(!0)},E=async x=>{if(window.confirm(`\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443 "${x.name}"?`))try{let N=await fetch(`/api/services/${x.id}`,{method:"DELETE",credentials:"include"});if(!N.ok)throw new Error(await N.text());d(p.filter(A=>A.id!==x.id))}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438")}},S=x=>{d(x===null?p.filter(N=>N.id!==y.id):y?p.map(N=>N.id===x.id?x:N):[...p,x]),h(null)},k=x=>s[x]?.message;return F.default.createElement("div",{className:o?"employee-form-modal":"employee-form container"},F.default.createElement("h1",null,t?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"," ",i.role===1?"\u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430":"\u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),F.default.createElement("form",{onSubmit:f},F.default.createElement("section",{className:"form-section"},F.default.createElement("h3",null,"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),k("first_name")&&F.default.createElement("div",{className:"field-error"},k("first_name")),F.default.createElement("input",{name:"first_name",value:i.first_name,onChange:w,placeholder:"\u0406\u043C\u02BC\u044F"}),k("last_name")&&F.default.createElement("div",{className:"field-error"},k("last_name")),F.default.createElement("input",{name:"last_name",value:i.last_name,onChange:w,placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),k("email")&&F.default.createElement("div",{className:"field-error"},k("email")),F.default.createElement("input",{name:"email",type:"email",value:i.email,onChange:w,placeholder:"Email"}),k("phone")&&F.default.createElement("div",{className:"field-error"},k("phone")),F.default.createElement("input",{name:"phone",value:i.phone,onChange:w,placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),k("password")&&F.default.createElement("div",{className:"field-error"},k("password")),F.default.createElement("input",{name:"password",type:"password",value:i.password,onChange:w,placeholder:t?"\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u0437\u0430\u043B\u0438\u0448\u0442\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u043C, \u0449\u043E\u0431 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438)":"\u041F\u0430\u0440\u043E\u043B\u044C",required:!t}),k("description")&&F.default.createElement("div",{className:"field-error"},k("description")),F.default.createElement("textarea",{name:"description",value:i.description,onChange:w,placeholder:"\u041E\u043F\u0438\u0441"}),k("role")&&F.default.createElement("div",{className:"field-error"},k("role")),F.default.createElement("label",{htmlFor:"role"},"\u0420\u043E\u043B\u044C"),F.default.createElement("select",{id:"role",name:"role",value:i.role,onChange:w,required:!0},F.default.createElement("option",{value:0},"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A"),F.default.createElement("option",{value:1},"\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440"))),t&&F.default.createElement("section",{className:"form-section services-section"},F.default.createElement("div",{className:"services-header"},F.default.createElement("h3",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),F.default.createElement("button",{type:"button",className:"btn-add-service",onClick:c},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443")),p.length>0?F.default.createElement("div",{className:"services-grid"},p.map(x=>F.default.createElement("div",{key:x.id,className:"service-card"},F.default.createElement("div",{className:"service-card-header"},F.default.createElement("h4",null,x.name),F.default.createElement("div",{className:"service-card-actions"},F.default.createElement("button",{type:"button",className:"btn-icon-edit",onClick:()=>g(x),title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"},"\u270E"),F.default.createElement("button",{type:"button",className:"btn-icon-delete",onClick:()=>E(x),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u{1F5D1}"))),F.default.createElement("p",{className:"service-description"},x.description),F.default.createElement("div",{className:"service-footer"},F.default.createElement("span",{className:"service-price"},x.price," \u0433\u0440\u043D"),F.default.createElement("span",{className:"service-duration"},x.duration," \u0445\u0432"))))):F.default.createElement("div",{className:"empty-services"},F.default.createElement("p",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u0449\u0435 \u043D\u0435 \u0434\u043E\u0434\u0430\u043D\u0456"),F.default.createElement("button",{type:"button",className:"btn-add-first-service",onClick:c},"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0435\u0440\u0448\u0443 \u043F\u043E\u0441\u043B\u0443\u0433\u0443"))),F.default.createElement("div",{className:"form-actions"},o&&r&&F.default.createElement("button",{type:"button",onClick:r},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),F.default.createElement("button",{type:"submit"},t?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"))),t&&F.default.createElement(Fo,{open:m,employee:t,service:y,onClose:()=>{v(!1),h(null)},onSaved:S}))}var Rt=B(H());(function(){if(!document.getElementById("b9644920dd4b82f30f246dfd1f69aee7bf9f5599fdae5c8b8a399e9acdd67c6f")){var e=document.createElement("style");e.id="b9644920dd4b82f30f246dfd1f69aee7bf9f5599fdae5c8b8a399e9acdd67c6f",e.textContent=`.login {
  max-width: 380px;
  margin: 0 auto;
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
`,document.head.appendChild(e)}})();function zo(){let[e,t]=(0,Rt.useState)(""),n=ut();async function r(o){o.preventDefault(),t("");let a=o.target.email.value,i=o.target.password.value;try{let l=await fetch("/api/employees/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:i})});if(!l.ok){t("\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 email \u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C");return}let s=await l.json();console.log(s.company_id),s.company_id?n(`/companies/${s.company_id}/dashboard`):n("/companies/new")}catch(l){console.error(l),t("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u2019\u0454\u0434\u043D\u0430\u043D\u043D\u044F \u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C")}}return Rt.default.createElement("div",{className:"login container"},Rt.default.createElement("h1",{className:"login__title"},"\u0412\u0445\u0456\u0434"),e&&Rt.default.createElement("div",{className:"login__error"},e),Rt.default.createElement("form",{className:"login__form",onSubmit:r},Rt.default.createElement("input",{type:"email",placeholder:"Email",name:"email",required:!0}),Rt.default.createElement("input",{type:"password",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",name:"password",required:!0}),Rt.default.createElement("button",{type:"submit",className:"btn"},"\u0423\u0432\u0456\u0439\u0442\u0438")))}var su=B(H());function uu(){return su.default.createElement("div",null,su.default.createElement("h1",null,"404 CompanyNotFound"))}var Oe=B(H());var Vt=B(H());(function(){if(!document.getElementById("a127da0de2169adcba038b037c01109c27901a050a4a9ac5b50bf49ff645976e")){var e=document.createElement("style");e.id="a127da0de2169adcba038b037c01109c27901a050a4a9ac5b50bf49ff645976e",e.textContent=`.sidebar {
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
`,document.head.appendChild(e)}})();function cu({companyName:e,id:t}){return Vt.default.createElement("aside",{className:"sidebar"},Vt.default.createElement("h2",{className:"sidebar__logo"},e),Vt.default.createElement("nav",{className:"sidebar__nav"},Vt.default.createElement(wn,{to:`/companies/${t}/dashboard`},"Dashboard"),Vt.default.createElement(wn,{to:`/companies/${t}/employees`},"Employees"),Vt.default.createElement(wn,{to:`/companies/${t}/clients`},"Clients"),Vt.default.createElement(wn,{to:`/companies/${t}/edit`},"Company"),Vt.default.createElement(wn,{to:`/companies/${t}/settings`},"Settings")))}var Bn=B(H());(function(){if(!document.getElementById("a675d0013b35ba43c4e7f713f899b0aef50b34428c621f79aafe309f9d5b2c29")){var e=document.createElement("style");e.id="a675d0013b35ba43c4e7f713f899b0aef50b34428c621f79aafe309f9d5b2c29",e.textContent=`/* TopBar container */
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
`,document.head.appendChild(e)}})();function du({userName:e}){return Bn.default.createElement("header",{className:"topbar"},Bn.default.createElement("div",{className:"topbar__left"},Bn.default.createElement("h1",null,e)),Bn.default.createElement("div",{className:"topbar__right"},Bn.default.createElement("span",{className:"topbar__user"}),Bn.default.createElement("button",{onClick:async()=>{await fetch("/api/employees/logout",{method:"POST",credentials:"include"}),window.location.href="/companies/welcome"},className:"logout-btn"},"Logout")))}var $=B(H());var Yt=B(H());function gi({timeSlot:e}){let t=s=>s instanceof Date?s:new Date(s),n=t(e.start_time),r=t(e.end_time),o=(r-n)/(1e3*60*60),a=(r-n)/(1e3*60),i=n.getMinutes(),l=e.client?.first_name;return Yt.default.createElement("div",{className:`time-slot-block ${e.state}`,style:{position:"absolute",top:`${i/60*100}%`,height:`${o*100}%`,left:0,right:0}},l?Yt.default.createElement(Yt.default.Fragment,null,Yt.default.createElement("div",{className:"client-name"},l),Yt.default.createElement("div",{className:"time-label"},e.service_name," (",a," min)")):Yt.default.createElement(Yt.default.Fragment,null,Yt.default.createElement("div",null,e.state)))}var et=B(H()),tm=B(H());var qp=Array.from({length:24},(e,t)=>t),xt=e=>e?new Date(e.replace(" ","T").replace(" -","-")):null,Lt=e=>{if(!e)return null;let t=n=>String(n).padStart(2,"0");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":00"},Mo=(e,t)=>{let n=Wn(e);return t.filter(r=>{let o=Or(r?.effective_date),a=Or(r?.end_date);return!(o&&o>n||a&&a<n)}).sort((r,o)=>Or(o?.effective_date)-Or(r?.effective_date))[0]||null},Io=(e,t,n,r)=>e<r&&n<t;var Wn=e=>{let t=new Date(e);return t.setHours(0,0,0,0),t},Vn=(e,t,n)=>{let r=new Date(e);return r.setHours(t,n,0,0),r},xn=(e,t)=>{let n=new Date(e);return n.setDate(n.getDate()+t),n},vi=e=>e?xt(e).getHours():null,Zv=(e,t=[])=>{if(!t.length)return!1;let r=(e.getDay()+6)%7;return t.includes(r)},Zp=(e,t,n)=>e>=t&&e<n;var Yn=(e,t)=>new Date(e.getTime()+t*60*1e3);var Or=e=>{if(!e)return null;let[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},qv=({day:e,hour:t,window:n})=>{if(!n||e<Wn(new Date))return!1;let r=Or(n.effective_date),o=Or(n.end_date);if(r&&r>e||o&&o<e||Zv(e,n.weekends))return!1;let a=vi(n.start_time),i=vi(n.end_time);if(!Zp(t,a,i))return!1;let l=vi(n.break_from),s=vi(n.break_to);return!Zp(t,l,s)},em=({day:e,hour:t,windows:n})=>{let r=Mo(e,n);return r?qv({day:e,hour:t,window:r}):!1};var bn=e=>{if(!e)return"";let t=new Date(e);return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`},Sn=(e,t)=>{let[n,r]=t.split(":").map(Number),o=new Date(e);return o.setHours(n,r,0,0),Lt(o)};var j=B(H());var En=B(H());(function(){if(!document.getElementById("016eff5b894d8467c8ab482e5e63306ffab800f5cd19b0509fbb6548608fa56e")){var e=document.createElement("style");e.id="016eff5b894d8467c8ab482e5e63306ffab800f5cd19b0509fbb6548608fa56e",e.textContent=`.confirm-overlay {
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
`,document.head.appendChild(e)}})();function jo({open:e,title:t="Are you sure?",message:n="This action cannot be undone.",confirmText:r="Yes",cancelText:o="Cancel",onConfirm:a,onCancel:i}){return e?En.default.createElement("div",{className:"confirm-overlay",onClick:i},En.default.createElement("div",{className:"confirm-modal",onClick:l=>l.stopPropagation()},En.default.createElement("h3",null,t),En.default.createElement("p",null,n),En.default.createElement("div",{className:"confirm-actions"},En.default.createElement("button",{className:"btn cancel",onClick:i},o),En.default.createElement("button",{className:"btn danger",onClick:a},r)))):null}(function(){if(!document.getElementById("98b4fbe3096ef325ff4a3b26beed9b76a8283f32b9e9e50a08673263ce04bde0")){var e=document.createElement("style");e.id="98b4fbe3096ef325ff4a3b26beed9b76a8283f32b9e9e50a08673263ce04bde0",e.textContent=`.weekday-grid {
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
`,document.head.appendChild(e)}})();function Ao({open:e,employee:t,window:n,onClose:r,onSaved:o}){let[a,i]=(0,j.useState)({start_time:"",end_time:"",break_from:"",break_to:"",weekends:[],effective_date:new Date().toISOString().slice(0,10),end_date:""}),[l,s]=(0,j.useState)(!1),[u,p]=(0,j.useState)(null),[d,m]=(0,j.useState)(null),v=[{id:0,label:"\u041F\u043D"},{id:1,label:"\u0412\u0442"},{id:2,label:"\u0421\u0440"},{id:3,label:"\u0427\u0442"},{id:4,label:"\u041F\u0442"},{id:5,label:"\u0421\u0431"},{id:6,label:"\u041D\u0434"}],[y,h]=(0,j.useState)(!1),[w,f]=(0,j.useState)({effective_date:"",end_date:""});(0,j.useEffect)(()=>{e&&(n?(i({start_time:n.start_time||"",end_time:n.end_time||"",break_from:n.break_from||"",break_to:n.break_to||"",weekends:Array.isArray(n.weekends)?n.weekends:[],effective_date:n.effective_date||"",end_date:n.end_date||""}),f({effective_date:n.effective_date?.slice(0,10)||"",end_date:n.end_date?.slice(0,10)||""})):i(c))},[n,e]);let c={start_time:"",end_time:"",break_from:"",break_to:"",weekends:[],effective_date:new Date().toISOString().slice(0,10),end_date:""};if((0,j.useEffect)(()=>{p(null),m(null)},[e,n]),!e)return null;let g=async()=>{s(!0),p(null);let S={...a,employee_id:t.id,id:n?.id};try{let k=await fetch("/api/windows/upsert",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(S)});if(!k.ok)throw new Error(await k.text());let x=await k.json();m(n?"\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E":"\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E"),setTimeout(()=>{m(null),o(x),r()},800)}catch(k){p(k.message||"Failed to save window")}finally{s(!1)}},E=async()=>{if(n)try{let S=await fetch(`/api/windows/${n.id}`,{method:"DELETE",credentials:"include"});if(!S.ok)throw new Error(await S.text());m("\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E"),setTimeout(()=>{m(null),o(null),r()},800)}catch(S){p(S.message||"Failed to delete window")}};return a&&j.default.createElement(j.default.Fragment,null,j.default.createElement("div",{className:"confirm-overlay",onClick:r},j.default.createElement("div",{className:"glass-modal",onClick:S=>S.stopPropagation()},j.default.createElement("h3",null,n?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435":"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),j.default.createElement("div",null,"( ",w.effective_date," .. ",w.end_date," )"),j.default.createElement("br",null),j.default.createElement("label",null,"Effective date"),j.default.createElement("input",{type:"date",value:a.effective_date,onChange:S=>i({...a,effective_date:S.target.value})}),j.default.createElement("label",null,"End date"),j.default.createElement("input",{type:"date",value:a.end_date,onChange:S=>i({...a,end_date:S.target.value})}),u&&j.default.createElement("div",{className:"form__error"},u),d&&j.default.createElement("div",{className:"form__success"},d),j.default.createElement("label",null,"Start time"),j.default.createElement("input",{type:"time",value:bn(a.start_time),onChange:S=>{let k=Sn(a.start_time||new Date().toISOString(),S.target.value);i(x=>({...x,start_time:k}))}}),j.default.createElement("label",null,"End time"),j.default.createElement("input",{type:"time",value:bn(a.end_time),onChange:S=>{let k=Sn(a.end_time||new Date().toISOString(),S.target.value);i(x=>({...x,end_time:k}))}}),j.default.createElement("label",null,"Break from"),j.default.createElement("input",{type:"time",value:bn(a.break_from),onChange:S=>{let k=Sn(a.break_from||new Date().toISOString(),S.target.value);i(x=>({...x,break_from:k}))}}),j.default.createElement("label",null,"Break to"),j.default.createElement("input",{type:"time",value:bn(a.break_to),onChange:S=>{let k=Sn(a.break_to||new Date().toISOString(),S.target.value);i(x=>({...x,break_to:k}))}}),j.default.createElement("div",{className:"weekday-picker"},j.default.createElement("label",{className:"form-label"},"\u0412\u0438\u0445\u0456\u0434\u043D\u0456"),j.default.createElement("div",{className:"weekday-grid"},v.map(S=>{let k=a.weekends?.includes(S.id);return j.default.createElement("label",{key:S.id,className:"weekday-checkbox mb-2"},j.default.createElement("input",{type:"checkbox",checked:k,onChange:()=>{i(x=>({...x,weekends:k?x.weekends.filter(N=>N!==S.id):[...x.weekends,S.id]}))}}),j.default.createElement("span",null,S.label))}))),j.default.createElement("div",{className:"modal-actions"},j.default.createElement("button",{onClick:r,disabled:l},"Cancel"),n&&j.default.createElement(j.default.Fragment,null,j.default.createElement("button",{className:"danger",onClick:()=>h(!0)},"Delete"),j.default.createElement(jo,{open:y,title:"Delete window",message:"Are you sure you want to delete this window?",confirmText:"Yes",cancelText:"No",onConfirm:()=>{h(!1),E()},onCancel:()=>h(!1)})),j.default.createElement("button",{className:"apply",onClick:g,disabled:l},n?"Update":"Create")))))}function fu({days:e,weekStart:t,setWeekStart:n,employees:r,currentEmployee:o,setCurrentEmployee:a}){let i=()=>n(xn(t,7)),l=()=>n(xn(t,-7)),s=()=>n(Wn(new Date)),[u,p]=(0,tm.useState)(!1),d=o?.window;return et.default.createElement("header",{className:"calendar__header sticky"},et.default.createElement("h4",null,e[0].toLocaleDateString("uk-UA",{day:"numeric",month:"long"})," \u2013 ",e[6].toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})),et.default.createElement("select",{className:"employee-select",value:o?.id||"",onChange:m=>{let v=m.target.value;a(v===""?null:r.find(y=>y.id===Number(v)))}},et.default.createElement("option",{value:""},"\u041E\u0431\u0440\u0430\u0442\u0438 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),r.map(m=>et.default.createElement("option",{key:m.id,value:m.id},m.first_name," ",m.last_name))),o&&!d&&et.default.createElement("button",{className:"secondary",onClick:()=>p(!0)},"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),o&&et.default.createElement(Ao,{open:u,employee:o,window:o.window,onClose:()=>p(!1),onSaved:m=>{a(v=>v&&{...v,window:m})}}),et.default.createElement("div",{className:"calendar__actions"},et.default.createElement("button",{onClick:l},"\u2190"),et.default.createElement("button",{onClick:s},"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456"),et.default.createElement("button",{onClick:i},"\u2192"),et.default.createElement("input",{className:"date__picker",type:"date",value:t.toISOString().slice(0,10),onChange:m=>n(new Date(m.target.value+"T00:00:00"))})))}var z=B(H()),ke=B(H());var Ae=B(H());(function(){if(!document.getElementById("d5860081ef1c8a6df2ca309b7af21e03f785b56257746a737b7a744dcab475cd")){var e=document.createElement("style");e.id="d5860081ef1c8a6df2ca309b7af21e03f785b56257746a737b7a744dcab475cd",e.textContent=`.client-input-row {
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
`,document.head.appendChild(e)}})();function pu({open:e,onClose:t,onCreated:n}){let[r,o]=(0,Ae.useState)({first_name:"",last_name:"",email:"",phone:""}),[a,i]=(0,Ae.useState)(!1),[l,s]=(0,Ae.useState)(null),[u,p]=(0,Ae.useState)(null);if(!e)return null;let d=async()=>{i(!0),s(null);try{let m=await fetch("/api/clients",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!m.ok)throw new Error(await m.text());let v=await m.json();p(`Client ${v.first_name} successfully created`),setTimeout(()=>{p(null),n(v),t()},1e3)}catch(m){s(m.message||"Failed to create client")}finally{i(!1)}};return Ae.default.createElement("div",{className:"confirm-overlay",onClick:t},Ae.default.createElement("div",{className:"glass-modal small",onClick:m=>m.stopPropagation()},Ae.default.createElement("h3",null,"New client"),l&&Ae.default.createElement("div",{className:"form__error"},l),u&&Ae.default.createElement("div",{className:"form__success"},u),["first_name","last_name","email","phone"].map(m=>Ae.default.createElement("input",{key:m,placeholder:m.replace("_"," "),value:r[m],onChange:v=>o(y=>({...y,[m]:v.target.value}))})),Ae.default.createElement("div",{className:"modal-actions"},Ae.default.createElement("button",{onClick:t},"Close"),Ae.default.createElement("button",{className:"apply",disabled:a,onClick:d},"Create"))))}(function(){if(!document.getElementById("9403ccd3928ae6193b77064c875b789d6683bd4ba322769601253770b0128aab")){var e=document.createElement("style");e.id="9403ccd3928ae6193b77064c875b789d6683bd4ba322769601253770b0128aab",e.textContent=`.form__title {
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
`,document.head.appendChild(e)}})();function mu({slot:e,weekStart:t,previewSlot:n,setPreviewSlot:r,setTimeSlots:o,setEditingSlot:a,editingSlot:i,currentEmployee:l}){let[s,u]=(0,ke.useState)(()=>e?.duration??15),[p,d]=(0,ke.useState)(""),[m,v]=(0,ke.useState)([]),[y,h]=(0,ke.useState)(!1),[w,f]=(0,ke.useState)(null),[c,g]=(0,ke.useState)(null),[E,S]=(0,ke.useState)(null),[k,x]=(0,ke.useState)(null),[N,A]=(0,ke.useState)(!1),[I,me]=(0,ke.useState)(null),[Ve,Qt]=(0,ke.useState)(null),[X,U]=(0,ke.useState)(!1),[W,ve]=(0,ke.useState)(!1);if((0,ke.useEffect)(()=>{if(!e)return;a(e),u(e.duration??15);let L=l.services.find(M=>M.id===e.service_id);if(L){me(L);let M=e.price?Number(e.price):null;Qt(M)}},[e,l]),!i)return null;let Dt=(L,M)=>Lt(Yn(new Date(L),M)),bt=(0,ke.useRef)(null),kn=L=>{!L||L.length<3||(bt.current&&clearTimeout(bt.current),bt.current=window.setTimeout(async()=>{h(!0);let V=await(await fetch(`/api/clients?search=${L}`)).json();v(V),h(!1)},250))},Gn=async()=>{if(g(null),!!i)try{let L=await fetch(`/api/time_slots/${i.id}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!L.ok){let V=await L.text();throw new Error(V||"Failed to update time slot")}let M=await L.json();o(V=>V.map(P=>P.id===M.id?M:P)),S("Time slot updated successfully!"),setTimeout(()=>{S(null),a(null),d(""),f(null),r(null)},1e3),$o()}catch(L){g(L.message)}},yi=async()=>{if(g(null),!!i)try{let L=await fetch(`/api/time_slots/${i.id}`,{method:"DELETE",credentials:"include"});if(!L.ok){let V=await L.text();throw new Error(V||"Failed to delete time slot")}let M=await L.json();o(V=>V.filter(P=>P.id!==M.id)),S("Time slot deleted successfully!"),setTimeout(()=>{S(null),a(null),d(""),f(null),r(null)},1e3),$o()}catch(L){g(L.message)}},wi=async()=>{if(g(null),!i)return;let L={...i,client_id:i.client_id??n?.client_id??null};console.log("POST payload:",L);try{let M=await fetch("/api/time_slots",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(L)});if(!M.ok){let P=await M.text();throw new Error(P||"Failed to schedule time slot")}let V=await M.json();o(P=>[...P,V]),S("Time slot scheduled successfully!"),setTimeout(()=>{S(null),a(null),d(""),f(null),r(null)},1e3),$o()}catch(M){g(M.message)}},$o=()=>{let L=t.toISOString().slice(0,10),M=xn(t,6).toISOString().slice(0,10);fetch(`/api/employees/${l.id}/availability?from=${L}&to=${M}`).then(V=>V.json()).then(V=>{x(V.employee.window),o(V.employee.time_slots)})};return z.default.createElement("div",{className:"glass-overlay",onClick:()=>a(null)},z.default.createElement("div",{className:"glass-modal",onClick:L=>L.stopPropagation()},z.default.createElement("div",{className:"form__title"},z.default.createElement("div",{className:"form__title-left"},"Edit time slot:"),z.default.createElement("div",{className:`form__title-right form__title_${i.state}`},i.state)),c&&z.default.createElement("div",{className:"form__error"},c),E&&z.default.createElement("div",{className:"form__success"},E),z.default.createElement("div",{className:"form-group mt-3"},z.default.createElement("div",{className:"time-range-row"},z.default.createElement("label",null,"Date"),z.default.createElement("input",{type:"date",className:"date__picker",value:i.day,onChange:L=>{let M=L.target.value;a(V=>({...V,day:M,start_time:`${M}${V.start_time.slice(10)}`,end_time:`${M}${V.end_time.slice(10)}`}))}}))),z.default.createElement("div",{className:"form-group mt-2"},z.default.createElement("label",null,"Service"),z.default.createElement("div",{className:"time-range-row"},z.default.createElement("div",{className:"input-with-button"},z.default.createElement("select",{className:"width-100",value:i.service_id??"",onChange:L=>{let M=Number(L.target.value),V=l.services.find(Y=>Y.id===M);if(!V){me(null),Qt(null);return}let P=new Date(i.start_time);u(V.duration);let Z={service_id:V.id,duration:V.duration,price:V.price,end_time:Lt(Yn(P,V.duration))};a(Y=>({...Y,...Z})),r(Y=>Y?{...Y,...Z}:null),me(V),Qt(null)}},z.default.createElement("option",{value:""},"Select a service"),l.services.map(L=>z.default.createElement("option",{key:L.id,value:L.id},L.name))),z.default.createElement("div",{className:"input-button content-center",title:"Add service",onClick:()=>ve(!0)},"+")),z.default.createElement(Fo,{open:W,employee:l,onClose:()=>ve(!1),onCreated:L=>{l.services.push(L),a(M=>({...M,service_id:L.id,duration:L.duration,price:L.price})),me(L),ve(!1)}}))),z.default.createElement("div",{className:"form-group"},I&&z.default.createElement(z.default.Fragment,null,z.default.createElement("div",{className:"time-range-row mt-1 t-sm"},z.default.createElement("label",null,"Duration"),z.default.createElement("input",{type:"number",step:15,min:15,value:i.duration,onChange:L=>{let M=Number(L.target.value),V=new Date(i.start_time);u(M),a(P=>({...P,duration:M,end_time:Lt(Yn(V,M))})),r(P=>P?{...P,duration:M,end_time:Lt(Yn(V,M))}:null)}}),z.default.createElement("label",{className:"content-center"},"Price"),z.default.createElement("input",{type:"number",step:.01,min:0,value:Ve??Number(i.price??I?.price??0),onChange:L=>{let M=Number(L.target.value);Qt(M),a(V=>({...V,price:M}))}})))),z.default.createElement("div",{className:"form-group time-range"},z.default.createElement("label",null,"Time"),z.default.createElement("div",{className:"time-range-row"},z.default.createElement("input",{type:"time",step:900,value:bn(i.start_time),onChange:L=>{let M=Sn(i.start_time,L.target.value);a(V=>({...V,start_time:M,end_time:Dt(M,s)}))}}),z.default.createElement("input",{type:"time",step:900,value:bn(i.end_time),onChange:L=>{let M=Sn(i.end_time,L.target.value);a(V=>({...V,end_time:M,start_time:Dt(M,-s)}))}}))),z.default.createElement("div",{className:"form-group"},z.default.createElement("label",null,"Client"),z.default.createElement("div",{className:"input-with-button"},z.default.createElement("input",{type:"text",placeholder:"Search client...",value:i?.client?`${i.client.first_name} ${i.client.last_name}`:p,onChange:L=>{a(M=>({...M,client:null,client_id:null})),d(L.target.value),kn(L.target.value)}}),z.default.createElement("div",{className:"input-button content-center",onClick:()=>U(!0),title:"Add client"},"+")),z.default.createElement(pu,{open:X,onClose:()=>U(!1),onCreated:L=>{a(M=>({...M,client_id:L.id,client:L}))}}),y&&z.default.createElement("div",{className:"hint"},"Searching\u2026"),m.length>0&&z.default.createElement("ul",{className:"autocomplete-list"},m.map(L=>z.default.createElement("li",{key:L.id,onClick:()=>{v([]),a(M=>({...M,client_id:L.id,client:L}))}},z.default.createElement("strong",null,L.first_name," ",L.last_name),z.default.createElement("div",{className:"muted"},L.email))))),z.default.createElement("div",{className:"modal-actions"},z.default.createElement("button",{onClick:()=>{g(null),a(null),d(""),f(null)}},"Close"),i.state==="preview"&&z.default.createElement("button",{className:"apply",onClick:wi},"Schedule"),i.state==="scheduled"&&z.default.createElement(z.default.Fragment,null,z.default.createElement("button",{className:"danger",onClick:()=>A(!0)},"Delete"),z.default.createElement(jo,{open:N,title:"Delete time slot",message:"Are you sure you want to delete this time slot?",confirmText:"Yes",cancelText:"No",onConfirm:()=>{A(!1),yi()},onCancel:()=>A(!1)})),i.state==="scheduled"&&z.default.createElement("button",{className:"apply",onClick:Gn},"Update"))))}(function(){if(!document.getElementById("d2a1e44d6fcbce1ab72efc649c94a73f5a8a1e5bed0b9b132dbb11207b7851e0")){var e=document.createElement("style");e.id="d2a1e44d6fcbce1ab72efc649c94a73f5a8a1e5bed0b9b132dbb11207b7851e0",e.textContent=`.calendar-card {
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
`,document.head.appendChild(e)}})();function hu({employees:e,companyId:t}){let[n,r]=(0,$.useState)(Wn(new Date)),[o,a]=(0,$.useState)(null),[i,l]=(0,$.useState)(null),[s,u]=(0,$.useState)(null),[p,d]=(0,$.useState)([]),[m,v]=(0,$.useState)([]),y=(0,$.useRef)(null),[h,w]=(0,$.useState)(null),[f,c]=(0,$.useState)(null),[g,E]=(0,$.useState)(null),[S,k]=(0,$.useState)(!1),[x,N]=(0,$.useState)(null),A=Array.from({length:7},(P,Z)=>xn(n,Z)),I=new Date,me=()=>{let P=n.toISOString().slice(0,10),Z=xn(n,6).toISOString().slice(0,10);fetch(`/api/employees/${i.id}/availability?from=${P}&to=${Z}`).then(Y=>Y.json()).then(Y=>{u(Y.employee.window),d(Y.employee.upcoming_windows),v(Y.employee.time_slots)})};(0,$.useEffect)(()=>{i&&me()},[i,n]);let[Ve,Qt]=(0,$.useState)(new Date);(0,$.useEffect)(()=>{let P=()=>Qt(new Date);P();let Z=setInterval(P,300*1e3);return()=>clearInterval(Z)},[]);let X=(0,$.useRef)(null),[U,W]=(0,$.useState)(0);(0,$.useEffect)(()=>{X.current&&W(X.current.getBoundingClientRect().height)},[n,i]);let ve=Ve.toISOString().slice(0,10),Dt=Ve.getHours(),bt=Ve.getMinutes(),kn=U*Dt+U*bt/60,Gn=["window-a","window-b","window-c","window-d","window-e"],yi=P=>{let Z=Mo(P,[s,...p||[]]);if(!Z)return"";let Y=Z.id%Gn.length;return Gn[Y]},wi=A.some(P=>P.toISOString().slice(0,10)===ve);(0,$.useEffect)(()=>{let P=y.current;P&&requestAnimationFrame(()=>{let Z=P.scrollHeight-P.clientHeight;P.scrollTop=Z/2})},[n,i]);let $o=(P,Z)=>Lt(Yn(new Date(P),Z)),L=(P,Z)=>{if(!h||h.day!==P.toISOString().slice(0,10))return!1;let Y=Vn(P,Z,0),Tt=Vn(P,Z+1,0),Fr=xt(h.start_time),Kt=xt(h.end_time);return Io(Fr,Kt,Y,Tt)},M=(P,Z,Y)=>{let Tt=xt(P.start_time);return Tt?Tt.getHours()===Y&&P.day===Z.toISOString().slice(0,10):!1},V=(P,Z)=>{let Y=P.toISOString().slice(0,10),Tt=Vn(P,Z,0),Fr=Vn(P,Z+1,0);return m.filter(Kt=>{if(Kt.day!==Y)return!1;let Ot=xt(Kt.start_time),Uo=xt(Kt.end_time);return Io(Ot,Uo,Tt,Fr)})};return $.default.createElement("section",{className:"calendar-card"},$.default.createElement(fu,{days:A,weekStart:n,setWeekStart:r,employees:e,currentEmployee:i,setCurrentEmployee:P=>{P?l(P):(l(null),v([]),u(null),w(null),d([]))}}),$.default.createElement("div",{className:"week-calendar"},$.default.createElement("div",{className:"week-header"},$.default.createElement("div",{className:"time-col"}),A.map(P=>{let Z=P<I,Y=Mo(P,[s,...p||[]]);return $.default.createElement("div",{key:P.toISOString(),className:`day-col-header
                          ${P.toDateString()===I.toDateString()?"today":""}
                          ${yi(P)}
                        `,"data-tooltip":!i||!Y?.effective_date?"":`Window
Starting ${Y?.effective_date}
Ending ${Y?.end_date||"\u221E"}`,onClick:()=>{Z||(N(P),k(!0))}},i&&!Z&&$.default.createElement("span",{className:"edit-icon"},Y?"\u2699\uFE0F":"\u2795"),$.default.createElement("div",null,P.toLocaleDateString("uk-UA",{weekday:"short"})),$.default.createElement("div",null,P.getDate()))}),i&&x&&$.default.createElement(Ao,{open:S,employee:i,window:Mo(x,[s,...p||[]]),onClose:()=>{N(null),k(!1)},onSaved:P=>{l(Z=>Z&&{...Z,window:P})}})),$.default.createElement("div",{className:"week-body",ref:y},wi&&U>0&&$.default.createElement("div",{className:"now-line",style:{top:`${kn}px`}},$.default.createElement("div",{className:"now-dot"})),qp.map((P,Z)=>$.default.createElement("div",{key:P,className:"week-row",ref:Z===0?X:null},$.default.createElement("div",{className:"time-col"},P,":00"),A.map(Y=>{let Tt=V(Y,P),Fr=Y<Wn(new Date),Kt=em({day:Y,hour:P,windows:[s,...p]});return $.default.createElement("div",{key:`${Y.toISOString()}-${P}`,className:`week-cell ${Kt?"":Fr?"past":"unavailable"}`,onMouseDown:Ot=>{if(E(null),!Kt||!i)return;let Uo=Ot.currentTarget.getBoundingClientRect(),ku=(Ot.clientY-Uo.top)/Uo.height>=.5?30:0,im=ku+30,xi=Vn(Y,P,ku),bi=Vn(Y,P,im);for(let Jt of Tt){let Si=xt(Jt.start_time),lm=xt(Jt.end_time);if(Io(xi,bi,Si,lm)){c(Jt),a(Jt);return}}if(h){let Jt=xt(h.start_time),Si=xt(h.end_time);if(h.day===Y.toISOString().slice(0,10)&&Io(xi,bi,Jt,Si)){a(h);return}}w({day:Y.toISOString().slice(0,10),dayIndex:A.findIndex(Jt=>Jt.toDateString()===Y.toDateString()),start_time:Lt(xi),end_time:Lt(bi),state:"preview",employee_id:i.id,company_id:t})}},Tt.filter(Ot=>M(Ot,Y,P)).map(Ot=>$.default.createElement(gi,{key:Ot.id,timeSlot:Ot})),h&&M(h,Y,P)&&$.default.createElement(gi,{timeSlot:h}))}))))),o&&$.default.createElement(mu,{slot:o,weekStart:n,previewSlot:h,setPreviewSlot:w,setTimeSlots:v,setEditingSlot:a,editingSlot:o,currentEmployee:i}))}var J=B(H());(function(){if(!document.getElementById("85680663e3af3af3040ba0baa2d9af434f71b3c84e52d8c7f14a6909fce9151c")){var e=document.createElement("style");e.id="85680663e3af3af3040ba0baa2d9af434f71b3c84e52d8c7f14a6909fce9151c",e.textContent=`.employees-container {
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
`,document.head.appendChild(e)}})();function gu({dashboardData:e}){let[t,n]=(0,J.useState)(e?.employees||[]),[r,o]=(0,J.useState)(!1),[a,i]=(0,J.useState)(null),[l,s]=(0,J.useState)(null),u=()=>{i(null),o(!0)},p=y=>{i(y),o(!0)},d=async y=>{if(window.confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044C\u043E\u0433\u043E \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430?"))try{let h=await fetch(`/api/employees/${y}`,{method:"DELETE",credentials:"include"});if(h.ok)n(t.filter(w=>w.id!==y));else{let w=await h.json();s(w.message||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}}catch{s("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}},m=y=>{n(a?t.map(h=>h.id===y.id?y:h):[...t,y]),o(!1),i(null)},v=()=>{o(!1),i(null)};return J.default.createElement("div",{className:"employees-container"},J.default.createElement("div",{className:"employees-header"},J.default.createElement("h2",null,"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438"),J.default.createElement("button",{className:"btn-primary",onClick:u},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430")),l&&J.default.createElement("div",{className:"error-message"},l),t.length===0?J.default.createElement("div",{className:"empty-state"},J.default.createElement("p",null,"\u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0456\u0432. \u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0448\u043E\u0433\u043E!")):J.default.createElement("div",{className:"employees-table"},J.default.createElement("table",null,J.default.createElement("thead",null,J.default.createElement("tr",null,J.default.createElement("th",null,"\u0406\u043C'\u044F"),J.default.createElement("th",null,"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),J.default.createElement("th",null,"Email"),J.default.createElement("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),J.default.createElement("th",null,"\u0414\u0456\u0457"))),J.default.createElement("tbody",null,t.map(y=>J.default.createElement("tr",{key:y.id},J.default.createElement("td",null,y.first_name),J.default.createElement("td",null,y.last_name),J.default.createElement("td",null,y.email),J.default.createElement("td",null,y.phone||"N/A"),J.default.createElement("td",{className:"actions content-center"},J.default.createElement("button",{className:"btn-edit",onClick:()=>p(y)},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),J.default.createElement("button",{className:"btn-delete",onClick:()=>d(y.id)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"))))))),r&&J.default.createElement("div",{className:"modal-overlay",onClick:v},J.default.createElement("div",{className:"modal-content",onClick:y=>y.stopPropagation()},J.default.createElement(Tr,{role:"employee",employee:a,onSave:m,onCancel:v,isModal:!0}))))}var K=B(H());var pe=B(H());function vu({client:e,onSave:t,onCancel:n,isModal:r=!1}){let o=ut(),[a,i]=(0,pe.useState)({first_name:"",last_name:"",email:"",phone:"",password:""}),[l,s]=(0,pe.useState)({});(0,pe.useEffect)(()=>{e&&i({first_name:e.first_name||"",last_name:e.last_name||"",email:e.email||"",phone:e.phone||"",password:""})},[e]);let u=m=>{i({...a,[m.target.name]:m.target.value}),s(v=>({...v,[m.target.name]:null}))},p=async m=>{m.preventDefault();let v={client:{first_name:a.first_name,last_name:a.last_name,email:a.email,phone:a.phone}};a.password&&(v.client.password=a.password);let y=e?`/api/clients/${e.id}`:"/api/clients",w=await fetch(y,{method:e?"PUT":"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});if(w.ok){let f=await w.json();r&&t?t(f):o("/companies/welcome")}else{let f=await w.json();s(f.errors||{})}},d=m=>l[m]?.message;return pe.default.createElement("div",{className:r?"client-form-modal":"client-form container"},pe.default.createElement("h1",null,e?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430"),pe.default.createElement("form",{onSubmit:p},d("first_name")&&pe.default.createElement("div",{className:"field-error"},d("first_name")),pe.default.createElement("input",{name:"first_name",value:a.first_name,onChange:u,placeholder:"\u0406\u043C\u02BC\u044F"}),d("last_name")&&pe.default.createElement("div",{className:"field-error"},d("last_name")),pe.default.createElement("input",{name:"last_name",value:a.last_name,onChange:u,placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),d("email")&&pe.default.createElement("div",{className:"field-error"},d("email")),pe.default.createElement("input",{name:"email",type:"email",value:a.email,onChange:u,placeholder:"Email"}),d("phone")&&pe.default.createElement("div",{className:"field-error"},d("phone")),pe.default.createElement("input",{name:"phone",value:a.phone,onChange:u,placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),d("password")&&pe.default.createElement("div",{className:"field-error"},d("password")),pe.default.createElement("input",{name:"password",type:"password",value:a.password,onChange:u,placeholder:e?"\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u0437\u0430\u043B\u0438\u0448\u0442\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u043C, \u0449\u043E\u0431 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438)":"\u041F\u0430\u0440\u043E\u043B\u044C",required:!e}),pe.default.createElement("div",{className:"form-actions"},r&&n&&pe.default.createElement("button",{type:"button",onClick:n},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),pe.default.createElement("button",{type:"submit"},e?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"))))}(function(){if(!document.getElementById("74b753de80d78e38957b9d8c852f845b8349949efb4a62e8a40b3415643a93b6")){var e=document.createElement("style");e.id="74b753de80d78e38957b9d8c852f845b8349949efb4a62e8a40b3415643a93b6",e.textContent=`.clients-container {
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
`,document.head.appendChild(e)}})();function yu({dashboardData:e}){let[t,n]=(0,K.useState)([]),[r,o]=(0,K.useState)(!1),[a,i]=(0,K.useState)(null),[l,s]=(0,K.useState)(null),u=async()=>{try{let h=await fetch("/api/clients",{credentials:"include"});if(h.ok){let w=await h.json();n(w.clients)}else s("Failed to fetch clients")}catch{s("Failed to fetch clients")}};(0,K.useEffect)(()=>{(async()=>{try{let w=await fetch("/api/clients",{credentials:"include"});if(w.ok){let f=await w.json();n(f.clients||f)}else s("Failed to fetch clients")}catch{s("Failed to fetch clients")}})()},[]);let p=()=>{i(null),o(!0)},d=h=>{i(h),o(!0)},m=async h=>{if(window.confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044C\u043E\u0433\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430?"))try{let w=await fetch(`/api/clients/${h}`,{method:"DELETE",credentials:"include"});if(w.ok)n(t.filter(f=>f.id!==h));else{let f=await w.json();s(f.message||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}}catch{s("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}},v=h=>{n(a?t.map(w=>w.id===h.id?h:w):[...t,h]),o(!1),i(null)},y=()=>{o(!1),i(null)};return K.default.createElement("div",{className:"clients-container"},K.default.createElement("div",{className:"clients-header"},K.default.createElement("h2",null,"\u041A\u043B\u0456\u0454\u043D\u0442\u0438"),K.default.createElement("button",{className:"btn-primary",onClick:p},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430")),l&&K.default.createElement("div",{className:"error-message"},l),t.length===0?K.default.createElement("div",{className:"empty-state"},K.default.createElement("p",null,"\u041D\u0435\u043C\u0430\u0454 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432. \u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0448\u043E\u0433\u043E!")):K.default.createElement("div",{className:"clients-table"},K.default.createElement("table",null,K.default.createElement("thead",null,K.default.createElement("tr",null,K.default.createElement("th",null,"\u0406\u043C'\u044F"),K.default.createElement("th",null,"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),K.default.createElement("th",null,"Email"),K.default.createElement("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),K.default.createElement("th",null,"\u0414\u0456\u0457"))),K.default.createElement("tbody",null,t.map(h=>K.default.createElement("tr",{key:h.id},K.default.createElement("td",null,h.first_name),K.default.createElement("td",null,h.last_name),K.default.createElement("td",null,h.email),K.default.createElement("td",null,h.phone||"N/A"),K.default.createElement("td",{className:"actions content-center"},K.default.createElement("button",{className:"btn-edit",onClick:()=>d(h)},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),K.default.createElement("button",{className:"btn-delete",onClick:()=>m(h.id)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"))))))),r&&K.default.createElement("div",{className:"modal-overlay",onClick:y},K.default.createElement("div",{className:"modal-content",onClick:h=>h.stopPropagation()},K.default.createElement(vu,{client:a,onSave:v,onCancel:y,isModal:!0}))))}var T=B(H());(function(){if(!document.getElementById("b2621e4b4297e219f58b94b6e9677304c32a37f7c15d475d684fbd158706d5d7")){var e=document.createElement("style");e.id="b2621e4b4297e219f58b94b6e9677304c32a37f7c15d475d684fbd158706d5d7",e.textContent=`.company-container {
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
`,document.head.appendChild(e)}})();function wu({dashboardData:e}){let[t,n]=(0,T.useState)(e?.company||null),[r,o]=(0,T.useState)(!1),[a,i]=(0,T.useState)(null),[l,s]=(0,T.useState)(null),u=()=>{o(!0)},p=m=>{n(m),o(!1),s("\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E"),setTimeout(()=>s(null),3e3)},d=()=>{o(!1)};return t?T.default.createElement("div",{className:"company-container"},T.default.createElement("div",{className:"company-header"},T.default.createElement("h2",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),T.default.createElement("button",{className:"btn-primary",onClick:u},"\u270F\uFE0F \u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438")),a&&T.default.createElement("div",{className:"error-message"},a),l&&T.default.createElement("div",{className:"success-message"},l),T.default.createElement("div",{className:"company-details"},T.default.createElement("section",{className:"company-section"},T.default.createElement("h3",null,"\u041E\u0441\u043D\u043E\u0432\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"),T.default.createElement("div",{className:"detail-grid"},T.default.createElement("div",{className:"detail-item"},T.default.createElement("label",null,"\u041D\u0430\u0437\u0432\u0430:"),T.default.createElement("span",null,t.name)),T.default.createElement("div",{className:"detail-item"},T.default.createElement("label",null,"Email:"),T.default.createElement("span",null,t.email||"N/A")),T.default.createElement("div",{className:"detail-item"},T.default.createElement("label",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"),T.default.createElement("span",null,t.phone||"N/A")),T.default.createElement("div",{className:"detail-item"},T.default.createElement("label",null,"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442:"),T.default.createElement("span",null,t.website?T.default.createElement("a",{href:t.website,target:"_blank",rel:"noopener noreferrer"},t.website):"N/A")),T.default.createElement("div",{className:"detail-item full-width"},T.default.createElement("label",null,"\u041E\u043F\u0438\u0441:"),T.default.createElement("span",null,t.description||"N/A")))),t.address&&T.default.createElement("section",{className:"company-section"},T.default.createElement("h3",null,"\u0410\u0434\u0440\u0435\u0441\u0430"),T.default.createElement("div",{className:"detail-grid"},T.default.createElement("div",{className:"detail-item"},T.default.createElement("label",null,"\u0412\u0443\u043B\u0438\u0446\u044F 1:"),T.default.createElement("span",null,t.address.street_line1||"N/A")),T.default.createElement("div",{className:"detail-item"},T.default.createElement("label",null,"\u0412\u0443\u043B\u0438\u0446\u044F 2:"),T.default.createElement("span",null,t.address.street_line2||"N/A")),T.default.createElement("div",{className:"detail-item"},T.default.createElement("label",null,"\u041C\u0456\u0441\u0442\u043E:"),T.default.createElement("span",null,t.address.city||"N/A")),T.default.createElement("div",{className:"detail-item"},T.default.createElement("label",null,"\u041E\u0431\u043B\u0430\u0441\u0442\u044C:"),T.default.createElement("span",null,t.address.region||"N/A")),T.default.createElement("div",{className:"detail-item"},T.default.createElement("label",null,"\u041F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441:"),T.default.createElement("span",null,t.address.postal||"N/A")),T.default.createElement("div",{className:"detail-item"},T.default.createElement("label",null,"\u041A\u0440\u0430\u0457\u043D\u0430:"),T.default.createElement("span",null,t.address.country||"N/A"))))),r&&T.default.createElement("div",{className:"modal-overlay",onClick:d},T.default.createElement("div",{className:"modal-content",onClick:m=>m.stopPropagation()},T.default.createElement(Oo,{company:t,onSave:p,onCancel:d,isModal:!0})))):T.default.createElement("div",{className:"company-container"},T.default.createElement("div",{className:"empty-state"},T.default.createElement("p",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430")))}var nm=B(H());function xu({dashboardData:e}){return nm.default.createElement("div",null,"Settings")}(function(){if(!document.getElementById("6a6155881ee733b2fee22719c3362487d8f0b92f87b75b4e1bdd6886dcc8063c")){var e=document.createElement("style");e.id="6a6155881ee733b2fee22719c3362487d8f0b92f87b75b4e1bdd6886dcc8063c",e.textContent=`.dashboard {
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
`,document.head.appendChild(e)}})();function Qn(){let[e,t]=(0,Oe.useState)(),{id:n}=Lo(),r=ut(),o=st();if((0,Oe.useEffect)(()=>{fetch(`/api/companies/${n}/dashboard`).then(i=>i.status===401?(r("/companies/welcome"),null):i.json()).then(i=>{i&&t(i)}).catch(()=>{r("/companies/welcome")})},[n,r]),e===void 0)return Oe.default.createElement("p",null,"Loading...");let a=()=>{let i=o.pathname;return i.includes("/employees")?Oe.default.createElement(gu,{dashboardData:e}):i.includes("/clients")?Oe.default.createElement(yu,{dashboardData:e}):i.includes("/edit")?Oe.default.createElement(wu,{dashboardData:e}):i.includes("/settings")?Oe.default.createElement(xu,{dashboardData:e}):Oe.default.createElement(hu,{employees:e.employees,companyId:n})};return Oe.default.createElement("div",{className:"dashboard"},Oe.default.createElement(cu,{companyName:e.company.name,id:n}),Oe.default.createElement("div",{className:"dashboard__content"},Oe.default.createElement(du,{userName:e.user.first_name}),Oe.default.createElement("main",{className:"dashboard__main content-center"},a())))}var Kn=B(H());function bu(){return Kn.default.createElement("div",{class:"container"},Kn.default.createElement("p",{class:"t-a-center"},"\u0412\u0436\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442?"),Kn.default.createElement(zo,null),Kn.default.createElement("div",{className:"t-a-center"},Kn.default.createElement("p",null,"\u0429\u0435 \u043D\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443?"),Kn.default.createElement(yn,{to:"/companies/admins/new"},"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F")))}(function(){if(!document.getElementById("4be33d924d68f9738d162f2f6f9320fedbb0eccc00bfe3258cc9e5da3fda847b")){var e=document.createElement("style");e.id="4be33d924d68f9738d162f2f6f9320fedbb0eccc00bfe3258cc9e5da3fda847b",e.textContent="",document.head.appendChild(e)}})();function Su(){return re.default.createElement("div",null,re.default.createElement(Do,null,re.default.createElement(we,{path:"/",redirectTo:"welcome"}),re.default.createElement(we,{path:"welcome",element:re.default.createElement(bu,null)}),re.default.createElement(we,{path:"new",element:re.default.createElement(Oo,null)}),re.default.createElement(we,{path:"employees/new",element:re.default.createElement(Tr,{role:"employee"})}),re.default.createElement(we,{path:"admins/new",element:re.default.createElement(Tr,{role:"admin"})}),re.default.createElement(we,{path:"login",element:re.default.createElement(zo,null)}),re.default.createElement(we,{path:":id/dashboard",element:re.default.createElement(Qn,null)}),re.default.createElement(we,{path:":id/employees",element:re.default.createElement(Qn,null)}),re.default.createElement(we,{path:":id/clients",element:re.default.createElement(Qn,null)}),re.default.createElement(we,{path:":id/edit",element:re.default.createElement(Qn,null)}),re.default.createElement(we,{path:":id/settings",element:re.default.createElement(Qn,null)}),re.default.createElement(we,{path:"*",element:re.default.createElement(uu,null)})))}var Jn=B(H());(function(){if(!document.getElementById("29801b744b15f53d7da10ff61f3e1caa467838a727ad6d331d9be5faacdc078b")){var e=document.createElement("style");e.id="29801b744b15f53d7da10ff61f3e1caa467838a727ad6d331d9be5faacdc078b",e.textContent=`.welcome {
  text-align: center;
  padding-top: 60px;
}

/* Title */
.welcome__title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text);
}

/* Subtitle */
.welcome__subtitle {
  font-size: 18px;
  margin-bottom: 40px;
  color: var(--accent-muted);
}

/* Actions container */
.welcome__actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 260px;
  margin: 0 auto;
}

/* Buttons */
.welcome__btn {
  padding: 14px 20px;
  background: var(--accent);
  color: white;
  border-radius: var(--radius);
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
  box-shadow: var(--shadow);
  transition: 0.2s ease;
}

.welcome__btn:hover {
  background: var(--accent-muted);
}
`,document.head.appendChild(e)}})();function Eu(){return Jn.default.createElement("div",{className:"welcome container"},Jn.default.createElement("h1",{className:"welcome__title"},"\u0404 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),Jn.default.createElement("p",{className:"welcome__subtitle"},"\u0429\u043E \u0431\u0443\u0434\u0435\u043C\u043E \u0440\u043E\u0431\u0438\u0442\u0438?"),Jn.default.createElement("div",{className:"welcome__actions"},Jn.default.createElement(yn,{to:"/clients",className:"welcome__btn"},"\u042F \u043A\u043B\u0456\u0454\u043D\u0442"),Jn.default.createElement(yn,{to:"/companies/welcome",className:"welcome__btn"},"\u042F \u0431\u0456\u0437\u043D\u0435\u0441")))}var ey=()=>ct.default.createElement("h2",null,"404 Not Found");function rm(){return ct.default.createElement(au,null,ct.default.createElement(Do,null,ct.default.createElement(we,{path:"/",element:ct.default.createElement(Eu,null)}),ct.default.createElement(we,{path:"/companies/*",element:ct.default.createElement(Su,null)}),ct.default.createElement(we,{path:"/w/:companyName",element:ct.default.createElement(lu,null)}),ct.default.createElement(we,{path:"*",element:ct.default.createElement(ey,null)})))}document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("App");e?(0,am.createRoot)(e).render(om.default.createElement(rm,null)):console.error('React root element "#App" not found in DOM.')});
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

react-router/dist/development/chunk-EPOLDU6W.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.12.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
