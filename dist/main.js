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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_priceSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/priceSearch */ \"./src/modules/priceSearch.js\");\n\n\n\n\n\n\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_priceSearch__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\n\n\nconst cart = () => {\n\tconst cartBtn = document.getElementById(\"cart\");\n\tconst cartModal = document.querySelector(\".cart\");\n\tconst modalCloseBtn = cartModal.querySelector(\".cart-close\");\n\tconst goodsWrapper = document.querySelector('.goods');\n\tconst cartTotal = cartModal.querySelector('.cart-total > span')\n\tconst sendGoodsBtn = cartModal.querySelector('.cart-confirm')\n\tconst cartBtnCounter = cartBtn.querySelector('.counter')\n\n\tdocument.addEventListener('DOMContentLoaded', () => {\n\t\tconst cartArr = localStorage.getItem('cartArr') ?\n\t\t\tJSON.parse(localStorage.getItem('cartArr')) : [];\n\n\t\tcartBtnCounter.textContent = cartArr.length\n\t})\n\n\tconst openCart = () => {\n\t\tconst cartArr = localStorage.getItem('cartArr') ?\n\t\t\tJSON.parse(localStorage.getItem('cartArr')) : [];\n\n\t\tcartModal.style.display = \"flex\";\n\n\t\t(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cartArr);\n\t\tcartTotal.textContent = cartArr.reduce((sum, item) => {\n\t\t\treturn sum + item.price;\n\t\t}, 0)\n\t\tcartBtnCounter.textContent = cartArr.length\n\t}\n\n\tconst closeCart = () => {\n\t\tcartModal.style.display = \"\";\n\t};\n\n\tcartBtn.addEventListener(\"click\", openCart);\n\tmodalCloseBtn.addEventListener(\"click\", closeCart);\n\tcartModal.addEventListener(\"click\", (evt) => {\n\t\tif (evt.target === cartModal) {\n\t\t\tcloseCart();\n\t\t}\n\t});\n\n\tcartModal.addEventListener(\"mousemove\", (evt) => {\n\t\tif (evt.target === cartModal) {\n\t\t\tcartModal.style.cursor = \"pointer\";\n\t\t} else {\n\t\t\tcartModal.style.cursor = \"\";\n\t\t}\n\t});\n\n\tgoodsWrapper.addEventListener('click', event => {\n\t\tif (event.target.classList.contains('btn-primary')) {\n\t\t\tconst card = event.target.closest('.card');\n\t\t\tconst key = +(card.dataset.key);\n\t\t\tconst goods = JSON.parse(localStorage.getItem('goods'));\n\t\t\tconst cartArr = localStorage.getItem('cartArr') ?\n\t\t\t\tJSON.parse(localStorage.getItem('cartArr')) : [];\n\t\t\tconst goodsItem = goods.find(item => {\n\t\t\t\treturn item.id === key\n\t\t\t});\n\t\t\tcartArr.push(goodsItem);\n\t\t\tlocalStorage.setItem('cartArr', JSON.stringify(cartArr));\n\t\t\tcartBtnCounter.textContent = cartArr.length\n\t\t}\n\t})\n\n\tcartModal.addEventListener('click', event => {\n\t\tif (event.target.classList.contains('btn-primary') && !event.target.classList.contains('cart-confirm')) {\n\t\t\tconst cartArr = localStorage.getItem('cartArr') ?\n\t\t\t\tJSON.parse(localStorage.getItem('cartArr')) : [];\n\t\t\tconst card = event.target.closest('.card');\n\t\t\tconst key = +(card.dataset.key);\n\t\t\tconst index = cartArr.findIndex((cartItem => {\n\t\t\t\treturn cartItem.id === key\n\t\t\t}));\n\n\t\t\tcartArr.splice(index, 1);\n\n\t\t\tlocalStorage.setItem('cartArr', JSON.stringify(cartArr));\n\n\t\t\t(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cartArr);\n\t\t\tcartTotal.textContent = cartArr.reduce((sum, item) => {\n\t\t\t\treturn sum + item.price;\n\t\t\t}, 0)\n\t\t\tcartBtnCounter.textContent = cartArr.length\n\t\t}\n\t});\n\n\tsendGoodsBtn.addEventListener('click', () => {\n\t\t\tconst cartArr = localStorage.getItem('cartArr') ?\n\t\t\t\tJSON.parse(localStorage.getItem('cartArr')) : [];\n\n\t\t\tif (cartArr.length > 0) {\n\t\t\t\t(0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cartArr);\n\n\t\t\t\tlocalStorage.removeItem('cartArr');\n\t\t\t\t(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]);\n\t\t\t\tcartTotal.textContent = 0;\n\t\t\t\tcartBtnCounter.textContent = 0;\n\t\t\t} else {\n\t\t\t\talert('Выберите товар')\n\t\t\t}\n\t\t}\n\t)\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n\n//# sourceURL=webpack://ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst catalog = () => {\n\tconst catalogBtn = document.querySelector(\".catalog-button > button\");\n\tconst catalogModal = document.querySelector(\".catalog\");\n\tconst catalogCategories = document.querySelectorAll(\".catalog-list li\");\n\tlet isOpen = false;\n\n\tconst toggleCatalogModal = () => {\n\t\tisOpen = !isOpen;\n\t\tif (isOpen) {\n\t\t\tcatalogModal.style.display = \"block\";\n\t\t} else {\n\t\t\tcatalogModal.style.display = \"\";\n\t\t}\n\t}\n\n\tcatalogBtn.addEventListener(\"click\", toggleCatalogModal);\n\n\tcatalogCategories.forEach((category) => {\n\t\tcategory.addEventListener(\"click\", () => {\n\t\t\tconst value = category.textContent;\n\t\t\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n\t\t\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.catalogFilter)(data, value));\n\t\t\t});\n\t\t\ttoggleCatalogModal();\n\t\t});\n\t});\n\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n\n//# sourceURL=webpack://ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"catalogFilter\": () => (/* binding */ catalogFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"saleFilter\": () => (/* binding */ saleFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\n\treturn goods.filter((goodsItem) => {\n\t\treturn goodsItem.title.toLowerCase().includes(value.toLowerCase());\n\t});\n};\n\nconst catalogFilter = (goods, value) => {\n\treturn goods.filter((goodsItem) => {\n\t\treturn goodsItem.category.toLowerCase().includes(value.toLowerCase());\n\t});\n};\n\nconst priceFilter = (goods, valueMin, valueMax) => {\n\treturn goods.filter((goodsItem) => {\n\t\tif (valueMax === '' && valueMin === '') {\n\t\t\treturn goodsItem\n\n\t\t} else if (valueMax !== '' && valueMin === '') {\n\t\t\treturn goodsItem.price < +valueMax\n\n\t\t} else if (valueMax === '' && valueMin !== '') {\n\t\t\treturn goodsItem.price > +valueMin\n\n\t\t} else if (valueMax !== '' && valueMin !== '') {\n\t\t\treturn goodsItem.price < +valueMax && goodsItem.price > +valueMin\n\t\t}\n\t});\n};\n\nconst saleFilter = (goods, value) => {\n\tif (value) {\n\t\treturn goods.filter((goodsItem) => {\n\t\t\treturn goodsItem.sale === true;\n\t\t});\n\t} else {\n\t\treturn goods\n\t}\n};\n\n\n//# sourceURL=webpack://ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\n\treturn fetch(\"https://ozon-test-db68c-default-rtdb.firebaseio.com/goods.json\")\n\t\t.then((response) => response.json());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\n\n\nconst load = () => {\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n\n//# sourceURL=webpack://ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (cart) => {\n\tfetch(\"https://ozon-test-db68c-default-rtdb.firebaseio.com/cart.json\", {\n\t\tmethod: \"POST\",\n\t\tbody: JSON.stringify(cart),\n\t\theaders: {\n\t\t\t\"Content-type\": \"application/json; charset=UTF-8\",\n\t\t},\n\t}).then((response) => response.json());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n\n//# sourceURL=webpack://ozon/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/priceSearch.js":
/*!************************************!*\
  !*** ./src/modules/priceSearch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst priceSearch = () => {\n\tconst priceMin = document.getElementById(\"min\");\n\tconst priceMax = document.getElementById(\"max\");\n\tconst saleCheckbox = document.querySelector(\".filter-check_checkbox\");\n\tconst saleCheckmark = document.querySelector(\".filter-check_checkmark\");\n\n\n\tpriceMin.addEventListener(\"input\", () => {\n\t\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n\t\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, saleCheckbox.checked), priceMin.value, priceMax.value));\n\t\t});\n\t});\n\tpriceMax.addEventListener(\"input\", () => {\n\t\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n\t\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, saleCheckbox.checked), priceMin.value, priceMax.value));\n\t\t});\n\t});\n\n\tsaleCheckbox.addEventListener(\"change\", () => {\n\t\tif (saleCheckbox.checked) {\n\t\t\tsaleCheckmark.classList.add('checked')\n\t\t} else {\n\t\t\tsaleCheckmark.classList.remove('checked')\n\t\t}\n\t\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n\t\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, saleCheckbox.checked), priceMin.value, priceMax.value));\n\t\t});\n\t});\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priceSearch);\n\n\n//# sourceURL=webpack://ozon/./src/modules/priceSearch.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\n\tconst cartWrapper = document.querySelector(\".cart-wrapper\");\n\n\tcartWrapper.innerHTML = \"\";\n\n\tif (goods.length === 0) {\n\t\tcartWrapper.insertAdjacentHTML('beforeend', `\n\t\t<div id=\"cart-empty\">\n\t\t\tВаша корзина пока пуста\n\t\t</div>`)\n\t} else {\n\t\tgoods.forEach((goodsItem) => {\n\t\t\tcartWrapper.insertAdjacentHTML(\n\t\t\t\t\"beforeend\",\n\t\t\t\t`\n\t\t\t\t\t\t\t<div class=\"card\" data-key=\"${goodsItem.id}\">\n\t\t\t\t\t\t\t\t<div class=\"card-img-wrapper\">\n\t\t\t\t\t\t\t\t\t${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : \"\"}\n\t\t\t\t\t\t\t\t\t<span class=\"card-img-top\" \n\t\t\t\t\t\t\t\t\tstyle=\"background-image: url('${goodsItem.img}')\"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"card-body justify-content-between\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-price\">${goodsItem.price}</div>\n\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Удалить</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n    \t\t\t`\n\t\t\t);\n\t\t});\n\t}\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n\n//# sourceURL=webpack://ozon/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\n\tconst goodsCard = document.querySelector(\".goods\");\n\n\tlocalStorage.setItem('goods', JSON.stringify(goods))\n\n\tgoodsCard.innerHTML = \"\";\n\n\tgoods.forEach((goodsItem) => {\n\t\tgoodsCard.insertAdjacentHTML(\n\t\t\t\"beforeend\",\n\t\t\t`\n\t\t\t\t\t\t<div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n\t\t\t\t\t\t\t<div class=\"card\" data-key=\"${goodsItem.id}\">\n\t\t\t\t\t\t\t\t<div class=\"card-img-wrapper\">\n\t\t\t\t\t\t\t\t\t${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : \"\"}\n\t\t\t\t\t\t\t\t\t<span class=\"card-img-top\" \n\t\t\t\t\t\t\t\t\tstyle=\"background-image: url('${goodsItem.img}')\"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"card-body justify-content-between\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-price\">${goodsItem.price}</div>\n\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n    \t\t\t`\n\t\t);\n\t});\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n\n//# sourceURL=webpack://ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst search = () => {\n  const searchInput = document.querySelector(\".search-wrapper_input\");\n  const searchBtn = document.querySelector(\".search-btn > button\");\n\n  const searchData = (value) => {\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value));\n    });\n  };\n\n  searchBtn.addEventListener(\"click\", () => {\n    searchData(searchInput.value);\n  });\n\n  searchInput.addEventListener(\"keydown\", (evt) => {\n    const value = evt.target.value;\n    if (evt.keyCode === 13) {\n      searchData(value);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n\n//# sourceURL=webpack://ozon/./src/modules/search.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;