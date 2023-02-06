"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/image/[path]";
exports.ids = ["pages/image/[path]"];
exports.modules = {

/***/ "./src/pages/image/[path].js":
/*!***********************************!*\
  !*** ./src/pages/image/[path].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Page = ()=>{\n    const { query , isReady  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [points, setPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { path  } = query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!isReady) return;\n        fetch(`/data/${path}.json`).then((response)=>response.json()).then((data)=>setPoints(data));\n    }, [\n        path,\n        isReady\n    ]);\n    return isReady && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                position: \"relative\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: `/${path}`\n                }, void 0, false, {\n                    fileName: \"/Users/cindy/Cindywritescode/yogi-snap/next/src/pages/image/[path].js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Points: \",\n                        points.keypoints?.length || 0\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cindy/Cindywritescode/yogi-snap/next/src/pages/image/[path].js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                points.keypoints?.map((point, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            position: \"absolute\",\n                            top: point.y,\n                            left: point.x,\n                            width: \"5px\",\n                            height: \"5px\",\n                            background: \"red\"\n                        }\n                    }, i, false, {\n                        fileName: \"/Users/cindy/Cindywritescode/yogi-snap/next/src/pages/image/[path].js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cindy/Cindywritescode/yogi-snap/next/src/pages/image/[path].js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/cindy/Cindywritescode/yogi-snap/next/src/pages/image/[path].js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW1hZ2UvW3BhdGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFFeEMsTUFBTUksT0FBTyxJQUFNO0lBQ2pCLE1BQU0sRUFBQ0MsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR0gsc0RBQVNBO0lBQ25DLE1BQU0sQ0FBQ0ksUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sRUFBRU8sS0FBSSxFQUFFLEdBQUdKO0lBRWpCSixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxDQUFDSyxTQUFTO1FBQ2RJLE1BQU0sQ0FBQyxNQUFNLEVBQUVELEtBQUssS0FBSyxDQUFDLEVBQ3ZCRSxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUU4sVUFBVU07SUFDNUIsR0FBRztRQUFDTDtRQUFNSDtLQUFRO0lBRWxCLE9BQU9BLHlCQUNMLDhEQUFDUztrQkFDQyw0RUFBQ0E7WUFBSUMsT0FBTztnQkFBRUMsVUFBVTtZQUFXOzs4QkFDakMsOERBQUNDO29CQUFJQyxLQUFLLENBQUMsQ0FBQyxFQUFFVixLQUFLLENBQUM7Ozs7Ozs4QkFDcEIsOERBQUNNOzt3QkFBSTt3QkFBU1IsT0FBT2EsU0FBUyxFQUFFQyxVQUFVOzs7Ozs7O2dCQUN6Q2QsT0FBT2EsU0FBUyxFQUFFRSxJQUFJLENBQUNDLE9BQU9DLGtCQUM3Qiw4REFBQ1Q7d0JBRUNDLE9BQU87NEJBQ0xDLFVBQVU7NEJBQ1ZRLEtBQUtGLE1BQU1HLENBQUM7NEJBQ1pDLE1BQU1KLE1BQU1LLENBQUM7NEJBQ2JDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLFlBQVk7d0JBQ2Q7dUJBUktQOzs7Ozs7Ozs7Ozs7Ozs7O0FBY2pCO0FBRUEsaUVBQWVwQixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW9naS1zbmFwLy4vc3JjL3BhZ2VzL2ltYWdlL1twYXRoXS5qcz9kZmMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7cXVlcnksIGlzUmVhZHkgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbcG9pbnRzLCBzZXRQb2ludHNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCB7IHBhdGggfSA9IHF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1JlYWR5KSByZXR1cm47XG4gICAgZmV0Y2goYC9kYXRhLyR7cGF0aH0uanNvbmApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldFBvaW50cyhkYXRhKSk7XG4gIH0sIFtwYXRoLCBpc1JlYWR5XSk7XG5cbiAgcmV0dXJuIGlzUmVhZHkgJiYgKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICA8aW1nIHNyYz17YC8ke3BhdGh9YH0vPlxuICAgICAgICA8ZGl2PlBvaW50czoge3BvaW50cy5rZXlwb2ludHM/Lmxlbmd0aCB8fCAwfTwvZGl2PlxuICAgICAgICB7cG9pbnRzLmtleXBvaW50cz8ubWFwKChwb2ludCwgaSkgPT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgdG9wOiBwb2ludC55LFxuICAgICAgICAgICAgICBsZWZ0OiBwb2ludC54LFxuICAgICAgICAgICAgICB3aWR0aDogJzVweCcsXG4gICAgICAgICAgICAgIGhlaWdodDogJzVweCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZWQnXG4gICAgICAgICAgICB9fS8+XG4gICAgICAgICl9XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlBhZ2UiLCJxdWVyeSIsImlzUmVhZHkiLCJwb2ludHMiLCJzZXRQb2ludHMiLCJwYXRoIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImRpdiIsInN0eWxlIiwicG9zaXRpb24iLCJpbWciLCJzcmMiLCJrZXlwb2ludHMiLCJsZW5ndGgiLCJtYXAiLCJwb2ludCIsImkiLCJ0b3AiLCJ5IiwibGVmdCIsIngiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/image/[path].js\n");

/***/ }),

/***/ "react":
/*!*******************************************!*\
  !*** external "next/dist/compiled/react" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!***********************************************************!*\
  !*** external "next/dist/compiled/react/jsx-dev-runtime" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-dev-runtime");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/image/[path].js"));
module.exports = __webpack_exports__;

})();