import{S as R,i as T,s as X,e as B,b as J,V as Y,d as Z,f as K,t as Q,h as d,k as b,a as E,q as S,w as tt,l as g,m as k,c as P,r as I,x as et,n as V,D as o,y as at,u as H,z as st,g as rt,W as lt}from"../../../chunks/index-b8f8e555.js";import{S as ot,v as nt}from"../../../chunks/SvelteMarkdown-c873012c.js";import{t as it}from"../../../chunks/utils-94b38e12.js";function F(_,t,l){const r=_.slice();return r[2]=t[l],r[4]=l,r}function G(_,t){let l,r,i,s,n,e=t[2].attributes.Nom+"",a,f,w,$=t[2].attributes.Localisation+"",N,M,h,y=t[2].attributes.Surface+"",j,O,D,x,z,m,C,v;return m=new ot({props:{source:t[2].attributes.shortDescription,options:nt.markdownOptions}}),{key:_,first:null,c(){l=b("div"),r=b("div"),i=E(),s=b("div"),n=b("h2"),a=S(e),f=E(),w=b("p"),N=S($),M=E(),h=b("p"),j=S(y),O=S(" m"),D=b("sup"),x=S("2"),z=E(),tt(m.$$.fragment),C=E(),this.h()},l(u){l=g(u,"DIV",{class:!0});var c=k(l);r=g(c,"DIV",{class:!0});var q=k(r);q.forEach(d),i=P(c),s=g(c,"DIV",{class:!0});var p=k(s);n=g(p,"H2",{});var U=k(n);a=I(U,e),U.forEach(d),f=P(p),w=g(p,"P",{class:!0});var W=k(w);N=I(W,$),W.forEach(d),M=P(p),h=g(p,"P",{class:!0});var L=k(h);j=I(L,y),O=I(L," m"),D=g(L,"SUP",{});var A=k(D);x=I(A,"2"),A.forEach(d),L.forEach(d),z=P(p),et(m.$$.fragment,p),p.forEach(d),C=P(c),c.forEach(d),this.h()},h(){V(r,"class","w-3/12 pt-6"),V(w,"class","font-semibold"),V(h,"class","font-semibold"),V(s,"class","w-6/12 prose-sm"),V(l,"class","my-24 flex flex-row justify-around"),this.first=l},m(u,c){J(u,l,c),o(l,r),o(l,i),o(l,s),o(s,n),o(n,a),o(s,f),o(s,w),o(w,N),o(s,M),o(s,h),o(h,j),o(h,O),o(h,D),o(D,x),o(s,z),at(m,s,null),o(l,C),v=!0},p(u,c){t=u,(!v||c&1)&&e!==(e=t[2].attributes.Nom+"")&&H(a,e),(!v||c&1)&&$!==($=t[2].attributes.Localisation+"")&&H(N,$),(!v||c&1)&&y!==(y=t[2].attributes.Surface+"")&&H(j,y);const q={};c&1&&(q.source=t[2].attributes.shortDescription),m.$set(q)},i(u){v||(K(m.$$.fragment,u),v=!0)},o(u){Q(m.$$.fragment,u),v=!1},d(u){u&&d(l),st(m)}}}function ct(_){let t=[],l=new Map,r,i,s=_[0];const n=e=>e[2].id;for(let e=0;e<s.length;e+=1){let a=F(_,s,e),f=n(a);l.set(f,t[e]=G(f,a))}return{c(){for(let e=0;e<t.length;e+=1)t[e].c();r=B()},l(e){for(let a=0;a<t.length;a+=1)t[a].l(e);r=B()},m(e,a){for(let f=0;f<t.length;f+=1)t[f].m(e,a);J(e,r,a),i=!0},p(e,[a]){a&1&&(s=e[0],rt(),t=Y(t,a,n,1,e,s,l,r.parentNode,lt,G,r,F),Z())},i(e){if(!i){for(let a=0;a<s.length;a+=1)K(t[a]);i=!0}},o(e){for(let a=0;a<t.length;a+=1)Q(t[a]);i=!1},d(e){for(let a=0;a<t.length;a+=1)t[a].d(e);e&&d(r)}}}function ut(_,t,l){let{data:r}=t,i=r.projects;return it.set("Projets"),i=i.map(s=>{let n=s.attributes.Description.slice(0,500);return n=`${n.slice(0,n.lastIndexOf(" "))} ...`,{...s,attributes:{...s.attributes,shortDescription:n}}}),_.$$set=s=>{"data"in s&&l(1,r=s.data)},[i,r]}class ht extends R{constructor(t){super(),T(this,t,ut,ct,X,{data:1})}}export{ht as default};
