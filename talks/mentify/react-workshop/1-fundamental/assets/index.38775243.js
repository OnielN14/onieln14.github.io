const Md=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}};Md();function Hr(t,n){const s=Object.create(null),o=t.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return n?l=>!!s[l.toLowerCase()]:l=>!!s[l]}const Td="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pd=Hr(Td);function zc(t){return!!t||t===""}function et(t){if(se(t)){const n={};for(let s=0;s<t.length;s++){const o=t[s],l=Re(o)?Hd(o):et(o);if(l)for(const r in l)n[r]=l[r]}return n}else{if(Re(t))return t;if(ze(t))return t}}const Rd=/;(?![^(]*\))/g,Ld=/:(.+)/;function Hd(t){const n={};return t.split(Rd).forEach(s=>{if(s){const o=s.split(Ld);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Pe(t){let n="";if(Re(t))n=t;else if(se(t))for(let s=0;s<t.length;s++){const o=Pe(t[s]);o&&(n+=o+" ")}else if(ze(t))for(const s in t)t[s]&&(n+=s+" ");return n.trim()}function te(t){if(!t)return null;let{class:n,style:s}=t;return n&&!Re(n)&&(t.class=Pe(n)),s&&(t.style=et(s)),t}const jn=t=>Re(t)?t:t==null?"":se(t)||ze(t)&&(t.toString===Wc||!ce(t.toString))?JSON.stringify(t,qc,2):String(t),qc=(t,n)=>n&&n.__v_isRef?qc(t,n.value):Zn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:Uc(n)?{[`Set(${n.size})`]:[...n.values()]}:ze(n)&&!se(n)&&!Yc(n)?String(n):n,Se={},Jn=[],Et=()=>{},Id=()=>!1,Nd=/^on[^a-z]/,Zo=t=>Nd.test(t),Ir=t=>t.startsWith("onUpdate:"),tt=Object.assign,Nr=(t,n)=>{const s=t.indexOf(n);s>-1&&t.splice(s,1)},zd=Object.prototype.hasOwnProperty,ge=(t,n)=>zd.call(t,n),se=Array.isArray,Zn=t=>Go(t)==="[object Map]",Uc=t=>Go(t)==="[object Set]",ce=t=>typeof t=="function",Re=t=>typeof t=="string",zr=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",Vc=t=>ze(t)&&ce(t.then)&&ce(t.catch),Wc=Object.prototype.toString,Go=t=>Wc.call(t),qd=t=>Go(t).slice(8,-1),Yc=t=>Go(t)==="[object Object]",qr=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Eo=Hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const n=Object.create(null);return s=>n[s]||(n[s]=t(s))},Ud=/-(\w)/g,Ht=Qo(t=>t.replace(Ud,(n,s)=>s?s.toUpperCase():"")),Vd=/\B([A-Z])/g,On=Qo(t=>t.replace(Vd,"-$1").toLowerCase()),el=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),wl=Qo(t=>t?`on${el(t)}`:""),Ws=(t,n)=>!Object.is(t,n),Gn=(t,n)=>{for(let s=0;s<t.length;s++)t[s](n)},To=(t,n,s)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:s})},Yl=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let La;const Wd=()=>La||(La=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let it;class Kc{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&it&&(this.parent=it,this.index=(it.scopes||(it.scopes=[])).push(this)-1)}run(n){if(this.active){const s=it;try{return it=this,n()}finally{it=s}}}on(){it=this}off(){it=this.parent}stop(n){if(this.active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.active=!1}}}function Yd(t){return new Kc(t)}function Kd(t,n=it){n&&n.active&&n.effects.push(t)}function Xd(){return it}function Jd(t){it&&it.cleanups.push(t)}const Ur=t=>{const n=new Set(t);return n.w=0,n.n=0,n},Xc=t=>(t.w&pn)>0,Jc=t=>(t.n&pn)>0,Zd=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=pn},Gd=t=>{const{deps:n}=t;if(n.length){let s=0;for(let o=0;o<n.length;o++){const l=n[o];Xc(l)&&!Jc(l)?l.delete(t):n[s++]=l,l.w&=~pn,l.n&=~pn}n.length=s}},Kl=new WeakMap;let Es=0,pn=1;const Xl=30;let At;const En=Symbol(""),Jl=Symbol("");class Vr{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Kd(this,o)}run(){if(!this.active)return this.fn();let n=At,s=sn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=At,At=this,sn=!0,pn=1<<++Es,Es<=Xl?Zd(this):Ha(this),this.fn()}finally{Es<=Xl&&Gd(this),pn=1<<--Es,At=this.parent,sn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){At===this?this.deferStop=!0:this.active&&(Ha(this),this.onStop&&this.onStop(),this.active=!1)}}function Ha(t){const{deps:n}=t;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(t);n.length=0}}let sn=!0;const Zc=[];function cs(){Zc.push(sn),sn=!1}function ps(){const t=Zc.pop();sn=t===void 0?!0:t}function mt(t,n,s){if(sn&&At){let o=Kl.get(t);o||Kl.set(t,o=new Map);let l=o.get(s);l||o.set(s,l=Ur()),Gc(l)}}function Gc(t,n){let s=!1;Es<=Xl?Jc(t)||(t.n|=pn,s=!Xc(t)):s=!t.has(At),s&&(t.add(At),At.deps.push(t))}function Wt(t,n,s,o,l,r){const a=Kl.get(t);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(s==="length"&&se(t))a.forEach((c,u)=>{(u==="length"||u>=o)&&i.push(c)});else switch(s!==void 0&&i.push(a.get(s)),n){case"add":se(t)?qr(s)&&i.push(a.get("length")):(i.push(a.get(En)),Zn(t)&&i.push(a.get(Jl)));break;case"delete":se(t)||(i.push(a.get(En)),Zn(t)&&i.push(a.get(Jl)));break;case"set":Zn(t)&&i.push(a.get(En));break}if(i.length===1)i[0]&&Zl(i[0]);else{const c=[];for(const u of i)u&&c.push(...u);Zl(Ur(c))}}function Zl(t,n){const s=se(t)?t:[...t];for(const o of s)o.computed&&Ia(o);for(const o of s)o.computed||Ia(o)}function Ia(t,n){(t!==At||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Qd=Hr("__proto__,__v_isRef,__isVue"),Qc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(zr)),ef=Wr(),tf=Wr(!1,!0),nf=Wr(!0),Na=sf();function sf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...s){const o=_e(this);for(let r=0,a=this.length;r<a;r++)mt(o,"get",r+"");const l=o[n](...s);return l===-1||l===!1?o[n](...s.map(_e)):l}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...s){cs();const o=_e(this)[n].apply(this,s);return ps(),o}}),t}function Wr(t=!1,n=!1){return function(o,l,r){if(l==="__v_isReactive")return!t;if(l==="__v_isReadonly")return t;if(l==="__v_isShallow")return n;if(l==="__v_raw"&&r===(t?n?wf:op:n?sp:np).get(o))return o;const a=se(o);if(!t&&a&&ge(Na,l))return Reflect.get(Na,l,r);const i=Reflect.get(o,l,r);return(zr(l)?Qc.has(l):Qd(l))||(t||mt(o,"get",l),n)?i:xe(i)?a&&qr(l)?i:i.value:ze(i)?t?Kn(i):Te(i):i}}const of=ep(),lf=ep(!0);function ep(t=!1){return function(s,o,l,r){let a=s[o];if(Ys(a)&&xe(a)&&!xe(l))return!1;if(!t&&!Ys(l)&&(Gl(l)||(l=_e(l),a=_e(a)),!se(s)&&xe(a)&&!xe(l)))return a.value=l,!0;const i=se(s)&&qr(o)?Number(o)<s.length:ge(s,o),c=Reflect.set(s,o,l,r);return s===_e(r)&&(i?Ws(l,a)&&Wt(s,"set",o,l):Wt(s,"add",o,l)),c}}function rf(t,n){const s=ge(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&Wt(t,"delete",n,void 0),o}function af(t,n){const s=Reflect.has(t,n);return(!zr(n)||!Qc.has(n))&&mt(t,"has",n),s}function cf(t){return mt(t,"iterate",se(t)?"length":En),Reflect.ownKeys(t)}const tp={get:ef,set:of,deleteProperty:rf,has:af,ownKeys:cf},pf={get:nf,set(t,n){return!0},deleteProperty(t,n){return!0}},uf=tt({},tp,{get:tf,set:lf}),Yr=t=>t,tl=t=>Reflect.getPrototypeOf(t);function yo(t,n,s=!1,o=!1){t=t.__v_raw;const l=_e(t),r=_e(n);s||(n!==r&&mt(l,"get",n),mt(l,"get",r));const{has:a}=tl(l),i=o?Yr:s?Jr:Ks;if(a.call(l,n))return i(t.get(n));if(a.call(l,r))return i(t.get(r));t!==l&&t.get(n)}function go(t,n=!1){const s=this.__v_raw,o=_e(s),l=_e(t);return n||(t!==l&&mt(o,"has",t),mt(o,"has",l)),t===l?s.has(t):s.has(t)||s.has(l)}function vo(t,n=!1){return t=t.__v_raw,!n&&mt(_e(t),"iterate",En),Reflect.get(t,"size",t)}function za(t){t=_e(t);const n=_e(this);return tl(n).has.call(n,t)||(n.add(t),Wt(n,"add",t,t)),this}function qa(t,n){n=_e(n);const s=_e(this),{has:o,get:l}=tl(s);let r=o.call(s,t);r||(t=_e(t),r=o.call(s,t));const a=l.call(s,t);return s.set(t,n),r?Ws(n,a)&&Wt(s,"set",t,n):Wt(s,"add",t,n),this}function Ua(t){const n=_e(this),{has:s,get:o}=tl(n);let l=s.call(n,t);l||(t=_e(t),l=s.call(n,t)),o&&o.call(n,t);const r=n.delete(t);return l&&Wt(n,"delete",t,void 0),r}function Va(){const t=_e(this),n=t.size!==0,s=t.clear();return n&&Wt(t,"clear",void 0,void 0),s}function bo(t,n){return function(o,l){const r=this,a=r.__v_raw,i=_e(a),c=n?Yr:t?Jr:Ks;return!t&&mt(i,"iterate",En),a.forEach((u,d)=>o.call(l,c(u),c(d),r))}}function wo(t,n,s){return function(...o){const l=this.__v_raw,r=_e(l),a=Zn(r),i=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,u=l[t](...o),d=s?Yr:n?Jr:Ks;return!n&&mt(r,"iterate",c?Jl:En),{next(){const{value:m,done:f}=u.next();return f?{value:m,done:f}:{value:i?[d(m[0]),d(m[1])]:d(m),done:f}},[Symbol.iterator](){return this}}}}function Jt(t){return function(...n){return t==="delete"?!1:this}}function df(){const t={get(r){return yo(this,r)},get size(){return vo(this)},has:go,add:za,set:qa,delete:Ua,clear:Va,forEach:bo(!1,!1)},n={get(r){return yo(this,r,!1,!0)},get size(){return vo(this)},has:go,add:za,set:qa,delete:Ua,clear:Va,forEach:bo(!1,!0)},s={get(r){return yo(this,r,!0)},get size(){return vo(this,!0)},has(r){return go.call(this,r,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:bo(!0,!1)},o={get(r){return yo(this,r,!0,!0)},get size(){return vo(this,!0)},has(r){return go.call(this,r,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:bo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=wo(r,!1,!1),s[r]=wo(r,!0,!1),n[r]=wo(r,!1,!0),o[r]=wo(r,!0,!0)}),[t,s,n,o]}const[ff,mf,hf,yf]=df();function Kr(t,n){const s=n?t?yf:hf:t?mf:ff;return(o,l,r)=>l==="__v_isReactive"?!t:l==="__v_isReadonly"?t:l==="__v_raw"?o:Reflect.get(ge(s,l)&&l in o?s:o,l,r)}const gf={get:Kr(!1,!1)},vf={get:Kr(!1,!0)},bf={get:Kr(!0,!1)},np=new WeakMap,sp=new WeakMap,op=new WeakMap,wf=new WeakMap;function _f(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kf(t){return t.__v_skip||!Object.isExtensible(t)?0:_f(qd(t))}function Te(t){return Ys(t)?t:Xr(t,!1,tp,gf,np)}function xf(t){return Xr(t,!1,uf,vf,sp)}function Kn(t){return Xr(t,!0,pf,bf,op)}function Xr(t,n,s,o,l){if(!ze(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const r=l.get(t);if(r)return r;const a=kf(t);if(a===0)return t;const i=new Proxy(t,a===2?o:s);return l.set(t,i),i}function Qn(t){return Ys(t)?Qn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ys(t){return!!(t&&t.__v_isReadonly)}function Gl(t){return!!(t&&t.__v_isShallow)}function lp(t){return Qn(t)||Ys(t)}function _e(t){const n=t&&t.__v_raw;return n?_e(n):t}function nl(t){return To(t,"__v_skip",!0),t}const Ks=t=>ze(t)?Te(t):t,Jr=t=>ze(t)?Kn(t):t;function Zr(t){sn&&At&&(t=_e(t),Gc(t.dep||(t.dep=Ur())))}function Gr(t,n){t=_e(t),t.dep&&Zl(t.dep)}function xe(t){return!!(t&&t.__v_isRef===!0)}function U(t){return rp(t,!1)}function It(t){return rp(t,!0)}function rp(t,n){return xe(t)?t:new Af(t,n)}class Af{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:_e(n),this._value=s?n:Ks(n)}get value(){return Zr(this),this._value}set value(n){n=this.__v_isShallow?n:_e(n),Ws(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:Ks(n),Gr(this))}}function b(t){return xe(t)?t.value:t}const Bf={get:(t,n,s)=>b(Reflect.get(t,n,s)),set:(t,n,s,o)=>{const l=t[n];return xe(l)&&!xe(s)?(l.value=s,!0):Reflect.set(t,n,s,o)}};function ap(t){return Qn(t)?t:new Proxy(t,Bf)}class Cf{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>Zr(this),()=>Gr(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function Ef(t){return new Cf(t)}function Df(t){const n=se(t)?new Array(t.length):{};for(const s in t)n[s]=Sf(t,s);return n}class Ff{constructor(n,s,o){this._object=n,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function Sf(t,n,s){const o=t[n];return xe(o)?o:new Ff(t,n,s)}class jf{constructor(n,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Vr(n,()=>{this._dirty||(this._dirty=!0,Gr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const n=_e(this);return Zr(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function $f(t,n,s=!1){let o,l;const r=ce(t);return r?(o=t,l=Et):(o=t.get,l=t.set),new jf(o,l,r||!l,s)}function on(t,n,s,o){let l;try{l=o?t(...o):t()}catch(r){sl(r,n,s)}return l}function Dt(t,n,s,o){if(ce(t)){const r=on(t,n,s,o);return r&&Vc(r)&&r.catch(a=>{sl(a,n,s)}),r}const l=[];for(let r=0;r<t.length;r++)l.push(Dt(t[r],n,s,o));return l}function sl(t,n,s,o=!0){const l=n?n.vnode:null;if(n){let r=n.parent;const a=n.proxy,i=s;for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,a,i)===!1)return}r=r.parent}const c=n.appContext.config.errorHandler;if(c){on(c,null,10,[t,a,i]);return}}Of(t,s,l,o)}function Of(t,n,s,o=!0){console.error(t)}let Po=!1,Ql=!1;const ut=[];let Ut=0;const js=[];let Ds=null,Un=0;const $s=[];let Qt=null,Vn=0;const ip=Promise.resolve();let Qr=null,er=null;function Ve(t){const n=Qr||ip;return t?n.then(this?t.bind(this):t):n}function Mf(t){let n=Ut+1,s=ut.length;for(;n<s;){const o=n+s>>>1;Xs(ut[o])<t?n=o+1:s=o}return n}function cp(t){(!ut.length||!ut.includes(t,Po&&t.allowRecurse?Ut+1:Ut))&&t!==er&&(t.id==null?ut.push(t):ut.splice(Mf(t.id),0,t),pp())}function pp(){!Po&&!Ql&&(Ql=!0,Qr=ip.then(fp))}function Tf(t){const n=ut.indexOf(t);n>Ut&&ut.splice(n,1)}function up(t,n,s,o){se(t)?s.push(...t):(!n||!n.includes(t,t.allowRecurse?o+1:o))&&s.push(t),pp()}function Pf(t){up(t,Ds,js,Un)}function Rf(t){up(t,Qt,$s,Vn)}function ol(t,n=null){if(js.length){for(er=n,Ds=[...new Set(js)],js.length=0,Un=0;Un<Ds.length;Un++)Ds[Un]();Ds=null,Un=0,er=null,ol(t,n)}}function dp(t){if(ol(),$s.length){const n=[...new Set($s)];if($s.length=0,Qt){Qt.push(...n);return}for(Qt=n,Qt.sort((s,o)=>Xs(s)-Xs(o)),Vn=0;Vn<Qt.length;Vn++)Qt[Vn]();Qt=null,Vn=0}}const Xs=t=>t.id==null?1/0:t.id;function fp(t){Ql=!1,Po=!0,ol(t),ut.sort((s,o)=>Xs(s)-Xs(o));const n=Et;try{for(Ut=0;Ut<ut.length;Ut++){const s=ut[Ut];s&&s.active!==!1&&on(s,null,14)}}finally{Ut=0,ut.length=0,dp(),Po=!1,Qr=null,(ut.length||js.length||$s.length)&&fp(t)}}function Lf(t,n,...s){if(t.isUnmounted)return;const o=t.vnode.props||Se;let l=s;const r=n.startsWith("update:"),a=r&&n.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:m,trim:f}=o[d]||Se;f&&(l=s.map(h=>h.trim())),m&&(l=s.map(Yl))}let i,c=o[i=wl(n)]||o[i=wl(Ht(n))];!c&&r&&(c=o[i=wl(On(n))]),c&&Dt(c,t,6,l);const u=o[i+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,Dt(u,t,6,l)}}function mp(t,n,s=!1){const o=n.emitsCache,l=o.get(t);if(l!==void 0)return l;const r=t.emits;let a={},i=!1;if(!ce(t)){const c=u=>{const d=mp(u,n,!0);d&&(i=!0,tt(a,d))};!s&&n.mixins.length&&n.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!i?(o.set(t,null),null):(se(r)?r.forEach(c=>a[c]=null):tt(a,r),o.set(t,a),a)}function ll(t,n){return!t||!Zo(n)?!1:(n=n.slice(2).replace(/Once$/,""),ge(t,n[0].toLowerCase()+n.slice(1))||ge(t,On(n))||ge(t,n))}let Ye=null,rl=null;function Ro(t){const n=Ye;return Ye=t,rl=t&&t.type.__scopeId||null,n}function Mn(t){rl=t}function Tn(){rl=null}function V(t,n=Ye,s){if(!n||t._n)return t;const o=(...l)=>{o._d&&ni(-1);const r=Ro(n),a=t(...l);return Ro(r),o._d&&ni(1),a};return o._n=!0,o._c=!0,o._d=!0,o}function _l(t){const{type:n,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:i,attrs:c,emit:u,render:d,renderCache:m,data:f,setupState:h,ctx:y,inheritAttrs:k}=t;let _,C;const A=Ro(t);try{if(s.shapeFlag&4){const E=l||o;_=Tt(d.call(E,E,m,r,h,f,y)),C=c}else{const E=n;_=Tt(E.length>1?E(r,{attrs:c,slots:i,emit:u}):E(r,null)),C=n.props?c:Hf(c)}}catch(E){Ms.length=0,sl(E,t,1),_=J(un)}let B=_;if(C&&k!==!1){const E=Object.keys(C),{shapeFlag:L}=B;E.length&&L&7&&(a&&E.some(Ir)&&(C=If(C,a)),B=$n(B,C))}return s.dirs&&(B=$n(B),B.dirs=B.dirs?B.dirs.concat(s.dirs):s.dirs),s.transition&&(B.transition=s.transition),_=B,Ro(A),_}const Hf=t=>{let n;for(const s in t)(s==="class"||s==="style"||Zo(s))&&((n||(n={}))[s]=t[s]);return n},If=(t,n)=>{const s={};for(const o in t)(!Ir(o)||!(o.slice(9)in n))&&(s[o]=t[o]);return s};function Nf(t,n,s){const{props:o,children:l,component:r}=t,{props:a,children:i,patchFlag:c}=n,u=r.emitsOptions;if(n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?Wa(o,a,u):!!a;if(c&8){const d=n.dynamicProps;for(let m=0;m<d.length;m++){const f=d[m];if(a[f]!==o[f]&&!ll(u,f))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?Wa(o,a,u):!0:!!a;return!1}function Wa(t,n,s){const o=Object.keys(n);if(o.length!==Object.keys(t).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(n[r]!==t[r]&&!ll(s,r))return!0}return!1}function zf({vnode:t,parent:n},s){for(;n&&n.subTree===t;)(t=n.vnode).el=s,n=n.parent}const hp=t=>t.__isSuspense;function qf(t,n){n&&n.pendingBranch?se(t)?n.effects.push(...t):n.effects.push(t):Rf(t)}function pt(t,n){if(qe){let s=qe.provides;const o=qe.parent&&qe.parent.provides;o===s&&(s=qe.provides=Object.create(o)),s[t]=n}}function M(t,n,s=!1){const o=qe||Ye;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&t in l)return l[t];if(arguments.length>1)return s&&ce(n)?n.call(o.proxy):n}}function ao(t,n){return ea(t,null,n)}const Ya={};function ue(t,n,s){return ea(t,n,s)}function ea(t,n,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=Se){const i=qe;let c,u=!1,d=!1;if(xe(t)?(c=()=>t.value,u=Gl(t)):Qn(t)?(c=()=>t,o=!0):se(t)?(d=!0,u=t.some(C=>Qn(C)||Gl(C)),c=()=>t.map(C=>{if(xe(C))return C.value;if(Qn(C))return xn(C);if(ce(C))return on(C,i,2)})):ce(t)?n?c=()=>on(t,i,2):c=()=>{if(!(i&&i.isUnmounted))return m&&m(),Dt(t,i,3,[f])}:c=Et,n&&o){const C=c;c=()=>xn(C())}let m,f=C=>{m=_.onStop=()=>{on(C,i,4)}};if(Zs)return f=Et,n?s&&Dt(n,i,3,[c(),d?[]:void 0,f]):c(),Et;let h=d?[]:Ya;const y=()=>{if(!!_.active)if(n){const C=_.run();(o||u||(d?C.some((A,B)=>Ws(A,h[B])):Ws(C,h)))&&(m&&m(),Dt(n,i,3,[C,h===Ya?void 0:h,f]),h=C)}else _.run()};y.allowRecurse=!!n;let k;l==="sync"?k=y:l==="post"?k=()=>Ue(y,i&&i.suspense):k=()=>Pf(y);const _=new Vr(c,k);return n?s?y():h=_.run():l==="post"?Ue(_.run.bind(_),i&&i.suspense):_.run(),()=>{_.stop(),i&&i.scope&&Nr(i.scope.effects,_)}}function Uf(t,n,s){const o=this.proxy,l=Re(t)?t.includes(".")?yp(o,t):()=>o[t]:t.bind(o,o);let r;ce(n)?r=n:(r=n.handler,s=n);const a=qe;ls(this);const i=ea(l,r.bind(o),s);return a?ls(a):Dn(),i}function yp(t,n){const s=n.split(".");return()=>{let o=t;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function xn(t,n){if(!ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),xe(t))xn(t.value,n);else if(se(t))for(let s=0;s<t.length;s++)xn(t[s],n);else if(Uc(t)||Zn(t))t.forEach(s=>{xn(s,n)});else if(Yc(t))for(const s in t)xn(t[s],n);return t}function gp(t,n){t.shapeFlag&6&&t.component?gp(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function Be(t){return ce(t)?{setup:t,name:t.name}:t}const es=t=>!!t.type.__asyncLoader,vp=t=>t.type.__isKeepAlive,Vf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:n}){const s=Pn(),o=s.ctx;if(!o.renderer)return()=>{const A=n.default&&n.default();return A&&A.length===1?A[0]:A};const l=new Map,r=new Set;let a=null;const i=s.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:m}}}=o,f=m("div");o.activate=(A,B,E,L,O)=>{const W=A.component;u(A,B,E,0,i),c(W.vnode,A,B,E,W,i,L,A.slotScopeIds,O),Ue(()=>{W.isDeactivated=!1,W.a&&Gn(W.a);const ae=A.props&&A.props.onVnodeMounted;ae&&yt(ae,W.parent,A)},i)},o.deactivate=A=>{const B=A.component;u(A,f,null,1,i),Ue(()=>{B.da&&Gn(B.da);const E=A.props&&A.props.onVnodeUnmounted;E&&yt(E,B.parent,A),B.isDeactivated=!0},i)};function h(A){kl(A),d(A,s,i,!0)}function y(A){l.forEach((B,E)=>{const L=ir(B.type);L&&(!A||!A(L))&&k(E)})}function k(A){const B=l.get(A);!a||B.type!==a.type?h(B):a&&kl(a),l.delete(A),r.delete(A)}ue(()=>[t.include,t.exclude],([A,B])=>{A&&y(E=>Fs(A,E)),B&&y(E=>!Fs(B,E))},{flush:"post",deep:!0});let _=null;const C=()=>{_!=null&&l.set(_,xl(s.subTree))};return us(C),kp(C),il(()=>{l.forEach(A=>{const{subTree:B,suspense:E}=s,L=xl(B);if(A.type===L.type){kl(L);const O=L.component.da;O&&Ue(O,E);return}h(A)})}),()=>{if(_=null,!n.default)return null;const A=n.default(),B=A[0];if(A.length>1)return a=null,A;if(!os(B)||!(B.shapeFlag&4)&&!(B.shapeFlag&128))return a=null,B;let E=xl(B);const L=E.type,O=ir(es(E)?E.type.__asyncResolved||{}:L),{include:W,exclude:ae,max:de}=t;if(W&&(!O||!Fs(W,O))||ae&&O&&Fs(ae,O))return a=E,B;const he=E.key==null?L:E.key,ve=l.get(he);return E.el&&(E=$n(E),B.shapeFlag&128&&(B.ssContent=E)),_=he,ve?(E.el=ve.el,E.component=ve.component,E.transition&&gp(E,E.transition),E.shapeFlag|=512,r.delete(he),r.add(he)):(r.add(he),de&&r.size>parseInt(de,10)&&k(r.values().next().value)),E.shapeFlag|=256,a=E,hp(B.type)?B:E}}},bp=Vf;function Fs(t,n){return se(t)?t.some(s=>Fs(s,n)):Re(t)?t.split(",").includes(n):t.test?t.test(n):!1}function Wf(t,n){wp(t,"a",n)}function Yf(t,n){wp(t,"da",n)}function wp(t,n,s=qe){const o=t.__wdc||(t.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return t()});if(al(n,o,s),s){let l=s.parent;for(;l&&l.parent;)vp(l.parent.vnode)&&Kf(o,n,s,l),l=l.parent}}function Kf(t,n,s,o){const l=al(n,t,o,!0);cl(()=>{Nr(o[n],l)},s)}function kl(t){let n=t.shapeFlag;n&256&&(n-=256),n&512&&(n-=512),t.shapeFlag=n}function xl(t){return t.shapeFlag&128?t.ssContent:t}function al(t,n,s=qe,o=!1){if(s){const l=s[t]||(s[t]=[]),r=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;cs(),ls(s);const i=Dt(n,s,t,a);return Dn(),ps(),i});return o?l.unshift(r):l.push(r),r}}const Yt=t=>(n,s=qe)=>(!Zs||t==="sp")&&al(t,n,s),_p=Yt("bm"),us=Yt("m"),Xf=Yt("bu"),kp=Yt("u"),il=Yt("bum"),cl=Yt("um"),Jf=Yt("sp"),Zf=Yt("rtg"),Gf=Yt("rtc");function Qf(t,n=qe){al("ec",t,n)}function Bt(t,n){const s=Ye;if(s===null)return t;const o=ul(s)||s.proxy,l=t.dirs||(t.dirs=[]);for(let r=0;r<n.length;r++){let[a,i,c,u=Se]=n[r];ce(a)&&(a={mounted:a,updated:a}),a.deep&&xn(i),l.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:u})}return t}function mn(t,n,s,o){const l=t.dirs,r=n&&n.dirs;for(let a=0;a<l.length;a++){const i=l[a];r&&(i.oldValue=r[a].value);let c=i.dir[o];c&&(cs(),Dt(c,s,8,[t.el,i,t,n]),ps())}}const xp="components",em="directives";function tr(t,n){return Ap(xp,t,!0,n)||t}const tm=Symbol();function ta(t){return Ap(em,t)}function Ap(t,n,s=!0,o=!1){const l=Ye||qe;if(l){const r=l.type;if(t===xp){const i=ir(r,!1);if(i&&(i===n||i===Ht(n)||i===el(Ht(n))))return r}const a=Ka(l[t]||r[t],n)||Ka(l.appContext[t],n);return!a&&o?r:a}}function Ka(t,n){return t&&(t[n]||t[Ht(n)]||t[el(Ht(n))])}function io(t,n,s,o){let l;const r=s&&s[o];if(se(t)||Re(t)){l=new Array(t.length);for(let a=0,i=t.length;a<i;a++)l[a]=n(t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){l=new Array(t);for(let a=0;a<t;a++)l[a]=n(a+1,a,void 0,r&&r[a])}else if(ze(t))if(t[Symbol.iterator])l=Array.from(t,(a,i)=>n(a,i,void 0,r&&r[i]));else{const a=Object.keys(t);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];l[i]=n(t[u],u,i,r&&r[i])}}else l=[];return s&&(s[o]=l),l}function jt(t,n,s={},o,l){if(Ye.isCE||Ye.parent&&es(Ye.parent)&&Ye.parent.isCE)return J("slot",n==="default"?null:{name:n},o&&o());let r=t[n];r&&r._c&&(r._d=!1),w();const a=r&&Bp(r(s)),i=N(Ae,{key:s.key||`_${n}`},a||(o?o():[]),a&&t._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function Bp(t){return t.some(n=>os(n)?!(n.type===un||n.type===Ae&&!Bp(n.children)):!0)?t:null}const nr=t=>t?Pp(t)?ul(t)||t.proxy:nr(t.parent):null,Lo=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nr(t.parent),$root:t=>nr(t.root),$emit:t=>t.emit,$options:t=>Ep(t),$forceUpdate:t=>t.f||(t.f=()=>cp(t.update)),$nextTick:t=>t.n||(t.n=Ve.bind(t.proxy)),$watch:t=>Uf.bind(t)}),nm={get({_:t},n){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:i,appContext:c}=t;let u;if(n[0]!=="$"){const h=a[n];if(h!==void 0)switch(h){case 1:return o[n];case 2:return l[n];case 4:return s[n];case 3:return r[n]}else{if(o!==Se&&ge(o,n))return a[n]=1,o[n];if(l!==Se&&ge(l,n))return a[n]=2,l[n];if((u=t.propsOptions[0])&&ge(u,n))return a[n]=3,r[n];if(s!==Se&&ge(s,n))return a[n]=4,s[n];sr&&(a[n]=0)}}const d=Lo[n];let m,f;if(d)return n==="$attrs"&&mt(t,"get",n),d(t);if((m=i.__cssModules)&&(m=m[n]))return m;if(s!==Se&&ge(s,n))return a[n]=4,s[n];if(f=c.config.globalProperties,ge(f,n))return f[n]},set({_:t},n,s){const{data:o,setupState:l,ctx:r}=t;return l!==Se&&ge(l,n)?(l[n]=s,!0):o!==Se&&ge(o,n)?(o[n]=s,!0):ge(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(r[n]=s,!0)},has({_:{data:t,setupState:n,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let i;return!!s[a]||t!==Se&&ge(t,a)||n!==Se&&ge(n,a)||(i=r[0])&&ge(i,a)||ge(o,a)||ge(Lo,a)||ge(l.config.globalProperties,a)},defineProperty(t,n,s){return s.get!=null?t._.accessCache[n]=0:ge(s,"value")&&this.set(t,n,s.value,null),Reflect.defineProperty(t,n,s)}};let sr=!0;function sm(t){const n=Ep(t),s=t.proxy,o=t.ctx;sr=!1,n.beforeCreate&&Xa(n.beforeCreate,t,"bc");const{data:l,computed:r,methods:a,watch:i,provide:c,inject:u,created:d,beforeMount:m,mounted:f,beforeUpdate:h,updated:y,activated:k,deactivated:_,beforeDestroy:C,beforeUnmount:A,destroyed:B,unmounted:E,render:L,renderTracked:O,renderTriggered:W,errorCaptured:ae,serverPrefetch:de,expose:he,inheritAttrs:ve,components:Me,directives:Le,filters:We}=n;if(u&&om(u,o,null,t.appContext.config.unwrapInjectedRef),a)for(const oe in a){const Q=a[oe];ce(Q)&&(o[oe]=Q.bind(s))}if(l){const oe=l.call(s,s);ze(oe)&&(t.data=Te(oe))}if(sr=!0,r)for(const oe in r){const Q=r[oe],ye=ce(Q)?Q.bind(s,s):ce(Q.get)?Q.get.bind(s,s):Et,Ot=!ce(Q)&&ce(Q.set)?Q.set.bind(s):Et,Je=F({get:ye,set:Ot});Object.defineProperty(o,oe,{enumerable:!0,configurable:!0,get:()=>Je.value,set:ht=>Je.value=ht})}if(i)for(const oe in i)Cp(i[oe],o,s,oe);if(c){const oe=ce(c)?c.call(s):c;Reflect.ownKeys(oe).forEach(Q=>{pt(Q,oe[Q])})}d&&Xa(d,t,"c");function ne(oe,Q){se(Q)?Q.forEach(ye=>oe(ye.bind(s))):Q&&oe(Q.bind(s))}if(ne(_p,m),ne(us,f),ne(Xf,h),ne(kp,y),ne(Wf,k),ne(Yf,_),ne(Qf,ae),ne(Gf,O),ne(Zf,W),ne(il,A),ne(cl,E),ne(Jf,de),se(he))if(he.length){const oe=t.exposed||(t.exposed={});he.forEach(Q=>{Object.defineProperty(oe,Q,{get:()=>s[Q],set:ye=>s[Q]=ye})})}else t.exposed||(t.exposed={});L&&t.render===Et&&(t.render=L),ve!=null&&(t.inheritAttrs=ve),Me&&(t.components=Me),Le&&(t.directives=Le)}function om(t,n,s=Et,o=!1){se(t)&&(t=or(t));for(const l in t){const r=t[l];let a;ze(r)?"default"in r?a=M(r.from||l,r.default,!0):a=M(r.from||l):a=M(r),xe(a)&&o?Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):n[l]=a}}function Xa(t,n,s){Dt(se(t)?t.map(o=>o.bind(n.proxy)):t.bind(n.proxy),n,s)}function Cp(t,n,s,o){const l=o.includes(".")?yp(s,o):()=>s[o];if(Re(t)){const r=n[t];ce(r)&&ue(l,r)}else if(ce(t))ue(l,t.bind(s));else if(ze(t))if(se(t))t.forEach(r=>Cp(r,n,s,o));else{const r=ce(t.handler)?t.handler.bind(s):n[t.handler];ce(r)&&ue(l,r,t)}}function Ep(t){const n=t.type,{mixins:s,extends:o}=n,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,i=r.get(n);let c;return i?c=i:!l.length&&!s&&!o?c=n:(c={},l.length&&l.forEach(u=>Ho(c,u,a,!0)),Ho(c,n,a)),r.set(n,c),c}function Ho(t,n,s,o=!1){const{mixins:l,extends:r}=n;r&&Ho(t,r,s,!0),l&&l.forEach(a=>Ho(t,a,s,!0));for(const a in n)if(!(o&&a==="expose")){const i=lm[a]||s&&s[a];t[a]=i?i(t[a],n[a]):n[a]}return t}const lm={data:Ja,props:vn,emits:vn,methods:vn,computed:vn,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:vn,directives:vn,watch:am,provide:Ja,inject:rm};function Ja(t,n){return n?t?function(){return tt(ce(t)?t.call(this,this):t,ce(n)?n.call(this,this):n)}:n:t}function rm(t,n){return vn(or(t),or(n))}function or(t){if(se(t)){const n={};for(let s=0;s<t.length;s++)n[t[s]]=t[s];return n}return t}function Ze(t,n){return t?[...new Set([].concat(t,n))]:n}function vn(t,n){return t?tt(tt(Object.create(null),t),n):n}function am(t,n){if(!t)return n;if(!n)return t;const s=tt(Object.create(null),t);for(const o in n)s[o]=Ze(t[o],n[o]);return s}function im(t,n,s,o=!1){const l={},r={};To(r,pl,1),t.propsDefaults=Object.create(null),Dp(t,n,l,r);for(const a in t.propsOptions[0])a in l||(l[a]=void 0);s?t.props=o?l:xf(l):t.type.props?t.props=l:t.props=r,t.attrs=r}function cm(t,n,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=t,i=_e(l),[c]=t.propsOptions;let u=!1;if((o||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let f=d[m];if(ll(t.emitsOptions,f))continue;const h=n[f];if(c)if(ge(r,f))h!==r[f]&&(r[f]=h,u=!0);else{const y=Ht(f);l[y]=lr(c,i,y,h,t,!1)}else h!==r[f]&&(r[f]=h,u=!0)}}}else{Dp(t,n,l,r)&&(u=!0);let d;for(const m in i)(!n||!ge(n,m)&&((d=On(m))===m||!ge(n,d)))&&(c?s&&(s[m]!==void 0||s[d]!==void 0)&&(l[m]=lr(c,i,m,void 0,t,!0)):delete l[m]);if(r!==i)for(const m in r)(!n||!ge(n,m)&&!0)&&(delete r[m],u=!0)}u&&Wt(t,"set","$attrs")}function Dp(t,n,s,o){const[l,r]=t.propsOptions;let a=!1,i;if(n)for(let c in n){if(Eo(c))continue;const u=n[c];let d;l&&ge(l,d=Ht(c))?!r||!r.includes(d)?s[d]=u:(i||(i={}))[d]=u:ll(t.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(r){const c=_e(s),u=i||Se;for(let d=0;d<r.length;d++){const m=r[d];s[m]=lr(l,c,m,u[m],t,!ge(u,m))}}return a}function lr(t,n,s,o,l,r){const a=t[s];if(a!=null){const i=ge(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&ce(c)){const{propsDefaults:u}=l;s in u?o=u[s]:(ls(l),o=u[s]=c.call(null,n),Dn())}else o=c}a[0]&&(r&&!i?o=!1:a[1]&&(o===""||o===On(s))&&(o=!0))}return o}function Fp(t,n,s=!1){const o=n.propsCache,l=o.get(t);if(l)return l;const r=t.props,a={},i=[];let c=!1;if(!ce(t)){const d=m=>{c=!0;const[f,h]=Fp(m,n,!0);tt(a,f),h&&i.push(...h)};!s&&n.mixins.length&&n.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!c)return o.set(t,Jn),Jn;if(se(r))for(let d=0;d<r.length;d++){const m=Ht(r[d]);Za(m)&&(a[m]=Se)}else if(r)for(const d in r){const m=Ht(d);if(Za(m)){const f=r[d],h=a[m]=se(f)||ce(f)?{type:f}:f;if(h){const y=ei(Boolean,h.type),k=ei(String,h.type);h[0]=y>-1,h[1]=k<0||y<k,(y>-1||ge(h,"default"))&&i.push(m)}}}const u=[a,i];return o.set(t,u),u}function Za(t){return t[0]!=="$"}function Ga(t){const n=t&&t.toString().match(/^\s*function (\w+)/);return n?n[1]:t===null?"null":""}function Qa(t,n){return Ga(t)===Ga(n)}function ei(t,n){return se(n)?n.findIndex(s=>Qa(s,t)):ce(n)&&Qa(n,t)?0:-1}const Sp=t=>t[0]==="_"||t==="$stable",na=t=>se(t)?t.map(Tt):[Tt(t)],pm=(t,n,s)=>{if(n._n)return n;const o=V((...l)=>na(n(...l)),s);return o._c=!1,o},jp=(t,n,s)=>{const o=t._ctx;for(const l in t){if(Sp(l))continue;const r=t[l];if(ce(r))n[l]=pm(l,r,o);else if(r!=null){const a=na(r);n[l]=()=>a}}},$p=(t,n)=>{const s=na(n);t.slots.default=()=>s},um=(t,n)=>{if(t.vnode.shapeFlag&32){const s=n._;s?(t.slots=_e(n),To(n,"_",s)):jp(n,t.slots={})}else t.slots={},n&&$p(t,n);To(t.slots,pl,1)},dm=(t,n,s)=>{const{vnode:o,slots:l}=t;let r=!0,a=Se;if(o.shapeFlag&32){const i=n._;i?s&&i===1?r=!1:(tt(l,n),!s&&i===1&&delete l._):(r=!n.$stable,jp(n,l)),a=n}else n&&($p(t,n),a={default:1});if(r)for(const i in l)!Sp(i)&&!(i in a)&&delete l[i]};function Op(){return{app:null,config:{isNativeTag:Id,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fm=0;function mm(t,n){return function(o,l=null){ce(o)||(o=Object.assign({},o)),l!=null&&!ze(l)&&(l=null);const r=Op(),a=new Set;let i=!1;const c=r.app={_uid:fm++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:$m,get config(){return r.config},set config(u){},use(u,...d){return a.has(u)||(u&&ce(u.install)?(a.add(u),u.install(c,...d)):ce(u)&&(a.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,m){if(!i){const f=J(o,l);return f.appContext=r,d&&n?n(f,u):t(f,u,m),i=!0,c._container=u,u.__vue_app__=c,ul(f.component)||f.component.proxy}},unmount(){i&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c}};return c}}function rr(t,n,s,o,l=!1){if(se(t)){t.forEach((f,h)=>rr(f,n&&(se(n)?n[h]:n),s,o,l));return}if(es(o)&&!l)return;const r=o.shapeFlag&4?ul(o.component)||o.component.proxy:o.el,a=l?null:r,{i,r:c}=t,u=n&&n.r,d=i.refs===Se?i.refs={}:i.refs,m=i.setupState;if(u!=null&&u!==c&&(Re(u)?(d[u]=null,ge(m,u)&&(m[u]=null)):xe(u)&&(u.value=null)),ce(c))on(c,i,12,[a,d]);else{const f=Re(c),h=xe(c);if(f||h){const y=()=>{if(t.f){const k=f?d[c]:c.value;l?se(k)&&Nr(k,r):se(k)?k.includes(r)||k.push(r):f?(d[c]=[r],ge(m,c)&&(m[c]=d[c])):(c.value=[r],t.k&&(d[t.k]=c.value))}else f?(d[c]=a,ge(m,c)&&(m[c]=a)):h&&(c.value=a,t.k&&(d[t.k]=a))};a?(y.id=-1,Ue(y,s)):y()}}}const Ue=qf;function hm(t){return ym(t)}function ym(t,n){const s=Wd();s.__VUE__=!0;const{insert:o,remove:l,patchProp:r,createElement:a,createText:i,createComment:c,setText:u,setElementText:d,parentNode:m,nextSibling:f,setScopeId:h=Et,cloneNode:y,insertStaticContent:k}=t,_=(g,v,x,j=null,S=null,R=null,q=!1,P=null,H=!!v.dynamicChildren)=>{if(g===v)return;g&&!bs(g,v)&&(j=X(g),nt(g,S,R,!0),g=null),v.patchFlag===-2&&(H=!1,v.dynamicChildren=null);const{type:$,ref:Z,shapeFlag:K}=v;switch($){case oa:C(g,v,x,j);break;case un:A(g,v,x,j);break;case Al:g==null&&B(v,x,j,q);break;case Ae:Le(g,v,x,j,S,R,q,P,H);break;default:K&1?O(g,v,x,j,S,R,q,P,H):K&6?We(g,v,x,j,S,R,q,P,H):(K&64||K&128)&&$.process(g,v,x,j,S,R,q,P,H,je)}Z!=null&&S&&rr(Z,g&&g.ref,R,v||g,!v)},C=(g,v,x,j)=>{if(g==null)o(v.el=i(v.children),x,j);else{const S=v.el=g.el;v.children!==g.children&&u(S,v.children)}},A=(g,v,x,j)=>{g==null?o(v.el=c(v.children||""),x,j):v.el=g.el},B=(g,v,x,j)=>{[g.el,g.anchor]=k(g.children,v,x,j,g.el,g.anchor)},E=({el:g,anchor:v},x,j)=>{let S;for(;g&&g!==v;)S=f(g),o(g,x,j),g=S;o(v,x,j)},L=({el:g,anchor:v})=>{let x;for(;g&&g!==v;)x=f(g),l(g),g=x;l(v)},O=(g,v,x,j,S,R,q,P,H)=>{q=q||v.type==="svg",g==null?W(v,x,j,S,R,q,P,H):he(g,v,S,R,q,P,H)},W=(g,v,x,j,S,R,q,P)=>{let H,$;const{type:Z,props:K,shapeFlag:G,transition:le,patchFlag:be,dirs:Ee}=g;if(g.el&&y!==void 0&&be===-1)H=g.el=y(g.el);else{if(H=g.el=a(g.type,R,K&&K.is,K),G&8?d(H,g.children):G&16&&de(g.children,H,null,j,S,R&&Z!=="foreignObject",q,P),Ee&&mn(g,null,j,"created"),K){for(const $e in K)$e!=="value"&&!Eo($e)&&r(H,$e,null,K[$e],R,g.children,j,S,T);"value"in K&&r(H,"value",null,K.value),($=K.onVnodeBeforeMount)&&yt($,j,g)}ae(H,g,g.scopeId,q,j)}Ee&&mn(g,null,j,"beforeMount");const De=(!S||S&&!S.pendingBranch)&&le&&!le.persisted;De&&le.beforeEnter(H),o(H,v,x),(($=K&&K.onVnodeMounted)||De||Ee)&&Ue(()=>{$&&yt($,j,g),De&&le.enter(H),Ee&&mn(g,null,j,"mounted")},S)},ae=(g,v,x,j,S)=>{if(x&&h(g,x),j)for(let R=0;R<j.length;R++)h(g,j[R]);if(S){let R=S.subTree;if(v===R){const q=S.vnode;ae(g,q,q.scopeId,q.slotScopeIds,S.parent)}}},de=(g,v,x,j,S,R,q,P,H=0)=>{for(let $=H;$<g.length;$++){const Z=g[$]=P?en(g[$]):Tt(g[$]);_(null,Z,v,x,j,S,R,q,P)}},he=(g,v,x,j,S,R,q)=>{const P=v.el=g.el;let{patchFlag:H,dynamicChildren:$,dirs:Z}=v;H|=g.patchFlag&16;const K=g.props||Se,G=v.props||Se;let le;x&&hn(x,!1),(le=G.onVnodeBeforeUpdate)&&yt(le,x,v,g),Z&&mn(v,g,x,"beforeUpdate"),x&&hn(x,!0);const be=S&&v.type!=="foreignObject";if($?ve(g.dynamicChildren,$,P,x,j,be,R):q||ye(g,v,P,null,x,j,be,R,!1),H>0){if(H&16)Me(P,v,K,G,x,j,S);else if(H&2&&K.class!==G.class&&r(P,"class",null,G.class,S),H&4&&r(P,"style",K.style,G.style,S),H&8){const Ee=v.dynamicProps;for(let De=0;De<Ee.length;De++){const $e=Ee[De],_t=K[$e],In=G[$e];(In!==_t||$e==="value")&&r(P,$e,_t,In,S,g.children,x,j,T)}}H&1&&g.children!==v.children&&d(P,v.children)}else!q&&$==null&&Me(P,v,K,G,x,j,S);((le=G.onVnodeUpdated)||Z)&&Ue(()=>{le&&yt(le,x,v,g),Z&&mn(v,g,x,"updated")},j)},ve=(g,v,x,j,S,R,q)=>{for(let P=0;P<v.length;P++){const H=g[P],$=v[P],Z=H.el&&(H.type===Ae||!bs(H,$)||H.shapeFlag&70)?m(H.el):x;_(H,$,Z,null,j,S,R,q,!0)}},Me=(g,v,x,j,S,R,q)=>{if(x!==j){for(const P in j){if(Eo(P))continue;const H=j[P],$=x[P];H!==$&&P!=="value"&&r(g,P,$,H,q,v.children,S,R,T)}if(x!==Se)for(const P in x)!Eo(P)&&!(P in j)&&r(g,P,x[P],null,q,v.children,S,R,T);"value"in j&&r(g,"value",x.value,j.value)}},Le=(g,v,x,j,S,R,q,P,H)=>{const $=v.el=g?g.el:i(""),Z=v.anchor=g?g.anchor:i("");let{patchFlag:K,dynamicChildren:G,slotScopeIds:le}=v;le&&(P=P?P.concat(le):le),g==null?(o($,x,j),o(Z,x,j),de(v.children,x,Z,S,R,q,P,H)):K>0&&K&64&&G&&g.dynamicChildren?(ve(g.dynamicChildren,G,x,S,R,q,P),(v.key!=null||S&&v===S.subTree)&&sa(g,v,!0)):ye(g,v,x,Z,S,R,q,P,H)},We=(g,v,x,j,S,R,q,P,H)=>{v.slotScopeIds=P,g==null?v.shapeFlag&512?S.ctx.activate(v,x,j,q,H):Ce(v,x,j,S,R,q,H):ne(g,v,H)},Ce=(g,v,x,j,S,R,q)=>{const P=g.component=Cm(g,j,S);if(vp(g)&&(P.ctx.renderer=je),Em(P),P.asyncDep){if(S&&S.registerDep(P,oe),!g.el){const H=P.subTree=J(un);A(null,H,v,x)}return}oe(P,g,v,x,S,R,q)},ne=(g,v,x)=>{const j=v.component=g.component;if(Nf(g,v,x))if(j.asyncDep&&!j.asyncResolved){Q(j,v,x);return}else j.next=v,Tf(j.update),j.update();else v.el=g.el,j.vnode=v},oe=(g,v,x,j,S,R,q)=>{const P=()=>{if(g.isMounted){let{next:Z,bu:K,u:G,parent:le,vnode:be}=g,Ee=Z,De;hn(g,!1),Z?(Z.el=be.el,Q(g,Z,q)):Z=be,K&&Gn(K),(De=Z.props&&Z.props.onVnodeBeforeUpdate)&&yt(De,le,Z,be),hn(g,!0);const $e=_l(g),_t=g.subTree;g.subTree=$e,_(_t,$e,m(_t.el),X(_t),g,S,R),Z.el=$e.el,Ee===null&&zf(g,$e.el),G&&Ue(G,S),(De=Z.props&&Z.props.onVnodeUpdated)&&Ue(()=>yt(De,le,Z,be),S)}else{let Z;const{el:K,props:G}=v,{bm:le,m:be,parent:Ee}=g,De=es(v);if(hn(g,!1),le&&Gn(le),!De&&(Z=G&&G.onVnodeBeforeMount)&&yt(Z,Ee,v),hn(g,!0),K&&pe){const $e=()=>{g.subTree=_l(g),pe(K,g.subTree,g,S,null)};De?v.type.__asyncLoader().then(()=>!g.isUnmounted&&$e()):$e()}else{const $e=g.subTree=_l(g);_(null,$e,x,j,g,S,R),v.el=$e.el}if(be&&Ue(be,S),!De&&(Z=G&&G.onVnodeMounted)){const $e=v;Ue(()=>yt(Z,Ee,$e),S)}(v.shapeFlag&256||Ee&&es(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&g.a&&Ue(g.a,S),g.isMounted=!0,v=x=j=null}},H=g.effect=new Vr(P,()=>cp($),g.scope),$=g.update=()=>H.run();$.id=g.uid,hn(g,!0),$()},Q=(g,v,x)=>{v.component=g;const j=g.vnode.props;g.vnode=v,g.next=null,cm(g,v.props,j,x),dm(g,v.children,x),cs(),ol(void 0,g.update),ps()},ye=(g,v,x,j,S,R,q,P,H=!1)=>{const $=g&&g.children,Z=g?g.shapeFlag:0,K=v.children,{patchFlag:G,shapeFlag:le}=v;if(G>0){if(G&128){Je($,K,x,j,S,R,q,P,H);return}else if(G&256){Ot($,K,x,j,S,R,q,P,H);return}}le&8?(Z&16&&T($,S,R),K!==$&&d(x,K)):Z&16?le&16?Je($,K,x,j,S,R,q,P,H):T($,S,R,!0):(Z&8&&d(x,""),le&16&&de(K,x,j,S,R,q,P,H))},Ot=(g,v,x,j,S,R,q,P,H)=>{g=g||Jn,v=v||Jn;const $=g.length,Z=v.length,K=Math.min($,Z);let G;for(G=0;G<K;G++){const le=v[G]=H?en(v[G]):Tt(v[G]);_(g[G],le,x,null,S,R,q,P,H)}$>Z?T(g,S,R,!0,!1,K):de(v,x,j,S,R,q,P,H,K)},Je=(g,v,x,j,S,R,q,P,H)=>{let $=0;const Z=v.length;let K=g.length-1,G=Z-1;for(;$<=K&&$<=G;){const le=g[$],be=v[$]=H?en(v[$]):Tt(v[$]);if(bs(le,be))_(le,be,x,null,S,R,q,P,H);else break;$++}for(;$<=K&&$<=G;){const le=g[K],be=v[G]=H?en(v[G]):Tt(v[G]);if(bs(le,be))_(le,be,x,null,S,R,q,P,H);else break;K--,G--}if($>K){if($<=G){const le=G+1,be=le<Z?v[le].el:j;for(;$<=G;)_(null,v[$]=H?en(v[$]):Tt(v[$]),x,be,S,R,q,P,H),$++}}else if($>G)for(;$<=K;)nt(g[$],S,R,!0),$++;else{const le=$,be=$,Ee=new Map;for($=be;$<=G;$++){const lt=v[$]=H?en(v[$]):Tt(v[$]);lt.key!=null&&Ee.set(lt.key,$)}let De,$e=0;const _t=G-be+1;let In=!1,Ta=0;const vs=new Array(_t);for($=0;$<_t;$++)vs[$]=0;for($=le;$<=K;$++){const lt=g[$];if($e>=_t){nt(lt,S,R,!0);continue}let Mt;if(lt.key!=null)Mt=Ee.get(lt.key);else for(De=be;De<=G;De++)if(vs[De-be]===0&&bs(lt,v[De])){Mt=De;break}Mt===void 0?nt(lt,S,R,!0):(vs[Mt-be]=$+1,Mt>=Ta?Ta=Mt:In=!0,_(lt,v[Mt],x,null,S,R,q,P,H),$e++)}const Pa=In?gm(vs):Jn;for(De=Pa.length-1,$=_t-1;$>=0;$--){const lt=be+$,Mt=v[lt],Ra=lt+1<Z?v[lt+1].el:j;vs[$]===0?_(null,Mt,x,Ra,S,R,q,P,H):In&&(De<0||$!==Pa[De]?ht(Mt,x,Ra,2):De--)}}},ht=(g,v,x,j,S=null)=>{const{el:R,type:q,transition:P,children:H,shapeFlag:$}=g;if($&6){ht(g.component.subTree,v,x,j);return}if($&128){g.suspense.move(v,x,j);return}if($&64){q.move(g,v,x,je);return}if(q===Ae){o(R,v,x);for(let K=0;K<H.length;K++)ht(H[K],v,x,j);o(g.anchor,v,x);return}if(q===Al){E(g,v,x);return}if(j!==2&&$&1&&P)if(j===0)P.beforeEnter(R),o(R,v,x),Ue(()=>P.enter(R),S);else{const{leave:K,delayLeave:G,afterLeave:le}=P,be=()=>o(R,v,x),Ee=()=>{K(R,()=>{be(),le&&le()})};G?G(R,be,Ee):Ee()}else o(R,v,x)},nt=(g,v,x,j=!1,S=!1)=>{const{type:R,props:q,ref:P,children:H,dynamicChildren:$,shapeFlag:Z,patchFlag:K,dirs:G}=g;if(P!=null&&rr(P,null,x,g,!0),Z&256){v.ctx.deactivate(g);return}const le=Z&1&&G,be=!es(g);let Ee;if(be&&(Ee=q&&q.onVnodeBeforeUnmount)&&yt(Ee,v,g),Z&6)Y(g.component,x,j);else{if(Z&128){g.suspense.unmount(x,j);return}le&&mn(g,null,v,"beforeUnmount"),Z&64?g.type.remove(g,v,x,S,je,j):$&&(R!==Ae||K>0&&K&64)?T($,v,x,!1,!0):(R===Ae&&K&384||!S&&Z&16)&&T(H,v,x),j&&Hn(g)}(be&&(Ee=q&&q.onVnodeUnmounted)||le)&&Ue(()=>{Ee&&yt(Ee,v,g),le&&mn(g,null,v,"unmounted")},x)},Hn=g=>{const{type:v,el:x,anchor:j,transition:S}=g;if(v===Ae){D(x,j);return}if(v===Al){L(g);return}const R=()=>{l(x),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(g.shapeFlag&1&&S&&!S.persisted){const{leave:q,delayLeave:P}=S,H=()=>q(x,R);P?P(g.el,R,H):H()}else R()},D=(g,v)=>{let x;for(;g!==v;)x=f(g),l(g),g=x;l(v)},Y=(g,v,x)=>{const{bum:j,scope:S,update:R,subTree:q,um:P}=g;j&&Gn(j),S.stop(),R&&(R.active=!1,nt(q,g,v,x)),P&&Ue(P,v),Ue(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},T=(g,v,x,j=!1,S=!1,R=0)=>{for(let q=R;q<g.length;q++)nt(g[q],v,x,j,S)},X=g=>g.shapeFlag&6?X(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),we=(g,v,x)=>{g==null?v._vnode&&nt(v._vnode,null,null,!0):_(v._vnode||null,g,v,null,null,null,x),dp(),v._vnode=g},je={p:_,um:nt,m:ht,r:Hn,mt:Ce,mc:de,pc:ye,pbc:ve,n:X,o:t};let fe,pe;return n&&([fe,pe]=n(je)),{render:we,hydrate:fe,createApp:mm(we,fe)}}function hn({effect:t,update:n},s){t.allowRecurse=n.allowRecurse=s}function sa(t,n,s=!1){const o=t.children,l=n.children;if(se(o)&&se(l))for(let r=0;r<o.length;r++){const a=o[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=en(l[r]),i.el=a.el),s||sa(a,i))}}function gm(t){const n=t.slice(),s=[0];let o,l,r,a,i;const c=t.length;for(o=0;o<c;o++){const u=t[o];if(u!==0){if(l=s[s.length-1],t[l]<u){n[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)i=r+a>>1,t[s[i]]<u?r=i+1:a=i;u<t[s[r]]&&(r>0&&(n[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=n[a];return s}const vm=t=>t.__isTeleport,Os=t=>t&&(t.disabled||t.disabled===""),ti=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,ar=(t,n)=>{const s=t&&t.to;return Re(s)?n?n(s):null:s},bm={__isTeleport:!0,process(t,n,s,o,l,r,a,i,c,u){const{mc:d,pc:m,pbc:f,o:{insert:h,querySelector:y,createText:k,createComment:_}}=u,C=Os(n.props);let{shapeFlag:A,children:B,dynamicChildren:E}=n;if(t==null){const L=n.el=k(""),O=n.anchor=k("");h(L,s,o),h(O,s,o);const W=n.target=ar(n.props,y),ae=n.targetAnchor=k("");W&&(h(ae,W),a=a||ti(W));const de=(he,ve)=>{A&16&&d(B,he,ve,l,r,a,i,c)};C?de(s,O):W&&de(W,ae)}else{n.el=t.el;const L=n.anchor=t.anchor,O=n.target=t.target,W=n.targetAnchor=t.targetAnchor,ae=Os(t.props),de=ae?s:O,he=ae?L:W;if(a=a||ti(O),E?(f(t.dynamicChildren,E,de,l,r,a,i),sa(t,n,!0)):c||m(t,n,de,he,l,r,a,i,!1),C)ae||_o(n,s,L,u,1);else if((n.props&&n.props.to)!==(t.props&&t.props.to)){const ve=n.target=ar(n.props,y);ve&&_o(n,ve,null,u,0)}else ae&&_o(n,O,W,u,1)}},remove(t,n,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:d,target:m,props:f}=t;if(m&&r(d),(a||!Os(f))&&(r(u),i&16))for(let h=0;h<c.length;h++){const y=c[h];l(y,n,s,!0,!!y.dynamicChildren)}},move:_o,hydrate:wm};function _o(t,n,s,{o:{insert:o},m:l},r=2){r===0&&o(t.targetAnchor,n,s);const{el:a,anchor:i,shapeFlag:c,children:u,props:d}=t,m=r===2;if(m&&o(a,n,s),(!m||Os(d))&&c&16)for(let f=0;f<u.length;f++)l(u[f],n,s,2);m&&o(i,n,s)}function wm(t,n,s,o,l,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const d=n.target=ar(n.props,c);if(d){const m=d._lpa||d.firstChild;if(n.shapeFlag&16)if(Os(n.props))n.anchor=u(a(t),n,i(t),s,o,l,r),n.targetAnchor=m;else{n.anchor=a(t);let f=m;for(;f;)if(f=a(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,d._lpa=n.targetAnchor&&a(n.targetAnchor);break}u(m,n,d,s,o,l,r)}}return n.anchor&&a(n.anchor)}const _m=bm,Ae=Symbol(void 0),oa=Symbol(void 0),un=Symbol(void 0),Al=Symbol(void 0),Ms=[];let Ct=null;function w(t=!1){Ms.push(Ct=t?null:[])}function km(){Ms.pop(),Ct=Ms[Ms.length-1]||null}let Js=1;function ni(t){Js+=t}function Mp(t){return t.dynamicChildren=Js>0?Ct||Jn:null,km(),Js>0&&Ct&&Ct.push(t),t}function z(t,n,s,o,l,r){return Mp(e(t,n,s,o,l,r,!0))}function N(t,n,s,o,l){return Mp(J(t,n,s,o,l,!0))}function os(t){return t?t.__v_isVNode===!0:!1}function bs(t,n){return t.type===n.type&&t.key===n.key}const pl="__vInternal",Tp=({key:t})=>t!=null?t:null,Do=({ref:t,ref_key:n,ref_for:s})=>t!=null?Re(t)||xe(t)||ce(t)?{i:Ye,r:t,k:n,f:!!s}:t:null;function e(t,n=null,s=null,o=0,l=null,r=t===Ae?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Tp(n),ref:n&&Do(n),scopeId:rl,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null};return i?(la(c,s),r&128&&t.normalize(c)):s&&(c.shapeFlag|=Re(s)?8:16),Js>0&&!a&&Ct&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ct.push(c),c}const J=xm;function xm(t,n=null,s=null,o=0,l=null,r=!1){if((!t||t===tm)&&(t=un),os(t)){const i=$n(t,n,!0);return s&&la(i,s),Js>0&&!r&&Ct&&(i.shapeFlag&6?Ct[Ct.indexOf(t)]=i:Ct.push(i)),i.patchFlag|=-2,i}if(jm(t)&&(t=t.__vccOpts),n){n=ee(n);let{class:i,style:c}=n;i&&!Re(i)&&(n.class=Pe(i)),ze(c)&&(lp(c)&&!se(c)&&(c=tt({},c)),n.style=et(c))}const a=Re(t)?1:hp(t)?128:vm(t)?64:ze(t)?4:ce(t)?2:0;return e(t,n,s,o,l,a,r,!0)}function ee(t){return t?lp(t)||pl in t?tt({},t):t:null}function $n(t,n,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=t,i=n?dn(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:i,key:i&&Tp(i),ref:n&&n.ref?s&&l?se(l)?l.concat(Do(n)):[l,Do(n)]:Do(n):l,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Ae?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$n(t.ssContent),ssFallback:t.ssFallback&&$n(t.ssFallback),el:t.el,anchor:t.anchor}}function p(t=" ",n=0){return J(oa,null,t,n)}function me(t="",n=!1){return n?(w(),N(un,null,t)):J(un,null,t)}function Tt(t){return t==null||typeof t=="boolean"?J(un):se(t)?J(Ae,null,t.slice()):typeof t=="object"?en(t):J(oa,null,String(t))}function en(t){return t.el===null||t.memo?t:$n(t)}function la(t,n){let s=0;const{shapeFlag:o}=t;if(n==null)n=null;else if(se(n))s=16;else if(typeof n=="object")if(o&65){const l=n.default;l&&(l._c&&(l._d=!1),la(t,l()),l._c&&(l._d=!0));return}else{s=32;const l=n._;!l&&!(pl in n)?n._ctx=Ye:l===3&&Ye&&(Ye.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else ce(n)?(n={default:n,_ctx:Ye},s=32):(n=String(n),o&64?(s=16,n=[p(n)]):s=8);t.children=n,t.shapeFlag|=s}function dn(...t){const n={};for(let s=0;s<t.length;s++){const o=t[s];for(const l in o)if(l==="class")n.class!==o.class&&(n.class=Pe([n.class,o.class]));else if(l==="style")n.style=et([n.style,o.style]);else if(Zo(l)){const r=n[l],a=o[l];a&&r!==a&&!(se(r)&&r.includes(a))&&(n[l]=r?[].concat(r,a):a)}else l!==""&&(n[l]=o[l])}return n}function yt(t,n,s,o=null){Dt(t,n,7,[s,o])}const Am=Op();let Bm=0;function Cm(t,n,s){const o=t.type,l=(n?n.appContext:t.appContext)||Am,r={uid:Bm++,vnode:t,type:o,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fp(o,l),emitsOptions:mp(o,l),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:o.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Lf.bind(null,r),t.ce&&t.ce(r),r}let qe=null;const Pn=()=>qe||Ye,ls=t=>{qe=t,t.scope.on()},Dn=()=>{qe&&qe.scope.off(),qe=null};function Pp(t){return t.vnode.shapeFlag&4}let Zs=!1;function Em(t,n=!1){Zs=n;const{props:s,children:o}=t.vnode,l=Pp(t);im(t,s,l,n),um(t,o);const r=l?Dm(t,n):void 0;return Zs=!1,r}function Dm(t,n){const s=t.type;t.accessCache=Object.create(null),t.proxy=nl(new Proxy(t.ctx,nm));const{setup:o}=s;if(o){const l=t.setupContext=o.length>1?Sm(t):null;ls(t),cs();const r=on(o,t,0,[t.props,l]);if(ps(),Dn(),Vc(r)){if(r.then(Dn,Dn),n)return r.then(a=>{si(t,a,n)}).catch(a=>{sl(a,t,0)});t.asyncDep=r}else si(t,r,n)}else Rp(t,n)}function si(t,n,s){ce(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:ze(n)&&(t.setupState=ap(n)),Rp(t,s)}let oi;function Rp(t,n,s){const o=t.type;if(!t.render){if(!n&&oi&&!o.render){const l=o.template;if(l){const{isCustomElement:r,compilerOptions:a}=t.appContext.config,{delimiters:i,compilerOptions:c}=o,u=tt(tt({isCustomElement:r,delimiters:i},a),c);o.render=oi(l,u)}}t.render=o.render||Et}ls(t),cs(),sm(t),ps(),Dn()}function Fm(t){return new Proxy(t.attrs,{get(n,s){return mt(t,"get","$attrs"),n[s]}})}function Sm(t){const n=o=>{t.exposed=o||{}};let s;return{get attrs(){return s||(s=Fm(t))},slots:t.slots,emit:t.emit,expose:n}}function ul(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ap(nl(t.exposed)),{get(n,s){if(s in n)return n[s];if(s in Lo)return Lo[s](t)}}))}function ir(t,n=!0){return ce(t)?t.displayName||t.name:t.name||n&&t.__name}function jm(t){return ce(t)&&"__vccOpts"in t}const F=(t,n)=>$f(t,n,Zs);function Ft(t,n,s){const o=arguments.length;return o===2?ze(n)&&!se(n)?os(n)?J(t,null,[n]):J(t,n):J(t,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&os(s)&&(s=[s]),J(t,n,s))}const $m="3.2.37",Om="http://www.w3.org/2000/svg",wn=typeof document!="undefined"?document:null,li=wn&&wn.createElement("template"),Mm={insert:(t,n,s)=>{n.insertBefore(t,s||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,s,o)=>{const l=n?wn.createElementNS(Om,t):wn.createElement(t,s?{is:s}:void 0);return t==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:t=>wn.createTextNode(t),createComment:t=>wn.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wn.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},cloneNode(t){const n=t.cloneNode(!0);return"_value"in t&&(n._value=t._value),n},insertStaticContent(t,n,s,o,l,r){const a=s?s.previousSibling:n.lastChild;if(l&&(l===r||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{li.innerHTML=o?`<svg>${t}</svg>`:t;const i=li.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}n.insertBefore(i,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function Tm(t,n,s){const o=t._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?t.removeAttribute("class"):s?t.setAttribute("class",n):t.className=n}function Pm(t,n,s){const o=t.style,l=Re(s);if(s&&!l){for(const r in s)cr(o,r,s[r]);if(n&&!Re(n))for(const r in n)s[r]==null&&cr(o,r,"")}else{const r=o.display;l?n!==s&&(o.cssText=s):n&&t.removeAttribute("style"),"_vod"in t&&(o.display=r)}}const ri=/\s*!important$/;function cr(t,n,s){if(se(s))s.forEach(o=>cr(t,n,o));else if(s==null&&(s=""),n.startsWith("--"))t.setProperty(n,s);else{const o=Rm(t,n);ri.test(s)?t.setProperty(On(o),s.replace(ri,""),"important"):t[o]=s}}const ai=["Webkit","Moz","ms"],Bl={};function Rm(t,n){const s=Bl[n];if(s)return s;let o=Ht(n);if(o!=="filter"&&o in t)return Bl[n]=o;o=el(o);for(let l=0;l<ai.length;l++){const r=ai[l]+o;if(r in t)return Bl[n]=r}return n}const ii="http://www.w3.org/1999/xlink";function Lm(t,n,s,o,l){if(o&&n.startsWith("xlink:"))s==null?t.removeAttributeNS(ii,n.slice(6,n.length)):t.setAttributeNS(ii,n,s);else{const r=Pd(n);s==null||r&&!zc(s)?t.removeAttribute(n):t.setAttribute(n,r?"":s)}}function Hm(t,n,s,o,l,r,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,l,r),t[n]=s==null?"":s;return}if(n==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=s;const c=s==null?"":s;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),s==null&&t.removeAttribute(n);return}let i=!1;if(s===""||s==null){const c=typeof t[n];c==="boolean"?s=zc(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{t[n]=s}catch{}i&&t.removeAttribute(n)}const[Lp,Im]=(()=>{let t=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(s&&Number(s[1])<=53)}return[t,n]})();let pr=0;const Nm=Promise.resolve(),zm=()=>{pr=0},qm=()=>pr||(Nm.then(zm),pr=Lp());function Wn(t,n,s,o){t.addEventListener(n,s,o)}function Um(t,n,s,o){t.removeEventListener(n,s,o)}function Vm(t,n,s,o,l=null){const r=t._vei||(t._vei={}),a=r[n];if(o&&a)a.value=o;else{const[i,c]=Wm(n);if(o){const u=r[n]=Ym(o,l);Wn(t,i,u,c)}else a&&(Um(t,i,a,c),r[n]=void 0)}}const ci=/(?:Once|Passive|Capture)$/;function Wm(t){let n;if(ci.test(t)){n={};let s;for(;s=t.match(ci);)t=t.slice(0,t.length-s[0].length),n[s[0].toLowerCase()]=!0}return[On(t.slice(2)),n]}function Ym(t,n){const s=o=>{const l=o.timeStamp||Lp();(Im||l>=s.attached-1)&&Dt(Km(o,s.value),n,5,[o])};return s.value=t,s.attached=qm(),s}function Km(t,n){if(se(n)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},n.map(o=>l=>!l._stopped&&o&&o(l))}else return n}const pi=/^on[a-z]/,Xm=(t,n,s,o,l=!1,r,a,i,c)=>{n==="class"?Tm(t,o,l):n==="style"?Pm(t,s,o):Zo(n)?Ir(n)||Vm(t,n,s,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Jm(t,n,o,l))?Hm(t,n,o,r,a,i,c):(n==="true-value"?t._trueValue=o:n==="false-value"&&(t._falseValue=o),Lm(t,n,o,l))};function Jm(t,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in t&&pi.test(n)&&ce(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||pi.test(n)&&Re(s)?!1:n in t}const ui=t=>{const n=t.props["onUpdate:modelValue"]||!1;return se(n)?s=>Gn(n,s):n};function Zm(t){t.target.composing=!0}function di(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Gm={created(t,{modifiers:{lazy:n,trim:s,number:o}},l){t._assign=ui(l);const r=o||l.props&&l.props.type==="number";Wn(t,n?"change":"input",a=>{if(a.target.composing)return;let i=t.value;s&&(i=i.trim()),r&&(i=Yl(i)),t._assign(i)}),s&&Wn(t,"change",()=>{t.value=t.value.trim()}),n||(Wn(t,"compositionstart",Zm),Wn(t,"compositionend",di),Wn(t,"change",di))},mounted(t,{value:n}){t.value=n==null?"":n},beforeUpdate(t,{value:n,modifiers:{lazy:s,trim:o,number:l}},r){if(t._assign=ui(r),t.composing||document.activeElement===t&&t.type!=="range"&&(s||o&&t.value.trim()===n||(l||t.type==="number")&&Yl(t.value)===n))return;const a=n==null?"":n;t.value!==a&&(t.value=a)}},Qm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},fi=(t,n)=>s=>{if(!("key"in s))return;const o=On(s.key);if(n.some(l=>l===o||Qm[l]===o))return t(s)},Hp={beforeMount(t,{value:n},{transition:s}){t._vod=t.style.display==="none"?"":t.style.display,s&&n?s.beforeEnter(t):ws(t,n)},mounted(t,{value:n},{transition:s}){s&&n&&s.enter(t)},updated(t,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(t),ws(t,!0),o.enter(t)):o.leave(t,()=>{ws(t,!1)}):ws(t,n))},beforeUnmount(t,{value:n}){ws(t,n)}};function ws(t,n){t.style.display=n?t._vod:"none"}const eh=tt({patchProp:Xm},Mm);let mi;function th(){return mi||(mi=hm(eh))}const nh=(...t)=>{const n=th().createApp(...t),{mount:s}=n;return n.mount=o=>{const l=sh(o);if(!l)return;const r=n._component;!ce(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},n};function sh(t){return Re(t)?document.querySelector(t):t}var oh=Object.defineProperty,hi=Object.getOwnPropertySymbols,lh=Object.prototype.hasOwnProperty,rh=Object.prototype.propertyIsEnumerable,yi=(t,n,s)=>n in t?oh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,ah=(t,n)=>{for(var s in n||(n={}))lh.call(n,s)&&yi(t,s,n[s]);if(hi)for(var s of hi(n))rh.call(n,s)&&yi(t,s,n[s]);return t},Ip="usehead",gi="head:count",Cl="data-head-attrs",ih=(t,n,s)=>{const o=s.createElement(t);for(const l of Object.keys(n)){let r=n[l];l==="key"||r===!1||(l==="children"?o.textContent=r:o.setAttribute(l,r))}return o};function ch(t,n){if(t instanceof HTMLElement&&n instanceof HTMLElement){const s=n.getAttribute("nonce");if(s&&!t.getAttribute("nonce")){const o=n.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=s,s===t.nonce&&t.isEqualNode(o)}}return t.isEqualNode(n)}var ph=t=>{const n=["key","id","name","property"];for(const s of n){const o=typeof t.getAttribute=="function"?t.hasAttribute(s)?t.getAttribute(s):void 0:t[s];if(o!==void 0)return{name:s,value:o}}},uh=()=>{const t=M(Ip);if(!t)throw new Error("You may forget to apply app.use(head)");return t},dh=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],fh=t=>{const n=[];for(const s of Object.keys(t))if(t[s]!=null){if(s==="title")n.push({tag:s,props:{children:t[s]}});else if(s==="base")n.push({tag:s,props:ah({key:"default"},t[s])});else if(dh.includes(s)){const o=t[s];Array.isArray(o)?o.forEach(l=>{n.push({tag:s,props:l})}):o&&n.push({tag:s,props:o})}}return n},vi=(t,n)=>{const s=t.getAttribute(Cl);if(s)for(const l of s.split(","))l in n||t.removeAttribute(l);const o=[];for(const l in n){const r=n[l];r!=null&&(r===!1?t.removeAttribute(l):t.setAttribute(l,r),o.push(l))}o.length?t.setAttribute(Cl,o.join(",")):t.removeAttribute(Cl)},mh=(t=window.document,n,s)=>{var o;const l=t.head;let r=l.querySelector(`meta[name="${gi}"]`);const a=r?Number(r.getAttribute("content")):0,i=[];if(r)for(let u=0,d=r.previousElementSibling;u<a;u++,d=(d==null?void 0:d.previousElementSibling)||null)((o=d==null?void 0:d.tagName)==null?void 0:o.toLowerCase())===n&&i.push(d);else r=t.createElement("meta"),r.setAttribute("name",gi),r.setAttribute("content","0"),l.append(r);let c=s.map(u=>ih(u.tag,u.props,t));c=c.filter(u=>{for(let d=0;d<i.length;d++){const m=i[d];if(ch(m,u))return i.splice(d,1),!1}return!0}),i.forEach(u=>{var d;return(d=u.parentNode)==null?void 0:d.removeChild(u)}),c.forEach(u=>{l.insertBefore(u,r)}),r.setAttribute("content",""+(a-i.length+c.length))},hh=()=>{let t=[],n=new Set;const s={install(o){o.config.globalProperties.$head=s,o.provide(Ip,s)},get headTags(){const o=[];return t.forEach(l=>{fh(l.value).forEach(a=>{if(a.tag==="meta"||a.tag==="base"||a.tag==="script"){const i=ph(a.props);if(i){let c=-1;for(let u=0;u<o.length;u++){const d=o[u],m=d.props[i.name],f=a.props[i.name];if(d.tag===a.tag&&m===f){c=u;break}}c!==-1&&o.splice(c,1)}}o.push(a)})}),o},addHeadObjs(o){t.push(o)},removeHeadObjs(o){t=t.filter(l=>l!==o)},updateDOM(o=window.document){let l,r={},a={};const i={};for(const u of s.headTags){if(u.tag==="title"){l=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(r,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(a,u.props);continue}i[u.tag]=i[u.tag]||[],i[u.tag].push(u)}l!==void 0&&(o.title=l),vi(o.documentElement,r),vi(o.body,a);const c=new Set([...Object.keys(i),...n]);for(const u of c)mh(o,u,i[u]||[]);n.clear(),Object.keys(i).forEach(u=>n.add(u))}};return s},yh=typeof window!="undefined",gh=t=>{const n=U(t),s=uh();s.addHeadObjs(n),yh&&(ao(()=>{s.updateDOM()}),il(()=>{s.removeHeadObjs(n),s.updateDOM()}))};const Ts=Symbol("v-click-clicks"),_n=Symbol("v-click-clicks-elements"),ur=Symbol("v-click-clicks-order-map"),Ps=Symbol("v-click-clicks-disabled"),Np=Symbol("slidev-slide-scale"),I=Symbol("slidev-slidev-context"),vh=Symbol("slidev-route"),bh=Symbol("slidev-slide-context"),bn="slidev-vclick-target",El="slidev-vclick-hidden",wh="slidev-vclick-fade",Dl="slidev-vclick-hidden-explicitly",_s="slidev-vclick-current",ko="slidev-vclick-prior";function dr(t,n){if(!t)return!1;const s=t.indexOf(n);return s>=0?(t.splice(s,1),!0):!1}function _h(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function kh(t){return t!=null}function xh(t,n){return Object.fromEntries(Object.entries(t).map(([s,o])=>n(s,o)).filter(kh))}var An={theme:"seriph",title:"React Workshop - Fundamental",titleTemplate:"%s",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"shiki",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev"};const ke=An;var Ic;const ln=(Ic=ke.aspectRatio)!=null?Ic:16/9;var Nc;const Fn=(Nc=ke.canvasWidth)!=null?Nc:980,zp=Math.round(Fn/ln),qp=F(()=>xh(ke.themeConfig||{},(t,n)=>[`--slidev-theme-${t}`,n]));function wt(t,n,s){Object.defineProperty(t,n,{value:s,writable:!0,enumerable:!1})}const Rn=Te({page:0,clicks:0});let Ah=[],Bh=[];wt(Rn,"$syncUp",!0);wt(Rn,"$syncDown",!0);wt(Rn,"$paused",!1);wt(Rn,"$onSet",t=>Ah.push(t));wt(Rn,"$onPatch",t=>Bh.push(t));wt(Rn,"$patch",async()=>!1);function Up(t,n,s=!1){const o=[];let l=!1,r=!1,a,i;const c=Te(n);function u(h){o.push(h)}function d(h,y){clearTimeout(a),l=!0,c[h]=y,a=setTimeout(()=>l=!1,0)}function m(h){l||(clearTimeout(i),r=!0,Object.entries(h).forEach(([y,k])=>{c[y]=k}),i=setTimeout(()=>r=!1,0))}function f(h){let y;s?s&&window.addEventListener("storage",_=>{_&&_.key===h&&_.newValue&&m(JSON.parse(_.newValue))}):(y=new BroadcastChannel(h),y.addEventListener("message",_=>m(_.data)));function k(){!s&&y&&!r?y.postMessage(_e(c)):s&&!r&&window.localStorage.setItem(h,JSON.stringify(c)),l||o.forEach(_=>_(c))}if(ue(c,k,{deep:!0}),s){const _=window.localStorage.getItem(h);_&&m(JSON.parse(_))}}return{init:f,onPatch:u,patch:d,state:c}}const{init:Ch,onPatch:Eh,patch:bi,state:Fl}=Up(Rn,{page:1,clicks:0}),Ln=Te({});let Dh=[],Fh=[];wt(Ln,"$syncUp",!0);wt(Ln,"$syncDown",!0);wt(Ln,"$paused",!1);wt(Ln,"$onSet",t=>Dh.push(t));wt(Ln,"$onPatch",t=>Fh.push(t));wt(Ln,"$patch",async()=>!1);const{init:Sh,onPatch:jh,patch:Vp,state:Io}=Up(Ln,{},!1),$h="modulepreload",wi={},Oh="/talks/mentify/react-workshop/1-fundamental/",ds=function(n,s){return!s||s.length===0?n():Promise.all(s.map(o=>{if(o=`${Oh}${o}`,o in wi)return;wi[o]=!0;const l=o.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":$h,l||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),l)return new Promise((i,c)=>{a.addEventListener("load",i),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n())};function st(t,n,s){return Array.isArray(t)?(t.length=Math.max(t.length,n),t.splice(n,1,s),s):(t[n]=s,s)}function Mh(t,n){if(Array.isArray(t)){t.splice(n,1);return}delete t[n]}function fn(t){return Xd()?(Jd(t),!0):!1}function He(...t){return F(()=>t.every(n=>b(n)))}function at(t){return F(()=>!b(t))}function Th(t){if(!xe(t))return Te(t);const n=new Proxy({},{get(s,o,l){return b(Reflect.get(t.value,o,l))},set(s,o,l){return xe(t.value[o])&&!xe(l)?t.value[o].value=l:t.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(t.value,o)},has(s,o){return Reflect.has(t.value,o)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Te(n)}var _i;const bt=typeof window!="undefined",Ph=t=>typeof t!="undefined",Rh=Object.prototype.toString,Lh=t=>typeof t=="number",Wp=t=>typeof t=="string",No=t=>Rh.call(t)==="[object Object]",fr=()=>+Date.now(),rn=()=>{};bt&&((_i=window==null?void 0:window.navigator)==null?void 0:_i.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Hh(t,n){function s(...o){t(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})}return s}const Yp=t=>t();function Ih(t=Yp){const n=U(!0);function s(){n.value=!1}function o(){n.value=!0}return{isActive:n,pause:s,resume:o,eventFilter:(...r)=>{n.value&&t(...r)}}}function Nh(t,n){var s;if(typeof t=="number")return t+n;const o=((s=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=t.slice(o.length),r=parseFloat(o)+n;return Number.isNaN(r)?t:r+l}var zh=Object.defineProperty,qh=Object.defineProperties,Uh=Object.getOwnPropertyDescriptors,ki=Object.getOwnPropertySymbols,Vh=Object.prototype.hasOwnProperty,Wh=Object.prototype.propertyIsEnumerable,xi=(t,n,s)=>n in t?zh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Yh=(t,n)=>{for(var s in n||(n={}))Vh.call(n,s)&&xi(t,s,n[s]);if(ki)for(var s of ki(n))Wh.call(n,s)&&xi(t,s,n[s]);return t},Kh=(t,n)=>qh(t,Uh(n));function Xh(t){if(!xe(t))return Df(t);const n=Array.isArray(t.value)?new Array(t.value.length):{};for(const s in t.value)n[s]=Ef(()=>({get(){return t.value[s]},set(o){if(Array.isArray(t.value)){const l=[...t.value];l[s]=o,t.value=l}else{const l=Kh(Yh({},t.value),{[s]:o});Object.setPrototypeOf(l,t.value),t.value=l}}}));return n}function Jh(t,n=!0){Pn()?_p(t):n?t():Ve(t)}function Zh(t,n=!0){Pn()?us(t):n?t():Ve(t)}function ra(t){Pn()&&cl(t)}function Gh(t,n=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=U(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function u(){b(n)<=0||(a.value=!0,l&&t(),i(),r=setInterval(t,b(n)))}if(o&&bt&&u(),xe(n)){const d=ue(n,()=>{a.value&&bt&&u()});fn(d)}return fn(c),{isActive:a,pause:c,resume:u}}function Kp(t=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,l=xe(t),r=U(t);function a(i){return arguments.length?(r.value=i,r.value):(r.value=r.value===b(s)?b(o):b(s),r.value)}return l?a:[r,a]}var Ai=Object.getOwnPropertySymbols,Qh=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable,ty=(t,n)=>{var s={};for(var o in t)Qh.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Ai)for(var o of Ai(t))n.indexOf(o)<0&&ey.call(t,o)&&(s[o]=t[o]);return s};function ny(t,n,s={}){const o=s,{eventFilter:l=Yp}=o,r=ty(o,["eventFilter"]);return ue(t,Hh(l,n),r)}function sy(t,n,s){const o=ue(t,(...l)=>(Ve(()=>o()),n(...l)),s)}var oy=Object.defineProperty,ly=Object.defineProperties,ry=Object.getOwnPropertyDescriptors,zo=Object.getOwnPropertySymbols,Xp=Object.prototype.hasOwnProperty,Jp=Object.prototype.propertyIsEnumerable,Bi=(t,n,s)=>n in t?oy(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,ay=(t,n)=>{for(var s in n||(n={}))Xp.call(n,s)&&Bi(t,s,n[s]);if(zo)for(var s of zo(n))Jp.call(n,s)&&Bi(t,s,n[s]);return t},iy=(t,n)=>ly(t,ry(n)),cy=(t,n)=>{var s={};for(var o in t)Xp.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&zo)for(var o of zo(t))n.indexOf(o)<0&&Jp.call(t,o)&&(s[o]=t[o]);return s};function py(t,n,s={}){const o=s,{eventFilter:l}=o,r=cy(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=Ih(l);return{stop:ny(t,n,iy(ay({},r),{eventFilter:a})),pause:i,resume:c,isActive:u}}function ot(t){var n;const s=b(t);return(n=s==null?void 0:s.$el)!=null?n:s}const Xe=bt?window:void 0,uy=bt?window.document:void 0;function Oe(...t){let n,s,o,l;if(Wp(t[0])?([s,o,l]=t,n=Xe):[n,s,o,l]=t,!n)return rn;let r=rn;const a=ue(()=>ot(n),c=>{r(),c&&(c.addEventListener(s,o,l),r=()=>{c.removeEventListener(s,o,l),r=rn})},{immediate:!0,flush:"post"}),i=()=>{a(),r()};return fn(i),i}function dy(t,n,s={}){const{window:o=Xe,ignore:l,capture:r=!0}=s;if(!o)return;const a=U(!0);let i;const c=m=>{o.clearTimeout(i);const f=ot(t),h=m.composedPath();!f||f===m.target||h.includes(f)||!a.value||l&&l.length>0&&l.some(y=>{const k=ot(y);return k&&(m.target===k||h.includes(k))})||n(m)},u=[Oe(o,"click",c,{passive:!0,capture:r}),Oe(o,"pointerdown",m=>{const f=ot(t);a.value=!!f&&!m.composedPath().includes(f)},{passive:!0}),Oe(o,"pointerup",m=>{if(m.button===0){const f=m.composedPath();m.composedPath=()=>f,i=o.setTimeout(()=>c(m),50)}},{passive:!0})];return()=>u.forEach(m=>m())}const fy=t=>typeof t=="function"?t:typeof t=="string"?n=>n.key===t:Array.isArray(t)?n=>t.includes(n.key):t?()=>!0:()=>!1;function my(t,n,s={}){const{target:o=Xe,eventName:l="keydown",passive:r=!1}=s,a=fy(t);return Oe(o,l,c=>{a(c)&&n(c)},r)}function hy(t={}){const{window:n=Xe}=t,s=U(0);return n&&(Oe(n,"blur",()=>s.value+=1,!0),Oe(n,"focus",()=>s.value+=1,!0)),F(()=>(s.value,n==null?void 0:n.document.activeElement))}function Fo(t,n={}){const{window:s=Xe}=n,o=Boolean(s&&"matchMedia"in s);let l;const r=U(!1),a=()=>{!o||(l||(l=s.matchMedia(t)),r.value=l.matches)};return Jh(()=>{a(),l&&("addEventListener"in l?l.addEventListener("change",a):l.addListener(a),fn(()=>{"removeEventListener"in l?l.removeEventListener("change",a):l.removeListener(a)}))}),r}const yy={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var gy=Object.defineProperty,Ci=Object.getOwnPropertySymbols,vy=Object.prototype.hasOwnProperty,by=Object.prototype.propertyIsEnumerable,Ei=(t,n,s)=>n in t?gy(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,wy=(t,n)=>{for(var s in n||(n={}))vy.call(n,s)&&Ei(t,s,n[s]);if(Ci)for(var s of Ci(n))by.call(n,s)&&Ei(t,s,n[s]);return t};function _y(t,n={}){function s(i,c){let u=t[i];return c!=null&&(u=Nh(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=Xe}=n;function l(i){return o?o.matchMedia(i).matches:!1}const r=i=>Fo(`(min-width: ${s(i)})`,n),a=Object.keys(t).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return wy({greater:r,smaller(i){return Fo(`(max-width: ${s(i,-.1)})`,n)},between(i,c){return Fo(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(i){return l(`(min-width: ${s(i)})`)},isSmaller(i){return l(`(max-width: ${s(i,-.1)})`)},isInBetween(i,c){return l(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},a)}const mr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},hr="__vueuse_ssr_handlers__";mr[hr]=mr[hr]||{};const ky=mr[hr];function xy(t,n){return ky[t]||n}function Ay(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"||Array.isArray(t)?"object":Number.isNaN(t)?"any":"number"}const By={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function $t(t,n,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,shallow:u,window:d=Xe,eventFilter:m,onError:f=O=>{console.error(O)}}=o,h=(u?It:U)(n);if(!s)try{s=xy("getDefaultStorage",()=>{var O;return(O=Xe)==null?void 0:O.localStorage})()}catch(O){f(O)}if(!s)return h;const y=b(n),k=Ay(y),_=(l=o.serializer)!=null?l:By[k],{pause:C,resume:A}=py(h,()=>B(h.value),{flush:r,deep:a,eventFilter:m});return d&&i&&Oe(d,"storage",L),L(),h;function B(O){try{O==null?s.removeItem(t):s.setItem(t,_.write(O))}catch(W){f(W)}}function E(O){if(!(O&&O.key!==t)){C();try{const W=O?O.newValue:s.getItem(t);return W==null?(c&&y!==null&&s.setItem(t,_.write(y)),y):typeof W!="string"?W:_.read(W)}catch(W){f(W)}finally{A()}}}function L(O){O&&O.key!==t||(h.value=E(O))}}function Cy(t){return Fo("(prefers-color-scheme: dark)",t)}var Ey=Object.defineProperty,Dy=Object.defineProperties,Fy=Object.getOwnPropertyDescriptors,Di=Object.getOwnPropertySymbols,Sy=Object.prototype.hasOwnProperty,jy=Object.prototype.propertyIsEnumerable,Fi=(t,n,s)=>n in t?Ey(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,$y=(t,n)=>{for(var s in n||(n={}))Sy.call(n,s)&&Fi(t,s,n[s]);if(Di)for(var s of Di(n))jy.call(n,s)&&Fi(t,s,n[s]);return t},Oy=(t,n)=>Dy(t,Fy(n));function CB(t,n={}){var s,o;const l=(s=n.draggingElement)!=null?s:Xe,r=U((o=n.initialValue)!=null?o:{x:0,y:0}),a=U(),i=f=>n.pointerTypes?n.pointerTypes.includes(f.pointerType):!0,c=f=>{b(n.preventDefault)&&f.preventDefault(),b(n.stopPropagation)&&f.stopPropagation()},u=f=>{var h;if(!i(f)||b(n.exact)&&f.target!==b(t))return;const y=b(t).getBoundingClientRect(),k={x:f.pageX-y.left,y:f.pageY-y.top};((h=n.onStart)==null?void 0:h.call(n,k,f))!==!1&&(a.value=k,c(f))},d=f=>{var h;!i(f)||!a.value||(r.value={x:f.pageX-a.value.x,y:f.pageY-a.value.y},(h=n.onMove)==null||h.call(n,r.value,f),c(f))},m=f=>{var h;!i(f)||!a.value||(a.value=void 0,(h=n.onEnd)==null||h.call(n,r.value,f),c(f))};return bt&&(Oe(t,"pointerdown",u,!0),Oe(l,"pointermove",d,!0),Oe(l,"pointerup",m,!0)),Oy($y({},Xh(r)),{position:r,isDragging:F(()=>!!a.value),style:F(()=>`left:${r.value.x}px;top:${r.value.y}px;`)})}var Si=Object.getOwnPropertySymbols,My=Object.prototype.hasOwnProperty,Ty=Object.prototype.propertyIsEnumerable,Py=(t,n)=>{var s={};for(var o in t)My.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Si)for(var o of Si(t))n.indexOf(o)<0&&Ty.call(t,o)&&(s[o]=t[o]);return s};function Ry(t,n,s={}){const o=s,{window:l=Xe}=o,r=Py(o,["window"]);let a;const i=l&&"ResizeObserver"in l,c=()=>{a&&(a.disconnect(),a=void 0)},u=ue(()=>ot(t),m=>{c(),i&&l&&m&&(a=new ResizeObserver(n),a.observe(m,r))},{immediate:!0,flush:"post"}),d=()=>{c(),u()};return fn(d),{isSupported:i,stop:d}}function Zp(t,n={}){const{immediate:s=!0,window:o=Xe}=n,l=U(!1);let r=null;function a(){!l.value||!o||(t(),r=o.requestAnimationFrame(a))}function i(){!l.value&&o&&(l.value=!0,a())}function c(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&i(),fn(c),{isActive:l,pause:c,resume:i}}function Ly(t,n={width:0,height:0},s={}){const o=U(n.width),l=U(n.height);return Ry(t,([r])=>{o.value=r.contentRect.width,l.value=r.contentRect.height},s),ue(()=>ot(t),r=>{o.value=r?n.width:0,l.value=r?n.height:0}),{width:o,height:l}}const ji=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Hy(t,n={}){const{document:s=uy,autoExit:o=!1}=n,l=t||(s==null?void 0:s.querySelector("html")),r=U(!1);let a=!1,i=ji[0];if(!s)a=!1;else for(const k of ji)if(k[1]in s){i=k,a=!0;break}const[c,u,d,,m]=i;async function f(){!a||(s!=null&&s[d]&&await s[u](),r.value=!1)}async function h(){if(!a)return;await f();const k=ot(l);k&&(await k[c](),r.value=!0)}async function y(){r.value?await f():await h()}return s&&Oe(s,m,()=>{r.value=!!(s!=null&&s[d])},!1),o&&fn(f),{isSupported:a,isFullscreen:r,enter:h,exit:f,toggle:y}}function Iy(t,n,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=Xe}=s,i=a&&"IntersectionObserver"in a;let c=rn;const u=i?ue(()=>({el:ot(t),root:ot(o)}),({el:m,root:f})=>{if(c(),!m)return;const h=new IntersectionObserver(n,{root:f,rootMargin:l,threshold:r});h.observe(m),c=()=>{h.disconnect(),c=rn}},{immediate:!0,flush:"post"}):rn,d=()=>{c(),u()};return fn(d),{isSupported:i,stop:d}}const Ny={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function zy(t={}){const{reactive:n=!1,target:s=Xe,aliasMap:o=Ny,passive:l=!0,onEventFired:r=rn}=t,a=Te(new Set),i={toJSON(){return{}},current:a},c=n?Te(i):i,u=new Set;function d(h,y){h in c&&(n?c[h]=y:c[h].value=y)}function m(h,y){var k,_;const C=(k=h.key)==null?void 0:k.toLowerCase(),A=(_=h.code)==null?void 0:_.toLowerCase(),B=[A,C].filter(Boolean);A&&(y?a.add(h.code):a.delete(h.code));for(const E of B)d(E,y);C==="meta"&&!y?(u.forEach(E=>{a.delete(E),d(E,!1)}),u.clear()):typeof h.getModifierState=="function"&&h.getModifierState("Meta")&&y&&[...a,...B].forEach(E=>u.add(E))}s&&(Oe(s,"keydown",h=>(m(h,!0),r(h)),{passive:l}),Oe(s,"keyup",h=>(m(h,!1),r(h)),{passive:l}));const f=new Proxy(c,{get(h,y,k){if(typeof y!="string")return Reflect.get(h,y,k);if(y=y.toLowerCase(),y in o&&(y=o[y]),!(y in c))if(/[+_-]/.test(y)){const C=y.split(/[+_-]/g).map(A=>A.trim());c[y]=F(()=>C.every(A=>b(f[A])))}else c[y]=U(!1);const _=Reflect.get(h,y,k);return n?b(_):_}});return f}function EB(t={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=Xe,eventFilter:a}=t,i=U(l.x),c=U(l.y),u=U(null),d=k=>{n==="page"?(i.value=k.pageX,c.value=k.pageY):n==="client"&&(i.value=k.clientX,c.value=k.clientY),u.value="mouse"},m=()=>{i.value=l.x,c.value=l.y},f=k=>{if(k.touches.length>0){const _=k.touches[0];n==="page"?(i.value=_.pageX,c.value=_.pageY):n==="client"&&(i.value=_.clientX,c.value=_.clientY),u.value="touch"}},h=k=>a===void 0?d(k):a(()=>d(k),{}),y=k=>a===void 0?f(k):a(()=>f(k),{});return r&&(Oe(r,"mousemove",h,{passive:!0}),Oe(r,"dragover",h,{passive:!0}),s&&(Oe(r,"touchstart",y,{passive:!0}),Oe(r,"touchmove",y,{passive:!0}),o&&Oe(r,"touchend",m,{passive:!0}))),{x:i,y:c,sourceType:u}}var Vt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Vt||(Vt={}));function qy(t,n={}){const s=U(t),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=n,i=Te({x:0,y:0}),c=(O,W)=>{i.x=O,i.y=W},u=Te({x:0,y:0}),d=(O,W)=>{u.x=O,u.y=W},m=F(()=>i.x-u.x),f=F(()=>i.y-u.y),{max:h,abs:y}=Math,k=F(()=>h(y(m.value),y(f.value))>=o),_=U(!1),C=U(!1),A=F(()=>k.value?y(m.value)>y(f.value)?m.value>0?Vt.LEFT:Vt.RIGHT:f.value>0?Vt.UP:Vt.DOWN:Vt.NONE),B=O=>n.pointerTypes?n.pointerTypes.includes(O.pointerType):!0,E=[Oe(t,"pointerdown",O=>{var W,ae;if(!B(O))return;C.value=!0,(ae=(W=s.value)==null?void 0:W.style)==null||ae.setProperty("touch-action","none");const de=O.target;de==null||de.setPointerCapture(O.pointerId);const{clientX:he,clientY:ve}=O;c(he,ve),d(he,ve),a==null||a(O)}),Oe(t,"pointermove",O=>{if(!B(O)||!C.value)return;const{clientX:W,clientY:ae}=O;d(W,ae),!_.value&&k.value&&(_.value=!0),_.value&&(l==null||l(O))}),Oe(t,"pointerup",O=>{var W,ae;!B(O)||(_.value&&(r==null||r(O,A.value)),C.value=!1,_.value=!1,(ae=(W=s.value)==null?void 0:W.style)==null||ae.setProperty("touch-action","initial"))})],L=()=>E.forEach(O=>O());return{isSwiping:Kn(_),direction:Kn(A),posStart:Kn(i),posEnd:Kn(u),distanceX:m,distanceY:f,stop:L}}var Uy=Object.defineProperty,$i=Object.getOwnPropertySymbols,Vy=Object.prototype.hasOwnProperty,Wy=Object.prototype.propertyIsEnumerable,Oi=(t,n,s)=>n in t?Uy(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Yy=(t,n)=>{for(var s in n||(n={}))Vy.call(n,s)&&Oi(t,s,n[s]);if($i)for(var s of $i(n))Wy.call(n,s)&&Oi(t,s,n[s]);return t};function DB(t={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame"}=t,r=U(fr()+s),a=()=>r.value=fr()+s,i=l==="requestAnimationFrame"?Zp(a,{immediate:o}):Gh(a,l,{immediate:o});return n?Yy({timestamp:r},i):r}function Rt(t,n,s,o={}){var l;const{passive:r=!1,eventName:a,deep:i=!1,defaultValue:c}=o,u=Pn(),d=s||(u==null?void 0:u.emit)||((l=u==null?void 0:u.$emit)==null?void 0:l.bind(u));let m=a;n||(n="modelValue"),m=a||m||`update:${n.toString()}`;const f=()=>Ph(t[n])?t[n]:c;if(r){const h=U(f());return ue(()=>t[n],y=>h.value=y),ue(h,y=>{(y!==t[n]||i)&&d(m,y)},{deep:i}),h}else return F({get(){return f()},set(h){d(m,h)}})}function FB({window:t=Xe}={}){if(!t)return U(!1);const n=U(t.document.hasFocus());return Oe(t,"blur",()=>{n.value=!1}),Oe(t,"focus",()=>{n.value=!0}),n}function Ky({window:t=Xe,initialWidth:n=1/0,initialHeight:s=1/0}={}){const o=U(n),l=U(s),r=()=>{t&&(o.value=t.innerWidth,l.value=t.innerHeight)};return r(),Zh(r),Oe("resize",r,{passive:!0}),{width:o,height:l}}/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Gp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",fs=t=>Gp?Symbol(t):"_vr_"+t,Xy=fs("rvlm"),Mi=fs("rvd"),aa=fs("r"),Qp=fs("rl"),yr=fs("rvl"),Yn=typeof window!="undefined";function Jy(t){return t.__esModule||Gp&&t[Symbol.toStringTag]==="Module"}const Fe=Object.assign;function Sl(t,n){const s={};for(const o in n){const l=n[o];s[o]=Array.isArray(l)?l.map(t):t(l)}return s}const Rs=()=>{},Zy=/\/$/,Gy=t=>t.replace(Zy,"");function jl(t,n,s="/"){let o,l={},r="",a="";const i=n.indexOf("?"),c=n.indexOf("#",i>-1?i:0);return i>-1&&(o=n.slice(0,i),r=n.slice(i+1,c>-1?c:n.length),l=t(r)),c>-1&&(o=o||n.slice(0,c),a=n.slice(c,n.length)),o=n8(o!=null?o:n,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function Qy(t,n){const s=n.query?t(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function Ti(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function e8(t,n,s){const o=n.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&rs(n.matched[o],s.matched[l])&&eu(n.params,s.params)&&t(n.query)===t(s.query)&&n.hash===s.hash}function rs(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function eu(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const s in t)if(!t8(t[s],n[s]))return!1;return!0}function t8(t,n){return Array.isArray(t)?Pi(t,n):Array.isArray(n)?Pi(n,t):t===n}function Pi(t,n){return Array.isArray(n)?t.length===n.length&&t.every((s,o)=>s===n[o]):t.length===1&&t[0]===n}function n8(t,n){if(t.startsWith("/"))return t;if(!t)return n;const s=n.split("/"),o=t.split("/");let l=s.length-1,r,a;for(r=0;r<o.length;r++)if(a=o[r],!(l===1||a==="."))if(a==="..")l--;else break;return s.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Gs;(function(t){t.pop="pop",t.push="push"})(Gs||(Gs={}));var Ls;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ls||(Ls={}));function s8(t){if(!t)if(Yn){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Gy(t)}const o8=/^[^#]+#/;function l8(t,n){return t.replace(o8,"#")+n}function r8(t,n){const s=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const dl=()=>({left:window.pageXOffset,top:window.pageYOffset});function a8(t){let n;if("el"in t){const s=t.el,o=typeof s=="string"&&s.startsWith("#"),l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l)return;n=r8(l,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Ri(t,n){return(history.state?history.state.position-n:-1)+t}const gr=new Map;function i8(t,n){gr.set(t,n)}function c8(t){const n=gr.get(t);return gr.delete(t),n}let p8=()=>location.protocol+"//"+location.host;function tu(t,n){const{pathname:s,search:o,hash:l}=n,r=t.indexOf("#");if(r>-1){let i=l.includes(t.slice(r))?t.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),Ti(c,"")}return Ti(s,t)+o+l}function u8(t,n,s,o){let l=[],r=[],a=null;const i=({state:f})=>{const h=tu(t,location),y=s.value,k=n.value;let _=0;if(f){if(s.value=h,n.value=f,a&&a===y){a=null;return}_=k?f.position-k.position:0}else o(h);l.forEach(C=>{C(s.value,y,{delta:_,type:Gs.pop,direction:_?_>0?Ls.forward:Ls.back:Ls.unknown})})};function c(){a=s.value}function u(f){l.push(f);const h=()=>{const y=l.indexOf(f);y>-1&&l.splice(y,1)};return r.push(h),h}function d(){const{history:f}=window;!f.state||f.replaceState(Fe({},f.state,{scroll:dl()}),"")}function m(){for(const f of r)f();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:m}}function Li(t,n,s,o=!1,l=!1){return{back:t,current:n,forward:s,replaced:o,position:window.history.length,scroll:l?dl():null}}function d8(t){const{history:n,location:s}=window,o={value:tu(t,s)},l={value:n.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const m=t.indexOf("#"),f=m>-1?(s.host&&document.querySelector("base")?t:t.slice(m))+c:p8()+t+c;try{n[d?"replaceState":"pushState"](u,"",f),l.value=u}catch(h){console.error(h),s[d?"replace":"assign"](f)}}function a(c,u){const d=Fe({},n.state,Li(l.value.back,c,l.value.forward,!0),u,{position:l.value.position});r(c,d,!0),o.value=c}function i(c,u){const d=Fe({},l.value,n.state,{forward:c,scroll:dl()});r(d.current,d,!0);const m=Fe({},Li(o.value,c,null),{position:d.position+1},u);r(c,m,!1),o.value=c}return{location:o,state:l,push:i,replace:a}}function f8(t){t=s8(t);const n=d8(t),s=u8(t,n.state,n.location,n.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=Fe({location:"",base:t,go:o,createHref:l8.bind(null,t)},n,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>n.state.value}),l}function m8(t){return typeof t=="string"||t&&typeof t=="object"}function nu(t){return typeof t=="string"||typeof t=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},su=fs("nf");var Hi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hi||(Hi={}));function as(t,n){return Fe(new Error,{type:t,[su]:!0},n)}function Gt(t,n){return t instanceof Error&&su in t&&(n==null||!!(t.type&n))}const Ii="[^/]+?",h8={sensitive:!1,strict:!1,start:!0,end:!0},y8=/[.+*?^${}()[\]/\\]/g;function g8(t,n){const s=Fe({},h8,n),o=[];let l=s.start?"^":"";const r=[];for(const u of t){const d=u.length?[]:[90];s.strict&&!u.length&&(l+="/");for(let m=0;m<u.length;m++){const f=u[m];let h=40+(s.sensitive?.25:0);if(f.type===0)m||(l+="/"),l+=f.value.replace(y8,"\\$&"),h+=40;else if(f.type===1){const{value:y,repeatable:k,optional:_,regexp:C}=f;r.push({name:y,repeatable:k,optional:_});const A=C||Ii;if(A!==Ii){h+=10;try{new RegExp(`(${A})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${y}" (${A}): `+E.message)}}let B=k?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;m||(B=_&&u.length<2?`(?:/${B})`:"/"+B),_&&(B+="?"),l+=B,h+=20,_&&(h+=-8),k&&(h+=-20),A===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function i(u){const d=u.match(a),m={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",y=r[f-1];m[y.name]=h&&y.repeatable?h.split("/"):h}return m}function c(u){let d="",m=!1;for(const f of t){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:y,repeatable:k,optional:_}=h,C=y in u?u[y]:"";if(Array.isArray(C)&&!k)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const A=Array.isArray(C)?C.join("/"):C;if(!A)if(_)f.length<2&&t.length>1&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${y}"`);d+=A}}return d}return{re:a,score:o,keys:r,parse:i,stringify:c}}function v8(t,n){let s=0;for(;s<t.length&&s<n.length;){const o=n[s]-t[s];if(o)return o;s++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function b8(t,n){let s=0;const o=t.score,l=n.score;for(;s<o.length&&s<l.length;){const r=v8(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(Ni(o))return 1;if(Ni(l))return-1}return l.length-o.length}function Ni(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const w8={type:0,value:""},_8=/[a-zA-Z0-9_]/;function k8(t){if(!t)return[[]];if(t==="/")return[[w8]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(h){throw new Error(`ERR (${s})/"${u}": ${h}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let i=0,c,u="",d="";function m(){!u||(s===0?r.push({type:0,value:u}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;i<t.length;){if(c=t[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(u&&m(),a()):c===":"?(m(),s=1):f();break;case 4:f(),s=o;break;case 1:c==="("?s=2:_8.test(c)?f():(m(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:m(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),m(),a(),l}function x8(t,n,s){const o=g8(k8(t.path),s),l=Fe(o,{record:t,parent:n,children:[],alias:[]});return n&&!l.record.aliasOf==!n.record.aliasOf&&n.children.push(l),l}function A8(t,n){const s=[],o=new Map;n=qi({strict:!1,end:!0,sensitive:!1},n);function l(d){return o.get(d)}function r(d,m,f){const h=!f,y=C8(d);y.aliasOf=f&&f.record;const k=qi(n,d),_=[y];if("alias"in d){const B=typeof d.alias=="string"?[d.alias]:d.alias;for(const E of B)_.push(Fe({},y,{components:f?f.record.components:y.components,path:E,aliasOf:f?f.record:y}))}let C,A;for(const B of _){const{path:E}=B;if(m&&E[0]!=="/"){const L=m.record.path,O=L[L.length-1]==="/"?"":"/";B.path=m.record.path+(E&&O+E)}if(C=x8(B,m,k),f?f.alias.push(C):(A=A||C,A!==C&&A.alias.push(C),h&&d.name&&!zi(C)&&a(d.name)),"children"in y){const L=y.children;for(let O=0;O<L.length;O++)r(L[O],C,f&&f.children[O])}f=f||C,c(C)}return A?()=>{a(A)}:Rs}function a(d){if(nu(d)){const m=o.get(d);m&&(o.delete(d),s.splice(s.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=s.indexOf(d);m>-1&&(s.splice(m,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return s}function c(d){let m=0;for(;m<s.length&&b8(d,s[m])>=0&&(d.record.path!==s[m].record.path||!ou(d,s[m]));)m++;s.splice(m,0,d),d.record.name&&!zi(d)&&o.set(d.record.name,d)}function u(d,m){let f,h={},y,k;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw as(1,{location:d});k=f.record.name,h=Fe(B8(m.params,f.keys.filter(A=>!A.optional).map(A=>A.name)),d.params),y=f.stringify(h)}else if("path"in d)y=d.path,f=s.find(A=>A.re.test(y)),f&&(h=f.parse(y),k=f.record.name);else{if(f=m.name?o.get(m.name):s.find(A=>A.re.test(m.path)),!f)throw as(1,{location:d,currentLocation:m});k=f.record.name,h=Fe({},m.params,d.params),y=f.stringify(h)}const _=[];let C=f;for(;C;)_.unshift(C.record),C=C.parent;return{name:k,path:y,params:h,matched:_,meta:D8(_)}}return t.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function B8(t,n){const s={};for(const o of n)o in t&&(s[o]=t[o]);return s}function C8(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:E8(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function E8(t){const n={},s=t.props||!1;if("component"in t)n.default=s;else for(const o in t.components)n[o]=typeof s=="boolean"?s:s[o];return n}function zi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function D8(t){return t.reduce((n,s)=>Fe(n,s.meta),{})}function qi(t,n){const s={};for(const o in t)s[o]=o in n?n[o]:t[o];return s}function ou(t,n){return n.children.some(s=>s===t||ou(t,s))}const lu=/#/g,F8=/&/g,S8=/\//g,j8=/=/g,$8=/\?/g,ru=/\+/g,O8=/%5B/g,M8=/%5D/g,au=/%5E/g,T8=/%60/g,iu=/%7B/g,P8=/%7C/g,cu=/%7D/g,R8=/%20/g;function ia(t){return encodeURI(""+t).replace(P8,"|").replace(O8,"[").replace(M8,"]")}function L8(t){return ia(t).replace(iu,"{").replace(cu,"}").replace(au,"^")}function vr(t){return ia(t).replace(ru,"%2B").replace(R8,"+").replace(lu,"%23").replace(F8,"%26").replace(T8,"`").replace(iu,"{").replace(cu,"}").replace(au,"^")}function H8(t){return vr(t).replace(j8,"%3D")}function I8(t){return ia(t).replace(lu,"%23").replace($8,"%3F")}function N8(t){return t==null?"":I8(t).replace(S8,"%2F")}function qo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function z8(t){const n={};if(t===""||t==="?")return n;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(ru," "),a=r.indexOf("="),i=qo(a<0?r:r.slice(0,a)),c=a<0?null:qo(r.slice(a+1));if(i in n){let u=n[i];Array.isArray(u)||(u=n[i]=[u]),u.push(c)}else n[i]=c}return n}function Ui(t){let n="";for(let s in t){const o=t[s];if(s=H8(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(Array.isArray(o)?o.map(r=>r&&vr(r)):[o&&vr(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function q8(t){const n={};for(const s in t){const o=t[s];o!==void 0&&(n[s]=Array.isArray(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return n}function ks(){let t=[];function n(o){return t.push(o),()=>{const l=t.indexOf(o);l>-1&&t.splice(l,1)}}function s(){t=[]}return{add:n,list:()=>t,reset:s}}function tn(t,n,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=m=>{m===!1?i(as(4,{from:s,to:n})):m instanceof Error?i(m):m8(m)?i(as(2,{from:n,to:m})):(r&&o.enterCallbacks[l]===r&&typeof m=="function"&&r.push(m),a())},u=t.call(o&&o.instances[l],n,s,c);let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(m=>i(m))})}function $l(t,n,s,o){const l=[];for(const r of t)for(const a in r.components){let i=r.components[a];if(!(n!=="beforeRouteEnter"&&!r.instances[a]))if(U8(i)){const u=(i.__vccOpts||i)[n];u&&l.push(tn(u,s,o,r,a))}else{let c=i();l.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=Jy(u)?u.default:u;r.components[a]=d;const f=(d.__vccOpts||d)[n];return f&&tn(f,s,o,r,a)()}))}}return l}function U8(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Vi(t){const n=M(aa),s=M(Qp),o=F(()=>n.resolve(b(t.to))),l=F(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],m=s.matched;if(!d||!m.length)return-1;const f=m.findIndex(rs.bind(null,d));if(f>-1)return f;const h=Wi(c[u-2]);return u>1&&Wi(d)===h&&m[m.length-1].path!==h?m.findIndex(rs.bind(null,c[u-2])):f}),r=F(()=>l.value>-1&&K8(s.params,o.value.params)),a=F(()=>l.value>-1&&l.value===s.matched.length-1&&eu(s.params,o.value.params));function i(c={}){return Y8(c)?n[b(t.replace)?"replace":"push"](b(t.to)).catch(Rs):Promise.resolve()}return{route:o,href:F(()=>o.value.href),isActive:r,isExactActive:a,navigate:i}}const V8=Be({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vi,setup(t,{slots:n}){const s=Te(Vi(t)),{options:o}=M(aa),l=F(()=>({[Yi(t.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Yi(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return t.custom?r:Ft("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),W8=V8;function Y8(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function K8(t,n){for(const s in n){const o=n[s],l=t[s];if(typeof o=="string"){if(o!==l)return!1}else if(!Array.isArray(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function Wi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yi=(t,n,s)=>t!=null?t:n!=null?n:s,X8=Be({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:s}){const o=M(yr),l=F(()=>t.route||o.value),r=M(Mi,0),a=F(()=>l.value.matched[r]);pt(Mi,r+1),pt(Xy,a),pt(yr,l);const i=U();return ue(()=>[i.value,a.value,t.name],([c,u,d],[m,f,h])=>{u&&(u.instances[d]=c,f&&f!==u&&c&&c===m&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!rs(u,f)||!m)&&(u.enterCallbacks[d]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=l.value,u=a.value,d=u&&u.components[t.name],m=t.name;if(!d)return Ki(s.default,{Component:d,route:c});const f=u.props[t.name],h=f?f===!0?c.params:typeof f=="function"?f(c):f:null,k=Ft(d,Fe({},h,n,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(u.instances[m]=null)},ref:i}));return Ki(s.default,{Component:k,route:c})||k}}});function Ki(t,n){if(!t)return null;const s=t(n);return s.length===1?s[0]:s}const J8=X8;function Z8(t){const n=A8(t.routes,t),s=t.parseQuery||z8,o=t.stringifyQuery||Ui,l=t.history,r=ks(),a=ks(),i=ks(),c=It(Zt);let u=Zt;Yn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Sl.bind(null,D=>""+D),m=Sl.bind(null,N8),f=Sl.bind(null,qo);function h(D,Y){let T,X;return nu(D)?(T=n.getRecordMatcher(D),X=Y):X=D,n.addRoute(X,T)}function y(D){const Y=n.getRecordMatcher(D);Y&&n.removeRoute(Y)}function k(){return n.getRoutes().map(D=>D.record)}function _(D){return!!n.getRecordMatcher(D)}function C(D,Y){if(Y=Fe({},Y||c.value),typeof D=="string"){const pe=jl(s,D,Y.path),g=n.resolve({path:pe.path},Y),v=l.createHref(pe.fullPath);return Fe(pe,g,{params:f(g.params),hash:qo(pe.hash),redirectedFrom:void 0,href:v})}let T;if("path"in D)T=Fe({},D,{path:jl(s,D.path,Y.path).path});else{const pe=Fe({},D.params);for(const g in pe)pe[g]==null&&delete pe[g];T=Fe({},D,{params:m(D.params)}),Y.params=m(Y.params)}const X=n.resolve(T,Y),we=D.hash||"";X.params=d(f(X.params));const je=Qy(o,Fe({},D,{hash:L8(we),path:X.path})),fe=l.createHref(je);return Fe({fullPath:je,hash:we,query:o===Ui?q8(D.query):D.query||{}},X,{redirectedFrom:void 0,href:fe})}function A(D){return typeof D=="string"?jl(s,D,c.value.path):Fe({},D)}function B(D,Y){if(u!==D)return as(8,{from:Y,to:D})}function E(D){return W(D)}function L(D){return E(Fe(A(D),{replace:!0}))}function O(D){const Y=D.matched[D.matched.length-1];if(Y&&Y.redirect){const{redirect:T}=Y;let X=typeof T=="function"?T(D):T;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=A(X):{path:X},X.params={}),Fe({query:D.query,hash:D.hash,params:D.params},X)}}function W(D,Y){const T=u=C(D),X=c.value,we=D.state,je=D.force,fe=D.replace===!0,pe=O(T);if(pe)return W(Fe(A(pe),{state:we,force:je,replace:fe}),Y||T);const g=T;g.redirectedFrom=Y;let v;return!je&&e8(o,X,T)&&(v=as(16,{to:g,from:X}),Ot(X,X,!0,!1)),(v?Promise.resolve(v):de(g,X)).catch(x=>Gt(x)?Gt(x,2)?x:ye(x):oe(x,g,X)).then(x=>{if(x){if(Gt(x,2))return W(Fe(A(x.to),{state:we,force:je,replace:fe}),Y||g)}else x=ve(g,X,!0,fe,we);return he(g,X,x),x})}function ae(D,Y){const T=B(D,Y);return T?Promise.reject(T):Promise.resolve()}function de(D,Y){let T;const[X,we,je]=G8(D,Y);T=$l(X.reverse(),"beforeRouteLeave",D,Y);for(const pe of X)pe.leaveGuards.forEach(g=>{T.push(tn(g,D,Y))});const fe=ae.bind(null,D,Y);return T.push(fe),Nn(T).then(()=>{T=[];for(const pe of r.list())T.push(tn(pe,D,Y));return T.push(fe),Nn(T)}).then(()=>{T=$l(we,"beforeRouteUpdate",D,Y);for(const pe of we)pe.updateGuards.forEach(g=>{T.push(tn(g,D,Y))});return T.push(fe),Nn(T)}).then(()=>{T=[];for(const pe of D.matched)if(pe.beforeEnter&&!Y.matched.includes(pe))if(Array.isArray(pe.beforeEnter))for(const g of pe.beforeEnter)T.push(tn(g,D,Y));else T.push(tn(pe.beforeEnter,D,Y));return T.push(fe),Nn(T)}).then(()=>(D.matched.forEach(pe=>pe.enterCallbacks={}),T=$l(je,"beforeRouteEnter",D,Y),T.push(fe),Nn(T))).then(()=>{T=[];for(const pe of a.list())T.push(tn(pe,D,Y));return T.push(fe),Nn(T)}).catch(pe=>Gt(pe,8)?pe:Promise.reject(pe))}function he(D,Y,T){for(const X of i.list())X(D,Y,T)}function ve(D,Y,T,X,we){const je=B(D,Y);if(je)return je;const fe=Y===Zt,pe=Yn?history.state:{};T&&(X||fe?l.replace(D.fullPath,Fe({scroll:fe&&pe&&pe.scroll},we)):l.push(D.fullPath,we)),c.value=D,Ot(D,Y,T,fe),ye()}let Me;function Le(){Me||(Me=l.listen((D,Y,T)=>{const X=C(D),we=O(X);if(we){W(Fe(we,{replace:!0}),X).catch(Rs);return}u=X;const je=c.value;Yn&&i8(Ri(je.fullPath,T.delta),dl()),de(X,je).catch(fe=>Gt(fe,12)?fe:Gt(fe,2)?(W(fe.to,X).then(pe=>{Gt(pe,20)&&!T.delta&&T.type===Gs.pop&&l.go(-1,!1)}).catch(Rs),Promise.reject()):(T.delta&&l.go(-T.delta,!1),oe(fe,X,je))).then(fe=>{fe=fe||ve(X,je,!1),fe&&(T.delta?l.go(-T.delta,!1):T.type===Gs.pop&&Gt(fe,20)&&l.go(-1,!1)),he(X,je,fe)}).catch(Rs)}))}let We=ks(),Ce=ks(),ne;function oe(D,Y,T){ye(D);const X=Ce.list();return X.length?X.forEach(we=>we(D,Y,T)):console.error(D),Promise.reject(D)}function Q(){return ne&&c.value!==Zt?Promise.resolve():new Promise((D,Y)=>{We.add([D,Y])})}function ye(D){return ne||(ne=!D,Le(),We.list().forEach(([Y,T])=>D?T(D):Y()),We.reset()),D}function Ot(D,Y,T,X){const{scrollBehavior:we}=t;if(!Yn||!we)return Promise.resolve();const je=!T&&c8(Ri(D.fullPath,0))||(X||!T)&&history.state&&history.state.scroll||null;return Ve().then(()=>we(D,Y,je)).then(fe=>fe&&a8(fe)).catch(fe=>oe(fe,D,Y))}const Je=D=>l.go(D);let ht;const nt=new Set;return{currentRoute:c,addRoute:h,removeRoute:y,hasRoute:_,getRoutes:k,resolve:C,options:t,push:E,replace:L,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:Ce.add,isReady:Q,install(D){const Y=this;D.component("RouterLink",W8),D.component("RouterView",J8),D.config.globalProperties.$router=Y,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>b(c)}),Yn&&!ht&&c.value===Zt&&(ht=!0,E(l.location).catch(we=>{}));const T={};for(const we in Zt)T[we]=F(()=>c.value[we]);D.provide(aa,Y),D.provide(Qp,Te(T)),D.provide(yr,c);const X=D.unmount;nt.add(D),D.unmount=function(){nt.delete(D),nt.size<1&&(u=Zt,Me&&Me(),Me=null,c.value=Zt,ht=!1,ne=!1),X()}}}}function Nn(t){return t.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function G8(t,n){const s=[],o=[],l=[],r=Math.max(n.matched.length,t.matched.length);for(let a=0;a<r;a++){const i=n.matched[a];i&&(t.matched.find(u=>rs(u,i))?o.push(i):s.push(i));const c=t.matched[a];c&&(n.matched.find(u=>rs(u,c))||l.push(c))}return[s,o,l]}const Ol=U(!1),Hs=U(!1),Xn=U(!1),Q8=U(!0),br=_y({xs:460,...yy}),Sn=Ky(),pu=zy(),eg=F(()=>Sn.height.value-Sn.width.value/ln>180),uu=Hy(bt?document.body:null),ts=hy(),tg=F(()=>{var t,n;return["INPUT","TEXTAREA"].includes(((t=ts.value)==null?void 0:t.tagName)||"")||((n=ts.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),ng=F(()=>{var t;return["BUTTON","A"].includes(((t=ts.value)==null?void 0:t.tagName)||"")});$t("slidev-camera","default");$t("slidev-mic","default");const So=$t("slidev-scale",0),Ge=$t("slidev-show-overview",!1),Ml=$t("slidev-presenter-cursor",!0),Xi=$t("slidev-show-editor",!1);$t("slidev-editor-width",bt?window.innerWidth*.4:100);const du=Kp(Ge);function Ji(t,n,s,o=l=>l){return t*o(.5-n*(.5-s))}function sg(t){return[-t[0],-t[1]]}function xt(t,n){return[t[0]+n[0],t[1]+n[1]]}function vt(t,n){return[t[0]-n[0],t[1]-n[1]]}function kt(t,n){return[t[0]*n,t[1]*n]}function og(t,n){return[t[0]/n,t[1]/n]}function xs(t){return[t[1],-t[0]]}function lg(t,n){return t[0]*n[0]+t[1]*n[1]}function rg(t,n){return t[0]===n[0]&&t[1]===n[1]}function ag(t){return Math.hypot(t[0],t[1])}function ig(t){return t[0]*t[0]+t[1]*t[1]}function Zi(t,n){return ig(vt(t,n))}function fu(t){return og(t,ag(t))}function cg(t,n){return Math.hypot(t[1]-n[1],t[0]-n[0])}function As(t,n,s){let o=Math.sin(s),l=Math.cos(s),r=t[0]-n[0],a=t[1]-n[1],i=r*l-a*o,c=r*o+a*l;return[i+n[0],c+n[1]]}function wr(t,n,s){return xt(t,kt(vt(n,t),s))}function Gi(t,n,s){return xt(t,kt(n,s))}var{min:zn,PI:pg}=Math,Qi=.275,Bs=pg+1e-4;function ug(t,n={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=ne=>ne,start:i={},end:c={},last:u=!1}=n,{cap:d=!0,easing:m=ne=>ne*(2-ne)}=i,{cap:f=!0,easing:h=ne=>--ne*ne*ne+1}=c;if(t.length===0||s<=0)return[];let y=t[t.length-1].runningLength,k=i.taper===!1?0:i.taper===!0?Math.max(s,y):i.taper,_=c.taper===!1?0:c.taper===!0?Math.max(s,y):c.taper,C=Math.pow(s*o,2),A=[],B=[],E=t.slice(0,10).reduce((ne,oe)=>{let Q=oe.pressure;if(r){let ye=zn(1,oe.distance/s),Ot=zn(1,1-ye);Q=zn(1,ne+(Ot-ne)*(ye*Qi))}return(ne+Q)/2},t[0].pressure),L=Ji(s,l,t[t.length-1].pressure,a),O,W=t[0].vector,ae=t[0].point,de=ae,he=ae,ve=de;for(let ne=0;ne<t.length;ne++){let{pressure:oe}=t[ne],{point:Q,vector:ye,distance:Ot,runningLength:Je}=t[ne];if(ne<t.length-1&&y-Je<3)continue;if(l){if(r){let T=zn(1,Ot/s),X=zn(1,1-T);oe=zn(1,E+(X-E)*(T*Qi))}L=Ji(s,l,oe,a)}else L=s/2;O===void 0&&(O=L);let ht=Je<k?m(Je/k):1,nt=y-Je<_?h((y-Je)/_):1;if(L=Math.max(.01,L*Math.min(ht,nt)),ne===t.length-1){let T=kt(xs(ye),L);A.push(vt(Q,T)),B.push(xt(Q,T));continue}let Hn=t[ne+1].vector,D=lg(ye,Hn);if(D<0){let T=kt(xs(W),L);for(let X=1/13,we=0;we<=1;we+=X)he=As(vt(Q,T),Q,Bs*we),A.push(he),ve=As(xt(Q,T),Q,Bs*-we),B.push(ve);ae=he,de=ve;continue}let Y=kt(xs(wr(Hn,ye,D)),L);he=vt(Q,Y),(ne<=1||Zi(ae,he)>C)&&(A.push(he),ae=he),ve=xt(Q,Y),(ne<=1||Zi(de,ve)>C)&&(B.push(ve),de=ve),E=oe,W=ye}let Me=t[0].point.slice(0,2),Le=t.length>1?t[t.length-1].point.slice(0,2):xt(t[0].point,[1,1]),We=[],Ce=[];if(t.length===1){if(!(k||_)||u){let ne=Gi(Me,fu(xs(vt(Me,Le))),-(O||L)),oe=[];for(let Q=1/13,ye=Q;ye<=1;ye+=Q)oe.push(As(ne,Me,Bs*2*ye));return oe}}else{if(!(k||_&&t.length===1))if(d)for(let oe=1/13,Q=oe;Q<=1;Q+=oe){let ye=As(B[0],Me,Bs*Q);We.push(ye)}else{let oe=vt(A[0],B[0]),Q=kt(oe,.5),ye=kt(oe,.51);We.push(vt(Me,Q),vt(Me,ye),xt(Me,ye),xt(Me,Q))}let ne=xs(sg(t[t.length-1].vector));if(_||k&&t.length===1)Ce.push(Le);else if(f){let oe=Gi(Le,ne,L);for(let Q=1/29,ye=Q;ye<1;ye+=Q)Ce.push(As(oe,Le,Bs*3*ye))}else Ce.push(xt(Le,kt(ne,L)),xt(Le,kt(ne,L*.99)),vt(Le,kt(ne,L*.99)),vt(Le,kt(ne,L)))}return A.concat(Ce,B.reverse(),We)}function dg(t,n={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=n;if(t.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(t[0])?t:t.map(({x:h,y,pressure:k=.5})=>[h,y,k]);if(i.length===2){let h=i[1];i=i.slice(0,-1);for(let y=1;y<5;y++)i.push(wr(i[0],h,y/4))}i.length===1&&(i=[...i,[...xt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,m=c[0],f=i.length-1;for(let h=1;h<i.length;h++){let y=r&&h===f?i[h].slice(0,2):wr(m.point,i[h],a);if(rg(m.point,y))continue;let k=cg(y,m.point);if(d+=k,h<f&&!u){if(d<l)continue;u=!0}m={point:y,pressure:i[h][2]>=0?i[h][2]:.5,vector:fu(vt(m.point,y)),distance:k,runningLength:d},c.push(m)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function fg(t,n={}){return ug(dg(t,n),n)}var mg=fg,hg=Object.defineProperty,ec=Object.getOwnPropertySymbols,yg=Object.prototype.hasOwnProperty,gg=Object.prototype.propertyIsEnumerable,tc=(t,n,s)=>n in t?hg(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,_r=(t,n)=>{for(var s in n||(n={}))yg.call(n,s)&&tc(t,s,n[s]);if(ec)for(var s of ec(n))gg.call(n,s)&&tc(t,s,n[s]);return t},vg=()=>({events:{},emit(t,...n){(this.events[t]||[]).forEach(s=>s(...n))},on(t,n){return(this.events[t]=this.events[t]||[]).push(n),()=>this.events[t]=(this.events[t]||[]).filter(s=>s!==n)}});function Uo(t,n){return t-n}function bg(t){return t<0?-1:1}function Vo(t){return[Math.abs(t),bg(t)]}function mu(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var wg=2,qt=wg,ms=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var n,s;const o=this.drauu.el,l=(n=this.drauu.options.coordinateScale)!=null?n:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-r.left)*l,y:(t.pageY-r.top)*l,pressure:t.pressure}}else{const r=this.drauu.svgPoint;r.x=t.clientX,r.y=t.clientY;const a=r.matrixTransform((s=o.getScreenCTM())==null?void 0:s.inverse());return{x:a.x*l,y:a.y*l,pressure:t.pressure}}}createElement(t,n){var s;const o=document.createElementNS("http://www.w3.org/2000/svg",t),l=n?_r(_r({},this.brush),n):this.brush;return o.setAttribute("fill",(s=l.fill)!=null?s:"transparent"),o.setAttribute("stroke",l.color),o.setAttribute("stroke-width",l.size.toString()),o.setAttribute("stroke-linecap","round"),l.dasharray&&o.setAttribute("stroke-dasharray",l.dasharray),o}attr(t,n){this.el.setAttribute(t,typeof n=="string"?n:n.toFixed(qt))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},_g=class extends ms{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const n=mg(t,_r({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!n.length)return"";const s=n.reduce((o,[l,r],a,i)=>{const[c,u]=i[(a+1)%i.length];return o.push(l,r,(l+c)/2,(r+u)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},kg=class extends ms{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Vo(t.x-this.start.x),[o,l]=Vo(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Uo),[i,c]=[this.start.y,this.start.y+o*l].sort(Uo);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function hu(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",n),o.setAttribute("id",t),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var xg=class extends ms{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const n=mu(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(hu(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:n,y:s}=t;if(this.shiftPressed){const o=t.x-this.start.x,l=t.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+l*r,s=this.start.y+l):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},Ag=class extends ms{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Vo(t.x-this.start.x),[o,l]=Vo(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Uo),[i,c]=[this.start.y,this.start.y+o*l].sort(Uo);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Bg(t,n){const s=t.x-n.x,o=t.y-n.y;return s*s+o*o}function Cg(t,n,s){let o=n.x,l=n.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const i=((t.x-o)*r+(t.y-l)*a)/(r*r+a*a);i>1?(o=s.x,l=s.y):i>0&&(o+=r*i,l+=a*i)}return r=t.x-o,a=t.y-l,r*r+a*a}function Eg(t,n){let s=t[0];const o=[s];let l;for(let r=1,a=t.length;r<a;r++)l=t[r],Bg(l,s)>n&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function kr(t,n,s,o,l){let r=o,a=0;for(let i=n+1;i<s;i++){const c=Cg(t[i],t[n],t[s]);c>r&&(a=i,r=c)}r>o&&(a-n>1&&kr(t,n,a,o,l),l.push(t[a]),s-a>1&&kr(t,a,s,o,l))}function Dg(t,n){const s=t.length-1,o=[t[0]];return kr(t,0,s,n,o),o.push(t[s]),o}function nc(t,n,s=!1){if(t.length<=2)return t;const o=n!==void 0?n*n:1;return t=s?t:Eg(t,o),t=Dg(t,o),t}var Fg=class extends ms{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=mu();const n=hu(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=nc(this.points,1,!0),this.count=0),this.attr("d",oc(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",oc(nc(this.points,1,!0))),!t.getTotalLength()))}};function Sg(t,n){const s=n.x-t.x,o=n.y-t.y;return{length:Math.sqrt(Math.pow(s,2)+Math.pow(o,2)),angle:Math.atan2(o,s)}}function sc(t,n,s,o){const l=n||t,r=s||t,a=.2,i=Sg(l,r),c=i.angle+(o?Math.PI:0),u=i.length*a,d=t.x+Math.cos(c)*u,m=t.y+Math.sin(c)*u;return{x:d,y:m}}function jg(t,n,s){const o=sc(s[n-1],s[n-2],t),l=sc(t,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(qt)},${o.y.toFixed(qt)} ${l.x.toFixed(qt)},${l.y.toFixed(qt)} ${t.x.toFixed(qt)},${t.y.toFixed(qt)}`}function oc(t){return t.reduce((n,s,o,l)=>o===0?`M ${s.x.toFixed(qt)},${s.y.toFixed(qt)}`:`${n} ${jg(s,o,l)}`,"")}var $g=class extends ms{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const n=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),u=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:o||r})}}else r.children&&n(r.children,r)}};t&&n(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),t.push(n))}return t.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!t.includes(s))),t.length>0}lineLineIntersect(t,n){const s=t.x1,o=t.x2,l=n.x1,r=n.x2,a=t.y1,i=t.y2,c=n.y1,u=n.y2,d=(s-o)*(c-u)-(a-i)*(l-r),m=(s*i-a*o)*(l-r)-(s-o)*(l*u-c*r),f=(s*i-a*o)*(c-u)-(a-i)*(l*u-c*r),h=(y,k,_)=>y>=k&&y<=_?!0:y>=_&&y<=k;if(d===0)return!1;{const y={x:m/d,y:f/d};return h(y.x,s,o)&&h(y.y,a,i)&&h(y.x,l,r)&&h(y.y,c,u)}}};function Og(t){return{draw:new Fg(t),stylus:new _g(t),line:new xg(t),rectangle:new Ag(t),ellipse:new kg(t),eraseLine:new $g(t)}}var Mg=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=vg(),this._models=Og(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,n){return this._emitter.on(t,n)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){!this.acceptsInput(t)||(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const n=this.model._eventUp(t);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function Tg(t){return new Mg(t)}const xr=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Lt=$t("slidev-drawing-enabled",!1),SB=$t("slidev-drawing-pinned",!1),Pg=U(!1),Rg=U(!1),Lg=U(!1),Qs=U(!1),Bn=Th($t("slidev-drawing-brush",{color:xr[0],size:4,mode:"stylus"})),lc=U("stylus"),yu=F(()=>ke.drawings.syncAll||Pt.value);let eo=!1;const Cs=F({get(){return lc.value},set(t){lc.value=t,t==="arrow"?(Bn.mode="line",Bn.arrowEnd=!0):(Bn.mode=t,Bn.arrowEnd=!1)}}),Hg=Te({brush:Bn,acceptsInputTypes:F(()=>Lt.value?void 0:["pen"]),coordinateTransform:!1}),Qe=nl(Tg(Hg));function Ig(){Qe.clear(),yu.value&&Vp(Ne.value,"")}function gu(){var t;Rg.value=Qe.canRedo(),Pg.value=Qe.canUndo(),Lg.value=!!((t=Qe.el)!=null&&t.children.length)}function Ng(t){eo=!0;const n=Io[t||Ne.value];n!=null?Qe.load(n):Qe.clear(),eo=!1}Qe.on("changed",()=>{if(gu(),!eo){const t=Qe.dump(),n=Ne.value;(Io[n]||"")!==t&&yu.value&&Vp(n,Qe.dump())}});jh(t=>{eo=!0,t[Ne.value]!=null&&Qe.load(t[Ne.value]||""),eo=!1,gu()});Ve(()=>{ue(Ne,()=>{!Qe.mounted||Ng()},{immediate:!0})});Qe.on("start",()=>Qs.value=!0);Qe.on("end",()=>Qs.value=!1);window.addEventListener("keydown",t=>{if(!Lt.value)return;const n=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let s=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?Qe.redo():Qe.undo():t.code==="Escape"?Lt.value=!1:t.code==="KeyL"&&n?Cs.value="line":t.code==="KeyA"&&n?Cs.value="arrow":t.code==="KeyS"&&n?Cs.value="stylus":t.code==="KeyR"&&n?Cs.value="rectangle":t.code==="KeyE"&&n?Cs.value="ellipse":t.code==="KeyC"&&n?Ig():t.code.startsWith("Digit")&&n&&+t.code[5]<=xr.length?Bn.color=xr[+t.code[5]-1]:s=!1,s&&(t.preventDefault(),t.stopPropagation())},!1);const rc=Cy(),Tl=$t("slidev-color-schema","auto"),Ar=F(()=>ke.colorSchema!=="auto"),ca=F({get(){return Ar.value?ke.colorSchema==="dark":Tl.value==="auto"?rc.value:Tl.value==="dark"},set(t){Ar.value||(Tl.value=t===rc.value?"auto":t?"dark":"light")}}),vu=Kp(ca);bt&&ue(ca,t=>{const n=document.querySelector("html");n.classList.toggle("dark",t),n.classList.toggle("light",!t)},{immediate:!0});function zg(){return[]}const jo=U(1),$o=F(()=>Ie.length-1),dt=U(0),pa=U(0);function qg(){dt.value>jo.value&&(dt.value-=1)}function Ug(){dt.value<$o.value&&(dt.value+=1)}function Vg(){if(dt.value>jo.value){let t=dt.value-pa.value;t<jo.value&&(t=jo.value),dt.value=t}}function Wg(){if(dt.value<$o.value){let t=dt.value+pa.value;t>$o.value&&(t=$o.value),dt.value=t}}const bu=He(at(tg),at(ng),Q8);function Yg(t,n,s=!1){typeof t=="string"&&(t=pu[t]);const o=He(t,bu);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),n()};return ue(o,a,{flush:"sync"})}function Kg(t,n){return my(t,s=>{!bu.value||s.repeat||n()})}function Xg(){const t=zg(),{escape:n,space:s,shift:o,left:l,right:r,up:a,down:i,enter:c,d:u,g:d,o:m}=pu;new Map([{key:He(s,at(o)),fn:an,autoRepeat:!0},{key:He(s,o),fn:cn,autoRepeat:!0},{key:He(r,at(o),at(Ge)),fn:an,autoRepeat:!0},{key:He(l,at(o),at(Ge)),fn:cn,autoRepeat:!0},{key:"pageDown",fn:an,autoRepeat:!0},{key:"pageUp",fn:cn,autoRepeat:!0},{key:He(a,at(Ge)),fn:()=>so(!1),autoRepeat:!0},{key:He(i,at(Ge)),fn:no,autoRepeat:!0},{key:He(l,o),fn:()=>so(!1),autoRepeat:!0},{key:He(r,o),fn:no,autoRepeat:!0},{key:He(u,at(Lt)),fn:vu},{key:He(m,at(Lt)),fn:du},{key:He(n,at(Lt)),fn:()=>Ge.value=!1},{key:He(d,at(Lt)),fn:()=>Xn.value=!Xn.value},{key:He(l,Ge),fn:qg},{key:He(r,Ge),fn:Ug},{key:He(a,Ge),fn:Vg},{key:He(i,Ge),fn:Wg},{key:He(c,Ge),fn:()=>{is(dt.value),Ge.value=!1}},...t].map(h=>[h.key,h])).forEach(h=>{h.fn&&Yg(h.key,h.fn,h.autoRepeat)}),Kg("f",()=>uu.toggle())}const Jg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zg=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Gg=[Zg];function Qg(t,n){return w(),z("svg",Jg,Gg)}var ev={name:"carbon-close",render:Qg};function ua(t){var s,o;const n=(o=(s=t==null?void 0:t.meta)==null?void 0:s.slide)==null?void 0:o.no;return n!=null?`slidev-page-${n}`:""}const wu=Be({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const n=t;M(I);const s=U(),o=Ly(s),l=F(()=>n.width?n.width:o.width.value),r=F(()=>n.width?n.width/ln:o.height.value);n.width&&ao(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=F(()=>l.value/r.value),i=F(()=>n.scale?n.scale:a.value<ln?l.value/Fn:r.value*ln/Fn),c=F(()=>({height:`${zp}px`,width:`${Fn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=F(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return pt(Np,i),(d,m)=>(w(),z("div",{id:"slide-container",ref_key:"root",ref:s,class:Pe(b(u))},[e("div",{id:"slide-content",style:et(b(c))},[jt(d.$slots,"default")],4),jt(d.$slots,"controls")],2))}});var da=Be({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:n}){const s=Rt(t,"clicks",n),o=Rt(t,"clicksElements",n),l=Rt(t,"clicksDisabled",n),r=Rt(t,"clicksOrderMap",n);o.value.length=0,pt(vh,t.route),pt(bh,t.context),pt(Ts,s),pt(Ps,l),pt(_n,o),pt(ur,r)},render(){var t,n;return this.$props.is?Ft(this.$props.is):(n=(t=this.$slots)==null?void 0:t.default)==null?void 0:n.call(t)}});const tv=["innerHTML"],_u=Be({__name:"DrawingPreview",props:{page:null},setup(t){return M(I),(n,s)=>b(Io)[t.page]?(w(),z("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(Io)[t.page]},null,8,tv)):me("v-if",!0)}});var nv=Object.freeze(Object.defineProperty({__proto__:null,default:_u},Symbol.toStringTag,{value:"Module"}));const sv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},ov=["onClick"],lv=Be({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(t,{emit:n}){const s=t;M(I);const o=Rt(s,"modelValue",n);function l(){o.value=!1}function r(h){is(h),l()}function a(h){return h===dt.value}const i=br.smaller("xs"),c=br.smaller("sm"),u=4*16*2,d=2*16,m=F(()=>i.value?Sn.width.value-u:c.value?(Sn.width.value-u-d)/2:300),f=F(()=>Math.floor((Sn.width.value-u)/(m.value+d)));return ao(()=>{dt.value=Ne.value,pa.value=f.value}),(h,y)=>{const k=ev;return w(),z(Ae,null,[Bt(e("div",sv,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:et(`grid-template-columns: repeat(auto-fit,minmax(${b(m)}px,1fr))`)},[(w(!0),z(Ae,null,io(b(Ie).slice(0,-1),(_,C)=>(w(),z("div",{key:_.path,class:"relative"},[e("div",{class:Pe(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(C+1)}]),onClick:A=>r(+_.path)},[(w(),N(wu,{key:_.path,width:b(m),"clicks-disabled":!0,class:"pointer-events-none"},{default:V(()=>[J(b(da),{is:_==null?void 0:_.component,"clicks-disabled":!0,class:Pe(b(ua)(_)),route:_,context:"overview"},null,8,["is","class","route"]),J(_u,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],10,ov),e("div",{class:"absolute top-0 opacity-50",style:et(`left: ${b(m)+5}px`)},jn(C+1),5)]))),128))],4)],512),[[Hp,b(o)]]),b(o)?(w(),z("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:l},[J(k)])):me("v-if",!0)],64)}}});var rv="/talks/mentify/react-workshop/1-fundamental/assets/logo.b72bde5d.png";const av={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},iv=Be({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:n}){const s=t;M(I);const o=Rt(s,"modelValue",n);function l(){o.value=!1}return(r,a)=>(w(),N(bp,null,[b(o)?(w(),z("div",av,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),e("div",{class:Pe(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[jt(r.$slots,"default")],2)])):me("v-if",!0)],1024))}});const cv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},pv=["innerHTML"],uv=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:rv,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),p("dev ")])])],-1),dv=Be({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:n}){const s=t;M(I);const o=Rt(s,"modelValue",n),l=F(()=>typeof ke.info=="string");return(r,a)=>(w(),N(iv,{modelValue:b(o),"onUpdate:modelValue":a[0]||(a[0]=i=>xe(o)?o.value=i:null),class:"px-6 py-4"},{default:V(()=>[e("div",cv,[b(l)?(w(),z("div",{key:0,class:"mb-4",innerHTML:b(ke).info},null,8,pv)):me("v-if",!0),uv])]),_:1},8,["modelValue"]))}}),fv=["disabled","onKeydown"],mv=Be({__name:"Goto",setup(t){M(I);const n=U(),s=U(""),o=F(()=>{if(s.value.startsWith("/"))return!!Ie.find(a=>a.path===s.value.substring(1));{const a=+s.value;return!isNaN(a)&&a>0&&a<=Ou.value}});function l(){o.value&&(s.value.startsWith("/")?is(s.value.substring(1)):is(+s.value)),r()}function r(){Xn.value=!1}return ue(Xn,async a=>{var i,c;a?(await Ve(),s.value="",(i=n.value)==null||i.focus()):(c=n.value)==null||c.blur()}),ue(s,a=>{a.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(a,i)=>(w(),z("div",{id:"slidev-goto-dialog",class:Pe(["fixed right-5 bg-main transform transition-all",b(Xn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Bt(e("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!b(Xn),class:Pe(["outline-none bg-transparent",{"text-red-400":!b(o)&&s.value}]),placeholder:"Goto...",onKeydown:[fi(l,["enter"]),fi(r,["escape"])],onBlur:r},null,42,fv),[[Gm,s.value]])],2))}}),hv=Be({__name:"Controls",setup(t){M(I);const n=It(),s=It();return(o,l)=>(w(),z(Ae,null,[J(lv,{modelValue:b(Ge),"onUpdate:modelValue":l[0]||(l[0]=r=>xe(Ge)?Ge.value=r:null)},null,8,["modelValue"]),J(mv),b(n)?(w(),N(b(n),{key:0})):me("v-if",!0),b(s)?(w(),N(b(s),{key:1,modelValue:b(Ol),"onUpdate:modelValue":l[1]||(l[1]=r=>xe(Ol)?Ol.value=r:null)},null,8,["modelValue"])):me("v-if",!0),b(ke).info?(w(),N(dv,{key:2,modelValue:b(Hs),"onUpdate:modelValue":l[2]||(l[2]=r=>xe(Hs)?Hs.value=r:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),yv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gv=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),vv=[gv];function bv(t,n){return w(),z("svg",yv,vv)}var wv={name:"carbon-settings-adjust",render:bv};const _v={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kv=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),xv=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Av=[kv,xv];function Bv(t,n){return w(),z("svg",_v,Av)}var Cv={name:"carbon-information",render:Bv};const Ev={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Dv=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Fv=[Dv];function Sv(t,n){return w(),z("svg",Ev,Fv)}var jv={name:"carbon-download",render:Sv};const $v={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ov=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Mv=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Tv=[Ov,Mv];function Pv(t,n){return w(),z("svg",$v,Tv)}var Rv={name:"carbon-user-speaker",render:Pv};const Lv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hv=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Iv=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Nv=[Hv,Iv];function zv(t,n){return w(),z("svg",Lv,Nv)}var qv={name:"carbon-presentation-file",render:zv};const Uv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vv=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Wv=[Vv];function Yv(t,n){return w(),z("svg",Uv,Wv)}var Kv={name:"carbon-pen",render:Yv};const Xv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Jv=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Zv=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Gv=[Jv,Zv];function Qv(t,n){return w(),z("svg",Xv,Gv)}var e5={name:"ph-cursor-duotone",render:Qv};const t5={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},n5=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),s5=[n5];function o5(t,n){return w(),z("svg",t5,s5)}var ku={name:"ph-cursor-fill",render:o5};const l5={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r5=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),a5=[r5];function i5(t,n){return w(),z("svg",l5,a5)}var c5={name:"carbon-sun",render:i5};const p5={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u5=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),d5=[u5];function f5(t,n){return w(),z("svg",p5,d5)}var m5={name:"carbon-moon",render:f5};const h5={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y5=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),g5=[y5];function v5(t,n){return w(),z("svg",h5,g5)}var b5={name:"carbon-apps",render:v5};const w5={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_5=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),k5=[_5];function x5(t,n){return w(),z("svg",w5,k5)}var A5={name:"carbon-arrow-right",render:x5};const B5={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},C5=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),E5=[C5];function D5(t,n){return w(),z("svg",B5,E5)}var F5={name:"carbon-arrow-left",render:D5};const S5={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},j5=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),$5=[j5];function O5(t,n){return w(),z("svg",S5,$5)}var M5={name:"carbon-maximize",render:O5};const T5={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},P5=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),R5=[P5];function L5(t,n){return w(),z("svg",T5,R5)}var H5={name:"carbon-minimize",render:L5};const I5={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},N5=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),z5=[N5];function q5(t,n){return w(),z("svg",I5,z5)}var U5={name:"carbon-checkmark",render:q5};var Kt=(t,n)=>{const s=t.__vccOpts||t;for(const[o,l]of n)s[o]=l;return s};const V5={class:"select-list"},W5={class:"title"},Y5={class:"items"},K5=["onClick"],X5=Be({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:n}){const s=t;M(I);const o=Rt(s,"modelValue",n,{passive:!0});return(l,r)=>{const a=U5;return w(),z("div",V5,[e("div",W5,jn(t.title),1),e("div",Y5,[(w(!0),z(Ae,null,io(t.items,i=>(w(),z("div",{key:i.value,class:Pe(["item",{active:b(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[J(a,{class:Pe(["text-green-500",{"opacity-0":b(o)!==i.value}])},null,8,["class"]),p(" "+jn(i.display||i.value),1)],10,K5))),128))])])}}});var J5=Kt(X5,[["__scopeId","data-v-427604ef"]]);const Z5={class:"text-sm"},G5=Be({__name:"Settings",setup(t){M(I);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(w(),z("div",Z5,[J(J5,{modelValue:b(So),"onUpdate:modelValue":o[0]||(o[0]=l=>xe(So)?So.value=l:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),Q5={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},e1=Be({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:n}){const s=t;M(I);const o=Rt(s,"modelValue",n,{passive:!0}),l=U();return dy(l,()=>{o.value=!1}),(r,a)=>(w(),z("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:Pe({disabled:t.disabled}),onClick:a[0]||(a[0]=i=>o.value=!b(o))},[jt(r.$slots,"button",{class:Pe({disabled:t.disabled})})],2),(w(),N(bp,null,[b(o)?(w(),z("div",Q5,[jt(r.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),t1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},xo={__name:"VerticalDivider",setup(t){return M(I),(n,s)=>(w(),z("div",t1))}};var n1={render(){return[]}};const s1={class:"icon-btn"},o1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},l1={class:"my-auto"},r1={class:"opacity-50"},a1=Be({__name:"NavControls",props:{persist:{default:!1}},setup(t){const n=t;M(I);const s=br.smaller("md"),{isFullscreen:o,toggle:l}=uu,r=F(()=>Cr.value?`?password=${Cr.value}`:""),a=F(()=>`/presenter/${Ne.value}${r.value}`),i=F(()=>`/${Ne.value}${r.value}`),c=U(),u=()=>{c.value&&ts.value&&c.value.contains(ts.value)&&ts.value.blur()},d=F(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=It(),f=It();return ds(()=>import("./DrawingControls.cac46047.js"),[]).then(h=>f.value=h.default),(h,y)=>{const k=H5,_=M5,C=F5,A=A5,B=b5,E=m5,L=c5,O=ku,W=e5,ae=Kv,de=qv,he=tr("RouterLink"),ve=Rv,Me=jv,Le=Cv,We=wv;return w(),z("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[e("div",{class:Pe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(d)]),onMouseleave:u},[b(zt)?me("v-if",!0):(w(),z("button",{key:0,class:"icon-btn",onClick:y[0]||(y[0]=(...Ce)=>b(l)&&b(l)(...Ce))},[b(o)?(w(),N(k,{key:0})):(w(),N(_,{key:1}))])),e("button",{class:Pe(["icon-btn",{disabled:!b(Uk)}]),onClick:y[1]||(y[1]=(...Ce)=>b(cn)&&b(cn)(...Ce))},[J(C)],2),e("button",{class:Pe(["icon-btn",{disabled:!b(qk)}]),title:"Next",onClick:y[2]||(y[2]=(...Ce)=>b(an)&&b(an)(...Ce))},[J(A)],2),b(zt)?me("v-if",!0):(w(),z("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:y[3]||(y[3]=Ce=>b(du)())},[J(B)])),b(Ar)?me("v-if",!0):(w(),z("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:y[4]||(y[4]=Ce=>b(vu)())},[b(ca)?(w(),N(E,{key:0})):(w(),N(L,{key:1}))])),J(xo),b(zt)?me("v-if",!0):(w(),z(Ae,{key:3},[!b(Pt)&&!b(s)&&b(m)?(w(),z(Ae,{key:0},[J(b(m)),J(xo)],64)):me("v-if",!0),b(Pt)?(w(),z("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:y[5]||(y[5]=Ce=>Ml.value=!b(Ml))},[b(Ml)?(w(),N(O,{key:0})):(w(),N(W,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),!b(ke).drawings.presenterOnly&&!b(zt)?(w(),z(Ae,{key:4},[e("button",{class:"icon-btn relative",title:"Drawing",onClick:y[6]||(y[6]=Ce=>Lt.value=!b(Lt))},[J(ae),b(Lt)?(w(),z("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:et({background:b(Bn).color})},null,4)):me("v-if",!0)]),J(xo)],64)):me("v-if",!0),b(zt)?me("v-if",!0):(w(),z(Ae,{key:5},[b(Pt)?(w(),N(he,{key:0,to:b(i),class:"icon-btn",title:"Play Mode"},{default:V(()=>[J(de)]),_:1},8,["to"])):me("v-if",!0),b(Ik)?(w(),N(he,{key:1,to:b(a),class:"icon-btn",title:"Presenter Mode"},{default:V(()=>[J(ve)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(w(),z(Ae,{key:6},[b(ke).download?(w(),z("button",{key:0,class:"icon-btn",onClick:y[8]||(y[8]=(...Ce)=>b(Er)&&b(Er)(...Ce))},[J(Me)])):me("v-if",!0)],64)),!b(Pt)&&b(ke).info&&!b(zt)?(w(),z("button",{key:7,class:"icon-btn",onClick:y[9]||(y[9]=Ce=>Hs.value=!b(Hs))},[J(Le)])):me("v-if",!0),!b(Pt)&&!b(zt)?(w(),N(e1,{key:8},{button:V(()=>[e("button",s1,[J(We)])]),menu:V(()=>[J(G5)]),_:1})):me("v-if",!0),b(zt)?me("v-if",!0):(w(),N(xo,{key:9})),e("div",o1,[e("div",l1,[p(jn(b(Ne))+" ",1),e("span",r1,"/ "+jn(b(Ou)),1)])]),J(b(n1))],34)],512)}}});var xu={render(){return[]}},Au={render(){return[]}};const i1={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},c1=Be({__name:"PresenterMouse",setup(t){return M(I),(n,s)=>{const o=ku;return b(Fl).cursor?(w(),z("div",i1,[J(o,{class:"absolute",style:et({left:`${b(Fl).cursor.x}%`,top:`${b(Fl).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),p1=Be({__name:"SlidesShow",props:{context:null},setup(t){M(I),ue(ct,()=>{var s,o;((s=ct.value)==null?void 0:s.meta)&&ct.value.meta.preload!==!1&&(ct.value.meta.__preloaded=!0),((o=Pl.value)==null?void 0:o.meta)&&Pl.value.meta.preload!==!1&&(Pl.value.meta.__preloaded=!0)},{immediate:!0});const n=It();return ds(()=>import("./DrawingLayer.09f4d755.js"),[]).then(s=>n.value=s.default),(s,o)=>(w(),z(Ae,null,[me(" Global Bottom "),J(b(Au)),me(" Slides "),(w(!0),z(Ae,null,io(b(Ie),l=>{var r,a;return w(),z(Ae,{key:l.path},[((r=l.meta)==null?void 0:r.__preloaded)||l===b(ct)?Bt((w(),N(b(da),{key:0,is:l==null?void 0:l.component,clicks:l===b(ct)?b(St):0,"clicks-elements":((a=l.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Pe(b(ua)(l)),route:l,context:t.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Hp,l===b(ct)]]):me("v-if",!0)],64)}),128)),me(" Global Top "),J(b(xu)),b(n)?(w(),N(b(n),{key:0})):me("v-if",!0),b(Pt)?me("v-if",!0):(w(),N(c1,{key:1}))],64))}}),u1=Be({__name:"Play",setup(t){M(I),Xg();const n=U();function s(r){var a;Xi.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?an():cn())}Yk(n);const o=F(()=>eg.value||Xi.value);It();const l=It();return ds(()=>import("./DrawingControls.cac46047.js"),[]).then(r=>l.value=r.default),(r,a)=>(w(),z(Ae,null,[e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr,max-content]",style:et(b(qp))},[J(wu,{class:"w-full h-full",style:et({background:"var(--slidev-slide-container-background, black)"}),width:b(va)?b(Sn).width.value:void 0,scale:b(So),onPointerdown:s},{default:V(()=>[J(p1,{context:"slide"})]),controls:V(()=>[e("div",{class:Pe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(o)?"opacity-100 right-0":"opacity-0 p-2",b(Qs)?"pointer-events-none":""]])},[J(a1,{class:"m-auto",persist:b(o)},null,8,["persist"])],2),!b(ke).drawings.presenterOnly&&!b(zt)&&b(l)?(w(),N(b(l),{key:0,class:"ml-0"})):me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),J(hv)],64))}});function Bu(t){const n=F(()=>t.value.path),s=F(()=>Ie.length-1),o=F(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),l=F(()=>ml(o.value)),r=F(()=>Ie.find(f=>f.path===`${o.value}`)),a=F(()=>{var f,h,y;return(y=(h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:y.id}),i=F(()=>{var f,h;return(h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.layout}),c=F(()=>Ie.find(f=>f.path===`${Math.min(Ie.length,o.value+1)}`)),u=F(()=>Ie.filter(f=>{var h,y;return(y=(h=f.meta)==null?void 0:h.slide)==null?void 0:y.title}).reduce((f,h)=>(ba(f,h),f),[])),d=F(()=>wa(u.value,r.value)),m=F(()=>_a(d.value));return{route:t,path:n,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:m}}function Cu(t,n,s){const o=U(0);Ve(()=>{ft.afterEach(async()=>{await Ve(),o.value+=1})});const l=F(()=>{var c,u;return o.value,((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),r=F(()=>{var c,u,d;return+((d=(u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?d:l.value.length)}),a=F(()=>s.value<Ie.length-1||t.value<r.value),i=F(()=>s.value>1||t.value>0);return{clicks:t,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:i}}const d1=["id"],ac=Be({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(t,{emit:n}){const s=t,o=Rt(s,"clicksElements",n),l=F(()=>({height:`${zp}px`,width:`${Fn}px`})),r=It();ds(()=>Promise.resolve().then(function(){return nv}),void 0).then(u=>r.value=u.default);const a=F(()=>s.clicks),i=Cu(a,s.nav.currentRoute,s.nav.currentPage),c=F(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return pt(I,Te({nav:{...s.nav,...i},configs:ke,themeConfigs:F(()=>ke.themeConfig)})),(u,d)=>{var m;return w(),z("div",{id:b(c),class:"slide-container",style:et(b(l))},[J(b(Au)),J(b(da),{is:(m=t.route)==null?void 0:m.component,"clicks-elements":b(o),"onUpdate:clicks-elements":d[0]||(d[0]=f=>xe(o)?o.value=f:null),clicks:b(a),"clicks-disabled":!1,class:Pe(b(ua)(t.route)),route:t.route},null,8,["is","clicks-elements","clicks","class","route"]),b(r)?(w(),N(b(r),{key:0,page:+t.route.path},null,8,["page"])):me("v-if",!0),J(b(xu))],12,d1)}}}),f1=Be({__name:"PrintSlide",props:{route:null},setup(t){var r;const n=t;M(I);const s=Te(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),o=F(()=>n.route),l=Bu(o);return(a,i)=>(w(),z(Ae,null,[J(ac,{"clicks-elements":s,"onUpdate:clicks-elements":i[0]||(i[0]=c=>xe(s)?s.value=c:null),clicks:0,nav:b(l),route:b(o)},null,8,["clicks-elements","nav","route"]),b(Is)?me("v-if",!0):(w(!0),z(Ae,{key:0},io(s.length,c=>(w(),N(ac,{key:c,clicks:c,nav:b(l),route:b(o)},null,8,["clicks","nav","route"]))),128))],64))}});const m1={id:"print-content"},h1=Be({__name:"PrintContainer",props:{width:null},setup(t){const n=t;M(I);const s=F(()=>n.width),o=F(()=>n.width/ln),l=F(()=>s.value/o.value),r=F(()=>l.value<ln?s.value/Fn:o.value*ln/Fn),a=Ie.slice(0,-1),i=F(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return pt(Np,r),(c,u)=>(w(),z("div",{id:"print-container",class:Pe(b(i))},[e("div",m1,[(w(!0),z(Ae,null,io(b(a),d=>(w(),N(f1,{key:d.path,route:d},null,8,["route"]))),128))]),jt(c.$slots,"controls")],2))}});const y1=Be({__name:"Print",setup(t){M(I);const n=An.canvasWidth,s=Math.round(n/An.aspectRatio)+1;function o(l,{slots:r}){if(r.default)return Ft("style",r.default())}return ao(()=>{va?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(l,r)=>(w(),z(Ae,null,[J(o,null,{default:V(()=>[p(" @page { size: "+jn(b(n))+"px "+jn(s)+"px; margin: 0px; } ",1)]),_:1}),e("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:et(b(qp))},[J(h1,{class:"w-full h-full",style:et({background:"var(--slidev-slide-container-background, black)"}),width:b(Sn).width.value},null,8,["style","width"])],4)],64))}});const g1={class:"slidev-layout end"},v1={__name:"end",setup(t){return M(I),(n,s)=>(w(),z("div",g1," END "))}};var b1=Kt(v1,[["__scopeId","data-v-024c70b4"]]);function ic(t){return t.startsWith("/")?"/talks/mentify/react-workshop/1-fundamental/"+t.slice(1):t}function w1(t,n=!1){const s=t&&["#","rgb","hsl"].some(l=>t.indexOf(l)===0),o={background:s?t:void 0,color:t&&!s?"white":void 0,backgroundImage:s?void 0:t?n?`linear-gradient(#0005, #0008), url(${ic(t)})`:`url("${ic(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const _1={class:"my-auto w-full"},hs=Be({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(t){const n=t;M(I);const s=F(()=>w1(n.background,!0));return(o,l)=>(w(),z("div",{class:"slidev-layout cover text-center",style:et(b(s))},[e("div",_1,[jt(o.$slots,"default")])],4))}}),k1=e("h2",null,"React Workshop",-1),x1=e("h1",null,"Part 1 : Fundamental",-1),A1={__name:"1",setup(t){const n={theme:"seriph",highlighter:"shiki",lineNumbers:!0,titleTemplate:"%s"};return M(I),(s,o)=>(w(),N(hs,te(ee(n)),{default:V(()=>[k1,x1]),_:1},16))}},B1={class:"slidev-layout statement"},C1={class:"my-auto"},E1={__name:"statement",setup(t){return M(I),(n,s)=>(w(),z("div",B1,[e("div",C1,[jt(n.$slots,"default")])]))}},D1=e("h1",null,'"React is a JavaScript library for building user interfaces"',-1),F1=e("p",null,[e("a",{href:"https://reactjs.org",target:"_blank",rel:"noopener"},"https://reactjs.org")],-1),S1={__name:"2",setup(t){const n={layout:"statement",srcSequence:"./chunks/1-what-is-react.md"};return M(I),(s,o)=>(w(),N(E1,te(ee(n)),{default:V(()=>[D1,F1]),_:1},16))}},j1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},$1=e("path",{fill:"currentColor",d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"},null,-1),O1=[$1];function M1(t,n){return w(),z("svg",j1,O1)}var T1={name:"mdi-linkedin",render:M1},P1="/talks/mentify/react-workshop/1-fundamental/images/daniyal.jpg";const R1={class:"slidev-layout default"},re={__name:"default",setup(t){return M(I),(n,s)=>(w(),z("div",R1,[jt(n.$slots,"default")]))}};const fl=t=>(Mn("data-v-f950e51e"),t=t(),Tn(),t),L1={grid:"~ gap-4",class:"grid-cols-2 h-full"},H1=fl(()=>e("div",{flex:"~",class:"items-center justify-center h-full"},[e("img",{class:"self-portrait w-3/6 rounded-md",src:P1})],-1)),I1={flex:"~",class:"items-center"},N1=fl(()=>e("h1",null,"Daniyal Ahmad Rizaldhi",-1)),z1=fl(()=>e("p",null,"Frontend Developer",-1)),q1={target:"blank",href:"https://www.linkedin.com/in/daniyal-ahmad-r/"},U1=p(),V1=fl(()=>e("span",null,"in/daniyal-ahmad-r",-1)),W1={__name:"3",setup(t){const n={srcSequence:"./chunks/1-what-is-react.md,./chunks/1.5-intro.md"};return M(I),(s,o)=>{const l=T1;return w(),N(re,te(ee(n)),{default:V(()=>[e("div",L1,[H1,e("div",I1,[e("div",null,[N1,z1,e("a",q1,[J(l),U1,V1])])])])]),_:1},16)}}};var Y1=Kt(W1,[["__scopeId","data-v-f950e51e"]]),K1="/talks/mentify/react-workshop/1-fundamental/images/sample-airbnb.png",X1="/talks/mentify/react-workshop/1-fundamental/images/sample-netflix.png",J1="/talks/mentify/react-workshop/1-fundamental/images/sample-react.png";const Z1=t=>(Mn("data-v-62006eea"),t=t(),Tn(),t),G1=Z1(()=>e("div",{grid:"~ gap-2",class:"grid-cols-[1fr,auto] h-full"},[e("div",null,[e("img",{src:K1}),e("img",{style:{transform:"translate(25px, 50px)"},src:X1}),e("img",{style:{transform:"translate(50px, 100px)"},src:J1})]),e("div",{flex:"~",class:"items-center"},[e("h1",null,"and more\u2026")])],-1)),Q1={__name:"4",setup(t){const n={srcSequence:"./chunks/1-what-is-react.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[G1]),_:1},16))}};var eb=Kt(Q1,[["__scopeId","data-v-62006eea"]]),tb="/talks/mentify/react-workshop/1-fundamental/images/popular-frontend-framework.png";const nb=e("div",{grid:"~ gap-4",class:"grid-rows-[1fr,auto] h-full"},[e("div",{class:"overflow-hidden"},[e("img",{class:"rounded-md",src:tb})]),e("caption",null,[e("a",{target:"blank",href:"https://risingstars.js.org/2021/en#section-framework"},"https://risingstars.js.org/2021/en#section-framework")])],-1),sb={__name:"5",setup(t){const n={srcSequence:"./chunks/1-what-is-react.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[nb]),_:1},16))}};var ob="/talks/mentify/react-workshop/1-fundamental/images/thinking-in-react-components.png";const lb=e("h1",null,"Think in React",-1),rb=e("div",{grid:"~ gap-4",class:"grid-cols-[1fr,400px]"},[e("div",null,[e("div",{flex:"~",class:"items-center p-4 bg-white rounded-md"},[e("img",{src:ob})]),e("p",null,[e("a",{href:"https://reactjs.org/docs/thinking-in-react.html",target:"_blank",rel:"noopener"},"https://reactjs.org/docs/thinking-in-react.html")])]),e("div",null,[e("ol",null,[e("li",null,[e("strong",null,"FilterableProductTable (orange)"),e("br"),p(" Contains the entirety of the example")]),e("li",null,[e("strong",null,"SearchBar (blue)"),e("br"),p(" Receives all user input")]),e("li",null,[e("strong",null,"ProductTable (green)"),e("br"),p(" Displays and filters the data collection based on user input")]),e("li",null,[e("strong",null,"ProductCategoryRow (turquoise)"),e("br"),p(" Displays a heading for each category")]),e("li",null,[e("strong",null,"ProductRow (red)"),e("br"),p(" Displays a row for each product")])])])],-1),ab={__name:"6",setup(t){const n={srcSequence:"./chunks/1-what-is-react.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[lb,rb]),_:1},16))}},ib=e("div",{grid:"~",class:"grid-rows-[auto,1fr,auto] h-full"},[e("h1",null,"Prerequisites"),e("div",{grid:"~ gap-4",class:"grid-cols-3 text-center items-center"},[e("div",null,[e("h1",null,"HTML"),e("p",null,"Hypertext Markup Language")]),e("div",null,[e("h1",null,"CSS"),e("p",null,"Cascade Stylesheet")]),e("div",null,[e("h1",null,"JS"),e("p",null,"Javascript")])]),e("div",null,[e("blockquote",null,[e("p",null,[e("a",{href:"https://www.w3schools.com/",target:"_blank",rel:"noopener"},"https://www.w3schools.com/")]),e("p",null,[e("a",{href:"https://developer.mozilla.org/en-US/",target:"_blank",rel:"noopener"},"https://developer.mozilla.org/en-US/")])])])],-1),cb={__name:"7",setup(t){const n={srcSequence:"./chunks/1-what-is-react.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[ib]),_:1},16))}},pb=e("div",{grid:"~",class:"grid-rows-[auto,1fr] h-full"},[e("h1",null,"Preparation"),e("div",{grid:"~ gap-4",class:"grid-cols-2 text-center items-center"},[e("div",null,[e("h1",null,"NodeJS"),e("p",null,[e("a",{href:"https://nodejs.org/",target:"_blank",rel:"noopener"},"https://nodejs.org/")])]),e("div",null,[e("h1",null,"Text Editor"),e("p",null,[e("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VS Code"),p("/"),e("a",{href:"https://www.sublimetext.com/",target:"_blank",rel:"noopener"},"Sublime"),p("/"),e("a",{href:"https://notepad-plus-plus.org/",target:"_blank",rel:"noopener"},"Notepad++")])])])],-1),ub={__name:"8",setup(t){const n={srcSequence:"./chunks/1-what-is-react.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[pb]),_:1},16))}},db=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<!"),e("span",{style:{color:"#429988"}},"DOCTYPE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"html"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"lang"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"en"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"meta"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"charset"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"UTF-8"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Super Simple"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<!"),e("span",{style:{color:"#2F8A89"}},"DOCTYPE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"lang"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"en"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"meta"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"charset"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"UTF-8"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Super Simple"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),fb={__name:"9",setup(t){const n={srcSequence:"./chunks/1-what-is-react.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[db]),_:1},16))}},mb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<!"),e("span",{style:{color:"#429988"}},"DOCTYPE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"html"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"lang"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"en"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"meta"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"charset"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"UTF-8"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Super Simple"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://unpkg.com/react@18/umd/react.development.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://unpkg.com/react-dom@18/umd/react-dom.development.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<!"),e("span",{style:{color:"#2F8A89"}},"DOCTYPE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"lang"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"en"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"meta"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"charset"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"UTF-8"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Super Simple"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://unpkg.com/react@18/umd/react.development.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://unpkg.com/react-dom@18/umd/react-dom.development.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),hb={__name:"10",setup(t){const n={srcSequence:"./chunks/1-what-is-react.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[mb]),_:1},16))}},yb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<!"),e("span",{style:{color:"#429988"}},"DOCTYPE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"html"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"lang"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"en"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"meta"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"charset"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"UTF-8"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Super Simple"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://unpkg.com/react@18/umd/react.development.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://unpkg.com/react-dom@18/umd/react-dom.development.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"id"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"like-button"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<!"),e("span",{style:{color:"#2F8A89"}},"DOCTYPE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"lang"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"en"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"meta"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"charset"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"UTF-8"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Super Simple"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://unpkg.com/react@18/umd/react.development.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://unpkg.com/react-dom@18/umd/react-dom.development.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"id"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"like-button"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),gb={__name:"11",setup(t){const n={srcSequence:"./chunks/1-what-is-react.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[yb]),_:1},16))}},vb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<!"),e("span",{style:{color:"#429988"}},"DOCTYPE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"html"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"lang"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"en"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"meta"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"charset"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"UTF-8"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Super Simple"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://unpkg.com/react@18/umd/react.development.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://unpkg.com/react-dom@18/umd/react-dom.development.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"id"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"like-button"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"LikeButton"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#A1B567"}},"alert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Like!!"'),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"React"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"createElement"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"button"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onClick"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"},"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"\u2764\uFE0F"'),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<!"),e("span",{style:{color:"#2F8A89"}},"DOCTYPE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"lang"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"en"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"meta"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"charset"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"UTF-8"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Super Simple"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://unpkg.com/react@18/umd/react.development.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://unpkg.com/react-dom@18/umd/react-dom.development.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"id"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"like-button"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"LikeButton"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#6C7834"}},"alert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Like!!"'),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"React"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"createElement"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"button"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onClick"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"\u2764\uFE0F"'),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),bb={__name:"12",setup(t){const n={srcSequence:"./chunks/1-what-is-react.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[vb]),_:1},16))}},wb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<!"),e("span",{style:{color:"#429988"}},"DOCTYPE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"html"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"lang"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"en"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"meta"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"charset"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"UTF-8"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Super Simple"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://unpkg.com/react@18/umd/react.development.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://unpkg.com/react-dom@18/umd/react-dom.development.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"id"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"like-button"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"LikeButton"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#A1B567"}},"alert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Like!!"'),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"React"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"createElement"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"button"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onClick"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"},"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"\u2764\uFE0F"'),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"root"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ReactDOM"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"createRoot"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"document"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"getElementById"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"like-button"'),e("span",{style:{color:"#858585"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"root"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"render"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"React"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"createElement"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"LikeButton"),e("span",{style:{color:"#858585"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<!"),e("span",{style:{color:"#2F8A89"}},"DOCTYPE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"lang"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"en"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"meta"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"charset"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"UTF-8"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Super Simple"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://unpkg.com/react@18/umd/react.development.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://unpkg.com/react-dom@18/umd/react-dom.development.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"id"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"like-button"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"LikeButton"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#6C7834"}},"alert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Like!!"'),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"React"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"createElement"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"button"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onClick"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"\u2764\uFE0F"'),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"root"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ReactDOM"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"createRoot"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"document"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"getElementById"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"like-button"'),e("span",{style:{color:"#8E8F8B"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"root"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"render"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"React"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"createElement"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"LikeButton"),e("span",{style:{color:"#8E8F8B"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),_b={__name:"13",setup(t){const n={srcSequence:"./chunks/1-what-is-react.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[wb]),_:1},16))}};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Eu(t){return typeof t=="undefined"||t===null}function kb(t){return typeof t=="object"&&t!==null}function xb(t){return Array.isArray(t)?t:Eu(t)?[]:[t]}function Ab(t,n){var s,o,l,r;if(n)for(r=Object.keys(n),s=0,o=r.length;s<o;s+=1)l=r[s],t[l]=n[l];return t}function Bb(t,n){var s="",o;for(o=0;o<n;o+=1)s+=t;return s}function Cb(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var Eb=Eu,Db=kb,Fb=xb,Sb=Bb,jb=Cb,$b=Ab,fa={isNothing:Eb,isObject:Db,toArray:Fb,repeat:Sb,isNegativeZero:jb,extend:$b};function Du(t,n){var s="",o=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(s+='in "'+t.mark.name+'" '),s+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!n&&t.mark.snippet&&(s+=`

`+t.mark.snippet),o+" "+s):o}function to(t,n){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=n,this.message=Du(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}to.prototype=Object.create(Error.prototype);to.prototype.constructor=to;to.prototype.toString=function(n){return this.name+": "+Du(this,n)};var kn=to,Ob=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Mb=["scalar","sequence","mapping"];function Tb(t){var n={};return t!==null&&Object.keys(t).forEach(function(s){t[s].forEach(function(o){n[String(o)]=s})}),n}function Pb(t,n){if(n=n||{},Object.keys(n).forEach(function(s){if(Ob.indexOf(s)===-1)throw new kn('Unknown option "'+s+'" is met in definition of "'+t+'" YAML type.')}),this.options=n,this.tag=t,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=Tb(n.styleAliases||null),Mb.indexOf(this.kind)===-1)throw new kn('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var Ke=Pb;function cc(t,n){var s=[];return t[n].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function Rb(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(l){l.multi?(t.multi[l.kind].push(l),t.multi.fallback.push(l)):t[l.kind][l.tag]=t.fallback[l.tag]=l}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return t}function Br(t){return this.extend(t)}Br.prototype.extend=function(n){var s=[],o=[];if(n instanceof Ke)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new kn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof Ke))throw new kn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new kn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new kn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof Ke))throw new kn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Br.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=cc(l,"implicit"),l.compiledExplicit=cc(l,"explicit"),l.compiledTypeMap=Rb(l.compiledImplicit,l.compiledExplicit),l};var Lb=Br,Hb=new Ke("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),Ib=new Ke("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),Nb=new Ke("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),zb=new Lb({explicit:[Hb,Ib,Nb]});function qb(t){if(t===null)return!0;var n=t.length;return n===1&&t==="~"||n===4&&(t==="null"||t==="Null"||t==="NULL")}function Ub(){return null}function Vb(t){return t===null}var Wb=new Ke("tag:yaml.org,2002:null",{kind:"scalar",resolve:qb,construct:Ub,predicate:Vb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Yb(t){if(t===null)return!1;var n=t.length;return n===4&&(t==="true"||t==="True"||t==="TRUE")||n===5&&(t==="false"||t==="False"||t==="FALSE")}function Kb(t){return t==="true"||t==="True"||t==="TRUE"}function Xb(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var Jb=new Ke("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Yb,construct:Kb,predicate:Xb,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function Zb(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function Gb(t){return 48<=t&&t<=55}function Qb(t){return 48<=t&&t<=57}function e0(t){if(t===null)return!1;var n=t.length,s=0,o=!1,l;if(!n)return!1;if(l=t[s],(l==="-"||l==="+")&&(l=t[++s]),l==="0"){if(s+1===n)return!0;if(l=t[++s],l==="b"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!Zb(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!Gb(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<n;s++)if(l=t[s],l!=="_"){if(!Qb(t.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function t0(t){var n=t,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function n0(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!fa.isNegativeZero(t)}var s0=new Ke("tag:yaml.org,2002:int",{kind:"scalar",resolve:e0,construct:t0,predicate:n0,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),o0=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function l0(t){return!(t===null||!o0.test(t)||t[t.length-1]==="_")}function r0(t){var n,s;return n=t.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var a0=/^[-+]?[0-9]+e/;function i0(t,n){var s;if(isNaN(t))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(fa.isNegativeZero(t))return"-0.0";return s=t.toString(10),a0.test(s)?s.replace("e",".e"):s}function c0(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||fa.isNegativeZero(t))}var p0=new Ke("tag:yaml.org,2002:float",{kind:"scalar",resolve:l0,construct:r0,predicate:c0,represent:i0,defaultStyle:"lowercase"}),u0=zb.extend({implicit:[Wb,Jb,s0,p0]}),d0=u0,Fu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Su=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function f0(t){return t===null?!1:Fu.exec(t)!==null||Su.exec(t)!==null}function m0(t){var n,s,o,l,r,a,i,c=0,u=null,d,m,f;if(n=Fu.exec(t),n===null&&(n=Su.exec(t)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,l=+n[3],!n[4])return new Date(Date.UTC(s,o,l));if(r=+n[4],a=+n[5],i=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(d=+n[10],m=+(n[11]||0),u=(d*60+m)*6e4,n[9]==="-"&&(u=-u)),f=new Date(Date.UTC(s,o,l,r,a,i,c)),u&&f.setTime(f.getTime()-u),f}function h0(t){return t.toISOString()}var y0=new Ke("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:f0,construct:m0,instanceOf:Date,represent:h0});function g0(t){return t==="<<"||t===null}var v0=new Ke("tag:yaml.org,2002:merge",{kind:"scalar",resolve:g0}),ma=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function b0(t){if(t===null)return!1;var n,s,o=0,l=t.length,r=ma;for(s=0;s<l;s++)if(n=r.indexOf(t.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function w0(t){var n,s,o=t.replace(/[\r\n=]/g,""),l=o.length,r=ma,a=0,i=[];for(n=0;n<l;n++)n%4===0&&n&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(o.charAt(n));return s=l%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function _0(t){var n="",s=0,o,l,r=t.length,a=ma;for(o=0;o<r;o++)o%3===0&&o&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+t[o];return l=r%3,l===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):l===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):l===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function k0(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var x0=new Ke("tag:yaml.org,2002:binary",{kind:"scalar",resolve:b0,construct:w0,predicate:k0,represent:_0}),A0=Object.prototype.hasOwnProperty,B0=Object.prototype.toString;function C0(t){if(t===null)return!0;var n=[],s,o,l,r,a,i=t;for(s=0,o=i.length;s<o;s+=1){if(l=i[s],a=!1,B0.call(l)!=="[object Object]")return!1;for(r in l)if(A0.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function E0(t){return t!==null?t:[]}var D0=new Ke("tag:yaml.org,2002:omap",{kind:"sequence",resolve:C0,construct:E0}),F0=Object.prototype.toString;function S0(t){if(t===null)return!0;var n,s,o,l,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(o=a[n],F0.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[n]=[l[0],o[l[0]]]}return!0}function j0(t){if(t===null)return[];var n,s,o,l,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1)o=a[n],l=Object.keys(o),r[n]=[l[0],o[l[0]]];return r}var $0=new Ke("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:S0,construct:j0}),O0=Object.prototype.hasOwnProperty;function M0(t){if(t===null)return!0;var n,s=t;for(n in s)if(O0.call(s,n)&&s[n]!==null)return!1;return!0}function T0(t){return t!==null?t:{}}var P0=new Ke("tag:yaml.org,2002:set",{kind:"mapping",resolve:M0,construct:T0});d0.extend({implicit:[y0,v0],explicit:[x0,D0,$0,P0]});function pc(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"\x85":t===95?"\xA0":t===76?"\u2028":t===80?"\u2029":""}var R0=new Array(256),L0=new Array(256);for(var qn=0;qn<256;qn++)R0[qn]=pc(qn)?1:0,L0[qn]=pc(qn);function H0(t){return Array.from(new Set(t))}function uc(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function I0(t,n){if(!n||n==="all"||n==="*")return uc(1,t+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...uc(+l,r?+r+1:t+1))}return H0(s).filter(o=>o<=t).sort((o,l)=>o-l)}const ha=Be({__name:"CodeHighlightController",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0}},setup(t){const n=t;M(I);const s=M(Ts),o=M(_n),l=M(Ps);function r(c=5){const u=[],d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=d.length;for(let f=0;f<c;f++)u.push(d.charAt(Math.floor(Math.random()*m)));return u.join("")}const a=U(),i=Pn();return us(()=>{const c=n.at==null?o==null?void 0:o.value.length:n.at,u=F(()=>l!=null&&l.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(c||0)),n.ranges.length-1)),d=F(()=>n.ranges[u.value]||"");if(n.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),f=_h(n.ranges.length-1).map(h=>m+h);o!=null&&o.value&&(o.value.push(...f),cl(()=>f.forEach(h=>dr(o.value,h)),i))}ao(()=>{if(!a.value)return;const f=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const h of f){const y=Array.from(h.querySelectorAll(".line")),k=I0(y.length,d.value);y.forEach((_,C)=>{const A=k.includes(C+1);_.classList.toggle(bn,!0),_.classList.toggle("highlighted",A),_.classList.toggle("dishonored",!A)})}})}),(c,u)=>(w(),z("div",{ref_key:"el",ref:a},[jt(c.$slots,"default")],512))}});const ya=t=>(Mn("data-v-3335e5a1"),t=t(),Tn(),t),N0=ya(()=>e("h1",null,"Super Simple Sample",-1)),z0={grid:"~ cols-2 gap-2",class:"overflow-hidden"},q0={flex:"~",class:"code-snippet-wrapper overflow-hidden"},U0=ya(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<!"),e("span",{style:{color:"#429988"}},"DOCTYPE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"html"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"lang"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"en"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"meta"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"charset"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"UTF-8"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Super Simple"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://unpkg.com/react@18/umd/react.development.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://unpkg.com/react-dom@18/umd/react-dom.development.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"id"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"like-button"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"LikeButton"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#A1B567"}},"alert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Like!!"'),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"React"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"createElement"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"button"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onClick"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"},"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"\u2764\uFE0F"'),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"root"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ReactDOM"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"createRoot"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"document"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"getElementById"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"like-button"'),e("span",{style:{color:"#858585"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"root"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"render"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"React"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"createElement"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"LikeButton"),e("span",{style:{color:"#858585"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<!"),e("span",{style:{color:"#2F8A89"}},"DOCTYPE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"lang"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"en"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"meta"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"charset"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"UTF-8"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Super Simple"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://unpkg.com/react@18/umd/react.development.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://unpkg.com/react-dom@18/umd/react-dom.development.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"id"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"like-button"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"LikeButton"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#6C7834"}},"alert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Like!!"'),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"React"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"createElement"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"button"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onClick"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"\u2764\uFE0F"'),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"root"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ReactDOM"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"createRoot"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"document"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"getElementById"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"like-button"'),e("span",{style:{color:"#8E8F8B"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"root"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"render"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"React"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"createElement"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"LikeButton"),e("span",{style:{color:"#8E8F8B"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1)),V0=ya(()=>e("div",{flex:"~"},[e("iframe",{class:"flex-grow",src:"https://codesandbox.io/embed/mentify-1-super-simple-sample-712gyc?fontsize=14&hidenavigation=1&theme=dark",title:"mentify-1-super-simple-sample",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})],-1)),W0={__name:"14",setup(t){const n={class:"grid grid-rows-[auto,1fr] overflow-hidden",srcSequence:"./chunks/2-super-simple-sample.md"};return M(I),(s,o)=>{const l=ha;return w(),N(re,te(ee(n)),{default:V(()=>[N0,e("div",z0,[e("div",q0,[J(l,dn({},{ranges:["all","6-7","10","12-18","20-21","all"]}),{default:V(()=>[U0]),_:1},16)]),V0])]),_:1},16)}}};var Y0=Kt(W0,[["__scopeId","data-v-3335e5a1"]]);const K0=e("div",{class:"text-center"},[e("h1",null,"JSX"),e("p",null,"Javascript-XML")],-1),X0={grid:"~ cols-2 gap-2"},J0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"LikeButton"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"alert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Like!!"'),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"React"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"createElement"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"button"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onClick"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"},"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"\u2764\uFE0F"'),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"LikeButton"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"alert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Like!!"'),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"React"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"createElement"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"button"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onClick"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"\u2764\uFE0F"'),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Z0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"LikeButton"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"alert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Like!!"'),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onClick"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#858585"}},"}>"),e("span",{style:{color:"#DBD7CA"}},"\u2764\uFE0F"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"LikeButton"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"alert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Like!!"'),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onClick"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"}>"),e("span",{style:{color:"#393A34"}},"\u2764\uFE0F"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),G0=e("blockquote",null,[e("p",null,[e("a",{href:"https://reactjs.org/docs/introducing-jsx.html",target:"_blank",rel:"noopener"},"https://reactjs.org/docs/introducing-jsx.html")])],-1),Q0={__name:"15",setup(t){const n={class:"grid grid-rows-[auto,1fr,auto]",srcSequence:"./chunks/2-super-simple-sample.md"};return M(I),(s,o)=>{const l=ha;return w(),N(re,te(ee(n)),{default:V(()=>[K0,e("div",X0,[e("div",null,[J(l,dn({},{ranges:["6"]}),{default:V(()=>[J0]),_:1},16)]),e("div",null,[J(l,dn({},{ranges:["6"]}),{default:V(()=>[Z0]),_:1},16)])]),G0]),_:1},16)}}};const ga=t=>(Mn("data-v-3fd8a3c4"),t=t(),Tn(),t),ew=ga(()=>e("h1",null,"Super Simple Sample (JSX)",-1)),tw={grid:"~ cols-2 gap-2",class:"overflow-hidden"},nw={flex:"~",class:"code-snippet-wrapper overflow-hidden"},sw=ga(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<!"),e("span",{style:{color:"#429988"}},"DOCTYPE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"html"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"lang"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"en"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"meta"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"charset"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"UTF-8"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Super Simple (JSX)"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://unpkg.com/react@18/umd/react.development.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://unpkg.com/react-dom@18/umd/react-dom.development.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://unpkg.com/@babel/standalone/babel.min.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"id"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"like-button"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    <"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"type"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"text/babel"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"LikeButton"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"handleClick"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#A1B567"}},"alert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Like!!"'),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onClick"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#B8A965"}},"handleClick"),e("span",{style:{color:"#858585"}},"}>"),e("span",{style:{color:"#DBD7CA"}},"\u2764\uFE0F"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"root"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ReactDOM"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"createRoot"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"document"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"getElementById"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"like-button"'),e("span",{style:{color:"#858585"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"root"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"render"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"React"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"createElement"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"LikeButton"),e("span",{style:{color:"#858585"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"html"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<!"),e("span",{style:{color:"#2F8A89"}},"DOCTYPE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"lang"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"en"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"meta"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"charset"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"UTF-8"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Super Simple (JSX)"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://unpkg.com/react@18/umd/react.development.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://unpkg.com/react-dom@18/umd/react-dom.development.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://unpkg.com/@babel/standalone/babel.min.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"id"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"like-button"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    <"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"type"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"text/babel"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"LikeButton"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#6C7834"}},"alert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Like!!"'),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onClick"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#8C862B"}},"handleClick"),e("span",{style:{color:"#8E8F8B"}},"}>"),e("span",{style:{color:"#393A34"}},"\u2764\uFE0F"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"root"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ReactDOM"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"createRoot"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"document"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"getElementById"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"like-button"'),e("span",{style:{color:"#8E8F8B"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"root"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"render"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"React"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"createElement"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"LikeButton"),e("span",{style:{color:"#8E8F8B"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"html"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1)),ow=ga(()=>e("div",{flex:"~"},[e("iframe",{class:"flex-grow",src:"https://codesandbox.io/embed/mentify-2-jsx-r22s0y?fontsize=14&hidenavigation=1&theme=dark",title:"mentify-2-jsx",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})],-1)),lw={__name:"16",setup(t){const n={class:"grid grid-rows-[auto,1fr] overflow-hidden",srcSequence:"./chunks/2-super-simple-sample.md"};return M(I),(s,o)=>{const l=ha;return w(),N(re,te(ee(n)),{default:V(()=>[ew,e("div",tw,[e("div",nw,[J(l,dn({},{ranges:["all","8","12","17","all"]}),{default:V(()=>[sw]),_:1},16)]),ow])]),_:1},16)}}};var rw=Kt(lw,[["__scopeId","data-v-3fd8a3c4"]]);const aw=e("h1",null,"Create React App",-1),iw=e("p",null,[e("a",{href:"https://create-react-app.dev",target:"_blank",rel:"noopener"},"https://create-react-app.dev")],-1),cw=e("p",null,"A tool to build a ReactJS App",-1),pw={__name:"17",setup(t){const n={layout:"cover",srcSequence:"./chunks/3-cra-intro.md"};return M(I),(s,o)=>(w(),N(hs,te(ee(n)),{default:V(()=>[aw,iw,cw]),_:1},16))}},uw=e("h1",null,"Project Initialization",-1),dw=e("br",null,null,-1),fw=p(" In your terminal: "),mw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Create project directory using CRA")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"npx create-react-app awesome-react-app")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Move into created directory")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"cd"),e("span",{style:{color:"#DBD7CA"}}," awesome-react-app")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Start the project")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"npm start")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Create project directory using CRA")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"npx create-react-app awesome-react-app")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Move into created directory")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"cd"),e("span",{style:{color:"#393A34"}}," awesome-react-app")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Start the project")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"npm start")])])])],-1),hw=e("br",null,null,-1),yw=e("blockquote",null,[e("p",null,[p("The project will listen on port "),e("a",{href:"http://localhost:3000",target:"_blank",rel:"noopener"},"http://localhost:3000"),p(" by default.")])],-1),gw={__name:"18",setup(t){const n={srcSequence:"./chunks/3-cra-intro.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[uw,dw,fw,mw,hw,yw]),_:1},16))}};var vw="/talks/mentify/react-workshop/1-fundamental/images/cra-initial-page.png";const bw=e("h1",null,"First Hello World",-1),ww=e("img",{class:"rounded-md",src:vw},null,-1),_w={__name:"19",setup(t){const n={srcSequence:"./chunks/3-cra-intro.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[bw,ww]),_:1},16))}};var kw="/talks/mentify/react-workshop/1-fundamental/images/cra-initial-dir.png";const xw=e("h1",null,"Project Structure",-1),Aw=e("img",{class:"rounded-md",src:kw},null,-1),Bw=e("div",{class:"rounded-md absolute right-0 bottom-0 bg-opacity-50 bg-gray-800 w-1/2 backdrop-blur-lg backdrop-filter p-4"},[e("h3",null,"Note"),e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"public"),p(),e("br"),p(" used to store static assets")])]),e("li",null,[e("p",null,[e("strong",null,"src"),p(),e("br"),p(" all the works")])])]),e("blockquote",null,[e("p",null,[e("a",{href:"https://create-react-app.dev/docs/folder-structure",target:"_blank",rel:"noopener"},"https://create-react-app.dev/docs/folder-structure")])])],-1),Cw={__name:"20",setup(t){const n={srcSequence:"./chunks/3-cra-intro.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[xw,Aw,Bw]),_:1},16))}},Ew=e("h1",null,"Component",-1),Dw=e("p",null,"Functional Component + React Hooks",-1),Fw={__name:"21",setup(t){const n={layout:"cover",srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>(w(),N(hs,te(ee(n)),{default:V(()=>[Ew,Dw]),_:1},16))}};const Nt=t=>(Mn("data-v-140fb4c5"),t=t(),Tn(),t),Sw=Nt(()=>e("h1",null,"Component",-1)),jw=Nt(()=>e("p",null,"Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Like a piece of LEGO block.",-1)),$w=Nt(()=>e("p",null,"There are two kind of component in React:",-1)),Ow=Nt(()=>e("ul",null,[e("li",null,"Functional component"),e("li",null,"Class component")],-1)),Mw=Nt(()=>e("br",null,null,-1)),Tw=Nt(()=>e("hr",null,null,-1)),Pw=Nt(()=>e("br",null,null,-1)),Rw={grid:"~",class:"grid-cols-2 gap-4"},Lw=Nt(()=>e("div",null,[e("h3",null,"Functional Component"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Welcome"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"props"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Hello, "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#B8A965"}},"props"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"}</"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Welcome"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"props"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Hello, "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#8C862B"}},"props"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"}</"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])])],-1)),Hw={class:"vlick-blurred"},Iw=Nt(()=>e("h3",null,"Class Component",-1)),Nw=Nt(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Welcome"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"React"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"Component"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"render"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Hello, "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"props"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"}</"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Welcome"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"React"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"Component"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"render"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Hello, "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"props"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"}</"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1)),zw=[Iw,Nw],qw={__name:"22",setup(t){const n={srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>{const l=ta("click-hide");return w(),N(re,te(ee(n)),{default:V(()=>[Sw,jw,$w,Ow,Mw,Tw,Pw,e("div",Rw,[Lw,Bt((w(),z("div",Hw,zw)),[[l]])])]),_:1},16)}}};var Uw=Kt(qw,[["__scopeId","data-v-140fb4c5"]]);const Vw=e("h1",null,"Component (2)",-1),Ww=e("br",null,null,-1),Yw=e("p",null,"A component may have :",-1),Kw=e("ul",null,[e("li",null,"Props"),e("li",null,"State + Lifecycle"),e("li",null,"Handling Event")],-1),Xw={__name:"23",setup(t){const n={srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[Vw,Ww,Yw,Kw]),_:1},16))}},Jw=e("h1",null,"Props",-1),Zw=e("p",null,"A value that we pass into a component. It can be anything.",-1),Gw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"# "),e("span",{style:{color:"#B8A965"}},"Child"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Component")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Welcome"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"props"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Hello, "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#B8A965"}},"props"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"}</"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"# "),e("span",{style:{color:"#B8A965"}},"Parent"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Component")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"Welcome"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"name"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#C98A7D"}},'"Daniyal"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"# "),e("span",{style:{color:"#8C862B"}},"Child"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Component")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Welcome"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"props"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Hello, "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#8C862B"}},"props"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"}</"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"# "),e("span",{style:{color:"#8C862B"}},"Parent"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Component")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#B58451"}},"Welcome"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"name"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#B56959"}},'"Daniyal"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Qw=e("p",null,[p("Eventhough, there is a reserved props, "),e("code",null,"children")],-1),e_={__name:"24",setup(t){const n={srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[Jw,Zw,Gw,Qw]),_:1},16))}},t_=e("h1",null,"Props.children",-1),n_=e("p",null,[e("code",null,"children"),p(" prop is used to pass element as child of an element.")],-1),s_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"# "),e("span",{style:{color:"#B8A965"}},"Child"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Component")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Title"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"props"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">{"),e("span",{style:{color:"#B8A965"}},"props"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"children"),e("span",{style:{color:"#858585"}},"}</"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"# "),e("span",{style:{color:"#B8A965"}},"Parent"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Component")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"Title"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"\u{1F525} Javascript is Awesome \u{1F525}"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#E0A569"}},"Title"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"# "),e("span",{style:{color:"#8C862B"}},"Child"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Component")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Title"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"props"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">{"),e("span",{style:{color:"#8C862B"}},"props"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"children"),e("span",{style:{color:"#8E8F8B"}},"}</"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"# "),e("span",{style:{color:"#8C862B"}},"Parent"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Component")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#B58451"}},"Title"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"\u{1F525} Javascript is Awesome \u{1F525}"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#B58451"}},"Title"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),o_={__name:"25",setup(t){const n={srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[t_,n_,s_]),_:1},16))}},l_=e("div",null,[e("h1",null,"State + Lifecycle"),e("p",null,[p("State is value that lives in component, lifecycle is how the component lives. At the beginning, state and lifecycle only exist in "),e("strong",null,"Class Component"),p(" until "),e("strong",null,"Hooks"),p(" come.")]),e("hr"),e("h2",null,"State"),e("br")],-1),r_=e("div",{grid:"~",class:"grid-cols-2 gap-4"},[e("div",{flex:"~ col"},[e("h5",{class:"mb-2"},"Class Component"),e("iframe",{class:"flex-grow",src:"https://codesandbox.io/embed/mentify-3-state-pjqiq0?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FCounter.jsx&theme=dark&view=editor",style:{width:"100%",border:"0","border-radius":"4px",overflow:"hidden"},title:"mentify-3-state-class",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})]),e("div",{flex:"~ col"},[e("h5",{class:"mb-2"},"Functional Component"),e("iframe",{class:"flex-grow",src:"https://codesandbox.io/embed/exciting-ives-yy2stw?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FCounter.jsx&theme=dark&view=editor",style:{width:"100%",border:"0","border-radius":"4px",overflow:"hidden"},title:"mentify-3-state-functional",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})])],-1),a_={__name:"26",setup(t){const n={class:"grid grid-rows-[auto,1fr]",srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[l_,r_]),_:1},16))}};var i_="/talks/mentify/react-workshop/1-fundamental/images/react-lifecycle.png";const c_=e("h2",null,"Lifecycle",-1),p_=e("div",{flex:"~",class:"items-center justify-center"},[e("img",{class:"rounded-md w-4/5",src:i_})],-1),u_=e("blockquote",null,[e("p",null,[e("a",{href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener"},"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/")]),e("p",null,[e("a",{href:"https://reactjs.org/docs/state-and-lifecycle.html",target:"_blank",rel:"noopener"},"https://reactjs.org/docs/state-and-lifecycle.html")])],-1),d_={__name:"27",setup(t){const n={class:"grid grid-rows-[auto,1fr,auto] gap-2",srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[c_,p_,u_]),_:1},16))}},f_=e("h2",null,"Lifecycle (2)",-1),m_=e("div",{grid:"~ cols-2 gap-4"},[e("div",{flex:"~ col"},[e("h5",{class:"mb-4"},"Class Component"),e("iframe",{class:"flex-grow",src:"https://codesandbox.io/embed/mentify-3-lifecycle-class-mgmuqq?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FLifecycle.jsx&theme=dark&view=editor",style:{width:"100%",border:"0","border-radius":"4px",overflow:"hidden"},title:"mentify-3-lifecycle-class",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})]),e("div",{flex:"~ col"},[e("h5",{class:"mb-4"},"Functional Component"),e("iframe",{class:"flex-grow",src:"https://codesandbox.io/embed/mentify-3-lifecycle-functional-hx5o2k?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FLifecycle.jsx&theme=dark&view=editor",style:{width:"100%",border:"0","border-radius":"4px",overflow:"hidden"},title:"mentify-3-lifecycle-functional",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})])],-1),h_={__name:"28",setup(t){const n={class:"grid grid-rows-[auto,1fr] gap-2",srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[f_,m_]),_:1},16))}};const ys=t=>(Mn("data-v-677a0158"),t=t(),Tn(),t),y_=ys(()=>e("h1",null,"Hooks",-1)),g_=ys(()=>e("p",null,"Hooks allow you to reuse stateful logic without changing your component hierarchy.",-1)),v_=p("Available hooks : "),b_=ys(()=>e("li",null,"useState",-1)),w_=ys(()=>e("li",null,"useEffect",-1)),__={class:"vlick-blurred"},k_=p("useContext"),x_=[k_],A_={class:"vlick-blurred"},B_=p("useReducer"),C_=[B_],E_={class:"vlick-blurred"},D_=p("useCallback"),F_=[D_],S_={class:"vlick-blurred"},j_=p("useMemo"),$_=[j_],O_={class:"vlick-blurred"},M_=p("useRef"),T_=[M_],P_=ys(()=>e("br",null,null,-1)),R_=ys(()=>e("blockquote",null,[e("p",null,[e("a",{href:"https://reactjs.org/docs/hooks-intro.html",target:"_blank",rel:"noopener"},"https://reactjs.org/docs/hooks-intro.html")])],-1)),L_={__name:"29",setup(t){const n={clicks:1,srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>{const l=ta("click-hide");return w(),N(re,te(ee(n)),{default:V(()=>[y_,g_,e("p",null,[v_,e("ul",null,[b_,w_,Bt((w(),z("li",__,x_)),[[l,1]]),Bt((w(),z("li",A_,C_)),[[l,1]]),Bt((w(),z("li",E_,F_)),[[l,1]]),Bt((w(),z("li",S_,$_)),[[l,1]]),Bt((w(),z("li",O_,T_)),[[l,1]])])]),P_,R_]),_:1},16)}}};var H_=Kt(L_,[["__scopeId","data-v-677a0158"]]);const I_=e("h2",null,"useState",-1),N_=e("p",null,"Returns a stateful value, and a function to update it.",-1),z_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#D4976C"}},"state"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"setState"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"useState"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"initialState"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#A65E2B"}},"state"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"setState"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"useState"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"initialState"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),q_=e("p",null,"Two ways of updating a state",-1),U_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// pass the new value as paramater")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"setState"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"newState"),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// or, use a function as the parameter to get previous state value")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"setState"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"prevState"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"prevState"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// pass the new value as paramater")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"setState"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"newState"),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// or, use a function as the parameter to get previous state value")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"setState"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"prevState"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"prevState"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),V_={__name:"30",setup(t){const n={srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[I_,N_,z_,q_,U_]),_:1},16))}},W_=e("h2",null,"useEffect",-1),Y_=e("p",null,[p("Run side effects when the render is done. "),e("code",null,"useEffect"),p(" accepts a function, and an array of dependency as its parameter.")],-1),K_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"useEffect"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"didUpdate"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"deps"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"useEffect"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"didUpdate"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"deps"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),X_=e("p",null,"Side effects is a way to synchronize with some external system in functional component, such as DOM manipulation, use third-party libraries, network/fetching/send data from/to Webservice, and so on.",-1),J_={__name:"31",setup(t){const n={srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[W_,Y_,K_,X_]),_:1},16))}},Z_=e("h2",null,"useEffect (2)",-1),G_=e("p",null,[p("A function that passed to "),e("code",null,"useEffect"),p(' may has a "cleanup function" that would be run before the component rerender.')],-1),Q_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"useEffect"),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"// function body")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"rendered"'),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"// return a cleanup function")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"run before rerender"'),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"useEffect"),e("span",{style:{color:"#8E8F8B"}},"(()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// function body")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"rendered"'),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// return a cleanup function")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"run before rerender"'),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")])])])],-1),e3={__name:"32",setup(t){const n={srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[Z_,G_,Q_]),_:1},16))}},t3=e("h2",null,"useEffect (3)",-1),n3=e("p",null,[p("With effect dependencies, we can set the side effect to "),e("strong",null,"run every render"),p(", "),e("strong",null,"on first render"),p(", or "),e("strong",null,"when the dependencies changes"),p(".")],-1),s3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Will run in first render")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"useEffect"),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"rendered"'),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"},"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// <-- empty dependency array")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Will run when the dependencies changes")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"useEffect"),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"document"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"title"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"count")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"},"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#858585"}},"])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// <-- use count state as dependencies")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Will run in first render")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"useEffect"),e("span",{style:{color:"#8E8F8B"}},"(()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"rendered"'),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[])"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// <-- empty dependency array")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Will run when the dependencies changes")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"useEffect"),e("span",{style:{color:"#8E8F8B"}},"(()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"document"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"title"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"count")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#8E8F8B"}},"])"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// <-- use count state as dependencies")])])])],-1),o3={__name:"33",setup(t){const n={srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[t3,n3,s3]),_:1},16))}},l3=e("h1",null,"Handling Event",-1),r3=e("p",null,"Add interactivity to the component.",-1),a3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onClick"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#858585"}},"{()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"sayHello"),e("span",{style:{color:"#858585"}},"()}>"),e("span",{style:{color:"#DBD7CA"}},"Say Hello"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"input"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"name"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#C98A7D"}},'"name"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"type"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#C98A7D"}},'"text"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onChange"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#B8A965"}},"handleInputChange"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"/>")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onClick"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#8E8F8B"}},"{()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"sayHello"),e("span",{style:{color:"#8E8F8B"}},"()}>"),e("span",{style:{color:"#393A34"}},"Say Hello"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"input"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"name"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#B56959"}},'"name"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"type"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#B56959"}},'"text"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onChange"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#8C862B"}},"handleInputChange"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"/>")])])])],-1),i3=e("br",null,null,-1),c3=e("p",null,[p("Pass "),e("code",null,"event"),p(" object to event handler")],-1),p3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onClick"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#858585"}},"{("),e("span",{style:{color:"#B8A965"}},"ev"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"sayHello"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"ev"),e("span",{style:{color:"#858585"}},")}>"),e("span",{style:{color:"#DBD7CA"}},"Say Hello"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onClick"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#8E8F8B"}},"{("),e("span",{style:{color:"#8C862B"}},"ev"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"sayHello"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"ev"),e("span",{style:{color:"#8E8F8B"}},")}>"),e("span",{style:{color:"#393A34"}},"Say Hello"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),u3={__name:"34",setup(t){const n={srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[l3,r3,a3,i3,c3,p3]),_:1},16))}},d3=e("h1",null,"Event Handler on Custom Component",-1),f3=e("p",null,"An event handler is just function in props.",-1),m3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Button"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"props"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onClick"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#B8A965"}},"props"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"onClick"),e("span",{style:{color:"#858585"}},"}>{"),e("span",{style:{color:"#B8A965"}},"props"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"children"),e("span",{style:{color:"#858585"}},"}</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"Button"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onClick"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#858585"}},"{()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"alert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"\u2764\uFE0F"'),e("span",{style:{color:"#858585"}},")}>"),e("span",{style:{color:"#DBD7CA"}},"Button \u2764\uFE0F"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#E0A569"}},"Button"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"Button"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onClick"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#858585"}},"{()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"alert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"\u{1F44D}"'),e("span",{style:{color:"#858585"}},")}>"),e("span",{style:{color:"#DBD7CA"}},"Button \u{1F44D}"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#E0A569"}},"Button"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"Button"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onClick"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#858585"}},"{()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"alert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"\u{1F680}"'),e("span",{style:{color:"#858585"}},")}>"),e("span",{style:{color:"#DBD7CA"}},"Button \u{1F680}"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#E0A569"}},"Button"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Button"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"props"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onClick"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#8C862B"}},"props"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"onClick"),e("span",{style:{color:"#8E8F8B"}},"}>{"),e("span",{style:{color:"#8C862B"}},"props"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"children"),e("span",{style:{color:"#8E8F8B"}},"}</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#B58451"}},"Button"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onClick"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#8E8F8B"}},"{()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"alert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"\u2764\uFE0F"'),e("span",{style:{color:"#8E8F8B"}},")}>"),e("span",{style:{color:"#393A34"}},"Button \u2764\uFE0F"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#B58451"}},"Button"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#B58451"}},"Button"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onClick"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#8E8F8B"}},"{()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"alert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"\u{1F44D}"'),e("span",{style:{color:"#8E8F8B"}},")}>"),e("span",{style:{color:"#393A34"}},"Button \u{1F44D}"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#B58451"}},"Button"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#B58451"}},"Button"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onClick"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#8E8F8B"}},"{()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"alert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"\u{1F680}"'),e("span",{style:{color:"#8E8F8B"}},")}>"),e("span",{style:{color:"#393A34"}},"Button \u{1F680}"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#B58451"}},"Button"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),h3={__name:"35",setup(t){const n={srcSequence:"./chunks/4-component-and-jsx.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[d3,f3,m3]),_:1},16))}},y3=e("h1",null,"List Rendering",-1),g3=e("p",null,"Rendering multiple components",-1),v3=e("p",null,[p("Normally, we use "),e("code",null,"map"),p(" to render multiple component from a given array.")],-1),b3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"numbers"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#858585"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"listOfComponents"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"numbers"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"map"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"val"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"li"),e("span",{style:{color:"#858585"}},">{"),e("span",{style:{color:"#B8A965"}},"val"),e("span",{style:{color:"#858585"}},"}</"),e("span",{style:{color:"#429988"}},"li"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"ul"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#B8A965"}},"listOfComponents"),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"ul"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"numbers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#8E8F8B"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"listOfComponents"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"numbers"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"map"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"val"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"li"),e("span",{style:{color:"#8E8F8B"}},">{"),e("span",{style:{color:"#8C862B"}},"val"),e("span",{style:{color:"#8E8F8B"}},"}</"),e("span",{style:{color:"#2F8A89"}},"li"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"ul"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#8C862B"}},"listOfComponents"),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"ul"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),w3={__name:"36",setup(t){const n={srcSequence:"./chunks/5-list-and-conditional.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[y3,g3,v3,b3]),_:1},16))}},_3=e("div",null,[e("h2",null,"Keys"),e("p",null,"Every list element should have key, and it should be unique among siblings")],-1),k3=e("div",null,[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"listOfComponents"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"numbers"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"map"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"val"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"li"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"key"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#B8A965"}},"val"),e("span",{style:{color:"#858585"}},"}>{"),e("span",{style:{color:"#B8A965"}},"val"),e("span",{style:{color:"#858585"}},"}</"),e("span",{style:{color:"#429988"}},"li"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"listOfComponents"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"numbers"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"map"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"val"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"li"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"key"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#8C862B"}},"val"),e("span",{style:{color:"#8E8F8B"}},"}>{"),e("span",{style:{color:"#8C862B"}},"val"),e("span",{style:{color:"#8E8F8B"}},"}</"),e("span",{style:{color:"#2F8A89"}},"li"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")])])])])],-1),x3=e("blockquote",null,[e("p",null,'Why we should add "key"'),e("ol",null,[e("li",null,"Improve render performance"),e("li",null,"Avoid bug when rendering list")])],-1),A3={__name:"37",setup(t){const n={class:"grid grid-rows-[auto,1fr,auto]",srcSequence:"./chunks/5-list-and-conditional.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[_3,k3,x3]),_:1},16))}},B3=e("h2",null,"List Rendering : Exercise",-1),C3=e("br",null,null,-1),E3=e("p",null,"Create a list of card from the data below :",-1),D3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Kung Pao Chicken"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"image"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"https://unsplash.com/photos/c1gCogPXC_s/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODk5Mjgz&force=true&w=1920"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"price"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"20_000"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Ramen"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"image"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"https://unsplash.com/photos/RwAXb8Hv_sU/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODk5MTQz&force=true&w=1920"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"price"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"25_000"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Beef Steak"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"image"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"https://unsplash.com/photos/auIbTAcSH6E/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODgxMDM4&force=true&w=1920"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"price"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"55_000"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Vegetable and Meat Bowl"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"image"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"https://unsplash.com/photos/kcA-c3f_3FE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODczNzE5&force=true&w=1920"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"price"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"30_000"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Burger"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"image"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"https://unsplash.com/photos/E94j3rMcxlw/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODY5NDk3&force=true&w=1920"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"price"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"23_000"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"]")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Kung Pao Chicken"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"image"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"https://unsplash.com/photos/c1gCogPXC_s/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODk5Mjgz&force=true&w=1920"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"price"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"20_000"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Ramen"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"image"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"https://unsplash.com/photos/RwAXb8Hv_sU/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODk5MTQz&force=true&w=1920"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"price"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"25_000"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Beef Steak"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"image"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"https://unsplash.com/photos/auIbTAcSH6E/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODgxMDM4&force=true&w=1920"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"price"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"55_000"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Vegetable and Meat Bowl"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"image"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"https://unsplash.com/photos/kcA-c3f_3FE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODczNzE5&force=true&w=1920"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"price"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"30_000"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Burger"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"image"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"https://unsplash.com/photos/E94j3rMcxlw/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODY5NDk3&force=true&w=1920"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"price"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"23_000"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),F3={__name:"38",setup(t){const n={srcSequence:"./chunks/5-list-and-conditional.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[B3,C3,E3,D3]),_:1},16))}},S3=e("h1",null,"Conditional Render",-1),j3=e("p",null,"Render your component conditionally",-1),$3=e("p",null,"We can use any conditional control flow to render a component condition, such as :",-1),O3=e("ul",null,[e("li",null,[e("code",null,"if")]),e("li",null,[e("code",null,"switch")]),e("li",null,[p("or, "),e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator",target:"_blank",rel:"noopener"},"ternary operator")]),e("li",null,[p("or, "),e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation",target:"_blank",rel:"noopener"},"short-circuit")])],-1),M3={__name:"39",setup(t){const n={srcSequence:"./chunks/5-list-and-conditional.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[S3,j3,$3,O3]),_:1},16))}},T3=e("h2",null,"Sample",-1),P3=e("br",null,null,-1),R3=e("h5",null,"If statement",-1),L3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"HideableWithIf"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"isHide"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"isHide"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Hello there"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"HideableWithIf"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"isHide"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"isHide"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Hello there"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),H3=e("h5",null,"Switch statement",-1),I3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"RenderWithSwitch"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"type"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"switch"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"type"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"case"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'greeting'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Hello there"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"case"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'action'"),e("span",{style:{color:"#858585"}},":")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onClick"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#858585"}},"{()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"alert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},`"You've clicked me"`),e("span",{style:{color:"#858585"}},")}>"),e("span",{style:{color:"#DBD7CA"}},"Click Me"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#858585"}},":")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Default"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"RenderWithSwitch"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"type"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"switch"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"type"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"case"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'greeting'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Hello there"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"case"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'action'"),e("span",{style:{color:"#8E8F8B"}},":")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onClick"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#8E8F8B"}},"{()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"alert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},`"You've clicked me"`),e("span",{style:{color:"#8E8F8B"}},")}>"),e("span",{style:{color:"#393A34"}},"Click Me"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"default"),e("span",{style:{color:"#8E8F8B"}},":")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Default"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),N3={__name:"40",setup(t){const n={srcSequence:"./chunks/5-list-and-conditional.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[T3,P3,R3,L3,H3,I3]),_:1},16))}},z3=e("div",null,[e("h5",null,"Ternary operator"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"HiddenTernary"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"isVisible"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"isVisible"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"You can see me"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Something is hidden here"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"HiddenTernary"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"isVisible"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"isVisible"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"You can see me"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Something is hidden here"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])]),e("h5",null,"Short-circuit"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"HideableWithShortCircuit"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"isVisible"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"isVisible"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"You can see me"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"HideableWithShortCircuit"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"isVisible"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"isVisible"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"You can see me"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])])],-1),q3=e("blockquote",null,[e("p",null,[e("strong",null,"Booleans, Null, and Undefined Are Ignored")]),e("p",null,[e("code",null,"false"),p(", "),e("code",null,"null"),p(", "),e("code",null,"undefined"),p(", and "),e("code",null,"true"),p(" are valid children.")]),e("p",null,[e("a",{href:"https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored",target:"_blank",rel:"noopener"},"https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored")])],-1),U3={__name:"41",setup(t){const n={class:"grid grid-rows-[1fr,auto]",srcSequence:"./chunks/5-list-and-conditional.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[z3,q3]),_:1},16))}},V3=e("h1",null,"Styling with CSS Module",-1),W3=e("p",null,"Isolate component styling",-1),Y3={__name:"42",setup(t){const n={layout:"cover",srcSequence:"./chunks/6-css-module.md"};return M(I),(s,o)=>(w(),N(hs,te(ee(n)),{default:V(()=>[V3,W3]),_:1},16))}};const co=t=>(Mn("data-v-29f54d3e"),t=t(),Tn(),t),K3=co(()=>e("h1",null,"How to styling a component",-1)),X3=co(()=>e("br",null,null,-1)),J3=p("To make the component good looking visually : "),Z3=co(()=>e("li",null,"Write the style inline",-1)),G3=co(()=>e("li",null,"Use global CSS class",-1)),Q3=co(()=>e("li",null,"Use CSS module",-1)),ek={class:"vlick-blurred"},tk=p("Use CSS-in-JS"),nk=[tk],sk={class:"vlick-blurred"},ok=p("or, Use Styled-component"),lk=[ok],rk={__name:"43",setup(t){const n={clicks:1,srcSequence:"./chunks/6-css-module.md"};return M(I),(s,o)=>{const l=ta("click-hide");return w(),N(re,te(ee(n)),{default:V(()=>[K3,X3,e("p",null,[J3,e("ul",null,[Z3,G3,Q3,Bt((w(),z("li",ek,nk)),[[l,1]]),Bt((w(),z("li",sk,lk)),[[l,1]])])])]),_:1},16)}}};var ak=Kt(rk,[["__scopeId","data-v-29f54d3e"]]);const ik={class:"slidev-layout center h-full grid place-content-center"},ck={class:"my-auto"},ju={__name:"center",setup(t){return M(I),(n,s)=>(w(),z("div",ik,[e("div",ck,[jt(n.$slots,"default")])]))}},pk=e("h1",null,"Let\u2019s start with a simple Input component",-1),uk={__name:"44",setup(t){const n={layout:"center",srcSequence:"./chunks/6-css-module.md"};return M(I),(s,o)=>(w(),N(ju,te(ee(n)),{default:V(()=>[pk]),_:1},16))}},dk=e("h1",null,"How to use CSS Module",-1),fk=e("p",null,"Keep in mind, CSS module is not part of React.",-1),mk=e("ol",null,[e("li",null,[e("p",null,[p("Rename CSS file to use "),e("code",null,"<name>.module.css"),p(),e("br"),p(" Example: "),e("code",null,"input.css"),p(" => "),e("code",null,"input.module.css")])]),e("li",null,[e("p",null,"Import the CSS as object, not as a side-effect"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-    import './input.css'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    import style from './input.module.css'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"...")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-    import './input.css'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    import style from './input.module.css'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"...")])])])])]),e("li",null,[e("p",null,"Use provided class name by imported CSS"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},'-    <input name="name" className="Input" />')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},'+    <input name="name" className={style.Input} />')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"...")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},'-    <input name="name" className="Input" />')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},'+    <input name="name" className={style.Input} />')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"...")])])])])])],-1),hk=e("br",null,null,-1),yk=e("blockquote",null,[e("p",null,"The imported class name will display as random string when inspected through Inspect Element")],-1),gk={__name:"45",setup(t){const n={srcSequence:"./chunks/6-css-module.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[dk,fk,mk,hk,yk]),_:1},16))}},vk=e("h1",null,"Let\u2019s update the Input component",-1),bk={__name:"46",setup(t){const n={layout:"center",srcSequence:"./chunks/6-css-module.md"};return M(I),(s,o)=>(w(),N(ju,te(ee(n)),{default:V(()=>[vk]),_:1},16))}},wk=e("h1",null,"Forms",-1),_k=e("p",null,"Handling Form",-1),kk={__name:"47",setup(t){const n={layout:"cover",srcSequence:"./chunks/7-form.md"};return M(I),(s,o)=>(w(),N(hs,te(ee(n)),{default:V(()=>[wk,_k]),_:1},16))}},xk=e("h1",null,"Type of Form",-1),Ak=e("p",null,"There are two type of form:",-1),Bk=e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"Controlled Component")]),e("p",null,"The values of the form is controlled by React")]),e("li",null,[e("p",null,[e("strong",null,"Uncontrolled Component")]),e("p",null,"The values of the form is controlled by DOM")])],-1),Ck={__name:"48",setup(t){const n={srcSequence:"./chunks/7-form.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[xk,Ak,Bk]),_:1},16))}},Ek=e("h1",null,"Controlled Component",-1),Dk=e("iframe",{class:"h-full",src:"https://codesandbox.io/embed/mentify-4-form-controlled-4zekr7?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNameForm.jsx&theme=dark&view=editor",style:{width:"100%",border:"0","border-radius":"4px",overflow:"hidden"},title:"mentify-4-form-controlled",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"},null,-1),Fk={__name:"49",setup(t){const n={class:"grid grid-rows-[auto,1fr]",srcSequence:"./chunks/7-form.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[Ek,Dk]),_:1},16))}},Sk=e("h1",null,"Uncontrolled Component",-1),jk=e("iframe",{class:"h-full",src:"https://codesandbox.io/embed/mentify-4-form-uncontrolled-enb12m?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNameForm.jsx&theme=dark&view=editor",style:{width:"100%",border:"0","border-radius":"4px",overflow:"hidden"},title:"mentify-4-form-uncontrolled",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"},null,-1),$k={__name:"50",setup(t){const n={class:"grid grid-rows-[auto,1fr]",srcSequence:"./chunks/7-form.md"};return M(I),(s,o)=>(w(),N(re,te(ee(n)),{default:V(()=>[Sk,jk]),_:1},16))}},Ok=e("h2",null,"Wrap Up :",-1),Mk=e("h1",null,"Build a Dynamic Form",-1),Tk={__name:"51",setup(t){const n={layout:"cover",srcSequence:"./chunks/7-form.md"};return M(I),(s,o)=>(w(),N(hs,te(ee(n)),{default:V(()=>[Ok,Mk]),_:1},16))}};var Pk=[{path:"1",name:"page-1",component:A1,meta:{theme:"seriph",highlighter:"shiki",lineNumbers:!0,title:"React Workshop - Fundamental",titleTemplate:"%s",slide:{raw:`---
theme: seriph
highlighter: shiki
lineNumbers: true
title: "React Workshop - Fundamental"
titleTemplate: "%s"
---

## React Workshop
# Part 1 : Fundamental
`,title:"React Workshop - Fundamental",level:1,content:`## React Workshop
# Part 1 : Fundamental`,frontmatter:{theme:"seriph",highlighter:"shiki",lineNumbers:!0,title:"React Workshop - Fundamental",titleTemplate:"%s"},index:0,start:0,end:11,notesHTML:"",filepath:"D:\\repositories\\slidev-getting-started\\slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:S1,meta:{layout:"statement",title:'"React is a JavaScript library for building user interfaces"',srcSequence:"./chunks/1-what-is-react.md",slide:{raw:null,title:'"React is a JavaScript library for building user interfaces"',level:1,content:`# "React is a JavaScript library for building user interfaces"
https://reactjs.org`,frontmatter:{layout:"statement",title:'"React is a JavaScript library for building user interfaces"',srcSequence:"./chunks/1-what-is-react.md"},index:1,start:0,end:7,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",raw:`---
layout: statement
---

# "React is a JavaScript library for building user interfaces"
https://reactjs.org
`,title:'"React is a JavaScript library for building user interfaces"',level:1,content:`# "React is a JavaScript library for building user interfaces"
https://reactjs.org`,frontmatter:{layout:"statement",title:'"React is a JavaScript library for building user interfaces"'},index:0,start:0,end:7},inline:{raw:`---
src: ./chunks/1-what-is-react.md
---
`,content:"",frontmatter:{},index:1,start:11,end:15},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Y1,meta:{title:"Daniyal Ahmad Rizaldhi",srcSequence:"./chunks/1-what-is-react.md,./chunks/1.5-intro.md",slide:{raw:`<div grid="~ gap-4" class="grid-cols-2 h-full">
<div flex="~" class="items-center justify-center h-full">
    <img class="self-portrait w-3/6 rounded-md" src="/images/daniyal.jpg" />
</div>
<div flex="~" class="items-center">
<div>

# Daniyal Ahmad Rizaldhi
Frontend Developer

<a target="blank" href="https://www.linkedin.com/in/daniyal-ahmad-r/">
    <mdi-linkedin /> <span>in/daniyal-ahmad-r</span>
</a>

</div>
</div>
</div>

<style>
    .self-portrait {
        aspect-ratio: 1
    }
</style>`,title:"Daniyal Ahmad Rizaldhi",level:1,content:`<div grid="~ gap-4" class="grid-cols-2 h-full">
<div flex="~" class="items-center justify-center h-full">
    <img class="self-portrait w-3/6 rounded-md" src="/images/daniyal.jpg" />
</div>
<div flex="~" class="items-center">
<div>

# Daniyal Ahmad Rizaldhi
Frontend Developer

<a target="blank" href="https://www.linkedin.com/in/daniyal-ahmad-r/">
    <mdi-linkedin /> <span>in/daniyal-ahmad-r</span>
</a>

</div>
</div>
</div>

<style>
    .self-portrait {
        aspect-ratio: 1
    }
</style>`,frontmatter:{title:"Daniyal Ahmad Rizaldhi",srcSequence:"./chunks/1-what-is-react.md,./chunks/1.5-intro.md"},index:2,start:0,end:23,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1.5-intro.md",raw:`<div grid="~ gap-4" class="grid-cols-2 h-full">
<div flex="~" class="items-center justify-center h-full">
    <img class="self-portrait w-3/6 rounded-md" src="/images/daniyal.jpg" />
</div>
<div flex="~" class="items-center">
<div>

# Daniyal Ahmad Rizaldhi
Frontend Developer

<a target="blank" href="https://www.linkedin.com/in/daniyal-ahmad-r/">
    <mdi-linkedin /> <span>in/daniyal-ahmad-r</span>
</a>

</div>
</div>
</div>

<style>
    .self-portrait {
        aspect-ratio: 1
    }
</style>`,title:"Daniyal Ahmad Rizaldhi",level:1,content:`<div grid="~ gap-4" class="grid-cols-2 h-full">
<div flex="~" class="items-center justify-center h-full">
    <img class="self-portrait w-3/6 rounded-md" src="/images/daniyal.jpg" />
</div>
<div flex="~" class="items-center">
<div>

# Daniyal Ahmad Rizaldhi
Frontend Developer

<a target="blank" href="https://www.linkedin.com/in/daniyal-ahmad-r/">
    <mdi-linkedin /> <span>in/daniyal-ahmad-r</span>
</a>

</div>
</div>
</div>

<style>
    .self-portrait {
        aspect-ratio: 1
    }
</style>`,frontmatter:{title:"Daniyal Ahmad Rizaldhi"},index:0,start:0,end:23},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1.5-intro.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:eb,meta:{srcSequence:"./chunks/1-what-is-react.md",slide:{raw:`
<div grid="~ gap-2" class="grid-cols-[1fr,auto] h-full">

<div>
  <img src="/images/sample-airbnb.png" />
  <img style="transform: translate(25px, 50px)" src="/images/sample-netflix.png" />
  <img style="transform: translate(50px, 100px)" src="/images/sample-react.png" />
</div>

<div flex="~" class=" items-center">

# and more...

</div>

</div>

<style>
  div {
    position: relative;
  }

  img {
      position: absolute;
      width: 600px;
  }
</style>
`,title:"and more...",level:1,content:`<div grid="~ gap-2" class="grid-cols-[1fr,auto] h-full">

<div>
  <img src="/images/sample-airbnb.png" />
  <img style="transform: translate(25px, 50px)" src="/images/sample-netflix.png" />
  <img style="transform: translate(50px, 100px)" src="/images/sample-react.png" />
</div>

<div flex="~" class=" items-center">

# and more...

</div>

</div>

<style>
  div {
    position: relative;
  }

  img {
      position: absolute;
      width: 600px;
  }
</style>`,frontmatter:{srcSequence:"./chunks/1-what-is-react.md"},index:3,start:12,end:40,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",raw:`
<div grid="~ gap-2" class="grid-cols-[1fr,auto] h-full">

<div>
  <img src="/images/sample-airbnb.png" />
  <img style="transform: translate(25px, 50px)" src="/images/sample-netflix.png" />
  <img style="transform: translate(50px, 100px)" src="/images/sample-react.png" />
</div>

<div flex="~" class=" items-center">

# and more...

</div>

</div>

<style>
  div {
    position: relative;
  }

  img {
      position: absolute;
      width: 600px;
  }
</style>
`,title:"and more...",level:1,content:`<div grid="~ gap-2" class="grid-cols-[1fr,auto] h-full">

<div>
  <img src="/images/sample-airbnb.png" />
  <img style="transform: translate(25px, 50px)" src="/images/sample-netflix.png" />
  <img style="transform: translate(50px, 100px)" src="/images/sample-react.png" />
</div>

<div flex="~" class=" items-center">

# and more...

</div>

</div>

<style>
  div {
    position: relative;
  }

  img {
      position: absolute;
      width: 600px;
  }
</style>`,frontmatter:{},index:2,start:12,end:40},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:sb,meta:{srcSequence:"./chunks/1-what-is-react.md",slide:{raw:`
<div grid="~ gap-4" class="grid-rows-[1fr,auto] h-full">
  <div class="overflow-hidden">
    <img class="rounded-md" src="/images/popular-frontend-framework.png">
  </div>
  <caption>
    <a target="blank" href="https://risingstars.js.org/2021/en#section-framework">https://risingstars.js.org/2021/en#section-framework</a>
  </caption>
</div>
`,content:`<div grid="~ gap-4" class="grid-rows-[1fr,auto] h-full">
  <div class="overflow-hidden">
    <img class="rounded-md" src="/images/popular-frontend-framework.png">
  </div>
  <caption>
    <a target="blank" href="https://risingstars.js.org/2021/en#section-framework">https://risingstars.js.org/2021/en#section-framework</a>
  </caption>
</div>`,frontmatter:{srcSequence:"./chunks/1-what-is-react.md"},index:4,start:41,end:51,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",raw:`
<div grid="~ gap-4" class="grid-rows-[1fr,auto] h-full">
  <div class="overflow-hidden">
    <img class="rounded-md" src="/images/popular-frontend-framework.png">
  </div>
  <caption>
    <a target="blank" href="https://risingstars.js.org/2021/en#section-framework">https://risingstars.js.org/2021/en#section-framework</a>
  </caption>
</div>
`,content:`<div grid="~ gap-4" class="grid-rows-[1fr,auto] h-full">
  <div class="overflow-hidden">
    <img class="rounded-md" src="/images/popular-frontend-framework.png">
  </div>
  <caption>
    <a target="blank" href="https://risingstars.js.org/2021/en#section-framework">https://risingstars.js.org/2021/en#section-framework</a>
  </caption>
</div>`,frontmatter:{},index:3,start:41,end:51},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:ab,meta:{srcSequence:"./chunks/1-what-is-react.md",slide:{raw:`
# Think in React

<div grid="~ gap-4" class="grid-cols-[1fr,400px]">
  <div>
    <div flex="~" class="items-center p-4 bg-white rounded-md">
      <img src="/images/thinking-in-react-components.png" />
    </div>

  https://reactjs.org/docs/thinking-in-react.html

  </div>
  <div>

  1. **FilterableProductTable (orange)**\\
      Contains the entirety of the example
  1. **SearchBar (blue)**\\
      Receives all user input
  1. **ProductTable (green)**\\
      Displays and filters the data collection based on user input
  1. **ProductCategoryRow (turquoise)**\\
      Displays a heading for each category
  1. **ProductRow (red)**\\
      Displays a row for each product

  </div>

</div>
`,title:"Think in React",level:1,content:`# Think in React

<div grid="~ gap-4" class="grid-cols-[1fr,400px]">
  <div>
    <div flex="~" class="items-center p-4 bg-white rounded-md">
      <img src="/images/thinking-in-react-components.png" />
    </div>

  https://reactjs.org/docs/thinking-in-react.html

  </div>
  <div>

  1. **FilterableProductTable (orange)**\\
      Contains the entirety of the example
  1. **SearchBar (blue)**\\
      Receives all user input
  1. **ProductTable (green)**\\
      Displays and filters the data collection based on user input
  1. **ProductCategoryRow (turquoise)**\\
      Displays a heading for each category
  1. **ProductRow (red)**\\
      Displays a row for each product

  </div>

</div>`,frontmatter:{srcSequence:"./chunks/1-what-is-react.md"},index:5,start:52,end:81,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",raw:`
# Think in React

<div grid="~ gap-4" class="grid-cols-[1fr,400px]">
  <div>
    <div flex="~" class="items-center p-4 bg-white rounded-md">
      <img src="/images/thinking-in-react-components.png" />
    </div>

  https://reactjs.org/docs/thinking-in-react.html

  </div>
  <div>

  1. **FilterableProductTable (orange)**\\
      Contains the entirety of the example
  1. **SearchBar (blue)**\\
      Receives all user input
  1. **ProductTable (green)**\\
      Displays and filters the data collection based on user input
  1. **ProductCategoryRow (turquoise)**\\
      Displays a heading for each category
  1. **ProductRow (red)**\\
      Displays a row for each product

  </div>

</div>
`,title:"Think in React",level:1,content:`# Think in React

<div grid="~ gap-4" class="grid-cols-[1fr,400px]">
  <div>
    <div flex="~" class="items-center p-4 bg-white rounded-md">
      <img src="/images/thinking-in-react-components.png" />
    </div>

  https://reactjs.org/docs/thinking-in-react.html

  </div>
  <div>

  1. **FilterableProductTable (orange)**\\
      Contains the entirety of the example
  1. **SearchBar (blue)**\\
      Receives all user input
  1. **ProductTable (green)**\\
      Displays and filters the data collection based on user input
  1. **ProductCategoryRow (turquoise)**\\
      Displays a heading for each category
  1. **ProductRow (red)**\\
      Displays a row for each product

  </div>

</div>`,frontmatter:{},index:4,start:52,end:81},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:cb,meta:{srcSequence:"./chunks/1-what-is-react.md",slide:{raw:`
<div grid="~" class="grid-rows-[auto,1fr,auto] h-full" >

# Prerequisites

<div grid="~ gap-4" class="grid-cols-3 text-center items-center">
  <div>

  # HTML
  Hypertext Markup Language

  </div>
  <div>

  # CSS
  Cascade Stylesheet

  </div>
  <div>

  # JS
  Javascript

  </div>

</div>
<div>

> https://www.w3schools.com/ 
>
> https://developer.mozilla.org/en-US/

</div>
</div>

`,title:"Prerequisites",level:1,content:`<div grid="~" class="grid-rows-[auto,1fr,auto] h-full" >

# Prerequisites

<div grid="~ gap-4" class="grid-cols-3 text-center items-center">
  <div>

  # HTML
  Hypertext Markup Language

  </div>
  <div>

  # CSS
  Cascade Stylesheet

  </div>
  <div>

  # JS
  Javascript

  </div>

</div>
<div>

> https://www.w3schools.com/ 
>
> https://developer.mozilla.org/en-US/

</div>
</div>`,frontmatter:{srcSequence:"./chunks/1-what-is-react.md"},index:6,start:82,end:118,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",raw:`
<div grid="~" class="grid-rows-[auto,1fr,auto] h-full" >

# Prerequisites

<div grid="~ gap-4" class="grid-cols-3 text-center items-center">
  <div>

  # HTML
  Hypertext Markup Language

  </div>
  <div>

  # CSS
  Cascade Stylesheet

  </div>
  <div>

  # JS
  Javascript

  </div>

</div>
<div>

> https://www.w3schools.com/ 
>
> https://developer.mozilla.org/en-US/

</div>
</div>

`,title:"Prerequisites",level:1,content:`<div grid="~" class="grid-rows-[auto,1fr,auto] h-full" >

# Prerequisites

<div grid="~ gap-4" class="grid-cols-3 text-center items-center">
  <div>

  # HTML
  Hypertext Markup Language

  </div>
  <div>

  # CSS
  Cascade Stylesheet

  </div>
  <div>

  # JS
  Javascript

  </div>

</div>
<div>

> https://www.w3schools.com/ 
>
> https://developer.mozilla.org/en-US/

</div>
</div>`,frontmatter:{},index:5,start:82,end:118},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:ub,meta:{srcSequence:"./chunks/1-what-is-react.md",slide:{raw:`
<div grid="~" class="grid-rows-[auto,1fr] h-full" >

# Preparation

<div grid="~ gap-4" class="grid-cols-2 text-center items-center">
  <div>

  # NodeJS
  https://nodejs.org/

  </div>
  <div>

  # Text Editor
  [VS Code](https://code.visualstudio.com/)/[Sublime](https://www.sublimetext.com/)/[Notepad++](https://notepad-plus-plus.org/)

  </div>

</div>
</div>
`,title:"Preparation",level:1,content:`<div grid="~" class="grid-rows-[auto,1fr] h-full" >

# Preparation

<div grid="~ gap-4" class="grid-cols-2 text-center items-center">
  <div>

  # NodeJS
  https://nodejs.org/

  </div>
  <div>

  # Text Editor
  [VS Code](https://code.visualstudio.com/)/[Sublime](https://www.sublimetext.com/)/[Notepad++](https://notepad-plus-plus.org/)

  </div>

</div>
</div>`,frontmatter:{srcSequence:"./chunks/1-what-is-react.md"},index:7,start:119,end:141,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",raw:`
<div grid="~" class="grid-rows-[auto,1fr] h-full" >

# Preparation

<div grid="~ gap-4" class="grid-cols-2 text-center items-center">
  <div>

  # NodeJS
  https://nodejs.org/

  </div>
  <div>

  # Text Editor
  [VS Code](https://code.visualstudio.com/)/[Sublime](https://www.sublimetext.com/)/[Notepad++](https://notepad-plus-plus.org/)

  </div>

</div>
</div>
`,title:"Preparation",level:1,content:`<div grid="~" class="grid-rows-[auto,1fr] h-full" >

# Preparation

<div grid="~ gap-4" class="grid-cols-2 text-center items-center">
  <div>

  # NodeJS
  https://nodejs.org/

  </div>
  <div>

  # Text Editor
  [VS Code](https://code.visualstudio.com/)/[Sublime](https://www.sublimetext.com/)/[Notepad++](https://notepad-plus-plus.org/)

  </div>

</div>
</div>`,frontmatter:{},index:6,start:119,end:141},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:fb,meta:{srcSequence:"./chunks/1-what-is-react.md",slide:{raw:`
\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
  </head>
  <body>
  </body>
</html>
\`\`\`
`,content:`\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
  </head>
  <body>
  </body>
</html>
\`\`\``,frontmatter:{srcSequence:"./chunks/1-what-is-react.md"},index:8,start:142,end:155,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",raw:`
\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
  </head>
  <body>
  </body>
</html>
\`\`\`
`,content:`\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
  </head>
  <body>
  </body>
</html>
\`\`\``,frontmatter:{},index:7,start:142,end:155},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:hb,meta:{srcSequence:"./chunks/1-what-is-react.md",slide:{raw:`
\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
  </body>
</html>
\`\`\`
`,content:`\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
  </body>
</html>
\`\`\``,frontmatter:{srcSequence:"./chunks/1-what-is-react.md"},index:9,start:156,end:171,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",raw:`
\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
  </body>
</html>
\`\`\`
`,content:`\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
  </body>
</html>
\`\`\``,frontmatter:{},index:8,start:156,end:171},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:gb,meta:{srcSequence:"./chunks/1-what-is-react.md",slide:{raw:`
\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
  </body>
</html>
\`\`\`
`,content:`\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
  </body>
</html>
\`\`\``,frontmatter:{srcSequence:"./chunks/1-what-is-react.md"},index:10,start:172,end:188,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",raw:`
\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
  </body>
</html>
\`\`\`
`,content:`\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
  </body>
</html>
\`\`\``,frontmatter:{},index:9,start:172,end:188},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:bb,meta:{srcSequence:"./chunks/1-what-is-react.md",slide:{raw:`
\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script>
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }

        return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
      }
    <\/script>
  </body>
</html>
\`\`\`
`,content:`\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script>
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }

        return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
      }
    <\/script>
  </body>
</html>
\`\`\``,frontmatter:{srcSequence:"./chunks/1-what-is-react.md"},index:11,start:189,end:214,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",raw:`
\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script>
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }

        return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
      }
    <\/script>
  </body>
</html>
\`\`\`
`,content:`\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script>
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }

        return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
      }
    <\/script>
  </body>
</html>
\`\`\``,frontmatter:{},index:10,start:189,end:214},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:_b,meta:{srcSequence:"./chunks/1-what-is-react.md",slide:{raw:`
\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script>
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }

        return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
      }

      const root = ReactDOM.createRoot(document.getElementById("like-button"));
      root.render(React.createElement(LikeButton));
    <\/script>
  </body>
</html>
\`\`\`
`,content:`\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script>
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }

        return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
      }

      const root = ReactDOM.createRoot(document.getElementById("like-button"));
      root.render(React.createElement(LikeButton));
    <\/script>
  </body>
</html>
\`\`\``,frontmatter:{srcSequence:"./chunks/1-what-is-react.md"},index:12,start:215,end:243,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",raw:`
\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script>
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }

        return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
      }

      const root = ReactDOM.createRoot(document.getElementById("like-button"));
      root.render(React.createElement(LikeButton));
    <\/script>
  </body>
</html>
\`\`\`
`,content:`\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script>
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }

        return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
      }

      const root = ReactDOM.createRoot(document.getElementById("like-button"));
      root.render(React.createElement(LikeButton));
    <\/script>
  </body>
</html>
\`\`\``,frontmatter:{},index:11,start:215,end:243},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\1-what-is-react.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Y0,meta:{class:"grid grid-rows-[auto,1fr] overflow-hidden",title:"Super Simple Sample",srcSequence:"./chunks/2-super-simple-sample.md",slide:{raw:null,title:"Super Simple Sample",level:1,content:`# Super Simple Sample
<div grid="~ cols-2 gap-2" class="overflow-hidden">

<div flex="~" class="code-snippet-wrapper overflow-hidden">

\`\`\`html {all|6-7|10|12-18|20-21|all}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script>
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }

        return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
      }

      const root = ReactDOM.createRoot(document.getElementById("like-button"));
      root.render(React.createElement(LikeButton));
    <\/script>
  </body>
</html>
\`\`\`

</div>

<div flex="~">

<iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-1-super-simple-sample-712gyc?fontsize=14&hidenavigation=1&theme=dark"
     title="mentify-1-super-simple-sample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div>

</div>

<style>
iframe {
    border-radius: 0.5rem;
    overflow:hidden;
}
.shiki-container {
    overflow: hidden;
}
.code-snippet-wrapper div {
    @apply flex overflow-hidden;
}
</style>`,frontmatter:{class:"grid grid-rows-[auto,1fr] overflow-hidden",title:"Super Simple Sample",srcSequence:"./chunks/2-super-simple-sample.md"},index:13,start:0,end:62,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\2-super-simple-sample.md",raw:`---
class: grid grid-rows-[auto,1fr] overflow-hidden
---

# Super Simple Sample
<div grid="~ cols-2 gap-2" class="overflow-hidden">

<div flex="~" class="code-snippet-wrapper overflow-hidden">

\`\`\`html {all|6-7|10|12-18|20-21|all}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script>
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }

        return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
      }

      const root = ReactDOM.createRoot(document.getElementById("like-button"));
      root.render(React.createElement(LikeButton));
    <\/script>
  </body>
</html>
\`\`\`

</div>

<div flex="~">

<iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-1-super-simple-sample-712gyc?fontsize=14&hidenavigation=1&theme=dark"
     title="mentify-1-super-simple-sample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div>

</div>

<style>
iframe {
    border-radius: 0.5rem;
    overflow:hidden;
}
.shiki-container {
    overflow: hidden;
}
.code-snippet-wrapper div {
    @apply flex overflow-hidden;
}
</style>
`,title:"Super Simple Sample",level:1,content:`# Super Simple Sample
<div grid="~ cols-2 gap-2" class="overflow-hidden">

<div flex="~" class="code-snippet-wrapper overflow-hidden">

\`\`\`html {all|6-7|10|12-18|20-21|all}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script>
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }

        return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
      }

      const root = ReactDOM.createRoot(document.getElementById("like-button"));
      root.render(React.createElement(LikeButton));
    <\/script>
  </body>
</html>
\`\`\`

</div>

<div flex="~">

<iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-1-super-simple-sample-712gyc?fontsize=14&hidenavigation=1&theme=dark"
     title="mentify-1-super-simple-sample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div>

</div>

<style>
iframe {
    border-radius: 0.5rem;
    overflow:hidden;
}
.shiki-container {
    overflow: hidden;
}
.code-snippet-wrapper div {
    @apply flex overflow-hidden;
}
</style>`,frontmatter:{class:"grid grid-rows-[auto,1fr] overflow-hidden",title:"Super Simple Sample"},index:0,start:0,end:62},inline:{raw:`---
src: ./chunks/2-super-simple-sample.md
---
`,content:"",frontmatter:{},index:2,start:15,end:19},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\2-super-simple-sample.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Q0,meta:{class:"grid grid-rows-[auto,1fr,auto]",srcSequence:"./chunks/2-super-simple-sample.md",slide:{raw:`---
class: grid grid-rows-[auto,1fr,auto]
---

<div class="text-center">

# JSX
Javascript-XML

</div>

<div grid="~ cols-2 gap-2">

<div>

\`\`\`js {6}
function LikeButton() {
    function handleClick() {
        alert("Like!!");
    }

    return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
}
\`\`\`

</div>

<div>

\`\`\`jsx {6}
function LikeButton() {
    function handleClick() {
        alert("Like!!");
    }

    return <button onClick={handleClick}>\u2764\uFE0F</button>;
}
\`\`\`

</div>

</div>

> https://reactjs.org/docs/introducing-jsx.html
`,title:"JSX",level:1,content:`<div class="text-center">

# JSX
Javascript-XML

</div>

<div grid="~ cols-2 gap-2">

<div>

\`\`\`js {6}
function LikeButton() {
    function handleClick() {
        alert("Like!!");
    }

    return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
}
\`\`\`

</div>

<div>

\`\`\`jsx {6}
function LikeButton() {
    function handleClick() {
        alert("Like!!");
    }

    return <button onClick={handleClick}>\u2764\uFE0F</button>;
}
\`\`\`

</div>

</div>

> https://reactjs.org/docs/introducing-jsx.html`,frontmatter:{class:"grid grid-rows-[auto,1fr,auto]",srcSequence:"./chunks/2-super-simple-sample.md"},index:14,start:62,end:107,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\2-super-simple-sample.md",raw:`---
class: grid grid-rows-[auto,1fr,auto]
---

<div class="text-center">

# JSX
Javascript-XML

</div>

<div grid="~ cols-2 gap-2">

<div>

\`\`\`js {6}
function LikeButton() {
    function handleClick() {
        alert("Like!!");
    }

    return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
}
\`\`\`

</div>

<div>

\`\`\`jsx {6}
function LikeButton() {
    function handleClick() {
        alert("Like!!");
    }

    return <button onClick={handleClick}>\u2764\uFE0F</button>;
}
\`\`\`

</div>

</div>

> https://reactjs.org/docs/introducing-jsx.html
`,title:"JSX",level:1,content:`<div class="text-center">

# JSX
Javascript-XML

</div>

<div grid="~ cols-2 gap-2">

<div>

\`\`\`js {6}
function LikeButton() {
    function handleClick() {
        alert("Like!!");
    }

    return React.createElement("button", { onClick: handleClick }, "\u2764\uFE0F");
}
\`\`\`

</div>

<div>

\`\`\`jsx {6}
function LikeButton() {
    function handleClick() {
        alert("Like!!");
    }

    return <button onClick={handleClick}>\u2764\uFE0F</button>;
}
\`\`\`

</div>

</div>

> https://reactjs.org/docs/introducing-jsx.html`,frontmatter:{class:"grid grid-rows-[auto,1fr,auto]"},index:1,start:62,end:107},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\2-super-simple-sample.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:rw,meta:{class:"grid grid-rows-[auto,1fr] overflow-hidden",srcSequence:"./chunks/2-super-simple-sample.md",slide:{raw:`---
class: grid grid-rows-[auto,1fr] overflow-hidden
---

# Super Simple Sample (JSX)
<div grid="~ cols-2 gap-2" class="overflow-hidden">

<div flex="~" class="code-snippet-wrapper overflow-hidden">

\`\`\`html {all|8|12|17|all}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple (JSX)</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script type="text/babel">
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }
        return <button onClick={handleClick}>\u2764\uFE0F</button>;
      }

      const root = ReactDOM.createRoot(document.getElementById("like-button"));
      root.render(React.createElement(LikeButton));
    <\/script>
  </body>
</html>
\`\`\`

</div>

<div flex="~">

<iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-2-jsx-r22s0y?fontsize=14&hidenavigation=1&theme=dark"
     title="mentify-2-jsx"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div>

</div>

<style>
iframe {
    border-radius: 0.5rem;
    overflow:hidden;
}
.shiki-container {
    overflow: hidden;
}
.code-snippet-wrapper div {
    @apply flex overflow-hidden;
}
</style>`,title:"Super Simple Sample (JSX)",level:1,content:`# Super Simple Sample (JSX)
<div grid="~ cols-2 gap-2" class="overflow-hidden">

<div flex="~" class="code-snippet-wrapper overflow-hidden">

\`\`\`html {all|8|12|17|all}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple (JSX)</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script type="text/babel">
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }
        return <button onClick={handleClick}>\u2764\uFE0F</button>;
      }

      const root = ReactDOM.createRoot(document.getElementById("like-button"));
      root.render(React.createElement(LikeButton));
    <\/script>
  </body>
</html>
\`\`\`

</div>

<div flex="~">

<iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-2-jsx-r22s0y?fontsize=14&hidenavigation=1&theme=dark"
     title="mentify-2-jsx"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div>

</div>

<style>
iframe {
    border-radius: 0.5rem;
    overflow:hidden;
}
.shiki-container {
    overflow: hidden;
}
.code-snippet-wrapper div {
    @apply flex overflow-hidden;
}
</style>`,frontmatter:{class:"grid grid-rows-[auto,1fr] overflow-hidden",srcSequence:"./chunks/2-super-simple-sample.md"},index:15,start:107,end:168,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\2-super-simple-sample.md",raw:`---
class: grid grid-rows-[auto,1fr] overflow-hidden
---

# Super Simple Sample (JSX)
<div grid="~ cols-2 gap-2" class="overflow-hidden">

<div flex="~" class="code-snippet-wrapper overflow-hidden">

\`\`\`html {all|8|12|17|all}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple (JSX)</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script type="text/babel">
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }
        return <button onClick={handleClick}>\u2764\uFE0F</button>;
      }

      const root = ReactDOM.createRoot(document.getElementById("like-button"));
      root.render(React.createElement(LikeButton));
    <\/script>
  </body>
</html>
\`\`\`

</div>

<div flex="~">

<iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-2-jsx-r22s0y?fontsize=14&hidenavigation=1&theme=dark"
     title="mentify-2-jsx"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div>

</div>

<style>
iframe {
    border-radius: 0.5rem;
    overflow:hidden;
}
.shiki-container {
    overflow: hidden;
}
.code-snippet-wrapper div {
    @apply flex overflow-hidden;
}
</style>`,title:"Super Simple Sample (JSX)",level:1,content:`# Super Simple Sample (JSX)
<div grid="~ cols-2 gap-2" class="overflow-hidden">

<div flex="~" class="code-snippet-wrapper overflow-hidden">

\`\`\`html {all|8|12|17|all}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Super Simple (JSX)</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
  </head>
  <body>
    <div id="like-button"></div>
    <script type="text/babel">
      function LikeButton() {
        function handleClick() {
          alert("Like!!");
        }
        return <button onClick={handleClick}>\u2764\uFE0F</button>;
      }

      const root = ReactDOM.createRoot(document.getElementById("like-button"));
      root.render(React.createElement(LikeButton));
    <\/script>
  </body>
</html>
\`\`\`

</div>

<div flex="~">

<iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-2-jsx-r22s0y?fontsize=14&hidenavigation=1&theme=dark"
     title="mentify-2-jsx"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div>

</div>

<style>
iframe {
    border-radius: 0.5rem;
    overflow:hidden;
}
.shiki-container {
    overflow: hidden;
}
.code-snippet-wrapper div {
    @apply flex overflow-hidden;
}
</style>`,frontmatter:{class:"grid grid-rows-[auto,1fr] overflow-hidden"},index:2,start:107,end:168},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\2-super-simple-sample.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:pw,meta:{layout:"cover",title:"Create React App",srcSequence:"./chunks/3-cra-intro.md",slide:{raw:null,title:"Create React App",level:1,content:`# Create React App 
https://create-react-app.dev

A tool to build a ReactJS App`,frontmatter:{layout:"cover",title:"Create React App",srcSequence:"./chunks/3-cra-intro.md"},index:16,start:0,end:10,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\3-cra-intro.md",raw:`---
layout: cover
title: Create React App
---

# Create React App 
https://create-react-app.dev

A tool to build a ReactJS App
`,title:"Create React App",level:1,content:`# Create React App 
https://create-react-app.dev

A tool to build a ReactJS App`,frontmatter:{layout:"cover",title:"Create React App"},index:0,start:0,end:10},inline:{raw:`---
src: ./chunks/3-cra-intro.md
---
`,content:"",frontmatter:{},index:3,start:19,end:23},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\3-cra-intro.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:gw,meta:{srcSequence:"./chunks/3-cra-intro.md",slide:{raw:`
# Project Initialization
<br/>
In your terminal:

\`\`\`sh
# Create project directory using CRA
npx create-react-app awesome-react-app

# Move into created directory
cd awesome-react-app

# Start the project
npm start
\`\`\`

<br/>

> The project will listen on port http://localhost:3000 by default.
`,title:"Project Initialization",level:1,content:`# Project Initialization
<br/>
In your terminal:

\`\`\`sh
# Create project directory using CRA
npx create-react-app awesome-react-app

# Move into created directory
cd awesome-react-app

# Start the project
npm start
\`\`\`

<br/>

> The project will listen on port http://localhost:3000 by default.`,frontmatter:{srcSequence:"./chunks/3-cra-intro.md"},index:17,start:11,end:31,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\3-cra-intro.md",raw:`
# Project Initialization
<br/>
In your terminal:

\`\`\`sh
# Create project directory using CRA
npx create-react-app awesome-react-app

# Move into created directory
cd awesome-react-app

# Start the project
npm start
\`\`\`

<br/>

> The project will listen on port http://localhost:3000 by default.
`,title:"Project Initialization",level:1,content:`# Project Initialization
<br/>
In your terminal:

\`\`\`sh
# Create project directory using CRA
npx create-react-app awesome-react-app

# Move into created directory
cd awesome-react-app

# Start the project
npm start
\`\`\`

<br/>

> The project will listen on port http://localhost:3000 by default.`,frontmatter:{},index:1,start:11,end:31},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\3-cra-intro.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:_w,meta:{srcSequence:"./chunks/3-cra-intro.md",slide:{raw:`
# First Hello World

<img class="rounded-md" src="/images/cra-initial-page.png" />
`,title:"First Hello World",level:1,content:`# First Hello World

<img class="rounded-md" src="/images/cra-initial-page.png" />`,frontmatter:{srcSequence:"./chunks/3-cra-intro.md"},index:18,start:32,end:37,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\3-cra-intro.md",raw:`
# First Hello World

<img class="rounded-md" src="/images/cra-initial-page.png" />
`,title:"First Hello World",level:1,content:`# First Hello World

<img class="rounded-md" src="/images/cra-initial-page.png" />`,frontmatter:{},index:2,start:32,end:37},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\3-cra-intro.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Cw,meta:{srcSequence:"./chunks/3-cra-intro.md",slide:{raw:`
# Project Structure

<img class="rounded-md" src="/images/cra-initial-dir.png" />

<div class="rounded-md absolute right-0 bottom-0 bg-opacity-50 bg-gray-800 w-1/2 backdrop-blur-lg backdrop-filter p-4">

### Note

- **public** \\
used to store static assets

- **src** \\
all the works

> https://create-react-app.dev/docs/folder-structure

</div>

`,title:"Project Structure",level:1,content:`# Project Structure

<img class="rounded-md" src="/images/cra-initial-dir.png" />

<div class="rounded-md absolute right-0 bottom-0 bg-opacity-50 bg-gray-800 w-1/2 backdrop-blur-lg backdrop-filter p-4">

### Note

- **public** \\
used to store static assets

- **src** \\
all the works

> https://create-react-app.dev/docs/folder-structure

</div>`,frontmatter:{srcSequence:"./chunks/3-cra-intro.md"},index:19,start:38,end:58,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\3-cra-intro.md",raw:`
# Project Structure

<img class="rounded-md" src="/images/cra-initial-dir.png" />

<div class="rounded-md absolute right-0 bottom-0 bg-opacity-50 bg-gray-800 w-1/2 backdrop-blur-lg backdrop-filter p-4">

### Note

- **public** \\
used to store static assets

- **src** \\
all the works

> https://create-react-app.dev/docs/folder-structure

</div>

`,title:"Project Structure",level:1,content:`# Project Structure

<img class="rounded-md" src="/images/cra-initial-dir.png" />

<div class="rounded-md absolute right-0 bottom-0 bg-opacity-50 bg-gray-800 w-1/2 backdrop-blur-lg backdrop-filter p-4">

### Note

- **public** \\
used to store static assets

- **src** \\
all the works

> https://create-react-app.dev/docs/folder-structure

</div>`,frontmatter:{},index:3,start:38,end:58},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\3-cra-intro.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Fw,meta:{layout:"cover",title:"Component",srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:null,title:"Component",level:1,content:`# Component
Functional Component + React Hooks`,frontmatter:{layout:"cover",title:"Component",srcSequence:"./chunks/4-component-and-jsx.md"},index:20,start:0,end:7,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`---
layout: cover
---

# Component
Functional Component + React Hooks
`,title:"Component",level:1,content:`# Component
Functional Component + React Hooks`,frontmatter:{layout:"cover",title:"Component"},index:0,start:0,end:7},inline:{raw:`---
src: ./chunks/4-component-and-jsx.md
---
`,content:"",frontmatter:{},index:4,start:23,end:27},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Uw,meta:{srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`
# Component
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Like a piece of LEGO block.

There are two kind of component in React:
- Functional component
- Class component

<br/>
<hr/>
<br/>
<div grid="~" class="grid-cols-2 gap-4">

<div>

### Functional Component
\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

</div>

<div v-click-hide class="vlick-blurred">

### Class Component
\`\`\`jsx
class Welcome extends React.Component {
    render () {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
\`\`\`

</div>

</div>

<style>
.slidev-vclick-hidden.vlick-blurred {
  opacity: 0.5 !important;
}
</style>
`,title:"Component",level:1,content:`# Component
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Like a piece of LEGO block.

There are two kind of component in React:
- Functional component
- Class component

<br/>
<hr/>
<br/>
<div grid="~" class="grid-cols-2 gap-4">

<div>

### Functional Component
\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

</div>

<div v-click-hide class="vlick-blurred">

### Class Component
\`\`\`jsx
class Welcome extends React.Component {
    render () {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
\`\`\`

</div>

</div>

<style>
.slidev-vclick-hidden.vlick-blurred {
  opacity: 0.5 !important;
}
</style>`,frontmatter:{srcSequence:"./chunks/4-component-and-jsx.md"},index:21,start:8,end:53,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`
# Component
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Like a piece of LEGO block.

There are two kind of component in React:
- Functional component
- Class component

<br/>
<hr/>
<br/>
<div grid="~" class="grid-cols-2 gap-4">

<div>

### Functional Component
\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

</div>

<div v-click-hide class="vlick-blurred">

### Class Component
\`\`\`jsx
class Welcome extends React.Component {
    render () {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
\`\`\`

</div>

</div>

<style>
.slidev-vclick-hidden.vlick-blurred {
  opacity: 0.5 !important;
}
</style>
`,title:"Component",level:1,content:`# Component
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Like a piece of LEGO block.

There are two kind of component in React:
- Functional component
- Class component

<br/>
<hr/>
<br/>
<div grid="~" class="grid-cols-2 gap-4">

<div>

### Functional Component
\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

</div>

<div v-click-hide class="vlick-blurred">

### Class Component
\`\`\`jsx
class Welcome extends React.Component {
    render () {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
\`\`\`

</div>

</div>

<style>
.slidev-vclick-hidden.vlick-blurred {
  opacity: 0.5 !important;
}
</style>`,frontmatter:{},index:1,start:8,end:53},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Xw,meta:{srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`
# Component (2)

<br/>

A component may have :
- Props
- State + Lifecycle
- Handling Event
`,title:"Component (2)",level:1,content:`# Component (2)

<br/>

A component may have :
- Props
- State + Lifecycle
- Handling Event`,frontmatter:{srcSequence:"./chunks/4-component-and-jsx.md"},index:22,start:54,end:64,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`
# Component (2)

<br/>

A component may have :
- Props
- State + Lifecycle
- Handling Event
`,title:"Component (2)",level:1,content:`# Component (2)

<br/>

A component may have :
- Props
- State + Lifecycle
- Handling Event`,frontmatter:{},index:2,start:54,end:64},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:e_,meta:{srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`
# Props
A value that we pass into a component. It can be anything.

\`\`\`jsx
# Child Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

# Parent Component
function App () {
    return <Welcome name="Daniyal" />
}
\`\`\`

Eventhough, there is a reserved props, \`children\`
`,title:"Props",level:1,content:`# Props
A value that we pass into a component. It can be anything.

\`\`\`jsx
# Child Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

# Parent Component
function App () {
    return <Welcome name="Daniyal" />
}
\`\`\`

Eventhough, there is a reserved props, \`children\``,frontmatter:{srcSequence:"./chunks/4-component-and-jsx.md"},index:23,start:65,end:83,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`
# Props
A value that we pass into a component. It can be anything.

\`\`\`jsx
# Child Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

# Parent Component
function App () {
    return <Welcome name="Daniyal" />
}
\`\`\`

Eventhough, there is a reserved props, \`children\`
`,title:"Props",level:1,content:`# Props
A value that we pass into a component. It can be anything.

\`\`\`jsx
# Child Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

# Parent Component
function App () {
    return <Welcome name="Daniyal" />
}
\`\`\`

Eventhough, there is a reserved props, \`children\``,frontmatter:{},index:3,start:65,end:83},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:o_,meta:{srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`
# Props.children
\`children\` prop is used to pass element as child of an element.


\`\`\`jsx
# Child Component
function Title(props) {
  return <h1>{props.children}</h1>;
}

# Parent Component
function App () {
    return <Title>\u{1F525} Javascript is Awesome \u{1F525}</Title>
}
\`\`\`
`,title:"Props.children",level:1,content:`# Props.children
\`children\` prop is used to pass element as child of an element.


\`\`\`jsx
# Child Component
function Title(props) {
  return <h1>{props.children}</h1>;
}

# Parent Component
function App () {
    return <Title>\u{1F525} Javascript is Awesome \u{1F525}</Title>
}
\`\`\``,frontmatter:{srcSequence:"./chunks/4-component-and-jsx.md"},index:24,start:84,end:101,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`
# Props.children
\`children\` prop is used to pass element as child of an element.


\`\`\`jsx
# Child Component
function Title(props) {
  return <h1>{props.children}</h1>;
}

# Parent Component
function App () {
    return <Title>\u{1F525} Javascript is Awesome \u{1F525}</Title>
}
\`\`\`
`,title:"Props.children",level:1,content:`# Props.children
\`children\` prop is used to pass element as child of an element.


\`\`\`jsx
# Child Component
function Title(props) {
  return <h1>{props.children}</h1>;
}

# Parent Component
function App () {
    return <Title>\u{1F525} Javascript is Awesome \u{1F525}</Title>
}
\`\`\``,frontmatter:{},index:4,start:84,end:101},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:a_,meta:{class:"grid grid-rows-[auto,1fr]",srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`---
class: grid grid-rows-[auto,1fr]
---

<div>

# State + Lifecycle
State is value that lives in component, lifecycle is how the component lives. At the beginning, state and lifecycle only exist in **Class Component** until **Hooks** come.

<hr/>

## State 

<br/>

</div>
<div grid="~" class="grid-cols-2 gap-4">
<div flex="~ col">
  <h5 class="mb-2">Class Component</h5>
  <iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-3-state-pjqiq0?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FCounter.jsx&theme=dark&view=editor"
      style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
      title="mentify-3-state-class"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
</div>
<div flex="~ col">
  <h5 class="mb-2">Functional Component</h5>
  <iframe class="flex-grow" src="https://codesandbox.io/embed/exciting-ives-yy2stw?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FCounter.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-3-state-functional"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div>

</div>
`,title:"State + Lifecycle",level:1,content:`<div>

# State + Lifecycle
State is value that lives in component, lifecycle is how the component lives. At the beginning, state and lifecycle only exist in **Class Component** until **Hooks** come.

<hr/>

## State 

<br/>

</div>
<div grid="~" class="grid-cols-2 gap-4">
<div flex="~ col">
  <h5 class="mb-2">Class Component</h5>
  <iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-3-state-pjqiq0?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FCounter.jsx&theme=dark&view=editor"
      style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
      title="mentify-3-state-class"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
</div>
<div flex="~ col">
  <h5 class="mb-2">Functional Component</h5>
  <iframe class="flex-grow" src="https://codesandbox.io/embed/exciting-ives-yy2stw?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FCounter.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-3-state-functional"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div>

</div>`,frontmatter:{class:"grid grid-rows-[auto,1fr]",srcSequence:"./chunks/4-component-and-jsx.md"},index:25,start:101,end:139,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`---
class: grid grid-rows-[auto,1fr]
---

<div>

# State + Lifecycle
State is value that lives in component, lifecycle is how the component lives. At the beginning, state and lifecycle only exist in **Class Component** until **Hooks** come.

<hr/>

## State 

<br/>

</div>
<div grid="~" class="grid-cols-2 gap-4">
<div flex="~ col">
  <h5 class="mb-2">Class Component</h5>
  <iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-3-state-pjqiq0?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FCounter.jsx&theme=dark&view=editor"
      style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
      title="mentify-3-state-class"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
</div>
<div flex="~ col">
  <h5 class="mb-2">Functional Component</h5>
  <iframe class="flex-grow" src="https://codesandbox.io/embed/exciting-ives-yy2stw?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FCounter.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-3-state-functional"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div>

</div>
`,title:"State + Lifecycle",level:1,content:`<div>

# State + Lifecycle
State is value that lives in component, lifecycle is how the component lives. At the beginning, state and lifecycle only exist in **Class Component** until **Hooks** come.

<hr/>

## State 

<br/>

</div>
<div grid="~" class="grid-cols-2 gap-4">
<div flex="~ col">
  <h5 class="mb-2">Class Component</h5>
  <iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-3-state-pjqiq0?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FCounter.jsx&theme=dark&view=editor"
      style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
      title="mentify-3-state-class"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
</div>
<div flex="~ col">
  <h5 class="mb-2">Functional Component</h5>
  <iframe class="flex-grow" src="https://codesandbox.io/embed/exciting-ives-yy2stw?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FCounter.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-3-state-functional"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div>

</div>`,frontmatter:{class:"grid grid-rows-[auto,1fr]"},index:5,start:101,end:139},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:d_,meta:{class:"grid grid-rows-[auto,1fr,auto] gap-2",srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`---
class: grid grid-rows-[auto,1fr,auto] gap-2
---

## Lifecycle

<div flex="~" class="items-center justify-center">
  <img class="rounded-md w-4/5" src="/images/react-lifecycle.png" />
</div>

> https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
>
> https://reactjs.org/docs/state-and-lifecycle.html
`,title:"Lifecycle",level:2,content:`## Lifecycle

<div flex="~" class="items-center justify-center">
  <img class="rounded-md w-4/5" src="/images/react-lifecycle.png" />
</div>

> https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
>
> https://reactjs.org/docs/state-and-lifecycle.html`,frontmatter:{class:"grid grid-rows-[auto,1fr,auto] gap-2",srcSequence:"./chunks/4-component-and-jsx.md"},index:26,start:139,end:153,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`---
class: grid grid-rows-[auto,1fr,auto] gap-2
---

## Lifecycle

<div flex="~" class="items-center justify-center">
  <img class="rounded-md w-4/5" src="/images/react-lifecycle.png" />
</div>

> https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
>
> https://reactjs.org/docs/state-and-lifecycle.html
`,title:"Lifecycle",level:2,content:`## Lifecycle

<div flex="~" class="items-center justify-center">
  <img class="rounded-md w-4/5" src="/images/react-lifecycle.png" />
</div>

> https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
>
> https://reactjs.org/docs/state-and-lifecycle.html`,frontmatter:{class:"grid grid-rows-[auto,1fr,auto] gap-2"},index:6,start:139,end:153},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:h_,meta:{class:"grid grid-rows-[auto,1fr] gap-2",srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`---
class: grid grid-rows-[auto,1fr] gap-2
---

## Lifecycle (2)

<div grid="~ cols-2 gap-4">
  <div flex="~ col">
    <h5 class="mb-4">Class Component</h5>
    <iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-3-lifecycle-class-mgmuqq?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FLifecycle.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-3-lifecycle-class"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
  <div flex="~ col">
    <h5 class="mb-4">Functional Component</h5>
    <iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-3-lifecycle-functional-hx5o2k?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FLifecycle.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-3-lifecycle-functional"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
</div>
`,title:"Lifecycle (2)",level:2,content:`## Lifecycle (2)

<div grid="~ cols-2 gap-4">
  <div flex="~ col">
    <h5 class="mb-4">Class Component</h5>
    <iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-3-lifecycle-class-mgmuqq?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FLifecycle.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-3-lifecycle-class"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
  <div flex="~ col">
    <h5 class="mb-4">Functional Component</h5>
    <iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-3-lifecycle-functional-hx5o2k?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FLifecycle.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-3-lifecycle-functional"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
</div>`,frontmatter:{class:"grid grid-rows-[auto,1fr] gap-2",srcSequence:"./chunks/4-component-and-jsx.md"},index:27,start:153,end:180,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`---
class: grid grid-rows-[auto,1fr] gap-2
---

## Lifecycle (2)

<div grid="~ cols-2 gap-4">
  <div flex="~ col">
    <h5 class="mb-4">Class Component</h5>
    <iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-3-lifecycle-class-mgmuqq?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FLifecycle.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-3-lifecycle-class"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
  <div flex="~ col">
    <h5 class="mb-4">Functional Component</h5>
    <iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-3-lifecycle-functional-hx5o2k?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FLifecycle.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-3-lifecycle-functional"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
</div>
`,title:"Lifecycle (2)",level:2,content:`## Lifecycle (2)

<div grid="~ cols-2 gap-4">
  <div flex="~ col">
    <h5 class="mb-4">Class Component</h5>
    <iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-3-lifecycle-class-mgmuqq?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FLifecycle.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-3-lifecycle-class"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
  <div flex="~ col">
    <h5 class="mb-4">Functional Component</h5>
    <iframe class="flex-grow" src="https://codesandbox.io/embed/mentify-3-lifecycle-functional-hx5o2k?fontsize=10&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FLifecycle.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-3-lifecycle-functional"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
</div>`,frontmatter:{class:"grid grid-rows-[auto,1fr] gap-2"},index:7,start:153,end:180},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:H_,meta:{clicks:1,srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`---
clicks: 1
---

# Hooks
Hooks allow you to reuse stateful logic without changing your component hierarchy.

Available hooks : 
<ul>
  <li>useState</li>
  <li>useEffect</li>
  <li v-click-hide="1" class="vlick-blurred">useContext</li>
  <li v-click-hide="1" class="vlick-blurred">useReducer</li>
  <li v-click-hide="1" class="vlick-blurred">useCallback</li>
  <li v-click-hide="1" class="vlick-blurred">useMemo</li>
  <li v-click-hide="1" class="vlick-blurred">useRef</li>
</ul>

<br/>

> https://reactjs.org/docs/hooks-intro.html


<style>
.slidev-vclick-hidden.vlick-blurred {
  opacity: 0.25 !important;
}
</style>
`,title:"Hooks",level:1,content:`# Hooks
Hooks allow you to reuse stateful logic without changing your component hierarchy.

Available hooks : 
<ul>
  <li>useState</li>
  <li>useEffect</li>
  <li v-click-hide="1" class="vlick-blurred">useContext</li>
  <li v-click-hide="1" class="vlick-blurred">useReducer</li>
  <li v-click-hide="1" class="vlick-blurred">useCallback</li>
  <li v-click-hide="1" class="vlick-blurred">useMemo</li>
  <li v-click-hide="1" class="vlick-blurred">useRef</li>
</ul>

<br/>

> https://reactjs.org/docs/hooks-intro.html


<style>
.slidev-vclick-hidden.vlick-blurred {
  opacity: 0.25 !important;
}
</style>`,frontmatter:{clicks:1,srcSequence:"./chunks/4-component-and-jsx.md"},index:28,start:180,end:209,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`---
clicks: 1
---

# Hooks
Hooks allow you to reuse stateful logic without changing your component hierarchy.

Available hooks : 
<ul>
  <li>useState</li>
  <li>useEffect</li>
  <li v-click-hide="1" class="vlick-blurred">useContext</li>
  <li v-click-hide="1" class="vlick-blurred">useReducer</li>
  <li v-click-hide="1" class="vlick-blurred">useCallback</li>
  <li v-click-hide="1" class="vlick-blurred">useMemo</li>
  <li v-click-hide="1" class="vlick-blurred">useRef</li>
</ul>

<br/>

> https://reactjs.org/docs/hooks-intro.html


<style>
.slidev-vclick-hidden.vlick-blurred {
  opacity: 0.25 !important;
}
</style>
`,title:"Hooks",level:1,content:`# Hooks
Hooks allow you to reuse stateful logic without changing your component hierarchy.

Available hooks : 
<ul>
  <li>useState</li>
  <li>useEffect</li>
  <li v-click-hide="1" class="vlick-blurred">useContext</li>
  <li v-click-hide="1" class="vlick-blurred">useReducer</li>
  <li v-click-hide="1" class="vlick-blurred">useCallback</li>
  <li v-click-hide="1" class="vlick-blurred">useMemo</li>
  <li v-click-hide="1" class="vlick-blurred">useRef</li>
</ul>

<br/>

> https://reactjs.org/docs/hooks-intro.html


<style>
.slidev-vclick-hidden.vlick-blurred {
  opacity: 0.25 !important;
}
</style>`,frontmatter:{clicks:1},index:8,start:180,end:209},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:V_,meta:{srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`
## useState
Returns a stateful value, and a function to update it.

\`\`\`js
const [state, setState] = useState(initialState);
\`\`\`

Two ways of updating a state
\`\`\`js
// pass the new value as paramater
setState(newState);

// or, use a function as the parameter to get previous state value
setState((prevState) => prevState + 1);
\`\`\`
`,title:"useState",level:2,content:`## useState
Returns a stateful value, and a function to update it.

\`\`\`js
const [state, setState] = useState(initialState);
\`\`\`

Two ways of updating a state
\`\`\`js
// pass the new value as paramater
setState(newState);

// or, use a function as the parameter to get previous state value
setState((prevState) => prevState + 1);
\`\`\``,frontmatter:{srcSequence:"./chunks/4-component-and-jsx.md"},index:29,start:210,end:227,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`
## useState
Returns a stateful value, and a function to update it.

\`\`\`js
const [state, setState] = useState(initialState);
\`\`\`

Two ways of updating a state
\`\`\`js
// pass the new value as paramater
setState(newState);

// or, use a function as the parameter to get previous state value
setState((prevState) => prevState + 1);
\`\`\`
`,title:"useState",level:2,content:`## useState
Returns a stateful value, and a function to update it.

\`\`\`js
const [state, setState] = useState(initialState);
\`\`\`

Two ways of updating a state
\`\`\`js
// pass the new value as paramater
setState(newState);

// or, use a function as the parameter to get previous state value
setState((prevState) => prevState + 1);
\`\`\``,frontmatter:{},index:9,start:210,end:227},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:J_,meta:{srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`
## useEffect
Run side effects when the render is done. \`useEffect\` accepts a function, and an array of dependency as its parameter.

\`\`\`js
useEffect(didUpdate, deps);
\`\`\`

Side effects is a way to synchronize with some external system in functional component, such as DOM manipulation, use third-party libraries, network/fetching/send data from/to Webservice, and so on.
`,title:"useEffect",level:2,content:"## useEffect\nRun side effects when the render is done. `useEffect` accepts a function, and an array of dependency as its parameter.\n\n```js\nuseEffect(didUpdate, deps);\n```\n\nSide effects is a way to synchronize with some external system in functional component, such as DOM manipulation, use third-party libraries, network/fetching/send data from/to Webservice, and so on.",frontmatter:{srcSequence:"./chunks/4-component-and-jsx.md"},index:30,start:228,end:238,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`
## useEffect
Run side effects when the render is done. \`useEffect\` accepts a function, and an array of dependency as its parameter.

\`\`\`js
useEffect(didUpdate, deps);
\`\`\`

Side effects is a way to synchronize with some external system in functional component, such as DOM manipulation, use third-party libraries, network/fetching/send data from/to Webservice, and so on.
`,title:"useEffect",level:2,content:"## useEffect\nRun side effects when the render is done. `useEffect` accepts a function, and an array of dependency as its parameter.\n\n```js\nuseEffect(didUpdate, deps);\n```\n\nSide effects is a way to synchronize with some external system in functional component, such as DOM manipulation, use third-party libraries, network/fetching/send data from/to Webservice, and so on.",frontmatter:{},index:10,start:228,end:238},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:e3,meta:{srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`
## useEffect (2)

A function that passed to \`useEffect\` may has a "cleanup function" that would be run before the component rerender.
\`\`\`js
useEffect(() => {
  // function body
  console.log("rendered");

  // return a cleanup function
  return () => {
    console.log("run before rerender");
  }
})
\`\`\`
`,title:"useEffect (2)",level:2,content:`## useEffect (2)

A function that passed to \`useEffect\` may has a "cleanup function" that would be run before the component rerender.
\`\`\`js
useEffect(() => {
  // function body
  console.log("rendered");

  // return a cleanup function
  return () => {
    console.log("run before rerender");
  }
})
\`\`\``,frontmatter:{srcSequence:"./chunks/4-component-and-jsx.md"},index:31,start:239,end:255,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`
## useEffect (2)

A function that passed to \`useEffect\` may has a "cleanup function" that would be run before the component rerender.
\`\`\`js
useEffect(() => {
  // function body
  console.log("rendered");

  // return a cleanup function
  return () => {
    console.log("run before rerender");
  }
})
\`\`\`
`,title:"useEffect (2)",level:2,content:`## useEffect (2)

A function that passed to \`useEffect\` may has a "cleanup function" that would be run before the component rerender.
\`\`\`js
useEffect(() => {
  // function body
  console.log("rendered");

  // return a cleanup function
  return () => {
    console.log("run before rerender");
  }
})
\`\`\``,frontmatter:{},index:11,start:239,end:255},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:o3,meta:{srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`
## useEffect (3)
With effect dependencies, we can set the side effect to **run every render**, **on first render**, or **when the dependencies changes**.

\`\`\`js
// Will run in first render
useEffect(() => {
  console.log("rendered");
}, []) // <-- empty dependency array


// Will run when the dependencies changes
useEffect(() => {
  document.title = count
}, [count]) // <-- use count state as dependencies
\`\`\`
`,title:"useEffect (3)",level:2,content:`## useEffect (3)
With effect dependencies, we can set the side effect to **run every render**, **on first render**, or **when the dependencies changes**.

\`\`\`js
// Will run in first render
useEffect(() => {
  console.log("rendered");
}, []) // <-- empty dependency array


// Will run when the dependencies changes
useEffect(() => {
  document.title = count
}, [count]) // <-- use count state as dependencies
\`\`\``,frontmatter:{srcSequence:"./chunks/4-component-and-jsx.md"},index:32,start:256,end:273,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`
## useEffect (3)
With effect dependencies, we can set the side effect to **run every render**, **on first render**, or **when the dependencies changes**.

\`\`\`js
// Will run in first render
useEffect(() => {
  console.log("rendered");
}, []) // <-- empty dependency array


// Will run when the dependencies changes
useEffect(() => {
  document.title = count
}, [count]) // <-- use count state as dependencies
\`\`\`
`,title:"useEffect (3)",level:2,content:`## useEffect (3)
With effect dependencies, we can set the side effect to **run every render**, **on first render**, or **when the dependencies changes**.

\`\`\`js
// Will run in first render
useEffect(() => {
  console.log("rendered");
}, []) // <-- empty dependency array


// Will run when the dependencies changes
useEffect(() => {
  document.title = count
}, [count]) // <-- use count state as dependencies
\`\`\``,frontmatter:{},index:12,start:256,end:273},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:u3,meta:{srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`
# Handling Event
Add interactivity to the component.

\`\`\`jsx 
<button onClick={() => sayHello()}>Say Hello</button>

<input name="name" type="text" onChange={handleInputChange} />
\`\`\`
<br/>

Pass \`event\` object to event handler
\`\`\`jsx 
<button onClick={(ev) => sayHello(ev)}>Say Hello</button>
\`\`\`
`,title:"Handling Event",level:1,content:'# Handling Event\nAdd interactivity to the component.\n\n```jsx \n<button onClick={() => sayHello()}>Say Hello</button>\n\n<input name="name" type="text" onChange={handleInputChange} />\n```\n<br/>\n\nPass `event` object to event handler\n```jsx \n<button onClick={(ev) => sayHello(ev)}>Say Hello</button>\n```',frontmatter:{srcSequence:"./chunks/4-component-and-jsx.md"},index:33,start:274,end:290,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`
# Handling Event
Add interactivity to the component.

\`\`\`jsx 
<button onClick={() => sayHello()}>Say Hello</button>

<input name="name" type="text" onChange={handleInputChange} />
\`\`\`
<br/>

Pass \`event\` object to event handler
\`\`\`jsx 
<button onClick={(ev) => sayHello(ev)}>Say Hello</button>
\`\`\`
`,title:"Handling Event",level:1,content:'# Handling Event\nAdd interactivity to the component.\n\n```jsx \n<button onClick={() => sayHello()}>Say Hello</button>\n\n<input name="name" type="text" onChange={handleInputChange} />\n```\n<br/>\n\nPass `event` object to event handler\n```jsx \n<button onClick={(ev) => sayHello(ev)}>Say Hello</button>\n```',frontmatter:{},index:13,start:274,end:290},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:h3,meta:{srcSequence:"./chunks/4-component-and-jsx.md",slide:{raw:`
# Event Handler on Custom Component
An event handler is just function in props.

\`\`\`jsx 
function Button (props) {
  return <button onClick={props.onClick}>{props.children}</button>
}

function App() {
  return (
    <div>
      <Button onClick={() => alert("\u2764\uFE0F")}>Button \u2764\uFE0F</Button>
      <Button onClick={() => alert("\u{1F44D}")}>Button \u{1F44D}</Button>
      <Button onClick={() => alert("\u{1F680}")}>Button \u{1F680}</Button>
    </div>
  )
}
\`\`\``,title:"Event Handler on Custom Component",level:1,content:`# Event Handler on Custom Component
An event handler is just function in props.

\`\`\`jsx 
function Button (props) {
  return <button onClick={props.onClick}>{props.children}</button>
}

function App() {
  return (
    <div>
      <Button onClick={() => alert("\u2764\uFE0F")}>Button \u2764\uFE0F</Button>
      <Button onClick={() => alert("\u{1F44D}")}>Button \u{1F44D}</Button>
      <Button onClick={() => alert("\u{1F680}")}>Button \u{1F680}</Button>
    </div>
  )
}
\`\`\``,frontmatter:{srcSequence:"./chunks/4-component-and-jsx.md"},index:34,start:291,end:310,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",raw:`
# Event Handler on Custom Component
An event handler is just function in props.

\`\`\`jsx 
function Button (props) {
  return <button onClick={props.onClick}>{props.children}</button>
}

function App() {
  return (
    <div>
      <Button onClick={() => alert("\u2764\uFE0F")}>Button \u2764\uFE0F</Button>
      <Button onClick={() => alert("\u{1F44D}")}>Button \u{1F44D}</Button>
      <Button onClick={() => alert("\u{1F680}")}>Button \u{1F680}</Button>
    </div>
  )
}
\`\`\``,title:"Event Handler on Custom Component",level:1,content:`# Event Handler on Custom Component
An event handler is just function in props.

\`\`\`jsx 
function Button (props) {
  return <button onClick={props.onClick}>{props.children}</button>
}

function App() {
  return (
    <div>
      <Button onClick={() => alert("\u2764\uFE0F")}>Button \u2764\uFE0F</Button>
      <Button onClick={() => alert("\u{1F44D}")}>Button \u{1F44D}</Button>
      <Button onClick={() => alert("\u{1F680}")}>Button \u{1F680}</Button>
    </div>
  )
}
\`\`\``,frontmatter:{},index:14,start:291,end:310},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\4-component-and-jsx.md",notesHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:w3,meta:{title:"List Rendering",srcSequence:"./chunks/5-list-and-conditional.md",slide:{raw:null,title:"List Rendering",level:1,content:`# List Rendering
Rendering multiple components

Normally, we use \`map\` to render multiple component from a given array.
\`\`\`jsx 
const numbers = [1,2,3,4,5,6]
const listOfComponents = numbers.map((val) => {
    return <li>{val}</li>
})

<ul>
    {listOfComponents}
</ul>
\`\`\``,frontmatter:{title:"List Rendering",srcSequence:"./chunks/5-list-and-conditional.md"},index:35,start:0,end:15,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\5-list-and-conditional.md",raw:`# List Rendering
Rendering multiple components

Normally, we use \`map\` to render multiple component from a given array.
\`\`\`jsx 
const numbers = [1,2,3,4,5,6]
const listOfComponents = numbers.map((val) => {
    return <li>{val}</li>
})

<ul>
    {listOfComponents}
</ul>
\`\`\`
`,title:"List Rendering",level:1,content:`# List Rendering
Rendering multiple components

Normally, we use \`map\` to render multiple component from a given array.
\`\`\`jsx 
const numbers = [1,2,3,4,5,6]
const listOfComponents = numbers.map((val) => {
    return <li>{val}</li>
})

<ul>
    {listOfComponents}
</ul>
\`\`\``,frontmatter:{title:"List Rendering"},index:0,start:0,end:15},inline:{raw:`---
src: ./chunks/5-list-and-conditional.md
---
`,content:"",frontmatter:{},index:5,start:27,end:31},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\5-list-and-conditional.md",notesHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:A3,meta:{class:"grid grid-rows-[auto,1fr,auto]",srcSequence:"./chunks/5-list-and-conditional.md",slide:{raw:`---
class: grid grid-rows-[auto,1fr,auto]
---

<div>

## Keys
Every list element should have key, and it should be unique among siblings

</div>

<div>

\`\`\`jsx
const listOfComponents = numbers.map((val) => {
    return <li key={val}>{val}</li>
})
\`\`\`

</div>

> Why we should add "key"
> 1. Improve render performance
> 2. Avoid bug when rendering list
`,title:"Keys",level:2,content:`<div>

## Keys
Every list element should have key, and it should be unique among siblings

</div>

<div>

\`\`\`jsx
const listOfComponents = numbers.map((val) => {
    return <li key={val}>{val}</li>
})
\`\`\`

</div>

> Why we should add "key"
> 1. Improve render performance
> 2. Avoid bug when rendering list`,frontmatter:{class:"grid grid-rows-[auto,1fr,auto]",srcSequence:"./chunks/5-list-and-conditional.md"},index:36,start:15,end:40,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\5-list-and-conditional.md",raw:`---
class: grid grid-rows-[auto,1fr,auto]
---

<div>

## Keys
Every list element should have key, and it should be unique among siblings

</div>

<div>

\`\`\`jsx
const listOfComponents = numbers.map((val) => {
    return <li key={val}>{val}</li>
})
\`\`\`

</div>

> Why we should add "key"
> 1. Improve render performance
> 2. Avoid bug when rendering list
`,title:"Keys",level:2,content:`<div>

## Keys
Every list element should have key, and it should be unique among siblings

</div>

<div>

\`\`\`jsx
const listOfComponents = numbers.map((val) => {
    return <li key={val}>{val}</li>
})
\`\`\`

</div>

> Why we should add "key"
> 1. Improve render performance
> 2. Avoid bug when rendering list`,frontmatter:{class:"grid grid-rows-[auto,1fr,auto]"},index:1,start:15,end:40},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\5-list-and-conditional.md",notesHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:F3,meta:{srcSequence:"./chunks/5-list-and-conditional.md",slide:{raw:`
## List Rendering : Exercise 

<br />

Create a list of card from the data below : 

\`\`\`js
const data =  [
    { name: "Kung Pao Chicken", image: "https://unsplash.com/photos/c1gCogPXC_s/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODk5Mjgz&force=true&w=1920", price: 20_000 },
    { name: "Ramen", image: "https://unsplash.com/photos/RwAXb8Hv_sU/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODk5MTQz&force=true&w=1920", price: 25_000 },
    { name: "Beef Steak", image: "https://unsplash.com/photos/auIbTAcSH6E/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODgxMDM4&force=true&w=1920", price: 55_000 },
    { name: "Vegetable and Meat Bowl", image: "https://unsplash.com/photos/kcA-c3f_3FE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODczNzE5&force=true&w=1920", price: 30_000 },
    { name: "Burger", image: "https://unsplash.com/photos/E94j3rMcxlw/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODY5NDk3&force=true&w=1920", price: 23_000 },
]
\`\`\`
`,title:"List Rendering : Exercise",level:2,content:`## List Rendering : Exercise 

<br />

Create a list of card from the data below : 

\`\`\`js
const data =  [
    { name: "Kung Pao Chicken", image: "https://unsplash.com/photos/c1gCogPXC_s/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODk5Mjgz&force=true&w=1920", price: 20_000 },
    { name: "Ramen", image: "https://unsplash.com/photos/RwAXb8Hv_sU/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODk5MTQz&force=true&w=1920", price: 25_000 },
    { name: "Beef Steak", image: "https://unsplash.com/photos/auIbTAcSH6E/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODgxMDM4&force=true&w=1920", price: 55_000 },
    { name: "Vegetable and Meat Bowl", image: "https://unsplash.com/photos/kcA-c3f_3FE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODczNzE5&force=true&w=1920", price: 30_000 },
    { name: "Burger", image: "https://unsplash.com/photos/E94j3rMcxlw/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODY5NDk3&force=true&w=1920", price: 23_000 },
]
\`\`\``,frontmatter:{srcSequence:"./chunks/5-list-and-conditional.md"},index:37,start:41,end:58,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\5-list-and-conditional.md",raw:`
## List Rendering : Exercise 

<br />

Create a list of card from the data below : 

\`\`\`js
const data =  [
    { name: "Kung Pao Chicken", image: "https://unsplash.com/photos/c1gCogPXC_s/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODk5Mjgz&force=true&w=1920", price: 20_000 },
    { name: "Ramen", image: "https://unsplash.com/photos/RwAXb8Hv_sU/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODk5MTQz&force=true&w=1920", price: 25_000 },
    { name: "Beef Steak", image: "https://unsplash.com/photos/auIbTAcSH6E/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODgxMDM4&force=true&w=1920", price: 55_000 },
    { name: "Vegetable and Meat Bowl", image: "https://unsplash.com/photos/kcA-c3f_3FE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODczNzE5&force=true&w=1920", price: 30_000 },
    { name: "Burger", image: "https://unsplash.com/photos/E94j3rMcxlw/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODY5NDk3&force=true&w=1920", price: 23_000 },
]
\`\`\`
`,title:"List Rendering : Exercise",level:2,content:`## List Rendering : Exercise 

<br />

Create a list of card from the data below : 

\`\`\`js
const data =  [
    { name: "Kung Pao Chicken", image: "https://unsplash.com/photos/c1gCogPXC_s/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODk5Mjgz&force=true&w=1920", price: 20_000 },
    { name: "Ramen", image: "https://unsplash.com/photos/RwAXb8Hv_sU/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODk5MTQz&force=true&w=1920", price: 25_000 },
    { name: "Beef Steak", image: "https://unsplash.com/photos/auIbTAcSH6E/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODgxMDM4&force=true&w=1920", price: 55_000 },
    { name: "Vegetable and Meat Bowl", image: "https://unsplash.com/photos/kcA-c3f_3FE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODczNzE5&force=true&w=1920", price: 30_000 },
    { name: "Burger", image: "https://unsplash.com/photos/E94j3rMcxlw/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODY5NDk3&force=true&w=1920", price: 23_000 },
]
\`\`\``,frontmatter:{},index:2,start:41,end:58},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\5-list-and-conditional.md",notesHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:M3,meta:{srcSequence:"./chunks/5-list-and-conditional.md",slide:{raw:`
# Conditional Render
Render your component conditionally

We can use any conditional control flow to render a component condition, such as :
- \`if\`
- \`switch\`
- or, [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- or, [short-circuit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation)
`,title:"Conditional Render",level:1,content:`# Conditional Render
Render your component conditionally

We can use any conditional control flow to render a component condition, such as :
- \`if\`
- \`switch\`
- or, [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- or, [short-circuit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation)`,frontmatter:{srcSequence:"./chunks/5-list-and-conditional.md"},index:38,start:59,end:69,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\5-list-and-conditional.md",raw:`
# Conditional Render
Render your component conditionally

We can use any conditional control flow to render a component condition, such as :
- \`if\`
- \`switch\`
- or, [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- or, [short-circuit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation)
`,title:"Conditional Render",level:1,content:`# Conditional Render
Render your component conditionally

We can use any conditional control flow to render a component condition, such as :
- \`if\`
- \`switch\`
- or, [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- or, [short-circuit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation)`,frontmatter:{},index:3,start:59,end:69},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\5-list-and-conditional.md",notesHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:N3,meta:{srcSequence:"./chunks/5-list-and-conditional.md",slide:{raw:`
## Sample

<br/>

<h5>If statement</h5>

\`\`\`jsx 
function HideableWithIf ({ isHide }) {
    if (isHide) return null

    return <h1>Hello there</h1>
}
\`\`\`

<h5>Switch statement</h5>

\`\`\`jsx 
function RenderWithSwitch ({ type }) {
    switch (type) {
        case 'greeting': 
            return <h1>Hello there</h1>
        case 'action':
            return <button onClick={() => alert("You've clicked me")}>Click Me</button>
        default:
            return <p>Default</p>
    }
}
\`\`\`
`,title:"Sample",level:2,content:`## Sample

<br/>

<h5>If statement</h5>

\`\`\`jsx 
function HideableWithIf ({ isHide }) {
    if (isHide) return null

    return <h1>Hello there</h1>
}
\`\`\`

<h5>Switch statement</h5>

\`\`\`jsx 
function RenderWithSwitch ({ type }) {
    switch (type) {
        case 'greeting': 
            return <h1>Hello there</h1>
        case 'action':
            return <button onClick={() => alert("You've clicked me")}>Click Me</button>
        default:
            return <p>Default</p>
    }
}
\`\`\``,frontmatter:{srcSequence:"./chunks/5-list-and-conditional.md"},index:39,start:70,end:100,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\5-list-and-conditional.md",raw:`
## Sample

<br/>

<h5>If statement</h5>

\`\`\`jsx 
function HideableWithIf ({ isHide }) {
    if (isHide) return null

    return <h1>Hello there</h1>
}
\`\`\`

<h5>Switch statement</h5>

\`\`\`jsx 
function RenderWithSwitch ({ type }) {
    switch (type) {
        case 'greeting': 
            return <h1>Hello there</h1>
        case 'action':
            return <button onClick={() => alert("You've clicked me")}>Click Me</button>
        default:
            return <p>Default</p>
    }
}
\`\`\`
`,title:"Sample",level:2,content:`## Sample

<br/>

<h5>If statement</h5>

\`\`\`jsx 
function HideableWithIf ({ isHide }) {
    if (isHide) return null

    return <h1>Hello there</h1>
}
\`\`\`

<h5>Switch statement</h5>

\`\`\`jsx 
function RenderWithSwitch ({ type }) {
    switch (type) {
        case 'greeting': 
            return <h1>Hello there</h1>
        case 'action':
            return <button onClick={() => alert("You've clicked me")}>Click Me</button>
        default:
            return <p>Default</p>
    }
}
\`\`\``,frontmatter:{},index:4,start:70,end:100},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\5-list-and-conditional.md",notesHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:U3,meta:{class:"grid grid-rows-[1fr,auto]",srcSequence:"./chunks/5-list-and-conditional.md",slide:{raw:`---
class: grid grid-rows-[1fr,auto]
---

<div>

<h5>Ternary operator</h5>

\`\`\`jsx
function HiddenTernary ({ isVisible }) {
    return isVisible ? <h1>You can see me</h1> : <h1>Something is hidden here</h1>
}
\`\`\`

<h5>Short-circuit</h5>

\`\`\`jsx
function HideableWithShortCircuit ({ isVisible }) {
    return isVisible && <h1>You can see me</h1>;
}
\`\`\`

</div>

> **Booleans, Null, and Undefined Are Ignored**
>
> \`false\`, \`null\`, \`undefined\`, and \`true\` are valid children.
>
> https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored`,content:`<div>

<h5>Ternary operator</h5>

\`\`\`jsx
function HiddenTernary ({ isVisible }) {
    return isVisible ? <h1>You can see me</h1> : <h1>Something is hidden here</h1>
}
\`\`\`

<h5>Short-circuit</h5>

\`\`\`jsx
function HideableWithShortCircuit ({ isVisible }) {
    return isVisible && <h1>You can see me</h1>;
}
\`\`\`

</div>

> **Booleans, Null, and Undefined Are Ignored**
>
> \`false\`, \`null\`, \`undefined\`, and \`true\` are valid children.
>
> https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored`,frontmatter:{class:"grid grid-rows-[1fr,auto]",srcSequence:"./chunks/5-list-and-conditional.md"},index:40,start:100,end:129,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\5-list-and-conditional.md",raw:`---
class: grid grid-rows-[1fr,auto]
---

<div>

<h5>Ternary operator</h5>

\`\`\`jsx
function HiddenTernary ({ isVisible }) {
    return isVisible ? <h1>You can see me</h1> : <h1>Something is hidden here</h1>
}
\`\`\`

<h5>Short-circuit</h5>

\`\`\`jsx
function HideableWithShortCircuit ({ isVisible }) {
    return isVisible && <h1>You can see me</h1>;
}
\`\`\`

</div>

> **Booleans, Null, and Undefined Are Ignored**
>
> \`false\`, \`null\`, \`undefined\`, and \`true\` are valid children.
>
> https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored`,content:`<div>

<h5>Ternary operator</h5>

\`\`\`jsx
function HiddenTernary ({ isVisible }) {
    return isVisible ? <h1>You can see me</h1> : <h1>Something is hidden here</h1>
}
\`\`\`

<h5>Short-circuit</h5>

\`\`\`jsx
function HideableWithShortCircuit ({ isVisible }) {
    return isVisible && <h1>You can see me</h1>;
}
\`\`\`

</div>

> **Booleans, Null, and Undefined Are Ignored**
>
> \`false\`, \`null\`, \`undefined\`, and \`true\` are valid children.
>
> https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored`,frontmatter:{class:"grid grid-rows-[1fr,auto]"},index:5,start:100,end:129},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\5-list-and-conditional.md",notesHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:Y3,meta:{layout:"cover",title:"Styling with CSS Module",srcSequence:"./chunks/6-css-module.md",slide:{raw:null,title:"Styling with CSS Module",level:1,content:`# Styling with CSS Module
Isolate component styling`,frontmatter:{layout:"cover",title:"Styling with CSS Module",srcSequence:"./chunks/6-css-module.md"},index:41,start:0,end:7,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\6-css-module.md",raw:`---
layout: cover
---

# Styling with CSS Module
Isolate component styling
`,title:"Styling with CSS Module",level:1,content:`# Styling with CSS Module
Isolate component styling`,frontmatter:{layout:"cover",title:"Styling with CSS Module"},index:0,start:0,end:7},inline:{raw:`---
src: ./chunks/6-css-module.md
---
`,content:"",frontmatter:{},index:6,start:31,end:35},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\6-css-module.md",notesHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:ak,meta:{clicks:1,srcSequence:"./chunks/6-css-module.md",slide:{raw:`---
clicks: 1
---

# How to styling a component 

<br/>

To make the component good looking visually :
<ul>
    <li>Write the style inline</li>
    <li>Use global CSS class</li>
    <li>Use CSS module</li>
    <li v-click-hide="1" class="vlick-blurred">Use CSS-in-JS</li>
    <li v-click-hide="1" class="vlick-blurred">or, Use Styled-component</li>
</ul>

<style>
.slidev-vclick-hidden.vlick-blurred {
  opacity: 0.5 !important;
}
</style>
`,title:"How to styling a component",level:1,content:`# How to styling a component 

<br/>

To make the component good looking visually :
<ul>
    <li>Write the style inline</li>
    <li>Use global CSS class</li>
    <li>Use CSS module</li>
    <li v-click-hide="1" class="vlick-blurred">Use CSS-in-JS</li>
    <li v-click-hide="1" class="vlick-blurred">or, Use Styled-component</li>
</ul>

<style>
.slidev-vclick-hidden.vlick-blurred {
  opacity: 0.5 !important;
}
</style>`,frontmatter:{clicks:1,srcSequence:"./chunks/6-css-module.md"},index:42,start:7,end:30,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\6-css-module.md",raw:`---
clicks: 1
---

# How to styling a component 

<br/>

To make the component good looking visually :
<ul>
    <li>Write the style inline</li>
    <li>Use global CSS class</li>
    <li>Use CSS module</li>
    <li v-click-hide="1" class="vlick-blurred">Use CSS-in-JS</li>
    <li v-click-hide="1" class="vlick-blurred">or, Use Styled-component</li>
</ul>

<style>
.slidev-vclick-hidden.vlick-blurred {
  opacity: 0.5 !important;
}
</style>
`,title:"How to styling a component",level:1,content:`# How to styling a component 

<br/>

To make the component good looking visually :
<ul>
    <li>Write the style inline</li>
    <li>Use global CSS class</li>
    <li>Use CSS module</li>
    <li v-click-hide="1" class="vlick-blurred">Use CSS-in-JS</li>
    <li v-click-hide="1" class="vlick-blurred">or, Use Styled-component</li>
</ul>

<style>
.slidev-vclick-hidden.vlick-blurred {
  opacity: 0.5 !important;
}
</style>`,frontmatter:{clicks:1},index:1,start:7,end:30},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\6-css-module.md",notesHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:uk,meta:{layout:"center",srcSequence:"./chunks/6-css-module.md",slide:{raw:`---
layout: center
---

# Let's start with a simple Input component
`,title:"Let's start with a simple Input component",level:1,content:"# Let's start with a simple Input component",frontmatter:{layout:"center",srcSequence:"./chunks/6-css-module.md"},index:43,start:30,end:36,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\6-css-module.md",raw:`---
layout: center
---

# Let's start with a simple Input component
`,title:"Let's start with a simple Input component",level:1,content:"# Let's start with a simple Input component",frontmatter:{layout:"center"},index:2,start:30,end:36},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\6-css-module.md",notesHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:gk,meta:{srcSequence:"./chunks/6-css-module.md",slide:{raw:`
# How to use CSS Module
Keep in mind, CSS module is not part of React.

1. Rename CSS file to use \`<name>.module.css\` \\
    Example: \`input.css\` => \`input.module.css\`

2. Import the CSS as object, not as a side-effect 
    \`\`\`diff
    -    import './input.css'
    +    import style from './input.module.css'
    ...
    \`\`\`
3. Use provided class name by imported CSS
    \`\`\`diff
    -    <input name="name" className="Input" />
    +    <input name="name" className={style.Input} />
    ...
    \`\`\`

<br />

> The imported class name will display as random string when inspected through Inspect Element
`,title:"How to use CSS Module",level:1,content:`# How to use CSS Module
Keep in mind, CSS module is not part of React.

1. Rename CSS file to use \`<name>.module.css\` \\
    Example: \`input.css\` => \`input.module.css\`

2. Import the CSS as object, not as a side-effect 
    \`\`\`diff
    -    import './input.css'
    +    import style from './input.module.css'
    ...
    \`\`\`
3. Use provided class name by imported CSS
    \`\`\`diff
    -    <input name="name" className="Input" />
    +    <input name="name" className={style.Input} />
    ...
    \`\`\`

<br />

> The imported class name will display as random string when inspected through Inspect Element`,frontmatter:{srcSequence:"./chunks/6-css-module.md"},index:44,start:37,end:61,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\6-css-module.md",raw:`
# How to use CSS Module
Keep in mind, CSS module is not part of React.

1. Rename CSS file to use \`<name>.module.css\` \\
    Example: \`input.css\` => \`input.module.css\`

2. Import the CSS as object, not as a side-effect 
    \`\`\`diff
    -    import './input.css'
    +    import style from './input.module.css'
    ...
    \`\`\`
3. Use provided class name by imported CSS
    \`\`\`diff
    -    <input name="name" className="Input" />
    +    <input name="name" className={style.Input} />
    ...
    \`\`\`

<br />

> The imported class name will display as random string when inspected through Inspect Element
`,title:"How to use CSS Module",level:1,content:`# How to use CSS Module
Keep in mind, CSS module is not part of React.

1. Rename CSS file to use \`<name>.module.css\` \\
    Example: \`input.css\` => \`input.module.css\`

2. Import the CSS as object, not as a side-effect 
    \`\`\`diff
    -    import './input.css'
    +    import style from './input.module.css'
    ...
    \`\`\`
3. Use provided class name by imported CSS
    \`\`\`diff
    -    <input name="name" className="Input" />
    +    <input name="name" className={style.Input} />
    ...
    \`\`\`

<br />

> The imported class name will display as random string when inspected through Inspect Element`,frontmatter:{},index:3,start:37,end:61},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\6-css-module.md",notesHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:bk,meta:{layout:"center",srcSequence:"./chunks/6-css-module.md",slide:{raw:`---
layout: center
---

# Let's update the Input component
`,title:"Let's update the Input component",level:1,content:"# Let's update the Input component",frontmatter:{layout:"center",srcSequence:"./chunks/6-css-module.md"},index:45,start:61,end:67,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\6-css-module.md",raw:`---
layout: center
---

# Let's update the Input component
`,title:"Let's update the Input component",level:1,content:"# Let's update the Input component",frontmatter:{layout:"center"},index:4,start:61,end:67},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\6-css-module.md",notesHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:kk,meta:{layout:"cover",title:"Forms",srcSequence:"./chunks/7-form.md",slide:{raw:null,title:"Forms",level:1,content:`# Forms
Handling Form`,frontmatter:{layout:"cover",title:"Forms",srcSequence:"./chunks/7-form.md"},index:46,start:0,end:7,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\7-form.md",raw:`---
layout: cover
---

# Forms
Handling Form
`,title:"Forms",level:1,content:`# Forms
Handling Form`,frontmatter:{layout:"cover",title:"Forms"},index:0,start:0,end:7},inline:{raw:`---
src: ./chunks/7-form.md
---
`,content:"",frontmatter:{},index:7,start:35,end:39},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\7-form.md",notesHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:Ck,meta:{srcSequence:"./chunks/7-form.md",slide:{raw:`
# Type of Form
There are two type of form:

- **Controlled Component**

  The values of the form is controlled by React

- **Uncontrolled Component**

  The values of the form is controlled by DOM
`,title:"Type of Form",level:1,content:`# Type of Form
There are two type of form:

- **Controlled Component**

  The values of the form is controlled by React

- **Uncontrolled Component**

  The values of the form is controlled by DOM`,frontmatter:{srcSequence:"./chunks/7-form.md"},index:47,start:8,end:20,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\7-form.md",raw:`
# Type of Form
There are two type of form:

- **Controlled Component**

  The values of the form is controlled by React

- **Uncontrolled Component**

  The values of the form is controlled by DOM
`,title:"Type of Form",level:1,content:`# Type of Form
There are two type of form:

- **Controlled Component**

  The values of the form is controlled by React

- **Uncontrolled Component**

  The values of the form is controlled by DOM`,frontmatter:{},index:1,start:8,end:20},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\7-form.md",notesHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:Fk,meta:{class:"grid grid-rows-[auto,1fr]",srcSequence:"./chunks/7-form.md",slide:{raw:`---
class: grid grid-rows-[auto,1fr]
---

# Controlled Component

<iframe class="h-full" src="https://codesandbox.io/embed/mentify-4-form-controlled-4zekr7?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNameForm.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-4-form-controlled"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
`,title:"Controlled Component",level:1,content:`# Controlled Component

<iframe class="h-full" src="https://codesandbox.io/embed/mentify-4-form-controlled-4zekr7?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNameForm.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-4-form-controlled"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,frontmatter:{class:"grid grid-rows-[auto,1fr]",srcSequence:"./chunks/7-form.md"},index:48,start:20,end:33,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\7-form.md",raw:`---
class: grid grid-rows-[auto,1fr]
---

# Controlled Component

<iframe class="h-full" src="https://codesandbox.io/embed/mentify-4-form-controlled-4zekr7?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNameForm.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-4-form-controlled"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
`,title:"Controlled Component",level:1,content:`# Controlled Component

<iframe class="h-full" src="https://codesandbox.io/embed/mentify-4-form-controlled-4zekr7?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNameForm.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-4-form-controlled"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,frontmatter:{class:"grid grid-rows-[auto,1fr]"},index:2,start:20,end:33},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\7-form.md",notesHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:$k,meta:{class:"grid grid-rows-[auto,1fr]",srcSequence:"./chunks/7-form.md",slide:{raw:`---
class: grid grid-rows-[auto,1fr]
---

# Uncontrolled Component

<iframe class="h-full" src="https://codesandbox.io/embed/mentify-4-form-uncontrolled-enb12m?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNameForm.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-4-form-uncontrolled"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
`,title:"Uncontrolled Component",level:1,content:`# Uncontrolled Component

<iframe class="h-full" src="https://codesandbox.io/embed/mentify-4-form-uncontrolled-enb12m?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNameForm.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-4-form-uncontrolled"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,frontmatter:{class:"grid grid-rows-[auto,1fr]",srcSequence:"./chunks/7-form.md"},index:49,start:33,end:46,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\7-form.md",raw:`---
class: grid grid-rows-[auto,1fr]
---

# Uncontrolled Component

<iframe class="h-full" src="https://codesandbox.io/embed/mentify-4-form-uncontrolled-enb12m?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNameForm.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-4-form-uncontrolled"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
`,title:"Uncontrolled Component",level:1,content:`# Uncontrolled Component

<iframe class="h-full" src="https://codesandbox.io/embed/mentify-4-form-uncontrolled-enb12m?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNameForm.jsx&theme=dark&view=editor"
     style="width:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="mentify-4-form-uncontrolled"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,frontmatter:{class:"grid grid-rows-[auto,1fr]"},index:3,start:33,end:46},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\7-form.md",notesHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:Tk,meta:{layout:"cover",srcSequence:"./chunks/7-form.md",slide:{raw:`---
layout: cover
---

## Wrap Up : 
# Build a Dynamic Form`,title:"Wrap Up :",level:2,content:`## Wrap Up : 
# Build a Dynamic Form`,frontmatter:{layout:"cover",srcSequence:"./chunks/7-form.md"},index:50,start:46,end:52,source:{filepath:"D:\\repositories\\slidev-getting-started\\chunks\\7-form.md",raw:`---
layout: cover
---

## Wrap Up : 
# Build a Dynamic Form`,title:"Wrap Up :",level:2,content:`## Wrap Up : 
# Build a Dynamic Form`,frontmatter:{layout:"cover"},index:4,start:46,end:52},filepath:"D:\\repositories\\slidev-getting-started\\chunks\\7-form.md",notesHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",component:b1,meta:{layout:"end"}}];const Ie=Pk,Rk=[{name:"play",path:"/",component:u1,children:[...Ie]},{name:"print",path:"/print",component:y1},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>ds(()=>import("./Presenter.2f346a4e.js"),["assets/Presenter.2f346a4e.js","assets/Presenter.c3f07bd1.css","assets/DrawingControls.cac46047.js"]),beforeEnter:t=>{if(!An.remote||An.remote===t.query.password)return!0;if(An.remote&&t.query.password===void 0){const n=prompt("Enter password");if(An.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],ft=Z8({history:f8("/talks/mentify/react-workshop/1-fundamental/"),routes:Rk});function Lk(t,n,{mode:s="replace"}={}){return F({get(){const o=ft.currentRoute.value.query[t];return o==null?n!=null?n:null:Array.isArray(o)?o.filter(Boolean):o},set(o){Ve(()=>{ft[b(s)]({query:{...ft.currentRoute.value.query,[t]:o}})})}})}const $u=U(0);Ve(()=>{ft.afterEach(async()=>{await Ve(),$u.value+=1})});const Xt=F(()=>ft.currentRoute.value),va=F(()=>Xt.value.query.print!==void 0),Hk=F(()=>Xt.value.query.print==="clicks"),zt=F(()=>Xt.value.query.embedded!==void 0),Pt=F(()=>Xt.value.path.startsWith("/presenter")),Is=F(()=>va.value&&!Hk.value),Cr=F(()=>Xt.value.query.password),Ik=F(()=>!Pt.value&&(!ke.remote||Cr.value===ke.remote)),dc=Lk("clicks","0"),Ou=F(()=>Ie.length-1),Nk=F(()=>Xt.value.path),Ne=F(()=>parseInt(Nk.value.split(/\//g).slice(-1)[0])||1);F(()=>ml(Ne.value));const ct=F(()=>Ie.find(t=>t.path===`${Ne.value}`));F(()=>{var t,n,s;return(s=(n=(t=ct.value)==null?void 0:t.meta)==null?void 0:n.slide)==null?void 0:s.id});F(()=>{var t,n;return(n=(t=ct.value)==null?void 0:t.meta)==null?void 0:n.layout});const Pl=F(()=>Ie.find(t=>t.path===`${Math.min(Ie.length,Ne.value+1)}`)),zk=F(()=>{var t,n;return $u.value,((n=(t=ct.value)==null?void 0:t.meta)==null?void 0:n.__clicksElements)||[]}),St=F({get(){if(Is.value)return 99999;let t=+(dc.value||0);return isNaN(t)&&(t=0),t},set(t){dc.value=t.toString()}}),Wo=F(()=>{var t,n,s;return+((s=(n=(t=ct.value)==null?void 0:t.meta)==null?void 0:n.clicks)!=null?s:zk.value.length)}),qk=F(()=>Ne.value<Ie.length-1||St.value<Wo.value),Uk=F(()=>Ne.value>1||St.value>0),Vk=F(()=>Ie.filter(t=>{var n,s;return(s=(n=t.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((t,n)=>(ba(t,n),t),[])),Wk=F(()=>wa(Vk.value,ct.value));F(()=>_a(Wk.value));function an(){Wo.value<=St.value?no():St.value+=1}async function cn(){St.value<=0?await so():St.value-=1}function ml(t){return Pt.value?`/presenter/${t}`:`/${t}`}function no(){const t=Math.min(Ie.length,Ne.value+1);return is(t)}async function so(t=!0){const n=Math.max(1,Ne.value-1);await is(n),t&&Wo.value&&ft.replace({query:{...Xt.value.query,clicks:Wo.value}})}function is(t,n){return ft.push({path:ml(t),query:{...Xt.value.query,clicks:n}})}function Yk(t){const n=U(0),{direction:s,distanceX:o,distanceY:l}=qy(t,{onSwipeStart(r){r.pointerType==="touch"&&(Qs.value||(n.value=fr()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||Qs.value)return;const a=Math.abs(o.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value===Vt.LEFT?an():cn():(i/window.innerHeight>.4||i>200)&&(s.value===Vt.DOWN?so():no())}})}async function Er(){const{saveAs:t}=await ds(()=>import("./FileSaver.min.4f92ed14.js").then(function(n){return n.F}),[]);t(Wp(ke.download)?ke.download:ke.exportFilename?`${ke.exportFilename}.pdf`:"/talks/mentify/react-workshop/1-fundamental/slidev-exported.pdf",`${ke.title}.pdf`)}async function Kk(t){var n,s;if(t==null){const o=(s=(n=ct.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;t=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function ba(t,n,s=1){var l,r,a,i,c;const o=(r=(l=n.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&t.length>0?ba(t[t.length-1].children,n,s+1):t.push({children:[],level:s,path:n.path,hideInToc:Boolean((a=n.meta)==null?void 0:a.hideInToc),title:(c=(i=n.meta)==null?void 0:i.slide)==null?void 0:c.title})}function wa(t,n,s=!1,o){return t.map(l=>{const r={...l,active:l.path===(n==null?void 0:n.path),hasActiveParent:s};return r.children.length>0&&(r.children=wa(r.children,n,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function _a(t,n=1){return t.filter(s=>!s.hideInToc).map(s=>({...s,children:_a(s.children,n+1)}))}function Xk(){const t=ke.titleTemplate.replace("%s",ke.title||"Slidev");gh({title:t}),Ch(`${t} - shared`),Sh(`${t} - drawings`);function n(){Pt.value&&(bi("page",+Ne.value),bi("clicks",St.value))}ft.afterEach(n),ue(St,n),Eh(s=>{(+s.page!=+Ne.value||St.value!==s.clicks)&&ft.replace({path:ml(s.page),query:{...ft.currentRoute.value.query,clicks:s.clicks||0}})})}const Jk=Be({__name:"App",setup(t){return M(I),Xk(),(n,s)=>{const o=tr("RouterView"),l=tr("StarportCarrier");return w(),z(Ae,null,[J(o),J(l)],64)}}});function Rl(t){return t!==null&&typeof t=="object"}function Dr(t,n,s=".",o){if(!Rl(n))return Dr(t,{},s,o);const l=Object.assign({},n);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const a=t[r];a!=null&&(o&&o(l,r,a,s)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=a.concat(l[r]):Rl(a)&&Rl(l[r])?l[r]=Dr(a,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=a))}return l}function Zk(t){return(...n)=>n.reduce((s,o)=>Dr(s,o,"",t),{})}const Gk=Zk(),Mu=1/60*1e3,Qk=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),Tu=typeof window!="undefined"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(Qk()),Mu);function ex(t){let n=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,i={schedule:(c,u=!1,d=!1)=>{const m=d&&l,f=m?n:s;return u&&a.add(c),f.indexOf(c)===-1&&(f.push(c),m&&l&&(o=n.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),a.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let u=0;u<o;u++){const d=n[u];d(c),a.has(d)&&(i.schedule(d),t())}l=!1,r&&(r=!1,i.process(c))}};return i}const tx=40;let Fr=!0,oo=!1,Sr=!1;const ns={delta:0,timestamp:0},po=["read","update","preRender","render","postRender"],hl=po.reduce((t,n)=>(t[n]=ex(()=>oo=!0),t),{}),fc=po.reduce((t,n)=>{const s=hl[n];return t[n]=(o,l=!1,r=!1)=>(oo||sx(),s.schedule(o,l,r)),t},{});po.reduce((t,n)=>(t[n]=hl[n].cancel,t),{});po.reduce((t,n)=>(t[n]=()=>hl[n].process(ns),t),{});const nx=t=>hl[t].process(ns),Pu=t=>{oo=!1,ns.delta=Fr?Mu:Math.max(Math.min(t-ns.timestamp,tx),1),ns.timestamp=t,Sr=!0,po.forEach(nx),Sr=!1,oo&&(Fr=!1,Tu(Pu))},sx=()=>{oo=!0,Fr=!0,Sr||Tu(Pu)},ox=()=>ns;function Ru(t,n){var s={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(s[o[l]]=t[o[l]]);return s}var lx=function(){},mc=function(){};const jr=(t,n,s)=>Math.min(Math.max(s,t),n),Ll=.001,rx=.01,hc=10,ax=.05,ix=1;function cx({duration:t=800,bounce:n=.25,velocity:s=0,mass:o=1}){let l,r;lx(t<=hc*1e3);let a=1-n;a=jr(ax,ix,a),t=jr(rx,hc,t/1e3),a<1?(l=u=>{const d=u*a,m=d*t,f=d-s,h=$r(u,a),y=Math.exp(-m);return Ll-f/h*y},r=u=>{const m=u*a*t,f=m*s+s,h=Math.pow(a,2)*Math.pow(u,2)*t,y=Math.exp(-m),k=$r(Math.pow(u,2),a);return(-l(u)+Ll>0?-1:1)*((f-h)*y)/k}):(l=u=>{const d=Math.exp(-u*t),m=(u-s)*t+1;return-Ll+d*m},r=u=>{const d=Math.exp(-u*t),m=(s-u)*(t*t);return d*m});const i=5/t,c=ux(l,r,i);if(t=t*1e3,isNaN(c))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:t}}}const px=12;function ux(t,n,s){let o=s;for(let l=1;l<px;l++)o=o-t(o)/n(o);return o}function $r(t,n){return t*Math.sqrt(1-n*n)}const dx=["duration","bounce"],fx=["stiffness","damping","mass"];function yc(t,n){return n.some(s=>t[s]!==void 0)}function mx(t){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!yc(t,fx)&&yc(t,dx)){const s=cx(t);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function ka(t){var{from:n=0,to:s=1,restSpeed:o=2,restDelta:l}=t,r=Ru(t,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:i,damping:c,mass:u,velocity:d,duration:m,isResolvedFromDuration:f}=mx(r),h=gc,y=gc;function k(){const _=d?-(d/1e3):0,C=s-n,A=c/(2*Math.sqrt(i*u)),B=Math.sqrt(i/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-n)/100,.4)),A<1){const E=$r(B,A);h=L=>{const O=Math.exp(-A*B*L);return s-O*((_+A*B*C)/E*Math.sin(E*L)+C*Math.cos(E*L))},y=L=>{const O=Math.exp(-A*B*L);return A*B*O*(Math.sin(E*L)*(_+A*B*C)/E+C*Math.cos(E*L))-O*(Math.cos(E*L)*(_+A*B*C)-E*C*Math.sin(E*L))}}else if(A===1)h=E=>s-Math.exp(-B*E)*(C+(_+B*C)*E);else{const E=B*Math.sqrt(A*A-1);h=L=>{const O=Math.exp(-A*B*L),W=Math.min(E*L,300);return s-O*((_+A*B*C)*Math.sinh(W)+E*C*Math.cosh(W))/E}}}return k(),{next:_=>{const C=h(_);if(f)a.done=_>=m;else{const A=y(_)*1e3,B=Math.abs(A)<=o,E=Math.abs(s-C)<=l;a.done=B&&E}return a.value=a.done?s:C,a},flipTarget:()=>{d=-d,[n,s]=[s,n],k()}}}ka.needsInterpolation=(t,n)=>typeof t=="string"||typeof n=="string";const gc=t=>0,Lu=(t,n,s)=>{const o=n-t;return o===0?1:(s-t)/o},xa=(t,n,s)=>-s*t+s*n+t,Hu=(t,n)=>s=>Math.max(Math.min(s,n),t),Ns=t=>t%1?Number(t.toFixed(5)):t,Yo=/(-)?([\d]*\.?[\d])+/g,Or=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,hx=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function uo(t){return typeof t=="string"}const yl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Iu=Object.assign(Object.assign({},yl),{transform:Hu(0,1)});Object.assign(Object.assign({},yl),{default:1});const yx=t=>({test:n=>uo(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),zs=yx("%");Object.assign(Object.assign({},zs),{parse:t=>zs.parse(t)/100,transform:t=>zs.transform(t*100)});const Aa=(t,n)=>s=>Boolean(uo(s)&&hx.test(s)&&s.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(s,n)),Nu=(t,n,s)=>o=>{if(!uo(o))return o;const[l,r,a,i]=o.match(Yo);return{[t]:parseFloat(l),[n]:parseFloat(r),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},Cn={test:Aa("hsl","hue"),parse:Nu("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(t)+", "+zs.transform(Ns(n))+", "+zs.transform(Ns(s))+", "+Ns(Iu.transform(o))+")"},gx=Hu(0,255),Hl=Object.assign(Object.assign({},yl),{transform:t=>Math.round(gx(t))}),nn={test:Aa("rgb","red"),parse:Nu("red","green","blue"),transform:({red:t,green:n,blue:s,alpha:o=1})=>"rgba("+Hl.transform(t)+", "+Hl.transform(n)+", "+Hl.transform(s)+", "+Ns(Iu.transform(o))+")"};function vx(t){let n="",s="",o="",l="";return t.length>5?(n=t.substr(1,2),s=t.substr(3,2),o=t.substr(5,2),l=t.substr(7,2)):(n=t.substr(1,1),s=t.substr(2,1),o=t.substr(3,1),l=t.substr(4,1),n+=n,s+=s,o+=o,l+=l),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Mr={test:Aa("#"),parse:vx,transform:nn.transform},gl={test:t=>nn.test(t)||Mr.test(t)||Cn.test(t),parse:t=>nn.test(t)?nn.parse(t):Cn.test(t)?Cn.parse(t):Mr.parse(t),transform:t=>uo(t)?t:t.hasOwnProperty("red")?nn.transform(t):Cn.transform(t)},zu="${c}",qu="${n}";function bx(t){var n,s,o,l;return isNaN(t)&&uo(t)&&((s=(n=t.match(Yo))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((l=(o=t.match(Or))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function Uu(t){typeof t=="number"&&(t=`${t}`);const n=[];let s=0;const o=t.match(Or);o&&(s=o.length,t=t.replace(Or,zu),n.push(...o.map(gl.parse)));const l=t.match(Yo);return l&&(t=t.replace(Yo,qu),n.push(...l.map(yl.parse))),{values:n,numColors:s,tokenised:t}}function Vu(t){return Uu(t).values}function Wu(t){const{values:n,numColors:s,tokenised:o}=Uu(t),l=n.length;return r=>{let a=o;for(let i=0;i<l;i++)a=a.replace(i<s?zu:qu,i<s?gl.transform(r[i]):Ns(r[i]));return a}}const wx=t=>typeof t=="number"?0:t;function _x(t){const n=Vu(t);return Wu(t)(n.map(wx))}const Yu={test:bx,parse:Vu,createTransformer:Wu,getAnimatableNone:_x};function Il(t,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(n-t)*6*s:s<1/2?n:s<2/3?t+(n-t)*(2/3-s)*6:t}function vc({hue:t,saturation:n,lightness:s,alpha:o}){t/=360,n/=100,s/=100;let l=0,r=0,a=0;if(!n)l=r=a=s;else{const i=s<.5?s*(1+n):s+n-s*n,c=2*s-i;l=Il(c,i,t+1/3),r=Il(c,i,t),a=Il(c,i,t-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const kx=(t,n,s)=>{const o=t*t,l=n*n;return Math.sqrt(Math.max(0,s*(l-o)+o))},xx=[Mr,nn,Cn],bc=t=>xx.find(n=>n.test(t)),Ku=(t,n)=>{let s=bc(t),o=bc(n),l=s.parse(t),r=o.parse(n);s===Cn&&(l=vc(l),s=nn),o===Cn&&(r=vc(r),o=nn);const a=Object.assign({},l);return i=>{for(const c in a)c!=="alpha"&&(a[c]=kx(l[c],r[c],i));return a.alpha=xa(l.alpha,r.alpha,i),s.transform(a)}},Ax=t=>typeof t=="number",Bx=(t,n)=>s=>n(t(s)),Xu=(...t)=>t.reduce(Bx);function Ju(t,n){return Ax(t)?s=>xa(t,n,s):gl.test(t)?Ku(t,n):Gu(t,n)}const Zu=(t,n)=>{const s=[...t],o=s.length,l=t.map((r,a)=>Ju(r,n[a]));return r=>{for(let a=0;a<o;a++)s[a]=l[a](r);return s}},Cx=(t,n)=>{const s=Object.assign(Object.assign({},t),n),o={};for(const l in s)t[l]!==void 0&&n[l]!==void 0&&(o[l]=Ju(t[l],n[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function wc(t){const n=Yu.parse(t),s=n.length;let o=0,l=0,r=0;for(let a=0;a<s;a++)o||typeof n[a]=="number"?o++:n[a].hue!==void 0?r++:l++;return{parsed:n,numNumbers:o,numRGB:l,numHSL:r}}const Gu=(t,n)=>{const s=Yu.createTransformer(n),o=wc(t),l=wc(n);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?Xu(Zu(o.parsed,l.parsed),s):a=>`${a>0?n:t}`},Ex=(t,n)=>s=>xa(t,n,s);function Dx(t){if(typeof t=="number")return Ex;if(typeof t=="string")return gl.test(t)?Ku:Gu;if(Array.isArray(t))return Zu;if(typeof t=="object")return Cx}function Fx(t,n,s){const o=[],l=s||Dx(t[0]),r=t.length-1;for(let a=0;a<r;a++){let i=l(t[a],t[a+1]);if(n){const c=Array.isArray(n)?n[a]:n;i=Xu(c,i)}o.push(i)}return o}function Sx([t,n],[s]){return o=>s(Lu(t,n,o))}function jx(t,n){const s=t.length,o=s-1;return l=>{let r=0,a=!1;if(l<=t[0]?a=!0:l>=t[o]&&(r=o-1,a=!0),!a){let c=1;for(;c<s&&!(t[c]>l||c===o);c++);r=c-1}const i=Lu(t[r],t[r+1],l);return n[r](i)}}function Qu(t,n,{clamp:s=!0,ease:o,mixer:l}={}){const r=t.length;mc(r===n.length),mc(!o||!Array.isArray(o)||o.length===r-1),t[0]>t[r-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());const a=Fx(n,o,l),i=r===2?Sx(t,a):jx(t,a);return s?c=>i(jr(t[0],t[r-1],c)):i}const vl=t=>n=>1-t(1-n),Ba=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,$x=t=>n=>Math.pow(n,t),ed=t=>n=>n*n*((t+1)*n-t),Ox=t=>{const n=ed(t);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},td=1.525,Mx=4/11,Tx=8/11,Px=9/10,nd=t=>t,Ca=$x(2),Rx=vl(Ca),sd=Ba(Ca),od=t=>1-Math.sin(Math.acos(t)),ld=vl(od),Lx=Ba(ld),Ea=ed(td),Hx=vl(Ea),Ix=Ba(Ea),Nx=Ox(td),zx=4356/361,qx=35442/1805,Ux=16061/1805,Ko=t=>{if(t===1||t===0)return t;const n=t*t;return t<Mx?7.5625*n:t<Tx?9.075*n-9.9*t+3.4:t<Px?zx*n-qx*t+Ux:10.8*t*t-20.52*t+10.72},Vx=vl(Ko),Wx=t=>t<.5?.5*(1-Ko(1-t*2)):.5*Ko(t*2-1)+.5;function Yx(t,n){return t.map(()=>n||sd).splice(0,t.length-1)}function Kx(t){const n=t.length;return t.map((s,o)=>o!==0?o/(n-1):0)}function Xx(t,n){return t.map(s=>s*n)}function Oo({from:t=0,to:n=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:t},a=Array.isArray(n)?n:[t,n],i=Xx(o&&o.length===a.length?o:Kx(a),l);function c(){return Qu(i,a,{ease:Array.isArray(s)?s:Yx(a,s)})}let u=c();return{next:d=>(r.value=u(d),r.done=d>=l,r),flipTarget:()=>{a.reverse(),u=c()}}}function Jx({velocity:t=0,from:n=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:n};let i=s*t;const c=n+i,u=r===void 0?c:r(c);return u!==c&&(i=u-n),{next:d=>{const m=-i*Math.exp(-d/o);return a.done=!(m>l||m<-l),a.value=a.done?u:u+m,a},flipTarget:()=>{}}}const _c={keyframes:Oo,spring:ka,decay:Jx};function Zx(t){if(Array.isArray(t.to))return Oo;if(_c[t.type])return _c[t.type];const n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?Oo:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?ka:Oo}const rd=1/60*1e3,Gx=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),ad=typeof window!="undefined"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(Gx()),rd);function Qx(t){let n=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,i={schedule:(c,u=!1,d=!1)=>{const m=d&&l,f=m?n:s;return u&&a.add(c),f.indexOf(c)===-1&&(f.push(c),m&&l&&(o=n.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),a.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let u=0;u<o;u++){const d=n[u];d(c),a.has(d)&&(i.schedule(d),t())}l=!1,r&&(r=!1,i.process(c))}};return i}const eA=40;let Tr=!0,lo=!1,Pr=!1;const ss={delta:0,timestamp:0},fo=["read","update","preRender","render","postRender"],bl=fo.reduce((t,n)=>(t[n]=Qx(()=>lo=!0),t),{}),tA=fo.reduce((t,n)=>{const s=bl[n];return t[n]=(o,l=!1,r=!1)=>(lo||oA(),s.schedule(o,l,r)),t},{}),nA=fo.reduce((t,n)=>(t[n]=bl[n].cancel,t),{});fo.reduce((t,n)=>(t[n]=()=>bl[n].process(ss),t),{});const sA=t=>bl[t].process(ss),id=t=>{lo=!1,ss.delta=Tr?rd:Math.max(Math.min(t-ss.timestamp,eA),1),ss.timestamp=t,Pr=!0,fo.forEach(sA),Pr=!1,lo&&(Tr=!1,ad(id))},oA=()=>{lo=!0,Tr=!0,Pr||ad(id)},lA=()=>ss;function cd(t,n,s=0){return t-n-s}function rA(t,n,s=0,o=!0){return o?cd(n+-t,n,s):n-(t-n)+s}function aA(t,n,s,o){return o?t>=n+s:t<=-s}const iA=t=>{const n=({delta:s})=>t(s);return{start:()=>tA.update(n,!0),stop:()=>nA.update(n)}};function pd(t){var n,s,{from:o,autoplay:l=!0,driver:r=iA,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:m,onComplete:f,onRepeat:h,onUpdate:y}=t,k=Ru(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:_}=k,C,A=0,B=k.duration,E,L=!1,O=!0,W;const ae=Zx(k);!((s=(n=ae).needsInterpolation)===null||s===void 0)&&s.call(n,o,_)&&(W=Qu([0,100],[o,_],{clamp:!1}),o=0,_=100);const de=ae(Object.assign(Object.assign({},k),{from:o,to:_}));function he(){A++,c==="reverse"?(O=A%2===0,a=rA(a,B,u,O)):(a=cd(a,B,u),c==="mirror"&&de.flipTarget()),L=!1,h&&h()}function ve(){C.stop(),f&&f()}function Me(We){if(O||(We=-We),a+=We,!L){const Ce=de.next(Math.max(0,a));E=Ce.value,W&&(E=W(E)),L=O?Ce.done:a<=0}y==null||y(E),L&&(A===0&&(B!=null||(B=a)),A<i?aA(a,B,u,O)&&he():ve())}function Le(){d==null||d(),C=r(Me),C.start()}return l&&Le(),{stop:()=>{m==null||m(),C.stop()}}}function ud(t,n){return n?t*(1e3/n):0}function cA({from:t=0,velocity:n=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:m,onComplete:f,onStop:h}){let y;function k(B){return s!==void 0&&B<s||o!==void 0&&B>o}function _(B){return s===void 0?o:o===void 0||Math.abs(s-B)<Math.abs(o-B)?s:o}function C(B){y==null||y.stop(),y=pd(Object.assign(Object.assign({},B),{driver:d,onUpdate:E=>{var L;m==null||m(E),(L=B.onUpdate)===null||L===void 0||L.call(B,E)},onComplete:f,onStop:h}))}function A(B){C(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},B))}if(k(t))A({from:t,velocity:n,to:_(t)});else{let B=l*n+t;typeof u!="undefined"&&(B=u(B));const E=_(B),L=E===s?-1:1;let O,W;const ae=de=>{O=W,W=de,n=ud(de-O,lA().delta),(L===1&&de>E||L===-1&&de<E)&&A({from:de,to:E,velocity:n})};C({type:"decay",from:t,velocity:n,timeConstant:r,power:l,restDelta:c,modifyTarget:u,onUpdate:k(B)?ae:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const dd=(t,n)=>1-3*n+3*t,fd=(t,n)=>3*n-6*t,md=t=>3*t,Xo=(t,n,s)=>((dd(n,s)*t+fd(n,s))*t+md(n))*t,hd=(t,n,s)=>3*dd(n,s)*t*t+2*fd(n,s)*t+md(n),pA=1e-7,uA=10;function dA(t,n,s,o,l){let r,a,i=0;do a=n+(s-n)/2,r=Xo(a,o,l)-t,r>0?s=a:n=a;while(Math.abs(r)>pA&&++i<uA);return a}const fA=8,mA=.001;function hA(t,n,s,o){for(let l=0;l<fA;++l){const r=hd(n,s,o);if(r===0)return n;n-=(Xo(n,s,o)-t)/r}return n}const Mo=11,Ao=1/(Mo-1);function yA(t,n,s,o){if(t===n&&s===o)return nd;const l=new Float32Array(Mo);for(let a=0;a<Mo;++a)l[a]=Xo(a*Ao,t,s);function r(a){let i=0,c=1;const u=Mo-1;for(;c!==u&&l[c]<=a;++c)i+=Ao;--c;const d=(a-l[c])/(l[c+1]-l[c]),m=i+d*Ao,f=hd(m,t,s);return f>=mA?hA(a,m,t,s):f===0?m:dA(a,i,i+Ao,t,s)}return a=>a===0||a===1?a:Xo(r(a),n,o)}const yd=(t,n)=>s=>Math.max(Math.min(s,n),t),qs=t=>t%1?Number(t.toFixed(5)):t,ro=/(-)?([\d]*\.?[\d])+/g,Rr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,gA=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function mo(t){return typeof t=="string"}const ho={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Us=Object.assign(Object.assign({},ho),{transform:yd(0,1)}),Bo=Object.assign(Object.assign({},ho),{default:1}),Da=t=>({test:n=>mo(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),yn=Da("deg"),Vs=Da("%"),ie=Da("px"),kc=Object.assign(Object.assign({},Vs),{parse:t=>Vs.parse(t)/100,transform:t=>Vs.transform(t*100)}),Fa=(t,n)=>s=>Boolean(mo(s)&&gA.test(s)&&s.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(s,n)),gd=(t,n,s)=>o=>{if(!mo(o))return o;const[l,r,a,i]=o.match(ro);return{[t]:parseFloat(l),[n]:parseFloat(r),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},Co={test:Fa("hsl","hue"),parse:gd("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(t)+", "+Vs.transform(qs(n))+", "+Vs.transform(qs(s))+", "+qs(Us.transform(o))+")"},vA=yd(0,255),Nl=Object.assign(Object.assign({},ho),{transform:t=>Math.round(vA(t))}),Ss={test:Fa("rgb","red"),parse:gd("red","green","blue"),transform:({red:t,green:n,blue:s,alpha:o=1})=>"rgba("+Nl.transform(t)+", "+Nl.transform(n)+", "+Nl.transform(s)+", "+qs(Us.transform(o))+")"};function bA(t){let n="",s="",o="",l="";return t.length>5?(n=t.substr(1,2),s=t.substr(3,2),o=t.substr(5,2),l=t.substr(7,2)):(n=t.substr(1,1),s=t.substr(2,1),o=t.substr(3,1),l=t.substr(4,1),n+=n,s+=s,o+=o,l+=l),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const xc={test:Fa("#"),parse:bA,transform:Ss.transform},gt={test:t=>Ss.test(t)||xc.test(t)||Co.test(t),parse:t=>Ss.test(t)?Ss.parse(t):Co.test(t)?Co.parse(t):xc.parse(t),transform:t=>mo(t)?t:t.hasOwnProperty("red")?Ss.transform(t):Co.transform(t)},vd="${c}",bd="${n}";function wA(t){var n,s,o,l;return isNaN(t)&&mo(t)&&((s=(n=t.match(ro))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((l=(o=t.match(Rr))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function wd(t){typeof t=="number"&&(t=`${t}`);const n=[];let s=0;const o=t.match(Rr);o&&(s=o.length,t=t.replace(Rr,vd),n.push(...o.map(gt.parse)));const l=t.match(ro);return l&&(t=t.replace(ro,bd),n.push(...l.map(ho.parse))),{values:n,numColors:s,tokenised:t}}function _d(t){return wd(t).values}function kd(t){const{values:n,numColors:s,tokenised:o}=wd(t),l=n.length;return r=>{let a=o;for(let i=0;i<l;i++)a=a.replace(i<s?vd:bd,i<s?gt.transform(r[i]):qs(r[i]));return a}}const _A=t=>typeof t=="number"?0:t;function kA(t){const n=_d(t);return kd(t)(n.map(_A))}const Sa={test:wA,parse:_d,createTransformer:kd,getAnimatableNone:kA},xA=new Set(["brightness","contrast","saturate","opacity"]);function AA(t){let[n,s]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[o]=s.match(ro)||[];if(!o)return t;const l=s.replace(o,"");let r=xA.has(n)?1:0;return o!==s&&(r*=100),n+"("+r+l+")"}const BA=/([a-z-]*)\(.*?\)/g,Lr=Object.assign(Object.assign({},Sa),{getAnimatableNone:t=>{const n=t.match(BA);return n?n.map(AA).join(" "):t}}),zl={};class CA{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,o){if(!!this.subscriptions.size)for(const l of this.subscriptions)l(n,s,o)}clear(){this.subscriptions.clear()}}const Ac=t=>!isNaN(parseFloat(t));class EA{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new CA,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=ox();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),fc.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>fc.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=Ac(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=Ac(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ud(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:o}=n(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function DA(t){return new EA(t)}const{isArray:FA}=Array;function SA(){const t=U({}),n=o=>{const l=r=>{!t.value[r]||(t.value[r].stop(),t.value[r].destroy(),Mh(t.value,r))};o?FA(o)?o.forEach(l):l(o):Object.keys(t.value).forEach(l)},s=(o,l,r)=>{if(t.value[o])return t.value[o];const a=DA(l);return a.onChange(i=>{st(r,o,i)}),st(t.value,o,a),a};return ra(n),{motionValues:t,get:s,stop:n}}const jA=t=>Array.isArray(t),gn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),ql=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),$A=t=>({type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}),Ul=()=>({type:"keyframes",ease:"linear",duration:300}),OA=t=>({type:"keyframes",duration:800,values:t}),Bc={default:$A,x:gn,y:gn,z:gn,rotate:gn,rotateX:gn,rotateY:gn,rotateZ:gn,scaleX:ql,scaleY:ql,scale:ql,backgroundColor:Ul,color:Ul,opacity:Ul},xd=(t,n)=>{let s;return jA(n)?s=OA:s=Bc[t]||Bc.default,{to:n,...s(n)}},Cc={...ho,transform:Math.round},Ad={color:gt,backgroundColor:gt,outlineColor:gt,fill:gt,stroke:gt,borderColor:gt,borderTopColor:gt,borderRightColor:gt,borderBottomColor:gt,borderLeftColor:gt,borderWidth:ie,borderTopWidth:ie,borderRightWidth:ie,borderBottomWidth:ie,borderLeftWidth:ie,borderRadius:ie,radius:ie,borderTopLeftRadius:ie,borderTopRightRadius:ie,borderBottomRightRadius:ie,borderBottomLeftRadius:ie,width:ie,maxWidth:ie,height:ie,maxHeight:ie,size:ie,top:ie,right:ie,bottom:ie,left:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,rotate:yn,rotateX:yn,rotateY:yn,rotateZ:yn,scale:Bo,scaleX:Bo,scaleY:Bo,scaleZ:Bo,skew:yn,skewX:yn,skewY:yn,distance:ie,translateX:ie,translateY:ie,translateZ:ie,x:ie,y:ie,z:ie,perspective:ie,transformPerspective:ie,opacity:Us,originX:kc,originY:kc,originZ:ie,zIndex:Cc,filter:Lr,WebkitFilter:Lr,fillOpacity:Us,strokeOpacity:Us,numOctaves:Cc},ja=t=>Ad[t],Bd=(t,n)=>n&&typeof t=="number"&&n.transform?n.transform(t):t;function MA(t,n){let s=ja(t);return s!==Lr&&(s=Sa),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const TA={linear:nd,easeIn:Ca,easeInOut:sd,easeOut:Rx,circIn:od,circInOut:Lx,circOut:ld,backIn:Ea,backInOut:Ix,backOut:Hx,anticipate:Nx,bounceIn:Vx,bounceInOut:Wx,bounceOut:Ko},Ec=t=>{if(Array.isArray(t)){const[n,s,o,l]=t;return yA(n,s,o,l)}else if(typeof t=="string")return TA[t];return t},PA=t=>Array.isArray(t)&&typeof t[0]!="number",Dc=(t,n)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&Sa.test(n)&&!n.startsWith("url("));function RA(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function LA({ease:t,times:n,delay:s,...o}){const l={...o};return n&&(l.offset=n),t&&(l.ease=PA(t)?t.map(Ec):Ec(t)),s&&(l.elapsed=-s),l}function HA(t,n,s){return Array.isArray(n.to)&&(t.duration||(t.duration=800)),RA(n),IA(t)||(t={...t,...xd(s,n.to)}),{...n,...LA(t)}}function IA({delay:t,repeat:n,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function NA(t,n){return t[n]||t.default||t}function zA(t,n,s,o,l){const r=NA(o,t);let a=r.from===null||r.from===void 0?n.get():r.from;const i=Dc(t,s);a==="none"&&i&&typeof s=="string"&&(a=MA(t,s));const c=Dc(t,a);function u(m){const f={from:a,to:s,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:h=>n.set(h)};return r.type==="inertia"||r.type==="decay"?cA({...f,...r}):pd({...HA(r,f,t),onUpdate:h=>{f.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),m&&m()}})}function d(m){return n.set(s),o.onComplete&&o.onComplete(),l&&l(),m&&m(),{stop:()=>{}}}return!c||!i||r.type===!1?d:u}function qA(){const{motionValues:t,stop:n,get:s}=SA();return{motionValues:t,stop:n,push:(l,r,a,i={},c)=>{const u=a[l],d=s(l,u,a);if(i&&i.immediate){d.set(r);return}const m=zA(l,d,r,i,c);d.start(m)}}}function UA(t,n={},{motionValues:s,push:o,stop:l}=qA()){const r=b(n),a=U(!1),i=ue(s,f=>{a.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0}),c=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},u=f=>(typeof f=="string"&&(f=c(f)),Promise.all(Object.entries(f).map(([h,y])=>{if(h!=="transition")return new Promise(k=>{o(h,y,t,f.transition||xd(h,f[h]),k)})}).filter(Boolean)));return{isAnimating:a,apply:u,set:f=>{const h=No(f)?f:c(f);Object.entries(h).forEach(([y,k])=>{y!=="transition"&&o(y,k,t,{immediate:!0})})},stopTransitions:()=>{i(),l()},leave:async f=>{let h;if(r&&(r.leave&&(h=r.leave),!r.leave&&r.initial&&(h=r.initial)),!h){f();return}await u(h),f()}}}const $a=typeof window!="undefined",VA=()=>$a&&window.onpointerdown===null,WA=()=>$a&&window.ontouchstart===null,YA=()=>$a&&window.onmousedown===null;function KA({target:t,state:n,variants:s,apply:o}){const l=b(s),r=[],a=(...y)=>{const k=Oe.apply(null,y);return r.push(k),k},i=U(!1),c=U(!1),u=U(!1),d=F(()=>{let y=[];return l&&(l.hovered&&(y=[...y,...Object.keys(l.hovered)]),l.tapped&&(y=[...y,...Object.keys(l.tapped)]),l.focused&&(y=[...y,...Object.keys(l.focused)])),y}),m=F(()=>{const y={};Object.assign(y,n.value),i.value&&l.hovered&&Object.assign(y,l.hovered),c.value&&l.tapped&&Object.assign(y,l.tapped),u.value&&l.focused&&Object.assign(y,l.focused);for(const k in y)d.value.includes(k)||delete y[k];return y});l.hovered&&(a(t,"mouseenter",()=>{i.value=!0}),a(t,"mouseleave",()=>{i.value=!1,c.value=!1}),a(t,"mouseout",()=>{i.value=!1,c.value=!1})),l.tapped&&(YA()&&(a(t,"mousedown",()=>{c.value=!0}),a(t,"mouseup",()=>{c.value=!1})),VA()&&(a(t,"pointerdown",()=>{c.value=!0}),a(t,"pointerup",()=>{c.value=!1})),WA()&&(a(t,"touchstart",()=>{c.value=!0}),a(t,"touchend",()=>{c.value=!1}))),l.focused&&(a(t,"focus",()=>{u.value=!0}),a(t,"blur",()=>{u.value=!1}));const f=ue(m,o);return{stop:()=>{r.forEach(y=>y()),f()}}}function XA({set:t,target:n,variants:s,variant:o}){const l=b(s);return{stop:ue(()=>n,()=>{!l||(l.initial&&t("initial"),l.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}}function JA({state:t,apply:n}){return{stop:ue(t,o=>{o&&n(o)},{immediate:!0})}}function ZA({target:t,variants:n,variant:s}){const o=b(n);let l=rn;if(o&&(o.visible||o.visibleOnce)){const{stop:r}=Iy(t,([{isIntersecting:a}])=>{o.visible?a?s.value="visible":s.value="initial":o.visibleOnce&&(a?s.value!=="visibleOnce"&&(s.value="visibleOnce"):s.value||(s.value="initial"))});l=r}return{stop:l}}function GA(t,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const s=U([]);if(n.lifeCycleHooks){const{stop:l}=XA(t);s.value.push(l)}if(n.syncVariants){const{stop:l}=JA(t);s.value.push(l)}if(n.visibilityHooks){const{stop:l}=ZA(t);s.value.push(l)}if(n.eventListeners){const{stop:l}=KA(t);s.value.push(l)}const o=()=>s.value.forEach(l=>l());return ra(o),{stop:o}}function Cd(t={}){const n=Te({...t}),s=U({});return ue(n,()=>{const o={};for(const[l,r]of Object.entries(n)){const a=ja(l),i=Bd(r,a);o[l]=i}s.value=o},{immediate:!0,deep:!0}),{state:n,style:s}}const QA=["","X","Y","Z"],e2=["perspective","translate","scale","rotate","skew"],Ed=["transformPerspective","x","y","z"];e2.forEach(t=>{QA.forEach(n=>{const s=t+n;Ed.push(s)})});const t2=new Set(Ed);function Oa(t){return t2.has(t)}const n2=new Set(["originX","originY","originZ"]);function Dd(t){return n2.has(t)}function s2(t){const n={},s={};return Object.entries(t).forEach(([o,l])=>{Oa(o)||Dd(o)?n[o]=l:s[o]=l}),{transform:n,style:s}}function o2(t,n){let s,o;const{state:l,style:r}=Cd(),a=ue(()=>ot(t),u=>{if(!!u){o=u;for(const d of Object.keys(Ad))u.style[d]===null||u.style[d]===""||Oa(d)||Dd(d)||st(l,d,u.style[d]);s&&Object.entries(s).forEach(([d,m])=>st(u.style,d,m)),n&&n(l)}},{immediate:!0}),i=ue(r,u=>{if(!o){s=u;return}for(const d in u)st(o.style,d,u[d])},{immediate:!0});return{style:l,stop:()=>{o=void 0,s=void 0,a(),i()}}}const l2={x:"translateX",y:"translateY",z:"translateZ"};function Fd(t={},n=!0){const s=Te({...t}),o=U("");return ue(s,l=>{let r="",a=!1;n&&(l.x||l.y||l.z)&&(r+=`translate3d(${[l.x||0,l.y||0,l.z||0].map(ie.transform).join(",")}) `,a=!0);for(const[i,c]of Object.entries(l)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const u=ja(i),d=Bd(c,u);r+=`${l2[i]||i}(${d}) `}n&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}function r2(t){const n=t.trim().split(/\) |\)/);if(n.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),c=a.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...o,[r]:u}},{})}function a2(t,n){Object.entries(r2(n)).forEach(([s,o])=>{o=parseFloat(o);const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>{st(t,r,0)});return}o.forEach((r,a)=>{st(t,l[a],r)});return}if(s==="translateX"){st(t,"x",o);return}if(s==="translateY"){st(t,"y",o);return}if(s==="translateZ"){st(t,"z",o);return}st(t,s,o)})}function i2(t,n){let s,o;const{state:l,transform:r}=Fd(),a=ue(()=>ot(t),u=>{!u||(o=u,u.style.transform&&a2(l,u.style.transform),s&&(u.style.transform=s),n&&n(l))},{immediate:!0}),i=ue(r,u=>{if(!o){s=u;return}o.style.transform=u},{immediate:!0});return{transform:l,stop:()=>{s=void 0,o=void 0,a(),i()}}}function c2(t,n){const s=Te({}),o=m=>{Object.entries(m).forEach(([f,h])=>{st(s,f,h)})},{style:l,stop:r}=o2(t,o),{transform:a,stop:i}=i2(t,o),c=ue(s,m=>{Object.entries(m).forEach(([f,h])=>{const y=Oa(f)?a:l;y[f]&&y[f]===h||st(y,f,h)})},{immediate:!0,deep:!0}),u=ue(()=>ot(t),m=>{!m||n&&o(n)},{immediate:!0});return{motionProperties:s,style:l,transform:a,stop:()=>{r(),i(),c(),u()}}}function p2(t={}){const n=b(t),s=U();return{state:F(()=>{if(!!s.value)return n[s.value]}),variant:s}}function u2(t,n={},s){const{motionProperties:o,stop:l}=c2(t),{variant:r,state:a}=p2(n),i=UA(o,n),c={target:t,variant:r,variants:n,state:a,motionProperties:o,...i,stop:(d=!1)=>{}},{stop:u}=GA(c,s);return c.stop=(d=!1)=>{const m=()=>{c.stopTransitions(),l(),u()};if(!d&&n.value&&n.value.leave){const f=ue(c.isAnimating,h=>{h||(f(),m())})}else m()},ra(()=>c.stop()),sy(()=>ot(t),d=>{!d||d!=null&&d.motionInstance&&(c.stop(),Object.assign(c,d.motionInstance))}),c}const d2=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],f2=(t,n)=>{const s=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};s&&(s.variants&&No(s.variants)&&(n.value={...n.value,...s.variants}),d2.forEach(o=>{if(o==="delay"){if(s&&s[o]&&Lh(s[o])){const l=s[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={...n.value.enter.transition,delay:l}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={...n.value.visible.transition,delay:l}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={...n.value.visibleOnce.transition,delay:l}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&No(s[o])&&(n.value[o]=s[o])}))},Vl=t=>{const n=(o,l,r)=>{const a=l.value&&typeof l.value=="string"?l.value:r.key;a&&zl[a]&&zl[a].stop();const i=U(t||{});typeof l.value=="object"&&(i.value=l.value),f2(r,i);const c=u2(o,i);o.motionInstance=c,a&&st(zl,a,c)},s=o=>{o.motionInstance&&o.motionInstance.stop()};return{created:n,unmounted:s,bind:n,unbind:s,getSSRProps(o,l){const{initial:r}=o.value||l&&l.props||{},a=Gk((t==null?void 0:t.initial)||{},r||{});if(!a||Object.keys(a).length===0)return;const{transform:i,style:c}=s2(a),{transform:u}=Fd(i),{style:d}=Cd(c);return u.value&&(d.value.transform=u.value),{style:d.value}}}},m2={initial:{opacity:0},enter:{opacity:1}},h2={initial:{opacity:0},visible:{opacity:1}},y2={initial:{opacity:0},visibleOnce:{opacity:1}},g2={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},v2={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},b2={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},w2={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},_2={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},k2={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},x2={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},A2={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},B2={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},C2={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},E2={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},D2={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},F2={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},S2={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},j2={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},$2={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},O2={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},M2={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},T2={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},P2={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},R2={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},L2={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},H2={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},I2={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},N2={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},z2={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},q2={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Fc={__proto__:null,fade:m2,fadeVisible:h2,fadeVisibleOnce:y2,pop:g2,popVisible:v2,popVisibleOnce:b2,rollBottom:F2,rollLeft:w2,rollRight:x2,rollTop:C2,rollVisibleBottom:S2,rollVisibleLeft:_2,rollVisibleRight:A2,rollVisibleTop:E2,rollVisibleOnceBottom:j2,rollVisibleOnceLeft:k2,rollVisibleOnceRight:B2,rollVisibleOnceTop:D2,slideBottom:N2,slideLeft:$2,slideRight:T2,slideTop:L2,slideVisibleBottom:z2,slideVisibleLeft:O2,slideVisibleRight:P2,slideVisibleTop:H2,slideVisibleOnceBottom:q2,slideVisibleOnceLeft:M2,slideVisibleOnceRight:R2,slideVisibleOnceTop:I2};function U2(t){const n="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(n.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const V2={install(t,n){if(t.directive("motion",Vl()),!n||n&&!n.excludePresets)for(const s in Fc){const o=Fc[s];t.directive(`motion-${U2(s)}`,Vl(o))}if(n&&n.directives)for(const s in n.directives){const o=n.directives[s];o.initial,t.directive(`motion-${s}`,Vl(o))}}},Ma="vue-starport-injection",Sd="vue-starport-options",W2={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},jd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var Y2=Object.defineProperty,Jo=Object.getOwnPropertySymbols,$d=Object.prototype.hasOwnProperty,Od=Object.prototype.propertyIsEnumerable,Sc=(t,n,s)=>n in t?Y2(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,K2=(t,n)=>{for(var s in n||(n={}))$d.call(n,s)&&Sc(t,s,n[s]);if(Jo)for(var s of Jo(n))Od.call(n,s)&&Sc(t,s,n[s]);return t},jc=(t,n)=>{var s={};for(var o in t)$d.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Jo)for(var o of Jo(t))n.indexOf(o)<0&&Od.call(t,o)&&(s[o]=t[o]);return s};const X2=Be({name:"StarportProxy",props:K2({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},jd),setup(t,n){const s=M(Ma),o=F(()=>s.getInstance(t.port,t.component)),l=U(),r=o.value.generateId(),a=U(!1);return o.value.isVisible||(o.value.land(),a.value=!0),us(async()=>{o.value.el||(o.value.el=l.value,await Ve(),a.value=!0,o.value.rect.update())}),il(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await Ve(),await Ve(),!o.value.el&&s.dispose(o.value.port))}),ue(()=>t,async()=>{o.value.props&&await Ve();const i=t,{props:c}=i,u=jc(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=t,{initialProps:c,mountedProps:u}=i,d=jc(i,["initialProps","mountedProps"]),m=dn(d,(a.value?u:c)||{});return Ft("div",dn(m,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?Ft(n.slots.default):void 0)}}});var J2=Object.defineProperty,Z2=Object.defineProperties,G2=Object.getOwnPropertyDescriptors,$c=Object.getOwnPropertySymbols,Q2=Object.prototype.hasOwnProperty,eB=Object.prototype.propertyIsEnumerable,Oc=(t,n,s)=>n in t?J2(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,tB=(t,n)=>{for(var s in n||(n={}))Q2.call(n,s)&&Oc(t,s,n[s]);if($c)for(var s of $c(n))eB.call(n,s)&&Oc(t,s,n[s]);return t},nB=(t,n)=>Z2(t,G2(n));const sB=Be({name:"Starport",inheritAttrs:!0,props:jd,setup(t,n){const s=U(!1);return us(()=>{s.value=!0}),()=>{var a,i;const o=(i=(a=n.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!No(r)||os(r))&&(r={render(){return o}}),Ft(X2,nB(tB({},t),{key:t.port,component:nl(r),props:l.props}))}}});function oB(t){const n=Te({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),s=bt?document.documentElement||document.body:void 0;function o(){if(!bt)return;const i=ot(t);if(!i)return;const{height:c,width:u,left:d,top:m}=i.getBoundingClientRect(),f=window.getComputedStyle(i),h=f.margin,y=f.padding;Object.assign(n,{height:c,width:u,left:d,top:s.scrollTop+m,margin:h,padding:y})}const l=Zp(o,{immediate:!1});function r(){!bt||(o(),l.resume())}function a(){l.pause()}return n}let lB=(t,n=21)=>(s=n)=>{let o="",l=s;for(;l--;)o+=t[Math.random()*t.length|0];return o};const Mc=lB("abcdefghijklmnopqrstuvwxyz",5);function Tc(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function rB(t){var n;return t.name||((n=t.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var aB=Object.defineProperty,Pc=Object.getOwnPropertySymbols,iB=Object.prototype.hasOwnProperty,cB=Object.prototype.propertyIsEnumerable,Rc=(t,n,s)=>n in t?aB(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Wl=(t,n)=>{for(var s in n||(n={}))iB.call(n,s)&&Rc(t,s,n[s]);if(Pc)for(var s of Pc(n))cB.call(n,s)&&Rc(t,s,n[s]);return t};function pB(t,n,s={}){const o=rB(n),l=Tc(o)||Mc(),r=U(),a=U(null),i=U(!1),c=U(!1),u=Yd(!0),d=U({}),m=F(()=>Wl(Wl(Wl({},W2),s),d.value)),f=U(0);let h;u.run(()=>{h=oB(r),ue(r,async C=>{C&&(c.value=!0),await Ve(),r.value||(c.value=!1)})});const y=Tc(t);function k(){return`starport-${l}-${y}-${Mc()}`}const _=k();return Te({el:r,id:_,port:t,props:a,rect:h,scope:u,isLanded:i,isVisible:c,options:m,liftOffTime:f,component:n,componentName:o,componentId:l,generateId:k,setLocalOptions(C={}){d.value=JSON.parse(JSON.stringify(C))},elRef(){return r},liftOff(){!i.value||(i.value=!1,f.value=Date.now(),h.listen())},land(){i.value||(i.value=!0,h.pause())}})}function uB(t){const n=Te(new Map);function s(l,r){let a=n.get(l);return a||(a=pB(l,r,t),n.set(l,a)),a.component=r,a}function o(l){var r;(r=n.get(l))==null||r.scope.stop(),n.delete(l)}return{portMap:n,dispose:o,getInstance:s}}var dB=Object.defineProperty,fB=Object.defineProperties,mB=Object.getOwnPropertyDescriptors,Lc=Object.getOwnPropertySymbols,hB=Object.prototype.hasOwnProperty,yB=Object.prototype.propertyIsEnumerable,Hc=(t,n,s)=>n in t?dB(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,gB=(t,n)=>{for(var s in n||(n={}))hB.call(n,s)&&Hc(t,s,n[s]);if(Lc)for(var s of Lc(n))yB.call(n,s)&&Hc(t,s,n[s]);return t},vB=(t,n)=>fB(t,mB(n));const bB=Be({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const n=M(Ma);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=F(()=>n.getInstance(t.port,t.component)),o=F(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),l=F(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?vB(gB({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),u)}),r={};return()=>{const a=!!(s.value.isLanded&&s.value.el);return Ft("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},Ft(_m,{to:a?`#${o.value}`:"body",disabled:!a},Ft(s.value.component,dn(r,s.value.props))))}}}),wB=Be({name:"StarportCarrier",setup(t,{slots:n}){const s=uB(M(Sd,{}));return Pn().appContext.app.provide(Ma,s),()=>{var l;return[(l=n.default)==null?void 0:l.call(n),Array.from(s.portMap.entries()).map(([r,{component:a}])=>Ft(bB,{key:r,port:r,component:a}))]}}});function _B(t={}){return{install(n){n.provide(Sd,t),n.component("Starport",sB),n.component("StarportCarrier",wB)}}}function kB(t){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),t.app.use(V2),t.app.use(_B({keepAlive:!0}))}function rt(t,n,s){var o,l;return(l=((o=t.instance)==null?void 0:o.$).provides[n])!=null?l:s}function xB(){return{install(t){t.directive("click",{name:"v-click",mounted(n,s){var d,m,f,h;if(Is.value||((d=rt(s,Ps))==null?void 0:d.value))return;const o=rt(s,_n),l=rt(s,Ts),r=rt(s,ur),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((m=o==null?void 0:o.value)==null?void 0:m.length)||0,u=i?wh:El;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(n))&&o.value.push(n),s.value===null&&(s.value=o==null?void 0:o.value.length),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[n]);else if(!((h=r==null?void 0:r.value.get(s.value))!=null&&h.includes(n))){const y=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[n].concat(y))}n==null||n.classList.toggle(bn,!0),l&&ue(l,()=>{var C;const y=(C=l==null?void 0:l.value)!=null?C:0,k=s.value!=null?y>=s.value:y>c;n.classList.contains(Dl)||n.classList.toggle(u,!k),a!==!1&&a!==void 0&&n.classList.toggle(u,k),n.classList.toggle(_s,!1);const _=r==null?void 0:r.value.get(y);_==null||_.forEach((A,B)=>{A.classList.toggle(ko,!1),B===_.length-1?A.classList.toggle(_s,!0):A.classList.toggle(ko,!0)}),n.classList.contains(_s)||n.classList.toggle(ko,k)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(bn,!1);const o=rt(s,_n);o!=null&&o.value&&dr(o.value,n)}}),t.directive("after",{name:"v-after",mounted(n,s){var i,c;if(Is.value||((i=rt(s,Ps))==null?void 0:i.value))return;const o=rt(s,_n),l=rt(s,Ts),r=rt(s,ur),a=o==null?void 0:o.value.length;s.value===void 0&&(s.value=o==null?void 0:o.value.length),r!=null&&r.value.has(s.value)?(c=r==null?void 0:r.value.get(s.value))==null||c.push(n):r==null||r.value.set(s.value,[n]),n==null||n.classList.toggle(bn,!0),l&&ue(l,()=>{var d,m,f;const u=((d=l.value)!=null?d:0)>=((f=(m=s.value)!=null?m:a)!=null?f:0);n.classList.contains(Dl)||n.classList.toggle(El,!u),n.classList.toggle(_s,!1),n.classList.contains(_s)||n.classList.toggle(ko,u)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(bn,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(n,s){var a,i,c;if(Is.value||((a=rt(s,Ps))==null?void 0:a.value))return;const o=rt(s,_n),l=rt(s,Ts),r=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(n))&&o.value.push(n),n==null||n.classList.toggle(bn,!0),l&&ue(l,()=>{var m;const u=(m=l==null?void 0:l.value)!=null?m:0,d=s.value!=null?u>=s.value:u>r;n.classList.toggle(El,d),n.classList.toggle(Dl,d)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(bn,!1);const o=rt(s,_n);o!=null&&o.value&&dr(o.value,n)}})}}}function AB(t,n){const s=Bu(t),o=Cu(n,s.currentRoute,s.currentPage);return{nav:{...s,...o,downloadPDF:Er,next:an,nextSlide:no,openInEditor:Kk,prev:cn,prevSlide:so},configs:ke,themeConfigs:F(()=>ke.themeConfig)}}function BB(){return{install(t){const n=AB(Xt,St);t.provide(I,Te(n))}}}const gs=nh(Jk);gs.use(ft);gs.use(hh());gs.use(xB());gs.use(BB());kB({app:gs,router:ft});gs.mount("#app");export{Cs as $,V as A,wu as B,me as C,Ne as D,Ou as E,Ge as F,xe as G,lv as H,Ae as I,Mn as J,Tn as K,St as L,Wo as M,qk as N,Pl as O,Fl as P,Qs as Q,Ml as R,p1 as S,ua as T,da as U,a1 as V,mv as W,$t as X,CB as Y,jt as Z,Kt as _,e as a,xo as a0,io as a1,xr as a2,Pg as a3,Rg as a4,Lg as a5,Ig as a6,Bt as a7,Hp as a8,SB as a9,Lt as aa,Qe as ab,Kv as ac,Bn as ad,Np as ae,Ng as af,il as ag,F as b,z as c,Be as d,I as e,ct as f,N as g,b as h,M as i,Xg as j,Yk as k,ke as l,gh as m,Pe as n,w as o,us as p,Te as q,U as r,EB as s,jn as t,DB as u,FB as v,ue as w,J as x,et as y,qp as z};
