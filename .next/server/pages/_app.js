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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useWeb3\": () => (/* binding */ useWeb3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./components/providers/web3/utils.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\nconst Web3Provider = ({ children  })=>{\n    const { 0: web3Api , 1: setWeb3Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initWeb3 = ()=>{\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);\n            setWeb3Api({\n                ethereum: window.ethereum,\n                provider,\n                contract: null,\n                isLoading: false\n            });\n        };\n        initWeb3();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: web3Api,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ERICK\\\\Documents\\\\Github\\\\nft-market\\\\components\\\\providers\\\\web3\\\\index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\nfunction useWeb3() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Web3Provider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwRjtBQUNsQztBQUN4QjtBQUVoQyxNQUFNTSxXQUFXLGlCQUFHTixvREFBYSxDQUFZSSwwREFBa0IsRUFBRSxDQUFDO0FBS2xFLE1BQU1HLFlBQVksR0FBNkIsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUMvRCxNQUFNLEtBQUNDLE9BQU8sTUFBRUMsVUFBVSxNQUFJUCwrQ0FBUSxDQUFZQywwREFBa0IsRUFBRSxDQUFDO0lBRXZFRixnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNUyxRQUFRLEdBQUcsSUFBTTtZQUNyQixNQUFNQyxRQUFRLEdBQUcsSUFBSVAsaUVBQTZCLENBQUNTLE1BQU0sQ0FBQ0MsUUFBUSxDQUFRO1lBRTFFTCxVQUFVLENBQUM7Z0JBQ1RLLFFBQVEsRUFBRUQsTUFBTSxDQUFDQyxRQUFRO2dCQUN6QkgsUUFBUTtnQkFDUkksUUFBUSxFQUFFLElBQUk7Z0JBQ2RDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUM7U0FDSDtRQUVETixRQUFRLEVBQUUsQ0FBQztLQUNaLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0wsV0FBVyxDQUFDWSxRQUFRO1FBQUNDLEtBQUssRUFBRVYsT0FBTztrQkFDakNELFFBQVE7Ozs7O2lCQUNZLENBQ3ZCO0NBQ0g7QUFFTSxTQUFTWSxPQUFPLEdBQUc7SUFDeEIsT0FBT25CLGlEQUFVLENBQUNLLFdBQVcsQ0FBQyxDQUFDO0NBQ2hDO0FBRUQsaUVBQWVDLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1tYXJrZXQvLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LnRzeD83NzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFdlYjNTdGF0ZSwgY3JlYXRlRGVmYXVsdFN0YXRlIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuY29uc3QgV2ViM0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PFdlYjNTdGF0ZT4oY3JlYXRlRGVmYXVsdFN0YXRlKCkpO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IFdlYjNQcm92aWRlcjogRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt3ZWIzQXBpLCBzZXRXZWIzQXBpXSA9IHVzZVN0YXRlPFdlYjNTdGF0ZT4oY3JlYXRlRGVmYXVsdFN0YXRlKCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW5pdFdlYjMgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSBhcyBhbnkpO1xyXG5cclxuICAgICAgc2V0V2ViM0FwaSh7XHJcbiAgICAgICAgZXRoZXJldW06IHdpbmRvdy5ldGhlcmV1bSxcclxuICAgICAgICBwcm92aWRlcixcclxuICAgICAgICBjb250cmFjdDogbnVsbCxcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFdlYjMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V2ViM0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3dlYjNBcGl9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1dlYjNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlV2ViMygpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChXZWIzQ29udGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYjNQcm92aWRlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVEZWZhdWx0U3RhdGUiLCJldGhlcnMiLCJXZWIzQ29udGV4dCIsIldlYjNQcm92aWRlciIsImNoaWxkcmVuIiwid2ViM0FwaSIsInNldFdlYjNBcGkiLCJpbml0V2ViMyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwid2luZG93IiwiZXRoZXJldW0iLCJjb250cmFjdCIsImlzTG9hZGluZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VXZWIzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/providers/web3/index.tsx\n");

/***/ }),

/***/ "./components/providers/web3/utils.ts":
/*!********************************************!*\
  !*** ./components/providers/web3/utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultState\": () => (/* binding */ createDefaultState)\n/* harmony export */ });\nconst createDefaultState = ()=>{\n    return {\n        ethereum: null,\n        provider: null,\n        contract: null,\n        isLoading: true\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL3V0aWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFtQk8sTUFBTUEsa0JBQWtCLEdBQUcsSUFBTTtJQUNwQyxPQUFPO1FBQ0hDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFNBQVMsRUFBRSxJQUFJO0tBQ2xCO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0Ly4vY29tcG9uZW50cy9wcm92aWRlcnMvd2ViMy91dGlscy50cz8yMDRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyYWN0LCBwcm92aWRlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIgfSBmcm9tIFwiQG1ldGFtYXNrL3Byb3ZpZGVyc1wiO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgZXRoZXJldW06IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBXZWIzUGFyYW1zID0ge1xyXG4gIGV0aGVyZXVtOiBNZXRhTWFza0lucGFnZVByb3ZpZGVyIHwgbnVsbDtcclxuICBwcm92aWRlcjogcHJvdmlkZXJzLldlYjNQcm92aWRlciB8IG51bGw7XHJcbiAgY29udHJhY3Q6IENvbnRyYWN0IHwgbnVsbDtcclxufTtcclxuIFxyXG5leHBvcnQgdHlwZSBXZWIzU3RhdGUgPSB7XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG59ICYgV2ViM1BhcmFtcztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVEZWZhdWx0U3RhdGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGV0aGVyZXVtOiBudWxsLFxyXG4gICAgICAgIHByb3ZpZGVyOiBudWxsLFxyXG4gICAgICAgIGNvbnRyYWN0OiBudWxsLFxyXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZURlZmF1bHRTdGF0ZSIsImV0aGVyZXVtIiwicHJvdmlkZXIiLCJjb250cmFjdCIsImlzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/providers/web3/utils.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @providers */ \"./components/providers/index.tsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers__WEBPACK_IMPORTED_MODULE_2__.Web3Provider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ERICK\\\\Documents\\\\Github\\\\nft-market\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ERICK\\\\Documents\\\\Github\\\\nft-market\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVXO0FBRTFDLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDSCxvREFBWTtrQkFDWCw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNmLENBQ2Y7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tIFwiQHByb3ZpZGVyc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2ViM1Byb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1dlYjNQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIldlYjNQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

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