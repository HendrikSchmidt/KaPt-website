import{S as I,i as S,s as k,k as d,l as p,m as v,h as m,n as g,b as w,J as L,g as h,v as A,f as B,d as _,L as E,o as H,y as N,z as P,A as q,B as C}from"./index.23ebdc98.js";import{i as b,s as y}from"./i18n.8c8ce345.js";import{I as D}from"./Image.28fc339b.js";function z(s,n,o){const a=s.slice();return a[4]=n[o],a[6]=o,a}function j(s){let n,o;return n=new D({props:{img:s[4].attributes.Images.data[0].attributes,sizes:"150wv",src:"xlarge",lazy:s[6]>0,pictureRelative:!1,classString:"absolute object-cover saturate-0 "+(s[6]===s[1]?"opacity-100 z-10":"opacity-0 z-0")}}),{c(){N(n.$$.fragment)},l(a){P(n.$$.fragment,a)},m(a,c){q(n,a,c),o=!0},p(a,c){const i={};c&2&&(i.classString="absolute object-cover saturate-0 "+(a[6]===a[1]?"opacity-100 z-10":"opacity-0 z-0")),n.$set(i)},i(a){o||(h(n.$$.fragment,a),o=!0)},o(a){_(n.$$.fragment,a),o=!1},d(a){C(n,a)}}}function J(s){let n,o,a,c,i=s[2],e=[];for(let t=0;t<i.length;t+=1)e[t]=j(z(s,i,t));const u=t=>_(e[t],1,1,()=>{e[t]=null});return{c(){n=d("div"),o=d("a");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){n=p(t,"DIV",{class:!0});var l=v(n);o=p(l,"A",{href:!0});var r=v(o);for(let f=0;f<e.length;f+=1)e[f].l(r);r.forEach(m),l.forEach(m),this.h()},h(){g(o,"href",a=b.getLocalizedSlug("projects",s[0])+"/"+y(s[2][s[1]].attributes.Nom)),g(n,"class","w-full overflow-hidden landing-image relative aspect-[4/3] md:aspect-[3/2]")},m(t,l){w(t,n,l),L(n,o);for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(o,null);c=!0},p(t,[l]){if(l&6){i=t[2];let r;for(r=0;r<i.length;r+=1){const f=z(t,i,r);e[r]?(e[r].p(f,l),h(e[r],1)):(e[r]=j(f),e[r].c(),h(e[r],1),e[r].m(o,null))}for(A(),r=i.length;r<e.length;r+=1)u(r);B()}(!c||l&3&&a!==(a=b.getLocalizedSlug("projects",t[0])+"/"+y(t[2][t[1]].attributes.Nom)))&&g(o,"href",a)},i(t){if(!c){for(let l=0;l<i.length;l+=1)h(e[l]);c=!0}},o(t){e=e.filter(Boolean);for(let l=0;l<e.length;l+=1)_(e[l]);c=!1},d(t){t&&m(n),E(e,t)}}}function M(s,n,o){let{home:a}=n,{lang:c}=n;const i=a.Projets.data;let e=0;return H(()=>{const u=setInterval(()=>{o(1,e=(e+1)%i.length)},5e3);return()=>{clearInterval(u)}}),s.$$set=u=>{"home"in u&&o(3,a=u.home),"lang"in u&&o(0,c=u.lang)},[c,e,i,a]}class G extends I{constructor(n){super(),S(this,n,M,J,k,{home:3,lang:0})}}export{G as H};