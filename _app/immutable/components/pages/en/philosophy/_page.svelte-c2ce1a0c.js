import{S as A,i as F,s as K,k as v,w as J,a as b,l as g,m as w,x as L,c as P,h as p,n as k,b as N,y as T,J as n,Y as Q,d as R,f as V,t as q,z as Y,q as z,r as C,L as U,g as W,Z as X}from"../../../../chunks/index-704757be.js";import{S as Z}from"../../../../chunks/SvelteMarkdown-25519681.js";import{v as j}from"../../../../chunks/variables-8c7a9f2b.js";import{t as tt}from"../../../../chunks/utils-428ae3d9.js";function G(h,s,a){const l=h.slice();return l[2]=s[a],l[4]=a,l}function H(h,s){let a,l,r,u,d,o,f,e=s[2].Nom+"",t,i,$,M=s[2].Position+"",D,I,_,S,E;return _=new Z({props:{source:s[2].Description,options:j.markdownOptions}}),{key:h,first:null,c(){a=v("div"),l=v("div"),r=v("img"),d=b(),o=v("div"),f=v("h2"),t=z(e),i=b(),$=v("p"),D=z(M),I=b(),J(_.$$.fragment),S=b(),this.h()},l(c){a=g(c,"DIV",{class:!0});var m=w(a);l=g(m,"DIV",{class:!0});var x=w(l);r=g(x,"IMG",{src:!0,alt:!0}),x.forEach(p),d=P(m),o=g(m,"DIV",{class:!0});var y=w(o);f=g(y,"H2",{});var B=w(f);t=C(B,e),B.forEach(p),i=P(y),$=g(y,"P",{class:!0});var O=w($);D=C(O,M),O.forEach(p),I=P(y),L(_.$$.fragment,y),y.forEach(p),S=P(m),m.forEach(p),this.h()},h(){U(r.src,u=s[2].Portrait.data.attributes.url)||k(r,"src",u),k(r,"alt",s[2].Portrait.data.attributes.alternativeText),k(l,"class","w-4/12 sticky top-0 self-start"),k($,"class","font-bold"),k(o,"class","w-8/12 pl-6 inline"),k(a,"class","my-24 flex space-between relative"),this.first=a},m(c,m){N(c,a,m),n(a,l),n(l,r),n(a,d),n(a,o),n(o,f),n(f,t),n(o,i),n(o,$),n($,D),n(o,I),T(_,o,null),n(a,S),E=!0},p(c,m){s=c},i(c){E||(V(_.$$.fragment,c),E=!0)},o(c){q(_.$$.fragment,c),E=!1},d(c){c&&p(a),Y(_)}}}function et(h){let s,a,l,r=[],u=new Map,d;a=new Z({props:{source:h[0].Philosophie,options:j.markdownOptions}});let o=h[0].Biographies;const f=e=>e[2].id;for(let e=0;e<o.length;e+=1){let t=G(h,o,e),i=f(t);u.set(i,r[e]=H(i,t))}return{c(){s=v("div"),J(a.$$.fragment),l=b();for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){s=g(e,"DIV",{class:!0});var t=w(s);L(a.$$.fragment,t),l=P(t);for(let i=0;i<r.length;i+=1)r[i].l(t);t.forEach(p),this.h()},h(){k(s,"class","prose prose-sm my-36")},m(e,t){N(e,s,t),T(a,s,null),n(s,l);for(let i=0;i<r.length;i+=1)r[i].m(s,null);d=!0},p(e,[t]){t&1&&(o=e[0].Biographies,W(),r=Q(r,t,f,1,e,o,u,s,X,H,null,G),R())},i(e){if(!d){V(a.$$.fragment,e);for(let t=0;t<o.length;t+=1)V(r[t]);d=!0}},o(e){q(a.$$.fragment,e);for(let t=0;t<r.length;t+=1)q(r[t]);d=!1},d(e){e&&p(s),Y(a);for(let t=0;t<r.length;t+=1)r[t].d()}}}function at(h,s,a){let{data:l}=s,r=l.philosophy;return tt.set("Philosophie"),h.$$set=u=>{"data"in u&&a(1,l=u.data)},[r,l]}class it extends A{constructor(s){super(),F(this,s,at,et,K,{data:1})}}export{it as default};
