/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info__ = __webpack_require__(2);
/*
 * @Descripttion: 使用commonJs的模块化规范
 * @Author: ling
 * @Date: 2019-11-26 16:25:31
 * @LastEditors: ling
 * @LastEditTime: 2019-11-26 16:39:58
 */
const { add, mul } = __webpack_require__(1)

console.log(add(10, 20))
console.log(mul(10, 20))

/*
 * @Descripttion: 使用ES6的模块化规范
 * @Author: ling
 * @Date: 2019-11-26 16:25:31
 * @LastEditors: ling
 * @LastEditTime: 2019-11-26 16:36:23
 */

console.log(`${__WEBPACK_IMPORTED_MODULE_0__info__["c" /* name */]}-${__WEBPACK_IMPORTED_MODULE_0__info__["a" /* age */]}-${__WEBPACK_IMPORTED_MODULE_0__info__["b" /* height */]}`);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
 * @Descripttion: 模块化开发demo
 * @Author: ling
 * @Date: 2019-11-26 16:25:45
 * @LastEditors: ling
 * @LastEditTime: 2019-11-26 16:27:54
 */
function add (num1, num2) {
  return num1 + num2
}

function mul (num1, num2) {
  return num1 * num2
}

module.exports = {
  add,
  mul
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * @Descripttion: ES6模块化开发
 * @Author: ling
 * @Date: 2019-11-26 16:36:59
 * @LastEditors: ling
 * @LastEditTime: 2019-11-26 16:38:14
 */
const name = 'andy'
/* harmony export (immutable) */ __webpack_exports__["c"] = name;

const age = 18
/* harmony export (immutable) */ __webpack_exports__["a"] = age;

const height = 2.0
/* harmony export (immutable) */ __webpack_exports__["b"] = height;


/***/ })
/******/ ]);