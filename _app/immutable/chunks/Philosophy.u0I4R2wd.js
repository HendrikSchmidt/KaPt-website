import{s as at,e as v,l as I,c as g,a as y,d as $,m as V,j as c,i as U,f as u,t as F,b as J,u as j,g as K}from"./scheduler.DSkEQsnv.js";import{S as st,i as rt,c as W,a as X,m as Y,g as lt,e as ot,t as A,b as C,d as Z}from"./index.DpIcepBP.js";import{e as L,u as it,o as nt}from"./each.B2FrYqwD.js";import{S as tt}from"./SvelteMarkdown.Cp68G5Zj.js";import{m as et}from"./utils.CtLzdI5m.js";function Q(f,t,s){const r=f.slice();return r[1]=t[s],r[3]=s,r}function R(f,t){let s,r,n,l,D,w,o,b,e=t[1].Nom+"",a,i,d,p,M,T,q,E,x=t[1].Position+"",N,B,k,G,_;return k=new tt({props:{source:t[1].Description,options:et}}),{key:f,first:null,c(){s=v("div"),r=v("div"),n=v("img"),w=I(),o=v("div"),b=v("h3"),a=F(e),i=I(),d=v("div"),p=v("img"),q=I(),E=v("span"),N=F(x),B=I(),W(k.$$.fragment),G=I(),this.h()},l(m){s=g(m,"DIV",{class:!0});var h=y(s);r=g(h,"DIV",{class:!0});var S=y(r);n=g(S,"IMG",{src:!0,alt:!0}),S.forEach($),w=V(h),o=g(h,"DIV",{class:!0});var P=y(o);b=g(P,"H3",{});var H=y(b);a=J(H,e),H.forEach($),i=V(P),d=g(P,"DIV",{class:!0});var O=y(d);p=g(O,"IMG",{class:!0,src:!0,alt:!0}),O.forEach($),q=V(P),E=g(P,"SPAN",{class:!0});var z=y(E);N=J(z,x),z.forEach($),B=V(P),X(k.$$.fragment,P),P.forEach($),G=V(h),h.forEach($),this.h()},h(){j(n.src,l=t[1].Portrait.data.attributes.url)||c(n,"src",l),c(n,"alt",D=t[1].Portrait.data.attributes.alternativeText),c(r,"class","max-sm:hidden w-60 flex-none pb-8"),c(p,"class","w-60"),j(p.src,M=t[1].Portrait.data.attributes.url)||c(p,"src",M),c(p,"alt",T=t[1].Portrait.data.attributes.alternativeText),c(d,"class","sm:hidden"),c(E,"class","[font-weight:500]"),c(o,"class","sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 inline"),c(s,"class","my-4 sm:flex"),this.first=s},m(m,h){U(m,s,h),u(s,r),u(r,n),u(s,w),u(s,o),u(o,b),u(b,a),u(o,i),u(o,d),u(d,p),u(o,q),u(o,E),u(E,N),u(o,B),Y(k,o,null),u(s,G),_=!0},p(m,h){t=m,(!_||h&1&&!j(n.src,l=t[1].Portrait.data.attributes.url))&&c(n,"src",l),(!_||h&1&&D!==(D=t[1].Portrait.data.attributes.alternativeText))&&c(n,"alt",D),(!_||h&1)&&e!==(e=t[1].Nom+"")&&K(a,e),(!_||h&1&&!j(p.src,M=t[1].Portrait.data.attributes.url))&&c(p,"src",M),(!_||h&1&&T!==(T=t[1].Portrait.data.attributes.alternativeText))&&c(p,"alt",T),(!_||h&1)&&x!==(x=t[1].Position+"")&&K(N,x);const S={};h&1&&(S.source=t[1].Description),k.$set(S)},i(m){_||(A(k.$$.fragment,m),_=!0)},o(m){C(k.$$.fragment,m),_=!1},d(m){m&&$(s),Z(k)}}}function ct(f){let t,s,r,n,l=[],D=new Map,w;r=new tt({props:{source:f[0].Philosophie,options:et}});let o=L(f[0].Biographies);const b=e=>e[1].id;for(let e=0;e<o.length;e+=1){let a=Q(f,o,e),i=b(a);D.set(i,l[e]=R(i,a))}return{c(){t=v("div"),s=v("div"),W(r.$$.fragment),n=I();for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=g(e,"DIV",{class:!0});var a=y(t);s=g(a,"DIV",{class:!0});var i=y(s);X(r.$$.fragment,i),i.forEach($),n=V(a);for(let d=0;d<l.length;d+=1)l[d].l(a);a.forEach($),this.h()},h(){c(s,"class","mb-36 philosophy"),c(t,"class","container mx-auto md:w-5/6 lg:w-4/5 xl:w-3/4 2xl:w-2/3 text-justify prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl max-w-none")},m(e,a){U(e,t,a),u(t,s),Y(r,s,null),u(t,n);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(t,null);w=!0},p(e,[a]){const i={};a&1&&(i.source=e[0].Philosophie),r.$set(i),a&1&&(o=L(e[0].Biographies),lt(),l=it(l,a,b,1,e,o,D,t,nt,R,null,Q),ot())},i(e){if(!w){A(r.$$.fragment,e);for(let a=0;a<o.length;a+=1)A(l[a]);w=!0}},o(e){C(r.$$.fragment,e);for(let a=0;a<l.length;a+=1)C(l[a]);w=!1},d(e){e&&$(t),Z(r);for(let a=0;a<l.length;a+=1)l[a].d()}}}function ut(f,t,s){let{philosophy:r}=t;return f.$$set=n=>{"philosophy"in n&&s(0,r=n.philosophy)},[r]}class _t extends st{constructor(t){super(),rt(this,t,ut,ct,at,{philosophy:0})}}export{_t as P};