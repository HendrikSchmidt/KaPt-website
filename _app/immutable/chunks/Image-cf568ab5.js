import{S as y,i as S,s as I,k as h,a as k,l as z,m as C,c as E,h as d,n as r,M as w,b as O,J as b,N as P,K as v,O as T}from"./index-faa1c9d4.js";function q(s){let t,i,n,u,a,c,m,o,f,g,_;return{c(){t=h("picture"),i=h("source"),u=k(),a=h("img"),this.h()},l(l){t=z(l,"PICTURE",{});var e=C(t);i=z(e,"SOURCE",{type:!0,srcset:!0,sizes:!0}),u=E(e),a=z(e,"IMG",{class:!0,loading:!0,src:!0,alt:!0}),e.forEach(d),this.h()},h(){r(i,"type","image/webp"),r(i,"srcset",n=s[7](s[6])),r(i,"sizes",s[4]),r(a,"class",c="w-full h-full object-cover object-center transition duration-1000 transform hover:scale-110 "+s[3]),r(a,"loading",m=s[0]?"lazy":"eager"),w(a.src,o=s[5][s[2]]?s[5][s[2]].url:s[5].small.url)||r(a,"src",o),r(a,"alt",f=s[1].alternativeText)},m(l,e){O(l,t,e),b(t,i),b(t,u),b(t,a),g||(_=P(a,"click",s[8]),g=!0)},p(l,[e]){e&64&&n!==(n=l[7](l[6]))&&r(i,"srcset",n),e&16&&r(i,"sizes",l[4]),e&8&&c!==(c="w-full h-full object-cover object-center transition duration-1000 transform hover:scale-110 "+l[3])&&r(a,"class",c),e&1&&m!==(m=l[0]?"lazy":"eager")&&r(a,"loading",m),e&36&&!w(a.src,o=l[5][l[2]]?l[5][l[2]].url:l[5].small.url)&&r(a,"src",o),e&2&&f!==(f=l[1].alternativeText)&&r(a,"alt",f)},i:v,o:v,d(l){l&&d(t),g=!1,_()}}}function G(s,t,i){let n,u,{lazy:a=!1}=t,{img:c}=t,{src:m}=t,{classString:o=""}=t,{sizes:f="100vw"}=t;const g={small:"500w",medium:"750w",large:"1000w",xlarge:"1500w"},_=e=>e.replace(/\.jpe?g/gi,".webp");u+=`, ${c.url} 2000w`;function l(e){T.call(this,s,e)}return s.$$set=e=>{"lazy"in e&&i(0,a=e.lazy),"img"in e&&i(1,c=e.img),"src"in e&&i(2,m=e.src),"classString"in e&&i(3,o=e.classString),"sizes"in e&&i(4,f=e.sizes)},s.$$.update=()=>{s.$$.dirty&2&&i(5,n=c.formats),s.$$.dirty&32&&i(6,u=Object.entries(g).filter(([e])=>n[e]).map(([e,j])=>`${n[e].url} ${j}`).join())},[a,c,m,o,f,n,u,_,l]}class M extends y{constructor(t){super(),S(this,t,G,q,I,{lazy:0,img:1,src:2,classString:3,sizes:4})}}export{M as I};
