import{S as D,i as E,s as I,k as _,q as k,a as v,e as w,l as h,m as y,r as q,h as c,c as $,b as p,D as A,B as P,I as S,n as T}from"../../../chunks/index-f914b8f7.js";import{w as B}from"../../../chunks/index-c99f6d76.js";function C(){const{subscribe:s,set:e}=B("");return{subscribe:s,set:r=>{e(`${r} \u2022 Pechtold Architekten`)},clear:()=>{e("Pechtold Architekten")}}}const G=C(),H="http://localhost:1337",M="https://kapt-cms-production.up.railway.app/api",O={basePath:H,apiPath:M,markdownOptions:{breaks:!0}};function j(s){let e,r;return{c(){e=_("img"),this.h()},l(a){e=h(a,"IMG",{src:!0}),this.h()},h(){S(e.src,r=`${O.basePath}${s[0].PresentationPictures.data[0].attributes.url}`)||T(e,"src",r)},m(a,l){p(a,e,l)},p:P,d(a){a&&c(e)}}}function x(s){let e,r=s[0].Title+"",a,l,n,d=s[0].Description+"",m,u,f,o=s[0].PresentationPictures.data&&j(s);return{c(){e=_("h1"),a=k(r),l=v(),n=_("p"),m=k(d),u=v(),o&&o.c(),f=w()},l(t){e=h(t,"H1",{});var i=y(e);a=q(i,r),i.forEach(c),l=$(t),n=h(t,"P",{});var b=y(n);m=q(b,d),b.forEach(c),u=$(t),o&&o.l(t),f=w()},m(t,i){p(t,e,i),A(e,a),p(t,l,i),p(t,n,i),A(n,m),p(t,u,i),o&&o.m(t,i),p(t,f,i)},p(t,[i]){t[0].PresentationPictures.data&&o.p(t,i)},i:P,o:P,d(t){t&&c(e),t&&c(l),t&&c(n),t&&c(u),o&&o.d(t),t&&c(f)}}}function z(s,e,r){let{data:a}=e,l=a.presentation;return console.log(l.PresentationPictures.data),G.set("Presentation"),s.$$set=n=>{"data"in n&&r(1,a=n.data)},[l,a]}class K extends D{constructor(e){super(),E(this,e,z,x,I,{data:1})}}export{K as default};
