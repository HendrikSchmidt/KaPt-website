import{S as oe,i as ie,s as ue,C as ce,k as d,l as $,m as v,h as i,n as _,D as re,b as E,E as he,F as _e,G as pe,f as M,t as V,H as x,a as q,q as P,w as B,I as de,c as K,r as S,x as O,J as m,y as Q,z as X}from"../../chunks/index-704757be.js";import{p as me}from"../../chunks/stores-d0005214.js";import{j as Y}from"../../chunks/singletons-f82f5adb.js";import{t as $e}from"../../chunks/utils-428ae3d9.js";import{v as fe}from"../../chunks/variables-8c7a9f2b.js";function ve(n){let e,t;const r=n[3].default,s=ce(r,n,n[2],null);return{c(){e=d("a"),s&&s.c(),this.h()},l(l){e=$(l,"A",{href:!0,class:!0});var o=v(e);s&&s.l(o),o.forEach(i),this.h()},h(){_(e,"href",n[0]),_(e,"class","hover:italic"),re(e,"underline",n[1].url.pathname.includes(n[0]))},m(l,o){E(l,e,o),s&&s.m(e,null),t=!0},p(l,[o]){s&&s.p&&(!t||o&4)&&he(s,r,l,l[2],t?pe(r,l[2],o,null):_e(l[2]),null),(!t||o&1)&&_(e,"href",l[0]),(!t||o&3)&&re(e,"underline",l[1].url.pathname.includes(l[0]))},i(l){t||(M(s,l),t=!0)},o(l){V(s,l),t=!1},d(l){l&&i(e),s&&s.d(l)}}}function ge(n,e,t){let r;x(n,me,a=>t(1,r=a));let{$$slots:s={},$$scope:l}=e,{href:o}=e;return n.$$set=a=>{"href"in a&&t(0,o=a.href),"$$scope"in a&&t(2,l=a.$$scope)},[o,r,l,s]}class Z extends oe{constructor(e){super(),ie(this,e,ge,ve,ue,{href:0})}}function Ee(n){let e;return{c(){e=P("Philosophie")},l(t){e=S(t,"Philosophie")},m(t,r){E(t,e,r)},d(t){t&&i(e)}}}function ke(n){let e;return{c(){e=P("Projets")},l(t){e=S(t,"Projets")},m(t,r){E(t,e,r)},d(t){t&&i(e)}}}function be(n){let e;return{c(){e=P("Contact")},l(t){e=S(t,"Contact")},m(t,r){E(t,e,r)},d(t){t&&i(e)}}}function Pe(n){let e,t,r,s,l,o;return{c(){e=d("span"),t=P("FR"),r=P(" / "),s=d("a"),l=P("EN"),this.h()},l(a){e=$(a,"SPAN",{class:!0});var c=v(e);t=S(c,"FR"),c.forEach(i),r=S(a," / "),s=$(a,"A",{href:!0});var p=v(s);l=S(p,"EN"),p.forEach(i),this.h()},h(){_(e,"class","underline"),_(s,"href",o=n[2]())},m(a,c){E(a,e,c),m(e,t),E(a,r,c),E(a,s,c),m(s,l)},p(a,c){c&4&&o!==(o=a[2]())&&_(s,"href",o)},d(a){a&&i(e),a&&i(r),a&&i(s)}}}function Se(n){let e,t,r,s,l,o;return{c(){e=d("a"),t=P("FR"),s=P(" / "),l=d("span"),o=P("EN"),this.h()},l(a){e=$(a,"A",{href:!0});var c=v(e);t=S(c,"FR"),c.forEach(i),s=S(a," / "),l=$(a,"SPAN",{class:!0});var p=v(l);o=S(p,"EN"),p.forEach(i),this.h()},h(){_(e,"href",r=n[2]()),_(l,"class","underline")},m(a,c){E(a,e,c),m(e,t),E(a,s,c),E(a,l,c),m(l,o)},p(a,c){c&4&&r!==(r=a[2]())&&_(e,"href",r)},d(a){a&&i(e),a&&i(s),a&&i(l)}}}function Ae(n){let e,t,r,s,l,o,a,c,p,A,u,j,C,I,H,D,N,J,R,T,F,W,w;document.title=e=n[3],u=new Z({props:{href:n[0]("philosophy"),$$slots:{default:[Ee]},$$scope:{ctx:n}}}),I=new Z({props:{href:n[0]("projects"),$$slots:{default:[ke]},$$scope:{ctx:n}}}),N=new Z({props:{href:n[0]("contact"),$$slots:{default:[be]},$$scope:{ctx:n}}});const U=n[6].default,g=ce(U,n,n[7],null);function ee(f,h){return h&2&&(W=null),W==null&&(W=!!f[1].url.pathname.startsWith("/en")),W?Se:Pe}let G=ee(n,-1),k=G(n);return{c(){t=q(),r=d("div"),s=d("aside"),l=d("a"),o=P("KaPt"),c=q(),p=d("ul"),A=d("li"),B(u.$$.fragment),j=q(),C=d("li"),B(I.$$.fragment),H=q(),D=d("li"),B(N.$$.fragment),J=q(),R=d("main"),g&&g.c(),T=q(),F=d("div"),k.c(),this.h()},l(f){de("svelte-92cd07",document.head).forEach(i),t=K(f),r=$(f,"DIV",{class:!0});var b=v(r);s=$(b,"ASIDE",{class:!0});var L=v(s);l=$(L,"A",{class:!0,href:!0});var y=v(l);o=S(y,"KaPt"),y.forEach(i),c=K(L),p=$(L,"UL",{class:!0});var z=v(p);A=$(z,"LI",{class:!0});var te=v(A);O(u.$$.fragment,te),te.forEach(i),j=K(z),C=$(z,"LI",{class:!0});var le=v(C);O(I.$$.fragment,le),le.forEach(i),H=K(z),D=$(z,"LI",{class:!0});var se=v(D);O(N.$$.fragment,se),se.forEach(i),z.forEach(i),L.forEach(i),J=K(b),R=$(b,"MAIN",{class:!0});var ae=v(R);g&&g.l(ae),ae.forEach(i),T=K(b),F=$(b,"DIV",{class:!0});var ne=v(F);k.l(ne),ne.forEach(i),b.forEach(i),this.h()},h(){_(l,"class","logo text-8xl svelte-2xdddu"),_(l,"href",a=n[0]("home")),_(A,"class","py-1"),_(C,"class","py-1"),_(D,"class","py-1"),_(p,"class","text-2xl font-extralight uppercase"),_(s,"class","fixed top-0 left-0 flex flex-col justify-between p-3 w-80 h-screen"),_(R,"class","ml-80 mr-12"),_(F,"class","fixed top-0 right-0 p-3 text-2xl"),_(r,"class","app")},m(f,h){E(f,t,h),E(f,r,h),m(r,s),m(s,l),m(l,o),m(s,c),m(s,p),m(p,A),Q(u,A,null),m(p,j),m(p,C),Q(I,C,null),m(p,H),m(p,D),Q(N,D,null),m(r,J),m(r,R),g&&g.m(R,null),m(r,T),m(r,F),k.m(F,null),w=!0},p(f,[h]){(!w||h&8)&&e!==(e=f[3])&&(document.title=e),(!w||h&1&&a!==(a=f[0]("home")))&&_(l,"href",a);const b={};h&1&&(b.href=f[0]("philosophy")),h&128&&(b.$$scope={dirty:h,ctx:f}),u.$set(b);const L={};h&1&&(L.href=f[0]("projects")),h&128&&(L.$$scope={dirty:h,ctx:f}),I.$set(L);const y={};h&1&&(y.href=f[0]("contact")),h&128&&(y.$$scope={dirty:h,ctx:f}),N.$set(y),g&&g.p&&(!w||h&128)&&he(g,U,f,f[7],w?pe(U,f[7],h,null):_e(f[7]),null),G===(G=ee(f,h))&&k?k.p(f,h):(k.d(1),k=G(f),k&&(k.c(),k.m(F,null)))},i(f){w||(M(u.$$.fragment,f),M(I.$$.fragment,f),M(N.$$.fragment,f),M(g,f),w=!0)},o(f){V(u.$$.fragment,f),V(I.$$.fragment,f),V(N.$$.fragment,f),V(g,f),w=!1},d(f){f&&i(t),f&&i(r),X(u),X(I),X(N),g&&g.d(f),k.d()}}}function Ie(n,e,t){let r,s,l,o,a;x(n,me,u=>t(1,o=u)),x(n,$e,u=>t(3,a=u));let{$$slots:c={},$$scope:p}=e,{data:A}=e;return n.$$set=u=>{"data"in u&&t(4,A=u.data),"$$scope"in u&&t(7,p=u.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&t(5,r=o.url.pathname.startsWith(`${Y}/en`)),n.$$.dirty&32&&t(0,s=(u,j=r?"en":"fr")=>(console.log(u),Y+fe.localizedSlugs[u][j])),n.$$.dirty&35&&t(2,l=()=>{let u=o.url.pathname.replace(Y,"");u=u===""?"/":u;const j=r?"fr":"en";return s(fe.inverseSlugMap[u],j)})},[s,o,l,a,A,r,c,p]}class Ce extends oe{constructor(e){super(),ie(this,e,Ie,Ae,ue,{data:4})}}export{Ce as default};
