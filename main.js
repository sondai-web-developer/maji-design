/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/funcoes/abrir-fechar-menu.js":
/*!*****************************************!*\
  !*** ./js/funcoes/abrir-fechar-menu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ abrirFecharMenu)\n/* harmony export */ });\n/* harmony import */ var _clickoutside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickoutside */ \"./js/funcoes/clickoutside.js\");\n\nfunction abrirFecharMenu() {\n  var iconeMenuMobile = document.querySelector('[data-mobile-menu=\"icone\"]');\n  var menuNav = document.querySelector('[data-mobile-menu=\"lista\"]');\n  var eventos = ['touchstart', 'click'];\n  function abrirFechar(event) {\n    var _this = this;\n    event.preventDefault();\n    this.classList.add('transformarIcone');\n    menuNav.classList.add('mostrarItensMenu');\n    (0,_clickoutside__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuNav, ['touchstart', 'click'], function () {\n      _this.classList.remove('transformarIcone');\n      menuNav.classList.remove('mostrarItensMenu');\n    });\n  }\n  eventos.forEach(function (evento) {\n    iconeMenuMobile.addEventListener(evento, abrirFechar);\n  });\n}\n\n//# sourceURL=webpack://maji-design/./js/funcoes/abrir-fechar-menu.js?");

/***/ }),

/***/ "./js/funcoes/clickoutside.js":
/*!************************************!*\
  !*** ./js/funcoes/clickoutside.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOutside)\n/* harmony export */ });\nfunction clickOutside(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        return html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack://maji-design/./js/funcoes/clickoutside.js?");

/***/ }),

/***/ "./js/funcoes/debounce.js":
/*!********************************!*\
  !*** ./js/funcoes/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  var timer;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(function () {\n      callback.apply(void 0, args);\n      timer = null;\n    }, delay);\n  };\n}\n\n//# sourceURL=webpack://maji-design/./js/funcoes/debounce.js?");

/***/ }),

/***/ "./js/funcoes/destacar-item-menu.js":
/*!******************************************!*\
  !*** ./js/funcoes/destacar-item-menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ destacarItemMenu)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce.js */ \"./js/funcoes/debounce.js\");\n\n\nfunction destacarItemMenu() {\n  var sessoes = document.querySelectorAll('[data-sessao]');\n  var eventos = ['scroll', 'resize'];\n  function infosSessoes() {\n    var infosSessoesArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sessoes).map(function (sessao) {\n      var sessaoHeight = sessao.offsetHeight;\n      var sessaoOffsetTop = sessao.offsetTop;\n      var sessaoId = sessao.getAttribute('id');\n      var itemMenu = document.querySelector(\"a[href=\\\"#\".concat(sessaoId, \"\\\"]\"));\n      return {\n        sessaoHeight: sessaoHeight,\n        sessaoOffsetTop: sessaoOffsetTop,\n        sessaoId: sessaoId,\n        itemMenu: itemMenu\n      };\n    });\n    return infosSessoesArray;\n  }\n  function addDestacarItemEvents() {\n    var debouncedDestacarItem = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(destacarItem, 200);\n    eventos.forEach(function (evento) {\n      window.addEventListener(evento, debouncedDestacarItem);\n    });\n  }\n  function destacarItem() {\n    var scrollTop = document.documentElement.scrollTop;\n    var infosSessoesArray = infosSessoes();\n    infosSessoesArray.forEach(function (infosSessao) {\n      if (infosSessao.sessaoOffsetTop - 1 <= scrollTop && infosSessao.sessaoOffsetTop - 1 + infosSessao.sessaoHeight >= scrollTop) {\n        infosSessao.itemMenu.classList.add('destacar');\n      } else {\n        infosSessao.itemMenu.classList.remove('destacar');\n      }\n    });\n  }\n  function init() {\n    addDestacarItemEvents();\n  }\n  init();\n}\n\n//# sourceURL=webpack://maji-design/./js/funcoes/destacar-item-menu.js?");

/***/ }),

