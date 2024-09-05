(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["document-data-detail-document-data-detail-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"text-md-left\">\n      <div class=\"page-header-title\">\n        <h5>{{ 'MENU.document-data'| translate}}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n<app-card cardClass=\"card-datatable\" headerClass=\"text-center text-md-left\" [options]=\"false\"\n  [loading]=\"loadtableRegistrationDocument\" [hidHeader]=\"true\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"row align-items-center mb-2 pl-3 pr-3\">\n        <div class=\"col-12 col-md-6 text-left\">\n          <button class=\"btn btn-outline-secondary btn-sm btn-round has-ripple\" routerLink=\"/adm-mp-document-data\">\n            <i class=\"ti-angle-left\"></i>\n            {{'ROOT.back' | translate}}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"table-responsive pb-1\">\n    <table datatable class=\"table table-bordered table-hover\" [dtOptions]=\"dtOptions[0]\" [dtTrigger]=\"dtTrigger\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\" style=\"padding-left: 10px;text-align:center\">{{ 'CONTENT.no' | translate}}</th>\n          <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.document' | translate}}</th>\n          <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"tableData1?.length != 0\">\n        <tr *ngFor=\"let data of tableData1; let i = index;\">\n          <th scope=\"row\" style=\"padding-left: 10px; text-align:center \">{{ i+1 }}</th>\n          <td class=\"text-justify\">{{data.document_name}} <span style=\"color: red;\" *ngIf=\"data.required == 1\">*</span></td>\n          <td class=\"center-table\">\n            <button class=\"btn btn-outline-primary btn-sm btn-round has-ripple\"\n              (click)=\"loadDetailRegistrationDocumentData(data)\" [disabled]=\"loading\">\n              <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-info-circle\"></i><span\n                  class=\"d-sm-none\"> {{ 'ROOT.detail' | translate\n                  }}</span></span>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</app-card>\n\n<!-- Forms Modal -->\n<app-ui-modal #reportCardRequirementModal [containerClick]=\"false\"\n  dialogClass=\"modal-dialog modal-dialog-centered modal-xl\" [hideFooter]=\"true\" [loading]=\"loadtableReportCardData\">\n  <div class=\"app-modal-header\">\n    <h6 class=\"modal-title\">{{ 'ROOT.detail' | translate }} {{ 'CONTENT.school-report' | translate }}</h6>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"reportCardRequirementModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-striped table-boder-radius dataTable\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.no' | translate}}</th>\n            <th class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.semester' | translate}}</th>\n            <th *ngIf=\"isMathStudy\" scope=\"col \" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.math-score' |\n              translate}}</th>\n            <th *ngIf=\"isBahasaStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.indo-score' |\n              translate}}</th>\n            <th *ngIf=\"isEnglishStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.english-score'\n              | translate}}\n            </th>\n            <th *ngIf=\"physicsStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.physics-score' |\n              translate}}\n            </th>\n            <th *ngIf=\"biologyStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.biology-score' |\n              translate}}\n            </th>\n            <th *ngIf=\"chemicalStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.chemical-score'\n              | translate}}\n            </th>\n            <th *ngIf=\"sociologicalStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{\n              'CONTENT.sociology-score' |\n              translate}}</th>\n            <th *ngIf=\"economyStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.economy-score' |\n              translate}}\n            </th>\n            <th *ngIf=\"geographyStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{\n              'CONTENT.geography-score' |\n              translate}}</th>\n            <th scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\" style=\"max-width:auto;\">{{\n              'CONTENT.approved-status' | translate}}</th>\n            <th scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\" style=\"max-width:auto;\">{{ 'CONTENT.approved' |\n              translate}}</th>\n            <th scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\" style=\"max-width:auto;\">{{ 'CONTENT.action' |\n              translate}}</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tableData2?.length != 0\">\n          <tr *ngFor=\"let data of tableData2; let i = index;\">\n            <td class=\"text-center pl-1 pr-1 font-styling\">{{ i+1 }}.</td>\n            <td class=\"text-center pl-1 pr-1 font-styling\">{{ data.semesters }}</td>\n            <td *ngIf=\"isMathStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.math ? data.math : '-' }}</td>\n            <td *ngIf=\"isBahasaStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.bahasa ? data.bahasa : '-'}}\n            </td>\n            <td *ngIf=\"isEnglishStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.english ? data.english : '-'\n              }}</td>\n            <td *ngIf=\"physicsStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.physics ? data.physics : '-' }}\n            </td>\n            <td *ngIf=\"biologyStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.biology ? data.biology : '-' }}\n            </td>\n            <td *ngIf=\"chemicalStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.chemical ? data.chemical : '-'\n              }}</td>\n            <td *ngIf=\"sociologicalStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.sociological ?\n              data.sociological : '-' }}\n            </td>\n            <td *ngIf=\"economyStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.economy ? data.economy : '-'}}\n            </td>\n            <td *ngIf=\"geographyStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.geography ? data.geography :\n              '-' }}</td>\n            <td class=\"center-table font-styling\">\n              <span *ngIf=\"data.document_status == 'approved'\" class=\"badge badge-light-success\">{{ 'CONTENT.approve' |\n                translate }}</span>\n              <span *ngIf=\"data.document_status == 'waiting for approved'\" class=\"badge badge-light-secondary\">{{\n                'CONTENT.not-specified' | translate }}</span>\n            </td>\n            <td class=\"center-table font-styling\">\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.setujui' | translate\"\n                (click)=\"submitReportApprovedDocument(data)\"><i\n                  class=\"icofont icofont-check-circled f-w-600 f-16 text-c-green\"></i></a>\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.tolak' | translate\"\n                (click)=\"submitRejectReportApprovedDocument(data)\"><i\n                  class=\"icofont icofont-close-circled f-w-600 f-16 text-c-red\"></i></a>\n            </td>\n            <td class=\"center-table font-styling\">\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.download' | translate\"\n                (click)=\"downloadReportCardData(data)\"><i\n                  class=\"fas fa-cloud-download-alt f-w-600 f-16 text-muted\"></i></a>\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.edit' | translate\"\n                (click)=\"openformRaport(data)\"><i class=\"fas fa-pencil-alt f-w-600 f-16 text-warning\"></i></a>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableData2?.length == 0 && !loadtableReportCardData\">\n          <tr>\n            <td colspan=\"14\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableData2?.length == 0 && loadtableReportCardData\">\n          <tr>\n            <td colspan=\"14\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #certificateRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-xl\"\n  [hideFooter]=\"true\" [loading]=\"loadtableCertificateData\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.detail' | translate }} {{ 'CONTENT.certificate' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"certificateRequirementModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-striped table-boder-radius dataTable\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.no' | translate}}</th>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.certificate-level' | translate}}</th>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.certificate-type' | translate}}</th>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.publication-year' | translate}}</th>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.certificate-score' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.approved-status' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.approved' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.action' | translate}}</th>\n\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tableData3?.length != 0\">\n          <tr *ngFor=\"let data of tableData3; let i = index;\">\n            <td class=\"center-table\">{{i+1}}</td>\n            <td class=\"center-table\">{{ data.certificate_level }}</td>\n            <td class=\"center-table\">{{ data.certificate_type }}</td>\n            <td class=\"center-table\">{{ data.publication_year }}</td>\n            <td class=\"center-table\">{{ data.certificate_score }}</td>\n            <td class=\"center-table font-styling\">\n              <span *ngIf=\"data.document_status == 'approved'\" class=\"badge badge-light-success\">{{ 'CONTENT.approve' |\n                translate }}</span>\n              <span *ngIf=\"data.document_status == 'waiting for approved'\" class=\"badge badge-light-secondary\">{{\n                'CONTENT.not-specified' | translate }}</span>\n            </td>\n            <td class=\"center-table font-styling\">\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.setujui' | translate\"\n                (click)=\"submitCertificateApprovedDocument(data)\"><i\n                  class=\"icofont icofont-check-circled f-w-600 f-16 text-c-green\"></i></a>\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.tolak' | translate\"\n                (click)=\"submitRejectCertificateApprovedDocument(data)\"><i\n                  class=\"icofont icofont-close-circled f-w-600 f-16 text-c-red\"></i></a>\n            </td>\n            <td class=\"center-table font-styling\">\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.download' | translate\"\n                (click)=\"downloadCertificateData(data)\"><i\n                  class=\"fas fa-cloud-download-alt f-w-600 f-16 text-muted\"></i></a>\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.edit' | translate\"\n                (click)=\"loadCertificateDetailFileData(data)\"><i\n                  class=\"fas fa-pencil-alt f-w-600 f-16 text-warning\"></i></a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #reportCardDetailModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\" [loading]=\"loadingSemester\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.edit' | translate }} {{ 'CONTENT.school-report' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeRaportModalDetail();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"reportCardDataForm\"\n      (ngSubmit)=\"createReportCardDocument();\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\" *ngIf=\"!isNotHaveMappingData\">\n          <p class=\"mb-0\"><span class=\"required\">* Wajib diisi</span></p>\n          <div class=\"form-group mb-1\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.semester' | translate }} </label>\n            <input type=\"text\" class=\"form-control is-valid\" formControlName=\"semester_name\" name=\"semester_name\"\n              readonly>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div *ngIf=\"isBahasaStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.indo-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"bahasa\" name=\"indoScore\" minlength=\"0\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.bahasa.invalid && fraport.bahasa.touched?'is-invalid':(fraport.bahasa.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.required && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.min && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.max && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.pattern && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"isEnglishStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.english-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"english\" name=\"englishScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.english.invalid && fraport.english.touched?'is-invalid':(fraport.english.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.required && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.min && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.max && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.pattern && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"isMathStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.math-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"math\" name=\"mathScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.math.invalid && fraport.math.touched?'is-invalid':(fraport.math.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.required && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.min && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.max && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.pattern && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div *ngIf=\"physicsStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.physics-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"physics\" name=\"physicsScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.physics.invalid && fraport.physics.touched?'is-invalid':(fraport.physics.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.required && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.min && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.max && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.pattern && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"chemicalStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.chemical-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"chemical\" name=\"chemicalScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.chemical.invalid && fraport.chemical.touched?'is-invalid':(fraport.chemical.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.required && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.min && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.max && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.pattern && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"biologyStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.biology-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"biology\" name=\"biologyScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.biology.invalid && fraport.biology.touched?'is-invalid':(fraport.biology.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.required && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.min && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.max && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.pattern && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div *ngIf=\"sociologicalStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.sociology-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"sociological\" name=\"sociologicalScore\"\n                minlength=\"1\" maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\"\n                required\n                [ngClass]=\"fraport.sociological.invalid && fraport.sociological.touched?'is-invalid':(fraport.sociological.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.required && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.min && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.max && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.pattern && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"economyStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.economy-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"economy\" name=\"economyScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.economy.invalid && fraport.economy.touched?'is-invalid':(fraport.economy.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.required && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.min && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.max && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.pattern && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"geographyStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.geography-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"geography\" name=\"geographyScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.geography.invalid && fraport.geography.touched?'is-invalid':(fraport.geography.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.required && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.min && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.max && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.pattern && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div class=\"form-group mb-0 col-md-12\">\n              <label class=\"form-label mb-0 f-w-600\">{{'CONTENT.upload-file-raport' | translate}} <span\n                  class=\"required\">*</span></label>\n              <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n                accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadReportCardFile($event)\" />\n              <p class=\"error text-danger small form-text mb-1\">\n                {{ 'CONTENT.file-raport-requirement' | translate}} <br>\n                {{fraport.url.errors && fraport.url.errors.required && (fraport.url.touched || fraport.url.dirty) ?\n                ('CONTENT.required' | translate) : ''}}\n                {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n                translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n                Mb.</p>\n\n              <label\n                *ngIf=\"fraport.url.errors && fraport.url.errors.required && (fraport.url.touched || fraport.url.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"row\">\n            <div ngif class=\"col-md-12 mb-0 mt-0 text-right\">\n              <button type=\"button\" (click)=\"closeRaportModalDetail()\" [disabled]=\"this.loading\"\n                class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button>\n              <button type=\"submit\" class=\"btn btn-warning btn-sm m-1\"\n                [disabled]=\"reportCardDataForm.invalid || this.loading\">\n                <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!this.loading\" class=\"btn-text\">\n                  <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<app-ui-modal #certificateDetailModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.edit' | translate }} {{ 'CONTENT.certificate' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeCertificateModalDetail();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"certificateDataForm\"\n      (ngSubmit)=\"createCertificateDocument()\">\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-level' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select name=\"certificate-level\" formControlName=\"certificate_level_id\"\n            [placeholder]=\"'CONTENT.certificate-level'|translate\" required\n            [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"certificateLevel\"\n            [options]=\"listCertificateLevel\"\n            [ngClass]=\"!certificateLevel?'filter-dropdown is-invalid':(certificateLevel?'filter-dropdown is-valid':'filter-dropdown')\">\n            >\n          </ng-select>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-level' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-type' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select name=\"certificate-type\" formControlName=\"certificate_type_id\"\n            [placeholder]=\"'CONTENT.certificate-type'|translate\" required [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            [(ngModel)]=\"certificateType\" [options]=\"listCertificateType\"\n            [ngClass]=\"!certificateType?'filter-dropdown is-invalid':(certificateType?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-type' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-name' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"description\"\n            [placeholder]=\"'CONTENT.certificate-name'|translate\" required\n            [ngClass]=\"fcertif.name.invalid && fcertif.name.touched?'is-invalid':(fcertif.name.valid?'is-valid':'')\" />\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-name' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.certificate-description' | translate }} <span\n              class=\"required\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"description\" name=\"description\"\n            [placeholder]=\"'CONTENT.certificate-description'|translate\" required\n            [ngClass]=\"fcertif.description.invalid && fcertif.description.touched?'is-invalid':(fcertif.description.valid?'is-valid':'')\">\n          </textarea>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.description' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-year' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"publication_year\" name=\"publicationYear\"\n            [placeholder]=\"'CONTENT.publication-year'|translate\" maxlength=\"4\" required\n            [ngClass]=\"fcertif.publication_year.invalid && fcertif.publication_year.touched?'is-invalid':(fcertif.publication_year.valid?'is-valid':'')\" />\n          <label\n            *ngIf=\"fcertif.publication_year.errors && fcertif.publication_year.errors.maxlength && (fcertif.publication_year.touched || fcertif.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.year-validators' | translate }}</label>\n          <label\n            *ngIf=\"fcertif.publication_year.errors && fcertif.publication_year.errors.pattern && (fcertif.publication_year.touched || fcertif.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only-1' | translate }}</label>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.publication-year' | translate }} </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"certificate_score\" name=\"certificateScore\"\n            [placeholder]=\"'CONTENT.certificate-score'|translate\" required maxlength=\"3\"\n            [ngClass]=\"fcertif.certificate_score.invalid && fcertif.certificate_score.touched?'is-invalid':(fcertif.certificate_score.valid?'is-valid':'')\" />\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-score' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-12 mb-0\">\n          <label class=\"form-label mb-0 f-w-600\">{{'CONTENT.upload-file' | translate}} <span\n              class=\"required\">*</span></label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"certificateDetail\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadCertificateFile($event)\"\n            [ngClass]=\"fcertif.url.invalid && fcertif.url.touched?'is-invalid':(fcertif.url.valid?'is-valid':'')\" />\n          <p class=\"error text-danger small form-text mb-1\">\n            {{fcertif.url.errors && fcertif.url.errors.required && (fcertif.url.touched || fcertif.url.dirty) ?\n            ('CONTENT.required' | translate) : ''}}\n            {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n            translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 mt-0 text-right col-md-12\">\n          <button type=\"button\" (click)=\"closeCertificateModalDetail()\" [disabled]=\"this.loading\"\n            class=\"btn btn-secondary btn-sm\">\n            <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n          </button>\n          <button type=\"submit\" class=\"btn btn-warning btn-sm m-1\"\n            [disabled]=\"certificateDataForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">\n              <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}</span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #publicationDataModals [containerClick]=\"false\" dialogClass=\"modal-dialog modal-dialog-centered modal-xl\"\n  [hideFooter]=\"true\" [loading]=\"loadTablePublication\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.detail' | translate }} {{ 'CONTENT.publication' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"publicationDataModals.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-sm table-boder-radius dataTable\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.no' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-name' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-position' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.publication-title' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-type' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.publication-date' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.link' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.action' | translate}}</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tableDataPublication?.length != 0\">\n          <tr\n            *ngFor=\"let data of tableDataPublication | slice: (pageDocument-1) * 10 : pageDocument * 10; let i = index;\">\n            <td class=\"text-center pl-1 pr-1\">{{ (pageDocument-1) * 10 + (i + 1) }}.</td>\n            <td>{{ data.writer_name }}</td>\n            <td class=\"text-center\">{{ data.publication_writer_position }}</td>\n            <td class=\"text-center\">{{ data.title }}</td>\n            <td class=\"text-center\">{{ data.publication_type }}</td>\n            <td class=\"text-center\">{{ data.publish_date | date: 'dd/MM/yyyy' }}</td>\n            <td class=\"text-center\">\n              <a [href]=\"data.publication_link\" target=\"_blank\" class=\"btn btn-sm btn-outline-primary\">\n                {{'CONTENT.link' | translate}}</a>\n            </td>\n            <td class=\"text-center\">\n              <button class=\"btn btn-outline-warning btn-sm btn-round has-ripple\"\n                (click)=\"loadPublicationDataDetails(data)\">\n                <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}}</span>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableDataPublication?.length == 0 && !loadTablePublication\">\n          <tr>\n            <td colspan=\"8\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableDataPublication?.length == 0 && loadTablePublication\">\n          <tr>\n            <td colspan=\"8\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n      </table>\n      <ngb-pagination class=\"d-flex justify-content-center\" [(page)]=\"pageDocument\" [pageSize]=\"10\"\n        [collectionSize]=\"tableDataPublication.length\" [maxSize]=\"3\" [boundaryLinks]=\"true\">\n      </ngb-pagination>\n    </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #publikasiModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.add' | translate }} {{ 'CONTENT.publication' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closePublikasiModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"publikasiForm\"\n      (ngSubmit)=\"createPublicationData()\">\n      <div class=\"row\">\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.writer-name' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" maxlength=\"150\"\n            placeholder=\"{{ 'CONTENT.writer-name' | translate }}\"\n            [ngClass]=\"fpubd.name.invalid && fpubd.name.touched?'is-invalid':(fpubd.name.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"publikasiForm.controls.name.errors && publikasiForm.controls.name.errors.required && (publikasiForm.controls.name.touched || publikasiForm.controls.name.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.writer-position' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select class=\"index-up\" name=\"writer-type\" [placeholder]=\"'CONTENT.writer-type' |translate\"\n            formControlName=\"position\" required [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            [(ngModel)]=\"selectedWriterPosition\" [options]=\"listWriterPosition\"\n            [ngClass]=\"!selectedWriterPosition?'filter-dropdown is-invalid':(selectedWriterPosition?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label *ngIf=\"!selectedWriterPosition\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate}}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-title' | translate }} <span\n              class=\"required\">*</span></label> <br>\n          <textarea class=\"form-control\" formControlName=\"title\" maxlength=\"500\" required\n            placeholder=\"{{ 'CONTENT.publication-title' | translate }}\"\n            [ngClass]=\"fpubd.title.invalid && fpubd.title.touched?'is-invalid':(fpubd.title.valid?'is-valid':'')\"></textarea>\n          <label\n            *ngIf=\"publikasiForm.controls.title.errors && publikasiForm.controls.title.errors.required && (publikasiForm.controls.title.touched || publikasiForm.controls.title.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.writer-type' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select class=\"index-up\" name=\"writer-type\" [placeholder]=\"'CONTENT.writer-type' |translate\"\n            formControlName=\"type\" required [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            [(ngModel)]=\"selectedPublicationType\" [options]=\"listPublicationType\"\n            [ngClass]=\"!selectedPublicationType?'filter-dropdown is-invalid':(selectedPublicationType?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label *ngIf=\"!selectedPublicationType\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate}}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-date' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"date\" class=\"form-control\" formControlName=\"publication_date\" name=\"publication_date\"\n            [ngClass]=\"fpubd.publication_date.invalid && fpubd.publication_date.touched?'is-invalid':(fpubd.publication_date.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"publikasiForm.controls.publication_date.errors && publikasiForm.controls.publication_date.errors.required && (publikasiForm.controls.publication_date.touched || publikasiForm.controls.publication_date.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.link' | translate }} <span\n              class=\"required\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"link\" name=\"link\" maxlength=\"100\"\n            placeholder=\"{{ 'CONTENT.link' | translate }}\"\n            [ngClass]=\"fpubd.link.invalid && fpubd.link.touched?'is-invalid':(fpubd.link.valid?'is-valid':'')\">\n          </textarea>\n          <label *ngIf=\"fpubd.link.errors && fpubd.link.errors.required && (fpubd.link.touched || fpubd.link.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"mb-0 text-right col-md-12\">\n          <button type=\"button\" (click)=\"closePublikasiModals()\" [disabled]=\"this.loading\"\n            class=\"btn btn-secondary btn-sm\">\n            <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n          </button>\n          <button type=\"submit\" class=\"btn btn-warning btn-sm m-1\" [disabled]=\"publikasiForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i\n                class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}</span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #eprtAndTpaModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeEprtTpaModals();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"eprtAndTpaForm\"\n      (ngSubmit)=\"createEprtTpaDocument()\">\n      <div class=\"row\">\n        <app-alert *ngIf=\"isEPRTDocument || isTPADocument\" type=\"primary\" class=\"text-center col-md-12\">\n          {{isTPADocument ? ('CONTENT.tpa-information' | translate) : ('CONTENT.eprt-information' | translate)}} <br>\n          <a *ngIf=\"isEPRTDocument\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm m-1\"><i class=\"icofont icofont-prescription\"></i> {{'CONTENT.eprt-test' |\n            translate}}</a>\n          <a *ngIf=\"isTPADocument\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm m-1\"><i class=\"icofont icofont-prescription\"></i> {{'CONTENT.tpa-test' |\n            translate}} </a>\n        </app-alert>\n      </div>\n      <div class=\"row align-items-center\">\n        <div class=\"text-left col-12 col-md-6 mb-1\">\n          <a *ngIf=\"isResidensi\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isSuratIjinAtasan\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isPromotor\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isCoPromotor\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n        </div>\n        <div class=\"text-right col-12 col-md-6\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div *ngIf=\"isPromotor || isCoPromotor|| isResidensi || isSuratIjinAtasan\" class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-req-name' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" readonly>\n        </div>\n        <div *ngIf=\"isCoPromotor\" class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.name-co-promotor' | translate }}\n            <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"nameCoPromotor\" name=\"nameCoPromotor\"\n            [placeholder]=\"'CONTENT.name-co-promotor'|translate\"\n            [ngClass]=\"fed.nameCoPromotor.invalid && fed.nameCoPromotor.touched?'is-invalid':(fed.nameCoPromotor.valid?'is-valid':'')\">\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'ROOT.required' | translate }} </label>\n        </div>\n        <div [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isIPKDocument\"\n          class=\"form-group mb-2 col-md-12\">\n          <label *ngIf=\"isEPRTDocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.eprt-publication-year' | translate\n            }} <span class=\"required\">*</span></label>\n          <label *ngIf=\"isTPADocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.tpa-publication-year' | translate }}\n            <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"publication_year\" name=\"publicationYear\"\n            [placeholder]=\"'CONTENT.pub-year'|translate\" maxlength=\"4\" required\n            [ngClass]=\"fed.publication_year.invalid && fed.publication_year.touched?'is-invalid':(fed.publication_year.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"eprtAndTpaForm.controls.publication_year.errors && eprtAndTpaForm.controls.publication_year.errors.maxlength && (eprtAndTpaForm.controls.publication_year.touched || eprtAndTpaForm.controls.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.year-validators' | translate }}</label>\n          <label\n            *ngIf=\"eprtAndTpaForm.controls.publication_year.errors && eprtAndTpaForm.controls.publication_year.errors.pattern && (eprtAndTpaForm.controls.publication_year.touched || eprtAndTpaForm.controls.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only-1' | translate }}</label>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'ROOT.required' | translate }} </label>\n\n        </div>\n        <div [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isIPKDocument\"\n          class=\"form-group mb-2 col-md-12\">\n          <label *ngIf=\"isEPRTDocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.eprt-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <label *ngIf=\"isTPADocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.tpa-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"eprt_tpa_score\" name=\"certificateScore\" maxlength=\"3\"\n            [placeholder]=\"'CONTENT.score'|translate\" required\n            [ngClass]=\"fed.eprt_tpa_score.invalid && fed.eprt_tpa_score.touched?'is-invalid':(fed.eprt_tpa_score.valid?'is-valid':'')\">\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'ROOT.required' | translate }} </label>\n        </div>\n        <div\n          [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isEPRTDocument || isTPADocument\"\n          class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.ipk-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"gpa\" placeholder=\"3.55\"\n            [ngClass]=\"fed.gpa.invalid && fed.gpa.touched?'is-invalid':(fed.gpa.valid?'is-valid':'')\" required max=\"4\"\n            maxlength=\"4\">\n          <label *ngIf=\"fed.gpa.errors && fed.gpa.errors.required && (fed.gpa.touched || fed.gpa.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label *ngIf=\"fed.gpa.errors && fed.gpa.errors.max && (fed.gpa.touched || fed.gpa.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n          <label *ngIf=\"fed.gpa.errors && fed.gpa.errors.pattern && (fed.gpa.touched || fed.gpa.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 col-md-12\">\n          <label class=\"form-label mb-0 f-w-600\">{{isEprtUpdated == true ? ('CONTENT.edit-file' | translate) :\n            ('CONTENT.upload-file' | translate) }} <span *ngIf=\"!isEprtUpdated\" class=\"required\">*</span></label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"certificateDetail\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadStudyDocumentEprt($event)\"\n            [ngClass]=\"fed.url.invalid && fed.url.touched?'is-invalid':(fed.url.valid?'is-valid':'')\" />\n          <p class=\"error text-danger small form-text mb-1\">\n            {{fed.url.errors && fed.url.errors.required && (fed.url.touched || fed.url.dirty) ? ('CONTENT.required' |\n            translate) : ''}}\n            {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n            translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.\n          </p>\n        </div>\n        <div class=\"form-group col-md-12 mt-0\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataStudyUrl.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataStudyUrl\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_name !== null ? (e.document_name | shortener:[55,\n                        '..']) : 'Data Dokumen'}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataStudyUrl.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 text-right col-md-12\">\n          <!-- <button type=\"button\" (click)=\"closeEprtTpaModals();\" [disabled]=\"this.loading\"\n              class=\"btn btn-secondary btn-sm\">\n              <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n            </button> -->\n          <button *ngIf=\"haveDocumentStudy\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n            [disabled]=\"this.loading\" (click)=\"submitRejectStudyDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{\n              'CONTENT.tolak' | translate }} </span>\n          </button>\n          <button *ngIf=\"haveDocumentStudy\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n            [disabled]=\"this.loading\" (click)=\"submitStudyDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n              'CONTENT.setujui' | translate }}</span>\n          </button>\n          <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"eprtAndTpaForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">\n              <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }} \n            </span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #ijazahModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeIjazahModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"ijazahForm\"\n      (ngSubmit)=\"createIjazahDocument()\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-name' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\"\n            [placeholder]=\"'CONTENT.document-name'| translate\" readonly>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-12 mb-0\">\n          <label class=\"form-label mb-0 f-w-600\">{{'CONTENT.edit-file' | translate }} <span *ngIf=\"!isUpdatedTranscript\"\n              class=\"required\">*</span></label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"ijazahDoc\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadIjazahDocument($event)\"\n            [ngClass]=\"fid.url.invalid && fid.url.touched?'is-invalid':(fid.url.valid?'is-valid':'')\" />\n          <p class=\"error text-danger small form-text mb-2\">\n            {{fid.url.errors && fid.url.errors.required && (fid.url.touched || fid.url.dirty) ? ('CONTENT.required' |\n            translate) : ''}}\n            {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n            translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.\n          </p>\n        </div>\n        <div class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataIjazah.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataIjazah\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_type | shortener:[55, '..']}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataIjazah.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 text-right col-md-12\">\n          <!-- <button type=\"button\" (click)=\"closeIjazahModals()\" [disabled]=\"this.loading\"\n          class=\"btn btn-secondary btn-sm\">\n          <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n        </button> -->\n          <button *ngIf=\"haveDocumentIjazah\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n            [disabled]=\"this.loading\" (click)=\"submitIjazahRejectedDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{\n              'CONTENT.tolak' | translate }} </span>\n          </button>\n          <button *ngIf=\"haveDocumentIjazah\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n            [disabled]=\"this.loading\" (click)=\"submitIjazahDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n              'CONTENT.setujui' | translate }}</span>\n          </button>\n          <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"ijazahForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">\n              <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}\n              </span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n\n<app-ui-modal #transcriptRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeTranscriptModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"transcriptDataForm\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" readonly>\n          </div>\n        </div>\n      </div>\n      <div [hidden]=\"isTranscript\" class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.ipk-score' | translate }} <span\n                class=\"required\">*</span></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"gpa\" placeholder=\"3.55\"\n              [ngClass]=\"ftd.gpa.invalid && ftd.gpa.touched?'is-invalid':(ftd.gpa.valid?'is-valid':'')\" required max=\"4\"\n              maxlength=\"4\">\n            <label *ngIf=\"ftd.gpa.errors && ftd.gpa.errors.required && (ftd.gpa.touched || ftd.gpa.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            <label *ngIf=\"ftd.gpa.errors && ftd.gpa.errors.max && (ftd.gpa.touched || ftd.gpa.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n            <label *ngIf=\"ftd.gpa.errors && ftd.gpa.errors.pattern && (ftd.gpa.touched || ftd.gpa.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-0\">\n            <div>\n              <label class=\"form-label mb-0 f-w-600\">{{isUpdatedTranscript == true ? ('CONTENT.edit-file' | translate) :\n                ('CONTENT.upload-file' | translate) }} <span *ngIf=\"!isUpdatedTranscript\"\n                  class=\"required\">*</span></label>\n              <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n                accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadTranscriptFiles($event)\"\n                [ngClass]=\"ftd.url.invalid && ftd.url.touched?'is-invalid':(ftd.url.valid?'is-valid':'')\" />\n              <p class=\"error text-danger small form-text\">\n                {{ftd.url.errors && ftd.url.errors.required && (ftd.url.touched || ftd.url.dirty) ? ('CONTENT.required'\n                | translate) : ''}}\n                {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n                translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n                Mb.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-0\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataTranscriptUrlDoc.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataTranscriptUrlDoc\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> Transkrip Nilai\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataTranscriptUrlDoc.length == 0\" class=\"row\">\n              <div class=\"col-12 ml-2\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 text-right\">\n        <!-- <button type=\"button\" (click)=\"closeTranscriptModals()\" [disabled]=\"this.loading\"\n                class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button> -->\n        <button *ngIf=\"haveTranscriptDoc\" type=\"button\" class=\"btn btn-outline-danger btn-sm\" [disabled]=\"this.loading\"\n          (click)=\"submitRejectTranscriptDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{ 'CONTENT.tolak'\n            | translate }} </span>\n        </button>\n        <button *ngIf=\"haveTranscriptDoc\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n          [disabled]=\"this.loading\" (click)=\"submitApprovalTranscriptDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n            'CONTENT.setujui' | translate }}</span>\n        </button>\n        <button type=\"submit\" class=\"btn btn-warning btn-sm m-1\" (click)=\"createReportCardDocument()\"\n          [disabled]=\"transcriptDataForm.invalid || this.loading\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\">\n            <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}\n          </span>\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #documentRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"documentRequirementModalClose();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup]=\"participantDocumentForm\" class=\"md-float-material form-material\" action=\"javascript:\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-req-name' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" readonly formControlName=\"name\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"isShowIdentityNumber\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.identity-number' | translate }} <span\n                class=\"required\">*</span></label>\n            <input type=\"text\" style=\"text-transform: uppercase;\" class=\"form-control\" name=\"number\" minlength=\"7\"\n              maxlength=\"16\" formControlName=\"number\" placeholder=\"{{ 'CONTENT.identity-number' | translate }}\"\n              [ngClass]=\"fpd.number.invalid && fpd.number.touched?'is-invalid':(fpd.number.valid?'is-valid':'')\">\n            <label *ngIf=\"fpd.number.errors && fpd.number.errors.required && (fpd.number.touched || fpd.number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            <label *ngIf=\"fpd.number.errors && fpd.number.errors.minlength && (fpd.number.touched || fpd.number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.identity-number-validation' | translate }}</label>\n            <label *ngIf=\"fpd.number.errors && fpd.number.errors.maxlength && (fpd.number.touched || fpd.number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.identity-number-validation' | translate }}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-2 f-w-600\">{{formTypePersonal == 'edit' ? ('CONTENT.edit-file' | translate) :\n              ('CONTENT.upload-file' | translate) }} <span *ngIf=\"formTypePersonal == 'input'\"\n                class=\"required\">*</span></label>\n            <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n              accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadRequirementDocument($event)\"\n              [ngClass]=\"fpd.url.invalid && fpd.url.touched?'is-invalid':(fpd.url.valid?'is-valid':'')\" />\n            <p class=\"error text-danger small form-text\">\n              {{fpd.url.errors && fpd.url.errors.required && (fpd.url.touched || fpd.url.dirty) ? ('CONTENT.required' |\n              translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n              translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n              Mb.</p>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataRequirementUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataRequirementUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.document_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.document_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name ? e.document_name : e.document_type |\n                          shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataRequirementUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 text-right\">\n        <!-- <button type=\"button\" (click)=\"documentRequirementModalClose()\" [disabled]=\"this.loading\"\n                class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button> -->\n        <button *ngIf=\"haveDocumentPersonal\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n          [disabled]=\"this.loading\" (click)=\"submitRejectParticipantDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{ 'CONTENT.tolak'\n            | translate }} </span>\n        </button>\n        <button *ngIf=\"haveDocumentPersonal\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n          [disabled]=\"this.loading\" (click)=\"submitApprovalParticipantDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n            'CONTENT.setujui' | translate }}</span>\n        </button>\n        <button type=\"submit\" class=\"btn btn-warning btn-sm\"\n          [disabled]=\"participantDocumentForm.invalid || this.loading\" (click)=\"createPersonalDocumentParticipant()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\">\n            <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}</span>\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #paymentAbilityModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"paymentAbilityModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup]=\"abilityDataForm\" class=\"md-float-material form-material\" action=\"javascript:\"\n      (ngSubmit)=\"createSupportingDocument();\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"document-requirements\" required formControlName=\"name\"\n              readonly>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-2 f-w-600\">{{formTypeAbility == 'edit' ? ('CONTENT.edit-file' | translate) :\n              ('CONTENT.upload-file' | translate) }} <span *ngIf=\"formTypePersonal == 'input'\"\n                class=\"required\">*</span></label> <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\"\n              formControlName=\"url\" accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadAbilityPayment($event)\" />\n            <p class=\"error text-danger small form-text\">\n              {{fad.url.errors && fad.url.errors.required && (fad.url.touched || fad.url.dirty) ? ('CONTENT.required' |\n              translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n              translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n              Mb.</p>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataAbilityUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataAbilityUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.supporting_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.supporting_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.supporting_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataAbilityUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 mt-4 text-right\">\n        <button *ngIf=\"haveAbilityDocument\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n          [disabled]=\"this.loading\" (click)=\"submitRejectAbilityDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{ 'CONTENT.tolak'\n            | translate }} </span>\n        </button>\n        <button *ngIf=\"haveAbilityDocument\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n          [disabled]=\"this.loading\" (click)=\"submitApprovalAbilityDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n            'CONTENT.setujui' | translate }}</span>\n        </button>\n        <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"abilityDataForm.invalid || this.loading\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}</span>\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #recommendationLetterRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"recommendationLetterRequirementModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"supportingDataForm\"\n      (ngSubmit)=\"createSupportingDocument();\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-name' | translate }} <span class=\"required\">*</span>\n            </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"pic_name\" name=\"picName\" required maxlength=\"100\"\n              [placeholder]=\"'CONTENT.pic-name' | translate\"\n              [ngClass]=\"fsd.pic_name.invalid && fsd.pic_name.touched?'is-invalid':(fsd.pic_name.valid?'is-valid':'')\">\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">\n              {{ 'ROOT.required' | translate }}</label>\n          </div>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-phone-number' | translate }} <span\n                class=\"required\">*</span> </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"pic_phone_number\" name=\"picPhoneNumber\" required\n              minlength=\"11\" maxlength=\"13\" [placeholder]=\"'CONTENT.placeholder-number' | translate\"\n              [ngClass]=\"fsd.pic_phone_number.invalid && fsd.pic_phone_number.touched?'is-invalid':(fsd.pic_phone_number.valid?'is-valid':'')\">\n            <label\n              *ngIf=\"fsd.pic_phone_number.errors && fsd.pic_phone_number.errors.required && (fsd.pic_phone_number.touched || fsd.pic_phone_number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            <label\n              *ngIf=\"fsd.pic_phone_number.errors && fsd.pic_phone_number.errors.pattern && (fsd.pic_phone_number.touched || fsd.pic_phone_number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            <label\n              *ngIf=\"fsd.pic_phone_number.errors && fsd.pic_phone_number.errors.minlength && (fsd.pic_phone_number.touched || fsd.pic_phone_number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-email' | translate }} <span\n                class=\"required\">*</span> </label>\n            <input type=\"email\" class=\"form-control\" formControlName=\"pic_email_address\" name=\"picEmail\" required\n              pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\" placeholder=\"xxx@gmail.com\"\n              oninput=\"setCustomValidity('')\"\n              [ngClass]=\"fsd.pic_email_address.invalid && fsd.pic_email_address.touched?'is-invalid':(fsd.pic_email_address.valid?'is-valid':'')\"\n              maxlength=\"150\">\n            <label\n              *ngIf=\"fsd.pic_email_address.invalid && (fsd.pic_email_address.dirty || fsd.pic_email_address.touched )\"\n              id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n              'CONTENT.email-match' | translate}}</label>\n          </div>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-address' | translate }} <span\n                class=\"required\">*</span> </label>\n            <textarea type=\"text\" class=\"form-control\" formControlName=\"pic_address\" required maxlength=\"150\"\n              [placeholder]=\"'CONTENT.pic-address' | translate\"\n              [ngClass]=\"fsd.pic_address.invalid && fsd.pic_address.touched?'is-invalid':(fsd.pic_address.valid?'is-valid':'')\"></textarea>\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n              'ROOT.required' | translate }}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.edit-file' | translate }} </label>\n            <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n              [ngClass]=\"fsd.url.invalid && fsd.url.touched?'is-invalid':(fsd.url.valid?'is-valid':'')\"\n              accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadSupportingFile($event)\" />\n            <p class=\"error text-danger small form-text\">\n              {{fsd.url.errors && fsd.url.errors.required && (fsd.url.touched || fsd.url.dirty) ? ('CONTENT.required' |\n              translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n              translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n              Mb.</p>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataRecommendationUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataRecommendationUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.supporting_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.supporting_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.supporting_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataRecommendationUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 mt-4 text-right\">\n        <!-- <button type=\"button\" (click)=\"recommendationLetterRequirementModal.hide();\" [disabled]=\"this.loading\"\n        class=\"btn btn-secondary btn-sm\">\n        <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n      </button> -->\n        <button *ngIf=\"haveSupportingDocument\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n          [disabled]=\"this.loading\" (click)=\"submitSupportingRejected()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{ 'CONTENT.tolak'\n            | translate }} </span>\n        </button>\n        <button *ngIf=\"haveSupportingDocument\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n          [disabled]=\"this.loading\" (click)=\"submitSupportingApproved()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n            'CONTENT.setujui' | translate }}</span>\n        </button>\n        <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"supportingDataForm.invalid || this.loading\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\">\n            <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }} \n          </span>\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #transcriptRequirementModalView [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-lg\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"transcriptRequirementModalView.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"transcriptDataForm\">\n      <div class=\"col-md-12S\">\n        <form [formGroup]=\"transcriptFormlView\">\n          <div class=\"form-group mb-0 mt-0 text-right\">\n            <div class=\"btn-group\">\n              <button type=\"submit\" class=\"btn btn-outline-primary btn-sm\" routerLink=\"/adm-mp-credit-transfer/{{registration_number}}\">\n                <i class=\"fas fa-book-open\"></i> {{'MENU.credit-transfer' | translate}}\n              </button>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">SKS yang telah diampu</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"totalCredit\" readonly>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">Total Mata Kuliah</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"totalCourse\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n                </label>\n                <div *ngIf=\"dataTranscriptUrl.length !== 0\" class=\"row\">\n                  <div class=\"col-12 col-xs-12 col-md-12\">\n                    <div *ngIf=\"dataTranscriptUrl == null\">\n                      <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                    </div>\n                    <div *ngIf=\"dataTranscriptUrl != null\">\n                      <div class=\"card text-left mb-3\">\n                        <div class=\"card-body p-2\">\n                          <a [href]=\"dataTranscriptUrl\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                              class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                            <p class=\"card-text pl-1 mb-0\"> Transkrip Nilai Pendidikan Terakhir\n                            </p>\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div *ngIf=\"dataTranscriptUrl.length == 0\" class=\"row\">\n                  <div class=\"col-12 ml-2\"> Data Tidak Ditemukan!\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"table-responsive pb-6\">\n            <table class=\"table table-striped table-hover table-sm\">\n              <thead class=\"thead-light bg-primarys\">\n                <tr>\n                  <th scope=\"col\" class=\"center-table\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\">{{ 'CONTENT.course-code' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\">{{ 'CONTENT.course-name' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\" class=\"center-table\">{{ 'CONTENT.credit-hour' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\" class=\"center-table\">{{ 'CONTENT.grade' | translate}}</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"tableTranscript?.length != 0\">\n                <tr *ngFor=\"let data of tableTranscript; let i = index;\">\n                  <th class=\"center-table\" scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                  <td class=\"center-table\">{{data.course_code}}\n                  </td>\n                  <td class=\"center-table\">{{ data.course_name }}</td>\n                  <td class=\"center-table\">{{ data.credit_hour }}</td>\n                  <td class=\"center-table\">{{ data.grade }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </form>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #utbkModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeUtbkModals();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"utbkForm\"\n      (ngSubmit)=\"createUtbkDocument()\">\n      <div class=\"row\">\n        <p class=\"col-md-12 mb-0\"><span class=\"required\"><b>* {{'ROOT.required' | translate }}</b></span></p>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.kpu-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"KPUScore\" name=\"KPUScore\" min=\"0\" max=\"1000\"\n            minlength=\"1\" maxlength=\"6\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\" required>\n          <label\n            *ngIf=\"futbk.KPUScore.errors && futbk.KPUScore.errors.required && (futbk.KPUScore.touched || futbk.KPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KPUScore.errors && futbk.KPUScore.errors.max && (futbk.KPUScore.touched || futbk.KPUScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KPUScore.errors && futbk.KPUScore.errors.pattern && (futbk.KPUScore.touched || futbk.KPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pk-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"PKScore\" name=\"PKScore\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.PKScore.errors && futbk.PKScore.errors.required && (futbk.PKScore.touched || futbk.PKScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PKScore.errors && futbk.PKScore.errors.max && (futbk.PKScore.touched || futbk.PKScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PKScore.errors && futbk.PKScore.errors.pattern && (futbk.PKScore.touched || futbk.PKScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pdpu-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"PDPUScore\" name=\"PDPUScore\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.PDPUScore.errors && futbk.PDPUScore.errors.required && (futbk.PDPUScore.touched || futbk.PDPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PDPUScore.errors && futbk.PDPUScore.errors.max && (futbk.PDPUScore.touched || futbk.PDPUScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PDPUScore.errors && futbk.PDPUScore.errors.pattern && (futbk.PDPUScore.touched || futbk.PDPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.kmbdm-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"KMBDMScore\" name=\"KMBDMScore\" required min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\">\n          <label\n            *ngIf=\"futbk.KMBDMScore.errors && futbk.KMBDMScore.errors.required && (futbk.KMBDMScore.touched || futbk.KMBDMScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KMBDMScore.errors && futbk.KMBDMScore.errors.max && (futbk.KMBDMScore.touched || futbk.KMBDMScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KMBDMScore.errors && futbk.KMBDMScore.errors.pattern && (futbk.KMBDMScore.touched || futbk.KMBDMScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.category-utbk' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select class=\"index-up\" name=\"exam-location\" [placeholder]=\"'CONTENT.category-utbk'|translate\"\n            [ngClass]=\"'custom'\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"selectedCategoryUtbk\"\n            [options]=\"listCategoryUtbk\" [ngModelOptions]=\"{standalone: true}\" (selected)=\"changeCategoryUtbk($event)\">\n          </ng-select>\n          <label *ngIf=\"!selectedCategoryUtbk\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate}}</label>\n        </div>\n      </div>\n      <div *ngIf=\"selectedCategoryUtbk\" class=\"row\">\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.math-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"math\" name=\"math\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label *ngIf=\"futbk.math.errors && futbk.math.errors.required && (futbk.math.touched || futbk.math.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"futbk.math.errors && futbk.math.errors.max && (futbk.math.touched || futbk.math.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label *ngIf=\"futbk.math.errors && futbk.math.errors.pattern && (futbk.math.touched || futbk.math.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.physics-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"physics\"\n            [placeholder]=\"'CONTENT.placeholder-utbk'|translate\" name=\"physics\" min=\"0\" max=\"1000\" minlength=\"1\"\n            maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.physics.errors && futbk.physics.errors.required && (futbk.physics.touched || futbk.physics.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.physics.errors && futbk.physics.errors.max && (futbk.physics.touched || futbk.physics.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.physics.errors && futbk.physics.errors.pattern && (futbk.physics.touched || futbk.physics.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.chemical' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"chemical\" name=\"chemical\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.chemical.errors && futbk.chemical.errors.required && (futbk.chemical.touched || futbk.chemical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.chemical.errors && futbk.chemical.errors.max && (futbk.chemical.touched || futbk.chemical.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.chemical.errors && futbk.chemical.errors.pattern && (futbk.chemical.touched || futbk.chemical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.biology' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"biological\" name=\"biological\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.biological.errors && futbk.biological.errors.required && (futbk.biological.touched || futbk.biological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.biological.errors && futbk.biological.errors.max && (futbk.biological.touched || futbk.biological.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.biological.errors && futbk.biological.errors.pattern && (futbk.biological.touched || futbk.biological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.geography' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"geography\" name=\"geography\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.geography.errors && futbk.geography.errors.required && (futbk.geography.touched || futbk.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.geography.errors && futbk.geography.errors.max && (futbk.geography.touched || futbk.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.geography.errors && futbk.geography.errors.pattern && (futbk.geography.touched || futbk.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.historical' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"historical\" name=\"historical\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.historical.errors && futbk.historical.errors.required && (futbk.historical.touched || futbk.historical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.historical.errors && futbk.historical.errors.max && (futbk.historical.touched || futbk.historical.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.historical.errors && futbk.historical.errors.pattern && (futbk.historical.touched || futbk.historical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.sociological' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"sociological\" name=\"sociological\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.sociological.errors && futbk.sociological.errors.required && (futbk.sociological.touched || futbk.sociological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.sociological.errors && futbk.sociological.errors.max && (futbk.sociological.touched || futbk.sociological.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.sociological.errors && futbk.sociological.errors.pattern && (futbk.sociological.touched || futbk.sociological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.economy' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"economy\" name=\"economy\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.economy.errors && futbk.economy.errors.required && (futbk.economy.touched || futbk.economy.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.economy.errors && futbk.economy.errors.max && (futbk.economy.touched || futbk.economy.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.economy.errors && futbk.economy.errors.pattern && (futbk.economy.touched || futbk.economy.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.upload-file' | translate}} </label>\n          <input id=\"utbkFile\" class=\"form-control\" type=\"file\" name=\"utbkFile\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadUtbkDocument($event)\" />\n          <div *ngIf=\"errSize\" class=\"text-danger mt-4 ml-1\">Max 2 MB!</div>\n          <div *ngIf=\"errType\" class=\"text-danger mt-4 ml-1\">Error file!</div>\n        </div>\n        <div class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.evidence' | translate }}\n          </label>\n          <div *ngIf=\"dataUtbkUrl.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataUtbkUrl\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> Nilai UTBK\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataUtbkUrl.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 mt-2 text-right col-md-12\">\n          <button type=\"submit\" class=\"btn btn-warning btn-sm\"\n            [disabled]=\"utbkForm.invalid || !selectedCategoryUtbk || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">\n              <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}\n            </span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #recommendationS2Modal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\" [loading]=\"loadingRecommendation\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.recommendation-document-S2' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"recommendationS2Modal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"recommendationS2Form\">\n      <app-alert type=\"warning\">\n        <div class=\"col-sm-12 text-center\">\n          <h6>{{ 'CONTENT.send-email-recommendation-info' | translate }}</h6>\n        </div>\n      </app-alert>\n      <div class=\"row\">\n        <h5 class=\"col-md-12\">Rekomendasi Pertama\n          <hr>\n        </h5>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.name' | translate}} <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name_rec1\" name=\"name_rec1\"\n            [placeholder]=\"'CONTENT.recommendation_name_1'|translate\" required maxlength=\"150\"\n            [ngClass]=\"frod.name_rec1.invalid && frod.name_rec1.touched?'is-invalid':(frod.name_rec1.valid?'is-valid':'')\"\n            [readonly]=\"viewRecommendationS2\">\n          <label\n            *ngIf=\"frod.name_rec1.errors && frod.name_rec1.errors.required && (frod.name_rec1.touched || frod.name_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.handphone' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"handphone_rec1\" name=\"handphone_rec1\"\n            [placeholder]=\"'CONTENT.placeholder-number' | translate\" minlength=\"11\" maxlength=\"13\" required\n            [readonly]=\"viewRecommendationS2\"\n            [ngClass]=\"frod.handphone_rec1.invalid && frod.handphone_rec1.touched?'is-invalid':(frod.handphone_rec1.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"frod.handphone_rec1.errors && frod.handphone_rec1.errors.required && (frod.handphone_rec1.touched || frod.handphone_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec1.errors && frod.handphone_rec1.errors.pattern && (frod.handphone_rec1.touched || frod.handphone_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec1.errors && frod.handphone_rec1.errors.minlength && (frod.handphone_rec1.touched || frod.handphone_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.email' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"email_rec1\"\n            pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\"\n            oninput=\"setCustomValidity('')\" name=\"email_rec1\" [placeholder]=\"'CONTENT.recommendation_email_1'|translate\"\n            required [readonly]=\"viewRecommendationS2\" maxlength=\"150\"\n            [ngClass]=\"frod.email_rec1.invalid && (frod.email_rec1.dirty || frod.email_rec1.touched)?'is-invalid':(frod.email_rec1.valid?'is-valid':'')\">\n          <label *ngIf=\"frod.email_rec1.invalid && (frod.email_rec1.dirty || frod.email_rec1.touched )\"\n            id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.email-match' | translate}}</label>\n        </div>\n        <h5 class=\"mt-3 col-md-12\">Rekomendasi Kedua\n          <hr>\n        </h5>\n        <hr>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.name' | translate}} <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name_rec2\" name=\"name_rec2\"\n            [placeholder]=\"'CONTENT.recommendation_name_1'|translate\" required maxlength=\"150\"\n            [readonly]=\"viewRecommendationS2\"\n            [ngClass]=\"frod.name_rec2.invalid && frod.name_rec2.touched?'is-invalid':(frod.name_rec2.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"frod.name_rec2.errors && frod.name_rec2.errors.required && (frod.name_rec2.touched || frod.name_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.handphone' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"handphone_rec2\" name=\"handphone_rec2\"\n            [placeholder]=\"'CONTENT.placeholder-number' | translate\" minlength=\"11\" maxlength=\"13\" required\n            [readonly]=\"viewRecommendationS2\"\n            [ngClass]=\"frod.handphone_rec2.invalid && frod.handphone_rec2.touched?'is-invalid':(frod.handphone_rec2.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"frod.handphone_rec2.errors && frod.handphone_rec2.errors.required && (frod.handphone_rec2.touched || frod.handphone_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec2.errors && frod.handphone_rec2.errors.pattern && (frod.handphone_rec2.touched || frod.handphone_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec2.errors && frod.handphone_rec2.errors.minlength && (frod.handphone_rec2.touched || frod.handphone_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.email' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [readonly]=\"viewRecommendationS2\" formControlName=\"email_rec2\"\n            pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\"\n            oninput=\"setCustomValidity('')\" name=\"email_rec2\" [placeholder]=\"'CONTENT.recommendation_email_1'|translate\"\n            required maxlength=\"150\"\n            [ngClass]=\"frod.email_rec2.invalid && (frod.email_rec2.dirty || frod.email_rec2.touched)?'is-invalid':(frod.email_rec2.valid?'is-valid':'')\">\n          <label *ngIf=\"frod.email_rec2.invalid && (frod.email_rec2.dirty || frod.email_rec2.touched )\"\n            id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.email-match' | translate}}</label>\n        </div>\n        <div class=\"col-md-12 text-right\">\n          <button type=\"button\" (click)=\"recommendationS2Modal.hide();\" [disabled]=\"this.loading\"\n            class=\"btn btn-secondary btn-sm\">\n            <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #proposalModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"proposalModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"proposalForm\"\n      (ngSubmit)=\"createProposalDocument()\">\n      <div class=\"row align-items-center\">\n        <div class=\"text-right col-12 col-md-12\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.proposal-title' | translate }} <span\n              class=\"required\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"title\" [placeholder]=\"'CONTENT.proposal-title'|translate\"\n            required maxlength=\"1000\"\n            [ngClass]=\"fprd.title.invalid && fprd.title.touched?'is-invalid':(fprd.title.valid?'is-valid':'')\"></textarea>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'ROOT.required' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 col-md-12\">\n          <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.edit-file' | translate }} </label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"certificateDetail\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadProposalDocument($event)\"\n            [ngClass]=\"fprd.url.invalid && fprd.url.touched?'is-invalid':(fprd.url.valid?'is-valid':'')\" />\n          <p class=\"error text-danger small form-text\">\n            {{fprd.url.errors && fprd.url.errors.required && (fprd.url.touched || fprd.url.dirty) ? ('CONTENT.required'\n            | translate) : ''}}\n            {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n            translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 5 Mb.\n          </p>\n        </div>\n        <div class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataProposal.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataProposal\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataProposal.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 text-right col-md-12\">\n          <!-- <button type=\"button\" (click)=\"proposalModal.hide();\" [disabled]=\"this.loading\"\n          class=\"btn btn-secondary btn-sm\">\n          <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n        </button> -->\n          <button *ngIf=\"haveDocumentData\" type=\"button\" class=\"btn btn-outline-danger btn-sm\" [disabled]=\"this.loading\"\n            (click)=\"submitRejectProposalDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{\n              'CONTENT.tolak' | translate }} </span>\n          </button>\n          <button *ngIf=\"haveDocumentData\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n            [disabled]=\"this.loading\" (click)=\"submitApprovalProposalDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n              'CONTENT.setujui' | translate }}</span>\n          </button>\n          <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"proposalForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}\n            </span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>");

