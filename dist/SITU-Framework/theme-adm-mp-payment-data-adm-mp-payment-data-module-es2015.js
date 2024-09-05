(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-adm-mp-payment-data-adm-mp-payment-data-module"],{

/***/ "./node_modules/angular-datatables/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

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

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableDirective = /** @class */ (function () {
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
        }
        else {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableDirective.prototype, "dtOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], DataTableDirective.prototype, "dtTrigger", void 0);
    DataTableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[datatable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DataTableDirective);
    return DataTableDirective;
}());

//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule_1 = DataTablesModule;
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule_1
        };
    };
    var DataTablesModule_1;
    DataTablesModule = DataTablesModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
            exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
        })
    ], DataTablesModule);
    return DataTablesModule;
}());

//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-payment-data/adm-mp-payment-data.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-payment-data/adm-mp-payment-data.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>Payment Data Management works!</p> -->\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"{{ 'MENU.payment-data' | translate }}\" cardClass=\"card-datatable\"\n      headerClass=\"text-center text-md-left\" [hidHeader]=\"true\" [options]=\"false\" [loading]=\"loadtablePaymentData\">\n      <div class=\"align-items-center m-1\">\n        <button class=\"btn btn-secondary btn-sm btn-round has-ripple ml-0\" *ngIf=\"filterClick\"\n          (click)=\"filterClick = !filterClick\" [attr.aria-expanded]=\"!filterClick\" aria-controls=\"collapseExample\">\n          {{ 'CONTENT.button-filter' | translate }} <i class=\"feather icon-chevron-down\"></i>\n        </button>\n        <app-filter-container [loading]=\"false\">\n          <div class=\"col-12 col-md-3\">\n            <ng-select name=\"selection\" [allowClear]=\"false\"\n              [placeholder]=\"'CONTENT.selection-path-choosing' | translate\" [ngClass]=\"'filter'\"\n              [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"selectionPath\" [options]=\"listSelectionPath\"\n              (ngModelChange)=\"changeYear(selectionPath)\"></ng-select>\n          </div>\n          <div class=\"col-12 col-md-2\">\n            <ng-select name=\"year\" [allowClear]=\"false\" [placeholder]=\"'CONTENT.selection-year-choosing' | translate\"\n              [ngClass]=\"'filter'\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"selectionYear\"\n              [disabled]=\"!selectionPath\" [options]=\"listSelectionYear\"\n              (selected)=\"changePaymentMethod($event)\"></ng-select>\n          </div>\n          <div class=\"col-12 col-md-3\">\n            <ng-select name=\"payment-method\" [allowClear]=\"false\" [placeholder]=\"'CONTENT.payment-method' | translate\"\n              [ngClass]=\"'filter'\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"paymentMethod\"\n              [disabled]=\"!selectionYear\" [options]=\"listPaymentMethod\"></ng-select>\n          </div>\n          <div class=\"col-12 col-md-3\">\n            <ng-select name=\"payment-method\" [allowClear]=\"false\"\n              [placeholder]=\"'CONTENT.choose-verification-transaction' | translate\" [ngClass]=\"'filter'\"\n              [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"selectionVerification\"\n              [options]=\"listVerificationTr\"></ng-select>\n          </div>\n          <div class=\"col-filter-header\">\n            <div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-7\">\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"row pl-3 pr-3 pt-1\">\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-outline-warning btn-sm btn-block\" (click)=\"resetFilters()\">\n                  <i class=\"icofont icofont-refresh\"></i> {{ 'CONTENT.reset-filter' | translate }}\n                </button>\n              </div>\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-outline-info btn-sm btn-block\"\n                  [disabled]=\"!selectionPath || !selectionYear || !paymentMethod\"\n                  (click)=\"applyFilters()\">\n                  <i class=\"icofont icofont-filter\"></i> {{ 'CONTENT.apply-filter' | translate }}\n                </button>\n              </div>\n            </div>\n          </div>\n        </app-filter-container>\n        <div *ngIf=\"isApplyFilter\" class=\"row\">\n          <div class=\"col-12 col-md-8 text-left text-md-left mt-2\">\n            <button *ngIf=\"!hiddenDownloadPayment\" class=\"btn btn-outline-success btn-round has-ripple col-12 col-md-4 mt-0\"\n            (click)=\"downloadExcelData(selectionVerification)\" [disabled]=\"loadDownloadData\">\n            <span *ngIf=\"this.loadDownloadData\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loadDownloadData\" class=\"load-text\"> {{'ROOT.loading' | translate}}...</span>\n            <i class=\"fas fa-cloud-download-alt\" *ngIf=\"!this.loadDownloadData\"></i>\n            <span *ngIf=\"!this.loadDownloadData\" class=\"btn-text\">\n              {{ 'ROOT.download' | translate }} {{ 'MENU.payment-data' | translate }}\n            </span>\n          </button>\n          </div>\n          <div class=\"col-12 col-md-4 text-right text-md-right mt-2\">\n              <div class=\"input-group\">\n                <input type=\"search\" class=\"form-control\"\n                  [placeholder]=\"'CONTENT.placeholder-registration-number'| translate\" [(ngModel)]=\"searching\"\n                  [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"applyFilters()\">\n                <div class=\"input-group-append\">\n                  <button style=\"z-index: auto;\" class=\"btn btn-outline-primary\" type=\"button\"\n                    (click)=\"applyFilters()\"><i class=\"fas fa-search\"></i></button>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"isApplyFilter\" class=\"table-responsive pb-1\">\n        <table class=\"table table-boder-radius dataTable\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.registration-number' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.selection-path' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.amount-of-bill' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.payment-method' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.verification-transaction' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.payment-status' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"dataPayment?.length != 0\">\n            <tr *ngFor=\"let data of dataPayment | slice: (currentPage-1) * pageSize; let i = index\">\n              <th scope=\"row\" style=\"padding-left: 10px\">{{ i+from }}</th>\n              <td class=\"center-table\">{{ data.registration_number }}</td>\n              <td class=\"center-table\">{{ data.selection_path_name ? data.selection_path_name : '-' }}</td>\n              <td class=\"center-table\">\n                <div *ngIf=\"data.price === null\">\n                  <p>-</p>\n                </div>\n                <div *ngIf=\"data.price !== null\">\n                  <p>\n                    {{ data.price | currency:'Rp':'symbol':'1.0-0'}}\n                  </p>\n                </div>\n              </td>\n              <td class=\"center-table\">{{ data.payment_method_name ? data.payment_method_name : '-' }}</td>\n              <td class=\"text-center\">\n                <div *ngIf=\"data.payment_status_name === 'Lunas'\">\n                  <span class=\"badge badge-light-secondary\">{{'CONTENT.verification-not-needed' | translate}}</span>\n                </div>\n                <div *ngIf=\"data.payment_status_name === 'Belum Lunas'\">\n                  <span class=\"badge badge-light-secondary\"\n                    *ngIf=\"data.payment_url !== null && data.payment_approval_date !== null\">{{'CONTENT.verification-not-needed'\n                    | translate}}</span>\n                  <span class=\"badge badge-light-secondary\"\n                    *ngIf=\"data.payment_url === null && data.payment_approval_date === null\">{{'CONTENT.verification-not-needed'\n                    | translate}}</span>\n                  <span class=\"badge badge-light-primary\"\n                    *ngIf=\"data.payment_url !== null && data.payment_approval_date === null\">{{'CONTENT.need-verification'\n                    | translate}}</span>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <span class=\"badge badge-light-success\" *ngIf=\"data.payment_status == '1'\">{{'CONTENT.paid-off' |\n                  translate}}</span>\n                <span class=\"badge badge-light-danger\" *ngIf=\"data.payment_status == '2'\">\n                  {{'CONTENT.not-paid' | translate}}</span>\n                <span class=\"badge badge-light-warning\"\n                  *ngIf=\"data.payment_status === 'null'\">{{'CONTENT.waiting-confirmation' | translate}}</span>\n              </td>\n              <td class=\"center-table\">\n                <button class=\"btn btn-warning btn-sm btn-round has-ripple\" (click)=\"loadDetailPaymentData(data)\">\n                  <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}}</span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"dataPayment.length == 0 && !loadtablePaymentData\">\n            <tr>\n              <td colspan=\"8\" class=\"no-data-available text-center\">\n                <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n              </td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"dataPayment.length == 0  && loadtablePaymentData\">\n            <tr>\n              <td colspan=\"8\" class=\"no-data-available text-center\">\n                <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n              </td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n        </table>\n        <ngb-pagination class=\"d-flex justify-content-center mt-2\" [pageSize]=\"pageSize\" [collectionSize]=\"collectionSize\" [boundaryLinks]=\"true\" [maxSize]=\"5\"\n              [(page)]=\"currentPage\" (pageChange)=\"changePage($event)\" [maxSize]=\"3\" [boundaryLinks]=\"true\">\n            </ngb-pagination>\n      </div>\n      <div *ngIf=\"!isApplyFilter\" class=\"text-center\">\n        <div class=\"col-12 text-center pt-3 pb-1\">\n          <app-no-data-found message=\"Silakan memilih filter terlebih dahulu\"></app-no-data-found>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>\n\n<!-- Forms Modal -->\n<app-ui-modal #myPersistenceModal [containerClick]=\"false\" dialogClass=\"modal-dialog modal-dialog-centered modal-l\" [loading]=\"loading\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'MENU.payment-data' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"myPersistenceModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"paymentDataForm\"\n      (ngSubmit)=\"createDetailSelectionStepData()\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\" >\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.registration-number' | translate }}</label>\n            <input type=\"text\" readonly class=\"form-control\" name=\"name\" required formControlName=\"registration_number\">\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n              'CONTENT.please-input' | translate }}{{ 'CONTENT.program-name' | translate }}</label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.selection-path' | translate }}</label>\n            <input type=\"text\" readonly class=\"form-control\" name=\"name\" required formControlName=\"selection_path_name\">\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n              'CONTENT.please-choose' | translate }}{{ 'CONTENT.selection-path' | translate }}</label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.payment-method' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"payment_method\" readonly formControlName=\"payment_method\">\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.amount-of-bill' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" readonly formControlName=\"price\">\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-1 f-w-600\">{{ 'CONTENT.payment-evidence' | translate }}</label>\n            <div class=\"card text-left mb-3\">\n              <div class=\"card-body p-2\" *ngIf=\"paymentUrl != null\">\n                <a [href]=\"paymentUrl\" target=\"_blank\" class=\" d-flex flex-row\" [title]=\"'ROOT.download' | translate\">\n                  <i class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                  <p class=\"card-text pl-1 mb-0\">\n                    {{ 'CONTENT.payment-evidence' | translate }}\n                  </p>\n                </a>\n              </div>\n              <div class=\"card-body p-2\" *ngIf=\"paymentUrl == null\">\n                <p class=\"card-text pl-1 mb-0 mt-1 text-center\">\n                  {{ 'ROOT.no_data_found' | translate }}\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <!-- <div class=\"btn-group\"> -->\n              <!-- <button type=\"button\" (click)=\"myPersistenceModal.hide()\" class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.cancel' | translate }}\n              </button>\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"myPersistenceModal.hide()\"\n                [disabled]=\"!paymentMethod || paymentDataForm.invalid || haveNoEvidence\">\n                <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n              </button> -->\n            <!-- </div> -->\n            <!-- <button *ngIf=\"!haveNoEvidence\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n            [disabled]=\"this.loading\" (click)=\"submitRejectPayment()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{\n              'CONTENT.tolak' | translate }} </span>\n          </button> -->\n          <button *ngIf=\"!haveNoEvidence\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n            [disabled]=\"this.loading\" (click)=\"submitApprovePayment()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n              'CONTENT.setujui' | translate }} Pembayaran</span>\n              </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<ng-template #showLoading>\n  <div class=\"d-flex justify-content-center\">\n    <div class=\"spinner-border text-primary\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/theme/adm-mp-payment-data/adm-mp-payment-data-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/adm-mp-payment-data/adm-mp-payment-data-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AdmMpPaymentDataRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMpPaymentDataRoutingModule", function() { return AdmMpPaymentDataRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _adm_mp_payment_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm-mp-payment-data.component */ "./src/app/theme/adm-mp-payment-data/adm-mp-payment-data.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _adm_mp_payment_data_component__WEBPACK_IMPORTED_MODULE_2__["AdmMpPaymentDataComponent"]
    }
];
let AdmMpPaymentDataRoutingModule = class AdmMpPaymentDataRoutingModule {
};
AdmMpPaymentDataRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AdmMpPaymentDataRoutingModule);



