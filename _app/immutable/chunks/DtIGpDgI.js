import{H as i,w as l}from"./DPns8vXY.js";function d(t,e){throw new i(t,e)}new TextEncoder;const p="https://kapt-cms-production.up.railway.app/api",u=()=>{const{subscribe:t,set:e}=l("");return{subscribe:t,set:s=>{e(`${s} • KaPt`)},clear:()=>{e("KaPt")}}},f=u(),m={breaks:!0},w=t=>t.replaceAll(" ","_"),r=async(t,e)=>{const c=await(await fetch(`${p}/${t}?pagination[pageSize]=100&locale=all`)).json(),a={en:{},fr:{}};return c.data.forEach(o=>{let n=o.attributes;a[n.locale==="en"?"en":"fr"][w(n[e])]=o.id}),a};r("projects","Nom");r("news","Nom");export{d as e,m,w as s,f as t};
