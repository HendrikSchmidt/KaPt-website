import{K as c,s as h}from"./index.3c7b00ab.js";const t=[];function d(i,u=c){let n;const o=new Set;function r(e){if(h(i,e)&&(i=e,n)){const b=!t.length;for(const s of o)s[1](),t.push(s,i);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function l(e){r(e(i))}function _(e,b=c){const s=[e,b];return o.add(s),o.size===1&&(n=u(r)||c),e(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:_}}var a;const p=((a=globalThis.__sveltekit_17aker)==null?void 0:a.base)??"/KaPt-website";var f;const k=((f=globalThis.__sveltekit_17aker)==null?void 0:f.assets)??p;export{k as a,p as b,d as w};