/***/ }),

/***/ "./src/app/theme/adm-mp-payment-data/adm-mp-payment-data.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/theme/adm-mp-payment-data/adm-mp-payment-data.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\ninput[type=search] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  border: 1px solid #4680ff;\n  display: inline-block;\n}\n\n.center-table {\n  text-align: center;\n}\n\n.color-searching {\n  background-color: #D0D3D4;\n}\n\n.center-table {\n  text-align: center;\n}\n\n@media (min-width: 576px) {\n  .button-margin {\n    margin-left: 10px;\n  }\n\n  .img-size-md {\n    width: 60px;\n  }\n\n  .button-margin-top-medium {\n    margin-top: 7px;\n  }\n}\n\n@media (max-width: 575px) {\n  .button-margin-top {\n    margin-top: 7px;\n  }\n\n  .text-center {\n    text-align: center;\n  }\n\n  .img-size {\n    width: 50px;\n  }\n\n  .text-margin {\n    margin-bottom: 5px;\n  }\n}\n\n@media (min-width: 768px) {\n  .button-size-md {\n    width: 150px;\n  }\n\n  .button-margin {\n    margin-left: 10px;\n  }\n\n  .button-margin-group {\n    margin-left: 10px;\n  }\n\n  .button-size-input {\n    width: 220px;\n  }\n\n  .button-size-input-unduh {\n    width: 175px;\n  }\n}\n\n.table-boder-radius {\n  border-collapse: collapse;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n\n.table-boder-radius tr:hover {\n  color: #4680ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2FkbS10cmlzYWt0aS9zcmMvYXBwL3RoZW1lL2FkbS1tcC1wYXltZW50LWRhdGEvYWRtLW1wLXBheW1lbnQtZGF0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvYWRtLW1wLXBheW1lbnQtZGF0YS9hZG0tbXAtcGF5bWVudC1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEREE7RUFDQyxrQkFBQTtBQ0lEOztBREZBO0VBQ0UseUJBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0FDTUY7O0FESkE7RUFDRTtJQUNFLGlCQUFBO0VDT0Y7O0VETEE7SUFDRSxXQUFBO0VDUUY7O0VETkE7SUFDRSxlQUFBO0VDU0Y7QUFDRjs7QUROQTtFQUNFO0lBQ0UsZUFBQTtFQ1FGOztFRE5BO0lBQ0Usa0JBQUE7RUNTRjs7RURQQTtJQUNFLFdBQUE7RUNVRjs7RURSQTtJQUVFLGtCQUFBO0VDVUY7QUFDRjs7QURQQTtFQUNFO0lBQ0UsWUFBQTtFQ1NGOztFRFBBO0lBQ0UsaUJBQUE7RUNVRjs7RURSQTtJQUNFLGlCQUFBO0VDV0Y7O0VEVEE7SUFDRSxZQUFBO0VDWUY7O0VEVkE7SUFDRSxZQUFBO0VDYUY7QUFDRjs7QURWQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1lGOztBRFhFO0VBQ0UsY0FBQTtBQ2FKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvYWRtLW1wLXBheW1lbnQtZGF0YS9hZG0tbXAtcGF5bWVudC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGR7XG4gIHRhYmxlLWxheW91dDpmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG50aHtcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbmlucHV0W3R5cGU9c2VhcmNoXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2ODBmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNlbnRlci10YWJsZXtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29sb3Itc2VhcmNoaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojRDBEM0Q0O1xufVxuLmNlbnRlci10YWJsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuYnV0dG9uLW1hcmdpbntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAuaW1nLXNpemUtbWR7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cbiAgLmJ1dHRvbi1tYXJnaW4tdG9wLW1lZGl1bSB7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuYnV0dG9uLW1hcmdpbi10b3B7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICB9XG4gIC50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmltZy1zaXple1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIC50ZXh0LW1hcmdpbntcbiAgICAvLyBtYXJnaW4tbGVmdDogN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmJ1dHRvbi1zaXplLW1kIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbiAgLmJ1dHRvbi1tYXJnaW57XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmJ1dHRvbi1tYXJnaW4tZ3JvdXB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmJ1dHRvbi1zaXplLWlucHV0IHtcbiAgICB3aWR0aDogMjIwcHg7XG4gIH1cbiAgLmJ1dHRvbi1zaXplLWlucHV0LXVuZHVoIHtcbiAgICB3aWR0aDogMTc1cHg7XG4gIH1cbn1cblxuLnRhYmxlLWJvZGVyLXJhZGl1cyB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHI6aG92ZXIge1xuICAgIGNvbG9yOiAjNDY4MGZmO1xuICB9XG59IiwidGQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxudGgge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDY4MGZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jZW50ZXItdGFibGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2xvci1zZWFyY2hpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDBEM0Q0O1xufVxuXG4uY2VudGVyLXRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmJ1dHRvbi1tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLmltZy1zaXplLW1kIHtcbiAgICB3aWR0aDogNjBweDtcbiAgfVxuXG4gIC5idXR0b24tbWFyZ2luLXRvcC1tZWRpdW0ge1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5idXR0b24tbWFyZ2luLXRvcCB7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICB9XG5cbiAgLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaW1nLXNpemUge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgLnRleHQtbWFyZ2luIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYnV0dG9uLXNpemUtbWQge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuXG4gIC5idXR0b24tbWFyZ2luIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC5idXR0b24tbWFyZ2luLWdyb3VwIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC5idXR0b24tc2l6ZS1pbnB1dCB7XG4gICAgd2lkdGg6IDIyMHB4O1xuICB9XG5cbiAgLmJ1dHRvbi1zaXplLWlucHV0LXVuZHVoIHtcbiAgICB3aWR0aDogMTc1cHg7XG4gIH1cbn1cbi50YWJsZS1ib2Rlci1yYWRpdXMge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGFibGUtYm9kZXItcmFkaXVzIHRyOmhvdmVyIHtcbiAgY29sb3I6ICM0NjgwZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/theme/adm-mp-payment-data/adm-mp-payment-data.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/adm-mp-payment-data/adm-mp-payment-data.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdmMpPaymentDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMpPaymentDataComponent", function() { return AdmMpPaymentDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/admin-management.service */ "./src/app/_services/admin-management.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let AdmMpPaymentDataComponent = class AdmMpPaymentDataComponent {
    constructor(translateService, broadcasterService, chartService, fb) {
        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.fb = fb;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(res => {
            translateService.setDefaultLang(res.lang);
        });
        this.paymentDataForm = this.fb.group({
            registration_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            selection_path_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            payment_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            payment_method: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            pin_activation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            payment_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
        this.loadDownloadData = false;
        this.isChecked = false;
        this.haveNoEvidence = false;
        this.active = false;
        this.status_active = false;
        this.isApplyFilter = false;
        this.tableData = [];
        this.dataPayment = [];
        this.isTabledata = false;
        this.isChangePage = false;
        this.hiddenDownloadPayment = false;
        this.searching = '';
    }
    get fpay() {
        return this.paymentDataForm.controls;
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            destroy: true,
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
            initComplete: () => {
            }
        };
        this.loadPaymentStatusDataFilter();
        this.verificationPicklist();
        this.loadSelectionPath();
    }
    mode(param) {
        this.edit = param;
    }
    loadSelectionPath() {
        this.chartService.getSelectionPathAdmin(`?active_status=true`).subscribe((response) => {
            this.listSelectionPath = response && response.map((value) => {
                const { selection_path_id, name } = value;
                return { value: selection_path_id.toString(), label: name };
            });
        });
    }
    changeYear(value) {
        this.loadtablePaymentData = true;
        if (!value) {
            this.loadtablePaymentData = false;
            this.listSelectionYear = [];
        }
        else {
            this.chartService.getMappingPathYearIntake(`?active_status=true&selection_path_id=${value}`).subscribe((res) => {
                this.loadtablePaymentData = false;
                this.listSelectionYear = res && res.map((value) => {
                    const { id, year, mapping_path_year_id } = value;
                    return { value: id.toString(), label: year, pathYear: mapping_path_year_id };
                });
            });
        }
    }
    changePaymentMethod(event) {
        this.loadtablePaymentData = true;
        if (!event.value) {
            this.loadtablePaymentData = false;
            this.listPaymentMethod = [];
        }
        else {
            this.mappingPathYearId = event.pathYear;
            this.chartService.getPaymentMethodData().subscribe((resp) => {
                this.loadtablePaymentData = false;
                this.listPaymentMethod = resp && resp.map((value) => {
                    const { id, method } = value;
                    return { value: id.toString(), label: method };
                });
            });
        }
    }
    verificationPicklist() {
        this.chartService.getVerificationTransactionPicklist().subscribe((res) => {
            this.listVerificationTr = res && res.map((val) => {
                const { value, name } = val;
                return { value: value, label: name };
            });
        });
    }
    loadPaymentStatusDataFilter() {
        this.loadFilter = true;
        this.chartService.getPaymentStatusData().subscribe((filterArray) => {
            const dataSelectionPath = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].status
                };
                dataSelectionPath.push(x);
                this.listPaymentStatus = dataSelectionPath;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
    }
    loadPaymentData() {
        this.loadtablePaymentData = true;
        this.chartService.getParticipantPaymentList('').subscribe(response => {
            // this.chartService.getParticipantPaymentList(`program=${this.selectionProgram}&selection_path=${this.selectionPath}&payment_method=${this.paymentMethod}&payment_status=${this.paymentStatus}`).subscribe(response => {
            setTimeout(() => {
                this.tableData = response.data;
                this.dtTrigger.next(); // Trigger for load datatable
                this.loadtablePaymentData = false;
            }, 3000);
        }, err => {
            this.loadError();
            this.loadtablePaymentData = false;
        });
    }
    applyFilters() {
        let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId } = this;
        this.paymentStatus = selectionVerification;
        // let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching } = this;
        this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId);
    }
    getAllDataPegawaiByFilters(listSelectionProgram, listSelectionPath, listSelectionYear, listPaymentMethod, listVerificationTr, search, mappingPathYearId) {
        const program = listSelectionProgram ? listSelectionProgram : 0;
        const path = listSelectionPath ? listSelectionPath : '0';
        const year = listSelectionYear ? listSelectionYear : '0';
        const payment = listPaymentMethod ? listPaymentMethod : '0';
        const verif = listVerificationTr ? listVerificationTr : null;
        const mappingPathYear = this.mappingPathYearId ? this.mappingPathYearId : null;
        const regNumb = search ? search : '';
        const params = `?page=${this.pageNumber}&program=${program}&selection_path=${path}&mapping_path_year_id=${mappingPathYear}&payment_method=${payment}&need_verification=${verif}&registration_number=${regNumb}`;
        // const params = `?page=${this.pageNumber}&program=${program}&selection_path=${path}&payment_method=${payment}&payment_status=${verif}&registration_number=${regNumb}&mapping_path_year_id=${mappingPathYear}`
        const paramsNopage = `?program=${program}&selection_path=${path}&mapping_path_year_id=${mappingPathYear}&payment_method=${payment}&need_verification=${verif}&registration_number=${regNumb}`;
        this.loadtablePaymentData = true;
        this.dataPayment = [];
        if (this.pageNumber !== undefined) {
            this.chartService.getPaymentPagination(params).subscribe(response => {
                this.dataPayment = response.data;
                if (this.dataPayment.length == 0) {
                    this.hiddenDownloadPayment = true;
                }
                else {
                    this.hiddenDownloadPayment = false;
                }
                this.isChangePage = false;
                this.isApplyFilter = true;
                this.currentPage = response.current_page;
                this.totalRecord = response.data.length;
                this.collectionSize = response.total;
                this.pageSize = response.per_page;
                this.loadtablePaymentData = false;
                this.dataPayment.slice((response.current_page - response.current_page) * this.pageSize);
            });
        }
        else {
            this.chartService.getPaymentPagination(paramsNopage).subscribe(response => {
                this.dataPayment = response.data;
                if (this.dataPayment.length == 0) {
                    this.hiddenDownloadPayment = true;
                }
                else {
                    this.hiddenDownloadPayment = false;
                }
                this.from = response.from;
                this.isChangePage = false;
                this.isApplyFilter = true;
                this.loadtablePaymentData = false;
                this.currentPage = response.current_page;
                this.totalRecord = response.data.length;
                this.collectionSize = response.total;
                this.pageSize = response.per_page;
                const to = response.to;
            });
        }
    }
    resetFilter() {
        this.selectionProgram = '';
        this.selectionPath = '';
        this.paymentMethod = '';
        this.render();
        // this.loadPaymentData();
    }
    resetFilters() {
        this.selectionProgram = '';
        this.selectionPath = '';
        this.paymentMethod = '';
        this.selectionYear = '';
        this.selectionVerification = '';
    }
    render() {
        if (this.tableData.length == 0) {
        }
        else {
            this.dtElements.forEach((dtElement, index) => {
                if (index == 0) {
                    dtElement.dtInstance.then((dtInstance) => {
                        dtInstance.destroy();
                    });
                }
            });
        }
    }
    changePage(e) {
        this.pageNumber = e;
        let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId } = this;
        this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId);
    }
    setValue(x) {
        if (x === '0') {
            this.active = false;
            this.status_active = false;
        }
        else if (x === '1') {
            this.active = true;
            this.status_active = true;
        }
        else if (x === true) {
            this.active = true;
            this.status_active = true;
        }
        else if (x === false) {
            this.active = false;
            this.status_active = false;
        }
    }
    loadDetailPaymentData(data) {
        this.paymentId = data.id;
        this.paymentMethodID = data.payment_method;
        this.paymentDataForm.patchValue({ registration_number: data.registration_number });
        this.paymentDataForm.patchValue({ selection_path_name: data.selection_path_name });
        this.paymentDataForm.patchValue({ selection_path_id: data.selection_path_id });
        this.paymentDataForm.patchValue({ payment_status: data.payment_status });
        this.paymentDataForm.patchValue({ payment_method: data.payment_method_name });
        this.paymentDataForm.patchValue({ price: data.price ? data.price : '-' });
        if (data.activation_pin === false) {
            this.pin_activation1 = '0';
            this.active = false;
            this.cantEditPayment = false;
        }
        else if (data.activation_pin == '1') {
            this.pin_activation1 = '1';
            this.active = true;
            this.cantEditPayment = true;
        }
        else {
            this.pin_activation1 = '0';
            this.active = false;
        }
        this.paymentDataForm.patchValue({ payment_url: data.payment_url });
        this.paymentUrl = data.payment_url;
        if (this.paymentUrl === null) {
            this.haveNoEvidence = true;
        }
        else {
            this.haveNoEvidence = false;
        }
        this.myPersistenceModal.show();
    }
    submitApprovePayment() {
        if (this.paymentDataForm.valid) {
            let data = {
                registration_number: this.paymentDataForm.value.registration_number,
                payment_status: 1,
                payment_method: this.paymentMethodID,
                activation_pin: true,
            };
            this.chartService.upRegistrationData(data).subscribe(res => {
                if (res != null) {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.myPersistenceModal.hide();
                        let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId } = this;
                        this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId);
                        this.loading = false;
                    }
                    else {
                        this.loadError();
                    }
                }
                else {
                    this.loadError();
                }
            }, (reason) => {
                this.loadError();
            });
        }
    }
    submitRejectPayment() {
        if (this.paymentDataForm.valid) {
            let data = {
                registration_number: this.paymentDataForm.value.registration_number,
                payment_status: 2,
                payment_method: this.paymentMethodID,
                activation_pin: false,
            };
            this.chartService.upRegistrationData(data).subscribe(res => {
                if (res != null) {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.myPersistenceModal.hide();
                        let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId } = this;
                        this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId);
                        this.loading = false;
                    }
                    else {
                        this.loadError();
                    }
                }
                else {
                    this.loadError();
                }
            }, (reason) => {
                this.loadError();
            });
        }
    }
    createDetailSelectionStepData() {
        this.loading = true;
        if (this.edit == 'edit') {
            if (this.status_active === true) {
                let data = {
                    registration_number: this.paymentDataForm.value.registration_number,
                    payment_status: 1,
                    payment_method: this.paymentMethodID,
                    activation_pin: true,
                };
                this.chartService.upRegistrationData(data).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.loadSuccess();
                            this.myPersistenceModal.hide();
                            let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId } = this;
                            this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId);
                            this.loading = false;
                        }
                        else {
                            this.loadError();
                        }
                    }
                    else {
                        this.loadError();
                    }
                }, (reason) => {
                    this.loadError();
                });
            }
            else {
                let dataUpdate = {
                    registration_number: this.paymentDataForm.value.registration_number,
                    payment_status: 2,
                    payment_method: this.paymentMethodID,
                    activation_pin: 'false',
                };
                this.chartService.upRegistrationData(dataUpdate).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.loadSuccess();
                            this.myPersistenceModal.hide();
                            let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId } = this;
                            this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId);
                            this.loading = false;
                        }
                        else {
                            this.loadError();
                        }
                    }
                    else {
                        this.loadError();
                    }
                }, (reason) => {
                    this.loadError();
                });
            }
        }
        // }
    }
    loadSuccess() {
        this.broadcasterService.notifBroadcast(true, {
            title: 'Success',
            msg: 'Data yang anda masukkan sudah tersimpan',
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'success'
        });
    }
    loadError() {
        this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: 'Terjadi kesalahan sistem',
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
        });
    }
    downloadExcelData(selectionVerification) {
        this.loadDownloadData = true;
        this.chartService.getExcelParticipantPaymentListData(`/${0}/${this.selectionPath}/${selectionVerification ? selectionVerification : '0'}/${this.paymentMethod}`).subscribe(response => {
            window.open(response.urls);
            this.loadDownloadData = false;
        }, err => {
            this.loadDownloadData = false;
        });
    }
};
AdmMpPaymentDataComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"] },
    { type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], AdmMpPaymentDataComponent.prototype, "dtElements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myPersistenceModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdmMpPaymentDataComponent.prototype, "myPersistenceModal", void 0);
AdmMpPaymentDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adm-mp-payment-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adm-mp-payment-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-payment-data/adm-mp-payment-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adm-mp-payment-data.component.scss */ "./src/app/theme/adm-mp-payment-data/adm-mp-payment-data.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
], AdmMpPaymentDataComponent);



/***/ }),

/***/ "./src/app/theme/adm-mp-payment-data/adm-mp-payment-data.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/adm-mp-payment-data/adm-mp-payment-data.module.ts ***!
  \*************************************************************************/
/*! exports provided: AdmMpPaymentDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMpPaymentDataModule", function() { return AdmMpPaymentDataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _adm_mp_payment_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adm-mp-payment-data.component */ "./src/app/theme/adm-mp-payment-data/adm-mp-payment-data.component.ts");
/* harmony import */ var _adm_mp_payment_data_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adm-mp-payment-data-routing.module */ "./src/app/theme/adm-mp-payment-data/adm-mp-payment-data-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");









let AdmMpPaymentDataModule = class AdmMpPaymentDataModule {
};
AdmMpPaymentDataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_adm_mp_payment_data_component__WEBPACK_IMPORTED_MODULE_3__["AdmMpPaymentDataComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _adm_mp_payment_data_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdmMpPaymentDataRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"]
        ]
    })
], AdmMpPaymentDataModule);



/***/ })

}]);
//# sourceMappingURL=theme-adm-mp-payment-data-adm-mp-payment-data-module-es2015.js.map