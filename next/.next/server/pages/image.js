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
exports.id = "pages/image";
exports.ids = ["pages/image"];
exports.modules = {

/***/ "./src/pages/image.js":
/*!****************************!*\
  !*** ./src/pages/image.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Page = ()=>{\n    const path = \"plank00000000.jpg\";\n    const [points, setPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(`/data/${path}.json`).then((response)=>response.json()).then((data)=>setPoints(data));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                position: \"relative\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: `/${path}`\n                }, void 0, false, {\n                    fileName: \"/Users/cindy/Cindywritescode/yogi-snap/next/src/pages/image.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Points: \",\n                        points.keypoints?.length || 0\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cindy/Cindywritescode/yogi-snap/next/src/pages/image.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined),\n                points.keypoints?.map((point, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            position: \"absolute\",\n                            top: point.y,\n                            left: point.x,\n                            width: \"5px\",\n                            height: \"5px\",\n                            background: \"red\"\n                        }\n                    }, i, false, {\n                        fileName: \"/Users/cindy/Cindywritescode/yogi-snap/next/src/pages/image.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cindy/Cindywritescode/yogi-snap/next/src/pages/image.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/cindy/Cindywritescode/yogi-snap/next/src/pages/image.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW1hZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBRW5ELE1BQU1HLE9BQU8sSUFBTTtJQUNqQixNQUFNQyxPQUFPO0lBQ2IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDLENBQUM7SUFDdENELGdEQUFTQSxDQUFDLElBQU07UUFDZE0sTUFBTSxDQUFDLE1BQU0sRUFBRUgsS0FBSyxLQUFLLENBQUMsRUFDdkJJLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkYsSUFBSSxDQUFDRyxDQUFBQSxPQUFRTCxVQUFVSztJQUM1QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNBO1lBQUlDLE9BQU87Z0JBQUVDLFVBQVU7WUFBVzs7OEJBQ2pDLDhEQUFDQztvQkFBSUMsS0FBSyxDQUFDLENBQUMsRUFBRVosS0FBSyxDQUFDOzs7Ozs7OEJBQ3BCLDhEQUFDUTs7d0JBQUk7d0JBQVNQLE9BQU9ZLFNBQVMsRUFBRUMsVUFBVTs7Ozs7OztnQkFDekNiLE9BQU9ZLFNBQVMsRUFBRUUsSUFBSSxDQUFDQyxPQUFPQyxrQkFDN0IsOERBQUNUO3dCQUVDQyxPQUFPOzRCQUNMQyxVQUFVOzRCQUNWUSxLQUFLRixNQUFNRyxDQUFDOzRCQUNaQyxNQUFNSixNQUFNSyxDQUFDOzRCQUNiQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxZQUFZO3dCQUNkO3VCQVJLUDs7Ozs7Ozs7Ozs7Ozs7OztBQWNqQjtBQUVBLGlFQUFlbEIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3lvZ2ktc25hcC8uL3NyYy9wYWdlcy9pbWFnZS5qcz8yNTE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCBwYXRoID0gJ3BsYW5rMDAwMDAwMDAuanBnJ1xuICBjb25zdCBbcG9pbnRzLCBzZXRQb2ludHNdID0gdXNlU3RhdGUoe30pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKGAvZGF0YS8ke3BhdGh9Lmpzb25gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiBzZXRQb2ludHMoZGF0YSkpXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICA8aW1nIHNyYz17YC8ke3BhdGh9YH0vPlxuICAgICAgICA8ZGl2PlBvaW50czoge3BvaW50cy5rZXlwb2ludHM/Lmxlbmd0aCB8fCAwfTwvZGl2PlxuICAgICAgICB7cG9pbnRzLmtleXBvaW50cz8ubWFwKChwb2ludCwgaSkgPT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgdG9wOiBwb2ludC55LFxuICAgICAgICAgICAgICBsZWZ0OiBwb2ludC54LFxuICAgICAgICAgICAgICB3aWR0aDogJzVweCcsXG4gICAgICAgICAgICAgIGhlaWdodDogJzVweCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZWQnXG4gICAgICAgICAgICB9fS8+XG4gICAgICAgICl9XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJwYXRoIiwicG9pbnRzIiwic2V0UG9pbnRzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImRpdiIsInN0eWxlIiwicG9zaXRpb24iLCJpbWciLCJzcmMiLCJrZXlwb2ludHMiLCJsZW5ndGgiLCJtYXAiLCJwb2ludCIsImkiLCJ0b3AiLCJ5IiwibGVmdCIsIngiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/image.js\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/image.js"));
module.exports = __webpack_exports__;

})();