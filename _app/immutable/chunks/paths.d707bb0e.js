import{K as c,s as h}from"./index.3c7b00ab.js";const e=[];function w(i,a=c){let n;const o=new Set;function b(t){if(h(i,t)&&(i=t,n)){const r=!e.length;for(const s of o)s[1](),e.push(s,i);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){b(t(i))}function _(t,r=c){const s=[t,r];return o.add(s),o.size===1&&(n=a(b)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:b,update:l,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_wlj9bu)==null?void 0:u.base)??"/KaPt-website";var f;const d=((f=globalThis.__sveltekit_wlj9bu)==null?void 0:f.assets)??p;export{d as a,p as b,w};
