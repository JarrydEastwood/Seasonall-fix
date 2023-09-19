webpackHotUpdate_N_E("pages/apitest",{

/***/ "./pages/Weather.jsx":
/*!***************************!*\
  !*** ./pages/Weather.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"./pages/data.jsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/Weather.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar weather = function weather() {\n  _s();\n\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newSunrise = _useState[0],\n      setSunrise = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newSunset = _useState2[0],\n      setSunset = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newMaxTemp = _useState3[0],\n      setMaxTemp = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newMinTemp = _useState4[0],\n      setMinTem = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newRainfall = _useState5[0],\n      setRainfall = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newSnowfall = _useState6[0],\n      setstoreSnowfall = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      datacheck = _useState7[0],\n      setDataCheck = _useState7[1];\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {\n      var travelLocation, travelLat, travelLong, weatherDateStart, weatherDateEnd, weatherQuery, weatherResponse, item, calcMaxTemp, calcMinTemp, calcRainfall, calcSnowfall, calcSunrise, calcSunset, avgMaxTemp, avgMinTemp, avgRainfall, avgSnowfall, avgSunrise, avgSunset, storeMaxTemp, storeMinTemp, storeRainfall, storeSnowfall;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              travelLocation = id;\n              console.log(\"This is travelLocation \" + travelLocation);\n              travelLat = _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[travelLocation].lat;\n              travelLong = _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[travelLocation][\"long\"];\n              weatherDateStart = _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[travelLocation].winterStartDate;\n              weatherDateEnd = _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[travelLocation].winterEndDate;\n              _context.next = 8;\n              return fetch(\"https://archive-api.open-meteo.com/v1/era5?latitude=\" + travelLat + \"&longitude=\" + travelLong + \"&start_date=\" + weatherDateStart + \"&end_date=\" + weatherDateEnd + \"&timezone=auto&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum\");\n\n            case 8:\n              weatherQuery = _context.sent;\n              _context.next = 11;\n              return weatherQuery.json();\n\n            case 11:\n              weatherResponse = _context.sent;\n              console.log(\"This is weather Response\");\n              console.log(weatherResponse);\n              item = weatherResponse.daily;\n              calcMaxTemp = item.temperature_2m_max;\n              calcMinTemp = item.temperature_2m_min;\n              calcRainfall = item.rain_sum;\n              calcSnowfall = item.snowfall_sum;\n              calcSunrise = item.sunrise;\n              calcSunset = item.sunset;\n              avgMaxTemp = calcMaxTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMaxTemp.length;\n              avgMinTemp = calcMinTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMinTemp.length;\n              avgRainfall = calcRainfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcRainfall.length;\n              avgSnowfall = calcSnowfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcSnowfall.length;\n              avgSunrise = calcSunrise[45].slice(-5);\n              avgSunset = calcSunset[45].slice(-5);\n              storeMaxTemp = avgMaxTemp.toFixed(1);\n              storeMinTemp = avgMinTemp.toFixed(1);\n              storeRainfall = avgRainfall.toFixed(2);\n              storeSnowfall = avgSnowfall.toFixed(2);\n              setSunrise(avgSunrise);\n              setSunset(avgSunset);\n              setMaxTemp(storeMaxTemp);\n              setMinTem(storeMinTemp);\n              setRainfall(storeRainfall);\n              setstoreSnowfall(storeSnowfall);\n              setDataCheck(true);\n\n            case 38:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-1/2 m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl\",\n        children: \"test component for weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(1);\n        },\n        className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: [\"Get \", _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[travelLocation].city, \" Weather Data\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(2);\n        },\n        className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: \"Get Vancouver Weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }, _this), datacheck ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        children: \" This shouldnt show until there is data \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"Sunrise = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newSunrise\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 27\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"Sunset = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newSunset\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 26\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"MaxTemp = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newMaxTemp\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 27\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"MinTemp = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newMinTemp\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 27\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"Rainfall = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newRainfall\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 28\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"Snowfall = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newSnowfall\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 28\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this) : '']\n  }, void 0, true);\n};\n\n_s(weather, \"amaLVsa7z12+XiT4sah1VTBPQJY=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2VhdGhlci5qc3g/ZTg1YiJdLCJuYW1lcyI6WyJ3ZWF0aGVyIiwidXNlU3RhdGUiLCJuZXdTdW5yaXNlIiwic2V0U3VucmlzZSIsIm5ld1N1bnNldCIsInNldFN1bnNldCIsIm5ld01heFRlbXAiLCJzZXRNYXhUZW1wIiwibmV3TWluVGVtcCIsInNldE1pblRlbSIsIm5ld1JhaW5mYWxsIiwic2V0UmFpbmZhbGwiLCJuZXdTbm93ZmFsbCIsInNldHN0b3JlU25vd2ZhbGwiLCJkYXRhY2hlY2siLCJzZXREYXRhQ2hlY2siLCJnZXREYXRhIiwiaWQiLCJ0cmF2ZWxMb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0cmF2ZWxMYXQiLCJsb2NhdGlvbkRldGFpbHMiLCJsb2NhdGlvbnMiLCJsYXQiLCJ0cmF2ZWxMb25nIiwid2VhdGhlckRhdGVTdGFydCIsIndpbnRlclN0YXJ0RGF0ZSIsIndlYXRoZXJEYXRlRW5kIiwid2ludGVyRW5kRGF0ZSIsImZldGNoIiwid2VhdGhlclF1ZXJ5IiwianNvbiIsIndlYXRoZXJSZXNwb25zZSIsIml0ZW0iLCJkYWlseSIsImNhbGNNYXhUZW1wIiwidGVtcGVyYXR1cmVfMm1fbWF4IiwiY2FsY01pblRlbXAiLCJ0ZW1wZXJhdHVyZV8ybV9taW4iLCJjYWxjUmFpbmZhbGwiLCJyYWluX3N1bSIsImNhbGNTbm93ZmFsbCIsInNub3dmYWxsX3N1bSIsImNhbGNTdW5yaXNlIiwic3VucmlzZSIsImNhbGNTdW5zZXQiLCJzdW5zZXQiLCJhdmdNYXhUZW1wIiwicmVkdWNlIiwiYSIsImIiLCJsZW5ndGgiLCJhdmdNaW5UZW1wIiwiYXZnUmFpbmZhbGwiLCJhdmdTbm93ZmFsbCIsImF2Z1N1bnJpc2UiLCJzbGljZSIsImF2Z1N1bnNldCIsInN0b3JlTWF4VGVtcCIsInRvRml4ZWQiLCJzdG9yZU1pblRlbXAiLCJzdG9yZVJhaW5mYWxsIiwic3RvcmVTbm93ZmFsbCIsImNpdHkiXSwibWFwcGlu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QSxlQUxOLGVBTU07QUFBQSwrQ0FBZTtBQUFNLG1CQUFTLEVBQUMsV0FBaEI7QUFBQSxvQkFBNkJFO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTk4sZUFPTTtBQUFBLCtDQUFlO0FBQU0sbUJBQVMsRUFBQyxXQUFoQjtBQUFBLG9CQUE2QkU7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEVSxHQVVSLEVBekJKO0FBQUEsa0JBREY7QUE2QkQsQ0EvRkQ7O0dBQU1aLE87O0FBaUdXQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1dlYXRoZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsb2NhdGlvbkRldGFpbHMgfSBmcm9tICcuL2RhdGEnO1xuXG5cbmNvbnN0IHdlYXRoZXIgPSAoKSA9PiB7XG5cbiAgLy8gY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShbXSk7IC8vdXNlU3RhdGUgaG9vayB0byBpbml0aWFsaXplIHRoZSBzdGF0ZSB0byBhbiBlbXB0eSBhcnJheVxuICBjb25zdCBbbmV3U3VucmlzZSwgc2V0U3VucmlzZV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXdTdW5zZXQsIHNldFN1bnNldF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXdNYXhUZW1wLCBzZXRNYXhUZW1wXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25ld01pblRlbXAsIHNldE1pblRlbV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXdSYWluZmFsbCwgc2V0UmFpbmZhbGxdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmV3U25vd2ZhbGwsIHNldHN0b3JlU25vd2ZhbGxdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGF0YWNoZWNrLCBzZXREYXRhQ2hlY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGNvbnN0IHRyYXZlbExvY2F0aW9uID0gaWQ7XG4gICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRyYXZlbExvY2F0aW9uIFwiICsgdHJhdmVsTG9jYXRpb24pO1xuICAgIGNvbnN0IHRyYXZlbExhdCA9IGxvY2F0aW9uRGV0YWlscy5sb2NhdGlvbnNbdHJhdmVsTG9jYXRpb25dLmxhdDtcbiAgICBjb25zdCB0cmF2ZWxMb25nID0gbG9jYXRpb25EZXRhaWxzLmxvY2F0aW9uc1t0cmF2ZWxMb2NhdGlvbl0ubG9uZztcbiAgICBjb25zdCB3ZWF0aGVyRGF0ZVN0YXJ0ID0gbG9jYXRpb25EZXRhaWxzLmxvY2F0aW9uc1t0cmF2ZWxMb2NhdGlvbl0ud2ludGVyU3RhcnREYXRlO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRlRW5kID0gbG9jYXRpb25EZXRhaWxzLmxvY2F0aW9uc1t0cmF2ZWxMb2NhdGlvbl0ud2ludGVyRW5kRGF0ZTtcblxuICAgIGNvbnN0IHdlYXRoZXJRdWVyeSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcmNoaXZlLWFwaS5vcGVuLW1ldGVvLmNvbS92MS9lcmE1P2xhdGl0dWRlPVwiICtcbiAgICB0cmF2ZWxMYXQgK1xuICAgIFwiJmxvbmdpdHVkZT1cIiArXG4gICAgdHJhdmVsTG9uZyArXG4gICAgXCImc3RhcnRfZGF0ZT1cIiArXG4gICAgd2VhdGhlckRhdGVTdGFydCArXG4gICAgXCImZW5kX2RhdGU9XCIgK1xuICAgIHdlYXRoZXJEYXRlRW5kICtcbiAgICBcIiZ0aW1lem9uZT1hdXRvJmRhaWx5PXRlbXBlcmF0dXJlXzJtX21heCx0ZW1wZXJhdHVyZV8ybV9taW4sc3VucmlzZSxzdW5zZXQscHJlY2lwaXRhdGlvbl9zdW0scmFpbl9zdW0sc25vd2ZhbGxfc3VtXCJcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJSZXNwb25zZSA9IGF3YWl0IHdlYXRoZXJRdWVyeS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHdlYXRoZXIgUmVzcG9uc2VcIik7XG4gICAgY29uc29sZS5sb2cod2VhdGhlclJlc3BvbnNlKTtcblxuICAgIHZhciBpdGVtID0gd2VhdGhlclJlc3BvbnNlLmRhaWx5O1xuICAgICAgICBcbiAgICB2YXIgY2FsY01heFRlbXAgPSBpdGVtLnRlbXBlcmF0dXJlXzJtX21heDtcbiAgICB2YXIgY2FsY01pblRlbXAgPSBpdGVtLnRlbXBlcmF0dXJlXzJtX21pbjtcbiAgICB2YXIgY2FsY1JhaW5mYWxsID0gaXRlbS5yYWluX3N1bTtcbiAgICB2YXIgY2FsY1Nub3dmYWxsID0gaXRlbS5zbm93ZmFsbF9zdW07XG4gICAgdmFyIGNhbGNTdW5yaXNlID0gaXRlbS5zdW5yaXNlO1xuICAgIHZhciBjYWxjU3Vuc2V0ID0gaXRlbS5zdW5zZXQ7XG5cblxuICAgIHZhciBhdmdNYXhUZW1wID0gY2FsY01heFRlbXAucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyBjYWxjTWF4VGVtcC5sZW5ndGg7XG4gICAgdmFyIGF2Z01pblRlbXAgPSBjYWxjTWluVGVtcC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNNaW5UZW1wLmxlbmd0aDtcbiAgICB2YXIgYXZnUmFpbmZhbGwgPSBjYWxjUmFpbmZhbGwucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyBjYWxjUmFpbmZhbGwubGVuZ3RoO1xuICAgIHZhciBhdmdTbm93ZmFsbCA9IGNhbGNTbm93ZmFsbC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNTbm93ZmFsbC5sZW5ndGg7XG5cblxuICAgIGNvbnN0IGF2Z1N1bnJpc2UgPSBjYWxjU3VucmlzZVs0NV0uc2xpY2UoLTUpO1xuICAgIGNvbnN0IGF2Z1N1bnNldCA9IGNhbGNTdW5zZXRbNDVdLnNsaWNlKC01KTtcbiAgICBjb25zdCBzdG9yZU1heFRlbXAgPSBhdmdNYXhUZW1wLnRvRml4ZWQoMSk7XG4gICAgY29uc3Qgc3RvcmVNaW5UZW1wID0gYXZnTWluVGVtcC50b0ZpeGVkKDEpO1xuICAgIGNvbnN0IHN0b3JlUmFpbmZhbGwgPSBhdmdSYWluZmFsbC50b0ZpeGVkKDIpO1xuICAgIGNvbnN0IHN0b3JlU25vd2ZhbGwgPSBhdmdTbm93ZmFsbC50b0ZpeGVkKDIpO1xuXG4gICAgc2V0U3VucmlzZShhdmdTdW5yaXNlKVxuICAgIHNldFN1bnNldChhdmdTdW5zZXQpXG4gICAgc2V0TWF4VGVtcChzdG9yZU1heFRlbXApXG4gICAgc2V0TWluVGVtKHN0b3JlTWluVGVtcClcbiAgICBzZXRSYWluZmFsbChzdG9yZVJhaW5mYWxsKVxuICAgIHNldHN0b3JlU25vd2ZhbGwoc3RvcmVTbm93ZmFsbClcbiAgICBzZXREYXRhQ2hlY2sodHJ1ZSk7XG4gICAgXG4gICAgfTtcbiAgXG4gIHJldHVybihcbiAgICA8PlxuICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIG0tMTYgeGw6dy0yLzUganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3cteS1oaWRkZW5cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+dGVzdCBjb21wb25lbnQgZm9yIHdlYXRoZXIgRGF0YTwvaDE+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0RGF0YSgxKX0gICAgICBcbiAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgbXktNCBteC00IHB4LTQgYm9yZGVyLWItNCBib3JkZXItYmx1ZS03MDAgaG92ZXI6Ym9yZGVyLWJsdWUtNTAwIHJvdW5kZWRcIj5cbiAgICAgICAgR2V0IHtsb2NhdGlvbkRldGFpbHMubG9jYXRpb25zW3RyYXZlbExvY2F0aW9uXS5jaXR5fSBXZWF0aGVyIERhdGFcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXREYXRhKDIpfSAgICAgIFxuICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS00MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBteS00IG14LTQgcHgtNCBib3JkZXItYi00IGJvcmRlci1ibHVlLTcwMCBob3Zlcjpib3JkZXItYmx1ZS01MDAgcm91bmRlZFwiPlxuICAgICAgICBHZXQgVmFuY291dmVyIFdlYXRoZXIgRGF0YVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICAgIHtkYXRhY2hlY2sgPyBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT4gVGhpcyBzaG91bGRudCBzaG93IHVudGlsIHRoZXJlIGlzIGRhdGEgPC9oMT5cbiAgICAgICAgICAgIDxoND5TdW5yaXNlID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntuZXdTdW5yaXNlfTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPGg0PlN1bnNldCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57bmV3U3Vuc2V0fTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPGg0Pk1heFRlbXAgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e25ld01heFRlbXB9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8aDQ+TWluVGVtcCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57bmV3TWluVGVtcH08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoND5SYWluZmFsbCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57bmV3UmFpbmZhbGx9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8aDQ+U25vd2ZhbGwgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e25ld1Nub3dmYWxsfTwvc3Bhbj48L2g0PlxuICAgICAgPC9kaXY+XG4gICAgICA6ICcnfVxuICAgIDwvPlxuICApXG59O1xuXG4gIGV4cG9ydCBkZWZhdWx0IHdlYXRoZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Weather.jsx\n");

/***/ })

})