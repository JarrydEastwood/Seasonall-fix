webpackHotUpdate_N_E("pages/apitest",{

/***/ "./pages/apitest.jsx":
/*!***************************!*\
  !*** ./pages/apitest.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Weather */ \"./pages/Weather.jsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/apitest.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar apiPage = function apiPage() {\n  _s();\n\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      geoData = _useState[0],\n      setGeoData = _useState[1]; //useState hook to initialize the state to an empty array\n\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(location) {\n      var geoKey, travelLocation, query, response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              geoKey = '234979e2ff9e423095e4b2c869c1c97b'; //Move this to secure location\n\n              travelLocation = location;\n              _context.next = 4;\n              return fetch('https://api.geoapify.com/v1/geocode/search?text=' + travelLocation + \"&limit=1&format=json&apiKey=\" + geoKey);\n\n            case 4:\n              query = _context.sent;\n              _context.next = 7;\n              return query.json();\n\n            case 7:\n              response = _context.sent;\n              console.log(response);\n              setGeoData(response.results);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-screen justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl\",\n        children: \"test page for API Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: \"Click a button to test the GeoLocation API\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"New York\");\n        },\n        className: \"bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded\",\n        children: \"New York\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Los Angeles\");\n        },\n        className: \"bg-green-500 hover:bg-green-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-green-700 hover:border-green-500 rounded\",\n        children: \"Los Angeles\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Memphis\");\n        },\n        className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: \"Memphis\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-screen justify-center overflow-y-hidden\",\n      children: [geoData && geoData.length && geoData.map(function (result, i, weatherResult, v) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n              id: \"city\",\n              children: [\"City = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                className: \"font-bold\",\n                children: result.city\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 32\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 11\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n              id: \"country\",\n              children: [\"Country = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                className: \"font-bold\",\n                children: result.country\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 38\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 11\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n              id: \"Timezone\",\n              children: [\"Timezone = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                className: \"font-bold\",\n                children: result.timezone.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 40\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 11\n            }, _this)]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 7\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Weather__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/demo\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"/demo\",\n          className: \"px-4 md:px-8 mx-auto my-4 py-2 md:py-3 text-center rounded-full bg-green-500 text-white font-bold uppercase border-green-600 border hover:bg-green-700\",\n          children: \"Go back to Animation Demo Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 3\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 3\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(apiPage, \"IJeUKyCRrPmQ4Yqdx/82tfp4A+Q=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiPage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpdGVzdC5qc3g/Njg3NCJdLCJuYW1lcyI6WyJhcGlQYWdlIiwidXNlU3RhdGUiLCJnZW9EYXRhIiwic2V0R2VvRGF0YSIsImdldERhdGEiLCJsb2NhdGlvbiIsImdlb0tleSIsInRyYXZlbExvY2F0aW9uIiwiZmV0Y2giLCJxdWVyeSIsImpzb24iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwibGVuZ3RoIiwibWFwIiwicmVzdWx0IiwiaSIsIndlYXRoZXJSZXN1bHQiLCJ2IiwiY2l0eSIsImNvdW50cnkiLCJ0aW1lem9uZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFFcEI7QUFGb0Isa0JBR1VDLHNEQUFRLENBQUMsRUFBRCxDQUhsQjtBQUFBLE1BR2JDLE9BSGE7QUFBQSxNQUdKQyxVQUhJLGlCQUd3Qjs7O0FBRTFDLE1BQU1DLE9BQU87QUFBQSxnTUFBRyxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsb0JBRFEsR0FDQyxrQ0FERCxFQUNxQzs7QUFDN0NDLDRCQUZRLEdBRVNGLFFBRlQ7QUFBQTtBQUFBLHFCQUlNRyxLQUFLLENBQUMscURBQW9ERCxjQUFwRCxHQUMxQiw4QkFEMEIsR0FFMUJELE1BRnlCLENBSlg7O0FBQUE7QUFJUkcsbUJBSlE7QUFBQTtBQUFBLHFCQU9TQSxLQUFLLENBQUNDLElBQU4sRUFQVDs7QUFBQTtBQU9SQyxzQkFQUTtBQVFkQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQVIsd0JBQVUsQ0FBQ1EsUUFBUSxDQUFDRyxPQUFWLENBQVY7O0FBVGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUFYsT0FBTztBQUFBO0FBQUE7QUFBQSxLQUFiOztBQVlGLHNCQUNFO0FBQUEsNEJBQ0E7QUFBSyxlQUFTLEVBQUMsMkNBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1BLE9BQU8sQ0FBQyxVQUFELENBQWI7QUFBQSxTQUFqQjtBQUNBLGlCQUFTLEVBQUMsaUlBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQVNFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1BLE9BQU8sQ0FBQyxhQUFELENBQWI7QUFBQSxTQUFqQjtBQUNBLGlCQUFTLEVBQUMscUlBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQWNFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1BLE9BQU8sQ0FBQyxTQUFELENBQWI7QUFBQSxTQUFqQjtBQUNBLGlCQUFTLEVBQUMsaUlBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQXFCRjtBQUFLLGVBQVMsRUFBQywyQ0FBZjtBQUFBLGlCQUtDRixPQUFPLElBQUlBLE9BQU8sQ0FBQ2EsTUFBbkIsSUFBNkJiLE9BQU8sQ0FBQ2MsR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVCxFQUFZQyxhQUFaLEVBQTJCQyxDQUEzQixFQUFpQztBQUN6RSw0QkFDRTtBQUFBLGlDQUNFO0FBQUEsb0NBQ0U7QUFBSSxnQkFBRSxFQUFDLE1BQVA7QUFBQSxpREFBcUI7QUFBTSx5QkFBUyxFQUFDLFdBQWhCO0FBQUEsMEJBQTZCSCxNQUFNLENBQUNJO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUksZ0JBQUUsRUFBQyxTQUFQO0FBQUEsb0RBQTJCO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBLDBCQUE2QkosTUFBTSxDQUFDSztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFJLGdCQUFFLEVBQUMsVUFBUDtBQUFBLHFEQUE2QjtBQUFNLHlCQUFTLEVBQUMsV0FBaEI7QUFBQSwwQkFBNkJMLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUEsYUFBVU4sQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVVDLE9BWDJCLENBTDlCLGVBa0JFLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQkYsZUFvQkEscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBLCtCQUNBO0FBQUcsY0FBSSxFQUFDLE9BQVI7QUFDSSxtQkFBUyxFQUFDLHdKQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkU7QUFBQSxrQkFERjtBQXNERCxDQXZFRDs7R0FBTWxCLE87O0FBeUVXQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaXRlc3QuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFdlYXRoZXIgZnJvbSBcIi4vV2VhdGhlclwiXG5cblxuY29uc3QgYXBpUGFnZSA9ICgpID0+IHtcblxuICAvLyBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFtdKTsgLy91c2VTdGF0ZSBob29rIHRvIGluaXRpYWxpemUgdGhlIHN0YXRlIHRvIGFuIGVtcHR5IGFycmF5XG4gIGNvbnN0IFtnZW9EYXRhLCBzZXRHZW9EYXRhXSA9IHVzZVN0YXRlKFtdKTsgLy91c2VTdGF0ZSBob29rIHRvIGluaXRpYWxpemUgdGhlIHN0YXRlIHRvIGFuIGVtcHR5IGFycmF5XG5cbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgICBjb25zdCBnZW9LZXkgPSAnMjM0OTc5ZTJmZjllNDIzMDk1ZTRiMmM4NjljMWM5N2InOyAvL01vdmUgdGhpcyB0byBzZWN1cmUgbG9jYXRpb25cbiAgICAgIGNvbnN0IHRyYXZlbExvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICBcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdlb2FwaWZ5LmNvbS92MS9nZW9jb2RlL3NlYXJjaD90ZXh0PScrIHRyYXZlbExvY2F0aW9uICtcbiAgICAgIFwiJmxpbWl0PTEmZm9ybWF0PWpzb24mYXBpS2V5PVwiICtcbiAgICAgIGdlb0tleSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5Lmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIHNldEdlb0RhdGEocmVzcG9uc2UucmVzdWx0cyk7XG4gICAgfTtcbiAgICBcbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy15LWhpZGRlblwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGxcIj50ZXN0IHBhZ2UgZm9yIEFQSSBEYXRhPC9oMT5cblxuICAgICAgPGg0PkNsaWNrIGEgYnV0dG9uIHRvIHRlc3QgdGhlIEdlb0xvY2F0aW9uIEFQSTwvaDQ+IFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXREYXRhKFwiTmV3IFlvcmtcIil9XG4gICAgICBjbGFzc05hbWU9XCJiZy1waW5rLTUwMCBob3ZlcjpiZy1waW5rLTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIG15LTQgbXgtNCBweC00IGJvcmRlci1iLTQgYm9yZGVyLXBpbmstNzAwIGhvdmVyOmJvcmRlci1waW5rLTUwMCByb3VuZGVkXCI+XG4gICAgICBOZXcgWW9ya1xuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0RGF0YShcIkxvcyBBbmdlbGVzXCIpfSAgICAgIFxuICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIG15LTQgbXgtNCBweC00IGJvcmRlci1iLTQgYm9yZGVyLWdyZWVuLTcwMCBob3Zlcjpib3JkZXItZ3JlZW4tNTAwIHJvdW5kZWRcIj5cbiAgICAgIExvcyBBbmdlbGVzXG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXREYXRhKFwiTWVtcGhpc1wiKX0gICAgICBcbiAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgbXktNCBteC00IHB4LTQgYm9yZGVyLWItNCBib3JkZXItYmx1ZS03MDAgaG92ZXI6Ym9yZGVyLWJsdWUtNTAwIHJvdW5kZWRcIj5cbiAgICAgICAgTWVtcGhpc1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy15LWhpZGRlblwiPlxuICAgIFxuey8qIEdlbyBEYXRhIEFQSSBDYWxsICovfVxuICB7XG4gICAgXG4gICBnZW9EYXRhICYmIGdlb0RhdGEubGVuZ3RoICYmIGdlb0RhdGEubWFwKChyZXN1bHQsIGksIHdlYXRoZXJSZXN1bHQsIHYpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgPGg0IGlkPVwiY2l0eVwiPkNpdHkgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3Jlc3VsdC5jaXR5fTwvc3Bhbj48L2g0PlxuICAgICAgICAgIDxoNCBpZD1cImNvdW50cnlcIj5Db3VudHJ5ID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntyZXN1bHQuY291bnRyeX08L3NwYW4+PC9oND5cbiAgICAgICAgICA8aDQgaWQ9XCJUaW1lem9uZVwiPlRpbWV6b25lID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntyZXN1bHQudGltZXpvbmUubmFtZX08L3NwYW4+PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICAgIFxuICAgIH0pfVxuXG4gICAgPFdlYXRoZXIgLz5cbiAgICBcbiAgPExpbmsgaHJlZj1cIi9kZW1vXCI+XG4gIDxhIGhyZWY9XCIvZGVtb1wiXG4gICAgICBjbGFzc05hbWU9XCJweC00IG1kOnB4LTggbXgtYXV0byBteS00IHB5LTIgbWQ6cHktMyB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHVwcGVyY2FzZSBib3JkZXItZ3JlZW4tNjAwIGJvcmRlciBob3ZlcjpiZy1ncmVlbi03MDBcIlxuICAgICAgPlxuICAgICAgR28gYmFjayB0byBBbmltYXRpb24gRGVtbyBQYWdlICAgIFxuICAgICAgXG4gICAgPC9hPlxuICA8L0xpbms+XG4gIDwvZGl2PlxuXG4gICAgPC8+XG4gIClcbn07XG5cbiAgZXhwb3J0IGRlZmF1bHQgYXBpUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/apitest.jsx\n");

/***/ })

})