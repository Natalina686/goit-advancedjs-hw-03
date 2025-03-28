import{S as y,i as s}from"./assets/vendor-Dg3uDB0e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="49581187-5d65d3ee1f3e1ec6c0e5655f7",p="https://pixabay.com/api/";async function g(n){const o=`${p}?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(o);if(!t.ok)throw new Error("Failed to fetch images");return(await t.json()).hits}catch(t){return console.error("Error fetching images:",t),[]}}const c=document.querySelector(".gallery"),h=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){if(l(),!n.length)return;const o=n.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:i,comments:f,downloads:d})=>`
      <li class="gallery__item">
        <a href="${a}">
          <img src="${t}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>❤️ Likes:</b> ${r}</p>
          <p><b>👁 Views:</b> ${i}</p>
          <p><b>💬 Comments:</b> ${f}</p>
          <p><b>⬇️ Downloads:</b> ${d}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function l(){c.innerHTML=""}const w=document.querySelector(".form"),u=document.querySelector(".loader");document.querySelector(".gallery");w.addEventListener("submit",async n=>{n.preventDefault();const o=n.target.elements.query.value.trim();if(!o){s.warning({title:"Warning",message:"Please enter a search query!"});return}l(),L();try{const t=await g(o);t.length===0?s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):b(t)}catch{s.error({title:"Error",message:"Something went wrong. Please try again later!"})}finally{q()}});function L(){u.style.display="block"}function q(){u.style.display="none"}
//# sourceMappingURL=index.js.map
