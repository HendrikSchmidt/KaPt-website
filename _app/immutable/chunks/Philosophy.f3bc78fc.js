import{S as at,i as st,s as lt,k as _,y as U,a as V,q as G,l as p,m as E,z as W,h as g,c as M,r as H,n as u,b as X,J as i,A as Y,u as L,v as rt,M as it,f as ot,g as O,d as j,B as Z,N as q,O as nt}from"./index.2baf3ca1.js";import{i as K,m as tt}from"./i18n.2e41ff04.js";import{S as et}from"./SvelteMarkdown.38944363.js";function Q(d,e,s){const l=d.slice();return l[2]=e[s],l[4]=s,l}function R(d,e){let s,l,n,h,v,D,c,r,I=e[2].Nom+"",b,P,$,t,a,o,x,k,z=e[2].Position+"",T,B,y,A,w;return y=new et({props:{source:e[2].Description,options:tt}}),{key:d,first:null,c(){s=_("div"),l=_("div"),n=_("img"),D=V(),c=_("div"),r=_("h3"),b=G(I),P=V(),$=_("div"),t=_("img"),x=V(),k=_("span"),T=G(z),B=V(),U(y.$$.fragment),A=V(),this.h()},l(m){s=p(m,"DIV",{class:!0});var f=E(s);l=p(f,"DIV",{class:!0});var N=E(l);n=p(N,"IMG",{src:!0,alt:!0}),N.forEach(g),D=M(f),c=p(f,"DIV",{class:!0});var S=E(c);r=p(S,"H3",{});var C=E(r);b=H(C,I),C.forEach(g),P=M(S),$=p(S,"DIV",{class:!0});var J=E($);t=p(J,"IMG",{class:!0,src:!0,alt:!0}),J.forEach(g),x=M(S),k=p(S,"SPAN",{class:!0});var F=E(k);T=H(F,z),F.forEach(g),B=M(S),W(y.$$.fragment,S),S.forEach(g),A=M(f),f.forEach(g),this.h()},h(){q(n.src,h=e[2].Portrait.data.attributes.url)||u(n,"src",h),u(n,"alt",v=e[2].Portrait.data.attributes.alternativeText),u(l,"class","max-sm:hidden w-60 flex-none pb-8"),u(t,"class","w-60"),q(t.src,a=e[2].Portrait.data.attributes.url)||u(t,"src",a),u(t,"alt",o=e[2].Portrait.data.attributes.alternativeText),u($,"class","sm:hidden"),u(k,"class","font-bold text-zinc-400"),u(c,"class","sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 inline"),u(s,"class","my-4 sm:flex"),this.first=s},m(m,f){X(m,s,f),i(s,l),i(l,n),i(s,D),i(s,c),i(c,r),i(r,b),i(c,P),i(c,$),i($,t),i(c,x),i(c,k),i(k,T),i(c,B),Y(y,c,null),i(s,A),w=!0},p(m,f){e=m,(!w||f&2&&!q(n.src,h=e[2].Portrait.data.attributes.url))&&u(n,"src",h),(!w||f&2&&v!==(v=e[2].Portrait.data.attributes.alternativeText))&&u(n,"alt",v),(!w||f&2)&&I!==(I=e[2].Nom+"")&&L(b,I),(!w||f&2&&!q(t.src,a=e[2].Portrait.data.attributes.url))&&u(t,"src",a),(!w||f&2&&o!==(o=e[2].Portrait.data.attributes.alternativeText))&&u(t,"alt",o),(!w||f&2)&&z!==(z=e[2].Position+"")&&L(T,z);const N={};f&2&&(N.source=e[2].Description),y.$set(N)},i(m){w||(O(y.$$.fragment,m),w=!0)},o(m){j(y.$$.fragment,m),w=!1},d(m){m&&g(s),Z(y)}}}function ct(d){let e,s,l,n,h,v=K.getLocalizedString("biographies",d[0])+"",D,c,r=[],I=new Map,b;l=new et({props:{source:d[1].Philosophie,options:tt}});let P=d[1].Biographies;const $=t=>t[2].id;for(let t=0;t<P.length;t+=1){let a=Q(d,P,t),o=$(a);I.set(o,r[t]=R(o,a))}return{c(){e=_("div"),s=_("div"),U(l.$$.fragment),n=V(),h=_("h2"),D=G(v),c=V();for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=p(t,"DIV",{class:!0});var a=E(e);s=p(a,"DIV",{class:!0});var o=E(s);W(l.$$.fragment,o),o.forEach(g),n=M(a),h=p(a,"H2",{});var x=E(h);D=H(x,v),x.forEach(g),c=M(a);for(let k=0;k<r.length;k+=1)r[k].l(a);a.forEach(g),this.h()},h(){u(s,"class","mb-36"),u(e,"class","container mx-auto md:w-5/6 lg:w-4/5 xl:w-3/4 2xl:w-2/3 text-justify prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl max-w-none")},m(t,a){X(t,e,a),i(e,s),Y(l,s,null),i(e,n),i(e,h),i(h,D),i(e,c);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);b=!0},p(t,[a]){const o={};a&2&&(o.source=t[1].Philosophie),l.$set(o),(!b||a&1)&&v!==(v=K.getLocalizedString("biographies",t[0])+"")&&L(D,v),a&2&&(P=t[1].Biographies,rt(),r=it(r,a,$,1,t,P,I,e,nt,R,null,Q),ot())},i(t){if(!b){O(l.$$.fragment,t);for(let a=0;a<P.length;a+=1)O(r[a]);b=!0}},o(t){j(l.$$.fragment,t);for(let a=0;a<r.length;a+=1)j(r[a]);b=!1},d(t){t&&g(e),Z(l);for(let a=0;a<r.length;a+=1)r[a].d()}}}function ut(d,e,s){let{lang:l}=e,{philosophy:n}=e;return d.$$set=h=>{"lang"in h&&s(0,l=h.lang),"philosophy"in h&&s(1,n=h.philosophy)},[l,n]}class mt extends at{constructor(e){super(),st(this,e,ut,ct,lt,{lang:0,philosophy:1})}}export{mt as P};