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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before{\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n:root{\\n  --header-color: #b980aa;\\n}\\n\\nbody{\\n  background-image: linear-gradient(to bottom, #b980aa, #f7a9c3);\\n  position: relative;\\n  min-height: 100vh;\\n  padding-bottom: 1px;\\n}\\n\\n.header{\\n  display: flex ;\\n  align-items: center;\\n  justify-content: center;\\n  height: 100px;\\n  position: relative;\\n  font-size: 1.5em;\\n}\\n\\n.logo{\\n  height: 80px;\\n  position: absolute;\\n  left: 50px;\\n}\\n\\n/* home page */\\n\\n.pages{\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  font-size: 1.4rem;\\n  background-color:#f7a9c3;\\n  height: 50px;\\n  position: relative;\\n}\\n\\n.section{\\n  cursor: pointer;\\n  position: relative;\\n}\\n\\n.section::before {\\n  content: '';\\n  position: absolute;\\n  bottom: 0;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  width: 0;\\n  height: 2px;\\n  background-color: black;\\n  transition: 0.15s ease-in-out;\\n}\\n\\n.section:hover::before {\\n  width: 100%;\\n}\\n\\n\\n\\n\\n.home-page-body{\\n  display: flex;\\n  margin: 50px;\\n  gap: 100px;\\n  font-size: 1.3em;\\n}\\n\\n.home-img{\\n  height: 540px;\\n  width: auto;\\n  box-shadow: 0px 0px 5px 1px;\\n}\\n\\np::first-line{\\n  font-weight: bold;\\n  font-size: 1.1em;\\n}\\n\\n/* menu */\\n\\n.menu-grid{\\n  display: grid;\\n  grid-template-columns: repeat(2, minmax(380px, 1fr));\\n  gap: 50px;\\n  margin: 30px 50px;\\n}\\n\\n.menu-items{\\n  height: 265px;\\n  /* width: 500px; */\\n  /* background-color: #80b9b1;\\n  border-radius: 5px;\\n  box-shadow: 0px 0px 3px 2px; */\\n  margin: auto;\\n  display: flex;\\n  gap: 20px;\\n}\\n\\n.menu-img{\\n  height: inherit;\\n  border-radius: 5px;\\n  box-shadow: 0px 0px 3px 1px;\\n}\\n\\n/* contact page */\\n\\n.contact-container{\\n  display: grid;\\n  grid-template-columns: 80%;\\n  margin: 50px 50%;\\n  transform: translateX(-50%);\\n  width: 60%;\\n  background: rgba(0, 0, 0, 0.7);\\n  border-radius: 15px;\\n\\n}\\n.contacts {\\n  background-color: rgba(0, 0, 0, 0.1);\\n  display: flex;\\n  margin: 50px 100px;\\n  color: azure;\\n  gap: 30px;\\n  width: 100%;\\n  border-radius: 5px;\\n  /* border: 5px solid #980536; */\\n}\\n\\n.contacts > p{\\n  padding: 5px;\\n}\\n\\n.contact-img{\\n  width: 30%;\\n  border-radius: 5px;\\n}\\n\\n/* footer */\\n\\n.footer {\\n  padding: 10px;\\n  position: absolute;\\n  bottom: 0;\\n  right: 0;\\n}\\n\\n.footer img {\\n  width: 30px;\\n  height: 30px;\\n  transition: transform 0.2s ease-in-out;\\n}\\n .footer img:hover{\\n  transform: scale(1.2);\\n }\\n\\n/* selected nav */\\n.active{\\n  pointer-events: none;\\n  color: #f7a9c3;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_Loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-Loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-Loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_Loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_Loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_Loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-Loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-Loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_Loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_Loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_Loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-Loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-Loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_Loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_Loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_Loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-Loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-Loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_Loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_Loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_Loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-Loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-Loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_Loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_Loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_Loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-Loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-Loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_Loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_Loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_Loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_Loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_Loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_Loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_Loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_Loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-Loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-Loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-Loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-Loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-Loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-Loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-Loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-Loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-Loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-Loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-Loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-Loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-Loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-Loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-Loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-Loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-Loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-Loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactClicked\": () => (/* binding */ contactClicked)\n/* harmony export */ });\n/* harmony import */ var _structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure */ \"./src/structure.js\");\n/* harmony import */ var _assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/cat-logo.png */ \"./assets/cat-logo.png\");\n\n\n\nfunction contactClicked(){\n    let container= (0,_structure__WEBPACK_IMPORTED_MODULE_0__.createDiv)('contact-container')\n    let contactOne= (0,_structure__WEBPACK_IMPORTED_MODULE_0__.makeCard)('contacts','contact-img',_assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_1__, 'Lorem ipsum dolor sit amet consectetur, lore adipisicing elit. Delectus natus nihil ab magnam doloremque laborum sit ipsam consequatur eius dicta!',container)\n    let contactTwo= (0,_structure__WEBPACK_IMPORTED_MODULE_0__.makeCard)('contacts','contact-img',_assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_1__, 'Lorem ipsum dolor sit amet consectetur, lore adipisicing elit. Delectus natus nihil ab magnam doloremque laborum sit ipsam consequatur eius dicta!',container)\n    let contactThree= (0,_structure__WEBPACK_IMPORTED_MODULE_0__.makeCard)('contacts','contact-img',_assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_1__, 'Lorem ipsum dolor sit amet consectetur, lore adipisicing elit. Delectus natus nihil ab magnam doloremque laborum sit ipsam consequatur eius dicta!',container)\n    let contactFour= (0,_structure__WEBPACK_IMPORTED_MODULE_0__.makeCard)('contacts','contact-img',_assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_1__, 'Lorem ipsum dolor sit amet consectetur, lore adipisicing elit. Delectus natus nihil ab magnam doloremque laborum sit ipsam consequatur eius dicta!',container)\n    return container\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeClicked\": () => (/* binding */ homeClicked)\n/* harmony export */ });\n/* harmony import */ var _structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure */ \"./src/structure.js\");\n/* harmony import */ var _assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/cat-logo.png */ \"./assets/cat-logo.png\");\n\n\nfunction homeClicked(){\n    let container= (0,_structure__WEBPACK_IMPORTED_MODULE_0__.createDiv)('home-page-body')\n    let homeImg= (0,_structure__WEBPACK_IMPORTED_MODULE_0__.addImg)(_assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_1__,'home-img', container)\n    let paragraph= (0,_structure__WEBPACK_IMPORTED_MODULE_0__.addParagraph)('Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi ipsum consequuntur exercitationem recusandae.Laboriosam in delectus dolores, esse ipsum tempora velit a tenetur eligendi, magni aliquid fuga ex voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci quae earum aliquam minus eligendi deleniti quam iusto voluptatem similique cumque est deserunt sint non iste, minima et aperiam doloremque vitae tempora quo nisi sed fugit quisquam! Consequuntur sunt impedit, consectetur deleniti voluptates architecto aut fuga quasi mollitia voluptatem similique quod assumenda voluptas fugiat eum vel iste modi illum quisquam vero laudantium nam reiciendis! Quos esse neque minus distinctio rem ratione! Mollitia omnis consequatur nihil excepturi itaque voluptatum molestiae esse recusandae sit inventore soluta magni vero explicabo deserunt dicta placeat beatae, labore molestias sequi iure odit corporis nam? Fuga, beatae.&emsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aperiam laboriosam sint cumque non nobis assumenda veritatis laudantium, velit quaerat voluptate illum id labore! Debitis incidunt neque quod excepturi porro.', container)\n    return container\n}\n\n\n    \n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure */ \"./src/structure.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/cat-logo.png */ \"./assets/cat-logo.png\");\n\n\n\n\n\n\nlet pageContainer= (0,_structure__WEBPACK_IMPORTED_MODULE_1__.createDiv)('container')\nfunction pageHeader(){\n    let header= (0,_structure__WEBPACK_IMPORTED_MODULE_1__.createDiv)('header');\n    let heading= document.createElement('h1');\n    heading.classList.add('Title')\n\n    ;(0,_structure__WEBPACK_IMPORTED_MODULE_1__.addImg)(_assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_5__,'logo',header);\n\n    heading.textContent='AI Cat Cafe';\n    header.appendChild(heading)\n    return header\n\n}\n\nfunction navBar(){\n    let navContainer= (0,_structure__WEBPACK_IMPORTED_MODULE_1__.createDiv)('pages')\n\n    const homeBtn= (0,_structure__WEBPACK_IMPORTED_MODULE_1__.createDiv)('section', 'Home')\n    navContainer.appendChild(homeBtn)\n\n    homeBtn.addEventListener('click', (e)=>{\n        if(e.target.classList.contains('active')) return\n        setActiveBtn(homeBtn)\n        let homePage= (0,_home__WEBPACK_IMPORTED_MODULE_2__.homeClicked)()\n        pageContainer.innerHTML=''\n        pageContainer.appendChild(homePage)\n    })\n\n\n    const menuBtn= (0,_structure__WEBPACK_IMPORTED_MODULE_1__.createDiv)('section', 'Menu');\n    navContainer.appendChild(menuBtn);\n\n    menuBtn.addEventListener('click',(e)=>{\n        if(e.target.classList.contains('active')) return\n        setActiveBtn(menuBtn)\n        let menuPage= (0,_menu__WEBPACK_IMPORTED_MODULE_3__.menuClicked)()\n        pageContainer.innerHTML=''\n        pageContainer.appendChild(menuPage)\n    })\n\n\n\n    const contactBtn= (0,_structure__WEBPACK_IMPORTED_MODULE_1__.createDiv)('section', 'Contact');\n    navContainer.appendChild(contactBtn);\n    contactBtn.addEventListener('click', (e)=>{\n        if(e.target.classList.contains('active')) return\n        setActiveBtn(contactBtn)\n        let contactPage= (0,_contact__WEBPACK_IMPORTED_MODULE_4__.contactClicked)()\n        pageContainer.innerHTML=''\n        pageContainer.appendChild(contactPage)\n    })\n\n    return navContainer\n}\n\nfunction setActiveBtn(activeBtn){\n    let activeBtns= document.querySelectorAll('.section')\n    activeBtn.classList.add('active')\n    activeBtns.forEach((button)=>{\n        if(button!==this){\n            button.classList.remove('active')\n        }\n    })\n}\n\n\nfunction addGitHubLink() {\n    const footer = (0,_structure__WEBPACK_IMPORTED_MODULE_1__.createDiv)('footer');\n    const gitHubLink = document.createElement('a');\n    gitHubLink.href = 'https://github.com/zaifa-1/restaurant-page';\n    gitHubLink.target = '_blank'; // open the link in a new tab\n    const gitHubLogo = document.createElement('img');\n    gitHubLogo.classList.add('footer-logo')\n    gitHubLogo.src = 'https://github.githubassets.com/images/modules/logos_page/Octocat.png';\n    gitHubLogo.alt = 'GitHub';\n    gitHubLink.appendChild(gitHubLogo);\n    footer.appendChild(gitHubLink);\n    return footer\n  }\n\n\n\nfunction launchWebpage(){\n    pageContainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.homeClicked)())\n    document.body.appendChild(pageHeader())\n    document.body.appendChild(navBar())\n    document.body.appendChild(pageContainer)\n    document.body.appendChild(addGitHubLink())\n}\n\nlaunchWebpage()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuClicked\": () => (/* binding */ menuClicked)\n/* harmony export */ });\n/* harmony import */ var _structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure */ \"./src/structure.js\");\n/* harmony import */ var _assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/cat-logo.png */ \"./assets/cat-logo.png\");\n\n\n\n\nfunction menuClicked(){\n  let container=(0,_structure__WEBPACK_IMPORTED_MODULE_0__.createDiv)('menu-grid')\n  let menuItem1= (0,_structure__WEBPACK_IMPORTED_MODULE_0__.makeCard)('menu-items','menu-img',_assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_1__,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ut. Mollitia tenetur quae quaerat alias ipsum. Asperiores natus ducimus, quas fuga odio cumque quaerat nesciunt accusamus autem atque fugit provident.',container)\n  let menuItem2= (0,_structure__WEBPACK_IMPORTED_MODULE_0__.makeCard)('menu-items','menu-img',_assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_1__,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ut. Mollitia tenetur quae quaerat alias ipsum. Asperiores natus ducimus, quas fuga odio cumque quaerat nesciunt accusamus autem atque fugit provident.',container)\n  let menuItem3= (0,_structure__WEBPACK_IMPORTED_MODULE_0__.makeCard)('menu-items','menu-img',_assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_1__,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ut. Mollitia tenetur quae quaerat alias ipsum. Asperiores natus ducimus, quas fuga odio cumque quaerat nesciunt accusamus autem atque fugit provident.',container)\n  let menuItem4= (0,_structure__WEBPACK_IMPORTED_MODULE_0__.makeCard)('menu-items','menu-img',_assets_cat_logo_png__WEBPACK_IMPORTED_MODULE_1__,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ut. Mollitia tenetur quae quaerat alias ipsum. Asperiores natus ducimus, quas fuga odio cumque quaerat nesciunt accusamus autem atque fugit provident.',container)\n return container\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/structure.js":
/*!**************************!*\
  !*** ./src/structure.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addImg\": () => (/* binding */ addImg),\n/* harmony export */   \"addParagraph\": () => (/* binding */ addParagraph),\n/* harmony export */   \"createDiv\": () => (/* binding */ createDiv),\n/* harmony export */   \"makeCard\": () => (/* binding */ makeCard)\n/* harmony export */ });\nfunction createDiv(className, textContent){\n    const div= document.createElement('div');\n    div.classList.add(className);\n    div.textContent= textContent;\n    return div\n}\n\nfunction makeCard(cardClass, imgClass, imgName, paragraph, parent){\n    let item= createDiv(cardClass)\n    let img= addImg(imgName, imgClass, item)\n    let description= addParagraph(paragraph,item)\n    parent.appendChild(item)\n  }\n\nfunction addImg(name, className, parent){\n    const myIcon= new Image();\n    myIcon.src= name\n    myIcon.alt= name\n    myIcon.classList.add(className)\n    parent.appendChild(myIcon)\n    return myIcon\n}\n\nfunction addParagraph(paragraph, parent){\n    let a= document.createElement('p')\n    a.textContent= paragraph\n    parent.appendChild(a)\n    return a\n}\n\n//# sourceURL=webpack://restaurant-page/./src/structure.js?");

/***/ }),

/***/ "./assets/cat-logo.png":
/*!*****************************!*\
  !*** ./assets/cat-logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a279c7feef42cad0244e.png\";\n\n//# sourceURL=webpack://restaurant-page/./assets/cat-logo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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