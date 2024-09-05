function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/theme/auth/reset-password/reset-password.component.html": (
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/auth/reset-password/reset-password.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_theme_auth_resetPassword_resetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"auth-wrapper align-items-stretch aut-bg-img\">\n  <app-card cardTitle=\"{{'CONTENT.personal_document' | translate}}\" headerClass=\"text-center text-lg-left\" class=\"col-md-6 center-cards align-self-center\" [hidHeader]=\"true\">\n    <div>\n      <div class=\"container row text-center\">\n          <div>\n            <!-- <img class=\"center-block\" src=\"assets/images/telkom_university.png\" style=\"max-width: 15%;\" /> -->\n          </div>\n      </div>\n      <br>\n      <div>\n        <h5 style=\"text-align:center\">\n          {{ 'CONTENT.forgot-password-2' | translate }}\n        </h5>\n      </div>\n      <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup] = \"resetPasswordForm\" (ngSubmit)= \"updateResetPassword()\">\n        <div class=\"form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.new-password' | translate }}</label>\n            <input type=\"password\" maxLength=\"12\" class=\"form-control form-control-sm\" id=\"password\" formControlName=\"password\" [placeholder]=\"'CONTENT.password' | translate\" (ngModelChange)=\"changeStrengthbar($event)\"/>\n            <div class=\"strength\">\n              <ul class=\"strengthBar\">\n                <li class=\"point\" [style.background-color]=\"bar0\"></li>\n                <li class=\"point\" [style.background-color]=\"bar1\"></li>\n                <li class=\"point\" [style.background-color]=\"bar2\"></li>\n                <li class=\"point\" [style.background-color]=\"bar3\"></li>\n              </ul>\n              <h6 [style.color]=\"msgColor\">{{msg}}</h6>\n              <label *ngIf=\"passWeak\" class=\"error text-danger small form-text\">{{ messageReturn }}</label>\n              <label *ngIf=\"passFair\" class=\"error text-warning small form-text\">{{ messageReturn }}</label>\n              <label *ngIf=\"passGood\" class=\"error text-info small form-text\">{{ messageReturn }}</label>\n              <label *ngIf=\"passStrong\" class=\"error text-success small form-text\">{{ messageReturn }}</label>\n            </div>\n            <!-- <app-password-strength [passwordToCheck]=\"resetPasswordForm.value.password\" (passwordStrength)=\"passwordValid($event)\"></app-password-strength> -->\n      </div>\n      <div class=\"form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.new-password-confirmation' | translate }}</label>\n          <input type=\"password\" (input)=\"checkPasswordRepeat($event)\" class=\"form-control form-control-sm\" id=\"passwordRepeat\" formControlName=\"passwordRepeat\" placeholder=\"Ulangi pengisian password\"\n          />\n          <div *ngIf=\"resetPasswordForm.controls.passwordRepeat.touched\">\n          <label *ngIf=\"!passwordRepeatIsValid\" class=\"small form-text text-danger\" id=\"validation-passwordRepeat-error\"\n          >{{ 'CONTENT.password-match' | translate}}</label>\n          </div>\n      </div>\n      <div class=\"form-group mb-0 mt-4 text-center\">\n        <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!(resetPasswordForm.valid && passwordIsValid && passwordRepeatIsValid)\">\n          <i class=\"icofont icofont-key\"></i> {{ 'CONTENT.change-password' | translate }}\n        </button>\n      </div>\n      </form>\n  </div>\n  </app-card>\n</div>\n";

    /***/
  }),
  /***/"./src/app/theme/auth/reset-password/reset-password-routing.module.ts": (
  /*!****************************************************************************!*\
    !*** ./src/app/theme/auth/reset-password/reset-password-routing.module.ts ***!
    \****************************************************************************/
  /*! exports provided: ResetPasswordRoutingModule */
  /***/
  function _src_app_theme_auth_resetPassword_resetPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ResetPasswordRoutingModule", function () {
      return ResetPasswordRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./reset-password.component */"./src/app/theme/auth/reset-password/reset-password.component.ts");
    var routes = [{
      path: '',
      component: _reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"]
    }];
    var ResetPasswordRoutingModule = /*#__PURE__*/_createClass(function ResetPasswordRoutingModule() {
      _classCallCheck(this, ResetPasswordRoutingModule);
    });
    ResetPasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResetPasswordRoutingModule);

    /***/
  }),
  /***/"./src/app/theme/auth/reset-password/reset-password.component.scss": (
  /*!*************************************************************************!*\
    !*** ./src/app/theme/auth/reset-password/reset-password.component.scss ***!
    \*************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_theme_auth_resetPassword_resetPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".strengthBar {\n  display: inline;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  vertical-align: 2px; }\n\n.point:last-of-type {\n  margin: 0 !important; }\n\n.point {\n  background: #DDD;\n  border-radius: 2px;\n  display: inline-block;\n  height: 5px;\n  margin-right: 1px;\n  width: 62px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvdGhlbWUvYXV0aC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2F1dGgvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RyZW5ndGhCYXIge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdmVydGljYWwtYWxpZ246IDJweDtcbn1cbi5wb2ludDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLnBvaW50IHtcbiAgYmFja2dyb3VuZDogI0RERDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgd2lkdGg6IDYycHg7XG59XG4iXX0= */";

    /***/
  }),
  /***/"./src/app/theme/auth/reset-password/reset-password.component.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/theme/auth/reset-password/reset-password.component.ts ***!
    \***********************************************************************/
  /*! exports provided: ResetPasswordComponent */
  /***/
  function _src_app_theme_auth_resetPassword_resetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/_services/oauth.service */"./src/app/_services/oauth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! src/app/_services/participant.service */"./src/app/_services/participant.service.ts");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(oauthService, router, fb, broadcasterService, translateService, chartService, route) {
        _classCallCheck(this, ResetPasswordComponent);
        this.oauthService = oauthService;
        this.router = router;
        this.fb = fb;
        this.broadcasterService = broadcasterService;
        this.translateService = translateService;
        this.chartService = chartService;
        this.route = route;
        this.position = 'top-right';
        this.showClose = true;
        this.theme = 'bootstrap';
        this.type = 'default';
        this.closeOther = false;
        this.passwordHidden = true;
        this.colors = ['darkred', 'orange', 'steelblue', 'yellowgreen'];
        this.resetPasswordForm = this.fb.group({
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          passwordRepeat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.passFair = false;
        this.passGood = false;
        this.passWeak = false;
        this.passStrong = false;
        this.loading = false;
        this.id = this.route.snapshot.paramMap.get('id');
        this.token = this.route.snapshot.paramMap.get('token');
        this.lang = localStorage.getItem('lang');
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(function (res) {
          translateService.setDefaultLang(res.lang);
        });
      }
      return _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.passwordIsValid = false;
        }
      }, {
        key: "passwordValid",
        value: function passwordValid(event) {
          this.passwordIsValid = event;
        }
      }, {
        key: "checkPasswordRepeat",
        value: function checkPasswordRepeat(event) {
          if (event.target.value == this.resetPasswordForm.controls.password.value) {
            this.passwordRepeatIsValid = true;
          } else {
            this.passwordRepeatIsValid = false;
          }
        }
      }, {
        key: "checkStrength",
        value: function checkStrength(p) {
          // 1
          var force = 0;
          // 2
          var regex = /[$-/:-?{-~!"^_@`\[\]]/g;
          var lowerLetters = /[a-z]+/.test(p);
          var upperLetters = /[A-Z]+/.test(p);
          var numbers = /[0-9]+/.test(p);
          var symbols = regex.test(p);
          // 3
          var flags = [lowerLetters, upperLetters, numbers, symbols];
          // 4
          var passedMatches = 0;
          for (var _i = 0, _flags = flags; _i < _flags.length; _i++) {
            var flag = _flags[_i];
            passedMatches += flag === true ? 1 : 0;
          }
          // 5
          force += 2 * p.length + (p.length >= 10 ? 1 : 0);
          force += passedMatches * 10;
          // 6
          force = p.length <= 7 ? Math.min(force, 10) : force;
          // 7
          force = passedMatches === 1 ? Math.min(force, 10) : force;
          force = passedMatches === 2 ? Math.min(force, 20) : force;
          force = passedMatches === 3 ? Math.min(force, 30) : force;
          force = passedMatches === 4 ? Math.min(force, 40) : force;
          return force;
        }
      }, {
        key: "changeStrengthbar",
        value: function changeStrengthbar(x) {
          var password = x;
          this.setBarColors(4, '#DDD');
          if (password) {
            var c = this.getColor(this.checkStrength(password));
            if (this.resetPasswordForm.controls.passwordRepeat.value != undefined) {
              if (this.resetPasswordForm.controls.passwordRepeat.value == this.resetPasswordForm.controls.password.value) {
                this.passwordRepeatIsValid = true;
              } else {
                this.passwordRepeatIsValid = false;
              }
            }
            this.setBarColors(c.index, c.color);
            var pwdStrength = this.checkStrength(password);
            pwdStrength === 40 ? true : false;
            switch (pwdStrength) {
              case 10:
                this.passWeak = true;
                this.passStrong = false;
                this.passGood = false;
                this.passFair = false;
                this.msg = 'Password Strength is Weak';
                this.messageReturn = 'Password must includes 8-12 characters, at least one uppercase letter (A-Z), at least one lowercase letter (a-z), at least one number (0-9), and at least one special character (@!*)';
                break;
              case 20:
                this.passWeak = false;
                this.passStrong = false;
                this.passGood = false;
                this.passFair = true;
                this.msg = 'Password Strength is Fair';
                this.messageReturn = 'Password must includes 8-12 characters at least one uppercase letter (A-Z), at least one lowercase letter (a-z), at least one number (0-9), and at least one special character (@!*)';
                break;
              case 30:
                this.passWeak = false;
                this.passStrong = false;
                this.passGood = true;
                this.passFair = false;
                this.msg = 'Password Strength is Good';
                this.messageReturn = 'Password must includes 8-12 characters, at least one uppercase letter (A-Z), at least one lowercase letter (a-z), at least one number (0-9), and at least one special character (@!*)';
                break;
              case 40:
                this.passWeak = false;
                this.passStrong = true;
                this.passGood = false;
                this.passFair = false;
                this.passwordValid(x);
                this.msg = 'Password Strength is Strong';
                this.messageReturn = 'Your password is great. Nice work!';
                break;
            }
          } else {
            this.msg = '';
            this.messageReturn = '';
          }
        }
      }, {
        key: "getColor",
        value: function getColor(s) {
          var index = 0;
          if (s === 10) {
            index = 0;
          } else if (s === 20) {
            index = 1;
          } else if (s === 30) {
            index = 2;
          } else if (s === 40) {
            index = 3;
          } else {
            index = 4;
          }
          this.msgColor = this.colors[index];
          return {
            index: index + 1,
            color: this.colors[index]
          };
        }
      }, {
        key: "setBarColors",
        value: function setBarColors(count, col) {
          for (var n = 0; n < count; n++) {
            this['bar' + n] = col;
          }
        }
      }, {
        key: "updateResetPassword",
        value: function updateResetPassword() {
          var _this = this;
          this.loading = true;
          var updatePassword = {
            password: this.resetPasswordForm.controls['password'].value
          };
          this.chartService.postResetPassword("".concat(this.id, "/").concat(this.token), updatePassword).subscribe(function (res) {
            if (res.status == 'Success') {
              _this.loading = false;
              sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                title: res.status,
                text: res.message,
                type: 'success',
                showConfirmButton: true,
                allowOutsideClick: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#ffba57'
              }).then(function (confirm) {
                if (confirm.value) {
                  _this.router.navigate(['auth/login']);
                }
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                title: res.status,
                text: res.message,
                type: 'error',
                showConfirmButton: true
              });
            }
          });
        }
      }]);
    }();
    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_5__["OauthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__["BroadcasterService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
      }, {
        type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_7__["ParticipantService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }];
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-reset-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./reset-password.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/theme/auth/reset-password/reset-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./reset-password.component.scss */"./src/app/theme/auth/reset-password/reset-password.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_5__["OauthService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__["BroadcasterService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_7__["ParticipantService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])], ResetPasswordComponent);

    /***/
  }),
  /***/"./src/app/theme/auth/reset-password/reset-password.module.ts": (
  /*!********************************************************************!*\
    !*** ./src/app/theme/auth/reset-password/reset-password.module.ts ***!
    \********************************************************************/
  /*! exports provided: ResetPasswordModule */
  /***/
  function _src_app_theme_auth_resetPassword_resetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function () {
      return ResetPasswordModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./reset-password-routing.module */"./src/app/theme/auth/reset-password/reset-password-routing.module.ts");
    /* harmony import */
    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/shared/shared.module */"./src/app/shared/shared.module.ts");
    /* harmony import */
    var angular_particle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! angular-particle */"./node_modules/angular-particle/index.js");
    /* harmony import */
    var _reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./reset-password.component */"./src/app/theme/auth/reset-password/reset-password.component.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var ng2_toasty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ng2-toasty */"./node_modules/ng2-toasty/index.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ResetPasswordModule = /*#__PURE__*/_createClass(function ResetPasswordModule() {
      _classCallCheck(this, ResetPasswordModule);
    });
    ResetPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
      declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_7__["ToastyModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], angular_particle__WEBPACK_IMPORTED_MODULE_4__["ParticlesModule"]]
    })], ResetPasswordModule);

    /***/
  })
}]);
//# sourceMappingURL=reset-password-reset-password-module-es5.js.map