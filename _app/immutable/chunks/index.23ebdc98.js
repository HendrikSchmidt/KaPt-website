function S(){}function rt(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function F(){return Object.create(null)}function $(t){t.forEach(U)}function V(t){return typeof t=="function"}function Mt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function St(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ct(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ct(t,e,n){t.$$.on_destroy.push(ot(e,n))}function Lt(t,e,n,i){if(t){const s=X(t,e,n,i);return t[0](s)}}function X(t,e,n,i){return t[1]&&i?rt(n.ctx.slice(),t[1](i(e))):n.ctx}function jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function Ht(t,e,n,i,s,o){if(s){const r=X(e,n,i,o);t.p(r,s)}}function Pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Dt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function qt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Bt(t){return t??""}const lt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in lt;let L=!1;function at(){L=!0}function ut(){L=!1}function ft(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:ft(1,s,d=>e[n[d]].claim_order,a))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<o.length&&r[c].claim_order>=o[a].claim_order;)a++;const f=a<o.length?o[a]:null;t.insertBefore(r[c],f)}}function _t(t,e){if(L){for(dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){t.insertBefore(e,n||null)}function mt(t,e,n){L&&!n?_t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function Ot(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function pt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function Wt(){return W(" ")}function Gt(){return W("")}function Rt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function yt(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,s=!1){Z(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function gt(t,e,n,i){return tt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ft(t,e,n){return gt(t,e,n,Y)}function bt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function It(t){return bt(t," ")}function I(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Jt(t,e){const n=I(t,"HTML_TAG_START",0),i=I(t,"HTML_TAG_END",n);if(n===i)return new J(void 0,e);Z(t);const s=t.splice(n,i-n+1);C(s[0]),C(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new J(o,e)}function Kt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Qt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ut(t,e,n){t.classList[n?"add":"remove"](e)}function wt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Vt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class xt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=pt(n.nodeName):this.e=Y(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}class J extends xt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)mt(this.t,this.n[n],e)}}function Xt(t,e){return new t(e)}let v;function E(t){v=t}function T(){if(!v)throw new Error("Function called outside component initialization");return v}function Yt(t){T().$$.on_mount.push(t)}function Zt(t){T().$$.after_update.push(t)}function te(){const t=T();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=wt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function ee(t,e){return T().$$.context.set(t,e),e}function ne(t){return T().$$.context.get(t)}function ie(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],K=[];let x=[];const Q=[],et=Promise.resolve();let B=!1;function nt(){B||(B=!0,et.then(it))}function se(){return nt(),et}function O(t){x.push(t)}const q=new Set;let b=0;function it(){if(b!==0)return;const t=v;do{try{for(;b<w.length;){const e=w[b];b++,E(e),$t(e.$$)}}catch(e){throw w.length=0,b=0,e}for(E(null),w.length=0,b=0;K.length;)K.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];q.has(n)||(q.add(n),n())}x.length=0}while(w.length);for(;Q.length;)Q.pop()();B=!1,q.clear(),E(t)}function $t(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function Et(t){const e=[],n=[];x.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),x=e}const M=new Set;let g;function re(){g={r:0,c:[],p:g}}function ce(){g.r||$(g.c),g=g.p}function st(t,e){t&&t.i&&(M.delete(t),t.i(e))}function vt(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),g.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function oe(t,e){vt(t,1,1,()=>{e.delete(t.key)})}function le(t,e,n,i,s,o,r,l,c,a,f,_){let d=t.length,m=o.length,h=d;const j={};for(;h--;)j[t[h].key]=h;const N=[],H=new Map,P=new Map,G=[];for(h=m;h--;){const u=_(s,o,h),p=n(u);let y=r.get(p);y?i&&G.push(()=>y.p(u,e)):(y=a(p,u),y.c()),H.set(p,N[h]=y),p in j&&P.set(p,Math.abs(h-j[p]))}const R=new Set,z=new Set;function D(u){st(u,1),u.m(l,f),r.set(u.key,u),f=u.first,m--}for(;d&&m;){const u=N[m-1],p=t[d-1],y=u.key,k=p.key;u===p?(f=u.first,d--,m--):H.has(k)?!r.has(y)||R.has(y)?D(u):z.has(k)?d--:P.get(y)>P.get(k)?(z.add(y),D(u)):(R.add(k),d--):(c(p,r),d--)}for(;d--;){const u=t[d];H.has(u.key)||c(u,r)}for(;m;)D(N[m-1]);return $(G),N}function ae(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ue(t){return typeof t=="object"&&t!==null?t:{}}const Tt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Tt];function fe(t){t&&t.c()}function de(t,e){t&&t.l(e)}function Nt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||O(()=>{const r=t.$$.on_mount.map(U).filter(V);t.$$.on_destroy?t.$$.on_destroy.push(...r):$(r),t.$$.on_mount=[]}),o.forEach(O)}function kt(t,e){const n=t.$$;n.fragment!==null&&(Et(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function At(t,e){t.$$.dirty[0]===-1&&(w.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,i,s,o,r,l=[-1]){const c=v;E(t);const a=t.$$={fragment:null,ctx:[],props:o,update:S,not_equal:s,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:F(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return a.ctx&&s(a.ctx[_],a.ctx[_]=h)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](h),f&&At(t,_)),d}):[],a.update(),f=!0,$(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){at();const _=yt(e.target);a.fragment&&a.fragment.l(_),_.forEach(C)}else a.fragment&&a.fragment.c();e.intro&&st(t.$$.fragment),Nt(t,e.target,e.anchor,e.customElement),ut(),it()}E(c)}class he{$destroy(){kt(this,1),this.$destroy=S}$on(e,n){if(!V(n))return S;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Rt as $,Nt as A,kt as B,Lt as C,Ut as D,Ht as E,Pt as F,jt as G,Ct as H,Vt as I,_t as J,S as K,Ot as L,le as M,St as N,oe as O,qt as P,rt as Q,Dt as R,he as S,ae as T,ue as U,ne as V,J as W,Jt as X,te as Y,ee as Z,Bt as _,Wt as a,ie as a0,mt as b,It as c,vt as d,Gt as e,ce as f,st as g,C as h,_e as i,Zt as j,Y as k,Ft as l,yt as m,zt as n,Yt as o,Qt as p,W as q,bt as r,Mt as s,se as t,Kt as u,re as v,K as w,Xt as x,fe as y,de as z};
