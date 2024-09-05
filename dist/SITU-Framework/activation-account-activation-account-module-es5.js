function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activation-account-activation-account-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/theme/auth/activation-account/activation-account.component.html": (
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/auth/activation-account/activation-account.component.html ***!
    \***********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_theme_auth_activationAccount_activationAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"auth-wrapper align-items-stretch aut-bg-img\">\n  <app-card  cardTitle=\"{{'CONTENT.personal_document' | translate}}\" headerClass=\"text-center text-lg-left\" class=\"col-md-6 center-cards align-self-center text-center\" [hidHeader]=\"true\">\n    <div>\n      <div class=\"container row text-center\">\n        <div>\n          <img class=\"center-block\" src=\"assets/images/complete-icon.png\" style=\"max-width: 20%;\" />\n        </div>\n      </div>\n      <div>\n          <h5 style=\"text-align:center\">Akun anda berhasil diaktivasi</h5>\n          <h6 style=\"text-align:center\">Silakan melakukan login dengan klik tombol dibawah</h6>\n      </div>\n    </div>\n    <div class=\"form-group mb-0 mt-4 text-center\">\n      <button type=\"button\" class=\"btn btn-primary btn-sm\" routerLink=\"/auth/login\">\n        <i class=\"icofont icofont-login\"></i> Login\n      </button>\n</div>\n  </app-card>\n</div>\n";

    /***/
  }),
  /***/"./src/app/theme/auth/activation-account/activation-account-routing.module.ts": (
  /*!************************************************************************************!*\
    !*** ./src/app/theme/auth/activation-account/activation-account-routing.module.ts ***!
    \************************************************************************************/
  /*! exports provided: ActivationAccountRoutingModule */
  /***/
  function _src_app_theme_auth_activationAccount_activationAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ActivationAccountRoutingModule", function () {
      return ActivationAccountRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _activation_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./activation-account.component */"./src/app/theme/auth/activation-account/activation-account.component.ts");
    var routes = [{
      path: '',
      component: _activation_account_component__WEBPACK_IMPORTED_MODULE_3__["ActivationAccountComponent"]
    }];
    var ActivationAccountRoutingModule = /*#__PURE__*/_createClass(function ActivationAccountRoutingModule() {
      _classCallCheck(this, ActivationAccountRoutingModule);
    });
    ActivationAccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ActivationAccountRoutingModule);

    /***/
  }),
  /***/"./src/app/theme/auth/activation-account/activation-account.component.scss": (
  /*!*********************************************************************************!*\
    !*** ./src/app/theme/auth/activation-account/activation-account.component.scss ***!
    \*********************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_theme_auth_activationAccount_activationAccountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".center-cards {\n  margin-left: auto;\n  margin-right: auto;\n  border: none;\n  width: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvdGhlbWUvYXV0aC9hY3RpdmF0aW9uLWFjY291bnQvYWN0aXZhdGlvbi1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvYXV0aC9hY3RpdmF0aW9uLWFjY291bnQvYWN0aXZhdGlvbi1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1jYXJkcyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG59XG4iXX0= */";

    /***/
  }),
  /***/"./src/app/theme/auth/activation-account/activation-account.component.ts": (
  /*!*******************************************************************************!*\
    !*** ./src/app/theme/auth/activation-account/activation-account.component.ts ***!
    \*******************************************************************************/
  /*! exports provided: ActivationAccountComponent */
  /***/
  function _src_app_theme_auth_activationAccount_activationAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ActivationAccountComponent", function () {
      return ActivationAccountComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/_services/participant.service */"./src/app/_services/participant.service.ts");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
    var ActivationAccountComponent = /*#__PURE__*/function () {
      function ActivationAccountComponent(translateService, broadcasterService, fb, chartService, modalService) {
        _classCallCheck(this, ActivationAccountComponent);
        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.fb = fb;
        this.chartService = chartService;
        this.modalService = modalService;
        this.registerDataForm = this.fb.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          phonenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]*$')])),
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          passwordRepeat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(function (res) {
          translateService.setDefaultLang(res.lang);
        });
        this.edit = 'input';
      }
      return _createClass(ActivationAccountComponent, [{
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
          if (event.target.value == this.registerDataForm.controls.password.value) {
            this.passwordRepeatIsValid = true;
          } else {
            this.passwordRepeatIsValid = false;
          }
        }
      }, {
        key: "createSelectionData",
        value: function createSelectionData() {
          var _this = this;
          // if (this.registerDataForm.valid) {
          this.loading = true;
          if (this.edit == 'input') {
            var data = {
              email: this.registerDataForm.controls['email'].value,
              name: this.registerDataForm.controls['name'].value,
              mobile_phone_number: this.registerDataForm.controls['phonenumber'].value,
              password: this.registerDataForm.controls['password'].value
            };
            var data1 = {
              username: this.registerDataForm.controls['email'].value,
              name: this.registerDataForm.controls['name'].value,
              password: this.registerDataForm.controls['password'].value
            };
            var _this$registerDataFor = this.registerDataForm.value,
              email = _this$registerDataFor.email,
              name = _this$registerDataFor.name,
              phonenumber = _this$registerDataFor.phonenumber,
              password = _this$registerDataFor.password;
            var payloadRegister = {
              username: email,
              name: name,
              mobile_phone_number: phonenumber,
              password: password
            };
            if (this.registerDataForm.controls['name'].value.length != 0) {
              this.chartService.postRegistrationData(data).subscribe(function (res) {
                _this.status = res.status;
                if (res.status == 'Success') {
                  _this.chartService.postEmailConfirmationData(payloadRegister).subscribe(function (res) {
                    _this.status = 'Success';
                    _this.registerModalSuccess.show();
                  });
                } else if (res.status == 'Failed') {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    title: res.status,
                    text: res.message,
                    type: 'error',
                    showConfirmButton: true
                  });
                }
                // });
              }, function (reason) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                  title: 'Gagal Mendaftar!',
                  text: 'Mohon maaf, pendaftaran tidak berhasil. Email sudah pernah digunakan, silakan coba lagi dengan email lainnya.',
                  type: 'error',
                  showConfirmButton: true
                });
                // this.registerModalFailed.show();
              });
            }
          }
          // }
        }
      }, {
        key: "loadSuccess",
        value: function loadSuccess() {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Success',
            msg: 'Data yang anda masukkan sudah tersimpan',
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'success'
          });
        }
      }, {
        key: "loadError",
        value: function loadError() {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: 'Terjadi kesalahan sistem',
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        }
      }]);
    }();
    ActivationAccountComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registerModalSuccess', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ActivationAccountComponent.prototype, "registerModalSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registerModalFailed', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ActivationAccountComponent.prototype, "registerModalFailed", void 0);
    ActivationAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-activation-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./activation-account.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/theme/auth/activation-account/activation-account.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./activation-account.component.scss */"./src/app/theme/auth/activation-account/activation-account.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])], ActivationAccountComponent);

    /***/
  }),
  /***/"./src/app/theme/auth/activation-account/activation-account.module.ts": (
  /*!****************************************************************************!*\
    !*** ./src/app/theme/auth/activation-account/activation-account.module.ts ***!
    \****************************************************************************/
  /*! exports provided: ActivationAccountModule */
  /***/
  function _src_app_theme_auth_activationAccount_activationAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ActivationAccountModule", function () {
      return ActivationAccountModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _activation_account_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./activation-account-routing.module */"./src/app/theme/auth/activation-account/activation-account-routing.module.ts");
    /* harmony import */
    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/shared/shared.module */"./src/app/shared/shared.module.ts");
    /* harmony import */
    var _activation_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./activation-account.component */"./src/app/theme/auth/activation-account/activation-account.component.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var ng2_toasty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ng2-toasty */"./node_modules/ng2-toasty/index.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ActivationAccountModule = /*#__PURE__*/_createClass(function ActivationAccountModule() {
      _classCallCheck(this, ActivationAccountModule);
    });
    ActivationAccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
      declarations: [_activation_account_component__WEBPACK_IMPORTED_MODULE_4__["ActivationAccountComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _activation_account_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActivationAccountRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_6__["ToastyModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]
    })], ActivationAccountModule);

    /***/
  })
}]);
//# sourceMappingURL=activation-account-activation-account-module-es5.js.map