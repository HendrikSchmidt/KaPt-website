import{D as f,O as i}from"./shared-c0198a42.js";import{H as h}from"./control-e7f5239e.js";function u(e,t){return new h(e,t)}new TextEncoder;const g="https://kapt-cms-production.up.railway.app/api",m=()=>{const{subscribe:e,set:t}=f("");return{subscribe:e,set:o=>{t(`${o} • KaPt`)},clear:()=>{t("KaPt")}}},L=m(),T={breaks:!0},d=e=>e.replaceAll(" ","_"),$=e=>e.replaceAll("_"," "),P=async(e,t)=>{const r=await(await fetch(`${g}/${e}?pagination[pageSize]=100&locale=all`)).json(),n={en:{},fr:{}};return r.data.forEach(a=>{let c=a.attributes;n[c.locale==="en"?"en":"fr"][d(c[t])]=a.id}),n};P("projects","Nom");const l={home:{en:"",fr:""},philosophy:{en:"philosophy",fr:"philosophie"},projects:{en:"projects",fr:"projets"},contact:{en:"contact",fr:"contact"}},p={};for(const[e,t]of Object.entries(l))for(const[o,r]of Object.entries(t))p[r]=e;const s=(e,t=currentLang)=>{try{return`${i}${t==="en"?"/en/":"/"}${l[e][t]}`}catch{throw u(404,{message:"Not found"})}},j=(e,t)=>{let o=e.replace(i,"").replace("/en","");if(o===""||o==="/")return s("home",t);let r=o.split("/").slice(1),n=r[0],a=s(p[n],t);return r.length>1&&(a+="/"+r[1]),a},y={philosophy:{en:"Philosophy",fr:"Philosophie"},projects:{en:"Projects",fr:"Projets"},contact:{en:"Contact",fr:"Contact"},mail:{en:"Mail",fr:"Email"},phone:{en:"Phone",fr:"Téléphone"},address:{en:"Address",fr:"Adresse"},social:{en:"Social media",fr:"Réseaux sociaux"},name:{en:"Name",fr:"Nom"},location:{en:"Location",fr:"Localisation"},program:{en:"Program",fr:"Programme"},area:{en:"Area",fr:"Surface"},biographies:{en:"Biographies",fr:"Biographies"}},b=(e,t)=>y[e][t],z={getLocalizedSlug:s,getTranslatedSlug:j,getLocalizedString:b};export{$ as d,z as i,T as m,d as s,L as t};
