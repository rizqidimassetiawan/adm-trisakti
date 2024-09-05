function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["document-data-detail-document-data-detail-module"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeAdmMpDocumentDataDocumentDataDetailDocumentDataDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"text-md-left\">\n      <div class=\"page-header-title\">\n        <h5>{{ 'MENU.document-data'| translate}}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n<app-card cardClass=\"card-datatable\" headerClass=\"text-center text-md-left\" [options]=\"false\"\n  [loading]=\"loadtableRegistrationDocument\" [hidHeader]=\"true\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"row align-items-center mb-2 pl-3 pr-3\">\n        <div class=\"col-12 col-md-6 text-left\">\n          <button class=\"btn btn-outline-secondary btn-sm btn-round has-ripple\" routerLink=\"/adm-mp-document-data\">\n            <i class=\"ti-angle-left\"></i>\n            {{'ROOT.back' | translate}}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"table-responsive pb-1\">\n    <table datatable class=\"table table-bordered table-hover\" [dtOptions]=\"dtOptions[0]\" [dtTrigger]=\"dtTrigger\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\" style=\"padding-left: 10px;text-align:center\">{{ 'CONTENT.no' | translate}}</th>\n          <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.document' | translate}}</th>\n          <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"tableData1?.length != 0\">\n        <tr *ngFor=\"let data of tableData1; let i = index;\">\n          <th scope=\"row\" style=\"padding-left: 10px; text-align:center \">{{ i+1 }}</th>\n          <td class=\"text-justify\">{{data.document_name}} <span style=\"color: red;\" *ngIf=\"data.required == 1\">*</span></td>\n          <td class=\"center-table\">\n            <button class=\"btn btn-outline-primary btn-sm btn-round has-ripple\"\n              (click)=\"loadDetailRegistrationDocumentData(data)\" [disabled]=\"loading\">\n              <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-info-circle\"></i><span\n                  class=\"d-sm-none\"> {{ 'ROOT.detail' | translate\n                  }}</span></span>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</app-card>\n\n<!-- Forms Modal -->\n<app-ui-modal #reportCardRequirementModal [containerClick]=\"false\"\n  dialogClass=\"modal-dialog modal-dialog-centered modal-xl\" [hideFooter]=\"true\" [loading]=\"loadtableReportCardData\">\n  <div class=\"app-modal-header\">\n    <h6 class=\"modal-title\">{{ 'ROOT.detail' | translate }} {{ 'CONTENT.school-report' | translate }}</h6>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"reportCardRequirementModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-striped table-boder-radius dataTable\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.no' | translate}}</th>\n            <th class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.semester' | translate}}</th>\n            <th *ngIf=\"isMathStudy\" scope=\"col \" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.math-score' |\n              translate}}</th>\n            <th *ngIf=\"isBahasaStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.indo-score' |\n              translate}}</th>\n            <th *ngIf=\"isEnglishStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.english-score'\n              | translate}}\n            </th>\n            <th *ngIf=\"physicsStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.physics-score' |\n              translate}}\n            </th>\n            <th *ngIf=\"biologyStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.biology-score' |\n              translate}}\n            </th>\n            <th *ngIf=\"chemicalStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.chemical-score'\n              | translate}}\n            </th>\n            <th *ngIf=\"sociologicalStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{\n              'CONTENT.sociology-score' |\n              translate}}</th>\n            <th *ngIf=\"economyStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.economy-score' |\n              translate}}\n            </th>\n            <th *ngIf=\"geographyStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{\n              'CONTENT.geography-score' |\n              translate}}</th>\n            <th scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\" style=\"max-width:auto;\">{{\n              'CONTENT.approved-status' | translate}}</th>\n            <th scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\" style=\"max-width:auto;\">{{ 'CONTENT.approved' |\n              translate}}</th>\n            <th scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\" style=\"max-width:auto;\">{{ 'CONTENT.action' |\n              translate}}</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tableData2?.length != 0\">\n          <tr *ngFor=\"let data of tableData2; let i = index;\">\n            <td class=\"text-center pl-1 pr-1 font-styling\">{{ i+1 }}.</td>\n            <td class=\"text-center pl-1 pr-1 font-styling\">{{ data.semesters }}</td>\n            <td *ngIf=\"isMathStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.math ? data.math : '-' }}</td>\n            <td *ngIf=\"isBahasaStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.bahasa ? data.bahasa : '-'}}\n            </td>\n            <td *ngIf=\"isEnglishStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.english ? data.english : '-'\n              }}</td>\n            <td *ngIf=\"physicsStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.physics ? data.physics : '-' }}\n            </td>\n            <td *ngIf=\"biologyStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.biology ? data.biology : '-' }}\n            </td>\n            <td *ngIf=\"chemicalStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.chemical ? data.chemical : '-'\n              }}</td>\n            <td *ngIf=\"sociologicalStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.sociological ?\n              data.sociological : '-' }}\n            </td>\n            <td *ngIf=\"economyStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.economy ? data.economy : '-'}}\n            </td>\n            <td *ngIf=\"geographyStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.geography ? data.geography :\n              '-' }}</td>\n            <td class=\"center-table font-styling\">\n              <span *ngIf=\"data.document_status == 'approved'\" class=\"badge badge-light-success\">{{ 'CONTENT.approve' |\n                translate }}</span>\n              <span *ngIf=\"data.document_status == 'waiting for approved'\" class=\"badge badge-light-secondary\">{{\n                'CONTENT.not-specified' | translate }}</span>\n            </td>\n            <td class=\"center-table font-styling\">\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.setujui' | translate\"\n                (click)=\"submitReportApprovedDocument(data)\"><i\n                  class=\"icofont icofont-check-circled f-w-600 f-16 text-c-green\"></i></a>\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.tolak' | translate\"\n                (click)=\"submitRejectReportApprovedDocument(data)\"><i\n                  class=\"icofont icofont-close-circled f-w-600 f-16 text-c-red\"></i></a>\n            </td>\n            <td class=\"center-table font-styling\">\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.download' | translate\"\n                (click)=\"downloadReportCardData(data)\"><i\n                  class=\"fas fa-cloud-download-alt f-w-600 f-16 text-muted\"></i></a>\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.edit' | translate\"\n                (click)=\"openformRaport(data)\"><i class=\"fas fa-pencil-alt f-w-600 f-16 text-warning\"></i></a>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableData2?.length == 0 && !loadtableReportCardData\">\n          <tr>\n            <td colspan=\"14\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableData2?.length == 0 && loadtableReportCardData\">\n          <tr>\n            <td colspan=\"14\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #certificateRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-xl\"\n  [hideFooter]=\"true\" [loading]=\"loadtableCertificateData\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.detail' | translate }} {{ 'CONTENT.certificate' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"certificateRequirementModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-striped table-boder-radius dataTable\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.no' | translate}}</th>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.certificate-level' | translate}}</th>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.certificate-type' | translate}}</th>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.publication-year' | translate}}</th>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.certificate-score' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.approved-status' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.approved' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.action' | translate}}</th>\n\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tableData3?.length != 0\">\n          <tr *ngFor=\"let data of tableData3; let i = index;\">\n            <td class=\"center-table\">{{i+1}}</td>\n            <td class=\"center-table\">{{ data.certificate_level }}</td>\n            <td class=\"center-table\">{{ data.certificate_type }}</td>\n            <td class=\"center-table\">{{ data.publication_year }}</td>\n            <td class=\"center-table\">{{ data.certificate_score }}</td>\n            <td class=\"center-table font-styling\">\n              <span *ngIf=\"data.document_status == 'approved'\" class=\"badge badge-light-success\">{{ 'CONTENT.approve' |\n                translate }}</span>\n              <span *ngIf=\"data.document_status == 'waiting for approved'\" class=\"badge badge-light-secondary\">{{\n                'CONTENT.not-specified' | translate }}</span>\n            </td>\n            <td class=\"center-table font-styling\">\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.setujui' | translate\"\n                (click)=\"submitCertificateApprovedDocument(data)\"><i\n                  class=\"icofont icofont-check-circled f-w-600 f-16 text-c-green\"></i></a>\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.tolak' | translate\"\n                (click)=\"submitRejectCertificateApprovedDocument(data)\"><i\n                  class=\"icofont icofont-close-circled f-w-600 f-16 text-c-red\"></i></a>\n            </td>\n            <td class=\"center-table font-styling\">\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.download' | translate\"\n                (click)=\"downloadCertificateData(data)\"><i\n                  class=\"fas fa-cloud-download-alt f-w-600 f-16 text-muted\"></i></a>\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.edit' | translate\"\n                (click)=\"loadCertificateDetailFileData(data)\"><i\n                  class=\"fas fa-pencil-alt f-w-600 f-16 text-warning\"></i></a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #reportCardDetailModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\" [loading]=\"loadingSemester\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.edit' | translate }} {{ 'CONTENT.school-report' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeRaportModalDetail();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"reportCardDataForm\"\n      (ngSubmit)=\"createReportCardDocument();\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\" *ngIf=\"!isNotHaveMappingData\">\n          <p class=\"mb-0\"><span class=\"required\">* Wajib diisi</span></p>\n          <div class=\"form-group mb-1\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.semester' | translate }} </label>\n            <input type=\"text\" class=\"form-control is-valid\" formControlName=\"semester_name\" name=\"semester_name\"\n              readonly>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div *ngIf=\"isBahasaStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.indo-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"bahasa\" name=\"indoScore\" minlength=\"0\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.bahasa.invalid && fraport.bahasa.touched?'is-invalid':(fraport.bahasa.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.required && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.min && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.max && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.pattern && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"isEnglishStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.english-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"english\" name=\"englishScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.english.invalid && fraport.english.touched?'is-invalid':(fraport.english.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.required && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.min && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.max && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.pattern && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"isMathStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.math-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"math\" name=\"mathScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.math.invalid && fraport.math.touched?'is-invalid':(fraport.math.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.required && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.min && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.max && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.pattern && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div *ngIf=\"physicsStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.physics-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"physics\" name=\"physicsScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.physics.invalid && fraport.physics.touched?'is-invalid':(fraport.physics.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.required && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.min && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.max && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.pattern && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"chemicalStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.chemical-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"chemical\" name=\"chemicalScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.chemical.invalid && fraport.chemical.touched?'is-invalid':(fraport.chemical.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.required && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.min && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.max && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.pattern && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"biologyStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.biology-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"biology\" name=\"biologyScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.biology.invalid && fraport.biology.touched?'is-invalid':(fraport.biology.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.required && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.min && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.max && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.pattern && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div *ngIf=\"sociologicalStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.sociology-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"sociological\" name=\"sociologicalScore\"\n                minlength=\"1\" maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\"\n                required\n                [ngClass]=\"fraport.sociological.invalid && fraport.sociological.touched?'is-invalid':(fraport.sociological.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.required && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.min && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.max && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.pattern && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"economyStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.economy-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"economy\" name=\"economyScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.economy.invalid && fraport.economy.touched?'is-invalid':(fraport.economy.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.required && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.min && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.max && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.pattern && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"geographyStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.geography-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"geography\" name=\"geographyScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.geography.invalid && fraport.geography.touched?'is-invalid':(fraport.geography.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.required && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.min && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.max && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.pattern && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div class=\"form-group mb-0 col-md-12\">\n              <label class=\"form-label mb-0 f-w-600\">{{'CONTENT.upload-file-raport' | translate}} <span\n                  class=\"required\">*</span></label>\n              <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n                accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadReportCardFile($event)\" />\n              <p class=\"error text-danger small form-text mb-1\">\n                {{ 'CONTENT.file-raport-requirement' | translate}} <br>\n                {{fraport.url.errors && fraport.url.errors.required && (fraport.url.touched || fraport.url.dirty) ?\n                ('CONTENT.required' | translate) : ''}}\n                {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n                translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n                Mb.</p>\n\n              <label\n                *ngIf=\"fraport.url.errors && fraport.url.errors.required && (fraport.url.touched || fraport.url.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"row\">\n            <div ngif class=\"col-md-12 mb-0 mt-0 text-right\">\n              <button type=\"button\" (click)=\"closeRaportModalDetail()\" [disabled]=\"this.loading\"\n                class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button>\n              <button type=\"submit\" class=\"btn btn-warning btn-sm m-1\"\n                [disabled]=\"reportCardDataForm.invalid || this.loading\">\n                <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!this.loading\" class=\"btn-text\">\n                  <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<app-ui-modal #certificateDetailModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.edit' | translate }} {{ 'CONTENT.certificate' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeCertificateModalDetail();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"certificateDataForm\"\n      (ngSubmit)=\"createCertificateDocument()\">\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-level' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select name=\"certificate-level\" formControlName=\"certificate_level_id\"\n            [placeholder]=\"'CONTENT.certificate-level'|translate\" required\n            [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"certificateLevel\"\n            [options]=\"listCertificateLevel\"\n            [ngClass]=\"!certificateLevel?'filter-dropdown is-invalid':(certificateLevel?'filter-dropdown is-valid':'filter-dropdown')\">\n            >\n          </ng-select>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-level' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-type' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select name=\"certificate-type\" formControlName=\"certificate_type_id\"\n            [placeholder]=\"'CONTENT.certificate-type'|translate\" required [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            [(ngModel)]=\"certificateType\" [options]=\"listCertificateType\"\n            [ngClass]=\"!certificateType?'filter-dropdown is-invalid':(certificateType?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-type' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-name' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"description\"\n            [placeholder]=\"'CONTENT.certificate-name'|translate\" required\n            [ngClass]=\"fcertif.name.invalid && fcertif.name.touched?'is-invalid':(fcertif.name.valid?'is-valid':'')\" />\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-name' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.certificate-description' | translate }} <span\n              class=\"required\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"description\" name=\"description\"\n            [placeholder]=\"'CONTENT.certificate-description'|translate\" required\n            [ngClass]=\"fcertif.description.invalid && fcertif.description.touched?'is-invalid':(fcertif.description.valid?'is-valid':'')\">\n          </textarea>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.description' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-year' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"publication_year\" name=\"publicationYear\"\n            [placeholder]=\"'CONTENT.publication-year'|translate\" maxlength=\"4\" required\n            [ngClass]=\"fcertif.publication_year.invalid && fcertif.publication_year.touched?'is-invalid':(fcertif.publication_year.valid?'is-valid':'')\" />\n          <label\n            *ngIf=\"fcertif.publication_year.errors && fcertif.publication_year.errors.maxlength && (fcertif.publication_year.touched || fcertif.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.year-validators' | translate }}</label>\n          <label\n            *ngIf=\"fcertif.publication_year.errors && fcertif.publication_year.errors.pattern && (fcertif.publication_year.touched || fcertif.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only-1' | translate }}</label>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.publication-year' | translate }} </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"certificate_score\" name=\"certificateScore\"\n            [placeholder]=\"'CONTENT.certificate-score'|translate\" required maxlength=\"3\"\n            [ngClass]=\"fcertif.certificate_score.invalid && fcertif.certificate_score.touched?'is-invalid':(fcertif.certificate_score.valid?'is-valid':'')\" />\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-score' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-12 mb-0\">\n          <label class=\"form-label mb-0 f-w-600\">{{'CONTENT.upload-file' | translate}} <span\n              class=\"required\">*</span></label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"certificateDetail\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadCertificateFile($event)\"\n            [ngClass]=\"fcertif.url.invalid && fcertif.url.touched?'is-invalid':(fcertif.url.valid?'is-valid':'')\" />\n          <p class=\"error text-danger small form-text mb-1\">\n            {{fcertif.url.errors && fcertif.url.errors.required && (fcertif.url.touched || fcertif.url.dirty) ?\n            ('CONTENT.required' | translate) : ''}}\n            {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n            translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 mt-0 text-right col-md-12\">\n          <button type=\"button\" (click)=\"closeCertificateModalDetail()\" [disabled]=\"this.loading\"\n            class=\"btn btn-secondary btn-sm\">\n            <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n          </button>\n          <button type=\"submit\" class=\"btn btn-warning btn-sm m-1\"\n            [disabled]=\"certificateDataForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">\n              <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}</span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #publicationDataModals [containerClick]=\"false\" dialogClass=\"modal-dialog modal-dialog-centered modal-xl\"\n  [hideFooter]=\"true\" [loading]=\"loadTablePublication\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.detail' | translate }} {{ 'CONTENT.publication' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"publicationDataModals.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-sm table-boder-radius dataTable\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.no' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-name' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-position' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.publication-title' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-type' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.publication-date' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.link' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.action' | translate}}</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tableDataPublication?.length != 0\">\n          <tr\n            *ngFor=\"let data of tableDataPublication | slice: (pageDocument-1) * 10 : pageDocument * 10; let i = index;\">\n            <td class=\"text-center pl-1 pr-1\">{{ (pageDocument-1) * 10 + (i + 1) }}.</td>\n            <td>{{ data.writer_name }}</td>\n            <td class=\"text-center\">{{ data.publication_writer_position }}</td>\n            <td class=\"text-center\">{{ data.title }}</td>\n            <td class=\"text-center\">{{ data.publication_type }}</td>\n            <td class=\"text-center\">{{ data.publish_date | date: 'dd/MM/yyyy' }}</td>\n            <td class=\"text-center\">\n              <a [href]=\"data.publication_link\" target=\"_blank\" class=\"btn btn-sm btn-outline-primary\">\n                {{'CONTENT.link' | translate}}</a>\n            </td>\n            <td class=\"text-center\">\n              <button class=\"btn btn-outline-warning btn-sm btn-round has-ripple\"\n                (click)=\"loadPublicationDataDetails(data)\">\n                <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}}</span>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableDataPublication?.length == 0 && !loadTablePublication\">\n          <tr>\n            <td colspan=\"8\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableDataPublication?.length == 0 && loadTablePublication\">\n          <tr>\n            <td colspan=\"8\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n      </table>\n      <ngb-pagination class=\"d-flex justify-content-center\" [(page)]=\"pageDocument\" [pageSize]=\"10\"\n        [collectionSize]=\"tableDataPublication.length\" [maxSize]=\"3\" [boundaryLinks]=\"true\">\n      </ngb-pagination>\n    </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #publikasiModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.add' | translate }} {{ 'CONTENT.publication' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closePublikasiModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"publikasiForm\"\n      (ngSubmit)=\"createPublicationData()\">\n      <div class=\"row\">\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.writer-name' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" maxlength=\"150\"\n            placeholder=\"{{ 'CONTENT.writer-name' | translate }}\"\n            [ngClass]=\"fpubd.name.invalid && fpubd.name.touched?'is-invalid':(fpubd.name.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"publikasiForm.controls.name.errors && publikasiForm.controls.name.errors.required && (publikasiForm.controls.name.touched || publikasiForm.controls.name.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.writer-position' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select class=\"index-up\" name=\"writer-type\" [placeholder]=\"'CONTENT.writer-type' |translate\"\n            formControlName=\"position\" required [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            [(ngModel)]=\"selectedWriterPosition\" [options]=\"listWriterPosition\"\n            [ngClass]=\"!selectedWriterPosition?'filter-dropdown is-invalid':(selectedWriterPosition?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label *ngIf=\"!selectedWriterPosition\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate}}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-title' | translate }} <span\n              class=\"required\">*</span></label> <br>\n          <textarea class=\"form-control\" formControlName=\"title\" maxlength=\"500\" required\n            placeholder=\"{{ 'CONTENT.publication-title' | translate }}\"\n            [ngClass]=\"fpubd.title.invalid && fpubd.title.touched?'is-invalid':(fpubd.title.valid?'is-valid':'')\"></textarea>\n          <label\n            *ngIf=\"publikasiForm.controls.title.errors && publikasiForm.controls.title.errors.required && (publikasiForm.controls.title.touched || publikasiForm.controls.title.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.writer-type' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select class=\"index-up\" name=\"writer-type\" [placeholder]=\"'CONTENT.writer-type' |translate\"\n            formControlName=\"type\" required [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            [(ngModel)]=\"selectedPublicationType\" [options]=\"listPublicationType\"\n            [ngClass]=\"!selectedPublicationType?'filter-dropdown is-invalid':(selectedPublicationType?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label *ngIf=\"!selectedPublicationType\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate}}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-date' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"date\" class=\"form-control\" formControlName=\"publication_date\" name=\"publication_date\"\n            [ngClass]=\"fpubd.publication_date.invalid && fpubd.publication_date.touched?'is-invalid':(fpubd.publication_date.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"publikasiForm.controls.publication_date.errors && publikasiForm.controls.publication_date.errors.required && (publikasiForm.controls.publication_date.touched || publikasiForm.controls.publication_date.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.link' | translate }} <span\n              class=\"required\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"link\" name=\"link\" maxlength=\"100\"\n            placeholder=\"{{ 'CONTENT.link' | translate }}\"\n            [ngClass]=\"fpubd.link.invalid && fpubd.link.touched?'is-invalid':(fpubd.link.valid?'is-valid':'')\">\n          </textarea>\n          <label *ngIf=\"fpubd.link.errors && fpubd.link.errors.required && (fpubd.link.touched || fpubd.link.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"mb-0 text-right col-md-12\">\n          <button type=\"button\" (click)=\"closePublikasiModals()\" [disabled]=\"this.loading\"\n            class=\"btn btn-secondary btn-sm\">\n            <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n          </button>\n          <button type=\"submit\" class=\"btn btn-warning btn-sm m-1\" [disabled]=\"publikasiForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i\n                class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}</span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #eprtAndTpaModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeEprtTpaModals();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"eprtAndTpaForm\"\n      (ngSubmit)=\"createEprtTpaDocument()\">\n      <div class=\"row\">\n        <app-alert *ngIf=\"isEPRTDocument || isTPADocument\" type=\"primary\" class=\"text-center col-md-12\">\n          {{isTPADocument ? ('CONTENT.tpa-information' | translate) : ('CONTENT.eprt-information' | translate)}} <br>\n          <a *ngIf=\"isEPRTDocument\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm m-1\"><i class=\"icofont icofont-prescription\"></i> {{'CONTENT.eprt-test' |\n            translate}}</a>\n          <a *ngIf=\"isTPADocument\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm m-1\"><i class=\"icofont icofont-prescription\"></i> {{'CONTENT.tpa-test' |\n            translate}} </a>\n        </app-alert>\n      </div>\n      <div class=\"row align-items-center\">\n        <div class=\"text-left col-12 col-md-6 mb-1\">\n          <a *ngIf=\"isResidensi\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isSuratIjinAtasan\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isPromotor\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isCoPromotor\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n        </div>\n        <div class=\"text-right col-12 col-md-6\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div *ngIf=\"isPromotor || isCoPromotor|| isResidensi || isSuratIjinAtasan\" class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-req-name' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" readonly>\n        </div>\n        <div *ngIf=\"isCoPromotor\" class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.name-co-promotor' | translate }}\n            <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"nameCoPromotor\" name=\"nameCoPromotor\"\n            [placeholder]=\"'CONTENT.name-co-promotor'|translate\"\n            [ngClass]=\"fed.nameCoPromotor.invalid && fed.nameCoPromotor.touched?'is-invalid':(fed.nameCoPromotor.valid?'is-valid':'')\">\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'ROOT.required' | translate }} </label>\n        </div>\n        <div [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isIPKDocument\"\n          class=\"form-group mb-2 col-md-12\">\n          <label *ngIf=\"isEPRTDocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.eprt-publication-year' | translate\n            }} <span class=\"required\">*</span></label>\n          <label *ngIf=\"isTPADocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.tpa-publication-year' | translate }}\n            <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"publication_year\" name=\"publicationYear\"\n            [placeholder]=\"'CONTENT.pub-year'|translate\" maxlength=\"4\" required\n            [ngClass]=\"fed.publication_year.invalid && fed.publication_year.touched?'is-invalid':(fed.publication_year.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"eprtAndTpaForm.controls.publication_year.errors && eprtAndTpaForm.controls.publication_year.errors.maxlength && (eprtAndTpaForm.controls.publication_year.touched || eprtAndTpaForm.controls.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.year-validators' | translate }}</label>\n          <label\n            *ngIf=\"eprtAndTpaForm.controls.publication_year.errors && eprtAndTpaForm.controls.publication_year.errors.pattern && (eprtAndTpaForm.controls.publication_year.touched || eprtAndTpaForm.controls.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only-1' | translate }}</label>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'ROOT.required' | translate }} </label>\n\n        </div>\n        <div [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isIPKDocument\"\n          class=\"form-group mb-2 col-md-12\">\n          <label *ngIf=\"isEPRTDocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.eprt-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <label *ngIf=\"isTPADocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.tpa-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"eprt_tpa_score\" name=\"certificateScore\" maxlength=\"3\"\n            [placeholder]=\"'CONTENT.score'|translate\" required\n            [ngClass]=\"fed.eprt_tpa_score.invalid && fed.eprt_tpa_score.touched?'is-invalid':(fed.eprt_tpa_score.valid?'is-valid':'')\">\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'ROOT.required' | translate }} </label>\n        </div>\n        <div\n          [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isEPRTDocument || isTPADocument\"\n          class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.ipk-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"gpa\" placeholder=\"3.55\"\n            [ngClass]=\"fed.gpa.invalid && fed.gpa.touched?'is-invalid':(fed.gpa.valid?'is-valid':'')\" required max=\"4\"\n            maxlength=\"4\">\n          <label *ngIf=\"fed.gpa.errors && fed.gpa.errors.required && (fed.gpa.touched || fed.gpa.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label *ngIf=\"fed.gpa.errors && fed.gpa.errors.max && (fed.gpa.touched || fed.gpa.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n          <label *ngIf=\"fed.gpa.errors && fed.gpa.errors.pattern && (fed.gpa.touched || fed.gpa.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 col-md-12\">\n          <label class=\"form-label mb-0 f-w-600\">{{isEprtUpdated == true ? ('CONTENT.edit-file' | translate) :\n            ('CONTENT.upload-file' | translate) }} <span *ngIf=\"!isEprtUpdated\" class=\"required\">*</span></label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"certificateDetail\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadStudyDocumentEprt($event)\"\n            [ngClass]=\"fed.url.invalid && fed.url.touched?'is-invalid':(fed.url.valid?'is-valid':'')\" />\n          <p class=\"error text-danger small form-text mb-1\">\n            {{fed.url.errors && fed.url.errors.required && (fed.url.touched || fed.url.dirty) ? ('CONTENT.required' |\n            translate) : ''}}\n            {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n            translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.\n          </p>\n        </div>\n        <div class=\"form-group col-md-12 mt-0\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataStudyUrl.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataStudyUrl\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_name !== null ? (e.document_name | shortener:[55,\n                        '..']) : 'Data Dokumen'}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataStudyUrl.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 text-right col-md-12\">\n          <!-- <button type=\"button\" (click)=\"closeEprtTpaModals();\" [disabled]=\"this.loading\"\n              class=\"btn btn-secondary btn-sm\">\n              <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n            </button> -->\n          <button *ngIf=\"haveDocumentStudy\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n            [disabled]=\"this.loading\" (click)=\"submitRejectStudyDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{\n              'CONTENT.tolak' | translate }} </span>\n          </button>\n          <button *ngIf=\"haveDocumentStudy\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n            [disabled]=\"this.loading\" (click)=\"submitStudyDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n              'CONTENT.setujui' | translate }}</span>\n          </button>\n          <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"eprtAndTpaForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">\n              <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }} \n            </span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #ijazahModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeIjazahModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"ijazahForm\"\n      (ngSubmit)=\"createIjazahDocument()\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-name' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\"\n            [placeholder]=\"'CONTENT.document-name'| translate\" readonly>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-12 mb-0\">\n          <label class=\"form-label mb-0 f-w-600\">{{'CONTENT.edit-file' | translate }} <span *ngIf=\"!isUpdatedTranscript\"\n              class=\"required\">*</span></label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"ijazahDoc\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadIjazahDocument($event)\"\n            [ngClass]=\"fid.url.invalid && fid.url.touched?'is-invalid':(fid.url.valid?'is-valid':'')\" />\n          <p class=\"error text-danger small form-text mb-2\">\n            {{fid.url.errors && fid.url.errors.required && (fid.url.touched || fid.url.dirty) ? ('CONTENT.required' |\n            translate) : ''}}\n            {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n            translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.\n          </p>\n        </div>\n        <div class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataIjazah.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataIjazah\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_type | shortener:[55, '..']}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataIjazah.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 text-right col-md-12\">\n          <!-- <button type=\"button\" (click)=\"closeIjazahModals()\" [disabled]=\"this.loading\"\n          class=\"btn btn-secondary btn-sm\">\n          <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n        </button> -->\n          <button *ngIf=\"haveDocumentIjazah\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n            [disabled]=\"this.loading\" (click)=\"submitIjazahRejectedDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{\n              'CONTENT.tolak' | translate }} </span>\n          </button>\n          <button *ngIf=\"haveDocumentIjazah\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n            [disabled]=\"this.loading\" (click)=\"submitIjazahDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n              'CONTENT.setujui' | translate }}</span>\n          </button>\n          <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"ijazahForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">\n              <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}\n              </span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n\n<app-ui-modal #transcriptRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeTranscriptModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"transcriptDataForm\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" readonly>\n          </div>\n        </div>\n      </div>\n      <div [hidden]=\"isTranscript\" class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.ipk-score' | translate }} <span\n                class=\"required\">*</span></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"gpa\" placeholder=\"3.55\"\n              [ngClass]=\"ftd.gpa.invalid && ftd.gpa.touched?'is-invalid':(ftd.gpa.valid?'is-valid':'')\" required max=\"4\"\n              maxlength=\"4\">\n            <label *ngIf=\"ftd.gpa.errors && ftd.gpa.errors.required && (ftd.gpa.touched || ftd.gpa.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            <label *ngIf=\"ftd.gpa.errors && ftd.gpa.errors.max && (ftd.gpa.touched || ftd.gpa.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n            <label *ngIf=\"ftd.gpa.errors && ftd.gpa.errors.pattern && (ftd.gpa.touched || ftd.gpa.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-0\">\n            <div>\n              <label class=\"form-label mb-0 f-w-600\">{{isUpdatedTranscript == true ? ('CONTENT.edit-file' | translate) :\n                ('CONTENT.upload-file' | translate) }} <span *ngIf=\"!isUpdatedTranscript\"\n                  class=\"required\">*</span></label>\n              <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n                accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadTranscriptFiles($event)\"\n                [ngClass]=\"ftd.url.invalid && ftd.url.touched?'is-invalid':(ftd.url.valid?'is-valid':'')\" />\n              <p class=\"error text-danger small form-text\">\n                {{ftd.url.errors && ftd.url.errors.required && (ftd.url.touched || ftd.url.dirty) ? ('CONTENT.required'\n                | translate) : ''}}\n                {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n                translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n                Mb.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-0\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataTranscriptUrlDoc.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataTranscriptUrlDoc\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> Transkrip Nilai\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataTranscriptUrlDoc.length == 0\" class=\"row\">\n              <div class=\"col-12 ml-2\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 text-right\">\n        <!-- <button type=\"button\" (click)=\"closeTranscriptModals()\" [disabled]=\"this.loading\"\n                class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button> -->\n        <button *ngIf=\"haveTranscriptDoc\" type=\"button\" class=\"btn btn-outline-danger btn-sm\" [disabled]=\"this.loading\"\n          (click)=\"submitRejectTranscriptDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{ 'CONTENT.tolak'\n            | translate }} </span>\n        </button>\n        <button *ngIf=\"haveTranscriptDoc\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n          [disabled]=\"this.loading\" (click)=\"submitApprovalTranscriptDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n            'CONTENT.setujui' | translate }}</span>\n        </button>\n        <button type=\"submit\" class=\"btn btn-warning btn-sm m-1\" (click)=\"createReportCardDocument()\"\n          [disabled]=\"transcriptDataForm.invalid || this.loading\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\">\n            <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}\n          </span>\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #documentRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"documentRequirementModalClose();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup]=\"participantDocumentForm\" class=\"md-float-material form-material\" action=\"javascript:\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-req-name' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" readonly formControlName=\"name\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"isShowIdentityNumber\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.identity-number' | translate }} <span\n                class=\"required\">*</span></label>\n            <input type=\"text\" style=\"text-transform: uppercase;\" class=\"form-control\" name=\"number\" minlength=\"7\"\n              maxlength=\"16\" formControlName=\"number\" placeholder=\"{{ 'CONTENT.identity-number' | translate }}\"\n              [ngClass]=\"fpd.number.invalid && fpd.number.touched?'is-invalid':(fpd.number.valid?'is-valid':'')\">\n            <label *ngIf=\"fpd.number.errors && fpd.number.errors.required && (fpd.number.touched || fpd.number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            <label *ngIf=\"fpd.number.errors && fpd.number.errors.minlength && (fpd.number.touched || fpd.number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.identity-number-validation' | translate }}</label>\n            <label *ngIf=\"fpd.number.errors && fpd.number.errors.maxlength && (fpd.number.touched || fpd.number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.identity-number-validation' | translate }}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-2 f-w-600\">{{formTypePersonal == 'edit' ? ('CONTENT.edit-file' | translate) :\n              ('CONTENT.upload-file' | translate) }} <span *ngIf=\"formTypePersonal == 'input'\"\n                class=\"required\">*</span></label>\n            <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n              accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadRequirementDocument($event)\"\n              [ngClass]=\"fpd.url.invalid && fpd.url.touched?'is-invalid':(fpd.url.valid?'is-valid':'')\" />\n            <p class=\"error text-danger small form-text\">\n              {{fpd.url.errors && fpd.url.errors.required && (fpd.url.touched || fpd.url.dirty) ? ('CONTENT.required' |\n              translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n              translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n              Mb.</p>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataRequirementUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataRequirementUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.document_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.document_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name ? e.document_name : e.document_type |\n                          shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataRequirementUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 text-right\">\n        <!-- <button type=\"button\" (click)=\"documentRequirementModalClose()\" [disabled]=\"this.loading\"\n                class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button> -->\n        <button *ngIf=\"haveDocumentPersonal\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n          [disabled]=\"this.loading\" (click)=\"submitRejectParticipantDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{ 'CONTENT.tolak'\n            | translate }} </span>\n        </button>\n        <button *ngIf=\"haveDocumentPersonal\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n          [disabled]=\"this.loading\" (click)=\"submitApprovalParticipantDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n            'CONTENT.setujui' | translate }}</span>\n        </button>\n        <button type=\"submit\" class=\"btn btn-warning btn-sm\"\n          [disabled]=\"participantDocumentForm.invalid || this.loading\" (click)=\"createPersonalDocumentParticipant()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\">\n            <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}</span>\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #paymentAbilityModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"paymentAbilityModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup]=\"abilityDataForm\" class=\"md-float-material form-material\" action=\"javascript:\"\n      (ngSubmit)=\"createSupportingDocument();\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"document-requirements\" required formControlName=\"name\"\n              readonly>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-2 f-w-600\">{{formTypeAbility == 'edit' ? ('CONTENT.edit-file' | translate) :\n              ('CONTENT.upload-file' | translate) }} <span *ngIf=\"formTypePersonal == 'input'\"\n                class=\"required\">*</span></label> <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\"\n              formControlName=\"url\" accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadAbilityPayment($event)\" />\n            <p class=\"error text-danger small form-text\">\n              {{fad.url.errors && fad.url.errors.required && (fad.url.touched || fad.url.dirty) ? ('CONTENT.required' |\n              translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n              translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n              Mb.</p>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataAbilityUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataAbilityUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.supporting_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.supporting_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.supporting_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataAbilityUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 mt-4 text-right\">\n        <button *ngIf=\"haveAbilityDocument\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n          [disabled]=\"this.loading\" (click)=\"submitRejectAbilityDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{ 'CONTENT.tolak'\n            | translate }} </span>\n        </button>\n        <button *ngIf=\"haveAbilityDocument\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n          [disabled]=\"this.loading\" (click)=\"submitApprovalAbilityDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n            'CONTENT.setujui' | translate }}</span>\n        </button>\n        <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"abilityDataForm.invalid || this.loading\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}</span>\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #recommendationLetterRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"recommendationLetterRequirementModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"supportingDataForm\"\n      (ngSubmit)=\"createSupportingDocument();\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-name' | translate }} <span class=\"required\">*</span>\n            </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"pic_name\" name=\"picName\" required maxlength=\"100\"\n              [placeholder]=\"'CONTENT.pic-name' | translate\"\n              [ngClass]=\"fsd.pic_name.invalid && fsd.pic_name.touched?'is-invalid':(fsd.pic_name.valid?'is-valid':'')\">\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">\n              {{ 'ROOT.required' | translate }}</label>\n          </div>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-phone-number' | translate }} <span\n                class=\"required\">*</span> </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"pic_phone_number\" name=\"picPhoneNumber\" required\n              minlength=\"11\" maxlength=\"13\" [placeholder]=\"'CONTENT.placeholder-number' | translate\"\n              [ngClass]=\"fsd.pic_phone_number.invalid && fsd.pic_phone_number.touched?'is-invalid':(fsd.pic_phone_number.valid?'is-valid':'')\">\n            <label\n              *ngIf=\"fsd.pic_phone_number.errors && fsd.pic_phone_number.errors.required && (fsd.pic_phone_number.touched || fsd.pic_phone_number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            <label\n              *ngIf=\"fsd.pic_phone_number.errors && fsd.pic_phone_number.errors.pattern && (fsd.pic_phone_number.touched || fsd.pic_phone_number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            <label\n              *ngIf=\"fsd.pic_phone_number.errors && fsd.pic_phone_number.errors.minlength && (fsd.pic_phone_number.touched || fsd.pic_phone_number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-email' | translate }} <span\n                class=\"required\">*</span> </label>\n            <input type=\"email\" class=\"form-control\" formControlName=\"pic_email_address\" name=\"picEmail\" required\n              pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\" placeholder=\"xxx@gmail.com\"\n              oninput=\"setCustomValidity('')\"\n              [ngClass]=\"fsd.pic_email_address.invalid && fsd.pic_email_address.touched?'is-invalid':(fsd.pic_email_address.valid?'is-valid':'')\"\n              maxlength=\"150\">\n            <label\n              *ngIf=\"fsd.pic_email_address.invalid && (fsd.pic_email_address.dirty || fsd.pic_email_address.touched )\"\n              id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n              'CONTENT.email-match' | translate}}</label>\n          </div>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-address' | translate }} <span\n                class=\"required\">*</span> </label>\n            <textarea type=\"text\" class=\"form-control\" formControlName=\"pic_address\" required maxlength=\"150\"\n              [placeholder]=\"'CONTENT.pic-address' | translate\"\n              [ngClass]=\"fsd.pic_address.invalid && fsd.pic_address.touched?'is-invalid':(fsd.pic_address.valid?'is-valid':'')\"></textarea>\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n              'ROOT.required' | translate }}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.edit-file' | translate }} </label>\n            <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n              [ngClass]=\"fsd.url.invalid && fsd.url.touched?'is-invalid':(fsd.url.valid?'is-valid':'')\"\n              accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadSupportingFile($event)\" />\n            <p class=\"error text-danger small form-text\">\n              {{fsd.url.errors && fsd.url.errors.required && (fsd.url.touched || fsd.url.dirty) ? ('CONTENT.required' |\n              translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n              translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n              Mb.</p>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataRecommendationUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataRecommendationUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.supporting_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.supporting_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.supporting_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataRecommendationUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 mt-4 text-right\">\n        <!-- <button type=\"button\" (click)=\"recommendationLetterRequirementModal.hide();\" [disabled]=\"this.loading\"\n        class=\"btn btn-secondary btn-sm\">\n        <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n      </button> -->\n        <button *ngIf=\"haveSupportingDocument\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n          [disabled]=\"this.loading\" (click)=\"submitSupportingRejected()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{ 'CONTENT.tolak'\n            | translate }} </span>\n        </button>\n        <button *ngIf=\"haveSupportingDocument\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n          [disabled]=\"this.loading\" (click)=\"submitSupportingApproved()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n            'CONTENT.setujui' | translate }}</span>\n        </button>\n        <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"supportingDataForm.invalid || this.loading\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\">\n            <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }} \n          </span>\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #transcriptRequirementModalView [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-lg\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"transcriptRequirementModalView.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"transcriptDataForm\">\n      <div class=\"col-md-12S\">\n        <form [formGroup]=\"transcriptFormlView\">\n          <div class=\"form-group mb-0 mt-0 text-right\">\n            <div class=\"btn-group\">\n              <button type=\"submit\" class=\"btn btn-outline-primary btn-sm\" routerLink=\"/adm-mp-credit-transfer/{{registration_number}}\">\n                <i class=\"fas fa-book-open\"></i> {{'MENU.credit-transfer' | translate}}\n              </button>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">SKS yang telah diampu</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"totalCredit\" readonly>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">Total Mata Kuliah</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"totalCourse\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n                </label>\n                <div *ngIf=\"dataTranscriptUrl.length !== 0\" class=\"row\">\n                  <div class=\"col-12 col-xs-12 col-md-12\">\n                    <div *ngIf=\"dataTranscriptUrl == null\">\n                      <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                    </div>\n                    <div *ngIf=\"dataTranscriptUrl != null\">\n                      <div class=\"card text-left mb-3\">\n                        <div class=\"card-body p-2\">\n                          <a [href]=\"dataTranscriptUrl\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                              class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                            <p class=\"card-text pl-1 mb-0\"> Transkrip Nilai Pendidikan Terakhir\n                            </p>\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div *ngIf=\"dataTranscriptUrl.length == 0\" class=\"row\">\n                  <div class=\"col-12 ml-2\"> Data Tidak Ditemukan!\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"table-responsive pb-6\">\n            <table class=\"table table-striped table-hover table-sm\">\n              <thead class=\"thead-light bg-primarys\">\n                <tr>\n                  <th scope=\"col\" class=\"center-table\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\">{{ 'CONTENT.course-code' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\">{{ 'CONTENT.course-name' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\" class=\"center-table\">{{ 'CONTENT.credit-hour' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\" class=\"center-table\">{{ 'CONTENT.grade' | translate}}</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"tableTranscript?.length != 0\">\n                <tr *ngFor=\"let data of tableTranscript; let i = index;\">\n                  <th class=\"center-table\" scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                  <td class=\"center-table\">{{data.course_code}}\n                  </td>\n                  <td class=\"center-table\">{{ data.course_name }}</td>\n                  <td class=\"center-table\">{{ data.credit_hour }}</td>\n                  <td class=\"center-table\">{{ data.grade }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </form>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #utbkModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeUtbkModals();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"utbkForm\"\n      (ngSubmit)=\"createUtbkDocument()\">\n      <div class=\"row\">\n        <p class=\"col-md-12 mb-0\"><span class=\"required\"><b>* {{'ROOT.required' | translate }}</b></span></p>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.kpu-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"KPUScore\" name=\"KPUScore\" min=\"0\" max=\"1000\"\n            minlength=\"1\" maxlength=\"6\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\" required>\n          <label\n            *ngIf=\"futbk.KPUScore.errors && futbk.KPUScore.errors.required && (futbk.KPUScore.touched || futbk.KPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KPUScore.errors && futbk.KPUScore.errors.max && (futbk.KPUScore.touched || futbk.KPUScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KPUScore.errors && futbk.KPUScore.errors.pattern && (futbk.KPUScore.touched || futbk.KPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pk-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"PKScore\" name=\"PKScore\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.PKScore.errors && futbk.PKScore.errors.required && (futbk.PKScore.touched || futbk.PKScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PKScore.errors && futbk.PKScore.errors.max && (futbk.PKScore.touched || futbk.PKScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PKScore.errors && futbk.PKScore.errors.pattern && (futbk.PKScore.touched || futbk.PKScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pdpu-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"PDPUScore\" name=\"PDPUScore\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.PDPUScore.errors && futbk.PDPUScore.errors.required && (futbk.PDPUScore.touched || futbk.PDPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PDPUScore.errors && futbk.PDPUScore.errors.max && (futbk.PDPUScore.touched || futbk.PDPUScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PDPUScore.errors && futbk.PDPUScore.errors.pattern && (futbk.PDPUScore.touched || futbk.PDPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.kmbdm-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"KMBDMScore\" name=\"KMBDMScore\" required min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\">\n          <label\n            *ngIf=\"futbk.KMBDMScore.errors && futbk.KMBDMScore.errors.required && (futbk.KMBDMScore.touched || futbk.KMBDMScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KMBDMScore.errors && futbk.KMBDMScore.errors.max && (futbk.KMBDMScore.touched || futbk.KMBDMScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KMBDMScore.errors && futbk.KMBDMScore.errors.pattern && (futbk.KMBDMScore.touched || futbk.KMBDMScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.category-utbk' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select class=\"index-up\" name=\"exam-location\" [placeholder]=\"'CONTENT.category-utbk'|translate\"\n            [ngClass]=\"'custom'\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"selectedCategoryUtbk\"\n            [options]=\"listCategoryUtbk\" [ngModelOptions]=\"{standalone: true}\" (selected)=\"changeCategoryUtbk($event)\">\n          </ng-select>\n          <label *ngIf=\"!selectedCategoryUtbk\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate}}</label>\n        </div>\n      </div>\n      <div *ngIf=\"selectedCategoryUtbk\" class=\"row\">\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.math-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"math\" name=\"math\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label *ngIf=\"futbk.math.errors && futbk.math.errors.required && (futbk.math.touched || futbk.math.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"futbk.math.errors && futbk.math.errors.max && (futbk.math.touched || futbk.math.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label *ngIf=\"futbk.math.errors && futbk.math.errors.pattern && (futbk.math.touched || futbk.math.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.physics-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"physics\"\n            [placeholder]=\"'CONTENT.placeholder-utbk'|translate\" name=\"physics\" min=\"0\" max=\"1000\" minlength=\"1\"\n            maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.physics.errors && futbk.physics.errors.required && (futbk.physics.touched || futbk.physics.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.physics.errors && futbk.physics.errors.max && (futbk.physics.touched || futbk.physics.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.physics.errors && futbk.physics.errors.pattern && (futbk.physics.touched || futbk.physics.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.chemical' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"chemical\" name=\"chemical\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.chemical.errors && futbk.chemical.errors.required && (futbk.chemical.touched || futbk.chemical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.chemical.errors && futbk.chemical.errors.max && (futbk.chemical.touched || futbk.chemical.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.chemical.errors && futbk.chemical.errors.pattern && (futbk.chemical.touched || futbk.chemical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.biology' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"biological\" name=\"biological\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.biological.errors && futbk.biological.errors.required && (futbk.biological.touched || futbk.biological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.biological.errors && futbk.biological.errors.max && (futbk.biological.touched || futbk.biological.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.biological.errors && futbk.biological.errors.pattern && (futbk.biological.touched || futbk.biological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.geography' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"geography\" name=\"geography\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.geography.errors && futbk.geography.errors.required && (futbk.geography.touched || futbk.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.geography.errors && futbk.geography.errors.max && (futbk.geography.touched || futbk.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.geography.errors && futbk.geography.errors.pattern && (futbk.geography.touched || futbk.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.historical' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"historical\" name=\"historical\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.historical.errors && futbk.historical.errors.required && (futbk.historical.touched || futbk.historical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.historical.errors && futbk.historical.errors.max && (futbk.historical.touched || futbk.historical.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.historical.errors && futbk.historical.errors.pattern && (futbk.historical.touched || futbk.historical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.sociological' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"sociological\" name=\"sociological\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.sociological.errors && futbk.sociological.errors.required && (futbk.sociological.touched || futbk.sociological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.sociological.errors && futbk.sociological.errors.max && (futbk.sociological.touched || futbk.sociological.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.sociological.errors && futbk.sociological.errors.pattern && (futbk.sociological.touched || futbk.sociological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.economy' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"economy\" name=\"economy\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.economy.errors && futbk.economy.errors.required && (futbk.economy.touched || futbk.economy.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.economy.errors && futbk.economy.errors.max && (futbk.economy.touched || futbk.economy.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.economy.errors && futbk.economy.errors.pattern && (futbk.economy.touched || futbk.economy.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.upload-file' | translate}} </label>\n          <input id=\"utbkFile\" class=\"form-control\" type=\"file\" name=\"utbkFile\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadUtbkDocument($event)\" />\n          <div *ngIf=\"errSize\" class=\"text-danger mt-4 ml-1\">Max 2 MB!</div>\n          <div *ngIf=\"errType\" class=\"text-danger mt-4 ml-1\">Error file!</div>\n        </div>\n        <div class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.evidence' | translate }}\n          </label>\n          <div *ngIf=\"dataUtbkUrl.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataUtbkUrl\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> Nilai UTBK\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataUtbkUrl.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 mt-2 text-right col-md-12\">\n          <button type=\"submit\" class=\"btn btn-warning btn-sm\"\n            [disabled]=\"utbkForm.invalid || !selectedCategoryUtbk || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">\n              <i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}\n            </span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #recommendationS2Modal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\" [loading]=\"loadingRecommendation\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.recommendation-document-S2' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"recommendationS2Modal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"recommendationS2Form\">\n      <app-alert type=\"warning\">\n        <div class=\"col-sm-12 text-center\">\n          <h6>{{ 'CONTENT.send-email-recommendation-info' | translate }}</h6>\n        </div>\n      </app-alert>\n      <div class=\"row\">\n        <h5 class=\"col-md-12\">Rekomendasi Pertama\n          <hr>\n        </h5>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.name' | translate}} <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name_rec1\" name=\"name_rec1\"\n            [placeholder]=\"'CONTENT.recommendation_name_1'|translate\" required maxlength=\"150\"\n            [ngClass]=\"frod.name_rec1.invalid && frod.name_rec1.touched?'is-invalid':(frod.name_rec1.valid?'is-valid':'')\"\n            [readonly]=\"viewRecommendationS2\">\n          <label\n            *ngIf=\"frod.name_rec1.errors && frod.name_rec1.errors.required && (frod.name_rec1.touched || frod.name_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.handphone' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"handphone_rec1\" name=\"handphone_rec1\"\n            [placeholder]=\"'CONTENT.placeholder-number' | translate\" minlength=\"11\" maxlength=\"13\" required\n            [readonly]=\"viewRecommendationS2\"\n            [ngClass]=\"frod.handphone_rec1.invalid && frod.handphone_rec1.touched?'is-invalid':(frod.handphone_rec1.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"frod.handphone_rec1.errors && frod.handphone_rec1.errors.required && (frod.handphone_rec1.touched || frod.handphone_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec1.errors && frod.handphone_rec1.errors.pattern && (frod.handphone_rec1.touched || frod.handphone_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec1.errors && frod.handphone_rec1.errors.minlength && (frod.handphone_rec1.touched || frod.handphone_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.email' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"email_rec1\"\n            pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\"\n            oninput=\"setCustomValidity('')\" name=\"email_rec1\" [placeholder]=\"'CONTENT.recommendation_email_1'|translate\"\n            required [readonly]=\"viewRecommendationS2\" maxlength=\"150\"\n            [ngClass]=\"frod.email_rec1.invalid && (frod.email_rec1.dirty || frod.email_rec1.touched)?'is-invalid':(frod.email_rec1.valid?'is-valid':'')\">\n          <label *ngIf=\"frod.email_rec1.invalid && (frod.email_rec1.dirty || frod.email_rec1.touched )\"\n            id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.email-match' | translate}}</label>\n        </div>\n        <h5 class=\"mt-3 col-md-12\">Rekomendasi Kedua\n          <hr>\n        </h5>\n        <hr>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.name' | translate}} <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name_rec2\" name=\"name_rec2\"\n            [placeholder]=\"'CONTENT.recommendation_name_1'|translate\" required maxlength=\"150\"\n            [readonly]=\"viewRecommendationS2\"\n            [ngClass]=\"frod.name_rec2.invalid && frod.name_rec2.touched?'is-invalid':(frod.name_rec2.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"frod.name_rec2.errors && frod.name_rec2.errors.required && (frod.name_rec2.touched || frod.name_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.handphone' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"handphone_rec2\" name=\"handphone_rec2\"\n            [placeholder]=\"'CONTENT.placeholder-number' | translate\" minlength=\"11\" maxlength=\"13\" required\n            [readonly]=\"viewRecommendationS2\"\n            [ngClass]=\"frod.handphone_rec2.invalid && frod.handphone_rec2.touched?'is-invalid':(frod.handphone_rec2.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"frod.handphone_rec2.errors && frod.handphone_rec2.errors.required && (frod.handphone_rec2.touched || frod.handphone_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec2.errors && frod.handphone_rec2.errors.pattern && (frod.handphone_rec2.touched || frod.handphone_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec2.errors && frod.handphone_rec2.errors.minlength && (frod.handphone_rec2.touched || frod.handphone_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.email' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [readonly]=\"viewRecommendationS2\" formControlName=\"email_rec2\"\n            pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\"\n            oninput=\"setCustomValidity('')\" name=\"email_rec2\" [placeholder]=\"'CONTENT.recommendation_email_1'|translate\"\n            required maxlength=\"150\"\n            [ngClass]=\"frod.email_rec2.invalid && (frod.email_rec2.dirty || frod.email_rec2.touched)?'is-invalid':(frod.email_rec2.valid?'is-valid':'')\">\n          <label *ngIf=\"frod.email_rec2.invalid && (frod.email_rec2.dirty || frod.email_rec2.touched )\"\n            id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.email-match' | translate}}</label>\n        </div>\n        <div class=\"col-md-12 text-right\">\n          <button type=\"button\" (click)=\"recommendationS2Modal.hide();\" [disabled]=\"this.loading\"\n            class=\"btn btn-secondary btn-sm\">\n            <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #proposalModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"proposalModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"proposalForm\"\n      (ngSubmit)=\"createProposalDocument()\">\n      <div class=\"row align-items-center\">\n        <div class=\"text-right col-12 col-md-12\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.proposal-title' | translate }} <span\n              class=\"required\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"title\" [placeholder]=\"'CONTENT.proposal-title'|translate\"\n            required maxlength=\"1000\"\n            [ngClass]=\"fprd.title.invalid && fprd.title.touched?'is-invalid':(fprd.title.valid?'is-valid':'')\"></textarea>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'ROOT.required' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 col-md-12\">\n          <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.edit-file' | translate }} </label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"certificateDetail\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadProposalDocument($event)\"\n            [ngClass]=\"fprd.url.invalid && fprd.url.touched?'is-invalid':(fprd.url.valid?'is-valid':'')\" />\n          <p class=\"error text-danger small form-text\">\n            {{fprd.url.errors && fprd.url.errors.required && (fprd.url.touched || fprd.url.dirty) ? ('CONTENT.required'\n            | translate) : ''}}\n            {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n            translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 5 Mb.\n          </p>\n        </div>\n        <div class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataProposal.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataProposal\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataProposal.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 text-right col-md-12\">\n          <!-- <button type=\"button\" (click)=\"proposalModal.hide();\" [disabled]=\"this.loading\"\n          class=\"btn btn-secondary btn-sm\">\n          <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n        </button> -->\n          <button *ngIf=\"haveDocumentData\" type=\"button\" class=\"btn btn-outline-danger btn-sm\" [disabled]=\"this.loading\"\n            (click)=\"submitRejectProposalDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{\n              'CONTENT.tolak' | translate }} </span>\n          </button>\n          <button *ngIf=\"haveDocumentData\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n            [disabled]=\"this.loading\" (click)=\"submitApprovalProposalDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n              'CONTENT.setujui' | translate }}</span>\n          </button>\n          <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"proposalForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' | translate }}\n            </span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>";
    /***/
  },

  /***/
  "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail-routing.module.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail-routing.module.ts ***!
    \********************************************************************************************************/

  /*! exports provided: DocumentDataDetailRoutingModule */

  /***/
  function srcAppThemeAdmMpDocumentDataDocumentDataDetailDocumentDataDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentDataDetailRoutingModule", function () {
      return DocumentDataDetailRoutingModule;
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


    var _document_data_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./document-data-detail.component */
    "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _document_data_detail_component__WEBPACK_IMPORTED_MODULE_2__["DocumentDataDetailComponent"]
    }];

    var DocumentDataDetailRoutingModule = function DocumentDataDetailRoutingModule() {
      _classCallCheck(this, DocumentDataDetailRoutingModule);
    };

    DocumentDataDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], DocumentDataDetailRoutingModule);
    /***/
  },

  /***/
  "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeAdmMpDocumentDataDocumentDataDetailDocumentDataDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.center-table {\n  text-align: center;\n}\n\ninput[type=text] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ninput[type=number] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.index-up {\n  z-index: 3;\n}\n\n.required {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2FkbS10cmlzYWt0aS9zcmMvYXBwL3RoZW1lL2FkbS1tcC1kb2N1bWVudC1kYXRhL2RvY3VtZW50LWRhdGEtZGV0YWlsL2RvY3VtZW50LWRhdGEtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9hZG0tbXAtZG9jdW1lbnQtZGF0YS9kb2N1bWVudC1kYXRhLWRldGFpbC9kb2N1bWVudC1kYXRhLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBREFDO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7QUNLRjs7QURIQTtFQUNFLFVBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2FkbS1tcC1kb2N1bWVudC1kYXRhL2RvY3VtZW50LWRhdGEtZGV0YWlsL2RvY3VtZW50LWRhdGEtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGR7XG4gIHRhYmxlLWxheW91dDpmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG50aHtcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5jZW50ZXItdGFibGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG5cbiBpbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmluZGV4LXVwIHtcbiAgei1pbmRleDogMztcbn1cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG4iLCJ0ZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG50aCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4uY2VudGVyLXRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5pbmRleC11cCB7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: DocumentDataDetailComponent */

  /***/
  function srcAppThemeAdmMpDocumentDataDocumentDataDetailDocumentDataDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentDataDetailComponent", function () {
      return DocumentDataDetailComponent;
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


    var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/admin-management.service */
    "./src/app/_services/admin-management.service.ts");
    /* harmony import */


    var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/participant.service */
    "./src/app/_services/participant.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_services/broadcaster.service */
    "./src/app/_services/broadcaster.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);

    var DocumentDataDetailComponent =
    /*#__PURE__*/
    function () {
      function DocumentDataDetailComponent(translate, broadcasterService, chartService, userService, route, fb) {
        var _this2 = this;

        _classCallCheck(this, DocumentDataDetailComponent);

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
          geography: ['']
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
          certificate_score: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
        });
        this.publikasiForm = this.fb.group({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)])),
          position: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(500)])),
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
          publication_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
          link: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(100)]))
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
          url: ['']
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
          pic_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)])]
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
          url: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('')
        });
        this.recommendationS2Form = this.fb.group({
          name_rec1: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)])),
          handphone_rec1: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')])),
          email_rec1: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)])),
          name_rec2: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)])),
          handphone_rec2: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')])),
          email_rec2: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(150)]))
        });
        translate.setDefaultLang(localStorage.getItem('lang'));
        this.translate.get('ROOT.no').subscribe(function (l) {
          _this2.no = l;
        });
        this.translate.get('ROOT.yes').subscribe(function (l) {
          _this2.yes = l;
        });
        this.translate.get('ROOT.delete_failed').subscribe(function (l) {
          _this2.failedDel = l;
        });
        this.translate.get('ROOT.delete_confirmation').subscribe(function (l) {
          _this2.sure = l;
        });
        this.translate.get('ROOT.confirmation').subscribe(function (l) {
          _this2.confirmation = l;
        });
        this.translate.get('ROOT.delete_success').subscribe(function (l) {
          _this2.successDel = l;
        });
        this.translate.get('CONTENT.approve-question').subscribe(function (l) {
          _this2.approve = l;
        });
        this.translate.get('CONTENT.rejected-question').subscribe(function (l) {
          _this2.rejected = l;
        });
        broadcasterService.changeLangBroadcast$.subscribe(function (res) {
          translate.setDefaultLang(res.lang);

          _this2.translate.get('ROOT.no').subscribe(function (l) {
            _this2.no = l;
          });

          _this2.translate.get('ROOT.yes').subscribe(function (l) {
            _this2.yes = l;
          });

          _this2.translate.get('ROOT.delete_failed').subscribe(function (l) {
            _this2.failedDel = l;
          });

          _this2.translate.get('ROOT.delete_confirmation').subscribe(function (l) {
            _this2.sure = l;
          });

          _this2.translate.get('ROOT.confirmation').subscribe(function (l) {
            _this2.confirmation = l;
          });

          _this2.translate.get('ROOT.delete_success').subscribe(function (l) {
            _this2.successDel = l;
          });

          _this2.translate.get('CONTENT.approve-question').subscribe(function (l) {
            _this2.approve = l;
          });

          _this2.translate.get('CONTENT.rejected-question').subscribe(function (l) {
            _this2.rejected = l;
          });
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
        this.listCategoryUtbk = [{
          value: '1',
          label: 'SAINTEK'
        }, {
          value: '2',
          label: 'SOSHUM'
        }];
      }

      _createClass(DocumentDataDetailComponent, [{
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
          this.loadRegistrationDocumentData();
          this.loadSemesterDataFilter();
          this.loadRangeScoreDataFilter();
          this.loadCertificateLevelDataFilter();
          this.loadCertificateTypeDataFilter();
        }
      }, {
        key: "changeSemesters",
        value: function changeSemesters(event) {
          if (event.value) {
            this.showMapel = true;
          } else {
            this.showMapel = false;
          }
        }
      }, {
        key: "loadSemesterChecked",
        value: function loadSemesterChecked() {
          var _this3 = this;

          this.userService.getRaportSemesters("?registration_number=".concat(this.registration_number, "&is_checked=1")).subscribe(function (res) {
            if (res.length !== 0) {
              for (var i = 0; i < res.length; i++) {
                var x = res[i].key_name;

                if (x == 'math') {
                  _this3.isMathStudy = true;

                  _this3.reportCardDataForm.get('math').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));

                  _this3.reportCardDataForm.get('math').updateValueAndValidity();
                } else if (x == 'bahasa') {
                  _this3.isBahasaStudy = true;

                  _this3.reportCardDataForm.get('bahasa').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));

                  _this3.reportCardDataForm.get('bahasa').updateValueAndValidity();
                } else if (x == 'english') {
                  _this3.isEnglishStudy = true;

                  _this3.reportCardDataForm.get('english').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));

                  _this3.reportCardDataForm.get('english').updateValueAndValidity();
                } else if (x == 'chemical') {
                  _this3.chemicalStudy = true;

                  _this3.reportCardDataForm.get('chemical').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));

                  _this3.reportCardDataForm.get('chemical').updateValueAndValidity();
                } else if (x == 'biology') {
                  _this3.biologyStudy = true;

                  _this3.reportCardDataForm.get('biology').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));

                  _this3.reportCardDataForm.get('biology').updateValueAndValidity();
                } else if (x == 'physics') {
                  _this3.physicsStudy = true;

                  _this3.reportCardDataForm.get('physics').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));

                  _this3.reportCardDataForm.get('physics').updateValueAndValidity();
                } else if (x == 'economy') {
                  _this3.economyStudy = true;

                  _this3.reportCardDataForm.get('economy').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));

                  _this3.reportCardDataForm.get('economy').updateValueAndValidity();
                } else if (x == 'sociological') {
                  _this3.sociologicalStudy = true;

                  _this3.reportCardDataForm.get('sociological').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));

                  _this3.reportCardDataForm.get('sociological').updateValueAndValidity();
                } else if (x == 'geography') {
                  _this3.geographyStudy = true;

                  _this3.reportCardDataForm.get('geography').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));

                  _this3.reportCardDataForm.get('geography').updateValueAndValidity();
                }
              }

              _this3.keyName = res;
            }
          });
        }
      }, {
        key: "changeCategoryUtbk",
        value: function changeCategoryUtbk(event) {
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
          } else {
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
      }, {
        key: "getPublicationTypeLists",
        value: function getPublicationTypeLists() {
          var _this4 = this;

          this.userService.getPublicationTypeList().subscribe(function (response) {
            _this4.listPublicationType = response && response.map(function (value) {
              return {
                value: value.id.toString(),
                label: value.type
              };
            });
          }, function (err) {
            _this4.loadError();
          });
        }
      }, {
        key: "getPublicationPositionLists",
        value: function getPublicationPositionLists() {
          var _this5 = this;

          this.userService.getPublicationPositionList().subscribe(function (response) {
            _this5.listWriterPosition = response && response.map(function (value) {
              return {
                value: value.id.toString(),
                label: value.type
              };
            });
          }, function (err) {
            _this5.loadError();
          });
        }
      }, {
        key: "loadCertificateLevelDataFilter",
        value: function loadCertificateLevelDataFilter() {
          var _this6 = this;

          this.loadFilter = true;
          this.userService.getCertificateLevelData().subscribe(function (filterArray) {
            var dataCertificateLevel = [];
            var x;

            for (var i = 0; i < filterArray.length; i++) {
              x = {
                value: filterArray[i].id.toString(),
                label: filterArray[i].type
              };
              dataCertificateLevel.push(x);
              _this6.listCertificateLevel = dataCertificateLevel;
            }

            _this6.loadFilter = false;
          }, function (err) {
            _this6.loadError();

            _this6.loadFilter = false;
          });
          this.loading = false;
        }
      }, {
        key: "loadCertificateTypeDataFilter",
        value: function loadCertificateTypeDataFilter() {
          var _this7 = this;

          this.loadFilter = true;
          this.userService.getCertificateTypeData().subscribe(function (filterArray) {
            var dataCertificateType = [];
            var x;

            for (var i = 0; i < filterArray.length; i++) {
              x = {
                value: filterArray[i].id.toString(),
                label: filterArray[i].type
              };
              dataCertificateType.push(x);
              _this7.listCertificateType = dataCertificateType;
            }

            _this7.loadFilter = false;
          }, function (err) {
            _this7.loadError();

            _this7.loadFilter = false;
          });
          this.loading = false;
        }
      }, {
        key: "loadRegistrationDocumentData",
        value: function loadRegistrationDocumentData() {
          var _this8 = this;

          this.loadtableRegistrationDocument = true;
          this.userService.getRegistrationListParticipantData("registration_number=".concat(this.registration_number)).subscribe(function (result) {
            _this8.chartService.getSelectionDocument("selection_id=".concat(result.data[0]['selection_path_id'], "&active_status=true")).subscribe(function (response) {
              _this8.tableData1 = response.data;

              _this8.dtTrigger.next();

              _this8.loadtableRegistrationDocument = false;
            }, function (err) {
              _this8.loadtableRegistrationDocument = false;
            });
          });
        }
      }, {
        key: "loadDetailRegistrationDocumentData",
        value: function loadDetailRegistrationDocumentData(data) {
          var _this9 = this;

          this.loading = true;
          this.documentId = data.document_id;

          if (data.document_type_id == 6) {
            this.chartService.getRegistrationDocument("".concat(this.registration_number, "&document_type_id=6")).subscribe(function (response2) {
              if (response2.data.length !== 0) {
                _this9.loading = false;
                _this9.loadingDocumentCard = false;
                _this9.documentTypePersonal = response2.data[0].document_type_id;
                _this9.documentidPersonal = response2.data[0].document_id;
                _this9.isUpdatedRequirement = true;

                if (response2.data[0].url !== null) {
                  _this9.haveDocumentPersonal = true;
                } else {
                  _this9.haveDocumentPersonal = false;
                }

                _this9.participantDocumentForm.get('url').clearValidators();

                _this9.participantDocumentForm.get('url').updateValueAndValidity();

                _this9.dataRequirementUrl = response2.data;

                _this9.documentRequirementModal.show();

                _this9.participantDocumentForm.patchValue({
                  name: response2.data[0].document_type
                });

                _this9.participantDocumentForm.patchValue({
                  url: ''
                });

                _this9.participantDocumentForm.get('url').reset();

                if (response2.data[0].document_url !== null) {
                  _this9.haveDocumentPersonal = true;
                } else {
                  _this9.haveDocumentPersonal = false;
                }

                if (response2.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 7) {
            this.loading = false;
            this.documentTypeId = data.document_type_id;
            this.loadDetailReportCardFileData(this.registration_number);
            this.loadSemesterChecked();
            this.reportCardRequirementModal.show();
          } else if (data.document_type_id == 8) {
            this.userService.getReportCardData("registration_number=".concat(this.registration_number, "&document_type_id=8")).subscribe(function (res) {
              if (res.data.length !== 0) {
                _this9.loading = false;

                _this9.transcriptRequirementModal.show();

                _this9.formType = 'edit';
                _this9.loadingDocumentCard = false;
                _this9.isUpdatedTranscript = true;
                _this9.isTranscript = true;
                _this9.documentTypeId = 8;
                _this9.documentTranscriptId = res.data[0].document_id;
                _this9.documentReportTranscriptId = res.data[0].document_report_card_id;

                _this9.transcriptDataForm.patchValue({
                  name: 'Transkrip Nilai Pendidikan Terakhir'
                });

                _this9.transcriptDataForm.get('url').clearValidators();

                _this9.transcriptDataForm.get('url').updateValueAndValidity();

                _this9.transcriptDataForm.get('gpa').clearValidators();

                _this9.transcriptDataForm.get('gpa').updateValueAndValidity();

                _this9.dataTranscriptUrlDoc = res.data;

                if (res.data[0].url !== null) {
                  _this9.haveTranscriptDoc = true;
                } else {
                  _this9.haveTranscriptDoc = false;
                }

                if (res.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }
              } else {
                _this9.noDataFoundAlert();
              }
            }, function (reason) {
              _this9.loadError();

              _this9.loading = false;
            });
          } else if (data.document_type_id == 9) {
            this.userService.getDocumentSupportingData("registration_number=".concat(this.registration_number, "&document_type_id=9")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this9.documentRecommendationId = response.data[0].document_id;
                _this9.documentSupportingId = response.data[0].document_supporting_id;

                _this9.supportingDataForm.patchValue({
                  name: 'Surat Rekomendasi'
                });

                _this9.supportingDataForm.patchValue({
                  pic_email_address: response.data[0].pic_email_address
                });

                _this9.supportingDataForm.patchValue({
                  pic_name: response.data[0].pic_name
                });

                _this9.supportingDataForm.patchValue({
                  pic_phone_number: response.data[0].pic_phone_number
                });

                _this9.supportingDataForm.patchValue({
                  pic_address: response.data[0].pic_address
                });

                _this9.supportingDataForm.get('url').clearValidators();

                _this9.supportingDataForm.get('url').updateValueAndValidity();

                _this9.dataRecommendationUrl = response.data;
                _this9.haveSupportingDocument = true;

                _this9.recommendationLetterRequirementModal.show();

                _this9.loadingDocumentCard = false;
                _this9.loading = false;

                if (response.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 10) {
            this.documentTypeId = data.document_type_id;
            this.loading = false;
            this.loadDetailCertificateFileData(this.registration_number);
            this.certificateRequirementModal.show();
          } else if (data.document_type_id == 11) {
            this.userService.getDocumentSupportingData("registration_number=".concat(this.registration_number, "&document_type_id=", 11)).subscribe(function (res) {
              if (res.data.length !== 0) {
                _this9.loading = false;
                _this9.documentAbilitytId = res.data[0].document_id;
                _this9.documentAbilitySupportingId = res.data[0].document_supporting_id;

                _this9.abilityDataForm.patchValue({
                  name: 'Surat Kemampuan Pembayaran'
                });

                _this9.abilityDataForm.get('url').clearValidators();

                _this9.abilityDataForm.get('url').updateValueAndValidity();

                _this9.dataAbilityUrl = res.data;
                _this9.loadingDocumentCard = false;
                _this9.haveAbilityDocument = true;

                _this9.paymentAbilityModal.show();

                if (res.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }
              } else {
                _this9.noDataFoundAlert();
              }
            }, function (reason) {
              _this9.loadError();

              _this9.loading = false;
            });
          } else if (data.document_type_id == 12) {
            this.userService.getUtbkDocument("?registration_number=".concat(this.registration_number)).subscribe(function (response) {
              if (response.length !== 0) {
                _this9.loading = false;
                _this9.documentTypeUtbk = 12;
                _this9.documentId = response[0].document_id;
                _this9.documentUtbkId = response[0].id;

                _this9.utbkForm.patchValue({
                  KPUScore: response[0].general_reasoning
                });

                _this9.utbkForm.patchValue({
                  PKScore: response[0].quantitative_knowledge
                });

                _this9.utbkForm.patchValue({
                  PDPUScore: response[0].comprehension_general_knowledge
                });

                _this9.utbkForm.patchValue({
                  KMBDMScore: response[0].comprehension_reading_knowledge
                });

                _this9.utbkForm.patchValue({
                  math: response[0].math
                });

                _this9.utbkForm.patchValue({
                  physics: response[0].physics
                });

                _this9.utbkForm.patchValue({
                  biological: response[0].biology
                });

                _this9.utbkForm.patchValue({
                  chemical: response[0].chemical
                });

                _this9.utbkForm.patchValue({
                  geography: response[0].geography
                });

                _this9.utbkForm.patchValue({
                  economy: response[0].economy
                });

                _this9.utbkForm.patchValue({
                  historical: response[0].historical
                });

                _this9.utbkForm.patchValue({
                  sociological: response[0].sociological
                });

                _this9.utbkForm.patchValue({
                  url: ''
                });

                _this9.dataUtbkUrl = response;
                _this9.selectedCategoryUtbk = response[0].major_type && response[0].major_type.toString();

                if (response[0].major_type === 1) {
                  _this9.isSaintek = true;
                } else {
                  _this9.isSaintek = false;
                }

                if (response[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }

                _this9.utbkModals.show();
              }
            });
          } else if (data.document_type_id == 13) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=13")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this9.documentTypeStudy = response.data[0].document_type_id;
                _this9.isTPADocument = true;
                _this9.isCoPromotor = false;
                _this9.isIPKDocument = false;
                _this9.isEPRTDocument = false;
                _this9.isPromotor = false;
                _this9.loadingDocumentCard = false;
                _this9.loading = false;
                _this9.documentStudyId = response.data[0].document_study_id;
                _this9.docid = response.data[0].document_id;

                _this9.eprtAndTpaForm.patchValue({
                  name: 'TPA'
                });

                _this9.eprtAndTpaForm.patchValue({
                  eprt_tpa_score: response.data[0].score
                });

                _this9.eprtAndTpaForm.patchValue({
                  publication_year: response.data[0].year
                });

                _this9.eprtAndTpaForm.get('url').clearValidators();

                _this9.eprtAndTpaForm.get('url').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('gpa').clearValidators();

                _this9.eprtAndTpaForm.get('gpa').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('nameCoPromotor').clearValidators();

                _this9.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();

                _this9.dataStudyUrl = response.data;

                if (response.data[0].document_url !== null) {
                  _this9.haveDocumentStudy = true;
                } else {
                  _this9.haveDocumentStudy = false;
                }

                if (response.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }

                _this9.eprtAndTpaModal.show();
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 14) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=14")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this9.documentTypeStudy = response.data[0].document_type_id;
                _this9.isIPKDocument = true;
                _this9.isTPADocument = false;
                _this9.isEPRTDocument = false;
                _this9.isCoPromotor = false;
                _this9.isPromotor = false;
                _this9.loadingDocumentCard = false;
                _this9.loading = false;
                _this9.documentStudyId = response.data[0].document_study_id;
                _this9.docid = response.data[0].document_id;

                _this9.eprtAndTpaForm.patchValue({
                  name: 'IPK'
                });

                _this9.eprtAndTpaForm.patchValue({
                  eprt_tpa_score: ''
                });

                _this9.eprtAndTpaForm.patchValue({
                  gpa: response.data[0].score
                });

                _this9.eprtAndTpaForm.get('url').clearValidators();

                _this9.eprtAndTpaForm.get('url').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);

                _this9.eprtAndTpaForm.get('gpa').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();

                _this9.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('publication_year').clearValidators();

                _this9.eprtAndTpaForm.get('publication_year').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('nameCoPromotor').clearValidators();

                _this9.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();

                _this9.dataStudyUrl = response.data;

                if (response.data[0].document_url !== null) {
                  _this9.haveDocumentStudy = true;
                } else {
                  _this9.haveDocumentStudy = false;
                }

                if (response.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }

                _this9.eprtAndTpaModal.show();
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 15) {
            this.userService.getDocumentRecommendation("?registration_number=".concat(this.registration_number)).subscribe(function (response) {
              if (response.length !== 0) {
                _this9.loading = false;
                _this9.loadingRecommendation = false;
                _this9.formTypeRecommendationS2 = 'view';
                _this9.viewRecommendationS2 = true;
                _this9.loadingDocumentCard = false;
                _this9.idRecommendation1 = response[0].id;
                _this9.idRecommendation2 = response[1].id;

                _this9.recommendationS2Form.patchValue({
                  name_rec1: response[0].name
                });

                _this9.recommendationS2Form.patchValue({
                  handphone_rec1: response[0].handphone
                });

                _this9.recommendationS2Form.patchValue({
                  email_rec1: response[0].email
                });

                _this9.recommendationS2Form.patchValue({
                  name_rec2: response[1].name
                });

                _this9.recommendationS2Form.patchValue({
                  handphone_rec2: response[1].handphone
                });

                _this9.recommendationS2Form.patchValue({
                  email_rec2: response[1].email
                });

                _this9.recommendationS2Modal.show();
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 16) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=16")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this9.documentTypeStudy = response.data[0].document_type_id;
                _this9.isCoPromotor = false;
                _this9.isPromotor = true;
                _this9.isIPKDocument = false;
                _this9.isTPADocument = false;
                _this9.isEPRTDocument = false;
                _this9.loading = false;
                _this9.loadingDocumentCard = false;
                _this9.documentStudyId = response.data[0].document_study_id;
                _this9.docid = response.data[0].document_id;

                _this9.eprtAndTpaForm.patchValue({
                  name: 'Kesediaan Promotor'
                });

                _this9.eprtAndTpaForm.get('url').clearValidators();

                _this9.eprtAndTpaForm.get('url').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();

                _this9.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('gpa').clearValidators();

                _this9.eprtAndTpaForm.get('gpa').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('publication_year').clearValidators();

                _this9.eprtAndTpaForm.get('publication_year').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('nameCoPromotor').clearValidators();

                _this9.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();

                _this9.dataStudyUrl = response.data;

                if (response.data[0].document_url !== null) {
                  _this9.haveDocumentStudy = true;
                } else {
                  _this9.haveDocumentStudy = false;
                }

                if (response.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }

                _this9.eprtAndTpaModal.show();
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 17) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=17")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this9.haveDocumentData = true;
                _this9.documentTypeStudy = response.data[0].document_type_id;
                _this9.isEprtUpdated = true;
                _this9.isProposal = true;
                _this9.loadingDocumentCard = false;
                _this9.loading = false;
                _this9.documentStudyId = response.data[0].document_study_id;
                _this9.docid = response.data[0].document_id;

                _this9.proposalForm.patchValue({
                  title: response.data[0].title
                });

                _this9.proposalForm.get('url').clearValidators();

                _this9.proposalForm.get('url').updateValueAndValidity();

                _this9.proposalForm.get('title').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(1000)]));

                _this9.proposalForm.get('title').updateValueAndValidity();

                _this9.dataProposal = response.data;

                if (response.data[0].document_url !== null) {
                  _this9.haveProposalDocument = true;
                } else {
                  _this9.haveProposalDocument = true;
                }

                if (response.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }

                _this9.proposalModal.show();
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 18) {
            this.chartService.getRegistrationDocument("".concat(this.registration_number, "&document_type_id=18")).subscribe(function (response2) {
              if (response2.data.length !== 0) {
                _this9.isIjazahS1 = true;
                _this9.isIjazahS2 = false;
                _this9.isPortofolio = false;
                _this9.loadingDocumentCard = false;
                _this9.loading = false;
                _this9.documentTypeIjazah = response2.data[0].document_type_id;
                _this9.docid = response2.data[0].document_id;

                _this9.ijazahForm.patchValue({
                  name: response2.data[0].document_type
                });

                _this9.ijazahForm.get('url').clearValidators();

                _this9.ijazahForm.get('url').updateValueAndValidity();

                _this9.dataIjazah = response2.data;

                if (response2.data[0].document_url !== null) {
                  _this9.haveDocumentIjazah = true;
                } else {
                  _this9.haveDocumentIjazah = false;
                }

                if (response2.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }

                _this9.ijazahModals.show();
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 19) {
            this.chartService.getRegistrationDocument("".concat(this.registration_number, "&document_type_id=19")).subscribe(function (response2) {
              if (response2.data.length !== 0) {
                _this9.isIjazahS1 = false;
                _this9.isIjazahS2 = true;
                _this9.isPortofolio = false;
                _this9.loadingDocumentCard = false;
                _this9.loading = false;
                _this9.documentTypeIjazah = response2.data[0].document_type_id;
                _this9.docid = response2.data[0].document_id;

                _this9.ijazahForm.patchValue({
                  name: response2.data[0].document_type
                });

                _this9.ijazahForm.get('url').clearValidators();

                _this9.ijazahForm.get('url').updateValueAndValidity();

                _this9.dataIjazah = response2.data;

                if (response2.data[0].document_url !== null) {
                  _this9.haveDocumentIjazah = true;
                } else {
                  _this9.haveDocumentIjazah = false;
                }

                if (response2.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }

                _this9.ijazahModals.show();
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 20) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=20")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this9.loading = false;
                _this9.formTypeStudy = 'edit';

                if (response.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }

                _this9.haveDocumentData = true;
                _this9.documentTypeStudy = response.data[0].document_type_id;
                _this9.isEprtUpdated = true;
                _this9.isPromotor = false;
                _this9.isResidensi = true;
                _this9.isSuratIjinAtasan = false;
                _this9.isCoPromotor = false;
                _this9.isIPKDocument = false;
                _this9.isTPADocument = false;
                _this9.loadingDocumentCard = false;
                _this9.isEPRTDocument = false;
                _this9.documentStudyId = response.data[0].document_study_id;
                _this9.docid = response.data[0].document_id;

                _this9.eprtAndTpaForm.patchValue({
                  name: response.data[0].document_name
                });

                _this9.eprtAndTpaForm.get('url').clearValidators();

                _this9.eprtAndTpaForm.get('url').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();

                _this9.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('gpa').clearValidators();

                _this9.eprtAndTpaForm.get('gpa').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('publication_year').clearValidators();

                _this9.eprtAndTpaForm.get('publication_year').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('nameCoPromotor').clearValidators();

                _this9.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();

                _this9.dataStudyUrl = response.data;

                if (response.data[0].document_url !== null) {
                  _this9.haveDocumentStudy = true;
                } else {
                  _this9.haveDocumentStudy = false;
                }

                _this9.eprtAndTpaModal.show();
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 21) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=21")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this9.loading = false;
                _this9.formTypeStudy = 'edit';

                if (response.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }

                _this9.haveDocumentData = true;
                _this9.documentTypeStudy = response.data[0].document_type_id;
                _this9.isEprtUpdated = true;
                _this9.isPromotor = false;
                _this9.isResidensi = false;
                _this9.isSuratIjinAtasan = true;
                _this9.isCoPromotor = false;
                _this9.isIPKDocument = false;
                _this9.isTPADocument = false;
                _this9.loadingDocumentCard = false;
                _this9.isEPRTDocument = false;
                _this9.documentStudyId = response.data[0].document_study_id;
                _this9.docid = response.data[0].document_id;

                _this9.eprtAndTpaForm.patchValue({
                  name: response.data[0].document_name
                });

                _this9.eprtAndTpaForm.get('url').clearValidators();

                _this9.eprtAndTpaForm.get('url').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();

                _this9.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('gpa').clearValidators();

                _this9.eprtAndTpaForm.get('gpa').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('publication_year').clearValidators();

                _this9.eprtAndTpaForm.get('publication_year').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('nameCoPromotor').clearValidators();

                _this9.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();

                _this9.dataStudyUrl = response.data;

                if (response.data[0].document_url !== null) {
                  _this9.haveDocumentStudy = true;
                } else {
                  _this9.haveDocumentStudy = false;
                }

                _this9.eprtAndTpaModal.show();
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 22) {
            this.chartService.getRegistrationDocument("".concat(this.registration_number, "&document_type_id=22")).subscribe(function (response2) {
              if (response2.data.length !== 0) {
                _this9.haveDocumentIjazah = true;
                _this9.loading = false;
                _this9.isIjazahS1 = false;
                _this9.isIjazahS2 = false;
                _this9.isPortofolio = true;
                _this9.loadingDocumentCard = false;

                if (response2.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }

                _this9.documentTypeIjazah = response2.data[0].document_type_id;
                _this9.docid = response2.data[0].document_id;

                _this9.ijazahForm.patchValue({
                  link_document: response2.data[0].document_url
                });

                _this9.ijazahForm.patchValue({
                  name: response2.data[0].document_type
                });

                _this9.ijazahForm.get('url').clearValidators();

                _this9.ijazahForm.get('url').updateValueAndValidity();

                _this9.ijazahForm.get('name').clearValidators();

                _this9.ijazahForm.get('name').updateValueAndValidity();

                _this9.dataIjazah = response2.data;

                _this9.ijazahModals.show();
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 23) {
            this.userService.getReportCardData("registration_number=".concat(this.registration_number, "&document_type_id=23")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this9.transcriptRequirementModal.show();

                _this9.documentTypeId = 23;
                _this9.loading = false;
                _this9.isTranscript = false;
                _this9.loadingDocumentCard = false;
                _this9.documentTranscriptId = response.data[0].document_id;
                _this9.documentReportTranscriptId = response.data[0].document_report_card_id;

                _this9.transcriptDataForm.patchValue({
                  name: 'Transkrip Ijazah S1'
                });

                _this9.transcriptDataForm.patchValue({
                  gpa: response.data[0].gpa
                });

                _this9.transcriptDataForm.get('url').clearValidators();

                _this9.transcriptDataForm.get('url').updateValueAndValidity();

                _this9.transcriptDataForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);

                _this9.transcriptDataForm.get('gpa').updateValueAndValidity();

                _this9.dataTranscriptUrlDoc = response.data;

                if (response.data[0].url !== null) {
                  _this9.haveTranscriptDoc = true;
                } else {
                  _this9.haveTranscriptDoc = false;
                }

                if (response.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 24) {
            this.userService.getReportCardData("registration_number=".concat(this.registration_number, "&document_type_id=24")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this9.transcriptRequirementModal.show();

                _this9.documentTypeId = 24;
                _this9.loading = false;
                _this9.isTranscript = false;
                _this9.loadingDocumentCard = false;
                _this9.documentTranscriptId = response.data[0].document_id;
                _this9.documentReportTranscriptId = response.data[0].document_report_card_id;

                _this9.transcriptDataForm.patchValue({
                  name: 'Transkrip Ijazah S2'
                });

                _this9.transcriptDataForm.patchValue({
                  gpa: response.data[0].gpa
                });

                _this9.transcriptDataForm.get('url').clearValidators();

                _this9.transcriptDataForm.get('url').updateValueAndValidity();

                _this9.transcriptDataForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);

                _this9.transcriptDataForm.get('gpa').updateValueAndValidity();

                _this9.dataTranscriptUrlDoc = response.data;

                if (response.data[0].url !== null) {
                  _this9.haveTranscriptDoc = true;
                } else {
                  _this9.haveTranscriptDoc = false;
                }

                if (response.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 25) {
            this.userService.getTranscriptDocument("?registration_number=".concat(this.registration_number)).subscribe(function (response) {
              if (response.length !== 0) {
                var x = response[0].id;

                _this9.userService.getTranscriptDocumentDetails("?document_transcript_id=".concat(x)).subscribe(function (response) {
                  if (response.length !== 0) {
                    _this9.formType = 'view';
                    _this9.tableTranscript = response.courses;
                    _this9.isUpdatedTranscript = true;
                    _this9.documentTranscriptId = response.id;

                    _this9.transcriptFormlView.patchValue({
                      name: 'Transkrip Nilai Kredit Transfer '
                    });

                    _this9.transcriptFormlView.patchValue({
                      totalCredit: response.total_credit
                    });

                    _this9.transcriptFormlView.patchValue({
                      totalCourse: response.total_course
                    });

                    _this9.dataTranscriptUrl = response.url;
                    _this9.loadingDocumentCard = false;

                    _this9.transcriptRequirementModalView.show();

                    _this9.loading = false;
                  }
                });
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 26) {
            this.getTablePublication();
            this.publicationDataModals.show();
            this.documentPublicationTypeId = 26;
            this.loadingDocumentCard = false;
            this.loading = false;
          } else if (data.document_type_id == 27) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=27")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this9.haveDocumentData = true;
                _this9.documentTypeStudy = response.data[0].document_type_id;
                _this9.isCoPromotor = true;
                _this9.isPromotor = false;
                _this9.isIPKDocument = false;
                _this9.isTPADocument = false;
                _this9.loadingDocumentCard = false;
                _this9.isEPRTDocument = false;
                _this9.isResidensi = false;
                _this9.isSuratIjinAtasan = false;
                _this9.loading = false;
                _this9.documentStudyId = response.data[0].document_study_id;
                _this9.docid = response.data[0].document_id;

                _this9.eprtAndTpaForm.patchValue({
                  nameCoPromotor: response.data[0].document_name
                });

                _this9.eprtAndTpaForm.patchValue({
                  name: response.data[0].document_description
                });

                _this9.eprtAndTpaForm.get('url').clearValidators();

                _this9.eprtAndTpaForm.get('url').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();

                _this9.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('gpa').clearValidators();

                _this9.eprtAndTpaForm.get('gpa').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('publication_year').clearValidators();

                _this9.eprtAndTpaForm.get('publication_year').updateValueAndValidity();

                _this9.dataStudyUrl = response.data;

                if (response.data[0].document_url !== null) {
                  _this9.haveDocumentStudy = true;
                } else {
                  _this9.haveDocumentStudy = false;
                }

                if (response.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }

                _this9.eprtAndTpaModal.show();
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 28) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=28")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this9.haveDocumentData = true;
                _this9.documentTypeStudy = response.data[0].document_type_id;
                _this9.isCoPromotor = false;
                _this9.isPromotor = false;
                _this9.isIPKDocument = false;
                _this9.isTPADocument = false;
                _this9.loadingDocumentCard = false;
                _this9.isEPRTDocument = true;
                _this9.isResidensi = false;
                _this9.isSuratIjinAtasan = false;
                _this9.loading = false;
                _this9.documentStudyId = response.data[0].document_study_id;
                _this9.docid = response.data[0].document_id;

                _this9.eprtAndTpaForm.patchValue({
                  name: response.data[0].document_name
                });

                _this9.eprtAndTpaForm.patchValue({
                  eprt_tpa_score: response.data[0].score
                });

                _this9.eprtAndTpaForm.patchValue({
                  publication_year: response.data[0].year
                });

                _this9.eprtAndTpaForm.get('url').clearValidators();

                _this9.eprtAndTpaForm.get('url').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('gpa').clearValidators();

                _this9.eprtAndTpaForm.get('gpa').updateValueAndValidity();

                _this9.eprtAndTpaForm.get('nameCoPromotor').clearValidators();

                _this9.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();

                _this9.dataStudyUrl = response.data;

                if (response.data[0].document_url !== null) {
                  _this9.haveDocumentStudy = true;
                } else {
                  _this9.haveDocumentStudy = false;
                }

                if (response.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }

                _this9.eprtAndTpaModal.show();
              } else {
                _this9.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 1 || data.document_type_id == 2 || data.document_type_id == 3 || data.document_type_id == 4 || data.document_type_id == 5) {
            this.userService.getPersonalDocumentData("".concat(this.participantId, "&document_type_id=").concat(data.document_type_id)).subscribe(function (res) {
              if (res.data.length !== 0) {
                _this9.loading = false;
                _this9.loadingDocumentCard = false;
                _this9.documentTypePersonal = res.data[0].document_type_id;
                _this9.documentidPersonal = res.data[0].document_id;
                _this9.isUpdatedRequirement = true;

                _this9.participantDocumentForm.get('url').clearValidators();

                _this9.participantDocumentForm.get('url').updateValueAndValidity();

                _this9.dataRequirementUrl = res.data;

                _this9.documentRequirementModal.show();

                _this9.participantDocumentForm.patchValue({
                  name: res.data[0].document_name
                });

                _this9.participantDocumentForm.patchValue({
                  url: ''
                });

                if (_this9.documentTypePersonal == 1) {
                  _this9.participantDocumentForm.patchValue({
                    number: res.data[0].number
                  });

                  _this9.participantDocumentForm.get('number').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(16)]));

                  _this9.participantDocumentForm.get('number').updateValueAndValidity();

                  _this9.isShowIdentityNumber = true;
                } else {
                  _this9.isShowIdentityNumber = false;

                  _this9.participantDocumentForm.patchValue({
                    number: ''
                  });

                  _this9.participantDocumentForm.get('number').clearValidators();

                  _this9.participantDocumentForm.get('number').updateValueAndValidity();
                }

                if (res.data[0].document_url !== null) {
                  _this9.haveDocumentPersonal = true;
                } else {
                  _this9.haveDocumentPersonal = false;
                }

                if (res.data[0].document_status == 'approved') {
                  _this9.approvedStatus = true;
                } else {
                  _this9.approvedStatus = false;
                }
              } else {
                _this9.noDataFoundAlert();
              }
            });
          }
        }
      }, {
        key: "getTablePublication",
        value: function getTablePublication() {
          var _this10 = this;

          this.loadTablePublication = true;
          this.userService.getDocumentPublication("?participant_id=".concat(this.participantId)).subscribe(function (response) {
            _this10.tableDataPublication = response;
            _this10.totalRecord = response.length;
            _this10.loadTablePublication = false;
          }, function (err) {
            _this10.loadError();

            _this10.loadTablePublication = false;
          });
        }
      }, {
        key: "loadPublicationDataDetails",
        value: function loadPublicationDataDetails(data) {
          this.loading = false;
          this.docid = data.id;
          this.documentPublicationTypeId = data.document_type_id;
          this.getPublicationPositionLists();
          this.getPublicationTypeLists();
          this.publicationID = data.document_id;
          this.selectedWriterPosition = data.publication_writer_position_id && data.publication_writer_position_id.toString();
          this.selectedPublicationType = data.publication_type_id && data.publication_type_id.toString();
          this.publikasiForm.patchValue({
            name: data.writer_name
          });
          this.publikasiForm.patchValue({
            title: data.title
          });
          this.publikasiForm.patchValue({
            publication_date: data.publish_date
          });
          this.publikasiForm.patchValue({
            link: data.publication_link
          });
          this.haveLinkPublication = true;
          this.publikasiModals.show();
        }
      }, {
        key: "loadDetailReportCardFileData",
        value: function loadDetailReportCardFileData(registration_number) {
          var _this11 = this;

          this.loadtableReportCardData = true;
          this.userService.getReportCardData("registration_number=".concat(registration_number, "&document_type_id=7")).subscribe(function (response) {
            _this11.tableData2 = response.data;
            _this11.loadtableReportCardData = false;

            if (response.data.length !== 0) {
              _this11.noDataDocument = false;
            } else {
              _this11.noDataDocument = true;
            }
          }, function (err) {
            _this11.loadError();

            _this11.loadtableReportCardData = false;
          });
        }
      }, {
        key: "loadDetailCertificateFileData",
        value: function loadDetailCertificateFileData(registration_number) {
          var _this12 = this;

          this.loadtableCertificateData = true;
          this.userService.getDocumentCertificateData("registration_number=".concat(registration_number)).subscribe(function (response) {
            _this12.tableData3 = response.data;
            _this12.loadtableCertificateData = false;

            if (response.data.length !== 0) {
              _this12.noDataDocument = false;
            } else {
              _this12.noDataDocument = true;
            }
          }, function (err) {
            _this12.loadError();

            _this12.loadtableCertificateData = false;
          });
        }
      }, {
        key: "submitReportApprovedDocument",
        value: function submitReportApprovedDocument(data) {
          var _this13 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this13.loading = true;
              var payload = {
                document_id: data.document_id,
                approval_final_status: 1
              };

              _this13.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this13.loadSuccess();

                  _this13.loading = false;

                  _this13.loadDetailReportCardFileData(_this13.registration_number);
                } else {
                  _this13.loading = false;

                  _this13.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this13.loading = false;

                _this13.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitRejectReportApprovedDocument",
        value: function submitRejectReportApprovedDocument(data) {
          var _this14 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this14.loading = true;
              var payload = {
                document_id: data.document_id,
                approval_final_status: 'false'
              };

              _this14.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this14.loadSuccess();

                  _this14.loading = false;

                  _this14.loadDetailReportCardFileData(_this14.registration_number);
                } else {
                  _this14.loading = false;

                  _this14.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this14.loading = false;

                _this14.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitCertificateApprovedDocument",
        value: function submitCertificateApprovedDocument(data) {
          var _this15 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this15.loading = true;
              var payload = {
                document_id: data.document_id,
                approval_final_status: 1
              };

              _this15.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this15.loadSuccess();

                  _this15.loading = false;

                  _this15.loadDetailCertificateFileDataTable(_this15.registration_number);
                } else {
                  _this15.loading = false;

                  _this15.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this15.loading = false;

                _this15.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitRejectCertificateApprovedDocument",
        value: function submitRejectCertificateApprovedDocument(data) {
          var _this16 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this16.loading = true;
              var payload = {
                document_id: data.document_id,
                approval_final_status: 'false'
              };

              _this16.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this16.loadSuccess();

                  _this16.loading = false;

                  _this16.loadDetailCertificateFileDataTable(_this16.registration_number);
                } else {
                  _this16.loading = false;

                  _this16.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this16.loading = false;

                _this16.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitStudyDocument",
        value: function submitStudyDocument() {
          var _this17 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this17.loading = true;
              var payload = {
                document_id: _this17.docid,
                approval_final_status: 1
              };

              _this17.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this17.loadSuccess();

                  _this17.loading = false;

                  _this17.closeEprtTpaModals();

                  _this17.renderTable1();

                  _this17.loadRegistrationDocumentData();
                } else {
                  _this17.loading = false;

                  _this17.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this17.loading = false;

                _this17.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitRejectStudyDocument",
        value: function submitRejectStudyDocument() {
          var _this18 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this18.loading = true;
              var payload = {
                document_id: _this18.docid,
                approval_final_status: 'false'
              };

              _this18.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this18.loadSuccess();

                  _this18.loading = false;

                  _this18.closeEprtTpaModals();

                  _this18.renderTable1();

                  _this18.loadRegistrationDocumentData();
                } else {
                  _this18.loading = false;

                  _this18.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this18.loading = false;

                _this18.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitIjazahDocument",
        value: function submitIjazahDocument() {
          var _this19 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this19.loading = true;
              var payload = {
                document_id: _this19.docid,
                approval_final_status: 1
              };

              _this19.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this19.loadSuccess();

                  _this19.loading = false;

                  _this19.closeIjazahModals();

                  _this19.renderTable1();

                  _this19.loadRegistrationDocumentData();
                } else {
                  _this19.loading = false;

                  _this19.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this19.loading = false;

                _this19.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitIjazahRejectedDocument",
        value: function submitIjazahRejectedDocument() {
          var _this20 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this20.loading = true;
              var payload = {
                document_id: _this20.docid,
                approval_final_status: 'false'
              };

              _this20.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this20.loadSuccess();

                  _this20.loading = false;

                  _this20.closeIjazahModals();

                  _this20.renderTable1();

                  _this20.loadRegistrationDocumentData();
                } else {
                  _this20.loading = false;

                  _this20.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this20.loading = false;

                _this20.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitApprovalTranscriptDocument",
        value: function submitApprovalTranscriptDocument() {
          var _this21 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this21.loading = true;
              var payload = {
                document_id: _this21.documentTranscriptId,
                approval_final_status: 1
              };

              _this21.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this21.loadSuccess();

                  _this21.loading = false;

                  _this21.closeTranscriptModals();

                  _this21.renderTable1();

                  _this21.loadRegistrationDocumentData();
                } else {
                  _this21.loading = false;

                  _this21.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this21.loading = false;

                _this21.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitRejectTranscriptDocument",
        value: function submitRejectTranscriptDocument() {
          var _this22 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this22.loading = true;
              var payload = {
                document_id: _this22.documentTranscriptId,
                approval_final_status: 'false'
              };

              _this22.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this22.loadSuccess();

                  _this22.loading = false;

                  _this22.closeTranscriptModals();

                  _this22.renderTable1();

                  _this22.loadRegistrationDocumentData();
                } else {
                  _this22.loading = false;

                  _this22.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this22.loading = false;

                _this22.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitApprovalParticipantDocument",
        value: function submitApprovalParticipantDocument() {
          var _this23 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this23.loading = true;
              var payload = {
                document_id: _this23.documentidPersonal,
                approval_final_status: 1
              };

              _this23.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this23.loadSuccess();

                  _this23.loading = false;

                  _this23.documentRequirementModalClose();

                  _this23.renderTable1();

                  _this23.loadRegistrationDocumentData();
                } else {
                  _this23.loading = false;

                  _this23.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this23.loading = false;

                _this23.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitRejectParticipantDocument",
        value: function submitRejectParticipantDocument() {
          var _this24 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this24.loading = true;
              var payload = {
                document_id: _this24.documentidPersonal,
                approval_final_status: 'false'
              };

              _this24.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this24.loadSuccess();

                  _this24.loading = false;

                  _this24.documentRequirementModalClose();

                  _this24.renderTable1();

                  _this24.loadRegistrationDocumentData();
                } else {
                  _this24.loading = false;

                  _this24.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this24.loading = false;

                _this24.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitApprovalAbilityDocument",
        value: function submitApprovalAbilityDocument() {
          var _this25 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this25.loading = true;
              var payload = {
                document_id: _this25.documentAbilitytId,
                approval_final_status: 1
              };

              _this25.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this25.loadSuccess();

                  _this25.loading = false;

                  _this25.paymentAbilityModal.hide();

                  _this25.abilityDataForm.reset();

                  _this25.approvedStatus = false;

                  _this25.renderTable1();

                  _this25.loadRegistrationDocumentData();
                } else {
                  _this25.loading = false;

                  _this25.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this25.loading = false;

                _this25.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitRejectAbilityDocument",
        value: function submitRejectAbilityDocument() {
          var _this26 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this26.loading = true;
              var payload = {
                document_id: _this26.documentAbilitytId,
                approval_final_status: 'false'
              };

              _this26.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this26.loadSuccess();

                  _this26.loading = false;

                  _this26.paymentAbilityModal.hide();

                  _this26.abilityDataForm.reset();

                  _this26.approvedStatus = false;

                  _this26.renderTable1();

                  _this26.loadRegistrationDocumentData();
                } else {
                  _this26.loading = false;

                  _this26.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this26.loading = false;

                _this26.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitSupportingApproved",
        value: function submitSupportingApproved() {
          var _this27 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this27.loading = true;
              var payload = {
                document_id: _this27.documentRecommendationId,
                approval_final_status: 1
              };

              _this27.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this27.loadSuccess();

                  _this27.loading = false;

                  _this27.recommendationLetterRequirementModal.hide();

                  _this27.supportingDataForm.reset();

                  _this27.approvedStatus = false;

                  _this27.renderTable1();

                  _this27.loadRegistrationDocumentData();
                } else {
                  _this27.loading = false;

                  _this27.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this27.loading = false;

                _this27.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitSupportingRejected",
        value: function submitSupportingRejected() {
          var _this28 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this28.loading = true;
              var payload = {
                document_id: _this28.documentRecommendationId,
                approval_final_status: 'false'
              };

              _this28.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this28.loadSuccess();

                  _this28.loading = false;

                  _this28.recommendationLetterRequirementModal.hide();

                  _this28.supportingDataForm.reset();

                  _this28.approvedStatus = false;

                  _this28.renderTable1();

                  _this28.loadRegistrationDocumentData();
                } else {
                  _this28.loading = false;

                  _this28.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this28.loading = false;

                _this28.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitApprovalProposalDocument",
        value: function submitApprovalProposalDocument() {
          var _this29 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this29.loading = true;
              var payload = {
                document_id: _this29.docid,
                approval_final_status: 1
              };

              _this29.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this29.loadSuccess();

                  _this29.loading = false;

                  _this29.proposalModal.hide();

                  _this29.proposalForm.reset();

                  _this29.approvedStatus = false;

                  _this29.renderTable1();

                  _this29.loadRegistrationDocumentData();
                } else {
                  _this29.loading = false;

                  _this29.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this29.loading = false;

                _this29.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "submitRejectProposalDocument",
        value: function submitRejectProposalDocument() {
          var _this30 = this;

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
          }).then(function (confirm) {
            if (confirm.value) {
              _this30.loading = true;
              var payload = {
                document_id: _this30.docid,
                approval_final_status: 'false'
              };

              _this30.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this30.loadSuccess();

                  _this30.loading = false;

                  _this30.proposalModal.hide();

                  _this30.proposalForm.reset();

                  _this30.approvedStatus = false;

                  _this30.renderTable1();

                  _this30.loadRegistrationDocumentData();
                } else {
                  _this30.loading = false;

                  _this30.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this30.loading = false;

                _this30.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "createCertificateDocument",
        value: function createCertificateDocument() {
          var _this31 = this;

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
            this.userService.updDocumentCertificateData(this.formDataCertificateUpdated).subscribe(function (res) {
              if (res != null) {
                if (res.status == 'Success') {
                  _this31.loadSuccess();

                  _this31.formDataCertificateUpdated.delete('registration_number');

                  _this31.formDataCertificateUpdated.delete('document_type_id');

                  _this31.formDataCertificateUpdated.delete('certificate_id');

                  _this31.formDataCertificateUpdated.delete('document_id');

                  _this31.formDataCertificateUpdated.delete('name');

                  _this31.formDataCertificateUpdated.delete('description');

                  _this31.formDataCertificateUpdated.delete('certificate_type_id');

                  _this31.formDataCertificateUpdated.delete('certificate_level_id');

                  _this31.formDataCertificateUpdated.delete('publication_year');

                  _this31.formDataCertificateUpdated.delete('certificate_score');

                  _this31.formDataCertificateUpdated.delete('url');

                  _this31.loading = false;

                  _this31.closeCertificateModalDetail();

                  _this31.loadDetailCertificateFileDataTable(_this31.registration_number);
                } else {
                  _this31.loadError();
                }
              } else {
                _this31.loadError();
              }
            }, function (reason) {
              _this31.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });

              _this31.loading = false;
            });
          }
        }
      }, {
        key: "createEprtTpaDocument",
        value: function createEprtTpaDocument() {
          var _this32 = this;

          if (this.eprtAndTpaForm.valid) {
            this.loading = true;

            if (this.documentTypeId == 28) {
              this.formDataStudyUpd.append('document_type_id', '28');
              this.formDataStudyUpd.append('name', 'Document TOEFL');
              this.formDataStudyUpd.append('description', 'Dokumen TOEFL');
              this.formDataStudyUpd.append('year', this.eprtAndTpaForm.controls['publication_year'].value);
              this.formDataStudyUpd.append('score', this.eprtAndTpaForm.controls['eprt_tpa_score'].value);
            } else if (this.documentTypeId == 13) {
              this.formDataStudyUpd.append('document_type_id', '13');
              this.formDataStudyUpd.append('name', 'Dokumen TPA');
              this.formDataStudyUpd.append('description', 'Dokumen TPA');
              this.formDataStudyUpd.append('year', this.eprtAndTpaForm.controls['publication_year'].value);
              this.formDataStudyUpd.append('score', this.eprtAndTpaForm.controls['gpa'].value);
            } else if (this.documentTypeId == 14) {
              this.formDataStudyUpd.append('document_type_id', '14');
              this.formDataStudyUpd.append('name', 'Dokumen IPK');
              this.formDataStudyUpd.append('description', 'Dokumen IPK');
              this.formDataStudyUpd.append('year', '');
              this.formDataStudyUpd.append('score', this.eprtAndTpaForm.controls['eprt_tpa_score'].value);
            } else if (this.documentTypeId == 16) {
              this.formDataStudyUpd.append('document_type_id', '16');
              this.formDataStudyUpd.append('name', 'Kesediaan Promotor');
              this.formDataStudyUpd.append('description', 'Kesediaan Promotor');
              this.formDataStudyUpd.append('year', '');
              this.formDataStudyUpd.append('score', '');
            } else if (this.documentTypeId == 20) {
              this.formDataStudyUpd.append('document_type_id', '20');
              this.formDataStudyUpd.append('name', 'Surat Kesediaan Residensi');
              this.formDataStudyUpd.append('description', 'Surat Kesediaan Residensi');
              this.formDataStudyUpd.append('year', '');
              this.formDataStudyUpd.append('score', '');
            } else if (this.documentTypeId == 21) {
              this.formDataStudyUpd.append('document_type_id', '21');
              this.formDataStudyUpd.append('name', 'Surat Ijin Atasan Langsung');
              this.formDataStudyUpd.append('description', 'Surat Ijin Atasan Langsung');
              this.formDataStudyUpd.append('year', '');
              this.formDataStudyUpd.append('score', '');
            } else if (this.documentTypeId == 27) {
              this.formDataStudyUpd.append('name', this.eprtAndTpaForm.controls['nameCoPromotor'].value);
              this.formDataStudyUpd.append('description', 'Kesediaan Co-Promotor');
              this.formDataStudyUpd.append('year', '');
              this.formDataStudyUpd.append('score', '');
            }

            this.formDataStudyUpd.append('document_id', this.docid);
            this.formDataStudyUpd.append('document_study_id', this.documentStudyId);
            this.formDataStudyUpd.append('number', ''); // this.formDataStudy.append('url', this.documentTypeStudy);

            this.formDataStudyUpd.append('registration_number', this.registration_number);
            this.userService.updDocumentStudy(this.formDataStudyUpd).subscribe(function (res) {
              if (res != null) {
                if (res.status == 'Success') {
                  _this32.loadSuccess();

                  _this32.formDataStudyUpd.delete('registration_number');

                  _this32.formDataStudyUpd.delete('name');

                  _this32.formDataStudyUpd.delete('document_type_id');

                  _this32.formDataStudyUpd.delete('document_id');

                  _this32.formDataStudyUpd.delete('number');

                  _this32.formDataStudyUpd.delete('description');

                  _this32.formDataStudyUpd.delete('score');

                  _this32.formDataStudyUpd.delete('year');

                  _this32.formDataStudyUpd.delete('url');

                  _this32.loading = false;

                  _this32.closeEprtTpaModals();

                  _this32.renderTable1();

                  _this32.loadRegistrationDocumentData();
                } else {
                  _this32.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });

                  _this32.loading = false;
                }
              } else {
                _this32.loadError();

                _this32.loading = false;
              }
            }, function (reason) {
              _this32.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });

              _this32.loading = false;
            });
          }
        }
      }, {
        key: "createIjazahDocument",
        value: function createIjazahDocument() {
          var _this33 = this;

          if (this.ijazahForm.valid) {
            this.loading = true;
            this.formDataIjazahUpd.append('document_type_id', this.documentTypeIjazah);
            this.formDataIjazahUpd.append('document_id', this.docid);

            if (this.documentTypeId == 18) {
              this.formDataIjazahUpd.append('name', 'Ijazah S1');
              this.formDataIjazahUpd.append('participant_id', this.participantId);
            } else if (this.documentTypeId == 19) {
              this.formDataIjazahUpd.append('name', 'Ijazah S2');
              this.formDataIjazahUpd.append('participant_id', this.participantId);
            } else if (this.documentTypeId == 22) {
              this.formDataIjazahUpd.append('name', 'Portofolio');
              this.formDataIjazahUpd.append('participant_id', this.participantId);
            }

            this.userService.updPersonalDocumentData(this.formDataIjazahUpd).subscribe(function (res) {
              if (res.status == 'Success') {
                _this33.formDataIjazahUpd.delete('document_id');

                _this33.formDataIjazahUpd.delete('document_type_id');

                _this33.formDataIjazahUpd.delete('name');

                _this33.formDataIjazahUpd.delete('url');

                _this33.formDataIjazahUpd.delete('url_portofolio');

                _this33.formDataIjazahUpd.delete('participant_id');

                _this33.loadSuccess();

                _this33.loading = false;

                _this33.closeIjazahModals();

                _this33.renderTable1();

                _this33.loadRegistrationDocumentData();
              } else {
                _this33.broadcasterService.notifBroadcast(true, {
                  title: res.status,
                  msg: res.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'error'
                });

                _this33.loading = false;
              }
            }, function (reason) {
              _this33.loading = false;

              _this33.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "createUtbkDocument",
        value: function createUtbkDocument() {
          var _this34 = this;

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
          this.userService.updUtbkdocument(this.formDataUtbkUpd).subscribe(function (res) {
            if (res != null) {
              if (res.status == 'Success') {
                _this34.loadSuccess();

                _this34.formDataUtbkUpd.delete('registration_number');

                _this34.formDataUtbkUpd.delete('name');

                _this34.formDataUtbkUpd.delete('document_id');

                _this34.formDataUtbkUpd.delete('utbk_id');

                _this34.formDataUtbkUpd.delete('description');

                _this34.formDataUtbkUpd.delete('general_reasoning');

                _this34.formDataUtbkUpd.delete('quantitative_knowledge');

                _this34.formDataUtbkUpd.delete('comprehension_general_knowledge');

                _this34.formDataUtbkUpd.delete('comprehension_reading_knowledge');

                _this34.formDataUtbkUpd.delete('math');

                _this34.formDataUtbkUpd.delete('geography');

                _this34.formDataUtbkUpd.delete('historical');

                _this34.formDataUtbkUpd.delete('sociological');

                _this34.formDataUtbkUpd.delete('economy');

                _this34.formDataUtbkUpd.delete('physics');

                _this34.formDataUtbkUpd.delete('chemical');

                _this34.formDataUtbkUpd.delete('biology');

                _this34.formDataUtbkUpd.delete('major_type');

                _this34.formDataUtbkUpd.delete('url');

                _this34.utbkModals.hide();

                _this34.loading = false;

                _this34.renderTable1();

                _this34.loadRegistrationDocumentData();
              } else {
                _this34.broadcasterService.notifBroadcast(true, {
                  title: 'Gagal',
                  msg: res.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'error'
                });

                _this34.loading = false;
              }
            } else {
              _this34.loadError();

              _this34.loading = false;
            }
          }, function (reason) {
            _this34.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });

            _this34.loading = false;
          });
        }
      }, {
        key: "createPublicationData",
        value: function createPublicationData() {
          var _this35 = this;

          this.loading = true;
          var payloadUpd = {
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
            publication_link: this.publikasiForm.controls['link'].value
          };
          this.userService.updDocumentPublication(payloadUpd).subscribe(function (response) {
            if (response.status == 'Success') {
              _this35.loadSuccess();

              _this35.loading = false;

              _this35.getTablePublication();

              _this35.closePublikasiModals();
            } else {
              _this35.loading = false;

              _this35.broadcasterService.notifBroadcast(true, {
                title: response.status,
                msg: response.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
            }
          }, function (reason) {
            _this35.loading = false;

            _this35.broadcasterService.notifBroadcast(true, {
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
        key: "createPersonalDocumentParticipant",
        value: function createPersonalDocumentParticipant() {
          var _this36 = this;

          this.loading = true;

          if (this.participantDocumentForm.valid) {
            this.formDataPersonalUpd.append('document_id', this.documentidPersonal);
            this.formDataPersonalUpd.append('name', this.participantDocumentForm.controls['name'].value);
            this.formDataPersonalUpd.append('description', this.participantDocumentForm.controls['name'].value);
            this.formDataPersonalUpd.append('number', this.participantDocumentForm.controls['number'].value);
            this.userService.updPersonalDocumentData(this.formDataPersonalUpd).subscribe(function (res) {
              if (res != null) {
                if (res.status == 'Success') {
                  _this36.formDataPersonalUpd.delete('document_id');

                  _this36.formDataPersonalUpd.delete('name');

                  _this36.formDataPersonalUpd.delete('description');

                  _this36.formDataPersonalUpd.delete('number');

                  _this36.formDataPersonalUpd.delete('url');

                  _this36.loadSuccess();

                  _this36.documentRequirementModalClose();

                  _this36.renderTable1();

                  _this36.loadRegistrationDocumentData();

                  _this36.loading = false;
                } else {
                  _this36.broadcasterService.notifBroadcast(true, {
                    title: res.status,
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              } else {
                _this36.loadError();
              }
            }, function (reason) {
              _this36.loading = false;

              _this36.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "createSupportingDocument",
        value: function createSupportingDocument() {
          var _this37 = this;

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
            this.userService.updDocumentSupportingData(this.formData2Update).subscribe(function (res) {
              if (res != null) {
                if (res.status == 'Success') {
                  _this37.formData2Update.delete('registration_number');

                  _this37.formData2Update.delete('support_id');

                  _this37.formData2Update.delete('document_id');

                  _this37.formData2Update.delete('name');

                  _this37.formData2Update.delete('description');

                  _this37.formData2Update.delete('pic_name');

                  _this37.formData2Update.delete('pic_phone_number');

                  _this37.formData2Update.delete('pic_email_address');

                  _this37.formData2Update.delete('pic_address');

                  _this37.formData2Update.delete('url');

                  _this37.loadSuccess();

                  _this37.recommendationLetterRequirementModal.hide();

                  _this37.renderTable1();

                  _this37.loadRegistrationDocumentData();

                  _this37.loading = false;
                } else {
                  _this37.loadError();

                  _this37.loading = false;
                }
              } else {
                _this37.loading = false;

                _this37.loadError();
              }
            }, function (reason) {
              _this37.loading = false;

              _this37.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
            });
          } else if (this.documentTypeId == 11) {
            this.formDataAbilityUpd.append('registration_number', this.registration_number);
            this.formDataAbilityUpd.append('support_id', this.documentAbilitySupportingId);
            this.formDataAbilityUpd.append('document_id', this.documentAbilitytId);
            this.formDataAbilityUpd.append('document_type_id', this.documentTypeId);
            this.formDataAbilityUpd.append('name', this.abilityDataForm.controls['name'].value);
            this.formDataAbilityUpd.append('description', this.abilityDataForm.controls['name'].value);
            this.userService.updDocumentSupportingData(this.formDataAbilityUpd).subscribe(function (res) {
              if (res != null) {
                if (res.status == 'Success') {
                  _this37.formDataAbilityUpd.delete('registration_number');

                  _this37.formDataAbilityUpd.delete('support_id');

                  _this37.formDataAbilityUpd.delete('document_id');

                  _this37.formDataAbilityUpd.delete('document_type_id');

                  _this37.formDataAbilityUpd.delete('description');

                  _this37.formDataAbilityUpd.delete('name');

                  _this37.formDataAbilityUpd.delete('url');

                  _this37.loadSuccess();

                  _this37.paymentAbilityModal.hide();

                  _this37.renderTable1();

                  _this37.loadRegistrationDocumentData();

                  _this37.loading = false;
                } else {
                  _this37.loadError();

                  _this37.loading = false;
                }
              } else {
                _this37.loadError();

                _this37.loading = false;
              }
            }, function (reason) {
              _this37.loading = false;

              _this37.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "createProposalDocument",
        value: function createProposalDocument() {
          var _this38 = this;

          if (this.proposalForm.valid) {
            this.loading = true;
            this.formDataProposalUpd.append('title', this.proposalForm.controls['title'].value);
            this.formDataProposalUpd.append('document_id', this.docid);
            this.formDataProposalUpd.append('document_study_id', this.documentStudyId);
            this.userService.updDocumentProposal(this.formDataProposalUpd).subscribe(function (res) {
              if (res != null) {
                if (res.status == 'Success') {
                  _this38.loadSuccess();

                  _this38.formDataProposalUpd.delete('title');

                  _this38.formDataProposalUpd.delete('document_study_id');

                  _this38.formDataProposalUpd.delete('document_id');

                  _this38.formDataProposalUpd.delete('url');

                  _this38.proposalModal.hide();

                  _this38.loading = false;

                  _this38.renderTable1();

                  _this38.loadRegistrationDocumentData();
                } else {
                  _this38.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });

                  _this38.loading = false;
                }
              } else {
                _this38.loadError();

                _this38.loading = false;
              }
            }, function (reason) {
              _this38.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });

              _this38.loading = false;
            });
          }
        }
      }, {
        key: "downloadReportCardData",
        value: function downloadReportCardData(data) {
          window.open(data.url);
        }
      }, {
        key: "openformRaport",
        value: function openformRaport(data) {
          this.reportCardDetailModal.show();
          this.documentIdCheck = data.document_id;
          this.semesterID = data.semester_id;
          this.showMapel = true;
          this.reportCardDataForm.get('url').clearValidators();
          this.reportCardDataForm.get('url').updateValueAndValidity();
          this.reportCardDataForm.patchValue({
            registration_number: this.registration_number
          });
          this.reportCardDataForm.patchValue({
            document_type_id: this.documentTypeId
          });
          this.reportCardDataForm.patchValue({
            semester_name: data.semesters
          });
          this.reportCardDataForm.patchValue({
            range_score: data.range_score && data.range_score.toString()
          });
          this.reportCardDataForm.patchValue({
            math: data.math
          });
          this.reportCardDataForm.patchValue({
            physics: data.physics
          });
          this.reportCardDataForm.patchValue({
            bahasa: data.bahasa
          });
          this.reportCardDataForm.patchValue({
            english: data.english
          });
          this.reportCardDataForm.patchValue({
            biology: data.biology
          });
          this.reportCardDataForm.patchValue({
            chemical: data.chemical
          });
          this.reportCardDataForm.patchValue({
            geography: data.geography
          });
          this.reportCardDataForm.patchValue({
            sociological: data.sociological
          });
          this.reportCardDataForm.patchValue({
            economy: data.economy
          });
          this.reportCardDataForm.patchValue({
            url: ''
          });
          this.documentReportCardId = data.document_report_card_id;
          this.viewDocumentReport();
        }
      }, {
        key: "changeRangeScore",
        value: function changeRangeScore(dataScore) {
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
          } else {
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
      }, {
        key: "viewDocumentReport",
        value: function viewDocumentReport() {
          var _this39 = this;

          this.userService.getReportCardData("registration_number=".concat(this.registration_number, "&document_type_id=7&document_report_card_id=").concat(this.documentReportCardId)).subscribe(function (response) {
            if (response.data.length !== 0) {
              _this39.listDocumentReport = response.data;
            } else {
              _this39.listDocumentReport = '';
            }
          });
        }
      }, {
        key: "loadSemesterDataFilter",
        value: function loadSemesterDataFilter() {
          var _this40 = this;

          this.loadFilter = true;
          this.userService.getSemesterData().subscribe(function (filterArray) {
            var dataSemester = [];
            var x;

            for (var i = 0; i < filterArray.length; i++) {
              x = {
                value: filterArray[i].id.toString(),
                label: filterArray[i].name
              };
              dataSemester.push(x);
              _this40.listSemester = dataSemester;
            }

            _this40.loadFilter = false;
          }, function (err) {
            _this40.loadError();

            _this40.loadFilter = false;
          });
          this.loading = false;
        }
      }, {
        key: "loadRangeScoreDataFilter",
        value: function loadRangeScoreDataFilter() {
          var _this41 = this;

          this.loadFilter = true;
          this.userService.getRangeScoreData().subscribe(function (filterArray) {
            var dataRangeScore = [];
            var x;

            for (var i = 0; i < filterArray.length; i++) {
              x = {
                value: filterArray[i].id.toString(),
                label: filterArray[i].name
              };
              dataRangeScore.push(x);
              _this41.listRangeScore = dataRangeScore;
            }

            _this41.loadFilter = false;
          }, function (err) {
            _this41.loadError();

            _this41.loadFilter = false;
          });
          this.loading = false;
        }
      }, {
        key: "createReportCardDocument",
        value: function createReportCardDocument() {
          var _this42 = this;

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
            this.userService.updDocumentReportCardData(this.formDataUpdate).subscribe(function (res) {
              if (res != null) {
                if (res.status == 'Success') {
                  _this42.formDataUpdate.delete('registration_number');

                  _this42.formDataUpdate.delete('document_type_id');

                  _this42.formDataUpdate.delete('report_id');

                  _this42.formDataUpdate.delete('document_id');

                  _this42.formDataUpdate.delete('semester_id');

                  _this42.formDataUpdate.delete('physics');

                  _this42.formDataUpdate.delete('math');

                  _this42.formDataUpdate.delete('bahasa');

                  _this42.formDataUpdate.delete('english');

                  _this42.formDataUpdate.delete('economy');

                  _this42.formDataUpdate.delete('geography');

                  _this42.formDataUpdate.delete('sociological');

                  _this42.formDataUpdate.delete('biology');

                  _this42.formDataUpdate.delete('chemical');

                  _this42.formDataUpdate.delete('url');

                  _this42.formDataUpdate.delete('url');

                  _this42.loadSuccess();

                  _this42.reportCardDetailModal.hide();

                  _this42.loadDetailReportCardFileData(_this42.registration_number);

                  _this42.loading = false;

                  _this42.closeRaportModalDetail();
                } else {
                  _this42.loadError();

                  _this42.loading = false;
                }
              } else {
                _this42.loadError();

                _this42.loading = false;
              }
            }, function (reason) {
              _this42.loadError();

              _this42.loading = false;
            });
          } else if (this.documentTypeId == 8 || this.documentTypeId == 23 || this.documentTypeId == 24) {
            if (this.transcriptDataForm.valid) {
              this.formData3Updated.append('document_id', this.documentTranscriptId);
              this.formData3Updated.append('report_id', this.documentReportTranscriptId);
              this.formData3Updated.append('registration_number', this.registration_number);
              this.formData3Updated.append('document_type_id', this.documentTypeId);

              if (this.documentTypeId == 23) {
                this.formData3Updated.append('gpa', this.transcriptDataForm.value.gpa);
              } else if (this.documentTypeId == 24) {
                this.formData3Updated.append('gpa', this.transcriptDataForm.value.gpa);
              }

              this.userService.updDocumentReportCardData(this.formData3Updated).subscribe(function (res) {
                if (res != null) {
                  if (res.status == 'Success') {
                    _this42.formData3Updated.delete('document_id');

                    _this42.formData3Updated.delete('report_id');

                    _this42.formData3Updated.delete('registration_number');

                    _this42.formData3Updated.delete('document_type_id');

                    _this42.formData3Updated.delete('gpa');

                    _this42.loadSuccess();

                    _this42.loading = false;

                    _this42.renderTable1();

                    _this42.loadRegistrationDocumentData();

                    _this42.closeTranscriptModals();
                  } else {
                    _this42.loadError();

                    _this42.loading = false;
                  }
                } else {
                  _this42.loadError();

                  _this42.loading = false;
                }
              }, function (reason) {
                _this42.loading = false;

                _this42.broadcasterService.notifBroadcast(true, {
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
      }, {
        key: "closeTranscriptModals",
        value: function closeTranscriptModals() {
          this.transcriptRequirementModal.hide();
          this.isTranscript = false;
          this.transcriptDataForm.reset();
        }
      }, {
        key: "loadDetailCertificateFileDataTable",
        value: function loadDetailCertificateFileDataTable(registration_number) {
          var _this43 = this;

          this.loadtableCertificateData = true;
          this.userService.getDocumentCertificateData("registration_number=".concat(registration_number)).subscribe(function (response) {
            _this43.tableData3 = response.data;
            _this43.loadtableCertificateData = false;
          }, function (err) {
            _this43.loadError();

            _this43.loadtableCertificateData = false;
          });
        }
      }, {
        key: "loadCertificateDetailFileData",
        value: function loadCertificateDetailFileData(data) {
          this.certificateDataForm.get('url').clearValidators();
          this.certificateDataForm.get('url').updateValueAndValidity();
          this.documentIdCheck = data.document_id;
          this.documentCertificateId = data.document_certificate_id;
          this.certificateDataForm.patchValue({
            registration_number: this.registration_number
          });
          this.certificateDataForm.patchValue({
            document_type_id: this.documentTypeId
          });
          this.certificateDataForm.patchValue({
            certificate_level_id: data.certificate_level_id.toString()
          });
          this.certificateDataForm.patchValue({
            certificate_type_id: data.certificate_type_id && data.certificate_type_id.toString()
          });
          this.certificateDataForm.patchValue({
            name: data.certificate_name
          });
          this.certificateDataForm.patchValue({
            certificate_score: data.certificate_score
          });
          this.certificateDataForm.patchValue({
            publication_year: data.publication_year
          });
          this.certificateDataForm.patchValue({
            description: data.description
          });
          this.viewDocumentCertificate();
          this.certificateDetailModal.show();
        }
      }, {
        key: "downloadCertificateData",
        value: function downloadCertificateData(data) {
          window.open(data.certificate_url);
        }
      }, {
        key: "viewDocumentCertificate",
        value: function viewDocumentCertificate() {
          var _this44 = this;

          this.userService.getDocumentCertificateData("registration_number=".concat(this.registration_number, "&document_certificate_id=").concat(this.documentCertificateId)).subscribe(function (response) {
            if (response.data.length !== 0) {
              _this44.listDocumentCertificate = response.data;
            } else {
              _this44.listDocumentCertificate = '';
            }
          });
        }
      }, {
        key: "uploadCertificateFile",
        value: function uploadCertificateFile(event) {
          this.errSize = false;
          this.errType = false;
          var elem = event.target;
          var files = elem.files[0].name;
          var fileType = files.substr(files.lastIndexOf('.') + 1);
          var size = elem.files[0].size;

          if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png') {
              if (size < 2000000) {
                this.formDataCertificateUpdated.append('url', elem.files[0]);
              } else {
                this.errSize = true;
                this.certificateDataForm.get('url').patchValue('');
              }
            } else {
              this.errType = true;
              this.certificateDataForm.get('url').patchValue('');
            }
          }
        }
      }, {
        key: "uploadReportCardFile",
        value: function uploadReportCardFile(event) {
          this.errSize = false;
          this.errType = false;
          var elem = event.target;
          var files = elem.files[0].name;
          var fileType = files.substr(files.lastIndexOf('.') + 1);
          var size = elem.files[0].size;

          if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png' || fileType == 'doc' || fileType == 'docx') {
              if (size < 2000000) {
                this.formDataUpdate.append('url', elem.files[0]);
              } else {
                this.errSize = true;
                this.reportCardDataForm.get('url').patchValue('');
              }
            } else {
              this.errType = true;
              this.reportCardDataForm.get('url').patchValue('');
            }
          }
        }
      }, {
        key: "uploadStudyDocumentEprt",
        value: function uploadStudyDocumentEprt(event) {
          this.errSize = false;
          this.errType = false;
          var elem = event.target;
          var files = elem.files[0].name;
          var fileType = files.substr(files.lastIndexOf('.') + 1);
          var size = elem.files[0].size;

          if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png') {
              if (size < 2000000) {
                this.formDataStudyUpd.append('url', elem.files[0]);
              } else {
                this.errSize = true;
                this.eprtAndTpaForm.get('url').patchValue('');
              }
            } else {
              this.errType = true;
              this.eprtAndTpaForm.get('url').patchValue('');
            }
          }
        }
      }, {
        key: "uploadIjazahDocument",
        value: function uploadIjazahDocument(event) {
          this.errSize = false;
          this.errType = false;
          var elem = event.target;
          var files = elem.files[0].name;
          var fileType = files.substr(files.lastIndexOf('.') + 1);
          var size = elem.files[0].size;

          if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png' || fileType == 'PNG' || fileType == 'JPG' || fileType == 'JPEG' || fileType == 'PDF') {
              if (size < 2000000) {
                this.formDataIjazahUpd.append('url', elem.files[0]);
              } else {
                this.errSize = true;
                this.ijazahForm.get('url').patchValue('');
              }
            } else {
              this.errType = true;
              this.ijazahForm.get('url').patchValue('');
            }
          }
        }
      }, {
        key: "uploadTranscriptFiles",
        value: function uploadTranscriptFiles(event) {
          this.errSize = false;
          this.errType = false;
          var elem = event.target;
          var files = elem.files[0].name;
          var fileType = files.substr(files.lastIndexOf('.') + 1);
          var size = elem.files[0].size;

          if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png' || fileType == 'PNG' || fileType == 'JPG' || fileType == 'JPEG' || fileType == 'PDF') {
              if (size < 2000000) {
                this.formData3Updated.append('url', elem.files[0]);
              } else {
                this.errSize = true;
                this.transcriptDataForm.get('url').patchValue('');
              }
            } else {
              this.errType = true;
              this.transcriptDataForm.get('url').patchValue('');
            }
          }
        }
      }, {
        key: "uploadRequirementDocument",
        value: function uploadRequirementDocument(event) {
          this.errSize = false;
          this.errType = false;
          var elem = event.target;
          var files = elem.files[0].name;
          var fileType = files.substr(files.lastIndexOf('.') + 1);
          var size = elem.files[0].size;

          if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png') {
              if (size < 2000000) {
                this.formDataPersonalUpd.delete('url');
                this.formDataPersonalUpd.append('url', elem.files[0]);
              } else {
                this.errSize = true;
                this.participantDocumentForm.get('url').patchValue('');
              }
            } else {
              this.errType = true;
              this.participantDocumentForm.get('url').patchValue('');
            }
          }
        }
      }, {
        key: "uploadAbilityPayment",
        value: function uploadAbilityPayment(event) {
          this.errSize = false;
          this.errType = false;
          var elem = event.target;
          var files = elem.files[0].name;
          var fileType = files.substr(files.lastIndexOf('.') + 1);
          var size = elem.files[0].size;

          if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png') {
              if (size < 2000000) {
                this.formDataAbilityUpd.append('url', elem.files[0]);
              } else {
                this.errSize = true;
                this.abilityDataForm.get('url').patchValue('');
              }
            } else {
              this.errType = true;
              this.abilityDataForm.get('url').patchValue('');
            }
          }
        }
      }, {
        key: "uploadSupportingFile",
        value: function uploadSupportingFile(event) {
          this.errSize = false;
          this.errType = false;
          var elem = event.target;
          var files = elem.files[0].name;
          var fileType = files.substr(files.lastIndexOf('.') + 1);
          var size = elem.files[0].size;

          if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png') {
              if (size < 2000000) {
                this.formData2Update.append('url', elem.files[0]);
              } else {
                this.errSize = true;
                this.supportingDataForm.get('url').patchValue('');
              }
            } else {
              this.errType = true;
              this.supportingDataForm.get('url').patchValue('');
            }
          }
        }
      }, {
        key: "uploadUtbkDocument",
        value: function uploadUtbkDocument(event) {
          this.errSize = false;
          this.errType = false;
          var elem = event.target;
          var files = elem.files[0].name;
          var fileType = files.substr(files.lastIndexOf('.') + 1);
          var size = elem.files[0].size;

          if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png' || fileType == 'PNG' || fileType == 'JPG' || fileType == 'JPEG' || fileType == 'PDF') {
              if (size < 2000000) {
                this.formDataUtbkUpd.append('url', elem.files[0]);
              } else {
                this.errSize = true;
                this.utbkForm.get('url').patchValue('');
              }
            } else {
              this.errType = true;
              this.utbkForm.get('url').patchValue('');
            }
          }
        }
      }, {
        key: "uploadProposalDocument",
        value: function uploadProposalDocument(event) {
          this.errSize = false;
          this.errType = false;
          var elem = event.target;
          var files = elem.files[0].name;
          var fileType = files.substr(files.lastIndexOf('.') + 1);
          var size = elem.files[0].size;

          if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png') {
              if (size < 5000000) {
                this.formDataProposalUpd.append('url', elem.files[0]);
              } else {
                this.errSize = true;
                this.proposalForm.get('url').patchValue('');
              }
            } else {
              this.errType = true;
              this.proposalForm.get('url').patchValue('');
            }
          }
        }
      }, {
        key: "renderTable1",
        value: function renderTable1() {
          this.dtElements.forEach(function (dtElement, index) {
            if (index == 0) {
              dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              });
            }
          });
        }
      }, {
        key: "closeRaportModalDetail",
        value: function closeRaportModalDetail() {
          this.reportCardDetailModal.hide();
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "closeCertificateModalDetail",
        value: function closeCertificateModalDetail() {
          this.certificateDetailModal.hide();
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "closeUtbkModals",
        value: function closeUtbkModals() {
          this.utbkForm.reset();
          this.utbkModals.hide();
          this.dataUtbkUrl = [];
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
          this.isEprtUpdated = false;
          this.isCoPromotor = false;
        }
      }, {
        key: "closeIjazahModals",
        value: function closeIjazahModals() {
          this.ijazahModals.hide();
          this.ijazahForm.reset();
          this.isIjazahS1 = false;
          this.isIjazahS2 = false;
          this.isPortofolio = false;
        }
      }, {
        key: "closePublikasiModals",
        value: function closePublikasiModals() {
          this.publikasiForm.reset();
          this.publikasiModals.hide();
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "documentRequirementModalClose",
        value: function documentRequirementModalClose() {
          this.documentRequirementModal.hide();
          this.participantDocumentForm.reset();
          !this.haveDocumentPersonal;
        }
      }, {
        key: "noDataFoundAlert",
        value: function noDataFoundAlert() {
          this.loading = false;
          this.loadingDocumentCard = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Info',
            text: 'Tidak ada data ditemukan',
            type: 'error'
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
        key: "fraport",
        get: function get() {
          return this.reportCardDataForm.controls;
        }
      }, {
        key: "fcertif",
        get: function get() {
          return this.certificateDataForm.controls;
        }
      }, {
        key: "fpubd",
        get: function get() {
          return this.publikasiForm.controls;
        }
      }, {
        key: "fid",
        get: function get() {
          return this.ijazahForm.controls;
        }
      }, {
        key: "fprd",
        get: function get() {
          return this.proposalForm.controls;
        }
      }, {
        key: "fed",
        get: function get() {
          return this.eprtAndTpaForm.controls;
        }
      }, {
        key: "ftd",
        get: function get() {
          return this.transcriptDataForm.controls;
        }
      }, {
        key: "fpd",
        get: function get() {
          return this.participantDocumentForm.controls;
        }
      }, {
        key: "fad",
        get: function get() {
          return this.participantDocumentForm.controls;
        }
      }, {
        key: "fsd",
        get: function get() {
          return this.supportingDataForm.controls;
        }
      }, {
        key: "futbk",
        get: function get() {
          return this.utbkForm.controls;
        }
      }, {
        key: "frod",
        get: function get() {
          return this.recommendationS2Form.controls;
        }
      }]);

      return DocumentDataDetailComponent;
    }();

    DocumentDataDetailComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__["BroadcasterService"]
      }, {
        type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"]
      }, {
        type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], DocumentDataDetailComponent.prototype, "dtElements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportCardDetailModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "reportCardDetailModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateDetailModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "certificateDetailModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('publikasiModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "publikasiModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('publicationDataModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "publicationDataModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('eprtAndTpaModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "eprtAndTpaModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ijazahModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "ijazahModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transcriptRequirementModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "transcriptRequirementModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentAbilityModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "paymentAbilityModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recommendationLetterRequirementModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "recommendationLetterRequirementModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transcriptRequirementModalView', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "transcriptRequirementModalView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('utbkModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "utbkModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recommendationS2Modal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "recommendationS2Modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('proposalModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "proposalModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportCardRequirementModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "reportCardRequirementModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateRequirementModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "certificateRequirementModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('documentRequirementModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DocumentDataDetailComponent.prototype, "documentRequirementModal", void 0);
    DocumentDataDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-document-data-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./document-data-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./document-data-detail.component.scss */
      "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__["BroadcasterService"], src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"], src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])], DocumentDataDetailComponent);
    /***/
  },

  /***/
  "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: DocumentDataDetailModule */

  /***/
  function srcAppThemeAdmMpDocumentDataDocumentDataDetailDocumentDataDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentDataDetailModule", function () {
      return DocumentDataDetailModule;
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


    var _document_data_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./document-data-detail.component */
    "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.component.ts");
    /* harmony import */


    var _document_data_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./document-data-detail-routing.module */
    "./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail-routing.module.ts");
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

    var DocumentDataDetailModule = function DocumentDataDetailModule() {
      _classCallCheck(this, DocumentDataDetailModule);
    };

    DocumentDataDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_document_data_detail_component__WEBPACK_IMPORTED_MODULE_3__["DocumentDataDetailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _document_data_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["DocumentDataDetailRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"]]
    })], DocumentDataDetailModule);
    /***/
  }
}]);
//# sourceMappingURL=document-data-detail-document-data-detail-module-es5.js.map