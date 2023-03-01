import{S as it,i as st,s as lt,a as ct,e as H,c as ft,b as W,g as pe,t as M,d as he,f as G,h as K,j as ut,o as Pe,k as dt,l as pt,m as ht,n as ke,p as q,q as mt,r as _t,u as gt,v as X,w as Z,x as Ue,y as x,z as Q,A as ue,B as yt,C as wt}from"./chunks/shared-c0198a42.js";import{S as nt,I as C,g as Je,f as We,a as Re,b as de,s as F,i as Ye,c as ae,P as Xe,d as vt}from"./chunks/singletons-b40dfd89.js";import{R as Ze,H as Oe}from"./chunks/control-e7f5239e.js";function bt(o,e){return o==="/"||e==="ignore"?o:e==="never"?o.endsWith("/")?o.slice(0,-1):o:e==="always"&&!o.endsWith("/")?o+"/":o}function Et(o){return o.split("%25").map(decodeURI).join("%25")}function kt(o){for(const e in o)o[e]=decodeURIComponent(o[e]);return o}const Rt=["href","pathname","search","searchParams","toString","toJSON"];function St(o,e){const n=new URL(o);for(const s of Rt){let r=n[s];Object.defineProperty(n,s,{get(){return e(),r},enumerable:!0,configurable:!0})}return Lt(n),n}function Lt(o){Object.defineProperty(o,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const It="/__data.json";function At(o){return o.replace(/\/$/,"")+It}function Pt(...o){let e=5381;for(const n of o)if(typeof n=="string"){let s=n.length;for(;s;)e=e*33^n.charCodeAt(--s)}else if(ArrayBuffer.isView(n)){const s=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=s.length;for(;r;)e=e*33^s[--r]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(o,e)=>((o instanceof Request?o.method:(e==null?void 0:e.method)||"GET")!=="GET"&&re.delete(je(o)),me(o,e));const re=new Map;function Ot(o,e){const n=je(o,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:r,...d}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&re.set(n,{body:r,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(r,d))}return me(o,e)}function Tt(o,e,n){if(re.size>0){const s=je(o,n),r=re.get(s);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);re.delete(s)}}return me(e,n)}function je(o,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(o instanceof Request?o.url:o)}]`;if(e!=null&&e.headers||e!=null&&e.body){const r=[];e.headers&&r.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&r.push(e.body),s+=`[data-hash="${Pt(...r)}"]`}return s}const Ut=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function jt(o){const e=[];return{pattern:o==="/"?/^\/$/:new RegExp(`^${Dt(o).map(s=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,m)=>{if(m%2){if(_.startsWith("x+"))return Se(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Se(String.fromCharCode(..._.slice(2).split("-").map(I=>parseInt(I,16))));const y=Ut.exec(_);if(!y)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,R,j,V]=y;return e.push({name:j,matcher:V,optional:!!w,rest:!!R,chained:R?m===1&&t[0]==="":!1}),R?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return Se(_)}).join("")}).join("")}/?$`),params:e}}function $t(o){return!/^\([^)]+\)$/.test(o)}function Dt(o){return o.slice(1).split("/").filter($t)}function Nt(o,e,n){const s={},r=o.slice(1);let d=0;for(let t=0;t<e.length;t+=1){const f=e[t],_=r[t-d];if(f.chained&&f.rest&&d){s[f.name]=r.slice(t-d,t+1).filter(m=>m).join("/"),d=0;continue}if(_===void 0){f.rest&&(s[f.name]="");continue}if(!f.matcher||n[f.matcher](_)){s[f.name]=_;continue}if(f.optional&&f.chained){d++;continue}return}if(!d)return s}function Se(o){return o.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Vt(o,e,n,s){const r=new Set(e);return Object.entries(n).map(([f,[_,m,y]])=>{const{pattern:w,params:R}=jt(f),j={id:f,exec:V=>{const I=w.exec(V);if(I)return Nt(I,R,s)},errors:[1,...y||[]].map(V=>o[V]),layouts:[0,...m||[]].map(t),leaf:d(_)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function d(f){const _=f<0;return _&&(f=~f),[_,o[f]]}function t(f){return f===void 0?f:[r.has(f),o[f]]}}function Ct(o){let e,n,s;var r=o[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return r&&(e=X(r,d(o))),{c(){e&&Z(e.$$.fragment),n=H()},l(t){e&&Ue(e.$$.fragment,t),n=H()},m(t,f){e&&x(e,t,f),W(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),r!==(r=t[0][0])){if(e){pe();const m=e;M(m.$$.fragment,1,0,()=>{Q(m,1)}),he()}r?(e=X(r,d(t)),Z(e.$$.fragment),G(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else r&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&M(e.$$.fragment,t),s=!1},d(t){t&&K(n),e&&Q(e,t)}}}function qt(o){let e,n,s;var r=o[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Bt]},$$scope:{ctx:t}}}}return r&&(e=X(r,d(o))),{c(){e&&Z(e.$$.fragment),n=H()},l(t){e&&Ue(e.$$.fragment,t),n=H()},m(t,f){e&&x(e,t,f),W(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),r!==(r=t[0][0])){if(e){pe();const m=e;M(m.$$.fragment,1,0,()=>{Q(m,1)}),he()}r?(e=X(r,d(t)),Z(e.$$.fragment),G(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else r&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&M(e.$$.fragment,t),s=!1},d(t){t&&K(n),e&&Q(e,t)}}}function Bt(o){let e,n,s;var r=o[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return r&&(e=X(r,d(o))),{c(){e&&Z(e.$$.fragment),n=H()},l(t){e&&Ue(e.$$.fragment,t),n=H()},m(t,f){e&&x(e,t,f),W(t,n,f),s=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),r!==(r=t[0][1])){if(e){pe();const m=e;M(m.$$.fragment,1,0,()=>{Q(m,1)}),he()}r?(e=X(r,d(t)),Z(e.$$.fragment),G(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else r&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&M(e.$$.fragment,t),s=!1},d(t){t&&K(n),e&&Q(e,t)}}}function xe(o){let e,n=o[5]&&Qe(o);return{c(){e=dt("div"),n&&n.c(),this.h()},l(s){e=pt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=ht(e);n&&n.l(r),r.forEach(K),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(s,r){W(s,e,r),n&&n.m(e,null)},p(s,r){s[5]?n?n.p(s,r):(n=Qe(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&K(e),n&&n.d()}}}function Qe(o){let e;return{c(){e=mt(o[6])},l(n){e=_t(n,o[6])},m(n,s){W(n,e,s)},p(n,s){s&64&&gt(e,n[6])},d(n){n&&K(e)}}}function Ft(o){let e,n,s,r,d;const t=[qt,Ct],f=[];function _(y,w){return y[0][1]?0:1}e=_(o),n=f[e]=t[e](o);let m=o[4]&&xe(o);return{c(){n.c(),s=ct(),m&&m.c(),r=H()},l(y){n.l(y),s=ft(y),m&&m.l(y),r=H()},m(y,w){f[e].m(y,w),W(y,s,w),m&&m.m(y,w),W(y,r,w),d=!0},p(y,[w]){let R=e;e=_(y),e===R?f[e].p(y,w):(pe(),M(f[R],1,1,()=>{f[R]=null}),he(),n=f[e],n?n.p(y,w):(n=f[e]=t[e](y),n.c()),G(n,1),n.m(s.parentNode,s)),y[4]?m?m.p(y,w):(m=xe(y),m.c(),m.m(r.parentNode,r)):m&&(m.d(1),m=null)},i(y){d||(G(n),d=!0)},o(y){M(n),d=!1},d(y){f[e].d(y),y&&K(s),m&&m.d(y),y&&K(r)}}}function Ht(o,e,n){let{stores:s}=e,{page:r}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;ut(s.page.notify);let m=!1,y=!1,w=null;return Pe(()=>{const R=s.page.subscribe(()=>{m&&(n(5,y=!0),n(6,w=document.title||"untitled page"))});return n(4,m=!0),R}),o.$$set=R=>{"stores"in R&&n(7,s=R.stores),"page"in R&&n(8,r=R.page),"components"in R&&n(0,d=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,f=R.data_0),"data_1"in R&&n(3,_=R.data_1)},o.$$.update=()=>{o.$$.dirty&384&&s.page.set(r)},[d,t,f,_,m,y,w,s,r]}class Mt extends it{constructor(e){super(),st(this,e,Ht,Ft,lt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Gt="modulepreload",Kt=function(o,e){return new URL(o,e).href},et={},D=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Kt(d,s),d in et)return;et[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!s)for(let y=r.length-1;y>=0;y--){const w=r[y];if(w.href===d&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const m=document.createElement("link");if(m.rel=t?"stylesheet":Gt,t||(m.as="script",m.crossOrigin=""),m.href=d,document.head.appendChild(m),t)return new Promise((y,w)=>{m.addEventListener("load",y),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},zt={},_e=[()=>D(()=>import("./chunks/0-e03fb927.js"),["./chunks/0-e03fb927.js","./components/pages/_layout.svelte-a17a757c.js","./chunks/shared-c0198a42.js","./chunks/stores-01bb12ae.js","./chunks/singletons-b40dfd89.js","./chunks/i18n-34ef016b.js","./chunks/control-e7f5239e.js","./assets/_layout-3c6166f8.css"],import.meta.url),()=>D(()=>import("./chunks/1-b8486392.js"),["./chunks/1-b8486392.js","./components/pages/_error.svelte-56127cbc.js","./chunks/shared-c0198a42.js","./chunks/stores-01bb12ae.js","./chunks/singletons-b40dfd89.js"],import.meta.url),()=>D(()=>import("./chunks/2-a9266ab4.js"),["./chunks/2-a9266ab4.js","./components/pages/_page.svelte-564b339f.js","./chunks/shared-c0198a42.js","./chunks/i18n-34ef016b.js","./chunks/control-e7f5239e.js","./chunks/Home-166e1991.js","./chunks/Image-99d2c3b9.js","./assets/Home-e0d93ac5.css"],import.meta.url),()=>D(()=>import("./chunks/3-6d146efd.js"),["./chunks/3-6d146efd.js","./components/pages/contact/_page.svelte-5f5be331.js","./chunks/shared-c0198a42.js","./chunks/i18n-34ef016b.js","./chunks/control-e7f5239e.js","./chunks/Contact-4121e4d6.js","./chunks/SvelteMarkdown-5ca41ec1.js"],import.meta.url),()=>D(()=>import("./chunks/4-4384fdad.js"),["./chunks/4-4384fdad.js","./components/pages/en/_page.svelte-c3efa5c6.js","./chunks/shared-c0198a42.js","./chunks/i18n-34ef016b.js","./chunks/control-e7f5239e.js","./chunks/Home-166e1991.js","./chunks/Image-99d2c3b9.js","./assets/Home-e0d93ac5.css"],import.meta.url),()=>D(()=>import("./chunks/5-e0517b45.js"),["./chunks/5-e0517b45.js","./components/pages/en/contact/_page.svelte-4bb408d0.js","./chunks/shared-c0198a42.js","./chunks/i18n-34ef016b.js","./chunks/control-e7f5239e.js","./chunks/Contact-4121e4d6.js","./chunks/SvelteMarkdown-5ca41ec1.js"],import.meta.url),()=>D(()=>import("./chunks/6-a41205aa.js"),["./chunks/6-a41205aa.js","./components/pages/en/philosophy/_page.svelte-9bb0a13d.js","./chunks/shared-c0198a42.js","./chunks/i18n-34ef016b.js","./chunks/control-e7f5239e.js","./chunks/Philosophy-6f906a4f.js","./chunks/SvelteMarkdown-5ca41ec1.js"],import.meta.url),()=>D(()=>import("./chunks/7-d4c0678f.js"),["./chunks/7-d4c0678f.js","./components/pages/en/projects/_page.svelte-d55c223d.js","./chunks/shared-c0198a42.js","./chunks/i18n-34ef016b.js","./chunks/control-e7f5239e.js","./chunks/Projects-72bb50a8.js","./chunks/Image-99d2c3b9.js"],import.meta.url),()=>D(()=>import("./chunks/8-6974e0ea.js"),["./chunks/8-6974e0ea.js","./components/pages/en/projects/_projectSlug_/_page.svelte-00daed28.js","./chunks/shared-c0198a42.js","./chunks/stores-01bb12ae.js","./chunks/singletons-b40dfd89.js","./chunks/i18n-34ef016b.js","./chunks/control-e7f5239e.js","./chunks/SingleProject-ee39e1c0.js","./chunks/Image-99d2c3b9.js","./chunks/SvelteMarkdown-5ca41ec1.js","./assets/SingleProject-b7c73514.css"],import.meta.url),()=>D(()=>import("./chunks/9-bc533ab4.js"),["./chunks/9-bc533ab4.js","./components/pages/philosophie/_page.svelte-4777382b.js","./chunks/shared-c0198a42.js","./chunks/i18n-34ef016b.js","./chunks/control-e7f5239e.js","./chunks/Philosophy-6f906a4f.js","./chunks/SvelteMarkdown-5ca41ec1.js"],import.meta.url),()=>D(()=>import("./chunks/10-30b9e2cb.js"),["./chunks/10-30b9e2cb.js","./components/pages/projets/_page.svelte-1c18a04b.js","./chunks/shared-c0198a42.js","./chunks/i18n-34ef016b.js","./chunks/control-e7f5239e.js","./chunks/Projects-72bb50a8.js","./chunks/Image-99d2c3b9.js"],import.meta.url),()=>D(()=>import("./chunks/11-7e19f878.js"),["./chunks/11-7e19f878.js","./components/pages/projets/_projectSlug_/_page.svelte-4b364430.js","./chunks/shared-c0198a42.js","./chunks/stores-01bb12ae.js","./chunks/singletons-b40dfd89.js","./chunks/i18n-34ef016b.js","./chunks/control-e7f5239e.js","./chunks/SingleProject-ee39e1c0.js","./chunks/Image-99d2c3b9.js","./chunks/SvelteMarkdown-5ca41ec1.js","./assets/SingleProject-b7c73514.css"],import.meta.url)],at=[0],Jt={"/":[-3],"/contact":[-4],"/en":[-5],"/en/contact":[-6],"/en/philosophy":[-7],"/en/projects":[-8],"/en/projects/[projectSlug]":[-9],"/philosophie":[-10],"/projets":[-11],"/projets/[projectSlug]":[-12]},Wt={handleError:({error:o})=>{console.error(o)}};async function Yt(o){var e;for(const n in o)if(typeof((e=o[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(o).map(async([s,r])=>[s,await r])));return o}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Xt=-1,Zt=-2,xt=-3,Qt=-4,en=-5,tn=-6;function nn(o){if(typeof o=="number")return s(o,!0);if(!Array.isArray(o)||o.length===0)throw new Error("Invalid input");const e=o,n=Array(e.length);function s(r,d=!1){if(r===Xt)return;if(r===xt)return NaN;if(r===Qt)return 1/0;if(r===en)return-1/0;if(r===tn)return-0;if(d)throw new Error("Invalid input");if(r in n)return n[r];const t=e[r];if(!t||typeof t!="object")n[r]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[r]=new Date(t[1]);break;case"Set":const _=new Set;n[r]=_;for(let w=1;w<t.length;w+=1)_.add(s(t[w]));break;case"Map":const m=new Map;n[r]=m;for(let w=1;w<t.length;w+=2)m.set(s(t[w]),s(t[w+1]));break;case"RegExp":n[r]=new RegExp(t[1],t[2]);break;case"Object":n[r]=Object(t[1]);break;case"BigInt":n[r]=BigInt(t[1]);break;case"null":const y=Object.create(null);n[r]=y;for(let w=1;w<t.length;w+=2)y[t[w]]=s(t[w+1]);break}else{const f=new Array(t.length);n[r]=f;for(let _=0;_<t.length;_+=1){const m=t[_];m!==Zt&&(f[_]=s(m))}}else{const f={};n[r]=f;for(const _ in t){const m=t[_];f[_]=s(m)}}return n[r]}return s(0)}function an(o){return o.filter(e=>e!=null)}const Le=Vt(_e,at,Jt,zt),rt=_e[0],Te=_e[1];rt();Te();let Y={};try{Y=JSON.parse(sessionStorage[nt])}catch{}function Ie(o){Y[o]=ae()}function rn({target:o,base:e}){var Ge;const n=document.documentElement,s=[];let r=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,m=!0,y=!1,w=!1,R=!1,j=!1,V,I=(Ge=history.state)==null?void 0:Ge[C];I||(I=Date.now(),history.replaceState({...history.state,[C]:I},"",location.href));const ge=Y[I];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let z,$e,oe;async function De(){oe=oe||Promise.resolve(),await oe,oe=null;const a=new URL(location.href),i=le(a,!0);r=null,await Ve(i,a,[])}async function ye(a,{noScroll:i=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:u=!1},h,b){return typeof a=="string"&&(a=new URL(a,Je(document))),fe({url:a,scroll:i?ae():null,keepfocus:l,redirect_chain:h,details:{state:p,replaceState:c},nav_token:b,accepted:()=>{u&&(j=!0)},blocked:()=>{},type:"goto"})}async function Ne(a){const i=le(a,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return r={id:i.id,promise:Be(i).then(c=>(c.type==="loaded"&&c.state.error&&(r=null),c))},r.promise}async function ie(...a){const c=Le.filter(l=>a.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function Ve(a,i,c,l,p={},u){var b,v;$e=p;let h=a&&await Be(a);if(h||(h=await Me(i,{id:null},await ne(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(a==null?void 0:a.url)||i,$e!==p)return!1;if(h.type==="redirect")if(c.length>10||c.includes(i.pathname))h=await se({status:500,error:await ne(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return ye(new URL(h.location,i).href,{},[...c,i.pathname],p),!1;else((v=(b=h.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await F.updated.check()&&await te(i);if(s.length=0,j=!1,y=!0,l&&l.details){const{details:g}=l,k=g.replaceState?0:1;g.state[C]=I+=k,history[g.replaceState?"replaceState":"pushState"](g.state,"",i)}if(r=null,_?(t=h.state,h.props.page&&(h.props.page.url=i),V.$set(h.props)):Ce(h),l){const{scroll:g,keepfocus:k}=l,{activeElement:P}=document;await ue();const $=document.activeElement!==P&&document.activeElement!==document.body;if(!k&&!$&&await Ae(),m){const L=i.hash&&document.getElementById(decodeURIComponent(i.hash.slice(1)));g?scrollTo(g.x,g.y):L?L.scrollIntoView():scrollTo(0,0)}}else await ue();m=!0,h.props.page&&(z=h.props.page),u&&u(),y=!1}function Ce(a){var l;t=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),z=a.props.page,V=new Mt({target:o,props:{...a.props,stores:F},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(p=>p(c)),_=!0}async function ee({url:a,params:i,branch:c,status:l,error:p,route:u,form:h}){let b="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(b=L.slash);a.pathname=bt(a.pathname,b),a.search=a.search;const v={type:"loaded",state:{url:a,params:i,branch:c,error:p,route:u},props:{components:an(c).map(L=>L.node.component)}};h!==void 0&&(v.props.form=h);let g={},k=!z,P=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const E=c[L],T=t.branch[L];(E==null?void 0:E.data)!==(T==null?void 0:T.data)&&(k=!0),E&&(g={...g,...E.data},k&&(v.props[`data_${P}`]=g),P+=1)}return(!t.url||a.href!==t.url.href||t.error!==p||h!==void 0&&h!==z.form||k)&&(v.props.page={error:p,params:i,route:{id:(u==null?void 0:u.id)??null},status:l,url:new URL(a),form:h??null,data:k?g:z.data}),v}async function we({loader:a,parent:i,url:c,params:l,route:p,server_data_node:u}){var g,k,P;let h=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await a();if((g=v.universal)!=null&&g.load){let $=function(...E){for(const T of E){const{href:N}=new URL(T,c);b.dependencies.add(N)}};const L={route:{get id(){return b.route=!0,p.id}},params:new Proxy(l,{get:(E,T)=>(b.params.add(T),E[T])}),data:(u==null?void 0:u.data)??null,url:St(c,()=>{b.url=!0}),async fetch(E,T){let N;E instanceof Request?(N=E.url,T={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...T}):N=E;const B=new URL(N,c).href;return $(B),_?Tt(N,B,T):Ot(N,T)},setHeaders:()=>{},depends:$,parent(){return b.parent=!0,i()}};h=await v.universal.load.call(null,L)??null,h=h?await Yt(h):null}return{node:v,loader:a,server:u,universal:(k=v.universal)!=null&&k.load?{type:"data",data:h,uses:b}:null,data:h??(u==null?void 0:u.data)??null,slash:((P=v.universal)==null?void 0:P.trailingSlash)??(u==null?void 0:u.slash)}}function qe(a,i,c,l,p){if(j)return!0;if(!l)return!1;if(l.parent&&a||l.route&&i||l.url&&c)return!0;for(const u of l.params)if(p[u]!==t.params[u])return!0;for(const u of l.dependencies)if(s.some(h=>h(new URL(u))))return!0;return!1}function ve(a,i){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?i??null:null}async function Be({id:a,invalidating:i,url:c,params:l,route:p}){if((r==null?void 0:r.id)===a)return r.promise;const{errors:u,layouts:h,leaf:b}=p,v=[...h,b];u.forEach(S=>S==null?void 0:S().catch(()=>{})),v.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let g=null;const k=t.url?a!==t.url.pathname+t.url.search:!1,P=t.route?p.id!==t.route.id:!1;let $=!1;const L=v.map((S,U)=>{var J;const A=t.branch[U],O=!!(S!=null&&S[0])&&((A==null?void 0:A.loader)!==S[1]||qe($,P,k,(J=A.server)==null?void 0:J.uses,l));return O&&($=!0),O});if(L.some(Boolean)){try{g=await tt(c,L)}catch(S){return se({status:500,error:await ne(S,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(g.type==="redirect")return g}const E=g==null?void 0:g.nodes;let T=!1;const N=v.map(async(S,U)=>{var be;if(!S)return;const A=t.branch[U],O=E==null?void 0:E[U];if((!O||O.type==="skip")&&S[1]===(A==null?void 0:A.loader)&&!qe(T,P,k,(be=A.universal)==null?void 0:be.uses,l))return A;if(T=!0,(O==null?void 0:O.type)==="error")throw O;return we({loader:S[1],url:c,params:l,route:p,parent:async()=>{var ze;const Ke={};for(let Ee=0;Ee<U;Ee+=1)Object.assign(Ke,(ze=await N[Ee])==null?void 0:ze.data);return Ke},server_data_node:ve(O===void 0&&S[0]?{type:"skip"}:O??null,A==null?void 0:A.server)})});for(const S of N)S.catch(()=>{});const B=[];for(let S=0;S<v.length;S+=1)if(v[S])try{B.push(await N[S])}catch(U){if(U instanceof Ze)return{type:"redirect",location:U.location};let A=500,O;if(E!=null&&E.includes(U))A=U.status??A,O=U.error;else if(U instanceof Oe)A=U.status,O=U.body;else{if(await F.updated.check())return await te(c);O=await ne(U,{params:l,url:c,route:{id:p.id}})}const J=await Fe(S,B,u);return J?await ee({url:c,params:l,branch:B.slice(0,J.idx).concat(J.node),status:A,error:O,route:p}):await Me(c,{id:p.id},O,A)}else B.push(void 0);return await ee({url:c,params:l,branch:B,status:200,error:null,route:p,form:i?void 0:null})}async function Fe(a,i,c){for(;a--;)if(c[a]){let l=a;for(;!i[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:a,error:i,url:c,route:l}){const p={};let u=null;if(at[0]===0)try{const g=await tt(c,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;u=g.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await te(c)}const b=await we({loader:rt,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:ve(u)}),v={node:await Te(),loader:Te,universal:null,server:null,data:null};return await ee({url:c,params:p,branch:[b,v],status:a,error:i,route:null})}function le(a,i){if(Ye(a,e))return;const c=ce(a);for(const l of Le){const p=l.exec(c);if(p)return{id:a.pathname+a.search,invalidating:i,route:l,params:kt(p),url:a}}}function ce(a){return Et(a.pathname.slice(e.length)||"/")}function He({url:a,type:i,intent:c,delta:l}){var b,v;let p=!1;const u={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:a},willUnload:!c,type:i};l!==void 0&&(u.delta=l);const h={...u,cancel:()=>{p=!0}};return w||d.before_navigate.forEach(g=>g(h)),p?null:u}async function fe({url:a,scroll:i,keepfocus:c,redirect_chain:l,details:p,type:u,delta:h,nav_token:b,accepted:v,blocked:g}){const k=le(a,!1),P=He({url:a,type:u,delta:h,intent:k});if(!P){g();return}Ie(I),v(),w=!0,_&&F.navigating.set(P),await Ve(k,a,l,{scroll:i,keepfocus:c,details:p},b,()=>{w=!1,d.after_navigate.forEach($=>$(P)),F.navigating.set(null)})}async function Me(a,i,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await se({status:l,error:c,url:a,route:i}):await te(a)}function te(a){return location.href=a.href,new Promise(()=>{})}function ot(){let a;n.addEventListener("mousemove",u=>{const h=u.target;clearTimeout(a),a=setTimeout(()=>{l(h,2)},20)});function i(u){l(u.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const c=new IntersectionObserver(u=>{for(const h of u)h.isIntersecting&&(ie(ce(new URL(h.target.href))),c.unobserve(h.target))},{threshold:0});function l(u,h){const b=We(u,n);if(!b)return;const{url:v,external:g}=Re(b,e);if(g)return;const k=de(b);k.reload||(h<=k.preload_data?Ne(v):h<=k.preload_code&&ie(ce(v)))}function p(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:h,external:b}=Re(u,e);if(b)continue;const v=de(u);v.reload||(v.preload_code===Xe.viewport&&c.observe(u),v.preload_code===Xe.eager&&ie(ce(h)))}}d.after_navigate.push(p),p()}return{after_navigate:a=>{Pe(()=>(d.after_navigate.push(a),()=>{const i=d.after_navigate.indexOf(a);d.after_navigate.splice(i,1)}))},before_navigate:a=>{Pe(()=>(d.before_navigate.push(a),()=>{const i=d.before_navigate.indexOf(a);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(y||!_)&&(m=!1)},goto:(a,i={})=>ye(a,i,[]),invalidate:a=>{if(typeof a=="function")s.push(a);else{const{href:i}=new URL(a,location.href);s.push(c=>c.href===i)}return De()},invalidateAll:()=>(j=!0,De()),preload_data:async a=>{const i=new URL(a,Je(document));await Ne(i)},preload_code:ie,apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Fe(t.branch.length,c,l.errors);if(p){const u=await ee({url:i,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:a.status??500,error:a.error,route:l});t=u.state,V.$set(u.props),ue().then(Ae)}}else if(a.type==="redirect")ye(a.location,{invalidateAll:!0},[]);else{const i={form:a.data,page:{...z,form:a.data,status:a.status}};V.$set(i),a.type==="success"&&ue().then(Ae)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var l;let c=!1;if(!w){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(u=>u(p))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ie(I);try{sessionStorage[nt]=JSON.stringify(Y)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||ot(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const c=We(i.composedPath()[0],n);if(!c)return;const{url:l,external:p,target:u}=Re(c,e);if(!l)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const h=de(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(p||h.reload){He({url:l,type:"link"})||i.preventDefault(),w=!0;return}const[v,g]=l.href.split("#");if(g!==void 0&&v===location.href.split("#")[0]){R=!0,Ie(I),t.url=l,F.page.set({...z,url:l}),F.page.notify();return}fe({url:l,scroll:h.noscroll?ae():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),n.addEventListener("submit",i=>{if(i.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(i.target),l=i.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const u=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(Ye(u,e))return;const h=i.target,{noscroll:b,reload:v}=de(h);if(v)return;i.preventDefault(),i.stopPropagation();const g=new FormData(h),k=l==null?void 0:l.getAttribute("name");k&&g.append(k,(l==null?void 0:l.getAttribute("value"))??""),u.search=new URLSearchParams(g).toString(),fe({url:u,scroll:b?ae():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",i=>{var c;if((c=i.state)!=null&&c[C]){if(i.state[C]===I)return;const l=Y[i.state[C]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){Y[I]=ae(),I=i.state[C],scrollTo(l.x,l.y);return}const p=i.state[C]-I;fe({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=i.state[C]},blocked:()=>{history.go(-p)},type:"popstate",delta:p})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[C]:++I},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&F.navigating.set(null)})},_hydrate:async({status:a=200,error:i,node_ids:c,params:l,route:p,data:u,form:h})=>{f=!0;const b=new URL(location.href);({params:l={},route:p={id:null}}=le(b,!1)||{});let v;try{const g=c.map(async(k,P)=>{const $=u[P];return we({loader:_e[k],url:b,params:l,route:p,parent:async()=>{const L={};for(let E=0;E<P;E+=1)Object.assign(L,(await g[E]).data);return L},server_data_node:ve($)})});v=await ee({url:b,params:l,branch:await Promise.all(g),status:a,error:i,form:h,route:Le.find(({id:k})=>k===p.id)??null})}catch(g){if(g instanceof Ze){await te(new URL(g.location,location.href));return}v=await se({status:g instanceof Oe?g.status:500,error:await ne(g,{url:b,params:l,route:p}),url:b,route:p})}Ce(v)}}}async function tt(o,e){var d;const n=new URL(o);n.pathname=At(o.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await me(n.href),r=await s.json();if(!s.ok)throw new Error(r);return(d=r.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=nn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),r}function ne(o,e){return o instanceof Oe?o.body:Wt.handleError({error:o,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ae(){const o=document.querySelector("[autofocus]");if(o)o.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var r;s((r=getSelection())==null?void 0:r.removeAllRanges())})})}}async function cn({env:o,hydrate:e,paths:n,target:s,version:r}){yt(n),wt(r);const d=rn({target:s,base:n.base});vt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{cn as start};
