import{S as f,i as h,s as _,k as o,l as m,m as p,h as d,L as g,n,b as v,J as j,K as c}from"../../../chunks/index-704757be.js";import{t as I}from"../../../chunks/utils-428ae3d9.js";function P(r){let t,e,a;return{c(){t=o("div"),e=o("img"),this.h()},l(s){t=m(s,"DIV",{class:!0});var i=p(t);e=m(i,"IMG",{src:!0,alt:!0}),i.forEach(d),this.h()},h(){g(e.src,a=r[0].url)||n(e,"src",a),n(e,"alt",r[0].alternativeText),n(t,"class","min-h-screen")},m(s,i){v(s,t,i),j(t,e)},p:c,i:c,o:c,d(s){s&&d(t)}}}function b(r,t,e){let{data:a}=t;a.home;let s=a.projects;I.set("KaPt");const u=s[0].attributes.Images.data[0].attributes;return r.$$set=l=>{"data"in l&&e(1,a=l.data)},[u,a]}class y extends f{constructor(t){super(),h(this,t,b,P,_,{data:1})}}export{y as default};