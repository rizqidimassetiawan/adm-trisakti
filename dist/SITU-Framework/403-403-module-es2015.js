(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["403-403-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/error/403/403.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/error/403/403.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper offline forbidden\">\n  <div class=\"offline-wrapper\">\n    <img src=\"assets/images/maintenance/sparcle-1.png\" alt=\"User-Image\" class=\"img-fluid s-img-1\">\n    <img src=\"assets/images/maintenance/sparcle-2.png\" alt=\"User-Image\" class=\"img-fluid s-img-2\">\n    <div class=\"container off-main\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-6\">\n          <div class=\"text-center\">\n            <div class=\"moon\"></div>\n            <img src=\"assets/images/maintenance/forbidden.svg\" alt=\"\" class=\"img-fluid boat-img\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row m-0 justify-content-center off-content\">\n        <div class=\"col-sm-12 p-0\">\n          <div class=\"text-center\">\n            <h1 class=\"text-white text-uppercase\">403</h1>\n            <h5 class=\"text-white font-weight-normal m-b-30\">Oops! You're not allowed to access!</h5>\n            <button routerLink=\"/\" class=\"btn btn-primary mb-4\"><i class=\"feather icon-home mr-2\"></i>Home</button>\n          </div>\n        </div>\n        <div class=\"sark\">\n          <img src=\"assets/images/maintenance/sark.svg\" alt=\"\" class=\"img-fluid img-sark\">\n          <div class=\"bubble\"></div>\n        </div>\n      </div>\n    </div>\n    <svg width=\"100%\" height=\"70%\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" class=\"wave\">\n      <title>Wave</title>\n      <defs></defs>\n      <path id=\"feel-the-wave\" d=\"\" />\n    </svg>\n    <svg width=\"100%\" height=\"70%\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" class=\"wave\">\n      <title>Wave</title>\n      <defs></defs>\n      <path id=\"feel-the-wave-two\" d=\"\" />\n    </svg>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/theme/error/403/403-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/error/403/403-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ForbiddenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenRoutingModule", function() { return ForbiddenRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _403_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./403.component */ "./src/app/theme/error/403/403.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _403_component__WEBPACK_IMPORTED_MODULE_2__["ForbiddenComponent"]
    }
];
let ForbiddenRoutingModule = class ForbiddenRoutingModule {
};
ForbiddenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ForbiddenRoutingModule);



/***/ }),

/***/ "./src/app/theme/error/403/403.component.scss":
/*!****************************************************!*\
  !*** ./src/app/theme/error/403/403.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Vycm9yLzQwMy80MDMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/theme/error/403/403.component.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/error/403/403.component.ts ***!
  \**************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-config */ "./src/app/app-config.ts");




let ForbiddenComponent = class ForbiddenComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('403 | ' + src_app_app_config__WEBPACK_IMPORTED_MODULE_3__["DefaultConfig"].Application.appName);
    }
};
ForbiddenComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
ForbiddenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-403',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./403.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/error/403/403.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./403.component.scss */ "./src/app/theme/error/403/403.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
], ForbiddenComponent);



/***/ }),

/***/ "./src/app/theme/error/403/403.module.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/error/403/403.module.ts ***!
  \***********************************************/
/*! exports provided: ForbiddenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenModule", function() { return ForbiddenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _403_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./403.component */ "./src/app/theme/error/403/403.component.ts");
/* harmony import */ var _403_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./403-routing.module */ "./src/app/theme/error/403/403-routing.module.ts");





let ForbiddenModule = class ForbiddenModule {
};
ForbiddenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _403_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForbiddenRoutingModule"]
        ],
        declarations: [_403_component__WEBPACK_IMPORTED_MODULE_3__["ForbiddenComponent"]]
    })
], ForbiddenModule);



/***/ })

}]);
//# sourceMappingURL=403-403-module-es2015.js.map