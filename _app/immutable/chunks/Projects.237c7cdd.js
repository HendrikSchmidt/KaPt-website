import{S as K,i as O,s as R,k as w,l as S,m as y,h as m,n as _,b as L,v as C,N as F,f as G,g as x,d as I,o as J,q as Q,a as E,r as U,c as D,K as p,u as W,M as X,O as Y,y as Z,z as $,A as ee,B as te}from"./index.2dde3162.js";import{i as N,s as q}from"./i18n.d8029dc2.js";import{I as ae}from"./Image.b51d6c88.js";function M(g,a,t){const e=g.slice();return e[3]=a[t],e}function V(g,a,t){const e=g.slice();return e[6]=a[t],e[8]=t,e}function A(g){let a,t;return a=new ae({props:{img:g[6].attributes,sizes:"150wv",src:"xlarge",lazy:g[8]>0,pictureRelative:!1,classString:"absolute object-contain saturate-0 hover:saturate-100 "+(g[8]===g[3].idxToShow?"opacity-100 z-10":"opacity-0 z-0")}}),{c(){Z(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,u){ee(a,e,u),t=!0},p(e,u){const h={};u&1&&(h.img=e[6].attributes),u&1&&(h.classString="absolute object-contain saturate-0 hover:saturate-100 "+(e[8]===e[3].idxToShow?"opacity-100 z-10":"opacity-0 z-0")),a.$set(h)},i(e){t||(x(a.$$.fragment,e),t=!0)},o(e){I(a.$$.fragment,e),t=!1},d(e){te(a,e)}}}function B(g,a){let t,e,u,h,o=a[3].attributes.Nom+"",l,s,c,v,z,b,d=a[3].imagesToShow,n=[];for(let i=0;i<d.length;i+=1)n[i]=A(V(a,d,i));const H=i=>I(n[i],1,1,()=>{n[i]=null});return{key:g,first:null,c(){t=w("div"),e=w("a"),u=w("div"),h=w("h1"),l=Q(o),s=E(),c=w("div");for(let i=0;i<n.length;i+=1)n[i].c();z=E(),this.h()},l(i){t=S(i,"DIV",{class:!0});var f=y(t);e=S(f,"A",{class:!0,href:!0});var r=y(e);u=S(r,"DIV",{class:!0});var k=y(u);h=S(k,"H1",{class:!0});var T=y(h);l=U(T,o),T.forEach(m),k.forEach(m),s=D(r),c=S(r,"DIV",{class:!0});var j=y(c);for(let P=0;P<n.length;P+=1)n[P].l(j);j.forEach(m),r.forEach(m),z=D(f),f.forEach(m),this.h()},h(){_(h,"class","pb-5"),_(u,"class","prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl flex-none"),_(c,"class","w-full overflow-hidden landing-image relative flex-auto"),_(e,"class","w-full aspect-square md:aspect-[3/2] lg:aspect-square 2xl:aspect-[3/2] cursor-pointer flex flex-col border-t-2 border-zinc-900 py-5 mb-5"),_(e,"href",v=N.getLocalizedSlug("projects",a[1])+"/"+q(a[3].attributes.Nom)),_(t,"class","w-full lg:w-1/2 flex-none lg:px-5"),this.first=t},m(i,f){L(i,t,f),p(t,e),p(e,u),p(u,h),p(h,l),p(e,s),p(e,c);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(c,null);p(t,z),b=!0},p(i,f){if(a=i,(!b||f&1)&&o!==(o=a[3].attributes.Nom+"")&&W(l,o),f&1){d=a[3].imagesToShow;let r;for(r=0;r<d.length;r+=1){const k=V(a,d,r);n[r]?(n[r].p(k,f),x(n[r],1)):(n[r]=A(k),n[r].c(),x(n[r],1),n[r].m(c,null))}for(C(),r=d.length;r<n.length;r+=1)H(r);G()}(!b||f&3&&v!==(v=N.getLocalizedSlug("projects",a[1])+"/"+q(a[3].attributes.Nom)))&&_(e,"href",v)},i(i){if(!b){for(let f=0;f<d.length;f+=1)x(n[f]);b=!0}},o(i){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)I(n[f]);b=!1},d(i){i&&m(t),X(n,i)}}}function le(g){let a,t=[],e=new Map,u,h=g[0];const o=l=>l[3].id;for(let l=0;l<h.length;l+=1){let s=M(g,h,l),c=o(s);e.set(c,t[l]=B(c,s))}return{c(){a=w("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){a=S(l,"DIV",{class:!0});var s=y(a);for(let c=0;c<t.length;c+=1)t[c].l(s);s.forEach(m),this.h()},h(){_(a,"class","w-full flex flex-row flex-wrap")},m(l,s){L(l,a,s);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(a,null);u=!0},p(l,[s]){s&3&&(h=l[0],C(),t=F(t,s,o,1,l,h,e,a,Y,B,null,M),G())},i(l){if(!u){for(let s=0;s<h.length;s+=1)x(t[s]);u=!0}},o(l){for(let s=0;s<t.length;s+=1)I(t[s]);u=!1},d(l){l&&m(a);for(let s=0;s<t.length;s+=1)t[s].d()}}}function se(g,a,t){let{projects:e}=a,{lang:u}=a;e=e.map(o=>{let l=o.attributes,s=l.Plans&&l.Plans.length>0,v=l.MontrePlansDansProjets&&s?l.Images.data.concat(l.Plans.data):l.Images.data;return{...o,imagesToShow:v,idxToShow:0}});const h=()=>{for(let o=0;o<e.length;o++)setTimeout(()=>{t(0,e[o]={...e[o],idxToShow:(e[o].idxToShow+1)%e[o].imagesToShow.length},e)},o*1e3)};return J(()=>{const o=setInterval(h,5e3);return()=>{clearInterval(o)}}),g.$$set=o=>{"projects"in o&&t(0,e=o.projects),"lang"in o&&t(1,u=o.lang)},[e,u]}class ie extends K{constructor(a){super(),O(this,a,se,le,R,{projects:0,lang:1})}}export{ie as P};
