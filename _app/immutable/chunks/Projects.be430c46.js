import{S as K,i as O,s as R,k as b,l as w,m as S,h as m,n as _,b as L,v as C,N as F,f as G,g as k,d as I,o as J,q as Q,a as D,r as U,c as N,K as p,u as W,M as X,O as Y,y as Z,z as $,A as ee,B as te}from"./index.2dde3162.js";import{i as P,s as q}from"./i18n.d2c68db6.js";import{I as ae}from"./Image.b51d6c88.js";function M(g,a,t){const e=g.slice();return e[3]=a[t],e}function V(g,a,t){const e=g.slice();return e[6]=a[t],e[8]=t,e}function A(g){let a,t;return a=new ae({props:{img:g[6].attributes,sizes:"150wv",src:"xlarge",lazy:g[8]>0,pictureRelative:!1,classString:"absolute object-contain saturate-0 hover:saturate-100 "+(g[8]===g[3].idxToShow?"opacity-100 z-10":"opacity-0 z-0")}}),{c(){Z(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,c){ee(a,e,c),t=!0},p(e,c){const f={};c&1&&(f.img=e[6].attributes),c&1&&(f.classString="absolute object-contain saturate-0 hover:saturate-100 "+(e[8]===e[3].idxToShow?"opacity-100 z-10":"opacity-0 z-0")),a.$set(f)},i(e){t||(k(a.$$.fragment,e),t=!0)},o(e){I(a.$$.fragment,e),t=!1},d(e){te(a,e)}}}function B(g,a){let t,e,c,f,l=a[3].attributes.Nom+"",s,o,u,x,z,v,d=a[3].imagesToShow,n=[];for(let i=0;i<d.length;i+=1)n[i]=A(V(a,d,i));const H=i=>I(n[i],1,1,()=>{n[i]=null});return{key:g,first:null,c(){t=b("div"),e=b("a"),c=b("div"),f=b("h1"),s=Q(l),o=D(),u=b("div");for(let i=0;i<n.length;i+=1)n[i].c();z=D(),this.h()},l(i){t=w(i,"DIV",{class:!0});var h=S(t);e=w(h,"A",{class:!0,href:!0});var r=S(e);c=w(r,"DIV",{class:!0});var y=S(c);f=w(y,"H1",{class:!0});var j=S(f);s=U(j,l),j.forEach(m),y.forEach(m),o=N(r),u=w(r,"DIV",{class:!0});var E=S(u);for(let T=0;T<n.length;T+=1)n[T].l(E);E.forEach(m),r.forEach(m),z=N(h),h.forEach(m),this.h()},h(){_(f,"class","pb-5"),_(c,"class","prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl flex-none"),_(u,"class","w-full overflow-hidden landing-image relative flex-auto"),_(e,"class","w-full aspect-square md:aspect-[3/2] lg:aspect-square 2xl:aspect-[3/2] cursor-pointer flex flex-col border-t-2 border-zinc-900 py-5 mb-5"),_(e,"href",x=P.getLocalizedSlug("projects",a[1])+"/"+q(a[3].attributes.Nom)),_(t,"class","w-full lg:w-1/2 flex-none lg:px-5"),this.first=t},m(i,h){L(i,t,h),p(t,e),p(e,c),p(c,f),p(f,s),p(e,o),p(e,u);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(u,null);p(t,z),v=!0},p(i,h){if(a=i,(!v||h&1)&&l!==(l=a[3].attributes.Nom+"")&&W(s,l),h&1){d=a[3].imagesToShow;let r;for(r=0;r<d.length;r+=1){const y=V(a,d,r);n[r]?(n[r].p(y,h),k(n[r],1)):(n[r]=A(y),n[r].c(),k(n[r],1),n[r].m(u,null))}for(C(),r=d.length;r<n.length;r+=1)H(r);G()}(!v||h&3&&x!==(x=P.getLocalizedSlug("projects",a[1])+"/"+q(a[3].attributes.Nom)))&&_(e,"href",x)},i(i){if(!v){for(let h=0;h<d.length;h+=1)k(n[h]);v=!0}},o(i){n=n.filter(Boolean);for(let h=0;h<n.length;h+=1)I(n[h]);v=!1},d(i){i&&m(t),X(n,i)}}}function le(g){let a,t=[],e=new Map,c,f=g[0];const l=s=>s[3].id;for(let s=0;s<f.length;s+=1){let o=M(g,f,s),u=l(o);e.set(u,t[s]=B(u,o))}return{c(){a=b("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){a=w(s,"DIV",{class:!0});var o=S(a);for(let u=0;u<t.length;u+=1)t[u].l(o);o.forEach(m),this.h()},h(){_(a,"class","w-full flex flex-row flex-wrap")},m(s,o){L(s,a,o);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(a,null);c=!0},p(s,[o]){o&3&&(f=s[0],C(),t=F(t,o,l,1,s,f,e,a,Y,B,null,M),G())},i(s){if(!c){for(let o=0;o<f.length;o+=1)k(t[o]);c=!0}},o(s){for(let o=0;o<t.length;o+=1)I(t[o]);c=!1},d(s){s&&m(a);for(let o=0;o<t.length;o+=1)t[o].d()}}}function se(g,a,t){let{projects:e}=a,{lang:c}=a;e=e.map(l=>({...l,imagesToShow:l.attributes.MontrePlansDansProjets?l.attributes.Images.data.concat(l.attributes.Plans.data):l.attributes.Images.data,idxToShow:0}));const f=()=>{for(let l=0;l<e.length;l++)setTimeout(()=>{t(0,e[l]={...e[l],idxToShow:(e[l].idxToShow+1)%e[l].imagesToShow.length},e)},l*1e3)};return J(()=>{const l=setInterval(f,5e3);return()=>{clearInterval(l)}}),g.$$set=l=>{"projects"in l&&t(0,e=l.projects),"lang"in l&&t(1,c=l.lang)},[e,c]}class ie extends K{constructor(a){super(),O(this,a,se,le,R,{projects:0,lang:1})}}export{ie as P};