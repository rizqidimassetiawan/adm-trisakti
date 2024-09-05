(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-error-error-module"],{

/***/ "./src/app/theme/error/error-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/error/error-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function() { return ErrorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: '404',
                loadChildren: './404/404.module#NotFoundModule'
            },
            {
                path: '403',
                loadChildren: './403/403.module#ForbiddenModule'
            },
            {
                path: 'maintenance',
                loadChildren: './maintenance/maintenance.module#MaintenanceModule'
            }
        ]
    }
];
let ErrorRoutingModule = class ErrorRoutingModule {
};
ErrorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ErrorRoutingModule);



/***/ }),

/***/ "./src/app/theme/error/error.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/error/error.module.ts ***!
  \*********************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-routing.module */ "./src/app/theme/error/error-routing.module.ts");




let ErrorModule = class ErrorModule {
};
ErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _error_routing_module__WEBPACK_IMPORTED_MODULE_3__["ErrorRoutingModule"]
        ],
        declarations: []
    })
], ErrorModule);



/***/ })

}]);
//# sourceMappingURL=theme-error-error-module-es2015.js.map