/***/ }),

/***/ "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: DocumentDataDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentDataDetailRoutingModule", function() { return DocumentDataDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _document_data_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document-data-detail.component */ "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _document_data_detail_component__WEBPACK_IMPORTED_MODULE_2__["DocumentDataDetailComponent"]
    }
];
let DocumentDataDetailRoutingModule = class DocumentDataDetailRoutingModule {
};
DocumentDataDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], DocumentDataDetailRoutingModule);



/***/ }),

/***/ "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.center-table {\n  text-align: center; }\n\ninput[type=text] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\ninput[type=number] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\n.index-up {\n  z-index: 3; }\n\n.required {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvdGhlbWUvYWRtLW1wLWRvY3VtZW50LWRhdGEvZG9jdW1lbnQtZGF0YS1kZXRhaWwvZG9jdW1lbnQtZGF0YS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLG1CQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsVUFBVSxFQUFBOztBQUVaO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvYWRtLW1wLWRvY3VtZW50LWRhdGEvZG9jdW1lbnQtZGF0YS1kZXRhaWwvZG9jdW1lbnQtZGF0YS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHtcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbnRoe1xuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLmNlbnRlci10YWJsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cblxuIGlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uaW5kZXgtdXAge1xuICB6LWluZGV4OiAzO1xufVxuLnJlcXVpcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DocumentDataDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentDataDetailComponent", function() { return DocumentDataDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/admin-management.service */ "./src/app/_services/admin-management.service.ts");
/* harmony import */ var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/participant.service */ "./src/app/_services/participant.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);











