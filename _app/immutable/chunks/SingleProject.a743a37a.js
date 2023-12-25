import{s as ke,f as m,l as j,a as b,g as f,h as u,m as P,d,c as x,C as Ce,j as _,i as De,B as t,n as L,E as ye}from"./scheduler.c0d9be51.js";import{S as Ue,i as Be,b as Le,d as Ne,m as Ae,a as R,g as qe,c as Me,t as re,e as Ve}from"./index.44525060.js";import{e as Ee}from"./each.d35045f2.js";import{I as Fe}from"./Image.ec737e29.js";import{i as N}from"./i18n.bd132921.js";import{S as Ge}from"./SvelteMarkdown.3d84e60e.js";function ze(o,a,s){const c=o.slice();return c[3]=a[s],c[5]=s,c}function Ie(o){let a,s,c,v,g;return s=new Fe({props:{img:o[3].attributes,sizes:o[3].isPortrait?"(max-width: 767px) 100vw, 50vw":"(max-width: 767px) 100vw, 75vw",src:"xlarge",classString:"object-cover"}}),{c(){a=m("div"),Le(s.$$.fragment),c=b(),this.h()},l(n){a=f(n,"DIV",{class:!0});var h=u(a);Ne(s.$$.fragment,h),c=x(h),h.forEach(d),this.h()},h(){_(a,"class",v="overflow-hidden col-span-6 "+(o[3].isPortrait?"portrait md:col-span-2":"landscape md:col-span-4"))},m(n,h){De(n,a,h),Ae(s,a,null),t(a,c),g=!0},p(n,h){const S={};h&4&&(S.img=n[3].attributes),h&4&&(S.sizes=n[3].isPortrait?"(max-width: 767px) 100vw, 50vw":"(max-width: 767px) 100vw, 75vw"),s.$set(S),(!g||h&4&&v!==(v="overflow-hidden col-span-6 "+(n[3].isPortrait?"portrait md:col-span-2":"landscape md:col-span-4")))&&_(a,"class",v)},i(n){g||(R(s.$$.fragment,n),g=!0)},o(n){re(s.$$.fragment,n),g=!1},d(n){n&&d(a),Ve(s)}}}function He(o){let a,s,c,v,g=N.getLocalizedString("name",o[1])+"",n,h,S,B=o[0].Nom.toUpperCase()+"",T,oe,E,$,q=N.getLocalizedString("location",o[1])+"",W,ie,M,F=o[0].Localisation+"",X,ce,z,k,G=N.getLocalizedString("program",o[1])+"",Y,de,H,J=o[0].Programme+"",Z,me,I,C,K=N.getLocalizedString("area",o[1])+"",ee,fe,A,O=o[0].Surface+"",te,pe,y,_e="2",ue,U,D,ve,w;D=new Ge({props:{source:o[0].Description}});let V=Ee(o[2]),r=[];for(let e=0;e<V.length;e+=1)r[e]=Ie(ze(o,V,e));const $e=e=>re(r[e],1,1,()=>{r[e]=null});return{c(){a=m("div"),s=m("div"),c=m("div"),v=m("span"),n=j(g),h=b(),S=m("span"),T=j(B),oe=b(),E=m("div"),$=m("span"),W=j(q),ie=b(),M=m("span"),X=j(F),ce=b(),z=m("div"),k=m("span"),Y=j(G),de=b(),H=m("span"),Z=j(J),me=b(),I=m("div"),C=m("span"),ee=j(K),fe=b(),A=m("span"),te=j(O),pe=j(" m"),y=m("sup"),y.textContent=_e,ue=b(),U=m("div"),Le(D.$$.fragment),ve=b();for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){a=f(e,"DIV",{class:!0});var l=u(a);s=f(l,"DIV",{class:!0});var p=u(s);c=f(p,"DIV",{class:!0});var i=u(c);v=f(i,"SPAN",{class:!0});var Q=u(v);n=P(Q,g),Q.forEach(d),h=x(i),S=f(i,"SPAN",{class:!0});var he=u(S);T=P(he,B),he.forEach(d),i.forEach(d),oe=x(p),E=f(p,"DIV",{class:!0});var ae=u(E);$=f(ae,"SPAN",{class:!0});var we=u($);W=P(we,q),we.forEach(d),ie=x(ae),M=f(ae,"SPAN",{});var Se=u(M);X=P(Se,F),Se.forEach(d),ae.forEach(d),ce=x(p),z=f(p,"DIV",{class:!0});var se=u(z);k=f(se,"SPAN",{class:!0});var be=u(k);Y=P(be,G),be.forEach(d),de=x(se),H=f(se,"SPAN",{});var xe=u(H);Z=P(xe,J),xe.forEach(d),se.forEach(d),me=x(p),I=f(p,"DIV",{class:!0});var le=u(I);C=f(le,"SPAN",{class:!0});var je=u(C);ee=P(je,K),je.forEach(d),fe=x(le),A=f(le,"SPAN",{});var ne=u(A);te=P(ne,O),pe=P(ne," m"),y=f(ne,"SUP",{"data-svelte-h":!0}),Ce(y)!=="svelte-1nsjm82"&&(y.textContent=_e),ne.forEach(d),le.forEach(d),p.forEach(d),ue=x(l),U=f(l,"DIV",{class:!0});var Pe=u(U);Ne(D.$$.fragment,Pe),Pe.forEach(d),ve=x(l);for(let ge=0;ge<r.length;ge+=1)r[ge].l(l);l.forEach(d),this.h()},h(){_(v,"class","max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"),_(S,"class","font-bold"),_(c,"class","flex mb-2 justify-between md:justify-start"),_($,"class","max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"),_(E,"class","flex mb-2 justify-between md:justify-start"),_(k,"class","max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"),_(z,"class","flex mb-2 justify-between md:justify-start"),_(C,"class","max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"),_(I,"class","flex mb-2 justify-between md:justify-start"),_(s,"class","col-span-6 md:col-span-2 prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl max-w-none"),_(U,"class","contents prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl text-justify overflow-scroll"),_(a,"class","image-grid w-full grid grid-flow-dense grid-cols-6 gap-12")},m(e,l){De(e,a,l),t(a,s),t(s,c),t(c,v),t(v,n),t(c,h),t(c,S),t(S,T),t(s,oe),t(s,E),t(E,$),t($,W),t(E,ie),t(E,M),t(M,X),t(s,ce),t(s,z),t(z,k),t(k,Y),t(z,de),t(z,H),t(H,Z),t(s,me),t(s,I),t(I,C),t(C,ee),t(I,fe),t(I,A),t(A,te),t(A,pe),t(A,y),t(a,ue),t(a,U),Ae(D,U,null),t(a,ve);for(let p=0;p<r.length;p+=1)r[p]&&r[p].m(a,null);w=!0},p(e,[l]){(!w||l&2)&&g!==(g=N.getLocalizedString("name",e[1])+"")&&L(n,g),(!w||l&1)&&B!==(B=e[0].Nom.toUpperCase()+"")&&L(T,B),(!w||l&2)&&q!==(q=N.getLocalizedString("location",e[1])+"")&&L(W,q),(!w||l&1)&&F!==(F=e[0].Localisation+"")&&L(X,F),(!w||l&2)&&G!==(G=N.getLocalizedString("program",e[1])+"")&&L(Y,G),(!w||l&1)&&J!==(J=e[0].Programme+"")&&L(Z,J),(!w||l&2)&&K!==(K=N.getLocalizedString("area",e[1])+"")&&L(ee,K),(!w||l&1)&&O!==(O=e[0].Surface+"")&&L(te,O);const p={};if(l&1&&(p.source=e[0].Description),D.$set(p),l&4){V=Ee(e[2]);let i;for(i=0;i<V.length;i+=1){const Q=ze(e,V,i);r[i]?(r[i].p(Q,l),R(r[i],1)):(r[i]=Ie(Q),r[i].c(),R(r[i],1),r[i].m(a,null))}for(qe(),i=V.length;i<r.length;i+=1)$e(i);Me()}},i(e){if(!w){R(D.$$.fragment,e);for(let l=0;l<V.length;l+=1)R(r[l]);w=!0}},o(e){re(D.$$.fragment,e),r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)re(r[l]);w=!1},d(e){e&&d(a),Ve(D),ye(r,e)}}}function Je(o,a,s){let c,{project:v}=a,{lang:g}=a;return o.$$set=n=>{"project"in n&&s(0,v=n.project),"lang"in n&&s(1,g=n.lang)},o.$$.update=()=>{o.$$.dirty&1&&s(2,c=v.Images.data.map(n=>({...n,isPortrait:n.attributes.width<n.attributes.height})))},[v,g,c]}class Xe extends Ue{constructor(a){super(),Be(this,a,Je,He,ke,{project:0,lang:1})}}export{Xe as S};