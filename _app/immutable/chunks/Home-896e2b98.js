import{S as f,i as _,s as d,k as c,l as u,m as h,h as m,n as i,L as v,b as p,J as g,K as n}from"./index-b2aee97a.js";function j(l){let t,e,s;return{c(){t=c("div"),e=c("img"),this.h()},l(a){t=u(a,"DIV",{class:!0});var r=h(t);e=u(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(m),this.h()},h(){i(e,"class","w-full h-full object-cover"),v(e.src,s=l[0].url)||i(e,"src",s),i(e,"alt",l[0].alternativeText),i(t,"class","w-full overflow-hidden landing-image svelte-mmo2jt")},m(a,r){p(a,t,r),g(t,e)},p:n,i:n,o:n,d(a){a&&m(t)}}}function b(l,t,e){let{projects:s}=t;const r=s[0].attributes.Images.data[0].attributes;return l.$$set=o=>{"projects"in o&&e(1,s=o.projects)},[r,s]}class I extends f{constructor(t){super(),_(this,t,b,j,d,{projects:1})}}export{I as H};
