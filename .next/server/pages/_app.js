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

/***/ "./components/hooks/web3/setupHooks.ts":
/*!*********************************************!*\
  !*** ./components/hooks/web3/setupHooks.ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupHooks\": () => (/* binding */ setupHooks)\n/* harmony export */ });\n/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAccount */ \"./components/hooks/web3/useAccount.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useAccount__WEBPACK_IMPORTED_MODULE_0__]);\n_useAccount__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst setupHooks = (deps)=>{\n    return {\n        useAccount: (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__.hookFactory)(deps)\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvb2tzL3dlYjMvc2V0dXBIb29rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNnRjtBQVV6RSxNQUFNRSxVQUFVLEdBQWUsQ0FBQ0MsSUFBSSxHQUFLO0lBQzlDLE9BQU87UUFDTEMsVUFBVSxFQUFFSCx3REFBaUIsQ0FBQ0UsSUFBSSxDQUFDO0tBQ3BDLENBQUM7Q0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmZ0LW1hcmtldC8uL2NvbXBvbmVudHMvaG9va3Mvd2ViMy9zZXR1cEhvb2tzLnRzPzYxNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViM0RlcGVuZGVuY2llcyB9IGZyb20gXCJAX3R5cGVzL2hvb2tzXCI7XHJcbmltcG9ydCB7IGhvb2tGYWN0b3J5IGFzIGNyZWF0ZUFjY291bnRIb29rLCBVc2VBY2NvdW50SG9vayB9IGZyb20gXCIuL3VzZUFjY291bnRcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFdlYjNIb29rcyA9IHtcclxuICB1c2VBY2NvdW50OiBVc2VBY2NvdW50SG9vaztcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFNldHVwSG9va3MgPSB7XHJcbiAgKGQ6IFdlYjNEZXBlbmRlbmNpZXMpOiBXZWIzSG9va3M7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0dXBIb29rczogU2V0dXBIb29rcyA9IChkZXBzKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZUFjY291bnQ6IGNyZWF0ZUFjY291bnRIb29rKGRlcHMpLFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJob29rRmFjdG9yeSIsImNyZWF0ZUFjY291bnRIb29rIiwic2V0dXBIb29rcyIsImRlcHMiLCJ1c2VBY2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hooks/web3/setupHooks.ts\n");

/***/ }),

/***/ "./components/hooks/web3/useAccount.ts":
/*!*********************************************!*\
  !*** ./components/hooks/web3/useAccount.ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hookFactory\": () => (/* binding */ hookFactory)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);\nswr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst hookFactory = (deps)=>(params)=>{\n        const swrResponse = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"web3/useAccount\", ()=>{\n            return \"Test user\";\n        });\n        return swrResponse;\n    };\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvb2tzL3dlYjMvdXNlQWNjb3VudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN5QjtBQU1sQixNQUFNQyxXQUFXLEdBQXVCLENBQUNDLElBQUksR0FBSyxDQUFDQyxNQUFNLEdBQUs7UUFDbkUsTUFBTUMsV0FBVyxHQUFHSiwrQ0FBTSxDQUFDLGlCQUFpQixFQUFFLElBQU07WUFDbEQsT0FBTyxXQUFXLENBQUM7U0FDcEIsQ0FBQztRQUVGLE9BQU9JLFdBQVcsQ0FBQztLQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmZ0LW1hcmtldC8uL2NvbXBvbmVudHMvaG9va3Mvd2ViMy91c2VBY2NvdW50LnRzP2E0ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3J5cHRvSG9va0ZhY3RvcnkgfSBmcm9tIFwiQF90eXBlcy9ob29rc1wiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbnR5cGUgQWNjb3VudEhvb2tGYWN0b3J5ID0gQ3J5cHRvSG9va0ZhY3Rvcnk8c3RyaW5nLCBzdHJpbmc+XHJcblxyXG5leHBvcnQgdHlwZSBVc2VBY2NvdW50SG9vayA9IFJldHVyblR5cGU8QWNjb3VudEhvb2tGYWN0b3J5PlxyXG5cclxuZXhwb3J0IGNvbnN0IGhvb2tGYWN0b3J5OiBBY2NvdW50SG9va0ZhY3RvcnkgPSAoZGVwcykgPT4gKHBhcmFtcykgPT4ge1xyXG4gIGNvbnN0IHN3clJlc3BvbnNlID0gdXNlU1dSKFwid2ViMy91c2VBY2NvdW50XCIsICgpID0+IHtcclxuICAgIHJldHVybiBcIlRlc3QgdXNlclwiO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc3dyUmVzcG9uc2U7XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOlsidXNlU1dSIiwiaG9va0ZhY3RvcnkiLCJkZXBzIiwicGFyYW1zIiwic3dyUmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hooks/web3/useAccount.ts\n");

