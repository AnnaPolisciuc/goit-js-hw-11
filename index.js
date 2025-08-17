import{a as c,S as g,i}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="51798478-5201f32441bd2af0c91072e2d";c.defaults.baseURL="https://pixabay.com/api/";async function y(s){return(await c.get("",{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery");let L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function w(s){const r=s.map(o=>{const{webformatURL:a,largeImageURL:e,tags:t,likes:n,views:d,comments:p,downloads:f}=o,m=t.split(", ").join(", ");return`<li class="photo-card">
    <a href="${e}">
    <img src="${a}" alt="${t}" />
    </a>
    <div class="photo-info">
        <p>Tags: ${m}</p>
        <p>Likes: ${n}</p>
        <p>Views: ${d}</p>
        <p>Comments: ${p}</p>
        <p>Downloads: ${f}</p>
    </div>
</li>
`}).join("");l.innerHTML=r,L.refresh()}function b(){l.innerHTML=""}function v(){document.querySelector(".loader").classList.remove("hidden")}function q(){document.querySelector(".loader").classList.add("hidden")}const u=document.querySelector(".form"),S=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const r=S.value.trim();if(!r){i.error({title:"Error",message:"The search box is empty. Try again!"});return}try{b(),v();const o=await y(r);if(o.hits.length===0){i.warning({title:"Oops",message:"No images found. Try another query!"});return}console.log(o.hits),w(o.hits)}catch{i.error({title:"Error",message:"Samething went wrong. Please try again later."})}finally{q()}});
//# sourceMappingURL=index.js.map
