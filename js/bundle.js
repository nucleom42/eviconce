var sm=Object.create;var Cu=Object.defineProperty;var um=Object.getOwnPropertyDescriptor;var cm=Object.getOwnPropertyNames;var dm=Object.getPrototypeOf,fm=Object.prototype.hasOwnProperty;var yn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var pm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of cm(t))!fm.call(e,o)&&o!==n&&Cu(e,o,{get:()=>t[o],enumerable:!(r=um(t,o))||r.enumerable});return e};var A=(e,t,n)=>(n=e!=null?sm(dm(e)):{},pm(t||!e||!e.__esModule?Cu(n,"default",{value:e,enumerable:!0}):n,e));var Iu=yn(H=>{"use strict";var Dr=Symbol.for("react.element"),mm=Symbol.for("react.portal"),hm=Symbol.for("react.fragment"),vm=Symbol.for("react.strict_mode"),ym=Symbol.for("react.profiler"),gm=Symbol.for("react.provider"),wm=Symbol.for("react.context"),xm=Symbol.for("react.forward_ref"),Sm=Symbol.for("react.suspense"),Em=Symbol.for("react.memo"),bm=Symbol.for("react.lazy"),_u=Symbol.iterator;function km(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var Pu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lu=Object.assign,Du={};function Wn(e,t,n){this.props=e,this.context=t,this.refs=Du,this.updater=n||Pu}Wn.prototype.isReactComponent={};Wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tu(){}Tu.prototype=Wn.prototype;function bi(e,t,n){this.props=e,this.context=t,this.refs=Du,this.updater=n||Pu}var ki=bi.prototype=new Tu;ki.constructor=bi;Lu(ki,Wn.prototype);ki.isPureReactComponent=!0;var Nu=Array.isArray,Ou=Object.prototype.hasOwnProperty,Ci={current:null},Fu={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Ou.call(t,r)&&!Fu.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Dr,type:e,key:a,ref:i,props:o,_owner:Ci.current}}function Cm(e,t){return{$$typeof:Dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _i(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dr}function _m(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ru=/\/+/g;function Ei(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_m(""+e.key):t.toString(36)}function $o(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Dr:case mm:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Ei(i,0):r,Nu(o)?(n="",e!=null&&(n=e.replace(Ru,"$&/")+"/"),$o(o,t,n,"",function(u){return u})):o!=null&&(_i(o)&&(o=Cm(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ru,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Nu(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Ei(a,l);i+=$o(a,t,n,s,o)}else if(s=km(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Ei(a,l++),i+=$o(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ao(e,t,n){if(e==null)return e;var r=[],o=0;return $o(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Nm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Uo={transition:null},Rm={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Uo,ReactCurrentOwner:Ci};function zu(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Ao,forEach:function(e,t,n){Ao(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ao(e,function(){t++}),t},toArray:function(e){return Ao(e,function(t){return t})||[]},only:function(e){if(!_i(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Wn;H.Fragment=hm;H.Profiler=ym;H.PureComponent=bi;H.StrictMode=vm;H.Suspense=Sm;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rm;H.act=zu;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lu({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Ci.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Ou.call(t,s)&&!Fu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Dr,type:e.type,key:o,ref:a,props:r,_owner:i}};H.createContext=function(e){return e={$$typeof:wm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gm,_context:e},e.Consumer=e};H.createElement=Mu;H.createFactory=function(e){var t=Mu.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:xm,render:e}};H.isValidElement=_i;H.lazy=function(e){return{$$typeof:bm,_payload:{_status:-1,_result:e},_init:Nm}};H.memo=function(e,t){return{$$typeof:Em,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Uo.transition;Uo.transition={};try{e()}finally{Uo.transition=t}};H.unstable_act=zu;H.useCallback=function(e,t){return Le.current.useCallback(e,t)};H.useContext=function(e){return Le.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};H.useEffect=function(e,t){return Le.current.useEffect(e,t)};H.useId=function(){return Le.current.useId()};H.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Le.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};H.useRef=function(e){return Le.current.useRef(e)};H.useState=function(e){return Le.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Le.current.useTransition()};H.version="18.3.1"});var j=yn((ag,ju)=>{"use strict";ju.exports=Iu()});var Ku=yn(Z=>{"use strict";function Li(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Ho(o,t))e[r]=t,e[n]=o,n=r;else break e}}function it(e){return e.length===0?null:e[0]}function Wo(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var i=2*(r+1)-1,l=e[i],s=i+1,u=e[s];if(0>Ho(l,n))s<o&&0>Ho(u,l)?(e[r]=u,e[s]=n,r=s):(e[r]=l,e[i]=n,r=i);else if(s<o&&0>Ho(u,n))e[r]=u,e[s]=n,r=s;else break e}}return t}function Ho(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Au=performance,Z.unstable_now=function(){return Au.now()}):(Ni=Date,$u=Ni.now(),Z.unstable_now=function(){return Ni.now()-$u});var Au,Ni,$u,vt=[],Ht=[],Pm=1,Ge=null,be=3,Vo=!1,gn=!1,Or=!1,Bu=typeof setTimeout=="function"?setTimeout:null,Wu=typeof clearTimeout=="function"?clearTimeout:null,Uu=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Di(e){for(var t=it(Ht);t!==null;){if(t.callback===null)Wo(Ht);else if(t.startTime<=e)Wo(Ht),t.sortIndex=t.expirationTime,Li(vt,t);else break;t=it(Ht)}}function Ti(e){if(Or=!1,Di(e),!gn)if(it(vt)!==null)gn=!0,Fi(Oi);else{var t=it(Ht);t!==null&&Mi(Ti,t.startTime-e)}}function Oi(e,t){gn=!1,Or&&(Or=!1,Wu(Fr),Fr=-1),Vo=!0;var n=be;try{for(Di(t),Ge=it(vt);Ge!==null&&(!(Ge.expirationTime>t)||e&&!Qu());){var r=Ge.callback;if(typeof r=="function"){Ge.callback=null,be=Ge.priorityLevel;var o=r(Ge.expirationTime<=t);t=Z.unstable_now(),typeof o=="function"?Ge.callback=o:Ge===it(vt)&&Wo(vt),Di(t)}else Wo(vt);Ge=it(vt)}if(Ge!==null)var a=!0;else{var i=it(Ht);i!==null&&Mi(Ti,i.startTime-t),a=!1}return a}finally{Ge=null,be=n,Vo=!1}}var Yo=!1,Bo=null,Fr=-1,Vu=5,Yu=-1;function Qu(){return!(Z.unstable_now()-Yu<Vu)}function Ri(){if(Bo!==null){var e=Z.unstable_now();Yu=e;var t=!0;try{t=Bo(!0,e)}finally{t?Tr():(Yo=!1,Bo=null)}}else Yo=!1}var Tr;typeof Uu=="function"?Tr=function(){Uu(Ri)}:typeof MessageChannel<"u"?(Pi=new MessageChannel,Hu=Pi.port2,Pi.port1.onmessage=Ri,Tr=function(){Hu.postMessage(null)}):Tr=function(){Bu(Ri,0)};var Pi,Hu;function Fi(e){Bo=e,Yo||(Yo=!0,Tr())}function Mi(e,t){Fr=Bu(function(){e(Z.unstable_now())},t)}Z.unstable_IdlePriority=5;Z.unstable_ImmediatePriority=1;Z.unstable_LowPriority=4;Z.unstable_NormalPriority=3;Z.unstable_Profiling=null;Z.unstable_UserBlockingPriority=2;Z.unstable_cancelCallback=function(e){e.callback=null};Z.unstable_continueExecution=function(){gn||Vo||(gn=!0,Fi(Oi))};Z.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Vu=0<e?Math.floor(1e3/e):5};Z.unstable_getCurrentPriorityLevel=function(){return be};Z.unstable_getFirstCallbackNode=function(){return it(vt)};Z.unstable_next=function(e){switch(be){case 1:case 2:case 3:var t=3;break;default:t=be}var n=be;be=t;try{return e()}finally{be=n}};Z.unstable_pauseExecution=function(){};Z.unstable_requestPaint=function(){};Z.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=be;be=e;try{return t()}finally{be=n}};Z.unstable_scheduleCallback=function(e,t,n){var r=Z.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:Pm++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Li(Ht,e),it(vt)===null&&e===it(Ht)&&(Or?(Wu(Fr),Fr=-1):Or=!0,Mi(Ti,n-r))):(e.sortIndex=o,Li(vt,e),gn||Vo||(gn=!0,Fi(Oi))),e};Z.unstable_shouldYield=Qu;Z.unstable_wrapCallback=function(e){var t=be;return function(){var n=be;be=t;try{return e.apply(this,arguments)}finally{be=n}}}});var Gu=yn((lg,Ju)=>{"use strict";Ju.exports=Ku()});var tp=yn(Ye=>{"use strict";var Lm=j(),We=Gu();function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rd=new Set,no={};function Dn(e,t){dr(e,t),dr(e+"Capture",t)}function dr(e,t){for(no[e]=t,e=0;e<t.length;e++)rd.add(t[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,Dm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xu={},Zu={};function Tm(e){return ol.call(Zu,e)?!0:ol.call(Xu,e)?!1:Dm.test(e)?Zu[e]=!0:(Xu[e]=!0,!1)}function Om(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fm(e,t,n,r){if(t===null||typeof t>"u"||Om(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gl=/[\-:]([a-z])/g;function Xl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gl,Xl);Ee[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gl,Xl);Ee[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gl,Xl);Ee[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zl(e,t,n,r){var o=Ee.hasOwnProperty(t)?Ee[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fm(t,n,o,r)&&(n=null),r||o===null?Tm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=Lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qo=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),ql=Symbol.for("react.strict_mode"),al=Symbol.for("react.profiler"),od=Symbol.for("react.provider"),ad=Symbol.for("react.context"),es=Symbol.for("react.forward_ref"),il=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),ts=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),id=Symbol.for("react.offscreen"),qu=Symbol.iterator;function Mr(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,zi;function Br(e){if(zi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zi=t&&t[1]||""}return`
`+zi+e}var Ii=!1;function ji(e,t){if(!e||Ii)return"";Ii=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==a[l]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{Ii=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Br(e):""}function Mm(e){switch(e.tag){case 5:return Br(e.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return e=ji(e.type,!1),e;case 11:return e=ji(e.type.render,!1),e;case 1:return e=ji(e.type,!0),e;default:return""}}function sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Qn:return"Portal";case al:return"Profiler";case ql:return"StrictMode";case il:return"Suspense";case ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ad:return(e.displayName||"Context")+".Consumer";case od:return(e._context.displayName||"Context")+".Provider";case es:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ts:return t=e.displayName||null,t!==null?t:sl(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return sl(e(t))}catch{}}return null}function zm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sl(t);case 8:return t===ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ld(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Im(e){var t=ld(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ko(e){e._valueTracker||(e._valueTracker=Im(e))}function sd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ld(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ea(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ul(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ec(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ud(e,t){t=t.checked,t!=null&&Zl(e,"checked",t,!1)}function cl(e,t){ud(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&dl(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dl(e,t,n){(t!=="number"||Ea(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wr=Array.isArray;function ar(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Wr(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function cd(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jo,fd=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jm=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(e){jm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qr[t]=Qr[e]})});function pd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qr.hasOwnProperty(e)&&Qr[e]?(""+t).trim():t+"px"}function md(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=pd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Am=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(Am[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function ns(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,ir=null,lr=null;function oc(e){if(e=Eo(e)){if(typeof yl!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Ga(t),yl(e.stateNode,e.type,t))}}function hd(e){ir?lr?lr.push(e):lr=[e]:ir=e}function vd(){if(ir){var e=ir,t=lr;if(lr=ir=null,oc(e),t)for(e=0;e<t.length;e++)oc(t[e])}}function yd(e,t){return e(t)}function gd(){}var Ai=!1;function wd(e,t,n){if(Ai)return e(t,n);Ai=!0;try{return yd(e,t,n)}finally{Ai=!1,(ir!==null||lr!==null)&&(gd(),vd())}}function oo(e,t){var n=e.stateNode;if(n===null)return null;var r=Ga(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var gl=!1;if(Tt)try{Vn={},Object.defineProperty(Vn,"passive",{get:function(){gl=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{gl=!1}var Vn;function $m(e,t,n,r,o,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Kr=!1,ba=null,ka=!1,wl=null,Um={onError:function(e){Kr=!0,ba=e}};function Hm(e,t,n,r,o,a,i,l,s){Kr=!1,ba=null,$m.apply(Um,arguments)}function Bm(e,t,n,r,o,a,i,l,s){if(Hm.apply(this,arguments),Kr){if(Kr){var u=ba;Kr=!1,ba=null}else throw Error(b(198));ka||(ka=!0,wl=u)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ac(e){if(Tn(e)!==e)throw Error(b(188))}function Wm(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return ac(o),e;if(a===r)return ac(o),t;a=a.sibling}throw Error(b(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Sd(e){return e=Wm(e),e!==null?Ed(e):null}function Ed(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ed(e);if(t!==null)return t;e=e.sibling}return null}var bd=We.unstable_scheduleCallback,ic=We.unstable_cancelCallback,Vm=We.unstable_shouldYield,Ym=We.unstable_requestPaint,de=We.unstable_now,Qm=We.unstable_getCurrentPriorityLevel,rs=We.unstable_ImmediatePriority,kd=We.unstable_UserBlockingPriority,Ca=We.unstable_NormalPriority,Km=We.unstable_LowPriority,Cd=We.unstable_IdlePriority,Ya=null,xt=null;function Jm(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Ya,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Zm,Gm=Math.log,Xm=Math.LN2;function Zm(e){return e>>>=0,e===0?32:31-(Gm(e)/Xm|0)|0}var Go=64,Xo=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _a(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=Vr(l):(a&=i,a!==0&&(r=Vr(a)))}else i=n&~o,i!==0?r=Vr(i):a!==0&&(r=Vr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),o=1<<n,r|=e[n],t&=~o;return r}function qm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-dt(a),l=1<<i,s=o[i];s===-1?((l&n)===0||(l&r)!==0)&&(o[i]=qm(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _d(){var e=Go;return Go<<=1,(Go&4194240)===0&&(Go=64),e}function $i(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function th(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-dt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function os(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function Nd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rd,as,Pd,Ld,Dd,Sl=!1,Zo=[],Gt=null,Xt=null,Zt=null,ao=new Map,io=new Map,Yt=[],nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lc(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":ao.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(t.pointerId)}}function zr(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Eo(t),t!==null&&as(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rh(e,t,n,r,o){switch(t){case"focusin":return Gt=zr(Gt,e,t,n,r,o),!0;case"dragenter":return Xt=zr(Xt,e,t,n,r,o),!0;case"mouseover":return Zt=zr(Zt,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return ao.set(a,zr(ao.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,io.set(a,zr(io.get(a)||null,e,t,n,r,o)),!0}return!1}function Td(e){var t=Sn(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=xd(n),t!==null){e.blockedOn=t,Dd(e.priority,function(){Pd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return t=Eo(n),t!==null&&as(t),e.blockedOn=n,!1;t.shift()}return!0}function sc(e,t,n){fa(e)&&n.delete(t)}function oh(){Sl=!1,Gt!==null&&fa(Gt)&&(Gt=null),Xt!==null&&fa(Xt)&&(Xt=null),Zt!==null&&fa(Zt)&&(Zt=null),ao.forEach(sc),io.forEach(sc)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,oh)))}function lo(e){function t(o){return Ir(o,e)}if(0<Zo.length){Ir(Zo[0],e);for(var n=1;n<Zo.length;n++){var r=Zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&Ir(Gt,e),Xt!==null&&Ir(Xt,e),Zt!==null&&Ir(Zt,e),ao.forEach(t),io.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Td(n),n.blockedOn===null&&Yt.shift()}var sr=zt.ReactCurrentBatchConfig,Na=!0;function ah(e,t,n,r){var o=G,a=sr.transition;sr.transition=null;try{G=1,is(e,t,n,r)}finally{G=o,sr.transition=a}}function ih(e,t,n,r){var o=G,a=sr.transition;sr.transition=null;try{G=4,is(e,t,n,r)}finally{G=o,sr.transition=a}}function is(e,t,n,r){if(Na){var o=El(e,t,n,r);if(o===null)Qi(e,t,r,Ra,n),lc(e,r);else if(rh(o,e,t,n,r))r.stopPropagation();else if(lc(e,r),t&4&&-1<nh.indexOf(e)){for(;o!==null;){var a=Eo(o);if(a!==null&&Rd(a),a=El(e,t,n,r),a===null&&Qi(e,t,r,Ra,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Qi(e,t,r,null,n)}}var Ra=null;function El(e,t,n,r){if(Ra=null,e=ns(r),e=Sn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ra=e,null}function Od(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qm()){case rs:return 1;case kd:return 4;case Ca:case Km:return 16;case Cd:return 536870912;default:return 16}default:return 16}}var Kt=null,ls=null,pa=null;function Fd(){if(pa)return pa;var e,t=ls,n=t.length,r,o="value"in Kt?Kt.value:Kt.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return pa=o.slice(e,1<r?1-r:void 0)}function ma(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function uc(){return!1}function Ve(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?qo:uc,this.isPropagationStopped=uc,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ss=Ve(gr),So=se({},gr,{view:0,detail:0}),lh=Ve(So),Ui,Hi,jr,Qa=se({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Ui=e.screenX-jr.screenX,Hi=e.screenY-jr.screenY):Hi=Ui=0,jr=e),Ui)},movementY:function(e){return"movementY"in e?e.movementY:Hi}}),cc=Ve(Qa),sh=se({},Qa,{dataTransfer:0}),uh=Ve(sh),ch=se({},So,{relatedTarget:0}),Bi=Ve(ch),dh=se({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),fh=Ve(dh),ph=se({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mh=Ve(ph),hh=se({},gr,{data:0}),dc=Ve(hh),vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gh[e])?!!t[e]:!1}function us(){return wh}var xh=se({},So,{key:function(e){if(e.key){var t=vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sh=Ve(xh),Eh=se({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fc=Ve(Eh),bh=se({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),kh=Ve(bh),Ch=se({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_h=Ve(Ch),Nh=se({},Qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rh=Ve(Nh),Ph=[9,13,27,32],cs=Tt&&"CompositionEvent"in window,Jr=null;Tt&&"documentMode"in document&&(Jr=document.documentMode);var Lh=Tt&&"TextEvent"in window&&!Jr,Md=Tt&&(!cs||Jr&&8<Jr&&11>=Jr),pc=" ",mc=!1;function zd(e,t){switch(e){case"keyup":return Ph.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Dh(e,t){switch(e){case"compositionend":return Id(t);case"keypress":return t.which!==32?null:(mc=!0,pc);case"textInput":return e=t.data,e===pc&&mc?null:e;default:return null}}function Th(e,t){if(Jn)return e==="compositionend"||!cs&&zd(e,t)?(e=Fd(),pa=ls=Kt=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Md&&t.locale!=="ko"?null:t.data;default:return null}}var Oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Oh[e.type]:t==="textarea"}function jd(e,t,n,r){hd(r),t=Pa(t,"onChange"),0<t.length&&(n=new ss("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gr=null,so=null;function Fh(e){Jd(e,0)}function Ka(e){var t=Zn(e);if(sd(t))return e}function Mh(e,t){if(e==="change")return t}var Ad=!1;Tt&&(Tt?(ta="oninput"in document,ta||(Wi=document.createElement("div"),Wi.setAttribute("oninput","return;"),ta=typeof Wi.oninput=="function"),ea=ta):ea=!1,Ad=ea&&(!document.documentMode||9<document.documentMode));var ea,ta,Wi;function vc(){Gr&&(Gr.detachEvent("onpropertychange",$d),so=Gr=null)}function $d(e){if(e.propertyName==="value"&&Ka(so)){var t=[];jd(t,so,e,ns(e)),wd(Fh,t)}}function zh(e,t,n){e==="focusin"?(vc(),Gr=t,so=n,Gr.attachEvent("onpropertychange",$d)):e==="focusout"&&vc()}function Ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ka(so)}function jh(e,t){if(e==="click")return Ka(t)}function Ah(e,t){if(e==="input"||e==="change")return Ka(t)}function $h(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:$h;function uo(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ol.call(t,o)||!pt(e[o],t[o]))return!1}return!0}function yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gc(e,t){var n=yc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yc(n)}}function Ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hd(){for(var e=window,t=Ea();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ea(e.document)}return t}function ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uh(e){var t=Hd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ud(n.ownerDocument.documentElement,n)){if(r!==null&&ds(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=gc(n,a);var i=gc(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hh=Tt&&"documentMode"in document&&11>=document.documentMode,Gn=null,bl=null,Xr=null,kl=!1;function wc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kl||Gn==null||Gn!==Ea(r)||(r=Gn,"selectionStart"in r&&ds(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&uo(Xr,r)||(Xr=r,r=Pa(bl,"onSelect"),0<r.length&&(t=new ss("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function na(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Vi={},Bd={};Tt&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Ja(e){if(Vi[e])return Vi[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bd)return Vi[e]=t[n];return e}var Wd=Ja("animationend"),Vd=Ja("animationiteration"),Yd=Ja("animationstart"),Qd=Ja("transitionend"),Kd=new Map,xc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){Kd.set(e,t),Dn(t,[e])}for(ra=0;ra<xc.length;ra++)oa=xc[ra],Sc=oa.toLowerCase(),Ec=oa[0].toUpperCase()+oa.slice(1),ln(Sc,"on"+Ec);var oa,Sc,Ec,ra;ln(Wd,"onAnimationEnd");ln(Vd,"onAnimationIteration");ln(Yd,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(Qd,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function bc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bm(r,t,void 0,e),e.currentTarget=null}function Jd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;bc(o,l,u),a=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;bc(o,l,u),a=s}}}if(ka)throw e=wl,ka=!1,wl=null,e}function te(e,t){var n=t[Pl];n===void 0&&(n=t[Pl]=new Set);var r=e+"__bubble";n.has(r)||(Gd(t,e,2,!1),n.add(r))}function Yi(e,t,n){var r=0;t&&(r|=4),Gd(n,e,r,t)}var aa="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[aa]){e[aa]=!0,rd.forEach(function(n){n!=="selectionchange"&&(Bh.has(n)||Yi(n,!1,e),Yi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[aa]||(t[aa]=!0,Yi("selectionchange",!1,t))}}function Gd(e,t,n,r){switch(Od(t)){case 1:var o=ah;break;case 4:o=ih;break;default:o=is}n=o.bind(null,t,n,e),o=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Qi(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;l!==null;){if(i=Sn(l),i===null)return;if(s=i.tag,s===5||s===6){r=a=i;continue e}l=l.parentNode}}r=r.return}wd(function(){var u=a,f=ns(n),d=[];e:{var m=Kd.get(e);if(m!==void 0){var v=ss,g=e;switch(e){case"keypress":if(ma(n)===0)break e;case"keydown":case"keyup":v=Sh;break;case"focusin":g="focus",v=Bi;break;case"focusout":g="blur",v=Bi;break;case"beforeblur":case"afterblur":v=Bi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=kh;break;case Wd:case Vd:case Yd:v=fh;break;case Qd:v=_h;break;case"scroll":v=lh;break;case"wheel":v=Rh;break;case"copy":case"cut":case"paste":v=mh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=fc}var y=(t&4)!==0,S=!y&&e==="scroll",p=y?m!==null?m+"Capture":null:m;y=[];for(var c=u,h;c!==null;){h=c;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,p!==null&&(x=oo(c,p),x!=null&&y.push(fo(c,x,h)))),S)break;c=c.return}0<y.length&&(m=new v(m,g,null,n,f),d.push({event:m,listeners:y}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==vl&&(g=n.relatedTarget||n.fromElement)&&(Sn(g)||g[Ot]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Sn(g):null,g!==null&&(S=Tn(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(y=cc,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=fc,x="onPointerLeave",p="onPointerEnter",c="pointer"),S=v==null?m:Zn(v),h=g==null?m:Zn(g),m=new y(x,c+"leave",v,n,f),m.target=S,m.relatedTarget=h,x=null,Sn(f)===u&&(y=new y(p,c+"enter",g,n,f),y.target=h,y.relatedTarget=S,x=y),S=x,v&&g)t:{for(y=v,p=g,c=0,h=y;h;h=Yn(h))c++;for(h=0,x=p;x;x=Yn(x))h++;for(;0<c-h;)y=Yn(y),c--;for(;0<h-c;)p=Yn(p),h--;for(;c--;){if(y===p||p!==null&&y===p.alternate)break t;y=Yn(y),p=Yn(p)}y=null}else y=null;v!==null&&kc(d,m,v,y,!1),g!==null&&S!==null&&kc(d,S,g,y,!0)}}e:{if(m=u?Zn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var w=Mh;else if(hc(m))if(Ad)w=Ah;else{w=Ih;var k=zh}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=jh);if(w&&(w=w(e,u))){jd(d,w,n,f);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&dl(m,"number",m.value)}switch(k=u?Zn(u):window,e){case"focusin":(hc(k)||k.contentEditable==="true")&&(Gn=k,bl=u,Xr=null);break;case"focusout":Xr=bl=Gn=null;break;case"mousedown":kl=!0;break;case"contextmenu":case"mouseup":case"dragend":kl=!1,wc(d,n,f);break;case"selectionchange":if(Hh)break;case"keydown":case"keyup":wc(d,n,f)}var C;if(cs)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Jn?zd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Md&&n.locale!=="ko"&&(Jn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Jn&&(C=Fd()):(Kt=f,ls="value"in Kt?Kt.value:Kt.textContent,Jn=!0)),k=Pa(u,P),0<k.length&&(P=new dc(P,e,null,n,f),d.push({event:P,listeners:k}),C?P.data=C:(C=Id(n),C!==null&&(P.data=C)))),(C=Lh?Dh(e,n):Th(e,n))&&(u=Pa(u,"onBeforeInput"),0<u.length&&(f=new dc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=C))}Jd(d,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=oo(e,n),a!=null&&r.unshift(fo(e,a,o)),a=oo(e,t),a!=null&&r.push(fo(e,a,o))),e=e.return}return r}function Yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kc(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=oo(n,a),s!=null&&i.unshift(fo(n,s,l))):o||(s=oo(n,a),s!=null&&i.push(fo(n,s,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Wh=/\r\n?/g,Vh=/\u0000|\uFFFD/g;function Cc(e){return(typeof e=="string"?e:""+e).replace(Wh,`
`).replace(Vh,"")}function ia(e,t,n){if(t=Cc(t),Cc(e)!==t&&n)throw Error(b(425))}function La(){}var Cl=null,_l=null;function Nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,Yh=typeof clearTimeout=="function"?clearTimeout:void 0,_c=typeof Promise=="function"?Promise:void 0,Qh=typeof queueMicrotask=="function"?queueMicrotask:typeof _c<"u"?function(e){return _c.resolve(null).then(e).catch(Kh)}:Rl;function Kh(e){setTimeout(function(){throw e})}function Ki(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),lo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);lo(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),wt="__reactFiber$"+wr,po="__reactProps$"+wr,Ot="__reactContainer$"+wr,Pl="__reactEvents$"+wr,Jh="__reactListeners$"+wr,Gh="__reactHandles$"+wr;function Sn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nc(e);e!==null;){if(n=e[wt])return n;e=Nc(e)}return t}e=n,n=e.parentNode}return null}function Eo(e){return e=e[wt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Ga(e){return e[po]||null}var Ll=[],qn=-1;function sn(e){return{current:e}}function ne(e){0>qn||(e.current=Ll[qn],Ll[qn]=null,qn--)}function q(e,t){qn++,Ll[qn]=e.current,e.current=t}var an={},Ne=sn(an),je=sn(!1),_n=an;function fr(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ae(e){return e=e.childContextTypes,e!=null}function Da(){ne(je),ne(Ne)}function Rc(e,t,n){if(Ne.current!==an)throw Error(b(168));q(Ne,t),q(je,n)}function Xd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(b(108,zm(e)||"Unknown",o));return se({},n,r)}function Ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,_n=Ne.current,q(Ne,e),q(je,je.current),!0}function Pc(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=Xd(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,ne(je),ne(Ne),q(Ne,e)):ne(je),q(je,n)}var Rt=null,Xa=!1,Ji=!1;function Zd(e){Rt===null?Rt=[e]:Rt.push(e)}function Xh(e){Xa=!0,Zd(e)}function un(){if(!Ji&&Rt!==null){Ji=!0;var e=0,t=G;try{var n=Rt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,Xa=!1}catch(o){throw Rt!==null&&(Rt=Rt.slice(e+1)),bd(rs,un),o}finally{G=t,Ji=!1}}return null}var er=[],tr=0,Oa=null,Fa=0,Xe=[],Ze=0,Nn=null,Pt=1,Lt="";function wn(e,t){er[tr++]=Fa,er[tr++]=Oa,Oa=e,Fa=t}function qd(e,t,n){Xe[Ze++]=Pt,Xe[Ze++]=Lt,Xe[Ze++]=Nn,Nn=e;var r=Pt;e=Lt;var o=32-dt(r)-1;r&=~(1<<o),n+=1;var a=32-dt(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Pt=1<<32-dt(t)+o|n<<o|r,Lt=a+e}else Pt=1<<a|n<<o|r,Lt=e}function fs(e){e.return!==null&&(wn(e,1),qd(e,1,0))}function ps(e){for(;e===Oa;)Oa=er[--tr],er[tr]=null,Fa=er[--tr],er[tr]=null;for(;e===Nn;)Nn=Xe[--Ze],Xe[Ze]=null,Lt=Xe[--Ze],Xe[Ze]=null,Pt=Xe[--Ze],Xe[Ze]=null}var Be=null,He=null,oe=!1,ct=null;function ef(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,He=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Pt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,He=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(oe){var t=He;if(t){var n=t;if(!Lc(e,t)){if(Dl(e))throw Error(b(418));t=qt(n.nextSibling);var r=Be;t&&Lc(e,t)?ef(r,n):(e.flags=e.flags&-4097|2,oe=!1,Be=e)}}else{if(Dl(e))throw Error(b(418));e.flags=e.flags&-4097|2,oe=!1,Be=e}}}function Dc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function la(e){if(e!==Be)return!1;if(!oe)return Dc(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nl(e.type,e.memoizedProps)),t&&(t=He)){if(Dl(e))throw tf(),Error(b(418));for(;t;)ef(e,t),t=qt(t.nextSibling)}if(Dc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Be?qt(e.stateNode.nextSibling):null;return!0}function tf(){for(var e=He;e;)e=qt(e.nextSibling)}function pr(){He=Be=null,oe=!1}function ms(e){ct===null?ct=[e]:ct.push(e)}var Zh=zt.ReactCurrentBatchConfig;function Ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var l=o.refs;i===null?delete l[a]:l[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function sa(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tc(e){var t=e._init;return t(e._payload)}function nf(e){function t(p,c){if(e){var h=p.deletions;h===null?(p.deletions=[c],p.flags|=16):h.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=rn(p,c),p.index=0,p.sibling=null,p}function a(p,c,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<c?(p.flags|=2,c):h):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,c,h,x){return c===null||c.tag!==6?(c=nl(h,p.mode,x),c.return=p,c):(c=o(c,h),c.return=p,c)}function s(p,c,h,x){var w=h.type;return w===Kn?f(p,c,h.props.children,x,h.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Wt&&Tc(w)===c.type)?(x=o(c,h.props),x.ref=Ar(p,c,h),x.return=p,x):(x=Sa(h.type,h.key,h.props,null,p.mode,x),x.ref=Ar(p,c,h),x.return=p,x)}function u(p,c,h,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=rl(h,p.mode,x),c.return=p,c):(c=o(c,h.children||[]),c.return=p,c)}function f(p,c,h,x,w){return c===null||c.tag!==7?(c=Cn(h,p.mode,x,w),c.return=p,c):(c=o(c,h),c.return=p,c)}function d(p,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=nl(""+c,p.mode,h),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qo:return h=Sa(c.type,c.key,c.props,null,p.mode,h),h.ref=Ar(p,null,c),h.return=p,h;case Qn:return c=rl(c,p.mode,h),c.return=p,c;case Wt:var x=c._init;return d(p,x(c._payload),h)}if(Wr(c)||Mr(c))return c=Cn(c,p.mode,h,null),c.return=p,c;sa(p,c)}return null}function m(p,c,h,x){var w=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return w!==null?null:l(p,c,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qo:return h.key===w?s(p,c,h,x):null;case Qn:return h.key===w?u(p,c,h,x):null;case Wt:return w=h._init,m(p,c,w(h._payload),x)}if(Wr(h)||Mr(h))return w!==null?null:f(p,c,h,x,null);sa(p,h)}return null}function v(p,c,h,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(h)||null,l(c,p,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qo:return p=p.get(x.key===null?h:x.key)||null,s(c,p,x,w);case Qn:return p=p.get(x.key===null?h:x.key)||null,u(c,p,x,w);case Wt:var k=x._init;return v(p,c,h,k(x._payload),w)}if(Wr(x)||Mr(x))return p=p.get(h)||null,f(c,p,x,w,null);sa(c,x)}return null}function g(p,c,h,x){for(var w=null,k=null,C=c,P=c=0,V=null;C!==null&&P<h.length;P++){C.index>P?(V=C,C=null):V=C.sibling;var z=m(p,C,h[P],x);if(z===null){C===null&&(C=V);break}e&&C&&z.alternate===null&&t(p,C),c=a(z,c,P),k===null?w=z:k.sibling=z,k=z,C=V}if(P===h.length)return n(p,C),oe&&wn(p,P),w;if(C===null){for(;P<h.length;P++)C=d(p,h[P],x),C!==null&&(c=a(C,c,P),k===null?w=C:k.sibling=C,k=C);return oe&&wn(p,P),w}for(C=r(p,C);P<h.length;P++)V=v(C,p,P,h[P],x),V!==null&&(e&&V.alternate!==null&&C.delete(V.key===null?P:V.key),c=a(V,c,P),k===null?w=V:k.sibling=V,k=V);return e&&C.forEach(function(Pe){return t(p,Pe)}),oe&&wn(p,P),w}function y(p,c,h,x){var w=Mr(h);if(typeof w!="function")throw Error(b(150));if(h=w.call(h),h==null)throw Error(b(151));for(var k=w=null,C=c,P=c=0,V=null,z=h.next();C!==null&&!z.done;P++,z=h.next()){C.index>P?(V=C,C=null):V=C.sibling;var Pe=m(p,C,z.value,x);if(Pe===null){C===null&&(C=V);break}e&&C&&Pe.alternate===null&&t(p,C),c=a(Pe,c,P),k===null?w=Pe:k.sibling=Pe,k=Pe,C=V}if(z.done)return n(p,C),oe&&wn(p,P),w;if(C===null){for(;!z.done;P++,z=h.next())z=d(p,z.value,x),z!==null&&(c=a(z,c,P),k===null?w=z:k.sibling=z,k=z);return oe&&wn(p,P),w}for(C=r(p,C);!z.done;P++,z=h.next())z=v(C,p,P,z.value,x),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?P:z.key),c=a(z,c,P),k===null?w=z:k.sibling=z,k=z);return e&&C.forEach(function(vn){return t(p,vn)}),oe&&wn(p,P),w}function S(p,c,h,x){if(typeof h=="object"&&h!==null&&h.type===Kn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Qo:e:{for(var w=h.key,k=c;k!==null;){if(k.key===w){if(w=h.type,w===Kn){if(k.tag===7){n(p,k.sibling),c=o(k,h.props.children),c.return=p,p=c;break e}}else if(k.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Wt&&Tc(w)===k.type){n(p,k.sibling),c=o(k,h.props),c.ref=Ar(p,k,h),c.return=p,p=c;break e}n(p,k);break}else t(p,k);k=k.sibling}h.type===Kn?(c=Cn(h.props.children,p.mode,x,h.key),c.return=p,p=c):(x=Sa(h.type,h.key,h.props,null,p.mode,x),x.ref=Ar(p,c,h),x.return=p,p=x)}return i(p);case Qn:e:{for(k=h.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(p,c.sibling),c=o(c,h.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=rl(h,p.mode,x),c.return=p,p=c}return i(p);case Wt:return k=h._init,S(p,c,k(h._payload),x)}if(Wr(h))return g(p,c,h,x);if(Mr(h))return y(p,c,h,x);sa(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,h),c.return=p,p=c):(n(p,c),c=nl(h,p.mode,x),c.return=p,p=c),i(p)):n(p,c)}return S}var mr=nf(!0),rf=nf(!1),Ma=sn(null),za=null,nr=null,hs=null;function vs(){hs=nr=za=null}function ys(e){var t=Ma.current;ne(Ma),e._currentValue=t}function Ol(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ur(e,t){za=e,hs=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ie=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(hs!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(za===null)throw Error(b(308));nr=e,za.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var En=null;function gs(e){En===null?En=[e]:En.push(e)}function of(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,gs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function ws(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function af(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Q&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ft(e,n)}return o=r.interleaved,o===null?(t.next=t,gs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ft(e,n)}function ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}function Oc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ia(e,t,n,r){var o=e.updateQueue;Vt=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?a=u:i.next=u,i=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==i&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(a!==null){var d=o.baseState;i=0,f=u=s=null,l=a;do{var m=l.lane,v=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,y=l;switch(m=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(v,d,m);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,m=typeof g=="function"?g.call(v,d,m):g,m==null)break e;d=se({},d,m);break e;case 2:Vt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,s=d):f=f.next=v,i|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(f===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Pn|=i,e.lanes=i,e.memoizedState=d}}function Fc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(b(191,o));o.call(r)}}}var bo={},St=sn(bo),mo=sn(bo),ho=sn(bo);function bn(e){if(e===bo)throw Error(b(174));return e}function xs(e,t){switch(q(ho,t),q(mo,e),q(St,bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pl(t,e)}ne(St),q(St,t)}function hr(){ne(St),ne(mo),ne(ho)}function lf(e){bn(ho.current);var t=bn(St.current),n=pl(t,e.type);t!==n&&(q(mo,e),q(St,n))}function Ss(e){mo.current===e&&(ne(St),ne(mo))}var ie=sn(0);function ja(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gi=[];function Es(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var va=zt.ReactCurrentDispatcher,Xi=zt.ReactCurrentBatchConfig,Rn=0,le=null,me=null,ve=null,Aa=!1,Zr=!1,vo=0,qh=0;function ke(){throw Error(b(321))}function bs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function ks(e,t,n,r,o,a){if(Rn=a,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,va.current=e===null||e.memoizedState===null?rv:ov,e=n(r,o),Zr){a=0;do{if(Zr=!1,vo=0,25<=a)throw Error(b(301));a+=1,ve=me=null,t.updateQueue=null,va.current=av,e=n(r,o)}while(Zr)}if(va.current=$a,t=me!==null&&me.next!==null,Rn=0,ve=me=le=null,Aa=!1,t)throw Error(b(300));return e}function Cs(){var e=vo!==0;return vo=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?le.memoizedState=ve=e:ve=ve.next=e,ve}function nt(){if(me===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ve===null?le.memoizedState:ve.next;if(t!==null)ve=t,me=e;else{if(e===null)throw Error(b(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ve===null?le.memoizedState=ve=e:ve=ve.next=e}return ve}function yo(e,t){return typeof t=="function"?t(e):t}function Zi(e){var t=nt(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=me,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=i=null,s=null,u=a;do{var f=u.lane;if((Rn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,i=r):s=s.next=d,le.lanes|=f,Pn|=f}u=u.next}while(u!==null&&u!==a);s===null?i=r:s.next=l,pt(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,le.lanes|=a,Pn|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qi(e){var t=nt(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);pt(a,t.memoizedState)||(Ie=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function sf(){}function uf(e,t){var n=le,r=nt(),o=t(),a=!pt(r.memoizedState,o);if(a&&(r.memoizedState=o,Ie=!0),r=r.queue,_s(ff.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,go(9,df.bind(null,n,r,o,t),void 0,null),ye===null)throw Error(b(349));(Rn&30)!==0||cf(n,t,o)}return o}function cf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function df(e,t,n,r){t.value=n,t.getSnapshot=r,pf(t)&&mf(e)}function ff(e,t,n){return n(function(){pf(t)&&mf(e)})}function pf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function mf(e){var t=Ft(e,1);t!==null&&ft(t,e,1,-1)}function Mc(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:e},t.queue=e,e=e.dispatch=nv.bind(null,le,e),[t.memoizedState,e]}function go(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hf(){return nt().memoizedState}function ya(e,t,n,r){var o=gt();le.flags|=e,o.memoizedState=go(1|t,n,void 0,r===void 0?null:r)}function Za(e,t,n,r){var o=nt();r=r===void 0?null:r;var a=void 0;if(me!==null){var i=me.memoizedState;if(a=i.destroy,r!==null&&bs(r,i.deps)){o.memoizedState=go(t,n,a,r);return}}le.flags|=e,o.memoizedState=go(1|t,n,a,r)}function zc(e,t){return ya(8390656,8,e,t)}function _s(e,t){return Za(2048,8,e,t)}function vf(e,t){return Za(4,2,e,t)}function yf(e,t){return Za(4,4,e,t)}function gf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wf(e,t,n){return n=n!=null?n.concat([e]):null,Za(4,4,gf.bind(null,t,e),n)}function Ns(){}function xf(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sf(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ef(e,t,n){return(Rn&21)===0?(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n):(pt(n,t)||(n=_d(),le.lanes|=n,Pn|=n,e.baseState=!0),t)}function ev(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Xi.transition;Xi.transition={};try{e(!1),t()}finally{G=n,Xi.transition=r}}function bf(){return nt().memoizedState}function tv(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kf(e))Cf(t,n);else if(n=of(e,t,n,r),n!==null){var o=Te();ft(n,e,r,o),_f(n,t,r)}}function nv(e,t,n){var r=nn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kf(e))Cf(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,pt(l,i)){var s=t.interleaved;s===null?(o.next=o,gs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}n=of(e,t,o,r),n!==null&&(o=Te(),ft(n,e,r,o),_f(n,t,r))}}function kf(e){var t=e.alternate;return e===le||t!==null&&t===le}function Cf(e,t){Zr=Aa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _f(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}var $a={readContext:tt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},rv={readContext:tt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:zc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ya(4194308,4,gf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ya(4194308,4,e,t)},useInsertionEffect:function(e,t){return ya(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tv.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Mc,useDebugValue:Ns,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Mc(!1),t=e[0];return e=ev.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,o=gt();if(oe){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),ye===null)throw Error(b(349));(Rn&30)!==0||cf(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,zc(ff.bind(null,r,a,e),[e]),r.flags|=2048,go(9,df.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=gt(),t=ye.identifierPrefix;if(oe){var n=Lt,r=Pt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ov={readContext:tt,useCallback:xf,useContext:tt,useEffect:_s,useImperativeHandle:wf,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:Sf,useReducer:Zi,useRef:hf,useState:function(){return Zi(yo)},useDebugValue:Ns,useDeferredValue:function(e){var t=nt();return Ef(t,me.memoizedState,e)},useTransition:function(){var e=Zi(yo)[0],t=nt().memoizedState;return[e,t]},useMutableSource:sf,useSyncExternalStore:uf,useId:bf,unstable_isNewReconciler:!1},av={readContext:tt,useCallback:xf,useContext:tt,useEffect:_s,useImperativeHandle:wf,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:Sf,useReducer:qi,useRef:hf,useState:function(){return qi(yo)},useDebugValue:Ns,useDeferredValue:function(e){var t=nt();return me===null?t.memoizedState=e:Ef(t,me.memoizedState,e)},useTransition:function(){var e=qi(yo)[0],t=nt().memoizedState;return[e,t]},useMutableSource:sf,useSyncExternalStore:uf,useId:bf,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qa={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),o=nn(e),a=Dt(r,o);a.payload=t,n!=null&&(a.callback=n),t=en(e,a,o),t!==null&&(ft(t,e,o,r),ha(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),o=nn(e),a=Dt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=en(e,a,o),t!==null&&(ft(t,e,o,r),ha(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=nn(e),o=Dt(n,r);o.tag=2,t!=null&&(o.callback=t),t=en(e,o,r),t!==null&&(ft(t,e,r,n),ha(t,e,r))}};function Ic(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!uo(n,r)||!uo(o,a):!0}function Nf(e,t,n){var r=!1,o=an,a=t.contextType;return typeof a=="object"&&a!==null?a=tt(a):(o=Ae(t)?_n:Ne.current,r=t.contextTypes,a=(r=r!=null)?fr(e,o):an),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function jc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qa.enqueueReplaceState(t,t.state,null)}function Ml(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ws(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=tt(a):(a=Ae(t)?_n:Ne.current,o.context=fr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Fl(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&qa.enqueueReplaceState(o,o.state,null),Ia(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vr(e,t){try{var n="",r=t;do n+=Mm(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function el(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var iv=typeof WeakMap=="function"?WeakMap:Map;function Rf(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ha||(Ha=!0,Yl=r),zl(e,t)},n}function Pf(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){zl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){zl(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ac(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new iv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=xv.bind(null,e,t,n),t.then(e,e))}function $c(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var lv=zt.ReactCurrentOwner,Ie=!1;function De(e,t,n,r){t.child=e===null?rf(t,null,n,r):mr(t,e.child,n,r)}function Hc(e,t,n,r,o){n=n.render;var a=t.ref;return ur(t,o),r=ks(e,t,n,r,a,o),n=Cs(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(oe&&n&&fs(t),t.flags|=1,De(e,t,r,o),t.child)}function Bc(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Ms(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Lf(e,t,a,r,o)):(e=Sa(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(i,r)&&e.ref===t.ref)return Mt(e,t,o)}return t.flags|=1,e=rn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Lf(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(uo(a,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,Mt(e,t,o)}return Il(e,t,n,r,o)}function Df(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(or,Ue),Ue|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(or,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,q(or,Ue),Ue|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,q(or,Ue),Ue|=r;return De(e,t,o,n),t.child}function Tf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Il(e,t,n,r,o){var a=Ae(n)?_n:Ne.current;return a=fr(t,a),ur(t,o),n=ks(e,t,n,r,a,o),r=Cs(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(oe&&r&&fs(t),t.flags|=1,De(e,t,n,o),t.child)}function Wc(e,t,n,r,o){if(Ae(n)){var a=!0;Ta(t)}else a=!1;if(ur(t,o),t.stateNode===null)ga(e,t),Nf(t,n,r),Ml(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Ae(n)?_n:Ne.current,u=fr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==u)&&jc(t,i,r,u),Vt=!1;var m=t.memoizedState;i.state=m,Ia(t,r,i,o),s=t.memoizedState,l!==r||m!==s||je.current||Vt?(typeof f=="function"&&(Fl(t,n,f,r),s=t.memoizedState),(l=Vt||Ic(t,n,l,r,m,s,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,af(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:st(t.type,l),i.props=u,d=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=tt(s):(s=Ae(n)?_n:Ne.current,s=fr(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==d||m!==s)&&jc(t,i,r,s),Vt=!1,m=t.memoizedState,i.state=m,Ia(t,r,i,o);var g=t.memoizedState;l!==d||m!==g||je.current||Vt?(typeof v=="function"&&(Fl(t,n,v,r),g=t.memoizedState),(u=Vt||Ic(t,n,u,r,m,g,s)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,g,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),i.props=r,i.state=g,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return jl(e,t,n,r,a,o)}function jl(e,t,n,r,o,a){Tf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Pc(t,n,!1),Mt(e,t,a);r=t.stateNode,lv.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=mr(t,e.child,null,a),t.child=mr(t,null,l,a)):De(e,t,l,a),t.memoizedState=r.state,o&&Pc(t,n,!0),t.child}function Of(e){var t=e.stateNode;t.pendingContext?Rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rc(e,t.context,!1),xs(e,t.containerInfo)}function Vc(e,t,n,r,o){return pr(),ms(o),t.flags|=256,De(e,t,n,r),t.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function $l(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ff(e,t,n){var r=t.pendingProps,o=ie.current,a=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(ie,o&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=ni(i,r,0,null),e=Cn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=$l(n),t.memoizedState=Al,e):Rs(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return sv(e,t,i,r,l,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=rn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=rn(l,a):(a=Cn(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?$l(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Al,r}return a=e.child,e=a.sibling,r=rn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rs(e,t){return t=ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ua(e,t,n,r){return r!==null&&ms(r),mr(t,e.child,null,n),e=Rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sv(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=el(Error(b(422))),ua(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=ni({mode:"visible",children:r.children},o,0,null),a=Cn(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&mr(t,e.child,null,i),t.child.memoizedState=$l(i),t.memoizedState=Al,a);if((t.mode&1)===0)return ua(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(b(419)),r=el(a,r,void 0),ua(e,t,i,r)}if(l=(i&e.childLanes)!==0,Ie||l){if(r=ye,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Ft(e,o),ft(r,e,o,-1))}return Fs(),r=el(Error(b(421))),ua(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Sv.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,He=qt(o.nextSibling),Be=t,oe=!0,ct=null,e!==null&&(Xe[Ze++]=Pt,Xe[Ze++]=Lt,Xe[Ze++]=Nn,Pt=e.id,Lt=e.overflow,Nn=t),t=Rs(t,r.children),t.flags|=4096,t)}function Yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ol(e.return,t,n)}function tl(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Mf(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(De(e,t,r.children,n),r=ie.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,n,t);else if(e.tag===19)Yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(ie,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ja(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),tl(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ja(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}tl(t,!0,n,null,a);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ga(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uv(e,t,n){switch(t.tag){case 3:Of(t),pr();break;case 5:lf(t);break;case 1:Ae(t.type)&&Ta(t);break;case 4:xs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;q(Ma,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(ie,ie.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ff(e,t,n):(q(ie,ie.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);q(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Mf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Df(e,t,n)}return Mt(e,t,n)}var zf,Ul,If,jf;zf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ul=function(){};If=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,bn(St.current);var a=null;switch(n){case"input":o=ul(e,o),r=ul(e,r),a=[];break;case"select":o=se({},o,{value:void 0}),r=se({},r,{value:void 0}),a=[];break;case"textarea":o=fl(e,o),r=fl(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=La)}ml(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=o?.[u],r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&te("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};jf=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cv(e,t,n){var r=t.pendingProps;switch(ps(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ae(t.type)&&Da(),Ce(t),null;case 3:return r=t.stateNode,hr(),ne(je),ne(Ne),Es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(la(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ct!==null&&(Jl(ct),ct=null))),Ul(e,t),Ce(t),null;case 5:Ss(t);var o=bn(ho.current);if(n=t.type,e!==null&&t.stateNode!=null)If(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return Ce(t),null}if(e=bn(St.current),la(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[wt]=t,r[po]=a,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(o=0;o<Yr.length;o++)te(Yr[o],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":ec(r,a),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},te("invalid",r);break;case"textarea":nc(r,a),te("invalid",r)}ml(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ia(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ia(r.textContent,l,e),o=["children",""+l]):no.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&te("scroll",r)}switch(n){case"input":Ko(r),tc(r,a,!0);break;case"textarea":Ko(r),rc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=La)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[wt]=t,e[po]=r,zf(e,t,!1,!1),t.stateNode=e;e:{switch(i=hl(n,r),n){case"dialog":te("cancel",e),te("close",e),o=r;break;case"iframe":case"object":case"embed":te("load",e),o=r;break;case"video":case"audio":for(o=0;o<Yr.length;o++)te(Yr[o],e);o=r;break;case"source":te("error",e),o=r;break;case"img":case"image":case"link":te("error",e),te("load",e),o=r;break;case"details":te("toggle",e),o=r;break;case"input":ec(e,r),o=ul(e,r),te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=se({},r,{value:void 0}),te("invalid",e);break;case"textarea":nc(e,r),o=fl(e,r),te("invalid",e);break;default:o=r}ml(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?md(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fd(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ro(e,s):typeof s=="number"&&ro(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(no.hasOwnProperty(a)?s!=null&&a==="onScroll"&&te("scroll",e):s!=null&&Zl(e,a,s,i))}switch(n){case"input":Ko(e),tc(e,r,!1);break;case"textarea":Ko(e),rc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ar(e,!!r.multiple,a,!1):r.defaultValue!=null&&ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=La)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)jf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=bn(ho.current),bn(St.current),la(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(a=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:ia(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ia(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Ce(t),null;case 13:if(ne(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&He!==null&&(t.mode&1)!==0&&(t.flags&128)===0)tf(),pr(),t.flags|=98560,a=!1;else if(a=la(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(b(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(317));a[wt]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),a=!1}else ct!==null&&(Jl(ct),ct=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ie.current&1)!==0?he===0&&(he=3):Fs())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return hr(),Ul(e,t),e===null&&co(t.stateNode.containerInfo),Ce(t),null;case 10:return ys(t.type._context),Ce(t),null;case 17:return Ae(t.type)&&Da(),Ce(t),null;case 19:if(ne(ie),a=t.memoizedState,a===null)return Ce(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)$r(a,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ja(e),i!==null){for(t.flags|=128,$r(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(ie,ie.current&1|2),t.child}e=e.sibling}a.tail!==null&&de()>yr&&(t.flags|=128,r=!0,$r(a,!1),t.lanes=4194304)}else{if(!r)if(e=ja(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!oe)return Ce(t),null}else 2*de()-a.renderingStartTime>yr&&n!==1073741824&&(t.flags|=128,r=!0,$r(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=de(),t.sibling=null,n=ie.current,q(ie,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Os(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ue&1073741824)!==0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function dv(e,t){switch(ps(t),t.tag){case 1:return Ae(t.type)&&Da(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),ne(je),ne(Ne),Es(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(ne(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ie),null;case 4:return hr(),null;case 10:return ys(t.type._context),null;case 22:case 23:return Os(),null;case 24:return null;default:return null}}var ca=!1,_e=!1,fv=typeof WeakSet=="function"?WeakSet:Set,N=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function Hl(e,t,n){try{n()}catch(r){ue(e,t,r)}}var Qc=!1;function pv(e,t){if(Cl=Na,e=Hd(),ds(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,l=-1,s=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(l=i+o),d!==a||r!==0&&d.nodeType!==3||(s=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(v=d.firstChild)!==null;)m=d,d=v;for(;;){if(d===e)break t;if(m===n&&++u===o&&(l=i),m===a&&++f===r&&(s=i),(v=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(_l={focusedElem:e,selectionRange:n},Na=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,S=g.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:st(t.type,y),S);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){ue(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return g=Qc,Qc=!1,g}function qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Hl(t,n,a)}o=o.next}while(o!==r)}}function ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Af(e){var t=e.alternate;t!==null&&(e.alternate=null,Af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[po],delete t[Pl],delete t[Jh],delete t[Gh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $f(e){return e.tag===5||e.tag===3||e.tag===4}function Kc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=La));else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}var xe=null,ut=!1;function Bt(e,t,n){for(n=n.child;n!==null;)Uf(e,t,n),n=n.sibling}function Uf(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Ya,n)}catch{}switch(n.tag){case 5:_e||rr(n,t);case 6:var r=xe,o=ut;xe=null,Bt(e,t,n),xe=r,ut=o,xe!==null&&(ut?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ut?(e=xe,n=n.stateNode,e.nodeType===8?Ki(e.parentNode,n):e.nodeType===1&&Ki(e,n),lo(e)):Ki(xe,n.stateNode));break;case 4:r=xe,o=ut,xe=n.stateNode.containerInfo,ut=!0,Bt(e,t,n),xe=r,ut=o;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Hl(n,t,i),o=o.next}while(o!==r)}Bt(e,t,n);break;case 1:if(!_e&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ue(n,t,l)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Bt(e,t,n),_e=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function Jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fv),t.forEach(function(r){var o=Ev.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:xe=l.stateNode,ut=!1;break e;case 3:xe=l.stateNode.containerInfo,ut=!0;break e;case 4:xe=l.stateNode.containerInfo,ut=!0;break e}l=l.return}if(xe===null)throw Error(b(160));Uf(a,i,o),xe=null,ut=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ue(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hf(t,e),t=t.sibling}function Hf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),yt(e),r&4){try{qr(3,e,e.return),ei(3,e)}catch(y){ue(e,e.return,y)}try{qr(5,e,e.return)}catch(y){ue(e,e.return,y)}}break;case 1:lt(t,e),yt(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(lt(t,e),yt(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var o=e.stateNode;try{ro(o,"")}catch(y){ue(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&ud(o,a),hl(l,i);var u=hl(l,a);for(i=0;i<s.length;i+=2){var f=s[i],d=s[i+1];f==="style"?md(o,d):f==="dangerouslySetInnerHTML"?fd(o,d):f==="children"?ro(o,d):Zl(o,f,d,u)}switch(l){case"input":cl(o,a);break;case"textarea":cd(o,a);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?ar(o,!!a.multiple,v,!1):m!==!!a.multiple&&(a.defaultValue!=null?ar(o,!!a.multiple,a.defaultValue,!0):ar(o,!!a.multiple,a.multiple?[]:"",!1))}o[po]=a}catch(y){ue(e,e.return,y)}}break;case 6:if(lt(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(b(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(y){ue(e,e.return,y)}}break;case 3:if(lt(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lo(t.containerInfo)}catch(y){ue(e,e.return,y)}break;case 4:lt(t,e),yt(e);break;case 13:lt(t,e),yt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Ds=de())),r&4&&Jc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||f,lt(t,e),_e=u):lt(t,e),yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&(e.mode&1)!==0)for(N=e,f=e.child;f!==null;){for(d=N=f;N!==null;){switch(m=N,v=m.child,m.tag){case 0:case 11:case 14:case 15:qr(4,m,m.return);break;case 1:rr(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ue(r,n,y)}}break;case 5:rr(m,m.return);break;case 22:if(m.memoizedState!==null){Xc(d);continue}}v!==null?(v.return=m,N=v):Xc(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=pd("display",i))}catch(y){ue(e,e.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ue(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lt(t,e),yt(e),r&4&&Jc(e);break;case 21:break;default:lt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($f(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ro(o,""),r.flags&=-33);var a=Kc(e);Vl(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=Kc(e);Wl(e,l,i);break;default:throw Error(b(161))}}catch(s){ue(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mv(e,t,n){N=e,Bf(e,t,n)}function Bf(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||ca;if(!i){var l=o.alternate,s=l!==null&&l.memoizedState!==null||_e;l=ca;var u=_e;if(ca=i,(_e=s)&&!u)for(N=o;N!==null;)i=N,s=i.child,i.tag===22&&i.memoizedState!==null?Zc(o):s!==null?(s.return=i,N=s):Zc(o);for(;a!==null;)N=a,Bf(a,t,n),a=a.sibling;N=o,ca=l,_e=u}Gc(e,t,n)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,N=a):Gc(e,t,n)}}function Gc(e){for(;N!==null;){var t=N;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:_e||ei(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Fc(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fc(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&lo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}_e||t.flags&512&&Bl(t)}catch(m){ue(t,t.return,m)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Xc(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Zc(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ei(4,t)}catch(s){ue(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ue(t,o,s)}}var a=t.return;try{Bl(t)}catch(s){ue(t,a,s)}break;case 5:var i=t.return;try{Bl(t)}catch(s){ue(t,i,s)}}}catch(s){ue(t,t.return,s)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var hv=Math.ceil,Ua=zt.ReactCurrentDispatcher,Ps=zt.ReactCurrentOwner,et=zt.ReactCurrentBatchConfig,Q=0,ye=null,fe=null,Se=0,Ue=0,or=sn(0),he=0,wo=null,Pn=0,ti=0,Ls=0,eo=null,ze=null,Ds=0,yr=1/0,Nt=null,Ha=!1,Yl=null,tn=null,da=!1,Jt=null,Ba=0,to=0,Ql=null,wa=-1,xa=0;function Te(){return(Q&6)!==0?de():wa!==-1?wa:wa=de()}function nn(e){return(e.mode&1)===0?1:(Q&2)!==0&&Se!==0?Se&-Se:Zh.transition!==null?(xa===0&&(xa=_d()),xa):(e=G,e!==0||(e=window.event,e=e===void 0?16:Od(e.type)),e)}function ft(e,t,n,r){if(50<to)throw to=0,Ql=null,Error(b(185));xo(e,n,r),((Q&2)===0||e!==ye)&&(e===ye&&((Q&2)===0&&(ti|=n),he===4&&Qt(e,Se)),$e(e,r),n===1&&Q===0&&(t.mode&1)===0&&(yr=de()+500,Xa&&un()))}function $e(e,t){var n=e.callbackNode;eh(e,t);var r=_a(e,e===ye?Se:0);if(r===0)n!==null&&ic(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ic(n),t===1)e.tag===0?Xh(qc.bind(null,e)):Zd(qc.bind(null,e)),Qh(function(){(Q&6)===0&&un()}),n=null;else{switch(Nd(r)){case 1:n=rs;break;case 4:n=kd;break;case 16:n=Ca;break;case 536870912:n=Cd;break;default:n=Ca}n=Xf(n,Wf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wf(e,t){if(wa=-1,xa=0,(Q&6)!==0)throw Error(b(327));var n=e.callbackNode;if(cr()&&e.callbackNode!==n)return null;var r=_a(e,e===ye?Se:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Wa(e,r);else{t=r;var o=Q;Q|=2;var a=Yf();(ye!==e||Se!==t)&&(Nt=null,yr=de()+500,kn(e,t));do try{gv();break}catch(l){Vf(e,l)}while(!0);vs(),Ua.current=a,Q=o,fe!==null?t=0:(ye=null,Se=0,t=he)}if(t!==0){if(t===2&&(o=xl(e),o!==0&&(r=o,t=Kl(e,o))),t===1)throw n=wo,kn(e,0),Qt(e,r),$e(e,de()),n;if(t===6)Qt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!vv(o)&&(t=Wa(e,r),t===2&&(a=xl(e),a!==0&&(r=a,t=Kl(e,a))),t===1))throw n=wo,kn(e,0),Qt(e,r),$e(e,de()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:xn(e,ze,Nt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=Ds+500-de(),10<t)){if(_a(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Rl(xn.bind(null,e,ze,Nt),t);break}xn(e,ze,Nt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-dt(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hv(r/1960))-r,10<r){e.timeoutHandle=Rl(xn.bind(null,e,ze,Nt),r);break}xn(e,ze,Nt);break;case 5:xn(e,ze,Nt);break;default:throw Error(b(329))}}}return $e(e,de()),e.callbackNode===n?Wf.bind(null,e):null}function Kl(e,t){var n=eo;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=Wa(e,t),e!==2&&(t=ze,ze=n,t!==null&&Jl(t)),e}function Jl(e){ze===null?ze=e:ze.push.apply(ze,e)}function vv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!pt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~Ls,t&=~ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function qc(e){if((Q&6)!==0)throw Error(b(327));cr();var t=_a(e,0);if((t&1)===0)return $e(e,de()),null;var n=Wa(e,t);if(e.tag!==0&&n===2){var r=xl(e);r!==0&&(t=r,n=Kl(e,r))}if(n===1)throw n=wo,kn(e,0),Qt(e,t),$e(e,de()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,ze,Nt),$e(e,de()),null}function Ts(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(yr=de()+500,Xa&&un())}}function Ln(e){Jt!==null&&Jt.tag===0&&(Q&6)===0&&cr();var t=Q;Q|=1;var n=et.transition,r=G;try{if(et.transition=null,G=1,e)return e()}finally{G=r,et.transition=n,Q=t,(Q&6)===0&&un()}}function Os(){Ue=or.current,ne(or)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yh(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(ps(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Da();break;case 3:hr(),ne(je),ne(Ne),Es();break;case 5:Ss(r);break;case 4:hr();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:ys(r.type._context);break;case 22:case 23:Os()}n=n.return}if(ye=e,fe=e=rn(e.current,null),Se=Ue=t,he=0,wo=null,Ls=ti=Pn=0,ze=eo=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}En=null}return e}function Vf(e,t){do{var n=fe;try{if(vs(),va.current=$a,Aa){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Aa=!1}if(Rn=0,ve=me=le=null,Zr=!1,vo=0,Ps.current=null,n===null||n.return===null){he=1,wo=t,fe=null;break}e:{var a=e,i=n.return,l=n,s=t;if(t=Se,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if((f.mode&1)===0&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=$c(i);if(v!==null){v.flags&=-257,Uc(v,i,l,a,t),v.mode&1&&Ac(a,u,t),t=v,s=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if((t&1)===0){Ac(a,u,t),Fs();break e}s=Error(b(426))}}else if(oe&&l.mode&1){var S=$c(i);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),Uc(S,i,l,a,t),ms(vr(s,l));break e}}a=s=vr(s,l),he!==4&&(he=2),eo===null?eo=[a]:eo.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=Rf(a,s,t);Oc(a,p);break e;case 1:l=s;var c=a.type,h=a.stateNode;if((a.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tn===null||!tn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=Pf(a,l,t);Oc(a,x);break e}}a=a.return}while(a!==null)}Kf(n)}catch(w){t=w,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function Yf(){var e=Ua.current;return Ua.current=$a,e===null?$a:e}function Fs(){(he===0||he===3||he===2)&&(he=4),ye===null||(Pn&268435455)===0&&(ti&268435455)===0||Qt(ye,Se)}function Wa(e,t){var n=Q;Q|=2;var r=Yf();(ye!==e||Se!==t)&&(Nt=null,kn(e,t));do try{yv();break}catch(o){Vf(e,o)}while(!0);if(vs(),Q=n,Ua.current=r,fe!==null)throw Error(b(261));return ye=null,Se=0,he}function yv(){for(;fe!==null;)Qf(fe)}function gv(){for(;fe!==null&&!Vm();)Qf(fe)}function Qf(e){var t=Gf(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?Kf(e):fe=t,Ps.current=null}function Kf(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=cv(n,t,Ue),n!==null){fe=n;return}}else{if(n=dv(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,fe=null;return}}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);he===0&&(he=5)}function xn(e,t,n){var r=G,o=et.transition;try{et.transition=null,G=1,wv(e,t,n,r)}finally{et.transition=o,G=r}return null}function wv(e,t,n,r){do cr();while(Jt!==null);if((Q&6)!==0)throw Error(b(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(th(e,a),e===ye&&(fe=ye=null,Se=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||da||(da=!0,Xf(Ca,function(){return cr(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=et.transition,et.transition=null;var i=G;G=1;var l=Q;Q|=4,Ps.current=null,pv(e,n),Hf(n,e),Uh(_l),Na=!!Cl,_l=Cl=null,e.current=n,mv(n,e,o),Ym(),Q=l,G=i,et.transition=a}else e.current=n;if(da&&(da=!1,Jt=e,Ba=o),a=e.pendingLanes,a===0&&(tn=null),Jm(n.stateNode,r),$e(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ha)throw Ha=!1,e=Yl,Yl=null,e;return(Ba&1)!==0&&e.tag!==0&&cr(),a=e.pendingLanes,(a&1)!==0?e===Ql?to++:(to=0,Ql=e):to=0,un(),null}function cr(){if(Jt!==null){var e=Nd(Ba),t=et.transition,n=G;try{if(et.transition=null,G=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,Ba=0,(Q&6)!==0)throw Error(b(331));var o=Q;for(Q|=4,N=e.current;N!==null;){var a=N,i=a.child;if((N.flags&16)!==0){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(N=u;N!==null;){var f=N;switch(f.tag){case 0:case 11:case 15:qr(8,f,a)}var d=f.child;if(d!==null)d.return=f,N=d;else for(;N!==null;){f=N;var m=f.sibling,v=f.return;if(Af(f),f===u){N=null;break}if(m!==null){m.return=v,N=m;break}N=v}}}var g=a.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}N=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,N=i;else e:for(;N!==null;){if(a=N,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:qr(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,N=p;break e}N=a.return}}var c=e.current;for(N=c;N!==null;){i=N;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,N=h;else e:for(i=c;N!==null;){if(l=N,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:ei(9,l)}}catch(w){ue(l,l.return,w)}if(l===i){N=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,N=x;break e}N=l.return}}if(Q=o,un(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Ya,e)}catch{}r=!0}return r}finally{G=n,et.transition=t}}return!1}function ed(e,t,n){t=vr(n,t),t=Rf(e,t,1),e=en(e,t,1),t=Te(),e!==null&&(xo(e,1,t),$e(e,t))}function ue(e,t,n){if(e.tag===3)ed(e,e,n);else for(;t!==null;){if(t.tag===3){ed(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=vr(n,e),e=Pf(t,e,1),t=en(t,e,1),e=Te(),t!==null&&(xo(t,1,e),$e(t,e));break}}t=t.return}}function xv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Se&n)===n&&(he===4||he===3&&(Se&130023424)===Se&&500>de()-Ds?kn(e,0):Ls|=n),$e(e,t)}function Jf(e,t){t===0&&((e.mode&1)===0?t=1:(t=Xo,Xo<<=1,(Xo&130023424)===0&&(Xo=4194304)));var n=Te();e=Ft(e,t),e!==null&&(xo(e,t,n),$e(e,n))}function Sv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jf(e,n)}function Ev(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),Jf(e,n)}var Gf;Gf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Ie=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ie=!1,uv(e,t,n);Ie=(e.flags&131072)!==0}else Ie=!1,oe&&(t.flags&1048576)!==0&&qd(t,Fa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ga(e,t),e=t.pendingProps;var o=fr(t,Ne.current);ur(t,n),o=ks(null,t,r,e,o,n);var a=Cs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(a=!0,Ta(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ws(t),o.updater=qa,t.stateNode=o,o._reactInternals=t,Ml(t,r,e,n),t=jl(null,t,r,!0,a,n)):(t.tag=0,oe&&a&&fs(t),De(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ga(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=kv(r),e=st(r,e),o){case 0:t=Il(null,t,r,e,n);break e;case 1:t=Wc(null,t,r,e,n);break e;case 11:t=Hc(null,t,r,e,n);break e;case 14:t=Bc(null,t,r,st(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Il(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Wc(e,t,r,o,n);case 3:e:{if(Of(t),e===null)throw Error(b(387));r=t.pendingProps,a=t.memoizedState,o=a.element,af(e,t),Ia(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=vr(Error(b(423)),t),t=Vc(e,t,r,n,o);break e}else if(r!==o){o=vr(Error(b(424)),t),t=Vc(e,t,r,n,o);break e}else for(He=qt(t.stateNode.containerInfo.firstChild),Be=t,oe=!0,ct=null,n=rf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),r===o){t=Mt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return lf(t),e===null&&Tl(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Nl(r,o)?i=null:a!==null&&Nl(r,a)&&(t.flags|=32),Tf(e,t),De(e,t,i,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return Ff(e,t,n);case 4:return xs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mr(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Hc(e,t,r,o,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,q(Ma,r._currentValue),r._currentValue=i,a!==null)if(pt(a.value,i)){if(a.children===o.children&&!je.current){t=Mt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Dt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ol(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(b(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Ol(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}De(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ur(t,n),o=tt(o),r=r(o),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,o=st(r,t.pendingProps),o=st(r.type,o),Bc(e,t,r,o,n);case 15:return Lf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),ga(e,t),t.tag=1,Ae(r)?(e=!0,Ta(t)):e=!1,ur(t,n),Nf(t,r,o),Ml(t,r,o,n),jl(null,t,r,!0,e,n);case 19:return Mf(e,t,n);case 22:return Df(e,t,n)}throw Error(b(156,t.tag))};function Xf(e,t){return bd(e,t)}function bv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new bv(e,t,n,r)}function Ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kv(e){if(typeof e=="function")return Ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===es)return 11;if(e===ts)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sa(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Ms(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Kn:return Cn(n.children,o,a,t);case ql:i=8,o|=8;break;case al:return e=qe(12,n,t,o|2),e.elementType=al,e.lanes=a,e;case il:return e=qe(13,n,t,o),e.elementType=il,e.lanes=a,e;case ll:return e=qe(19,n,t,o),e.elementType=ll,e.lanes=a,e;case id:return ni(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case od:i=10;break e;case ad:i=9;break e;case es:i=11;break e;case ts:i=14;break e;case Wt:i=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=qe(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Cn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function ni(e,t,n,r){return e=qe(22,e,r,t),e.elementType=id,e.lanes=n,e.stateNode={isHidden:!1},e}function nl(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function rl(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$i(0),this.expirationTimes=$i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function zs(e,t,n,r,o,a,i,l,s){return e=new Cv(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=qe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ws(a),e}function _v(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zf(e){if(!e)return an;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Xd(e,n,t)}return t}function qf(e,t,n,r,o,a,i,l,s){return e=zs(n,r,!0,e,o,a,i,l,s),e.context=Zf(null),n=e.current,r=Te(),o=nn(n),a=Dt(r,o),a.callback=t??null,en(n,a,o),e.current.lanes=o,xo(e,o,r),$e(e,r),e}function ri(e,t,n,r){var o=t.current,a=Te(),i=nn(o);return n=Zf(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(o,t,i),e!==null&&(ft(e,o,i,a),ha(e,o,i)),i}function Va(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Is(e,t){td(e,t),(e=e.alternate)&&td(e,t)}function Nv(){return null}var ep=typeof reportError=="function"?reportError:function(e){console.error(e)};function js(e){this._internalRoot=e}oi.prototype.render=js.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));ri(e,t,null,null)};oi.prototype.unmount=js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){ri(null,e,null,null)}),t[Ot]=null}};function oi(e){this._internalRoot=e}oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ld();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&Td(e)}};function As(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function Rv(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=Va(i);a.call(u)}}var i=qf(t,r,e,0,null,!1,!1,"",nd);return e._reactRootContainer=i,e[Ot]=i.current,co(e.nodeType===8?e.parentNode:e),Ln(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Va(s);l.call(u)}}var s=zs(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=s,e[Ot]=s.current,co(e.nodeType===8?e.parentNode:e),Ln(function(){ri(t,s,n,r)}),s}function ii(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var l=o;o=function(){var s=Va(i);l.call(s)}}ri(t,i,e,o)}else i=Rv(n,t,e,o,r);return Va(i)}Rd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vr(t.pendingLanes);n!==0&&(os(t,n|1),$e(t,de()),(Q&6)===0&&(yr=de()+500,un()))}break;case 13:Ln(function(){var r=Ft(e,1);if(r!==null){var o=Te();ft(r,e,1,o)}}),Is(e,1)}};as=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Te();ft(t,e,134217728,n)}Is(e,134217728)}};Pd=function(e){if(e.tag===13){var t=nn(e),n=Ft(e,t);if(n!==null){var r=Te();ft(n,e,t,r)}Is(e,t)}};Ld=function(){return G};Dd=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};yl=function(e,t,n){switch(t){case"input":if(cl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ga(r);if(!o)throw Error(b(90));sd(r),cl(r,o)}}}break;case"textarea":cd(e,n);break;case"select":t=n.value,t!=null&&ar(e,!!n.multiple,t,!1)}};yd=Ts;gd=Ln;var Pv={usingClientEntryPoint:!1,Events:[Eo,Zn,Ga,hd,vd,Ts]},Ur={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lv={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sd(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||Nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Hr.isDisabled&&Hr.supportsFiber))try{Ya=Hr.inject(Lv),xt=Hr}catch{}var Hr;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!As(t))throw Error(b(200));return _v(e,t,null,n)};Ye.createRoot=function(e,t){if(!As(e))throw Error(b(299));var n=!1,r="",o=ep;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=zs(e,1,!1,null,null,n,!1,r,o),e[Ot]=t.current,co(e.nodeType===8?e.parentNode:e),new js(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Sd(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Ln(e)};Ye.hydrate=function(e,t,n){if(!ai(t))throw Error(b(200));return ii(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!As(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=ep;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=qf(t,null,e,1,n??null,o,!1,a,i),e[Ot]=t.current,co(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new oi(t)};Ye.render=function(e,t,n){if(!ai(t))throw Error(b(200));return ii(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!ai(e))throw Error(b(40));return e._reactRootContainer?(Ln(function(){ii(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Ye.unstable_batchedUpdates=Ts;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ai(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return ii(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426"});var op=yn((ug,rp)=>{"use strict";function np(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(np)}catch(e){console.error(e)}}np(),rp.exports=tp()});var ip=yn($s=>{"use strict";var ap=op();$s.createRoot=ap.createRoot,$s.hydrateRoot=ap.hydrateRoot;var cg});var om=A(j()),am=A(ip());var at=A(j());var Ke=A(j(),1),L=A(j(),1),ae=A(j(),1),nu=A(j(),1),Ip=A(j(),1),J=A(j(),1),Ay=A(j(),1),$y=A(j(),1),Uy=A(j(),1),T=A(j(),1),Xp=A(j(),1);var lp="popstate";function mp(e={}){function t(r,o){let{pathname:a,search:i,hash:l}=r.location;return Ws("",{pathname:a,search:i,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:xr(o)}return Tv(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Dv(){return Math.random().toString(36).substring(2,10)}function sp(e,t){return{usr:e.state,key:e.key,idx:t}}function Ws(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?On(t):t,state:n,key:t&&t.key||r||Dv()}}function xr({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function On(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Tv(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,l="POP",s=null,u=f();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function f(){return(i.state||{idx:null}).idx}function d(){l="POP";let S=f(),p=S==null?null:S-u;u=S,s&&s({action:l,location:y.location,delta:p})}function m(S,p){l="PUSH";let c=Ws(y.location,S,p);n&&n(c,S),u=f()+1;let h=sp(c,u),x=y.createHref(c);try{i.pushState(h,"",x)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;o.location.assign(x)}a&&s&&s({action:l,location:y.location,delta:1})}function v(S,p){l="REPLACE";let c=Ws(y.location,S,p);n&&n(c,S),u=f();let h=sp(c,u),x=y.createHref(c);i.replaceState(h,"",x),a&&s&&s({action:l,location:y.location,delta:0})}function g(S){return Ov(S)}let y={get action(){return l},get location(){return e(o,i)},listen(S){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(lp,d),s=S,()=>{o.removeEventListener(lp,d),s=null}},createHref(S){return t(o,S)},createURL:g,encodeLocation(S){let p=g(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:v,go(S){return i.go(S)}};return y}function Ov(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),re(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:xr(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}var Fv;Fv=new WeakMap;function Ks(e,t,n="/"){return Mv(e,t,n,!1)}function Mv(e,t,n,r){let o=typeof t=="string"?On(t):t,a=Et(o.pathname||"/",n);if(a==null)return null;let i=hp(e);Iv(i);let l=null;for(let s=0;l==null&&s<i.length;++s){let u=Kv(a);l=Yv(i[s],u,r)}return l}function zv(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function hp(e,t=[],n=[],r="",o=!1){let a=(i,l,s=o,u)=>{let f={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&s)return;re(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let d=It([r,f.relativePath]),m=n.concat(f);i.children&&i.children.length>0&&(re(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),hp(i.children,t,m,d,s)),!(i.path==null&&!i.index)&&t.push({path:d,score:Wv(d,i.index),routesMeta:m})};return e.forEach((i,l)=>{if(i.path===""||!i.path?.includes("?"))a(i,l);else for(let s of vp(i.path))a(i,l,!0,s)}),t}function vp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let i=vp(r.join("/")),l=[];return l.push(...i.map(s=>s===""?a:[a,s].join("/"))),o&&l.push(...i),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Iv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Vv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var jv=/^:[\w-]+$/,Av=3,$v=2,Uv=1,Hv=10,Bv=-2,up=e=>e==="*";function Wv(e,t){let n=e.split("/"),r=n.length;return n.some(up)&&(r+=Bv),t&&(r+=$v),n.filter(o=>!up(o)).reduce((o,a)=>o+(jv.test(a)?Av:a===""?Uv:Hv),r)}function Vv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Yv(e,t,n=!1){let{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,f=a==="/"?t:t.slice(a.length)||"/",d=Co({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),m=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Co({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!d)return null;Object.assign(o,d.params),i.push({params:o,pathname:It([a,d.pathname]),pathnameBase:Xv(It([a,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(a=It([a,d.pathnameBase]))}return i}function Co(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Qv(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,{paramName:f,isOptional:d},m)=>{if(f==="*"){let g=l[m]||"";i=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}let v=l[m];return d&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:i,pattern:e}}function Qv(e,t=!1,n=!0){Qe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Kv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Qe(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Et(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var yp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jv=e=>yp.test(e);function gp(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?On(e):e,a;if(n)if(Jv(n))a=n;else{if(n.includes("//")){let i=n;n=n.replace(/\/\/+/g,"/"),Qe(!1,`Pathnames cannot have embedded double slashes - normalizing ${i} -> ${n}`)}n.startsWith("/")?a=cp(n.substring(1),"/"):a=cp(n,t)}else a=t;return{pathname:a,search:Zv(r),hash:qv(o)}}function cp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Us(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wp(e){let t=Gv(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function xp(e,t,n,r=!1){let o;typeof e=="string"?o=On(e):(o={...e},re(!o.pathname||!o.pathname.includes("?"),Us("?","pathname","search",o)),re(!o.pathname||!o.pathname.includes("#"),Us("#","pathname","hash",o)),re(!o.search||!o.search.includes("#"),Us("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,l;if(i==null)l=n;else{let d=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),d-=1;o.pathname=m.join("/")}l=d>=0?t[d]:"/"}let s=gp(o,l),u=i&&i!=="/"&&i.endsWith("/"),f=(a||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}var It=e=>e.join("/").replace(/\/\/+/g,"/"),Xv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,qv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;var Sp=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ep(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function ey(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var bp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function kp(e,t){let n=e;if(typeof n!="string"||!yp.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(bp)try{let a=new URL(window.location.href),i=n.startsWith("//")?new URL(a.protocol+n):new URL(n),l=Et(i.pathname,t);i.origin===a.origin&&l!=null?n=l+i.search+i.hash:o=!0}catch{Qe(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}var fg=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Cp=["POST","PUT","PATCH","DELETE"],pg=new Set(Cp),ty=["GET",...Cp],mg=new Set(ty);var Fn=Ke.createContext(null);Fn.displayName="DataRouter";var Sr=Ke.createContext(null);Sr.displayName="DataRouterState";var ny=Ke.createContext(!1);var Js=Ke.createContext({isTransitioning:!1});Js.displayName="ViewTransition";var _p=Ke.createContext(new Map);_p.displayName="Fetchers";var ry=Ke.createContext(null);ry.displayName="Await";var Fe=Ke.createContext(null);Fe.displayName="Navigation";var Er=Ke.createContext(null);Er.displayName="Location";var mt=Ke.createContext({outlet:null,matches:[],isDataRoute:!1});mt.displayName="Route";var Gs=Ke.createContext(null);Gs.displayName="RouteError";var Vs=!0,Np="REACT_ROUTER_ERROR",oy="REDIRECT",ay="ROUTE_ERROR_RESPONSE";function iy(e){if(e.startsWith(`${Np}:${oy}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function ly(e){if(e.startsWith(`${Np}:${ay}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Sp(t.status,t.statusText,t.data)}catch{}}function Rp(e,{relative:t}={}){re(br(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=L.useContext(Fe),{hash:o,pathname:a,search:i}=kr(e,{relative:t}),l=a;return n!=="/"&&(l=a==="/"?n:It([n,a])),r.createHref({pathname:l,search:i,hash:o})}function br(){return L.useContext(Er)!=null}function rt(){return re(br(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(Er).location}var Pp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lp(e){L.useContext(Fe).static||L.useLayoutEffect(e)}function ot(){let{isDataRoute:e}=L.useContext(mt);return e?yy():sy()}function sy(){re(br(),"useNavigate() may be used only in the context of a <Router> component.");let e=L.useContext(Fn),{basename:t,navigator:n}=L.useContext(Fe),{matches:r}=L.useContext(mt),{pathname:o}=rt(),a=JSON.stringify(wp(r)),i=L.useRef(!1);return Lp(()=>{i.current=!0}),L.useCallback((s,u={})=>{if(Qe(i.current,Pp),!i.current)return;if(typeof s=="number"){n.go(s);return}let f=xp(s,JSON.parse(a),o,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:It([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,a,o,e])}var hg=L.createContext(null);function _o(){let{matches:e}=L.useContext(mt),t=e[e.length-1];return t?t.params:{}}function kr(e,{relative:t}={}){let{matches:n}=L.useContext(mt),{pathname:r}=rt(),o=JSON.stringify(wp(n));return L.useMemo(()=>xp(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function Dp(e,t){return Tp(e,t)}function Tp(e,t,n,r,o){re(br(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=L.useContext(Fe),{matches:i}=L.useContext(mt),l=i[i.length-1],s=l?l.params:{},u=l?l.pathname:"/",f=l?l.pathnameBase:"/",d=l&&l.route;if(Vs){let c=d&&d.path||"";zp(u,!d||c.endsWith("*")||c.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${c}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${c}"> to <Route path="${c==="/"?"*":`${c}/*`}">.`)}let m=rt(),v;if(t){let c=typeof t=="string"?On(t):t;re(f==="/"||c.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${c.pathname}" was given in the \`location\` prop.`),v=c}else v=m;let g=v.pathname||"/",y=g;if(f!=="/"){let c=f.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(c.length).join("/")}let S=Ks(e,{pathname:y});Vs&&(Qe(d||S!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Qe(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));let p=py(S&&S.map(c=>Object.assign({},c,{params:Object.assign({},s,c.params),pathname:It([f,a.encodeLocation?a.encodeLocation(c.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:c.pathname]),pathnameBase:c.pathnameBase==="/"?f:It([f,a.encodeLocation?a.encodeLocation(c.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:c.pathnameBase])})),i,n,r,o);return t&&p?L.createElement(Er.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},p):p}function uy(){let e=Mp(),t=Ep(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},i=null;return Vs&&(console.error("Error handled by React Router default ErrorBoundary:",e),i=L.createElement(L.Fragment,null,L.createElement("p",null,"\u{1F4BF} Hey developer \u{1F44B}"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:a},"ErrorBoundary")," or"," ",L.createElement("code",{style:a},"errorElement")," prop on your route."))),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},t),n?L.createElement("pre",{style:o},n):null,i)}var cy=L.createElement(uy,null),Op=class extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let n=ly(e.digest);n&&(e=n)}let t=e!==void 0?L.createElement(mt.Provider,{value:this.props.routeContext},L.createElement(Gs.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?L.createElement(dy,{error:e},t):t}};Op.contextType=ny;var Hs=new WeakMap;function dy({children:e,error:t}){let{basename:n}=L.useContext(Fe);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=iy(t.digest);if(r){let o=Hs.get(t);if(o)throw o;let a=kp(r.location,n);if(bp&&!Hs.get(t))if(a.isExternal||r.reloadDocument)window.location.href=a.absoluteURL||a.to;else{let i=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:r.replace}));throw Hs.set(t,i),i}return L.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return e}function fy({routeContext:e,match:t,children:n}){let r=L.useContext(Fn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),L.createElement(mt.Provider,{value:e},n)}function py(e,t=[],n=null,r=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,i=n?.errors;if(i!=null){let f=a.findIndex(d=>d.route.id&&i?.[d.route.id]!==void 0);re(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,s=-1;if(n)for(let f=0;f<a.length;f++){let d=a[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(s=f),d.route.id){let{loaderData:m,errors:v}=n,g=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!v||v[d.route.id]===void 0);if(d.route.lazy||g){l=!0,s>=0?a=a.slice(0,s+1):a=[a[0]];break}}}let u=n&&r?(f,d)=>{r(f,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:ey(n.matches),errorInfo:d})}:void 0;return a.reduceRight((f,d,m)=>{let v,g=!1,y=null,S=null;n&&(v=i&&d.route.id?i[d.route.id]:void 0,y=d.route.errorElement||cy,l&&(s<0&&m===0?(zp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,S=null):s===m&&(g=!0,S=d.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,m+1)),c=()=>{let h;return v?h=y:g?h=S:d.route.Component?h=L.createElement(d.route.Component,null):d.route.element?h=d.route.element:h=f,L.createElement(fy,{match:d,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:h})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?L.createElement(Op,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0},onError:u}):c()},null)}function Xs(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function my(e){let t=L.useContext(Fn);return re(t,Xs(e)),t}function Zs(e){let t=L.useContext(Sr);return re(t,Xs(e)),t}function hy(e){let t=L.useContext(mt);return re(t,Xs(e)),t}function qs(e){let t=hy(e),n=t.matches[t.matches.length-1];return re(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function vy(){return qs("useRouteId")}function Fp(){return Zs("useNavigation").navigation}function eu(){let{matches:e,loaderData:t}=Zs("useMatches");return L.useMemo(()=>e.map(n=>zv(n,t)),[e,t])}function Mp(){let e=L.useContext(Gs),t=Zs("useRouteError"),n=qs("useRouteError");return e!==void 0?e:t.errors?.[n]}function yy(){let{router:e}=my("useNavigate"),t=qs("useNavigate"),n=L.useRef(!1);return Lp(()=>{n.current=!0}),L.useCallback(async(o,a={})=>{Qe(n.current,Pp),n.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var dp={};function zp(e,t,n){!t&&!dp[e]&&(dp[e]=!0,Qe(!1,n))}var gy="useOptimistic",vg=ae[gy];var yg=ae.memo(wy);function wy({routes:e,future:t,state:n,onError:r}){return Tp(e,void 0,n,r,t)}function pe(e){re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function tu({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:a=!1,unstable_useTransitions:i}){re(!br(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),s=ae.useMemo(()=>({basename:l,navigator:o,static:a,unstable_useTransitions:i,future:{}}),[l,o,a,i]);typeof n=="string"&&(n=On(n));let{pathname:u="/",search:f="",hash:d="",state:m=null,key:v="default"}=n,g=ae.useMemo(()=>{let y=Et(u,l);return y==null?null:{location:{pathname:y,search:f,hash:d,state:m,key:v},navigationType:r}},[l,u,f,d,m,v,r]);return Qe(g!=null,`<Router basename="${l}"> is not able to match the URL "${u}${f}${d}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:ae.createElement(Fe.Provider,{value:s},ae.createElement(Er.Provider,{children:t,value:g}))}function No({children:e,location:t}){return Dp(di(e),t)}function di(e,t=[]){let n=[];return ae.Children.forEach(e,(r,o)=>{if(!ae.isValidElement(r))return;let a=[...t,o];if(r.type===ae.Fragment){n.push.apply(n,di(r.props.children,a));return}re(r.type===pe,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),re(!r.props.index||!r.props.children,"An index route cannot have child routes.");let i={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=di(r.props.children,a)),n.push(i)}),n}var ui="get",ci="application/x-www-form-urlencoded";function fi(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function xy(e){return fi(e)&&e.tagName.toLowerCase()==="button"}function Sy(e){return fi(e)&&e.tagName.toLowerCase()==="form"}function Ey(e){return fi(e)&&e.tagName.toLowerCase()==="input"}function by(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ky(e,t){return e.button===0&&(!t||t==="_self")&&!by(e)}var li=null;function Cy(){if(li===null)try{new FormData(document.createElement("form"),0),li=!1}catch{li=!0}return li}var _y=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bs(e){return e!=null&&!_y.has(e)?(Qe(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ci}"`),null):e}function Ny(e,t){let n,r,o,a,i;if(Sy(e)){let l=e.getAttribute("action");r=l?Et(l,t):null,n=e.getAttribute("method")||ui,o=Bs(e.getAttribute("enctype"))||ci,a=new FormData(e)}else if(xy(e)||Ey(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||l.getAttribute("action");if(r=s?Et(s,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||ui,o=Bs(e.getAttribute("formenctype"))||Bs(l.getAttribute("enctype"))||ci,a=new FormData(l,e),!Cy()){let{name:u,type:f,value:d}=e;if(f==="image"){let m=u?`${u}.`:"";a.append(`${m}x`,"0"),a.append(`${m}y`,"0")}else u&&a.append(u,d)}}else{if(fi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ui,r=null,o=ci,i=e}return a&&o==="text/plain"&&(i=a,a=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:a,body:i}}var gg=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ry={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Py=/[&><\u2028\u2029]/g;function fp(e){return e.replace(Py,t=>Ry[t])}function ru(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ly(e,t,n,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:t&&Et(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function Dy(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){if(console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode&&import.meta.hot)throw n;return window.location.reload(),new Promise(()=>{})}}function Ty(e){return e!=null&&typeof e.page=="string"}function Oy(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Fy(e,t,n){let r=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let i=await Dy(a,n);return i.links?i.links():[]}return[]}));return jy(r.flat(1).filter(Oy).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function pp(e,t,n,r,o,a){let i=(s,u)=>n[u]?s.route.id!==n[u].route.id:!0,l=(s,u)=>n[u].pathname!==s.pathname||n[u].route.path?.endsWith("*")&&n[u].params["*"]!==s.params["*"];return a==="assets"?t.filter((s,u)=>i(s,u)||l(s,u)):a==="data"?t.filter((s,u)=>{let f=r.routes[s.route.id];if(!f||!f.hasLoader)return!1;if(i(s,u)||l(s,u))return!0;if(s.route.shouldRevalidate){let d=s.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function My(e,t,{includeHydrateFallback:n}={}){return zy(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function zy(e){return[...new Set(e)]}function Iy(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function jy(e,t){let n=new Set,r=new Set(t);return e.reduce((o,a)=>{if(t&&!Ty(a)&&a.as==="script"&&a.href&&r.has(a.href))return o;let l=JSON.stringify(Iy(a));return n.has(l)||(n.add(l),o.push({key:l,link:a})),o},[])}function jp(){let e=J.useContext(Fn);return ru(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Hy(){let e=J.useContext(Sr);return ru(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ro=J.createContext(void 0);Ro.displayName="FrameworkContext";function Ap(){let e=J.useContext(Ro);return ru(e,"You must render this element inside a <HydratedRouter> element"),e}function By(e,t){let n=J.useContext(Ro),[r,o]=J.useState(!1),[a,i]=J.useState(!1),{onFocus:l,onBlur:s,onMouseEnter:u,onMouseLeave:f,onTouchStart:d}=t,m=J.useRef(null);J.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let y=p=>{p.forEach(c=>{i(c.isIntersecting)})},S=new IntersectionObserver(y,{threshold:.5});return m.current&&S.observe(m.current),()=>{S.disconnect()}}},[e]),J.useEffect(()=>{if(r){let y=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(y)}}},[r]);let v=()=>{o(!0)},g=()=>{o(!1),i(!1)};return n?e!=="intent"?[a,m,{}]:[a,m,{onFocus:ko(l,v),onBlur:ko(s,g),onMouseEnter:ko(u,v),onMouseLeave:ko(f,g),onTouchStart:ko(d,v)}]:[!1,m,{}]}function ko(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function $p({page:e,...t}){let{router:n}=jp(),r=J.useMemo(()=>Ks(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?J.createElement(Vy,{page:e,matches:r,...t}):null}function Wy(e){let{manifest:t,routeModules:n}=Ap(),[r,o]=J.useState([]);return J.useEffect(()=>{let a=!1;return Fy(e,t,n).then(i=>{a||o(i)}),()=>{a=!0}},[e,t,n]),r}function Vy({page:e,matches:t,...n}){let r=rt(),{future:o,manifest:a,routeModules:i}=Ap(),{basename:l}=jp(),{loaderData:s,matches:u}=Hy(),f=J.useMemo(()=>pp(e,t,u,a,r,"data"),[e,t,u,a,r]),d=J.useMemo(()=>pp(e,t,u,a,r,"assets"),[e,t,u,a,r]),m=J.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let y=new Set,S=!1;if(t.forEach(c=>{let h=a.routes[c.route.id];!h||!h.hasLoader||(!f.some(x=>x.route.id===c.route.id)&&c.route.id in s&&i[c.route.id]?.shouldRevalidate||h.hasClientLoader?S=!0:y.add(c.route.id))}),y.size===0)return[];let p=Ly(e,l,o.unstable_trailingSlashAwareDataRequests,"data");return S&&y.size>0&&p.searchParams.set("_routes",t.filter(c=>y.has(c.route.id)).map(c=>c.route.id).join(",")),[p.pathname+p.search]},[l,o.unstable_trailingSlashAwareDataRequests,s,r,a,f,t,e,i]),v=J.useMemo(()=>My(d,a),[d,a]),g=Wy(d);return J.createElement(J.Fragment,null,m.map(y=>J.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...n})),v.map(y=>J.createElement("link",{key:y,rel:"modulepreload",href:y,...n})),g.map(({key:y,link:S})=>J.createElement("link",{key:y,nonce:n.nonce,...S})))}function Yy(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Qy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Qy&&(window.__reactRouterVersion="7.12.0")}catch{}function ou({basename:e,children:t,unstable_useTransitions:n,window:r}){let o=T.useRef();o.current==null&&(o.current=mp({window:r,v5Compat:!0}));let a=o.current,[i,l]=T.useState({action:a.action,location:a.location}),s=T.useCallback(u=>{n===!1?l(u):T.startTransition(()=>l(u))},[n]);return T.useLayoutEffect(()=>a.listen(s),[a,s]),T.createElement(tu,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a,unstable_useTransitions:n})}function Up({basename:e,children:t,history:n,unstable_useTransitions:r}){let[o,a]=T.useState({action:n.action,location:n.location}),i=T.useCallback(l=>{r===!1?a(l):T.startTransition(()=>a(l))},[r]);return T.useLayoutEffect(()=>n.listen(i),[n,i]),T.createElement(tu,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:n,unstable_useTransitions:r})}Up.displayName="unstable_HistoryRouter";var Hp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cn=T.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:a,replace:i,state:l,target:s,to:u,preventScrollReset:f,viewTransition:d,unstable_defaultShouldRevalidate:m,...v},g){let{basename:y,unstable_useTransitions:S}=T.useContext(Fe),p=typeof u=="string"&&Hp.test(u),c=kp(u,y);u=c.to;let h=Rp(u,{relative:o}),[x,w,k]=By(r,v),C=Yp(u,{replace:i,state:l,target:s,preventScrollReset:f,relative:o,viewTransition:d,unstable_defaultShouldRevalidate:m,unstable_useTransitions:S});function P(z){t&&t(z),z.defaultPrevented||C(z)}let V=T.createElement("a",{...v,...k,href:c.absoluteURL||h,onClick:c.isExternal||a?t:P,ref:Yy(g,w),target:s,"data-discover":!p&&n==="render"?"true":void 0});return x&&!p?T.createElement(T.Fragment,null,V,T.createElement($p,{page:h})):V});cn.displayName="Link";var dn=T.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:a,to:i,viewTransition:l,children:s,...u},f){let d=kr(i,{relative:u.relative}),m=rt(),v=T.useContext(Sr),{navigator:g,basename:y}=T.useContext(Fe),S=v!=null&&Gp(d)&&l===!0,p=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,c=m.pathname,h=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;n||(c=c.toLowerCase(),h=h?h.toLowerCase():null,p=p.toLowerCase()),h&&y&&(h=Et(h,y)||h);let x=p!=="/"&&p.endsWith("/")?p.length-1:p.length,w=c===p||!o&&c.startsWith(p)&&c.charAt(x)==="/",k=h!=null&&(h===p||!o&&h.startsWith(p)&&h.charAt(p.length)==="/"),C={isActive:w,isPending:k,isTransitioning:S},P=w?t:void 0,V;typeof r=="function"?V=r(C):V=[r,w?"active":null,k?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let z=typeof a=="function"?a(C):a;return T.createElement(cn,{...u,"aria-current":P,className:V,ref:f,style:z,to:i,viewTransition:l},typeof s=="function"?s(C):s)});dn.displayName="NavLink";var Bp=T.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:a,method:i=ui,action:l,onSubmit:s,relative:u,preventScrollReset:f,viewTransition:d,unstable_defaultShouldRevalidate:m,...v},g)=>{let{unstable_useTransitions:y}=T.useContext(Fe),S=Qp(),p=Kp(l,{relative:u}),c=i.toLowerCase()==="get"?"get":"post",h=typeof l=="string"&&Hp.test(l);return T.createElement("form",{ref:g,method:c,action:p,onSubmit:r?s:w=>{if(s&&s(w),w.defaultPrevented)return;w.preventDefault();let k=w.nativeEvent.submitter,C=k?.getAttribute("formmethod")||i,P=()=>S(k||w.currentTarget,{fetcherKey:t,method:C,navigate:n,replace:o,state:a,relative:u,preventScrollReset:f,viewTransition:d,unstable_defaultShouldRevalidate:m});y&&n!==!1?T.startTransition(()=>P()):P()},...v,"data-discover":!h&&e==="render"?"true":void 0})});Bp.displayName="Form";function Wp({getKey:e,storageKey:t,...n}){let r=T.useContext(Ro),{basename:o}=T.useContext(Fe),a=rt(),i=eu();Jp({getKey:e,storageKey:t});let l=T.useMemo(()=>{if(!r||!e)return null;let u=Qs(a,i,o,e);return u!==a.key?u:null},[]);if(!r||r.isSpaMode)return null;let s=((u,f)=>{if(!window.history.state||!window.history.state.key){let d=Math.random().toString(32).slice(2);window.history.replaceState({key:d},"")}try{let m=JSON.parse(sessionStorage.getItem(u)||"{}")[f||window.history.state.key];typeof m=="number"&&window.scrollTo(0,m)}catch(d){console.error(d),sessionStorage.removeItem(u)}}).toString();return T.createElement("script",{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${s})(${fp(JSON.stringify(t||Ys))}, ${fp(JSON.stringify(l))})`}})}Wp.displayName="ScrollRestoration";function Vp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function au(e){let t=T.useContext(Fn);return re(t,Vp(e)),t}function Ky(e){let t=T.useContext(Sr);return re(t,Vp(e)),t}function Yp(e,{target:t,replace:n,state:r,preventScrollReset:o,relative:a,viewTransition:i,unstable_defaultShouldRevalidate:l,unstable_useTransitions:s}={}){let u=ot(),f=rt(),d=kr(e,{relative:a});return T.useCallback(m=>{if(ky(m,t)){m.preventDefault();let v=n!==void 0?n:xr(f)===xr(d),g=()=>u(e,{replace:v,state:r,preventScrollReset:o,relative:a,viewTransition:i,unstable_defaultShouldRevalidate:l});s?T.startTransition(()=>g()):g()}},[f,u,d,n,r,t,e,o,a,i,l,s])}var Jy=0,Gy=()=>`__${String(++Jy)}__`;function Qp(){let{router:e}=au("useSubmit"),{basename:t}=T.useContext(Fe),n=vy(),r=e.fetch,o=e.navigate;return T.useCallback(async(a,i={})=>{let{action:l,method:s,encType:u,formData:f,body:d}=Ny(a,t);if(i.navigate===!1){let m=i.fetcherKey||Gy();await r(m,n,i.action||l,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:f,body:d,formMethod:i.method||s,formEncType:i.encType||u,flushSync:i.flushSync})}else await o(i.action||l,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:f,body:d,formMethod:i.method||s,formEncType:i.encType||u,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[r,o,t,n])}function Kp(e,{relative:t}={}){let{basename:n}=T.useContext(Fe),r=T.useContext(mt);re(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),a={...kr(e||".",{relative:t})},i=rt();if(e==null){a.search=i.search;let l=new URLSearchParams(a.search),s=l.getAll("index");if(s.some(f=>f==="")){l.delete("index"),s.filter(d=>d).forEach(d=>l.append("index",d));let f=l.toString();a.search=f?`?${f}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:It([n,a.pathname])),xr(a)}var Ys="react-router-scroll-positions",si={};function Qs(e,t,n,r){let o=null;return r&&(n!=="/"?o=r({...e,pathname:Et(e.pathname,n)||e.pathname},t):o=r(e,t)),o==null&&(o=e.key),o}function Jp({getKey:e,storageKey:t}={}){let{router:n}=au("useScrollRestoration"),{restoreScrollPosition:r,preventScrollReset:o}=Ky("useScrollRestoration"),{basename:a}=T.useContext(Fe),i=rt(),l=eu(),s=Fp();T.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),Xy(T.useCallback(()=>{if(s.state==="idle"){let u=Qs(i,l,a,e);si[u]=window.scrollY}try{sessionStorage.setItem(t||Ys,JSON.stringify(si))}catch(u){Qe(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`)}window.history.scrollRestoration="auto"},[s.state,e,a,i,l,t])),typeof document<"u"&&(T.useLayoutEffect(()=>{try{let u=sessionStorage.getItem(t||Ys);u&&(si=JSON.parse(u))}catch{}},[t]),T.useLayoutEffect(()=>{let u=n?.enableScrollRestoration(si,()=>window.scrollY,e?(f,d)=>Qs(f,d,a,e):void 0);return()=>u&&u()},[n,a,e]),T.useLayoutEffect(()=>{if(r!==!1){if(typeof r=="number"){window.scrollTo(0,r);return}try{if(i.hash){let u=document.getElementById(decodeURIComponent(i.hash.slice(1)));if(u){u.scrollIntoView();return}}}catch{Qe(!1,`"${i.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}o!==!0&&window.scrollTo(0,0)}},[i,r,o]))}function Xy(e,t){let{capture:n}=t||{};T.useEffect(()=>{let r=n!=null?{capture:n}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,n])}function Gp(e,{relative:t}={}){let n=T.useContext(Js);re(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=au("useViewTransitionState"),o=kr(e,{relative:t});if(!n.isTransitioning)return!1;let a=Et(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=Et(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Co(o.pathname,i)!=null||Co(o.pathname,a)!=null}(function(){if(!document.getElementById("c62a888d9d62ae4e611fb1f1c11ec20b6be422d570d7e237577771d161e51220")){var e=document.createElement("style");e.id="c62a888d9d62ae4e611fb1f1c11ec20b6be422d570d7e237577771d161e51220",e.textContent=`/* GLOBAL RESET */
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
`,document.head.appendChild(e)}})();var E=A(j());(function(){if(!document.getElementById("4df30cd10977c3dd4650bf5d8f8871fd499bde96b99924c59d53e648c4d93705")){var e=document.createElement("style");e.id="4df30cd10977c3dd4650bf5d8f8871fd499bde96b99924c59d53e648c4d93705",e.textContent=`.company-website {
  min-height: 100vh;
  background: #f8f9fa;
}

/* Loading & Error States */
.website-loading,
.website-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4a90e2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Hero Section */
.hero-section {
  height: 500px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: white;
  z-index: 1;
}

.company-logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 4px solid white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.company-name {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.tagline {
  font-size: 20px;
  margin: 0 0 30px 0;
  opacity: 0.95;
}

.cta-button {
  background: white;
  color: #667eea;
  border: none;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Sections */
section {
  padding: 80px 0;
}

section h2 {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 50px 0;
  color: #333;
}

/* About Section */
.about-section {
  background: white;
}

.about-description {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.contact-item {
  display: flex;
  gap: 12px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
}

.contact-item .icon {
  font-size: 24px;
  flex-shrink: 0;
}

.contact-item strong {
  display: block;
  margin-bottom: 4px;
  color: #333;
}

.contact-item p {
  margin: 0;
  color: #666;
}

.contact-item a {
  color: #4a90e2;
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}

/* Gallery Section */
.gallery-section {
  background: #f8f9fa;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.photo-item {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.photo-item:hover {
  transform: translateY(-4px);
}

.photo-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.photo-caption {
  padding: 12px;
  background: white;
  margin: 0;
  font-size: 14px;
  color: #666;
}

/* Services Section */
.services-section {
  background: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.service-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  border: 1px solid #e9ecef;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 12px;
}

.service-header h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.service-price {
  font-size: 24px;
  font-weight: 700;
  color: #4a90e2;
}

.service-description {
  color: #666;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.service-footer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
  font-size: 14px;
  color: #888;
}

.book-button {
  width: 100%;
  background: #4a90e2;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.book-button:hover {
  background: #357abd;
}

.no-services {
  text-align: center;
  color: #999;
  font-size: 18px;
}

/* Team Section */
.team-section {
  background: #f8f9fa;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
}

.team-member {
  background: white;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.member-avatar {
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
}

.team-member h3 {
  margin: 0 0 8px 0;
  font-size: 20px;
  color: #333;
}

.member-bio {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.member-services {
  text-align: left;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
}

.member-services strong {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-size: 14px;
}

.member-services ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.member-services li {
  padding: 4px 0;
  color: #666;
  font-size: 14px;
}

.member-services li:before {
  content: "\u2022 ";
  color: #4a90e2;
  font-weight: bold;
  margin-right: 6px;
}

/* Footer */
.website-footer {
  background: #2c3e50;
  color: white;
  padding: 30px 0;
  text-align: center;
}

.website-footer p {
  margin: 0;
}

/* Booking Modal (Placeholder) */
.booking-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.booking-modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 500px;
  width: 90%;
  text-align: center;
}

.booking-modal h3 {
  margin: 0 0 16px 0;
}

.booking-modal button {
  margin-top: 20px;
  background: #4a90e2;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  .company-name {
    font-size: 32px;
  }

  section h2 {
    font-size: 28px;
  }

  .services-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }
}
`,document.head.appendChild(e)}})();function iu(){let{companyName:e}=_o(),[t,n]=(0,E.useState)(null),[r,o]=(0,E.useState)(!0),[a,i]=(0,E.useState)(null),[l,s]=(0,E.useState)(null);return(0,E.useEffect)(()=>{e&&(async()=>{try{o(!0);let f=await fetch(`/api/companies/${e}`);if(!f.ok)throw new Error("Company not found");let d=await f.json();n(d)}catch(f){i(f.message)}finally{o(!1)}})()},[e]),r?E.default.createElement("div",{className:"website-loading"},E.default.createElement("div",{className:"spinner"}),E.default.createElement("p",null,"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F...")):a?E.default.createElement("div",{className:"website-error"},E.default.createElement("h2",null,"\u{1F614} \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"),E.default.createElement("p",null,a)):t?E.default.createElement("div",{className:"company-website"},E.default.createElement("section",{className:"hero-section"},E.default.createElement("div",{className:"hero-overlay"},E.default.createElement("div",{className:"hero-content"},t.logo&&E.default.createElement("img",{src:t.logo,alt:t.name,className:"company-logo"}),E.default.createElement("h1",{className:"company-name"},t.name),t.tagline&&E.default.createElement("p",{className:"tagline"},t.tagline),E.default.createElement("button",{className:"cta-button",onClick:()=>{document.getElementById("services").scrollIntoView({behavior:"smooth"})}},"\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0438")))),E.default.createElement("section",{id:"about",className:"about-section"},E.default.createElement("div",{className:"container"},E.default.createElement("h2",null,"\u041F\u0440\u043E \u043D\u0430\u0441"),E.default.createElement("p",{className:"about-description"},t.description||"\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457!"),t.address&&E.default.createElement("div",{className:"contact-info"},E.default.createElement("div",{className:"contact-item"},E.default.createElement("span",{className:"icon"},"\u{1F4CD}"),E.default.createElement("div",null,E.default.createElement("strong",null,"\u0410\u0434\u0440\u0435\u0441\u0430:"),E.default.createElement("p",null,t.address.street_line1,t.address.street_line2&&`, ${t.address.street_line2}`,E.default.createElement("br",null),t.address.city,", ",t.address.region," ",t.address.postal,E.default.createElement("br",null),t.address.country))),t.phone&&E.default.createElement("div",{className:"contact-item"},E.default.createElement("span",{className:"icon"},"\u{1F4DE}"),E.default.createElement("div",null,E.default.createElement("strong",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"),E.default.createElement("p",null,E.default.createElement("a",{href:`tel:${t.phone}`},t.phone)))),t.email&&E.default.createElement("div",{className:"contact-item"},E.default.createElement("span",{className:"icon"},"\u2709\uFE0F"),E.default.createElement("div",null,E.default.createElement("strong",null,"Email:"),E.default.createElement("p",null,E.default.createElement("a",{href:`mailto:${t.email}`},t.email)))),t.website&&E.default.createElement("div",{className:"contact-item"},E.default.createElement("span",{className:"icon"},"\u{1F310}"),E.default.createElement("div",null,E.default.createElement("strong",null,"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442:"),E.default.createElement("p",null,E.default.createElement("a",{href:t.website,target:"_blank",rel:"noopener noreferrer"},t.website))))))),t.photos&&t.photos.length>0&&E.default.createElement("section",{id:"gallery",className:"gallery-section"},E.default.createElement("div",{className:"container"},E.default.createElement("h2",null,"\u0413\u0430\u043B\u0435\u0440\u0435\u044F"),E.default.createElement("div",{className:"photo-grid"},t.photos.map((u,f)=>E.default.createElement("div",{key:f,className:"photo-item"},E.default.createElement("img",{src:u.url,alt:u.caption||`Photo ${f+1}`}),u.caption&&E.default.createElement("p",{className:"photo-caption"},u.caption)))))),E.default.createElement("section",{id:"services",className:"services-section"},E.default.createElement("div",{className:"container"},E.default.createElement("h2",null,"\u041D\u0430\u0448\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438"),t.employees&&t.employees.length>0?E.default.createElement("div",{className:"services-grid"},t.employees.flatMap(u=>u.services?.map(f=>({...f,employeeName:`${u.first_name} ${u.last_name}`}))||[]).map((u,f)=>E.default.createElement("div",{key:f,className:"service-card"},E.default.createElement("div",{className:"service-header"},E.default.createElement("h3",null,u.name),E.default.createElement("span",{className:"service-price"},u.price," \u0433\u0440\u043D")),E.default.createElement("p",{className:"service-description"},u.description),E.default.createElement("div",{className:"service-footer"},E.default.createElement("span",{className:"service-duration"},"\u23F1\uFE0F ",u.duration," \u0445\u0432"),E.default.createElement("span",{className:"service-provider"},"\u{1F464} ",u.employeeName)),E.default.createElement("button",{className:"book-button",onClick:()=>s(u)},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F")))):E.default.createElement("p",{className:"no-services"},"\u041D\u0430\u0440\u0430\u0437\u0456 \u043D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u043F\u043E\u0441\u043B\u0443\u0433"))),t.employees&&t.employees.length>0&&E.default.createElement("section",{id:"team",className:"team-section"},E.default.createElement("div",{className:"container"},E.default.createElement("h2",null,"\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430"),E.default.createElement("div",{className:"team-grid"},t.employees.map(u=>E.default.createElement("div",{key:u.id,className:"team-member"},E.default.createElement("div",{className:"member-avatar"},u.photo?E.default.createElement("img",{src:u.photo,alt:`${u.first_name} ${u.last_name}`}):E.default.createElement("div",{className:"avatar-placeholder"},u.first_name[0],u.last_name[0])),E.default.createElement("h3",null,u.first_name," ",u.last_name),u.description&&E.default.createElement("p",{className:"member-bio"},u.description),u.services&&u.services.length>0&&E.default.createElement("div",{className:"member-services"},E.default.createElement("strong",null,"\u041F\u043E\u0441\u043B\u0443\u0433\u0438:"),E.default.createElement("ul",null,u.services.map((f,d)=>E.default.createElement("li",{key:d},f.name))))))))),E.default.createElement("footer",{className:"website-footer"},E.default.createElement("div",{className:"container"},E.default.createElement("p",null,"\xA9 ",new Date().getFullYear()," ",t.name,". \u0412\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u043E."))),l&&E.default.createElement("div",{className:"booking-modal-overlay",onClick:()=>s(null)},E.default.createElement("div",{className:"booking-modal",onClick:u=>u.stopPropagation()},E.default.createElement("h3",null,"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 ",l.name),E.default.createElement("p",null,"\u0424\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u0435 \u0434\u043E\u0434\u0430\u043D\u0438\u0439 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u043C \u043A\u0440\u043E\u043A\u043E\u043C"),E.default.createElement("button",{onClick:()=>s(null)},"\u0417\u0430\u043A\u0440\u0438\u0442\u0438")))):null}var ee=A(j());var B=A(j());(function(){if(!document.getElementById("359a90f8c729210dbbfb096928392417ed7d6dd27b14727501cfa65f4edc30ad")){var e=document.createElement("style");e.id="359a90f8c729210dbbfb096928392417ed7d6dd27b14727501cfa65f4edc30ad",e.textContent=`.form__error {
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
`,document.head.appendChild(e)}})();function Po({company:e,onSave:t,onCancel:n,isModal:r=!1}){let o=ot(),[a,i]=(0,B.useState)({name:"",email:"",website:"",phone:"",description:"",city:"",country:"",postal:"",region:"",street_line1:"",street_line2:""}),[l,s]=(0,B.useState)({});(0,B.useEffect)(()=>{e&&i({name:e.name||"",email:e.email||"",website:e.website||"",phone:e.phone||"",description:e.description||"",city:e.address?.city||"",country:e.address?.country||"",postal:e.address?.postal||"",region:e.address?.region||"",street_line1:e.address?.street_line1||"",street_line2:e.address?.street_line2||""})},[e]);let u=m=>{i({...a,[m.target.name]:m.target.value}),s(v=>({...v,[m.target.name]:null}))},f=async m=>{m.preventDefault();let v={company:{name:a.name,email:a.email,website:a.website,phone:a.phone,description:a.description},address:{city:a.city,country:a.country,postal:a.postal,region:a.region,street_line1:a.street_line1,street_line2:a.street_line2}},g=e?`/api/companies/${e.id}`:"/api/companies",S=await fetch(g,{method:e?"PUT":"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}),p=await S.json();S.ok?r&&t?t(p):o(`/companies/${p.id}/dashboard`):s(p.errors||{})},d=m=>l[m]?.message;return B.default.createElement("div",{className:r?"company-form-modal":"company-form container"},B.default.createElement("h1",null,e?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E"),B.default.createElement("form",{onSubmit:f},B.default.createElement("p",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),d("name")&&B.default.createElement("div",{className:"field-error"},d("name")),B.default.createElement("input",{name:"name",value:a.name,onChange:u,placeholder:"\u041D\u0430\u0437\u0432\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457"}),d("email")&&B.default.createElement("div",{className:"field-error"},d("email")),B.default.createElement("input",{name:"email",value:a.email,onChange:u,placeholder:"Email"}),d("website")&&B.default.createElement("div",{className:"field-error"},d("website")),B.default.createElement("input",{name:"website",value:a.website,onChange:u,placeholder:"\u0412\u0435\u0431 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430"}),d("phone")&&B.default.createElement("div",{className:"field-error"},d("phone")),B.default.createElement("input",{name:"phone",value:a.phone,onChange:u,placeholder:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"}),d("description")&&B.default.createElement("div",{className:"field-error"},d("description")),B.default.createElement("textarea",{name:"description",value:a.description,onChange:u,placeholder:"\u041E\u043F\u0438\u0441 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456"}),B.default.createElement("p",null,"\u0410\u0434\u0440\u0435\u0441\u0430"),d("city")&&B.default.createElement("div",{className:"field-error"},d("city")),B.default.createElement("input",{name:"city",value:a.city,onChange:u,placeholder:"\u041C\u0456\u0441\u0442\u043E"}),d("country")&&B.default.createElement("div",{className:"field-error"},d("country")),B.default.createElement("input",{name:"country",value:a.country,onChange:u,placeholder:"\u041A\u0440\u0430\u0457\u043D\u0430"}),d("postal")&&B.default.createElement("div",{className:"field-error"},d("postal")),B.default.createElement("input",{name:"postal",value:a.postal,onChange:u,placeholder:"\u041F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441"}),d("region")&&B.default.createElement("div",{className:"field-error"},d("region")),B.default.createElement("input",{name:"region",value:a.region,onChange:u,placeholder:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C"}),d("street_line1")&&B.default.createElement("div",{className:"field-error"},d("street_line1")),B.default.createElement("input",{name:"street_line1",value:a.street_line1,onChange:u,placeholder:"\u0410\u0434\u0440\u0435\u0441\u0430 1"}),d("street_line2")&&B.default.createElement("div",{className:"field-error"},d("street_line2")),B.default.createElement("input",{name:"street_line2",value:a.street_line2,onChange:u,placeholder:"\u0410\u0434\u0440\u0435\u0441\u0430 2"}),B.default.createElement("div",{className:"form-actions"},r&&n&&B.default.createElement("button",{type:"button",onClick:n},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),B.default.createElement("button",{type:"submit"},e?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E"))))}var X=A(j());function Cr({role:e,employee:t,onSave:n,onCancel:r,isModal:o=!1}){let a=ot(),[i,l]=(0,X.useState)({first_name:"",last_name:"",description:"",email:"",phone:"",password:"",role:e==="admin"?1:0}),[s,u]=(0,X.useState)({});(0,X.useEffect)(()=>{t&&l({first_name:t.first_name||"",last_name:t.last_name||"",description:t.description||"",email:t.email||"",phone:t.phone||"",password:"",role:t.role??(e==="admin"?1:0)})},[t,e]);let f=v=>{let g=v.target.name==="role"?parseInt(v.target.value):v.target.value;l({...i,[v.target.name]:g}),u(y=>({...y,[v.target.name]:null}))},d=async v=>{v.preventDefault();let g={employee:{first_name:i.first_name,last_name:i.last_name,description:i.description,email:i.email,phone:i.phone,role:i.role}};i.password&&(g.employee.password=i.password);let y=t?`/api/employees/${t.id}`:"/api/employees",p=await fetch(y,{method:t?"PUT":"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(p.ok){let c=await p.json();o&&n?n(c):a("/companies/welcome")}else{let c=await p.json();u(c.errors||{})}},m=v=>s[v]?.message;return X.default.createElement("div",{className:o?"employee-form-modal":"employee-form container"},X.default.createElement("h1",null,t?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"," ",i.role===1?"\u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430":"\u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),X.default.createElement("form",{onSubmit:d},m("first_name")&&X.default.createElement("div",{className:"field-error"},m("first_name")),X.default.createElement("input",{name:"first_name",value:i.first_name,onChange:f,placeholder:"\u0406\u043C\u02BC\u044F"}),m("last_name")&&X.default.createElement("div",{className:"field-error"},m("last_name")),X.default.createElement("input",{name:"last_name",value:i.last_name,onChange:f,placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),m("email")&&X.default.createElement("div",{className:"field-error"},m("email")),X.default.createElement("input",{name:"email",type:"email",value:i.email,onChange:f,placeholder:"Email"}),m("phone")&&X.default.createElement("div",{className:"field-error"},m("phone")),X.default.createElement("input",{name:"phone",value:i.phone,onChange:f,placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),m("password")&&X.default.createElement("div",{className:"field-error"},m("password")),X.default.createElement("input",{name:"password",type:"password",value:i.password,onChange:f,placeholder:t?"\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u0437\u0430\u043B\u0438\u0448\u0442\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u043C, \u0449\u043E\u0431 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438)":"\u041F\u0430\u0440\u043E\u043B\u044C",required:!t}),m("description")&&X.default.createElement("div",{className:"field-error"},m("description")),X.default.createElement("textarea",{name:"description",value:i.description,onChange:f,placeholder:"\u041E\u043F\u0438\u0441"}),m("role")&&X.default.createElement("div",{className:"field-error"},m("role")),X.default.createElement("label",{htmlFor:"role"},"\u0420\u043E\u043B\u044C"),X.default.createElement("select",{id:"role",name:"role",value:i.role,onChange:f,required:!0},X.default.createElement("option",{value:0},"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A"),X.default.createElement("option",{value:1},"\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440")),X.default.createElement("div",{className:"form-actions"},o&&r&&X.default.createElement("button",{type:"button",onClick:r},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),X.default.createElement("button",{type:"submit"},t?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"))))}var bt=A(j());(function(){if(!document.getElementById("b9644920dd4b82f30f246dfd1f69aee7bf9f5599fdae5c8b8a399e9acdd67c6f")){var e=document.createElement("style");e.id="b9644920dd4b82f30f246dfd1f69aee7bf9f5599fdae5c8b8a399e9acdd67c6f",e.textContent=`.login {
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
`,document.head.appendChild(e)}})();function Lo(){let[e,t]=(0,bt.useState)(""),n=ot();async function r(o){o.preventDefault(),t("");let a=o.target.email.value,i=o.target.password.value;try{let l=await fetch("/api/employees/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:i})});if(!l.ok){t("\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 email \u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C");return}let s=await l.json();console.log(s.company_id),s.company_id?n(`/companies/${s.company_id}/dashboard`):n("/companies/new")}catch(l){console.error(l),t("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u2019\u0454\u0434\u043D\u0430\u043D\u043D\u044F \u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C")}}return bt.default.createElement("div",{className:"login container"},bt.default.createElement("h1",{className:"login__title"},"\u0412\u0445\u0456\u0434"),e&&bt.default.createElement("div",{className:"login__error"},e),bt.default.createElement("form",{className:"login__form",onSubmit:r},bt.default.createElement("input",{type:"email",placeholder:"Email",name:"email",required:!0}),bt.default.createElement("input",{type:"password",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",name:"password",required:!0}),bt.default.createElement("button",{type:"submit",className:"btn"},"\u0423\u0432\u0456\u0439\u0442\u0438")))}var lu=A(j());function su(){return lu.default.createElement("div",null,lu.default.createElement("h1",null,"404 CompanyNotFound"))}var Re=A(j());var jt=A(j());(function(){if(!document.getElementById("a127da0de2169adcba038b037c01109c27901a050a4a9ac5b50bf49ff645976e")){var e=document.createElement("style");e.id="a127da0de2169adcba038b037c01109c27901a050a4a9ac5b50bf49ff645976e",e.textContent=`.sidebar {
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
`,document.head.appendChild(e)}})();function uu({companyName:e,id:t}){return jt.default.createElement("aside",{className:"sidebar"},jt.default.createElement("h2",{className:"sidebar__logo"},e),jt.default.createElement("nav",{className:"sidebar__nav"},jt.default.createElement(dn,{to:`/companies/${t}/dashboard`},"Dashboard"),jt.default.createElement(dn,{to:`/companies/${t}/employees`},"Employees"),jt.default.createElement(dn,{to:`/companies/${t}/clients`},"Clients"),jt.default.createElement(dn,{to:`/companies/${t}/edit`},"Company"),jt.default.createElement(dn,{to:`/companies/${t}/settings`},"Settings")))}var Mn=A(j());(function(){if(!document.getElementById("a675d0013b35ba43c4e7f713f899b0aef50b34428c621f79aafe309f9d5b2c29")){var e=document.createElement("style");e.id="a675d0013b35ba43c4e7f713f899b0aef50b34428c621f79aafe309f9d5b2c29",e.textContent=`/* TopBar container */
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
`,document.head.appendChild(e)}})();function cu({userName:e}){return Mn.default.createElement("header",{className:"topbar"},Mn.default.createElement("div",{className:"topbar__left"},Mn.default.createElement("h1",null,e)),Mn.default.createElement("div",{className:"topbar__right"},Mn.default.createElement("span",{className:"topbar__user"}),Mn.default.createElement("button",{onClick:async()=>{await fetch("/api/employees/logout",{method:"POST",credentials:"include"}),window.location.href="/companies/welcome"},className:"logout-btn"},"Logout")))}var I=A(j());var At=A(j());function pi({timeSlot:e}){let t=s=>s instanceof Date?s:new Date(s),n=t(e.start_time),r=t(e.end_time),o=(r-n)/(1e3*60*60),a=(r-n)/(1e3*60),i=n.getMinutes(),l=e.client?.first_name;return At.default.createElement("div",{className:`time-slot-block ${e.state}`,style:{position:"absolute",top:`${i/60*100}%`,height:`${o*100}%`,left:0,right:0}},l?At.default.createElement(At.default.Fragment,null,At.default.createElement("div",{className:"client-name"},l),At.default.createElement("div",{className:"time-label"},e.service_name," (",a," min)")):At.default.createElement(At.default.Fragment,null,At.default.createElement("div",null,e.state)))}var Je=A(j()),tm=A(j());var qp=Array.from({length:24},(e,t)=>t),ht=e=>e?new Date(e.replace(" ","T").replace(" -","-")):null,kt=e=>{if(!e)return null;let t=n=>String(n).padStart(2,"0");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":00"},Do=(e,t)=>{let n=zn(e);return t.filter(r=>{let o=_r(r?.effective_date),a=_r(r?.end_date);return!(o&&o>n||a&&a<n)}).sort((r,o)=>_r(o?.effective_date)-_r(r?.effective_date))[0]||null},To=(e,t,n,r)=>e<r&&n<t;var zn=e=>{let t=new Date(e);return t.setHours(0,0,0,0),t},In=(e,t,n)=>{let r=new Date(e);return r.setHours(t,n,0,0),r},fn=(e,t)=>{let n=new Date(e);return n.setDate(n.getDate()+t),n},mi=e=>e?ht(e).getHours():null,Zy=(e,t=[])=>{if(!t.length)return!1;let r=(e.getDay()+6)%7;return t.includes(r)},Zp=(e,t,n)=>e>=t&&e<n;var jn=(e,t)=>new Date(e.getTime()+t*60*1e3);var _r=e=>{if(!e)return null;let[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)},qy=({day:e,hour:t,window:n})=>{if(!n||e<zn(new Date))return!1;let r=_r(n.effective_date),o=_r(n.end_date);if(r&&r>e||o&&o<e||Zy(e,n.weekends))return!1;let a=mi(n.start_time),i=mi(n.end_time);if(!Zp(t,a,i))return!1;let l=mi(n.break_from),s=mi(n.break_to);return!Zp(t,l,s)},em=({day:e,hour:t,windows:n})=>{let r=Do(e,n);return r?qy({day:e,hour:t,window:r}):!1};var pn=e=>{if(!e)return"";let t=new Date(e);return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`},mn=(e,t)=>{let[n,r]=t.split(":").map(Number),o=new Date(e);return o.setHours(n,r,0,0),kt(o)};var M=A(j());var hn=A(j());(function(){if(!document.getElementById("016eff5b894d8467c8ab482e5e63306ffab800f5cd19b0509fbb6548608fa56e")){var e=document.createElement("style");e.id="016eff5b894d8467c8ab482e5e63306ffab800f5cd19b0509fbb6548608fa56e",e.textContent=`.confirm-overlay {
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
`,document.head.appendChild(e)}})();function Oo({open:e,title:t="Are you sure?",message:n="This action cannot be undone.",confirmText:r="Yes",cancelText:o="Cancel",onConfirm:a,onCancel:i}){return e?hn.default.createElement("div",{className:"confirm-overlay",onClick:i},hn.default.createElement("div",{className:"confirm-modal",onClick:l=>l.stopPropagation()},hn.default.createElement("h3",null,t),hn.default.createElement("p",null,n),hn.default.createElement("div",{className:"confirm-actions"},hn.default.createElement("button",{className:"btn cancel",onClick:i},o),hn.default.createElement("button",{className:"btn danger",onClick:a},r)))):null}(function(){if(!document.getElementById("98b4fbe3096ef325ff4a3b26beed9b76a8283f32b9e9e50a08673263ce04bde0")){var e=document.createElement("style");e.id="98b4fbe3096ef325ff4a3b26beed9b76a8283f32b9e9e50a08673263ce04bde0",e.textContent=`.weekday-grid {
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
`,document.head.appendChild(e)}})();function Fo({open:e,employee:t,window:n,onClose:r,onSaved:o}){let[a,i]=(0,M.useState)({start_time:"",end_time:"",break_from:"",break_to:"",weekends:[],effective_date:new Date().toISOString().slice(0,10),end_date:""}),[l,s]=(0,M.useState)(!1),[u,f]=(0,M.useState)(null),[d,m]=(0,M.useState)(null),v=[{id:0,label:"\u041F\u043D"},{id:1,label:"\u0412\u0442"},{id:2,label:"\u0421\u0440"},{id:3,label:"\u0427\u0442"},{id:4,label:"\u041F\u0442"},{id:5,label:"\u0421\u0431"},{id:6,label:"\u041D\u0434"}],[g,y]=(0,M.useState)(!1),[S,p]=(0,M.useState)({effective_date:"",end_date:""});(0,M.useEffect)(()=>{e&&(n?(i({start_time:n.start_time||"",end_time:n.end_time||"",break_from:n.break_from||"",break_to:n.break_to||"",weekends:Array.isArray(n.weekends)?n.weekends:[],effective_date:n.effective_date||"",end_date:n.end_date||""}),p({effective_date:n.effective_date?.slice(0,10)||"",end_date:n.end_date?.slice(0,10)||""})):i(c))},[n,e]);let c={start_time:"",end_time:"",break_from:"",break_to:"",weekends:[],effective_date:new Date().toISOString().slice(0,10),end_date:""};if((0,M.useEffect)(()=>{f(null),m(null)},[e,n]),!e)return null;let h=async()=>{s(!0),f(null);let w={...a,employee_id:t.id,id:n?.id};try{let k=await fetch("/api/windows/upsert",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)});if(!k.ok)throw new Error(await k.text());let C=await k.json();m(n?"\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E":"\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E"),setTimeout(()=>{m(null),o(C),r()},800)}catch(k){f(k.message||"Failed to save window")}finally{s(!1)}},x=async()=>{if(n)try{let w=await fetch(`/api/windows/${n.id}`,{method:"DELETE",credentials:"include"});if(!w.ok)throw new Error(await w.text());m("\u0412\u0456\u043A\u043E\u043D\u0446\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E"),setTimeout(()=>{m(null),o(null),r()},800)}catch(w){f(w.message||"Failed to delete window")}};return a&&M.default.createElement(M.default.Fragment,null,M.default.createElement("div",{className:"confirm-overlay",onClick:r},M.default.createElement("div",{className:"glass-modal",onClick:w=>w.stopPropagation()},M.default.createElement("h3",null,n?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435":"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),M.default.createElement("div",null,"( ",S.effective_date," .. ",S.end_date," )"),M.default.createElement("br",null),M.default.createElement("label",null,"Effective date"),M.default.createElement("input",{type:"date",value:a.effective_date,onChange:w=>i({...a,effective_date:w.target.value})}),M.default.createElement("label",null,"End date"),M.default.createElement("input",{type:"date",value:a.end_date,onChange:w=>i({...a,end_date:w.target.value})}),u&&M.default.createElement("div",{className:"form__error"},u),d&&M.default.createElement("div",{className:"form__success"},d),M.default.createElement("label",null,"Start time"),M.default.createElement("input",{type:"time",value:pn(a.start_time),onChange:w=>{let k=mn(a.start_time||new Date().toISOString(),w.target.value);i(C=>({...C,start_time:k}))}}),M.default.createElement("label",null,"End time"),M.default.createElement("input",{type:"time",value:pn(a.end_time),onChange:w=>{let k=mn(a.end_time||new Date().toISOString(),w.target.value);i(C=>({...C,end_time:k}))}}),M.default.createElement("label",null,"Break from"),M.default.createElement("input",{type:"time",value:pn(a.break_from),onChange:w=>{let k=mn(a.break_from||new Date().toISOString(),w.target.value);i(C=>({...C,break_from:k}))}}),M.default.createElement("label",null,"Break to"),M.default.createElement("input",{type:"time",value:pn(a.break_to),onChange:w=>{let k=mn(a.break_to||new Date().toISOString(),w.target.value);i(C=>({...C,break_to:k}))}}),M.default.createElement("div",{className:"weekday-picker"},M.default.createElement("label",{className:"form-label"},"\u0412\u0438\u0445\u0456\u0434\u043D\u0456"),M.default.createElement("div",{className:"weekday-grid"},v.map(w=>{let k=a.weekends?.includes(w.id);return M.default.createElement("label",{key:w.id,className:"weekday-checkbox mb-2"},M.default.createElement("input",{type:"checkbox",checked:k,onChange:()=>{i(C=>({...C,weekends:k?C.weekends.filter(P=>P!==w.id):[...C.weekends,w.id]}))}}),M.default.createElement("span",null,w.label))}))),M.default.createElement("div",{className:"modal-actions"},M.default.createElement("button",{onClick:r,disabled:l},"Cancel"),n&&M.default.createElement(M.default.Fragment,null,M.default.createElement("button",{className:"danger",onClick:()=>y(!0)},"Delete"),M.default.createElement(Oo,{open:g,title:"Delete window",message:"Are you sure you want to delete this window?",confirmText:"Yes",cancelText:"No",onConfirm:()=>{y(!1),x()},onCancel:()=>y(!1)})),M.default.createElement("button",{className:"apply",onClick:h,disabled:l},n?"Update":"Create")))))}function du({days:e,weekStart:t,setWeekStart:n,employees:r,currentEmployee:o,setCurrentEmployee:a}){let i=()=>n(fn(t,7)),l=()=>n(fn(t,-7)),s=()=>n(zn(new Date)),[u,f]=(0,tm.useState)(!1),d=o?.window;return Je.default.createElement("header",{className:"calendar__header sticky"},Je.default.createElement("h4",null,e[0].toLocaleDateString("uk-UA",{day:"numeric",month:"long"})," \u2013 ",e[6].toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})),Je.default.createElement("select",{className:"employee-select",value:o?.id||"",onChange:m=>{let v=m.target.value;a(v===""?null:r.find(g=>g.id===Number(v)))}},Je.default.createElement("option",{value:""},"\u041E\u0431\u0440\u0430\u0442\u0438 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430"),r.map(m=>Je.default.createElement("option",{key:m.id,value:m.id},m.first_name," ",m.last_name))),o&&!d&&Je.default.createElement("button",{className:"secondary",onClick:()=>f(!0)},"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),o&&Je.default.createElement(Fo,{open:u,employee:o,window:o.window,onClose:()=>f(!1),onSaved:m=>{a(v=>v&&{...v,window:m})}}),Je.default.createElement("div",{className:"calendar__actions"},Je.default.createElement("button",{onClick:l},"\u2190"),Je.default.createElement("button",{onClick:s},"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456"),Je.default.createElement("button",{onClick:i},"\u2192"),Je.default.createElement("input",{className:"date__picker",type:"date",value:t.toISOString().slice(0,10),onChange:m=>n(new Date(m.target.value+"T00:00:00"))})))}var O=A(j()),we=A(j());var Me=A(j());(function(){if(!document.getElementById("d5860081ef1c8a6df2ca309b7af21e03f785b56257746a737b7a744dcab475cd")){var e=document.createElement("style");e.id="d5860081ef1c8a6df2ca309b7af21e03f785b56257746a737b7a744dcab475cd",e.textContent=`.client-input-row {
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
`,document.head.appendChild(e)}})();function fu({open:e,onClose:t,onCreated:n}){let[r,o]=(0,Me.useState)({first_name:"",last_name:"",email:"",phone:""}),[a,i]=(0,Me.useState)(!1),[l,s]=(0,Me.useState)(null),[u,f]=(0,Me.useState)(null);if(!e)return null;let d=async()=>{i(!0),s(null);try{let m=await fetch("/api/clients",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!m.ok)throw new Error(await m.text());let v=await m.json();f(`Client ${v.first_name} successfully created`),setTimeout(()=>{f(null),n(v),t()},1e3)}catch(m){s(m.message||"Failed to create client")}finally{i(!1)}};return Me.default.createElement("div",{className:"confirm-overlay",onClick:t},Me.default.createElement("div",{className:"glass-modal small",onClick:m=>m.stopPropagation()},Me.default.createElement("h3",null,"New client"),l&&Me.default.createElement("div",{className:"form__error"},l),u&&Me.default.createElement("div",{className:"form__success"},u),["first_name","last_name","email","phone"].map(m=>Me.default.createElement("input",{key:m,placeholder:m.replace("_"," "),value:r[m],onChange:v=>o(g=>({...g,[m]:v.target.value}))})),Me.default.createElement("div",{className:"modal-actions"},Me.default.createElement("button",{onClick:t},"Close"),Me.default.createElement("button",{className:"apply",disabled:a,onClick:d},"Create"))))}var ge=A(j());function pu({open:e,employee:t,onClose:n,onCreated:r}){let[o,a]=(0,ge.useState)({name:"",description:"",price:"",duration:30}),[i,l]=(0,ge.useState)(!1),[s,u]=(0,ge.useState)(null),[f,d]=(0,ge.useState)(null);if(!e)return null;let m=async()=>{l(!0),u(null);let v={...o,employee_id:t.id};try{let g=await fetch("/api/services",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});if(!g.ok)throw new Error(await g.text());let y=await g.json();d(`Service ${y.name} successfully created`),setTimeout(()=>{d(null),r(y),n()},1e3)}catch(g){u(g.message||"Failed to create service")}finally{l(!1)}};return ge.default.createElement("div",{className:"confirm-overlay",onClick:n},ge.default.createElement("div",{className:"glass-modal",onClick:v=>v.stopPropagation()},ge.default.createElement("h3",null,"Add Service"),s&&ge.default.createElement("div",{className:"form__error"},s),f&&ge.default.createElement("div",{className:"form__success"},f),ge.default.createElement("input",{placeholder:"Name",value:o.name,onChange:v=>a({...o,name:v.target.value})}),ge.default.createElement("textarea",{placeholder:"Description",value:o.description,onChange:v=>a({...o,description:v.target.value})}),ge.default.createElement("input",{type:"number",placeholder:"Price",value:o.price,onChange:v=>a({...o,price:v.target.value})}),ge.default.createElement("input",{type:"number",step:15,min:15,placeholder:"Duration (min)",value:o.duration,onChange:v=>a({...o,duration:v.target.value})}),ge.default.createElement("div",{className:"modal-actions"},ge.default.createElement("button",{onClick:n},"Cancel"),ge.default.createElement("button",{className:"apply",onClick:m},"Create"))))}(function(){if(!document.getElementById("9403ccd3928ae6193b77064c875b789d6683bd4ba322769601253770b0128aab")){var e=document.createElement("style");e.id="9403ccd3928ae6193b77064c875b789d6683bd4ba322769601253770b0128aab",e.textContent=`.form__title {
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
`,document.head.appendChild(e)}})();function mu({slot:e,weekStart:t,previewSlot:n,setPreviewSlot:r,setTimeSlots:o,setEditingSlot:a,editingSlot:i,currentEmployee:l}){let[s,u]=(0,we.useState)(()=>e?.duration??15),[f,d]=(0,we.useState)(""),[m,v]=(0,we.useState)([]),[g,y]=(0,we.useState)(!1),[S,p]=(0,we.useState)(null),[c,h]=(0,we.useState)(null),[x,w]=(0,we.useState)(null),[k,C]=(0,we.useState)(null),[P,V]=(0,we.useState)(!1),[z,Pe]=(0,we.useState)(null),[vn,Hn]=(0,we.useState)(null),[Nr,Bn]=(0,we.useState)(!1),[hi,Rr]=(0,we.useState)(!1);if((0,we.useEffect)(()=>{if(!e)return;a(e),u(e.duration??15);let R=l.services.find(F=>F.id===e.service_id);if(R){Pe(R);let F=e.price?Number(e.price):null;Hn(F)}},[e,l]),!i)return null;let Mo=(R,F)=>kt(jn(new Date(R),F)),Pr=(0,we.useRef)(null),vi=R=>{!R||R.length<3||(Pr.current&&clearTimeout(Pr.current),Pr.current=window.setTimeout(async()=>{y(!0);let $=await(await fetch(`/api/clients?search=${R}`)).json();v($),y(!1)},250))},zo=async()=>{if(h(null),!!i)try{let R=await fetch(`/api/time_slots/${i.id}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!R.ok){let $=await R.text();throw new Error($||"Failed to update time slot")}let F=await R.json();o($=>$.map(_=>_.id===F.id?F:_)),w("Time slot updated successfully!"),setTimeout(()=>{w(null),a(null),d(""),p(null),r(null)},1e3),Io()}catch(R){h(R.message)}},yi=async()=>{if(h(null),!!i)try{let R=await fetch(`/api/time_slots/${i.id}`,{method:"DELETE",credentials:"include"});if(!R.ok){let $=await R.text();throw new Error($||"Failed to delete time slot")}let F=await R.json();o($=>$.filter(_=>_.id!==F.id)),w("Time slot deleted successfully!"),setTimeout(()=>{w(null),a(null),d(""),p(null),r(null)},1e3),Io()}catch(R){h(R.message)}},gi=async()=>{if(h(null),!i)return;let R={...i,client_id:i.client_id??n?.client_id??null};console.log("POST payload:",R);try{let F=await fetch("/api/time_slots",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(R)});if(!F.ok){let _=await F.text();throw new Error(_||"Failed to schedule time slot")}let $=await F.json();o(_=>[..._,$]),w("Time slot scheduled successfully!"),setTimeout(()=>{w(null),a(null),d(""),p(null),r(null)},1e3),Io()}catch(F){h(F.message)}},Io=()=>{let R=t.toISOString().slice(0,10),F=fn(t,6).toISOString().slice(0,10);fetch(`/api/employees/${l.id}/availability?from=${R}&to=${F}`).then($=>$.json()).then($=>{C($.employee.window),o($.employee.time_slots)})};return O.default.createElement("div",{className:"glass-overlay",onClick:()=>a(null)},O.default.createElement("div",{className:"glass-modal",onClick:R=>R.stopPropagation()},O.default.createElement("div",{className:"form__title"},O.default.createElement("div",{className:"form__title-left"},"Edit time slot:"),O.default.createElement("div",{className:`form__title-right form__title_${i.state}`},i.state)),c&&O.default.createElement("div",{className:"form__error"},c),x&&O.default.createElement("div",{className:"form__success"},x),O.default.createElement("div",{className:"form-group mt-3"},O.default.createElement("div",{className:"time-range-row"},O.default.createElement("label",null,"Date"),O.default.createElement("input",{type:"date",className:"date__picker",value:i.day,onChange:R=>{let F=R.target.value;a($=>({...$,day:F,start_time:`${F}${$.start_time.slice(10)}`,end_time:`${F}${$.end_time.slice(10)}`}))}}))),O.default.createElement("div",{className:"form-group mt-2"},O.default.createElement("label",null,"Service"),O.default.createElement("div",{className:"time-range-row"},O.default.createElement("div",{className:"input-with-button"},O.default.createElement("select",{className:"width-100",value:i.service_id??"",onChange:R=>{let F=Number(R.target.value),$=l.services.find(U=>U.id===F);if(!$){Pe(null),Hn(null);return}let _=new Date(i.start_time);u($.duration);let K={service_id:$.id,duration:$.duration,price:$.price,end_time:kt(jn(_,$.duration))};a(U=>({...U,...K})),r(U=>U?{...U,...K}:null),Pe($),Hn(null)}},O.default.createElement("option",{value:""},"Select a service"),l.services.map(R=>O.default.createElement("option",{key:R.id,value:R.id},R.name))),O.default.createElement("div",{className:"input-button content-center",title:"Add service",onClick:()=>Rr(!0)},"+")),O.default.createElement(pu,{open:hi,employee:l,onClose:()=>Rr(!1),onCreated:R=>{l.services.push(R),a(F=>({...F,service_id:R.id,duration:R.duration,price:R.price})),Pe(R),Rr(!1)}}))),O.default.createElement("div",{className:"form-group"},z&&O.default.createElement(O.default.Fragment,null,O.default.createElement("div",{className:"time-range-row mt-1 t-sm"},O.default.createElement("label",null,"Duration"),O.default.createElement("input",{type:"number",step:15,min:15,value:i.duration,onChange:R=>{let F=Number(R.target.value),$=new Date(i.start_time);u(F),a(_=>({..._,duration:F,end_time:kt(jn($,F))})),r(_=>_?{..._,duration:F,end_time:kt(jn($,F))}:null)}}),O.default.createElement("label",{className:"content-center"},"Price"),O.default.createElement("input",{type:"number",step:.01,min:0,value:vn??Number(i.price??z?.price??0),onChange:R=>{let F=Number(R.target.value);Hn(F),a($=>({...$,price:F}))}})))),O.default.createElement("div",{className:"form-group time-range"},O.default.createElement("label",null,"Time"),O.default.createElement("div",{className:"time-range-row"},O.default.createElement("input",{type:"time",step:900,value:pn(i.start_time),onChange:R=>{let F=mn(i.start_time,R.target.value);a($=>({...$,start_time:F,end_time:Mo(F,s)}))}}),O.default.createElement("input",{type:"time",step:900,value:pn(i.end_time),onChange:R=>{let F=mn(i.end_time,R.target.value);a($=>({...$,end_time:F,start_time:Mo(F,-s)}))}}))),O.default.createElement("div",{className:"form-group"},O.default.createElement("label",null,"Client"),O.default.createElement("div",{className:"input-with-button"},O.default.createElement("input",{type:"text",placeholder:"Search client...",value:i?.client?`${i.client.first_name} ${i.client.last_name}`:f,onChange:R=>{a(F=>({...F,client:null,client_id:null})),d(R.target.value),vi(R.target.value)}}),O.default.createElement("div",{className:"input-button content-center",onClick:()=>Bn(!0),title:"Add client"},"+")),O.default.createElement(fu,{open:Nr,onClose:()=>Bn(!1),onCreated:R=>{a(F=>({...F,client_id:R.id,client:R}))}}),g&&O.default.createElement("div",{className:"hint"},"Searching\u2026"),m.length>0&&O.default.createElement("ul",{className:"autocomplete-list"},m.map(R=>O.default.createElement("li",{key:R.id,onClick:()=>{v([]),a(F=>({...F,client_id:R.id,client:R}))}},O.default.createElement("strong",null,R.first_name," ",R.last_name),O.default.createElement("div",{className:"muted"},R.email))))),O.default.createElement("div",{className:"modal-actions"},O.default.createElement("button",{onClick:()=>{h(null),a(null),d(""),p(null)}},"Close"),i.state==="preview"&&O.default.createElement("button",{className:"apply",onClick:gi},"Schedule"),i.state==="scheduled"&&O.default.createElement(O.default.Fragment,null,O.default.createElement("button",{className:"danger",onClick:()=>V(!0)},"Delete"),O.default.createElement(Oo,{open:P,title:"Delete time slot",message:"Are you sure you want to delete this time slot?",confirmText:"Yes",cancelText:"No",onConfirm:()=>{V(!1),yi()},onCancel:()=>V(!1)})),i.state==="scheduled"&&O.default.createElement("button",{className:"apply",onClick:zo},"Update"))))}(function(){if(!document.getElementById("d2a1e44d6fcbce1ab72efc649c94a73f5a8a1e5bed0b9b132dbb11207b7851e0")){var e=document.createElement("style");e.id="d2a1e44d6fcbce1ab72efc649c94a73f5a8a1e5bed0b9b132dbb11207b7851e0",e.textContent=`.calendar-card {
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
`,document.head.appendChild(e)}})();function hu({employees:e,companyId:t}){let[n,r]=(0,I.useState)(zn(new Date)),[o,a]=(0,I.useState)(null),[i,l]=(0,I.useState)(null),[s,u]=(0,I.useState)(null),[f,d]=(0,I.useState)([]),[m,v]=(0,I.useState)([]),g=(0,I.useRef)(null),[y,S]=(0,I.useState)(null),[p,c]=(0,I.useState)(null),[h,x]=(0,I.useState)(null),[w,k]=(0,I.useState)(!1),[C,P]=(0,I.useState)(null),V=Array.from({length:7},(_,K)=>fn(n,K)),z=new Date,Pe=()=>{let _=n.toISOString().slice(0,10),K=fn(n,6).toISOString().slice(0,10);fetch(`/api/employees/${i.id}/availability?from=${_}&to=${K}`).then(U=>U.json()).then(U=>{u(U.employee.window),d(U.employee.upcoming_windows),v(U.employee.time_slots)})};(0,I.useEffect)(()=>{i&&Pe()},[i,n]);let[vn,Hn]=(0,I.useState)(new Date);(0,I.useEffect)(()=>{let _=()=>Hn(new Date);_();let K=setInterval(_,300*1e3);return()=>clearInterval(K)},[]);let Nr=(0,I.useRef)(null),[Bn,hi]=(0,I.useState)(0);(0,I.useEffect)(()=>{Nr.current&&hi(Nr.current.getBoundingClientRect().height)},[n,i]);let Rr=vn.toISOString().slice(0,10),Mo=vn.getHours(),Pr=vn.getMinutes(),vi=Bn*Mo+Bn*Pr/60,zo=["window-a","window-b","window-c","window-d","window-e"],yi=_=>{let K=Do(_,[s,...f||[]]);if(!K)return"";let U=K.id%zo.length;return zo[U]},gi=V.some(_=>_.toISOString().slice(0,10)===Rr);(0,I.useEffect)(()=>{let _=g.current;_&&requestAnimationFrame(()=>{let K=_.scrollHeight-_.clientHeight;_.scrollTop=K/2})},[n,i]);let Io=(_,K)=>kt(jn(new Date(_),K)),R=(_,K)=>{if(!y||y.day!==_.toISOString().slice(0,10))return!1;let U=In(_,K,0),Ct=In(_,K+1,0),Lr=ht(y.start_time),$t=ht(y.end_time);return To(Lr,$t,U,Ct)},F=(_,K,U)=>{let Ct=ht(_.start_time);return Ct?Ct.getHours()===U&&_.day===K.toISOString().slice(0,10):!1},$=(_,K)=>{let U=_.toISOString().slice(0,10),Ct=In(_,K,0),Lr=In(_,K+1,0);return m.filter($t=>{if($t.day!==U)return!1;let _t=ht($t.start_time),jo=ht($t.end_time);return To(_t,jo,Ct,Lr)})};return I.default.createElement("section",{className:"calendar-card"},I.default.createElement(du,{days:V,weekStart:n,setWeekStart:r,employees:e,currentEmployee:i,setCurrentEmployee:_=>{_?l(_):(l(null),v([]),u(null),S(null),d([]))}}),I.default.createElement("div",{className:"week-calendar"},I.default.createElement("div",{className:"week-header"},I.default.createElement("div",{className:"time-col"}),V.map(_=>{let K=_<z,U=Do(_,[s,...f||[]]);return I.default.createElement("div",{key:_.toISOString(),className:`day-col-header
                          ${_.toDateString()===z.toDateString()?"today":""}
                          ${yi(_)}
                        `,"data-tooltip":!i||!U?.effective_date?"":`Window
Starting ${U?.effective_date}
Ending ${U?.end_date||"\u221E"}`,onClick:()=>{K||(P(_),k(!0))}},i&&!K&&I.default.createElement("span",{className:"edit-icon"},U?"\u2699\uFE0F":"\u2795"),I.default.createElement("div",null,_.toLocaleDateString("uk-UA",{weekday:"short"})),I.default.createElement("div",null,_.getDate()))}),i&&C&&I.default.createElement(Fo,{open:w,employee:i,window:Do(C,[s,...f||[]]),onClose:()=>{P(null),k(!1)},onSaved:_=>{l(K=>K&&{...K,window:_})}})),I.default.createElement("div",{className:"week-body",ref:g},gi&&Bn>0&&I.default.createElement("div",{className:"now-line",style:{top:`${vi}px`}},I.default.createElement("div",{className:"now-dot"})),qp.map((_,K)=>I.default.createElement("div",{key:_,className:"week-row",ref:K===0?Nr:null},I.default.createElement("div",{className:"time-col"},_,":00"),V.map(U=>{let Ct=$(U,_),Lr=U<zn(new Date),$t=em({day:U,hour:_,windows:[s,...f]});return I.default.createElement("div",{key:`${U.toISOString()}-${_}`,className:`week-cell ${$t?"":Lr?"past":"unavailable"}`,onMouseDown:_t=>{if(x(null),!$t||!i)return;let jo=_t.currentTarget.getBoundingClientRect(),ku=(_t.clientY-jo.top)/jo.height>=.5?30:0,im=ku+30,wi=In(U,_,ku),xi=In(U,_,im);for(let Ut of Ct){let Si=ht(Ut.start_time),lm=ht(Ut.end_time);if(To(wi,xi,Si,lm)){c(Ut),a(Ut);return}}if(y){let Ut=ht(y.start_time),Si=ht(y.end_time);if(y.day===U.toISOString().slice(0,10)&&To(wi,xi,Ut,Si)){a(y);return}}S({day:U.toISOString().slice(0,10),dayIndex:V.findIndex(Ut=>Ut.toDateString()===U.toDateString()),start_time:kt(wi),end_time:kt(xi),state:"preview",employee_id:i.id,company_id:t})}},Ct.filter(_t=>F(_t,U,_)).map(_t=>I.default.createElement(pi,{key:_t.id,timeSlot:_t})),y&&F(y,U,_)&&I.default.createElement(pi,{timeSlot:y}))}))))),o&&I.default.createElement(mu,{slot:o,weekStart:n,previewSlot:y,setPreviewSlot:S,setTimeSlots:v,setEditingSlot:a,editingSlot:o,currentEmployee:i}))}var Y=A(j());(function(){if(!document.getElementById("85680663e3af3af3040ba0baa2d9af434f71b3c84e52d8c7f14a6909fce9151c")){var e=document.createElement("style");e.id="85680663e3af3af3040ba0baa2d9af434f71b3c84e52d8c7f14a6909fce9151c",e.textContent=`.employees-container {
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
`,document.head.appendChild(e)}})();function vu({dashboardData:e}){let[t,n]=(0,Y.useState)(e?.employees||[]),[r,o]=(0,Y.useState)(!1),[a,i]=(0,Y.useState)(null),[l,s]=(0,Y.useState)(null),u=()=>{i(null),o(!0)},f=g=>{i(g),o(!0)},d=async g=>{if(window.confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044C\u043E\u0433\u043E \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430?"))try{let y=await fetch(`/api/employees/${g}`,{method:"DELETE",credentials:"include"});if(y.ok)n(t.filter(S=>S.id!==g));else{let S=await y.json();s(S.message||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}}catch{s("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}},m=g=>{n(a?t.map(y=>y.id===g.id?g:y):[...t,g]),o(!1),i(null)},v=()=>{o(!1),i(null)};return Y.default.createElement("div",{className:"employees-container"},Y.default.createElement("div",{className:"employees-header"},Y.default.createElement("h2",null,"\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438"),Y.default.createElement("button",{className:"btn-primary",onClick:u},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430")),l&&Y.default.createElement("div",{className:"error-message"},l),t.length===0?Y.default.createElement("div",{className:"empty-state"},Y.default.createElement("p",null,"\u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0456\u0432. \u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0448\u043E\u0433\u043E!")):Y.default.createElement("div",{className:"employees-table"},Y.default.createElement("table",null,Y.default.createElement("thead",null,Y.default.createElement("tr",null,Y.default.createElement("th",null,"\u0406\u043C'\u044F"),Y.default.createElement("th",null,"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),Y.default.createElement("th",null,"Email"),Y.default.createElement("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),Y.default.createElement("th",null,"\u0414\u0456\u0457"))),Y.default.createElement("tbody",null,t.map(g=>Y.default.createElement("tr",{key:g.id},Y.default.createElement("td",null,g.first_name),Y.default.createElement("td",null,g.last_name),Y.default.createElement("td",null,g.email),Y.default.createElement("td",null,g.phone||"N/A"),Y.default.createElement("td",{className:"actions content-center"},Y.default.createElement("button",{className:"btn-edit",onClick:()=>f(g)},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),Y.default.createElement("button",{className:"btn-delete",onClick:()=>d(g.id)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"))))))),r&&Y.default.createElement("div",{className:"modal-overlay",onClick:v},Y.default.createElement("div",{className:"modal-content",onClick:g=>g.stopPropagation()},Y.default.createElement(Cr,{role:"employee",employee:a,onSave:m,onCancel:v,isModal:!0}))))}var W=A(j());var ce=A(j());function yu({client:e,onSave:t,onCancel:n,isModal:r=!1}){let o=ot(),[a,i]=(0,ce.useState)({first_name:"",last_name:"",email:"",phone:"",password:""}),[l,s]=(0,ce.useState)({});(0,ce.useEffect)(()=>{e&&i({first_name:e.first_name||"",last_name:e.last_name||"",email:e.email||"",phone:e.phone||"",password:""})},[e]);let u=m=>{i({...a,[m.target.name]:m.target.value}),s(v=>({...v,[m.target.name]:null}))},f=async m=>{m.preventDefault();let v={client:{first_name:a.first_name,last_name:a.last_name,email:a.email,phone:a.phone}};a.password&&(v.client.password=a.password);let g=e?`/api/clients/${e.id}`:"/api/clients",S=await fetch(g,{method:e?"PUT":"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});if(S.ok){let p=await S.json();r&&t?t(p):o("/companies/welcome")}else{let p=await S.json();s(p.errors||{})}},d=m=>l[m]?.message;return ce.default.createElement("div",{className:r?"client-form-modal":"client-form container"},ce.default.createElement("h1",null,e?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430"),ce.default.createElement("form",{onSubmit:f},d("first_name")&&ce.default.createElement("div",{className:"field-error"},d("first_name")),ce.default.createElement("input",{name:"first_name",value:a.first_name,onChange:u,placeholder:"\u0406\u043C\u02BC\u044F"}),d("last_name")&&ce.default.createElement("div",{className:"field-error"},d("last_name")),ce.default.createElement("input",{name:"last_name",value:a.last_name,onChange:u,placeholder:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),d("email")&&ce.default.createElement("div",{className:"field-error"},d("email")),ce.default.createElement("input",{name:"email",type:"email",value:a.email,onChange:u,placeholder:"Email"}),d("phone")&&ce.default.createElement("div",{className:"field-error"},d("phone")),ce.default.createElement("input",{name:"phone",value:a.phone,onChange:u,placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),d("password")&&ce.default.createElement("div",{className:"field-error"},d("password")),ce.default.createElement("input",{name:"password",type:"password",value:a.password,onChange:u,placeholder:e?"\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u0437\u0430\u043B\u0438\u0448\u0442\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u043C, \u0449\u043E\u0431 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438)":"\u041F\u0430\u0440\u043E\u043B\u044C",required:!e}),ce.default.createElement("div",{className:"form-actions"},r&&n&&ce.default.createElement("button",{type:"button",onClick:n},"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),ce.default.createElement("button",{type:"submit"},e?"\u041E\u043D\u043E\u0432\u0438\u0442\u0438":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"))))}(function(){if(!document.getElementById("74b753de80d78e38957b9d8c852f845b8349949efb4a62e8a40b3415643a93b6")){var e=document.createElement("style");e.id="74b753de80d78e38957b9d8c852f845b8349949efb4a62e8a40b3415643a93b6",e.textContent=`.clients-container {
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
`,document.head.appendChild(e)}})();function gu({dashboardData:e}){let[t,n]=(0,W.useState)([]),[r,o]=(0,W.useState)(!1),[a,i]=(0,W.useState)(null),[l,s]=(0,W.useState)(null),u=async()=>{try{let y=await fetch("/api/clients",{credentials:"include"});if(y.ok){let S=await y.json();n(S.clients)}else s("Failed to fetch clients")}catch{s("Failed to fetch clients")}};(0,W.useEffect)(()=>{(async()=>{try{let S=await fetch("/api/clients",{credentials:"include"});if(S.ok){let p=await S.json();n(p.clients||p)}else s("Failed to fetch clients")}catch{s("Failed to fetch clients")}})()},[]);let f=()=>{i(null),o(!0)},d=y=>{i(y),o(!0)},m=async y=>{if(window.confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044C\u043E\u0433\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430?"))try{let S=await fetch(`/api/clients/${y}`,{method:"DELETE",credentials:"include"});if(S.ok)n(t.filter(p=>p.id!==y));else{let p=await S.json();s(p.message||"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}}catch{s("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456")}},v=y=>{n(a?t.map(S=>S.id===y.id?y:S):[...t,y]),o(!1),i(null)},g=()=>{o(!1),i(null)};return W.default.createElement("div",{className:"clients-container"},W.default.createElement("div",{className:"clients-header"},W.default.createElement("h2",null,"\u041A\u043B\u0456\u0454\u043D\u0442\u0438"),W.default.createElement("button",{className:"btn-primary",onClick:f},"+ \u0414\u043E\u0434\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430")),l&&W.default.createElement("div",{className:"error-message"},l),t.length===0?W.default.createElement("div",{className:"empty-state"},W.default.createElement("p",null,"\u041D\u0435\u043C\u0430\u0454 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432. \u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0448\u043E\u0433\u043E!")):W.default.createElement("div",{className:"clients-table"},W.default.createElement("table",null,W.default.createElement("thead",null,W.default.createElement("tr",null,W.default.createElement("th",null,"\u0406\u043C'\u044F"),W.default.createElement("th",null,"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),W.default.createElement("th",null,"Email"),W.default.createElement("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),W.default.createElement("th",null,"\u0414\u0456\u0457"))),W.default.createElement("tbody",null,t.map(y=>W.default.createElement("tr",{key:y.id},W.default.createElement("td",null,y.first_name),W.default.createElement("td",null,y.last_name),W.default.createElement("td",null,y.email),W.default.createElement("td",null,y.phone||"N/A"),W.default.createElement("td",{className:"actions content-center"},W.default.createElement("button",{className:"btn-edit",onClick:()=>d(y)},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),W.default.createElement("button",{className:"btn-delete",onClick:()=>m(y.id)},"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"))))))),r&&W.default.createElement("div",{className:"modal-overlay",onClick:g},W.default.createElement("div",{className:"modal-content",onClick:y=>y.stopPropagation()},W.default.createElement(yu,{client:a,onSave:v,onCancel:g,isModal:!0}))))}var D=A(j());(function(){if(!document.getElementById("b2621e4b4297e219f58b94b6e9677304c32a37f7c15d475d684fbd158706d5d7")){var e=document.createElement("style");e.id="b2621e4b4297e219f58b94b6e9677304c32a37f7c15d475d684fbd158706d5d7",e.textContent=`.company-container {
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
`,document.head.appendChild(e)}})();function wu({dashboardData:e}){let[t,n]=(0,D.useState)(e?.company||null),[r,o]=(0,D.useState)(!1),[a,i]=(0,D.useState)(null),[l,s]=(0,D.useState)(null),u=()=>{o(!0)},f=m=>{n(m),o(!1),s("\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E"),setTimeout(()=>s(null),3e3)},d=()=>{o(!1)};return t?D.default.createElement("div",{className:"company-container"},D.default.createElement("div",{className:"company-header"},D.default.createElement("h2",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F"),D.default.createElement("button",{className:"btn-primary",onClick:u},"\u270F\uFE0F \u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438")),a&&D.default.createElement("div",{className:"error-message"},a),l&&D.default.createElement("div",{className:"success-message"},l),D.default.createElement("div",{className:"company-details"},D.default.createElement("section",{className:"company-section"},D.default.createElement("h3",null,"\u041E\u0441\u043D\u043E\u0432\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"),D.default.createElement("div",{className:"detail-grid"},D.default.createElement("div",{className:"detail-item"},D.default.createElement("label",null,"\u041D\u0430\u0437\u0432\u0430:"),D.default.createElement("span",null,t.name)),D.default.createElement("div",{className:"detail-item"},D.default.createElement("label",null,"Email:"),D.default.createElement("span",null,t.email||"N/A")),D.default.createElement("div",{className:"detail-item"},D.default.createElement("label",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"),D.default.createElement("span",null,t.phone||"N/A")),D.default.createElement("div",{className:"detail-item"},D.default.createElement("label",null,"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442:"),D.default.createElement("span",null,t.website?D.default.createElement("a",{href:t.website,target:"_blank",rel:"noopener noreferrer"},t.website):"N/A")),D.default.createElement("div",{className:"detail-item full-width"},D.default.createElement("label",null,"\u041E\u043F\u0438\u0441:"),D.default.createElement("span",null,t.description||"N/A")))),t.address&&D.default.createElement("section",{className:"company-section"},D.default.createElement("h3",null,"\u0410\u0434\u0440\u0435\u0441\u0430"),D.default.createElement("div",{className:"detail-grid"},D.default.createElement("div",{className:"detail-item"},D.default.createElement("label",null,"\u0412\u0443\u043B\u0438\u0446\u044F 1:"),D.default.createElement("span",null,t.address.street_line1||"N/A")),D.default.createElement("div",{className:"detail-item"},D.default.createElement("label",null,"\u0412\u0443\u043B\u0438\u0446\u044F 2:"),D.default.createElement("span",null,t.address.street_line2||"N/A")),D.default.createElement("div",{className:"detail-item"},D.default.createElement("label",null,"\u041C\u0456\u0441\u0442\u043E:"),D.default.createElement("span",null,t.address.city||"N/A")),D.default.createElement("div",{className:"detail-item"},D.default.createElement("label",null,"\u041E\u0431\u043B\u0430\u0441\u0442\u044C:"),D.default.createElement("span",null,t.address.region||"N/A")),D.default.createElement("div",{className:"detail-item"},D.default.createElement("label",null,"\u041F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441:"),D.default.createElement("span",null,t.address.postal||"N/A")),D.default.createElement("div",{className:"detail-item"},D.default.createElement("label",null,"\u041A\u0440\u0430\u0457\u043D\u0430:"),D.default.createElement("span",null,t.address.country||"N/A"))))),r&&D.default.createElement("div",{className:"modal-overlay",onClick:d},D.default.createElement("div",{className:"modal-content",onClick:m=>m.stopPropagation()},D.default.createElement(Po,{company:t,onSave:f,onCancel:d,isModal:!0})))):D.default.createElement("div",{className:"company-container"},D.default.createElement("div",{className:"empty-state"},D.default.createElement("p",null,"\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430")))}var nm=A(j());function xu({dashboardData:e}){return nm.default.createElement("div",null,"Settings")}(function(){if(!document.getElementById("6a6155881ee733b2fee22719c3362487d8f0b92f87b75b4e1bdd6886dcc8063c")){var e=document.createElement("style");e.id="6a6155881ee733b2fee22719c3362487d8f0b92f87b75b4e1bdd6886dcc8063c",e.textContent=`.dashboard {
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
`,document.head.appendChild(e)}})();function An(){let[e,t]=(0,Re.useState)(),{id:n}=_o(),r=ot(),o=rt();if((0,Re.useEffect)(()=>{fetch(`/api/companies/${n}/dashboard`).then(i=>i.status===401?(r("/companies/welcome"),null):i.json()).then(i=>{i&&t(i)}).catch(()=>{r("/companies/welcome")})},[n,r]),e===void 0)return Re.default.createElement("p",null,"Loading...");let a=()=>{let i=o.pathname;return i.includes("/employees")?Re.default.createElement(vu,{dashboardData:e}):i.includes("/clients")?Re.default.createElement(gu,{dashboardData:e}):i.includes("/edit")?Re.default.createElement(wu,{dashboardData:e}):i.includes("/settings")?Re.default.createElement(xu,{dashboardData:e}):Re.default.createElement(hu,{employees:e.employees,companyId:n})};return Re.default.createElement("div",{className:"dashboard"},Re.default.createElement(uu,{companyName:e.company.name,id:n}),Re.default.createElement("div",{className:"dashboard__content"},Re.default.createElement(cu,{userName:e.user.first_name}),Re.default.createElement("main",{className:"dashboard__main content-center"},a())))}var $n=A(j());function Su(){return $n.default.createElement("div",{class:"container"},$n.default.createElement("p",{class:"t-a-center"},"\u0412\u0436\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442?"),$n.default.createElement(Lo,null),$n.default.createElement("div",{className:"t-a-center"},$n.default.createElement("p",null,"\u0429\u0435 \u043D\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443?"),$n.default.createElement(cn,{to:"/companies/admins/new"},"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F")))}(function(){if(!document.getElementById("4be33d924d68f9738d162f2f6f9320fedbb0eccc00bfe3258cc9e5da3fda847b")){var e=document.createElement("style");e.id="4be33d924d68f9738d162f2f6f9320fedbb0eccc00bfe3258cc9e5da3fda847b",e.textContent="",document.head.appendChild(e)}})();function Eu(){return ee.default.createElement("div",null,ee.default.createElement(No,null,ee.default.createElement(pe,{path:"/",redirectTo:"welcome"}),ee.default.createElement(pe,{path:"welcome",element:ee.default.createElement(Su,null)}),ee.default.createElement(pe,{path:"new",element:ee.default.createElement(Po,null)}),ee.default.createElement(pe,{path:"employees/new",element:ee.default.createElement(Cr,{role:"employee"})}),ee.default.createElement(pe,{path:"admins/new",element:ee.default.createElement(Cr,{role:"admin"})}),ee.default.createElement(pe,{path:"login",element:ee.default.createElement(Lo,null)}),ee.default.createElement(pe,{path:":id/dashboard",element:ee.default.createElement(An,null)}),ee.default.createElement(pe,{path:":id/employees",element:ee.default.createElement(An,null)}),ee.default.createElement(pe,{path:":id/clients",element:ee.default.createElement(An,null)}),ee.default.createElement(pe,{path:":id/edit",element:ee.default.createElement(An,null)}),ee.default.createElement(pe,{path:":id/settings",element:ee.default.createElement(An,null)}),ee.default.createElement(pe,{path:"*",element:ee.default.createElement(su,null)})))}var Un=A(j());(function(){if(!document.getElementById("29801b744b15f53d7da10ff61f3e1caa467838a727ad6d331d9be5faacdc078b")){var e=document.createElement("style");e.id="29801b744b15f53d7da10ff61f3e1caa467838a727ad6d331d9be5faacdc078b",e.textContent=`.welcome {
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
`,document.head.appendChild(e)}})();function bu(){return Un.default.createElement("div",{className:"welcome container"},Un.default.createElement("h1",{className:"welcome__title"},"\u0404 \u0432\u0456\u043A\u043E\u043D\u0446\u0435"),Un.default.createElement("p",{className:"welcome__subtitle"},"\u0429\u043E \u0431\u0443\u0434\u0435\u043C\u043E \u0440\u043E\u0431\u0438\u0442\u0438?"),Un.default.createElement("div",{className:"welcome__actions"},Un.default.createElement(cn,{to:"/clients",className:"welcome__btn"},"\u042F \u043A\u043B\u0456\u0454\u043D\u0442"),Un.default.createElement(cn,{to:"/companies/welcome",className:"welcome__btn"},"\u042F \u0431\u0456\u0437\u043D\u0435\u0441")))}var eg=()=>at.default.createElement("h2",null,"404 Not Found");function rm(){return at.default.createElement(ou,null,at.default.createElement(No,null,at.default.createElement(pe,{path:"/",element:at.default.createElement(bu,null)}),at.default.createElement(pe,{path:"/companies/*",element:at.default.createElement(Eu,null)}),at.default.createElement(pe,{path:"/w/:companyName",element:at.default.createElement(iu,null)}),at.default.createElement(pe,{path:"*",element:at.default.createElement(eg,null)})))}document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("App");e?(0,am.createRoot)(e).render(om.default.createElement(rm,null)):console.error('React root element "#App" not found in DOM.')});
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
