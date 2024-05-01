"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 211:
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 601);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 314);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    font: 18px 'Helvetica Neue', Helvetica, Arial;\n    background-color: #f5f5f5;\n    color: #4d4d4d;\n    font-weight: 300;\n\n    \n}\n\n.header-image {\n    width: 100%;\n    object-fit: cover;\n    height: 200px;\n}\n\nh1 {\n    font-weight: 200;\n    text-align: center;\n    font-size: 80px;\n    margin: 50px 0;\n}\n\n.todolist-wrapper {\n    width: 80%;\n    margin: 0 auto;\n    background-color: #fff;\n    box-shadow: 3px 4px 5px 0px rgba(0,0,0,0.75);\n}\n\n.todolist-wrapper .new-todo {\n    margin: 0;\n    width: 100%;\n    font-family: 'Helvetica Neue';\n    font-size: 24px;\n    font-weight: 300;\n    padding: 16px;\n    border: none;\n    border-bottom: 1px solid #ededed;\n    outline: none;\n}\n\n.todolist-wrapper .todo-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.todolist-wrapper .todo-list li {\n    display: flex;\n    align-items: center;\n    font-size: 20px;\n    border-bottom: 1px solid #ededed;\n}\n\n.todolist-wrapper .todo-list li .custom-checkbox {\n    position: relative;\n    width: 30px;\n    height: 30px;\n    margin-left: 15px;\n    border: 1px solid #777;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.todolist-wrapper .todo-list li .custom-checkbox img {\n    display: none;\n}\n\n.todolist-wrapper .todo-list li .custom-checkbox .real-checkbox {\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n    opacity: 0;\n    position: absolute;\n    top: -3px;\n    left: -5px;\n}\n\n.todolist-wrapper .todo-list li.completed .custom-checkbox img {\n    display: block;\n}\n\n.todolist-wrapper .todo-list li label {\n    flex: 1;\n    word-break: break-all;\n    white-space: pre-wrap;\n    margin: 0;\n    padding: 15px;\n}\n\n.todolist-wrapper .todo-list li .delete {\n    width: 30px;\n    height: 30px;\n    margin-right: 10px;\n    cursor: pointer;\n    visibility: hidden;\n    /* background: url(\"../images/delete.png\") center no-repeat; */\n    background-size: 90%;\n}\n\n.todolist-wrapper .todo-list li:hover .delete {\n    visibility: visible;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://app/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ 314:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ 601:
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ 888:
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 72);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 825);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 659);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 56);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 540);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 113);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ 211);\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://app/./src/css/index.css?");

/***/ }),

/***/ 72:
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ 659:
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ 540:
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ 56:
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ 825:
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ 113:
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ 552:
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   getAllTodos: () => (/* binding */ getAllTodos),\n/* harmony export */   removeTodo: () => (/* binding */ removeTodo),\n/* harmony export */   updateTodo: () => (/* binding */ updateTodo)\n/* harmony export */ });\n/* harmony import */ var _todos_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todos.json */ 682);\n\n\nfunction getAllTodos() {\n    return _todos_json__WEBPACK_IMPORTED_MODULE_0__\n}\n\nfunction addTodo(todo) {\n    _todos_json__WEBPACK_IMPORTED_MODULE_0__.push(todo)\n}\n\nfunction removeTodo(id) {\n    _todos_json__WEBPACK_IMPORTED_MODULE_0__ = _todos_json__WEBPACK_IMPORTED_MODULE_0__.filter(function (item) {\n        return item.id !== id\n    })\n}\n\nfunction updateTodo(id, completed) {\n    const itemIndex = _todos_json__WEBPACK_IMPORTED_MODULE_0__.findIndex(function (value) {\n        return value.id === id\n    })\n    _todos_json__WEBPACK_IMPORTED_MODULE_0__[itemIndex].completed = completed\n}\n\n\n//# sourceURL=webpack://app/./src/js/data.js?");

/***/ }),

