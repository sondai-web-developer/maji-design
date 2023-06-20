(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){var n;return function(){for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){e.apply(void 0,r),n=null}),t)}}var o,r,i,a,c,s;!function(){var e,o,r,i,a,c,s=document.querySelector('[data-slide="wrapper"]'),u=document.querySelector('[data-slide="lista"]'),d=0,l=0,m=0,f=0,v="slideDestacado",h=document.querySelector('[data-slide="prev"]'),p=document.querySelector('[data-slide="next"]'),y=new Event("changeEvent");function E(e){u.style.transition=e?"transform .3s":""}function L(e){f=e,u.style.transform="translate3d(".concat(e,"px, 0, 0)")}function g(e){var t;"mousedown"===e.type?(e.preventDefault(),l=e.clientX,t="mousemove"):(l=e.changedTouches[0].clientX,t="touchmove"),s.addEventListener(t,w),E(!1)}function w(e){var t="mousemove"===e.type?e.clientX:e.changedTouches[0].clientX;L(d-(m=1.6*(l-t)))}function b(e){var t="mouseup"===e.type?"mousemove":"touchmove";s.removeEventListener(t,w),d=f,E(!0),m>120&&void 0!==o.next?M():m<-120&&void 0!==o.prev?A():q(o.active)}function S(){return e=t(u.children).map((function(e){var t=function(e){var t=(s.offsetWidth-e.offsetWidth)/2;return-(e.offsetLeft-t)}(e);return{position:t,element:e}}))}function q(t){var n=S()[t];L(n.position),function(t){var n=e.length-1;o={prev:t?t-1:void 0,active:t,next:t===n?void 0:t+1}}(t),d=n.position,S().forEach((function(e){e.element.classList.remove(v)})),S()[o.active].element.classList.add(v),s.dispatchEvent(y)}function A(){void 0!==o.prev&&q(o.prev)}function M(){void 0!==o.next&&q(o.next)}function T(){i.forEach((function(e){return e.classList.remove("destacado")})),i[o.active].classList.add("destacado")}E(!0),s.addEventListener("mousedown",g),s.addEventListener("mouseup",b),s.addEventListener("touchstart",g),s.addEventListener("touchend",b),S(),a=n((function(){setTimeout((function(){S(),q(o.active)}),200)}),200),window.addEventListener("load",a),window.addEventListener("resize",a),q(1),h.addEventListener("click",A),p.addEventListener("click",M),r=document.querySelector(c)||function(){var e=document.createElement("ul");return e.dataset.control="slide",S().forEach((function(t,n){e.innerHTML+='<li><a href="#slide'.concat(n+1,'">').concat(n+1,"</a></li>")})),s.appendChild(e),e}(),i=t(r.children),T(),i.forEach((function(e,t){!function(e,t){e.addEventListener("click",(function(e){e.preventDefault(),q(t)})),s.addEventListener("changeEvent",T)}(e,t)}))}(),function(){var e=document.querySelector('[data-scroll-to-top="logo"]');function t(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}["touchstart","click"].forEach((function(n){e.addEventListener(n,t)}))}(),o=document.querySelector("[data-separador-menu]"),r=document.querySelector('[data-scroll-to-top="logo"]'),i=document.querySelector("[data-sessao]"),a=document.querySelector('[data-mobile-menu="lista"] ul'),c=document.querySelectorAll('[data-mobile-menu="lista"] a'),s=n((function(){i.getBoundingClientRect().top<=0?(o.classList.add("mostrarElementosMenu"),r.classList.add("mostrarElementosMenu"),window.innerWidth>=628&&(a.style.justifyContent="flex-end",c.forEach((function(e){e.style.color="#025959",e.style.fontWeight="600"})))):(o.classList.remove("mostrarElementosMenu"),r.classList.remove("mostrarElementosMenu"),window.innerWidth>=628&&(a.style.justifyContent="center",c.forEach((function(e){e.style.color="#FFF9F1",e.style.fontWeight="400"}))))}),200),window.addEventListener("scroll",s),window.addEventListener("resize",s),function(){var e=document.querySelector('[data-mobile-menu="icone"]'),t=document.querySelector('[data-mobile-menu="lista"]');function n(e){var n=this;e.preventDefault(),this.classList.add("transformarIcone"),t.classList.add("mostrarItensMenu"),function(e,o,r){var i=document.documentElement,a="data-outside";function c(r){e.contains(r.target)||(e.removeAttribute(a),o.forEach((function(e){i.removeEventListener(e,c)})),n.classList.remove("transformarIcone"),t.classList.remove("mostrarItensMenu"))}e.hasAttribute(a)||(o.forEach((function(e){setTimeout((function(){return i.addEventListener(e,c)}))})),e.setAttribute(a,""))}(t,["touchstart","click"])}["touchstart","click"].forEach((function(t){e.addEventListener(t,n)}))}(),function(){var e=document.querySelector("[data-simbolo]");function t(){window.innerWidth>1e3?e.setAttribute("src","imgs/imgs-pag-principal/inicio/desktop_simbolo_maji_inicio.svg"):e.setAttribute("src","imgs/imgs-pag-principal/inicio/mobile_tablet_simbolo_maji_inicio.svg")}var o=n(t,200);window.addEventListener("resize",o),document.addEventListener("DOMContentLoaded",t)}()})();