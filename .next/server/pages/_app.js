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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useWeb3\": () => (/* binding */ useWeb3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./components/providers/web3/utils.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\nconst Web3Provider = ({ children  })=>{\n    const { 0: web3Api , 1: setWeb3Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initWeb3 = async ()=>{\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);\n            const contract = await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.LoadContract)(\"NftMarket\", provider);\n            setWeb3Api({\n                ethereum: window.ethereum,\n                provider,\n                contract: contract,\n                isLoading: false\n            });\n        };\n        initWeb3();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: web3Api,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ERICK\\\\Documents\\\\Github\\\\nft-market\\\\components\\\\providers\\\\web3\\\\index.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\nfunction useWeb3() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Web3Provider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQU1lO0FBQ3VEO0FBQ3RDO0FBRWhDLE1BQU1PLFdBQVcsaUJBQUdQLG9EQUFhLENBQVlJLDBEQUFrQixFQUFFLENBQUM7QUFLbEUsTUFBTUksWUFBWSxHQUE2QixDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQy9ELE1BQU0sS0FBQ0MsT0FBTyxNQUFFQyxVQUFVLE1BQUlSLCtDQUFRLENBQVlDLDBEQUFrQixFQUFFLENBQUM7SUFFdkVGLGdEQUFTLENBQUMsSUFBTTtRQUNkLE1BQU1VLFFBQVEsR0FBRyxVQUFZO1lBQzNCLE1BQU1DLFFBQVEsR0FBRyxJQUFJUCxpRUFBNkIsQ0FDaERTLE1BQU0sQ0FBQ0MsUUFBUSxDQUNoQjtZQUNELE1BQU1DLFFBQVEsR0FBRyxNQUFNWixvREFBWSxDQUFDLFdBQVcsRUFBRVEsUUFBUSxDQUFDO1lBRTFERixVQUFVLENBQUM7Z0JBQ1RLLFFBQVEsRUFBRUQsTUFBTSxDQUFDQyxRQUFRO2dCQUN6QkgsUUFBUTtnQkFDUkksUUFBUSxFQUFFQSxRQUFRO2dCQUNsQkMsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7UUFFRE4sUUFBUSxFQUFFLENBQUM7S0FDWixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNMLFdBQVcsQ0FBQ1ksUUFBUTtRQUFDQyxLQUFLLEVBQUVWLE9BQU87a0JBQUdELFFBQVE7Ozs7O2lCQUF3QixDQUN2RTtDQUNIO0FBRU0sU0FBU1ksT0FBTyxHQUFHO0lBQ3hCLE9BQU9wQixpREFBVSxDQUFDTSxXQUFXLENBQUMsQ0FBQztDQUNoQztBQUVELGlFQUFlQyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0Ly4vY29tcG9uZW50cy9wcm92aWRlcnMvd2ViMy9pbmRleC50c3g/NzcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGNyZWF0ZUNvbnRleHQsXHJcbiAgRnVuY3Rpb25Db21wb25lbnQsXHJcbiAgdXNlQ29udGV4dCxcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlU3RhdGUsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFdlYjNTdGF0ZSwgY3JlYXRlRGVmYXVsdFN0YXRlLCBMb2FkQ29udHJhY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcblxyXG5jb25zdCBXZWIzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8V2ViM1N0YXRlPihjcmVhdGVEZWZhdWx0U3RhdGUoKSk7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgV2ViM1Byb3ZpZGVyOiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3dlYjNBcGksIHNldFdlYjNBcGldID0gdXNlU3RhdGU8V2ViM1N0YXRlPihjcmVhdGVEZWZhdWx0U3RhdGUoKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0V2ViMyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoXHJcbiAgICAgICAgd2luZG93LmV0aGVyZXVtIGFzIGFueVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IExvYWRDb250cmFjdChcIk5mdE1hcmtldFwiLCBwcm92aWRlcik7XHJcblxyXG4gICAgICBzZXRXZWIzQXBpKHtcclxuICAgICAgICBldGhlcmV1bTogd2luZG93LmV0aGVyZXVtLFxyXG4gICAgICAgIHByb3ZpZGVyLFxyXG4gICAgICAgIGNvbnRyYWN0OiBjb250cmFjdCxcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaW5pdFdlYjMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V2ViM0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3dlYjNBcGl9PntjaGlsZHJlbn08L1dlYjNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlV2ViMygpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChXZWIzQ29udGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYjNQcm92aWRlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVEZWZhdWx0U3RhdGUiLCJMb2FkQ29udHJhY3QiLCJldGhlcnMiLCJXZWIzQ29udGV4dCIsIldlYjNQcm92aWRlciIsImNoaWxkcmVuIiwid2ViM0FwaSIsInNldFdlYjNBcGkiLCJpbml0V2ViMyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwid2luZG93IiwiZXRoZXJldW0iLCJjb250cmFjdCIsImlzTG9hZGluZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VXZWIzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/providers/web3/index.tsx\n");

/***/ }),

