import{S as x,i as ee,s as te,e as S,b as y,g as q,_ as le,d as V,f as g,t as p,h as d,k as j,q as ae,a as E,l as $,m as I,r as re,c as N,n as v,J as b,u as se,L as Q,$ as ne,w as R,x as T,y as U,z as W}from"./index-faa1c9d4.js";import{i as B}from"./i18n-6d3a9dab.js";import{s as A}from"./utils-9ef8174b.js";import{I as X}from"./Image-b80ca624.js";function C(i,e,a){const s=i.slice();return s[2]=e[a],s[4]=a,s}function H(i,e,a){const s=i.slice();return s[5]=e[a],s[7]=a,s}function J(i,e,a){const s=i.slice();return s[8]=e[a],s[10]=a,s}function F(i){let e,a,s;return a=new X({props:{img:i[8].attributes,sizes:Y,src:"small",lazy:i[4]>2||i[10]>6,classString:"object-cover saturate-0 hover:saturate-100"}}),{c(){e=j("div"),R(a.$$.fragment),this.h()},l(t){e=$(t,"DIV",{class:!0});var o=I(e);T(a.$$.fragment,o),o.forEach(d),this.h()},h(){v(e,"class","flex-none aspect-square w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 mr-8 mb-8 overflow-hidden")},m(t,o){y(t,e,o),U(a,e,null),s=!0},p(t,o){const n={};o&1&&(n.img=t[8].attributes),o&1&&(n.lazy=t[4]>2||t[10]>6),a.$set(n)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){p(a.$$.fragment,t),s=!1},d(t){t&&d(e),W(a)}}}function G(i){let e,a,s=i[2].attributes.Plans.data,t=[];for(let n=0;n<s.length;n+=1)t[n]=K(H(i,s,n));const o=n=>p(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=S()},l(n){for(let r=0;r<t.length;r+=1)t[r].l(n);e=S()},m(n,r){for(let l=0;l<t.length;l+=1)t[l].m(n,r);y(n,e,r),a=!0},p(n,r){if(r&1){s=n[2].attributes.Plans.data;let l;for(l=0;l<s.length;l+=1){const m=H(n,s,l);t[l]?(t[l].p(m,r),g(t[l],1)):(t[l]=K(m),t[l].c(),g(t[l],1),t[l].m(e.parentNode,e))}for(q(),l=s.length;l<t.length;l+=1)o(l);V()}},i(n){if(!a){for(let r=0;r<s.length;r+=1)g(t[r]);a=!0}},o(n){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)p(t[r]);a=!1},d(n){Q(t,n),n&&d(e)}}}function K(i){let e,a,s,t;return a=new X({props:{img:i[5].attributes,sizes:Y,src:"small",lazy:i[4]>2||i[2].attributes.Images.data.length+i[7]>6,classString:"object-cover saturate-0 hover:saturate-100"}}),{c(){e=j("div"),R(a.$$.fragment),s=E(),this.h()},l(o){e=$(o,"DIV",{class:!0});var n=I(e);T(a.$$.fragment,n),s=N(n),n.forEach(d),this.h()},h(){v(e,"class","flex-none aspect-square w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 mr-8 mb-8 overflow-hidden")},m(o,n){y(o,e,n),U(a,e,null),b(e,s),t=!0},p(o,n){const r={};n&1&&(r.img=o[5].attributes),n&1&&(r.lazy=o[4]>2||o[2].attributes.Images.data.length+o[7]>6),a.$set(r)},i(o){t||(g(a.$$.fragment,o),t=!0)},o(o){p(a.$$.fragment,o),t=!1},d(o){o&&d(e),W(a)}}}function O(i,e){let a,s,t,o=e[2].attributes.Nom+"",n,r,l,m,L,P,k,w=e[2].attributes.Images.data,c=[];for(let f=0;f<w.length;f+=1)c[f]=F(J(e,w,f));const Z=f=>p(c[f],1,1,()=>{c[f]=null});let _=e[2].attributes.MontrePlansDansProjets&&G(e);return{key:i,first:null,c(){a=j("a"),s=j("div"),t=j("h2"),n=ae(o),r=E(),l=j("div");for(let f=0;f<c.length;f+=1)c[f].c();m=E(),_&&_.c(),L=E(),this.h()},l(f){a=$(f,"A",{class:!0,href:!0});var u=I(a);s=$(u,"DIV",{class:!0});var h=I(s);t=$(h,"H2",{class:!0});var z=I(t);n=re(z,o),z.forEach(d),h.forEach(d),r=N(u),l=$(u,"DIV",{class:!0});var D=I(l);for(let M=0;M<c.length;M+=1)c[M].l(D);m=N(D),_&&_.l(D),D.forEach(d),L=N(u),u.forEach(d),this.h()},h(){v(t,"class","font-normal"),v(s,"class","py-3 mb-5 prose sm:w-2/3 lg:w-1/2 border-b-2 border-zinc-900"),v(l,"class","flex w-full overflow-scroll"),v(a,"class","w-full pb-20 cursor-pointer"),v(a,"href",P=B.getLocalizedSlug("projects",e[1])+"/"+A(e[2].attributes.Nom)),this.first=a},m(f,u){y(f,a,u),b(a,s),b(s,t),b(t,n),b(a,r),b(a,l);for(let h=0;h<c.length;h+=1)c[h].m(l,null);b(l,m),_&&_.m(l,null),b(a,L),k=!0},p(f,u){if(e=f,(!k||u&1)&&o!==(o=e[2].attributes.Nom+"")&&se(n,o),u&1){w=e[2].attributes.Images.data;let h;for(h=0;h<w.length;h+=1){const z=J(e,w,h);c[h]?(c[h].p(z,u),g(c[h],1)):(c[h]=F(z),c[h].c(),g(c[h],1),c[h].m(l,m))}for(q(),h=w.length;h<c.length;h+=1)Z(h);V()}e[2].attributes.MontrePlansDansProjets?_?(_.p(e,u),u&1&&g(_,1)):(_=G(e),_.c(),g(_,1),_.m(l,null)):_&&(q(),p(_,1,1,()=>{_=null}),V()),(!k||u&3&&P!==(P=B.getLocalizedSlug("projects",e[1])+"/"+A(e[2].attributes.Nom)))&&v(a,"href",P)},i(f){if(!k){for(let u=0;u<w.length;u+=1)g(c[u]);g(_),k=!0}},o(f){c=c.filter(Boolean);for(let u=0;u<c.length;u+=1)p(c[u]);p(_),k=!1},d(f){f&&d(a),Q(c,f),_&&_.d()}}}function oe(i){let e=[],a=new Map,s,t,o=i[0];const n=r=>r[2].id;for(let r=0;r<o.length;r+=1){let l=C(i,o,r),m=n(l);a.set(m,e[r]=O(m,l))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();s=S()},l(r){for(let l=0;l<e.length;l+=1)e[l].l(r);s=S()},m(r,l){for(let m=0;m<e.length;m+=1)e[m].m(r,l);y(r,s,l),t=!0},p(r,[l]){l&3&&(o=r[0],q(),e=le(e,l,n,1,r,o,a,s.parentNode,ne,O,s,C),V())},i(r){if(!t){for(let l=0;l<o.length;l+=1)g(e[l]);t=!0}},o(r){for(let l=0;l<e.length;l+=1)p(e[l]);t=!1},d(r){for(let l=0;l<e.length;l+=1)e[l].d(r);r&&d(s)}}}let Y="600px";function ie(i,e,a){let{projects:s}=e,{lang:t}=e;return i.$$set=o=>{"projects"in o&&a(0,s=o.projects),"lang"in o&&a(1,t=o.lang)},[s,t]}class _e extends x{constructor(e){super(),ee(this,e,ie,oe,te,{projects:0,lang:1})}}export{_e as P};
