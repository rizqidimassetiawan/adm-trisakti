(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-adm-ms-exam-detail-data-adm-ms-exam-detail-data-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>Exam Detail Data Management works!</p> -->\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"{{ 'MENU.exam-detail-data' | translate }}\" cardClass=\"card-datatable\" headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\" [loading]=\"loadtableExamDetailData\">\n      <form class=\"md-float-material form-material\" action=\"javascript:\">\n        <!-- <app-card [options]=\"false\" [blockClass]=\"'pt-0 pr-2 pb-2 pl-2'\" [hidHeader]=\"true\"> -->\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group mb-0\">\n                <ng-select name=\"active_status\" [allowClear]=\"false\" [placeholder]=\"'CONTENT.active-status' | translate\" [ngClass]=\"'custom bg-white'\"[notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"activeStatus\" (deselected)=\"onDeselected('activeStatus')\"  [options]=\"listActiveStatusFilters\" (selected)=\"loadExamDEtailDataFilters(activeStatus)\"></ng-select>\n              </div>\n            </div>\n            <div class=\"col-9 text-center text-md-right\">\n              <button class=\"btn btn-success btn-sm btn-round has-ripple btn-sm mt-1 p-2\" (click)=\"openformDetailExamDetailData(null, 'input')\">\n                <i class=\"icofont icofont-plus\"></i> {{'CONTENT.add-data' | translate}}\n              </button>\n            </div>\n          </div>\n        <!-- </app-card> -->\n      </form>\n      <br>\n      <div class=\"table-responsive pb-1\">\n        <table datatable class=\"table table-hover\" [dtOptions]=\"dtOptions[0]\" [dtTrigger]=\"dtTrigger\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\" class=\"number\">{{ 'CONTENT.no' | translate}}</th>\n              <th scope=\"col\" class=\"school-width\">{{ 'CONTENT.exam-location' | translate}}</th>\n              <th scope=\"col\" class=\"city-width\" >{{ 'CONTENT.city' | translate}}</th>\n              <th scope=\"col\" class=\"address-width\">{{ 'CONTENT.address' | translate}}</th>\n              <th scope=\"col\" class=\"center-table status-width\">{{ 'CONTENT.active-status' | translate}}</th>\n              <th scope=\"col\" class=\"center-table action-width\">{{ 'CONTENT.action' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"tableData?.length != 0\">\n            <tr *ngFor=\"let data of tableData; let i = index;\">\n              <th scope=\"row\" class=\"number\">{{ i+1 }}</th>\n              <td>{{ data.location }}</td>\n              <td>{{ data.city }}</td>\n              <td>{{ data.address }}</td>\n              <td class=\"center-table\">\n                <span\n                class=\"badge badge-{{ data.active_status === '1' ? 'success' : 'danger' }}\">{{\n                data.active_status === '1' ? ('ROOT.active' | translate) : ('ROOT.nonactive' | translate)\n                }}\n              </span></td>\n              <td class=\"center-table\">\n                <button class=\"btn btn-warning btn-sm btn-round has-ripple\" [placement]=\"'top'\" ngbTooltip=\"{{'ROOT.edit' | translate}}\" (click)=\"openformDetailExamDetailData(data, 'edit');\">\n                  <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}}</span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n\n<!-- Forms Modal -->\n<app-ui-modal #myPersistenceModal [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [loading]=\"loading\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{\n      formType === \"input\"\n        ? (\"ROOT.add\" | translate)\n        : (\"ROOT.edit\" | translate)\n    }} {{ 'CONTENT.exam-location' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"myPersistenceModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup] = \"examDetailDataForm\" (ngSubmit)= \"createExamDetailData()\" class=\"md-float-material form-material\" action=\"javascript:\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.choose-city-location' | translate }}</label>\n            <ng-select [placeholder]=\"'CONTENT.city'|translate\" [ngClass]=\"'custom bg-white'\" formControlName=\"city\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"city\" (deselected)=\"onDeselected('city')\"  [options]=\"listCity\"></ng-select>\n            <!-- <ng-select required name=\"selectedZone\" [(ngModel)]=\"selectedZone\" [allowClear]=\"true\" [options]=\"listZone\" [placeholder]=\"'SDM.select_zone' | translate\" [ngClass]=\"'custom bg-white'\"[notFoundMsg]=\"'ROOT.no_data_found'|translate\"></ng-select> -->\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-choose' | translate }}{{ 'CONTENT.city' | translate }}</label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam-location' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"location\" required formControlName=\"location\">\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.exam-location' | translate }}</label>\n          </div>\n          <div class=\"form-group mb-2\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.address' | translate }}</label>\n              <input type=\"text\" class=\"form-control\" name=\"address\" required formControlName=\"address\" >\n              <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.address' | translate }}</label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <h6 class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.active-status'| translate}}</h6> <br>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"active_status1\" name=\"active_status\" class=\"custom-control-input\" value=\"1\" formControlName=\"active_status\">\n              <label class=\"custom-control-label \" for=\"active_status1\">{{ 'ROOT.yes' | translate }}</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"active_status2\"  name=\"active_status\" class=\"custom-control-input\" value=\"0\" [checked]=\"true\" formControlName=\"active_status\">\n              <label class=\"custom-control-label\" for=\"active_status2\">{{ 'ROOT.no' | translate }}</label>\n            </div>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button *ngIf=\"edit == 'input'\" type=\"button\" (click)=\"myPersistenceModal.hide()\" class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.cancel' | translate }}\n              </button>\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"myPersistenceModal.hide()\" [disabled] =\"!examDetailDataForm.valid\">\n                <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n    </div>\n    <div class=\"app-modal-footer\">\n    </div>\n</app-ui-modal>\n\n<!-- <app-ui-modal #myPersistenceModal [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [loading]=\"loading\" [hideFooter]=\"true\">\n    <div class=\"app-modal-header\">\n      <h5 class=\"modal-title\">{{ 'CONTENT.add-exam-location' | translate }}</h5>\n      <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"myPersistenceModal.hide(); reset()\"><span aria-hidden=\"true\">&times;</span></button>\n    </div>\n    <div class=\"app-modal-body\">\n      <form class=\"md-float-material form-material\" action=\"javascript:\">\n        <div class=\"row\" >\n          <div class=\"col-sm-12\">\n            <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.choose-city-location' | translate }}</label>\n                <ng-select [placeholder]=\"'CONTENT.city'|translate\" [ngClass]=\"'custom bg-white'\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\"></ng-select>\n                <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-choose' | translate }}{{ 'CONTENT.city' | translate }}</label>\n            </div>\n            <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam-location' | translate }}</label>\n                <input type=\"text\" class=\"form-control\" name=\"programDescription\" required >\n                <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.exam-location' | translate }}</label>\n            </div>\n            <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.address' | translate }}</label>\n                <input type=\"text\" class=\"form-control\" name=\"programDescription\" required >\n                <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.address' | translate }}</label>\n            </div>\n            <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.active-status' | translate }}</label>\n                <div class=\"custom-control custom-switch\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitches\">\n                    <label class=\"custom-control-label\" for=\"customSwitches\">Toggle this switch element</label>\n                  </div>\n            </div>\n\n            <div class=\"form-group mb-0 mt-4 text-right\">\n              <div class=\"btn-group\">\n                <button *ngIf=\"edit == 'input'\" type=\"button\" (click)=\"myPersistenceModal.hide()\" class=\"btn btn-secondary btn-sm\">\n                  <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n                </button>\n                <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"myPersistenceModal.hide()\">\n                  <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      </div>\n      <div class=\"app-modal-footer\">\n      </div>\n  </app-ui-modal> -->\n\n<ng-template #showLoading>\n<div class=\"d-flex justify-content-center\">\n  <div class=\"spinner-border text-primary\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AdmMsExamDetailDataRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMsExamDetailDataRoutingModule", function() { return AdmMsExamDetailDataRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _adm_ms_exam_detail_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm-ms-exam-detail-data.component */ "./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _adm_ms_exam_detail_data_component__WEBPACK_IMPORTED_MODULE_2__["AdmMsExamDetailDataComponent"]
    }
];
let AdmMsExamDetailDataRoutingModule = class AdmMsExamDetailDataRoutingModule {
};
AdmMsExamDetailDataRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AdmMsExamDetailDataRoutingModule);



