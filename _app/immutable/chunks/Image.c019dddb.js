import{S as q,i as C,s as T,k as z,a as p,q as G,l as d,m as I,c as E,r as J,h as y,n,N as P,b as O,J as v,_ as R,u as U,K as k,$ as W}from"./index.2baf3ca1.js";function K(s){let t,i,c,m,a,u,_,f,g,b,o,h=s[1].caption+"",e,w,S;return{c(){t=z("picture"),i=z("source"),m=p(),a=z("img"),b=p(),o=z("p"),e=G(h),this.h()},l(l){t=d(l,"PICTURE",{class:!0});var r=I(t);i=d(r,"SOURCE",{type:!0,srcset:!0,sizes:!0}),m=E(r),a=d(r,"IMG",{class:!0,loading:!0,src:!0,alt:!0}),b=E(r),o=d(r,"P",{class:!0});var j=I(o);e=J(j,h),j.forEach(y),r.forEach(y),this.h()},h(){n(i,"type","image/webp"),n(i,"srcset",c=s[7](s[6])),n(i,"sizes",s[4]),n(a,"class",u="w-full h-full object-center transition duration-1000 transform hover:scale-110 "+s[3]),n(a,"loading",_=s[0]?"lazy":"eager"),P(a.src,f=s[5][s[2]]?s[5][s[2]].url:s[5].small.url)||n(a,"src",f),n(a,"alt",g=s[1].alternativeText),n(o,"class","opacity-0 transition-all text-xs absolute bottom-0 px-1 bg-white svelte-1y0tv8w"),n(t,"class","relative svelte-1y0tv8w")},m(l,r){O(l,t,r),v(t,i),v(t,m),v(t,a),v(t,b),v(t,o),v(o,e),w||(S=R(a,"click",s[8]),w=!0)},p(l,[r]){r&64&&c!==(c=l[7](l[6]))&&n(i,"srcset",c),r&16&&n(i,"sizes",l[4]),r&8&&u!==(u="w-full h-full object-center transition duration-1000 transform hover:scale-110 "+l[3])&&n(a,"class",u),r&1&&_!==(_=l[0]?"lazy":"eager")&&n(a,"loading",_),r&36&&!P(a.src,f=l[5][l[2]]?l[5][l[2]].url:l[5].small.url)&&n(a,"src",f),r&2&&g!==(g=l[1].alternativeText)&&n(a,"alt",g),r&2&&h!==(h=l[1].caption+"")&&U(e,h)},i:k,o:k,d(l){l&&y(t),w=!1,S()}}}function M(s,t,i){let c,m,{lazy:a=!1}=t,{img:u}=t,{src:_}=t,{classString:f=""}=t,{sizes:g="100vw"}=t;const b={small:"500w",medium:"750w",large:"1000w",xlarge:"1500w"},o=e=>e.replace(/\.jpe?g/gi,".webp");m+=`, ${u.url} 2000w`;function h(e){W.call(this,s,e)}return s.$$set=e=>{"lazy"in e&&i(0,a=e.lazy),"img"in e&&i(1,u=e.img),"src"in e&&i(2,_=e.src),"classString"in e&&i(3,f=e.classString),"sizes"in e&&i(4,g=e.sizes)},s.$$.update=()=>{s.$$.dirty&2&&i(5,c=u.formats),s.$$.dirty&32&&i(6,m=Object.entries(b).filter(([e])=>c[e]).map(([e,w])=>`${c[e].url} ${w}`).join())},[a,u,_,f,g,c,m,o,h]}class A extends q{constructor(t){super(),C(this,t,M,K,T,{lazy:0,img:1,src:2,classString:3,sizes:4})}}export{A as I};
