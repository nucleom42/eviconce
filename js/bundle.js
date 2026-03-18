var cm=Object.create;var Nu=Object.defineProperty;var dm=Object.getOwnPropertyDescriptor;var fm=Object.getOwnPropertyNames;var pm=Object.getPrototypeOf,mm=Object.prototype.hasOwnProperty;var Nn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var hm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of fm(t))!mm.call(e,o)&&o!==n&&Nu(e,o,{get:()=>t[o],enumerable:!(r=dm(t,o))||r.enumerable});return e};var J=(e,t,n)=>(n=e!=null?cm(pm(e)):{},hm(t||!e||!e.__esModule?Nu(n,"default",{value:e,enumerable:!0}):n,e));var Au=Nn(X=>{"use strict";var Mr=Symbol.for("react.element"),gm=Symbol.for("react.portal"),vm=Symbol.for("react.fragment"),ym=Symbol.for("react.strict_mode"),wm=Symbol.for("react.profiler"),xm=Symbol.for("react.provider"),bm=Symbol.for("react.context"),km=Symbol.for("react.forward_ref"),Sm=Symbol.for("react.suspense"),Em=Symbol.for("react.memo"),_m=Symbol.for("react.lazy"),Pu=Symbol.iterator;function Cm(e){return e===null||typeof e!="object"?null:(e=Pu&&e[Pu]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zu=Object.assign,Ru={};function Zn(e,t,n){this.props=e,this.context=t,this.refs=Ru,this.updater=n||Tu}Zn.prototype.isReactComponent={};Zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ou(){}Ou.prototype=Zn.prototype;function _i(e,t,n){this.props=e,this.context=t,this.refs=Ru,this.updater=n||Tu}var Ci=_i.prototype=new Ou;Ci.constructor=_i;zu(Ci,Zn.prototype);Ci.isPureReactComponent=!0;var Lu=Array.isArray,Fu=Object.prototype.hasOwnProperty,Ni={current:null},Mu={key:!0,ref:!0,__self:!0,__source:!0};function Iu(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Fu.call(t,r)&&!Mu.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Mr,type:e,key:a,ref:i,props:o,_owner:Ni.current}}function Nm(e,t){return{$$typeof:Mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mr}function Pm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Du=/\/+/g;function Ei(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pm(""+e.key):t.toString(36)}function Wo(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Mr:case gm:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Ei(i,0):r,Lu(o)?(n="",e!=null&&(n=e.replace(Du,"$&/")+"/"),Wo(o,t,n,"",function(u){return u})):o!=null&&(Pi(o)&&(o=Nm(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Du,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Lu(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Ei(a,l);i+=Wo(a,t,n,s,o)}else if(s=Cm(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Ei(a,l++),i+=Wo(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Bo(e,t,n){if(e==null)return e;var r=[],o=0;return Wo(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Lm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Vo={transition:null},Dm={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Vo,ReactCurrentOwner:Ni};function ju(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Bo,forEach:function(e,t,n){Bo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bo(e,function(){t++}),t},toArray:function(e){return Bo(e,function(t){return t})||[]},only:function(e){if(!Pi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Zn;X.Fragment=vm;X.Profiler=wm;X.PureComponent=_i;X.StrictMode=ym;X.Suspense=Sm;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dm;X.act=ju;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zu({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Ni.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Fu.call(t,s)&&!Mu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Mr,type:e.type,key:o,ref:a,props:r,_owner:i}};X.createContext=function(e){return e={$$typeof:bm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xm,_context:e},e.Consumer=e};X.createElement=Iu;X.createFactory=function(e){var t=Iu.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:km,render:e}};X.isValidElement=Pi;X.lazy=function(e){return{$$typeof:_m,_payload:{_status:-1,_result:e},_init:Lm}};X.memo=function(e,t){return{$$typeof:Em,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Vo.transition;Vo.transition={};try{e()}finally{Vo.transition=t}};X.unstable_act=ju;X.useCallback=function(e,t){return je.current.useCallback(e,t)};X.useContext=function(e){return je.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return je.current.useDeferredValue(e)};X.useEffect=function(e,t){return je.current.useEffect(e,t)};X.useId=function(){return je.current.useId()};X.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return je.current.useMemo(e,t)};X.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};X.useRef=function(e){return je.current.useRef(e)};X.useState=function(e){return je.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return je.current.useTransition()};X.version="18.3.1"});var V=Nn((ly,$u)=>{"use strict";$u.exports=Au()});var Gu=Nn(ae=>{"use strict";function zi(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Yo(o,t))e[r]=t,e[n]=o,n=r;else break e}}function vt(e){return e.length===0?null:e[0]}function Jo(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var i=2*(r+1)-1,l=e[i],s=i+1,u=e[s];if(0>Yo(l,n))s<o&&0>Yo(u,l)?(e[r]=u,e[s]=n,r=s):(e[r]=l,e[i]=n,r=i);else if(s<o&&0>Yo(u,n))e[r]=u,e[s]=n,r=s;else break e}}return t}function Yo(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Uu=performance,ae.unstable_now=function(){return Uu.now()}):(Li=Date,Hu=Li.now(),ae.unstable_now=function(){return Li.now()-Hu});var Uu,Li,Hu,Nt=[],qt=[],Tm=1,st=null,ze=3,Ko=!1,Pn=!1,jr=!1,Vu=typeof setTimeout=="function"?setTimeout:null,Yu=typeof clearTimeout=="function"?clearTimeout:null,Bu=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ri(e){for(var t=vt(qt);t!==null;){if(t.callback===null)Jo(qt);else if(t.startTime<=e)Jo(qt),t.sortIndex=t.expirationTime,zi(Nt,t);else break;t=vt(qt)}}function Oi(e){if(jr=!1,Ri(e),!Pn)if(vt(Nt)!==null)Pn=!0,Mi(Fi);else{var t=vt(qt);t!==null&&Ii(Oi,t.startTime-e)}}function Fi(e,t){Pn=!1,jr&&(jr=!1,Yu(Ar),Ar=-1),Ko=!0;var n=ze;try{for(Ri(t),st=vt(Nt);st!==null&&(!(st.expirationTime>t)||e&&!Ku());){var r=st.callback;if(typeof r=="function"){st.callback=null,ze=st.priorityLevel;var o=r(st.expirationTime<=t);t=ae.unstable_now(),typeof o=="function"?st.callback=o:st===vt(Nt)&&Jo(Nt),Ri(t)}else Jo(Nt);st=vt(Nt)}if(st!==null)var a=!0;else{var i=vt(qt);i!==null&&Ii(Oi,i.startTime-t),a=!1}return a}finally{st=null,ze=n,Ko=!1}}var Go=!1,Qo=null,Ar=-1,Qu=5,Ju=-1;function Ku(){return!(ae.unstable_now()-Ju<Qu)}function Di(){if(Qo!==null){var e=ae.unstable_now();Ju=e;var t=!0;try{t=Qo(!0,e)}finally{t?Ir():(Go=!1,Qo=null)}}else Go=!1}var Ir;typeof Bu=="function"?Ir=function(){Bu(Di)}:typeof MessageChannel<"u"?(Ti=new MessageChannel,Wu=Ti.port2,Ti.port1.onmessage=Di,Ir=function(){Wu.postMessage(null)}):Ir=function(){Vu(Di,0)};var Ti,Wu;function Mi(e){Qo=e,Go||(Go=!0,Ir())}function Ii(e,t){Ar=Vu(function(){e(ae.unstable_now())},t)}ae.unstable_IdlePriority=5;ae.unstable_ImmediatePriority=1;ae.unstable_LowPriority=4;ae.unstable_NormalPriority=3;ae.unstable_Profiling=null;ae.unstable_UserBlockingPriority=2;ae.unstable_cancelCallback=function(e){e.callback=null};ae.unstable_continueExecution=function(){Pn||Ko||(Pn=!0,Mi(Fi))};ae.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qu=0<e?Math.floor(1e3/e):5};ae.unstable_getCurrentPriorityLevel=function(){return ze};ae.unstable_getFirstCallbackNode=function(){return vt(Nt)};ae.unstable_next=function(e){switch(ze){case 1:case 2:case 3:var t=3;break;default:t=ze}var n=ze;ze=t;try{return e()}finally{ze=n}};ae.unstable_pauseExecution=function(){};ae.unstable_requestPaint=function(){};ae.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=ze;ze=e;try{return t()}finally{ze=n}};ae.unstable_scheduleCallback=function(e,t,n){var r=ae.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:Tm++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,zi(qt,e),vt(Nt)===null&&e===vt(qt)&&(jr?(Yu(Ar),Ar=-1):jr=!0,Ii(Oi,n-r))):(e.sortIndex=o,zi(Nt,e),Pn||Ko||(Pn=!0,Mi(Fi))),e};ae.unstable_shouldYield=Ku;ae.unstable_wrapCallback=function(e){var t=ze;return function(){var n=ze;ze=t;try{return e.apply(this,arguments)}finally{ze=n}}}});var Zu=Nn((uy,Xu)=>{"use strict";Xu.exports=Gu()});var rp=Nn(rt=>{"use strict";var zm=V(),tt=Zu();function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ad=new Set,lo={};function Un(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(lo[e]=t,e=0;e<t.length;e++)ad.add(t[e])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),il=Object.prototype.hasOwnProperty,Rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qu={},ec={};function Om(e){return il.call(ec,e)?!0:il.call(qu,e)?!1:Rm.test(e)?ec[e]=!0:(qu[e]=!0,!1)}function Fm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mm(e,t,n,r){if(t===null||typeof t>"u"||Fm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zl=/[\-:]([a-z])/g;function ql(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zl,ql);Te[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zl,ql);Te[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zl,ql);Te[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function es(e,t,n,r){var o=Te.hasOwnProperty(t)?Te[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mm(t,n,o,r)&&(n=null),r||o===null?Om(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qt=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),ts=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),id=Symbol.for("react.provider"),ld=Symbol.for("react.context"),ns=Symbol.for("react.forward_ref"),sl=Symbol.for("react.suspense"),ul=Symbol.for("react.suspense_list"),rs=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),sd=Symbol.for("react.offscreen"),tc=Symbol.iterator;function $r(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,ji;function Jr(e){if(ji===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ji=t&&t[1]||""}return`
`+ji+e}var Ai=!1;function $i(e,t){if(!e||Ai)return"";Ai=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==a[l]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{Ai=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function Im(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=$i(e.type,!1),e;case 11:return e=$i(e.type.render,!1),e;case 1:return e=$i(e.type,!0),e;default:return""}}function cl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case tr:return"Portal";case ll:return"Profiler";case ts:return"StrictMode";case sl:return"Suspense";case ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ld:return(e.displayName||"Context")+".Consumer";case id:return(e._context.displayName||"Context")+".Provider";case ns:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rs:return t=e.displayName||null,t!==null?t:cl(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return cl(e(t))}catch{}}return null}function jm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cl(t);case 8:return t===ts?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ud(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Am(e){var t=ud(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zo(e){e._valueTracker||(e._valueTracker=Am(e))}function cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ud(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dl(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dd(e,t){t=t.checked,t!=null&&es(e,"checked",t,!1)}function fl(e,t){dd(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pl(e,t.type,n):t.hasOwnProperty("defaultValue")&&pl(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pl(e,t,n){(t!=="number"||Ca(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kr=Array.isArray;function pr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Kr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function fd(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ac(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qo,md=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function so(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$m=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){$m.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zr[t]=Zr[e]})});function hd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+t).trim():t+"px"}function gd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=hd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Um=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gl(e,t){if(t){if(Um[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yl=null;function os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,mr=null,hr=null;function ic(e){if(e=No(e)){if(typeof wl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ei(t),wl(e.stateNode,e.type,t))}}function vd(e){mr?hr?hr.push(e):hr=[e]:mr=e}function yd(){if(mr){var e=mr,t=hr;if(hr=mr=null,ic(e),t)for(e=0;e<t.length;e++)ic(t[e])}}function wd(e,t){return e(t)}function xd(){}var Ui=!1;function bd(e,t,n){if(Ui)return e(t,n);Ui=!0;try{return wd(e,t,n)}finally{Ui=!1,(mr!==null||hr!==null)&&(xd(),yd())}}function uo(e,t){var n=e.stateNode;if(n===null)return null;var r=ei(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var xl=!1;if(Bt)try{qn={},Object.defineProperty(qn,"passive",{get:function(){xl=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{xl=!1}var qn;function Hm(e,t,n,r,o,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var qr=!1,Na=null,Pa=!1,bl=null,Bm={onError:function(e){qr=!0,Na=e}};function Wm(e,t,n,r,o,a,i,l,s){qr=!1,Na=null,Hm.apply(Bm,arguments)}function Vm(e,t,n,r,o,a,i,l,s){if(Wm.apply(this,arguments),qr){if(qr){var u=Na;qr=!1,Na=null}else throw Error(_(198));Pa||(Pa=!0,bl=u)}}function Hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lc(e){if(Hn(e)!==e)throw Error(_(188))}function Ym(e){var t=e.alternate;if(!t){if(t=Hn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return lc(o),e;if(a===r)return lc(o),t;a=a.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Sd(e){return e=Ym(e),e!==null?Ed(e):null}function Ed(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ed(e);if(t!==null)return t;e=e.sibling}return null}var _d=tt.unstable_scheduleCallback,sc=tt.unstable_cancelCallback,Qm=tt.unstable_shouldYield,Jm=tt.unstable_requestPaint,xe=tt.unstable_now,Km=tt.unstable_getCurrentPriorityLevel,as=tt.unstable_ImmediatePriority,Cd=tt.unstable_UserBlockingPriority,La=tt.unstable_NormalPriority,Gm=tt.unstable_LowPriority,Nd=tt.unstable_IdlePriority,Ga=null,Tt=null;function Xm(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Ga,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:eh,Zm=Math.log,qm=Math.LN2;function eh(e){return e>>>=0,e===0?32:31-(Zm(e)/qm|0)|0}var ea=64,ta=4194304;function Gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Da(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=Gr(l):(a&=i,a!==0&&(r=Gr(a)))}else i=n&~o,i!==0?r=Gr(i):a!==0&&(r=Gr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),o=1<<n,r|=e[n],t&=~o;return r}function th(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-kt(a),l=1<<i,s=o[i];s===-1?((l&n)===0||(l&r)!==0)&&(o[i]=th(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pd(){var e=ea;return ea<<=1,(ea&4194240)===0&&(ea=64),e}function Hi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _o(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function rh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-kt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function is(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var oe=0;function Ld(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Dd,ls,Td,zd,Rd,Sl=!1,na=[],sn=null,un=null,cn=null,co=new Map,fo=new Map,rn=[],oh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uc(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":co.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(t.pointerId)}}function Ur(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=No(t),t!==null&&ls(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ah(e,t,n,r,o){switch(t){case"focusin":return sn=Ur(sn,e,t,n,r,o),!0;case"dragenter":return un=Ur(un,e,t,n,r,o),!0;case"mouseover":return cn=Ur(cn,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return co.set(a,Ur(co.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,fo.set(a,Ur(fo.get(a)||null,e,t,n,r,o)),!0}return!1}function Od(e){var t=Tn(e.target);if(t!==null){var n=Hn(t);if(n!==null){if(t=n.tag,t===13){if(t=kd(n),t!==null){e.blockedOn=t,Rd(e.priority,function(){Td(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ga(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yl=r,n.target.dispatchEvent(r),yl=null}else return t=No(n),t!==null&&ls(t),e.blockedOn=n,!1;t.shift()}return!0}function cc(e,t,n){ga(e)&&n.delete(t)}function ih(){Sl=!1,sn!==null&&ga(sn)&&(sn=null),un!==null&&ga(un)&&(un=null),cn!==null&&ga(cn)&&(cn=null),co.forEach(cc),fo.forEach(cc)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,ih)))}function po(e){function t(o){return Hr(o,e)}if(0<na.length){Hr(na[0],e);for(var n=1;n<na.length;n++){var r=na[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Hr(sn,e),un!==null&&Hr(un,e),cn!==null&&Hr(cn,e),co.forEach(t),fo.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Od(n),n.blockedOn===null&&rn.shift()}var gr=Qt.ReactCurrentBatchConfig,Ta=!0;function lh(e,t,n,r){var o=oe,a=gr.transition;gr.transition=null;try{oe=1,ss(e,t,n,r)}finally{oe=o,gr.transition=a}}function sh(e,t,n,r){var o=oe,a=gr.transition;gr.transition=null;try{oe=4,ss(e,t,n,r)}finally{oe=o,gr.transition=a}}function ss(e,t,n,r){if(Ta){var o=El(e,t,n,r);if(o===null)Ki(e,t,r,za,n),uc(e,r);else if(ah(o,e,t,n,r))r.stopPropagation();else if(uc(e,r),t&4&&-1<oh.indexOf(e)){for(;o!==null;){var a=No(o);if(a!==null&&Dd(a),a=El(e,t,n,r),a===null&&Ki(e,t,r,za,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Ki(e,t,r,null,n)}}var za=null;function El(e,t,n,r){if(za=null,e=os(r),e=Tn(e),e!==null)if(t=Hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return za=e,null}function Fd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Km()){case as:return 1;case Cd:return 4;case La:case Gm:return 16;case Nd:return 536870912;default:return 16}default:return 16}}var an=null,us=null,va=null;function Md(){if(va)return va;var e,t=us,n=t.length,r,o="value"in an?an.value:an.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return va=o.slice(e,1<r?1-r:void 0)}function ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ra(){return!0}function dc(){return!1}function nt(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ra:dc,this.isPropagationStopped=dc,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),t}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=nt(Cr),Co=ge({},Cr,{view:0,detail:0}),uh=nt(Co),Bi,Wi,Br,Xa=ge({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(Bi=e.screenX-Br.screenX,Wi=e.screenY-Br.screenY):Wi=Bi=0,Br=e),Bi)},movementY:function(e){return"movementY"in e?e.movementY:Wi}}),fc=nt(Xa),ch=ge({},Xa,{dataTransfer:0}),dh=nt(ch),fh=ge({},Co,{relatedTarget:0}),Vi=nt(fh),ph=ge({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),mh=nt(ph),hh=ge({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gh=nt(hh),vh=ge({},Cr,{data:0}),pc=nt(vh),yh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xh[e])?!!t[e]:!1}function ds(){return bh}var kh=ge({},Co,{key:function(e){if(e.key){var t=yh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sh=nt(kh),Eh=ge({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mc=nt(Eh),_h=ge({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),Ch=nt(_h),Nh=ge({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ph=nt(Nh),Lh=ge({},Xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dh=nt(Lh),Th=[9,13,27,32],fs=Bt&&"CompositionEvent"in window,eo=null;Bt&&"documentMode"in document&&(eo=document.documentMode);var zh=Bt&&"TextEvent"in window&&!eo,Id=Bt&&(!fs||eo&&8<eo&&11>=eo),hc=" ",gc=!1;function jd(e,t){switch(e){case"keyup":return Th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function Rh(e,t){switch(e){case"compositionend":return Ad(t);case"keypress":return t.which!==32?null:(gc=!0,hc);case"textInput":return e=t.data,e===hc&&gc?null:e;default:return null}}function Oh(e,t){if(rr)return e==="compositionend"||!fs&&jd(e,t)?(e=Md(),va=us=an=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Id&&t.locale!=="ko"?null:t.data;default:return null}}var Fh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fh[e.type]:t==="textarea"}function $d(e,t,n,r){vd(r),t=Ra(t,"onChange"),0<t.length&&(n=new cs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var to=null,mo=null;function Mh(e){Xd(e,0)}function Za(e){var t=ir(e);if(cd(t))return e}function Ih(e,t){if(e==="change")return t}var Ud=!1;Bt&&(Bt?(aa="oninput"in document,aa||(Yi=document.createElement("div"),Yi.setAttribute("oninput","return;"),aa=typeof Yi.oninput=="function"),oa=aa):oa=!1,Ud=oa&&(!document.documentMode||9<document.documentMode));var oa,aa,Yi;function yc(){to&&(to.detachEvent("onpropertychange",Hd),mo=to=null)}function Hd(e){if(e.propertyName==="value"&&Za(mo)){var t=[];$d(t,mo,e,os(e)),bd(Mh,t)}}function jh(e,t,n){e==="focusin"?(yc(),to=t,mo=n,to.attachEvent("onpropertychange",Hd)):e==="focusout"&&yc()}function Ah(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Za(mo)}function $h(e,t){if(e==="click")return Za(t)}function Uh(e,t){if(e==="input"||e==="change")return Za(t)}function Hh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Hh;function ho(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!il.call(t,o)||!Et(e[o],t[o]))return!1}return!0}function wc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xc(e,t){var n=wc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wc(n)}}function Bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wd(){for(var e=window,t=Ca();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ca(e.document)}return t}function ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bh(e){var t=Wd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bd(n.ownerDocument.documentElement,n)){if(r!==null&&ps(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=xc(n,a);var i=xc(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wh=Bt&&"documentMode"in document&&11>=document.documentMode,or=null,_l=null,no=null,Cl=!1;function bc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cl||or==null||or!==Ca(r)||(r=or,"selectionStart"in r&&ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&ho(no,r)||(no=r,r=Ra(_l,"onSelect"),0<r.length&&(t=new cs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionend:ia("Transition","TransitionEnd")},Qi={},Vd={};Bt&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function qa(e){if(Qi[e])return Qi[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vd)return Qi[e]=t[n];return e}var Yd=qa("animationend"),Qd=qa("animationiteration"),Jd=qa("animationstart"),Kd=qa("transitionend"),Gd=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){Gd.set(e,t),Un(t,[e])}for(la=0;la<kc.length;la++)sa=kc[la],Sc=sa.toLowerCase(),Ec=sa[0].toUpperCase()+sa.slice(1),yn(Sc,"on"+Ec);var sa,Sc,Ec,la;yn(Yd,"onAnimationEnd");yn(Qd,"onAnimationIteration");yn(Jd,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Kd,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function _c(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vm(r,t,void 0,e),e.currentTarget=null}function Xd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;_c(o,l,u),a=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;_c(o,l,u),a=s}}}if(Pa)throw e=bl,Pa=!1,bl=null,e}function se(e,t){var n=t[Tl];n===void 0&&(n=t[Tl]=new Set);var r=e+"__bubble";n.has(r)||(Zd(t,e,2,!1),n.add(r))}function Ji(e,t,n){var r=0;t&&(r|=4),Zd(n,e,r,t)}var ua="_reactListening"+Math.random().toString(36).slice(2);function go(e){if(!e[ua]){e[ua]=!0,ad.forEach(function(n){n!=="selectionchange"&&(Vh.has(n)||Ji(n,!1,e),Ji(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ua]||(t[ua]=!0,Ji("selectionchange",!1,t))}}function Zd(e,t,n,r){switch(Fd(t)){case 1:var o=lh;break;case 4:o=sh;break;default:o=ss}n=o.bind(null,t,n,e),o=void 0,!xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ki(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;l!==null;){if(i=Tn(l),i===null)return;if(s=i.tag,s===5||s===6){r=a=i;continue e}l=l.parentNode}}r=r.return}bd(function(){var u=a,p=os(n),f=[];e:{var m=Gd.get(e);if(m!==void 0){var v=cs,y=e;switch(e){case"keypress":if(ya(n)===0)break e;case"keydown":case"keyup":v=Sh;break;case"focusin":y="focus",v=Vi;break;case"focusout":y="blur",v=Vi;break;case"beforeblur":case"afterblur":v=Vi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=dh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ch;break;case Yd:case Qd:case Jd:v=mh;break;case Kd:v=Ph;break;case"scroll":v=uh;break;case"wheel":v=Dh;break;case"copy":case"cut":case"paste":v=gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=mc}var g=(t&4)!==0,b=!g&&e==="scroll",d=g?m!==null?m+"Capture":null:m;g=[];for(var c=u,h;c!==null;){h=c;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,d!==null&&(k=uo(c,d),k!=null&&g.push(vo(c,k,h)))),b)break;c=c.return}0<g.length&&(m=new v(m,y,null,n,p),f.push({event:m,listeners:g}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==yl&&(y=n.relatedTarget||n.fromElement)&&(Tn(y)||y[Wt]))break e;if((v||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Tn(y):null,y!==null&&(b=Hn(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(g=fc,k="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=mc,k="onPointerLeave",d="onPointerEnter",c="pointer"),b=v==null?m:ir(v),h=y==null?m:ir(y),m=new g(k,c+"leave",v,n,p),m.target=b,m.relatedTarget=h,k=null,Tn(p)===u&&(g=new g(d,c+"enter",y,n,p),g.target=h,g.relatedTarget=b,k=g),b=k,v&&y)t:{for(g=v,d=y,c=0,h=g;h;h=er(h))c++;for(h=0,k=d;k;k=er(k))h++;for(;0<c-h;)g=er(g),c--;for(;0<h-c;)d=er(d),h--;for(;c--;){if(g===d||d!==null&&g===d.alternate)break t;g=er(g),d=er(d)}g=null}else g=null;v!==null&&Cc(f,m,v,g,!1),y!==null&&b!==null&&Cc(f,b,y,g,!0)}}e:{if(m=u?ir(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var w=Ih;else if(vc(m))if(Ud)w=Uh;else{w=Ah;var S=jh}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=$h);if(w&&(w=w(e,u))){$d(f,w,n,p);break e}S&&S(e,m,u),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&pl(m,"number",m.value)}switch(S=u?ir(u):window,e){case"focusin":(vc(S)||S.contentEditable==="true")&&(or=S,_l=u,no=null);break;case"focusout":no=_l=or=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,bc(f,n,p);break;case"selectionchange":if(Wh)break;case"keydown":case"keyup":bc(f,n,p)}var x;if(fs)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else rr?jd(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Id&&n.locale!=="ko"&&(rr||N!=="onCompositionStart"?N==="onCompositionEnd"&&rr&&(x=Md()):(an=p,us="value"in an?an.value:an.textContent,rr=!0)),S=Ra(u,N),0<S.length&&(N=new pc(N,e,null,n,p),f.push({event:N,listeners:S}),x?N.data=x:(x=Ad(n),x!==null&&(N.data=x)))),(x=zh?Rh(e,n):Oh(e,n))&&(u=Ra(u,"onBeforeInput"),0<u.length&&(p=new pc("onBeforeInput","beforeinput",null,n,p),f.push({event:p,listeners:u}),p.data=x))}Xd(f,t)})}function vo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ra(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=uo(e,n),a!=null&&r.unshift(vo(e,a,o)),a=uo(e,t),a!=null&&r.push(vo(e,a,o))),e=e.return}return r}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cc(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=uo(n,a),s!=null&&i.unshift(vo(n,s,l))):o||(s=uo(n,a),s!=null&&i.push(vo(n,s,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Yh=/\r\n?/g,Qh=/\u0000|\uFFFD/g;function Nc(e){return(typeof e=="string"?e:""+e).replace(Yh,`
`).replace(Qh,"")}function ca(e,t,n){if(t=Nc(t),Nc(e)!==t&&n)throw Error(_(425))}function Oa(){}var Nl=null,Pl=null;function Ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dl=typeof setTimeout=="function"?setTimeout:void 0,Jh=typeof clearTimeout=="function"?clearTimeout:void 0,Pc=typeof Promise=="function"?Promise:void 0,Kh=typeof queueMicrotask=="function"?queueMicrotask:typeof Pc<"u"?function(e){return Pc.resolve(null).then(e).catch(Gh)}:Dl;function Gh(e){setTimeout(function(){throw e})}function Gi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),po(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);po(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nr=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Nr,yo="__reactProps$"+Nr,Wt="__reactContainer$"+Nr,Tl="__reactEvents$"+Nr,Xh="__reactListeners$"+Nr,Zh="__reactHandles$"+Nr;function Tn(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lc(e);e!==null;){if(n=e[Dt])return n;e=Lc(e)}return t}e=n,n=e.parentNode}return null}function No(e){return e=e[Dt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ei(e){return e[yo]||null}var zl=[],lr=-1;function wn(e){return{current:e}}function ue(e){0>lr||(e.current=zl[lr],zl[lr]=null,lr--)}function ie(e,t){lr++,zl[lr]=e.current,e.current=t}var vn={},Me=wn(vn),Ye=wn(!1),Mn=vn;function xr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Qe(e){return e=e.childContextTypes,e!=null}function Fa(){ue(Ye),ue(Me)}function Dc(e,t,n){if(Me.current!==vn)throw Error(_(168));ie(Me,t),ie(Ye,n)}function qd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,jm(e)||"Unknown",o));return ge({},n,r)}function Ma(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Mn=Me.current,ie(Me,e),ie(Ye,Ye.current),!0}function Tc(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=qd(e,t,Mn),r.__reactInternalMemoizedMergedChildContext=e,ue(Ye),ue(Me),ie(Me,e)):ue(Ye),ie(Ye,n)}var At=null,ti=!1,Xi=!1;function ef(e){At===null?At=[e]:At.push(e)}function qh(e){ti=!0,ef(e)}function xn(){if(!Xi&&At!==null){Xi=!0;var e=0,t=oe;try{var n=At;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,ti=!1}catch(o){throw At!==null&&(At=At.slice(e+1)),_d(as,xn),o}finally{oe=t,Xi=!1}}return null}var sr=[],ur=0,Ia=null,ja=0,ut=[],ct=0,In=null,$t=1,Ut="";function Ln(e,t){sr[ur++]=ja,sr[ur++]=Ia,Ia=e,ja=t}function tf(e,t,n){ut[ct++]=$t,ut[ct++]=Ut,ut[ct++]=In,In=e;var r=$t;e=Ut;var o=32-kt(r)-1;r&=~(1<<o),n+=1;var a=32-kt(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,$t=1<<32-kt(t)+o|n<<o|r,Ut=a+e}else $t=1<<a|n<<o|r,Ut=e}function ms(e){e.return!==null&&(Ln(e,1),tf(e,1,0))}function hs(e){for(;e===Ia;)Ia=sr[--ur],sr[ur]=null,ja=sr[--ur],sr[ur]=null;for(;e===In;)In=ut[--ct],ut[ct]=null,Ut=ut[--ct],ut[ct]=null,$t=ut[--ct],ut[ct]=null}var et=null,qe=null,fe=!1,bt=null;function nf(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,qe=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:$t,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,qe=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(fe){var t=qe;if(t){var n=t;if(!zc(e,t)){if(Rl(e))throw Error(_(418));t=dn(n.nextSibling);var r=et;t&&zc(e,t)?nf(r,n):(e.flags=e.flags&-4097|2,fe=!1,et=e)}}else{if(Rl(e))throw Error(_(418));e.flags=e.flags&-4097|2,fe=!1,et=e}}}function Rc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function da(e){if(e!==et)return!1;if(!fe)return Rc(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ll(e.type,e.memoizedProps)),t&&(t=qe)){if(Rl(e))throw rf(),Error(_(418));for(;t;)nf(e,t),t=dn(t.nextSibling)}if(Rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=et?dn(e.stateNode.nextSibling):null;return!0}function rf(){for(var e=qe;e;)e=dn(e.nextSibling)}function br(){qe=et=null,fe=!1}function gs(e){bt===null?bt=[e]:bt.push(e)}var eg=Qt.ReactCurrentBatchConfig;function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var l=o.refs;i===null?delete l[a]:l[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function fa(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oc(e){var t=e._init;return t(e._payload)}function of(e){function t(d,c){if(e){var h=d.deletions;h===null?(d.deletions=[c],d.flags|=16):h.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=hn(d,c),d.index=0,d.sibling=null,d}function a(d,c,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<c?(d.flags|=2,c):h):(d.flags|=2,c)):(d.flags|=1048576,c)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,h,k){return c===null||c.tag!==6?(c=ol(h,d.mode,k),c.return=d,c):(c=o(c,h),c.return=d,c)}function s(d,c,h,k){var w=h.type;return w===nr?p(d,c,h.props.children,k,h.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===tn&&Oc(w)===c.type)?(k=o(c,h.props),k.ref=Wr(d,c,h),k.return=d,k):(k=_a(h.type,h.key,h.props,null,d.mode,k),k.ref=Wr(d,c,h),k.return=d,k)}function u(d,c,h,k){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=al(h,d.mode,k),c.return=d,c):(c=o(c,h.children||[]),c.return=d,c)}function p(d,c,h,k,w){return c===null||c.tag!==7?(c=Fn(h,d.mode,k,w),c.return=d,c):(c=o(c,h),c.return=d,c)}function f(d,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ol(""+c,d.mode,h),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Xo:return h=_a(c.type,c.key,c.props,null,d.mode,h),h.ref=Wr(d,null,c),h.return=d,h;case tr:return c=al(c,d.mode,h),c.return=d,c;case tn:var k=c._init;return f(d,k(c._payload),h)}if(Kr(c)||$r(c))return c=Fn(c,d.mode,h,null),c.return=d,c;fa(d,c)}return null}function m(d,c,h,k){var w=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return w!==null?null:l(d,c,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Xo:return h.key===w?s(d,c,h,k):null;case tr:return h.key===w?u(d,c,h,k):null;case tn:return w=h._init,m(d,c,w(h._payload),k)}if(Kr(h)||$r(h))return w!==null?null:p(d,c,h,k,null);fa(d,h)}return null}function v(d,c,h,k,w){if(typeof k=="string"&&k!==""||typeof k=="number")return d=d.get(h)||null,l(c,d,""+k,w);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Xo:return d=d.get(k.key===null?h:k.key)||null,s(c,d,k,w);case tr:return d=d.get(k.key===null?h:k.key)||null,u(c,d,k,w);case tn:var S=k._init;return v(d,c,h,S(k._payload),w)}if(Kr(k)||$r(k))return d=d.get(h)||null,p(c,d,k,w,null);fa(c,k)}return null}function y(d,c,h,k){for(var w=null,S=null,x=c,N=c=0,A=null;x!==null&&N<h.length;N++){x.index>N?(A=x,x=null):A=x.sibling;var $=m(d,x,h[N],k);if($===null){x===null&&(x=A);break}e&&x&&$.alternate===null&&t(d,x),c=a($,c,N),S===null?w=$:S.sibling=$,S=$,x=A}if(N===h.length)return n(d,x),fe&&Ln(d,N),w;if(x===null){for(;N<h.length;N++)x=f(d,h[N],k),x!==null&&(c=a(x,c,N),S===null?w=x:S.sibling=x,S=x);return fe&&Ln(d,N),w}for(x=r(d,x);N<h.length;N++)A=v(x,d,N,h[N],k),A!==null&&(e&&A.alternate!==null&&x.delete(A.key===null?N:A.key),c=a(A,c,N),S===null?w=A:S.sibling=A,S=A);return e&&x.forEach(function(de){return t(d,de)}),fe&&Ln(d,N),w}function g(d,c,h,k){var w=$r(h);if(typeof w!="function")throw Error(_(150));if(h=w.call(h),h==null)throw Error(_(151));for(var S=w=null,x=c,N=c=0,A=null,$=h.next();x!==null&&!$.done;N++,$=h.next()){x.index>N?(A=x,x=null):A=x.sibling;var de=m(d,x,$.value,k);if(de===null){x===null&&(x=A);break}e&&x&&de.alternate===null&&t(d,x),c=a(de,c,N),S===null?w=de:S.sibling=de,S=de,x=A}if($.done)return n(d,x),fe&&Ln(d,N),w;if(x===null){for(;!$.done;N++,$=h.next())$=f(d,$.value,k),$!==null&&(c=a($,c,N),S===null?w=$:S.sibling=$,S=$);return fe&&Ln(d,N),w}for(x=r(d,x);!$.done;N++,$=h.next())$=v(x,d,N,$.value,k),$!==null&&(e&&$.alternate!==null&&x.delete($.key===null?N:$.key),c=a($,c,N),S===null?w=$:S.sibling=$,S=$);return e&&x.forEach(function(H){return t(d,H)}),fe&&Ln(d,N),w}function b(d,c,h,k){if(typeof h=="object"&&h!==null&&h.type===nr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Xo:e:{for(var w=h.key,S=c;S!==null;){if(S.key===w){if(w=h.type,w===nr){if(S.tag===7){n(d,S.sibling),c=o(S,h.props.children),c.return=d,d=c;break e}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===tn&&Oc(w)===S.type){n(d,S.sibling),c=o(S,h.props),c.ref=Wr(d,S,h),c.return=d,d=c;break e}n(d,S);break}else t(d,S);S=S.sibling}h.type===nr?(c=Fn(h.props.children,d.mode,k,h.key),c.return=d,d=c):(k=_a(h.type,h.key,h.props,null,d.mode,k),k.ref=Wr(d,c,h),k.return=d,d=k)}return i(d);case tr:e:{for(S=h.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(d,c.sibling),c=o(c,h.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=al(h,d.mode,k),c.return=d,d=c}return i(d);case tn:return S=h._init,b(d,c,S(h._payload),k)}if(Kr(h))return y(d,c,h,k);if($r(h))return g(d,c,h,k);fa(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,h),c.return=d,d=c):(n(d,c),c=ol(h,d.mode,k),c.return=d,d=c),i(d)):n(d,c)}return b}var kr=of(!0),af=of(!1),Aa=wn(null),$a=null,cr=null,vs=null;function ys(){vs=cr=$a=null}function ws(e){var t=Aa.current;ue(Aa),e._currentValue=t}function Fl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vr(e,t){$a=e,vs=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ve=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(vs!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if($a===null)throw Error(_(308));cr=e,$a.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var zn=null;function xs(e){zn===null?zn=[e]:zn.push(e)}function lf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,xs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ee&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Vt(e,n)}return o=r.interleaved,o===null?(t.next=t,xs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Vt(e,n)}function wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,is(e,n)}}function Fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ua(e,t,n,r){var o=e.updateQueue;nn=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?a=u:i.next=u,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==i&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=s))}if(a!==null){var f=o.baseState;i=0,p=u=s=null,l=a;do{var m=l.lane,v=l.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,g=l;switch(m=t,v=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){f=y.call(v,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,m=typeof y=="function"?y.call(v,f,m):y,m==null)break e;f=ge({},f,m);break e;case 2:nn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=v,s=f):p=p.next=v,i|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);An|=i,e.lanes=i,e.memoizedState=f}}function Mc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Po={},zt=wn(Po),wo=wn(Po),xo=wn(Po);function Rn(e){if(e===Po)throw Error(_(174));return e}function ks(e,t){switch(ie(xo,t),ie(wo,e),ie(zt,Po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}ue(zt),ie(zt,t)}function Sr(){ue(zt),ue(wo),ue(xo)}function uf(e){Rn(xo.current);var t=Rn(zt.current),n=hl(t,e.type);t!==n&&(ie(wo,e),ie(zt,n))}function Ss(e){wo.current===e&&(ue(zt),ue(wo))}var me=wn(0);function Ha(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zi=[];function Es(){for(var e=0;e<Zi.length;e++)Zi[e]._workInProgressVersionPrimary=null;Zi.length=0}var xa=Qt.ReactCurrentDispatcher,qi=Qt.ReactCurrentBatchConfig,jn=0,he=null,Ee=null,Ce=null,Ba=!1,ro=!1,bo=0,tg=0;function Re(){throw Error(_(321))}function _s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function Cs(e,t,n,r,o,a){if(jn=a,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xa.current=e===null||e.memoizedState===null?ag:ig,e=n(r,o),ro){a=0;do{if(ro=!1,bo=0,25<=a)throw Error(_(301));a+=1,Ce=Ee=null,t.updateQueue=null,xa.current=lg,e=n(r,o)}while(ro)}if(xa.current=Wa,t=Ee!==null&&Ee.next!==null,jn=0,Ce=Ee=he=null,Ba=!1,t)throw Error(_(300));return e}function Ns(){var e=bo!==0;return bo=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?he.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function mt(){if(Ee===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Ce===null?he.memoizedState:Ce.next;if(t!==null)Ce=t,Ee=e;else{if(e===null)throw Error(_(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ce===null?he.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function ko(e,t){return typeof t=="function"?t(e):t}function el(e){var t=mt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=Ee,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=i=null,s=null,u=a;do{var p=u.lane;if((jn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,i=r):s=s.next=f,he.lanes|=p,An|=p}u=u.next}while(u!==null&&u!==a);s===null?i=r:s.next=l,Et(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,he.lanes|=a,An|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function tl(e){var t=mt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Et(a,t.memoizedState)||(Ve=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function cf(){}function df(e,t){var n=he,r=mt(),o=t(),a=!Et(r.memoizedState,o);if(a&&(r.memoizedState=o,Ve=!0),r=r.queue,Ps(mf.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,So(9,pf.bind(null,n,r,o,t),void 0,null),Ne===null)throw Error(_(349));(jn&30)!==0||ff(n,t,o)}return o}function ff(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pf(e,t,n,r){t.value=n,t.getSnapshot=r,hf(t)&&gf(e)}function mf(e,t,n){return n(function(){hf(t)&&gf(e)})}function hf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function gf(e){var t=Vt(e,1);t!==null&&St(t,e,1,-1)}function Ic(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t.queue=e,e=e.dispatch=og.bind(null,he,e),[t.memoizedState,e]}function So(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vf(){return mt().memoizedState}function ba(e,t,n,r){var o=Lt();he.flags|=e,o.memoizedState=So(1|t,n,void 0,r===void 0?null:r)}function ni(e,t,n,r){var o=mt();r=r===void 0?null:r;var a=void 0;if(Ee!==null){var i=Ee.memoizedState;if(a=i.destroy,r!==null&&_s(r,i.deps)){o.memoizedState=So(t,n,a,r);return}}he.flags|=e,o.memoizedState=So(1|t,n,a,r)}function jc(e,t){return ba(8390656,8,e,t)}function Ps(e,t){return ni(2048,8,e,t)}function yf(e,t){return ni(4,2,e,t)}function wf(e,t){return ni(4,4,e,t)}function xf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bf(e,t,n){return n=n!=null?n.concat([e]):null,ni(4,4,xf.bind(null,t,e),n)}function Ls(){}function kf(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_s(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sf(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_s(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ef(e,t,n){return(jn&21)===0?(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n):(Et(n,t)||(n=Pd(),he.lanes|=n,An|=n,e.baseState=!0),t)}function ng(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=qi.transition;qi.transition={};try{e(!1),t()}finally{oe=n,qi.transition=r}}function _f(){return mt().memoizedState}function rg(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cf(e))Nf(t,n);else if(n=lf(e,t,n,r),n!==null){var o=$e();St(n,e,r,o),Pf(n,t,r)}}function og(e,t,n){var r=mn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cf(e))Nf(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,Et(l,i)){var s=t.interleaved;s===null?(o.next=o,xs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}n=lf(e,t,o,r),n!==null&&(o=$e(),St(n,e,r,o),Pf(n,t,r))}}function Cf(e){var t=e.alternate;return e===he||t!==null&&t===he}function Nf(e,t){ro=Ba=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pf(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,is(e,n)}}var Wa={readContext:pt,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},ag={readContext:pt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:jc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ba(4194308,4,xf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ba(4194308,4,e,t)},useInsertionEffect:function(e,t){return ba(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rg.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Ic,useDebugValue:Ls,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Ic(!1),t=e[0];return e=ng.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,o=Lt();if(fe){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Ne===null)throw Error(_(349));(jn&30)!==0||ff(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,jc(mf.bind(null,r,a,e),[e]),r.flags|=2048,So(9,pf.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Ne.identifierPrefix;if(fe){var n=Ut,r=$t;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ig={readContext:pt,useCallback:kf,useContext:pt,useEffect:Ps,useImperativeHandle:bf,useInsertionEffect:yf,useLayoutEffect:wf,useMemo:Sf,useReducer:el,useRef:vf,useState:function(){return el(ko)},useDebugValue:Ls,useDeferredValue:function(e){var t=mt();return Ef(t,Ee.memoizedState,e)},useTransition:function(){var e=el(ko)[0],t=mt().memoizedState;return[e,t]},useMutableSource:cf,useSyncExternalStore:df,useId:_f,unstable_isNewReconciler:!1},lg={readContext:pt,useCallback:kf,useContext:pt,useEffect:Ps,useImperativeHandle:bf,useInsertionEffect:yf,useLayoutEffect:wf,useMemo:Sf,useReducer:tl,useRef:vf,useState:function(){return tl(ko)},useDebugValue:Ls,useDeferredValue:function(e){var t=mt();return Ee===null?t.memoizedState=e:Ef(t,Ee.memoizedState,e)},useTransition:function(){var e=tl(ko)[0],t=mt().memoizedState;return[e,t]},useMutableSource:cf,useSyncExternalStore:df,useId:_f,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ml(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ri={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),o=mn(e),a=Ht(r,o);a.payload=t,n!=null&&(a.callback=n),t=fn(e,a,o),t!==null&&(St(t,e,o,r),wa(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),o=mn(e),a=Ht(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=fn(e,a,o),t!==null&&(St(t,e,o,r),wa(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=mn(e),o=Ht(n,r);o.tag=2,t!=null&&(o.callback=t),t=fn(e,o,r),t!==null&&(St(t,e,r,n),wa(t,e,r))}};function Ac(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!ho(n,r)||!ho(o,a):!0}function Lf(e,t,n){var r=!1,o=vn,a=t.contextType;return typeof a=="object"&&a!==null?a=pt(a):(o=Qe(t)?Mn:Me.current,r=t.contextTypes,a=(r=r!=null)?xr(e,o):vn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ri,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function $c(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ri.enqueueReplaceState(t,t.state,null)}function Il(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},bs(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=pt(a):(a=Qe(t)?Mn:Me.current,o.context=xr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ml(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ri.enqueueReplaceState(o,o.state,null),Ua(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Er(e,t){try{var n="",r=t;do n+=Im(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function nl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sg=typeof WeakMap=="function"?WeakMap:Map;function Df(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ya||(Ya=!0,Jl=r),jl(e,t)},n}function Tf(e,t,n){n=Ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){jl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){jl(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Uc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=kg.bind(null,e,t,n),t.then(e,e))}function Hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var ug=Qt.ReactCurrentOwner,Ve=!1;function Ae(e,t,n,r){t.child=e===null?af(t,null,n,r):kr(t,e.child,n,r)}function Wc(e,t,n,r,o){n=n.render;var a=t.ref;return vr(t,o),r=Cs(e,t,n,r,a,o),n=Ns(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(fe&&n&&ms(t),t.flags|=1,Ae(e,t,r,o),t.child)}function Vc(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Is(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,zf(e,t,a,r,o)):(e=_a(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(i,r)&&e.ref===t.ref)return Yt(e,t,o)}return t.flags|=1,e=hn(a,r),e.ref=t.ref,e.return=t,t.child=e}function zf(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(ho(a,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,Yt(e,t,o)}return Al(e,t,n,r,o)}function Rf(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(fr,Ze),Ze|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(fr,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ie(fr,Ze),Ze|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ie(fr,Ze),Ze|=r;return Ae(e,t,o,n),t.child}function Of(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Al(e,t,n,r,o){var a=Qe(n)?Mn:Me.current;return a=xr(t,a),vr(t,o),n=Cs(e,t,n,r,a,o),r=Ns(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(fe&&r&&ms(t),t.flags|=1,Ae(e,t,n,o),t.child)}function Yc(e,t,n,r,o){if(Qe(n)){var a=!0;Ma(t)}else a=!1;if(vr(t,o),t.stateNode===null)ka(e,t),Lf(t,n,r),Il(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=pt(u):(u=Qe(n)?Mn:Me.current,u=xr(t,u));var p=n.getDerivedStateFromProps,f=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==u)&&$c(t,i,r,u),nn=!1;var m=t.memoizedState;i.state=m,Ua(t,r,i,o),s=t.memoizedState,l!==r||m!==s||Ye.current||nn?(typeof p=="function"&&(Ml(t,n,p,r),s=t.memoizedState),(l=nn||Ac(t,n,l,r,m,s,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,sf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:wt(t.type,l),i.props=u,f=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=pt(s):(s=Qe(n)?Mn:Me.current,s=xr(t,s));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==f||m!==s)&&$c(t,i,r,s),nn=!1,m=t.memoizedState,i.state=m,Ua(t,r,i,o);var y=t.memoizedState;l!==f||m!==y||Ye.current||nn?(typeof v=="function"&&(Ml(t,n,v,r),y=t.memoizedState),(u=nn||Ac(t,n,u,r,m,y,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $l(e,t,n,r,a,o)}function $l(e,t,n,r,o,a){Of(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Tc(t,n,!1),Yt(e,t,a);r=t.stateNode,ug.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=kr(t,e.child,null,a),t.child=kr(t,null,l,a)):Ae(e,t,l,a),t.memoizedState=r.state,o&&Tc(t,n,!0),t.child}function Ff(e){var t=e.stateNode;t.pendingContext?Dc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dc(e,t.context,!1),ks(e,t.containerInfo)}function Qc(e,t,n,r,o){return br(),gs(o),t.flags|=256,Ae(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mf(e,t,n){var r=t.pendingProps,o=me.current,a=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(me,o&1),e===null)return Ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=ii(i,r,0,null),e=Fn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Hl(n),t.memoizedState=Ul,e):Ds(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return cg(e,t,i,r,l,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=hn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=hn(l,a):(a=Fn(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Hl(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return a=e.child,e=a.sibling,r=hn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ds(e,t){return t=ii({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pa(e,t,n,r){return r!==null&&gs(r),kr(t,e.child,null,n),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cg(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=nl(Error(_(422))),pa(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=ii({mode:"visible",children:r.children},o,0,null),a=Fn(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&kr(t,e.child,null,i),t.child.memoizedState=Hl(i),t.memoizedState=Ul,a);if((t.mode&1)===0)return pa(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(_(419)),r=nl(a,r,void 0),pa(e,t,i,r)}if(l=(i&e.childLanes)!==0,Ve||l){if(r=Ne,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Vt(e,o),St(r,e,o,-1))}return Ms(),r=nl(Error(_(421))),pa(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Sg.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,qe=dn(o.nextSibling),et=t,fe=!0,bt=null,e!==null&&(ut[ct++]=$t,ut[ct++]=Ut,ut[ct++]=In,$t=e.id,Ut=e.overflow,In=t),t=Ds(t,r.children),t.flags|=4096,t)}function Jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fl(e.return,t,n)}function rl(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function If(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Ae(e,t,r.children,n),r=me.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jc(e,n,t);else if(e.tag===19)Jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(me,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ha(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),rl(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ha(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}rl(t,!0,n,null,a);break;case"together":rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ka(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dg(e,t,n){switch(t.tag){case 3:Ff(t),br();break;case 5:uf(t);break;case 1:Qe(t.type)&&Ma(t);break;case 4:ks(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ie(Aa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(me,me.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Mf(e,t,n):(ie(me,me.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);ie(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return If(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,Rf(e,t,n)}return Yt(e,t,n)}var jf,Bl,Af,$f;jf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bl=function(){};Af=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Rn(zt.current);var a=null;switch(n){case"input":o=dl(e,o),r=dl(e,r),a=[];break;case"select":o=ge({},o,{value:void 0}),r=ge({},r,{value:void 0}),a=[];break;case"textarea":o=ml(e,o),r=ml(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oa)}gl(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lo.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=o?.[u],r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&se("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};$f=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vr(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fg(e,t,n){var r=t.pendingProps;switch(hs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Qe(t.type)&&Fa(),Oe(t),null;case 3:return r=t.stateNode,Sr(),ue(Ye),ue(Me),Es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(da(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bt!==null&&(Xl(bt),bt=null))),Bl(e,t),Oe(t),null;case 5:Ss(t);var o=Rn(xo.current);if(n=t.type,e!==null&&t.stateNode!=null)Af(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Oe(t),null}if(e=Rn(zt.current),da(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Dt]=t,r[yo]=a,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(o=0;o<Xr.length;o++)se(Xr[o],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":nc(r,a),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},se("invalid",r);break;case"textarea":oc(r,a),se("invalid",r)}gl(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ca(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ca(r.textContent,l,e),o=["children",""+l]):lo.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&se("scroll",r)}switch(n){case"input":Zo(r),rc(r,a,!0);break;case"textarea":Zo(r),ac(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Oa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Dt]=t,e[yo]=r,jf(e,t,!1,!1),t.stateNode=e;e:{switch(i=vl(n,r),n){case"dialog":se("cancel",e),se("close",e),o=r;break;case"iframe":case"object":case"embed":se("load",e),o=r;break;case"video":case"audio":for(o=0;o<Xr.length;o++)se(Xr[o],e);o=r;break;case"source":se("error",e),o=r;break;case"img":case"image":case"link":se("error",e),se("load",e),o=r;break;case"details":se("toggle",e),o=r;break;case"input":nc(e,r),o=dl(e,r),se("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ge({},r,{value:void 0}),se("invalid",e);break;case"textarea":oc(e,r),o=ml(e,r),se("invalid",e);break;default:o=r}gl(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?gd(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&md(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&so(e,s):typeof s=="number"&&so(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(lo.hasOwnProperty(a)?s!=null&&a==="onScroll"&&se("scroll",e):s!=null&&es(e,a,s,i))}switch(n){case"input":Zo(e),rc(e,r,!1);break;case"textarea":Zo(e),ac(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?pr(e,!!r.multiple,a,!1):r.defaultValue!=null&&pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)$f(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Rn(xo.current),Rn(zt.current),da(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(a=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:ca(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ca(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return Oe(t),null;case 13:if(ue(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)rf(),br(),t.flags|=98560,a=!1;else if(a=da(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[Dt]=t}else br(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),a=!1}else bt!==null&&(Xl(bt),bt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(me.current&1)!==0?_e===0&&(_e=3):Ms())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Sr(),Bl(e,t),e===null&&go(t.stateNode.containerInfo),Oe(t),null;case 10:return ws(t.type._context),Oe(t),null;case 17:return Qe(t.type)&&Fa(),Oe(t),null;case 19:if(ue(me),a=t.memoizedState,a===null)return Oe(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Vr(a,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ha(e),i!==null){for(t.flags|=128,Vr(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(me,me.current&1|2),t.child}e=e.sibling}a.tail!==null&&xe()>_r&&(t.flags|=128,r=!0,Vr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ha(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!fe)return Oe(t),null}else 2*xe()-a.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Vr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=xe(),t.sibling=null,n=me.current,ie(me,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return Fs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ze&1073741824)!==0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function pg(e,t){switch(hs(t),t.tag){case 1:return Qe(t.type)&&Fa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),ue(Ye),ue(Me),Es(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(ue(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(me),null;case 4:return Sr(),null;case 10:return ws(t.type._context),null;case 22:case 23:return Fs(),null;case 24:return null;default:return null}}var ma=!1,Fe=!1,mg=typeof WeakSet=="function"?WeakSet:Set,D=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function Wl(e,t,n){try{n()}catch(r){ye(e,t,r)}}var Kc=!1;function hg(e,t){if(Nl=Ta,e=Wd(),ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,l=-1,s=-1,u=0,p=0,f=e,m=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(l=i+o),f!==a||r!==0&&f.nodeType!==3||(s=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===n&&++u===o&&(l=i),m===a&&++p===r&&(s=i),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pl={focusedElem:e,selectionRange:n},Ta=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,b=y.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?g:wt(t.type,g),b);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){ye(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return y=Kc,Kc=!1,y}function oo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Wl(t,n,a)}o=o.next}while(o!==r)}}function oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Uf(e){var t=e.alternate;t!==null&&(e.alternate=null,Uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[yo],delete t[Tl],delete t[Xh],delete t[Zh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hf(e){return e.tag===5||e.tag===3||e.tag===4}function Gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oa));else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}var Le=null,xt=!1;function en(e,t,n){for(n=n.child;n!==null;)Bf(e,t,n),n=n.sibling}function Bf(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Ga,n)}catch{}switch(n.tag){case 5:Fe||dr(n,t);case 6:var r=Le,o=xt;Le=null,en(e,t,n),Le=r,xt=o,Le!==null&&(xt?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(xt?(e=Le,n=n.stateNode,e.nodeType===8?Gi(e.parentNode,n):e.nodeType===1&&Gi(e,n),po(e)):Gi(Le,n.stateNode));break;case 4:r=Le,o=xt,Le=n.stateNode.containerInfo,xt=!0,en(e,t,n),Le=r,xt=o;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Wl(n,t,i),o=o.next}while(o!==r)}en(e,t,n);break;case 1:if(!Fe&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,t,l)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,en(e,t,n),Fe=r):en(e,t,n);break;default:en(e,t,n)}}function Xc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mg),t.forEach(function(r){var o=Eg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,xt=!1;break e;case 3:Le=l.stateNode.containerInfo,xt=!0;break e;case 4:Le=l.stateNode.containerInfo,xt=!0;break e}l=l.return}if(Le===null)throw Error(_(160));Bf(a,i,o),Le=null,xt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ye(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wf(t,e),t=t.sibling}function Wf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),Pt(e),r&4){try{oo(3,e,e.return),oi(3,e)}catch(g){ye(e,e.return,g)}try{oo(5,e,e.return)}catch(g){ye(e,e.return,g)}}break;case 1:yt(t,e),Pt(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(yt(t,e),Pt(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var o=e.stateNode;try{so(o,"")}catch(g){ye(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&dd(o,a),vl(l,i);var u=vl(l,a);for(i=0;i<s.length;i+=2){var p=s[i],f=s[i+1];p==="style"?gd(o,f):p==="dangerouslySetInnerHTML"?md(o,f):p==="children"?so(o,f):es(o,p,f,u)}switch(l){case"input":fl(o,a);break;case"textarea":fd(o,a);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?pr(o,!!a.multiple,v,!1):m!==!!a.multiple&&(a.defaultValue!=null?pr(o,!!a.multiple,a.defaultValue,!0):pr(o,!!a.multiple,a.multiple?[]:"",!1))}o[yo]=a}catch(g){ye(e,e.return,g)}}break;case 6:if(yt(t,e),Pt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(g){ye(e,e.return,g)}}break;case 3:if(yt(t,e),Pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{po(t.containerInfo)}catch(g){ye(e,e.return,g)}break;case 4:yt(t,e),Pt(e);break;case 13:yt(t,e),Pt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Rs=xe())),r&4&&Xc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(u=Fe)||p,yt(t,e),Fe=u):yt(t,e),Pt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&(e.mode&1)!==0)for(D=e,p=e.child;p!==null;){for(f=D=p;D!==null;){switch(m=D,v=m.child,m.tag){case 0:case 11:case 14:case 15:oo(4,m,m.return);break;case 1:dr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){ye(r,n,g)}}break;case 5:dr(m,m.return);break;case 22:if(m.memoizedState!==null){qc(f);continue}}v!==null?(v.return=m,D=v):qc(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{o=f.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=f.stateNode,s=f.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=hd("display",i))}catch(g){ye(e,e.return,g)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){ye(e,e.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:yt(t,e),Pt(e),r&4&&Xc(e);break;case 21:break;default:yt(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(so(o,""),r.flags&=-33);var a=Gc(e);Ql(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=Gc(e);Yl(e,l,i);break;default:throw Error(_(161))}}catch(s){ye(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gg(e,t,n){D=e,Vf(e,t,n)}function Vf(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||ma;if(!i){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Fe;l=ma;var u=Fe;if(ma=i,(Fe=s)&&!u)for(D=o;D!==null;)i=D,s=i.child,i.tag===22&&i.memoizedState!==null?ed(o):s!==null?(s.return=i,D=s):ed(o);for(;a!==null;)D=a,Vf(a,t,n),a=a.sibling;D=o,ma=l,Fe=u}Zc(e,t,n)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,D=a):Zc(e,t,n)}}function Zc(e){for(;D!==null;){var t=D;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Fe||oi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Mc(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mc(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&po(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Fe||t.flags&512&&Vl(t)}catch(m){ye(t,t.return,m)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function qc(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function ed(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oi(4,t)}catch(s){ye(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ye(t,o,s)}}var a=t.return;try{Vl(t)}catch(s){ye(t,a,s)}break;case 5:var i=t.return;try{Vl(t)}catch(s){ye(t,i,s)}}}catch(s){ye(t,t.return,s)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var vg=Math.ceil,Va=Qt.ReactCurrentDispatcher,Ts=Qt.ReactCurrentOwner,ft=Qt.ReactCurrentBatchConfig,ee=0,Ne=null,ke=null,De=0,Ze=0,fr=wn(0),_e=0,Eo=null,An=0,ai=0,zs=0,ao=null,We=null,Rs=0,_r=1/0,jt=null,Ya=!1,Jl=null,pn=null,ha=!1,ln=null,Qa=0,io=0,Kl=null,Sa=-1,Ea=0;function $e(){return(ee&6)!==0?xe():Sa!==-1?Sa:Sa=xe()}function mn(e){return(e.mode&1)===0?1:(ee&2)!==0&&De!==0?De&-De:eg.transition!==null?(Ea===0&&(Ea=Pd()),Ea):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Fd(e.type)),e)}function St(e,t,n,r){if(50<io)throw io=0,Kl=null,Error(_(185));_o(e,n,r),((ee&2)===0||e!==Ne)&&(e===Ne&&((ee&2)===0&&(ai|=n),_e===4&&on(e,De)),Je(e,r),n===1&&ee===0&&(t.mode&1)===0&&(_r=xe()+500,ti&&xn()))}function Je(e,t){var n=e.callbackNode;nh(e,t);var r=Da(e,e===Ne?De:0);if(r===0)n!==null&&sc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sc(n),t===1)e.tag===0?qh(td.bind(null,e)):ef(td.bind(null,e)),Kh(function(){(ee&6)===0&&xn()}),n=null;else{switch(Ld(r)){case 1:n=as;break;case 4:n=Cd;break;case 16:n=La;break;case 536870912:n=Nd;break;default:n=La}n=qf(n,Yf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yf(e,t){if(Sa=-1,Ea=0,(ee&6)!==0)throw Error(_(327));var n=e.callbackNode;if(yr()&&e.callbackNode!==n)return null;var r=Da(e,e===Ne?De:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ja(e,r);else{t=r;var o=ee;ee|=2;var a=Jf();(Ne!==e||De!==t)&&(jt=null,_r=xe()+500,On(e,t));do try{xg();break}catch(l){Qf(e,l)}while(!0);ys(),Va.current=a,ee=o,ke!==null?t=0:(Ne=null,De=0,t=_e)}if(t!==0){if(t===2&&(o=kl(e),o!==0&&(r=o,t=Gl(e,o))),t===1)throw n=Eo,On(e,0),on(e,r),Je(e,xe()),n;if(t===6)on(e,r);else{if(o=e.current.alternate,(r&30)===0&&!yg(o)&&(t=Ja(e,r),t===2&&(a=kl(e),a!==0&&(r=a,t=Gl(e,a))),t===1))throw n=Eo,On(e,0),on(e,r),Je(e,xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Dn(e,We,jt);break;case 3:if(on(e,r),(r&130023424)===r&&(t=Rs+500-xe(),10<t)){if(Da(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Dl(Dn.bind(null,e,We,jt),t);break}Dn(e,We,jt);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-kt(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vg(r/1960))-r,10<r){e.timeoutHandle=Dl(Dn.bind(null,e,We,jt),r);break}Dn(e,We,jt);break;case 5:Dn(e,We,jt);break;default:throw Error(_(329))}}}return Je(e,xe()),e.callbackNode===n?Yf.bind(null,e):null}function Gl(e,t){var n=ao;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=Ja(e,t),e!==2&&(t=We,We=n,t!==null&&Xl(t)),e}function Xl(e){We===null?We=e:We.push.apply(We,e)}function yg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Et(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~zs,t&=~ai,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function td(e){if((ee&6)!==0)throw Error(_(327));yr();var t=Da(e,0);if((t&1)===0)return Je(e,xe()),null;var n=Ja(e,t);if(e.tag!==0&&n===2){var r=kl(e);r!==0&&(t=r,n=Gl(e,r))}if(n===1)throw n=Eo,On(e,0),on(e,t),Je(e,xe()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,We,jt),Je(e,xe()),null}function Os(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(_r=xe()+500,ti&&xn())}}function $n(e){ln!==null&&ln.tag===0&&(ee&6)===0&&yr();var t=ee;ee|=1;var n=ft.transition,r=oe;try{if(ft.transition=null,oe=1,e)return e()}finally{oe=r,ft.transition=n,ee=t,(ee&6)===0&&xn()}}function Fs(){Ze=fr.current,ue(fr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jh(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(hs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fa();break;case 3:Sr(),ue(Ye),ue(Me),Es();break;case 5:Ss(r);break;case 4:Sr();break;case 13:ue(me);break;case 19:ue(me);break;case 10:ws(r.type._context);break;case 22:case 23:Fs()}n=n.return}if(Ne=e,ke=e=hn(e.current,null),De=Ze=t,_e=0,Eo=null,zs=ai=An=0,We=ao=null,zn!==null){for(t=0;t<zn.length;t++)if(n=zn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}zn=null}return e}function Qf(e,t){do{var n=ke;try{if(ys(),xa.current=Wa,Ba){for(var r=he.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ba=!1}if(jn=0,Ce=Ee=he=null,ro=!1,bo=0,Ts.current=null,n===null||n.return===null){_e=1,Eo=t,ke=null;break}e:{var a=e,i=n.return,l=n,s=t;if(t=De,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=l,f=p.tag;if((p.mode&1)===0&&(f===0||f===11||f===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Hc(i);if(v!==null){v.flags&=-257,Bc(v,i,l,a,t),v.mode&1&&Uc(a,u,t),t=v,s=u;var y=t.updateQueue;if(y===null){var g=new Set;g.add(s),t.updateQueue=g}else y.add(s);break e}else{if((t&1)===0){Uc(a,u,t),Ms();break e}s=Error(_(426))}}else if(fe&&l.mode&1){var b=Hc(i);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),Bc(b,i,l,a,t),gs(Er(s,l));break e}}a=s=Er(s,l),_e!==4&&(_e=2),ao===null?ao=[a]:ao.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var d=Df(a,s,t);Fc(a,d);break e;case 1:l=s;var c=a.type,h=a.stateNode;if((a.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(pn===null||!pn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=Tf(a,l,t);Fc(a,k);break e}}a=a.return}while(a!==null)}Gf(n)}catch(w){t=w,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Jf(){var e=Va.current;return Va.current=Wa,e===null?Wa:e}function Ms(){(_e===0||_e===3||_e===2)&&(_e=4),Ne===null||(An&268435455)===0&&(ai&268435455)===0||on(Ne,De)}function Ja(e,t){var n=ee;ee|=2;var r=Jf();(Ne!==e||De!==t)&&(jt=null,On(e,t));do try{wg();break}catch(o){Qf(e,o)}while(!0);if(ys(),ee=n,Va.current=r,ke!==null)throw Error(_(261));return Ne=null,De=0,_e}function wg(){for(;ke!==null;)Kf(ke)}function xg(){for(;ke!==null&&!Qm();)Kf(ke)}function Kf(e){var t=Zf(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Gf(e):ke=t,Ts.current=null}function Gf(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=fg(n,t,Ze),n!==null){ke=n;return}}else{if(n=pg(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,ke=null;return}}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);_e===0&&(_e=5)}function Dn(e,t,n){var r=oe,o=ft.transition;try{ft.transition=null,oe=1,bg(e,t,n,r)}finally{ft.transition=o,oe=r}return null}function bg(e,t,n,r){do yr();while(ln!==null);if((ee&6)!==0)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(rh(e,a),e===Ne&&(ke=Ne=null,De=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ha||(ha=!0,qf(La,function(){return yr(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=ft.transition,ft.transition=null;var i=oe;oe=1;var l=ee;ee|=4,Ts.current=null,hg(e,n),Wf(n,e),Bh(Pl),Ta=!!Nl,Pl=Nl=null,e.current=n,gg(n,e,o),Jm(),ee=l,oe=i,ft.transition=a}else e.current=n;if(ha&&(ha=!1,ln=e,Qa=o),a=e.pendingLanes,a===0&&(pn=null),Xm(n.stateNode,r),Je(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ya)throw Ya=!1,e=Jl,Jl=null,e;return(Qa&1)!==0&&e.tag!==0&&yr(),a=e.pendingLanes,(a&1)!==0?e===Kl?io++:(io=0,Kl=e):io=0,xn(),null}function yr(){if(ln!==null){var e=Ld(Qa),t=ft.transition,n=oe;try{if(ft.transition=null,oe=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Qa=0,(ee&6)!==0)throw Error(_(331));var o=ee;for(ee|=4,D=e.current;D!==null;){var a=D,i=a.child;if((D.flags&16)!==0){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(D=u;D!==null;){var p=D;switch(p.tag){case 0:case 11:case 15:oo(8,p,a)}var f=p.child;if(f!==null)f.return=p,D=f;else for(;D!==null;){p=D;var m=p.sibling,v=p.return;if(Uf(p),p===u){D=null;break}if(m!==null){m.return=v,D=m;break}D=v}}}var y=a.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(g!==null)}}D=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,D=i;else e:for(;D!==null;){if(a=D,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:oo(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,D=d;break e}D=a.return}}var c=e.current;for(D=c;D!==null;){i=D;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,D=h;else e:for(i=c;D!==null;){if(l=D,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:oi(9,l)}}catch(w){ye(l,l.return,w)}if(l===i){D=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,D=k;break e}D=l.return}}if(ee=o,xn(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Ga,e)}catch{}r=!0}return r}finally{oe=n,ft.transition=t}}return!1}function nd(e,t,n){t=Er(n,t),t=Df(e,t,1),e=fn(e,t,1),t=$e(),e!==null&&(_o(e,1,t),Je(e,t))}function ye(e,t,n){if(e.tag===3)nd(e,e,n);else for(;t!==null;){if(t.tag===3){nd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=Er(n,e),e=Tf(t,e,1),t=fn(t,e,1),e=$e(),t!==null&&(_o(t,1,e),Je(t,e));break}}t=t.return}}function kg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(De&n)===n&&(_e===4||_e===3&&(De&130023424)===De&&500>xe()-Rs?On(e,0):zs|=n),Je(e,t)}function Xf(e,t){t===0&&((e.mode&1)===0?t=1:(t=ta,ta<<=1,(ta&130023424)===0&&(ta=4194304)));var n=$e();e=Vt(e,t),e!==null&&(_o(e,t,n),Je(e,n))}function Sg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xf(e,n)}function Eg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Xf(e,n)}var Zf;Zf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ve=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ve=!1,dg(e,t,n);Ve=(e.flags&131072)!==0}else Ve=!1,fe&&(t.flags&1048576)!==0&&tf(t,ja,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ka(e,t),e=t.pendingProps;var o=xr(t,Me.current);vr(t,n),o=Cs(null,t,r,e,o,n);var a=Ns();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(a=!0,Ma(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,bs(t),o.updater=ri,t.stateNode=o,o._reactInternals=t,Il(t,r,e,n),t=$l(null,t,r,!0,a,n)):(t.tag=0,fe&&a&&ms(t),Ae(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ka(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Cg(r),e=wt(r,e),o){case 0:t=Al(null,t,r,e,n);break e;case 1:t=Yc(null,t,r,e,n);break e;case 11:t=Wc(null,t,r,e,n);break e;case 14:t=Vc(null,t,r,wt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Al(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Yc(e,t,r,o,n);case 3:e:{if(Ff(t),e===null)throw Error(_(387));r=t.pendingProps,a=t.memoizedState,o=a.element,sf(e,t),Ua(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Er(Error(_(423)),t),t=Qc(e,t,r,n,o);break e}else if(r!==o){o=Er(Error(_(424)),t),t=Qc(e,t,r,n,o);break e}else for(qe=dn(t.stateNode.containerInfo.firstChild),et=t,fe=!0,bt=null,n=af(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===o){t=Yt(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return uf(t),e===null&&Ol(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Ll(r,o)?i=null:a!==null&&Ll(r,a)&&(t.flags|=32),Of(e,t),Ae(e,t,i,n),t.child;case 6:return e===null&&Ol(t),null;case 13:return Mf(e,t,n);case 4:return ks(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kr(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Wc(e,t,r,o,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,ie(Aa,r._currentValue),r._currentValue=i,a!==null)if(Et(a.value,i)){if(a.children===o.children&&!Ye.current){t=Yt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Ht(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Fl(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(_(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Fl(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}Ae(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,vr(t,n),o=pt(o),r=r(o),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,o=wt(r,t.pendingProps),o=wt(r.type,o),Vc(e,t,r,o,n);case 15:return zf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),ka(e,t),t.tag=1,Qe(r)?(e=!0,Ma(t)):e=!1,vr(t,n),Lf(t,r,o),Il(t,r,o,n),$l(null,t,r,!0,e,n);case 19:return If(e,t,n);case 22:return Rf(e,t,n)}throw Error(_(156,t.tag))};function qf(e,t){return _d(e,t)}function _g(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new _g(e,t,n,r)}function Is(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cg(e){if(typeof e=="function")return Is(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ns)return 11;if(e===rs)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _a(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Is(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case nr:return Fn(n.children,o,a,t);case ts:i=8,o|=8;break;case ll:return e=dt(12,n,t,o|2),e.elementType=ll,e.lanes=a,e;case sl:return e=dt(13,n,t,o),e.elementType=sl,e.lanes=a,e;case ul:return e=dt(19,n,t,o),e.elementType=ul,e.lanes=a,e;case sd:return ii(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case id:i=10;break e;case ld:i=9;break e;case ns:i=11;break e;case rs:i=14;break e;case tn:i=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=dt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Fn(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function ii(e,t,n,r){return e=dt(22,e,r,t),e.elementType=sd,e.lanes=n,e.stateNode={isHidden:!1},e}function ol(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function al(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ng(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function js(e,t,n,r,o,a,i,l,s){return e=new Ng(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=dt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bs(a),e}function Pg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ep(e){if(!e)return vn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Qe(n))return qd(e,n,t)}return t}function tp(e,t,n,r,o,a,i,l,s){return e=js(n,r,!0,e,o,a,i,l,s),e.context=ep(null),n=e.current,r=$e(),o=mn(n),a=Ht(r,o),a.callback=t??null,fn(n,a,o),e.current.lanes=o,_o(e,o,r),Je(e,r),e}function li(e,t,n,r){var o=t.current,a=$e(),i=mn(o);return n=ep(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(o,t,i),e!==null&&(St(e,o,i,a),wa(e,o,i)),i}function Ka(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function As(e,t){rd(e,t),(e=e.alternate)&&rd(e,t)}function Lg(){return null}var np=typeof reportError=="function"?reportError:function(e){console.error(e)};function $s(e){this._internalRoot=e}si.prototype.render=$s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));li(e,t,null,null)};si.prototype.unmount=$s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){li(null,e,null,null)}),t[Wt]=null}};function si(e){this._internalRoot=e}si.prototype.unstable_scheduleHydration=function(e){if(e){var t=zd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&Od(e)}};function Us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function od(){}function Dg(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=Ka(i);a.call(u)}}var i=tp(t,r,e,0,null,!1,!1,"",od);return e._reactRootContainer=i,e[Wt]=i.current,go(e.nodeType===8?e.parentNode:e),$n(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Ka(s);l.call(u)}}var s=js(e,0,!1,null,null,!1,!1,"",od);return e._reactRootContainer=s,e[Wt]=s.current,go(e.nodeType===8?e.parentNode:e),$n(function(){li(t,s,n,r)}),s}function ci(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var l=o;o=function(){var s=Ka(i);l.call(s)}}li(t,i,e,o)}else i=Dg(n,t,e,o,r);return Ka(i)}Dd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gr(t.pendingLanes);n!==0&&(is(t,n|1),Je(t,xe()),(ee&6)===0&&(_r=xe()+500,xn()))}break;case 13:$n(function(){var r=Vt(e,1);if(r!==null){var o=$e();St(r,e,1,o)}}),As(e,1)}};ls=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=$e();St(t,e,134217728,n)}As(e,134217728)}};Td=function(e){if(e.tag===13){var t=mn(e),n=Vt(e,t);if(n!==null){var r=$e();St(n,e,t,r)}As(e,t)}};zd=function(){return oe};Rd=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};wl=function(e,t,n){switch(t){case"input":if(fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ei(r);if(!o)throw Error(_(90));cd(r),fl(r,o)}}}break;case"textarea":fd(e,n);break;case"select":t=n.value,t!=null&&pr(e,!!n.multiple,t,!1)}};wd=Os;xd=$n;var Tg={usingClientEntryPoint:!1,Events:[No,ir,ei,vd,yd,Os]},Yr={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zg={bundleType:Yr.bundleType,version:Yr.version,rendererPackageName:Yr.rendererPackageName,rendererConfig:Yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sd(e),e===null?null:e.stateNode},findFiberByHostInstance:Yr.findFiberByHostInstance||Lg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Qr.isDisabled&&Qr.supportsFiber))try{Ga=Qr.inject(zg),Tt=Qr}catch{}var Qr;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tg;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Us(t))throw Error(_(200));return Pg(e,t,null,n)};rt.createRoot=function(e,t){if(!Us(e))throw Error(_(299));var n=!1,r="",o=np;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=js(e,1,!1,null,null,n,!1,r,o),e[Wt]=t.current,go(e.nodeType===8?e.parentNode:e),new $s(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Sd(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return $n(e)};rt.hydrate=function(e,t,n){if(!ui(t))throw Error(_(200));return ci(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!Us(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=np;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=tp(t,null,e,1,n??null,o,!1,a,i),e[Wt]=t.current,go(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new si(t)};rt.render=function(e,t,n){if(!ui(t))throw Error(_(200));return ci(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!ui(e))throw Error(_(40));return e._reactRootContainer?($n(function(){ci(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};rt.unstable_batchedUpdates=Os;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ui(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return ci(e,t,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426"});var ip=Nn((dy,ap)=>{"use strict";function op(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(op)}catch(e){console.error(e)}}op(),ap.exports=rp()});var sp=Nn(Hs=>{"use strict";var lp=ip();Hs.createRoot=lp.createRoot,Hs.hydrateRoot=lp.hydrateRoot;var fy});var im=J(V()),lm=J(sp());var gt=J(V());var at=J(V(),1),R=J(V(),1),pe=J(V(),1),ou=J(V(),1),Ap=J(V(),1),ne=J(V(),1),Uv=J(V(),1),Hv=J(V(),1),Bv=J(V(),1),F=J(V(),1),qp=J(V(),1);var up="popstate";function gp(e={}){function t(r,o){let{pathname:a,search:i,hash:l}=r.location;return Ys("",{pathname:a,search:i,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Pr(o)}return Og(t,n,null,e)}function ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ot(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Rg(){return Math.random().toString(36).substring(2,10)}function cp(e,t){return{usr:e.state,key:e.key,idx:t}}function Ys(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Bn(t):t,state:n,key:t&&t.key||r||Rg()}}function Pr({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Bn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Og(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,l="POP",s=null,u=p();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function p(){return(i.state||{idx:null}).idx}function f(){l="POP";let b=p(),d=b==null?null:b-u;u=b,s&&s({action:l,location:g.location,delta:d})}function m(b,d){l="PUSH";let c=Ys(g.location,b,d);n&&n(c,b),u=p()+1;let h=cp(c,u),k=g.createHref(c);try{i.pushState(h,"",k)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;o.location.assign(k)}a&&s&&s({action:l,location:g.location,delta:1})}function v(b,d){l="REPLACE";let c=Ys(g.location,b,d);n&&n(c,b),u=p();let h=cp(c,u),k=g.createHref(c);i.replaceState(h,"",k),a&&s&&s({action:l,location:g.location,delta:0})}function y(b){return Fg(b)}let g={get action(){return l},get location(){return e(o,i)},listen(b){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(up,f),s=b,()=>{o.removeEventListener(up,f),s=null}},createHref(b){return t(o,b)},createURL:y,encodeLocation(b){let d=y(b);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:v,go(b){return i.go(b)}};return g}function Fg(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ce(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Pr(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}var Mg;Mg=new WeakMap;function Gs(e,t,n="/"){return Ig(e,t,n,!1)}function Ig(e,t,n,r){let o=typeof t=="string"?Bn(t):t,a=Rt(o.pathname||"/",n);if(a==null)return null;let i=vp(e);Ag(i);let l=null;for(let s=0;l==null&&s<i.length;++s){let u=Gg(a);l=Jg(i[s],u,r)}return l}function jg(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function vp(e,t=[],n=[],r="",o=!1){let a=(i,l,s=o,u)=>{let p={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(r)&&s)return;ce(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length)}let f=Jt([r,p.relativePath]),m=n.concat(p);i.children&&i.children.length>0&&(ce(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),vp(i.children,t,m,f,s)),!(i.path==null&&!i.index)&&t.push({path:f,score:Yg(f,i.index),routesMeta:m})};return e.forEach((i,l)=>{if(i.path===""||!i.path?.includes("?"))a(i,l);else for(let s of yp(i.path))a(i,l,!0,s)}),t}function yp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let i=yp(r.join("/")),l=[];return l.push(...i.map(s=>s===""?a:[a,s].join("/"))),o&&l.push(...i),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Ag(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Qg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var $g=/^:[\w-]+$/,Ug=3,Hg=2,Bg=1,Wg=10,Vg=-2,dp=e=>e==="*";function Yg(e,t){let n=e.split("/"),r=n.length;return n.some(dp)&&(r+=Vg),t&&(r+=Hg),n.filter(o=>!dp(o)).reduce((o,a)=>o+($g.test(a)?Ug:a===""?Bg:Wg),r)}function Qg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Jg(e,t,n=!1){let{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,p=a==="/"?t:t.slice(a.length)||"/",f=Do({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},p),m=s.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Do({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},p)),!f)return null;Object.assign(o,f.params),i.push({params:o,pathname:Jt([a,f.pathname]),pathnameBase:qg(Jt([a,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(a=Jt([a,f.pathnameBase]))}return i}function Do(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Kg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,{paramName:p,isOptional:f},m)=>{if(p==="*"){let y=l[m]||"";i=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}let v=l[m];return f&&!v?u[p]=void 0:u[p]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:i,pattern:e}}function Kg(e,t=!1,n=!0){ot(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Gg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ot(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Rt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var wp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xg=e=>wp.test(e);function xp(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Bn(e):e,a;if(n)if(Xg(n))a=n;else{if(n.includes("//")){let i=n;n=n.replace(/\/\/+/g,"/"),ot(!1,`Pathnames cannot have embedded double slashes - normalizing ${i} -> ${n}`)}n.startsWith("/")?a=fp(n.substring(1),"/"):a=fp(n,t)}else a=t;return{pathname:a,search:ev(r),hash:tv(o)}}function fp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Bs(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bp(e){let t=Zg(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function kp(e,t,n,r=!1){let o;typeof e=="string"?o=Bn(e):(o={...e},ce(!o.pathname||!o.pathname.includes("?"),Bs("?","pathname","search",o)),ce(!o.pathname||!o.pathname.includes("#"),Bs("#","pathname","hash",o)),ce(!o.search||!o.search.includes("#"),Bs("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,l;if(i==null)l=n;else{let f=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),f-=1;o.pathname=m.join("/")}l=f>=0?t[f]:"/"}let s=xp(o,l),u=i&&i!=="/"&&i.endsWith("/"),p=(a||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}var Jt=e=>e.join("/").replace(/\/\/+/g,"/"),qg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ev=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,tv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;var Sp=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ep(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function nv(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var _p=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Cp(e,t){let n=e;if(typeof n!="string"||!wp.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(_p)try{let a=new URL(window.location.href),i=n.startsWith("//")?new URL(a.protocol+n):new URL(n),l=Rt(i.pathname,t);i.origin===a.origin&&l!=null?n=l+i.search+i.hash:o=!0}catch{ot(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}var my=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Np=["POST","PUT","PATCH","DELETE"],hy=new Set(Np),rv=["GET",...Np],gy=new Set(rv);var Wn=at.createContext(null);Wn.displayName="DataRouter";var Lr=at.createContext(null);Lr.displayName="DataRouterState";var ov=at.createContext(!1);var Xs=at.createContext({isTransitioning:!1});Xs.displayName="ViewTransition";var Pp=at.createContext(new Map);Pp.displayName="Fetchers";var av=at.createContext(null);av.displayName="Await";var He=at.createContext(null);He.displayName="Navigation";var Dr=at.createContext(null);Dr.displayName="Location";var _t=at.createContext({outlet:null,matches:[],isDataRoute:!1});_t.displayName="Route";var Zs=at.createContext(null);Zs.displayName="RouteError";var Qs=!0,Lp="REACT_ROUTER_ERROR",iv="REDIRECT",lv="ROUTE_ERROR_RESPONSE";function sv(e){if(e.startsWith(`${Lp}:${iv}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function uv(e){if(e.startsWith(`${Lp}:${lv}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Sp(t.status,t.statusText,t.data)}catch{}}function Dp(e,{relative:t}={}){ce(Tr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=R.useContext(He),{hash:o,pathname:a,search:i}=zr(e,{relative:t}),l=a;return n!=="/"&&(l=a==="/"?n:Jt([n,a])),r.createHref({pathname:l,search:i,hash:o})}function Tr(){return R.useContext(Dr)!=null}function ht(){return ce(Tr(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Dr).location}var Tp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zp(e){R.useContext(He).static||R.useLayoutEffect(e)}function Ke(){let{isDataRoute:e}=R.useContext(_t);return e?wv():cv()}function cv(){ce(Tr(),"useNavigate() may be used only in the context of a <Router> component.");let e=R.useContext(Wn),{basename:t,navigator:n}=R.useContext(He),{matches:r}=R.useContext(_t),{pathname:o}=ht(),a=JSON.stringify(bp(r)),i=R.useRef(!1);return zp(()=>{i.current=!0}),R.useCallback((s,u={})=>{if(ot(i.current,Tp),!i.current)return;if(typeof s=="number"){n.go(s);return}let p=kp(s,JSON.parse(a),o,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Jt([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,a,o,e])}var vy=R.createContext(null);function To(){let{matches:e}=R.useContext(_t),t=e[e.length-1];return t?t.params:{}}function zr(e,{relative:t}={}){let{matches:n}=R.useContext(_t),{pathname:r}=ht(),o=JSON.stringify(bp(n));return R.useMemo(()=>kp(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function Rp(e,t){return Op(e,t)}function Op(e,t,n,r,o){ce(Tr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=R.useContext(He),{matches:i}=R.useContext(_t),l=i[i.length-1],s=l?l.params:{},u=l?l.pathname:"/",p=l?l.pathnameBase:"/",f=l&&l.route;if(Qs){let c=f&&f.path||"";jp(u,!f||c.endsWith("*")||c.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${c}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${c}"> to <Route path="${c==="/"?"*":`${c}/*`}">.`)}let m=ht(),v;if(t){let c=typeof t=="string"?Bn(t):t;ce(p==="/"||c.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${c.pathname}" was given in the \`location\` prop.`),v=c}else v=m;let y=v.pathname||"/",g=y;if(p!=="/"){let c=p.replace(/^\//,"").split("/");g="/"+y.replace(/^\//,"").split("/").slice(c.length).join("/")}let b=Gs(e,{pathname:g});Qs&&(ot(f||b!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),ot(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));let d=hv(b&&b.map(c=>Object.assign({},c,{params:Object.assign({},s,c.params),pathname:Jt([p,a.encodeLocation?a.encodeLocation(c.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:c.pathname]),pathnameBase:c.pathnameBase==="/"?p:Jt([p,a.encodeLocation?a.encodeLocation(c.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:c.pathnameBase])})),i,n,r,o);return t&&d?R.createElement(Dr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},d):d}function dv(){let e=Ip(),t=Ep(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},i=null;return Qs&&(console.error("Error handled by React Router default ErrorBoundary:",e),i=R.createElement(R.Fragment,null,R.createElement("p",null,"\u{1F4BF} Hey developer \u{1F44B}"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:a},"ErrorBoundary")," or"," ",R.createElement("code",{style:a},"errorElement")," prop on your route."))),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:o},n):null,i)}var fv=R.createElement(dv,null),Fp=class extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let n=uv(e.digest);n&&(e=n)}let t=e!==void 0?R.createElement(_t.Provider,{value:this.props.routeContext},R.createElement(Zs.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?R.createElement(pv,{error:e},t):t}};Fp.contextType=ov;var Ws=new WeakMap;function pv({children:e,error:t}){let{basename:n}=R.useContext(He);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=sv(t.digest);if(r){let o=Ws.get(t);if(o)throw o;let a=Cp(r.location,n);if(_p&&!Ws.get(t))if(a.isExternal||r.reloadDocument)window.location.href=a.absoluteURL||a.to;else{let i=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:r.replace}));throw Ws.set(t,i),i}return R.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return e}function mv({routeContext:e,match:t,children:n}){let r=R.useContext(Wn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),R.createElement(_t.Provider,{value:e},n)}function hv(e,t=[],n=null,r=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,i=n?.errors;if(i!=null){let p=a.findIndex(f=>f.route.id&&i?.[f.route.id]!==void 0);ce(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let l=!1,s=-1;if(n)for(let p=0;p<a.length;p++){let f=a[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(s=p),f.route.id){let{loaderData:m,errors:v}=n,y=f.route.loader&&!m.hasOwnProperty(f.route.id)&&(!v||v[f.route.id]===void 0);if(f.route.lazy||y){l=!0,s>=0?a=a.slice(0,s+1):a=[a[0]];break}}}let u=n&&r?(p,f)=>{r(p,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:nv(n.matches),errorInfo:f})}:void 0;return a.reduceRight((p,f,m)=>{let v,y=!1,g=null,b=null;n&&(v=i&&f.route.id?i[f.route.id]:void 0,g=f.route.errorElement||fv,l&&(s<0&&m===0?(jp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,b=null):s===m&&(y=!0,b=f.route.hydrateFallbackElement||null)));let d=t.concat(a.slice(0,m+1)),c=()=>{let h;return v?h=g:y?h=b:f.route.Component?h=R.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=p,R.createElement(mv,{match:f,routeContext:{outlet:p,matches:d,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?R.createElement(Fp,{location:n.location,revalidation:n.revalidation,component:g,error:v,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0},onError:u}):c()},null)}function qs(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gv(e){let t=R.useContext(Wn);return ce(t,qs(e)),t}function eu(e){let t=R.useContext(Lr);return ce(t,qs(e)),t}function vv(e){let t=R.useContext(_t);return ce(t,qs(e)),t}function tu(e){let t=vv(e),n=t.matches[t.matches.length-1];return ce(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function yv(){return tu("useRouteId")}function Mp(){return eu("useNavigation").navigation}function nu(){let{matches:e,loaderData:t}=eu("useMatches");return R.useMemo(()=>e.map(n=>jg(n,t)),[e,t])}function Ip(){let e=R.useContext(Zs),t=eu("useRouteError"),n=tu("useRouteError");return e!==void 0?e:t.errors?.[n]}function wv(){let{router:e}=gv("useNavigate"),t=tu("useNavigate"),n=R.useRef(!1);return zp(()=>{n.current=!0}),R.useCallback(async(o,a={})=>{ot(n.current,Tp),n.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var pp={};function jp(e,t,n){!t&&!pp[e]&&(pp[e]=!0,ot(!1,n))}var xv="useOptimistic",yy=pe[xv];var wy=pe.memo(bv);function bv({routes:e,future:t,state:n,onError:r}){return Op(e,void 0,n,r,t)}function Se(e){ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ru({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:a=!1,unstable_useTransitions:i}){ce(!Tr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),s=pe.useMemo(()=>({basename:l,navigator:o,static:a,unstable_useTransitions:i,future:{}}),[l,o,a,i]);typeof n=="string"&&(n=Bn(n));let{pathname:u="/",search:p="",hash:f="",state:m=null,key:v="default"}=n,y=pe.useMemo(()=>{let g=Rt(u,l);return g==null?null:{location:{pathname:g,search:p,hash:f,state:m,key:v},navigationType:r}},[l,u,p,f,m,v,r]);return ot(y!=null,`<Router basename="${l}"> is not able to match the URL "${u}${p}${f}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:pe.createElement(He.Provider,{value:s},pe.createElement(Dr.Provider,{children:t,value:y}))}function zo({children:e,location:t}){return Rp(hi(e),t)}function hi(e,t=[]){let n=[];return pe.Children.forEach(e,(r,o)=>{if(!pe.isValidElement(r))return;let a=[...t,o];if(r.type===pe.Fragment){n.push.apply(n,hi(r.props.children,a));return}ce(r.type===Se,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ce(!r.props.index||!r.props.children,"An index route cannot have child routes.");let i={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=hi(r.props.children,a)),n.push(i)}),n}var pi="get",mi="application/x-www-form-urlencoded";function gi(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function kv(e){return gi(e)&&e.tagName.toLowerCase()==="button"}function Sv(e){return gi(e)&&e.tagName.toLowerCase()==="form"}function Ev(e){return gi(e)&&e.tagName.toLowerCase()==="input"}function _v(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Cv(e,t){return e.button===0&&(!t||t==="_self")&&!_v(e)}var di=null;function Nv(){if(di===null)try{new FormData(document.createElement("form"),0),di=!1}catch{di=!0}return di}var Pv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vs(e){return e!=null&&!Pv.has(e)?(ot(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mi}"`),null):e}function Lv(e,t){let n,r,o,a,i;if(Sv(e)){let l=e.getAttribute("action");r=l?Rt(l,t):null,n=e.getAttribute("method")||pi,o=Vs(e.getAttribute("enctype"))||mi,a=new FormData(e)}else if(kv(e)||Ev(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||l.getAttribute("action");if(r=s?Rt(s,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||pi,o=Vs(e.getAttribute("formenctype"))||Vs(l.getAttribute("enctype"))||mi,a=new FormData(l,e),!Nv()){let{name:u,type:p,value:f}=e;if(p==="image"){let m=u?`${u}.`:"";a.append(`${m}x`,"0"),a.append(`${m}y`,"0")}else u&&a.append(u,f)}}else{if(gi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=pi,r=null,o=mi,i=e}return a&&o==="text/plain"&&(i=a,a=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:a,body:i}}var xy=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Dv={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Tv=/[&><\u2028\u2029]/g;function mp(e){return e.replace(Tv,t=>Dv[t])}function au(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zv(e,t,n,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:t&&Rt(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function Rv(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){if(console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode&&import.meta.hot)throw n;return window.location.reload(),new Promise(()=>{})}}function Ov(e){return e!=null&&typeof e.page=="string"}function Fv(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Mv(e,t,n){let r=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let i=await Rv(a,n);return i.links?i.links():[]}return[]}));return $v(r.flat(1).filter(Fv).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function hp(e,t,n,r,o,a){let i=(s,u)=>n[u]?s.route.id!==n[u].route.id:!0,l=(s,u)=>n[u].pathname!==s.pathname||n[u].route.path?.endsWith("*")&&n[u].params["*"]!==s.params["*"];return a==="assets"?t.filter((s,u)=>i(s,u)||l(s,u)):a==="data"?t.filter((s,u)=>{let p=r.routes[s.route.id];if(!p||!p.hasLoader)return!1;if(i(s,u)||l(s,u))return!0;if(s.route.shouldRevalidate){let f=s.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Iv(e,t,{includeHydrateFallback:n}={}){return jv(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function jv(e){return[...new Set(e)]}function Av(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function $v(e,t){let n=new Set,r=new Set(t);return e.reduce((o,a)=>{if(t&&!Ov(a)&&a.as==="script"&&a.href&&r.has(a.href))return o;let l=JSON.stringify(Av(a));return n.has(l)||(n.add(l),o.push({key:l,link:a})),o},[])}function $p(){let e=ne.useContext(Wn);return au(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Wv(){let e=ne.useContext(Lr);return au(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ro=ne.createContext(void 0);Ro.displayName="FrameworkContext";function Up(){let e=ne.useContext(Ro);return au(e,"You must render this element inside a <HydratedRouter> element"),e}function Vv(e,t){let n=ne.useContext(Ro),[r,o]=ne.useState(!1),[a,i]=ne.useState(!1),{onFocus:l,onBlur:s,onMouseEnter:u,onMouseLeave:p,onTouchStart:f}=t,m=ne.useRef(null);ne.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let g=d=>{d.forEach(c=>{i(c.isIntersecting)})},b=new IntersectionObserver(g,{threshold:.5});return m.current&&b.observe(m.current),()=>{b.disconnect()}}},[e]),ne.useEffect(()=>{if(r){let g=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(g)}}},[r]);let v=()=>{o(!0)},y=()=>{o(!1),i(!1)};return n?e!=="intent"?[a,m,{}]:[a,m,{onFocus:Lo(l,v),onBlur:Lo(s,y),onMouseEnter:Lo(u,v),onMouseLeave:Lo(p,y),onTouchStart:Lo(f,v)}]:[!1,m,{}]}function Lo(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Hp({page:e,...t}){let{router:n}=$p(),r=ne.useMemo(()=>Gs(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?ne.createElement(Qv,{page:e,matches:r,...t}):null}function Yv(e){let{manifest:t,routeModules:n}=Up(),[r,o]=ne.useState([]);return ne.useEffect(()=>{let a=!1;return Mv(e,t,n).then(i=>{a||o(i)}),()=>{a=!0}},[e,t,n]),r}function Qv({page:e,matches:t,...n}){let r=ht(),{future:o,manifest:a,routeModules:i}=Up(),{basename:l}=$p(),{loaderData:s,matches:u}=Wv(),p=ne.useMemo(()=>hp(e,t,u,a,r,"data"),[e,t,u,a,r]),f=ne.useMemo(()=>hp(e,t,u,a,r,"assets"),[e,t,u,a,r]),m=ne.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let g=new Set,b=!1;if(t.forEach(c=>{let h=a.routes[c.route.id];!h||!h.hasLoader||(!p.some(k=>k.route.id===c.route.id)&&c.route.id in s&&i[c.route.id]?.shouldRevalidate||h.hasClientLoader?b=!0:g.add(c.route.id))}),g.size===0)return[];let d=zv(e,l,o.unstable_trailingSlashAwareDataRequests,"data");return b&&g.size>0&&d.searchParams.set("_routes",t.filter(c=>g.has(c.route.id)).map(c=>c.route.id).join(",")),[d.pathname+d.search]},[l,o.unstable_trailingSlashAwareDataRequests,s,r,a,p,t,e,i]),v=ne.useMemo(()=>Iv(f,a),[f,a]),y=Yv(f);return ne.createElement(ne.Fragment,null,m.map(g=>ne.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...n})),v.map(g=>ne.createElement("link",{key:g,rel:"modulepreload",href:g,...n})),y.map(({key:g,link:b})=>ne.createElement("link",{key:g,nonce:n.nonce,...b})))}function Jv(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Kv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Kv&&(window.__reactRouterVersion="7.12.0")}catch{}function iu({basename:e,children:t,unstable_useTransitions:n,window:r}){let o=F.useRef();o.current==null&&(o.current=gp({window:r,v5Compat:!0}));let a=o.current,[i,l]=F.useState({action:a.action,location:a.location}),s=F.useCallback(u=>{n===!1?l(u):F.startTransition(()=>l(u))},[n]);return F.useLayoutEffect(()=>a.listen(s),[a,s]),F.createElement(ru,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a,unstable_useTransitions:n})}function Bp({basename:e,children:t,history:n,unstable_useTransitions:r}){let[o,a]=F.useState({action:n.action,location:n.location}),i=F.useCallback(l=>{r===!1?a(l):F.startTransition(()=>a(l))},[r]);return F.useLayoutEffect(()=>n.listen(i),[n,i]),F.createElement(ru,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:n,unstable_useTransitions:r})}Bp.displayName="unstable_HistoryRouter";var Wp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bn=F.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:a,replace:i,state:l,target:s,to:u,preventScrollReset:p,viewTransition:f,unstable_defaultShouldRevalidate:m,...v},y){let{basename:g,unstable_useTransitions:b}=F.useContext(He),d=typeof u=="string"&&Wp.test(u),c=Cp(u,g);u=c.to;let h=Dp(u,{relative:o}),[k,w,S]=Vv(r,v),x=Jp(u,{replace:i,state:l,target:s,preventScrollReset:p,relative:o,viewTransition:f,unstable_defaultShouldRevalidate:m,unstable_useTransitions:b});function N($){t&&t($),$.defaultPrevented||x($)}let A=F.createElement("a",{...v,...S,href:c.absoluteURL||h,onClick:c.isExternal||a?t:N,ref:Jv(y,w),target:s,"data-discover":!d&&n==="render"?"true":void 0});return k&&!d?F.createElement(F.Fragment,null,A,F.createElement(Hp,{page:h})):A});bn.displayName="Link";var kn=F.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:a,to:i,viewTransition:l,children:s,...u},p){let f=zr(i,{relative:u.relative}),m=ht(),v=F.useContext(Lr),{navigator:y,basename:g}=F.useContext(He),b=v!=null&&Zp(f)&&l===!0,d=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,c=m.pathname,h=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;n||(c=c.toLowerCase(),h=h?h.toLowerCase():null,d=d.toLowerCase()),h&&g&&(h=Rt(h,g)||h);let k=d!=="/"&&d.endsWith("/")?d.length-1:d.length,w=c===d||!o&&c.startsWith(d)&&c.charAt(k)==="/",S=h!=null&&(h===d||!o&&h.startsWith(d)&&h.charAt(d.length)==="/"),x={isActive:w,isPending:S,isTransitioning:b},N=w?t:void 0,A;typeof r=="function"?A=r(x):A=[r,w?"active":null,S?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let $=typeof a=="function"?a(x):a;return F.createElement(bn,{...u,"aria-current":N,className:A,ref:p,style:$,to:i,viewTransition:l},typeof s=="function"?s(x):s)});kn.displayName="NavLink";var Vp=F.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:a,method:i=pi,action:l,onSubmit:s,relative:u,preventScrollReset:p,viewTransition:f,unstable_defaultShouldRevalidate:m,...v},y)=>{let{unstable_useTransitions:g}=F.useContext(He),b=Kp(),d=Gp(l,{relative:u}),c=i.toLowerCase()==="get"?"get":"post",h=typeof l=="string"&&Wp.test(l);return F.createElement("form",{ref:y,method:c,action:d,onSubmit:r?s:w=>{if(s&&s(w),w.defaultPrevented)return;w.preventDefault();let S=w.nativeEvent.submitter,x=S?.getAttribute("formmethod")||i,N=()=>b(S||w.currentTarget,{fetcherKey:t,method:x,navigate:n,replace:o,state:a,relative:u,preventScrollReset:p,viewTransition:f,unstable_defaultShouldRevalidate:m});g&&n!==!1?F.startTransition(()=>N()):N()},...v,"data-discover":!h&&e==="render"?"true":void 0})});Vp.displayName="Form";function Yp({getKey:e,storageKey:t,...n}){let r=F.useContext(Ro),{basename:o}=F.useContext(He),a=ht(),i=nu();Xp({getKey:e,storageKey:t});let l=F.useMemo(()=>{if(!r||!e)return null;let u=Ks(a,i,o,e);return u!==a.key?u:null},[]);if(!r||r.isSpaMode)return null;let s=((u,p)=>{if(!window.history.state||!window.history.state.key){let f=Math.random().toString(32).slice(2);window.history.replaceState({key:f},"")}try{let m=JSON.parse(sessionStorage.getItem(u)||"{}")[p||window.history.state.key];typeof m=="number"&&window.scrollTo(0,m)}catch(f){console.error(f),sessionStorage.removeItem(u)}}).toString();return F.createElement("script",{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${s})(${mp(JSON.stringify(t||Js))}, ${mp(JSON.stringify(l))})`}})}Yp.displayName="ScrollRestoration";function Qp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lu(e){let t=F.useContext(Wn);return ce(t,Qp(e)),t}function Gv(e){let t=F.useContext(Lr);return ce(t,Qp(e)),t}function Jp(e,{target:t,replace:n,state:r,preventScrollReset:o,relative:a,viewTransition:i,unstable_defaultShouldRevalidate:l,unstable_useTransitions:s}={}){let u=Ke(),p=ht(),f=zr(e,{relative:a});return F.useCallback(m=>{if(Cv(m,t)){m.preventDefault();let v=n!==void 0?n:Pr(p)===Pr(f),y=()=>u(e,{replace:v,state:r,preventScrollReset:o,relative:a,viewTransition:i,unstable_defaultShouldRevalidate:l});s?F.startTransition(()=>y()):y()}},[p,u,f,n,r,t,e,o,a,i,l,s])}var Xv=0,Zv=()=>`__${String(++Xv)}__`;function Kp(){let{router:e}=lu("useSubmit"),{basename:t}=F.useContext(He),n=yv(),r=e.fetch,o=e.navigate;return F.useCallback(async(a,i={})=>{let{action:l,method:s,encType:u,formData:p,body:f}=Lv(a,t);if(i.navigate===!1){let m=i.fetcherKey||Zv();await r(m,n,i.action||l,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:p,body:f,formMethod:i.method||s,formEncType:i.encType||u,flushSync:i.flushSync})}else await o(i.action||l,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:p,body:f,formMethod:i.method||s,formEncType:i.encType||u,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[r,o,t,n])}function Gp(e,{relative:t}={}){let{basename:n}=F.useContext(He),r=F.useContext(_t);ce(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),a={...zr(e||".",{relative:t})},i=ht();if(e==null){a.search=i.search;let l=new URLSearchParams(a.search),s=l.getAll("index");if(s.some(p=>p==="")){l.delete("index"),s.filter(f=>f).forEach(f=>l.append("index",f));let p=l.toString();a.search=p?`?${p}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:Jt([n,a.pathname])),Pr(a)}var Js="react-router-scroll-positions",fi={};function Ks(e,t,n,r){let o=null;return r&&(n!=="/"?o=r({...e,pathname:Rt(e.pathname,n)||e.pathname},t):o=r(e,t)),o==null&&(o=e.key),o}function Xp({getKey:e,storageKey:t}={}){let{router:n}=lu("useScrollRestoration"),{restoreScrollPosition:r,preventScrollReset:o}=Gv("useScrollRestoration"),{basename:a}=F.useContext(He),i=ht(),l=nu(),s=Mp();F.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),qv(F.useCallback(()=>{if(s.state==="idle"){let u=Ks(i,l,a,e);fi[u]=window.scrollY}try{sessionStorage.setItem(t||Js,JSON.stringify(fi))}catch(u){ot(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`)}window.history.scrollRestoration="auto"},[s.state,e,a,i,l,t])),typeof document<"u"&&(F.useLayoutEffect(()=>{try{let u=sessionStorage.getItem(t||Js);u&&(fi=JSON.parse(u))}catch{}},[t]),F.useLayoutEffect(()=>{let u=n?.enableScrollRestoration(fi,()=>window.scrollY,e?(p,f)=>Ks(p,f,a,e):void 0);return()=>u&&u()},[n,a,e]),F.useLayoutEffect(()=>{if(r!==!1){if(typeof r=="number"){window.scrollTo(0,r);return}try{if(i.hash){let u=document.getElementById(decodeURIComponent(i.hash.slice(1)));if(u){u.scrollIntoView();return}}}catch{ot(!1,`"${i.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}o!==!0&&window.scrollTo(0,0)}},[i,r,o]))}function qv(e,t){let{capture:n}=t||{};F.useEffect(()=>{let r=n!=null?{capture:n}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,n])}function Zp(e,{relative:t}={}){let n=F.useContext(Xs);ce(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=lu("useViewTransitionState"),o=zr(e,{relative:t});if(!n.isTransitioning)return!1;let a=Rt(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=Rt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Do(o.pathname,i)!=null||Do(o.pathname,a)!=null}(function(){if(!document.getElementById("c62a888d9d62ae4e611fb1f1c11ec20b6be422d570d7e237577771d161e51220")){var e=document.createElement("style");e.id="c62a888d9d62ae4e611fb1f1c11ec20b6be422d570d7e237577771d161e51220",e.textContent=`/* GLOBAL RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* COLOR SYSTEM */
:root {
  --bg: #f5f7fa;
  --bg-soft: #eff6ff;
  --text: #2f2a26;
  --accent: #666dd5;
  --accent-muted: #807b58;
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
`,document.head.appendChild(e)}})();var C=J(V());var z=J(V());(function(){if(!document.getElementById("e0effbf012d52a248d477153a26577f119e83cb3bd3a3bea5ba5a3bb920b7280")){var e=document.createElement("style");e.id="e0effbf012d52a248d477153a26577f119e83cb3bd3a3bea5ba5a3bb920b7280",e.textContent=`/* Booking Scheduler Styles */
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
`,document.head.appendChild(e)}})();var tm=Array.from({length:24},(e,t)=>t),Ct=e=>e?new Date(e.replace(" ","T").replace(" -","-")):null,Ge=e=>{if(!e)return null;let t=n=>String(n).padStart(2,"0");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":00"},Oo=(e,t)=>{let n=Vn(e);return t.filter(r=>{let o=Rr(r?.effective_date),a=Rr(r?.end_date);return!(o&&o>n||a&&a<n)}).sort((r,o)=>Rr(o?.effective_date)-Rr(r?.effective_date))[0]||null},Fo=(e,t,n,r)=>e<r&&n<t;var Vn=e=>{let t=new Date(e);return t.setHours(0,0,0,0),t},Yn=(e,t,n)=>{let r=new Date(e);return r.setHours(t,n,0,0),r},Sn=(e,t)=>{let n=new Date(e);return n.setDate(n.getDate()+t),n},vi=e=>e?Ct(e).getHours():null,ey=(e,t=[])=>{if(!t.length)return!1;let r=(e.getDay()+6)%7;return t.includes(r)},em=(e,t,n)=>e>=t&&e<n;var Qn=(e,t)=>new Date(e.getTime()+t*60*1e3);var Rr=e=>{if(!e)return null;let[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},ty=({day:e,hour:t,window:n})=>{if(!n||e<Vn(new Date))return!1;let r=Rr(n.effective_date),o=Rr(n.end_date);if(r&&r>e||o&&o<e||ey(e,n.weekends))return!1;let a=vi(n.start_time),i=vi(n.end_time);if(!em(t,a,i))return!1;let l=vi(n.break_from),s=vi(n.break_to);return!em(t,l,s)},nm=({day:e,hour:t,windows:n})=>{let r=Oo(e,n);return r?ty({day:e,hour:t,window:r}):!1};var En=e=>{if(!e)return"";let t=new Date(e);return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`},_n=(e,t)=>{let[n,r]=t.split(":").map(Number),o=new Date(e);return o.setHours(n,r,0,0),Ge(o)};function su({service:e,onClose:t,onComplete:n,company_id:r}){let[o,a]=(0,z.useState)(null),[i,l]=(0,z.useState)([]),[s,u]=(0,z.useState)(null),[p,f]=(0,z.useState)(!1),[m,v]=(0,z.useState)(!1),[y,g]=(0,z.useState)({first_name:"",last_name:"",email:"",phone:""}),[b,d]=(0,z.useState)(1),h=(()=>{let H=[],re=new Date;for(let B=0;B<14;B++){let U=new Date(re);U.setDate(re.getDate()+B),H.push(U)}return H})();(0,z.useEffect)(()=>{o&&k()},[o]);let k=async()=>{f(!0);try{let H=o.toISOString().split("T")[0],re=await fetch(`/api/employees/${e.employee.id}/frames?date=${H}&service_id=${e.id}`);if(!re.ok)throw new Error("Failed to fetch slots");let B=await re.json();l(B)}catch(H){console.error("Error fetching slots:",H),l([])}finally{f(!1)}},w=H=>{a(H),u(null),d(2)},S=H=>{u(H),d(3)},x=H=>{g({...y,[H.target.name]:H.target.value})},N=async H=>{H.preventDefault(),v(!0);try{let re=await fetch("/api/clients",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:y.first_name,last_name:y.last_name,email:y.email,phone:y.phone,company_id:r})});if(!re.ok)throw new Error("Failed to create client");let B=await re.json(),U=new Date(s.from),Q=new Date(s.to),ve={employee_id:e.employee.id,service_id:e.id,client_id:B.id,day:Ge(o).split("T")[0],start_time:Ge(U),end_time:Ge(Q),price:parseFloat(e.price),state:"scheduled"},Xe=await fetch("/api/time_slots",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ve)});if(!Xe.ok){let Ft=await Xe.json();throw new Error(Ft.errors||"Failed to create booking")}let lt=await Xe.json();console.log("Booking created:",lt),n()}catch(re){console.error("Booking error:",re),alert(`\u041F\u043E\u043C\u0438\u043B\u043A\u0430: ${re.message}`)}finally{v(!1)}},A=H=>{let re=["\u041D\u0434","\u041F\u043D","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041F\u0442","\u0421\u0431"],B=["\u0441\u0456\u0447","\u043B\u044E\u0442","\u0431\u0435\u0440","\u043A\u0432\u0456","\u0442\u0440\u0430","\u0447\u0435\u0440","\u043B\u0438\u043F","\u0441\u0435\u0440","\u0432\u0435\u0440","\u0436\u043E\u0432","\u043B\u0438\u0441","\u0433\u0440\u0443"];return{day:re[H.getDay()],date:H.getDate(),month:B[H.getMonth()]}};function $(H,{decimals:re=0}={}){return new Intl.NumberFormat("uk-UA",{minimumFractionDigits:re,maximumFractionDigits:re}).format(H)+" \u0433\u0440\u043D"}let de=H=>new Date(H).toLocaleTimeString("uk-UA",{hour:"2-digit",minute:"2-digit"});return z.default.createElement("div",{className:"booking-overlay",onClick:t},z.default.createElement("div",{className:"booking-modal",onClick:H=>H.stopPropagation()},z.default.createElement("button",{className:"booking-close",onClick:t},"\xD7"),z.default.createElement("div",{className:"booking-header"},z.default.createElement("h2",null,"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 ",e.name),z.default.createElement("p",{className:"booking-subtitle"},"\u0437 ",e.employee.first_name," ",e.employee.last_name),z.default.createElement("div",{className:"booking-info"},z.default.createElement("span",null,e.duration," \u0445\u0432"),z.default.createElement("span",null,"\u2022"),z.default.createElement("span",null,$(e.price)))),z.default.createElement("div",{className:"booking-steps"},z.default.createElement("div",{className:`step ${b>=1?"active":""}`},z.default.createElement("span",{className:"step-number"},"1"),z.default.createElement("span",{className:"step-label"},"\u0414\u0430\u0442\u0430")),z.default.createElement("div",{className:`step ${b>=2?"active":""}`},z.default.createElement("span",{className:"step-number"},"2"),z.default.createElement("span",{className:"step-label"},"\u0427\u0430\u0441")),z.default.createElement("div",{className:`step ${b>=3?"active":""}`},z.default.createElement("span",{className:"step-number"},"3"),z.default.createElement("span",{className:"step-label"},"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"))),z.default.createElement("div",{className:"booking-content"},b===1&&z.default.createElement("div",{className:"date-selector"},z.default.createElement("h3",null,"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0430\u0442\u0443"),z.default.createElement("div",{className:"date-grid"},h.map((H,re)=>{let B=A(H),U=o&&H.toDateString()===o.toDateString();return z.default.createElement("button",{key:re,className:`date-btn ${U?"selected":""}`,onClick:()=>w(H)},z.default.createElement("span",{className:"date-day"},B.day),z.default.createElement("span",{className:"date-number"},B.date),z.default.createElement("span",{className:"date-month"},B.month))}))),b===2&&z.default.createElement("div",{className:"time-selector"},z.default.createElement("button",{className:"back-btn",onClick:()=>d(1)},"\u2190 \u041D\u0430\u0437\u0430\u0434"),z.default.createElement("h3",null,"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0447\u0430\u0441 \u043D\u0430 ",o&&A(o).date," ",o&&A(o).month),p?z.default.createElement("div",{className:"loading-slots"},z.default.createElement("div",{className:"spinner"}),z.default.createElement("p",null,"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u0441\u043B\u043E\u0442\u0456\u0432...")):i.length>0?z.default.createElement("div",{className:"time-grid"},i.map((H,re)=>z.default.createElement("button",{key:re,className:`time-btn ${s===H?"selected":""}`,onClick:()=>S(H)},de(H.from)))):z.default.createElement("p",{className:"no-slots"},"\u041D\u0430 \u0446\u0435\u0439 \u0434\u0435\u043D\u044C \u043D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u0441\u043B\u043E\u0442\u0456\u0432")),b===3&&z.default.createElement("div",{className:"client-info"},z.default.createElement("button",{className:"back-btn",onClick:()=>d(2)},"\u2190 \u041D\u0430\u0437\u0430\u0434"),z.default.createElement("h3",null,"\u0412\u0430\u0448\u0456 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456"),z.default.createElement("div",{className:"selected-summary"},z.default.createElement("p",null,z.default.createElement("strong",null,"\u0414\u0430\u0442\u0430:")," ",o&&A(o).date," ",o&&A(o).month),z.default.createElement("p",null,z.default.createElement("strong",null,"\u0427\u0430\u0441:")," ",de(s.from))),z.default.createElement("form",{onSubmit:N},z.default.createElement("input",{type:"text",name:"first_name",placeholder:"\u0406\u043C'\u044F *",value:y.first_name,onChange:x,required:!0}),z.default.createElement("input",{type:"text",name:"last_name",placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 *",value:y.last_name,onChange:x,required:!0}),z.default.createElement("input",{type:"email",name:"email",placeholder:"Email *",value:y.email,onChange:x,required:!0}),z.default.createElement("input",{type:"tel",name:"phone",placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D *",value:y.phone,onChange:x,required:!0}),z.default.createElement("button",{type:"submit",className:"submit-booking-btn",disabled:m},m?"\u041E\u0431\u0440\u043E\u0431\u043A\u0430...":"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441"))))))}(function(){if(!document.getElementById("4df30cd10977c3dd4650bf5d8f8871fd499bde96b99924c59d53e648c4d93705")){var e=document.createElement("style");e.id="4df30cd10977c3dd4650bf5d8f8871fd499bde96b99924c59d53e648c4d93705",e.textContent=`/* Scoped styles for CompanyWebsite - No conflicts with global app.css */

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
`,document.head.appendChild(e)}})();function uu(){let{companyName:e}=To(),[t,n]=(0,C.useState)(null),[r,o]=(0,C.useState)([]),[a,i]=(0,C.useState)(!0),[l,s]=(0,C.useState)(null),[u,p]=(0,C.useState)(null),[f,m]=(0,C.useState)("services"),[v,y]=(0,C.useState)(!1);(0,C.useEffect)(()=>{e&&(async()=>{try{i(!0);let S=await fetch(`/api/companies/${e}`);if(!S.ok)throw new Error("Company not found");let x=await S.json();n(x.company),o(x.employees)}catch(S){s(S.message)}finally{i(!1)}})()},[e]);let g=w=>{p(w),y(!0)},b=()=>{y(!1),p(null)},d=()=>{y(!1),p(null),alert("\u0417\u0430\u043F\u0438\u0441 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E!")};if(a)return C.default.createElement("div",{className:"website-loading"},C.default.createElement("div",{className:"spinner"}),C.default.createElement("p",null,"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."));if(l)return C.default.createElement("div",{className:"website-error"},C.default.createElement("h2",null,"\u{1F614} \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"),C.default.createElement("p",null,l));if(!t)return null;let c=r?.flatMap(w=>w.services?.map(S=>({...S,employee:w}))||[])||[],h=w=>w?parseFloat(w).toFixed(0):"0",k=t.images?t.images.slice(0,3):[];return C.default.createElement("div",{className:"company-website"},C.default.createElement("header",{className:"site-header"},C.default.createElement("div",{className:"header-container"},C.default.createElement("div",{className:"logo-section"},t.logo&&C.default.createElement("img",{src:"/images"+t.logo,alt:t.name,className:"header-logo"}),C.default.createElement("h1",null,t.name)),C.default.createElement("button",{className:"book-now-btn"},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F"))),k.length>0&&C.default.createElement("section",{className:"image-banner"},C.default.createElement("div",{className:"image-banner-container"},k.map((w,S)=>C.default.createElement("div",{key:S,className:"banner-image-wrapper"},C.default.createElement("img",{src:"/images"+w,alt:`${t.name} - \u0444\u043E\u0442\u043E ${S+1}`,className:"banner-image"}))))),C.default.createElement("nav",{className:"tab-navigation"},C.default.createElement("div",{className:"tab-container"},C.default.createElement("button",{className:`tab-btn ${f==="services"?"active":""}`,onClick:()=>m("services")},"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),C.default.createElement("button",{className:`tab-btn ${f==="team"?"active":""}`,onClick:()=>m("team")},"\u041A\u043E\u043C\u0430\u043D\u0434\u0430"),C.default.createElement("button",{className:`tab-btn ${f==="about"?"active":""}`,onClick:()=>m("about")},"\u041F\u0440\u043E \u043D\u0430\u0441"))),C.default.createElement("main",{className:"main-content"},C.default.createElement("div",{className:"content-container"},f==="services"&&C.default.createElement("section",{className:"services-content"},C.default.createElement("h2",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),c.length>0?C.default.createElement("div",{className:"service-list"},c.map((w,S)=>C.default.createElement("div",{key:S,className:"service-item"},C.default.createElement("div",{className:"service-info"},C.default.createElement("h3",{className:"service-name"},w.name),C.default.createElement("p",{className:"service-description"},w.description),C.default.createElement("div",{className:"service-meta"},C.default.createElement("span",{className:"service-duration"},w.duration," \u0445\u0432"),C.default.createElement("span",{className:"service-provider"},"\u0437 ",w.employee.first_name," ",w.employee.last_name))),C.default.createElement("div",{className:"service-booking"},C.default.createElement("div",{className:"service-price"},h(w.price)," \u0433\u0440\u043D"),C.default.createElement("button",{className:"book-service-btn",onClick:()=>g(w)},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F"))))):C.default.createElement("p",{className:"empty-message"},"\u041D\u0430\u0440\u0430\u0437\u0456 \u043D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u043F\u043E\u0441\u043B\u0443\u0433")),f==="team"&&C.default.createElement("section",{className:"team-content"},C.default.createElement("h2",null,"\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430"),r.length>0?C.default.createElement("div",{className:"team-list"},r.map(w=>C.default.createElement("div",{key:w.id,className:"team-item"},C.default.createElement("div",{className:"team-member-info"},C.default.createElement("div",{className:"member-photo"},w.photo?C.default.createElement("img",{src:w.photo,alt:`${w.first_name} ${w.last_name}`}):C.default.createElement("div",{className:"photo-placeholder"},w.first_name[0],w.last_name[0])),C.default.createElement("div",{className:"member-details"},C.default.createElement("h3",null,w.first_name," ",w.last_name),w.description&&C.default.createElement("p",{className:"member-bio"},w.description),w.services&&w.services.length>0&&C.default.createElement("div",{className:"member-services-list"},C.default.createElement("p",{className:"services-label"},"\u0421\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F:"),C.default.createElement("ul",null,w.services.map((S,x)=>C.default.createElement("li",{key:x},S.name))))))))):C.default.createElement("p",{className:"empty-message"},"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u044F")),f==="about"&&C.default.createElement("section",{className:"about-content"},C.default.createElement("h2",null,"\u041F\u0440\u043E \u043D\u0430\u0441"),C.default.createElement("div",{className:"about-details"},C.default.createElement("div",{className:"about-description"},C.default.createElement("h3",null,"\u041E\u043F\u0438\u0441"),C.default.createElement("p",null,t.description||"\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457!")),C.default.createElement("div",{className:"contact-details"},C.default.createElement("h3",null,"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"),t.address&&C.default.createElement("div",{className:"contact-row"},C.default.createElement("span",{className:"contact-label"},"\u0410\u0434\u0440\u0435\u0441\u0430"),C.default.createElement("span",{className:"contact-value"},t.address.street_line1,t.address.street_line2&&`, ${t.address.street_line2}`,C.default.createElement("br",null),t.address.city,", ",t.address.region," ",t.address.postal)),t.phone&&C.default.createElement("div",{className:"contact-row"},C.default.createElement("span",{className:"contact-label"},"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),C.default.createElement("span",{className:"contact-value"},C.default.createElement("a",{href:`tel:${t.phone}`},t.phone))),t.email&&C.default.createElement("div",{className:"contact-row"},C.default.createElement("span",{className:"contact-label"},"Email"),C.default.createElement("span",{className:"contact-value"},C.default.createElement("a",{href:`mailto:${t.email}`},t.email))),t.website&&C.default.createElement("div",{className:"contact-row"},C.default.createElement("span",{className:"contact-label"},"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"),C.default.createElement("span",{className:"contact-value"},C.default.createElement("a",{href:t.website,target:"_blank",rel:"noopener noreferrer"},t.website," ")))))))),C.default.createElement("footer",{className:"site-footer"},C.default.createElement("div",{className:"footer-container"},C.default.createElement("p",null,"\xA9 ",new Date().getFullYear()," ",t.name,". \u0412\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u043E."))),v&&u&&C.default.createElement(su,{service:u,onClose:b,onComplete:d,company_id:t.id}))}var le=J(V());var P=J(V());(function(){if(!document.getElementById("359a90f8c729210dbbfb096928392417ed7d6dd27b14727501cfa65f4edc30ad")){var e=document.createElement("style");e.id="359a90f8c729210dbbfb096928392417ed7d6dd27b14727501cfa65f4edc30ad",e.textContent=`.form__error {
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
`,document.head.appendChild(e)}})();function Mo({company:e,onSave:t,onCancel:n,isModal:r=!1}){let o=Ke(),[a,i]=(0,P.useState)({name:"",email:"",website:"",phone:"",description:"",city:"",country:"",postal:"",region:"",street_line1:"",street_line2:""}),[l,s]=(0,P.useState)(null),[u,p]=(0,P.useState)(null),[f,m]=(0,P.useState)(null),[v,y]=(0,P.useState)(""),[g,b]=(0,P.useState)([]),[d,c]=(0,P.useState)([]),[h,k]=(0,P.useState)([]),[w,S]=(0,P.useState)({});(0,P.useEffect)(()=>{if(e){if(i({name:e.name||"",email:e.email||"",website:e.website||"",phone:e.phone||"",description:e.description||"",city:e.address?.city||"",country:e.address?.country||"",postal:e.address?.postal||"",region:e.address?.region||"",street_line1:e.address?.street_line1||"",street_line2:e.address?.street_line2||""}),e.images&&e.images.length>0){let U=e.images.find(Q=>Q.type==="logo");U&&(p(U.image_url),m(U.id))}e.images&&e.images.length>0&&b(e.images.filter(U=>U.type!=="logo"))}},[e]);let x=U=>{i({...a,[U.target.name]:U.target.value}),S(Q=>({...Q,[U.target.name]:null}))},N=U=>{let Q=U.target.files[0];if(Q){s(Q);let ve=new FileReader;ve.onloadend=()=>{p(ve.result)},ve.readAsDataURL(Q)}},A=async()=>{if(!f){s(null),p(null),y("");return}if(window.confirm("\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F?"))try{(await fetch(`/api/images/${f}`,{method:"DELETE",credentials:"include"})).ok?(s(null),p(null),m(null),y("")):alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443")}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443")}},$=U=>{let Q=Array.from(U.target.files);Q.length>0&&(c([...d,...Q]),Q.forEach(ve=>{let Xe=new FileReader;Xe.onloadend=()=>{k(lt=>[...lt,{file:ve,preview:Xe.result}])},Xe.readAsDataURL(ve)}))},de=async U=>{if(window.confirm("\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F?"))try{(await fetch(`/api/images/${U}`,{method:"DELETE",credentials:"include"})).ok?b(g.filter(ve=>ve.id!==U)):alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F")}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F")}},H=U=>{k(h.filter((Q,ve)=>ve!==U)),c(d.filter((Q,ve)=>ve!==U))},re=async U=>{U.preventDefault();let Q=new FormData;Q.append("company[name]",a.name),Q.append("company[email]",a.email),Q.append("company[website]",a.website),Q.append("company[phone]",a.phone),Q.append("company[description]",a.description),Q.append("address[city]",a.city),Q.append("address[country]",a.country),Q.append("address[postal]",a.postal),Q.append("address[region]",a.region),Q.append("address[street_line1]",a.street_line1),Q.append("address[street_line2]",a.street_line2),l?Q.append("logo",l):v&&Q.append("logo_cached",v),d.forEach(Xn=>{Q.append("images[]",Xn)});let ve=e?`/api/companies/${e.id}`:"/api/companies",lt=await fetch(ve,{method:e?"PUT":"POST",credentials:"include",body:Q}),Ft=await lt.json();lt.ok?r&&t?t(Ft):o(`/companies/${Ft.id}/dashboard`):S(Ft.errors||{})},B=U=>w[U]?.message;return P.default.createElement("div",{className:r?"company-form-modal":"company-form container"},P.default.createElement("h1",null,e?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E"),P.default.createElement("form",{onSubmit:re,encType:"multipart/form-data"},P.default.createElement("section",{className:"form-section"},P.default.createElement("h3",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),B("name")&&P.default.createElement("div",{className:"field-error"},B("name")),P.default.createElement("input",{name:"name",value:a.name,onChange:x,placeholder:"\u041D\u0430\u0437\u0432\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"}),B("email")&&P.default.createElement("div",{className:"field-error"},B("email")),P.default.createElement("input",{name:"email",value:a.email,onChange:x,placeholder:"Email"}),B("website")&&P.default.createElement("div",{className:"field-error"},B("website")),P.default.createElement("input",{name:"website",value:a.website,onChange:x,placeholder:"\u0412\u0435\u0431 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430"}),B("phone")&&P.default.createElement("div",{className:"field-error"},B("phone")),P.default.createElement("input",{name:"phone",value:a.phone,onChange:x,placeholder:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"}),B("description")&&P.default.createElement("div",{className:"field-error"},B("description")),P.default.createElement("textarea",{name:"description",value:a.description,onChange:x,placeholder:"\u041E\u043F\u0438\u0441 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456"})),P.default.createElement("section",{className:"form-section"},P.default.createElement("h3",null,"\u0410\u0434\u0440\u0435\u0441\u0430"),B("city")&&P.default.createElement("div",{className:"field-error"},B("city")),P.default.createElement("input",{name:"city",value:a.city,onChange:x,placeholder:"\u041C\u0456\u0441\u0442\u043E"}),B("country")&&P.default.createElement("div",{className:"field-error"},B("country")),P.default.createElement("input",{name:"country",value:a.country,onChange:x,placeholder:"\u041A\u0440\u0430\u0457\u043D\u0430"}),B("postal")&&P.default.createElement("div",{className:"field-error"},B("postal")),P.default.createElement("input",{name:"postal",value:a.postal,onChange:x,placeholder:"\u041F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441"}),B("region")&&P.default.createElement("div",{className:"field-error"},B("region")),P.default.createElement("input",{name:"region",value:a.region,onChange:x,placeholder:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C"}),B("street_line1")&&P.default.createElement("div",{className:"field-error"},B("street_line1")),P.default.createElement("input",{name:"street_line1",value:a.street_line1,onChange:x,placeholder:"\u0410\u0434\u0440\u0435\u0441\u0430 1"}),B("street_line2")&&P.default.createElement("div",{className:"field-error"},B("street_line2")),P.default.createElement("input",{name:"street_line2",value:a.street_line2,onChange:x,placeholder:"\u0410\u0434\u0440\u0435\u0441\u0430 2"})),e&&P.default.createElement("section",{className:"form-section"},P.default.createElement("h3",null,"\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"),u&&P.default.createElement("div",{className:"logo-preview"},P.default.createElement("img",{src:l?u:`/images${u}`,alt:"Company logo preview"}),P.default.createElement("button",{type:"button",className:"btn-remove-logo",onClick:A},"\u2715 \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F")),P.default.createElement("div",{className:"file-input-wrapper"},P.default.createElement("input",{type:"file",id:"logo-input",name:"logo",accept:"image/*",onChange:N,className:"file-input"}),P.default.createElement("label",{htmlFor:"logo-input",className:"file-input-label"},u?"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F":"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F"),P.default.createElement("span",{className:"file-input-hint"},"PNG, JPG, GIF \u0434\u043E 5MB")),v&&P.default.createElement("input",{type:"hidden",name:"logo_cached",value:v}),B("logo")&&P.default.createElement("div",{className:"field-error"},B("logo"))),e&&P.default.createElement("section",{className:"form-section"},P.default.createElement("div",{className:"images-header"},P.default.createElement("h3",null,"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"),P.default.createElement("label",{htmlFor:"images-input",className:"btn-add-image"},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u0444\u043E\u0442\u043E")),P.default.createElement("input",{type:"file",id:"images-input",accept:"image/*",multiple:!0,onChange:$,className:"file-input",style:{display:"none"}}),g.length>0&&P.default.createElement("div",{className:"images-grid"},P.default.createElement("h4",{className:"images-subtitle"},"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u0456 \u0444\u043E\u0442\u043E"),P.default.createElement("div",{className:"images-list"},g.map(U=>P.default.createElement("div",{key:U.id,className:"image-item"},P.default.createElement("img",{src:`/images${U.image_url}`,alt:U.image_name||"Company image"}),P.default.createElement("button",{type:"button",className:"btn-remove-image",onClick:()=>de(U.id),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u2715"),P.default.createElement("span",{className:"image-name"},U.image_name))))),h.length>0&&P.default.createElement("div",{className:"images-grid"},P.default.createElement("h4",{className:"images-subtitle"},"\u041D\u043E\u0432\u0456 \u0444\u043E\u0442\u043E (\u0431\u0443\u0434\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E)"),P.default.createElement("div",{className:"images-list"},h.map((U,Q)=>P.default.createElement("div",{key:Q,className:"image-item new-image"},P.default.createElement("img",{src:U.preview,alt:`Preview ${Q+1}`}),P.default.createElement("button",{type:"button",className:"btn-remove-image",onClick:()=>H(Q),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u2715"),P.default.createElement("span",{className:"image-name"},U.file.name))))),g.length===0&&h.length===0&&P.default.createElement("div",{className:"empty-images"},P.default.createElement("p",null,"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u0449\u0435 \u043D\u0435 \u0434\u043E\u0434\u0430\u043D\u0456"),P.default.createElement("label",{htmlFor:"images-input",className:"btn-add-first-image"},"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0435\u0440\u0448\u0435 \u0444\u043E\u0442\u043E")),B("images")&&P.default.createElement("div",{className:"field-error"},B("images"))),P.default.createElement("div",{className:"form-actions"},r&&n&&P.default.createElement("button",{type:"button",onClick:n},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),P.default.createElement("button",{type:"submit"},e?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E"))))}var M=J(V());var be=J(V());function Io({open:e,employee:t,service:n,onClose:r,onSaved:o}){let[a,i]=(0,be.useState)({name:"",description:"",price:"",duration:30}),[l,s]=(0,be.useState)(!1),[u,p]=(0,be.useState)(null),[f,m]=(0,be.useState)(null);if((0,be.useEffect)(()=>{i(n?{name:n.name||"",description:n.description||"",price:n.price||"",duration:n.duration||30}:{name:"",description:"",price:"",duration:30})},[n,e]),!e)return null;let v=async()=>{s(!0),p(null);let g={...a,employee_id:t.id},b=n?`/api/services/${n.id}`:"/api/services",d=n?"PUT":"POST";try{let c=await fetch(b,{method:d,credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!c.ok)throw new Error(await c.text());let h=await c.json(),k=n?`Service ${h.name} successfully updated`:`Service ${h.name} successfully created`;m(k),setTimeout(()=>{m(null),o(h),r()},1e3)}catch(c){p(c.message||"Failed to save service")}finally{s(!1)}},y=async()=>{if(n&&window.confirm(`Are you sure you want to delete ${n.name}?`)){s(!0),p(null);try{let g=await fetch(`/api/services/${n.id}`,{method:"DELETE",credentials:"include"});if(!g.ok)throw new Error(await g.text());m("Service deleted successfully"),setTimeout(()=>{m(null),o(null),r()},1e3)}catch(g){p(g.message||"Failed to delete service")}finally{s(!1)}}};return be.default.createElement("div",{className:"confirm-overlay",onClick:r},be.default.createElement("div",{className:"glass-modal",onClick:g=>g.stopPropagation()},be.default.createElement("h3",null,n?"Edit Service":"Add Service"),u&&be.default.createElement("div",{className:"form__error"},u),f&&be.default.createElement("div",{className:"form__success"},f),be.default.createElement("input",{placeholder:"Name",value:a.name,onChange:g=>i({...a,name:g.target.value}),disabled:l}),be.default.createElement("textarea",{placeholder:"Description",value:a.description,onChange:g=>i({...a,description:g.target.value}),disabled:l}),be.default.createElement("input",{type:"number",placeholder:"Price",value:a.price,onChange:g=>i({...a,price:g.target.value}),disabled:l}),be.default.createElement("input",{type:"number",step:15,min:15,placeholder:"Duration (min)",value:a.duration,onChange:g=>i({...a,duration:parseInt(g.target.value)}),disabled:l}),be.default.createElement("div",{className:"modal-actions"},be.default.createElement("button",{onClick:r,disabled:l},"Cancel"),n&&be.default.createElement("button",{className:"danger",onClick:y,disabled:l},"Delete"),be.default.createElement("button",{className:"apply",onClick:v,disabled:l},n?"Update":"Create"))))}function Or({role:e,employee:t,onSave:n,onCancel:r,isModal:o=!1}){let a=Ke(),[i,l]=(0,M.useState)({first_name:"",last_name:"",description:"",email:"",phone:"",password:"",role:e==="admin"?1:0}),[s,u]=(0,M.useState)({}),[p,f]=(0,M.useState)([]),[m,v]=(0,M.useState)(!1),[y,g]=(0,M.useState)(null);(0,M.useEffect)(()=>{t&&(l({first_name:t.first_name||"",last_name:t.last_name||"",description:t.description||"",email:t.email||"",phone:t.phone||"",password:"",role:t.role??(e==="admin"?1:0)}),f(t.services||[]))},[t,e]);let b=x=>{let N=x.target.name==="role"?parseInt(x.target.value):x.target.value;l({...i,[x.target.name]:N}),u(A=>({...A,[x.target.name]:null}))},d=async x=>{x.preventDefault();let N={employee:{first_name:i.first_name,last_name:i.last_name,description:i.description,email:i.email,phone:i.phone,role:i.role}};i.password&&(N.employee.password=i.password);let A=t?`/api/employees/${t.id}`:"/api/employees",de=await fetch(A,{method:t?"PUT":"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)});if(de.ok){let H=await de.json();o&&n?n({...H,services:p}):a("/companies/welcome")}else{let H=await de.json();u(H.errors||{})}},c=()=>{g(null),v(!0)},h=x=>{g(x),v(!0)},k=async x=>{if(window.confirm(`\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443 "${x.name}"?`))try{let N=await fetch(`/api/services/${x.id}`,{method:"DELETE",credentials:"include"});if(!N.ok)throw new Error(await N.text());f(p.filter(A=>A.id!==x.id))}catch{alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438")}},w=x=>{f(x===null?p.filter(N=>N.id!==y.id):y?p.map(N=>N.id===x.id?x:N):[...p,x]),g(null)},S=x=>s[x]?.message;return M.default.createElement("div",{className:o?"employee-form-modal":"employee-form container"},M.default.createElement("h1",null,t?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"," ",i.role===1?"\u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430":"\u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),M.default.createElement("form",{onSubmit:d},M.default.createElement("section",{className:"form-section"},M.default.createElement("h3",null,"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),S("first_name")&&M.default.createElement("div",{className:"field-error"},S("first_name")),M.default.createElement("input",{name:"first_name",value:i.first_name,onChange:b,placeholder:"\u0406\u043C\u02BC\u044F"}),S("last_name")&&M.default.createElement("div",{className:"field-error"},S("last_name")),M.default.createElement("input",{name:"last_name",value:i.last_name,onChange:b,placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),S("email")&&M.default.createElement("div",{className:"field-error"},S("email")),M.default.createElement("input",{name:"email",type:"email",value:i.email,onChange:b,placeholder:"Email"}),S("phone")&&M.default.createElement("div",{className:"field-error"},S("phone")),M.default.createElement("input",{name:"phone",value:i.phone,onChange:b,placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),S("password")&&M.default.createElement("div",{className:"field-error"},S("password")),M.default.createElement("input",{name:"password",type:"password",value:i.password,onChange:b,placeholder:t?"\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u0437\u0430\u043B\u0438\u0448\u0442\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u043C, \u0449\u043E\u0431 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438)":"\u041F\u0430\u0440\u043E\u043B\u044C",required:!t}),S("description")&&M.default.createElement("div",{className:"field-error"},S("description")),M.default.createElement("textarea",{name:"description",value:i.description,onChange:b,placeholder:"\u041E\u043F\u0438\u0441"}),S("role")&&M.default.createElement("div",{className:"field-error"},S("role")),M.default.createElement("label",{htmlFor:"role"},"\u0420\u043E\u043B\u044C"),M.default.createElement("select",{id:"role",name:"role",value:i.role,onChange:b,required:!0},M.default.createElement("option",{value:0},"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A"),M.default.createElement("option",{value:1},"\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440"))),t&&M.default.createElement("section",{className:"form-section services-section"},M.default.createElement("div",{className:"services-header"},M.default.createElement("h3",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438"),M.default.createElement("button",{type:"button",className:"btn-add-service",onClick:c},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443")),p.length>0?M.default.createElement("div",{className:"services-grid"},p.map(x=>M.default.createElement("div",{key:x.id,className:"service-card"},M.default.createElement("div",{className:"service-card-header"},M.default.createElement("h4",null,x.name),M.default.createElement("div",{className:"service-card-actions"},M.default.createElement("button",{type:"button",className:"btn-icon-edit",onClick:()=>h(x),title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"},"\u270E"),M.default.createElement("button",{type:"button",className:"btn-icon-delete",onClick:()=>k(x),title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"},"\u{1F5D1}"))),M.default.createElement("p",{className:"service-description"},x.description),M.default.createElement("div",{className:"service-footer"},M.default.createElement("span",{className:"service-price"},x.price," \u0433\u0440\u043D"),M.default.createElement("span",{className:"service-duration"},x.duration," \u0445\u0432"))))):M.default.createElement("div",{className:"empty-services"},M.default.createElement("p",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u0449\u0435 \u043D\u0435 \u0434\u043E\u0434\u0430\u043D\u0456"),M.default.createElement("button",{type:"button",className:"btn-add-first-service",onClick:c},"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0435\u0440\u0448\u0443 \u043F\u043E\u0441\u043B\u0443\u0433\u0443"))),M.default.createElement("div",{className:"form-actions"},o&&r&&M.default.createElement("button",{type:"button",onClick:r},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),M.default.createElement("button",{type:"submit"},t?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"))),t&&M.default.createElement(Io,{open:m,employee:t,service:y,onClose:()=>{v(!1),g(null)},onSaved:w}))}var Ot=J(V());(function(){if(!document.getElementById("b9644920dd4b82f30f246dfd1f69aee7bf9f5599fdae5c8b8a399e9acdd67c6f")){var e=document.createElement("style");e.id="b9644920dd4b82f30f246dfd1f69aee7bf9f5599fdae5c8b8a399e9acdd67c6f",e.textContent=`.login {
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
`,document.head.appendChild(e)}})();function jo(){let[e,t]=(0,Ot.useState)(""),n=Ke();async function r(o){o.preventDefault(),t("");let a=o.target.email.value,i=o.target.password.value;try{let l=await fetch("/api/employees/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:i})});if(!l.ok){t("\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 email \u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C");return}let s=await l.json();console.log(s.company_id),s.company_id?n(`/companies/${s.company_id}/dashboard`):n("/companies/new")}catch(l){console.error(l),t("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u2019\u0454\u0434\u043D\u0430\u043D\u043D\u044F \u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C")}}return Ot.default.createElement("div",{className:"login container"},Ot.default.createElement("h1",{className:"login__title"},"\u0412\u0445\u0456\u0434"),e&&Ot.default.createElement("div",{className:"login__error"},e),Ot.default.createElement("form",{className:"login__form",onSubmit:r},Ot.default.createElement("input",{type:"email",placeholder:"Email",name:"email",required:!0}),Ot.default.createElement("input",{type:"password",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",name:"password",required:!0}),Ot.default.createElement("button",{type:"submit",className:"btn"},"\u0423\u0432\u0456\u0439\u0442\u0438")))}var cu=J(V());function du(){return cu.default.createElement("div",null,cu.default.createElement("h1",null,"404 CompanyNotFound"))}var Ie=J(V());var Kt=J(V());(function(){if(!document.getElementById("a127da0de2169adcba038b037c01109c27901a050a4a9ac5b50bf49ff645976e")){var e=document.createElement("style");e.id="a127da0de2169adcba038b037c01109c27901a050a4a9ac5b50bf49ff645976e",e.textContent=`.sidebar {
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
`,document.head.appendChild(e)}})();function fu({companyName:e,id:t}){return Kt.default.createElement("aside",{className:"sidebar"},Kt.default.createElement("h2",{className:"sidebar__logo"},e),Kt.default.createElement("nav",{className:"sidebar__nav"},Kt.default.createElement(kn,{to:`/companies/${t}/dashboard`},"Dashboard"),Kt.default.createElement(kn,{to:`/companies/${t}/employees`},"Employees"),Kt.default.createElement(kn,{to:`/companies/${t}/clients`},"Clients"),Kt.default.createElement(kn,{to:`/companies/${t}/edit`},"Company"),Kt.default.createElement(kn,{to:`/companies/${t}/settings`},"Settings")))}var Jn=J(V());(function(){if(!document.getElementById("a675d0013b35ba43c4e7f713f899b0aef50b34428c621f79aafe309f9d5b2c29")){var e=document.createElement("style");e.id="a675d0013b35ba43c4e7f713f899b0aef50b34428c621f79aafe309f9d5b2c29",e.textContent=`/* TopBar container */
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
`,document.head.appendChild(e)}})();function pu({userName:e}){return Jn.default.createElement("header",{className:"topbar"},Jn.default.createElement("div",{className:"topbar__left"},Jn.default.createElement("h1",null,e)),Jn.default.createElement("div",{className:"topbar__right"},Jn.default.createElement("span",{className:"topbar__user"}),Jn.default.createElement("button",{onClick:async()=>{await fetch("/api/employees/logout",{method:"POST",credentials:"include"}),window.location.href="/companies/welcome"},className:"logout-btn"},"Logout")))}var Y=J(V());var Gt=J(V());function yi({timeSlot:e}){let t=s=>s instanceof Date?s:new Date(s),n=t(e.start_time),r=t(e.end_time),o=(r-n)/(1e3*60*60),a=(r-n)/(1e3*60),i=n.getMinutes(),l=e.client?.first_name;return Gt.default.createElement("div",{className:`time-slot-block ${e.state}`,style:{position:"absolute",top:`${i/60*100}%`,height:`${o*100}%`,left:0,right:0}},l?Gt.default.createElement(Gt.default.Fragment,null,Gt.default.createElement("div",{className:"client-name"},l),Gt.default.createElement("div",{className:"time-label"},e.service_name," (",a," min)")):Gt.default.createElement(Gt.default.Fragment,null,Gt.default.createElement("div",null,e.state)))}var it=J(V()),rm=J(V());var W=J(V());var Cn=J(V());(function(){if(!document.getElementById("016eff5b894d8467c8ab482e5e63306ffab800f5cd19b0509fbb6548608fa56e")){var e=document.createElement("style");e.id="016eff5b894d8467c8ab482e5e63306ffab800f5cd19b0509fbb6548608fa56e",e.textContent=`.confirm-overlay {
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
`,document.head.appendChild(e)}})();function Ao({open:e,title:t="Are you sure?",message:n="This action cannot be undone.",confirmText:r="Yes",cancelText:o="Cancel",onConfirm:a,onCancel:i}){return e?Cn.default.createElement("div",{className:"confirm-overlay",onClick:i},Cn.default.createElement("div",{className:"confirm-modal",onClick:l=>l.stopPropagation()},Cn.default.createElement("h3",null,t),Cn.default.createElement("p",null,n),Cn.default.createElement("div",{className:"confirm-actions"},Cn.default.createElement("button",{className:"btn cancel",onClick:i},o),Cn.default.createElement("button",{className:"btn danger",onClick:a},r)))):null}(function(){if(!document.getElementById("98b4fbe3096ef325ff4a3b26beed9b76a8283f32b9e9e50a08673263ce04bde0")){var e=document.createElement("style");e.id="98b4fbe3096ef325ff4a3b26beed9b76a8283f32b9e9e50a08673263ce04bde0",e.textContent=`.weekday-grid {
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
`,document.head.appendChild(e)}})();function $o({open:e,employee:t,window:n,onClose:r,onSaved:o}){let[a,i]=(0,W.useState)({start_time:"",end_time:"",break_from:"",break_to:"",weekends:[],effective_date:new Date().toISOString().slice(0,10),end_date:""}),[l,s]=(0,W.useState)(!1),[u,p]=(0,W.useState)(null),[f,m]=(0,W.useState)(null),v=[{id:0,label:"\u041F\u043D"},{id:1,label:"\u0412\u0442"},{id:2,label:"\u0421\u0440"},{id:3,label:"\u0427\u0442"},{id:4,label:"\u041F\u0442"},{id:5,label:"\u0421\u0431"},{id:6,label:"\u041D\u0434"}],[y,g]=(0,W.useState)(!1),[b,d]=(0,W.useState)({effective_date:"",end_date:""});(0,W.useEffect)(()=>{e&&(n?(i({start_time:n.start_time||"",end_time:n.end_time||"",break_from:n.break_from||"",break_to:n.break_to||"",weekends:Array.isArray(n.weekends)?n.weekends:[],effective_date:n.effective_date||"",end_date:n.end_date||""}),d({effective_date:n.effective_date?.slice(0,10)||"",end_date:n.end_date?.slice(0,10)||""})):i(c))},[n,e]);let c={start_time:"",end_time:"",break_from:"",break_to:"",weekends:[],effective_date:new Date().toISOString().slice(0,10),end_date:""};if((0,W.useEffect)(()=>{p(null),m(null)},[e,n]),!e)return null;let h=async()=>{s(!0),p(null);let w={...a,employee_id:t.id,id:n?.id};try{let S=await fetch("/api/windows/upsert",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)});if(!S.ok)throw new Error(await S.text());let x=await S.json();m(n?"\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E":"\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E"),setTimeout(()=>{m(null),o(x),r()},800)}catch(S){p(S.message||"Failed to save window")}finally{s(!1)}},k=async()=>{if(n)try{let w=await fetch(`/api/windows/${n.id}`,{method:"DELETE",credentials:"include"});if(!w.ok)throw new Error(await w.text());m("\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E"),setTimeout(()=>{m(null),o(null),r()},800)}catch(w){p(w.message||"Failed to delete window")}};return a&&W.default.createElement(W.default.Fragment,null,W.default.createElement("div",{className:"confirm-overlay",onClick:r},W.default.createElement("div",{className:"glass-modal",onClick:w=>w.stopPropagation()},W.default.createElement("h3",null,n?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435":"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),W.default.createElement("div",null,"( ",b.effective_date," .. ",b.end_date," )"),W.default.createElement("br",null),W.default.createElement("label",null,"Effective date"),W.default.createElement("input",{type:"date",value:a.effective_date,onChange:w=>i({...a,effective_date:w.target.value})}),W.default.createElement("label",null,"End date"),W.default.createElement("input",{type:"date",value:a.end_date,onChange:w=>i({...a,end_date:w.target.value})}),u&&W.default.createElement("div",{className:"form__error"},u),f&&W.default.createElement("div",{className:"form__success"},f),W.default.createElement("label",null,"Start time"),W.default.createElement("input",{type:"time",value:En(a.start_time),onChange:w=>{let S=_n(a.start_time||new Date().toISOString(),w.target.value);i(x=>({...x,start_time:S}))}}),W.default.createElement("label",null,"End time"),W.default.createElement("input",{type:"time",value:En(a.end_time),onChange:w=>{let S=_n(a.end_time||new Date().toISOString(),w.target.value);i(x=>({...x,end_time:S}))}}),W.default.createElement("label",null,"Break from"),W.default.createElement("input",{type:"time",value:En(a.break_from),onChange:w=>{let S=_n(a.break_from||new Date().toISOString(),w.target.value);i(x=>({...x,break_from:S}))}}),W.default.createElement("label",null,"Break to"),W.default.createElement("input",{type:"time",value:En(a.break_to),onChange:w=>{let S=_n(a.break_to||new Date().toISOString(),w.target.value);i(x=>({...x,break_to:S}))}}),W.default.createElement("div",{className:"weekday-picker"},W.default.createElement("label",{className:"form-label"},"\u0412\u0438\u0445\u0456\u0434\u043D\u0456"),W.default.createElement("div",{className:"weekday-grid"},v.map(w=>{let S=a.weekends?.includes(w.id);return W.default.createElement("label",{key:w.id,className:"weekday-checkbox mb-2"},W.default.createElement("input",{type:"checkbox",checked:S,onChange:()=>{i(x=>({...x,weekends:S?x.weekends.filter(N=>N!==w.id):[...x.weekends,w.id]}))}}),W.default.createElement("span",null,w.label))}))),W.default.createElement("div",{className:"modal-actions"},W.default.createElement("button",{onClick:r,disabled:l},"Cancel"),n&&W.default.createElement(W.default.Fragment,null,W.default.createElement("button",{className:"danger",onClick:()=>g(!0)},"Delete"),W.default.createElement(Ao,{open:y,title:"Delete window",message:"Are you sure you want to delete this window?",confirmText:"Yes",cancelText:"No",onConfirm:()=>{g(!1),k()},onCancel:()=>g(!1)})),W.default.createElement("button",{className:"apply",onClick:h,disabled:l},n?"Update":"Create")))))}function mu({days:e,weekStart:t,setWeekStart:n,employees:r,currentEmployee:o,setCurrentEmployee:a}){let i=()=>n(Sn(t,7)),l=()=>n(Sn(t,-7)),s=()=>n(Vn(new Date)),[u,p]=(0,rm.useState)(!1),f=o?.window;return it.default.createElement("header",{className:"calendar__header sticky"},it.default.createElement("h4",null,e[0].toLocaleDateString("uk-UA",{day:"numeric",month:"long"})," \u2013 ",e[6].toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})),it.default.createElement("select",{className:"employee-select",value:o?.id||"",onChange:m=>{let v=m.target.value;a(v===""?null:r.find(y=>y.id===Number(v)))}},it.default.createElement("option",{value:""},"\u041E\u0431\u0440\u0430\u0442\u0438 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),r.map(m=>it.default.createElement("option",{key:m.id,value:m.id},m.first_name," ",m.last_name))),o&&!f&&it.default.createElement("button",{className:"secondary",onClick:()=>p(!0)},"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),o&&it.default.createElement($o,{open:u,employee:o,window:o.window,onClose:()=>p(!1),onSaved:m=>{a(v=>v&&{...v,window:m})}}),it.default.createElement("div",{className:"calendar__actions"},it.default.createElement("button",{onClick:l},"\u2190"),it.default.createElement("button",{onClick:s},"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456"),it.default.createElement("button",{onClick:i},"\u2192"),it.default.createElement("input",{className:"date__picker",type:"date",value:t.toISOString().slice(0,10),onChange:m=>n(new Date(m.target.value+"T00:00:00"))})))}var I=J(V()),Pe=J(V());var Be=J(V());(function(){if(!document.getElementById("d5860081ef1c8a6df2ca309b7af21e03f785b56257746a737b7a744dcab475cd")){var e=document.createElement("style");e.id="d5860081ef1c8a6df2ca309b7af21e03f785b56257746a737b7a744dcab475cd",e.textContent=`.client-input-row {
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
`,document.head.appendChild(e)}})();function hu({open:e,onClose:t,onCreated:n}){let[r,o]=(0,Be.useState)({first_name:"",last_name:"",email:"",phone:""}),[a,i]=(0,Be.useState)(!1),[l,s]=(0,Be.useState)(null),[u,p]=(0,Be.useState)(null);if(!e)return null;let f=async()=>{i(!0),s(null);try{let m=await fetch("/api/clients",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!m.ok)throw new Error(await m.text());let v=await m.json();p(`Client ${v.first_name} successfully created`),setTimeout(()=>{p(null),n(v),t()},1e3)}catch(m){s(m.message||"Failed to create client")}finally{i(!1)}};return Be.default.createElement("div",{className:"confirm-overlay",onClick:t},Be.default.createElement("div",{className:"glass-modal small",onClick:m=>m.stopPropagation()},Be.default.createElement("h3",null,"New client"),l&&Be.default.createElement("div",{className:"form__error"},l),u&&Be.default.createElement("div",{className:"form__success"},u),["first_name","last_name","email","phone"].map(m=>Be.default.createElement("input",{key:m,placeholder:m.replace("_"," "),value:r[m],onChange:v=>o(y=>({...y,[m]:v.target.value}))})),Be.default.createElement("div",{className:"modal-actions"},Be.default.createElement("button",{onClick:t},"Close"),Be.default.createElement("button",{className:"apply",disabled:a,onClick:f},"Create"))))}(function(){if(!document.getElementById("9403ccd3928ae6193b77064c875b789d6683bd4ba322769601253770b0128aab")){var e=document.createElement("style");e.id="9403ccd3928ae6193b77064c875b789d6683bd4ba322769601253770b0128aab",e.textContent=`.form__title {
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
`,document.head.appendChild(e)}})();function gu({slot:e,weekStart:t,previewSlot:n,setPreviewSlot:r,setTimeSlots:o,setEditingSlot:a,editingSlot:i,currentEmployee:l}){let[s,u]=(0,Pe.useState)(()=>e?.duration??15),[p,f]=(0,Pe.useState)(""),[m,v]=(0,Pe.useState)([]),[y,g]=(0,Pe.useState)(!1),[b,d]=(0,Pe.useState)(null),[c,h]=(0,Pe.useState)(null),[k,w]=(0,Pe.useState)(null),[S,x]=(0,Pe.useState)(null),[N,A]=(0,Pe.useState)(!1),[$,de]=(0,Pe.useState)(null),[H,re]=(0,Pe.useState)(null),[B,U]=(0,Pe.useState)(!1),[Q,ve]=(0,Pe.useState)(!1);if((0,Pe.useEffect)(()=>{if(!e)return;a(e),u(e.duration??15);let T=l.services.find(j=>j.id===e.service_id);if(T){de(T);let j=e.price?Number(e.price):null;re(j)}},[e,l]),!i)return null;let Xe=(T,j)=>Ge(Qn(new Date(T),j)),lt=(0,Pe.useRef)(null),Ft=T=>{!T||T.length<3||(lt.current&&clearTimeout(lt.current),lt.current=window.setTimeout(async()=>{g(!0);let K=await(await fetch(`/api/clients?search=${T}`)).json();v(K),g(!1)},250))},Xn=async()=>{if(h(null),!!i)try{let T=await fetch(`/api/time_slots/${i.id}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!T.ok){let K=await T.text();throw new Error(K||"Failed to update time slot")}let j=await T.json();o(K=>K.map(L=>L.id===j.id?j:L)),w("Time slot updated successfully!"),setTimeout(()=>{w(null),a(null),f(""),d(null),r(null)},1e3),Uo()}catch(T){h(T.message)}},wi=async()=>{if(h(null),!!i)try{let T=await fetch(`/api/time_slots/${i.id}`,{method:"DELETE",credentials:"include"});if(!T.ok){let K=await T.text();throw new Error(K||"Failed to delete time slot")}let j=await T.json();o(K=>K.filter(L=>L.id!==j.id)),w("Time slot deleted successfully!"),setTimeout(()=>{w(null),a(null),f(""),d(null),r(null)},1e3),Uo()}catch(T){h(T.message)}},xi=async()=>{if(h(null),!i)return;let T={...i,client_id:i.client_id??n?.client_id??null};console.log("POST payload:",T);try{let j=await fetch("/api/time_slots",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)});if(!j.ok){let L=await j.text();throw new Error(L||"Failed to schedule time slot")}let K=await j.json();o(L=>[...L,K]),w("Time slot scheduled successfully!"),setTimeout(()=>{w(null),a(null),f(""),d(null),r(null)},1e3),Uo()}catch(j){h(j.message)}},Uo=()=>{let T=t.toISOString().slice(0,10),j=Sn(t,6).toISOString().slice(0,10);fetch(`/api/employees/${l.id}/availability?from=${T}&to=${j}`).then(K=>K.json()).then(K=>{x(K.employee.window),o(K.employee.time_slots)})};return I.default.createElement("div",{className:"glass-overlay",onClick:()=>a(null)},I.default.createElement("div",{className:"glass-modal",onClick:T=>T.stopPropagation()},I.default.createElement("div",{className:"form__title"},I.default.createElement("div",{className:"form__title-left"},"Edit time slot:"),I.default.createElement("div",{className:`form__title-right form__title_${i.state}`},i.state)),c&&I.default.createElement("div",{className:"form__error"},c),k&&I.default.createElement("div",{className:"form__success"},k),I.default.createElement("div",{className:"form-group mt-3"},I.default.createElement("div",{className:"time-range-row"},I.default.createElement("label",null,"Date"),I.default.createElement("input",{type:"date",className:"date__picker",value:i.day,onChange:T=>{let j=T.target.value;a(K=>({...K,day:j,start_time:`${j}${K.start_time.slice(10)}`,end_time:`${j}${K.end_time.slice(10)}`}))}}))),I.default.createElement("div",{className:"form-group mt-2"},I.default.createElement("label",null,"Service"),I.default.createElement("div",{className:"time-range-row"},I.default.createElement("div",{className:"input-with-button"},I.default.createElement("select",{className:"width-100",value:i.service_id??"",onChange:T=>{let j=Number(T.target.value),K=l.services.find(G=>G.id===j);if(!K){de(null),re(null);return}let L=new Date(i.start_time);u(K.duration);let te={service_id:K.id,duration:K.duration,price:K.price,end_time:Ge(Qn(L,K.duration))};a(G=>({...G,...te})),r(G=>G?{...G,...te}:null),de(K),re(null)}},I.default.createElement("option",{value:""},"Select a service"),l.services.map(T=>I.default.createElement("option",{key:T.id,value:T.id},T.name))),I.default.createElement("div",{className:"input-button content-center",title:"Add service",onClick:()=>ve(!0)},"+")),I.default.createElement(Io,{open:Q,employee:l,onClose:()=>ve(!1),onCreated:T=>{l.services.push(T),a(j=>({...j,service_id:T.id,duration:T.duration,price:T.price})),de(T),ve(!1)}}))),I.default.createElement("div",{className:"form-group"},$&&I.default.createElement(I.default.Fragment,null,I.default.createElement("div",{className:"time-range-row mt-1 t-sm"},I.default.createElement("label",null,"Duration"),I.default.createElement("input",{type:"number",step:15,min:15,value:i.duration,onChange:T=>{let j=Number(T.target.value),K=new Date(i.start_time);u(j),a(L=>({...L,duration:j,end_time:Ge(Qn(K,j))})),r(L=>L?{...L,duration:j,end_time:Ge(Qn(K,j))}:null)}}),I.default.createElement("label",{className:"content-center"},"Price"),I.default.createElement("input",{type:"number",step:.01,min:0,value:H??Number(i.price??$?.price??0),onChange:T=>{let j=Number(T.target.value);re(j),a(K=>({...K,price:j}))}})))),I.default.createElement("div",{className:"form-group time-range"},I.default.createElement("label",null,"Time"),I.default.createElement("div",{className:"time-range-row"},I.default.createElement("input",{type:"time",step:900,value:En(i.start_time),onChange:T=>{let j=_n(i.start_time,T.target.value);a(K=>({...K,start_time:j,end_time:Xe(j,s)}))}}),I.default.createElement("input",{type:"time",step:900,value:En(i.end_time),onChange:T=>{let j=_n(i.end_time,T.target.value);a(K=>({...K,end_time:j,start_time:Xe(j,-s)}))}}))),I.default.createElement("div",{className:"form-group"},I.default.createElement("label",null,"Client"),I.default.createElement("div",{className:"input-with-button"},I.default.createElement("input",{type:"text",placeholder:"Search client...",value:i?.client?`${i.client.first_name} ${i.client.last_name}`:p,onChange:T=>{a(j=>({...j,client:null,client_id:null})),f(T.target.value),Ft(T.target.value)}}),I.default.createElement("div",{className:"input-button content-center",onClick:()=>U(!0),title:"Add client"},"+")),I.default.createElement(hu,{open:B,onClose:()=>U(!1),onCreated:T=>{a(j=>({...j,client_id:T.id,client:T}))}}),y&&I.default.createElement("div",{className:"hint"},"Searching\u2026"),m.length>0&&I.default.createElement("ul",{className:"autocomplete-list"},m.map(T=>I.default.createElement("li",{key:T.id,onClick:()=>{v([]),a(j=>({...j,client_id:T.id,client:T}))}},I.default.createElement("strong",null,T.first_name," ",T.last_name),I.default.createElement("div",{className:"muted"},T.email))))),I.default.createElement("div",{className:"modal-actions"},I.default.createElement("button",{onClick:()=>{h(null),a(null),f(""),d(null)}},"Close"),i.state==="preview"&&I.default.createElement("button",{className:"apply",onClick:xi},"Schedule"),i.state==="scheduled"&&I.default.createElement(I.default.Fragment,null,I.default.createElement("button",{className:"danger",onClick:()=>A(!0)},"Delete"),I.default.createElement(Ao,{open:N,title:"Delete time slot",message:"Are you sure you want to delete this time slot?",confirmText:"Yes",cancelText:"No",onConfirm:()=>{A(!1),wi()},onCancel:()=>A(!1)})),i.state==="scheduled"&&I.default.createElement("button",{className:"apply",onClick:Xn},"Update"))))}(function(){if(!document.getElementById("d2a1e44d6fcbce1ab72efc649c94a73f5a8a1e5bed0b9b132dbb11207b7851e0")){var e=document.createElement("style");e.id="d2a1e44d6fcbce1ab72efc649c94a73f5a8a1e5bed0b9b132dbb11207b7851e0",e.textContent=`.calendar-card {
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
`,document.head.appendChild(e)}})();function vu({employees:e,companyId:t}){let[n,r]=(0,Y.useState)(Vn(new Date)),[o,a]=(0,Y.useState)(null),[i,l]=(0,Y.useState)(null),[s,u]=(0,Y.useState)(null),[p,f]=(0,Y.useState)([]),[m,v]=(0,Y.useState)([]),y=(0,Y.useRef)(null),[g,b]=(0,Y.useState)(null),[d,c]=(0,Y.useState)(null),[h,k]=(0,Y.useState)(null),[w,S]=(0,Y.useState)(!1),[x,N]=(0,Y.useState)(null),A=Array.from({length:7},(L,te)=>Sn(n,te)),$=new Date,de=()=>{let L=n.toISOString().slice(0,10),te=Sn(n,6).toISOString().slice(0,10);fetch(`/api/employees/${i.id}/availability?from=${L}&to=${te}`).then(G=>G.json()).then(G=>{u(G.employee.window),f(G.employee.upcoming_windows),v(G.employee.time_slots)})};(0,Y.useEffect)(()=>{i&&de()},[i,n]);let[H,re]=(0,Y.useState)(new Date);(0,Y.useEffect)(()=>{let L=()=>re(new Date);L();let te=setInterval(L,300*1e3);return()=>clearInterval(te)},[]);let B=(0,Y.useRef)(null),[U,Q]=(0,Y.useState)(0);(0,Y.useEffect)(()=>{B.current&&Q(B.current.getBoundingClientRect().height)},[n,i]);let ve=H.toISOString().slice(0,10),Xe=H.getHours(),lt=H.getMinutes(),Ft=U*Xe+U*lt/60,Xn=["window-a","window-b","window-c","window-d","window-e"],wi=L=>{let te=Oo(L,[s,...p||[]]);if(!te)return"";let G=te.id%Xn.length;return Xn[G]},xi=A.some(L=>L.toISOString().slice(0,10)===ve);(0,Y.useEffect)(()=>{let L=y.current;L&&requestAnimationFrame(()=>{let te=L.scrollHeight-L.clientHeight;L.scrollTop=te/2})},[n,i]);let Uo=(L,te)=>Ge(Qn(new Date(L),te)),T=(L,te)=>{if(!g||g.day!==L.toISOString().slice(0,10))return!1;let G=Yn(L,te,0),Mt=Yn(L,te+1,0),Fr=Ct(g.start_time),Xt=Ct(g.end_time);return Fo(Fr,Xt,G,Mt)},j=(L,te,G)=>{let Mt=Ct(L.start_time);return Mt?Mt.getHours()===G&&L.day===te.toISOString().slice(0,10):!1},K=(L,te)=>{let G=L.toISOString().slice(0,10),Mt=Yn(L,te,0),Fr=Yn(L,te+1,0);return m.filter(Xt=>{if(Xt.day!==G)return!1;let It=Ct(Xt.start_time),Ho=Ct(Xt.end_time);return Fo(It,Ho,Mt,Fr)})};return Y.default.createElement("section",{className:"calendar-card"},Y.default.createElement(mu,{days:A,weekStart:n,setWeekStart:r,employees:e,currentEmployee:i,setCurrentEmployee:L=>{L?l(L):(l(null),v([]),u(null),b(null),f([]))}}),Y.default.createElement("div",{className:"week-calendar"},Y.default.createElement("div",{className:"week-header"},Y.default.createElement("div",{className:"time-col"}),A.map(L=>{let te=L<$,G=Oo(L,[s,...p||[]]);return Y.default.createElement("div",{key:L.toISOString(),className:`day-col-header
                          ${L.toDateString()===$.toDateString()?"today":""}
                          ${wi(L)}
                        `,"data-tooltip":!i||!G?.effective_date?"":`Window
Starting ${G?.effective_date}
Ending ${G?.end_date||"\u221E"}`,onClick:()=>{te||(N(L),S(!0))}},i&&!te&&Y.default.createElement("span",{className:"edit-icon"},G?"\u2699\uFE0F":"\u2795"),Y.default.createElement("div",null,L.toLocaleDateString("uk-UA",{weekday:"short"})),Y.default.createElement("div",null,L.getDate()))}),i&&x&&Y.default.createElement($o,{open:w,employee:i,window:Oo(x,[s,...p||[]]),onClose:()=>{N(null),S(!1)},onSaved:L=>{l(te=>te&&{...te,window:L})}})),Y.default.createElement("div",{className:"week-body",ref:y},xi&&U>0&&Y.default.createElement("div",{className:"now-line",style:{top:`${Ft}px`}},Y.default.createElement("div",{className:"now-dot"})),tm.map((L,te)=>Y.default.createElement("div",{key:L,className:"week-row",ref:te===0?B:null},Y.default.createElement("div",{className:"time-col"},L,":00"),A.map(G=>{let Mt=K(G,L),Fr=G<Vn(new Date),Xt=nm({day:G,hour:L,windows:[s,...p]});return Y.default.createElement("div",{key:`${G.toISOString()}-${L}`,className:`week-cell ${Xt?"":Fr?"past":"unavailable"}`,onMouseDown:It=>{if(k(null),!Xt||!i)return;let Ho=It.currentTarget.getBoundingClientRect(),Cu=(It.clientY-Ho.top)/Ho.height>=.5?30:0,sm=Cu+30,bi=Yn(G,L,Cu),ki=Yn(G,L,sm);for(let Zt of Mt){let Si=Ct(Zt.start_time),um=Ct(Zt.end_time);if(Fo(bi,ki,Si,um)){c(Zt),a(Zt);return}}if(g){let Zt=Ct(g.start_time),Si=Ct(g.end_time);if(g.day===G.toISOString().slice(0,10)&&Fo(bi,ki,Zt,Si)){a(g);return}}b({day:G.toISOString().slice(0,10),dayIndex:A.findIndex(Zt=>Zt.toDateString()===G.toDateString()),start_time:Ge(bi),end_time:Ge(ki),state:"preview",employee_id:i.id,company_id:t})}},Mt.filter(It=>j(It,G,L)).map(It=>Y.default.createElement(yi,{key:It.id,timeSlot:It})),g&&j(g,G,L)&&Y.default.createElement(yi,{timeSlot:g}))}))))),o&&Y.default.createElement(gu,{slot:o,weekStart:n,previewSlot:g,setPreviewSlot:b,setTimeSlots:v,setEditingSlot:a,editingSlot:o,currentEmployee:i}))}var q=J(V());(function(){if(!document.getElementById("85680663e3af3af3040ba0baa2d9af434f71b3c84e52d8c7f14a6909fce9151c")){var e=document.createElement("style");e.id="85680663e3af3af3040ba0baa2d9af434f71b3c84e52d8c7f14a6909fce9151c",e.textContent=`.employees-container {
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
`,document.head.appendChild(e)}})();function yu({dashboardData:e}){let[t,n]=(0,q.useState)(e?.employees||[]),[r,o]=(0,q.useState)(!1),[a,i]=(0,q.useState)(null),[l,s]=(0,q.useState)(null),u=()=>{i(null),o(!0)},p=y=>{i(y),o(!0)},f=async y=>{if(window.confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044C\u043E\u0433\u043E \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430?"))try{let g=await fetch(`/api/employees/${y}`,{method:"DELETE",credentials:"include"});if(g.ok)n(t.filter(b=>b.id!==y));else{let b=await g.json();s(b.message||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}}catch{s("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}},m=y=>{n(a?t.map(g=>g.id===y.id?y:g):[...t,y]),o(!1),i(null)},v=()=>{o(!1),i(null)};return q.default.createElement("div",{className:"employees-container"},q.default.createElement("div",{className:"employees-header"},q.default.createElement("h2",null,"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438"),q.default.createElement("button",{className:"btn-primary",onClick:u},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430")),l&&q.default.createElement("div",{className:"error-message"},l),t.length===0?q.default.createElement("div",{className:"empty-state"},q.default.createElement("p",null,"\u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0456\u0432. \u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0448\u043E\u0433\u043E!")):q.default.createElement("div",{className:"employees-table"},q.default.createElement("table",null,q.default.createElement("thead",null,q.default.createElement("tr",null,q.default.createElement("th",null,"\u0406\u043C'\u044F"),q.default.createElement("th",null,"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),q.default.createElement("th",null,"Email"),q.default.createElement("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),q.default.createElement("th",null,"\u0414\u0456\u0457"))),q.default.createElement("tbody",null,t.map(y=>q.default.createElement("tr",{key:y.id},q.default.createElement("td",null,y.first_name),q.default.createElement("td",null,y.last_name),q.default.createElement("td",null,y.email),q.default.createElement("td",null,y.phone||"N/A"),q.default.createElement("td",{className:"actions content-center"},q.default.createElement("button",{className:"btn-edit",onClick:()=>p(y)},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),q.default.createElement("button",{className:"btn-delete",onClick:()=>f(y.id)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"))))))),r&&q.default.createElement("div",{className:"modal-overlay",onClick:v},q.default.createElement("div",{className:"modal-content",onClick:y=>y.stopPropagation()},q.default.createElement(Or,{role:"employee",employee:a,onSave:m,onCancel:v,isModal:!0}))))}var Z=J(V());var we=J(V());function wu({client:e,onSave:t,onCancel:n,isModal:r=!1}){let o=Ke(),[a,i]=(0,we.useState)({first_name:"",last_name:"",email:"",phone:"",password:""}),[l,s]=(0,we.useState)({});(0,we.useEffect)(()=>{e&&i({first_name:e.first_name||"",last_name:e.last_name||"",email:e.email||"",phone:e.phone||"",password:""})},[e]);let u=m=>{i({...a,[m.target.name]:m.target.value}),s(v=>({...v,[m.target.name]:null}))},p=async m=>{m.preventDefault();let v={client:{first_name:a.first_name,last_name:a.last_name,email:a.email,phone:a.phone}};a.password&&(v.client.password=a.password);let y=e?`/api/clients/${e.id}`:"/api/clients",b=await fetch(y,{method:e?"PUT":"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});if(b.ok){let d=await b.json();r&&t?t(d):o("/companies/welcome")}else{let d=await b.json();s(d.errors||{})}},f=m=>l[m]?.message;return we.default.createElement("div",{className:r?"client-form-modal":"client-form container"},we.default.createElement("h1",null,e?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430"),we.default.createElement("form",{onSubmit:p},f("first_name")&&we.default.createElement("div",{className:"field-error"},f("first_name")),we.default.createElement("input",{name:"first_name",value:a.first_name,onChange:u,placeholder:"\u0406\u043C\u02BC\u044F"}),f("last_name")&&we.default.createElement("div",{className:"field-error"},f("last_name")),we.default.createElement("input",{name:"last_name",value:a.last_name,onChange:u,placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),f("email")&&we.default.createElement("div",{className:"field-error"},f("email")),we.default.createElement("input",{name:"email",type:"email",value:a.email,onChange:u,placeholder:"Email"}),f("phone")&&we.default.createElement("div",{className:"field-error"},f("phone")),we.default.createElement("input",{name:"phone",value:a.phone,onChange:u,placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),f("password")&&we.default.createElement("div",{className:"field-error"},f("password")),we.default.createElement("input",{name:"password",type:"password",value:a.password,onChange:u,placeholder:e?"\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u0437\u0430\u043B\u0438\u0448\u0442\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u043C, \u0449\u043E\u0431 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438)":"\u041F\u0430\u0440\u043E\u043B\u044C",required:!e}),we.default.createElement("div",{className:"form-actions"},r&&n&&we.default.createElement("button",{type:"button",onClick:n},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),we.default.createElement("button",{type:"submit"},e?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"))))}(function(){if(!document.getElementById("74b753de80d78e38957b9d8c852f845b8349949efb4a62e8a40b3415643a93b6")){var e=document.createElement("style");e.id="74b753de80d78e38957b9d8c852f845b8349949efb4a62e8a40b3415643a93b6",e.textContent=`.clients-container {
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
`,document.head.appendChild(e)}})();function xu({dashboardData:e}){let[t,n]=(0,Z.useState)([]),[r,o]=(0,Z.useState)(!1),[a,i]=(0,Z.useState)(null),[l,s]=(0,Z.useState)(null),u=async()=>{try{let g=await fetch("/api/clients",{credentials:"include"});if(g.ok){let b=await g.json();n(b.clients)}else s("Failed to fetch clients")}catch{s("Failed to fetch clients")}};(0,Z.useEffect)(()=>{(async()=>{try{let b=await fetch("/api/clients",{credentials:"include"});if(b.ok){let d=await b.json();n(d.clients||d)}else s("Failed to fetch clients")}catch{s("Failed to fetch clients")}})()},[]);let p=()=>{i(null),o(!0)},f=g=>{i(g),o(!0)},m=async g=>{if(window.confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044C\u043E\u0433\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430?"))try{let b=await fetch(`/api/clients/${g}`,{method:"DELETE",credentials:"include"});if(b.ok)n(t.filter(d=>d.id!==g));else{let d=await b.json();s(d.message||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}}catch{s("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}},v=g=>{n(a?t.map(b=>b.id===g.id?g:b):[...t,g]),o(!1),i(null)},y=()=>{o(!1),i(null)};return Z.default.createElement("div",{className:"clients-container"},Z.default.createElement("div",{className:"clients-header"},Z.default.createElement("h2",null,"\u041A\u043B\u0456\u0454\u043D\u0442\u0438"),Z.default.createElement("button",{className:"btn-primary",onClick:p},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430")),l&&Z.default.createElement("div",{className:"error-message"},l),t.length===0?Z.default.createElement("div",{className:"empty-state"},Z.default.createElement("p",null,"\u041D\u0435\u043C\u0430\u0454 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432. \u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0448\u043E\u0433\u043E!")):Z.default.createElement("div",{className:"clients-table"},Z.default.createElement("table",null,Z.default.createElement("thead",null,Z.default.createElement("tr",null,Z.default.createElement("th",null,"\u0406\u043C'\u044F"),Z.default.createElement("th",null,"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),Z.default.createElement("th",null,"Email"),Z.default.createElement("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),Z.default.createElement("th",null,"\u0414\u0456\u0457"))),Z.default.createElement("tbody",null,t.map(g=>Z.default.createElement("tr",{key:g.id},Z.default.createElement("td",null,g.first_name),Z.default.createElement("td",null,g.last_name),Z.default.createElement("td",null,g.email),Z.default.createElement("td",null,g.phone||"N/A"),Z.default.createElement("td",{className:"actions content-center"},Z.default.createElement("button",{className:"btn-edit",onClick:()=>f(g)},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),Z.default.createElement("button",{className:"btn-delete",onClick:()=>m(g.id)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"))))))),r&&Z.default.createElement("div",{className:"modal-overlay",onClick:y},Z.default.createElement("div",{className:"modal-content",onClick:g=>g.stopPropagation()},Z.default.createElement(wu,{client:a,onSave:v,onCancel:y,isModal:!0}))))}var O=J(V());(function(){if(!document.getElementById("b2621e4b4297e219f58b94b6e9677304c32a37f7c15d475d684fbd158706d5d7")){var e=document.createElement("style");e.id="b2621e4b4297e219f58b94b6e9677304c32a37f7c15d475d684fbd158706d5d7",e.textContent=`.company-container {
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
`,document.head.appendChild(e)}})();function bu({dashboardData:e}){let[t,n]=(0,O.useState)(e?.company||null),[r,o]=(0,O.useState)(!1),[a,i]=(0,O.useState)(null),[l,s]=(0,O.useState)(null),u=()=>{o(!0)},p=m=>{n(m),o(!1),s("\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E"),setTimeout(()=>s(null),3e3)},f=()=>{o(!1)};return t?O.default.createElement("div",{className:"company-container"},O.default.createElement("div",{className:"company-header"},O.default.createElement("h2",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),O.default.createElement("button",{className:"btn-primary",onClick:u},"\u270F\uFE0F \u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438")),a&&O.default.createElement("div",{className:"error-message"},a),l&&O.default.createElement("div",{className:"success-message"},l),O.default.createElement("div",{className:"company-details"},O.default.createElement("section",{className:"company-section"},O.default.createElement("h3",null,"\u041E\u0441\u043D\u043E\u0432\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"),O.default.createElement("div",{className:"detail-grid"},O.default.createElement("div",{className:"detail-item"},O.default.createElement("label",null,"\u041D\u0430\u0437\u0432\u0430:"),O.default.createElement("span",null,t.name)),O.default.createElement("div",{className:"detail-item"},O.default.createElement("label",null,"Email:"),O.default.createElement("span",null,t.email||"N/A")),O.default.createElement("div",{className:"detail-item"},O.default.createElement("label",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"),O.default.createElement("span",null,t.phone||"N/A")),O.default.createElement("div",{className:"detail-item"},O.default.createElement("label",null,"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442:"),O.default.createElement("span",null,t.website?O.default.createElement("a",{href:t.website,target:"_blank",rel:"noopener noreferrer"},t.website):"N/A")),O.default.createElement("div",{className:"detail-item full-width"},O.default.createElement("label",null,"\u041E\u043F\u0438\u0441:"),O.default.createElement("span",null,t.description||"N/A")))),t.address&&O.default.createElement("section",{className:"company-section"},O.default.createElement("h3",null,"\u0410\u0434\u0440\u0435\u0441\u0430"),O.default.createElement("div",{className:"detail-grid"},O.default.createElement("div",{className:"detail-item"},O.default.createElement("label",null,"\u0412\u0443\u043B\u0438\u0446\u044F 1:"),O.default.createElement("span",null,t.address.street_line1||"N/A")),O.default.createElement("div",{className:"detail-item"},O.default.createElement("label",null,"\u0412\u0443\u043B\u0438\u0446\u044F 2:"),O.default.createElement("span",null,t.address.street_line2||"N/A")),O.default.createElement("div",{className:"detail-item"},O.default.createElement("label",null,"\u041C\u0456\u0441\u0442\u043E:"),O.default.createElement("span",null,t.address.city||"N/A")),O.default.createElement("div",{className:"detail-item"},O.default.createElement("label",null,"\u041E\u0431\u043B\u0430\u0441\u0442\u044C:"),O.default.createElement("span",null,t.address.region||"N/A")),O.default.createElement("div",{className:"detail-item"},O.default.createElement("label",null,"\u041F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441:"),O.default.createElement("span",null,t.address.postal||"N/A")),O.default.createElement("div",{className:"detail-item"},O.default.createElement("label",null,"\u041A\u0440\u0430\u0457\u043D\u0430:"),O.default.createElement("span",null,t.address.country||"N/A"))))),r&&O.default.createElement("div",{className:"modal-overlay",onClick:f},O.default.createElement("div",{className:"modal-content",onClick:m=>m.stopPropagation()},O.default.createElement(Mo,{company:t,onSave:p,onCancel:f,isModal:!0})))):O.default.createElement("div",{className:"company-container"},O.default.createElement("div",{className:"empty-state"},O.default.createElement("p",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430")))}var om=J(V());function ku({dashboardData:e}){return om.default.createElement("div",null,"Settings")}(function(){if(!document.getElementById("6a6155881ee733b2fee22719c3362487d8f0b92f87b75b4e1bdd6886dcc8063c")){var e=document.createElement("style");e.id="6a6155881ee733b2fee22719c3362487d8f0b92f87b75b4e1bdd6886dcc8063c",e.textContent=`.dashboard {
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
`,document.head.appendChild(e)}})();function Kn(){let[e,t]=(0,Ie.useState)(),{id:n}=To(),r=Ke(),o=ht();if((0,Ie.useEffect)(()=>{fetch(`/api/companies/${n}/dashboard`).then(i=>i.status===401?(r("/companies/welcome"),null):i.json()).then(i=>{i&&t(i)}).catch(()=>{r("/companies/welcome")})},[n,r]),e===void 0)return Ie.default.createElement("p",null,"Loading...");let a=()=>{let i=o.pathname;return i.includes("/employees")?Ie.default.createElement(yu,{dashboardData:e}):i.includes("/clients")?Ie.default.createElement(xu,{dashboardData:e}):i.includes("/edit")?Ie.default.createElement(bu,{dashboardData:e}):i.includes("/settings")?Ie.default.createElement(ku,{dashboardData:e}):Ie.default.createElement(vu,{employees:e.employees,companyId:n})};return Ie.default.createElement("div",{className:"dashboard"},Ie.default.createElement(fu,{companyName:e.company.name,id:n}),Ie.default.createElement("div",{className:"dashboard__content"},Ie.default.createElement(pu,{userName:e.user.first_name}),Ie.default.createElement("main",{className:"dashboard__main content-center"},a())))}var Gn=J(V());function Su(){return Gn.default.createElement("div",{class:"container"},Gn.default.createElement("p",{class:"t-a-center"},"\u0412\u0436\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442?"),Gn.default.createElement(jo,null),Gn.default.createElement("div",{className:"t-a-center"},Gn.default.createElement("p",null,"\u0429\u0435 \u043D\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443?"),Gn.default.createElement(bn,{to:"/companies/admins/new"},"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F")))}(function(){if(!document.getElementById("4be33d924d68f9738d162f2f6f9320fedbb0eccc00bfe3258cc9e5da3fda847b")){var e=document.createElement("style");e.id="4be33d924d68f9738d162f2f6f9320fedbb0eccc00bfe3258cc9e5da3fda847b",e.textContent="",document.head.appendChild(e)}})();function Eu(){return le.default.createElement("div",null,le.default.createElement(zo,null,le.default.createElement(Se,{path:"/",redirectTo:"welcome"}),le.default.createElement(Se,{path:"welcome",element:le.default.createElement(Su,null)}),le.default.createElement(Se,{path:"new",element:le.default.createElement(Mo,null)}),le.default.createElement(Se,{path:"employees/new",element:le.default.createElement(Or,{role:"employee"})}),le.default.createElement(Se,{path:"admins/new",element:le.default.createElement(Or,{role:"admin"})}),le.default.createElement(Se,{path:"login",element:le.default.createElement(jo,null)}),le.default.createElement(Se,{path:":id/dashboard",element:le.default.createElement(Kn,null)}),le.default.createElement(Se,{path:":id/employees",element:le.default.createElement(Kn,null)}),le.default.createElement(Se,{path:":id/clients",element:le.default.createElement(Kn,null)}),le.default.createElement(Se,{path:":id/edit",element:le.default.createElement(Kn,null)}),le.default.createElement(Se,{path:":id/settings",element:le.default.createElement(Kn,null)}),le.default.createElement(Se,{path:"*",element:le.default.createElement(du,null)})))}var E=J(V());(function(){if(!document.getElementById("29801b744b15f53d7da10ff61f3e1caa467838a727ad6d331d9be5faacdc078b")){var e=document.createElement("style");e.id="29801b744b15f53d7da10ff61f3e1caa467838a727ad6d331d9be5faacdc078b",e.textContent=`.welcome {
  min-height: 100vh;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 80px 20px 120px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.hero__content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero__title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.hero__subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
  margin-bottom: 2.5rem;
  font-weight: 400;
}

/* Search Bar */
.search-bar {
  position: relative;
  max-width: 800px;
  margin: 0 auto 1.5rem;
}

.search-bar__wrapper {
  display: flex;
  gap: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.search-bar__wrapper:focus-within {
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
}

.search-bar__field {
  position: relative;
  flex: 1;
  border-right: 1px solid #e5e7eb;
}

.search-bar__field:last-of-type {
  border-right: none;
}

.search-bar__field--main {
  flex: 2;
}

.search-bar__icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
}

.search-bar__input,
.search-bar__select {
  width: 100%;
  padding: 18px 16px 18px 48px;
  border: none;
  font-size: 16px;
  color: #1f2937;
  background: transparent;
  outline: none;
}

.search-bar__input::placeholder {
  color: #9ca3af;
}

.search-bar__select {
  padding-left: 16px;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239ca3af' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
}

.search-bar__btn {
  padding: 18px 32px;
  background: #667eea;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  white-space: nowrap;
}

.search-bar__btn:hover {
  background: #5568d3;
}

/* Search Suggestions */
.search-suggestions {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 10;
}

.search-suggestions__loading {
  padding: 16px;
  text-align: center;
  color: #6b7280;
}

.search-suggestions__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  text-decoration: none;
  color: #1f2937;
  transition: background 0.2s ease;
}

.search-suggestions__item:hover {
  background: #f9fafb;
}

.search-suggestions__icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  flex-shrink: 0;
}

.search-suggestions__content {
  flex: 1;
  min-width: 0;
}

.search-suggestions__name {
  font-weight: 600;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-suggestions__details {
  font-size: 14px;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 2px;
}

/* Quick Links */
.quick-links {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.quick-links__label {
  font-size: 14px;
  opacity: 0.9;
}

.quick-links__item {
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.3s ease;
}

.quick-links__item:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Categories Section */
.categories {
  padding: 80px 20px;
  background: #f9fafb;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.categories__title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 3rem;
}

.categories__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
}

.category-card {
  background: white;
  padding: 32px 24px;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.category-card__icon {
  font-size: 3rem;
  margin-bottom: 12px;
}

.category-card__title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
}

/* Business CTA Section */
.business-cta {
  padding: 80px 20px;
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  color: white;
}

.business-cta__content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.business-cta__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.business-cta__subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.business-cta__features {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 2.5rem;
}

.business-feature {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
}

.business-feature__icon {
  color: #10b981;
  flex-shrink: 0;
}

.business-cta__btn {
  display: inline-block;
  padding: 16px 48px;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.business-cta__btn:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

/* Client Login */
.client-login {
  padding: 40px 20px;
  text-align: center;
  background: white;
  border-top: 1px solid #e5e7eb;
}

.client-login p {
  color: #6b7280;
  margin-bottom: 8px;
}

.client-login__link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
}

.client-login__link:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .hero__title {
    font-size: 2.5rem;
  }

  .search-bar__wrapper {
    flex-direction: column;
  }

  .search-bar__field {
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }

  .search-bar__field:last-of-type {
    border-bottom: none;
  }

  .categories__grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .business-cta__features {
    flex-direction: column;
    align-items: center;
  }

  .business-cta__title {
    font-size: 2rem;
  }
}

/* Add to Welcome.css */

/* Search Results (changed from search-suggestions) */
.search-results {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 10;
  max-height: 400px;
  overflow-y: auto;
}

.search-results__loading {
  padding: 32px 16px;
  text-align: center;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.spinner {
  width: 32px;
  height: 32px;
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

.search-results__empty {
  padding: 48px 16px;
  text-align: center;
  color: #6b7280;
}

.search-results__empty svg {
  margin: 0 auto 16px;
}

.search-results__empty p {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 4px;
}

.search-results__empty span {
  font-size: 14px;
  color: #9ca3af;
}

.search-results__header {
  padding: 12px 16px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
}

.search-results__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s ease;
  border-bottom: 1px solid #f3f4f6;
}

.search-results__item:last-child {
  border-bottom: none;
}

.search-results__item:hover {
  background: #f9fafb;
}

.search-results__icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  flex-shrink: 0;
}

.search-results__content {
  flex: 1;
  min-width: 0;
}

.search-results__name {
  font-weight: 600;
  color: #1f2937;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}

.search-results__details {
  font-size: 14px;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-results__arrow {
  color: #9ca3af;
  flex-shrink: 0;
}

/* Quick links as buttons */
.quick-links__item {
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.3s ease;
}

.quick-links__item:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Category cards as clickable */
.category-card {
  cursor: pointer;
}
`,document.head.appendChild(e)}})();function _u(){let[e,t]=(0,E.useState)(""),[n,r]=(0,E.useState)(""),[o,a]=(0,E.useState)(""),[i,l]=(0,E.useState)([]),[s,u]=(0,E.useState)(!1),[p,f]=(0,E.useState)(!1),m=Ke(),v=d=>d.toLowerCase().replace(/\s+/g,"-"),y=async d=>{if(d.preventDefault(),!e&&!n&&!o){l([]),f(!1);return}u(!0),f(!0);try{let c=new URLSearchParams;e&&c.append("params[name]",e),n&&c.append("params[category]",n),o&&c.append("params[city]",o);let k=await(await fetch(`/api/companies?${c}`)).json();l(Array.isArray(k)?k:[])}catch(c){console.error("Search error:",c),l([])}finally{u(!1)}},g=d=>{f(!1),l([]),m(`/w/${v(d.name)}`)};return E.default.createElement("div",{className:"welcome",onClick:()=>{f(!1)}},E.default.createElement("section",{className:"hero"},E.default.createElement("div",{className:"hero__content"},E.default.createElement("h1",{className:"hero__title"},"\u0404 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),E.default.createElement("p",{className:"hero__subtitle"},"\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u0442\u0430 \u0437\u0430\u0431\u0440\u043E\u043D\u044E\u0439\u0442\u0435 \u043F\u043E\u0441\u043B\u0443\u0433\u0438 \u043A\u0440\u0430\u0441\u0438 \u0442\u0430 \u0437\u0434\u043E\u0440\u043E\u0432'\u044F \u043F\u043E\u0431\u043B\u0438\u0437\u0443"),E.default.createElement("form",{className:"search-bar",onSubmit:y,onClick:d=>d.stopPropagation()},E.default.createElement("div",{className:"search-bar__wrapper"},E.default.createElement("div",{className:"search-bar__field search-bar__field--main"},E.default.createElement("svg",{className:"search-bar__icon",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},E.default.createElement("path",{d:"M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})),E.default.createElement("input",{type:"text",className:"search-bar__input",placeholder:"\u041F\u043E\u0441\u043B\u0443\u0433\u0430, \u0431\u0456\u0437\u043D\u0435\u0441 \u0430\u0431\u043E \u043C\u0430\u0439\u0441\u0442\u0435\u0440",value:e,onChange:d=>t(d.target.value)})),E.default.createElement("div",{className:"search-bar__field"},E.default.createElement("select",{className:"search-bar__select",value:n,onChange:d=>r(d.target.value)},E.default.createElement("option",{value:""},"\u0412\u0441\u0456 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"),E.default.createElement("option",{value:"hair"},"\u041F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F"),E.default.createElement("option",{value:"nails"},"\u041C\u0430\u043D\u0456\u043A\u044E\u0440"),E.default.createElement("option",{value:"spa"},"\u0421\u041F\u0410"),E.default.createElement("option",{value:"massage"},"\u041C\u0430\u0441\u0430\u0436"),E.default.createElement("option",{value:"beauty"},"\u041A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F"),E.default.createElement("option",{value:"fitness"},"\u0424\u0456\u0442\u043D\u0435\u0441"))),E.default.createElement("div",{className:"search-bar__field"},E.default.createElement("svg",{className:"search-bar__icon",width:"16",height:"20",viewBox:"0 0 16 20",fill:"none"},E.default.createElement("path",{d:"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",stroke:"currentColor",strokeWidth:"2"}),E.default.createElement("path",{d:"M8 1C4.5 1 1 3.5 1 8c0 5.5 7 11 7 11s7-5.5 7-11c0-4.5-3.5-7-7-7z",stroke:"currentColor",strokeWidth:"2"})),E.default.createElement("input",{type:"text",className:"search-bar__input",placeholder:"\u041C\u0456\u0441\u0442\u043E",value:o,onChange:d=>a(d.target.value)})),E.default.createElement("button",{type:"submit",className:"search-bar__btn"},"\u0417\u043D\u0430\u0439\u0442\u0438")),p&&E.default.createElement("div",{className:"search-results"},s&&E.default.createElement("div",{className:"search-results__loading"},E.default.createElement("div",{className:"spinner"}),"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."),!s&&i.length===0&&E.default.createElement("div",{className:"search-results__empty"},E.default.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none"},E.default.createElement("path",{d:"M21 38a17 17 0 100-34 17 17 0 000 34zM44 44l-9.5-9.5",stroke:"#9ca3af",strokeWidth:"3",strokeLinecap:"round"})),E.default.createElement("p",null,"\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"),E.default.createElement("span",null,"\u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u043F\u043E\u0448\u0443\u043A\u0443")),!s&&i.length>0&&E.default.createElement(E.default.Fragment,null,E.default.createElement("div",{className:"search-results__header"},"\u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E ",i.length," ",i.length===1?"\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442":"\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432"),i.map(d=>E.default.createElement("div",{key:d.id,className:"search-results__item",onClick:()=>g(d)},E.default.createElement("div",{className:"search-results__icon"},d.name.charAt(0).toUpperCase()),E.default.createElement("div",{className:"search-results__content"},E.default.createElement("div",{className:"search-results__name"},d.name),E.default.createElement("div",{className:"search-results__details"},d.description&&`${d.description} \u2022 `,d.city||"\u041A\u0438\u0457\u0432")),E.default.createElement("svg",{className:"search-results__arrow",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},E.default.createElement("path",{d:"M7 4l6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))))))),E.default.createElement("div",{className:"quick-links"},E.default.createElement("span",{className:"quick-links__label"},"\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456:"),E.default.createElement("button",{className:"quick-links__item",onClick:d=>{d.stopPropagation(),r("hair"),t(""),y(d)}},"\u0421\u0442\u0440\u0438\u0436\u043A\u0430"),E.default.createElement("button",{className:"quick-links__item",onClick:d=>{d.stopPropagation(),r("nails"),t(""),y(d)}},"\u041C\u0430\u043D\u0456\u043A\u044E\u0440"),E.default.createElement("button",{className:"quick-links__item",onClick:d=>{d.stopPropagation(),r("massage"),t(""),y(d)}},"\u041C\u0430\u0441\u0430\u0436"),E.default.createElement("button",{className:"quick-links__item",onClick:d=>{d.stopPropagation(),r("spa"),t(""),y(d)}},"\u0421\u041F\u0410")))),E.default.createElement("section",{className:"categories"},E.default.createElement("div",{className:"container"},E.default.createElement("h2",{className:"categories__title"},"\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"),E.default.createElement("div",{className:"categories__grid"},E.default.createElement("div",{className:"category-card",onClick:()=>{r("hair"),t(""),window.scrollTo({top:0,behavior:"smooth"})}},E.default.createElement("div",{className:"category-card__icon"},"\u{1F487}"),E.default.createElement("h3",{className:"category-card__title"},"\u041F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u044F")),E.default.createElement("div",{className:"category-card",onClick:()=>{r("nails"),t(""),window.scrollTo({top:0,behavior:"smooth"})}},E.default.createElement("div",{className:"category-card__icon"},"\u{1F485}"),E.default.createElement("h3",{className:"category-card__title"},"\u041C\u0430\u043D\u0456\u043A\u044E\u0440")),E.default.createElement("div",{className:"category-card",onClick:()=>{r("massage"),t(""),window.scrollTo({top:0,behavior:"smooth"})}},E.default.createElement("div",{className:"category-card__icon"},"\u{1F486}"),E.default.createElement("h3",{className:"category-card__title"},"\u041C\u0430\u0441\u0430\u0436")),E.default.createElement("div",{className:"category-card",onClick:()=>{r("spa"),t(""),window.scrollTo({top:0,behavior:"smooth"})}},E.default.createElement("div",{className:"category-card__icon"},"\u{1F9D6}"),E.default.createElement("h3",{className:"category-card__title"},"\u0421\u041F\u0410")),E.default.createElement("div",{className:"category-card",onClick:()=>{r("beauty"),t(""),window.scrollTo({top:0,behavior:"smooth"})}},E.default.createElement("div",{className:"category-card__icon"},"\u2728"),E.default.createElement("h3",{className:"category-card__title"},"\u041A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0456\u044F")),E.default.createElement("div",{className:"category-card",onClick:()=>{r("fitness"),t(""),window.scrollTo({top:0,behavior:"smooth"})}},E.default.createElement("div",{className:"category-card__icon"},"\u{1F4AA}"),E.default.createElement("h3",{className:"category-card__title"},"\u0424\u0456\u0442\u043D\u0435\u0441"))))),E.default.createElement("section",{className:"business-cta"},E.default.createElement("div",{className:"container"},E.default.createElement("div",{className:"business-cta__content"},E.default.createElement("h2",{className:"business-cta__title"},"\u0412\u0438 \u0432\u043B\u0430\u0441\u043D\u0438\u043A \u0431\u0456\u0437\u043D\u0435\u0441\u0443?"),E.default.createElement("p",{className:"business-cta__subtitle"},"\u041F\u0440\u0438\u0454\u0434\u043D\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u043E \u0404 \u0432\u0456\u043A\u043E\u043D\u0446\u0435 \u0442\u0430 \u0440\u043E\u0437\u0432\u0438\u0432\u0430\u0439\u0442\u0435 \u0441\u0432\u0456\u0439 \u0431\u0456\u0437\u043D\u0435\u0441"),E.default.createElement("div",{className:"business-cta__features"},E.default.createElement("div",{className:"business-feature"},E.default.createElement("svg",{className:"business-feature__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},E.default.createElement("path",{d:"M9 11l3 3L22 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),E.default.createElement("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11",stroke:"currentColor",strokeWidth:"2"})),E.default.createElement("span",null,"\u041E\u043D\u043B\u0430\u0439\u043D \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F 24/7")),E.default.createElement("div",{className:"business-feature"},E.default.createElement("svg",{className:"business-feature__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},E.default.createElement("path",{d:"M9 11l3 3L22 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),E.default.createElement("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11",stroke:"currentColor",strokeWidth:"2"})),E.default.createElement("span",null,"\u0423\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u0437\u0430\u043F\u0438\u0441\u0430\u043C\u0438")),E.default.createElement("div",{className:"business-feature"},E.default.createElement("svg",{className:"business-feature__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},E.default.createElement("path",{d:"M9 11l3 3L22 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),E.default.createElement("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11",stroke:"currentColor",strokeWidth:"2"})),E.default.createElement("span",null,"\u0417\u0430\u043B\u0443\u0447\u0435\u043D\u043D\u044F \u043D\u043E\u0432\u0438\u0445 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432"))),E.default.createElement(bn,{to:"/companies/welcome",className:"business-cta__btn"},"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0431\u0456\u0437\u043D\u0435\u0441")))),E.default.createElement("section",{className:"client-login"},E.default.createElement("div",{className:"container"},E.default.createElement("p",null,"\u0412\u0436\u0435 \u043C\u0430\u0454\u0442\u0435 \u0437\u0430\u043F\u0438\u0441?"),E.default.createElement(bn,{to:"/clients",className:"client-login__link"},"\u0423\u0432\u0456\u0439\u0442\u0438 \u044F\u043A \u043A\u043B\u0456\u0454\u043D\u0442"))))}var ny=()=>gt.default.createElement("h2",null,"404 Not Found");function am(){return gt.default.createElement(iu,null,gt.default.createElement(zo,null,gt.default.createElement(Se,{path:"/",element:gt.default.createElement(_u,null)}),gt.default.createElement(Se,{path:"/companies/*",element:gt.default.createElement(Eu,null)}),gt.default.createElement(Se,{path:"/w/:companyName",element:gt.default.createElement(uu,null)}),gt.default.createElement(Se,{path:"*",element:gt.default.createElement(ny,null)})))}document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("App");e?(0,lm.createRoot)(e).render(im.default.createElement(am,null)):console.error('React root element "#App" not found in DOM.')});
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