/***/ }),

/***/ "./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.center-table {\n  text-align: center; }\n\n.status-width {\n  max-width: 80px; }\n\n.city-width {\n  max-width: 120px; }\n\n.school-width {\n  max-width: 180px; }\n\n.address-width {\n  max-width: 200px;\n  text-align: justify; }\n\n.action-width {\n  max-width: 20px;\n  text-align: center; }\n\n.number {\n  max-width: 30px;\n  padding-left: 10px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvdGhlbWUvYWRtLW1zLWV4YW0tZGV0YWlsLWRhdGEvYWRtLW1zLWV4YW0tZGV0YWlsLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLG1CQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0Msa0JBQWtCLEVBQUE7O0FBRW5CO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2FkbS1tcy1leGFtLWRldGFpbC1kYXRhL2FkbS1tcy1leGFtLWRldGFpbC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGR7XG4gIHRhYmxlLWxheW91dDpmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG50aHtcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5jZW50ZXItdGFibGV7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN0YXR1cy13aWR0aHtcbiAgbWF4LXdpZHRoOiA4MHB4O1xufVxuLmNpdHktd2lkdGh7XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG4uc2Nob29sLXdpZHRoe1xuICBtYXgtd2lkdGg6IDE4MHB4O1xufVxuLmFkZHJlc3Mtd2lkdGh7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uYWN0aW9uLXdpZHRoe1xuICBtYXgtd2lkdGg6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5udW1iZXJ7XG4gIG1heC13aWR0aDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdmMsExamDetailDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMsExamDetailDataComponent", function() { return AdmMsExamDetailDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/admin-management.service */ "./src/app/_services/admin-management.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/app.service */ "./src/app/_services/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");











let AdmMsExamDetailDataComponent = class AdmMsExamDetailDataComponent {
    constructor(translateService, broadcasterService, chartService, appService, router, fb, http) {
        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.appService = appService;
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.dtOptions = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.examDetailDataForm = this.fb.group({
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            active_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
        });
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(res => {
            translateService.setDefaultLang(res.lang);
        });
        this.loading = false;
        this.edit = 'input';
        this.activeStatus = '1';
        this.type = 'default';
        this.listActiveStatusFilters = [
            {
                label: 'ALL',
                value: '',
            },
            {
                label: 'ACTIVE',
                value: '1',
            },
            {
                label: 'NONACTIVE',
                value: '0',
            }
        ];
    }
    ngOnInit() {
        this.dtOptions[0] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            destroy: true,
            // retrieve:true,
            language: {
                info: 'Show _START_ to _END_ from _TOTAL_ data',
                zeroRecords: 'No data found!',
                emptyTable: 'No data found!',
                lengthMenu: 'Show _MENU_ data',
                processing: 'Loading data. . . . .',
                infoFiltered: '',
                infoEmpty: ''
            },
            initComplete: () => {
            }
        };
        this.loadExamDetailData();
        this.loadCityData();
        this.loadActiveStatusDataFilter();
    }
    onDeselected(val) {
        switch (val) {
            case 'city':
                this.city = '0';
                break;
            case 'activeStatus':
                this.activeStatus = '1';
                break;
        }
    }
    onSelected(val) {
        switch (val) {
            case 'city':
                this.city = this.cityChoose;
                break;
        }
    }
    loadCityData() {
        this.loadFilter = true;
        this.chartService.getCityData('').subscribe((filterArray) => {
            const dataCity = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].city
                };
                dataCity.push(x);
                this.listCity = dataCity;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
    }
    createExamDetailData() {
        if (this.examDetailDataForm.valid) {
            this.loading = true;
            switch (this.formType) {
                case 'input':
                    const data = {
                        city: this.examDetailDataForm.controls['city'].value,
                        location: this.examDetailDataForm.controls['location'].value,
                        address: this.examDetailDataForm.controls['address'].value,
                        active_status: this.examDetailDataForm.controls['active_status'].value
                    };
                    this.chartService.postExamLocationData(data).subscribe(res => {
                        if (res != null) {
                            if (res.status == 'Success') {
                                this.loadSuccess();
                                this.loading = false;
                                this.myPersistenceModal.hide();
                                this.renderTable();
                                this.loadExamDetailData();
                                // this.router.navigate(['/','exam-detail-data']);
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
                    break;
                case 'edit':
                    const dataUpdate = {
                        id: this.examDetailId,
                        city: this.examDetailDataForm.value.city,
                        location: this.examDetailDataForm.value.location,
                        address: this.examDetailDataForm.value.address,
                        active_status: this.examDetailDataForm.value.active_status
                    };
                    this.chartService.updExamLocationData(dataUpdate).subscribe(res => {
                        if (res != null) {
                            if (res.status == 'Success') {
                                this.loading = false;
                                this.loadSuccess();
                                this.myPersistenceModal.hide();
                                this.renderTable();
                                this.loadExamDetailData();
                                // this.router.navigate(['/','exam-detail-data']);
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
                    break;
                default:
                    break;
            }
        }
    }
    openformDetailExamDetailData(data, type) {
        this.formType = type;
        if (type === 'edit') {
            this.examDetailId = data.id;
            this.examDetailDataForm.patchValue({ city: data.city_id });
            this.examDetailDataForm.patchValue({ location: data.location });
            this.examDetailDataForm.patchValue({ address: data.address });
            if (data.active_status === '1') {
                this.examDetailDataForm.patchValue({ active_status: '1' });
            }
            else {
                this.examDetailDataForm.patchValue({ active_status: '0' });
            }
        }
        else {
            this.examDetailDataForm.reset();
        }
        this.myPersistenceModal.show();
    }
    loadExamDetailData() {
        this.loadtableExamDetailData = true;
        const data = {
            active_status: this.activeStatus
        };
        this.chartService.getExamLocationData(data).subscribe(response => {
            setTimeout(() => {
                this.tableData = response.data;
                this.dtTrigger.next(); // Trigger for load datatable
                this.loadtableExamDetailData = false;
            }, 3000);
        }, err => {
            // this.loadError();
            this.loadtableExamDetailData = false;
        });
    }
    loadExamDEtailDataFilters(activeStatus) {
        this.loadtableExamDetailData = true;
        const data = {
            active_status: activeStatus
        };
        this.chartService.getExamLocationData(data).subscribe(response => {
            setTimeout(() => {
                this.tableData = response.data;
                this.dtTrigger.next(); // Trigger for load datatable
                this.loadtableExamDetailData = false;
            }, 3000);
        }, err => {
            // this.loadError();
            this.loadtableExamDetailData = false;
        });
        this.renderTable();
    }
    mode(param) {
        this.edit = param;
    }
    renderTable() {
        this.dtElements.forEach((dtElement, index) => {
            if (index == 0) {
                dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            }
        });
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
    loadActiveStatusDataFilter() {
        this.loadFilter = true;
        this.chartService.getActiveStatusData().subscribe((filterArray) => {
            const dataActiveStatus = [];
            let x;
            for (let i = 0; i < filterArray.data.length; i++) {
                x = {
                    value: filterArray.data[i]['pick_label'].toString(),
                    label: filterArray.data[i]['pick_value']
                };
                dataActiveStatus.push(x);
                this.listActiveStatus = dataActiveStatus;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
    }
};
AdmMsExamDetailDataComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"] },
    { type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], AdmMsExamDetailDataComponent.prototype, "dtElements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myPersistenceModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdmMsExamDetailDataComponent.prototype, "myPersistenceModal", void 0);
AdmMsExamDetailDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adm-ms-exam-detail-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adm-ms-exam-detail-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adm-ms-exam-detail-data.component.scss */ "./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"],
        src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])
], AdmMsExamDetailDataComponent);



/***/ }),

/***/ "./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AdmMsExamDetailDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMsExamDetailDataModule", function() { return AdmMsExamDetailDataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _adm_ms_exam_detail_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adm-ms-exam-detail-data.component */ "./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.component.ts");
/* harmony import */ var _adm_ms_exam_detail_data_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adm-ms-exam-detail-data-routing.module */ "./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");










let AdmMsExamDetailDataModule = class AdmMsExamDetailDataModule {
};
AdmMsExamDetailDataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_adm_ms_exam_detail_data_component__WEBPACK_IMPORTED_MODULE_3__["AdmMsExamDetailDataComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _adm_ms_exam_detail_data_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdmMsExamDetailDataRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltipModule"]
        ]
    })
], AdmMsExamDetailDataModule);



/***/ })

}]);
//# sourceMappingURL=theme-adm-ms-exam-detail-data-adm-ms-exam-detail-data-module-es2015.js.map