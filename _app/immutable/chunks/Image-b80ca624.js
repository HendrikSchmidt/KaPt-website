import{S as v,i as j,s as I,k as h,a as k,l as z,m as C,c as E,h as d,n as r,M as w,b as O,J as b,N as P,K as y,O as T}from"./index-faa1c9d4.js";function q(s){let t,i,n,c,a,u,m,f,o,g,_;return{c(){t=h("picture"),i=h("source"),c=k(),a=h("img"),this.h()},l(l){t=z(l,"PICTURE",{});var e=C(t);i=z(e,"SOURCE",{type:!0,srcset:!0,sizes:!0}),c=E(e),a=z(e,"IMG",{class:!0,loading:!0,src:!0,alt:!0}),e.forEach(d),this.h()},h(){r(i,"type","image/webp"),r(i,"srcset",n=s[7](s[6])),r(i,"sizes",s[4]),r(a,"class",u="w-full h-full object-center transition duration-1000 transform hover:scale-110 "+s[3]),r(a,"loading",m=s[0]?"lazy":"eager"),w(a.src,f=s[5][s[2]]?s[5][s[2]].url:s[5].small.url)||r(a,"src",f),r(a,"alt",o=s[1].alternativeText)},m(l,e){O(l,t,e),b(t,i),b(t,c),b(t,a),g||(_=P(a,"click",s[8]),g=!0)},p(l,[e]){e&64&&n!==(n=l[7](l[6]))&&r(i,"srcset",n),e&16&&r(i,"sizes",l[4]),e&8&&u!==(u="w-full h-full object-center transition duration-1000 transform hover:scale-110 "+l[3])&&r(a,"class",u),e&1&&m!==(m=l[0]?"lazy":"eager")&&r(a,"loading",m),e&36&&!w(a.src,f=l[5][l[2]]?l[5][l[2]].url:l[5].small.url)&&r(a,"src",f),e&2&&o!==(o=l[1].alternativeText)&&r(a,"alt",o)},i:y,o:y,d(l){l&&d(t),g=!1,_()}}}function G(s,t,i){let n,c,{lazy:a=!1}=t,{img:u}=t,{src:m}=t,{classString:f=""}=t,{sizes:o="100vw"}=t;const g={small:"500w",medium:"750w",large:"1000w",xlarge:"1500w"},_=e=>e.replace(/\.jpe?g/gi,".webp");c+=`, ${u.url} 2000w`;function l(e){T.call(this,s,e)}return s.$$set=e=>{"lazy"in e&&i(0,a=e.lazy),"img"in e&&i(1,u=e.img),"src"in e&&i(2,m=e.src),"classString"in e&&i(3,f=e.classString),"sizes"in e&&i(4,o=e.sizes)},s.$$.update=()=>{s.$$.dirty&2&&i(5,n=u.formats),s.$$.dirty&32&&i(6,c=Object.entries(g).filter(([e])=>n[e]).map(([e,S])=>`${n[e].url} ${S}`).join())},[a,u,m,f,o,n,c,_,l]}class M extends v{constructor(t){super(),j(this,t,G,q,I,{lazy:0,img:1,src:2,classString:3,sizes:4})}}export{M as I};
