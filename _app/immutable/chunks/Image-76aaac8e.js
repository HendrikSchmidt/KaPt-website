import{S as y,i as I,s as j,k as h,a as k,l as z,m as C,c as E,h as w,n,L as d,b as P,J as b,M as T,K as S,N as q}from"./index-8f8c49e6.js";function G(a){let i,r,m,u,l,g,f,c,_,o;return{c(){i=h("picture"),r=h("source"),u=k(),l=h("img"),this.h()},l(e){i=z(e,"PICTURE",{});var t=C(i);r=z(t,"SOURCE",{type:!0,srcset:!0,sizes:!0}),u=E(t),l=z(t,"IMG",{class:!0,loading:!0,src:!0,alt:!0}),t.forEach(w),this.h()},h(){n(r,"type","image/webp"),n(r,"srcset",m=a[7](a[5])),n(r,"sizes",a[4]),n(l,"class",a[3]),n(l,"loading",g=a[0]?"lazy":"eager"),d(l.src,f=a[6][a[2]]?a[6][a[2]].url:a[6].small.url)||n(l,"src",f),n(l,"alt",c=a[1].alternativeText)},m(e,t){P(e,i,t),b(i,r),b(i,u),b(i,l),_||(o=T(l,"click",a[8]),_=!0)},p(e,[t]){t&32&&m!==(m=e[7](e[5]))&&n(r,"srcset",m),t&16&&n(r,"sizes",e[4]),t&8&&n(l,"class",e[3]),t&1&&g!==(g=e[0]?"lazy":"eager")&&n(l,"loading",g),t&4&&!d(l.src,f=e[6][e[2]]?e[6][e[2]].url:e[6].small.url)&&n(l,"src",f),t&2&&c!==(c=e[1].alternativeText)&&n(l,"alt",c)},i:S,o:S,d(e){e&&w(i),_=!1,o()}}}function J(a,i,r){let{lazy:m=!1}=i,{img:u}=i,{src:l}=i,{classString:g=""}=i,{sizes:f="100vw"}=i,{formats:c}=u;const _={small:"500w",medium:"750w",large:"1000w",xlarge:"1500w"},o=s=>s.replace(/\.jpe?g/gi,".webp");let e=Object.entries(_).filter(([s])=>c[s]).map(([s,v])=>`${c[s].url} ${v}`).join();e+=`, ${u.url} 2000w`;function t(s){q.call(this,a,s)}return a.$$set=s=>{"lazy"in s&&r(0,m=s.lazy),"img"in s&&r(1,u=s.img),"src"in s&&r(2,l=s.src),"classString"in s&&r(3,g=s.classString),"sizes"in s&&r(4,f=s.sizes)},[m,u,l,g,f,e,c,o,t]}class O extends y{constructor(i){super(),I(this,i,J,G,j,{lazy:0,img:1,src:2,classString:3,sizes:4})}}export{O as I};
