/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/src/controllers/photos.controller.ts":
/*!*****************************************************!*\
  !*** ./server/src/controllers/photos.controller.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"tslib\");\nvar http_status_codes_1 = __webpack_require__(/*! http-status-codes */ \"http-status-codes\");\nvar core_1 = __webpack_require__(/*! @overnightjs/core */ \"@overnightjs/core\");\nvar logger_1 = __webpack_require__(/*! @overnightjs/logger */ \"@overnightjs/logger\");\nvar NODE_ENV = \"development\";\nvar PhotosController = (function () {\n    function PhotosController() {\n    }\n    PhotosController.prototype.getAll = function (req, res) {\n        logger_1.Logger.Info(req.params, true);\n        return res.status(http_status_codes_1.OK).json({\n            message: \"suka blyat!\",\n            env: NODE_ENV,\n        });\n    };\n    tslib_1.__decorate([\n        core_1.Get(\"\"),\n        tslib_1.__metadata(\"design:type\", Function),\n        tslib_1.__metadata(\"design:paramtypes\", [Object, Object]),\n        tslib_1.__metadata(\"design:returntype\", void 0)\n    ], PhotosController.prototype, \"getAll\", null);\n    PhotosController = tslib_1.__decorate([\n        core_1.Controller(\"api/photos\")\n    ], PhotosController);\n    return PhotosController;\n}());\nexports.PhotosController = PhotosController;\n\n\n//# sourceURL=webpack:///./server/src/controllers/photos.controller.ts?");

/***/ }),

/***/ "./server/src/index.ts":
/*!*****************************!*\
  !*** ./server/src/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar server_1 = __webpack_require__(/*! ./server */ \"./server/src/server.ts\");\nvar server = new server_1.PhotoalbumServer();\nconsole.log(process.env.PORT);\nserver.start(parseInt(process.env.PORT, 10) || 3000);\n\n\n//# sourceURL=webpack:///./server/src/index.ts?");

/***/ }),

/***/ "./server/src/server.ts":
/*!******************************!*\
  !*** ./server/src/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"tslib\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar core_1 = __webpack_require__(/*! @overnightjs/core */ \"@overnightjs/core\");\nvar logger_1 = __webpack_require__(/*! @overnightjs/logger */ \"@overnightjs/logger\");\nvar photos_controller_1 = __webpack_require__(/*! ./controllers/photos.controller */ \"./server/src/controllers/photos.controller.ts\");\nvar PhotoalbumServer = (function (_super) {\n    tslib_1.__extends(PhotoalbumServer, _super);\n    function PhotoalbumServer() {\n        var _this = _super.call(this, \"development\" === \"development\") || this;\n        _this.app.use(bodyParser.json());\n        _this.app.use(bodyParser.urlencoded({ extended: true }));\n        _this.setupControllers();\n        return _this;\n    }\n    PhotoalbumServer.prototype.start = function (port) {\n        this.app.listen(port, function () {\n            logger_1.Logger.Imp(\"Server listening on port: \" + port);\n        });\n    };\n    PhotoalbumServer.prototype.setupControllers = function () {\n        var photosController = new photos_controller_1.PhotosController();\n        _super.prototype.addControllers.call(this, [photosController]);\n    };\n    return PhotoalbumServer;\n}(core_1.Server));\nexports.PhotoalbumServer = PhotoalbumServer;\n\n\n//# sourceURL=webpack:///./server/src/server.ts?");

/***/ }),

/***/ "@overnightjs/core":
/*!************************************!*\
  !*** external "@overnightjs/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@overnightjs/core\");\n\n//# sourceURL=webpack:///external_%22@overnightjs/core%22?");

/***/ }),

/***/ "@overnightjs/logger":
/*!**************************************!*\
  !*** external "@overnightjs/logger" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@overnightjs/logger\");\n\n//# sourceURL=webpack:///external_%22@overnightjs/logger%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status-codes\");\n\n//# sourceURL=webpack:///external_%22http-status-codes%22?");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tslib\");\n\n//# sourceURL=webpack:///external_%22tslib%22?");

/***/ })

/******/ });