/***/ }),

/***/ "./components/providers/index.tsx":
/*!****************************************!*\
  !*** ./components/providers/index.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Web3Provider\": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./components/providers/web3/index.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3__WEBPACK_IMPORTED_MODULE_0__]);\n_web3__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0Ly4vY29tcG9uZW50cy9wcm92aWRlcnMvaW5kZXgudHN4Pzg0OTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBXZWIzUHJvdmlkZXJ9IGZyb20gXCIuL3dlYjNcIjsiXSwibmFtZXMiOlsiZGVmYXVsdCIsIldlYjNQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/providers/index.tsx\n");

/***/ }),

/***/ "./components/providers/web3/index.tsx":
/*!*********************************************!*\
  !*** ./components/providers/web3/index.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useHooks\": () => (/* binding */ useHooks),\n/* harmony export */   \"useWeb3\": () => (/* binding */ useWeb3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./components/providers/web3/utils.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_2__]);\n_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\nconst Web3Provider = ({ children  })=>{\n    const { 0: web3Api , 1: setWeb3Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initWeb3 = async ()=>{\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);\n            const contract = await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.LoadContract)(\"NftMarket\", provider);\n            setWeb3Api((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createWeb3State)({\n                ethereum: window.ethereum,\n                provider,\n                contract,\n                isLoading: false\n            }));\n        };\n        initWeb3();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: web3Api,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ERICK\\\\Documents\\\\Github\\\\nft-market\\\\components\\\\providers\\\\web3\\\\index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\nconst useWeb3 = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n};\nconst useHooks = ()=>{\n    const { hooks  } = useWeb3();\n    return hooks;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Web3Provider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNZTtBQU1FO0FBQ2U7QUFFaEMsTUFBTVEsV0FBVyxpQkFBR1Isb0RBQWEsQ0FBWUksMERBQWtCLEVBQUUsQ0FBQztBQUtsRSxNQUFNSyxZQUFZLEdBQTZCLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDL0QsTUFBTSxLQUFDQyxPQUFPLE1BQUVDLFVBQVUsTUFBSVQsK0NBQVEsQ0FBWUMsMERBQWtCLEVBQUUsQ0FBQztJQUV2RUYsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTVcsUUFBUSxHQUFHLFVBQVk7WUFDM0IsTUFBTUMsUUFBUSxHQUFHLElBQUlQLGlFQUE2QixDQUNoRFMsTUFBTSxDQUFDQyxRQUFRLENBQ2hCO1lBQ0QsTUFBTUMsUUFBUSxHQUFHLE1BQU1iLG9EQUFZLENBQUMsV0FBVyxFQUFFUyxRQUFRLENBQUM7WUFFMURGLFVBQVUsQ0FDUk4sdURBQWUsQ0FBQztnQkFDZFcsUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Z0JBQ3pCSCxRQUFRO2dCQUNSSSxRQUFRO2dCQUNSQyxTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQ0gsQ0FBQztTQUNIO1FBRUROLFFBQVEsRUFBRSxDQUFDO0tBQ1osRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDTCxXQUFXLENBQUNZLFFBQVE7UUFBQ0MsS0FBSyxFQUFFVixPQUFPO2tCQUFHRCxRQUFROzs7OztpQkFBd0IsQ0FDdkU7Q0FDSDtBQUVNLE1BQU1ZLE9BQU8sR0FBRyxJQUFNO0lBQzNCLE9BQU9yQixpREFBVSxDQUFDTyxXQUFXLENBQUMsQ0FBQztDQUNoQyxDQUFDO0FBRUssTUFBTWUsUUFBUSxHQUFHLElBQU07SUFDNUIsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0YsT0FBTyxFQUFFO0lBRTNCLE9BQU9FLEtBQUssQ0FBQztDQUNkLENBQUM7QUFFRixpRUFBZWYsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmZ0LW1hcmtldC8uL2NvbXBvbmVudHMvcHJvdmlkZXJzL3dlYjMvaW5kZXgudHN4Pzc3MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBjcmVhdGVDb250ZXh0LFxyXG4gIEZ1bmN0aW9uQ29tcG9uZW50LFxyXG4gIHVzZUNvbnRleHQsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZVN0YXRlLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFdlYjNTdGF0ZSxcclxuICBjcmVhdGVEZWZhdWx0U3RhdGUsXHJcbiAgTG9hZENvbnRyYWN0LFxyXG4gIGNyZWF0ZVdlYjNTdGF0ZSxcclxufSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcblxyXG5jb25zdCBXZWIzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8V2ViM1N0YXRlPihjcmVhdGVEZWZhdWx0U3RhdGUoKSk7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgV2ViM1Byb3ZpZGVyOiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3dlYjNBcGksIHNldFdlYjNBcGldID0gdXNlU3RhdGU8V2ViM1N0YXRlPihjcmVhdGVEZWZhdWx0U3RhdGUoKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0V2ViMyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoXHJcbiAgICAgICAgd2luZG93LmV0aGVyZXVtIGFzIGFueVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IExvYWRDb250cmFjdChcIk5mdE1hcmtldFwiLCBwcm92aWRlcik7XHJcblxyXG4gICAgICBzZXRXZWIzQXBpKFxyXG4gICAgICAgIGNyZWF0ZVdlYjNTdGF0ZSh7XHJcbiAgICAgICAgICBldGhlcmV1bTogd2luZG93LmV0aGVyZXVtLFxyXG4gICAgICAgICAgcHJvdmlkZXIsXHJcbiAgICAgICAgICBjb250cmFjdCxcclxuICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5pdFdlYjMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V2ViM0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3dlYjNBcGl9PntjaGlsZHJlbn08L1dlYjNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlV2ViMyA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChXZWIzQ29udGV4dCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlSG9va3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBob29rcyB9ID0gdXNlV2ViMygpO1xyXG5cclxuICByZXR1cm4gaG9va3M7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWIzUHJvdmlkZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlRGVmYXVsdFN0YXRlIiwiTG9hZENvbnRyYWN0IiwiY3JlYXRlV2ViM1N0YXRlIiwiZXRoZXJzIiwiV2ViM0NvbnRleHQiLCJXZWIzUHJvdmlkZXIiLCJjaGlsZHJlbiIsIndlYjNBcGkiLCJzZXRXZWIzQXBpIiwiaW5pdFdlYjMiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29udHJhY3QiLCJpc0xvYWRpbmciLCJQcm92aWRlciIsInZhbHVlIiwidXNlV2ViMyIsInVzZUhvb2tzIiwiaG9va3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/providers/web3/index.tsx\n");