/***/ "./components/providers/web3/utils.ts":
/*!********************************************!*\
  !*** ./components/providers/web3/utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadContract\": () => (/* binding */ LoadContract),\n/* harmony export */   \"createDefaultState\": () => (/* binding */ createDefaultState)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createDefaultState = ()=>{\n    return {\n        ethereum: null,\n        provider: null,\n        contract: null,\n        isLoading: true\n    };\n};\nconst NETWORK_ID = \"5777\";\nconst LoadContract = async (name, provider)=>{\n    if (!NETWORK_ID) {\n        return Promise.reject(\"Network ID n\\xe3o est\\xe1 definido!\");\n    }\n    const response = await fetch(`contracts/${name}.json`);\n    const Artifact = await response.json();\n    if (Artifact.networks[NETWORK_ID].address) {\n        const contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(Artifact.networks[NETWORK_ID].address, Artifact.abi, provider);\n        return contract;\n    } else {\n        return Promise.reject(`Contrato: ${name} não pode ser`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL3V0aWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBcUQ7QUFtQjlDLE1BQU1DLGtCQUFrQixHQUFHLElBQU07SUFDdEMsT0FBTztRQUNMQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxTQUFTLEVBQUUsSUFBSTtLQUNoQixDQUFDO0NBQ0gsQ0FBQztBQUVGLE1BQU1DLFVBQVUsR0FBR0MsTUFBa0M7QUFFOUMsTUFBTUcsWUFBWSxHQUFHLE9BQzFCQyxJQUFZLEVBQ1pSLFFBQWdDLEdBQ1Y7SUFDdEIsSUFBSSxDQUFDRyxVQUFVLEVBQUU7UUFDZixPQUFPTSxPQUFPLENBQUNDLE1BQU0sQ0FBQyxxQ0FBK0IsQ0FBQyxDQUFDO0tBQ3hEO0lBRUQsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRUosSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELE1BQU1LLFFBQVEsR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQUksRUFBRTtJQUV0QyxJQUFJRCxRQUFRLENBQUNFLFFBQVEsQ0FBQ1osVUFBVSxDQUFDLENBQUNhLE9BQU8sRUFBRTtRQUN6QyxNQUFNZixRQUFRLEdBQUcsSUFBSUosbURBQWUsQ0FDbENnQixRQUFRLENBQUNFLFFBQVEsQ0FBQ1osVUFBVSxDQUFDLENBQUNhLE9BQU8sRUFDckNILFFBQVEsQ0FBQ0ssR0FBRyxFQUNabEIsUUFBUSxDQUNUO1FBRUQsT0FBT0MsUUFBUSxDQUFDO0tBQ2pCLE1BQU07UUFDTCxPQUFPUSxPQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ3hEO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1tYXJrZXQvLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL3V0aWxzLnRzPzIwNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJhY3QsIGV0aGVycywgcHJvdmlkZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgeyBNZXRhTWFza0lucGFnZVByb3ZpZGVyIH0gZnJvbSBcIkBtZXRhbWFzay9wcm92aWRlcnNcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIGV0aGVyZXVtOiBNZXRhTWFza0lucGFnZVByb3ZpZGVyO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgV2ViM1BhcmFtcyA9IHtcclxuICBldGhlcmV1bTogTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB8IG51bGw7XHJcbiAgcHJvdmlkZXI6IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIgfCBudWxsO1xyXG4gIGNvbnRyYWN0OiBDb250cmFjdCB8IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBXZWIzU3RhdGUgPSB7XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG59ICYgV2ViM1BhcmFtcztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVEZWZhdWx0U3RhdGUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGV0aGVyZXVtOiBudWxsLFxyXG4gICAgcHJvdmlkZXI6IG51bGwsXHJcbiAgICBjb250cmFjdDogbnVsbCxcclxuICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgTkVUV09SS19JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05FVFdPUktfSUQ7XHJcblxyXG5leHBvcnQgY29uc3QgTG9hZENvbnRyYWN0ID0gYXN5bmMgKFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBwcm92aWRlcjogcHJvdmlkZXJzLldlYjNQcm92aWRlclxyXG4pOiBQcm9taXNlPENvbnRyYWN0PiA9PiB7XHJcbiAgaWYgKCFORVRXT1JLX0lEKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJOZXR3b3JrIElEIG7Do28gZXN0w6EgZGVmaW5pZG8hXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgY29udHJhY3RzLyR7bmFtZX0uanNvbmApO1xyXG4gIGNvbnN0IEFydGlmYWN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICBpZiAoQXJ0aWZhY3QubmV0d29ya3NbTkVUV09SS19JRF0uYWRkcmVzcykge1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICBBcnRpZmFjdC5uZXR3b3Jrc1tORVRXT1JLX0lEXS5hZGRyZXNzLFxyXG4gICAgICBBcnRpZmFjdC5hYmksXHJcbiAgICAgIHByb3ZpZGVyXHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIGNvbnRyYWN0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYENvbnRyYXRvOiAke25hbWV9IG7Do28gcG9kZSBzZXJgKVxyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImV0aGVycyIsImNyZWF0ZURlZmF1bHRTdGF0ZSIsImV0aGVyZXVtIiwicHJvdmlkZXIiLCJjb250cmFjdCIsImlzTG9hZGluZyIsIk5FVFdPUktfSUQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTkVUV09SS19JRCIsIkxvYWRDb250cmFjdCIsIm5hbWUiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsIkFydGlmYWN0IiwianNvbiIsIm5ldHdvcmtzIiwiYWRkcmVzcyIsIkNvbnRyYWN0IiwiYWJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/providers/web3/utils.ts\n");

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