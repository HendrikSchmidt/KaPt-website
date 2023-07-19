import{S as _e,i as he,s as pe,C as me,k as d,l as g,m as $,h as o,n as h,D as ce,b as S,E as de,F as ge,G as $e,g as H,d as J,H as se,a as T,q as E,y as O,I as Le,c as q,r as k,z as Q,J as m,A as R,B as X,u as Z}from"../chunks/index.3c7b00ab.js";import{p as ve}from"../chunks/stores.f86d1e74.js";import{b as Se}from"../chunks/paths.bbe4e4ec.js";import{i as p,t as ze}from"../chunks/i18n.219846f8.js";function Ee(s){let e,a;const t=s[3].default,l=me(t,s,s[2],null);return{c(){e=d("a"),l&&l.c(),this.h()},l(n){e=g(n,"A",{href:!0,class:!0});var i=$(e);l&&l.l(i),i.forEach(o),this.h()},h(){h(e,"href",s[0]),h(e,"class","hover:italic uppercase"),ce(e,"italic",s[1].url.pathname.includes(s[0]))},m(n,i){S(n,e,i),l&&l.m(e,null),a=!0},p(n,[i]){l&&l.p&&(!a||i&4)&&de(l,t,n,n[2],a?$e(t,n[2],i,null):ge(n[2]),null),(!a||i&1)&&h(e,"href",n[0]),(!a||i&3)&&ce(e,"italic",n[1].url.pathname.includes(n[0]))},i(n){a||(H(l,n),a=!0)},o(n){J(l,n),a=!1},d(n){n&&o(e),l&&l.d(n)}}}function ke(s,e,a){let t;se(s,ve,r=>a(1,t=r));let{$$slots:l={},$$scope:n}=e,{href:i}=e;return s.$$set=r=>{"href"in r&&a(0,i=r.href),"$$scope"in r&&a(2,n=r.$$scope)},[i,t,n,l]}class Y extends _e{constructor(e){super(),he(this,e,ke,Ee,pe,{href:0})}}function we(s){let e,a,t,l,n,i;return{c(){e=d("span"),a=E("fr"),t=E(" / "),l=d("a"),n=E("en"),this.h()},l(r){e=g(r,"SPAN",{});var u=$(e);a=k(u,"fr"),u.forEach(o),t=k(r," / "),l=g(r,"A",{class:!0,href:!0});var _=$(l);n=k(_,"en"),_.forEach(o),this.h()},h(){h(l,"class","text-zinc-400"),h(l,"href",i=p.getTranslatedSlug(s[0].url.pathname,"en"))},m(r,u){S(r,e,u),m(e,a),S(r,t,u),S(r,l,u),m(l,n)},p(r,u){u&1&&i!==(i=p.getTranslatedSlug(r[0].url.pathname,"en"))&&h(l,"href",i)},d(r){r&&o(e),r&&o(t),r&&o(l)}}}function be(s){let e,a,t,l,n,i;return{c(){e=d("a"),a=E("fr"),l=E(" / "),n=d("span"),i=E("en"),this.h()},l(r){e=g(r,"A",{class:!0,href:!0});var u=$(e);a=k(u,"fr"),u.forEach(o),l=k(r," / "),n=g(r,"SPAN",{});var _=$(n);i=k(_,"en"),_.forEach(o),this.h()},h(){h(e,"class","text-zinc-400"),h(e,"href",t=p.getTranslatedSlug(s[0].url.pathname,"fr"))},m(r,u){S(r,e,u),m(e,a),S(r,l,u),S(r,n,u),m(n,i)},p(r,u){u&1&&t!==(t=p.getTranslatedSlug(r[0].url.pathname,"fr"))&&h(e,"href",t)},d(r){r&&o(e),r&&o(l),r&&o(n)}}}function Ae(s){let e=p.getLocalizedString("philosophy",s[1])+"",a;return{c(){a=E(e)},l(t){a=k(t,e)},m(t,l){S(t,a,l)},p(t,l){l&2&&e!==(e=p.getLocalizedString("philosophy",t[1])+"")&&Z(a,e)},d(t){t&&o(a)}}}function Ie(s){let e=p.getLocalizedString("projects",s[1])+"",a;return{c(){a=E(e)},l(t){a=k(t,e)},m(t,l){S(t,a,l)},p(t,l){l&2&&e!==(e=p.getLocalizedString("projects",t[1])+"")&&Z(a,e)},d(t){t&&o(a)}}}function je(s){let e=p.getLocalizedString("news",s[1])+"",a;return{c(){a=E(e)},l(t){a=k(t,e)},m(t,l){S(t,a,l)},p(t,l){l&2&&e!==(e=p.getLocalizedString("news",t[1])+"")&&Z(a,e)},d(t){t&&o(a)}}}function De(s){let e=p.getLocalizedString("contact",s[1])+"",a;return{c(){a=E(e)},l(t){a=k(t,e)},m(t,l){S(t,a,l)},p(t,l){l&2&&e!==(e=p.getLocalizedString("contact",t[1])+"")&&Z(a,e)},d(t){t&&o(a)}}}function Ne(s){let e,a,t,l,n,i,r,u,_,M,y,L,C,b,x,K,A,ee,V,I,te,W,j,le,B,D;document.title=e=s[2];function ne(f,c){return c&1&&(M=null),M==null&&(M=!!f[0].url.pathname.startsWith(`${Se}/en`)),M?be:we}let U=ne(s,-1),z=U(s);b=new Y({props:{href:p.getLocalizedSlug("philosophy",s[1]),$$slots:{default:[Ae]},$$scope:{ctx:s}}}),A=new Y({props:{href:p.getLocalizedSlug("projects",s[1]),$$slots:{default:[Ie]},$$scope:{ctx:s}}}),I=new Y({props:{href:p.getLocalizedSlug("news",s[1]),$$slots:{default:[je]},$$scope:{ctx:s}}}),j=new Y({props:{href:p.getLocalizedSlug("contact",s[1]),$$slots:{default:[De]},$$scope:{ctx:s}}});const ae=s[4].default,v=me(ae,s,s[5],null);return{c(){a=T(),t=d("div"),l=d("aside"),n=d("a"),i=E("KaPt"),u=T(),_=d("div"),z.c(),y=T(),L=d("ul"),C=d("li"),O(b.$$.fragment),x=T(),K=d("li"),O(A.$$.fragment),ee=T(),V=d("li"),O(I.$$.fragment),te=T(),W=d("li"),O(j.$$.fragment),le=T(),B=d("main"),v&&v.c(),this.h()},l(f){Le("svelte-92cd07",document.head).forEach(o),a=q(f),t=g(f,"DIV",{class:!0,"data-sveltekit-preload-data":!0});var N=$(t);l=g(N,"ASIDE",{class:!0});var w=$(l);n=g(w,"A",{class:!0,href:!0});var F=$(n);i=k(F,"KaPt"),F.forEach(o),u=q(w),_=g(w,"DIV",{class:!0});var G=$(_);z.l(G),G.forEach(o),y=q(w),L=g(w,"UL",{class:!0});var P=$(L);C=g(P,"LI",{class:!0});var re=$(C);Q(b.$$.fragment,re),re.forEach(o),x=q(P),K=g(P,"LI",{class:!0});var fe=$(K);Q(A.$$.fragment,fe),fe.forEach(o),ee=q(P),V=g(P,"LI",{class:!0});var oe=$(V);Q(I.$$.fragment,oe),oe.forEach(o),te=q(P),W=g(P,"LI",{class:!0});var ie=$(W);Q(j.$$.fragment,ie),ie.forEach(o),P.forEach(o),w.forEach(o),le=q(N),B=g(N,"MAIN",{class:!0});var ue=$(B);v&&v.l(ue),ue.forEach(o),N.forEach(o),this.h()},h(){h(n,"class","logo text-6xl md:text-8xl flex-0 svelte-2xdddu"),h(n,"href",r=p.getLocalizedSlug("home",s[1])),h(_,"class","flex-0 lg:text-2xl z-20 sm:flex-1 text-right"),h(C,"class","sm:pl-4"),h(K,"class","sm:pl-4"),h(V,"class","sm:pl-4"),h(W,"class","sm:pl-4"),h(L,"class","flex justify-between max-sm:w-full max-sm:py-2 max-sm:order-last lg:text-2xl"),h(l,"class","fixed top-0 left-0 flex flex-wrap justify-between p-4 sm:p-8 w-full z-50 max-sm:bg-white"),h(B,"class","mt-40 p-4 sm:p-8 w-full flex flex-col items-center"),h(t,"class","app w-screen text-zinc-900"),h(t,"data-sveltekit-preload-data","hover")},m(f,c){S(f,a,c),S(f,t,c),m(t,l),m(l,n),m(n,i),m(l,u),m(l,_),z.m(_,null),m(l,y),m(l,L),m(L,C),R(b,C,null),m(L,x),m(L,K),R(A,K,null),m(L,ee),m(L,V),R(I,V,null),m(L,te),m(L,W),R(j,W,null),m(t,le),m(t,B),v&&v.m(B,null),D=!0},p(f,[c]){(!D||c&4)&&e!==(e=f[2])&&(document.title=e),(!D||c&2&&r!==(r=p.getLocalizedSlug("home",f[1])))&&h(n,"href",r),U===(U=ne(f,c))&&z?z.p(f,c):(z.d(1),z=U(f),z&&(z.c(),z.m(_,null)));const N={};c&2&&(N.href=p.getLocalizedSlug("philosophy",f[1])),c&34&&(N.$$scope={dirty:c,ctx:f}),b.$set(N);const w={};c&2&&(w.href=p.getLocalizedSlug("projects",f[1])),c&34&&(w.$$scope={dirty:c,ctx:f}),A.$set(w);const F={};c&2&&(F.href=p.getLocalizedSlug("news",f[1])),c&34&&(F.$$scope={dirty:c,ctx:f}),I.$set(F);const G={};c&2&&(G.href=p.getLocalizedSlug("contact",f[1])),c&34&&(G.$$scope={dirty:c,ctx:f}),j.$set(G),v&&v.p&&(!D||c&32)&&de(v,ae,f,f[5],D?$e(ae,f[5],c,null):ge(f[5]),null)},i(f){D||(H(b.$$.fragment,f),H(A.$$.fragment,f),H(I.$$.fragment,f),H(j.$$.fragment,f),H(v,f),D=!0)},o(f){J(b.$$.fragment,f),J(A.$$.fragment,f),J(I.$$.fragment,f),J(j.$$.fragment,f),J(v,f),D=!1},d(f){f&&o(a),f&&o(t),z.d(),X(b),X(A),X(I),X(j),v&&v.d(f)}}}function Pe(s,e,a){let t,l,n;se(s,ve,_=>a(0,l=_)),se(s,ze,_=>a(2,n=_));let{$$slots:i={},$$scope:r}=e,{data:u}=e;return s.$$set=_=>{"data"in _&&a(3,u=_.data),"$$scope"in _&&a(5,r=_.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&a(1,t=l.url.pathname.startsWith(`${Se}/en`)?"en":"fr")},[l,t,n,u,i,r]}class Ve extends _e{constructor(e){super(),he(this,e,Pe,Ne,pe,{data:3})}}export{Ve as component};