(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div"),n=document.createElement("img");return n.src="images/about-image.jpg",n.alt="An image of chef",t.appendChild(e("Best pizza in your country")),t.appendChild(e("Made with passion since 1908")),t.appendChild(n),t.appendChild(e("Order online or visit us!")),t}())};function n(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=e;const c=document.createElement("p");c.textContent=t;const o=document.createElement("img");return o.src=`images/pizzas/${e.toLowerCase()}.png`,o.alt=`An image of ${e} pizza`,n.appendChild(o),n.appendChild(a),n.appendChild(c),n}function a(){const e=document.createElement("header");e.classList.add("header");const a=document.createElement("h1");return a.textContent="Mozzafiato",e.appendChild(a),e.appendChild(function(){const e=document.createElement("nav");e.classList.add("nav");const a=document.createElement("button");a.classList.add("button"),a.textContent="Home",a.addEventListener("click",(()=>{c(a),t()}));const o=document.createElement("button");return o.classList.add("button"),o.textContent="Menu",o.addEventListener("click",(()=>{c(o),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(n("Salsiccia","Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil")),e.appendChild(n("Salsiccia","Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil")),e}())}()})),e.appendChild(a),e.appendChild(o),e}()),e}function c(e){document.querySelectorAll(".nav .button").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.getElementById("content");e.appendChild(a()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");return t.textContent="Copyright © 2021 michalosman",e.appendChild(t),e}()),t(),document.querySelector("button").classList.add("active")}()})();