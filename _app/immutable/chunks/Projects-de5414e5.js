import{S as he,i as pe,s as de,k as b,l as v,m as k,h,n as _,b as q,g as ue,Y as be,d as fe,f as V,t as C,q as E,a as $,r as D,c as j,J as f,_ as le,u as z,$ as ve,Z as ge,w as ke,x as we,y as Ie,z as ye,L as H,e as ae,P as Pe}from"./index-f69e386f.js";import{S as Ee}from"./SvelteMarkdown-2305c206.js";import{m as $e}from"./utils-7bd50e54.js";function re(n,e,s){const t=n.slice();return t[5]=e[s],t[7]=s,t}function ie(n,e,s){const t=n.slice();return t[8]=e[s],t}function oe(n){let e,s;return e=new Ee({props:{source:n[5].attributes.Description,options:$e}}),{c(){ke(e.$$.fragment)},l(t){we(e.$$.fragment,t)},m(t,l){Ie(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.source=t[5].attributes.Description),e.$set(r)},i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){ye(e,t)}}}function De(n){let e,s,t;return{c(){e=b("img"),this.h()},l(l){e=v(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){_(e,"class","project-thumb object-cover svelte-1ultmuw"),H(e.src,s=n[5].attributes.Images.data[0].attributes.url)||_(e,"src",s),_(e,"alt",t=n[5].attributes.Images.data[0].attributes.alternativeText)},m(l,r){q(l,e,r)},p(l,r){r&1&&!H(e.src,s=l[5].attributes.Images.data[0].attributes.url)&&_(e,"src",s),r&1&&t!==(t=l[5].attributes.Images.data[0].attributes.alternativeText)&&_(e,"alt",t)},d(l){l&&h(e)}}}function je(n){let e,s=n[5].attributes.Images.data,t=[];for(let l=0;l<s.length;l+=1)t[l]=ne(ie(n,s,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=ae()},l(l){for(let r=0;r<t.length;r+=1)t[r].l(l);e=ae()},m(l,r){for(let o=0;o<t.length;o+=1)t[o].m(l,r);q(l,e,r)},p(l,r){if(r&1){s=l[5].attributes.Images.data;let o;for(o=0;o<s.length;o+=1){const i=ie(l,s,o);t[o]?t[o].p(i,r):(t[o]=ne(i),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=s.length}},d(l){Pe(t,l),l&&h(e)}}}function ne(n){let e,s,t;return{c(){e=b("img"),this.h()},l(l){e=v(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){_(e,"class","pb-4"),H(e.src,s=n[8].attributes.url)||_(e,"src",s),_(e,"alt",t=n[8].attributes.alternativeText)},m(l,r){q(l,e,r)},p(l,r){r&1&&!H(e.src,s=l[8].attributes.url)&&_(e,"src",s),r&1&&t!==(t=l[8].attributes.alternativeText)&&_(e,"alt",t)},d(l){l&&h(e)}}}function ce(n,e){let s,t,l,r=e[5].attributes.Nom+"",o,i,a,c=e[5].attributes.Programme+"",L,J,P,S=e[5].attributes.Localisation+"",N,U,w,M=e[5].attributes.Surface+"",A,Y,T,Z,B,F,y,K,I,Q,R,u=e[1][e[7]]&&oe(e);function W(p,m){return p[1][p[7]]?je:De}let G=W(e),d=G(e);function _e(){return e[3](e[7])}function me(){return e[4](e[7])}return{key:n,first:null,c(){s=b("div"),t=b("div"),l=b("h2"),o=E(r),i=$(),a=b("p"),L=E(c),J=$(),P=b("p"),N=E(S),U=$(),w=b("p"),A=E(M),Y=E(" m"),T=b("sup"),Z=E("2"),B=$(),u&&u.c(),F=$(),y=b("div"),d.c(),K=$(),this.h()},l(p){s=v(p,"DIV",{class:!0});var m=k(s);t=v(m,"DIV",{class:!0});var g=k(t);l=v(g,"H2",{});var X=k(l);o=D(X,r),X.forEach(h),i=j(g),a=v(g,"P",{class:!0});var x=k(a);L=D(x,c),x.forEach(h),J=j(g),P=v(g,"P",{class:!0});var ee=k(P);N=D(ee,S),ee.forEach(h),U=j(g),w=v(g,"P",{class:!0});var O=k(w);A=D(O,M),Y=D(O," m"),T=v(O,"SUP",{});var te=k(T);Z=D(te,"2"),te.forEach(h),O.forEach(h),B=j(g),u&&u.l(g),g.forEach(h),F=j(m),y=v(m,"DIV",{class:!0});var se=k(y);d.l(se),se.forEach(h),K=j(m),m.forEach(h),this.h()},h(){_(a,"class","font-semibold"),_(P,"class","font-semibold"),_(w,"class","font-semibold"),_(t,"class","p-2 pr-4 sm:w-1/2 xl:w-5/12 prose prose-sm lg:prose-base"),_(y,"class","sm:w-1/2 xl:w-7/12 sm:pr-6"),_(s,"class","pb-24 flex flex-col sm:flex-row justify-around cursor-pointer"),this.first=s},m(p,m){q(p,s,m),f(s,t),f(t,l),f(l,o),f(t,i),f(t,a),f(a,L),f(t,J),f(t,P),f(P,N),f(t,U),f(t,w),f(w,A),f(w,Y),f(w,T),f(T,Z),f(t,B),u&&u.m(t,null),f(s,F),f(s,y),d.m(y,null),f(s,K),I=!0,Q||(R=[le(s,"click",_e),le(s,"keypress",me)],Q=!0)},p(p,m){e=p,(!I||m&1)&&r!==(r=e[5].attributes.Nom+"")&&z(o,r),(!I||m&1)&&c!==(c=e[5].attributes.Programme+"")&&z(L,c),(!I||m&1)&&S!==(S=e[5].attributes.Localisation+"")&&z(N,S),(!I||m&1)&&M!==(M=e[5].attributes.Surface+"")&&z(A,M),e[1][e[7]]?u?(u.p(e,m),m&3&&V(u,1)):(u=oe(e),u.c(),V(u,1),u.m(t,null)):u&&(ue(),C(u,1,1,()=>{u=null}),fe()),G===(G=W(e))&&d?d.p(e,m):(d.d(1),d=G(e),d&&(d.c(),d.m(y,null)))},i(p){I||(V(u),I=!0)},o(p){C(u),I=!1},d(p){p&&h(s),u&&u.d(),d.d(),Q=!1,ve(R)}}}function Se(n){let e,s=[],t=new Map,l,r=n[0];const o=i=>i[5].id;for(let i=0;i<r.length;i+=1){let a=re(n,r,i),c=o(a);t.set(c,s[i]=ce(c,a))}return{c(){e=b("div");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){e=v(i,"DIV",{class:!0});var a=k(e);for(let c=0;c<s.length;c+=1)s[c].l(a);a.forEach(h),this.h()},h(){_(e,"class","my-36")},m(i,a){q(i,e,a);for(let c=0;c<s.length;c+=1)s[c].m(e,null);l=!0},p(i,[a]){a&7&&(r=i[0],ue(),s=be(s,a,o,1,i,r,t,e,ge,ce,null,re),fe())},i(i){if(!l){for(let a=0;a<r.length;a+=1)V(s[a]);l=!0}},o(i){for(let a=0;a<s.length;a+=1)C(s[a]);l=!1},d(i){i&&h(e);for(let a=0;a<s.length;a+=1)s[a].d()}}}function Me(n,e,s){let{projects:t}=e;t=t.map(a=>{let c=a.attributes.Description.slice(0,500);return c=`${c.slice(0,c.lastIndexOf(" "))} ...`,{...a,attributes:{...a.attributes,shortDescription:c}}});const l=t.map(()=>!1),r=a=>{s(1,l[a]=!l[a],l)},o=a=>r(a),i=a=>r(a);return n.$$set=a=>{"projects"in a&&s(0,t=a.projects)},[t,l,r,o,i]}class Le extends he{constructor(e){super(),pe(this,e,Me,Se,de,{projects:0})}}export{Le as P};
