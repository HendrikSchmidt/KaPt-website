import{L as b,s as h}from"./index.2dde3162.js";const e=[];function q(n,a=b){let i;const o=new Set;function r(t){if(h(n,t)&&(n=t,i)){const c=!e.length;for(const s of o)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(n))}function _(t,c=b){const s=[t,c];return o.add(s),o.size===1&&(i=a(r)||b),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:l,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_1jxcqhn)==null?void 0:f.base)??"/KaPt-website";var u;const d=((u=globalThis.__sveltekit_1jxcqhn)==null?void 0:u.assets)??p;export{d as a,p as b,q as w};