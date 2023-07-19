(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){var n;return function(){for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];n&&clearTimeout(n),n=setTimeout((function(){e.apply(void 0,i),n=null}),t)}}var o,i,r,a,c,s,u,d,l,f;!function(){var e=document.querySelectorAll('[data-scroll-suave="nav"] a');function t(e){e.preventDefault();var t=e.currentTarget.getAttribute("href"),n=document.querySelector(t).offsetTop;window.scrollTo({top:n,behavior:"smooth"})}e.length&&["touchstart","click"].forEach((function(n){e.forEach((function(e){e.getAttribute("href").startsWith("#")&&e.addEventListener(n,t)}))}))}(),function(){var e=document.querySelector('[data-menu="icone"]'),t=document.querySelector('[data-menu="nav"]'),n=document.querySelector('[data-menu="voltar"]');function o(e){var o=this;e.preventDefault(),this.classList.add("transformarIcone"),t.classList.add("exibirNavMenu"),n&&(n.style.color="#04BFBF"),n&&window.innerWidth>=800&&(n.style.color="#025959"),function(e,i,r){var a=document.documentElement,c="data-outside";function s(r){e.contains(r.target)||(e.removeAttribute(c),i.forEach((function(e){a.removeEventListener(e,s)})),o.classList.remove("transformarIcone"),t.classList.remove("exibirNavMenu"),n&&(n.style.color="#025959"))}e.hasAttribute(c)||(i.forEach((function(e){setTimeout((function(){return a.addEventListener(e,s)}))})),e.setAttribute(c,""))}(t,["touchstart","click"])}e&&t&&["touchstart","click"].forEach((function(t){e.addEventListener(t,o)}))}(),(f=document.querySelectorAll("[data-sessao]")).length&&(l=n((function(){var e=document.documentElement.scrollTop;t(f).map((function(e){var t=e.offsetHeight,n=e.offsetTop,o=e.getAttribute("id");return{sessaoHeight:t,sessaoOffsetTop:n,sessaoId:o,itemMenu:document.querySelector('a[href="#'.concat(o,'"]'))}})).forEach((function(t){t.sessaoOffsetTop-1<=e&&t.sessaoOffsetTop-1+t.sessaoHeight>=e?t.itemMenu.classList.add("destacarItem"):t.itemMenu.classList.remove("destacarItem")}))}),200),["scroll","resize"].forEach((function(e){window.addEventListener(e,l)}))),function(){var e,o,i,r,a,c,s=document.querySelector('[data-slide="wrapper"]'),u=document.querySelector('[data-slide="lista"]'),d=0,l=0,f=0,v=0,m="slideDestacado",h=document.querySelector('[data-slide="prev"]'),p=document.querySelector('[data-slide="next"]'),y=new Event("changeEvent");function E(e){u.style.transition=e?"transform .3s":""}function L(e){v=e,u.style.transform="translate3d(".concat(e,"px, 0, 0)")}function g(e){var t;"mousedown"===e.type?(e.preventDefault(),l=e.clientX,t="mousemove"):(l=e.changedTouches[0].clientX,t="touchmove"),s.addEventListener(t,b),E(!1)}function b(e){var t="mousemove"===e.type?e.clientX:e.changedTouches[0].clientX;L(d-(f=1.6*(l-t)))}function w(e){var t="mouseup"===e.type?"mousemove":"touchmove";s.removeEventListener(t,b),d=v,E(!0),f>120&&void 0!==o.next?A():f<-120&&void 0!==o.prev?T():q(o.active)}function S(){return e=t(u.children).map((function(e){var t=function(e){var t=(s.offsetWidth-e.offsetWidth)/2;return-(e.offsetLeft-t)}(e);return{position:t,element:e}}))}function q(t){var n=S()[t];L(n.position),function(t){var n=e.length-1;o={prev:t?t-1:void 0,active:t,next:t===n?void 0:t+1}}(t),d=n.position,S().forEach((function(e){e.element.classList.remove(m)})),S()[o.active].element.classList.add(m),s.dispatchEvent(y)}function T(){void 0!==o.prev&&q(o.prev)}function A(){void 0!==o.next&&q(o.next)}function x(){r.forEach((function(e){return e.classList.remove("destacado")})),r[o.active].classList.add("destacado")}s&&u&&(E(!0),s.addEventListener("mousedown",g),s.addEventListener("mouseup",w),s.addEventListener("touchstart",g),s.addEventListener("touchend",w),S(),a=n((function(){setTimeout((function(){S(),q(o.active)}),200)}),200),window.addEventListener("load",a),window.addEventListener("resize",a),q(1),h.addEventListener("click",T),p.addEventListener("click",A),i=document.querySelector(c)||function(){var e=document.createElement("ul");return e.dataset.control="slide",S().forEach((function(t,n){e.innerHTML+='<li><a href="#slide'.concat(n+1,'">').concat(n+1,"</a></li>")})),s.appendChild(e),e}(),r=t(i.children),x(),r.forEach((function(e,t){!function(e,t){e.addEventListener("click",(function(e){e.preventDefault(),q(t)})),s.addEventListener("changeEvent",x)}(e,t)})))}(),function(){var e=document.querySelectorAll('[data-scroll-suave="logo"]');function t(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}e.length&&["touchstart","click"].forEach((function(n){e.forEach((function(e){e.addEventListener(n,t)}))}))}(),i=document.querySelector('[data-menu="separador"]'),r=document.querySelector('[data-menu="logo"]'),a=document.querySelector("[data-sessao]"),c=document.querySelector('[data-menu="nav"] ul'),s=document.querySelectorAll('[data-menu="nav"] a'),u=document.querySelector('[data-menu="cabecalho"]'),d="exibirSeparadorELogo",a&&c&&(o=n((function(){var e=a.getBoundingClientRect().top;e<=0?(i.classList.add(d),r.classList.add(d)):(i.classList.remove(d),r.classList.remove(d)),window.innerWidth>=628&&e<=0?(c.style.justifyContent="flex-end",s.forEach((function(e){e.style.color="#025959",e.style.fontWeight="600"}))):(c.style.justifyContent="center",s.forEach((function(e){e.style.color="#FFF9F1",e.style.fontWeight="400"}))),u.style.background=e<=0?"#FFF9F1":"transparent"}),200),["scroll","resize"].forEach((function(e){window.addEventListener(e,o)}))),function(){var e,t=document.querySelector("[data-simbolo]");function o(){window.innerWidth>1e3?t.setAttribute("src","imgs/pag-principal/inicio/desktop_simbolo_maji_inicio.svg"):t.setAttribute("src","imgs/pag-principal/inicio/mobile_tablet_simbolo_maji_inicio.svg")}t&&(e=n(o,200),window.addEventListener("resize",e),document.addEventListener("DOMContentLoaded",o))}(),function(){var e,o,i,r,a=document.querySelectorAll("[data-apresentacao] li"),c=document.querySelector('[data-visualizador="btnFechar"]'),s=document.querySelector('[data-visualizador="visualizador"]'),u=document.querySelector('[data-visualizador="wrapper"]'),d=document.querySelector('[data-visualizador="lista"]'),l=0,f=0,v=0,m=0,h=new Event("changeEvent"),p=document.querySelector('[data-visualizador="prev"]'),y=document.querySelector('[data-visualizador="next"]');function E(e){d.style.transition=e?"transform .3s":""}function L(e){m=e,d.style.transform="translate3d(".concat(e,"px, 0, 0)")}function g(e){var t;"mousedown"===e.type?(e.preventDefault(),f=e.clientX,t="mousemove"):(f=e.changedTouches[0].clientX,t="touchmove"),u.addEventListener(t,b),E(!1)}function b(e){var t="mousemove"===e.type?e.clientX:e.changedTouches[0].clientX;L(l-(v=1.6*(f-t)))}function w(e){var t="mouseup"===e.type?"mousemove":"touchmove";u.removeEventListener(t,b),l=m,E(!0),v>120&&void 0!==o.next?A():v<-120&&void 0!==o.prev?T():q(o.active)}function S(){return e=t(d.children).map((function(e){var t=function(e){var t=(u.offsetWidth-e.offsetWidth)/2;return-(e.offsetLeft-t)}(e);return{position:t,element:e}}))}function q(t){var n=S()[t];L(n.position),function(t){var n=e.length-1;o={prev:t?t-1:void 0,active:t,next:t===n?void 0:t+1}}(t),l=n.position,S().forEach((function(e){setTimeout((function(){e.element.style.opacity="0"}),270)})),setTimeout((function(){S()[o.active].element.style.opacity="1"}),270),u.dispatchEvent(h)}function T(){void 0!==o.prev&&q(o.prev)}function A(){void 0!==o.next&&q(o.next)}function x(){setTimeout((function(){S(),q(o.active)}),200)}function z(e){var o;s.classList.add("exibirVisualizador"),setTimeout((function(){d.style.transition=".3s",d.style.opacity="1"}),300),q(+e.currentTarget.getAttribute("id")),u.addEventListener("mousedown",g),u.addEventListener("mouseup",w),u.addEventListener("touchstart",g),u.addEventListener("touchend",w),o=n(x,200),window.addEventListener("resize",o),p.addEventListener("click",T),y.addEventListener("click",A),i=function(){var e=document.createElement("ul");return e.setAttribute("id","paginacao_visualizador"),e.dataset.visualizador="paginacao",S().forEach((function(t,n){e.innerHTML+='<li><a href="#slide'.concat(n+1,'">').concat(n+1,"</a></li>")})),u.appendChild(e),e}(),r=t(i.children),W(),r.forEach((function(e,t){!function(e,t){e.addEventListener("click",(function(e){e.preventDefault(),q(t)})),u.addEventListener("changeEvent",W)}(e,t)}))}function k(){s.classList.remove("exibirVisualizador"),D(),setTimeout((function(){d.style.transition=".3s",d.style.opacity="0"}),300)}function F(e){e.target===this&&(s.classList.remove("exibirVisualizador"),D(),setTimeout((function(){d.style.transition=".3s",d.style.opacity="0"}),300))}function W(){r.forEach((function(e){return e.classList.remove("destacarPaginacao")})),r[o.active].classList.add("destacarPaginacao")}function D(){i.remove()}a&&d&&(E(!0),a.forEach((function(e,t){e.setAttribute("id","".concat(t))})),["touchend","click"].forEach((function(e){a.forEach((function(t){t.addEventListener(e,z)})),c.addEventListener(e,k),s.addEventListener(e,F)})),S())}(),document.querySelectorAll('[data-menu="nav"] a').forEach((function(e){e.href===window.location.href&&e.classList.add("destacarProjetoAtual")}))})();