/***/ }),

/***/ "./components/providers/web3/utils.ts":
/*!********************************************!*\
  !*** ./components/providers/web3/utils.ts ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadContract\": () => (/* binding */ LoadContract),\n/* harmony export */   \"createDefaultState\": () => (/* binding */ createDefaultState),\n/* harmony export */   \"createWeb3State\": () => (/* binding */ createWeb3State)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_web3_setupHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hooks/web3/setupHooks */ \"./components/hooks/web3/setupHooks.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_web3_setupHooks__WEBPACK_IMPORTED_MODULE_1__]);\n_hooks_web3_setupHooks__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst createDefaultState = ()=>{\n    return {\n        ethereum: null,\n        provider: null,\n        contract: null,\n        isLoading: true,\n        hooks: (0,_hooks_web3_setupHooks__WEBPACK_IMPORTED_MODULE_1__.setupHooks)({})\n    };\n};\nconst createWeb3State = ({ ethereum , provider , contract , isLoading  })=>{\n    return {\n        ethereum,\n        provider,\n        contract,\n        isLoading,\n        hooks: (0,_hooks_web3_setupHooks__WEBPACK_IMPORTED_MODULE_1__.setupHooks)({\n            ethereum,\n            provider,\n            contract\n        })\n    };\n};\nconst NETWORK_ID = \"5777\";\nconst LoadContract = async (name, provider)=>{\n    if (!NETWORK_ID) {\n        return Promise.reject(\"Network ID n\\xe3o est\\xe1 definido!\");\n    }\n    const response = await fetch(`contracts/${name}.json`);\n    const Artifact = await response.json();\n    if (Artifact.networks[NETWORK_ID].address) {\n        const contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(Artifact.networks[NETWORK_ID].address, Artifact.abi, provider);\n        return contract;\n    } else {\n        return Promise.reject(`Contrato: ${name} não pode ser`);\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL3V0aWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxRDtBQUVVO0FBa0J4RCxNQUFNRSxrQkFBa0IsR0FBRyxJQUFNO0lBQ3RDLE9BQU87UUFDTEMsUUFBUSxFQUFFLElBQUk7UUFDZEMsUUFBUSxFQUFFLElBQUk7UUFDZEMsUUFBUSxFQUFFLElBQUk7UUFDZEMsU0FBUyxFQUFFLElBQUk7UUFDZkMsS0FBSyxFQUFFTixrRUFBVSxDQUFDLEVBQUUsQ0FBUTtLQUM3QixDQUFDO0NBQ0gsQ0FBQztBQUVLLE1BQU1PLGVBQWUsR0FBRyxDQUFDLEVBQzlCTCxRQUFRLEdBQ1JDLFFBQVEsR0FDUkMsUUFBUSxHQUNSQyxTQUFTLEdBQ2lDLEdBQUs7SUFDL0MsT0FBTztRQUNMSCxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RDLEtBQUssRUFBRU4sa0VBQVUsQ0FBQztZQUFFRSxRQUFRO1lBQUVDLFFBQVE7WUFBRUMsUUFBUTtTQUFFLENBQUM7S0FDcEQsQ0FBQztDQUNILENBQUM7QUFFRixNQUFNSSxVQUFVLEdBQUdDLE1BQWtDO0FBRTlDLE1BQU1HLFlBQVksR0FBRyxPQUMxQkMsSUFBWSxFQUNaVixRQUFnQyxHQUNWO0lBQ3RCLElBQUksQ0FBQ0ssVUFBVSxFQUFFO1FBQ2YsT0FBT00sT0FBTyxDQUFDQyxNQUFNLENBQUMscUNBQStCLENBQUMsQ0FBQztLQUN4RDtJQUVELE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUVKLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxNQUFNSyxRQUFRLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFJLEVBQUU7SUFFdEMsSUFBSUQsUUFBUSxDQUFDRSxRQUFRLENBQUNaLFVBQVUsQ0FBQyxDQUFDYSxPQUFPLEVBQUU7UUFDekMsTUFBTWpCLFFBQVEsR0FBRyxJQUFJTCxtREFBZSxDQUNsQ21CLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDWixVQUFVLENBQUMsQ0FBQ2EsT0FBTyxFQUNyQ0gsUUFBUSxDQUFDSyxHQUFHLEVBQ1pwQixRQUFRLENBQ1Q7UUFFRCxPQUFPQyxRQUFRLENBQUM7S0FDakIsTUFBTTtRQUNMLE9BQU9VLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztLQUN6RDtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0Ly4vY29tcG9uZW50cy9wcm92aWRlcnMvd2ViMy91dGlscy50cz8yMDRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyYWN0LCBldGhlcnMsIHByb3ZpZGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHsgTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB9IGZyb20gXCJAbWV0YW1hc2svcHJvdmlkZXJzXCI7XHJcbmltcG9ydCB7IHNldHVwSG9va3MsIFdlYjNIb29rcyB9IGZyb20gXCJAaG9va3Mvd2ViMy9zZXR1cEhvb2tzXCI7XHJcbmltcG9ydCB7IFdlYjNEZXBlbmRlbmNpZXMgfSBmcm9tIFwiQF90eXBlcy9ob29rc1wiO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgZXRoZXJldW06IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XHJcbiAgfVxyXG59XHJcblxyXG50eXBlIE51bGxhYmxlPFQ+ID0ge1xyXG4gIFtQIGluIGtleW9mIFRdOiBUW1BdIHwgbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFdlYjNTdGF0ZSA9IHtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgaG9va3M6IFdlYjNIb29rcztcclxufSAmIE51bGxhYmxlPFdlYjNEZXBlbmRlbmNpZXM+O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlZmF1bHRTdGF0ZSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZXRoZXJldW06IG51bGwsXHJcbiAgICBwcm92aWRlcjogbnVsbCxcclxuICAgIGNvbnRyYWN0OiBudWxsLFxyXG4gICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgaG9va3M6IHNldHVwSG9va3Moe30gYXMgYW55KSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVdlYjNTdGF0ZSA9ICh7XHJcbiAgZXRoZXJldW0sXHJcbiAgcHJvdmlkZXIsXHJcbiAgY29udHJhY3QsXHJcbiAgaXNMb2FkaW5nLFxyXG59OiBXZWIzRGVwZW5kZW5jaWVzICYgeyBpc0xvYWRpbmc6IGJvb2xlYW4gfSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBldGhlcmV1bSxcclxuICAgIHByb3ZpZGVyLFxyXG4gICAgY29udHJhY3QsXHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBob29rczogc2V0dXBIb29rcyh7IGV0aGVyZXVtLCBwcm92aWRlciwgY29udHJhY3QgfSksXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IE5FVFdPUktfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ORVRXT1JLX0lEO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRDb250cmFjdCA9IGFzeW5jIChcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgcHJvdmlkZXI6IHByb3ZpZGVycy5XZWIzUHJvdmlkZXJcclxuKTogUHJvbWlzZTxDb250cmFjdD4gPT4ge1xyXG4gIGlmICghTkVUV09SS19JRCkge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiTmV0d29yayBJRCBuw6NvIGVzdMOhIGRlZmluaWRvIVwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGNvbnRyYWN0cy8ke25hbWV9Lmpzb25gKTtcclxuICBjb25zdCBBcnRpZmFjdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgaWYgKEFydGlmYWN0Lm5ldHdvcmtzW05FVFdPUktfSURdLmFkZHJlc3MpIHtcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgQXJ0aWZhY3QubmV0d29ya3NbTkVUV09SS19JRF0uYWRkcmVzcyxcclxuICAgICAgQXJ0aWZhY3QuYWJpLFxyXG4gICAgICBwcm92aWRlclxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gY29udHJhY3Q7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChgQ29udHJhdG86ICR7bmFtZX0gbsOjbyBwb2RlIHNlcmApO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImV0aGVycyIsInNldHVwSG9va3MiLCJjcmVhdGVEZWZhdWx0U3RhdGUiLCJldGhlcmV1bSIsInByb3ZpZGVyIiwiY29udHJhY3QiLCJpc0xvYWRpbmciLCJob29rcyIsImNyZWF0ZVdlYjNTdGF0ZSIsIk5FVFdPUktfSUQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTkVUV09SS19JRCIsIkxvYWRDb250cmFjdCIsIm5hbWUiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsIkFydGlmYWN0IiwianNvbiIsIm5ldHdvcmtzIiwiYWRkcmVzcyIsIkNvbnRyYWN0IiwiYWJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/providers/web3/utils.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @providers */ \"./components/providers/index.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers__WEBPACK_IMPORTED_MODULE_2__]);\n_providers__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers__WEBPACK_IMPORTED_MODULE_2__.Web3Provider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ERICK\\\\Documents\\\\Github\\\\nft-market\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ERICK\\\\Documents\\\\Github\\\\nft-market\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVXO0FBRTFDLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDSCxvREFBWTtrQkFDWCw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNmLENBQ2Y7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tIFwiQHByb3ZpZGVyc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2ViM1Byb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1dlYjNQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIldlYjNQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

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