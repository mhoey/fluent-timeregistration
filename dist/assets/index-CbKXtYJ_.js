(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();function l(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(a=o[c])&&(n=(i<3?a(n):i>3?a(e,t,n):a(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n}let et;const yo="fast-kernel";try{if(document.currentScript)et=document.currentScript.getAttribute(yo);else{const o=document.getElementsByTagName("script");et=o[o.length-1].getAttribute(yo)}}catch{et="isolate"}let ve;switch(et){case"share":ve=Object.freeze({updateQueue:1,observable:2,contextEvent:3,elementRegistry:4});break;case"share-v2":ve=Object.freeze({updateQueue:1.2,observable:2.2,contextEvent:3.2,elementRegistry:4.2});break;default:const o=`-${Math.random().toString(36).substring(2,8)}`;ve=Object.freeze({updateQueue:`1.2${o}`,observable:`2.2${o}`,contextEvent:`3.2${o}`,elementRegistry:`4.2${o}`});break}const Me=o=>typeof o=="function",Y=o=>typeof o=="string",ar=()=>{};var It=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$o={},ko;function li(){return ko||(ko=1,function(){if(!(typeof globalThis<"u"))if(typeof It<"u")It.globalThis=It;else if(typeof self<"u")self.globalThis=self;else if(typeof window<"u")window.globalThis=window;else{const e=new Function("return this")();e.globalThis=e}}()),$o}li();const lr={configurable:!1,enumerable:!1,writable:!1};globalThis.FAST===void 0&&Reflect.defineProperty(globalThis,"FAST",Object.assign({value:Object.create(null)},lr));const A=globalThis.FAST;if(A.getById===void 0){const o=Object.create(null);Reflect.defineProperty(A,"getById",Object.assign({value(e,t){let r=o[e];return r===void 0&&(r=t?o[e]=t():null),r}},lr))}A.error===void 0&&Object.assign(A,{warn(){},error(o){return new Error(`Error ${o}`)},addMessages(){}});const di=Object.freeze([]);function Kt(){const o=new Map;return Object.freeze({register(e){return o.has(e.type)?!1:(o.set(e.type,e),!0)},getByType(e){return o.get(e)},getForInstance(e){if(e!=null)return o.get(e.constructor)}})}function dr(){const o=new WeakMap;return function(e){let t=o.get(e);if(t===void 0){let r=Reflect.getPrototypeOf(e);for(;t===void 0&&r!==null;)t=o.get(r),r=Reflect.getPrototypeOf(r);t=t===void 0?[]:t.slice(0),o.set(e,t)}return t}}function xe(o){o.prototype.toJSON=ar}const E=Object.freeze({none:0,attribute:1,booleanAttribute:2,property:3,content:4,tokenList:5,event:6}),So=o=>o,ci=globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("fast-html",{createHTML:So}):{createHTML:So};let tt=Object.freeze({createHTML(o){return ci.createHTML(o)},protect(o,e,t,r){return r}});const hi=tt,Ee=Object.freeze({get policy(){return tt},setPolicy(o){if(tt!==hi)throw A.error(1201);tt=o},setAttribute(o,e,t){t==null?o.removeAttribute(e):o.setAttribute(e,t)},setBooleanAttribute(o,e,t){t?o.setAttribute(e,""):o.removeAttribute(e)}}),J=A.getById(ve.updateQueue,()=>{const o=[],e=[],t=globalThis.requestAnimationFrame;let r=!0;function i(){if(e.length)throw e.shift()}function n(h){try{h.call()}catch(d){if(r)e.push(d),setTimeout(i,0);else throw o.length=0,d}}function a(){let d=0;for(;d<o.length;)if(n(o[d]),d++,d>1024){for(let s=0,f=o.length-d;s<f;s++)o[s]=o[s+d];o.length-=d,d=0}o.length=0}function c(h){o.push(h),o.length<2&&(r?t(a):a())}return Object.freeze({enqueue:c,next:()=>new Promise(c),process:a,setMode:h=>r=h})});class Dt{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.subject=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){const t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const r=t.indexOf(e);r!==-1&&t.splice(r,1)}}notify(e){const t=this.spillover,r=this.subject;if(t===void 0){const i=this.sub1,n=this.sub2;i!==void 0&&i.handleChange(r,e),n!==void 0&&n.handleChange(r,e)}else for(let i=0,n=t.length;i<n;++i)t[i].handleChange(r,e)}}class cr{constructor(e){this.subscribers={},this.subjectSubscribers=null,this.subject=e}notify(e){var t,r;(t=this.subscribers[e])===null||t===void 0||t.notify(e),(r=this.subjectSubscribers)===null||r===void 0||r.notify(e)}subscribe(e,t){var r,i;let n;t?n=(r=this.subscribers[t])!==null&&r!==void 0?r:this.subscribers[t]=new Dt(this.subject):n=(i=this.subjectSubscribers)!==null&&i!==void 0?i:this.subjectSubscribers=new Dt(this.subject),n.subscribe(e)}unsubscribe(e,t){var r,i;t?(r=this.subscribers[t])===null||r===void 0||r.unsubscribe(e):(i=this.subjectSubscribers)===null||i===void 0||i.unsubscribe(e)}}const mt=Object.freeze({unknown:void 0,coupled:1}),v=A.getById(ve.observable,()=>{const o=J.enqueue,e=/(:|&&|\|\||if|\?\.)/,t=new WeakMap;let r,i=d=>{throw A.error(1101)};function n(d){var s;let f=(s=d.$fastController)!==null&&s!==void 0?s:t.get(d);return f===void 0&&(Array.isArray(d)?f=i(d):t.set(d,f=new cr(d))),f}const a=dr();class c{constructor(s){this.name=s,this.field=`_${s}`,this.callback=`${s}Changed`}getValue(s){return r!==void 0&&r.watch(s,this.name),s[this.field]}setValue(s,f){const b=this.field,O=s[b];if(O!==f){s[b]=f;const oe=s[this.callback];Me(oe)&&oe.call(s,O,f),n(s).notify(this.name)}}}class h extends Dt{constructor(s,f,b=!1){super(s,f),this.expression=s,this.isVolatileBinding=b,this.needsRefresh=!0,this.needsQueue=!0,this.isAsync=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}setMode(s){this.isAsync=this.needsQueue=s}bind(s){this.controller=s;const f=this.observe(s.source,s.context);return!s.isBound&&this.requiresUnbind(s)&&s.onUnbind(this),f}requiresUnbind(s){return s.sourceLifetime!==mt.coupled||this.first!==this.last||this.first.propertySource!==s.source}unbind(s){this.dispose()}observe(s,f){this.needsRefresh&&this.last!==null&&this.dispose();const b=r;r=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let O;try{O=this.expression(s,f)}finally{r=b}return O}disconnect(){this.dispose()}dispose(){if(this.last!==null){let s=this.first;for(;s!==void 0;)s.notifier.unsubscribe(this,s.propertyName),s=s.next;this.last=null,this.needsRefresh=this.needsQueue=this.isAsync}}watch(s,f){const b=this.last,O=n(s),oe=b===null?this.first:{};if(oe.propertySource=s,oe.propertyName=f,oe.notifier=O,O.subscribe(this,f),b!==null){if(!this.needsRefresh){let vo;r=void 0,vo=b.propertySource[b.propertyName],r=this,s===vo&&(this.needsRefresh=!0)}b.next=oe}this.last=oe}handleChange(){this.needsQueue?(this.needsQueue=!1,o(this)):this.isAsync||this.call()}call(){this.last!==null&&(this.needsQueue=this.isAsync,this.notify(this))}*records(){let s=this.first;for(;s!==void 0;)yield s,s=s.next}}return xe(h),Object.freeze({setArrayObserverFactory(d){i=d},getNotifier:n,track(d,s){r&&r.watch(d,s)},trackVolatile(){r&&(r.needsRefresh=!0)},notify(d,s){n(d).notify(s)},defineProperty(d,s){Y(s)&&(s=new c(s)),a(d).push(s),Reflect.defineProperty(d,s.name,{enumerable:!0,get(){return s.getValue(this)},set(f){s.setValue(this,f)}})},getAccessors:a,binding(d,s,f=this.isVolatileBinding(d)){return new h(d,s,f)},isVolatileBinding(d){return e.test(d.toString())}})});function k(o,e){v.defineProperty(o,e)}function hr(o,e,t){return Object.assign({},t,{get(){return v.trackVolatile(),t.get.apply(this)}})}const wo=A.getById(ve.contextEvent,()=>{let o=null;return{get(){return o},set(e){o=e}}}),je=Object.freeze({default:{index:0,length:0,get event(){return je.getEvent()},eventDetail(){return this.event.detail},eventTarget(){return this.event.target}},getEvent(){return wo.get()},setEvent(o){wo.set(o)}});class vt{constructor(e,t,r=!1){this.evaluate=e,this.policy=t,this.isVolatile=r}}class ui extends vt{createObserver(e){return v.binding(this.evaluate,e,this.isVolatile)}}function Qt(o,e,t=v.isVolatileBinding(o)){return new ui(o,e,t)}class ur extends vt{createObserver(){return this}bind(e){return this.evaluate(e.source,e.context)}}xe(ur);function pr(o,e){return new ur(o,e)}let xo;function fr(o){return o.map(e=>e instanceof z?fr(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}class z{constructor(e){this.styles=e,this.targets=new WeakSet,this._strategy=null,this.behaviors=e.map(t=>t instanceof z?t.behaviors:null).reduce((t,r)=>r===null?t:t===null?r:t.concat(r),null)}get strategy(){return this._strategy===null&&this.withStrategy(xo),this._strategy}addStylesTo(e){this.strategy.addStylesTo(e),this.targets.add(e)}removeStylesFrom(e){this.strategy.removeStylesFrom(e),this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}withStrategy(e){return this._strategy=new e(fr(this.styles)),this}static setDefaultStrategy(e){xo=e}static normalize(e){return e===void 0?void 0:Array.isArray(e)?new z(e):e instanceof z?e:new z([e])}}z.supportsAdoptedStyleSheets=Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype;const Et=Kt(),Yt=Object.freeze({getForInstance:Et.getForInstance,getByType:Et.getByType,define(o){return Et.register({type:o}),o}});function Ft(o,e,t){e.source.style.setProperty(o.targetAspect,t.bind(e))}class Rt{constructor(e,t){this.dataBinding=e,this.targetAspect=t}createCSS(e){return e(this),`var(${this.targetAspect})`}addedCallback(e){var t;const r=e.source;if(!r.$cssBindings){r.$cssBindings=new Map;const n=r.setAttribute;r.setAttribute=(a,c)=>{n.call(r,a,c),a==="style"&&r.$cssBindings.forEach((h,d)=>Ft(d,h.controller,h.observer))}}const i=(t=e[this.targetAspect])!==null&&t!==void 0?t:e[this.targetAspect]=this.dataBinding.createObserver(this,this);i.controller=e,e.source.$cssBindings.set(this,{controller:e,observer:i})}connectedCallback(e){Ft(this,e,e[this.targetAspect])}removedCallback(e){e.source.$cssBindings&&e.source.$cssBindings.delete(this)}handleChange(e,t){Ft(this,t.controller,t)}}Yt.define(Rt);const pi=`${Math.random().toString(36).substring(2,8)}`;let fi=0;const Bo=()=>`--v${pi}${++fi}`;function br(o,e){const t=[];let r="";const i=[],n=a=>{i.push(a)};for(let a=0,c=o.length-1;a<c;++a){r+=o[a];let h=e[a];Me(h)?h=new Rt(Qt(h),Bo()).createCSS(n):h instanceof vt?h=new Rt(h,Bo()).createCSS(n):Yt.getForInstance(h)!==void 0&&(h=h.createCSS(n)),h instanceof z||h instanceof CSSStyleSheet?(r.trim()!==""&&(t.push(r),r=""),t.push(h)):r+=h}return r+=o[o.length-1],r.trim()!==""&&t.push(r),{styles:t,behaviors:i}}const m=(o,...e)=>{const{styles:t,behaviors:r}=br(o,e),i=new z(t);return r.length?i.withBehaviors(...r):i};class gr{constructor(e,t){this.behaviors=t,this.css="";const r=e.reduce((i,n)=>(Y(n)?this.css+=n:i.push(n),i),[]);r.length&&(this.styles=new z(r))}createCSS(e){return this.behaviors.forEach(e),this.styles&&e(this),this.css}addedCallback(e){e.addStyles(this.styles)}removedCallback(e){e.removeStyles(this.styles)}}Yt.define(gr);m.partial=(o,...e)=>{const{styles:t,behaviors:r}=br(o,e);return new gr(t,r)};const Co=/fe-b\$\$start\$\$(\d+)\$\$(.+)\$\$fe-b/,No=/fe-b\$\$end\$\$(\d+)\$\$(.+)\$\$fe-b/,To=/fe-repeat\$\$start\$\$(\d+)\$\$fe-repeat/,Io=/fe-repeat\$\$end\$\$(\d+)\$\$fe-repeat/,Eo=/^(?:.{0,1000})fe-eb\$\$start\$\$(.+?)\$\$fe-eb/,Fo=/fe-eb\$\$end\$\$(.{0,1000})\$\$fe-eb(?:.{0,1000})$/;function Ho(o){return o&&o.nodeType===Node.COMMENT_NODE}const X=Object.freeze({attributeMarkerName:"data-fe-b",attributeBindingSeparator:" ",contentBindingStartMarker(o,e){return`fe-b$$start$$${o}$$${e}$$fe-b`},contentBindingEndMarker(o,e){return`fe-b$$end$$${o}$$${e}$$fe-b`},repeatStartMarker(o){return`fe-repeat$$start$$${o}$$fe-repeat`},repeatEndMarker(o){return`fe-repeat$$end$$${o}$$fe-repeat`},isContentBindingStartMarker(o){return Co.test(o)},isContentBindingEndMarker(o){return No.test(o)},isRepeatViewStartMarker(o){return To.test(o)},isRepeatViewEndMarker(o){return Io.test(o)},isElementBoundaryStartMarker(o){return Ho(o)&&Eo.test(o.data.trim())},isElementBoundaryEndMarker(o){return Ho(o)&&Fo.test(o.data)},parseAttributeBinding(o){const e=o.getAttribute(this.attributeMarkerName);return e===null?e:e.split(this.attributeBindingSeparator).map(t=>parseInt(t))},parseContentBindingStartMarker(o){return Oo(Co,o)},parseContentBindingEndMarker(o){return Oo(No,o)},parseRepeatStartMarker(o){return Ao(To,o)},parseRepeatEndMarker(o){return Ao(Io,o)},parseElementBoundaryStartMarker(o){return Mo(Eo,o.trim())},parseElementBoundaryEndMarker(o){return Mo(Fo,o)}});function Ao(o,e){const t=o.exec(e);return t===null?t:parseInt(t[1])}function Mo(o,e){const t=o.exec(e);return t===null?t:t[1]}function Oo(o,e){const t=o.exec(e);return t===null?t:[parseInt(t[1]),t[2]]}const it=Symbol.for("fe-hydration");function nt(o){return o[it]===it}const Jt=`fast-${Math.random().toString(36).substring(2,8)}`,ot=`${Jt}{`,De=`}${Jt}`,bi=De.length;let gi=0;const Zt=()=>`${Jt}-${++gi}`,mr=Object.freeze({interpolation:o=>`${ot}${o}${De}`,attribute:o=>`${Zt()}="${ot}${o}${De}"`,comment:o=>`<!--${ot}${o}${De}-->`}),yt=Object.freeze({parse(o,e){const t=o.split(ot);if(t.length===1)return null;const r=[];for(let i=0,n=t.length;i<n;++i){const a=t[i],c=a.indexOf(De);let h;if(c===-1)h=a;else{const d=a.substring(0,c);r.push(e[d]),h=a.substring(c+bi)}h!==""&&r.push(h)}return r}}),Ht=Kt(),W=Object.freeze({getForInstance:Ht.getForInstance,getByType:Ht.getByType,define(o,e){return e=e||{},e.type=o,Ht.register(e),o},assignAspect(o,e){if(!e){o.aspectType=E.content;return}switch(o.sourceAspect=e,e[0]){case":":o.targetAspect=e.substring(1),o.aspectType=o.targetAspect==="classList"?E.tokenList:E.property;break;case"?":o.targetAspect=e.substring(1),o.aspectType=E.booleanAttribute;break;case"@":o.targetAspect=e.substring(1),o.aspectType=E.event;break;default:o.targetAspect=e,o.aspectType=E.attribute;break}}});class eo{constructor(e){this.options=e}createHTML(e){return mr.attribute(e(this))}createBehavior(){return this}}xe(eo);class vr extends Error{constructor(e,t,r){super(e),this.factories=t,this.node=r}}function to(o){return o.nodeType===Node.COMMENT_NODE}function yr(o){return o.nodeType===Node.TEXT_NODE}function $r(o,e){const t=document.createRange();return t.setStart(o,0),t.setEnd(e,to(e)||yr(e)?e.data.length:e.childNodes.length),t}function mi(o){return o instanceof DocumentFragment&&"mode"in o}function vi(o,e,t){const r=$r(o,e),i=r.commonAncestorContainer,n=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT+NodeFilter.SHOW_COMMENT+NodeFilter.SHOW_TEXT,{acceptNode(d){return r.comparePoint(d,0)===0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a={},c={};let h=n.currentNode=o;for(;h!==null;){switch(h.nodeType){case Node.ELEMENT_NODE:{yi(h,t,a);break}case Node.COMMENT_NODE:{$i(h,n,t,a,c);break}}h=n.nextNode()}return r.detach(),{targets:a,boundaries:c}}function yi(o,e,t){const r=X.parseAttributeBinding(o);if(r!==null){for(const i of r){if(!e[i])throw new vr(`HydrationView was unable to successfully target factory on ${o.nodeName} inside ${o.getRootNode().host.nodeName}. This likely indicates a template mismatch between SSR rendering and hydration.`,e,o);st(e[i],o,t)}o.removeAttribute(X.attributeMarkerName)}}function $i(o,e,t,r,i){if(X.isElementBoundaryStartMarker(o)){ki(o,e);return}if(X.isContentBindingStartMarker(o.data)){const n=X.parseContentBindingStartMarker(o.data);if(n===null)return;const[a,c]=n,h=t[a],d=[];let s=e.nextSibling();o.data="";const f=s;for(;s!==null;){if(to(s)){const b=X.parseContentBindingEndMarker(s.data);if(b&&b[1]===c)break}d.push(s),s=e.nextSibling()}if(s===null){const b=o.getRootNode();throw new Error(`Error hydrating Comment node inside "${mi(b)?b.host.nodeName:b.nodeName}".`)}if(s.data="",d.length===1&&yr(d[0]))st(h,d[0],r);else{s!==f&&s.previousSibling!==null&&(i[h.targetNodeId]={first:f,last:s.previousSibling});const b=s.parentNode.insertBefore(document.createTextNode(""),s);st(h,b,r)}}}function ki(o,e){const t=X.parseElementBoundaryStartMarker(o.data);let r=e.nextSibling();for(;r!==null;){if(to(r)){const i=X.parseElementBoundaryEndMarker(r.data);if(i&&i===t)break}r=e.nextSibling()}}function st(o,e,t){if(o.targetNodeId===void 0)throw new Error("Factory could not be target to the node");t[o.targetNodeId]=e}var kr;function _t(o,e){const t=o.parentNode;let r=o,i;for(;r!==e;){if(i=r.nextSibling,!i)throw new Error(`Unmatched first/last child inside "${e.getRootNode().host.nodeName}".`);t.removeChild(r),r=i}t.removeChild(e)}class Sr{constructor(){this.index=0,this.length=0}get event(){return je.getEvent()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}eventDetail(){return this.event.detail}eventTarget(){return this.event.target}}class $t extends Sr{constructor(e,t,r){super(),this.fragment=e,this.factories=t,this.targets=r,this.behaviors=null,this.unbindables=[],this.source=null,this.isBound=!1,this.sourceLifetime=mt.unknown,this.context=this,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const r=e.parentNode;let i=this.firstChild,n;for(;i!==t;)n=i.nextSibling,r.insertBefore(i,e),i=n;r.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let r=this.firstChild,i;for(;r!==t;)i=r.nextSibling,e.appendChild(r),r=i;e.appendChild(t)}dispose(){_t(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}bind(e,t=this){if(this.source===e)return;let r=this.behaviors;if(r===null){this.source=e,this.context=t,this.behaviors=r=new Array(this.factories.length);const i=this.factories;for(let n=0,a=i.length;n<a;++n){const c=i[n].createBehavior();c.bind(this),r[n]=c}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let i=0,n=r.length;i<n;++i)r[i].bind(this)}this.isBound=!0}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}evaluateUnbindables(){const e=this.unbindables;for(let t=0,r=e.length;t<r;++t)e[t].unbind(this);e.length=0}static disposeContiguousBatch(e){if(e.length!==0){_t(e[0].firstChild,e[e.length-1].lastChild);for(let t=0,r=e.length;t<r;++t)e[t].unbind()}}}xe($t);v.defineProperty($t.prototype,"index");v.defineProperty($t.prototype,"length");const Ne={unhydrated:"unhydrated",hydrating:"hydrating",hydrated:"hydrated"};class Si extends Error{constructor(e,t,r,i){super(e),this.factory=t,this.fragment=r,this.templateString=i}}class wi extends Sr{constructor(e,t,r,i){super(),this.firstChild=e,this.lastChild=t,this.sourceTemplate=r,this.hostBindingTarget=i,this[kr]=it,this.context=this,this.source=null,this.isBound=!1,this.sourceLifetime=mt.unknown,this.unbindables=[],this.fragment=null,this.behaviors=null,this._hydrationStage=Ne.unhydrated,this._bindingViewBoundaries={},this._targets={},this.factories=r.compile().factories}get hydrationStage(){return this._hydrationStage}get targets(){return this._targets}get bindingViewBoundaries(){return this._bindingViewBoundaries}insertBefore(e){if(this.fragment!==null)if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const r=e.parentNode;let i=this.firstChild,n;for(;i!==t;)n=i.nextSibling,r.insertBefore(i,e),i=n;r.insertBefore(t,e)}}appendTo(e){this.fragment!==null&&e.appendChild(this.fragment)}remove(){const e=this.fragment||(this.fragment=document.createDocumentFragment()),t=this.lastChild;let r=this.firstChild,i;for(;r!==t;){if(i=r.nextSibling,!i)throw new Error(`Unmatched first/last child inside "${t.getRootNode().host.nodeName}".`);e.appendChild(r),r=i}e.appendChild(t)}bind(e,t=this){var r,i;if(this.hydrationStage!==Ne.hydrated&&(this._hydrationStage=Ne.hydrating),this.source===e)return;let n=this.behaviors;if(n===null){this.source=e,this.context=t;try{const{targets:c,boundaries:h}=vi(this.firstChild,this.lastChild,this.factories);this._targets=c,this._bindingViewBoundaries=h}catch(c){if(c instanceof vr){let h=this.sourceTemplate.html;typeof h!="string"&&(h=h.innerHTML),c.templateString=h}throw c}this.behaviors=n=new Array(this.factories.length);const a=this.factories;for(let c=0,h=a.length;c<h;++c){const d=a[c];if(d.targetNodeId==="h"&&this.hostBindingTarget&&st(d,this.hostBindingTarget,this._targets),d.targetNodeId in this.targets){const s=d.createBehavior();s.bind(this),n[c]=s}else{let s=this.sourceTemplate.html;throw typeof s!="string"&&(s=s.innerHTML),new Si(`HydrationView was unable to successfully target bindings inside "${(i=((r=this.firstChild)===null||r===void 0?void 0:r.getRootNode()).host)===null||i===void 0?void 0:i.nodeName}".`,d,$r(this.firstChild,this.lastChild).cloneContents(),s)}}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let a=0,c=n.length;a<c;++a)n[a].bind(this)}this.isBound=!0,this._hydrationStage=Ne.hydrated}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}dispose(){_t(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}evaluateUnbindables(){const e=this.unbindables;for(let t=0,r=e.length;t<r;++t)e[t].unbind(this);e.length=0}}kr=it;xe(wi);function xi(o){return o.create!==void 0}function Bi(o,e,t,r){if(t==null&&(t=""),xi(t)){o.textContent="";let i=o.$fastView;if(i===void 0)if(nt(r)&&nt(t)&&r.bindingViewBoundaries[this.targetNodeId]!==void 0&&r.hydrationStage!==Ne.hydrated){const n=r.bindingViewBoundaries[this.targetNodeId];i=t.hydrate(n.first,n.last)}else i=t.create();else o.$fastTemplate!==t&&(i.isComposed&&(i.remove(),i.unbind()),i=t.create());i.isComposed?i.needsBindOnly&&(i.needsBindOnly=!1,i.bind(r.source,r.context)):(i.isComposed=!0,i.bind(r.source,r.context),i.insertBefore(o),o.$fastView=i,o.$fastTemplate=t)}else{const i=o.$fastView;i!==void 0&&i.isComposed&&(i.isComposed=!1,i.remove(),i.needsBindOnly?i.needsBindOnly=!1:i.unbind()),o.textContent=t}}function Ci(o,e,t){var r;const i=`${this.id}-t`,n=(r=o[i])!==null&&r!==void 0?r:o[i]={v:0,cv:Object.create(null)},a=n.cv;let c=n.v;const h=o[e];if(t!=null&&t.length){const d=t.split(/\s+/);for(let s=0,f=d.length;s<f;++s){const b=d[s];b!==""&&(a[b]=c,h.add(b))}}if(n.v=c+1,c!==0){c-=1;for(const d in a)a[d]===c&&h.remove(d)}}const Ni={[E.attribute]:Ee.setAttribute,[E.booleanAttribute]:Ee.setBooleanAttribute,[E.property]:(o,e,t)=>o[e]=t,[E.content]:Bi,[E.tokenList]:Ci,[E.event]:()=>{}};class Te{constructor(e){this.dataBinding=e,this.updateTarget=null,this.aspectType=E.content}createHTML(e){return mr.interpolation(e(this))}createBehavior(){var e;if(this.updateTarget===null){const t=Ni[this.aspectType],r=(e=this.dataBinding.policy)!==null&&e!==void 0?e:this.policy;if(!t)throw A.error(1205);this.data=`${this.id}-d`,this.updateTarget=r.protect(this.targetTagName,this.aspectType,this.targetAspect,t)}return this}bind(e){var t;const r=e.targets[this.targetNodeId],i=nt(e)&&e.hydrationStage&&e.hydrationStage!==Ne.hydrated;switch(this.aspectType){case E.event:r[this.data]=e,r.addEventListener(this.targetAspect,this,this.dataBinding.options);break;case E.content:e.onUnbind(this);default:const n=(t=r[this.data])!==null&&t!==void 0?t:r[this.data]=this.dataBinding.createObserver(this,this);if(n.target=r,n.controller=e,i&&(this.aspectType===E.attribute||this.aspectType===E.booleanAttribute)){n.bind(e);break}this.updateTarget(r,this.targetAspect,n.bind(e),e);break}}unbind(e){const r=e.targets[this.targetNodeId].$fastView;r!==void 0&&r.isComposed&&(r.unbind(),r.needsBindOnly=!0)}handleEvent(e){const t=e.currentTarget[this.data];if(t.isBound){je.setEvent(e);const r=this.dataBinding.evaluate(t.source,t.context);je.setEvent(null),r!==!0&&e.preventDefault()}}handleChange(e,t){const r=t.target,i=t.controller;this.updateTarget(r,this.targetAspect,t.bind(i),i)}}W.define(Te,{aspected:!0});const wr=(o,e)=>`${o}.${e}`,zo={},U={index:0,node:null};function Vo(o){o.startsWith("fast-")||A.warn(1204,{name:o})}const Ti=new Proxy(document.createElement("div"),{get(o,e){Vo(e);const t=Reflect.get(o,e);return Me(t)?t.bind(o):t},set(o,e,t){return Vo(e),Reflect.set(o,e,t)}});class Ii{constructor(e,t,r){this.fragment=e,this.directives=t,this.policy=r,this.proto=null,this.nodeIds=new Set,this.descriptors={},this.factories=[]}addFactory(e,t,r,i,n){var a,c;this.nodeIds.has(r)||(this.nodeIds.add(r),this.addTargetDescriptor(t,r,i)),e.id=(a=e.id)!==null&&a!==void 0?a:Zt(),e.targetNodeId=r,e.targetTagName=n,e.policy=(c=e.policy)!==null&&c!==void 0?c:this.policy,this.factories.push(e)}freeze(){return this.proto=Object.create(null,this.descriptors),this}addTargetDescriptor(e,t,r){const i=this.descriptors;if(t==="r"||t==="h"||i[t])return;if(!i[e]){const a=e.lastIndexOf("."),c=e.substring(0,a),h=parseInt(e.substring(a+1));this.addTargetDescriptor(c,e,h)}let n=zo[t];if(!n){const a=`_${t}`;zo[t]=n={get(){var c;return(c=this[a])!==null&&c!==void 0?c:this[a]=this[e].childNodes[r]}}}i[t]=n}createView(e){const t=this.fragment.cloneNode(!0),r=Object.create(this.proto);r.r=t,r.h=e??Ti;for(const i of this.nodeIds)r[i];return new $t(t,this.factories,r)}}function xr(o,e,t,r,i,n=!1){const a=t.attributes,c=o.directives;for(let h=0,d=a.length;h<d;++h){const s=a[h],f=s.value,b=yt.parse(f,c);let O=null;b===null?n&&(O=new Te(pr(()=>f,o.policy)),W.assignAspect(O,s.name)):O=oo.aggregate(b,o.policy),O!==null&&(t.removeAttributeNode(s),h--,d--,o.addFactory(O,e,r,i,t.tagName))}}function Ei(o,e,t,r,i){const n=yt.parse(e.textContent,o.directives);if(n===null)return U.node=e.nextSibling,U.index=i+1,U;let a,c=a=e;for(let h=0,d=n.length;h<d;++h){const s=n[h];h!==0&&(i++,r=wr(t,i),a=c.parentNode.insertBefore(document.createTextNode(""),c.nextSibling)),Y(s)?a.textContent=s:(a.textContent=" ",W.assignAspect(s),o.addFactory(s,t,r,i,null)),c=a}return U.index=i+1,U.node=c.nextSibling,U}function Br(o,e,t){let r=0,i=e.firstChild;for(;i;){const n=Fi(o,t,i,r);i=n.node,r=n.index}}function Fi(o,e,t,r){const i=wr(e,r);switch(t.nodeType){case 1:xr(o,e,t,i,r),Br(o,t,i);break;case 3:return Ei(o,t,e,i,r);case 8:const n=yt.parse(t.data,o.directives);n!==null&&o.addFactory(oo.aggregate(n),e,i,r,null);break}return U.index=r+1,U.node=t.nextSibling,U}function Hi(o,e){return o&&o.nodeType==8&&yt.parse(o.data,e)!==null}const Po="TEMPLATE",oo={compile(o,e,t=Ee.policy){let r;if(Y(o)){r=document.createElement(Po),r.innerHTML=t.createHTML(o);const a=r.content.firstElementChild;a!==null&&a.tagName===Po&&(r=a)}else r=o;!r.content.firstChild&&!r.content.lastChild&&r.content.appendChild(document.createComment(""));const i=document.adoptNode(r.content),n=new Ii(i,e,t);return xr(n,"",r,"h",0,!0),(Hi(i.firstChild,e)||i.childNodes.length===1&&Object.keys(e).length>0)&&i.insertBefore(document.createComment(""),i.firstChild),Br(n,i,"r"),U.node=null,n.freeze()},setDefaultStrategy(o){this.compile=o},aggregate(o,e=Ee.policy){if(o.length===1)return o[0];let t,r=!1,i;const n=o.length,a=o.map(d=>Y(d)?()=>d:(t=d.sourceAspect||t,r=r||d.dataBinding.isVolatile,i=i||d.dataBinding.policy,d.dataBinding.evaluate)),c=(d,s)=>{let f="";for(let b=0;b<n;++b)f+=a[b](d,s);return f},h=new Te(Qt(c,i??e,r));return W.assignAspect(h,t),h}},Ai=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,Mi=Object.create(null);class ye{constructor(e,t=Mi){this.html=e,this.factories=t}createHTML(e){const t=this.factories;for(const r in t)e(t[r]);return this.html}}ye.empty=new ye("");W.define(ye);function Oi(o,e,t,r=W.getForInstance(o)){if(r.aspected){const i=Ai.exec(e);i!==null&&W.assignAspect(o,i[2])}return o.createHTML(t)}class kt{constructor(e,t={},r){this.policy=r,this.result=null,this.html=e,this.factories=t}compile(){return this.result===null&&(this.result=oo.compile(this.html,this.factories,this.policy)),this.result}create(e){return this.compile().createView(e)}inline(){return new ye(Y(this.html)?this.html:this.html.innerHTML,this.factories)}withPolicy(e){if(this.result)throw A.error(1208);if(this.policy)throw A.error(1207);return this.policy=e,this}render(e,t,r){const i=this.create(r);return i.bind(e),i.appendTo(t),i}static create(e,t,r){let i="";const n=Object.create(null),a=c=>{var h;const d=(h=c.id)!==null&&h!==void 0?h:c.id=Zt();return n[d]=c,d};for(let c=0,h=e.length-1;c<h;++c){const d=e[c];let s=t[c],f;if(i+=d,Me(s))s=new Te(Qt(s));else if(s instanceof vt)s=new Te(s);else if(!(f=W.getForInstance(s))){const b=s;s=new Te(pr(()=>b))}i+=Oi(s,d,a,f)}return new kt(i+e[e.length-1],n,r)}}xe(kt);const T=(o,...e)=>{if(Array.isArray(o)&&Array.isArray(o.raw))return kt.create(o,e);throw A.error(1206)};T.partial=o=>new ye(o);class Cr extends eo{bind(e){e.source[this.options]=e.targets[this.targetNodeId]}}W.define(Cr);const G=o=>new Cr(o),zi=o=>o.nodeType===1,jt=o=>o?e=>e.nodeType===1&&e.matches(o):zi;class Nr extends eo{get id(){return this._id}set id(e){this._id=e,this._controllerProperty=`${e}-c`}bind(e){const t=e.targets[this.targetNodeId];t[this._controllerProperty]=e,this.updateTarget(e.source,this.computeNodes(t)),this.observe(t),e.onUnbind(this)}unbind(e){const t=e.targets[this.targetNodeId];this.updateTarget(e.source,di),this.disconnect(t),t[this._controllerProperty]=null}getSource(e){return e[this._controllerProperty].source}updateTarget(e,t){e[this.options.property]=t}computeNodes(e){let t=this.getNodes(e);return"filter"in this.options&&(t=t.filter(this.options.filter)),t}}const Lo="slotchange";class Tr extends Nr{observe(e){e.addEventListener(Lo,this)}disconnect(e){e.removeEventListener(Lo,this)}getNodes(e){return e.assignedNodes(this.options)}handleEvent(e){const t=e.currentTarget;this.updateTarget(this.getSource(t),this.computeNodes(t))}}W.define(Tr);function $e(o){return Y(o)&&(o={property:o}),new Tr(o)}class Ir extends Nr{constructor(e){super(e),this.observerProperty=Symbol(),this.handleEvent=(t,r)=>{const i=r.target;this.updateTarget(this.getSource(i),this.computeNodes(i))},e.childList=!0}observe(e){let t=e[this.observerProperty];t||(t=new MutationObserver(this.handleEvent),t.toJSON=ar,e[this.observerProperty]=t),t.target=e,t.observe(e,this.options)}disconnect(e){const t=e[this.observerProperty];t.target=null,t.disconnect()}getNodes(e){return"selector"in this.options?Array.from(e.querySelectorAll(this.options.selector)):Array.from(e.childNodes)}}W.define(Ir);function Vi(o){return Y(o)&&(o={property:o}),new Ir(o)}const Do="boolean",Ro="reflect",at=Object.freeze({locate:dr()}),Pi={toView(o){return o?"true":"false"},fromView(o){return!(o==null||o==="false"||o===!1||o===0)}};function _o(o){if(o==null)return null;const e=o*1;return isNaN(e)?null:e}const St={toView(o){const e=_o(o);return e&&e.toString()},fromView:_o};class lt{constructor(e,t,r=t.toLowerCase(),i=Ro,n){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=r,this.mode=i,this.converter=n,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,i===Do&&n===void 0&&(this.converter=Pi)}setValue(e,t){const r=e[this.fieldName],i=this.converter;i!==void 0&&(t=i.fromView(t)),r!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](r,t),e.$fastController.notify(this.name))}getValue(e){return v.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,r=this.guards;r.has(e)||t==="fromView"||J.enqueue(()=>{r.add(e);const i=e[this.fieldName];switch(t){case Ro:const n=this.converter;Ee.setAttribute(e,this.attribute,n!==void 0?n.toView(i):i);break;case Do:Ee.setBooleanAttribute(e,this.attribute,i);break}r.delete(e)})}static collect(e,...t){const r=[];t.push(at.locate(e));for(let i=0,n=t.length;i<n;++i){const a=t[i];if(a!==void 0)for(let c=0,h=a.length;c<h;++c){const d=a[c];Y(d)?r.push(new lt(e,d)):r.push(new lt(e,d.property,d.attribute,d.mode,d.converter))}}return r}}function u(o,e){let t;function r(i,n){arguments.length>1&&(t.property=n),at.locate(i.constructor).push(t)}if(arguments.length>1){t={},r(o,e);return}return t=o===void 0?{}:o,r}const jo={mode:"open"},qo={},Wo=new Set,dt=A.getById(ve.elementRegistry,()=>Kt());class R{constructor(e,t=e.definition){var r;this.platformDefined=!1,Y(t)&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template,this.registry=(r=t.registry)!==null&&r!==void 0?r:customElements;const i=e.prototype,n=lt.collect(e,t.attributes),a=new Array(n.length),c={},h={};for(let d=0,s=n.length;d<s;++d){const f=n[d];a[d]=f.attribute,c[f.name]=f,h[f.attribute]=f,v.defineProperty(i,f)}Reflect.defineProperty(e,"observedAttributes",{value:a,enumerable:!0}),this.attributes=n,this.propertyLookup=c,this.attributeLookup=h,this.shadowOptions=t.shadowOptions===void 0?jo:t.shadowOptions===null?void 0:Object.assign(Object.assign({},jo),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?qo:Object.assign(Object.assign({},qo),t.elementOptions),this.styles=z.normalize(t.styles),dt.register(this)}get isDefined(){return this.platformDefined}define(e=this.registry){const t=this.type;return e.get(this.name)||(this.platformDefined=!0,e.define(this.name,t,this.elementOptions)),this}static compose(e,t){return Wo.has(e)||dt.getByType(e)?new R(class extends e{},t):new R(e,t)}static registerBaseType(e){Wo.add(e)}}R.getByType=dt.getByType;R.getForInstance=dt.getForInstance;v.defineProperty(R.prototype,"template");class Li extends MutationObserver{constructor(e){function t(r){this.callback.call(null,r.filter(i=>this.observedNodes.has(i.target)))}super(t),this.callback=e,this.observedNodes=new Set}observe(e,t){this.observedNodes.add(e),super.observe(e,t)}unobserve(e){this.observedNodes.delete(e),this.observedNodes.size<1&&this.disconnect()}}const Di={bubbles:!0,composed:!0,cancelable:!0},rt="isConnected",Er=new WeakMap;function Re(o){var e,t;return(t=(e=o.shadowRoot)!==null&&e!==void 0?e:Er.get(o))!==null&&t!==void 0?t:null}let Uo;class le extends cr{constructor(e,t){super(e),this.boundObservables=null,this.needsInitialization=!0,this.hasExistingShadowRoot=!1,this._template=null,this.stage=3,this.guardBehaviorConnection=!1,this.behaviors=null,this.behaviorsConnected=!1,this._mainStyles=null,this.$fastController=this,this.view=null,this.source=e,this.definition=t;const r=t.shadowOptions;if(r!==void 0){let n=e.shadowRoot;n?this.hasExistingShadowRoot=!0:(n=e.attachShadow(r),r.mode==="closed"&&Er.set(e,n))}const i=v.getAccessors(e);if(i.length>0){const n=this.boundObservables=Object.create(null);for(let a=0,c=i.length;a<c;++a){const h=i[a].name,d=e[h];d!==void 0&&(delete e[h],n[h]=d)}}}get isConnected(){return v.track(this,rt),this.stage===1}get context(){var e,t;return(t=(e=this.view)===null||e===void 0?void 0:e.context)!==null&&t!==void 0?t:je.default}get isBound(){var e,t;return(t=(e=this.view)===null||e===void 0?void 0:e.isBound)!==null&&t!==void 0?t:!1}get sourceLifetime(){var e;return(e=this.view)===null||e===void 0?void 0:e.sourceLifetime}get template(){var e;if(this._template===null){const t=this.definition;this.source.resolveTemplate?this._template=this.source.resolveTemplate():t.template&&(this._template=(e=t.template)!==null&&e!==void 0?e:null)}return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get mainStyles(){var e;if(this._mainStyles===null){const t=this.definition;this.source.resolveStyles?this._mainStyles=this.source.resolveStyles():t.styles&&(this._mainStyles=(e=t.styles)!==null&&e!==void 0?e:null)}return this._mainStyles}set mainStyles(e){this._mainStyles!==e&&(this._mainStyles!==null&&this.removeStyles(this._mainStyles),this._mainStyles=e,this.needsInitialization||this.addStyles(e))}onUnbind(e){var t;(t=this.view)===null||t===void 0||t.onUnbind(e)}addBehavior(e){var t,r;const i=(t=this.behaviors)!==null&&t!==void 0?t:this.behaviors=new Map,n=(r=i.get(e))!==null&&r!==void 0?r:0;n===0?(i.set(e,1),e.addedCallback&&e.addedCallback(this),e.connectedCallback&&!this.guardBehaviorConnection&&(this.stage===1||this.stage===0)&&e.connectedCallback(this)):i.set(e,n+1)}removeBehavior(e,t=!1){const r=this.behaviors;if(r===null)return;const i=r.get(e);i!==void 0&&(i===1||t?(r.delete(e),e.disconnectedCallback&&this.stage!==3&&e.disconnectedCallback(this),e.removedCallback&&e.removedCallback(this)):r.set(e,i-1))}addStyles(e){var t;if(!e)return;const r=this.source;if(e instanceof HTMLElement)((t=Re(r))!==null&&t!==void 0?t:this.source).append(e);else if(!e.isAttachedTo(r)){const i=e.behaviors;if(e.addStylesTo(r),i!==null)for(let n=0,a=i.length;n<a;++n)this.addBehavior(i[n])}}removeStyles(e){var t;if(!e)return;const r=this.source;if(e instanceof HTMLElement)((t=Re(r))!==null&&t!==void 0?t:r).removeChild(e);else if(e.isAttachedTo(r)){const i=e.behaviors;if(e.removeStylesFrom(r),i!==null)for(let n=0,a=i.length;n<a;++n)this.removeBehavior(i[n])}}connect(){this.stage===3&&(this.stage=0,this.bindObservables(),this.connectBehaviors(),this.needsInitialization?(this.renderTemplate(this.template),this.addStyles(this.mainStyles),this.needsInitialization=!1):this.view!==null&&this.view.bind(this.source),this.stage=1,v.notify(this,rt))}bindObservables(){if(this.boundObservables!==null){const e=this.source,t=this.boundObservables,r=Object.keys(t);for(let i=0,n=r.length;i<n;++i){const a=r[i];e[a]=t[a]}this.boundObservables=null}}connectBehaviors(){if(this.behaviorsConnected===!1){const e=this.behaviors;if(e!==null){this.guardBehaviorConnection=!0;for(const t of e.keys())t.connectedCallback&&t.connectedCallback(this);this.guardBehaviorConnection=!1}this.behaviorsConnected=!0}}disconnectBehaviors(){if(this.behaviorsConnected===!0){const e=this.behaviors;if(e!==null)for(const t of e.keys())t.disconnectedCallback&&t.disconnectedCallback(this);this.behaviorsConnected=!1}}disconnect(){this.stage===1&&(this.stage=2,v.notify(this,rt),this.view!==null&&this.view.unbind(),this.disconnectBehaviors(),this.stage=3)}onAttributeChangedCallback(e,t,r){const i=this.definition.attributeLookup[e];i!==void 0&&i.onAttributeChangedCallback(this.source,r)}emit(e,t,r){return this.stage===1?this.source.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Di),r))):!1}renderTemplate(e){var t;const r=this.source,i=(t=Re(r))!==null&&t!==void 0?t:r;if(this.view!==null)this.view.dispose(),this.view=null;else if(!this.needsInitialization||this.hasExistingShadowRoot){this.hasExistingShadowRoot=!1;for(let n=i.firstChild;n!==null;n=i.firstChild)i.removeChild(n)}e&&(this.view=e.render(r,i,r),this.view.sourceLifetime=mt.coupled)}static forCustomElement(e,t=!1){const r=e.$fastController;if(r!==void 0&&!t)return r;const i=R.getForInstance(e);if(i===void 0)throw A.error(1401);return v.getNotifier(i).subscribe({handleChange:()=>{le.forCustomElement(e,!0),e.$fastController.connect()}},"template"),e.$fastController=new Uo(e,i)}static setStrategy(e){Uo=e}}xe(le);le.setStrategy(le);function ct(o){var e;return"adoptedStyleSheets"in o?o:(e=Re(o))!==null&&e!==void 0?e:o.getRootNode()}class wt{constructor(e){const t=wt.styleSheetCache;this.sheets=e.map(r=>{if(r instanceof CSSStyleSheet)return r;let i=t.get(r);return i===void 0&&(i=new CSSStyleSheet,i.replaceSync(r),t.set(r,i)),i})}addStylesTo(e){Fr(ct(e),this.sheets)}removeStylesFrom(e){Hr(ct(e),this.sheets)}}wt.styleSheetCache=new Map;let Ri=0;const _i=()=>`fast-${++Ri}`;function Xo(o){return o===document?document.body:o}class ji{constructor(e){this.styles=e,this.styleClass=_i()}addStylesTo(e){e=Xo(ct(e));const t=this.styles,r=this.styleClass;for(let i=0;i<t.length;i++){const n=document.createElement("style");n.innerHTML=t[i],n.className=r,e.append(n)}}removeStylesFrom(e){e=Xo(ct(e));const t=e.querySelectorAll(`.${this.styleClass}`);for(let r=0,i=t.length;r<i;++r)e.removeChild(t[r])}}let Fr=(o,e)=>{o.adoptedStyleSheets=[...o.adoptedStyleSheets,...e]},Hr=(o,e)=>{o.adoptedStyleSheets=o.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(z.supportsAdoptedStyleSheets){try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Fr=(o,e)=>{o.adoptedStyleSheets.push(...e)},Hr=(o,e)=>{for(const t of e){const r=o.adoptedStyleSheets.indexOf(t);r!==-1&&o.adoptedStyleSheets.splice(r,1)}}}catch{}z.setDefaultStrategy(wt)}else z.setDefaultStrategy(ji);const Go="defer-hydration",Ko="needs-hydration";class me extends le{static hydrationObserverHandler(e){for(const t of e)me.hydrationObserver.unobserve(t.target),t.target.$fastController.connect()}connect(){var e,t;if(this.needsHydration===void 0&&(this.needsHydration=this.source.getAttribute(Ko)!==null),this.source.hasAttribute(Go)){me.hydrationObserver.observe(this.source,{attributeFilter:[Go]});return}if(!this.needsHydration){super.connect();return}if(this.stage!==3)return;this.stage=0,this.bindObservables(),this.connectBehaviors();const r=this.source,i=(e=Re(r))!==null&&e!==void 0?e:r;if(this.template)if(nt(this.template)){let n=i.firstChild,a=i.lastChild;r.shadowRoot===null&&(X.isElementBoundaryStartMarker(n)&&(n.data="",n=n.nextSibling),X.isElementBoundaryEndMarker(a)&&(a.data="",a=a.previousSibling)),this.view=this.template.hydrate(n,a,r),(t=this.view)===null||t===void 0||t.bind(this.source)}else this.renderTemplate(this.template);this.addStyles(this.mainStyles),this.stage=1,this.source.removeAttribute(Ko),this.needsInitialization=this.needsHydration=!1,v.notify(this,rt)}disconnect(){super.disconnect(),me.hydrationObserver.unobserve(this.source)}static install(){le.setStrategy(me)}}me.hydrationObserver=new Li(me.hydrationObserverHandler);function Ar(o){const e=class extends o{constructor(){super(),le.forCustomElement(this)}$emit(t,r,i){return this.$fastController.emit(t,r,i)}connectedCallback(){this.$fastController.connect()}disconnectedCallback(){this.$fastController.disconnect()}attributeChangedCallback(t,r,i){this.$fastController.onAttributeChangedCallback(t,r,i)}};return R.registerBaseType(e),e}function qi(o,e){return Me(o)?R.compose(o,e):R.compose(this,o)}function Wi(o,e){return Me(o)?R.compose(o,e).define().type:R.compose(this,o).define().type}function Ui(o){return Ar(o)}const ue=Object.assign(Ar(HTMLElement),{from:Ui,define:Wi,compose:qi}),Xi="Enter",Gi=" ";let Ki=0;function Mr(o=""){return`${o}${Ki++}`}function ke(o){return o?typeof o=="string"?new ye(o):"inline"in o?o.inline():o:ye.empty}const Qi=o=>{var e;return o.nodeType!==Node.TEXT_NODE||!!((e=o.nodeValue)!=null&&e.trim().length)},Yi=":host([hidden]){display:none}";function te(o){return`${Yi}:host{display:${o}}`}class Ji{constructor(e){this.listenerCache=new WeakMap,this.query=e}connectedCallback(e){const{query:t}=this;let r=this.listenerCache.get(e);r||(r=this.constructListener(e),this.listenerCache.set(e,r)),r.bind(t)(),t.addEventListener("change",r)}disconnectedCallback(e){const t=this.listenerCache.get(e);t&&this.query.removeEventListener("change",t)}}class Ge extends Ji{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new Ge(e,t)}constructListener(e){let t=!1;const r=this.styles;return function(){const{matches:n}=this;n&&!t?(e.addStyles(r),t=n):!n&&t&&(e.removeStyles(r),t=n)}}removedCallback(e){e.removeStyles(this.styles)}}const ro=Ge.with(window.matchMedia("(forced-colors)"));Ge.with(window.matchMedia("(prefers-color-scheme: dark)"));Ge.with(window.matchMedia("(prefers-color-scheme: light)"));CSS.supports("anchor-name: --a");const Or=CSS.supports("selector(:state(g))");class zr{}function Vr(o){return T` <slot name="end" ${G("end")}>${ke(o.end)}</slot> `.inline()}function io(o){return T` <slot name="start" ${G("start")}>${ke(o.start)}</slot> `.inline()}function Pr(o,...e){const t=at.locate(o);e.forEach(r=>{Object.getOwnPropertyNames(r.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(o.prototype,n,Object.getOwnPropertyDescriptor(r.prototype,n))}),at.locate(r).forEach(n=>t.push(n))})}const ae="var(--colorNeutralForeground1)",Zi="var(--colorNeutralForeground1Hover)",en="var(--colorNeutralForeground1Pressed)",qt="var(--colorNeutralForeground2)",Lr="var(--colorNeutralForeground2Hover)",Dr="var(--colorNeutralForeground2Pressed)",Qo="var(--colorNeutralForeground2BrandHover)",Yo="var(--colorNeutralForeground2BrandPressed)",xt="var(--colorNeutralForeground3)",tn="var(--colorNeutralForeground3Hover)",on="var(--colorNeutralForeground3Pressed)",Rr="var(--colorNeutralForeground4)",Se="var(--colorNeutralForegroundDisabled)",At="var(--colorNeutralForegroundOnBrand)",Bt="var(--colorNeutralForegroundInverted)",rn="var(--colorNeutralForegroundInvertedHover)",nn="var(--colorNeutralForegroundInvertedPressed)",Z="var(--colorNeutralBackground1)",_r="var(--colorNeutralBackground1Hover)",jr="var(--colorNeutralBackground1Pressed)",Wt="var(--colorNeutralBackground3)",sn="var(--colorNeutralBackgroundInverted)",an="var(--colorSubtleBackground)",ln="var(--colorSubtleBackgroundHover)",dn="var(--colorSubtleBackgroundPressed)",K="var(--colorTransparentBackground)",Jo="var(--colorTransparentBackgroundHover)",Zo="var(--colorTransparentBackgroundPressed)",Ke="var(--colorNeutralBackgroundDisabled)",cn="var(--colorBrandBackground)",hn="var(--colorBrandBackgroundHover)",un="var(--colorBrandBackgroundPressed)",ht="var(--colorCompoundBrandBackground)",ut="var(--colorCompoundBrandBackgroundHover)",pt="var(--colorCompoundBrandBackgroundPressed)",Fe="var(--colorNeutralStrokeAccessible)",qe="var(--colorNeutralStrokeAccessibleHover)",We="var(--colorNeutralStrokeAccessiblePressed)",ft="var(--colorNeutralStroke1)",no="var(--colorNeutralStroke1Hover)",so="var(--colorNeutralStroke1Pressed)",Ct="var(--colorCompoundBrandStroke)",pn="var(--colorCompoundBrandStrokeHover)",qr="var(--colorCompoundBrandStrokePressed)",Q="var(--colorNeutralStrokeDisabled)",de="var(--colorTransparentStroke)",Ut="var(--colorTransparentStrokeInteractive)",He="var(--colorStrokeFocus2)",fn="var(--colorPaletteRedBorder2)",bn="var(--colorPaletteRedForeground1)",Wr="var(--borderRadiusNone)",bt="var(--borderRadiusSmall)",j="var(--borderRadiusMedium)",gn="var(--borderRadiusLarge)",ao="var(--borderRadiusCircular)",B="var(--fontFamilyBase)",Ur="var(--fontSizeBase100)",Be="var(--fontSizeBase200)",ce="var(--fontSizeBase300)",he="var(--fontSizeBase400)",Xr="var(--fontSizeBase500)",Gr="var(--fontSizeBase600)",mn="var(--fontSizeHero700)",vn="var(--fontSizeHero800)",yn="var(--fontSizeHero900)",$n="var(--fontSizeHero1000)",q="var(--fontWeightRegular)",L="var(--fontWeightSemibold)",lo="var(--fontWeightBold)",Kr="var(--lineHeightBase100)",pe="var(--lineHeightBase200)",fe="var(--lineHeightBase300)",be="var(--lineHeightBase400)",kn="var(--lineHeightBase500)",Sn="var(--lineHeightBase600)",wn="var(--lineHeightHero700)",xn="var(--lineHeightHero800)",Bn="var(--lineHeightHero900)",Cn="var(--lineHeightHero1000)",Qr="var(--shadow2)",Yr="var(--shadow4)",Nn="var(--shadow16)",P="var(--strokeWidthThin)",we="var(--strokeWidthThick)",se="var(--spacingHorizontalXXS)",Ae="var(--spacingHorizontalXS)",Ie="var(--spacingHorizontalSNudge)",co="var(--spacingHorizontalS)",Jr="var(--spacingHorizontalMNudge)",Ue="var(--spacingHorizontalM)",Tn="var(--spacingHorizontalL)",er="var(--spacingVerticalXXS)",Xt="var(--spacingVerticalXS)",tr="var(--spacingVerticalSNudge)",Gt="var(--spacingVerticalS)",In="var(--spacingVerticalM)",Zr="var(--durationUltraFast)",En="var(--durationFaster)",ho="var(--durationNormal)",ei="var(--curveAccelerateMid)",ti="var(--curveDecelerateMid)",oi="var(--curveEasyEase)",I=Object.freeze({prefix:"fluent",shadowRootMode:"open",registry:customElements}),Ze={submit:"submit",reset:"reset"},ri=m.partial`
  font-family: ${B};
  font-size: ${ce};
  line-height: ${fe};
  font-weight: ${q};
`;m.partial`
  font-family: ${B};
  font-size: ${ce};
  line-height: ${fe};
  font-weight: ${L};
`;m.partial`
  font-family: ${B};
  font-size: ${ce};
  line-height: ${fe};
  font-weight: ${lo};
`;const Fn=m.partial`
  font-family: ${B};
  font-size: ${he};
  line-height: ${be};
  font-weight: ${q};
`,ii=m.partial`
  font-family: ${B};
  font-size: ${Be};
  line-height: ${pe};
  font-weight: ${q};
`;m.partial`
  font-family: ${B};
  font-size: ${Be};
  line-height: ${pe};
  font-weight: ${L};
`;m.partial`
  font-family: ${B};
  font-size: ${Be};
  line-height: ${pe};
  font-weight: ${lo};
`;m.partial`
  font-family: ${B};
  font-size: ${Ur};
  line-height: ${Kr};
  font-weight: ${q};
`;m.partial`
  font-family: ${B};
  font-size: ${Ur};
  line-height: ${Kr};
  font-weight: ${L};
`;m.partial`
  font-family: ${B};
  font-size: ${Xr};
  line-height: ${kn};
  font-weight: ${L};
`;m.partial`
  font-family: ${B};
  font-size: ${he};
  line-height: ${be};
  font-weight: ${L};
`;m.partial`
  font-family: ${B};
  font-size: ${he};
  line-height: ${be};
  font-weight: ${lo};
`;m.partial`
  font-family: ${B};
  font-size: ${vn};
  line-height: ${xn};
  font-weight: ${L};
`;m.partial`
  font-family: ${B};
  font-size: ${mn};
  line-height: ${wn};
  font-weight: ${L};
`;m.partial`
  font-family: ${B};
  font-size: ${Gr};
  line-height: ${Sn};
  font-weight: ${L};
`;m.partial`
  font-family: ${B};
  font-size: ${yn};
  line-height: ${Bn};
  font-weight: ${L};
`;m.partial`
  font-family: ${B};
  font-size: ${$n};
  line-height: ${Cn};
  font-weight: ${L};
`;const fo=class fo extends ue{disabledFocusableChanged(e,t){this.$fastController.isConnected&&(this.elementInternals.ariaDisabled=`${!!t}`)}get form(){return this.elementInternals.form}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}typeChanged(e,t){var r,i,n;t!==Ze.submit&&((r=this.formSubmissionFallbackControl)==null||r.remove(),(n=(i=this.shadowRoot)==null?void 0:i.querySelector('slot[name="internal"]'))==null||n.remove())}clickHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}return this.press(),!0}connectedCallback(){super.connectedCallback(),this.elementInternals.ariaDisabled=`${!!this.disabledFocusable}`}constructor(){super(),this.disabledFocusable=!1,this.tabIndex=0,this.elementInternals=this.attachInternals(),this.elementInternals.role="button"}createAndInsertFormSubmissionFallbackControl(){var r,i;const e=this.formSubmissionFallbackControlSlot??document.createElement("slot");e.setAttribute("name","internal"),(r=this.shadowRoot)==null||r.appendChild(e),this.formSubmissionFallbackControlSlot=e;const t=this.formSubmissionFallbackControl??document.createElement("button");t.style.display="none",t.setAttribute("type","submit"),t.setAttribute("slot","internal"),this.formNoValidate&&t.toggleAttribute("formnovalidate",!0),(i=this.elementInternals.form)!=null&&i.id&&t.setAttribute("form",this.elementInternals.form.id),this.name&&t.setAttribute("name",this.name),this.value&&t.setAttribute("value",this.value),this.formAction&&t.setAttribute("formaction",this.formAction??""),this.formEnctype&&t.setAttribute("formenctype",this.formEnctype??""),this.formMethod&&t.setAttribute("formmethod",this.formMethod??""),this.formTarget&&t.setAttribute("formtarget",this.formTarget??""),this.append(t),this.formSubmissionFallbackControl=t}formDisabledCallback(e){this.disabled=e}keypressHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}if(e.key===Xi||e.key===Gi){this.click();return}return!0}press(){switch(this.type){case Ze.reset:{this.resetForm();break}case Ze.submit:{this.submitForm();break}}}resetForm(){var e;(e=this.elementInternals.form)==null||e.reset()}submitForm(){if(!(!this.elementInternals.form||this.disabled||this.type!==Ze.submit)){if(!this.name&&!this.formAction&&!this.formEnctype&&!this.form&&!this.formMethod&&!this.formNoValidate&&!this.formTarget){this.elementInternals.form.requestSubmit();return}try{this.elementInternals.setFormValue(this.value??""),this.elementInternals.form.requestSubmit(this)}catch{this.createAndInsertFormSubmissionFallbackControl(),this.elementInternals.setFormValue(null),this.elementInternals.form.requestSubmit(this.formSubmissionFallbackControl)}}}};fo.formAssociated=!0;let F=fo;l([u({mode:"boolean"})],F.prototype,"autofocus",void 0);l([k],F.prototype,"defaultSlottedContent",void 0);l([u({mode:"boolean"})],F.prototype,"disabled",void 0);l([u({attribute:"disabled-focusable",mode:"boolean"})],F.prototype,"disabledFocusable",void 0);l([u({attribute:"tabindex",mode:"fromView",converter:St})],F.prototype,"tabIndex",void 0);l([u({attribute:"formaction"})],F.prototype,"formAction",void 0);l([u({attribute:"form"})],F.prototype,"formAttribute",void 0);l([u({attribute:"formenctype"})],F.prototype,"formEnctype",void 0);l([u({attribute:"formmethod"})],F.prototype,"formMethod",void 0);l([u({attribute:"formnovalidate",mode:"boolean"})],F.prototype,"formNoValidate",void 0);l([u({attribute:"formtarget"})],F.prototype,"formTarget",void 0);l([u],F.prototype,"name",void 0);l([u],F.prototype,"type",void 0);l([u],F.prototype,"value",void 0);class Oe extends F{constructor(){super(...arguments),this.iconOnly=!1}}l([u],Oe.prototype,"appearance",void 0);l([u],Oe.prototype,"shape",void 0);l([u],Oe.prototype,"size",void 0);l([u({attribute:"icon-only",mode:"boolean"})],Oe.prototype,"iconOnly",void 0);Pr(Oe,zr);const Hn=m`
  ${te("inline-flex")}

  :host {
    --icon-spacing: ${Ie};
    position: relative;
    contain: layout style;
    vertical-align: middle;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    text-decoration-line: none;
    margin: 0;
    min-height: 32px;
    outline-style: none;
    background-color: ${Z};
    color: ${ae};
    border: ${P} solid ${ft};
    padding: 0 ${Ue};
    min-width: 96px;
    border-radius: ${j};
    font-size: ${ce};
    font-family: ${B};
    font-weight: ${L};
    line-height: ${fe};
    transition-duration: ${En};
    transition-property: background, border, color;
    transition-timing-function: ${oi};
    cursor: pointer;
    user-select: none;
  }

  .content {
    display: inherit;
  }

  :host(:hover) {
    background-color: ${_r};
    color: ${Zi};
    border-color: ${no};
  }

  :host(:hover:active) {
    background-color: ${jr};
    border-color: ${so};
    color: ${en};
    outline-style: none;
  }

  :host(:focus-visible) {
    border-color: ${de};
    outline: ${we} solid ${de};
    box-shadow: ${Yr}, 0 0 0 2px ${He};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    :host {
      transition-duration: 0.01ms;
    }
  }

  ::slotted(svg) {
    font-size: 20px;
    height: 20px;
    width: 20px;
    fill: currentColor;
  }

  ::slotted([slot='start']) {
    margin-inline-end: var(--icon-spacing);
  }

  ::slotted([slot='end']),
  [slot='end'] {
    flex-shrink: 0;
    margin-inline-start: var(--icon-spacing);
  }

  :host([icon-only]) {
    min-width: 32px;
    max-width: 32px;
  }

  :host([size='small']) {
    --icon-spacing: ${Ae};
    min-height: 24px;
    min-width: 64px;
    padding: 0 ${co};
    border-radius: ${bt};
    font-size: ${Be};
    line-height: ${pe};
    font-weight: ${q};
  }

  :host([size='small'][icon-only]) {
    min-width: 24px;
    max-width: 24px;
  }

  :host([size='large']) {
    min-height: 40px;
    border-radius: ${gn};
    padding: 0 ${Tn};
    font-size: ${he};
    line-height: ${be};
  }

  :host([size='large'][icon-only]) {
    min-width: 40px;
    max-width: 40px;
  }

  :host([size='large']) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host(:is([shape='circular'], [shape='circular']:focus-visible)) {
    border-radius: ${ao};
  }

  :host(:is([shape='square'], [shape='square']:focus-visible)) {
    border-radius: ${Wr};
  }

  :host([appearance='primary']) {
    background-color: ${cn};
    color: ${At};
    border-color: transparent;
  }

  :host([appearance='primary']:hover) {
    background-color: ${hn};
  }

  :host([appearance='primary']:is(:hover, :hover:active)) {
    border-color: transparent;
    color: ${At};
  }

  :host([appearance='primary']:hover:active) {
    background-color: ${un};
  }

  :host([appearance='primary']:focus-visible) {
    border-color: ${At};
    box-shadow: ${Qr}, 0 0 0 2px ${He};
  }

  :host([appearance='outline']) {
    background-color: ${K};
  }

  :host([appearance='outline']:hover) {
    background-color: ${Jo};
  }

  :host([appearance='outline']:hover:active) {
    background-color: ${Zo};
  }

  :host([appearance='subtle']) {
    background-color: ${an};
    color: ${qt};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) {
    background-color: ${ln};
    color: ${Lr};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover:active) {
    background-color: ${dn};
    color: ${Dr};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) ::slotted(svg) {
    fill: ${Qo};
  }

  :host([appearance='subtle']:hover:active) ::slotted(svg) {
    fill: ${Yo};
  }

  :host([appearance='transparent']) {
    background-color: ${K};
    color: ${qt};
  }

  :host([appearance='transparent']:hover) {
    background-color: ${Jo};
    color: ${Qo};
  }

  :host([appearance='transparent']:hover:active) {
    background-color: ${Zo};
    color: ${Yo};
  }

  :host(:is([appearance='transparent'], [appearance='transparent']:is(:hover, :active))) {
    border-color: transparent;
  }
`,An=m`
  ${Hn}

  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable])),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover:active) {
    background-color: ${Ke};
    border-color: ${Q};
    color: ${Se};
    cursor: not-allowed;
  }

  :host([appearance='primary']:is(:disabled, [disabled-focusable])),
  :host([appearance='primary']:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
  }

  :host([appearance='outline']:is(:disabled, [disabled-focusable])),
  :host([appearance='outline']:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${K};
  }

  :host([appearance='subtle']:is(:disabled, [disabled-focusable])),
  :host([appearance='subtle']:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${K};
    border-color: transparent;
  }

  :host([appearance='transparent']:is(:disabled, [disabled-focusable])),
  :host([appearance='transparent']:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
    background-color: ${K};
  }
`.withBehaviors(ro(m`
    :host {
      background-color: ButtonFace;
      color: ButtonText;
    }

    :host(:is(:hover, :focus-visible)) {
      border-color: Highlight !important;
    }

    :host([appearance='primary']:not(:is(:hover, :focus-visible))) {
      background-color: Highlight;
      color: HighlightText;
      forced-color-adjust: none;
    }

    :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable])) {
      background-color: ButtonFace;
      color: GrayText;
      border-color: ButtonText;
    }
  `));function Mn(o={}){return T`
    <template
      tabindex="${e=>e.disabled?null:e.tabIndex??0}"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keypress="${(e,t)=>e.keypressHandler(t.event)}"
    >
      ${io(o)}
      <span class="content" part="content">
        <slot ${$e("defaultSlottedContent")}></slot>
      </span>
      ${Vr(o)}
    </template>
  `}const On=Mn(),zn=Oe.compose({name:`${I.prefix}-button`,template:On,styles:An}),or=new Map;function y(o){return or.get(o)??or.set(o,Or?`:state(${o})`:`[state--${o}]`).get(o)}function w(o,e,t){if(!(!e||!o)){if(!Or){o.shadowRoot.host.toggleAttribute(`state--${e}`,t);return}if(t??!o.states.has(e)){o.states.add(e);return}o.states.delete(e)}}const bo=class bo extends ue{constructor(){super(...arguments),this.initialValue="on",this.dirtyChecked=!1,this.elementInternals=this.attachInternals(),this._validationFallbackMessage="",this._value=this.initialValue}get checked(){return v.track(this,"checked"),!!this._checked}set checked(e){this._checked=e,this.setFormValue(e?this.value:null),this.setValidity(),this.setAriaChecked(),w(this.elementInternals,"checked",e),v.notify(this,"checked")}disabledChanged(e,t){this.elementInternals.ariaDisabled=this.disabled?"true":"false",w(this.elementInternals,"disabled",this.disabled)}disabledAttributeChanged(e,t){this.disabled=!!t}initialCheckedChanged(e,t){this.dirtyChecked||(this.checked=!!t)}initialValueChanged(e,t){this._value=t}requiredChanged(e,t){this.$fastController.isConnected&&(this.setValidity(),this.elementInternals.ariaRequired=this.required?"true":"false")}get form(){return this.elementInternals.form}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}get validationMessage(){if(this.elementInternals.validationMessage)return this.elementInternals.validationMessage;if(!this._validationFallbackMessage){const e=document.createElement("input");e.type="checkbox",e.required=!0,e.checked=!1,this._validationFallbackMessage=e.validationMessage}return this._validationFallbackMessage}get validity(){return this.elementInternals.validity}get value(){return v.track(this,"value"),this._value}set value(e){this._value=e,this.$fastController.isConnected&&(this.setFormValue(e),this.setValidity(),v.notify(this,"value"))}get willValidate(){return this.elementInternals.willValidate}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){if(this.disabled)return;this.dirtyChecked=!0;const t=this.checked;return this.toggleChecked(),t!==this.checked&&(this.$emit("change"),this.$emit("input")),!0}connectedCallback(){super.connectedCallback(),this.setAriaChecked(),this.setValidity()}inputHandler(e){return this.setFormValue(this.value),this.setValidity(),!0}keydownHandler(e){if(e.key!==" ")return!0}keyupHandler(e){if(e.key!==" ")return!0;this.click()}formResetCallback(){this.checked=this.initialChecked??!1,this.dirtyChecked=!1,this.setValidity()}reportValidity(){return this.elementInternals.reportValidity()}setAriaChecked(e=this.checked){this.elementInternals.ariaChecked=e?"true":"false"}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}setCustomValidity(e){this.elementInternals.setValidity({customError:!0},e),this.setValidity()}setValidity(e,t,r){if(this.$fastController.isConnected){if(this.disabled||!this.required){this.elementInternals.setValidity({});return}this.elementInternals.setValidity({valueMissing:!!this.required&&!this.checked,...e},t??this.validationMessage,r)}}toggleChecked(e=!this.checked){this.checked=e}};bo.formAssociated=!0;let _=bo;l([u({mode:"boolean"})],_.prototype,"autofocus",void 0);l([k],_.prototype,"disabled",void 0);l([u({attribute:"disabled",mode:"boolean"})],_.prototype,"disabledAttribute",void 0);l([u({attribute:"form"})],_.prototype,"formAttribute",void 0);l([u({attribute:"checked",mode:"boolean"})],_.prototype,"initialChecked",void 0);l([u({attribute:"value",mode:"fromView"})],_.prototype,"initialValue",void 0);l([u],_.prototype,"name",void 0);l([u({mode:"boolean"})],_.prototype,"required",void 0);class Nt extends _{indeterminateChanged(e,t){this.setAriaChecked(),w(this.elementInternals,"indeterminate",t)}constructor(){super(),this.elementInternals.role="checkbox"}setAriaChecked(e=this.checked){if(this.indeterminate){this.elementInternals.ariaChecked="mixed";return}super.setAriaChecked(e)}toggleChecked(e=!this.checked){this.indeterminate=!1,super.toggleChecked(e)}}l([k],Nt.prototype,"indeterminate",void 0);l([u],Nt.prototype,"shape",void 0);l([u],Nt.prototype,"size",void 0);const Vn=y("active"),Pn=y("bad-input"),$=y("checked"),Ln=y("custom-error"),Dn=y("description"),Rn=y("disabled");y("error");const _n=y("flip-block"),jn=y("focus-visible"),qn=y("has-message"),ge=y("indeterminate"),Ce=y("multiple"),Wn=y("open"),Un=y("pattern-mismatch"),Xn=y("placeholder-shown");y("pressed");const Gn=y("range-overflow"),Kn=y("range-underflow"),Mt=y("selected"),Qn=y("step-mismatch");y("submenu");const Yn=y("too-long"),Jn=y("too-short"),Zn=y("type-mismatch");y("user-invalid");const es=y("valid"),ts=y("value-missing"),os=m`
  ${te("inline-flex")}

  :host {
    --size: 16px;
    background-color: ${Z};
    border-radius: ${bt};
    border: ${P} solid ${Fe};
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    width: var(--size);
  }

  :host,
  .indeterminate-indicator,
  .checked-indicator {
    aspect-ratio: 1;
  }

  :host(:hover) {
    border-color: ${qe};
  }

  :host(:active) {
    border-color: ${We};
  }

  :host(${$}:hover) {
    background-color: ${ut};
    border-color: ${pn};
  }

  :host(${$}:active) {
    background-color: ${pt};
    border-color: ${qr};
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:not([slot='input']))::after {
    content: '';
    position: absolute;
    inset: -8px;
    box-sizing: border-box;
    outline: none;
    border: ${we} solid ${de};
    border-radius: ${j};
  }

  :host(:not([slot='input']):focus-visible)::after {
    border-color: ${He};
  }

  .indeterminate-indicator,
  .checked-indicator {
    color: ${Bt};
    inset: 0;
    margin: auto;
    position: absolute;
  }

  ::slotted([slot='checked-indicator']),
  .checked-indicator {
    fill: currentColor;
    display: inline-flex;
    flex: 1 0 auto;
    width: 12px;
  }

  :host(:not(${$})) *:is(::slotted([slot='checked-indicator']), .checked-indicator) {
    display: none;
  }

  :host(${$}),
  :host(${ge}) {
    border-color: ${Ct};
  }

  :host(${$}),
  :host(${ge}) .indeterminate-indicator {
    background-color: ${ht};
  }

  :host(${ge}) .indeterminate-indicator {
    border-radius: ${bt};
    position: absolute;
    width: calc(var(--size) / 2);
    inset: 0;
  }

  :host([size='large']) {
    --size: 20px;
  }

  :host([size='large']) ::slotted([slot='checked-indicator']),
  :host([size='large']) .checked-indicator {
    width: 16px;
  }

  :host([shape='circular']),
  :host([shape='circular']) .indeterminate-indicator {
    border-radius: ${ao};
  }

  :host([disabled]),
  :host([disabled]${$}) {
    background-color: ${Ke};
    border-color: ${Q};
  }

  :host([disabled]) {
    cursor: unset;
  }

  :host([disabled]${ge}) .indeterminate-indicator {
    background-color: ${Q};
  }

  :host([disabled]${$}) .checked-indicator {
    color: ${Q};
  }
`.withBehaviors(ro(m`
    :host {
      border-color: FieldText;
    }

    :host(:not([slot='input']:focus-visible))::after {
      border-color: Canvas;
    }

    :host(:not([disabled]):hover),
    :host(${$}:not([disabled]):hover),
    :host(:not([slot='input']):focus-visible)::after {
      border-color: Highlight;
    }

    .indeterminate-indicator,
    .checked-indicator {
      color: HighlightText;
    }

    :host(${$}),
    :host(${ge}) .indeterminate-indicator {
      background-color: FieldText;
    }

    :host(${$}:not([disabled]):hover),
    :host(${ge}:not([disabled]):hover) .indeterminate-indicator {
      background-color: Highlight;
    }

    :host([disabled]) {
      border-color: GrayText;
    }

    :host([disabled]${ge}) .indeterminate-indicator {
      background-color: GrayText;
    }

    :host([disabled]),
    :host([disabled]${$}) .checked-indicator {
      color: GrayText;
    }
  `)),rs=T.partial(`
    <svg
        fill="currentColor"
        aria-hidden="true"
        class="checked-indicator"
        width="1em"
        height="1em"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg">
            <path d="M9.76 3.2c.3.29.32.76.04 1.06l-4.25 4.5a.75.75 0 0 1-1.08.02L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.7 1.7L8.7 3.24a.75.75 0 0 1 1.06-.04Z" fill="currentColor"></path>
    </svg>
`),is=T.partial(`
    <span class="indeterminate-indicator"></span>
`);function ns(o={}){return T`
    <template
      tabindex="${e=>e.disabled?void 0:0}"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @input="${(e,t)=>e.inputHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
      @keyup="${(e,t)=>e.keyupHandler(t.event)}"
    >
      <slot name="checked-indicator">${ke(o.checkedIndicator)}</slot>
      <slot name="indeterminate-indicator">${ke(o.indeterminateIndicator)}</slot>
    </template>
  `}const ss=ns({checkedIndicator:rs,indeterminateIndicator:is}),as=Nt.compose({name:`${I.prefix}-checkbox`,template:ss,styles:os});function rr(o,e="-listbox"){return(o==null?void 0:o.nodeType)!==Node.ELEMENT_NODE?!1:o.tagName.toLowerCase().endsWith(e)}function gt(o,e="-option"){return(o==null?void 0:o.nodeType)!==Node.ELEMENT_NODE?!1:o.tagName.toLowerCase().endsWith(e)}function ir(o){var e;return((e=o.closest("[lang]"))==null?void 0:e.lang)??"en"}let ls=0;function Xe(o="id-"){const e=`${o}${ls++}`;return document.getElementById(e)?Xe(o):e}const ds={outline:"outline"},Ot={combobox:"combobox",dropdown:"dropdown"},cs=T`
  <svg class="chevron-down-20-regular" role="button" slot="indicator" viewBox="0 0 20 20" ${G("indicator")}>
    <path
      d="M15.85 7.65a.5.5 0 0 1 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16a.5.5 0 0 1 .7 0"
      fill="currentColor"
    />
  </svg>
`,hs=T`
  <input
    @input="${(o,e)=>o.inputHandler(e.event)}"
    @change="${(o,e)=>o.changeHandler(e.event)}"
    aria-activedescendant="${o=>o.activeDescendant}"
    aria-controls="${o=>{var e;return((e=o.listbox)==null?void 0:e.id)??null}}"
    aria-labelledby="${o=>o.ariaLabelledBy}"
    aria-expanded="${o=>o.open}"
    aria-haspopup="listbox"
    placeholder="${o=>o.placeholder}"
    role="combobox"
    ?disabled="${o=>o.disabled}"
    type="${o=>o.type}"
    value="${o=>o.valueAttribute}"
    ${G("control")}
  />
`,us=T`
  <button
    aria-activedescendant="${o=>o.activeDescendant}"
    aria-controls="${o=>{var e;return((e=o.listbox)==null?void 0:e.id)??null}}"
    aria-expanded="${o=>o.open}"
    aria-haspopup="listbox"
    role="combobox"
    ?disabled="${o=>o.disabled}"
    type="button"
    ${G("control")}
  >
    ${o=>o.displayValue}
  </button>
`;function ps(o={}){return T`
    <template
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
      @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
      <div class="control">
        <slot name="control" ${G("controlSlot")}></slot>
        <slot name="indicator" ${G("indicatorSlot")}>${ke(o.indicator)}</slot>
      </div>
      <slot ${G("listboxSlot")}></slot>
    </template>
  `}const fs=ps({indicator:cs}),ne=class ne extends ue{get activeDescendant(){var e;if(this.open)return(e=this.enabledOptions[this.activeIndex])==null?void 0:e.id}activeIndexChanged(e,t){var r;if(typeof t=="number"){const i=this.matches(":has(:focus-visible)")?t:-1;this.enabledOptions.forEach((n,a)=>{n.active=a===i}),this.open&&((r=this.enabledOptions[i])==null||r.scrollIntoView({block:"nearest"}))}}controlChanged(e,t){var r;t&&(t.id=t.id||Xe("input-"),(r=this.controlSlot)==null||r.assign(t))}disabledChanged(e,t){J.enqueue(()=>{this.options.forEach(r=>{r.disabled=r.disabledAttribute||this.disabled})})}get displayValue(){if(!this.$fastController.isConnected||!this.control||this.isCombobox&&this.multiple)return w(this.elementInternals,"placeholder-shown",!1),"";this.listFormatter=this.listFormatter??new Intl.ListFormat(ir(this),{type:"conjunction",style:"narrow"});const e=this.listFormatter.format(this.selectedOptions.map(t=>t.text));return w(this.elementInternals,"placeholder-shown",!e),this.isCombobox?e:e||this.placeholder}listboxChanged(e,t){if(e&&v.getNotifier(this).unsubscribe(e),t){t.dropdown=this,t.popover="manual",this.listboxSlot.assign(t);const r=v.getNotifier(this);r.subscribe(t);for(const i of["disabled","multiple"])r.notify(i);J.enqueue(()=>{this.enabledOptions.filter(i=>i.defaultSelected).forEach((i,n)=>{i.selected=this.multiple||n===0}),this.setValidity()})}}multipleChanged(e,t){this.elementInternals.ariaMultiSelectable=t?"true":"false",w(this.elementInternals,"multiple",t),this.value=null}nameChanged(e,t){J.enqueue(()=>{this.options.forEach(r=>{r.name=t})})}openChanged(e,t){var r,i;if(w(this.elementInternals,"open",t),this.elementInternals.ariaExpanded=t?"true":"false",this.activeIndex=this.selectedIndex??-1,t){(r=ne.AnchorPositionFallbackObserver)==null||r.observe(this.listbox);return}(i=ne.AnchorPositionFallbackObserver)==null||i.unobserve(this.listbox)}typeChanged(e,t){this.$fastController.isConnected&&this.insertControl()}get enabledOptions(){var e;return((e=this.listbox)==null?void 0:e.enabledOptions)??[]}formResetCallback(){this.enabledOptions.forEach((e,t)=>{if(this.multiple){e.selected=!!e.defaultSelected;return}if(!e.defaultSelected){e.selected=!1;return}this.selectOption(t)}),this.setValidity()}get freeformOption(){return this.enabledOptions.find(e=>e.freeform)}get isCombobox(){return this.type===Ot.combobox}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}get options(){var e;return((e=this.listbox)==null?void 0:e.options)??[]}get selectedIndex(){return this.enabledOptions.findIndex(e=>e.selected)??-1}get selectedOptions(){var e;return((e=this.listbox)==null?void 0:e.selectedOptions)??[]}get validationMessage(){if(this.elementInternals.validationMessage)return this.elementInternals.validationMessage;if(!this._validationFallbackMessage){const e=document.createElement("input");e.type="radio",e.name="validation-message-fallback",e.required=!0,e.checked=!1,this._validationFallbackMessage=e.validationMessage}return!this.disabled&&this.required&&this.listbox.selectedOptions.length===0?this._validationFallbackMessage:""}get validity(){return this.elementInternals.validity}get value(){var e;return v.notify(this,"value"),((e=this.enabledOptions.find(t=>t.selected))==null?void 0:e.value)??null}set value(e){this.multiple||(this.selectOption(this.enabledOptions.findIndex(t=>t.value===e)),v.track(this,"value"))}get willValidate(){return this.elementInternals.willValidate}changeHandler(e){if(this===e.target)return!0;const t=this.isCombobox?this.enabledOptions.findIndex(r=>r.text===this.control.value):this.enabledOptions.indexOf(e.target);return this.selectOption(t,!0),!0}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){if(this.disabled)return;const t=e.target;if(this.focus(),t===this.control&&!this.isCombobox)return this.listbox.togglePopover(),!0;if(!this.open)return this.listbox.showPopover(),!0;if(gt(t)){if(t.disabled)return;this.selectOption(this.enabledOptions.indexOf(t),!0),this.multiple||(this.isCombobox&&(this.control.value=t.text,this.updateFreeformOption()),this.listbox.hidePopover())}return!0}constructor(){super(),this.activeIndex=0,this.id=Xe("dropdown-"),this.required=!1,this.type=Ot.dropdown,this.valueAttribute="",this.elementInternals=this.attachInternals(),this.elementInternals.role="presentation",this.addEventListener("connected",this.listboxConnectedHandler),J.enqueue(()=>{this.insertControl()})}filterOptions(e,t=this.enabledOptions){return this.listCollator||(this.listCollator=new Intl.Collator(ir(this),{usage:"search",sensitivity:"base"})),t.filter(r=>this.listCollator.compare(r.text.substring(0,Math.min(r.text.length,e.length)),e)===0)}focus(e){this.disabled||this.control.focus(e)}focusoutHandler(e){const t=e.relatedTarget;return this.open&&!this.contains(t)&&this.listbox.togglePopover(),!0}getEnabledIndexInBounds(e,t=this.enabledOptions.length||0){return t===0?-1:(e+t)%t}inputHandler(e){this.open||this.listbox.showPopover(),this.updateFreeformOption();const t=this.control.value,r=this.enabledOptions.indexOf(this.filterOptions(t)[0]??null);return this.activeIndex=r,!0}insertControl(){var e;if((e=this.controlSlot)==null||e.assignedNodes().forEach(t=>this.removeChild(t)),this.type===Ot.combobox){hs.render(this,this);return}us.render(this,this)}keydownHandler(e){var n;let t=0;switch(e.key){case"ArrowUp":{e.preventDefault(),t=-1;break}case"ArrowDown":{e.preventDefault(),t=1;break}case" ":{if(this.isCombobox)break;e.preventDefault()}case"Enter":case"Tab":{if(this.open){if(this.selectOption(this.activeIndex,!0),this.multiple)break;return this.listbox.hidePopover(),e.key==="Tab"}this.listbox.showPopover();break}case"Escape":{this.activeIndex=this.multiple?0:this.selectedIndex,this.listbox.hidePopover();break}}if(!t)return!0;if(!this.open){this.listbox.showPopover();return}let r=this.activeIndex;r+=t;let i=this.getEnabledIndexInBounds(r);return i===0&&((n=this.freeformOption)!=null&&n.hidden)&&(i=this.getEnabledIndexInBounds(r+t)),this.activeIndex=i,!0}mousedownHandler(e){if(!(this.disabled||e.target===this.control&&!this.isCombobox))return!gt(e.target)}reportValidity(){return this.elementInternals.reportValidity()}selectOption(e=this.selectedIndex,t=!1){this.listbox.selectOption(e),this.control.value=this.displayValue,this.setValidity(),this.updateFreeformOption(),t&&this.$emit("change")}setValidity(e,t,r){if(this.$fastController.isConnected){if(this.disabled||!this.required){this.elementInternals.setValidity({});return}const i=this.required&&this.listbox.selectedOptions.length===0;this.elementInternals.setValidity({valueMissing:i,...e},t??this.validationMessage,r??this.control)}}updateFreeformOption(e=this.control.value){if(this.freeformOption){if(e===""||this.filterOptions(e,this.enabledOptions.filter(t=>!t.freeform)).length){this.freeformOption.value="",this.freeformOption.selected=!1,this.freeformOption.hidden=!0;return}this.freeformOption.value=e,this.freeformOption.hidden=!1}}connectedCallback(){super.connectedCallback(),this.anchorPositionFallback()}disconnectedCallback(){var e;(e=ne.AnchorPositionFallbackObserver)==null||e.unobserve(this.listbox),super.disconnectedCallback()}listboxConnectedHandler(e){const t=e.target;rr(t)&&(this.listbox=t)}anchorPositionFallback(){ne.AnchorPositionFallbackObserver=ne.AnchorPositionFallbackObserver??new IntersectionObserver(e=>{e.forEach(({boundingClientRect:t,isIntersecting:r,target:i})=>{if(rr(i)&&!r){if(t.bottom>window.innerHeight){w(i.dropdown.elementInternals,"flip-block",!0);return}t.top<0&&w(i.dropdown.elementInternals,"flip-block",!1)}})},{threshold:1})}};ne.formAssociated=!0;let C=ne;l([hr],C.prototype,"activeDescendant",null);l([k],C.prototype,"activeIndex",void 0);l([u({attribute:"aria-labelledby",mode:"fromView"})],C.prototype,"ariaLabelledBy",void 0);l([k],C.prototype,"control",void 0);l([u({mode:"boolean"})],C.prototype,"disabled",void 0);l([hr],C.prototype,"displayValue",null);l([u({attribute:"id"})],C.prototype,"id",void 0);l([k],C.prototype,"indicator",void 0);l([k],C.prototype,"indicatorSlot",void 0);l([u({attribute:"value",mode:"fromView"})],C.prototype,"initialValue",void 0);l([k],C.prototype,"listbox",void 0);l([k],C.prototype,"listboxSlot",void 0);l([u({mode:"boolean"})],C.prototype,"multiple",void 0);l([u],C.prototype,"name",void 0);l([k],C.prototype,"open",void 0);l([u],C.prototype,"placeholder",void 0);l([u({mode:"boolean"})],C.prototype,"required",void 0);l([u],C.prototype,"type",void 0);l([u({attribute:"value"})],C.prototype,"valueAttribute",void 0);class uo extends C{constructor(){super(...arguments),this.appearance=ds.outline}}l([u],uo.prototype,"appearance",void 0);l([u],uo.prototype,"size",void 0);const bs=m`
  ${te("inline-flex")}

  :host {
    anchor-name: --dropdown-trigger;
    box-sizing: border-box;
    color: ${ae};
    cursor: pointer;
  }

  :host(${Xn}) {
    color: ${Rr};
  }

  .control {
    appearance: none;
    background-color: ${Z};
    border-radius: ${j};
    border: none;
    box-shadow: inset 0 0 0 ${P} var(--control-border-color);
    box-sizing: border-box;
    color: inherit;
    column-gap: ${se};
    display: inline-flex;
    justify-content: space-between;
    min-width: 160px;
    overflow: hidden;
    padding: ${tr} ${Jr};
    position: relative;
    text-align: start;
    width: 100%;
    z-index: 1;
    ${ri}
  }

  :host([size='small']) .control {
    column-gap: ${se};
    padding: ${Xt} ${Ie};
    ${ii}
  }

  :host([size='large']) .control {
    column-gap: ${co};
    padding: ${Gt} ${Ue};
    ${Fn}
  }

  ::slotted(:is(input, button)) {
    all: unset;
    flex: 1 1 auto;
  }

  ::slotted(button) {
    cursor: pointer;
  }

  ::slotted(input) {
    cursor: text;
  }

  :where(slot[name='indicator'] > *, ::slotted([slot='indicator'])) {
    all: unset;
    align-items: center;
    appearance: none;
    aspect-ratio: 1;
    color: ${xt};
    display: inline-flex;
    justify-content: center;
    width: 20px;
  }

  :host([size='small']) :where(slot[name='indicator'] > *, ::slotted([slot='indicator'])) {
    width: 16px;
  }

  :host([size='large']) :where(slot[name='indicator'] > *, ::slotted([slot='indicator'])) {
    width: 24px;
  }

  .control::after,
  .control::before {
    content: '' / '';
    inset: auto 0 0;
    pointer-events: none;
    position: absolute;
  }

  .control::before {
    height: ${P};
  }

  .control::after {
    background-color: ${Ct};
    height: ${we};
    scale: 0 1;
    transition: scale ${Zr} ${ti};
  }

  :host(:where(${Wn}, :focus-within)) .control::after {
    scale: 1 1;
    transition-duration: ${ho};
    transition-timing-function: ${ei};
  }

  :host(:where([appearance='outline'], [appearance='transparent'])) .control::before {
    background-color: ${Fe};
  }

  :host([appearance='transparent']) .control {
    --control-border-color: ${Ut};
    background-color: ${K};
    border-radius: ${Wr};
  }

  :host([appearance='outline']) .control {
    --control-border-color: ${ft};
  }

  :host([appearance='outline']) .control:hover {
    --control-border-color: ${no};
  }

  :host(:where([appearance='outline'], [appearance='transparent'])) .control:hover::before {
    background-color: ${qe};
  }

  :host([appearance='outline']) .control:hover::after {
    background-color: ${ut};
  }

  :host([appearance='outline']) .control:active {
    --control-border-color: ${so};
  }

  :host(:where([appearance='outline'], [appearance='transparent'])) .control:active::before {
    background-color: ${We};
  }

  :host(:where([appearance='outline'], [appearance='transparent'])) .control:active::after {
    background-color: ${pt};
  }

  :host([appearance='filled-darker']) .control {
    background-color: ${Wt};
  }

  :host(:where([appearance='filled-lighter'], [appearance='filled-darker'])) .control {
    --control-border-color: ${de};
  }

  :host(:disabled),
  :host(:disabled) ::slotted(:where(button, input)) {
    cursor: not-allowed;
  }

  :host(:disabled) .control::before,
  :host(:disabled) .control::after {
    content: none;
  }

  :host(:disabled) .control:is(*, :active, :hover),
  :host(:disabled) :where(slot[name='indicator'] > *, ::slotted([slot='indicator'])) {
    --control-border-color: ${Q};
    background-color: ${Ke};
    color: ${Se};
  }

  ::slotted([popover]) {
    inset: unset;
    position: absolute;
    position-anchor: --dropdown-trigger;
    position-area: block-end span-inline-end;
    position-try-fallbacks: flip-inline, flip-block, block-start;
    max-height: var(--listbox-max-height, calc(50vh - anchor-size(self-block)));
    min-width: anchor-size(width);
    overflow: auto;
  }

  ::slotted([popover]:not(:popover-open)) {
    display: none;
  }

  @supports not (anchor-name: --anchor) {
    ::slotted([popover]) {
      margin-block-start: calc(${fe} + (${tr} * 2) + ${P});
      max-height: 50vh;
    }

    :host([size='small']) ::slotted([popover]) {
      margin-block-start: calc(${pe} + (${Xt} * 2) + ${P});
    }

    :host([size='large']) ::slotted([popover]) {
      margin-block-start: calc(${be} + (${Gt} * 2) + ${P});
    }

    :host(${_n}) ::slotted([popover]) {
      margin-block-start: revert;
      transform: translate(0, -100%);
    }
  }
`,gs=uo.compose({name:`${I.prefix}-dropdown`,template:fs,styles:bs,shadowOptions:{slotAssignment:"manual"}});class ze extends ue{multipleChanged(e,t){this.elementInternals.ariaMultiSelectable=t?"true":"false",w(this.elementInternals,"multiple",t),J.enqueue(()=>{this.options.forEach(r=>{r.multiple=!!t})})}optionsChanged(e,t){t==null||t.forEach((r,i)=>{r.elementInternals.ariaPosInSet=`${i+1}`,r.elementInternals.ariaSetSize=`${t.length}`})}beforetoggleHandler(e){if(!this.dropdown)return!0;if(this.dropdown.disabled){this.dropdown.open=!1;return}return this.dropdown.open=e.newState==="open",!0}get enabledOptions(){var e;return((e=this.options)==null?void 0:e.filter(t=>!t.disabled))??[]}get selectedOptions(){var e;return((e=this.options)==null?void 0:e.filter(t=>t.selected))??[]}clickHandler(e){if(this.dropdown)return!0;const t=e.target;return gt(t)&&this.selectOption(this.enabledOptions.indexOf(t)),!0}constructor(){super(),this.id=Xe("listbox-"),this.elementInternals=this.attachInternals(),this.elementInternals.role="listbox"}connectedCallback(){super.connectedCallback(),this.$emit("connected")}handleChange(e,t){if(t==="multiple"){this.multiple=e.multiple;return}}selectOption(e=this.selectedIndex){let t=this.selectedIndex;if(!this.multiple)this.enabledOptions.forEach((r,i)=>{const n=i===e;r.selected=n,n&&(t=i)});else{const r=this.enabledOptions[e];r&&(r.selected=!r.selected),t=e}this.selectedIndex=t}}l([u({attribute:"id",mode:"fromView"})],ze.prototype,"id",void 0);l([k],ze.prototype,"multiple",void 0);l([k],ze.prototype,"options",void 0);l([k],ze.prototype,"selectedIndex",void 0);l([k],ze.prototype,"dropdown",void 0);const ms=m`
  ${te("inline-flex")}

  :host {
    background-color: ${Z};
    border-radius: ${j};
    border: none;
    box-shadow: ${Nn};
    box-sizing: border-box;
    flex-direction: column;
    margin: 0;
    min-width: 160px;
    padding: ${Ae};
    row-gap: ${se};
    width: auto;
  }
`;function vs(){return T`
    <template
      id="${o=>o.id}"
      @beforetoggle="${(o,e)=>o.beforetoggleHandler(e.event)}"
      @click="${(o,e)=>o.clickHandler(e.event)}"
    >
      <slot
        ${$e({property:"options",filter:o=>gt(o)})}
      ></slot>
    </template>
  `}const ys=vs(),$s=ze.compose({name:`${I.prefix}-listbox`,template:ys,styles:ms}),ks={above:"above"},D={badInput:"bad-input",customError:"custom-error",patternMismatch:"pattern-mismatch",rangeOverflow:"range-overflow",rangeUnderflow:"range-underflow",stepMismatch:"step-mismatch",tooLong:"too-long",tooShort:"too-short",typeMismatch:"type-mismatch",valueMissing:"value-missing",valid:"valid"};class Qe extends ue{labelSlotChanged(e,t){t&&this.input&&(this.setLabelProperties(),this.setStates())}messageSlotChanged(e,t){if(w(this.elementInternals,"has-message",!!t.length),!t.length){this.removeEventListener("invalid",this.invalidHandler,{capture:!0});return}this.addEventListener("invalid",this.invalidHandler,{capture:!0})}slottedInputsChanged(e,t){t!=null&&t.length&&(this.input=t==null?void 0:t[0],this.setStates())}inputChanged(e,t){t&&(this.setStates(),this.setLabelProperties())}changeHandler(e){return this.setStates(),this.setValidationStates(),!0}clickHandler(e){return this===e.target&&this.input.click(),!0}constructor(){super(),this.labelSlot=[],this.elementInternals=this.attachInternals(),this.elementInternals.role="presentation"}focusinHandler(e){return this.matches(":focus-within:has(> :focus-visible)")&&w(this.elementInternals,"focus-visible",!0),!0}focusoutHandler(e){return w(this.elementInternals,"focus-visible",!1),!0}invalidHandler(e){this.messageSlot.length&&e.preventDefault(),this.setValidationStates()}setLabelProperties(){var e;this.$fastController.isConnected&&(this.input.id=this.input.id||Mr("input"),(e=this.labelSlot)==null||e.forEach(t=>{t instanceof HTMLLabelElement&&(t.htmlFor=t.htmlFor||this.input.id,t.id=t.id||`${this.input.id}--label`,t.setAttribute("aria-hidden","true"),this.input.setAttribute("aria-labelledby",t.id))}))}setStates(){this.elementInternals&&this.input&&(w(this.elementInternals,"disabled",!!this.input.disabled),w(this.elementInternals,"readonly",!!this.input.readOnly),w(this.elementInternals,"required",!!this.input.required),w(this.elementInternals,"checked",!!this.input.checked))}setValidationStates(){if(this.input.validity)for(const[e,t]of Object.entries(D))w(this.elementInternals,t,this.input.validity[e])}}l([k],Qe.prototype,"labelSlot",void 0);l([k],Qe.prototype,"messageSlot",void 0);l([k],Qe.prototype,"slottedInputs",void 0);l([k],Qe.prototype,"input",void 0);class ni extends Qe{constructor(){super(...arguments),this.labelPosition=ks.above}}l([u({attribute:"label-position"})],ni.prototype,"labelPosition",void 0);const Ss=m`
  ${te("inline-grid")}

  :host {
    color: ${ae};
    align-items: center;
    gap: 0 ${Ue};
    justify-items: start;
    position: relative;
  }

  :has([slot='message']) {
    color: ${ae};
    row-gap: ${Gt};
  }

  :not(::slotted([slot='label'])) {
    gap: 0;
  }

  :host([label-position='before']) {
    grid-template-areas: 'label input' 'label message';
  }

  :host([label-position='after']) {
    gap: 0;
    grid-template-areas: 'input label' 'message message';
    grid-template-columns: auto 1fr;
  }

  :host([label-position='after']) ::slotted([slot='input']) {
    margin-inline-end: ${Ue};
  }

  :host([label-position='above']) {
    grid-template-areas: 'label' 'input' 'message';
    row-gap: ${er};
  }

  :host([label-position='below']) {
    grid-template-areas: 'input' 'label' 'message';
    justify-items: center;
  }

  :host([label-position='below']) ::slotted([slot='label']) {
    margin-block-start: ${In};
  }

  :host([label-position='below']:not(${qn})) {
    grid-template-areas: 'input' 'label';
  }

  ::slotted([slot='label'])::after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
  }

  ::slotted([slot='input']) {
    grid-area: input;
    position: relative;
    z-index: 1;
  }

  ::slotted([slot='message']) {
    margin-block-start: ${er};
    grid-area: message;
  }

  :host(${jn}:focus-within) {
    border-radius: ${j};
    outline: ${we} solid ${He};
  }

  ::slotted(label),
  ::slotted([slot='label']) {
    cursor: inherit;
    display: inline-flex;
    font-family: ${B};
    font-size: ${ce};
    font-weight: ${q};
    grid-area: label;
    line-height: ${fe};
    user-select: none;
  }

  :host([size='small']) ::slotted(label) {
    font-size: ${Be};
    line-height: ${pe};
  }

  :host([size='large']) ::slotted(label) {
    font-size: ${he};
    line-height: ${be};
  }

  :host([size='large']) ::slotted(label),
  :host([weight='semibold']) ::slotted(label) {
    font-weight: ${L};
  }

  :host(${Rn}) {
    cursor: default;
  }

  ::slotted([flag]) {
    display: none;
  }

  :host(${Pn}) ::slotted([flag='${D.badInput}']),
  :host(${Ln}) ::slotted([flag='${D.customError}']),
  :host(${Un}) ::slotted([flag='${D.patternMismatch}']),
  :host(${Gn}) ::slotted([flag='${D.rangeOverflow}']),
  :host(${Kn}) ::slotted([flag='${D.rangeUnderflow}']),
  :host(${Qn}) ::slotted([flag='${D.stepMismatch}']),
  :host(${Yn}) ::slotted([flag='${D.tooLong}']),
  :host(${Jn}) ::slotted([flag='${D.tooShort}']),
  :host(${Zn}) ::slotted([flag='${D.typeMismatch}']),
  :host(${ts}) ::slotted([flag='${D.valueMissing}']),
  :host(${es}) ::slotted([flag='${D.valid}']) {
    display: block;
  }
`,ws=T`
  <template
    @click="${(o,e)=>o.clickHandler(e.event)}"
    @change="${(o,e)=>o.changeHandler(e.event)}"
    @focusin="${(o,e)=>o.focusinHandler(e.event)}"
    @focusout="${(o,e)=>o.focusoutHandler(e.event)}"
    ${Vi({property:"slottedInputs",attributes:!0,attributeFilter:["disabled","required","readonly"],subtree:!0,selector:'[slot="input"]',filter:jt()})}
  >
    <slot name="label" part="label" ${$e("labelSlot")}></slot>
    <slot name="input" part="input"></slot>
    <slot name="message" part="message" ${$e({property:"messageSlot",filter:jt("[flag]")})}></slot>
  </template>
`,xs=ni.compose({name:`${I.prefix}-field`,template:ws,styles:Ss,shadowOptions:{delegatesFocus:!0}});class Ye extends ue{constructor(){super(...arguments),this.disabled=!1,this.required=!1}}l([u],Ye.prototype,"size",void 0);l([u],Ye.prototype,"weight",void 0);l([u({mode:"boolean"})],Ye.prototype,"disabled",void 0);l([u({mode:"boolean"})],Ye.prototype,"required",void 0);const Bs=m`
  ${te("inline-flex")}

  :host {
    color: ${ae};
    cursor: pointer;
    font-family: ${B};
    font-size: ${ce};
    font-weight: ${q};
    line-height: ${fe};
    user-select: none;
  }

  .asterisk {
    color: ${bn};
    margin-inline-start: ${Ae};
  }

  :host([size='small']) {
    font-size: ${Be};
    line-height: ${pe};
  }

  :host([size='large']) {
    font-size: ${he};
    line-height: ${be};
  }

  :host(:is([size='large'], [weight='semibold'])) {
    font-weight: ${L};
  }

  :host([disabled]),
  :host([disabled]) .asterisk {
    color: ${Se};
  }
`;function Cs(){return T`
    <slot></slot>
    <span part="asterisk" class="asterisk" ?hidden="${o=>!o.required}">*</span>
  `}const Ns=Cs(),Ts=Ye.compose({name:`${I.prefix}-label`,template:Ns,styles:Bs}),go=class go extends ue{activeChanged(e,t){w(this.elementInternals,"active",t)}currentSelectedChanged(e,t){this.selected=!!t}defaultSelectedChanged(e,t){this.selected=!!t}descriptionSlotChanged(e,t){w(this.elementInternals,"description",!!(t!=null&&t.length))}disabledChanged(e,t){this.elementInternals.ariaDisabled=this.disabled?"true":"false",w(this.elementInternals,"disabled",this.disabled)}disabledAttributeChanged(e,t){this.disabled=!!t}initialValueChanged(e,t){this._value=t}multipleChanged(e,t){w(this.elementInternals,"multiple",t),this.selected=!1}get form(){return this.elementInternals.form}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}get selected(){return v.track(this,"selected"),!!this.currentSelected}set selected(e){this.currentSelected=e,J.enqueue(()=>{this.$fastController.isConnected&&(this.setFormValue(e?this.value:null),this.elementInternals.ariaSelected=e?"true":"false",w(this.elementInternals,"selected",e))}),v.notify(this,"selected")}get text(){var e;return this.freeform?this.value.replace(/\s+/g," ").trim():((e=this.textAttribute??this.textContent)==null?void 0:e.replace(/\s+/g," ").trim())??""}get value(){return v.track(this,"value"),this._value??this.text}set value(e){var t;this._value=e,this.$fastController.isConnected&&(this.setFormValue(this.selected?e:null),(t=this.freeformOutputs)==null||t.forEach(r=>{r.value=e}),v.notify(this,"value"))}connectedCallback(){super.connectedCallback(),this.freeform&&(this.value="",this.hidden=!0,this.selected=!1)}constructor(){super(),this.active=!1,this.id=Xe("option-"),this.initialValue="",this.multiple=!1,this.elementInternals=this.attachInternals(),this._value=this.initialValue,this.elementInternals.role="option"}setFormValue(e,t){if(this.disabled){this.elementInternals.setFormValue(null);return}this.elementInternals.setFormValue(e,e??t)}toggleSelected(e=!this.selected){this.selected=e}};go.formAssociated=!0;let H=go;l([k],H.prototype,"active",void 0);l([u({attribute:"current-selected",mode:"boolean"})],H.prototype,"currentSelected",void 0);l([u({attribute:"selected",mode:"boolean"})],H.prototype,"defaultSelected",void 0);l([k],H.prototype,"descriptionSlot",void 0);l([k],H.prototype,"disabled",void 0);l([u({attribute:"disabled",mode:"boolean"})],H.prototype,"disabledAttribute",void 0);l([u({attribute:"form"})],H.prototype,"formAttribute",void 0);l([u({mode:"boolean"})],H.prototype,"freeform",void 0);l([u({attribute:"id"})],H.prototype,"id",void 0);l([u({attribute:"value",mode:"fromView"})],H.prototype,"initialValue",void 0);l([k],H.prototype,"multiple",void 0);l([u],H.prototype,"name",void 0);l([k],H.prototype,"start",void 0);l([u({attribute:"text",mode:"fromView"})],H.prototype,"textAttribute",void 0);const Is=m`
  ${te("inline-grid")}

  :host {
    -webkit-tap-highlight-color: transparent;
    ${ri}
    align-items: center;
    background-color: ${Z};
    border-radius: ${j};
    border: ${we} solid ${de};
    box-sizing: border-box;
    color: ${qt};
    column-gap: ${Ae};
    cursor: pointer;
    grid-template-areas: 'indicator start content';
    grid-template-columns: auto auto 1fr;
    min-height: 32px;
    padding: ${Ie};
  }

  .content {
    grid-area: content;
    line-height: 1;
  }

  ::slotted([slot='start']) {
    grid-area: start;
  }

  :host(:hover) {
    background-color: ${_r};
    color: ${Lr};
  }

  :host(:active) {
    background-color: ${jr};
    color: ${Dr};
  }

  :host(:disabled) {
    background-color: ${Z};
    color: ${Se};
    cursor: default;
  }

  .checkmark-16-filled {
    fill: currentColor;
    width: 16px;
  }

  slot[name='checked-indicator'] > *,
  ::slotted([slot='checked-indicator']) {
    aspect-ratio: 1;
    flex: 0 0 auto;
    grid-area: indicator;
    visibility: hidden;
  }

  :host(${Mt}) :is(slot[name='checked-indicator'] > *, ::slotted([slot='checked-indicator'])) {
    visibility: visible;
  }

  :host(${Ce}) .checkmark-16-filled,
  :host(:not(${Ce})) .checkmark-12-regular {
    display: none;
  }

  :host(${Ce}) .checkmark-12-regular {
    background-color: ${Z};
    border-radius: ${bt};
    border: ${P} solid ${Fe};
    box-sizing: border-box;
    cursor: pointer;
    fill: transparent;
    position: relative;
    visibility: visible;
    width: 16px;
  }

  :host(${Ce}${Mt}) .checkmark-12-regular {
    background-color: ${ht};
    border-color: ${Ct};
    fill: ${Bt};
  }

  :host(:disabled${Ce}) .checkmark-12-regular {
    border-color: ${Q};
  }

  :host(:disabled${Ce}${Mt}) .checkmark-12-regular {
    background-color: ${Ke};
  }

  :host(${Vn}) {
    border: ${we} solid ${He};
  }

  @supports (selector(:host(:has(*)))) {
    :host(:has([slot='start']:not([size='16']))) {
      column-gap: ${Ie};
    }
  }

  :host(${Dn}) {
    column-gap: ${Ie};
    grid-template-areas:
      'indicator start content'
      'indicator start description';
  }

  ::slotted([slot='description']) {
    color: ${xt};
    grid-area: description;
    ${ii}
  }
`,Es=T.partial(`
  <svg aria-hidden="true" class="checkmark-16-filled" viewBox="0 0 16 16">
    <path
      d="M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032"
    />
  </svg>
  <svg aria-hidden="true" class="checkmark-12-regular" viewBox="0 0 12 12">
    <path
      d="M9.854 3.146a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L5 7.293l4.146-4.147a.5.5 0 0 1 .708 0"
    />
  </svg>
`);function Fs(o={}){return T`
    <slot name="checked-indicator">${ke(o.checkedIndicator)}</slot>
    ${io(o)}
    <div class="content" part="content">
      <slot ${$e({property:"freeformOutputs",filter:jt("output")})}></slot>
    </div>
    <div class="description" part="description">
      <slot name="description" ${$e("descriptionSlot")}></slot>
    </div>
  `}const Hs=Fs({checkedIndicator:Es}),As=H.compose({name:`${I.prefix}-option`,template:Hs,styles:Is});class Ms extends _{constructor(){super(),this.elementInternals.role="switch"}}function Os(o={}){return T`
    <template
      tabindex="${e=>e.disabled?void 0:0}"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @input="${(e,t)=>e.inputHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
      @keyup="${(e,t)=>e.keyupHandler(t.event)}"
    >
      <slot name="switch">${ke(o.switch)}</slot>
    </template>
  `}const zs=Os({switch:'<span class="checked-indicator" part="checked-indicator"></span>'}),Vs=m`
  ${te("inline-flex")}

  :host {
    box-sizing: border-box;
    align-items: center;
    flex-direction: row;
    outline: none;
    user-select: none;
    contain: content;
    padding: 0 ${se};
    width: 40px;
    height: 20px;
    background-color: ${K};
    border: 1px solid ${Fe};
    border-radius: ${ao};
    cursor: pointer;
  }

  :host(:hover) {
    background: none;
    border-color: ${qe};
  }
  :host(:active) {
    border-color: ${We};
  }
  :host(:disabled),
  :host([readonly]) {
    border: 1px solid ${Q};
    background-color: none;
    pointer: default;
  }
  :host(${$}) {
    background: ${ht};
    border-color: ${ht};
  }
  :host(${$}:hover) {
    background: ${ut};
    border-color: ${ut};
  }
  :host(${$}:active) {
    background: ${pt};
    border-color: ${pt};
  }
  :host(${$}:disabled) {
    background: ${Ke};
    border-color: ${Q};
  }
  .checked-indicator {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    margin-inline-start: 0;
    background-color: ${xt};
    transition-duration: ${ho};
    transition-timing-function: ${oi};
    transition-property: margin-inline-start;
  }
  :host(${$}) .checked-indicator {
    background-color: ${Bt};
    margin-inline-start: calc(100% - 14px);
  }
  :host(${$}:hover) .checked-indicator {
    background: ${rn};
  }
  :host(${$}:active) .checked-indicator {
    background: ${nn};
  }
  :host(:hover) .checked-indicator {
    background-color: ${tn};
  }
  :host(:active) .checked-indicator {
    background-color: ${on};
  }
  :host(:disabled) .checked-indicator,
  :host([readonly]) .checked-indicator {
    background: ${Se};
  }
  :host(${$}:disabled) .checked-indicator {
    background: ${Se};
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:not([slot='input']):focus-visible) {
    border-color: ${de};
    outline: ${we} solid ${de};
    box-shadow: ${Yr}, 0 0 0 2px ${He};
  }
`.withBehaviors(ro(m`
    :host {
      border-color: InactiveBorder;
    }
    :host(${$}),
    :host(${$}:active),
    :host(${$}:hover) {
      background: Highlight;
      border-color: Highlight;
    }
    .checked-indicator,
    :host(:hover) .checked-indicator,
    :host(:active) .checked-indicator {
      background-color: ActiveCaption;
    }
    :host(${$}) .checked-indicator,
    :host(${$}:hover) .checked-indicator,
    :host(${$}:active) .checked-indicator {
      background-color: ButtonFace;
    }
    :host(:disabled) .checked-indicator,
    :host(${$}:disabled) .checked-indicator {
      background-color: GrayText;
    }
  `)),Ps=Ms.compose({name:`${I.prefix}-switch`,template:zs,styles:Vs}),Ls={text:"text"},Ds=["date","datetime-local","email","month","number","password","search","tel","text","time","url","week"],mo=class mo extends ue{constructor(){super(...arguments),this.type=Ls.text,this.dirtyValue=!1,this.elementInternals=this.attachInternals()}currentValueChanged(e,t){this.value=t}defaultSlottedNodesChanged(e,t){this.$fastController.isConnected&&(this.controlLabel.hidden=!(t!=null&&t.length))}initialValueChanged(){this.dirtyValue||(this.value=this.initialValue)}readOnlyChanged(){this.$fastController.isConnected&&(this.elementInternals.ariaReadOnly=`${!!this.readOnly}`)}requiredChanged(e,t){this.$fastController.isConnected&&(this.elementInternals.ariaRequired=`${!!t}`)}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage||this.control.validationMessage}get value(){return v.track(this,"value"),this.currentValue}set value(e){this.currentValue=e,this.$fastController.isConnected&&(this.control.value=e??"",this.setFormValue(e),this.setValidity(),v.notify(this,"value"))}get willValidate(){return this.elementInternals.willValidate}get form(){return this.elementInternals.form}beforeinputHandler(e){return e.inputType==="insertLineBreak"&&this.implicitSubmit(),!0}changeHandler(e){return this.setValidity(),this.$emit("change",e,{bubbles:!0,composed:!0}),!0}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){var t;return e.target===this&&((t=this.control)==null||t.click()),!0}connectedCallback(){super.connectedCallback(),this.setFormValue(this.value),this.setValidity()}focusinHandler(e){var t;return e.target===this&&((t=this.control)==null||t.focus()),!0}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}implicitSubmit(){if(!this.elementInternals.form)return;if(this.elementInternals.form.elements.length===1){this.elementInternals.form.requestSubmit();return}const e=[...this.elementInternals.form.elements],t=e.find(i=>i.getAttribute("type")==="submit");if(t){t.click();return}e.filter(i=>Ds.includes(i.getAttribute("type")??"")).length>1||this.elementInternals.form.requestSubmit()}inputHandler(e){return this.dirtyValue=!0,this.value=this.control.value,!0}keydownHandler(e){return e.key==="Enter"&&this.implicitSubmit(),!0}select(){this.control.select(),this.$emit("select")}setCustomValidity(e){this.elementInternals.setValidity({customError:!0},e),this.reportValidity()}reportValidity(){return this.elementInternals.reportValidity()}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}setValidity(e=this.control.validity,t=this.validationMessage,r=this.control){if(this.$fastController.isConnected){if(this.disabled){this.elementInternals.setValidity({});return}this.elementInternals.setValidity(e,t,r)}}};mo.formAssociated=!0;let S=mo;l([u],S.prototype,"autocomplete",void 0);l([u({mode:"boolean"})],S.prototype,"autofocus",void 0);l([u({attribute:"current-value"})],S.prototype,"currentValue",void 0);l([k],S.prototype,"defaultSlottedNodes",void 0);l([u],S.prototype,"dirname",void 0);l([u({mode:"boolean"})],S.prototype,"disabled",void 0);l([u({attribute:"form"})],S.prototype,"formAttribute",void 0);l([u({attribute:"value",mode:"fromView"})],S.prototype,"initialValue",void 0);l([u],S.prototype,"list",void 0);l([u({converter:St})],S.prototype,"maxlength",void 0);l([u({converter:St})],S.prototype,"minlength",void 0);l([u({mode:"boolean"})],S.prototype,"multiple",void 0);l([u],S.prototype,"name",void 0);l([u],S.prototype,"pattern",void 0);l([u],S.prototype,"placeholder",void 0);l([u({attribute:"readonly",mode:"boolean"})],S.prototype,"readOnly",void 0);l([u({mode:"boolean"})],S.prototype,"required",void 0);l([u({converter:St})],S.prototype,"size",void 0);l([u({converter:{fromView:o=>typeof o=="string"?["true",""].includes(o.trim().toLowerCase()):null,toView:o=>o.toString()}})],S.prototype,"spellcheck",void 0);l([u],S.prototype,"type",void 0);l([k],S.prototype,"controlLabel",void 0);class Tt extends S{}l([u],Tt.prototype,"appearance",void 0);l([u({attribute:"control-size"})],Tt.prototype,"controlSize",void 0);Pr(Tt,zr);const Rs=m`
  ${te("block")}

  :host {
    font-family: ${B};
    font-size: ${ce};
    font-weight: ${q};
    line-height: ${fe};
    max-width: 400px;
  }
  .label {
    display: flex;
    color: ${ae};
    padding-bottom: ${Xt};
    flex-shrink: 0;
    padding-inline-end: ${Ae};
  }

  .label[hidden],
  :host(:empty) .label {
    display: none;
  }

  .root {
    align-items: center;
    background-color: ${Z};
    border: ${P} solid ${ft};
    border-bottom-color: ${Fe};
    border-radius: ${j};
    box-sizing: border-box;
    height: 32px;
    display: inline-flex;
    flex-direction: row;
    gap: ${se};
    padding: 0 ${Jr};
    position: relative;
    width: 100%;
  }

  :has(.control:user-invalid) {
    border-color: ${fn};
  }

  .root::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: -1px;
    bottom: 0px;
    right: -1px;
    height: max(2px, ${j});
    border-radius: 0 0 ${j} ${j};
    border-bottom: 2px solid ${Ct};
    clip-path: inset(calc(100% - 2px) 1px 0px);
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: ${Zr};
    transition-delay: ${ei};
  }
  .control {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: ${ae};
    border-radius: ${j};
    background: ${K};
    font-family: ${B};
    font-weight: ${q};
    font-size: ${ce};
    border: none;
    vertical-align: center;
  }
  .control:focus-visible {
    outline: 0;
    border: 0;
  }
  .control::placeholder {
    color: ${Rr};
  }
  :host ::slotted([slot='start']),
  :host ::slotted([slot='end']) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${xt};
    font-size: ${Xr};
  }
  :host ::slotted([slot='start']) {
    padding-right: ${se};
  }
  :host ::slotted([slot='end']) {
    padding-left: ${se};
    gap: ${Ae};
  }
  :host(:hover) .root {
    border-color: ${no};
    border-bottom-color: ${qe};
  }
  :host(:active) .root {
    border-color: ${so};
  }
  :host(:focus-within) .root {
    outline: transparent solid 2px;
    border-bottom: 0;
  }
  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${ho};
    transition-delay: ${ti};
  }
  :host(:focus-within:active) .root:after {
    border-bottom-color: ${qr};
  }
  :host([appearance='outline']:focus-within) .root {
    border: ${P} solid ${ft};
  }
  :host(:focus-within) .control {
    color: ${ae};
  }
  :host([disabled]) .root {
    background: ${K};
    border: ${P} solid ${Q};
  }
  :host([disabled]) .control::placeholder,
  :host([disabled]) ::slotted([slot='start']),
  :host([disabled]) ::slotted([slot='end']) {
    color: ${Se};
  }
  ::selection {
    color: ${Bt};
    background-color: ${sn};
  }
  :host([control-size='small']) .control {
    font-size: ${Be};
    font-weight: ${q};
    line-height: ${pe};
  }
  :host([control-size='small']) .root {
    height: 24px;
    gap: ${se};
    padding: 0 ${Ie};
  }
  :host([control-size='small']) ::slotted([slot='start']),
  :host([control-size='small']) ::slotted([slot='end']) {
    font-size: ${he};
  }
  :host([control-size='large']) .control {
    font-size: ${he};
    font-weight: ${q};
    line-height: ${be};
  }
  :host([control-size='large']) .root {
    height: 40px;
    gap: ${co};
    padding: 0 ${Ue};
  }
  :host([control-size='large']) ::slotted([slot='start']),
  :host([control-size='large']) ::slotted([slot='end']) {
    font-size: ${Gr};
  }
  :host([appearance='underline']) .root {
    background: ${K};
    border: 0;
    border-radius: 0;
    border-bottom: ${P} solid ${Fe};
  }
  :host([appearance='underline']:hover) .root {
    border-bottom-color: ${qe};
  }
  :host([appearance='underline']:active) .root {
    border-bottom-color: ${We};
  }
  :host([appearance='underline']:focus-within) .root {
    border: 0;
    border-bottom-color: ${We};
  }
  :host([appearance='underline'][disabled]) .root {
    border-bottom-color: ${Q};
  }
  :host([appearance='filled-lighter']) .root,
  :host([appearance='filled-darker']) .root {
    border: ${P} solid ${de};
    box-shadow: ${Qr};
  }
  :host([appearance='filled-lighter']) .root {
    background: ${Z};
  }
  :host([appearance='filled-darker']) .root {
    background: ${Wt};
  }
  :host([appearance='filled-lighter']:hover) .root,
  :host([appearance='filled-darker']:hover) .root {
    border-color: ${Ut};
  }
  :host([appearance='filled-lighter']:active) .root,
  :host([appearance='filled-darker']:active) .root {
    border-color: ${Ut};
    background: ${Wt};
  }
`;function _s(o={}){return T`
    <template
      @beforeinput="${(e,t)=>e.beforeinputHandler(t.event)}"
      @focusin="${(e,t)=>e.focusinHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
      <label part="label" for="control" class="label" ${G("controlLabel")}>
        <slot
          ${$e({property:"defaultSlottedNodes",filter:Qi})}
        ></slot>
      </label>
      <div class="root" part="root">
        ${io(o)}
        <input
          class="control"
          part="control"
          id="control"
          @change="${(e,t)=>e.changeHandler(t.event)}"
          @input="${(e,t)=>e.inputHandler(t.event)}"
          ?autofocus="${e=>e.autofocus}"
          autocomplete="${e=>e.autocomplete}"
          ?disabled="${e=>e.disabled}"
          list="${e=>e.list}"
          maxlength="${e=>e.maxlength}"
          minlength="${e=>e.minlength}"
          ?multiple="${e=>e.multiple}"
          name="${e=>e.name}"
          pattern="${e=>e.pattern}"
          placeholder="${e=>e.placeholder}"
          ?readonly="${e=>e.readOnly}"
          ?required="${e=>e.required}"
          size="${e=>e.size}"
          spellcheck="${e=>e.spellcheck}"
          type="${e=>e.type}"
          value="${e=>e.initialValue}"
          ${G("control")}
        />
        ${Vr(o)}
      </div>
    </template>
  `}const js=_s(),qs=Tt.compose({name:`${I.prefix}-text-input`,template:js,styles:Rs,shadowOptions:{delegatesFocus:!0}}),Ws="adoptedStyleSheets"in document,Us="CSSScopeRule"in window,zt=new Map,Vt=new Map,_e=new Map,Pt=new Map,Le=new CSSStyleSheet;function Xs(o,e=document){if(!(!e||!Gs(e))){if(!Ws||e instanceof HTMLElement&&!e.shadowRoot&&!Us){const t=e===document?document.documentElement:e;Zs(o,t);return}[document,document.documentElement,document.body].includes(e)?Ks(o):Qs(o,e)}}function po(o){if(!zt.has(o)){const e=[];for(const[t,r]of Object.entries(o))e.push(`--${t}:${r.toString()};`);zt.set(o,e.join(""))}return zt.get(o)}function Gs(o){return[document,document.documentElement].includes(o)||o instanceof HTMLElement&&!!o.closest("body")}function Ks(o){if(o===null){document.adoptedStyleSheets.includes(Le)&&Le.replaceSync("");return}Le.replaceSync(`
    html {
      ${po(o)}
    }
  `),document.adoptedStyleSheets.includes(Le)||document.adoptedStyleSheets.push(Le)}function Qs(o,e){if(o===null){e.shadowRoot&&_e.has(e)?_e.get(e).replaceSync(""):(delete e.dataset.fluentTheme,nr(e));return}e.shadowRoot?Ys(e).replaceSync(`
      :host {
        ${po(o)}
      }
    `):(e.dataset.fluentTheme=Js(o),nr(e))}function Ys(o){var e;if(!_e.has(o)){const t=new CSSStyleSheet;_e.set(o,t),(e=o.shadowRoot)==null||e.adoptedStyleSheets.push(t)}return _e.get(o)}function Js(o){if(!Vt.has(o)){const e=Mr("fluent-theme-"),t=new CSSStyleSheet;Vt.set(o,e),t.replaceSync(`
      @scope ([data-fluent-theme="${e}"]) {
        :scope {
          ${po(o)}
        }
      }
    `),document.adoptedStyleSheets.push(t)}return Vt.get(o)}function Zs(o,e){let t;if(o===null){if(!Pt.has(e))return;t=Pt.get(e)}else Pt.set(e,o),t=o;for(const[r,i]of Object.entries(t))o===null?e.style.removeProperty(`--${r}`):e.style.setProperty(`--${r}`,i.toString())}const{userAgent:ea}=navigator,ta=/\bAppleWebKit\/[\d+\.]+\b/.test(ea);function nr(o){if(!ta)return;const e="visibility",t="hidden",r=o.style.getPropertyValue(e);o.style.setProperty(e,t),J.process(),o.style.setProperty(e,r)}const p={14:"#242424",16:"#292929",20:"#333333",26:"#424242",30:"#4d4d4d",34:"#575757",38:"#616161",44:"#707070",70:"#b3b3b3",74:"#bdbdbd",78:"#c7c7c7",82:"#d1d1d1",84:"#d6d6d6",86:"#dbdbdb",88:"#e0e0e0",90:"#e6e6e6",92:"#ebebeb",94:"#f0f0f0",96:"#f5f5f5",98:"#fafafa"},re={10:"rgba(255, 255, 255, 0.1)",20:"rgba(255, 255, 255, 0.2)",40:"rgba(255, 255, 255, 0.4)",50:"rgba(255, 255, 255, 0.5)",70:"rgba(255, 255, 255, 0.7)",80:"rgba(255, 255, 255, 0.8)"},ie={5:"rgba(0, 0, 0, 0.05)",10:"rgba(0, 0, 0, 0.1)",20:"rgba(0, 0, 0, 0.2)",30:"rgba(0, 0, 0, 0.3)",40:"rgba(0, 0, 0, 0.4)",50:"rgba(0, 0, 0, 0.5)"},N="#ffffff",oa="#000000",ra={shade50:"#130204",shade40:"#230308",shade30:"#420610",shade20:"#590815",shade10:"#690a19",primary:"#750b1c",tint10:"#861b2c",tint20:"#962f3f",tint30:"#ac4f5e",tint40:"#d69ca5",tint50:"#e9c7cd",tint60:"#f9f0f2"},si={shade50:"#200205",shade40:"#3b0509",shade30:"#6e0811",shade20:"#960b18",shade10:"#b10e1c",primary:"#c50f1f",tint10:"#cc2635",tint20:"#d33f4c",tint30:"#dc626d",tint40:"#eeacb2",tint50:"#f6d1d5",tint60:"#fdf3f4"},ia={shade50:"#210809",shade40:"#3f1011",shade30:"#751d1f",shade20:"#9f282b",shade10:"#bc2f32",primary:"#d13438",tint10:"#d7494c",tint20:"#dc5e62",tint30:"#e37d80",tint40:"#f1bbbc",tint50:"#f8dadb",tint60:"#fdf6f6"},na={shade50:"#230900",shade40:"#411200",shade30:"#7a2101",shade20:"#a62d01",shade10:"#c43501",primary:"#da3b01",tint10:"#de501c",tint20:"#e36537",tint30:"#e9835e",tint40:"#f4bfab",tint50:"#f9dcd1",tint60:"#fdf6f3"},sa={shade50:"#200d03",shade40:"#3d1805",shade30:"#712d09",shade20:"#9a3d0c",shade10:"#b6480e",primary:"#ca5010",tint10:"#d06228",tint20:"#d77440",tint30:"#df8e64",tint40:"#efc4ad",tint50:"#f7dfd2",tint60:"#fdf7f4"},aa={shade50:"#271002",shade40:"#4a1e04",shade30:"#8a3707",shade20:"#bc4b09",shade10:"#de590b",primary:"#f7630c",tint10:"#f87528",tint20:"#f98845",tint30:"#faa06b",tint40:"#fdcfb4",tint50:"#fee5d7",tint60:"#fff9f5"},la={shade50:"#291600",shade40:"#4d2a00",shade30:"#8f4e00",shade20:"#c26a00",shade10:"#e67e00",primary:"#ff8c00",tint10:"#ff9a1f",tint20:"#ffa83d",tint30:"#ffba66",tint40:"#ffddb3",tint50:"#ffedd6",tint60:"#fffaf5"},da={shade50:"#251a00",shade40:"#463100",shade30:"#835b00",shade20:"#b27c00",shade10:"#d39300",primary:"#eaa300",tint10:"#edad1c",tint20:"#efb839",tint30:"#f2c661",tint40:"#f9e2ae",tint50:"#fcefd3",tint60:"#fefbf4"},ca={shade50:"#282400",shade40:"#4c4400",shade30:"#817400",shade20:"#c0ad00",shade10:"#e4cc00",primary:"#fde300",tint10:"#fde61e",tint20:"#fdea3d",tint30:"#feee66",tint40:"#fef7b2",tint50:"#fffad6",tint60:"#fffef5"},ha={shade50:"#1f1900",shade40:"#3a2f00",shade30:"#6c5700",shade20:"#937700",shade10:"#ae8c00",primary:"#c19c00",tint10:"#c8a718",tint20:"#d0b232",tint30:"#dac157",tint40:"#ecdfa5",tint50:"#f5eece",tint60:"#fdfbf2"},ua={shade50:"#181202",shade40:"#2e2103",shade30:"#553e06",shade20:"#745408",shade10:"#89640a",primary:"#986f0b",tint10:"#a47d1e",tint20:"#b18c34",tint30:"#c1a256",tint40:"#e0cea2",tint50:"#efe4cb",tint60:"#fbf8f2"},pa={shade50:"#170e07",shade40:"#2b1a0e",shade30:"#50301a",shade20:"#6c4123",shade10:"#804d29",primary:"#8e562e",tint10:"#9c663f",tint20:"#a97652",tint30:"#bb8f6f",tint40:"#ddc3b0",tint50:"#edded3",tint60:"#faf7f4"},fa={shade50:"#0c1501",shade40:"#162702",shade30:"#294903",shade20:"#376304",shade10:"#427505",primary:"#498205",tint10:"#599116",tint20:"#6ba02b",tint30:"#85b44c",tint40:"#bdd99b",tint50:"#dbebc7",tint60:"#f6faf0"},ba={shade50:"#002111",shade40:"#003d20",shade30:"#00723b",shade20:"#009b51",shade10:"#00b85f",primary:"#00cc6a",tint10:"#19d279",tint20:"#34d889",tint30:"#5ae0a0",tint40:"#a8f0cd",tint50:"#cff7e4",tint60:"#f3fdf8"},ga={shade50:"#031a02",shade40:"#063004",shade30:"#0b5a08",shade20:"#0e7a0b",shade10:"#11910d",primary:"#13a10e",tint10:"#27ac22",tint20:"#3db838",tint30:"#5ec75a",tint40:"#a7e3a5",tint50:"#cef0cd",tint60:"#f2fbf2"},ai={shade50:"#031403",shade40:"#052505",shade30:"#094509",shade20:"#0c5e0c",shade10:"#0e700e",primary:"#107c10",tint10:"#218c21",tint20:"#359b35",tint30:"#54b054",tint40:"#9fd89f",tint50:"#c9eac9",tint60:"#f1faf1"},ma={shade50:"#021102",shade40:"#032003",shade30:"#063b06",shade20:"#085108",shade10:"#0a5f0a",primary:"#0b6a0b",tint10:"#1a7c1a",tint20:"#2d8e2d",tint30:"#4da64d",tint40:"#9ad29a",tint50:"#c6e7c6",tint60:"#f0f9f0"},va={shade50:"#001d1f",shade40:"#00373a",shade30:"#00666d",shade20:"#008b94",shade10:"#00a5af",primary:"#00b7c3",tint10:"#18bfca",tint20:"#32c8d1",tint30:"#58d3db",tint40:"#a6e9ed",tint50:"#cef3f5",tint60:"#f2fcfd"},ya={shade50:"#001516",shade40:"#012728",shade30:"#02494c",shade20:"#026467",shade10:"#037679",primary:"#038387",tint10:"#159195",tint20:"#2aa0a4",tint30:"#4cb4b7",tint40:"#9bd9db",tint50:"#c7ebec",tint60:"#f0fafa"},$a={shade50:"#000f12",shade40:"#001b22",shade30:"#00333f",shade20:"#004555",shade10:"#005265",primary:"#005b70",tint10:"#0f6c81",tint20:"#237d92",tint30:"#4496a9",tint40:"#94c8d4",tint50:"#c3e1e8",tint60:"#eff7f9"},ka={shade50:"#001322",shade40:"#002440",shade30:"#004377",shade20:"#005ba1",shade10:"#006cbf",primary:"#0078d4",tint10:"#1a86d9",tint20:"#3595de",tint30:"#5caae5",tint40:"#a9d3f2",tint50:"#d0e7f8",tint60:"#f3f9fd"},Sa={shade50:"#000c16",shade40:"#00172a",shade30:"#002c4e",shade20:"#003b6a",shade10:"#00467e",primary:"#004e8c",tint10:"#125e9a",tint20:"#286fa8",tint30:"#4a89ba",tint40:"#9abfdc",tint50:"#c7dced",tint60:"#f0f6fa"},wa={shade50:"#0d1126",shade40:"#182047",shade30:"#2c3c85",shade20:"#3c51b4",shade10:"#4760d5",primary:"#4f6bed",tint10:"#637cef",tint20:"#778df1",tint30:"#93a4f4",tint40:"#c8d1fa",tint50:"#e1e6fc",tint60:"#f7f9fe"},xa={shade50:"#00061d",shade40:"#000c36",shade30:"#001665",shade20:"#001e89",shade10:"#0023a2",primary:"#0027b4",tint10:"#173bbd",tint20:"#3050c6",tint30:"#546fd2",tint40:"#a3b2e8",tint50:"#ccd5f3",tint60:"#f2f4fc"},Ba={shade50:"#120f25",shade40:"#221d46",shade30:"#3f3682",shade20:"#5649b0",shade10:"#6656d1",primary:"#7160e8",tint10:"#8172eb",tint20:"#9184ee",tint30:"#a79cf1",tint40:"#d2ccf8",tint50:"#e7e4fb",tint60:"#f9f8fe"},Ca={shade50:"#0f0717",shade40:"#1c0e2b",shade30:"#341a51",shade20:"#46236e",shade10:"#532982",primary:"#5c2e91",tint10:"#6b3f9e",tint20:"#7c52ab",tint30:"#9470bd",tint40:"#c6b1de",tint50:"#e0d3ed",tint60:"#f7f4fb"},Na={shade50:"#160418",shade40:"#29072e",shade30:"#4c0d55",shade20:"#671174",shade10:"#7a1589",primary:"#881798",tint10:"#952aa4",tint20:"#a33fb1",tint30:"#b55fc1",tint40:"#d9a7e0",tint50:"#eaceef",tint60:"#faf2fb"},Ta={shade50:"#1f091d",shade40:"#3a1136",shade30:"#6d2064",shade20:"#932b88",shade10:"#af33a1",primary:"#c239b3",tint10:"#c94cbc",tint20:"#d161c4",tint30:"#da7ed0",tint40:"#edbbe7",tint50:"#f5daf2",tint60:"#fdf5fc"},Ia={shade50:"#1c0b1f",shade40:"#35153a",shade30:"#63276d",shade20:"#863593",shade10:"#9f3faf",primary:"#b146c2",tint10:"#ba58c9",tint20:"#c36bd1",tint30:"#cf87da",tint40:"#e6bfed",tint50:"#f2dcf5",tint60:"#fcf6fd"},Ea={shade50:"#24091b",shade40:"#441232",shade30:"#80215d",shade20:"#ad2d7e",shade10:"#cd3595",primary:"#e43ba6",tint10:"#e750b0",tint20:"#ea66ba",tint30:"#ef85c8",tint40:"#f7c0e3",tint50:"#fbddf0",tint60:"#fef6fb"},Fa={shade50:"#1f0013",shade40:"#390024",shade30:"#6b0043",shade20:"#91005a",shade10:"#ac006b",primary:"#bf0077",tint10:"#c71885",tint20:"#ce3293",tint30:"#d957a8",tint40:"#eca5d1",tint50:"#f5cee6",tint60:"#fcf2f9"},Ha={shade50:"#13000c",shade40:"#240017",shade30:"#43002b",shade20:"#5a003b",shade10:"#6b0045",primary:"#77004d",tint10:"#87105d",tint20:"#98246f",tint30:"#ad4589",tint40:"#d696c0",tint50:"#e9c4dc",tint60:"#faf0f6"},Aa={shade50:"#141313",shade40:"#252323",shade30:"#444241",shade20:"#5d5958",shade10:"#6e6968",primary:"#7a7574",tint10:"#8a8584",tint20:"#9a9594",tint30:"#afabaa",tint40:"#d7d4d4",tint50:"#eae8e8",tint60:"#faf9f9"},Ma={shade50:"#0f0e0e",shade40:"#1c1b1a",shade30:"#343231",shade20:"#474443",shade10:"#54514f",primary:"#5d5a58",tint10:"#706d6b",tint20:"#84817e",tint30:"#9e9b99",tint40:"#cecccb",tint50:"#e5e4e3",tint60:"#f8f8f8"},Oa={shade50:"#111314",shade40:"#1f2426",shade30:"#3b4447",shade20:"#505c60",shade10:"#5f6d71",primary:"#69797e",tint10:"#79898d",tint20:"#89989d",tint30:"#a0adb2",tint40:"#cdd6d8",tint50:"#e4e9ea",tint60:"#f8f9fa"},za={shade50:"#090a0b",shade40:"#111315",shade30:"#202427",shade20:"#2b3135",shade10:"#333a3f",primary:"#394146",tint10:"#4d565c",tint20:"#626c72",tint30:"#808a90",tint40:"#bcc3c7",tint50:"#dbdfe1",tint60:"#f6f7f8"},V={red:ia,green:ai,darkOrange:na,yellow:ca,berry:Ta,lightGreen:ga,marigold:da},Lt={darkRed:ra,cranberry:si,pumpkin:sa,peach:la,gold:ha,brass:ua,brown:pa,forest:fa,seafoam:ba,darkGreen:ma,lightTeal:va,teal:ya,steel:$a,blue:ka,royalBlue:Sa,cornflower:wa,navy:xa,lavender:Ba,purple:Ca,grape:Na,lilac:Ia,pink:Ea,magenta:Fa,plum:Ha,beige:Aa,mink:Ma,platinum:Oa,anchor:za},M={cranberry:si,green:ai,orange:aa},Va=["red","green","darkOrange","yellow","berry","lightGreen","marigold"],Pa=["darkRed","cranberry","pumpkin","peach","gold","brass","brown","forest","seafoam","darkGreen","lightTeal","teal","steel","blue","royalBlue","cornflower","navy","lavender","purple","grape","lilac","pink","magenta","plum","beige","mink","platinum","anchor"],Ve={success:"green",warning:"orange",danger:"cranberry"},Je=Va.reduce((o,e)=>{const t=e.slice(0,1).toUpperCase()+e.slice(1),r={[`colorPalette${t}Background1`]:V[e].tint60,[`colorPalette${t}Background2`]:V[e].tint40,[`colorPalette${t}Background3`]:V[e].primary,[`colorPalette${t}Foreground1`]:V[e].shade10,[`colorPalette${t}Foreground2`]:V[e].shade30,[`colorPalette${t}Foreground3`]:V[e].primary,[`colorPalette${t}BorderActive`]:V[e].primary,[`colorPalette${t}Border1`]:V[e].tint40,[`colorPalette${t}Border2`]:V[e].primary};return Object.assign(o,r)},{});Je.colorPaletteYellowForeground1=V.yellow.shade30;Je.colorPaletteRedForegroundInverted=V.red.tint20;Je.colorPaletteGreenForegroundInverted=V.green.tint20;Je.colorPaletteYellowForegroundInverted=V.yellow.tint40;const La=Pa.reduce((o,e)=>{const t=e.slice(0,1).toUpperCase()+e.slice(1),r={[`colorPalette${t}Background2`]:Lt[e].tint40,[`colorPalette${t}Foreground2`]:Lt[e].shade30,[`colorPalette${t}BorderActive`]:Lt[e].primary};return Object.assign(o,r)},{}),Da={...Je,...La},Pe=Object.entries(Ve).reduce((o,[e,t])=>{const r=e.slice(0,1).toUpperCase()+e.slice(1),i={[`colorStatus${r}Background1`]:M[t].tint60,[`colorStatus${r}Background2`]:M[t].tint40,[`colorStatus${r}Background3`]:M[t].primary,[`colorStatus${r}Foreground1`]:M[t].shade10,[`colorStatus${r}Foreground2`]:M[t].shade30,[`colorStatus${r}Foreground3`]:M[t].primary,[`colorStatus${r}ForegroundInverted`]:M[t].tint30,[`colorStatus${r}BorderActive`]:M[t].primary,[`colorStatus${r}Border1`]:M[t].tint40,[`colorStatus${r}Border2`]:M[t].primary};return Object.assign(o,i)},{});Pe.colorStatusDangerBackground3Hover=M[Ve.danger].shade10;Pe.colorStatusDangerBackground3Pressed=M[Ve.danger].shade20;Pe.colorStatusWarningForeground1=M[Ve.warning].shade20;Pe.colorStatusWarningForeground3=M[Ve.warning].shade20;Pe.colorStatusWarningBorder2=M[Ve.warning].shade20;const Ra=o=>({colorNeutralForeground1:p[14],colorNeutralForeground1Hover:p[14],colorNeutralForeground1Pressed:p[14],colorNeutralForeground1Selected:p[14],colorNeutralForeground2:p[26],colorNeutralForeground2Hover:p[14],colorNeutralForeground2Pressed:p[14],colorNeutralForeground2Selected:p[14],colorNeutralForeground2BrandHover:o[80],colorNeutralForeground2BrandPressed:o[70],colorNeutralForeground2BrandSelected:o[80],colorNeutralForeground3:p[38],colorNeutralForeground3Hover:p[26],colorNeutralForeground3Pressed:p[26],colorNeutralForeground3Selected:p[26],colorNeutralForeground3BrandHover:o[80],colorNeutralForeground3BrandPressed:o[70],colorNeutralForeground3BrandSelected:o[80],colorNeutralForeground4:p[44],colorNeutralForegroundDisabled:p[74],colorNeutralForegroundInvertedDisabled:re[40],colorBrandForegroundLink:o[70],colorBrandForegroundLinkHover:o[60],colorBrandForegroundLinkPressed:o[40],colorBrandForegroundLinkSelected:o[70],colorNeutralForeground2Link:p[26],colorNeutralForeground2LinkHover:p[14],colorNeutralForeground2LinkPressed:p[14],colorNeutralForeground2LinkSelected:p[14],colorCompoundBrandForeground1:o[80],colorCompoundBrandForeground1Hover:o[70],colorCompoundBrandForeground1Pressed:o[60],colorBrandForeground1:o[80],colorBrandForeground2:o[70],colorBrandForeground2Hover:o[60],colorBrandForeground2Pressed:o[30],colorNeutralForeground1Static:p[14],colorNeutralForegroundStaticInverted:N,colorNeutralForegroundInverted:N,colorNeutralForegroundInvertedHover:N,colorNeutralForegroundInvertedPressed:N,colorNeutralForegroundInvertedSelected:N,colorNeutralForegroundInverted2:N,colorNeutralForegroundOnBrand:N,colorNeutralForegroundInvertedLink:N,colorNeutralForegroundInvertedLinkHover:N,colorNeutralForegroundInvertedLinkPressed:N,colorNeutralForegroundInvertedLinkSelected:N,colorBrandForegroundInverted:o[100],colorBrandForegroundInvertedHover:o[110],colorBrandForegroundInvertedPressed:o[100],colorBrandForegroundOnLight:o[80],colorBrandForegroundOnLightHover:o[70],colorBrandForegroundOnLightPressed:o[50],colorBrandForegroundOnLightSelected:o[60],colorNeutralBackground1:N,colorNeutralBackground1Hover:p[96],colorNeutralBackground1Pressed:p[88],colorNeutralBackground1Selected:p[92],colorNeutralBackground2:p[98],colorNeutralBackground2Hover:p[94],colorNeutralBackground2Pressed:p[86],colorNeutralBackground2Selected:p[90],colorNeutralBackground3:p[96],colorNeutralBackground3Hover:p[92],colorNeutralBackground3Pressed:p[84],colorNeutralBackground3Selected:p[88],colorNeutralBackground4:p[94],colorNeutralBackground4Hover:p[98],colorNeutralBackground4Pressed:p[96],colorNeutralBackground4Selected:N,colorNeutralBackground5:p[92],colorNeutralBackground5Hover:p[96],colorNeutralBackground5Pressed:p[94],colorNeutralBackground5Selected:p[98],colorNeutralBackground6:p[90],colorNeutralBackgroundInverted:p[16],colorNeutralBackgroundStatic:p[20],colorNeutralBackgroundAlpha:re[50],colorNeutralBackgroundAlpha2:re[80],colorSubtleBackground:"transparent",colorSubtleBackgroundHover:p[96],colorSubtleBackgroundPressed:p[88],colorSubtleBackgroundSelected:p[92],colorSubtleBackgroundLightAlphaHover:re[70],colorSubtleBackgroundLightAlphaPressed:re[50],colorSubtleBackgroundLightAlphaSelected:"transparent",colorSubtleBackgroundInverted:"transparent",colorSubtleBackgroundInvertedHover:ie[10],colorSubtleBackgroundInvertedPressed:ie[30],colorSubtleBackgroundInvertedSelected:ie[20],colorTransparentBackground:"transparent",colorTransparentBackgroundHover:"transparent",colorTransparentBackgroundPressed:"transparent",colorTransparentBackgroundSelected:"transparent",colorNeutralBackgroundDisabled:p[94],colorNeutralBackgroundInvertedDisabled:re[10],colorNeutralStencil1:p[90],colorNeutralStencil2:p[98],colorNeutralStencil1Alpha:ie[10],colorNeutralStencil2Alpha:ie[5],colorBackgroundOverlay:ie[40],colorScrollbarOverlay:ie[50],colorBrandBackground:o[80],colorBrandBackgroundHover:o[70],colorBrandBackgroundPressed:o[40],colorBrandBackgroundSelected:o[60],colorCompoundBrandBackground:o[80],colorCompoundBrandBackgroundHover:o[70],colorCompoundBrandBackgroundPressed:o[60],colorBrandBackgroundStatic:o[80],colorBrandBackground2:o[160],colorBrandBackground2Hover:o[150],colorBrandBackground2Pressed:o[130],colorBrandBackground3Static:o[60],colorBrandBackground4Static:o[40],colorBrandBackgroundInverted:N,colorBrandBackgroundInvertedHover:o[160],colorBrandBackgroundInvertedPressed:o[140],colorBrandBackgroundInvertedSelected:o[150],colorNeutralCardBackground:p[98],colorNeutralCardBackgroundHover:N,colorNeutralCardBackgroundPressed:p[96],colorNeutralCardBackgroundSelected:p[92],colorNeutralCardBackgroundDisabled:p[94],colorNeutralStrokeAccessible:p[38],colorNeutralStrokeAccessibleHover:p[34],colorNeutralStrokeAccessiblePressed:p[30],colorNeutralStrokeAccessibleSelected:o[80],colorNeutralStroke1:p[82],colorNeutralStroke1Hover:p[78],colorNeutralStroke1Pressed:p[70],colorNeutralStroke1Selected:p[74],colorNeutralStroke2:p[88],colorNeutralStroke3:p[94],colorNeutralStrokeSubtle:p[88],colorNeutralStrokeOnBrand:N,colorNeutralStrokeOnBrand2:N,colorNeutralStrokeOnBrand2Hover:N,colorNeutralStrokeOnBrand2Pressed:N,colorNeutralStrokeOnBrand2Selected:N,colorBrandStroke1:o[80],colorBrandStroke2:o[140],colorBrandStroke2Hover:o[120],colorBrandStroke2Pressed:o[80],colorBrandStroke2Contrast:o[140],colorCompoundBrandStroke:o[80],colorCompoundBrandStrokeHover:o[70],colorCompoundBrandStrokePressed:o[60],colorNeutralStrokeDisabled:p[88],colorNeutralStrokeInvertedDisabled:re[40],colorTransparentStroke:"transparent",colorTransparentStrokeInteractive:"transparent",colorTransparentStrokeDisabled:"transparent",colorNeutralStrokeAlpha:ie[5],colorNeutralStrokeAlpha2:re[20],colorStrokeFocus1:N,colorStrokeFocus2:oa,colorNeutralShadowAmbient:"rgba(0,0,0,0.12)",colorNeutralShadowKey:"rgba(0,0,0,0.14)",colorNeutralShadowAmbientLighter:"rgba(0,0,0,0.06)",colorNeutralShadowKeyLighter:"rgba(0,0,0,0.07)",colorNeutralShadowAmbientDarker:"rgba(0,0,0,0.20)",colorNeutralShadowKeyDarker:"rgba(0,0,0,0.24)",colorBrandShadowAmbient:"rgba(0,0,0,0.30)",colorBrandShadowKey:"rgba(0,0,0,0.25)"}),_a={borderRadiusNone:"0",borderRadiusSmall:"2px",borderRadiusMedium:"4px",borderRadiusLarge:"6px",borderRadiusXLarge:"8px",borderRadiusCircular:"10000px"},ja={curveAccelerateMax:"cubic-bezier(0.9,0.1,1,0.2)",curveAccelerateMid:"cubic-bezier(1,0,1,1)",curveAccelerateMin:"cubic-bezier(0.8,0,0.78,1)",curveDecelerateMax:"cubic-bezier(0.1,0.9,0.2,1)",curveDecelerateMid:"cubic-bezier(0,0,0,1)",curveDecelerateMin:"cubic-bezier(0.33,0,0.1,1)",curveEasyEaseMax:"cubic-bezier(0.8,0,0.2,1)",curveEasyEase:"cubic-bezier(0.33,0,0.67,1)",curveLinear:"cubic-bezier(0,0,1,1)"},qa={durationUltraFast:"50ms",durationFaster:"100ms",durationFast:"150ms",durationNormal:"200ms",durationGentle:"250ms",durationSlow:"300ms",durationSlower:"400ms",durationUltraSlow:"500ms"},Wa={fontSizeBase100:"10px",fontSizeBase200:"12px",fontSizeBase300:"14px",fontSizeBase400:"16px",fontSizeBase500:"20px",fontSizeBase600:"24px",fontSizeHero700:"28px",fontSizeHero800:"32px",fontSizeHero900:"40px",fontSizeHero1000:"68px"},Ua={lineHeightBase100:"14px",lineHeightBase200:"16px",lineHeightBase300:"20px",lineHeightBase400:"22px",lineHeightBase500:"28px",lineHeightBase600:"32px",lineHeightHero700:"36px",lineHeightHero800:"40px",lineHeightHero900:"52px",lineHeightHero1000:"92px"},Xa={fontWeightRegular:400,fontWeightMedium:500,fontWeightSemibold:600,fontWeightBold:700},Ga={fontFamilyBase:"'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",fontFamilyMonospace:"Consolas, 'Courier New', Courier, monospace",fontFamilyNumeric:"Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif"},x={none:"0",xxs:"2px",xs:"4px",sNudge:"6px",s:"8px",mNudge:"10px",m:"12px",l:"16px",xl:"20px",xxl:"24px",xxxl:"32px"},Ka={spacingHorizontalNone:x.none,spacingHorizontalXXS:x.xxs,spacingHorizontalXS:x.xs,spacingHorizontalSNudge:x.sNudge,spacingHorizontalS:x.s,spacingHorizontalMNudge:x.mNudge,spacingHorizontalM:x.m,spacingHorizontalL:x.l,spacingHorizontalXL:x.xl,spacingHorizontalXXL:x.xxl,spacingHorizontalXXXL:x.xxxl},Qa={spacingVerticalNone:x.none,spacingVerticalXXS:x.xxs,spacingVerticalXS:x.xs,spacingVerticalSNudge:x.sNudge,spacingVerticalS:x.s,spacingVerticalMNudge:x.mNudge,spacingVerticalM:x.m,spacingVerticalL:x.l,spacingVerticalXL:x.xl,spacingVerticalXXL:x.xxl,spacingVerticalXXXL:x.xxxl},Ya={strokeWidthThin:"1px",strokeWidthThick:"2px",strokeWidthThicker:"3px",strokeWidthThickest:"4px"};function sr(o,e,t=""){return{[`shadow2${t}`]:`0 0 2px ${o}, 0 1px 2px ${e}`,[`shadow4${t}`]:`0 0 2px ${o}, 0 2px 4px ${e}`,[`shadow8${t}`]:`0 0 2px ${o}, 0 4px 8px ${e}`,[`shadow16${t}`]:`0 0 2px ${o}, 0 8px 16px ${e}`,[`shadow28${t}`]:`0 0 8px ${o}, 0 14px 28px ${e}`,[`shadow64${t}`]:`0 0 8px ${o}, 0 32px 64px ${e}`}}const Ja=o=>{const e=Ra(o);return{..._a,...Wa,...Ua,...Ga,...Xa,...Ya,...Ka,...Qa,...qa,...ja,...e,...Da,...Pe,...sr(e.colorNeutralShadowAmbient,e.colorNeutralShadowKey),...sr(e.colorBrandShadowAmbient,e.colorBrandShadowKey,"Brand")}},Za={30:"#0a2e4a",40:"#0c3b5e",50:"#0e4775",60:"#0f548c",70:"#115ea3",80:"#0f6cbd",100:"#479ef5",110:"#62abf5",120:"#77b7f7",130:"#96c6fa",140:"#b4d6fa",150:"#cfe4fa",160:"#ebf3fc"},el=Ja(Za),ee={valid:o=>{let e=!0;if(/^\s*$/.test(o))e=!1;else try{let t=Number.parseInt(o);if(t<100)e=!1;else{let r=Math.floor(t/100),i=t%100;r>23&&(e=!1),i>59&&(e=!1)}}catch{e=!1}return e},diff:(o,e,t)=>{try{let r=Number.parseInt(o),i=Number.parseInt(e),n=Math.floor(r/100)*60+r%100,a=Math.floor(i/100)*60+i%100-t;if(n>a)return 0;let c=a-n,h=Math.floor(c/60),d=Math.round(c%60*100/60)/100;return h+d}catch{return 0}},timespanFromHours:(o,e)=>{let t=Math.floor(o/100)*60+o%100,r=Math.floor(e)*60+(e-Math.floor(e))*60,i=t+r,n=Math.floor(i/60),a=i%60,c=n*100+a;return[o,c]},format:o=>{if(o.length>2){o.length==3&&(o=o.padStart(4,"0"));let e=o.slice(0,2),t=o.slice(2,4);o=`${e}:${t}`}return o}},g={weekDay:"1",localWeekEntries:new Map,eventListeners:new Map,addEventListener:(o,e)=>{let t=g.eventListeners.get(o);t?t.push(e):g.eventListeners.set(o,[e])},removeEventListener:(o,e)=>{let t=eventListeners.get(o);if(t){let r=t.indexOf(e);r>-1&&t.splice(r,1)}},getWeekEntries:()=>localWeekEntries,triggerListeners:(o,e)=>{let t=g.eventListeners.get(o);t&&t.forEach(r=>{e?r(e):r()})},triggerDayDurationEvent:()=>{let o=g.today();if(o&&o.meetingTime&&o.leaveTime){let e=ee.diff(o.meetingTime,o.leaveTime,0);g.triggerListeners("daydurationchange",e)}},triggerActivityChangeEvent:o=>{g.triggerListeners("activitychange",o)},today:()=>g.localWeekEntries.get(g.weekDay),setWeekDay:o=>{g.weekDay=o,g.triggerListeners("weekdaychange"),g.triggerDayDurationEvent()},setDayDuration:(o,e)=>{if(!o)return;o=o.replace(/[^0-9]/g,"");let t=g.today();switch(t||(g.localWeekEntries.set(g.weekDay,{}),t=g.localWeekEntries.get(g.weekDay)),e){case"meet":t.meetingTime=o;break;case"leave":t.leaveTime=o;break}console.log(t),g.triggerDayDurationEvent()},setDayDurationStart:o=>{g.setDayDuration(o,"meet")},setDayDurationEnd:o=>{g.setDayDuration(o,"leave")},addActivityHours:(o,e)=>{let t=ee.timespanFromHours(800,o),r=g.today();if(!r)g.localWeekEntries.set(g.weekDay,{meetingTime:t[0],leaveTime:t[1],excludeLunch:!1}),r=g.localWeekEntries.get(g.weekDay),r.activities=[{activity:e,startTime:t[0],endTime:t[1],hours:o}];else if(!r.activities||r.activities.length===0)r.activities=[{activity:e,startTime:t[0],endTime:t[1],hours:o}];else{let i=r.activities[r.activities.length-1],n=ee.timespanFromHours(i.endTime,o);r.activities.push({activity:e,startTime:n[0],endTime:n[1],hours:o})}g.triggerActivityChangeEvent(r.activities)}};Xs(el);xs.define(I.registry);Ts.define(I.registry);gs.define(I.registry);$s.define(I.registry);As.define(I.registry);zn.define(I.registry);qs.define(I.registry);Ps.define(I.registry);as.define(I.registry);const tl=o=>{let e=o.target;e.value&&(e.value=e.value.replace(":","")),o.srcElement.style.color="black"},ol=o=>{let e=o.target.value;ee.valid(e)||(o.srcElement.style.color="red"),e=ee.format(e),o.target.value=e},rl=o=>{let e=document.getElementById("tdh"),t=`You have been at work for ${o} hours`;e.innerText=t},il=o=>{let e=document.getElementById("acs");if(o&&o.length>0){let t=document.querySelector("#alta > tbody");if(t){[...t.childNodes].forEach(a=>t.removeChild(a));let n=0;o.forEach(a=>{let c=document.createElement("tr");c.id=`alr${n++}`;let h=document.createElement("td"),d=document.createElement("td"),s=document.createElement("td"),f=document.createElement("td");h.textContent=a.hours,d.textContent=ee.format(a.startTime.toString()),s.textContent=ee.format(a.endTime.toString()),f.textContent=e.children[0].children[a.activity].innerText,c.appendChild(h),c.appendChild(d),c.appendChild(s),c.appendChild(f),t.appendChild(c)})}}},nl=()=>{let o=g.today();o?(document.getElementById("emt").value=ee.format(o.meetingTime),document.getElementById("elt").value=ee.format(o.leaveTime)):(document.getElementById("emt").value="",document.getElementById("elt").value="")},sl=()=>{let o=document.getElementById("acs"),e=document.getElementById("heh");document.getElementById("tet").checked;let t=Number.parseFloat(e.value.replace(",","."));g.addActivityHours(t,o.value)},al=()=>{let o=document.querySelectorAll("fluent-text-input[data-format='hhmm']");Array.from(o).map(t=>{t.addEventListener("focus",tl),t.addEventListener("blur",ol)}),document.getElementById("elb").selectOption(0),document.getElementById("ewd").addEventListener("change",t=>{g.setWeekDay(t.target.value)}),document.getElementById("emt").addEventListener("blur",t=>{g.setDayDurationStart(t.target.value)}),document.getElementById("elt").addEventListener("blur",t=>{g.setDayDurationEnd(t.target.value)}),g.addEventListener("weekdaychange",nl),g.addEventListener("daydurationchange",rl),g.addEventListener("activitychange",il),document.getElementById("aact").addEventListener("click",sl)};document.addEventListener("DOMContentLoaded",al,!1);
