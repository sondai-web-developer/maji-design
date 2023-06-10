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

/***/ "./js/funcoes/menu.js":
/*!****************************!*\
  !*** ./js/funcoes/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _clickoutside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickoutside */ \"./js/funcoes/clickoutside.js\");\n\nfunction menu() {\n  var iconeMenuMobile = document.querySelector('[data-mobile-menu=\"icone\"]');\n  var menuNav = document.querySelector('[data-mobile-menu=\"lista\"]');\n  var eventos = ['touchstart', 'click'];\n  function abrirFecharMenu(event) {\n    var _this = this;\n    event.preventDefault();\n    this.classList.add('transformarIcone');\n    menuNav.classList.add('mostrarItensMenu');\n    (0,_clickoutside__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuNav, ['touchstart', 'click'], function () {\n      _this.classList.remove('transformarIcone');\n      menuNav.classList.remove('mostrarItensMenu');\n    });\n  }\n  eventos.forEach(function (evento) {\n    iconeMenuMobile.addEventListener(evento, abrirFecharMenu);\n  });\n}\n\n//# sourceURL=webpack://maji-design/./js/funcoes/menu.js?");

/***/ }),

/***/ "./js/funcoes/simbolo-inicio.js":
/*!**************************************!*\
  !*** ./js/funcoes/simbolo-inicio.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ simboloInicio)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/funcoes/debounce.js\");\n\nfunction simboloInicio() {\n  var simbolo = document.querySelector('[data-simbolo]');\n  function mudarSimbolo() {\n    if (window.innerWidth > 1000) {\n      simbolo.setAttribute('src', 'imgs/imgs-pag-principal/desktop_simbolo_maji_inicio.svg');\n    } else if (window.innerWidth > 550) {\n      simbolo.setAttribute('src', 'imgs/imgs-pag-principal/tablet_simbolo_maji_inicio.svg');\n    } else {\n      simbolo.setAttribute('src', 'imgs/imgs-pag-principal/mobile_simbolo_maji_inicio.svg');\n    }\n  }\n  var debouncedMudarSimbolo = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mudarSimbolo, 200);\n  window.addEventListener('resize', debouncedMudarSimbolo);\n  document.addEventListener('DOMContentLoaded', mudarSimbolo);\n}\n\n//# sourceURL=webpack://maji-design/./js/funcoes/simbolo-inicio.js?");

/***/ }),

/***/ "./js/funcoes/viewport-height-inicio.js":
/*!**********************************************!*\
  !*** ./js/funcoes/viewport-height-inicio.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ viewportHeightInicio)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/funcoes/debounce.js\");\n\nfunction viewportHeightInicio() {\n  var inicio = document.querySelector('[data-sessao=\"inicio\"]');\n  function viewportAjuste() {\n    // Altura da viewport multiplicada por 1% para obter um valor para vh\n    var vh = window.innerHeight * 0.01;\n\n    // Configura o valor em --vh na raiz do documento\n    inicio.style.setProperty('--vh', \"\".concat(vh, \"px\"));\n  }\n  var debouncedViewportAjuste = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(viewportAjuste, 200);\n  window.addEventListener('resize', debouncedViewportAjuste);\n  document.addEventListener('DOMContentLoaded', viewportAjuste);\n}\n;\n\n//# sourceURL=webpack://maji-design/./js/funcoes/viewport-height-inicio.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes_viewport_height_inicio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes/viewport-height-inicio.js */ \"./js/funcoes/viewport-height-inicio.js\");\n/* harmony import */ var _funcoes_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcoes/menu.js */ \"./js/funcoes/menu.js\");\n/* harmony import */ var _funcoes_simbolo_inicio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funcoes/simbolo-inicio.js */ \"./js/funcoes/simbolo-inicio.js\");\n\n\n\n(0,_funcoes_viewport_height_inicio_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_funcoes_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_funcoes_simbolo_inicio_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://maji-design/./js/script.js?");

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