/***/ "./js/funcoes/formas-menu.js":
/*!***********************************!*\
  !*** ./js/funcoes/formas-menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formasMenu)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/funcoes/debounce.js\");\n\nfunction formasMenu() {\n  var separador = document.querySelector('[data-separador-menu]');\n  var logo = document.querySelector('[data-scroll-to-top=\"logo\"]');\n  var sessaoServico = document.querySelector('[data-sessao]');\n  var sessaoContatos = document.querySelector('[id=\"contatos\"]');\n  var menuNavUl = document.querySelector('[data-mobile-menu=\"lista\"] ul');\n  var linksInternos = document.querySelectorAll('[data-mobile-menu=\"lista\"] a');\n  var eventos = ['scroll', 'resize'];\n  function formas() {\n    var sessaoServicoTopo = sessaoServico.getBoundingClientRect().top;\n    var scrollTop = document.documentElement.scrollTop;\n    if (sessaoServicoTopo <= 0) {\n      separador.classList.add('mostrarElementosMenu');\n      logo.classList.add('mostrarElementosMenu');\n    } else {\n      separador.classList.remove('mostrarElementosMenu');\n      logo.classList.remove('mostrarElementosMenu');\n    }\n    if (window.innerWidth >= 628 && sessaoServicoTopo <= 0) {\n      menuNavUl.style.justifyContent = 'flex-end';\n      linksInternos.forEach(function (link) {\n        link.style.color = '#04BFBF';\n        link.style.fontWeight = '600';\n      });\n    } else {\n      menuNavUl.style.justifyContent = 'center';\n      linksInternos.forEach(function (link) {\n        link.style.color = '#FFF9F1';\n        link.style.fontWeight = '400';\n      });\n    }\n  }\n  var debouncedFormas = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(formas, 200);\n  eventos.forEach(function (evento) {\n    window.addEventListener(evento, debouncedFormas);\n  });\n}\n\n//# sourceURL=webpack://maji-design/./js/funcoes/formas-menu.js?");

/***/ }),

/***/ "./js/funcoes/scroll-suave.js":
/*!************************************!*\
  !*** ./js/funcoes/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollSuave)\n/* harmony export */ });\nfunction scrollSuave() {\n  var linksInternos = document.querySelectorAll('[data-mobile-menu=\"lista\"] a');\n  var eventos = ['touchstart', 'click'];\n  function scrollToSection(event) {\n    event.preventDefault();\n    var href = event.currentTarget.getAttribute('href');\n    var section = document.querySelector(href);\n    var topo = section.offsetTop;\n    window.scrollTo({\n      top: topo,\n      behavior: 'smooth'\n    });\n  }\n  eventos.forEach(function (evento) {\n    linksInternos.forEach(function (link) {\n      link.addEventListener(evento, scrollToSection);\n    });\n  });\n}\n\n//# sourceURL=webpack://maji-design/./js/funcoes/scroll-suave.js?");

/***/ }),

/***/ "./js/funcoes/scroll-to-top.js":
/*!*************************************!*\
  !*** ./js/funcoes/scroll-to-top.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollToTop)\n/* harmony export */ });\nfunction scrollToTop() {\n  var logos = document.querySelectorAll('[data-scroll-to-top=\"logo\"]');\n  var eventos = ['touchstart', 'click'];\n  function scrollTop(event) {\n    event.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: 'smooth'\n    });\n  }\n  eventos.forEach(function (evento) {\n    logos.forEach(function (logo) {\n      logo.addEventListener(evento, scrollTop);\n    });\n  });\n}\n\n//# sourceURL=webpack://maji-design/./js/funcoes/scroll-to-top.js?");

/***/ }),

/***/ "./js/funcoes/simbolo-inicio.js":
/*!**************************************!*\
  !*** ./js/funcoes/simbolo-inicio.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ simboloInicio)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/funcoes/debounce.js\");\n\nfunction simboloInicio() {\n  var simbolo = document.querySelector('[data-simbolo]');\n  function mudarSimbolo() {\n    if (window.innerWidth > 1000) {\n      simbolo.setAttribute('src', 'imgs/imgs-pag-principal/inicio/desktop_simbolo_maji_inicio.svg');\n    } else {\n      simbolo.setAttribute('src', 'imgs/imgs-pag-principal/inicio/mobile_tablet_simbolo_maji_inicio.svg');\n    }\n  }\n  var debouncedMudarSimbolo = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mudarSimbolo, 200);\n  window.addEventListener('resize', debouncedMudarSimbolo);\n  document.addEventListener('DOMContentLoaded', mudarSimbolo);\n}\n\n//# sourceURL=webpack://maji-design/./js/funcoes/simbolo-inicio.js?");

/***/ }),