let DocumentDataDetailComponent = class DocumentDataDetailComponent {
    constructor(translate, broadcasterService, chartService, userService, route, fb) {
        this.translate = translate;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.userService = userService;
        this.route = route;
        this.fb = fb;
        this.dtOptions = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.formDataCertificateUpdated = new FormData();
        this.formDataUpdate = new FormData();
        this.formData = new FormData();
        this.type = 'default';
        this.pageDocument = 1;
        this.registrationParticipantDataForm = this.fb.group({
            registration_number: [''],
            fullname: [''],
            gender: [''],
            nationality: [''],
            religion: [''],
            country_birth: [''],
            province_birth: [''],
            city_birth: [''],
            birthdate: [''],
            country_origin: [''],
            NIK: [''],
            passport_number: [''],
            passport_expiry_date: [''],
            color_blind: [''],
            special_needs: [''],
            email: [''],
            phone_number: ['']
        });
        this.reportDocumentApproved = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            url: [''],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            approval_final_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
        });
        this.certificateDocumentApproved = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            url: [''],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            approval_final_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
        });
        this.reportCardDataForm = this.fb.group({
            registration_number: [''],
            name: [''],
            document_type_id: [''],
            description: [''],
            number: [''],
            url: [''],
            document_id: [''],
            semester_id: [''],
            semester_name: [''],
            range_score: [''],
            math: [''],
            physics: [''],
            bahasa: [''],
            english: [''],
            biology: [''],
            chemical: [''],
            sociological: [''],
            economy: [''],
            geography: [''],
        });
        this.certificateDataForm = this.fb.group({
            registration_number: [''],
            document_type_id: [''],
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(100)])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)])),
            number: [''],
            url: [''],
            certificate_type_id: [''],
            certificate_level_id: [''],
            publication_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')])),
            certificate_score: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
        });
        this.publikasiForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)])),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(500)])),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            publication_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(100)])),
        });
        this.eprtAndTpaForm = this.fb.group({
            registration_number: [''],
            document_type_id: [''],
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            number: [''],
            url: [''],
            eprt_tpa_type_id: [''],
            eprt_tpa_level_id: [''],
            publication_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')])),
            nameCoPromotor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(100)])),
            eprt_tpa_score: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')])),
            gpa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]]
        });
        this.proposalForm = this.fb.group({
            registration_number: [''],
            document_type_id: [''],
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(1000)])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            number: [''],
            url: [''],
        });
        this.ijazahForm = this.fb.group({
            registration_number: [''],
            document_type_id: [''],
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            url: [''],
            link_document: ['']
        });
        this.transcriptDataForm = this.fb.group({
            document_id: [''],
            registration_number: [''],
            name: [''],
            document_type_id: [''],
            url: [''],
            gpa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]]
        });
        this.participantDocumentForm = this.fb.group({
            document_type_id: [''],
            name: [''],
            description: [''],
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(16)])),
            url: ['']
        });
        this.abilityDataForm = this.fb.group({
            registration_number: [''],
            document_type_id: [''],
            name: [''],
            description: [''],
            number: [''],
            url: ['']
        });
        this.supportingDataForm = this.fb.group({
            registration_number: [''],
            document_type_id: [''],
            name: [''],
            description: [''],
            number: [''],
            url: [''],
            pic_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(100)])],
            pic_phone_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')])],
            pic_email_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)])],
            pic_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)])],
        });
        this.transcriptFormlView = this.fb.group({
            name: [''],
            totalCredit: [''],
            totalCourse: ['']
        });
        this.utbkForm = this.fb.group({
            KPUScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]),
            PKScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]),
            PDPUScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]),
            KMBDMScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]),
            math: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            geography: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            historical: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            sociological: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            economy: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            physics: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            chemical: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            biological: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
        });
        this.recommendationS2Form = this.fb.group({
            name_rec1: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)])),
            handphone_rec1: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')])),
            email_rec1: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)])),
            name_rec2: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)])),
            handphone_rec2: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')])),
            email_rec2: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)])),
        });
        translate.setDefaultLang(localStorage.getItem('lang'));
        this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
        this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
        this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
        this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
        this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
        this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
        this.translate.get('CONTENT.approve-question').subscribe((l) => { this.approve = l; });
        this.translate.get('CONTENT.rejected-question').subscribe((l) => { this.rejected = l; });
        broadcasterService.changeLangBroadcast$.subscribe(res => {
            translate.setDefaultLang(res.lang);
            this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
            this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
            this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
            this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
            this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
            this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
            this.translate.get('CONTENT.approve-question').subscribe((l) => { this.approve = l; });
            this.translate.get('CONTENT.rejected-question').subscribe((l) => { this.rejected = l; });
        });
        this.registration_number = +this.route.snapshot.paramMap.get('registration_number');
        this.participantId = +this.route.snapshot.paramMap.get('participantId');
        this.loading = false;
        this.loadingCard = false;
        this.supportingForm = false;
        this.transcripForm = false;
        this.participantForm = false;
        this.noDataDocument = false;
        this.errSize = false;
        this.errType = false;
        this.isUpdatedReport = false;
        this.isMathStudy = false;
        this.isBahasaStudy = false;
        this.isEnglishStudy = false;
        this.chemicalStudy = false;
        this.biologyStudy = false;
        this.physicsStudy = false;
        this.economyStudy = false;
        this.sociologicalStudy = false;
        this.geographyStudy = false;
        this.approvedStatus = false;
        this.isUpdatedTranscript = false;
        this.loadTableTranscript = false;
        this.dataTranscriptUrl = false;
        this.haveProposalDocument = false;
        this.dataRecommendationUrl = [];
        this.formDataStudyUpd = new FormData();
        this.formDataIjazahUpd = new FormData();
        this.formData3Updated = new FormData();
        this.formDataPersonalUpd = new FormData();
        this.formDataAbilityUpd = new FormData();
        this.formData2Update = new FormData();
        this.formDataUtbkUpd = new FormData();
        this.formDataProposalUpd = new FormData();
        this.dataRequirementUrl = [];
        this.dataProposal = [];
        this.listDocumentReport = [];
        this.listDocumentCertificate = [];
        this.participantBiodatas = [];
        this.tableDataPublication = [];
        this.dataIjazah = [];
        this.tableTranscript = [];
        this.dataTranscriptUrlDoc = [];
        this.dataAbilityUrl = [];
        this.dataUtbkUrl = [];
        this.dataStudyUrl = [];
        this.searching = '';
        this.listCategoryUtbk = [
            {
                value: '1',
                label: 'SAINTEK'
            },
            {
                value: '2',
                label: 'SOSHUM'
            }
        ];
    }
    get fraport() {
        return this.reportCardDataForm.controls;
    }
    get fcertif() {
        return this.certificateDataForm.controls;
    }
    get fpubd() {
        return this.publikasiForm.controls;
    }
    get fid() {
        return this.ijazahForm.controls;
    }
    get fprd() {
        return this.proposalForm.controls;
    }
    get fed() {
        return this.eprtAndTpaForm.controls;
    }
    get ftd() {
        return this.transcriptDataForm.controls;
    }
    get fpd() {
        return this.participantDocumentForm.controls;
    }
    get fad() {
        return this.participantDocumentForm.controls;
    }
    get fsd() {
        return this.supportingDataForm.controls;
    }
    get futbk() {
        return this.utbkForm.controls;
    }
    get frod() {
        return this.recommendationS2Form.controls;
    }
    ngOnInit() {
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
            initComplete: () => {
            }
        };
        this.loadRegistrationDocumentData();
        this.loadSemesterDataFilter();
        this.loadRangeScoreDataFilter();
        this.loadCertificateLevelDataFilter();
        this.loadCertificateTypeDataFilter();
    }
    changeSemesters(event) {
        if (event.value) {
            this.showMapel = true;
        }
        else {
            this.showMapel = false;
        }
    }
    loadSemesterChecked() {
        this.userService.getRaportSemesters(`?registration_number=${this.registration_number}&is_checked=1`).subscribe(res => {
            if (res.length !== 0) {
                for (let i = 0; i < res.length; i++) {
                    let x = res[i].key_name;
                    if (x == 'math') {
                        this.isMathStudy = true;
                        this.reportCardDataForm.get('math').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('math').updateValueAndValidity();
                    }
                    else if (x == 'bahasa') {
                        this.isBahasaStudy = true;
                        this.reportCardDataForm.get('bahasa').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('bahasa').updateValueAndValidity();
                    }
                    else if (x == 'english') {
                        this.isEnglishStudy = true;
                        this.reportCardDataForm.get('english').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('english').updateValueAndValidity();
                    }
                    else if (x == 'chemical') {
                        this.chemicalStudy = true;
                        this.reportCardDataForm.get('chemical').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('chemical').updateValueAndValidity();
                    }
                    else if (x == 'biology') {
                        this.biologyStudy = true;
                        this.reportCardDataForm.get('biology').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('biology').updateValueAndValidity();
                    }
                    else if (x == 'physics') {
                        this.physicsStudy = true;
                        this.reportCardDataForm.get('physics').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('physics').updateValueAndValidity();
                    }
                    else if (x == 'economy') {
                        this.economyStudy = true;
                        this.reportCardDataForm.get('economy').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('economy').updateValueAndValidity();
                    }
                    else if (x == 'sociological') {
                        this.sociologicalStudy = true;
                        this.reportCardDataForm.get('sociological').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('sociological').updateValueAndValidity();
                    }
                    else if (x == 'geography') {
                        this.geographyStudy = true;
                        this.reportCardDataForm.get('geography').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('geography').updateValueAndValidity();
                    }
                }
                this.keyName = res;
            }
        });
    }
    changeCategoryUtbk(event) {
        if (event.value === '1') {
            this.isSaintek = true;
            this.utbkForm.get('math').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^.[0-9.]*$')]);
            this.utbkForm.get('math').updateValueAndValidity();
            this.utbkForm.get('physics').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);
            this.utbkForm.get('physics').updateValueAndValidity();
            this.utbkForm.get('biological').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);
            this.utbkForm.get('biological').updateValueAndValidity();
            this.utbkForm.get('chemical').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);
            this.utbkForm.get('chemical').updateValueAndValidity();
            this.utbkForm.get('sociological').clearValidators();
            this.utbkForm.get('sociological').updateValueAndValidity();
            this.utbkForm.get('economy').clearValidators();
            this.utbkForm.get('economy').updateValueAndValidity();
            this.utbkForm.get('historical').clearValidators();
            this.utbkForm.get('historical').updateValueAndValidity();
            this.utbkForm.get('geography').clearValidators();
            this.utbkForm.get('geography').updateValueAndValidity();
            this.utbkForm.controls.historical.reset();
            this.utbkForm.controls.geography.reset();
            this.utbkForm.controls.economy.reset();
            this.utbkForm.controls.sociological.reset();
        }
        else {
            this.isSaintek = false;
            this.utbkForm.get('sociological').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);
            this.utbkForm.get('sociological').updateValueAndValidity();
            this.utbkForm.get('historical').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);
            this.utbkForm.get('historical').updateValueAndValidity();
            this.utbkForm.get('geography').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);
            this.utbkForm.get('geography').updateValueAndValidity();
            this.utbkForm.get('economy').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);
            this.utbkForm.get('geography').updateValueAndValidity();
            this.utbkForm.get('biological').clearValidators();
            this.utbkForm.get('biological').updateValueAndValidity();
            this.utbkForm.get('physics').clearValidators();
            this.utbkForm.get('physics').updateValueAndValidity();
            this.utbkForm.get('chemical').clearValidators();
            this.utbkForm.get('chemical').updateValueAndValidity();
            this.utbkForm.get('math').clearValidators();
            this.utbkForm.get('math').updateValueAndValidity();
            this.utbkForm.controls.chemical.reset();
            this.utbkForm.controls.biological.reset();
            this.utbkForm.controls.physics.reset();
            this.utbkForm.controls.math.reset();
        }
    }
    getPublicationTypeLists() {
        this.userService.getPublicationTypeList().subscribe(response => {
            this.listPublicationType = response && response.map((value) => {
                return { value: value.id.toString(), label: value.type };
            });
        }, err => {
            this.loadError();
        });
    }
    getPublicationPositionLists() {
        this.userService.getPublicationPositionList().subscribe(response => {
            this.listWriterPosition = response && response.map((value) => {
                return { value: value.id.toString(), label: value.type };
            });
        }, err => {
            this.loadError();
        });
    }
    loadCertificateLevelDataFilter() {
        this.loadFilter = true;
        this.userService.getCertificateLevelData().subscribe((filterArray) => {
            const dataCertificateLevel = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].type
                };
                dataCertificateLevel.push(x);
                this.listCertificateLevel = dataCertificateLevel;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
        this.loading = false;
    }
    loadCertificateTypeDataFilter() {
        this.loadFilter = true;
        this.userService.getCertificateTypeData().subscribe((filterArray) => {
            const dataCertificateType = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].type
                };
                dataCertificateType.push(x);
                this.listCertificateType = dataCertificateType;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
        this.loading = false;
    }
    loadRegistrationDocumentData() {
        this.loadtableRegistrationDocument = true;
        this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
            this.chartService.getSelectionDocument(`selection_id=${result.data[0]['selection_path_id']}&active_status=true`).subscribe(response => {
                this.tableData1 = response.data;
                this.dtTrigger.next();
                this.loadtableRegistrationDocument = false;
            }, err => {
                this.loadtableRegistrationDocument = false;
            });
        });
    }
    loadDetailRegistrationDocumentData(data) {
        this.loading = true;
        this.documentId = data.document_id;
        if (data.document_type_id == 6) {
            this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=6`).subscribe(response2 => {
                if (response2.data.length !== 0) {
                    this.loading = false;
                    this.loadingDocumentCard = false;
                    this.documentTypePersonal = response2.data[0].document_type_id;
                    this.documentidPersonal = response2.data[0].document_id;
                    this.isUpdatedRequirement = true;
                    if (response2.data[0].url !== null) {
                        this.haveDocumentPersonal = true;
                    }
                    else {
                        this.haveDocumentPersonal = false;
                    }
                    this.participantDocumentForm.get('url').clearValidators();
                    this.participantDocumentForm.get('url').updateValueAndValidity();
                    this.dataRequirementUrl = response2.data;
                    this.documentRequirementModal.show();
                    this.participantDocumentForm.patchValue({ name: response2.data[0].document_type });
                    this.participantDocumentForm.patchValue({ url: '' });
                    this.participantDocumentForm.get('url').reset();
                    if (response2.data[0].document_url !== null) {
                        this.haveDocumentPersonal = true;
                    }
                    else {
                        this.haveDocumentPersonal = false;
                    }
                    if (response2.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 7) {
            this.loading = false;
            this.documentTypeId = data.document_type_id;
            this.loadDetailReportCardFileData(this.registration_number);
            this.loadSemesterChecked();
            this.reportCardRequirementModal.show();
        }
        else if (data.document_type_id == 8) {
            this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=8`).subscribe(res => {
                if (res.data.length !== 0) {
                    this.loading = false;
                    this.transcriptRequirementModal.show();
                    this.formType = 'edit';
                    this.loadingDocumentCard = false;
                    this.isUpdatedTranscript = true;
                    this.isTranscript = true;
                    this.documentTypeId = 8;
                    this.documentTranscriptId = res.data[0].document_id;
                    this.documentReportTranscriptId = res.data[0].document_report_card_id;
                    this.transcriptDataForm.patchValue({ name: 'Transkrip Nilai Pendidikan Terakhir' });
                    this.transcriptDataForm.get('url').clearValidators();
                    this.transcriptDataForm.get('url').updateValueAndValidity();
                    this.transcriptDataForm.get('gpa').clearValidators();
                    this.transcriptDataForm.get('gpa').updateValueAndValidity();
                    this.dataTranscriptUrlDoc = res.data;
                    if (res.data[0].url !== null) {
                        this.haveTranscriptDoc = true;
                    }
                    else {
                        this.haveTranscriptDoc = false;
                    }
                    if (res.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                }
                else {
                    this.noDataFoundAlert();
                }
            }, (reason) => {
                this.loadError();
                this.loading = false;
            });
        }
        else if (data.document_type_id == 9) {
            this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=9`).subscribe(response => {
                if (response.data.length !== 0) {
                    this.documentRecommendationId = response.data[0].document_id;
                    this.documentSupportingId = response.data[0].document_supporting_id;
                    this.supportingDataForm.patchValue({ name: 'Surat Rekomendasi' });
                    this.supportingDataForm.patchValue({ pic_email_address: response.data[0].pic_email_address });
                    this.supportingDataForm.patchValue({ pic_name: response.data[0].pic_name });
                    this.supportingDataForm.patchValue({ pic_phone_number: response.data[0].pic_phone_number });
                    this.supportingDataForm.patchValue({ pic_address: response.data[0].pic_address });
                    this.supportingDataForm.get('url').clearValidators();
                    this.supportingDataForm.get('url').updateValueAndValidity();
                    this.dataRecommendationUrl = response.data;
                    this.haveSupportingDocument = true;
                    this.recommendationLetterRequirementModal.show();
                    this.loadingDocumentCard = false;
                    this.loading = false;
                    if (response.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 10) {
            this.documentTypeId = data.document_type_id;
            this.loading = false;
            this.loadDetailCertificateFileData(this.registration_number);
            this.certificateRequirementModal.show();
        }
        else if (data.document_type_id == 11) {
            this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=${11}`).subscribe(res => {
                if (res.data.length !== 0) {
                    this.loading = false;
                    this.documentAbilitytId = res.data[0].document_id;
                    this.documentAbilitySupportingId = res.data[0].document_supporting_id;
                    this.abilityDataForm.patchValue({ name: 'Surat Kemampuan Pembayaran' });
                    this.abilityDataForm.get('url').clearValidators();
                    this.abilityDataForm.get('url').updateValueAndValidity();
                    this.dataAbilityUrl = res.data;
                    this.loadingDocumentCard = false;
                    this.haveAbilityDocument = true;
                    this.paymentAbilityModal.show();
                    if (res.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                }
                else {
                    this.noDataFoundAlert();
                }
            }, (reason) => {
                this.loadError();
                this.loading = false;
            });
        }
        else if (data.document_type_id == 12) {
            this.userService.getUtbkDocument(`?registration_number=${this.registration_number}`).subscribe(response => {
                if (response.length !== 0) {
                    this.loading = false;
                    this.documentTypeUtbk = 12;
                    this.documentId = response[0].document_id;
                    this.documentUtbkId = response[0].id;
                    this.utbkForm.patchValue({ KPUScore: response[0].general_reasoning });
                    this.utbkForm.patchValue({ PKScore: response[0].quantitative_knowledge });
                    this.utbkForm.patchValue({ PDPUScore: response[0].comprehension_general_knowledge });
                    this.utbkForm.patchValue({ KMBDMScore: response[0].comprehension_reading_knowledge });
                    this.utbkForm.patchValue({ math: response[0].math });
                    this.utbkForm.patchValue({ physics: response[0].physics });
                    this.utbkForm.patchValue({ biological: response[0].biology });
                    this.utbkForm.patchValue({ chemical: response[0].chemical });
                    this.utbkForm.patchValue({ geography: response[0].geography });
                    this.utbkForm.patchValue({ economy: response[0].economy });
                    this.utbkForm.patchValue({ historical: response[0].historical });
                    this.utbkForm.patchValue({ sociological: response[0].sociological });
                    this.utbkForm.patchValue({ url: '' });
                    this.dataUtbkUrl = response;
                    this.selectedCategoryUtbk = response[0].major_type && response[0].major_type.toString();
                    if (response[0].major_type === 1) {
                        this.isSaintek = true;
                    }
                    else {
                        this.isSaintek = false;
                    }
                    if (response[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                    this.utbkModals.show();
                }
            });
        }
        else if (data.document_type_id == 13) {
            this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=13`).subscribe(response => {
                if (response.data.length !== 0) {
                    this.documentTypeStudy = response.data[0].document_type_id;
                    this.isTPADocument = true;
                    this.isCoPromotor = false;
                    this.isIPKDocument = false;
                    this.isEPRTDocument = false;
                    this.isPromotor = false;
                    this.loadingDocumentCard = false;
                    this.loading = false;
                    this.documentStudyId = response.data[0].document_study_id;
                    this.docid = response.data[0].document_id;
                    this.eprtAndTpaForm.patchValue({ name: 'TPA' });
                    this.eprtAndTpaForm.patchValue({ eprt_tpa_score: response.data[0].score });
                    this.eprtAndTpaForm.patchValue({ publication_year: response.data[0].year });
                    this.eprtAndTpaForm.get('url').clearValidators();
                    this.eprtAndTpaForm.get('url').updateValueAndValidity();
                    this.eprtAndTpaForm.get('gpa').clearValidators();
                    this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                    this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                    this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                    this.dataStudyUrl = response.data;
                    if (response.data[0].document_url !== null) {
                        this.haveDocumentStudy = true;
                    }
                    else {
                        this.haveDocumentStudy = false;
                    }
                    if (response.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                    this.eprtAndTpaModal.show();
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 14) {
            this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=14`).subscribe(response => {
                if (response.data.length !== 0) {
                    this.documentTypeStudy = response.data[0].document_type_id;
                    this.isIPKDocument = true;
                    this.isTPADocument = false;
                    this.isEPRTDocument = false;
                    this.isCoPromotor = false;
                    this.isPromotor = false;
                    this.loadingDocumentCard = false;
                    this.loading = false;
                    this.documentStudyId = response.data[0].document_study_id;
                    this.docid = response.data[0].document_id;
                    this.eprtAndTpaForm.patchValue({ name: 'IPK' });
                    this.eprtAndTpaForm.patchValue({ eprt_tpa_score: '' });
                    this.eprtAndTpaForm.patchValue({ gpa: response.data[0].score });
                    this.eprtAndTpaForm.get('url').clearValidators();
                    this.eprtAndTpaForm.get('url').updateValueAndValidity();
                    this.eprtAndTpaForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);
                    this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                    this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                    this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                    this.eprtAndTpaForm.get('publication_year').clearValidators();
                    this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                    this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                    this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                    this.dataStudyUrl = response.data;
                    if (response.data[0].document_url !== null) {
                        this.haveDocumentStudy = true;
                    }
                    else {
                        this.haveDocumentStudy = false;
                    }
                    if (response.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                    this.eprtAndTpaModal.show();
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 15) {
            this.userService.getDocumentRecommendation(`?registration_number=${this.registration_number}`).subscribe(response => {
                if (response.length !== 0) {
                    this.loading = false;
                    this.loadingRecommendation = false;
                    this.formTypeRecommendationS2 = 'view';
                    this.viewRecommendationS2 = true;
                    this.loadingDocumentCard = false;
                    this.idRecommendation1 = response[0].id;
                    this.idRecommendation2 = response[1].id;
                    this.recommendationS2Form.patchValue({ name_rec1: response[0].name });
                    this.recommendationS2Form.patchValue({ handphone_rec1: response[0].handphone });
                    this.recommendationS2Form.patchValue({ email_rec1: response[0].email });
                    this.recommendationS2Form.patchValue({ name_rec2: response[1].name });
                    this.recommendationS2Form.patchValue({ handphone_rec2: response[1].handphone });
                    this.recommendationS2Form.patchValue({ email_rec2: response[1].email });
                    this.recommendationS2Modal.show();
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 16) {
            this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=16`).subscribe(response => {
                if (response.data.length !== 0) {
                    this.documentTypeStudy = response.data[0].document_type_id;
                    this.isCoPromotor = false;
                    this.isPromotor = true;
                    this.isIPKDocument = false;
                    this.isTPADocument = false;
                    this.isEPRTDocument = false;
                    this.loading = false;
                    this.loadingDocumentCard = false;
                    this.documentStudyId = response.data[0].document_study_id;
                    this.docid = response.data[0].document_id;
                    this.eprtAndTpaForm.patchValue({ name: 'Kesediaan Promotor' });
                    this.eprtAndTpaForm.get('url').clearValidators();
                    this.eprtAndTpaForm.get('url').updateValueAndValidity();
                    this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                    this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                    this.eprtAndTpaForm.get('gpa').clearValidators();
                    this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                    this.eprtAndTpaForm.get('publication_year').clearValidators();
                    this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                    this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                    this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                    this.dataStudyUrl = response.data;
                    if (response.data[0].document_url !== null) {
                        this.haveDocumentStudy = true;
                    }
                    else {
                        this.haveDocumentStudy = false;
                    }
                    if (response.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                    this.eprtAndTpaModal.show();
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 17) {
            this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=17`).subscribe(response => {
                if (response.data.length !== 0) {
                    this.haveDocumentData = true;
                    this.documentTypeStudy = response.data[0].document_type_id;
                    this.isEprtUpdated = true;
                    this.isProposal = true;
                    this.loadingDocumentCard = false;
                    this.loading = false;
                    this.documentStudyId = response.data[0].document_study_id;
                    this.docid = response.data[0].document_id;
                    this.proposalForm.patchValue({ title: response.data[0].title });
                    this.proposalForm.get('url').clearValidators();
                    this.proposalForm.get('url').updateValueAndValidity();
                    this.proposalForm.get('title').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(1000)]));
                    this.proposalForm.get('title').updateValueAndValidity();
                    this.dataProposal = response.data;
                    if (response.data[0].document_url !== null) {
                        this.haveProposalDocument = true;
                    }
                    else {
                        this.haveProposalDocument = true;
                    }
                    if (response.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                    this.proposalModal.show();
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 18) {
            this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=18`).subscribe(response2 => {
                if (response2.data.length !== 0) {
                    this.isIjazahS1 = true;
                    this.isIjazahS2 = false;
                    this.isPortofolio = false;
                    this.loadingDocumentCard = false;
                    this.loading = false;
                    this.documentTypeIjazah = response2.data[0].document_type_id;
                    this.docid = response2.data[0].document_id;
                    this.ijazahForm.patchValue({ name: response2.data[0].document_type });
                    this.ijazahForm.get('url').clearValidators();
                    this.ijazahForm.get('url').updateValueAndValidity();
                    this.dataIjazah = response2.data;
                    if (response2.data[0].document_url !== null) {
                        this.haveDocumentIjazah = true;
                    }
                    else {
                        this.haveDocumentIjazah = false;
                    }
                    if (response2.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                    this.ijazahModals.show();
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 19) {
            this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=19`).subscribe(response2 => {
                if (response2.data.length !== 0) {
                    this.isIjazahS1 = false;
                    this.isIjazahS2 = true;
                    this.isPortofolio = false;
                    this.loadingDocumentCard = false;
                    this.loading = false;
                    this.documentTypeIjazah = response2.data[0].document_type_id;
                    this.docid = response2.data[0].document_id;
                    this.ijazahForm.patchValue({ name: response2.data[0].document_type });
                    this.ijazahForm.get('url').clearValidators();
                    this.ijazahForm.get('url').updateValueAndValidity();
                    this.dataIjazah = response2.data;
                    if (response2.data[0].document_url !== null) {
                        this.haveDocumentIjazah = true;
                    }
                    else {
                        this.haveDocumentIjazah = false;
                    }
                    if (response2.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                    this.ijazahModals.show();
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 20) {
            this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=20`).subscribe(response => {
                if (response.data.length !== 0) {
                    this.loading = false;
                    this.formTypeStudy = 'edit';
                    if (response.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                    this.haveDocumentData = true;
                    this.documentTypeStudy = response.data[0].document_type_id;
                    this.isEprtUpdated = true;
                    this.isPromotor = false;
                    this.isResidensi = true;
                    this.isSuratIjinAtasan = false;
                    this.isCoPromotor = false;
                    this.isIPKDocument = false;
                    this.isTPADocument = false;
                    this.loadingDocumentCard = false;
                    this.isEPRTDocument = false;
                    this.documentStudyId = response.data[0].document_study_id;
                    this.docid = response.data[0].document_id;
                    this.eprtAndTpaForm.patchValue({ name: response.data[0].document_name });
                    this.eprtAndTpaForm.get('url').clearValidators();
                    this.eprtAndTpaForm.get('url').updateValueAndValidity();
                    this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                    this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                    this.eprtAndTpaForm.get('gpa').clearValidators();
                    this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                    this.eprtAndTpaForm.get('publication_year').clearValidators();
                    this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                    this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                    this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                    this.dataStudyUrl = response.data;
                    if (response.data[0].document_url !== null) {
                        this.haveDocumentStudy = true;
                    }
                    else {
                        this.haveDocumentStudy = false;
                    }
                    this.eprtAndTpaModal.show();
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 21) {
            this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=21`).subscribe(response => {
                if (response.data.length !== 0) {
                    this.loading = false;
                    this.formTypeStudy = 'edit';
                    if (response.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                    this.haveDocumentData = true;
                    this.documentTypeStudy = response.data[0].document_type_id;
                    this.isEprtUpdated = true;
                    this.isPromotor = false;
                    this.isResidensi = false;
                    this.isSuratIjinAtasan = true;
                    this.isCoPromotor = false;
                    this.isIPKDocument = false;
                    this.isTPADocument = false;
                    this.loadingDocumentCard = false;
                    this.isEPRTDocument = false;
                    this.documentStudyId = response.data[0].document_study_id;
                    this.docid = response.data[0].document_id;
                    this.eprtAndTpaForm.patchValue({ name: response.data[0].document_name });
                    this.eprtAndTpaForm.get('url').clearValidators();
                    this.eprtAndTpaForm.get('url').updateValueAndValidity();
                    this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                    this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                    this.eprtAndTpaForm.get('gpa').clearValidators();
                    this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                    this.eprtAndTpaForm.get('publication_year').clearValidators();
                    this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                    this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                    this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                    this.dataStudyUrl = response.data;
                    if (response.data[0].document_url !== null) {
                        this.haveDocumentStudy = true;
                    }
                    else {
                        this.haveDocumentStudy = false;
                    }
                    this.eprtAndTpaModal.show();
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 22) {
            this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=22`).subscribe(response2 => {
                if (response2.data.length !== 0) {
                    this.haveDocumentIjazah = true;
                    this.loading = false;
                    this.isIjazahS1 = false;
                    this.isIjazahS2 = false;
                    this.isPortofolio = true;
                    this.loadingDocumentCard = false;
                    if (response2.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                    this.documentTypeIjazah = response2.data[0].document_type_id;
                    this.docid = response2.data[0].document_id;
                    this.ijazahForm.patchValue({ link_document: response2.data[0].document_url });
                    this.ijazahForm.patchValue({ name: response2.data[0].document_type });
                    this.ijazahForm.get('url').clearValidators();
                    this.ijazahForm.get('url').updateValueAndValidity();
                    this.ijazahForm.get('name').clearValidators();
                    this.ijazahForm.get('name').updateValueAndValidity();
                    this.dataIjazah = response2.data;
                    this.ijazahModals.show();
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 23) {
            this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=23`).subscribe(response => {
                if (response.data.length !== 0) {
                    this.transcriptRequirementModal.show();
                    this.documentTypeId = 23;
                    this.loading = false;
                    this.isTranscript = false;
                    this.loadingDocumentCard = false;
                    this.documentTranscriptId = response.data[0].document_id;
                    this.documentReportTranscriptId = response.data[0].document_report_card_id;
                    this.transcriptDataForm.patchValue({ name: 'Transkrip Ijazah S1' });
                    this.transcriptDataForm.patchValue({ gpa: response.data[0].gpa });
                    this.transcriptDataForm.get('url').clearValidators();
                    this.transcriptDataForm.get('url').updateValueAndValidity();
                    this.transcriptDataForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);
                    this.transcriptDataForm.get('gpa').updateValueAndValidity();
                    this.dataTranscriptUrlDoc = response.data;
                    if (response.data[0].url !== null) {
                        this.haveTranscriptDoc = true;
                    }
                    else {
                        this.haveTranscriptDoc = false;
                    }
                    if (response.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 24) {
            this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=24`).subscribe(response => {
                if (response.data.length !== 0) {
                    this.transcriptRequirementModal.show();
                    this.documentTypeId = 24;
                    this.loading = false;
                    this.isTranscript = false;
                    this.loadingDocumentCard = false;
                    this.documentTranscriptId = response.data[0].document_id;
                    this.documentReportTranscriptId = response.data[0].document_report_card_id;
                    this.transcriptDataForm.patchValue({ name: 'Transkrip Ijazah S2' });
                    this.transcriptDataForm.patchValue({ gpa: response.data[0].gpa });
                    this.transcriptDataForm.get('url').clearValidators();
                    this.transcriptDataForm.get('url').updateValueAndValidity();
                    this.transcriptDataForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);
                    this.transcriptDataForm.get('gpa').updateValueAndValidity();
                    this.dataTranscriptUrlDoc = response.data;
                    if (response.data[0].url !== null) {
                        this.haveTranscriptDoc = true;
                    }
                    else {
                        this.haveTranscriptDoc = false;
                    }
                    if (response.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 25) {
            this.userService.getTranscriptDocument(`?registration_number=${this.registration_number}`).subscribe(response => {
                if (response.length !== 0) {
                    const x = response[0].id;
                    this.userService.getTranscriptDocumentDetails(`?document_transcript_id=${x}`).subscribe(response => {
                        if (response.length !== 0) {
                            this.formType = 'view';
                            this.tableTranscript = response.courses;
                            this.isUpdatedTranscript = true;
                            this.documentTranscriptId = response.id;
                            this.transcriptFormlView.patchValue({ name: 'Transkrip Nilai Kredit Transfer ' });
                            this.transcriptFormlView.patchValue({ totalCredit: response.total_credit });
                            this.transcriptFormlView.patchValue({ totalCourse: response.total_course });
                            this.dataTranscriptUrl = response.url;
                            this.loadingDocumentCard = false;
                            this.transcriptRequirementModalView.show();
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 26) {
            this.getTablePublication();
            this.publicationDataModals.show();
            this.documentPublicationTypeId = 26;
            this.loadingDocumentCard = false;
            this.loading = false;
        }
        else if (data.document_type_id == 27) {
            this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=27`).subscribe(response => {
                if (response.data.length !== 0) {
                    this.haveDocumentData = true;
                    this.documentTypeStudy = response.data[0].document_type_id;
                    this.isCoPromotor = true;
                    this.isPromotor = false;
                    this.isIPKDocument = false;
                    this.isTPADocument = false;
                    this.loadingDocumentCard = false;
                    this.isEPRTDocument = false;
                    this.isResidensi = false;
                    this.isSuratIjinAtasan = false;
                    this.loading = false;
                    this.documentStudyId = response.data[0].document_study_id;
                    this.docid = response.data[0].document_id;
                    this.eprtAndTpaForm.patchValue({ nameCoPromotor: response.data[0].document_name });
                    this.eprtAndTpaForm.patchValue({ name: response.data[0].document_description });
                    this.eprtAndTpaForm.get('url').clearValidators();
                    this.eprtAndTpaForm.get('url').updateValueAndValidity();
                    this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                    this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                    this.eprtAndTpaForm.get('gpa').clearValidators();
                    this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                    this.eprtAndTpaForm.get('publication_year').clearValidators();
                    this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                    this.dataStudyUrl = response.data;
                    if (response.data[0].document_url !== null) {
                        this.haveDocumentStudy = true;
                    }
                    else {
                        this.haveDocumentStudy = false;
                    }
                    if (response.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                    this.eprtAndTpaModal.show();
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 28) {
            this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=28`).subscribe(response => {
                if (response.data.length !== 0) {
                    this.haveDocumentData = true;
                    this.documentTypeStudy = response.data[0].document_type_id;
                    this.isCoPromotor = false;
                    this.isPromotor = false;
                    this.isIPKDocument = false;
                    this.isTPADocument = false;
                    this.loadingDocumentCard = false;
                    this.isEPRTDocument = true;
                    this.isResidensi = false;
                    this.isSuratIjinAtasan = false;
                    this.loading = false;
                    this.documentStudyId = response.data[0].document_study_id;
                    this.docid = response.data[0].document_id;
                    this.eprtAndTpaForm.patchValue({ name: response.data[0].document_name });
                    this.eprtAndTpaForm.patchValue({ eprt_tpa_score: response.data[0].score });
                    this.eprtAndTpaForm.patchValue({ publication_year: response.data[0].year });
                    this.eprtAndTpaForm.get('url').clearValidators();
                    this.eprtAndTpaForm.get('url').updateValueAndValidity();
                    this.eprtAndTpaForm.get('gpa').clearValidators();
                    this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                    this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                    this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                    this.dataStudyUrl = response.data;
                    if (response.data[0].document_url !== null) {
                        this.haveDocumentStudy = true;
                    }
                    else {
                        this.haveDocumentStudy = false;
                    }
                    if (response.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                    this.eprtAndTpaModal.show();
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
        else if (data.document_type_id == 1 || data.document_type_id == 2 || data.document_type_id == 3 || data.document_type_id == 4 || data.document_type_id == 5) {
            this.userService.getPersonalDocumentData(`${this.participantId}&document_type_id=${data.document_type_id}`).subscribe(res => {
                if (res.data.length !== 0) {
                    this.loading = false;
                    this.loadingDocumentCard = false;
                    this.documentTypePersonal = res.data[0].document_type_id;
                    this.documentidPersonal = res.data[0].document_id;
                    this.isUpdatedRequirement = true;
                    this.participantDocumentForm.get('url').clearValidators();
                    this.participantDocumentForm.get('url').updateValueAndValidity();
                    this.dataRequirementUrl = res.data;
                    this.documentRequirementModal.show();
                    this.participantDocumentForm.patchValue({ name: res.data[0].document_name });
                    this.participantDocumentForm.patchValue({ url: '' });
                    if (this.documentTypePersonal == 1) {
                        this.participantDocumentForm.patchValue({ number: res.data[0].number });
                        this.participantDocumentForm.get('number').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(16)]));
                        this.participantDocumentForm.get('number').updateValueAndValidity();
                        this.isShowIdentityNumber = true;
                    }
                    else {
                        this.isShowIdentityNumber = false;
                        this.participantDocumentForm.patchValue({ number: '' });
                        this.participantDocumentForm.get('number').clearValidators();
                        this.participantDocumentForm.get('number').updateValueAndValidity();
                    }
                    if (res.data[0].document_url !== null) {
                        this.haveDocumentPersonal = true;
                    }
                    else {
                        this.haveDocumentPersonal = false;
                    }
                    if (res.data[0].document_status == 'approved') {
                        this.approvedStatus = true;
                    }
                    else {
                        this.approvedStatus = false;
                    }
                }
                else {
                    this.noDataFoundAlert();
                }
            });
        }
    }
    getTablePublication() {
        this.loadTablePublication = true;
        this.userService.getDocumentPublication(`?participant_id=${this.participantId}`).subscribe(response => {
            this.tableDataPublication = response;
            this.totalRecord = response.length;
            this.loadTablePublication = false;
        }, err => {
            this.loadError();
            this.loadTablePublication = false;
        });
    }
    loadPublicationDataDetails(data) {
        this.loading = false;
        this.docid = data.id;
        this.documentPublicationTypeId = data.document_type_id;
        this.getPublicationPositionLists();
        this.getPublicationTypeLists();
        this.publicationID = data.document_id;
        this.selectedWriterPosition = data.publication_writer_position_id && data.publication_writer_position_id.toString();
        this.selectedPublicationType = data.publication_type_id && data.publication_type_id.toString();
        this.publikasiForm.patchValue({ name: data.writer_name });
        this.publikasiForm.patchValue({ title: data.title });
        this.publikasiForm.patchValue({ publication_date: data.publish_date });
        this.publikasiForm.patchValue({ link: data.publication_link });
        this.haveLinkPublication = true;
        this.publikasiModals.show();
    }
    loadDetailReportCardFileData(registration_number) {
        this.loadtableReportCardData = true;
        this.userService.getReportCardData(`registration_number=${registration_number}&document_type_id=7`).subscribe(response => {
            this.tableData2 = response.data;
            this.loadtableReportCardData = false;
            if (response.data.length !== 0) {
                this.noDataDocument = false;
            }
            else {
                this.noDataDocument = true;
            }
        }, err => {
            this.loadError();
            this.loadtableReportCardData = false;
        });
    }
    loadDetailCertificateFileData(registration_number) {
        this.loadtableCertificateData = true;
        this.userService.getDocumentCertificateData(`registration_number=${registration_number}`).subscribe(response => {
            this.tableData3 = response.data;
            this.loadtableCertificateData = false;
            if (response.data.length !== 0) {
                this.noDataDocument = false;
            }
            else {
                this.noDataDocument = true;
            }
        }, err => {
            this.loadError();
            this.loadtableCertificateData = false;
        });
    }
    submitReportApprovedDocument(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.approve,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: data.document_id,
                    approval_final_status: 1
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.loadDetailReportCardFileData(this.registration_number);
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitRejectReportApprovedDocument(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.rejected,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: data.document_id,
                    approval_final_status: 'false'
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.loadDetailReportCardFileData(this.registration_number);
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitCertificateApprovedDocument(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.approve,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: data.document_id,
                    approval_final_status: 1
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.loadDetailCertificateFileDataTable(this.registration_number);
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitRejectCertificateApprovedDocument(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.rejected,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: data.document_id,
                    approval_final_status: 'false'
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.loadDetailCertificateFileDataTable(this.registration_number);
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitStudyDocument() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.approve,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.docid,
                    approval_final_status: 1
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.closeEprtTpaModals();
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitRejectStudyDocument() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.rejected,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.docid,
                    approval_final_status: 'false'
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.closeEprtTpaModals();
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitIjazahDocument() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.approve,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.docid,
                    approval_final_status: 1
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.closeIjazahModals();
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitIjazahRejectedDocument() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.rejected,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.docid,
                    approval_final_status: 'false'
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.closeIjazahModals();
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitApprovalTranscriptDocument() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.approve,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.documentTranscriptId,
                    approval_final_status: 1
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.closeTranscriptModals();
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitRejectTranscriptDocument() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.rejected,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.documentTranscriptId,
                    approval_final_status: 'false'
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.closeTranscriptModals();
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitApprovalParticipantDocument() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.approve,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.documentidPersonal,
                    approval_final_status: 1
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.documentRequirementModalClose();
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitRejectParticipantDocument() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.rejected,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.documentidPersonal,
                    approval_final_status: 'false'
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.documentRequirementModalClose();
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitApprovalAbilityDocument() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.approve,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.documentAbilitytId,
                    approval_final_status: 1
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.paymentAbilityModal.hide();
                        this.abilityDataForm.reset();
                        this.approvedStatus = false;
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitRejectAbilityDocument() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.rejected,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.documentAbilitytId,
                    approval_final_status: 'false'
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.paymentAbilityModal.hide();
                        this.abilityDataForm.reset();
                        this.approvedStatus = false;
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitSupportingApproved() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.approve,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.documentRecommendationId,
                    approval_final_status: 1
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.recommendationLetterRequirementModal.hide();
                        this.supportingDataForm.reset();
                        this.approvedStatus = false;
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitSupportingRejected() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.rejected,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.documentRecommendationId,
                    approval_final_status: 'false'
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.recommendationLetterRequirementModal.hide();
                        this.supportingDataForm.reset();
                        this.approvedStatus = false;
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitApprovalProposalDocument() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.approve,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.docid,
                    approval_final_status: 1
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.proposalModal.hide();
                        this.proposalForm.reset();
                        this.approvedStatus = false;
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    submitRejectProposalDocument() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.confirmation,
            text: this.rejected,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                const payload = {
                    document_id: this.docid,
                    approval_final_status: 'false'
                };
                this.userService.updPersonalDocumentData(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.proposalModal.hide();
                        this.proposalForm.reset();
                        this.approvedStatus = false;
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        });
    }
    createCertificateDocument() {
        if (this.certificateDataForm.valid) {
            this.loading = true;
            this.formDataCertificateUpdated.append('registration_number', this.registration_number);
            this.formDataCertificateUpdated.append('document_type_id', this.documentTypeId);
            this.formDataCertificateUpdated.append('certificate_id', this.documentCertificateId);
            this.formDataCertificateUpdated.append('document_id', this.documentIdCheck);
            this.formDataCertificateUpdated.append('name', this.certificateDataForm.controls['name'].value);
            this.formDataCertificateUpdated.append('description', this.certificateDataForm.controls['description'].value);
            this.formDataCertificateUpdated.append('certificate_type_id', this.certificateDataForm.controls['certificate_type_id'].value);
            this.formDataCertificateUpdated.append('certificate_level_id', this.certificateDataForm.controls['certificate_level_id'].value);
            this.formDataCertificateUpdated.append('publication_year', this.certificateDataForm.controls['publication_year'].value);
            this.formDataCertificateUpdated.append('certificate_score', this.certificateDataForm.controls['certificate_score'].value);
            this.userService.updDocumentCertificateData(this.formDataCertificateUpdated).subscribe(res => {
                if (res != null) {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.formDataCertificateUpdated.delete('registration_number');
                        this.formDataCertificateUpdated.delete('document_type_id');
                        this.formDataCertificateUpdated.delete('certificate_id');
                        this.formDataCertificateUpdated.delete('document_id');
                        this.formDataCertificateUpdated.delete('name');
                        this.formDataCertificateUpdated.delete('description');
                        this.formDataCertificateUpdated.delete('certificate_type_id');
                        this.formDataCertificateUpdated.delete('certificate_level_id');
                        this.formDataCertificateUpdated.delete('publication_year');
                        this.formDataCertificateUpdated.delete('certificate_score');
                        this.formDataCertificateUpdated.delete('url');
                        this.loading = false;
                        this.closeCertificateModalDetail();
                        this.loadDetailCertificateFileDataTable(this.registration_number);
                    }
                    else {
                        this.loadError();
                    }
                }
                else {
                    this.loadError();
                }
            }, (reason) => {
                this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
                this.loading = false;
            });
        }
    }
    createEprtTpaDocument() {
        if (this.eprtAndTpaForm.valid) {
            this.loading = true;
            if (this.documentTypeId == 28) {
                this.formDataStudyUpd.append('document_type_id', '28');
                this.formDataStudyUpd.append('name', 'Document TOEFL');
                this.formDataStudyUpd.append('description', 'Dokumen TOEFL');
                this.formDataStudyUpd.append('year', this.eprtAndTpaForm.controls['publication_year'].value);
                this.formDataStudyUpd.append('score', this.eprtAndTpaForm.controls['eprt_tpa_score'].value);
            }
            else if (this.documentTypeId == 13) {
                this.formDataStudyUpd.append('document_type_id', '13');
                this.formDataStudyUpd.append('name', 'Dokumen TPA');
                this.formDataStudyUpd.append('description', 'Dokumen TPA');
                this.formDataStudyUpd.append('year', this.eprtAndTpaForm.controls['publication_year'].value);
                this.formDataStudyUpd.append('score', this.eprtAndTpaForm.controls['gpa'].value);
            }
            else if (this.documentTypeId == 14) {
                this.formDataStudyUpd.append('document_type_id', '14');
                this.formDataStudyUpd.append('name', 'Dokumen IPK');
                this.formDataStudyUpd.append('description', 'Dokumen IPK');
                this.formDataStudyUpd.append('year', '');
                this.formDataStudyUpd.append('score', this.eprtAndTpaForm.controls['eprt_tpa_score'].value);
            }
            else if (this.documentTypeId == 16) {
                this.formDataStudyUpd.append('document_type_id', '16');
                this.formDataStudyUpd.append('name', 'Kesediaan Promotor');
                this.formDataStudyUpd.append('description', 'Kesediaan Promotor');
                this.formDataStudyUpd.append('year', '');
                this.formDataStudyUpd.append('score', '');
            }
            else if (this.documentTypeId == 20) {
                this.formDataStudyUpd.append('document_type_id', '20');
                this.formDataStudyUpd.append('name', 'Surat Kesediaan Residensi');
                this.formDataStudyUpd.append('description', 'Surat Kesediaan Residensi');
                this.formDataStudyUpd.append('year', '');
                this.formDataStudyUpd.append('score', '');
            }
            else if (this.documentTypeId == 21) {
                this.formDataStudyUpd.append('document_type_id', '21');
                this.formDataStudyUpd.append('name', 'Surat Ijin Atasan Langsung');
                this.formDataStudyUpd.append('description', 'Surat Ijin Atasan Langsung');
                this.formDataStudyUpd.append('year', '');
                this.formDataStudyUpd.append('score', '');
            }
            else if (this.documentTypeId == 27) {
                this.formDataStudyUpd.append('name', this.eprtAndTpaForm.controls['nameCoPromotor'].value);
                this.formDataStudyUpd.append('description', 'Kesediaan Co-Promotor');
                this.formDataStudyUpd.append('year', '');
                this.formDataStudyUpd.append('score', '');
            }
            this.formDataStudyUpd.append('document_id', this.docid);
            this.formDataStudyUpd.append('document_study_id', this.documentStudyId);
            this.formDataStudyUpd.append('number', '');
            // this.formDataStudy.append('url', this.documentTypeStudy);
            this.formDataStudyUpd.append('registration_number', this.registration_number);
            this.userService.updDocumentStudy(this.formDataStudyUpd).subscribe(res => {
                if (res != null) {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.formDataStudyUpd.delete('registration_number');
                        this.formDataStudyUpd.delete('name');
                        this.formDataStudyUpd.delete('document_type_id');
                        this.formDataStudyUpd.delete('document_id');
                        this.formDataStudyUpd.delete('number');
                        this.formDataStudyUpd.delete('description');
                        this.formDataStudyUpd.delete('score');
                        this.formDataStudyUpd.delete('year');
                        this.formDataStudyUpd.delete('url');
                        this.loading = false;
                        this.closeEprtTpaModals();
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                        this.loading = false;
                    }
                }
                else {
                    this.loadError();
                    this.loading = false;
                }
            }, (reason) => {
                this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
                this.loading = false;
            });
        }
    }
    createIjazahDocument() {
        if (this.ijazahForm.valid) {
            this.loading = true;
            this.formDataIjazahUpd.append('document_type_id', this.documentTypeIjazah);
            this.formDataIjazahUpd.append('document_id', this.docid);
            if (this.documentTypeId == 18) {
                this.formDataIjazahUpd.append('name', 'Ijazah S1');
                this.formDataIjazahUpd.append('participant_id', this.participantId);
            }
            else if (this.documentTypeId == 19) {
                this.formDataIjazahUpd.append('name', 'Ijazah S2');
                this.formDataIjazahUpd.append('participant_id', this.participantId);
            }
            else if (this.documentTypeId == 22) {
                this.formDataIjazahUpd.append('name', 'Portofolio');
                this.formDataIjazahUpd.append('participant_id', this.participantId);
            }
            this.userService.updPersonalDocumentData(this.formDataIjazahUpd).subscribe(res => {
                if (res.status == 'Success') {
                    this.formDataIjazahUpd.delete('document_id');
                    this.formDataIjazahUpd.delete('document_type_id');
                    this.formDataIjazahUpd.delete('name');
                    this.formDataIjazahUpd.delete('url');
                    this.formDataIjazahUpd.delete('url_portofolio');
                    this.formDataIjazahUpd.delete('participant_id');
                    this.loadSuccess();
                    this.loading = false;
                    this.closeIjazahModals();
                    this.renderTable1();
                    this.loadRegistrationDocumentData();
                }
                else {
                    this.broadcasterService.notifBroadcast(true, {
                        title: res.status,
                        msg: res.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                    this.loading = false;
                }
            }, (reason) => {
                this.loading = false;
                this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
            });
        }
    }
    createUtbkDocument() {
        this.loading = true;
        this.formDataUtbkUpd.append('utbk_id', this.documentUtbkId);
        this.formDataUtbkUpd.append('document_id', this.documentId);
        this.formDataUtbkUpd.append('name', 'Nilai UTBK');
        this.formDataUtbkUpd.append('general_reasoning', this.utbkForm.controls['KPUScore'].value);
        this.formDataUtbkUpd.append('quantitative_knowledge', this.utbkForm.controls['PKScore'].value);
        this.formDataUtbkUpd.append('comprehension_general_knowledge', this.utbkForm.controls['PDPUScore'].value);
        this.formDataUtbkUpd.append('comprehension_reading_knowledge', this.utbkForm.controls['KMBDMScore'].value);
        this.formDataUtbkUpd.append('math', this.utbkForm.controls['math'].value ? this.utbkForm.controls['math'].value : '0');
        this.formDataUtbkUpd.append('registration_number', this.registration_number);
        this.formDataUtbkUpd.append('major_type', this.selectedCategoryUtbk);
        this.formDataUtbkUpd.append('physics', this.utbkForm.controls['physics'].value ? this.utbkForm.controls['physics'].value : '0');
        this.formDataUtbkUpd.append('chemical', this.utbkForm.controls['chemical'].value ? this.utbkForm.controls['chemical'].value : '0');
        this.formDataUtbkUpd.append('biology', this.utbkForm.controls['biological'].value ? this.utbkForm.controls['biological'].value : '0');
        this.formDataUtbkUpd.append('geography', this.utbkForm.controls['geography'].value ? this.utbkForm.controls['geography'].value : '0');
        this.formDataUtbkUpd.append('historical', this.utbkForm.controls['historical'].value ? this.utbkForm.controls['historical'].value : '0');
        this.formDataUtbkUpd.append('sociological', this.utbkForm.controls['sociological'].value ? this.utbkForm.controls['sociological'].value : '0');
        this.formDataUtbkUpd.append('economy', this.utbkForm.controls['economy'].value ? this.utbkForm.controls['economy'].value : '0');
        this.userService.updUtbkdocument(this.formDataUtbkUpd).subscribe(res => {
            if (res != null) {
                if (res.status == 'Success') {
                    this.loadSuccess();
                    this.formDataUtbkUpd.delete('registration_number');
                    this.formDataUtbkUpd.delete('name');
                    this.formDataUtbkUpd.delete('document_id');
                    this.formDataUtbkUpd.delete('utbk_id');
                    this.formDataUtbkUpd.delete('description');
                    this.formDataUtbkUpd.delete('general_reasoning');
                    this.formDataUtbkUpd.delete('quantitative_knowledge');
                    this.formDataUtbkUpd.delete('comprehension_general_knowledge');
                    this.formDataUtbkUpd.delete('comprehension_reading_knowledge');
                    this.formDataUtbkUpd.delete('math');
                    this.formDataUtbkUpd.delete('geography');
                    this.formDataUtbkUpd.delete('historical');
                    this.formDataUtbkUpd.delete('sociological');
                    this.formDataUtbkUpd.delete('economy');
                    this.formDataUtbkUpd.delete('physics');
                    this.formDataUtbkUpd.delete('chemical');
                    this.formDataUtbkUpd.delete('biology');
                    this.formDataUtbkUpd.delete('major_type');
                    this.formDataUtbkUpd.delete('url');
                    this.utbkModals.hide();
                    this.loading = false;
                    this.renderTable1();
                    this.loadRegistrationDocumentData();
                }
                else {
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: res.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                    this.loading = false;
                }
            }
            else {
                this.loadError();
                this.loading = false;
            }
        }, (reason) => {
            this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
            this.loading = false;
        });
    }
    createPublicationData() {
        this.loading = true;
        const payloadUpd = {
            document_publication_id: this.docid,
            participant_id: this.participantId,
            document_id: this.publicationID,
            document_type_id: this.documentPublicationTypeId,
            publication_type_id: this.selectedPublicationType,
            publication_writer_position_id: this.selectedWriterPosition,
            writer_name: this.publikasiForm.controls['name'].value,
            name: 'Dokumen Publikasi',
            title: this.publikasiForm.controls['title'].value,
            publish_date: this.publikasiForm.controls['publication_date'].value,
            publication_link: this.publikasiForm.controls['link'].value,
        };
        this.userService.updDocumentPublication(payloadUpd).subscribe(response => {
            if (response.status == 'Success') {
                this.loadSuccess();
                this.loading = false;
                this.getTablePublication();
                this.closePublikasiModals();
            }
            else {
                this.loading = false;
                this.broadcasterService.notifBroadcast(true, {
                    title: response.status,
                    msg: response.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
            }
        }, (reason) => {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
        });
    }
    createPersonalDocumentParticipant() {
        this.loading = true;
        if (this.participantDocumentForm.valid) {
            this.formDataPersonalUpd.append('document_id', this.documentidPersonal);
            this.formDataPersonalUpd.append('name', this.participantDocumentForm.controls['name'].value);
            this.formDataPersonalUpd.append('description', this.participantDocumentForm.controls['name'].value);
            this.formDataPersonalUpd.append('number', this.participantDocumentForm.controls['number'].value);
            this.userService.updPersonalDocumentData(this.formDataPersonalUpd).subscribe(res => {
                if (res != null) {
                    if (res.status == 'Success') {
                        this.formDataPersonalUpd.delete('document_id');
                        this.formDataPersonalUpd.delete('name');
                        this.formDataPersonalUpd.delete('description');
                        this.formDataPersonalUpd.delete('number');
                        this.formDataPersonalUpd.delete('url');
                        this.loadSuccess();
                        this.documentRequirementModalClose();
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                        this.loading = false;
                    }
                    else {
                        this.broadcasterService.notifBroadcast(true, {
                            title: res.status,
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                    }
                }
                else {
                    this.loadError();
                }
            }, (reason) => {
                this.loading = false;
                this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
            });
        }
    }
    createSupportingDocument() {
        this.loading = true;
        if (this.documentTypeId == 9) {
            this.formData2Update.append('registration_number', this.registration_number);
            this.formData2Update.append('support_id', this.documentSupportingId);
            this.formData2Update.append('document_id', this.documentRecommendationId);
            this.formData2Update.append('document_type_id', this.documentTypeId);
            this.formData2Update.append('name', 'Surat Rekomendasi');
            this.formData2Update.append('description', 'Surat Rekomendasi');
            this.formData2Update.append('pic_name', this.supportingDataForm.controls['pic_name'].value);
            this.formData2Update.append('pic_phone_number', this.supportingDataForm.controls['pic_phone_number'].value);
            this.formData2Update.append('pic_email_address', this.supportingDataForm.controls['pic_email_address'].value);
            this.formData2Update.append('pic_address', this.supportingDataForm.controls['pic_address'].value);
            this.userService.updDocumentSupportingData(this.formData2Update).subscribe(res => {
                if (res != null) {
                    if (res.status == 'Success') {
                        this.formData2Update.delete('registration_number');
                        this.formData2Update.delete('support_id');
                        this.formData2Update.delete('document_id');
                        this.formData2Update.delete('name');
                        this.formData2Update.delete('description');
                        this.formData2Update.delete('pic_name');
                        this.formData2Update.delete('pic_phone_number');
                        this.formData2Update.delete('pic_email_address');
                        this.formData2Update.delete('pic_address');
                        this.formData2Update.delete('url');
                        this.loadSuccess();
                        this.recommendationLetterRequirementModal.hide();
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                        this.loading = false;
                    }
                    else {
                        this.loadError();
                        this.loading = false;
                    }
                }
                else {
                    this.loading = false;
                    this.loadError();
                }
            }, (reason) => {
                this.loading = false;
                this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
            });
        }
        else if (this.documentTypeId == 11) {
            this.formDataAbilityUpd.append('registration_number', this.registration_number);
            this.formDataAbilityUpd.append('support_id', this.documentAbilitySupportingId);
            this.formDataAbilityUpd.append('document_id', this.documentAbilitytId);
            this.formDataAbilityUpd.append('document_type_id', this.documentTypeId);
            this.formDataAbilityUpd.append('name', this.abilityDataForm.controls['name'].value);
            this.formDataAbilityUpd.append('description', this.abilityDataForm.controls['name'].value);
            this.userService.updDocumentSupportingData(this.formDataAbilityUpd).subscribe(res => {
                if (res != null) {
                    if (res.status == 'Success') {
                        this.formDataAbilityUpd.delete('registration_number');
                        this.formDataAbilityUpd.delete('support_id');
                        this.formDataAbilityUpd.delete('document_id');
                        this.formDataAbilityUpd.delete('document_type_id');
                        this.formDataAbilityUpd.delete('description');
                        this.formDataAbilityUpd.delete('name');
                        this.formDataAbilityUpd.delete('url');
                        this.loadSuccess();
                        this.paymentAbilityModal.hide();
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                        this.loading = false;
                    }
                    else {
                        this.loadError();
                        this.loading = false;
                    }
                }
                else {
                    this.loadError();
                    this.loading = false;
                }
            }, (reason) => {
                this.loading = false;
                this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
            });
        }
    }
    createProposalDocument() {
        if (this.proposalForm.valid) {
            this.loading = true;
            this.formDataProposalUpd.append('title', this.proposalForm.controls['title'].value);
            this.formDataProposalUpd.append('document_id', this.docid);
            this.formDataProposalUpd.append('document_study_id', this.documentStudyId);
            this.userService.updDocumentProposal(this.formDataProposalUpd).subscribe(res => {
                if (res != null) {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.formDataProposalUpd.delete('title');
                        this.formDataProposalUpd.delete('document_study_id');
                        this.formDataProposalUpd.delete('document_id');
                        this.formDataProposalUpd.delete('url');
                        this.proposalModal.hide();
                        this.loading = false;
                        this.renderTable1();
                        this.loadRegistrationDocumentData();
                    }
                    else {
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                        this.loading = false;
                    }
                }
                else {
                    this.loadError();
                    this.loading = false;
                }
            }, (reason) => {
                this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
                this.loading = false;
            });
        }
    }
    downloadReportCardData(data) {
        window.open(data.url);
    }
    openformRaport(data) {
        this.reportCardDetailModal.show();
        this.documentIdCheck = data.document_id;
        this.semesterID = data.semester_id;
        this.showMapel = true;
        this.reportCardDataForm.get('url').clearValidators();
        this.reportCardDataForm.get('url').updateValueAndValidity();
        this.reportCardDataForm.patchValue({ registration_number: this.registration_number });
        this.reportCardDataForm.patchValue({ document_type_id: this.documentTypeId });
        this.reportCardDataForm.patchValue({ semester_name: data.semesters });
        this.reportCardDataForm.patchValue({ range_score: data.range_score && data.range_score.toString() });
        this.reportCardDataForm.patchValue({ math: data.math });
        this.reportCardDataForm.patchValue({ physics: data.physics });
        this.reportCardDataForm.patchValue({ bahasa: data.bahasa });
        this.reportCardDataForm.patchValue({ english: data.english });
        this.reportCardDataForm.patchValue({ biology: data.biology });
        this.reportCardDataForm.patchValue({ chemical: data.chemical });
        this.reportCardDataForm.patchValue({ geography: data.geography });
        this.reportCardDataForm.patchValue({ sociological: data.sociological });
        this.reportCardDataForm.patchValue({ economy: data.economy });
        this.reportCardDataForm.patchValue({ url: '' });
        this.documentReportCardId = data.document_report_card_id;
        this.viewDocumentReport();
    }
    changeRangeScore(dataScore) {
        if (dataScore === '1') {
            this.reportCardDataForm.get('math').reset();
            this.reportCardDataForm.get('physics').reset();
            this.reportCardDataForm.get('bahasa').reset();
            this.reportCardDataForm.get('english').reset();
            this.reportCardDataForm.get('math').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
            this.reportCardDataForm.get('math').updateValueAndValidity();
            this.reportCardDataForm.get('physics').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
            this.reportCardDataForm.get('physics').updateValueAndValidity();
            this.reportCardDataForm.get('bahasa').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
            this.reportCardDataForm.get('bahasa').updateValueAndValidity();
            this.reportCardDataForm.get('english').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
            this.reportCardDataForm.get('english').updateValueAndValidity();
        }
        else {
            this.reportCardDataForm.get('math').reset();
            this.reportCardDataForm.get('physics').reset();
            this.reportCardDataForm.get('bahasa').reset();
            this.reportCardDataForm.get('english').reset();
            this.reportCardDataForm.get('math').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
            this.reportCardDataForm.get('math').updateValueAndValidity();
            this.reportCardDataForm.get('physics').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
            this.reportCardDataForm.get('physics').updateValueAndValidity();
            this.reportCardDataForm.get('bahasa').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
            this.reportCardDataForm.get('bahasa').updateValueAndValidity();
            this.reportCardDataForm.get('english').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
            this.reportCardDataForm.get('english').updateValueAndValidity();
        }
    }
    viewDocumentReport() {
        this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=7&document_report_card_id=${this.documentReportCardId}`).subscribe(response => {
            if (response.data.length !== 0) {
                this.listDocumentReport = response.data;
            }
            else {
                this.listDocumentReport = '';
            }
        });
    }
    loadSemesterDataFilter() {
        this.loadFilter = true;
        this.userService.getSemesterData().subscribe((filterArray) => {
            const dataSemester = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].name
                };
                dataSemester.push(x);
                this.listSemester = dataSemester;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
        this.loading = false;
    }
    loadRangeScoreDataFilter() {
        this.loadFilter = true;
        this.userService.getRangeScoreData().subscribe((filterArray) => {
            const dataRangeScore = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].name
                };
                dataRangeScore.push(x);
                this.listRangeScore = dataRangeScore;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
        this.loading = false;
    }
    createReportCardDocument() {
        this.loading = true;
        if (this.documentTypeId == 7) {
            this.formDataUpdate.append('registration_number', this.registration_number);
            this.formDataUpdate.append('document_type_id', this.documentTypeId);
            this.formDataUpdate.append('report_id', this.documentReportCardId);
            this.formDataUpdate.append('document_id', this.documentIdCheck);
            this.formDataUpdate.append('semester_id', this.semesterID);
            this.formDataUpdate.append('physics', this.reportCardDataForm.controls['physics'].value ? this.reportCardDataForm.controls['physics'].value : 0);
            this.formDataUpdate.append('math', this.reportCardDataForm.controls['math'].value ? this.reportCardDataForm.controls['math'].value : 0);
            this.formDataUpdate.append('bahasa', this.reportCardDataForm.controls['bahasa'].value ? this.reportCardDataForm.controls['bahasa'].value : 0);
            this.formDataUpdate.append('english', this.reportCardDataForm.controls['english'].value ? this.reportCardDataForm.controls['english'].value : 0);
            this.formDataUpdate.append('economy', this.reportCardDataForm.controls['economy'].value ? this.reportCardDataForm.controls['economy'].value : 0);
            this.formDataUpdate.append('sociological', this.reportCardDataForm.controls['sociological'].value ? this.reportCardDataForm.controls['sociological'].value : 0);
            this.formDataUpdate.append('geography', this.reportCardDataForm.controls['geography'].value ? this.reportCardDataForm.controls['geography'].value : 0);
            this.formDataUpdate.append('chemical', this.reportCardDataForm.controls['chemical'].value ? this.reportCardDataForm.controls['chemical'].value : 0);
            this.formDataUpdate.append('biology', this.reportCardDataForm.controls['biology'].value ? this.reportCardDataForm.controls['biology'].value : 0);
            this.userService.updDocumentReportCardData(this.formDataUpdate).subscribe(res => {
                if (res != null) {
                    if (res.status == 'Success') {
                        this.formDataUpdate.delete('registration_number');
                        this.formDataUpdate.delete('document_type_id');
                        this.formDataUpdate.delete('report_id');
                        this.formDataUpdate.delete('document_id');
                        this.formDataUpdate.delete('semester_id');
                        this.formDataUpdate.delete('physics');
                        this.formDataUpdate.delete('math');
                        this.formDataUpdate.delete('bahasa');
                        this.formDataUpdate.delete('english');
                        this.formDataUpdate.delete('economy');
                        this.formDataUpdate.delete('geography');
                        this.formDataUpdate.delete('sociological');
                        this.formDataUpdate.delete('biology');
                        this.formDataUpdate.delete('chemical');
                        this.formDataUpdate.delete('url');
                        this.formDataUpdate.delete('url');
                        this.loadSuccess();
                        this.reportCardDetailModal.hide();
                        this.loadDetailReportCardFileData(this.registration_number);
                        this.loading = false;
                        this.closeRaportModalDetail();
                    }
                    else {
                        this.loadError();
                        this.loading = false;
                    }
                }
                else {
                    this.loadError();
                    this.loading = false;
                }
            }, (reason) => {
                this.loadError();
                this.loading = false;
            });
        }
        else if (this.documentTypeId == 8 || this.documentTypeId == 23 || this.documentTypeId == 24) {
            if (this.transcriptDataForm.valid) {
                this.formData3Updated.append('document_id', this.documentTranscriptId);
                this.formData3Updated.append('report_id', this.documentReportTranscriptId);
                this.formData3Updated.append('registration_number', this.registration_number);
                this.formData3Updated.append('document_type_id', this.documentTypeId);
                if (this.documentTypeId == 23) {
                    this.formData3Updated.append('gpa', this.transcriptDataForm.value.gpa);
                }
                else if (this.documentTypeId == 24) {
                    this.formData3Updated.append('gpa', this.transcriptDataForm.value.gpa);
                }
                this.userService.updDocumentReportCardData(this.formData3Updated).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.formData3Updated.delete('document_id');
                            this.formData3Updated.delete('report_id');
                            this.formData3Updated.delete('registration_number');
                            this.formData3Updated.delete('document_type_id');
                            this.formData3Updated.delete('gpa');
                            this.loadSuccess();
                            this.loading = false;
                            this.renderTable1();
                            this.loadRegistrationDocumentData();
                            this.closeTranscriptModals();
                        }
                        else {
                            this.loadError();
                            this.loading = false;
                        }
                    }
                    else {
                        this.loadError();
                        this.loading = false;
                    }
                }, (reason) => {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                });
            }
        }
    }
    closeTranscriptModals() {
        this.transcriptRequirementModal.hide();
        this.isTranscript = false;
        this.transcriptDataForm.reset();
    }
    loadDetailCertificateFileDataTable(registration_number) {
        this.loadtableCertificateData = true;
        this.userService.getDocumentCertificateData(`registration_number=${registration_number}`).subscribe(response => {
            this.tableData3 = response.data;
            this.loadtableCertificateData = false;
        }, err => {
            this.loadError();
            this.loadtableCertificateData = false;
        });
    }
    loadCertificateDetailFileData(data) {
        this.certificateDataForm.get('url').clearValidators();
        this.certificateDataForm.get('url').updateValueAndValidity();
        this.documentIdCheck = data.document_id;
        this.documentCertificateId = data.document_certificate_id;
        this.certificateDataForm.patchValue({ registration_number: this.registration_number });
        this.certificateDataForm.patchValue({ document_type_id: this.documentTypeId });
        this.certificateDataForm.patchValue({ certificate_level_id: data.certificate_level_id.toString() });
        this.certificateDataForm.patchValue({ certificate_type_id: data.certificate_type_id && data.certificate_type_id.toString() });
        this.certificateDataForm.patchValue({ name: data.certificate_name });
        this.certificateDataForm.patchValue({ certificate_score: data.certificate_score });
        this.certificateDataForm.patchValue({ publication_year: data.publication_year });
        this.certificateDataForm.patchValue({ description: data.description });
        this.viewDocumentCertificate();
        this.certificateDetailModal.show();
    }
    downloadCertificateData(data) {
        window.open(data.certificate_url);
    }
    viewDocumentCertificate() {
        this.userService.getDocumentCertificateData(`registration_number=${this.registration_number}&document_certificate_id=${this.documentCertificateId}`).subscribe(response => {
            if (response.data.length !== 0) {
                this.listDocumentCertificate = response.data;
            }
            else {
                this.listDocumentCertificate = '';
            }
        });
    }
    uploadCertificateFile(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 2000000) {
                    this.formDataCertificateUpdated.append('url', elem.files[0]);
                }
                else {
                    this.errSize = true;
                    this.certificateDataForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.certificateDataForm.get('url').patchValue('');
            }
        }
    }
    uploadReportCardFile(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png' || fileType == 'doc' || fileType == 'docx') {
                if (size < 2000000) {
                    this.formDataUpdate.append('url', elem.files[0]);
                }
                else {
                    this.errSize = true;
                    this.reportCardDataForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.reportCardDataForm.get('url').patchValue('');
            }
        }
    }
    uploadStudyDocumentEprt(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 2000000) {
                    this.formDataStudyUpd.append('url', elem.files[0]);
                }
                else {
                    this.errSize = true;
                    this.eprtAndTpaForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.eprtAndTpaForm.get('url').patchValue('');
            }
        }
    }
    uploadIjazahDocument(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png' || fileType == 'PNG' || fileType == 'JPG' || fileType == 'JPEG' || fileType == 'PDF') {
                if (size < 2000000) {
                    this.formDataIjazahUpd.append('url', elem.files[0]);
                }
                else {
                    this.errSize = true;
                    this.ijazahForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.ijazahForm.get('url').patchValue('');
            }
        }
    }
    uploadTranscriptFiles(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png' || fileType == 'PNG' || fileType == 'JPG' || fileType == 'JPEG' || fileType == 'PDF') {
                if (size < 2000000) {
                    this.formData3Updated.append('url', elem.files[0]);
                }
                else {
                    this.errSize = true;
                    this.transcriptDataForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.transcriptDataForm.get('url').patchValue('');
            }
        }
    }
    uploadRequirementDocument(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 2000000) {
                    this.formDataPersonalUpd.delete('url');
                    this.formDataPersonalUpd.append('url', elem.files[0]);
                }
                else {
                    this.errSize = true;
                    this.participantDocumentForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.participantDocumentForm.get('url').patchValue('');
            }
        }
    }
    uploadAbilityPayment(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 2000000) {
                    this.formDataAbilityUpd.append('url', elem.files[0]);
                }
                else {
                    this.errSize = true;
                    this.abilityDataForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.abilityDataForm.get('url').patchValue('');
            }
        }
    }
    uploadSupportingFile(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 2000000) {
                    this.formData2Update.append('url', elem.files[0]);
                }
                else {
                    this.errSize = true;
                    this.supportingDataForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.supportingDataForm.get('url').patchValue('');
            }
        }
    }
    uploadUtbkDocument(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png' || fileType == 'PNG' || fileType == 'JPG' || fileType == 'JPEG' || fileType == 'PDF') {
                if (size < 2000000) {
                    this.formDataUtbkUpd.append('url', elem.files[0]);
                }
                else {
                    this.errSize = true;
                    this.utbkForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.utbkForm.get('url').patchValue('');
            }
        }
    }
    uploadProposalDocument(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 5000000) {
                    this.formDataProposalUpd.append('url', elem.files[0]);
                }
                else {
                    this.errSize = true;
                    this.proposalForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.proposalForm.get('url').patchValue('');
            }
        }
    }
    renderTable1() {
        this.dtElements.forEach((dtElement, index) => {
            if (index == 0) {
                dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            }
        });
    }
    closeRaportModalDetail() {
        this.reportCardDetailModal.hide();
        document.querySelector('body').classList.add('modal-open');
    }
    closeCertificateModalDetail() {
        this.certificateDetailModal.hide();
        document.querySelector('body').classList.add('modal-open');
    }
    closeUtbkModals() {
        this.utbkForm.reset();
        this.utbkModals.hide();
        this.dataUtbkUrl = [];
    }
    closeEprtTpaModals() {
        this.eprtAndTpaModal.hide();
        this.eprtAndTpaForm.reset();
        this.isPromotor = false;
        this.isIPKDocument = false;
        this.isTPADocument = false;
        this.isEPRTDocument = false;
        this.isResidensi = false;
        this.isSuratIjinAtasan = false;
        this.isEprtUpdated = false;
        this.isCoPromotor = false;
    }
    closeIjazahModals() {
        this.ijazahModals.hide();
        this.ijazahForm.reset();
        this.isIjazahS1 = false;
        this.isIjazahS2 = false;
        this.isPortofolio = false;
    }
    closePublikasiModals() {
        this.publikasiForm.reset();
        this.publikasiModals.hide();
        document.querySelector('body').classList.add('modal-open');
    }
    documentRequirementModalClose() {
        this.documentRequirementModal.hide();
        this.participantDocumentForm.reset();
        !this.haveDocumentPersonal;
    }
    noDataFoundAlert() {
        this.loading = false;
        this.loadingDocumentCard = false;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Info',
            text: 'Tidak ada data ditemukan',
            type: 'error'
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
};
DocumentDataDetailComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__["BroadcasterService"] },
    { type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"] },
    { type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], DocumentDataDetailComponent.prototype, "dtElements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportCardDetailModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "reportCardDetailModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateDetailModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "certificateDetailModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('publikasiModals', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "publikasiModals", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('publicationDataModals', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "publicationDataModals", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('eprtAndTpaModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "eprtAndTpaModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ijazahModals', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "ijazahModals", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transcriptRequirementModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "transcriptRequirementModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentAbilityModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "paymentAbilityModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recommendationLetterRequirementModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "recommendationLetterRequirementModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transcriptRequirementModalView', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "transcriptRequirementModalView", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('utbkModals', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "utbkModals", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recommendationS2Modal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "recommendationS2Modal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('proposalModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "proposalModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportCardRequirementModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "reportCardRequirementModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateRequirementModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "certificateRequirementModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('documentRequirementModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DocumentDataDetailComponent.prototype, "documentRequirementModal", void 0);
DocumentDataDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document-data-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./document-data-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./document-data-detail.component.scss */ "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__["BroadcasterService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"],
        src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])
], DocumentDataDetailComponent);



/***/ }),

/***/ "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.module.ts ***!
  \************************************************************************************************/
/*! exports provided: DocumentDataDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentDataDetailModule", function() { return DocumentDataDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _document_data_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./document-data-detail.component */ "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.ts");
/* harmony import */ var _document_data_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document-data-detail-routing.module */ "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");








let DocumentDataDetailModule = class DocumentDataDetailModule {
};
DocumentDataDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_document_data_detail_component__WEBPACK_IMPORTED_MODULE_3__["DocumentDataDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _document_data_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["DocumentDataDetailRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"]
        ]
    })
], DocumentDataDetailModule);



/***/ })

}]);
//# sourceMappingURL=document-data-detail-document-data-detail-module-es2015.js.map