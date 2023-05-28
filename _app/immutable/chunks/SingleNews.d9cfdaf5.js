import{S as ie,i as ce,s as de,k as h,q as U,a as j,y as se,l as p,m as _,r as G,h as u,c as V,z as ae,n as v,b as le,J as c,A as ne,u as J,g as y,v as fe,f as me,d as F,L as ge,B as oe}from"./index.3c7b00ab.js";import{I as ue}from"./Image.1dfe3605.js";import{i as M}from"./i18n.1508297c.js";import{S as he}from"./SvelteMarkdown.d31cb4f8.js";function Y(o,t,s){const r=o.slice();return r[4]=t[s],r[6]=s,r}function Z(o){let t,s,r,d;return s=new ue({props:{img:o[4].attributes,sizes:o[4].attributes.width>o[4].attributes.height?ee:te,src:"xlarge",classString:"object-cover"}}),{c(){t=h("div"),se(s.$$.fragment),this.h()},l(a){t=p(a,"DIV",{class:!0});var f=_(t);ae(s.$$.fragment,f),f.forEach(u),this.h()},h(){v(t,"class",r="overflow-hidden "+o[3](o[4].attributes))},m(a,f){le(a,t,f),ne(s,t,null),d=!0},p(a,f){const m={};f&4&&(m.img=a[4].attributes),f&4&&(m.sizes=a[4].attributes.width>a[4].attributes.height?ee:te),s.$set(m),(!d||f&4&&r!==(r="overflow-hidden "+a[3](a[4].attributes)))&&v(t,"class",r)},i(a){d||(y(s.$$.fragment,a),d=!0)},o(a){F(s.$$.fragment,a),d=!1},d(a){a&&u(t),oe(s)}}}function pe(o){let t,s,r,d,a=M.getLocalizedString("name",o[1])+"",f,m,w,I=o[0].Nom.toUpperCase()+"",P,H,b,E,x=M.getLocalizedString("location",o[1])+"",A,K,D,k=o[0].Localisation+"",C,O,q,$,S,N,z=o[2],l=[];for(let e=0;e<z.length;e+=1)l[e]=Z(Y(o,z,e));const re=e=>F(l[e],1,1,()=>{l[e]=null});return S=new he({props:{source:o[0].Description}}),{c(){t=h("div"),s=h("div"),r=h("div"),d=h("span"),f=U(a),m=j(),w=h("span"),P=U(I),H=j(),b=h("div"),E=h("span"),A=U(x),K=j(),D=h("span"),C=U(k),O=j();for(let e=0;e<l.length;e+=1)l[e].c();q=j(),$=h("div"),se(S.$$.fragment),this.h()},l(e){t=p(e,"DIV",{class:!0});var n=_(t);s=p(n,"DIV",{class:!0});var g=_(s);r=p(g,"DIV",{class:!0});var i=_(r);d=p(i,"SPAN",{class:!0});var L=_(d);f=G(L,a),L.forEach(u),m=V(i),w=p(i,"SPAN",{class:!0});var R=_(w);P=G(R,I),R.forEach(u),i.forEach(u),H=V(g),b=p(g,"DIV",{class:!0});var B=_(b);E=p(B,"SPAN",{class:!0});var T=_(E);A=G(T,x),T.forEach(u),K=V(B),D=p(B,"SPAN",{});var W=_(D);C=G(W,k),W.forEach(u),B.forEach(u),g.forEach(u),O=V(n);for(let Q=0;Q<l.length;Q+=1)l[Q].l(n);q=V(n),$=p(n,"DIV",{class:!0});var X=_($);ae(S.$$.fragment,X),X.forEach(u),n.forEach(u),this.h()},h(){v(d,"class","max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"),v(w,"class","font-bold"),v(r,"class","flex mb-2 justify-between md:justify-start"),v(E,"class","max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"),v(b,"class","flex mb-2 justify-between md:justify-start"),v(s,"class","col-span-6 md:col-span-2 prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl max-w-none"),v($,"class","contents prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl text-justify overflow-scroll"),v(t,"class","image-grid w-full grid grid-flow-dense grid-cols-6 gap-12")},m(e,n){le(e,t,n),c(t,s),c(s,r),c(r,d),c(d,f),c(r,m),c(r,w),c(w,P),c(s,H),c(s,b),c(b,E),c(E,A),c(b,K),c(b,D),c(D,C),c(t,O);for(let g=0;g<l.length;g+=1)l[g]&&l[g].m(t,null);c(t,q),c(t,$),ne(S,$,null),N=!0},p(e,[n]){if((!N||n&2)&&a!==(a=M.getLocalizedString("name",e[1])+"")&&J(f,a),(!N||n&1)&&I!==(I=e[0].Nom.toUpperCase()+"")&&J(P,I),(!N||n&2)&&x!==(x=M.getLocalizedString("location",e[1])+"")&&J(A,x),(!N||n&1)&&k!==(k=e[0].Localisation+"")&&J(C,k),n&12){z=e[2];let i;for(i=0;i<z.length;i+=1){const L=Y(e,z,i);l[i]?(l[i].p(L,n),y(l[i],1)):(l[i]=Z(L),l[i].c(),y(l[i],1),l[i].m(t,q))}for(fe(),i=z.length;i<l.length;i+=1)re(i);me()}const g={};n&1&&(g.source=e[0].Description),S.$set(g)},i(e){if(!N){for(let n=0;n<z.length;n+=1)y(l[n]);y(S.$$.fragment,e),N=!0}},o(e){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)F(l[n]);F(S.$$.fragment,e),N=!1},d(e){e&&u(t),ge(l,e),oe(S)}}}const ee="(max-width: 767px) 100vw, 75vw",te="(max-width: 767px) 100vw, 50vw";function _e(o,t,s){let r,{singleNews:d}=t,{lang:a}=t;const f=m=>{const w=m.width<m.height;return`col-span-6 md:col-span-${w?2:4} md:col-start-${w?1:3}`};return o.$$set=m=>{"singleNews"in m&&s(0,d=m.singleNews),"lang"in m&&s(1,a=m.lang)},o.$$.update=()=>{o.$$.dirty&1&&s(2,r=d.Images.data)},[d,a,r,f]}class Ne extends ie{constructor(t){super(),ce(this,t,_e,pe,de,{singleNews:0,lang:1})}}export{Ne as S};