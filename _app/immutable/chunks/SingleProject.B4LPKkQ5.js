import{s as $e,e as m,t as j,l as b,c as f,a as u,b as P,d,m as x,p as Ce,j as h,i as De,f as t,g as L,k as ye}from"./scheduler.Bcy9xcpX.js";import{S as Ue,i as qe,c as Le,a as Ne,m as ke,t as R,g as Be,e as Me,b as ne,d as Ae}from"./index.otUheZzG.js";import{e as Ee}from"./each.BYkZsd2z.js";import{I as Fe}from"./Image.BUGM-BLF.js";import{i as N}from"./i18n.DsofwK1U.js";import{S as Ge}from"./SvelteMarkdown.D9w_5U5Y.js";function ze(o,a,s){const c=o.slice();return c[3]=a[s],c[5]=s,c}function Ie(o){let a,s,c,v,g;return s=new Fe({props:{img:o[3].attributes,sizes:o[3].isPortrait?"(max-width: 767px) 100vw, 50vw":"(max-width: 767px) 100vw, 75vw",src:"xlarge",classString:"object-cover"}}),{c(){a=m("div"),Le(s.$$.fragment),c=b(),this.h()},l(r){a=f(r,"DIV",{class:!0});var _=u(a);Ne(s.$$.fragment,_),c=x(_),_.forEach(d),this.h()},h(){h(a,"class",v="overflow-hidden col-span-6 "+(o[3].isPortrait?"portrait md:col-span-2":"landscape md:col-span-4"))},m(r,_){De(r,a,_),ke(s,a,null),t(a,c),g=!0},p(r,_){const S={};_&4&&(S.img=r[3].attributes),_&4&&(S.sizes=r[3].isPortrait?"(max-width: 767px) 100vw, 50vw":"(max-width: 767px) 100vw, 75vw"),s.$set(S),(!g||_&4&&v!==(v="overflow-hidden col-span-6 "+(r[3].isPortrait?"portrait md:col-span-2":"landscape md:col-span-4")))&&h(a,"class",v)},i(r){g||(R(s.$$.fragment,r),g=!0)},o(r){ne(s.$$.fragment,r),g=!1},d(r){r&&d(a),Ae(s)}}}function He(o){let a,s,c,v,g=N.getLocalizedString("name",o[1])+"",r,_,S,q=o[0].Nom.toUpperCase()+"",T,oe,E,V,B=N.getLocalizedString("location",o[1])+"",W,ie,M,F=o[0].Localisation+"",X,ce,z,$,G=N.getLocalizedString("program",o[1])+"",Y,de,H,J=o[0].Programme+"",Z,me,I,C,K=N.getLocalizedString("area",o[1])+"",ee,fe,k,O=o[0].Surface+"",te,pe,y,he="2",ue,U,D,ve,w;D=new Ge({props:{source:o[0].Description}});let A=Ee(o[2]),n=[];for(let e=0;e<A.length;e+=1)n[e]=Ie(ze(o,A,e));const Ve=e=>ne(n[e],1,1,()=>{n[e]=null});return{c(){a=m("div"),s=m("div"),c=m("div"),v=m("span"),r=j(g),_=b(),S=m("span"),T=j(q),oe=b(),E=m("div"),V=m("span"),W=j(B),ie=b(),M=m("span"),X=j(F),ce=b(),z=m("div"),$=m("span"),Y=j(G),de=b(),H=m("span"),Z=j(J),me=b(),I=m("div"),C=m("span"),ee=j(K),fe=b(),k=m("span"),te=j(O),pe=j(" m"),y=m("sup"),y.textContent=he,ue=b(),U=m("div"),Le(D.$$.fragment),ve=b();for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){a=f(e,"DIV",{class:!0});var l=u(a);s=f(l,"DIV",{class:!0});var p=u(s);c=f(p,"DIV",{class:!0});var i=u(c);v=f(i,"SPAN",{class:!0});var Q=u(v);r=P(Q,g),Q.forEach(d),_=x(i),S=f(i,"SPAN",{class:!0});var _e=u(S);T=P(_e,q),_e.forEach(d),i.forEach(d),oe=x(p),E=f(p,"DIV",{class:!0});var ae=u(E);V=f(ae,"SPAN",{class:!0});var we=u(V);W=P(we,B),we.forEach(d),ie=x(ae),M=f(ae,"SPAN",{});var Se=u(M);X=P(Se,F),Se.forEach(d),ae.forEach(d),ce=x(p),z=f(p,"DIV",{class:!0});var se=u(z);$=f(se,"SPAN",{class:!0});var be=u($);Y=P(be,G),be.forEach(d),de=x(se),H=f(se,"SPAN",{});var xe=u(H);Z=P(xe,J),xe.forEach(d),se.forEach(d),me=x(p),I=f(p,"DIV",{class:!0});var le=u(I);C=f(le,"SPAN",{class:!0});var je=u(C);ee=P(je,K),je.forEach(d),fe=x(le),k=f(le,"SPAN",{});var re=u(k);te=P(re,O),pe=P(re," m"),y=f(re,"SUP",{"data-svelte-h":!0}),Ce(y)!=="svelte-1nsjm82"&&(y.textContent=he),re.forEach(d),le.forEach(d),p.forEach(d),ue=x(l),U=f(l,"DIV",{class:!0});var Pe=u(U);Ne(D.$$.fragment,Pe),Pe.forEach(d),ve=x(l);for(let ge=0;ge<n.length;ge+=1)n[ge].l(l);l.forEach(d),this.h()},h(){h(v,"class","max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"),h(S,"class","font-bold"),h(c,"class","flex mb-2 justify-between md:justify-start"),h(V,"class","max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"),h(E,"class","flex mb-2 justify-between md:justify-start"),h($,"class","max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"),h(z,"class","flex mb-2 justify-between md:justify-start"),h(C,"class","max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"),h(I,"class","flex mb-2 justify-between md:justify-start"),h(s,"class","col-span-6 md:col-span-2 prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl max-w-none"),h(U,"class","contents prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl text-justify overflow-scroll"),h(a,"class","image-grid w-full grid grid-flow-dense grid-cols-6 gap-12")},m(e,l){De(e,a,l),t(a,s),t(s,c),t(c,v),t(v,r),t(c,_),t(c,S),t(S,T),t(s,oe),t(s,E),t(E,V),t(V,W),t(E,ie),t(E,M),t(M,X),t(s,ce),t(s,z),t(z,$),t($,Y),t(z,de),t(z,H),t(H,Z),t(s,me),t(s,I),t(I,C),t(C,ee),t(I,fe),t(I,k),t(k,te),t(k,pe),t(k,y),t(a,ue),t(a,U),ke(D,U,null),t(a,ve);for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(a,null);w=!0},p(e,[l]){(!w||l&2)&&g!==(g=N.getLocalizedString("name",e[1])+"")&&L(r,g),(!w||l&1)&&q!==(q=e[0].Nom.toUpperCase()+"")&&L(T,q),(!w||l&2)&&B!==(B=N.getLocalizedString("location",e[1])+"")&&L(W,B),(!w||l&1)&&F!==(F=e[0].Localisation+"")&&L(X,F),(!w||l&2)&&G!==(G=N.getLocalizedString("program",e[1])+"")&&L(Y,G),(!w||l&1)&&J!==(J=e[0].Programme+"")&&L(Z,J),(!w||l&2)&&K!==(K=N.getLocalizedString("area",e[1])+"")&&L(ee,K),(!w||l&1)&&O!==(O=e[0].Surface+"")&&L(te,O);const p={};if(l&1&&(p.source=e[0].Description),D.$set(p),l&4){A=Ee(e[2]);let i;for(i=0;i<A.length;i+=1){const Q=ze(e,A,i);n[i]?(n[i].p(Q,l),R(n[i],1)):(n[i]=Ie(Q),n[i].c(),R(n[i],1),n[i].m(a,null))}for(Be(),i=A.length;i<n.length;i+=1)Ve(i);Me()}},i(e){if(!w){R(D.$$.fragment,e);for(let l=0;l<A.length;l+=1)R(n[l]);w=!0}},o(e){ne(D.$$.fragment,e),n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)ne(n[l]);w=!1},d(e){e&&d(a),Ae(D),ye(n,e)}}}function Je(o,a,s){let c,{project:v}=a,{lang:g}=a;return o.$$set=r=>{"project"in r&&s(0,v=r.project),"lang"in r&&s(1,g=r.lang)},o.$$.update=()=>{o.$$.dirty&1&&s(2,c=v.Images.data.map(r=>({...r,isPortrait:r.attributes.width<r.attributes.height})))},[v,g,c]}class Xe extends Ue{constructor(a){super(),qe(this,a,Je,He,$e,{project:0,lang:1})}}export{Xe as S};