import{S as me,i as he,s as pe,C as de,k as d,l as g,m as $,h as i,n as _,D as _e,b as L,E as ge,F as $e,G as ve,g as H,d as J,H as ne,a as P,y as Q,I as ze,c as C,z as R,J as we,K as h,A as X,B as Y,q as k,r as b,u as y}from"../chunks/index.2dde3162.js";import{p as Le}from"../chunks/stores.36121fce.js";import{b as Se}from"../chunks/paths.47a950fc.js";import{i as m,t as Ee}from"../chunks/i18n.893042f8.js";function ke(s){let e,a;const t=s[3].default,l=de(t,s,s[2],null);return{c(){e=d("a"),l&&l.c(),this.h()},l(n){e=g(n,"A",{href:!0,class:!0});var o=$(e);l&&l.l(o),o.forEach(i),this.h()},h(){_(e,"href",s[0]),_(e,"class","hover:italic uppercase"),_e(e,"italic",s[1].url.pathname.includes(s[0]))},m(n,o){L(n,e,o),l&&l.m(e,null),a=!0},p(n,[o]){l&&l.p&&(!a||o&4)&&ge(l,t,n,n[2],a?ve(t,n[2],o,null):$e(n[2]),null),(!a||o&1)&&_(e,"href",n[0]),(!a||o&3)&&_e(e,"italic",n[1].url.pathname.includes(n[0]))},i(n){a||(H(l,n),a=!0)},o(n){J(l,n),a=!1},d(n){n&&i(e),l&&l.d(n)}}}function be(s,e,a){let t;ne(s,Le,f=>a(1,t=f));let{$$slots:l={},$$scope:n}=e,{href:o}=e;return s.$$set=f=>{"href"in f&&a(0,o=f.href),"$$scope"in f&&a(2,n=f.$$scope)},[o,t,n,l]}class Z extends me{constructor(e){super(),he(this,e,be,ke,pe,{href:0})}}function Ie(s){let e,a,t,l,n,o;return{c(){e=d("span"),a=k("fr"),t=k(" / "),l=d("a"),n=k("en"),this.h()},l(f){e=g(f,"SPAN",{});var u=$(e);a=b(u,"fr"),u.forEach(i),t=b(f," / "),l=g(f,"A",{class:!0,href:!0});var z=$(l);n=b(z,"en"),z.forEach(i),this.h()},h(){_(l,"class","text-zinc-400"),_(l,"href",o=m.getTranslatedSlug(s[0].url.pathname,"en"))},m(f,u){L(f,e,u),h(e,a),L(f,t,u),L(f,l,u),h(l,n)},p(f,u){u&1&&o!==(o=m.getTranslatedSlug(f[0].url.pathname,"en"))&&_(l,"href",o)},d(f){f&&i(e),f&&i(t),f&&i(l)}}}function Ae(s){let e,a,t,l,n,o;return{c(){e=d("a"),a=k("fr"),l=k(" / "),n=d("span"),o=k("en"),this.h()},l(f){e=g(f,"A",{class:!0,href:!0});var u=$(e);a=b(u,"fr"),u.forEach(i),l=b(f," / "),n=g(f,"SPAN",{});var z=$(n);o=b(z,"en"),z.forEach(i),this.h()},h(){_(e,"class","text-zinc-400"),_(e,"href",t=m.getTranslatedSlug(s[0].url.pathname,"fr"))},m(f,u){L(f,e,u),h(e,a),L(f,l,u),L(f,n,u),h(n,o)},p(f,u){u&1&&t!==(t=m.getTranslatedSlug(f[0].url.pathname,"fr"))&&_(e,"href",t)},d(f){f&&i(e),f&&i(l),f&&i(n)}}}function je(s){let e=m.getLocalizedString("philosophy",s[1])+"",a;return{c(){a=k(e)},l(t){a=b(t,e)},m(t,l){L(t,a,l)},p(t,l){l&2&&e!==(e=m.getLocalizedString("philosophy",t[1])+"")&&y(a,e)},d(t){t&&i(a)}}}function De(s){let e=m.getLocalizedString("projects",s[1])+"",a;return{c(){a=k(e)},l(t){a=b(t,e)},m(t,l){L(t,a,l)},p(t,l){l&2&&e!==(e=m.getLocalizedString("projects",t[1])+"")&&y(a,e)},d(t){t&&i(a)}}}function Ne(s){let e=m.getLocalizedString("news",s[1])+"",a;return{c(){a=k(e)},l(t){a=b(t,e)},m(t,l){L(t,a,l)},p(t,l){l&2&&e!==(e=m.getLocalizedString("news",t[1])+"")&&y(a,e)},d(t){t&&i(a)}}}function Te(s){let e=m.getLocalizedString("contact",s[1])+"",a;return{c(){a=k(e)},l(t){a=b(t,e)},m(t,l){L(t,a,l)},p(t,l){l&2&&e!==(e=m.getLocalizedString("contact",t[1])+"")&&y(a,e)},d(t){t&&i(a)}}}function qe(s){let e,a,t,l,n,o,f,u,z,p,U,x,S,G,I,ee,K,A,te,M,j,le,V,D,ae,W,N;document.title=e=s[2];function re(r,c){return c&1&&(U=null),U==null&&(U=!!r[0].url.pathname.startsWith(`${Se}/en`)),U?Ae:Ie}let O=re(s,-1),w=O(s);I=new Z({props:{href:m.getLocalizedSlug("philosophy",s[1]),$$slots:{default:[je]},$$scope:{ctx:s}}}),A=new Z({props:{href:m.getLocalizedSlug("projects",s[1]),$$slots:{default:[De]},$$scope:{ctx:s}}}),j=new Z({props:{href:m.getLocalizedSlug("news",s[1]),$$slots:{default:[Ne]},$$scope:{ctx:s}}}),D=new Z({props:{href:m.getLocalizedSlug("contact",s[1]),$$slots:{default:[Te]},$$scope:{ctx:s}}});const se=s[5].default,v=de(se,s,s[6],null);return{c(){a=P(),t=d("div"),l=d("aside"),n=d("a"),o=d("img"),z=P(),p=d("div"),w.c(),x=P(),S=d("ul"),G=d("li"),Q(I.$$.fragment),ee=P(),K=d("li"),Q(A.$$.fragment),te=P(),M=d("li"),Q(j.$$.fragment),le=P(),V=d("li"),Q(D.$$.fragment),ae=P(),W=d("main"),v&&v.c(),this.h()},l(r){ze("svelte-92cd07",document.head).forEach(i),a=C(r),t=g(r,"DIV",{class:!0,"data-sveltekit-preload-data":!0});var T=$(t);l=g(T,"ASIDE",{class:!0});var E=$(l);n=g(E,"A",{class:!0,href:!0});var B=$(n);o=g(B,"IMG",{src:!0,alt:!0}),B.forEach(i),z=C(E),p=g(E,"DIV",{class:!0});var F=$(p);w.l(F),F.forEach(i),x=C(E),S=g(E,"UL",{class:!0});var q=$(S);G=g(q,"LI",{class:!0});var fe=$(G);R(I.$$.fragment,fe),fe.forEach(i),ee=C(q),K=g(q,"LI",{class:!0});var oe=$(K);R(A.$$.fragment,oe),oe.forEach(i),te=C(q),M=g(q,"LI",{class:!0});var ie=$(M);R(j.$$.fragment,ie),ie.forEach(i),le=C(q),V=g(q,"LI",{class:!0});var ue=$(V);R(D.$$.fragment,ue),ue.forEach(i),q.forEach(i),E.forEach(i),ae=C(T),W=g(T,"MAIN",{class:!0});var ce=$(W);v&&v.l(ce),ce.forEach(i),T.forEach(i),this.h()},h(){we(o.src,f=s[3].Logo.data.attributes.url)||_(o,"src",f),_(o,"alt","KaPt logo"),_(n,"class","logo w-36 sm:w-40 md:w-60 xl:w-72 svelte-2xdddu"),_(n,"href",u=m.getLocalizedSlug("home",s[1])),_(p,"class","flex-0 lg:text-2xl z-20 sm:flex-1 text-right"),_(G,"class","sm:pl-4"),_(K,"class","sm:pl-4"),_(M,"class","sm:pl-4"),_(V,"class","sm:pl-4"),_(S,"class","flex justify-between max-sm:w-full max-sm:py-2 max-sm:order-last lg:text-2xl"),_(l,"class","fixed top-0 left-0 flex flex-wrap justify-between p-4 sm:p-8 w-full z-50 max-sm:bg-white"),_(W,"class","mt-40 p-4 sm:p-8 w-full flex flex-col items-center"),_(t,"class","app w-screen text-zinc-900"),_(t,"data-sveltekit-preload-data","hover")},m(r,c){L(r,a,c),L(r,t,c),h(t,l),h(l,n),h(n,o),h(l,z),h(l,p),w.m(p,null),h(l,x),h(l,S),h(S,G),X(I,G,null),h(S,ee),h(S,K),X(A,K,null),h(S,te),h(S,M),X(j,M,null),h(S,le),h(S,V),X(D,V,null),h(t,ae),h(t,W),v&&v.m(W,null),N=!0},p(r,[c]){(!N||c&4)&&e!==(e=r[2])&&(document.title=e),(!N||c&2&&u!==(u=m.getLocalizedSlug("home",r[1])))&&_(n,"href",u),O===(O=re(r,c))&&w?w.p(r,c):(w.d(1),w=O(r),w&&(w.c(),w.m(p,null)));const T={};c&2&&(T.href=m.getLocalizedSlug("philosophy",r[1])),c&66&&(T.$$scope={dirty:c,ctx:r}),I.$set(T);const E={};c&2&&(E.href=m.getLocalizedSlug("projects",r[1])),c&66&&(E.$$scope={dirty:c,ctx:r}),A.$set(E);const B={};c&2&&(B.href=m.getLocalizedSlug("news",r[1])),c&66&&(B.$$scope={dirty:c,ctx:r}),j.$set(B);const F={};c&2&&(F.href=m.getLocalizedSlug("contact",r[1])),c&66&&(F.$$scope={dirty:c,ctx:r}),D.$set(F),v&&v.p&&(!N||c&64)&&ge(v,se,r,r[6],N?ve(se,r[6],c,null):$e(r[6]),null)},i(r){N||(H(I.$$.fragment,r),H(A.$$.fragment,r),H(j.$$.fragment,r),H(D.$$.fragment,r),H(v,r),N=!0)},o(r){J(I.$$.fragment,r),J(A.$$.fragment,r),J(j.$$.fragment,r),J(D.$$.fragment,r),J(v,r),N=!1},d(r){r&&i(a),r&&i(t),w.d(),Y(I),Y(A),Y(j),Y(D),v&&v.d(r)}}}function Pe(s,e,a){let t,l,n;ne(s,Le,p=>a(0,l=p)),ne(s,Ee,p=>a(2,n=p));let{$$slots:o={},$$scope:f}=e,{data:u}=e,{logo:z}=u;return s.$$set=p=>{"data"in p&&a(4,u=p.data),"$$scope"in p&&a(6,f=p.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&a(1,t=l.url.pathname.startsWith(`${Se}/en`)?"en":"fr")},[l,t,n,z,u,o,f]}class Ve extends me{constructor(e){super(),he(this,e,Pe,qe,pe,{data:4})}}export{Ve as component};
