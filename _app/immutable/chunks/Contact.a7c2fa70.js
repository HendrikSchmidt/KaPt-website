import{S as ve,i as ge,s as ue,k as n,q as d,a as z,y as we,l as r,m as o,r as h,h as l,c as P,z as Ee,n as A,b as Se,K as e,A as ze,u as M,g as Pe,d as Ie,B as Le}from"./index.2dde3162.js";import{S as ke}from"./SvelteMarkdown.08fc39b0.js";import{m as Ae}from"./utils.02725a2a.js";import{i as I}from"./i18n.e8d51237.js";function Me(i){let s,p,_=I.getLocalizedString("contact",i[1])+"",L,v,g,f,D,V=I.getLocalizedString("mail",i[1])+"",N,y,C,x,ee,b,q=I.getLocalizedString("phone",i[1])+"",Q,te,B,H=I.getLocalizedString("address",i[1])+"",R,ae,m,K,k,O=i[0].Mail+"",T,U,le,$,u,se,j=i[0].Instagram+"",W,X,ne,F,G=i[0].Phone+"",Y,re,w,c;return w=new ke({props:{source:i[0].Adresse,options:Ae}}),{c(){s=n("div"),p=n("h1"),L=d(_),v=z(),g=n("div"),f=n("div"),D=n("p"),N=d(V),y=z(),C=n("p"),x=d("instagram"),ee=z(),b=n("p"),Q=d(q),te=z(),B=n("p"),R=d(H),ae=z(),m=n("div"),K=n("p"),k=n("a"),T=d(O),le=z(),$=n("p"),u=n("a"),se=d("@"),W=d(j),ne=z(),F=n("p"),Y=d(G),re=z(),we(w.$$.fragment),this.h()},l(t){s=r(t,"DIV",{class:!0});var a=o(s);p=r(a,"H1",{});var J=o(p);L=h(J,_),J.forEach(l),v=P(a),g=r(a,"DIV",{class:!0});var Z=o(g);f=r(Z,"DIV",{class:!0});var E=o(f);D=r(E,"P",{});var ie=o(D);N=h(ie,V),ie.forEach(l),y=P(E),C=r(E,"P",{});var ce=o(C);x=h(ce,"instagram"),ce.forEach(l),ee=P(E),b=r(E,"P",{});var fe=o(b);Q=h(fe,q),fe.forEach(l),te=P(E),B=r(E,"P",{});var me=o(B);R=h(me,H),me.forEach(l),E.forEach(l),ae=P(Z),m=r(Z,"DIV",{});var S=o(m);K=r(S,"P",{});var de=o(K);k=r(de,"A",{href:!0});var he=o(k);T=h(he,O),he.forEach(l),de.forEach(l),le=P(S),$=r(S,"P",{});var pe=o($);u=r(pe,"A",{href:!0});var oe=o(u);se=h(oe,"@"),W=h(oe,j),oe.forEach(l),pe.forEach(l),ne=P(S),F=r(S,"P",{});var _e=o(F);Y=h(_e,G),_e.forEach(l),re=P(S),Ee(w.$$.fragment,S),S.forEach(l),Z.forEach(l),a.forEach(l),this.h()},h(){A(f,"class","text-zinc-400 lowercase w-1/2"),A(k,"href",U="mailto:"+i[0].Mail),A(u,"href",X="https://www.instagram.com/"+i[0].Instagram+"/"),A(g,"class","flex w-full"),A(s,"class","prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl w-full")},m(t,a){Se(t,s,a),e(s,p),e(p,L),e(s,v),e(s,g),e(g,f),e(f,D),e(D,N),e(f,y),e(f,C),e(C,x),e(f,ee),e(f,b),e(b,Q),e(f,te),e(f,B),e(B,R),e(g,ae),e(g,m),e(m,K),e(K,k),e(k,T),e(m,le),e(m,$),e($,u),e(u,se),e(u,W),e(m,ne),e(m,F),e(F,Y),e(m,re),ze(w,m,null),c=!0},p(t,[a]){(!c||a&2)&&_!==(_=I.getLocalizedString("contact",t[1])+"")&&M(L,_),(!c||a&2)&&V!==(V=I.getLocalizedString("mail",t[1])+"")&&M(N,V),(!c||a&2)&&q!==(q=I.getLocalizedString("phone",t[1])+"")&&M(Q,q),(!c||a&2)&&H!==(H=I.getLocalizedString("address",t[1])+"")&&M(R,H),(!c||a&1)&&O!==(O=t[0].Mail+"")&&M(T,O),(!c||a&1&&U!==(U="mailto:"+t[0].Mail))&&A(k,"href",U),(!c||a&1)&&j!==(j=t[0].Instagram+"")&&M(W,j),(!c||a&1&&X!==(X="https://www.instagram.com/"+t[0].Instagram+"/"))&&A(u,"href",X),(!c||a&1)&&G!==(G=t[0].Phone+"")&&M(Y,G);const J={};a&1&&(J.source=t[0].Adresse),w.$set(J)},i(t){c||(Pe(w.$$.fragment,t),c=!0)},o(t){Ie(w.$$.fragment,t),c=!1},d(t){t&&l(s),Le(w)}}}function De(i,s,p){let{contact:_}=s,{lang:L}=s;return i.$$set=v=>{"contact"in v&&p(0,_=v.contact),"lang"in v&&p(1,L=v.lang)},[_,L]}class Be extends ve{constructor(s){super(),ge(this,s,De,Me,ue,{contact:0,lang:1})}}export{Be as C};