/***/ 426:
/*!**********************************!*\
  !*** ./src/js/event-handlers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newTodoEventHandler: () => (/* binding */ newTodoEventHandler),\n/* harmony export */   onLoadEventHandler: () => (/* binding */ onLoadEventHandler),\n/* harmony export */   removeTodoEventHandler: () => (/* binding */ removeTodoEventHandler),\n/* harmony export */   toggleTodoEventListener: () => (/* binding */ toggleTodoEventListener)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ 354);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ 552);\n\n\n\n\nfunction onLoadEventHandler() {\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTodos)((0,_data__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)())\n}\n\nfunction newTodoEventHandler(event) {\n    let text = event.target.value\n    ;(0,_data__WEBPACK_IMPORTED_MODULE_1__.addTodo)({\n        id: Date.now(),\n        text: text,\n        completed: false\n    })\n    ;(0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTodos)((0,_data__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)())\n    ;(0,_ui__WEBPACK_IMPORTED_MODULE_0__.clearNewTodoInput)()\n}\n\nfunction removeTodoEventHandler(event) {\n    const id = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.getTodoId)(event.target)\n    ;(0,_data__WEBPACK_IMPORTED_MODULE_1__.removeTodo)(id)\n    ;(0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTodos)((0,_data__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)())\n}\n\nfunction toggleTodoEventListener(event) {\n    const id = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.getTodoId)(event.target)\n    const isCompleted = event.target.checked\n    ;(0,_data__WEBPACK_IMPORTED_MODULE_1__.updateTodo)(id, isCompleted)\n    ;(0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTodos)((0,_data__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)())\n}\n\n//# sourceURL=webpack://app/./src/js/event-handlers.js?");

/***/ }),

/***/ 98:
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ 888);\n/* harmony import */ var _event_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-handlers */ 426);\n\n\n\n\nwindow.addEventListener('load', _event_handlers__WEBPACK_IMPORTED_MODULE_1__.onLoadEventHandler)\ndocument.addEventListener('change', function (event) {\n    if (event.target.classList.contains('new-todo')) {\n        (0,_event_handlers__WEBPACK_IMPORTED_MODULE_1__.newTodoEventHandler)(event)\n    }\n})\ndocument.addEventListener('click', function (event) {\n    if (event.target.classList.contains('delete')) {\n        (0,_event_handlers__WEBPACK_IMPORTED_MODULE_1__.removeTodoEventHandler)(event)\n    }\n    if (event.target.classList.contains('real-checkbox')) {\n        (0,_event_handlers__WEBPACK_IMPORTED_MODULE_1__.toggleTodoEventListener)(event)\n    }\n})\n\n//# sourceURL=webpack://app/./src/js/index.js?");

/***/ }),

/***/ 354:
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearNewTodoInput: () => (/* binding */ clearNewTodoInput),\n/* harmony export */   getTodoId: () => (/* binding */ getTodoId),\n/* harmony export */   renderTodos: () => (/* binding */ renderTodos)\n/* harmony export */ });\nfunction renderTodos(todos) {\n    const renderedItemArray = todos.map(function (todo) {\n        const className = todo.completed ? 'completed' : ''\n        const completionClass = todo.completed ? 'checked' : ''\n        return `\n            <li data-id=\"${todo.id}\" class=\"${className}\">\n                <span class=\"custom-checkbox\">\n                    <img class=\"check\" src=\"./images/checkmark.svg\" width=\"22\" height=\"22\"></img>\n                    <input class=\"real-checkbox\" type=\"checkbox\" ${completionClass} />\n                </span>\n                <label>${todo.text}</label>\n                <span class=\"delete\"></span>\n            </li>\n        `\n    })\n    document.querySelector('.todo-list').innerHTML = renderedItemArray.join('')\n}\n\nfunction clearNewTodoInput() {\n    document.querySelector('.new-todo').value = ''\n}\n\nfunction getTodoId(element) {\n    return parseInt(\n        element.dataset.id\n        || element.parentNode.dataset.id\n        || element.parentNode.parentNode.dataset.id\n    , 10)\n}\n\n//# sourceURL=webpack://app/./src/js/ui.js?");

/***/ }),

/***/ 682:
/*!************************!*\
  !*** ./src/todos.json ***!
  \************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"id\":1560865205317,\"text\":\"Buy eggs\",\"completed\":false},{\"id\":1560865205318,\"text\":\"Do 15 min exercise\",\"completed\":false},{\"id\":1560865205319,\"text\":\"Think about puppies\",\"completed\":false}]');\n\n//# sourceURL=webpack://app/./src/todos.json?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(98));
/******/ }
]);