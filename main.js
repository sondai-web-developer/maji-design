(()=>{"use strict";!function(){var t=document.querySelector('[data-mobile-menu="icone"]'),i=document.querySelector('[data-mobile-menu="lista"]');function e(t){var e=this;t.preventDefault(),this.classList.add("transformarIcone"),i.classList.add("mostrarItensMenu"),function(t,n,o){var r=document.documentElement,s="data-outside";function a(o){t.contains(o.target)||(t.removeAttribute(s),n.forEach((function(t){r.removeEventListener(t,a)})),e.classList.remove("transformarIcone"),i.classList.remove("mostrarItensMenu"))}t.hasAttribute(s)||(n.forEach((function(t){setTimeout((function(){return r.addEventListener(t,a)}))})),t.setAttribute(s,""))}(i,["touchstart","click"])}["touchstart","click"].forEach((function(i){t.addEventListener(i,e)}))}(),function(){var t=document.querySelector("[data-simbolo]");function i(){window.innerWidth>1e3?t.setAttribute("src","imgs/imgs-pag-principal/inicio/desktop_simbolo_maji_inicio.svg"):window.innerWidth>550?t.setAttribute("src","imgs/imgs-pag-principal/inicio/tablet_simbolo_maji_inicio.svg"):t.setAttribute("src","imgs/imgs-pag-principal/inicio/mobile_simbolo_maji_inicio.svg")}var e,n,o=(e=i,200,function(){for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];n&&clearTimeout(n),n=setTimeout((function(){e.apply(void 0,i),n=null}),200)});window.addEventListener("resize",o),document.addEventListener("DOMContentLoaded",i)}()})();