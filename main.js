(()=>{"use strict";function i(i,e){var t;return function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];t&&clearTimeout(t),t=setTimeout((function(){i.apply(void 0,o),t=null}),e)}}var e,t,n,o,r,s;e=document.getElementById("inicio"),t=i((function(){var i=.01*window.innerHeight;e.style.setProperty("--vh","".concat(i,"px"))}),200),window.addEventListener("resize",t),n=document.querySelector('[data-mobile-menu="icone"]'),o=document.querySelector('[data-mobile-menu="lista"]'),n.addEventListener("click",(function(){n.classList.toggle("transformarIcone"),o.classList.toggle("mostrarItensMenu")})),r=document.querySelector("[data-simbolo]"),s=i((function(){window.innerWidth>1e3?r.setAttribute("src","imgs/imgs-pag-principal/desktop_simbolo_maji_inicio.svg"):window.innerWidth>550?r.setAttribute("src","imgs/imgs-pag-principal/tablet_simbolo_maji_inicio.svg"):r.setAttribute("src","imgs/imgs-pag-principal/mobile_simbolo_maji_inicio.svg")}),200),window.addEventListener("resize",s)})();