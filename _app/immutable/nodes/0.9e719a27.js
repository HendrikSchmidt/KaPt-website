import{s as _e,r as me,f as d,g,h as v,d as f,j as c,u as ce,i as L,v as he,w as pe,x as de,y as se,a as T,z as Se,c as y,A as ze,B as h,l as q,m as N,n as Y,C as ge}from"../chunks/scheduler.c0d9be51.js";import{S as $e,i as ve,a as U,t as W,b as J,d as O,m as Q,e as R}from"../chunks/index.44525060.js";import{p as Le}from"../chunks/stores.3bd413ae.js";import{b as we}from"../chunks/paths.870f7986.js";import{t as ke}from"../chunks/utils.67f7d3c7.js";import{i as m}from"../chunks/i18n.aa0dc8e0.js";function be(s){let e,a;const t=s[3].default,l=me(t,s,s[2],null);return{c(){e=d("a"),l&&l.c(),this.h()},l(n){e=g(n,"A",{href:!0,class:!0});var i=v(e);l&&l.l(i),i.forEach(f),this.h()},h(){c(e,"href",s[0]),c(e,"class","hover:italic uppercase"),ce(e,"italic",s[1].url.pathname.includes(s[0]))},m(n,i){L(n,e,i),l&&l.m(e,null),a=!0},p(n,[i]){l&&l.p&&(!a||i&4)&&he(l,t,n,n[2],a?de(t,n[2],i,null):pe(n[2]),null),(!a||i&1)&&c(e,"href",n[0]),(!a||i&3)&&ce(e,"italic",n[1].url.pathname.includes(n[0]))},i(n){a||(U(l,n),a=!0)},o(n){W(l,n),a=!1},d(n){n&&f(e),l&&l.d(n)}}}function Ee(s,e,a){let t;se(s,Le,o=>a(1,t=o));let{$$slots:l={},$$scope:n}=e,{href:i}=e;return s.$$set=o=>{"href"in o&&a(0,i=o.href),"$$scope"in o&&a(2,n=o.$$scope)},[i,t,n,l]}class X extends $e{constructor(e){super(),ve(this,e,Ee,be,_e,{href:0})}}function Ae(s){let e,a="fr",t,l,n,i;return{c(){e=d("span"),e.textContent=a,t=q(` /
                `),l=d("a"),n=q("en"),this.h()},l(o){e=g(o,"SPAN",{"data-svelte-h":!0}),ge(e)!=="svelte-dmyqdu"&&(e.textContent=a),t=N(o,` /
                `),l=g(o,"A",{class:!0,href:!0});var u=v(l);n=N(u,"en"),u.forEach(f),this.h()},h(){c(l,"class","text-zinc-400"),c(l,"href",i=m.getTranslatedSlug(s[0],"en"))},m(o,u){L(o,e,u),L(o,t,u),L(o,l,u),h(l,n)},p(o,u){u&1&&i!==(i=m.getTranslatedSlug(o[0],"en"))&&c(l,"href",i)},d(o){o&&(f(e),f(t),f(l))}}}function Ie(s){let e,a,t,l,n,i="en";return{c(){e=d("a"),a=q("fr"),l=q(` /
                `),n=d("span"),n.textContent=i,this.h()},l(o){e=g(o,"A",{class:!0,href:!0});var u=v(e);a=N(u,"fr"),u.forEach(f),l=N(o,` /
                `),n=g(o,"SPAN",{"data-svelte-h":!0}),ge(n)!=="svelte-12xx95h"&&(n.textContent=i),this.h()},h(){c(e,"class","text-zinc-400"),c(e,"href",t=m.getTranslatedSlug(s[0],"fr"))},m(o,u){L(o,e,u),h(e,a),L(o,l,u),L(o,n,u)},p(o,u){u&1&&t!==(t=m.getTranslatedSlug(o[0],"fr"))&&c(e,"href",t)},d(o){o&&(f(e),f(l),f(n))}}}function Ce(s){let e=m.getLocalizedString("philosophy",s[1])+"",a;return{c(){a=q(e)},l(t){a=N(t,e)},m(t,l){L(t,a,l)},p(t,l){l&2&&e!==(e=m.getLocalizedString("philosophy",t[1])+"")&&Y(a,e)},d(t){t&&f(a)}}}function je(s){let e=m.getLocalizedString("projects",s[1])+"",a;return{c(){a=q(e)},l(t){a=N(t,e)},m(t,l){L(t,a,l)},p(t,l){l&2&&e!==(e=m.getLocalizedString("projects",t[1])+"")&&Y(a,e)},d(t){t&&f(a)}}}function qe(s){let e=m.getLocalizedString("news",s[1])+"",a;return{c(){a=q(e)},l(t){a=N(t,e)},m(t,l){L(t,a,l)},p(t,l){l&2&&e!==(e=m.getLocalizedString("news",t[1])+"")&&Y(a,e)},d(t){t&&f(a)}}}function Ne(s){let e=m.getLocalizedString("contact",s[1])+"",a;return{c(){a=q(e)},l(t){a=N(t,e)},m(t,l){L(t,a,l)},p(t,l){l&2&&e!==(e=m.getLocalizedString("contact",t[1])+"")&&Y(a,e)},d(t){t&&f(a)}}}function Te(s){let e,a,t,l,n,i,o,u,F,p,Z,S,D,k,x,P,b,ee,M,E,te,V,A,le,B,I;document.title=e=s[2];function ne(r,_){return r[1]==="en"?Ie:Ae}let H=ne(s),z=H(s);k=new X({props:{href:m.getLocalizedSlug("philosophy",s[1]),$$slots:{default:[Ce]},$$scope:{ctx:s}}}),b=new X({props:{href:m.getLocalizedSlug("projects",s[1]),$$slots:{default:[je]},$$scope:{ctx:s}}}),E=new X({props:{href:m.getLocalizedSlug("news",s[1]),$$slots:{default:[qe]},$$scope:{ctx:s}}}),A=new X({props:{href:m.getLocalizedSlug("contact",s[1]),$$slots:{default:[Ne]},$$scope:{ctx:s}}});const ae=s[5].default,$=me(ae,s,s[6],null);return{c(){a=T(),t=d("div"),l=d("aside"),n=d("a"),i=d("img"),F=T(),p=d("div"),z.c(),Z=T(),S=d("ul"),D=d("li"),J(k.$$.fragment),x=T(),P=d("li"),J(b.$$.fragment),ee=T(),M=d("li"),J(E.$$.fragment),te=T(),V=d("li"),J(A.$$.fragment),le=T(),B=d("main"),$&&$.c(),this.h()},l(r){Se("svelte-qypro7",document.head).forEach(f),a=y(r),t=g(r,"DIV",{class:!0,"data-sveltekit-preload-data":!0});var C=v(t);l=g(C,"ASIDE",{class:!0});var w=v(l);n=g(w,"A",{class:!0,href:!0});var G=v(n);i=g(G,"IMG",{src:!0,alt:!0}),G.forEach(f),F=y(w),p=g(w,"DIV",{class:!0});var K=v(p);z.l(K),K.forEach(f),Z=y(w),S=g(w,"UL",{class:!0});var j=v(S);D=g(j,"LI",{class:!0});var re=v(D);O(k.$$.fragment,re),re.forEach(f),x=y(j),P=g(j,"LI",{class:!0});var oe=v(P);O(b.$$.fragment,oe),oe.forEach(f),ee=y(j),M=g(j,"LI",{class:!0});var ie=v(M);O(E.$$.fragment,ie),ie.forEach(f),te=y(j),V=g(j,"LI",{class:!0});var fe=v(V);O(A.$$.fragment,fe),fe.forEach(f),j.forEach(f),w.forEach(f),le=y(C),B=g(C,"MAIN",{class:!0});var ue=v(B);$&&$.l(ue),ue.forEach(f),C.forEach(f),this.h()},h(){ze(i.src,o=s[3].Logo.data.attributes.url)||c(i,"src",o),c(i,"alt","KaPt logo"),c(n,"class","logo w-36 sm:w-40 md:w-60 xl:w-72 svelte-nqw9du"),c(n,"href",u=m.getLocalizedSlug("home",s[1])),c(p,"class","flex-0 lg:text-2xl z-20 sm:flex-1 text-right"),c(D,"class","sm:pl-4"),c(P,"class","sm:pl-4"),c(M,"class","sm:pl-4"),c(V,"class","sm:pl-4"),c(S,"class","flex justify-between max-sm:w-full max-sm:py-2 max-sm:order-last lg:text-2xl"),c(l,"class","fixed top-0 left-0 flex flex-wrap justify-between p-4 sm:p-8 w-full z-50 max-sm:bg-white"),c(B,"class","mt-40 p-4 sm:p-8 w-full flex flex-col items-center"),c(t,"class","app w-screen text-zinc-900"),c(t,"data-sveltekit-preload-data","hover")},m(r,_){L(r,a,_),L(r,t,_),h(t,l),h(l,n),h(n,i),h(l,F),h(l,p),z.m(p,null),h(l,Z),h(l,S),h(S,D),Q(k,D,null),h(S,x),h(S,P),Q(b,P,null),h(S,ee),h(S,M),Q(E,M,null),h(S,te),h(S,V),Q(A,V,null),h(t,le),h(t,B),$&&$.m(B,null),I=!0},p(r,[_]){(!I||_&4)&&e!==(e=r[2])&&(document.title=e),(!I||_&2&&u!==(u=m.getLocalizedSlug("home",r[1])))&&c(n,"href",u),H===(H=ne(r))&&z?z.p(r,_):(z.d(1),z=H(r),z&&(z.c(),z.m(p,null)));const C={};_&2&&(C.href=m.getLocalizedSlug("philosophy",r[1])),_&66&&(C.$$scope={dirty:_,ctx:r}),k.$set(C);const w={};_&2&&(w.href=m.getLocalizedSlug("projects",r[1])),_&66&&(w.$$scope={dirty:_,ctx:r}),b.$set(w);const G={};_&2&&(G.href=m.getLocalizedSlug("news",r[1])),_&66&&(G.$$scope={dirty:_,ctx:r}),E.$set(G);const K={};_&2&&(K.href=m.getLocalizedSlug("contact",r[1])),_&66&&(K.$$scope={dirty:_,ctx:r}),A.$set(K),$&&$.p&&(!I||_&64)&&he($,ae,r,r[6],I?de(ae,r[6],_,null):pe(r[6]),null)},i(r){I||(U(k.$$.fragment,r),U(b.$$.fragment,r),U(E.$$.fragment,r),U(A.$$.fragment,r),U($,r),I=!0)},o(r){W(k.$$.fragment,r),W(b.$$.fragment,r),W(E.$$.fragment,r),W(A.$$.fragment,r),W($,r),I=!1},d(r){r&&(f(a),f(t)),z.d(),R(k),R(b),R(E),R(A),$&&$.d(r)}}}function ye(s,e,a){let t,l,n;se(s,Le,p=>a(0,l=p)),se(s,ke,p=>a(2,n=p));let{$$slots:i={},$$scope:o}=e,{data:u}=e,{logo:F}=u;return s.$$set=p=>{"data"in p&&a(4,u=p.data),"$$scope"in p&&a(6,o=p.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&a(1,t=l.url.pathname.startsWith(`${we}/en`)?"en":"fr")},[l,t,n,F,u,i,o]}class Ke extends $e{constructor(e){super(),ve(this,e,ye,Te,_e,{data:4})}}export{Ke as component};