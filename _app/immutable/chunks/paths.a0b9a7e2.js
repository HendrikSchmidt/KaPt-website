import{L as b,s as p}from"./index.2dde3162.js";const e=[];function g(i,a=b){let o;const n=new Set;function r(t){if(p(i,t)&&(i=t,o)){const c=!e.length;for(const s of n)s[1](),e.push(s,i);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(i))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(o=a(r)||b),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:l,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_1c0poid)==null?void 0:f.base)??"/KaPt-website";var u;const q=((u=globalThis.__sveltekit_1c0poid)==null?void 0:u.assets)??d;export{q as a,d as b,g as w};
