import{S as it,i as st,s as lt,a as ct,e as H,c as ft,b as W,g as pe,t as M,d as he,f as G,h as J,j as ut,o as Pe,k as dt,l as pt,m as ht,n as ke,p as q,q as mt,r as _t,u as gt,v as X,w as Z,x as Te,y as x,z as Q,A as ue}from"./chunks/index-b2aee97a.js";import{S as nt,I as V,g as ze,f as We,a as Re,b as de,s as B,i as Ye,c as ae,P as Xe,d as yt,e as wt,h as vt}from"./chunks/singletons-d29222f1.js";function bt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function Et(r){return r.split("%25").map(decodeURI).join("%25")}function kt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const Rt=["href","pathname","search","searchParams","toString","toJSON"];function St(r,e){const n=new URL(r);for(const s of Rt){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return Lt(n),n}function Lt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const It="/__data.json";function At(r){return r.replace(/\/$/,"")+It}function Pt(...r){let e=5381;for(const n of r)if(typeof n=="string"){let s=n.length;for(;s;)e=e*33^n.charCodeAt(--s)}else if(ArrayBuffer.isView(n)){const s=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=s.length;for(;o;)e=e*33^s[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&re.delete($e(r)),me(r,e));const re=new Map;function Ot(r,e){const n=$e(r,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:o,...d}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&re.set(n,{body:o,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,d))}return me(r,e)}function Ut(r,e,n){if(re.size>0){const s=$e(r,n),o=re.get(s);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);re.delete(s)}}return me(e,n)}function $e(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;if(e!=null&&e.headers||e!=null&&e.body){const o=[];e.headers&&o.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&o.push(e.body),s+=`[data-hash="${Pt(...o)}"]`}return s}const Tt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function $t(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${jt(r).map(s=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,m)=>{if(m%2){if(_.startsWith("x+"))return Se(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Se(String.fromCharCode(..._.slice(2).split("-").map(I=>parseInt(I,16))));const y=Tt.exec(_);if(!y)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,R,$,D]=y;return e.push({name:$,matcher:D,optional:!!w,rest:!!R,chained:R?m===1&&t[0]==="":!1}),R?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return Se(_)}).join("")}).join("")}/?$`),params:e}}function Nt(r){return!/^\([^)]+\)$/.test(r)}function jt(r){return r.slice(1).split("/").filter(Nt)}function Dt(r,e,n){const s={},o=r.slice(1);let d=0;for(let t=0;t<e.length;t+=1){const f=e[t],_=o[t-d];if(f.chained&&f.rest&&d){s[f.name]=o.slice(t-d,t+1).filter(m=>m).join("/"),d=0;continue}if(_===void 0){f.rest&&(s[f.name]="");continue}if(!f.matcher||n[f.matcher](_)){s[f.name]=_;continue}if(f.optional&&f.chained){d++;continue}return}if(!d)return s}function Se(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Vt(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([f,[_,m,y]])=>{const{pattern:w,params:R}=$t(f),$={id:f,exec:D=>{const I=w.exec(D);if(I)return Dt(I,R,s)},errors:[1,...y||[]].map(D=>r[D]),layouts:[0,...m||[]].map(t),leaf:d(_)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function d(f){const _=f<0;return _&&(f=~f),[_,r[f]]}function t(f){return f===void 0?f:[o.has(f),r[f]]}}function Ct(r){let e,n,s;var o=r[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=X(o,d(r))),{c(){e&&Z(e.$$.fragment),n=H()},l(t){e&&Te(e.$$.fragment,t),n=H()},m(t,f){e&&x(e,t,f),W(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),o!==(o=t[0][0])){if(e){pe();const m=e;M(m.$$.fragment,1,0,()=>{Q(m,1)}),he()}o?(e=X(o,d(t)),Z(e.$$.fragment),G(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&M(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Q(e,t)}}}function qt(r){let e,n,s;var o=r[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Ft]},$$scope:{ctx:t}}}}return o&&(e=X(o,d(r))),{c(){e&&Z(e.$$.fragment),n=H()},l(t){e&&Te(e.$$.fragment,t),n=H()},m(t,f){e&&x(e,t,f),W(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){pe();const m=e;M(m.$$.fragment,1,0,()=>{Q(m,1)}),he()}o?(e=X(o,d(t)),Z(e.$$.fragment),G(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&M(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Q(e,t)}}}function Ft(r){let e,n,s;var o=r[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=X(o,d(r))),{c(){e&&Z(e.$$.fragment),n=H()},l(t){e&&Te(e.$$.fragment,t),n=H()},m(t,f){e&&x(e,t,f),W(t,n,f),s=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),o!==(o=t[0][1])){if(e){pe();const m=e;M(m.$$.fragment,1,0,()=>{Q(m,1)}),he()}o?(e=X(o,d(t)),Z(e.$$.fragment),G(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&M(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Q(e,t)}}}function Ze(r){let e,n=r[5]&&xe(r);return{c(){e=dt("div"),n&&n.c(),this.h()},l(s){e=pt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ht(e);n&&n.l(o),o.forEach(J),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(s,o){W(s,e,o),n&&n.m(e,null)},p(s,o){s[5]?n?n.p(s,o):(n=xe(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&J(e),n&&n.d()}}}function xe(r){let e;return{c(){e=mt(r[6])},l(n){e=_t(n,r[6])},m(n,s){W(n,e,s)},p(n,s){s&64&&gt(e,n[6])},d(n){n&&J(e)}}}function Bt(r){let e,n,s,o,d;const t=[qt,Ct],f=[];function _(y,w){return y[0][1]?0:1}e=_(r),n=f[e]=t[e](r);let m=r[4]&&Ze(r);return{c(){n.c(),s=ct(),m&&m.c(),o=H()},l(y){n.l(y),s=ft(y),m&&m.l(y),o=H()},m(y,w){f[e].m(y,w),W(y,s,w),m&&m.m(y,w),W(y,o,w),d=!0},p(y,[w]){let R=e;e=_(y),e===R?f[e].p(y,w):(pe(),M(f[R],1,1,()=>{f[R]=null}),he(),n=f[e],n?n.p(y,w):(n=f[e]=t[e](y),n.c()),G(n,1),n.m(s.parentNode,s)),y[4]?m?m.p(y,w):(m=Ze(y),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},i(y){d||(G(n),d=!0)},o(y){M(n),d=!1},d(y){f[e].d(y),y&&J(s),m&&m.d(y),y&&J(o)}}}function Ht(r,e,n){let{stores:s}=e,{page:o}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;ut(s.page.notify);let m=!1,y=!1,w=null;return Pe(()=>{const R=s.page.subscribe(()=>{m&&(n(5,y=!0),n(6,w=document.title||"untitled page"))});return n(4,m=!0),R}),r.$$set=R=>{"stores"in R&&n(7,s=R.stores),"page"in R&&n(8,o=R.page),"components"in R&&n(0,d=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,f=R.data_0),"data_1"in R&&n(3,_=R.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[d,t,f,_,m,y,w,s,o]}class Mt extends it{constructor(e){super(),st(this,e,Ht,Bt,lt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Gt="modulepreload",Jt=function(r,e){return new URL(r,e).href},Qe={},C=function(e,n,s){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Jt(d,s),d in Qe)return;Qe[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!s)for(let y=o.length-1;y>=0;y--){const w=o[y];if(w.href===d&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const m=document.createElement("link");if(m.rel=t?"stylesheet":Gt,t||(m.as="script",m.crossOrigin=""),m.href=d,document.head.appendChild(m),t)return new Promise((y,w)=>{m.addEventListener("load",y),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Kt={},_e=[()=>C(()=>import("./chunks/0-731f31c0.js"),["./chunks/0-731f31c0.js","./components/pages/_layout.svelte-32ce8e93.js","./chunks/index-b2aee97a.js","./chunks/stores-e24cb46b.js","./chunks/singletons-d29222f1.js","./chunks/utils-5684e074.js","./assets/_layout-78cb6ef6.css"],import.meta.url),()=>C(()=>import("./chunks/1-69e3e646.js"),["./chunks/1-69e3e646.js","./components/error.svelte-8ec44a22.js","./chunks/index-b2aee97a.js","./chunks/stores-e24cb46b.js","./chunks/singletons-d29222f1.js"],import.meta.url),()=>C(()=>import("./chunks/2-d241e9d4.js"),["./chunks/2-d241e9d4.js","./components/pages/_page.svelte-733b2a31.js","./chunks/index-b2aee97a.js","./chunks/utils-5684e074.js","./chunks/Home-4cf07984.js","./assets/Home-e0d93ac5.css"],import.meta.url),()=>C(()=>import("./chunks/3-65d77606.js"),["./chunks/3-65d77606.js","./components/pages/contact/_page.svelte-7e852ce2.js","./chunks/index-b2aee97a.js","./chunks/utils-5684e074.js","./chunks/Contact-d478a1f4.js","./chunks/SvelteMarkdown-18f9b68c.js","./chunks/marked.esm-0b02a870.js"],import.meta.url),()=>C(()=>import("./chunks/4-10de98bd.js"),["./chunks/4-10de98bd.js","./components/pages/en/_page.svelte-65a71bdb.js","./chunks/index-b2aee97a.js","./chunks/utils-5684e074.js","./chunks/Home-4cf07984.js","./assets/Home-e0d93ac5.css"],import.meta.url),()=>C(()=>import("./chunks/5-95127f6b.js"),["./chunks/5-95127f6b.js","./components/pages/en/contact/_page.svelte-dbecad39.js","./chunks/index-b2aee97a.js","./chunks/utils-5684e074.js","./chunks/Contact-d478a1f4.js","./chunks/SvelteMarkdown-18f9b68c.js","./chunks/marked.esm-0b02a870.js"],import.meta.url),()=>C(()=>import("./chunks/6-f84fe0c9.js"),["./chunks/6-f84fe0c9.js","./components/pages/en/philosophy/_page.svelte-1d7d740c.js","./chunks/index-b2aee97a.js","./chunks/utils-5684e074.js","./chunks/Philosophy-9aa8ad7c.js","./chunks/SvelteMarkdown-18f9b68c.js","./chunks/marked.esm-0b02a870.js"],import.meta.url),()=>C(()=>import("./chunks/7-93650a56.js"),["./chunks/7-93650a56.js","./components/pages/en/projects/_page.svelte-c2e01565.js","./chunks/index-b2aee97a.js","./chunks/utils-5684e074.js","./chunks/Projects-9f6200ee.js","./chunks/marked.esm-0b02a870.js"],import.meta.url),()=>C(()=>import("./chunks/8-76fcaa4b.js"),["./chunks/8-76fcaa4b.js","./components/pages/philosophie/_page.svelte-dfee17e5.js","./chunks/index-b2aee97a.js","./chunks/utils-5684e074.js","./chunks/Philosophy-9aa8ad7c.js","./chunks/SvelteMarkdown-18f9b68c.js","./chunks/marked.esm-0b02a870.js"],import.meta.url),()=>C(()=>import("./chunks/9-690b0455.js"),["./chunks/9-690b0455.js","./components/pages/projets/_page.svelte-c32db86b.js","./chunks/index-b2aee97a.js","./chunks/utils-5684e074.js","./chunks/Projects-9f6200ee.js","./chunks/marked.esm-0b02a870.js"],import.meta.url)],at=[0],zt={"/":[-3],"/contact":[-4],"/en":[-5],"/en/contact":[-6],"/en/philosophy":[-7],"/en/projects":[-8],"/philosophie":[-9],"/projets":[-10]},Wt={handleError:({error:r})=>{console.error(r)}};let Oe=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},et=class{constructor(e,n){this.status=e,this.location=n}};async function Yt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Xt=-1,Zt=-2,xt=-3,Qt=-4,en=-5,tn=-6;function nn(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(o,d=!1){if(o===Xt)return;if(o===xt)return NaN;if(o===Qt)return 1/0;if(o===en)return-1/0;if(o===tn)return-0;if(d)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const _=new Set;n[o]=_;for(let w=1;w<t.length;w+=1)_.add(s(t[w]));break;case"Map":const m=new Map;n[o]=m;for(let w=1;w<t.length;w+=2)m.set(s(t[w]),s(t[w+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const y=Object.create(null);n[o]=y;for(let w=1;w<t.length;w+=2)y[t[w]]=s(t[w+1]);break}else{const f=new Array(t.length);n[o]=f;for(let _=0;_<t.length;_+=1){const m=t[_];m!==Zt&&(f[_]=s(m))}}else{const f={};n[o]=f;for(const _ in t){const m=t[_];f[_]=s(m)}}return n[o]}return s(0)}function an(r){return r.filter(e=>e!=null)}const Le=Vt(_e,at,zt,Kt),rt=_e[0],Ue=_e[1];rt();Ue();let Y={};try{Y=JSON.parse(sessionStorage[nt])}catch{}function Ie(r){Y[r]=ae()}function rn({target:r,base:e}){var Ge;const n=document.documentElement,s=[];let o=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,m=!0,y=!1,w=!1,R=!1,$=!1,D,I=(Ge=history.state)==null?void 0:Ge[V];I||(I=Date.now(),history.replaceState({...history.state,[V]:I},"",location.href));const ge=Y[I];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let K,Ne,oe;async function je(){oe=oe||Promise.resolve(),await oe,oe=null;const a=new URL(location.href),i=le(a,!0);o=null,await Ve(i,a,[])}async function ye(a,{noScroll:i=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:u=!1},h,b){return typeof a=="string"&&(a=new URL(a,ze(document))),fe({url:a,scroll:i?ae():null,keepfocus:l,redirect_chain:h,details:{state:p,replaceState:c},nav_token:b,accepted:()=>{u&&($=!0)},blocked:()=>{},type:"goto"})}async function De(a){const i=le(a,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return o={id:i.id,promise:Fe(i).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function ie(...a){const c=Le.filter(l=>a.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function Ve(a,i,c,l,p={},u){var b,v;Ne=p;let h=a&&await Fe(a);if(h||(h=await Me(i,{id:null},await ne(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(a==null?void 0:a.url)||i,Ne!==p)return!1;if(h.type==="redirect")if(c.length>10||c.includes(i.pathname))h=await se({status:500,error:await ne(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return ye(new URL(h.location,i).href,{},[...c,i.pathname],p),!1;else((v=(b=h.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await B.updated.check()&&await te(i);if(s.length=0,$=!1,y=!0,l&&l.details){const{details:g}=l,k=g.replaceState?0:1;g.state[V]=I+=k,history[g.replaceState?"replaceState":"pushState"](g.state,"",i)}if(o=null,_?(t=h.state,h.props.page&&(h.props.page.url=i),D.$set(h.props)):Ce(h),l){const{scroll:g,keepfocus:k}=l,{activeElement:P}=document;await ue();const N=document.activeElement!==P&&document.activeElement!==document.body;if(!k&&!N&&await Ae(),m){const L=i.hash&&document.getElementById(decodeURIComponent(i.hash.slice(1)));g?scrollTo(g.x,g.y):L?L.scrollIntoView():scrollTo(0,0)}}else await ue();m=!0,h.props.page&&(K=h.props.page),u&&u(),y=!1}function Ce(a){var l;t=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),K=a.props.page,D=new Mt({target:r,props:{...a.props,stores:B},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(p=>p(c)),_=!0}async function ee({url:a,params:i,branch:c,status:l,error:p,route:u,form:h}){let b="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(b=L.slash);a.pathname=bt(a.pathname,b),a.search=a.search;const v={type:"loaded",state:{url:a,params:i,branch:c,error:p,route:u},props:{components:an(c).map(L=>L.node.component)}};h!==void 0&&(v.props.form=h);let g={},k=!K,P=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const E=c[L],U=t.branch[L];(E==null?void 0:E.data)!==(U==null?void 0:U.data)&&(k=!0),E&&(g={...g,...E.data},k&&(v.props[`data_${P}`]=g),P+=1)}return(!t.url||a.href!==t.url.href||t.error!==p||h!==void 0&&h!==K.form||k)&&(v.props.page={error:p,params:i,route:{id:(u==null?void 0:u.id)??null},status:l,url:new URL(a),form:h??null,data:k?g:K.data}),v}async function we({loader:a,parent:i,url:c,params:l,route:p,server_data_node:u}){var g,k,P;let h=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await a();if((g=v.universal)!=null&&g.load){let N=function(...E){for(const U of E){const{href:j}=new URL(U,c);b.dependencies.add(j)}};const L={route:{get id(){return b.route=!0,p.id}},params:new Proxy(l,{get:(E,U)=>(b.params.add(U),E[U])}),data:(u==null?void 0:u.data)??null,url:St(c,()=>{b.url=!0}),async fetch(E,U){let j;E instanceof Request?(j=E.url,U={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...U}):j=E;const F=new URL(j,c).href;return N(F),_?Ut(j,F,U):Ot(j,U)},setHeaders:()=>{},depends:N,parent(){return b.parent=!0,i()}};h=await v.universal.load.call(null,L)??null,h=h?await Yt(h):null}return{node:v,loader:a,server:u,universal:(k=v.universal)!=null&&k.load?{type:"data",data:h,uses:b}:null,data:h??(u==null?void 0:u.data)??null,slash:((P=v.universal)==null?void 0:P.trailingSlash)??(u==null?void 0:u.slash)}}function qe(a,i,c,l,p){if($)return!0;if(!l)return!1;if(l.parent&&a||l.route&&i||l.url&&c)return!0;for(const u of l.params)if(p[u]!==t.params[u])return!0;for(const u of l.dependencies)if(s.some(h=>h(new URL(u))))return!0;return!1}function ve(a,i){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?i??null:null}async function Fe({id:a,invalidating:i,url:c,params:l,route:p}){if((o==null?void 0:o.id)===a)return o.promise;const{errors:u,layouts:h,leaf:b}=p,v=[...h,b];u.forEach(S=>S==null?void 0:S().catch(()=>{})),v.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let g=null;const k=t.url?a!==t.url.pathname+t.url.search:!1,P=t.route?p.id!==t.route.id:!1;let N=!1;const L=v.map((S,T)=>{var z;const A=t.branch[T],O=!!(S!=null&&S[0])&&((A==null?void 0:A.loader)!==S[1]||qe(N,P,k,(z=A.server)==null?void 0:z.uses,l));return O&&(N=!0),O});if(L.some(Boolean)){try{g=await tt(c,L)}catch(S){return se({status:500,error:await ne(S,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(g.type==="redirect")return g}const E=g==null?void 0:g.nodes;let U=!1;const j=v.map(async(S,T)=>{var be;if(!S)return;const A=t.branch[T],O=E==null?void 0:E[T];if((!O||O.type==="skip")&&S[1]===(A==null?void 0:A.loader)&&!qe(U,P,k,(be=A.universal)==null?void 0:be.uses,l))return A;if(U=!0,(O==null?void 0:O.type)==="error")throw O;return we({loader:S[1],url:c,params:l,route:p,parent:async()=>{var Ke;const Je={};for(let Ee=0;Ee<T;Ee+=1)Object.assign(Je,(Ke=await j[Ee])==null?void 0:Ke.data);return Je},server_data_node:ve(O===void 0&&S[0]?{type:"skip"}:O??null,A==null?void 0:A.server)})});for(const S of j)S.catch(()=>{});const F=[];for(let S=0;S<v.length;S+=1)if(v[S])try{F.push(await j[S])}catch(T){if(T instanceof et)return{type:"redirect",location:T.location};let A=500,O;if(E!=null&&E.includes(T))A=T.status??A,O=T.error;else if(T instanceof Oe)A=T.status,O=T.body;else{if(await B.updated.check())return await te(c);O=await ne(T,{params:l,url:c,route:{id:p.id}})}const z=await Be(S,F,u);return z?await ee({url:c,params:l,branch:F.slice(0,z.idx).concat(z.node),status:A,error:O,route:p}):await Me(c,{id:p.id},O,A)}else F.push(void 0);return await ee({url:c,params:l,branch:F,status:200,error:null,route:p,form:i?void 0:null})}async function Be(a,i,c){for(;a--;)if(c[a]){let l=a;for(;!i[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:a,error:i,url:c,route:l}){const p={};let u=null;if(at[0]===0)try{const g=await tt(c,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;u=g.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await te(c)}const b=await we({loader:rt,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:ve(u)}),v={node:await Ue(),loader:Ue,universal:null,server:null,data:null};return await ee({url:c,params:p,branch:[b,v],status:a,error:i,route:null})}function le(a,i){if(Ye(a,e))return;const c=ce(a);for(const l of Le){const p=l.exec(c);if(p)return{id:a.pathname+a.search,invalidating:i,route:l,params:kt(p),url:a}}}function ce(a){return Et(a.pathname.slice(e.length)||"/")}function He({url:a,type:i,intent:c,delta:l}){var b,v;let p=!1;const u={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:a},willUnload:!c,type:i};l!==void 0&&(u.delta=l);const h={...u,cancel:()=>{p=!0}};return w||d.before_navigate.forEach(g=>g(h)),p?null:u}async function fe({url:a,scroll:i,keepfocus:c,redirect_chain:l,details:p,type:u,delta:h,nav_token:b,accepted:v,blocked:g}){const k=le(a,!1),P=He({url:a,type:u,delta:h,intent:k});if(!P){g();return}Ie(I),v(),w=!0,_&&B.navigating.set(P),await Ve(k,a,l,{scroll:i,keepfocus:c,details:p},b,()=>{w=!1,d.after_navigate.forEach(N=>N(P)),B.navigating.set(null)})}async function Me(a,i,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await se({status:l,error:c,url:a,route:i}):await te(a)}function te(a){return location.href=a.href,new Promise(()=>{})}function ot(){let a;n.addEventListener("mousemove",u=>{const h=u.target;clearTimeout(a),a=setTimeout(()=>{l(h,2)},20)});function i(u){l(u.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const c=new IntersectionObserver(u=>{for(const h of u)h.isIntersecting&&(ie(ce(new URL(h.target.href))),c.unobserve(h.target))},{threshold:0});function l(u,h){const b=We(u,n);if(!b)return;const{url:v,external:g}=Re(b,e);if(g)return;const k=de(b);k.reload||(h<=k.preload_data?De(v):h<=k.preload_code&&ie(ce(v)))}function p(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:h,external:b}=Re(u,e);if(b)continue;const v=de(u);v.reload||(v.preload_code===Xe.viewport&&c.observe(u),v.preload_code===Xe.eager&&ie(ce(h)))}}d.after_navigate.push(p),p()}return{after_navigate:a=>{Pe(()=>(d.after_navigate.push(a),()=>{const i=d.after_navigate.indexOf(a);d.after_navigate.splice(i,1)}))},before_navigate:a=>{Pe(()=>(d.before_navigate.push(a),()=>{const i=d.before_navigate.indexOf(a);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(y||!_)&&(m=!1)},goto:(a,i={})=>ye(a,i,[]),invalidate:a=>{if(typeof a=="function")s.push(a);else{const{href:i}=new URL(a,location.href);s.push(c=>c.href===i)}return je()},invalidateAll:()=>($=!0,je()),preload_data:async a=>{const i=new URL(a,ze(document));await De(i)},preload_code:ie,apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Be(t.branch.length,c,l.errors);if(p){const u=await ee({url:i,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:a.status??500,error:a.error,route:l});t=u.state,D.$set(u.props),ue().then(Ae)}}else if(a.type==="redirect")ye(a.location,{invalidateAll:!0},[]);else{const i={form:a.data,page:{...K,form:a.data,status:a.status}};D.$set(i),a.type==="success"&&ue().then(Ae)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var l;let c=!1;if(!w){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(u=>u(p))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ie(I);try{sessionStorage[nt]=JSON.stringify(Y)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||ot(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const c=We(i.composedPath()[0],n);if(!c)return;const{url:l,external:p,target:u}=Re(c,e);if(!l)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const h=de(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(p||h.reload){He({url:l,type:"link"})||i.preventDefault(),w=!0;return}const[v,g]=l.href.split("#");if(g!==void 0&&v===location.href.split("#")[0]){R=!0,Ie(I),t.url=l,B.page.set({...K,url:l}),B.page.notify();return}fe({url:l,scroll:h.noscroll?ae():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),n.addEventListener("submit",i=>{if(i.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(i.target),l=i.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const u=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(Ye(u,e))return;const h=i.target,{noscroll:b,reload:v}=de(h);if(v)return;i.preventDefault(),i.stopPropagation();const g=new FormData(h),k=l==null?void 0:l.getAttribute("name");k&&g.append(k,(l==null?void 0:l.getAttribute("value"))??""),u.search=new URLSearchParams(g).toString(),fe({url:u,scroll:b?ae():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",i=>{var c;if((c=i.state)!=null&&c[V]){if(i.state[V]===I)return;const l=Y[i.state[V]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){Y[I]=ae(),I=i.state[V],scrollTo(l.x,l.y);return}const p=i.state[V]-I;fe({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=i.state[V]},blocked:()=>{history.go(-p)},type:"popstate",delta:p})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[V]:++I},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&B.navigating.set(null)})},_hydrate:async({status:a=200,error:i,node_ids:c,params:l,route:p,data:u,form:h})=>{f=!0;const b=new URL(location.href);({params:l={},route:p={id:null}}=le(b,!1)||{});let v;try{const g=c.map(async(k,P)=>{const N=u[P];return we({loader:_e[k],url:b,params:l,route:p,parent:async()=>{const L={};for(let E=0;E<P;E+=1)Object.assign(L,(await g[E]).data);return L},server_data_node:ve(N)})});v=await ee({url:b,params:l,branch:await Promise.all(g),status:a,error:i,form:h,route:Le.find(({id:k})=>k===p.id)??null})}catch(g){if(g instanceof et){await te(new URL(g.location,location.href));return}v=await se({status:g instanceof Oe?g.status:500,error:await ne(g,{url:b,params:l,route:p}),url:b,route:p})}Ce(v)}}}async function tt(r,e){var d;const n=new URL(r);n.pathname=At(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await me(n.href),o=await s.json();if(!s.ok)throw new Error(o);return(d=o.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=nn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function ne(r,e){return r instanceof Oe?r.body:Wt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ae(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var o;s((o=getSelection())==null?void 0:o.removeAllRanges())})})}}async function fn({env:r,hydrate:e,paths:n,target:s,version:o}){yt(n),vt(o);const d=rn({target:s,base:n.base});wt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{fn as start};