/***/ "./js/funcoes/slide-portfolio.js":
/*!***************************************!*\
  !*** ./js/funcoes/slide-portfolio.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ slidePortfolio)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce.js */ \"./js/funcoes/debounce.js\");\n\n\nfunction slidePortfolio() {\n  var wrapper = document.querySelector('[data-slide=\"wrapper\"]');\n  var lista = document.querySelector('[data-slide=\"lista\"]');\n  var distFinalPosition = 0;\n  var distStartX = 0;\n  var distMovement = 0;\n  var distMovePosition = 0;\n  var slideArray;\n  var slideIndex;\n  var slideDestacado = 'slideDestacado';\n  var prevElement = document.querySelector('[data-slide=\"prev\"]');\n  var nextElement = document.querySelector('[data-slide=\"next\"]');\n  var control;\n  var controlArray;\n  var changeEvent = new Event('changeEvent');\n  function transition(active) {\n    lista.style.transition = active ? 'transform .3s' : '';\n  }\n  function moveSlide(distX) {\n    distMovePosition = distX;\n    lista.style.transform = \"translate3d(\".concat(distX, \"px, 0, 0)\");\n  }\n  function updatePosition(clientX) {\n    distMovement = (distStartX - clientX) * 1.6;\n    return distFinalPosition - distMovement;\n  }\n  function onStart(event) {\n    var movetype;\n    if (event.type === 'mousedown') {\n      event.preventDefault();\n      distStartX = event.clientX;\n      movetype = 'mousemove';\n    } else {\n      distStartX = event.changedTouches[0].clientX;\n      movetype = 'touchmove';\n    }\n    wrapper.addEventListener(movetype, onMove);\n    transition(false);\n  }\n  function onMove(event) {\n    var pointerPosition = event.type === 'mousemove' ? event.clientX : event.changedTouches[0].clientX;\n    var finalPosition = updatePosition(pointerPosition);\n    moveSlide(finalPosition);\n  }\n  function onEnd(event) {\n    var movetype = event.type === 'mouseup' ? 'mousemove' : 'touchmove';\n    wrapper.removeEventListener(movetype, onMove);\n    distFinalPosition = distMovePosition;\n    transition(true);\n    changeSlideOnEnd();\n  }\n  function changeSlideOnEnd() {\n    if (distMovement > 120 && slideIndex.next !== undefined) {\n      activeNextSlide();\n    } else if (distMovement < -120 && slideIndex.prev !== undefined) {\n      activePrevSlide();\n    } else {\n      changeSlide(slideIndex.active);\n    }\n  }\n  function addSlideEvents() {\n    wrapper.addEventListener('mousedown', onStart);\n    wrapper.addEventListener('mouseup', onEnd);\n    wrapper.addEventListener('touchstart', onStart);\n    wrapper.addEventListener('touchend', onEnd);\n  }\n\n  // Slide Config\n\n  function slidePosition(lista) {\n    var margin = (wrapper.offsetWidth - lista.offsetWidth) / 2;\n    return -(lista.offsetLeft - margin);\n  }\n  function slidesConfig() {\n    slideArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lista.children).map(function (element) {\n      var position = slidePosition(element);\n      return {\n        position: position,\n        element: element\n      };\n    });\n    return slideArray;\n  }\n  function slidesIndexNav(index) {\n    var last = slideArray.length - 1;\n    slideIndex = {\n      prev: index ? index - 1 : undefined,\n      active: index,\n      next: index === last ? undefined : index + 1\n    };\n  }\n  function changeSlide(index) {\n    var activeSlide = slidesConfig()[index];\n    moveSlide(activeSlide.position);\n    slidesIndexNav(index);\n    distFinalPosition = activeSlide.position;\n    changeActiveClass();\n    wrapper.dispatchEvent(changeEvent);\n  }\n  function changeActiveClass() {\n    slidesConfig().forEach(function (item) {\n      item.element.classList.remove(slideDestacado);\n    });\n    slidesConfig()[slideIndex.active].element.classList.add(slideDestacado);\n  }\n  function activePrevSlide() {\n    if (slideIndex.prev !== undefined) {\n      changeSlide(slideIndex.prev);\n    }\n  }\n  function activeNextSlide() {\n    if (slideIndex.next !== undefined) {\n      changeSlide(slideIndex.next);\n    }\n  }\n  function onResize() {\n    setTimeout(function () {\n      slidesConfig();\n      changeSlide(slideIndex.active);\n    }, 200);\n  }\n  function addResizeEvent() {\n    var debouncedOnResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(onResize, 200);\n    window.addEventListener('load', debouncedOnResize);\n    window.addEventListener('resize', debouncedOnResize);\n  }\n\n  // Navegação\n\n  function addArrowEvent() {\n    prevElement.addEventListener('click', activePrevSlide);\n    nextElement.addEventListener('click', activeNextSlide);\n  }\n\n  // Paginação\n\n  function createControl() {\n    var control = document.createElement('ul');\n    control.dataset.control = 'slide';\n    var slideArray = slidesConfig();\n    slideArray.forEach(function (item, index) {\n      control.innerHTML += \"<li><a href=\\\"#slide\".concat(index + 1, \"\\\">\").concat(index + 1, \"</a></li>\");\n    });\n    wrapper.appendChild(control);\n    return control;\n  }\n  function eventControl(item, index) {\n    item.addEventListener('click', function (event) {\n      event.preventDefault();\n      changeSlide(index);\n    });\n    wrapper.addEventListener('changeEvent', activeControlItem);\n  }\n  function activeControlItem() {\n    controlArray.forEach(function (item) {\n      return item.classList.remove('destacado');\n    });\n    controlArray[slideIndex.active].classList.add('destacado');\n  }\n  function addControl(customControl) {\n    control = document.querySelector(customControl) || createControl();\n    controlArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(control.children);\n    activeControlItem();\n    controlArray.forEach(function (item, index) {\n      eventControl(item, index);\n    });\n  }\n  function init() {\n    transition(true);\n    addSlideEvents();\n    slidesConfig();\n    addResizeEvent();\n    changeSlide(1);\n    addArrowEvent();\n    addControl();\n  }\n  init();\n}\n\n//# sourceURL=webpack://maji-design/./js/funcoes/slide-portfolio.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes_destacar_item_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes/destacar-item-menu.js */ \"./js/funcoes/destacar-item-menu.js\");\n/* harmony import */ var _funcoes_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcoes/scroll-suave.js */ \"./js/funcoes/scroll-suave.js\");\n/* harmony import */ var _funcoes_slide_portfolio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funcoes/slide-portfolio.js */ \"./js/funcoes/slide-portfolio.js\");\n/* harmony import */ var _funcoes_scroll_to_top_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funcoes/scroll-to-top.js */ \"./js/funcoes/scroll-to-top.js\");\n/* harmony import */ var _funcoes_formas_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funcoes/formas-menu.js */ \"./js/funcoes/formas-menu.js\");\n/* harmony import */ var _funcoes_abrir_fechar_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./funcoes/abrir-fechar-menu.js */ \"./js/funcoes/abrir-fechar-menu.js\");\n/* harmony import */ var _funcoes_simbolo_inicio_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./funcoes/simbolo-inicio.js */ \"./js/funcoes/simbolo-inicio.js\");\n\n\n\n\n\n\n\n(0,_funcoes_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nsetTimeout(function () {\n  (0,_funcoes_destacar_item_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_funcoes_slide_portfolio_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}, 800);\n(0,_funcoes_scroll_to_top_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_funcoes_formas_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_funcoes_abrir_fechar_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_funcoes_simbolo_inicio_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack://maji-design/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\r\n  if (len == null || len > arr.length) len = arr.length;\r\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\r\n  return arr2;\r\n}\n\n//# sourceURL=webpack://maji-design/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\r\nfunction _arrayWithoutHoles(arr) {\r\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\r\n}\n\n//# sourceURL=webpack://maji-design/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\r\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\r\n}\n\n//# sourceURL=webpack://maji-design/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\r\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\r\n}\n\n//# sourceURL=webpack://maji-design/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\r\n\r\n\r\n\r\nfunction _toConsumableArray(arr) {\r\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n}\n\n//# sourceURL=webpack://maji-design/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\r\nfunction _unsupportedIterableToArray(o, minLen) {\r\n  if (!o) return;\r\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\r\n  var n = Object.prototype.toString.call(o).slice(8, -1);\r\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\r\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\r\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\r\n}\n\n//# sourceURL=webpack://maji-design/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;