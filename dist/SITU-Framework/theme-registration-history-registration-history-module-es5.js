function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-registration-history-registration-history-module"], {
  /***/
  "./node_modules/angular-datatables/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/angular-datatables/index.js ***!
    \**************************************************/

  /*! exports provided: DataTableDirective, DataTablesModule */

  /***/
  function node_modulesAngularDatatablesIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./src/angular-datatables.directive */
    "./node_modules/angular-datatables/src/angular-datatables.directive.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"];
    });
    /* harmony import */


    var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./src/angular-datatables.module */
    "./node_modules/angular-datatables/src/angular-datatables.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"];
    });
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */

    /**
     * @module
     * @description
     * Entry point from which you should import all public library APIs.
     */
    //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/angular-datatables/src/angular-datatables.directive.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
    \*****************************************************************************/

  /*! exports provided: DataTableDirective */

  /***/
  function node_modulesAngularDatatablesSrcAngularDatatablesDirectiveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return DataTableDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var DataTableDirective =
    /** @class */
    function () {
      function DataTableDirective(el) {
        this.el = el;
        /**
         * The DataTable option you pass to configure your table.
         */

        this.dtOptions = {};
      }

      DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;

        if (this.dtTrigger) {
          this.dtTrigger.subscribe(function () {
            _this.displayTable();
          });
        } else {
          this.displayTable();
        }
      };

      DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
          this.dtTrigger.unsubscribe();
        }

        if (this.dt) {
          this.dt.destroy(true);
        }
      };

      DataTableDirective.prototype.displayTable = function () {
        var _this = this;

        this.dtInstance = new Promise(function (resolve, reject) {
          Promise.resolve(_this.dtOptions).then(function (dtOptions) {
            // Using setTimeout as a "hack" to be "part" of NgZone
            setTimeout(function () {
              _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
              resolve(_this.dt);
            });
          });
        });
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], DataTableDirective.prototype, "dtOptions", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])], DataTableDirective.prototype, "dtTrigger", void 0);

      DataTableDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[datatable]'
      }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])], DataTableDirective);
      return DataTableDirective;
    }(); //# sourceMappingURL=angular-datatables.directive.js.map

    /***/

  },

  /***/
  "./node_modules/angular-datatables/src/angular-datatables.module.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
    \**************************************************************************/

  /*! exports provided: DataTablesModule */

  /***/
  function node_modulesAngularDatatablesSrcAngularDatatablesModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return DataTablesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./angular-datatables.directive */
    "./node_modules/angular-datatables/src/angular-datatables.directive.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var DataTablesModule =
    /** @class */
    function () {
      function DataTablesModule() {}

      DataTablesModule_1 = DataTablesModule;

      DataTablesModule.forRoot = function () {
        return {
          ngModule: DataTablesModule_1
        };
      };

      var DataTablesModule_1;
      DataTablesModule = DataTablesModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
        exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
      })], DataTablesModule);
      return DataTablesModule;
    }(); //# sourceMappingURL=angular-datatables.module.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/registration-history/registration-history.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/registration-history/registration-history.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeRegistrationHistoryRegistrationHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"{{'MENU.registration_history' | translate}}\" headerClass=\"text-center text-md-left\"\n      [hidHeader]=\"true\" [options]=\"false\" [loading]=\"loadtableRegistrationHistory\">\n      <div class=\"row align-items-center mb-2 mt-3\">\n        <div class=\"col-12 text-center text-md-right\">\n          <button class=\"btn btn-outline-primary btn-sm btn-round has-ripple\"\n            routerLink=\"/new-registration\">\n            <i class=\"icofont icofont-ui-note\"></i> {{'CONTENT.order_form' | translate}}\n          </button>\n          <button type=\"button\" (click)=\"panduanPembayaran()\" disabled\n            class=\"btn btn-sm btn-outline-secondary text-center m-1\"><i class=\"icofont icofont-bank-transfer-alt\"></i>\n            {{'CONTENT.panduan-pembayaran' |\n            translate}}</button>\n        </div>\n      </div>\n      <div class=\"table-responsive pb-1 mt-2\">\n        <table datatable class=\"table table-striped mb-0\" [dtOptions]=\"dtOptions[0]\" [dtTrigger]=\"dtTrigger\">\n          <thead>\n            <tr>\n              <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.no' | translate }}</th>\n              <th scope=\"col\">{{ 'CONTENT.detail-pemesanan' | translate }}</th>\n              <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.payment-status' | translate }}</th>\n              <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.payment-step' | translate }}</th>\n              <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.selection-path-step' | translate }}</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"tableData?.length != 0\">\n            <tr *ngFor=\"let data of tableData; let i = index;\">\n              <th scope=\"row\" style=\"padding-left: 10px; text-align:center \">{{i+1}}</th>\n              <td>\n                <div class=\"d-inline-block\">\n                  <p class=\"m-b-0\"><b>{{ 'CONTENT.registration-number' | translate }}. {{data.registration_number}}</b>\n                  </p>\n                  <p class=\"m-b-0\"><b>{{ 'CONTENT.payment-code' | translate }}. {{data.payment_code ? data.payment_code\n                      : '-' }}</b></p>\n                  <p class=\"text-muted m-b-0\">{{ 'CONTENT.order-date' | translate }} {{data.created_at | date:\n                    'dd/MM/yyyy'}}</p>\n                  <p class=\"text-muted m-b-0\">{{ 'CONTENT.selection-path' | translate }} {{data.selection_path ?\n                    data.selection_path : \"-\" }}</p>\n                  <p class=\"text-muted m-b-0\">{{ 'CONTENT.pin-price' | translate }} Rp{{data.price ? data.price : \"-\" }}\n                  </p>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <span class=\"badge badge-light-success\" *ngIf=\"data.payment_receipt_status === 'Lunas'\">{{ 'CONTENT.paid' | translate}}</span>\n                <span class=\"badge badge-light-danger\" *ngIf=\"data.payment_receipt_status === 'Belum Lunas'\">\n                  {{ 'CONTENT.unpaid' | translate}}</span>\n                <span class=\"badge badge-light-warning\" *ngIf=\"data.payment_receipt_status === 'In Progress'\">{{ 'CONTENT.inprogress' | translate}}</span>\n                <p class=\"text-muted m-b-0\">{{ 'CONTENT.payment-method' | translate }} {{data.payment_method ?\n                  data.payment_method : \"-\" }}</p>\n              </td>\n              <td class=\"text-center\">\n                  <button class=\"btn btn-outline-warning btn-sm btn-round has-ripple\" [placement]=\"'top'\"\n                    ngbTooltip=\"{{'CONTENT.pin_activation_info' | translate}}\"\n                    [disabled]=\"data.payment_receipt_status  === 'Lunas'\"\n                    (click)=\"openFormValidationPayment(data, 'edit')\">\n                    <i class=\"icofont icofont-ui-clip-board\"></i> {{'CONTENT.pin_activation' |\n                      translate}}\n                  </button> <br>\n                  <button class=\"btn btn-outline-primary btn-sm btn-round has-ripple m-1\" [placement]=\"'top'\"\n                    ngbTooltip=\"{{'CONTENT.payment_confirmation_info' | translate}}\"\n                    [disabled]=\"data.payment_receipt_status  === 'Lunas'\"\n                    (click)=\"openFormPaymentConfirmation(data, 'edit');\">\n                    <i class=\"icofont icofont-pay\"></i>\n                      {{'CONTENT.payment_confirmation' | translate}}\n                  </button>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"btn-group\">\n                  <button class=\"btn btn-outline-success btn-sm btn-round has-ripple\" [placement]=\"'top'\"\n                    ngbTooltip=\"{{'CONTENT.complete_reg_info' | translate}}\" (click)=\"paymentAccepted(data);\">\n                    <i class=\"icofont icofont-sub-listing\"></i> {{'CONTENT.complete_reg' |\n                      translate}}\n                  </button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tableData?.length == 0 && !loadtableRegistrationHistory\">\n            <tr>\n              <td colspan=\"5\" class=\"no-data-available text-center\">\n                <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n              </td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tableData?.length == 0  && loadtableRegistrationHistory\">\n            <tr>\n              <td colspan=\"5\" class=\"no-data-available text-center\">\n                <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n              </td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n\n<app-ui-modal #paymentConfirmation [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.payment-file-url' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"paymentConfirmation.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"registrationDataForm\"\n      (ngSubmit)=\"submitPaymentConfirmation()\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <app-alert type=\"info\" class=\"text-justify\">{{'CONTENT.information' | translate }}! <br> {{ 'CONTENT.info-payment-upload' | translate}}</app-alert>\n          <div class=\"form-group\">\n            <label class=\"form-label mb-1 f-w-600\" for=\"registration-number\"><b>{{'CONTENT.registration-number' |\n                translate}} </b></label>\n            <input type=\"text\" class=\"form-control\" id=\"NIK\" formControlName=\"registration_number\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"payment-method\" class=\"form-label mb-1 f-w-600\"><b>{{'CONTENT.payment-method' | translate}}\n              </b></label>\n            <input type=\"text\" class=\"form-control\" id=\"payment-method\" formControlName=\"payment_method\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"registration-fee\" class=\"form-label mb-1 f-w-600\"><b>{{'CONTENT.registration-fee' | translate}}\n              </b></label>\n            <input type=\"text\" class=\"form-control\" id=\"registration-fee\" formControlName=\"registration_fee\">\n          </div>\n            <div class=\"form-group\">\n              <label for=\"payment-file-text\" class=\"form-label mb-2 f-w-600\"><b>{{'CONTENT.payment-file-url' |\n                  translate}} : </b></label>\n              <input id=\"payment_file\" class=\"form-control\" type=\"file\" name=\"payment_file\"\n                formControlName=\"payment_url\" required\n                accept=\".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx,.ppt,.ppt,.pptx\"\n                (change)=\"submitFilePaymentConfirmation($event)\" />\n              <div *ngIf=\"errSize\" class=\"text-danger mt-4 ml-1\">Max 5MB!</div>\n              <div *ngIf=\"errType\" class=\"text-danger mt-4 ml-1\">Error file!</div>\n            </div>\n            <div *ngIf=\"formType === 'edit'\" class=\"form-group\">\n              <label class=\"form-label mb-1 f-w-600\">{{ \"CONTENT.dokumen\" | translate }}\n              </label>\n              <div *ngIf=\"listDocumentPayment.length !== 0\" class=\"row\">\n                <div *ngFor=\"let e of listDocumentPayment\" class=\"col-12 col-xs-12 col-md-12\">\n                  <div *ngIf=\"e.payment_url === null\">\n                    <div class=\"m-1\"> Data Tidak Ditemukan!</div>\n                  </div>\n                  <div *ngIf=\"e.payment_url !== null\">\n                    <div class=\"card text-left mb-3\">\n                      <div class=\"card-body p-2\">\n                        <a [href]=\"e.payment_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                            class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                          <p class=\"card-text pl-1 mb-0\"> Bukti Pembayaran\n                          </p>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"listDocumentPayment.length == 0\" class=\"row\">\n                <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n                </div>\n              </div>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n              <button type=\"submit\" class=\"btn btn-success btn-sm\"\n                [disabled]=\"registrationDataForm.invalid || this.loading\">\n                <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i class=\"icofont icofont-location-arrow\"></i></span>\n              </button>\n            </div>\n          </div>\n        </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<app-ui-modal #validationPaymentModal [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [hideFooter]=\"true\"\n  [loading]=\"loadPayment\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.payment-validation' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"hideFormValidationPayment();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"paymentValidation\">\n      <div class=\"col-sm-12\">\n        <div class=\"form-group row\">\n          <label class=\"form-label mb-1 f-w-600\" for=\"registration-number\"><b>{{'CONTENT.registration-number' |\n              translate}} </b></label>\n          <input type=\"text\" class=\"form-control\" id=\"registration_number\" formControlName=\"registration_number\">\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"form-label mb-1 f-w-600\" for=\"selection_path\"><b>{{'CONTENT.selection-path' |\n              translate}} </b></label>\n          <input type=\"text\" class=\"form-control\" id=\"selection_path\" formControlName=\"selection_path\">\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"registration-fee\" class=\"form-label mb-1 f-w-600\"><b>{{'CONTENT.registration-fee' | translate}}\n            </b></label>\n          <input type=\"text\" class=\"form-control\" id=\"registration-fee\" formControlName=\"registration_fee\">\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"text\" class=\"form-label mb-1 f-w-600\"><b>{{'CONTENT.payment-method' | translate}}\n            </b></label>\n          <input type=\"text\" class=\"form-control\" id=\"payment_method\" formControlName=\"payment_method\">\n        </div>\n        <div [hidden]=\"!isVoucher\" class=\"form-group row\">\n          <label *ngIf=\"isPinOfflineorVoucher == 4\" for=\"text\"\n            class=\"form-label mb-1 f-w-600 col-md-12 row\"><b>{{'CONTENT.voucher-code' | translate}}\n            </b></label>\n          <label *ngIf=\"isPinOfflineorVoucher == 5\" for=\"text\"\n            class=\"form-label mb-1 f-w-600 col-md-12 row\"><b>{{'CONTENT.pin-offline-code' | translate}}\n            </b></label>\n          <input *ngIf=\"!isPaidOff\" type=\"text\" class=\"form-control col-md-9\" id=\"voucher_code\"\n            [placeholder]=\"isPinOfflineorVoucher == 4 ? ('CONTENT.voucher-code' | translate) : ('CONTENT.pin-offline-code' | translate)\"\n            formControlName=\"voucher_code\" style=\"text-transform: uppercase;\" maxlength=\"8\" minlength=\"8\">\n          <!-- <button *ngIf=\"!isPaidOff\" type=\"submit\" class=\"btn btn-primary btn-sm col-md-3 button-margin-top\" [disabled]=\"paymentValidation.invalid\" (click)=\"voucherVerify()\">\n            <i class=\"ti-check\"></i> {{ isPinOfflineorVoucher == 4 ? ('CONTENT.voucher-verification' | translate) : ('CONTENT.pin-verification' | translate) }}\n          </button> -->\n          <button *ngIf=\"!isPaidOff\" type=\"submit\" class=\"btn btn-primary btn-sm col-md-3 button-margin-top\"\n            (click)=\"voucherVerify()\" [disabled]=\"paymentValidation.invalid || this.loadPayment\">\n            <span *ngIf=\"this.loadPayment\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loadPayment\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loadPayment\" class=\"btn-text\">\n              <i class=\"ti-check\"></i> {{ isPinOfflineorVoucher == 4 ? ('CONTENT.voucher-verification' | translate) :\n              ('CONTENT.pin-verification' | translate) }}\n            </span>\n          </button>\n          <label\n            *ngIf=\"!isPaidOff && paymentValidation.controls.voucher_code.errors && paymentValidation.controls.voucher_code.errors.minlength && (paymentValidation.controls.voucher_code.touched || paymentValidation.controls.voucher_code.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ isPinOfflineorVoucher == 4 ? ('CONTENT.min-length-voucher' | translate ) : ( 'CONTENT.min-length-pin' |\n            translate )}}\n          </label>\n          <input *ngIf=\"isPaidOff\" type=\"text\" class=\"form-control col-md-12\"\n            [placeholder]=\"isPinOfflineorVoucher == 4 ? ('CONTENT.voucher-code' | translate) : ('CONTENT.pin-offline-code' | translate)\"\n            formControlName=\"vcode\">\n        </div>\n        <div [hidden]=\"!isFinpay\" class=\"form-group row\">\n          <div class=\"row\">\n            <label class=\"form-label mb-1 f-w-600 col-md-12\"><b>{{'CONTENT.payment-status' | translate}}\n              </b></label>\n            <app-alert type=\"primary\" class=\"text-center col-md-12\">\n              <span class=\"badge badge-success mt-2 row\" *ngIf=\"isLunas\">Lunas</span>\n              <span class=\"badge badge-danger mt-2 row\" *ngIf=\"!isLunas\">Belum Lunas</span>\n              <br>\n              <span class=\"badge badge-success mt-1\" *ngIf=\"isLunas\">{{dataStatusBayar}}</span>\n              <span class=\"badge badge-danger mt-1\" *ngIf=\"!isLunas\">{{dataStatusBayar}}</span>\n              <br><button class=\"btn btn-light rounded btn-sm mt-1\" (click)=\"getPinTransactionCheck()\"\n                [disabled]=\"isLunas\">\n                <i class=\"icofont icofont-refresh\"></i> {{ 'CONTENT.update_status_payment' | translate }}\n              </button>\n              <p class=\"mt-1 text-sm\">{{ 'CONTENT.update_info_bayar' | translate}}</p>\n            </app-alert>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<app-ui-modal #registrationDone [containerClick]=\"false\" [dialogClass]=\"'modal-xl'\" [hideFooter]=\"true\"\n  [loading]=\"loadingCard\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">Information</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"resetWizard()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"registrationDetail\">\n          <wizard #wizard class=\"arc-wizard\" navBarLayout=\"large-empty-symbols\">\n            <wizard-step stepTitle=\"{{'CONTENT.participant-data' | translate}}\" navigationSymbol=\"1\">\n              <app-alert type=\"success\">\n                <h6><i class=\"fas fa-check-circle\"></i> {{ 'CONTENT.registration_complete_info' | translate}}</h6>\n                <div class=\"col-sm-12 text-center\">\n                  <button type=\"button\" class=\"btn btn-sm btn-success rounded text-center\"\n                    (click)=\"cetakKartuPeserta()\"><i class=\"fas fa-print\"></i> {{'CONTENT.print-participant-cards' |\n                    translate}}</button>\n                </div>\n              </app-alert>\n              <app-card headerClass=\"text-center text-md-left\" cardTitle=\"{{'MENU.participant-data' | translate}}\"\n                headerClass=\"text-center text-md-left\" [options]=\"false\">\n                <div class=\"row\">\n                  <div class=\"form-group col-12 col-md-6\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.registration-number' | translate }}</label>\n                    <input type=\"text\" class=\"form-control\" name=\"registration_number\" readonly\n                      formControlName=\"registration_number\">\n                  </div>\n                  <div class=\"form-group col-12 col-md-6\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.selection-path' | translate }}</label>\n                    <input type=\"text\" class=\"form-control\" name=\"selection-path\" readonly\n                      formControlName=\"selection_path\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-12 col-md-6\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.fullname' | translate }}</label>\n                    <input type=\"text\" class=\"form-control\" name=\"registration_number\" readonly\n                      formControlName=\"fullname\">\n                  </div>\n                  <div class=\"form-group col-12 col-md-6\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.phone_number' | translate }}</label>\n                    <input type=\"text\" class=\"form-control\" name=\"phone_number\" readonly\n                      formControlName=\"mobile_phone_number\">\n                  </div>\n                </div>\n              </app-card>\n              <!-- <app-card [hidden]=\"hiddenTime\" cardTitle=\"{{'CONTENT.exam-implementation-data' | translate}}\"\n                headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\">\n                <div [hidden]=\"hiddenLoc\" class=\"form-group\">\n                  <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam-location' | translate }}</label>\n                  <input type=\"text\" class=\"form-control\" name=\"exam-location\" readonly formControlName=\"exam_location\">\n                </div>\n                <div [hidden]=\"hiddenLoc\" class=\"form-group\">\n                  <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam-location-address' | translate }}</label>\n                  <input type=\"text\" class=\"form-control\" name=\"exam-location-address\" readonly\n                    formControlName=\"exam_address\">\n                </div> -->\n              <!-- <h6>{{ 'CONTENT.exam-session' | translate}}</h6>\n                <app-alert type=\"primary\" class=\"text-center mt-0\">\n                  <div *ngIf=\"dataSession.length !== 0\" class=\"row text-center\">\n                    <div *ngFor=\"let e of dataSession\" class=\"col-12 col-xs-12 col-md-4\">\n                      <div class=\"card alignment mb-3 mt-2\">\n                        <div class=\"card-body alignment p-2\">\n                          <h6 class=\"text-center\">{{ 'CONTENT.session' | translate }} {{ e.session }}</h6>\n                          <h6 class=\"text-center\">({{ e.exam_start_date | date: 'dd/MM/yyyy HH:mm' }} -\n                            {{e.exam_end_date | date: 'dd/MM/yyyy HH:mm' }})</h6>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row text-center\" *ngIf=\"dataSession.length == 0\">\n                    <h6>{{ 'ROOT.no_data_found' | translate}}</h6>\n                  </div>\n                </app-alert> -->\n              <!-- </app-card> -->\n              <div class=\"col text-center\">\n                <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"resetWizard()\">{{'ROOT.close' |\n                  translate}}</button>\n                <button type=\"button\" class=\"btn btn-primary btn-sm m-1\" (click)=\"nextStepDocument()\">{{'ROOT.next' |\n                  translate}}</button>\n              </div>\n            </wizard-step>\n            <wizard-step stepTitle=\"{{'CONTENT.document-data' | translate}}\" navigationSymbol=\"2\">\n              <app-card cardTitle=\"{{ 'CONTENT.document-requirements' | translate }}\" cardClass=\"card-datatable\"\n                headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\"\n                [loading]=\"loadtableSelectionDocumentData\">\n                <div class=\"table-responsive pb-1\">\n                  <table class=\"table table-boder-radius dataTable\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                        <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.document-requirements' | translate}}</th>\n                        <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.action' | translate}}</th>\n                      </tr>\n                    </thead>\n                    <tbody *ngIf=\"tableDataDocument?.length != 0\">\n                      <tr\n                        *ngFor=\"let data of tableDataDocument | slice: (pageDocument-1) * 10 : pageDocument * 10; let i = index\">\n                        <th scope=\"row\" style=\"padding-left: 10px\">{{ (pageDocument-1) * 10 + (i + 1) }}</th>\n                        <td>{{ data.document_name }} <span style=\"color: red;\" *ngIf=\"data.required == 1\">*</span></td>\n                        <td style=\"text-align:center\">\n                          <button class=\"btn btn-primary btn-sm btn-round has-ripple\"\n                            (click)=\"loadDetailDocumentRequirementData(data.document_type_id);\">\n                            <i class=\"icofont icofont-eye\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' |\n                              translate}}</span>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableDataDocument?.length == 0 && !loadtableSelectionDocumentData\">\n                      <tr>\n                        <td colspan=\"3\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableDataDocument?.length == 0 && loadtableSelectionDocumentData\">\n                      <tr>\n                        <td colspan=\"3\" class=\"no-data-available text-center\">Loading Data....</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <ngb-pagination class=\"d-flex justify-content-center\" [(page)]=\"pageDocument\" [pageSize]=\"10\"\n                    [collectionSize]=\"tableDataDocument.length\" [maxSize]=\"3\" [boundaryLinks]=\"true\">\n                  </ngb-pagination>\n                </div>\n              </app-card>\n              <app-card cardTitle=\"{{'CONTENT.choice-of-study-program' | translate}}\"\n                headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\"\n                [loading]=\"loadtableRegistrationProgramStudyData\">\n                <div class=\"table-responsive pb-1\">\n                  <table class=\"table table-boder-radius dataTable\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.priority' | translate}}</th>\n                        <th scope=\"col\">{{ 'CONTENT.faculty' | translate}}</th>\n                        <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.study-program' | translate}}</th>\n                        <th [hidden]=\"isAnotherProgram\" scope=\"col\" style=\"text-align:center\">{{ isPjjProgram === true ?\n                          ('CONTENT.sks' | translate ) : ('CONTENT.concentration' | translate )}}</th>\n                        <th [hidden]=\"isAnotherProgram\" scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.class-type' |\n                          translate }}</th>\n                        <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.SDP2' | translate}}</th>\n                      </tr>\n                    </thead>\n                    <tbody *ngIf=\"tableDataProdi?.length != 0\">\n                      <tr *ngFor=\"let data of tableDataProdi; let i = index;\">\n                        <td style=\"text-align:center\">{{ data.priority }}</td>\n                        <td>{{ data.faculty_name }}</td>\n                        <td style=\"text-align:center\">{{ data.study_program_name }}</td>\n                        <td [hidden]=\"isAnotherProgram\" style=\"text-align:center\">{{ data.specialization_name }}</td>\n                        <td [hidden]=\"isAnotherProgram\" style=\"text-align:center\">{{ data.class_type }}</td>\n                        <td style=\"text-align:center\">Rp{{ data.sdp_total }}</td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableDataProdi?.length == 0 && !loadtableRegistrationProgramStudyData\">\n                      <tr>\n                        <td colspan=\"5\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableDataProdi?.length == 0 && loadtableRegistrationProgramStudyData\">\n                      <tr>\n                        <td colspan=\"5\" class=\"no-data-available text-center\">Loading Data....</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </app-card>\n              <div class=\"col text-center\">\n                <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep>{{'ROOT.back' | translate}}</button>\n                <button type=\"button\" class=\"btn btn-dark btn-sm m-1\" (click)=\"resetWizard()\">{{'ROOT.exit' |\n                  translate}}</button>\n              </div>\n            </wizard-step>\n          </wizard>\n        </form>\n      </div>\n    </div>\n  </div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #transcriptRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeTranscriptModal()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"transcriptDataForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" readonly>\n          </div>\n        </div>\n      </div>\n      <div [hidden]=\"isTranscript\" class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.ipk-score' | translate }} <span\n                class=\"text-danger\">*</span></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"gpa\" placeholder=\"3.55\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-0\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataTranscriptUrlDoc.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataTranscriptUrlDoc\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> Transkrip Nilai\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataTranscriptUrlDoc.length == 0\" class=\"row\">\n              <div class=\"col-12 m-2\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #paymentAbilityModal [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closePaymentAbilityModal();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup]=\"abilityDataForm\" class=\"md-float-material form-material\" action=\"javascript:\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"document-requirements\" required formControlName=\"name\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataAbilityUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataAbilityUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.supporting_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.supporting_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.supporting_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataAbilityUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 mt-4 text-right\">\n        <div class=\"btn-group\">\n          <button type=\"submit\" class=\"btn btn-secondary btn-sm\" (click)=\"closePaymentAbilityModal()\">\n            <i class=\"ti-close\"></i> {{ 'ROOT.close' | translate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #reportCardRequirementModal [containerClick]=\"false\" [dialogClass]=\"'modal-xl'\" [hideFooter]=\"true\" [loading]=\"loadtableReportCardData\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeRaportDocumentModal();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body modal-body\">\n      <div class=\"table-responsive pb-1\">\n        <table class=\"table table-boder-radius dataTable\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n              <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.semester' | translate}}</th>\n              <th *ngIf=\"isMathStudy\" scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.math-score' | translate}}</th>\n              <th *ngIf=\"isBahasaStudy\" scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.indo-score' | translate}}</th>\n              <th *ngIf=\"isEnglishStudy\" scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.english-score' | translate}}\n              </th>\n              <th *ngIf=\"physicsStudy\" scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.physics-score' | translate}}\n              </th>\n              <th *ngIf=\"biologyStudy\" scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.biology-score' | translate}}\n              </th>\n              <th *ngIf=\"chemicalStudy\" scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.chemical-score' | translate}}\n              </th>\n              <th *ngIf=\"sociologicalStudy\" scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.sociology-score' |\n                translate}}</th>\n              <th *ngIf=\"economyStudy\" scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.economy-score' | translate}}\n              </th>\n              <th *ngIf=\"geographyStudy\" scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.geography-score' |\n                translate}}</th>\n              <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.action' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"tableDataRaport?.length != 0\">\n            <tr *ngFor=\"let data of tableDataRaport; let i = index;\">\n              <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n              <td>{{ data.semesters }}</td>\n              <td *ngIf=\"isMathStudy\" style=\"text-align:center\">{{ data.math ? data.math : '-' }}</td>\n              <td *ngIf=\"isBahasaStudy\" style=\"text-align:center\">{{ data.bahasa ? data.bahasa : '-'}}</td>\n              <td *ngIf=\"isEnglishStudy\" style=\"text-align:center\">{{ data.english ? data.english : '-' }}</td>\n              <td *ngIf=\"physicsStudy\" style=\"text-align:center\">{{ data.physics ? data.physics : '-' }}</td>\n              <td *ngIf=\"biologyStudy\" style=\"text-align:center\">{{ data.biology ? data.biology : '-' }}</td>\n              <td *ngIf=\"chemicalStudy\" style=\"text-align:center\">{{ data.chemical ? data.chemical : '-' }}</td>\n              <td *ngIf=\"sociologicalStudy\" style=\"text-align:center\">{{ data.sociological ? data.sociological : '-' }}\n              </td>\n              <td *ngIf=\"economyStudy\" style=\"text-align:center\">{{ data.economy ? data.economy : '-'}}</td>\n              <td *ngIf=\"geographyStudy\" style=\"text-align:center\">{{ data.geography ? data.geography : '-' }}</td>\n              <td style=\"text-align:center\">\n                <button class=\"btn btn-secondary btn-sm btn-round has-ripple\"\n                  (click)=\"loadReportCardDetailFileData(data)\">\n                  <i class=\"ti-download\"></i> <span class=\"d-sm-none\"> {{'ROOT.download' | translate}}</span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tableDataRaport?.length == 0 && !loadtableReportCardData\">\n            <tr>\n              <td colspan=\"12\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tableDataRaport?.length == 0 && loadtableReportCardData\">\n            <tr>\n              <td colspan=\"12\" class=\"no-data-available text-center\">Loading Data....</td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #certificateRequirementModal [containerClick]=\"false\" [dialogClass]=\"'modal-xl'\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeCertificateDocumentModal();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body modal-body\">\n    <app-card cardTitle=\"{{ 'CONTENT.certificate' | translate }}\" cardClass=\"card-datatable\"\n      headerClass=\"text-center text-md-left\" [hidHeader]=\"true\" [options]=\"true\" [loading]=\"loadtableCertificateData\">\n      <div class=\"table-responsive pb-1\">\n        <table class=\"table table-hover\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n              <th scope=\"col\">{{ 'CONTENT.certificate-level' | translate}}</th>\n              <th scope=\"col\">{{ 'CONTENT.certificate-type' | translate}}</th>\n              <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.publication-year' | translate}}</th>\n              <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.certificate-score' | translate}}</th>\n              <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.action' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"tableDataCertificate?.length != 0\">\n            <tr *ngFor=\"let data of tableDataCertificate; let i = index;\">\n              <th scope=\"row\" style=\"padding-left: 10px\">{{i+1}}</th>\n              <td>{{ data.certificate_level }}</td>\n              <td>{{ data.certificate_type }}</td>\n              <td style=\"text-align:center\">{{ data.publication_year }}</td>\n              <td style=\"text-align:center\">{{ data.certificate_score }}</td>\n              <td style=\"text-align:center\">\n                <button class=\"btn btn-secondary btn-sm btn-round has-ripple\"\n                  (click)=\"loadCertificateDetailFileData(data)\">\n                  <i class=\"ti-download\"></i> <span class=\"d-sm-none\"> {{'ROOT.download' | translate}}</span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tableDataCertificate?.length == 0 && !loadtableCertificateData\">\n            <tr>\n              <td colspan=\"6\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tableDataCertificate?.length == 0 && loadtableCertificateData\">\n            <tr>\n              <td colspan=\"6\" class=\"no-data-available text-center\">Loading Data....</td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #recommendationLetterRequirementModal [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeRecommendationLetterModal();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"supportingDataForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-name' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"pic_name\" name=\"picName\">\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-phone-number' | translate }}</label>\n            <input type=\"number\" class=\"form-control\" formControlName=\"pic_phone_number\" name=\"picPhoneNumber\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-email' | translate }}</label>\n            <input type=\"email\" class=\"form-control\" formControlName=\"pic_email_address\" name=\"picEmail\">\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-address' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"pic_address\" name=\"picAddress\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataRecommendationUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataRecommendationUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.supporting_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.supporting_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.supporting_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataRecommendationUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 mt-4 text-right\">\n        <div class=\"btn-group\">\n          <button type=\"submit\" class=\"btn btn-secondary btn-sm\" (click)=\"closeRecommendationLetterModal()\">\n            <i class=\"ti-close\"></i> {{ 'ROOT.close' | translate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #documentRequirementModal [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeRequirementDocumentModal();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup]=\"participantDocumentForm\" class=\"md-float-material form-material\" action=\"javascript:\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-req-name' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" readonly formControlName=\"name\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"isShowIdentityNumber\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.identity-number' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"number\" formControlName=\"number\"\n              placeholder=\"{{ 'CONTENT.identity-number' | translate }}\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataRequirementUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataRequirementUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.document_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.document_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name ? e.document_name : e.document_type |\n                          shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataRequirementUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 mt-4 text-right\">\n        <div class=\"btn-group\">\n          <button class=\"btn btn-secondary btn-sm\" (click)=\"closeRequirementDocumentModal()\">\n            <i class=\"ti-close\"></i> {{ 'ROOT.close' | translate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #certificateDetailModal [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"certificateDetailModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"certificateDataForm\">\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-level' | translate }}</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"certificate_level_id\" name=\"description\">\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-type' | translate }}</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"certificate_type_id\" name=\"description\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-name' | translate }}</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"description\"\n            [placeholder]=\"'CONTENT.certificate-name'|translate\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-description' | translate }}</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"description\" name=\"description\"\n            [placeholder]=\"'CONTENT.certificate-description'|translate\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-year' | translate }}</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"publication_year\" name=\"publicationYear\"\n            [placeholder]=\"'CONTENT.publication-year'|translate\">\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-score' | translate }}</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"certificate_score\" name=\"certificateScore\"\n            [placeholder]=\"'CONTENT.certificate-score'|translate\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.certificate-file' | translate }}\n          </label>\n          <div *ngIf=\"listDocumentCertificate.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of listDocumentCertificate\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.certificate_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.certificate_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.certificate_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.certificate_name | shortener:[55, '..']}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"listDocumentCertificate.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 mt-2 text-right col-md-12\">\n        <div class=\"btn-group\">\n          <button type=\"button\" (click)=\"certificateDetailModal.hide()\" class=\"btn btn-secondary btn-sm\">\n            <i class=\"ti-close\"></i> {{ 'ROOT.close' | translate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #transcriptRequirementModalView [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeTranscriptRequirementModalView();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"transcriptDataForm\">\n      <div class=\"col-md-12S\">\n        <form [formGroup]=\"transcriptFormlView\">\n          <!-- <div class=\"row\"> -->\n          <!-- <div class=\"form-group mb-0 text-right\">\n              <div class=\"btn-group\">\n                <button type=\"submit\" class=\"btn btn-danger btn-sm\" (click)=\"deleteTranscriptDocument()\">\n                  <i class=\"ti-trash\"></i> {{ 'ROOT.delete' | translate }} {{'CONTENT.transcript-data' | translate}}\n                </button>\n              </div>\n            </div> -->\n          <!-- </div> -->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">SKS yang telah diampu</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"totalCredit\" readonly>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">Total Mata Kuliah</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"totalCourse\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n                </label>\n                <div *ngIf=\"dataTranscriptUrl.length !== 0\" class=\"row\">\n                  <div class=\"col-12 col-xs-12 col-md-12\">\n                    <div *ngIf=\"dataTranscriptUrl == null\">\n                      <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                    </div>\n                    <div *ngIf=\"dataTranscriptUrl != null\">\n                      <div class=\"card text-left mb-3\">\n                        <div class=\"card-body p-2\">\n                          <a [href]=\"dataTranscriptUrl\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                              class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                            <p class=\"card-text pl-1 mb-0\"> Transkrip Nilai Pendidikan Terakhir\n                            </p>\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div *ngIf=\"dataTranscriptUrl.length == 0\" class=\"row\">\n                  <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"table-responsive pb-6\">\n            <table class=\"table table-striped table-hover table-sm\">\n              <thead class=\"thead-light bg-primarys\">\n                <tr>\n                  <th scope=\"col\" class=\"center-table\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\">{{ 'CONTENT.course-code' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\">{{ 'CONTENT.course-name' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\" class=\"center-table\">{{ 'CONTENT.credit-hour' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\" class=\"center-table\">{{ 'CONTENT.grade' | translate}}</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"tableTranscript?.length != 0\">\n                <tr *ngFor=\"let data of tableTranscript; let i = index;\">\n                  <th class=\"center-table\" scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                  <td class=\"center-table\">{{data.course_code}}\n                  </td>\n                  <td class=\"center-table\">{{ data.course_name }}</td>\n                  <td class=\"center-table\">{{ data.credit_hour }}</td>\n                  <td class=\"center-table\">{{ data.grade }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </form>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #utbkModals [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeUtbkModals();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"utbkForm\">\n      <div class=\"row\">\n        <p class=\"col-md-12\"><span class=\"text-danger\">* Wajib diisi</span></p>\n        <h5 class=\"col-md-12 text-center\">{{'CONTENT.common-value' | translate}} <span class=\"text-danger\">*</span></h5>\n      </div>\n      <hr class=\"text-bold\">\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.kpu-score' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"KPUScore\" name=\"KPUScore\"\n            [placeholder]=\"'CONTENT.placeholder-utbk'|translate\">\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pk-score' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"PKScore\" name=\"PKScore\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pdpu-score' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"PDPUScore\" name=\"PDPUScore\">\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.kmbdm-score' | translate }}</label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"KMBDMScore\" name=\"KMBDMScore\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.category-utbk' | translate }} <span\n              class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.category-utbk'|translate\"\n          formControlName=\"category\" name=\"category-utbk\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.math-score' | translate }} <span\n              class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"math\" name=\"math\">\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.physics-score' | translate }} <span\n              class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"physics\"\n            [placeholder]=\"'CONTENT.placeholder-utbk'|translate\" name=\"physics\">\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.chemical' | translate }} <span\n              class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"chemical\" name=\"chemical\">\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.biology' | translate }} <span\n              class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"biological\" name=\"biological\">\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.geography' | translate }} <span\n              class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"geography\" name=\"geography\">\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.historical' | translate }} <span\n              class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"historical\" name=\"historical\">\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.sociological' | translate }} <span\n              class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"sociological\" name=\"sociological\">\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.economy' | translate }} <span\n              class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"economy\" name=\"economy\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.evidence' | translate }}\n          </label>\n          <div *ngIf=\"dataUtbkUrl.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataUtbkUrl\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> Nilai UTBK\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataUtbkUrl.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #eprtAndTpaModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeEprtTpaModals();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"eprtAndTpaForm\">\n      <div class=\"row\">\n        <app-alert *ngIf=\"isEPRTDocument || isTPADocument\" type=\"primary\" class=\"text-center col-md-12\">\n          {{isTPADocument ? ('CONTENT.tpa-information' | translate) : ('CONTENT.eprt-information' | translate)}} <br>\n          <a *ngIf=\"isEPRTDocument\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-sm m-1\"\n            ><i class=\"icofont icofont-prescription\"></i> {{'CONTENT.eprt-test' | translate}}</a>\n          <a *ngIf=\"isTPADocument\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-sm m-1\"\n            ><i class=\"icofont icofont-prescription\"></i> {{'CONTENT.tpa-test' | translate}} </a>\n        </app-alert>\n      </div>\n      <div class=\"row align-items-center\">\n          <div class=\"text-left col-12 col-md-6 mb-1\">\n            <a *ngIf=\"isResidensi\"\n            href=\"https://tinyurl.com/documenttmp\"\n            target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-sm\">\n           <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isSuratIjinAtasan\"\n            href=\"https://tinyurl.com/documenttmp\"\n            target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isPromotor\"\n            href=\"https://tinyurl.com/documenttmp\"\n            target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isCoPromotor\"\n            href=\"https://tinyurl.com/documenttmp\"\n            target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div *ngIf=\"isPromotor || isCoPromotor|| isResidensi || isSuratIjinAtasan\" class=\"form-group mb-2 col-md-12\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-req-name' | translate }} </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" readonly>\n          </div>\n          <div *ngIf=\"isCoPromotor\" class=\"form-group mb-2 col-md-12\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.name-co-promotor' | translate }}\n              <span class=\"text-danger\">*</span></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"nameCoPromotor\" name=\"nameCoPromotor\"\n              [placeholder]=\"'CONTENT.name-co-promotor'|translate\" >\n          </div>\n          <div [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isIPKDocument\"\n            class=\"form-group mb-2 col-md-12\">\n            <label *ngIf=\"isEPRTDocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.eprt-publication-year' | translate\n              }} <span class=\"text-danger\">*</span></label>\n            <label *ngIf=\"isTPADocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.tpa-publication-year' | translate }}\n              <span class=\"text-danger\">*</span></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"publication_year\" name=\"publicationYear\"\n              [placeholder]=\"'CONTENT.pub-year'|translate\">\n          </div>\n          <div [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isIPKDocument\" class=\"form-group mb-2 col-md-12\">\n            <label *ngIf=\"isEPRTDocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.eprt-score' | translate }} <span\n                class=\"text-danger\">*</span></label>\n            <label *ngIf=\"isTPADocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.tpa-score' | translate }} <span\n                class=\"text-danger\">*</span></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"eprt_tpa_score\" name=\"certificateScore\"\n              [placeholder]=\"'CONTENT.score'|translate\">\n          </div>\n          <div [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isEPRTDocument || isTPADocument\" class=\"form-group mb-2 col-md-12\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.ipk-score' | translate }} <span\n                class=\"text-danger\">*</span></label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"gpa\" placeholder=\"3.55\">\n               </div>\n        </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataStudyUrl.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataStudyUrl\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_name !== null ? (e.document_name | shortener:[55, '..']) : 'Data Dokumen'}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataStudyUrl.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #proposalModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeProposal();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"proposalForm\">\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.proposal-title' | translate }} <span\n              class=\"text-danger\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"title\"\n            [placeholder]=\"'CONTENT.proposal-title'|translate\"></textarea>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataProposal.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataProposal\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataProposal.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #ijazahModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeIjazahModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"ijazahForm\">\n      <div class=\"row\">\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-name' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\"\n            [placeholder]=\"'CONTENT.document-name'| translate\" readonly>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataIjazah.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataIjazah\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_type | shortener:[55, '..']}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataIjazah.length == 0\" class=\"row\">\n            <div class=\"col-12 m-1\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #publicationDataModals [containerClick]=\"false\" dialogClass=\"modal-dialog modal-dialog-centered modal-xl\" [hideFooter]=\"true\" [loading]=\"loadTablePublication\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.detail' | translate }} {{ 'CONTENT.publication' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closePublicationDataModals();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"table-responsive pb-1\">\n        <table class=\"table table-sm table-boder-radius dataTable\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.no' | translate}}</th>\n              <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-name' | translate}}</th>\n              <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-position' | translate}}</th>\n              <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.publication-title' | translate}}</th>\n              <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-type' | translate}}</th>\n              <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.publication-date' | translate}}</th>\n              <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.link' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"tableDataPublication?.length != 0\">\n            <tr *ngFor=\"let data of tableDataPublication | slice: (pageDocumentPub-1) * 10 : pageDocumentPub * 10; let i = index;\">\n              <td class=\"text-center pl-1 pr-1\">{{ (pageDocumentPub-1) * 10 + (i + 1) }}.</td>\n              <td>{{ data.writer_name }}</td>\n              <td class=\"text-center\">{{ data.publication_writer_position }}</td>\n              <td class=\"text-center\">{{ data.title }}</td>\n              <td class=\"text-center\">{{ data.publication_type }}</td>\n              <td class=\"text-center\">{{ data.publish_date | date: 'dd/MM/yyyy' }}</td>\n              <td class=\"text-center\">\n                <a [href]=\"data.publication_link\" target=\"_blank\"class=\"btn btn-sm btn-outline-primary\">\n                  {{'CONTENT.link' | translate}}</a>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tableDataPublication?.length == 0 && !loadTablePublication\">\n            <tr>\n              <td colspan=\"8\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n            </td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tableDataPublication?.length == 0 && loadTablePublication\">\n            <tr>\n              <td colspan=\"7\" class=\"no-data-available text-center\">\n                <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n              </td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n        </table>\n        <ngb-pagination class=\"d-flex justify-content-center\" [(page)]=\"pageDocumentPub\" [pageSize]=\"10\"\n          [collectionSize]=\"tableDataPublication.length\" [maxSize]=\"3\" [boundaryLinks]=\"true\">\n        </ngb-pagination>\n    </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #recommendationS2Modal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.recommendation-document-S2' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeRecommendationS2Modal();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"recommendationS2Form\">\n      <div class=\"row\">\n        <h5 class=\"col-md-12\">Rekomendasi Pertama\n          <hr>\n        </h5>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.name' | translate}} <span class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name_rec1\" name=\"name_rec1\"\n            [placeholder]=\"'CONTENT.recommendation_name_1'|translate\">\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.handphone' | translate}} <span\n              class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"handphone_rec1\" name=\"handphone_rec1\"\n            [placeholder]=\"'CONTENT.placeholder-number' | translate\"\n            >\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.email' | translate}} <span\n              class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"email_rec1\"\n            name=\"email_rec1\" [placeholder]=\"'CONTENT.recommendation_email_1'|translate\">\n        </div>\n        <h5 class=\"mt-3 col-md-12\">Rekomendasi Kedua\n          <hr>\n        </h5>\n        <hr>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.name' | translate}} <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name_rec2\" name=\"name_rec2\"\n            [placeholder]=\"'CONTENT.recommendation_name_1'|translate\">\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.handphone' | translate}} <span\n              class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"handphone_rec2\" name=\"handphone_rec2\"\n            [placeholder]=\"'CONTENT.placeholder-number' | translate\">\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.email' | translate}} <span\n              class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"email_rec2\"\n            name=\"email_rec2\" [placeholder]=\"'CONTENT.recommendation_email_1'|translate\">\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n";
    /***/
  },

  /***/
  "./src/app/theme/registration-history/registration-history-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/theme/registration-history/registration-history-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: RegistrationHistoryRoutingModule */

  /***/
  function srcAppThemeRegistrationHistoryRegistrationHistoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationHistoryRoutingModule", function () {
      return RegistrationHistoryRoutingModule;
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


    var _registration_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./registration-history.component */
    "./src/app/theme/registration-history/registration-history.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _registration_history_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationHistoryComponent"]
    }, {
      path: 'payment-registration/:registration_number',
      loadChildren: './payment-registration/payment-registration.module#PaymentRegistrationModule',
      data: {
        animation: '1'
      }
    }, {
      path: 'registration-data/:registration_number',
      loadChildren: './registration-data/registration-data.module#RegistrationDataModule',
      data: {
        animation: '1'
      }
    }];

    var RegistrationHistoryRoutingModule = function RegistrationHistoryRoutingModule() {
      _classCallCheck(this, RegistrationHistoryRoutingModule);
    };

    RegistrationHistoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], RegistrationHistoryRoutingModule);
    /***/
  },

  /***/
  "./src/app/theme/registration-history/registration-history.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/theme/registration-history/registration-history.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeRegistrationHistoryRegistrationHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "hr {\n  border: 1px solid #e5e5e5;\n}\n\n.div-merah {\n  background: -webkit-gradient(linear, left top, right top, from(#153374), to(#4680ff)) !important;\n  background: linear-gradient(to right, #153374 0%, #4680ff 100%) !important;\n}\n\n.table-boder-radius {\n  border-collapse: collapse;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n\n.table-boder-radius tr:hover {\n  color: #4680ff;\n}\n\n.alignment {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.p-color {\n  color: white;\n}\n\ntd {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\ninput[type=text] {\n  box-sizing: border-box;\n  padding: 5px 5px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 5px 5px;\n  border-radius: 4px;\n}\n\ninput[type=number] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n@media (max-width: 572px) {\n  .button-margin-top {\n    margin-top: 10px;\n  }\n}\n\n@media (min-width: 573px) {\n  .button-margin {\n    margin-left: 10px;\n  }\n}\n\n@media (min-width: 768px) {\n  .button-margin {\n    margin-left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2FkbS10cmlzYWt0aS9zcmMvYXBwL3RoZW1lL3JlZ2lzdHJhdGlvbi1oaXN0b3J5L3JlZ2lzdHJhdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9yZWdpc3RyYXRpb24taGlzdG9yeS9yZWdpc3RyYXRpb24taGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnR0FBQTtFQUFBLDBFQUFBO0FDQ0Y7O0FER0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURDRTtFQUNFLGNBQUE7QUNDSjs7QURHQTtFQUVFLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNERjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsZ0JBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0U7SUFDRSxpQkFBQTtFQ0FGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLGlCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlZ2lzdHJhdGlvbi1oaXN0b3J5L3JlZ2lzdHJhdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHJ7XG4gIGJvcmRlciA6IDFweCBzb2xpZCAjZTVlNWU1O1xufVxuXG4uZGl2LW1lcmFoe1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNTMzNzQgMCUsICM0NjgwZmYgMTAwJSkgIWltcG9ydGFudDtcbiAgO1xufVxuXG4udGFibGUtYm9kZXItcmFkaXVzIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cjpob3ZlciB7XG4gICAgY29sb3I6ICM0NjgwZmY7XG4gIH1cbn1cblxuLmFsaWdubWVudCB7XG4gIC8vIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucC1jb2xvcntcbiAgY29sb3I6IHdoaXRlO1xufVxuXG50ZHtcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbnRoe1xuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzJweCkge1xuICAuYnV0dG9uLW1hcmdpbi10b3B7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTczcHgpIHtcbiAgLmJ1dHRvbi1tYXJnaW57XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYnV0dG9uLW1hcmdpbntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuIiwiaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xufVxuXG4uZGl2LW1lcmFoIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTUzMzc0IDAlLCAjNDY4MGZmIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1ib2Rlci1yYWRpdXMge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGFibGUtYm9kZXItcmFkaXVzIHRyOmhvdmVyIHtcbiAgY29sb3I6ICM0NjgwZmY7XG59XG5cbi5hbGlnbm1lbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnAtY29sb3Ige1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnRkIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbnRoIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTcycHgpIHtcbiAgLmJ1dHRvbi1tYXJnaW4tdG9wIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTczcHgpIHtcbiAgLmJ1dHRvbi1tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmJ1dHRvbi1tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/theme/registration-history/registration-history.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/theme/registration-history/registration-history.component.ts ***!
    \******************************************************************************/

  /*! exports provided: RegistrationHistoryComponent */

  /***/
  function srcAppThemeRegistrationHistoryRegistrationHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationHistoryComponent", function () {
      return RegistrationHistoryComponent;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/broadcaster.service */
    "./src/app/_services/broadcaster.service.ts");
    /* harmony import */


    var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/participant.service */
    "./src/app/_services/participant.service.ts");
    /* harmony import */


    var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/admin-management.service */
    "./src/app/_services/admin-management.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng2-archwizard/dist */
    "./node_modules/ng2-archwizard/dist/index.js");
    /* harmony import */


    var src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/_services/oauth.service */
    "./src/app/_services/oauth.service.ts");

    var RegistrationHistoryComponent =
    /*#__PURE__*/
    function () {
      function RegistrationHistoryComponent(translateService, broadcasterService, userService, chartService, route, fb, datePipe, router, injector) {
        _classCallCheck(this, RegistrationHistoryComponent);

        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.userService = userService;
        this.chartService = chartService;
        this.route = route;
        this.fb = fb;
        this.datePipe = datePipe;
        this.router = router;
        this.injector = injector;
        this.pageDocument = 1;
        this.pageDocumentPub = 1;
        this.dtOptions = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.type = 'default';
        this.formData = new FormData();
        this.registrationDataForm = this.fb.group({
          registration_number: {
            value: '',
            disabled: true
          },
          program: {
            value: '',
            disabled: true
          },
          selection_path: {
            value: '',
            disabled: true
          },
          payment_method: {
            value: '',
            disabled: true
          },
          fullname: {
            value: '',
            disabled: true
          },
          NIK: {
            value: '',
            disabled: true
          },
          registration_fee: {
            value: '',
            disabled: true
          },
          payment_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.paymentValidation = this.fb.group({
          registration_number: {
            value: '',
            disabled: true
          },
          program: {
            value: '',
            disabled: true
          },
          selection_path: {
            value: '',
            disabled: true
          },
          payment_method: {
            value: '',
            disabled: true
          },
          registration_fee: {
            value: '',
            disabled: true
          },
          vcode: {
            value: '',
            disabled: true
          },
          voucher_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(8)]))
        });
        this.transcriptFormlView = this.fb.group({
          name: [''],
          totalCredit: [''],
          totalCourse: ['']
        });
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(function (res) {
          translateService.setDefaultLang(res.lang);
        });
        this.registration_number = +this.route.snapshot.paramMap.get('registration_number');
        this.edit = 'input';
        this.listDocumentPayment = [];
        this.dataSession = [];
        this.loadFilter = false;
        this.isLunas = false;
        this.loadPayment = false;
        this.isFinpay = false;
        this.isVoucher = false;
        this.isPaidOff = false;
        this.loadingCard = false;
        this.isShowIdentityNumber = false;
        this.hiddenLoc = false;
        this.hiddenTime = false;
        this.loading = false;
        this.listDocumentReport = [];
        this.dataRequirementUrl = [];
        this.dataAbilityUrl = [];
        this.dataRecommendationUrl = [];
        this.dataTranscriptUrl = [];
        this.dataUtbkUrl = [];
        this.dataStudyUrl = [];
        this.dataProposal = [];
        this.dataIjazah = [];
        this.dataTranscriptUrlDoc = [];
        this.listDocumentCertificate = [];
        this.tableTranscript = [];
        this.keyName = [];
        this.tableDataDocument = [];
        this.tableDataPublication = [];
        this.isMathStudy = false;
        this.isBahasaStudy = false;
        this.isEnglishStudy = false;
        this.chemicalStudy = false;
        this.biologyStudy = false;
        this.physicsStudy = false;
        this.economyStudy = false;
        this.sociologicalStudy = false;
        this.geographyStudy = false;
        this.loadtableSelectionDocumentData = false;
        this.loadtableRegistrationProgramStudyData = false;
        this.loadtableCertificateData = false;
        this.isSaintek = false;
        this.isPinOfflineorVoucher = [];
        this.registrationDetail = this.fb.group({
          registration_number: {
            value: '',
            disabled: true
          },
          participant_id: [''],
          program: {
            value: '',
            disabled: true
          },
          fullname: {
            value: '',
            disabled: true
          },
          mobile_phone_number: {
            value: '',
            disabled: true
          },
          selection_path: {
            value: '',
            disabled: true
          },
          selection_program: {
            value: '',
            disabled: true
          },
          exam_location: {
            value: '',
            disabled: true
          },
          exam_address: {
            value: '',
            disabled: true
          },
          exam_date: {
            value: '',
            disabled: true
          },
          exam_start_time: {
            value: '',
            disabled: true
          },
          exam_end_time: {
            value: '',
            disabled: true
          },
          session: {
            value: '',
            disabled: true
          }
        });
        this.transcriptDataForm = this.fb.group({
          document_id: {
            value: '',
            disabled: true
          },
          registration_number: {
            value: '',
            disabled: true
          },
          name: {
            value: '',
            disabled: true
          },
          document_type_id: {
            value: '',
            disabled: true
          },
          gpa: {
            value: '',
            disabled: true
          },
          url: ['']
        });
        this.certificateDataForm = this.fb.group({
          registration_number: [''],
          document_type_id: [''],
          name: {
            value: '',
            disabled: true
          },
          description: {
            value: '',
            disabled: true
          },
          number: {
            value: '',
            disabled: true
          },
          url: [''],
          certificate_type_id: {
            value: '',
            disabled: true
          },
          certificate_level_id: {
            value: '',
            disabled: true
          },
          publication_year: {
            value: '',
            disabled: true
          },
          certificate_score: {
            value: '',
            disabled: true
          }
        });
        this.supportingDataForm = this.fb.group({
          registration_number: [''],
          document_type_id: [''],
          name: {
            value: '',
            disabled: true
          },
          description: {
            value: '',
            disabled: true
          },
          number: {
            value: '',
            disabled: true
          },
          url: [''],
          pic_name: {
            value: '',
            disabled: true
          },
          pic_phone_number: {
            value: '',
            disabled: true
          },
          pic_email_address: {
            value: '',
            disabled: true
          },
          pic_address: {
            value: '',
            disabled: true
          }
        });
        this.abilityDataForm = this.fb.group({
          registration_number: {
            value: '',
            disabled: true
          },
          document_type_id: {
            value: '',
            disabled: true
          },
          name: {
            value: '',
            disabled: true
          },
          description: {
            value: '',
            disabled: true
          },
          number: {
            value: '',
            disabled: true
          },
          url: ['']
        });
        this.participantDocumentForm = this.fb.group({
          document_type_id: [''],
          name: {
            value: '',
            disabled: true
          },
          description: {
            value: '',
            disabled: true
          },
          number: {
            value: '',
            disabled: true
          },
          url: ['']
        });
        this.documentRequirementDataForm = this.fb.group({
          document_id: [''],
          document_name: {
            value: '',
            disabled: true
          }
        });
        this.reportCardDataForm = this.fb.group({
          registration_number: [''],
          name: {
            value: '',
            disabled: true
          },
          document_type_id: {
            value: '',
            disabled: true
          },
          description: {
            value: '',
            disabled: true
          },
          number: {
            value: '',
            disabled: true
          },
          url: [''],
          document_id: [''],
          semester_id: [''],
          range_score: {
            value: '',
            disabled: true
          }
        });
        this.utbkForm = this.fb.group({
          KPUScore: {
            value: '',
            disabled: true
          },
          PKScore: {
            value: '',
            disabled: true
          },
          PDPUScore: {
            value: '',
            disabled: true
          },
          KMBDMScore: {
            value: '',
            disabled: true
          },
          math: {
            value: '',
            disabled: true
          },
          geography: {
            value: '',
            disabled: true
          },
          historical: {
            value: '',
            disabled: true
          },
          sociological: {
            value: '',
            disabled: true
          },
          economy: {
            value: '',
            disabled: true
          },
          physics: {
            value: '',
            disabled: true
          },
          chemical: {
            value: '',
            disabled: true
          },
          biological: {
            value: '',
            disabled: true
          },
          category: {
            value: '',
            disabled: true
          },
          url: {
            value: ''
          }
        });
        this.eprtAndTpaForm = this.fb.group({
          registration_number: {
            value: '',
            disabled: true
          },
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
          number: {
            value: '',
            disabled: true
          },
          url: {
            value: ''
          },
          eprt_tpa_type_id: {
            value: '',
            disabled: true
          },
          eprt_tpa_level_id: {
            value: '',
            disabled: true
          },
          publication_year: {
            value: '',
            disabled: true
          },
          nameCoPromotor: {
            value: '',
            disabled: true
          },
          eprt_tpa_score: {
            value: '',
            disabled: true
          },
          gpa: {
            value: '',
            disabled: true
          }
        });
        this.proposalForm = this.fb.group({
          registration_number: {
            value: '',
            disabled: true
          },
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
          title: {
            value: '',
            disabled: true
          },
          description: {
            value: '',
            disabled: true
          },
          url: {
            value: ''
          }
        });
        this.ijazahForm = this.fb.group({
          registration_number: {
            value: ''
          },
          name: {
            value: '',
            disabled: true
          },
          url: {
            value: ''
          },
          link_document: {
            value: ''
          }
        });
        this.recommendationS2Form = this.fb.group({
          name_rec1: {
            value: '',
            disabled: true
          },
          handphone_rec1: {
            value: '',
            disabled: true
          },
          email_rec1: {
            value: '',
            disabled: true
          },
          name_rec2: {
            value: '',
            disabled: true
          },
          handphone_rec2: {
            value: '',
            disabled: true
          },
          email_rec2: {
            value: '',
            disabled: true
          }
        });
      }

      _createClass(RegistrationHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dtOptions[0] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            retrieve: true,
            language: {
              info: 'Show _START_ to _END_ from _TOTAL_ data',
              zeroRecords: 'No data found!',
              emptyTable: 'No data found!',
              lengthMenu: 'Show _MENU_ data',
              processing: 'Loading data. . . . .',
              infoFiltered: '',
              infoEmpty: ''
            },
            order: [[0, 'asc']],
            initComplete: function initComplete() {}
          };
          this.loadRegistrationHistory();
          this.loadPaymentMethodDataFilter();
        }
      }, {
        key: "mode",
        value: function mode(param) {
          this.edit = param;
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
      }, {
        key: "loadRegistrationHistory",
        value: function loadRegistrationHistory() {
          var _this2 = this;

          this.loadtableRegistrationHistory = true;
          this.userProfile = JSON.parse(localStorage.getItem('userProfile'));

          if (this.userProfile.email !== undefined) {
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(function (res) {
              _this2.participantId = res.participant_id;

              _this2.userService.getRegistrationListParticipantData("participant_id=".concat(_this2.participantId)).subscribe(function (response) {
                setTimeout(function () {
                  _this2.tableData = response.data;

                  _this2.dtTrigger.next();

                  _this2.loadtableRegistrationHistory = false;
                }, 3000);
              }, function (err) {
                _this2.loadError();

                _this2.loadtableRegistrationHistory = false;
              });
            });
          } else {
            var unameEx = this.userProfile.username + '@gmail.com';
            this.userService.getParticipantDetailData(unameEx).subscribe(function (res) {
              _this2.participantId = res[0].participant_id;

              _this2.userService.getRegistrationListParticipantData("participant_id=".concat(_this2.participantId)).subscribe(function (response) {
                setTimeout(function () {
                  _this2.tableData = response.data;

                  _this2.dtTrigger.next();

                  _this2.loadtableRegistrationHistory = false;
                }, 3000);
              }, function (err) {
                _this2.loadError();

                _this2.loadtableRegistrationHistory = false;
              });
            });
          }
        }
      }, {
        key: "openFormValidationPayment",
        value: function openFormValidationPayment(data, type) {
          var _this3 = this;

          this.formType = type;

          if (type === 'edit') {
            this.loadPayment = true;
            this.registration_number = data.registration_number;
            this.payment_method = data.payment_method_id;
            this.paymentStatus = data.payment_status_id;
            this.paymentValidation.patchValue({
              registration_number: data.registration_number
            });
            this.paymentValidation.patchValue({
              program: data.selection_program ? data.selection_program : '-'
            });
            this.paymentValidation.patchValue({
              selection_path: data.selection_path ? data.selection_path : '-'
            });

            if (data.price != null) {
              this.paymentValidation.patchValue({
                registration_fee: 'Rp' + data.price.toString()
              });
            } else {
              this.paymentValidation.patchValue({
                registration_fee: '-'
              });
            }

            this.userService.getRegistrationListParticipantData("registration_number=".concat(this.registration_number)).subscribe(function (result) {
              _this3.paymentValidation.patchValue({
                payment_method: result.data[0].payment_method
              });

              if (result.data[0].payment_method_id == 1) {
                _this3.isFinpay = true;
                _this3.isVoucher = false;

                if (_this3.paymentStatus == 1) {
                  _this3.dataStatusBayar = 'Order has been paid';
                  _this3.isLunas = true;
                  _this3.loadPayment = false;
                } else {
                  _this3.getPinTransactionCheck();
                }
              } else {
                _this3.isFinpay = false;
                _this3.isPinOfflineorVoucher = result.data[0].payment_method_id;

                if (result.data[0].payment_status_id == 1) {
                  _this3.isPaidOff = true;

                  _this3.userService.getTransactionVoucher("?registration_number=".concat(_this3.registration_number)).subscribe(function (res) {
                    _this3.paymentValidation.patchValue({
                      vcode: res.voucher
                    });

                    _this3.loadPayment = false;
                  });
                } else {
                  _this3.loadPayment = false;
                  _this3.isPaidOff = false;
                }

                _this3.isFinpay = false;
                _this3.isVoucher = true;
              }
            });
          }

          this.validationPaymentModal.show();
        }
      }, {
        key: "hideFormValidationPayment",
        value: function hideFormValidationPayment() {
          this.loadRegistrationHistory();
          this.renderPayment();
          this.validationPaymentModal.hide();
        }
      }, {
        key: "voucherVerify",
        value: function voucherVerify() {
          var _this4 = this;

          this.loadPayment = true;
          var inputVoucher = {
            voucher: this.paymentValidation.controls['voucher_code'].value,
            registration_number: this.registration_number
          };
          this.userService.postTransactionWithVoucher(inputVoucher).subscribe(function (res) {
            if (res != null) {
              if (res.status == 'Success') {
                _this4.loadSuccess();

                _this4.paymentValidation.get('voucher_code').patchValue('');

                _this4.hideFormValidationPayment();

                _this4.loadPayment = false;
              } else {
                _this4.loadPayment = false;
              }
            } else {
              _this4.loadPayment = false;

              _this4.loadError();
            }
          }, function (reason) {
            _this4.loadPayment = false;

            _this4.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          });
        }
      }, {
        key: "getPinTransactionCheck",
        value: function getPinTransactionCheck() {
          var _this5 = this;

          this.loadPayment = true;
          this.userService.getPinTransaction("registration_number=".concat(this.registration_number)).subscribe(function (res) {
            _this5.idPin = res.id;

            var token = _this5.injector.get(src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_13__["OauthService"]).retrieveAccessToken();

            if (res.length !== 0) {
              _this5.userService.getStatusPinTransaction("id=".concat(_this5.idPin, "&token=").concat(token.token)).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this5.dataStatusBayar = res.message;
                  _this5.loadPayment = false;

                  if (_this5.dataStatusBayar == 'Pembayaran Belum Lunas') {
                    _this5.isLunas = false;
                  } else {
                    _this5.isLunas = true;
                  }
                } else {
                  _this5.loadPayment = false;
                  _this5.isLunas = false;
                  _this5.dataStatusBayar = res.message;
                }
              });
            } else {
              _this5.loadPayment = false;
              _this5.isLunas = false;
              _this5.dataStatusBayar = 'Data pembayaran tidak ditemukan';
            }
          });
        }
      }, {
        key: "updatePaymentValidation",
        value: function updatePaymentValidation() {
          var _this6 = this;

          var data = {
            registration_number: this.registration_number,
            payment_method: this.paymentValidation.controls['payment_method'].value,
            payment_status: 2
          };
          this.chartService.upRegistrationData(data).subscribe(function (res) {
            if (res != null) {
              if (res.status == 'Success') {
                _this6.loadSuccess();

                _this6.loadRegistrationHistory();

                _this6.renderPayment();

                _this6.validationPaymentModal.hide();
              } else {
                _this6.loadError();

                _this6.validationPaymentModal.hide();
              }
            }
          });
        }
      }, {
        key: "openFormPaymentConfirmation",
        value: function openFormPaymentConfirmation(data, type) {
          this.formType = type;

          if (type === 'edit') {
            this.registration_number = data.registration_number;
            this.viewParticipantPaymentList();
            this.payment_method = data.payment_method_id;
            this.registrationDataForm.patchValue({
              registration_number: data.registration_number
            });
            this.registrationDataForm.patchValue({
              payment_method: data.payment_method ? data.payment_method : '-'
            });
            this.registrationDataForm.patchValue({
              registration_fee: 'Rp' + data.price.toString()
            });
            this.registrationDataForm.patchValue({
              payment_url: ''
            });
          }

          this.paymentConfirmation.show();
        }
      }, {
        key: "viewParticipantPaymentList",
        value: function viewParticipantPaymentList() {
          var _this7 = this;

          this.chartService.getParticipantPaymentList("registration_number=".concat(this.registration_number)).subscribe(function (res) {
            if (res.data.length !== 0) {
              _this7.listDocumentPayment = res.data;
              _this7.dataDocumentPayment = res.data[0].payment_url;
            } else {
              _this7.listDocumentPayment = '';
            }
          });
        }
      }, {
        key: "submitPaymentConfirmation",
        value: function submitPaymentConfirmation() {
          var _this8 = this;

          this.loading = true;
          this.chartService.upRegistrationData(this.formData).subscribe(function (res) {
            if (res != null) {
              if (res.status == 'Success') {
                _this8.loadSuccess();

                _this8.loading = false;

                _this8.renderPayment();

                _this8.loadRegistrationHistory();

                _this8.paymentConfirmation.hide();
              } else {
                _this8.loadError();

                _this8.loading = false;
              }
            } else {
              _this8.loadError();

              _this8.loading = false;
            }
          }, function (reason) {
            _this8.loading = false;

            _this8.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          });
        }
      }, {
        key: "submitFilePaymentConfirmation",
        value: function submitFilePaymentConfirmation(event) {
          this.errSize = false;
          this.errType = false;
          var elem = event.target;
          var files = elem.files[0].name;
          var fileType = files.substr(files.lastIndexOf('.') + 1);
          var size = elem.files[0].size;

          if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png' || fileType == 'doc' || fileType == 'docx' || fileType == 'xls' || fileType == 'xlsx' || fileType == 'ppt' || fileType == 'ppt' || fileType == 'pptx') {
              if (size < 5000000) {
                this.formData.append('payment_url', elem.files[0]);
                this.formData.append('registration_number', this.registration_number);
                this.formData.append('payment_method', this.payment_method);
              } else {
                this.errSize = true;
                this.registrationDataForm.get('payment_url').patchValue('');
              }
            } else {
              this.errType = true;
              this.registrationDataForm.get('payment_url').patchValue('');
            }
          }
        }
      }, {
        key: "createRegistrationHistory_4",
        value: function createRegistrationHistory_4(data) {
          var _this9 = this;

          // const datax = {
          //   registration_number: data.registration_number,
          //   registration_step_id: 4
          // }
          this.userService.getRegistrationHistory("registration_number=".concat(data.registration_number)).subscribe(function (result) {
            for (var i = 0; i < result.length; i++) {
              if (result[i].registration_step_id == 7 && result[i].status == "Done") {
                _this9.stepStatus = 1;
                _this9.idRegistrationNumber = data.registration_number;

                _this9.completeRegistration();

                _this9.userService.getRegistrationCard("registration_number=".concat(data.registration_number)).subscribe(function (res) {}, function (err) {
                  _this9.loadError();
                });
              } else if (result[i].registration_step_id == 7 && result[i].status == "Not Yet") {
                _this9.stepStatus = 0;

                _this9.router.navigate(["/registration-history/registration-data/".concat(data.registration_number)]);
              }
            }
          });
        }
      }, {
        key: "completeRegistration",
        value: function completeRegistration() {
          this.openModalDetailRegDataDone();
        }
      }, {
        key: "openModalDetailRegDataDone",
        value: function openModalDetailRegDataDone() {
          var _this10 = this;

          this.loadingCard = true;
          this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
          this.userService.getParticipantDetailData(this.userProfile.email).subscribe(function (res) {
            _this10.userData = res.participant_id;

            _this10.registrationDetail.patchValue({
              fullname: res.fullname
            });

            _this10.registrationDetail.patchValue({
              mobile_phone_number: res.mobile_phone_number
            });

            _this10.userService.getRegistrationListParticipantData("registration_number=".concat(_this10.idRegistrationNumber)).subscribe(function (result) {
              _this10.registrationDetail.patchValue({
                registration_number: _this10.idRegistrationNumber
              });

              _this10.registrationDetail.patchValue({
                selection_path: result.data[0].selection_path
              });

              _this10.registrationDetail.patchValue({
                selection_program: result.data[0].selection_program
              });

              _this10.selectionPathId = result.data[0].selection_path_id; // this.registrationDetail.patchValue({ exam_location: result.data[0].location ? result.data[0].location : '-' });
              // this.registrationDetail.patchValue({ exam_address: result.data[0].address ? result.data[0].address : '-' });
              // if (result.data[0].exam_status == 1) {
              //   this.hiddenLoc = false;
              //   this.hiddenTime = false;
              //   this.getSession();
              // } else if (result.data[0].exam_status == 2) {
              //   this.hiddenLoc = true;
              //   this.hiddenTime = false;
              //   this.getSession();
              // } else {
              //   this.hiddenLoc = true;
              //   this.hiddenTime = true;

              _this10.loadingCard = false; // }
              // if (result.data[0].category === 'PJJ-ONLINE') {
              //   this.isPjjProgram = true;
              //   this.isPascasarjanaProgram = false;
              //   this.isAnotherProgram = false;
              // } else if (result.data[0].category === 'PASCASARJANA') {
              //   this.isPjjProgram = false;
              //   this.isPascasarjanaProgram = true;
              //   this.isAnotherProgram = false;
              // } else {
              //   this.isPjjProgram = true;
              //   this.isPascasarjanaProgram = false;
              //   this.isAnotherProgram = true;
              // }
            });
          });
          this.registrationDone.show();
        }
      }, {
        key: "getSession",
        value: function getSession() {
          var _this11 = this;

          this.loadingCard = true;
          this.userService.getExamSession("?registration_number=".concat(this.idRegistrationNumber)).subscribe(function (res) {
            _this11.dataSession = res;

            if (res.length !== 0) {
              _this11.loadingCard = false;

              _this11.registrationDetail.patchValue({
                exam_start_time: res[0].exam_start_date
              });

              _this11.registrationDetail.patchValue({
                exam_end_time: res[0].exam_end_date
              });

              _this11.registrationDetail.patchValue({
                session: res[0].session
              });
            } else {
              _this11.loadingCard = false;
            }
          });
        }
      }, {
        key: "nextStepDocument",
        value: function nextStepDocument() {
          this.loadSelectionDocumentData();
          this.loadRegistrationProgramStudyData2();
          this.wizard.navigation.goToStep(1);
        }
      }, {
        key: "loadSelectionDocumentData",
        value: function loadSelectionDocumentData() {
          var _this12 = this;

          this.loadtableSelectionDocumentData = true;
          this.userService.getRegistrationListParticipantData("registration_number=".concat(this.idRegistrationNumber)).subscribe(function (result) {
            _this12.chartService.getSelectionDocument("selection_id=".concat(result.data[0]['selection_path_id'], "&active_status=true")).subscribe(function (response) {
              setTimeout(function () {
                _this12.tableDataDocument = response.data;
                _this12.totalRecord = response.data.length;
                _this12.loadtableSelectionDocumentData = false;
              }, 3000);
            }, function (err) {
              // this.loadError();
              _this12.loadtableSelectionDocumentData = false;
            });
          });
        }
      }, {
        key: "loadRegistrationProgramStudyData2",
        value: function loadRegistrationProgramStudyData2() {
          var _this13 = this;

          this.loadtableRegistrationProgramStudyData = true;
          this.chartService.getRegistrationProgramStudy(this.idRegistrationNumber).subscribe(function (response) {
            setTimeout(function () {
              _this13.tableDataProdi = response.data;
              _this13.loadtableRegistrationProgramStudyData = false;
            }, 3000);
          }, function (err) {
            _this13.loadError();

            _this13.loadtableRegistrationProgramStudyData = false;
          });
        }
      }, {
        key: "loadDetailCertificateFileDataTable",
        value: function loadDetailCertificateFileDataTable() {
          var _this14 = this;

          this.loadtableCertificateData = true;
          this.userService.getDocumentCertificateData("registration_number=".concat(this.idRegistrationNumber)).subscribe(function (response) {
            setTimeout(function () {
              _this14.tableDataCertificate = response.data;
              _this14.loadtableCertificateData = false;
            }, 3000);
          }, function (err) {
            _this14.loadError();

            _this14.loadtableCertificateData = false;
          });
        }
      }, {
        key: "loadCertificateDetailFileData",
        value: function loadCertificateDetailFileData(data) {
          window.open(data.certificate_url, '_blank'); //   this.certificateDataForm.get('url').clearValidators();
          //   this.certificateDataForm.get('url').updateValueAndValidity();
          //   this.documentIdCheck = data.document_id;
          //   this.documentCertificateId = data.document_certificate_id;
          //   this.certificateDataForm.patchValue({ registration_number: this.idRegistrationNumber });
          //   this.certificateDataForm.patchValue({ document_type_id: this.documentTypeId });
          //   this.certificateDataForm.patchValue({ certificate_level_id: data.certificate_level });
          //   this.certificateDataForm.patchValue({ certificate_type_id: data.certificate_type });
          //   this.certificateDataForm.patchValue({ name: data.certificate_name });
          //   this.certificateDataForm.patchValue({ certificate_score: data.certificate_score });
          //   this.certificateDataForm.patchValue({ publication_year: data.publication_year });
          //   this.certificateDataForm.patchValue({ description: data.description });
          //   this.viewDocumentCertificate();
          // this.certificateDetailModal.show();
        }
      }, {
        key: "viewDocumentCertificate",
        value: function viewDocumentCertificate() {
          var _this15 = this;

          this.userService.getDocumentCertificateData("registration_number=".concat(this.idRegistrationNumber, "&document_certificate_id=").concat(this.documentCertificateId)).subscribe(function (response) {
            if (response.data.length !== 0) {
              _this15.listDocumentCertificate = response.data;
            } else {
              _this15.listDocumentCertificate = '';
            }
          });
        }
      }, {
        key: "loadDetailReportCardFileData",
        value: function loadDetailReportCardFileData() {
          var _this16 = this;

          this.loadtableReportCardData = true;
          this.loadSemesterChecked();
          this.userService.getReportCardData("registration_number=".concat(this.idRegistrationNumber, "&document_type_id=7")).subscribe(function (response) {
            _this16.tableDataRaport = response.data;
            _this16.loadtableReportCardData = false;
          }, function (err) {
            _this16.loadError();

            _this16.loadtableReportCardData = false;
          });
        }
      }, {
        key: "loadSemesterChecked",
        value: function loadSemesterChecked() {
          var _this17 = this;

          this.userService.getRaportSemesters("?registration_number=".concat(this.idRegistrationNumber, "&is_checked=1")).subscribe(function (res) {
            if (res.length !== 0) {
              for (var i = 0; i < res.length; i++) {
                var x = res[i].key_name;

                if (x == 'math') {
                  _this17.isMathStudy = true;
                } else if (x == 'bahasa') {
                  _this17.isBahasaStudy = true;
                } else if (x == 'english') {
                  _this17.isEnglishStudy = true;
                } else if (x == 'chemical') {
                  _this17.chemicalStudy = true;
                } else if (x == 'biology') {
                  _this17.biologyStudy = true;
                } else if (x == 'physics') {
                  _this17.physicsStudy = true;
                } else if (x == 'economy') {
                  _this17.economyStudy = true;
                } else if (x == 'sociological') {
                  _this17.sociologicalStudy = true;
                } else if (x == 'geography') {
                  _this17.geographyStudy = true;
                }
              }
            }
          });
        }
      }, {
        key: "loadReportCardDetailFileData",
        value: function loadReportCardDetailFileData(data) {
          window.open(data.url, '_blank'); //   this.documentIdCheck = data.document_id;
          //   this.documentReportCardId = data.document_report_card_id;
          //   this.reportCardDataForm.patchValue({ registration_number: this.idRegistrationNumber });
          //   this.reportCardDataForm.patchValue({ document_type_id: this.documentTypeId });
          //   this.reportCardDataForm.patchValue({ semester_id: data.semesters });
          //   this.reportCardDataForm.patchValue({ range_score: data.range_scores });
          //   this.reportCardDataForm.patchValue({ math: data.math });
          //   this.reportCardDataForm.patchValue({ physics: data.physics });
          //   this.reportCardDataForm.patchValue({ bahasa: data.bahasa });
          //   this.reportCardDataForm.patchValue({ english: data.english });
          //   this.viewDocumentReport();
          // this.reportCardDetailModal.show();
        }
      }, {
        key: "viewDocumentReport",
        value: function viewDocumentReport() {
          var _this18 = this;

          this.userService.getReportCardData("registration_number=".concat(this.idRegistrationNumber, "&document_type_id=7&document_report_card_id=").concat(this.documentReportCardId)).subscribe(function (response) {
            if (response.data.length !== 0) {
              _this18.listDocumentReport = response.data;
            } else {
              _this18.listDocumentReport = '';
            }
          });
        }
      }, {
        key: "loadDetailDocumentRequirementData",
        value: function loadDetailDocumentRequirementData(data) {
          var _this19 = this;

          this.chartService.getRegistrationDocument("".concat(this.idRegistrationNumber, "&document_type_id=").concat(data)).subscribe(function (response2) {
            _this19.documentTypeId = data;

            if (_this19.documentTypeId == 6) {
              if (response2.data.length !== 0) {
                _this19.documentTypePersonal = response2.data[0].document_type_id;
                _this19.documentidPersonal = response2.data[0].document_id;
                _this19.dataRequirementUrl = response2.data;

                _this19.documentRequirementModal.show();

                _this19.participantDocumentForm.patchValue({
                  name: response2.data[0].document_type
                });

                _this19.participantDocumentForm.patchValue({
                  url: ''
                });

                if (_this19.documentTypePersonal == 1) {
                  _this19.participantDocumentForm.patchValue({
                    number: ''
                  });

                  _this19.isShowIdentityNumber = true;
                } else {
                  _this19.isShowIdentityNumber = false;
                }
              } else {
                _this19.noDataFoundAlert();
              }
            } else if (_this19.documentTypeId == 7) {
              _this19.reportCardRequirementModal.show();

              _this19.loadDetailReportCardFileData();
            } else if (_this19.documentTypeId == 8) {
              _this19.userService.getReportCardData("?registration_number=".concat(_this19.idRegistrationNumber, "&document_type_id=8")).subscribe(function (response) {
                if (response.length !== 0) {
                  _this19.transcriptRequirementModal.show();

                  _this19.transcriptDataForm.patchValue({
                    name: 'Transkrip Nilai Pendidikan Terakhir'
                  });

                  _this19.isTranscript = true;
                  _this19.dataTranscriptUrlDoc = response.data;
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 9) {
              _this19.userService.getDocumentSupportingData("registration_number=".concat(_this19.idRegistrationNumber, "&document_type_id=9")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.documentRecommendationId = response.data[0].document_id;
                  _this19.documentSupportingId = response.data[0].document_supporting_id;

                  _this19.supportingDataForm.patchValue({
                    name: 'Surat Rekomendasi'
                  });

                  _this19.supportingDataForm.patchValue({
                    pic_email_address: response.data[0].pic_email_address
                  });

                  _this19.supportingDataForm.patchValue({
                    pic_name: response.data[0].pic_name
                  });

                  _this19.supportingDataForm.patchValue({
                    pic_phone_number: response.data[0].pic_phone_number
                  });

                  _this19.supportingDataForm.patchValue({
                    pic_address: response.data[0].pic_address
                  });

                  _this19.dataRecommendationUrl = response.data;

                  _this19.recommendationLetterRequirementModal.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 10) {
              _this19.loadDetailCertificateFileDataTable();

              _this19.certificateRequirementModal.show();
            } else if (_this19.documentTypeId == 11) {
              _this19.userService.getDocumentSupportingData("registration_number=".concat(_this19.idRegistrationNumber, "&document_type_id=11")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.documentAbilitytId = response.data[0].document_id;
                  _this19.documentAbilitySupportingId = response.data[0].document_supporting_id;

                  _this19.abilityDataForm.patchValue({
                    name: 'Surat Kemampuan Pembayaran'
                  });

                  _this19.dataAbilityUrl = response.data;

                  _this19.paymentAbilityModal.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 12) {
              _this19.userService.getUtbkDocument("?registration_number=".concat(_this19.idRegistrationNumber)).subscribe(function (response) {
                if (response.length !== 0) {
                  _this19.utbkForm.patchValue({
                    KPUScore: response[0].general_reasoning
                  });

                  _this19.utbkForm.patchValue({
                    PKScore: response[0].quantitative_knowledge
                  });

                  _this19.utbkForm.patchValue({
                    PDPUScore: response[0].comprehension_general_knowledge
                  });

                  _this19.utbkForm.patchValue({
                    KMBDMScore: response[0].comprehension_reading_knowledge
                  });

                  _this19.utbkForm.patchValue({
                    math: response[0].math
                  });

                  _this19.utbkForm.patchValue({
                    physics: response[0].physics
                  });

                  _this19.utbkForm.patchValue({
                    biological: response[0].biology
                  });

                  _this19.utbkForm.patchValue({
                    chemical: response[0].chemical
                  });

                  _this19.utbkForm.patchValue({
                    geography: response[0].geography
                  });

                  _this19.utbkForm.patchValue({
                    economy: response[0].economy
                  });

                  _this19.utbkForm.patchValue({
                    historical: response[0].historical
                  });

                  _this19.utbkForm.patchValue({
                    sociological: response[0].sociological
                  });

                  _this19.utbkForm.patchValue({
                    category: response[0].major_type == 2 ? 'SOSHUM' : 'SAINTEK'
                  });

                  _this19.dataUtbkUrl = response;

                  _this19.utbkModals.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 13) {
              _this19.userService.getDocumentStudy("?registration_number=".concat(_this19.idRegistrationNumber, "&document_type_id=13")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.isTPADocument = true;
                  _this19.isCoPromotor = false;
                  _this19.isIPKDocument = false;
                  _this19.isEPRTDocument = false;
                  _this19.isPromotor = false;

                  _this19.eprtAndTpaForm.patchValue({
                    name: 'TPA'
                  });

                  _this19.eprtAndTpaForm.patchValue({
                    eprt_tpa_score: response.data[0].score
                  });

                  _this19.eprtAndTpaForm.patchValue({
                    publication_year: response.data[0].year
                  });

                  _this19.dataStudyUrl = response.data;

                  _this19.eprtAndTpaModal.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 14) {
              _this19.userService.getDocumentStudy("?registration_number=".concat(_this19.idRegistrationNumber, "&document_type_id=14")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.isTPADocument = false;
                  _this19.isCoPromotor = false;
                  _this19.isIPKDocument = true;
                  _this19.isEPRTDocument = false;
                  _this19.isPromotor = false;

                  _this19.eprtAndTpaForm.patchValue({
                    name: 'IPK'
                  });

                  _this19.eprtAndTpaForm.patchValue({
                    eprt_tpa_score: ''
                  });

                  _this19.eprtAndTpaForm.patchValue({
                    gpa: response.data[0].score
                  });

                  _this19.dataStudyUrl = response.data;

                  _this19.eprtAndTpaModal.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 15) {
              _this19.userService.getDocumentRecommendation("?registration_number=".concat(_this19.idRegistrationNumber)).subscribe(function (response) {
                if (response.length !== 0) {
                  _this19.loading = false;

                  _this19.recommendationS2Form.patchValue({
                    name_rec1: response[0].name
                  });

                  _this19.recommendationS2Form.patchValue({
                    handphone_rec1: response[0].handphone
                  });

                  _this19.recommendationS2Form.patchValue({
                    email_rec1: response[0].email
                  });

                  _this19.recommendationS2Form.patchValue({
                    name_rec2: response[1].name
                  });

                  _this19.recommendationS2Form.patchValue({
                    handphone_rec2: response[1].handphone
                  });

                  _this19.recommendationS2Form.patchValue({
                    email_rec2: response[1].email
                  });

                  _this19.recommendationS2Modal.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 16) {
              _this19.userService.getDocumentStudy("?registration_number=".concat(_this19.idRegistrationNumber, "&document_type_id=16")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.isTPADocument = false;
                  _this19.isCoPromotor = false;
                  _this19.isIPKDocument = false;
                  _this19.isEPRTDocument = false;
                  _this19.isPromotor = true;

                  _this19.eprtAndTpaForm.patchValue({
                    name: 'Kesediaan Promotor'
                  });

                  _this19.dataStudyUrl = response.data;

                  _this19.eprtAndTpaModal.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 17) {
              _this19.userService.getDocumentStudy("?registration_number=".concat(_this19.idRegistrationNumber, "&document_type_id=17")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.isProposal = true;

                  _this19.proposalForm.patchValue({
                    title: response.data[0].title
                  });

                  _this19.dataProposal = response.data;

                  _this19.proposalModal.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 18) {
              _this19.chartService.getRegistrationDocument("".concat(_this19.idRegistrationNumber, "&document_type_id=18")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.isIjazahS1 = true;
                  _this19.isIjazahS2 = false;
                  _this19.isPortofolio = false;

                  _this19.ijazahForm.patchValue({
                    name: response2.data[0].document_type
                  });

                  _this19.dataIjazah = response2.data;

                  _this19.ijazahModals.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 19) {
              _this19.chartService.getRegistrationDocument("".concat(_this19.idRegistrationNumber, "&document_type_id=19")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.isIjazahS1 = false;
                  _this19.isIjazahS2 = true;
                  _this19.isPortofolio = false;

                  _this19.ijazahForm.patchValue({
                    name: response2.data[0].document_type
                  });

                  _this19.dataIjazah = response2.data;

                  _this19.ijazahModals.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 20) {
              _this19.userService.getDocumentStudy("?registration_number=".concat(_this19.idRegistrationNumber, "&document_type_id=20")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.isPromotor = false;
                  _this19.isResidensi = true;
                  _this19.isSuratIjinAtasan = false;
                  _this19.isCoPromotor = false;
                  _this19.isIPKDocument = false;
                  _this19.isTPADocument = false;

                  _this19.eprtAndTpaForm.patchValue({
                    name: response.data[0].document_name
                  });

                  _this19.dataStudyUrl = response.data;

                  _this19.eprtAndTpaModal.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 21) {
              _this19.userService.getDocumentStudy("?registration_number=".concat(_this19.idRegistrationNumber, "&document_type_id=21")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.isPromotor = false;
                  _this19.isResidensi = false;
                  _this19.isSuratIjinAtasan = true;
                  _this19.isCoPromotor = false;
                  _this19.isIPKDocument = false;
                  _this19.isTPADocument = false;
                  _this19.isEPRTDocument = false;

                  _this19.eprtAndTpaForm.patchValue({
                    name: response.data[0].document_name
                  });

                  _this19.dataStudyUrl = response.data;

                  _this19.eprtAndTpaModal.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 22) {
              _this19.chartService.getRegistrationDocument("".concat(_this19.idRegistrationNumber, "&document_type_id=22")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.isIjazahS1 = false;
                  _this19.isIjazahS2 = false;
                  _this19.isPortofolio = true;

                  _this19.ijazahForm.patchValue({
                    link_document: response2.data[0].document_url
                  });

                  _this19.ijazahForm.patchValue({
                    name: response2.data[0].document_type
                  });

                  _this19.dataIjazah = response2.data;

                  _this19.ijazahModals.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 23) {
              _this19.userService.getReportCardData("registration_number=".concat(_this19.idRegistrationNumber, "&document_type_id=23")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.isTranscript = false;

                  _this19.transcriptDataForm.patchValue({
                    name: 'Transkrip Ijazah S1'
                  });

                  _this19.transcriptDataForm.patchValue({
                    gpa: response.data[0].gpa
                  });

                  _this19.dataTranscriptUrlDoc = response.data;

                  _this19.transcriptRequirementModal.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 24) {
              _this19.userService.getReportCardData("registration_number=".concat(_this19.idRegistrationNumber, "&document_type_id=24")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.isTranscript = false;

                  _this19.transcriptDataForm.patchValue({
                    name: 'Transkrip Ijazah S2'
                  });

                  _this19.transcriptDataForm.patchValue({
                    gpa: response.data[0].gpa
                  });

                  _this19.dataTranscriptUrlDoc = response.data;

                  _this19.transcriptRequirementModal.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 25) {
              _this19.userService.getTranscriptDocument("?registration_number=".concat(_this19.idRegistrationNumber)).subscribe(function (response) {
                if (response.length !== 0) {
                  var x = response[0].id;

                  _this19.userService.getTranscriptDocumentDetails("?document_transcript_id=".concat(x)).subscribe(function (response) {
                    if (response.length !== 0) {
                      _this19.formType = 'view';
                      _this19.tableTranscript = response.courses;
                      _this19.documentTranscriptId = response.id;

                      _this19.transcriptFormlView.patchValue({
                        name: 'Transkrip Nilai Kredit Transfer '
                      });

                      _this19.transcriptFormlView.patchValue({
                        totalCredit: response.total_credit
                      });

                      _this19.transcriptFormlView.patchValue({
                        totalCourse: response.total_course
                      });

                      _this19.dataTranscriptUrl = response.url;

                      _this19.transcriptRequirementModalView.show();
                    }
                  });
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 26) {
              _this19.getTablePublication();

              _this19.publicationDataModals.show();

              _this19.loading = false;
            } else if (_this19.documentTypeId == 27) {
              _this19.userService.getDocumentStudy("?registration_number=".concat(_this19.idRegistrationNumber, "&document_type_id=27")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.isPromotor = false;
                  _this19.isResidensi = false;
                  _this19.isSuratIjinAtasan = false;
                  _this19.isCoPromotor = true;
                  _this19.isIPKDocument = false;
                  _this19.isTPADocument = false;
                  _this19.isEPRTDocument = false;

                  _this19.eprtAndTpaForm.patchValue({
                    nameCoPromotor: response.data[0].document_name
                  });

                  _this19.eprtAndTpaForm.patchValue({
                    name: response.data[0].document_description
                  });

                  _this19.dataStudyUrl = response.data;

                  _this19.eprtAndTpaModal.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else if (_this19.documentTypeId == 28) {
              _this19.userService.getDocumentStudy("?registration_number=".concat(_this19.idRegistrationNumber, "&document_type_id=28")).subscribe(function (response) {
                if (response.data.length !== 0) {
                  _this19.isPromotor = false;
                  _this19.isResidensi = false;
                  _this19.isSuratIjinAtasan = false;
                  _this19.isCoPromotor = false;
                  _this19.isIPKDocument = false;
                  _this19.isTPADocument = false;
                  _this19.isEPRTDocument = true;

                  _this19.eprtAndTpaForm.patchValue({
                    name: response.data[0].document_name
                  });

                  _this19.eprtAndTpaForm.patchValue({
                    eprt_tpa_score: response.data[0].score
                  });

                  _this19.eprtAndTpaForm.patchValue({
                    publication_year: response.data[0].year
                  });

                  _this19.dataStudyUrl = response.data;

                  _this19.eprtAndTpaModal.show();
                } else {
                  _this19.noDataFoundAlert();
                }
              });
            } else {
              _this19.userService.getPersonalDocumentData("".concat(_this19.userData, "&document_type_id=").concat(_this19.documentTypeId)).subscribe(function (res) {
                if (res.data.length !== 0) {
                  if (res.data[0].document_id === null) {
                    _this19.documentTypePersonal = _this19.documentTypeId;

                    if (_this19.documentTypePersonal == 1) {
                      _this19.isShowIdentityNumber = true;
                    } else {
                      _this19.isShowIdentityNumber = false;
                    }

                    _this19.participantDocumentForm.patchValue({
                      name: res.data[0].document_name
                    });

                    _this19.participantDocumentForm.patchValue({
                      url: ''
                    });

                    _this19.dataRequirementUrl = '';

                    _this19.documentRequirementModal.show();
                  } else {
                    _this19.documentTypePersonal = res.data[0].document_type_id;
                    _this19.documentidPersonal = res.data[0].document_id;
                    _this19.dataRequirementUrl = res.data;

                    _this19.documentRequirementModal.show();

                    _this19.participantDocumentForm.patchValue({
                      name: res.data[0].document_name
                    });

                    _this19.participantDocumentForm.patchValue({
                      url: ''
                    });

                    if (_this19.documentTypePersonal == 1) {
                      _this19.participantDocumentForm.patchValue({
                        number: res.data[0].number
                      });

                      _this19.isShowIdentityNumber = true;
                    } else {
                      _this19.participantDocumentForm.patchValue({
                        number: ''
                      });

                      _this19.isShowIdentityNumber = false;
                    }
                  }
                }
              });
            }
          });
        }
      }, {
        key: "closeRequirementDocumentModal",
        value: function closeRequirementDocumentModal() {
          this.documentRequirementModal.hide();
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "closeCertificateDocumentModal",
        value: function closeCertificateDocumentModal() {
          this.certificateRequirementModal.hide();
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "closeRaportDocumentModal",
        value: function closeRaportDocumentModal() {
          this.reportCardRequirementModal.hide();
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "closeRecommendationLetterModal",
        value: function closeRecommendationLetterModal() {
          this.recommendationLetterRequirementModal.hide();
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "closePaymentAbilityModal",
        value: function closePaymentAbilityModal() {
          this.paymentAbilityModal.hide();
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "closeTranscriptModal",
        value: function closeTranscriptModal() {
          this.transcriptRequirementModal.hide();
          document.querySelector('body').classList.add('modal-open');
          this.isTranscript = false;
          this.transcriptDataForm.reset();
        }
      }, {
        key: "closeUtbkModals",
        value: function closeUtbkModals() {
          this.utbkForm.reset();
          this.utbkModals.hide();
          this.dataUtbkUrl = [];
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "closeEprtTpaModals",
        value: function closeEprtTpaModals() {
          this.eprtAndTpaModal.hide();
          this.eprtAndTpaForm.reset();
          this.isPromotor = false;
          this.isIPKDocument = false;
          this.isTPADocument = false;
          this.isEPRTDocument = false;
          this.isResidensi = false;
          this.isSuratIjinAtasan = false;
          this.isCoPromotor = false;
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "closeProposal",
        value: function closeProposal() {
          this.proposalModal.hide();
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "closeIjazahModals",
        value: function closeIjazahModals() {
          this.ijazahModals.hide();
          this.ijazahForm.reset();
          this.isIjazahS1 = false;
          this.isIjazahS2 = false;
          this.isPortofolio = false;
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "closeTranscriptRequirementModalView",
        value: function closeTranscriptRequirementModalView() {
          this.transcriptRequirementModalView.hide();
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "closePublicationDataModals",
        value: function closePublicationDataModals() {
          this.publicationDataModals.hide();
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "closeRecommendationS2Modal",
        value: function closeRecommendationS2Modal() {
          this.recommendationS2Modal.hide();
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "resetWizard",
        value: function resetWizard() {
          this.wizard.navigation.reset();
          this.registrationDone.hide();
          this.registrationDetail.reset();
        }
      }, {
        key: "getTablePublication",
        value: function getTablePublication() {
          var _this20 = this;

          this.loadTablePublication = true;
          this.userService.getDocumentPublication("?participant_id=".concat(this.participantId)).subscribe(function (response) {
            _this20.tableDataPublication = response;
            _this20.totalRecordPub = response.length;
            _this20.loadTablePublication = false;
          }, function (err) {
            _this20.loadError();

            _this20.loadTablePublication = false;
          });
        }
      }, {
        key: "paymentAccepted",
        value: function paymentAccepted(data) {
          // if (data.payment_receipt_status !== 'Lunas') {
          //   Swal.fire({
          //     title: 'Info!',
          //     text: "Mohon Maaf, Anda belum bisa melengkapi Data Registrasi sebelum melakukan pembayaran",
          //     type: 'info',
          //     showConfirmButton: true,
          //   });
          // } else {
          this.createRegistrationHistory_4(data); // }
        }
      }, {
        key: "renderPayment",
        value: function renderPayment() {
          this.dtElements.forEach(function (dtElement, index) {
            if (index == 0) {
              dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              });
            }
          });
        }
      }, {
        key: "loadPaymentMethodDataFilter",
        value: function loadPaymentMethodDataFilter() {
          var _this21 = this;

          this.loadFilter = true;
          this.chartService.getPaymentMethodData().subscribe(function (filterArray) {
            var dataPaymentMethod = [];
            var x;

            for (var i = 0; i < filterArray.length; i++) {
              x = {
                value: filterArray[i].id.toString(),
                label: filterArray[i].method
              };
              dataPaymentMethod.push(x);
              _this21.listPaymentMethod = dataPaymentMethod;
            }

            _this21.loadFilter = false;
          }, function (err) {
            _this21.loadError();

            _this21.loadFilter = false;
          });
        }
      }, {
        key: "cetakKartuPeserta",
        value: function cetakKartuPeserta() {
          var _this22 = this;

          this.userService.getRegistrationCard("registration_number=".concat(this.idRegistrationNumber)).subscribe(function (res) {
            window.open(res.urls, "_blank");
          }, function (err) {
            _this22.loadError();
          });
        }
      }, {
        key: "panduanPembayaran",
        value: function panduanPembayaran() {
          var url = "https://smb.telkomuniversity.ac.id/wp-content/uploads/2020/11/PANDUAN-PEMBAYARAN-PIN-PENDAFTARAN.pdf";
          window.open(url).focus();
        }
      }, {
        key: "noDataFoundAlert",
        value: function noDataFoundAlert() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: 'Info',
            text: 'Tidak ada data ditemukan',
            type: 'error'
          });
        }
      }]);

      return RegistrationHistoryComponent;
    }();

    RegistrationHistoryComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"]
      }, {
        type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantService"]
      }, {
        type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__["AdminManagementService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registrationDone', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "registrationDone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_12__["WizardComponent"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_12__["WizardComponent"])], RegistrationHistoryComponent.prototype, "wizard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportCardRequirementModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "reportCardRequirementModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('documentRequirementModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "documentRequirementModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateRequirementModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "certificateRequirementModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transcriptRequirementModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "transcriptRequirementModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentAbilityModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "paymentAbilityModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recommendationLetterRequirementModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "recommendationLetterRequirementModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportCardDetailModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "reportCardDetailModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateDetailModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "certificateDetailModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('utbkModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "utbkModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], RegistrationHistoryComponent.prototype, "dtElements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validationPaymentModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "validationPaymentModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentConfirmation', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "paymentConfirmation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transcriptRequirementModalView', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "transcriptRequirementModalView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('eprtAndTpaModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "eprtAndTpaModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ipkModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "ipkModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recommendationS2Modal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "recommendationS2Modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('proposalModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "proposalModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ijazahModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "ijazahModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('publikasiModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "publikasiModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('publicationDataModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegistrationHistoryComponent.prototype, "publicationDataModals", void 0);
    RegistrationHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/registration-history/registration-history.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration-history.component.scss */
      "./src/app/theme/registration-history/registration-history.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"], src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantService"], src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__["AdminManagementService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], RegistrationHistoryComponent);
    /***/
  },

  /***/
  "./src/app/theme/registration-history/registration-history.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/theme/registration-history/registration-history.module.ts ***!
    \***************************************************************************/

  /*! exports provided: RegistrationHistoryModule */

  /***/
  function srcAppThemeRegistrationHistoryRegistrationHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationHistoryModule", function () {
      return RegistrationHistoryModule;
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


    var _registration_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registration-history.component */
    "./src/app/theme/registration-history/registration-history.component.ts");
    /* harmony import */


    var _registration_history_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./registration-history-routing.module */
    "./src/app/theme/registration-history/registration-history-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-archwizard/dist */
    "./node_modules/ng2-archwizard/dist/index.js");

    var RegistrationHistoryModule = function RegistrationHistoryModule() {
      _classCallCheck(this, RegistrationHistoryModule);
    };

    RegistrationHistoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_registration_history_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationHistoryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _registration_history_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationHistoryRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_8__["ArchwizardModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"]]
    })], RegistrationHistoryModule);
    /***/
  }
}]);
//# sourceMappingURL=theme-registration-history-registration-history-module-es5.js.map