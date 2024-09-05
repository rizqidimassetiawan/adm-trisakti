function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-auth-authentication-module"], {
  /***/
  "./src/app/theme/auth/authentication-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/theme/auth/authentication-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: AuthenticationRoutingModule */

  /***/
  function srcAppThemeAuthAuthenticationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
      return AuthenticationRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      children: [{
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      }, {
        path: 'signup',
        loadChildren: './signup/signup.module#SignupModule'
      }, {
        path: 'reset-password/:id/:token',
        loadChildren: './reset-password/reset-password.module#ResetPasswordModule'
      }, {
        path: 'activation-account',
        loadChildren: './activation-account/activation-account.module#ActivationAccountModule'
      }]
    }];

    var AuthenticationRoutingModule = function AuthenticationRoutingModule() {
      _classCallCheck(this, AuthenticationRoutingModule);
    };

    AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthenticationRoutingModule);
    /***/
  },

  /***/
  "./src/app/theme/auth/authentication.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/theme/auth/authentication.module.ts ***!
    \*****************************************************/

  /*! exports provided: AuthenticationModule */

  /***/
  function srcAppThemeAuthAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
      return AuthenticationModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication-routing.module */
    "./src/app/theme/auth/authentication-routing.module.ts");

    var AuthenticationModule = function AuthenticationModule() {
      _classCallCheck(this, AuthenticationModule);
    };

    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"]],
      declarations: []
    })], AuthenticationModule);
    /***/
  }
}]);
//# sourceMappingURL=theme-auth-authentication-module-es5.js.map