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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/providers/index.tsx":
/*!****************************************!*\
  !*** ./components/providers/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Web3Provider\": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./components/providers/web3/index.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0Ly4vY29tcG9uZW50cy9wcm92aWRlcnMvaW5kZXgudHN4Pzg0OTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBXZWIzUHJvdmlkZXJ9IGZyb20gXCIuL3dlYjNcIjsiXSwibmFtZXMiOlsiZGVmYXVsdCIsIldlYjNQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/providers/index.tsx\n");

/***/ }),

/***/ "./components/providers/web3/index.tsx":
/*!*********************************************!*\
  !*** ./components/providers/web3/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useWeb3\": () => (/* binding */ useWeb3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./components/providers/web3/utils.ts\");\n\n\n\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\nconst Web3Provider = ({ children  })=>{\n    const { 0: web3Api , 1: setWeb3Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initWeb3 = ()=>{\n            setWeb3Api({\n                ethereum: window.ethereum,\n                provider: null,\n                contract: null,\n                isLoading: false\n            });\n        };\n        initWeb3();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: web3Api,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/erick/Documentos/Github/nft-market/components/providers/web3/index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\nfunction useWeb3() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Web3Provider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEY7QUFDbEM7QUFFeEQsTUFBTUssV0FBVyxpQkFBR0wsb0RBQWEsQ0FBWUksMERBQWtCLEVBQUUsQ0FBQztBQUtsRSxNQUFNRSxZQUFZLEdBQTZCLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDL0QsTUFBTSxLQUFDQyxPQUFPLE1BQUVDLFVBQVUsTUFBSU4sK0NBQVEsQ0FBWUMsMERBQWtCLEVBQUUsQ0FBQztJQUV2RUYsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTVEsUUFBUSxHQUFHLElBQU07WUFDckJELFVBQVUsQ0FBQztnQkFDVEUsUUFBUSxFQUFFQyxNQUFNLENBQUNELFFBQVE7Z0JBQ3pCRSxRQUFRLEVBQUUsSUFBSTtnQkFDZEMsUUFBUSxFQUFFLElBQUk7Z0JBQ2RDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUM7U0FDSDtRQUVETCxRQUFRLEVBQUUsQ0FBQztLQUNaLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0wsV0FBVyxDQUFDVyxRQUFRO1FBQUNDLEtBQUssRUFBRVQsT0FBTztrQkFDakNELFFBQVE7Ozs7O2lCQUNZLENBQ3ZCO0NBQ0g7QUFFTSxTQUFTVyxPQUFPLEdBQUc7SUFDeEIsT0FBT2pCLGlEQUFVLENBQUNJLFdBQVcsQ0FBQyxDQUFDO0NBQ2hDO0FBRUQsaUVBQWVDLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1tYXJrZXQvLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LnRzeD83NzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBXZWIzU3RhdGUsIGNyZWF0ZURlZmF1bHRTdGF0ZSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IFdlYjNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxXZWIzU3RhdGU+KGNyZWF0ZURlZmF1bHRTdGF0ZSgpKTtcbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IFdlYjNQcm92aWRlcjogRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbd2ViM0FwaSwgc2V0V2ViM0FwaV0gPSB1c2VTdGF0ZTxXZWIzU3RhdGU+KGNyZWF0ZURlZmF1bHRTdGF0ZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGluaXRXZWIzID0gKCkgPT4ge1xuICAgICAgc2V0V2ViM0FwaSh7XG4gICAgICAgIGV0aGVyZXVtOiB3aW5kb3cuZXRoZXJldW0sXG4gICAgICAgIHByb3ZpZGVyOiBudWxsLFxuICAgICAgICBjb250cmFjdDogbnVsbCxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpbml0V2ViMygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V2ViM0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3dlYjNBcGl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvV2ViM0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlV2ViMygpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoV2ViM0NvbnRleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXZWIzUHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZURlZmF1bHRTdGF0ZSIsIldlYjNDb250ZXh0IiwiV2ViM1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ3ZWIzQXBpIiwic2V0V2ViM0FwaSIsImluaXRXZWIzIiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJwcm92aWRlciIsImNvbnRyYWN0IiwiaXNMb2FkaW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVdlYjMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/providers/web3/index.tsx\n");

/***/ }),

/***/ "./components/providers/web3/utils.ts":
/*!********************************************!*\
  !*** ./components/providers/web3/utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultState\": () => (/* binding */ createDefaultState)\n/* harmony export */ });\nconst createDefaultState = ()=>{\n    return {\n        ethereum: null,\n        provider: null,\n        contract: null,\n        isLoading: true\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL3V0aWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFtQk8sTUFBTUEsa0JBQWtCLEdBQUcsSUFBTTtJQUNwQyxPQUFPO1FBQ0hDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFNBQVMsRUFBRSxJQUFJO0tBQ2xCO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0Ly4vY29tcG9uZW50cy9wcm92aWRlcnMvd2ViMy91dGlscy50cz8yMDRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyYWN0LCBwcm92aWRlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBNZXRhTWFza0lucGFnZVByb3ZpZGVyIH0gZnJvbSBcIkBtZXRhbWFzay9wcm92aWRlcnNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBldGhlcmV1bTogTWV0YU1hc2tJbnBhZ2VQcm92aWRlcjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBXZWIzUGFyYW1zID0ge1xuICBldGhlcmV1bTogTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB8IG51bGw7XG4gIHByb3ZpZGVyOiBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyIHwgbnVsbDtcbiAgY29udHJhY3Q6IENvbnRyYWN0IHwgbnVsbDtcbn07XG5cbmV4cG9ydCB0eXBlIFdlYjNTdGF0ZSA9IHtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xufSAmIFdlYjNQYXJhbXM7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWZhdWx0U3RhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZXRoZXJldW06IG51bGwsXG4gICAgICAgIHByb3ZpZGVyOiBudWxsLFxuICAgICAgICBjb250cmFjdDogbnVsbCxcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgfVxufSJdLCJuYW1lcyI6WyJjcmVhdGVEZWZhdWx0U3RhdGUiLCJldGhlcmV1bSIsInByb3ZpZGVyIiwiY29udHJhY3QiLCJpc0xvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/providers/web3/utils.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @providers */ \"./components/providers/index.tsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers__WEBPACK_IMPORTED_MODULE_2__.Web3Provider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/erick/Documentos/Github/nft-market/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/erick/Documentos/Github/nft-market/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVXO0FBRTFDLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDSCxvREFBWTtrQkFDWCw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNmLENBQ2Y7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gXCJAcHJvdmlkZXJzXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8V2ViM1Byb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvV2ViM1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJXZWIzUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();