(()=>{"use strict";var e={d:(t,r)=>{for(var l in r)e.o(r,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:r[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{$:()=>a});const t=(e,t)=>"#"+e.replace(/^#/,"").replace(/../g,(e=>("0"+Math.min(255,Math.max(0,parseInt(e,16)+t)).toString(16)).substr(-2))),r=(e,t)=>{let r=document.querySelector(".ogCol"),l=document.querySelector(".newCol");r.style.backgroundColor=e,l.style.backgroundColor=t};let l=document.querySelector(".original_Hex_col"),o=document.querySelector(".changed_Hex_col"),n=document.querySelector(".darkenBtn"),c=document.querySelector(".lightenBtn");document.querySelector(".run").addEventListener("click",(()=>{let e=document.querySelector("#user_Color"),n=document.querySelector("#user_Percentage"),c=e.value.replace(/\s+/g," ").trim(),u=n.value.replace(/\s+/g," ").trim(),s=t(c,parseInt(u)),d=t(c,-1*parseInt(u));s=s.replace(/\s+/g," ").trim(),d=d.replace(/\s+/g," ").trim(),"light"==a?(l.textContent=e.value,o.textContent=s,r(c,s)):(l.textContent=e.value,o.textContent=d,r(c,d))})),[n,c].forEach((e=>{e.addEventListener("click",(()=>{a="lightenBtn"==e.classList.value?"light":"dark","lightenBtn"==e.classList.value?(c.style.border="3px solid #ff99c8",n.style.borderWidth="0px"):(n.style.border="3px solid #ff99c8",c.style.borderWidth="0px")}))}));let a="lighten"})();